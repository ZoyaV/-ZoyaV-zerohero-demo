import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {EffectComposer, RenderPass, EffectPass} from 'postprocessing';
import {toonEffects} from './toon.mjs';
import {createRobot} from './robot.js';

// Stylized layout, not reconstructed THOR geometry. Object relations are factual.
export function createKitchen(canvas, toggle, hint) {
  const speech=document.getElementById('robot-speech');
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.1;
  const scene=new THREE.Scene(); scene.background=new THREE.Color(0xa6c4b9);
  scene.fog=new THREE.Fog(0xa6c4b9,30,65);
  const camera=new THREE.PerspectiveCamera(43,1,.1,100);
  const controls=new OrbitControls(camera,canvas); controls.enableDamping=true;
  controls.target.set(0,1,0);controls.minDistance=3;controls.maxDistance=28;controls.maxPolarAngle=Math.PI*.47;
  const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
  composer.addPass(new EffectPass(camera,...toonEffects()));
  scene.add(new THREE.HemisphereLight(0xfff6df,0x547365,2.1));
  const sun=new THREE.DirectionalLight(0xffecd0,2.7);sun.position.set(5,12,7);sun.castShadow=true;
  sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-14,right:14,top:14,bottom:-14});sun.shadow.bias=-.0005;scene.add(sun);
  const materials=new Map();
  const mat=color=>{if(!materials.has(color))materials.set(color,new THREE.MeshStandardMaterial({color,roughness:.8}));return materials.get(color);};
  function box(parent,size,pos,color,r=.06){
    const mesh=new THREE.Mesh(new RoundedBoxGeometry(...size,2,r),mat(color));
    mesh.position.set(...pos);mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);return mesh;
  }
  box(scene,[15,.25,13],[0,-.17,0],0x536e63);
  for(let x=-7;x<8;x++)for(let z=-6;z<7;z++)box(scene,[.97,.025,.97],[x,-.025,z],(x+z)%2?0xc6c6ac:0xdbd6bc,.01);
  box(scene,[15,4,.22],[0,2,-6.7],0xc9d7bd);
  box(scene,[.22,4,13],[-7.7,2,-.3],0xb0c7b2);
  // Window, sill and warm trim.
  box(scene,[4.8,2.1,.12],[-2,2.6,-6.5],0x729e99);
  for(const x of [-4.5,-2,.5])box(scene,[.12,2.3,.2],[x,2.6,-6.35],0xf2e2b9);
  for(const y of [1.45,2.6,3.75])box(scene,[5.1,.12,.2],[-2,y,-6.35],0xf2e2b9);
  box(scene,[5.5,.12,.6],[-2,1.4,-6.3],0xf1dfb5);
  const robot=createRobot();scene.add(robot);
  const target=new THREE.Vector3(0,0,2);let route=[],station;robot.position.copy(target);
  const furniture=new THREE.Group(),items=new THREE.Group();scene.add(furniture,items);
  const anchors=new Map(),meshes=new Map(),doors=new Map(),labels=[];
  let episode,following=false,initialized=false,paused=false,last=performance.now(),phase=0;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function label(text,parent,y){
    const c=document.createElement('canvas');c.width=512;c.height=80;const ctx=c.getContext('2d');
    ctx.fillStyle='#203b35';ctx.beginPath();ctx.roundRect(0,0,512,80,18);ctx.fill();
    ctx.font='600 36px system-ui';ctx.textAlign='center';ctx.fillStyle='#fff0cf';ctx.fillText(text,256,53);
    parent.userData.label=text;
    const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;
    const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,depthTest:false}));sprite.scale.set(2.1,.328,1);sprite.position.y=y;parent.add(sprite);labels.push(sprite);
  }
  function clear(group){for(const child of [...group.children]){group.remove(child);child.traverse(n=>{n.geometry?.dispose();if(n.isSprite){n.material.map.dispose();n.material.dispose();}});}}
  function build(objects){
    for(const mesh of meshes.values()){if(mesh.parent===robot){robot.remove(mesh);mesh.traverse(n=>n.geometry?.dispose());}}
    clear(furniture);clear(items);anchors.clear();meshes.clear();doors.clear();labels.length=0;
    const receptacles=objects.filter(o=>o.properties.receptacle);
    // Keep important work surfaces at ground level; cabinets and drawers have their own row.
    receptacles.sort((a,b)=>{
      const priority=o=>/fridge|countertop|sinkbasin|microwave|diningtable/.test(o.type)?0:1;
      return priority(a)-priority(b)||a.id.localeCompare(b.id,undefined,{numeric:true});
    });
    receptacles.forEach((o,i)=>{
      const type=o.type, n=Number(o.id.split(' ').at(-1))||1;
      let x=0,z=-5.2,angle=0,base=0,width=1.65,depth=1.1;
      let height=1.15;
      if(type==='fridge'){x=-5.6;height=2.8;}
      else if(type==='countertop'){x=-3.2+(n-1)*2.2;width=2.15;}
      else if(type==='sinkbasin'){x=1.3;width=2.15;}
      else if(type==='microwave'){x=4.4;base=1.15;height=.8;}
      else if(type==='cabinet'){
        height=.9;width=1.45;depth=.65;base=2.45;
        if(n<=7){x=-5+(n-1)*1.65;z=-5.65;}
        else{x=-6.7;z=-4.3+(n-8)*1.6;angle=Math.PI/2;}
      }
      else if(type==='drawer'){x=-3.2+(n-1)*2.2;base=.12;height=.75;depth=1.05;}
      else if(type==='shelf'){x=6.2;z=-.8;base=.55+(n-1)*.85;height=.08;width=1.7;angle=-Math.PI/2;}
      else if(type==='diningtable'){x=3.5;z=2.5;width=2.8;depth=1.7;angle=Math.PI;}
      else if(type==='stoveburner'){x=3.2+((n-1)%2)*.65;z=-5.3+Math.floor((n-1)/2)*.5;base=1.18;height=.06;width=.58;depth=.45;}
      else if(type==='garbagecan'){x=-5.8;z=3;height=.9;width=.75;depth=.75;angle=Math.PI;}
      else if(type==='toaster'){x=-2.5;base=1.2;height=.35;width=.65;depth=.55;}
      else if(type==='coffeemachine'){x=-3.6;base=1.2;height=.7;width=.5;depth=.55;}
      else{x=-6.7;z=-3+(i%6)*1.6;angle=Math.PI/2;}
      const g=new THREE.Group();g.position.set(x,base,z);g.rotation.y=angle;furniture.add(g);
      const color=/fridge/.test(type)?0xc4ddd0:/microwave/.test(type)?0xe9d8b7:/cabinet|drawer/.test(type)?0x769a84:0x8daa8e;
      box(g,[width,height,depth],[0,height/2,0],color);
      box(g,[width+.1,.1,depth+.12],[0,height,.04],0xf0dfb9);
      const face=new THREE.Group();face.position.set(-width/2+.03,.05,depth/2+.02);g.add(face);
      if(height>.3)box(face,[width-.06,height-.12,.08],[(width-.06)/2,(height-.12)/2,0],color);
      if(height>.6)box(face,[.065,.24,.065],[width-.22,height*.65,.08],0xe8c68e,.025);
      if(o.properties.openable)doors.set(o.id,face);
      if(/microwave/.test(type))box(face,[.85,.58,.04],[.56,.82,.065],0x294c49);
      if(/sink/.test(type)){
        box(g,[1,.045,.62],[0,height+.07,.03],0x6e9993);
        box(g,[.07,.5,.07],[.42,height+.25,-.25],0xc9d8cb,.025);
        box(g,[.35,.07,.07],[.28,height+.5,-.25],0xc9d8cb,.025);
      }
      if(/stoveburner/.test(type)){
        const ring=new THREE.Mesh(new THREE.TorusGeometry(.29,.035,8,24),mat(0x304b42));ring.rotation.x=Math.PI/2;ring.position.y=height+.08;g.add(ring);
      }
      if(!/stoveburner|drawer|shelf/.test(type))label(o.id,g,height+.25);
      anchors.set(o.id,{group:g,height:height+base,position:new THREE.Vector3(x,0,z),approach:new THREE.Vector3(Math.sin(angle)*1.65+x,0,Math.cos(angle)*1.65+z)});
    });
    for(const o of objects.filter(o=>!o.properties.receptacle)){
      const g=new THREE.Group();items.add(g);
      const type=o.type, color=/bread/.test(type)?0xc88c48:/apple|tomato/.test(type)?0xdd7152:/lettuce|plant/.test(type)?0x6b9c55:0xe8d8b2;
      if(/bread/.test(type)){
        box(g,[.42,.24,.23],[0,.12,0],color,.09);
        for(const x of [-.1,0,.1])box(g,[.023,.025,.18],[x,.245,0],0xf3d59a,.01);
      }else if(/knife|fork|spoon/.test(type))box(g,[.045,.035,.36],[0,.04,0],0x96b1a5,.01);
      else if(/plate|pan/.test(type)){
        const m=new THREE.Mesh(new THREE.CylinderGeometry(.22,.18,.05,24),mat(color));m.position.y=.04;g.add(m);
      }else {
        const m=new THREE.Mesh(/apple|tomato|egg|lettuce/.test(type)?new THREE.SphereGeometry(.14,16,12):new THREE.CylinderGeometry(.11,.09,.26,16),mat(color));m.position.y=.14;m.castShadow=true;g.add(m);
      }
      g.userData.id=o.id;meshes.set(o.id,g);
    }
  }
  function update(snapshot){
    if(snapshot.renderer!=='three-textworld')return;
    toggle.disabled=false;toggle.setAttribute('aria-label','Switch between room overview and following the robot');
    toggle.setAttribute('aria-pressed',String(following));hint.textContent=following?'Room overview':'Follow robot';
    const question=snapshot.action?.startsWith('ask ')&&!snapshot.trace?.at(-1)?.result?(snapshot.pending?.question||snapshot.action.slice(4)):'';
    speech.textContent=question;speech.hidden=!question;
    const changed=episode!==snapshot.episode_id;
    if(changed){episode=snapshot.episode_id;build(snapshot.objects);initialized=false;route=[];station=null;}
    const desired=snapshot.agent.location;
    const anchor=anchors.get(desired)||anchors.get(snapshot.agent.location);
    if(anchor){
      if(initialized&&station!==desired){
        route=[new THREE.Vector3(robot.position.x,0,0),new THREE.Vector3(anchor.approach.x,0,0),anchor.approach.clone()];
      }
      station=desired;target.copy(route[0]||anchor.approach);
    }else target.set(0,0,2);
    if(!initialized){robot.position.copy(target);initialized=true;}
    for(const o of snapshot.objects){
      const d=doors.get(o.id);if(d)d.userData.open=!!o.properties.isOpen;
      const mesh=meshes.get(o.id);if(!mesh)continue;
      const props=o.properties,parent=props.parentReceptacles?.[0],p=anchors.get(parent);
      mesh.visible=!!props.isPickedUp||!!p;
      if(props.isPickedUp){if(mesh.parent!==robot)robot.add(mesh);mesh.position.set(.36,.72,.38);mesh.scale.setScalar(.85);}
      else if(p){if(mesh.parent!==items)items.add(mesh);mesh.scale.setScalar(1);
        const siblings=snapshot.objects.filter(x=>x.properties.parentReceptacles?.[0]===parent),idx=siblings.indexOf(o);
        const offset=new THREE.Vector3((idx%3-1)*.32,p.height+.08,Math.floor(idx/3)*.22-.22).applyAxisAngle(new THREE.Vector3(0,1,0),p.group.rotation.y);
        mesh.position.copy(p.position).add(offset);
        // Contents of closed receptacles stay inside, rather than on their lid.
        const container=snapshot.objects.find(x=>x.id===parent);
        if(container?.properties.openable){mesh.position.y=p.group.position.y+(p.height-p.group.position.y)*.55;mesh.visible=!!container.properties.isOpen;}
      }
      mesh.traverse(n=>{if(n.isMesh){n.material=mat(props.ObjectTemperature==='Cold'?0x83dbe3:props.ObjectTemperature==='Hot'?0xeb8a52:/bread/.test(o.type)?0xc88c48:/apple|tomato/.test(o.type)?0xdd7152:/lettuce|plant/.test(o.type)?0x6b9c55:0xe8d8b2);}});
    }
  }
  function view(){following=!following;toggle.setAttribute('aria-pressed',String(following));hint.textContent=following?'Room overview':'Follow robot';if(!following){camera.position.set(12,12,16);controls.target.set(0,.6,-1);}controls.enabled=!following;}
  toggle.disabled=false;toggle.onclick=view;toggle.ondblclick=null;hint.textContent='Follow robot';
  toggle.setAttribute('aria-label','Switch between room overview and following the robot');
  camera.position.set(12,12,16);controls.target.set(0,.6,-1);
  const preview=document.createElement('canvas');preview.width=preview.height=256;preview.style.cssText='width:100%;height:100%;object-fit:cover';toggle.prepend(preview);
  const previewContext=preview.getContext('2d');
  const observer=new ResizeObserver(()=>{const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);composer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();});observer.observe(canvas);
  let previewAt=0;
  function frame(now){
    const dt=Math.min((now-last)/1000,.05);last=now;
    if(!paused){
      const delta=target.clone().sub(robot.position);delta.y=0;const distance=delta.length();
      if(distance>.025){
        robot.rotation.y=Math.atan2(delta.x,delta.z);
        // One gait cycle covers two footfalls; speed eases within each planted step.
        const gaitSpeed=1.75*(.62+.38*Math.abs(Math.cos(phase)));
        const travel=Math.min(distance,dt*gaitSpeed);
        robot.position.addScaledVector(delta,travel/distance);
        phase+=travel/.9*Math.PI*2;
        robot.userData.animateWalk(reduced?0:phase,!reduced);
        robot.position.y=reduced?0:.025*(1-Math.cos(phase*2));
        robot.rotation.z=reduced?0:.025*Math.sin(phase);
      }else{
        robot.userData.animateWalk(0);robot.position.y=0;robot.rotation.z=0;
        if(route.length){route.shift();if(route.length)target.copy(route[0]);}
      }
      for(const door of doors.values())door.rotation.y=THREE.MathUtils.damp(door.rotation.y,door.userData.open?-1.7:0,reduced?100:7,dt);
    }
    if(following){const desired=new THREE.Vector3(0,3.4,-5.5).applyAxisAngle(new THREE.Vector3(0,1,0),robot.rotation.y).add(robot.position);camera.position.lerp(desired,1-Math.exp(-dt*3));camera.lookAt(robot.position.clone().add(new THREE.Vector3(0,1,0)));}
    else controls.update();
    for(const sprite of labels){const pos=new THREE.Vector3();sprite.getWorldPosition(pos);const near=pos.distanceTo(robot.position)<4;sprite.visible=near&&following;}

    if(!speech.hidden){
      const head=robot.position.clone().add(new THREE.Vector3(0,2.25,0)).project(camera);
      const width=canvas.clientWidth,height=canvas.clientHeight;
      const half=speech.offsetWidth/2;
      speech.style.left=`${Math.max(half+16,Math.min(width-half-16,(head.x*.5+.5)*width))}px`;
      speech.style.top=`${Math.max(speech.offsetHeight+22,Math.min(height-20,(-head.y*.5+.5)*height))}px`;
    }
    composer.render();
    if(now-previewAt>600){previewAt=now;const pos=camera.position.clone(),q=camera.quaternion.clone();camera.position.set(0,16,9);camera.lookAt(0,0,-1);renderer.render(scene,camera);previewContext.drawImage(canvas,0,0,256,256);camera.position.copy(pos);camera.quaternion.copy(q);composer.render();}
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  return {update,setPaused(value){paused=value;}};
}
