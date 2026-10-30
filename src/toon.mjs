import {PosterizeEffect, InkOutlineEffect} from '@velkina/inkwell';

export function toonEffects(){
 const outline=new InkOutlineEffect({thickness:1,threshold:.18,jitter:0});
 // Inkwell 8986176 calls readDepth(float); postprocessing expects UV coordinates.
 outline.setFragmentShader(outline.getFragmentShader().replace(
  'readDepth(texture2D(depthBuffer, uv).r)', 'readDepth(uv)'));
 return [new PosterizeEffect({levels:5}),outline];
}
