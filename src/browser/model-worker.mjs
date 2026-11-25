import {AutoTokenizer,AutoModelForCausalLM,env} from '@huggingface/transformers';
import {webshopInputs,webshopDecision} from './webshop-policy.mjs';
env.allowLocalModels=true;env.allowRemoteModels=false;env.backends.onnx.wasm.numThreads=1;
let loaded;
self.onmessage=async({data})=>{
 const {id,model:name,prompt,base}=data;
 let maxNew=data.maxNew;
 try{
  env.localModelPath=new URL('models/',base).href;env.backends.onnx.wasm.wasmPaths=new URL('runtime/',base).href;
  if(!loaded||loaded.name!==name){
   if(loaded)await loaded.model.dispose();
   self.postMessage({id,progress:'Loading tokenizer…'});
   const tokenizer=await AutoTokenizer.from_pretrained(name);
   let protocol;
   if(name==='webshop'){
    const response=await fetch(new URL('models/webshop/agent_config.json',base));
    if(!response.ok)throw Error('Could not load the WebShop policy configuration');
    protocol=await response.json();
   }
   const model=await AutoModelForCausalLM.from_pretrained(name,{dtype:'fp32',device:'wasm',progress_callback:p=>{
    self.postMessage({id,progress:p.status==='progress'?`Downloading model · ${Math.round(p.progress)}%`:p.status==='ready'?'Preparing the model…':'Downloading model…'});
   }});
   loaded={name,model,tokenizer,protocol};
  }
  self.postMessage({id,progress:'Generating the next decision…'});
  const {tokenizer,model,protocol}=loaded;
  let tokens;
  if(name==='webshop'){
   ({tokens,maxNew}=webshopInputs(tokenizer,protocol,data.observation,data.history));
  }else{
   const budget=(name==='alfworld'?1792:2048)-maxNew;
   for(const candidate of [].concat(prompt)){tokens=tokenizer(candidate,{add_special_tokens:false,truncation:false});if(tokens.input_ids.size<=budget)break;}
   if(name==='alfworld'&&tokens.input_ids.size>budget)throw Error('Public prompt exceeds the trained context');
   // Match the existing Craftax policy's left truncation.
   if(tokens.input_ids.size>budget){tokens.input_ids=tokens.input_ids.slice(null,[-budget,null]);tokens.attention_mask=tokens.attention_mask.slice(null,[-budget,null]);}
  }
  const input=Array.from(tokens.input_ids.data,Number);
  const output=await model.generate({...tokens,max_new_tokens:maxNew,do_sample:!data.greedy,temperature:1,top_k:0,top_p:1,pad_token_id:tokenizer.pad_token_id,eos_token_id:tokenizer.eos_token_id});
  const generated=output.tolist()[0].slice(input.length);
  const decoded=tokenizer.decode(generated,{skip_special_tokens:true});
  const text=name==='webshop'?decoded.trim():decoded.replaceAll('Ġ',' ').replaceAll('Ċ','\n').replaceAll('▁',' ').trim();
  self.postMessage({id,text,input,tokens:generated.map(Number),...(name==='webshop'?webshopDecision(text):{})});
 }catch(error){self.postMessage({id,error:error.message});}
};
