/* Load research illustrations only near the article, in tunnel-safe transfers. */
(()=>{
 const section=document.getElementById('research');if(!section)return;
 async function asset(name){
  const block=8192;
  async function part(start){
   for(let attempt=0;;attempt++){
    try{
     const r=await fetch('/article-assets?name='+encodeURIComponent(name),{headers:{Range:`bytes=${start}-${start+block-1}`},signal:AbortSignal.timeout(10000)});
     if(r.status!==206)throw Error('HTTP '+r.status);
     const bytes=new Uint8Array(await r.arrayBuffer()),range=r.headers.get('Content-Range');
     const [last,total]=range.split(/[-/]/).slice(1).map(Number);
     if(bytes.length!==last-start+1)throw Error('Incomplete download');
     return {bytes,total};
    }catch(error){if(attempt===2)throw error;}
   }
  }
  const first=await part(0),pieces=new Array(Math.ceil(first.total/block));pieces[0]=first.bytes;
  let next=1;
  await Promise.all(Array.from({length:4},async()=>{while(next<pieces.length){const i=next++;pieces[i]=(await part(i*block)).bytes;}}));
  return new Response(new Blob(pieces).stream().pipeThrough(new DecompressionStream('gzip'))).blob();
 }
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){if(!entry.isIntersecting)continue;observer.unobserve(entry.target);
   if(entry.target===section){
    const message=document.getElementById('rlod-animation');message.textContent='Loading the research animations…';
    asset('animation.js').then(b=>b.text()).then(source=>{const script=document.createElement('script');script.textContent=source;document.body.append(script);}).catch(()=>{message.textContent='Could not load the animations. Refresh to retry.';});
   }else{
    const image=entry.target;asset(image.dataset.articleAsset).then(blob=>{const url=URL.createObjectURL(blob);image.onload=()=>URL.revokeObjectURL(url);image.src=url;}).catch(()=>{image.alt+=' Image unavailable; use the paper example link below.';});
   }
  }
 },{rootMargin:'300px'});
 observer.observe(section);section.querySelectorAll('img[data-article-asset]').forEach(image=>observer.observe(image));
})();
