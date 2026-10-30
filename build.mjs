import {build} from 'esbuild';
for(const [source,target] of [['entry-alfred.mjs','alfred-game.js'],['entry-craftax.mjs','craftax-game.js'],['model-worker.mjs','model-worker.js']])await build({entryPoints:['src/browser/'+source],bundle:true,minify:true,platform:'browser',format:'esm',outfile:target,define:{'process.env.NODE_ENV':'"production"'}});
