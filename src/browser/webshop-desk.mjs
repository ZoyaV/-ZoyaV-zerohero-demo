import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { createRobot } from '../robot.js';
import { mountAgentPortrait } from './agent-portrait.mjs';

mountAgentPortrait(document.querySelector('#agent-portrait'));
const canvas = document.querySelector('#webshop-desk');
const stage = canvas.parentElement;
const display = stage.querySelector('.monitor');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe9dfca);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

const camera = new THREE.OrthographicCamera();
camera.position.set(-.62, 3.3, 6);
camera.lookAt(-.62, 1.31, 0);
camera.updateMatrixWorld();
scene.add(new THREE.HemisphereLight(0xfff7e2, 0x858671, 2.15));
const sun = new THREE.DirectionalLight(0xffedce, 2.5);
sun.position.set(-3, 6, 4);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.normalBias = .02;
scene.add(sun);

function box(size, position, color, radius = .04) {
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(...size, 3, radius),
    new THREE.MeshStandardMaterial({ color, roughness: .82 }));
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

box([12, .1, 10], [0, -.05, 0], 0xe5dac2);
box([7.8, .14, 1.94], [0, 1.14, -.56], 0xaf957b);
box([.14, 1.08, .72], [-2.88, .55, -.64], 0x81725c);
box([.14, 1.08, .72], [2.88, .55, -.64], 0x81725c);
box([.77, .12, .66], [-1.68, .75, .57], 0x6b7d6c);
box([.67, .68, .13], [-1.94, 1.05, .87], 0x6b7d6c);
box([.1, .75, .1], [-1.7, .375, .57], 0x6e6658);

const robot = createRobot();
robot.position.set(-1.64, .50, .49);
robot.rotation.y = 2.24;
scene.add(robot);

const keyboardCenter = new THREE.Vector3(.035, .748, .31);
const keyboard = new THREE.Group();
scene.add(keyboard);
keyboard.add(box([.65, .07, .27], [0, 0, 0], 0x7c7765));
const keys = [];
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 9; col++) {
    const key = box([.058, .026, .060], [(col - 4) * .067, .041, (row - 1) * .074], 0xeee2c6);
    keys.push(key);
    keyboard.add(key);
  }
}
keyboard.position.copy(robot.localToWorld(keyboardCenter.clone()));
keyboard.rotation.y = robot.rotation.y;

const mouseHome = new THREE.Vector3(-.46, .76, .25);
const mouseWorld = robot.localToWorld(mouseHome.clone());
const mouse = new THREE.Group();
scene.add(mouse);
box([.34, .10, .57], [mouseWorld.x, 1.16, mouseWorld.z - .075], 0xaf957b);
box([.30, .017, .37], [mouseWorld.x, 1.22, mouseWorld.z], 0x627762, .008);
mouse.rotation.y = robot.rotation.y;
mouse.add(box([.14, .075, .20], [0, 0, 0], 0x355449, .035));
const mouseButton = box([.063, .02, .087], [-.033, .038, .045], 0xb99453, .009);
mouse.add(mouseButton);

const monitor = new THREE.Group();
monitor.position.set(.08, 1.23, -.28);
monitor.rotation.y = -.26;
monitor.scale.set(.64, .83, .86);
scene.add(monitor);
monitor.add(box([1.10, .09, .52], [0, .05, 0], 0xb0a18a));
monitor.add(box([.36, .27, .25], [0, .20, 0], 0xb0a18a));
monitor.add(box([2.97, 1.64, .55], [0, 1.14, 0], 0xbeb09a, .12));
monitor.add(box([2.77, 1.44, .05], [0, 1.16, .276], 0x433d33, .062));
monitor.add(box([.11, .026, .017], [1.26, .38, .277], 0x4d9465, .008));

function placeDisplay(width, height) {
  const project = (x, y) => {
    const point = monitor.localToWorld(new THREE.Vector3(x, y, .306)).project(camera);
    return [(point.x + 1) * width / 2, (1 - point.y) * height / 2];
  };
  monitor.updateMatrixWorld(true);
  const origin = project(-1.35, 1.85);
  const right = project(1.35, 1.85);
  const bottom = project(-1.35, .47);
  const panelWidth = width < 480 ? 280 : 435;
  const panelHeight = panelWidth / 1.58;
  display.style.width = `${panelWidth}px`;
  display.style.height = `${panelHeight}px`;
  display.style.transform = `matrix(${(right[0] - origin[0]) / panelWidth}, ${(right[1] - origin[1]) / panelWidth}, ${(bottom[0] - origin[0]) / panelHeight}, ${(bottom[1] - origin[1]) / panelHeight}, ${origin[0]}, ${origin[1]})`;
  display.dataset.mounted = 'true';
}

let visible = true;
let frame = 0;
let action = '';
let actionAt = -Infinity;
let pressedKey;
const handTargets = [new THREE.Vector3(), new THREE.Vector3()];
const mouseTarget = new THREE.Vector3();
const mouseContact = new THREE.Vector3();
const keySets = [[10, 11, 12, 3, 2], [14, 15, 16, 7, 6]];

function moveHands(now, moving) {
  const elapsed = moving ? (now - actionAt) / 1000 : Infinity;
  const typing = action === 'search' && elapsed < 1.45;
  const usingMouse = action === 'click' && elapsed < 1.55;
  const beat = Math.max(0, elapsed) * 8;
  const stroke = typing ? Math.floor(beat) : 0;
  const depth = typing ? Math.sin((beat % 1) * Math.PI) : 0;

  if (pressedKey) {
    pressedKey.position.y = .041;
    pressedKey.material.color.setHex(0xeee2c6);
    pressedKey = undefined;
  }
  for (const [index, target] of handTargets.entries()) {
    const striking = typing && stroke % 2 === index;
    const set = keySets[index];
    const key = keys[set[striking ? Math.floor(stroke / 2) % set.length : 0]];
    target.copy(keyboardCenter).add(key.position);
    target.y += .087 - (striking ? .067 * depth : 0);
    if (striking) {
      key.position.y -= .021 * depth;
      key.material.color.setHex(0xc68a44);
      pressedKey = key;
    }
  }

  const travel = usingMouse ? THREE.MathUtils.smoothstep(elapsed, .12, .9) : 0;
  const tap = usingMouse ? Math.max(0, 1 - Math.abs(elapsed - .95) / .14) : 0;
  mouseTarget.copy(mouseHome);
  mouseTarget.x -= .058 * travel;
  mouseTarget.z += .082 * travel;
  robot.localToWorld(mouse.position.copy(mouseTarget));
  mouseButton.position.y = .038 - .014 * tap;
  if (usingMouse) {
    mouseContact.copy(mouseTarget);
    mouseContact.y += .11 - .029 * tap;
    const grasp = THREE.MathUtils.smoothstep(elapsed, 0, .25) *
      (1 - THREE.MathUtils.smoothstep(elapsed, 1.1, 1.55));
    handTargets[0].lerp(mouseContact, grasp);
  }
  robot.userData.poseAtDesk(moving ? now / 1000 : 0, handTargets);
}

function draw(now = performance.now()) {
  frame = 0;
  const moving = !reduceMotion.matches;
  moveHands(now, moving);
  renderer.render(scene, camera);
  if (visible && moving) frame = requestAnimationFrame(draw);
}
function update() {
  cancelAnimationFrame(frame);
  draw();
}
new ResizeObserver(() => {
  const { clientWidth: width, clientHeight: height } = canvas;
  if (!width || !height) return;
  const halfHeight = Math.max(1.53, 1.70 * height / width);
  const halfWidth = halfHeight * width / height;
  camera.left = -halfWidth;
  camera.right = halfWidth;
  camera.top = halfHeight;
  camera.bottom = -halfHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
  placeDisplay(width, height);
  update();
}).observe(canvas);
new IntersectionObserver(([entry]) => {
  visible = entry.isIntersecting;
  update();
}).observe(stage);
reduceMotion.addEventListener('change', update);
stage.addEventListener('webshop-action', event => {
  action = String(event.detail).split('[', 1)[0].toLowerCase();
  actionAt = performance.now();
  if (visible) update();
});
