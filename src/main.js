import {setupChatResize} from './chat-resize.mjs';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import preview from './initial-world.json';
import {EffectComposer, RenderPass, EffectPass} from 'postprocessing';
import {toonEffects} from './toon.mjs';
import {shoulderPose,speechPosition} from './camera.mjs';
import {createRobot} from './robot.js';

const $ = id => document.getElementById(id);
function start(data){
try {
const canvas = $('scene');
const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.25;
const scene=new THREE.Scene();
scene.fog=new THREE.Fog(0xc1dce4,35,105);
const sky=new THREE.Mesh(new THREE.SphereGeometry(120,32,16),new THREE.ShaderMaterial({
 side:THREE.BackSide,depthWrite:false,
 vertexShader:'varying vec3 vPosition; void main(){vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
 fragmentShader:'varying vec3 vPosition; void main(){float h=normalize(vPosition).y;vec3 horizon=vec3(.76,.88,.91);vec3 zenith=vec3(.22,.53,.78);gl_FragColor=vec4(mix(horizon,zenith,smoothstep(-.06,.8,h)),1.);}'
}));scene.add(sky);
const camera=new THREE.PerspectiveCamera(38,1,.1,150);
// Opt-in comparison keeps the accepted appearance until visual approval.
const toon=new URLSearchParams(location.search).get('style')==='toon';
const composer=toon?new EffectComposer(renderer):null;
if(composer){
 composer.addPass(new RenderPass(scene,camera));
 composer.addPass(new EffectPass(camera,...toonEffects()));
}
const controls=new OrbitControls(camera,canvas);
controls.enableDamping=true;controls.enablePan=false;controls.maxDistance=48;controls.maxPolarAngle=Math.PI*.49;
let following=true, cameraHeading=0;
function lens(){
 camera.fov=following?68:camera.aspect<1?52:38;
 camera.clearViewOffset();
 if(following)camera.setViewOffset(canvas.clientWidth,canvas.clientHeight,0,-canvas.clientHeight*.15,canvas.clientWidth,canvas.clientHeight);
 camera.updateProjectionMatrix();
}
function follow(){following=true;$('minimap').setAttribute('aria-pressed','false');$('minimap').querySelector('.minimap-hint').textContent='Double-click: overview';controls.enabled=false;cameraHeading=robot.rotation.y;lens();$('reset').setAttribute('aria-pressed','true');$('top').setAttribute('aria-pressed','false');document.querySelector('.scene-label span').textContent='Following the agent';}
function overview(){following=false;$('minimap').setAttribute('aria-pressed','true');$('minimap').querySelector('.minimap-hint').textContent='Double-click: follow';controls.enabled=true;controls.minDistance=16;controls.maxDistance=48;camera.position.set(21,24,26);controls.target.set(0,0,0);lens();controls.update();$('reset').setAttribute('aria-pressed','false');$('top').setAttribute('aria-pressed','true');document.querySelector('.scene-label span').textContent='Full field';}
scene.add(new THREE.HemisphereLight(0xe1f6ec,0x677056,2.1));
const sun=new THREE.DirectionalLight(0xffe0ab,3.2);sun.position.set(-9,19,7);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:.1,far:65});sun.shadow.bias=-.0005;sun.shadow.normalBias=.035;scene.add(sun);
const fill=new THREE.DirectionalLight(0x8ebdd5,.8);fill.position.set(12,8,-10);scene.add(fill);
const mats=new Map();
function material(color){if(!mats.has(color))mats.set(color,new THREE.MeshStandardMaterial({color,roughness:.88,flatShading:true}));return mats.get(color);}
const cube=new THREE.BoxGeometry(1,1,1);
function mesh(geo,color,x,y,z,sx=1,sy=1,sz=1,parent=scene){const m=new THREE.Mesh(geo,material(color));m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
// Decorative clouds never enter the recorded map or agent observation.
const cloudGeo=new THREE.IcosahedronGeometry(1,1);
for(let i=0;i<16;i++){
 const angle=i*Math.PI/8, radius=38+(i%3)*9;
 for(let j=0;j<5;j++){
  const cloud=mesh(cloudGeo,0xf5f3e7,Math.cos(angle)*radius+j*1.6,10+(i%4)*2+Math.sin(j)*.6,Math.sin(angle)*radius,3,1.1+j%2*.5,1.8);
  cloud.castShadow=false;cloud.receiveShadow=false;
 }
}
const terrain=new THREE.Group();scene.add(terrain);
const trees=[];
const green=[0x65815b,0x6c8960,0x708c62,0x627c56];
let mapSignature='';
function drawMap(map){
 const signature=JSON.stringify(map);
 if(signature===mapSignature)return;
 mapSignature=signature;
 for(const old of terrain.children)old.traverse(part=>{
  if(part.isMesh){if(part.geometry!==cube)part.geometry.dispose();if(part.material.transparent)part.material.dispose();}
 });
 terrain.clear();trees.length=0;
for(let row=0;row<16;row++)for(let col=0;col<16;col++){
 const type=map[row][col],x=col-7.5,z=row-7.5;
 const n=((row*73+col*31)%17)/17;
 const color=type===13?0xc7b88c:type===3?0x5d9ca8:green[(row*3+col)%4];
 mesh(cube,color,x,type===3?-.17:-.1,z,.985,type===3?.22:.36,.985,terrain);
 mesh(cube,0x675c48,x,-.58,z,.99,.6,.99,terrain);
 if(type===5){
  const tree=new THREE.Group();terrain.add(tree);trees.push(tree);
  mesh(new THREE.CylinderGeometry(.10,.16,1,6),0x6b523b,x,.53,z,1,1,1,tree);
  const leaf=new THREE.ConeGeometry(.62,1.25,6);
  mesh(leaf,0x284f3e,x,1.10,z,1,1+n*.35,1,tree);
  mesh(leaf,0x3e6950,x,1.65+n*.2,z,.78,.84,.78,tree);
  mesh(leaf,0x568365,x,2.08+n*.2,z,.5,.58,.5,tree);
  for(const part of tree.children){part.material=part.material.clone();part.material.transparent=true;}
 }else if(type===4){
  const rock=mesh(new THREE.DodecahedronGeometry(.58,0),0x9a9f91,x,.34,z,1,.8+n*.6,.9,terrain);rock.rotation.set(.1,n*3,.2);
 }else if(type===2 && n>.74){
  for(let j=0;j<3;j++)mesh(new THREE.ConeGeometry(.035,.17,3),0x9ca76e,x-.24+j*.13,.15,z+.25,1,1,1,terrain);
 }else if(type===3){mesh(cube,0x9bc2c3,x-.14,.0,z,.4,.015,.035,terrain);}
}
 terrain.traverse(part=>part.layers.enable(1));
}
drawMap(data.frames[0].map);
const base=mesh(cube,0x3f4a3c,0,-.97,0,16.15,.18,16.15);base.castShadow=true;
// Decorative horizon only: the recorded 16x16 map remains the playable world.
// One procedural surface avoids allocating thousands of distant tile meshes.
const horizon=new THREE.Mesh(new THREE.PlaneGeometry(240,240),new THREE.ShaderMaterial({
 transparent:true,depthWrite:false,
 vertexShader:`varying vec3 worldPosition;
 void main(){vec4 world=modelMatrix*vec4(position,1.0);worldPosition=world.xyz;gl_Position=projectionMatrix*viewMatrix*world;}`,
 fragmentShader:`varying vec3 worldPosition;
 void main(){
  vec2 p=worldPosition.xz;
  if(abs(p.x)<8.0 && abs(p.y)<8.0)discard;
  float distanceToEye=length(p-cameraPosition.xz);
  float detail=1.0-smoothstep(15.0,40.0,distanceToEye);
  float opacity=1.0-smoothstep(35.0,75.0,distanceToEye);
  if(opacity<0.002)discard;
  vec2 cell=floor(p);
  float variation=fract(sin(dot(cell,vec2(127.1,311.7)))*43758.5453);
  vec3 grass=vec3(.57,.65,.43)+(variation-.5)*.065*detail;
  vec2 edge=min(fract(p),1.0-fract(p));
  vec2 line=1.0-smoothstep(vec2(.008),vec2(.008)+fwidth(p),edge);
  grass=mix(grass,grass*.78,max(line.x,line.y)*detail);
  float mist=smoothstep(13.0,65.0,distanceToEye);
  gl_FragColor=vec4(mix(grass,vec3(.76,.88,.91),mist),opacity);
 }`
}));
horizon.rotation.x=-Math.PI/2;horizon.position.y=.078;scene.add(horizon);
const robot=createRobot();scene.add(robot);
const ring=mesh(new THREE.TorusGeometry(.40,.035,6,40),0xffdf90,0,.12,0);ring.rotation.x=-Math.PI/2;ring.castShadow=false;
const target=mesh(new THREE.TorusGeometry(.34,.045,8,40),0xd5a9e5,data.target[1]-7.5,.15,data.target[0]-7.5);target.rotation.x=-Math.PI/2;
const gem=mesh(new THREE.OctahedronGeometry(.18),0xdfb5e9,data.target[1]-7.5,.62,data.target[0]-7.5);
const path=new THREE.Group();scene.add(path);
const dotGeo=new THREE.CylinderGeometry(.085,.085,.025,12);
const miniCamera=new THREE.OrthographicCamera(-8.6,8.6,8.6,-8.6,.1,60);
miniCamera.position.set(0,30,0);miniCamera.up.set(0,0,-1);miniCamera.lookAt(0,0,0);miniCamera.layers.set(1);
for(const object of [terrain,base,robot,ring,target,gem,path])object.traverse(part=>part.layers.enable(1));
scene.traverse(part=>{if(part.isLight)part.layers.enable(1);});
const miniMarker=new THREE.Group();scene.add(miniMarker);
const arrowShape=new THREE.Shape().moveTo(0,-.72).lineTo(.46,.40).lineTo(-.46,.40).closePath();
const arrowGeometry=new THREE.ShapeGeometry(arrowShape);
for(const [color,scale,order] of [[0x173c32,1.35,999],[0xffd783,1,1000]]){
 const arrow=new THREE.Mesh(arrowGeometry,new THREE.MeshBasicMaterial({color,depthTest:false,depthWrite:false}));
 arrow.rotation.x=-Math.PI/2;arrow.scale.setScalar(scale);arrow.layers.set(1);arrow.renderOrder=order;miniMarker.add(arrow);
}
const miniRoute=new THREE.Line(new THREE.BufferGeometry(),new THREE.LineBasicMaterial({color:0x99fff0,depthTest:false,depthWrite:false}));
miniRoute.layers.set(1);miniRoute.renderOrder=998;scene.add(miniRoute);
// Keep the goal readable above terrain, independently of scene lighting.
const miniTarget=new THREE.Group();scene.add(miniTarget);
for(const [color,inner,outer] of [[0x29152f,.26,.64],[0xff3bbd,.34,.56]]){
 const marker=new THREE.Mesh(new THREE.RingGeometry(inner,outer,40),new THREE.MeshBasicMaterial({color,depthTest:false,depthWrite:false,toneMapped:false,fog:false}));
 marker.rotation.x=-Math.PI/2;marker.layers.set(1);marker.renderOrder=999;miniTarget.add(marker);
}
let index=0,previousTime=0,blend=1;
const start=new THREE.Vector3(),end=new THREE.Vector3();
const directions={1:-Math.PI/2,2:Math.PI/2,3:Math.PI,4:0};
function show(next,animate=false){
 data=next;index=data.frames.length-1;
 const f=data.frames[index];target.position.set(data.target[1]-7.5,.15,data.target[0]-7.5);gem.position.set(data.target[1]-7.5,.62,data.target[0]-7.5);drawMap(f.map);start.copy(robot.position);end.set(f.position[1]-7.5,.1,f.position[0]-7.5);blend=animate?0:1;if(!animate)robot.position.copy(end);
 miniTarget.position.set(target.position.x,4.1,target.position.z);
 robot.rotation.y=directions[f.direction]??0;
 path.clear();
 for(let j=0;j<=index;j++){const p=data.frames[j].position;mesh(dotGeo,0x9cd7d2,p[1]-7.5,.105,p[0]-7.5,1,1,1,path);}
 path.traverse(part=>part.layers.enable(1));
 miniRoute.geometry.dispose();miniRoute.geometry=new THREE.BufferGeometry().setFromPoints(
  data.frames.map(frame=>new THREE.Vector3(frame.position[1]-7.5,3.8,frame.position[0]-7.5)));
 $('minimap').setAttribute('aria-label',`Map: agent row ${f.position[0]}, column ${f.position[1]}; goal row ${data.target[0]}, column ${data.target[1]}; facing ${{1:'left',2:'right',3:'up',4:'down'}[f.direction]||'unknown'}. Double-click to change view.`);
}
$('reset').onclick=follow;$('top').onclick=overview;
const toggleView=()=>following?overview():follow();
canvas.addEventListener('dblclick',toggleView);
$('minimap').addEventListener('dblclick',toggleView);
// Native button activation also exposes the same view to keyboard users.
$('minimap').addEventListener('click',event=>{if(event.detail===0)toggleView();});
// OrbitControls handles pointer input; the same view can be adjusted by keyboard.
canvas.addEventListener('keydown',event=>{
 if(following)return;
 const offset=camera.position.clone().sub(controls.target);
 if(event.key==='ArrowLeft'||event.key==='ArrowRight')offset.applyAxisAngle(new THREE.Vector3(0,1,0),event.key==='ArrowLeft'?.15:-.15);
 else if(event.key==='ArrowUp'||event.key==='ArrowDown')offset.y=Math.max(2,offset.y+(event.key==='ArrowUp'?2:-2));
 else if(event.key==='+'||event.key==='=')offset.multiplyScalar(.9);
 else if(event.key==='-')offset.multiplyScalar(1.1);
 else return;
 event.preventDefault();offset.clampLength(controls.minDistance,controls.maxDistance);camera.position.copy(controls.target).add(offset);controls.update();
});
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
new ResizeObserver(()=>{const {width,height}=canvas.getBoundingClientRect();renderer.setSize(width,height,false);composer?.setSize(width,height);camera.aspect=width/height;lens();$('operator-bubble').dataset.expanded='false';}).observe(canvas);
show(data);
follow();
const focus=new THREE.Vector3();
const bubbleAnchor=new THREE.Vector3();
const sightline=new THREE.Raycaster(),sightDirection=new THREE.Vector3();
renderer.setAnimationLoop(time=>{
 const dt=Math.min((time-previousTime)/1000,.1);previousTime=time;
 blend=Math.min(1,blend+dt*2.7);robot.position.lerpVectors(start,end,blend*blend*(3-2*blend));
 if(blend<1&&!reduce)robot.position.y+=Math.sin(blend*Math.PI)*.14;
 robot.userData.animateWalk(blend<1&&!reduce&&start.distanceToSquared(end)>.01?blend*Math.PI*2:0);
 ring.position.set(robot.position.x,.12,robot.position.z);
 if(following){
  const delta=Math.atan2(Math.sin(robot.rotation.y-cameraHeading),Math.cos(robot.rotation.y-cameraHeading));
  cameraHeading+=delta*(reduce?1:1-Math.exp(-dt*8));
  const pose=shoulderPose(robot.position.x,robot.position.z,cameraHeading);
  camera.position.fromArray(pose.eye);controls.target.fromArray(pose.target);camera.lookAt(controls.target);
  focus.copy(robot.position);focus.y=1.1;
 }
 for(const tree of trees)for(const part of tree.children){part.material.opacity=1;part.material.depthWrite=true;}
 if(following){
  for(const [side,height] of [[0,1.4],[-.4,1.4],[.4,1.4],[0,.65]]){
   focus.copy(robot.position);focus.y=height;
   focus.x+=side*Math.cos(robot.rotation.y);focus.z-=side*Math.sin(robot.rotation.y);
   sightDirection.subVectors(focus,camera.position);sightline.far=sightDirection.length();sightline.set(camera.position,sightDirection.normalize());
   for(const hit of sightline.intersectObjects(trees,true))for(const part of hit.object.parent.children){part.material.opacity=.16;part.material.depthWrite=false;}
  }
 }

 if(!following)controls.update();sky.position.copy(camera.position);if(composer)composer.render();else renderer.render(scene,camera);
 // A second camera reuses this WebGL canvas; no extra renderer or scene copy.
 const mini=$('minimap'),size=mini.clientWidth;
 const miniX=mini.offsetLeft+mini.clientLeft,miniY=canvas.clientHeight-mini.offsetTop-mini.clientTop-mini.clientHeight;
 miniMarker.position.copy(robot.position);miniMarker.position.y=4;miniMarker.rotation.y=robot.rotation.y;
 for(const tree of trees)for(const part of tree.children){part.material.opacity=1;part.material.depthWrite=true;}
 const shadowUpdates=renderer.shadowMap.autoUpdate;renderer.shadowMap.autoUpdate=false;
 renderer.setScissorTest(true);renderer.setScissor(miniX,miniY,size,size);renderer.setViewport(miniX,miniY,size,size);
 renderer.setClearColor(0xa8c2b1,1);renderer.clearDepth();renderer.render(scene,miniCamera);
 renderer.setClearColor(0,0);renderer.shadowMap.autoUpdate=shadowUpdates;
 renderer.setScissorTest(false);renderer.setViewport(0,0,canvas.clientWidth,canvas.clientHeight);
 const bubble=$('agent-bubble'),reply=$('operator-bubble');
 if(!reply.hidden&&reply.dataset.expanded!=='true'&&$('operator-bubble-text').scrollHeight>$('operator-bubble-text').clientHeight+1)reply.dataset.expanded='true';
 for(const role of ['agent','operator']){
  const body=$(`${role}-bubble-text`);
  $(`${role}-scroll-hint`).hidden=body.scrollHeight<=body.clientHeight;
 }
 if(!bubble.hidden){
  bubbleAnchor.copy(robot.position);bubbleAnchor.y+=2.0;bubbleAnchor.project(camera);
  bubble.dataset.onscreen=String(bubbleAnchor.z>-1&&bubbleAnchor.z<1&&Math.abs(bubbleAnchor.x)<1&&Math.abs(bubbleAnchor.y)<1);
  const width=canvas.clientWidth,height=canvas.clientHeight;
  const toolbar=document.querySelector('.world-controls');
  const obstacle=reply.hidden?null:{left:reply.offsetLeft,top:reply.offsetTop,right:reply.offsetLeft+reply.offsetWidth,bottom:reply.offsetTop+reply.offsetHeight};
  const pose=speechPosition({x:(bubbleAnchor.x+1)*width/2,y:(1-bubbleAnchor.y)*height/2},
   {width,height,topInset:Math.max(72,toolbar.offsetTop+toolbar.offsetHeight+12)},{width:bubble.offsetWidth,height:bubble.offsetHeight},obstacle);
  bubble.style.transform=`translate3d(${Math.round(pose.left)}px,${Math.round(pose.top)}px,0)`;
  bubble.style.setProperty('--tail-x',`${pose.tail}px`);
 }
});
return next=>show(next,!reduce);
} catch(error){$('error').hidden=false;$('error').textContent='Could not open the 3D scene. Use a browser with WebGL support. '+error.message;console.error(error);}

}
setupChatResize(document.querySelector('.layout'),$('chat-divider'),$('chat-resize'));
// This page has one flow: launch a game and follow the current run.
const updateScene=start(preview);
const runButton=$('run-model');
let lastVersion='',latestEpisode=null,pollTimer=null,lastActionKey='';
let operatorMode='ai',operatorRevision=0,latestStatus=null,sending=false,switching=false,draftQuestion=null,controllingRun=false;
const messages=new Map();
function showError(error){$('error').hidden=false;$('error').textContent=error.message||String(error);}
function renderControls(){
 const pending=latestStatus?.episode?.pending;
 const question=['running','paused'].includes(latestStatus?.state)&&pending?.awaiting_human?pending.question_id:null;
 if(question!==draftQuestion){draftQuestion=question;$('message').value='';}
 const waiting=latestStatus?.state==='running'&&Boolean(question)&&operatorMode==='human'&&!latestStatus?.answer_submitted&&!sending&&!switching;
 $('message').disabled=!waiting;$('send').disabled=!waiting;
 $('message').placeholder=latestStatus?.state==='paused'?'Game paused':waiting?'Reply to the agent…':operatorMode==='ai'?'AI is replying…':'Wait for a question…';
 $('operator-toggle').disabled=switching||!latestStatus||latestStatus.state==='error';
 $('reply-state').textContent=sending?'Sending reply…':switching?'Switching operator…':latestStatus?.state==='error'?'Cannot connect to the server':latestStatus?.state==='done'?'Game finished':latestStatus?.state==='paused'?'Resume the game to reply':latestStatus?.state==='idle'?'Start the game first':latestStatus?.answer_submitted?'Reply sent':waiting?'The agent is waiting for your reply':operatorMode==='ai'?'AI is replying':'The agent is exploring';
}
function setOperator(mode,revision){
 if(!mode||revision<operatorRevision)return;
 operatorMode=mode;operatorRevision=revision;
 const toggle=$('operator-toggle');toggle.dataset.operator=mode;
 toggle.querySelector('.operator-option').textContent=mode==='ai'?'AI':'Human';
 toggle.setAttribute('aria-pressed',String(mode==='ai'));
 toggle.setAttribute('aria-label',mode==='ai'?'Operator: AI. Switch to human':'Operator: human. Switch to AI');

}
async function post(path,body){
 const response=await request(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
 const data=await response.json();if(!response.ok)throw Error(data.error||'Could not complete the action. Try again.');return data;
}
$('operator-toggle').onclick=async()=>{
 if(switching||!latestStatus)return;
 switching=true;renderControls();
 try{const data=await post('/api/operator',{operator:operatorMode==='human'?'ai':'human',operator_revision:operatorRevision});setOperator(data.operator,data.operator_revision);$('error').hidden=true;}
 catch(error){showError(error);}
 finally{switching=false;renderControls();await poll();}
};
$('reply').onsubmit=async event=>{
 event.preventDefault();
 if($('send').disabled||!$('message').value.trim())return;
 const text=$('message').value,question_id=draftQuestion,operator_revision=operatorRevision;
 sending=true;renderControls();
 try{await post('/api/answer',{question_id,text,operator_revision});
  if(draftQuestion===question_id){$('message').value='';latestStatus.answer_submitted=true;}
  $('error').hidden=true;
 }catch(error){showError(error);}
 finally{sending=false;renderControls();await poll();}
};
function clearBubbles(){
 lastActionKey='';$('agent-bubble-text').getAnimations().forEach(animation=>animation.cancel());
 $('agent-bubble').hidden=true;$('operator-bubble').hidden=true;
 document.querySelector('.world').classList.remove('has-operator');
}
function renderBubbles(episode){
 const frame=episode.pending||episode.frames.at(-2);
 if(!frame){clearBubbles();return;}
 const asking=frame.action==='ASK_OPERATOR';
 const bubble=$('agent-bubble');bubble.hidden=false;bubble.dataset.kind=asking?'question':'action';
 $('agent-bubble-label').textContent=asking?'The agent asks':'';
 const question=frame.question?.trim()&&frame.question.trim()!=='_OPERATOR'?frame.question.trim():'';
 const body=$('agent-bubble-text');
 body.textContent=asking?(question||'Asking for directions…'):frame.action.replace(/^MOVE_/,'').toUpperCase();
 body.lang=asking&&!question?'ru':'en';body.tabIndex=asking?0:-1;
 const actionKey=`${episode.turns+Number(Boolean(episode.pending))}:${frame.action}`;
 if(asking){body.getAnimations().forEach(animation=>animation.cancel());lastActionKey='';}
 else if(actionKey!==lastActionKey){
  body.getAnimations().forEach(animation=>animation.cancel());lastActionKey=actionKey;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  body.animate(reduced?[
   {opacity:0},{opacity:1,offset:.15},{opacity:1,offset:.7},{opacity:0}
  ]:[
   {opacity:0,transform:'translateY(14px) scale(.8)'},
   {opacity:1,transform:'translateY(-4px) scale(1.08)',offset:.2},
   {opacity:1,transform:'translateY(-12px) scale(1)',offset:.65},
   {opacity:0,transform:'translateY(-38px) scale(1)'}
  ],{duration:1200,easing:'ease-out',fill:'forwards'});
 }
 const exchange=episode.frames.findLast(frame=>frame.answer);
 const answer=episode.pending?.action==='ASK_OPERATOR'?'':exchange?.answer;
 if($('operator-bubble-text').textContent!==(answer||''))$('operator-bubble').dataset.expanded='false';
 $('operator-bubble').hidden=!answer;$('operator-bubble-text').textContent=answer||'';
 document.querySelector('.world').classList.toggle('has-operator',Boolean(answer));
}
async function request(path,options){
 try{return await fetch(path,options);}
 catch{throw Error('Cannot connect to the game server. Start the local server and try again.');}
}
const actionNames={LEFT:'Moving left',RIGHT:'Moving right',UP:'Moving up',DOWN:'Moving down',MOVE_LEFT:'Moving left',MOVE_RIGHT:'Moving right',MOVE_UP:'Moving up',MOVE_DOWN:'Moving down',ASK_OPERATOR:'Asking the operator',NOOP:'Waiting'};
function resetRun(){
 clearBubbles();$('message').value='';draftQuestion=null;lastActionKey='';
 lastVersion='';latestEpisode=null;messages.clear();$('dialogue').replaceChildren();$('empty-dialogue').hidden=false;$('dialogue-turn').textContent='';
 $('turn-count').textContent=`0 / ${$('run-progress').max}`;$('question-count').textContent='0';$('run-progress').value=0;
 $('error').hidden=true;$('result').hidden=true;updateScene?.(preview);
}
function renderEpisode(episode){
 latestEpisode=episode;
 $('turn-count').textContent=`${episode.turns} / ${episode.max_steps}`;
 $('question-count').textContent=episode.questions+Number(episode.pending?.action==='ASK_OPERATOR');
 $('run-progress').max=episode.max_steps;$('run-progress').value=episode.turns;
 updateScene?.(episode);
 renderBubbles(episode);
 const exchanges=episode.frames.filter(frame=>frame.question);
 if(episode.pending?.action==='ASK_OPERATOR')exchanges.push(episode.pending);
 $('empty-dialogue').hidden=exchanges.length>0;
 const log=$('dialogue'),history=$('chat-history'),nearBottom=history.scrollHeight-history.scrollTop-history.clientHeight<48;
 for(const [index,exchange] of exchanges.entries()){
  const id=exchange.question_id||String(index);
  const operator=exchange.answer_operator||episode.operator;
  for(const [speaker,text,kind] of [['Agent',exchange.question,'agent'],[operator==='human'?'Human':'AI',exchange.answer,'operator']]){
   if(!text)continue;
   const key=`${id}:${kind}`;
   if(!messages.has(key)){
    const card=document.createElement('div');card.className=`message ${kind}`;
    const label=document.createElement('div');label.className='speaker';label.textContent=speaker;
    const body=document.createElement('p');body.textContent=text;
    card.append(label,body);log.append(card);messages.set(key,card);
   }
  }
 }
 if(nearBottom)history.scrollTop=history.scrollHeight;
}

function setStatus(status){
 if(status.demo||document.documentElement?.dataset?.demo==='true') queueMicrotask(()=>{for(const id of ['run-model', 'operator-toggle', 'reset-game']) {const button=$(id);button.disabled=true;button.title='Shared live demo — AI controls the game. Manual controls are temporarily unavailable.';button.setAttribute('aria-describedby','demo-hint');} $('demo-hint').hidden=false;});

 if(status.run_id&&latestStatus?.run_id&&status.run_id!==latestStatus.run_id)resetRun();
 latestStatus=status;
 setOperator(status.operator,status.operator_revision??operatorRevision);
 renderControls();
 const adviceError=status.episode?.pending?.recommendation_error;
 if(!status.error&&!adviceError)$('error').hidden=true;
 if(operatorMode==='ai'&&adviceError)showError(Error(adviceError));
 if(status.model)$('agent-name').textContent=status.model==='zerohero-craftax-qwen3-13m-strong-ppo-horizon30'?'ZeroHero · 13M PPO':status.model;
 if(status.operator){const name=status.operator==='human'?'You · operator':status.operator==='flashnext'?'Qwen Flash':status.operator;$('operator-name').textContent=name;$('operator-bubble-label').textContent=name;}
 const running=status.state==='running';runButton.disabled=controllingRun;$('reset-game').disabled=controllingRun;runButton.hidden=false;
 runButton.dataset.running=String(running);
 const runLabel=running?'Pause game':status.state==='paused'?'Resume game':status.state==='idle'?'Start game':'Start a new game';
 runButton.setAttribute('aria-label',runLabel);runButton.title=runLabel;
 $('run-label').textContent=running?'Pause':status.state==='paused'?'Resume':status.state==='idle'?'Start game':'New game';
 if(status.state==='idle'){
  $('turn-count').textContent=`0 / ${status.max_steps}`;$('run-progress').max=status.max_steps;
  $('model-status').textContent='Ready to start';$('world-status').textContent='World ready';return;
 }
 if(status.episode){
  const version=`${status.run_id}:${status.steps}:${JSON.stringify(status.episode.pending)}`;
  if(version!==lastVersion){renderEpisode(status.episode);lastVersion=version;}
 }
 if(running){
  $('model-status').textContent=status.episode?.pending?`Playing · turn ${status.steps+1}`:status.steps?`Playing · turn ${status.steps}`:'Loading the model…';
  const action=(latestEpisode?.pending||latestEpisode?.frames.at(-2))?.action;
  $('world-status').textContent=action?(actionNames[action]||`Turn ${status.steps}`):'Preparing the model and operator';
  $('dialogue-hint').textContent='The operator’s reply will appear here when the agent asks for directions.';
 }else if(status.state==='paused'){
  $('model-status').textContent='Game paused';$('world-status').textContent='Game paused';
 }else if(status.state==='done'){
  const won=Boolean(status.episode?.success);
  $('model-status').textContent=won?'Goal reached':'Turn limit reached';$('world-status').textContent=won?'Goal reached':'Turn limit reached';
  $('result').dataset.success=String(won);
  $('result').hidden=false;$('result-title').textContent=won?'The agent found the goal':'The agent did not reach the goal';
  $('result-note').textContent=won?'The agent reached the hidden goal. You can start a new game.':'No turns left. You can start a new game.';
  $('dialogue-hint').textContent='The agent did not ask the operator for help in this game.';
 }else if(status.state==='error'){
  $('model-status').textContent='Run interrupted';$('world-status').textContent='Game stopped';
  $('error').hidden=false;$('error').textContent=status.error;
 }
}
async function poll(){
 clearTimeout(pollTimer);
 try{
  const response=await request('/api/status',{cache:'no-store',signal:AbortSignal.timeout(10000)});
  if(!response.ok)throw Error('Game server unavailable. Start the local server and refresh this page.');
  const status=await response.json();setStatus(status);
  
 }catch(error){
  setStatus({state:'error',error:error.message||'Cannot connect to the server. Check your connection and try again.'});
 }finally{clearTimeout(pollTimer);pollTimer=setTimeout(poll,500);}
}
async function controlRun(action){
 if(controllingRun||!latestStatus)return;
 clearTimeout(pollTimer);controllingRun=true;runButton.disabled=true;$('reset-game').disabled=true;$('error').hidden=true;
 try{
  const response=await request(`/api/${action}`,{method:'POST'});
  if(response.status===409){await poll();return;}
  if(!response.ok)throw Error((await response.json()).error||'Could not start the game. Try again.');
  if(action==='run'||action==='reset')resetRun();
 }catch(error){showError(error);}
 finally{controllingRun=false;await poll();}
}
runButton.onclick=()=>controlRun(latestStatus?.state==='running'?'pause':latestStatus?.state==='paused'?'resume':'run');
$('reset-game').onclick=()=>controlRun('reset');
poll();
