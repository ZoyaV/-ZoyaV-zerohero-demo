import {createProxy} from './operator-proxy.mjs';
let handler,signature;
export default {fetch(request,env){
 if(!env.OPERATOR_BASE_URL||!env.OPERATOR_MODEL||!env.ALLOWED_ORIGIN)return Response.json({error:'Operator deployment is not configured'},{status:503});
 const next=[env.OPERATOR_BASE_URL,env.OPERATOR_MODEL,env.ALLOWED_ORIGIN].join('|');
 if(!handler||signature!==next){signature=next;handler=createProxy({baseURL:env.OPERATOR_BASE_URL,model:env.OPERATOR_MODEL,apiKey:env.OPERATOR_API_KEY,origins:env.ALLOWED_ORIGIN.split(',')});}
 return handler(request,request.headers.get('CF-Connecting-IP')||'unknown');
}};
