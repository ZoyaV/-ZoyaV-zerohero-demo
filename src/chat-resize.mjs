export function setupChatResize(layout, divider, handle, storageKey="zerohero-chat-width", onResize=()=>{}) {
 let preferred=null,drag=null;
 try{const saved=Number(localStorage.getItem(storageKey));if(saved>0&&Number.isFinite(saved))preferred=saved;}catch{}
 function resizeChat(width=preferred){
  const available=layout.getBoundingClientRect().width;
  const max=Math.max(0,Math.floor(Math.min(600,available/2,available-184))),min=Math.min(164,max);
  const value=Math.round(Math.max(min,Math.min(max,width??Math.min(360,Math.max(164,available*.29)))));
  layout.style.setProperty('--chat-width',`${value}px`);
  handle.setAttribute('aria-valuemin',String(Math.ceil(min)));
  handle.setAttribute('aria-valuemax',String(Math.floor(max)));
  handle.setAttribute('aria-valuenow',String(value));
  handle.setAttribute('aria-valuetext',`${value} pixels`);
  onResize();
  return value;
 }
 function chooseWidth(width){
  preferred=resizeChat(width);
  try{localStorage.setItem(storageKey,String(preferred));}catch{}
 }
 const current=()=>Number(handle.getAttribute('aria-valuenow'));
 handle.onpointerdown=event=>{
  if(event.button!==0||!event.isPrimary)return;
  event.preventDefault();handle.focus();handle.setPointerCapture(event.pointerId);
  drag={id:event.pointerId,x:event.clientX,width:current()};divider.dataset.dragging='true';
 };
 handle.onpointermove=event=>{
  if(drag?.id===event.pointerId)resizeChat(drag.width+drag.x-event.clientX);
 };
 function stopDrag(event){
  if(drag?.id!==event.pointerId)return;
  chooseWidth(current());drag=null;divider.dataset.dragging='false';
  if(handle.hasPointerCapture(event.pointerId))handle.releasePointerCapture(event.pointerId);
 }
 handle.onpointerup=stopDrag;handle.onpointercancel=stopDrag;handle.onlostpointercapture=stopDrag;
 handle.onkeydown=event=>{
  const keys={ArrowLeft:current()+16,ArrowRight:current()-16,Home:0,End:Infinity};
  if(!(event.key in keys))return;
  event.preventDefault();chooseWidth(keys[event.key]);
 };
 handle.ondblclick=()=>{
  preferred=null;resizeChat();try{localStorage.removeItem(storageKey);}catch{}
 };
 window.addEventListener('resize',()=>resizeChat());
 resizeChat();
}
