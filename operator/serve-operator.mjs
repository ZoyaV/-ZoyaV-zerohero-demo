import http from 'node:http';
import {createProxy} from './operator-proxy.mjs';
const port=Number(process.env.PORT||8781);
const origins=(process.env.OPERATOR_ORIGINS||'http://127.0.0.1:8790,https://zoyav.github.io').split(',');
const handle=createProxy({baseURL:process.env.OPERATOR_BASE_URL||'http://127.0.0.1:18842/v1/',model:process.env.OPERATOR_MODEL||'flashnext',apiKey:process.env.OPERATOR_API_KEY||'',origins,allowHTTP:true});
http.createServer(async(req,res)=>{
 try{
  const request=new Request(`http://127.0.0.1:${port}${req.url}`,{method:req.method,headers:req.headers,...(['GET','HEAD'].includes(req.method)?{}:{body:req,duplex:'half'})});
  const result=await handle(request,req.headers['cf-connecting-ip']||req.socket.remoteAddress);
  res.writeHead(result.status,Object.fromEntries(result.headers));res.end(Buffer.from(await result.arrayBuffer()));
 }catch{res.writeHead(400,{'Content-Type':'application/json'});res.end('{"error":"Invalid request"}');}
}).listen(port,'127.0.0.1',()=>console.log(`Operator proxy http://127.0.0.1:${port}/reply`));
