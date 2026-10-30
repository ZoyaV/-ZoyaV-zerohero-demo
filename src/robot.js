import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

// A small ceramic maquette built from the approved concept, facing local +z.
export function createRobot() {
  const robot = new THREE.Group();
  robot.name = 'ceramic-robot';
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff8ed'; ctx.fillRect(0, 0, 256, 256);
  let seed = 1864;
  const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < 1700; i++) {
    ctx.fillStyle = `rgba(104,68,35,${.12 + random() * .35})`;
    ctx.beginPath(); ctx.ellipse(random()*256, random()*256, .3+random()*1.3, .3+random()*1.1, 0, 0, Math.PI*2); ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const cream = new THREE.MeshPhysicalMaterial({color:0xf0dfbf,map:texture,bumpMap:texture,bumpScale:.008,roughness:.44,clearcoat:.45,clearcoatRoughness:.32});
  const ochre = cream.clone(); ochre.color.setHex(0xc58e35);
  const teal = cream.clone(); teal.color.setHex(0x48635b); teal.roughness=.48;
  const joint = new THREE.MeshStandardMaterial({color:0x5c5544,roughness:.75});
  const glow = new THREE.MeshBasicMaterial({color:0xffd78b,toneMapped:false});
  const glass = new THREE.MeshPhysicalMaterial({color:0x193d3a,roughness:.19,clearcoat:1,clearcoatRoughness:.13});
  const sphere = new THREE.SphereGeometry(1,32,24);
  function add(geometry,material,position,scale=[1,1,1],parent=robot) {
    const part = new THREE.Mesh(geometry,material);
    part.position.set(...position); part.scale.set(...scale);
    part.castShadow=true; part.receiveShadow=true; parent.add(part); return part;
  }
  function round(size,radius,mat,pos,parent=robot) {
    return add(new RoundedBoxGeometry(...size,5,radius),mat,pos,[1,1,1],parent);
  }
  function disc(radius,depth,mat,pos,axis='z',parent=robot) {
    const p=add(new THREE.CylinderGeometry(radius,radius,depth,32),mat,pos,[1,1,1],parent);
    if(axis==='z')p.rotation.x=Math.PI/2;
    if(axis==='x')p.rotation.z=Math.PI/2;
    return p;
  }
  round([.49,.46,.37],.16,cream,[0,.65,0]);
  disc(.21,.07,ochre,[0,.9,0],'y');
  disc(.12,.09,joint,[0,.94,0],'y');
  const head=round([1.02,.77,.65],.22,cream,[0,1.32,0]); head.name='head';
  // Squircle ellipsoid: its centre projects 0.22 beyond the ceramic shell.
  const screenGeo = new THREE.SphereGeometry(1,48,32);
  const vertices=screenGeo.attributes.position;
  for(let i=0;i<vertices.count;i++) {
    const x=vertices.getX(i),y=vertices.getY(i),z=vertices.getZ(i);
    vertices.setXYZ(i,Math.sign(x)*Math.abs(x)**.68*.43,Math.sign(y)*Math.abs(y)**.68*.29,z*.23);
  }
  screenGeo.computeVertexNormals();
  const screen=add(screenGeo,glass,[0,1.32,.315]); screen.name='convex-screen';
  const faceZ=(x,y)=>.315+.23*Math.sqrt(Math.max(0,1-Math.abs(x/.43)**(2/.68)-Math.abs(y/.29)**(2/.68)));
  for(const x of [-.15,.15]) {
    const eye=add(new THREE.CapsuleGeometry(.023,.060,6,12),glow,[x,1.35,faceZ(x,.03)+.006]);
    eye.name='eye';eye.castShadow=false;
  }
  const smile=[];
  for(let i=0;i<=20;i++) {const x=-.075+i*.0075,y=-.065-.038*Math.sin(i/20*Math.PI);smile.push(new THREE.Vector3(x,1.32+y,faceZ(x,y)+.008));}
  add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(smile),24,.009,8,false),glow,[0,0,0]).castShadow=false;
  for(const sign of [-1,1]) {
    const ear=new THREE.Group(); ear.position.set(sign*.31,1.69,0);ear.rotation.z=-sign*.25;robot.add(ear);
    add(new THREE.CapsuleGeometry(.095,.19,8,16),cream,[0,.12,0],[1,1,1],ear);
    add(new THREE.CapsuleGeometry(.094,.09,8,16),ochre,[0,.20,0],[1,1,1],ear);
    disc(.098,.035,teal,[0,.11,0],'y',ear);
    disc(.16,.065,teal,[sign*.505,1.31,0],'x');
    disc(.124,.08,ochre,[sign*.54,1.31,0],'x');
  }
  disc(.17,.026,ochre,[0,1.31,-.326]);
  disc(.147,.032,cream,[0,1.31,-.343]);
  add(sphere,glow,[0,1.38,-.368],[.026,.026,.014]).castShadow=false;
  for(const x of [-.084,.084])add(sphere,joint,[x,1.27,-.365],[.014,.014,.009]);
  round([.14,.17,.04],.04,teal,[0,.69,.189]);
  disc(.047,.025,ochre,[0,.69,.22]);
  const arms=[],legs=[];
  for(const sign of [-1,1]) {
    const arm=new THREE.Group();arm.position.set(sign*.28,.80,0);arm.rotation.z=sign*.22;robot.add(arm);arms.push(arm);
    add(sphere,joint,[0,0,0],[.095,.095,.095],arm);
    add(new THREE.CapsuleGeometry(.084,.11,6,16),cream,[sign*.035,-.14,.01],[1,1,1],arm);
    add(sphere,ochre,[sign*.045,-.27,.035],[.093,.11,.085],arm);
    const leg=new THREE.Group();leg.position.set(sign*.15,.34,0);robot.add(leg);legs.push(leg);
    add(sphere,joint,[0,0,0],[.075,.10,.075],leg);
    round([.23,.22,.29],.08,cream,[0,-.20,.035],leg);
    round([.24,.065,.30],.025,ochre,[0,-.31,.035],leg);
  }
  robot.userData.animateWalk = (phase, stepping=false) => {
    const swing=Math.sin(phase)*(stepping?.42:.22);
    legs[0].rotation.x=swing;legs[1].rotation.x=-swing;
    arms[0].rotation.x=-swing;arms[1].rotation.x=swing;
    if(stepping){
      // Lift the swing foot while the planted foot travels back under the body.
      legs[0].position.y=.34+Math.max(0,Math.cos(phase))*.10;
      legs[1].position.y=.34+Math.max(0,-Math.cos(phase))*.10;
    }else{legs[0].position.y=legs[1].position.y=.34;}
  };
  return robot;
}
