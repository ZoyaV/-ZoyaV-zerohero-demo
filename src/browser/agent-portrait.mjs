import * as THREE from 'three';
import { createRobot } from '../robot.js';

export function mountAgentPortrait(canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true});
  } catch {
    return;
  }

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.24;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera();
  camera.position.set(0, 1.46, 5);
  camera.lookAt(0, 1.01, 0);
  scene.add(new THREE.HemisphereLight(0xfff7e1, 0x8b8576, 2.3));

  const key = new THREE.DirectionalLight(0xffefd6, 2.5);
  key.position.set(-2.5, 5, 3);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.normalBias = .02;
  scene.add(key);

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(100, 100),
    new THREE.ShadowMaterial({opacity: .22}));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  const robot = createRobot();
  scene.add(robot);
  const eyes = robot.getObjectsByProperty('name', 'eye');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let inView = false;
  let frame = 0;
  let lastTime = 0;
  let elapsed = 0;

  function draw(now) {
    frame = 0;
    if (lastTime && inView && !reducedMotion.matches) elapsed += Math.min(now - lastTime, 50) / 1000;
    lastTime = now;
    const time = reducedMotion.matches ? 0 : elapsed;
    robot.rotation.y = Math.max(0, time - 1.2) * Math.PI * 2 / 28;
    const blink = (time + 3.35) % 4.5;
    const openness = 1 - .89 * Math.max(0, 1 - Math.abs(blink - .11) / .11);
    for (const eye of eyes) eye.scale.y = openness;
    renderer.render(scene, camera);
    if (inView && !reducedMotion.matches) frame = requestAnimationFrame(draw);
  }

  function redraw() {
    cancelAnimationFrame(frame);
    lastTime = 0;
    draw(performance.now());
  }

  new ResizeObserver(() => {
    const {clientWidth: width, clientHeight: height} = canvas;
    if (!width || !height) return;
    // The rotating silhouette spans 2.08 units vertically and 1.19 across.
    const halfHeight = Math.max(1.10, .64 * height / width);
    const halfWidth = halfHeight * width / height;
    Object.assign(camera, {left: -halfWidth, right: halfWidth, top: halfHeight, bottom: -halfHeight});
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    redraw();
  }).observe(canvas);
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    redraw();
  }).observe(canvas);
  reducedMotion.addEventListener('change', redraw);
}
