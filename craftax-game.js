var Et=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};function Uc(n,e,t,i="zerohero-chat-width",r=()=>{}){let s=null,a=null;try{let h=Number(localStorage.getItem(i));h>0&&Number.isFinite(h)&&(s=h)}catch{}function o(h=s){let p=n.getBoundingClientRect().width,d=Math.max(0,Math.floor(Math.min(600,p/2,p-184))),g=Math.min(164,d),v=Math.round(Math.max(g,Math.min(d,h??Math.min(360,Math.max(164,p*.29)))));return n.style.setProperty("--chat-width",`${v}px`),t.setAttribute("aria-valuemin",String(Math.ceil(g))),t.setAttribute("aria-valuemax",String(Math.floor(d))),t.setAttribute("aria-valuenow",String(v)),t.setAttribute("aria-valuetext",`${v} pixels`),r(),v}function c(h){s=o(h);try{localStorage.setItem(i,String(s))}catch{}}let l=()=>Number(t.getAttribute("aria-valuenow"));t.onpointerdown=h=>{h.button!==0||!h.isPrimary||(h.preventDefault(),t.focus(),t.setPointerCapture(h.pointerId),a={id:h.pointerId,x:h.clientX,width:l()},e.dataset.dragging="true")},t.onpointermove=h=>{a?.id===h.pointerId&&o(a.width+a.x-h.clientX)};function u(h){a?.id===h.pointerId&&(c(l()),a=null,e.dataset.dragging="false",t.hasPointerCapture(h.pointerId)&&t.releasePointerCapture(h.pointerId))}t.onpointerup=u,t.onpointercancel=u,t.onlostpointercapture=u,t.onkeydown=h=>{let p={ArrowLeft:l()+16,ArrowRight:l()-16,Home:0,End:1/0};h.key in p&&(h.preventDefault(),c(p[h.key]))},t.ondblclick=()=>{s=null,o();try{localStorage.removeItem(i)}catch{}},window.addEventListener("resize",()=>o()),o()}var Lc=Et(()=>{});function Ei(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function Wl(n,e){return(n%e+e)%e}function _f(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Af(n,e,t){return n!==e?(t-n)/(e-n):0}function Rr(n,e,t){return(1-t)*n+t*e}function Mf(n,e,t,i){return Rr(n,e,1-Math.exp(-t*i))}function Sf(n,e=1){return e-Math.abs(Wl(n,e*2)-e)}function Ef(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Tf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function bf(n,e){return n+Math.random()*(e-n)}function Cf(n){return n*(.5-Math.random())}function Rf(n){n!==void 0&&(Bc=n);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Df(n){return n*Cr}function Pf(n){return n*Qi}function If(n){return(n&n-1)===0&&n!==0}function Uf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bf(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),p=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*p,o*l);break;case"YZY":n.set(c*p,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*p,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*d,o*l);break;case"YXY":n.set(c*d,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function Yl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qu(){let n=Br("canvas");return n.style.display="block",n}function Ki(n){n in Fc||(Fc[n]=!0,console.warn(n))}function Zu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Nf(){let n={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Ln(r.r),r.g=Ln(r.g),r.b=Ln(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nn?Ur:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vn]:{primaries:e,whitePoint:i,transfer:Ur,toXYZ:Oc,fromXYZ:zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Oc,fromXYZ:zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}}),n}function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Xo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ci.fromArray(n,s);let o=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),u=i.dot(ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}function rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Qf(n,e,t,i,r,s,a,o){let c;if(e.side===yt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===gn,o),c===null)return null;Ws.copy(o),Ws.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ws);return l<t.near||l>t.far?null:{distance:l,point:Ws.clone(),object:n}}function Xs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,ks),n.getVertexPosition(c,Hs),n.getVertexPosition(l,Gs);let u=Qf(n,e,t,i,ks,Hs,Gs,Kc);if(u){let h=new P;Vn.getBarycoord(Kc,ks,Hs,Gs,h),r&&(u.uv=Vn.getInterpolatedAttribute(r,o,c,l,h,new ae)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,o,c,l,h,new ae)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,c,l,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new P,materialIndex:0};Vn.getNormal(ks,Hs,Gs,p.normal),u.face=p,u.barycoord=h}return u}function wi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){let e={};for(let t=0;t<n.length;t++){let i=wi(n[t]);for(let r in i)e[r]=i[r]}return e}function Kf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ql(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}function Zs(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(ua.fromBufferAttribute(o,r),ha.fromBufferAttribute(o,s),t.distanceSqToSegment(ua,ha,ll,eu)>i)return;ll.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ll);if(!(l<e.near||l>e.far))return{distance:l,point:eu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}function Zl(){let n=0,e=0,t=0,i=0;function r(s,a,o,c){n=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let p=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;p*=u,d*=u,r(a,o,p,d)},calc:function(s){let a=s*s,o=a*s;return n+e*s+t*a+i*o}}}function tu(n,e,t,i,r){let s=(i-e)*.5,a=(r-t)*.5,o=n*n,c=n*o;return(2*t-2*i+s+a)*c+(-3*t+3*i-2*s-a)*o+s*n+t}function id(n,e){let t=1-n;return t*t*e}function rd(n,e){return 2*(1-n)*n*e}function sd(n,e){return n*n*e}function Dr(n,e,t,i){return id(n,e)+rd(n,t)+sd(n,i)}function ad(n,e){let t=1-n;return t*t*t*e}function od(n,e){let t=1-n;return 3*t*t*n*e}function ld(n,e){return 3*(1-n)*n*n*e}function cd(n,e){return n*n*n*e}function Pr(n,e,t,i,r){return ad(n,e)+od(n,t)+ld(n,i)+cd(n,r)}function ud(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Ju(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=md(n,e,s,t)),n.length>80*t){o=1/0,c=1/0;let u=-1/0,h=-1/0;for(let p=t;p<r;p+=t){let d=n[p],g=n[p+1];d<o&&(o=d),g<c&&(c=g),d>u&&(u=d),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return Jr(s,a,t,o,c,l,0),a}function Ju(n,e,t,i,r){let s;if(r===Td(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=nu(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=nu(a/i|0,n[a],n[a+1],s);return s&&or(s,s.next)&&($r(s),s=s.next),s}function xi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(or(t,t.next)||pt(t.prev,t,t.next)===0)){if($r(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Jr(n,e,t,i,r,s,a){if(!n)return;!a&&s&&_d(n,i,r,s);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(s?fd(n,i,r,s):hd(n)){e.push(c.i,n.i,l.i),$r(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=dd(xi(n),e),Jr(n,e,t,i,r,s,2)):a===2&&pd(n,e,t,i,r,s):Jr(xi(n),e,t,i,r,s,1);break}}}function hd(n){let e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(r,s,a),h=Math.min(o,c,l),p=Math.max(r,s,a),d=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=h&&g.y<=d&&br(r,o,s,c,a,l,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fd(n,e,t,i){let r=n.prev,s=n,a=n.next;if(pt(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,p=a.y,d=Math.min(o,c,l),g=Math.min(u,h,p),v=Math.max(o,c,l),m=Math.max(u,h,p),f=yl(d,g,e,t,i),S=yl(v,m,e,t,i),y=n.prevZ,x=n.nextZ;for(;y&&y.z>=f&&x&&x.z<=S;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&br(o,u,c,h,l,p,y.x,y.y)&&pt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&br(o,u,c,h,l,p,x.x,x.y)&&pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=f;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&br(o,u,c,h,l,p,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&br(o,u,c,h,l,p,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function dd(n,e){let t=n;do{let i=t.prev,r=t.next.next;!or(i,r)&&$u(i,t,t.next,r)&&jr(i,r)&&jr(r,i)&&(e.push(i.i,t.i,r.i),$r(t),$r(t.next),t=n=r),t=t.next}while(t!==n);return xi(t)}function pd(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sd(a,o)){let c=eh(a,o);a=xi(a,a.next),c=xi(c,c.next),Jr(a,e,t,i,r,s,0),Jr(c,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function md(n,e,t,i){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*i,c=s<a-1?e[s+1]*i:n.length,l=Ju(n,o,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Md(l))}r.sort(gd);for(let s=0;s<r.length;s++)t=vd(r[s],t);return t}function gd(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function vd(n,e){let t=xd(n,e);if(!t)return e;let i=eh(t,n);return xi(i,i.next),xi(t,t.next)}function xd(n,e){let t=e,i=n.x,r=n.y,s=-1/0,a;if(or(n,t))return t;do{if(or(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&ju(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){let h=Math.abs(r-t.y)/(i-t.x);jr(t,n)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&yd(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function yd(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function _d(n,e,t,i){let r=n;do r.z===0&&(r.z=yl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ad(r)}function Ad(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function yl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Md(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ju(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function br(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&ju(n,e,t,i,r,s,a,o)}function Sd(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ed(n,e)&&(jr(n,e)&&jr(e,n)&&wd(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||or(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function or(n,e){return n.x===e.x&&n.y===e.y}function $u(n,e,t,i){let r=Js(pt(n,e,t)),s=Js(pt(n,e,i)),a=Js(pt(t,i,n)),o=Js(pt(t,i,e));return!!(r!==s&&a!==o||r===0&&Ks(n,t,e)||s===0&&Ks(n,i,e)||a===0&&Ks(t,n,i)||o===0&&Ks(t,e,i))}function Ks(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Js(n){return n>0?1:n<0?-1:0}function Ed(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&$u(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function jr(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function wd(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function eh(n,e){let t=_l(n.i,n.x,n.y),i=_l(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function nu(n,e,t,i){let r=_l(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function $r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _l(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Td(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}function iu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ru(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function bd(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}function js(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Cd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function lu(n,e){return n.distance-e.distance}function wl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)wl(s[a],e,t,!0)}}function Jl(n,e,t,i){let r=Fd(i);switch(t){case Fl:return n*e;case zl:return n*e/r.components*r.byteLength;case Va:return n*e/r.components*r.byteLength;case kl:return n*e*2/r.components*r.byteLength;case Wa:return n*e*2/r.components*r.byteLength;case Ol:return n*e*3/r.components*r.byteLength;case un:return n*e*4/r.components*r.byteLength;case Xa:return n*e*4/r.components*r.byteLength;case fs:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ps:case ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:case Qa:return Math.max(n,16)*Math.max(e,8)/4;case Ya:case Za:return Math.max(n,8)*Math.max(e,8)/2;case Ka:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case io:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ro:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ho:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vo:case xo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yo:case _o:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fd(n){switch(n){case Ut:case Ul:return{byteLength:1,components:1};case fr:case Ll:case dr:return{byteLength:2,components:1};case Ha:case Ga:return{byteLength:2,components:4};case Sn:case ka:case En:return{byteLength:4,components:1};case Bl:case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var ei,ti,cu,Tl,uu,bl,Ca,Mn,gn,yt,Wt,tn,di,Cl,Rl,Dl,hu,Xn,fu,du,pu,mu,gu,vu,xu,yu,ea,ta,_u,Au,Mu,Su,Eu,wu,Tu,bu,Cu,Ra,Da,Pa,pi,Ia,Ua,La,Ba,Pl,Ru,Du,Nn,Pu,Iu,Uu,Na,Lu,Bu,Nu,Il,Mi,Si,Fa,Oa,us,na,Wn,ia,ln,Fu,hs,Bt,za,ni,Ut,Ul,Ll,fr,ka,Sn,En,dr,Ha,Ga,ii,Bl,Nl,Fl,Ol,un,Zi,ri,zl,Va,kl,Wa,Xa,fs,ds,ps,ms,Ya,qa,Za,Qa,Ka,Ja,ja,$a,eo,to,no,io,ro,so,ao,oo,lo,co,uo,ho,fo,po,mo,go,vo,xo,yo,_o,Ir,ra,$s,dl,pl,ml,wn,Ou,Hl,zu,nn,ot,vn,Ur,nt,fi,gl,ku,Hu,Gu,Gl,Vu,Wu,Xu,Yu,vl,Vl,mn,Lr,Yt,Ft,Bc,Cr,Qi,Xl,ae,cn,P,Ho,Nc,He,Go,Fc,Oc,zc,je,Ui,sa,Ff,Ji,Of,Wo,Pt,mt,aa,It,Nr,oa,Yn,Rn,fn,Ds,Li,Bi,Ni,Fn,On,li,Mr,Ps,Is,ci,zf,Sr,Yo,mi,Dn,qo,Us,zn,Zo,Ls,Qo,qn,ht,Fi,dn,kf,Hf,kn,Bs,Kt,kc,Hc,xn,ji,Gf,Gc,Oi,Pn,Ns,Er,Vf,Wf,Vc,Wc,Xc,Yc,Xf,zi,Ko,Nt,pn,In,Jo,Un,ki,Hi,qc,jo,$o,el,tl,nl,il,Vn,Qu,Hn,Fs,ze,Ot,Yf,jt,_n,At,Os,qf,zt,Fr,Or,Ke,Zf,an,sl,Gi,Jt,wr,Ct,vt,Zc,ui,zs,Qc,ks,Hs,Gs,al,Vs,Kc,Ws,xt,An,Ku,Jf,jf,Mt,gi,Gn,Jc,jc,Rt,Vi,Wi,la,zr,ca,Dt,$f,$i,kr,Zn,ol,ed,td,on,hi,nd,Ys,er,tr,ua,ha,$c,Tr,qs,ll,eu,Hr,Gr,vi,Vr,Qn,Bn,nr,ir,Wr,$t,rr,fa,Qs,cl,ul,hl,sr,Xr,da,Yr,pa,qr,Zr,Qr,xl,ma,Kr,ar,Al,qi,es,ts,yi,ns,is,Kn,lr,rs,Jn,cr,ga,va,_i,xa,ya,_a,en,jn,Aa,Ma,Sa,ss,$n,Ea,wa,th,Ta,as,os,fl,su,au,Ml,Ai,Sl,ur,ba,Ql,Rd,Kl,Dd,Pd,Id,Ud,Ld,Bd,Nd,El,ut,Nx,rt,ou,ls,hr,cs,jl=Et(()=>{ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cu=0,Tl=1,uu=2,bl=1,Ca=2,Mn=3,gn=0,yt=1,Wt=2,tn=0,di=1,Cl=2,Rl=3,Dl=4,hu=5,Xn=100,fu=101,du=102,pu=103,mu=104,gu=200,vu=201,xu=202,yu=203,ea=204,ta=205,_u=206,Au=207,Mu=208,Su=209,Eu=210,wu=211,Tu=212,bu=213,Cu=214,Ra=0,Da=1,Pa=2,pi=3,Ia=4,Ua=5,La=6,Ba=7,Pl=0,Ru=1,Du=2,Nn=0,Pu=1,Iu=2,Uu=3,Na=4,Lu=5,Bu=6,Nu=7,Il=300,Mi=301,Si=302,Fa=303,Oa=304,us=306,na=1e3,Wn=1001,ia=1002,ln=1003,Fu=1004,hs=1005,Bt=1006,za=1007,ni=1008,Ut=1009,Ul=1010,Ll=1011,fr=1012,ka=1013,Sn=1014,En=1015,dr=1016,Ha=1017,Ga=1018,ii=1020,Bl=35902,Nl=35899,Fl=1021,Ol=1022,un=1023,Zi=1026,ri=1027,zl=1028,Va=1029,kl=1030,Wa=1031,Xa=1033,fs=33776,ds=33777,ps=33778,ms=33779,Ya=35840,qa=35841,Za=35842,Qa=35843,Ka=36196,Ja=37492,ja=37496,$a=37808,eo=37809,to=37810,no=37811,io=37812,ro=37813,so=37814,ao=37815,oo=37816,lo=37817,co=37818,uo=37819,ho=37820,fo=37821,po=36492,mo=36494,go=36495,vo=36283,xo=36284,yo=36285,_o=36286,Ir=2300,ra=2301,$s=2302,dl=2400,pl=2401,ml=2402,wn=3200,Ou=3201,Hl=0,zu=1,nn="",ot="srgb",vn="srgb-linear",Ur="linear",nt="srgb",fi=7680,gl=519,ku=512,Hu=513,Gu=514,Gl=515,Vu=516,Wu=517,Xu=518,Yu=519,vl=35044,Vl="300 es",mn=2e3,Lr=2001,Yt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=1234567,Cr=Math.PI/180,Qi=180/Math.PI;Xl={DEG2RAD:Cr,RAD2DEG:Qi,generateUUID:Ei,clamp:Ve,euclideanModulo:Wl,mapLinear:_f,inverseLerp:Af,lerp:Rr,damp:Mf,pingpong:Sf,smoothstep:Ef,smootherstep:wf,randInt:Tf,randFloat:bf,randFloatSpread:Cf,seededRandom:Rf,degToRad:Df,radToDeg:Pf,isPowerOfTwo:If,ceilPowerOfTwo:Uf,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Bf,normalize:Vt,denormalize:Xi},ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],p=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==p||l!==d||u!==g){let m=1-o,f=c*p+l*d+u*g+h*v,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let b=Math.sqrt(y),T=Math.atan2(b,f*S);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b}let x=o*S;if(c=c*m+p*x,l=l*m+d*x,u=u*m+g*x,h=h*m+v*x,m===1-o){let b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],p=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*d-l*p,e[t+1]=c*g+u*p+l*h-o*d,e[t+2]=l*g+u*d+o*p-c*h,e[t+3]=u*g-o*h-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),p=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*u*h+l*d*g,this._y=l*d*h-p*u*g,this._z=l*u*g+p*d*h,this._w=l*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+l*d*g,this._y=l*d*h-p*u*g,this._z=l*u*g-p*d*h,this._w=l*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-l*d*g,this._y=l*d*h+p*u*g,this._z=l*u*g+p*d*h,this._w=l*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-l*d*g,this._y=l*d*h+p*u*g,this._z=l*u*g-p*d*h,this._w=l*u*h+p*d*g;break;case"YZX":this._x=p*u*h+l*d*g,this._y=l*d*h+p*u*g,this._z=l*u*g-p*d*h,this._w=l*u*h-p*d*g;break;case"XZY":this._x=p*u*h-l*d*g,this._y=l*d*h-p*u*g,this._z=l*u*g+p*d*h,this._w=l*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=i+o+h;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ho=new P,Nc=new cn,He=class n{constructor(e,t,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],p=i[2],d=i[5],g=i[8],v=r[0],m=r[3],f=r[6],S=r[1],y=r[4],x=r[7],b=r[2],T=r[5],D=r[8];return s[0]=a*v+o*S+c*b,s[3]=a*m+o*y+c*T,s[6]=a*f+o*x+c*D,s[1]=l*v+u*S+h*b,s[4]=l*m+u*y+h*T,s[7]=l*f+u*x+h*D,s[2]=p*v+d*S+g*b,s[5]=p*m+d*y+g*T,s[8]=p*f+d*x+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,p=o*c-u*s,d=l*s-a*c,g=t*h+i*p+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=p*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Go=new He;Fc={};Oc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je=Nf();sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ui===void 0&&(Ui=Br("canvas")),Ui.width=e.width,Ui.height=e.height;let r=Ui.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ui}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ln(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ln(t[i]/255)*255):t[i]=Ln(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ff=0,Ji=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vo(r[a].image)):s.push(Vo(r[a]))}else s=Vo(r);i.url=s}return t||(e.images[this.uuid]=i),i}};Of=0,Wo=new P,Pt=class n extends Yt{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wn,r=Wn,s=Bt,a=ni,o=un,c=Ut,l=n.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ei(),this.name="",this.source=new Ji(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Il;Pt.DEFAULT_ANISOTROPY=1;mt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],d=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(d+1)/2,b=(f+1)/2,T=(u+p)/4,D=(h+v)/4,C=(g+m)/4;return y>x&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=D/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=D/s,r=C/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(p-u)/S,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},aa=class extends Yt{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new Pt(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ji(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends aa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Nr=class extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},oa=class extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ds.copy(i.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Ps.subVectors(this.max,Mr),Li.subVectors(e.a,Mr),Bi.subVectors(e.b,Mr),Ni.subVectors(e.c,Mr),Fn.subVectors(Bi,Li),On.subVectors(Ni,Bi),li.subVectors(Li,Ni);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-li.z,li.y,Fn.z,0,-Fn.x,On.z,0,-On.x,li.z,0,-li.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-li.y,li.x,0];return!Xo(t,Li,Bi,Ni,Ps)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Li,Bi,Ni,Ps))?!1:(Is.crossVectors(Fn,On),t=[Is.x,Is.y,Is.z],Xo(t,Li,Bi,Ni,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rn=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,Ds=new Yn,Li=new P,Bi=new P,Ni=new P,Fn=new P,On=new P,li=new P,Mr=new P,Ps=new P,Is=new P,ci=new P;zf=new Yn,Sr=new P,Yo=new P,mi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):zf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Yo)),this.expandByPoint(Sr.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dn=new P,qo=new P,Us=new P,zn=new P,Zo=new P,Ls=new P,Qo=new P,qn=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qo.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(qo);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Us),o=zn.dot(this.direction),c=-zn.dot(Us),l=zn.lengthSq(),u=Math.abs(1-a*a),h,p,d,g;if(u>0)if(h=a*c-o,p=a*o-c,g=s*u,h>=0)if(p>=-g)if(p<=g){let v=1/u;h*=v,p*=v,d=h*(h+a*p+2*o)+p*(a*h+p+2*c)+l}else p=s,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*c)+l;else p<=-g?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+p*(p+2*c)+l):p<=g?(h=0,p=Math.min(Math.max(-s,-c),s),d=p*(p+2*c)+l):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+p*(p+2*c)+l);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qo).addScaledVector(Us,p),d}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);let i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,r,s){Zo.subVectors(t,e),Ls.subVectors(i,e),Qo.crossVectors(Zo,Ls);let a=this.direction.dot(Qo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);let c=o*this.direction.dot(Ls.crossVectors(zn,Ls));if(c<0)return null;let l=o*this.direction.dot(Zo.cross(zn));if(l<0||c+l>a)return null;let u=-o*zn.dot(Qo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class n{constructor(e,t,i,r,s,a,o,c,l,u,h,p,d,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,p,d,g,v,m)}set(e,t,i,r,s,a,o,c,l,u,h,p,d,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let p=a*u,d=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=p-v*l,t[9]=-o*c,t[2]=v-p*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*u,d=c*h,g=l*u,v=l*h;t[0]=p+v*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*u,d=c*h,g=l*u,v=l*h;t[0]=p-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*u,d=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=p*l+v,t[1]=c*h,t[5]=v*l+p,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-p*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=p-v*h}else if(e.order==="XZY"){let p=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kf,e,Hf)}lookAt(e,t,i){let r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),kn.crossVectors(i,Kt),kn.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),kn.crossVectors(i,Kt)),kn.normalize(),Bs.crossVectors(Kt,kn),r[0]=kn.x,r[4]=Bs.x,r[8]=Kt.x,r[1]=kn.y,r[5]=Bs.y,r[9]=Kt.y,r[2]=kn.z,r[6]=Bs.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],p=i[9],d=i[13],g=i[2],v=i[6],m=i[10],f=i[14],S=i[3],y=i[7],x=i[11],b=i[15],T=r[0],D=r[4],C=r[8],A=r[12],M=r[1],I=r[5],U=r[9],O=r[13],G=r[2],Z=r[6],Y=r[10],ie=r[14],W=r[3],ce=r[7],ve=r[11],q=r[15];return s[0]=a*T+o*M+c*G+l*W,s[4]=a*D+o*I+c*Z+l*ce,s[8]=a*C+o*U+c*Y+l*ve,s[12]=a*A+o*O+c*ie+l*q,s[1]=u*T+h*M+p*G+d*W,s[5]=u*D+h*I+p*Z+d*ce,s[9]=u*C+h*U+p*Y+d*ve,s[13]=u*A+h*O+p*ie+d*q,s[2]=g*T+v*M+m*G+f*W,s[6]=g*D+v*I+m*Z+f*ce,s[10]=g*C+v*U+m*Y+f*ve,s[14]=g*A+v*O+m*ie+f*q,s[3]=S*T+y*M+x*G+b*W,s[7]=S*D+y*I+x*Z+b*ce,s[11]=S*C+y*U+x*Y+b*ve,s[15]=S*A+y*O+x*ie+b*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*c*h-r*l*h-s*o*p+i*l*p+r*o*d-i*c*d)+v*(+t*c*d-t*l*p+s*a*p-r*a*d+r*l*u-s*c*u)+m*(+t*l*h-t*o*d-s*a*h+i*a*d+s*o*u-i*l*u)+f*(-r*o*u-t*c*h+t*o*p+r*a*h-i*a*p+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=h*m*l-v*p*l+v*c*d-o*m*d-h*c*f+o*p*f,y=g*p*l-u*m*l-g*c*d+a*m*d+u*c*f-a*p*f,x=u*v*l-g*h*l+g*o*d-a*v*d-u*o*f+a*h*f,b=g*h*c-u*v*c-g*o*p+a*v*p+u*o*m-a*h*m,T=t*S+i*y+r*x+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/T;return e[0]=S*D,e[1]=(v*p*s-h*m*s-v*r*d+i*m*d+h*r*f-i*p*f)*D,e[2]=(o*m*s-v*c*s+v*r*l-i*m*l-o*r*f+i*c*f)*D,e[3]=(h*c*s-o*p*s-h*r*l+i*p*l+o*r*d-i*c*d)*D,e[4]=y*D,e[5]=(u*m*s-g*p*s+g*r*d-t*m*d-u*r*f+t*p*f)*D,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*f-t*c*f)*D,e[7]=(a*p*s-u*c*s+u*r*l-t*p*l-a*r*d+t*c*d)*D,e[8]=x*D,e[9]=(g*h*s-u*v*s-g*i*d+t*v*d+u*i*f-t*h*f)*D,e[10]=(a*v*s-g*o*s+g*i*l-t*v*l-a*i*f+t*o*f)*D,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*d-t*o*d)*D,e[12]=b*D,e[13]=(u*v*r-g*h*r+g*i*p-t*v*p-u*i*m+t*h*m)*D,e[14]=(g*o*r-a*v*r-g*i*c+t*v*c+a*i*m-t*o*m)*D,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*p+t*o*p)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,p=s*l,d=s*u,g=s*h,v=a*u,m=a*h,f=o*h,S=c*l,y=c*u,x=c*h,b=i.x,T=i.y,D=i.z;return r[0]=(1-(v+f))*b,r[1]=(d+x)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(d-x)*T,r[5]=(1-(p+f))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+y)*D,r[9]=(m-S)*D,r[10]=(1-(p+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Fi.set(r[0],r[1],r[2]).length(),a=Fi.set(r[4],r[5],r[6]).length(),o=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],dn.copy(this);let l=1/s,u=1/a,h=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=mn,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r),g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===mn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Lr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=mn,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-r),p=-(t+e)/(t-e),d=-(i+r)/(i-r),g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===mn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Lr)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Fi=new P,dn=new ht,kf=new P(0,0,0),Hf=new P(1,1,1),kn=new P,Bs=new P,Kt=new P,kc=new ht,Hc=new cn,xn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";ji=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gf=0,Gc=new P,Oi=new cn,Pn=new ht,Ns=new P,Er=new P,Vf=new P,Wf=new cn,Vc=new P(1,0,0),Wc=new P(0,1,0),Xc=new P(0,0,1),Yc={type:"added"},Xf={type:"removed"},zi={type:"childadded",child:null},Ko={type:"childremoved",child:null},Nt=class n extends Yt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new xn,i=new cn,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new He}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ns.copy(e):Ns.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Er,Ns,this.up):Pn.lookAt(Ns,Er,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xf),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Nt.DEFAULT_UP=new P(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;pn=new P,In=new P,Jo=new P,Un=new P,ki=new P,Hi=new P,qc=new P,jo=new P,$o=new P,el=new P,tl=new mt,nl=new mt,il=new mt,Vn=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pn.subVectors(e,t),r.cross(pn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pn.subVectors(r,t),In.subVectors(i,t),Jo.subVectors(e,t);let a=pn.dot(pn),o=pn.dot(In),c=pn.dot(Jo),l=In.dot(In),u=In.dot(Jo),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let p=1/h,d=(l*c-o*u)*p,g=(a*u-o*c)*p;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tl,s.x),a.addScaledVector(nl,s.y),a.addScaledVector(il,s.z),a}static isFrontFacing(e,t,i,r){return pn.subVectors(i,t),In.subVectors(e,t),pn.cross(In).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),pn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;ki.subVectors(r,i),Hi.subVectors(s,i),jo.subVectors(e,i);let c=ki.dot(jo),l=Hi.dot(jo);if(c<=0&&l<=0)return t.copy(i);$o.subVectors(e,r);let u=ki.dot($o),h=Hi.dot($o);if(u>=0&&h<=u)return t.copy(r);let p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ki,a);el.subVectors(e,s);let d=ki.dot(el),g=Hi.dot(el);if(g>=0&&d<=g)return t.copy(s);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Hi,o);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return qc.subVectors(s,r),o=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(qc,o);let f=1/(m+v+p);return a=v*f,o=p*f,t.copy(i).addScaledVector(ki,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Wl(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=rl(a,s,e+1/3),this.g=rl(a,s,e),this.b=rl(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){let i=Qu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return je.workingToColorSpace(Ot.copy(this),e),Math.round(Ve(Ot.r*255,0,255))*65536+Math.round(Ve(Ot.g*255,0,255))*256+Math.round(Ve(Ot.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ot.copy(this),t);let i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=ot){je.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,r=Ot.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Fs);let i=Rr(Hn.h,Fs.h,t),r=Rr(Hn.s,Fs.s,t),s=Rr(Hn.l,Fs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new ze;ze.NAMES=Qu;Yf=0,jt=class extends Yt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=di,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ea&&(i.blendSrc=this.blendSrc),this.blendDst!==ta&&(i.blendDst=this.blendDst),this.blendEquation!==Xn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_n=class extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},At=new P,Os=new ae,qf=0,zt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}},Fr=class extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Or=class extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ke=class extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Zf=0,an=new ht,sl=new Nt,Gi=new P,Jt=new Yn,wr=new Yn,Ct=new P,vt=class n extends Yt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yl(e)?Or:Fr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Jt.min,wr.min),Jt.expandByPoint(Ct),Ct.addVectors(Jt.max,wr.max),Jt.expandByPoint(Ct)):(Jt.expandByPoint(wr.min),Jt.expandByPoint(wr.max))}Jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ct.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(e,l),Ct.add(Gi)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<i.count;C++)o[C]=new P,c[C]=new P;let l=new P,u=new P,h=new P,p=new ae,d=new ae,g=new ae,v=new P,m=new P;function f(C,A,M){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),p.fromBufferAttribute(s,C),d.fromBufferAttribute(s,A),g.fromBufferAttribute(s,M),u.sub(l),h.sub(l),d.sub(p),g.sub(p);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[C].add(v),o[A].add(v),o[M].add(v),c[C].add(m),c[A].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,A=S.length;C<A;++C){let M=S[C],I=M.start,U=M.count;for(let O=I,G=I+U;O<G;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new P,x=new P,b=new P,T=new P;function D(C){b.fromBufferAttribute(r,C),T.copy(b);let A=o[C];y.copy(A),y.sub(b.multiplyScalar(b.dot(A))).normalize(),x.crossVectors(T,A);let I=x.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,I)}for(let C=0,A=S.length;C<A;++C){let M=S[C],I=M.start,U=M.count;for(let O=I,G=I+U;O<G;O+=3)D(e.getX(O+0)),D(e.getX(O+1)),D(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,p=new l.constructor(c.length*u),d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let f=0;f<u;f++)p[g++]=l[d++]}return new zt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let p=l[u],d=e(p,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zc=new ht,ui=new qn,zs=new mi,Qc=new P,ks=new P,Hs=new P,Gs=new P,al=new P,Vs=new P,Kc=new P,Ws=new P,xt=class extends Nt{constructor(e=new vt,t=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Vs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(al.fromBufferAttribute(h,e),a?Vs.addScaledVector(al,u):Vs.addScaledVector(al.sub(t),u))}t.add(Vs)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(s),ui.copy(e.ray).recast(e.near),!(zs.containsPoint(ui.origin)===!1&&(ui.intersectSphere(zs,Qc)===null||ui.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(Zc.copy(s).invert(),ui.copy(e.ray).applyMatrix4(Zc),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){let m=p[g],f=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,b=y;x<b;x+=3){let T=o.getX(x),D=o.getX(x+1),C=o.getX(x+2);r=Xs(this,f,e,i,l,u,h,T,D,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){let S=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);r=Xs(this,a,e,i,l,u,h,S,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){let m=p[g],f=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,b=y;x<b;x+=3){let T=x,D=x+1,C=x+2;r=Xs(this,f,e,i,l,u,h,T,D,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){let S=m,y=m+1,x=m+2;r=Xs(this,a,e,i,l,u,h,S,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};An=class n extends vt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],p=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(h,2));function g(v,m,f,S,y,x,b,T,D,C,A){let M=x/D,I=b/C,U=x/2,O=b/2,G=T/2,Z=D+1,Y=C+1,ie=0,W=0,ce=new P;for(let ve=0;ve<Y;ve++){let q=ve*I-O;for(let ue=0;ue<Z;ue++){let Pe=ue*M-U;ce[v]=Pe*S,ce[m]=q*y,ce[f]=G,l.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[f]=T>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(ue/D),h.push(1-ve/C),ie+=1}}for(let ve=0;ve<C;ve++)for(let q=0;q<D;q++){let ue=p+q+Z*ve,Pe=p+q+Z*(ve+1),Fe=p+(q+1)+Z*(ve+1),Le=p+(q+1)+Z*ve;c.push(ue,Pe,Le),c.push(Pe,Fe,Le),W+=6}o.addGroup(d,W,A),d+=W,p+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Ku={clone:wi,merge:kt},Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},gi=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new P,Jc=new ae,jc=new ae,Rt=class extends gi{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Jc,jc),t.subVectors(jc,Jc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vi=-90,Wi=1,la=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Rt(Vi,Wi,e,t);r.layers=this.layers,this.add(r);let s=new Rt(Vi,Wi,e,t);s.layers=this.layers,this.add(s);let a=new Rt(Vi,Wi,e,t);a.layers=this.layers,this.add(a);let o=new Rt(Vi,Wi,e,t);o.layers=this.layers,this.add(o);let c=new Rt(Vi,Wi,e,t);c.layers=this.layers,this.add(c);let l=new Rt(Vi,Wi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},zr=class extends Pt{constructor(e=[],t=Mi,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ca=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new An(5,5,5),s=new Mt({name:"CubemapFromEquirect",uniforms:wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yt,blending:tn});s.uniforms.tEquirect.value=t;let a=new xt(r,s),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=Bt),new la(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Dt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},kr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zn=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ol=new P,ed=new P,td=new He,on=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ol.subVectors(i,t).cross(ed.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||td.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hi=new mi,nd=new ae(.5,.5),Ys=new P,er=class{constructor(e=new on,t=new on,i=new on,r=new on,s=new on,a=new on){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],p=s[6],d=s[7],g=s[8],v=s[9],m=s[10],f=s[11],S=s[12],y=s[13],x=s[14],b=s[15];if(r[0].setComponents(l-a,d-u,f-g,b-S).normalize(),r[1].setComponents(l+a,d+u,f+g,b+S).normalize(),r[2].setComponents(l+o,d+h,f+v,b+y).normalize(),r[3].setComponents(l-o,d-h,f-v,b-y).normalize(),i)r[4].setComponents(c,p,m,x).normalize(),r[5].setComponents(l-c,d-p,f-m,b-x).normalize();else if(r[4].setComponents(l-c,d-p,f-m,b-x).normalize(),t===mn)r[5].setComponents(l+c,d+p,f+m,b+x).normalize();else if(t===Lr)r[5].setComponents(c,p,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);let t=nd.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ys.x=r.normal.x>0?e.max.x:e.min.x,Ys.y=r.normal.y>0?e.max.y:e.min.y,Ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tr=class extends jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ua=new P,ha=new P,$c=new ht,Tr=new qn,qs=new mi,ll=new P,eu=new P,Hr=class extends Nt{constructor(e=new vt,t=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ua.fromBufferAttribute(t,r-1),ha.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ua.distanceTo(ha);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(r),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;$c.copy(r).invert(),Tr.copy(e.ray).applyMatrix4($c);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){let f=u.getX(v),S=u.getX(v+1),y=Zs(this,e,Tr,c,f,S,v);y&&t.push(y)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(d),f=Zs(this,e,Tr,c,v,m,g-1);f&&t.push(f)}}else{let d=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){let f=Zs(this,e,Tr,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){let v=Zs(this,e,Tr,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};Gr=class extends Pt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},vi=class extends Pt{constructor(e,t,i=Sn,r,s,a,o=ln,c=ln,l,u=Zi,h=1){if(u!==Zi&&u!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:h};super(p,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ji(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vr=class extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qn=class n extends vt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,p=t,d=2*h+p,g=i*2+s,v=r+1,m=new P,f=new P;for(let S=0;S<=g;S++){let y=0,x=0,b=0,T=0;if(S<=i){let A=S/i,M=A*Math.PI/2;x=-u-e*Math.cos(M),b=e*Math.sin(M),T=-e*Math.cos(M),y=A*h}else if(S<=i+s){let A=(S-i)/s;x=-u+A*t,b=e,T=0,y=h+A*p}else{let A=(S-i-s)/i,M=A*Math.PI/2;x=u+e*Math.sin(M),b=e*Math.cos(M),T=e*Math.sin(M),y=h+p+A*h}let D=Math.max(0,Math.min(1,y/d)),C=0;S===0?C=.5/r:S===g&&(C=-.5/r);for(let A=0;A<=r;A++){let M=A/r,I=M*Math.PI*2,U=Math.sin(I),O=Math.cos(I);f.x=-b*O,f.y=x,f.z=b*U,o.push(f.x,f.y,f.z),m.set(-b*O,T,b*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+C,D)}if(S>0){let A=(S-1)*v;for(let M=0;M<r;M++){let I=A+M,U=A+M+1,O=S*v+M,G=S*v+M+1;a.push(I,U,O),a.push(U,G,O)}}}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Bn=class n extends vt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],p=[],d=[],g=0,v=[],m=i/2,f=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2));function S(){let x=new P,b=new P,T=0,D=(t-e)/i;for(let C=0;C<=s;C++){let A=[],M=C/s,I=M*(t-e)+e;for(let U=0;U<=r;U++){let O=U/r,G=O*c+o,Z=Math.sin(G),Y=Math.cos(G);b.x=I*Z,b.y=-M*i+m,b.z=I*Y,h.push(b.x,b.y,b.z),x.set(Z,D,Y).normalize(),p.push(x.x,x.y,x.z),d.push(O,1-M),A.push(g++)}v.push(A)}for(let C=0;C<r;C++)for(let A=0;A<s;A++){let M=v[A][C],I=v[A+1][C],U=v[A+1][C+1],O=v[A][C+1];(e>0||A!==0)&&(u.push(M,I,O),T+=3),(t>0||A!==s-1)&&(u.push(I,U,O),T+=3)}l.addGroup(f,T,0),f+=T}function y(x){let b=g,T=new ae,D=new P,C=0,A=x===!0?e:t,M=x===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*M,0),p.push(0,M,0),d.push(.5,.5),g++;let I=g;for(let U=0;U<=r;U++){let G=U/r*c+o,Z=Math.cos(G),Y=Math.sin(G);D.x=A*Y,D.y=m*M,D.z=A*Z,h.push(D.x,D.y,D.z),p.push(0,M,0),T.x=Z*.5+.5,T.y=Y*.5*M+.5,d.push(T.x,T.y),g++}for(let U=0;U<r;U++){let O=b+U,G=I+U;x===!0?u.push(G,G+1,O):u.push(G+1,G,O),C+=3}l.addGroup(f,C,x===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nr=class n extends Bn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ir=class n extends vt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),l(i),u(),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(s.slice(),3)),this.setAttribute("uv",new Ke(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let y=new P,x=new P,b=new P;for(let T=0;T<t.length;T+=3)d(t[T+0],y),d(t[T+1],x),d(t[T+2],b),c(y,x,b,S)}function c(S,y,x,b){let T=b+1,D=[];for(let C=0;C<=T;C++){D[C]=[];let A=S.clone().lerp(x,C/T),M=y.clone().lerp(x,C/T),I=T-C;for(let U=0;U<=I;U++)U===0&&C===T?D[C][U]=A:D[C][U]=A.clone().lerp(M,U/I)}for(let C=0;C<T;C++)for(let A=0;A<2*(T-C)-1;A++){let M=Math.floor(A/2);A%2===0?(p(D[C][M+1]),p(D[C+1][M]),p(D[C][M])):(p(D[C][M+1]),p(D[C+1][M+1]),p(D[C+1][M]))}}function l(S){let y=new P;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(S),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){let S=new P;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];let x=m(S)/2/Math.PI+.5,b=f(S)/Math.PI+.5;a.push(x,1-b)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){let y=a[S+0],x=a[S+2],b=a[S+4],T=Math.max(y,x,b),D=Math.min(y,x,b);T>.9&&D<.1&&(y<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function p(S){s.push(S.x,S.y,S.z)}function d(S,y){let x=S*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){let S=new P,y=new P,x=new P,b=new P,T=new ae,D=new ae,C=new ae;for(let A=0,M=0;A<s.length;A+=9,M+=6){S.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),x.set(s[A+6],s[A+7],s[A+8]),T.set(a[M+0],a[M+1]),D.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),b.copy(S).add(y).add(x).divideScalar(3);let I=m(b);v(T,M+0,S,I),v(D,M+2,y,I),v(C,M+4,x,I)}}function v(S,y,x,b){b<0&&S.x===1&&(a[y]=S.x-1),x.x===0&&x.z===0&&(a[y]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Wr=class n extends ir{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$t=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);let u=i[r],p=i[r+1]-u,d=(a-u)/p;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ae:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,r=[],s=[],a=[],o=new P,c=new ht;for(let d=0;d<=e;d++){let g=d/e;r[d]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),p<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ve(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Ve(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},rr=class extends $t{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ae){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*u-d*h+this.aX,l=p*h+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fa=class extends rr{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};Qs=new P,cl=new Zl,ul=new Zl,hl=new Zl,sr=class extends $t{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Qs.subVectors(r[0],r[1]).add(r[0]),l=Qs);let h=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Qs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),cl.initNonuniformCatmullRom(l.x,h.x,p.x,u.x,g,v,m),ul.initNonuniformCatmullRom(l.y,h.y,p.y,u.y,g,v,m),hl.initNonuniformCatmullRom(l.z,h.z,p.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(l.x,h.x,p.x,u.x,this.tension),ul.initCatmullRom(l.y,h.y,p.y,u.y,this.tension),hl.initCatmullRom(l.z,h.z,p.z,u.z,this.tension));return i.set(cl.calc(c),ul.calc(c),hl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Xr=class extends $t{constructor(e=new ae,t=new ae,i=new ae,r=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ae){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Pr(e,r.x,s.x,a.x,o.x),Pr(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends $t{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Pr(e,r.x,s.x,a.x,o.x),Pr(e,r.y,s.y,a.y,o.y),Pr(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yr=class extends $t{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends $t{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends $t{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Dr(e,r.x,s.x,a.x),Dr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends $t{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Dr(e,r.x,s.x,a.x),Dr(e,r.y,s.y,a.y),Dr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(tu(o,c.x,l.x,u.x,h.x),tu(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ae().fromArray(r))}return this}},xl=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:sr,CubicBezierCurve:Xr,CubicBezierCurve3:da,EllipseCurve:rr,LineCurve:Yr,LineCurve3:pa,QuadraticBezierCurve:qr,QuadraticBezierCurve3:Zr,SplineCurve:Qr}),ma=class extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new xl[r.type]().fromJSON(r))}return this}},Kr=class extends ma{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Yr(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new qr(this.currentPoint.clone(),new ae(e,t),new ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Xr(this.currentPoint.clone(),new ae(e,t),new ae(i,r),new ae(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Qr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,a,o,c),this}absellipse(e,t,i,r,s,a,o,c){let l=new rr(e,t,i,r,s,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ar=class extends Kr{constructor(e){super(e),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Kr().fromJSON(r))}return this}};Al=class{static triangulate(e,t,i=2){return ud(e,t,i)}},qi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];iu(e),ru(i,e);let a=e.length;t.forEach(iu);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,ru(i,t[c]);let o=Al.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};es=class n extends ir{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ts=class n extends ir{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},yi=class n extends vt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,p=t/c,d=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let S=f*p-a;for(let y=0;y<l;y++){let x=y*h-s;g.push(x,-S,0),v.push(0,0,1),m.push(y/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){let y=S+l*f,x=S+l*(f+1),b=S+1+l*(f+1),T=S+1+l*f;d.push(y,x,T),d.push(x,b,T)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ns=class n extends vt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],c=[],l=[],u=[],h=e,p=(t-e)/r,d=new P,g=new ae;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){let f=s+m/i*a;d.x=h*Math.cos(f),d.y=h*Math.sin(f),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=p}for(let v=0;v<r;v++){let m=v*(i+1);for(let f=0;f<i;f++){let S=f+m,y=S,x=S+i+1,b=S+i+2,T=S+1;o.push(y,x,T),o.push(x,b,T)}}this.setIndex(o),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},is=class n extends vt{constructor(e=new ar([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(s,3)),this.setAttribute("uv",new Ke(a,2));function l(u){let h=r.length/3,p=u.extractPoints(t),d=p.shape,g=p.holes;qi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,f=g.length;m<f;m++){let S=g[m];qi.isClockWise(S)===!0&&(g[m]=S.reverse())}let v=qi.triangulateShape(d,g);for(let m=0,f=g.length;m<f;m++){let S=g[m];d=d.concat(S)}for(let m=0,f=d.length;m<f;m++){let S=d[m];r.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let m=0,f=v.length;m<f;m++){let S=v[m],y=S[0]+h,x=S[1]+h,b=S[2]+h;i.push(y,x,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return bd(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}};Kn=class n extends vt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new P,p=new P,d=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){let S=[],y=f/i,x=0;f===0&&a===0?x=.5/t:f===i&&c===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let T=b/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),p.copy(h).normalize(),v.push(p.x,p.y,p.z),m.push(T+x,1-y),S.push(l++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){let y=u[f][S+1],x=u[f][S],b=u[f+1][S],T=u[f+1][S+1];(f!==0||a>0)&&d.push(y,x,T),(f!==i-1||c<Math.PI)&&d.push(x,b,T)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},lr=class n extends vt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],c=[],l=[],u=new P,h=new P,p=new P;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){let v=g/r*s,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(h,u).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){let v=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,f=(r+1)*(d-1)+g,S=(r+1)*d+g;a.push(v,m,S),a.push(m,f,S)}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},rs=class n extends vt{constructor(e=new Zr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,c=new P,l=new ae,u=new P,h=[],p=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2));function v(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),S(),f()}function m(y){u=e.getPointAt(y/t,u);let x=a.normals[y],b=a.binormals[y];for(let T=0;T<=r;T++){let D=T/r*Math.PI*2,C=Math.sin(D),A=-Math.cos(D);c.x=A*x.x+C*b.x,c.y=A*x.y+C*b.y,c.z=A*x.z+C*b.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=u.x+i*c.x,o.y=u.y+i*c.y,o.z=u.z+i*c.z,h.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let x=1;x<=r;x++){let b=(r+1)*(y-1)+(x-1),T=(r+1)*y+(x-1),D=(r+1)*y+x,C=(r+1)*(y-1)+x;g.push(b,T,C),g.push(T,D,C)}}function S(){for(let y=0;y<=t;y++)for(let x=0;x<=r;x++)l.x=y/t,l.y=x/r,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new xl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Jn=class extends jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cr=class extends Jn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ga=class extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},va=class extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};_i=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xa=class extends _i{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dl,endingEnd:dl}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case pl:s=e,o=2*t-i;break;case ml:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case pl:a=e,c=2*i-t;break;case ml:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,f=-p*m+2*p*v-p*g,S=(1+p)*m+(-1.5-2*p)*v+(-.5+p)*g+1,y=(-1-d)*m+(1.5+d)*v+.5*g,x=d*m-d*v;for(let b=0;b!==o;++b)s[b]=f*a[u+b]+S*a[l+b]+y*a[c+b]+x*a[h+b];return s}},ya=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(r-t),h=1-u;for(let p=0;p!==o;++p)s[p]=a[l+p]*h+a[c+p]*u;return s}},_a=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},en=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=js(t,this.TimeBufferType),this.values=js(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:js(e.times,Array),values:js(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case $s:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return $s}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Cd(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===$s,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*i,p=h-i,d=h+i;for(let g=0;g!==i;++g){let v=t[h+g];if(v!==t[p+g]||v!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,p=a*i;for(let d=0;d!==i;++d)t[p+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=ra;jn=class extends en{constructor(e,t,i){super(e,t,i)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Ir;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;Aa=class extends en{constructor(e,t,i,r){super(e,t,i,r)}};Aa.prototype.ValueTypeName="color";Ma=class extends en{constructor(e,t,i,r){super(e,t,i,r)}};Ma.prototype.ValueTypeName="number";Sa=class extends _i{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)cn.slerpFlat(s,0,a,l-o,a,l,c);return s}},ss=class extends en{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};ss.prototype.ValueTypeName="quaternion";ss.prototype.InterpolantFactoryMethodSmooth=void 0;$n=class extends en{constructor(e,t,i){super(e,t,i)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ir;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;Ea=class extends en{constructor(e,t,i,r){super(e,t,i,r)}};Ea.prototype.ValueTypeName="vector";wa=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=l.length;h<p;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},th=new wa,Ta=class{constructor(e){this.manager=e!==void 0?e:th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";as=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},os=class extends as{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fl=new ht,su=new P,au=new P,Ml=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Ut,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(au),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ai=class extends gi{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sl=class extends Ml{constructor(){super(new Ai(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ur=class extends as{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Sl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ba=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ql="\\[\\]\\.:\\/",Rd=new RegExp("["+Ql+"]","g"),Kl="[^"+Ql+"]",Dd="[^"+Ql.replace("\\.","")+"]",Pd=/((?:WC+[\/:])*)/.source.replace("WC",Kl),Id=/(WCOD+)?/.source.replace("WCOD",Dd),Ud=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl),Ld=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl),Bd=new RegExp("^"+Pd+Id+Ud+Ld+"$"),Nd=["material","materials","bones","map"],El=class{constructor(e,t,i){let r=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rd,"")}static parseTrackName(e){let t=Bd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Nd.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=El;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Nx=new Float32Array(1),rt=class n{constructor(e){this.value=e}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}},ou=new ht,ls=class{constructor(e,t,i=0,r=1/0){this.ray=new qn(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ji,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ou.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(e,t=!0,i=[]){return wl(e,this,i,t),i.sort(lu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)wl(e[r],this,i,t);return i.sort(lu),i}};hr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},cs=class extends Yt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function wh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Od(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<h.length;d++){let g=h[p],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,h[p]=v)}h.length=p+1;for(let d=0,g=h.length;d<g;d++){let v=h[d];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}function yg(n,e,t,i,r,s,a){let o=new ze(0),c=s===!0?0:1,l,u,h=null,p=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1,b=g(y);b===null?f(o,c):b&&b.isColor&&(f(b,1),x=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===us)?(u===void 0&&(u=new xt(new An(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:wi(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(Ti)),u.material.toneMapped=je.getTransfer(b.colorSpace)!==nt,(h!==b||p!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,p=b.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new xt(new yi(2,2),new Mt({name:"BackgroundMaterial",uniforms:wi(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(b.colorSpace)!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,x){y.getRGB(Ao,ql(n)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,x,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(o,c)},render:v,addToRenderList:m,dispose:S}}function _g(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null),s=r,a=!1;function o(M,I,U,O,G){let Z=!1,Y=h(O,U,I);s!==Y&&(s=Y,l(s.object)),Z=d(M,O,U,G),Z&&g(M,O,U,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(M,I,U,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,I,U){let O=U.wireframe===!0,G=i[M.id];G===void 0&&(G={},i[M.id]=G);let Z=G[I.id];Z===void 0&&(Z={},G[I.id]=Z);let Y=Z[O];return Y===void 0&&(Y=p(c()),Z[O]=Y),Y}function p(M){let I=[],U=[],O=[];for(let G=0;G<t;G++)I[G]=0,U[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,I,U,O){let G=s.attributes,Z=I.attributes,Y=0,ie=U.getAttributes();for(let W in ie)if(ie[W].location>=0){let ve=G[W],q=Z[W];if(q===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),ve===void 0||ve.attribute!==q||q&&ve.data!==q.data)return!0;Y++}return s.attributesNum!==Y||s.index!==O}function g(M,I,U,O){let G={},Z=I.attributes,Y=0,ie=U.getAttributes();for(let W in ie)if(ie[W].location>=0){let ve=Z[W];ve===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));let q={};q.attribute=ve,ve&&ve.data&&(q.data=ve.data),G[W]=q,Y++}s.attributes=G,s.attributesNum=Y,s.index=O}function v(){let M=s.newAttributes;for(let I=0,U=M.length;I<U;I++)M[I]=0}function m(M){f(M,0)}function f(M,I){let U=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;U[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),G[M]!==I&&(n.vertexAttribDivisor(M,I),G[M]=I)}function S(){let M=s.newAttributes,I=s.enabledAttributes;for(let U=0,O=I.length;U<O;U++)I[U]!==M[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function y(M,I,U,O,G,Z,Y){Y===!0?n.vertexAttribIPointer(M,I,U,G,Z):n.vertexAttribPointer(M,I,U,O,G,Z)}function x(M,I,U,O){v();let G=O.attributes,Z=U.getAttributes(),Y=I.defaultAttributeValues;for(let ie in Z){let W=Z[ie];if(W.location>=0){let ce=G[ie];if(ce===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){let ve=ce.normalized,q=ce.itemSize,ue=e.get(ce);if(ue===void 0)continue;let Pe=ue.buffer,Fe=ue.type,Le=ue.bytesPerElement,k=Fe===n.INT||Fe===n.UNSIGNED_INT||ce.gpuType===ka;if(ce.isInterleavedBufferAttribute){let K=ce.data,de=K.stride,Be=ce.offset;if(K.isInstancedInterleavedBuffer){for(let Se=0;Se<W.locationSize;Se++)f(W.location+Se,K.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Se=0;Se<W.locationSize;Se++)y(W.location+Se,q/W.locationSize,Fe,ve,de*Le,(Be+q/W.locationSize*Se)*Le,k)}else{if(ce.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)f(W.location+K,ce.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let K=0;K<W.locationSize;K++)m(W.location+K);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let K=0;K<W.locationSize;K++)y(W.location+K,q/W.locationSize,Fe,ve,q*Le,q/W.locationSize*K*Le,k)}}else if(Y!==void 0){let ve=Y[ie];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(W.location,ve);break;case 3:n.vertexAttrib3fv(W.location,ve);break;case 4:n.vertexAttrib4fv(W.location,ve);break;default:n.vertexAttrib1fv(W.location,ve)}}}}S()}function b(){C();for(let M in i){let I=i[M];for(let U in I){let O=I[U];for(let G in O)u(O[G].object),delete O[G];delete I[U]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let I=i[M.id];for(let U in I){let O=I[U];for(let G in O)u(O[G].object),delete O[G];delete I[U]}delete i[M.id]}function D(M){for(let I in i){let U=i[I];if(U[M.id]===void 0)continue;let O=U[M.id];for(let G in O)u(O[G].object),delete O[G];delete U[M.id]}}function C(){A(),a=!0,s!==r&&(s=r,l(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Ag(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function c(l,u,h,p){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Mg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==un&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let C=D===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Ut&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==En&&!C)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:T}}function Sg(n){let e=this,t=null,i=0,r=!1,s=!1,a=new on,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let d=h.length!==0||p||i!==0||r;return r=p,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let S=s?0:i,y=S*4,x=f.clippingState||null;c.value=x,x=u(g,p,y,d);for(let b=0;b!==y;++b)x[b]=t[b];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,d,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let f=d+v*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=d;y!==v;++y,x+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Eg(n){let e=new WeakMap;function t(a,o){return o===Fa?a.mapping=Mi:o===Oa&&(a.mapping=Si),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fa||o===Oa)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ca(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function Tg(n){let e=[],t=[],i=[],r=n,s=n-mr+1+nh.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>n-mr?c=nh[a-n+mr-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,f=1,S=new Float32Array(v*g*d),y=new Float32Array(m*g*d),x=new Float32Array(f*g*d);for(let T=0;T<d;T++){let D=T%3*2/3-1,C=T>2?0:-1,A=[D,C,0,D+2/3,C,0,D+2/3,C+1,0,D,C,0,D+2/3,C+1,0,D,C+1,0];S.set(A,v*g*T),y.set(p,m*g*T);let M=[T,T,T,T,T,T];x.set(M,f*g*T)}let b=new vt;b.setAttribute("position",new zt(S,v)),b.setAttribute("uv",new zt(y,m)),b.setAttribute("faceIndex",new zt(x,f)),e.push(b),r>mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sh(n,e,t){let i=new It(n,e,t);return i.texture.mapping=us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bg(n,e,t){let i=new Float32Array(Ri),r=new P(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function ah(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function oh(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Fa||c===Oa,u=c===Mi||c===Si;if(l||u){let h=e.get(o),p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Eo(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let d=o.image;return l&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Eo(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Rg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ki("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Dg(n,e,t,i){let r={},s=new WeakMap;function a(h){let p=h.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete r[p.id];let d=s.get(p);d&&(e.remove(d),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(h){let p=h.attributes;for(let d in p)e.update(p[d],n.ARRAY_BUFFER)}function l(h){let p=[],d=h.index,g=h.attributes.position,v=0;if(d!==null){let S=d.array;v=d.version;for(let y=0,x=S.length;y<x;y+=3){let b=S[y+0],T=S[y+1],D=S[y+2];p.push(b,T,T,D,D,b)}}else if(g!==void 0){let S=g.array;v=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){let b=y+0,T=y+1,D=y+2;p.push(b,T,T,D,D,b)}}else return;let m=new(Yl(p)?Or:Fr)(p,1);m.version=v;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){let p=s.get(h);if(p){let d=h.index;d!==null&&p.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Pg(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,d){n.drawElements(i,d,s,p*a),t.update(d,i,1)}function l(p,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,p*a,g),t.update(d,i,g))}function u(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,i,1)}function h(p,d,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/a,d[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,p,0,v,0,g);let f=0;for(let S=0;S<g;S++)f+=d[S]*v[S];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ig(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ug(n,e,t){let i=new WeakMap,r=new mt;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,p=i.get(o);if(p===void 0||p.count!==h){let A=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=o.attributes.position.count*y,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*b*4*h),D=new Nr(T,x,b,h);D.type=En,D.needsUpdate=!0;let C=y*4;for(let M=0;M<h;M++){let I=m[M],U=f[M],O=S[M],G=x*b*4*M;for(let Z=0;Z<I.count;Z++){let Y=Z*C;d===!0&&(r.fromBufferAttribute(I,Z),T[G+Y+0]=r.x,T[G+Y+1]=r.y,T[G+Y+2]=r.z,T[G+Y+3]=0),g===!0&&(r.fromBufferAttribute(U,Z),T[G+Y+4]=r.x,T[G+Y+5]=r.y,T[G+Y+6]=r.z,T[G+Y+7]=0),v===!0&&(r.fromBufferAttribute(O,Z),T[G+Y+8]=r.x,T[G+Y+9]=r.y,T[G+Y+10]=r.z,T[G+Y+11]=O.itemSize===4?r.w:1)}}p={count:h,texture:D,size:new ae(x,b)},i.set(o,p),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Lg(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return h}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}function vr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ch[r];if(s===void 0&&(s=new Float32Array(r),ch[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bo(n,e){let t=uh[e];t===void 0&&(t=new Int32Array(e),uh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ng(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function Fg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function Og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function zg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;dh.set(i),n.uniformMatrix2fv(this.addr,!1,dh),Tt(t,i)}}function kg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;fh.set(i),n.uniformMatrix3fv(this.addr,!1,fh),Tt(t,i)}}function Hg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;hh.set(i),n.uniformMatrix4fv(this.addr,!1,hh),Tt(t,i)}}function Gg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function Wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function Xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function Yg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function Zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function Qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function Kg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lh.compareFunction=Gl,s=lh):s=Th,t.setTexture2D(e||s,r)}function Jg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ch,r)}function jg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rh,r)}function $g(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bh,r)}function ev(n){switch(n){case 5126:return Bg;case 35664:return Ng;case 35665:return Fg;case 35666:return Og;case 35674:return zg;case 35675:return kg;case 35676:return Hg;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return Yg;case 36294:return qg;case 36295:return Zg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return $g}}function tv(n,e){n.uniform1fv(this.addr,e)}function nv(n,e){let t=vr(e,this.size,2);n.uniform2fv(this.addr,t)}function iv(n,e){let t=vr(e,this.size,3);n.uniform3fv(this.addr,t)}function rv(n,e){let t=vr(e,this.size,4);n.uniform4fv(this.addr,t)}function sv(n,e){let t=vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function av(n,e){let t=vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ov(n,e){let t=vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lv(n,e){n.uniform1iv(this.addr,e)}function cv(n,e){n.uniform2iv(this.addr,e)}function uv(n,e){n.uniform3iv(this.addr,e)}function hv(n,e){n.uniform4iv(this.addr,e)}function fv(n,e){n.uniform1uiv(this.addr,e)}function dv(n,e){n.uniform2uiv(this.addr,e)}function pv(n,e){n.uniform3uiv(this.addr,e)}function mv(n,e){n.uniform4uiv(this.addr,e)}function gv(n,e,t){let i=this.cache,r=e.length,s=bo(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Th,s[a])}function vv(n,e,t){let i=this.cache,r=e.length,s=bo(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ch,s[a])}function xv(n,e,t){let i=this.cache,r=e.length,s=bo(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Rh,s[a])}function yv(n,e,t){let i=this.cache,r=e.length,s=bo(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bh,s[a])}function _v(n){switch(n){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return rv;case 35674:return sv;case 35675:return av;case 35676:return ov;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return uv;case 35669:case 35673:return hv;case 5125:return fv;case 36294:return dv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return yv}}function ph(n,e){n.seq.push(e),n.map[e.id]=e}function Av(n,e,t){let i=n.name,r=i.length;for(rc.lastIndex=0;;){let s=rc.exec(i),a=rc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ph(t,l===void 0?new sc(o,n,e):new ac(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new oc(o),ph(t,h)),t=h}}}function mh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Ev(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function wv(n){je._getMatrix(gh,je.workingColorSpace,n);let e=`mat3( ${gh.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Ur:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ev(n.getShaderSource(e),o)}else return s}function Tv(n,e){let t=wv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bv(n,e){let t;switch(e){case Pu:t="Linear";break;case Iu:t="Reinhard";break;case Uu:t="Cineon";break;case Na:t="ACESFilmic";break;case Bu:t="AgX";break;case Nu:t="Neutral";break;case Lu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cv(){je.getLuminanceCoefficients(So);let n=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Dv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Pv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function gs(n){return n!==""}function xh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function lc(n){return n.replace(Iv,Lv)}function Lv(n,e){let t=We[e];if(t===void 0){let i=Uv.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}function _h(n){return n.replace(Bv,Nv)}function Nv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ah(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ca?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ov(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mi:case Si:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Si&&(e="ENVMAP_MODE_REFRACTION"),e}function kv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ru:e="ENVMAP_BLENDING_MIX";break;case Du:e="ENVMAP_BLENDING_ADD";break}return e}function Hv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Gv(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Fv(t),l=Ov(t),u=zv(t),h=kv(t),p=Hv(t),d=Rv(t),g=Dv(s),v=r.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),f.length>0&&(f+=`
`)):(m=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),f=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?We.tonemapping_pars_fragment:"",t.toneMapping!==Nn?bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Tv("linearToOutputTexel",t.outputColorSpace),Cv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),a=lc(a),a=xh(a,t),a=yh(a,t),o=lc(o),o=xh(o,t),o=yh(o,t),a=_h(a),o=_h(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=S+m+a,x=S+f+o,b=mh(r,r.VERTEX_SHADER,y),T=mh(r,r.FRAGMENT_SHADER,x);r.attachShader(v,b),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(I){if(n.debug.checkShaderErrors){let U=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(b)||"",G=r.getShaderInfoLog(T)||"",Z=U.trim(),Y=O.trim(),ie=G.trim(),W=!0,ce=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,b,T);else{let ve=vh(r,b,"vertex"),q=vh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Z+`
`+ve+`
`+q)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Y===""||ie==="")&&(ce=!1);ce&&(I.diagnostics={runnable:W,programLog:Z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:ie,prefix:f}})}r.deleteShader(b),r.deleteShader(T),C=new gr(r,v),A=Pv(r,v)}let C;this.getUniforms=function(){return C===void 0&&D(this),C};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,Mv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=T,this}function Wv(n,e,t,i,r,s,a){let o=new ji,c=new cc,l=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,M,I,U,O){let G=U.fog,Z=O.geometry,Y=A.isMeshStandardMaterial?U.environment:null,ie=(A.isMeshStandardMaterial?t:e).get(A.envMap||Y),W=ie&&ie.mapping===us?ie.image.height:null,ce=g[A.type];A.precision!==null&&(d=r.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,q=ve!==void 0?ve.length:0,ue=0;Z.morphAttributes.position!==void 0&&(ue=1),Z.morphAttributes.normal!==void 0&&(ue=2),Z.morphAttributes.color!==void 0&&(ue=3);let Pe,Fe,Le,k;if(ce){let tt=Tn[ce];Pe=tt.vertexShader,Fe=tt.fragmentShader}else Pe=A.vertexShader,Fe=A.fragmentShader,c.update(A),Le=c.getVertexShaderID(A),k=c.getFragmentShaderID(A);let K=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),Be=O.isInstancedMesh===!0,Se=O.isBatchedMesh===!0,Xe=!!A.map,_t=!!A.matcap,R=!!ie,Je=!!A.aoMap,Oe=!!A.lightMap,Re=!!A.bumpMap,J=!!A.normalMap,be=!!A.displacementMap,ee=!!A.emissiveMap,oe=!!A.metalnessMap,Ye=!!A.roughnessMap,Ze=A.anisotropy>0,w=A.clearcoat>0,_=A.dispersion>0,N=A.iridescence>0,z=A.sheen>0,Q=A.transmission>0,X=Ze&&!!A.anisotropyMap,_e=w&&!!A.clearcoatMap,le=w&&!!A.clearcoatNormalMap,Ee=w&&!!A.clearcoatRoughnessMap,we=N&&!!A.iridescenceMap,re=N&&!!A.iridescenceThicknessMap,ge=z&&!!A.sheenColorMap,Ue=z&&!!A.sheenRoughnessMap,Te=!!A.specularMap,pe=!!A.specularColorMap,Ge=!!A.specularIntensityMap,L=Q&&!!A.transmissionMap,se=Q&&!!A.thicknessMap,he=!!A.gradientMap,ye=!!A.alphaMap,te=A.alphaTest>0,j=!!A.alphaHash,Me=!!A.extensions,ke=Nn;A.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ke=n.toneMapping);let lt={shaderID:ce,shaderType:A.type,shaderName:A.name,vertexShader:Pe,fragmentShader:Fe,defines:A.defines,customVertexShaderID:Le,customFragmentShaderID:k,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:Se,batchingColor:Se&&O._colorsTexture!==null,instancing:Be,instancingColor:Be&&O.instanceColor!==null,instancingMorph:Be&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:vn,alphaToCoverage:!!A.alphaToCoverage,map:Xe,matcap:_t,envMap:R,envMapMode:R&&ie.mapping,envMapCubeUVHeight:W,aoMap:Je,lightMap:Oe,bumpMap:Re,normalMap:J,displacementMap:p&&be,emissiveMap:ee,normalMapObjectSpace:J&&A.normalMapType===zu,normalMapTangentSpace:J&&A.normalMapType===Hl,metalnessMap:oe,roughnessMap:Ye,anisotropy:Ze,anisotropyMap:X,clearcoat:w,clearcoatMap:_e,clearcoatNormalMap:le,clearcoatRoughnessMap:Ee,dispersion:_,iridescence:N,iridescenceMap:we,iridescenceThicknessMap:re,sheen:z,sheenColorMap:ge,sheenRoughnessMap:Ue,specularMap:Te,specularColorMap:pe,specularIntensityMap:Ge,transmission:Q,transmissionMap:L,thicknessMap:se,gradientMap:he,opaque:A.transparent===!1&&A.blending===di&&A.alphaToCoverage===!1,alphaMap:ye,alphaTest:te,alphaHash:j,combine:A.combine,mapUv:Xe&&v(A.map.channel),aoMapUv:Je&&v(A.aoMap.channel),lightMapUv:Oe&&v(A.lightMap.channel),bumpMapUv:Re&&v(A.bumpMap.channel),normalMapUv:J&&v(A.normalMap.channel),displacementMapUv:be&&v(A.displacementMap.channel),emissiveMapUv:ee&&v(A.emissiveMap.channel),metalnessMapUv:oe&&v(A.metalnessMap.channel),roughnessMapUv:Ye&&v(A.roughnessMap.channel),anisotropyMapUv:X&&v(A.anisotropyMap.channel),clearcoatMapUv:_e&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(A.sheenRoughnessMap.channel),specularMapUv:Te&&v(A.specularMap.channel),specularColorMapUv:pe&&v(A.specularColorMap.channel),specularIntensityMapUv:Ge&&v(A.specularIntensityMap.channel),transmissionMapUv:L&&v(A.transmissionMap.channel),thicknessMapUv:se&&v(A.thicknessMap.channel),alphaMapUv:ye&&v(A.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(J||Ze),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Xe||ye),fog:!!G,useFog:A.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Xe&&A.map.isVideoTexture===!0&&je.getTransfer(A.map.colorSpace)===nt,decodeVideoTextureEmissive:ee&&A.emissiveMap.isVideoTexture===!0&&je.getTransfer(A.emissiveMap.colorSpace)===nt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Wt,flipSided:A.side===yt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Me&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&A.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function f(A){let M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(let I in A.defines)M.push(I),M.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(S(M,A),y(M,A),M.push(n.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function S(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function y(A,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),A.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),A.push(o.mask)}function x(A){let M=g[A.type],I;if(M){let U=Tn[M];I=Ku.clone(U.uniforms)}else I=A.uniforms;return I}function b(A,M){let I;for(let U=0,O=u.length;U<O;U++){let G=u[U];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Gv(n,M,A,s),u.push(I)),I}function T(A){if(--A.usedTimes===0){let M=u.indexOf(A);u[M]=u[u.length-1],u.pop(),A.destroy()}}function D(A){c.remove(A)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:C}}function Xv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Yv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sh(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,p,d,g,v,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,p,d,g,v,m){let f=a(h,p,d,g,v,m);d.transmission>0?i.push(f):d.transparent===!0?r.push(f):t.push(f)}function c(h,p,d,g,v,m){let f=a(h,p,d,g,v,m);d.transmission>0?i.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,p){t.length>1&&t.sort(h||Yv),i.length>1&&i.sort(p||Mh),r.length>1&&r.sort(p||Mh)}function u(){for(let h=e,p=n.length;h<p;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function qv(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new Sh,n.set(i,[a])):r>=s.length?(a=new Sh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Qv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Jv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jv(n){let e=new Zv,t=Qv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let r=new P,s=new ht,a=new ht;function o(l){let u=0,h=0,p=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,S=0,y=0,x=0,b=0,T=0,D=0;l.sort(Jv);for(let A=0,M=l.length;A<M;A++){let I=l[A],U=I.color,O=I.intensity,G=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=U.r*O,h+=U.g*O,p+=U.b*O;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],O);D++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ie=I.shadow,W=t.get(I);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=Y,d++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(U).multiplyScalar(O),Y.distance=G,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[v]=Y;let ie=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,ie.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[v]=ie.matrix,I.castShadow){let W=t.get(I);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=Z,x++}v++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(U).multiplyScalar(O),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Y,m++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let ie=I.shadow,W=t.get(I);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=Y,g++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(O),Y.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[f]=Y,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=p;let C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==D)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,C.directionalLength=d,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=D,i.version=Kv++)}function c(l,u){let h=0,p=0,d=0,g=0,v=0,m=u.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){let y=l[f];if(y.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(y.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let x=i.point[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function Eh(n){let e=new jv(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function $v(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Eh(n),e.set(r,[o])):s>=a.length?(o=new Eh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function n0(n,e,t){let i=new er,r=new ae,s=new ae,a=new mt,o=new ga({depthPacking:Ou}),c=new va,l={},u=t.maxTextureSize,h={[gn]:yt,[yt]:gn,[Wt]:Wt},p=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:e0,fragmentShader:t0}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new xt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let f=this.type;this.render=function(T,D,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let A=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(tn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=f!==Mn&&this.type===Mn,G=f===Mn&&this.type!==Mn;for(let Z=0,Y=T.length;Z<Y;Z++){let ie=T[Z],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let ce=W.getFrameExtents();if(r.multiply(ce),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,W.mapSize.y=s.y)),W.map===null||O===!0||G===!0){let q=this.type!==Mn?{minFilter:ln,magFilter:ln}:{};W.map!==null&&W.map.dispose(),W.map=new It(r.x,r.y,q),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let ve=W.getViewportCount();for(let q=0;q<ve;q++){let ue=W.getViewport(q);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),U.viewport(a),W.updateMatrices(ie,q),i=W.getFrustum(),x(D,C,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===Mn&&S(W,C),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(A,M,I)};function S(T,D){let C=e.update(v);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new It(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,C,p,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,C,d,v,null)}function y(T,D,C,A){let M=null,I=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?c:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let U=M.uuid,O=D.uuid,G=l[U];G===void 0&&(G={},l[U]=G);let Z=G[O];Z===void 0&&(Z=M.clone(),G[O]=Z,D.addEventListener("dispose",b)),M=Z}if(M.visible=D.visible,M.wireframe=D.wireframe,A===Mn?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:h[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=n.properties.get(M);U.light=C}return M}function x(T,D,C,A,M){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Mn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let O=e.update(T),G=T.material;if(Array.isArray(G)){let Z=O.groups;for(let Y=0,ie=Z.length;Y<ie;Y++){let W=Z[Y],ce=G[W.materialIndex];if(ce&&ce.visible){let ve=y(T,ce,A,M);T.onBeforeShadow(n,T,D,C,O,ve,W),n.renderBufferDirect(C,null,O,ve,T,W),T.onAfterShadow(n,T,D,C,O,ve,W)}}}else if(G.visible){let Z=y(T,G,A,M);T.onBeforeShadow(n,T,D,C,O,Z,null),n.renderBufferDirect(C,null,O,Z,T,null),T.onAfterShadow(n,T,D,C,O,Z,null)}}let U=T.children;for(let O=0,G=U.length;O<G;O++)x(U[O],D,C,A,M)}function b(T){T.target.removeEventListener("dispose",b);for(let C in l){let A=l[C],M=T.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}function r0(n,e){function t(){let L=!1,se=new mt,he=null,ye=new mt(0,0,0,0);return{setMask:function(te){he!==te&&!L&&(n.colorMask(te,te,te,te),he=te)},setLocked:function(te){L=te},setClear:function(te,j,Me,ke,lt){lt===!0&&(te*=ke,j*=ke,Me*=ke),se.set(te,j,Me,ke),ye.equals(se)===!1&&(n.clearColor(te,j,Me,ke),ye.copy(se))},reset:function(){L=!1,he=null,ye.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,he=null,ye=null,te=null;return{setReversed:function(j){if(se!==j){let Me=e.get("EXT_clip_control");j?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),se=j;let ke=te;te=null,this.setClear(ke)}},getReversed:function(){return se},setTest:function(j){j?K(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(j){he!==j&&!L&&(n.depthMask(j),he=j)},setFunc:function(j){if(se&&(j=i0[j]),ye!==j){switch(j){case Ra:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Pa:n.depthFunc(n.LESS);break;case pi:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Ua:n.depthFunc(n.GEQUAL);break;case La:n.depthFunc(n.GREATER);break;case Ba:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=j}},setLocked:function(j){L=j},setClear:function(j){te!==j&&(se&&(j=1-j),n.clearDepth(j),te=j)},reset:function(){L=!1,he=null,ye=null,te=null,se=!1}}}function r(){let L=!1,se=null,he=null,ye=null,te=null,j=null,Me=null,ke=null,lt=null;return{setTest:function(tt){L||(tt?K(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(tt){se!==tt&&!L&&(n.stencilMask(tt),se=tt)},setFunc:function(tt,Cn,yn){(he!==tt||ye!==Cn||te!==yn)&&(n.stencilFunc(tt,Cn,yn),he=tt,ye=Cn,te=yn)},setOp:function(tt,Cn,yn){(j!==tt||Me!==Cn||ke!==yn)&&(n.stencilOp(tt,Cn,yn),j=tt,Me=Cn,ke=yn)},setLocked:function(tt){L=tt},setClear:function(tt){lt!==tt&&(n.clearStencil(tt),lt=tt)},reset:function(){L=!1,se=null,he=null,ye=null,te=null,j=null,Me=null,ke=null,lt=null}}}let s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap,u={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,S=null,y=null,x=null,b=null,T=null,D=new ze(0,0,0),C=0,A=!1,M=null,I=null,U=null,O=null,G=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ie=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=ie>=2);let ce=null,ve={},q=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Pe=new mt().fromArray(q),Fe=new mt().fromArray(ue);function Le(L,se,he,ye){let te=new Uint8Array(4),j=n.createTexture();n.bindTexture(L,j),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<he;Me++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(se+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return j}let k={};k[n.TEXTURE_2D]=Le(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=Le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=Le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=Le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(n.DEPTH_TEST),a.setFunc(pi),Re(!1),J(Tl),K(n.CULL_FACE),Je(tn);function K(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function de(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Be(L,se){return h[L]!==se?(n.bindFramebuffer(L,se),h[L]=se,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Se(L,se){let he=d,ye=!1;if(L){he=p.get(se),he===void 0&&(he=[],p.set(se,he));let te=L.textures;if(he.length!==te.length||he[0]!==n.COLOR_ATTACHMENT0){for(let j=0,Me=te.length;j<Me;j++)he[j]=n.COLOR_ATTACHMENT0+j;he.length=te.length,ye=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,ye=!0);ye&&n.drawBuffers(he)}function Xe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let _t={[Xn]:n.FUNC_ADD,[fu]:n.FUNC_SUBTRACT,[du]:n.FUNC_REVERSE_SUBTRACT};_t[pu]=n.MIN,_t[mu]=n.MAX;let R={[gu]:n.ZERO,[vu]:n.ONE,[xu]:n.SRC_COLOR,[ea]:n.SRC_ALPHA,[Eu]:n.SRC_ALPHA_SATURATE,[Mu]:n.DST_COLOR,[_u]:n.DST_ALPHA,[yu]:n.ONE_MINUS_SRC_COLOR,[ta]:n.ONE_MINUS_SRC_ALPHA,[Su]:n.ONE_MINUS_DST_COLOR,[Au]:n.ONE_MINUS_DST_ALPHA,[wu]:n.CONSTANT_COLOR,[Tu]:n.ONE_MINUS_CONSTANT_COLOR,[bu]:n.CONSTANT_ALPHA,[Cu]:n.ONE_MINUS_CONSTANT_ALPHA};function Je(L,se,he,ye,te,j,Me,ke,lt,tt){if(L===tn){v===!0&&(de(n.BLEND),v=!1);return}if(v===!1&&(K(n.BLEND),v=!0),L!==hu){if(L!==m||tt!==A){if((f!==Xn||x!==Xn)&&(n.blendEquation(n.FUNC_ADD),f=Xn,x=Xn),tt)switch(L){case di:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cl:n.blendFunc(n.ONE,n.ONE);break;case Rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,y=null,b=null,T=null,D.set(0,0,0),C=0,m=L,A=tt}return}te=te||se,j=j||he,Me=Me||ye,(se!==f||te!==x)&&(n.blendEquationSeparate(_t[se],_t[te]),f=se,x=te),(he!==S||ye!==y||j!==b||Me!==T)&&(n.blendFuncSeparate(R[he],R[ye],R[j],R[Me]),S=he,y=ye,b=j,T=Me),(ke.equals(D)===!1||lt!==C)&&(n.blendColor(ke.r,ke.g,ke.b,lt),D.copy(ke),C=lt),m=L,A=!1}function Oe(L,se){L.side===Wt?de(n.CULL_FACE):K(n.CULL_FACE);let he=L.side===yt;se&&(he=!he),Re(he),L.blending===di&&L.transparent===!1?Je(tn):Je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let ye=L.stencilWrite;o.setTest(ye),ye&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function J(L){L!==cu?(K(n.CULL_FACE),L!==I&&(L===Tl?n.cullFace(n.BACK):L===uu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),I=L}function be(L){L!==U&&(Y&&n.lineWidth(L),U=L)}function ee(L,se,he){L?(K(n.POLYGON_OFFSET_FILL),(O!==se||G!==he)&&(n.polygonOffset(se,he),O=se,G=he)):de(n.POLYGON_OFFSET_FILL)}function oe(L){L?K(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function Ye(L){L===void 0&&(L=n.TEXTURE0+Z-1),ce!==L&&(n.activeTexture(L),ce=L)}function Ze(L,se,he){he===void 0&&(ce===null?he=n.TEXTURE0+Z-1:he=ce);let ye=ve[he];ye===void 0&&(ye={type:void 0,texture:void 0},ve[he]=ye),(ye.type!==L||ye.texture!==se)&&(ce!==he&&(n.activeTexture(he),ce=he),n.bindTexture(L,se||k[L]),ye.type=L,ye.texture=se)}function w(){let L=ve[ce];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(L){Pe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Pe.copy(L))}function Ue(L){Fe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Fe.copy(L))}function Te(L,se){let he=l.get(se);he===void 0&&(he=new WeakMap,l.set(se,he));let ye=he.get(L);ye===void 0&&(ye=n.getUniformBlockIndex(se,L.name),he.set(L,ye))}function pe(L,se){let ye=l.get(se).get(L);c.get(se)!==ye&&(n.uniformBlockBinding(se,ye,L.__bindingPointIndex),c.set(se,ye))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,ve={},h={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,S=null,y=null,x=null,b=null,T=null,D=new ze(0,0,0),C=0,A=!1,M=null,I=null,U=null,O=null,G=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:de,bindFramebuffer:Be,drawBuffers:Se,useProgram:Xe,setBlending:Je,setMaterial:Oe,setFlipSided:Re,setCullFace:J,setLineWidth:be,setPolygonOffset:ee,setScissorTest:oe,activeTexture:Ye,bindTexture:Ze,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:we,texImage3D:re,updateUBOMapping:Te,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:Ee,texSubImage2D:z,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:_e,scissor:ge,viewport:Ue,reset:Ge}}function s0(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,u=new WeakMap,h,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return d?new OffscreenCanvas(w,_):Br("canvas")}function v(w,_,N){let z=1,Q=Ze(w);if((Q.width>N||Q.height>N)&&(z=N/Math.max(Q.width,Q.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let X=Math.floor(z*Q.width),_e=Math.floor(z*Q.height);h===void 0&&(h=g(X,_e));let le=_?g(X,_e):h;return le.width=X,le.height=_e,le.getContext("2d").drawImage(w,0,0,X,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+_e+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(w,_,N,z,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=_;if(_===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),_===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){let _e=Q?Ur:je.getTransfer(z);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=_e===nt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(w,_){let N;return w?_===null||_===Sn||_===ii?N=n.DEPTH24_STENCIL8:_===En?N=n.DEPTH32F_STENCIL8:_===fr&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Sn||_===ii?N=n.DEPTH_COMPONENT24:_===En?N=n.DEPTH_COMPONENT32F:_===fr&&(N=n.DEPTH_COMPONENT16),N}function b(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ln&&w.minFilter!==Bt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function T(w){let _=w.target;_.removeEventListener("dispose",T),C(_),_.isVideoTexture&&u.delete(_)}function D(w){let _=w.target;_.removeEventListener("dispose",D),M(_)}function C(w){let _=i.get(w);if(_.__webglInit===void 0)return;let N=w.source,z=p.get(N);if(z){let Q=z[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(w),Object.keys(z).length===0&&p.delete(N)}i.remove(w)}function A(w){let _=i.get(w);n.deleteTexture(_.__webglTexture);let N=w.source,z=p.get(N);delete z[_.__cacheKey],a.memory.textures--}function M(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let Q=0;Q<_.__webglFramebuffer[z].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[z][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=w.textures;for(let z=0,Q=N.length;z<Q;z++){let X=i.get(N[z]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(N[z])}i.remove(w)}let I=0;function U(){I=0}function O(){let w=I;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function G(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function Z(w,_){let N=i.get(w);if(w.isVideoTexture&&oe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){let z=w.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(N,w,_);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function Y(w,_){let N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){k(N,w,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function ie(w,_){let N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){k(N,w,_);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function W(w,_){let N=i.get(w);if(w.version>0&&N.__version!==w.version){K(N,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}let ce={[na]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[ia]:n.MIRRORED_REPEAT},ve={[ln]:n.NEAREST,[Fu]:n.NEAREST_MIPMAP_NEAREST,[hs]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[za]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},q={[ku]:n.NEVER,[Yu]:n.ALWAYS,[Hu]:n.LESS,[Gl]:n.LEQUAL,[Gu]:n.EQUAL,[Xu]:n.GEQUAL,[Vu]:n.GREATER,[Wu]:n.NOTEQUAL};function ue(w,_){if(_.type===En&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Bt||_.magFilter===za||_.magFilter===hs||_.magFilter===ni||_.minFilter===Bt||_.minFilter===za||_.minFilter===hs||_.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ce[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ce[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ce[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ve[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,q[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==hs&&_.minFilter!==ni||_.type===En&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Pe(w,_){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",T));let z=_.source,Q=p.get(z);Q===void 0&&(Q={},p.set(z,Q));let X=G(_);if(X!==w.__cacheKey){Q[X]===void 0&&(Q[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[X].usedTimes++;let _e=Q[w.__cacheKey];_e!==void 0&&(Q[w.__cacheKey].usedTimes--,_e.usedTimes===0&&A(_)),w.__cacheKey=X,w.__webglTexture=Q[X].texture}return N}function Fe(w,_,N){return Math.floor(Math.floor(w/N)/_)}function Le(w,_,N,z){let X=w.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,N,z,_.data);else{X.sort((re,ge)=>re.start-ge.start);let _e=0;for(let re=1;re<X.length;re++){let ge=X[_e],Ue=X[re],Te=ge.start+ge.count,pe=Fe(Ue.start,_.width,4),Ge=Fe(ge.start,_.width,4);Ue.start<=Te+1&&pe===Ge&&Fe(Ue.start+Ue.count-1,_.width,4)===pe?ge.count=Math.max(ge.count,Ue.start+Ue.count-ge.start):(++_e,X[_e]=Ue)}X.length=_e+1;let le=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let re=0,ge=X.length;re<ge;re++){let Ue=X[re],Te=Math.floor(Ue.start/4),pe=Math.ceil(Ue.count/4),Ge=Te%_.width,L=Math.floor(Te/_.width),se=pe,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ge,L,se,he,N,z,_.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function k(w,_,N){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);let Q=Pe(w,_),X=_.source;t.bindTexture(z,w.__webglTexture,n.TEXTURE0+N);let _e=i.get(X);if(X.version!==_e.__version||Q===!0){t.activeTexture(n.TEXTURE0+N);let le=je.getPrimaries(je.workingColorSpace),Ee=_.colorSpace===nn?null:je.getPrimaries(_.colorSpace),we=_.colorSpace===nn||le===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let re=v(_.image,!1,r.maxTextureSize);re=Ye(_,re);let ge=s.convert(_.format,_.colorSpace),Ue=s.convert(_.type),Te=y(_.internalFormat,ge,Ue,_.colorSpace,_.isVideoTexture);ue(z,_);let pe,Ge=_.mipmaps,L=_.isVideoTexture!==!0,se=_e.__version===void 0||Q===!0,he=X.dataReady,ye=b(_,re);if(_.isDepthTexture)Te=x(_.format===ri,_.type),se&&(L?t.texStorage2D(n.TEXTURE_2D,1,Te,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Te,re.width,re.height,0,ge,Ue,null));else if(_.isDataTexture)if(Ge.length>0){L&&se&&t.texStorage2D(n.TEXTURE_2D,ye,Te,Ge[0].width,Ge[0].height);for(let te=0,j=Ge.length;te<j;te++)pe=Ge[te],L?he&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,ge,Ue,pe.data):t.texImage2D(n.TEXTURE_2D,te,Te,pe.width,pe.height,0,ge,Ue,pe.data);_.generateMipmaps=!1}else L?(se&&t.texStorage2D(n.TEXTURE_2D,ye,Te,re.width,re.height),he&&Le(_,re,ge,Ue)):t.texImage2D(n.TEXTURE_2D,0,Te,re.width,re.height,0,ge,Ue,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Te,Ge[0].width,Ge[0].height,re.depth);for(let te=0,j=Ge.length;te<j;te++)if(pe=Ge[te],_.format!==un)if(ge!==null)if(L){if(he)if(_.layerUpdates.size>0){let Me=Jl(pe.width,pe.height,_.format,_.type);for(let ke of _.layerUpdates){let lt=pe.data.subarray(ke*Me/pe.data.BYTES_PER_ELEMENT,(ke+1)*Me/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ke,pe.width,pe.height,1,ge,lt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,re.depth,ge,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Te,pe.width,pe.height,re.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,re.depth,ge,Ue,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Te,pe.width,pe.height,re.depth,0,ge,Ue,pe.data)}else{L&&se&&t.texStorage2D(n.TEXTURE_2D,ye,Te,Ge[0].width,Ge[0].height);for(let te=0,j=Ge.length;te<j;te++)pe=Ge[te],_.format!==un?ge!==null?L?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Te,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?he&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,ge,Ue,pe.data):t.texImage2D(n.TEXTURE_2D,te,Te,pe.width,pe.height,0,ge,Ue,pe.data)}else if(_.isDataArrayTexture)if(L){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Te,re.width,re.height,re.depth),he)if(_.layerUpdates.size>0){let te=Jl(re.width,re.height,_.format,_.type);for(let j of _.layerUpdates){let Me=re.data.subarray(j*te/re.data.BYTES_PER_ELEMENT,(j+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,ge,Ue,Me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Ue,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,re.width,re.height,re.depth,0,ge,Ue,re.data);else if(_.isData3DTexture)L?(se&&t.texStorage3D(n.TEXTURE_3D,ye,Te,re.width,re.height,re.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Ue,re.data)):t.texImage3D(n.TEXTURE_3D,0,Te,re.width,re.height,re.depth,0,ge,Ue,re.data);else if(_.isFramebufferTexture){if(se)if(L)t.texStorage2D(n.TEXTURE_2D,ye,Te,re.width,re.height);else{let te=re.width,j=re.height;for(let Me=0;Me<ye;Me++)t.texImage2D(n.TEXTURE_2D,Me,Te,te,j,0,ge,Ue,null),te>>=1,j>>=1}}else if(Ge.length>0){if(L&&se){let te=Ze(Ge[0]);t.texStorage2D(n.TEXTURE_2D,ye,Te,te.width,te.height)}for(let te=0,j=Ge.length;te<j;te++)pe=Ge[te],L?he&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge,Ue,pe):t.texImage2D(n.TEXTURE_2D,te,Te,ge,Ue,pe);_.generateMipmaps=!1}else if(L){if(se){let te=Ze(re);t.texStorage2D(n.TEXTURE_2D,ye,Te,te.width,te.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ue,re)}else t.texImage2D(n.TEXTURE_2D,0,Te,ge,Ue,re);m(_)&&f(z),_e.__version=X.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function K(w,_,N){if(_.image.length!==6)return;let z=Pe(w,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+N);let X=i.get(Q);if(Q.version!==X.__version||z===!0){t.activeTexture(n.TEXTURE0+N);let _e=je.getPrimaries(je.workingColorSpace),le=_.colorSpace===nn?null:je.getPrimaries(_.colorSpace),Ee=_.colorSpace===nn||_e===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let we=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let j=0;j<6;j++)!we&&!re?ge[j]=v(_.image[j],!0,r.maxCubemapSize):ge[j]=re?_.image[j].image:_.image[j],ge[j]=Ye(_,ge[j]);let Ue=ge[0],Te=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),Ge=y(_.internalFormat,Te,pe,_.colorSpace),L=_.isVideoTexture!==!0,se=X.__version===void 0||z===!0,he=Q.dataReady,ye=b(_,Ue);ue(n.TEXTURE_CUBE_MAP,_);let te;if(we){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ge,Ue.width,Ue.height);for(let j=0;j<6;j++){te=ge[j].mipmaps;for(let Me=0;Me<te.length;Me++){let ke=te[Me];_.format!==un?Te!==null?L?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,ke.width,ke.height,Te,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,ke.width,ke.height,Te,pe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,Ge,ke.width,ke.height,0,Te,pe,ke.data)}}}else{if(te=_.mipmaps,L&&se){te.length>0&&ye++;let j=Ze(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ge,j.width,j.height)}for(let j=0;j<6;j++)if(re){L?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ge[j].width,ge[j].height,Te,pe,ge[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,ge[j].width,ge[j].height,0,Te,pe,ge[j].data);for(let Me=0;Me<te.length;Me++){let lt=te[Me].image[j].image;L?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,lt.width,lt.height,Te,pe,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,Ge,lt.width,lt.height,0,Te,pe,lt.data)}}else{L?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,pe,ge[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,Te,pe,ge[j]);for(let Me=0;Me<te.length;Me++){let ke=te[Me];L?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,Te,pe,ke.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,Ge,Te,pe,ke.image[j])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),X.__version=Q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function de(w,_,N,z,Q,X){let _e=s.convert(N.format,N.colorSpace),le=s.convert(N.type),Ee=y(N.internalFormat,_e,le,N.colorSpace),we=i.get(_),re=i.get(N);if(re.__renderTarget=_,!we.__hasExternalTextures){let ge=Math.max(1,_.width>>X),Ue=Math.max(1,_.height>>X);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,X,Ee,ge,Ue,_.depth,0,_e,le,null):t.texImage2D(Q,X,Ee,ge,Ue,0,_e,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ee(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,Q,re.__webglTexture,0,be(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,Q,re.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(w,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){let z=_.depthTexture,Q=z&&z.isDepthTexture?z.type:null,X=x(_.stencilBuffer,Q),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=be(_);ee(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,X,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,X,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,X,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,w)}else{let z=_.textures;for(let Q=0;Q<z.length;Q++){let X=z[Q],_e=s.convert(X.format,X.colorSpace),le=s.convert(X.type),Ee=y(X.internalFormat,_e,le,X.colorSpace),we=be(_);N&&ee(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Ee,_.width,_.height):ee(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=i.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);let Q=z.__webglTexture,X=be(_);if(_.depthTexture.format===Zi)ee(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===ri)ee(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Xe(w){let _=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",Q)};z.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=z}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let z=w.texture.mipmaps;z&&z.length>0?Se(_.__webglFramebuffer[0],w):Se(_.__webglFramebuffer,w)}else if(N){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),Be(_.__webglDepthbuffer[z],w,!1);else{let Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,X)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Be(_.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(w,_,N){let z=i.get(w);_!==void 0&&de(z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Xe(w)}function R(w){let _=w.texture,N=i.get(w),z=i.get(_);w.addEventListener("dispose",D);let Q=w.textures,X=w.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let Ee=0;Ee<_.mipmaps.length;Ee++)N.__webglFramebuffer[le][Ee]=n.createFramebuffer()}else N.__webglFramebuffer[le]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)N.__webglFramebuffer[le]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(_e)for(let le=0,Ee=Q.length;le<Ee;le++){let we=i.get(Q[le]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&ee(w)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){let Ee=Q[le];N.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[le]);let we=s.convert(Ee.format,Ee.colorSpace),re=s.convert(Ee.type),ge=y(Ee.internalFormat,we,re,Ee.colorSpace,w.isXRRenderTarget===!0),Ue=be(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ge,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,N.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),ue(n.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)de(N.__webglFramebuffer[le][Ee],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee);else de(N.__webglFramebuffer[le],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let le=0,Ee=Q.length;le<Ee;le++){let we=Q[le],re=i.get(we),ge=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,re.__webglTexture),ue(ge,we),de(N.__webglFramebuffer,w,we,n.COLOR_ATTACHMENT0+le,ge,0),m(we)&&f(ge)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,z.__webglTexture),ue(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)de(N.__webglFramebuffer[Ee],w,_,n.COLOR_ATTACHMENT0,le,Ee);else de(N.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,le,0);m(_)&&f(le),t.unbindTexture()}w.depthBuffer&&Xe(w)}function Je(w){let _=w.textures;for(let N=0,z=_.length;N<z;N++){let Q=_[N];if(m(Q)){let X=S(w),_e=i.get(Q).__webglTexture;t.bindTexture(X,_e),f(X),t.unbindTexture()}}}let Oe=[],Re=[];function J(w){if(w.samples>0){if(ee(w)===!1){let _=w.textures,N=w.width,z=w.height,Q=n.COLOR_BUFFER_BIT,X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(w),le=_.length>1;if(le)for(let we=0;we<_.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let Ee=w.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let we=0;we<_.length;we++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);let re=i.get(_[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,N,z,0,0,N,z,Q,n.NEAREST),c===!0&&(Oe.length=0,Re.length=0,Oe.push(n.COLOR_ATTACHMENT0+we),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Oe.push(X),Re.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let we=0;we<_.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);let re=i.get(_[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function be(w){return Math.min(r.maxSamples,w.samples)}function ee(w){let _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function oe(w){let _=a.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Ye(w,_){let N=w.colorSpace,z=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==vn&&N!==nn&&(je.getTransfer(N)===nt?(z!==un||Q!==Ut)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function Ze(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=_t,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ee}function a0(n,e){function t(i,r=nn){let s,a=je.getTransfer(r);if(i===Ut)return n.UNSIGNED_BYTE;if(i===Ha)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ga)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ul)return n.BYTE;if(i===Ll)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===ka)return n.INT;if(i===Sn)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===dr)return n.HALF_FLOAT;if(i===Fl)return n.ALPHA;if(i===Ol)return n.RGB;if(i===un)return n.RGBA;if(i===Zi)return n.DEPTH_COMPONENT;if(i===ri)return n.DEPTH_STENCIL;if(i===zl)return n.RED;if(i===Va)return n.RED_INTEGER;if(i===kl)return n.RG;if(i===Wa)return n.RG_INTEGER;if(i===Xa)return n.RGBA_INTEGER;if(i===fs||i===ds||i===ps||i===ms)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===qa||i===Za||i===Qa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ka||i===Ja||i===ja)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ka||i===Ja)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ja)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$a||i===eo||i===to||i===no||i===io||i===ro||i===so||i===ao||i===oo||i===lo||i===co||i===uo||i===ho||i===fo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$a)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===to)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===no)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===io)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ro)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===so)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ao)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===co)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ho)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===mo||i===go)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===po)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vo||i===xo||i===yo||i===_o)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_o)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ii?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function u0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ql(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,S,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,bi.copy(x),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(c0.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h0(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){let x=y.program;i.uniformBlockBinding(S,x)}function l(S,y){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));let b=y.program;i.updateUBOMapping(S,b);let T=e.render.frame;s[S.id]!==T&&(p(S),s[S.id]=T)}function u(S){let y=h();S.__bindingPointIndex=y;let x=n.createBuffer(),b=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let y=r[S.id],x=S.uniforms,b=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,D=x.length;T<D;T++){let C=Array.isArray(x[T])?x[T]:[x[T]];for(let A=0,M=C.length;A<M;A++){let I=C[A];if(d(I,T,A,b)===!0){let U=I.__offset,O=Array.isArray(I.value)?I.value:[I.value],G=0;for(let Z=0;Z<O.length;Z++){let Y=O[Z],ie=v(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,U+G,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,G),G+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,y,x,b){let T=S.value,D=y+"_"+x;if(b[D]===void 0)return typeof T=="number"||typeof T=="boolean"?b[D]=T:b[D]=T.clone(),!0;{let C=b[D];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[D]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(S){let y=S.uniforms,x=0,b=16;for(let D=0,C=y.length;D<C;D++){let A=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,I=A.length;M<I;M++){let U=A[M],O=Array.isArray(U.value)?U.value:[U.value];for(let G=0,Z=O.length;G<Z;G++){let Y=O[G],ie=v(Y),W=x%b,ce=W%ie.boundary,ve=W+ce;x+=ce,ve!==0&&b-ve<ie.storage&&(x+=b-ve),U.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=ie.storage}}}let T=x%b;return T>0&&(x+=b-T),S.__size=x,S.__cache={},this}function v(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(let S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}var zd,kd,Hd,Gd,Vd,Wd,Xd,Yd,qd,Zd,Qd,Kd,Jd,jd,$d,ep,tp,np,ip,rp,sp,ap,op,lp,cp,up,hp,fp,dp,pp,mp,gp,vp,xp,yp,_p,Ap,Mp,Sp,Ep,wp,Tp,bp,Cp,Rp,Dp,Pp,Ip,Up,Lp,Bp,Np,Fp,Op,zp,kp,Hp,Gp,Vp,Wp,Xp,Yp,qp,Zp,Qp,Kp,Jp,jp,$p,em,tm,nm,im,rm,sm,am,om,lm,cm,um,hm,fm,dm,pm,mm,gm,vm,xm,ym,_m,Am,Mm,Sm,Em,wm,Tm,bm,Cm,Rm,Dm,Pm,Im,Um,Lm,Bm,Nm,Fm,Om,zm,km,Hm,Gm,Vm,Wm,Xm,Ym,qm,Zm,Qm,Km,Jm,jm,$m,eg,tg,ng,ig,rg,sg,ag,og,lg,cg,ug,hg,fg,dg,pg,mg,gg,vg,We,fe,Tn,Ao,Ti,xg,mr,nh,Ri,$l,ih,ec,tc,nc,ic,Ci,pr,rh,wg,Eo,Th,lh,bh,Ch,Rh,ch,uh,hh,fh,dh,sc,ac,oc,rc,gr,Mv,Sv,gh,So,Iv,Uv,Bv,Vv,cc,uc,Kv,e0,t0,i0,o0,l0,hc,fc,bi,c0,wo,Lt=Et(()=>{jl();jl();zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,up=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ym=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ig=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ag=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:zd,alphahash_pars_fragment:kd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:Yd,batching_pars_vertex:qd,batching_vertex:Zd,begin_vertex:Qd,beginnormal_vertex:Kd,bsdfs:Jd,iridescence_fragment:jd,bumpmap_pars_fragment:$d,clipping_planes_fragment:ep,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:rp,color_pars_fragment:sp,color_pars_vertex:ap,color_vertex:op,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:up,displacementmap_pars_vertex:hp,displacementmap_vertex:fp,emissivemap_fragment:dp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:vp,envmap_common_pars_fragment:xp,envmap_pars_fragment:yp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Pp,envmap_vertex:Ap,fog_vertex:Mp,fog_pars_vertex:Sp,fog_fragment:Ep,fog_pars_fragment:wp,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:bp,lights_lambert_fragment:Cp,lights_lambert_pars_fragment:Rp,lights_pars_begin:Dp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Up,lights_phong_fragment:Lp,lights_phong_pars_fragment:Bp,lights_physical_fragment:Np,lights_physical_pars_fragment:Fp,lights_fragment_begin:Op,lights_fragment_maps:zp,lights_fragment_end:kp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:Yp,map_particle_fragment:qp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:Kp,morphinstance_vertex:Jp,morphcolor_vertex:jp,morphnormal_vertex:$p,morphtarget_pars_vertex:em,morphtarget_vertex:tm,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:rm,normal_pars_vertex:sm,normal_vertex:am,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:um,iridescence_pars_fragment:hm,opaque_fragment:fm,packing:dm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:vm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:Am,shadowmap_vertex:Mm,shadowmask_pars_fragment:Sm,skinbase_vertex:Em,skinning_pars_vertex:wm,skinning_vertex:Tm,skinnormal_vertex:bm,specularmap_fragment:Cm,specularmap_pars_fragment:Rm,tonemapping_fragment:Dm,tonemapping_pars_fragment:Pm,transmission_fragment:Im,transmission_pars_fragment:Um,uv_pars_fragment:Lm,uv_pars_vertex:Bm,uv_vertex:Nm,worldpos_vertex:Fm,background_vert:Om,background_frag:zm,backgroundCube_vert:km,backgroundCube_frag:Hm,cube_vert:Gm,cube_frag:Vm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:Ym,distanceRGBA_frag:qm,equirect_vert:Zm,equirect_frag:Qm,linedashed_vert:Km,linedashed_frag:Jm,meshbasic_vert:jm,meshbasic_frag:$m,meshlambert_vert:eg,meshlambert_frag:tg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:rg,meshnormal_frag:sg,meshphong_vert:ag,meshphong_frag:og,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:ug,meshtoon_frag:hg,points_vert:fg,points_frag:dg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:vg},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Tn={basic:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:kt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:kt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:kt([fe.points,fe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:kt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:kt([fe.common,fe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:kt([fe.sprite,fe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:kt([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:kt([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Tn.physical={uniforms:kt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};Ao={r:0,b:0,g:0},Ti=new xn,xg=new ht;mr=4,nh=[.125,.215,.35,.446,.526,.582],Ri=20,$l=new Ai,ih=new ze,ec=null,tc=0,nc=0,ic=!1,Ci=(1+Math.sqrt(5))/2,pr=1/Ci,rh=[new P(-Ci,pr,0),new P(Ci,pr,0),new P(-pr,0,Ci),new P(pr,0,Ci),new P(0,Ci,-pr),new P(0,Ci,pr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],wg=new P,Eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=wg}=s;ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),this._renderer.xr.enabled=ic,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:dr,format:un,colorSpace:vn,depthBuffer:!1},r=sh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(s)),this._blurMaterial=bg(s,e,t)}return r}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,i,r,s){let c=new Rt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(ih),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let v=new _n({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),m=new xt(new An,v),f=!1,S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,f=!0):(v.color.copy(ih),f=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));let b=this._cubeSize;Mo(r,x*b,y>2?b:0,b,b),h.setRenderTarget(r),f&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Mi||e.mapping===Si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Mo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,$l)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rh[(r-s-1)%rh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new xt(this._lodPlanes[r],l),p=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let f=[],S=0;for(let D=0;D<Ri;++D){let C=D/v,A=Math.exp(-C*C/2);f.push(A),D===0?S+=A:D<m&&(S+=2*A)}for(let D=0;D<f.length;D++)f[D]=f[D]/S;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;let x=this._sizeLods[r],b=3*x*(r>y-mr?r-y+mr:0),T=4*(this._cubeSize-x);Mo(t,b,T,3*x,2*x),c.setRenderTarget(t),c.render(h,$l)}};Th=new Pt,lh=new vi(1,1),bh=new Nr,Ch=new oa,Rh=new zr,ch=[],uh=[],hh=new Float32Array(16),fh=new Float32Array(9),dh=new Float32Array(4);sc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ev(t.type)}},ac=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_v(t.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},rc=/(\w+)(\])?(\[|\.)?/g;gr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Av(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};Mv=37297,Sv=0;gh=new He;So=new P;Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;Uv=new Map;Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Vv=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new uc(e),t.set(e,i)),i}},uc=class{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}};Kv=0;e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;i0={[Ra]:Da,[Pa]:La,[Ia]:Ba,[pi]:Ua,[Da]:Ra,[La]:Pa,[Ba]:Ia,[Ua]:pi};o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Vr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mt({vertexShader:o0,fragmentShader:l0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fc=class extends Yt{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,p=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new hc,f={},S=t.getContextAttributes(),y=null,x=null,b=[],T=[],D=new ae,C=null,A=new Rt;A.viewport=new mt;let M=new Rt;M.viewport=new mt;let I=[A,M],U=new ba,O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=b[k];return K===void 0&&(K=new $i,b[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=b[k];return K===void 0&&(K=new $i,b[k]=K),K.getGripSpace()},this.getHand=function(k){let K=b[k];return K===void 0&&(K=new $i,b[k]=K),K.getHandSpace()};function Z(k){let K=T.indexOf(k.inputSource);if(K===-1)return;let de=b[K];de!==void 0&&(de.update(k.inputSource,k.frame,l||a),de.dispatchEvent({type:k.type,data:k.inputSource}))}function Y(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",ie);for(let k=0;k<b.length;k++){let K=T[k];K!==null&&(T[k]=null,b[k].disconnect(K))}O=null,G=null,m.reset();for(let k in f)delete f[k];e.setRenderTarget(y),d=null,p=null,h=null,r=null,x=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",ie),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Be=null,Se=null;S.depth&&(Se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?ri:Zi,Be=S.stencil?ii:Sn);let Xe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=this.getBinding(),p=h.createProjectionLayer(Xe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new It(p.textureWidth,p.textureHeight,{format:un,type:Ut,depthTexture:new vi(p.textureWidth,p.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new It(d.framebufferWidth,d.framebufferHeight,{format:un,type:Ut,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(k){for(let K=0;K<k.removed.length;K++){let de=k.removed[K],Be=T.indexOf(de);Be>=0&&(T[Be]=null,b[Be].disconnect(de))}for(let K=0;K<k.added.length;K++){let de=k.added[K],Be=T.indexOf(de);if(Be===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=T.length){T.push(de),Be=Xe;break}else if(T[Xe]===null){T[Xe]=de,Be=Xe;break}if(Be===-1)break}let Se=b[Be];Se&&Se.connect(de)}}let W=new P,ce=new P;function ve(k,K,de){W.setFromMatrixPosition(K.matrixWorld),ce.setFromMatrixPosition(de.matrixWorld);let Be=W.distanceTo(ce),Se=K.projectionMatrix.elements,Xe=de.projectionMatrix.elements,_t=Se[14]/(Se[10]-1),R=Se[14]/(Se[10]+1),Je=(Se[9]+1)/Se[5],Oe=(Se[9]-1)/Se[5],Re=(Se[8]-1)/Se[0],J=(Xe[8]+1)/Xe[0],be=_t*Re,ee=_t*J,oe=Be/(-Re+J),Ye=oe*-Re;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ye),k.translateZ(oe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Se[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ze=_t+oe,w=R+oe,_=be-Ye,N=ee+(Be-Ye),z=Je*R/w*Ze,Q=Oe*R/w*Ze;k.projectionMatrix.makePerspective(_,N,z,Q,Ze,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function q(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let K=k.near,de=k.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(de=m.depthFar)),U.near=M.near=A.near=K,U.far=M.far=A.far=de,(O!==U.near||G!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,G=U.far),U.layers.mask=k.layers.mask|6,A.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;let Be=k.parent,Se=U.cameras;q(U,Be);for(let Xe=0;Xe<Se.length;Xe++)q(Se[Xe],Be);Se.length===2?ve(U,A,M):U.projectionMatrix.copy(A.projectionMatrix),ue(k,U,Be)};function ue(k,K,de){de===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Qi*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(k){c=k,p!==null&&(p.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(k){return f[k]};let Pe=null;function Fe(k,K){if(u=K.getViewerPose(l||a),g=K,u!==null){let de=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Be=!1;de.length!==U.cameras.length&&(U.cameras.length=0,Be=!0);for(let R=0;R<de.length;R++){let Je=de[R],Oe=null;if(d!==null)Oe=d.getViewport(Je);else{let J=h.getViewSubImage(p,Je);Oe=J.viewport,R===0&&(e.setRenderTargetTextures(x,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(x))}let Re=I[R];Re===void 0&&(Re=new Rt,Re.layers.enable(R),Re.viewport=new mt,I[R]=Re),Re.matrix.fromArray(Je.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Je.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),R===0&&(U.matrix.copy(Re.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Be===!0&&U.cameras.push(Re)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();let R=h.getDepthInformation(de[0]);R&&R.isValid&&R.texture&&m.init(R,r.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let R=0;R<de.length;R++){let Je=de[R].camera;if(Je){let Oe=f[Je];Oe||(Oe=new Vr,f[Je]=Oe);let Re=h.getCameraImage(Je);Oe.sourceTexture=Re}}}}for(let de=0;de<b.length;de++){let Be=T[de],Se=b[de];Be!==null&&Se!==void 0&&Se.update(Be,K,l||a)}Pe&&Pe(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let Le=new wh;Le.setAnimationLoop(Fe),this.setAnimationLoop=function(k){Pe=k},this.dispose=function(){}}},bi=new xn,c0=new ht;wo=class{constructor(e={}){let{canvas:t=qu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=ot;let T=0,D=0,C=null,A=-1,M=null,I=new mt,U=new mt,O=null,G=new ze(0),Z=0,Y=t.width,ie=t.height,W=1,ce=null,ve=null,q=new mt(0,0,Y,ie),ue=new mt(0,0,Y,ie),Pe=!1,Fe=new er,Le=!1,k=!1,K=new ht,de=new P,Be=new mt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function _t(){return C===null?W:1}let R=i;function Je(E,B){return t.getContext(E,B)}try{let E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",te,!1),R===null){let B="webgl2";if(R=Je(B,E),R===null)throw Je(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,Re,J,be,ee,oe,Ye,Ze,w,_,N,z,Q,X,_e,le,Ee,we,re,ge,Ue,Te,pe,Ge;function L(){Oe=new Rg(R),Oe.init(),Te=new a0(R,Oe),Re=new Mg(R,Oe,e,Te),J=new r0(R,Oe),Re.reversedDepthBuffer&&p&&J.buffers.depth.setReversed(!0),be=new Ig(R),ee=new Xv,oe=new s0(R,Oe,J,ee,Re,Te,be),Ye=new Eg(x),Ze=new Cg(x),w=new Od(R),pe=new _g(R,w),_=new Dg(R,w,be,pe),N=new Lg(R,_,w,be),re=new Ug(R,Re,oe),le=new Sg(ee),z=new Wv(x,Ye,Ze,Oe,Re,pe,le),Q=new u0(x,ee),X=new qv,_e=new $v(Oe),we=new yg(x,Ye,Ze,J,N,d,c),Ee=new n0(x,N,Re),Ge=new h0(R,be,Re,J),ge=new Ag(R,Oe,be),Ue=new Pg(R,Oe,be),be.programs=z.programs,x.capabilities=Re,x.extensions=Oe,x.properties=ee,x.renderLists=X,x.shadowMap=Ee,x.state=J,x.info=be}L();let se=new fc(x,R);this.xr=se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(Y,ie,!1))},this.getSize=function(E){return E.set(Y,ie)},this.setSize=function(E,B,H=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,ie=B,t.width=Math.floor(E*W),t.height=Math.floor(B*W),H===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Y*W,ie*W).floor()},this.setDrawingBufferSize=function(E,B,H){Y=E,ie=B,W=H,t.width=Math.floor(E*H),t.height=Math.floor(B*H),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,B,H,V){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,B,H,V),J.viewport(I.copy(q).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,B,H,V){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,B,H,V),J.scissor(U.copy(ue).multiplyScalar(W).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(E){J.setScissorTest(Pe=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,H=!0){let V=0;if(E){let F=!1;if(C!==null){let ne=C.texture.format;F=ne===Xa||ne===Wa||ne===Va}if(F){let ne=C.texture.type,me=ne===Ut||ne===Sn||ne===fr||ne===ii||ne===Ha||ne===Ga,Ae=we.getClearColor(),xe=we.getClearAlpha(),Ie=Ae.r,Ne=Ae.g,Ce=Ae.b;me?(g[0]=Ie,g[1]=Ne,g[2]=Ce,g[3]=xe,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Ie,v[1]=Ne,v[2]=Ce,v[3]=xe,R.clearBufferiv(R.COLOR,0,v))}else V|=R.COLOR_BUFFER_BIT}B&&(V|=R.DEPTH_BUFFER_BIT),H&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",te,!1),we.dispose(),X.dispose(),_e.dispose(),ee.dispose(),Ye.dispose(),Ze.dispose(),N.dispose(),pe.dispose(),Ge.dispose(),z.dispose(),se.dispose(),se.removeEventListener("sessionstart",yn),se.removeEventListener("sessionend",Ec),ai.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=be.autoReset,B=Ee.enabled,H=Ee.autoUpdate,V=Ee.needsUpdate,F=Ee.type;L(),be.autoReset=E,Ee.enabled=B,Ee.autoUpdate=H,Ee.needsUpdate=V,Ee.type=F}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function j(E){let B=E.target;B.removeEventListener("dispose",j),Me(B)}function Me(E){ke(E),ee.remove(E)}function ke(E){let B=ee.get(E).programs;B!==void 0&&(B.forEach(function(H){z.releaseProgram(H)}),E.isShaderMaterial&&z.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,H,V,F,ne){B===null&&(B=Se);let me=F.isMesh&&F.matrixWorld.determinant()<0,Ae=pf(E,B,H,V,F);J.setMaterial(V,me);let xe=H.index,Ie=1;if(V.wireframe===!0){if(xe=_.getWireframeAttribute(H),xe===void 0)return;Ie=2}let Ne=H.drawRange,Ce=H.attributes.position,Qe=Ne.start*Ie,it=(Ne.start+Ne.count)*Ie;ne!==null&&(Qe=Math.max(Qe,ne.start*Ie),it=Math.min(it,(ne.start+ne.count)*Ie)),xe!==null?(Qe=Math.max(Qe,0),it=Math.min(it,xe.count)):Ce!=null&&(Qe=Math.max(Qe,0),it=Math.min(it,Ce.count));let gt=it-Qe;if(gt<0||gt===1/0)return;pe.setup(F,V,Ae,H,xe);let ct,at=ge;if(xe!==null&&(ct=w.get(xe),at=Ue,at.setIndex(ct)),F.isMesh)V.wireframe===!0?(J.setLineWidth(V.wireframeLinewidth*_t()),at.setMode(R.LINES)):at.setMode(R.TRIANGLES);else if(F.isLine){let De=V.linewidth;De===void 0&&(De=1),J.setLineWidth(De*_t()),F.isLineSegments?at.setMode(R.LINES):F.isLineLoop?at.setMode(R.LINE_LOOP):at.setMode(R.LINE_STRIP)}else F.isPoints?at.setMode(R.POINTS):F.isSprite&&at.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let De=F._multiDrawStarts,ft=F._multiDrawCounts,$e=F._multiDrawCount,Zt=xe?w.get(xe).bytesPerElement:1,Ii=ee.get(V).currentProgram.getUniforms();for(let Qt=0;Qt<$e;Qt++)Ii.setValue(R,"_gl_DrawID",Qt),at.render(De[Qt]/Zt,ft[Qt])}else if(F.isInstancedMesh)at.renderInstances(Qe,gt,F.count);else if(H.isInstancedBufferGeometry){let De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ft=Math.min(H.instanceCount,De);at.renderInstances(Qe,gt,ft)}else at.render(Qe,gt)};function lt(E,B,H){E.transparent===!0&&E.side===Wt&&E.forceSinglePass===!1?(E.side=yt,E.needsUpdate=!0,Ts(E,B,H),E.side=gn,E.needsUpdate=!0,Ts(E,B,H),E.side=Wt):Ts(E,B,H)}this.compile=function(E,B,H=null){H===null&&(H=E),f=_e.get(H),f.init(B),y.push(f),H.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();let V=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ne=F.material;if(ne)if(Array.isArray(ne))for(let me=0;me<ne.length;me++){let Ae=ne[me];lt(Ae,H,F),V.add(Ae)}else lt(ne,H,F),V.add(ne)}),f=y.pop(),V},this.compileAsync=function(E,B,H=null){let V=this.compile(E,B,H);return new Promise(F=>{function ne(){if(V.forEach(function(me){ee.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){F(E);return}setTimeout(ne,10)}Oe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let tt=null;function Cn(E){tt&&tt(E)}function yn(){ai.stop()}function Ec(){ai.start()}let ai=new wh;ai.setAnimationLoop(Cn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){tt=E,se.setAnimationLoop(E),E===null?ai.stop():ai.start()},se.addEventListener("sessionstart",yn),se.addEventListener("sessionend",Ec),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(B),B=se.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,C),f=_e.get(E,y.length),f.init(B),y.push(f),K.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(K,mn,B.reversedDepth),k=this.localClippingEnabled,Le=le.init(this.clippingPlanes,k),m=X.get(E,S.length),m.init(),S.push(m),se.enabled===!0&&se.isPresenting===!0){let ne=x.xr.getDepthSensingMesh();ne!==null&&Fo(ne,B,-1/0,x.sortObjects)}Fo(E,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,ve),Xe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Xe&&we.addToRenderList(m,E),this.info.render.frame++,Le===!0&&le.beginShadows();let H=f.state.shadowsArray;Ee.render(H,E,B),Le===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,F=m.transmissive;if(f.setupLights(),B.isArrayCamera){let ne=B.cameras;if(F.length>0)for(let me=0,Ae=ne.length;me<Ae;me++){let xe=ne[me];Tc(V,F,E,xe)}Xe&&we.render(E);for(let me=0,Ae=ne.length;me<Ae;me++){let xe=ne[me];wc(m,E,xe,xe.viewport)}}else F.length>0&&Tc(V,F,E,B),Xe&&we.render(E),wc(m,E,B);C!==null&&D===0&&(oe.updateMultisampleRenderTarget(C),oe.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,B),pe.resetDefaultState(),A=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],Le===!0&&le.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Fo(E,B,H,V){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){V&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);let me=N.update(E),Ae=E.material;Ae.visible&&m.push(E,me,Ae,H,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){let me=N.update(E),Ae=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Be.copy(me.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(K)),Array.isArray(Ae)){let xe=me.groups;for(let Ie=0,Ne=xe.length;Ie<Ne;Ie++){let Ce=xe[Ie],Qe=Ae[Ce.materialIndex];Qe&&Qe.visible&&m.push(E,me,Qe,H,Be.z,Ce)}}else Ae.visible&&m.push(E,me,Ae,H,Be.z,null)}}let ne=E.children;for(let me=0,Ae=ne.length;me<Ae;me++)Fo(ne[me],B,H,V)}function wc(E,B,H,V){let F=E.opaque,ne=E.transmissive,me=E.transparent;f.setupLightsView(H),Le===!0&&le.setGlobalState(x.clippingPlanes,H),V&&J.viewport(I.copy(V)),F.length>0&&ws(F,B,H),ne.length>0&&ws(ne,B,H),me.length>0&&ws(me,B,H),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Tc(E,B,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new It(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?dr:Ut,minFilter:ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let ne=f.state.transmissionRenderTarget[V.id],me=V.viewport||I;ne.setSize(me.z*x.transmissionResolutionScale,me.w*x.transmissionResolutionScale);let Ae=x.getRenderTarget(),xe=x.getActiveCubeFace(),Ie=x.getActiveMipmapLevel();x.setRenderTarget(ne),x.getClearColor(G),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&we.render(H);let Ne=x.toneMapping;x.toneMapping=Nn;let Ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Le===!0&&le.setGlobalState(x.clippingPlanes,V),ws(E,H,V),oe.updateMultisampleRenderTarget(ne),oe.updateRenderTargetMipmap(ne),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let it=0,gt=B.length;it<gt;it++){let ct=B[it],at=ct.object,De=ct.geometry,ft=ct.material,$e=ct.group;if(ft.side===Wt&&at.layers.test(V.layers)){let Zt=ft.side;ft.side=yt,ft.needsUpdate=!0,bc(at,H,V,De,ft,$e),ft.side=Zt,ft.needsUpdate=!0,Qe=!0}}Qe===!0&&(oe.updateMultisampleRenderTarget(ne),oe.updateRenderTargetMipmap(ne))}x.setRenderTarget(Ae,xe,Ie),x.setClearColor(G,Z),Ce!==void 0&&(V.viewport=Ce),x.toneMapping=Ne}function ws(E,B,H){let V=B.isScene===!0?B.overrideMaterial:null;for(let F=0,ne=E.length;F<ne;F++){let me=E[F],Ae=me.object,xe=me.geometry,Ie=me.group,Ne=me.material;Ne.allowOverride===!0&&V!==null&&(Ne=V),Ae.layers.test(H.layers)&&bc(Ae,B,H,xe,Ne,Ie)}}function bc(E,B,H,V,F,ne){E.onBeforeRender(x,B,H,V,F,ne),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,B,H,V,E,ne),F.transparent===!0&&F.side===Wt&&F.forceSinglePass===!1?(F.side=yt,F.needsUpdate=!0,x.renderBufferDirect(H,B,V,F,E,ne),F.side=gn,F.needsUpdate=!0,x.renderBufferDirect(H,B,V,F,E,ne),F.side=Wt):x.renderBufferDirect(H,B,V,F,E,ne),E.onAfterRender(x,B,H,V,F,ne)}function Ts(E,B,H){B.isScene!==!0&&(B=Se);let V=ee.get(E),F=f.state.lights,ne=f.state.shadowsArray,me=F.state.version,Ae=z.getParameters(E,F.state,ne,B,H),xe=z.getProgramCacheKey(Ae),Ie=V.programs;V.environment=E.isMeshStandardMaterial?B.environment:null,V.fog=B.fog,V.envMap=(E.isMeshStandardMaterial?Ze:Ye).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",j),Ie=new Map,V.programs=Ie);let Ne=Ie.get(xe);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===me)return Rc(E,Ae),Ne}else Ae.uniforms=z.getUniforms(E),E.onBeforeCompile(Ae,x),Ne=z.acquireProgram(Ae,xe),Ie.set(xe,Ne),V.uniforms=Ae.uniforms;let Ce=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=le.uniform),Rc(E,Ae),V.needsLights=gf(E),V.lightsStateVersion=me,V.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ne,V.uniformsList=null,Ne}function Cc(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=gr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Rc(E,B){let H=ee.get(E);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.batchingColor=B.batchingColor,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function pf(E,B,H,V,F){B.isScene!==!0&&(B=Se),oe.resetTextureUnits();let ne=B.fog,me=V.isMeshStandardMaterial?B.environment:null,Ae=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vn,xe=(V.isMeshStandardMaterial?Ze:Ye).get(V.envMap||me),Ie=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,it=!!H.morphAttributes.color,gt=Nn;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(gt=x.toneMapping);let ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=ct!==void 0?ct.length:0,De=ee.get(V),ft=f.state.lights;if(Le===!0&&(k===!0||E!==M)){let Gt=E===M&&V.id===A;le.setState(V,E,Gt)}let $e=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ft.state.version||De.outputColorSpace!==Ae||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==xe||V.fog===!0&&De.fog!==ne||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==le.numPlanes||De.numIntersection!==le.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==Ne||De.morphTargets!==Ce||De.morphNormals!==Qe||De.morphColors!==it||De.toneMapping!==gt||De.morphTargetsCount!==at)&&($e=!0):($e=!0,De.__version=V.version);let Zt=De.currentProgram;$e===!0&&(Zt=Ts(V,B,F));let Ii=!1,Qt=!1,Ar=!1,dt=Zt.getUniforms(),rn=De.uniforms;if(J.useProgram(Zt.program)&&(Ii=!0,Qt=!0,Ar=!0),V.id!==A&&(A=V.id,Qt=!0),Ii||M!==E){J.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),dt.setValue(R,"projectionMatrix",E.projectionMatrix),dt.setValue(R,"viewMatrix",E.matrixWorldInverse);let Xt=dt.map.cameraPosition;Xt!==void 0&&Xt.setValue(R,de.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&dt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Qt=!0,Ar=!0)}if(F.isSkinnedMesh){dt.setOptional(R,F,"bindMatrix"),dt.setOptional(R,F,"bindMatrixInverse");let Gt=F.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),dt.setValue(R,"boneTexture",Gt.boneTexture,oe))}F.isBatchedMesh&&(dt.setOptional(R,F,"batchingTexture"),dt.setValue(R,"batchingTexture",F._matricesTexture,oe),dt.setOptional(R,F,"batchingIdTexture"),dt.setValue(R,"batchingIdTexture",F._indirectTexture,oe),dt.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&dt.setValue(R,"batchingColorTexture",F._colorsTexture,oe));let sn=H.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&re.update(F,H,Zt),(Qt||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,dt.setValue(R,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=xe,rn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&B.environment!==null&&(rn.envMapIntensity.value=B.environmentIntensity),Qt&&(dt.setValue(R,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&mf(rn,Ar),ne&&V.fog===!0&&Q.refreshFogUniforms(rn,ne),Q.refreshMaterialUniforms(rn,V,W,ie,f.state.transmissionRenderTarget[E.id]),gr.upload(R,Cc(De),rn,oe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(gr.upload(R,Cc(De),rn,oe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(R,"center",F.center),dt.setValue(R,"modelViewMatrix",F.modelViewMatrix),dt.setValue(R,"normalMatrix",F.normalMatrix),dt.setValue(R,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Gt=V.uniformsGroups;for(let Xt=0,Oo=Gt.length;Xt<Oo;Xt++){let oi=Gt[Xt];Ge.update(oi,Zt),Ge.bind(oi,Zt)}}return Zt}function mf(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function gf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,B,H){let V=ee.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ee.get(E.texture).__webglTexture=B,ee.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let H=ee.get(E);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0};let vf=R.createFramebuffer();this.setRenderTarget=function(E,B=0,H=0){C=E,T=B,D=H;let V=!0,F=null,ne=!1,me=!1;if(E){let xe=ee.get(E);if(xe.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)oe.setupRenderTarget(E);else if(xe.__hasExternalTextures)oe.rebindTextures(E,ee.get(E.texture).__webglTexture,ee.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ce=E.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&ee.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(E)}}let Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);let Ne=ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?F=Ne[B][H]:F=Ne[B],ne=!0):E.samples>0&&oe.useMultisampledRTT(E)===!1?F=ee.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[H]:F=Ne,I.copy(E.viewport),U.copy(E.scissor),O=E.scissorTest}else I.copy(q).multiplyScalar(W).floor(),U.copy(ue).multiplyScalar(W).floor(),O=Pe;if(H!==0&&(F=vf),J.bindFramebuffer(R.FRAMEBUFFER,F)&&V&&J.drawBuffers(E,F),J.viewport(I),J.scissor(U),J.setScissorTest(O),ne){let xe=ee.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,H)}else if(me){let xe=B;for(let Ie=0;Ie<E.textures.length;Ie++){let Ne=ee.get(E.textures[Ie]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,H,xe)}}else if(E!==null&&H!==0){let xe=ee.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,xe.__webglTexture,H)}A=-1},this.readRenderTargetPixels=function(E,B,H,V,F,ne,me,Ae=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){J.bindFramebuffer(R.FRAMEBUFFER,xe);try{let Ie=E.textures[Ae],Ne=Ie.format,Ce=Ie.type;if(!Re.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-V&&H>=0&&H<=E.height-F&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ae),R.readPixels(B,H,V,F,Te.convert(Ne),Te.convert(Ce),ne))}finally{let Ie=C!==null?ee.get(C).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,B,H,V,F,ne,me,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe)if(B>=0&&B<=E.width-V&&H>=0&&H<=E.height-F){J.bindFramebuffer(R.FRAMEBUFFER,xe);let Ie=E.textures[Ae],Ne=Ie.format,Ce=Ie.type;if(!Re.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Qe),R.bufferData(R.PIXEL_PACK_BUFFER,ne.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ae),R.readPixels(B,H,V,F,Te.convert(Ne),Te.convert(Ce),0);let it=C!==null?ee.get(C).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,it);let gt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Zu(R,gt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Qe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ne),R.deleteBuffer(Qe),R.deleteSync(gt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,H=0){let V=Math.pow(2,-H),F=Math.floor(E.image.width*V),ne=Math.floor(E.image.height*V),me=B!==null?B.x:0,Ae=B!==null?B.y:0;oe.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,me,Ae,F,ne),J.unbindTexture()};let xf=R.createFramebuffer(),yf=R.createFramebuffer();this.copyTextureToTexture=function(E,B,H=null,V=null,F=0,ne=null){ne===null&&(F!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=F,F=0):ne=0);let me,Ae,xe,Ie,Ne,Ce,Qe,it,gt,ct=E.isCompressedTexture?E.mipmaps[ne]:E.image;if(H!==null)me=H.max.x-H.min.x,Ae=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Ie=H.min.x,Ne=H.min.y,Ce=H.isBox3?H.min.z:0;else{let sn=Math.pow(2,-F);me=Math.floor(ct.width*sn),Ae=Math.floor(ct.height*sn),E.isDataArrayTexture?xe=ct.depth:E.isData3DTexture?xe=Math.floor(ct.depth*sn):xe=1,Ie=0,Ne=0,Ce=0}V!==null?(Qe=V.x,it=V.y,gt=V.z):(Qe=0,it=0,gt=0);let at=Te.convert(B.format),De=Te.convert(B.type),ft;B.isData3DTexture?(oe.setTexture3D(B,0),ft=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(oe.setTexture2DArray(B,0),ft=R.TEXTURE_2D_ARRAY):(oe.setTexture2D(B,0),ft=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);let $e=R.getParameter(R.UNPACK_ROW_LENGTH),Zt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ii=R.getParameter(R.UNPACK_SKIP_PIXELS),Qt=R.getParameter(R.UNPACK_SKIP_ROWS),Ar=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ct.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ie),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ne),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ce);let dt=E.isDataArrayTexture||E.isData3DTexture,rn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let sn=ee.get(E),Gt=ee.get(B),Xt=ee.get(sn.__renderTarget),Oo=ee.get(Gt.__renderTarget);J.bindFramebuffer(R.READ_FRAMEBUFFER,Xt.__webglFramebuffer),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,Oo.__webglFramebuffer);for(let oi=0;oi<xe;oi++)dt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ee.get(E).__webglTexture,F,Ce+oi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ee.get(B).__webglTexture,ne,gt+oi)),R.blitFramebuffer(Ie,Ne,me,Ae,Qe,it,me,Ae,R.DEPTH_BUFFER_BIT,R.NEAREST);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||ee.has(E)){let sn=ee.get(E),Gt=ee.get(B);J.bindFramebuffer(R.READ_FRAMEBUFFER,xf),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,yf);for(let Xt=0;Xt<xe;Xt++)dt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,sn.__webglTexture,F,Ce+Xt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,sn.__webglTexture,F),rn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gt.__webglTexture,ne,gt+Xt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Gt.__webglTexture,ne),F!==0?R.blitFramebuffer(Ie,Ne,me,Ae,Qe,it,me,Ae,R.COLOR_BUFFER_BIT,R.NEAREST):rn?R.copyTexSubImage3D(ft,ne,Qe,it,gt+Xt,Ie,Ne,me,Ae):R.copyTexSubImage2D(ft,ne,Qe,it,Ie,Ne,me,Ae);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else rn?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(ft,ne,Qe,it,gt,me,Ae,xe,at,De,ct.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(ft,ne,Qe,it,gt,me,Ae,xe,at,ct.data):R.texSubImage3D(ft,ne,Qe,it,gt,me,Ae,xe,at,De,ct):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ne,Qe,it,me,Ae,at,De,ct.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ne,Qe,it,ct.width,ct.height,at,ct.data):R.texSubImage2D(R.TEXTURE_2D,ne,Qe,it,me,Ae,at,De,ct);R.pixelStorei(R.UNPACK_ROW_LENGTH,$e),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Zt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ii),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ar),ne===0&&B.generateMipmaps&&R.generateMipmap(ft),J.unbindTexture()},this.initRenderTarget=function(E){ee.get(E).__webglFramebuffer===void 0&&oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?oe.setTextureCube(E,0):E.isData3DTexture?oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?oe.setTexture2DArray(E,0):oe.setTexture2D(E,0),J.unbindTexture()},this.resetState=function(){T=0,D=0,C=null,J.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}});function d0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function p0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function m0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uh),this.state=st.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function g0(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=st.DOLLY;break;case ei.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}break;case ei.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(mc)}function v0(n){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function x0(n){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(n.preventDefault(),this.dispatchEvent(mc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Uh))}function y0(n){this.enabled!==!1&&this._handleKeyDown(n)}function _0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=st.TOUCH_ROTATE;break;case ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=st.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(mc)}function A0(n){switch(this._trackPointer(n),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=st.NONE}}function M0(n){this.enabled!==!1&&n.preventDefault()}function S0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function E0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ph,mc,Uh,Co,Ih,f0,bt,qt,st,pc,Ro,Lh=Et(()=>{Lt();Ph={type:"change"},mc={type:"start"},Uh={type:"end"},Co=new qn,Ih=new on,f0=Math.cos(70*Xl.DEG2RAD),bt=new P,qt=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pc=1e-6,Ro=class extends cs{constructor(e,t=null){super(e,t),this.state=st.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new cn,this._lastTargetPosition=new P,this._quat=new cn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hr,this._sphericalDelta=new hr,this._scale=1,this._panOffset=new P,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new P,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=p0.bind(this),this._onPointerDown=d0.bind(this),this._onPointerUp=m0.bind(this),this._onContextMenu=M0.bind(this),this._onMouseWheel=x0.bind(this),this._onKeyDown=y0.bind(this),this._onTouchStart=_0.bind(this),this._onTouchMove=A0.bind(this),this._onMouseDown=g0.bind(this),this._onMouseMove=v0.bind(this),this._interceptControlDown=S0.bind(this),this._interceptControlUp=E0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ph),this.update(),this.state=st.NONE}update(e=null){let t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=qt:i>Math.PI&&(i-=qt),r<-Math.PI?r+=qt:r>Math.PI&&(r-=qt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=bt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Co.origin.copy(this.object.position),Co.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Co.direction))<f0?this.object.lookAt(this.target):(Ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),Co.intersectPlane(Ih,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pc||this._lastTargetPosition.distanceToSquared(this.target)>pc?(this.dispatchEvent(Ph),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;bt.copy(r).sub(this.target);let s=bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});var gc,Bh=Et(()=>{gc={seed:1864,target:[13,4],turns:0,questions:0,frames:[{position:[8,8],direction:3,map:[[2,13,4,4,4,2,2,5,2,2,2,2,2,5,13,13],[13,13,2,2,2,2,2,2,2,2,2,2,2,2,2,13],[5,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,5,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,2],[13,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[13,13,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,13,13,2,2,2,2,2,2,2,2,2,2,2,2,5],[2,2,13,13,2,2,2,2,5,2,5,2,2,2,2,2],[2,2,5,13,2,2,2,2,5,2,2,2,2,2,2,2],[3,5,5,13,13,2,2,2,2,2,2,2,2,5,2,13],[3,2,2,5,13,2,2,2,2,2,2,2,2,2,2,13],[3,2,2,2,13,2,2,2,2,2,2,2,2,2,2,13],[2,2,2,13,2,2,2,2,5,5,2,2,2,5,2,13],[2,2,13,13,2,2,2,2,2,2,2,4,4,4,2,13]],action:"READY",reasoning:"",question:"",answer:""}]}});function Oh(n,e,t){for(let i of e){let r="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function yx(n,e,t){let i=e.getFragmentShader(),r=e.getVertexShader(),s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&bn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=t.shaderParts,l=c.get(et.FRAGMENT_HEAD)||"",u=c.get(et.FRAGMENT_MAIN_UV)||"",h=c.get(et.FRAGMENT_MAIN_IMAGE)||"",p=c.get(et.VERTEX_HEAD)||"",d=c.get(et.VERTEX_MAIN_SUPPORT)||"",g=new Set,v=new Set;if(a&&(u+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){let S=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);d+=`	${n}MainSupport(`,d+=S?`vUv);
`:`);
`;for(let y of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let x of y[1].split(/\s*,\s*/))t.varyings.add(x),g.add(x),v.add(x);for(let y of r.matchAll(o))v.add(y[1])}for(let S of i.matchAll(o))v.add(S[1]);for(let S of e.defines.keys())v.add(S.replace(/\([\w\s,]*\)/g,""));for(let S of e.uniforms.keys())v.add(S);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((S,y)=>t.uniforms.set(n+y.charAt(0).toUpperCase()+y.slice(1),S)),e.defines.forEach((S,y)=>t.defines.set(n+y.charAt(0).toUpperCase()+y.slice(1),S));let m=new Map([["fragment",i],["vertex",r]]);Oh(n,v,t.defines),Oh(n,v,m),i=m.get("fragment"),r=m.get("vertex");let f=e.blendMode;if(t.blendModes.set(f.blendFunction,f),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===ot?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==nn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);let S=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${n}MainImage(color0, UV, `,(t.attributes&bn.DEPTH)!==0&&S.test(i)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;let y=n+"BlendOpacity";t.uniforms.set(y,f.opacity),h+=`color0 = blend${f.blendFunction}(color0, color1, ${y});

	`,l+=`uniform float ${y};

`}if(l+=i+`
`,r!==null&&(p+=r+`
`),c.set(et.FRAGMENT_HEAD,l),c.set(et.FRAGMENT_MAIN_UV,u),c.set(et.FRAGMENT_MAIN_IMAGE,h),c.set(et.VERTEX_HEAD,p),c.set(et.VERTEX_MAIN_SUPPORT,d),e.extensions!==null)for(let S of e.extensions)t.extensions.add(S)}}function yc(n,e,t){return n+(e-n)*t}function Ht(n,e,t,i){let r=yc(n,e,.75),s=yc(t,i,1-.25);return yc(r,s,1-.125)}var vc,T0,b0,C0,si,R0,D0,P0,I0,U0,Nh,zh,L0,kh,bn,et,B0,xc,Fh,qe,N0,F0,O0,z0,k0,H0,G0,V0,W0,X0,Y0,q0,Z0,Q0,K0,J0,j0,$0,ex,tx,nx,ix,rx,sx,ax,ox,lx,cx,ux,hx,fx,dx,px,mx,Do,HA,Hh,GA,gx,vx,xx,WA,Di,XA,YA,Gh,ZA,QA,KA,JA,jA,$A,eM,tM,nM,Po=Et(()=>{Lt();Lt();Lt();Lt();Lt();Lt();Lt();Lt();Lt();Lt();Lt();vc=1/1e3,T0=1e3,b0=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*vc}get fixedDelta(){return this._fixedDelta*vc}set fixedDelta(n){this._fixedDelta=n*T0}get elapsed(){return this._elapsed*vc}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},C0=(()=>{let n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new vt;return t.setAttribute("position",new zt(n,3)),t.setAttribute("uv",new zt(e,2)),t})(),si=class _c{static get fullscreenGeometry(){return C0}constructor(e="Pass",t=new Zn,i=new gi){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new xt(_c.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Zn),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=wn){}render(e,t,i,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof It||t instanceof jt||t instanceof Pt||t instanceof _c)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},R0=class extends si{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,r){let s=n.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},D0=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,P0="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",I0=class extends Mt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new rt(null),opacity:new rt(1)},blending:tn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:D0,vertexShader:P0})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},U0=class extends si{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new I0,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new It(1,1,{minFilter:Bt,magFilter:Bt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Ut?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===ot&&(this.renderTarget.texture.colorSpace=ot))}},Nh=new ze,zh=class extends si{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,r){let s=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),c=s!==null,l=a>=0;c?(n.getClearColor(Nh),n.setClearColor(s,l?a:o)):l&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),c?n.setClearColor(Nh,o):l&&n.setClearAlpha(o)}},L0=class extends si{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new zh(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,r){let s=n.getContext(),a=n.state.buffers,o=this.scene,c=this.camera,l=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(n,null):(l.render(n,e),l.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,c)):(n.setRenderTarget(e),n.render(o,c),n.setRenderTarget(t),n.render(o,c)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},kh=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new U0,this.depthTexture=null,this.passes=[],this.timer=new b0,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(n){let e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){let e=n.getSize(new ae),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Ut&&n.outputColorSpace===ot&&(this.inputBuffer.texture.colorSpace=ot,this.outputBuffer.texture.colorSpace=ot,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){let n=this.depthTexture=new vi;return this.inputBuffer.depthTexture=n,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(n.format=ri,n.type=ii):n.type=Sn,n}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(let n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){let r=this.renderer,s=r===null?new ae:r.getDrawingBufferSize(new ae),a={minFilter:Bt,magFilter:Bt,stencilBuffer:e,depthBuffer:n,type:t},o=new It(s.width,s.height,a);return i>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=i),t===Ut&&r!==null&&r.outputColorSpace===ot&&(o.texture.colorSpace=ot),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(n){for(let e of this.passes)e.mainScene=n}setMainCamera(n){for(let e of this.passes)e.mainCamera=n}addPass(n,e){let t=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new ae),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.setRenderer(i),n.setSize(r.width,r.height),n.initialize(i,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){let o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else n.setDepthTexture(this.depthTexture)}removePass(n){let e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){let s=(o,c)=>o||c.needsDepthTexture;e.reduce(s,!1)||(n.getDepthTexture()===this.depthTexture&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,c;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(let l of this.passes)l.enabled&&(l.render(e,i,r,n,s),l.needsSwap&&(s&&(t.renderToScreen=l.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,i,r,n,s),o.setFunc(a.EQUAL,1,4294967295)),c=i,i=r,r=c),l instanceof L0?s=!0:l instanceof R0&&(s=!1))}setSize(n,e,t){let i=this.renderer,r=i.getSize(new ae);(n===void 0||e===void 0)&&(n=r.width,e=r.height),(r.width!==n||r.height!==e)&&i.setSize(n,e,t);let s=i.getDrawingBufferSize(new ae);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(let a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),si.fullscreenGeometry.dispose()}},bn={NONE:0,DEPTH:1,CONVOLUTION:2},et={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},B0=class{constructor(){this.shaderParts=new Map([[et.FRAGMENT_HEAD,null],[et.FRAGMENT_MAIN_UV,null],[et.FRAGMENT_MAIN_IMAGE,null],[et.VERTEX_HEAD,null],[et.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=bn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=vn}},xc=!1,Fh=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Wt:t=this.materialsFlatShadedDoubleSide;break;case yt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Wt:t=this.materialsDoubleSide;break;case yt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Mt))return n.clone();let e=n.uniforms,t=new Map;for(let r in e){let s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}let i=n.clone();for(let r of t)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){let e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(let t of e)t.uniforms=Object.assign({},n.uniforms),t.side=gn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=yt,i}),this.materialsDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Wt,i}),this.materialsFlatShaded=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=yt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Wt,i})}}render(n,e,t){let i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,xc){let r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(let s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{let r=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=r}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return xc}static set workaroundEnabled(n){xc=n}},qe={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},N0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",F0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",O0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",z0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",k0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",H0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",G0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",V0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",W0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",X0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",Y0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",q0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",Z0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",Q0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",K0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",J0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",j0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",$0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",ex="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",tx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",nx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",ix="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",rx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",sx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",ax="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",ox="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",lx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",cx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",ux="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",hx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",fx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",dx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",px=new Map([[qe.ADD,N0],[qe.ALPHA,F0],[qe.AVERAGE,O0],[qe.COLOR,z0],[qe.COLOR_BURN,k0],[qe.COLOR_DODGE,H0],[qe.DARKEN,G0],[qe.DIFFERENCE,V0],[qe.DIVIDE,W0],[qe.DST,null],[qe.EXCLUSION,X0],[qe.HARD_LIGHT,Y0],[qe.HARD_MIX,q0],[qe.HUE,Z0],[qe.INVERT,Q0],[qe.INVERT_RGB,K0],[qe.LIGHTEN,J0],[qe.LINEAR_BURN,j0],[qe.LINEAR_DODGE,$0],[qe.LINEAR_LIGHT,ex],[qe.LUMINOSITY,tx],[qe.MULTIPLY,nx],[qe.NEGATION,ix],[qe.NORMAL,rx],[qe.OVERLAY,sx],[qe.PIN_LIGHT,ax],[qe.REFLECT,ox],[qe.SATURATION,lx],[qe.SCREEN,cx],[qe.SOFT_LIGHT,ux],[qe.SRC,hx],[qe.SUBTRACT,fx],[qe.VIVID_LIGHT,dx]]),mx=class extends Yt{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new rt(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return px.get(this.blendFunction)}},Do=class extends Yt{constructor(n,e,{attributes:t=bn.NONE,blendFunction:i=qe.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new mx(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=vn,this._outputColorSpace=nn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=wn){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(let n of Object.keys(this)){let e=this[n];(e instanceof It||e instanceof jt||e instanceof Pt||e instanceof si)&&this[n].dispose()}}},HA=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],Hh=class extends si{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.clearPass=new zh,this.overrideMaterialManager=t===null?null:new Fh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){let n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){let e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new Fh(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,r){let s=this.scene,a=this.camera,o=this.selection,c=a.layers.mask,l=s.background,u=n.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,s,a):n.render(s,a),a.layers.mask=c,s.background=l,n.shadowMap.autoUpdate=u}},GA=Math.PI*.5,gx=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,vx="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",xx=class extends Mt{constructor(n,e,t,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"180".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new rt(null),depthBuffer:new rt(null),resolution:new rt(new ae),texelSize:new rt(new ae),cameraNear:new rt(.3),cameraFar:new rt(1e3),aspect:new rt(1),time:new rt(0)},blending:tn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=wn){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=gx.replace(et.FRAGMENT_HEAD,n.get(et.FRAGMENT_HEAD)||"").replace(et.FRAGMENT_MAIN_UV,n.get(et.FRAGMENT_MAIN_UV)||"").replace(et.FRAGMENT_MAIN_IMAGE,n.get(et.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=vx.replace(et.VERTEX_HEAD,n.get(et.VERTEX_HEAD)||"").replace(et.VERTEX_MAIN_SUPPORT,n.get(et.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(let e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(let e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(let e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Rt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){let t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return et}},WA=Number("180".replace(/\D+/g,"")),Di=255/256,XA=new Float32Array([Di/256**3,Di/256**2,Di/256,Di]),YA=new Float32Array([Di,Di/256,Di/256**2,1/256**3]);Gh=class extends si{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new xx(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(let e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(let e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){let e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let n=new B0,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===qe.DST)n.attributes|=a.getAttributes()&bn.DEPTH;else{if((n.attributes&a.getAttributes()&bn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);yx("e"+e++,a,n)}let t=n.shaderParts.get(et.FRAGMENT_HEAD),i=n.shaderParts.get(et.FRAGMENT_MAIN_IMAGE),r=n.shaderParts.get(et.FRAGMENT_MAIN_UV),s=/\bblend\b/g;for(let a of n.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;(n.attributes&bn.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===ot&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(et.FRAGMENT_HEAD,t),n.shaderParts.set(et.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(et.FRAGMENT_MAIN_UV,r);for(let[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=wn){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,r){for(let s of this.effects)s.update(n,e,i);if(!this.skipRendering||this.renderToScreen){let s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(let t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(let i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Ut&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){n.type==="change"&&this.recompile()}},ZA=[new Float32Array(3),new Float32Array(3)],QA=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],KA=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]],JA=[new Float32Array(2),new Float32Array(2)],jA=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),$A=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],eM=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],tM=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])],nM=new Map([[Ht(0,0,0,0),new Float32Array([0,0,0,0])],[Ht(0,0,0,1),new Float32Array([0,0,0,1])],[Ht(0,0,1,0),new Float32Array([0,0,1,0])],[Ht(0,0,1,1),new Float32Array([0,0,1,1])],[Ht(0,1,0,0),new Float32Array([0,1,0,0])],[Ht(0,1,0,1),new Float32Array([0,1,0,1])],[Ht(0,1,1,0),new Float32Array([0,1,1,0])],[Ht(0,1,1,1),new Float32Array([0,1,1,1])],[Ht(1,0,0,0),new Float32Array([1,0,0,0])],[Ht(1,0,0,1),new Float32Array([1,0,0,1])],[Ht(1,0,1,0),new Float32Array([1,0,1,0])],[Ht(1,0,1,1),new Float32Array([1,0,1,1])],[Ht(1,1,0,0),new Float32Array([1,1,0,0])],[Ht(1,1,0,1),new Float32Array([1,1,0,1])],[Ht(1,1,1,0),new Float32Array([1,1,1,0])],[Ht(1,1,1,1),new Float32Array([1,1,1,1])]])});var Vh=Et(()=>{});var Wh=Et(()=>{});var _x,vs,Xh=Et(()=>{Po();Lt();_x=`
uniform float uLevels;
uniform float uGamma;
uniform float uBlend;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec3 c = inputColor.rgb;
  vec3 g = pow(c, vec3(uGamma));
  vec3 q = floor(g * uLevels + 0.5) / uLevels;
  vec3 outc = pow(q, vec3(1.0 / uGamma));
  outputColor = vec4(mix(c, outc, uBlend), inputColor.a);
}
`,vs=class extends Do{constructor({levels:e=5,gamma:t=1,blend:i=1}={}){super("PosterizeEffect",_x,{uniforms:new Map([["uLevels",new rt(e)],["uGamma",new rt(t)],["uBlend",new rt(i)]])})}set levels(e){this.uniforms.get("uLevels").value=e}get levels(){return this.uniforms.get("uLevels").value}}});var Ax,xs,Yh=Et(()=>{Po();Lt();Ax=`
uniform vec3  uColor;
uniform float uThickness;
uniform float uDepthEdge;
uniform float uLumaEdge;
uniform float uThreshold;
uniform float uJitter;

float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

// cheap value noise for line "boil"
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float readDepthAt(vec2 uv) {
  return readDepth(texture2D(depthBuffer, uv).r);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec2 texel = 1.0 / resolution;
  // hand-inked jitter: nudge the sampling origin by per-fragment noise
  vec2 j = (vec2(hash(uv * resolution), hash(uv * resolution + 7.0)) - 0.5) * uJitter * texel;
  vec2 o = texel * uThickness;

  // Sobel over depth (silhouettes) and luma (interior edges)
  float dC = readDepthAt(uv + j);
  float dTL = readDepthAt(uv + j + vec2(-o.x,  o.y));
  float dT  = readDepthAt(uv + j + vec2( 0.0,  o.y));
  float dTR = readDepthAt(uv + j + vec2( o.x,  o.y));
  float dL  = readDepthAt(uv + j + vec2(-o.x,  0.0));
  float dR  = readDepthAt(uv + j + vec2( o.x,  0.0));
  float dBL = readDepthAt(uv + j + vec2(-o.x, -o.y));
  float dB  = readDepthAt(uv + j + vec2( 0.0, -o.y));
  float dBR = readDepthAt(uv + j + vec2( o.x, -o.y));

  float gxD = (dTL + 2.0*dL + dBL) - (dTR + 2.0*dR + dBR);
  float gyD = (dTL + 2.0*dT + dTR) - (dBL + 2.0*dB + dBR);
  float depthSobel = length(vec2(gxD, gyD));

  float lC  = luma(texture2D(inputBuffer, uv + j).rgb);
  float lL  = luma(texture2D(inputBuffer, uv + j + vec2(-o.x, 0.0)).rgb);
  float lR  = luma(texture2D(inputBuffer, uv + j + vec2( o.x, 0.0)).rgb);
  float lT  = luma(texture2D(inputBuffer, uv + j + vec2(0.0,  o.y)).rgb);
  float lB  = luma(texture2D(inputBuffer, uv + j + vec2(0.0, -o.y)).rgb);
  float lumaSobel = abs(lL - lR) + abs(lT - lB);

  float edge = depthSobel * uDepthEdge * 40.0 + lumaSobel * uLumaEdge;
  float ink = smoothstep(uThreshold, uThreshold + 0.08, edge);

  outputColor = vec4(mix(inputColor.rgb, uColor, ink), inputColor.a);
}
`,xs=class extends Do{constructor({color:e="#0a0a0a",thickness:t=1,depthEdge:i=.6,lumaEdge:r=.35,threshold:s=.18,jitter:a=.6}={}){super("InkOutlineEffect",Ax,{attributes:bn.DEPTH|bn.CONVOLUTION,blendFunction:qe.SRC,uniforms:new Map([["uColor",new rt(new ze(e))],["uThickness",new rt(t)],["uDepthEdge",new rt(i)],["uLumaEdge",new rt(r)],["uThreshold",new rt(s)],["uJitter",new rt(a)]])})}set thickness(e){this.uniforms.get("uThickness").value=e}get thickness(){return this.uniforms.get("uThickness").value}}});var qh=Et(()=>{});var Zh=Et(()=>{});var Qh=Et(()=>{});var Kh=Et(()=>{Vh();Wh();Xh();Yh();qh();Zh();Qh()});function Jh(){let n=new xs({thickness:1,threshold:.18,jitter:0});return n.setFragmentShader(n.getFragmentShader().replace("readDepth(texture2D(depthBuffer, uv).r)","readDepth(uv)")),[new vs({levels:5}),n]}var jh=Et(()=>{Kh()});function $h(n,e,t){let i=Math.sin(t),r=Math.cos(t);return{eye:[n-i*4.5,2.7,e-r*4.5],target:[n+i*1.2,1.1,e+r*1.2]}}function ef(n,e,t,i){let r=(u,h,p)=>Math.max(h,Math.min(u,p)),s=e.topInset??72,a=Math.max(16,e.width-t.width-16),o=Math.max(s,e.height-t.height-116),c=r(n.x-t.width/2,16,a),l=r(n.y-t.height-26,s,o);return i&&c+t.width+16>i.left&&c<i.right+16&&l<i.bottom+16&&l+t.height+16>i.top&&(i.left-t.width-16>=16?c=Math.min(c,i.left-t.width-16):l=r(i.bottom+16,s,o)),{left:c,top:l,tail:r(n.x-c,24,t.width-24)}}var tf=Et(()=>{});function hn(n,e,t,i,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;ys.copy(e),ys[i]=0,ys.normalize();let l=.5*a/(a+o),u=1-ys.angleTo(n)/c;return Math.sign(ys[t])===1?u*l:o/(a+o)+l+l*(1-u)}var ys,Io,nf=Et(()=>{Lt();ys=new P;Io=class n extends An{constructor(e=1,t=1,i=1,r=2,s=.1){let a=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new P,l=new P,u=new P(e,t,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,v=new P,m=.5/a;for(let f=0,S=0;f<h.length;f+=3,S+=2)switch(c.fromArray(h,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[f+0]=u.x*Math.sign(c.x)+l.x*s,h[f+1]=u.y*Math.sign(c.y)+l.y*s,h[f+2]=u.z*Math.sign(c.z)+l.z*s,p[f+0]=l.x,p[f+1]=l.y,p[f+2]=l.z,Math.floor(f/g)){case 0:v.set(1,0,0),d[S+0]=hn(v,l,"z","y",s,i),d[S+1]=1-hn(v,l,"y","z",s,t);break;case 1:v.set(-1,0,0),d[S+0]=1-hn(v,l,"z","y",s,i),d[S+1]=1-hn(v,l,"y","z",s,t);break;case 2:v.set(0,1,0),d[S+0]=1-hn(v,l,"x","z",s,e),d[S+1]=hn(v,l,"z","x",s,i);break;case 3:v.set(0,-1,0),d[S+0]=1-hn(v,l,"x","z",s,e),d[S+1]=1-hn(v,l,"z","x",s,i);break;case 4:v.set(0,0,1),d[S+0]=1-hn(v,l,"x","y",s,e),d[S+1]=1-hn(v,l,"y","x",s,t);break;case 5:v.set(0,0,-1),d[S+0]=hn(v,l,"x","y",s,e),d[S+1]=1-hn(v,l,"y","x",s,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}}});function rf(){let n=new Dt;n.name="ceramic-robot";let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#fff8ed",t.fillRect(0,0,256,256);let i=1864,r=()=>(i=i*1664525+1013904223>>>0)/4294967296;for(let C=0;C<1700;C++)t.fillStyle=`rgba(104,68,35,${.12+r()*.35})`,t.beginPath(),t.ellipse(r()*256,r()*256,.3+r()*1.3,.3+r()*1.1,0,0,Math.PI*2),t.fill();let s=new Gr(e);s.colorSpace=ot;let a=new cr({color:15785919,map:s,bumpMap:s,bumpScale:.008,roughness:.44,clearcoat:.45,clearcoatRoughness:.32}),o=a.clone();o.color.setHex(12946997);let c=a.clone();c.color.setHex(4744027),c.roughness=.48;let l=new Jn({color:6051140,roughness:.75}),u=new _n({color:16766859,toneMapped:!1}),h=new cr({color:1654074,roughness:.19,clearcoat:1,clearcoatRoughness:.13}),p=new Kn(1,32,24);function d(C,A,M,I=[1,1,1],U=n){let O=new xt(C,A);return O.position.set(...M),O.scale.set(...I),O.castShadow=!0,O.receiveShadow=!0,U.add(O),O}function g(C,A,M,I,U=n){return d(new Io(...C,5,A),M,I,[1,1,1],U)}function v(C,A,M,I,U="z",O=n){let G=d(new Bn(C,C,A,32),M,I,[1,1,1],O);return U==="z"&&(G.rotation.x=Math.PI/2),U==="x"&&(G.rotation.z=Math.PI/2),G}g([.49,.46,.37],.16,a,[0,.65,0]),v(.21,.07,o,[0,.9,0],"y"),v(.12,.09,l,[0,.94,0],"y");let m=g([1.02,.77,.65],.22,a,[0,1.32,0]);m.name="head";let f=new Kn(1,48,32),S=f.attributes.position;for(let C=0;C<S.count;C++){let A=S.getX(C),M=S.getY(C),I=S.getZ(C);S.setXYZ(C,Math.sign(A)*Math.abs(A)**.68*.43,Math.sign(M)*Math.abs(M)**.68*.29,I*.23)}f.computeVertexNormals();let y=d(f,h,[0,1.32,.315]);y.name="convex-screen";let x=(C,A)=>.315+.23*Math.sqrt(Math.max(0,1-Math.abs(C/.43)**(2/.68)-Math.abs(A/.29)**(2/.68)));for(let C of[-.15,.15]){let A=d(new Qn(.023,.06,6,12),u,[C,1.35,x(C,.03)+.006]);A.name="eye",A.castShadow=!1}let b=[];for(let C=0;C<=20;C++){let A=-.075+C*.0075,M=-.065-.038*Math.sin(C/20*Math.PI);b.push(new P(A,1.32+M,x(A,M)+.008))}d(new rs(new sr(b),24,.009,8,!1),u,[0,0,0]).castShadow=!1;for(let C of[-1,1]){let A=new Dt;A.position.set(C*.31,1.69,0),A.rotation.z=-C*.25,n.add(A),d(new Qn(.095,.19,8,16),a,[0,.12,0],[1,1,1],A),d(new Qn(.094,.09,8,16),o,[0,.2,0],[1,1,1],A),v(.098,.035,c,[0,.11,0],"y",A),v(.16,.065,c,[C*.505,1.31,0],"x"),v(.124,.08,o,[C*.54,1.31,0],"x")}v(.17,.026,o,[0,1.31,-.326]),v(.147,.032,a,[0,1.31,-.343]),d(p,u,[0,1.38,-.368],[.026,.026,.014]).castShadow=!1;for(let C of[-.084,.084])d(p,l,[C,1.27,-.365],[.014,.014,.009]);g([.14,.17,.04],.04,c,[0,.69,.189]),v(.047,.025,o,[0,.69,.22]);let T=[],D=[];for(let C of[-1,1]){let A=new Dt;A.position.set(C*.28,.8,0),A.rotation.z=C*.22,n.add(A),T.push(A),d(p,l,[0,0,0],[.095,.095,.095],A),d(new Qn(.084,.11,6,16),a,[C*.035,-.14,.01],[1,1,1],A),d(p,o,[C*.045,-.27,.035],[.093,.11,.085],A);let M=new Dt;M.position.set(C*.15,.34,0),n.add(M),D.push(M),d(p,l,[0,0,0],[.075,.1,.075],M),g([.23,.22,.29],.08,a,[0,-.2,.035],M),g([.24,.065,.3],.025,o,[0,-.31,.035],M)}return n.userData.animateWalk=(C,A=!1)=>{let M=Math.sin(C)*(A?.42:.22);D[0].rotation.x=M,D[1].rotation.x=-M,T[0].rotation.x=-M,T[1].rotation.x=M,A?(D[0].position.y=.34+Math.max(0,Math.cos(C))*.1,D[1].position.y=.34+Math.max(0,-Math.cos(C))*.1):D[0].position.y=D[1].position.y=.34},n}var sf=Et(()=>{Lt();nf()});var Tx={};function Mx(n){try{let h=function(){s.fov=l?68:s.aspect<1?52:38,s.clearViewOffset(),l&&s.setViewOffset(e.clientWidth,e.clientHeight,0,-e.clientHeight*.15,e.clientWidth,e.clientHeight),s.updateProjectionMatrix()},p=function(){l=!0,$("minimap").setAttribute("aria-pressed","false"),$("minimap").querySelector(".minimap-hint").textContent="Double-click: overview",c.enabled=!1,u=U.rotation.y,h(),$("reset").setAttribute("aria-pressed","true"),$("top").setAttribute("aria-pressed","false"),document.querySelector(".scene-label span").textContent="Following the agent"},d=function(){l=!1,$("minimap").setAttribute("aria-pressed","true"),$("minimap").querySelector(".minimap-hint").textContent="Double-click: follow",c.enabled=!0,c.minDistance=16,c.maxDistance=48,s.position.set(21,24,26),c.target.set(0,0,0),h(),c.update(),$("reset").setAttribute("aria-pressed","false"),$("top").setAttribute("aria-pressed","true"),document.querySelector(".scene-label span").textContent="Full field"},f=function(J){return m.has(J)||m.set(J,new Jn({color:J,roughness:.88,flatShading:!0})),m.get(J)},y=function(J,be,ee,oe,Ye,Ze=1,w=1,_=1,N=i){let z=new xt(J,f(be));return z.position.set(ee,oe,Ye),z.scale.set(Ze,w,_),z.castShadow=!0,z.receiveShadow=!0,N.add(z),z},A=function(J){let be=JSON.stringify(J);if(be!==C){C=be;for(let ee of b.children)ee.traverse(oe=>{oe.isMesh&&(oe.geometry!==S&&oe.geometry.dispose(),oe.material.transparent&&oe.material.dispose())});b.clear(),T.length=0;for(let ee=0;ee<16;ee++)for(let oe=0;oe<16;oe++){let Ye=J[ee][oe],Ze=oe-7.5,w=ee-7.5,_=(ee*73+oe*31)%17/17,N=Ye===13?13088908:Ye===3?6134952:D[(ee*3+oe)%4];if(y(S,N,Ze,Ye===3?-.17:-.1,w,.985,Ye===3?.22:.36,.985,b),y(S,6773832,Ze,-.58,w,.99,.6,.99,b),Ye===5){let z=new Dt;b.add(z),T.push(z),y(new Bn(.1,.16,1,6),7033403,Ze,.53,w,1,1,1,z);let Q=new nr(.62,1.25,6);y(Q,2641726,Ze,1.1,w,1,1+_*.35,1,z),y(Q,4090192,Ze,1.65+_*.2,w,.78,.84,.78,z),y(Q,5669733,Ze,2.08+_*.2,w,.5,.58,.5,z);for(let X of z.children)X.material=X.material.clone(),X.material.transparent=!0}else if(Ye===4)y(new Wr(.58,0),10133393,Ze,.34,w,1,.8+_*.6,.9,b).rotation.set(.1,_*3,.2);else if(Ye===2&&_>.74)for(let z=0;z<3;z++)y(new nr(.035,.17,3),10266478,Ze-.24+z*.13,.15,w+.25,1,1,1,b);else Ye===3&&y(S,10207939,Ze-.14,0,w,.4,.015,.035,b)}b.traverse(ee=>ee.layers.enable(1))}},Se=function(J,be=!1){n=J,Fe=n.frames.length-1;let ee=n.frames[Fe];G.position.set(n.target[1]-7.5,.15,n.target[0]-7.5),Z.position.set(n.target[1]-7.5,.62,n.target[0]-7.5),A(ee.map),K.copy(U.position),de.set(ee.position[1]-7.5,.1,ee.position[0]-7.5),k=be?0:1,be||U.position.copy(de),Pe.position.set(G.position.x,4.1,G.position.z),U.rotation.y=Be[ee.direction]??0,Y.clear();for(let oe=0;oe<=Fe;oe++){let Ye=n.frames[oe].position;y(ie,10278866,Ye[1]-7.5,.105,Ye[0]-7.5,1,1,1,Y)}Y.traverse(oe=>oe.layers.enable(1)),ue.geometry.dispose(),ue.geometry=new vt().setFromPoints(n.frames.map(oe=>new P(oe.position[1]-7.5,3.8,oe.position[0]-7.5))),$("minimap").setAttribute("aria-label",`Map: agent row ${ee.position[0]}, column ${ee.position[1]}; goal row ${n.target[0]}, column ${n.target[1]}; facing ${{1:"left",2:"right",3:"down",4:"up"}[ee.direction]||"unknown"}. Double-click to change view.`)},e=$("scene"),t=new wo({canvas:e,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Ca,t.toneMapping=Na,t.toneMappingExposure=1.25;let i=new Zn;i.fog=new kr(12704996,35,105);let r=new xt(new Kn(120,32,16),new Mt({side:yt,depthWrite:!1,vertexShader:"varying vec3 vPosition; void main(){vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vPosition; void main(){float h=normalize(vPosition).y;vec3 horizon=vec3(.76,.88,.91);vec3 zenith=vec3(.22,.53,.78);gl_FragColor=vec4(mix(horizon,zenith,smoothstep(-.06,.8,h)),1.);}"}));i.add(r);let s=new Rt(38,1,.1,150),o=new URLSearchParams(location.search).get("style")==="toon"?new kh(t):null;o&&(o.addPass(new Hh(i,s)),o.addPass(new Gh(s,...Jh())));let c=new Ro(s,e);c.enableDamping=!0,c.enablePan=!1,c.maxDistance=48,c.maxPolarAngle=Math.PI*.49;let l=!0,u=0;i.add(new os(14808812,6778966,2.1));let g=new ur(16769195,3.2);g.position.set(-9,19,7),g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:.1,far:65}),g.shadow.bias=-5e-4,g.shadow.normalBias=.035,i.add(g);let v=new ur(9354709,.8);v.position.set(12,8,-10),i.add(v);let m=new Map,S=new An(1,1,1),x=new es(1,1);for(let J=0;J<16;J++){let be=J*Math.PI/8,ee=38+J%3*9;for(let oe=0;oe<5;oe++){let Ye=y(x,16118759,Math.cos(be)*ee+oe*1.6,10+J%4*2+Math.sin(oe)*.6,Math.sin(be)*ee,3,1.1+oe%2*.5,1.8);Ye.castShadow=!1,Ye.receiveShadow=!1}}let b=new Dt;i.add(b);let T=[],D=[6652251,7113056,7375970,6454358],C="";A(n.frames[0].map);let M=y(S,4147772,0,-.97,0,16.15,.18,16.15);M.castShadow=!0;let I=new xt(new yi(240,240),new Mt({transparent:!0,depthWrite:!1,vertexShader:`varying vec3 worldPosition;
 void main(){vec4 world=modelMatrix*vec4(position,1.0);worldPosition=world.xyz;gl_Position=projectionMatrix*viewMatrix*world;}`,fragmentShader:`varying vec3 worldPosition;
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
 }`}));I.rotation.x=-Math.PI/2,I.position.y=.078,i.add(I);let U=rf();i.add(U);let O=y(new lr(.4,.035,6,40),16768912,0,.12,0);O.rotation.x=-Math.PI/2,O.castShadow=!1;let G=y(new lr(.34,.045,8,40),14002661,n.target[1]-7.5,.15,n.target[0]-7.5);G.rotation.x=-Math.PI/2;let Z=y(new ts(.18),14661097,n.target[1]-7.5,.62,n.target[0]-7.5),Y=new Dt;i.add(Y);let ie=new Bn(.085,.085,.025,12),W=new Ai(-8.6,8.6,8.6,-8.6,.1,60);W.position.set(0,30,0),W.up.set(0,0,-1),W.lookAt(0,0,0),W.layers.set(1);for(let J of[b,M,U,O,G,Z,Y])J.traverse(be=>be.layers.enable(1));i.traverse(J=>{J.isLight&&J.layers.enable(1)});let ce=new Dt;i.add(ce);let ve=new ar().moveTo(0,-.72).lineTo(.46,.4).lineTo(-.46,.4).closePath(),q=new is(ve);for(let[J,be,ee]of[[1522738,1.35,999],[16766851,1,1e3]]){let oe=new xt(q,new _n({color:J,depthTest:!1,depthWrite:!1}));oe.rotation.x=-Math.PI/2,oe.scale.setScalar(be),oe.layers.set(1),oe.renderOrder=ee,ce.add(oe)}let ue=new Hr(new vt,new tr({color:10092528,depthTest:!1,depthWrite:!1}));ue.layers.set(1),ue.renderOrder=998,i.add(ue);let Pe=new Dt;i.add(Pe);for(let[J,be,ee]of[[2692399,.26,.64],[16726973,.34,.56]]){let oe=new xt(new ns(be,ee,40),new _n({color:J,depthTest:!1,depthWrite:!1,toneMapped:!1,fog:!1}));oe.rotation.x=-Math.PI/2,oe.layers.set(1),oe.renderOrder=999,Pe.add(oe)}let Fe=0,Le=0,k=1,K=new P,de=new P,Be={1:-Math.PI/2,2:Math.PI/2,3:Math.PI,4:0};$("reset").onclick=p,$("top").onclick=d;let Xe=()=>l?d():p();e.addEventListener("dblclick",Xe),$("minimap").addEventListener("dblclick",Xe),$("minimap").addEventListener("click",J=>{J.detail===0&&Xe()}),e.addEventListener("keydown",J=>{if(l)return;let be=s.position.clone().sub(c.target);if(J.key==="ArrowLeft"||J.key==="ArrowRight")be.applyAxisAngle(new P(0,1,0),J.key==="ArrowLeft"?.15:-.15);else if(J.key==="ArrowUp"||J.key==="ArrowDown")be.y=Math.max(2,be.y+(J.key==="ArrowUp"?2:-2));else if(J.key==="+"||J.key==="=")be.multiplyScalar(.9);else if(J.key==="-")be.multiplyScalar(1.1);else return;J.preventDefault(),be.clampLength(c.minDistance,c.maxDistance),s.position.copy(c.target).add(be),c.update()});let _t=matchMedia("(prefers-reduced-motion: reduce)").matches;new ResizeObserver(()=>{let{width:J,height:be}=e.getBoundingClientRect();t.setSize(J,be,!1),o?.setSize(J,be),s.aspect=J/be,h(),$("operator-bubble").dataset.expanded="false"}).observe(e),Se(n),p();let R=new P,Je=new P,Oe=new ls,Re=new P;return t.setAnimationLoop(J=>{let be=Math.min((J-Le)/1e3,.1);if(Le=J,k=Math.min(1,k+be*2.7),U.position.lerpVectors(K,de,k*k*(3-2*k)),k<1&&!_t&&(U.position.y+=Math.sin(k*Math.PI)*.14),U.userData.animateWalk(k<1&&!_t&&K.distanceToSquared(de)>.01?k*Math.PI*2:0),O.position.set(U.position.x,.12,U.position.z),l){let z=Math.atan2(Math.sin(U.rotation.y-u),Math.cos(U.rotation.y-u));u+=z*(_t?1:1-Math.exp(-be*8));let Q=$h(U.position.x,U.position.z,u);s.position.fromArray(Q.eye),c.target.fromArray(Q.target),s.lookAt(c.target),R.copy(U.position),R.y=1.1}for(let z of T)for(let Q of z.children)Q.material.opacity=1,Q.material.depthWrite=!0;if(l)for(let[z,Q]of[[0,1.4],[-.4,1.4],[.4,1.4],[0,.65]]){R.copy(U.position),R.y=Q,R.x+=z*Math.cos(U.rotation.y),R.z-=z*Math.sin(U.rotation.y),Re.subVectors(R,s.position),Oe.far=Re.length(),Oe.set(s.position,Re.normalize());for(let X of Oe.intersectObjects(T,!0))for(let _e of X.object.parent.children)_e.material.opacity=.16,_e.material.depthWrite=!1}l||c.update(),r.position.copy(s.position),o?o.render():t.render(i,s);let ee=$("minimap"),oe=ee.clientWidth,Ye=ee.offsetLeft+ee.clientLeft,Ze=e.clientHeight-ee.offsetTop-ee.clientTop-ee.clientHeight;ce.position.copy(U.position),ce.position.y=4,ce.rotation.y=U.rotation.y;for(let z of T)for(let Q of z.children)Q.material.opacity=1,Q.material.depthWrite=!0;let w=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1,t.setScissorTest(!0),t.setScissor(Ye,Ze,oe,oe),t.setViewport(Ye,Ze,oe,oe),t.setClearColor(11059889,1),t.clearDepth(),t.render(i,W),t.setClearColor(0,0),t.shadowMap.autoUpdate=w,t.setScissorTest(!1),t.setViewport(0,0,e.clientWidth,e.clientHeight);let _=$("agent-bubble"),N=$("operator-bubble");!N.hidden&&N.dataset.expanded!=="true"&&$("operator-bubble-text").scrollHeight>$("operator-bubble-text").clientHeight+1&&(N.dataset.expanded="true");for(let z of["agent","operator"]){let Q=$(`${z}-bubble-text`);$(`${z}-scroll-hint`).hidden=Q.scrollHeight<=Q.clientHeight}if(!_.hidden){Je.copy(U.position),Je.y+=2,Je.project(s),_.dataset.onscreen=String(Je.z>-1&&Je.z<1&&Math.abs(Je.x)<1&&Math.abs(Je.y)<1);let z=e.clientWidth,Q=e.clientHeight,X=document.querySelector(".world-controls"),_e=N.hidden?null:{left:N.offsetLeft,top:N.offsetTop,right:N.offsetLeft+N.offsetWidth,bottom:N.offsetTop+N.offsetHeight},le=ef({x:(Je.x+1)*z/2,y:(1-Je.y)*Q/2},{width:z,height:Q,topInset:Math.max(72,X.offsetTop+X.offsetHeight+12)},{width:_.offsetWidth,height:_.offsetHeight},_e);_.style.transform=`translate3d(${Math.round(le.left)}px,${Math.round(le.top)}px,0)`,_.style.setProperty("--tail-x",`${le.tail}px`)}}),J=>Se(J,!_t)}catch(e){$("error").hidden=!1,$("error").textContent="Could not open the 3D scene. Use a browser with WebGL support. "+e.message,console.error(e)}}function No(n){$("error").hidden=!1,$("error").textContent=n.message||String(n)}function Es(){let n=St?.episode?.pending,e=["running","paused"].includes(St?.state)&&n?.awaiting_human?n.question_id:null;e!==Ss&&(Ss=e,$("message").value="");let t=St?.state==="running"&&!!e&&xr==="human"&&!St?.answer_submitted&&!Bo&&!yr;$("message").disabled=!t,$("send").disabled=!t,$("message").placeholder=St?.state==="paused"?"Game paused":t?"Reply to the agent\u2026":xr==="ai"?"AI is replying\u2026":"Wait for a question\u2026",$("operator-toggle").disabled=yr||!St||St.state==="error",$("reply-state").textContent=Bo?"Sending reply\u2026":yr?"Switching operator\u2026":St?.state==="error"?"Cannot connect to the server":St?.state==="done"?"Game finished":St?.state==="paused"?"Resume the game to reply":St?.state==="idle"?"Start the game first":St?.answer_submitted?"Reply sent":t?"The agent is waiting for your reply":xr==="ai"?"AI is replying":"The agent is exploring"}function lf(n,e){if(!n||e<Ms)return;xr=n,Ms=e;let t=$("operator-toggle");t.dataset.operator=n,t.querySelector(".operator-option").textContent=n==="ai"?"AI":"Human",t.setAttribute("aria-pressed",String(n==="ai")),t.setAttribute("aria-label",n==="ai"?"Operator: AI. Switch to human":"Operator: human. Switch to AI")}async function cf(n,e){let t=await Sc(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),i=await t.json();if(!t.ok)throw Error(i.error||"Could not complete the action. Try again.");return i}function uf(){_s="",$("agent-bubble-text").getAnimations().forEach(n=>n.cancel()),$("agent-bubble").hidden=!0,$("operator-bubble").hidden=!0,document.querySelector(".world").classList.remove("has-operator")}function Sx(n){let e=n.pending||n.frames.at(-2);if(!e){uf();return}let t=e.action==="ASK_OPERATOR",i=$("agent-bubble");i.hidden=!1,i.dataset.kind=t?"question":"action",$("agent-bubble-label").textContent=t?"The agent asks":"";let r=e.question?.trim()&&e.question.trim()!=="_OPERATOR"?e.question.trim():"",s=$("agent-bubble-text");s.textContent=t?r||"Asking for directions\u2026":e.action.replace(/^MOVE_/,"").toUpperCase(),s.lang=t&&!r?"ru":"en",s.tabIndex=t?0:-1;let a=`${n.turns+ +!!n.pending}:${e.action}`;if(t)s.getAnimations().forEach(l=>l.cancel()),_s="";else if(a!==_s){s.getAnimations().forEach(u=>u.cancel()),_s=a;let l=matchMedia("(prefers-reduced-motion: reduce)").matches;s.animate(l?[{opacity:0},{opacity:1,offset:.15},{opacity:1,offset:.7},{opacity:0}]:[{opacity:0,transform:"translateY(14px) scale(.8)"},{opacity:1,transform:"translateY(-4px) scale(1.08)",offset:.2},{opacity:1,transform:"translateY(-12px) scale(1)",offset:.65},{opacity:0,transform:"translateY(-38px) scale(1)"}],{duration:1200,easing:"ease-out",fill:"forwards"})}let o=n.frames.findLast(l=>l.answer),c=n.pending?.action==="ASK_OPERATOR"?"":o?.answer;$("operator-bubble-text").textContent!==(c||"")&&($("operator-bubble").dataset.expanded="false"),$("operator-bubble").hidden=!c,$("operator-bubble-text").textContent=c||"",document.querySelector(".world").classList.toggle("has-operator",!!c)}async function Sc(n,e){try{return await fetch(n,e)}catch{throw Error("Cannot connect to the game server. Start the local server and try again.")}}function hf(){uf(),$("message").value="",Ss=null,_s="",Ac="",Lo=null,Mc.clear(),$("dialogue").replaceChildren(),$("empty-dialogue").hidden=!1,$("dialogue-turn").textContent="",$("turn-count").textContent=`0 / ${$("run-progress").max}`,$("question-count").textContent="0",$("run-progress").value=0,$("error").hidden=!0,$("result").hidden=!0,of?.(gc)}function wx(n){Lo=n,$("turn-count").textContent=`${n.turns} / ${n.max_steps}`,$("question-count").textContent=n.questions+ +(n.pending?.action==="ASK_OPERATOR"),$("run-progress").max=n.max_steps,$("run-progress").value=n.turns,of?.(n),Sx(n);let e=n.frames.filter(s=>s.question);n.pending?.action==="ASK_OPERATOR"&&e.push(n.pending),$("empty-dialogue").hidden=e.length>0;let t=$("dialogue"),i=$("chat-history"),r=i.scrollHeight-i.scrollTop-i.clientHeight<48;for(let[s,a]of e.entries()){let o=a.question_id||String(s),c=a.answer_operator||n.operator;for(let[l,u,h]of[["Agent",a.question,"agent"],[c==="human"?"Human":"AI",a.answer,"operator"]]){if(!u)continue;let p=`${o}:${h}`;if(!Mc.has(p)){let d=document.createElement("div");d.className=`message ${h}`;let g=document.createElement("div");g.className="speaker",g.textContent=l;let v=document.createElement("p");v.textContent=u,d.append(g,v),t.append(d),Mc.set(p,d)}}}r&&(i.scrollTop=i.scrollHeight)}function af(n){(n.demo||document.documentElement?.dataset?.demo==="true")&&queueMicrotask(()=>{for(let r of["run-model","operator-toggle","reset-game"]){let s=$(r);s.disabled=!0,s.title="Shared live demo \u2014 AI controls the game. Manual controls are temporarily unavailable.",s.setAttribute("aria-describedby","demo-hint")}$("demo-hint").hidden=!1}),n.run_id&&St?.run_id&&n.run_id!==St.run_id&&hf(),St=n,lf(n.operator,n.operator_revision??Ms),Es();let e=n.episode?.pending?.recommendation_error;if(xr==="ai"&&e&&No(Error(e)),n.model&&($("agent-name").textContent=n.model==="zerohero-craftax-qwen3-13m-strong-ppo-horizon30"?"ZeroHero \xB7 13M PPO":n.model),n.operator){let r=n.operator==="human"?"You \xB7 operator":n.operator==="flashnext"?"Qwen Flash":n.operator;$("operator-name").textContent=r,$("operator-bubble-label").textContent=r}let t=n.state==="running";Pi.disabled=As,$("reset-game").disabled=As,Pi.hidden=!1,Pi.dataset.running=String(t);let i=t?"Pause game":n.state==="paused"?"Resume game":n.state==="idle"?"Start game":"Start a new game";if(Pi.setAttribute("aria-label",i),Pi.title=i,$("run-label").textContent=t?"Pause":n.state==="paused"?"Resume":n.state==="idle"?"Start game":"New game",n.state==="idle"){$("turn-count").textContent=`0 / ${n.max_steps}`,$("run-progress").max=n.max_steps,$("model-status").textContent="Ready to start",$("world-status").textContent="World ready";return}if(n.episode){let r=`${n.run_id}:${n.steps}:${JSON.stringify(n.episode.pending)}`;r!==Ac&&(wx(n.episode),Ac=r)}if(t){$("model-status").textContent=n.episode?.pending?`Playing \xB7 turn ${n.steps+1}`:n.steps?`Playing \xB7 turn ${n.steps}`:"Loading the model\u2026";let r=(Lo?.pending||Lo?.frames.at(-2))?.action;$("world-status").textContent=r?Ex[r]||`Turn ${n.steps}`:"Preparing the model and operator",$("dialogue-hint").textContent="The operator\u2019s reply will appear here when the agent asks for directions."}else if(n.state==="paused")$("model-status").textContent="Game paused",$("world-status").textContent="Game paused";else if(n.state==="done"){let r=!!n.episode?.success;$("model-status").textContent=r?"Goal reached":"Turn limit reached",$("world-status").textContent=r?"Goal reached":"Turn limit reached",$("result").dataset.success=String(r),$("result").hidden=!1,$("result-title").textContent=r?"The agent found the goal":"The agent did not reach the goal",$("result-note").textContent=r?"The agent reached the hidden goal. You can start a new game.":"No turns left. You can start a new game.",$("dialogue-hint").textContent="The agent did not ask the operator for help in this game."}else n.state==="error"&&($("model-status").textContent="Run interrupted",$("world-status").textContent="Game stopped",$("error").hidden=!1,$("error").textContent=n.error)}async function _r(){clearTimeout(Uo);try{let n=await Sc("/api/status",{cache:"no-store",signal:AbortSignal.timeout(1e4)});if(!n.ok)throw Error("Game server unavailable. Start the local server and refresh this page.");let e=await n.json();af(e)}catch(n){af({state:"error",error:n.message||"Cannot connect to the server. Check your connection and try again."})}finally{clearTimeout(Uo),Uo=setTimeout(_r,500)}}async function ff(n){if(!(As||!St)){clearTimeout(Uo),As=!0,Pi.disabled=!0,$("reset-game").disabled=!0,$("error").hidden=!0;try{let e=await Sc(`/api/${n}`,{method:"POST"});if(e.status===409){await _r();return}if(!e.ok)throw Error((await e.json()).error||"Could not start the game. Try again.");(n==="run"||n==="reset")&&hf()}catch(e){No(e)}finally{As=!1,await _r()}}}var $,of,Pi,Ac,Lo,Uo,_s,xr,Ms,St,Bo,yr,Ss,As,Mc,Ex,df=Et(()=>{Lc();Lt();Lh();Bh();Po();jh();tf();sf();$=n=>document.getElementById(n);Uc(document.querySelector(".layout"),$("chat-divider"),$("chat-resize"));of=Mx(gc),Pi=$("run-model"),Ac="",Lo=null,Uo=null,_s="",xr="ai",Ms=0,St=null,Bo=!1,yr=!1,Ss=null,As=!1,Mc=new Map;$("operator-toggle").onclick=async()=>{if(!(yr||!St)){yr=!0,Es();try{let n=await cf("/api/operator",{operator:xr==="human"?"ai":"human",operator_revision:Ms});lf(n.operator,n.operator_revision),$("error").hidden=!0}catch(n){No(n)}finally{yr=!1,Es(),await _r()}}};$("reply").onsubmit=async n=>{if(n.preventDefault(),$("send").disabled||!$("message").value.trim())return;let e=$("message").value,t=Ss,i=Ms;Bo=!0,Es();try{await cf("/api/answer",{question_id:t,text:e,operator_revision:i}),Ss===t&&($("message").value="",St.answer_submitted=!0),$("error").hidden=!0}catch(r){No(r)}finally{Bo=!1,Es(),await _r()}};Ex={LEFT:"Moving left",RIGHT:"Moving right",UP:"Moving up",DOWN:"Moving down",MOVE_LEFT:"Moving left",MOVE_RIGHT:"Moving right",MOVE_UP:"Moving up",MOVE_DOWN:"Moving down",ASK_OPERATOR:"Asking the operator",NOOP:"Waiting"};Pi.onclick=()=>ff(St?.state==="running"?"pause":St?.state==="paused"?"resume":"run");$("reset-game").onclick=()=>ff("reset");_r()});function Dc(n){let e=n.match(/\baction\s*:\s*(.+)$/im);if(!e)return null;let t=e[1].trim().split(/[\n|<]/,1)[0].trim(),i=t.split(/\s+/);if(i.length>=2&&i.every(s=>s.length===1)&&/^[a-z_]+$/i.test(i.join("")))return i.join("").toUpperCase();let r=t.replace(/\s+/g," ").trim();return r?/^[a-z_]+$/i.test(r)?r.toUpperCase():r:null}function Pc(n){let e=Dc(n);if(e!==null)return e;let t=[...n.matchAll(/<question>\s*([^<]*?)\s*<\/question>/gis)].map(i=>i[1].replace(/\s+/g," ").trim()).filter(Boolean);for(let i of[...n.matchAll(/<action>\s*([^<]*?)\s*<\/action>/gis)].reverse()){let r=Dc("action: "+i[1].replace(/\s+/g," ").trim());if(r)return r==="ASK_OPERATOR"&&t.length?"ask "+t.at(-1):r}if(t.length){let i=t.at(-1);return/^ask\b/i.test(i)?i:"ask "+i}return null}var zo=n=>JSON.stringify(n),bs=class{constructor(e){this.data=e,this.reset()}reset(){return this.values=[...this.data.initial],this.facts=new Map(this.data.facts.map(e=>[zo(e),e])),this.moves=0,this.location="",this.observation=this.derive("intro",{}),this.observation}matches(e,t=this.values){return e.every(([i,r])=>t[i]===r)}applicable(){let e=new Set;return this.data.operators.filter(t=>e.has(t.name)||!this.matches(t.requires)?!1:(e.add(t.name),!0))}commands(){return[...new Set(this.applicable().map(e=>e.command))].sort()}get won(){return this.matches(this.data.goal)}setFact(e){if(!e)return;let t=[e[0].startsWith("not_")?e[0].slice(4):"not_"+e[0],e[1]];this.facts.delete(zo(t)),this.facts.set(zo(e),e)}step(e){let t=this.applicable().find(s=>s.command===e);if(!t)return this.observation="Nothing happens.",this.observation;let i=[...this.values];for(let[s,a,o]of t.effects)this.matches(s,i)&&(this.values[a]=o);let r=[...new Set(this.data.variables.map(s=>s.layer).filter(s=>s>=0))].sort((s,a)=>s-a);for(let s of r){this.data.variables.forEach((c,l)=>{c.layer===s&&(this.values[l]=this.data.initial[l])});let a=!0,o=0;for(;a;){if(a=!1,++o>this.data.variables.length)throw Error("Non-convergent task axioms");for(let[c,l,u]of this.data.axioms)this.data.variables[l].layer===s&&this.matches(c)&&this.values[l]!==u&&(this.values[l]=u,a=!0)}}this.values.forEach((s,a)=>{s!==i[a]&&this.setFact(this.data.variables[a].values[s])});for(let[s,a,o]of t.effects)this.matches(s,i)&&this.setFact(this.data.variables[a].values[o]);return this.moves++,e.startsWith("go to ")&&(this.location=e.slice(6)),this.observation=this.expand(t.feedback,t.variables),this.observation}query(e,t={}){if(!e)return[t];let i=[...e.matchAll(/([a-z_]+)\(([^)]*)\)/gi)];if(!i.length)throw Error("Unsupported grammar condition: "+e);let r=[t];for(let[,s,a]of i){let o=a.split(",").map(l=>l.trim().split(":")[0]),c=[];for(let l of r)for(let[u,h]of[...this.facts.values()].sort((p,d)=>{let g=v=>v[1].map(m=>this.data.entities[m]?.id||m).join("\0");return g(p)<g(d)?-1:g(p)>g(d)?1:0})){if(u!==s||h.length!==o.length)continue;let p={...l},d=!0;for(let g=0;g<o.length;g++){let v=o[g];if(p[v]!==void 0&&p[v]!==h[g]){d=!1;break}p[v]=h[g]}d&&c.push(p)}r=c}return r}evaluate(e,t){return e.includes(" or ")?e.split(" or ").map(i=>this.evaluate(i,t)).find(Boolean)||"":e.trim().split(/\s*\+\s*/).map(i=>{let r=i.match(/^(['"])(.*?)\1$/s);if(r)return r[2];let s=i.match(/^(\w+)\.(name|id|indefinite|definite)$/);if(!s||!this.data.entities[t[s[1]]])throw Error("Unsupported grammar expression: "+i);return this.data.entities[t[s[1]]][s[2]]}).join("")}derive(e,t){let i=this.data.grammar[e];if(!i)throw Error("Missing grammar rule "+e);let r=i.find(s=>this.query(s.condition,t).length);if(!r)throw Error("No applicable grammar rule "+e);return this.expand(r.rhs,t)}expand(e,t){let i=r=>{switch(r[0]){case"text":return r[1];case"rule":return this.derive(r[1],t);case"eval":return this.evaluate(r[1],t);case"query":return this.query(r[2],t).map(s=>this.expand([r[1]],s)).join("");case"list":{let s=r[1],a=s[0]==="query"?this.query(s[2],t).map(o=>this.expand([s[1]],o)):[this.expand([s],t)];return a.length?a.length===1?a[0]:a.slice(0,-1).join(this.derive("list_separator",t))+this.derive("list_last_separator",t)+a.at(-1):this.derive("list_empty",t)}default:throw Error("Unsupported grammar symbol "+r[0])}};return e.map(i).join("")}scene(){let e={},t={},i="",r=a=>e[a]??={id:a,type:a.replace(/ \d+$/,""),properties:{}};for(let[a,o]of this.facts.values())if(a==="atlocation")i=o.at(-1);else if(a==="receptacleatlocation")t[o[0]]=o[1],r(o[0]).properties.receptacle=!0;else if(a==="objecttype")r(o[0]);else if(a==="inreceptacle"||a==="inreceptacleobject")r(o[0]).properties.parentReceptacles=[o[1]];else if(a==="holds")Object.assign(r(o.at(-1)).properties,{isPickedUp:!0,parentReceptacles:[]});else if(o.length===1){let c={opened:"isOpen",openable:"openable",pickupable:"pickupable",isclean:"isClean",ishot:"isHot",iscool:"isCool",ison:"isToggled",toggleable:"toggleable",issliced:"isSliced"}[a];c&&(r(o[0]).properties[c]=!0)}for(let a of Object.values(e)){let o=a.properties;o.openable&&(o.isOpen??=!1),o.ObjectTemperature=o.isCool?"Cold":o.isHot?"Hot":"RoomTemp"}let s=Object.keys(t).filter(a=>t[a]===i).sort();return{agent:{location:s.includes(this.location)?this.location:s[0]||"",nearby:s},objects:Object.values(e).sort((a,o)=>a.id.localeCompare(o.id))}}prompt(e=[],t=[]){let i=s=>s.replace(/Your task is to:\s*[^\n]*/gi,"Your task is to: "+this.data.request),r=["Request: "+this.data.request,`Observation:
`+i(this.observation)];return e.length&&r.push(`Conversation:
`+e.map(([s,a])=>`Agent: ${s}
Operator: ${a}`).join(`
`)),t.length&&r.push(`Recent actions:
`+t.slice(-6).map(([s,a])=>s+`
`+i(a)).join(`
`)),r.push(`Admissible physical commands:
`+this.commands().map(s=>"- "+s).join(`
`),"Questions remaining: "+Math.max(0,8-e.length)),r.join(`

`).trim()+`

Next action:
`}};var Cs=class{constructor(e){this.worlds=e,this.index=-1,this.reset()}reset(){this.index=(this.index+1)%this.worlds.length,this.world=this.worlds[this.index],this.position=[...this.world.start],this.direction=this.world.direction,this.dialogue=[],this.turns=0,this.pickTarget()}pickTarget(){let e=new Set([this.position.join(",")]),t=[[...this.position]];for(let[r,s]of t)for(let a of["LEFT","RIGHT","UP","DOWN"]){let o=this.world.transitions[`${r},${s},${a}`]?.[0];o&&!e.has(o.join(","))&&(e.add(o.join(",")),t.push(o))}let i=t.filter(r=>r.join(",")!==this.position.join(","));this.target=[...i[Math.floor(Math.random()*i.length)]]}step(e){let[t,i]=this.position,r=this.world.transitions[`${t},${i},${e}`];if(!r)throw Error("Unsupported navigation action");let s={LEFT:[0,-1],RIGHT:[0,1],UP:[-1,0],DOWN:[1,0]}[e],[a,o,c,l]=this.world.bounds,u=!s||t+s[0]<a||t+s[0]>=c||i+s[1]<o||i+s[1]>=l;this.position=[...r[0]],u||(this.direction=r[1]),this.turns++}get won(){return this.position.join(",")===this.target.join(",")}prompt(){let e=this.world.observations[`${this.position.join(",")},${this.direction}`];if(!e)throw Error("Position outside prepared navigation arena");let t=this.dialogue.slice(-2).map(([i,r])=>`Agent asked: ${i}
Operator answered: ${r}`).join(`
`)||"none";return`<|user|>
Goal: ${this.world.goal}

${e}

Message history:
${t}
<|assistant|>
`}operatorContext(e){let t=[[...this.position]],i=new Set([this.position.join(",")]),r=new Map;for(let o of t){if(o.join(",")===this.target.join(","))break;for(let c of["LEFT","RIGHT","UP","DOWN"]){let l=this.world.transitions[`${o.join(",")},${c}`]?.[0];l&&!i.has(l.join(","))&&(i.add(l.join(",")),r.set(l.join(","),[o,c]),t.push(l))}}let s=[],a=this.target;for(;r.has(a.join(","));){let[o,c]=r.get(a.join(","));s.unshift({from:o,to:a,action:c}),a=o}return{question:e,position:this.position,target:this.target,map:this.world.map,route:s,observation:this.prompt(),conversation:this.dialogue}}};var Rs=n=>structuredClone(n),ko=n=>new Promise(e=>setTimeout(e,n));function Ic(n){let e=window.fetch.bind(window),t=new URL("./",location.href),i=n==="alfworld"?"alfworld":"craftax",r,s,a="idle",o="",c=0,l="ai",u=0,h=0,p,d=0,g,v=[],m=[],f=[],S=[],y=null,x="",b="",T=!1,D=Promise.all([e(new URL(`data/${i}.json`,t)).then(q=>{if(!q.ok)throw Error("Environment data unavailable");return q.json()}),e(new URL("site-config.json",t)).then(q=>q.json())]).then(([q,ue])=>{s=ue;try{s.operatorURL=localStorage.getItem("zerohero-operator-url")||ue.operatorURL}catch{}r=n==="alfworld"?new bs(q):new Cs(q)}),C=()=>n==="alfworld"?{episode_id:o,renderer:"three-textworld",step:h,scene:"ALFWorld kitchen",...r.scene(),dialogue:v.flatMap(([q,ue])=>[{role:"agent",text:q},{role:"operator",text:ue}]),trace:Rs(f),pending:Rs(y),request:r.data.request,action:x,finished:a==="done",success:r.won,model:"ZeroHero \xB7 5M \xB7 browser"}:null,A=()=>({position:[...r.position],direction:r.direction,map:r.world.map,action:"READY",question:"",answer:"",reasoning:""});function M(){let q={state:a,run_id:o,operator:l,operator_revision:c,answer_submitted:T,max_steps:n==="alfworld"?60:100,error:b||void 0};return n==="alfworld"?{...q,snapshot:o?C():null}:{...q,model:"ZeroHero \xB7 13M \xB7 browser",steps:h,episode:o?{seed:r.world.seed,target:r.target,turns:h,questions:v.length,success:r.won,frames:[...Rs(S),A()],pending:Rs(y),operator:l,max_steps:100}:null}}function I(){u++,p?.terminate(),p=null,g?.reject(Error("Episode reset")),g=null}function U(q){p??=new Worker(new URL("model-worker.js",t),{type:"module"});let ue=++d;return new Promise((Pe,Fe)=>{let Le=p,k=K=>{K.data.id===ue&&(Le.removeEventListener("message",k),K.data.error?Fe(Error(K.data.error)):Pe(K.data))};Le.addEventListener("message",k),Le.addEventListener("error",K=>Fe(Error(K.message)),{once:!0}),Le.postMessage({id:ue,model:i,prompt:q,maxNew:n==="alfworld"?96:256,base:t.href})})}let O=q=>q===u&&a!=="done"&&a!=="idle";async function G(q){for(;O(q)&&a==="paused";)await ko(80);return O(q)}async function Z(q,ue,Pe,Fe,Le=0){if(!s.operatorURL){b="Connect the language-model operator in Settings, or switch to Human.";return}try{let k=n==="alfworld"?{question:q,intent:r.data.intent,objects:r.scene().objects,conversation:v}:r.operatorContext(q),K=await e(s.operatorURL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({world:n,context:k}),signal:AbortSignal.timeout(9e4)}),de=await K.json();if(!K.ok)throw Error(de.error||"Operator unavailable");if(!O(Pe)||y?.question_id!==ue)return;if(typeof de.answer!="string"||!de.answer.trim())throw Error("Operator returned an empty answer");y.recommendation=de.answer.trim(),y.recommendation_state="ready",l==="ai"&&c===Fe&&a==="running"&&Y({question_id:ue,text:de.answer,operator_revision:c},"ai")}catch(k){O(Pe)&&y?.question_id===ue&&(y.recommendation_state="error",b=k.message,Le<3&&(await ko([3e3,7e3,15e3][Le]),O(Pe)&&l==="ai"&&c===Fe&&y?.question_id===ue&&!T&&(y.recommendation_state="loading",b="",Z(q,ue,Pe,Fe,Le+1))))}}function Y(q,ue){if(a!=="running"||!y||T||q.question_id!==y.question_id||q.operator_revision!==c||l!==ue||typeof q.text!="string"||!q.text.trim()||q.text.length>4e3)throw Error("Question closed, paused, or operator changed");return T=!0,g.resolve(q.text.trim()),M()}async function ie(q,ue,Pe){let Fe=`${o}:${h}`;T=!1,y={awaiting_human:!0,question_id:Fe,question:q,recommendation_state:"loading",...n==="craftax"?{...Pe,action:"ASK_OPERATOR",question_id:Fe,question:q,answer:""}:{}},n==="alfworld"&&(f.at(-1).action="ask "+q);let Le=new Promise((K,de)=>{g={resolve:K,reject:de}});l==="ai"&&Z(q,Fe,ue,c);let k=await Le;if(await G(ue))return v.push([q,k]),n==="craftax"&&(r.dialogue=v),n==="alfworld"?f.at(-1).answer=k:Object.assign(Pe,{question:q,answer:k,action:"ASK_OPERATOR",answer_operator:l}),y=null,g=null,T=!1,b="",k}function W(q){return n==="alfworld"?(q.match(/<action>\s*([\s\S]*?)\s*<\/action>/i)?.[1]||q.match(/action:\s*([^\n]+)/i)?.[1]||"").trim().toLowerCase():Pc(q)||"NOOP"}async function ce(q){try{for(;O(q)&&h<(n==="alfworld"?60:100);){if(!await G(q))return;let ue=await U(n==="alfworld"?r.prompt(v,m):r.prompt());if(!await G(q))return;x=W(ue.text),n==="craftax"&&x==="ASK_OPERATOR"&&(x="ask Please give me directions to the hidden goal."),h++;let Pe=n==="craftax"?{...A(),action:x,reasoning:ue.text,question_id:`${o}:${h}`}:null;if(n==="alfworld"&&f.push({observation:r.observation,after:"",action:x,response:ue.text}),x.toLowerCase().startsWith("ask ")&&(n==="craftax"||v.length<8))await ie(x.slice(4).trim(),q,Pe);else if(n==="alfworld")if(r.commands().includes(x)){let Fe=r.step(x);m.push([x,Fe]),f.at(-1).after=Fe}else f.at(-1).result=x.startsWith("ask ")?"budget_exhausted":"inadmissible";else{let Fe=x.toUpperCase().replace(/^MOVE_/,"");r.step(["LEFT","RIGHT","UP","DOWN","NOOP"].includes(Fe)?Fe:"NOOP")}if(!O(q))return;if(Pe&&S.push(Pe),r.won||n==="alfworld"&&r.moves>=50){a="done";return}await ko(900)}O(q)&&(a="done")}catch(ue){q===u&&(b=ue.message,a="error")}}async function ve(q,ue){if(q==="run"||q==="reset"){if(q==="run"&&a==="running")return new Response(JSON.stringify({error:"Game already running"}),{status:409});I(),r.reset(),o=crypto.randomUUID(),a="running",h=0,v=[],m=[],S=[],y=null,x="",b="",T=!1,f=n==="alfworld"?[{observation:r.observation,after:"",action:""}]:[],ce(u)}else if(q==="pause")a==="running"&&(a="paused");else if(q==="resume")a==="paused"&&(a="running",l==="ai"&&y?.recommendation_state==="ready"&&!T&&Y({question_id:y.question_id,text:y.recommendation,operator_revision:c},"ai"));else if(q==="operator"){if(ue.operator_revision!==c||!["ai","human"].includes(ue.operator))throw Error("Operator changed; try again");l=ue.operator,c++,b="",y&&!T&&l==="ai"&&(y.recommendation_state==="ready"&&a==="running"?Y({question_id:y.question_id,text:y.recommendation,operator_revision:c},"ai"):Z(y.question,y.question_id,u,c))}else{if(q==="answer")return Y(ue,"human");throw Error("Unsupported local command")}return M()}window.fetch=async(q,ue={})=>{let Pe=new URL(q instanceof URL?q.href:typeof q=="string"?q:q.url,location.href);if(Pe.origin===location.origin&&Pe.pathname.startsWith("/api/")){await D;let Le=Pe.pathname.split("/").at(-1);try{let k=Le==="status"?M():await ve(Le,ue.body?JSON.parse(ue.body):{});return k instanceof Response?k:Response.json(k)}catch(k){return Response.json({error:k.message},{status:409})}}return Pe.origin===location.origin&&Pe.pathname==="/alfred-initial.json"?e(new URL("alfred-initial.json",t),ue):e(q,ue)},window.addEventListener("zerohero-operator-config",q=>{s.operatorURL=q.detail,b="",y&&l==="ai"&&!T&&Z(y.question,y.question_id,u,c)})}Ic("craftax");Promise.resolve().then(()=>df());
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

postprocessing/build/index.js:
  (**
   * postprocessing v6.37.8 build Fri Sep 12 2025
   * https://github.com/pmndrs/postprocessing
   * Copyright 2015-2025 Raoul van Rüschen
   * @license Zlib
   *)
*/
