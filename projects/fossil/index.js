var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=c(o(((e,t)=>{(function(n,r){typeof e==`object`?t.exports=r():typeof define==`function`&&define.amd?define(r):n.Alea=r()})(e,function(){return e.importState=function(t){var n=new e;return n.importState(t),n},e;function e(){return function(e){var n=0,r=0,i=0,a=1;e.length==0&&(e=[+new Date]);var o=t();n=o(` `),r=o(` `),i=o(` `);for(var s=0;s<e.length;s++)n-=o(e[s]),n<0&&(n+=1),r-=o(e[s]),r<0&&(r+=1),i-=o(e[s]),i<0&&(i+=1);o=null;var c=function(){var e=2091639*n+a*23283064365386963e-26;return n=r,r=i,i=e-(a=e|0)};return c.next=c,c.uint32=function(){return c()*4294967296},c.fract53=function(){return c()+(c()*2097152|0)*11102230246251565e-32},c.version=`Alea 0.9`,c.args=e,c.exportState=function(){return[n,r,i,a]},c.importState=function(e){n=+e[0]||0,r=+e[1]||0,i=+e[2]||0,a=+e[3]||0},c}(Array.prototype.slice.call(arguments))}function t(){var e=4022871197,t=function(t){t=t.toString();for(var n=0;n<t.length;n++){e+=t.charCodeAt(n);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26};return t.version=`Mash 0.9`,t}})}))(),1),u=Math.sqrt(3),d=Math.sqrt(5),f=.5*(u-1),p=(3-u)/6;(d-1)/4,(5-d)/20;var m=e=>Math.floor(e)|0,h=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function g(e=Math.random){let t=_(e),n=new Float64Array(t).map(e=>h[e%12*2]),r=new Float64Array(t).map(e=>h[e%12*2+1]);return function(e,i){let a=0,o=0,s=0,c=(e+i)*f,l=m(e+c),u=m(i+c),d=(l+u)*p,h=l-d,g=u-d,_=e-h,v=i-g,y,b;_>v?(y=1,b=0):(y=0,b=1);let x=_-y+p,S=v-b+p,C=_-1+2*p,w=v-1+2*p,T=l&255,E=u&255,D=.5-_*_-v*v;if(D>=0){let e=T+t[E],i=n[e],o=r[e];D*=D,a=D*D*(i*_+o*v)}let O=.5-x*x-S*S;if(O>=0){let e=T+y+t[E+b],i=n[e],a=r[e];O*=O,o=O*O*(i*x+a*S)}let k=.5-C*C-w*w;if(k>=0){let e=T+1+t[E+1],i=n[e],a=r[e];k*=k,s=k*k*(i*C+a*w)}return 70*(a+o+s)}}function _(e){let t=new Uint8Array(512);for(let e=0;e<256;e++)t[e]=e;for(let n=0;n<255;n++){let r=n+~~(e()*(256-n)),i=t[n];t[n]=t[r],t[r]=i}for(let e=256;e<512;e++)t[e]=t[e-256];return t}var v=class e{static#e=0;static#t;static initialSeed;static captureState(){return Object.freeze({sequenceSeed:e.#e,initialSeed:e.initialSeed,noise:e.#t})}static withState(t,n){let r=e.captureState(),i=t=>{e.#e=t.sequenceSeed,e.initialSeed=t.initialSeed,e.#t=t.noise};i(t);try{return n()}finally{i(r)}}static setSeed(t){t=Math.round(t),e.#e=t,e.initialSeed=t,console.log(t),e.#t=g((0,l.default)(t))}static noise1d(t){return e.#t(t,0)}static random(t=void 0){let n=e.#n();return t?t.at(n):n}static range(t=0,n=1,r=void 0){return t+e.random(r)*(n-t)}static range11(){return e.range(-1,1)}static trueFalse(t=.5){return e.range(0,1)>1-t}static spread(t=1,n=0){return e.range(-t,t)+n}static rangeInt(t,n,r=void 0){return Math.round(e.range(t,n,r))}static shuffle(t){for(let n=t.length-1;n>0;n--){let r=Math.floor(e.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}static toMax(t){return e.range(0,t)}static#n(){e.#e=e.#e+2654435769|0;let t=e.#e;return t^=t>>>16,t=Math.imul(t,569420461),t^=t>>>15,t=Math.imul(t,1935289751),t^=t>>>15,(t>>>0)/4294967296}},y=1e3,b=1001,x=1002,S=1003,C=1004,w=1005,T=1006,E=1007,D=1008,O=1009,k=1010,A=1011,j=1012,ee=1013,te=1014,M=1015,ne=1016,re=1017,ie=1018,ae=1020,oe=35902,se=35899,N=1021,ce=1022,le=1023,P=1026,ue=1027,de=1028,fe=1029,pe=1030,me=1031,he=1033,ge=33776,_e=33777,ve=33778,ye=33779,be=35840,xe=35841,Se=35842,Ce=35843,we=36196,Te=37492,Ee=37496,De=37488,Oe=37489,ke=37490,Ae=37491,je=37808,Me=37809,Ne=37810,F=37811,Pe=37812,Fe=37813,Ie=37814,I=37815,Le=37816,L=37817,R=37818,Re=37819,ze=37820,Be=37821,Ve=36492,He=36494,Ue=36495,We=36283,Ge=36284,Ke=36285,qe=36286,Je=2300,Ye=2301,Xe=2302,Ze=2303,Qe=2400,$e=2401,et=2402,tt=3200,nt=`srgb`,rt=`srgb-linear`,it=`linear`,at=`srgb`,ot=7680,st=35044,ct=35048,lt=2e3;function ut(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function dt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ft(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function pt(){let e=ft(`canvas`);return e.style.display=`block`,e}var mt={};function ht(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function gt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=gt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=gt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function _t(...e){let t=e.join(` `);t in mt||(mt[t]=!0,z(...e))}function vt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var yt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},bt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},xt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),St=1234567,Ct=Math.PI/180,wt=180/Math.PI;function Tt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xt[e&255]+xt[e>>8&255]+xt[e>>16&255]+xt[e>>24&255]+`-`+xt[t&255]+xt[t>>8&255]+`-`+xt[t>>16&15|64]+xt[t>>24&255]+`-`+xt[n&63|128]+xt[n>>8&255]+`-`+xt[n>>16&255]+xt[n>>24&255]+xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function Et(e,t){return(e%t+t)%t}function Dt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Ot(e,t,n){return e===t?0:(n-e)/(t-e)}function kt(e,t,n){return(1-n)*e+n*t}function At(e,t,n,r){return kt(e,t,1-Math.exp(-n*r))}function jt(e,t=1){return t-Math.abs(Et(e,t*2)-t)}function Mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Nt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Pt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ft(e,t){return e+Math.random()*(t-e)}function It(e){return e*(.5-Math.random())}function Lt(e){e!==void 0&&(St=e);let t=St+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rt(e){return e*Ct}function zt(e){return e*wt}function Bt(e){return!(e&e-1)&&e!==0}function Vt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ht(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ut(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Gt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var H={DEG2RAD:Ct,RAD2DEG:wt,generateUUID:Tt,clamp:V,euclideanModulo:Et,mapLinear:Dt,inverseLerp:Ot,lerp:kt,damp:At,pingpong:jt,smoothstep:Mt,smootherstep:Nt,randInt:Pt,randFloat:Ft,randFloatSpread:It,seededRandom:Lt,degToRad:Rt,radToDeg:zt,isPowerOfTwo:Bt,ceilPowerOfTwo:Vt,floorPowerOfTwo:Ht,setQuaternionFromProperEuler:Ut,normalize:Gt,denormalize:Wt},U=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qt.copy(this).projectOnVector(e),this.sub(qt)}reflect(e){return this.sub(qt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qt=new W,Jt=new Kt,G=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return _t(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Yt.makeScale(e,t)),this}rotate(e){return _t(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Yt.makeRotation(-e)),this}translate(e,t){return _t(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Yt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yt=new G,Xt=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zt=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qt(){let e={enabled:!0,workingColorSpace:rt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=$t(e.r),e.g=$t(e.g),e.b=$t(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=en(e.r),e.g=en(e.g),e.b=en(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?it:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return _t(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return _t(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[rt]:{primaries:t,whitePoint:r,transfer:it,toXYZ:Xt,fromXYZ:Zt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:t,whitePoint:r,transfer:at,toXYZ:Xt,fromXYZ:Zt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}}),e}var K=Qt();function $t(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function en(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var tn,nn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{tn===void 0&&(tn=ft(`canvas`)),tn.width=e.width,tn.height=e.height;let t=tn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=tn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ft(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=$t(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor($t(t[e]/255)*255):t[e]=$t(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},rn=0,an=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rn++}),this.uuid=Tt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(on(r[t].image)):e.push(on(r[t]))}else e=on(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function on(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?nn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var sn=0,cn=new W,ln=class e extends bt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=b,i=b,a=T,o=D,s=le,c=O,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sn++}),this.uuid=Tt(),this.name=``,this.source=new an(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cn).x}get height(){return this.source.getSize(cn).y}get depth(){return this.source.getSize(cn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case y:e.x-=Math.floor(e.x);break;case b:e.x=e.x<0?0:1;break;case x:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case y:e.y-=Math.floor(e.y);break;case b:e.y=e.y<0?0:1;break;case x:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null,ln.DEFAULT_MAPPING=300,ln.DEFAULT_ANISOTROPY=1;var un=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dn=class extends bt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:T,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t),this.textures=[];let r=new ln({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:T,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new an(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},fn=class extends dn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pn=class extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=S,this.minFilter=S,this.wrapR=b,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},mn=class extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=S,this.minFilter=S,this.wrapR=b,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/gn.setFromMatrixColumn(e,0).length(),i=1/gn.setFromMatrixColumn(e,1).length(),a=1/gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vn,e,yn)}lookAt(e,t,n){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),bn.crossVectors(n,Sn),bn.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),bn.crossVectors(n,Sn)),bn.normalize(),xn.crossVectors(Sn,bn),r[0]=bn.x,r[4]=xn.x,r[8]=Sn.x,r[1]=bn.y,r[5]=xn.y,r[9]=Sn.y,r[2]=bn.z,r[6]=xn.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],te=r[3],M=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=gn.set(r[0],r[1],r[2]).length(),o=gn.set(r[4],r[5],r[6]).length(),s=gn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),_n.copy(this);let c=1/a,l=1/o,u=1/s;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=l,_n.elements[5]*=l,_n.elements[6]*=l,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=lt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=lt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gn=new W,_n=new hn,vn=new W(0,0,0),yn=new W(1,1,1),bn=new W,xn=new W,Sn=new W,Cn=new hn,wn=new Kt,Tn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wn.setFromEuler(this),this.setFromQuaternion(wn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER=`XYZ`;var En=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Dn=0,On=new W,kn=new Kt,An=new hn,jn=new W,Mn=new W,Nn=new W,Pn=new Kt,Fn=new W(1,0,0),In=new W(0,1,0),Ln=new W(0,0,1),Rn={type:`added`},zn={type:`removed`},Bn={type:`childadded`,child:null},Vn={type:`childremoved`,child:null},Hn=class e extends bt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dn++}),this.uuid=Tt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new Tn,r=new Kt,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new hn},normalMatrix:{value:new G}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new En,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.multiply(kn),this}rotateOnWorldAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.premultiply(kn),this}rotateX(e){return this.rotateOnAxis(Fn,e)}rotateY(e){return this.rotateOnAxis(In,e)}rotateZ(e){return this.rotateOnAxis(Ln,e)}translateOnAxis(e,t){return On.copy(e).applyQuaternion(this.quaternion),this.position.add(On.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fn,e)}translateY(e){return this.translateOnAxis(In,e)}translateZ(e){return this.translateOnAxis(Ln,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jn.copy(e):jn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Mn,jn,this.up):An.lookAt(jn,Mn,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),kn.setFromRotationMatrix(An),this.quaternion.premultiply(kn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rn),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zn),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rn),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,e,Nn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,Pn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Hn.DEFAULT_UP=new W(0,1,0),Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=class extends Hn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Wn={type:`move`},Gn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Jn={h:0,s:0,l:0};function Yn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,K.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=K.workingColorSpace){return this.r=e,this.g=t,this.b=n,K.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=K.workingColorSpace){if(e=Et(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Yn(i,r,e+1/3),this.g=Yn(i,r,e),this.b=Yn(i,r,e-1/3)}return K.colorSpaceToWorking(this,r),this}setStyle(e,t=nt){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=Kn[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$t(e.r),this.g=$t(e.g),this.b=$t(e.b),this}copyLinearToSRGB(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return K.workingToColorSpace(Xn.copy(this),e),Math.round(V(Xn.r*255,0,255))*65536+Math.round(V(Xn.g*255,0,255))*256+Math.round(V(Xn.b*255,0,255))}getHexString(e=nt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=K.workingColorSpace){K.workingToColorSpace(Xn.copy(this),t);let n=Xn.r,r=Xn.g,i=Xn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=K.workingColorSpace){return K.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=nt){K.workingToColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,r=Xn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Jn);let n=kt(qn.h,Jn.h,t),r=kt(qn.s,Jn.s,t),i=kt(qn.l,Jn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new q;q.NAMES=Kn;var Zn=class extends Hn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new W,$n=new W,er=new W,tr=new W,nr=new W,rr=new W,ir=new W,ar=new W,or=new W,sr=new W,cr=new un,lr=new un,ur=new un,dr=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qn.subVectors(e,t),r.cross(Qn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Qn.subVectors(r,t),$n.subVectors(n,t),er.subVectors(e,t);let a=Qn.dot(Qn),o=Qn.dot($n),s=Qn.dot(er),c=$n.dot($n),l=$n.dot(er),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tr)!==null&&tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,tr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,tr.x),s.addScaledVector(a,tr.y),s.addScaledVector(o,tr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return cr.setScalar(0),lr.setScalar(0),ur.setScalar(0),cr.fromBufferAttribute(e,t),lr.fromBufferAttribute(e,n),ur.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(cr,i.x),a.addScaledVector(lr,i.y),a.addScaledVector(ur,i.z),a}static isFrontFacing(e,t,n,r){return Qn.subVectors(n,t),$n.subVectors(e,t),Qn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Qn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;nr.subVectors(r,n),rr.subVectors(i,n),ar.subVectors(e,n);let s=nr.dot(ar),c=rr.dot(ar);if(s<=0&&c<=0)return t.copy(n);or.subVectors(e,r);let l=nr.dot(or),u=rr.dot(or);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(nr,a);sr.subVectors(e,i);let f=nr.dot(sr),p=rr.dot(sr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(rr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ir.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ir,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(nr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fr=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,mr):mr.fromBufferAttribute(r,t),mr.applyMatrix4(e.matrixWorld),this.expandByPoint(mr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mr),mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),Cr.subVectors(this.max,Sr),gr.subVectors(e.a,Sr),_r.subVectors(e.b,Sr),vr.subVectors(e.c,Sr),yr.subVectors(_r,gr),br.subVectors(vr,_r),xr.subVectors(gr,vr);let t=[0,-yr.z,yr.y,0,-br.z,br.y,0,-xr.z,xr.y,yr.z,0,-yr.x,br.z,0,-br.x,xr.z,0,-xr.x,-yr.y,yr.x,0,-br.y,br.x,0,-xr.y,xr.x,0];return!Er(t,gr,_r,vr,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,gr,_r,vr,Cr))?!1:(wr.crossVectors(yr,br),t=[wr.x,wr.y,wr.z],Er(t,gr,_r,vr,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pr=[new W,new W,new W,new W,new W,new W,new W,new W],mr=new W,hr=new fr,gr=new W,_r=new W,vr=new W,yr=new W,br=new W,xr=new W,Sr=new W,Cr=new W,wr=new W,Tr=new W;function Er(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Tr.fromArray(e,a);let o=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),s=t.dot(Tr),c=n.dot(Tr),l=r.dot(Tr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Dr=new W,Or=new U,kr=0,J=class extends bt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=st,this.updateRanges=[],this.gpuType=M,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix4(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyNormalMatrix(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.transformDirection(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Ar=class extends J{constructor(e,t,n){super(new Uint16Array(e),t,n)}},jr=class extends J{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Mr=class extends J{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nr=new fr,Pr=new W,Fr=new W,Ir=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Nr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Pr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Fr)),this.expandByPoint(Pr.copy(e.center).sub(Fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lr=0,Rr=new hn,zr=new Hn,Br=new W,Vr=new fr,Hr=new fr,Ur=new W,Wr=class e extends bt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lr++}),this.uuid=Tt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ut(e)?jr:Ar)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rr.makeRotationFromQuaternion(e),this.applyMatrix4(Rr),this}rotateX(e){return Rr.makeRotationX(e),this.applyMatrix4(Rr),this}rotateY(e){return Rr.makeRotationY(e),this.applyMatrix4(Rr),this}rotateZ(e){return Rr.makeRotationZ(e),this.applyMatrix4(Rr),this}translate(e,t,n){return Rr.makeTranslation(e,t,n),this.applyMatrix4(Rr),this}scale(e,t,n){return Rr.makeScale(e,t,n),this.applyMatrix4(Rr),this}lookAt(e){return zr.lookAt(e),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Mr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Vr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ur.addVectors(this.boundingBox.min,Vr.min),this.boundingBox.expandByPoint(Ur),Ur.addVectors(this.boundingBox.max,Vr.max),this.boundingBox.expandByPoint(Ur)):(this.boundingBox.expandByPoint(Vr.min),this.boundingBox.expandByPoint(Vr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Vr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Hr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ur.addVectors(Vr.min,Hr.min),Vr.expandByPoint(Ur),Ur.addVectors(Vr.max,Hr.max),Vr.expandByPoint(Ur)):(Vr.expandByPoint(Hr.min),Vr.expandByPoint(Hr.max))}Vr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ur.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ur));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ur.fromBufferAttribute(a,t),o&&(Br.fromBufferAttribute(e,t),Ur.add(Br)),r=Math.max(r,n.distanceToSquared(Ur))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new J(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new U,f=new U,p=new U,m=new W,h=new W;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new W,y=new W,b=new W,x=new W;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new J(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ur.fromBufferAttribute(e,t),Ur.normalize(),e.setXYZ(t,Ur.x,Ur.y,Ur.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new J(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Gr=0,Kr=class extends bt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gr++}),this.uuid=Tt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ot,this.stencilZFail=ot,this.stencilZPass=ot,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},qr=new W,Jr=new W,Yr=new W,Xr=new W,Zr=new W,Qr=new W,$r=new W,ei=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qr.copy(this.origin).addScaledVector(this.direction,t),qr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jr.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Jr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Xr.dot(this.direction),s=-Xr.dot(Yr),c=Xr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Jr).addScaledVector(Yr,d),f}intersectSphere(e,t){qr.subVectors(e.center,this.origin);let n=qr.dot(this.direction),r=qr.dot(qr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qr)!==null}intersectTriangle(e,t,n,r,i){Zr.subVectors(t,e),Qr.subVectors(n,e),$r.crossVectors(Zr,Qr);let a=this.direction.dot($r),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xr.subVectors(this.origin,e);let s=o*this.direction.dot(Qr.crossVectors(Xr,Qr));if(s<0)return null;let c=o*this.direction.dot(Zr.cross(Xr));if(c<0||s+c>a)return null;let l=-o*Xr.dot($r);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ti=class extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ni=new hn,ri=new ei,ii=new Ir,ai=new W,oi=new W,si=new W,ci=new W,li=new W,ui=new W,di=new W,fi=new W,pi=class extends Hn{constructor(e=new Wr,t=new ti){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ui.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(li.fromBufferAttribute(s,e),a?ui.addScaledVector(li,r):ui.addScaledVector(li.sub(t),r))}t.add(ui)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ii.copy(n.boundingSphere),ii.applyMatrix4(i),ri.copy(e.ray).recast(e.near),!(ii.containsPoint(ri.origin)===!1&&(ri.intersectSphere(ii,ai)===null||ri.origin.distanceToSquared(ai)>(e.far-e.near)**2))&&(ni.copy(i).invert(),ri.copy(e.ray).applyMatrix4(ni),(n.boundingBox===null||ri.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=hi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=hi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=hi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=hi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function mi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;fi.copy(s),fi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(fi);return l<n.near||l>n.far?null:{distance:l,point:fi.clone(),object:e}}function hi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,oi),e.getVertexPosition(c,si),e.getVertexPosition(l,ci);let u=mi(e,t,n,r,oi,si,ci,di);if(u){let e=new W;dr.getBarycoord(di,oi,si,ci,e),i&&(u.uv=dr.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=dr.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=dr.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};dr.getNormal(oi,si,ci,t.normal),u.face=t,u.barycoord=e}return u}var gi=class extends ln{constructor(e=null,t=1,n=1,r,i,a,o,s,c=S,l=S,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_i=class extends J{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vi=new hn,yi=new hn,bi=[],xi=new fr,Si=new hn,Ci=new pi,wi=new Ir,Ti=class extends pi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Si)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),xi.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(xi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),wi.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(wi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ci.geometry=this.geometry,Ci.material=this.material,Ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wi.copy(this.boundingSphere),wi.applyMatrix4(n),e.ray.intersectsSphere(wi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,vi),yi.multiplyMatrices(n,vi),Ci.matrixWorld=yi,Ci.raycast(e,bi);for(let e=0,n=bi.length;e<n;e++){let n=bi[e];n.instanceId=i,n.object=this,t.push(n)}bi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new gi(new Float32Array(r*this.count),r,this.count,de,M));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ei=new W,Di=new W,Oi=new G,ki=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ei.subVectors(n,t).cross(Di.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ei),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Oi.getNormalMatrix(e),r=this.coplanarPoint(Ei).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new Ir,ji=new U(.5,.5),Mi=new W,Ni=class{constructor(e=new ki,t=new ki,n=new ki,r=new ki,i=new ki,a=new ki){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=lt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476+ji.distanceTo(e.center),Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Mi.x=r.normal.x>0?e.max.x:e.min.x,Mi.y=r.normal.y>0?e.max.y:e.min.y,Mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Pi=class extends Kr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fi=new hn,Ii=new ei,Li=new Ir,Ri=new W,zi=class extends Hn{constructor(e=new Wr,t=new Pi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere),Li.applyMatrix4(r),Li.radius+=i,e.ray.intersectsSphere(Li)===!1)return;Fi.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Fi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ri.fromBufferAttribute(l,n),Bi(Ri,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ri.fromBufferAttribute(l,a),Bi(Ri,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Bi(e,t,n,r,i,a,o){let s=Ii.distanceSqToPoint(e);if(s<n){let n=new W;Ii.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Vi=class extends ln{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hi=class extends ln{constructor(e,t,n=te,r,i,a,o=S,s=S,c,l=P,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new an(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ui=class extends Hi{constructor(e,t=te,n=301,r,i,a=S,o=S,s,c=P){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wi=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gi=class e extends Wr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Mr(c,3)),this.setAttribute(`normal`,new Mr(l,3)),this.setAttribute(`uv`,new Mr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ki=class e extends Wr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Mr(u,3)),this.setAttribute(`normal`,new Mr(d,3)),this.setAttribute(`uv`,new Mr(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){z(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new U:new W);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new W,r=[],i=[],a=[],o=new W,s=new hn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new W)}i[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(V(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(V(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ji=class extends qi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new U){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yi=class extends Ji{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Xi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Zi=new W,Qi=new W,$i=new Xi,ea=new Xi,ta=new Xi,na=class extends qi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Qi.subVectors(r[0],r[1]).add(r[0]),c=Qi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Zi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Zi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),$i.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ea.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ta.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&($i.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ea.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ta.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set($i.calc(s),ea.calc(s),ta.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ra(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ia(e,t){let n=1-e;return n*n*t}function aa(e,t){return 2*(1-e)*e*t}function oa(e,t){return e*e*t}function sa(e,t,n,r){return ia(e,t)+aa(e,n)+oa(e,r)}function ca(e,t){let n=1-e;return n*n*n*t}function la(e,t){let n=1-e;return 3*n*n*e*t}function ua(e,t){return 3*(1-e)*e*e*t}function da(e,t){return e*e*e*t}function fa(e,t,n,r,i){return ca(e,t)+la(e,n)+ua(e,r)+da(e,i)}var pa=class extends qi{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(fa(e,r.x,i.x,a.x,o.x),fa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ma=class extends qi{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(fa(e,r.x,i.x,a.x,o.x),fa(e,r.y,i.y,a.y,o.y),fa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends qi{constructor(e=new U,t=new U){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends qi{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends qi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(sa(e,r.x,i.x,a.x),sa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends qi{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(sa(e,r.x,i.x,a.x),sa(e,r.y,i.y,a.y),sa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new U){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ra(o,s.x,c.x,l.x,u.x),ra(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this}},ba=Object.freeze({__proto__:null,ArcCurve:Yi,CatmullRomCurve3:na,CubicBezierCurve:pa,CubicBezierCurve3:ma,EllipseCurve:Ji,LineCurve:ha,LineCurve3:ga,QuadraticBezierCurve:_a,QuadraticBezierCurve3:va,SplineCurve:ya}),xa=class extends qi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ba[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ba[n.type]().fromJSON(n))}return this}},Sa=class extends xa{constructor(e){super(),this.type=`Path`,this.currentPoint=new U,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ha(this.currentPoint.clone(),new U(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new _a(this.currentPoint.clone(),new U(e,t),new U(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new pa(this.currentPoint.clone(),new U(e,t),new U(n,r),new U(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ya([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ji(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ca=class e extends Wr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Mr(p,3)),this.setAttribute(`normal`,new Mr(m,3)),this.setAttribute(`uv`,new Mr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},wa=class e extends Wr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new U;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Mr(s,3)),this.setAttribute(`normal`,new Mr(c,3)),this.setAttribute(`uv`,new Mr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ta=class extends Kr{constructor(e){super(),this.isShadowMaterial=!0,this.type=`ShadowMaterial`,this.color=new q(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ea(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Oa(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Oa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Da(e){let t={};for(let n=0;n<e.length;n++){let r=Ea(e[n]);for(let e in r)t[e]=r[e]}return t}function Oa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ka(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Aa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:K.workingColorSpace}var ja={clone:Ea,merge:Da},Ma=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Na=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pa=class extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ma,this.fragmentShader=Na,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=ka(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new un().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new hn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fa=class extends Pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ia=class extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},La=class extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=tt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ra=class extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function za(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Ba=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Va=class extends Ba{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qe,endingEnd:Qe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case $e:i=e,o=2*t-n;break;case et:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case $e:a=e,s=2*n-t;break;case et:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ha=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ua=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wa=class extends Ba{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Ga=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Je:t=this.InterpolantFactoryMethodDiscrete;break;case Ye:t=this.InterpolantFactoryMethodLinear;break;case Xe:t=this.InterpolantFactoryMethodSmooth;break;case Ze:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Je;case this.InterpolantFactoryMethodLinear:return Ye;case this.InterpolantFactoryMethodSmooth:return Xe;case this.InterpolantFactoryMethodBezier:return Ze}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&dt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Xe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ga.prototype.ValueTypeName=``,Ga.prototype.TimeBufferType=Float32Array,Ga.prototype.ValueBufferType=Float32Array,Ga.prototype.DefaultInterpolation=Ye;var Ka=class extends Ga{constructor(e,t,n){super(e,t,n)}};Ka.prototype.ValueTypeName=`bool`,Ka.prototype.ValueBufferType=Array,Ka.prototype.DefaultInterpolation=Je,Ka.prototype.InterpolantFactoryMethodLinear=void 0,Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}};qa.prototype.ValueTypeName=`color`;var Ja=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}};Ja.prototype.ValueTypeName=`number`;var Ya=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Xa=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}};Xa.prototype.ValueTypeName=`quaternion`,Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Ga{constructor(e,t,n){super(e,t,n)}};Za.prototype.ValueTypeName=`string`,Za.prototype.ValueBufferType=Array,Za.prototype.DefaultInterpolation=Je,Za.prototype.InterpolantFactoryMethodLinear=void 0,Za.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}};Qa.prototype.ValueTypeName=`vector`;var $a=class extends Hn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},eo=new hn,to=new W,no=new W,ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=O,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;to.setFromMatrixPosition(e.matrixWorld),t.position.copy(to),no.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(no),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},io=new W,ao=new Kt,oo=new W,so=class extends Hn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=lt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(io,ao,oo),oo.x===1&&oo.y===1&&oo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,ao,oo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(io,ao,oo),oo.x===1&&oo.y===1&&oo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,ao,oo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},co=new W,lo=new U,uo=new U,fo=class extends so{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wt*2*Math.atan(Math.tan(Ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){co.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(co.x,co.y).multiplyScalar(-e/co.z),co.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(co.x,co.y).multiplyScalar(-e/co.z)}getViewSize(e,t){return this.getViewBounds(e,lo,uo),t.subVectors(uo,lo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},po=class extends ro{constructor(){super(new fo(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=wt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},mo=class extends $a{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new po}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ho=class extends so{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},go=class extends $a{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},_o=-90,vo=1,yo=class extends Hn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new fo(_o,vo,e,t);r.layers=this.layers,this.add(r);let i=new fo(_o,vo,e,t);i.layers=this.layers,this.add(i);let a=new fo(_o,vo,e,t);a.layers=this.layers,this.add(a);let o=new fo(_o,vo,e,t);o.layers=this.layers,this.add(o);let s=new fo(_o,vo,e,t);s.layers=this.layers,this.add(s);let c=new fo(_o,vo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},bo=class extends fo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xo=`\\[\\]\\.:\\/`,So=RegExp(`[\\[\\]\\.:\\/]`,`g`),Co=`[^\\[\\]\\.:\\/]`,wo=`[^`+xo.replace(`\\.`,``)+`]`,To=`((?:WC+[\\/:])*)`.replace(`WC`,Co),Eo=`(WCOD+)?`.replace(`WCOD`,wo),Do=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Co),Oo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Co),ko=RegExp(`^`+To+Eo+Do+Oo+`$`),Ao=[`material`,`materials`,`bones`,`map`],jo=class{constructor(e,t,n){let r=n||Mo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(So,``)}static parseTrackName(e){let t=ko.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ao.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mo.Composite=jo,Mo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Mo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Mo.prototype.GetterByBindingType=[Mo.prototype._getValue_direct,Mo.prototype._getValue_array,Mo.prototype._getValue_arrayElement,Mo.prototype._getValue_toArray],Mo.prototype.SetterByBindingTypeAndVersioning=[[Mo.prototype._setValue_direct,Mo.prototype._setValue_direct_setNeedsUpdate,Mo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mo.prototype._setValue_array,Mo.prototype._setValue_array_setNeedsUpdate,Mo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mo.prototype._setValue_arrayElement,Mo.prototype._setValue_arrayElement_setNeedsUpdate,Mo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mo.prototype._setValue_fromArray,Mo.prototype._setValue_fromArray_setNeedsUpdate,Mo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function No(e,t,n,r){let i=Po(r);switch(n){case N:return e*t;case de:return e*t/i.components*i.byteLength;case fe:return e*t/i.components*i.byteLength;case pe:return e*t*2/i.components*i.byteLength;case me:return e*t*2/i.components*i.byteLength;case ce:return e*t*3/i.components*i.byteLength;case le:return e*t*4/i.components*i.byteLength;case he:return e*t*4/i.components*i.byteLength;case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:case Ce:return Math.max(e,16)*Math.max(t,8)/4;case be:case Se:return Math.max(e,8)*Math.max(t,8)/2;case we:case Te:case De:case Oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ee:case ke:case Ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ne:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case F:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Fe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ie:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case I:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Le:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case L:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case R:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Re:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ze:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Be:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ve:case He:case Ue:return Math.ceil(e/4)*Math.ceil(t/4)*16;case We:case Ge:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ke:case qe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Po(e){switch(e){case O:case k:return{byteLength:1,components:1};case j:case A:case ne:return{byteLength:2,components:1};case re:case ie:return{byteLength:2,components:4};case te:case ee:case M:return{byteLength:4,components:1};case oe:case se:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Fo(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Io(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},X={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},Lo={basic:{uniforms:Da([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Da([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Da([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Da([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Da([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new q(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Da([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Da([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Da([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Da([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Da([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Da([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:Da([X.common,X.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:Da([X.lights,X.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Lo.physical={uniforms:Da([Lo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Ro={r:0,b:0,g:0},zo=new hn,Bo=new G;Bo.set(-1,0,0,0,1,0,0,0,1);function Vo(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new pi(new Gi(1,1,1),new Pa({name:`BackgroundCubeMaterial`,uniforms:Ea(Lo.backgroundCube.uniforms),vertexShader:Lo.backgroundCube.vertexShader,fragmentShader:Lo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(zo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bo),l.material.toneMapped=K.getTransfer(i.colorSpace)!==at,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new pi(new Ca(2,2),new Pa({name:`BackgroundMaterial`,uniforms:Ea(Lo.background.uniforms),vertexShader:Lo.background.vertexShader,fragmentShader:Lo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=K.getTransfer(i.colorSpace)!==at,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ro,Aa(e)),n.buffers.color.setClear(Ro.r,Ro.g,Ro.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ho(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Uo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Wo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Go(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ki,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ko=4,qo=[.125,.215,.35,.446,.526,.582],Jo=20,Yo=256,Xo=new ho,Zo=new q,Qo=null,$o=0,es=0,ts=!1,ns=new W,rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ns}=i;Qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=us(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ls(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,$o,es),this._renderer.xr.enabled=ts,e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:T,minFilter:T,generateMipmaps:!1,type:ne,format:le,colorSpace:rt,depthBuffer:!1},r=as(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=as(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=is(r)),this._blurMaterial=cs(r,e,t),this._ggxMaterial=ss(r,e,t)}return r}_compileMaterial(e){let t=new pi(new Wr,e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,r,i){let a=new fo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Zo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new Gi,new ti({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Zo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;os(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=us()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ls());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;os(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Xo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ko?n-d+Ko:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,os(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Xo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,os(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Xo)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&B(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Jo;m>Jo&&z(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jo}`);let h=[],g=0;for(let e=0;e<Jo;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];os(t,3*v*(r>_-Ko?r-_+Ko:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Xo)}};function is(e){let t=[],n=[],r=[],i=e,a=e-Ko+1+qo.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Ko?s=qo[o-e+Ko-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Wr;h.setAttribute(`position`,new J(f,3)),h.setAttribute(`uv`,new J(p,2)),h.setAttribute(`faceIndex`,new J(m,1)),r.push(new pi(h,null)),i>Ko&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function as(e,t,n){let r=new fn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function os(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ss(e,t,n){return new Pa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Yo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ds(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cs(e,t,n){let r=new Float32Array(Jo),i=new W(0,1,0);return new Pa({name:`SphericalGaussianBlur`,defines:{n:Jo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ds(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ls(){return new Pa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ds(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function us(){return new Pa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ds(){return`

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
	`}var fs=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gi(5,5,5),i=new Pa({name:`CubemapFromEquirect`,uniforms:Ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new pi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=T),new yo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ps(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new fs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new rs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new rs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ms(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&_t(`WebGLRenderer: `+e+` extension not supported.`),t}}}function hs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?jr:Ar)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function gs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function _s(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function vs(e,t,n){let r=new WeakMap,i=new un;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new pn(h,p,m,u);g.type=M,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new U(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ys(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var bs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function xs(e,t,n,r,i,a){let o=new fn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Hi(t,n):void 0}),s=new fn(t,n,{type:ne,depthBuffer:!1,stencilBuffer:!1}),c=new Wr;c.setAttribute(`position`,new Mr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new Mr([0,2,0,0,2,0],2));let l=new Fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new pi(c,l),d=new ho(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},K.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=bs[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Ss=new ln,Cs=new Hi(1,1),ws=new pn,Ts=new mn,Es=new Vi,Ds=[],Os=[],ks=new Float32Array(16),As=new Float32Array(9),js=new Float32Array(4);function Ms(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ds[i];if(a===void 0&&(a=new Float32Array(i),Ds[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ns(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ps(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Fs(e,t){let n=Os[t];n===void 0&&(n=new Int32Array(t),Os[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Is(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ns(n,t))return;e.uniform2fv(this.addr,t),Ps(n,t)}}function Rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ns(n,t))return;e.uniform3fv(this.addr,t),Ps(n,t)}}function zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ns(n,t))return;e.uniform4fv(this.addr,t),Ps(n,t)}}function Bs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ns(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ps(n,t)}else{if(Ns(n,r))return;js.set(r),e.uniformMatrix2fv(this.addr,!1,js),Ps(n,r)}}function Vs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ns(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ps(n,t)}else{if(Ns(n,r))return;As.set(r),e.uniformMatrix3fv(this.addr,!1,As),Ps(n,r)}}function Hs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ns(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ps(n,t)}else{if(Ns(n,r))return;ks.set(r),e.uniformMatrix4fv(this.addr,!1,ks),Ps(n,r)}}function Us(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ns(n,t))return;e.uniform2iv(this.addr,t),Ps(n,t)}}function Gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ns(n,t))return;e.uniform3iv(this.addr,t),Ps(n,t)}}function Ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ns(n,t))return;e.uniform4iv(this.addr,t),Ps(n,t)}}function qs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ns(n,t))return;e.uniform2uiv(this.addr,t),Ps(n,t)}}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ns(n,t))return;e.uniform3uiv(this.addr,t),Ps(n,t)}}function Xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ns(n,t))return;e.uniform4uiv(this.addr,t),Ps(n,t)}}function Zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Cs.compareFunction=n.isReversedDepthBuffer()?518:515,a=Cs):a=Ss,n.setTexture2D(t||a,i)}function Qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ts,i)}function $s(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Es,i)}function ec(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ws,i)}function tc(e){switch(e){case 5126:return Is;case 35664:return Ls;case 35665:return Rs;case 35666:return zs;case 35674:return Bs;case 35675:return Vs;case 35676:return Hs;case 5124:case 35670:return Us;case 35667:case 35671:return Ws;case 35668:case 35672:return Gs;case 35669:case 35673:return Ks;case 5125:return qs;case 36294:return Js;case 36295:return Ys;case 36296:return Xs;case 35678:case 36198:case 36298:case 36306:case 35682:return Zs;case 35679:case 36299:case 36307:return Qs;case 35680:case 36300:case 36308:case 36293:return $s;case 36289:case 36303:case 36311:case 36292:return ec}}function nc(e,t){e.uniform1fv(this.addr,t)}function rc(e,t){let n=Ms(t,this.size,2);e.uniform2fv(this.addr,n)}function ic(e,t){let n=Ms(t,this.size,3);e.uniform3fv(this.addr,n)}function ac(e,t){let n=Ms(t,this.size,4);e.uniform4fv(this.addr,n)}function oc(e,t){let n=Ms(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function sc(e,t){let n=Ms(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function cc(e,t){let n=Ms(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function lc(e,t){e.uniform1iv(this.addr,t)}function uc(e,t){e.uniform2iv(this.addr,t)}function dc(e,t){e.uniform3iv(this.addr,t)}function fc(e,t){e.uniform4iv(this.addr,t)}function pc(e,t){e.uniform1uiv(this.addr,t)}function mc(e,t){e.uniform2uiv(this.addr,t)}function hc(e,t){e.uniform3uiv(this.addr,t)}function gc(e,t){e.uniform4uiv(this.addr,t)}function _c(e,t,n){let r=this.cache,i=t.length,a=Fs(n,i);Ns(r,a)||(e.uniform1iv(this.addr,a),Ps(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Cs:Ss;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function vc(e,t,n){let r=this.cache,i=t.length,a=Fs(n,i);Ns(r,a)||(e.uniform1iv(this.addr,a),Ps(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ts,a[e])}function yc(e,t,n){let r=this.cache,i=t.length,a=Fs(n,i);Ns(r,a)||(e.uniform1iv(this.addr,a),Ps(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Es,a[e])}function bc(e,t,n){let r=this.cache,i=t.length,a=Fs(n,i);Ns(r,a)||(e.uniform1iv(this.addr,a),Ps(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ws,a[e])}function xc(e){switch(e){case 5126:return nc;case 35664:return rc;case 35665:return ic;case 35666:return ac;case 35674:return oc;case 35675:return sc;case 35676:return cc;case 5124:case 35670:return lc;case 35667:case 35671:return uc;case 35668:case 35672:return dc;case 35669:case 35673:return fc;case 5125:return pc;case 36294:return mc;case 36295:return hc;case 36296:return gc;case 35678:case 36198:case 36298:case 36306:case 35682:return _c;case 35679:case 36299:case 36307:return vc;case 35680:case 36300:case 36308:case 36293:return yc;case 36289:case 36303:case 36311:case 36292:return bc}}var Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tc(t.type)}},Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xc(t.type)}},wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function Ec(e,t){e.seq.push(t),e.map[t.id]=t}function Dc(e,t,n){let r=e.name,i=r.length;for(Tc.lastIndex=0;;){let a=Tc.exec(r),o=Tc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ec(n,l===void 0?new Sc(s,e,t):new Cc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new wc(s),Ec(n,e)),n=e}}}var Oc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Dc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function kc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ac=37297,jc=0;function Mc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Nc=new G;function Pc(e){K._getMatrix(Nc,K.workingColorSpace,e);let t=`mat3( ${Nc.elements.map(e=>e.toFixed(4))} )`;switch(K.getTransfer(e)){case it:return[t,`LinearTransferOETF`];case at:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Fc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Mc(e.getShaderSource(t),r)}return i}function Ic(e,t){let n=Pc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Lc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Rc(e,t){let n=Lc[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var zc=new W;function Bc(){return K.getLuminanceCoefficients(zc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${zc.x.toFixed(4)}, ${zc.y.toFixed(4)}, ${zc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Vc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Wc).join(`
`)}function Hc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Uc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Wc(e){return e!==``}function Gc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(e){return e.replace(qc,Xc)}var Yc=new Map;function Xc(e,t){let n=Y[t];if(n===void 0){let e=Yc.get(t);if(e!==void 0)n=Y[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Jc(n)}var Zc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(e){return e.replace(Zc,$c)}function $c(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function el(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var tl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function nl(e){return tl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var rl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function il(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:rl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var al={302:`ENVMAP_MODE_REFRACTION`};function ol(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:al[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var sl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function cl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:sl[e.combine]||`ENVMAP_BLENDING_NONE`}function ll(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ul(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=nl(n),l=il(n),u=ol(n),d=cl(n),f=ll(n),p=Vc(n),m=Hc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Wc).join(`
`),_.length>0&&(_+=`
`)):(g=[el(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Wc).join(`
`),_=[el(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Rc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Ic(`linearToOutputTexel`,n.outputColorSpace),Bc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Wc).join(`
`)),o=Jc(o),o=Gc(o,n),o=Kc(o,n),s=Jc(s),s=Gc(s,n),s=Kc(s,n),o=Qc(o),s=Qc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=kc(i,i.VERTEX_SHADER,y),S=kc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Fc(i,x,`vertex`),n=Fc(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Oc(i,h),T=Uc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ac)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var dl=0,fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pl(e),t.set(e,n)),n}},pl=class{constructor(e){this.id=dl++,this.code=e,this.usedTimes=0}};function ml(e){return e===1030||e===37490||e===36285}function hl(e,t,n,r,i,a){let o=new En,s=new fl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Lo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,N=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=de&&!!i.anisotropyMap,ve=fe&&!!i.clearcoatMap,ye=fe&&!!i.clearcoatNormalMap,be=fe&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,Ne=!!i.alphaHash,F=!!i.extensions,Pe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:K.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:N,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&ml(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:_e,clearcoat:fe,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:Ne,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:N&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(N||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&K.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&K.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:F&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(F&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Lo[t];n=ja.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ul(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function gl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function _l(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function vl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||_l),r.length>1&&r.sort(t||vl),i.length>1&&i.sort(t||vl),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function bl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new yl,e.set(t,[i])):n>=r.length?(i=new yl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function xl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new W,color:new q};break;case`SpotLight`:n={position:new W,direction:new W,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function Sl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Cl=0;function wl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Tl(e){let t=new xl,n=Sl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new hn,o=new hn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(wl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Cl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function El(e){let t=new Tl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Dl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new El(e),t.set(n,[a])):r>=i.length?(a=new El(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ol=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Al=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],jl=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Ml=new hn,Nl=new W,Pl=new W;function Fl(e,t,n){let r=new Ni,i=new U,a=new U,o=new un,s=new La,c=new Ra,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:Ol,fragmentShader:kl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Wr;m.setAttribute(`position`,new J(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new pi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){z(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new fn(i.x,i.y,{format:pe,type:ne,minFilter:T,magFilter:T,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Hi(i.x,i.y,M),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=P,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=S,d.map.depthTexture.magFilter=S}else l.isPointLight?(d.map=new fs(i.x),d.map.depthTexture=new Ui(i.x,te)):(d.map=new fn(i.x,i.y),d.map.depthTexture=new Hi(i.x,i.y,te)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=P,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=T,d.map.depthTexture.magFilter=T):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=S,d.map.depthTexture.magFilter=S);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Nl.setFromMatrixPosition(l.matrixWorld),e.position.copy(Nl),Pl.copy(e.position),Pl.add(Al[t]),e.up.copy(jl[t]),e.lookAt(Pl),e.updateMatrixWorld(),n.makeTranslation(-Nl.x,-Nl.y,-Nl.z),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ml,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new fn(i.x,i.y,{format:pe,type:ne})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Il(e,t){function n(){let t=!1,n=new un,r=null,i=new un(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=yt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new un().fromArray(ae),N=new un().fromArray(oe);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(te&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function we(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Le(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function R(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:R,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:Re}}function Ll(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new U,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):ft(`canvas`)}function g(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?it:K.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),M(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),re(t)}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ne(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function ne(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function re(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function N(){let e=ie;return e>=i.maxTextures&&z(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),ie+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(t,i){let a=r.get(t);if(t.isVideoTexture&&F(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){be(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){be(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let pe={[y]:e.REPEAT,[b]:e.CLAMP_TO_EDGE,[x]:e.MIRRORED_REPEAT},me={[S]:e.NEAREST,[C]:e.NEAREST_MIPMAP_NEAREST,[w]:e.NEAREST_MIPMAP_LINEAR,[T]:e.LINEAR,[E]:e.LINEAR_MIPMAP_NEAREST,[D]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ce(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ne(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=_e(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=K.getPrimaries(K.workingColorSpace),r=o.colorSpace===``?null:K.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Pe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=k(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ge(c,o);let h,y=o.mipmaps,b=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,S=u.dataReady,C=j(o,t);if(o.isDepthTexture)m=A(o.format===ue,o.type),x&&(b?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){b&&x&&n.texStorage2D(e.TEXTURE_2D,C,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],b?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else b?(x&&n.texStorage2D(e.TEXTURE_2D,C,m,t.width,t.height),S&&ye(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){b&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(b){if(S){if(o.layerUpdates.size>0){let t=No(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else b?S&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{b&&x&&n.texStorage2D(e.TEXTURE_2D,C,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?b?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?S&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(b){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,m,t.width,t.height,t.depth),S){if(o.layerUpdates.size>0){let i=No(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)b?(x&&n.texStorage3D(e.TEXTURE_3D,C,m,t.width,t.height,t.depth),S&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(b)n.texStorage2D(e.TEXTURE_2D,C,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<C;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(b&&x){let t=Fe(y[0]);n.texStorage2D(e.TEXTURE_2D,C,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],b?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(b){if(x){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,C,m,r.width,r.height)}S&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=_e(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=K.getPrimaries(K.workingColorSpace),r=o.colorSpace===``?null:K.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Pe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),b=a.convert(o.type),x=k(o.internalFormat,y,b,o.normalized,o.colorSpace),S=o.isVideoTexture!==!0,C=u.__version===void 0||c===!0,w=l.dataReady,T=j(o,h);ge(e.TEXTURE_CUBE_MAP,o);let E;if(f){S&&C&&n.texStorage2D(e.TEXTURE_CUBE_MAP,T,x,h.width,h.height);for(let t=0;t<6;t++){E=m[t].mipmaps;for(let r=0;r<E.length;r++){let i=E[r];o.format===1023?S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,y,b,i.data):y===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?w&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(E=o.mipmaps,S&&C){E.length>0&&T++;let t=Fe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,T,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,y,b,m[t].data);for(let r=0;r<E.length;r++){let i=E[r].image[t].image;S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,y,b,i.data)}}else{S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,y,b,m[t]);for(let r=0;r<E.length;r++){let i=E[r];S?w&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,y,b,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,ee)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else le(i.depthTexture,0);let u=l.__webglTexture,d=Me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,te);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ne(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ge(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ge(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ke.push(l),Ae.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(i.maxSamples,e.samples)}function Ne(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function F(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(K.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=le,this.setTexture2DArray=P,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Rl(e,t){function n(n,r=``){let i,a=K.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var zl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bl=`
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

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pa({vertexShader:zl,fragmentShader:Bl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pi(new Ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hl=class extends bt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Vl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new U,C=null,w=new fo;w.viewport=new un;let T=new fo;T.viewport=new un;let E=[w,T],D=new bo,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Gn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Gn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Gn,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ue:P,a=_.stencil?ae:te);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fn(d.textureWidth,d.textureHeight,{format:le,type:O,depthTexture:new Hi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fn(f.framebufferWidth,f.framebufferHeight,{format:le,type:O,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ne=new W,re=new W;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(k!==D.near||A!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,A=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;oe(D,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ie(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),se(e,D,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=wt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let N=null;function ce(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new fo,o.layers.enable(n),o.viewport=new un,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Wi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}N&&N(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let de=new Fo;de.setAnimationLoop(ce),this.setAnimationLoop=function(e){N=e},this.dispose=function(){}}},Ul=new hn,Wl=new G;Wl.set(-1,0,0,0,1,0,0,0,1);function Gl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Aa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ul.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Wl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Kl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ql=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jl=null;function Yl(){return Jl===null&&(Jl=new gi(ql,16,16,pe,ne),Jl.name=`DFG_LUT`,Jl.minFilter=T,Jl.magFilter=T,Jl.wrapS=b,Jl.wrapT=b,Jl.generateMipmaps=!1,Jl.needsUpdate=!0),Jl}var Xl=class{constructor(e={}){let{canvas:t=pt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=O}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([he,me,fe]),g=new Set([O,te,j,ae,re,ie]),_=new Uint32Array(4),v=new Int32Array(4),y=new W,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,k=null,A=null,ee=null,M=null;this._outputColorSpace=nt;let oe=0,se=0,N=null,ce=-1,le=null,P=new un,ue=new un,de=null,pe=new q(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new un(0,0,_e,ve),Ce=new un(0,0,_e,ve),we=!1,Te=new Ni,Ee=!1,De=!1,Oe=new hn,ke=new W,Ae=new un,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return N===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw B(`WebGLRenderer: `+e.message),e}let Fe,Ie,I,Le,L,R,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et;function tt(){Fe=new ms(F),Fe.init(),Qe=new Rl(F,Fe),Ie=new Wo(F,Fe,e,Qe),I=new Il(F,Fe),Ie.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),A=F.createFramebuffer(),ee=F.createFramebuffer(),M=F.createFramebuffer(),Le=new _s(F),L=new gl,R=new Ll(F,Fe,I,L,Ie,Qe,Le),Re=new ps(T),ze=new Io(F),$e=new Ho(F,ze),Be=new hs(F,ze,Le,$e),Ve=new ys(F,Be,ze,$e,Le),Ye=new vs(F,Ie,R),Ke=new Go(L),He=new hl(T,Re,Fe,Ie,$e,Ke),Ue=new Gl(T,L),We=new bl,Ge=new Dl(Fe),Je=new Vo(T,Re,I,Ve,p,s),qe=new Fl(T,Ve,Ie),et=new Kl(F,Le,Ie,I),Xe=new Uo(F,Fe,Le),Ze=new gs(F,Fe,Le),Le.programs=He.programs,T.capabilities=Ie,T.extensions=Fe,T.properties=L,T.renderLists=We,T.shadowMap=qe,T.state=I,T.info=Le}tt(),m!==1009&&(w=new xs(m,t.width,t.height,o,r,i));let rt=new Hl(T,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){if(rt.isPresenting){z(`WebGLRenderer: Can't change size while VR device is presenting.`);return}_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(P.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(ue.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),k=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Je.dispose(),We.dispose(),Ge.dispose(),L.dispose(),Re.dispose(),Ve.dispose(),$e.dispose(),et.dispose(),He.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,gt),rt.removeEventListener(`sessionend`,_t),yt.stop()};function it(e){e.preventDefault(),ht(`WebGLRenderer: Context Lost.`),E=!0}function at(){ht(`WebGLRenderer: Context Restored.`),E=!1;let e=Le.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;tt(),Le.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function ot(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){ut(e),L.remove(e)}function ut(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;$e.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=ze.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,n),e.side=0,e.needsUpdate=!0,Tt(e,t,n),e.side=2):Tt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=Ge.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];dt(a,n,e),r.add(a)}else dt(t,n,e),r.add(t)}}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){L.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function mt(e){ft&&ft(e)}function gt(){yt.stop()}function _t(){yt.start()}let yt=new Fo;yt.setAnimationLoop(mt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ft=e,rt.setAnimationLoop(e),e===null?yt.stop():yt.start()},rt.addEventListener(`sessionstart`,gt),rt.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;k!==null&&k.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Ge.get(e,C.length),x.init(t),x.state.textureUnits=R.getTextureUnits(),C.push(x),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,lt,t.reversedDepth),De=this.localClippingEnabled,Ee=Ke.init(this.clippingPlanes,De),b=We.get(e,S.length),b.init(),S.push(b),rt.enabled===!0&&rt.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,T.sortObjects)}bt(e,t,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(be,xe,t.reversedDepth),Me=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Me&&Je.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ke.beginShadows();let i=x.state.shadowsArray;if(qe.render(i,e,t),Ee===!0&&Ke.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Me&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(b,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Me&&Je.render(e),xt(b,e,t)}N!==null&&se===0&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),$e.resetDefaultState(),ce=-1,le=null,C.pop(),C.length>0?(x=C[C.length-1],R.setTextureUnits(x.state.textureUnits),Ee===!0&&Ke.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,k!==null&&k.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Te.intersectsSprite(e)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let t=Ve.update(e),i=e.material;i.visible&&b.push(e,t,i,n,Ae.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Te.intersectsObject(e))){let t=Ve.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ae.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,Ae.z,o)}}else i.visible&&b.push(e,t,i,n,Ae.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Ee===!0&&Ke.setGlobalState(T.clippingPlanes,n),r&&I.viewport(P.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new fn(1,1,{generateMipmaps:!0,type:e?ne:O,minFilter:D,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:K.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(pe),ge=T.getClearAlpha(),ge<1&&T.setClearColor(16777215,.5),T.clear(),Me&&Je.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Ee===!0&&Ke.setGlobalState(T.clippingPlanes,r),Ct(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(pe,ge),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=He.getUniforms(e),k!==null&&e.isNodeMaterial&&k.build(e,n,s),e.onBeforeCompile(s,T),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),Et(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function V(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Oc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=je),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:K.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=x.state.lights;if(Ee===!0&&(De===!0||e!==le)){let t=e===le&&r.id===ce;Ke.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Tt(r,t,i),k&&r.isNodeMaterial&&k.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,D=S.getUniforms(),O=v.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ce&&(ce=r.id,w=!0),v.needsLights){let e=Dt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||le!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),D.setValue(F,`projectionMatrix`,e.projectionMatrix),D.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&D.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,w=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&D.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,R),y.state.spotShadowMap.length>0&&D.setValue(F,`spotShadowMap`,y.state.spotShadowMap,R),y.state.pointShadowMap.length>0&&D.setValue(F,`pointShadowMap`,y.state.pointShadowMap,R)),i.isSkinnedMesh){D.setOptional(F,i,`bindMatrix`),D.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(D.setOptional(F,i,`batchingTexture`),D.setValue(F,`batchingTexture`,i._matricesTexture,R),D.setOptional(F,i,`batchingIdTexture`),D.setValue(F,`batchingIdTexture`,i._indirectTexture,R),D.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ye.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,D.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Yl()),w){if(D.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&kt(O,E),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,ye,ve,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;O.probesSH.value=e.texture,O.probesMin.value.copy(e.boundingBox.min),O.probesMax.value.copy(e.boundingBox.max),O.probesResolution.value.copy(e.resolution)}Oc.upload(F,V(v),O,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Oc.upload(F,V(v),O,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(F,`center`,i.center),D.setValue(F,`modelViewMatrix`,i.modelViewMatrix),D.setValue(F,`normalMatrix`,i.normalMatrix),D.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];et.update(n,S),et.bind(n,S)}}return S}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,I.viewport(P),I.scissor(ue),I.setScissorTest(de),ce=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else P.copy(Se).multiplyScalar(ye).floor(),ue.copy(Ce).multiplyScalar(ye).floor(),de=we;if(n!==0&&(r=A),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(P),I.scissor(ue),I.setScissorTest(de),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ce=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(c)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ie.textureTypeReadable(l)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ie.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0);let f=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,f);let p=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vt(F,p,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(d),F.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,ee),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,M);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){oe=0,se=0,N=null,I.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return lt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=K._getDrawingBufferColorSpace(e),t.unpackColorSpace=K._getUnpackColorSpace()}};function Zl(e,t,n){let r=n.length-e-1;if(t>=n[r])return r-1;if(t<=n[e])return e;let i=e,a=r,o=Math.floor((i+a)/2);for(;t<n[o]||t>=n[o+1];)t<n[o]?a=o:i=o,o=Math.floor((i+a)/2);return o}function Ql(e,t,n,r){let i=[],a=[],o=[];i[0]=1;for(let s=1;s<=n;++s){a[s]=t-r[e+1-s],o[s]=r[e+s]-t;let n=0;for(let e=0;e<s;++e){let t=o[e+1],r=a[s-e],c=i[e]/(t+r);i[e]=n+t*c,n=r*c}i[s]=n}return i}function $l(e,t,n,r){let i=Zl(e,r,t),a=Ql(i,r,e,t),o=new un(0,0,0,0);for(let t=0;t<=e;++t){let r=n[i-e+t],s=a[t],c=r.w*s;o.x+=r.x*c,o.y+=r.y*c,o.z+=r.z*c,o.w+=r.w*s}return o}function eu(e,t,n,r,i){let a=[];for(let e=0;e<=n;++e)a[e]=0;let o=[];for(let e=0;e<=r;++e)o[e]=a.slice(0);let s=[];for(let e=0;e<=n;++e)s[e]=a.slice(0);s[0][0]=1;let c=a.slice(0),l=a.slice(0);for(let r=1;r<=n;++r){c[r]=t-i[e+1-r],l[r]=i[e+r]-t;let n=0;for(let e=0;e<r;++e){let t=l[e+1],i=c[r-e];s[r][e]=t+i;let a=s[e][r-1]/s[r][e];s[e][r]=n+t*a,n=i*a}s[r][r]=n}for(let e=0;e<=n;++e)o[0][e]=s[e][n];for(let e=0;e<=n;++e){let t=0,i=1,c=[];for(let e=0;e<=n;++e)c[e]=a.slice(0);c[0][0]=1;for(let a=1;a<=r;++a){let r=0,l=e-a,u=n-a;e>=a&&(c[i][0]=c[t][0]/s[u+1][l],r=c[i][0]*s[l][u]);let d=l>=-1?1:-l,f=e-1<=u?a-1:n-e;for(let e=d;e<=f;++e)c[i][e]=(c[t][e]-c[t][e-1])/s[u+1][l+e],r+=c[i][e]*s[l+e][u];e<=u&&(c[i][a]=-c[t][a-1]/s[u+1][e],r+=c[i][a]*s[e][u]),o[a][e]=r;let p=t;t=i,i=p}}let u=n;for(let e=1;e<=r;++e){for(let t=0;t<=n;++t)o[e][t]*=u;u*=n-e}return o}function tu(e,t,n,r,i){let a=i<e?i:e,o=[],s=Zl(e,r,t),c=eu(s,r,e,a,t),l=[];for(let e=0;e<n.length;++e){let t=n[e].clone(),r=t.w;t.x*=r,t.y*=r,t.z*=r,l[e]=t}for(let t=0;t<=a;++t){let n=l[s-e].clone().multiplyScalar(c[t][0]);for(let r=1;r<=e;++r)n.add(l[s-e+r].clone().multiplyScalar(c[t][r]));o[t]=n}for(let e=a+1;e<=i+1;++e)o[e]=new un(0,0,0);return o}function nu(e,t){let n=1;for(let t=2;t<=e;++t)n*=t;let r=1;for(let e=2;e<=t;++e)r*=e;for(let n=2;n<=e-t;++n)r*=n;return n/r}function ru(e){let t=e.length,n=[],r=[];for(let i=0;i<t;++i){let t=e[i];n[i]=new W(t.x,t.y,t.z),r[i]=t.w}let i=[];for(let e=0;e<t;++e){let t=n[e].clone();for(let n=1;n<=e;++n)t.sub(i[e-n].clone().multiplyScalar(nu(e,n)*r[n]));i[e]=t.divideScalar(r[0])}return i}function iu(e,t,n,r,i){return ru(tu(e,t,n,r,i))}var au=class extends qi{constructor(e,t,n,r,i){super();let a=t?t.length-1:0,o=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=i||a;for(let e=0;e<o;++e){let t=n[e];this.controlPoints[e]=new un(t.x,t.y,t.z,t.w)}}getPoint(e,t=new W){let n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),i=$l(this.degree,this.knots,this.controlPoints,r);return i.w!==1&&i.divideScalar(i.w),n.set(i.x,i.y,i.z)}getTangent(e,t=new W){let n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),i=iu(this.degree,this.knots,this.controlPoints,r,1);return n.copy(i[1]).normalize(),n}toJSON(){let e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(e=>e.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(e=>new un(e[0],e[1],e[2],e[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}},ou=class{constructor(e,t,n,r,i=1){this.x=e,this.y=t,this.z=n,this.color=r instanceof q?r:new q(r),this.alpha=i}getColorArray(e=!0,t=1){let n=this.color.toArray();return e?n.push(this.alpha):n.push(t),n}},Z=class e{static test=0;static sqrt2=1.41421356237373;static precisionRound(e,t=5){var n=10**t,r=t<0?e:.01/n+e;return Math.round(r*n)/n}static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static clamp01(t){return e.clamp(t,0,1)}static fit(t,n,r,i=0,a=1,o=!1){let s=(t-n)*(a-i)/(r-n)+i;return s||=i,o?e.clamp(s,i,a):s}static fit01(t,n,r){return n+(r-n)*e.clamp01(t)}static fit01to11(t){return e.fit01(t,-1,1)}static degTorRad(e=1,t=!0){return t?e*.017453292519943295:e*Math.PI/180}static radToDeg(e,t=!0){return t?e*57.29577951308232:e*180/Math.PI}static isOdd(e){return e%2==1}static avg(...e){return e.reduce((e,t)=>e+t,0)/e.length}static median(...t){let n=t.flat().sort((e,t)=>e-t);return e.isOdd(n.length)?n.at(n.length/2):e.avg(n[n.length/2-1],n[n.length/2])}static compareArrays=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]);static counter(e){var t={};return e.forEach(e=>t[e]=(t[e]||0)+1),t}static arrayBatches(e,t=300){return e.reduce((e,n,r)=>{let i=Math.floor(r/t);return e[i]||(e[i]=[]),e[i].push(n),e},[])}static getNurbsCurve(t,n=2){let r=Array(n+1).fill(0);return t.forEach((t,i,a)=>{let o=(i+1)/(a.length-n);r.push(e.clamp01(o))}),new au(n,r,t)}static smoothPoints(e,t=1,n=1){for(let r=0;r<t;r++)e.forEach((e,t,r)=>{if(t>0&&t<r.length-1){let i=[...Array(n).fill(e),r[t-1],r[t+1]],a=i.reduce((e,t)=>e.add(t),new U).divideScalar(i.length);e.set(a.x,a.y)}})}static linesIntersect(e,t,n,r){function i(e,t,n){return(n.y-e.y)*(t.x-e.x)>(t.y-e.y)*(n.x-e.x)}return i(e,n,r)!=i(t,n,r)&&i(e,t,n)!=i(e,t,r)}},su=class e{static tableVersion=`two-nearest-scan-v1`;static get LOW_CHANCE(){return new e([0,.1,1],[0,.99,1])}static get MID_CHANCE(){return new e([0,.5,1],[0,.7,1])}static get FLAT_ZERO(){return new e([0,0],void 0,{quality:2})}#e;constructor(e=[0,1,0],t=[],{quality:n,degree:r,useCatmullRom:i}={}){if(this.yKeys=e,this.xKeys=t,this.quality=n||100,this.nurbsDegree=(r==`max`?e.length-1:Math.min(r,e.length-1))||2,this.useCatmullRom=e.length==2||i||!1,!Z.compareArrays([...t].sort((e,t)=>e-t),t))throw Error(`x keys must be in ascending order`);if(t.length!==new Set(t).size)throw Error(`x keys must be unique`);this.positions=[],e.forEach((n,r)=>{let i=t.length==e.length?t[r]:r;this.add(i,n)}),e.length>=2&&this.update()}add(e,t){this.positions.push({x:e,y:t})}update(){let t=this.positions;if(t.length<2)throw Error(`Ramp must have at least 2 y-keys`);let n=t[0].x;n!=0&&t.forEach(e=>{e.x-=n});let r=Math.max(...t.map(e=>e.x));t=t.map(e=>({x:e.x/r,y:e.y})),this.minValue=Math.min(...t.map(e=>e.y)),this.maxValue=Math.max(...t.map(e=>e.y));let i;if(this.useCatmullRom)i=new ya(t);else{let e=this.nurbsDegree,n=Array(e+1).fill(0);t.forEach((t,r,i)=>{let a=(r+1)/(i.length-e);n.push(Z.clamp01(a))}),i=new au(e,n,t)}t=i.getSpacedPoints(this.quality-1),t=t.map(e=>({x:e.x,y:e.y}));let a=Math.min(...t.map(e=>e.y)),o=Math.max(...t.map(e=>e.y));t.forEach(t=>{if(t.y!=0){if(a<0&&o>0){let n=t.y>0?Z.fit(t.y,0,o,0,this.maxValue):Z.fit(t.y,a,0,this.minValue,0),r=Z.fit(t.y,a,o,this.minValue,this.maxValue),i=e.sin(t.x);t.y=Z.fit01(i,n,r)}else t.y=Z.fit(t.y,a,o,this.minValue,this.maxValue)}}),this.maxValueIsAt=[...t].sort((e,t)=>t.y-e.y)[0].x,this.minValueIsAt=[...t].sort((e,t)=>e.y-t.y)[0].x,this.#t(t)}#t(e){let t=[];t.push(Z.precisionRound(e[0].y,4));let n=e.every(e=>Number.isFinite(e.x));for(let r=1;r<e.length-1;r++){let i=r/(e.length-1),a,o;if(n){let t=1/0,n=1/0;for(let r of e){let e=Math.abs(r.x-i);e<t?(o=a,n=t,a=r,t=e):e<n&&(o=r,n=e)}a.x>o.x&&([a,o]=[o,a])}else[a,o]=e.map(e=>({dist:Math.abs(e.x-i),x:e.x,y:e.y})).sort((e,t)=>e.dist-t.dist).slice(0,2).sort((e,t)=>e.x-t.x);let s=Z.fit(i,a.x,o.x,a.y,o.y)||0;s=Z.precisionRound(s,4),t.push(s)}t.push(Z.precisionRound(e[e.length-1].y,4)),e.forEach((e,n,r)=>{e.x=n/(r.length-1),e.y=t[n]}),this.#e=e,this.table=t}at(e){return this.table[Math.round((this.quality-1)*e)]}getDots(e=70,{xDelta:t,yDelta:n,yRatio:r}={}){r||=.66;let i={x:e,y:e*r},a=[],o=this.#e.sort((e,t)=>t.y-e.y)[0].y,s=this.#e.sort((e,t)=>e.y-t.y)[0].y,c=o-s||1,l=s/c;for(let e=0;e<=i.y;e++)a.push(new ou(-i.x/2,e-i.y/2,0,`blue`));for(let e=0;e<=i.x;e++)a.push(new ou(e-i.x/2,-i.y/2-l*i.y,0,`blue`));return this.#e.forEach(e=>{a.push(new ou(e.x*i.x-i.x/2,e.y/c*i.y-i.y/2-l*i.y,0,`cyan`))}),a.forEach(e=>{e.x+=t||0,e.y+=n||0}),a}static sin(e,t=0,n=1){return Z.precisionRound(Z.fit01(Math.sin(e*Math.PI),t,n))}static fromLerp(t,n,r){let i=new e([0,1],[0,1],{quality:t.quality});if(i.table.forEach((e,a)=>{i.table[a]=Z.fit01(r,t.table[a],n.table[a])}),i.minValue=Z.fit01(r,t.minValue,n.minValue),i.maxValue=Z.fit01(r,t.maxValue,n.maxValue),i.minValueIsAt=Z.fit01(r,t.minValueIsAt,n.minValueIsAt),i.maxValueIsAt=Z.fit01(r,t.maxValueIsAt,n.maxValueIsAt),isNaN(i.minValue))throw Error(`Ramp min value is NaN`);return i}},cu=new Set([`legacy`,`anisotropic`,`random`]),lu=new Set([`auto`,`packed`,`single`,`double`,`triple`]),uu=[`bulge`,`club`,`hourglass`,`cylinder`,`irregular`],du=[`taper`,`bell`,`twin`],fu=[`straight`,`arc`,`s`,`coil`,`wave`,`irregular`],pu=[`bulge`,`pinch`,`shoulder`,`double`,`ripple`],mu=[`flare`,`collar`],hu=[`flat`,`morph`,`blend`,`repeat`],gu={bulge:`pinch`,pinch:`double`,shoulder:`pinch`,double:`pinch`,ripple:`pinch`,flare:`bulge`,collar:`shoulder`};function _u(e,t=1779033703){let n=(e^t)>>>0;return n=Math.imul(n^n>>>16,569420461),n=Math.imul(n^n>>>15,1935289751),((n^n>>>15)>>>0)/4294967296}function Q(e,t,n){return e+(t-e)*n}var $=class e{static#e=new q(11973546);static#t=new q(2105376);static#n=new q(`#2A3027`);static#r=new q(`#5A5C4B`);static sceneHalfSize={x:40,y:60};static compositionMode=`auto`;static singleChance=.2;static doubleChance=.2;static tripleChance=.1;static compositionVersion=35;static wildWidthChance=.25;static randomBendChance=.3;static familyChance=.25;static capsuleChance=.15;static extraWidthChance=.2;static extraChunkChance=.2;static familySegmentSettings={large:[3,8],fine:[9,28]};static bendProfileSettings={straight:[0,18],arc:[45,140],s:[180,360],coil:[220,420],wave:[260,600],irregular:[120,600]};static packedLayoutChance={single:.75,double:.75};static compositionScaling=!1;static groupSettings={shapeRetention:.003,lengthPasses:4,compaction:1e-4,maxCompactionStep:.003,contactClearance:1.08,maxShapeDeformation:.35};static singleSettings={straightChance:.55,gentleChance:.25,largeSegmentsChance:.4,largeChunks:[3,8],fineChunks:[9,20],cChunks:[12,28],straightBend:[0,15],gentleBend:[25,75],cBend:[150,240],radius:[7,16],length:[60,90],bendiness:[.7,1],rotation:[-15,15],targetHeight:[.7,.85],maxWidth:.85,edgeChance:.3,edgeOccupancy:[1.04,1.15],edgeOffset:[-.04,.04]};static setCompositionMode(t){if(!lu.has(t))throw Error(`Unknown composition mode: ${t}`);e.compositionMode=t}static resolveComposition(t=v.initialSeed){if(e.compositionMode!==`auto`)return e.compositionMode;let n=_u(t);return n<e.singleChance?`single`:n<e.singleChance+e.doubleChance?`double`:n<e.singleChance+e.doubleChance+e.tripleChance?`triple`:`packed`}static resolvePackingStyle(t,n=v.initialSeed){return t!==`single`&&t!==`double`||_u(n,528734635)<e.packedLayoutChance[t]?`packed`:`simple`}static resolveWidthStyle(t=v.initialSeed){return _u(t,608135816)<e.wildWidthChance?`wild`:`normal`}static resolveBendProfile(t){if(t<e.randomBendChance)return`random`;let n=Math.floor((t-e.randomBendChance)/(1-e.randomBendChance)*fu.length);return fu[Math.min(n,fu.length-1)]}static resolveChunkRampMode(e){return hu[Math.floor(e*hu.length)]}static resolveWidthProfile(t,n){return n<e.extraWidthChance?du[Math.floor(n/e.extraWidthChance*du.length)]:uu[Math.floor(t*uu.length)]}static resolveChunkProfile(t,n){return n<e.extraChunkChance?mu[Math.floor(n/e.extraChunkChance*mu.length)]:pu[Math.floor(t*pu.length)]}static createFamily(t=v.initialSeed){if(_u(t,137296536)>=e.familyChance)return null;let n=e=>_u(t,e),r=e.resolveChunkProfile(n(1160258022),n(2050118529)),i=n(2450970073),a=i<e.capsuleChance?`capsule`:i<e.capsuleChance+(1-e.capsuleChance)*.5?`large`:`fine`,o=e.resolveChunkRampMode(n(953160567));return{segmentProfile:a,segmentRoll:n(2306472731),bendiness:n(3509652390),widthProfile:e.resolveWidthProfile(n(698298832),n(1065670069)),widthRolls:Array.from({length:7},(e,t)=>n(Math.imul(t+1,2654435769))),widthCenter:Q(.4,.6,n(2757295779)),widthReverse:n(3964562569)<.5,bendProfile:e.resolveBendProfile(n(3193202383)),bendSeed:(t^887688300)>>>0,chunkMode:o,chunkStart:r,chunkEnd:o===`morph`?gu[r]:o===`repeat`?r:e.resolveChunkProfile(n(3232508343),n(3041331479)),chunkSeed:(t^3380367581)>>>0}}static createCompositionFraming(t=v.initialSeed){let n=e.singleSettings;return{mode:_u(t,3144134277)<n.edgeChance?`edge`:`centered`,occupancy:Q(...n.edgeOccupancy,_u(t,1013904242)),offset:Q(...n.edgeOffset,_u(t,2773480762))}}static chunkSamplingMode=`legacy`;static anisotropicJitterDamping={densityStart:2.8,densityEnd:4.2,minScale:.35};static setChunkSamplingMode(t){if(!cu.has(t))throw Error(`Unknown chunk sampling mode: ${t}`);e.chunkSamplingMode=t}static get globals(){return{sceneBgColor:e.#e,wormDotColor:e.#n}}#i;constructor({justReturn:t=!1}={}){if(t)return;let n={chunksMin:v.rangeInt(3,12,su.MID_CHANCE),chunksMax:v.rangeInt(12,40,su.MID_CHANCE),maxSegmentsMin:3,maxSegmentsMax:20,bendDegMax:360*(v.trueFalse(.3)?0:v.range(0,4))},r={lenMinMin:5,lenMinMax:15,lenMaxMin:15,lenMaxMax:30,bendMin:20,bendMax:90,numPoints:v.rangeInt(8,30)};v.random(),v.random();let i={localDensity:v.trueFalse()};console.log(`use chunk local density`,i.localDensity),this.#i={arc:r,larva:n,chunks:i},this.family=e.createFamily(),this.randomize(),this.rebuildChunks(),this.composition={requestedMode:e.compositionMode,resolvedMode:e.resolveComposition(),singleChance:e.singleChance,doubleChance:e.doubleChance,tripleChance:e.tripleChance,packedChance:1-e.singleChance-e.doubleChance-e.tripleChance,version:e.compositionVersion,widthStyle:e.resolveWidthStyle(),family:this.family},this.composition.wormCount={single:1,double:2,triple:3}[this.composition.resolvedMode]??null,this.composition.packingStyle=e.resolvePackingStyle(this.composition.resolvedMode),this.composition.packedLayoutChance=e.packedLayoutChance[this.composition.resolvedMode]??1,this.composition.groupSettings=this.composition.resolvedMode===`double`&&this.composition.packingStyle===`simple`?{...e.groupSettings}:null,this.composition.packingStyle===`simple`&&this.applySingleComposition(),this.composition.fitting={scaleToFit:e.compositionScaling&&this.composition.resolvedMode!==`packed`,centering:`visible-circle-area`,targetHeight:this.single?.targetHeight??Q(...e.singleSettings.targetHeight,_u(v.initialSeed,1359893119)),maxWidth:e.singleSettings.maxWidth,framing:e.compositionScaling?this.single?.framing??(this.composition.wormCount===null?{mode:`centered`}:e.createCompositionFraming()):{mode:`centered`}}}applySingleComposition(){let t=e.singleSettings,n=e=>v.range(...e),r=e=>Math.floor(v.range(e[0],e[1]+1)),i=v.random(),a=i<t.straightChance?`straight`:i<t.straightChance+t.gentleChance?`gentle`:`c`,o=v.random(),s=o<e.capsuleChance?`capsule`:o<e.capsuleChance+t.largeSegmentsChance?`large`:`fine`,c=s===`capsule`;a===`c`&&!c&&(s=`fine`);let l=c?1:r(a===`c`?t.cChunks:s===`large`?t.largeChunks:t.fineChunks),u=this.#c(l,o);s=u.segmentProfile;let d=u.numChunks,f=v.captureState().sequenceSeed,p=n(t[`${a}Bend`])*(v.trueFalse()?1:-1),m=new su([p,p]),h=this.#s(m,f),g=this.#a();Object.assign(this.larva,u),Object.assign(this.larva,h),this.larva.bendiness=this.#l(n(t.bendiness)),Object.assign(this.larva,g),this.single={shape:a,segmentGroup:s,widthProfile:g.widthProfile,numChunks:d,bendDegrees:p,widthStyle:g.widthStyle,bendProfile:h.bendProfile,bendKeys:h.bendRamp.yKeys,bendPositions:h.bendRamp.xKeys,bendiness:this.larva.bendiness,widthKeys:g.widthRamp.yKeys,widthPositions:g.widthRamp.xKeys,radius:n(t.radius),length:n(t.length),rotationDeg:n(t.rotation),targetHeight:n(t.targetHeight),maxWidth:t.maxWidth,framing:e.createCompositionFraming()},this.rebuildChunks()}#a(){let t=v.random(),n=e.resolveWidthProfile(t,_u(Math.floor(t*4294967296),1065670069)),r=v.trueFalse(),i=Array.from({length:7},()=>v.random()),a=v.range(.4,.6),o=this.family,s=o?.widthProfile??n,c=o?.widthReverse??r,l=o?i.map((e,t)=>Q(o.widthRolls[t],e,.15)):i,u=o?Q(o.widthCenter,a,.15):a,d=(e,t,n)=>Q(t,n,l[e]),f=d(0,.3,.5),p=d(1,.3,.5),m=d(2,1,1.25),h,g=[0,.25,.5,.75,1];switch(s){case`bulge`:h=[f,d(4,.65,.85),m,d(5,.65,.85),p],g=[0,u/2,u,(1+u)/2,1];break;case`club`:h=[f,d(4,.45,.6),d(5,.7,.85),m,d(1,.7,.9)],g=[0,.2,.45,.78,1];break;case`hourglass`:h=[d(0,.45,.65),m,d(6,.3,.48),d(3,1,1.25),d(1,.45,.65)],g=[0,.25,u,.75,1];break;case`cylinder`:{let e=d(2,.95,1.05);h=[d(0,.78,.9),e,e,e,d(1,.78,.9)];break}case`irregular`:h=[d(0,.35,.6),...l.map(e=>Q(.45,1.2,e)),d(1,.35,.6)],g=h.map((e,t)=>t/(h.length-1));break;case`taper`:h=[d(0,.1,.16),d(1,.15,.24),d(4,.35,.5),d(2,1.15,1.45),d(3,.65,.9)],g=[0,.25,.58,.84,1];break;case`bell`:h=[d(0,.1,.18),d(1,.14,.22),d(6,.18,.3),d(4,.5,.7),d(2,1.25,1.5),d(3,.85,1.1)],g=[0,.2,.48,.62,.82,1];break;case`twin`:h=[f,d(2,1.1,1.4),d(4,.28,.4),d(6,.12,.2),d(5,.25,.4),d(3,1.1,1.4),p],g=[0,.15,.32,u,.64,.84,1]}c&&(h.reverse(),g=g.reverse().map(e=>1-e));let _=new su(h,g),y=e.resolveWidthStyle();if(y===`wild`){let e=Math.floor((o?.widthRolls[6]??l[6])*4294967296)>>>0,t=7+Math.floor(l[4]*7),n=l[5]<.5;h=[],g=[];for(let r=0;r<t;r++){let i=r/(t-1),a=r===0||r===t-1,o=_u(e,Math.imul(r+1,2654435769)),s=r%2==0===n?Q(.25,.5,o):Q(1.25,1.85,o);h.push(a?_.at(i):Math.max(.22,Math.min(1.75,_.at(i)*s))),g.push(a?i:i+(o-.5)*.4/(t-1))}_=new su(h,g)}return{widthProfile:s,widthStyle:y,widthRamp:_}}#o(){let e=v.captureState().sequenceSeed,t=v.rangeInt(2,12),n=new su(Array.from({length:t},()=>v.range11()*this.#i.larva.bendDegMax));return this.#s(n,e)}#s(t,n){let r=this.family,i=r?.bendProfile??e.resolveBendProfile(_u(n,2752067618));if(i===`random`&&!r)return{bendProfile:i,bendRamp:t};let a=e=>_u(n,Math.imul(e+1,2654435769)),o=e=>_u(r?.bendSeed??n,Math.imul(e+1,2654435769)),s=e=>r?Q(o(e),a(e),.15):a(e),c=o(0)<.5?-1:1,l=i===`random`?this.#i.larva.bendDegMax:Q(...e.bendProfileSettings[i],s(1)),u,d;switch(i){case`random`:{let e=2+Math.floor(o(2)*11);u=Array.from({length:e},(e,t)=>(s(t+4)*2-1)*l);break}case`straight`:u=[l,l];break;case`arc`:u=[l*.85,l,l*.85];break;case`s`:u=[l,l*.85,0,-l*.85,-l],d=[0,.15,Q(.4,.6,s(2)),.85,1];break;case`coil`:u=[l*.65,l,l*1.2];break;case`wave`:u=Array.from({length:9},(e,t)=>Math.cos(t*Math.PI/2)*l*Q(.7,1,s(t+4)));break;case`irregular`:u=Array.from({length:4+Math.floor(o(2)*5)},(e,t)=>(s(t+4)*2-1)*l)}return{bendProfile:i,bendRamp:new su(u.map(e=>e*c),d)}}#c(t,n){let r=this.family,i=r?.segmentProfile??(n<e.capsuleChance?`capsule`:t<=8?`large`:`fine`);if(i===`capsule`)return{segmentProfile:i,numChunks:1};if(!r)return{segmentProfile:i,numChunks:t};let[a,o]=e.familySegmentSettings[i],s=Q(r.segmentRoll,n,.15);return{segmentProfile:i,numChunks:Math.min(o,Math.floor(Q(a,o+1,s)))}}#l(e){return this.family?Q(this.family.bendiness,e,.15):e}randomize(e={arc:!0}){let[t,n,r]=[this.#i.arc,this.#i.larva,this.#i.chunks];this.worm={drawStyle:[`shuffle`,`strips`,`radial_gradient`][v.rangeInt(0,2)],maxChainSegments:v.rangeInt(n.maxSegmentsMin,n.maxSegmentsMax),itemsPerBatch:v.rangeInt(50,300)};let i=v.captureState().sequenceSeed,a=this.#c(v.rangeInt(n.chunksMin,n.chunksMax),_u(i,2450970073));this.larva={...a,...this.#a(),...this.#o(),bendiness:this.#l(v.range(0,1))},e.arc&&(this.arc={numPoints:t.numPoints,bend:v.range(t.bendMin,t.bendMax)}),this.chunks=[];let o=v.range(2.5,4),s=v.range(0,.05);this.chunks.density=o,this.chunks.jitter=s,this.chunks.stripsDensityRand=v.trueFalse(),this.chunks.useLocalDensity=r.localDensity,this.chunks.sampling=this.#u(o)}#u(t){let n=v.random(),r=v.random(),i=v.random(),a=v.random(),o=v.random(),s=v.random(),c=v.random(),l=v.random(),u=v.random(),d=v.random(),f=Math.floor(v.random()*4294967296)>>>0,p=e.chunkSamplingMode,m=r<.5?`u`:`v`,h=Q(.75,.95,i),g=Q(1.05,1.34,a),_=m===`u`?h:g,y=m===`v`?h:g,b={requestedMode:`legacy`,profile:`legacy`,sparseAxis:null,densityU:t,densityV:t,densityUScale:1,densityVScale:1,uEndBias:0,vEndBias:0,rowPhase:0,rowPhaseFrequency:0,jitterUScale:1,jitterVScale:1,seed:f},x={requestedMode:`anisotropic`,profile:`anisotropic`,sparseAxis:m,densityU:t*_,densityV:t*y,densityUScale:_,densityVScale:y,uEndBias:Q(.14,.38,o),vEndBias:Q(.18,.48,s),rowPhase:Q(.08,.28,c),rowPhaseFrequency:Q(1.5,3.5,l),jitterUFraction:Q(.18,.28,u),jitterVFraction:Q(.22,.34,d),jitterDensityDamping:{...e.anisotropicJitterDamping},seed:f};return this.chunkSamplingVariants=Object.freeze({legacy:Object.freeze(b),anisotropic:Object.freeze(x),randomProfile:n<.5?`legacy`:`anisotropic`}),this.chunkSamplingForMode(p)}chunkSamplingForMode(e){if(!cu.has(e))throw Error(`Unknown chunk sampling mode: ${e}`);let t=e===`random`?this.chunkSamplingVariants.randomProfile:e;return{...this.chunkSamplingVariants[t],requestedMode:e}}applyChunkSamplingMode(e){this.chunks.sampling=this.chunkSamplingForMode(e)}rebuildChunks(){this.chunks.splice(0,this.chunks.length),this.#i.chunks;let t=this.family,n=t?.chunkMode??e.resolveChunkRampMode(_u(v.captureState().sequenceSeed,320440878)),r=n===`flat`,i=n===`morph`&&this.larva.numChunks>1,a=n===`blend`;function o(n,r=!1,i=0){let a=v.random(),o=Array.from({length:a>.5?2:4},()=>v.random()),s=Math.floor(a*4294967296)>>>0,c=n??e.resolveChunkProfile(a,_u(s,2050118529)),l=e=>_u(t?.chunkSeed??s,Math.imul(e+1+i*16,2654435769)),u=e=>{let n=_u(s,Math.imul(e+1,2654435769));return t?Q(l(e),n,.15):n},d=t?Q(l(10),o[0],.15):o[0],f=t?Q(l(11),o.at(-1),.15):o.at(-1),p=Q(r?.65:.25,.95,d),m=Q(.3,.7,f),h,g;switch(c){case`bulge`:h=[0,p,0],g=[0,m,1];break;case`pinch`:h=[0,-Q(r?.3:.15,.4,d),0],g=[0,m,1];break;case`shoulder`:h=[0,p*.12,p*.45,p,0],g=[0,.2,.55,Q(.72,.86,f),1];break;case`double`:h=[0,p,p,-Q(.05,.15,u(0)),Q(r?.65:.25,.95,u(1)),Q(r?.65:.25,.95,u(1)),0],g=[0,.15,.3,Q(.4,.6,f),.7,.85,1];break;case`ripple`:h=[0,...Array.from({length:7},(e,t)=>t%2==0?Q(r?.65:.25,.95,u(t)):-Q(.12,.35,u(t))),0],g=h.map((e,t)=>t/(h.length-1));break;case`flare`:{let e=Q(.6,.86,d);h=[0,-e*.1,-e*.3,-e,-e*.7,0,0],g=[0,.17,.4,.72,.88,.97,1];break}case`collar`:{let e=Q(.6,.86,d);h=[0,0,-e*.4,-e,-e,-e*.4,0,0],g=[0,.03,.12,.26,.74,.88,.97,1];break}}return(t?l(8):u(8))<.5&&(h.reverse(),g=g.reverse().map(e=>1-e)),{profile:c,ramp:new su(h,g),pinchByRadius:+!!mu.includes(c)}}let s=o(t?.chunkStart,i),c=o(i?gu[s.profile]:t?.chunkEnd,i,1);r&&(s=c={profile:`flat`,ramp:new su([0,0,0]),pinchByRadius:0}),!i&&!a&&!r&&(c=s),this.chunks.rampProfiles={start:s.profile,end:c.profile},this.chunks.requestedRampMode=n,this.chunks.rampMode=r?`flat`:i?`morph`:a?`blend`:`repeat`;for(let e=0;e<this.larva.numChunks;e++){let t=e/(this.larva.numChunks-1)||0,n;n=t==0?s.ramp:t==1?c.ramp:su.fromLerp(s.ramp,c.ramp,t);let r=v.spread(.2,1);this.chunks.push({ramp:n,density:r,pinchByRadius:Q(s.pinchByRadius,c.pinchByRadius,t)})}}clone(t={numChunks:void 0}){let n=Object.assign(new e({justReturn:!0}),this);return n.#i=this.#i,n.randomize({arc:!1}),isNaN(t.numChunks)||(n.larva.numChunks=t.numChunks),n.worm.drawStyle=this.worm.drawStyle,n.rebuildChunks(),n}forceStyleOverride(){console.log(`SPEC FORCE STYLE OVERRIDE`),this.worm.drawStyle=`shuffle`,this.larva.numChunks=v.rangeInt(2,40,su.LOW_CHANCE),this.larva.bendRamp=new su(Array.from({length:v.rangeInt(2,8)},()=>v.range11()*360)),this.larva.widthRamp=new su([...Array.from({length:v.rangeInt(2,10)},()=>v.range(.2,1.2))],void 0,{quality:50}),console.log(`IF ONLY ONE LARVA THIS SHOUDL SHOW ONCE`),this.chunks.stripsDensityRand=!1,this.chunks.jitter=0,this.chunks.density=v.range(2,3.2),this.arc.bend=10,this.rebuildChunks(),this.chunks.forEach(e=>{e.ramp=new su([0,1,1,0],[0,1,49,50]),e.density=v.spread(.2,1)})}},vu=Object.freeze({sampling:`random`,composition:`auto`,rock:`random`,whiteBg:`1`,look:`1-base`,dispersion:`0`,snap:`0`,background:`1`,animation:`1`,animationPreview:`0`,parallelRock:`1`,compare:`0`}),yu=Object.freeze({composition:`comp`,whiteBg:`bright`}),bu=Object.freeze({look:Object.freeze({"1-base":`base`,"2-dense":`dense`,"3-anisotropic":`aniso`}),sampling:Object.freeze({anisotropic:`aniso`})});function xu(e,t){let n=bu[e];return n?Object.entries(n).find(([,e])=>e===t)?.[0]??t:t}function Su(e,t){let n=Object.entries(yu).find(([,e])=>e===t)?.[0]??t,r=yu[n]??n;return xu(n,e.get(n)??e.get(r)??vu[n]??null)}function Cu(e){let t=new URL(e);for(let[e,n]of Object.entries(vu)){let r=yu[e]??e,i=t.searchParams.get(e)??t.searchParams.get(r);if(i===null)continue;let a=xu(e,i);if(r!==e&&t.searchParams.delete(e),a===n)t.searchParams.delete(r);else{let n=bu[e],i=n&&Object.hasOwn(n,a)?n[a]:a;t.searchParams.get(r)!==i&&t.searchParams.set(r,i)}}return t}function wu(e=window.location.href){let t=Cu(e);t.href!==window.location.href&&window.history.replaceState(window.history.state,``,t)}var Tu=class e{static#e=`fossil_debug`;static#t=`fossil_debugColors`;static#n=`fossil_debugSolo`;static#r=[];static#i=-1;static debug=!1;static debugColors=!1;static debugSolo=!0;static drawing;static init(){e.#a(),e.debug=sessionStorage.getItem(e.#e)==`true`,e.debugColors=sessionStorage.getItem(e.#t)==`true`,e.debugSolo=sessionStorage.getItem(e.#n)==`true`}static#a(){let e=document.getElementById(`devControls`),t=document.getElementById(`settingsMenuBtn`),n=document.getElementById(`settingsPanel`),r=window.matchMedia(`(max-width: 700px)`),i=!1,a=()=>{let a=r.matches&&i;e.classList.toggle(`settings-open`,a),t.setAttribute(`aria-expanded`,String(a)),t.setAttribute(`aria-label`,a?`Close settings`:`Open settings`),t.title=a?`Close settings`:`Open settings`,n.inert=r.matches&&!i,n.setAttribute(`aria-hidden`,String(r.matches&&!i))};t.addEventListener(`click`,()=>{i=!i,a()}),e.addEventListener(`keydown`,e=>{e.key===`Escape`&&r.matches&&i&&(i=!1,a(),t.focus())}),r.addEventListener(`change`,()=>{i=!1,a()}),a()}static attachDrawing(t){e.drawing=t;let n=document.getElementById(`prevBtn`),r=document.getElementById(`repeatBtn`),i=document.getElementById(`nextBtn`),a=[{element:document.getElementById(`look1Btn`),presetId:`1-base`},{element:document.getElementById(`look2Btn`),presetId:`2-dense`},{element:document.getElementById(`look3Btn`),presetId:`3-anisotropic`}],o=[{element:document.getElementById(`samplingLegacyBtn`),mode:`legacy`},{element:document.getElementById(`samplingAnisotropicBtn`),mode:`anisotropic`},{element:document.getElementById(`samplingRandomBtn`),mode:`random`}],s=document.getElementById(`dispersionBtn`),c=document.getElementById(`snapBtn`),l=[{element:document.getElementById(`rockOffBtn`),variant:null},{element:document.getElementById(`rock1Btn`),variant:`strata-deep`},{element:document.getElementById(`rock2Btn`),variant:`strata-worn`},{element:document.getElementById(`rock3Btn`),variant:`strata-flaked`},{element:document.getElementById(`rockRandomBtn`),variant:`random`}],u=[{element:document.getElementById(`compositionAutoBtn`),mode:`auto`},{element:document.getElementById(`compositionPackedBtn`),mode:`packed`},{element:document.getElementById(`compositionSingleBtn`),mode:`single`},{element:document.getElementById(`compositionDoubleBtn`),mode:`double`},{element:document.getElementById(`compositionTripleBtn`),mode:`triple`}],d=!!t.sequencer?.spec?.composition,f=()=>{u.forEach(({element:e,mode:t})=>{e.hidden=!d,e.classList.toggle(`active`,$.compositionMode===t),e.setAttribute(`aria-pressed`,String($.compositionMode===t))});let e={single:`Single`,double:`Double`,triple:`Triple`,packed:`Packed`}[t.sequencer?.spec?.composition?.resolvedMode],n=u[0].element,r=`Seeded composition: 20% single, 20% double, 10% triple, 50% packed`;n.title=$.compositionMode===`auto`&&e?`${r}. Current layout: ${e}`:r,n.setAttribute(`aria-label`,$.compositionMode===`auto`&&e?`Auto: ${e}`:`Auto`)};window.addEventListener(`fossil-composition-change`,f),f(),e.#r=[v.initialSeed],e.#i=0;let p=()=>{n.disabled=e.#i===0},m=e=>{v.setSeed(e);let n=new URL(window.location.href);n.searchParams.set(`seed`,e),wu(n),t.setup(),t.render(),p()};u.forEach(({element:t,mode:n})=>{t.addEventListener(`click`,()=>{$.setCompositionMode(n);let t=new URL(window.location.href);t.searchParams.set(`comp`,n),wu(t),m(e.#r[e.#i])})}),n.addEventListener(`click`,()=>{e.#i!==0&&(e.#i--,m(e.#r[e.#i]))}),r.addEventListener(`click`,()=>{m(e.#r[e.#i])}),i.addEventListener(`click`,()=>{if(e.#i<e.#r.length-1){e.#i++,m(e.#r[e.#i]);return}let t=Math.round(Math.random()*2**32);e.#r.push(t),e.#i++,m(t)}),p(),n.title=`Previous seed (←)`,i.title=`Next seed (→)`,window.addEventListener(`keydown`,e=>{let t=e.target;e.defaultPrevented||e.repeat||e.ctrlKey||e.altKey||e.metaKey||e.shiftKey||t?.isContentEditable||t?.closest?.(`input, textarea, select`)||(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&(e.preventDefault(),(e.key===`ArrowLeft`?n:i).click())});let h=typeof t.renderLookPreset==`function`,g=()=>{a.forEach(({element:e,presetId:n})=>{let r=t.lookPresetId===n;e.classList.toggle(`active`,r),e.setAttribute(`aria-pressed`,String(r))})};a.forEach(({element:e,presetId:n})=>{e.hidden=!h,h&&e.addEventListener(`click`,()=>{t.renderLookPreset(n);let e=new URL(window.location.href);e.searchParams.set(`look`,n),wu(e),g()})}),h&&g();let _=()=>{o.forEach(({element:e,mode:t})=>{let n=$.chunkSamplingMode===t;e.classList.toggle(`active`,n),e.setAttribute(`aria-pressed`,String(n))})};o.forEach(({element:n,mode:r})=>{n.hidden=!h,h&&n.addEventListener(`click`,()=>{$.setChunkSamplingMode(r);let n=new URL(window.location.href);n.searchParams.set(`sampling`,r),wu(n),document.documentElement.dataset.samplingMode=r,_(),typeof t.setSamplingMode==`function`?t.setSamplingMode(r):m(e.#r[e.#i])})}),h&&_();let y=typeof t.setDispersionEnabled==`function`,b=()=>{let e=!!t.dispersionEnabled;s.classList.toggle(`active`,e),s.setAttribute(`aria-pressed`,String(e))};s.hidden=!y,y&&(s.addEventListener(`click`,()=>{t.setDispersionEnabled(!t.dispersionEnabled);let e=new URL(window.location.href);e.searchParams.set(`dispersion`,t.dispersionEnabled?`1`:`0`),wu(e),b()}),b());let x=typeof t.setSnapEnabled==`function`,S=()=>{let e=!!t.snapEnabled;c.classList.toggle(`active`,e),c.setAttribute(`aria-pressed`,String(e))};c.hidden=!x,x&&(c.addEventListener(`click`,()=>{t.setSnapEnabled(!t.snapEnabled);let e=new URL(window.location.href);e.searchParams.set(`snap`,t.snapEnabled?`1`:`0`),wu(e),S()}),S());let C=document.getElementById(`whiteBackgroundBtn`),w=typeof t.setWhiteBackgroundEnabled==`function`;if(C.hidden=!w,w){let e=()=>{let e=t.whiteBackgroundEnabled;C.classList.toggle(`active`,e),C.setAttribute(`aria-pressed`,String(e)),C.title=e?`Restore the dark exterior background`:`Match the exterior background to the light stone colour`};C.addEventListener(`click`,()=>{t.setWhiteBackgroundEnabled(!t.whiteBackgroundEnabled);let n=new URL(window.location.href);n.searchParams.set(`bright`,t.whiteBackgroundEnabled?`1`:`0`),wu(n),e()}),window.addEventListener(`fossil-background-change`,e),e()}let T=typeof t.setBackgroundEnabled==`function`&&typeof t.setRockVariant==`function`,E=()=>{l.forEach(({element:e,variant:n})=>{let r=t.backgroundEnabled?n===t.rockMode:n===null;e.classList.toggle(`active`,r),e.setAttribute(`aria-pressed`,String(r))})};l.forEach(({element:e,variant:n})=>{e.hidden=!T,T&&e.addEventListener(`click`,()=>{n&&t.rockMode!==n&&t.setRockVariant(n),t.backgroundEnabled!==!!n&&t.setBackgroundEnabled(!!n);let e=new URL(window.location.href);e.searchParams.set(`background`,t.backgroundEnabled?`1`:`0`),n&&e.searchParams.set(`rock`,n),wu(e),E()})}),T&&(window.addEventListener(`fossil-background-change`,E),E());let D=document.getElementById(`debugBtn`),O=document.getElementById(`colorsBtn`),k=()=>{D.classList.toggle(`active`,e.debug),D.setAttribute(`aria-pressed`,String(e.debug)),O.classList.toggle(`active`,e.debugColors),O.setAttribute(`aria-pressed`,String(e.debugColors))};D.addEventListener(`click`,()=>{e.debug=!e.debug,k(),typeof t.refreshDebugOverlays==`function`?t.refreshDebugOverlays():(v.setSeed(v.initialSeed),t.setup(),t.render()),sessionStorage.setItem(e.#e,e.debug)}),O.addEventListener(`click`,()=>{e.debugColors=!e.debugColors,k(),typeof t.refreshDebugOverlays==`function`?t.refreshDebugOverlays():(v.setSeed(v.initialSeed),t.setup(),t.render()),sessionStorage.setItem(e.#t,e.debugColors)}),k(),document.getElementById(`soloBtn`).addEventListener(`click`,()=>{e.debugSolo=!e.debugSolo,v.setSeed(v.initialSeed),t.setup(),t.render(),sessionStorage.setItem(e.#n,e.debugSolo)})}static setDebugText(e){document.getElementById(`debugText`).innerHTML=e}},Eu=class{static#e=new Map;static#t=`__default__`;static _fileAndLine(){let e=Error();Error.prepareStackTrace=(e,t)=>t;let t=e.stack;return Error.prepareStackTrace=void 0,t[2].getFileName().split(`/`).pop().split(`?t`)[0]+`:`+t[2].getLineNumber()}static#n(e=this.#t){return this.#e.has(e)||this.#e.set(e,{sum:0,prev:0,paused:!0}),this.#e.get(e)}static go(e=this.#t){let t=this.#n(e);t.prev=Date.now(),t.paused=!1}static pause(e=this.#t){let t=this.#n(e);t.paused||(t.paused=!0,t.sum+=Date.now()-t.prev)}static report(e=this.#t,t=void 0){(typeof e!=`string`||!this.#e.has(e))&&(t=e,e=this.#t);let n=this.#n(e);if(n.paused||this.pause(e),n.sum===0)return 0;let r=e===this.#t?`Pausable`:`Pausable [${e}]`;console.log(`${r} > ${Number(n.sum).toFixed(2)} ms ${t?`>>> `+t:``}`);let i=n.sum;return this.reset(e),i}static resetAll(){this.#e.clear()}static reset(e=this.#t){this.#e.has(e)&&this.#e.set(e,{sum:0,prev:0,paused:!0})}},Du=class{constructor(e,t=0){if(this.bounds={x:e.x||0,y:e.y||0,width:e.width,height:e.height},this.maxObjects=typeof e.maxObjects==`number`?e.maxObjects:10,this.minLevels=typeof e.minLevels==`number`?e.minLevels:0,this.maxLevels=typeof e.maxLevels==`number`?e.maxLevels:4,this.level=t,this.minLevels>this.maxLevels)throw Error(`minLevels (${this.minLevels}) must be less than maxLevels (${this.maxLevels})`);this.objects=[],this.nodes=[],this.level<this.minLevels&&this.split()}getIndex(e){return e.qtIndex(this.bounds)}split(){let e=this.level+1,t=this.bounds.width/2,n=this.bounds.height/2,r=this.bounds.x,i=this.bounds.y,a=[{x:r+t,y:i},{x:r,y:i},{x:r,y:i+n},{x:r+t,y:i+n}],o=this.constructor;for(let r=0;r<4;r++)this.nodes[r]=new o({x:a[r].x,y:a[r].y,width:t,height:n,maxObjects:this.maxObjects,minLevels:this.minLevels,maxLevels:this.maxLevels},e)}insert(e){if(this.nodes.length){let t=this.getIndex(e);for(let n=0;n<t.length;n++)this.nodes[t[n]].insert(e);return}if(this.objects.push(e),this.objects.length>this.maxObjects&&this.level<this.maxLevels){this.split();for(let e=0;e<this.objects.length;e++){let t=this.getIndex(this.objects[e]);for(let n=0;n<t.length;n++)this.nodes[t[n]].insert(this.objects[e])}this.objects=[]}}retrieve(e){let t=this.getIndex(e),n=this.objects;if(this.nodes.length)for(let r=0;r<t.length;r++)n=n.concat(this.nodes[t[r]].retrieve(e));return this.level===0?Array.from(new Set(n)):n}remove(e,t=!1){let n=this.objects.indexOf(e);n>-1&&this.objects.splice(n,1);for(let t=0;t<this.nodes.length;t++)this.nodes[t].remove(e);return this.level===0&&!t&&this.join(),n!==-1}update(e,t=!1){this.remove(e,t),this.insert(e)}join(){let e=Array.from(this.objects);for(let t=0;t<this.nodes.length;t++){let n=this.nodes[t].join();e=e.concat(n)}let t=Array.from(new Set(e));if(t.length<=this.maxObjects&&this.level>=this.minLevels){this.objects=t;for(let e=0;e<this.nodes.length;e++)this.nodes[e].objects=[];this.nodes=[]}return e}clear(){this.objects=[];for(let e=0;e<this.nodes.length;e++)this.nodes.length&&this.nodes[e].clear();this.level>=this.minLevels&&(this.nodes=[])}},Ou=class e{constructor(e){this.x=e.x,this.y=e.y,this.r=e.r,this.data=e.data}qtIndex(t){let n=[],r=t.width/2,i=t.height/2,a=t.x+r,o=t.y+i,s=[[a,t.y],[t.x,t.y],[t.x,o],[a,o]];for(let t=0;t<s.length;t++)e.intersectRect(this.x,this.y,this.r,s[t][0],s[t][1],s[t][0]+r,s[t][1]+i)&&n.push(t);return n}static intersectRect(e,t,n,r,i,a,o){let s=e-Math.max(r,Math.min(e,a)),c=t-Math.max(i,Math.min(t,o));return s*s+c*c<n*n}},ku=class{static rotateAround(e,t,n){let r=Z.degTorRad(n),i=Math.cos(r),a=Math.sin(r),o={x:e.x,y:e.y},s=t;return e.x=Z.precisionRound(i*(o.x-s.x)+a*(o.y-s.y)+s.x),e.y=Z.precisionRound(i*(o.y-s.y)-a*(o.x-s.x)+s.y),e}static rotateAroundPivot(e,t){let n=new U(0,1),r=t.dir.clone().normalize(),i=r.angleTo(n);i*=r.cross(n)>0?-1:1,e.rotateAround(t,i)}static rotate(e,t){let n=Z.degTorRad(t),r=Math.cos(n),i=Math.sin(n),a={x:e.x,y:e.y};return e.x=r*a.x+i*a.y,e.y=r*a.y-i*a.x,e}static jitter(e,t){e.x+=v.spread(t),e.y+=v.spread(t)}};function Au(e){let[t,n,r]=[e.qtree,e.circles,e.spec];t.clear(),n.forEach(e=>t.insert(e));let i=[];function a(e,t){let n=e.clone().sub(t).setLength(.001);i.push([e.clone().sub(n),t.clone().add(n)])}function o(e,t,n,r){function i(e,t,n){return(n.y-e.y)*(t.x-e.x)>(t.y-e.y)*(n.x-e.x)}return i(e,n,r)!=i(t,n,r)&&i(e,t,n)!=i(e,t,r)}let s=[...n];s=v.shuffle(s).splice(0,1);let c=r.worm.maxChainSegments;for(n.forEach(e=>{e.keepConnecting=!0,e.chain=0});s.length>0;)if(s.forEach(e=>{let n=t.retrieve(new Ru(e.x,e.y,e.r*3));n.splice(n.indexOf(e),1),n=n.filter(e=>!s.includes(e)),n=n.filter(e=>!e.parent),n=n.filter(e=>!e.child),n=n.filter(t=>e.parent!==t),e.distSqMap||=new Map,n.forEach(t=>{if(!e.distSqMap.has(t)){let n=e.distanceToSquared(t);e.distSqMap.set(t,n),t.distSqMap||=new Map,t.distSqMap.set(e,n)}});let r=e.r*e.r*3*3;n=n.filter(t=>e.distSqMap.get(t)<r);let l=-.25;if(n=n.filter(t=>{let n=e.pos.sub(t.pos).normalize();if(e.parent&&e.parent.pos.sub(e.pos).normalize().dot(n)<l)return!1;if(t.child){let e=t.pos.sub(t.child.pos).normalize();if(n.dot(e)<l)return!1}return!0}),n=n.filter(t=>{for(let n of i)if(o(e.pos,t.pos,n[0],n[1]))return!1;return!0}),n.sort((t,n)=>e.distSqMap.get(t)-e.distSqMap.get(n)),n.length>0){let t=n[0];if(e.child=t,t.parent=e,s.includes(t))throw Error(`wtf`);a(e.pos,t.pos),s.splice(s.indexOf(e),1),t.chain=e.chain+1,t.chain>=c?t.keepConnecting=!1:s.push(t),delete e.color}else e.color=new q(16736352),e.keepConnecting=!1,s.splice(s.indexOf(e),1)}),s.length===0){let e=n.filter(e=>e.keepConnecting&&!e.child);e.length>0&&(s=[e[0]])}let l=[];for(let e of n)if(!e.child&&!e.parent)for(let t=0;t<10;t++){let t=e.pos.setX(e.pos.x+e.r*3).rotateAround(e.pos,v.toMax(2*Math.PI)),n=!1;for(let r of i)if(o(e.pos,t,r[0],r[1])){n=!0;break}if(!n){e.r/=Z.sqrt2;let n=new Ru(t.x,t.y,e.r,e.text+`+`);n.parent=e,e.child=n,l.push(e,n);break}}else l.push(e);n.splice(0,n.length,...l),n.forEach(e=>{e.distSqMap=void 0,delete e.keepConnecting,delete e.chain})}function ju(e){e.forEach((t,n)=>{if(n<e.length-1){let r=e[n+1];t.child=r,r.parent=t}})}function Mu(e,t=[]){let n=v.range(7,16),r=$.sceneHalfSize.x*1.8,i=$.sceneHalfSize.y*1.8,a=v.range(1.5,2),o=Math.round(r/n/a),s=Math.round(i/n/a);for(let t=0;t<o;t++)for(let a=0;a<s;a++){let c=t/(o-1)*r-r/2+v.spread(n/1.3),l=a/(s-1)*i-i/2+v.spread(n/1.3);e.push(new Ru(c,l,n+v.spread(n/5),e.length))}switch(v.rangeInt(0,4)){case 0:v.shuffle(e);break;case 1:e.forEach(e=>e.x=-e.x);break;case 2:e.forEach(e=>ku.rotate(e,v.spread(180)));break;case 3:e.filter(e=>v.spread(1)>0).forEach(e=>ku.rotate(e,v.spread(180)))}let c=[];for(let n of e){let e=!1;for(let r of t)if(n.collidesWith(r)){e=!0;break}e||c.push(n)}e.splice(0,e.length,...c)}function Nu(e,t){if(t){let n=Z.degTorRad(t.bendDegrees),r=Array.from({length:65},(e,r)=>{let i=r/64-.5;return(Math.abs(n)<1e-6?new U(0,-i*t.length):new U(t.length/n*(1-Math.cos(i*n)),-t.length/n*Math.sin(i*n))).rotateAround(new U,Z.degTorRad(t.rotationDeg))}),i=new Sa().setFromPoints(r),a=Math.max(2,Math.round(i.getLength()/t.radius/Z.sqrt2));e.push(...i.getSpacedPoints(a).map(e=>new Ru(e.x,e.y,t.radius)));return}let n=v.range(7,16),r=v.range($.sceneHalfSize.y,$.sceneHalfSize.y*1.5),i=[new U(0,r/2),new U(0,-r/2)];i.forEach((e,t)=>{e.rotateAround(new U(0,0),Z.degTorRad(v.spread(40)))});let a=new Sa().setFromPoints(i);i=a.getSpacedPoints(a.getLength()/n/Z.sqrt2),e.push(...i.map(e=>new Ru(e.x,e.y,n)))}function Pu(e,t=.2,n=Lu.STEP_LEN){let[r,i]=[e.circles,e.colliders],a=e.collisionGrid??e.qtree;e.collisionGrid?a.rebuild(r,i,Math.max(1.01,1-t),n):(a.clear(),r.forEach(e=>a.insert(e)),i.forEach(e=>a.insert(e)));let o=[...r],s=0,c=new U,l=new U;return o.forEach(e=>{let r=a.retrieve(e).filter(n=>{if(e===n)return!1;let r=e.distanceToSquared(n),i=1-t;e.larva!==void 0&&e.larva===n.larva&&(i=1.01);let a=(e.r+n.r)*i;return r<a*a});if(e instanceof zu&&e.noColisionWith.size&&(r=r.filter(t=>!e.noColisionWith.has(t))),e.larva?.usesNamedBend&&(e.bendContact=r.length>0),r.length>0){c.set(0,0),r.forEach(t=>{l.subVectors(e.pos,t.pos),c.add(l)});let t=e.larva?.mobility??1;e.add(c.setLength(n*t))}else s++}),s/o.length}var Fu=1e8;function Iu(e){for(let t of e)t.x=Math.round(t.x*Fu)/Fu,t.y=Math.round(t.y*Fu)/Fu}var Lu=class e{static STEP_LEN=.2;static COLLISION_SEARCH=`grid`;constructor(e){this.iter=0,this.circles=[];let t={w:$.sceneHalfSize.x*3,h:$.sceneHalfSize.y*3};this.qtree=new Du({width:t.w,height:t.h,x:-t.w/2,y:-t.h/2}),this.spec=e,this.single,this.isSpawned=!1,this.colliders=[]}spawn({single:e=!1,inputColliders:t=[]}){this.single=e,this.isSpawned=!0,e?Nu(this.circles,this.spec.single):(this.colliders.push(...t),Mu(this.circles,t)),Iu(this.circles)}makeLarvas(){let e=[];this.circles.filter(e=>!e.parent).forEach((t,n)=>{let r=[t],i=t;for(;i.child;)i=i.child,r.push(i);let a=e.at(-1)?.circles.at(-1).id||-1,o=this.single?this.spec:this.spec.clone(),s=new Hu(r,a+1,o,this.single);s.useThisLarva&&e.push(s)}),this.larvas=e,this.circles=e.flatMap(e=>e.circles)}moveAllLarvasToCenterPass(){let t=this.circles,[n,r,i,a]=[0,0,0,0];t.forEach(e=>{n=Math.min(n,e.x-e.r),r=Math.max(r,e.x+e.r),a=Math.min(a,e.y-e.r),i=Math.max(i,e.y+e.r)});let o=new U(-(r+n),-(i+a));o.length()>e.STEP_LEN/4&&(o.divideScalar(1400),t.forEach(e=>e.constraintsDeltas.push(o)))}nextIter(e=1){let[t,n]=[200,4e3];for(let r=0;r<e;r++){this.iter++;let e=this.iter;if(e<t)Pu(this)==1&&(this.iter=t-1);else if(e==t)this.single?ju(this.circles):Au(this),this.makeLarvas(),this.circles=this.circles.map(e=>({value:e,sort:v.random()})).sort((e,t)=>e.sort-t.sort).map(({value:e})=>e);else if(e>t&&e<n){this.moveAllLarvasToCenterPass(),this.larvas?.forEach(e=>e.solveConstraintsPass()),Pu(this,-.1),this.larvas.forEach(e=>e.selfSeparationPass()),this.larvas.forEach(e=>e.checkSatisfaction());let e=this.single?1:.3;(this.larvas.filter(e=>e.isSatisfied).length/this.larvas.length>=e||!this.larvas.length)&&(console.log(`Solving cut short at iter:`,this.iter,`> ${(this.iter/n*100).toFixed(2)}%`),this.iter=n-1)}else return this.doneSolving=!0,!0;Iu(this.circles)}return!1}getCircles(){return this.circles}},Ru=class extends U{constructor(e,t,n,r=``){super(e,t),this.r=n,this.text=r,this.child,this.parent,this.qtIndex=Ou.prototype.qtIndex}get pos(){return new U(this.x,this.y)}collidesWith(e){return this.pos.distanceToSquared(e.pos)<(this.r+e.r)*(this.r+e.r)}},zu=class extends Ru{constructor(e,t,n,r=NaN,i=NaN,a=void 0,{id:o=void 0}={}){if(super(e,t,n),![r,i,a].some(e=>!!e))throw Error(`LarvaCircle requires at, atLength and larva`);this.larva=a,this.id=o,this.at=r,this.atLength=i,this.constraintsDeltas=[],this.isJoint=!1,this.distSqMap,this.noColisionWith=new Set,this.child,this.parent,this.pinPos}set id(e){if(!isNaN(e)&&typeof e!=`number`)throw Error(`id must be a number or NaN`);this._id=e}get id(){return this._id}integrateConstraints(){if(this.pinPos){let e=this.pinPos.clone().sub(this.pos),t=Lu.STEP_LEN/4;e.lengthSq()>=t*t&&(e.setLength(Math.min(e.length(),this.pinPos._strength*Lu.STEP_LEN)),this.constraintsDeltas.push(e))}if(this.constraintsDeltas.length==0)return;let e=new U;this.constraintsDeltas.forEach(t=>e.add(t)),e.divideScalar(this.constraintsDeltas.length),e.multiplyScalar(this.larva?.mobility??1),this.add(e),this.constraintsDeltas=[]}pin({pos:e=void 0,x:t=void 0,y:n=void 0,relative:r=!1,strength:i=1}={}){let a=e||this.pos;r?a=e||new U(t||0,n||0).add(this.pos):(t||n)&&(a=new U(t||0,n||0)),this.pinPos=a,this.pinPos._strength=i}collidesWith(e,t=!0){return t&&this.noColisionWith.has(e)?!1:this.pos.distanceToSquared(e.pos)<(this.r+e.r)*(this.r+e.r)}},Bu=class{constructor(e,t,n,r=!1){this.c1=e,this.c2=t,this.c2.bendingEdge=this,this.dampingMultiplier=1,this.larva=n,this.isInLarvaFirstHalf=r,this.isMiddleJoint=!1,this.next,this.prev,this.targetAngleDeg=0,this.targetLenSq,this.updateLenSq(),this.lastIterBendDeviance=0,this.lastIterLengthDeviance=0}updateLenSq(){this.targetLenSq=this.c1.distanceToSquared(this.c2)}lengthPass(){let e=this.c1.distanceToSquared(this.c2),t=this.targetLenSq/e;if(this.lastIterLengthDeviance=1-t,t<1.004&&t>.996)return!0;let n=(t+3)/4,r=this.c1.pos.add(this.c2.pos).divideScalar(2),i=r.clone().sub(this.c1.pos).multiplyScalar(n),a=r.clone().sub(i),o=r.clone().sub(i.clone().negate());return this.c1.constraintsDeltas.push(a.sub(this.c1.pos)),this.c2.constraintsDeltas.push(o.sub(this.c2.pos)),!1}bendPass(){let e=this.larva.bendDamping*this.dampingMultiplier,t=Z.degTorRad(this.targetAngleDeg);this.isInLarvaFirstHalf&&(t*=-1);let n=this.prev.dirNorm,r=this.dirNorm;this.isMiddleJoint&&n.negate();let i=n.angleTo(r);if(n.cross(r)>0&&(i*=-1),i+=t,this.lastIterBendDeviance=i,i/=e,this.larva.usesNamedBend){let e=this.c1.distanceTo(this.c2),t=Lu.STEP_LEN*Hu.NAMED_BEND.maxStepRatio,n=e>0?2*Math.asin(Math.min(1,t/(2*e))):0;i=Math.max(-n,Math.min(n,i))}let a=this.c2.pos.rotateAround(this.c1.pos,i).sub(this.c2.pos);this.c2.constraintsDeltas.push(a)}get dirNorm(){return this.c1.pos.sub(this.c2.pos).normalize()}get bendErrorDeg(){let e=this.prev.dirNorm,t=this.dirNorm;this.isMiddleJoint&&e.negate();let n=e.angleTo(t);return e.cross(t)>0&&(n*=-1),Z.radToDeg(n)+this.targetAngleDeg*(this.isInLarvaFirstHalf?-1:1)}toString(){return this.c1.text+`<>`+this.c2.text}},Vu=new Set([`straight`,`arc`,`s`,`coil`,`wave`,`irregular`]),Hu=class e{static TIP_PROTECTED_JOINTS=2;static TIP_MIN_ANGLE_DEG=120;static TIP_MIN_PROTRUSION_RATIO=.5;static TIP_PROTECTION_PASSES=2;static TIP_SOLVER_MARGIN_DEG=3;static NAMED_BEND={singleDamping:20,packedDamping:40,contactDampingMax:4,contactDampingRise:.08,recovery:.04,maxStepRatio:.25,freeAngleToleranceDeg:2.5};get usesNamedBend(){return Vu.has(this.spec.larva.bendProfile)}constructor(t,n=0,r,i=!1){this.spec=r;let a=t.reduce((e,t)=>e+t.r,0)/t.length;t.length==2&&t[0].collidesWith(t[1])&&(a/=2),a=Math.min(a,(()=>{let e=0;for(let n=0;n<t.length-1;n++)e+=t[n].pos.distanceTo(t[n+1].pos);return e})()/4);let o=this,s=new Sa().setFromPoints(t);s=new Sa().setFromPoints(s.getSpacedPoints(Math.max(2,s.getLength())));let c=r.larva.widthRamp;{let e=[],t=s.getPointAt(0),n=c.at(0)*a,r=new zu(t.x,t.y,n,0,0,o);e.push(r),t=s.getPointAt(1),n=c.at(1)*a,r=new zu(t.x,t.y,n,1,s.getLength(),o),e.push(r);function i(t){let n=t.sort((e,t)=>e.at-t.at)[0],r=t.sort((e,t)=>e.at-t.at)[1],l=r.atLength-n.atLength-n.r-r.r,u=n.atLength+n.r+l/2,d=u/s.getLength(),f=s.getPointAt(d),p=c.at(d)*a;if(l>-p*1.2){let t=new zu(f.x,f.y,p,d,u,o);e.push(t),i([n,t]),i([r,t])}}i([e[0],e[1]]),this.circles=e}for(let e=0,t=r.larva.numChunks;e<=t;e++){let n=e/t,r=this.circles.reduce((e,t)=>Math.abs(n-t.at)<Math.abs(n-e.at)?t:e);r.isJoint=!0}if(this.useThisLarva=!0,this.circles.length<=2){console.warn(`larva excluded cause too short`),this.useThisLarva=!1;return}this.circles.sort((e,t)=>e.at-t.at).forEach((e,t)=>{e.id=Number(n+t),e.text=e.id}),this.circles.forEach((e,t,n)=>{if(t<n.length-1){let r=n[t+1];e.child=r,r.parent=e}});let l=new q(v.random()*16777215),u=l.getHSL({},nt);l.setHSL(u.h,u.s,.2+.22*u.l,nt),this.circles.forEach(e=>{e.color=l,e.origColor=l}),this.avgRad=this.circles.reduce((e,t)=>e+t.r,0)/this.circles.length,this.setNoCollisionWithNeighbors(),this.bendDamping=100,this.isSingle=i,this.centerAsGroup=!1,i&&(this.bendDamping=50),this.usesNamedBend&&(this.bendDamping=i?e.NAMED_BEND.singleDamping:e.NAMED_BEND.packedDamping),this.circles.forEach(e=>{if(e.larva==null)throw Error(`larva not set`)}),this.buildEdges(),this.usesNamedBend&&this.initializeNamedBendPose(),this.buildTipProtectionConstraints(),this.buildSelfSeparationPairs()}initializeNamedBendPose(){let e=this.circles,t=e.reduce((e,t)=>e.add(t),new U).divideScalar(e.length),n=new Map(this.edges.map(e=>[e.c1,e.targetAngleDeg])),r=e.slice(1).map((t,n)=>t.distanceTo(e[n])),i=e[1].pos.sub(e[0]).normalize(),a=new U;e[0].copy(a);for(let t=1;t<e.length;t++)t>1&&i.rotateAround(a,Z.degTorRad(n.get(e[t-1]))),e[t].copy(e[t-1]).addScaledVector(i,r[t-1]);let o=e.reduce((e,t)=>e.add(t),new U).divideScalar(e.length),s=t.sub(o);e.forEach(e=>e.add(s))}getEdgeBetween(e,t){return this.edges.find(n=>n.c1===e&&n.c2===t||n.c1===t&&n.c2===e)}buildTipProtectionConstraints(){let t=this.circles,n=t.length-1,r=180-e.TIP_MIN_ANGLE_DEG;this.tipEndpointConstraints=[];for(let[r,i]of[[0,1],[n,n-1]]){let n=t[r],a=t[i],o=this.getEdgeBetween(n,a),s=Math.abs(n.r-a.r)+Math.min(n.r,a.r)*e.TIP_MIN_PROTRUSION_RATIO;o.targetLenSq=Math.max(o.targetLenSq,s*s);let c=n.pos.sub(a).normalize();c.lengthSq()===0&&c.set(r===0?-1:1,0),this.tipEndpointConstraints.push({end:n,neighbor:a,minDistance:s,restDirection:c})}this.tipProtectionConstraints=[];let i=new Set,a=[];for(let t=0;t<e.TIP_PROTECTED_JOINTS&&!(t+2>n);t++)a.push([t,t+1,t+2]),a.push([n-t,n-t-1,n-t-2]);for(let[e,n,o]of a){let a=t[e],s=t[n],c=t[o],l=this.edges.find(e=>e.c1===s&&e.c2===a);l&&(l.targetAngleDeg=Math.max(-r,Math.min(r,l.targetAngleDeg)));let u=[e,o].sort((e,t)=>e-t).join(`:`);if(i.has(u))continue;i.add(u);let d=c.pos.sub(s),f=a.pos.sub(s),p=d.cross(f)<0?-1:1,m=e<n?t.slice(0,n):t.slice(n+1);this.tipProtectionConstraints.push({outer:a,pivot:s,inner:c,outerCircles:m,restSide:p})}}tipProtectionPass(){let t=Z.degTorRad(e.TIP_MIN_ANGLE_DEG+e.TIP_SOLVER_MARGIN_DEG),n=this.mobility??1;for(let{end:e,neighbor:t,minDistance:r,restDirection:i}of this.tipEndpointConstraints){let a=e.x-t.x,o=e.y-t.y,s=Math.hypot(a,o);if(s>=r)continue;s>1e-8?(a/=s,o/=s):(a=i.x,o=i.y);let c=Math.min(r-s,Lu.STEP_LEN)*n;e.x+=a*c,e.y+=o*c}for(let{outer:e,pivot:r,inner:i,outerCircles:a,restSide:o}of this.tipProtectionConstraints){let s=i.pos.sub(r),c=e.pos.sub(r);if(s.lengthSq()<1e-12||c.lengthSq()<1e-12)continue;let l=s.angleTo(c);if(l>=t)continue;let u=s.cross(c),d=Math.abs(u)>1e-8?Math.sign(u):o,f=Math.max(...a.map(e=>e.distanceTo(r))),p=Lu.STEP_LEN/Math.max(f,1e-8),m=Math.min(t-l,p)*n;a.forEach(e=>e.rotateAround(r,m*d))}}buildSelfSeparationPairs(){this.selfSeparationPairs=[];for(let e=0;e<this.circles.length;e++)for(let t=e+1;t<this.circles.length;t++){let n=this.circles[e],r=this.circles[t],i=Math.min(.8*Math.abs(r.atLength-n.atLength),n.r+r.r),a=r.pos.sub(n).normalize();a.lengthSq()===0&&a.set(1,0),this.selfSeparationPairs.push({a:n,b:r,minDistance:i,restDirection:a})}}selfSeparationPass(e=2){let t=this.mobility??1;for(let n=0;n<e;n++)for(let{a:e,b:n,minDistance:r,restDirection:i}of this.selfSeparationPairs){let a=n.x-e.x,o=n.y-e.y,s=a*a+o*o;if(s>=r*r)continue;this.usesNamedBend&&(e.bendContact=!0,n.bendContact=!0);let c=Math.sqrt(s);c>1e-8?(a/=c,o/=c):(a=i.x,o=i.y);let l=Math.min((r-c)*.5,Lu.STEP_LEN)*t;e.x-=a*l,e.y-=o*l,n.x+=a*l,n.y+=o*l}}setNoCollisionWithNeighbors(){this.circles.forEach(e=>{let t=this.usesNamedBend?1/.8:1,n=0,r=e.parent;for(;r;)n+=r.child.pos.distanceTo(r.pos),n<(e.r+r.r)*t?(e.noColisionWith.add(r),r=r.parent):r=void 0;n=0;let i=e.child;for(;i;)n+=i.parent.pos.distanceTo(i.pos),n<(e.r+i.r)*t?(e.noColisionWith.add(i),i=i.child):i=void 0})}buildEdges(){let e=[];this.edges=e;let t=this.circles.at(this.circles.length/2),n=t.parent,r=t.child,i,a;for(;n||r;){if(n){let t=new Bu(n.child,n,this,!0);e.push(t),i&&(t.prev=i,i.next=t),i=t,n=n.parent}if(r){let t=new Bu(r.parent,r,this);e.push(t),a&&(t.prev=a,a.next=t),a=t,r=r.child}}e[0].prev=e[1],e[0].isMiddleJoint=!0,e[1].prev=e[0],e[1].isMiddleJoint=!0;let o=this.circles.filter(e=>e.isJoint).length,s=this.circles.length-o,c=this.spec.larva.bendiness,l=s*c,u=1/(o-1+l);if(this.usesNamedBend){let t=new Map;for(let n of e){let e=n.c1,r=(e.child.at-e.parent.at)*.5;t.set(e,r*(e.isJoint?1:c))}let n=[...t.values()].reduce((e,t)=>e+t,0);for(let r of e)r.targetAngleDeg=n>0?this.spec.larva.bendRamp.at(r.c1.at)*t.get(r.c1)/n:0;return}e.forEach((e,t)=>{let n=e.c2.at;e.targetAngleDeg=e.c1.isJoint?this.spec.larva.bendRamp.at(n)*u:this.spec.larva.bendRamp.at(n)*c*u})}solveConstraintsPass(t=1){if(this.packingShape){this.circles.forEach(e=>e.integrateConstraints()),this.packingLengthPass();return}for(let n=0;n<t;n++){this.edges.forEach(e=>{e.lengthPass(),e.bendPass()}),this.isSingle&&this.applyCounterSpin(),this.circles.forEach(e=>e.integrateConstraints()),this.selfIntersectionBendDampenPass();for(let t=0;t<e.TIP_PROTECTION_PASSES;t++)this.tipProtectionPass()}this.moveToCenterPass(),this.circles.forEach(e=>e.integrateConstraints())}capturePackingShape(){let e=this.circles.reduce((e,t)=>e.add(t),new U).divideScalar(this.circles.length);this.packingShape=this.circles.map(t=>t.pos.sub(e)),this.packingLengths=this.edges.map(e=>e.c1.distanceTo(e.c2))}packingLengthPass(){for(let e=0;e<this.spec.composition.groupSettings.lengthPasses;e++)this.edges.forEach((e,t)=>{let n=e.c2.x-e.c1.x,r=e.c2.y-e.c1.y,i=Math.hypot(n,r);if(!i)return;let a=(i-this.packingLengths[t])/(2*i);e.c1.x+=n*a,e.c1.y+=r*a,e.c2.x-=n*a,e.c2.y-=r*a})}restorePackingShape(){if(!this.packingShape)return;let e=this.circles.reduce((e,t)=>e.add(t),new U).divideScalar(this.circles.length),t=0,n=0;for(let r=0;r<this.circles.length;r++){let i=this.packingShape[r],a=this.circles[r].x-e.x,o=this.circles[r].y-e.y;t+=i.x*a+i.y*o,n+=i.x*o-i.y*a}let r=Math.atan2(n,t),i=Math.cos(r),a=Math.sin(r);for(let t=0;t<this.circles.length;t++){let n=this.packingShape[t],r=this.circles[t],o=this.spec.composition.groupSettings,s=e.x+n.x*i-n.y*a-r.x,c=e.y+n.x*a+n.y*i-r.y,l=Math.hypot(s,c),u=Math.max(o.shapeRetention,l?1-this.avgRad*o.maxShapeDeformation/l:0);r.x+=s*u,r.y+=c*u}this.packingLengthPass()}checkSatisfaction(){this.isSatisfied=!1;let t=this.circles.map(e=>e.pos);if(t.length==this.lastTimePositions?.length){let n=0;t.forEach((e,t)=>{let r=this.lastTimePositions[t],i=Math.abs(e.x-r.x),a=Math.abs(e.y-r.y);n=Math.max(i,a,n)}),this.stableIterations=n<.001?(this.stableIterations||0)+1:0,this.isSatisfied=this.stableIterations>=10,this.isSatisfied&&this.usesNamedBend&&!this.packingShape&&(this.isSatisfied=this.edges.every(t=>t.c1.bendContact||t.c2.bendContact||t.prev.c1.bendContact||t.prev.c2.bendContact||Math.abs(t.bendErrorDeg)<=e.NAMED_BEND.freeAngleToleranceDeg))}else this.stableIterations=0;this.lastTimePositions=t}applyCounterSpin(){if(this.usesNamedBend)return;let e=this.edges.filter(e=>e.isInLarvaFirstHalf);e=e.slice(0,Math.ceil(e.length/2));let t=e.flatMap(e=>e.c2.constraintsDeltas).reduce((e,t)=>e.add(t),new U).divideScalar(e.length),n=this.edges.filter(e=>!e.isInLarvaFirstHalf);n=n.slice(0,Math.ceil(n.length/2));let r=n.flatMap(e=>e.c2.constraintsDeltas).reduce((e,t)=>e.add(t),new U).divideScalar(n.length),[i,a]=[t.length(),r.length()];Math.max(i,a)<.001||t.dot(r.clone())<0&&(t.negate().divideScalar(1.7),r.negate().divideScalar(1.7),this.bendDamping+=1,e.forEach(e=>e.c2.constraintsDeltas.push(t)),n.forEach(e=>e.c2.constraintsDeltas.push(r)))}selfIntersectionBendDampenPass(){let t=this.circles.at(this.circles.length/2),n=new Set;for(let e of this.circles)for(let r of this.circles)if(e!=r&&e.collidesWith(r)){if(e.id===void 0||r.id===void 0)throw Error(`something went wrong in selfIntersectionBendDampenPass()`);let i=Math.abs(e.id-t.id)<Math.abs(r.id-t.id)?r:e;n.add(i)}if(this.usesNamedBend){let t=e.NAMED_BEND;for(let e of this.edges)e.dampingMultiplier=n.has(e.c2)||e.c1.bendContact||e.c2.bendContact?Math.min(t.contactDampingMax,e.dampingMultiplier+t.contactDampingRise):1+(e.dampingMultiplier-1)*(1-t.recovery);return}n.forEach(e=>{e.bendingEdge.dampingMultiplier*=1.005})}moveToCenterPass(){if(this.centerAsGroup)return;let e=this.circles,[t,n,r,i]=[0,0,0,0];e.forEach(e=>{t=Math.min(t,e.x-e.r),n=Math.max(n,e.x+e.r),i=Math.min(i,e.y-e.r),r=Math.max(r,e.y+e.r)});let a=new U(-(n+t),-(r+i));a.length()>Lu.STEP_LEN/4&&(this.isSingle&&(a.divideScalar(300),e.forEach(e=>e.constraintsDeltas.push(a))),this.isSingle||(a.divideScalar(15e3*(1/this.avgRad)),e.forEach(e=>e.constraintsDeltas.push(a))))}pinRandomCircles(){let e=v.shuffle([...this.circles]),t=v.rangeInt(1,Math.ceil(e.length/4));for(let n=0;n<t;n++)e.splice(0,1)[0].pin({x:v.spread(40),y:v.spread(60),relative:!0,strength:.3})}};function Uu(...e){let t,n;if(e.length===2)t=e[0],n=e[1];else if(e[0]?.length===2)t=e[0][0],n=e[0][1];else if(!isNaN(e[0]?.x)&&!isNaN(e[0]?.y))t=e[0].x,n=e[0].y;else throw Error(`xy() accepts following patterns:  x, y; [x, y]; {x, y}; *.x, *.y`);return{x:t,y:n}}var Wu=class{constructor(e){if(this.points,e?.length<3)throw Error(`Polygon must have at least 3 points`);this.points=e.map(e=>Uu(e)),this.left=1/0,this.right=-1/0,this.top=-1/0,this.bottom=1/0;for(let e of this.points)this.left=Math.min(this.left,e.x),this.right=Math.max(this.right,e.x),this.top=Math.max(this.top,e.y),this.bottom=Math.min(this.bottom,e.y);this.minSize=Math.min(this.right-this.left,this.top-this.bottom)}pointWithinBounds(e){return e=Uu(e),e.x>=this.left&&e.x<=this.right&&e.y>=this.bottom&&e.y<=this.top}pointInsidePolygon(e){if(e=Uu(e),e.x<this.left||e.x>this.right||e.y<this.bottom||e.y>this.top)return!1;let t=this.points,n=t.length,r=!1,i,a,o,s;i=t[n-1].x,o=t[n-1].y;for(let c=0;c<n;++c)a=t[c].x,s=t[c].y,e.y<o!=e.y<s&&e.x<(a-i)*(e.y-o)/(s-o)+i&&(r=!r),i=a,o=s;return r}},Gu=class extends U{constructor(e,t,n=.5,r=void 0){super(e,t),this.dir=r?r.clone().normalize():new U(0,1),this.at=n}setDirTarget(e){this.dir=e.clone().sub(this).normalize()}getDots(e){let t=[];return t.push(new ou(this.x,this.y,0,e||`#ff0000`)),[new U(this.x,this.y+2),new U(this.x-.5,this.y+1.5),new U(this.x+.5,this.y+1.5)].forEach(n=>{ku.rotateAroundPivot(n,this),t.push(new ou(n.x,n.y,0,e||`#00ff00`))}),t}},Ku=class{constructor(e,t,n,{bend:r}={}){this.pivot=e,this.spec=t,this.length=n,this.bend=r||Z.fit01to11(e.at)*t.arc.bend,this.rebuild()}noise(e=1,t=1,n=0){let r=1/this.points.length*t;this.points.forEach((t,i)=>{t.y+=v.noise1d((i+n)*r)*e})}rotateAllPoints(){this.points.forEach(e=>ku.rotateAroundPivot(e,this.pivot))}bendAllPoints(e){e||=this.bend;let t;this.points.forEach((n,r,i)=>{let a=e/2*Z.fit01(r/(i.length-1),1,-1),o=n.clone().rotateAround(this.pivot,Z.degTorRad(a));r===0&&(t=o.y-n.y),n.y=o.y}),this.points.forEach(e=>e.y-=t)}buildCollisionHalfLines(){let e=new ya(this.points),t=Math.max(2,Math.round(e.getLength()/2));t=t-t%2+1;let n=e.getSpacedPoints(t-1),r=n.slice(0,Math.floor(n.length/2)+1),i=n.slice(Math.floor(n.length/2)).reverse();this.leftCollisionSegments=[],this.rightCollisionSegments=[];for(let e=0;e<r.length-1;e++)this.leftCollisionSegments.push([r[e],r[e+1]]),this.rightCollisionSegments.push([i[e],i[e+1]])}collidesWith(e){let t=!1,n=!1;if(e===this)return[!1,!1];for(let r of[...e.leftCollisionSegments,...e.rightCollisionSegments]){for(let e of this.leftCollisionSegments)if(Z.linesIntersect(e[0],e[1],r[0],r[1])){t=!0;break}for(let e of this.rightCollisionSegments)if(Z.linesIntersect(e[0],e[1],r[0],r[1])){n=!0;break}if(t&&n)break}return[t,n]}rebuild(e){e||=this.spec.arc.numPoints;let t=this.pivot,n=this.length,r=new ya([new U(t.x-n/2,t.y),new U(t.x+n/2,t.y)]);this.points=r.getSpacedPoints(e-1),this.startPt=this.points[0],this.endPt=this.points.at(-1),this.bendAllPoints(),this.rotateAllPoints(),this.buildCollisionHalfLines(),this.perpendicular=this.endPt.clone().sub(this.startPt).normalize()}getHeight(){let e=this.points.at(this.points.length/2).y;return Math.abs(this.startPt.y-e)}getDots(){let e=[];return this.points.forEach(t=>{e.push(new ou(t.x,t.y,2,`red`,!0))}),e}},qu=class{constructor(e){this.points=e;let t=(n,r)=>{if(!n.length)return null;let i=r===0?`x`:`y`;n.sort((t,n)=>e[t][i]-e[n][i]||t-n);let a=n.length>>1,o={index:n[a],axis:r,left:t(n.slice(0,a),1-r),right:t(n.slice(a+1),1-r)},s=e[o.index];return o.minX=Math.min(s.x,o.left?.minX??1/0,o.right?.minX??1/0),o.maxX=Math.max(s.x,o.left?.maxX??-1/0,o.right?.maxX??-1/0),o.minY=Math.min(s.y,o.left?.minY??1/0,o.right?.minY??1/0),o.maxY=Math.max(s.y,o.left?.maxY??-1/0,o.right?.maxY??-1/0),o};this.root=t(e.map((e,t)=>t),0)}nearest(e){return this.bestDistance=1/0,this.bestIndex=1/0,this.visit(this.root,e),this.points[this.bestIndex]}visit(e,t){if(!e)return;let n=Math.max(e.minX-t.x,0,t.x-e.maxX),r=Math.max(e.minY-t.y,0,t.y-e.maxY);if(n*n+r*r>this.bestDistance)return;let i=this.points[e.index],a=t.x-i.x,o=t.y-i.y,s=a*a+o*o;(s<this.bestDistance||s===this.bestDistance&&e.index<this.bestIndex)&&(this.bestDistance=s,this.bestIndex=e.index);let c=e.axis===0?a:o;this.visit(c<0?e.left:e.right,t),c*c<=this.bestDistance&&this.visit(c<0?e.right:e.left,t)}},Ju=class{constructor(e,t,n=Math.max(32,Math.ceil(e.getLength()*4))){this.positions=new Float64Array((n+1)*2),this.lengths=new Float64Array(n+1);let r=new U;for(let i=0;i<=n;i++){let a=i/n,o=e.getPointAt(a).add(t(a));this.positions[i*2]=o.x,this.positions[i*2+1]=o.y,i&&(this.lengths[i]=this.lengths[i-1]+o.distanceTo(r)),r.copy(o)}this.length=this.lengths[n]}getPointAt(e,t=new U){let n=this.positions;if(e<=0||this.length===0)return t.set(n[0],n[1]);if(e>=1)return t.set(n[n.length-2],n[n.length-1]);let r=e*this.length,i=this.#e(e),a=i-1,o=this.lengths[i]-this.lengths[a],s=o>0?(r-this.lengths[a])/o:0;return t.set(n[a*2]+(n[i*2]-n[a*2])*s,n[a*2+1]+(n[i*2+1]-n[a*2+1])*s)}getTangentAt(e,t=new U){let n=this.#e(e),r=n-1,i=this.positions;return t.set(i[n*2]-i[r*2],i[n*2+1]-i[r*2+1]).normalize()}#e(e){if(e<=0||this.length===0)return 1;if(e>=1)return this.lengths.length-1;let t=e*this.length,n=0,r=this.lengths.length-1;for(;n+1<r;){let e=n+r>>>1;this.lengths[e]<t?n=e:r=e}return r}};function Yu(e){return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),(e^e>>>15)>>>0}function Xu(e,t,n,r,i){let a=(e^i)>>>0;return a^=Math.imul(t+1,2654435761),a^=Math.imul(n+1,2246822507),a^=Math.imul(r+1,3266489909),Yu(a)/4294967296}function Zu(e,t){let n=.5-.5*Math.cos(Math.PI*e);return H.lerp(e,n,t)}function Qu(e,t){return 1-t+t*Math.PI*.5*Math.sin(Math.PI*e)}var $u=class{constructor(e,t,n){this.arcFirst=e[0],this.arcLast=e.at(-1),this.arcs=e,this.spec=t,this.idx=n,this.chunkRamp=t.chunks[n].ramp,this.chunkRadiusRamp=new su([this.arcs[0],this.arcs.at(-1)].map(e=>e.length/2)),this.leftDist=this.arcFirst.startPt.distanceTo(this.arcLast.startPt),this.rightDist=this.arcFirst.endPt.distanceTo(this.arcLast.endPt),this.perpendicularDir=this.arcFirst.endPt.clone().sub(this.arcFirst.startPt).add(this.arcLast.endPt.clone().sub(this.arcLast.startPt)).normalize(),this.leftPerpendicularDir=this.arcLast.startPt.clone().sub(this.arcFirst.startPt).rotateAround(this.arcFirst.startPt,-Math.PI/2).normalize(),this.rightPerpendicularDir=this.arcLast.endPt.clone().sub(this.arcFirst.endPt).rotateAround(this.arcFirst.endPt,-Math.PI/2).normalize(),this.points=[],this.stripCurves=new Map,this.bentStrips=new Map}getBendAdjustmentVector(e,t){let n=Z.fit01to11(e),r=this.chunkRadiusRamp.at(t),i=this.chunkRamp.at(t),a=r;return r=Math.min(r,n<0?this.leftDist:this.rightDist),i<0&&(r=H.lerp(r,a,this.spec.chunks[this.idx].pinchByRadius??0)),r*=n,r*=i,this.perpendicularDir.clone().setLength(r)}getCompositionPoints(){let e=[];for(let t=0;t<=8;t++){let n=t/8,r=this.getStripCurve(n);for(let t=0;t<=32;t++){let i=t/32;e.push(r.getPointAt(i).add(this.getBendAdjustmentVector(n,i)))}}return e}getStripCurve(e){if(this.stripCurves.has(e))return this.stripCurves.get(e);this.arcCurves??=this.arcs.map(e=>new ya(e.points));let t=this.arcCurves.map(t=>t.getPointAt(e)),n;return t.length===2?n=new ha(t[0],t[1]):(n=new ya(t),t=n.getSpacedPoints(Math.max(t.length*2-2,1)),Z.smoothPoints(t,2,2),n=new ya(t)),this.stripCurves.set(e,n),n}getBentStrip(e){return this.bentStrips.has(e)||this.bentStrips.set(e,new Ju(this.getStripCurve(e),t=>this.getBendAdjustmentVector(e,t))),this.bentStrips.get(e)}build(){if(this.points=[],this.spec.chunks.sampling?.profile===`anisotropic`){this.buildAnisotropic();return}this.buildLegacy()}buildLegacy(){let e=this.spec,t=e.chunks.density;e.chunks.useLocalDensity&&(t*=this.spec.chunks[this.idx].density);let n=Math.max(...this.arcs.map(e=>e.length)),r=Math.max(2,Math.round(n*t*1.5)),i=[],a=[],o=[],s=[];for(let n=0;n<r;n++){let c=n/(r-1),l=this.getBentStrip(c),u=Math.round(l.length*t);e.chunks.stripsDensityRand&&(u*=v.spread(.7,1.3)),u=Math.max(1,Math.round(u));let d=Array.from({length:u+1},(e,t)=>l.getPointAt(t/u));d.forEach(t=>{ku.jitter(t,e.chunks.jitter)}),this.points.push(...d),n==0&&(i=d),n==r-1&&(o=d),a.push(d.at(-1)),s.push(d[0])}o.reverse(),s.reverse();let c=[...i,...a,...o,...s],l=new Sa().setFromPoints(c);c=l.getSpacedPoints(Math.max(10,l.getLength()*.8)),this.borderWestPts=i,this.borderEastPts=o,this.borderPts=c,this.assignPointAlpha(c)}buildAnisotropic(){let e=this.spec,t=e.chunks.sampling,n=e.chunks.useLocalDensity?e.chunks[this.idx].density:1,r=t.densityU*n,i=t.densityV*n,a=t.jitterDensityDamping,o=H.smoothstep(Math.sqrt(r*i),a.densityStart,a.densityEnd),s=H.lerp(1,a.minScale,o),c=Math.max(...this.arcs.map(e=>e.length)),l=Math.max(2,Math.round(c*r*1.5)),u=e=>this.getStripCurve(e),d=(e,t,n)=>e.getPointAt(n).add(this.getBendAdjustmentVector(t,n));for(let n=0;n<l;n++){let r=n/(l-1),a=Zu(r,t.uEndBias),o=this.getBentStrip(a),u=c/(l-1)*Qu(r,t.uEndBias),d=Math.max(1,Math.round(o.length*i));if(e.chunks.stripsDensityRand){let e=H.lerp(.7,1.3,Xu(t.seed,this.idx,n,0,1831565813));d=Math.max(1,Math.round(d*e))}for(let e=0;e<=d;e++){let r=e/d,i=Zu(r,t.vEndBias);if(e>0&&e<d){let e=Math.sin(a*t.rowPhaseFrequency*Math.PI*2+Xu(t.seed,this.idx,n,0,668265261)*Math.PI*2);i+=e*Math.sin(Math.PI*i)*t.rowPhase/d,i=H.clamp(i,0,1)}let c=o.getPointAt(i),f=o.getTangentAt(i),p=new U(-f.y,f.x),m=o.length/d*Qu(r,t.vEndBias),h=(Xu(t.seed,this.idx,n,e,2769414579)*2-1)*u*t.jitterUFraction*s*(n>0&&n<l-1),g=(Xu(t.seed,this.idx,n,e,1675113877)*2-1)*m*t.jitterVFraction*s*(e>0&&e<d);c.addScaledVector(p,h).addScaledVector(f,g),c.chunkU=a,c.chunkV=i,c.samplingProfile=t.profile,this.points.push(c)}}let f=Math.max(10,Math.round(c*.8)),p=Math.max(this.leftDist,this.rightDist),m=Math.max(10,Math.round(p*.8)),h=u(0),g=u(1),_=Array.from({length:m+1},(e,t)=>{let n=t/m;return d(h,0,n)}),v=Array.from({length:m+1},(e,t)=>{let n=1-t/m;return d(g,1,n)}),y=[],b=[];for(let e=0;e<=f;e++){let t=e/f,n=u(t);y.push(d(n,t,1)),b.unshift(d(n,t,0))}let x=new Sa().setFromPoints([..._,...y,...v,...b]),S=x.getSpacedPoints(Math.max(10,x.getLength()*.8));this.borderWestPts=_,this.borderEastPts=v,this.borderPts=S,this.assignPointAlpha(S)}assignPointAlpha(e){let t=new qu(e),n=0;this.points.forEach(e=>{e.dist=e.distanceTo(t.nearest(e)),e.dist>n&&(n=e.dist)});let r=new su([1,.1,0]);this.points.forEach(e=>{let t=n>0?e.dist/n:0;e.alpha=r.at(t)})}getDots(){return this.points.map(e=>{let t=new ou(e.x,e.y,0,$.globals.wormDotColor,e.alpha??1);return t.chunkU=e.chunkU,t.chunkV=e.chunkV,t.samplingProfile=e.samplingProfile??`legacy`,t})}getBorderDots(){return this.borderPts.map(e=>new ou(e.x,e.y,0,`#FF5c4b`,1))}getBorderWestEastDots(){if(!this.borderWestPts)throw Error(`Chunk and most likely whole Worm needs to be .build() first!`);return this.borderWestPts.map(e=>new ou(e.x,e.y,0,`#FF5c4b`,1)).concat(this.borderEastPts.map(e=>new ou(e.x,e.y,0,`#005c4b`,1)))}};function ed(e){let t=[];for(let n of e){n.dots=n.dots.filter(e=>{for(let n of t)if(!(e.x<n.left||e.x>n.right||e.y<n.bottom||e.y>n.top)){for(let t of n.polygons)if(t.pointInsidePolygon(e))return!1}return!0});let e=n.cullingPolygons??[];e.length&&t.push({polygons:e,left:Math.min(...e.map(e=>e.left)),right:Math.max(...e.map(e=>e.right)),bottom:Math.min(...e.map(e=>e.bottom)),top:Math.max(...e.map(e=>e.top))})}}var td=class{constructor(e,{deferBuild:t=!1}={}){this.larva=e,this.spec=e.spec,this.prebuild(),t||this.build()}prebuild(){let e=this.larva,t=e.spec,n=e.circles,r=n.map(e=>new U(e.x,e.y)),i=2.2,a=new su([n[0].r/i,...n.map(e=>e.r),n.at(-1).r/i],[n[0].r/-2.2,...n.map(e=>e.atLength),n.at(-1).atLength+n.at(-1).r/i]);function o(e,n,r=void 0){let i=r||a.at(e.at),o=t.chunks.at(n).ramp.maxValue/2;if(i-=o*i,i*=2,!i)throw Error(`arcLength is 0`);return new Ku(e,t,i)}let s=r[0],c=r[1],l=r.at(-2),u=r.at(-1),d=o(new Gu(s.x,s.y,0),0,n[0].r).getHeight(),f=o(new Gu(u.x,u.y,1),-1,n.at(-1).r).getHeight();s.sub(c.clone().sub(s).setLength(n[0].r-d)),u.sub(l.clone().sub(u).setLength(n.at(-1).r-f));let p=new Sa().setFromPoints(r);p.updateArcLengths();let m=n.map((e,t)=>{let r=p.cacheLengths[t-1];return t==0&&(r=n[0].r),t==n.length-1&&(r=p.getLength()-n.at(-1).r),r/p.getLength()}),h=new ya(r);h=new ya(h.getSpacedPoints(Math.max(1,h.getLength()/2)));let g=[];for(let e=0,n=t.larva.numChunks;e<=n;e++){let t=e/n;e>0&&m.filter(e=>e>g.at(-1)&&e<t).forEach(e=>{g.push(e)}),g.push(t)}function _(e){let t=[];for(let n of e)if(n.length==2){let e=n[0],r=n[1],i=h.getPointAt(e),a=h.getPointAt(r);if(i.distanceTo(a)<3){let n=(e+r)/2;(e==0||r==0)&&(n=0),(e==1||r==1)&&(n=1),t.push(n)}else t.push(e,r)}else t.push(n[0]);return t}for(let e=0;e<3;e++){let e=_(Z.arrayBatches(g,2));if(e=[e[0],..._(Z.arrayBatches(e.slice(1),2))],e.length==g.length)break;g=e}{let e=g.length,n=t.larva.numChunks+1,r=Math.max(0,Math.round(e/n)-1);g=[];for(let e=0;e<n;e++){let t=e/(n-1);if(g.push(t),r>0&&e<n-1){let i=(e+1)/(n-1);for(let e=0;e<r;e++){let n=Z.fit01((e+1)/(r+1),t,i);g.push(n)}}}}let v=[],y=0,b=1/t.larva.numChunks;for(let[e,n]of g.entries())n>=y*b&&y++,v.push(Math.floor(Z.fit01(y*b,0,t.larva.numChunks-1)));let x=[],S=[];for(let[e,t]of g.entries()){let n=h.getPointAt(t),r=new Gu(n.x,n.y,t);x.push(r);let i=o(r,v[e]);S.push(i)}let C=[],w=-1;S.forEach((e,t,n)=>{w<v[t]&&(w++,t>0&&C.at(-1).push(e),C.push([])),C.at(-1).push(e)});let T;function E(e=!1){let t=h.getSpacedPoints(Math.max(1,h.getLength()/3));Z.smoothPoints(t,2,1),T=new ya(t),S.forEach((t,n,r)=>{e?t.pivot.dir=T.getTangent(t.pivot.at).lerp(t.pivot.dir,.75):t.pivot.dir=T.getTangent(t.pivot.at),t.rebuild()})}E();{let e=0;for(;e<100;e++){let e=!1;for(let[t,n]of S.entries()){let t=!1,r=!1,i=.02;for(let a of S)if([t,r]=n.collidesWith(a),t||r){let o=n.perpendicular.clone();o.setLength(n.length*.01),!t&&r&&o.negate(),t&&r||n.pivot.add(o),n.pivot.dir.lerp(a.pivot.dir,i),n.length*=.98,n.rebuild(),a.pivot.dir.lerp(n.pivot.dir,i*.5),a.length*=.99,a.rebuild(),e=!0;break}}if(!e)break}}let D=[];C.forEach((e,n)=>{let r=new $u(e,t,n);D.push(r)}),this.curveSmoothedPts=T.getSpacedPoints(T.getLength()),this.tempRamp=a,this.pivots=x,this.arcs=S,this.chunks=D}build(){this.dots=[];let e=[];for(let t of this.chunks){t.build();let n=t.getDots(),r=[];for(let t=n.length-1;t>=0;t--){let i=!0;for(let r of e)if(r.pointInsidePolygon(n[t])){i=!1;break}i&&r.push(n[t])}this.dots.push(...r);let i=t.borderPts,a=new Sa().setFromPoints(i);i=[];for(let e=0,t=a.getLength();e<=t;e++){let n=e/t,r=a.getPointAt(n);i.push(r)}if(i.length>=3){let t=new Wu(i);t.minSize>2&&e.push(t)}}this.cullingPolygons=e}getDots(){return this.dots||console.log(`>>> Worm.getDots() called before build() >>> no dots for drawing yet.`),this.dots||[]}getColliders(){if(!this.collidersPrebuilt){let e=this.chunks.flatMap(e=>e.prebuiltColliders);this.collidersPrebuilt=e}return this.collidersPrebuilt}};function nd(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)} ${String(e.getHours()).padStart(2,`0`)}-${String(e.getMinutes()).padStart(2,`0`)}-${String(e.getSeconds()).padStart(2,`0`)}`}function rd(e,t,n=new Date){return`fossil ${nd(n)} #${e}.${t}`}var id=class e{canvas;drawing;constructor(t,n){e.canvas=t,e.drawing=n,e.addControls(t)}static addControls(e){e.addEventListener(`mousedown`,e=>this.zoomStart(e)),e.addEventListener(`mouseup`,e=>this.zoomEnd(e)),e.addEventListener(`mouseleave`,e=>this.zoomEnd(e)),e.addEventListener(`touchstart`,e=>this.zoomStart(e)),e.addEventListener(`touchend`,e=>this.zoomEnd(e)),e.addEventListener(`dblclick`,()=>this.saveImage())}static zoomStart(e){this.canvas.addEventListener(`mousemove`,this.zoomMove),this.canvas.addEventListener(`touchmove`,this.zoomMove),this.zoomMove(e)}static zoomEnd(e){this.canvas.removeEventListener(`mousemove`,this.zoomMove),this.canvas.removeEventListener(`touchmove`,this.zoomMove),this.drawing.defaultCameraPosition?this.drawing.camera.position.copy(this.drawing.defaultCameraPosition):this.drawing.camera.position.set(0,0,220),this.drawing.renderWormScene()}static zoomMove(t){let n=t.currentTarget.getBoundingClientRect();(t.type==`touchmove`||t.type==`touchstart`)&&(t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY);var r=Math.round(t.clientX-n.left),i=Math.round(t.clientY-n.top);let a=e.drawing,o=a.defaultCameraPosition,s=!!o,c=s?o.z*Math.tan(a.camera.fov*Math.PI/360):$.sceneHalfSize.y,l=s?c*a.camera.aspect:$.sceneHalfSize.x,u=c,d=Z.fit(r,0,n.width,-l,l)+(s?o.x:0),f=Z.fit(i,0,n.height,u,-u)+(s?o.y:0),p=80;t.altKey&&(p=450),e.drawing.camera.position.set(d,f,p);{let e=``;for(let n in t){if(![`clientX`,`clientY`,`type`].some(e=>e==n))continue;let r=t[n];typeof r==`number`&&(r=Math.round(r)),(typeof r==`string`||typeof r==`number`)&&(e+=n+`: `+t[n]+`	`)}Tu.setDebugText(e)}e.drawing.renderWormScene()}static saveImage=()=>{e.drawing.renderWormScene(),e.canvas.toBlob(e=>{this.saveBlob(e,rd(v.initialSeed,`png`))})};static saveBlob=function(){let e=document.createElement(`a`);return document.body.appendChild(e),e.style.display=`none`,function(t,n){let r=window.URL.createObjectURL(t);e.href=r,e.download=n,e.click()}}()},ad=class{constructor(){this.circles=[],this.candidates=[],this.heads=new Int32Array,this.next=new Int32Array}rebuild(e,t=[],n=1,r=0){this.circles.length=0;for(let t of e)this.circles.push(t);for(let e of t)this.circles.includes(e)||this.circles.push(e);if(this.radiusRatio=n,this.candidates.length=0,!this.circles.length){this.width=this.height=0;return}let i=1/0,a=1/0,o=-1/0,s=-1/0,c=0,l=0,u=1;for(let e of this.circles)i=Math.min(i,e.x),o=Math.max(o,e.x),a=Math.min(a,e.y),s=Math.max(s,e.y),c+=e.r,l=Math.max(l,e.r),u=Math.max(u,e.larva?.mobility??1);this.originX=i,this.originY=a,this.maxRadius=l,this.movementPadding=r*u,this.cellSize=Math.max(1,2*c/this.circles.length*n,Math.max(o-i,s-a)/128),this.width=Math.floor((o-i)/this.cellSize)+1,this.height=Math.floor((s-a)/this.cellSize)+1;let d=this.width*this.height;this.heads.length<d&&(this.heads=new Int32Array(d*2)),this.next.length<this.circles.length&&(this.next=new Int32Array(this.circles.length*2)),this.heads.fill(-1,0,d);for(let e=0;e<this.circles.length;e++){let t=this.circles[e],n=Math.floor((t.x-i)/this.cellSize),r=Math.floor((t.y-a)/this.cellSize)*this.width+n;this.next[e]=this.heads[r],this.heads[r]=e}}retrieve(e){let t=this.candidates;if(t.length=0,!this.width||!this.height)return t;let n=(e.r+this.maxRadius)*this.radiusRatio+this.movementPadding,r=Math.max(0,Math.floor((e.x-n-this.originX)/this.cellSize)),i=Math.min(this.width-1,Math.floor((e.x+n-this.originX)/this.cellSize)),a=Math.max(0,Math.floor((e.y-n-this.originY)/this.cellSize)),o=Math.min(this.height-1,Math.floor((e.y+n-this.originY)/this.cellSize));for(let e=a;e<=o;e++)for(let n=r;n<=i;n++)for(let r=this.heads[e*this.width+n];r!==-1;r=this.next[r])t.push(this.circles[r]);return t}},od=class e{static MIN_MOBILITY=1/16;static REQUIRED_SATISFIED_RATIO=.3;static ACTIVATION_MAX_ITERS=600;static FINAL_MAX_ITERS=4e3;static SPAWN_CLEARANCE=1.02;static PLACEMENT_SAMPLES=1e4;constructor(e=new $){this.spec=e,this.larvas=[],this.circles=[],this.colliders=[],this.pendingLarvas=[],this.itersSinceActivation=0,this.doneSolving=!1,this.collisionSearch=Lu.COLLISION_SEARCH,this.collisionSearch===`grid`&&(this.collisionGrid=new ad);let t={w:$.sceneHalfSize.x*3,h:$.sceneHalfSize.y*3};this.qtree=new Du({width:t.w,height:t.h,x:-t.w/2,y:-t.h/2}),this.preparationSolver=new Lu(e);let n=e.composition?.wormCount,r=e.composition?.packingStyle===`simple`;this.preparationSolver.spawn({single:r}),this.remainingPreparations=[];for(let t=1;r&&t<n;t++){let t=e.clone();t.applySingleComposition();let n=new Lu(t);n.spawn({single:!0}),this.remainingPreparations.push(n)}}placementOverlapsActive(t,n=0,r=0){let i=e.SPAWN_CLEARANCE;for(let e of t.circles){let t=e.x+n,a=e.y+r;for(let n of this.circles){let r=(e.r+n.r)*i,o=t-n.x,s=a-n.y;if(o*o+s*s<r*r)return!0}}return!1}placeWithoutOverlap(t){if(!this.circles.length||!this.placementOverlapsActive(t))return;let n=Math.PI*(3-Math.sqrt(5)),r=Math.max(1,t.avgRad*.2);for(let i=1;i<=e.PLACEMENT_SAMPLES;i++){let e=r*Math.sqrt(i),a=i*n,o=Math.cos(a)*e,s=Math.sin(a)*e;if(!this.placementOverlapsActive(t,o,s)){t.circles.forEach(e=>{e.x+=o,e.y+=s});return}}let i=e.SPAWN_CLEARANCE,a=Math.max(...this.circles.map(e=>e.x+e.r*i))-Math.min(...t.circles.map(e=>e.x-e.r*i))+.01;t.circles.forEach(e=>e.x+=a)}activateNextLarva(){if(!this.pendingLarvas.length)return!1;this.larvas.forEach(t=>{t.mobility=Math.max((t.mobility??1)*.5,e.MIN_MOBILITY)});let t=this.pendingLarvas.shift();return this.placeWithoutOverlap(t),Iu(t.circles),t.mobility=1,this.larvas.push(t),this.circles.push(...t.circles),this.itersSinceActivation=0,!0}prepareNextIter(){if(this.preparationSolver.nextIter(1),!this.preparationSolver.larvas)return!1;let e=!!this.spec.composition?.groupSettings;if(e&&!this.preparationSolver.doneSolving)return!1;if(this.pendingLarvas.push(...this.preparationSolver.larvas),this.remainingPreparations.length)return this.preparationSolver=this.remainingPreparations.shift(),!1;let{packingStyle:t,wormCount:n}=this.spec.composition??{};if(t===`packed`&&n!=null){if(this.pendingLarvas=this.pendingLarvas.slice(0,n),this.pendingLarvas.length<n)return this.preparationSolver=new Lu(this.spec),this.preparationSolver.spawn({single:!1}),!1;let e=0;for(let t of this.pendingLarvas)for(let n of t.circles)n.text=n.id=e++}if(this.preparationSolver=void 0,e){let e=0;for(let t of this.pendingLarvas){t.capturePackingShape();for(let n of t.circles)n.text=n.id=e++}}return!this.activateNextLarva()&&(this.doneSolving=!0,!0)}moveAllLarvasToCenterPass(){if(!this.circles.length)return;let[e,t,n,r]=[0,0,0,0];this.circles.forEach(i=>{e=Math.min(e,i.x-i.r),t=Math.max(t,i.x+i.r),r=Math.min(r,i.y-i.r),n=Math.max(n,i.y+i.r)});let i=new U(-(t+e),-(n+r));if(i.length()>Lu.STEP_LEN/4){if(i.divideScalar(1400),this.spec.composition?.groupSettings){this.circles.forEach(e=>e.add(i));return}this.circles.forEach(e=>e.constraintsDeltas.push(i))}}solveActiveLarvasPass(){this.moveAllLarvasToCenterPass(),this.compactGroupPass(),this.larvas.forEach(e=>e.solveConstraintsPass()),Pu(this,-.1),this.larvas.forEach(e=>e.selfSeparationPass()),this.larvas.forEach(e=>e.restorePackingShape()),this.resolveGroupContacts(),Iu(this.circles),this.larvas.forEach(e=>e.checkSatisfaction()),this.itersSinceActivation++}compactGroupPass(){if(!this.spec.composition?.groupSettings||this.larvas.length<2)return;let e=this.spec.composition.groupSettings,t=this.larvas.map(e=>e.circles.reduce((e,t)=>e.add(t),new U).divideScalar(e.circles.length)),n=t.reduce((e,t)=>e.add(t),new U).divideScalar(t.length);this.larvas.forEach((r,i)=>{let a=n.clone().sub(t[i]).multiplyScalar(e.compaction);a.clampLength(0,e.maxCompactionStep).multiplyScalar(r.mobility??1),r.circles.forEach(e=>e.add(a))})}resolveGroupContacts(){if(!this.spec.composition?.groupSettings)return;let e=this.spec.composition.groupSettings.contactClearance;for(let t=0;t<3;t++){for(let t=1;t<this.larvas.length;t++)for(let n=0;n<t;n++){let r=this.larvas[n],i=this.larvas[t],a=r.mobility??1,o=i.mobility??1;for(let t of r.circles)for(let n of i.circles){let r=n.x-t.x,i=n.y-t.y,s=Math.hypot(r,i),c=(t.r+n.r)*e;if(s>=c)continue;s>1e-8?(r/=s,i/=s):(r=1,i=0);let l=(c-s)/(a+o);t.x-=r*l*a,t.y-=i*l*a,n.x+=r*l*o,n.y+=i*l*o}}this.larvas.forEach(e=>e.packingLengthPass())}}activeGroupIsSatisfied(){return!this.larvas.length||this.larvas.filter(e=>e.isSatisfied).length/this.larvas.length>=e.REQUIRED_SATISFIED_RATIO}nextIter(t=1){if(this.doneSolving)return!0;for(let n=0;n<t;n++){if(this.preparationSolver){if(this.prepareNextIter())return!0;if(this.preparationSolver)continue}this.solveActiveLarvasPass();let t=this.activeGroupIsSatisfied();if(this.pendingLarvas.length)(t||this.itersSinceActivation>=e.ACTIVATION_MAX_ITERS)&&this.activateNextLarva();else if(t||this.itersSinceActivation>=e.FINAL_MAX_ITERS)return this.doneSolving=!0,!0}return!1}getDrawableCircles(){return[...this.circles]}getLarvas(){return this.larvas}};function sd(){return new od}function cd(e,t,n){let r=[],i=[],a=[];r.push(...t.tempRamp.getDots(60,{xDelta:0,yDelta:-45,yRatio:.2})),r.push(...ld(t)),r.forEach(e=>{isNaN(e.x)||(i.push(e.x,e.y,e.z),a.push(...e.getColorArray(!1,.8)))});let o=new Wr;o.setAttribute(`position`,new J(new Float32Array(i),3)),o.setAttribute(`color`,new J(new Float32Array(a),4));let s=new zi(o,new Pi({size:7,sizeAttenuation:!1,vertexColors:!0,transparent:!0}));e.add(s)}function ld(e){let t=[];return e.arcs.forEach(e=>{t.push(...e.getDots())}),e.pivots.forEach(e=>{t.push(...e.getDots())}),e.chunks.forEach(e=>{e.xformers?.forEach(e=>{t.push(...e.getDots(`white`))})}),e.chunks.forEach(e=>{t.push(...e.getBorderWestEastDots())}),e.linearPts?.forEach(e=>{e&&t.push(new ou(e.x,e.y,0,`#FF5c4b`,1))}),e.curveSmoothedPts?.forEach(e=>{e&&t.push(new ou(e.x,e.y,0,`blue`,1))}),t}var ud=class{static async logResolveTime(e,t){let n=new Date,r=`[${`${n.getFullYear()}-${(n.getMonth()+1).toString().padStart(2,`0`)}-${n.getDate().toString().padStart(2,`0`)}  ${n.getHours().toString().padStart(2,`0`)}:${n.getMinutes().toString().padStart(2,`0`)}:${n.getSeconds().toString().padStart(2,`0`)}`}]    seed:${e}    total time: ${t.toFixed(2)} ms`;try{let e=await fetch(`/log`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({message:r})});if(!e.ok){let t=await e.json().catch(()=>({error:`Unknown server error`}));console.error(`Error sending log to server (${e.status}):`,t.error||e.statusText),console.log(`Logging fallback to console:`,r)}}catch(e){console.error(`Error sending log via fetch:`,e),console.log(`Logging fallback to console:`,r)}}},dd=class{constructor(e){let t=new Zn;t.background=new q(1052688);let n=new fo(30,e.x/e.y,.1,500),r=document.getElementById(`my_canvas`),i=new Xl({antialias:!0,powerPreference:`high-performance`,stencil:!1,depth:!1,canvas:r,precision:`lowp`});i.setSize(e.x,e.y,!1);let a=new mo(16777215,600,600,Math.PI/4,1,1.01);a.position.set(0,0,150),t.add(a),n.position.z=220,this.scene=t,this.renderer=i,this.camera=n,new id(r,this),this.setup()}setup(){cancelAnimationFrame(this.animationFrame),this.simCircles=void 0,this.finished=!1,this.boundRender??=this.render.bind(this),Eu.go(`Whole Thing`),this.sequencer=this.createSequencer()}createSequencer(){return sd()}renderOnce(){this.updateSimScene(),this.renderer.render(this.scene,this.camera)}renderWormScene(){console.log(`>> renderWormScene()`),this.renderer.render(this.scene,this.camera)}render(e){if(cancelAnimationFrame(this.animationFrame),this.finished)return;let t=performance.now()+12,n;do n=this.sequencer.nextIter(1);while(!n&&performance.now()<t);if(n){this.finished=!0,Eu.report(),this.renderOnce(),this.wormSceneCreate(),this.renderWormScene(),ud.logResolveTime(v.initialSeed,Eu.report(`Whole Thing`)),console.log(`>> Seed used:`,v.initialSeed);return}this.renderOnce(),this.animationFrame=requestAnimationFrame(this.boundRender)}clearGeneratedScene(){let e=new Set,t=new Set;for(let n of this.scene.children.slice(1))n.traverse(n=>{if(n.geometry&&e.add(n.geometry),n.material)for(let e of[n.material].flat())t.add(e)}),this.scene.remove(n);e.forEach(e=>e.dispose()),t.forEach(e=>e.dispose())}updateSimScene({preserveScene:e=!1}={}){let t=this.sequencer.getDrawableCircles();if(this.simCircles?.length===t.length&&this.simCircles.every((e,n)=>e===t[n])){for(let{circle:e,mesh:t,ring:n}of this.simMeshes)t.position.set(e.x,e.y,0),n.position.set(e.x,e.y,1),t.scale.setScalar(e.r),n.scale.set(e.r,e.r,1),t.material.color.set(e.color||(e.child?`cyan`:`lightblue`)),n.material.color.set(e.color||`white`);for(let{edge:e,arrow:t}of this.simEdges){let n=this.simDirection.set(e.c2.x-e.c1.x,e.c2.y-e.c1.y,0),r=n.length();t.position.set(e.c1.x,e.c1.y,2),t.setDirection(n.normalize()),t.setLength(r,1,1),t.setColor(e.leastSatisfied?`red`:e.isInLarvaFirstHalf?`aqua`:`yellow`)}return}this.simCircles=t,this.simMeshes=[],this.simEdges=[],this.simDirection=new W;let n=(e,t=.15)=>new Ia({transparent:!0,opacity:t,color:e}),r=this.scene;e||this.clearGeneratedScene();let i=new Ki(1,1,.04),a=new wa(.99,1,32);this.sequencer.getDrawableCircles().forEach(e=>{let t=new pi(i,n(e.color||(e.child?`cyan`:`lightblue`)));t.position.set(e.x,e.y,0),t.rotation.x=.5*Math.PI,t.scale.set(e.r,e.r,e.r),r.add(t);let o=new pi(a,e.color?n(e.color,.9):n(`white`,.9));o.position.set(e.x,e.y,1),o.scale.set(e.r,e.r,e.r),r.add(o),this.simMeshes.push({circle:e,mesh:t,ring:o})})}wormSceneCreate(){console.log(`wormSceneCreate`);let e=this.scene;Tu.debugColors||this.clearGeneratedScene(),e.background=new q($.globals.sceneBgColor);let t=new pi(new Ca(100,130),new Ta({color:$.globals.wormDotColor,opacity:.7}));t.castShadow=!1;let n=new mo(16777215,600,600,Math.PI/4,1,1.01);this.light=n,n.position.set(0,0,150),n.castShadow=!0,n.shadow.radius=15,n.shadow.blurSamples=60,n.shadow.mapSize=new U(16e3,16e3),e.add(n),e.add(n.target),new go(16777215,.3),this.scene=e,this.sequencer.getLarvas().forEach((t,n)=>{let r=new td(t),i=t.spec;Tu.debug&&cd(e,r,n);let a=r.getDots(),o=i.worm.drawStyle,s=i.worm.itemsPerBatch;switch(o){case`shuffle`:{a=a.map(e=>({value:e,sort:v.random()})).sort((e,t)=>e.sort-t.sort).map(({value:e})=>e);let e=Z.arrayBatches(a,s);this.addBatchesAsInstancedMeshes(e);break}case`strips`:{let e=Z.arrayBatches(a,s);this.addBatchesAsInstancedMeshes(e);break}case`radial_gradient`:{let e=1/15;for(let t=0;t<15;t++){let n=t*e,r=a.reduce((r,i)=>(i.alpha>=n&&(i.alpha<(t+1)*e||t===14&&i.alpha<=1)&&r.push(i),r),[]);if(!r.length)continue;let i=r[0].alpha;this.addBatchesAsInstancedMeshes([r],i)}break}}})}addBatchesAsInstancedMeshes(e,t=void 0){t??=v.range(.4,1),e.forEach((e,n)=>{let r=new Ti(new Ki(.1,.1,.04),new Ia({transparent:!0,opacity:t}),e.length);r.castShadow=!0,r.receiveShadow=!0;let i=new Hn,a=v.range(.6,1);for(let t=0;t<e.length;t++){let n=e[t];i.position.set(n.x,n.y,v.range(.1,1)),i.position.z+=t/e.length*1,i.rotation.x=.5*Math.PI;let o=a*v.spread(.4,1.7);i.scale.set(o,o,o),i.updateMatrix(),r.setMatrixAt(t,i.matrix),r.setColorAt(t,new q(0,0,0))}this.scene.add(r)})}};function fd(e){let t=0,n=0,r=0;for(let i of e){if(!Number.isFinite(i.x)||!Number.isFinite(i.y)||!Number.isFinite(i.r)||i.r<=0)continue;let e=i.r*i.r;t+=e,n+=i.x*e,r+=i.y*e}return t?{x:n/t,y:r/t}:null}function pd(e,t,n,r=220){let i=r*Math.tan(t*Math.PI/360),a=i*n;return e.filter(e=>{if(!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.r)||e.r<=0)return!1;let t=Math.max(Math.abs(e.x)-a,0),n=Math.max(Math.abs(e.y)-i,0);return t*t+n*n<e.r*e.r})}function md(e,t,n,r,i=220,a){let o=1/0,s=-1/0,c=1/0,l=-1/0;for(let t of e)Number.isFinite(t.x)&&Number.isFinite(t.y)&&(o=Math.min(o,t.x),s=Math.max(s,t.x),c=Math.min(c,t.y),l=Math.max(l,t.y));if(!Number.isFinite(o))return{scale:1,x:0,y:0};let u=a?.x??(o+s)/2,d=a?.y??(l+c)/2;if(t.scaleToFit===!1)return{scale:1,x:-u,y:-d};let f=Math.max(2*Math.max(Math.abs(o-u),Math.abs(s-u)),1e-6),p=Math.max(2*Math.max(Math.abs(c-d),Math.abs(l-d)),1e-6),m=2*i*Math.tan(n*Math.PI/360),h=m*r,g=t.framing?.mode===`edge`,_=g?m*t.framing.occupancy/Math.max(p,f/r):Math.min((m*t.targetHeight-4)/p,(h*t.maxWidth-4)/f),v=f/r>p;return{scale:_,x:-u*_-(g&&v?t.framing.offset*h:0),y:-d*_-(g&&!v?t.framing.offset*m:0)}}function hd(e,{scale:t,x:n,y:r}){let i=e=>e.set(e.x*t+n,e.y*t+r);for(let n of e.circles){i(n),n.r*=t,n.atLength*=t,n.distSqMap?.clear(),n.pinPos&&i(n.pinPos);for(let e of n.constraintsDeltas)e.multiplyScalar(t)}e.avgRad*=t;for(let n of e.edges??[])n.targetLenSq*=t*t;for(let n of[...e.tipEndpointConstraints??[],...e.selfSeparationPairs??[]])n.minDistance*=t;for(let t of e.lastTimePositions??[])i(t);for(let n of e.packingShape??[])n.multiplyScalar(t);e.packingLengths&&=e.packingLengths.map(e=>e*t)}function gd(e,t,n,r,i=220){let a=e.flatMap(e=>e.circles),o=fd(t.centering===`visible-circle-area`?pd(a,n,r,i):a)??fd(a),s;s=t.scaleToFit===!1?{scale:1,x:-(o?.x??0),y:-(o?.y??0)}:md(e.flatMap(e=>new td(e,{deferBuild:!0}).chunks.flatMap(e=>e.getCompositionPoints())),t,n,r,i,o);for(let t of e)hd(t,s);return s}var _d=e=>Math.max(0,Math.min(1,e)),vd=(e,t,n)=>e+(t-e)*n,yd=(e,t,n)=>{let r=_d((n-e)/(t-e));return r*r*(3-2*r)};function bd(e,t,n){let r=e^Math.imul(t+1,2654435761)^n;return r=Math.imul(r^r>>>16,569420461),r=Math.imul(r^r>>>15,1935289751),((r^r>>>15)>>>0)/4294967296}function xd(e,t){let n=0,r=()=>bd(e,n++,1921166105),i=g(r),a=t.variant??`strata-deep`,o=t.layerScale??1,s=t.reliefStrength??1.35,c=.55+bd(e,91,711)*1.65,l=t.reliefCellSize,u=Math.ceil(t.width/l)+1,d=Math.ceil(t.height/l)+1,f=-t.width/2,p=-t.height/2,m=new Float32Array(u*d),h=new Float32Array(m.length),_=new Float32Array(m.length),v=r()*200,y=r()*200,b=vd(-1.3,1.3,r()),x=Math.cos(b),S=Math.sin(b),C=(e,t)=>(i(e,t)+i(e*2.17+13,t*2.17-31)*.5+i(e*4.53-37,t*4.53+19)*.24)/1.74;for(let e=0;e<d;e++)for(let t=0;t<u;t++){let n=f+t*l,r=p+e*l,d=(n*x+r*S)/c+v,g=(-n*S+r*x)/c+y,_=e*u+t,b=yd(-.25,.42,C(d/15,g/18));h[_]=b,m[_]=C(d/17,g/11)*.7+C(d/3.5,g/2.8)*vd(.055,.2,b)+i(d/.65,g/.6)*vd(.016,.06,b);let w=yd(-.38,.4,C(d/29+73,g/24-19));h[_]=w,a===`strata-worn`&&(m[_]+=C(d/1.8,g/1.7)*(.05+w*.16));{let e=g+C(d/18,g/21)*12+i(d/5,g/8)*1.5;m[_]+=Math.tanh(i(d/32,e/(2.8*o))*(a===`strata-worn`?2:5))*(.3+w*.8)*s,m[_]+=i(d/8,e/(.6*o))*.13*s}}function w(e,t,n,i,a,o){let s=Math.cos(a),c=Math.sin(a),l=6+Math.floor(r()*5),u=[];for(let a=0;a<l;a++){let o=(a+(r()-.5)*.6)/l*Math.PI*2,d=vd(.62,1.12,r()),f=Math.cos(o)*n*d,p=Math.sin(o)*i*d;u.push({x:e+f*s-p*c,y:t+f*c+p*s})}for(let e=0;e<3;e++){let t=[];for(let n=0;n<u.length;n++){let i=u[n],a=u[(n+1)%u.length],s=a.x-i.x,c=a.y-i.y,l=Math.hypot(s,c),d=vd(.32,.68,r()),f=(r()-.5)*Math.min(l*.32,o/(e+1));t.push(i,{x:vd(i.x,a.x,d)-c/l*f,y:vd(i.y,a.y,d)+s/l*f})}u=t}return u}function T(t,n,r,a,o){let s=Math.max(0,Math.floor((Math.min(...t.map(e=>e.x))-f)/l)-1),c=Math.min(u-1,Math.ceil((Math.max(...t.map(e=>e.x))-f)/l)+1),g=Math.max(0,Math.floor((Math.min(...t.map(e=>e.y))-p)/l)-1),v=Math.min(d-1,Math.ceil((Math.max(...t.map(e=>e.y))-p)/l)+1);if(c<=s||v<=g)return;let y=c-s+1,b=v-g+1,x=new Float32Array(y*b);for(let e=0;e<b;e++){let n=p+(e+g)*l,r=[];for(let e=0,i=t.length-1;e<t.length;i=e++){let a=t[i],o=t[e];a.y>n!=o.y>n&&r.push(a.x+(n-a.y)*(o.x-a.x)/(o.y-a.y))}r.sort((e,t)=>e-t);for(let t=0;t+1<r.length;t+=2){let n=Math.max(0,Math.ceil((r[t]-f)/l)-s),i=Math.min(y-1,Math.floor((r[t+1]-f)/l)-s);i>=n&&x.fill(1e4,e*y+n,e*y+i+1)}}for(let e=0;e<b;e++)for(let t=0;t<y;t++){let n=e*y+t;t&&(x[n]=Math.min(x[n],x[n-1]+1)),e&&(x[n]=Math.min(x[n],x[n-y]+1),t&&(x[n]=Math.min(x[n],x[n-y-1]+Math.SQRT2)),t+1<y&&(x[n]=Math.min(x[n],x[n-y+1]+Math.SQRT2)))}for(let e=b-1;e>=0;e--)for(let t=y-1;t>=0;t--){let n=e*y+t;t+1<y&&(x[n]=Math.min(x[n],x[n+1]+1)),e+1<b&&(x[n]=Math.min(x[n],x[n+y]+1),t&&(x[n]=Math.min(x[n],x[n+y-1]+Math.SQRT2)),t+1<y&&(x[n]=Math.min(x[n],x[n+y+1]+Math.SQRT2)))}let S=bd(e,o,353);for(let e=0;e<b;e++)for(let t=0;t<y;t++){let c=x[e*y+t]*l;if(!c)continue;let d=f+(t+s)*l,v=p+(e+g)*l,b=(e+g)*u+t+s,w=i(d/1.1+o,v/.85-o)*.5+.5,T=yd(0,r*vd(.6,1.7,w),c),E=C(d/2.4+o*9,v/1.7)*a;m[b]+=(n+E)*T,h[b]=vd(h[b],S,T*.22),_[b]=Math.max(_[b]*(1-T*.85),Math.exp(-c/vd(.45,1.9,S))*vd(.45,1,w))}}let E=Math.round(t.width*t.height/t.plateArea/c);for(let e=0;e<E;e++){let t=vd(f-8,-f+8,r()),n=vd(p-8,-p+8,r()),o=i(t/17+v,n/19+y)>.15,s=e%17==0,l=e%9==0,u=(l?vd(8,20,r()):vd(1.8,9,r()**1.4))*c*(a===`strata-worn`?1.7:a===`strata-flaked`?.55:1.1),d=u*vd(.07,a===`strata-flaked`?.35:.19,r()),m=b+(r()-.5)*(a===`strata-flaked`?1.8:s?3:.8),h=w(t,n,u,d,m,o?3:1.5);if(T(h,vd(.12,s?1.1:l?1:.65,r()),vd(.18,s?1.4:.85,r())*(a===`strata-worn`?2:1),s?.3:.12,e),o)for(let t=0;t<3;t++){let n=h[Math.floor(r()*h.length)],i=vd(.7,2.8,r());T(w(n.x,n.y,i*1.6,i,m+r(),.8),vd(.12,.4,r()),.25,.15,E+e*3+t)}}let D=(e,t,n)=>e[Math.max(0,Math.min(d-1,n))*u+Math.max(0,Math.min(u-1,t))],O=new Float32Array(m.length),k=[[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[-.707,.707],[.707,-.707],[-.707,-.707]].map(([e,t])=>[.45,1.2,2.6].map(n=>{let r=Math.round(e*n/l),i=Math.round(t*n/l);return{x:r,y:i,offset:i*u+r,denominator:n+.3}})),A=[.35,.7,1.4,2.8,4.5].map(e=>{let t=-Math.round(e*.62/l),n=Math.round(e*.78/l);return{x:t,y:n,offset:n*u+t,bias:e*.85,denominator:.25+e*.3}}),j=Math.ceil(4.5/l);for(let e=0;e<d;e++)for(let t=0;t<u;t++){let n=e*u+t,r=m[n],i=t>=j&&t<u-j&&e>=j&&e<d-j,a=(m[n+ +(t+1<u)]-m[n-+!!t])/(2*l),o=(m[n+(e+1<d?u:0)]-m[n-(e?u:0)])/(2*l),s=(-a*-.42-o*.53+.74)/Math.hypot(a,o,1),c=0,f=0;for(let a of k){let o=0;for(let s of a){let a=i?m[n+s.offset]:D(m,t+s.x,e+s.y);o=Math.max(o,(a-r-.04)/s.denominator)}c+=_d(o)}for(let a of A){let o=i?m[n+a.offset]:D(m,t+a.x,e+a.y);f=Math.max(f,_d((o-r-a.bias-.06)/a.denominator))}O[n]=Math.max(0,.09+(.78-s)*.46+c/8*.95+f*.28+_[n]*.3+h[n]**1.4*.4)}let ee=O.slice().sort(),te=ee[Math.floor(ee.length*.035)],M=ee[Math.floor(ee.length*.99)],ne=Math.min(1,te),re=Math.min(1,M);for(let e=0;e<O.length;e++){let t=_d((Math.min(1,O[e])-ne)/(re-ne))**1.1,n=2*_d((O[e]-te)/(M-te))**1.1-1,r=.5+.5*Math.sign(n)*Math.abs(n)**1.65;O[e]=.02+.96*vd(t,r,.5)}return Sd({seed:e,variant:a,geologyScale:c,shadeLow:te,shadeHigh:M,width:u,height:d,cell:l,left:f,bottom:p,heights:m,shade:O,material:h,edges:_})}function Sd(e){let{width:t,height:n,cell:r,left:i,bottom:a,shade:o,material:s,edges:c}=e;function l(e,n,r,i){return vd(vd(e[n],e[n+1],r),vd(e[n+t],e[n+t+1],r),i)}function u(e,u){let d=Math.max(0,Math.min(t-1.001,(e-i)/r)),f=Math.max(0,Math.min(n-1.001,(u-a)/r)),p=Math.floor(d),m=Math.floor(f),h=d-p,g=f-m,_=m*t+p;return{shade:l(o,_,h,g),material:l(s,_,h,g),edge:l(c,_,h,g)}}return{...e,at:u}}function Cd(e,t){let n=Math.imul(e^t,569420461);return n=Math.imul(n^n>>>15,1935289751),((n^n>>>15)>>>0)/4294967296}function wd(e,t,n){let r=[];for(let i=0;i<t.length;i++){let a=t[i].cullingPolygons??[],o=11003+i*1009,s=Math.min(a.length,2+Math.floor(Cd(e,o)*3));for(let t=0;t<s;t++){let i=Math.max(0,Math.floor(t*a.length/s)-1),c=Math.min(a.length,Math.ceil((t+1)*a.length/s)+1),l=a.slice(i,c).flatMap(e=>e.points);if(!l.length)continue;let u=o+t*103,d=5+Math.floor(Cd(e,u+7)*4),f=Cd(e,u+13)*Math.PI*2,p=n*(.55+Cd(e,u+19)*.9),m=Array.from({length:d},(t,n)=>{let r=f+n/d*Math.PI*2,i=Math.cos(r),a=Math.sin(r),o=Math.max(.2,p+(Cd(e,u+31+n*17)-.5)*4),s=-1/0;for(let e of l)s=Math.max(s,e.x*i+e.y*a);return{nx:i,ny:a,limit:s+o,margin:o}});r.push({planes:m})}}return r}function Td(e,{width:t=100,height:n=130,cellSize:r=.16,worms:i=[],edgeChipping:a=!0}={}){let o=[`ellipse`,`pentagon`,`heptagon`,`trapezoid`,`rounded-rectangle`],s=o[Math.floor(Cd(e,7181)*o.length)],c=25+Cd(e,7289)*13,l=36+Cd(e,7393)*19,u=(Cd(e,7411)-.5)*.75,d=(Cd(e,7523)-.5)*8,f=(Cd(e,7607)-.5)*10,p=Cd(e,7723)*Math.PI*2,m={model:`textured-local-sidewalls`,thickness:2.8+Cd(e,23111)*3.5,bevelWidth:.9+Cd(e,23201)*1.1,phase:Cd(e,23297)*Math.PI*2},h=1.1+Cd(e,7829)*5.9,_=wd(e,i,h),v=0,y=g(()=>Cd(e,21001+v++)),b=.85+Cd(e,21997)*.35,x=Math.cos(u),S=Math.sin(u),C=null;if(s===`pentagon`||s===`heptagon`){let t=s===`pentagon`?5:7;C=Array.from({length:t},(n,r)=>{let i=(r/t+.09)*Math.PI*2,a=.85+Cd(e,8009+r*101)*.22;return{x:Math.cos(i)*c*a,y:Math.sin(i)*l*a}})}else s===`trapezoid`&&(C=[{x:-c,y:-l},{x:c,y:-l*.8},{x:c*.68,y:l},{x:-c*.82,y:l*.9}]);function w(t,n){let r=(t-d)*x+(n-f)*S,i=-(t-d)*S+(n-f)*x,a;if(C){let e=!1,t=1/0;for(let n=0,a=C.length-1;n<C.length;a=n++){let o=C[a],s=C[n],c=s.x-o.x,l=s.y-o.y,u=Math.max(0,Math.min(1,((r-o.x)*c+(i-o.y)*l)/(c*c+l*l)));t=Math.min(t,Math.hypot(r-o.x-u*c,i-o.y-u*l)),o.y>i!=s.y>i&&r<(s.x-o.x)*(i-o.y)/(s.y-o.y)+o.x&&(e=!e)}a=e?t:-t}else{let t=s===`ellipse`?2:4+Cd(e,8191)*5;a=(1-(Math.abs(r/c)**+t+Math.abs(i/l)**+t)**(1/t))*Math.min(c,l)}let o=Math.atan2(i/l,r/c);return a+Math.sin(o*5+p)*.85+Math.sin(o*13-p)*.45+Math.sin(o*31+p)*.22-Math.abs(Math.sin(o*59-p))*.18}let T=Math.ceil(t/r)+1,E=Math.ceil(n/r)+1,D=new Float32Array(T*E);for(let e=0;e<E;e++)for(let i=0;i<T;i++){let o=-t/2+i*r,s=-n/2+e*r,c=w(o,s);for(let e of _){let t=1/0;for(let n of e.planes)if(t=Math.min(t,n.limit-o*n.nx-s*n.ny),t<=c)break;c=Math.max(c,t)}if(a&&Math.abs(c)<3){let e=y(o/5.3-19,s/5.3+47)*.2+y(o/2.4,s/2.4)*.25+y(o/.78+31,s/.78-17)*.06+y(o/.26-43,s/.26+11)*.015-Math.max(0,y(o/1.25+71,s/1.25))**3*.3,t=Math.max(0,Math.min(1,(Math.abs(c)-1)/2));c+=e*b*(1-t*t*(3-2*t))}D[e*T+i]=c}function O(e,i){let a=Math.max(0,Math.min(T-1.001,(e+t/2)/r)),o=Math.max(0,Math.min(E-1.001,(i+n/2)/r)),s=Math.floor(a),c=Math.floor(o),l=a-s,u=o-c,d=c*T+s;return(D[d]*(1-l)+D[d+1]*l)*(1-u)+(D[d+T]*(1-l)+D[d+T+1]*l)*u}function k(e,t){return m.thickness*(.8+.16*Math.sin(e*.085+t*.064+m.phase)+.12*Math.sin(e*.21-t*.13-m.phase))}function A(e,t){let n=Math.max(0,Math.min(1,.45+.3*Math.sin(e*.095+t*.08+m.phase)+.25*Math.sin(e*.17-t*.11-m.phase)));return m.thickness*(.06+.6*n**1.3)}let j=new Float32Array(D.length),ee=new Float32Array(D.length),te=new Float32Array(D.length*4);for(let e=0;e<E;e++)for(let i=0;i<T;i++){let a=e*T+i,o=-t/2+i*r,s=-n/2+e*r,c=0,l=.5;Math.abs(D[a])<m.thickness*.7+2&&(c=A(o,s),l=Math.max(0,Math.min(1,.5+y(o/2.8+13,s/2.8-27)*.26+y(o/.85-53,s/.85+7)*.15+y(o/.28+37,s/.28-19)*.05))),j[a]=c,ee[a]=l,te[a*4]=D[a],te[a*4+1]=c,te[a*4+2]=l,te[a*4+3]=1}function M(e,i,a){let o=Math.max(0,Math.min(T-1.001,(i+t/2)/r)),s=Math.max(0,Math.min(E-1.001,(a+n/2)/r)),c=Math.floor(o),l=Math.floor(s),u=o-c,d=s-l,f=l*T+c;return(e[f]*(1-u)+e[f+1]*u)*(1-d)+(e[f+T]*(1-u)+e[f+T+1]*u)*d}function ne(e,t,n=O(e,t)){return n>=0||n<-m.thickness*.66?n:n+A(e,t)}function re(e,t){return .27+M(ee,e,t)*.5}return{field:D,surfaceField:te,columns:T,rows:E,cellSize:r,width:t,height:n,distance:O,thicknessAt:k,wallWidthAt:A,footprintDistance:ne,wallShadeAt:re,metadata:{shape:s,halfWidth:c,halfHeight:l,rotation:u,centerX:d,centerY:f,phase:p,margin:h,cellSize:r,envelopeMode:`angular-chunk-groups`,envelopes:_,edgeChipping:a,chipStrength:b,volume:m}}}function Ed(e,t,n=new q(0)){let r=new gi(e.surfaceField,e.columns,e.rows,le,M);r.minFilter=r.magFilter=T,r.needsUpdate=!0;let i=new Pa({uniforms:{uDistance:{value:r},uSize:{value:new U(e.width,e.height)},uGridSize:{value:new U(e.columns,e.rows)},uCell:{value:e.cellSize},uThickness:{value:e.metadata.volume.thickness},uBevel:{value:e.metadata.volume.bevelWidth},uPhase:{value:e.metadata.volume.phase},uExteriorColor:{value:n},uPaper:{value:new q(t.paper.color)},uInk:{value:new q(t.dots.inkColor)},uLight:{value:new W(t.light.direction.x,t.light.direction.y,t.light.direction.z).normalize()}},vertexShader:`varying vec2 vPosition;void main(){vPosition=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`varying vec2 vPosition;uniform sampler2D uDistance;uniform vec2 uSize;uniform vec2 uGridSize;uniform float uCell;
      uniform float uThickness,uBevel,uPhase;uniform vec3 uPaper,uInk,uLight,uExteriorColor;
      vec3 surfaceAt(vec2 p){return texture2D(uDistance,((p+uSize*0.5)/uCell+0.5)/uGridSize).rgb;}
      float wallWidthAt(vec2 p){float fracture=clamp(0.45+0.30*sin(p.x*0.095+p.y*0.080+uPhase)+0.25*sin(p.x*0.17-p.y*0.11-uPhase),0.0,1.0);return uThickness*(0.06+0.60*pow(fracture,1.3));}
      void main(){
        vec2 p=vPosition;
        vec3 surface=surfaceAt(p);
        float d=surface.r;
        // Only the rim needs extra texture reads; the face keeps the v10 fast path.
        if(d>uBevel*1.3)discard;
        if(d < -uThickness*0.66-0.15){gl_FragColor=linearToOutputTexel(vec4(uExteriorColor,1.0));return;}
        float aa=max(fwidth(d),0.018);
        float wallWidth=wallWidthAt(p);
        float body=d+wallWidth;
        float outside=1.0-smoothstep(-aa,aa,body);
        if(body < -aa){gl_FragColor=linearToOutputTexel(vec4(uExteriorColor,1.0));return;}
        vec3 sxp=surfaceAt(p+vec2(uCell,0.0)),sxm=surfaceAt(p-vec2(uCell,0.0));
        vec3 syp=surfaceAt(p+vec2(0.0,uCell)),sym=surfaceAt(p-vec2(0.0,uCell));
        vec2 gradient=vec2(sxp.r-sxm.r,syp.r-sym.r);
        vec2 roughGradient=vec2(sxp.b-sxm.b,syp.b-sym.b)/max(2.0*uCell,0.01);
        vec2 outward=-gradient/max(length(gradient),0.001);
        float grain=sin(p.x*7.7+p.y*11.3+uPhase)*sin(p.x*17.1-p.y*5.9-uPhase);
        float width=uBevel*(0.85+0.20*sin(p.x*0.19+p.y*0.14+uPhase));
        if(d>=0.0){
          float rim=1.0-smoothstep(0.0,width,d);
          vec3 normal=normalize(vec3(outward*rim*1.4,1.0));
          float lighting=(max(dot(normal,uLight),0.0)-uLight.z)*1.05;
          float alpha=clamp(abs(lighting)*rim+grain*rim*0.025,0.0,0.74);
          gl_FragColor=vec4(mix(lighting>0.0?uPaper:vec3(0.0),uExteriorColor,outside),max(alpha,outside));
        }else{
          float depth=clamp(-d/max(wallWidth,0.1),0.0,1.0);
          // Fine relief and broken mineral layers live on the wall surface.
          float rough=surface.b;
          vec3 normal=normalize(vec3(outward-roughGradient*0.75,0.32+(rough-0.5)*0.25));
          float light=max(dot(normal,uLight),0.0);
          float layers=pow(0.5+0.5*sin(depth*17.0+rough*9.0+p.x*0.23+p.y*0.17+uPhase),12.0);
          float contact=(1.0-smoothstep(0.0,0.4,body))*0.12;
          float darkness=clamp(0.32+(1.0-light)*0.27+(rough-0.5)*0.26+layers*0.08+grain*0.025+contact,0.0,0.86);
          gl_FragColor=vec4(uInk*0.06*(1.0-outside)+uExteriorColor*outside,mix(darkness,1.0,outside));
        }
        #include <colorspace_fragment>
      }`,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),a=new pi(new Ca(e.width,e.height),i);return a.renderOrder=4,a.frustumCulled=!1,a.name=`rock-slab-cutout`,a}var Dd=Object.freeze({"strata-deep":Object.freeze({label:`C1 — Głębokie szczeliny`,short:`C1`,description:`Poszarpane warstwy i zwarte szczeliny. Kropki skały nierównomiernie jaśnieją przy robakach.`,plateArea:85,proximityMode:`patchy-lighten`,layerScale:1,reliefStrength:1.35,opacityScale:.68}),"strata-worn":Object.freeze({label:`C2 — Starta powierzchnia`,short:`C2`,description:`Szersze, wygładzone warstwy przeplatane chropowatością. Kropki skały nierównomiernie jaśnieją przy robakach.`,plateArea:135,proximityMode:`patchy-lighten`,layerScale:1.85,reliefStrength:.65}),"strata-flaked":Object.freeze({label:`C3 — Kruchy łupek`,short:`C3`,description:`Cienkie warstwy, ukruszenia i większe odłamki. Kropki skały nierównomiernie jaśnieją przy robakach.`,plateArea:35,proximityMode:`patchy-lighten`,layerScale:.55,reliefStrength:1.05,opacityScale:.74})});function Od(e,t=`random`){if(Object.hasOwn(Dd,t))return t;let n=Math.imul(e^1367130551,569420461);return n=Math.imul(n^n>>>15,1935289751),Object.keys(Dd)[((n^n>>>15)>>>0)%3]}var kd=Object.freeze({version:`rock-v19`,paperColor:16250610,opacityScale:1,width:100,height:130,spacing:.17,maskCellSize:.08,clearance:0,edgeFade:0,radiusMin:.065,radiusMax:.145,reliefCellSize:.24,plateArea:55,densityMin:.025,densityMax:1,toneMin:1,toneMax:1,candidateDensityScale:1.5,proximity:!0,proximityLightening:.98,proximityRangeMin:1.8,proximityRangeMax:9,proximityStrengthMin:.62,proximityFalloffPower:1.8});function Ad(e){let t=0,n=0,r=0,i=0;for(let a of e){let e=a.spec.chunks,o=e.sampling,s=e.useLocalDensity&&e.length?e.reduce((e,t)=>e+t.density,0)/e.length:1;t+=(o?.densityU??e.density)*s*1.5,n+=(o?.densityV??e.density)*s,i+=+(o?.profile===`anisotropic`),r++}return{spacingU:1/Math.max(1.5,t/(r||1)),spacingV:1/Math.max(1.5,n/(r||1)),anisotropic:i/(r||1)}}function jd(e,t,n,r=0){let i=e^Math.imul(t,2654435761)^Math.imul(n,2246822507)^r;return i=Math.imul(i^i>>>16,569420461),i=Math.imul(i^i>>>15,1935289751),((i^i>>>15)>>>0)/4294967296}var Md=(e,t,n)=>e+(t-e)*n;function Nd(e,t,n=kd){let r=n.maskCellSize,i=Math.ceil(n.width/r),a=Math.ceil(n.height/r),o=-n.width/2,s=-n.height/2,c=new Uint8Array(i*a);for(let t of e){let e=Math.max(0,Math.floor((t.bottom-s)/r)),n=Math.min(a-1,Math.ceil((t.top-s)/r)),l=t.points;for(let t=e;t<=n;t++){let e=s+(t+.5)*r,n=[];for(let t=0,r=l.length-1;t<l.length;r=t++){let i=l[r],a=l[t];i.y>e!=a.y>e&&n.push(i.x+(e-i.y)*(a.x-i.x)/(a.y-i.y))}n.sort((e,t)=>e-t);for(let e=0;e+1<n.length;e+=2){if(n[e+1]<o||n[e]>=o+i*r)continue;let a=Math.max(0,Math.ceil((n[e]-o)/r-.5)),s=Math.min(i-1,Math.floor((n[e+1]-o)/r-.5));c.fill(1,t*i+a,t*i+s+1)}}}if(t){let e=t.getAttribute(`position`).array,n=t.getAttribute(`aRadius`).array,l=t.drawRange.count;for(let t=0;t<l;t++){let l=e[t*3],u=e[t*3+1],d=n[t],f=d*d,p=Math.max(0,Math.floor((l-d-o)/r)),m=Math.min(i-1,Math.ceil((l+d-o)/r)),h=Math.max(0,Math.floor((u-d-s)/r)),g=Math.min(a-1,Math.ceil((u+d-s)/r));for(let e=h;e<=g;e++)for(let t=p;t<=m;t++){let n=e*i+t;if(c[n])continue;let a=o+(t+.5)*r-l,d=s+(e+.5)*r-u;a*a+d*d<=f&&(c[n]=1)}}}let l=Math.ceil(i/3),u=Math.ceil(a/3),d=new Float32Array(l*u).fill(1e4);if(n.proximity){for(let e=0;e<a;e++)for(let t=0;t<i;t++)c[e*i+t]&&(d[Math.floor(e/3)*l+Math.floor(t/3)]=0);for(let e=0;e<u;e++)for(let t=0;t<l;t++){let n=e*l+t;t&&(d[n]=Math.min(d[n],d[n-1]+1)),e&&(d[n]=Math.min(d[n],d[n-l]+1),t&&(d[n]=Math.min(d[n],d[n-l-1]+Math.SQRT2)),t+1<l&&(d[n]=Math.min(d[n],d[n-l+1]+Math.SQRT2)))}for(let e=u-1;e>=0;e--)for(let t=l-1;t>=0;t--){let n=e*l+t;t+1<l&&(d[n]=Math.min(d[n],d[n+1]+1)),e+1<u&&(d[n]=Math.min(d[n],d[n+l]+1),t&&(d[n]=Math.min(d[n],d[n+l-1]+Math.SQRT2)),t+1<l&&(d[n]=Math.min(d[n],d[n+l+1]+Math.SQRT2)))}}return{distanceAt(e,t){let n=Math.max(0,Math.min(l-1,Math.floor((e-o)/(r*3)))),i=Math.max(0,Math.min(u-1,Math.floor((t-s)/(r*3))));return d[i*l+n]*r*3},at(e,t){let n=Math.floor((e-o)/r),l=Math.floor((t-s)/r);return n<0||n>=i||l<0||l>=a?0:+!c[l*i+n]}}}function Pd(e,t,n=kd,r=xd(e,n),i=null){let a=[],o=[],s=[],c=[],l=[],u=0,d=g(()=>jd(e,u++,0,1139878551)),f=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)},p=n.candidateDensityScale??1,m=(n.spacingU??n.spacing)/p,h=(n.spacingV??n.spacing)/p,_=Math.floor(n.width/m),v=Math.floor(n.height/h);for(let u=0;u<v;u++)for(let p=0;p<_;p++){let g=-n.width/2+(p+.5+(jd(e,p,u,53)-.5)*.8)*m,_=-n.height/2+(u+.5+(jd(e,p,u,67)-.5)*.8)*h,v=i?i.distance(g,_):1;if(i&&v<0&&i.footprintDistance(g,_,v)<0)continue;let y=t.at(g,_);if(!y)continue;let b=r.at(g,_).shade;v<0&&(b=Math.max(.12,Math.min(.95,b*.86+i.wallShadeAt(g,_)*.14)));let x=Md(n.densityMin,n.densityMax,b**1.15);if(jd(e,p,u,109)>=x*y)continue;a.push(g,_,0);let S=jd(e,p,u,127);o.push(Md(n.radiusMin,n.radiusMax,S));let C=n.alphaQuantiles,w=C?C[Math.min(C.length-1,Math.floor(b*(C.length-1)))]:b;s.push(w*y),c.push(Md(n.toneMax,n.toneMin,b**.7));let T=1,E=n.proximity&&t.distanceAt?t.distanceAt(g,_):1/0;if(E<n.proximityRangeMax){let e=d(g/3.4,_/3.4),t=d(g/.9+17,_/.9-31),r=f(.5+e*.65+t*.28),i=Md(n.proximityRangeMin,n.proximityRangeMax,r),a=Md(n.proximityStrengthMin,1,f(.5+t*.7)),o=f(1-(E/i)**+n.proximityFalloffPower);T-=n.proximityLightening*a*o}l.push(T)}return{positions:new Float32Array(a),radii:new Float32Array(o),alphas:new Float32Array(s),tones:new Float32Array(c),contrasts:new Float32Array(l)}}function Fd(e,t){let n=e.clone();for(let e of[`uDotOpacity`,`uAoOpacity`,`uShadowOpacity`])n.uniforms[e]&&(n.uniforms[e].value*=t.opacityScale??1);return n.vertexShader=`attribute float aRockContrast;
 varying float vRockContrast;
`+n.vertexShader.replace(`void main() {`,`void main() {
 vRockContrast = aRockContrast;`),n.fragmentShader=`varying float vRockContrast;
`+n.fragmentShader.replace(`#include <tonemapping_fragment>`,`gl_FragColor.a *= vRockContrast;
 #include <tonemapping_fragment>`),n}var Id=class{constructor(e,t=new q(0)){this.exteriorColor=t,this.settings=kd,this.mesh=new zi(new Wr,e.clone()),this.mesh.name=`high-quality-rock-background`,this.mesh.visible=!1,this.mesh.renderOrder=.5,this.mesh.frustumCulled=!1,this.dotCount=0}update(e,t,n,r,i,a=`strata-deep`){let o=performance.now(),s=Dd[a]??Dd[`strata-deep`],c=i.dots.material,l=Math.min(n.drawRange.count,n.attributes.aAlpha.count),u=n.attributes.aAlpha.array,d=n.attributes.aAlpha.version;if(this.alphaSource!==u||this.alphaCount!==l||this.alphaVersion!==d){let e=u.slice(0,l).sort();this.alphaQuantiles=Array.from({length:257},(t,n)=>e[Math.floor(n/256*(l-1))]??n/256),this.alphaSource=u,this.alphaCount=l,this.alphaVersion=d}let f=performance.now(),p=this.alphaQuantiles;this.settings={...kd,...s,variant:a,...Ad(t),radiusMin:r.dots.radiusMin,radiusMax:r.dots.radiusMax,alphaQuantiles:p,inkColor:r.dots.inkColor,sourceColorMix:r.dots.sourceColorMix};let m=n.attributes.position.version,h=n.attributes.aRadius.version;(this.surfaceGeometry!==n||this.surfaceWorms!==t||this.surfaceCount!==l||this.surfaceSeed!==e||this.positionVersion!==m||this.radiusVersion!==h)&&(this.mask=Nd(t.flatMap(e=>e.cullingPolygons??[]),n,this.settings),this.surfaceGeometry=n,this.surfaceWorms=t,this.surfaceCount=l,this.surfaceSeed=e,this.positionVersion=m,this.radiusVersion=h);let g=performance.now();(this.slabSeed!==e||this.slabWorms!==t)&&(this.slab=Td(e,{width:this.settings.width,height:this.settings.height,cellSize:this.settings.reliefCellSize,worms:t}),this.slabSeed=e,this.slabWorms=t);let _=performance.now(),v=this.mask;(this.relief?.seed!==e||this.relief?.variant!==a)&&(this.relief=xd(e,this.settings));let y=performance.now();this.settings.slab=this.slab.metadata;let b=Pd(e,v,this.settings,this.relief,this.slab),x=performance.now(),S=new Wr;S.setAttribute(`position`,new J(b.positions,3)),S.setAttribute(`aRadius`,new J(b.radii,1)),S.setAttribute(`aAlpha`,new J(b.alphas,1)),S.setAttribute(`aTone`,new J(b.tones,1)),S.setAttribute(`aRockContrast`,new J(b.contrasts,1));let C=b.radii.length,w=n.attributes.aDotColor.array,T=new Float32Array(C*3),E=new Float32Array(C),D=new Float32Array(C);for(let t=0;t<C;t++){D[t]=jd(e,t,0,881),E[t]=Md(r.dots.heightMin,r.dots.heightMax,D[t]**+r.dots.heightBias);let n=Math.min(l-1,Math.floor(jd(e,t,0,882)*l))*3;T.set(w.subarray(n,n+3),t*3)}S.setAttribute(`aDotColor`,new J(T,3)),S.setAttribute(`aHeight`,new J(E,1)),S.setAttribute(`aSeed`,new J(D,1)),this.mesh.material.dispose(),this.mesh.material=Fd(c,this.settings);for(let e of[...this.mesh.children])this.mesh.remove(e),e.material.uniforms?.uDistance?.value.dispose(),e.material.dispose(),e.geometry!==this.mesh.geometry&&e.geometry.dispose();for(let[e,t]of[[`ambientOcclusion`,.2],[`shadows`,.3]]){let n=new zi(S,Fd(i[e].material,this.settings));e===`shadows`&&(n.material.uniforms.uSurfaceLift.value=0),n.renderOrder=t,n.frustumCulled=!1,n.name=`rock-`+e,this.mesh.add(n)}let O={...r,paper:{...r.paper,color:this.settings.paperColor}};this.mesh.add(Ed(this.slab,O,this.exteriorColor)),this.mesh.geometry.dispose(),this.mesh.geometry=S,this.dotCount=b.radii.length,this.generationMs=performance.now()-o,this.phaseMs={alpha:f-o,mask:g-f,slab:_-g,relief:y-_,scatter:x-y,buffers:this.generationMs-(x-o)}}},Ld=new G().set(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),Rd=new G().set(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602),zd=e=>(e*(e+.0245786)-90537e-9)/(e*(.983729*e+.432951)+.238081);function Bd(e,t=1){let n=new q(e).multiplyScalar(t/.6).applyMatrix3(Ld);return n.setRGB(zd(n.r),zd(n.g),zd(n.b)).applyMatrix3(Rd),n.setRGB(Math.max(0,Math.min(1,n.r)),Math.max(0,Math.min(1,n.g)),Math.max(0,Math.min(1,n.b))),n}Object.freeze([`eyes`,`legs`,`hair`,`spikes`]);var Vd=Object.freeze([`hair`,`spikes`]);function Hd(e,t,n,r=0){let i=(e^Math.imul(t+1,2654435761)^Math.imul(n+1,2246822507)^Math.imul(r+1,3266489909))>>>0;return i=Math.imul(i^i>>>16,569420461),i=Math.imul(i^i>>>15,1935289751),((i^i>>>15)>>>0)/4294967296}function Ud(e,t,n){return e===`none`||e===`0`?[]:e===`all`||e===`random`?[...Vd]:Vd.filter(t=>e.split(`,`).includes(t))}function Wd(e,t){return 1+Math.floor(Hd(e,t,6,0)*6)}function Gd(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[a],s=n[i];o.y>t!=s.y>t&&e<(s.x-o.x)*(t-o.y)/(s.y-o.y)+o.x&&(r=!r)}return r}function Kd(e,t,n){let r=e.chunks.find(e=>n<=e.arcLast.pivot.at)??e.chunks.at(-1),i=r.arcFirst.pivot.at,a=r.arcLast.pivot.at,o=H.clamp((n-i)/Math.max(a-i,1e-6),0,1);return r.getStripCurve(t).getPointAt(o).add(r.getBendAdjustmentVector(t,o))}function qd(e,t,n){let r=Kd(e,t<0?0:1,n),i=Kd(e,0,n),a=Kd(e,1,n),o=Kd(e,.5,Math.min(1,n+.004)).sub(Kd(e,.5,Math.max(0,n-.004))).normalize(),s=new U(-o.y,o.x);return s.dot(r.clone().sub(Kd(e,.5,n)))<0&&s.negate(),{point:r,tangent:o,outward:s,width:i.distanceTo(a)}}function Jd(e,t,n,r){if(r=r.filter(e=>Vd.includes(e)),!e.chunks.length||!r.length)return[];let i=[],a=(e,r)=>Hd(t,n,e,r),o=(e,t,r=1,a=.9,o=0)=>{i.push({x:e.x,y:e.y,z:0,wormIndex:n,kind:t,radiusScale:r,alpha:a,tone:o})},s=t=>(e.cullingPolygons??[]).some(e=>e.pointInsidePolygon(t)),c=(e,t,n=1,r=.9)=>{let i=.22*n;for(let a=1;a<e.length;a++){let s=e[a-1],c=e[a],l=Math.max(1,Math.ceil(s.distanceTo(c)/i));for(let e=a===1?0:1;e<=l;e++)o(s.clone().lerp(c,e/l),t,n,r)}},l=e.chunks.reduce((e,t)=>e+t.getBentStrip(.5).length,0),u=a(5,0)<.5,d=u?.045:.955,f=u?-1:1;if(r.includes(`legs`)){let t=3+Math.floor(a(1,1)*7),n=f*(a(1,2)-.25);for(let r=0;r<t;r++){let i=.18+r/Math.max(1,t-1)*.66;for(let t of[-1,1]){let{point:o,tangent:s,outward:l,width:u}=qd(e,t,i),d=H.clamp(u*(.3+a(1,10+r)*.5),1.2,7),p=o.clone().addScaledVector(l,-.15),m=o.clone().addScaledVector(l,d*.6).addScaledVector(s,d*n*.45),h=o.clone().addScaledVector(l,d*.8).addScaledVector(s,d*(n-f*.6));c([p,m,h],`legs`,.82),a(1,30+r)<.6&&c([h.clone().addScaledVector(s,-.35),h.clone().addScaledVector(s,.35)],`legs`,.72)}}}if(r.includes(`spikes`)){let t=H.clamp(Math.round(l/(3.5+a(3,1)*2.5)),5,18),n=f*(.25+a(3,2)*.5);for(let r=0;r<t;r++)for(let i of[-1,1]){let c=r*2+ +(i>0),l=e=>a(30+c,e),{point:u,tangent:d,outward:f,width:p}=qd(e,i,.09+(r+.2+l(0)*.4)/t*.82),m=H.clamp(p*(.2+l(1)*.35),1,6),h=H.clamp(p*(.02+l(2)*.025),.14,.55),g=new _a(u.clone().addScaledVector(f,-.18),u.clone().addScaledVector(f,m*.6).addScaledVector(d,-n*m*.12),u.clone().addScaledVector(f,m).addScaledVector(d,-n*m)),_=Math.ceil(g.getLength()/.15);for(let e=0;e<=_;e++){let t=e/_,n=g.getPointAt(t),r=g.getTangentAt(t),i=new U(-r.y,r.x),a=h*(1-t)**1.25*(.92+l(100+e)*.16),c=Math.max(1,Math.ceil(a*2/.16));for(let r=0;r<=c;r++){let u=(r/c*2-1)*a,d=n.clone().addScaledVector(i,u+(l(300+e*17+r)-.5)*.04);t>.08&&s(d)||o(d,`spikes`,.85-t*.3,.55+l(1500+e*17+r)*.3)}}}}if(r.includes(`hair`)){let t=H.clamp(Math.round(l/(2.6+a(2,1)*2.4)),8,45),n=-f*(.3+a(2,2)*.55);for(let r=0;r<t;r++)for(let i of[-1,1]){let c=r*2+ +(i>0),l=e=>a(100+c,e),u=.06+(r+.2+l(0)*.6)/t*.88,d=3+Math.floor(l(1)*5),f=.12+l(2)*.25,p=n+(l(3)-.5)*.45;for(let n=0;n<d;n++){let{point:r,tangent:a,outward:c,width:m}=qd(e,i,H.clamp(u+(n/(d-1)-.5)*.5/t,.04,.96)),h=H.clamp(m*f*(.65+l(20+n)*.75),.7,5),g=p+(n/(d-1)-.5)*.45,_=new pa(r.clone().addScaledVector(c,-.08),r.clone().addScaledVector(c,h*.48).addScaledVector(a,h*g*.08),r.clone().addScaledVector(c,h*.95).addScaledVector(a,h*g*.6),r.clone().addScaledVector(c,h*(.75+l(40+n)*.2)).addScaledVector(a,h*g)),v=_.getSpacedPoints(Math.max(4,Math.ceil(_.getLength()/.13)));v.forEach((e,t)=>{let r=t/(v.length-1);r>.08&&s(e)||o(e,`hair`,.76*(1-r*.55),(.85+l(60+n)*.1)*(1-r*.3))})}}}if(r.includes(`eyes`)){let r=qd(e,1,d),i=qd(e,1,u?.09:.91).width,s=Kd(e,1,d).sub(Kd(e,0,d)).normalize(),c=Wd(t,n),p=c===1?1:c===2?2:3,m=H.clamp(i*.18/Math.max(l,1),.02,.06);for(let t=0;t<c;t++){let n=e=>a(7+t,e),l=Math.floor(t/p),u=Math.min(p,c-l*p),h=t%p,g=u===1?.5:.24+h/(u-1)*.52,_=d-f*l*m+(n(1)-.5)*m*.45,v=Kd(e,g+(n(2)-.5)*.07,_),y=H.clamp(i*(.065+n(3)*.045),.4,1.8)*(c>3?.8:1),b=n(4),x=b<.85,S=b>=.5&&b<.85,C=S?8+Math.floor(n(5)*5):4+Math.floor(n(5)*4),w=n(6)*Math.PI*2,T=1.8+n(7)*1.3,E=(n(9)-.5)*.65,D=Array.from({length:C},(e,t)=>{let r=w+(t+(n(20+t)-.5)*.3)/C*Math.PI*2,i=S&&t%3==1?.45:1,a=(.65+n(40+t)*.5)*i;return new U(Math.cos(r)*a,Math.sin(r)*a*T).rotateAround(new U,E)});x||(D=new ya([...D,D[0]]).getPoints(40));let O=.14+n(8)*.04,k=Math.ceil(y*T*1.3/O);for(let t=-k;t<=k;t++)for(let i=-k;i<=k;i++){let a=(t+k)*(k*2+1)+i+k,c=(i+(n(100+a*4)-.5)*.75)*O,l=(t+(n(101+a*4)-.5)*.75)*O;if(!Gd(c/y,l/y,D)||n(102+a*4)<.12)continue;let u=v.clone().addScaledVector(s,c).addScaledVector(r.tangent,l);(!e.cullingPolygons?.length||e.cullingPolygons.some(e=>e.pointInsidePolygon(u)))&&o(u,`eyes`,.6+n(103+a*4)*.3,.4+n(104+a*4)*.45)}}}return i}function Yd(e,t,n,r=.1){let i=Math.ceil(t/r),a=Math.ceil(n/r),o=new Float32Array(i*a),s=-t/2,c=-n/2;for(let t=e.length-1;t>=0;t--)for(let n of e[t].cullingPolygons??[]){let e=n.points,l=Math.max(0,Math.floor((n.bottom-c)/r)),u=Math.min(a-1,Math.ceil((n.top-c)/r));for(let n=l;n<=u;n++){let a=c+(n+.5)*r,l=[];for(let t=0,n=e.length-1;t<e.length;n=t++){let r=e[n],i=e[t];r.y>a!=i.y>a&&l.push(r.x+(a-r.y)*(i.x-r.x)/(i.y-r.y))}l.sort((e,t)=>e-t);for(let e=0;e+1<l.length;e+=2){let a=Math.max(0,Math.ceil((l[e]-s)/r-.5)),c=Math.min(i-1,Math.floor((l[e+1]-s)/r-.5));a<=c&&o.fill(t+1,n*i+a,n*i+c+1)}}}return{field:o,columns:i,rows:a}}var Xd=`
	attribute float aDetailOwner;
	attribute float aDetailTone;
	varying float vDetailOwner;
	varying float vDetailTone;
`,Zd=`
	uniform mat4 uDetailInverseViewProjection;
	uniform vec2 uDetailViewport, uDetailSize, uDetailGrid;
	uniform float uDetailCell, uDetailThickness, uDetailPhase;
	uniform sampler2D uDetailSlab, uDetailOwners;
	varying float vDetailOwner;
	void main() {
		vec2 ndc = gl_FragCoord.xy / uDetailViewport * 2.0 - 1.0;
		vec4 a = uDetailInverseViewProjection * vec4(ndc, -1.0, 1.0);
		vec4 b = uDetailInverseViewProjection * vec4(ndc, 1.0, 1.0);
		vec3 nearPoint = a.xyz / a.w, farPoint = b.xyz / b.w;
		vec3 direction = farPoint - nearPoint;
		vec2 p = (nearPoint - direction * nearPoint.z / direction.z).xy;
		vec2 uv = (p + uDetailSize * 0.5) / uDetailSize;
		if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) discard;
		float owner = texture2D(uDetailOwners, uv).r;
		if (owner > 0.5 && owner < vDetailOwner - 0.5) discard;
		float d = texture2D(uDetailSlab, ((p + uDetailSize * 0.5) / uDetailCell + 0.5) / uDetailGrid).r;
		float fracture = clamp(0.45 + 0.30 * sin(p.x * 0.095 + p.y * 0.080 + uDetailPhase)
			+ 0.25 * sin(p.x * 0.17 - p.y * 0.11 - uDetailPhase), 0.0, 1.0);
		float wallWidth = uDetailThickness * (0.06 + 0.60 * pow(fracture, 1.3));
		if (d < -uDetailThickness * 0.66 - 0.15 || d + wallWidth < 0.0) discard;
		detailShade();
	}
`,Qd=class{constructor(){this.group=new Un,this.group.name=`worm-details`,this.reset()}reset(){for(let e of Object.values(this.cachedDotPasses??{}))e.material.dispose();this.group.clear(),this.dotGeometry?.dispose(),this.slabTexture?.dispose(),this.ownerTexture?.dispose(),this.cachedDotPasses=null,this.dotGeometry=null,this.dotCapacity=0,this.slab=null,this.slabTexture=null,this.ownerTexture=null,this.dots=[],this.members=[],this.group.visible=!1}generate(e,t,n=`hair,spikes`){this.reset(),this.worms=e,this.seed=t,this.mode=n,this.members=e.map((e,r)=>{let i=Ud(n,t,r);return{index:r,types:i,eyeCount:i.includes(`eyes`)?Wd(t,r):0}});for(let n=e.length-1;n>=0;n--)this.dots.push(...Jd(e[n],t,n,this.members[n].types))}setSlab(e){if(!this.dots.length||this.slab===e)return!1;this.slabTexture?.dispose(),this.ownerTexture?.dispose(),this.slab=e,this.slabTexture=new gi(e.surfaceField,e.columns,e.rows,le,M),this.slabTexture.minFilter=this.slabTexture.magFilter=T,this.slabTexture.needsUpdate=!0;let t=Yd(this.worms,e.width,e.height);this.ownerTexture=new gi(t.field,t.columns,t.rows,de,M),this.ownerTexture.needsUpdate=!0;for(let e of Object.values(this.cachedDotPasses??{}))this.bindMasks(e.material);return this.group.visible=!0,!0}ensureSlab(e){return!this.dots.length||this.slab?!1:this.setSlab(Td(this.seed,{...e,cellSize:e.reliefCellSize,worms:this.worms}))}bindMasks(e){if(!this.slab)return;let t=this.slab;Object.assign(e.uniforms,{uDetailSlab:{value:this.slabTexture},uDetailOwners:{value:this.ownerTexture},uDetailSize:{value:new U(t.width,t.height)},uDetailGrid:{value:new U(t.columns,t.rows)},uDetailCell:{value:t.cellSize},uDetailThickness:{value:t.metadata.volume.thickness},uDetailPhase:{value:t.metadata.volume.phase}})}update(e,t){if(!this.dots.length)return;let n=t(this),r=new Float32Array(this.dotCapacity),i=new Float32Array(this.dotCapacity);for(let e=0;e<this.dots.length;e++)r[e]=this.dots[e].wormIndex+1,i[e]=this.dots[e].tone;this.dotGeometry.setAttribute(`aDetailOwner`,new J(r,1)),this.dotGeometry.setAttribute(`aDetailTone`,new J(i,1));let a=3.05;for(let[t,r]of Object.entries(n)){let n=r.material;n.userData.detailMask||(n.vertexShader=Xd+n.vertexShader.replace(/void main\(\)\s*\{/,`void main() { vDetailOwner = aDetailOwner; vDetailTone = aDetailTone;`),t===`dots`&&(n.fragmentShader=`varying float vDetailTone; uniform vec3 uDetailPaper;
`+n.fragmentShader.replace(`vec3 baseColour = mix(uInkColor, vDotColor, uSourceColorMix);`,`vec3 baseColour = mix(mix(uInkColor, vDotColor, uSourceColorMix), uDetailPaper, vDetailTone);`)),n.fragmentShader=n.fragmentShader.replace(/void main\(\)/,`void detailShade()`)+Zd,n.uniforms.uDetailInverseViewProjection={value:new hn},n.uniforms.uDetailViewport={value:new U},n.userData.detailMask=!0,n.needsUpdate=!0,r.onBeforeRender=(e,t,r)=>{n.uniforms.uDetailInverseViewProjection.value.copy(r.projectionMatrix).multiply(r.matrixWorldInverse).invert(),e.getDrawingBufferSize(n.uniforms.uDetailViewport.value)}),t===`dots`&&(n.uniforms.uDetailPaper={value:new q(e.paper.color)}),this.bindMasks(n),r.name=`worm-details-${t}`,r.renderOrder=a,a+=.05,this.group.add(r)}}describe(){return{version:4,mode:this.mode,dotCount:this.dots.length,members:this.members}}},$d=.3,ef=.05,tf=Object.freeze({paper:Object.freeze({color:14211024,width:100,height:130,fiberStrength:.035,grainStrength:.012,vignetteStrength:.055}),dots:Object.freeze({inkColor:3489843,sourceColorMix:.18,radiusMin:.065,radiusMax:.145,heightMin:.04,heightMax:.82,heightBias:1.65,irregularity:.045,alpha:.94,alphaFloor:0,alphaGamma:1,ambientLight:.62,diffuseLight:.34,highlightStrength:.11,rimLight:.72,surfaceGrain:.055,heightLight:.018}),light:Object.freeze({direction:Object.freeze({x:-.42,y:.53,z:.74})}),ambientOcclusion:Object.freeze({color:5857362,radius:.34,heightRadius:.12,opacity:.026}),shadows:Object.freeze({color:4870470,direction:Object.freeze({x:.62,y:-.78}),baseOffset:.025,heightOffset:.58,baseBlur:.055,heightBlur:.18,surfaceLift:0,opacity:.22}),dispersion:Object.freeze({edgeStart:.58,edgeStrength:1,grungeScale:4.2,grungeSecondaryScale:9.5,grungeStrength:1,grungeFloor:0,grungeLow:.42,grungeHigh:.58,distanceMin:.24,distanceMax:4.8,alphaNoise:.6,radiusNoise:.55})}),nf=Object.freeze({"1-base":Object.freeze({label:`Reference balanced`,overrides:{}}),"2-dense":Object.freeze({label:`Dense granular`,overrides:{dots:{radiusMin:.085,radiusMax:.18,heightMax:.72,irregularity:.065,alpha:.98},ambientOcclusion:{radius:.42,opacity:.045},shadows:{heightOffset:.48,baseBlur:.045,heightBlur:.14,opacity:.24}}}),"3-anisotropic":Object.freeze({label:`Reference anisotropic`,overrides:{paper:{color:14737370,fiberStrength:.028,grainStrength:.008,vignetteStrength:.035},dots:{inkColor:3092781,sourceColorMix:.05,radiusMin:.075,radiusMax:.145,heightMin:.015,heightMax:.28,heightBias:1.8,irregularity:.025,alpha:.98,alphaFloor:.32,alphaGamma:.72,ambientLight:.84,diffuseLight:.12,highlightStrength:.02,rimLight:.91,surfaceGrain:.035,heightLight:.006},ambientOcclusion:{radius:.22,heightRadius:.07,opacity:.018},shadows:{baseOffset:.02,heightOffset:.28,baseBlur:.035,heightBlur:.08,opacity:.15}}})});function rf(e,t={}){return{paper:{...e.paper,...t.paper},dots:{...e.dots,...t.dots},light:{...e.light,...t.light,direction:{...e.light.direction,...t.light?.direction}},ambientOcclusion:{...e.ambientOcclusion,...t.ambientOcclusion},dispersion:{...e.dispersion,...t.dispersion},shadows:{...e.shadows,...t.shadows,direction:{...e.shadows.direction,...t.shadows?.direction}}}}function af(e){let t=Object.hasOwn(nf,e)?e:vu.look,n=nf[t];return{id:t,label:n.label,look:rf(tf,n.overrides)}}function of(){return af(Su(new URLSearchParams(window.location.search),`look`))}var sf=`
	varying vec2 vUv;

	void main() {
		vUv = uv;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`,cf=`
	precision highp float;

	uniform vec3 uPaperColor;
	uniform float uFiberStrength;
	uniform float uGrainStrength;
	uniform float uVignetteStrength;
	varying vec2 vUv;

	float hash21(vec2 p) {
		p = fract(p * vec2(123.34, 456.21));
		p += dot(p, p + 45.32);
		return fract(p.x * p.y);
	}

	float valueNoise(vec2 p) {
		vec2 i = floor(p);
		vec2 f = fract(p);
		f = f * f * (3.0 - 2.0 * f);

		float a = hash21(i);
		float b = hash21(i + vec2(1.0, 0.0));
		float c = hash21(i + vec2(0.0, 1.0));
		float d = hash21(i + vec2(1.0, 1.0));
		return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
	}

	void main() {
		// Strongly anisotropic noise produces long, mostly vertical paper fibres.
		float longFibres = valueNoise(vUv * vec2(430.0, 7.0));
		float fineFibres = valueNoise(vUv * vec2(1050.0, 34.0));
		float broadMottle = valueNoise(vUv * vec2(5.0, 7.0));
		float pixelGrain = hash21(gl_FragCoord.xy);

		float paperVariation =
			(longFibres - 0.5) * uFiberStrength +
			(fineFibres - 0.5) * uFiberStrength * 0.42 +
			(broadMottle - 0.5) * 0.018 +
			(pixelGrain - 0.5) * uGrainStrength;

		vec2 centredUv = vUv * 2.0 - 1.0;
		float vignette = smoothstep(0.28, 1.42, dot(centredUv, centredUv));
		vec3 colour = uPaperColor * (1.0 + paperVariation - vignette * uVignetteStrength);

		gl_FragColor = vec4(colour, 1.0);
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`,lf=`
	precision highp float;

	attribute float aAlpha;
	attribute float aHeight;
	attribute float aRadius;
	uniform float uPointScale;
	uniform vec2 uShadowDirection;
	uniform float uBaseOffset;
	uniform float uHeightOffset;
	uniform float uBaseBlur;
	uniform float uHeightBlur;
	uniform float uSurfaceLift;
	varying float vAlpha;
	varying float vCoreRadius;

	void main() {
		float height = aHeight + uSurfaceLift;
		float blurRadius = uBaseBlur + height * uHeightBlur;
		float spriteRadius = aRadius + blurRadius;
		vec2 offset = uShadowDirection * (uBaseOffset + height * uHeightOffset);
		vec3 shadowPosition = vec3(position.xy + offset, 0.012);
		vec4 mvPosition = modelViewMatrix * vec4(shadowPosition, 1.0);

		gl_Position = projectionMatrix * mvPosition;
		gl_PointSize = max(1.0, 2.0 * spriteRadius * uPointScale / max(1.0, -mvPosition.z));
		vCoreRadius = aRadius / spriteRadius;
		vAlpha = aAlpha;
	}
`,uf=`
	precision highp float;

	uniform vec3 uShadowColor;
	uniform float uShadowOpacity;
	varying float vAlpha;
	varying float vCoreRadius;

	void main() {
		float radius = length(gl_PointCoord * 2.0 - 1.0);
		float softness = 1.0 - smoothstep(vCoreRadius * 0.58, 1.0, radius);
		float alpha = softness * uShadowOpacity * mix(0.42, 1.0, vAlpha);

		if (alpha < 0.001) discard;
		gl_FragColor = vec4(uShadowColor, alpha);
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`,df=`
	precision highp float;

	attribute float aAlpha;
	attribute float aHeight;
	attribute float aRadius;
	uniform float uPointScale;
	uniform float uAoRadius;
	uniform float uHeightRadius;
	varying float vAlpha;

	void main() {
		float radius = aRadius + uAoRadius + aHeight * uHeightRadius;
		vec4 mvPosition = modelViewMatrix * vec4(position.xy, 0.008, 1.0);

		gl_Position = projectionMatrix * mvPosition;
		gl_PointSize = max(1.0, 2.0 * radius * uPointScale / max(1.0, -mvPosition.z));
		vAlpha = aAlpha;
	}
`,ff=`
	precision highp float;

	uniform vec3 uAoColor;
	uniform float uAoOpacity;
	varying float vAlpha;

	void main() {
		vec2 point = gl_PointCoord * 2.0 - 1.0;
		float radiusSquared = dot(point, point);
		if (radiusSquared > 1.0) discard;

		// A wide Gaussian per dot builds into a soft density/AO field in clusters.
		float gaussian = exp(-radiusSquared * 4.2) * (1.0 - smoothstep(0.82, 1.0, radiusSquared));
		float alpha = gaussian * uAoOpacity * mix(0.35, 1.0, vAlpha);
		gl_FragColor = vec4(uAoColor, alpha);
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`,pf=`
	precision highp float;

	attribute vec3 aDotColor;
	attribute float aAlpha;
	attribute float aHeight;
	attribute float aRadius;
	attribute float aSeed;
	uniform float uPointScale;
	varying vec3 vDotColor;
	varying float vAlpha;
	varying float vHeight;
	varying float vSeed;

	void main() {
		vec3 raisedPosition = vec3(position.xy, aHeight);
		vec4 mvPosition = modelViewMatrix * vec4(raisedPosition, 1.0);
		float heightScale = 1.0 + aHeight * 0.055;

		gl_Position = projectionMatrix * mvPosition;
		gl_PointSize = max(1.0, 2.0 * aRadius * heightScale * uPointScale / max(1.0, -mvPosition.z));
		vDotColor = aDotColor;
		vAlpha = aAlpha;
		vHeight = aHeight;
		vSeed = aSeed;
	}
`,mf=`
	precision highp float;

	uniform vec3 uInkColor;
	uniform vec3 uLightDirection;
	uniform float uSourceColorMix;
	uniform float uIrregularity;
	uniform float uDotOpacity;
	uniform float uAlphaFloor;
	uniform float uAlphaGamma;
	uniform float uAmbientLight;
	uniform float uDiffuseLight;
	uniform float uHighlightStrength;
	uniform float uRimLight;
	uniform float uSurfaceGrain;
	uniform float uHeightLight;
	varying vec3 vDotColor;
	varying float vAlpha;
	varying float vHeight;
	varying float vSeed;

	float hash21(vec2 p) {
		p = fract(p * vec2(123.34, 456.21));
		p += dot(p, p + 45.32);
		return fract(p.x * p.y);
	}

	void main() {
		vec2 point = gl_PointCoord * 2.0 - 1.0;
		float angle = atan(point.y, point.x);
		float edgeWobble = 1.0 + uIrregularity * (
			sin(angle * 5.0 + vSeed * 17.0) * 0.62 +
			sin(angle * 9.0 - vSeed * 11.0) * 0.38
		);
		float radius = length(point) / edgeWobble;
		float antialias = max(fwidth(radius) * 1.25, 0.012);
		float coverage = 1.0 - smoothstep(1.0 - antialias, 1.0 + antialias, radius);
		if (coverage < 0.001) discard;

		vec2 normalXY = point * 0.76;
		float normalZ = sqrt(max(0.0, 1.0 - dot(normalXY, normalXY)));
		vec3 normal = normalize(vec3(normalXY, normalZ));
		float diffuse = max(dot(normal, normalize(uLightDirection)), 0.0);
		float rimDarkening = mix(uRimLight, 1.0, normalZ);
		float highlight = pow(max(dot(normal, normalize(vec3(-0.24, 0.32, 0.92))), 0.0), 18.0);
		float surfaceGrain = hash21(gl_FragCoord.xy + vSeed * 91.7) - 0.5;

		vec3 baseColour = mix(uInkColor, vDotColor, uSourceColorMix);
		float illumination = (uAmbientLight + diffuse * uDiffuseLight + highlight * uHighlightStrength) * rimDarkening;
		illumination += surfaceGrain * uSurfaceGrain + vHeight * uHeightLight;
		vec3 colour = baseColour * illumination;
		float shapedAlpha = mix(uAlphaFloor, 1.0, pow(clamp(vAlpha, 0.0, 1.0), uAlphaGamma));
		float alpha = coverage * shapedAlpha * uDotOpacity;

		gl_FragColor = vec4(colour, alpha);
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`;function hf(e){return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),(e^e>>>15)>>>0}function gf(e,t,n,r,i){let a=(e^i)>>>0;return a^=Math.imul(t+1,2654435761),a^=Math.imul(Math.round(n*4096),2246822507),a^=Math.imul(Math.round(r*4096),3266489909),hf(a)/4294967296}function _f(e,t,n){let r=H.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function vf(e,t,n,r){let i=(e^r)>>>0;return i^=Math.imul(t,2654435761),i^=Math.imul(n,2246822507),hf(i)/4294967296}function yf(e,t,n,r){let i=Math.floor(t),a=Math.floor(n),o=_f(0,1,t-i),s=_f(0,1,n-a),c=H.lerp(vf(e,i,a,r),vf(e,i+1,a,r),o),l=H.lerp(vf(e,i,a+1,r),vf(e,i+1,a+1,r),o);return H.lerp(c,l,s)}function bf(e,t,n){let r=e.x/$.sceneHalfSize.x,i=e.y/$.sceneHalfSize.y,a=Math.hypot(r,i),o=_f(t.edgeStart,1,a)*t.edgeStrength,s=(r+1)*.5,c=(i+1)*.5,l=yf(n,s*t.grungeScale,c*t.grungeScale,1327217884),u=yf(n,s*t.grungeSecondaryScale,c*t.grungeSecondaryScale,2496678331),d=_f(t.grungeLow,t.grungeHigh,l*.85+u*.15),f=H.lerp(1,H.lerp(t.grungeFloor,1,d),t.grungeStrength);return H.clamp(o*f,0,1)}function xf(e,t){return t/(2*Math.tan(H.degToRad(e.fov*.5)))}function Sf({vertexShader:e,fragmentShader:t,uniforms:n},r){if(r){for(let[e,{value:t}]of Object.entries(n)){let n=r.uniforms[e];n.value?.copy?n.value.copy(t):n.value=t}return r}return new Pa({precision:`highp`,vertexShader:e,fragmentShader:t,uniforms:n,transparent:!0,depthTest:!1,depthWrite:!1,blending:1,toneMapped:!0})}var Cf=class extends dd{constructor(e){super(e),this.renderSize=e;let t=of();this.lookPresetId=t.id,this.lookPresetLabel=t.label,this.look=t.look;let n=new URLSearchParams(window.location.search);this.samplingDebug=n.get(`samplingDebug`),this.dispersionEnabled=Su(n,`dispersion`)===`1`,this.snapEnabled=Su(n,`snap`)===`1`,this.backgroundEnabled=Su(n,`background`)!==`0`,this.whiteBackgroundEnabled=Su(n,`whiteBg`)===`1`,this.detailMode=`none`;let r=Su(n,`rock`);this.rockMode=Object.hasOwn(Dd,r)?r:vu.rock,this.rockVariant=Od(v.initialSeed,this.rockMode),this.highQualitySceneReady=!1,this.renderer.outputColorSpace=nt,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1,document.documentElement.dataset.renderReady=`false`,document.documentElement.dataset.lookPreset=this.lookPresetId,document.documentElement.dataset.dispersion=String(this.dispersionEnabled),document.documentElement.dataset.snap=String(this.snapEnabled),document.documentElement.dataset.background=String(this.backgroundEnabled),document.documentElement.dataset.whiteBackground=String(this.whiteBackgroundEnabled),this.applySceneBackground(),console.log(`>> high-quality preset: ${this.lookPresetId} (${this.lookPresetLabel})`)}setup(){super.setup(),this.look&&this.applySceneBackground(),this.camera.position.set(0,0,220),this.defaultCameraPosition=this.camera.position.clone(),this.highQualitySceneReady=!1,document.documentElement.dataset.renderReady=`false`,this.dotRandomState=null,this.finalWorms=[],this.finalDots=[],this.dotBufferSource=null,this.backgroundSource=null,this.backgroundBufferKey=null,this.wormDetails?.reset(),this.rockBackground&&(this.rockBackground.mesh.visible=!1);let e=this.sequencer.spec.composition;document.documentElement.dataset.compositionMode=e.requestedMode,document.documentElement.dataset.compositionResolved=e.resolvedMode,window.dispatchEvent(new Event(`fossil-composition-change`))}wormSceneCreate(){console.log(`>> DrawingHighQuality.wormSceneCreate()`);let e=performance.now(),t=this.sequencer.getLarvas();this.compositionTransform=gd(t,this.sequencer.spec.composition.fitting,this.camera.fov,this.camera.aspect,this.defaultCameraPosition.z),this.updateSimScene(),this.sequencer.spec.applyChunkSamplingMode($.chunkSamplingMode),t.forEach(e=>e.spec.applyChunkSamplingMode($.chunkSamplingMode)),this.dotRandomState=v.captureState();let n=performance.now();this.finalWorms=t.map(e=>new td(e));let r=performance.now();ed(this.finalWorms),this.finalDots=this.finalWorms.flatMap(e=>e.getDots());let i=performance.now();this.wormDetails??=new Qd,this.wormDetails.generate(this.finalWorms,v.initialSeed,this.detailMode),this.updateSamplingMetadata(),this.buildHighQualityScene(this.look),this.wormPreparationMs={fitting:n-e,sampling:r-n,culling:i-r,renderBuffers:performance.now()-i},this.highQualitySceneReady=!0,console.log(`>> high-quality dots: ${this.finalDots.length}`)}updateSamplingMetadata(){let e=this.sequencer.getLarvas();this.samplingSpecs=e.map((e,t)=>({index:t,...e.spec.chunks.sampling})),this.samplingProfiles=Object.fromEntries([...new Set(e.map(e=>e.spec.chunks.sampling.profile))].map(t=>[t,e.filter(e=>e.spec.chunks.sampling.profile===t).length]))}setSamplingMode(e){$.setChunkSamplingMode(e),this.highQualitySceneReady&&(this.sequencer.spec.applyChunkSamplingMode(e),this.finalWorms.forEach(t=>t.spec.applyChunkSamplingMode(e)),v.withState(this.dotRandomState,()=>this.finalWorms.forEach(e=>e.build())),ed(this.finalWorms),this.finalDots=this.finalWorms.flatMap(e=>e.getDots()),this.wormDetails?.generate(this.finalWorms,v.initialSeed,this.detailMode),this.updateSamplingMetadata(),this.buildHighQualityScene(this.look),this.renderWormScene())}removeDebugOverlay(e){let t=new Set,n=new Set;for(let r of this.scene.children.filter(t=>t.name===e))r.traverse(e=>{if(e.geometry&&t.add(e.geometry),e.material)for(let t of[e.material].flat())n.add(t)}),this.scene.remove(r);t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose())}refreshDebugOverlays(){if(this.highQualitySceneReady){if(this.removeDebugOverlay(`high-quality-worm-debug-overlay`),Tu.debug&&this.addDebugOverlay(),Tu.debugColors){let e=this.detachSimulationOverlay();e.length||(this.simCircles=void 0,this.updateSimScene({preserveScene:!0}),e=this.detachSimulationOverlay()),this.restoreSimulationOverlay(e)}else this.removeDebugOverlay(`high-quality-colour-debug-overlay`),this.simCircles=void 0;this.renderWormScene()}}renderWormScene(){super.renderWormScene(),this.highQualitySceneReady&&(this.finishBackgroundRender(),this.publishRenderResult(),window.__FOSSIL_RENDER_CAPTURE__=()=>this.captureCurrentRender(),window.__FOSSIL_RENDER_PRESET__=e=>(this.renderLookPreset(e),this.captureCurrentRender()),document.documentElement.dataset.renderReady=`true`)}buildHighQualityScene(e){let t=Tu.debugColors?this.detachSimulationOverlay():[];this.clearGeneratedScene(),this.applySceneBackground();let n=this.createPaper(e),r=this.createDotPasses(this.finalDots,e);this.scene.add(n,r.ambientOcclusion,r.shadows,r.dots),this.wormDetails&&(this.wormDetails.update(e,t=>this.createDotPasses(this.wormDetails.dots,e,t)),this.scene.add(this.wormDetails.group)),this.rockBackground&&(this.rockBackground.mesh.visible=!1,this.scene.add(this.rockBackground.mesh)),this.restoreSimulationOverlay(t),Tu.debug&&this.addDebugOverlay()}clearGeneratedScene(){for(let e of[this.cachedPaper,this.rockBackground?.mesh,this.wormDetails?.group,...Object.values(this.cachedDotPasses??{})])e?.parent===this.scene&&this.scene.remove(e);super.clearGeneratedScene()}detachSimulationOverlay(){let e=[...(this.simMeshes??[]).flatMap(({mesh:e,ring:t})=>[e,t]),...(this.simEdges??[]).map(({arrow:e})=>e)].filter(e=>e?.parent===this.scene);return e.forEach(e=>this.scene.remove(e)),e}restoreSimulationOverlay(e){e.forEach(e=>{e.name=`high-quality-colour-debug-overlay`,e.renderOrder=9,e.traverse(e=>{if(e.material)for(let t of[e.material].flat())t.depthTest=!1,t.depthWrite=!1}),this.scene.add(e)})}addDebugOverlay(){this.finalWorms.forEach((e,t)=>{let n=this.scene.children.length;cd(this.scene,e,t),this.scene.children.slice(n).forEach(e=>{e.name=`high-quality-worm-debug-overlay`,e.renderOrder=10,e.material&&(e.material.depthTest=!1,e.material.depthWrite=!1)})})}renderLookPreset(e){let t=af(e);return this.lookPresetId=t.id,this.lookPresetLabel=t.label,this.look=t.look,this.highQualitySceneReady?(this.buildHighQualityScene(this.look),this.renderer.render(this.scene,this.camera),this.finishBackgroundRender(),document.documentElement.dataset.lookPreset=this.lookPresetId,this.publishRenderResult(),window.__FOSSIL_RENDER_RESULT__):(document.documentElement.dataset.lookPreset=this.lookPresetId,{presetId:this.lookPresetId,pending:!0})}setDispersionEnabled(e){this.dispersionEnabled=!!e,document.documentElement.dataset.dispersion=String(this.dispersionEnabled),this.highQualitySceneReady&&(this.buildHighQualityScene(this.look),this.renderer.render(this.scene,this.camera),this.finishBackgroundRender(),this.publishRenderResult())}setSnapEnabled(e){this.snapEnabled=!!e,document.documentElement.dataset.snap=String(this.snapEnabled),this.highQualitySceneReady&&(this.buildHighQualityScene(this.look),this.renderer.render(this.scene,this.camera),this.finishBackgroundRender(),this.publishRenderResult())}setRockVariant(e){(e===`random`||Object.hasOwn(Dd,e))&&(this.rockMode=e,this.rockVariant=Od(v.initialSeed,e),this.backgroundSource=null,this.rockBackground&&(this.rockBackground.mesh.visible=!1),this.highQualitySceneReady&&this.renderWormScene())}setBackgroundEnabled(e){this.backgroundEnabled=!!e,this.cachedPaper&&this.createPaper(this.look),this.cachedDotPasses&&(this.cachedDotPasses.shadows.material.uniforms.uSurfaceLift.value=this.backgroundEnabled?this.look.shadows.surfaceLift??0:0);let t=this.wormDetails?.cachedDotPasses?.shadows;t&&(t.material.uniforms.uSurfaceLift.value=this.backgroundEnabled?this.look.shadows.surfaceLift??0:0),this.applySceneBackground(),document.documentElement.dataset.background=String(this.backgroundEnabled),this.rockBackground&&(this.rockBackground.mesh.visible=!1),this.highQualitySceneReady&&this.renderWormScene()}applySceneBackground(){this.exteriorBackgroundColor??=new q;let e=this.backgroundEnabled?kd.paperColor:this.look.paper.color;this.whiteBackgroundEnabled?this.exteriorBackgroundColor.copy(Bd(e,this.renderer.toneMappingExposure)):this.exteriorBackgroundColor.set(0),this.scene.background=this.whiteBackgroundEnabled?this.exteriorBackgroundColor.clone():new q(this.backgroundEnabled?0:this.look.paper.color)}setWhiteBackgroundEnabled(e){this.whiteBackgroundEnabled=!!e,document.documentElement.dataset.whiteBackground=String(this.whiteBackgroundEnabled),this.applySceneBackground(),this.renderer.render(this.scene,this.camera),this.highQualitySceneReady&&this.publishRenderResult()}finishBackgroundRender({render:e=!0,relief:t=null}={}){if(this.applySceneBackground(),!this.backgroundEnabled){this.wormDetails?.ensureSlab(kd)&&e&&this.renderer.render(this.scene,this.camera);return}this.rockVariant=Od(v.initialSeed,this.rockMode),this.rockBackground??=new Id(this.cachedDotPasses.dots.material,this.exteriorBackgroundColor);let n=this.rockBackground;t?.seed===v.initialSeed&&t.variant===this.rockVariant&&(n.relief=t),n.mesh.parent!==this.scene&&this.scene.add(n.mesh);let r=this.backgroundSource!==this.finalDots||this.backgroundBufferKey!==this.dotBufferKey||this.backgroundLook!==this.look;r&&(n.update(v.initialSeed,this.finalWorms,this.dotGeometry,this.look,this.cachedDotPasses,this.rockVariant),this.backgroundLook=this.look,this.backgroundSource=this.finalDots,this.backgroundBufferKey=this.dotBufferKey);let i=this.wormDetails?.setSlab(n.slab);(r||i||!n.mesh.visible)&&(n.mesh.visible=!0,e&&this.renderer.render(this.scene,this.camera))}captureCurrentRender(){return this.renderer.render(this.scene,this.camera),this.finishBackgroundRender(),{...this.describeCurrentRender(),imageDataUrl:this.renderer.domElement.toDataURL(`image/png`)}}publishRenderResult(){window.__FOSSIL_RENDER_RESULT__=this.describeCurrentRender(),window.dispatchEvent(new Event(`fossil-background-change`))}describeCurrentRender(){let e=this.renderer.domElement;return{presetId:this.lookPresetId,presetLabel:this.lookPresetLabel,seed:v.initialSeed,composition:{...this.sequencer.spec.composition},collisionSearch:this.sequencer.collisionSearch??`quadtree`,single:this.sequencer.spec.single??null,layoutMembers:this.finalWorms.map(e=>e.spec.single??null),designProfiles:this.finalWorms.map(e=>({family:!!e.spec.family,width:e.spec.larva.widthProfile,widthStyle:e.spec.larva.widthStyle,bend:e.spec.larva.bendProfile,segments:e.spec.larva.segmentProfile,numChunks:e.spec.larva.numChunks,bendiness:e.spec.larva.bendiness,chunkMode:e.spec.chunks.rampMode,chunkProfiles:e.spec.chunks.rampProfiles})),cameraFrame:this.defaultCameraPosition.toArray(),compositionTransform:this.compositionTransform,samplingMode:$.chunkSamplingMode,samplingProfiles:this.samplingProfiles,samplingSpecs:this.samplingSpecs,dotCount:this.finalDots.length,details:this.wormDetails?.describe()??{mode:this.detailMode},dispersionEnabled:this.dispersionEnabled,snapEnabled:this.snapEnabled,backgroundEnabled:this.backgroundEnabled,whiteBackgroundEnabled:this.whiteBackgroundEnabled,background:{...this.rockBackground?.settings??kd,variant:this.rockVariant,mode:this.rockMode,geologyScale:this.rockBackground?.relief?.geologyScale??null,dotCount:this.backgroundEnabled?this.rockBackground?.dotCount??0:0,generationMs:this.rockBackground?.generationMs??null,phaseMs:this.rockBackground?.phaseMs??null},look:this.look,width:e.width,height:e.height}}createPaper(e){let t=this.backgroundEnabled?kd.paperColor:e.paper.color;if(this.cachedPaper){let n=this.cachedPaper,r=n.material.uniforms;return n.scale.set(e.paper.width/n.geometry.parameters.width,e.paper.height/n.geometry.parameters.height,1),r.uPaperColor.value.set(t),r.uFiberStrength.value=e.paper.fiberStrength,r.uGrainStrength.value=e.paper.grainStrength,r.uVignetteStrength.value=e.paper.vignetteStrength,n}let n=new pi(new Ca(e.paper.width,e.paper.height),new Pa({precision:`highp`,vertexShader:sf,fragmentShader:cf,uniforms:{uPaperColor:{value:new q(t)},uFiberStrength:{value:e.paper.fiberStrength},uGrainStrength:{value:e.paper.grainStrength},uVignetteStrength:{value:e.paper.vignetteStrength}},depthTest:!1,depthWrite:!1,toneMapped:!0}));return n.position.z=0,n.renderOrder=0,n.frustumCulled=!1,n.name=`high-quality-paper`,this.cachedPaper=n,n}ensureDotGeometry(e,t=this){if(t.dotGeometry&&e<=t.dotCapacity)return t.dotGeometry;let n=Math.max(1,e,Math.ceil((t.dotCapacity??0)*1.5)),r=new Wr;for(let[e,t]of Object.entries({position:3,aDotColor:3,aAlpha:1,aHeight:1,aRadius:1,aSeed:1}))r.setAttribute(e,new J(new Float32Array(n*t),t).setUsage(ct));t.dotGeometry?.dispose(),t.dotGeometry=r,t.dotCapacity=n,t.dotBufferSource=null;for(let e of Object.values(t.cachedDotPasses??{}))e.geometry=r;return r}createDotPasses(e,t,n=this){let r=e.length,i=this.ensureDotGeometry(r,n),a=i.attributes.position.array,o=i.attributes.aDotColor.array,s=i.attributes.aAlpha.array,c=i.attributes.aHeight.array,l=i.attributes.aRadius.array,u=i.attributes.aSeed.array,d=Number(v.initialSeed)>>>0,f=JSON.stringify([d,this.samplingDebug,this.snapEnabled,t.dots.heightBias,t.dots.heightMin,t.dots.heightMax,t.dots.radiusMin,t.dots.radiusMax,this.dispersionEnabled?t.dispersion:null]);if(n.dotBufferSource!==e||n.dotBufferKey!==f){for(let n=0;n<r;n++){let r=e[n],i=n*3,f=gf(d,n,r.x,r.y,1757159915),p=gf(d,n,r.x,r.y,48610963),m=gf(d,n,r.x,r.y,2524612763),h=f**+t.dots.heightBias,g=r.color?.isColor?r.color:new q($.globals.wormDotColor);this.samplingDebug===`uv`&&Number.isFinite(r.chunkU)&&Number.isFinite(r.chunkV)&&(g=new q().setRGB(r.chunkU,r.chunkV,1-r.chunkU));let _=r.x,v=r.y,y=0;if(this.dispersionEnabled){y=bf(r,t.dispersion,d);let e=gf(d,n,r.x,r.y,1663821211)*Math.PI*2,i=H.lerp(t.dispersion.distanceMin,t.dispersion.distanceMax,gf(d,n,r.x,r.y,2232777461))*y**1.25;_+=Math.cos(e)*i,v+=Math.sin(e)*i}this.snapEnabled&&(_=Math.round(_/$d)*$d,v=Math.round(v/$d)*$d,_+=(gf(d,n,r.x,r.y,2722868949)*2-1)*ef,v+=(gf(d,n,r.x,r.y,2679250021)*2-1)*ef),a[i]=_,a[i+1]=v,a[i+2]=0,o[i]=g.r,o[i+1]=g.g,o[i+2]=g.b;let b=this.dispersionEnabled?H.lerp(1,1-t.dispersion.alphaNoise*gf(d,n,r.x,r.y,3266489909),y):1;s[n]=H.clamp((r.alpha??1)*b,0,1),c[n]=H.lerp(t.dots.heightMin,t.dots.heightMax,h);let x=this.dispersionEnabled?H.lerp(1,1+t.dispersion.radiusNoise*(m*2-1),y):1;l[n]=H.lerp(t.dots.radiusMin,t.dots.radiusMax,p)*x*(r.radiusScale??1),u[n]=m}for(let e of Object.values(i.attributes))e.clearUpdateRanges(),r&&e.addUpdateRange(0,r*e.itemSize),e.needsUpdate=!0;n.dotBufferSource=e,n.dotBufferKey=f}i.setDrawRange(0,r);let p=xf(this.camera,this.renderSize.y),m=new W(t.light.direction.x,t.light.direction.y,t.light.direction.z).normalize(),h=new U(t.shadows.direction.x,t.shadows.direction.y).normalize(),g=Sf({vertexShader:df,fragmentShader:ff,uniforms:{uPointScale:{value:p},uAoColor:{value:new q(t.ambientOcclusion.color)},uAoRadius:{value:t.ambientOcclusion.radius},uHeightRadius:{value:t.ambientOcclusion.heightRadius},uAoOpacity:{value:t.ambientOcclusion.opacity}}},n.cachedDotPasses?.ambientOcclusion.material),_=Sf({vertexShader:lf,fragmentShader:uf,uniforms:{uPointScale:{value:p},uShadowDirection:{value:h},uBaseOffset:{value:t.shadows.baseOffset},uHeightOffset:{value:t.shadows.heightOffset},uBaseBlur:{value:t.shadows.baseBlur},uHeightBlur:{value:t.shadows.heightBlur},uSurfaceLift:{value:this.backgroundEnabled?t.shadows.surfaceLift??0:0},uShadowColor:{value:new q(t.shadows.color)},uShadowOpacity:{value:t.shadows.opacity}}},n.cachedDotPasses?.shadows.material),y=Sf({vertexShader:pf,fragmentShader:mf,uniforms:{uPointScale:{value:p},uInkColor:{value:new q(t.dots.inkColor)},uLightDirection:{value:m},uSourceColorMix:{value:t.dots.sourceColorMix},uIrregularity:{value:t.dots.irregularity},uDotOpacity:{value:t.dots.alpha},uAlphaFloor:{value:t.dots.alphaFloor},uAlphaGamma:{value:t.dots.alphaGamma},uAmbientLight:{value:t.dots.ambientLight},uDiffuseLight:{value:t.dots.diffuseLight},uHighlightStrength:{value:t.dots.highlightStrength},uRimLight:{value:t.dots.rimLight},uSurfaceGrain:{value:t.dots.surfaceGrain},uHeightLight:{value:t.dots.heightLight}}},n.cachedDotPasses?.dots.material);if(n.cachedDotPasses)return n.cachedDotPasses;let b=new zi(i,g),x=new zi(i,_),S=new zi(i,y);return b.renderOrder=1,x.renderOrder=2,S.renderOrder=3,b.frustumCulled=!1,x.frustumCulled=!1,S.frustumCulled=!1,b.name=`high-quality-aggregate-occlusion`,x.name=`high-quality-dot-shadows`,S.name=`high-quality-raised-dots`,n.cachedDotPasses={ambientOcclusion:b,shadows:x,dots:S},n.cachedDotPasses}};function wf(e){if(!e||typeof e!=`object`)return e;let{kind:t,props:n}=e,r;r=t===`spec`?new $({justReturn:!0}):t===`ramp`?new su(n.yKeys?wf(n.yKeys):[0,1],n.xKeys?wf(n.xKeys):[],{quality:n.quality,degree:n.nurbsDegree,useCatmullRom:n.useCatmullRom}):t===`color`?new q:t===`vector`?new U:t===`array`?[]:{};for(let[e,t]of Object.entries(n))r[e]=wf(t);return r}function Tf(e){let t=Object.assign(Object.create(Hu.prototype),{spec:wf(e.spec),avgRad:e.avgRad,isSingle:e.isSingle,useThisLarva:!0,edges:[]});return t.circles=e.circles.map(e=>Object.assign(new zu(e.x,e.y,e.r,e.at,e.atLength,t,{id:e.id}),{isJoint:e.isJoint,color:wf(e.color),origColor:wf(e.color)})),t.circles.forEach((e,t,n)=>{e.parent=n[t-1],e.child=n[t+1]}),t}function Ef(e,t,n){let r=Math.max(0,Math.min(1,t))*(e.length-1),i=Math.floor(r),a=r-i,o=e[Math.max(0,i-1)],s=e[i],c=e[Math.min(e.length-1,i+1)],l=e[Math.min(e.length-1,i+2)];for(let e=0;e<n.length;e++)n[e]=.5*(2*s[e]+(-o[e]+c[e])*a+(2*o[e]-5*s[e]+4*c[e]-l[e])*a*a+(-o[e]+3*s[e]-3*c[e]+l[e])*a*a*a);return n}function Df(e,t,n,r){let i=e^Math.imul(t,2654435761)^Math.imul(n,2246822507)^r;return i=Math.imul(i^i>>>16,569420461),i=Math.imul(i^i>>>15,1935289751),((i^i>>>15)>>>0)/4294967296}var Of=`ragged-variable-strikes-v2`,kf=3e3,Af=-300,jf=2700,Mf=[28,76],Nf=[1.2,11];function Pf(e){return e.curveSmoothedPts?.length>1?e.curveSmoothedPts:e.larva.circles}function Ff(e,t){let n=e.map(e=>{let t=Pf(e),n=0;for(let e=1;e<t.length;e++)n+=t[e].distanceTo(t[e-1]);return n}),r=n.map((e,n)=>Mf[0]+Df(t,n,0,521)*(Mf[1]-Mf[0])),i=n.map((e,n)=>{let i=[],a=0,o=0;do{let s=i.length,c=Nf[0]+Df(t,n,s,523)**1.8*(Nf[1]-Nf[0]),l=Math.min(e,a+c);i.push({start:a,end:l,time:o}),o+=(l-a)/r[n]*(.65+Df(t,n,s,541)*.9)+.015+Df(t,n,s,547)**2*.1,a=l}while(a<e);return i}),a=i.map(e=>e.at(-1).time*1e3+140+120),o=e.map((e,t)=>{let n=e.larva.circles;return{index:t,x:n.reduce((e,t)=>e+t.x,0)/n.length,y:n.reduce((e,t)=>e+t.y,0)/n.length}});o.sort((e,t)=>t.y-e.y||e.x-t.x||e.index-t.index);let s=e.length<2?0:Math.min(80,240/(e.length-1)),c=Array(e.length).fill(0);o.forEach((e,t)=>{c[e.index]=t*s});let l=Math.max(0,...a.map((e,t)=>c[t]+e));return{version:Of,delays:c,durations:a,lengths:n,speeds:r,fragments:i,chunkRange:Nf,chipMs:120,order:o.map(e=>e.index),totalWormRevealMs:l,totalRevealMs:l}}function If(e,t,n){let r=e.fragments[t];if(!r?.length)return 0;let i=0,a=r.length-1;for(;i<a;){let e=i+a>>>1;n>=r[e].end?i=e+1:a=e}return r[i].time}var Lf=`gathered-paper-grains-v1`,Rf=.36,zf=`
	uniform float uRockGrainSeed;
	vec3 groundGrainHash(vec2 cell) {
		vec3 p = fract(vec3(cell.xyx) * vec3(0.1031, 0.1030, 0.0973) + uRockGrainSeed);
		p += dot(p, p.yxz + 33.33);
		return fract((p.xxy + p.yzz) * p.zyx);
	}
	float groundGrain(vec2 p, vec2 cell, float age, float aa) {
		vec3 grain = groundGrainHash(cell);
		float start = 0.10 + grain.z * 0.28;
		float gathered = smoothstep(start, 1.0, age);
		vec2 center = cell + 0.5 + (grain.xy - 0.5) * 0.54;
		center += (grain.yx - 0.5) * 0.40 * (1.0 - gathered);
		vec2 delta = p - center;
		delta.x *= 0.86 + grain.z * 0.28;
		float radius = smoothstep(0.0, 0.10, gathered) * (0.07 + grain.x * 0.07)
			+ pow(gathered, 1.7) * 1.65;
		return smoothstep(0.0, 0.06, gathered) * (1.0 - smoothstep(radius - aa, radius + aa, length(delta)));
	}
	float rockPaperGrains(vec2 p, float age) {
		if (age <= 0.10) return 0.0;
		if (age >= 1.0) return 1.0;
		float formed = smoothstep(0.0, 1.0, age);
		// A gently warped cloud drifts into the fixed grain layout as it packs.
		vec2 drift = vec2(sin(p.y * 0.31 + uRockTime * 1.8 + uRockGrainSeed),
			cos(p.x * 0.29 - uRockTime * 1.5 + uRockGrainSeed)) * 0.70 * (1.0 - formed);
		vec2 q = (p + drift) / ${Rf.toFixed(2)};
		vec2 first = floor(q - 0.5);
		float aa = max(max(fwidth(p.x), fwidth(p.y)) * 0.5 / ${Rf.toFixed(2)}, 0.012);
		float coverage = 0.0;
		for (int y = 0; y < 2; y++) for (int x = 0; x < 2; x++) {
			coverage = max(coverage, groundGrain(q, first + vec2(float(x), float(y)), age, aa));
		}
		return coverage;
	}
`,Bf=`fractured-point-stone-v5`,Vf=1100;function Hf(e){let t=0;for(let n=0,r=e.length-1;n<e.length;r=n++)t+=e[r].x*e[n].y-e[n].x*e[r].y;return Math.abs(t)*.5}function Uf(e,t,n,r,i){let a=[];for(let o=0,s=e.length-1;o<e.length;s=o++){let c=e[s],l=e[o],u=(c.x*t+c.y*n-r)*i,d=(l.x*t+l.y*n-r)*i;if(u>0!=d>0){let e=u/(u-d);a.push({x:H.lerp(c.x,l.x,e),y:H.lerp(c.y,l.y,e)})}d>=0&&a.push(l)}return a}function Wf(e,t,n,r){let i=0,a=0,o=g(()=>Df(t,i++,0,173)),s=[];function c(e,n=0){let r=a++,i=Hf(e),o=e.map(e=>e.x),l=e.map(e=>e.y),u=Math.min(...o),d=Math.max(...o),f=Math.min(...l),p=Math.max(...l),m=i<60?.1:i<280?.18:.3;if(i<5||n>=12||i<1600&&Df(t,r,n,181)<m){let e={id:r,area:i,x:(u+d)*.5,y:(f+p)*.5,duration:.7+Df(t,r,0,191)*.55};return s.push(e),e}let h=(d-u>=p-f?0:Math.PI/2)+(Df(t,r,n,199)-.5)*1.5,g=Math.cos(h),_=Math.sin(h),v=e.map(e=>e.x*g+e.y*_),y=H.lerp(Math.min(...v),Math.max(...v),.12+Df(t,r,n,211)*.76);return{nx:g,ny:_,cut:y,a:c(Uf(e,g,_,y,-1),n+1),b:c(Uf(e,g,_,y,1),n+1)}}let l=e.width*.5,u=e.height*.5,d=c([{x:-l,y:-u},{x:l,y:-u},{x:l,y:u},{x:-l,y:u}]),f=(e,t)=>{let n=e+o(e*.035,t*.035)*6.4,r=t+o(e*.035-31,t*.035+19)*6.4,i=n+o(n*.17,r*.17)*3.2+o(n*.55+17,r*.55)*1.05+o(n*1.85,r*1.85+37)*.32,a=r+o(n*.17-11,r*.17+23)*3.2+o(n*.55,r*.55-7)*1.05+o(n*1.85-41,r*1.85)*.32,s=d;for(;s.a;)s=i*s.nx+a*s.ny<s.cut?s.a:s.b;return s},p=(e,n)=>(jf+Vf+(r.delays[e?.wormIndex]??0))/1e3+If(r,e?.wormIndex??0,e?.at??0)+Df(t,n.id,0,223)*.32;for(let e of s)e.start=p(n.nearest(e),e);for(let e of n.points){let t=f(e.x,e.y);t.start=Math.min(t.start,p(e,t))}let m=.24,h=Math.ceil(e.width/m)+1,_=Math.ceil(e.height/m)+1,v=new Float32Array(h*_*4);for(let e=0;e<_;e++)for(let n=0;n<h;n++){let r=n*m-l,i=e*m-u,a=f(r,i),s=(e*h+n)*4;v[s]=a.start+o(r*1.7,i*1.7)*.022,v[s+1]=a.duration,v[s+2]=Df(t,a.id,0,227)}let y=new gi(v,h,_,le,M);return y.minFilter=y.magFilter=S,y.needsUpdate=!0,{texture:y,data:v,columns:h,rows:_,cellSize:m,fragments:s,end:Math.max(...s.map(e=>e.start+e.duration))+.022,at(e,t){let n=H.clamp(Math.round((e+l)/m),0,h-1);return(H.clamp(Math.round((t+u)/m),0,_-1)*h+n)*4}}}var Gf=`
	uniform float uRockTime;
	uniform sampler2D uRockField;
	uniform vec2 uRockSize, uRockGrid;
	uniform float uRockCell;
	${zf}
	float rockGroundFormed(vec2 p) {
		vec2 uv = ((p + uRockSize * 0.5) / uRockCell + 0.5) / uRockGrid;
		vec4 field = texture2D(uRockField, uv);
		return rockPaperGrains(p, (uRockTime - field.r) / field.g);
	}
`,Kf=class{constructor(e,t,n,r){this.drawing=e,this.background=t,this.seed=e.bakeResult.seed,this.field=Wf(t.slab,this.seed,n,r),this.geometries=new Set;let i=t.slab;this.uniforms={uRockTime:{value:0},uRockField:{value:this.field.texture},uRockGrainSeed:{value:Df(this.seed,0,0,263)*64},uRockSize:{value:new U(i.width,i.height)},uRockGrid:{value:new U(this.field.columns,this.field.rows)},uRockCell:{value:this.field.cellSize}},this.ground=new pi(new Ca(2,2),new Pa({uniforms:{...this.uniforms,uExteriorColor:{value:e.exteriorBackgroundColor},uViewSize:{value:new U},uViewCenter:{value:new U}},vertexShader:`uniform vec2 uViewSize, uViewCenter; varying vec2 vPosition;
				void main() {vPosition = position.xy * uViewSize * 0.5 + uViewCenter; gl_Position = vec4(position.xy, 0.0, 1.0);}`,fragmentShader:Gf+`varying vec2 vPosition; uniform vec3 uExteriorColor;
				void main() {
					gl_FragColor = vec4(uExteriorColor, 1.0 - rockGroundFormed(vPosition));
					#include <colorspace_fragment>
				}`,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.ground.renderOrder=.1,this.ground.frustumCulled=!1,this.ground.name=`animation-rock-forming-ground`,e.scene.add(this.ground);let a=t.mesh.children.find(e=>e.name===`rock-slab-cutout`);this.rim={object:a,original:a.material,material:a.material.clone()},this.rim.material.uniforms.uExteriorColor.value=e.exteriorBackgroundColor,Object.assign(this.rim.material.uniforms,this.uniforms),this.rim.material.fragmentShader=Gf+a.material.fragmentShader.replace(`#include <colorspace_fragment>`,`gl_FragColor.rgb = mix(uExteriorColor, gl_FragColor.rgb, rockGroundFormed(vPosition));
 #include <colorspace_fragment>`),a.material=this.rim.material,this.setTime(0)}addGeometry(e){if(this.geometries.has(e))return;this.geometries.add(e);let t=Math.min(e.drawRange.count,e.attributes.position.count),n=e.attributes.position.array,r=new Float32Array(e.attributes.position.count*4),i=this.background.slab;for(let e=0;e<t;e++){let t=n[e*3],a=n[e*3+1],o=this.field.at(t,a),s=t,c=a;for(let n=0;n<8;n++){let r=Df(this.seed,e,n,241)*Math.PI*2,o=Math.sqrt(Df(this.seed,e,n,251))*13,l=t+Math.cos(r)*o,u=a+Math.sin(r)*o;if(i.footprintDistance(l,u)>=0){s=l,c=u;break}}let l=Df(this.seed,e,0,257)*.075;r.set([s,c,this.field.data[o]+l,this.field.data[o+1]-l],e*4)}e.setAttribute(`aRockFormation`,new J(r,4))}animateMaterial(e){return e.uniforms.uRockTime=this.uniforms.uRockTime,e.uniforms.uRockPaper={value:new q(this.background.settings.paperColor)},e.vertexShader=(e.vertexShader.includes(`attribute float aSeed;`)?``:`attribute float aSeed;
`)+`
			attribute vec4 aRockFormation;
			uniform float uRockTime;
			varying float vRockFormed;
		`+e.vertexShader.replace(`void main() {`,`void main() {
			float arrival = clamp((uRockTime - aRockFormation.z) / aRockFormation.w, 0.0, 1.0);
			float formed = smoothstep(0.0, 1.0, arrival);
			vRockFormed = formed;
			vec2 drift = vec2(sin(uRockTime * 1.8 + aSeed * 53.0), cos(uRockTime * 2.1 + aSeed * 71.0)) * 0.22;
			vec3 rockPosition = vec3(mix(aRockFormation.xy + drift, position.xy, formed), position.z);
		`).replace(`vec3 discoveryPosition = position;`,`vec3 discoveryPosition = rockPosition;`).replace(`vAlpha = aAlpha;`,`vAlpha = mix(0.38 + aSeed * 0.22, aAlpha, formed);
 gl_PointSize *= mix(1.12, 1.0, formed);`),e.fragmentShader=`uniform vec3 uRockPaper;
 varying float vRockFormed;
`+e.fragmentShader.replace(`vec3 baseColour = mix(uInkColor, vDotColor, uSourceColorMix);`,`vec3 baseColour = mix(mix(uInkColor, uRockPaper, 0.52 + vSeed * 0.18), mix(uInkColor, vDotColor, uSourceColorMix), vRockFormed);`),e}setTime(e){this.uniforms.uRockTime.value=e/1e3;let{camera:t}=this.drawing,n=this.ground.material.uniforms,r=2*Math.tan(t.fov*Math.PI/360)*t.position.z;n.uViewSize.value.set(r*t.aspect,r),n.uViewCenter.value.set(t.position.x,t.position.y),this.ground.visible=e/1e3<this.field.end}describe(){return{lagMs:Vf,fragmentCount:this.field.fragments.length,fragmentAreaRange:[Math.min(...this.field.fragments.map(e=>e.area)),Math.max(...this.field.fragments.map(e=>e.area))],fragmentDurationMs:[700,1250],groundFormation:{version:Lf,grainSpacing:Rf,extraParticleCount:0},completeMs:this.field.end*1e3,looseRadius:13}}dispose(){this.geometries.forEach(e=>e.deleteAttribute(`aRockFormation`)),this.rim.object.material===this.rim.material&&(this.rim.object.material=this.rim.original),this.rim.material.dispose(),this.ground.removeFromParent(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.field.texture.dispose()}};function qf(e){let t=[],n=[];for(let[r,i]of e.entries()){let e=[],a=Pf(i),o=[0];for(let e=1;e<a.length;e++)o.push(o[e-1]+a[e].distanceTo(a[e-1]));let s=o.at(-1)||1;for(let t=1;t<a.length;t++){let n=a[t-1],c=a[t],l=o[t]-o[t-1],u=Math.max(1,Math.ceil(l/.35));for(let a=0;a<=u;a++){let d=a/u,f=o[t-1]+l*d,p=i.larva.circles[Math.round(f/s*(i.larva.circles.length-1))];e.push({x:H.lerp(n.x,c.x,d),y:H.lerp(n.y,c.y,d),at:f,wormIndex:r,radius:p.r,nx:-(c.y-n.y)/(l||1),ny:(c.x-n.x)/(l||1)})}}t.push(...e),n.push(new qu(e))}return{all:new qu(t),members:n}}function Jf(e,t,n,r,i,a=!1,o=!1,s=[]){let c=Math.min(e.attributes.position.count,e.drawRange.count),l=e.attributes.position.array,u=new Float32Array(e.attributes.position.count),d=new Float32Array(u.length),f=a?null:new Float32Array(u.length*2),p=new Float32Array(u.length*3),m={x:0,y:0},h=0,g=s[0]?.dots.length??1/0;for(let e=0;e<c;e++){for(;!a&&e>=g&&h+1<s.length;)g+=s[++h].dots.length;m.x=l[e*3],m.y=l[e*3+1];let c=(a?t.all:t.members[h]??t.all).nearest(m),_=c?.at??0,v=a?c?.wormIndex??0:h;f&&(f[e*2]=_/(n.lengths[h]||1),f[e*2+1]=h);let y=_+i(m.x*.19,m.y*.19)*3.2+i(m.x*.73+17,m.y*.73)*.95+i(m.x*2.4,m.y*2.4-31)*.28,b=Df(r,Math.floor(m.x/1.25+i(m.x*.5,m.y*.5)*.8),Math.floor(m.y/1.25+i(m.x*.5+19,m.y*.5)*.8),v*1009+127),x=Df(r,Math.floor(m.x*9),Math.floor(m.y*9),139);if(u[e]=If(n,v,y)+(b*.78+x*.22)*140/1e3,d[e]=(n.delays[a?c?.wormIndex:h]??0)/1e3,!a||!c)continue;let S=m.x-c.x,C=m.y-c.y,w=Math.hypot(S,C),T=(o?1:1-H.smoothstep(w,c.radius*.8,c.radius+2.2))*(o?1.6:.85)*(.65+b*1.1);p[e*3]=(w>.01?S/w:c.nx)*T,p[e*3+1]=(w>.01?C/w:c.ny)*T,p[e*3+2]=+!!o}e.setAttribute(`aDiscoveryTime`,new J(u,1)),e.setAttribute(`aDiscoveryDelay`,new J(d,1)),e.setAttribute(`aDiscoveryMove`,new J(p,3)),f&&e.setAttribute(`aCloudSpine`,new J(f,2))}function Yf(e,t){let n=e.clone();return n.uniforms.uDiscovery={value:-1},n.uniforms.uDiscoveryChip={value:120/1e3},n.uniforms.uDiscoveryRock={value:+!!t},n.vertexShader=`
		attribute float aDiscoveryTime;
		attribute float aDiscoveryDelay;
		attribute vec3 aDiscoveryMove;
		uniform float uDiscovery;
		uniform float uDiscoveryChip;
		uniform float uDiscoveryRock;
		varying float vDiscoveryOpacity;
		varying float vDiscoveryStrike;
	`+e.vertexShader.replaceAll(`position.xy`,`discoveryPosition.xy`).replace(`void main() {`,`void main() {
			float strikeAge = uDiscovery - aDiscoveryDelay - aDiscoveryTime;
			float discovered = smoothstep(0.0, uDiscoveryChip * 0.35, strikeAge);
			float chipAge = clamp(strikeAge / uDiscoveryChip, 0.0, 1.0);
			float kick = discovered * (1.0 - chipAge) * (1.0 - chipAge);
			float displacement = mix(kick, discovered, aDiscoveryMove.z);
			vec3 discoveryPosition = position;
			discoveryPosition.xy += aDiscoveryMove.xy * displacement * uDiscoveryRock;
			float cleared = smoothstep(0.0, uDiscoveryChip, strikeAge);
			vDiscoveryOpacity = mix(discovered, 1.0 - cleared * aDiscoveryMove.z, uDiscoveryRock);
			vDiscoveryStrike = kick * uDiscoveryRock;
		`),n.fragmentShader=`varying float vDiscoveryOpacity;
varying float vDiscoveryStrike;
`+e.fragmentShader.replace(`void main() {`,`void main() {
 if (vDiscoveryOpacity < 0.001) discard;`).replace(`#include <tonemapping_fragment>`,`gl_FragColor.a *= vDiscoveryOpacity;
 gl_FragColor.rgb += vec3(0.025, 0.020, 0.012) * vDiscoveryStrike;
 #include <tonemapping_fragment>`),n}function Xf(e,t){let n=Pd(t.bakeResult.seed,{at:(t,n)=>1-e.mask.at(t,n)},e.settings,e.relief,e.slab),r=n.radii.length,i=new Wr;i.setAttribute(`position`,new J(n.positions,3)),i.setAttribute(`aRadius`,new J(n.radii,1)),i.setAttribute(`aAlpha`,new J(n.alphas,1)),i.setAttribute(`aRockContrast`,new J(n.contrasts,1));let a=new Float32Array(r*3),o=new Float32Array(r),s=new Float32Array(r),c=e.mesh.geometry,l=c.attributes.aSeed.count;for(let e=0;e<r;e++){let t=l?(Math.imul(e+1,2654435761)>>>0)%l:0;l&&(a.set(c.attributes.aDotColor.array.subarray(t*3,t*3+3),e*3),o[e]=c.attributes.aHeight.array[t],s[e]=c.attributes.aSeed.array[t])}return i.setAttribute(`aDotColor`,new J(a,3)),i.setAttribute(`aHeight`,new J(o,1)),i.setAttribute(`aSeed`,new J(s,1)),i}var Zf=class{constructor(e){let t=performance.now();this.drawing=e,this.passes=[],this.geometries=[e.dotGeometry];let n=e.bakeResult.seed;this.schedule=Ff(e.finalWorms,n);let r=0,i=g(()=>Df(n,r++,0,557)),a=qf(e.finalWorms),o=performance.now();Jf(e.dotGeometry,a,this.schedule,n,i,!1,!1,e.finalWorms);for(let t of Object.values(e.cachedDotPasses))this.install(t,!1);let s=performance.now();this.preparationMs={spineIndex:o-t,bodyBinding:s-o};let c=e.backgroundEnabled&&e.rockBackground;if(c){this.rockExcavation=new Kf(e,c,a.all,this.schedule),this.schedule.totalRevealMs=Math.max(this.schedule.totalWormRevealMs,this.rockExcavation.field.end*1e3-jf+50);let t=performance.now();this.geometries.push(c.mesh.geometry),Jf(c.mesh.geometry,a,this.schedule,n,i,!0),this.rockExcavation.addGeometry(c.mesh.geometry);for(let e of[c.mesh,...c.mesh.children.filter(e=>e.isPoints)])this.install(e,!0);let r=performance.now();this.coverGeometry=Xf(c,e);let o=performance.now();Jf(this.coverGeometry,a,this.schedule,n,i,!0,!0),this.rockExcavation.addGeometry(this.coverGeometry),this.cover=new Un,this.cover.name=`animation-excavation-cover`;for(let[t,n]of[[`ambientOcclusion`,.21],[`shadows`,.31],[`dots`,.51]]){let r=this.passes.find(n=>n.object===e.cachedDotPasses[t]).original,i=Fd(r,c.settings),a=this.rockExcavation.animateMaterial(Yf(i,!0));i.dispose(),t===`shadows`&&(a.uniforms.uSurfaceLift.value=0);let o=new zi(this.coverGeometry,a);o.renderOrder=n,o.frustumCulled=!1,this.cover.add(o)}e.scene.add(this.cover),Object.assign(this.preparationMs,{fractureField:t-s,rockBinding:r-t,coverScatter:o-r,coverBinding:performance.now()-o})}}install(e,t){let n=e.material,r=Yf(n,t);t&&this.rockExcavation.animateMaterial(r),this.passes.push({object:e,original:n,material:r}),e.material=r}setTime(e){this.rockExcavation?.setTime(e+jf);for(let t of this.passes)t.material.uniforms.uDiscovery.value=e/1e3;if(this.cover){this.cover.visible=e<this.schedule.totalWormRevealMs;for(let t of this.cover.children)t.material.uniforms.uDiscovery.value=e/1e3}}dispose(){this.rockExcavation?.dispose();for(let{object:e,original:t,material:n}of this.passes)e.material===n&&(e.material=t),n.dispose();for(let e of this.geometries)e.deleteAttribute(`aDiscoveryTime`),e.deleteAttribute(`aDiscoveryDelay`),e.deleteAttribute(`aDiscoveryMove`),e.deleteAttribute(`aCloudSpine`);this.cover&&(this.cover.removeFromParent(),this.cover.children.forEach(e=>e.material.dispose()),this.coverGeometry.dispose())}};function Qf(e){let t=Math.min(3,e-1);return new au(t,Array.from({length:e+t+1},(n,r)=>r<=t?0:r>=e?1:(r-t)/(e-t)),Array.from({length:e},()=>new un(0,0,2,1)))}var $f=`continuous-variable-speed-v2`;function ep(e,t){let n=18+Math.floor(Df(e,t,0,401)*7),r=Array.from({length:n},(n,r)=>{let i=70+Df(e,t,r,409)*150;return{duration:i,speed:(.25+Df(e,t,r,413)**2*2.8)/i}}),i=r.reduce((e,t)=>e+t.duration,0);for(let[e,t]of r.entries())t.duration*=kf/i,t.speedFrom=((r[e-1]??t).speed+t.speed)*.5,t.speedTo=(t.speed+(r[e+1]??t).speed)*.5,t.weight=t.duration*(t.speedFrom+t.speedTo)*.5;let a=r.reduce((e,t)=>e+t.weight,0),o=0,s=0;for(let e of r)e.start=o,e.from=s,e.weight/=a,o+=e.duration,s+=e.weight;return{events:r,at(e){if(e<=0)return 0;if(e>=3e3)return 1;let t=r.find(t=>e<t.start+t.duration)??r.at(-1),n=(e-t.start)/t.duration,i=t.speedFrom*n+(t.speedTo-t.speedFrom)*(n**3-n**4*.5),o=t.from+t.duration*i/a;return o*o*(3-2*o)}}}var tp=`capsule-cloud-v6`,np=128;function rp(e,t,n,r,i){let a=e.clone();return Object.assign(a.uniforms,{uCloudPose:{value:t},uCloudPoseSize:{value:new U(np,n)},uCloudTime:{value:0},uCloudHalo:{value:r},uCloudPaper:{value:new q(i)},uCloudSettleLead:{value:350/1e3},uCloudDiscoveryStart:{value:jf/1e3},uCloudChip:{value:120/1e3}}),a.vertexShader=`
		attribute vec2 aCloudSpine;
		attribute vec3 aCloudParticle;
		attribute float aDiscoveryTime;
		attribute float aDiscoveryDelay;
		uniform sampler2D uCloudPose;
		uniform vec2 uCloudPoseSize;
		uniform float uCloudTime, uCloudHalo, uCloudSettleLead, uCloudDiscoveryStart, uCloudChip;
		varying float vCloudSettle, vCloudAlive;
	`+e.vertexShader.replaceAll(`position.xy`,`cloudPosition.xy`).replace(`void main() {`,`void main() {
			vec2 uv = vec2((clamp(aCloudSpine.x, 0.0, 1.0) * (uCloudPoseSize.x - 1.0) + 0.5) / uCloudPoseSize.x,
				(aCloudSpine.y + 0.5) / uCloudPoseSize.y);
			vec4 pose = texture2D(uCloudPose, uv);
			vec2 tangent = pose.zw / max(length(pose.zw), 0.001);
			vec2 normal = vec2(-tangent.y, tangent.x);
			float revealAt = uCloudDiscoveryStart + aDiscoveryDelay + aDiscoveryTime;
			float arrival = clamp((uCloudTime - revealAt + uCloudSettleLead) / uCloudSettleLead, 0.0, 1.0);
			// Four short movements with rests, rather than one perfectly smooth morph.
			float strike = arrival * 4.0;
			float settled = min(1.0, (floor(strike) + smoothstep(0.25, 0.75, fract(strike))) * 0.25);
			float grainTime = uCloudTime;
			float swirl = sin(grainTime * 1.7 + aSeed * 31.2) * 0.35;
			float c = cos(swirl), s = sin(swirl);
			vec2 offset = vec2(aCloudParticle.y * c - aCloudParticle.z * s,
				aCloudParticle.y * s + aCloudParticle.z * c);
			vec2 drift = vec2(sin(grainTime * 2.3 + aSeed * 71.0), cos(grainTime * 1.9 + aSeed * 53.0)) * 0.025;
			vec2 loosePosition = pose.xy + (normal * (offset.x + drift.x) + tangent * (offset.y + drift.y)) * aCloudParticle.x;
			vec3 cloudPosition = vec3(mix(loosePosition, position.xy, settled), position.z);
			float appeared = smoothstep(0.0, 0.26, uCloudTime);
			float handedOver = smoothstep(0.0, uCloudChip * 0.35, uCloudTime - revealAt);
			vCloudSettle = settled;
			vCloudAlive = appeared * (1.0 - handedOver);
		`).replace(`vAlpha = aAlpha;`,`vAlpha = mix(0.48 + aSeed * 0.40, aAlpha, vCloudSettle);`).replace(`vDotColor = aDotColor;`,`gl_PointSize *= mix(1.22, 1.0, vCloudSettle) * (1.0 + uCloudHalo * 0.80 * (1.0 - vCloudSettle));
			vDotColor = aDotColor;`),a.fragmentShader=`
		uniform float uCloudHalo;
		uniform vec3 uCloudPaper;
		varying float vCloudSettle, vCloudAlive;
	`+e.fragmentShader.replace(`void main() {`,`void main() {
 if (vCloudAlive < 0.001) discard;`).replace(`#include <tonemapping_fragment>`,`
			gl_FragColor.a *= vCloudAlive;
			// The final Worm's pale substrate travels as grains below its dark ink.
			if (uCloudHalo > 0.5) {gl_FragColor.rgb = uCloudPaper * (0.84 + vSeed * 0.16); gl_FragColor.a *= 0.60 * (1.0 - vCloudSettle);}
			#include <tonemapping_fragment>
		`),a}var ip=class{constructor(e){this.group=new Un,this.group.name=`animation-capsule-cloud`,this.geometry=e.dotGeometry,this.count=e.finalDots.length;let t=e.bakeResult.seed;this.tracks=e.playbackTracks.map((n,r)=>{let i=e.finalWorms[r].larva.circles,a=[0];for(let e=1;e<i.length;e++)a.push(a[e-1]+i[e].distanceTo(i[e-1]));let o=Math.max(48,Math.min(240,i.length*4));return{keys:n,circles:i,rhythm:ep(t,r),circleLengths:a,curve:Qf(i.length),samples:o,coordinates:new Float32Array(i.length*2),path:Array.from({length:o+1},()=>new W),lengths:new Float32Array(o+1)}}),this.poseData=new Float32Array(np*this.tracks.length*4),this.poseTexture=new gi(this.poseData,np,this.tracks.length,le,M),this.poseTexture.minFilter=this.poseTexture.magFilter=T;let n=this.geometry.attributes.aCloudSpine.array,r=new Float32Array(this.geometry.attributes.position.count*3);for(let e=0;e<this.count;e++){let i=n[e*2],a=n[e*2+1],o=this.tracks[a],s=i*o.circleLengths.at(-1),c=0;for(;c+1<o.circles.length-1&&o.circleLengths[c+1]<s;)c++;let l=Math.min(c+1,o.circles.length-1),u=H.clamp((s-o.circleLengths[c])/(o.circleLengths[l]-o.circleLengths[c]||1),0,1),d=H.lerp(o.circles[c].r,o.circles[l].r,u),f=Df(t,e,a,307)*Math.PI*2,p=Math.sqrt(Df(t,e,a,311))*.97,m=.42+.58*(1-H.smoothstep(Math.min(i,1-i),.015,.06));r.set([d,Math.cos(f)*p,Math.sin(f)*p*m],e*3)}this.geometry.setAttribute(`aCloudParticle`,new J(r,3));let i=e.discovery.passes.find(t=>t.object===e.cachedDotPasses.dots).original;this.materials=[1,0].map(t=>rp(i,this.poseTexture,this.tracks.length,t,e.look.paper.color)),this.materials.forEach((e,t)=>{let n=new zi(this.geometry,e);n.renderOrder=7+t,n.frustumCulled=!1,this.group.add(n)})}update(e){let t=!1;for(let[n,r]of this.tracks.entries()){let i=r.rhythm.at(e);if(i===r.lastProgress)continue;r.lastProgress=i,t=!0,Ef(r.keys,i,r.coordinates),r.curve.controlPoints.forEach((e,t)=>e.set(r.coordinates[t*2],r.coordinates[t*2+1],2,1)),r.lengths[0]=0;for(let e=0;e<=r.samples;e++)r.curve.getPoint(e/r.samples,r.path[e]),e&&(r.lengths[e]=r.lengths[e-1]+r.path[e].distanceTo(r.path[e-1]));let a=r.lengths[r.samples],o=0;for(let e=0;e<np;e++){let t=e/127*a;for(;o+1<r.samples&&r.lengths[o+1]<t;)o++;let i=r.path[o],s=r.path[o+1],c=(t-r.lengths[o])/(r.lengths[o+1]-r.lengths[o]||1),l=s.x-i.x,u=s.y-i.y,d=Math.hypot(l,u)||1;this.poseData.set([H.lerp(i.x,s.x,c),H.lerp(i.y,s.y,c),l/d,u/d],(n*np+e)*4)}}t&&(this.poseTexture.needsUpdate=!0);for(let t of this.materials)t.uniforms.uCloudTime.value=e/1e3}rhythmSettings(){return{version:$f,eventsPerWorm:this.tracks.map(e=>e.rhythm.events.length),grainFps:null,continuousGrainMotion:1}}dispose(){this.group.removeFromParent(),this.materials.forEach(e=>e.dispose()),this.poseTexture.dispose(),this.geometry.deleteAttribute(`aCloudParticle`)}},ap=`/__fossil_video`,op=30,sp=1e3,cp=e=>new Promise(t=>setTimeout(t,e)),lp=class{constructor(e){this.drawing=e,this.button=document.getElementById(`exportVideoBtn`),this.status=document.getElementById(`videoExportStatus`),navigator.userAgentData?.mobile||/Android|iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints,this.local=!1,this.local&&(this.available=null,this.button.hidden=!1,this.button.addEventListener(`click`,()=>this.running?this.abort.abort():this.start()),window.addEventListener(`beforeunload`,()=>{this.job&&this.running&&navigator.sendBeacon(`${ap}/${this.job.id}/cancel`)}),this.request(`/capabilities`).then(e=>{this.available=e.available,this.unavailableReason=e.available?``:`FFmpeg is unavailable. Install FFmpeg or set FOSSIL_FFMPEG_PATH, then restart Vite.`,this.button.title=e.available?`Save MP4 to ${e.outputRoot}`:`Install FFmpeg or set FOSSIL_FFMPEG_PATH, then restart Vite`,e.available||this.message(this.unavailableReason),this.refresh()}).catch(e=>{this.available=!1,this.unavailableReason=e.message,this.button.title=e.message,this.message(`Video export unavailable: ${e.message}`),this.refresh()}))}refresh(){this.local&&!this.running&&(this.button.disabled=!this.drawing.playbackTracks)}async request(e,t={}){let n=await fetch(`${ap}${e}`,t);if(!n.headers.get(`content-type`)?.includes(`application/json`))throw Error(`The local video export service is unavailable. Restart the development server and reload this page.`);let r=await n.json();if(!n.ok)throw Error(r.error||`Export failed (${n.status})`);return r}message(e){this.status.hidden=!1,this.status.textContent=e}async start(){let e=this.drawing;if(this.running)return;if(!e.playbackTracks){this.message(`Wait for the animation to finish preparing.`);return}if(this.available===null){this.message(`Checking video export availability…`);return}if(!this.available){this.message(`Video export unavailable: ${this.unavailableReason}`);return}this.running=!0,this.abort=new AbortController,this.job=null,this.button.textContent=`Cancel export`;let t=[...document.querySelectorAll(`#devControls button, #devControls input, #devControls select`)].filter(e=>e!==this.button).map(e=>[e,e.disabled]);t.forEach(([e])=>{e.disabled=!0});let n=e.renderer.domElement,r=n.style.pointerEvents;n.style.pointerEvents=`none`;let i={active:e.animationActive,time:e.lastAnimationTime,state:document.documentElement.dataset.animationState,ready:document.documentElement.dataset.renderReady,bake:e.bakeResult};cancelAnimationFrame(e.animationFrame),e.animationActive=!1;let{signal:a}=this.abort;try{e.createDiscovery(),e.discoverySchedule=e.discovery.schedule,e.createMotion();let t=jf+e.discoverySchedule.totalRevealMs,r=Math.ceil((t+sp)*op/1e3)+1;this.message(`Preparing video export…`);let i=e.bakeResult.seed??e.describeCurrentRender().seed;this.job=await this.request(`/start`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({seed:i,filename:rd(i,`mp4`),fps:op,width:n.width,height:n.height,frameCount:r,settings:e.describeCurrentRender(),durationMs:t,finalHoldMs:sp,camera:{position:e.camera.position.toArray(),zoom:e.camera.zoom}})});for(let t=0;t<r;t++){a.throwIfAborted(),e.renderAnimationFrame(t*1e3/op);let i=await new Promise((e,t)=>n.toBlob(n=>n?e(n):t(Error(`Could not capture a PNG frame`)),`image/png`));a.throwIfAborted(),await this.request(`/${this.job.id}/frame/${t}`,{method:`PUT`,headers:{"Content-Type":`image/png`},body:i,signal:a}),this.message(`Saving frames: ${t+1}/${r} (${Math.round((t+1)/r*100)}%)`)}await this.request(`/${this.job.id}/finish`,{method:`POST`,signal:a});let o;do{if(a.throwIfAborted(),o=await this.request(`/${this.job.id}`,{signal:a}),o.phase===`error`)throw Error(o.error);if(o.phase===`cancelled`)throw Error(`Export cancelled`);o.phase!==`complete`&&(this.button.disabled=o.phase===`finalizing`,this.message(o.phase===`finalizing`?`Removing temporary frames…`:`Encoding MP4: ${Math.round(o.encodedFrames/r*100)}%`),await cp(500))}while(o.phase!==`complete`);this.job=o,this.message(`Saved MP4. `);let s=document.createElement(`a`);s.textContent=`Open video`,s.href=o.videoUrl,s.target=`_blank`,s.rel=`noopener`,this.status.append(s),this.status.append(document.createTextNode(` — ${o.outputPath}`))}catch(e){this.job&&await this.request(`/${this.job.id}/cancel`,{method:`POST`}).catch(()=>{}),this.message(a.aborted?`Export cancelled.`:`Video export failed: ${e.message}`),a.aborted||console.error(`Video export:`,e)}finally{try{if(e.bakeResult===i.bake&&e.discovery&&e.motionCloud){let t=i.time??2700+e.discoverySchedule.totalRevealMs;e.renderAnimationFrame(t),i.state!=null&&(document.documentElement.dataset.animationState=i.state),i.ready!=null&&(document.documentElement.dataset.renderReady=i.ready),e.animationActive=i.active,e.hiddenSince=document.hidden?performance.now():null,i.active&&(e.playbackStart=performance.now()-t,e.animationFrame=requestAnimationFrame(e.boundPlayback))}}finally{n.style.pointerEvents=r,t.forEach(([e,t])=>{e.disabled=t}),this.running=!1,this.button.textContent=`Export video`,this.refresh()}}}},up=class extends Cf{constructor(e){super(e);let t=new URLSearchParams(window.location.search);this.previewMode=Su(t,`animationPreview`)===`1`,this.serialPreparation=Su(t,`parallelRock`)===`0`,this.previewMode&&document.body.classList.add(`animation-preview`),this.status=document.createElement(`div`),this.status.className=`animation-status`,this.status.setAttribute(`role`,`status`),this.status.hidden=!0,this.loader=document.createElement(`div`),this.loader.className=`fossil-loader`,this.loader.setAttribute(`aria-hidden`,`true`);for(let e=0;e<12;e++){let t=document.createElement(`i`),n=e*.67,r=5+e*2.2;t.style.setProperty(`--x`,`${Math.cos(n)*r}px`),t.style.setProperty(`--y`,`${Math.sin(n)*r}px`),t.style.setProperty(`--i`,e),this.loader.append(t)}this.status.append(this.loader),document.getElementById(`wrapper`).append(this.status),this.replayButton=document.getElementById(`replayBtn`),this.replayButton.hidden=!1,this.replayButton.disabled=!0,this.replayButton.addEventListener(`click`,()=>this.replay()),this.boundPlayback=this.playback.bind(this),this.videoExport=new lp(this),document.addEventListener(`visibilitychange`,()=>{document.hidden?this.hiddenSince=performance.now():this.hiddenSince!=null&&(this.animationActive&&(this.playbackStart+=performance.now()-this.hiddenSince),this.hiddenSince=null)})}createSequencer(){return{spec:new $,getLarvas:()=>[],getDrawableCircles:()=>[]}}setup(){this.worker?.terminate(),this.worker=null,this.cancelReliefBake(),cancelAnimationFrame(this.animationFrame),this.releaseAnimation(),super.setup(),this.bakeResult=null,this.preparedRelief=null,this.preparationMs=null,this.playbackTracks=null,this.lastAnimationTime=null,this.videoExport?.refresh(),this.discoverySchedule=null,this.animationActive=!1,this.scene.background=this.whiteBackgroundEnabled?this.exteriorBackgroundColor.clone():new q(0),document.documentElement.dataset.animationState=`preparing`,this.replayButton&&(this.replayButton.disabled=!0)}updateSimScene(e){Tu.debugColors&&this.sequencer.getLarvas().length&&super.updateSimScene(e)}render(){if(this.worker||this.bakeResult)return;this.preparationStarted=performance.now(),this.preparationMs={},this.clearGeneratedScene(),this.renderer.render(this.scene,this.camera),this.setStatus(`Preparing fossil…`);let e=new Worker(new URL(``+new URL(`assets/solver-worker-C7t3hx4Y.js`,import.meta.url).href,``+import.meta.url),{type:`module`});this.worker=e,e.onerror=e=>this.failPreparation(e.message||`Worker failed to load`),e.onmessage=({data:t})=>{if(this.worker===e){if(t.type===`error`)this.failPreparation(t.message);else if(t.type===`progress`)this.setStatus(`Preparing fossil…`);else if(t.type===`complete`){this.preparationMs.workerWait=performance.now()-this.preparationStarted,e.terminate(),this.worker=null,this.bakeResult=t.result,this.setStatus(`Preparing artwork…`);let n=t.result;this.reliefBake.then(e=>{this.bakeResult===n&&(this.preparedRelief=e,this.animationFrame=requestAnimationFrame(()=>{try{this.preparePlayback()}catch(e){this.failPreparation(e.message),console.error(e)}}))})}}},this.reliefBake=this.bakeRelief(),e.postMessage({seed:v.initialSeed,composition:$.compositionMode,sampling:$.chunkSamplingMode})}bakeRelief(){if(!this.backgroundEnabled||this.serialPreparation)return Promise.resolve(null);let e=performance.now(),t=v.initialSeed,n=Od(t,this.rockMode);return new Promise(r=>{this.resolveReliefBake=r;let i=t=>{this.resolveReliefBake===r&&(this.reliefWorker?.terminate(),this.reliefWorker=null,this.resolveReliefBake=null,this.preparationMs.reliefWorkerWait=performance.now()-e,this.preparationMs.reliefWorkerCpu=t?.generationMs??null,r(t?.relief?Sd(t.relief):null))};try{this.reliefWorker=new Worker(new URL(``+new URL(`assets/rock-relief-worker-Br9vZcQU.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),this.reliefWorker.onerror=()=>i(null),this.reliefWorker.onmessage=({data:e})=>i(e.type===`complete`?e:null),this.reliefWorker.postMessage({seed:t,settings:{...kd,...Dd[n],variant:n}})}catch{i(null)}})}cancelReliefBake(){this.reliefWorker?.terminate(),this.reliefWorker=null,this.resolveReliefBake?.(null),this.resolveReliefBake=null}preparePlayback(){let e=performance.now(),t=this.bakeResult,n=t.larvas.map(Tf);this.sequencer={spec:wf(t.spec),collisionSearch:t.collisionSearch,getLarvas:()=>n,getDrawableCircles:()=>n.flatMap(e=>e.circles)},v.withState({...v.captureState(),sequenceSeed:t.sequenceSeed},()=>super.wormSceneCreate());let r=performance.now();super.finishBackgroundRender({render:this.serialPreparation,relief:this.preparedRelief}),this.preparedRelief=null;let i=performance.now(),a=this.compositionTransform;this.playbackTracks=t.tracks.map(e=>e.map(e=>{let t=new Float32Array(e.length);for(let n=0;n<e.length;n+=2)t[n]=e[n]*a.scale+a.x,t[n+1]=e[n+1]*a.scale+a.y;return t})),n.forEach((e,t)=>{this.playbackTracks[t][this.playbackTracks[t].length-1]=new Float32Array(e.circles.flatMap(e=>[e.x,e.y]))}),Object.assign(this.preparationMs,{worms:r-e,background:i-r,tracks:performance.now()-i}),this.finished=!0,this.replayButton.disabled=!1,this.videoExport?.refresh(),window.dispatchEvent(new Event(`fossil-composition-change`)),console.log(`>> ${t.version}: ${t.iterations} iterations, ${t.solveMs.toFixed(0)} ms worker bake`),this.previewMode?(this.createDiscovery(),this.discoverySchedule=this.discovery.schedule,this.createMotion(),this.setStatus(``),window.__FOSSIL_ANIMATION_PREVIEW__={seek:e=>this.renderAnimationFrame(e),canvas:this.renderer.domElement,duration:jf+this.discoverySchedule.totalRevealMs,motionDuration:kf,settings:()=>this.describeCurrentRender()},this.renderAnimationFrame(1300),window.parent.postMessage({type:`fossil-animation-ready`},window.location.origin)):this.replay()}replay(){this.highQualitySceneReady&&this.playbackTracks&&(cancelAnimationFrame(this.animationFrame),this.createDiscovery(),this.discoverySchedule=this.discovery.schedule,this.motionCloud||this.createMotion(),this.motionCloud.group.visible=!0,this.animationActive=!0,this.playbackStart=performance.now(),this.hiddenSince=document.hidden?this.playbackStart:null,this.setStatus(``),document.documentElement.dataset.renderReady=`false`,document.documentElement.dataset.animationState=`motion`,this.playback(this.playbackStart))}createMotion(){if(!this.motionCloud){let e=performance.now();this.motionCloud=new ip(this),this.preparationMs.cloud=performance.now()-e}this.motionCloud.group.parent!==this.scene&&this.scene.add(this.motionCloud.group)}createDiscovery(){if(this.discovery)return;let e=performance.now();this.discovery=new Zf(this),this.preparationMs.discovery=performance.now()-e}playback(e){if(!this.animationActive)return;if(document.hidden){this.animationFrame=requestAnimationFrame(this.boundPlayback);return}let t=e-this.playbackStart;this.renderAnimationFrame(t),t>=2700+this.discoverySchedule.totalRevealMs?(this.animationActive=!1,document.documentElement.dataset.animationState=`complete`,super.renderWormScene()):this.animationFrame=requestAnimationFrame(this.boundPlayback)}renderAnimationFrame(e){this.lastAnimationTime=e;let t=this.preparationMs.firstFrameSubmit==null?performance.now():null;this.motionCloud.update(e),this.discovery.setTime(e-jf),this.motionCloud.group.visible=e<jf+this.discoverySchedule.totalWormRevealMs,document.documentElement.dataset.animationState=e<3e3?`motion`:e<2350?`settling`:e<2700+this.discoverySchedule.totalWormRevealMs?`discovery`:e<2700+this.discoverySchedule.totalRevealMs?`stone`:`complete`,this.renderer.render(this.scene,this.camera),t!=null&&(this.preparationMs.firstFrameSubmit=performance.now()-t,this.preparationMs.totalWait=performance.now()-this.preparationStarted)}buildHighQualityScene(e){this.releaseAnimation(),super.buildHighQualityScene(e)}renderWormScene(){this.animationActive?this.renderer.render(this.scene,this.camera):super.renderWormScene()}setRockVariant(e){this.releaseAnimation(),super.setRockVariant(e)}setBackgroundEnabled(e){this.releaseAnimation(),super.setBackgroundEnabled(e)}releaseAnimation(){cancelAnimationFrame(this.animationFrame),this.animationActive=!1,this.discovery?.dispose(),this.discovery=null,this.motionCloud?.dispose(),this.motionCloud=null,this.lastAnimationTime=null,this.highQualitySceneReady&&(document.documentElement.dataset.animationState=`complete`)}setStatus(e){this.status&&(this.status.classList.remove(`error`),this.status.firstElementChild!==this.loader&&this.status.replaceChildren(this.loader),this.status.setAttribute(`aria-label`,e||`Ready`),this.status.hidden=!e)}failPreparation(e){this.worker?.terminate(),this.worker=null,this.cancelReliefBake(),document.documentElement.dataset.animationState=`error`,this.setStatus(`Could not prepare this fossil. Try another seed.`),this.status.classList.add(`error`),this.status.textContent=`Could not prepare this fossil. Try another seed.`,console.error(`Fossil animation:`,e)}describeCurrentRender(){return{...super.describeCurrentRender(),animation:this.bakeResult?{version:this.bakeResult.version,solverNumericVersion:this.bakeResult.solverNumericVersion,solveMs:this.bakeResult.solveMs,iterations:this.bakeResult.iterations,savedFrames:this.bakeResult.tracks.map(e=>e.length),cachedPathFraction:this.bakeResult.cachedPathFraction,recordedFrames:this.bakeResult.recordedFrames,cachedStartFrames:this.bakeResult.cachedStartFrames,motionMs:kf,revealMs:this.discoverySchedule?.totalRevealMs??0,wormFormDelayMs:Af,discoveryStartMs:jf,uncoverDelaysMs:this.discoverySchedule?.delays,uncoverOrder:this.discoverySchedule?.order,uncoverDurationsMs:this.discoverySchedule?.durations,uncoverLengths:this.discoverySchedule?.lengths,uncoverVersion:this.discoverySchedule?.version,uncoverSpeeds:this.discoverySchedule?.speeds,uncoverFragmentCounts:this.discoverySchedule?.fragments.map(e=>e.length),wormRevealMs:this.discoverySchedule?.totalWormRevealMs,excavationVersion:Bf,rockLagMs:Vf,rockFormation:this.discovery?.rockExcavation?.describe(),uncoverChunkRange:this.discoverySchedule?.chunkRange,uncoverChipMs:this.discoverySchedule?.chipMs,motionMode:`cloud`,cloudVersion:tp,cloudPalette:`final-ink-and-paper`,cloudParticleCount:this.motionCloud?.count,cloudSettleLeadMs:350,motionRhythm:this.motionCloud?.rhythmSettings(),preparationVersion:`parallel-relief-v2`,rampTableVersion:su.tableVersion,parallelRelief:!this.serialPreparation&&this.backgroundEnabled,preparationMs:this.preparationMs,wormPreparationMs:this.wormPreparationMs,discoveryPreparationMs:this.discovery?.preparationMs,state:document.documentElement.dataset.animationState}:null}}};Tu.init(),console.log(`... hi ❤︎`),wu();var dp=new URLSearchParams(window.location.search);$.setCompositionMode(Su(dp,`composition`));var fp=Su(dp,`sampling`);$.setChunkSamplingMode(fp),document.documentElement.dataset.samplingMode=fp,console.log(`chunk sampling mode`,fp);var pp=dp.get(`seed`),mp=pp===null?NaN:Number(pp);v.setSeed(Number.isSafeInteger(mp)&&mp>=0?mp:Math.random()*2**32);var hp=Su(dp,`animationPreview`)===`1`?{x:420,y:600}:{x:1400,y:2e3};{let e=new(Su(dp,`animation`)===`0`?Cf:up)(hp);Tu.attachDrawing(e),Su(dp,`compare`)===`1`&&(window.__FOSSIL_COMPARE_DRAWING__=e),e.render()}