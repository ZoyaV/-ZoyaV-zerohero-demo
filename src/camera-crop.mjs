// Center the useful part of a camera image while filling its viewport.
export function coverPosition(imageWidth, imageHeight, width, height, focus=[.5,.5]) {
  if (!imageWidth || !imageHeight || !width || !height) return '50% 50%';
  const scale=Math.max(width/imageWidth,height/imageHeight);
  const position=(size,viewport,center)=>size<=viewport+.01?50:
    Math.max(0,Math.min(100,(center*size-viewport/2)/(size-viewport)*100));
  return `${position(imageWidth*scale,width,focus[0])}% ${position(imageHeight*scale,height,focus[1])}%`;
}
export function fitCamera(image, focus) {
  image.style.objectPosition=coverPosition(image.naturalWidth,image.naturalHeight,
    image.clientWidth,image.clientHeight,focus);
}
