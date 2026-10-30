import {Alfworld} from './alfworld.mjs';
import {Craftax} from './craftax.mjs';
const clone=value=>structuredClone(value);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
export function install(kind){
 const network=window.fetch.bind(window),base=new URL('./',location.href),path=kind==='alfworld'?'alfworld':'craftax';
 let game,config,state='idle',runId='',revision=0,operator='ai',version=0,step=0,worker,seq=0,answerWaiter;
 let dialogue=[],transitions=[],trace=[],frames=[],pending=null,action='',error='',submitted=false;
 const ready=Promise.all([network(new URL(`data/${path}.json`,base)).then(r=>{if(!r.ok)throw Error('Environment data unavailable');return r.json();}),network(new URL('site-config.json',base)).then(r=>r.json())]).then(([data,c])=>{config=c;try{config.operatorURL=localStorage.getItem('zerohero-operator-url')||c.operatorURL;}catch{}game=kind==='alfworld'?new Alfworld(data):new Craftax(data);});
 const scene=()=>kind==='alfworld'?{episode_id:runId,renderer:'three-textworld',step,scene:'ALFWorld kitchen',...game.scene(),dialogue:dialogue.flatMap(([q,a])=>[{role:'agent',text:q},{role:'operator',text:a}]),trace:clone(trace),pending:clone(pending),request:game.data.request,action,finished:state==='done',success:game.won,model:'ZeroHero · 5M · browser'}:null;
 const currentFrame=()=>({position:[...game.position],direction:game.direction,map:game.world.map,action:'READY',question:'',answer:'',reasoning:''});
 function status(){
  const common={state,run_id:runId,operator,operator_revision:revision,answer_submitted:submitted,max_steps:kind==='alfworld'?60:100,error:error||undefined};
  return kind==='alfworld'?{...common,snapshot:runId?scene():null}:{...common,model:'ZeroHero · 13M · browser',steps:step,episode:runId?{seed:game.world.seed,target:game.target,turns:step,questions:dialogue.length,success:game.won,frames:[...clone(frames),currentFrame()],pending:clone(pending),operator,max_steps:100}:null};
 }
 function cancel(){version++;worker?.terminate();worker=null;answerWaiter?.reject(Error('Episode reset'));answerWaiter=null;}
 function generate(prompt){
  worker??=new Worker(new URL('model-worker.js',base),{type:'module'});
  const id=++seq;
  return new Promise((resolve,reject)=>{
   const w=worker;
   const listener=event=>{if(event.data.id!==id)return;w.removeEventListener('message',listener);event.data.error?reject(Error(event.data.error)):resolve(event.data);};
   w.addEventListener('message',listener);w.addEventListener('error',e=>reject(Error(e.message)),{once:true});
   w.postMessage({id,model:path,prompt,maxNew:kind==='alfworld'?96:256,base:base.href});
  });
 }
 const active=epoch=>epoch===version&&state!=='done'&&state!=='idle';
 async function unpaused(epoch){while(active(epoch)&&state==='paused')await sleep(80);return active(epoch);}
 async function advise(question,questionId,epoch,operatorRevision,attempt=0){
  if(!config.operatorURL){error='Connect the language-model operator in Settings, or switch to Human.';return;}
  try{
   const context=kind==='alfworld'?{question,intent:game.data.intent,objects:game.scene().objects,conversation:dialogue}:game.operatorContext(question);
   const response=await network(config.operatorURL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({world:kind,context}),signal:AbortSignal.timeout(90000)});
   const data=await response.json();if(!response.ok)throw Error(data.error||'Operator unavailable');
   if(!active(epoch)||pending?.question_id!==questionId)return;
   if(typeof data.answer!=='string'||!data.answer.trim())throw Error('Operator returned an empty answer');
   pending.recommendation=data.answer.trim();pending.recommendation_state='ready';
   if(operator==='ai'&&revision===operatorRevision&&state==='running')submit({question_id:questionId,text:data.answer,operator_revision:revision},'ai');
  }catch(e){if(active(epoch)&&pending?.question_id===questionId){pending.recommendation_state='error';error=e.message;if(attempt<3){await sleep([3000,7000,15000][attempt]);if(active(epoch)&&operator==='ai'&&revision===operatorRevision&&pending?.question_id===questionId&&!submitted){pending.recommendation_state='loading';error='';void advise(question,questionId,epoch,operatorRevision,attempt+1);}}}}
 }
 function submit(body,source){
  if(state!=='running'||!pending||submitted||body.question_id!==pending.question_id||body.operator_revision!==revision||operator!==source||typeof body.text!=='string'||!body.text.trim()||body.text.length>4000)throw Error('Question closed, paused, or operator changed');
  submitted=true;answerWaiter.resolve(body.text.trim());return status();
 }
 async function ask(question,epoch,frame){
  const questionId=`${runId}:${step}`;submitted=false;
  pending={awaiting_human:true,question_id:questionId,question,recommendation_state:'loading',...(kind==='craftax'?{...frame,action:'ASK_OPERATOR',question_id:questionId,question,answer:''}:{})};
  if(kind==='alfworld')trace.at(-1).action='ask '+question;
  const wait=new Promise((resolve,reject)=>{answerWaiter={resolve,reject};});
  if(operator==='ai')void advise(question,questionId,epoch,revision);
  const answer=await wait;if(!await unpaused(epoch))return;
  dialogue.push([question,answer]);if(kind==='craftax')game.dialogue=dialogue;
  if(kind==='alfworld')trace.at(-1).answer=answer;else Object.assign(frame,{question,answer,action:'ASK_OPERATOR',answer_operator:operator});
  pending=null;answerWaiter=null;submitted=false;error='';return answer;
 }
 function parse(text){
  if(kind==='alfworld'){const xml=text.match(/<action>\s*([\s\S]*?)\s*<\/action>/i);return (xml?.[1]||text.match(/action:\s*([^\n]+)/i)?.[1]||'').trim().toLowerCase();}
  const xml=text.match(/<action>\s*([\s\S]*?)\s*<\/action>/i);return (xml?.[1]||'NOOP').trim();
 }
 async function run(epoch){
  try{
   while(active(epoch)&&step<(kind==='alfworld'?60:100)){
    if(!await unpaused(epoch))return;
    const result=await generate(kind==='alfworld'?game.prompt(dialogue,transitions):game.prompt());
    if(!await unpaused(epoch))return;
    action=parse(result.text);step++;
    const frame=kind==='craftax'?{...currentFrame(),action,reasoning:result.text,question_id:`${runId}:${step}`}:null;
    if(kind==='alfworld')trace.push({observation:game.observation,after:'',action,response:result.text});
    if(action.toLowerCase().startsWith('ask ')&&(kind==='craftax'||dialogue.length<8))await ask(action.slice(4).trim(),epoch,frame);
    else if(kind==='alfworld'){
     if(game.commands().includes(action)){const observation=game.step(action);transitions.push([action,observation]);trace.at(-1).after=observation;}
     else trace.at(-1).result=action.startsWith('ask ')?'budget_exhausted':'inadmissible';
    }else{
     const move=action.toUpperCase().replace(/^MOVE_/,'');game.step(['LEFT','RIGHT','UP','DOWN','NOOP'].includes(move)?move:'NOOP');
    }
    if(!active(epoch))return;
    if(frame)frames.push(frame);
    if(game.won||(kind==='alfworld'&&game.moves>=50)){state='done';return;}
    await sleep(900);
   }
   if(active(epoch))state='done';
  }catch(e){if(epoch===version){error=e.message;state='error';}}
 }
 async function command(name,body){
  if(name==='run'||name==='reset'){
   if(name==='run'&&state==='running')return new Response(JSON.stringify({error:'Game already running'}),{status:409});
   cancel();game.reset();runId=crypto.randomUUID();state='running';step=0;dialogue=[];transitions=[];frames=[];pending=null;action='';error='';submitted=false;
   trace=kind==='alfworld'?[{observation:game.observation,after:'',action:''}]:[];
   void run(version);
  }else if(name==='pause'){if(state==='running')state='paused';}
  else if(name==='resume'){
   if(state==='paused'){state='running';if(operator==='ai'&&pending?.recommendation_state==='ready'&&!submitted)submit({question_id:pending.question_id,text:pending.recommendation,operator_revision:revision},'ai');}
  }else if(name==='operator'){
   if(body.operator_revision!==revision||!['ai','human'].includes(body.operator))throw Error('Operator changed; try again');
   operator=body.operator;revision++;error='';
   if(pending&&!submitted&&operator==='ai'){
    if(pending.recommendation_state==='ready'&&state==='running')submit({question_id:pending.question_id,text:pending.recommendation,operator_revision:revision},'ai');
    else void advise(pending.question,pending.question_id,version,revision);
   }
  }else if(name==='answer')return submit(body,'human');
  else throw Error('Unsupported local command');
  return status();
 }
 window.fetch=async(input,options={})=>{
  const url=new URL(input instanceof URL?input.href:typeof input==='string'?input:input.url,location.href);
  const api=url.origin===location.origin&&url.pathname.startsWith('/api/');
  if(api){
   await ready;const name=url.pathname.split('/').at(-1);
   try{const data=name==='status'?status():await command(name,options.body?JSON.parse(options.body):{});return data instanceof Response?data:Response.json(data);}
   catch(e){return Response.json({error:e.message},{status:409});}
  }
  // Retained viewers use root-relative asset URLs; map them to the Pages project base.
  if(url.origin===location.origin&&url.pathname==='/alfred-initial.json')return network(new URL('alfred-initial.json',base),options);
  return network(input,options);
 };
 // Runtime configuration is public; never store an upstream API credential here.
 window.addEventListener('zerohero-operator-config',event=>{config.operatorURL=event.detail;error='';if(pending&&operator==='ai'&&!submitted)void advise(pending.question,pending.question_id,version,revision);});
}
