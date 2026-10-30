const input=document.getElementById('operator-endpoint'),dialog=document.getElementById('operator-dialog');
const config=await fetch('site-config.json').then(r=>r.json());
let stored='';try{stored=localStorage.getItem('zerohero-operator-url')||'';}catch{}
input.value=stored||config.operatorURL||'';
if(stored)window.dispatchEvent(new CustomEvent('zerohero-operator-config',{detail:stored}));
document.getElementById('operator-settings').onclick=()=>dialog.showModal();
document.getElementById('operator-save').onclick=()=>{
 try{
  const url=new URL(input.value.trim());if(url.protocol!=='https:'&&!(['localhost','127.0.0.1'].includes(url.hostname)&&url.protocol==='http:'))throw Error('Use an HTTPS operator address.');
  if(url.username||url.password||url.search||url.hash)throw Error('Use the operator endpoint address without credentials or query parameters.');
  try{localStorage.setItem('zerohero-operator-url',url.href);}catch{}
  window.dispatchEvent(new CustomEvent('zerohero-operator-config',{detail:url.href}));dialog.close();
 }catch(e){document.getElementById('operator-config-error').textContent=e.message;}
};
