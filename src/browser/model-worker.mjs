import {AutoTokenizer,AutoModelForCausalLM,env} from '@huggingface/transformers';
env.allowLocalModels=true;env.allowRemoteModels=false;env.backends.onnx.wasm.numThreads=1;
let loaded;
self.onmessage=async({data})=>{
 const {id,model:name,prompt,maxNew,base}=data;
 try{
  env.localModelPath=new URL('models/',base).href;env.backends.onnx.wasm.wasmPaths=new URL('runtime/',base).href;
  if(!loaded||loaded.name!==name){
   if(loaded)await loaded.model.dispose();
   self.postMessage({id,progress:'Loading tokenizer…'});
   const tokenizer=await AutoTokenizer.from_pretrained(name);
   const model=await AutoModelForCausalLM.from_pretrained(name,{dtype:'fp32',device:'wasm',progress_callback:p=>{
    self.postMessage({id,progress:p.status==='progress'?`Downloading model · ${Math.round(p.progress)}%`:p.status==='ready'?'Preparing the model…':'Downloading model…'});
   }});
   loaded={name,model,tokenizer};
  }
  self.postMessage({id,progress:'Generating the next decision…'});
  const {tokenizer,model}=loaded;
  const budget=(name==='alfworld'?1792:2048)-maxNew;
  const tokens=tokenizer(prompt,{add_special_tokens:false,truncation:false});
  const ids=tokens.input_ids.tolist()[0];
  if(name==='alfworld'&&ids.length>budget)throw Error('Public prompt exceeds the trained context');
  // Match the existing Craftax policy's left truncation.
  if(ids.length>budget){tokens.input_ids=tokens.input_ids.slice(null,[-budget,null]);tokens.attention_mask=tokens.attention_mask.slice(null,[-budget,null]);}
  const input=Array.from(tokens.input_ids.data,Number);
  const output=await model.generate({...tokens,max_new_tokens:maxNew,do_sample:name==='craftax'&&!data.greedy,temperature:1,top_k:0,top_p:1,pad_token_id:name==='alfworld'?0:0,eos_token_id:name==='alfworld'?2:3});
  const generated=output.tolist()[0].slice(input.length);
  const text=tokenizer.decode(generated,{skip_special_tokens:true}).replaceAll('Ġ',' ').replaceAll('Ċ','\n').replaceAll('▁',' ').trim();
  self.postMessage({id,text,input,tokens:generated.map(Number)});
 }catch(error){self.postMessage({id,error:error.message});}
};
