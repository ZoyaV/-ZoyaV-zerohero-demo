// Same ZEROHERO loading screen as the server demo; browser lifecycle owns completion.
export function createStartupLoader(){
 let overlay,previousFocus,blocked=[],percent=0;
 function show(){
  if(overlay)return;
  previousFocus=document.activeElement;percent=0;
  overlay=document.createElement('div');overlay.id='demo-loading';
  overlay.innerHTML=`<style>
 #demo-loading{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;background:radial-gradient(ellipse at center,#143d40,#081519 75%);color:#c5dddd;font-family:ui-sans-serif,system-ui,sans-serif;transition:opacity 150ms ease-out}
 #demo-loading.leaving{opacity:0;pointer-events:none}
 #demo-loading .loading-content:focus{outline:none}
 #demo-loading .loading-content{width:min(90vw,760px);text-align:center;padding:32px 8px}
 #demo-loading .loading-spinner{width:42px;height:42px;margin:0 auto 28px;border:3px solid #58ffec26;border-top-color:#58ffec;border-right-color:#e7ff45;border-radius:50%;box-shadow:0 0 18px #58ffec18}
 @keyframes zerohero-loading-spin{to{transform:rotate(360deg)}}
 @keyframes zerohero-loading-pulse{50%{opacity:.4}}
 @media(prefers-reduced-motion:no-preference){#demo-loading .loading-spinner{animation:zerohero-loading-spin 900ms linear infinite}}
 @media(prefers-reduced-motion:reduce){#demo-loading .loading-spinner{animation:none}}
 #demo-loading .loading-logo{position:relative;display:inline-block;font-size:clamp(42px,12vw,140px);font-weight:950;font-style:italic;line-height:1.2;letter-spacing:-.07em;padding-right:.08em;color:#203e42;-webkit-text-stroke:1px #60c5c5;isolation:isolate}
 #demo-loading .loading-fill{position:absolute;inset:0;background:linear-gradient(100deg,#e7ff45 0%,#e7ff45 45%,#58ffec 65%);background-clip:text;-webkit-background-clip:text;color:transparent;-webkit-text-stroke:0;clip-path:inset(0 calc(100% - var(--load,0%)) 0 0);filter:drop-shadow(0 0 15px #58ffec44)}
 #demo-loading .loading-caption{margin:24px 0 0;font-size:16px;line-height:1.5;letter-spacing:.03em}
 #demo-loading button{margin-top:24px;padding:12px 24px;border:1px solid #58ffec;border-radius:12px;background:#143d40;color:#e3fff9;font:600 16px system-ui;cursor:pointer}
 #demo-loading button:focus-visible{outline:3px solid #e7ff45;outline-offset:4px}
 @media(prefers-reduced-motion:no-preference){#demo-loading .loading-fill{transition:clip-path 300ms cubic-bezier(.2,0,0,1)}}
 </style><div class="loading-content" role="dialog" aria-modal="true" aria-label="Starting ZeroHero" tabindex="-1"><div class="loading-spinner" aria-hidden="true"></div><div class="loading-logo" role="progressbar" aria-label="Loading ZeroHero" aria-valuemin="0" aria-valuemax="100"><span aria-hidden="true">ZEROHERO</span><span class="loading-fill" aria-hidden="true">ZEROHERO</span></div><p class="loading-caption" role="status">Loading ZeroHero…</p><button hidden>Retry loading</button></div>`;
  blocked=[...document.body.children].map(element=>[element,element.inert]);
  for(const [element] of blocked)element.inert=true;
  document.body.append(overlay);
  overlay.querySelector('button').onclick=()=>location.reload();
  overlay.querySelector('[role="dialog"]').focus();
  update('Loading the model…');
 }
 function update(text){
  if(!overlay)return;
  const download=text.match(/(\d+)%/);
  percent=Math.max(percent,download?Math.min(85,Number(download[1])* .85):text.startsWith('Generating')?95:text.startsWith('Preparing')?90:2);
  overlay.querySelector('.loading-caption').textContent=text;
  const logo=overlay.querySelector('.loading-logo');logo.style.setProperty('--load',percent+'%');logo.setAttribute('aria-valuenow',String(Math.round(percent)));logo.setAttribute('aria-valuetext',text);
 }
 function finish(){
  if(!overlay)return;
  const completed=overlay;overlay=null;
  completed.querySelector('.loading-logo').style.setProperty('--load','100%');
  completed.querySelector('.loading-logo').setAttribute('aria-valuenow','100');
  completed.querySelector('.loading-caption').textContent='Ready';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
   completed.remove();for(const [element,inert] of blocked)element.inert=inert;
   if(previousFocus?.isConnected)previousFocus.focus();
  }));
 }
 function fail(message){
  if(!overlay)return;
  overlay.querySelector('.loading-caption').textContent='Could not start the model: '+message;
  overlay.querySelector('.loading-spinner').hidden=true;
  const retry=overlay.querySelector('button');retry.hidden=false;retry.focus();
 }
 return {show,update,finish,fail};
}
