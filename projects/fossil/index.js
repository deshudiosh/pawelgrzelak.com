var Pc=Object.defineProperty;var ia=i=>{throw TypeError(i)};var Cc=(i,t,e)=>t in i?Pc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Se=(i,t,e)=>Cc(i,typeof t!="symbol"?t+"":t,e),Hr=(i,t,e)=>t.has(i)||ia("Cannot "+e);var ee=(i,t,e)=>(Hr(i,t,"read from private field"),e?e.call(i):t.get(i)),xe=(i,t,e)=>t.has(i)?ia("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Ye=(i,t,e,n)=>(Hr(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),Vr=(i,t,e)=>(Hr(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fs="164",Lc=0,ra=1,Ic=2,Go=1,Dc=2,tn=3,xn=0,ye=1,rn=2,vn=0,an=1,Rs=2,sa=3,Ps=4,zc=5,In=100,Nc=101,Uc=102,Oc=103,kc=104,Fc=200,Bc=201,Hc=202,Vc=203,Cs=204,Ls=205,Gc=206,Jc=207,Zc=208,Wc=209,Xc=210,Yc=211,qc=212,jc=213,Kc=214,Qc=0,$c=1,tl=2,vr=3,el=4,nl=5,il=6,rl=7,Jo=0,sl=1,al=2,Sn=0,ol=1,cl=2,ll=3,ul=4,hl=5,fl=6,dl=7,Zo=300,ui=301,hi=302,Is=303,Ds=304,Ir=306,zs=1e3,zn=1001,Ns=1002,ze=1003,pl=1004,Hi=1005,Fe=1006,Gr=1007,Nn=1008,Mn=1009,ml=1010,Al=1011,Wo=1012,Xo=1013,fi=1014,An=1015,Dr=1016,Yo=1017,qo=1018,Di=1020,gl=35902,vl=1021,Sl=1022,Ze=1023,xl=1024,Ml=1025,ci=1026,wi=1027,_l=1028,jo=1029,El=1030,Ko=1031,Qo=1033,Jr=33776,Zr=33777,Wr=33778,Xr=33779,aa=35840,oa=35841,ca=35842,la=35843,ua=36196,ha=37492,fa=37496,da=37808,pa=37809,ma=37810,Aa=37811,ga=37812,va=37813,Sa=37814,xa=37815,Ma=37816,_a=37817,Ea=37818,ya=37819,Ta=37820,ba=37821,Yr=36492,wa=36494,Ra=36495,yl=36283,Pa=36284,Ca=36285,La=36286,Tl=3200,bl=3201,$o=0,wl=1,mn="",Ve="srgb",_n="srgb-linear",Bs="display-p3",zr="display-p3-linear",Sr="linear",qt="srgb",xr="rec709",Mr="p3",Gn=7680,Ia=519,Rl=512,Pl=513,Cl=514,tc=515,Ll=516,Il=517,Dl=518,zl=519,Da=35044,za="300 es",sn=2e3,_r=2001;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qr=Math.PI/180,Er=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function Nl(i,t){return(i%t+t)%t}function jr(i,t,e){return(1-e)*i+e*t}function vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(t,e,n,r,s,a,o,c,l){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],A=n[8],g=r[0],p=r[3],f=r[6],E=r[1],_=r[4],y=r[7],z=r[2],b=r[5],w=r[8];return s[0]=a*g+o*E+c*z,s[3]=a*p+o*_+c*b,s[6]=a*f+o*y+c*w,s[1]=l*g+h*E+u*z,s[4]=l*p+h*_+u*b,s[7]=l*f+h*y+u*w,s[2]=d*g+m*E+A*z,s[5]=d*p+m*_+A*b,s[8]=d*f+m*y+A*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*s,m=l*s-a*c,A=e*u+n*d+r*m;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/A;return t[0]=u*g,t[1]=(r*l-h*n)*g,t[2]=(o*n-r*a)*g,t[3]=d*g,t[4]=(h*e-r*c)*g,t[5]=(r*s-o*e)*g,t[6]=m*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new wt;function ec(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ul(){const i=yr("canvas");return i.style.display="block",i}const Na={};function Ol(i){i in Na||(Na[i]=!0,console.warn(i))}const Ua=new wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oa=new wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vi={[_n]:{transfer:Sr,primaries:xr,toReference:i=>i,fromReference:i=>i},[Ve]:{transfer:qt,primaries:xr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zr]:{transfer:Sr,primaries:Mr,toReference:i=>i.applyMatrix3(Oa),fromReference:i=>i.applyMatrix3(Ua)},[Bs]:{transfer:qt,primaries:Mr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Oa),fromReference:i=>i.applyMatrix3(Ua).convertLinearToSRGB()}},kl=new Set([_n,zr]),Jt={enabled:!0,_workingColorSpace:_n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Vi[t].toReference,r=Vi[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Vi[i].primaries},getTransfer:function(i){return i===mn?Sr:Vi[i].transfer}};function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class Fl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jn===void 0&&(Jn=yr("canvas")),Jn.width=t.width,Jn.height=t.height;const n=Jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=li(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bl=0;class nc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($r(r[a].image)):s.push($r(r[a]))}else s=$r(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function $r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hl=0;class _e extends pi{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,n=zn,r=zn,s=Fe,a=Nn,o=Ze,c=Mn,l=_e.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=zi(),this.name="",this.source=new nc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zs:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case Ns:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zs:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case Ns:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=Zo;_e.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,r=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],A=c[9],g=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(A-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(A+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(m+1)/2,z=(f+1)/2,b=(h+d)/4,w=(u+g)/4,O=(A+p)/4;return _>y&&_>z?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=b/n,s=w/n):y>z?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=b/r,s=O/r):z<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),n=w/s,r=O/s),this.set(n,r,s,e),this}let E=Math.sqrt((p-A)*(p-A)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-A)/E,this.y=(u-g)/E,this.z=(d-h)/E,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vl extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _e(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ic extends _e{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gl extends _e{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const d=s[a+0],m=s[a+1],A=s[a+2],g=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=A,t[e+3]=g;return}if(u!==g||c!==d||l!==m||h!==A){let p=1-o;const f=c*d+l*m+h*A+u*g,E=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const z=Math.sqrt(_),b=Math.atan2(z,f*E);p=Math.sin(p*b)/z,o=Math.sin(o*b)/z}const y=o*E;if(c=c*p+d*y,l=l*p+m*y,h=h*p+A*y,u=u*p+g*y,p===1-o){const z=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=z,l*=z,h*=z,u*=z}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],d=s[a+1],m=s[a+2],A=s[a+3];return t[e]=o*A+h*u+c*m-l*d,t[e+1]=c*A+h*d+l*u-o*m,t[e+2]=l*A+h*m+o*d-c*u,t[e+3]=h*A-o*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),d=c(n/2),m=c(r/2),A=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*m*A,this._y=l*m*u-d*h*A,this._z=l*h*A+d*m*u,this._w=l*h*u-d*m*A;break;case"YXZ":this._x=d*h*u+l*m*A,this._y=l*m*u-d*h*A,this._z=l*h*A-d*m*u,this._w=l*h*u+d*m*A;break;case"ZXY":this._x=d*h*u-l*m*A,this._y=l*m*u+d*h*A,this._z=l*h*A+d*m*u,this._w=l*h*u-d*m*A;break;case"ZYX":this._x=d*h*u-l*m*A,this._y=l*m*u+d*h*A,this._z=l*h*A-d*m*u,this._w=l*h*u+d*m*A;break;case"YZX":this._x=d*h*u+l*m*A,this._y=l*m*u+d*h*A,this._z=l*h*A-d*m*u,this._w=l*h*u-d*m*A;break;case"XZY":this._x=d*h*u-l*m*A,this._y=l*m*u-d*h*A,this._z=l*h*A+d*m*u,this._w=l*h*u+d*m*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),h=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ts.copy(this).projectOnVector(t),this.sub(ts)}reflect(t){return this.sub(ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ts=new L,ka=new Ni;class Ui{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ue.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ue.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ue.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ue):Ue.fromBufferAttribute(s,a),Ue.applyMatrix4(t.matrixWorld),this.expandByPoint(Ue);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(t.matrixWorld),this.union(Gi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ue),Ue.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),Ji.subVectors(this.max,Si),Zn.subVectors(t.a,Si),Wn.subVectors(t.b,Si),Xn.subVectors(t.c,Si),ln.subVectors(Wn,Zn),un.subVectors(Xn,Wn),yn.subVectors(Zn,Xn);let e=[0,-ln.z,ln.y,0,-un.z,un.y,0,-yn.z,yn.y,ln.z,0,-ln.x,un.z,0,-un.x,yn.z,0,-yn.x,-ln.y,ln.x,0,-un.y,un.x,0,-yn.y,yn.x,0];return!es(e,Zn,Wn,Xn,Ji)||(e=[1,0,0,0,1,0,0,0,1],!es(e,Zn,Wn,Xn,Ji))?!1:(Zi.crossVectors(ln,un),e=[Zi.x,Zi.y,Zi.z],es(e,Zn,Wn,Xn,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ue).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ue).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qe=[new L,new L,new L,new L,new L,new L,new L,new L],Ue=new L,Gi=new Ui,Zn=new L,Wn=new L,Xn=new L,ln=new L,un=new L,yn=new L,Si=new L,Ji=new L,Zi=new L,Tn=new L;function es(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Tn.fromArray(i,s);const o=r.x*Math.abs(Tn.x)+r.y*Math.abs(Tn.y)+r.z*Math.abs(Tn.z),c=t.dot(Tn),l=e.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Jl=new Ui,xi=new L,ns=new L;class Oi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jl.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xi.subVectors(t,this.center);const e=xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(xi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ns.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xi.copy(t.center).add(ns)),this.expandByPoint(xi.copy(t.center).sub(ns))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new L,is=new L,Wi=new L,hn=new L,rs=new L,Xi=new L,ss=new L;class Hs{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.origin).addScaledVector(this.direction,e),je.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){is.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(is);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Wi),o=hn.dot(this.direction),c=-hn.dot(Wi),l=hn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,A;if(h>0)if(u=a*c-o,d=a*o-c,A=s*h,u>=0)if(d>=-A)if(d<=A){const g=1/h;u*=g,d*=g,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-A?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=A?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(is).addScaledVector(Wi,d),m}intersectSphere(t,e){je.subVectors(t.center,this.origin);const n=je.dot(this.direction),r=je.dot(je)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,n,r,s){rs.subVectors(e,t),Xi.subVectors(n,t),ss.crossVectors(rs,Xi);let a=this.direction.dot(ss),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,t);const c=o*this.direction.dot(Xi.crossVectors(hn,Xi));if(c<0)return null;const l=o*this.direction.dot(rs.cross(hn));if(l<0||c+l>a)return null;const h=-o*hn.dot(ss);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,r,s,a,o,c,l,h,u,d,m,A,g,p){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,h,u,d,m,A,g,p)}set(t,e,n,r,s,a,o,c,l,h,u,d,m,A,g,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=A,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Yn.setFromMatrixColumn(t,0).length(),s=1/Yn.setFromMatrixColumn(t,1).length(),a=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,m=a*u,A=o*h,g=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+A*l,e[5]=d-g*l,e[9]=-o*c,e[2]=g-d*l,e[6]=A+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,A=l*h,g=l*u;e[0]=d+g*o,e[4]=A*o-m,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-A,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,A=l*h,g=l*u;e[0]=d-g*o,e[4]=-a*u,e[8]=A+m*o,e[1]=m+A*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,m=a*u,A=o*h,g=o*u;e[0]=c*h,e[4]=A*l-m,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=m*l-A,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,A=o*c,g=o*l;e[0]=c*h,e[4]=g-d*u,e[8]=A*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*u+A,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*c,m=a*l,A=o*c,g=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=a*h,e[9]=m*u-A,e[2]=A*u-m,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zl,t,Wl)}lookAt(t,e,n){const r=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),fn.crossVectors(n,be),fn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),fn.crossVectors(n,be)),fn.normalize(),Yi.crossVectors(be,fn),r[0]=fn.x,r[4]=Yi.x,r[8]=be.x,r[1]=fn.y,r[5]=Yi.y,r[9]=be.y,r[2]=fn.z,r[6]=Yi.z,r[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],A=n[2],g=n[6],p=n[10],f=n[14],E=n[3],_=n[7],y=n[11],z=n[15],b=r[0],w=r[4],O=r[8],M=r[12],v=r[1],I=r[5],F=r[9],R=r[13],V=r[2],G=r[6],j=r[10],K=r[14],H=r[3],$=r[7],Q=r[11],dt=r[15];return s[0]=a*b+o*v+c*V+l*H,s[4]=a*w+o*I+c*G+l*$,s[8]=a*O+o*F+c*j+l*Q,s[12]=a*M+o*R+c*K+l*dt,s[1]=h*b+u*v+d*V+m*H,s[5]=h*w+u*I+d*G+m*$,s[9]=h*O+u*F+d*j+m*Q,s[13]=h*M+u*R+d*K+m*dt,s[2]=A*b+g*v+p*V+f*H,s[6]=A*w+g*I+p*G+f*$,s[10]=A*O+g*F+p*j+f*Q,s[14]=A*M+g*R+p*K+f*dt,s[3]=E*b+_*v+y*V+z*H,s[7]=E*w+_*I+y*G+z*$,s[11]=E*O+_*F+y*j+z*Q,s[15]=E*M+_*R+y*K+z*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],A=t[3],g=t[7],p=t[11],f=t[15];return A*(+s*c*u-r*l*u-s*o*d+n*l*d+r*o*m-n*c*m)+g*(+e*c*m-e*l*d+s*a*d-r*a*m+r*l*h-s*c*h)+p*(+e*l*u-e*o*m-s*a*u+n*a*m+s*o*h-n*l*h)+f*(-r*o*h-e*c*u+e*o*d+r*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],A=t[12],g=t[13],p=t[14],f=t[15],E=u*p*l-g*d*l+g*c*m-o*p*m-u*c*f+o*d*f,_=A*d*l-h*p*l-A*c*m+a*p*m+h*c*f-a*d*f,y=h*g*l-A*u*l+A*o*m-a*g*m-h*o*f+a*u*f,z=A*u*c-h*g*c-A*o*d+a*g*d+h*o*p-a*u*p,b=e*E+n*_+r*y+s*z;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=E*w,t[1]=(g*d*s-u*p*s-g*r*m+n*p*m+u*r*f-n*d*f)*w,t[2]=(o*p*s-g*c*s+g*r*l-n*p*l-o*r*f+n*c*f)*w,t[3]=(u*c*s-o*d*s-u*r*l+n*d*l+o*r*m-n*c*m)*w,t[4]=_*w,t[5]=(h*p*s-A*d*s+A*r*m-e*p*m-h*r*f+e*d*f)*w,t[6]=(A*c*s-a*p*s-A*r*l+e*p*l+a*r*f-e*c*f)*w,t[7]=(a*d*s-h*c*s+h*r*l-e*d*l-a*r*m+e*c*m)*w,t[8]=y*w,t[9]=(A*u*s-h*g*s-A*n*m+e*g*m+h*n*f-e*u*f)*w,t[10]=(a*g*s-A*o*s+A*n*l-e*g*l-a*n*f+e*o*f)*w,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*m-e*o*m)*w,t[12]=z*w,t[13]=(h*g*r-A*u*r+A*n*d-e*g*d-h*n*p+e*u*p)*w,t[14]=(A*o*r-a*g*r-A*n*c+e*g*c+a*n*p-e*o*p)*w,t[15]=(a*u*r-h*o*r+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,d=s*l,m=s*h,A=s*u,g=a*h,p=a*u,f=o*u,E=c*l,_=c*h,y=c*u,z=n.x,b=n.y,w=n.z;return r[0]=(1-(g+f))*z,r[1]=(m+y)*z,r[2]=(A-_)*z,r[3]=0,r[4]=(m-y)*b,r[5]=(1-(d+f))*b,r[6]=(p+E)*b,r[7]=0,r[8]=(A+_)*w,r[9]=(p-E)*w,r[10]=(1-(d+g))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const a=Yn.set(r[4],r[5],r[6]).length(),o=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Oe.copy(this);const l=1/s,h=1/a,u=1/o;return Oe.elements[0]*=l,Oe.elements[1]*=l,Oe.elements[2]*=l,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=u,Oe.elements[9]*=u,Oe.elements[10]*=u,e.setFromRotationMatrix(Oe),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=sn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r);let m,A;if(o===sn)m=-(a+s)/(a-s),A=-2*a*s/(a-s);else if(o===_r)m=-a/(a-s),A=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=sn){const c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(a-s),d=(e+t)*l,m=(n+r)*h;let A,g;if(o===sn)A=(a+s)*u,g=-2*u;else if(o===_r)A=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yn=new L,Oe=new Qt,Zl=new L(0,0,0),Wl=new L(1,1,1),fn=new L,Yi=new L,be=new L,Fa=new Qt,Ba=new Ni;class We{constructor(t=0,e=0,n=0,r=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xl=0;const Ha=new L,qn=new Ni,Ke=new Qt,qi=new L,Mi=new L,Yl=new L,ql=new Ni,Va=new L(1,0,0),Ga=new L(0,1,0),Ja=new L(0,0,1),Za={type:"added"},jl={type:"removed"},jn={type:"childadded",child:null},as={type:"childremoved",child:null};class ae extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new L,e=new We,n=new Ni,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new wt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(Va,t)}rotateY(t){return this.rotateOnAxis(Ga,t)}rotateZ(t){return this.rotateOnAxis(Ja,t)}translateOnAxis(t,e){return Ha.copy(t).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Va,t)}translateY(t){return this.translateOnAxis(Ga,t)}translateZ(t){return this.translateOnAxis(Ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ke.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qi.copy(t):qi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ke.lookAt(Mi,qi,this.up):Ke.lookAt(qi,Mi,this.up),this.quaternion.setFromRotationMatrix(Ke),r&&(Ke.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(Ke),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Za),jn.child=t,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jl),as.child=t,this.dispatchEvent(as),as.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ke.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ke.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ke),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Za),jn.child=t,this.dispatchEvent(jn),jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,t,Yl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),A=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),A.length>0&&(n.nodes=A)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ae.DEFAULT_UP=new L(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new L,Qe=new L,os=new L,$e=new L,Kn=new L,Qn=new L,Wa=new L,cs=new L,ls=new L,us=new L;class Je{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ke.subVectors(t,e),r.cross(ke);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ke.subVectors(r,e),Qe.subVectors(n,e),os.subVectors(t,e);const a=ke.dot(ke),o=ke.dot(Qe),c=ke.dot(os),l=Qe.dot(Qe),h=Qe.dot(os),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(l*c-o*h)*d,A=(a*h-o*c)*d;return s.set(1-m-A,A,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,$e)===null?!1:$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,$e)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$e.x),c.addScaledVector(a,$e.y),c.addScaledVector(o,$e.z),c)}static isFrontFacing(t,e,n,r){return ke.subVectors(n,e),Qe.subVectors(t,e),ke.cross(Qe).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),ke.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Kn.subVectors(r,n),Qn.subVectors(s,n),cs.subVectors(t,n);const c=Kn.dot(cs),l=Qn.dot(cs);if(c<=0&&l<=0)return e.copy(n);ls.subVectors(t,r);const h=Kn.dot(ls),u=Qn.dot(ls);if(h>=0&&u<=h)return e.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Kn,a);us.subVectors(t,s);const m=Kn.dot(us),A=Qn.dot(us);if(A>=0&&m<=A)return e.copy(s);const g=m*l-c*A;if(g<=0&&l>=0&&A<=0)return o=l/(l-A),e.copy(n).addScaledVector(Qn,o);const p=h*A-m*u;if(p<=0&&u-h>=0&&m-A>=0)return Wa.subVectors(s,r),o=(u-h)/(u-h+(m-A)),e.copy(r).addScaledVector(Wa,o);const f=1/(p+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(Kn,a).addScaledVector(Qn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function hs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Jt.workingColorSpace){if(t=Nl(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=hs(a,s,t+1/3),this.g=hs(a,s,t),this.b=hs(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Jt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(ge(Ae.r*255,0,255))*65536+Math.round(ge(Ae.g*255,0,255))*256+Math.round(ge(Ae.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,r=Ae.g,s=Ae.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Ve){Jt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,r=Ae.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(ji);const n=jr(dn.h,ji.h,e),r=jr(dn.s,ji.s,e),s=jr(dn.l,ji.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Mt;Mt.NAMES=sc;let Kl=0;class Vn extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=an,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cs,this.blendDst=Ls,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==an&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ls&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vs extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new L,Ki=new _t;class he{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Da,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ol("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ki.fromBufferAttribute(this,e),Ki.applyMatrix3(t),this.setXY(e,Ki.x,Ki.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),r=Ee(r,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Da&&(t.usage=this.usage),t}}class ac extends he{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class oc extends he{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ne extends he{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ql=0;const Le=new Qt,fs=new ae,$n=new L,we=new Ui,_i=new Ui,le=new L;class Pe extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ec(t)?oc:ac)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return fs.lookAt(t),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];we.setFromBufferAttribute(s),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];_i.setFromBufferAttribute(o),this.morphTargetsRelative?(le.addVectors(we.min,_i.min),we.expandByPoint(le),le.addVectors(we.max,_i.max),we.expandByPoint(le)):(we.expandByPoint(_i.min),we.expandByPoint(_i.max))}we.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)le.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(le));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)le.fromBufferAttribute(o,l),c&&($n.fromBufferAttribute(t,l),le.add($n)),r=Math.max(r,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new L,c[O]=new L;const l=new L,h=new L,u=new L,d=new _t,m=new _t,A=new _t,g=new L,p=new L;function f(O,M,v){l.fromBufferAttribute(n,O),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,O),m.fromBufferAttribute(s,M),A.fromBufferAttribute(s,v),h.sub(l),u.sub(l),m.sub(d),A.sub(d);const I=1/(m.x*A.y-A.x*m.y);isFinite(I)&&(g.copy(h).multiplyScalar(A.y).addScaledVector(u,-m.y).multiplyScalar(I),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-A.x).multiplyScalar(I),o[O].add(g),o[M].add(g),o[v].add(g),c[O].add(p),c[M].add(p),c[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let O=0,M=E.length;O<M;++O){const v=E[O],I=v.start,F=v.count;for(let R=I,V=I+F;R<V;R+=3)f(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const _=new L,y=new L,z=new L,b=new L;function w(O){z.fromBufferAttribute(r,O),b.copy(z);const M=o[O];_.copy(M),_.sub(z.multiplyScalar(z.dot(M))).normalize(),y.crossVectors(b,M);const I=y.dot(c[O])<0?-1:1;a.setXYZW(O,_.x,_.y,_.z,I)}for(let O=0,M=E.length;O<M;++O){const v=E[O],I=v.start,F=v.count;for(let R=I,V=I+F;R<V;R+=3)w(t.getX(R+0)),w(t.getX(R+1)),w(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){const A=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,A),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(A,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let m=0,A=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?m=c[g]*o.data.stride+o.offset:m=c[g]*h;for(let f=0;f<h;f++)d[A++]=l[m++]}return new he(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new Qt,bn=new Hs,Qi=new Oi,Ya=new L,ti=new L,ei=new L,ni=new L,ds=new L,$i=new L,tr=new _t,er=new _t,nr=new _t,qa=new L,ja=new L,Ka=new L,ir=new L,rr=new L;class Be extends ae{constructor(t=new Pe,e=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){$i.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(ds.fromBufferAttribute(u,t),a?$i.addScaledVector(ds,h):$i.addScaledVector(ds.sub(e),h))}e.add($i)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(s),bn.copy(t.ray).recast(t.near),!(Qi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Qi,Ya)===null||bn.origin.distanceToSquared(Ya)>(t.far-t.near)**2))&&(Xa.copy(s).invert(),bn.copy(t.ray).applyMatrix4(Xa),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let A=0,g=d.length;A<g;A++){const p=d[A],f=a[p.materialIndex],E=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=E,z=_;y<z;y+=3){const b=o.getX(y),w=o.getX(y+1),O=o.getX(y+2);r=sr(this,f,t,n,l,h,u,b,w,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const A=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=A,f=g;p<f;p+=3){const E=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);r=sr(this,a,t,n,l,h,u,E,_,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let A=0,g=d.length;A<g;A++){const p=d[A],f=a[p.materialIndex],E=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=E,z=_;y<z;y+=3){const b=y,w=y+1,O=y+2;r=sr(this,f,t,n,l,h,u,b,w,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const A=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let p=A,f=g;p<f;p+=3){const E=p,_=p+1,y=p+2;r=sr(this,a,t,n,l,h,u,E,_,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function $l(i,t,e,n,r,s,a,o){let c;if(t.side===ye?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===xn,o),c===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(rr);return l<e.near||l>e.far?null:{distance:l,point:rr.clone(),object:i}}function sr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,ti),i.getVertexPosition(c,ei),i.getVertexPosition(l,ni);const h=$l(i,t,e,n,ti,ei,ni,ir);if(h){r&&(tr.fromBufferAttribute(r,o),er.fromBufferAttribute(r,c),nr.fromBufferAttribute(r,l),h.uv=Je.getInterpolation(ir,ti,ei,ni,tr,er,nr,new _t)),s&&(tr.fromBufferAttribute(s,o),er.fromBufferAttribute(s,c),nr.fromBufferAttribute(s,l),h.uv1=Je.getInterpolation(ir,ti,ei,ni,tr,er,nr,new _t)),a&&(qa.fromBufferAttribute(a,o),ja.fromBufferAttribute(a,c),Ka.fromBufferAttribute(a,l),h.normal=Je.getInterpolation(ir,ti,ei,ni,qa,ja,Ka,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new L,materialIndex:0};Je.getNormal(ti,ei,ni,u.normal),h.face=u}return h}class ki extends Pe{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,m=0;A("z","y","x",-1,-1,n,e,t,a,s,0),A("z","y","x",1,-1,n,e,-t,a,s,1),A("x","z","y",1,1,t,n,e,r,a,2),A("x","z","y",1,-1,t,n,-e,r,a,3),A("x","y","z",1,-1,t,e,n,r,s,4),A("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function A(g,p,f,E,_,y,z,b,w,O,M){const v=y/w,I=z/O,F=y/2,R=z/2,V=b/2,G=w+1,j=O+1;let K=0,H=0;const $=new L;for(let Q=0;Q<j;Q++){const dt=Q*I-R;for(let Dt=0;Dt<G;Dt++){const Zt=Dt*v-F;$[g]=Zt*E,$[p]=dt*_,$[f]=V,l.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[f]=b>0?1:-1,h.push($.x,$.y,$.z),u.push(Dt/w),u.push(1-Q/O),K+=1}}for(let Q=0;Q<O;Q++)for(let dt=0;dt<w;dt++){const Dt=d+dt+G*Q,Zt=d+dt+G*(Q+1),J=d+(dt+1)+G*(Q+1),tt=d+(dt+1)+G*Q;c.push(Dt,Zt,tt),c.push(Zt,J,tt),H+=6}o.addGroup(m,H,M),m+=H,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function di(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Me(i){const t={};for(let e=0;e<i.length;e++){const n=di(i[e]);for(const r in n)t[r]=n[r]}return t}function tu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const eu={clone:di,merge:Me};var nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=di(t.uniforms),this.uniformsGroups=tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lc extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new L,Qa=new _t,$a=new _t;class Re extends lc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,Qa,$a),e.subVectors($a,Qa)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,ri=1;class ru extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Re(ii,ri,t,e);r.layers=this.layers,this.add(r);const s=new Re(ii,ri,t,e);s.layers=this.layers,this.add(s);const a=new Re(ii,ri,t,e);a.layers=this.layers,this.add(a);const o=new Re(ii,ri,t,e);o.layers=this.layers,this.add(o);const c=new Re(ii,ri,t,e);c.layers=this.layers,this.add(c);const l=new Re(ii,ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class uc extends _e{constructor(t,e,n,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class su extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new uc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ki(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ye,blending:vn});s.uniforms.tEquirect.value=e;const a=new Be(r,s),o=e.minFilter;return e.minFilter===Nn&&(e.minFilter=Fe),new ru(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const ps=new L,au=new L,ou=new wt;class Cn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ps.subVectors(n,e).cross(au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ps),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ou.getNormalMatrix(t),r=this.coplanarPoint(ps).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new Oi,ar=new L;class Gs{constructor(t=new Cn,e=new Cn,n=new Cn,r=new Cn,s=new Cn,a=new Cn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],A=r[9],g=r[10],p=r[11],f=r[12],E=r[13],_=r[14],y=r[15];if(n[0].setComponents(c-s,d-l,p-m,y-f).normalize(),n[1].setComponents(c+s,d+l,p+m,y+f).normalize(),n[2].setComponents(c+a,d+h,p+A,y+E).normalize(),n[3].setComponents(c-a,d-h,p-A,y-E).normalize(),n[4].setComponents(c-o,d-u,p-g,y-_).normalize(),e===sn)n[5].setComponents(c+o,d+u,p+g,y+_).normalize();else if(e===_r)n[5].setComponents(o,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ar.x=r.normal.x>0?t.max.x:t.min.x,ar.y=r.normal.y>0?t.max.y:t.min.y,ar.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function cu(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,o),u.count===-1&&d.length===0&&i.bufferSubData(l,0,h),d.length!==0){for(let m=0,A=d.length;m<A;m++){const g=d[m];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Nr extends Pe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=t/o,d=e/c,m=[],A=[],g=[],p=[];for(let f=0;f<h;f++){const E=f*d-a;for(let _=0;_<l;_++){const y=_*u-s;A.push(y,-E,0),g.push(0,0,1),p.push(_/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const _=E+l*f,y=E+l*(f+1),z=E+1+l*(f+1),b=E+1+l*f;m.push(_,y,b),m.push(y,z,b)}this.setIndex(m),this.setAttribute("position",new Ne(A,3)),this.setAttribute("normal",new Ne(g,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.width,t.height,t.widthSegments,t.heightSegments)}}var lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uu=`#ifdef USE_ALPHAHASH
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
#endif`,hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mu=`#ifdef USE_AOMAP
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
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_u=`#ifdef USE_IRIDESCENCE
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
#endif`,Eu=`#ifdef USE_BUMPMAP
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
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Iu=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Du=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zu=`vec3 transformedNormal = objectNormal;
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
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ju=`#ifdef USE_GRADIENTMAP
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
}`,Ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,th=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,eh=`#ifdef USE_ENVMAP
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
#endif`,nh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ah=`PhysicalMaterial material;
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
#endif`,oh=`struct PhysicalMaterial {
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
}`,ch=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lh=`#if defined( RE_IndirectDiffuse )
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
#endif`,uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ph=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ah=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vh=`#if defined( USE_POINTS_UV )
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
#endif`,Sh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_h=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Th=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ch=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lh=`#ifdef USE_NORMALMAP
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
#endif`,Ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,kh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Zh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qh=`#ifdef USE_SKINNING
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
#endif`,jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kh=`#ifdef USE_SKINNING
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
#endif`,Qh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$h=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
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
#endif`,rf=`#ifdef USE_TRANSMISSION
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
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uf=`uniform sampler2D t2D;
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
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`#include <common>
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
}`,Af=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gf=`#define DISTANCE
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
}`,vf=`#define DISTANCE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
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
}`,_f=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,yf=`uniform vec3 diffuse;
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
}`,Tf=`#define LAMBERT
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
}`,bf=`#define LAMBERT
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
}`,wf=`#define MATCAP
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
}`,Rf=`#define MATCAP
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
}`,Pf=`#define NORMAL
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
}`,Cf=`#define NORMAL
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
}`,Lf=`#define PHONG
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
}`,If=`#define PHONG
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
}`,Df=`#define STANDARD
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
}`,zf=`#define STANDARD
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
}`,Nf=`#define TOON
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
}`,Uf=`#define TOON
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
}`,Of=`uniform float size;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Ff=`#include <common>
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
}`,Bf=`uniform vec3 color;
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
}`,Hf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Vf=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:lu,alphahash_pars_fragment:uu,alphamap_fragment:hu,alphamap_pars_fragment:fu,alphatest_fragment:du,alphatest_pars_fragment:pu,aomap_fragment:mu,aomap_pars_fragment:Au,batching_pars_vertex:gu,batching_vertex:vu,begin_vertex:Su,beginnormal_vertex:xu,bsdfs:Mu,iridescence_fragment:_u,bumpmap_pars_fragment:Eu,clipping_planes_fragment:yu,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:bu,clipping_planes_vertex:wu,color_fragment:Ru,color_pars_fragment:Pu,color_pars_vertex:Cu,color_vertex:Lu,common:Iu,cube_uv_reflection_fragment:Du,defaultnormal_vertex:zu,displacementmap_pars_vertex:Nu,displacementmap_vertex:Uu,emissivemap_fragment:Ou,emissivemap_pars_fragment:ku,colorspace_fragment:Fu,colorspace_pars_fragment:Bu,envmap_fragment:Hu,envmap_common_pars_fragment:Vu,envmap_pars_fragment:Gu,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:eh,envmap_vertex:Zu,fog_vertex:Wu,fog_pars_vertex:Xu,fog_fragment:Yu,fog_pars_fragment:qu,gradientmap_pars_fragment:ju,lightmap_pars_fragment:Ku,lights_lambert_fragment:Qu,lights_lambert_pars_fragment:$u,lights_pars_begin:th,lights_toon_fragment:nh,lights_toon_pars_fragment:ih,lights_phong_fragment:rh,lights_phong_pars_fragment:sh,lights_physical_fragment:ah,lights_physical_pars_fragment:oh,lights_fragment_begin:ch,lights_fragment_maps:lh,lights_fragment_end:uh,logdepthbuf_fragment:hh,logdepthbuf_pars_fragment:fh,logdepthbuf_pars_vertex:dh,logdepthbuf_vertex:ph,map_fragment:mh,map_pars_fragment:Ah,map_particle_fragment:gh,map_particle_pars_fragment:vh,metalnessmap_fragment:Sh,metalnessmap_pars_fragment:xh,morphinstance_vertex:Mh,morphcolor_vertex:_h,morphnormal_vertex:Eh,morphtarget_pars_vertex:yh,morphtarget_vertex:Th,normal_fragment_begin:bh,normal_fragment_maps:wh,normal_pars_fragment:Rh,normal_pars_vertex:Ph,normal_vertex:Ch,normalmap_pars_fragment:Lh,clearcoat_normal_fragment_begin:Ih,clearcoat_normal_fragment_maps:Dh,clearcoat_pars_fragment:zh,iridescence_pars_fragment:Nh,opaque_fragment:Uh,packing:Oh,premultiplied_alpha_fragment:kh,project_vertex:Fh,dithering_fragment:Bh,dithering_pars_fragment:Hh,roughnessmap_fragment:Vh,roughnessmap_pars_fragment:Gh,shadowmap_pars_fragment:Jh,shadowmap_pars_vertex:Zh,shadowmap_vertex:Wh,shadowmask_pars_fragment:Xh,skinbase_vertex:Yh,skinning_pars_vertex:qh,skinning_vertex:jh,skinnormal_vertex:Kh,specularmap_fragment:Qh,specularmap_pars_fragment:$h,tonemapping_fragment:tf,tonemapping_pars_fragment:ef,transmission_fragment:nf,transmission_pars_fragment:rf,uv_pars_fragment:sf,uv_pars_vertex:af,uv_vertex:of,worldpos_vertex:cf,background_vert:lf,background_frag:uf,backgroundCube_vert:hf,backgroundCube_frag:ff,cube_vert:df,cube_frag:pf,depth_vert:mf,depth_frag:Af,distanceRGBA_vert:gf,distanceRGBA_frag:vf,equirect_vert:Sf,equirect_frag:xf,linedashed_vert:Mf,linedashed_frag:_f,meshbasic_vert:Ef,meshbasic_frag:yf,meshlambert_vert:Tf,meshlambert_frag:bf,meshmatcap_vert:wf,meshmatcap_frag:Rf,meshnormal_vert:Pf,meshnormal_frag:Cf,meshphong_vert:Lf,meshphong_frag:If,meshphysical_vert:Df,meshphysical_frag:zf,meshtoon_vert:Nf,meshtoon_frag:Uf,points_vert:Of,points_frag:kf,shadow_vert:Ff,shadow_frag:Bf,sprite_vert:Hf,sprite_frag:Vf},nt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Ge={basic:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Me([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Me([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Me([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Me([nt.points,nt.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Me([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Me([nt.common,nt.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Me([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Me([nt.sprite,nt.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:Me([nt.common,nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:Me([nt.lights,nt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Ge.physical={uniforms:Me([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const or={r:0,b:0,g:0},Rn=new We,Gf=new Qt;function Jf(i,t,e,n,r,s,a){const o=new Mt(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function A(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?e:t).get(_)),_}function g(E){let _=!1;const y=A(E);y===null?f(o,c):y&&y.isColor&&(f(y,1),_=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,a):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function p(E,_){const y=A(_);y&&(y.isCubeTexture||y.mapping===Ir)?(h===void 0&&(h=new Be(new ki(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:di(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Rn.copy(_.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(Rn)),h.material.toneMapped=Jt.getTransfer(y.colorSpace)!==qt,(u!==y||d!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Be(new Nr(2,2),new on({name:"BackgroundMaterial",uniforms:di(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==qt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,_){E.getRGB(or,cc(i)),n.buffers.color.setClear(or.r,or.g,or.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(E,_=1){o.set(E),c=_,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:g,addToRenderList:p}}function Zf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(v,I,F,R,V){let G=!1;const j=u(R,F,I);s!==j&&(s=j,l(s.object)),G=m(v,R,F,V),G&&A(v,R,F,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(v,I,F,R),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,I,F){const R=F.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let G=V[I.id];G===void 0&&(G={},V[I.id]=G);let j=G[R];return j===void 0&&(j=d(c()),G[R]=j),j}function d(v){const I=[],F=[],R=[];for(let V=0;V<e;V++)I[V]=0,F[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:R,object:v,attributes:{},index:null}}function m(v,I,F,R){const V=s.attributes,G=I.attributes;let j=0;const K=F.getAttributes();for(const H in K)if(K[H].location>=0){const Q=V[H];let dt=G[H];if(dt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),Q===void 0||Q.attribute!==dt||dt&&Q.data!==dt.data)return!0;j++}return s.attributesNum!==j||s.index!==R}function A(v,I,F,R){const V={},G=I.attributes;let j=0;const K=F.getAttributes();for(const H in K)if(K[H].location>=0){let Q=G[H];Q===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const dt={};dt.attribute=Q,Q&&Q.data&&(dt.data=Q.data),V[H]=dt,j++}s.attributes=V,s.attributesNum=j,s.index=R}function g(){const v=s.newAttributes;for(let I=0,F=v.length;I<F;I++)v[I]=0}function p(v){f(v,0)}function f(v,I){const F=s.newAttributes,R=s.enabledAttributes,V=s.attributeDivisors;F[v]=1,R[v]===0&&(i.enableVertexAttribArray(v),R[v]=1),V[v]!==I&&(i.vertexAttribDivisor(v,I),V[v]=I)}function E(){const v=s.newAttributes,I=s.enabledAttributes;for(let F=0,R=I.length;F<R;F++)I[F]!==v[F]&&(i.disableVertexAttribArray(F),I[F]=0)}function _(v,I,F,R,V,G,j){j===!0?i.vertexAttribIPointer(v,I,F,V,G):i.vertexAttribPointer(v,I,F,R,V,G)}function y(v,I,F,R){g();const V=R.attributes,G=F.getAttributes(),j=I.defaultAttributeValues;for(const K in G){const H=G[K];if(H.location>=0){let $=V[K];if($===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),$!==void 0){const Q=$.normalized,dt=$.itemSize,Dt=t.get($);if(Dt===void 0)continue;const Zt=Dt.buffer,J=Dt.type,tt=Dt.bytesPerElement,ut=J===i.INT||J===i.UNSIGNED_INT||$.gpuType===Xo;if($.isInterleavedBufferAttribute){const it=$.data,zt=it.stride,Nt=$.offset;if(it.isInstancedInterleavedBuffer){for(let D=0;D<H.locationSize;D++)f(H.location+D,it.meshPerAttribute);v.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let D=0;D<H.locationSize;D++)p(H.location+D);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let D=0;D<H.locationSize;D++)_(H.location+D,dt/H.locationSize,J,Q,zt*tt,(Nt+dt/H.locationSize*D)*tt,ut)}else{if($.isInstancedBufferAttribute){for(let it=0;it<H.locationSize;it++)f(H.location+it,$.meshPerAttribute);v.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let it=0;it<H.locationSize;it++)p(H.location+it);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let it=0;it<H.locationSize;it++)_(H.location+it,dt/H.locationSize,J,Q,dt*tt,dt/H.locationSize*it*tt,ut)}}else if(j!==void 0){const Q=j[K];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(H.location,Q);break;case 3:i.vertexAttrib3fv(H.location,Q);break;case 4:i.vertexAttrib4fv(H.location,Q);break;default:i.vertexAttrib1fv(H.location,Q)}}}}E()}function z(){O();for(const v in n){const I=n[v];for(const F in I){const R=I[F];for(const V in R)h(R[V].object),delete R[V];delete I[F]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const I=n[v.id];for(const F in I){const R=I[F];for(const V in R)h(R[V].object),delete R[V];delete I[F]}delete n[v.id]}function w(v){for(const I in n){const F=n[I];if(F[v.id]===void 0)continue;const R=F[v.id];for(const V in R)h(R[V].object),delete R[V];delete F[v.id]}}function O(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:M,dispose:z,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function Wf(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u;m++)this.render(l[m],h[m]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let A=0;A<u;A++)m+=h[A];e.update(m,n,1)}}function c(l,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let A=0;A<l.length;A++)a(l[A],h[A],d[A]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let A=0;for(let g=0;g<u;g++)A+=h[g];for(let g=0;g<d.length;g++)e.update(A,n,d[g])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xf(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Ze&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const w=b===Dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Mn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==An&&!w)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:y,maxSamples:z}}function Yf(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Cn,o=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const A=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!r||A===null||A.length===0||s&&!p)s?h(null):l();else{const E=s?0:n,_=E*4;let y=f.clippingState||null;c.value=y,y=h(A,d,_,m);for(let z=0;z!==_;++z)y[z]=e[z];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,A){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=c.value,A!==!0||p===null){const f=m+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,y=m;_!==g;++_,y+=4)a.copy(u[_]).applyMatrix4(E,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function qf(i){let t=new WeakMap;function e(a,o){return o===Is?a.mapping=ui:o===Ds&&(a.mapping=hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Is||o===Ds)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new su(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class jf extends lc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oi=4,to=[.125,.215,.35,.446,.526,.582],Dn=20,ms=new jf,eo=new Mt;let As=null,gs=0,vs=0,Ss=!1;const Ln=(1+Math.sqrt(5))/2,si=1/Ln,no=[new L(-Ln,si,0),new L(Ln,si,0),new L(-si,0,Ln),new L(si,0,Ln),new L(0,Ln,-si),new L(0,Ln,si),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class io{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){As=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=so(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(As,gs,vs),this._renderer.xr.enabled=Ss,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),As=this._renderer.getRenderTarget(),gs=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Dr,format:Ze,colorSpace:_n,depthBuffer:!1},r=ro(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kf(s)),this._blurMaterial=Qf(s,t,e)}return r}_compileMaterial(t){const e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,ms)}_sceneToCubeUV(t,e,n,r){const o=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(eo),h.toneMapping=Sn,h.autoClear=!1;const m=new Vs({name:"PMREM.Background",side:ye,depthWrite:!1,depthTest:!1}),A=new Be(new ki,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(eo),g=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const _=this._cubeSize;cr(r,E*_,f>2?_:0,_,_),h.setRenderTarget(r),g&&h.render(A,o),h.render(t,o)}A.geometry.dispose(),A.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ui||t.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=so());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ms)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=no[(r-s-1)%no.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Be(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,A=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Dn-1),g=s/A,p=isFinite(s)?1+Math.floor(h*g):Dn;p>Dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dn}`);const f=[];let E=0;for(let w=0;w<Dn;++w){const O=w/g,M=Math.exp(-O*O/2);f.push(M),w===0?E+=M:w<p&&(E+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=A,d.mipInt.value=_-n;const y=this._sizeLods[r],z=3*y*(r>_-oi?r-_+oi:0),b=4*(this._cubeSize-y);cr(e,z,b,3*y,2*y),c.setRenderTarget(e),c.render(u,ms)}}function Kf(i){const t=[],e=[],n=[];let r=i;const s=i-oi+1+to.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-oi?c=to[a-i+oi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,A=6,g=3,p=2,f=1,E=new Float32Array(g*A*m),_=new Float32Array(p*A*m),y=new Float32Array(f*A*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,O=b>2?0:-1,M=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];E.set(M,g*A*b),_.set(d,p*A*b);const v=[b,b,b,b,b,b];y.set(v,f*A*b)}const z=new Pe;z.setAttribute("position",new he(E,g)),z.setAttribute("uv",new he(_,p)),z.setAttribute("faceIndex",new he(y,f)),t.push(z),r>oi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ro(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Qf(i,t,e){const n=new Float32Array(Dn),r=new L(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Js(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function so(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Js(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ao(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Js(){return`

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
	`}function $f(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Is||c===Ds,h=c===ui||c===hi;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new io(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new io(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function td(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ed(i,t,e,n){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const A in d.attributes)t.remove(d.attributes[A]);for(const A in d.morphAttributes){const g=d.morphAttributes[A];for(let p=0,f=g.length;p<f;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const A in d)t.update(d[A],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const A in m){const g=m[A];for(let p=0,f=g.length;p<f;p++)t.update(g[p],i.ARRAY_BUFFER)}}function l(u){const d=[],m=u.index,A=u.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let _=0,y=E.length;_<y;_+=3){const z=E[_+0],b=E[_+1],w=E[_+2];d.push(z,b,b,w,w,z)}}else if(A!==void 0){const E=A.array;g=A.version;for(let _=0,y=E.length/3-1;_<y;_+=3){const z=_+0,b=_+1,w=_+2;d.push(z,b,b,w,w,z)}}else return;const p=new(ec(d)?oc:ac)(d,1);p.version=g;const f=s.get(u);f&&t.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function nd(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*a),e.update(m,n,1)}function l(d,m,A){A!==0&&(i.drawElementsInstanced(n,m,s,d*a,A),e.update(m,n,A))}function h(d,m,A){if(A===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<A;p++)this.render(d[p]/a,m[p]);else{g.multiDrawElementsWEBGL(n,m,0,s,d,0,A);let p=0;for(let f=0;f<A;f++)p+=m[f];e.update(p,n,1)}}function u(d,m,A,g){if(A===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/a,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,g,0,A);let f=0;for(let E=0;E<A;E++)f+=m[E];for(let E=0;E<g.length;E++)e.update(f,n,g[E])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function id(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function rd(i,t,e){const n=new WeakMap,r=new ie;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var m=v;d!==void 0&&d.texture.dispose();const A=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;A===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let z=o.attributes.position.count*y,b=1;z>t.maxTextureSize&&(b=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const w=new Float32Array(z*b*4*u),O=new ic(w,z,b,u);O.type=An,O.needsUpdate=!0;const M=y*4;for(let I=0;I<u;I++){const F=f[I],R=E[I],V=_[I],G=z*b*4*I;for(let j=0;j<F.count;j++){const K=j*M;A===!0&&(r.fromBufferAttribute(F,j),w[G+K+0]=r.x,w[G+K+1]=r.y,w[G+K+2]=r.z,w[G+K+3]=0),g===!0&&(r.fromBufferAttribute(R,j),w[G+K+4]=r.x,w[G+K+5]=r.y,w[G+K+6]=r.z,w[G+K+7]=0),p===!0&&(r.fromBufferAttribute(V,j),w[G+K+8]=r.x,w[G+K+9]=r.y,w[G+K+10]=r.z,w[G+K+11]=V.itemSize===4?r.w:1)}}d={count:u,texture:O,size:new _t(z,b)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let A=0;for(let p=0;p<l.length;p++)A+=l[p];const g=o.morphTargetsRelative?1:1-A;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function sd(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class fc extends _e{constructor(t,e,n,r,s,a,o,c,l,h){if(h=h!==void 0?h:ci,h!==ci&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ci&&(n=fi),n===void 0&&h===wi&&(n=Di),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dc=new _e,pc=new fc(1,1);pc.compareFunction=tc;const mc=new ic,Ac=new Gl,gc=new uc,oo=[],co=[],lo=new Float32Array(16),uo=new Float32Array(9),ho=new Float32Array(4);function mi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=oo[r];if(s===void 0&&(s=new Float32Array(r),oo[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ur(i,t){let e=co[t];e===void 0&&(e=new Int32Array(t),co[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ad(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function ud(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(oe(e,n))return;ho.set(n),i.uniformMatrix2fv(this.addr,!1,ho),ce(e,n)}}function hd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(oe(e,n))return;uo.set(n),i.uniformMatrix3fv(this.addr,!1,uo),ce(e,n)}}function fd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(oe(e,n))return;lo.set(n),i.uniformMatrix4fv(this.addr,!1,lo),ce(e,n)}}function dd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function gd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function Sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function Md(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?pc:dc;e.setTexture2D(t||s,r)}function _d(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ac,r)}function Ed(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||gc,r)}function yd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||mc,r)}function Td(i){switch(i){case 5126:return ad;case 35664:return od;case 35665:return cd;case 35666:return ld;case 35674:return ud;case 35675:return hd;case 35676:return fd;case 5124:case 35670:return dd;case 35667:case 35671:return pd;case 35668:case 35672:return md;case 35669:case 35673:return Ad;case 5125:return gd;case 36294:return vd;case 36295:return Sd;case 36296:return xd;case 35678:case 36198:case 36298:case 36306:case 35682:return Md;case 35679:case 36299:case 36307:return _d;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return yd}}function bd(i,t){i.uniform1fv(this.addr,t)}function wd(i,t){const e=mi(t,this.size,2);i.uniform2fv(this.addr,e)}function Rd(i,t){const e=mi(t,this.size,3);i.uniform3fv(this.addr,e)}function Pd(i,t){const e=mi(t,this.size,4);i.uniform4fv(this.addr,e)}function Cd(i,t){const e=mi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ld(i,t){const e=mi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Id(i,t){const e=mi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dd(i,t){i.uniform1iv(this.addr,t)}function zd(i,t){i.uniform2iv(this.addr,t)}function Nd(i,t){i.uniform3iv(this.addr,t)}function Ud(i,t){i.uniform4iv(this.addr,t)}function Od(i,t){i.uniform1uiv(this.addr,t)}function kd(i,t){i.uniform2uiv(this.addr,t)}function Fd(i,t){i.uniform3uiv(this.addr,t)}function Bd(i,t){i.uniform4uiv(this.addr,t)}function Hd(i,t,e){const n=this.cache,r=t.length,s=Ur(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||dc,s[a])}function Vd(i,t,e){const n=this.cache,r=t.length,s=Ur(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ac,s[a])}function Gd(i,t,e){const n=this.cache,r=t.length,s=Ur(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||gc,s[a])}function Jd(i,t,e){const n=this.cache,r=t.length,s=Ur(e,r);oe(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||mc,s[a])}function Zd(i){switch(i){case 5126:return bd;case 35664:return wd;case 35665:return Rd;case 35666:return Pd;case 35674:return Cd;case 35675:return Ld;case 35676:return Id;case 5124:case 35670:return Dd;case 35667:case 35671:return zd;case 35668:case 35672:return Nd;case 35669:case 35673:return Ud;case 5125:return Od;case 36294:return kd;case 36295:return Fd;case 36296:return Bd;case 35678:case 36198:case 36298:case 36306:case 35682:return Hd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return Jd}}class Wd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Td(e.type)}}class Xd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zd(e.type)}}class Yd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function fo(i,t){i.seq.push(t),i.map[t.id]=t}function qd(i,t,e){const n=i.name,r=n.length;for(xs.lastIndex=0;;){const s=xs.exec(n),a=xs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){fo(e,l===void 0?new Wd(o,i,t):new Xd(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Yd(o),fo(e,u)),e=u}}}class mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);qd(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function po(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jd=37297;let Kd=0;function Qd(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function $d(i){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(i);let n;switch(t===e?n="":t===Mr&&e===xr?n="LinearDisplayP3ToLinearSRGB":t===xr&&e===Mr&&(n="LinearSRGBToLinearDisplayP3"),i){case _n:case zr:return[n,"LinearTransferOETF"];case Ve:case Bs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Qd(i.getShaderSource(t),a)}else return r}function tp(i,t){const e=$d(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ep(i,t){let e;switch(t){case ol:e="Linear";break;case cl:e="Reinhard";break;case ll:e="OptimizedCineon";break;case ul:e="ACESFilmic";break;case fl:e="AgX";break;case dl:e="Neutral";break;case hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function np(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ti).join(`
`)}function ip(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ti(i){return i!==""}function Ao(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function go(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Us(i){return i.replace(sp,op)}const ap=new Map;function op(i,t){let e=bt[t];if(e===void 0){const n=ap.get(t);if(n!==void 0)e=bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Us(e)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vo(i){return i.replace(cp,lp)}function lp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function So(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function up(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Go?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(t="SHADOWMAP_TYPE_VSM"),t}function hp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case hi:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function dp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jo:t="ENVMAP_BLENDING_MULTIPLY";break;case sl:t="ENVMAP_BLENDING_MIX";break;case al:t="ENVMAP_BLENDING_ADD";break}return t}function pp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mp(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=up(e),l=hp(e),h=fp(e),u=dp(e),d=pp(e),m=np(e),A=ip(s),g=r.createProgram();let p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(Ti).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(Ti).join(`
`),f.length>0&&(f+=`
`)):(p=[So(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),f=[So(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?bt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?ep("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,tp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),a=Us(a),a=Ao(a,e),a=go(a,e),o=Us(o),o=Ao(o,e),o=go(o,e),a=vo(a),o=vo(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=E+p+a,y=E+f+o,z=po(r,r.VERTEX_SHADER,_),b=po(r,r.FRAGMENT_SHADER,y);r.attachShader(g,z),r.attachShader(g,b),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(I){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),R=r.getShaderInfoLog(z).trim(),V=r.getShaderInfoLog(b).trim();let G=!0,j=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,z,b);else{const K=mo(r,z,"vertex"),H=mo(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+K+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(R===""||V==="")&&(j=!1);j&&(I.diagnostics={runnable:G,programLog:F,vertexShader:{log:R,prefix:p},fragmentShader:{log:V,prefix:f}})}r.deleteShader(z),r.deleteShader(b),O=new mr(r,g),M=rp(r,g)}let O;this.getUniforms=function(){return O===void 0&&w(this),O};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(g,jd)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kd++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=z,this.fragmentShader=b,this}let Ap=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vp(t),e.set(t,n)),n}}class vp{constructor(t){this.id=Ap++,this.code=t,this.usedTimes=0}}function Sp(i,t,e,n,r,s,a){const o=new rc,c=new gp,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,v,I,F,R){const V=F.fog,G=R.geometry,j=M.isMeshStandardMaterial?F.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||j),H=K&&K.mapping===Ir?K.image.height:null,$=A[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=Q!==void 0?Q.length:0;let Dt=0;G.morphAttributes.position!==void 0&&(Dt=1),G.morphAttributes.normal!==void 0&&(Dt=2),G.morphAttributes.color!==void 0&&(Dt=3);let Zt,J,tt,ut;if($){const Vt=Ge[$];Zt=Vt.vertexShader,J=Vt.fragmentShader}else Zt=M.vertexShader,J=M.fragmentShader,c.update(M),tt=c.getVertexShaderID(M),ut=c.getFragmentShaderID(M);const it=i.getRenderTarget(),zt=R.isInstancedMesh===!0,Nt=R.isBatchedMesh===!0,D=!!M.map,Xt=!!M.matcap,At=!!K,Wt=!!M.aoMap,St=!!M.lightMap,Ot=!!M.bumpMap,Lt=!!M.normalMap,kt=!!M.displacementMap,$t=!!M.emissiveMap,T=!!M.metalnessMap,S=!!M.roughnessMap,B=M.anisotropy>0,W=M.clearcoat>0,Y=M.dispersion>0,q=M.iridescence>0,mt=M.sheen>0,ot=M.transmission>0,at=B&&!!M.anisotropyMap,Rt=W&&!!M.clearcoatMap,et=W&&!!M.clearcoatNormalMap,pt=W&&!!M.clearcoatRoughnessMap,Ft=q&&!!M.iridescenceMap,gt=q&&!!M.iridescenceThicknessMap,lt=mt&&!!M.sheenColorMap,Pt=mt&&!!M.sheenRoughnessMap,Ut=!!M.specularMap,ne=!!M.specularColorMap,Ct=!!M.specularIntensityMap,P=ot&&!!M.transmissionMap,X=ot&&!!M.thicknessMap,Z=!!M.gradientMap,rt=!!M.alphaMap,ct=M.alphaTest>0,Bt=!!M.alphaHash,Yt=!!M.extensions;let te=Sn;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(te=i.toneMapping);const fe={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:J,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Nt,instancing:zt,instancingColor:zt&&R.instanceColor!==null,instancingMorph:zt&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:_n,alphaToCoverage:!!M.alphaToCoverage,map:D,matcap:Xt,envMap:At,envMapMode:At&&K.mapping,envMapCubeUVHeight:H,aoMap:Wt,lightMap:St,bumpMap:Ot,normalMap:Lt,displacementMap:d&&kt,emissiveMap:$t,normalMapObjectSpace:Lt&&M.normalMapType===wl,normalMapTangentSpace:Lt&&M.normalMapType===$o,metalnessMap:T,roughnessMap:S,anisotropy:B,anisotropyMap:at,clearcoat:W,clearcoatMap:Rt,clearcoatNormalMap:et,clearcoatRoughnessMap:pt,dispersion:Y,iridescence:q,iridescenceMap:Ft,iridescenceThicknessMap:gt,sheen:mt,sheenColorMap:lt,sheenRoughnessMap:Pt,specularMap:Ut,specularColorMap:ne,specularIntensityMap:Ct,transmission:ot,transmissionMap:P,thicknessMap:X,gradientMap:Z,opaque:M.transparent===!1&&M.blending===an&&M.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:Bt,combine:M.combine,mapUv:D&&g(M.map.channel),aoMapUv:Wt&&g(M.aoMap.channel),lightMapUv:St&&g(M.lightMap.channel),bumpMapUv:Ot&&g(M.bumpMap.channel),normalMapUv:Lt&&g(M.normalMap.channel),displacementMapUv:kt&&g(M.displacementMap.channel),emissiveMapUv:$t&&g(M.emissiveMap.channel),metalnessMapUv:T&&g(M.metalnessMap.channel),roughnessMapUv:S&&g(M.roughnessMap.channel),anisotropyMapUv:at&&g(M.anisotropyMap.channel),clearcoatMapUv:Rt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(M.sheenRoughnessMap.channel),specularMapUv:Ut&&g(M.specularMap.channel),specularColorMapUv:ne&&g(M.specularColorMap.channel),specularIntensityMapUv:Ct&&g(M.specularIntensityMap.channel),transmissionMapUv:P&&g(M.transmissionMap.channel),thicknessMapUv:X&&g(M.thicknessMap.channel),alphaMapUv:rt&&g(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Lt||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!G.attributes.uv&&(D||rt),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Dt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,useLegacyLights:i._useLegacyLights,decodeVideoTexture:D&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rn,flipSided:M.side===ye,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Yt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Yt&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function f(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)v.push(I),v.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(E(v,M),_(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function E(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function _(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),M.push(o.mask)}function y(M){const v=A[M.type];let I;if(v){const F=Ge[v];I=eu.clone(F.uniforms)}else I=M.uniforms;return I}function z(M,v){let I;for(let F=0,R=h.length;F<R;F++){const V=h[F];if(V.cacheKey===v){I=V,++I.usedTimes;break}}return I===void 0&&(I=new mp(i,v,M,s),h.push(I)),I}function b(M){if(--M.usedTimes===0){const v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:z,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:O}}function xp(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Mp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u,d,m,A,g,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:A,renderOrder:u.renderOrder,z:g,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=A,f.renderOrder=u.renderOrder,f.z=g,f.group=p),t++,f}function o(u,d,m,A,g,p){const f=a(u,d,m,A,g,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):e.push(f)}function c(u,d,m,A,g,p){const f=a(u,d,m,A,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Mp),n.length>1&&n.sort(d||xo),r.length>1&&r.sort(d||xo)}function h(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function _p(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Mo,i.set(n,[a])):r>=s.length?(a=new Mo,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ep(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Mt};break;case"SpotLight":e={position:new L,direction:new L,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function yp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tp=0;function bp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wp(i){const t=new Ep,e=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,s=new Qt,a=new Qt;function o(l,h){let u=0,d=0,m=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let A=0,g=0,p=0,f=0,E=0,_=0,y=0,z=0,b=0,w=0,O=0;l.sort(bp);const M=h===!0?Math.PI:1;for(let I=0,F=l.length;I<F;I++){const R=l[I],V=R.color,G=R.intensity,j=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=V.r*G*M,d+=V.g*G*M,m+=V.b*G*M;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],G);O++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*M),R.castShadow){const $=R.shadow,Q=e.get(R);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.directionalShadow[A]=Q,n.directionalShadowMap[A]=K,n.directionalShadowMatrix[A]=R.shadow.matrix,_++}n.directional[A]=H,A++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(V).multiplyScalar(G*M),H.distance=j,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[p]=H;const $=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,$.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[p]=$.matrix,R.castShadow){const Q=e.get(R);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.spotShadow[p]=Q,n.spotShadowMap[p]=K,z++}p++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(V).multiplyScalar(G),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=H,f++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*M),H.distance=R.distance,H.decay=R.decay,R.castShadow){const $=R.shadow,Q=e.get(R);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(G*M),H.groundColor.copy(R.groundColor).multiplyScalar(G*M),n.hemi[E]=H,E++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=m;const v=n.hash;(v.directionalLength!==A||v.pointLength!==g||v.spotLength!==p||v.rectAreaLength!==f||v.hemiLength!==E||v.numDirectionalShadows!==_||v.numPointShadows!==y||v.numSpotShadows!==z||v.numSpotMaps!==b||v.numLightProbes!==O)&&(n.directional.length=A,n.spot.length=p,n.rectArea.length=f,n.point.length=g,n.hemi.length=E,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=z,n.spotShadowMap.length=z,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=z+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=O,v.directionalLength=A,v.pointLength=g,v.spotLength=p,v.rectAreaLength=f,v.hemiLength=E,v.numDirectionalShadows=_,v.numPointShadows=y,v.numSpotShadows=z,v.numSpotMaps=b,v.numLightProbes=O,n.version=Tp++)}function c(l,h){let u=0,d=0,m=0,A=0,g=0;const p=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const _=l[f];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),u++}else if(_.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const y=n.rectArea[A];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(_.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),A++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function _o(i){const t=new wp(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(h){t.setup(e,h)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Rp(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new _o(i),t.set(r,[o])):s>=a.length?(o=new _o(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Pp extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cp extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ip=`uniform sampler2D shadow_pass;
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
}`;function Dp(i,t,e){let n=new Gs;const r=new _t,s=new _t,a=new ie,o=new Pp({depthPacking:bl}),c=new Cp,l={},h=e.maxTextureSize,u={[xn]:ye,[ye]:xn,[rn]:rn},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Lp,fragmentShader:Ip}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const A=new Pe;A.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Be(A,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let f=this.type;this.render=function(b,w,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(vn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const R=f!==tn&&this.type===tn,V=f===tn&&this.type!==tn;for(let G=0,j=b.length;G<j;G++){const K=b[G],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const $=H.getFrameExtents();if(r.multiply($),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,H.mapSize.y=s.y)),H.map===null||R===!0||V===!0){const dt=this.type!==tn?{minFilter:ze,magFilter:ze}:{};H.map!==null&&H.map.dispose(),H.map=new Bn(r.x,r.y,dt),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const Q=H.getViewportCount();for(let dt=0;dt<Q;dt++){const Dt=H.getViewport(dt);a.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),F.viewport(a),H.updateMatrices(K,dt),n=H.getFrustum(),y(w,O,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===tn&&E(H,O),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,v,I)};function E(b,w){const O=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bn(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,O,d,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,O,m,g,null)}function _(b,w,O,M){let v=null;const I=O.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)v=I;else if(v=O.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=v.uuid,R=w.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let G=V[R];G===void 0&&(G=v.clone(),V[R]=G,w.addEventListener("dispose",z)),v=G}if(v.visible=w.visible,v.wireframe=w.wireframe,M===tn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=O}return v}function y(b,w,O,M,v){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===tn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld);const R=t.update(b),V=b.material;if(Array.isArray(V)){const G=R.groups;for(let j=0,K=G.length;j<K;j++){const H=G[j],$=V[H.materialIndex];if($&&$.visible){const Q=_(b,$,M,v);b.onBeforeShadow(i,b,w,O,R,Q,H),i.renderBufferDirect(O,null,R,Q,b,H),b.onAfterShadow(i,b,w,O,R,Q,H)}}}else if(V.visible){const G=_(b,V,M,v);b.onBeforeShadow(i,b,w,O,R,G,null),i.renderBufferDirect(O,null,R,G,b,null),b.onAfterShadow(i,b,w,O,R,G,null)}}const F=b.children;for(let R=0,V=F.length;R<V;R++)y(F[R],w,O,M,v)}function z(b){b.target.removeEventListener("dispose",z);for(const O in l){const M=l[O],v=b.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}function zp(i){function t(){let P=!1;const X=new ie;let Z=null;const rt=new ie(0,0,0,0);return{setMask:function(ct){Z!==ct&&!P&&(i.colorMask(ct,ct,ct,ct),Z=ct)},setLocked:function(ct){P=ct},setClear:function(ct,Bt,Yt,te,fe){fe===!0&&(ct*=te,Bt*=te,Yt*=te),X.set(ct,Bt,Yt,te),rt.equals(X)===!1&&(i.clearColor(ct,Bt,Yt,te),rt.copy(X))},reset:function(){P=!1,Z=null,rt.set(-1,0,0,0)}}}function e(){let P=!1,X=null,Z=null,rt=null;return{setTest:function(ct){ct?ut(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(ct){X!==ct&&!P&&(i.depthMask(ct),X=ct)},setFunc:function(ct){if(Z!==ct){switch(ct){case Qc:i.depthFunc(i.NEVER);break;case $c:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ct}},setLocked:function(ct){P=ct},setClear:function(ct){rt!==ct&&(i.clearDepth(ct),rt=ct)},reset:function(){P=!1,X=null,Z=null,rt=null}}}function n(){let P=!1,X=null,Z=null,rt=null,ct=null,Bt=null,Yt=null,te=null,fe=null;return{setTest:function(Vt){P||(Vt?ut(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(Vt){X!==Vt&&!P&&(i.stencilMask(Vt),X=Vt)},setFunc:function(Vt,He,ve){(Z!==Vt||rt!==He||ct!==ve)&&(i.stencilFunc(Vt,He,ve),Z=Vt,rt=He,ct=ve)},setOp:function(Vt,He,ve){(Bt!==Vt||Yt!==He||te!==ve)&&(i.stencilOp(Vt,He,ve),Bt=Vt,Yt=He,te=ve)},setLocked:function(Vt){P=Vt},setClear:function(Vt){fe!==Vt&&(i.clearStencil(Vt),fe=Vt)},reset:function(){P=!1,X=null,Z=null,rt=null,ct=null,Bt=null,Yt=null,te=null,fe=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],m=null,A=!1,g=null,p=null,f=null,E=null,_=null,y=null,z=null,b=new Mt(0,0,0),w=0,O=!1,M=null,v=null,I=null,F=null,R=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=j>=2);let H=null,$={};const Q=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Dt=new ie().fromArray(Q),Zt=new ie().fromArray(dt);function J(P,X,Z,rt){const ct=new Uint8Array(4),Bt=i.createTexture();i.bindTexture(P,Bt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Z;Yt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(X+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return Bt}const tt={};tt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),s.setFunc(vr),Ot(!1),Lt(ra),ut(i.CULL_FACE),Wt(vn);function ut(P){l[P]!==!0&&(i.enable(P),l[P]=!0)}function it(P){l[P]!==!1&&(i.disable(P),l[P]=!1)}function zt(P,X){return h[P]!==X?(i.bindFramebuffer(P,X),h[P]=X,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=X),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=X),!0):!1}function Nt(P,X){let Z=d,rt=!1;if(P){Z=u.get(X),Z===void 0&&(Z=[],u.set(X,Z));const ct=P.textures;if(Z.length!==ct.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Bt=0,Yt=ct.length;Bt<Yt;Bt++)Z[Bt]=i.COLOR_ATTACHMENT0+Bt;Z.length=ct.length,rt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,rt=!0);rt&&i.drawBuffers(Z)}function D(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const Xt={[In]:i.FUNC_ADD,[Nc]:i.FUNC_SUBTRACT,[Uc]:i.FUNC_REVERSE_SUBTRACT};Xt[Oc]=i.MIN,Xt[kc]=i.MAX;const At={[Fc]:i.ZERO,[Bc]:i.ONE,[Hc]:i.SRC_COLOR,[Cs]:i.SRC_ALPHA,[Xc]:i.SRC_ALPHA_SATURATE,[Zc]:i.DST_COLOR,[Gc]:i.DST_ALPHA,[Vc]:i.ONE_MINUS_SRC_COLOR,[Ls]:i.ONE_MINUS_SRC_ALPHA,[Wc]:i.ONE_MINUS_DST_COLOR,[Jc]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[qc]:i.ONE_MINUS_CONSTANT_COLOR,[jc]:i.CONSTANT_ALPHA,[Kc]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(P,X,Z,rt,ct,Bt,Yt,te,fe,Vt){if(P===vn){A===!0&&(it(i.BLEND),A=!1);return}if(A===!1&&(ut(i.BLEND),A=!0),P!==zc){if(P!==g||Vt!==O){if((p!==In||_!==In)&&(i.blendEquation(i.FUNC_ADD),p=In,_=In),Vt)switch(P){case an:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.ONE,i.ONE);break;case sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case an:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ps:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}f=null,E=null,y=null,z=null,b.set(0,0,0),w=0,g=P,O=Vt}return}ct=ct||X,Bt=Bt||Z,Yt=Yt||rt,(X!==p||ct!==_)&&(i.blendEquationSeparate(Xt[X],Xt[ct]),p=X,_=ct),(Z!==f||rt!==E||Bt!==y||Yt!==z)&&(i.blendFuncSeparate(At[Z],At[rt],At[Bt],At[Yt]),f=Z,E=rt,y=Bt,z=Yt),(te.equals(b)===!1||fe!==w)&&(i.blendColor(te.r,te.g,te.b,fe),b.copy(te),w=fe),g=P,O=!1}function St(P,X){P.side===rn?it(i.CULL_FACE):ut(i.CULL_FACE);let Z=P.side===ye;X&&(Z=!Z),Ot(Z),P.blending===an&&P.transparent===!1?Wt(vn):Wt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const rt=P.stencilWrite;a.setTest(rt),rt&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),$t(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function Lt(P){P!==Lc?(ut(i.CULL_FACE),P!==v&&(P===ra?i.cullFace(i.BACK):P===Ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),v=P}function kt(P){P!==I&&(G&&i.lineWidth(P),I=P)}function $t(P,X,Z){P?(ut(i.POLYGON_OFFSET_FILL),(F!==X||R!==Z)&&(i.polygonOffset(X,Z),F=X,R=Z)):it(i.POLYGON_OFFSET_FILL)}function T(P){P?ut(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function S(P){P===void 0&&(P=i.TEXTURE0+V-1),H!==P&&(i.activeTexture(P),H=P)}function B(P,X,Z){Z===void 0&&(H===null?Z=i.TEXTURE0+V-1:Z=H);let rt=$[Z];rt===void 0&&(rt={type:void 0,texture:void 0},$[Z]=rt),(rt.type!==P||rt.texture!==X)&&(H!==Z&&(i.activeTexture(Z),H=Z),i.bindTexture(P,X||tt[P]),rt.type=P,rt.texture=X)}function W(){const P=$[H];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(P){Dt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Dt.copy(P))}function Pt(P){Zt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Zt.copy(P))}function Ut(P,X){let Z=c.get(X);Z===void 0&&(Z=new WeakMap,c.set(X,Z));let rt=Z.get(P);rt===void 0&&(rt=i.getUniformBlockIndex(X,P.name),Z.set(P,rt))}function ne(P,X){const rt=c.get(X).get(P);o.get(X)!==rt&&(i.uniformBlockBinding(X,rt,P.__bindingPointIndex),o.set(X,rt))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},H=null,$={},h={},u=new WeakMap,d=[],m=null,A=!1,g=null,p=null,f=null,E=null,_=null,y=null,z=null,b=new Mt(0,0,0),w=0,O=!1,M=null,v=null,I=null,F=null,R=null,Dt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ut,disable:it,bindFramebuffer:zt,drawBuffers:Nt,useProgram:D,setBlending:Wt,setMaterial:St,setFlipSided:Ot,setCullFace:Lt,setLineWidth:kt,setPolygonOffset:$t,setScissorTest:T,activeTexture:S,bindTexture:B,unbindTexture:W,compressedTexImage2D:Y,compressedTexImage3D:q,texImage2D:Ft,texImage3D:gt,updateUBOMapping:Ut,uniformBlockBinding:ne,texStorage2D:et,texStorage3D:pt,texSubImage2D:mt,texSubImage3D:ot,compressedTexSubImage2D:at,compressedTexSubImage3D:Rt,scissor:lt,viewport:Pt,reset:Ct}}function Np(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,S){return m?new OffscreenCanvas(T,S):yr("canvas")}function g(T,S,B){let W=1;const Y=$t(T);if((Y.width>B||Y.height>B)&&(W=B/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(W*Y.width),mt=Math.floor(W*Y.height);u===void 0&&(u=A(q,mt));const ot=S?A(q,mt):u;return ot.width=q,ot.height=mt,ot.getContext("2d").drawImage(T,0,0,q,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+q+"x"+mt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==ze&&T.minFilter!==Fe}function f(T){i.generateMipmap(T)}function E(T,S,B,W,Y=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=S;if(S===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),S===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),S===i.RGBA){const mt=Y?Sr:Jt.getTransfer(W);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=mt===qt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(T,S){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==ze&&T.minFilter!==Fe?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function y(T){const S=T.target;S.removeEventListener("dispose",y),b(S),S.isVideoTexture&&h.delete(S)}function z(T){const S=T.target;S.removeEventListener("dispose",z),O(S)}function b(T){const S=n.get(T);if(S.__webglInit===void 0)return;const B=T.source,W=d.get(B);if(W){const Y=W[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&w(T),Object.keys(W).length===0&&d.delete(B)}n.remove(T)}function w(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const B=T.source,W=d.get(B);delete W[S.__cacheKey],a.memory.textures--}function O(T){const S=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let Y=0;Y<S.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)i.deleteFramebuffer(S.__webglFramebuffer[W]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=T.textures;for(let W=0,Y=B.length;W<Y;W++){const q=n.get(B[W]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(T)}let M=0;function v(){M=0}function I(){const T=M;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),M+=1,T}function F(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function R(T,S){const B=n.get(T);if(T.isVideoTexture&&Lt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(B,T,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function V(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Dt(B,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function G(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Dt(B,T,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function j(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Zt(B,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const K={[zs]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Ns]:i.MIRRORED_REPEAT},H={[ze]:i.NEAREST,[pl]:i.NEAREST_MIPMAP_NEAREST,[Hi]:i.NEAREST_MIPMAP_LINEAR,[Fe]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},$={[Rl]:i.NEVER,[zl]:i.ALWAYS,[Pl]:i.LESS,[tc]:i.LEQUAL,[Cl]:i.EQUAL,[Dl]:i.GEQUAL,[Ll]:i.GREATER,[Il]:i.NOTEQUAL};function Q(T,S){if(S.type===An&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Fe||S.magFilter===Gr||S.magFilter===Hi||S.magFilter===Nn||S.minFilter===Fe||S.minFilter===Gr||S.minFilter===Hi||S.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,K[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,H[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,H[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ze||S.minFilter!==Hi&&S.minFilter!==Nn||S.type===An&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function dt(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",y));const W=S.source;let Y=d.get(W);Y===void 0&&(Y={},d.set(W,Y));const q=F(S);if(q!==T.__cacheKey){Y[q]===void 0&&(Y[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[q].usedTimes++;const mt=Y[T.__cacheKey];mt!==void 0&&(Y[T.__cacheKey].usedTimes--,mt.usedTimes===0&&w(S)),T.__cacheKey=q,T.__webglTexture=Y[q].texture}return B}function Dt(T,S,B){let W=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=i.TEXTURE_3D);const Y=dt(T,S),q=S.source;e.bindTexture(W,T.__webglTexture,i.TEXTURE0+B);const mt=n.get(q);if(q.version!==mt.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);const ot=Jt.getPrimaries(Jt.workingColorSpace),at=S.colorSpace===mn?null:Jt.getPrimaries(S.colorSpace),Rt=S.colorSpace===mn||ot===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let et=g(S.image,!1,r.maxTextureSize);et=kt(S,et);const pt=s.convert(S.format,S.colorSpace),Ft=s.convert(S.type);let gt=E(S.internalFormat,pt,Ft,S.colorSpace,S.isVideoTexture);Q(W,S);let lt;const Pt=S.mipmaps,Ut=S.isVideoTexture!==!0,ne=mt.__version===void 0||Y===!0,Ct=q.dataReady,P=_(S,et);if(S.isDepthTexture)gt=i.DEPTH_COMPONENT16,S.type===An?gt=i.DEPTH_COMPONENT32F:S.type===fi?gt=i.DEPTH_COMPONENT24:S.type===Di&&(gt=i.DEPTH24_STENCIL8),ne&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,gt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,gt,et.width,et.height,0,pt,Ft,null));else if(S.isDataTexture)if(Pt.length>0){Ut&&ne&&e.texStorage2D(i.TEXTURE_2D,P,gt,Pt[0].width,Pt[0].height);for(let X=0,Z=Pt.length;X<Z;X++)lt=Pt[X],Ut?Ct&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,lt.width,lt.height,pt,Ft,lt.data):e.texImage2D(i.TEXTURE_2D,X,gt,lt.width,lt.height,0,pt,Ft,lt.data);S.generateMipmaps=!1}else Ut?(ne&&e.texStorage2D(i.TEXTURE_2D,P,gt,et.width,et.height),Ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,pt,Ft,et.data)):e.texImage2D(i.TEXTURE_2D,0,gt,et.width,et.height,0,pt,Ft,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,P,gt,Pt[0].width,Pt[0].height,et.depth);for(let X=0,Z=Pt.length;X<Z;X++)lt=Pt[X],S.format!==Ze?pt!==null?Ut?Ct&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,lt.width,lt.height,et.depth,pt,lt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,gt,lt.width,lt.height,et.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?Ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,lt.width,lt.height,et.depth,pt,Ft,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,gt,lt.width,lt.height,et.depth,0,pt,Ft,lt.data)}else{Ut&&ne&&e.texStorage2D(i.TEXTURE_2D,P,gt,Pt[0].width,Pt[0].height);for(let X=0,Z=Pt.length;X<Z;X++)lt=Pt[X],S.format!==Ze?pt!==null?Ut?Ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,lt.width,lt.height,pt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?Ct&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,lt.width,lt.height,pt,Ft,lt.data):e.texImage2D(i.TEXTURE_2D,X,gt,lt.width,lt.height,0,pt,Ft,lt.data)}else if(S.isDataArrayTexture)Ut?(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,P,gt,et.width,et.height,et.depth),Ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,Ft,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,et.width,et.height,et.depth,0,pt,Ft,et.data);else if(S.isData3DTexture)Ut?(ne&&e.texStorage3D(i.TEXTURE_3D,P,gt,et.width,et.height,et.depth),Ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,Ft,et.data)):e.texImage3D(i.TEXTURE_3D,0,gt,et.width,et.height,et.depth,0,pt,Ft,et.data);else if(S.isFramebufferTexture){if(ne)if(Ut)e.texStorage2D(i.TEXTURE_2D,P,gt,et.width,et.height);else{let X=et.width,Z=et.height;for(let rt=0;rt<P;rt++)e.texImage2D(i.TEXTURE_2D,rt,gt,X,Z,0,pt,Ft,null),X>>=1,Z>>=1}}else if(Pt.length>0){if(Ut&&ne){const X=$t(Pt[0]);e.texStorage2D(i.TEXTURE_2D,P,gt,X.width,X.height)}for(let X=0,Z=Pt.length;X<Z;X++)lt=Pt[X],Ut?Ct&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt,Ft,lt):e.texImage2D(i.TEXTURE_2D,X,gt,pt,Ft,lt);S.generateMipmaps=!1}else if(Ut){if(ne){const X=$t(et);e.texStorage2D(i.TEXTURE_2D,P,gt,X.width,X.height)}Ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ft,et)}else e.texImage2D(i.TEXTURE_2D,0,gt,pt,Ft,et);p(S)&&f(W),mt.__version=q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Zt(T,S,B){if(S.image.length!==6)return;const W=dt(T,S),Y=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const q=n.get(Y);if(Y.version!==q.__version||W===!0){e.activeTexture(i.TEXTURE0+B);const mt=Jt.getPrimaries(Jt.workingColorSpace),ot=S.colorSpace===mn?null:Jt.getPrimaries(S.colorSpace),at=S.colorSpace===mn||mt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Rt&&!et?pt[Z]=g(S.image[Z],!0,r.maxCubemapSize):pt[Z]=et?S.image[Z].image:S.image[Z],pt[Z]=kt(S,pt[Z]);const Ft=pt[0],gt=s.convert(S.format,S.colorSpace),lt=s.convert(S.type),Pt=E(S.internalFormat,gt,lt,S.colorSpace),Ut=S.isVideoTexture!==!0,ne=q.__version===void 0||W===!0,Ct=Y.dataReady;let P=_(S,Ft);Q(i.TEXTURE_CUBE_MAP,S);let X;if(Rt){Ut&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,P,Pt,Ft.width,Ft.height);for(let Z=0;Z<6;Z++){X=pt[Z].mipmaps;for(let rt=0;rt<X.length;rt++){const ct=X[rt];S.format!==Ze?gt!==null?Ut?Ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,ct.width,ct.height,gt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Pt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,ct.width,ct.height,gt,lt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Pt,ct.width,ct.height,0,gt,lt,ct.data)}}}else{if(X=S.mipmaps,Ut&&ne){X.length>0&&P++;const Z=$t(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,P,Pt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Ut?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,gt,lt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pt,pt[Z].width,pt[Z].height,0,gt,lt,pt[Z].data);for(let rt=0;rt<X.length;rt++){const Bt=X[rt].image[Z].image;Ut?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Bt.width,Bt.height,gt,lt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Pt,Bt.width,Bt.height,0,gt,lt,Bt.data)}}else{Ut?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt,lt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pt,gt,lt,pt[Z]);for(let rt=0;rt<X.length;rt++){const ct=X[rt];Ut?Ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,gt,lt,ct.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Pt,gt,lt,ct.image[Z])}}}p(S)&&f(i.TEXTURE_CUBE_MAP),q.__version=Y.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function J(T,S,B,W,Y,q){const mt=s.convert(B.format,B.colorSpace),ot=s.convert(B.type),at=E(B.internalFormat,mt,ot,B.colorSpace);if(!n.get(S).__hasExternalTextures){const et=Math.max(1,S.width>>q),pt=Math.max(1,S.height>>q);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,q,at,et,pt,S.depth,0,mt,ot,null):e.texImage2D(Y,q,at,et,pt,0,mt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Ot(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,n.get(B).__webglTexture,0,St(S)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,n.get(B).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(T,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let W=i.DEPTH_COMPONENT24;if(B||Ot(S)){const Y=S.depthTexture;Y&&Y.isDepthTexture&&(Y.type===An?W=i.DEPTH_COMPONENT32F:Y.type===fi&&(W=i.DEPTH_COMPONENT24));const q=St(S);Ot(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,W,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,q,W,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,W,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const W=St(S);B&&Ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,W,i.DEPTH24_STENCIL8,S.width,S.height):Ot(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,W,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const W=S.textures;for(let Y=0;Y<W.length;Y++){const q=W[Y],mt=s.convert(q.format,q.colorSpace),ot=s.convert(q.type),at=E(q.internalFormat,mt,ot,q.colorSpace),Rt=St(S);B&&Ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,at,S.width,S.height):Ot(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,at,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,at,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),R(S.depthTexture,0);const W=n.get(S.depthTexture).__webglTexture,Y=St(S);if(S.depthTexture.format===ci)Ot(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(S.depthTexture.format===wi)Ot(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function it(T){const S=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]=i.createRenderbuffer(),tt(S.__webglDepthbuffer[W],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),tt(S.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(T,S,B){const W=n.get(T);S!==void 0&&J(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&it(T)}function Nt(T){const S=T.texture,B=n.get(T),W=n.get(S);T.addEventListener("dispose",z);const Y=T.textures,q=T.isWebGLCubeRenderTarget===!0,mt=Y.length>1;if(mt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=S.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let at=0;at<S.mipmaps.length;at++)B.__webglFramebuffer[ot][at]=i.createFramebuffer()}else B.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)B.__webglFramebuffer[ot]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(mt)for(let ot=0,at=Y.length;ot<at;ot++){const Rt=n.get(Y[ot]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ot(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<Y.length;ot++){const at=Y[ot];B.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const Rt=s.convert(at.format,at.colorSpace),et=s.convert(at.type),pt=E(at.internalFormat,Rt,et,at.colorSpace,T.isXRRenderTarget===!0),Ft=St(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Q(i.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)J(B.__webglFramebuffer[ot][at],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,at);else J(B.__webglFramebuffer[ot],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ot=0,at=Y.length;ot<at;ot++){const Rt=Y[ot],et=n.get(Rt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Q(i.TEXTURE_2D,Rt),J(B.__webglFramebuffer,T,Rt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(Rt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,W.__webglTexture),Q(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let at=0;at<S.mipmaps.length;at++)J(B.__webglFramebuffer[at],T,S,i.COLOR_ATTACHMENT0,ot,at);else J(B.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,ot,0);p(S)&&f(ot),e.unbindTexture()}T.depthBuffer&&it(T)}function D(T){const S=T.textures;for(let B=0,W=S.length;B<W;B++){const Y=S[B];if(p(Y)){const q=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,mt=n.get(Y).__webglTexture;e.bindTexture(q,mt),f(q),e.unbindTexture()}}}const Xt=[],At=[];function Wt(T){if(T.samples>0){if(Ot(T)===!1){const S=T.textures,B=T.width,W=T.height;let Y=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(T),ot=S.length>1;if(ot)for(let at=0;at<S.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let at=0;at<S.length;at++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[at]);const Rt=n.get(S[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,Y,i.NEAREST),c===!0&&(Xt.length=0,At.length=0,Xt.push(i.COLOR_ATTACHMENT0+at),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Xt.push(q),At.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let at=0;at<S.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,mt.__webglColorRenderbuffer[at]);const Rt=n.get(S[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function St(T){return Math.min(r.maxSamples,T.samples)}function Ot(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Lt(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function kt(T,S){const B=T.colorSpace,W=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==_n&&B!==mn&&(Jt.getTransfer(B)===qt?(W!==Ze||Y!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function $t(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=v,this.setTexture2D=R,this.setTexture2DArray=V,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=zt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ot}function Up(i,t){function e(n,r=mn){let s;const a=Jt.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ml)return i.BYTE;if(n===Al)return i.SHORT;if(n===Wo)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Dr)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===Sl)return i.RGB;if(n===Ze)return i.RGBA;if(n===xl)return i.LUMINANCE;if(n===Ml)return i.LUMINANCE_ALPHA;if(n===ci)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===_l)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===El)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===Qo)return i.RGBA_INTEGER;if(n===Jr||n===Zr||n===Wr||n===Xr)if(a===qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===oa||n===ca||n===la)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===ha||n===fa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ua||n===ha)return a===qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fa)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===pa||n===ma||n===Aa||n===ga||n===va||n===Sa||n===xa||n===Ma||n===_a||n===Ea||n===ya||n===Ta||n===ba)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===da)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pa)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ma)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ea)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return a===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===wa||n===Ra)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Yr)return a===qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ra)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===Pa||n===Ca||n===La)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===La)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Op extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class lr extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kp={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),f=this._getHandJoint(l,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,A=.005;l.inputState.pinching&&d>m+A?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-A&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bp=`
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

}`;class Hp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new _e,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new on({vertexShader:Fp,fragmentShader:Bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Be(new Nr(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Vp extends pi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,A=null;const g=new Hp,p=e.getContextAttributes();let f=null,E=null;const _=[],y=[],z=new _t;let b=null;const w=new Re;w.layers.enable(1),w.viewport=new ie;const O=new Re;O.layers.enable(2),O.viewport=new ie;const M=[w,O],v=new Op;v.layers.enable(1),v.layers.enable(2);let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=_[J];return tt===void 0&&(tt=new Ms,_[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=_[J];return tt===void 0&&(tt=new Ms,_[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=_[J];return tt===void 0&&(tt=new Ms,_[J]=tt),tt.getHandSpace()};function R(J){const tt=y.indexOf(J.inputSource);if(tt===-1)return;const ut=_[tt];ut!==void 0&&(ut.update(J.inputSource,J.frame,l||a),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",G);for(let J=0;J<_.length;J++){const tt=y[J];tt!==null&&(y[J]=null,_[J].disconnect(tt))}I=null,F=null,g.reset(),t.setRenderTarget(f),m=null,d=null,u=null,r=null,E=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",V),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(z),r.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,ut=null,it=null;p.depth&&(it=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?wi:ci,ut=p.stencil?Di:fi);const zt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(zt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Bn(d.textureWidth,d.textureHeight,{format:Ze,type:Mn,depthTexture:new fc(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Zt.setContext(r),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(J){for(let tt=0;tt<J.removed.length;tt++){const ut=J.removed[tt],it=y.indexOf(ut);it>=0&&(y[it]=null,_[it].disconnect(ut))}for(let tt=0;tt<J.added.length;tt++){const ut=J.added[tt];let it=y.indexOf(ut);if(it===-1){for(let Nt=0;Nt<_.length;Nt++)if(Nt>=y.length){y.push(ut),it=Nt;break}else if(y[Nt]===null){y[Nt]=ut,it=Nt;break}if(it===-1)break}const zt=_[it];zt&&zt.connect(ut)}}const j=new L,K=new L;function H(J,tt,ut){j.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(ut.matrixWorld);const it=j.distanceTo(K),zt=tt.projectionMatrix.elements,Nt=ut.projectionMatrix.elements,D=zt[14]/(zt[10]-1),Xt=zt[14]/(zt[10]+1),At=(zt[9]+1)/zt[5],Wt=(zt[9]-1)/zt[5],St=(zt[8]-1)/zt[0],Ot=(Nt[8]+1)/Nt[0],Lt=D*St,kt=D*Ot,$t=it/(-St+Ot),T=$t*-St;tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(T),J.translateZ($t),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const S=D+$t,B=Xt+$t,W=Lt-T,Y=kt+(it-T),q=At*Xt/B*S,mt=Wt*Xt/B*S;J.projectionMatrix.makePerspective(W,Y,q,mt,S,B),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function $(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;g.texture!==null&&(J.near=g.depthNear,J.far=g.depthFar),v.near=O.near=w.near=J.near,v.far=O.far=w.far=J.far,(I!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,F=v.far,w.near=I,w.far=F,O.near=I,O.far=F,w.updateProjectionMatrix(),O.updateProjectionMatrix(),J.updateProjectionMatrix());const tt=J.parent,ut=v.cameras;$(v,tt);for(let it=0;it<ut.length;it++)$(ut[it],tt);ut.length===2?H(v,w,O):v.projectionMatrix.copy(w.projectionMatrix),Q(J,v,tt)};function Q(J,tt,ut){ut===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Er*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null};let dt=null;function Dt(J,tt){if(h=tt.getViewerPose(l||a),A=tt,h!==null){const ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let it=!1;ut.length!==v.cameras.length&&(v.cameras.length=0,it=!0);for(let Nt=0;Nt<ut.length;Nt++){const D=ut[Nt];let Xt=null;if(m!==null)Xt=m.getViewport(D);else{const Wt=u.getViewSubImage(d,D);Xt=Wt.viewport,Nt===0&&(t.setRenderTargetTextures(E,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(E))}let At=M[Nt];At===void 0&&(At=new Re,At.layers.enable(Nt),At.viewport=new ie,M[Nt]=At),At.matrix.fromArray(D.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(D.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Nt===0&&(v.matrix.copy(At.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),it===!0&&v.cameras.push(At)}const zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Nt=u.getDepthInformation(ut[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(t,Nt,r.renderState)}}for(let ut=0;ut<_.length;ut++){const it=y[ut],zt=_[ut];it!==null&&zt!==void 0&&zt.update(it,tt,l||a)}g.render(t,v),dt&&dt(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),A=null}const Zt=new hc;Zt.setAnimationLoop(Dt),this.setAnimationLoop=function(J){dt=J},this.dispose=function(){}}}const Pn=new We,Gp=new Qt;function Jp(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,cc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),A(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,E,_):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ye&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ye&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f),_=E.envMap,y=E.envMapRotation;if(_&&(p.envMap.value=_,Pn.copy(y),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),p.envMapRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(Pn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const z=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*z,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=_*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ye&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function A(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Zp(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,_){const y=_.program;n.uniformBlockBinding(E,y)}function l(E,_){let y=r[E.id];y===void 0&&(A(E),y=h(E),r[E.id]=y,E.addEventListener("dispose",p));const z=_.program;n.updateUBOMapping(E,z);const b=t.render.frame;s[E.id]!==b&&(d(E),s[E.id]=b)}function h(E){const _=u();E.__bindingPointIndex=_;const y=i.createBuffer(),z=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,z,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const _=r[E.id],y=E.uniforms,z=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,w=y.length;b<w;b++){const O=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,v=O.length;M<v;M++){const I=O[M];if(m(I,b,M,z)===!0){const F=I.__offset,R=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let G=0;G<R.length;G++){const j=R[G],K=g(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,F+V,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,_,y,z){const b=E.value,w=_+"_"+y;if(z[w]===void 0)return typeof b=="number"||typeof b=="boolean"?z[w]=b:z[w]=b.clone(),!0;{const O=z[w];if(typeof b=="number"||typeof b=="boolean"){if(O!==b)return z[w]=b,!0}else if(O.equals(b)===!1)return O.copy(b),!0}return!1}function A(E){const _=E.uniforms;let y=0;const z=16;for(let w=0,O=_.length;w<O;w++){const M=Array.isArray(_[w])?_[w]:[_[w]];for(let v=0,I=M.length;v<I;v++){const F=M[v],R=Array.isArray(F.value)?F.value:[F.value];for(let V=0,G=R.length;V<G;V++){const j=R[V],K=g(j),H=y%z;H!==0&&z-H<K.boundary&&(y+=z-H),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=K.storage}}}const b=y%z;return b>0&&(y+=z-b),E.__size=y,E.__cache={},this}function g(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function p(E){const _=E.target;_.removeEventListener("dispose",p);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class Wp{constructor(t={}){const{canvas:e=Ul(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),A=new Int32Array(4);let g=null,p=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const _=this;let y=!1,z=0,b=0,w=null,O=-1,M=null;const v=new ie,I=new ie;let F=null;const R=new Mt(0);let V=0,G=e.width,j=e.height,K=1,H=null,$=null;const Q=new ie(0,0,G,j),dt=new ie(0,0,G,j);let Dt=!1;const Zt=new Gs;let J=!1,tt=!1;const ut=new Qt,it=new L,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return w===null?K:1}let D=n;function Xt(x,C){return e.getContext(x,C)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fs}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",Z,!1),D===null){const C="webgl2";if(D=Xt(C,x),D===null)throw Xt(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let At,Wt,St,Ot,Lt,kt,$t,T,S,B,W,Y,q,mt,ot,at,Rt,et,pt,Ft,gt,lt,Pt,Ut;function ne(){At=new td(D),At.init(),lt=new Up(D,At),Wt=new Xf(D,At,t,lt),St=new zp(D),Ot=new id(D),Lt=new xp,kt=new Np(D,At,St,Lt,Wt,lt,Ot),$t=new qf(_),T=new $f(_),S=new cu(D),Pt=new Zf(D,S),B=new ed(D,S,Ot,Pt),W=new sd(D,B,S,Ot),pt=new rd(D,Wt,kt),at=new Yf(Lt),Y=new Sp(_,$t,T,At,Wt,Pt,at),q=new Jp(_,Lt),mt=new _p,ot=new Rp(At),et=new Jf(_,$t,T,St,W,d,c),Rt=new Dp(_,W,Wt),Ut=new Zp(D,Ot,Wt,St),Ft=new Wf(D,At,Ot),gt=new nd(D,At,Ot),Ot.programs=Y.programs,_.capabilities=Wt,_.extensions=At,_.properties=Lt,_.renderLists=mt,_.shadowMap=Rt,_.state=St,_.info=Ot}ne();const Ct=new Vp(_,D);this.xr=Ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=At.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=At.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(x){x!==void 0&&(K=x,this.setSize(G,j,!1))},this.getSize=function(x){return x.set(G,j)},this.setSize=function(x,C,k=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,j=C,e.width=Math.floor(x*K),e.height=Math.floor(C*K),k===!0&&(e.style.width=x+"px",e.style.height=C+"px"),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(G*K,j*K).floor()},this.setDrawingBufferSize=function(x,C,k){G=x,j=C,K=k,e.width=Math.floor(x*k),e.height=Math.floor(C*k),this.setViewport(0,0,x,C)},this.getCurrentViewport=function(x){return x.copy(v)},this.getViewport=function(x){return x.copy(Q)},this.setViewport=function(x,C,k,N){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,C,k,N),St.viewport(v.copy(Q).multiplyScalar(K).round())},this.getScissor=function(x){return x.copy(dt)},this.setScissor=function(x,C,k,N){x.isVector4?dt.set(x.x,x.y,x.z,x.w):dt.set(x,C,k,N),St.scissor(I.copy(dt).multiplyScalar(K).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(x){St.setScissorTest(Dt=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){$=x},this.getClearColor=function(x){return x.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(x=!0,C=!0,k=!0){let N=0;if(x){let U=!1;if(w!==null){const st=w.texture.format;U=st===Qo||st===Ko||st===jo}if(U){const st=w.texture.type,ht=st===Mn||st===fi||st===Wo||st===Di||st===Yo||st===qo,ft=et.getClearColor(),vt=et.getClearAlpha(),Et=ft.r,Tt=ft.g,It=ft.b;ht?(m[0]=Et,m[1]=Tt,m[2]=It,m[3]=vt,D.clearBufferuiv(D.COLOR,0,m)):(A[0]=Et,A[1]=Tt,A[2]=It,A[3]=vt,D.clearBufferiv(D.COLOR,0,A))}else N|=D.COLOR_BUFFER_BIT}C&&(N|=D.DEPTH_BUFFER_BIT),k&&(N|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),mt.dispose(),ot.dispose(),Lt.dispose(),$t.dispose(),T.dispose(),W.dispose(),Pt.dispose(),Ut.dispose(),Y.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Vt),Ct.removeEventListener("sessionend",He),ve.stop()};function P(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const x=Ot.autoReset,C=Rt.enabled,k=Rt.autoUpdate,N=Rt.needsUpdate,U=Rt.type;ne(),Ot.autoReset=x,Rt.enabled=C,Rt.autoUpdate=k,Rt.needsUpdate=N,Rt.type=U}function Z(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function rt(x){const C=x.target;C.removeEventListener("dispose",rt),ct(C)}function ct(x){Bt(x),Lt.remove(x)}function Bt(x){const C=Lt.get(x).programs;C!==void 0&&(C.forEach(function(k){Y.releaseProgram(k)}),x.isShaderMaterial&&Y.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,k,N,U,st){C===null&&(C=zt);const ht=U.isMesh&&U.matrixWorld.determinant()<0,ft=Tc(x,C,k,N,U);St.setMaterial(N,ht);let vt=k.index,Et=1;if(N.wireframe===!0){if(vt=B.getWireframeAttribute(k),vt===void 0)return;Et=2}const Tt=k.drawRange,It=k.attributes.position;let re=Tt.start*Et,de=(Tt.start+Tt.count)*Et;st!==null&&(re=Math.max(re,st.start*Et),de=Math.min(de,(st.start+st.count)*Et)),vt!==null?(re=Math.max(re,0),de=Math.min(de,vt.count)):It!=null&&(re=Math.max(re,0),de=Math.min(de,It.count));const Te=de-re;if(Te<0||Te===1/0)return;Pt.setup(U,N,ft,k,vt);let Xe,Ht=Ft;if(vt!==null&&(Xe=S.get(vt),Ht=gt,Ht.setIndex(Xe)),U.isMesh)N.wireframe===!0?(St.setLineWidth(N.wireframeLinewidth*Nt()),Ht.setMode(D.LINES)):Ht.setMode(D.TRIANGLES);else if(U.isLine){let yt=N.linewidth;yt===void 0&&(yt=1),St.setLineWidth(yt*Nt()),U.isLineSegments?Ht.setMode(D.LINES):U.isLineLoop?Ht.setMode(D.LINE_LOOP):Ht.setMode(D.LINE_STRIP)}else U.isPoints?Ht.setMode(D.POINTS):U.isSprite&&Ht.setMode(D.TRIANGLES);if(U.isBatchedMesh)U._multiDrawInstances!==null?Ht.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances):Ht.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Ht.renderInstances(re,Te,U.count);else if(k.isInstancedBufferGeometry){const yt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ai=Math.min(k.instanceCount,yt);Ht.renderInstances(re,Te,Ai)}else Ht.render(re,Te)};function Yt(x,C,k){x.transparent===!0&&x.side===rn&&x.forceSinglePass===!1?(x.side=ye,x.needsUpdate=!0,Bi(x,C,k),x.side=xn,x.needsUpdate=!0,Bi(x,C,k),x.side=rn):Bi(x,C,k)}this.compile=function(x,C,k=null){k===null&&(k=x),p=ot.get(k),p.init(C),E.push(p),k.traverseVisible(function(U){U.isLight&&U.layers.test(C.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),x!==k&&x.traverseVisible(function(U){U.isLight&&U.layers.test(C.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(_._useLegacyLights);const N=new Set;return x.traverse(function(U){const st=U.material;if(st)if(Array.isArray(st))for(let ht=0;ht<st.length;ht++){const ft=st[ht];Yt(ft,k,U),N.add(ft)}else Yt(st,k,U),N.add(st)}),E.pop(),p=null,N},this.compileAsync=function(x,C,k=null){const N=this.compile(x,C,k);return new Promise(U=>{function st(){if(N.forEach(function(ht){Lt.get(ht).currentProgram.isReady()&&N.delete(ht)}),N.size===0){U(x);return}setTimeout(st,10)}At.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let te=null;function fe(x){te&&te(x)}function Vt(){ve.stop()}function He(){ve.start()}const ve=new hc;ve.setAnimationLoop(fe),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(x){te=x,Ct.setAnimationLoop(x),x===null?ve.stop():ve.start()},Ct.addEventListener("sessionstart",Vt),Ct.addEventListener("sessionend",He),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(C),C=Ct.getCamera()),x.isScene===!0&&x.onBeforeRender(_,x,C,w),p=ot.get(x,E.length),p.init(C),E.push(p),ut.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Zt.setFromProjectionMatrix(ut),tt=this.localClippingEnabled,J=at.init(this.clippingPlanes,tt),g=mt.get(x,f.length),g.init(),f.push(g),qs(x,C,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(H,$);const k=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1;k&&et.addToRenderList(g,x),this.info.render.frame++,J===!0&&at.beginShadows();const N=p.state.shadowsArray;Rt.render(N,x,C),J===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=g.opaque,st=g.transmissive;if(p.setupLights(_._useLegacyLights),C.isArrayCamera){const ht=C.cameras;if(st.length>0)for(let ft=0,vt=ht.length;ft<vt;ft++){const Et=ht[ft];Ks(U,st,x,Et)}k&&et.render(x);for(let ft=0,vt=ht.length;ft<vt;ft++){const Et=ht[ft];js(g,x,Et,Et.viewport)}}else st.length>0&&Ks(U,st,x,C),k&&et.render(x),js(g,x,C);w!==null&&(kt.updateMultisampleRenderTarget(w),kt.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(_,x,C),Pt.resetDefaultState(),O=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],J===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function qs(x,C,k,N){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Zt.intersectsSprite(x)){N&&it.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ut);const ht=W.update(x),ft=x.material;ft.visible&&g.push(x,ht,ft,k,it.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Zt.intersectsObject(x))){const ht=W.update(x),ft=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),it.copy(x.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),it.copy(ht.boundingSphere.center)),it.applyMatrix4(x.matrixWorld).applyMatrix4(ut)),Array.isArray(ft)){const vt=ht.groups;for(let Et=0,Tt=vt.length;Et<Tt;Et++){const It=vt[Et],re=ft[It.materialIndex];re&&re.visible&&g.push(x,ht,re,k,it.z,It)}}else ft.visible&&g.push(x,ht,ft,k,it.z,null)}}const st=x.children;for(let ht=0,ft=st.length;ht<ft;ht++)qs(st[ht],C,k,N)}function js(x,C,k,N){const U=x.opaque,st=x.transmissive,ht=x.transparent;p.setupLightsView(k),J===!0&&at.setGlobalState(_.clippingPlanes,k),N&&St.viewport(v.copy(N)),U.length>0&&Fi(U,C,k),st.length>0&&Fi(st,C,k),ht.length>0&&Fi(ht,C,k),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ks(x,C,k,N){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[N.id]===void 0&&(p.state.transmissionRenderTarget[N.id]=new Bn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?Dr:Mn,minFilter:Nn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const st=p.state.transmissionRenderTarget[N.id],ht=N.viewport||v;st.setSize(ht.z,ht.w);const ft=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(R),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear();const vt=_.toneMapping;_.toneMapping=Sn;const Et=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),p.setupLightsView(N),J===!0&&at.setGlobalState(_.clippingPlanes,N),Fi(x,k,N),kt.updateMultisampleRenderTarget(st),kt.updateRenderTargetMipmap(st),At.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let It=0,re=C.length;It<re;It++){const de=C[It],Te=de.object,Xe=de.geometry,Ht=de.material,yt=de.group;if(Ht.side===rn&&Te.layers.test(N.layers)){const Ai=Ht.side;Ht.side=ye,Ht.needsUpdate=!0,Qs(Te,k,N,Xe,Ht,yt),Ht.side=Ai,Ht.needsUpdate=!0,Tt=!0}}Tt===!0&&(kt.updateMultisampleRenderTarget(st),kt.updateRenderTargetMipmap(st))}_.setRenderTarget(ft),_.setClearColor(R,V),Et!==void 0&&(N.viewport=Et),_.toneMapping=vt}function Fi(x,C,k){const N=C.isScene===!0?C.overrideMaterial:null;for(let U=0,st=x.length;U<st;U++){const ht=x[U],ft=ht.object,vt=ht.geometry,Et=N===null?ht.material:N,Tt=ht.group;ft.layers.test(k.layers)&&Qs(ft,C,k,vt,Et,Tt)}}function Qs(x,C,k,N,U,st){x.onBeforeRender(_,C,k,N,U,st),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(_,C,k,N,x,st),U.transparent===!0&&U.side===rn&&U.forceSinglePass===!1?(U.side=ye,U.needsUpdate=!0,_.renderBufferDirect(k,C,N,U,x,st),U.side=xn,U.needsUpdate=!0,_.renderBufferDirect(k,C,N,U,x,st),U.side=rn):_.renderBufferDirect(k,C,N,U,x,st),x.onAfterRender(_,C,k,N,U,st)}function Bi(x,C,k){C.isScene!==!0&&(C=zt);const N=Lt.get(x),U=p.state.lights,st=p.state.shadowsArray,ht=U.state.version,ft=Y.getParameters(x,U.state,st,C,k),vt=Y.getProgramCacheKey(ft);let Et=N.programs;N.environment=x.isMeshStandardMaterial?C.environment:null,N.fog=C.fog,N.envMap=(x.isMeshStandardMaterial?T:$t).get(x.envMap||N.environment),N.envMapRotation=N.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,Et===void 0&&(x.addEventListener("dispose",rt),Et=new Map,N.programs=Et);let Tt=Et.get(vt);if(Tt!==void 0){if(N.currentProgram===Tt&&N.lightsStateVersion===ht)return ta(x,ft),Tt}else ft.uniforms=Y.getUniforms(x),x.onBuild(k,ft,_),x.onBeforeCompile(ft,_),Tt=Y.acquireProgram(ft,vt),Et.set(vt,Tt),N.uniforms=ft.uniforms;const It=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(It.clippingPlanes=at.uniform),ta(x,ft),N.needsLights=wc(x),N.lightsStateVersion=ht,N.needsLights&&(It.ambientLightColor.value=U.state.ambient,It.lightProbe.value=U.state.probe,It.directionalLights.value=U.state.directional,It.directionalLightShadows.value=U.state.directionalShadow,It.spotLights.value=U.state.spot,It.spotLightShadows.value=U.state.spotShadow,It.rectAreaLights.value=U.state.rectArea,It.ltc_1.value=U.state.rectAreaLTC1,It.ltc_2.value=U.state.rectAreaLTC2,It.pointLights.value=U.state.point,It.pointLightShadows.value=U.state.pointShadow,It.hemisphereLights.value=U.state.hemi,It.directionalShadowMap.value=U.state.directionalShadowMap,It.directionalShadowMatrix.value=U.state.directionalShadowMatrix,It.spotShadowMap.value=U.state.spotShadowMap,It.spotLightMatrix.value=U.state.spotLightMatrix,It.spotLightMap.value=U.state.spotLightMap,It.pointShadowMap.value=U.state.pointShadowMap,It.pointShadowMatrix.value=U.state.pointShadowMatrix),N.currentProgram=Tt,N.uniformsList=null,Tt}function $s(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=mr.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function ta(x,C){const k=Lt.get(x);k.outputColorSpace=C.outputColorSpace,k.batching=C.batching,k.instancing=C.instancing,k.instancingColor=C.instancingColor,k.instancingMorph=C.instancingMorph,k.skinning=C.skinning,k.morphTargets=C.morphTargets,k.morphNormals=C.morphNormals,k.morphColors=C.morphColors,k.morphTargetsCount=C.morphTargetsCount,k.numClippingPlanes=C.numClippingPlanes,k.numIntersection=C.numClipIntersection,k.vertexAlphas=C.vertexAlphas,k.vertexTangents=C.vertexTangents,k.toneMapping=C.toneMapping}function Tc(x,C,k,N,U){C.isScene!==!0&&(C=zt),kt.resetTextureUnits();const st=C.fog,ht=N.isMeshStandardMaterial?C.environment:null,ft=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:_n,vt=(N.isMeshStandardMaterial?T:$t).get(N.envMap||ht),Et=N.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Tt=!!k.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),It=!!k.morphAttributes.position,re=!!k.morphAttributes.normal,de=!!k.morphAttributes.color;let Te=Sn;N.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Te=_.toneMapping);const Xe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ht=Xe!==void 0?Xe.length:0,yt=Lt.get(N),Ai=p.state.lights;if(J===!0&&(tt===!0||x!==M)){const Ce=x===M&&N.id===O;at.setState(N,x,Ce)}let jt=!1;N.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Ai.state.version||yt.outputColorSpace!==ft||U.isBatchedMesh&&yt.batching===!1||!U.isBatchedMesh&&yt.batching===!0||U.isInstancedMesh&&yt.instancing===!1||!U.isInstancedMesh&&yt.instancing===!0||U.isSkinnedMesh&&yt.skinning===!1||!U.isSkinnedMesh&&yt.skinning===!0||U.isInstancedMesh&&yt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&yt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&yt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&yt.instancingMorph===!1&&U.morphTexture!==null||yt.envMap!==vt||N.fog===!0&&yt.fog!==st||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==at.numPlanes||yt.numIntersection!==at.numIntersection)||yt.vertexAlphas!==Et||yt.vertexTangents!==Tt||yt.morphTargets!==It||yt.morphNormals!==re||yt.morphColors!==de||yt.toneMapping!==Te||yt.morphTargetsCount!==Ht)&&(jt=!0):(jt=!0,yt.__version=N.version);let En=yt.currentProgram;jt===!0&&(En=Bi(N,C,U));let ea=!1,gi=!1,kr=!1;const pe=En.getUniforms(),cn=yt.uniforms;if(St.useProgram(En.program)&&(ea=!0,gi=!0,kr=!0),N.id!==O&&(O=N.id,gi=!0),ea||M!==x){pe.setValue(D,"projectionMatrix",x.projectionMatrix),pe.setValue(D,"viewMatrix",x.matrixWorldInverse);const Ce=pe.map.cameraPosition;Ce!==void 0&&Ce.setValue(D,it.setFromMatrixPosition(x.matrixWorld)),Wt.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&pe.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,gi=!0,kr=!0)}if(U.isSkinnedMesh){pe.setOptional(D,U,"bindMatrix"),pe.setOptional(D,U,"bindMatrixInverse");const Ce=U.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),pe.setValue(D,"boneTexture",Ce.boneTexture,kt))}U.isBatchedMesh&&(pe.setOptional(D,U,"batchingTexture"),pe.setValue(D,"batchingTexture",U._matricesTexture,kt));const Fr=k.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&pt.update(U,k,En),(gi||yt.receiveShadow!==U.receiveShadow)&&(yt.receiveShadow=U.receiveShadow,pe.setValue(D,"receiveShadow",U.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(cn.envMap.value=vt,cn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&C.environment!==null&&(cn.envMapIntensity.value=C.environmentIntensity),gi&&(pe.setValue(D,"toneMappingExposure",_.toneMappingExposure),yt.needsLights&&bc(cn,kr),st&&N.fog===!0&&q.refreshFogUniforms(cn,st),q.refreshMaterialUniforms(cn,N,K,j,p.state.transmissionRenderTarget[x.id]),mr.upload(D,$s(yt),cn,kt)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(mr.upload(D,$s(yt),cn,kt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&pe.setValue(D,"center",U.center),pe.setValue(D,"modelViewMatrix",U.modelViewMatrix),pe.setValue(D,"normalMatrix",U.normalMatrix),pe.setValue(D,"modelMatrix",U.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ce=N.uniformsGroups;for(let Br=0,Rc=Ce.length;Br<Rc;Br++){const na=Ce[Br];Ut.update(na,En),Ut.bind(na,En)}}return En}function bc(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function wc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,C,k){Lt.get(x.texture).__webglTexture=C,Lt.get(x.depthTexture).__webglTexture=k;const N=Lt.get(x);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=k===void 0,N.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,C){const k=Lt.get(x);k.__webglFramebuffer=C,k.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,k=0){w=x,z=C,b=k;let N=!0,U=null,st=!1,ht=!1;if(x){const vt=Lt.get(x);vt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(D.FRAMEBUFFER,null),N=!1):vt.__webglFramebuffer===void 0?kt.setupRenderTarget(x):vt.__hasExternalTextures&&kt.rebindTextures(x,Lt.get(x.texture).__webglTexture,Lt.get(x.depthTexture).__webglTexture);const Et=x.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ht=!0);const Tt=Lt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Tt[C])?U=Tt[C][k]:U=Tt[C],st=!0):x.samples>0&&kt.useMultisampledRTT(x)===!1?U=Lt.get(x).__webglMultisampledFramebuffer:Array.isArray(Tt)?U=Tt[k]:U=Tt,v.copy(x.viewport),I.copy(x.scissor),F=x.scissorTest}else v.copy(Q).multiplyScalar(K).floor(),I.copy(dt).multiplyScalar(K).floor(),F=Dt;if(St.bindFramebuffer(D.FRAMEBUFFER,U)&&N&&St.drawBuffers(x,U),St.viewport(v),St.scissor(I),St.setScissorTest(F),st){const vt=Lt.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,vt.__webglTexture,k)}else if(ht){const vt=Lt.get(x.texture),Et=C||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.__webglTexture,k||0,Et)}O=-1},this.readRenderTargetPixels=function(x,C,k,N,U,st,ht){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Lt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(ft=ft[ht]),ft){St.bindFramebuffer(D.FRAMEBUFFER,ft);try{const vt=x.texture,Et=vt.format,Tt=vt.type;if(!Wt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-N&&k>=0&&k<=x.height-U&&D.readPixels(C,k,N,U,lt.convert(Et),lt.convert(Tt),st)}finally{const vt=w!==null?Lt.get(w).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(x,C,k=0){const N=Math.pow(2,-k),U=Math.floor(C.image.width*N),st=Math.floor(C.image.height*N);kt.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,x.x,x.y,U,st),St.unbindTexture()},this.copyTextureToTexture=function(x,C,k,N=0){const U=C.image.width,st=C.image.height,ht=lt.convert(k.format),ft=lt.convert(k.type);kt.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,x.x,x.y,U,st,ht,ft,C.image.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,x.x,x.y,C.mipmaps[0].width,C.mipmaps[0].height,ht,C.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,N,x.x,x.y,ht,ft,C.image),N===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(x,C,k,N,U=0){const st=x.max.x-x.min.x,ht=x.max.y-x.min.y,ft=x.max.z-x.min.z,vt=lt.convert(N.format),Et=lt.convert(N.type);let Tt;if(N.isData3DTexture)kt.setTexture3D(N,0),Tt=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)kt.setTexture2DArray(N,0),Tt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const It=D.getParameter(D.UNPACK_ROW_LENGTH),re=D.getParameter(D.UNPACK_IMAGE_HEIGHT),de=D.getParameter(D.UNPACK_SKIP_PIXELS),Te=D.getParameter(D.UNPACK_SKIP_ROWS),Xe=D.getParameter(D.UNPACK_SKIP_IMAGES),Ht=k.isCompressedTexture?k.mipmaps[U]:k.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,x.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,x.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,x.min.z),k.isDataTexture||k.isData3DTexture?D.texSubImage3D(Tt,U,C.x,C.y,C.z,st,ht,ft,vt,Et,Ht.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,U,C.x,C.y,C.z,st,ht,ft,vt,Ht.data):D.texSubImage3D(Tt,U,C.x,C.y,C.z,st,ht,ft,vt,Et,Ht),D.pixelStorei(D.UNPACK_ROW_LENGTH,It),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re),D.pixelStorei(D.UNPACK_SKIP_PIXELS,de),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe),U===0&&N.generateMipmaps&&D.generateMipmap(Tt),St.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?kt.setTextureCube(x,0):x.isData3DTexture?kt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?kt.setTexture2DArray(x,0):kt.setTexture2D(x,0),St.unbindTexture()},this.resetState=function(){z=0,b=0,w=null,St.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Bs?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===zr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Xp extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vc extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tr=new L,br=new L,Eo=new Qt,Ei=new Hs,ur=new Oi,_s=new L,yo=new L;class Yp extends ae{constructor(t=new Pe,e=new vc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Tr.fromBufferAttribute(e,r-1),br.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Tr.distanceTo(br);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ur.radius+=s,t.ray.intersectsSphere(ur)===!1)return;Eo.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Eo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),A=Math.min(h.count,a.start+a.count);for(let g=m,p=A-1;g<p;g+=l){const f=h.getX(g),E=h.getX(g+1),_=hr(this,t,Ei,c,f,E);_&&e.push(_)}if(this.isLineLoop){const g=h.getX(A-1),p=h.getX(m),f=hr(this,t,Ei,c,g,p);f&&e.push(f)}}else{const m=Math.max(0,a.start),A=Math.min(d.count,a.start+a.count);for(let g=m,p=A-1;g<p;g+=l){const f=hr(this,t,Ei,c,g,g+1);f&&e.push(f)}if(this.isLineLoop){const g=hr(this,t,Ei,c,A-1,m);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hr(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Tr.fromBufferAttribute(a,r),br.fromBufferAttribute(a,s),e.distanceSqToSegment(Tr,br,_s,yo)>n)return;_s.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_s);if(!(c<t.near||c>t.far))return{distance:c,point:yo.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}class qp extends Vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const To=new Qt,Os=new Hs,fr=new Oi,dr=new L;class jp extends ae{constructor(t=new Pe,e=new qp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),fr.radius+=s,t.ray.intersectsSphere(fr)===!1)return;To.copy(r).invert(),Os.copy(t.ray).applyMatrix4(To);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let A=d,g=m;A<g;A++){const p=l.getX(A);dr.fromBufferAttribute(u,p),bo(dr,p,c,r,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let A=d,g=m;A<g;A++)dr.fromBufferAttribute(u,A),bo(dr,A,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function bo(i,t,e,n,r,s,a){const o=Os.distanceSqToPoint(i);if(o<e){const c=new L;Os.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Sc{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,m=(a-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new _t:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,r=[],s=[],a=[],o=new L,c=new Qt;for(let m=0;m<=t;m++){const A=m/t;r[m]=this.getTangentAt(A,new L)}s[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const A=Math.acos(ge(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,A))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(ge(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let A=1;A<=t;A++)s[A].applyMatrix4(c.makeRotationAxis(r[A],m*A)),a[A].crossVectors(r[A],s[A])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function wo(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}class Kp extends Sc{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(wo(o,c.x,l.x,h.x,u.x),wo(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new _t().fromArray(r))}return this}}class Or extends Pe{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],m=[];let A=0;const g=[],p=n/2;let f=0;E(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(m,2));function E(){const y=new L,z=new L;let b=0;const w=(e-t)/n;for(let O=0;O<=s;O++){const M=[],v=O/s,I=v*(e-t)+t;for(let F=0;F<=r;F++){const R=F/r,V=R*c+o,G=Math.sin(V),j=Math.cos(V);z.x=I*G,z.y=-v*n+p,z.z=I*j,u.push(z.x,z.y,z.z),y.set(G,w,j).normalize(),d.push(y.x,y.y,y.z),m.push(R,1-v),M.push(A++)}g.push(M)}for(let O=0;O<r;O++)for(let M=0;M<s;M++){const v=g[M][O],I=g[M+1][O],F=g[M+1][O+1],R=g[M][O+1];h.push(v,I,R),h.push(I,F,R),b+=6}l.addGroup(f,b,0),f+=b}function _(y){const z=A,b=new _t,w=new L;let O=0;const M=y===!0?t:e,v=y===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,p*v,0),d.push(0,v,0),m.push(.5,.5),A++;const I=A;for(let F=0;F<=r;F++){const V=F/r*c+o,G=Math.cos(V),j=Math.sin(V);w.x=M*j,w.y=p*v,w.z=M*G,u.push(w.x,w.y,w.z),d.push(0,v,0),b.x=G*.5+.5,b.y=j*.5*v+.5,m.push(b.x,b.y),A++}for(let F=0;F<r;F++){const R=z+F,V=I+F;y===!0?h.push(V,V+1,R):h.push(V+1,V,R),O+=3}l.addGroup(f,O,y===!0?1:2),f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qp extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $p extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tm extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Es=new Qt,Ro=new L,Po=new L;class em{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ro.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ro),Po.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Po),e.updateMatrixWorld(),Es.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Es),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Es)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class nm extends em{constructor(){super(new Re(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Er*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class im extends tm{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new nm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Co=new L;let pr,ys;class Lo extends ae{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",pr===void 0&&(pr=new Pe,pr.setAttribute("position",new Ne([0,0,0,0,1,0],3)),ys=new Or(0,.5,1,5,1),ys.translate(0,-.5,0)),this.position.copy(e),this.line=new Yp(pr,new vc({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Be(ys,new Vs({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Co.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Co,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fs);var rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var xc={exports:{}};(function(i,t){(function(e,n){i.exports=n()})(rm,function(){return e.importState=function(r){var s=new e;return s.importState(r),s},e;function e(){return function(r){var s=0,a=0,o=0,c=1;r.length==0&&(r=[+new Date]);var l=n();s=l(" "),a=l(" "),o=l(" ");for(var h=0;h<r.length;h++)s-=l(r[h]),s<0&&(s+=1),a-=l(r[h]),a<0&&(a+=1),o-=l(r[h]),o<0&&(o+=1);l=null;var u=function(){var d=2091639*s+c*23283064365386963e-26;return s=a,a=o,o=d-(c=d|0)};return u.next=u,u.uint32=function(){return u()*4294967296},u.fract53=function(){return u()+(u()*2097152|0)*11102230246251565e-32},u.version="Alea 0.9",u.args=r,u.exportState=function(){return[s,a,o,c]},u.importState=function(d){s=+d[0]||0,a=+d[1]||0,o=+d[2]||0,c=+d[3]||0},u}(Array.prototype.slice.call(arguments))}function n(){var r=4022871197,s=function(a){a=a.toString();for(var o=0;o<a.length;o++){r+=a.charCodeAt(o);var c=.02519603282416938*r;r=c>>>0,c-=r,c*=r,r=c>>>0,c-=r,r+=c*4294967296}return(r>>>0)*23283064365386963e-26};return s.version="Mash 0.9",s}})})(xc);var am=xc.exports;const om=sm(am),Mc=Math.sqrt(3),cm=.5*(Mc-1),yi=(3-Mc)/6,Io=i=>Math.floor(i)|0,Do=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function lm(i=Math.random){const t=um(i),e=new Float64Array(t).map(r=>Do[r%12*2]),n=new Float64Array(t).map(r=>Do[r%12*2+1]);return function(s,a){let o=0,c=0,l=0;const h=(s+a)*cm,u=Io(s+h),d=Io(a+h),m=(u+d)*yi,A=u-m,g=d-m,p=s-A,f=a-g;let E,_;p>f?(E=1,_=0):(E=0,_=1);const y=p-E+yi,z=f-_+yi,b=p-1+2*yi,w=f-1+2*yi,O=u&255,M=d&255;let v=.5-p*p-f*f;if(v>=0){const R=O+t[M],V=e[R],G=n[R];v*=v,o=v*v*(V*p+G*f)}let I=.5-y*y-z*z;if(I>=0){const R=O+E+t[M+_],V=e[R],G=n[R];I*=I,c=I*I*(V*y+G*z)}let F=.5-b*b-w*w;if(F>=0){const R=O+1+t[M+1],V=e[R],G=n[R];F*=F,l=F*F*(V*b+G*w)}return 70*(o+c+l)}}function um(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=e[n];e[n]=e[r],e[r]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}var Un,Ri,wr,_c;const ue=class ue{static setSeed(t){t=Math.round(t),Ye(ue,Un,t),ue.initialSeed=t,console.log(t),Ye(ue,Ri,lm(om(t)))}static noise1d(t){var e;return ee(e=ue,Ri).call(e,t,0)}static random(t=void 0){var n;const e=Vr(n=ue,wr,_c).call(n);return t?t.at(e):e}static range(t,e,n=void 0){return t+ue.random(n)*(e-t)}static spread(t=1,e=0){return ue.range(-t,t)+e}static rangeInt(t,e,n=void 0){return Math.round(ue.range(t,e,n))}static toMax(t){return ue.range(0,t)}};Un=new WeakMap,Ri=new WeakMap,wr=new WeakSet,_c=function(){Ye(ue,Un,ee(ue,Un)+2654435769|0);let t=ee(ue,Un);return t^=t>>>16,t=Math.imul(t,569420461),t^=t>>>15,t=Math.imul(t,1935289751),t^=t>>>15,(t>>>0)/4294967296},xe(ue,wr),xe(ue,Un,0),xe(ue,Ri),Se(ue,"initialSeed");let xt=ue;var Pi,Ci,Li;const Gt=class Gt{static init(){Gt.debug=sessionStorage.getItem(ee(Gt,Pi))=="true",Gt.debugColors=sessionStorage.getItem(ee(Gt,Ci))=="true",Gt.debugSolo=sessionStorage.getItem(ee(Gt,Li))=="true"}static attachDrawing(t){Gt.drawing=t,document.getElementById("nextBtn").addEventListener("click",()=>{xt.setSeed(Math.random()*2**32),t.setup(),t.render()}),document.getElementById("debugBtn").addEventListener("click",()=>{Gt.debug=!Gt.debug,xt.setSeed(xt.initialSeed),t.setup(),t.render(),sessionStorage.setItem(ee(Gt,Pi),Gt.debug)}),document.getElementById("colorsBtn").addEventListener("click",()=>{Gt.debug||(Gt.debugColors=!Gt.debugColors,xt.setSeed(xt.initialSeed),t.setup(),t.render(),sessionStorage.setItem(ee(Gt,Ci),Gt.debugColors))}),document.getElementById("soloBtn").addEventListener("click",()=>{Gt.debugSolo=!Gt.debugSolo,xt.setSeed(xt.initialSeed),t.setup(),t.render(),sessionStorage.setItem(ee(Gt,Li),Gt.debugSolo)})}static setDebugText(t){document.getElementById("debugText").innerHTML=t}};Pi=new WeakMap,Ci=new WeakMap,Li=new WeakMap,xe(Gt,Pi,"fossil_debug"),xe(Gt,Ci,"fossil_debugColors"),xe(Gt,Li,"fossil_debugSolo"),Se(Gt,"debug",!1),Se(Gt,"debugColors",!1),Se(Gt,"debugSolo",!0),Se(Gt,"drawing");let Hn=Gt;const hm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAEAAAAAEACAYAAAAzCrNtAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nOzdedx1U/3/8dcHEckcGSoypEJJRSVjUmYKkeaB0kAZvs0liV/RKM2DQpQhU4VEoihzohQyREIyj/f798faV93d7uvszz5n73POdd3v5+NxP76+Xeus9dln3HvttT4fMDMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMbazHqAMzMzMzMzMzMzMzMzMzMzMzMzMzMpgNJzwSeDzwXWBF4CrAIsAAwH/Av4EHgbuBG4Nrq36XAhRFx/wjCNjMzMzMzMzMzM7Mx4gQAZmZmZmZmZmZmZmZmZmZmZmZmZmZ9krQm8CZgS2D5Abp6GLgM+C1wPvDbiLh64ADNzMzMzMzMzMzMbEpxAgAzMzMzMzMzMzMzMzMzMzMzM5u2JL0FeE1NswciYsthxGNzLknzAycmmh4WEcd1HY8NTtLLgP2AF3U4zDsj4rAO+5+2JL0L2Lqm2R0RseMw4jEbJkk7AW9ONN0mIu7tOp5RkLQocPSQh907Ii4d8phmZmZmZmZmNg3NM+oAzMzMzMzMzMzMzMzMzMzMzMzMOrQi8LKaNtNy45uNnXmofy8CnNJ1IDYYScsAXwc2H8Jw1wxhjOnqGdR/5m4ZRiBmI7ACud+c6byWfD5gkyGPufiQxzMzMzMzMzOzaWo6T9qYmZmZmZmZmZmZmZmZmZmZmZmZmbVG0qbAUcCiQxryL0Max8zMzMzMzMzMzMzGxFASAEh6JvAsYCXgacCCwOOBuYAHgXuAG4G/An8CLo2IR4YRm7VPUgCrULLnPh1YGlgEmJfymj9Aec1vAq4HrgSuiohHRxJwByStCKwGLA8sByxEySQK5T1/H+XYbwL+SDl+v+fNbNqR9CRgTcrvwVOAJSjnH/NRKmg8QPk+vB64HPhzRMwYTbTtkfREyu/AxG/hwsD8wBMov4H3A38DrgMujojrRhKoWUckzQesATyTcv6/NDA35bPwb+Ah4A7KZ/86yvn/bSMJ1sxaJWkeym/gasBTgWUpv/0LAXcBDwO3UT771wEXRcRdo4jVzMzM2iFpceD5lPn/p1Lmgh8PzKCc+/+Tcu5/NfD7iLh7RKFaB6q5n7Uo1VQnXv+Z58L/RZkD+Svl9b9jFHFadyQtDTyH8h5YDliM8h4Q5TvgNso9wGuBSyLCVRXNzMzMzGxKk/Rm4GsMr/jSQ5Rra7OxIWkZYAtgZcpc4K3A2RHxq5EGNiLVPdKXA+tQqr/fA1wBnOz5MDMzMzMzMzMz61cnk9DVhp8tgB2B9YElG3Zxt6RzgROAoyPizpZDHFuS5gJeBmwJHBQRN444pBRJiwLbAVsDL6ZMYjZxt6TfAj8BfjJVjntCtdFzC8pzsD7wpIZdPFAd/8+B4yPiTy2HOCVI2hjYIdH09oj4YNfx9CJpM8r7fdzcEhEfG3UQTUhaAHg2ZXHossBS/Pd3Y2FK4pCvRsSZQ4hlL8qNqanu0oj4yigGljQ3sAmwFfAKYIWGXdwt6WzgZOC4iPhnyyF2RtJTgTcAmwJr0+A8S9LfgVOAwyPi191EOBqSXgi8pUeTv0XEAcOKJ0PSbpTEFV24l7LxfeLftcBlEXF/R+MNjaRlgddQzoleAjyu4eP/DJwNHAucGREPtx5kfQzbU87FB/UoZaPzv6v/ew2lKsd1oziuJqqFGmP1mUz6eFvJVCTtSdm8MtXsNapEGpKWALYHtgFeSkl6kzVD0lXA6ZQ5gHOGnRxO0rOBvWua/SYivjaMeGYlaR9KUsVe9o+Igar/SNqFdr4Dh+nUiDhm1EG0TdIOwMaJph9q63Pf4Pxnt4hQG2NmSFoS+ATlujDjiH4XF0paG3hHouneU+k6pY6kzwJPTDa/LyL27DiexwFfoCSPyrgzIvbtc6xlgMwcyvkR8e1+xuiXpPWBnRNN94uIm7qOZ3YkrUmZ/98aWLXBQ2dIupT/zv2PfB5U0ruA1Tse5gHgbuBmShKkq4Grh/md2qbqO3N7yvxPo7m06tzvROCYiLiwg/CaxLIC8H8ddT9xXXgHZfP7dcCVEfGvjsYbGkmLUK79N6Wcsyzd8PF/A86k3A86PSLuaz3Ix475RmCDrscZkT83mVurkrbvkejz4MHC6o+kgyiJRHr5YkRc0aDP7Lz/4RFxbrbfLkl6B/DcRNMjI+Lsmr7eQ7kH08uhEXFZNr5Z+t8a2KxHk1sj4iP99F31//8o94p62bPXd4mk1YB3J4e8KSL2y8bXNknbUb5fM34TEd/t0dfywAeSff0qIo5Itu2MpHdTkkrWeRR4f5N5dUmHkb+2HDdfH/V5k5mZ/ZeknYFvMNzflWtdWMbGSXXvaj/+mwRy5r+dC2wfETcPPbARqa61j6cUCZnV3ZLeGxHfGXJYZmZmZmZmZmaWJOm9TL5W+9cR8f0++vwkk++rPyEiftq0z4FJWkzS/pJuU3vul/QdlYrq05ak5STtK+mvMx372G86kbSmpCMlPdDia/6IpJ+obAYfa5KeIelQSXe3ePySdK6knVQSQswRJC0k6Ybk83PtGMT7hZZf87ZcOernpo6kp0vaVdLRkq6W9GjiuHptHm4ztrM7fG2G6YRhPF+zPHeLSPqYpBtbPI4HJR2jsoF8bEl6gaQTVX6/2vA7Sa9V2fgy5Un6Vs3xPqyycXRsSDq2pdcy62FJl0n6rqTdJT191M9BE5LWlXSS2vsMSNI/JO0n6clDPpaDWzyG2Zl4rb8s6TXDPr4MSc/u+DnoyvNbfA5OGfXB9Klp0p02nqvVJf1A7V4P3iDpwyqbfod1HJsk4jpyWPHMJr4zE/G9pIVxvjzA6zYq/6+N53jcSPpc8vhb+9wrf/4ztHkKSfNI+mWD98M5GuAcWmUeJmNazVGqnHc10VWirIl4Nm8YT9+b35U/77lPJdnV0Eh6ZzK2NYYcV0jaTtJvGr5Ok5kh6TSNeB5Y0sktHU9Td0o6Q9L/aWrcC5hb0uslXdTic3CByrXRSObBJa3T4rFkXacy37Wrpt71/8Yq5wz3t/h8/FvlHkunSTgkfb3FmMdNo2Sikl6e6LPnhvIuSfp7Ir5XNOzz48nnciw2Y0iaS/lztNokPCr32eu8eYB4f1jT94OS5u2z77lU5tN6uU9SJPq5IPE8TBhJcjxJT1T+tX9ENeeCKuduv0v2d5ukJwzrWCeJdynlf2N+0Ef/bc5fD9tOXTzncyJJBySe73tGHadNfyrf+Rl1iZtsyCStpXJ+M2wnjfrYpzJJX0o8x3PMZvVBSXp74vm8RNLjRx3rMEhaVPVrHmeoJE8bRXwfTLxeklSXeG3KkvTk5HPQpo1GfdxmZmZmZmZmlifp+h7X+e/ro7/HS3qoR5/bZPtqZVGVysKvfSgVTD9E8+rvvTweeCNwlaSvSFqoxb5HStJ8krZXmaS/DjgQmBILviStXMV9EbATs8nmOoC5KZWDzlBZ6N3aZp62SFpG0jeAK4B3Agu2PMSLgSOBK9RwIdMU9llKBfipYplRBzCVSFpBZSPXH4G/Al8FdgBWYupW2zD+sylnL8o5wMeBNjdFzEupJne+yubisdpoI2lZSccA5wNbkq9QWef5wA+AP0h6eUt9joSkuSnPTS/z0LtC1JxgHkq1yTcAXwb+qrJJfE9Ji402tMlJeqak04BzKJX/2voMQMl09hHgGkmf1IgXn7Zo4rXeHTgKuEnSryW9V2OWCMOsF5UEdj8ELgFeS7vXg8sBn6R8F+43neYAzKyxg8lX6r0eeFVEPNxdOFZ5Vcf9j+PGlvmBfYc8Zs9NbKMg6XnAb4BjgXVa6jaATSjzwKdLml2FrOlsYUr19E8Dl0i6SiUZwFIjjusxJG0KXAZ8D2gzEcgLKNdGF0nasMV+x9nTKPNdX6Wc8/5O0vskLTriuCYl6RWSLgTOALaj3Ldry0KUeyyXSjpOpUq3jd4of4e6GDubMHczjUdi7nWYvArAzK6MiKsS7f6WaDPIPa+6BB7zAqv02feSlPm0Xv4WEerVICJmAHsAPdvN5DMjei98iNxrD3BoRFzWq0H1vByQ7G9x4HXJtl3Zg9xvzKPA/h3HMm7anHs3M7M+SVoA+CHl/KaJh4HfUuY7d6bMBawJrAg8k7I+YGPgzZTf7h8DN8zSx1/6DtysRZLmBz6VaPocynt6TrAn9WseAzikWkNjZmZmZmZmZmZjpNrH8ZQeTS7qo9vnAL0KWqX7HPjGtaSVgXOBgygLdboyD/AO4PKpvhBMpbrUgcCNwDG0v2GqM1Wyh48Bl1Pi7toGwG9VMrH3VR2ibZLeSNn4/1a6f91WBX4q6XBJbScZGBuS1qc8n1OJEwAkqKoKTdn0/0nKzUubJiStQtn8/hlgkY6H24JyDrCnaqr5DIOkHSkL37enuwWxqwA/k/RFSW1urBymDYAnJdpt23EcU9HqwCHAjSpV6YdWCbtOdT74YeBSymadLs0PfBi4UtIGHY81CnMBLwE+T3mtD6+ur8zGlqR3AlcCO9JtIqcFKYlA5qSkaGZWkbQL8J5k8weAV0fErR2GZP+1fVcdV4uoR1IFKWFXSSuMOohRqM7/96Nc/6/d4VAvo2yC32scrvtH5BmUZADXSvq8pKVHHZBKVcrvAj8DntXhUM8BfqFSpX26JIDLej5lE8j11es+Ttf/T5V0KvBT4HkdDxeU+aFLJB0yne+HjIHMd+y4fw83ii8iLgGuSTRdkvKZHLXNk+2OT7bLJADoK7FvNW+dmcuqSxIwmUxcmeMjIs6jJF/PeC4lifXQSFoWeHey+R3Afsm2J1DmcTPeN6okGNXv/9uSzY9JJr+YTuoSYZiZ2XDsSylykXUbZZ3MchHxoojYKyKOiogzI+KSiLgmIq6KiAur/+07EfGhiNg+Ip5K2VC8C3A0cHH7h2PWl/WAbGL7rpPJjovsepen0/38ipmZmZmZmZmZNbdWj7+JUjCvqV7zQLdFxPXZjga6USjpxZSbxpmNXW15KnC6pPdGxKFDHHcgkhahLBTYlSk6kSdpGUom45cOeei5gQ8AL5W0bUTcNuTxgf8sYvkGo6l+8DpgTUlbRcS1Ixi/M1Vm4G8y/gvKZjXyBbjjTNK6wGfpdmG4jZCkTShJbLre+D+z+SkboteW9KaIuH+IYwNQbUL4WPVvGIKy6G/16jfg7iGN25btku02lfSEiLi302impvmB91E2HH0S+GxEPDqqYCQtDvwIGHZCrqdQNoPsB+xXV9VripqPcs63k6QjgA9ExM0jjsnsP6oNOIcz/KQtywGnSvo8sPcovwPNbDgkPRf4WoOH7B4Rv+sqHnuMVSQ9OyKu6KDvrSkJYMbRvJSKrMNKYDkW82SSFqKc/798SEM+npJk8EWSdhnFdf+YmB94L/AmSR+hVPgd+jlQlZzsBLrd+D+zoGz8W0fSdhExp1U3XJDyur+xuv7//Iiv/18DHMZw5/6g3A/aE9hG0g4R8fshj2/FKH+Huhr7J5T3Vp3NgQs6iiErm4D9hGS7zhIAUBKZ96paMGF14Kg++m8tAUBlL2BLckUNDpB0fEQ82KD/QRwALJBs+4GIuD3TMCJU/a78ONF8ZWAr8u+tNr0dWDzRbgbluZrTOAGAmdmISXoysHeDh/wEeENE/LvfMSPiJuCI6p/ZuGiSzH5OSXy/YoO2KwG+nzF89wAHttTXsoxm/bCZmZmZmZmZdadXAoC/RMSdffTZa//4hU066vtGoaTNgeMoix+HbW7gy5IWjoixvcFbZch/MWXCZxfyN+3HTlXl+efA8iMMY13gPEnrD3szVLXY9ZQqhlFZDThb0gYRkalUMlV8gmYZskeu2gDsBACzUVWo+jIdVgS0lIe77Lyqwns8ZWH+KOwILC1p84i4Z1iDVr/r3wFeP6wxZ7IB8LPqmPs5eRy66vnaJtl8fmBTyrmlzd4TKDckN5X0mlFUuK0qnp7G6H635wI+Diwv6W0R8ciI4ujaPMAbgFdXi3MPnsbHalNElQzuVEpl1lEIykaNVSVt74QxZtNXlWzoOPJzaF+IiG93GJLN3quBLhIA7NRBn216o6TPDqna6MgTAFRVWE+iVPUatu0o18CbzeG/+wsBXwBeJWmniPj7sAaWtBal6vswkz9PWB04v5oD+e0Ixh+1hSmJVV8t6bXDvhdQzefsT0nKPEorAL+W9E7/1rcu8xsz7gkA+onveHIJALZgeMlfH0PSUyjfg3VuArIJMrpMALBGy+1m1WoCgIi4RdKB5DaQr0BJ7P/FbP/9kvQcylqCjIuBbzUc4jjgMnKvw/sZcgIASXMD70o2/1FE/KHLeMaUEwCYmY3eOyn3tDM+CXxsmiY0N2vyvp7RWRTjpclxOtH5CFRry1qZ66qK5jkBgJmZmZmZmdn00muz/kV99tkrqUCjPufqZ3RJawNHM5rN/zP7lKT3jDiGx5C0rKR9gauBcygZ66fy5v+VgF8x2s3/E1YGTpe02LAGrCpdnspoN/9PeApDPv4uVVX99hh1HH1YjNFtfB5bkrYCLseb/8fBMV11LOmFlMVfo/4MrAccXS0MG5bPMZrN/xNeDPxU0qjPv7JeBCzToP2wK0pPVRsCF0p69jAHlbQ88EvGI2nPG4FvVwl5prOJpA9nSVpu1MHYnEvSUsAZjG7z/8xeSfktHNfq0GY2AEnzUCqNr5B8yLnAPt1FZD28qu0OJS1KSQo2zuZmhBsCh6na/H8Ko9n8P2E94NQqljndesBF1ab8zkl6HnAmo9n8P2ExShKINUcYw6itA/yuWlQ8FNV19jcY/eb/CfMB36zut1l7pkMCgH6cC9ySaLempH43w7dhS3LPwfENNpTdQP2GlCbzuDPLJCto0m5Wmbiua9jnwcCfk20/Imnhhv334zPk1m0I2CMiGm0aqt4r+yebryvpRU36b8EOwNMT7QR8quNYxtUw74WZmdksqnnLtyebfzMiPurN/zaNNUmOOoxEquPgygZt/9hZFGZmZmbWN0lflPTXmn9njzpOMzMz60yrCQCqPV+99vs06rNxpvCq8t9JlA0pWXdRqsefQ5nY+xvwIOUm7RKUhWQrAhtTNjUt2qDvQyRdEhG/avCY1kmaD9iKsjHwlUyTm7DVZo+fA0s1fOjNlE0iF1X//U/gNspr/uSqv+dTFrJkbujP7NnA9yRt1fUNk2rB23eAlzR86MPA+ZSFkpdTjv02yqKdRSkLGFelJBV4CbBIg76fDvygqoA0ZW8YVTfIvgU8btSx9GHpUQcwTqrPyT6Uiil9JZaxVv2NUs2odZKWAI6lLL5t4l+U34TTgRuBW4H7gSUpn6e1gc1pvrF4M0r2/A82fFxjknYFmiYdehT4LXA25fznn8AjlEpuqwDrAxvR7HtwHeAQ8tVwRmm7hu23kDRvRDzUSTTTy3LAmZI2Hka1o2rDzYnA0xo+9GpKEqXfU84Hb6V8H8xLqWS5EvBcyjXA2jRb4P06yqLtOWHT30som312jogzRh2MzVmqRe6/AJ7Zx8PvpvwOXg38gzIH8ETK9eASwLMoCd6aeilwlKStI2JOqRxiNqf4DGVeMOMGYDufO47M6pJWjYg2F3DuwOiTzWbsKOmgiLik43FGtvGymrM7mXLN2o9HKFWJ76LMkT+Rsnmvn/ny9YAfDmMeeApYinIduGWX90Kq5G8/pVyz9eMh4O/APdX/P/H69zMHvDAl+dPaEZGu7jzNLAacVn0GzhzCeJ8H3tznYx+lLGK/GLgduIPyXTZxD3AFyhxA06SiARwo6eGIOKTP2Ky5cU8A0Di+iJgh6WTgrYm+Xwl8s+kYLdk82S5doT0iHpJ0M9ArscGSkh4XEQ9n+61kN/Y/RdIiEXFnw/4zyRga/UZUz8delPnOOksAewMfbjJGE5JeAWySbH7EAOcBP6bcs868Zu9juMm+s8nifxwRl3cayfi6f9QBmJnN4dYjt27uFqZmERSzJs6hrPvJJLA/suNYxsWRlHWwdS4Crug4FjMzMzPrz5LU72nyHgkzM7NpqCpctHyPJhf20e3q9F4L2ajPRgkAJM0FfJ985ZcbKNnkj4iIeydpc/1M//2VqpLvVsBHgEx1l7kpm6GfGxF3JONqTVV99XXAWyiLAKaN6vU+nGYb9E+mVEg+q8dmjIkb8z8A9qgqCu1HflELwBbAu4EvNnhMP94LvLpB+38CXwC+EhH/yjygyuqxC7AX+Y01rwTeAHy3QWzjZl96Z0gZZ/1WQpl2JD0OOIJuFgL9m7Jx7CHKovFhOIuyQW1crUxZKNvLFyPikY7G/yy5m3gTrqecB3x3koWDE5mtj6L8HryQkkhi4wZj7CPpJxFxfoPHNCLpOZQF0FkPAocCX4iI63u0+7SkJSmLAPYA5k/2v7uk8yJi3G+WbtOw/SLABsBp7YfSidson4mmFgYWpywSWY1yntXPouolgZMlPT8ibuvj8U18k2ZVus4FPhwRZ9W0u4Sy8PTDklYB9qScU2c3huwl6TcR0UnSkxovp2xmmMxc/Pe1Xh54BrAG5Tu8n41PT6JsfHljRBzRx+O7cATjVaHgxiGPdydlo+o4afV6uLoe/CG9MxA+5mHAccBXKdeEPc9JqqqKr6H8DjY5x9iCcg3Z2QL8OdT5lE16g5if3LXBtZRFYoP6fQt92BiQtDP5xbEPAK+KiFs7DMnqbQt8usX+dmqxry4F8Alg6yGMMyofpVybNXElZZ7yNOCKWecAqvnP51DOo19PSYqXtQVlE9rBDWNq2+XAmwZ4/MKUJIjLUJJ8bUjzTfYLASdKeklEtL5YuEr+cCTlerOJ86rHnQlcPes5YHXPZ2VKUokdKO+v7AKZpSjJn9brcL4r441A0wR881PuGU0kv3oJZT68aWLuJwDHVc/BZQ0fmybpzTRPfvkI5Z7Qtynn/3fXjDEfsCmwKyWxZxOfkXRdRBzX8HETjqd5lfCsTSkbgnq5inJ/tQs3NGzfyQb7KeJ46hMAQLlfOfQEAJLmJ/cbfCfQdBP43+i9mX4uSsK+pu+n7JxhUOZCf92w/9YTAABExEmSTiX3XfQ+SV+NiNbnnqq5lwOSze8B/q/fsSJCkj5Fmeups62klSLiL/2OlyVpI+CFmaaU+02D+CDj9f32Gurv+QH8iTIXa2Zmo5OdBzq0x/pIs2mhSqi1O+X6qtf8zhnMOecwXwFeC6zVo80DwG5OcmpmZmZmZmZmNnbWYvJ7iKIUwuinz8n8i+7Wr4Ckdyjva5IWGGCsuSXtLenh5HjfavNYa2JbRNLbJf2+wfPRj+cM65gmOc49G8R6jaRslbbJxttQ0o0Nxvy3pM4qsUt6uqR7G8TzLQ3+nt9f0ozkeLdKGnRzxkhIWkXS/Q2e21ldO+L4X5+I8WKV78Fh//vEEJ+HeSUdP8DrKJX3wS8kHazyvD5HpdKszYakM2uez7u6ev4kvVj57yepfCfO1+dY21bHknWxykK51kmaS9IFDWL5naTG1YwlrSTptw3GuUPS4l0ccxskrdXgWGZ22KhjB5B0bCLWP7c01sKSNpP0HUn/6uM5O01SZ4sW1ex88B+SmiZ+mHW8Z6nZZ+5fklpLzKPye5TRdEPMRP+LqHzH/VDSAw2Oc8Kjkt7W1vFOEuOzk7Fs22UcoyTplMTxT/sKpCrX402crZLMp5+xHi/p/ZJubzDeo5LqNtlkx98kMd7IEu+o/hxQkl4yqvhmJmnp5Os3pyz66oukzyWfxxVaHDNz/iN1cN6tch3YZP6l38rEdXHslBx/xS7GHxWVc7h+tJaAQ9IyKt/r/bhpgHGz5z2zs05bxz9JbHsk41ij5XHXk/RIg+fhJpX5nPQ1iaSoHnNzg3EekvSiNo91lphOTsRwXstjziNpfUknqNl8iyRdK2mRNuOpYtq/YRwXSnppH+M8S9JPG471qbaPt4plneT4a7c03hNUfm9+0/D4pfK6dzXvt6qaz9f/QANcj0taW9IZDce8U9LyLR56KyQdmIg9U2l8KFTmoep0lmw1Ed9tifi26LPv+VTuLda5R33ObQ9C0laJ2CTpe330fWSi30bnN5IWTcY74R19xP2Hmj4fUkk005jKnHx2fu7r/YyRiOFNDZ6/vjf/zzTeXJIuT473pTaOMRFTZh5Okn48jHiGRfl75TNUkiRYSyQdkHje7xl1nDb9SXpi8vvP1eTHgHL3Lu/XGN+/n9NJ+lLiNbx51HFOJZI2l3T1bJ7HB6vnO1sAY1pQuT46UrOf575QLc0t9RnbBxPvf8nr9VJU1s9l+DzezMxsClFZz1lnpPtXzMzMrBuS9unx+39Nn31+tUefZ7R9DDMPvIikfyZObGZI2qvFcbdQ7ub7o5J6ZUcYNI65JK2rssG2yaLkQYwsAYDKov3s5stfqqUFh5KWlXRRg8TN56IAACAASURBVOfo0DbGnSSW7OL3VjdiSXqV8gtt921r3GFR+Sz9qsFrPDujTgDwgUSM7xtljF1TWaydWTA2O/epfL520hRNYjEKkl6QeG77qUaeHb/Jwuw2FqKtLun6BmO+uo3jnE0cb20QwzEaYGGoyubHoxuMN5QFeP2Q9KkGxzGzW9RRMoeG8Q8tAcAs486vcvO1SQIMSXpD27FU8Syv8p2dcalaWoSvshj7ew2OP1O1Kjt2pwkAZhlrCUkfUdnA0MQMSa9p43gnicsJAJwAYGIR8oMN3pMfVgvJSCStIOmy5LiS9Ge1sIBITgDQGjkBQCs0ByUAkLSYpL8mx5akL7Q5/iyxOAFAc09vKYamSWdmNqoEAKe3cew9Yht6AgBJC6lZctZvS1pwwPGazC1drY42Y2oECQBmGX81Sac3eC4k6fCWY2iS/OEhSbtrwN8ESTtIujs55qPqYNGshpwAYJaxXyjpvOT4Expv+k3EESr3eLJulbRJi2N/WM2SwJytDhMh9kNTLwHA5ol4LxhhfJnEcH0lAKj6z86/vrzN40rG9rVkbI0TcEr6dKLfVzXsc71kvBO+0kfcd9T02deCi5n6/3/J2B+R9OxBxprN2PMrfw/kL2rpPEj56557JS3Rxpg9YllVud+AGRpx4YQ2qfz+/SL5Onx71PFON3ICABsTcgKAKUOlMEbmfsmvRh2rTU5OANAJlfOa1SRtI2lHleJPc/Q6MEmLS3p59XxsJWmlMYjJCQBaJCcAMDMzm5bkBABmZmZzrJrzgB/12WevpLIHNe2vyQKtfYDMTd6DI6K1DYgRcTLw7kTTuYAD2xp3Ns4CzgHeDvRd5X0K+QSQmZA9H9g8Iu5sY9CIuAnYCPhL8iFvlrRUG2PPTGURQXZT0z4R8Y22xo6IY4GPJpu/V31WthihdwCNK0ONmaUTbfpegD5FfAzYqeFj7gW+CDw9Il4VEUdFxN3thzZt1SX8eBToJCmKpGcBr0g2/2ZEDPx7HBGXA1sD9ycfss+gY85K0uOAjySbnwzsFBEP9jteRDwAvBY4PvmQ3arXZhxt1+fjlgJGlvl81CLi/og4AFgFOLfBQz8jqYvz00OAzMbai4F1I+K6NgatPkdvArIbG3ZUS1XAhykibouITwIrAl8BlH0o8G2NsEqAzREOAeZNtHsQ2D4i9o+I7Ht4UhFxLfBi4OfJh6wMvGvQcc1sNKr5jCOB7Cbyc4G9u4vI+tBWQqCm8wvj4GUdL+AbxebWfYFlk20PAt4SEX1vjImIuyjXwJ9IPmQlcvcJppyI+AOwKfBxyvxOxuskbdrG+Cob+b8AZOaZ7wG2johDI2LGIONGxDHAS4AbE83nAg6VNM8gY46TiLgAWJfyumefy9dLantufWtgg2TbG4H1I6KVJCgRoYjYH9gGeDj5sPWAndsY33oaZZKFzNiDxJede918gDEaU0lssVmi6f1AP5/BTCLDZRr2uXrD9o0SF6kk/Fu0ptmgCRo/Cfw90W5u4FMDjjWr9wFPSbbdY5B7D7M4Brgq0W4BYNeWxpzMPuTWq5wQEZd2HMswvYmyHqLO7dTfGzQzs+49jdz9kib3ds2mheq6/g8RcUJEHB0Rv5zT14FFxO0RcVr1fJwYEdk1sGZmZmZmZmZmNhrP6/G3i5t2Vq1t6nUvvXGfqQQAKpV8dks0/T3wgaZB1Kk2Vx+daPoySc9te/zK4i31cytwWkt9dULSk4HXJ5r+C9guIu5rc/wqmcCryW36fDywS5vjV95DbgHRkRFxcAfjf5rczaGlgY07GL8Tkpal/QUyo5BZBDVtEwCoVHjKJqmAsoD188DTIuK9EXFLN5FNXyoVJuuq+vy42jTXhdcl211Bi5vwIuJiYPdk8xeo5Qo8lI0IT020ux7YOSKyi/QnFRGPUJ7vyxPN5wH+b9Ax21a9DqsO0MW0rSqeVX1Pvgw4LvmQJ1EWDbZG0svIvRa3UDZ/tHojv9pIsiv5C5wmv0tjpVoEsDvwcvLnD/MDJ3SRCMtM0ivJbXQQ8NYqgVlrqo2E2wN/TD7k/+SKFGZT1UGUDa8ZN1MSjjzUYTzWXKMqsbMjaVVgzRZiGYVPq7sq1EPdeCnpKcCeyeYfi4j/ayn5jyLi48Bnkg/5oKS25unHSkTMiIhPUM6Dshuh/1+1eX9Qrwcy91XuBzaKiJ+2MCYAEXEZZfP5HYnmqwJvbGvscTDT6/5m8kkA2k6Enb2ndw/l9b+y5fGJiJPIzwFC+f5tpRL2HKrrDfbj7hTggUS7LboOZBZrAssl2v08Iu7to//MRvlsIqAJTRMArNbw3CkTz0AJAKo5zQ8mm28tad1Bxpsg6UnkkxqfXhVMaEV1H2P/ZPP3SHp8W2PPrJrXzCQCE3BAFzGMgqQlKNfCGXtExD+7jMfMzFKelmz3+06jMDMzMzMzMzMzM7NWSVqIUsxxMhf20e2zKfudW+szuzjsTdRn2BewW7VxrQu7UxYY1XlfR+MP4lHgDGAHyuKNL482nFq7ApnFUx+OiExVhMaqLP6fSzZ/TZtjVwkvdkg0vZ+Osu5XC2izC/kGXmw9RF8Bem3OeRg4azihDGSOTQAgaRHgm+QXAN4AvCwi9oyI27uLbNrbl/oqbNnvzH5kq7nv12IVmgnfJb8BuO3vw3ck2723zc3P1QLOXYDM5qYdx3ADcPb90tXjp4WIeIBS0S5b2Sj7fs36dKKNgNdExA0tjw1A9X3yWiCTbGpjSet0EcewRMQZwAuBi5IPeTLw9e4isjlRVY37kGTzAyLiB13EUf2ubgP8O9F8MVpOgmJm3ZO0E/D+ZPMHgG0i4uYOQ7L+rFNtHB/EVK7i/EJylXqngv0pSabqnECplNu2D1Dmz+ssCnyog/HHRkQcTz654hoMeA1dber7RLL57hHxu0HGm52I+CuwI+U+Sp39JD2h7RhGLSK+R/69/eIWN6A+j/JdlrFPRFzdxrizUyUCPzTZ/Cm0fF/IHmOUCQA6TVBQXW/+MtH06VWiomHJJhw4vs/+xyEBwMLkEu5O6DwBQOVw4NfJtp9tKQHUx4CFEu0eAt7dwniz+iHwp0S7JSnzs114L70Xvkw4MSKm04bKzwNLJNqdBRzRbShmZpa0ZLLdbZ1GYWZmZmZmZmZmZmZtex6999dn93XMbK0ef7sL+GvTDrMJADLV4E+KiH6yGqRUG0cPSzR9VbWBexxcRanMu1xEbBIRP4qIbPWeUcosnPoXZVNmlw4hl/RhrZYrP20EZN5Dh0XEjS2OO6tTgD8n2q3XYQytkfRaYKuaZl+jjy+yEahLACBKdcLp6CDyC7R+CawREZnFdDaJanP362qa/Toizu9o/CcDqySa/hn4cdvjVwlRspW9N2hrXEkrk1sAfWpEnNDWuBOqCnifTzSdF3hb2+MPaNBEDCtKarp4dFqqNsDvQq4q2bMlrdDGuJLWA56faHpERJzdxpiTqSoLZis8vb3LWIahSq61IZDdVLOVJG96sDZtRamsWucK8hvF+lJtLspWRNu9wwrMZtYySWsA32jwkHdFxAVdxWMDCUrClr5U3911CQD+0m//Q/Lpliqwz2pov2tVEodMIoabgTdU1+mtqirRvha4M9H87VWCymkrIr4O/CTZfNcBh9uV3FzfNyLiOwOONakqIVomEd3SwG5dxTFiBwG/SLZtay5o22S73wJfbWnMXj5MftNMNlGGPVbmN6aL37asThMAVLKb6DcfcJwmMmM9CpzaZ/+ZjfKZ5NfAf87jntVHHE3mfYeSAKA6t3kvMCPRfG0GOP8FkLQK+XnMz0dEZqN+I9W516eSzfdu+3y3SuaTfQ6ycY49SRuSO+9+kFJ4o/XzbjMz60smYSKUdXRmZmZmZmZmZmZmNnU8r8ffboiIf7bc58URkbkv/T9qb9ZKWpHcBqAvNh28D4dQbnj2sgCw5RBimcxdwPeBTYBnRcRBEXHLCONppFqEndnw8fWIyFRj7VuV9OHoTFOglYo3lY2S7Y5qcczHqG7qZypfPaPlBAitk7QE9RtZ76FUGxtr1aKmumrbt1eVm6eVqiLUW5LNzwa2iojMwm3rbQ/qq6B8rsPxs1XATujnRCTpp8DtiXZrt7j579XJdge3NN7sHERu88PYVD2W9HTgOTXNfpboKrsAfdqLiD+QT7r0spaGfV+izb3APi2NV+fL5D4LO0h6YtfBdC0i7qIs+s4u7v3cdKyAaSOzZ7Ldu4aU3O7zQCbp2krACzqOxcxaIGkx4Dgg+9v15Yj4VochWb267+FBEoC9EFixx99vB84ZoP9hWJ389WMTw0xssxswT6LdB6tz1U5ExK3k5gafwBhdB3doXyBzvrVxlcShsWoO5Z2JpncBH+lnjIYOAK5PtHtHR4k3Rqq6H7AHuQ2o20mat4Vhs/MInxvGJsRqLjmbaOz51TyUdWOUCdaGMfZPKJvp6wwlAYCkJcndiz87IvqqLBsR91KfYCOz4X7CU4F+EvI0SQCQSUhwXR8xPEZEXARkE90cKOlxAwx3IJB5/D/IJ0btx5Hk5h+fAbyy5bHfBmTubZ8UEdlEqWNN0vyURHiZ77j9ukj8YGZmfcsmAPh3p1GYmZmZmZmZmZmZWdt6bda/cFz6zCyS2i7R5gZKpedOVRvpz0o0HbTybFMzgHMp1XKWiYjXR8QZUzQr+wbJdsd0GcRMTku2e3aLY66ZaHMz/X+Qmzg30SYoG17G2ReBJWrafDgi/jGMYAa0OPWbsW8aRiAjcAgwd6LdWcArIuKebsOZ/qqNrHVVza4lXxWuHysn253eVQBVNZrM78ECNFuk2MvLE22uI3de0peIuAPIbHZ6uqQmCye7lDkHOwC4uqaNEwD8r+zi04HPh6rF85lkWodHxM2DjpcREf+mJAGo8wTgFR2HMxRVtrjtgEzCrScD7+k2IpsTVMmeXppoemJEnNVxOABExP3kEx1t3WUsZja4arPmD+i94Xtm5wHv7y4iS/oFcH+Pv79U0tJ99r1Tzd9/zGg3IGZ9UlJmA/3YqTYQZ5I9XgIc3nE4AF8Crkm0m5YbwGdWbfrKzAkEJRlxPzYGVkm0238Y87bVuV8m0cCK9H/MY61KAnhSoumClCrUfas+Q6slmj5E/xXH+/FN8htntugykGks89s67gkABoqvSjrzm0TTl0rqZ5N7U1uQu2d//IDj/K3m703m1vudj27yuEw8dcfUxAfJJSFdBXhzPwNIWgfYJtl8n2petBPVfZdPJ5u3dl0maW7g3cnmn2xr3DHwEXLXwlcAn+04FjMzayY7/5BJMGVmZmZmZmZmZmZm42OtHn+7qGln1b3QNdrsE3KT1Bsn2pzaYdXfWZ2caLPhkBYA3kipzrtyRKwbEV+vKihMZS9JtLkHuKzrQCpnAplECtnF4xnPSLQ5f0gJHi5Ntluh0ygGIGkz6hd0n09uY984yFQcmXYJACS9DFg/0fQfwM4R8UDHIc0pdqO+is7nqoVaXVk+2a7rKizZqo8Dfx9WlVhelGh6+BDOfw4j9zuY2bA9DHUJAG6nLK6tO597rqu4/Y/fk1t8mjmHqbMj9dcIoiT3GaZvkfssTJvF/xHxR+B9yeb7SFq0y3hsjvD2ZLvshvy2HElu4Vzb1ejMrH0Hkv+s3gxsHxEPdRiP5TxE74RscwFbNe20mrvdvqbZ0UAbFa67tgqwS8t9Dmvj5bbAUol2hwxj/r/6zH8p0XRlYKOOwxkHX0m2y9zDmZ13Jtrc2SCONhxBbjNnXcLMqex7yXaZudpelqMkEqhz1TATvVbzyscmm2cSmFl/pkICnkGdkGgzD8NJOLJ5oo0YPBFw3ffrgpIWSvbVbwKAXosdZlWXAGAG5V59K6rEEPslm+9XJXBu6rPkPl+/Ab7fR/9N/QD4c6LdhpJe2NKY2wOZuf9TIqLr+05DIWk1YK9E0xnAbr4ONjMzMzMzMzMzMzMzM+uWpAXpXTiln836z6QUtWyzT3pWJpL0OHIbwn/Zz+B9Opn6RYCLUSqXdLFJ/QFKBZbvUxIfTLcMvpnKsedHxCOdRwJExG2S7gTqNjTVVZdPkRTAkxJNb2ljvITbk+0yMQ9dtVDoqzXNHgLeMoU+S5mqdtMuAQDwoUSbR4AdhlURerqrfoPrqqDcSb4yeL8yi9ge7LISTSX7vsouUOxldWC+RLtftDBWTxHxV0kXUF/VbXPggK7j6UXSskDdIsCTIuIRSScBe9a03QY4pJXgpriImCHpKmCdmqaLtzDcdok2Z0XEVS2MlRYR10m6FHhuTdPpVgXy65TNZOvWtFsEeCvwmc4jsmmpyji4baLpxRFxVsfh/I+IuEXSL4CX1zRdXdICEXHfMOIys2YkbUduwwPAg8A2EfH3DkOyvPkoGzG37tHmVcDXGva7Mb2TLN4C/ArYvWG/o/JxSUdFxIMt9TesjZd1SdwAbgN+1HUgM/kusD+9b4ZAOXc5o/NoRigiLpd0NSXhQS9NNlMCUCUQyyRQ+94wkx5HxKOSvkl9xd/NJS0SEZlkeVPN6ZR51p7374BVBxwnW9X8+gHH6cdR5Kpr97sBeU6X+Y0ZZQKAYcV3LLkq25vT4e+gpHnJzWf9PiJuGHC46xJtlgXuSrRbrcffZjB5gtFVJM2XPGequx93S4vnXhO+BLyJ+u+XJYE9aFChXtKrya27mAHsMYxE9NXv7oHAtxPN9wB2bmHYuvsCE7LJGMZalfjsq8DjEs2/ERG/7jikVkhaGFiJklBoKWB+4PHAfZR7lxP//gFcM6y1JaNQ3c9dnnLOvhzleZgfuLf693dKQqVMkqspo1pX8xTKcT+Zcv22MOX7/y7Ke+E64LrpdOySnkBZvLcy5R76opTv7X9X//4CXB0Rmd/SKU3SYpRrkpUor/9ClLU/91Kei79Rnovsmicbc1Xyo2dSXvMFKe//Rymf+TuBqymv+dASyI2D6vtwRcp6y8Uo19rzUoor3UX5LPw1IqbjOjIzm4aq853VKQVIFqXcI/oXZT3s5RHReK5Q0nyUeYRnVX3OQ7nvcBtwxVQ8X5Q0D+VcaBX++/0/N/89L7we+FNE3DayIFtUrQl8BuW+3gL873nwPcANlOO9dWRBDoGkBSjXAitTXvcFKdf7d1Geh+uBP0bEP0cWZIuqIlqrUs51FqNcA81Ded3vA64B/jzdX/d+SVoceA5l3mTi+hHKe+VB4Nbq33URMaw9KY1V33crAU+lfAcsyH/v4d4D3E+Z/7kB+IvXbJmZmdkU81x6F87sZ7P+83r87R5yydkfo24B0erkKoBc3s/g/ag2/9xG/YbvF9FuAoDfAV8Ajh7CJseRqCalMxn3+3qzDeBW6hMA9FNlYXbmp1yc1hl0kU3Wv5Lt6hbEjsqBlBu/vRwQEVcMI5iW9FqcPmFa3biR9Fxgg0TTwyLiVx2HMyd5PfWfn68N4QbqAok2w7hxn50ozJy31HlOos2j9Jl9qQ/HU58AYC1J8464Msx21C++nahS9SvK+6bXhvVtcQKAmWVuCg10PiBpeWCtRNMfDzLOAI6nPgHA0pKWj4jrhhBP5yJCkvaiVP2q+3y9XdJnh7E42KaldSmL1+tkq5G27SfUJwCYB1gTOLf7cMysCUmrA4eT36j1roi4oMOQrJl5KclQH6r+e3Y2lLREw4VMO9X8/ehqQ9JkYw7Tn+md7RfgaZSETId2H047qud200TTw6uK3EMREXdKOpYyL9LLlpLeNQec/55DfQKAlSTNFREzGvT7SnIb0Q5r0Gdbvgl8nLJgcjKPo7x/jx5GQMMUEfdIuoL6+am676U62Xsqo1isdR5l7q3XewDKe3+e6bypcITGPQHA4IOU+82XUZ9EZbM+vmOb2IDc5/GEFsbKLNJfBrgy0a7X83YOsP4kf3scZeHwpYkxlqv5e+sbBKrktXuSSzK0j6SvR8Q/6hpWG4SzCXy/PeTrocOBD1B/vrGDpA9HxDX9DiRpQ+qTCAP8dBpdE+5KLvHDLZTXYSxVyaNeQUmKsjZl8X/2+/pBSX8Afg2cCZweEfd3EuiQSFoKeC1lvnJdEvdmqqIXZwCnAj+OiLs7DbIDktainIO/jPI+yNxDRtLtwG+B04DjIuLGzoLsgKQ1gB2AzSj3qOre+zOqc4wzgSMiYlj3kztVzSFsTrmW3Jjc2jIk/YNSVOiXlNd/JJvgqkQ8K/b58Bcn271TUtvrCc+JiPNa7jNN0jqUNQCvpHcCqAkzJF1EKaRwZERMum6z+m15e01/Iz3+yUhaglLMYDvK73xtkQpJN1PWSJwInDiKRAnVpt53DXnYH47zxt7qtXzLEIf8Z0Rkkm9NS5J2omwezLg5Ig7vMp7pStKOlARVk3nMc1utG9+C8r28CT2K5kj6I2XNwGF157SSXkopfrQZPc6Zq4IoJwKHZK6xm5C0Cb03XzwUEZ9L9rU8JanyNsDzKcm/6h5zPeU86BRK0Zyh3WsZhKQVgK0o5/7rkSzIVO3tOJtyLnDiqBPgSNqc+nOYz/VabylpNUpCxI0pa+rq5qyRdBPwU0rBy1Om0vy1pOdRznFeQVl/02sz1MRjrgXOoqwn/PlkxQAlrQi8uqa7X0TE75vE3K/k++PnEXFJsr8FKefN21DmfDN7DSYeeztwMfBzyvnTyK6bqwIy61Ou/zek7CWr/b6rPFolNv8NZQ7g5xGR3QfTCknLAK/r8+HPTLRZWNK+ffY/qYg4qM3+qu/xHRJNvz+MwhyS9qC+KN/FEXFan/2vQfn81TkxIjL3PzojaVPq10ADfLlXkv7q/G0ven9Pp7/DepH0Vma/1v+UiPhDC/2/k973yc6LiHNq+liEMhefcVtEfCsbXxtmKgqaWZ8hyv6g2jkmSe8mN0d7dUQcl2jXOUnvIHdueW1EHNNH/2+hpeLSQ3RMRFw76iDmYL32zfy9z+LIva5BL+mkeLak16veQ8NeiCnp7ERcXxxmTE1I2jIRvyRlNiC2Gdciybg+NeS4fpuI6fRhxjQskuaS9Gji+D866lhnJelFidivVMnwOfPjvpk43pH9wEn6UCK+t44qvi5I+kbimP+lcmPEWiApJF1R85w/JKkuQUAbsRyeeP07n3BS+U7J2KqFsT6TGKfNJEN18bwgeey9ThaHEecva+K7T+Wm8kT7H9S0f1TSk0d0LMcmnu+hJkSSdFwipoEmpyS9OzHGoyoTpUMnaf1EfFK5odnvGAcnx8hslG6NpJ8m46rbIJ0Z69nJsTLV4qckSackjn9sF6v0Q9IXE8c8Q0M495gkvjWS78s39dn/Jom+j2z7uBrEd2Yivsxi8s5JWjr5Wh0x6ljHmaTPJZ/HFVocM3P+I5XqhU36XVTS1cm+JenLbR1TU5J2SsbY72LhsSTpHzXHe1zVru58JP0dLOnxKvMIvbyoavuzmnZ9Lx5S/rznC8rNR/9dpfrHwCTtm4ytceX3mcbYNDnG0H9jJG2TjG3NlsY7OTHWSBacS9o7+Vw0un6W9MNEn5nNmZ1Q7jP3/RbGWSf5/NYlZmyVpB8nYhooSbGk5yeP/WdtHVfD+C5PxvekUcQ3S6wHJuI8cdRxTlDuO3ZkSZsl3ZuIb7uWxvp4YiypbHzqhMp5RkZm8WHdWJnXvi4BD5LmlfRgjz72lnRXj7/vkhgjJD1QE+tRgz4nPcbPzMVK0peS/b0n2d+/NYI5cUlvScY3UMJe5c65pDGZ4xiUpCer/rpnQt9z2l2StJGko1X/eWzibknfl/SCER3TAYkYZ7spU9Iqko5S7+/AjDslHaIR3QNrQtICknaTdPGAxzxhhqRfSNpOZVPB2JL0CuXmZev8XtKWs+n/icnH7zGK458pzqeqzFX+s4Xn4kFJx2g08wzZ36Bx85ERPFchaXtJF7QQ/28lbTbJOM8b5vFL+lJivJ4LeiWtIOkwDf67eKekz6sklBkalXOTYdtomMfYlKTVhvx8DG2d0SzH+cFkfAt3GEN2jlOSbpX07K5iGZSkFyePYyTvf0mn1cR12SztV5V0XoPXZ8LfVTawzS6GZSSd1Eefd0v6qFo8T1T99/+jKtWte/XxQknHK7eOu5fbVOYR64rhjYTKOcC2Ku+hQY9Vkh6RdKKkzIbMro7pu4k4l53ksZupv8/GrK6XtI9aun/YBZXXfjtJ57ZwvDdK2kPSYzaMS9o58fihXf9I+l4b8UhaSmWe+c6+n7X/NeyETRPHsYLKXMXNLR2HVM6bj1UL6xkbHEf2vt9Y6eB5eHly6KHc/1SZ967zlQH6X1plT0Wd77R5XH3EGZL+kogzlRxX0h9r+vl/LcS8YI/n9jMt9D+fpIdrjuO1yb4OTTy3E3YeNPYmJH26QWyfb9Bv9pjvUofXew3ifWaD56EuaeRkY9TtvxpHr2j7ubY89T4nPKnPPs/p0ecX+o21btHusxJ9/GkE1WYzC0/GdhJojGWrxt7RaRSPlal8cUvnUYzGEiQy6AFDzZBWR2VT/7foHfsM4K0R8eBwomrN0ok2I81c2SZJ8wPbJ5oeMKps7dPUNtT/Bh8TEQMt9E3KfOc/SSWbXJeym23beB/WVRYC+FML42RdTK7a2vO7DmQyKglA1q1pdsYsGQnrTornomQTtmKRRJtBM2FnKlhcMYysn5O4mJLdsM7AC6LH0MHJdnWVdM0mk7nZ8pshnXvMzh+ATOWcVNUhMxsOlWQBRwArJR9yHvC+7iKyPk0kfq3LBv2qBn1uTu/z2xso1QGhPhP8MAj4cKLd0sDuLY05jOrHmUVXt/Lf12KYTiN3HTyyhWNDlE26uGC2Q5UM87NdnDmLn2T77EDmRtpmqlmcOYX9M9Em/ZpPIluZclTn2GcA1yT+Dfo8zIkyvzHD+B0ah7GPT7bbvMMYZrshahZXt1SVJpPMcLaLnmexKv89R5ydy4Fe8a6eGGMJ6s8Du0zOuAe5c5FdJa3cq4GkJwIfSo77sYgYxT3vw4FM8vW3utRz+gAAIABJREFUqlTSaUzSquTO3X4eEef2M8YY+hK5ef2fRcTRXQfThMrG//MoVRt3oN3rsgWBXYALJJ0hKVPxaqQkzS/pc5R1Sq+h93dgxsLAnsCfJL1fY7gRXtLcKkUP/gwcRq4yWUYAGwHHApdJ2qalflsjaSVJp1Aqdm7YQpdrASeqJBOYMvPXKptYvg5cTfldbKMYxLyUtSe/VtkUmFmTaEOkUqjoV8AxQBuJWtYGTlFJ/DFrMtspU2BEJZnp/pQ1Irsx+O/iwsB7gT9LetcQ1tqYjZSkvYHs5qM7gVdExMgSE84B/rMWW6XIzoXAi/roZ2nKd/z/rFFRSaJ4KbBFH30uCHwC+JFms3m4I3Mx+4q2E4lTjgLOp6zlbJQkfTYWB/YF/qI+Cxt0pdp0dCHlXuAmDH6sAHMDWwKnqmykX7+FPrvwP+ck1fXAWcAp9PfZmNVTgIOAP6qlpKZtUkm0fTblGi2zbrDOssDnKNe7s84DzfazNuYmrVCskjDvQOB64GOUc7w2/LWlflJUkr59n3L9vyfQZrLC+YDtgJ9LulBDTARgc5aqOnMmEff21Xz9qLwEyBQc+Wqyv/Nr/t5GMeJ1mbxq/QYt9P9MoO5+fyohAmW92YXJtl+RtHyy7UAkrQfsnWz+O2CfBt0fDGQqiT8RqE0APgS7JdvdQVlvaJYiaXlJL+vnH9CrEMC9ffbZ6/t3RrKfx1yL1H1Z9rxhXRn2ieai5BITrNJ1LNPQ3cCuiXbndB3ILDIZD6frxuNstt/MgsBh+jj1m+++NEUXcGSqHk+bBACUydi6iYl7ga8PIZY5SeZE/4udR1Fkvl/mpUx2ZRcO9yObAGDQDdCQ+5zf2cI4KRHxiEpl97Vqmq42jHgmsS3155Wzbhz4GfAQvRdKbYu/XyY8I9GmZ1WChEw1s18POEbfIuIuSddQPwmWea6mlIg4Q9JfqN9AubmkuSMiM6ljBvznGjtz/XxG17FMJiJmVDeCJr25VplO5+Fm08GnyG/OvRnYfgRJRq3exILW44GvMPl5/yaSFo2ITJLKuqRFR0XEROKnQTdWtCIizpH0C2Djmqb7SvpaRNw16JADPj7jhYk2Z4zi3DIi7pN0LmWhWS+ZY5jq7k62a7IJ+nnkNqOd3KDPtp0K1FUNWIySCPrS7sMZusym00E3vt9EWRBQt+FsJUlLV4tnhiYi9qQsNrPRGPcNKK3EFxGXVnNNdZvxNgdar76qUtEwkyyrLhFTVmbDfGZuvG4D/+WURH6T/U5nEgBkEhF0lgAgIq6XdDD1r/vjgP2BXtXbP0ju/saVwKG5CNsVEQ9L+jT1c/FPpKwlOKiPYfYmt4Fg/z76HjvVIvdXJ5reR3tJxAYmaUlK4oIdhjTkxsCFKtWiPjqOcwJV8opjya1Ramoh4LPAlpJ2HmHy5f9RbVI/nLIouUvPAo6X9DPgbRGRTX7WGZWKYoeRK1LS1IbApZLeHBE/6qD/VlQbkd8OHEjuurFfW1Dmkj4KHOz7WqMn6d2U6/AuknFuBFwi6W0RcUz1v02JDWCSVgd+TDfrUBei/O5uJOm1EXF/B2OYjVTDzf//Bl4eERd1GJJVc4qStqSc5w6SYHVu4DuS/hQRF6lUET6DfCG6yWwLnCBp8yGdIyzBLOsNJW1PuUbu4nxoMeDbkjYC3jLK6yCVJH8HUc7/uvQi4CxJPwJ2i4hhFyHs5T/nJJLeAHyZbpLOPg04VtI3gfeM+ne/Ou/fE/g03dyLfSol+cNXgD0i4mGmyPnfLGZ7bShpA0qRxC6SvP2lgz4fQ6WYw96U5AXzD2HI51ESARwH7OqCg9aBw6gvWvEESmLCb3cfzmy9IdHm30A2WewFwBt7/H2NZD+99Ergs6akRSJikP0UdfeL7iD5vRgRD0p6FXAR5Xyrl4WBH0hav8vzzWpd7vepvx8PZV/Kjk3ODSPiGkknUs6f67xb0qERMSPbf5tUitLukmx+2CwFJ83q7ExZp9q2Hel9D7gfe1T/6lzFLHty626yZm7yd7nZ739UmcZ+T+8fkglPrk5OLSki7oqIryf+tVFlIkXSYuSyiXVZ5WGU6jZ7Tri40ygakLQG8P6aZn8jVzltHC2daDOdNh5tmWjzg4gY2m/BdFdlO63LHnp2RGQzmg0qmw2t60X3mYyqd5KrUlMnM4k7tAQAlcxv71M7j2JydRlqZ1Ay4/5H9b3xq5rHbaw+KwpNJypVpDLn5X8YYIylgOUTTX/T7xgt2YGyCajXv8+OLLpuHVPfhCcxZ2yCsnatTW7zxNldB9JLRFwQEWfU/BvataqZ9SZpW0oVi4yHKZv/x2Khuz3GvADVTfheyaDmJVHBVtJCiXYz39AchwQAE8kIPjDTf09mcabAhlWVqumZCo6jTN6ZufZ4fudRjF52AebDDfrMVPG7j3JzfFSuBDIJRabreyCz4WKgm94RcR+5BRMBvG6QsWzsZK7/RpkAYNhjn5Bo81xJy3UwdrYa3vFtDFYtrq5LUpTZeN9rQdadEXETpUr2ZDKLzjJzodcl2gzi0+TuP28/uyoMAJKWBd6THG/PajH0qHyX3P2V90hqdI5ezT3vnGh6WkSMLAFtWyQtQD6Zw8ci4pou48mqKhFdzPA2/0+YizJ/cLakJw157J4krUu5Juq6Svn6wO+rxDAjJektlHtNXW/+n9krKBvj6xLudUZSVIkofkA3m/8nLAgcLalJJa+hqe7JHk+pNDeM+7PzUTacnVLNF9kISJpH0ncpBSi62Pw/YSHgh5Im1pMt0avxOJC0NXAe3Reh2hb4maQuNhuajYykvchv/r8X2DIiftdhSFY8sUpydSSDbf6fMB/wDUlLAycx+Ob/CZsCe7XUV53/XIdImkvSpyj3qbo+H9oF+ImkLn9/J1Vd71xJ95v/Z7Y9JSnQOM3rL1FdD+xHmRvp+vf4rZTr35Fthq/mdY6kVA3u+j7sOynnOU9kmiQAkPR24DS62fz/KEPYD1O9/06nJH4bxub/mW1H+R7IrAc3a+JM4E+Jdm/qOpDZkfT4/8/eeYbLUhVt+y445CwCBjICBpD8qiB4QJTgK5IViQYEJGflVUFQRMkiSBIJAqIgSE6CfICAgSAgoiJIzjkc4HCe78fqjZvNnl7VcXr2Xvd1zaWcqV6rZnZP9+paVU/hE4w9pUDhc6yO5F1ZbL4KE3Pem5rqMcRY48M/DmseEsXM/kMQRfAcsxJBwLlJfo6vtkPAl82sTA3MoU67RYk34GiSjYgLM0DIezm2YV8SiYEkViDvKbx+sQ5HYkjagrC55l0wT2AwHxYSb2UZfMk+sQLCQSWaOE0oQv1H0454yJKHTyJ0vMhjGzNr5drRALGko0kEtamBJ1N5XN1hemLTvowzPBv+hzXuxX+5kVC8HaPphwLPuXhDTcpk0zts2ha98AiLzNe4F6OQJYOsFjG70cweHeXfL4gcNw3+rrFjmU2ddlW6c3tFh26vMEdlzOxmRwGwV7hk0DjHaffpRr1IjEU+4rCZTFgTJBKJRJQscehk/MVbXzezfhYZJ/IZnngUW4/EFNWHbPISCe4Z0eGnL4lPIxBAlnzo6Yi+Rw2FK00XPy6BL6Gjn/d/z9zvzRILxzLeIogisVbP89+fzGxygTFrJdvI/7PD1PssO2h4Nr/riEF77797ZB0KEuOHrgsA1OmfRwDAaCZG+RmHzcPEk7iKcH/k/aoCAEOxwzwBgPc6kpw9fjSaDJt1YvOImhkhWXY0DgRmdIzxGzO7zOtbE2TiAz90mL4H+ELB4XfGt+/yvYLjdpUDgIUcdrcDRzbsiwtJnyckr3vEN5rio8D1XVnfS1oOuATfuqwO3k3oiLlUS/O9hazg5SDCvn/byf8QvudLMwGCVslyIo6jvQIzI1xvPV1+WkPS+4A/AZ/rw/RrANdK8uQoJmpE0jQEAXJPF8I6MOAQSbvQ8ZzOrGvg2TRfBDjEKsBpqdlVYqyQFf8f7DR/GfiMmV3boEuJ/zId9Rc5L0sQkK5b0OvbLRVJzwVvrguPJhSCtRUbWxM4OZu7NbJ6jCvx1YjUzXyEAnhPEWQbzEl4jv92i3OuAFzdDxG8rAD1PIrHdqqwGiFHtC+5rRV5c49O0tSZcNZxxGskynJ/kc7PZZC0AGEPNpbv2yTvBa6U5KmRSSRcZHvLxzlMP57lNLXN+vjEhY4vMOZfgVciNh5B5lHJROpie/Gexs55RAUAig5oZhcARznNv9OUIImk7fDH2Q4zs1Ji4Fm+nbex345l5qiJrZ12Z5nZg416kkgMKLGg4dyOMRot4pU0o6RTgVMovtHUKYXwRCk83S+eBm5t2pG2yRSu13CYXlBE2ahhdie+0Dul30ksZckCbbGg18Md+ntUZUlCskEej+DvEJ+IIGlJ4omE/8RXcFALZvYsvqT79SVN3YQPklbGFwC8tKYpPZ+j7eSXxxw2/QqSfpa4GuxvC/77cNYr5s7YIlNg9Dx0P4mvOKIXi3jcIVyDEv3hVuAph52nm2ciMRxPoPeerENoIpFI5JIVB16Av2D1GDNLonLdZngB/rnkC8St6ehUtUnk/dNH/HfTnSc8DI/z/B9xkbyZqV440HSy19IOm8mEzo/94q9OO89nGWQWcNo9U2BMT3edOotNy3Jz3MT1WQaRRR02T9Ywj1dobi7gF5kAcGLwabvAvihtz309MJpw6Ug8xfpuJL0D8CQVnVfznlOsaL6qAMAdI/63F7Eu1x4/HnDYVMLMzgJ+7zBdZWTCqqQPE7r5xZhEe0WnMU4C7nPY7eEtTpA0E75ugleOhYKf7O/uiedPIQjmv96wS1GyAsfT6Yb42qLAxVlnwH4yLXAR7RV9DvFO4MI+iSAcjU/0pEkmELrHttmBFEKxjzcBtU7278OcoyLpg4T73fv66MaHgcuT8Fjr/IT+7MUfSuj81kkkrQOcST2dsYuwLrBby3MmErVTsPj/FeCzZnZNgy4l3o6nQUBRmuiEPROwRQPjjmSozuBoYNsW5hvJF4AvtzWZpC0J3Wj7+Qw4I3CWpC/20YchtiPs/bXNksA5klrbB81iOT+jP82YPkF/xMaqMjOE4n/C76Zp4ax/NTl4Jrr2O/r77DfEjITfwMr9diQxpvg5QVwqxuZNOzIKnuvHNWaWJ678FrLY8i0Rsypiox8nLngyscL4kL/fBOVzFvbAVxQ/ATg9q9urjSzWdojT/I8EAaoqHOq0W1vSYhXnKkwmurGS09wr3pBIjDtigUpPcdsLdTgyGpIWJ6ipxpRdejFTje4kWiZTtfUE/K+qqeNz1/gmvoT5kxv2w4WkRYF9I2ZPAnu24E5TzEk88XzULt1Z8GQxQkLXYgQVr6GXgJcIYhb3Eh7ibzCzh+txuzSeju4XxpLPJM0IfBL4H8KDxAKEc3s2gojMy4Ti5ruBvwG/N7MxJ+rhZC/iCY5H9OGadzKwYsRmEUKX8lMbmP+7DptXgTNqmu9Vh81sNc3lxbPe6ldCxPoOm1EL/c3sP5JuJ/8hfi1JM2Qdl8YV2b3jRHwdZn5iZm9UmM7TkeghM3upwhyJCpjZFEnXEpI/8hirBTCJ5vBsxt/VuBeJRGLgyeI4p+HfML4B2LU5jxI18WYcxMweknQTvYvVZiAkjfx6tDclzQ2sGpnvV73m7wJmdrukXwOfj5juJOnHZjZqnKgDeO7/9zbdZSLCw4R4WSzGv2DzrvQVz6b8Y2b2vGewrIDb09Xg757xGsaT6PQhSTaGBFmHCiU9Il11dL6+klBA6xGVXJuw4b5dDfMmuk/XBQBq8y+Lt1wIfDViurqk6c1sUk1Tr4WvoOi8muYbInbteJekqXvFGSXNBsybc/yd8Oa68Wl6xzU/DPy/nHFiXcifMrPGchRGsANBmDP29zpI0mXDvruDiTdjAPiRmd1bxcG6MLPXJf0IOCZiuiRhD/Fyx7Bfxdfh9wCHTafJnom9XeCONjNvV57GkLQCofi/iMC3CL+J6wndwh8FniUIiM1K2KtaiPDcuBJxsfmRLE1Yc2xV8Lg6mQaYx2H3OnAbYT31DOE7mInQUGBJfA1XRjIv8BtJK5vZ5BLHF0bSdym3xnsUuJZw7X+EcB5MQyigmodQWOZJFB6OAcdI+k8bTSWygqOyxT6TCLkN9/Jf8eZZCUIOy9Dx7uZDZEm/1xD8LsLLwFWE38Dj2csIn3thglj1RylWQL0k8CtJazSQD/Eo8O+Sx86G7+95P+E6UCdFxP4KIWlHfCI9ozHa+T8b4be/DPFciqmAD5acu1GyXNVfEL92vQbcThBPeo7wt5+NkAO2KOULYfeXdK6Z3VPy+ESir0jaHX/x/2vARmZ2VYMuJXw8SWgA9QBBrGxGwvX8g1SLwUwGbiLcg1/Jxv0QISbgfQbZGji8gg8e3ilpB3xr4pcJ4sUPEta/UwjPQLMTcoK9gr4jOVTSRWbmEaksjaSNCQXgnnjFcJ4lCEYN/+xTET73QoR9jE9QrKHSVMDJkl7IOvX2i1jhIYTn4HsIzz7PEdZC0xLW0B8kfAdlfisrA0cAXy9xbBm+CZQVXbiV8Hv+G2GNOon/Pv8sTcgtnr8GH7vGUA3HcbRTMFz2mSVKtj94Fr4mUcOZTPi7/5nQOOppwu9gasJz0pzAsoTz2dPdfDjTA+dKWqrGPfVJlP8e5yYuBjmZ8OyX6CBm9qyks4AvRUy3lPSdivnWbiS9h1BHE+PYEsP/kfz6Ds+ecy8mOmyWlTR71myyEI79Jgjx58Jkex1fIDQciMV0FiLEo2sReZE0HaGeZUaH+TPA52vIyzmPkFsRy9czguBV2+KD2+BbK11rZl1oVNEmz5JysxNOegbaM1Uxz4+skU0nSesSVHiKLgaH0wWV8kR51sHX4eHkhv1oHUkLAzs7TO/A13miUbICxZ8SD+Bsb2ZPtOBSU8QSjmCYAEB2HV2L0OFjNXwFnG8i6Z/A+cDJZtaPjmurO2xGTe7JklzWJCzYPkXvc2OoYHlxYJVhxz9ESDg52szGxcOypPmIFxA8A5zSgjsjOYuwQRPbqN1X0nnepHMPkj5LvEAE4Cwzq6PzGQRhihhtF9t7it8nSJq2zQKNTODj0xGzf5rZ3Tnvn09+MH1mwvWon8H+frEP8L8Ou5cIStRV8CQhPFhxjkR1/kxcAGAeSfOaWfp7Jbws6LD5R9NOJBKJMcH++DujPgxs0Ofi4oSPkfHVc8jvVrsBPQQAgE3IT/y+fRRF8y7Ed0cWFn+b8DnzPsv0hESaHUrO2XThpScJra/3fzOTpHuIb0qXTajrPFkyziccpnnP3COZD18BRhfWf55iyBkJCWaDHHMeyafwiZ/kFc66MLPXJP2AeKHnENtmSQvbj0ehxjFEqwX2A8K5xAUAZiJck+sqRvSsm58lFOTVSUwAYGpCouMjPd5fkvzzY/he1t8IhZ+9xskjtj9chwiKCzO7U9LxxJOxlyQkAp8saQ3icXMI8dYfVXSxbn5G6AIeW2PtTkQAIOuOtqNjzqvMrPJ9rQPsRCh2jfEI4Zmir0iambD/533mepmQD3BCZM9n+BxGWNtsR+j0572/bCnpbDO70GnfJq8S7hs/JyQk9lwTZZ2eNgC2xycoMMRHCU0VflDBTxeS1qfY+TgF+A2hCOvGWJG2pFmAzxKej72NX6YGzpS0ZJOiepIWxL8OHuINQszjVMK1q6eofFZYvwmhm2snC2EyocZLKFb8/wfgIODK2DOBpDkISfd74f8NrA58AziwgE9RzCy21uuJpJ2AIx2mKw3K3pykD1F8DeI6/7NcoSUJeVJbUE4MpV9MS/iMs/R4/1nglwQB0+vzYtuS3ku4B+5CsY6LMxAaZGxW4BgvrxMKfOtgZkKe16DzCvV9JwvTv6YdnSAr/vd2uXydUPx/UYMuJeLcSyj+uWC0AjhJSwPHE4R9ivAGIc/w0NFy+SQtQjhXYrkvAB+QtFDDwnlrAsvlvP8YoYjrDODWPKGurLv2qoRnoCJdrWcj5IjtVOCYQkj6MOE5pogA3PWEtd9lWZfhvPFnJDQR2gtfUT0EwZ1fSFrBzLqwJzGS64CTgPPMrKcwk6R5CPUOXycUwxdh2yzf1iOyWBpJywP7FTzsJUIx6tGx32D2/P8xQr74phQ7z7rMrJJ2Ab5SYYzX8Avee4Sxy7IHw3L0HdxJuAec4cnLzuKAHydcxz6H/xyYk1AH5GlYGCVrPlhU5AAASb8knsP/oJmVGj/RGkcRFwAYel67tHl3gLBvEPtNPEmIORYlVixd5Hl0JBMdNlMTRGDLrOuXID9efK+ZPV5iXADM7H5JWxFqFGJx6S0kXWpmZ5adbxgH4/veBXzJzO6rOqGZvSHpSML5H+NLmQCGp1amMllugTfGcUQNU+5Hf5/NVwW+4LR9A/iimbW255kYo0iaVT6+UfO8EyQdJGmKc/48PMWrrSPps07/q9xwBx5Jf3R8R/cpPDSMGSS9Q9JdznNk7X77CyBpW4evrg16SSc6xupLJwxJazp8O0TSOyX9QNITDnsvv5c0seXP+6jDrwVHHGOSNpZ0d02f+3VJJ0iaq83P3g8kHen4Pr7fR//2dv7NfquwqVvHnAtJetIx58uSakv4l3S2Y84b65rP6dNGzu+/inBSU379MDLGRxxjnNTWZ8p8OsfhU6MbD/L/5iTJIxoUm+8vjnnGvAiDpEOd33lfklUkreP0z1Mk1GuODznnWK/Oz9YlJF3k+PxjIugiaQ7n37uxjeYuIOlTju/gjD76d5XDv5X65d9wJL3beU6d3m9fu4ykw53f40I1zulZ/0g91vqS1pU/lveapF6FQH1D0iZO/8fUhq6kxyKf9/4R9gtG/tYvSBpVBFDSjZG53tZ1T/HYSuliAPnXPW/rWCTpJMdxrymIfJbx7dtO30optivEmWIcV2bsOpF0mcPPyvdoSRc65vlDHZ+poF9rOfySpIMKjDnROWbRTq21I2kRp69FE1CHz/FR5xwfqfOzRXy62OlTlY4Nw+ebVtJtzjmHuFWhK2ICUNjTjHF+v/0cQtKGDn/71m1SYU8gxsY1zzmdpOcc8/64pvmmli/ufVod842Y+/OOeZfPOX67yLHvHGZ7bI5d7n1V4TqTx2/q/F5iKMRPPHt+D0qaWdLNDltJiiWU9gVJ2zv9z01ql+98kyrEMruCpPkkPe/8vJ2Iq0o60OmvJF2qEXvCJeZbVdK/C8x5l4IgVq0U/Nwj+Y1K7EdKmkHS/grPiF4mSVq07s8/wq8FJT1TwKe/KuceEZlrKoUcgiL5E43uSckXcx3ONZLeX2Ke6SXtI+mVgvMNsUtDn38qSb8r4Me/FIT7y8z1DoU4ijd2+Lo6lC8naSen37GudZ0g+9v/qcDfXip//s+scP0re/7XJpgj6aiSPkjSi9nnKJyLoZBD9TlJjxeYb7KkWNe+viJpRednWa3fvraFpLMc38df++TbPs6/V6wpTN4cuzvnkMI57i2I6Bzq+Pkv6XKnf3coFKvHxptJ0u0F/r6vS4qKHipcH091jrlhhe+j6vX/OwqF7WXmXlHFnoFeUUM5spJmkfTPAr48ppIxC4W1xvbyPyNL4RybvoHPfXIBH4bzb5VY+yqc1xtJeqTgfPepx95qHUiaRtKdBX26RKGhWZn5PijpDwXnG6KR558efp7i8OdF+eLVUsi9PFzSZpKWlDSPhp3XCnVZ75X0fkkrKMTp95X0a4UYyOtqKGakkMfzovNzPC9pB1WozVHYg7/JOd8Q69f5mUv6/UuHn32pXymKpE87v/dW9j/l238pKtKYN5/nmfesuuZz+ONZS5USAlV8P/01hYamRcedWf5YZimRY8Xrz+ooxkfSYc7P8ayqx8DXkj/+lVtbUWLuGeXbe5SkbeucO+LXpk6fBr4uVKHuqUj8e49++zxWkPQlSX8u+IrVO95SYsz7csabXHCss4t8Ad5CgNoEACTNK+l657we1qzLtzpREgCIImk953e0d799rRNJc8v/G7ik3/4CSHqP4hvDz8m52aVuCwB8yeHbrQrJ7k3xWwWl6KY/61wOX55SUG4cOmZx1XsNH87TkjZt+nP3C4VN79h585r6uGmskJxwr/PvdZykaSrOt6j8QhL71fQxh+b2iDG8rAYSj3J88goAtJqgL+lMh08rRsaYStLDkTGebPn77psAgELClaf4eIirVYPohkLiToxWhRj6gbovAOAtgNmiwhxJAGB8CQAs6fx7dzIhvS6UBABqQ0kAoBY0YAIACpvUng27Ibauy+86URIA6MVjoxwTE4/63CjHLKL4RtfbihsUP7f6JQCwgEJBRoxSa2iFpDIPZQUAPOv/WjccS/rpSZy9toZ5uioAcK3DL6lAMqmkrRzjvaEObK4qxMs8bFBhjk4JAEhayenPQ6pJgDObdzkVK0iTpFclHSFpzrr8GFQ0eAIAnjjjv/vo32SHf7UKAGTzepL7avleJH3CMZdU4fqWM7fnuve2tdyw44/JOe7hEbY75tg+r2H7S6PME0uQObzO78WDpK87vjtJus5pd03ed9BPFEQxHnB8hlMi48QEwCTp6rY+V5NIOs/5d+9Eh1OFfeCXnT6fqJrWhgrJ7jc455UaiEmqnADAJEmxzmGeuVdUsQLQWpJcc/y5pIAvpyl0a6o653zyXRuGaCTnS0HI0ssUSd9VxWu2pGXl32sfTlMCAHsU8OEKSe+oYc515C866cz9QWNPAGDzAn/7Os//ewrMO0QXBACuVQ3xYEnzKyQOe3GLPfYDdbwAuh9oHAsASNrNOb4UnvkHOv9PHT//5RMAeEkF7luSVivwNz6gwLizyCdIVaogLpuj7PX/L6pBjEWhDuOKAvPuXnXOHn4cUcCHP6mG/GRJH1CxJmLfq+OzjvChjADABZIqdY2VNKeKC441VgAmf0xLCuu/A1R9/TdB0sEFvwOpewIAMV5UaBq4RA3+TKsGhDCysT05EbwDAAAgAElEQVR7GFLIG1iupjmnlr/oVpJur2Peij4nAYDm/GlbAODLjvle1TBB46ZQEPyIMUUV1h2K5/wUrkmUv1GBJN1U0u+fRMbdtcy4o8wzjfz7NteqZCxcoQ7Q03xVCjHySnU2PXz4nnP+O9XS/pR8zUmkmv7e/ULh2eYO52eVGhCBTxRD+feK58r8RpT/G7y1qs+1JQhVRdKqwJ+B3CKxxNhHQTHxMIfpk8CxDbvTGpJWB27B9xt4DKi8yVwTRwMxleO9zOzBNpxpmPc4bJYCZm7Qh3WAO9V80d2HHDZ/NTNBuAECf6G5a/gcwC8kHa8GFrwdYEfi580Z/fwdmdkkYFPgdYf514ArVXKTW9K6wB+BxRzm1wHfLzNPDp7C7hmAwir3LdBawqBCos/aEbPHgdyHezObAsSS3uYEVvZ7N3goFBAdCNxJ/Hsd4i5g4+w7rMqsDpuXapgnUY2HADns5m/akcSYYRan3eONepFIJAYWhQSIC/CtJQCONbMTGnQpUT+jqYHHOq6OVqz2RfKfV/5kZv8c5d8rFxjUwNvWX2b2H+BEx7FbSPpA/S5VxpPM+VTjXsR5xmHjvf4MFArFrR93mD4JXF9gaE/i3tNm9kaBMZvieafdQBRZxMjiLD91mv+0plgAAGb2F6Dopvq0wM7AvyT9SDUKEyU6QT+Lkj1zN+HfuQ6bhWq6r0c74QGTgMtrmGskHkHDvHvFkjnv3RH57+HMAiw42hsK3Whi4iL9EGY8DrjNYecR6HsD2Gloj61rmNmrgKdrzybq0Q1O0kTAk0D63QKudRKFDmU9hTOG8RKwfcPueNmGsM8V43Jg67rWhmb2PLAW4E3q3qaOeSvyCrCmmf286kBm9gfCXtcTzkM2VknRtxhZroG3uP5oYIvs2lAJM3sAWI2wD+zBXUDmRSGJt0hh7Y5mtm/Va7aZ3Uy4RzQiMF4EhaRyb4HVKcBaZvZ01XnN7HzCOmiSw3yiSnRdTeSTrbOKFNfVef6vSNjbHiSOBiaa2T1VBzKz+wn3wEech2xeJtE4kWgbSbsBh3rNge3MLImE959DC+YgXg3c57B7BTjEO6iZvQB4uu8u7B2zJn4FrGhm/6o6kJk9A6xHfoxkOJtVnXMkCsW8OzjNrwdWNbPS4ttDmNldhOefvzkP2VPSB6vOW5FfAOtmf7fSmNlTwBrAeQUO+4ak2vPOs3qM7xQ45Jtm9u0a1n+TzWxPYK8q43ScC4ElzGwPM/P+xntiZq9lOdq1kj0Db+UwnQJsmO0XVcbM3jCz3fDfF5aQtEodcycSwJlALI4xLfCFFnzZ0mFzacV1x58j75dpSjyxgO2yksrkbMTEU7zxw1zM7HVgE0JeRYyPA98sOkf2/P5zYB6H+dPAFzK/6ubH+OJuHwRWbWD+tyBpccBzbX8BGNgGhQqNG07HV38HcDPd2PsY7yyT894tJdfDeWPeXGK8t9B3AQCFrq/7Alfiu+AJuKxZrxJ95nv0SPoYwYFm9lzDvjSOpImSLiZsoHsKzCcBG5nZo816FkfSF4B1I2bXAMe34E4btNpZO4fZgHMkfavBOfKSuIa4X5IpdF//GTBTg/4MsTVwniRPUspAkAXZPAk/RzTtS4wsMeUbTvNVgH8qKMiOmgA2HAXFx9UVOvedS1xYBMLm6MYNPAR5E48m1jxvHu9qcS4vnyZeaHGBMzHsAofNmOo2rqB0u4KkXSRdAvybEDiY0TnEv4BPmZk3USyGpwi4cnJXohpZoN9TiNWVNUui+3gFAF5u1ItEIjGQZAHs0wCvEvUNQGuq/YnaGK0A/9eRY9bJEoqHE+vc2CvJqwsigL2C+t8nfo+cGti3xJxNJ/h61gCVEpxq4lmHjXc9MzAodFY82Gl+csFCHM/35dn8bhwzm4xPiG7gRSCyBKyT8cVkJ9FAvN3MjiYUNxRldmBPghDABZK+KGnM/S7HGP0qsPfSr7kvwpcU8781zOUZ4/IsEb5uHiX+OfP2KvMSskbG1WNx9l7XvPcQPw/ui7xfO1mce3t84pwxjjUzj5hAPzmBIEaaxzT0LiLwdK673sx+X8SprpElNh7pNP8/M7uvQXeKsJHDZhLw1bqFKszsWeCrhMTyGKuoYufFikwBNqnzPDWzuwmCEZMd5lMRRORrJYvnHOg0P4+aBUvM7GXCvfDfDvPlJdXdgOBzwOJO2x9k6+RaMLOHCQII3gLgpjgEn+DiVQQREM/56sLMriEIiXnYs655E2+yEX4R8brP/8eA1en/+e9lXzPboU6BxCzPb1N868n3AEvXNXci0QQliv+3TwLRnaFQl9ZsLXiDw/T3JfK5PeK2HkHjujgd+GId4ldDmNmLwFec5ktJqjvf5weEvaoY/wQ+k/lbC2b2OKEQ/jGHeVGhorq5ENiqRgG81wmFpX9wHjInYZ1QN5vjq80BON7Mfljn5GZ2MP57xaAwmXBP+2yH4jx5/A++c+AkM7u2gfn3JjR587B+A/MnxiFm9gpwqsO00WasWc5MLE8GgvhwFWKF8mUERicWsJ2Ar7HBSPL2m14nNNathUyUdEt8z+P7SvpYwSn2wNf4T8CXsoYjtZOtvbyCa16BqCpsjW/f96QBrws9APAKmT4KfC6LkSf6y7I575Ut1s8bs/I1bULVAaogaU6CYppXWfp54MsE1ZM1mvIr0T8kfQLYyWH6H+CYht2pnayLz1yEB6pPAJ/Er/QCYaN93YYesgqR/X5jBcmvEpRbO9nBogSeDlltYcABkiaY2X4NjO9R03wYOJbQ7b1N1gbOlrROR7qRVeUrhOtCHr8zs1vbcCaGmR2WJdt4BCimJ2zg7yzpDuAKQmLeE4R7+lyE4NKyhM3edxRw5RHgk2bWxAbxzYRAXWyd9AXgJw3M/xYyZbjtmp6nBJ6A2/nOsa4gFM7kFb+vL2nnDt1T5pcUU04cjaG1wFyUF+O6jLDhVLnbBrxZaDC9w/S1OuZLVOZJ4J0Rm9pVoUdhM0meLl5NcLmZXdWnucca3sKcJAASNtuLdIaqk0X6NG8iEeP7+LqXQghgb1RnwkyiNd6WEG5m/5D0N3rHDmYjxLwuAZC0DPnxLwFnv+0fpWnogIAtPTYBzewRSccQL27aWNIPzaxIML+x4sfse/Uk+tfyvFERjwjBmCo0ljQ9QWTDk5D/Gv6O8UN4vq9XCo7ZJM8TFx1t4/mnMbK4z3H4u0ycmG3eN8FOhG7AXy5x7FSEQq7/BSZJupTQLevChoqYE83S9U6TtftnZi9Kuop4gs5n8Iu0vA1JCwMfcJgW6RDmxswk6QFg0RyzUffCMqHfPOHeO0fM9aSkx4G5e9h/mNHjx569uEaSo2KY2fWSzqJaZ6Cngf3q8ag5zGySpIOJ7wVvK+ktov1ZV5e1HNMU6UDXVQ4E5nXY/ZkW9pM8SHonvqTPc7PEyNoxsz9K+gWwRcR0akInot804YeDg83st3UPamY3SPoevmvBFyXtmQkn1MX6wPsddg8CXzYzj1hDIczsCUnb4Wv+8mX8RTMednXa3UAD1ykze0jSxoROuq3n7EmaSBBBiHEPIZbXRDeyE4ANgU9F7FaWtLyZldmPTYyOV3yhqfP/YUmbAL/DV4jYL35sZvs3MbCZXS3pSuLnP4QcmtoKHhKJOpG0K8UKOvcys6JxzES38Dwb3FViXM/zfVsCANcR1r+156Nmz0DXEHLGc00JglHewq1cMjEtzz3nNULn79oLr8zswWH3/1hMb11JS/VBNPEeYLO6//Zm9mrWZO9WfHmx21G9CPRNsr0Hr6jcXTQn5L8XoWZi5YbGb5OXCTUcV/TbkQIs57Q7tonJzWyKpK8RYsexa8DqTfiQGLccTXgGzjvvlpW0dIP1Gf9LPM/3QYJAdRViAgBLFRksE3rvVcT6PKOL808ELi4wx3sI4je9uKPuAmkzu1jSocTzeyYAv5C0jJk9HxtX0rL4RYwOMjNvXUVZDiaIW8RyrdaRtJCZ3duEE5kARiz+D0GE96gmfGgDSesTmj96eI3Q+PTBBl1KOMhEkvP2yQrH47LrWl7D17KiAm/SNwEAScsTkn8Wch5yC+EB89+SVm3Os0S/kDQXcAa+IP+uXUsal7QzvcULJhAe4KskIz4LfN7MLq8wRp0cTlwVbl8zKxPY6ypd7Ka7r6RHzazuh+9ox3ZCgtOCJcaeQkier7KhtzZBmd67Qd9JsqJbzybr4U37UgQz+7akV4H98SdbLkG+WlsR/gOskXXJqJ0s2fNmQuAxjxUlLdCUEtsw1sWXFArQiiiGpAnEO1W9AlzpGc/MXsk2utfJMXsvISDZlSSP6fAHSOviZcLv7pCaNx28v+OuiC+MdzyBrViBTB30U3X3JULnmUR1vOdKEgAJRa4ekaxEYlwgaUOCWruX54CnGnIn0SxTSZp6lPXnOeRfFzcgEwAANonMcX2P56ppnT72k4MIwoh5HciNsI73Kj43TZ7w2nCim5kt4CkabmPt2wpZfPxMQoKfh2PNzNM1czgeAQBPB+y2eJ54THZgRSCybk4n4BfUeRifKGcpskSsrxI6Mnk3qkdjekI8a13gFUkXEfZ+Lu7avs44xRMH6qcAQD/nPo+4AMBKkmavUIjpWQ+8Qeg61hT/oYQAALBkZNw7evxbr/tar/E6KwCQsSfh71h2DfItM3uyRn+a5DhCkvZ7cmxmJQhdHzbs3/Yknlz2h0EX+JS0ArCtw/QNYJsOiZp7Oz41nYh4Gr4EwKXojwDAnTQrUvFDYCvie+0zEmLxJ9U4925Ou13NzCPKVgozu1zSeYQ1Yx5rS7I6BMIzgRJPR7I3CI0uJledczTM7DpJP6G5Aps8vPG8nesSIh9JJkj0NeAfwDQR883pzt7wQCNpCWAFh2nT5/81ko4Ftm9i/Bq4Hv91sixH4CvGbDsXIZFwkRX/HxY1/C/fMLNDmvIn0RqeWH2ZZx7PPkTe/ktdPEGoT2gyL+LHxAUAAJahJgEA4gVuQxxkZn+tac63kQngnEjoAptrCuyO71mxTrZrquusmT0g6Vv4Gh4uJWlJM7u9pumXw9+gcIesY3btZPsOWwN/b2L8FhHwlQEr/gdY2GEziRqK0nphZndJupr4/udikqZt+FqcGCeY2b+c591WNBef2dJhc0INz983Ea5RvfbXCgkAEARbRqsznUwQ89xolPc8a5zhxOpJbio4npdvAh8lHh9cGDiSUEjfE0kzEfbAPblN/48WRJHN7O5MqD+23zk1sA3wjYZc2YB4g1SA883snoZ8aBRJSwOn4t/b3r4LjaATQBBIzqvtLbMu6iWcAqF+srLIWV86KGWB/OvxF/+fBqxUIpktMSBkRbCnkJ9AMMRZZnZuwy6VYQ7CzX601/xUK/7/E7BcV4r/Ja1J2GjL4zaKBXsHgaoCAK8Rup/fAvyFcGN4gOoFu0dK+mjFMUaSpz4zxIIOm9cISXM7AUsDc5nZ1GY2gZActSxBufJyiheW7iLJmxzbVT5PvKPrP/hv0URnMLPvETYlH2t56guAZZsq/h+GJ1BXRCW1FJJmpti1tK0k6lWJKxNeXlCB7wKHzXoFxhtLiFBg9SEz+2GHEgUT/eFFh81Ad8AcEOaXNKVPrzo3Hrve1TGRSHQQSR8Afkaxa8jihALoxGAyWrf4cyLHrCtpQqaaG+uQelaBeftBz3iFmT1FvCsqwP9K+liBOZu8R3v3BLogAObxoS97HHUjaTVCF5hPOg95jHLXVY8ARBMdHsviSSwduOcfSdNI2hK4HX/xP8COTSUiDmFmMrN9COItdRR8zUDo7vkb4FFJJ0paLbs/JLpL158Vm/Lvt8T3ayYAa1SYw/Obv9bMnqgwR4xY8XyvAvy8omExeqe/O3OOKSsA8GJTBYkess4cB5U8/A6C8MtAYGaTCGLcMXaVNA2ApLmBTR3H7FvFt36TiSQfh0/s/AgzayyJugSzEe7xsVfTSXfXEMQCYyzWsB+9+GaTCefZ7+tAp3ltYrySFiUkuca4yczOrmveHDwi+O/GL5Qe4/NOu9Nb6Drq/fvXRlYA7lnHXGlmVbvP5WJm9wGec2zjLJ8sUZ0NnXZtnP/fbnj8skyige6/o3Apvntg0SKNRKJxShT/f8vMftiUP4lWaWq/YIrDpo044h5m1nQO5BX48oS9om25ZM/nseY+AI8SBMqaZh988f4NJc3RtDPDuKeFgu7j8Re/19mMZbQCzdG4tAWRxocbHr8N9jezX/bbiRLM5rB5vA7RvQiXOmymwVdHlEh4+anDZjNJteelZML/a0XMJhNyryqR7Zfk1VnOlYnSe+lVzH8PvYtil5VURLQpJjj9xwJjucnEFjYBPCLNW0mKNTs5ipAPF+MJ4ItNiS2OwqFOu69J8jYQKUpM+GmITjVJ9SJpTkL+g1cs/HAzO7FBlxLFyCvWfxkoU6eWN+bdZuap/cil1QQbSTNLOpOwGepROXmFoJa1RVPKYonOcDDxRQ6Em+1ODfvSJZ4kdElYsSsCGJlS0dERs8mE326XkkUrkSUkeorih/MqYdNyS+B9wAxmtpCZLWtmy5vZcmY2P+HG/1GCqtM/S7g3LXCypOlLHNuLop91JM8RkncWMLP1zOwoM7tteFcTM3vZzG4xs2PNbA1C8NLzkD+c4yV5AhRdxaOyeqiZeYLdrWNmvyMohZ5F84UBTxCUxj7XUnKft5vIDpK8gkZl+AE+sY0h2lK/9ASbf1twzAuIb+x4ExPGErcCS5vZhlkyTCLhCQLFOqYk6sH69EqFMolEop/MQegCWKbbxu6SVqrZn0Q7vG3DM0sE/lfOMXMSNgZXAebLsXsD+HWP9zzx4zaIPe8eBjzlGKdsoVhiDCNpGUmnEsQxiyS1fD0ToCiKp2i2C+IPQ3h86Xqh8ptIml/SN4F7gZMJ10ovh5lZa91vs0S2JahXmHR2Qpfo3wH/kbRPlgCTaBfPb6YvvytJff09m9njwA0O01LCxJnY6yoO0/PKjF+AmABAr/tRXkLWvWY2WhJ3ngDAYpJmKDD/EDH/2+Bgyu3n7dBigldd/JR4kva8/Dd2vzMQ26+8wcyurOpYn9md0JUxxv3Afs26UgwzO9fM3uF4/alhP14nCOfH6Mda4WUz84hWV+U0fM+Sq9eYiLkpvvv8j2qaL8Z1wIMOu1hXMC/efcaDa5ovj0ktzDGSbfD9/Zvufj7Ejx027yI/eTLhx1tM1niXbjOrQ2yuCZ5tYz8+y//xFDMs3O9npERiOJJ2oVjx//5m9v2m/EkkauRJwtq8UbK4yWjiiSOZv6YpN8OXO3RIwQY/pcjyho91mM6AX7irDhrPy83EhbwiC+vUOPXnnHZtPf8NMncCg3pP8+QTF9mrKsudhALl2KvOOohE4jzgoYjNnJTc84nwReL34fPNLOafl5si7xcRGFq1x7/fRe89nwlAkXywWKyvEQEAeFPkeQt8a4BjJC0w2huSNgC+5BhjCrB5jX/rKJmwj+c7nIN4Q5fCSFoEmOgwvcXM/l/d8zdNJoh9Nv6G6FcCezXnUaIEeft7t5Xcy80bsxaR8NYKByS9H7gR/wXibuAjZnZSc14luoCkbYBdPabA1lkCznjgGGBhMzukY8kgBwELR2wOMbO/tOFMi7wTf+L5q4RNsfnNbCMzO9XM7ulVxG1mr5rZTWZ2AEEFan2Kq8YsDnyj4DGjkokdzF1hiNOB95vZ/mb2qPcgM7vDzNYCtsNfxPweavrcbSNpTeLJQU8Dv2jBndKY2UNm9gVC8m5TCeJ/BhY3s+NbUJoEIOvG8g+H6XSEIv3akbQ1sEPBwxoXAMiuEbEA8RTg4iLjZkrKsYSyxbI15XhiaeA0SbtJeme/nUkkEolEIjHuOYMgcFeGqYATahavS7RDr3hIrBB1A4J6dh5X53RVGQgBgKwbt6c4YBVJ3u7uKbl3jCJpgqQVJX1b0vWEjZ7N8XWPHeLgNgvBEwC8X9JyBV9rSNpc0u6STpb0b0LR6oHEu1uP5GyCUHCrmNnDhKSXr+ErTivCvISEuQckHS9pwZrHT/SmswIABeZt0r9zHTZrlexEuwajCCuNwvklxi5CrIB+9kwMfCR5AgB3FPx3CPe+0WK9sWtk3wUAzOxViifrnGlm1zThT5NkXco9RT57Z+fNNg7b/So51WeyhD9v5+Id6+jqMYZ5xGEzS+NevJ229iInARc6TKcDPlLTtJ4OoI8TRLsbJ8uf8AiCLFZ1rqwDqkdI4DYzy7t/DSTZ2sXTAfQGM7u9aX8AzOxGgjhajIkNuzLmyYTXPOf/7W39/RPc6LCZlnaKsRKJKFnxf5HOjIeb2b5N+ZNI1MzktvIRCTmQMerqfu0p/n4VOKWm+Tz8FF+xXZ1F8F3hbEJTzBhL19EQLev07OlI/BAwcPGqlhGw3QA3RPR0uZ5J0oeadMLMLjazRRyvvzfpR2J8kdVf/cxh6iniLsqWDhuPMI6XWLH3Up5BJM1C79qWu4C/5Rz+Cc8cGXkxiheARq8FZnYJPgGc2Qn5+2/ZE5Q0H3C8c7rvm9llBV2sgyOddjs2MLdXhLTIM2aXOAp/vPJeYJOO1YMm8gVnb+nQmG+hFQEASZsSHly9i8NzCcX/Kag8xpE0EZ+qM4QON013vegS2wC/kfTZrij6SvoIoTg7j38C+7fgTttMIHR+id18bwWWM7M9y4hVmJnM7FxCwWfRRc3uNRWHvoNynYNfA75iZpsVKfwfiZkdSwhAvuo8ZOcsYDVo7O2w+UkbCqtVkLSIpJMJDzJNXauWB66WtG7L18OjnXafl7R5nRNLWpcgBFOEKS09IKwExH5zf8gp4snDk1C0XolxB50PA4cC90rar0dnrEQikeg8kuaWtHCDr5QIlUg0z6crHv8BICV9DR69CtViBcjrEUQA8vhVzntdEQDw8GPi6vEAP3A+13YiFph4Cx+UdEWF182SHiIkeF1PiJ+uWMKPXzGgYpgDzsmEPa4ir0uBUwlCsVviV4AfyW+BLXqJyzZNFq8+geD/vsCzNU8xHbA1cLekn0p6V83jJ8oxnu9DHoGVdwL/U2JsTxeZm83MUwhXBU8B/VuSzbNuFnlJw3kCAHlJ9KOJCnReACDjIoqJozTeTbBBfkooCM5jKcL9MhabudHMLq/DqT7yE2A0kYyR/NrMmhb0GHSed9iMdRFBb6H9x6tOlBUAx8TpAc5pubDhPofNHDXM80l8axyPGNAgsiowj8Pu5Ib9GMlVDpuVG/di7DMR3/k/nnLy+s39TrsqzVsSiVooUfx/pJnt1pQ/icSA48mlm0VSpf0xSbPj23+40Mw8xcG1kMW8rnWYTpQ0Y9P+tEkmDnipw3Qq4GM1TNmre/NIzunX3sMA8Tsz85y3XcUrcOcR9UwkBpHjgFica01JdQnwkAlqxGJw9wC/q2tOahIAAFYh1EyNxl2EYuaXerw/0TNB1oTwAzkmfzKzNzxjVeTb+NYlKzOs5ifz/1RCvVWMa4DvlvKuOr/CF3tYWlLl2PMQ2TrWI4DxOPn5Yp1E0nb475kvAOu0ud5OxMly9vKuiYWL9bO89fnrHHM0GhUAkDSdpCMJ3Ys9m6CvAruY2fpZ56TEGCbr4HsuvmTeG4F9mvWoc0wNrE7o9PFXSWv00xlJ0xFUsPK6mgwp3XmUCgcKM3vYzFYkLNY+QyjEvJm3KlL+EljJzO6sYb5JWTD8q/hULwFmBuoIoM9a4phXgDXM7KQa5sfMLsWvqDYDcWGKTiFpBeIPOq8Skqo6iSSTtDNwJ2Gh3uuBry6WItwzrpVUtuNoUU4GnnbaniBp9TomzR4Ozqb4d+pJlKqD9R02vy05ticZbjwKAAwxMyHZ/m5JKdklkUgMIocQAthNvbzd1xKJRH/ZM3smSgwOvWJ3fyR/w+hd5BcAvU5+kZ2nQ24bRDu/ZLGwHzrGWgFfx8XxXHjZVWYjxGrLvpYhFFNWiZ+cCWyWkrHGFT8G1u9CvN3MXjCz/YGFge9RrOjVw7TAtsDfJe0sqelY43imy0I03nkb88/M7gNuc5h6ivnfJEsIWsth2kbRlaeAfmQR/uLk7+eOui+W7ffniSQNsgDAjhTryLp/dh4MHJlQ9SEO0w0dNv1KdqsFSZvgW88/D+zasDuJscHl+ETxl69hrlXw5YhdUcNcRbiKIDSf97q5hnk+6rQbqwIAnn3s14CzmnZkBFc7bLxJ6onefMRpV3aPP1Ecr7jemCp+TAwekrYEDitwyEmkdXAikYe3LqKqENpEfHsR/RCt88S+ZqCcgHLXOdtpV8fzn3cv3iOGOt45qt8OVOQawFNIu72kNZt2JpFoGzN7GLgwYjYB2KzGaT31L8fWvOd/CyGu04sPO8f5RM57d2U+393j/eUkzeKYYxHya0tjYga1kDVc3BjwND39rqSh2OJ38IkdPA58sSUxg7eRfT5vo+Yda5x6XXxihkeZmbdZbCeQtBJwhNN8CrCpmXmFeBLtsTD5gsNl9iKWzXlPhCbTlWlsk1nSfMDvgZ2chzwATDSzI5vyKdEdMnXxi4DZHeYPAxuZWd6iZKyzBHCppJ9LmrlPPnwL+FDE5ngzq1ONqnNkiY4Xm9keZrYcMBehGPZLhEVard3azexnFFtUfbWqAijFA4hvED777yvO+xbM7Ez8CvPbZB1oBgVPp7bTzczzUNE6mdLd1YRFbNsFGSsBf8k2mRrFzJ4HfuA0nw64IEv+KoWkOSSdBBxDvthKL7xiBaXJVK88BfilNgjM7HaCQmAey0vKU8kaD8wHXCVpb2f30EQikRgvpGtiIjEYTA2cImmsd/EbS4z63GdmolqR2mVmlldAWjW+URdRAYCM44g/zwB8f1CLvxJ9Ywqh4HqzljtxJvrHM8CWZrZz1wQfzOwZM/s2MC+wFXBTzVPMRog53ihpsZrHTvjpugBA03gK/woJABCSbt9V09xVeRCYHLEZWYQ/WqH+cG7PeS9PNC+JtFoAACAASURBVHu0pLNYp52+CwBImoeQ5FWE5YEtGnCnLY4hJKxV4S/AZTX40hckzYZPCAHgG2aWJ36RSAAh9wBf8ldeVywvsc5jQ9xQw1xuzOxaM9sm8jq9hqli9zKAx83srzXM1UU8nbxu60OznrscNvNlXWwT5fmgw+Y56hHbSPh4xmmXYuiJviFpXeBE/M/qpwBbZ/sGiURidLxrrRkqzuMt/vaIMdWNd846iuC7hldsrY7nP8/6bxJwfQ1zjWWeIdS6DCxZDrqnrmMq4LeStk35qIkxiKcZ41fqOPczgfMvRsxeJayda8PMJpG/T/N+Z47WxB7/Lv5b+N9rz2cCocYjxhKR91sRAIA3r5GbEhdKmQD8QtJahJq6GFMIuR0PV3SxKsfjW3+uL2nemubc2mHzKnBCTfO1gqQFCMJJ3jy2b5nZBQ26lChPXrH+a+Tva5cZ814zq6XGq5EOGpI+A5xK6JTt4SJgi7o+VKLbZMXJvyIoZ8R4GVjPzB5s1qtaeISQuDAaMxES12ajmjrvVsAHJX3GzJ6sME4hJC0J7BUxewRfUfOYIrtuNZqQZWbHZN0Rt3KYzwV8FjinwpRFN5D2N7OmutLsA2wAxBTB5gZWJXRJ6DRZ4uq6DlOv6larZP5fBixY8NDnCRvGjwFPAq8A7yScswtTLHA5K3CypIXNbN+CfhTlJ8DXgEUdttMDZ0j6NLC3mbmS4STNAGwJ7AfMU9JPaEEAgBBcXyBic5eZ/aPCHBeQLyBlwOfov7rqfcAnKxw/PSGZ9b3ActlYnuD7EBOAgwjnzG4V/EgMHp5isTY21c8GqvzWq3Btn+ZNdJ8miynvpH/dbzYlfv9NJLrAK8B1wKccth8gbIp4NkYS/SdvA+Mc/AKwI4l1leuKAIALM3tN0vcJSZF5LAlsRP7nT4kViSEeBL5iZp2PeSVq40Jgu67viWSJJKcQRH2WIcSuP0+12NZwliOIgO5gZrUmwSRc95iuCwA07d95hFhtHktLmt/M7neO6REM+FcbnSDMbLKkh4E8kdWRRfh5RZOTyY8R3QGs0eO9t4wraQ7iSe73Rd5vgx8S9nwLHyfpPDPzdnztDGb2kqTDCDHpsnxnwIuBDiEuUAEhQfG4hn1JjC3uIt6de2FJ01XsiuQRAHiqqwL1NeARABiTHZmyRgrLOUxbS7Aexn0OGwPeB/y5WVfGNLFmLwB3Dvh9etCY5LQbqPhoYuwg6ZPAL/Hnl/+aEMPslJBlItFBvNf/Mo2DhuNZ+z1lZg9UnKcMdxK+h1iOsuczDBRm9oSkR4mLhLYlAHBX1h040ZtJ/ercXDPfBz7tsJuWUCj9VUnfAS5N9/bEGOFKwh5GnvD4YsBHqS6MuQbw7ojNr83siYrzjMZN9L5/TiDcX27pdbCkWeldxPpgJmQK8LccHz4BXBrxMxajazU+ZWZXSfoB8fy1RQj7+J781P3NzCv80xhm9oKkE4A9IqYTgG2Ab1eZT9LCwGoO09PM7LEqc7VJVudzDqFezcM5VNtLSzRL3j7JHSX3YPLGrE1wtVYBAElTE37038Z3YXuD0Llm/7RAHB9k3a1+QW91oOEMdRXvxyZTYczsOByb+ZkAwpKEBdYKwDr4bwYA/wNcK+lTbSQBZn+z44hvKnx9EBNWBoidCQ/gnsSSDakmAFCko/tt+DukF8bMHpF0ECEAEWMDBkAAANiT+D3ycjO7rQ1niiDpwwQlUu816zmCetgFwA15AcOso/sawJcJD9EeviNpbsL1p5HNaDObJOnLwDX4iwq3AjaSdCphk+uPZvbScANJMwOrAKsDmxPEEKrShgDA+g6bqsWRMQEAgPXovwDA62b274pjDAVCToE3fwfbEx6kvQmku0p6xswOqOhLYnDwiEm9FDepzBlm1kZXukSiCE0WgfzVzP6vwfF7IuljJAGARPeZQljXXkFIlp7PcczeWfFLSt7tPnlxgusIopCxTcyRTCKs/cvO2yZFnjdPJmyevT9id4Ckc3Kek5MAQGIS4bl3fzN7scZxX3fYVE0urBOPUOlrjXvRDtcD+5nZlf12pChmdgtwi6TdCEJAXyQIoMZEXWPMTBABfT+wTypGaZWuCwA0ipndJunfxIXM1yTEvz38r8OmzTjLf8gXAHjviP/OS8i6O5IMkdcp4d2S5hqW7DZy3tH4j8OmMbJn9C1KHj438B0GV9D1J8DuBGHnotwMXFKvO+0h6ePAVxymk4Ftxnrui6TZCAmPCwBzEO7ZMxMEvGfDv582Fjs6luHuuAlTE/IE7q0wj0fsvEx3m84jaRZ8e7F5ndIGmQXxPVu1nptlZk9Lepn43lfRuFMiI+s+6OniNiZ//4lEojiSPkIQxvPG539DyPEdCwWSicRYYXGHTW2FKEXIhClvJ+TO5+H5DIPI7cQFAPJidlGyGgVPjK1z+cmJZjCz/yfpZHxNCCHUt1wEPCDpNOB84M/pXp8YVMxMko4nCLzm8SWqCwBs6bA5tuIcvfgj8PWc95ciRwAAWJneeQLD87r+lDPGxJz3hlgi572Hzewhxxh1sy+hdmX1iJ0n7n01oUa2KxxBqMmI1QJuI+n7WROAsmyN7zvqd/2HG0kGnIRfnOpWYMuU19BpegmdQPlnpLwx8667hahNAEDSXMDp+Lp8ATwBbNoFZZNEqxxK6HDlYRcz61eHxcYws9eAv2Sv4yV9ndD5YxtCspCH9wO/kbRyRZV3D7sBH4vYnNVgB/gEYGbPSzqU8BuKsYakqSs8bHs2f4fYwcw8icNVOI6wsI4tPKt04m4FSfMAmzlMD2val6Jk9/nz8RX/TyKcq4eZmasoPeuUdAJwgqS1CA8/eYuhIbYF7qdZIYrrJB1AOA+9zARsl72mSHoQeAaYhpBgMhfFElqfAuaM2LQhALCew6bqvfsa4Flg9hybVUYkho4Jst/B3lnX0P0JD92e82R/SXekYuxxw0wOmzYEAMY7D+DrGNQEdQaHvM8Sg9JhxJtcnEgk6mc3MzsHQNK2hA3hGBMIXYOXbSG2kahGz/uAmU2RdD4hrlWEi8zsubLztoz73mtmb0jaHzgjYroooXDspCqOlcRbLB3rvtsG46n4e4hngZ8Bh5rZIw2M/0LcpFBssGlmddh4PlPX2cjMzu63E1XJ4tGXApdmSvhrA18g7H9UuaZ8A5hH0tYpwawWPLGmThTi59CGf+cRL9L+DA4BAEnvAZZ2ztkW/yEkc/WiiABArFty7P0lCAlRo807kteAvnUFyUTTj6DaObijpJ+b2cAVmZrZS5IOBw4scfi+g5rwlCXOH4fv736wmd3asEutkp33yxKSHz9CKNLwFBIk/NzltHsX1QQAPH83ry+Dhrd4PHbPGlQWctrtIykm0t4EngJTT6OMxOjMjW/vJK+DXyKRGCdIWpIg3DWz85CbgC+kDtKJRHfInuE8a/9+PrveTFwAwCM2P4jcTrzO5h2Sps1qDcowN74Yxlh9/kmMzk6EGLUnTj3EfMA+2espSVcRxKxvBG6pcI4mEv3gZ4Sc7DwBws9L2sXMXi4zQSaaGhOD/puZXV9mfAcxYccPR96fmPPe74f9/+sJdSKj5RQsL2kWM8vbv8/bb7ox573GyPKeNiMU6lYRoXyMUCPbmf1sM3tI0q+I1y/NRajzPK3MPJkApUcA4woz+2uZOfrE/xHyHTw8Caw/smloonPkrYUKF+tLmpUgmN2L2oTXakmOzxTPb8Vf/H8tsHQq/h9fSNoH2MVpfrCZ/aRJf7qCmb1uZueZ2VqEDu8POg9dgbgSVSUkLQjsFzF7mtCdPtE8P8OX0DoHsEyFebziMDeY2XUV5nFhZk8BlzlMF5HU9YSTXYknUd8JXN6CL26yRfnZ+DrPPgx8wsy+5S3+H4mZXUIQHvGq3H1P0jpl5irAdwnfQRmmIiizLgV8EH+QdYjLCOIIMRrtfJRt9MXUdR+jYneITFQk9pufGl/XrIHEzJ43s10IScRPOQ87RtI7Ss43mdCZKEZt4mGJSngKYFIAoXlkZs/16fV8jZ/DWyzlTfLoN10vUkkkxiqHmtmRQ/9hZhcTL34e4oOEDeNEt4klYp9TYsyzHDYDJwCQcRa+rhn7Sur13TZ5T3sZ8Gw4ztGgD15mc9iMheLvFwlFn5sC7zazPRoq/ockANBVPtBvB+rGzF4xs3PMbCNgSBT1EqBsR+QvAQfX5V8iSr+erbr0TOcR2vxUJnYRYx3in+0x2k1sisWS3yyyy7om53Uei3WL/Rv5v/3hyV6xPZ77+9xZfWvgfyqOMYEgIjCoHEVo9FCEW/CJxHWVvQnPrjHuA77frCvtIWl5SUcBjxC6Ov0AWJdU/N8EXmGTecpOIGkO4h3WISQpjkW8xeMPN+pF//AKACxO6GbV9qtXd7nh5AnHJ/KJdZgdoqk4RCKRGBwWJuTqFIkLL0u8sVQikWiXdxEaFMXo59rX09l39iwmNdbwfO+Gr0lXL9L6L/E2smLcz1Be+G9OQmHoEYQ49vOSrpN0oKS1s8LnRKKzmNmzwK8jZrMC61eYZhPiguhHVxg/xt8JzQZ6sVTk+Ik57w2JOJN1iL+ph90EYMVeg2T5Me/LmadS/UEVzOwxQr5G2eL9KcBmDeZ5VOFgfHlP3lrP0VgXn3jCwOyPSVqTeC3lEK8DG5pZFQHfRMNImpf8fZYyxfpLk1+bX1hUoBd1CABsRLigezZMBPwIWM3MxurGSWIUJG1K6Obs4WxCR5dxRyaKsQz+JJ8dJPVcJFVBkhE6l8S6zO6aLXgSDZN1xjvFab5ck75kRDvb1MiZTrs2PncpMnUfT0fEwzvYBWVHYBWH3T+AFcys8gOYmb1mZtsRlCdjTAWcIKmxjf/sb7IpvsTPOrkC2ADfBts9DfviCWycX1MC5gUOm/VqmKfTZGIYa+IrZngXYZ1dlhcdNl0qAhmXZErdno2aUgIsiXFJrPPyEIOysVqLyGEikSjEr4G9Rvn3nYDHnWPsI6mzz3IJIF6I/3uKrT9eAi522Hk6wHWO7JloP4fp/IQislGHqc2hkQOH51uPYFQpgbGaGWsCAG8Qkrv+QFBO340Qb5nTzNYzszOyDfMm8Tz7daKwIotPd0UA4DxCLLTMy7PJv2sWOxyTmNkLZna6ma0NLAYcjv9ZZDi7Stq2Xu/GJZ57TNcFANrw7w/AoxGbGchPiBriMw6b81oubI8JAAwv8F2S/O88t1tY1ukib77hAgCxfINGRXDzyIpnvXvdMVaTtEFNY7WKmb0IHBk1fCv7dXDfy4WkRfGL1u0wFjq7SFpD0rWEov8dqFZ0kPDRhkhrLOdjiDrFZ7uEd609Vj9/F57vq5L2KMsz3s//RCLh50KKd7ucBvilJK/YTiKRaB5vfP+ZRr3IJ684cTid2KuoGW9cvMrznze/p0yMPjHAZLVbqwBX1TDcdMBKwDcJwp9PSbpF0kGSPpblOCYSXeOnDpsvVRg/1v38ReAXFcbPJYvB/znHpKcAQCbi0av56FO8XQj66tEMMz6R894HyG9E1zcBAAAzu5ry+0DfMbMr6/SnLszsr/iu/ctK+kjJaXrlPg3nH8ClJcdvFUnvB36JT7gUwv7QNQ26lKiHZXPeewO4veYxH6qz1raOxdWy+LqBPg9sZGZ7Z11GE+MESWsDJ+NLyLke2KLP3Rv6ipk9CXwaX6cwgAMacuUrwKciNlcRklUT7eEpioXei/A6aTMAdK3T7kONelGNbYkHJR8HTm/BFzeS5gH2dZi+CKxft8CPmR2FL5lsbmD/OucexZfXgI1pT/zidOCzWcKYJ8HqXw374xEA+G1Nc11EUEPL49NjVOn3LZjZnwkiEJ610RaSynbf8SR1pOSa/jMXPqXuB5p2JDFm8K7nSneXGsETwL9LvjyFpWkDKZFol2vpEcMxs6eAnZ3jTABOktSVbu+Jt5P7tzGz14HzC4x3vrMwxhNzboPCxUpmdh69Vc+H83+SPF0Y68ZTYFKk01NTeJK72hIA+BOhaKLsawYzm2Bm7zWzlcxsCzM73MyuzeINbeHp6DlX4174mAnfhmobAmgHmdk2ZV7AgY7x5yAIcI55zOweM9uN0FXux0DR/cIjJXm6MCeq0XUBgMbJ1rie/Zjc4n5JMwCrOcY5z+NXjcQK6d8zLElzyVzLiACAw+bDw/5/LLbZNwEAQtLXOx12vwZecdgd2qd1YB0chf/+eyv+vc1OkYkR/RRfXPx0M7uoYZcaRdKCki4kJOB9vN/+jDO8zzRV9mhi3ceGGKsFwN7vbqx+/kG93wwn7VGWZ7yf/4lEwk/ZIv53A+dk3TwTiUT/8a79+1n87RUAGAvr2JF4v/cq61/vsUkAYBwyrEZlL+rdY52a0AF3b4K47iOSTpT06SQGkOgKZnYT8JeI2aqSFik6diYkGyucPsPMmn72ziugnzMnv3xleu/L/36UvLA8AYCJOe/l7TdNIf73aYP9Cc0bi3AVcFADvtTJoU67wjkLkhYCVneYHjEIdaKZIPgF+BqWABxtZm021k2UJ69Y/+8lRb7z6jZvLjFeT/IWVHWqsP8FWMbMzqlxTA8DqSQ/lpC0AnAWvoTdO4B1zMyTFDGmMbMXCIWWno5Mq0lasc75JXm6CL8MbD2oHRsGmD/gS4os/PDRZczsQXzdIxdr2pcyZJscnuKXo1vo9FaUb+FbwH7NzEYqvNXFHgSBmBhfl/S+hnwAwMwmZ8nbW9LcJvhLwLZmtpmZvZr9m+c33ZgAQPa9fjhi9hLwuzrmM7NngesiZtMBa9YxX9cxsyuAkxym0wDbl5zGs+YYCx1CBp1FnXb3NelEYkzxhNNuvjomM7PdzWyRMi/izyfQoWKRRGIccBewbt7zi5n9En8h04cJ6vCJweU3BWzPbMyLbvEdh827GH0Drel7mkdhuAvrf088whMvqoPJZvZMhVdX4j2ewsnpMpX/fuP1oZ/FoB5OBDyCmbuNB6HDIczsaTPbmbDJ6ikeHmJa4NisKDNRDs9313UBgLb8O9dh89nI+58knqz8HPV0XSpC7No5Df8tds9LyHqFINoXI+93/qFhSaCdFACQtATwNYfps8DXgcMdtgsQEmIHjixJ8Qin+XcHeC95S8JvOMbTwG4N+9Iokj4H3EJE1CTRGG0IAHhFF1+uMEeX8RYktiUw1zYz9duBGkgFI+UZ7+d/IpFoh4/SXjOVRCKRTxIA6DZtCAB4n//S+m+cYmZvmNnBwOKE+3cTxZhzExpRXgb8Q9LekjziqolE0xwbed+AzUuMuxXxvas21st5AgAAS/X494k5x/x+lH+7kVAzMBor5Ox5L5Ezz10tCCREyQrUN8O3vw/wKLCpmb3RnFfVMbNLgL86TDfKagmL8FXisbtngFMLjts6kqYmNPD01iNdx4DvD40zmijWzxMVaE0AoK6uM6cBK5uZZ/O/brqSVDcuyYoFLwRmdpj/G/i0mbXRrWcgyH4zBzjNN655+qOJd/nap0+/63GNmb1I6JYRY94K03RVWclzAyyrRtw0mxP37VXguBZ8cZN1J9rMYXor8Mum/DCzyQTFyRhTA9s05cdwzOxU4AOEz11X8toU4Azg/Wb25rmQJT/Gin5fBh6qyY/RWN9h8wywn6SD6njhC2SvW+1jDRTfwrcJ8JWSSfCeAqC5S4ybqJe8ANhw7m/Ui8RY4lF8AiC1CABUxHNtS0mAiUQ7PAKs7YzhfJ2wTvTwLUl5QdFEt7kcn0jas5ntIFHqmc/MLmf0zdCRfCNTkH7L4WXmLMC9DpsuJGHM7rBJa99ieAsn52/UCx/eOF+nBQAy8QdPkeQ7gB0adqdzmNntwMeAswsctjLwhWY8SmQkgYXAVcTXN/NL+lDO+55i2ovNrK59eS/3E1/jDBXj5wkA/M2Z1JQnHjwTsHD2/2PX/tav+Vms9Sf4xO5/kHXROogQc4mxV9YZZRD5tcPmNeC3TTvSBJLmxCdGCbCXmbUlSlU7kr5BEDzxrL0TzeAR/4feXbgScbzf3euNetE/pum3A4m+4j3/vdeiRCKR6MUWkrbttxOJRGIg7v3edfdYfAZq47OP9+efhBMzeyRrhrYUIXfdkz9WhkUI8dL7JR0oaSyI1CUGlzOI5zBtNUy0OEpmG6u1uMnM2uhuf1Pk/V6NACfmHHP1yH/I9rRu6GE/AejV3DYv/znme5tMiz+eNhWDk7N6pMNmWnyC2ABImkAQwIhxXMnu6m1zMLCW0/Y/wPp92OMd90jaUiUA1skZdvOSY+Zd1/YtOFYueReaqsXzLwGbm9kWDXR09yaevBo3STSBpHcDV+ArFHuCkDj+SLNeDSQ/IXQNiLGuaup4I2lD4oWeNxF8S/SHfzhs3l1hfO/iyqsUWReehO55GveiIAoPdh5lp1PMzFOA2yafx5fwc0DTHVzM7A/ARQ7TL0mqooDqxsweNrNNCAmQJ+H/7YzkSeDHwOJmtqmZPTji/fmJq/P+MVOda4oNHDbzEjoW1fX6mGPOz0rydi0YaLLrwykO07mBvKTjXngKgDp3jR2H9ArADec14O6mHUmMDbL79z8dph9o2hcHgxIoTSTGOi8D65nZfR7jLNbjEfOCsAl0kqSUlDyAmNmrwMUO099ktoNElefdbzlsZgd2GfFvTRde3uewWaRhHzws6LDpdPF3B/E8+wEs1qgXPhaOmyDggaYdqYFjCPGfGLurd0eEMUsmersxcGKBw5KSfnk895h+CQB4523FvwLrm7wif0+SyLk+j+oj27uPFSwPFePnxRrvcE6ZJwAA/xUZeG+ulW8NUzebAp9w2N1HiPNjZi/gE3mfHjistGf9xVMoMKXpvaMGOQyYy2F3LWF/aCCRtCfwA8pdV+8nCPj8CNgWWJvQ+XU5wrOE5+W5xo4HvB06qyQSevcQx2KBDfgLW1rZY04kWiad/4lEok1+LGmVfjuRSIxzvPd+73NIE8zotBuLxVRtPP+l9V+iEGZ2h5ltS8j/3Qn4E/U1RRvODMA3gb9LqrvxZSLhwsxeJjQ4zmMBYNUCw65KXFy/lQaRZvYo+XvnS438B0mzAUv3sH8C+FuP994mDDCMXnsqeYLTf8x5rzUUCtrPwLc/ACFn/4zsuK5zOqHpT4xtJXnrxNYhLu49mZAv0WkkbQ7s6jR/EVjHzJ5o0KVE4i30TKDPisjKqnv9HfiImf2i5PExPB3lobqIQaIEkmYlFGku6DB/HljDzFKR0ihki8wzHaYL4Pu+c1HoNnZUxOwNYE9gVklz1P0CPIWcUxUYcywWDjzlsKmikOdV8Wu76PZZh403ONgm6xIvmhM+Va22yVM5GuJZ4PymHcnwJFHNCbS6mWRmd5rZVwjdEdcCDgEuIST8vTDC/FmCiMc5wH7Ax4F3mdnOZvavHlP0UsIbznXFPfchaV5ghabGr8gsFAu0DDq/ctpNLDG2pwhkIUljNflrUPBc324bwKK6RH/xiEstrQLKtg3hmb/fPiYS44ENzayo6vLPCN1TPSxFEINKDCbnOGzOatyL+imd4GBm1wOXOkx3k+QRUq0Lz/p/8ca9yCHbIJ3PYZoEAApgZs8RNupjLNq0Lw48HZEfbkCAunYyNftY3B1CXGv7ht3pJFmB6NeB3zsPWV6SJ2aWKEe/nq06JQCQcZ7DZlQBAElLE/bv8ngV31qhCWL30PdmseE5c2y8AgB3kV8wvmR2748lVLV6389EWX7oNP8/+//snWeYLFW1ht+PHAQJKuEKIqCIEkQyKBklSJYoOQcRUDIokgXJSM6KSM4IEg85S86Sc86Zc9b9sffgcM6ZrlXdtaurZ/b7POe5V3p17TUz3VV7r/AtqX9twvEMXBjXnxXNzDtNpEl49sg92fxvZgsD6zhMPwM271WRAzNbljB9rQw3AJsAM0r6jqRVJe0k6ThJl0u6XdJ/JD3l+Ue6yXK9hlcAqpP6J+97vbVYvYb35584qRfdY3i3Hch0Fe/nf8iJ0WUyGTd/B8532o4NnGlmRQ0gmUwmHR857b6e1IvWeAZSgf9n6SW8v/c6zn+D9fyTaRNJ70o6UtI8BDGALQix66r7sb4NnGVmZ5nZYI1DZJrNMRTHrjcocb31Cl5/h3rrZFrVdI0iAECoSR6oLnxYi/h3KQGAKDTw7RbvaYQAALAf8LOS71kY2DOBL5US68o9Q4CnonigcB+bOGzOkdTooQ5m9hP8Qh0GbCTp/oQuZTKjUFTA8XYb17wAmE9SkZJ/J3iDzp7J6ZkKiUov5wJzOMw/BpaTdE9ar3qefzvt2pn2OzKHAFMW2IxJSO6/lejf2g4/py1xvcUd1+s1PAIAY3UgfjByw/JA1B0E9AgAdFOZdCC2d9hcLslTCFY3ngns10jyTHqpgqvxqZsumNqR0SHpE0lXSNpB0jKSvitpYkkCvq7ApJJmkvQrSXtKullSUdGFZ7rQjRX8CAOxCt2b+uVhpW47UCN34AuoztXGtT0NQONQXLScSYSZTY5vCvudqX3JDDo8e5Cv0f0pwJ5nURYAyGTS441RfElMBm2Ev7D/D2bWSvU501z+BXzY4vXX8YtBDCZ2pziB/DWC4GYfqc9gnuf/xLHpr1vMAHhU0rOwbHnudth44vupmc1hc1dyL6rjcOBdh932seF0yCHpc2B1/LnJVRO6M5jxPGO6FQtsogDAZRTH4xaMcZuR+aXj+lfHafHdoFAAgNbTWMApABCLip5sYTIroaColfjocOBFz3oV8geKJ5cA3AOc2f8/xLzJrs51DjezukW3O8UzTdw7cbwxxL/DsfjuM/s3NLdXiJlNBpyCL5ZmwOnAjyUtLOlESa2+z5ny1CEA4BXN6mYTUEq8jUODtQHG8/O/p2aTBUPbx/v9H6yf/0wm0xknAOsTmpq8e9+pgPN68IyTyQwWvM9+bxN+CrznjiwA0B5D/fyXqQBJL0k6VtLShLjFXMC2wDn4ehg8rAZcP0BsPZNJKG8dJQAAIABJREFUhqRHgesLzFY2s8JnpZlNSHEN+6kKQ2HrolUj/ffNbORem1Y9CsNavHYnYRjw6JhnNPnuWRg47v4xfsHpZETRXE/fz+jYxcw8gze7zTH46ve2LjIws2mAJR3XauKQ1C8xsymBi/D3oe0pyTvQMZOpjKKE3sslrvUFsLOklRWmyKTEo/ZkwKuJ/cj0I06EPB3fTXw4sLakG9J6NSjwqhn9sJNFzGwxihWoMs3A2zTRrgDAK/hU4Kdq8/rt4mky9zSH14aZLYKvif7QxK6Uxsymp1gQBGps3pD0HnCbw/SnqX0pS/S9XRYreP0L4NYOrl+EV8WtW6wwVKbSKxTCP+MwbWdyqFe8y9OAnknDMvgKMm9J7Uhm0HGT026hpF4U4/n8N1mwJpMZ0kh6Bvij03wc4LQORO0yXSImLa9sYXKO6hOQq5KOJnpKupsgmlvEb/o13Kd+pt2FryHLE9NIxTwOm0+AB1I7MgjxNM1382/fx9wOm54RAIh5s2MdppMTpqoMSSS9hn/atkc0MzMqnzpsJojT2OvGW3TaSnCoUiR9QHEMfExGnxtd1rGEZ4+QiiIBgKmpSADAYTsbQXCgFS/F+GgtmNn3gN86zbeXNMreStJF+HIo38NRTNUwPHvkjvbRXeIPwA8cdk8Af07sS0r2Br7psHsdWELSOpLuS+zTUMbbdNtJgf3b+L6Tg7UB+A2n3WD9+T1F5hPHgS+ZwcdQ//xnMpn2OQbYXNKIeDZeCZ+4JcB8wPHJPMtkMq14zWnXzeZvz9oj8O9jegnv772T85/3vVkAIONC0heS7pZ0uKTVCLWpswCbAafhq2cdiJ8Al5rZeJ17msmU4piC18cniJYXsSrFvY0nujyqjla9Z2Myas/Zoi3srxvohVj7c/MAL4/FqPUGrfJNd9eZ/xkdsZn9NNqv1RFwiplNV5lTCZD0NkEcuIgFzKxoGOEmtBb2BrhF0u0u57pAfP5cCHiHo1xIyK9kMrVTlQDA88BCkrxFOZ3iUcB+W2GaQKY+DsY3ccWATSSdn9ifQYGkV/E1fH+jw6U2JjfM9AqewIvRpgpkvHc+5zCdtp3rd4BHddSrXlkXHiX6B4BrUjvSBt912nmmhlfJUw4br++Nx8zmAWYsMLtbiaZEmdkUwIIprl0hU9CMxoS68AhctbMneBBf8fR8bVy7MsxsLTPbqeDfGt30MSGegOJw4IrUjmQGHbfiawD5eWpHCmjylMpMpmq8U1F6rZH6cAZO/ozMHLSvqpzpLue1eO2s2ryolioal/5IsdjieMAuFaxVSDxDPuow7eZ50HP2uK/bieAe5U6HzTRmVtSImQwzmxSYwWF6d2pfKuYQfM03O5iZRwh7sHIqPoHa2cwsFymWxyNUKjrPObWDV3T4naRejIqnSf8rzf5m9k2KxWxGAJe161QFFAkA/B+tC7LeBV4ssV4rAYAZKI6DF/lbNYfjO5tdIKlVk//2+ISX/mhmU7s8awaePbLn524MZjYTvnOoAVtI6mQaX9eI02w2cpi+TqgBqk0IfAjjzWu+0u4CMf//usPUW+jYa7zgtJs+qRfdw/O3h0GUY898BW/t53QpnchkMj3HgZK27C90JulxwnApb7x8XTPbPIl3mUxmQGJTlyf+54m/p6IoBgTwiqRGDQOrCM+Z41OCiFu7vFShL5nMKERxoIckHS9pfUnfBX4M7AE80sYl56OBQ/R6HO9+bSjX2Z1P8f1yA8d1ioavDpPkHc5WFXfRup5s9r7/J+ZZZx/A7jWKa0oGFAhgVCH3WVrYegfmJiEOqDmTINTfCZMBZ/aAyOah+GoOtxzohSgkv6HjGod5neoSfwXmddo+DKw3OkHwTKYOiqY3eBpAnwTmldSJ2lhZPIVnzyf3IvMlZrYrsK3TfHtJHtWYzP94m2J1qE7VmIfyJr7X8BQ1ftrh5uIJihO8P+rg+u0wqcPGqzScHDObFfiFw/RgSU2cgjKZ085bMFAVHpXabhSnpmJ9h01KQZ0VKVZnawIr4Z9g3et4khsewZSvIOkLM7sTWKTAdIGy166YgyguBj+JEIwZNJjZtxj9JLmRubnmc1lmECDpYzO7i+IGvyXMbKwuTm72nFeKRA4zmS8xs58Cv3SYHimpTFNLFXibPupufOoISSPMbGPgHkKjcxF7mNklkspMFc10n0sJhSkjN0u9zNDZs4+CpIfM7J/A2gWmm5jZwdQTp7uDUdXdR2aRGvwYiJ86bHqt+bsp3E4o/Cj6nP0cn/p7Chaj2L8R+MQMGoOk18zsRIonSn8D2JxwBq4UM1sAWN5heoqkx6pe34OkV83sfoIgUCvGJMSw703v1aDCu4ecgg4aDdtkSqfdW0m9GJWLgWNpHSddxszGlNQnXrEsxWfUmyXV/Tvuj0cAoNXZ5IGSuY1WRW5jUhz7qk0AwMxWBJZ2mH4B7NbKQNI9ZnYmsFbBtSYiTJRf1+Vk9/HkIJuY+xotZjYGYRKTR/ThVElNFPb2sim+n3MjSR7RsEzneHPu3ibegXieMKWvCl96jdeAz4GxC+xaCd/0Mh6BfQgxgq6cATLpkPSumb1P8bClVoX4mUxmaHGApJ1H94Kki8zsQHwDcQCOMLOHJd1QnXuZTMbBcxQ/24tiryn5scPG07/Si3j2XK90Uk8c938fAhMWmA7W80+mC0i6D7jPzPYmTBPfFliuxCU2M7MzJN2YxMGhh1dAxVO3MyiJ9dInA7u3MJvXzH4o6eHRvWhm3wEWKljq2HZ9bBdJH5rZIwx8n+/f8L8wA+e+rnM8j1oJACwy0v9urAAAISfvqY0fQXHub15gf+D3nTqVCklPm9kFFA9/XsvMdpY0ut6dZSnu630Wn8h6VzCz3+ETS4aQm15ekkdoK5NJQtHNx6M2M34XmkyKChPB53umAsxsbWAfp/lekg5J6c8gxbMR904IzPQ+nkZ4T5N0KzwNFj8wszo/d56G9Lobc1qxE8WFyq/S3AmIns8Z1F9s+YbDZqIeUE8rJCrrrVlkRusJm52ycsJrV0mv+FkFEzhs2p08dLvDZt6a7/1fYmZT4JsEN9qAW4+zFeC5r12Y2pHMoMVTtDwZoQmsW3ia+7MAQKYM3ybs2Yv+/aQLvnmELz8HPkjtSNXE5oH9nObjAqdFpeVMjyDpXUIib8mR/i3dwyrIVTUu/YHiGN/YwB+pRwCgVTK2j9nNrPYJgDFZPpvDNBeOtoGkVwnK/0V4msRT4SkKukOSJ07UNP6CL96/k5kViQK3w4z49kBlCrNS8IDTbjAJgdaFtwHMM4mrar7ntHsyqRcjEQtbbikwm4yvTohY1nHpbhe9PFPw+jTATC1eL5uLL8o7NUIAwMzGB7y57GMkeaZa7YYvZru2mRUVDDYFzx65ZwQAgE3wCVC9ib/Zqal49njXS7okuSeZPjwNIG9L6lSU3XPfnilObxpURIEej6DFYG2A8e6dikSCM72L5/M/WAVAMplMOf4wUPN/P3YF/u283tjA2Wb27c7cymQyJbnfYTN7N/b+Me7SKt7Ux32pfakbMxO+818VYnxD+fyT6SKSTNK1kpYnxHsf976VkEvPVMOnTrsioZDBzvEUT0Ffv8Vr69K6VvF1ulfP26oWvH8dxsIt7IY51rmHgYXH5zaz/p+xVs/Aron+m9nywNYO0w8JQwxeddhuZ2YrdeRYev7isBkX2HCA1zZxvP+vXRw21hIzWwI4wGn+BfArSbXmpzMDI+k0lQCYv+CS05S5XrxmqwFAHwNjt3HNlhQd3jwJoKnN7Buqt9AqCwA0BDNbhjAFyFOUeqykPRK71BFmth3FX+4XJP2uDn/64Znk+2FyL4YgZrYvxUWEe6neiZCewuuXOlzjRqDocz4e4fsyrMO1vHgSjs8n98KBmU0DrOYwPVJSu426TaHuAECRMn0fvVRYNhA7Unz/v0GJDhRmNilBjbOIS2i/4dzLcrRWm5zOzH4saShMfJvCYdPunuBqiosXJwSWAC5rc41O8DZg/iepFzUTGz62cJh+Avw9sTuZwcs/Cc2GRawH/CuxLwPhae6vo1kyM3h4xmk3XUIfRiEm/j1nvmfVgfJ/l9kfWBHfs/0nwHbAgUk9ylSKpNu67UPFVPJdk/SMmZ1KmLjZirXxifN0yqWERFVRjmBF4ND07oyyZhGf4y80zYzKxcDcBTZLmtn4kj6uw6E+zGxMfFOXu7Uv7QhJL5jZ34CNC0y/AWwGHFyxC97GsXmLTZLi9XPypF4MTl4BPBNAf0pa4dHR8TOHzZuS6halhdCsX+TfssAtUcCqqJkd4KKOveqMoob6IpFgj5B0f54gFB4OJC5aJPxZiwAAIS7vOZO9D+zruWDcBx4J7FBkChxmZnMrNKs2GY+4V08IgEXh2f2d5tup8ybsrmFmk+E7i5+W2pfMV/A0XVQhfHwvoTC5FeMSBHk84ia9xv0U/65/ZGZjS/q8Dodq5GmCqH/RwIUlavAl0x3upzgGMJOZjTcI6lcymUz7bCPpiCIjSSPMbB2CwOi0jutOAZxjZotI8jajZTKZzrgbWKvAZjxgZvxCrFUxG8V5KRhktV+R7wITO+yqOI89CMxZYDODmU0k6f0K1stkRkHS1WY2L3A+vjrkJcxsWknPJXZtKODN7Q5pAQBJz5vZZcAKLczWNbPdBogV/bpgiRO7uP+9g4Fz0TP3+/9bxQoKB0pIGm5mNzB60dmxCc/9W81sSgbO6b4uySteXilmNgPwN3w1p1tLut7MNiDUz7d6j4CTzey+bv1sRUi608xuolgYeXMzO1D9Br7EPqmlCt73AXBih24mIQ5B+Se+PSmEs7JnwEqmubTKi70h6YU2rjlHi9fuUwLxi6IC+nvxJWY9imSVEKfheiahDYUGsK5iZnMTJld7bnwXAL9J61ElzAasWvCvaBpzpcSCR88k7nwIT8NPCYXZrf7VpoQePw+tHhZ9dFoIdSO+AvdapsBGBbCZCw2bI/6yA+Hg0oqPgONq8KVdvA3E30zqxah8y2Hzaa8XZpjZVMA2DtOUh6PlKf4cPwesIGm1lP+Aqxz+Nl0tr2PMbAJ8TYivtLnEMMAj6tWt3/UvHDafEYJXg4ld8N1rz6lZlC0ziFCYyO1JoK5gZnU/+/vwBFo9IgGZTB8P44t5/SC1IyMxK75GtiqU/7tCDHBuRGje9bCXmeUJVJnBwt4UC6iNSQ3xltg8ebPDtChxnYLVHTY3ShpITT5TjGei64TAGqkdGQ1L4Yv/9PJU2v0pnigBsEOMBVSJt8ig2wIA3oTooJtQm5ooIuWZAlbrFPIohOXJtXSr+PcCh80v4/9dGPh6ge293S76kfQeA09m8VBKACCeA7wTn0bHMx2814WZTUtxk34f+0ryTHrpYz/C9Pgi5qBYJKYJeHKIvSJadzi+XPww4PS0riTnR/hibDeldiQTMLPZAM9EXM+zuwjvJK1Wk796mbsdNhMQJnkNKuL+7xaH6exm5qnJyPQenhrKcYDFUzuSyWQajVsEKopirYC/uWw+woTVTCZTD62m/vanltrfkShqFuvD+zP0Er8sNgGqOf959n9j4BNjzmTaJuZylwf+6zEnfyar4jWn3deSetEbHFPw+hSM5tllZgsCM7V43wjghA786pRWNdRTmFmfSPhAtVgvS3rMuVarxui+PtNWtXddeeab2bjA2RTn8yDUZp8CIOly4EjHeyYBzorrNBXPIILvMGq8eCNCXVMrTmliPU/87F9M8YDgPk6VdHRClzL10Kr/8q42r9lKVCBJPUPLwhhJb5rZ/cCPC66zKPVNgF6Y4qTkF+SkZFLMbEbClCjPxu8aYM0emFQAvib6b5rZGP1VbBIzOb5Glk4nn99O8YO4DuaieLLGh/gnPLXbBNnHkxQXus1N2ADWwQ/wKa51FASK9/8HCKIYrVgtKpulLuKZA9/ns+viL3F6xgYO09Ma3qj5ttPOM428SjzrdWMCVGXEYtdjKP6uv0jae8/KDpuLapo8ewmwXIHNSsAeNfjSTRbGV9juDbx8BUlfmNnFwIYFpiuZ2W8lfdTOOu0QvxetlDb7uKNOv1ITFSZ/5zTPQYZMp5xB8QSwcQmfyV3SuzMKubk/UymS3jOzxygWGlumDn/64S2yrCLx3zUk3WtmhwA7OczHBU4yswV7JLaUGXxUduaJk7+PBbat6podcjHFzR1zmtl8km6rwyEzmx2Y32F6aWpfBjOS7jOzJwjTPVuxBXBKDS71Z1OHzbPAfakdSYWkp8zsLIoFNqYANgMOrXD5J4D3KJ40NI2ZzSnJ0yiVAk8jJoSfJVOeGylutp/dzKaS9HIdDhEmUnkE525M7cjoiBPc7wNmb2E2m5l9B1jWcckLq/GsY54lFCG1QzuCzA/im3Q9OjoVvvZwGL4c3Av4Cry+RNI7ZrYPvnv6fmZ2XsNzSJ48eV259LYxs6XwiU99CmxeUz4kJUV7vz7ypLX68OTioJr6p9vx7QOXBo6tYD0X8QxY1AR0r6R/d7jUtU67lYFO12oi1+NrOFoP2DmxL5n6Gea0W4kwxS6TyWQKiXmezQgTMz2sa2a3Sqptn5HJDGFuJ9RPTlZgtxK+xq8q8QydeYkez4UPwKpOuyrOf8OcdqtQX+17pkbMbHxgvCKzOpozJX1gZtvji4kX9aylxFOLMn5yL6rhNUJstqjWbrr0rjSeKwnCxd9vYbMBowrTr1dw3SskPd2JYx3yIGEC+0C9fjOa2esMvFcYVmKtVgIAfQIDrWrzujXw7XCKa2Uh9OhtNtJ/2xH4GcVDXecCDgK2Lu1dPVxEGEBUNBxpHeLfOQ6zLeqTMuCojr2rGDMbgyDy7B2AfguweTqPMjVSabN+7GlptWe5p+w1PXgaiK6leDO1MvU1XK3isPlPnFqQSUCcSnwVvik8dwArSvo0rVeV8YzDZkzCQ+7htK58SVEDdh9PdrKIpMMIhS1dxcxOJKgCteL1OBG6Dv5D8SblZ3U4EvEq7lfRCH8uxZ+/GYCfkr7ozpOM/pCSE2cS8VuKxVGMksVhXeAJp938wD9TOtJH3Hgv4DD1+t5Ufouv0flgSZ+lcMDMvgYs6TC9KMX6o+FiQrFRq4DUrGb2fUmdTJFqOt7Jmw90sMZ5FAsATAasTb0K7XPgCzg2pXi6Y8xsLODvFAfjAS6rqyErM6g5HdiH4s/cb8zs4C4UoXumkzVB0CzTW9xCsQDAdGb2Y0l1iY0t77RrlUDpFfYg/LyeyWLzAtsREiOZTN1U3eSzLyH2NVGRYQ2cQZhEPk6B3VZAXfvNLRw2nwNnpnZkCHAsxcV9c5vZApI80yI7xsymw9c4e8IgaMDbF1iT4uKbHc3suKrE7iSNMLM78YkObYRvUmoKigoN+mhyc2yTGUZxY9eYBEGOPZN7Exi5eGYgvM17KbiA1gIAEJomPfexCzp3pxKepfhnGh0vx4mPZWlHNADCfqxTIfTWC5gtjq8IHWDnNu/LRwFbUtyEPRnhu7dVG2vUhec53OhntZlNgL8Ibe8SE4+ajGeakREGbmTqwXvf6bgBRNLnZnYtsGKB6VJmNpmkugTXPQLfB9J5U/79hOERUxbYrWxmW0kabN+Dcwm/x6I4+yZmto+kD2rwKVMfD+H7/K9oZpsPws9/JpNJhKS/m9nPgE2cbznCzB6WdENKvzKZoU4cAHMlsEaB6YJm9kNJtdTCm9lc+OJQlw+C+P9XMLMp8dW9viqpitrX+wmx86Lptr80swklfVjBmplmsSPwpwIbM7MJJH1Sgz+XA+9SHJuapgZfBuJjh41XvLqrSBpuZi8D/1dg6qnVGdRIMjM7AfhLC7PlzGwKSa8CmNl4FIu6dFX0Kn4G/sPAQ1BnpPVAxmEllmv1zOlrtG6V961dAMDMVseXl/wCWEPSV4ZqSvo0XuM/FPcM/cbMbpP0j/a8TUf8/B9B8fC5VczsNzEvtgwwbYH9JQ3Np+yFvy7zOWClHuqDzQyAmY3D/8RIRkc7zfrT03pPUFpUwINngp5nyvYsZuZVC28bMxsbXxPo5al9GaqY2cQEtd/pHOYPAUv3WGLoUaedp3inKrwN34NR8bAJ3OywmdfM6joEre+wGQ7cWsFaZ+ArztmmgrUGJDZAruMwvT5VM7SXWCzkKci6RNIjqf3pkKcJE02K+EVqR/oxFz7xGe+9vHHEIsMDHKYvkbb5elmK1SrfAWpJysXAyZ0OU49wQk9iZjPhUwI24OoOlroSnyDS1lHBrC48CogGnJ/akRrZH9/k0xHA7ol9yQwB4r32ZIfp1yhOEqXAE7+o876UGRx4Yl5QrNxcCWY2J7CIw/QjfGfVRhOD5Bvhnwq5j5n9MKFLmcxAVFpkFEV0GiEKKOkVgghYEWuaWbvTet2Y2fT4Yl/n1ziRejBzMkFQs4iDajz/7UexqNNnwIk1+JKUGBv0iNhNib+I2otXPG8DM5u64rULicKUc3lMqU+oebBxLfCmw26zmJtNiplNQhDEKOIFqsl9tIunaX9ripu7n5bUlJzes22+r10x5nYFAF6vSghldMQ8lFck/R7aFEWW9Dmwq9N8MzPr5sSrInpeAIAgsjC9w+4xBo8Y3YQOGwGTp3Yk7i89v/9uMI6ZfTP1IrH5xTMM4hFJz1W07LkOm3GAjStaz4NH+OnFTheJDUSeyebfAJbrdL2mIekZwiTYIiYDtk/rTaZu4uffEwufnBry7TXnmDOZTHq2wp+zGhs428y+ndCfTCYT8E51r1N88LdOu8E4kX4DfDUvnQqfAUEIGLjCYToBvnrETO/xjsNGhCbg5MTa/v86TIsaaVPiyZmOE3NYvYAnf5a89yXG2Ipq0bvNKUArIYyxgLX6/e+VgEla2D+Pvx4tJa0a678HtKr/cA+liTGH6wd4uU8AYKDPmgF3edeqgtj36u2/2GOgQQlRsOd3zusca2Ze8fu6ORUoEvyemP+JynrqFro+lHhkzGxl/Pm5j4FVJL2W0KVMfcwCjNvi9Xaa9X/S4rXPaD8f3hLPYWIY4Cmm8zTldMpShGRDEXn6TwKi8sW5hAmsRTwPLFOjKnhV3Imv8LyWBsM47dpzuH48F70mo0+VqojkDSGx0Hpuh+mdIytNtYOkJ/ElgVdKXIS0FOApNK0k+NUhG1OsmglwaGpHOiWqunv+/t+vsQnnV067nlSKNrNfAJfQepPZxx8TK6+u7LC5NBYs1sUlDhvvpJSeIhZBHEPxVE6Au/qUJtshfvePcJjOgk+cpWNiE9DaDtPrJT2d2p86MLNt8BdYnV7jVOrM4OfPhABEEVuY2UAKsanwFITlorFMWa6idRKnj81rKkby3vsvkuRRH288km4l7HM8jAucaGZFjaGZTC/wF6Dj2E1FeKaejkk9SboD8Z2JvfeNTAskvYMvlzI//phM25jZPBRPJIIgANH2ubdh7I2vOXJnM6uyOOZ8fHmQ8fBPRq6SVQmFh0U8Lend1M4MRmJMz9PMPhWwYWJ3ALbD15R6Tixe7Qqxaf/JAjNPrNzzu6+LugUA2n1fu3562Zb/FaIVsUMnn0NJ5+JrjhkT+GuDG+Q8v4OufV+LiDlXj8D5CGDjQTTlxftzzJDUi8B6+AR/usHYBIGI1OzstPOItnm5AHjfYbdNFL5PShxAsozDtKqJOV4Bl91quP8unvj6o8Nb3Lx9zM3VipmNEevSMmnwNtLtUsPn3yP+lclkeoQYY1gT8DZHTAGca2aeOHAmk2mfSwFPHH0jMyua4toxcfDNWoWGYWhNJ4NvypI87mJmExJiTx6qPP9593875fz7oOQJp513SGUVeAaKdrMOxis+2GqKcJPwCADMZGaenodO2JkQa2sskt4Ezikw658rK+oZOkHS8M68qoRWAgAzMHBO5OXY3F6GgQQDpogiEAM1v/83/v5rwczGIzwfJ3aYX0/BQEdJJ+CLN36NIISWPN5allh/eLTDdB0z+z+KY7kPEnqQG4OZzQ78Dd++z4ANJdUqTJFJSqv+53cIQ3OrvOZDqXKKhQIA8eHjOQRsUkMxtCcBdo+knp3821RiI/rpwJIO89eBJStUIa8NSa/jSx4uaGaLpvYHWAWYyWF3ZWpHhirxHugpxtrczKZM7I43CHRxhWt6JtKNARySIgkYr+lRW/oCOKvq9csQJ8R4lLz+I2lYYneq4hqn3R+TegGY2VTAlh5T/H43BjPbALgIn9LhnQTFtVS+jAcs7TC9KJUPA+C5t83bjcl0NfAbwLvv8BbvtOJEwFNAf0AszkrNHgQVzSKOTe1IHZjZb4FDnOYvE4rkM5lKkPQ88A+H6RiEJtw67gH916zCJpP5EknvU5zEgdD89qeUvpjZwsBqTvPTUvrSBXYCnnLazo9/OkQmUxWVTy6NjdfePV9SJN0M3O0wXczMfp3KDzP7JT4xugckDaQgnynPwYS4WhGHx9hMEmIB3IkUJ12NHhDW9BLF3DyiplPiU9P3rvsSvumvACuamUeYoRLiZ8Grvt+E6Rm9jCf2D3CgmU2Tyok48WInh+kImiEAc2EF1xgMAgDtTi54Ct8kpZFJJgBgZlMAuzvNL5JURf7h9/j2mAvS3AY5j/+V76OrINY9HIev8PQESTcldqlOvMMbfpHSCTObGTg85RoVsImZzZ/q4ma2IL7zD1Q4/VLSR/iKUqcGdqxq3RasD0xUYPM+vjOrh2HACw67OQm+JSGKex2c6votOAN4xWE3IXBarH+ok0OAG1LuPYc41+D7+6f+/E9MQQF9JpPpPWKOeQ18cUaAeammtiWTyQxAFOc42WE6LvUIQB9JEDss4viaBUBnqKEXYGfgWw67d6i2F+BKwNNU+QNgswrXHR0bJb5+ZlT+gy82t25qR/rhEZqrrRF4NDzvtFssqRfVMdqp5SMxFv74VGnicEFP3X8TKMo/zWJms8Vm9iVa2H0OnFSdWx3RSgDge8CsA7x2bRtrDSS5EXRNAAAgAElEQVQAADAPMFCfqWdQZZUcA3iGnr4NrOsUctiSIGBUxKzUs+dqh6MoFmD5OaFfqGg/d7CkxuSGzGxywnAEjxA9wH6S8kDywUWrZv172vy8trpmVWLGo+Atjj+KYoX28YB9OnNnYMxsFWABh2k3ppEMBQ7BN4n+PWApSY8l9icl3sK3A2KBQBKiot6fnOanp/IjA/iS4F8nYZLWzOakWDEMwr26ys/DWcB/HXaLAltVuG4f6xMaPIq4vAGTv9YAvuOw66Ui5bPxBYFWNTPPgagT9sK3+b5Wkidx3QjM7Ftmdj4h4O5Rt/6UoCyWUh3wFxQX23yKr0C9MiQ9QLHK1hjA8jW4Uxtmth7+Q/8bhOKdjojNkJ499ZROu7Yxs1/hCzQ/STik9yxmNraZHUoofPTuMTeX5C3azGS8/IFwrivie8D5NU7kmdRh09SpeJlm4y0w2tDMvA36pTCzSQhKs577/4PAVSn86BaSPgQ2xd8cso+ZfS+hS5nMyKRKTh2GfypSanZw2p0YY1SVYmbTEYTuPM/yXapefygj6RHgBIfpVMB5Cfd+RzNwkUF/zpHUqlihF9nLabdzbBSqiv3w39+OriH218dRwIxOW4+QU2YA4jT7YQ7TiYFjEgkAj0kohPLERS9uY+JICjpt3n8NuLUKRyqi3cb6B9t5UyzgbkfIP5kAAPAXQo6viC/wC5S0RNLt+Ce6HVyzAKMXTzF+nQX7ZdgKX+7xVQbf3tN7H13HzJJM5opTgi7GN2Wpm4wFnG5mnvtDKeKkp+PxnX9uifmxKjkQ8OQZd47TkZJgZt8B9nSYXhwnUXVMzK/+1Wl+cDyrpuBwfI0PlRInD3lrWn5KjUIdZrYTsA2hIfRuM2tVTJ9pA0lf4BdTT/n5P5qBC/8zmUwPI+k6yp2Z1jWzLVL5k8lkgFCn6hFiXCmxAPSm+IYPvo1vAm2VCDg+xdkPvpw4u73T/DRJn1S1dtz/e/I/APvGM1rlmNkswL4prp0ZmFhDfY/DdB4zWyG1P7ER3HMOaCvuXBHe+Evy31dFDMOXB1w9xeJxEN0ZhB7DxiPpVoqbNhcjNP+3aoC+KAqxdx1JzzKwEOBMBAGY0TGsjeUeabHWrxg4DnpnG2u1hZltiE/w0IANvMOQ4/CP1QniD0VsEnsCGkUcovz3ArMxCLV9rXgVX99dLcQcx7n447BXEAYWZgYXP2nxWrvN+i1FBdq8ZiGuxpJYUOGZaLCemVWuBBWV9z2JhdfwTSvMlMDMdiUkWor4BFheUjLFipo4mdDYWMTcwJ8T+vFn4IcOuwdioUgmETFA7bkRr5XoHvg1wqbKo4B5RVTVrYSYBPeqbx9kZj+tau144Pc2vXZDIX9kfueweYkKpzSkRtKjwI0O0zGAs6NKVuXE75VXBbQnFKLNbBIz24UwKWmlEm/dUVLqIJdH0fGa2CReNxc7bMr8PhuLmY1hZr8nFEF7m8H3iNNbqmB/fFNQ1o6f5cqJhSXeRMSeUb26J4kTj24Bti3xtoMleb4TmUwpJL2IvzhjccIkoCQFwX2Y2ar4xECSCbRlBi9xkt8NHlPgpJigrgwzG5dw3pvW+ZZ9a556UAtximZRMqGPCYBTU4oyZjIjkUQAQNIHNGTiWYx9XeowHQ8418xmqGrtOFX+EsATU7hO0mVVrZ35kj0JUzWLmJ+w96tMBMDMZGYH4tvrfQbsVtXaTSEWlFzvMJ2KCqfkSLoPOM1pPilwtZnNVtX6o8PMtsYnggshGeuJW2Za8yen3bKkKdI8Cp/4+3CaU3BxK/ByB++/KLG4a1naaaw34OEO1mwnvp1EAMDMFgDWdpofK6mTn3tkdsKXj56SioQHKsazR27MlJc+4t5zb6f5NpLeTulPF7gHXyHi9EDlzVhm9gPgZvxiP+ATiUnF9MBFsWC5EqKgzvH46kAggQizpCfxFWKOS8j/fqNqH+Lv9B/AJA7zIyte/njgA4fdpMBZsVajMmLz0yZVXrMkRxJEtT1saWbJBgHBl2fC/fhq7dU3gSvMbJcUIlRDnGMJtX1FpPr87wgkay7MZDKN4CDK1cUdbmYLp3ImkxnqxGYu75niODNr1RzTFma2IHCE0/xQSe9W7YODGYEzolhpZZjZZIR7oudMafjFmspwFL44wCSE/V+VIsTESdkXE/L7mfrxTjA+wcxSi9TtgFMIMbEfrXgEn2jKvGa2VGpnOkXSa8BdDtNFzWyeKteOdYRnAsmEJRNxXMHrixIEADq5Rt0M1GD/LWCge/6wsovECdrXDfByK9GMWoT/Y62fN8b4V0kXlbl+HGDgzTscFXukmsbBdC7qfEwUIGoKRwCLOG0fBdZoWA430yFxf9+qxqV0s76ZfRuYooVJsn7qMoWy++BTgT7GzOZr059RMLMJCaob/+cwP7BK9bMMmNnahL99EcOBtSV5CtUaTQx6nOI03yEWpVVKVBjyqv55NwuZzvCKPZxkZpU1n8bk93nAzM637FfV2v04DbjPYTcuoQhirk4XjMGEy/FNf7ip2/ceM1ua1ko+fRwh6bPU/lSM97P/PUITQKXBOjNbnNAA7An+PELDJ4Cb2axmdgChYHE/oEzRzKmSvAHxtoiBl186TEsdbivkEofNombmmRLdWOJE2+sIyVFvcuEeKgwexWYk7xTQfareD8UD0pX4ir/uIqiF9hxmNpmZ/Zlw4Cvz/LyCUCScyaTiGOA2p+0awFVm9q0UjpjZRvgno+diwEy7/NFp9zXgOjNbqIpFzWwi4F/49l8At9NDgmJtsA3wotN2AeA3CX3JZOriaHzCW3WwPb4ioOmA22PRVkeY2YwEERaPuMoI/GeUTAkkvUoQgfOwBnB5FdNwogjOP/D/XY+V9N9O120o3sbqXSsuwNseeN1pOzlwbZWx7z76Nf2UiXvtFYtJMh0Q4+reON8uZnZAFU1YZjammR0NbOZ8yymS7u903SqIYlyeGOVAeAT3ayMWAXqKGvvzTIfisA+18Z7KBQCioNhh+GIJ7+PLl7uR9BT+wu7tzGymKtevAE8hWBPv00cDnn3MvyWdldqZuonf3Vud5gdW2YxlZhsTCjrLThScsCof2mRhQv67iv3vmITp897m18dIFwfaGZ8I2PcJ+//KROD7xcM8Z8p/Vz0MIwp7HOQ0n4fw9/fULBQSvwfHVHGtdolFuJ7BBn3sZmbHVSkE10f8XF0MjE5ofExCLv3CVNNYhyLx/P9Xp3nVn/9tSTtkJ5PJNIAYq9kI/7lvbELDqWcicCaTaY/9CEOripgQuNLMflzVwmY2L3AZPmG3p+juELBlgH9UNfwi7mH/RThTeTg7DuuqFEkv4B+oNS+h/rcSETwzmxK4FvhuFdfLtMVJ+GK/3wQuiYINlWNm6+Cbuv0qQTiyK8Smz2ud5of0yFnVU1Mr4PiYt+2YGPc5m9ZN303lDKCVEM1CwJItXn8CuKZSjzqnbIP9Cx3k44cN8N8Hquf/jISTsvuI4oZn4xOjeZD267L3xXcPmRA4P35XGoOkxwn7tnb5lAYJYJjZBsDmTvO3CYOwuyFElUnLD2idY2qnWb+VaNpwIFlNg1sAQNI9wIkO0wkIRUCrte1VxMymIDS3eCZKP0H1ys9DGjNbhtAIX1T4YMBmks5L71Vt7IlP9RvgCDM7voqmVzMbKxa6eafd3kVoDs+k5xx8B8uxCIHp3TpVhIz3wH8DP3e+5d+SKj/8xonKm+ATgZkMuMbMVmx3vVhAfhO+CZgjKJegToVns/8Rvudoo5B0Ob6JqBBUsu6oQpksFv7uRNgHeAsKdpH0RadrV4mZTWtmy5jZEWb2FGFTtyM+cYv+XI7/INIJixG+x63otMi1E24gHLRaMTZhKlnPYWZzmNnfCBO0yjQWfgT8umrlOUln4gtIjUHYDx1TRSIkPgduJwiLFPEFsGmvqe6Z2exmdiTwNOEZUiZ5cjuweq/9zJneIjY0bAi853zLwsBdZuZtYi7EzKY3s7MI+yfvd+TKqtbPDC1i45Nn8hkEAaerzGyrTs58UUH7JsL+y8NwYMv4/RyUSHoH2LbEW/aPzcOZTGqSNS5FMdsUE5VLI+kx/I1tkxPuhbu1UwgUY6BbExTnvd/jQyXdXXatjJu/EJ5LHhYD7jGzldtdzMwWI/z913S+5VngD+2u13QkXYWvGW8qYIMK130zXs+7v5icUJBwelVNYHHiwpWMvulnIC4pO3kh05Jt8Z/9dgT+ZWGCdluY2TTAVfgnS79Muc9HHbTbxP8B/gLCOnm+pP2DHa7XjgDAMx2uOTo2A+Z22u4XG+aqZk/gLYfdODSvDsKzR27U+dXMlgU8+cuPgC0Tu9NN/ua0G5dQ/L12J4uZ2fxmdg2h/qGdosZuCwBAyNXfamYeMfjREovoL6TcZ+sPqfKekl4k3IM8zAXcFvdtHRF/hzcRJqYV8Qnw207XHICD8DVBQTj/3NLJz29m45vZUYTvQZlBPUmQdDFwcom3bEr4HbSaluQm1gGsRcibF+UUlqchcZNBxP4U59v7qOLzP6GZnQQcShZxzmSGBHHYxMq0bp7qzxQEwZFKp05nMplAbGTaxmk+OXCjma3a6brxLHkdPhE+CHnwjzpdt0NWJwigdTT8Ig7+uYXQUO/hC/wDC9phL/zx32UI9d9tx38BLAyRuwWfAHgmEZLewi+A90NC7q9jAfj+mNmmBCECD8c0oB7yAqfdzIR8WRPiVq04gxBfKWJ24IxOxf9i3OcOfDHYxhH3sX9vYTIJME2L149roHh5WWHN6zpYq+x776tpWvzR+AaxfgKsJenjdhaJ9XzrAm86zGeiQc3y/ehEjOkMSa9U5kkHxGeZV4B7OKH/4omELmW6R6tm/Q+Bxyu+5qOSygrvuxmrpP3uBDWeKQvsxgfONLMlgb0lPVdmkai4vxZh0zmF5y3A1j04VbmxmNncwFn4PiM7SPJuznsCSa/ExtOjnG/ZBFjIzPYFzowN027ixJQlCAft+Zxv+xzYeDAX/zcJSWZmWxE2wkUqZ2MTCqaXMbPdJA0rs1a8B64LHEhQ1vPwCQmnH0q6MzYqepoxJiYcbP8G7OzdzJnZJIRA1tb4n0/HSrrTaZuEeL/0TMA4KRbV9iKbExSOPEX9PyKIABwKHBknCJXCzJYgFHWXaYA+t+7C39hstBih+G5CwuF+QoJa3UwE1agqFNquBFau6aDrKd6/Q9LLyT0ZDZI+N7PLCfvEVqwEnF6DS20RG2SmBKYmTM9cFFic9hRv+4SYHqnMwa+yNkFw6P8ctpsDi5rZzpJKF0JH5d8/xOt4C6D2ikJljSWKInwXmJUglLIE4f7QDjcAv+xwylpVjFWV8mtFDG+aCEyvI+kRM/s1YRqk5zs5DaEo+AZgd0k3ll0znosWIkyGWIOwr/ayj6TDyq6Z+R9mNjWhub0TvO+fpKKC0dcqDB5vS7hHe85g4xAmJW1lZrsDF3iTOPH3/CfC57xMwe+fJLWjOtpTSDrXzM4DVnGYTwCcamYL1RwbGSc/A4ccqZO0JxGmcM+QeB0P+xBiHB5xkvGj/QZmthdwTlEyNH53lifs+2ct4dcdNK/5c1Ah6YvYgHEPociviO8C55nZdQTxgCuLinLiXu9nwHaUK/z4AlhPkrdArVc5AF9T8c5mdlJVcSJJl5nZPpQrMPw1sJKZnQ78VdIDZdaM8e8FCeID6xKme3p5Hf/U+IwDSc+Y2TYEQXAPSwGPmdmfCQV5ruYhM5uM0PS4M/5mTgM2kPSG074urgbeIcSDy3BZFP9pGs9SLlbVqQBAO+9/tsM1v0L8PO7lNH8BOKLK9fuQ9Hb8Lh3oMF/SzJaT1C1x3pHxnMEaU+wYp+l4C77+JOmplP50mTMJzbSeOpyJgL+b2RrAQd6cd5yqtBJhuptX+HAgJjGzCRrQCDIzcKeZHQ8cLOlJz5tiPmhDQiyozCS9a4BzyzpZkkMJz/UlHLYzEgRg9yWIs3mHaQBfxsN+T2jo99YB7BYnT1WOpA9j7Ye3sP9HwN1mdhjh7+/Kf8cz8BqEZ45n+EGdbAMsgH8PMCfhM3AKQRin9LM5iqmuSPgszO9829MMYjG4biDpLTPbHn8TTruf//EIOf298OWZM4mJOetKhDwI9TAevm9mVUzQezo2sGV6BEmPm9m6hFiXR/zjJ4T9+nop/DGzsQiNjVXgjeNPb2ZVxDOeiwLamUzbxPzrqfgmcH8NONvMzib0BpTt/5gOOIRwJvRypKR/l1knIYsD95rZzsDpZXLQcf+zJbA3vinDfRyc6uwDIOm1+PMc7XzLAsADcc/49zIN2TH+sgNBSLZJ+fShzF8I9Z+e59f/AdeZ2WnA/p3Ex8xsPsJZoNW09P68RajB6TbnEOIlHvGSxQj3i43j0JFSxFzZjASxkKklHVD2GkXE7/+p+IbPrQxcb2abSCoVwzezWQlDsNakAcKHHXI0sBXlBew+xS+8Wid3EGL53r/LsHYXkvSEmT2HPwZWVpygNGa2BbCO03ybsjnvkZH0opmtRxiyWPQZWtPMrpXUmOGikq43s9vxixj15/Cq/WkHM5sWOB//8NHt47DUzOCklajzvW0KD7W6ZtLa3lICAJLeMLN1CBOpix4CAjYG1olFQJcBwwYqBInFXz8kqPuuT7lCg8MbdPjrecxsJuBfhIN8ER8DS5nZUmm9Ks1WFRyIjyGo2XmnCM9E2Ljta2b/IGyAbh4o+RmTfXMRCt3WplzRK8AfJd1X8j2ZDpB0n5ntQghQeViAcBj+D+GzcSNBrWqUB0W8B85CuAdugG/qcX92k/Tfku8py86EaSgehT8RgvKrm9k/gbOBm0b+PpjZ1wm/pxUIyb8yzdIPEQJF3cZTgD6CRAVidRAbAHchBDY8TEgQDfq9hcm9VxP2AC+OzjgmWn5CaIxdjVBAUIYX8E+MqpJ5SK/Adhawfh2FoTGgtLzDtNsT1i6hWABgqRoKwr5nZk0oYNxRUjKxgyiKtApwPb7A/EzABTEIcDLwL0kvDGQcnwMLAasSGv3KJEAuo3tTP84xs1biY+MQnmmTEYLjZYXXRsdFBIXJbhc69nF2tx0YiXMIz5BMhUi6NCYCPYXofSwE3GBmjwGXEiaZvkiYKPgqoal/PIJo1HiE5rGZCEJoi1AsODg6DpOUiwA7Z1dCEqMOlon/OuUvVHQmiImvtYAr8DehzQycBzxvZhcSznzPAK8QmtMgJAZnIJz/lyIkOMs+F64A9iv5nl7mNwSBpMkctgsSzgJeAccqeLjGtTz8gxBXyvQoUehsL+C0BvgywsJUlnsB74STGQi+Hx2FgO4h3Av7ihInJgifzU4QF5i4pFvvAGuUFVzNlEfS82a2AeHs4S1qWDT+ezP+/R8k/P37RMu+RhCK+hFhn9jOXm+ndgpnepCLCRMwi4rxpyE0kR1T4dp/IogUblziPRMQJoFuamaPEPb9NxGek28Bb8bGkkkJYplTE+4DcxCm6LaakDEQnwGrdEuYcjAj6VQzW4Agdu1hIkJMZlcz+xchb3w/oUGrT6xjYsJ578eEv/kylIv7QBCXa1z+Nz67ryA09JWhtGBmTZRt4OtUAOB5wiRI7wS49+K0uirZF7+A3S6J43GHE4RNPEW4h5nZVQ0RkvDExpskYr8L8G2n7YFmViYWVhf3S5q904vExue9KVdUvSywrJk9RYh93E6IfbxFmJAzKeEMPwshdzYX5e/5A7pMeJ48VNH1OmFMQgxisyiEdRVhD/QMYZr2R4Tn37cJv4vFCTnwsoKbHwKbpp4YFs9/6wB3E/ZqRYxLKN7fJjaBX0gQDR/tWc3MvkE4A/wq/isj9no+/rx0W0i6MA40WNf5lnEIccjfmtm/gcuB+4CnCPufEQRxoCkIe94FCT+3J75VO5I+MLNlCJ9hjyAIhL/hpsBG8XdwHnCtpGcGeoOZfZNQY7IssBzlzgHvAb/yCk5l/Eg62cxWxl8PV/T5N8Ln/1uEWo8FCXnfSSt2PdMZkxOE/+ukqtjFOjR4AERm9Ei62MwOINQbeljXzG6TVGXMq49vEO5bdXJCRdfJn/9MVWxJ2Kd6z5WrEURgzyHUL149UHzEzCYgCIutQaj/KpMLv50gkt0kpiLkvXaJ/S8XEaZ5jiLIHkWuZicIHmwU31uGx4A9O3PXxbEEH73N2JMTBGN3NbOTCPmLR0d3TjWz8Ql7wFUJNZ2dDp3IVEiMA61FyN94zuVjE3JF65vZ1YRa3auBJ1s1yVmYHD8zoSZmRfzDMPvYvgkD9uJZ+XiCkIWHGYFhZnYf4V55J/AoIb/9MSFO1Jcn+y4hBjwDoWdoFv7Xq/WpmR2qNMNw/0yIfXhidfMB98W//ZWEz83TwFtRTH4MQlx/KsLPMAfhrN9KaMkI97p2B2bVSuyXuJFyAwwBzpb0erFZvUh618yewC/idl2HS16Pv+H+jg7XaomFwUTeifbnSzq+inWj+P4xhL1XEUea2d0NG4J3KEFEuAzXNKGvMe5JL8Rf6/Q5Ie/hjY+lZp0KB2FlAj9p8Vq7zfqtrpn0u1y6EUXS1Wb2R8J0Hw/jEg41GwHDY1LwdeBNwsTq8QlFXzNSflICwC34g0QZHwfgP4CNj08RvG7KFpKOgsLE975DT5nm/GkIn8mdgS/M7CXC571vUzdZ/Pdt/MoyI3Mm4e+UqZ/DCAcW7+YUwk2+70b/vpm9SCiIeJdwWJ6ccA9sd1L4uSROgANI+jQmAW8nFG57GI8gaLABMCL+7G8SPvuTUj7g1ce7wKqSPmzz/ZUQBVNWcJheVINAQ1IkHWZmsxCe517GJ4j6rA9gZq8CbxA+Ax8RAgHfIDTHtlsI9D6wXAOnQHXKZ4RpBn9JXeDTj5/hK8TvdqHq5YTfT6tn6ASEwuJu+5oSIzRBHJR6IUm3m9nmhEkQXiXIeeO/vu9+3793CAV73yQoPX6nxDX7cyewZs3TfvtTNsDXCcMJZ6+9uvjzZoYwkv4SJzRtW/KtM+EPHreLAbtK+nPidTJDhBjz+h3lVWmnAbaO/6rmLmC1ofQMiAJEv8c/hfYAM7vCO30vk2mDOs5k/yCo4lc1hahtJL1sZisQxEe8jXkQxACXjv+q4iNCs+/TFV4z0wJJl5jZJsDxlDurTU4oHisz1cfD0ZK8Yqw9TcxH7A/802G+i5mdLOnTCtfejJAzXL+NS8wc/23Y/z9WrJv4BbCupBurvGjmK2xFKEArk/ObkFDYuWoCf06W1GQRrAsoJwDwKUF8vYnUKgAQ7zkP45/8+0wn642Mmc2BX+ziXuCMKtcfGUmfxdqLfzjMpydMTe6WKGp/PDf5Jgjo9vGdbjvQMI4hFOUvUPJ908d/SSaztqBuAYCPaJ23HIPQ3L94grUN2LiTKXtliDGYpQnDLbyNupMTGnS2Bz6LQrCvEPI/YxFyv1MQBh6UnZYGcAOwdk350a0IzTplxDXGI9QHeGoEGo2kp2OB65WUEyoYk34Crxamez9NqAP4jPA7+jrh3ttu88+HwLKSkk5NGuKsB9xGqFXyMmg+/5lMpjZ2IwgDeoeLHW5mDw8RMdBMplYkfWxmvyQ05k3vfNvYhLPjWvyv/+MZ/icA3bfnmxG/wH5/HgWWT9TwWgU/INRr7QN8YmaPE372Dwl1i98inHvGa/P6HwKrS/q4Al9bEuNxa1Ou9hvCz/fn+O99M/svofb3c0Lj8jeiTRWDcTKJkHSHmW1IGGToPaePRXh+9z3DP43fgVcJ9fsjCPXhExLqv6en/c/B6ZK8tSF1sD8h3zV5ifeUjS2MzLgEMfXKGwclPWtm++Hv/RuDUHv98/7/0cw+JvzNy3I44TOzRxvv7RbHUL4++NgUjlTE7fhqOJ+voC7jOhogAGBmExEGnHk+sy/gzxl5+T1BHLHovjAecLaZzSnpvQLbujiXIPjo3S9C6K9rAovSejr7yIxNs3ph27nHZgYgDmj+cQuT0s/cKHrcSmw8aSy7rY2WpH3j1I7fl3zrmISNftnJ1gPxIKHpr5Iip8yX5INYRNJ7MeF5FaGArSxjEZrbpq3QrYuA9WpsCM30IwZCNiIc7NqZWDkR1aqYXUeNn4c4FfOXBEW/shO7xiA0xrQz3ak/fcneRzq8ThXsgK8YOrlAQ01sQRBYabegcwr8EwQ8vE8IAt9b4TWbwEMEFa+6Fd1Wdtg8IenR5J60ICoS3kDxoWslBq8AwFvABpIurmvBOAnuM+BUyk1pgeq/+/cAS0t6v9Cy93kc2ETSDd12JDO0kbSdmT0DHEJ7oh0p+ATYUJKnQSqTcSPpCDObEGhCs9HdwDJD5Jn3FeLeY3V8RWETAieY2eI5VpJJRPLPlaThZrYHcE7qtTxIus3MFifERLs1re0jwpn/2i6tP2SRdFKc4HAs3d37nUQacZ0mcw5h2s/3C+ymITTqH1fVwnEC7IaEhP6etNeslYpPgF9LOr/bjgxm4lT7FQiN7T8vsk/MCcDmXfahiH8RPpveAt9rG1S8MzJlBAC+IEzr6ZSH8AsAlBUoGJBY7HEY/qL07WsSY/sn8Bt8v5PdzOx0SZX9XtrE83tp0vlslCl9Q5n43F+VUGT5f11y4yHCvdQzUW124NK07nyFvxPOQavVuGYf+0kqO2GpIyTdH/P/l1F+aMs4hGEaZQZqtOJaYKU6GmDgy8l+yxGaoKeuY81+vAg8h/95mARJd5vZwgQRgHaHN3yd1sWUZXkTWFnSTRVeMzMSkt6M+/+bqD/28xL1f+cymUwXiPvOXxPErr/reMvYwFlmNpekF9J6l8kMPSS9YGZLEATAyta0V93/8V9gCUmvVXS9dvmYcK4pihWNB8xW4brDCYK3tU3LjbXfywE30t7Azoko11SXaRCSTo91MEfRnmDHuFR7/u/jamDTiq/ZEZLejgMrTq156TlJNzn4QELtzU87uEY7jalXATsSeg96ifMod269X9ItCf3plE2iEtkAACAASURBVDuAdR12VdRlXOO0ewd4ooL1BuIUfKIHIwj9Gm9VubikT+I56A6KB2TOSMiLrl6lD+0Sa5eOxN/79ATNEUBvUn1DpvvMSOuhN+0068/V4jUjCMsno5PirR2Av1TlSBvcSTj8VXqzzWRGRtKLBBWn27rtC+EwsVqDFQ+HBJI+B1YETu+yK1cSRFA+qnNRSQ8RJkJ0own4TULT581dWPsrmNmUwK8dpncNlslU8bO/Js1QqnuZsA8Y1m1HKuRtYGdgzrqb/2Ph44oO0wtS++LkEofN8mZWtlG9F7gCmK3O5v8+JJ1BmObZzSbEK4FFJL3ZRR/q4GNCw8Vsufk/0xQkHQ5sQFDy7jZ3A3Pn5v9MKiTtD2xGdz/vlxKeea930Ydusxn+fcei0T6TSUFdjUvnkVgNuAyS7iaIX77dheU/IMS8vAniTMVIOoGgdN+tZ+HfCGJodTRdNgZJw4EDnOa7mtk4Fa9vkvYGliNMcWkCzwE/y83/9RBzDSsAtTYe9sOAvYDNmv79l/QB/kImaLZQaZlG8scrEuYvM8m7ykb3dfBP7rm4rr1IFDLb2Wk+PqFgs9t49shN+h4P77YDTUPSS8DyhNxr3fybUHA8zGk/TzpXRssbhMnY/6553YMk7V7zmgDEIuUFCdM8u8UphDqAWgVzJD0PLEy1z5si3gB+ATxQ45oDIulBYD6aURN1PyH2n3NjNSDpYWAxoM4Y9GvAkjWul8lkukys716ZUAPhYQrgIjPL0w8zmQTEyb5zEprAu8UtwIKxNr/bvECoh61TOHA4YdhF7THvuPeve/9nwB9rXC8zAJKOIwx/a4pQ7UUEMfhaRADLIOk0uiMAkIRY+7869cY+bgRWjGv3VK1v9PnUEm9pQk9FK+5w2g3rdCFJzwFPO0zvSJUHNLNtgVWc5nul6kOJ/VbbO81XM7OtUvjRJifg/94e3vScbmbI8pMWr30KPFzxNf8r6d02rummbQGAWAi0I7Ax/uBMVZxDKIJuSgFSZpAj6Q1C0u8wujOt4CNgC0kb5Ob/ZhA39+sC2xIeAHViwMGESZAf1rw28GUg8KfAdTUu+xAwX4Oa6X+Hb7rPwakdqRNJwyVtQSh8+aBLblwFzCHJeyhtOq8SgpwzSjqgogLKssyDT9n3otSOOPH4MQn+Ys5e4AlCQGzpbiZAYtHrQsAjNS/9ObAb4dnXlCB0Cj4gTFifUdKfunQ/yGQGRNLfCIWgKRVYW/EpsDthT/hgl3zIDBEkHU8oRKx7quLnwE7ACrGpaMgSE0O7lnjLQWY2fSp/MpnUxMavP3Tbj/5Iug2YG6htAglBcHJeSVUozGc6QNLJhEKwl7qw/ErAsl1Ytwn8HV/j1bSE+FzlSLqMMMXlDLo3vdmAk4EfS7qrSz4MSSR9ImlN6s99vEEQf9kjPhN7AW9T/wh8gqbdosyZp6qzeJnrVHImM7OJgP2d5sMpdxbpmNjo6I2/r2Zmi6b0x4GnoKtJ3+U6C/l7Bkn/ARYBnqppyeHAvsCykspMeZonClnXxZuSPiEIJJxRw3rDgV0l7VDDWgMSG4Hnpf5c4LuEyZcbdqsWRtJ/Cbmvu2tY7klCs9NDQGMG3sQ43EIEQbJu3DO/IEwWWyDWomRqQtK9hHq4x2pY7lHC57+dAttMJtPDxHtNGRHnnwDHJXInkxnyxHr4nwPHUO/ZfQShBn9RSa/VuG5LJJ1DyEkkbdiJvAf8KtbedIU4mGph6hkA9zGhzv6wGtbKOJB0AeE5200BuM8J9dIrN7H5vx+bUm9cv1VTYcdEMdDFCMLbqTmXIPLYN+CypwQAIsfhE5X9APhHYl865T58+b5hFa3n6S1K0v9hZvPgF9u/EdgnhR99SDoGOMtpfqiZzZ/SHy+xP+0Eh+k7wGmJ3clk2mWOFq/dH/tBq7xm8oE/bQsA9CHpJEIh0LCOvSnmHcLUh9XqnnidyUj6TNJ2wM8IqtN1cTkwi6Smq0MNOaIQyuHAXEBdCuRPAEtK2j5OhOoacfry4sDmpA1+DSdMM5krJt+7jplNTDjcF/ECYYLfoCMGIX8I1KlE+iqhsPkXg0AEaARwLbA+MJ2kvaPqdbdY2WHzGs2Y/ICkZ/E9i1dK7UsN3AasBswsqRECDDE5OxfwZ6COYqybCc2++3X72ZeQhwhFxdNJ+n0MuGYyjUTSncDswJ7AJzUt+wWhEepHkvaVlIu2M7Ug6XpgNkLxQx2fuxuAeSQdmNVxv+Ro/BMoJgROqLkpIDM0qK34SdK/qC/G5ELSk4QmkH1JOw1+OEEMa85cCN4cJN0E/Ag4iXoLASciTPrqahNUN4iJxoOc5rub2TiJ/Hhd0q8JIrA3pVijBTcBC0naSNLbNa+dicTcxyyUm3LfLucAP4ziE73EhfgKwG6V9HJqZzrgJfzP+IcqWrN2AQBgD2Bqp+1xsTGzbnbC/7f4q5mNndKZAjz7giadawdrXLljosjm3KRvdH+A0Ni7e784/9OAR+x+SkJOoi7eglAfAqwNbEW6oSgvE/KeXoGSpEh6TdKKwAaEvGxKDDiTkP/6e+K1CokN8AsCR5Hu7HMeId/1ePzfjREAgHAWkbQzoelgWI1L30YQAvxdtwZgDHUkPUJ4FqRsWvgnMH9Tan4ymUz9xOd9mab+dcxsy1T+ZDJDnSgCuiWwBPUMgHiUMPhxuyYOwZN0KWGAUsrayHuBuSV5RUWT0W//l/Is9jAhDnB6wjUybRBzvwsSauDrFuO4npAL3rvpNTExX7cyoV6oDmZLHe+V9BThu399oiU+BXYGVhvpfN9zAgAxTvQvh+k/mj7QLD537y0we1rSMxUt2RUBADOblBBr9OTO3wHWqakefXN8ea6xgTPNbLLE/ni5wmFz4lAfbpRpNK2Eddpt1m91zXvavKabjgUA4MuN4GIEBeyih0M7fAgcAfwgTmDLZLqGpJsJyh1rkObzDiGheBWhyG2ZrHDdbGJhxCKERtM7Ey3zIrANMJvC9OVGEEUQjiM0gp9EtU1gRmgun03STnHSQlPYAvi6w+7wNtWBegJJz0taBZgPuJh0xVwvAdsDM0j6Ww9NgBqZtwmf6a2A70haXNJpDflsr+iwuahhQbeLHTYr9WAD2AjChJF9CHvf+SWd07TGd0kfSdqF0AhyCmkage4CfgX8TGES0WDiM4Kwwb7A7JJmkbR/FNfJZBqPpI8l/QmYiVAQmaoA9s14/ZklrRtjD5lMrUh6LxY/zEpQ5U3xzLuToG6+cBTayUTi/nNj/PeZxaJ9JlMldZ9Bd695vUIkfSppd8L+/0yqPf8boYFy9iiGlYV/G4akdyRtDMxJEKut6zsxBnCgmZ1iZuPWtGZTOIkQDytiWsL0nGRIukXSzwhCABeQTghwOGHa7JKSfhbFJzJdRtJ/JS0BLEmI01TN1YRmr9UkvZ7g+klRmJZ2i8O060W9rYhxxxec5mUa91ut+QrwhtP8mU7XM7OZgd86zd8H9u50zXaQ9Bi+qSoQ8nJbJHSnJc5cQZNyOVlMsgWS3orCP0tSfa77KYIY9hySvlLYGUU+vQJov6rYr1Z8GaePufCjCYKoF1S4xueECYg/aFLuvw9JpwIzAntR/SCAEYR935yS1mySSE48+/6G0AhRZV7qSWB1Sb+K+4c+GiUA0IekByQtShiOcinp7uc3A8vHXOhgywP2HJLel7Q24VlQ5TTYRwh/57UkvVPyvU3aS2QymWrYmnD/93KYmS2cyplMJgOSriXkfjYDnk+wxHOE3O2skryi710hCnUtSIi3vFjhpd8FtiM0/z9eZFwXkj6QtC5hCFyVQphvA7sAP861D81F0ghJJwDfJfQmPJVwOSPkApaWtIikBxKuVSmSvoj1QitSnVDt6Hgc2JIaREwlvUb43m9NaIKuimsJ3/sDRlPj38j4hwOP+EOv9DbeXvD6sArXutZhU6kAQOwTOJlwT/OwucIgwuTEWMg6+L7f0wKnNaTvYZuC14cThvpkMk1ljhavlW7WN7NJaH2PSR7frkQAAL5MfF1CKAJbmqAQ3mmx3p2EZPx0krZR70/7zQwS4sHnLElzEJSwjiAo1HfKw8D+wEySft70gEfmf8R74IWS5iE0Qx+Fr0izFZ8BlwBrEhqfj2hIo/AoSHopFgJ/B/gjnQXAXiVMfJtF0ipq2NS3WHDsKRR7HzgxsTuNQNLtklYApgN2IzQvd9oM8DahwWo5QrP8weoNxf+3CQnxGwgq9nsRp7cD34yf6aMleQsqk2NmswHfd5g2Yvp8Py5x2ExNUOdtIh8S7nd3AucSJmkvD0wpaS5Jf4gFn40mFoJvSPj+704o4uiE1wlBsYUkzS3pvB4V/RhBuB88R9jfXUoo5tuaIBo0iaSfKkw7ur9rXmYyHSLpuVgQ+X+EoN9tdL4HeIXQWLgyMLWk3yhPhMk0AEmPSlqDEMjbA7ivw0u+SWjsWEjSPJKqLCIfVMRCiL1KvOUgM5s2lT+ZTGpiPLBxDSAAkp6QtCbwPeBgOov/vAIcSRD6WUndmbKbKYGkeyQtQxDFOZr0E0H7WB+42sy+VdN6XSfGgA91mm+S0pc+JN0saWXC3n9rgoBxp7HqzwgFJdsQ4n8rSrq6w2tmEhD/LvMQxJZOI8S+2+UVQvx/VklLjtwM2oN49vEeIdNu4y10qkQAIOLN/VRRhHUIYXqKh/2jQEG3+BP+Ztu9zWzKhL50SpPiuo0S2G0q8X4/L6EI+Czar/f5hJBTWg74voIY9kB/g785r7lAm760wyhFyfEstDLheXgK7f9u3gAOBKZXmHzZ2AlhsRlkD0KubUPgJjr7Lj1JqIX5Xtz3JZ+I0y6SbgXmApYh7Hvb+bmNkC9en3DuPXs0No0ugJd0k6TlCA1hexEaEjrlP4R6gh/EPJkn35upkfgs+BEhR3MD/8/efcfLVdV7H//+kpBQQmgBBCGUIIIUCU2KVCkiBBEFUSyAgnrv9bFcFHu7FizPYwEVFKkWAjaKAoIEpKmEojSBSOhFakJJCEm+zx97cjnEM7PXzOwyc+bzfr3yesGZtdf+rjkzZ/bes9dvdfadzyJlN/y/Xdlx/0t+z22savl8B/sG0MMiW0TnIEmpBYCWkjTN9lrlpQIQES9Etjjj+sruXTtH3V37nasXzwnXj4ifNArA9bzG3IATJE1Wtjr6ler8+sZMSf8taVJEfKdXn4NGEYjNlf3u/6jOz/tuVbby97oRcWyM4IXTRpLIFoH6nrIigK9TNoG2iEJ9VrbI5ueUzYnZMyJSVpPuSRFxjrJFcj6gYlb4na/s78uXJe0YEa+MiFOiogXaImJhRByv7J7fj6vz8/15kn4laYfIFsRrVkyuXxfFulDSnS0e/3MfFTTM+y7usqJ2FBEPqvVr6p4S5oV+XGkLIUrSCRExreD9t9S4B+gric33U1Y4qDa2t1T+8/mrYJFj9Cjb60ia2KJJJ3+7t5TUqjhH6d93lFoZpDFJcltJu0jaVNkJ0TqSJkgaumLLk8om+8xU9iF5taQ/1fzlOtA22xso+/J5irIvRF7e+LfkSuFPKZscvnhS2HWSrqqqkhCqY3tTZVUhpyibALy2si/Jh/4NfF7ZzTz3KiskcauyE7s/R8QzlQYuSKPy1FbKbgjcWtJGysa+4pBmcyXNUTbmO5V96F0m6W9VncSiPLYnKlsVYIqyC4STlL32J0oaPaTpPGU3jN+nF18H10q6tsXNQD3B9lhJy0lytF+tHhixbK8vaTdlf/830YuffWOHNHtO2TnALGUVZK9Tdg5wQ6+/90e6xmd46o03vWRhUa8d22OUXyzPfFk1vMbErF2VFUrbVNmXBWvopedEc5UdAzys7PN/pqTbJV1ZR/GnxNd9Ya+xdiW+Jl/otmCK7dF66XFaP6jt9yJJjUnmr1V27WsjZde8lny9z1f2mXePss+8GcrO967r1S/5B5XtUZLG1J2jA7W+DzDYGp+h2yj7W/gaZdf/15a05ETtR5WtLPxPZV8uXynpL1z/6W+NY4ftlF0P31bZzYFrSVpVL3739Iyyz8HHlRXPubbx7z/V/sr1dytbNbBvVgYZ6Wwvq+y9v5WkLZQd+68jaRVJywxpOl/Zsf/9yo7/b1Z2TPSXiJhbYeRSJB5HLxpJx36N66LbKjv320zZzYGTlB0HLz63mq/se49Zym70uV7SdEl/5+8/APQH28sou9a/vbLv+9ZT9lm/3JBmTyubxHybpJuUTRad3idFvTvWeG52Uvb8bKqsSNrqeul34bMl/UvZsc/Nki5S9v1/357D215B2ef/9srGvKGy+2GW04vfAS1QVujgbmXXfP+i7P6vvi36ZntVSfsqO/fZTNm574p68bhnrrJznn+qcZ1b0qURUeSqoT3B9trKXvvbKjsGnKzstb+CXryG/Yyy+0BmKzv+/1vj318jooxVZVGiRrGh/ZSd/y++93Pocf88Ze/5fypbKOEKZZ8DTRdMsb26snPEPP8VEd/vPD1QHdu/UlY4o5W/RcQWVeTBv2tcy+hHC7iOgjrYXlrZfc87K7vv+RXKrv+N14vH/i8oOye8T9n1v39IulzZvfC1L3Rm+1RJ785pdmdEtFw4qVGEZFdlz8dGys6NV5W07OImyuYE3Kfs3Pg6SRdERJGFNCvTuO93H2Xj3VjZpOcVJC3daLJQ2fHfPcqO96+RdFmrcz7byys7R8jzkYj4TufpUYTG97+bKfsOeIqy9/9ays79VtJL7196Qdm1j4eU3Q9zq7J7wK+KiH6d9J2rca/QTsreJ1sqe25WVjZHTsq+H3lW2d+GOcrOl2bqxesG10ZEtwvtFqox32V3Zed+G+rfv/NfPJ7bJN2i7NrHhf06zwVAc7Z/p6wwais7NIqoAhjpbI9qnCACA8H22D6+kIgS2B5fd4Y62F62cYEAA2xQX//AoOO9Dwy2xgQhYCDYXroxGQwABpLtpbgWOrgav/+WRVVsf8r2Irdnju2pVY0D3eEawGBKef8DAPof1/maaxQHGDi2xwzaOeCg/q6badwTxfXQAWF7mU7v+7G9SeI1gHcWnRsoi+1LE17TTI4AMCI0jv17fmER26cm/G3udNXrxfsYmHPjxnXfjn7vtpdPPP77cNG5UTxnc8D4/mcYjffJiDovtj3O2WIaAAaA7W2cfw/HtXXnBAZRbR/GEbGoFyq8AVWJiPkRMb/uHOgdg1r1LCKe63Z1UvS/QX39A4OO9z4w2HqtejFQpoiY188rugFAtyLiBa6FDq7G77/laucR8VVJB0lq5xhxeUnn2P5CF/FQEa4BDKaU9z8AoP9xna+5iJhbd4Y6RMSCQTsHHNTfdTONe6K4HjogImJuF/f9rJrY7t4O+wfqsHJCGz43AIwIjWP/F+rO0QsG6dy4cd2X3zsWzwHj+59hNN4nI+q8OCKej4hFdecAUJmvScor+Ph/qwgC4KWoxgMAAAAAAAAAAIBKRcSvJO0o6f52NpP0edu/MCtuAgAAAADQb7ZLbDer1BRAsVIKADxWegoAAAAAADpg+7WSXpfT7AFJv6ogDoAlUAAAAAAAAAAAAAAAlYuIG5Xd/H99m5seIumPtlcvPhUAAAAAACjJbgltnlJ7xQKB2theWtLLEpreV3YWAAAAAAA69LWENsdFxAulJwHwbygAAAAAAAAAAAAAgFpExAOSdpF0bpubbi9phu0ti08FAAAAAACKZHsZSTsmNP1zRCwqOw9QkC0kLZXQ7u6ScwAAAAAA0DbbUyW9NqfZc5JOqiAOgGFQAAAAAAAAAAAAAAC1iYhnJB0o6bttbrqWpF82VlsDAAAAAACJbL+y4l0eJWm5hHaXlZwDKNI+ie2uKzUFAAAAAABtsj1K0v8kND01Ih4vOw8AAAAAAAAAAAAAoIfZfq/t+U7zkO3N6s4MAAAAAEA/sX2U7eds71TR/sbZvj/xXH+DKjIB3bK9lO1ZCa/pF2ynFL8AABTE9qkJf5/vqDvnILC9fOIx4IfrzgoAwKBxdm9GnkW2N6o7KwAAAAAAAAAAAACgB9jew/aTOV80320mBQAAAAAA0Bbb+9le0Di3ftL2VhXs83OJE7/+UnYWoCi2j0h8XU+vOysADBpTAKBnmAIAAAD0JNur23484TP6/LqzAgAAAAAAAAAAAAB6iO1X2L69yZfM/7C9dt0ZAQAAAADoJ7a3tP3MEufYT9veu8R97uFsBfQUh5SVAyiS7eVs/zPxdX103XkBYNCYAgA9wxQAAACg59geZfuCxM/o19SdFwAAAAAAAAAAAADQY2yvYvvyJb5gvsX2mnVnAwAAAACgn9ieZPvBJjdzz7d9jO1RBe9zX9tzEm8ov9P26CL3D5TBdtg+PfF1Pd/2GnVnBoBBYwoA9AxTAAAAgJ5j+yuJn8+/qzsrAAAAAAAAAAAAAKBH2R7nF2+qnmF7Yt2ZAAAAAADoJ7Yn2L4p4cbuy21vVsD+Rtv+H9uLEm8ot+39ixgrUKbGdaoT23hdn1l3ZgAYRKYAQM8wBQAAAOgptj+Z+Nn8gu1N6s4LAAAAAAAAAAAAAOhhzlZWO9L2hLqzAAAAAADQb2zvn3hzt20vtH2a7a072M9Stg+3fXsb+7Ptc8oYN1Ak25vbvqGN1/UCM1kCAGphCgD0DFMAAACAnmB7ads/auOc9tt1ZwYAAAAAAAAAAAAAAAAAAACAEc3219u4yXuxv9n+mu29bK89TJ/jbW9o+zBnE+0e7GAf99meWMdzgsHhrLjkJraXbXO7NW2/1fYlthe1+do+oazxAABaMwUAeoYpAAAAQCVsr2B7ou3RS/x8Vdvvt31XG+ezd9leoa6xAHipMXUHAAAAAAAAAAAAAAAAAAAAQGk+KWlDSQe0sc3mjX+fkCTbz0t6RtI8SRMljesy0zOS3hwRj3XZD5BnFUk3S5LtJyU9KulxSc9KmiNpoaTnJS2QtJKklSWtJ2mtDvc3S9LHu4sMAAAAAECyz0n6qCTZfkrZue4ESSu22c8CSYdGxOxi4wHoFAUAAAAAAAAAAAAAAAAAAAAARqiIWGT7IEnHSXp/h92MU/eT/hebJ+lNEfHXgvoDWlltyH+v1PhXluckHRIRc0rcBwAAAAAAQ2055L9XVPsT/xf7ZERcU0AeAAUZVXcAAAAAAAAAAAAAAAAAAAAAlCciFkTEByR9WNILNUZ5VNLrIuKSGjNgsKyW36QQ85VN/qewBQAAAACgErZD0pQCujouIr5VQD8ACkQBAAAAAAAAAAAAAAAAAAAAgAEQEd+VtJWkq2rY/RWSto2Iq2vYNwbX6hXs4xlJb4yI8yrYFwAAAAAAi71C0gpd9nGCpA8VkAVAwSgAAAAAAAAAAAAAAAAAAAAAMCAi4iZJO0l6j6S7KtjlE5I+LGnXiLi7gv0BQ61Wcv8zJG0dEReWvB8AAAAAAJa0VRfbLpD0iYj4QES4qEAAikMBAAAAAAAAAAAAAAAAAAAAgAESEY6IkyVtKOkQSX8pYTcPS/qSpMkR8d2IWFTCPoA8E0vq9wlJH5W0Q0TcXtI+AAAAAABoZcsOt5spaY+I+HqRYQAUa0zdAQAAAAAAAAAAAAAAAAAAAFC9iFgoaZqkabbXl3SwpP0lbS1pqQ66fELSBZJ+K+nciJhfVFagQ6sV3N8sST+QdFJEPFVw3wAAAAAAtGPrNts/K+lbko6NiHkl5AFQoKg7AAAAAAAAAAAAAAAAAAAAAHqH7WUkbSNpiqTJktZXtpL68soWn3pa0nOS7pd0n6RbJc2Q9I9GUQGgJ9g+UtIbJa2n7HW8dJtdzJF0vaQrJJ0naUZEuNCQAIDC2N5G0ro5zZ6JiAsqiDPQbI+R9KaEpjdGxJ1l5wEAYCSy/XNJr1Pr4ncLJV0r6SxJp0XEE1VkA9A9CgAAAAAAAAAAAAAAAAAAAAAAGPFsr6GsGMCykiZIGq0XC1tI2cSI2ZIelnSPpAciYlENUQEAAAAASGL7ZZI2kDRJ0vjGj2dLulvSbRExp6ZoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAULOoOgMFj+3eSxjZ5+IqI+FKVeQAAAAAAAAAAAAAAAAAAAAAAAAAAAACgF4ypOwAG0u6Slm7y2FNVBgEAAADQHdtbSFqzwC4fiIi/FdhfaWxvK2ligV3eFxE3FdgfAAAAAAAAAAAAAAAAAAAAAAAA0JrtuW7u7LrzAQAAAEhne1qL4/tO/KzuMaWyfUnBYz+57jH1AtvL1Z2hGdtjbVNMEQAAAAAAAAAAAAAAAAAAAABQmlF1BwAAAAAAAJAk21Ml3WZ77bqzNHGgpOtsb1N3EAAAAAAAAAAAAAAAAAAAAADAyEQBAAAAAAAAUCvbK9j+paRzJa0t6Y01R2rmrZI2l3S17S/bHl13IAAAAAAAAAAAAAAAAAAAAADAyDKm7gAAAAAAAGBw2d5A0jmSXjXkx2+SdHw9iYZne4Kk1zf+d4ykT0vaxvYhEfFkfclGJtsrSNpN0vaS1pT0ckm3R8QHasx0paSnJT0s6W5Jf5J0dUQ8X1cmAAAAAAAAAAAAAAAAAAAAACMPBQAAAAAAAEAtbO8laZqkFZd4aGfbEyPisRpiNXOgpKWX+Nlekv5qe/+IuK2GTCOK7aUkHSzpA5Jeo3+/bvWKxmOVs72GpB2Heeg52xdL+m5ETK84FgAAAAAAZcaD5gAAIABJREFUAAAAAAAAAAAAAIARaFTdAQAAAAAAwOCxva+kc/Xvk/+lbOL3/tUmyvW2Jj/fQNLltl9dZZiRxHbYPlLSTEk/VTbRfriilWvZXrnScC/arMnPl5X0RkmX2p5he7cKMwEAAAAAAAAAAAAAAAAAAAAYgSgAAAAAAAAAKmX7LZJ+I2lci2ZvqihOLttjJE1p0WRVSX+0vWVFkUYM22soKwTxI0mTEjapq9BCswIAQ22l7HVwou3xZQcCAAAAAAAAAAAAAAAAAAAAMDINt5oaAAAAAABFmibp9sS2fy8zSMFOl3RVYtvN1EMT2utk+0BJv1DraxJzG216QkQsaKzs/ns1n6S+iqRLbO8eETdWl65/2d5K0oWSJrax2eaSppeTqKVNEtuFpKMkbWt774j4V4mZAAAAAAAAAAAAAAAAAAAAAADonu25bu7suvMBAAAASGd7Wovj+8UOqDtn3WwfmvA8nVx3zrLZfo3t53Keh8dtb1t31uHYnmR7Vk7+B2yvXXfWXmd7J9uzE94XPfE+sX1tB1lvs71WHXkBAAAAAAAAAAAAAAAAAAAA9K9Wq+2hALbXk7SVpFdKWkvZioCjJS2U9LykWZJukXRFRDxYV86y2Q5JG0jaUq1fd5Nt7yfppoi4p5JwCWyPlrS1pO0lbahsdcJRkhZJekTSHZKulnRDRCyqK2cvsr2KpC0kTZa0pqSXKVsRcUVJTzWa/UvSw8reDzdHxL01RAUAAABQItvrSDpH0jItmj0qaY+I+Hs1qdoTEffa3lPSNWq+av2aks6xvXNEPFNduv5hewNJ50qakNB8lqSfS7pK0kxJD5UYrZW9Ja0m6VWSdpX0NjV/DSy2kaTzbW8fEXPLjQcAAAAAAAAAAAAAAAAAAABgpKi0AIDtFSVtq+xm6fUkrSFpnKSxkp6WNFvSk5L+IelWZZPAn60yYxFsbynpMElTJa3bxnYzJJ0i6ZSRcGO47U0kHSjpdZKmKO3G/imSzmtsf6+kiyWdLemSiFhYUtSmbI+XdLSkI5VN4shzn+0TJX07Ip4rNVyPsj1W2cSIfSXtKWn9Dvp4XNJ0SRdJ+nVEPFFoyArZPlJZ8YhWHo+IT1WRBwDQX2y/SdLrWzR5RtLREeGa9r9I0ocj4vky9t/vbH9J0qQmD98XEZ+tMg9QJ9vLSzpf0uotms2VNLVXJ/8vFhEzbb9F2fnqUk2aTZH0c9sHUCTupWwvo+w8f8Wcpk8qOx8/tReew8Z56RPKrln92vbHJX1C0qfU/HUgSa+W9ANJh5ceEgAAAAAAAAAAAAAAAAAAAABS2F7f9qdtz7C9yO2ZZ/sS2/9te426x5LH9s62r2hzjMN52PZ7bEfdY2qX7VG2D7F9TQHPw1D32f6I7eUqHMs7bD/QYd57bR9SVdZeYHuS7W/bfryQ3/iL5tk+2/Y2dY+xE7bPTBjjrLpzAgB6k+1bcj5DflLy/ndI+Bw7uMwM/cz2jS2et5vqzlcU29MSXicH1J2zbrYPTXieTq47Z1lsn5Ez9kW23153znbY/kDC7/SYunP2GttfT3je7rK9Yd1ZU9jey/azCWMa+L+DAAAAAAAAAAAAAAAAAAAAAGpme3fbF9hemHATdIr5tn/hHpwEbHsF2ycXNM6hLrK9at3jS2V7b9s3l/A8DHWf7TeXPI6w/Y2C8p5ge3SZeetmeyXb33P2Hi3bubbXrXvM7TAFAAAAHbK9fcJnyI4V5MgrQnBh2Rn6lSkAMNTAT3z1ABcAsP3OhLF/qu6cnbD9w5xxvWB7u7pz9grbGzgr8tbKE+6Tyf+L2d7f+UUvZ9oeV3dWAAAAAAAAAAAAAAAAAAAAAAPI9qttT8+7s78Li2yfbnvNuscqSbbXc/6kqG780/Z6dY+zFdvL2T6lxOdgOKfaXrak8fyg4KwnlpGzF9jex/YjBT9feZ61/Z66x57KFAAAAHTI9o9zPj9utx0V5PhYTo6FtieVnaMfmQIAQ1EAYEALANiebHt2zrh/WnfOTtkea/u6nPHdaXv5urP2Atu/THgfHFp3zk7Y/n7C2D5ad04AAAAAAAAAAAAAAAAAAAAAA8T2ONvfdLa6XRVm235rzWNe1/a9FYx1pu0V6xxrM7bXduuJTWW61vbEgseTsjJlJ95WZM5eYPsLzl/hsEzH2R5V9/OQxxQAAAB0wFmBpbwJs8dUlGV12/Nzsny2iiz9xhQAGIoCAANYAMD2aNvX5Ix5pvt8crztTWzPzRnnT+rOWTfb69tekPM8XesKituUwfZE23NyxneP7TF1ZwUAAAAAAAAAAAAAAAAAAADQ2wqZPGt7sqSrJR0tqaobmSdIOtPZau2V3zxtezlJv5e0dgW7myzpDPfYZGdnK71eJunVNUXYWtJltlcuorPGeI5LaPoXSSdK+rqkkyTdkLDND2y/vIt4PcN22D5B0ucl1Tkx478k/ahfJ4cAAJDjYGXHu80skHRGFUEi4hFJv8tpdkSvHasC6Anvk7Rdi8cXSnpnRDxdUZ5SRMQtkr6Y0+xw2ztXkaeHfVDS6Jw2P4wIVxGmaBHxmKRpOc0mSTqwgjgAAAAAAAAAAAAAAAAAAAAABpntLW0/krPC2XAetH2T7SttT7c9w/Ys2y900NdvbI+reNw/7iBntz5c5RhbsT3B2e+vF1xue2wBYzouZz8zbG/eZNttbd+cs/13us3YC2x/pftfWaE+Wfdz0ortMxPGMKvunACA3mL7ipzPjnMrzjM14fNs9yoz9QPbN7Z4vm6qO19RbE9LeH0cUHfOutk+NOF5OrnunEWxvYrtx3LG+726cxbF9ljbt+WM92bbS9WdtQ62x9h+NOf5me+CCvzVxfZe+W9z/77unAAAAAAAAAAAAAAAAAAAAABGMNu72Z6dcHOznU3u/6btPW1PbNHnWNub2v4P2+fZfj6x/9+7ohvpbb/G9qLEXG60nW77/bZ3tL2e7Y1t72v71DbG+C/b46sYYx7bZ7Ux/iXdZ/tPts+xfYrtn9q+0Pa9XfT59S7Hs6Ltp1v0/1fby+b0sbztG1r0Mcf2it3krJvtA7r4HS2yfafti5y9fn5s+2zbF9u+3e29p4ZaYHvHup+bZkwBAABAm2xvmPC5WOlkamcTNx/IyfTTKjP1A1MAoLbXbC/y4BUAOCVnrI+4z8+PluS0yd8frTtnHZxdP8pzUd05u+Xs8/LxnHHOsz2h7qwAAAAAAAAAAAAAAAAAAAAARiBnq4DOS7iB+4+2d+tiP6vb/kzCDdS2/f0ix9gi0wUJWRa73fYuOf1tavumxP4+UcUYc/Ie3Mb4F7vW9uG218vpewPbX3D+SpFLWmh7+y7G9L4Wfc+1vU5iPxvbfqFFX0d2mrFutlft4Pcyx/ZptvdxzgQHZ0UY3uBsAlmr53A4PbuSpikAAABok+1jcz43Hqnjcy8h11zbK1Wdq5eZAgBDUQBggAoA2N7B+YVM+vbcqBVnBc5amWN7zbpzVs32dxNe/1+pO2cREl4Dtv3WunMCAAAAAAAAAAAAAAAAAAAAGGFsb2n72Zybme+wvXuB+1zZ9vHOn0RwVFH7bJJjo4QMi11ve+XEfldxWhGAe8scX0LOpW3fnTh+255le48O9rOq7Z+3sR/b/rPt6HBcrSZp/7DNvn7aoq+fd5hveduX2n59J9sXwfYP2/hdvODs/bpKh/ta2/Z5bezPtg8vesxFMAUAAABtcLZy8AM5nxvfrCnbhs4/Dv6POrL1KlMAYCgKAAxWAYDLc8Z5p3u0gFe3bG/t/L+VP6g7Z9Vs35Dw+n973TmLYPvbCWM9vu6cAAAAAAAAAAAAAAAAAAAAAEYQ22vYvi/nRuZv216mpP2/wfajLfb9jO31y9h3Y/+fT7iR285WSl+9zb43s/18Qt+bljW+hIz/kTh+2/6j7Yld7u89the2sc/9O9zPQy36bKuAge2pLfq6v8N8/zOkj4tsb9ZJP52yPcnZpP4UT9jepYB9hu2jE/dp2/9whwUgymQKAAAA2uDWxxGLvarGfFfkZJtRV7ZeZAoADEUBgAEpAGB794RxjoiJ3s3YPjdn/PNsr113zqrYXsb2/ITXxZS6sxbB2XWMPNfWnRMAAAAAAAAAAAAAAAAAAADACOFs9fdrcm5iP6yCHOvZvqtFjukuaSKw7esSbuS2O1yN3PYZCX1/rOhxJWYL27cmjv9vtpcraL9HOX8FxcWmd9D/Si36W2R7Qpv9rZKTcfk2+1vTWWGLoRbaPt32Gu2NtjO2v5H4/M92wQUq/NLiB3m2K3LfRTAFAAAAbbD9m5zPjKtrznd4wufaFnVm7CWmAMBQFAAYnAIAl+eM8S7bo+vOWSbbr034XX+/7pxVsb1dwvNh2y+rO2sRbO+TMNbnbS9Vd1YAAAAAAAAAAAAAAAAAAAAAvWlUm+2/IqnZBNvnJO0TEad2lShBRMyStLukB5s02VXSW4rer7MJ7ZsnNH1E0s863M3pCW227LDvbm0laeOEds9KelNEPFvETiPiR5J+mNh8V9uT29zFKi0eeyQi5rTTWUQ8LunxFk0mttOfpC9KWrKYwihJ75R0dpt9deqtie3+KyJuLnjfn5N0ZWLbwt/3AIDu2J5g++Kcf3+w3e5x6YhjezVJ++Y0O6WKLC2cJenpnDaHVZADQA+yvbuknXOafTsiFlaRpy4RcaWkvIIt77W9ThV5ekDqOfoTpaaoTqvrAYuNlbRW2UEAAAAAAAAAAAAAAAAAAAAAjHC2t7W9oMnKZXNt71FTpueaZLrVBa8qaPs1Cau42fZ3utjHcs5Wd2+l7VXui2D7K4nj/2YJ+17B9oOJ+/9km323+r3e3mHemS363KaNfjZx8/edbe/VSb52NDKkuKjEDLskZvhrWRk6ZfvMhNyz6s5ZJtufsH1Dzr8/1J0TQDlsj034Ozi77py9wPbROc/TM7Yn9EDOk3JyPmZ7XN05e4HtG1s8TzfVna8otqclvM8PqDtn3WwfmvA8nVx3zm7YvixnfE/aHl93zirYPijh931c3TmrYPvTCc9FW4X3epnt9RPGa9u71Z0VAAAAAAAAAAAAAAAAAAAAQG9KWmnV9lKSTpLUbEL9+yLiksJSJYqIv0o6usnDG0s6pOBdrpfY7opOdxARzyp/1bvVO+2/S3krOUrSfEnfKnrHETFb2UrwKd7QZvetJqi90GZfi83vcH9LOlbN33fTI6KKSdNbJ7YrbfJKRFwuKWWS3BQz4bAXrS1pi5x/m9WWDkCpImK+pHk5zUbKir/dOjzn8bMjohcmSOZNUF5F0hurCAKgd9jeWNIuOc1+FhHPVJGnB/xW0sM5bQ6zvXwVYWq2RkKbZ0tPUZ3U1/iapaYAAAAAAAAAAAAAAAAAAAAA0LeSCgBIOkbNJ2d+PyJO7zSA7WVtb2x7O9tb297Q9pg2ujhB0p+aPPZfneZqInXi/c1d7idv0vnSXfbfNtujJW2Z0PQvEfFISTF+IenphHbb2F6mpAyVsb2zpP2aPLxIzYtfFO1VCW0s6dKSc6QUGRkjad2ScwAA2vdUzuNPVpKih9neXvmfuadUkSVPRFwt6dacZkdUkQVAT3l/QpuflJ6iR0TEC5LOyGk2XsUXLuxF4xPatCqi12+eT2y3XKkpAAAAAAAAAAAAAAAAAAAAAPSt3AIAtleR9PEmD98q6b/b3antjWx/1fZNkuY0+rlG0rWSbpf0rO3LbL8vbzXviFgk6UPKJiAvaTvbm7ebr4XUm7Mf63QHjYn2q+U0e7TT/ruwhqRlE9qlTNLuSEQ8K2laQtNxylYU71u2Q9KxLZr8NCKuryhOSuGLxyLiuZJzXJXYbp1SUwAAOjE75/GBLwCg/Anzd0m6ooogiU7NeXxP25OqCAKgfo0CbO/MaXZDRNxQRZ4eklLw4MjSU9Qv5VpK6qT5fkABAAAv0Sh+u6/tt9p+g+1X1J2pSrYn2N7V9sG2D7T92pFQvBUAAAAAAAAAAAAAAAAAgDLlFgCQ9BFJyw/z80WS3hsRyTdp255ke5qkWyR9UtKmkkYP03SspF0knSDpNtvbteo3Im6U9OsmD78nNV+C4bIOp5uV69ZI2E/HBQa6kDqBK2812G6dn9hu0zb6HK54xGLRRj+p27Xa32IHS9q+yWPzJH2u7USde1TSdTn/Lq0gx0OJ7SaUmgIA0Im8AgBPVJKiR9leTtlnfysnRUTKMURVTpf0QovHR0l6d0VZANTvLZJWymlzZhVBeklE3C7pxpxm29jesoo8NRqT0GZR6SmqszCx3dhSUwCole0xtv/T9ixl10vPV/ZZ+DtJd9ie2Sh+m3q9ue/Y3sz2OcquZU9XVtj1V8oKmz1u+wzb69eZEc3ZXs/2Jj2Q43W2l647BwAAAAAAAAAAAAAAAABUrWUBANsrSfpgk4dPiohrUndk+zBJNyub3JRSeGCx9SRdYfsjOe2+0eTnb2xjX3meTmzXzQTk1ya0mdFF/50argjEcB4tNYX018R2r2yjzzktHut0NapWz1fLSZC2x0r6cosm34uIezpK1YGI+FhEbJ3z75AKoqQWvli21BQAgE7kFQB4spIUvetgtT5+XCjppxVlSRIRjyibvNTKEbbbOe4H0L/em9DmN6Wn6E1nJ7RJef4ANNheu4Q+17JNQUEUolHg63xJx0tat0mzycqK357faD+i2D5I2XXc/SUtNUyTZSS9Q9INtveuMhvy2V5L0iWSLrX9qhpzHCjpQknn2B5XVw4AAAAAAAAAAAAAAAAAqEPehJwPa/jJSHMlfSl1J7a/LukUpU8iX9IYSf/P9geaNYiIv0q6aZiH1rG9eYf7XVLq6rSv6GIfhya0uayL/juVOhG+1Al8EfGQpPsTmq7ZRretJpavajva6EuNlbtW6XB/kvQBSRs0eewJSce2k2cESV0RstVqxACAeuQVAEg9xhqpjsh5/MKIuK+SJO05OefxdSXtWn4MAHWy/XJJO+U0+3tE3FlFnh6UUgDg4JG8AjRQBNujbE+1fZWk40rYxR6S7rd9Yi+seI2+9wNJqZPaXy/pxyVmqZztLSWdISll1fYJkn5pe+NyUyGV7dUk/UHS+pJWU1YEoPLfj+0DJJ2p7LuhvSSdaXu4YhIAAAAAAAAAAAAAAAAAMCI1LQDQuJnq/U0e/kFEPJCyA9vfkPTxDrIN5zjba7R4/LQmP9+3oP3/I7HdazvpvHFz5Btymj0k6apO+u9S6qTqFUpNkZmZ0KbV62RJjylbWXc445Xd7NiOjdT8BtcFkh5vtqHtFSR9pkXfX4mIQV0lOfV3+nSpKQAAnXgq5/FB/WyT7Q0l7ZjTLG+ifV0ukPRgTpu84gYA+t/+kvKKpp1fRZBe1Ch8cEdOs1WU/1kADCTby9v+kKS7JJ0raYcSd7e8pKMk3WT7YtsHUZwD7bI9RdI729zsbbY7up7co74lqZ3V2sdrcAue9hTbq0q6VNLQCf+rS/qD7ckV5ni9ssn/Qyf8HyDpF7bHVJUDAAAAAAAAAAAAAAAAAOrUtACApH2UrfCypAWSvpPSue0jJX2sg1zNjFbryb3nNfl5UTcH36LmE8WHOrDdjm2Pk3SCWv9OJOn7ETG/3f4L8Fxiu+FeM0VLmSQ4IbWziHhe0g0tmuQVZVjS1BaPXRcRrYopfELSxCaP3S3p+21mGUkmJba7p9QUAIBOzM55fGALAEg6XK0nzj4u6XcVZWlLRCxQtrJnK2+2vVIVeQDUZv+ENn8oPUVvuzChTavzSGDg2F7X9rGS7lV2HXKdCncfkvaQdJak220fw/EM2nCk8gvjDOc9RQepg+31JO3WwaZTba9edB6ks72isiJvmwzz8FqSpjd+v2Xn2EvSbzR8EYk3S/qJ7bzvUAAAAAAAAAAAAAAAAACg77W6UerdTX7+24i4P69j25tL+l5Os1slfVzZBP21lK3wva2kz2r4iWJzI+KZZp1FxB2S7hzmoW3z8qaIiGcl/Tmh6RTbyavGN25YO1HSNjlNH5P0w9R+C/ZwYrstSk2RSZkkuEybfV7W4rH3pa74Znsptb5h9/IW264l6UMttv10o1jBoNozoc0CSf8sOwgAoG0UABhGY+XCd+U0O63HP/9PluQWjy8t6ZCKsgComO3xknbNaZZ6Hj2SXZTQ5oDSUwB9wPZWtk9Xdn3vGEkr1hxpsrKVye+xfaLt4SbGAkPt3OF2OxWaoj6djiMk7VhkEKSzPUFZwaatWjRbW9JlttctMceeks5Rdh7ZzLsknUQRAAAAAAAAAAAAAAAAAAAj3bA3SdleRdJ+TbY5Ia/TxmSmn6j5jVpPS3qvpM0i4psRcU1EPBARD0fEtRHxZUmPDrPdv/L2LemKYX62WoGr05yf2O6olEa2l5Z0mpoXXBjq6Ih4InH/RZslaVFCuzeUHUTS8ZIOzvl3dJt9tvq9btJGf/8taYMO9/MlNS9ccJ2kMxMzjDiNAgz7JjS9ISKeKzsPAKBteQUA6jq+qds+ktbMaXNaFUE61SjAdVVOsyOqyAKgFnur9QQtSbqsxwuZVOEySfNz2mxg+5UVZAF6ju1RtqfavlLSDEnvlDSm5lhLWl7Ztb6bbV9p+6DUYpEYOGt0uF3eeUG/6GYcLy8sBZLZDknnKb84sSRNkvQH24W/Xm3vrvzJ/4sdruxaOgAAAAAAAAAAAAAAAACMWM1WSXmLpLHD/PxhtV4pfbEjJW3d5LFHJO0YET+JiFYTylcf5mcpBQBmNPn5xgnbpvipslXG8/yn7YmtGjSKElwl6R0J/Z0n6fSEdqWIiHmS/pHQdIrtVisFFZHlhog4O+ff79vs83JJ17do8lXb/9mqD9tHSvpKiyYzImK4AhWyvZlarwB8TM77ZaR7i6SW76eGlJU1AQDVyysA8GQlKXpP3sT4v0TE3ytJ0p2Tcx7f2vYWlSQBULWpCW3yioSMeI0iZa3ONxdrVogRGJFsj7d9lKTbJJ2r/ln9e0dJZ0m63fYxtleuOxB6ijvcbmGhKerTzfXLkfIc9JWIsKTjlPadhyS9QtJ0250Wu/g3tndUNvm/WXHcJT2qAS6WCwAAAAAAAAAAAAAAAGAwNCsAsFeTn/86IlreiGd7GUmfafLwAklvjoibEvpYfpiHUgoA3NDk55MTts0VEfdL+m1C0/HKVoMflu09JV0racuEvm6V9I7GzXh1Gnby+hJC0rfKDlKSb7Z4bJSk421favtttjeyvZLtVzRWfbtI0o/U/D2V1//XJTVbOe6CiPhj6+gjl+1Rkj6b2HxamVkAAB3LKwDwRCUpeojt1STtm9PslCqyFOAsSU/ntDmsghwAqrdzQptrSk/RH1IKIexUeop6REKbuq93FGkkjaUUttew/QVJ90o6UdKG9Sbq2GRJx0q6x/aJtjepOxB6wj0dbndfoSnqc29N26ILEfFLSYcqvQjDhsqKALys233b3kHSBcq+T0nxlKTXR8TN3e4bAAAAAAAAAAAAAAAAAHrZmCV/YHu0pF2btP91Qp/vlrRmk8e+FBEpN72v1uTnjyRsO7PJzwspANDwZUkHqvVkb0n6oO0TIuJ/b/y0HZI+rmyl+GYTvoe6R9J+ETGn07AFOlfS+xLa7Wr74xHxjbIDFWyapLdJ2r9Fm90a/9p1gaSzh3vA9q6S9mmy3SJJn+pgfyPJuySl3EQ/nRs/ARTF9mQ1Px7pZTdExLyiOrP9NUlPSjo5Ih7roqu8AgBPddH34uOr3STNjIh+mTTyLklLtXh8rvqksE1EPGv7LEnvadHsHbaPiYjnq8oFoFyNQibr5TRbKGlGBXH6wVVqUSSwYfsqgtRguAKPS+qFax6FiIgFtp+XNC6naepExxHD9paSPizpELU+Duo34yUdJeko21dJ+q4SiqhixPqj0gq+DrfdSDBd2ed/ynXvoeYrrfgsShIRZ9leVtJPlP+9hyS9UtIfbO/e6fUC29spu26ecqwgZdcO9oyI6zvZHwAAAAAAAAAAAAAAAAD0Ndtbe3hzbS+ds23YvqXJ9jMbxQVSMmzbpI+vJW4/Z5htU4oXJLN9cpOMSzp/yDbjbZ+VuJ1tz7K9bpG5u2F7jO2HErMvsv2OujO3y/aqth9o43eU4iFnk2OG298o29e12Pbkqp+DXmJ7ou1HE5/nvevOOxzbZyZkn1V3zjLZ/n7Cc/BQ3TmBoWyflvi3p9e8ssDnYCnbTzT6nefsGGaPDvua0iLzAtspkwuG63eC7aNs39To65hO+qmDmx8zL3Z63RnbYXuHhNfnwXXnrJrtG1s8HzfVna8otqcl/P4PqDtn3WwfmvA89c3xv+2pCeP5e905e4WzFc9T5BVV6Du2r08Y94V15yyS7UcSxnxc3Tmr4Oy6x1TbFye+B1L8toSchxWYz86ugx5je+Wis6K32V7f9gttvl4W2N6o7uxFcdq1sCX9qO7cyNg+wvbCNn53N9pepYP9TPGL1xxSPGV7mzLGDAAAAAAAAAAAAAAAAAC9aLjJVq9r0vbqhBVlt5f0qiaPfaONla+arbj7r8Tt7xvmZyslbpvqM5KeTWi3r+2DbW8g6RpJByX2f72knSPi7g7zFS4iFkhKvUE9JJ1u+1gnFn7oBRHxqKSdJM0sqMsHJe0VEc1eu29X81XB5kr6fEE5+o6z1ZxPkjQxofnfJP2h3EQAMHB20YvHT+OUHcNcbPtW2x+yvVwbfc1u8dhTEbGonWC2N7b9XWWfsydK2rTx0NR2+qmL7VbHzIv1zSRgSYqIqyXdmtPsiCqyAKjMdgltKADQEBEPSXo0oelrys5SgxUS2jxReopqPZnQZsXSU9TIWRHMD0q6Q9K5kjoqJNXEwwX2tdj1ki6V1NZxaQuTJR0r6R5nRfFGzORutBYRd0n6QpubfSki/lFCnLp8WFI7hR7vk/TpkrKgTRFxsqT3S3LiJq9Wdq0gueCJ7S0kXaL072zmSNo7Iq5N3QcAAAAAAADKecczAAAgAElEQVQAAAAAAAAA9LvhCgDs1KTt5Qn9va3Jzx+WdFpSokyzAgCPJG4/3I3Wha64FREPSvp/ic2Pl3StXpycluc0STtExHCFDOp2vNILMYSkYyT9oZ9udG7cqLuzsoIN3bhO0nYRMezqrrbHSfqfFtt/p0dfA1X5hKQ3praNiNSbUgEAaZr9Dd5Y0nckPWj7RNspxzetCgAkTfizPc72QbYvVjbR/P9IWrIIwfa2V0/pr2Z5E+FnKe3Yu9ecmvP4nrYnVREEQCVSJqrfUnqK/jLsueESRlQBANtLSVozoWleEZl+kzKRd53SU9TA9stsf0HSPZK+p2wifBHmSPqRpK0j4v0F9fm/IuLvEfE6SZOUXY+4o6Cux0v6D0m32b6ycTzbN4Uy0bGvKrvml1dQYpGkL6r19cG+ExEPS9pb2XlNnpsk7dYoyooeERE/lvSRNjaZIul3tifkNbT9amWT/1O/r3lW0tSI+EsbeQAAAAAAAAAAAAAAAABg5LF9j4e3X852Yfv+Jtt+v80Mn2zST9JqYbZ/N8y297aTIXE/423f1SRrJxbYbufGulrYflcHY5tv+9u2V6k7fypnr+mDbN/d5lgfc7Yycssbum0f3aKPR22nrJI4Itnex9n7IcWZdedtxfaZCWNIuSG6bzlb7TBPOyvDAaWzfVri36Be88oCn4NZbex38WSmpZr0Ncb2oibbtryJ3/Zk28fa/ldilsOKeg7KYHs527NzxtCXq1/aXt3ZMV8rn607Z5Vs39jiuUiZCNwXbE9LeG8eUHfOutk+NOF5OrnunClsj7L9VMJ4ptadtZfY/k7Cc9ZtIbqeYnvbhDHb9j51Zy2S7S8kjPk522PrzloU21vYPt35xwLtmmH7KNtLFn6qYkxb2f6us2s0Rfqn7WPcxmrZ6E+2N7N9kv/92uJM2yfYflXdGctkexln10ivsD1vyPiftn2R7SPc5BwSvcH2R9r8+3aV7eVb9LeR7Yfb6O9Z27tWOGQAAAAAAAAAAAAAAAAA6E22J7j55Ky1c7bdvMWNWnu1mePbTfrZPHH74SagPNxOhjay7mJ7YdLtaq091e7zVBdnE+N/3eE4n7F9vO2iVoArnbMVhw+2/VNnN+wO9x6519nr7h22l03ocyXbj7d4nj5Uxdh6ke1tGq+TFLNtp6wmWRtTAIACAOhLHvACALandLj/h5xN1v+3Vd7d/G/7hcO0HWV7D9tnOb0gzGK/KuI5KIvtw3LyL3TOcXcvs/3bnPHdZXtU3TmrYgoADEUBgJFVAGC9hLHY9gZ1Z+0ltt+X8Jw9YzvqzloU2/8nYcwLba9Wd9Yi2X5D4ntk27qzdsMvHrOdlzjeVE/YPtH2ZnWPUfrf60JTnR2bFlng4OnGODete4won+3Rzq4HDsyx8JJsL++E66boLW5dxHY4V9oeP0w/r3R2zSDVc7Z3r2PMAAAAAAAAAAAAAAAAANBzbG/f5GarxxO2bXYj2FNuc0Uz2z9r0tfLErcfbgLKI+1kaDNvs4IFqe5yn634ZHsF27d1MeaFzm4QP8j2uLrH0w7bS9ueZHt92+vaXqaDPr7R4rmZ6RG0CmA7bG/s9BWebfttdWfOYwoAUAAAfckUAEhZtbaVBc4+5/dwYxKj7QeatP35kP2u5mw11Lu62PfTtpcu4nkog+0/5eT/fd0Zu2F7/4Tf0cBM4jAFAIaiAMDIKgCQMrl5kfvsXK9stl+f8LzZ9lp1Zy2K7QsTxju97pxFczZh/KmEsX+h7qydaIzvXbZvTXxNp1ho++JGv21fZ6mK7ZVtH2X7ugLHbmcTZg+yPbruMQLAkmx/sc2/aZd4yN9y2xvafrCN7efZfkOdYwYAAAAAAAAAAAAAAACAui254lCzFaf+mdDXDk1+fnVEzE+PJElafZifLZT0aOL2w62WV+YKep+UdEuH2/5Z0vYRcWuBeUoXEbMl7S3pvg67GCVpP0lnSXrI9g9tb19UvjJFxLyIuDci7oqIuyNibjvb215H0gdbNPlUB++Zvmd7sqRLJK2auMkPIuIXJUYCgEG2f5fbj1b2OX+xpFtsf1DS803aPmX7tbZ/puy44lhJ63Wx7/GSduti+9LY3lDSa3OanVJFlhL9XtKDOW2OqCIIgFKlFJx5OCKa/e0fVHcntiukoE/dGp97eyY0nVZ2lqo1XvvnJDR9j/uoUIbt1Z0VLXhA0mmSNi6g2wclfV3SKyJiz4g4vd3rLFWKiCci4kcRsZWy66hfl1RE0dEdlV0ju8NZQayVC+gTAAoREZ+X9JU2NnmdpHOcFdLdQNJ0SWskbjtf0psjoq+L4wEAAAAAAAAAAAAAAABAt5YsALBhk3b3JvS1TZOfX5ce53+tNszPnoiIhYnbDzfZ3x3kSNtZxDy1ntDdzJmSdouIIm4UrlxE3CtpZ0m3d9nVSpLeL+lq2/fYPrZxY+BI9WVJzVYm/quksyvM0hMaRREulbRm4ibXSvpoeYkGl+2wvVSR//TvnzXN9l3ofs3KiUBHbE+StEWBXW4s6XtqPqn/cElXSHq7pLEF7XNqQf0U7XC1Lkr1uKRzK8pSiohYIOmMnGZvtr1SFXkAlGZyQpv7S0/Rf+5V2rWJkXI+/FXlnws8KWmkFnb7YUKbtdTZ9aRK2X617ROVFbH4vKRVuuxyobICgAdLWiciPhERd3XZZ+Ui4paI+ISklysrdnGGpG6LF6yvrCDWA7ZPt92sWCsAVCoiPiPpW21ssqey89vpSr/mO1/SgRHxuzbjAQAAAAAAAAAAAAAAAMCIs+SN2MNNvJdyCgA0JvCs1eThGe2GapLjX21sv+wwP3uygxxJbC+e2NaOP0l6e6N4QN+KiLuVrWR7SUFdTpJ0jLIVzy61vZ/tVhPl+ortVyub4NjMJyOitGIVvcj26pIuUva7T3GXpP1ZTbQ0Ryq72bbIf+9P2O/LStjvnzp8DgBJeq+kZfrw3x0FjP1RSfspu7H/OmUTtMrUrChOp56S1HMFQGyPkfSunGZnjJDPt5PVeoLr0pIOqSgLgHK8PKENBQCWEBHPKSv2kqfZ9ZW+Yfvdkt6c0PT/RsTssvPUISL+LCll9eIv2Z5Sdp52NYrD7WH7PEk3SDpK3R+33Snpi5LWi4g9I+LsRvGgvhYRCyPikoh4l7JJru+TdJW6K0a6tKR3SrrJ9pW2D2ocTwJAbSLiY5K+0cYmeyr9uOYFSQcz+R8AAAAAAAAAAAAAAAD/n707D5Osqu8//vky7CCICyAiigsobrjGBSUaxF1RNKgoIhr3CBrXJBqMMQG3H7hvoOIK4ooLAmpQ0BhEUVDAqCgoqyL7OjPv3x+3JxnHrqpb1VV1q3ver+fph4euc8/9nFNd1dV37vkeSfMAvsb8XjPguHv3OI65XWSHybAOsHyefr41RB8nznP8ycPkGOJc+wBX9Rl/LyuBJ04iUxeAZcA/A9ePMBeD/Bx4LrBB1+NcKOC4PuP8Utf5pg3YGvjZED8LFwM7dJ17GMBnWozrnK5zrgI8f4jnY9ZN5H1fWtsAm9Is/joI+CGwotNX9l+6AjgeeA2wC7Be13M2H+DxLcZyz65zjgvw3QFjPaXrjNMAnNZnDk7vOt+4AEe2+Pneo+ucXQP2bjFPh3edsw3glBZj+WDXOWcRcNZS+TnoBXgy7a4N/A64Sdd5JwnYGbihxVxcCPxV13mTBNiA5lrXMH+r93MdcBTN58klU+CxDeDOwIHAOWOay1/RfOa9Wddjk7T2oikQ8+4xva+tshywSJwkSZIkSZIkSZIkSZIk9ULvm/j77t4M7NnjuOuAdYbMsFWPvj41RB+nznP8F4bJ0eIcy4B3tr+HbV6XAtuPM1fXgLsxfwGGcTgP2KvrMY4KeFSfsS0H7tp1xmkCbg2cPcTzfwmwc9e5h4UFALpkAQBpAoCb8OcFAVZO+bV9EXAMzeKn+zDkZ82uAF8YMK4ltSAeeE6L53LR/V4fFhYAWJ0FAJZWAYDftRjLW7vOOYuA77eYu2O7zjkKmqJB76DdZ4PlwK5dZ54G4NUt5gOaQgGvo6Nd3oEtaRarX9Iy7yA/p/m8dosuxjNLaIqd7gJ8ALhyDHN7LXAEcPeuxyZp7URTBOC9Y3g/g+YzwTO6HpMkSZIkSZIkSZIkSZIkzZo1byrudVPuFQP66bWI/bdVtXK4SLllj+9fMkQfW8zzvT8OmaMnYLMkn0ry2AV2tUWSzwAPqaobFp6se1V1RpJdgSck+Zck9x5j99umma8XJPn7qvrZGPueKJrFif/ep8lhi2k8CwVsm+TbSe7Y8pALk+xeVUtmoZwWD+BuSZ7ZdY4erqiqfu8t0thV1ZVJTpj7CrBlkl2T7JLkwWl+949zd9eLknwnyclJTkryo6pijP1P3NwcDfrcuCgW/Q7hqCSHJum3s/O+SQ6YShpJ47ZZizaXTjzF4tRmXvq9d84cYMckL0zynCSbtzzsX6rqxMmlmilvS/LQDP4ssF6a6wYvAt6f5jrBRZMOt5ovJXnAAvu4MsmRST5cVT9YeKSlYe7a6ElJTgJelWSPJM9K8jcZ7XPzhqsdf+tx5ZSktqoK4CVJliV5/gK6WpFk36pqXfxZkiRJkiRJkiRJkiRJktYWaxYAuFmPdlcO6KdXAYBRdrXessf3W930PLfQer6bX389Qpb5+t8mzYK3u4yjvyT3T/LWJPuPqb+ZUFVfTvJl4GFJXpHmRvdxLQZ8WJLTgH9N8uYRikx0YZ8k9+rx2LVJ3jTFLJ0CbpPkW2m/+P+3SXarql9OLpXU145JXtN1iB4uSP/iItLEVdXFST479xVg6yQPSbJbmqIAOw3Z5QVpFkgt2gX/89gnzaK+Xq5L8pkpZZmKqroaOCrJc/s0eybwmqq6flq5JI3NRi3aXDbxFIvTn1q02WTiKUYAPDxN4cibJrlVkp3TXNPYZsiu3lhVbx5zvJlVVSuBp6QpjvP4FofcJsmbk7wZ+J8k/53kp2mKR1yW5FdV9eNJRF3Asacm+WCST88Vi1IPVXVFkiOSHDF3feQZSZ6X9tdIJGkmzBUBeFGSjTNa4cyVSfarqk+MN5kkSZIkSZIkSZIkSZIkLQ1rFgBYv0e7Gwf0s12P7583XJwkyVY9vn/xEMfPN46zRsjyZ+Z2Lf9WkjsttK81vAw4qao+O2oHwNPSfxfGc6vq2FH7H1VVfTvJt4E7J3lBkr3SLBRYqHWT/GuSBwJ/W1VXjaHPiQA2TPLGPk3eWlW/m1aeLgGbJjk27W9s/0Waxf+jvJdIkjpQVRdmriAA8MwkH2956JeTHFBVoxSQmnXPGfD456qqzYLQxebw9C8AcPMkT8hc8QhJiwOwQf7yWsJ8rp50lkWqzbxsPPEUo/l8ks0XcPyNSV5VVYeOKc+iUVXXAXumWSS/7xCH3mnua+/VvndskkePL93ILktT1OB9VXVa12EWo7lrHQcDb0lTOOvZSZ6U3gVaJWmmzBW52TdNcag9hzz8+VV1xPhTSZIkSZIkSZIkSZIkSdLSsM4a/99rt68VA/rptTvddcPFSZJs2eP7bQsA3LbH988eIcv/Am6d5MS0X/xPkjckOaVl+w8DO4ySbc7/S/KBPl/PX0DfC1ZVZ1XVy9PsZPeIJB9NcvkYun50kv8Ebj6GviblgPQuknFJkrdPMUvXPpz2O0GfnuShLv6XpMUJ2DnNZ5C2Hp3k1hOK0xnggRn8u+/waWSZtqr6XpIzBzTbbxpZJI1V28XpgwoJrq3azMusFgBYiJ8lecDauPh/laq6saqek+RxSS7oOs+IrkhyWJoxbF1VL3Dx/8JVFVX13ap6XprCpo9IcnLHsSSprZsl2XGE4x4MrPnvU5IkSZIkSZIkSZIkSZKkOWveYNXrhqvlA/rZcMTj5rPQAgD3nOd7K5L8coQsSRJgoyRfSHL7lodcn+QZVfWmJE9LsyvaIJul2Sl3o9FSDtwd7JoR+x2rqlpRVSfM3fS+Vf5v19eFLA65T5KvAzcZR8ZxArZI8qo+TQ6sqiumladLwKOT7NWy+S+SPKKqLppgJEnShAA3S7NL8DALGNdLchSwzWRSdWbQAvffJPnPycfozEcGPL470KtQkqTZ1KsA4JosADC/G1q0aTvHi8Hvkuyf5N5V9aOuw8yCqvpqmmtXb0tyVcdxhrVZkrsnuXOSW3acZUkB1gf2SFM48RNJHtxxJEkaCLhpkq8nudsIhz8nyQeBXkWpJUmSJEmSJEmSJEmSJGmttuaCf3q0W29AP70Wra8/XJwkzaLw+bRdCHzfeb7306q6foQsq3wwyf1atr08yaOr6jNJUlW/TvLc9J7b1d0jybuHDQdsksFzfe2w/U5aVV1fVcdU1d8m2TbJ65JcOGJ398vgBWZdeH16F2f4RZIPDeoA2Ax4IvAfwJHA8XNfxwKHAa8GHrgIdkz695btLkzycBf/S9LiBCxL8qkk249w+K3SFEQa5TPkzJn7jPa3A5p9pKpWTiNPR45I/0XA6yR59pSySBqPtsVdLAAwvzYFAIYpoDPLvpLkTlX1zqpqM+61RlVdUlWvSrJTkrO7zjOk+6cpXvDbuWsT+yygmOVaD7grcFCS89IUH312el8blaSZAWye5Lg0xXlH9dwkH7AIgCRJkiRJkiRJkiRJkiT9pXXX+P8rk9x8nnabDuin1w1aNx06UbJlj+9f3PL4+QoAfHuEHEkSYN8kz2zZ/I9pFi7/dPVvVtXngXcleVmLPvYDTqqqYRaz91pgvrqZXkxdVRcnOQg4JMk+Sf4pybC7we4JvLCq3j/2gCMAtk/y4j5N/rGqei6KmdsN941J9krvIhurOw94d5JDF1jwYuyA+yTZuU3TJM+qqt9POJJ6OynJS8bc515JHjqgzRVpioCM0wVj7k9SO29J8sg+j38zzfv9bj0ef1CSg5O8fMy5uvDUNDvl9rIyycemlKUTVXUR8LUkT+zT7DnAm5d4IQRpKWm70Hf5RFMsXm0KI6wPrFtVi30OH5fkVODgJJ+sqhVdB5oVwGZJXppk//S+Djbr1knzeW63JIcCRyV5X1Wd1m2s2QdskeZz4j5JHtxxHEka2tzvsePSvmhyP3+X5JokB4yhL0mSJEmSJEmSJEmSJElamoBfM799Bhz37R7HfWuEDGfM089VLY/dBlgxz/GPHzbHXH83By7uMbY1XQP0vGkXWA/4fsu+rgXuNUTOh7Xo8/mjzEFXgI2AA4HrWs7ZKpcDt+o6f5IAn+qT83v02NkIWB/4V5qfqVH8EnjctMfbD3BQy+yf7jrruAGfaTHuc7rOOUnAe1rMwcwu1gf2bPnz24Xzu54faXXAMwb8zF4P3GXu64YBbRf9rvDAdwaM8diuM04D8IQW72cP7zrnJACn9Rnz6V3nGxfgyBbP8R5d5+wasHeLeTq865yDAPdsMQ6Ax3addRYBb2o5f2sWbOwccFnL7PP5L+DOXY9hFgC7A+cuYC6/PqFchwDLF5BrlR8AL6BZHKo5wLrA44HP0XwmXqgbgcO6HpektQ+wCXDiGN7H1vSOrscmSZIkSZIkSZIkSZIkSbNkzRvKr+jRbtAO83/s8f2hbu6mWah/13ke+lPLLp6YZgey1a1I8p1hcqzmrUlu2aIdSZ5RVSf3alBVNwJ7Jzk1yU0H9Ldhks8A962qK1ucv83O6r9r0WZmVNW1SQ6k2UHuC0l2aHnoZklek453DAJ2TrPreS+vrirmOW7jJEcnefQCTn+HJF8GXlVVb19AP+PUdjeoN080hTSa76T3TuVdu77rANIqwD2TfGhAs0Oq6sy59u9O8vI+bd8HnF5VPxpXxmkCdkiyy4BmH5lGlhnwtSTnJ9mmT5v9kgxdPExSJ65p2W7mFrDPiPVatLmhqpZPPMl0/VWSHwEvq6oPdx2mC8CyJIckeUmSeQsCdqmqDgAOTfKCua9B1656uf/c1yHAMUk+mOSb810DWRsAd0ny7LmvrcfQ5WVJjkjy9qo6dwz9SVJrc9euv5LkoRPo/uXAyqp65QT6liRJkiRJkiRJkiRJkqTFDTi+x+4rbxtw3Af67Nxy+5bn3oRm5/L5/E/LPubbeea4NsfO09d2NLtptXHIEP0+HljZst8jW/b5iRZ93XaUeZgFwE2BY1vOGcBVwKCiFZPO/K0++b7Q45iNgO8NMc42Xjftsc8HuLhF1h93nXMSgM+0GPs5XeecJOA9Lebggq5zShodcDPgV4Ne56y2EyxwE+D8Acf8BrhFl2MbFfAfA8b2R2DDrnNOC3DQgPm4Ftii65zjBpzWZ8ynd51vXIAjBzy/AHt0nbNrwN4t5unwrnMOAty6xTgAntJ11lkEvKPF3F3adc75APcBHgU8HTiA5lpEr+s4vawEXt31WKYNWB/47JBztRz4CfB+4MXAU4HdgDtNIe9NgP2B3w6ZuZdzaT4LLNprU8MANgeeD5w0pvkD+PFcnxt3PT5JaydgY/pf857PIcD3hzzmjV2PVZIkSZIkSZIkSZIkSZJmDnBYj5uu+i5EB17e54atV7Q4bwFH9OnjvBZ9PKjHsX87zBys1t/Bg+5Em3MmsMGQfb+zZd8Af9+ivzMG9PFHYOZ2lxsGsCHD3Tj9wg6zPrZPrhtpdn+b77h3DzG+tlYAD5/2HKwxrvVbZv1/XeacFCwAYAEALUo0N6n/fhF+tSq8NOa5WgZ8vcXrfK95jt23xXHH0eyYu2gA6849H/28s+uc0wTswOAiWC/qOue4YQGA1VkAYOkUANiixTgAnt511lkEvKvF3P2u65zDAG4HvIXm2kNbA68VLRU017w+N8TcnAO8ko4LG85lX4emkOWwizd7WUFTfPSpwHpdj2+c5uZqN5rrm1ePcb6OAXbrenyS1m4013e/OuR72CFzx24O/GDIY1/f9ZglSZIkSZIkSZIkSZIkaaYAb+hxw9UPBxy3a5+btc6lzwJ5mgVSgxY+3zigj6K5gXhNFwPrjzAP69P+xvXHjtD/BsApLfu/Hrh/n762obkhuJ/jh804i4BbAOe1nLdOxkyzCPL0Prne1+O4RzF4Udw1wNHAvwGvo1mcemqLuTiX1XZcnjaaXaHbeF5XGScJCwBYAECLEvCxlu9ds2bHDubqbS1yncg8xYhoPsO1WVD2r9Me10LQLJQbZOeuc04b8N0Bc3JK1xnHDQsArM4CAEunAMAGLcYBsE/XWWcR8IEWc3d21zlHAWwCvJXB1ygAbgAe2HXmaQD2b/mauQF4NTNa+AjYBTgKWN5yPINcSvN6uGfXY1sIYEfgQJrCDePyJ+BQ4LZdj0+SaP6t5Jgh38c+yGrXAGiKAPz3kH38U5fjliRJkiRJkiRJkiRJkqSZAuzT42ara4F1+xy3Gf1v8P4k8+zsRXPzcNtdxHruYg68vMcxbxlxHh7cMtPJo/Q/d47bA5e1PM9v6LHzG/CSFscvmZvlgGe1nLNr6GA3OWC/PpmuBLbucdygGyA/CmzR49hdgF8OOP6Vkx15b8Bt2z1lPKarjJMEvBP41YCvE7vOOUlYAECLEBYAaDtPT2ZwAZsbgbv36ePeDF4ouBLYc5pjWwjg8wPGc2rXGbtA/89JqyzqRYBrwgIAq7MAwBIpAJAkNO/tg7y465yziOb6yCA/7jrnQgB70ixmH+Q3wCZd550k4G7AdS3m4iLgAV3nbQO4A83i9KtajKutHwLPB27S9fjaoLkOug9NMdJBn4WH8eO5edi46zFKUpIA6wFfGvK97MPMXwDwprQvirzKa7sYtyRJkiRJkiRJkiRJkiTNHOBefW62utuAY7814GatX9DsBPd6mh2+zhzyZq+vMf+NY09k/hvLrwS2GnEe/rllpmeM0v9q59lziPF/pcf4B807wH0WknOWAOsAP2s5Z1PdWRfYCDi3T5439DjuoQPG8f4W574lzWusl98B649/1IPRLHho46+7yKfJwwIAWoSwAECbOboH7RZ+vbVFXx9q0c8VwE7TGNtCAFsyeNHjS7rO2QWanaGvGDA3h3Sdc5ywAMDqLACwtAoAXN5iLEumEN04AV9tMXcjFxucFcC+LcYJ8Jqus04S8MUWc3AtcO+usw6LZjfn/YHzWj7XbVwLHAXsxjzXwLpEcz1qF5prmuMsfrCCZmftmRuzpLUbsAz4zJDvaYcD6/Tpcwvg1CH7fPU0xy1JkiRJkiRJkiRJkiRJMwlYH7i+x41Wzx9wbNubuwfpt0jmM8BjgDvT3Bj7MXrvGPu6BczDsS1yXscYdqoD3jXE3LxujWO3ApYPOOYCltgNxMCbWs7Xk6ec6x8HPA+b9jju8D7HnQWs1/L8fz1gPh493hG3Azyw5fP1wC7yafKwAIAWISwAMGh+bgb8skWeC4DNW/R3c+APLfo7C9hsGmMcFfDKAWO4Ftii65xdodkNsp8/ABt0nXNcsADA6iwAsLQKALRZ8DuwAMzaCDi5xdx9veuc4wAc3WKsf2DGf7ePCrgf7XaHf1XXWReC5lriU4H/bjHWYZwNHAhs1/H4bgO8Bvj1mMd3GXAocNsuxydJ86FZ/P+pId/XPkqfxf+r9X1L4PQh+l0JvHQa45YkSZIkSZIkSZIkSZKkmQb8qMeNVp8dcNxNgEuHvClsTT+h2QXmsgX2cwqw7gLm4IwW5zhp1P7XONcGwA9bjutGYNfVjn1ji2PesYBsd2+Z6wnjmIshcu3SMtf+U8x0S/rvgvmCPsf2u4l83yFzfLdPXwcveKAjAHZv+Xwtuh0P1Q4WANAihAUA+s3NOsDXWuZ5+hD9vqxln19ghosbAT8bkP9TXWfsEvCgFs/xU7vOOS5YAGB1FgBYWgUAftBiLB/uOucsAs5cW+YO2IHeRRtX17fg5GIFfKTF2M9jaRW+2YVmN/s2hQ/aWg4cT1NkoFWBxDGMY6O58x0/5rFA8x6wP7DxNMYiScOiWfz/8SHf244Elg1xji1p928wq6wEXjzJcUuSJNLcpA0AACAASURBVEmSJEmSJEmSJEnSrJlvR5aTe7R9OH0W1VfVlUleu4AsFyZ5QlX9KcnbF9DPRUmeUlXLF9DHLVu0+eUC+v9fVXV9kr2SXN6i+bpJjgS2ATZJ0uamt48uIN61LdtttIBzjOK3LdvdZKIp/tzrk/TatfCsJIfN9wDNTnbb9zhuRZIvDZnj6D6P7drnsYmpquOqnR91kU+SNLSDkjy6RbvvJvnMEP2+J8lPW7TbI8mrh+h3aoAHJtlpQLOPTCPLrKqq7yU5c0Cz/aaRRdKC/L5Fm5tPPMXitEWLNm3md+ZV1S+SnNCi6V6TzjJtNIv62xQ+OXzuutCSUFUnVdXjk9w9yYeTXDeGbpcl2S3JUUl+CxwE3GkM/f4F4D7AB5JcPHe+3ZKMo/DUyiRfSfKIJDtV1aFVdc0Y+pWksaIptve+JM8c4rCjk+xdVSvaHlBVFyd5eJKftz0kybuBFw6RS5IkSZIkSZIkSZIkSZIWtfkKABzXo+3NkjxqQH8fTvKdEXKcm+RhVbVqYfdbk4yyGPjSJI9drZ+hzd3k1uaG/N+Neo41VdWvkjyvZfOtknwiyQuT3GJA2+9XVZuFdL20vRl5UI5xu6Rlu6nspgbcPskL+jR5TZ+CFP1uWv/FXEGMYZzS57E7DtmXJEl/Bnhykle2aLo8yUurirZ9zy0WeEmSNsf8OzDoc2kXBi1cPy/Jt6YRZMYNKoKw+1yRJEmzq83fw9tOPMUiM7covE3BwSVRAGDO11q02RVoMy+LycOT3LRFu69OOkgXqupnVfV3SbZLUyz0/DF1faskr0lz3XCsgH2S/DDJ85NsOqZu/5jk4CTbV9Xjq+qEYT4fS9I0zf27yHuT/N0Qh30+ydNHKca8WhGAQQXi/veQJO8FhsknSZIkSZIkSZIkSZIkSYvWuvN87z+T3JhkvXkee3aaHavmVVUrgT2THJ9k55YZjk2yb1VdtFo/1wFPSFOMYNAuqqucneSpVXV6y/bzqiqA+QojTFRVHQ28J83Ct0EeluQhLdodtLBUuSTNLvTLBrTrtYP9pGzUst2NE03xfw5Ksn6Px75bVV/uc2y/XTHPGSFLv2O2AJYNsxuTJK3FDklzI/tiM7EFg8BtkxyRdrugvnOUIkRVdRJwVAbvBLxOko8D911I4adxAjZJ8rcDmh3u7+Ekzc/RmzP/3xtJ8/w+O8mbppZI0rB+1aKNhTz+0m0yfyHGNf3PpINM0fdbtFmW5H5pVyxgsfirFm2uTXLapIN0qaouSXIwcEiaz3evTnLXblP1NM5rgWen2UH7Q1XVtrimJHVmbvH/u9MUHW7rC0meNsri/1Wq6iJg9zT/JnWHNockeR9wbVV9YtTzSpIkSZIkSZIkSZIkSdKiBRzL/K6fW/w16PhNgXcDN/ToB+C/gT0G9HMT4FDgmj79XAIcCIxtt3fgij7nW+X94zrfaufdAPhhi3O3cQZjKGQAnNviXMePY/xDZLpLyzl41RSy/BWwssf5VwIPGHD8i/rk/8wIeTYZMCdLbVdFLQLAe1q8Xi/oOqekwYB9gCsHvZ6BzRdwjm2Bq1q8b3wbuNU4x7cQwL4D8q4Ebt91zlkBfHHAfP2aDopyjRtwWp8xLqhw2SwBjmzxmu37t9/aANi7xTwd3nXONoBHtRjLSqBt8ba1AvCwFvMGsE3XWccFWA+4tsWY/7nrrOMEfKHFmL/Tdc5pAwrYDTiG3tdS2vjiBLIN+iw3yIq5ce1Gs5BWkhaFuffmdw35nvd1YIMxZrgN8Kshzr8ceMa4zi9JkiRJkiRJkiRJkiRJs6jXopqP9fj++kleO6jTqrqqql6aZse/5yZ5R5IPJnlLkucluXNV3b+q+t6wW1VXVtX+SbZN8rQ0O4V+IM2uvK9L8rAkt6mqA8e8o9ZFLdrcZoznS5JU1fVpdkS7fAzdvbqqVo6hn1+2aPMAYP0xnKut7Vu2u3CiKRr/kd47IX+2qv5rwPG9dr5NklF2Txp0TL/zSZLUV1UdkeS+SX7cp9k/VNXIn2Wq6ndpfr/2QpKDk+xWVbNUPGS/AY9/s6p+PZUki8OgRc7bJ/nrKeSQNJqzWrSpTODv5kWuzXxclWSWfr8tSFXdmOT8Fk1ndVf4Ud2lRZvfTjzFjKkqquqEqnp8knuluVZ4XcexFuryJO9Mcoeqevzc+Og6lCQNYZMkDxmi/deS7DH3bxljUVXnJXl42v9uXJbkb8Z1fkmSJEmSJEmSJEmSJElaNICNgD/12F3lOmDHrjNO0twONoNcBqw7ofM/ZYjdbuYztp3QgINanvNJ4zpni0xtdyTaZcI5ntjn3DcAd2rRx8v69PGJETJtMGBOlsxOklo8gPe0eL0umUVO0tpg7vfNQTQ7na7uu4xhx1NgfeDsed4rLgYeOY4xjBNwJwbvYvv0rnPOEmBd4PwBc/bxrnMuFHBan/Gd3nW+cQGOHPBcAuzRdc6uAXu3mKdBxTFmAs1OsZe2GM8Tus46S4B/bzFnJ3Wdc9yAU1uM+7iuc44TzWeWQQ7tOucsALYCDgT+0GLOVhnbda/Vcuw7xPkBzgL2BzYZdxZJmjbglsAZLd77jgM2nGCO7YBzWuQ4mgn924wkSZIkSZIkSZIkSZIkzYp15vtmVV2b3rtybpDkg4xhcdcM+0mLNpsnud8kTl5VRyd5z4iHX5XkgDHG+X7Ldi8e4zl7AtZJ8sQWTVcmmdiiKmBZkjf3afL+qvqfSZ1fkqQuVdX1VfXaJI9KcuHct5cneek4djytqhuSvHKNb38nyc5V9Y2F9j8B+6XZ6bqXy5OMfaHaYlZVy5MMWuC/J7DFNPJIGs7ce/0pLZrebdJZFpk28/FfE08xfX9q0Wapvd9v3qLNZRNPsQhU1UVVdWCSbZM8O8lZ3Sbqa2WSE5I8IcldqurQqrq640yStGBVdUmShyc5s0+z7yZ5UlVdN8Ec5yb56yS/7dPsi0mePvc3pSRJkiRJkiRJkiRJkiQtWfMWAJjz1iTX9njsofnLRVlLyXdatpvkovd/SPKjEY57aVX9Zow5TkhyTYt2uwF/Pcbz9rJvktu0aPezqrp8gjmem+SuPR67IsmbWvbTb5HkKEU2Bh2z4EWZkiStUlXHJ7lnkmOTvKuq2hRRatv3MUm+luZ31zuT7FZV54+r/3GZ23VwnwHNPjFXYEt/7rD0/2yyUZKnTSmLpOH9oEWbXn8zra3azEebeV1srmrRZtOJp5iSuc8G67do2uZay1qjqq6rqiPSvE6ekOZ61Ky4PM3n0TtU1SOq6phxFL1a6oCNgEcAzwVeAewD3G+uuKfWIsDtgL2AvwdeAjwZ2KrrXPpzVXVxkt2T/Hqeh09K8phpFD2pqt8meUSS+f7+Py7J06rqxknnkCRJkiRJkiRJkiRJkqSZBhxCb8uBx3SdcRKATYCr+ox9lRuBO0wwxx2By1vkWOXICeU4quX5zwY2nkSGuRw3BS5qmeU/JpVjLsuTgXN7nPufhuhnnz5j+NIIuW4+YF42GrZPaaGA97R4zV7QdU5JowPWmcTvGGAH4FHj7necgMe1eI+7d9c5ZxVw0oC5a7PD+MwCTuszttO7zjcuwJEtXgd7dJ2za8DeLebp8K5ztgU8tsV4lszP+ULRXGdY0WLOtus667gBX2gx7lne9X0owHotxgvwmq6zzjrgXsARwA1rzN0XJ3Cufed5js4G9gc2Gff5ljJgC5prytf0+Nm/ADgAWNZ1Vk0WsCvwXz1+DlYCx+HfSjMH2A44Z7Xn6mTgJh3k2AH4/Wo5TsBr25IkSZIkSZIkSZIkSZLUAG4GXNjjJj2Aq4Hdu845CcDH+4x7dSfS7O42iQzbAqe3zAHwUyawAB/4myEyHMkEdvICNgS+OUSOncedYZ5MGwH/BFyx2nl/P8xzADy6zxiG3vkR2KlPf212XZTGDgsASFrCgM8PeH/7adcZZxmwX4vfEffsOueosADA6iwAsPQKANycZvFeP8uBzbrOOgtoFkEOMt9Ot4seFgDoxQIALQG3Ag4ELp2bu0kWAFgBHA88Hqhxn2epo7mWeWbL18DXWaKLeYF1gfu0/Nq067yTALyA5nPAINcBT+s67yiAu7Z8jrfuOuuwaAoT/x74Hh0s/l8tx47A+TRFCJbka0WSJEmSJEmSJEmSJEmSRgY8rcVNek/vOue4AQ9scYPiKm+bwPkfT/vd7lf30XFnmcvzwyEyHAFsOMZzbwp8eYjznziuc7fMtxXwAZqbWp875LH36jOOaxiyuASwV5/+fjHcyMYL2IZm57yPAEcBhwEvAbbqMte0AHcDXj/3+jgKeC/wTCZQtGPWYAEASUsUsCV/uSPtml7Wdc5ZRrMj9hUD5vCQrnOOCgsArM4CAEusAECSAL9sMaaHd51zFgCvbTFXn+s65yRgAYBeLAAwJGAz4OXAoRPo+0nAW4Htx9332gJYBny/5c//Kh/qOvck0BTVbWuXrvOOG/BQ2i3+X+U64L5d5x4W8POW41uU7/fADsDmM5DjznRYhECSJEmSJEmSJEmSJEmSZhpwdIsb2Q6b5I1YwN0n1Xefcw6z4/wHgfXGcM7tgE8Pcd75PG8c418j1+5DZvgZcL8xnPdhwK+HPPfu4xjzCFnvAiwb8ph16b/o7ZFD9vfRPn19bLgRjQ/wYuDaHrmuZgI/s7OC5gb499B7d9QLgId2nXOSsACApCUKeOWA97brgVt0nXPWAR8eMI9/ADboOucosADA6iwAsDQLABzeYkz/2HXOWQB8scVcHdB1zknAAgC9LMoFoVIvDC4iO5+VwD26zj5uWADg5BF+Fk7oOvewWOIFACRJkiRJkiRJkiRJkiRJ3VqnZbvnJDljQJv9kvwP8CLGsBB+FZqdZj6X5DSmv4DqFUmWt2z7d0m+Azx4lBMBdwDeleTsJE8bpY/VvBPYeYF9/JmqOi7Jl4Y4ZKck3wM+RbOIv9oeSHOz/FPmbvz8ZpJhdl/7ylzWqauqM6tqxZDHLE9ycp8mL23b19zr48l9mpzYtq9xAvZM8p4kG/ZosnGSDwJPml6qqXpTkhcn6fUa2DrJV4EdpxdJkjQmzxnw+Beq6g9TSbK4DVrwfPMkT5hGEElD+0qLNiP9jbyUzP09/MAWTdvMpyTNqn1GOKaSPHPcQdSduetbDxrh0L8Bth13HkmSJEmSJEmSJEmSJEmSFqt12zSqqitpdmz8XpIt+zTdKsl7k7yeZrfxT1TVz4YNBWyWZiHzM5M8LP9XqGC3JJ8Ztr9RVdVPgLcmeV3LQx6Q5CTga0mOSnJsVV00X8O5BQA7JXl4kqck2SXtCzIMslGSzwL3rarLx9RnkrwwzRi3atl+3SRPn/s6F/h+klOS/E+SS5NckWZR+BZzXzvN9X//JJuPkO/SNAutF5svJXlUj8ceB+xRVV9s0c/BSW7S47Ebknx9lHALAayT5C0tmlaStwNfHraIwiwDtknyDy2abprk35PsOdlEnTk+ydUD2lwxjSCSNC7AA9N8dunnI9PIsthV1feAM5PcpU+z/ZJ8dkqRJLV3XJLr0rvYV5LsCmxQVddPKdMsukf6X0tJkp9V1S+nEUaSJmTUgi+jLBbX7FpI4Z8HpbmmLkmSJEmSJEmSJEmSJEnSWq9VAYAkqapfAbsmOSHJrQc0v1WS1yZ5LXB+km8nOSPNwu9zk1yW5NokJLlZml09b5PkfmkWf98ryfrz9Lt7plgAYM4b0tx8uOsQxzxm7gvgnCQXJbkkyfVJNkkzP3dM78Xa43DHJIcDT6kqxtFhVV0I7J3ka5n/+elnu7mvvcaRZR4rkjy7qs6bUP+TdESSf0vzOpjPJ4CnVdW8u0ECy9LsMr9fn3N8uqouWFjMkeyc5PYt226f5L5JfjC5OFP3uLR/rTwW2LiqrplkoC7MFbBoU8RCkhaT5wx4/HdpPjernY+mKWbUy+7AdlV17pTySGqhqq4CTkzyyD7NNklT6O3E6aSaSbu1aPPliaeQpAkBNk6y2YiH32qcWdS5toVj57P12FJIkiRJkiRJkiRJkiRJkrTItS4AkCRVdRbwkDQ7ie/Y8rBtkuw9bLAeHjGmflqrquXAnmmKGNx92MPTLH5uuwC6jVOTLEuzsHqQJyd5eZJ3jOvkVfVNYJ8kn5zLMQtI8qJeC+RnXVVdA7wryYE9mmyS5MvAF5N8LMmZSf6Y5obaByR5cZL79DnFiiRvG1vg4dxpyPY7ZmkVABhm/BskuV2Sn08miiRpXIBNMrio0UeqasU08iwRH0tTEGm9Ho+vk2SfuTaSZssx6V8AIGmK+VkAoL9jJp5CkibnxjTX52qEY68fcxZ168YFHHvD2FJIkiRJkiRJkiRJkiRJkrTIrTPsAVV1TpJ7JXnn+OMMtC2w07RPWlV/THPD/qnTPvcaPpRklyRPSXJ5y2MOAh40zhBVdWSSPZPMwk7lNyR5VlV9qOsgC3RQktP6PF5JnpRmF/Wzk/whyc+SHJb+i/+T5M1VdcY4Qo5g2Bu/R7lRfJat7eOXpKXqqem/wylpFrSrpaq6KMnXBjTbDxj67xdJE3dMmve9fh43jSCzaK5ozK4Dml2c5L+nEKcrbRZ09ioAsxit37Ld1RNNIU1RVd2Y5PcjHv6bMUZR985ZwLG/GVcISZIkSZIkSZIkSZIkSZIWu5EW0FTVtVW1f5KnJTlvvJH6Wpnk9lM83/+qqouTPDTJpzs4/flJnlhVz6+q66rqV0me2/LY9ZIcCdxynIGq6ktp5uMX4+x3SL9KsktVfbLDDGNRVdcn2TvjXwBwcpI3jbnPYfxyyPZd/jxNwjDjvyHe6CxJi8V+Ax7/9tznNQ3n8AGPb5/Bi2glTVlVnZvk+wOa3QPYcRp5ZtBjkmw0oM2RVbViGmE6clWLNptMPMX0tB3LpRNNIU3fcSMed/xYU6hr/5nkxhGOuzbJd8cbRZIkSZIkSZIkSZIkSZKkxWtBO2jO7QR/5yRvSPsd6Ud1SpJdq+orEz5PT1V1TVU9I8leSS6awimvTfK2JHetqi+vkeVzSd7Zsp9tk3xy3DumVtWpaXaff3va7eg3LtcnOSjJzlV1yhTPO1FV9fMkD0tyyZi6PDHJY6tq+Zj6G8WP0hRqaOPXWXq7Xn45zc9rG8dUlTtAStKMA+6UZJcBzQYtZNf8vpbkggFtBhVfkNSND7dos8fEU8ymJ7doc9jEU3TryhZt1sYCAH+aaApp+g5NU7x1GJcl+cgEsqgjVfXHJEeMcOgHlvB1MboOIEmSJEmSJEmSJEmSJElaiwGbAM8FfsD4XAl8Anhk1+NbE7Ap8M/AH8Y43lUuBw4Bth2QYX2Gm+8DJzgfdwQ+AFw7/un4X1cChwLbTWocswC4M/DTBczTSuBjwIZdjyVJgMfNZepnBfCYrrNOAvAvLZ6zy4A7dJ1VkjQY8B8t3tM37jrnYgUcPGB+rwG26DpnW8BpfcZyetf5xgU4ssXnnbV18ff/AvZuMU+LsoAIzfWAywaM7dSuc04bsBHN3/f9fK/rnJMGvKLFz/5KYIOus44DcN8W4wV4QNdZpXED3tTy53/V6/4pXWeeBODWQ8zDzl3nHTfg5sBvhpiDnwM36Tr3sIBzWo7vJV1nlSRJkiRJkiRJkiRJkiQpSQJsC+xLs3j/LOD6ljfDXQ/8EPgg8DQWweIpYEPg2cBxQ4xzPjcA3wD+jiFueARuB1za8hwrgN0nPB9bAM8CPgdcvYD5WOUq4Ms0c7zpJLPPEmAZ8ELg4iHn60fAQ7rOvybgGcAfe2S+mCV6w3eSAAW8Ebiux/jPBO7ddU5J0mDAusDvB/wufm/XORczYAcGFw56Udc528ICAKuzAMASLgCQJMD7WoxvyS1y7Ad4Zos52bfrnJMG7NFiHgDu2HXWcQCe2nK8W3WdVRo3/u8ayI0Dfv4vB57add5JAXZq+T4AsH3XeSeB5pr1j1qM/z8X6/sh8KeWz/Ezu84qSZIkSZIkSZIkSZIkSVp8ahonAdZNctsk2yXZIsnGc19J8qe5r4uSnF1VN0wj0yQAmyd5SJL7Jdk5ye2SbJPkFqs1W5lmvL9Pck6Snyb5fpLvVdXl08w7acBGSR6c5O5Jdpr7772TrNfjkGuT/FeSXyU5I8kpSU6tqusnn3Y2ARsmeUKSxyT5qyS3T7L+ak2uSvKLJN9J8vkkJ1UV087ZBrBZkkel+TnYLMnlSX6c5LiqurrLbNMAbJNm/HdMskmSi5P8IMm3q2pFl9mkNQFvSXJA1zlG9LqqenvXIbQ0AY9LcsyAZvevqlOmkWepAk5K8xmylx9W1f2mlWchgNOS3LPHw2dU1d2nmWdSgCOT/O2AZk+qqi9OI8+sAvZO8okBzT5SVftNI8+4AfdMctqAZu+sqv2nkWcWAN9M8vA+TS5Psk1VXTOlSJ0A7pzkzBZNH1FVJ0w6z6QBr05y8IBm51XVdtPII3UB2CHJC5M8LMltkmye5A9Jzk7yjSQfqKpLu0s4WcADk3yvTdMkm1XVVROO1AlgWZrPiHsmuW+SLZOsSHJhmmvARyb56qxey+wHqCQ3JlnWovkjq+q4CUeSJEmSJEmSJEmSJEmSJEmjoNkxdoOuc3QN+Hmf3ZBcLNcCsAVws7kF9ZI0dsA7Wu5iN4te3fX8aekCPj/g52/J7OjeJWC/Fq/1XovqZwpw2trw8wIc2eI526PrnF0D9m4xT4d3nXMhgJMHjO+PwMaDe1r8gNsDKwbMx1pRtIhmR/A/tvj5f0nXWccBOKzFWL/QdU5JkwM8usX7AMA5XWfVaIDNWj7HALfuOq8kSZIkSZIkSZIkSZIkafFZp+sAa4uqWr4272Sv8amqP1XVpVV1RddZJElaWwBbJnncgGaHTSPLWuDIJFcOaLPvFHJIGt6bBjx+s6w9r9/90/+ay3VJ1ooCAHM7O5/coumDJp1lSh7Sos0PJ55CUpe2btnuZxNNoUlq+xz/qap+P9EkkiRJkiRJkiRJkiRJkqQlyQIAkiRJ0mDPSrJen8dvSPLJKWVZ0qrq6iSfHdDsWcAG08gjqb2qOjbJSQOaHQAs6WsRwGYZXOjgvVV1/hTizIoTWrRZ9AUAgFsluVOLpoNeJ5IWt3u2bPfdiabQJPkcS5IkSZIkSZIkSZIkSZImaknfdC9JkiSNyX4DHv9yVV0ylSRrh8MHPH7zJE+YRhBJQ/u3AY/fKcme0wjSoZck2azP49cmeeuUssyKzyZZMaDN7YAdpxFmgh7Zos0fYgEAaalruzj82Imm0CS1fY6/MdEUkiRJkiRJkiRJkiRJkqQlywIAkiRJUh/AA5LsNKDZoAXrGkJVnZzkzAHNBhVlkNSBqvpGBi9ufhOwbBp5pg3YNMnLBzR7X1VdOI08s6KqLkjynRZNnzfpLBPWJv/RVTWoGIKkxa3N4vDfJfnppINoYu7Rog1Jvj7pIJIkSZIkSZIkSZIkSZKkpWndrgNIkiRJM27dJK/t8/jKJMdNKcva5O+T3LfP4yuAZS6ilGbS69Is9q4ej++Y5BlJPj61RNPziiS37PP4pUkOmlKWWfO+JA8b0GZf4J+r6vppBBon4C5JHtSi6YcmnUVSd4A7JtmiRdMjqopJ59H4AZX+f6escmJVnTPpPJIkSZIkSZIkSZIkSZKkpckCAJIkaU2/TnJy1yFG9LuuA2jpqaqTMng3a41ZVX0zyTe7ziFpeFV1EvDxJPv0afbvwOer6upp5Zo0YOsk/zCg2T9W1SXTyDODPp/kl0nu2KfNLZIckOTgqSQarzekd9GLVb5dVT+aRhhJnXl8izYk+cikg2hi7pvkVi3aHTbpIJIkSZIkSZIkSZIkSZKkpcsCAJIk6c9U1buTvLvrHJKkJeUg4NUt236jqt440TRjAhya5H4tm99ikllm0KvSLILstQvytkn+Mck/TS3R5L0lyWZ9Hv9h1uLd36tqBXBwBs/BG4Cjq+pX08g1DsDuSfZq0fT1k84iqXNPatHmK1X1y4kn0aS0eY7PT3L0pINIkiRJkiRJkiRJkiRJkiSNBfBzejul63ySJEnSuACn9fnse3rX+cYFOLLPOEfxya7H1BZwwpjHfnjXYxon4CUDxnsdcNeuc44D8BBgZZ+xLgfu03XOrgHrAKe0eC2cBGzYdd42gNsBF7QY05FdZ5U0WcCdB/wuYO7xtsWDNGOAdYHft3jPf2nXWSVJkiRJkiRJkiRJkiRJi9u6XQfQWucbSc7o8dii2d1PkiRJkjTQ+5PsneSBPR7fIMkRwAOr6obpxRovYNMkH0lSfZq9q6pOnVKkmVVVK4EXJ/l+kmV9mj44yWeBvarqmumkGx6wfZrrHFsPaHpZkgMmn0hSx/4+/X8XJMkXqsoiqIvXU5NsM6DNuUk+PIUskiRJkiRJkiRJkiRJkiRJkiRJkoYBnNZnV9DTu843LsCRLXZBHcYnux5TW8AJYx774V2PadyA2wOXDxj3QV3nXAjgAwPG9xMWyW720wK8ruVr4jTgPl3nXRNQwNOBi1uMYSWwR9eZJU0WsB1w3YD3g6tpCodoEQKWAT9v8b7/xK6zSpIkSZIkSZIkSZIkSZIkSZIkSZoHFgAYlQUAlhjgmQPGvRJ4Rtc5RwHsPWBs1wL36DrnrKFZQP/5lq+LlTSvtZcBuwC37ijzDsBuwBtotwB0lX/tIq+k6QI+3uL94BVd59TogBe2eI4/33VOSZIkSZIkSZIkSZIkSZIkSZIkST1gAYBRWQBgCQI+MWDs1wL37zrnMID7ANcMGNeLu845q4CNga+P8Dr5YEd5zxgh66FdZJU0XcDDaYqV9HM8sKzrrBoNsDXwpwHP8XnAVl1nlSRJkiRJkiRJkiRJkiQtDet0HUCSJEmSJC15L0rSr/DFhkm+AGwzpTwLAmyf5JgkG/Vp9qkk75tOosWnqq5J8sQknx3y0J9OIE4bPxmiLUkOTnLAhLJImi1nJflQkuU9Hv9tqo0GMwAABKVJREFUkqdX1YrpRdKYXZHkoCSX93j8+iR7VtVF04skSZIkSZIkSZIkSZIkSVrKLAAgSZIkSZImqqquTPK4JBf2abZNkmOAm04n1WiArZN8Pcmt+jQ7Oclzq4rppFqcquqGJHsleUGSq1oeNsxC/HFqe95Lkjy5ql7r8y+tHarq/Kp6QZJ7JfnaGg9fkuTxVfWH6SfTuFTVNVV1cJIdkrwnyY2rPbw8yb5V9d+dhJMkSZIkSZIkSZIkSZIkSZIkSZLUDnAavfXbCX1RAZYB643xa1nXY2prbR77qID7A9f0eW0A/ADYvOus8wFuA/xiQP5fA1t2nXWxAe4EfA5Y0WduV9JRgQjgUQOe9+XAR33uJQEPAk4GLgLu3nUejd/c76yjgBuBvbvOI0mSJEmSJEmSJEmSJEmSJEmSJKkF1pICANKwgD2AGwYspv4JsG3XWVcH3Bs4b0DuC4Edu866mAF3Bj4AXDDP/J7TYa5b9XnO3wXs0FU2SbMHKOCWXefQZAFbdZ1BkiRJkiRJkiRJkiRJkrQ0VdcBJEmSJGkpAk5Lcs8eD59RVe4Iq7UW8MQkRybZoE+zb1bVblOK1BewbpKLk2zRp9n5Sf6mqs6aTqqlDag076G7Jtk+ya2TnFNVr+4w01eT3JDkwiSnJzk1yQ+rakVXmSRJkiRJkiRJkiRJkiRJkiRJkiRJktQCcFqfXcJP7zqf1DXgUcA1fV4nr+k64+qAL/bJei5wp64zSpIkSZIkSZIkSZIkSZIkSZIWv+o6gCRJkiQtRcDTk9yyx8N/qKpPTTOPNIuAhyQ5OsmWaz6U5A5Vdc70U80PeFqST8/z0GlJ9qiq3045kiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJ4wPcGvgv/tz3us61JmBj4Mo1cn4a2LjrbJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkjQWwIfAeYOXcwvr9u840n7kF/wBXA3/fdR5JkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiYCeDBwBrBN11nmAzwROBHYoesskiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRNFLBu1xl6AZYB1XUOSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZL0/9uDQwIAAAAAQf9fO8MCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMAJxaJOD/2/7gAAAAASUVORK5CYII=",fm="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz #@&$%?!+-_=*/\\|[](){}<>.;:,×",dm=4096,pm=256,zo=64,No=64,Uo=120,mm=hm,Am=i=>{typeof i=="number"&&(i=i.toString(10)[0]);const t=fm.indexOf(i);if(t===-1)return[0,0];const e=t%zo,n=Math.floor(t/zo);return[e,n]},Oo=(i,t=4)=>{typeof i=="number"&&(i=Math.floor(i).toString(10)),i.length>t&&(i=i.slice(0,t));const e=i.length;i.length<t&&(i=i.padEnd(t," "));const n=[...i].map(Am);return{count:e,offsets:n}};var gm=`precision highp float;
#define GLSLIFY 1

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float z_offset;

attribute vec3 position;

attribute float char_count;
varying float v_char_count;

attribute float size;

attribute vec3 color;
varying vec3 v_color;

// REPLACE-DECLARE:
attribute vec2 char_offset_X;
varying vec2 v_char_offset_X;
// REPLACE-END

void main() {

  v_char_count = char_count;
  v_color = color;
  
  // REPLACE-COMPUTE:
  v_char_offset_X = char_offset_X;
  // REPLACE-END
  
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
  gl_Position.z += z_offset;
	gl_PointSize = size * 2000.0 / -mvPosition.z;
}`,vm=`precision highp float;
#define GLSLIFY 1

uniform sampler2D atlas_texture;
uniform float char_max;
uniform vec2 char_size;
uniform float char_aspect;
uniform float opacity;

#ifdef BLEND_NORMAL
uniform float blend_mode_normal_alpha_discard;
#endif

varying float v_char_count;
varying vec3 v_color;

// REPLACE-DECLARE:
varying vec2 v_char_offset_X;
// REPLACE-END

vec2 get_uv_coords(in vec2 position, in vec2 offset, float index) {
  float x = 
    (position.x * char_max 
    + offset.x 
    - index) * char_size.x;
  float y = 1.0 - (
    position.y 
    + offset.y
    ) * char_size.y;
  return vec2(x, y);
}

vec4 get_texel(in vec2 position, in vec2 offset, float index) {
#ifdef BLEND_MULTIPLY
  float a = texture2D(atlas_texture, get_uv_coords(position, offset, index)).a;
  return vec4(mix(vec3(1.0), v_color, opacity * a), 1.0);
#else
  return vec4(v_color, opacity * texture2D(atlas_texture, get_uv_coords(position, offset, index)).a);
#endif
}

void main() {

  vec2 position = gl_PointCoord;

  position.x += -(char_max - v_char_count) / char_max / 2.0;

  position.y *= char_max * char_aspect;
  position.y += (1.0 - char_max * char_aspect) / 2.0;

  bool x_out = position.x < 0.0 || position.x > v_char_count / char_max;
  bool y_out = position.y < 0.0 || position.y > 1.0;

  if (x_out || y_out) {
    // gl_FragColor = vec4(1.0);
    // return;
    discard;
  }

  // REPLACE-COMPUTE:
  if (position.x < 1.0 / char_max) {
    gl_FragColor = get_texel(position, v_char_offset_X, 0.0);
  } else if (position.x < 2.0 / char_max) {
    gl_FragColor = get_texel(position, v_char_offset_X, 1.0);
  } else {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
  // REPLACE-END

#ifdef BLEND_NORMAL
  if (gl_FragColor.a < blend_mode_normal_alpha_discard) discard;
#endif
}
`;const Ts=i=>{const t=new Array(i);for(let e=0;e<i;e++)t[e]=e;return t},ai="  ",Sm=i=>`
attribute vec2 char_offset_${i};
varying vec2 v_char_offset_${i};
`.slice(1),xm=i=>`
${ai}v_char_offset_${i} = char_offset_${i};
`.slice(1),Mm=i=>`
varying vec2 v_char_offset_${i};
`.slice(1),_m=i=>{const t=Ts(i).map(Sm).join(""),e=Ts(i).map(xm).join(""),n=gm.replace(/ *\/\/ REPLACE-DECLARE[\s\S]*?REPLACE-END/,t).replace(/ *\/\/ REPLACE-COMPUTE[\s\S]*?REPLACE-END/,e),r=Ts(i).map(Mm).join(""),s=new Array;for(let c=0;c<i;c++)s.push(c===0?ai:`${ai}} else `),s.push(c<i-1?`if (position.x < ${c+1}.0 / char_max) `:""),s.push(`{
`),s.push(`${ai}${ai}gl_FragColor = get_texel(position, v_char_offset_${c}, ${c}.0);
`);s.push(`${ai}}
`);const a=s.join(""),o=vm.replace(/ *\/\/ REPLACE-DECLARE[\s\S]*?REPLACE-END/,r).replace(/ *\/\/ REPLACE-COMPUTE[\s\S]*?REPLACE-END/,a);return[n,o]},Zs=document.createElement("img");Zs.src=mm;const Ws=new _e(Zs);Ws.generateMipmaps=!1;Zs.onload=()=>Ws.needsUpdate=!0;class Em extends Qp{constructor(t,e,n){const[r,s]=_m(t),a={atlas_texture:{value:Ws},opacity:{value:1},z_offset:{value:n},char_max:{value:t},char_size:{value:new _t(No/dm,Uo/pm)},char_aspect:{value:No/Uo},blend_mode_normal_alpha_discard:{value:.5}},o={};e===Ps&&(o.BLEND_MULTIPLY=!0),e===an&&(o.BLEND_NORMAL=!0),super({uniforms:a,defines:o,vertexShader:r,fragmentShader:s,vertexColors:!0,depthTest:!0,blending:e,transparent:e===an,depthWrite:e===an})}get alpha(){return this.uniforms.opacity.value}set alpha(t){this.uniforms.opacity.value=t}get zOffset(){return this.uniforms.z_offset.value}set zOffset(t){this.uniforms.z_offset.value!==t&&(this.uniforms.z_offset.value=t,this.uniformsNeedUpdate=!0)}get alphaDiscard(){return this.uniforms.blend_mode_normal_alpha_discard.value}set alphaDiscard(t){this.uniforms.blend_mode_normal_alpha_discard.value!==t&&(this.uniforms.blend_mode_normal_alpha_discard.value=t,this.uniformsNeedUpdate=!0)}}const bs=12,ko={position:{x:0,y:0,z:0},color:"white",size:1,text:"foo"};class ym extends jp{constructor({charMax:t=4,blending:e=Rs,zOffset:n=-.01}={}){t>bs&&(console.warn(`max chars is ${bs}`),t=bs);const r=new Pe;r.setAttribute("position",new he(new Float32Array(0),3)),r.setAttribute("color",new he(new Float32Array(0),3)),r.setAttribute("size",new he(new Float32Array(0),1)),r.setAttribute("char_count",new he(new Float32Array(0),1));for(let a=0;a<t;a++)r.setAttribute(`char_offset_${a}`,new he(new Float32Array(0),2));const s=new Em(t,e,n);super(r,s),this.charMax=t}push(t,e){const n=this.geometry,r=n.getAttribute(t),s=new Float32Array(r.array.length+e.length);s.set(r.array,0),s.set(e,r.array.length),n.setAttribute(t,new he(s,r.itemSize))}pushFill(t,e,n){const r=this.geometry,s=r.getAttribute(t),a=new Float32Array(s.array.length+n);a.set(s.array,0),a.fill(e,s.array.length),r.setAttribute(t,new he(a,s.itemSize))}display(t=ko){if(Array.isArray(t)){t.forEach(u=>this.display(u));return}t=Object.assign(Object.assign({},ko),t);const{x:e,y:n,z:r}=t.position;this.push("position",[e,n,r]);const{r:s,g:a,b:o}=new Mt(t.color);this.push("color",[s,a,o]),this.push("size",[t.size]);const{charMax:c}=this,{count:l,offsets:h}=Oo(t.text,c);this.push("char_count",[l]);for(let u=0;u<c;u++)this.push(`char_offset_${u}`,h[u])}displayVertices(t,e={}){var n;if(t instanceof Pe)return this.displayVertices(t.getAttribute("position").array,e);const{color:r="white",size:s=1,format:a=void 0}=e,o=t instanceof Float32Array,c=typeof r=="function"?f=>new Mt(r(f)):(()=>{const f=new Mt(r);return()=>f})(),l=typeof s=="function"?f=>s(f):()=>s,h=o?t.length/3:t.length,{charMax:u}=this,d=o?t:new Float32Array(h*3),m=new Float32Array(h*3),A=new Float32Array(h),g=new Float32Array(h),p=new Array(u);for(let f=0;f<u;f++)p[f]=new Float32Array(h*2);if(o===!1)for(let f=0;f<h;f++){const{x:E,y:_,z:y}=t[f];d[f*3+0]=E,d[f*3+1]=_,d[f*3+2]=y}for(let f=0;f<h;f++){const E=c(f);m[f*3+0]=E.r,m[f*3+1]=E.g,m[f*3+2]=E.b,A[f]=l(f);const _=(n=a==null?void 0:a(f))!==null&&n!==void 0?n:f.toString(10),{count:y,offsets:z}=Oo(_,u);g[f]=y;for(let b=0;b<u;b++){const[w,O]=z[b];p[b][f*2+0]=w,p[b][f*2+1]=O}}this.push("position",d),this.push("color",m),this.push("size",A),this.push("char_count",g);for(let f=0;f<u;f++)this.push(`char_offset_${f}`,p[f])}displayFaces(t,{color:e="white",size:n=1,format:r=void 0}={}){if(t.isBufferGeometry){t=t;const s=t.index.array,a=t.getAttribute("position").array,o=s.length/3,c=new Float32Array(o*3);for(let l=0;l<o;l++){const h=s[l*3+0],u=a[h*3+0],d=a[h*3+1],m=a[h*3+2],A=s[l*3+1],g=a[A*3+0],p=a[A*3+1],f=a[A*3+2],E=s[l*3+2],_=a[E*3+0],y=a[E*3+1],z=a[E*3+2];c[l*3+0]=(u+g+_)/3,c[l*3+1]=(d+p+y)/3,c[l*3+2]=(m+f+z)/3}this.displayVertices(c,{color:e,size:n,format:r})}}}function Ec(i,t,e){const n=e.length-i-1;if(t>=e[n])return n-1;if(t<=e[i])return i;let r=i,s=n,a=Math.floor((r+s)/2);for(;t<e[a]||t>=e[a+1];)t<e[a]?s=a:r=a,a=Math.floor((r+s)/2);return a}function Tm(i,t,e,n){const r=[],s=[],a=[];r[0]=1;for(let o=1;o<=e;++o){s[o]=t-n[i+1-o],a[o]=n[i+o]-t;let c=0;for(let l=0;l<o;++l){const h=a[l+1],u=s[o-l],d=r[l]/(h+u);r[l]=c+h*d,c=u*d}r[o]=c}return r}function bm(i,t,e,n){const r=Ec(i,n,t),s=Tm(r,n,i,t),a=new ie(0,0,0,0);for(let o=0;o<=i;++o){const c=e[r-i+o],l=s[o],h=c.w*l;a.x+=c.x*h,a.y+=c.y*h,a.z+=c.z*h,a.w+=c.w*l}return a}function wm(i,t,e,n,r){const s=[];for(let u=0;u<=e;++u)s[u]=0;const a=[];for(let u=0;u<=n;++u)a[u]=s.slice(0);const o=[];for(let u=0;u<=e;++u)o[u]=s.slice(0);o[0][0]=1;const c=s.slice(0),l=s.slice(0);for(let u=1;u<=e;++u){c[u]=t-r[i+1-u],l[u]=r[i+u]-t;let d=0;for(let m=0;m<u;++m){const A=l[m+1],g=c[u-m];o[u][m]=A+g;const p=o[m][u-1]/o[u][m];o[m][u]=d+A*p,d=g*p}o[u][u]=d}for(let u=0;u<=e;++u)a[0][u]=o[u][e];for(let u=0;u<=e;++u){let d=0,m=1;const A=[];for(let g=0;g<=e;++g)A[g]=s.slice(0);A[0][0]=1;for(let g=1;g<=n;++g){let p=0;const f=u-g,E=e-g;u>=g&&(A[m][0]=A[d][0]/o[E+1][f],p=A[m][0]*o[f][E]);const _=f>=-1?1:-f,y=u-1<=E?g-1:e-u;for(let b=_;b<=y;++b)A[m][b]=(A[d][b]-A[d][b-1])/o[E+1][f+b],p+=A[m][b]*o[f+b][E];u<=E&&(A[m][g]=-A[d][g-1]/o[E+1][u],p+=A[m][g]*o[u][E]),a[g][u]=p;const z=d;d=m,m=z}}let h=e;for(let u=1;u<=n;++u){for(let d=0;d<=e;++d)a[u][d]*=h;h*=e-u}return a}function Rm(i,t,e,n,r){const s=r<i?r:i,a=[],o=Ec(i,n,t),c=wm(o,n,i,s,t),l=[];for(let h=0;h<e.length;++h){const u=e[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,l[h]=u}for(let h=0;h<=s;++h){const u=l[o-i].clone().multiplyScalar(c[h][0]);for(let d=1;d<=i;++d)u.add(l[o-i+d].clone().multiplyScalar(c[h][d]));a[h]=u}for(let h=s+1;h<=r+1;++h)a[h]=new ie(0,0,0);return a}function Pm(i,t){let e=1;for(let r=2;r<=i;++r)e*=r;let n=1;for(let r=2;r<=t;++r)n*=r;for(let r=2;r<=i-t;++r)n*=r;return e/n}function Cm(i){const t=i.length,e=[],n=[];for(let s=0;s<t;++s){const a=i[s];e[s]=new L(a.x,a.y,a.z),n[s]=a.w}const r=[];for(let s=0;s<t;++s){const a=e[s].clone();for(let o=1;o<=s;++o)a.sub(r[s-o].clone().multiplyScalar(Pm(s,o)*n[o]));r[s]=a.divideScalar(n[0])}return r}function Lm(i,t,e,n,r){const s=Rm(i,t,e,n,r);return Cm(s)}class Im extends Sc{constructor(t,e,n,r,s){super(),this.degree=t,this.knots=e,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new ie(o.x,o.y,o.z,o.w)}}getPoint(t,e=new L){const n=e,r=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=bm(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(t,e=new L){const n=e,r=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),s=Lm(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}}const en=class en{static precisionRound(t,e=5){var n=Math.pow(10,e),r=e<0?t:.01/n+t;return Math.round(r*n)/n}static clamp(t,e,n){return Math.max(e,Math.min(n,t))}static clamp01(t){return en.clamp(t,0,1)}static fit(t,e,n,r=0,s=1,a=!1){let o=(t-e)*(s-r)/(n-e)+r;return a?en.clamp(o,r,s):o}static fit01(t,e,n){return e+(n-e)*en.clamp01(t)}static fit01to11(t){return en.fit01(t,-1,1)}static degTorRad(t){return t*Math.PI/180}static radToDeg(t){return t*180/Math.PI}static isOdd(t){return t%2==1}static avg(...t){return t.reduce((e,n)=>e+n,0)/t.length}static median(...t){const e=t.flat().sort((n,r)=>n-r);return en.isOdd(e.length)?e.at(e.length/2):en.avg(e[e.length/2-1],e[e.length/2])}static counter(t){var e={};return t.forEach(n=>e[n]=(e[n]||0)+1),e}static arrayBatches(t,e=300){return t.reduce((n,r,s)=>{const a=Math.floor(s/e);return n[a]||(n[a]=[]),n[a].push(r),n},[])}};Se(en,"compareArrays",(t,e)=>t.length===e.length&&t.every((n,r)=>n===e[r]));let Kt=en;class ws{constructor(t,e,n,r,s=1){this.x=t,this.y=e,this.z=n,this.color=r instanceof Mt?r:new Mt(r),this.alpha=s}getColorArray(t=!0,e=1){const n=this.color.toArray();return t?n.push(this.alpha):n.push(e),n}}var On,Rr,yc;const bi=class bi{constructor(t=[0,1,0],e=[],{quality:n,degree:r,useCatmullRom:s}={}){xe(this,Rr);xe(this,On);if(this.quality=n||100,this.nurbsDegree=(r=="max"?t.length-1:Math.min(r,t.length-1))||2,this.useCatmullRom=t.length==2?!0:s||!1,!Kt.compareArrays([...e].sort(),e))throw new Error("x keys must be in ascending order");this.positions=[],t.forEach((a,o)=>{const c=e.length==t.length?e[o]:o;this.add(c,a)}),t.length>=2&&this.update()}static get LOW_CHANCE(){return new bi([0,.1,1],[0,1,1])}add(t,e){this.positions.push({x:t,y:e})}update(){let t=this.positions;if(t.length<2)throw new Error("Ramp must have at least 2 y-keys");let e=t[0].x;e!=0&&t.forEach(o=>{o.x-=e});const n=Math.max(...t.map(o=>o.x));t=t.map(o=>({x:o.x/n,y:o.y})),this.minValue=Math.min(...t.map(o=>o.y)),this.maxValue=Math.max(...t.map(o=>o.y));let r;if(this.useCatmullRom)r=new Kp(t);else{const o=this.nurbsDegree,c=Array(o+1).fill(0);t.forEach((l,h,u)=>{const d=(h+1)/(u.length-o);c.push(Kt.clamp01(d))}),r=new Im(o,c,t)}t=r.getSpacedPoints(this.quality-1),t=t.map(o=>({x:o.x,y:o.y}));const s=Math.min(...t.map(o=>o.y)),a=Math.max(...t.map(o=>o.y));t.forEach(o=>{if(s<0&&a>0){let c=o.y>0?Kt.fit(o.y,0,a,0,this.maxValue):Kt.fit(o.y,s,0,this.minValue,0),l=Kt.fit(o.y,s,a,this.minValue,this.maxValue),h=bi.sin(o.x),u=Kt.fit01(h,c,l);o.y=u}else o.y=Kt.fit(o.y,s,a,this.minValue,this.maxValue)}),this.maxValueIsAt=[...t].sort((o,c)=>c.y-o.y)[0].x,this.minValueIsAt=[...t].sort((o,c)=>o.y-c.y)[0].x,Vr(this,Rr,yc).call(this,t)}at(t){return this.table[Math.round((this.quality-1)*t)]}getDots(t=70){const n={x:t,y:t*.66},r=[],s=ee(this,On).sort((l,h)=>h.y-l.y)[0].y,a=ee(this,On).sort((l,h)=>l.y-h.y)[0].y,o=s-a||1,c=a/o;for(let l=0;l<=n.y;l++)r.push(new ws(-n.x/2,l-n.y/2,0,"blue"));for(let l=0;l<=n.x;l++)r.push(new ws(l-n.x/2,-n.y/2-c*n.y,0,"blue"));return ee(this,On).forEach(l=>{r.push(new ws(l.x*n.x-n.x/2,l.y/o*n.y-n.y/2-c*n.y,0,"cyan"))}),r}static sin(t,e=0,n=1){return Kt.precisionRound(Kt.fit01(Math.sin(t*Math.PI),e,n))}static fromLerp(t,e,n){const r=new bi([0,1],[0,1],{quality:t.quality});return r.table.forEach((s,a)=>{r.table[a]=Kt.fit01(n,t.table[a],e.table[a])}),r.minValue=Kt.fit01(n,t.minValue,e.minValue),r.maxValue=Kt.fit01(n,t.maxValue,e.maxValue),r.minValueIsAt=Kt.fit01(n,t.minValueIsAt,e.minValueIsAt),r.maxValueIsAt=Kt.fit01(n,t.maxValueIsAt,e.maxValueIsAt),r}};On=new WeakMap,Rr=new WeakSet,yc=function(t){const e=[];for(let n=0;n<t.length;n++){const r=n/(t.length-1);let s=t.map((o,c)=>({dist:Math.abs(o.x-r),x:o.x,y:o.y}));s=s.sort((o,c)=>o.dist-c.dist),s=s.slice(0,2).sort((o,c)=>o.x-c.x);let a=Kt.fit(r,s[0].x,s[1].x,s[0].y,s[1].y)||0;a=Kt.precisionRound(a,4),e.push(a)}t.forEach((n,r,s)=>{n.x=r/(s.length-1),n.y=e[r]}),Ye(this,On,t),this.table=e};let nn=bi;var Ii,Pr,Cr,Lr,kn,Fn;const Ie=class Ie{constructor({justReturn:t=!1}={}){xe(this,kn);xe(this,Fn);t||(Ye(this,kn,{pointsMin:xt.rangeInt(3,12,nn.LOW_CHANCE),pointsMax:xt.rangeInt(12,40,nn.LOW_CHANCE),bendMax:120,angleMax:30,noise:{amplitude:xt.range(1,10),scale:xt.range(1,3)}}),Ye(this,Fn,{lenMinMin:5,lenMinMax:15,lenMaxMin:15,lenMaxMax:30}),this.randomize())}static get globals(){return{sceneBgColor:Hn.debugColors?ee(Ie,Pr):ee(Ie,Ii),wormDotColor:(Hn.debugColors?ee(Ie,Lr):ee(Ie,Cr)).clone().lerpHSL(ee(this,Ii),xt.toMax(.1))}}randomize(t={bone:!0,arc:!0}){const[e,n]=[ee(this,kn),ee(this,Fn)];this.worm={pos:new _t(0,0),scale:xt.range(.9,1.1),angleInDeg:0,drawStyle:["shuffle","strips","radial_gradient"][xt.rangeInt(0,2)]},t.bone&&(this.bone={numPoints:xt.rangeInt(e.pointsMin,e.pointsMax,nn.LOW_CHANCE),bend:xt.spread(e.bendMax),angle:xt.spread(e.angleMax),noise:e.noise}),t.arc&&(this.arc={length:{min:xt.range(n.lenMinMin,n.lenMinMax),max:xt.range(n.lenMaxMin,n.lenMaxMax)},points:xt.rangeInt(8,30)});function r(){return xt.random()>.5?new nn([0,xt.range(-.4,1),0],[0,xt.range(.1,.9),1]):new nn([0,xt.range(-.4,1),xt.range(-.4,1),0],[0,xt.range(.1,.5),xt.range(.5,.9),1])}let s=r(),a=r();this.chunks=[];for(let l=0;l<this.bone.numPoints;l++){const h=l/(this.bone.numPoints-1);let u;h==0?u=s:h==1?u=a:u=nn.fromLerp(s,a,h),this.chunks.push({ramp:u})}const o=xt.range(2.4,3.5),c=xt.range(0,.05);this.chunks.density=o,this.chunks.jitter=c}clone(){const t=Object.assign(new Ie({justReturn:!0}),this);return Ye(t,kn,ee(this,kn)),Ye(t,Fn,ee(this,Fn)),t.randomize({bone:!1,arc:!1}),t}};Ii=new WeakMap,Pr=new WeakMap,Cr=new WeakMap,Lr=new WeakMap,kn=new WeakMap,Fn=new WeakMap,xe(Ie,Ii,new Mt(11973546)),xe(Ie,Pr,new Mt(2105376)),xe(Ie,Cr,new Mt("#2A3027")),xe(Ie,Lr,new Mt("#5A5C4B")),Se(Ie,"sceneHalfSize",{x:40,y:60});let gn=Ie;class Fo{static rotateAround(t,e,n){const r=Kt.degTorRad(n),s=Math.cos(r),a=Math.sin(r),o={x:t.x,y:t.y},c=e;return t.x=Kt.precisionRound(s*(o.x-c.x)+a*(o.y-c.y)+c.x),t.y=Kt.precisionRound(s*(o.y-c.y)-a*(o.x-c.x)+c.y),t}static rotate(t,e){const n=Kt.degTorRad(e),r=Math.cos(n),s=Math.sin(n),a={x:t.x,y:t.y};return t.x=r*a.x+s*a.y,t.y=r*a.y-s*a.x,t}static jitter(t,e){t.x+=xt.spread(e),t.y+=xt.spread(e)}}class Ar{static go(){this.prev=Date.now(),this.paused=!1}static pause(){this.paused||(this.paused=!0,this.sum+=Date.now()-this.prev)}static report(t=void 0){this.paused==!1&&this.pause(),console.log(`Pausable > ${Number(this.sum).toFixed(2)} ms ${t?">>> "+t:""}`),this.sum=0}}Se(Ar,"sum",0),Se(Ar,"prev"),Se(Ar,"paused",!0);const De=class De{constructor(t,e){Se(this,"canvas");Se(this,"drawing");De.canvas=t,De.drawing=e,De.addControls(t)}static addControls(t){t.addEventListener("mousedown",e=>this.zoomStart(e)),t.addEventListener("mouseup",e=>this.zoomEnd(e)),t.addEventListener("mouseleave",e=>this.zoomEnd(e)),t.addEventListener("touchstart",e=>this.zoomStart(e)),t.addEventListener("touchend",e=>this.zoomEnd(e)),t.addEventListener("dblclick",()=>this.saveImage())}static zoomStart(t){this.canvas.addEventListener("mousemove",this.zoomMove),this.canvas.addEventListener("touchmove",this.zoomMove),this.zoomMove(t)}static zoomEnd(t){this.canvas.removeEventListener("mousemove",this.zoomMove),this.canvas.removeEventListener("touchmove",this.zoomMove),this.drawing.camera.position.set(0,0,220),this.drawing.render()}static zoomMove(t){const e=t.currentTarget.getBoundingClientRect();(t.type=="touchmove"||t.type=="touchstart")&&(t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY);var n=Math.round(t.clientX-e.left),r=Math.round(t.clientY-e.top);let s=gn.sceneHalfSize.x,a=gn.sceneHalfSize.y;const o=Kt.fit(n,0,e.width,-s,s),c=Kt.fit(r,0,e.height,a,-a);De.drawing.camera.position.set(o,c,80);{let l="";for(let h in t){if(!["clientX","clientY","type"].some(d=>d==h))continue;let u=t[h];typeof u=="number"&&(u=Math.round(u)),(typeof u=="string"||typeof u=="number")&&(l+=h+": "+t[h]+"	")}Hn.setDebugText(l)}De.drawing.render()}};Se(De,"saveImage",()=>{De.drawing.render(),De.canvas.toBlob(t=>{De.saveBlob(t,`fossil ${new Date().toISOString().split("T")[0]} #${xt.initialSeed}.png`)})}),Se(De,"saveBlob",function(){const t=document.createElement("a");return document.body.appendChild(t),t.style.display="none",function(n,r){const s=window.URL.createObjectURL(n);t.href=s,t.download=r,t.click()}}());let ks=De;class Xs{constructor(t,e=0){this.bounds={x:t.x||0,y:t.y||0,width:t.width,height:t.height},this.maxObjects=typeof t.maxObjects=="number"?t.maxObjects:10,this.maxLevels=typeof t.maxLevels=="number"?t.maxLevels:4,this.level=e,this.objects=[],this.nodes=[]}getIndex(t){return t.qtIndex(this.bounds)}split(){const t=this.level+1,e=this.bounds.width/2,n=this.bounds.height/2,r=this.bounds.x,s=this.bounds.y,a=[{x:r+e,y:s},{x:r,y:s},{x:r,y:s+n},{x:r+e,y:s+n}];for(let o=0;o<4;o++)this.nodes[o]=new Xs({x:a[o].x,y:a[o].y,width:e,height:n,maxObjects:this.maxObjects,maxLevels:this.maxLevels},t)}insert(t){if(this.nodes.length){const e=this.getIndex(t);for(let n=0;n<e.length;n++)this.nodes[e[n]].insert(t);return}if(this.objects.push(t),this.objects.length>this.maxObjects&&this.level<this.maxLevels){this.nodes.length||this.split();for(let e=0;e<this.objects.length;e++){const n=this.getIndex(this.objects[e]);for(let r=0;r<n.length;r++)this.nodes[n[r]].insert(this.objects[e])}this.objects=[]}}retrieve(t){const e=this.getIndex(t);let n=this.objects;if(this.nodes.length)for(let r=0;r<e.length;r++)n=n.concat(this.nodes[e[r]].retrieve(t));return this.level===0?Array.from(new Set(n)):n}remove(t,e=!1){const n=this.objects.indexOf(t);n>-1&&this.objects.splice(n,1);for(let r=0;r<this.nodes.length;r++)this.nodes[r].remove(t);return this.level===0&&!e&&this.join(),n!==-1}update(t,e=!1){this.remove(t,e),this.insert(t)}join(){let t=Array.from(this.objects);for(let n=0;n<this.nodes.length;n++){const r=this.nodes[n].join();t=t.concat(r)}const e=Array.from(new Set(t));if(e.length<=this.maxObjects){this.objects=e;for(let n=0;n<this.nodes.length;n++)this.nodes[n].objects=[];this.nodes=[]}return t}clear(){this.objects=[];for(let t=0;t<this.nodes.length;t++)this.nodes.length&&this.nodes[t].clear();this.nodes=[]}}class Ys{constructor(t){this.x=t.x,this.y=t.y,this.r=t.r,this.data=t.data}qtIndex(t){const e=[],n=t.width/2,r=t.height/2,s=t.x+n,a=t.y+r,o=[[s,t.y],[t.x,t.y],[t.x,a],[s,a]];for(let c=0;c<o.length;c++)Ys.intersectRect(this.x,this.y,this.r,o[c][0],o[c][1],o[c][0]+n,o[c][1]+r)&&e.push(c);return e}static intersectRect(t,e,n,r,s,a,o){const c=t-Math.max(r,Math.min(t,a)),l=e-Math.max(s,Math.min(e,o));return c*c+l*l<n*n}}class Bo{constructor(t){const e=new Mt(xt.random()*16777215);this.circles=[],this.edges=[];for(let n=0;n<t.length;n++){const r=t[n];if(this.circles.push(r),n<t.length-1){const s=t[n+1],a=r.pos.add(s.pos).divideScalar(2),o=(r.r+s.r)/2,c=new gr(a.x,a.y,o);this.circles.push(c),r.child=c,c.parent=r,this.edges.push(new Ho(r,c)),c.child=s,s.parent=c,this.edges.push(new Ho(c,s))}}this.circles.forEach(n=>n.color=e),this.circles.forEach(n=>{var r,s,a,o,c,l;[(s=(r=n.parent)==null?void 0:r.parent)==null?void 0:s.parent,(a=n.parent)==null?void 0:a.parent,n.parent,n.child,(o=n.child)==null?void 0:o.child,(l=(c=n.child)==null?void 0:c.child)==null?void 0:l.child].forEach(h=>{h&&n.noColisionWith.add(h)})}),this.applyWormShape(),this.edges.forEach(n=>n.updateLenSq()),this.renumber()}applyWormShape(){let t=this.circles.reduce((e,n)=>e+n.r,0)/this.circles.length;this.circles.forEach((e,n)=>{const r=n/(this.circles.length-1);e.r=nn.sin(r,.7,1.3)*t})}renumber(t=0){this.circles.forEach((e,n)=>e.id=t+n)}solveEdgeLengthPass(t=.2){this.edges.forEach(e=>{e.lengthPass()})}solveBendPass(){}}class Ho{constructor(t,e){this.c1=t,this.c2=e,this.updateLenSq()}updateLenSq(){this.targetLenSq=this.c1.distanceToSquared(this.c2)*.8}lengthPass(){const t=this.c1.distanceToSquared(this.c2),e=1,n=(this.targetLenSq/t+e)/(1+e),r=this.c1.pos.add(this.c2.pos).divideScalar(2),s=r.clone().sub(this.c1.pos).multiplyScalar(n),a=r.clone().sub(s),o=r.clone().sub(s.clone().negate());this.c1.set(a.x,a.y),this.c2.set(o.x,o.y)}toString(){return this.c1.id+"<>"+this.c2.id}}class Vo{constructor(){this.iter=0,this.circles=[],this.qtree=new Xs({width:gn.sceneHalfSize.x*2,height:gn.sceneHalfSize.y*2,x:-gn.sceneHalfSize.x,y:-gn.sceneHalfSize.y}),this.spawn()}spawn(){let t=this.circles;const e=xt.range(4,10),n=32*1.8,r=50*1.8,s=1.3,a=Math.round(n/e/s),o=Math.round(r/e/s);for(let c=0;c<a;c++)for(let l=0;l<o;l++){const h=c/(a-1)*n-n/2+xt.spread(e/1.3),u=l/(o-1)*r-r/2+xt.spread(e/1.3);t.push(new gr(h,u,e+xt.spread(e/5),t.length))}switch(xt.rangeInt(0,4)){case 0:t.sort(()=>xt.random()-.5);break;case 1:t.forEach(c=>c.x=-c.x);break;case 2:t.forEach(c=>Fo.rotate(c,xt.spread(180)));break;case 3:t.filter(c=>xt.spread(1)>0).forEach(c=>Fo.rotate(c,xt.spread(180)));break}console.log("circles:",t.length)}deintersect(t=.4,e=.2){const n=this.qtree;n.clear();const r=this.circles;r.forEach(a=>{n.insert(a)});let s=!0;return r.forEach(a=>{let c=n.retrieve(a).filter(l=>{if(a===l)return!1;const h=a.distanceToSquared(l),u=(a.r+l.r)*(a.r+l.r)*(1-t);return h<u});if(a.noColisionWith.size&&(c=c.filter(l=>!a.noColisionWith.has(l))),c.length>0){s=!1;const l=new _t;c.forEach(h=>{const u=a.clone().sub(h);l.add(u)}),a.step=l.normalize().multiplyScalar(e),a.add(a.step)}else a.step=void 0}),s}connect(){console.log("connecting");const t=this.qtree;t.clear();const e=this.circles;e.forEach(a=>t.insert(a));let n=e.filter(a=>!a.child);const r=[],s=3;n.forEach(a=>{let o=t.retrieve(new gr(a.x,a.y,a.r*s));o.splice(o.indexOf(a),1),o=o.filter(u=>!u.parent),o=o.filter(u=>a.parent!==u),a.distSqMap||(a.distSqMap=new Map),o.forEach(u=>{if(!a.distSqMap.has(u)){const d=a.distanceToSquared(u);a.distSqMap.set(u,d),u.distSqMap||(u.distSqMap=new Map),u.distSqMap.set(a,d)}});const c=a.r*a.r*3*3;o=o.filter(u=>a.distSqMap.get(u)<c);const l=.5;o=o.filter(u=>{const d=a.pos.sub(u.pos).normalize();if(a.parent&&a.parent.pos.sub(a.pos).normalize().dot(d)<l)return!1;if(u.child){const m=u.pos.sub(u.child.pos).normalize();if(d.dot(m)<l)return!1}return!0});function h(u,d,m,A){function g(p,f,E){return(E.y-p.y)*(f.x-p.x)>(f.y-p.y)*(E.x-p.x)}return g(u,m,A)!=g(d,m,A)&&g(u,d,m)!=g(u,d,A)}if(o=o.filter(u=>{for(const d of r)if(h(a.pos,u.pos,d[0],d[1]))return!1;return!0}),o.sort((u,d)=>a.distSqMap.get(u)-a.distSqMap.get(d)),o.length>0){const u=o[0];a.child=u,u.parent=a;let d=a.pos.sub(u.pos).normalize().multiplyScalar(.001);r.push([a.pos.sub(d),u.pos.add(d)])}}),e.forEach(a=>a.distSqMap=void 0),e.filter(a=>!a.child&&!a.parent).forEach(a=>{const o=a.pos.setX(a.pos.x+a.r).rotateAround(a.pos,xt.toMax(2*Math.PI));a.r/=1.3;const c=new gr(o.x,o.y,a.r);c.parent=a,a.child=c,this.circles.push(c)})}makeLarvas(){const t=[];this.circles.filter(n=>!n.parent).forEach(n=>{let r=[n],s=n;for(;s.child;)s=s.child,r.push(s);new Bo(r),t.push(new Bo(r))}),this.larvas=t,this.circles=t.flatMap(n=>n.circles)}nextIter(t=1,e=0){this.iter++;const n=this.iter,[r,s]=[100,300];if(n<r)this.deintersect()&&(this.iter=r-1);else if(n==r)this.connect(),this.makeLarvas();else if(n>r&&n<s)this.larvas.forEach(o=>{o.solveEdgeLengthPass(),o.solveBendPass()}),this.deintersect(.2)&&(this.iter=s-1);else return!1;return e++,e<t&&this.nextIter(t,e),!0}getDrawableCircles(){return this.circles}}class gr extends _t{constructor(t,e,n,r=NaN){super(t,e),this.r=n,this.id=r,this.step,this.child,this.parent,this.distSqMap,this.noColisionWith=new Set,this.qtIndex=Ys.prototype.qtIndex}get pos(){return new _t(this.x,this.y)}}class Dm{constructor(t){const e=new Xp;e.background=new Mt(1052688);const n=new Re(30,t.x/t.y,.1,250),r=document.getElementById("my_canvas"),s=new Wp({antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!1,canvas:r,precision:"lowp"});s.setSize(t.x,t.y,!1);const a=new im(16777215,600,600,Math.PI/4,1,1.01);a.position.set(0,0,150),e.add(a),n.position.z=220,this.scene=e,this.renderer=s,this.camera=n,new ks(r,this),this.wp=new Vo}updateScene(){const t=(h,u)=>new _t(h,u),e=(h,u,d)=>new L(h,u,d),n=h=>new $p({transparent:!0,opacity:.2,color:h}),r=this.scene;r.remove(...r.children.slice(1));const s=this.wp,a=new Or(1,1,.04),o=n("cyan"),c=n("lightblue"),l=new ym;r.add(l),s.getDrawableCircles().forEach(h=>{const u=new Be(a,h.color?n(h.color):h.child?o:c);if(u.position.set(h.x,h.y,0),u.rotation.x=.5*Math.PI,u.scale.set(h.r,h.r,h.r),r.add(u),h.step&&r.add(new Lo(e(h.step.x,h.step.y,0),e(h.x,h.y,.1),1,"green")),h.child){const d=t(h.child.x,h.child.y).sub(h),m=d.length();d.normalize(),r.add(new Lo(e(d.x,d.y,0),e(h.x,h.y,1),m,"yellow",1,1))}})}setup(){this.wp=new Vo}renderOnce(){this.updateScene(),this.renderer.render(this.scene,this.camera)}render(t){if(!this.wp.nextIter(3)){Ar.report();return}this.renderOnce(),requestAnimationFrame(this.render.bind(this))}}Hn.init();xt.setSeed(Math.random()*2**32);console.time("whole thing");const zm={x:1400,y:2e3};{const i=new Dm(zm);Hn.attachDrawing(i),i.render()}console.timeEnd("whole thing");
