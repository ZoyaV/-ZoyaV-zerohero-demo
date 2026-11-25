import * as ort from 'onnxruntime-web/wasm';
import {AutoTokenizer, env} from '@huggingface/transformers';

const root = new URL('./', self.location.href);
const models = new URL('models/', root);
const world = new URL('survive/world/', models);
let py, resetWorld, stepWorld, tokenizer, policy, vision, decoder, episode = 42, memory = '';
ort.env.wasm.numThreads = 1;
ort.env.wasm.wasmPaths = new URL('runtime/', root).href;
env.allowLocalModels = true;
env.allowRemoteModels = false;
env.localModelPath = models.href;

async function initialize() {
  const {loadPyodide} = await import(new URL('pyodide.mjs', world));
  py = await loadPyodide({indexURL: world.href});
  await py.loadPackage(['numpy', 'pillow']);
  const archive = await fetch(new URL('crafter.zip', world));
  py.unpackArchive(await archive.arrayBuffer(), 'zip');
  await py.runPythonAsync(await (await fetch(new URL('survive-world.py',root))).text());
  resetWorld = py.globals.get('reset');
  stepWorld = py.globals.get('step');
  resetWorld(episode);
  self.postMessage({status:'Loading the visual policy…'});
  const session = name => ort.InferenceSession.create(new URL('survive/'+name+'.onnx',models).href,
    {executionProviders:['wasm']});
  [tokenizer,policy,vision,decoder] = await Promise.all([
    AutoTokenizer.from_pretrained('survive'), fetch(new URL('survive/policy.json',models)).then(r=>r.json()),
    session('vision'), session('decoder')
  ]);
}
const integers = (values,shape) => new ort.Tensor('int64', BigInt64Array.from(values,BigInt),shape);
function prompt(achievements) {
  const encode = s => tokenizer.encode(s,{add_special_tokens:false});
  const prefix = encode('System:\n'+policy.system+'\nUser:\n');
  const names = Object.keys(achievements).filter(k=>achievements[k]).sort().join(', ') || 'none';
  const suffix = () => encode('\nAccomplished achievements: '+names+'\nYour memory (written by you at the previous step):\n'+(memory || '(empty: this is the first step)')+'\nAssistant:\n');
  if (prefix.length + 66 + suffix().length > policy.prompt_width) memory = '';
  const text = [...prefix,4097,...Array(64).fill(4096),4098,...suffix()];
  const first = prefix.length + 1;
  const slots = text.map((v,i)=>v===4096 ? i-first+1 : 0);
  const positions = [0,1,2].flatMap(axis=>text.map((_,i)=>{
    if(i<first) return i;
    if(i>=first+64) return i-56;
    const patch=i-first;
    return first+(axis===1?Math.floor(patch/8):axis===2?patch%8:0);
  }));
  return {text,slots,positions};
}
function sample(logits) {
  const max=Math.max(...logits);
  const weights=logits.map(v=>Math.exp(v-max));
  let pick=Math.random()*weights.reduce((a,b)=>a+b,0);
  for(let i=0;i<weights.length;i++) if((pick-=weights[i])<=0) return i;
  return weights.length-1;
}
async function decide(rgb,achievements) {
  const {features} = await vision.run({rgb:new ort.Tensor('uint8',rgb,[1,256,256,3])});
  let {text,slots,positions} = prompt(achievements);
  let nextPos=text.length-56;
  let past=new ort.Tensor('float32',new Float32Array(0),[6,2,1,4,0,32]);
  const generated=[];
  for(let i=0;i<policy.max_new_tokens;i++) {
    const out=await decoder.run({ids:integers(text,[text.length]),positions:integers(positions,[3,text.length]),
      slots:integers(slots,[text.length]),visual:features,past});
    past.dispose(); past=out.present;
    const token=sample(out.logits.data); out.logits.dispose();
    if(token===tokenizer.eos_token_id) break;
    generated.push(token);
    text=[token]; slots=[0]; positions=Array(3).fill(nextPos++);
  }
  features.dispose(); past.dispose();
  const raw=tokenizer.decode(generated,{skip_special_tokens:true});
  const parsed=/^\s*<reasoning>([\s\S]*?)<\/reasoning>\s*<action>([^<>]+)<\/action>\s*<memory>([^<>]*)<\/memory>\s*$/i.exec(raw);
  const index=parsed ? policy.actions.findIndex(a=>a.toLowerCase()===parsed[2].trim().toLowerCase()) : -1;
  if(index>=0) memory=parsed[3].trim().slice(0,policy.memory_characters);
  return {index:Math.max(0,index),reasoning:parsed?.[1]?.trim() || raw.match(/<reasoning>([\s\S]*?)<\/reasoning>/i)?.[1]?.trim() || ''};
}
self.onmessage = async () => {
  try {
    if(!decoder) await initialize();
    const frame=JSON.parse(py.runPython('frame()'));
    const rgb=py.runPython('screen()');
    const pixels=rgb instanceof Uint8Array ? rgb : rgb.toJs();
    const {index,reasoning}=await decide(pixels,frame.achievements);
    rgb.destroy?.();
    self.postMessage({frame:{...frame,episode,reasoning,action:policy.actions[index]}});
    if(stepWorld(index)) { memory=''; resetWorld(++episode); }
  } catch(error) {self.postMessage({error:error.message});}
};
