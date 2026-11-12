// Execute the original task's compiled SAS operators; never substitute task rules.
const key=f=>JSON.stringify(f);
export class Alfworld {
 constructor(data){this.data=data;this.reset();}
 reset(){this.values=[...this.data.initial];this.facts=new Map(this.data.facts.map(f=>[key(f),f]));this.moves=0;this.location='';this.observation=this.derive('intro',{});return this.observation;}
 matches(pairs,values=this.values){return pairs.every(([v,value])=>values[v]===value);}
 applicable(){const seen=new Set();return this.data.operators.filter(o=>{if(seen.has(o.name)||!this.matches(o.requires))return false;seen.add(o.name);return true;});}
 commands(){return [...new Set(this.applicable().map(o=>o.command))].sort();}
 get won(){return this.matches(this.data.goal);}
 setFact(f){if(!f)return;const opposite=[f[0].startsWith('not_')?f[0].slice(4):'not_'+f[0],f[1]];this.facts.delete(key(opposite));this.facts.set(key(f),f);}
 step(command){
  const op=this.applicable().find(o=>o.command===command);
  if(!op){this.observation='Nothing happens.';return this.observation;}
  const previous=[...this.values];
  for(const [conditions,v,value] of op.effects)if(this.matches(conditions,previous))this.values[v]=value;
  const layers=[...new Set(this.data.variables.map(v=>v.layer).filter(n=>n>=0))].sort((a,b)=>a-b);
  for(const layer of layers){
   this.data.variables.forEach((v,i)=>{if(v.layer===layer)this.values[i]=this.data.initial[i];});
   let changed=true,iterations=0;
   while(changed){changed=false;if(++iterations>this.data.variables.length)throw Error('Non-convergent task axioms');
    for(const [conditions,v,value] of this.data.axioms)if(this.data.variables[v].layer===layer&&this.matches(conditions)&&this.values[v]!==value){this.values[v]=value;changed=true;}
   }
  }
  this.values.forEach((value,v)=>{if(value!==previous[v])this.setFact(this.data.variables[v].values[value]);});
  // Same-value effects still establish explicit negative facts in TextWorld.
  for(const [conditions,v,value] of op.effects)if(this.matches(conditions,previous))this.setFact(this.data.variables[v].values[value]);
  this.moves++;if(command.startsWith('go to '))this.location=command.slice(6);
  this.observation=this.expand(op.feedback,op.variables);
  return this.observation;
 }
 query(expression,binding={}){
  if(!expression)return [binding];
  const terms=[...expression.matchAll(/([a-z_]+)\(([^)]*)\)/gi)];
  if(!terms.length)throw Error('Unsupported grammar condition: '+expression);
  let bindings=[binding];
  for(const [,predicate,args] of terms){
   const variables=args.split(',').map(s=>s.trim().split(':')[0]);const next=[];
   for(const b of bindings)for(const [name,values] of [...this.facts.values()].sort((a,b)=>{const id=f=>f[1].map(n=>this.data.entities[n]?.id||n).join('\0');return id(a)<id(b)?-1:id(a)>id(b)?1:0;})){
    if(name!==predicate||values.length!==variables.length)continue;
    const c={...b};let ok=true;
    for(let i=0;i<variables.length;i++){const v=variables[i];if(c[v]!==undefined&&c[v]!==values[i]){ok=false;break;}c[v]=values[i];}
    if(ok)next.push(c);
   }
   bindings=next;
  }
  return bindings;
 }
 evaluate(expression,binding){
  if(expression.includes(' or '))return expression.split(' or ').map(x=>this.evaluate(x,binding)).find(Boolean)||'';
  return expression.trim().split(/\s*\+\s*/).map(term=>{
   const literal=term.match(/^(['"])(.*?)\1$/s);if(literal)return literal[2];
   const m=term.match(/^(\w+)\.(name|id|indefinite|definite)$/);
   if(!m||!this.data.entities[binding[m[1]]])throw Error('Unsupported grammar expression: '+term);
   return this.data.entities[binding[m[1]]][m[2]];
  }).join('');
 }
 derive(name,binding){
  const rules=this.data.grammar[name];if(!rules)throw Error('Missing grammar rule '+name);
  const rule=rules.find(r=>this.query(r.condition,binding).length);if(!rule)throw Error('No applicable grammar rule '+name);
  return this.expand(rule.rhs,binding);
 }
 expand(symbols,binding){
  const render=s=>{
   switch(s[0]){
    case 'text':return s[1];case 'rule':return this.derive(s[1],binding);case 'eval':return this.evaluate(s[1],binding);
    case 'query':return this.query(s[2],binding).map(b=>this.expand([s[1]],b)).join('');
    case 'list':{
     const inner=s[1],parts=inner[0]==='query'?this.query(inner[2],binding).map(b=>this.expand([inner[1]],b)):[this.expand([inner],binding)];
     if(!parts.length)return this.derive('list_empty',binding);
     if(parts.length===1)return parts[0];
     return parts.slice(0,-1).join(this.derive('list_separator',binding))+this.derive('list_last_separator',binding)+parts.at(-1);
    }
    default:throw Error('Unsupported grammar symbol '+s[0]);
   }
  };return symbols.map(render).join('');
 }
 scene(){
  const objects={},anchors={};let location='';
  const obj=name=>objects[name]??={id:name,type:name.replace(/ \d+$/,''),properties:{}};
  for(const [name,args] of this.facts.values()){
   if(name==='atlocation')location=args.at(-1);
   else if(name==='receptacleatlocation'){anchors[args[0]]=args[1];obj(args[0]).properties.receptacle=true;}
   else if(name==='objecttype')obj(args[0]);
   else if(name==='inreceptacle'||name==='inreceptacleobject')obj(args[0]).properties.parentReceptacles=[args[1]];
   else if(name==='holds')Object.assign(obj(args.at(-1)).properties,{isPickedUp:true,parentReceptacles:[]});
   else if(args.length===1){const prop={opened:'isOpen',openable:'openable',pickupable:'pickupable',isclean:'isClean',ishot:'isHot',iscool:'isCool',ison:'isToggled',toggleable:'toggleable',issliced:'isSliced'}[name];if(prop)obj(args[0]).properties[prop]=true;}
  }
  for(const o of Object.values(objects)){const p=o.properties;if(p.openable)p.isOpen??=false;p.ObjectTemperature=p.isCool?'Cold':p.isHot?'Hot':'RoomTemp';}
  const nearby=Object.keys(anchors).filter(n=>anchors[n]===location).sort();
  return {agent:{location:nearby.includes(this.location)?this.location:nearby[0]||'',nearby},objects:Object.values(objects).sort((a,b)=>a.id.localeCompare(b.id))};
 }
 // ZeroHero_iclr2027 zerohero/rl/alfworld_standard_rollout.py public_prompt + compact_prompt.
 prompt(dialogue=[],transitions=[],previous=null,recent=6){
  const redact=s=>s.replace(/Your task is to:\s*[^\n]*/gi,'Your task is to: '+this.data.request);
  const parts=['Request: '+this.data.request,'Observation:\n'+redact(this.observation)];
  if(dialogue.length)parts.push('Conversation:\n'+dialogue.map(([q,a])=>`Agent: ${q}\nOperator: ${a}`).join('\n'));
  const history=recent?transitions.slice(-recent):[];
  if(history.length)parts.push('Recent actions:\n'+history.map(([a,o])=>a+'\n'+redact(o)).join('\n'));
  parts.push('Admissible physical commands:\n'+this.commands().map(c=>'- '+c).join('\n'),'Questions remaining: '+Math.max(0,8-dialogue.length));
  let text=parts.join('\n\n');
  if(previous){text+='\n\nPrevious response outcome: '+previous.result;if(['inadmissible','budget_exhausted','unparseable'].includes(previous.result))text+='; choose a different valid action. Previous output: '+previous.response;}
  return text.trim()+'\n\nNext action:\n';
 }
 // Fallbacks for an overlong prompt drop the oldest recent actions first (trim_recent_actions_v1).
 prompts(dialogue,transitions,previous){const n=Math.min(6,transitions.length);return Array.from({length:n+1},(_,i)=>this.prompt(dialogue,transitions,previous,n-i));}
 // Symbolic operator: zerohero/alfworld_hidden_goal.py interpret_question + answer_question.
 answer(question,variant){
  const norm=v=>v.trim().toLowerCase().replace(/[.,]+$/,'').replace(/\s+/g,' ').replace(/^(?:an?|the)\s+/,'');
  const {object:obj,destination:dest,requirement:req,quantity:qty}=this.data.intent,bare=s=>s.replace(/ \d+$/,'');
  const text=norm('ask '+question).slice(4).trim().replace(/\?+$/,'');
  const kind=(()=>{
   if(/^(how|where)\b/.test(text))for(const op of ['heat','cool','clean','examine'])if(new RegExp('\\b'+op+'\\b').test(text))return ['procedure',op];
   if(/^(which|what)\b/.test(text)&&/\b(?:use|take|pick|choose)\b/.test(text)&&(text.includes(obj)||/\b(?:one|object|instance)\b/.test(text)))return ['identity'];
   const from=text.match(/^where (?:should|can) i take (.+?) from$/);if(from)return ['location',norm(from[1])];
   if(text.startsWith('location '))return ['location',norm(text.slice(9))];
   for(const [name,k] of [['destination','destination'],['requirement','requirement'],['treatment','requirement'],['state','requirement'],['quantity','quantity']])
    if(text.startsWith(name+' ')){const target=norm(text.slice(name.length));if(target===obj||bare(target)===obj)return [k];}
   if(['destination','target','where to put it'].includes(text)||/where.*(?:put|place|bring|leave|take it|go)|which (?:receptacle|destination)/.test(text))return ['destination'];
   if(['quantity','count'].includes(text)||text.includes('how many'))return ['quantity'];
   if(['requirement','state','treatment','goal','task'].includes(text)||/what.*(?:do|need)|should.*(?:clean|heat|cool|examine)|treatment|condition/.test(text))return ['requirement'];
   if(text.startsWith('where')){const t=text.replace(/^(?:where (?:can i find|is|are|should i look for))\s+/,'');if(t===text)return ['unsupported'];const target=norm(t);return ['location',['it','them','the object','object'].includes(target)?obj:target];}
   return ['unsupported'];
  })();
  const options={destination:[`The destination is ${dest}.`,`Use the ${dest} as the destination.`],requirement:[`Please ${req}.`,`What I need is for you to ${req}.`],quantity:[`I need ${qty} ${obj} object(s).`,`The required number is ${qty}.`]};
  if(options[kind[0]])return options[kind[0]][variant%2];
  if(kind[0]==='identity')return `Any matching ${obj} is acceptable. Follow the requested treatment and quantity.`;
  if(kind[0]==='procedure')return {heat:'Hold the object, go to a microwave, then use the admissible heat command with that microwave.',cool:'Hold the object, go to a fridge, then use the admissible cool command with that fridge.',clean:'Hold the object, go to a sinkbasin, then use the admissible clean command with that sinkbasin.',examine:'Hold the object, go to the receptacle supporting the lamp, then use the lamp. A lamp itself is not a navigable receptacle.'}[kind[1]];
  if(kind[0]==='location'){
   const target=kind[1],cmp=(a,b)=>a<b?-1:a>b?1:0;
   const matches=Object.entries(this.locations()).sort(([a],[b])=>cmp(a,b)).filter(([o])=>o===target||bare(o)===target);
   if(!matches.length)return `I cannot determine where ${target} is.`;
   const facts=matches.map(([o,l])=>`${o} is in or on ${l}`).join('; ');return facts[0].toUpperCase()+facts.slice(1)+'.';
  }
  return 'I can clarify the destination, treatment, quantity, object choice/location, or explain heating, cooling, cleaning, and examination.';
 }
 // zerohero/alfworld_dialogue.py locations_from_facts.
 locations(){
  const positions={},candidates={},rel=new Set(['at','in','inside','on','inreceptacle','onreceptacle','objectatreceptacle']);
  for(const [name,args] of this.facts.values()){
   if(['objectatlocation','receptacleatlocation'].includes(name)&&args.length>=2)(positions[args[0]]??=new Set()).add(args[1]);
   if(rel.has(name)&&args.length>=2&&args[0]&&args[1]&&args[0]!=='player')(candidates[args[0]]??=new Set()).add(args[1]);
  }
  const near=(o,l)=>[...(positions[o]||[])].some(p=>positions[l]?.has(p));
  return Object.fromEntries(Object.entries(candidates).map(([o,ls])=>[o,[...ls].sort((a,b)=>(near(o,b)-near(o,a))||(a<b?-1:a>b?1:0))[0]]));
 }
}
