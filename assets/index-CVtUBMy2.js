(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Nf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function ES(){if(N_)return Ro;N_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var O_;function TS(){return O_||(O_=1,Nf.exports=ES()),Nf.exports}var Ht=TS(),Of={exports:{}},Co={},Pf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function bS(){return P_||(P_=1,function(r){function t(z,at){var q=z.length;z.push(at);t:for(;0<q;){var xt=q-1>>>1,L=z[xt];if(0<l(L,at))z[xt]=at,z[q]=L,q=xt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var at=z[0],q=z.pop();if(q!==at){z[0]=q;t:for(var xt=0,L=z.length,tt=L>>>1;xt<tt;){var Mt=2*(xt+1)-1,bt=z[Mt],W=Mt+1,ht=z[W];if(0>l(bt,q))W<L&&0>l(ht,bt)?(z[xt]=ht,z[W]=q,xt=W):(z[xt]=bt,z[Mt]=q,xt=Mt);else if(W<L&&0>l(ht,q))z[xt]=ht,z[W]=q,xt=W;else break t}}return at}function l(z,at){var q=z.sortIndex-at.sortIndex;return q!==0?q:z.id-at.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,v=null,x=3,y=!1,R=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(z){for(var at=i(m);at!==null;){if(at.callback===null)s(m);else if(at.startTime<=z)s(m),at.sortIndex=at.expirationTime,t(p,at);else break;at=i(m)}}function D(z){if(w=!1,O(z),!R)if(i(p)!==null)R=!0,pt();else{var at=i(m);at!==null&&ft(D,at.startTime-z)}}var H=!1,G=-1,F=5,K=-1;function C(){return!(r.unstable_now()-K<F)}function A(){if(H){var z=r.unstable_now();K=z;var at=!0;try{t:{R=!1,w&&(w=!1,g(G),G=-1),y=!0;var q=x;try{e:{for(O(z),v=i(p);v!==null&&!(v.expirationTime>z&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,x=v.priorityLevel;var L=xt(v.expirationTime<=z);if(z=r.unstable_now(),typeof L=="function"){v.callback=L,O(z),at=!0;break e}v===i(p)&&s(p),O(z)}else s(p);v=i(p)}if(v!==null)at=!0;else{var tt=i(m);tt!==null&&ft(D,tt.startTime-z),at=!1}}break t}finally{v=null,x=q,y=!1}at=void 0}}finally{at?I():H=!1}}}var I;if(typeof P=="function")I=function(){P(A)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,st=lt.port2;lt.port1.onmessage=A,I=function(){st.postMessage(null)}}else I=function(){M(A,0)};function pt(){H||(H=!0,I())}function ft(z,at){G=M(function(){z(r.unstable_now())},at)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){R||y||(R=!0,pt())},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var at=3;break;default:at=x}var q=x;x=at;try{return z()}finally{x=q}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,at){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=x;x=z;try{return at()}finally{x=q}},r.unstable_scheduleCallback=function(z,at,q){var xt=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?xt+q:xt):q=xt,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=q+L,z={id:_++,callback:at,priorityLevel:z,startTime:q,expirationTime:L,sortIndex:-1},q>xt?(z.sortIndex=q,t(m,z),i(p)===null&&z===i(m)&&(w?(g(G),G=-1):w=!0,ft(D,q-xt))):(z.sortIndex=L,t(p,z),R||y||(R=!0,pt())),z},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(z){var at=x;return function(){var q=x;x=at;try{return z.apply(this,arguments)}finally{x=q}}}}(zf)),zf}var z_;function AS(){return z_||(z_=1,Pf.exports=bS()),Pf.exports}var Bf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function RS(){if(B_)return oe;B_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,w={};function M(L,tt,Mt){this.props=L,this.context=tt,this.refs=w,this.updater=Mt||y}M.prototype.isReactComponent={},M.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=M.prototype;function P(L,tt,Mt){this.props=L,this.context=tt,this.refs=w,this.updater=Mt||y}var O=P.prototype=new g;O.constructor=P,R(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function F(L,tt,Mt,bt,W,ht){return Mt=ht.ref,{$$typeof:r,type:L,key:tt,ref:Mt!==void 0?Mt:null,props:ht}}function K(L,tt){return F(L.type,tt,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function A(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Mt){return tt[Mt]})}var I=/\/+/g;function lt(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?A(""+L.key):tt.toString(36)}function st(){}function pt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(st,st):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ft(L,tt,Mt,bt,W){var ht=typeof L;(ht==="undefined"||ht==="boolean")&&(L=null);var vt=!1;if(L===null)vt=!0;else switch(ht){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(L.$$typeof){case r:case t:vt=!0;break;case _:return vt=L._init,ft(vt(L._payload),tt,Mt,bt,W)}}if(vt)return W=W(L),vt=bt===""?"."+lt(L,0):bt,D(W)?(Mt="",vt!=null&&(Mt=vt.replace(I,"$&/")+"/"),ft(W,tt,Mt,"",function(Yt){return Yt})):W!=null&&(C(W)&&(W=K(W,Mt+(W.key==null||L&&L.key===W.key?"":(""+W.key).replace(I,"$&/")+"/")+vt)),tt.push(W)),1;vt=0;var Et=bt===""?".":bt+":";if(D(L))for(var At=0;At<L.length;At++)bt=L[At],ht=Et+lt(bt,At),vt+=ft(bt,tt,Mt,ht,W);else if(At=x(L),typeof At=="function")for(L=At.call(L),At=0;!(bt=L.next()).done;)bt=bt.value,ht=Et+lt(bt,At++),vt+=ft(bt,tt,Mt,ht,W);else if(ht==="object"){if(typeof L.then=="function")return ft(pt(L),tt,Mt,bt,W);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return vt}function z(L,tt,Mt){if(L==null)return L;var bt=[],W=0;return ft(L,bt,"","",function(ht){return tt.call(Mt,ht,W++)}),bt}function at(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(Mt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Mt)},function(Mt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Mt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var q=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return oe.Children={map:z,forEach:function(L,tt,Mt){z(L,function(){tt.apply(this,arguments)},Mt)},count:function(L){var tt=0;return z(L,function(){tt++}),tt},toArray:function(L){return z(L,function(tt){return tt})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},oe.Component=M,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=s,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cloneElement=function(L,tt,Mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var bt=R({},L.props),W=L.key,ht=void 0;if(tt!=null)for(vt in tt.ref!==void 0&&(ht=void 0),tt.key!==void 0&&(W=""+tt.key),tt)!G.call(tt,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&tt.ref===void 0||(bt[vt]=tt[vt]);var vt=arguments.length-2;if(vt===1)bt.children=Mt;else if(1<vt){for(var Et=Array(vt),At=0;At<vt;At++)Et[At]=arguments[At+2];bt.children=Et}return F(L.type,W,void 0,void 0,ht,bt)},oe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},oe.createElement=function(L,tt,Mt){var bt,W={},ht=null;if(tt!=null)for(bt in tt.key!==void 0&&(ht=""+tt.key),tt)G.call(tt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(W[bt]=tt[bt]);var vt=arguments.length-2;if(vt===1)W.children=Mt;else if(1<vt){for(var Et=Array(vt),At=0;At<vt;At++)Et[At]=arguments[At+2];W.children=Et}if(L&&L.defaultProps)for(bt in vt=L.defaultProps,vt)W[bt]===void 0&&(W[bt]=vt[bt]);return F(L,ht,void 0,void 0,null,W)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:d,render:L}},oe.isValidElement=C,oe.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:at}},oe.memo=function(L,tt){return{$$typeof:m,type:L,compare:tt===void 0?null:tt}},oe.startTransition=function(L){var tt=H.T,Mt={};H.T=Mt;try{var bt=L(),W=H.S;W!==null&&W(Mt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(xt,q)}catch(ht){q(ht)}finally{H.T=tt}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(L){return H.H.use(L)},oe.useActionState=function(L,tt,Mt){return H.H.useActionState(L,tt,Mt)},oe.useCallback=function(L,tt){return H.H.useCallback(L,tt)},oe.useContext=function(L){return H.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,tt){return H.H.useDeferredValue(L,tt)},oe.useEffect=function(L,tt){return H.H.useEffect(L,tt)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(L,tt,Mt){return H.H.useImperativeHandle(L,tt,Mt)},oe.useInsertionEffect=function(L,tt){return H.H.useInsertionEffect(L,tt)},oe.useLayoutEffect=function(L,tt){return H.H.useLayoutEffect(L,tt)},oe.useMemo=function(L,tt){return H.H.useMemo(L,tt)},oe.useOptimistic=function(L,tt){return H.H.useOptimistic(L,tt)},oe.useReducer=function(L,tt,Mt){return H.H.useReducer(L,tt,Mt)},oe.useRef=function(L){return H.H.useRef(L)},oe.useState=function(L){return H.H.useState(L)},oe.useSyncExternalStore=function(L,tt,Mt){return H.H.useSyncExternalStore(L,tt,Mt)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.0.0",oe}var F_;function nd(){return F_||(F_=1,Bf.exports=RS()),Bf.exports}var Ff={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function CS(){if(I_)return Tn;I_=1;var r=nd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,_)},Tn.flushSync=function(p){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=_,s.d.f()}},Tn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Tn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Tn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):_==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Tn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Tn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Tn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Tn.requestFormReset=function(p){s.d.r(p)},Tn.unstable_batchedUpdates=function(p,m){return p(m)},Tn.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.0.0",Tn}var H_;function wS(){if(H_)return Ff.exports;H_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ff.exports=CS(),Ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function DS(){if(G_)return Co;G_=1;var r=AS(),t=nd(),i=wS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),y=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var F=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case g:return n=e.displayName||null,n!==null?n:K(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return K(e(n))}catch{}}return null}var C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,I,lt;function st(e){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+e+lt}var pt=!1;function ft(e,n){if(!e||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ot){var it=ot}Reflect.construct(e,[],St)}else{try{St.call()}catch(ot){it=ot}e.call(St.prototype)}}else{try{throw Error()}catch(ot){it=ot}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ot){if(ot&&it&&typeof ot.stack=="string")return[ot.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var N=S.split(`
`),k=T.split(`
`);for(c=o=0;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(o===N.length||c===k.length)for(o=N.length-1,c=k.length-1;1<=o&&0<=c&&N[o]!==k[c];)c--;for(;1<=o&&0<=c;o--,c--)if(N[o]!==k[c]){if(o!==1||c!==1)do if(o--,c--,0>c||N[o]!==k[c]){var ct=`
`+N[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=c);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?st(a):""}function z(e){switch(e.tag){case 26:case 27:case 5:return st(e.type);case 16:return st("Lazy");case 13:return st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return e=ft(e.type,!1),e;case 11:return e=ft(e.type.render,!1),e;case 1:return e=ft(e.type,!0),e;default:return""}}function at(e){try{var n="";do n+=z(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function q(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function xt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(q(e)!==e)throw Error(s(188))}function tt(e){var n=e.alternate;if(!n){if(n=q(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return L(c),e;if(f===o)return L(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,o=f;break}if(T===o){S=!0,o=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=c;break}if(T===o){S=!0,o=f,a=c;break}T=T.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function Mt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Mt(e),n!==null)return n;e=e.sibling}return null}var bt=Array.isArray,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},vt=[],Et=-1;function At(e){return{current:e}}function Yt(e){0>Et||(e.current=vt[Et],vt[Et]=null,Et--)}function Dt(e,n){Et++,vt[Et]=e.current,e.current=n}var Me=At(null),Ce=At(null),$t=At(null),B=At(null);function en(e,n){switch(Dt($t,n),Dt(Ce,e),Dt(Me,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?l_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=l_(e),n=c_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Yt(Me),Dt(Me,n)}function ie(){Yt(Me),Yt(Ce),Yt($t)}function ce(e){e.memoizedState!==null&&Dt(B,e);var n=Me.current,a=c_(n,e.type);n!==a&&(Dt(Ce,e),Dt(Me,a))}function Gt(e){Ce.current===e&&(Yt(Me),Yt(Ce)),B.current===e&&(Yt(B),yo._currentValue=ht)}var we=Object.prototype.hasOwnProperty,Vt=r.unstable_scheduleCallback,U=r.unstable_cancelCallback,E=r.unstable_shouldYield,J=r.unstable_requestPaint,ut=r.unstable_now,gt=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,kt=r.unstable_UserBlockingPriority,wt=r.unstable_NormalPriority,zt=r.unstable_LowPriority,_e=r.unstable_IdlePriority,Tt=r.log,Bt=r.unstable_setDisableYieldValue,Qt=null,Xt=null;function Ft(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}function re(e){if(typeof Tt=="function"&&Bt(e),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Qt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Nt,Ue=Math.log,X=Math.LN2;function Nt(e){return e>>>=0,e===0?32:31-(Ue(e)/X|0)|0}var rt=128,_t=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ut(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,f=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~c,a!==0?o=Ct(a):(f&=T,f!==0?o=Ct(f):e||(S=T&~S,S!==0&&(o=Ct(S))))):(T=a&~c,T!==0?o=Ct(T):f!==0?o=Ct(f):e||(S=a&~S,S!==0&&(o=Ct(S)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:o}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ge(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(){var e=rt;return rt<<=1,(rt&4194176)===0&&(rt=128),e}function Ee(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Rn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vo(e,n,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,N=e.expirationTimes,k=e.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Zt(a),St=1<<ct;T[ct]=0,N[ct]=-1;var it=k[ct];if(it!==null)for(k[ct]=null,ct=0;ct<it.length;ct++){var ot=it[ct];ot!==null&&(ot.lane&=-536870913)}a&=~St}o!==0&&Lr(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Lr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function yi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Zt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:R_(e.type))}function ko(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var Vn=Math.random().toString(36).slice(2),an="__reactFiber$"+Vn,sn="__reactProps$"+Vn,Oi="__reactContainer$"+Vn,Ts="__reactEvents$"+Vn,Dc="__reactListeners$"+Vn,Uc="__reactHandles$"+Vn,Xo="__reactResources$"+Vn,Ga="__reactMarker$"+Vn;function Or(e){delete e[an],delete e[sn],delete e[Ts],delete e[Dc],delete e[Uc]}function Pi(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=h_(e);e!==null;){if(a=e[an])return a;e=h_(e)}return n}e=a,a=e.parentNode}return null}function b(e){if(e=e[an]||e[Oi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function et(e){var n=e[Xo];return n||(n=e[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[Ga]=!0}var j=new Set,yt={};function Rt(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(yt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},jt={};function ge(e){return we.call(jt,e)?!0:we.call(ne,e)?!1:ee.test(e)?jt[e]=!0:(ne[e]=!0,!1)}function ve(e,n,a){if(ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function He(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Te(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rn(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Se(e){e._valueTracker||(e._valueTracker=rn(e))}function Bn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wn=/[\n"\\]/g;function hn(e){return e.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Le(e,n,a,o,c,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?yn(e,S,ae(n)):a!=null?yn(e,S,ae(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ae(T):e.removeAttribute("name")}function Dn(e,n,a,o,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function yn(e,n,a){n==="number"&&fi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xe(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function vn(e,n,a){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ae(a):""}function bs(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(bt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var xv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _d(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||xv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&_d(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&_d(e,f,n[f])}function Lc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(e){return yv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Nc=null;function Oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Rs=null;function vd(e){var n=b(e);if(n&&(e=n.stateNode)){var a=e[sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Le(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[sn]||null;if(!c)throw Error(s(90));Le(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Bn(o)}break t;case"textarea":vn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Xe(e,!!a.multiple,n,!1)}}}var Pc=!1;function Sd(e,n,a){if(Pc)return e(n,a);Pc=!0;try{var o=e(n);return o}finally{if(Pc=!1,(As!==null||Rs!==null)&&(Cl(),As&&(n=As,e=Rs,Rs=As=null,vd(n),e)))for(n=0;n<e.length;n++)vd(e[n])}}function Pr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var zc=!1;if(Ot)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){zc=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{zc=!1}var la=null,Bc=null,Yo=null;function xd(){if(Yo)return Yo;var e,n=Bc,a=n.length,o,c="value"in la?la.value:la.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return Yo=c.slice(e,1<o?1-o:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Md(){return!1}function In(e){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:Md,this.isPropagationStopped=Md,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=In(Va),Br=A({},Va,{view:0,detail:0}),Ev=In(Br),Fc,Ic,Fr,Ko=A({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Fc=e.screenX-Fr.screenX,Ic=e.screenY-Fr.screenY):Ic=Fc=0,Fr=e),Fc)},movementY:function(e){return"movementY"in e?e.movementY:Ic}}),yd=In(Ko),Tv=A({},Ko,{dataTransfer:0}),bv=In(Tv),Av=A({},Br,{relatedTarget:0}),Hc=In(Av),Rv=A({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=In(Rv),wv=A({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=In(wv),Uv=A({},Va,{data:0}),Ed=In(Uv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ov[e])?!!n[e]:!1}function Gc(){return Pv}var zv=A({},Br,{key:function(e){if(e.key){var n=Lv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bv=In(zv),Fv=A({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=In(Fv),Iv=A({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Hv=In(Iv),Gv=A({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=In(Gv),kv=A({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=In(kv),Wv=A({},Va,{newState:0,oldState:0}),Yv=In(Wv),qv=[9,13,27,32],Vc=Ot&&"CompositionEvent"in window,Ir=null;Ot&&"documentMode"in document&&(Ir=document.documentMode);var jv=Ot&&"TextEvent"in window&&!Ir,bd=Ot&&(!Vc||Ir&&8<Ir&&11>=Ir),Ad=" ",Rd=!1;function Cd(e,n){switch(e){case"keyup":return qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cs=!1;function Zv(e,n){switch(e){case"compositionend":return wd(n);case"keypress":return n.which!==32?null:(Rd=!0,Ad);case"textInput":return e=n.data,e===Ad&&Rd?null:e;default:return null}}function Kv(e,n){if(Cs)return e==="compositionend"||!Vc&&Cd(e,n)?(e=xd(),Yo=Bc=la=null,Cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bd&&n.locale!=="ko"?null:n.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qv[e.type]:n==="textarea"}function Ud(e,n,a,o){As?Rs?Rs.push(o):Rs=[o]:As=o,n=Nl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Hr=null,Gr=null;function Jv(e){i_(e,0)}function Qo(e){var n=Y(e);if(Bn(n))return e}function Ld(e,n){if(e==="change")return n}var Nd=!1;if(Ot){var kc;if(Ot){var Xc="oninput"in document;if(!Xc){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Xc=typeof Od.oninput=="function"}kc=Xc}else kc=!1;Nd=kc&&(!document.documentMode||9<document.documentMode)}function Pd(){Hr&&(Hr.detachEvent("onpropertychange",zd),Gr=Hr=null)}function zd(e){if(e.propertyName==="value"&&Qo(Gr)){var n=[];Ud(n,Gr,e,Oc(e)),Sd(Jv,n)}}function $v(e,n,a){e==="focusin"?(Pd(),Hr=n,Gr=a,Hr.attachEvent("onpropertychange",zd)):e==="focusout"&&Pd()}function t0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Gr)}function e0(e,n){if(e==="click")return Qo(n)}function n0(e,n){if(e==="input"||e==="change")return Qo(n)}function i0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:i0;function Vr(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!we.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var a=Bd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bd(a)}}function Id(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Id(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=fi(e.document)}return n}function Wc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function a0(e,n){var a=Hd(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Id(n.ownerDocument.documentElement,n)){if(o!==null&&Wc(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!a.extend&&f>o&&(c=o,o=f,f=c),c=Fd(n,f);var S=Fd(n,o);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>o?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var s0=Ot&&"documentMode"in document&&11>=document.documentMode,ws=null,Yc=null,kr=null,qc=!1;function Gd(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||ws==null||ws!==fi(o)||(o=ws,"selectionStart"in o&&Wc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),kr&&Vr(kr,o)||(kr=o,o=Nl(Yc,"onSelect"),0<o.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ws)))}function ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},jc={},Vd={};Ot&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Xa(e){if(jc[e])return jc[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vd)return jc[e]=n[a];return e}var kd=Xa("animationend"),Xd=Xa("animationiteration"),Wd=Xa("animationstart"),r0=Xa("transitionrun"),o0=Xa("transitionstart"),l0=Xa("transitioncancel"),Yd=Xa("transitionend"),qd=new Map,jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function hi(e,n){qd.set(e,n),Rt(n,[e])}var Jn=[],Us=0,Zc=0;function Jo(){for(var e=Us,n=Zc=Us=0;n<e;){var a=Jn[n];Jn[n++]=null;var o=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&Zd(a,c,f)}}function $o(e,n,a,o){Jn[Us++]=e,Jn[Us++]=n,Jn[Us++]=a,Jn[Us++]=o,Zc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Kc(e,n,a,o){return $o(e,n,a,o),tl(e)}function ca(e,n){return $o(e,null,null,n),tl(e)}function Zd(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-Zt(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function tl(e){if(50<mo)throw mo=0,nf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ls={},Kd=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=Kd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:at(n)},Kd.set(e,n),n)}return{value:e,source:n,stack:at(n)}}var Ns=[],Os=0,el=null,nl=0,ti=[],ei=0,Wa=null,zi=1,Bi="";function Ya(e,n){Ns[Os++]=nl,Ns[Os++]=el,el=e,nl=n}function Qd(e,n,a){ti[ei++]=zi,ti[ei++]=Bi,ti[ei++]=Wa,Wa=e;var o=zi;e=Bi;var c=32-Zt(o)-1;o&=~(1<<c),a+=1;var f=32-Zt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,zi=1<<32-Zt(n)+c|a<<c|o,Bi=f+e}else zi=1<<f|a<<c|o,Bi=e}function Qc(e){e.return!==null&&(Ya(e,1),Qd(e,1,0))}function Jc(e){for(;e===el;)el=Ns[--Os],Ns[Os]=null,nl=Ns[--Os],Ns[Os]=null;for(;e===Wa;)Wa=ti[--ei],ti[ei]=null,Bi=ti[--ei],ti[ei]=null,zi=ti[--ei],ti[ei]=null}var Un=null,Sn=null,be=!1,di=null,Ei=!1,$c=Error(s(519));function qa(e){var n=Error(s(418,""));throw Yr($n(n,e)),$c}function Jd(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[an]=e,n[sn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)xe(go[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Se(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),bs(n,o.value,o.defaultValue,o.children),Se(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||o_(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=Ol),n=!0):n=!1,n||qa(e)}function $d(e){for(Un=e.return;Un;)switch(Un.tag){case 3:case 27:Ei=!0;return;case 5:case 13:Ei=!1;return;default:Un=Un.return}}function Xr(e){if(e!==Un)return!1;if(!be)return $d(e),be=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&Sn&&qa(e),$d(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Sn=mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Sn=null}}else Sn=Un?mi(e.stateNode.nextSibling):null;return!0}function Wr(){Sn=Un=null,be=!1}function Yr(e){di===null?di=[e]:di.push(e)}var qr=Error(s(460)),tp=Error(s(474)),tu={then:function(){}};function ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function il(){}function np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(il,il),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===qr?Error(s(483)):e;default:if(typeof n.status=="string")n.then(il,il);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===qr?Error(s(483)):e}throw jr=n,qr}}var jr=null;function ip(){if(jr===null)throw Error(s(459));var e=jr;return jr=null,e}var Ps=null,Zr=0;function al(e){var n=Zr;return Zr+=1,Ps===null&&(Ps=[]),np(Ps,e,n)}function Kr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function sl(e,n){throw n.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ap(e){var n=e._init;return n(e._payload)}function sp(e){function n(Z,V){if(e){var $=Z.deletions;$===null?(Z.deletions=[V],Z.flags|=16):$.push(V)}}function a(Z,V){if(!e)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function o(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function c(Z,V){return Z=Ma(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<V?(Z.flags|=33554434,V):$):(Z.flags|=33554434,V)):(Z.flags|=1048576,V)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=33554434),Z}function T(Z,V,$,mt){return V===null||V.tag!==6?(V=ju($,Z.mode,mt),V.return=Z,V):(V=c(V,$),V.return=Z,V)}function N(Z,V,$,mt){var It=$.type;return It===p?ct(Z,V,$.props.children,mt,$.key):V!==null&&(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&ap(It)===V.type)?(V=c(V,$.props),Kr(V,$),V.return=Z,V):(V=El($.type,$.key,$.props,null,Z.mode,mt),Kr(V,$),V.return=Z,V)}function k(Z,V,$,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=Zu($,Z.mode,mt),V.return=Z,V):(V=c(V,$.children||[]),V.return=Z,V)}function ct(Z,V,$,mt,It){return V===null||V.tag!==7?(V=is($,Z.mode,mt,It),V.return=Z,V):(V=c(V,$),V.return=Z,V)}function St(Z,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ju(""+V,Z.mode,$),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case h:return $=El(V.type,V.key,V.props,null,Z.mode,$),Kr($,V),$.return=Z,$;case d:return V=Zu(V,Z.mode,$),V.return=Z,V;case P:var mt=V._init;return V=mt(V._payload),St(Z,V,$)}if(bt(V)||G(V))return V=is(V,Z.mode,$,null),V.return=Z,V;if(typeof V.then=="function")return St(Z,al(V),$);if(V.$$typeof===y)return St(Z,xl(Z,V),$);sl(Z,V)}return null}function it(Z,V,$,mt){var It=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return It!==null?null:T(Z,V,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case h:return $.key===It?N(Z,V,$,mt):null;case d:return $.key===It?k(Z,V,$,mt):null;case P:return It=$._init,$=It($._payload),it(Z,V,$,mt)}if(bt($)||G($))return It!==null?null:ct(Z,V,$,mt,null);if(typeof $.then=="function")return it(Z,V,al($),mt);if($.$$typeof===y)return it(Z,V,xl(Z,$),mt);sl(Z,$)}return null}function ot(Z,V,$,mt,It){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get($)||null,T(V,Z,""+mt,It);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case h:return Z=Z.get(mt.key===null?$:mt.key)||null,N(V,Z,mt,It);case d:return Z=Z.get(mt.key===null?$:mt.key)||null,k(V,Z,mt,It);case P:var he=mt._init;return mt=he(mt._payload),ot(Z,V,$,mt,It)}if(bt(mt)||G(mt))return Z=Z.get($)||null,ct(V,Z,mt,It,null);if(typeof mt.then=="function")return ot(Z,V,$,al(mt),It);if(mt.$$typeof===y)return ot(Z,V,$,xl(V,mt),It);sl(V,mt)}return null}function Wt(Z,V,$,mt){for(var It=null,he=null,qt=V,Jt=V=0,mn=null;qt!==null&&Jt<$.length;Jt++){qt.index>Jt?(mn=qt,qt=null):mn=qt.sibling;var Ae=it(Z,qt,$[Jt],mt);if(Ae===null){qt===null&&(qt=mn);break}e&&qt&&Ae.alternate===null&&n(Z,qt),V=f(Ae,V,Jt),he===null?It=Ae:he.sibling=Ae,he=Ae,qt=mn}if(Jt===$.length)return a(Z,qt),be&&Ya(Z,Jt),It;if(qt===null){for(;Jt<$.length;Jt++)qt=St(Z,$[Jt],mt),qt!==null&&(V=f(qt,V,Jt),he===null?It=qt:he.sibling=qt,he=qt);return be&&Ya(Z,Jt),It}for(qt=o(qt);Jt<$.length;Jt++)mn=ot(qt,Z,Jt,$[Jt],mt),mn!==null&&(e&&mn.alternate!==null&&qt.delete(mn.key===null?Jt:mn.key),V=f(mn,V,Jt),he===null?It=mn:he.sibling=mn,he=mn);return e&&qt.forEach(function(Ca){return n(Z,Ca)}),be&&Ya(Z,Jt),It}function se(Z,V,$,mt){if($==null)throw Error(s(151));for(var It=null,he=null,qt=V,Jt=V=0,mn=null,Ae=$.next();qt!==null&&!Ae.done;Jt++,Ae=$.next()){qt.index>Jt?(mn=qt,qt=null):mn=qt.sibling;var Ca=it(Z,qt,Ae.value,mt);if(Ca===null){qt===null&&(qt=mn);break}e&&qt&&Ca.alternate===null&&n(Z,qt),V=f(Ca,V,Jt),he===null?It=Ca:he.sibling=Ca,he=Ca,qt=mn}if(Ae.done)return a(Z,qt),be&&Ya(Z,Jt),It;if(qt===null){for(;!Ae.done;Jt++,Ae=$.next())Ae=St(Z,Ae.value,mt),Ae!==null&&(V=f(Ae,V,Jt),he===null?It=Ae:he.sibling=Ae,he=Ae);return be&&Ya(Z,Jt),It}for(qt=o(qt);!Ae.done;Jt++,Ae=$.next())Ae=ot(qt,Z,Jt,Ae.value,mt),Ae!==null&&(e&&Ae.alternate!==null&&qt.delete(Ae.key===null?Jt:Ae.key),V=f(Ae,V,Jt),he===null?It=Ae:he.sibling=Ae,he=Ae);return e&&qt.forEach(function(yS){return n(Z,yS)}),be&&Ya(Z,Jt),It}function qe(Z,V,$,mt){if(typeof $=="object"&&$!==null&&$.type===p&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case h:t:{for(var It=$.key;V!==null;){if(V.key===It){if(It=$.type,It===p){if(V.tag===7){a(Z,V.sibling),mt=c(V,$.props.children),mt.return=Z,Z=mt;break t}}else if(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&ap(It)===V.type){a(Z,V.sibling),mt=c(V,$.props),Kr(mt,$),mt.return=Z,Z=mt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}$.type===p?(mt=is($.props.children,Z.mode,mt,$.key),mt.return=Z,Z=mt):(mt=El($.type,$.key,$.props,null,Z.mode,mt),Kr(mt,$),mt.return=Z,Z=mt)}return S(Z);case d:t:{for(It=$.key;V!==null;){if(V.key===It)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Z,V.sibling),mt=c(V,$.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}mt=Zu($,Z.mode,mt),mt.return=Z,Z=mt}return S(Z);case P:return It=$._init,$=It($._payload),qe(Z,V,$,mt)}if(bt($))return Wt(Z,V,$,mt);if(G($)){if(It=G($),typeof It!="function")throw Error(s(150));return $=It.call($),se(Z,V,$,mt)}if(typeof $.then=="function")return qe(Z,V,al($),mt);if($.$$typeof===y)return qe(Z,V,xl(Z,$),mt);sl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Z,V.sibling),mt=c(V,$),mt.return=Z,Z=mt):(a(Z,V),mt=ju($,Z.mode,mt),mt.return=Z,Z=mt),S(Z)):a(Z,V)}return function(Z,V,$,mt){try{Zr=0;var It=qe(Z,V,$,mt);return Ps=null,It}catch(qt){if(qt===qr)throw qt;var he=si(29,qt,null,Z.mode);return he.lanes=mt,he.return=Z,he}finally{}}}var ja=sp(!0),rp=sp(!1),zs=At(null),rl=At(0);function op(e,n){e=ji,Dt(rl,e),Dt(zs,n),ji=e|n.baseLanes}function eu(){Dt(rl,ji),Dt(zs,zs.current)}function nu(){ji=rl.current,Yt(zs),Yt(rl)}var ni=At(null),Ti=null;function ua(e){var n=e.alternate;Dt(on,on.current&1),Dt(ni,e),Ti===null&&(n===null||zs.current!==null||n.memoizedState!==null)&&(Ti=e)}function lp(e){if(e.tag===22){if(Dt(on,on.current),Dt(ni,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else fa()}function fa(){Dt(on,on.current),Dt(ni,ni.current)}function Fi(e){Yt(ni),Ti===e&&(Ti=null),Yt(on)}var on=At(0);function ol(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var c0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},u0=r.unstable_scheduleCallback,f0=r.unstable_NormalPriority,ln={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function iu(){return{controller:new c0,data:new Map,refCount:0}}function Qr(e){e.refCount--,e.refCount===0&&u0(f0,function(){e.controller.abort()})}var Jr=null,au=0,Bs=0,Fs=null;function h0(e,n){if(Jr===null){var a=Jr=[];au=0,Bs=ff(),Fs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return au++,n.then(cp,cp),n}function cp(){if(--au===0&&Jr!==null){Fs!==null&&(Fs.status="fulfilled");var e=Jr;Jr=null,Bs=0,Fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function d0(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var up=C.S;C.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&h0(e,n),up!==null&&up(e,n)};var Za=At(null);function su(){var e=Za.current;return e!==null?e:Fe.pooledCache}function ll(e,n){n===null?Dt(Za,Za.current):Dt(Za,n.pool)}function fp(){var e=su();return e===null?null:{parent:ln._currentValue,pool:e}}var ha=0,fe=null,Ne=null,Ke=null,cl=!1,Is=!1,Ka=!1,ul=0,$r=0,Hs=null,p0=0;function je(){throw Error(s(321))}function ru(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function ou(e,n,a,o,c,f){return ha=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?Qa:da,Ka=!1,f=a(o,c),Ka=!1,Is&&(f=dp(n,a,o,c)),hp(e),f}function hp(e){C.H=bi;var n=Ne!==null&&Ne.next!==null;if(ha=0,Ke=Ne=fe=null,cl=!1,$r=0,Hs=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&Sl(e)&&(dn=!0))}function dp(e,n,a,o){fe=e;var c=0;do{if(Is&&(Hs=null),$r=0,Is=!1,25<=c)throw Error(s(301));if(c+=1,Ke=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=Ja,f=n(a,o)}while(Is);return f}function m0(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(fe.flags|=1024),n}function lu(){var e=ul!==0;return ul=0,e}function cu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uu(e){if(cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}cl=!1}ha=0,Ke=Ne=fe=null,Is=!1,$r=ul=0,Hs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?fe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(Ne===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Ke===null?fe.memoizedState:Ke.next;if(n!==null)Ke=n,Ne=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ke===null?fe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}var fl;fl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function to(e){var n=$r;return $r+=1,Hs===null&&(Hs=[]),e=np(Hs,e,n),n=fe,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Qa:da),e}function hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===y)return En(e)}throw Error(s(438,String(e)))}function fu(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function dl(e){var n=Qe();return hu(n,Ne,e)}function hu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=S=null,N=null,k=n,ct=!1;do{var St=k.lane&-536870913;if(St!==k.lane?(ye&St)===St:(ha&St)===St){var it=k.revertLane;if(it===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),St===Bs&&(ct=!0);else if((ha&it)===it){k=k.next,it===Bs&&(ct=!0);continue}else St={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(T=N=St,S=f):N=N.next=St,fe.lanes|=it,ya|=it;St=k.action,Ka&&a(f,St),f=k.hasEagerState?k.eagerState:a(f,St)}else it={lane:St,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(T=N=it,S=f):N=N.next=it,fe.lanes|=St,ya|=St;k=k.next}while(k!==null&&k!==n);if(N===null?S=f:N.next=T,!kn(f,e.memoizedState)&&(dn=!0,ct&&(a=Fs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=N,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function du(e){var n=Qe(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);kn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function pp(e,n,a){var o=fe,c=Qe(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!kn((Ne||c).memoizedState,a);if(S&&(c.memoizedState=a,dn=!0),c=c.queue,_u(gp.bind(null,o,c,e),[e]),c.getSnapshot!==n||S||Ke!==null&&Ke.memoizedState.tag&1){if(o.flags|=2048,Gs(9,_p.bind(null,o,c,a,n),{destroy:void 0},null),Fe===null)throw Error(s(349));f||(ha&60)!==0||mp(o,n,a)}return a}function mp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=fl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _p(e,n,a,o){n.value=a,n.getSnapshot=o,vp(n)&&Sp(e)}function gp(e,n,a){return a(function(){vp(n)&&Sp(e)})}function vp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Sp(e){var n=ca(e,2);n!==null&&Ln(n,e,2)}function pu(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Ka){re(!0);try{a()}finally{re(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function xp(e,n,a,o){return e.baseState=a,hu(e,Ne,typeof o=="function"?o:Ii)}function _0(e,n,a,o,c){if(_l(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};C.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Mp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Mp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=C.T,S={};C.T=S;try{var T=a(c,o),N=C.S;N!==null&&N(S,T),yp(e,n,T)}catch(k){mu(e,n,k)}finally{C.T=f}}else try{f=a(c,o),yp(e,n,f)}catch(k){mu(e,n,k)}}function yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ep(e,n,o)},function(o){return mu(e,n,o)}):Ep(e,n,a)}function Ep(e,n,a){n.status="fulfilled",n.value=a,Tp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Mp(e,a)))}function mu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Tp(n),n=n.next;while(n!==o)}e.action=null}function Tp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function bp(e,n){return n}function Ap(e,n){if(be){var a=Fe.formState;if(a!==null){t:{var o=fe;if(be){if(Sn){e:{for(var c=Sn,f=Ei;c.nodeType!==8;){if(!f){c=null;break e}if(c=mi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Sn=mi(c.nextSibling),o=c.data==="F!";break t}}qa(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bp,lastRenderedState:n},a.queue=o,a=Xp.bind(null,fe,o),o.dispatch=a,o=pu(!1),f=Mu.bind(null,fe,!1,o.queue),o=Hn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=_0.bind(null,fe,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Rp(e){var n=Qe();return Cp(n,Ne,e)}function Cp(e,n,a){n=hu(e,n,bp)[0],e=dl(Ii)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?to(n):n;var o=Qe(),c=o.queue,f=c.dispatch;return a!==o.memoizedState&&(fe.flags|=2048,Gs(9,g0.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function g0(e,n){e.action=n}function wp(e){var n=Qe(),a=Ne;if(a!==null)return Cp(n,a,e);Qe(),n=n.memoizedState,a=Qe();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Gs(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=fe.updateQueue,n===null&&(n=fl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Dp(){return Qe().memoizedState}function pl(e,n,a,o){var c=Hn();fe.flags|=e,c.memoizedState=Gs(1|n,a,{destroy:void 0},o===void 0?null:o)}function ml(e,n,a,o){var c=Qe();o=o===void 0?null:o;var f=c.memoizedState.inst;Ne!==null&&o!==null&&ru(o,Ne.memoizedState.deps)?c.memoizedState=Gs(n,a,f,o):(fe.flags|=e,c.memoizedState=Gs(1|n,a,f,o))}function Up(e,n){pl(8390656,8,e,n)}function _u(e,n){ml(2048,8,e,n)}function Lp(e,n){return ml(4,2,e,n)}function Np(e,n){return ml(4,4,e,n)}function Op(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pp(e,n,a){a=a!=null?a.concat([e]):null,ml(4,4,Op.bind(null,n,e),a)}function gu(){}function zp(e,n){var a=Qe();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ru(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Bp(e,n){var a=Qe();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ru(n,o[1]))return o[0];if(o=e(),Ka){re(!0);try{e()}finally{re(!1)}}return a.memoizedState=[o,n],o}function vu(e,n,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Im(),fe.lanes|=e,ya|=e,a)}function Fp(e,n,a,o){return kn(a,n)?a:zs.current!==null?(e=vu(e,a,o),kn(e,n)||(dn=!0),e):(ha&42)===0?(dn=!0,e.memoizedState=a):(e=Im(),fe.lanes|=e,ya|=e,n)}function Ip(e,n,a,o,c){var f=W.p;W.p=f!==0&&8>f?f:8;var S=C.T,T={};C.T=T,Mu(e,!1,n,a);try{var N=c(),k=C.S;if(k!==null&&k(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ct=d0(N,o);eo(e,n,ct,qn(e))}else eo(e,n,o,qn(e))}catch(St){eo(e,n,{then:function(){},status:"rejected",reason:St},qn())}finally{W.p=f,C.T=S}}function v0(){}function Su(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Hp(e).queue;Ip(e,c,n,ht,a===null?v0:function(){return Gp(e),a(o)})}function Hp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:ht},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Gp(e){var n=Hp(e).next.queue;eo(e,n,{},qn())}function xu(){return En(yo)}function Vp(){return Qe().memoizedState}function kp(){return Qe().memoizedState}function S0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();e=_a(a);var o=ga(n,e,a);o!==null&&(Ln(o,n,a),ao(o,n,a)),n={cache:iu()},e.payload=n;return}n=n.return}}function x0(e,n,a){var o=qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},_l(e)?Wp(n,a):(a=Kc(e,n,a,o),a!==null&&(Ln(a,e,o),Yp(a,n,o)))}function Xp(e,n,a){var o=qn();eo(e,n,a,o)}function eo(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(e))Wp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,S))return $o(e,n,c,0),Fe===null&&Jo(),!1}catch{}finally{}if(a=Kc(e,n,c,o),a!==null)return Ln(a,e,o),Yp(a,n,o),!0}return!1}function Mu(e,n,a,o){if(o={lane:2,revertLane:ff(),action:o,hasEagerState:!1,eagerState:null,next:null},_l(e)){if(n)throw Error(s(479))}else n=Kc(e,a,o,2),n!==null&&Ln(n,e,2)}function _l(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Wp(e,n){Is=cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Yp(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,yi(e,a)}}var bi={readContext:En,use:hl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je};bi.useCacheRefresh=je,bi.useMemoCache=je,bi.useHostTransitionStatus=je,bi.useFormState=je,bi.useActionState=je,bi.useOptimistic=je;var Qa={readContext:En,use:hl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:Up,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,pl(4194308,4,Op.bind(null,n,e),a)},useLayoutEffect:function(e,n){return pl(4194308,4,e,n)},useInsertionEffect:function(e,n){pl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Ka){re(!0);try{e()}finally{re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var c=a(n);if(Ka){re(!0);try{a(n)}finally{re(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=x0.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=pu(e);var n=e.queue,a=Xp.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gu,useDeferredValue:function(e,n){var a=Hn();return vu(a,e,n)},useTransition:function(){var e=pu(!1);return e=Ip.bind(null,fe,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,c=Hn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Fe===null)throw Error(s(349));(ye&60)!==0||mp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Up(gp.bind(null,o,f,e),[e]),o.flags|=2048,Gs(9,_p.bind(null,o,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Hn(),n=Fe.identifierPrefix;if(be){var a=Bi,o=zi;a=(o&~(1<<32-Zt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=p0++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Hn().memoizedState=S0.bind(null,fe)}};Qa.useMemoCache=fu,Qa.useHostTransitionStatus=xu,Qa.useFormState=Ap,Qa.useActionState=Ap,Qa.useOptimistic=function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mu.bind(null,fe,!0,a),a.dispatch=n,[e,n]};var da={readContext:En,use:hl,useCallback:zp,useContext:En,useEffect:_u,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Np,useMemo:Bp,useReducer:dl,useRef:Dp,useState:function(){return dl(Ii)},useDebugValue:gu,useDeferredValue:function(e,n){var a=Qe();return Fp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=dl(Ii)[0],n=Qe().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:pp,useId:Vp};da.useCacheRefresh=kp,da.useMemoCache=fu,da.useHostTransitionStatus=xu,da.useFormState=Rp,da.useActionState=Rp,da.useOptimistic=function(e,n){var a=Qe();return xp(a,Ne,e,n)};var Ja={readContext:En,use:hl,useCallback:zp,useContext:En,useEffect:_u,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Np,useMemo:Bp,useReducer:du,useRef:Dp,useState:function(){return du(Ii)},useDebugValue:gu,useDeferredValue:function(e,n){var a=Qe();return Ne===null?vu(a,e,n):Fp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=du(Ii)[0],n=Qe().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:pp,useId:Vp};Ja.useCacheRefresh=kp,Ja.useMemoCache=fu,Ja.useHostTransitionStatus=xu,Ja.useFormState=wp,Ja.useActionState=wp,Ja.useOptimistic=function(e,n){var a=Qe();return Ne!==null?xp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])};function yu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:A({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Eu={isMounted:function(e){return(e=e._reactInternals)?q(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=qn(),c=_a(o);c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,o),n!==null&&(Ln(n,e,o),ao(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=qn(),c=_a(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,o),n!==null&&(Ln(n,e,o),ao(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qn(),o=_a(a);o.tag=2,n!=null&&(o.callback=n),n=ga(e,o,a),n!==null&&(Ln(n,e,a),ao(n,e,a))}};function qp(e,n,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Vr(a,o)||!Vr(c,f):!0}function jp(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Eu.enqueueReplaceState(n,n.state,null)}function $a(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=A({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zp(e){gl(e)}function Kp(e){console.error(e)}function Qp(e){gl(e)}function vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Jp(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Tu(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(e,n)},a}function $p(e){return e=_a(e),e.tag=3,e}function tm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Jp(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Jp(n,a,o),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function M0(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&io(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Ti===null?rf():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===tu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),lf(e,o,c)),!1;case 22:return a.flags|=65536,o===tu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),lf(e,o,c)),!1}throw Error(s(435,a.tag))}return lf(e,o,c),rf(),!1}if(be)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==$c&&(e=Error(s(422),{cause:o}),Yr($n(e,a)))):(o!==$c&&(n=Error(s(423),{cause:o}),Yr($n(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=$n(o,a),c=Tu(e.stateNode,o,c),Iu(e,c),Ye!==4&&(Ye=2)),!1;var f=Error(s(520),{cause:o});if(f=$n(f,a),ho===null?ho=[f]:ho.push(f),Ye!==4&&(Ye=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Tu(a.stateNode,o,e),Iu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=$p(c),tm(c,e,a,o),Iu(a,c),!1}a=a.return}while(a!==null);return!1}var em=Error(s(461)),dn=!1;function xn(e,n,a,o){n.child=e===null?rp(n,null,a,o):ja(n,e.child,a,o)}function nm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return es(n),o=ou(e,n,a,S,f,c),T=lu(),e!==null&&!dn?(cu(e,n,c),Hi(e,n,c)):(be&&T&&Qc(n),n.flags|=1,xn(e,n,o,c),n.child)}function im(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!qu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,am(e,n,f,o,c)):(e=El(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Nu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vr,a(S,o)&&e.ref===n.ref)return Hi(e,n,c)}return n.flags|=1,e=Ma(f,o),e.ref=n.ref,e.return=n,n.child=e}function am(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Vr(f,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=f,Nu(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Hi(e,n,c)}return bu(e,n,a,o,c)}function sm(e,n,a){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(no(e,n),o.mode==="hidden"||f){if((n.flags&128)!==0){if(o=S!==null?S.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return rm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(n,S!==null?S.cachePool:null),S!==null?op(n,S):eu(),lp(n);else return n.lanes=n.childLanes=536870912,rm(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(ll(n,S.cachePool),op(n,S),fa(),n.memoizedState=null):(e!==null&&ll(n,null),eu(),fa());return xn(e,n,c,a),n.child}function rm(e,n,a,o){var c=su();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&ll(n,null),eu(),lp(n),e!==null&&io(e,n,o,!0),null}function no(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function bu(e,n,a,o,c){return es(n),a=ou(e,n,a,o,void 0,c),o=lu(),e!==null&&!dn?(cu(e,n,c),Hi(e,n,c)):(be&&o&&Qc(n),n.flags|=1,xn(e,n,a,c),n.child)}function om(e,n,a,o,c,f){return es(n),n.updateQueue=null,a=dp(n,o,a,c),hp(e),o=lu(),e!==null&&!dn?(cu(e,n,f),Hi(e,n,f)):(be&&o&&Qc(n),n.flags|=1,xn(e,n,a,f),n.child)}function lm(e,n,a,o,c){if(es(n),n.stateNode===null){var f=Ls,S=a.contextType;typeof S=="object"&&S!==null&&(f=En(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Eu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Bu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?En(S):Ls,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Eu.enqueueReplaceState(f,f.state,null),ro(n,o,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,N=$a(a,T);f.props=N;var k=f.context,ct=a.contextType;S=Ls,typeof ct=="object"&&ct!==null&&(S=En(ct));var St=a.getDerivedStateFromProps;ct=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||k!==S)&&jp(n,f,o,S),ma=!1;var it=n.memoizedState;f.state=it,ro(n,o,f,c),so(),k=n.memoizedState,T||it!==k||ma?(typeof St=="function"&&(yu(n,a,St,o),k=n.memoizedState),(N=ma||qp(n,a,N,o,it,k,S))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=k),f.props=o,f.state=k,f.context=S,o=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Fu(e,n),S=n.memoizedProps,ct=$a(a,S),f.props=ct,St=n.pendingProps,it=f.context,k=a.contextType,N=Ls,typeof k=="object"&&k!==null&&(N=En(k)),T=a.getDerivedStateFromProps,(k=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==St||it!==N)&&jp(n,f,o,N),ma=!1,it=n.memoizedState,f.state=it,ro(n,o,f,c),so();var ot=n.memoizedState;S!==St||it!==ot||ma||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof T=="function"&&(yu(n,a,T,o),ot=n.memoizedState),(ct=ma||qp(n,a,ct,o,it,ot,N)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=N,o=ct):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,no(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ja(n,e.child,null,c),n.child=ja(n,null,a,c)):xn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Hi(e,n,c),e}function cm(e,n,a,o){return Wr(),n.flags|=256,xn(e,n,a,o),n.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Ru(e){return{baseLanes:e,cachePool:fp()}}function Cu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function um(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(c?ua(n):fa(),be){var T=Sn,N;if(N=T){t:{for(N=T,T=Ei;N.nodeType!==8;){if(!T){T=null;break t}if(N=mi(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Wa!==null?{id:zi,overflow:Bi}:null,retryLane:536870912},N=si(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Un=n,Sn=null,N=!0):N=!1}N||qa(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Fi(n)}return T=o.children,o=o.fallback,c?(fa(),c=n.mode,T=Du({mode:"hidden",children:T},c),o=is(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=Ru(a),c.childLanes=Cu(e,S,a),n.memoizedState=Au,o):(ua(n),wu(n,T))}if(N=e.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(ua(n),n.flags&=-257,n=Uu(e,n,a)):n.memoizedState!==null?(fa(),n.child=e.child,n.flags|=128,n=null):(fa(),c=o.fallback,T=n.mode,o=Du({mode:"visible",children:o.children},T),c=is(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,ja(n,e.child,null,a),o=n.child,o.memoizedState=Ru(a),o.childLanes=Cu(e,S,a),n.memoizedState=Au,n=c);else if(ua(n),T.data==="$!"){if(S=T.nextSibling&&T.nextSibling.dataset,S)var k=S.dgst;S=k,o=Error(s(419)),o.stack="",o.digest=S,Yr({value:o,source:null,stack:null}),n=Uu(e,n,a)}else if(dn||io(e,n,a,!1),S=(a&e.childLanes)!==0,dn||S){if(S=Fe,S!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==N.retryLane)throw N.retryLane=o,ca(e,o),Ln(S,e,o),em}T.data==="$?"||rf(),n=Uu(e,n,a)}else T.data==="$?"?(n.flags|=128,n.child=e.child,n=z0.bind(null,e),T._reactRetry=n,n=null):(e=N.treeContext,Sn=mi(T.nextSibling),Un=n,be=!0,di=null,Ei=!1,e!==null&&(ti[ei++]=zi,ti[ei++]=Bi,ti[ei++]=Wa,zi=e.id,Bi=e.overflow,Wa=n),n=wu(n,o.children),n.flags|=4096);return n}return c?(fa(),c=o.fallback,T=n.mode,N=e.child,k=N.sibling,o=Ma(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&31457280,k!==null?c=Ma(k,c):(c=is(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=e.child.memoizedState,T===null?T=Ru(a):(N=T.cachePool,N!==null?(k=ln._currentValue,N=N.parent!==k?{parent:k,pool:k}:N):N=fp(),T={baseLanes:T.baseLanes|a,cachePool:N}),c.memoizedState=T,c.childLanes=Cu(e,S,a),n.memoizedState=Au,o):(ua(n),a=e.child,e=a.sibling,a=Ma(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function wu(e,n){return n=Du({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Du(e,n){return zm(e,n,0,null)}function Uu(e,n,a){return ja(n,e.child,null,a),e=wu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Pu(e.return,n,a)}function Lu(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function hm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(xn(e,n,o.children,a),o=on.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fm(e,a,n);else if(e.tag===19)fm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Dt(on,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&ol(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Lu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&ol(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Lu(n,!0,a,null,f);break;case"together":Lu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(io(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Nu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function y0(e,n,a){switch(n.tag){case 3:en(n,n.stateNode.containerInfo),pa(n,ln,e.memoizedState.cache),Wr();break;case 27:case 5:ce(n);break;case 4:en(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?um(e,n,a):(ua(n),e=Hi(e,n,a),e!==null?e.sibling:null);ua(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(io(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return hm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(on,on.current),o)break;return null;case 22:case 23:return n.lanes=0,sm(e,n,a);case 24:pa(n,ln,e.memoizedState.cache)}return Hi(e,n,a)}function dm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Nu(e,a)&&(n.flags&128)===0)return dn=!1,y0(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,be&&(n.flags&1048576)!==0&&Qd(n,nl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")qu(o)?(e=$a(o,e),n.tag=1,n=lm(null,n,o,e,a)):(n.tag=0,n=bu(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===R){n.tag=11,n=nm(null,n,o,e,a);break t}else if(c===g){n.tag=14,n=im(null,n,o,e,a);break t}}throw n=K(o)||o,Error(s(306,n,""))}}return n;case 0:return bu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=$a(o,n.pendingProps),lm(e,n,o,c,a);case 3:t:{if(en(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,Fu(e,n),ro(n,f,null,a);var S=n.memoizedState;if(f=S.cache,pa(n,ln,f),f!==c.cache&&zu(n,[ln],a,!0),so(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=cm(e,n,f,a);break t}else if(f!==o){o=$n(Error(s(424)),n),Yr(o),n=cm(e,n,f,a);break t}else for(Sn=mi(n.stateNode.containerInfo.firstChild),Un=n,be=!0,di=null,Ei=!0,a=rp(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Wr(),f===o){n=Hi(e,n,a);break t}xn(e,n,f,a)}n=n.child}return n;case 26:return no(e,n),e===null?(a=__(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=Pl($t.current).createElement(a),o[an]=n,o[sn]=e,Mn(o,a,e),Q(o),n.stateNode=o):n.memoizedState=__(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ce(n),e===null&&be&&(o=n.stateNode=d_(n.type,n.pendingProps,$t.current),Un=n,Ei=!0,Sn=mi(o.firstChild)),o=n.pendingProps.children,e!==null||be?xn(e,n,o,a):n.child=ja(n,null,o,a),no(e,n),n.child;case 5:return e===null&&be&&((c=o=Sn)&&(o=J0(o,n.type,n.pendingProps,Ei),o!==null?(n.stateNode=o,Un=n,Sn=mi(o.firstChild),Ei=!1,c=!0):c=!1),c||qa(n)),ce(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,xf(c,f)?o=null:S!==null&&xf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ou(e,n,m0,null,null,a),yo._currentValue=c),no(e,n),xn(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=Sn)&&(a=$0(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Un=n,Sn=null,e=!0):e=!1),e||qa(n)),null;case 13:return um(e,n,a);case 4:return en(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ja(n,null,o,a):xn(e,n,o,a),n.child;case 11:return nm(e,n,n.type,n.pendingProps,a);case 7:return xn(e,n,n.pendingProps,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),xn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,es(n),c=En(c),o=o(c),n.flags|=1,xn(e,n,o,a),n.child;case 14:return im(e,n,n.type,n.pendingProps,a);case 15:return am(e,n,n.type,n.pendingProps,a);case 19:return hm(e,n,a);case 22:return sm(e,n,a);case 24:return es(n),o=En(ln),e===null?(c=su(),c===null&&(c=Fe,f=iu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Bu(n),pa(n,ln,c)):((e.lanes&a)!==0&&(Fu(e,n),ro(n,null,null,a),so()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,ln,o)):(o=f.cache,pa(n,ln,o),o!==c.cache&&zu(n,[ln],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var Ou=At(null),ts=null,Gi=null;function pa(e,n,a){Dt(Ou,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=Ou.current,Yt(Ou)}function Pu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function zu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Pu(f.return,a,e),o||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Pu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function io(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var T=c.type;kn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===B.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}c=c.return}e!==null&&zu(n,e,a,o),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function es(e){ts=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return pm(ts,e)}function xl(e,n){return ts===null&&es(e),pm(e,n)}function pm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var ma=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=tl(e),Zd(e,null,a),n}return $o(e,o,n,a),tl(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,yi(e,a)}}function Iu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Hu=!1;function so(){if(Hu){var e=Fs;if(e!==null)throw e}}function ro(e,n,a,o){Hu=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var N=T,k=N.next;N.next=null,S===null?f=k:S.next=k,S=N;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==S&&(T===null?ct.firstBaseUpdate=k:T.next=k,ct.lastBaseUpdate=N))}if(f!==null){var St=c.baseState;S=0,ct=k=N=null,T=f;do{var it=T.lane&-536870913,ot=it!==T.lane;if(ot?(ye&it)===it:(o&it)===it){it!==0&&it===Bs&&(Hu=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Wt=e,se=T;it=n;var qe=a;switch(se.tag){case 1:if(Wt=se.payload,typeof Wt=="function"){St=Wt.call(qe,St,it);break t}St=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=se.payload,it=typeof Wt=="function"?Wt.call(qe,St,it):Wt,it==null)break t;St=A({},St,it);break t;case 2:ma=!0}}it=T.callback,it!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[it]:ot.push(it))}else ot={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?(k=ct=ot,N=St):ct=ct.next=ot,S|=it;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ct===null&&(N=St),c.baseState=N,c.firstBaseUpdate=k,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),ya|=S,e.lanes=S,e.memoizedState=St}}function mm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mm(a[e],n)}function oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(T){Be(n,n.return,T)}}function va(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var N=a;try{T()}catch(k){Be(c,N,k)}}}o=o.next}while(o!==f)}}catch(k){Be(n,n.return,k)}}function gm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_m(n,a)}catch(o){Be(e,e.return,o)}}}function vm(e,n,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function ns(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){Be(e,n,f)}}function Xn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Be(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(e,n,c)}else a.current=null}function Sm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Be(e,e.return,c)}}function xm(e,n,a){try{var o=e.stateNode;q0(o,e.type,a,n),o[sn]=n}catch(c){Be(e,e.return,c)}}function Mm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Gu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ol));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Vu(e,n,a),e=e.sibling;e!==null;)Vu(e,n,a),e=e.sibling}function Ml(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Ml(e,n,a),e=e.sibling;e!==null;)Ml(e,n,a),e=e.sibling}var ki=!1,We=!1,ku=!1,ym=typeof WeakSet=="function"?WeakSet:Set,pn=null,Em=!1;function E0(e,n){if(e=e.containerInfo,vf=Gl,e=Hd(e),Wc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,N=-1,k=0,ct=0,St=e,it=null;e:for(;;){for(var ot;St!==a||c!==0&&St.nodeType!==3||(T=S+c),St!==f||o!==0&&St.nodeType!==3||(N=S+o),St.nodeType===3&&(S+=St.nodeValue.length),(ot=St.firstChild)!==null;)it=St,St=ot;for(;;){if(St===e)break e;if(it===a&&++k===c&&(T=S),it===f&&++ct===o&&(N=S),(ot=St.nextSibling)!==null)break;St=it,it=St.parentNode}St=ot}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sf={focusedElem:e,selectionRange:a},Gl=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Wt=$a(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(Wt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){Be(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ef(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ef(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}return Wt=Em,Em=!1,Wt}function Tm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(e,a),o&4&&oo(5,a);break;case 1:if(Wi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(T){Be(a,a.return,T)}else{var c=$a(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Be(a,a.return,T)}}o&64&&gm(a),o&512&&ns(a,a.return);break;case 3:if(Wi(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{_m(o,e)}catch(T){Be(a,a.return,T)}}break;case 26:Wi(e,a),o&512&&ns(a,a.return);break;case 27:case 5:Wi(e,a),n===null&&o&4&&Sm(a),o&512&&ns(a,a.return);break;case 12:Wi(e,a);break;case 13:Wi(e,a),o&4&&Rm(e,a);break;case 22:if(c=a.memoizedState!==null||ki,!c){n=n!==null&&n.memoizedState!==null||We;var f=ki,S=We;ki=c,(We=n)&&!S?Sa(e,a,(a.subtreeFlags&8772)!==0):Wi(e,a),ki=f,We=S}o&512&&(a.memoizedProps.mode==="manual"?ns(a,a.return):Xn(a,a.return));break;default:Wi(e,a)}}function bm(e){var n=e.alternate;n!==null&&(e.alternate=null,bm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Or(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Wn=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Am(e,n,a),a=a.sibling}function Am(e,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:We||Xn(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||Xn(a,n);var o=Je,c=Wn;for(Je=a.stateNode,Xi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Or(a),Je=o,Wn=c;break;case 5:We||Xn(a,n);case 6:c=Je;var f=Wn;if(Je=null,Xi(e,n,a),Je=c,Wn=f,Je!==null)if(Wn)try{e=Je,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(S){Be(a,n,S)}else try{Je.removeChild(a.stateNode)}catch(S){Be(a,n,S)}break;case 18:Je!==null&&(Wn?(n=Je,a=a.stateNode,n.nodeType===8?yf(n.parentNode,a):n.nodeType===1&&yf(n,a),Ao(n)):yf(Je,a.stateNode));break;case 4:o=Je,c=Wn,Je=a.stateNode.containerInfo,Wn=!0,Xi(e,n,a),Je=o,Wn=c;break;case 0:case 11:case 14:case 15:We||va(2,a,n),We||va(4,a,n),Xi(e,n,a);break;case 1:We||(Xn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&vm(a,n,o)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:We||Xn(a,n),We=(o=We)||a.memoizedState!==null,Xi(e,n,a),We=o;break;default:Xi(e,n,a)}}function Rm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(a){Be(n,n.return,a)}}function T0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ym),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ym),n;default:throw Error(s(435,e.tag))}}function Xu(e,n){var a=T0(e);n.forEach(function(o){var c=B0.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function ii(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:case 5:Je=T.stateNode,Wn=!1;break t;case 3:Je=T.stateNode.containerInfo,Wn=!0;break t;case 4:Je=T.stateNode.containerInfo,Wn=!0;break t}T=T.return}if(Je===null)throw Error(s(160));Am(f,S,c),Je=null,Wn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Cm(n,e),n=n.sibling}var pi=null;function Cm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(n,e),ai(e),o&4&&(va(3,e,e.return),oo(3,e),va(5,e,e.return));break;case 1:ii(n,e),ai(e),o&512&&(We||a===null||Xn(a,a.return)),o&64&&ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=pi;if(ii(n,e),ai(e),o&512&&(We||a===null||Xn(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ga]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,o,a),f[an]=e,Q(f),o=f;break t;case"link":var S=S_("link","href",c).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(o),Mn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=S_("meta","content",c).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(o),Mn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[an]=e,Q(f),o=f}e.stateNode=o}else x_(c,e.type,e.stateNode);else e.stateNode=v_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?x_(c,e.type,e.stateNode):v_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var N=c.firstChild;N;){var k=N.nextSibling,ct=N.nodeName;N[Ga]||ct==="HEAD"||ct==="BODY"||ct==="SCRIPT"||ct==="STYLE"||ct==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=k}for(var St=e.type,it=c.attributes;it.length;)c.removeAttributeNode(it[0]);Mn(c,St,f),c[an]=e,c[sn]=f}catch(Wt){Be(e,e.return,Wt)}}case 5:if(ii(n,e),ai(e),o&512&&(We||a===null||Xn(a,a.return)),e.flags&32){c=e.stateNode;try{Fn(c,"")}catch(Wt){Be(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,xm(e,c,a!==null?a.memoizedProps:c)),o&1024&&(ku=!0);break;case 6:if(ii(n,e),ai(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){Be(e,e.return,Wt)}}break;case 3:if(Fl=null,c=pi,pi=zl(n.containerInfo),ii(n,e),pi=c,ai(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(Wt){Be(e,e.return,Wt)}ku&&(ku=!1,wm(e));break;case 4:o=pi,pi=zl(e.stateNode.containerInfo),ii(n,e),ai(e),pi=o;break;case 12:ii(n,e),ai(e);break;case 13:ii(n,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($u=ut()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xu(e,o)));break;case 22:if(o&512&&(We||a===null||Xn(a,a.return)),N=e.memoizedState!==null,k=a!==null&&a.memoizedState!==null,ct=ki,St=We,ki=ct||N,We=St||k,ii(n,e),We=St,ki=ct,ai(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=ki||We,a===null||k||n||Vs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){k=a=n;try{if(c=k.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=k.stateNode,T=k.memoizedProps.style;var ot=T!=null&&T.hasOwnProperty("display")?T.display:null;S.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Wt){Be(k,k.return,Wt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=N?"":k.memoizedProps}catch(Wt){Be(k,k.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xu(e,a))));break;case 19:ii(n,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xu(e,o)));break;case 21:break;default:ii(n,e),ai(e)}}function ai(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Mm(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var c=o.stateNode,f=Gu(e);Ml(e,f,c);break;case 5:var S=o.stateNode;o.flags&32&&(Fn(S,""),o.flags&=-33);var T=Gu(e);Ml(e,T,S);break;case 3:case 4:var N=o.stateNode.containerInfo,k=Gu(e);Vu(e,k,N);break;default:throw Error(s(161))}}}catch(ct){Be(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;wm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tm(e,n.alternate,n),n=n.sibling}function Vs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),Vs(n);break;case 1:Xn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vm(n,n.return,a),Vs(n);break;case 26:case 27:case 5:Xn(n,n.return),Vs(n);break;case 22:Xn(n,n.return),n.memoizedState===null&&Vs(n);break;default:Vs(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),oo(4,f);break;case 1:if(Sa(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){Be(o,o.return,k)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)mm(N[c],T)}catch(k){Be(o,o.return,k)}}a&&S&64&&gm(f),ns(f,f.return);break;case 26:case 27:case 5:Sa(c,f,a),a&&o===null&&S&4&&Sm(f),ns(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&S&4&&Rm(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),ns(f,f.return);break;default:Sa(c,f,a)}n=n.sibling}}function Wu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qr(a))}function Yu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e))}function xa(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dm(e,n,a,o),n=n.sibling}function Dm(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xa(e,n,a,o),c&2048&&oo(9,n);break;case 3:xa(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e)));break;case 12:if(c&2048){xa(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Be(n,n.return,N)}}else xa(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?xa(e,n,a,o):lo(e,n):f._visibility&4?xa(e,n,a,o):(f._visibility|=4,ks(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&Wu(n.alternate,n);break;case 24:xa(e,n,a,o),c&2048&&Yu(n.alternate,n);break;default:xa(e,n,a,o)}}function ks(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,N=o,k=S.flags;switch(S.tag){case 0:case 11:case 15:ks(f,S,T,N,c),oo(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&4?ks(f,S,T,N,c):lo(f,S):(ct._visibility|=4,ks(f,S,T,N,c)),c&&k&2048&&Wu(S.alternate,S);break;case 24:ks(f,S,T,N,c),c&&k&2048&&Yu(S.alternate,S);break;default:ks(f,S,T,N,c)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:lo(a,o),c&2048&&Wu(o.alternate,o);break;case 24:lo(a,o),c&2048&&Yu(o.alternate,o);break;default:lo(a,o)}n=n.sibling}}var co=8192;function Xs(e){if(e.subtreeFlags&co)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 26:Xs(e),e.flags&co&&e.memoizedState!==null&&hS(pi,e.memoizedState,e.memoizedProps);break;case 5:Xs(e);break;case 3:case 4:var n=pi;pi=zl(e.stateNode.containerInfo),Xs(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Xs(e),co=n):Xs(e));break;default:Xs(e)}}function Lm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,Om(o,e)}Lm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nm(e),e=e.sibling}function Nm(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&va(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,yl(e)):uo(e);break;default:uo(e)}}function yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,Om(o,e)}Lm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),yl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,yl(n));break;default:yl(n)}e=e.sibling}}function Om(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,pn=o;else t:for(a=e;pn!==null;){o=pn;var c=o.sibling,f=o.return;if(bm(o),o===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}function b0(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,n,a,o){return new b0(e,n,a,o)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,n){var a=e.alternate;return a===null?(a=si(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,c,f){var S=0;if(o=e,typeof e=="function")qu(e)&&(S=1);else if(typeof e=="string")S=uS(e,a,Me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return is(a.children,c,f,n);case m:S=8,c|=24;break;case _:return e=si(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case w:return e=si(13,a,n,c),e.elementType=w,e.lanes=f,e;case M:return e=si(19,a,n,c),e.elementType=M,e.lanes=f,e;case O:return zm(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case y:S=10;break t;case x:S=9;break t;case R:S=11;break t;case g:S=14;break t;case P:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=si(S,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function is(e,n,a,o){return e=si(7,e,o,n),e.lanes=a,e}function zm(e,n,a,o){e=si(22,e,o,n),e.elementType=O,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)===0){var S=ca(f,2);S!==null&&(c._pendingVisibility|=2,Ln(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)!==0){var S=ca(f,2);S!==null&&(c._pendingVisibility&=-3,Ln(S,f,2))}}};return e.stateNode=c,e}function ju(e,n,a){return e=si(6,e,null,n),e.lanes=a,e}function Zu(e,n,a){return n=si(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yi(e){e.flags|=4}function Bm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!M_(n)){if(n=ni.current,n!==null&&((ye&4194176)===ye?Ti!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ti))throw jr=tu,tp;e.flags|=8192}}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ee():536870912,e.lanes|=n,Ys|=n)}function fo(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function A0(e,n,a){var o=n.pendingProps;switch(Jc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(ln),ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,di!==null&&(af(di),di=null))),Ve(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Ve(n),Bm(n,a)):(Ve(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Ve(n),Bm(n,a)):(Ve(n),n.flags&=-16777217):(e.memoizedProps!==o&&Yi(n),Ve(n),n.flags&=-16777217),null;case 27:Gt(n),a=$t.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}e=Me.current,Xr(n)?Jd(n):(e=d_(c,o,a),n.stateNode=e,Yi(n))}return Ve(n),null;case 5:if(Gt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(e=Me.current,Xr(n))Jd(n);else{switch(c=Pl($t.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[an]=n,e[sn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ve(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=$t.current,Xr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Un,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||o_(e.nodeValue,a)),e||qa(n)}else e=Pl(e).createTextNode(o),e[an]=n,n.stateNode=e}return Ve(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else Wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else di!==null&&(af(di),di=null),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),Ve(n),null;case 4:return ie(),e===null&&mf(n.stateNode.containerInfo),Ve(n),null;case 10:return Vi(n.type),Ve(n),null;case 19:if(Yt(on),c=n.memoizedState,c===null)return Ve(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)fo(c,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ol(e),f!==null){for(n.flags|=128,fo(c,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Pm(a,e),a=a.sibling;return Dt(on,on.current&1|2),n.child}e=e.sibling}c.tail!==null&&ut()>bl&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304)}else{if(!o)if(e=ol(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return Ve(n),null}else 2*ut()-c.renderingStartTime>bl&&a!==536870912&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ut(),n.sibling=null,e=on.current,Dt(on,o?e&1|2:e&1),n):(Ve(n),null);case 22:case 23:return Fi(n),nu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Yt(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(ln),Ve(n),null;case 25:return null}throw Error(s(156,n.tag))}function R0(e,n){switch(Jc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(ln),ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Gt(n),null;case 13:if(Fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Yt(on),null;case 4:return ie(),null;case 10:return Vi(n.type),null;case 22:case 23:return Fi(n),nu(),e!==null&&Yt(Za),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(ln),null;case 25:return null;default:return null}}function Fm(e,n){switch(Jc(n),n.tag){case 3:Vi(ln),ie();break;case 26:case 27:case 5:Gt(n);break;case 4:ie();break;case 13:Fi(n);break;case 19:Yt(on);break;case 10:Vi(n.type);break;case 22:case 23:Fi(n),nu(),e!==null&&Yt(Za);break;case 24:Vi(ln)}}var C0={getCacheForType:function(e){var n=En(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},w0=typeof WeakMap=="function"?WeakMap:Map,ke=0,Fe=null,me=null,ye=0,Ie=0,Yn=null,qi=!1,Ws=!1,Ku=!1,ji=0,Ye=0,ya=0,as=0,Qu=0,ri=0,Ys=0,ho=null,Ai=null,Ju=!1,$u=0,bl=1/0,Al=null,Ea=null,Rl=!1,ss=null,po=0,tf=0,ef=null,mo=0,nf=null;function qn(){if((ke&2)!==0&&ye!==0)return ye&-ye;if(C.T!==null){var e=Bs;return e!==0?e:ff()}return Nr()}function Im(){ri===0&&(ri=(ye&536870912)===0||be?nn():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ri}function Ln(e,n,a){(e===Fe&&Ie===2||e.cancelPendingCommit!==null)&&(qs(e,0),Zi(e,ye,ri,!1)),Cn(e,a),((ke&2)===0||e!==Fe)&&(e===Fe&&((ke&2)===0&&(as|=a),Ye===4&&Zi(e,ye,ri,!1)),Ri(e))}function Hm(e,n,a){if((ke&6)!==0)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||te(e,n),c=o?L0(e,n):of(e,n,!0),f=o;do{if(c===0){Ws&&!o&&Zi(e,n,0,!1);break}else if(c===6)Zi(e,n,0,!qi);else{if(a=e.current.alternate,f&&!D0(a)){c=of(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=ho;var N=T.current.memoizedState.isDehydrated;if(N&&(qs(T,S).flags|=256),S=of(T,S,!1),S!==2){if(Ku&&!N){T.errorRecoveryDisabledLanes|=f,as|=f,c=4;break t}f=Ai,Ai=c,f!==null&&af(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){qs(e,0),Zi(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){Zi(o,n,ri,!qi);break t}break;case 2:Ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(f=$u+300-ut(),10<f)){if(Zi(o,n,ri,!qi),Ut(o,0)!==0)break t;o.timeoutHandle=u_(Gm.bind(null,o,a,Ai,Al,Ju,n,ri,as,Ys,qi,2,-0,0),f);break t}Gm(o,a,Ai,Al,Ju,n,ri,as,Ys,qi,0,-0,0)}}break}while(!0);Ri(e)}function af(e){Ai===null?Ai=e:Ai.push.apply(Ai,e)}function Gm(e,n,a,o,c,f,S,T,N,k,ct,St,it){var ot=n.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:fS},Um(n),n=dS(),n!==null)){e.cancelPendingCommit=n(jm.bind(null,e,a,o,c,S,T,N,1,St,it)),Zi(e,f,S,!k);return}jm(e,a,o,c,S,T,N,ct,St,it)}function D0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zi(e,n,a,o){n&=~Qu,n&=~as,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Zt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&Lr(e,a,n)}function Cl(){return(ke&6)===0?(_o(0),!1):!0}function sf(){if(me!==null){if(Ie===0)var e=me.return;else e=me,Gi=ts=null,uu(e),Ps=null,Zr=0,e=me;for(;e!==null;)Fm(e.alternate,e),e=e.return;me=null}}function qs(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Z0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sf(),Fe=e,me=a=Ma(e.current,null),ye=n,Ie=0,Yn=null,qi=!1,Ws=te(e,n),Ku=!1,Ys=ri=Qu=as=ya=Ye=0,Ai=ho=null,Ju=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Zt(o),f=1<<c;n|=e[c],o&=~f}return ji=n,Jo(),a}function Vm(e,n){fe=null,C.H=bi,n===qr?(n=ip(),Ie=3):n===tp?(n=ip(),Ie=4):Ie=n===em?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,me===null&&(Ye=1,vl(e,$n(n,e.current)))}function km(){var e=C.H;return C.H=bi,e===null?bi:e}function Xm(){var e=C.A;return C.A=C0,e}function rf(){Ye=4,qi||(ye&4194176)!==ye&&ni.current!==null||(Ws=!0),(ya&134217727)===0&&(as&134217727)===0||Fe===null||Zi(Fe,ye,ri,!1)}function of(e,n,a){var o=ke;ke|=2;var c=km(),f=Xm();(Fe!==e||ye!==n)&&(Al=null,qs(e,n)),n=!1;var S=Ye;t:do try{if(Ie!==0&&me!==null){var T=me,N=Yn;switch(Ie){case 8:sf(),S=6;break t;case 3:case 2:case 6:ni.current===null&&(n=!0);var k=Ie;if(Ie=0,Yn=null,js(e,T,N,k),a&&Ws){S=0;break t}break;default:k=Ie,Ie=0,Yn=null,js(e,T,N,k)}}U0(),S=Ye;break}catch(ct){Vm(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Gi=ts=null,ke=o,C.H=c,C.A=f,me===null&&(Fe=null,ye=0,Jo()),S}function U0(){for(;me!==null;)Wm(me)}function L0(e,n){var a=ke;ke|=2;var o=km(),c=Xm();Fe!==e||ye!==n?(Al=null,bl=ut()+500,qs(e,n)):Ws=te(e,n);t:do try{if(Ie!==0&&me!==null){n=me;var f=Yn;e:switch(Ie){case 1:Ie=0,Yn=null,js(e,n,f,1);break;case 2:if(ep(f)){Ie=0,Yn=null,Ym(n);break}n=function(){Ie===2&&Fe===e&&(Ie=7),Ri(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:ep(f)?(Ie=0,Yn=null,Ym(n)):(Ie=0,Yn=null,js(e,n,f,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var T=me;if(!S||M_(S)){Ie=0,Yn=null;var N=T.sibling;if(N!==null)me=N;else{var k=T.return;k!==null?(me=k,wl(k)):me=null}break e}}Ie=0,Yn=null,js(e,n,f,5);break;case 6:Ie=0,Yn=null,js(e,n,f,6);break;case 8:sf(),Ye=6;break t;default:throw Error(s(462))}}N0();break}catch(ct){Vm(e,ct)}while(!0);return Gi=ts=null,C.H=o,C.A=c,ke=a,me!==null?0:(Fe=null,ye=0,Jo(),Ye)}function N0(){for(;me!==null&&!E();)Wm(me)}function Wm(e){var n=dm(e.alternate,e,ji);e.memoizedProps=e.pendingProps,n===null?wl(e):me=n}function Ym(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=om(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=om(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:uu(n);default:Fm(a,n),n=me=Pm(n,ji),n=dm(a,n,ji)}e.memoizedProps=e.pendingProps,n===null?wl(e):me=n}function js(e,n,a,o){Gi=ts=null,uu(n),Ps=null,Zr=0;var c=n.return;try{if(M0(e,c,n,a,ye)){Ye=1,vl(e,$n(a,e.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Ye=1,vl(e,$n(a,e.current)),me=null;return}n.flags&32768?(be||o===1?e=!0:Ws||(ye&536870912)!==0?e=!1:(qi=e=!0,(o===2||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),qm(n,e)):wl(n)}function wl(e){var n=e;do{if((n.flags&32768)!==0){qm(n,qi);return}e=n.return;var a=A0(n.alternate,n,ji);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ye===0&&(Ye=5)}function qm(e,n){do{var a=R0(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ye=6,me=null}function jm(e,n,a,o,c,f,S,T,N,k){var ct=C.T,St=W.p;try{W.p=2,C.T=null,O0(e,n,a,o,St,c,f,S,T,N,k)}finally{C.T=ct,W.p=St}}function O0(e,n,a,o,c,f,S,T){do Zs();while(ss!==null);if((ke&6)!==0)throw Error(s(327));var N=e.finishedWork;if(o=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var k=N.lanes|N.childLanes;if(k|=Zc,Vo(e,o,k,f,S,T),e===Fe&&(me=Fe=null,ye=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||Rl||(Rl=!0,tf=k,ef=a,F0(wt,function(){return Zs(),null})),a=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,f=W.p,W.p=2,S=ke,ke|=4,E0(e,N),Cm(N,e),a0(Sf,e.containerInfo),Gl=!!vf,Sf=vf=null,e.current=N,Tm(e,N.alternate,N),J(),ke=S,W.p=f,C.T=a):e.current=N,Rl?(Rl=!1,ss=e,po=o):Zm(e,k),k=e.pendingLanes,k===0&&(Ea=null),Ft(N.stateNode),Ri(e),n!==null)for(c=e.onRecoverableError,N=0;N<n.length;N++)k=n[N],c(k.value,{componentStack:k.stack});return(po&3)!==0&&Zs(),k=e.pendingLanes,(o&4194218)!==0&&(k&42)!==0?e===nf?mo++:(mo=0,nf=e):mo=0,_o(0),null}function Zm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qr(n)))}function Zs(){if(ss!==null){var e=ss,n=tf;tf=0;var a=Es(po),o=C.T,c=W.p;try{if(W.p=32>a?32:a,C.T=null,ss===null)var f=!1;else{a=ef,ef=null;var S=ss,T=po;if(ss=null,po=0,(ke&6)!==0)throw Error(s(331));var N=ke;if(ke|=4,Nm(S.current),Dm(S,S.current,T,a),ke=N,_o(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Qt,S)}catch{}f=!0}return f}finally{W.p=c,C.T=o,Zm(e,n)}}return!1}function Km(e,n,a){n=$n(a,n),n=Tu(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(Cn(e,2),Ri(e))}function Be(e,n,a){if(e.tag===3)Km(e,e,a);else for(;n!==null;){if(n.tag===3){Km(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ea===null||!Ea.has(o))){e=$n(a,e),a=$p(2),o=ga(n,a,2),o!==null&&(tm(a,o,n,e),Cn(o,2),Ri(o));break}}n=n.return}}function lf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new w0;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Ku=!0,c.add(a),e=P0.bind(null,e,n,a),n.then(e,e))}function P0(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Fe===e&&(ye&a)===a&&(Ye===4||Ye===3&&(ye&62914560)===ye&&300>ut()-$u?(ke&2)===0&&qs(e,0):Qu|=a,Ys===ye&&(Ys=0)),Ri(e)}function Qm(e,n){n===0&&(n=Ee()),e=ca(e,n),e!==null&&(Cn(e,n),Ri(e))}function z0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Qm(e,a)}function B0(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Qm(e,a)}function F0(e,n){return Vt(e,n)}var Dl=null,Ks=null,cf=!1,Ul=!1,uf=!1,rs=0;function Ri(e){e!==Ks&&e.next===null&&(Ks===null?Dl=Ks=e:Ks=Ks.next=e),Ul=!0,cf||(cf=!0,H0(I0))}function _o(e,n){if(!uf&&Ul){uf=!0;do for(var a=!1,o=Dl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Zt(42|e)+1)-1,f&=c&~(S&~T),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,t_(o,f))}else f=ye,f=Ut(o,o===Fe?f:0),(f&3)===0||te(o,f)||(a=!0,t_(o,f));o=o.next}while(a);uf=!1}}function I0(){Ul=cf=!1;var e=0;rs!==0&&(j0()&&(e=rs),rs=0);for(var n=ut(),a=null,o=Dl;o!==null;){var c=o.next,f=Jm(o,n);f===0?(o.next=null,a===null?Dl=c:a.next=c,c===null&&(Ks=a)):(a=o,(e!==0||(f&3)!==0)&&(Ul=!0)),o=c}_o(e)}function Jm(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Zt(f),T=1<<S,N=c[S];N===-1?((T&a)===0||(T&o)!==0)&&(c[S]=Ge(T,n)):N<=n&&(e.expiredLanes|=T),f&=~T}if(n=Fe,a=ye,a=Ut(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&Ie===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&U(o),Es(a)){case 2:case 8:a=kt;break;case 32:a=wt;break;case 268435456:a=_e;break;default:a=wt}return o=$m.bind(null,e),a=Vt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function $m(e,n){var a=e.callbackNode;if(Zs()&&e.callbackNode!==a)return null;var o=ye;return o=Ut(e,e===Fe?o:0),o===0?null:(Hm(e,o,n),Jm(e,ut()),e.callbackNode!=null&&e.callbackNode===a?$m.bind(null,e):null)}function t_(e,n){if(Zs())return null;Hm(e,n,!0)}function H0(e){K0(function(){(ke&6)!==0?Vt(dt,e):e()})}function ff(){return rs===0&&(rs=nn()),rs}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wo(""+e)}function n_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function G0(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=e_((c[sn]||null).action),S=o.submitter;S&&(n=(n=S[sn]||null)?e_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Zo("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rs!==0){var N=S?n_(c,S):new FormData(c);Su(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=S?n_(c,S):new FormData(c),Su(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var hf=0;hf<jd.length;hf++){var df=jd[hf],V0=df.toLowerCase(),k0=df[0].toUpperCase()+df.slice(1);hi(V0,"on"+k0)}hi(kd,"onAnimationEnd"),hi(Xd,"onAnimationIteration"),hi(Wd,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(r0,"onTransitionRun"),hi(o0,"onTransitionStart"),hi(l0,"onTransitionCancel"),hi(Yd,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function i_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],N=T.instance,k=T.currentTarget;if(T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=k;try{f(c)}catch(ct){gl(ct)}c.currentTarget=null,f=N}else for(S=0;S<o.length;S++){if(T=o[S],N=T.instance,k=T.currentTarget,T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=k;try{f(c)}catch(ct){gl(ct)}c.currentTarget=null,f=N}}}}function xe(e,n){var a=n[Ts];a===void 0&&(a=n[Ts]=new Set);var o=e+"__bubble";a.has(o)||(a_(n,e,2,!1),a.add(o))}function pf(e,n,a){var o=0;n&&(o|=4),a_(a,e,o,n)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function mf(e){if(!e[Ll]){e[Ll]=!0,j.forEach(function(a){a!=="selectionchange"&&(X0.has(a)||pf(a,!1,e),pf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ll]||(n[Ll]=!0,pf("selectionchange",!1,n))}}function a_(e,n,a,o){switch(R_(n)){case 2:var c=_S;break;case 8:c=gS;break;default:c=Cf}a=c.bind(null,n,a,e),c=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function _f(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c||T.nodeType===8&&T.parentNode===c)break;if(S===4)for(S=o.return;S!==null;){var N=S.tag;if((N===3||N===4)&&(N=S.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;S=S.return}for(;T!==null;){if(S=Pi(T),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){o=f=S;continue t}T=T.parentNode}}o=o.return}Sd(function(){var k=f,ct=Oc(a),St=[];t:{var it=qd.get(e);if(it!==void 0){var ot=Zo,Wt=e;switch(e){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":ot=Bv;break;case"focusin":Wt="focus",ot=Hc;break;case"focusout":Wt="blur",ot=Hc;break;case"beforeblur":case"afterblur":ot=Hc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Hv;break;case kd:case Xd:case Wd:ot=Cv;break;case Yd:ot=Vv;break;case"scroll":case"scrollend":ot=Ev;break;case"wheel":ot=Xv;break;case"copy":case"cut":case"paste":ot=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Td;break;case"toggle":case"beforetoggle":ot=Yv}var se=(n&4)!==0,qe=!se&&(e==="scroll"||e==="scrollend"),Z=se?it!==null?it+"Capture":null:it;se=[];for(var V=k,$;V!==null;){var mt=V;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||Z===null||(mt=Pr(V,Z),mt!=null&&se.push(vo(V,mt,$))),qe)break;V=V.return}0<se.length&&(it=new ot(it,Wt,null,a,ct),St.push({event:it,listeners:se}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",it&&a!==Nc&&(Wt=a.relatedTarget||a.fromElement)&&(Pi(Wt)||Wt[Oi]))break t;if((ot||it)&&(it=ct.window===ct?ct:(it=ct.ownerDocument)?it.defaultView||it.parentWindow:window,ot?(Wt=a.relatedTarget||a.toElement,ot=k,Wt=Wt?Pi(Wt):null,Wt!==null&&(qe=q(Wt),se=Wt.tag,Wt!==qe||se!==5&&se!==27&&se!==6)&&(Wt=null)):(ot=null,Wt=k),ot!==Wt)){if(se=yd,mt="onMouseLeave",Z="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(se=Td,mt="onPointerLeave",Z="onPointerEnter",V="pointer"),qe=ot==null?it:Y(ot),$=Wt==null?it:Y(Wt),it=new se(mt,V+"leave",ot,a,ct),it.target=qe,it.relatedTarget=$,mt=null,Pi(ct)===k&&(se=new se(Z,V+"enter",Wt,a,ct),se.target=$,se.relatedTarget=qe,mt=se),qe=mt,ot&&Wt)e:{for(se=ot,Z=Wt,V=0,$=se;$;$=Qs($))V++;for($=0,mt=Z;mt;mt=Qs(mt))$++;for(;0<V-$;)se=Qs(se),V--;for(;0<$-V;)Z=Qs(Z),$--;for(;V--;){if(se===Z||Z!==null&&se===Z.alternate)break e;se=Qs(se),Z=Qs(Z)}se=null}else se=null;ot!==null&&s_(St,it,ot,se,!1),Wt!==null&&qe!==null&&s_(St,qe,Wt,se,!0)}}t:{if(it=k?Y(k):window,ot=it.nodeName&&it.nodeName.toLowerCase(),ot==="select"||ot==="input"&&it.type==="file")var It=Ld;else if(Dd(it))if(Nd)It=n0;else{It=t0;var he=$v}else ot=it.nodeName,!ot||ot.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?k&&Lc(k.elementType)&&(It=Ld):It=e0;if(It&&(It=It(e,k))){Ud(St,It,a,ct);break t}he&&he(e,it,k),e==="focusout"&&k&&it.type==="number"&&k.memoizedProps.value!=null&&yn(it,"number",it.value)}switch(he=k?Y(k):window,e){case"focusin":(Dd(he)||he.contentEditable==="true")&&(ws=he,Yc=k,kr=null);break;case"focusout":kr=Yc=ws=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Gd(St,a,ct);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":Gd(St,a,ct)}var qt;if(Vc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Cs?Cd(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(bd&&a.locale!=="ko"&&(Cs||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Cs&&(qt=xd()):(la=ct,Bc="value"in la?la.value:la.textContent,Cs=!0)),he=Nl(k,Jt),0<he.length&&(Jt=new Ed(Jt,e,null,a,ct),St.push({event:Jt,listeners:he}),qt?Jt.data=qt:(qt=wd(a),qt!==null&&(Jt.data=qt)))),(qt=jv?Zv(e,a):Kv(e,a))&&(Jt=Nl(k,"onBeforeInput"),0<Jt.length&&(he=new Ed("onBeforeInput","beforeinput",null,a,ct),St.push({event:he,listeners:Jt}),he.data=qt)),G0(St,e,k,a,ct)}i_(St,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Nl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Pr(e,a),c!=null&&o.unshift(vo(e,c,f)),c=Pr(e,n),c!=null&&o.push(vo(e,c,f))),e=e.return}return o}function Qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function s_(e,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,N=T.alternate,k=T.stateNode;if(T=T.tag,N!==null&&N===o)break;T!==5&&T!==26&&T!==27||k===null||(N=k,c?(k=Pr(a,f),k!=null&&S.unshift(vo(a,k,N))):c||(k=Pr(a,f),k!=null&&S.push(vo(a,k,N)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var W0=/\r\n?/g,Y0=/\u0000|\uFFFD/g;function r_(e){return(typeof e=="string"?e:""+e).replace(W0,`
`).replace(Y0,"")}function o_(e,n){return n=r_(n),r_(e)===n}function Ol(){}function Oe(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Fn(e,""+o);break;case"className":He(e,"class",o);break;case"tabIndex":He(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":He(e,a,o);break;case"style":gd(e,o,f);break;case"data":if(n!=="object"){He(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ol);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Wo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ve(e,"popover",o);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mv.get(a)||a,ve(e,a,o))}}function gf(e,n,a,o,c,f){switch(a){case"style":gd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&Fn(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ve(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,f,S,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var T=f=S=c=null,N=null,k=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":S=ct;break;case"checked":N=ct;break;case"defaultChecked":k=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Oe(e,n,o,ct,a,null)}}Dn(e,f,T,N,k,S,c,!1),Se(e);return;case"select":xe("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Oe(e,n,c,T,a,null)}n=f,a=S,e.multiple=!!o,n!=null?Xe(e,!!o,n,!1):a!=null&&Xe(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Oe(e,n,S,T,a,null)}bs(e,o,c,f),Se(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(o=a[N],o!=null))switch(N){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,N,o,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<go.length;o++)xe(go[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,k,o,a,null)}return;default:if(Lc(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&gf(e,n,ct,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Oe(e,n,T,o,a,null))}function q0(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,N=null,k=null,ct=null;for(ot in a){var St=a[ot];if(a.hasOwnProperty(ot)&&St!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":N=St;default:o.hasOwnProperty(ot)||Oe(e,n,ot,null,o,St)}}for(var it in o){var ot=o[it];if(St=a[it],o.hasOwnProperty(it)&&(ot!=null||St!=null))switch(it){case"type":f=ot;break;case"name":c=ot;break;case"checked":k=ot;break;case"defaultChecked":ct=ot;break;case"value":S=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==St&&Oe(e,n,it,ot,o,St)}}Le(e,S,T,N,k,ct,f,c);return;case"select":ot=S=T=it=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":ot=N;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,N)}for(c in o)if(f=o[c],N=a[c],o.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==N&&Oe(e,n,c,f,o,N)}n=T,a=S,o=ot,it!=null?Xe(e,!!a,it,!1):!!o!=!!a&&(n!=null?Xe(e,!!a,n,!0):Xe(e,!!a,a?[]:"",!1));return;case"textarea":ot=it=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Oe(e,n,S,c,o,f)}vn(e,it,ot);return;case"option":for(var Wt in a)if(it=a[Wt],a.hasOwnProperty(Wt)&&it!=null&&!o.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:Oe(e,n,Wt,null,o,it)}for(N in o)if(it=o[N],ot=a[N],o.hasOwnProperty(N)&&it!==ot&&(it!=null||ot!=null))switch(N){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,N,it,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)it=a[se],a.hasOwnProperty(se)&&it!=null&&!o.hasOwnProperty(se)&&Oe(e,n,se,null,o,it);for(k in o)if(it=o[k],ot=a[k],o.hasOwnProperty(k)&&it!==ot&&(it!=null||ot!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Oe(e,n,k,it,o,ot)}return;default:if(Lc(n)){for(var qe in a)it=a[qe],a.hasOwnProperty(qe)&&it!==void 0&&!o.hasOwnProperty(qe)&&gf(e,n,qe,void 0,o,it);for(ct in o)it=o[ct],ot=a[ct],!o.hasOwnProperty(ct)||it===ot||it===void 0&&ot===void 0||gf(e,n,ct,it,o,ot);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!o.hasOwnProperty(Z)&&Oe(e,n,Z,null,o,it);for(St in o)it=o[St],ot=a[St],!o.hasOwnProperty(St)||it===ot||it==null&&ot==null||Oe(e,n,St,it,o,ot)}var vf=null,Sf=null;function Pl(e){return e.nodeType===9?e:e.ownerDocument}function l_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mf=null;function j0(){var e=window.event;return e&&e.type==="popstate"?e===Mf?!1:(Mf=e,!0):(Mf=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,f_=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof f_<"u"?function(e){return f_.resolve(null).then(e).catch(Q0)}:u_;function Q0(e){setTimeout(function(){throw e})}function yf(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){e.removeChild(c),Ao(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);Ao(n)}function Ef(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ef(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function J0(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ga])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function $0(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function h_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function d_(e,n,a){switch(n=Pl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var oi=new Map,p_=new Set;function zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ki=W.d;W.d={f:tS,r:eS,D:nS,C:iS,L:aS,m:sS,X:oS,S:rS,M:lS};function tS(){var e=Ki.f(),n=Cl();return e||n}function eS(e){var n=b(e);n!==null&&n.tag===5&&n.type==="form"?Gp(n):Ki.r(e)}var Js=typeof document>"u"?null:document;function m_(e,n,a){var o=Js;if(o&&typeof n=="string"&&n){var c=hn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),p_.has(c)||(p_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Mn(n,"link",e),Q(n),o.head.appendChild(n)))}}function nS(e){Ki.D(e),m_("dns-prefetch",e,null)}function iS(e,n){Ki.C(e,n),m_("preconnect",e,n)}function aS(e,n,a){Ki.L(e,n,a);var o=Js;if(o&&e&&n){var c='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hn(a.imageSizes)+'"]')):c+='[href="'+hn(e)+'"]';var f=c;switch(n){case"style":f=$s(e);break;case"script":f=tr(e)}oi.has(f)||(e=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(So(f))||n==="script"&&o.querySelector(xo(f))||(n=o.createElement("link"),Mn(n,"link",e),Q(n),o.head.appendChild(n)))}}function sS(e,n){Ki.m(e,n);var a=Js;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hn(o)+'"][href="'+hn(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=tr(e)}if(!oi.has(f)&&(e=A({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}o=a.createElement("link"),Mn(o,"link",e),Q(o),a.head.appendChild(o)}}}function rS(e,n,a){Ki.S(e,n,a);var o=Js;if(o&&e){var c=et(o).hoistableStyles,f=$s(e);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(So(f)))T.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Tf(e,a);var N=S=o.createElement("link");Q(N),Mn(N,"link",e),N._p=new Promise(function(k,ct){N.onload=k,N.onerror=ct}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Bl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function oS(e,n){Ki.X(e,n);var a=Js;if(a&&e){var o=et(a).hoistableScripts,c=tr(e),f=o.get(c);f||(f=a.querySelector(xo(c)),f||(e=A({src:e,async:!0},n),(n=oi.get(c))&&bf(e,n),f=a.createElement("script"),Q(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function lS(e,n){Ki.M(e,n);var a=Js;if(a&&e){var o=et(a).hoistableScripts,c=tr(e),f=o.get(c);f||(f=a.querySelector(xo(c)),f||(e=A({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&bf(e,n),f=a.createElement("script"),Q(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function __(e,n,a,o){var c=(c=$t.current)?zl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$s(a.href),a=et(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$s(a.href);var f=et(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(So(e)))&&!f._p&&(S.instance=f,S.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||cS(c,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=tr(a),a=et(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function $s(e){return'href="'+hn(e)+'"'}function So(e){return'link[rel="stylesheet"]['+e+"]"}function g_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function cS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),Q(n),e.head.appendChild(n))}function tr(e){return'[src="'+hn(e)+'"]'}function xo(e){return"script[async]"+e}function v_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+hn(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var c=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),Mn(o,"style",c),Bl(o,a.precedence,e),n.instance=o;case"stylesheet":c=$s(a.href);var f=e.querySelector(So(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;o=g_(a),(c=oi.get(c))&&Tf(o,c),f=(e.ownerDocument||e).createElement("link"),Q(f);var S=f;return S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),Mn(f,"link",o),n.state.loading|=4,Bl(f,a.precedence,e),n.instance=f;case"script":return f=tr(a.src),(c=e.querySelector(xo(f)))?(n.instance=c,Q(c),c):(o=a,(c=oi.get(f))&&(o=A({},a),bf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),Mn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Bl(o,a.precedence,e));return n.instance}function Bl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Tf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fl=null;function S_(e,n,a){if(Fl===null){var o=new Map,c=Fl=new Map;c.set(a,o)}else c=Fl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ga]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function x_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Mo=null;function fS(){}function hS(e,n,a){if(Mo===null)throw Error(s(475));var o=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=$s(a.href),f=e.querySelector(So(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Il.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,Q(f);return}f=e.ownerDocument||e,a=g_(a),(c=oi.get(c))&&Tf(a,c),f=f.createElement("link"),Q(f);var S=f;S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),Mn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Il.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function dS(){if(Mo===null)throw Error(s(475));var e=Mo;return e.stylesheets&&e.count===0&&Af(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Af(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Il(){if(this.count--,this.count===0){if(this.stylesheets)Af(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hl=null;function Af(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hl=new Map,n.forEach(pS,e),Hl=null,Il.call(e))}function pS(e,n){if(!(n.state.loading&4)){var a=Hl.get(e);if(a)var o=a.get(null);else{a=new Map,Hl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Il.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:y,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function mS(e,n,a,o,c,f,S,T){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.hiddenUpdates=Rn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function y_(e,n,a,o,c,f,S,T,N,k,ct,St){return e=new mS(e,n,a,S,T,N,k,St),n=1,f===!0&&(n|=24),f=si(3,null,null,n),e.current=f,f.stateNode=e,n=iu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Bu(f),e}function E_(e){return e?(e=Ls,e):Ls}function T_(e,n,a,o,c,f){c=E_(c),o.context===null?o.context=c:o.pendingContext=c,o=_a(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ga(e,o,n),a!==null&&(Ln(a,e,n),ao(a,e,n))}function b_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Rf(e,n){b_(e,n),(e=e.alternate)&&b_(e,n)}function A_(e){if(e.tag===13){var n=ca(e,67108864);n!==null&&Ln(n,e,67108864),Rf(e,67108864)}}var Gl=!0;function _S(e,n,a,o){var c=C.T;C.T=null;var f=W.p;try{W.p=2,Cf(e,n,a,o)}finally{W.p=f,C.T=c}}function gS(e,n,a,o){var c=C.T;C.T=null;var f=W.p;try{W.p=8,Cf(e,n,a,o)}finally{W.p=f,C.T=c}}function Cf(e,n,a,o){if(Gl){var c=wf(o);if(c===null)_f(e,n,o,Vl,a),C_(e,o);else if(SS(c,e,n,a,o))o.stopPropagation();else if(C_(e,o),n&4&&-1<vS.indexOf(e)){for(;c!==null;){var f=b(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ct(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var N=1<<31-Zt(S);T.entanglements[1]|=N,S&=~N}Ri(f),(ke&6)===0&&(bl=ut()+500,_o(0))}}break;case 13:T=ca(f,2),T!==null&&Ln(T,f,2),Cl(),Rf(f,2)}if(f=wf(o),f===null&&_f(e,n,o,Vl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else _f(e,n,o,null,a)}}function wf(e){return e=Oc(e),Df(e)}var Vl=null;function Df(e){if(Vl=null,e=Pi(e),e!==null){var n=q(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=xt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Vl=e,null}function R_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case dt:return 2;case kt:return 8;case wt:case zt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Uf=!1,Ta=null,ba=null,Aa=null,Eo=new Map,To=new Map,Ra=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C_(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=b(n),n!==null&&A_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function SS(e,n,a,o,c){switch(n){case"focusin":return Ta=bo(Ta,e,n,a,o,c),!0;case"dragenter":return ba=bo(ba,e,n,a,o,c),!0;case"mouseover":return Aa=bo(Aa,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,e,n,a,o,c)),!0}return!1}function w_(e){var n=Pi(e.target);if(n!==null){var a=q(n);if(a!==null){if(n=a.tag,n===13){if(n=xt(a),n!==null){e.blockedOn=n,ko(e.priority,function(){if(a.tag===13){var o=qn(),c=ca(a,o);c!==null&&Ln(c,a,o),Rf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Nc=o,a.target.dispatchEvent(o),Nc=null}else return n=b(a),n!==null&&A_(n),e.blockedOn=a,!1;n.shift()}return!0}function D_(e,n,a){kl(e)&&a.delete(n)}function xS(){Uf=!1,Ta!==null&&kl(Ta)&&(Ta=null),ba!==null&&kl(ba)&&(ba=null),Aa!==null&&kl(Aa)&&(Aa=null),Eo.forEach(D_),To.forEach(D_)}function Xl(e,n){e.blockedOn===n&&(e.blockedOn=null,Uf||(Uf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xS)))}var Wl=null;function U_(e){Wl!==e&&(Wl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wl===e&&(Wl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Df(o||a)===null)continue;break}var f=b(a);f!==null&&(e.splice(n,3),n-=3,Su(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ao(e){function n(N){return Xl(N,e)}Ta!==null&&Xl(Ta,e),ba!==null&&Xl(ba,e),Aa!==null&&Xl(Aa,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Ra.length;a++){var o=Ra[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)w_(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[sn]||null;if(typeof f=="function")S||U_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[sn]||null)T=S.formAction;else if(Df(c)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),U_(a)}}}function Lf(e){this._internalRoot=e}Yl.prototype.render=Lf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=qn();T_(a,o,e,n,null,null)},Yl.prototype.unmount=Lf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Zs(),T_(e.current,2,null,e,null,null),Cl(),n[Oi]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&w_(e)}};var L_=t.version;if(L_!=="19.0.0")throw Error(s(527,L_,"19.0.0"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=tt(n),e=e!==null?Mt(e):null,e=e===null?null:e.stateNode,e};var MS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Pi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Qt=ql.inject(MS),Xt=ql}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=Zp,f=Kp,S=Qp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=y_(e,1,!1,null,null,a,o,c,f,S,T,null),e[Oi]=n.current,mf(e.nodeType===8?e.parentNode:e),new Lf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=Zp,S=Kp,T=Qp,N=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),n=y_(e,1,!0,n,a??null,o,c,f,S,T,N,k),n.context=E_(null),a=n.current,o=qn(),c=_a(o),c.callback=null,ga(a,c,o),n.current.lanes=o,Cn(n,o),Ri(n),e[Oi]=n.current,mf(e),new Yl(n)},Co.version="19.0.0",Co}var V_;function US(){if(V_)return Of.exports;V_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Of.exports=DS(),Of.exports}var LS=US();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="174",Sr={ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NS=0,k_=1,OS=2,Vg=1,PS=2,na=3,Ia=0,Pn=1,wi=2,Ba=0,xr=1,ph=2,X_=3,W_=4,zS=5,ms=100,BS=101,FS=102,IS=103,HS=104,GS=200,VS=201,kS=202,XS=203,mh=204,_h=205,WS=206,YS=207,qS=208,jS=209,ZS=210,KS=211,QS=212,JS=213,$S=214,gh=0,vh=1,Sh=2,Er=3,xh=4,Mh=5,yh=6,Eh=7,kg=0,tx=1,ex=2,Fa=0,nx=1,ix=2,ax=3,sx=4,rx=5,ox=6,lx=7,Xg=300,Tr=301,br=302,Th=303,bh=304,Ac=306,Ah=1e3,gs=1001,Rh=1002,Mi=1003,cx=1004,jl=1005,Di=1006,If=1007,vs=1008,ra=1009,Wg=1010,Yg=1011,zo=1012,ad=1013,Ss=1014,ia=1015,Io=1016,sd=1017,rd=1018,Ar=1020,qg=35902,jg=1021,Zg=1022,xi=1023,Kg=1024,Qg=1025,Mr=1026,Rr=1027,Jg=1028,od=1029,$g=1030,ld=1031,cd=1033,gc=33776,vc=33777,Sc=33778,xc=33779,Ch=35840,wh=35841,Dh=35842,Uh=35843,Lh=36196,Nh=37492,Oh=37496,Ph=37808,zh=37809,Bh=37810,Fh=37811,Ih=37812,Hh=37813,Gh=37814,Vh=37815,kh=37816,Xh=37817,Wh=37818,Yh=37819,qh=37820,jh=37821,Mc=36492,Zh=36494,Kh=36495,tv=36283,Qh=36284,Jh=36285,$h=36286,ux=3200,fx=3201,hx=0,dx=1,za="",ci="srgb",Cr="srgb-linear",Ec="linear",Pe="srgb",er=7680,Y_=519,px=512,mx=513,_x=514,ev=515,gx=516,vx=517,Sx=518,xx=519,q_=35044,j_="300 es",aa=2e3,Tc=2001;class ys{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Z_=1234567;const Oo=Math.PI/180,Bo=180/Math.PI;function Dr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]).toLowerCase()}function pe(r,t,i){return Math.max(t,Math.min(i,r))}function ud(r,t){return(r%t+t)%t}function Mx(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function yx(r,t,i){return r!==t?(i-r)/(t-r):0}function Po(r,t,i){return(1-i)*r+i*t}function Ex(r,t,i,s){return Po(r,t,1-Math.exp(-i*s))}function Tx(r,t=1){return t-Math.abs(ud(r,t*2)-t)}function bx(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function Ax(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function Rx(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Cx(r,t){return r+Math.random()*(t-r)}function wx(r){return r*(.5-Math.random())}function Dx(r){r!==void 0&&(Z_=r);let t=Z_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ux(r){return r*Oo}function Lx(r){return r*Bo}function Nx(r){return(r&r-1)===0&&r!==0}function Ox(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Px(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zx(r,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((t+s)/2),_=h((t+s)/2),v=u((t-s)/2),x=h((t-s)/2),y=u((s-t)/2),R=h((s-t)/2);switch(l){case"XYX":r.set(d*_,p*v,p*x,d*m);break;case"YZY":r.set(p*x,d*_,p*v,d*m);break;case"ZXZ":r.set(p*v,p*x,d*_,d*m);break;case"XZX":r.set(d*_,p*R,p*y,d*m);break;case"YXY":r.set(p*y,d*_,p*R,d*m);break;case"ZYZ":r.set(p*R,p*y,d*_,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function mr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const td={DEG2RAD:Oo,RAD2DEG:Bo,generateUUID:Dr,clamp:pe,euclideanModulo:ud,mapLinear:Mx,inverseLerp:yx,lerp:Po,damp:Ex,pingpong:Tx,smoothstep:bx,smootherstep:Ax,randInt:Rx,randFloat:Cx,randFloatSpread:wx,seededRandom:Dx,degToRad:Ux,radToDeg:Lx,isPowerOfTwo:Nx,ceilPowerOfTwo:Ox,floorPowerOfTwo:Px,setQuaternionFromProperEuler:zx,normalize:Nn,denormalize:mr};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,s,l,u,h,d,p,m){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m)}set(t,i,s,l,u,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=p,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],_=s[4],v=s[7],x=s[2],y=s[5],R=s[8],w=l[0],M=l[3],g=l[6],P=l[1],O=l[4],D=l[7],H=l[2],G=l[5],F=l[8];return u[0]=h*w+d*P+p*H,u[3]=h*M+d*O+p*G,u[6]=h*g+d*D+p*F,u[1]=m*w+_*P+v*H,u[4]=m*M+_*O+v*G,u[7]=m*g+_*D+v*F,u[2]=x*w+y*P+R*H,u[5]=x*M+y*O+R*G,u[8]=x*g+y*D+R*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-s*u*_+s*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=_*h-d*m,x=d*p-_*u,y=m*u-h*p,R=i*v+s*x+l*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=v*w,t[1]=(l*m-_*s)*w,t[2]=(d*s-l*h)*w,t[3]=x*w,t[4]=(_*i-l*p)*w,t[5]=(l*u-d*i)*w,t[6]=y*w,t[7]=(s*p-m*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Hf.makeScale(t,i)),this}rotate(t){return this.premultiply(Hf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Hf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hf=new le;function nv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Fo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bx(){const r=Fo("canvas");return r.style.display="block",r}const K_={};function ds(r){r in K_||(K_[r]=!0,console.warn(r))}function Fx(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function Ix(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hx(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Q_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gx(){const r={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=yr(l.r),l.g=yr(l.g),l.b=yr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Ec:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Cr]:{primaries:t,whitePoint:s,transfer:Ec,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Re=Gx();function sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let nr;class Vx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{nr===void 0&&(nr=Fo("canvas")),nr.width=t.width,nr.height=t.height;const s=nr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=nr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=sa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(sa(i[s]/255)*255):i[s]=sa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kx=0;class fd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Dr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Gf(l[h].image)):u.push(Gf(l[h]))}else u=Gf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Gf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xx=0;class zn extends ys{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=gs,l=gs,u=Di,h=vs,d=xi,p=ra,m=zn.DEFAULT_ANISOTROPY,_=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Dr(),this.name="",this.source=new fd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ah:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ah:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Xg;zn.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,i=0,s=0,l=1){Ze.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],_=p[4],v=p[8],x=p[1],y=p[5],R=p[9],w=p[2],M=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+w)<.1&&Math.abs(R+M)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,D=(y+1)/2,H=(g+1)/2,G=(_+x)/4,F=(v+w)/4,K=(R+M)/4;return O>D&&O>H?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=G/s,u=F/s):D>H?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=G/l,u=K/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=F/u,l=K/u),this.set(s,l,u,i),this}let P=Math.sqrt((M-R)*(M-R)+(v-w)*(v-w)+(x-_)*(x-_));return Math.abs(P)<.001&&(P=1),this.x=(M-R)/P,this.y=(v-w)/P,this.z=(x-_)/P,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wx extends ys{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ze(0,0,t,i),this.scissorTest=!1,this.viewport=new Ze(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new zn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new fd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends Wx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class iv extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yx extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let p=s[l+0],m=s[l+1],_=s[l+2],v=s[l+3];const x=u[h+0],y=u[h+1],R=u[h+2],w=u[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=R,t[i+3]=w;return}if(v!==w||p!==x||m!==y||_!==R){let M=1-d;const g=p*x+m*y+_*R+v*w,P=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const H=Math.sqrt(O),G=Math.atan2(H,g*P);M=Math.sin(M*G)/H,d=Math.sin(d*G)/H}const D=d*P;if(p=p*M+x*D,m=m*M+y*D,_=_*M+R*D,v=v*M+w*D,M===1-d){const H=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=H,m*=H,_*=H,v*=H}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],v=u[h],x=u[h+1],y=u[h+2],R=u[h+3];return t[i]=d*R+_*v+p*y-m*x,t[i+1]=p*R+_*x+m*v-d*y,t[i+2]=m*R+_*y+d*x-p*v,t[i+3]=_*R-d*v-p*x-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),v=d(u/2),x=p(s/2),y=p(l/2),R=p(u/2);switch(h){case"XYZ":this._x=x*_*v+m*y*R,this._y=m*y*v-x*_*R,this._z=m*_*R+x*y*v,this._w=m*_*v-x*y*R;break;case"YXZ":this._x=x*_*v+m*y*R,this._y=m*y*v-x*_*R,this._z=m*_*R-x*y*v,this._w=m*_*v+x*y*R;break;case"ZXY":this._x=x*_*v-m*y*R,this._y=m*y*v+x*_*R,this._z=m*_*R+x*y*v,this._w=m*_*v-x*y*R;break;case"ZYX":this._x=x*_*v-m*y*R,this._y=m*y*v+x*_*R,this._z=m*_*R-x*y*v,this._w=m*_*v+x*y*R;break;case"YZX":this._x=x*_*v+m*y*R,this._y=m*y*v+x*_*R,this._z=m*_*R-x*y*v,this._w=m*_*v-x*y*R;break;case"XZY":this._x=x*_*v-m*y*R,this._y=m*y*v-x*_*R,this._z=m*_*R+x*y*v,this._w=m*_*v+x*y*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],v=i[10],x=s+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(h-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(u-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(h-l)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-u*p,this._y=l*_+h*p+u*d-s*m,this._z=u*_+h*m+s*p-l*d,this._w=h*_-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-i)*_)/m,x=Math.sin(i*_)/m;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),_=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+p*m+h*v-d*_,this.y=s+p*_+d*m-u*v,this.z=l+p*v+u*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Vf.copy(this).projectOnVector(t),this.sub(Vf)}reflect(t){return this.sub(Vf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new nt,$_=new Ms;class Ho{constructor(t=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,_i):_i.fromBufferAttribute(u,h),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zl.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Zl.copy(s.boundingBox)),Zl.applyMatrix4(t.matrixWorld),this.union(Zl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),Kl.subVectors(this.max,wo),ir.subVectors(t.a,wo),ar.subVectors(t.b,wo),sr.subVectors(t.c,wo),wa.subVectors(ar,ir),Da.subVectors(sr,ar),os.subVectors(ir,sr);let i=[0,-wa.z,wa.y,0,-Da.z,Da.y,0,-os.z,os.y,wa.z,0,-wa.x,Da.z,0,-Da.x,os.z,0,-os.x,-wa.y,wa.x,0,-Da.y,Da.x,0,-os.y,os.x,0];return!kf(i,ir,ar,sr,Kl)||(i=[1,0,0,0,1,0,0,0,1],!kf(i,ir,ar,sr,Kl))?!1:(Ql.crossVectors(wa,Da),i=[Ql.x,Ql.y,Ql.z],kf(i,ir,ar,sr,Kl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qi=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],_i=new nt,Zl=new Ho,ir=new nt,ar=new nt,sr=new nt,wa=new nt,Da=new nt,os=new nt,wo=new nt,Kl=new nt,Ql=new nt,ls=new nt;function kf(r,t,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){ls.fromArray(r,u);const d=l.x*Math.abs(ls.x)+l.y*Math.abs(ls.y)+l.z*Math.abs(ls.z),p=t.dot(ls),m=i.dot(ls),_=s.dot(ls);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const qx=new Ho,Do=new nt,Xf=new nt;class hd{constructor(t=new nt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):qx.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Do,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(Xf)),this.expandByPoint(Do.copy(t.center).sub(Xf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new nt,Wf=new nt,Jl=new nt,Ua=new nt,Yf=new nt,$l=new nt,qf=new nt;class av{constructor(t=new nt,i=new nt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Wf.copy(t).add(i).multiplyScalar(.5),Jl.copy(i).sub(t).normalize(),Ua.copy(this.origin).sub(Wf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Jl),d=Ua.dot(this.direction),p=-Ua.dot(Jl),m=Ua.lengthSq(),_=Math.abs(1-h*h);let v,x,y,R;if(_>0)if(v=h*p-d,x=h*d-p,R=u*_,v>=0)if(x>=-R)if(x<=R){const w=1/_;v*=w,x*=w,y=v*(v+h*x+2*d)+x*(h*v+x+2*p)+m}else x=u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*p)+m;else x<=-R?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m):x<=R?(v=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Wf).addScaledVector(Jl,x),y}intersectSphere(t,i){Ji.subVectors(t.center,this.origin);const s=Ji.dot(this.direction),l=Ji.dot(Ji)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,p=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,p=(t.min.z-x.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,i,s,l,u){Yf.subVectors(i,t),$l.subVectors(s,t),qf.crossVectors(Yf,$l);let h=this.direction.dot(qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,t);const p=d*this.direction.dot($l.crossVectors(Ua,$l));if(p<0)return null;const m=d*this.direction.dot(Yf.cross(Ua));if(m<0||p+m>h)return null;const _=-d*Ua.dot(qf);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,u,h,d,p,m,_,v,x,y,R,w,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m,_,v,x,y,R,w,M)}set(t,i,s,l,u,h,d,p,m,_,v,x,y,R,w,M){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=y,g[7]=R,g[11]=w,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/rr.setFromMatrixColumn(t,0).length(),u=1/rr.setFromMatrixColumn(t,1).length(),h=1/rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*_,y=h*v,R=d*_,w=d*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=y+R*m,i[5]=x-w*m,i[9]=-d*p,i[2]=w-x*m,i[6]=R+y*m,i[10]=h*p}else if(t.order==="YXZ"){const x=p*_,y=p*v,R=m*_,w=m*v;i[0]=x+w*d,i[4]=R*d-y,i[8]=h*m,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=y*d-R,i[6]=w+x*d,i[10]=h*p}else if(t.order==="ZXY"){const x=p*_,y=p*v,R=m*_,w=m*v;i[0]=x-w*d,i[4]=-h*v,i[8]=R+y*d,i[1]=y+R*d,i[5]=h*_,i[9]=w-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const x=h*_,y=h*v,R=d*_,w=d*v;i[0]=p*_,i[4]=R*m-y,i[8]=x*m+w,i[1]=p*v,i[5]=w*m+x,i[9]=y*m-R,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const x=h*p,y=h*m,R=d*p,w=d*m;i[0]=p*_,i[4]=w-x*v,i[8]=R*v+y,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=y*v+R,i[10]=x-w*v}else if(t.order==="XZY"){const x=h*p,y=h*m,R=d*p,w=d*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=x*v+w,i[5]=h*_,i[9]=y*v-R,i[2]=R*v-y,i[6]=d*_,i[10]=w*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jx,t,Zx)}lookAt(t,i,s){const l=this.elements;return jn.subVectors(t,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),La.crossVectors(s,jn),La.lengthSq()===0&&(Math.abs(s.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),La.crossVectors(s,jn)),La.normalize(),tc.crossVectors(jn,La),l[0]=La.x,l[4]=tc.x,l[8]=jn.x,l[1]=La.y,l[5]=tc.y,l[9]=jn.y,l[2]=La.z,l[6]=tc.z,l[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],_=s[1],v=s[5],x=s[9],y=s[13],R=s[2],w=s[6],M=s[10],g=s[14],P=s[3],O=s[7],D=s[11],H=s[15],G=l[0],F=l[4],K=l[8],C=l[12],A=l[1],I=l[5],lt=l[9],st=l[13],pt=l[2],ft=l[6],z=l[10],at=l[14],q=l[3],xt=l[7],L=l[11],tt=l[15];return u[0]=h*G+d*A+p*pt+m*q,u[4]=h*F+d*I+p*ft+m*xt,u[8]=h*K+d*lt+p*z+m*L,u[12]=h*C+d*st+p*at+m*tt,u[1]=_*G+v*A+x*pt+y*q,u[5]=_*F+v*I+x*ft+y*xt,u[9]=_*K+v*lt+x*z+y*L,u[13]=_*C+v*st+x*at+y*tt,u[2]=R*G+w*A+M*pt+g*q,u[6]=R*F+w*I+M*ft+g*xt,u[10]=R*K+w*lt+M*z+g*L,u[14]=R*C+w*st+M*at+g*tt,u[3]=P*G+O*A+D*pt+H*q,u[7]=P*F+O*I+D*ft+H*xt,u[11]=P*K+O*lt+D*z+H*L,u[15]=P*C+O*st+D*at+H*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],v=t[6],x=t[10],y=t[14],R=t[3],w=t[7],M=t[11],g=t[15];return R*(+u*p*v-l*m*v-u*d*x+s*m*x+l*d*y-s*p*y)+w*(+i*p*y-i*m*x+u*h*x-l*h*y+l*m*_-u*p*_)+M*(+i*m*v-i*d*y-u*h*v+s*h*y+u*d*_-s*m*_)+g*(-l*d*_-i*p*v+i*d*x+l*h*v-s*h*x+s*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=t[9],x=t[10],y=t[11],R=t[12],w=t[13],M=t[14],g=t[15],P=v*M*m-w*x*m+w*p*y-d*M*y-v*p*g+d*x*g,O=R*x*m-_*M*m-R*p*y+h*M*y+_*p*g-h*x*g,D=_*w*m-R*v*m+R*d*y-h*w*y-_*d*g+h*v*g,H=R*v*p-_*w*p-R*d*x+h*w*x+_*d*M-h*v*M,G=i*P+s*O+l*D+u*H;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return t[0]=P*F,t[1]=(w*x*u-v*M*u-w*l*y+s*M*y+v*l*g-s*x*g)*F,t[2]=(d*M*u-w*p*u+w*l*m-s*M*m-d*l*g+s*p*g)*F,t[3]=(v*p*u-d*x*u-v*l*m+s*x*m+d*l*y-s*p*y)*F,t[4]=O*F,t[5]=(_*M*u-R*x*u+R*l*y-i*M*y-_*l*g+i*x*g)*F,t[6]=(R*p*u-h*M*u-R*l*m+i*M*m+h*l*g-i*p*g)*F,t[7]=(h*x*u-_*p*u+_*l*m-i*x*m-h*l*y+i*p*y)*F,t[8]=D*F,t[9]=(R*v*u-_*w*u-R*s*y+i*w*y+_*s*g-i*v*g)*F,t[10]=(h*w*u-R*d*u+R*s*m-i*w*m-h*s*g+i*d*g)*F,t[11]=(_*d*u-h*v*u-_*s*m+i*v*m+h*s*y-i*d*y)*F,t[12]=H*F,t[13]=(_*w*l-R*v*l+R*s*x-i*w*x-_*s*M+i*v*M)*F,t[14]=(R*d*l-h*w*l-R*s*p+i*w*p+h*s*M-i*d*M)*F,t[15]=(h*v*l-_*d*l+_*s*p-i*v*p-h*s*x+i*d*x)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,p=t.z,m=u*h,_=u*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*h,0,m*p-l*d,_*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,_=h+h,v=d+d,x=u*m,y=u*_,R=u*v,w=h*_,M=h*v,g=d*v,P=p*m,O=p*_,D=p*v,H=s.x,G=s.y,F=s.z;return l[0]=(1-(w+g))*H,l[1]=(y+D)*H,l[2]=(R-O)*H,l[3]=0,l[4]=(y-D)*G,l[5]=(1-(x+g))*G,l[6]=(M+P)*G,l[7]=0,l[8]=(R+O)*F,l[9]=(M-P)*F,l[10]=(1-(x+w))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=rr.set(l[0],l[1],l[2]).length();const h=rr.set(l[4],l[5],l[6]).length(),d=rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],gi.copy(this);const m=1/u,_=1/h,v=1/d;return gi.elements[0]*=m,gi.elements[1]*=m,gi.elements[2]*=m,gi.elements[4]*=_,gi.elements[5]*=_,gi.elements[6]*=_,gi.elements[8]*=v,gi.elements[9]*=v,gi.elements[10]*=v,i.setFromRotationMatrix(gi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=aa){const p=this.elements,m=2*u/(i-t),_=2*u/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let y,R;if(d===aa)y=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Tc)y=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=aa){const p=this.elements,m=1/(i-t),_=1/(s-l),v=1/(h-u),x=(i+t)*m,y=(s+l)*_;let R,w;if(d===aa)R=(h+u)*v,w=-2*v;else if(d===Tc)R=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=w,p[14]=-R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const rr=new nt,gi=new tn,jx=new nt(0,0,0),Zx=new nt(1,1,1),La=new nt,tc=new nt,jn=new nt,tg=new tn,eg=new Ms;class oa{constructor(t=0,i=0,s=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-pe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return tg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return eg.setFromEuler(this),this.setFromQuaternion(eg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class sv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kx=0;const ng=new nt,or=new Ms,$i=new tn,ec=new nt,Uo=new nt,Qx=new nt,Jx=new Ms,ig=new nt(1,0,0),ag=new nt(0,1,0),sg=new nt(0,0,1),rg={type:"added"},$x={type:"removed"},lr={type:"childadded",child:null},jf={type:"childremoved",child:null};class Qn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const t=new nt,i=new oa,s=new Ms,l=new nt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new le}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return or.setFromAxisAngle(t,i),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,i){return or.setFromAxisAngle(t,i),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(ig,t)}rotateY(t){return this.rotateOnAxis(ag,t)}rotateZ(t){return this.rotateOnAxis(sg,t)}translateOnAxis(t,i){return ng.copy(t).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ig,t)}translateY(t){return this.translateOnAxis(ag,t)}translateZ(t){return this.translateOnAxis(sg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ec.copy(t):ec.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Uo,ec,this.up):$i.lookAt(ec,Uo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),or.setFromRotationMatrix($i),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rg),lr.child=t,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($x),jf.child=t,this.dispatchEvent(jf),jf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rg),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,Qx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,Jx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),v=h(t.shapes),x=h(t.skeletons),y=h(t.animations),R=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),R.length>0&&(s.nodes=R)}return s.object=l,s;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Qn.DEFAULT_UP=new nt(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new nt,ta=new nt,Zf=new nt,ea=new nt,cr=new nt,ur=new nt,og=new nt,Kf=new nt,Qf=new nt,Jf=new nt,$f=new Ze,th=new Ze,eh=new Ze;class Si{constructor(t=new nt,i=new nt,s=new nt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),vi.subVectors(t,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){vi.subVectors(l,i),ta.subVectors(s,i),Zf.subVectors(t,i);const h=vi.dot(vi),d=vi.dot(ta),p=vi.dot(Zf),m=ta.dot(ta),_=ta.dot(Zf),v=h*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(m*p-d*_)*x,R=(h*_-d*p)*x;return u.set(1-y-R,R,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(t,i,s,l,u,h,d,p){return this.getBarycoord(t,i,s,l,ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ea.x),p.addScaledVector(h,ea.y),p.addScaledVector(d,ea.z),p)}static getInterpolatedAttribute(t,i,s,l,u,h){return $f.setScalar(0),th.setScalar(0),eh.setScalar(0),$f.fromBufferAttribute(t,i),th.fromBufferAttribute(t,s),eh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector($f,u.x),h.addScaledVector(th,u.y),h.addScaledVector(eh,u.z),h}static isFrontFacing(t,i,s,l){return vi.subVectors(s,i),ta.subVectors(t,i),vi.cross(ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),vi.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;cr.subVectors(l,s),ur.subVectors(u,s),Kf.subVectors(t,s);const p=cr.dot(Kf),m=ur.dot(Kf);if(p<=0&&m<=0)return i.copy(s);Qf.subVectors(t,l);const _=cr.dot(Qf),v=ur.dot(Qf);if(_>=0&&v<=_)return i.copy(l);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(cr,h);Jf.subVectors(t,u);const y=cr.dot(Jf),R=ur.dot(Jf);if(R>=0&&y<=R)return i.copy(u);const w=y*m-p*R;if(w<=0&&m>=0&&R<=0)return d=m/(m-R),i.copy(s).addScaledVector(ur,d);const M=_*R-y*v;if(M<=0&&v-_>=0&&y-R>=0)return og.subVectors(u,l),d=(v-_)/(v-_+(y-R)),i.copy(l).addScaledVector(og,d);const g=1/(M+w+x);return h=w*g,d=x*g,i.copy(s).addScaledVector(cr,h).addScaledVector(ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},nc={h:0,s:0,l:0};function nh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class De{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=ud(t,1),i=pe(i,0,1),s=pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=nh(h,u,t+1/3),this.g=nh(h,u,t),this.b=nh(h,u,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=ci){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const s=rv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Re.fromWorkingColorSpace(An.copy(this),t),Math.round(pe(An.r*255,0,255))*65536+Math.round(pe(An.g*255,0,255))*256+Math.round(pe(An.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(An.copy(this),i);const s=An.r,l=An.g,u=An.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=_<=.5?v/(h+d):v/(2-h-d),h){case s:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-s)/v+2;break;case u:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(An.copy(this),i),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=ci){Re.fromWorkingColorSpace(An.copy(this),t);const i=An.r,s=An.g,l=An.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Na),this.setHSL(Na.h+t,Na.s+i,Na.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Na),t.getHSL(nc);const s=Po(Na.h,nc.h,i),l=Po(Na.s,nc.s,i),u=Po(Na.l,nc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new De;De.NAMES=rv;let tM=0;class Rc extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=xr,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=_h,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(s.blending=this.blending),this.side!==Ia&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==mh&&(s.blendSrc=this.blendSrc),this.blendDst!==_h&&(s.blendDst=this.blendDst),this.blendEquation!==ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bc extends Rc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new nt,ic=new de;let eM=0;class Ui{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=q_,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ic.fromBufferAttribute(this,i),ic.applyMatrix3(t),this.setXY(i,ic.x,ic.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix3(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix4(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.applyNormalMatrix(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.transformDirection(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=mr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Nn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=mr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=mr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=mr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=mr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array),u=Nn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==q_&&(t.usage=this.usage),t}}class ov extends Ui{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class lv extends Ui{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Li extends Ui{constructor(t,i,s){super(new Float32Array(t),i,s)}}let nM=0;const li=new tn,ih=new Qn,fr=new nt,Zn=new Ho,Lo=new Ho,_n=new nt;class Ha extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nv(t)?lv:ov)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,s){return li.makeTranslation(t,i,s),this.applyMatrix4(li),this}scale(t,i,s){return li.makeScale(t,i,s),this.applyMatrix4(li),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Li(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Zn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const s=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Zn.min,Lo.min),Zn.expandByPoint(_n),_n.addVectors(Zn.max,Lo.max),Zn.expandByPoint(_n)):(Zn.expandByPoint(Lo.min),Zn.expandByPoint(Lo.max))}Zn.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)_n.fromBufferAttribute(d,m),p&&(fr.fromBufferAttribute(t,m),_n.add(fr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<s.count;K++)d[K]=new nt,p[K]=new nt;const m=new nt,_=new nt,v=new nt,x=new de,y=new de,R=new de,w=new nt,M=new nt;function g(K,C,A){m.fromBufferAttribute(s,K),_.fromBufferAttribute(s,C),v.fromBufferAttribute(s,A),x.fromBufferAttribute(u,K),y.fromBufferAttribute(u,C),R.fromBufferAttribute(u,A),_.sub(m),v.sub(m),y.sub(x),R.sub(x);const I=1/(y.x*R.y-R.x*y.y);isFinite(I)&&(w.copy(_).multiplyScalar(R.y).addScaledVector(v,-y.y).multiplyScalar(I),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-R.x).multiplyScalar(I),d[K].add(w),d[C].add(w),d[A].add(w),p[K].add(M),p[C].add(M),p[A].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let K=0,C=P.length;K<C;++K){const A=P[K],I=A.start,lt=A.count;for(let st=I,pt=I+lt;st<pt;st+=3)g(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const O=new nt,D=new nt,H=new nt,G=new nt;function F(K){H.fromBufferAttribute(l,K),G.copy(H);const C=d[K];O.copy(C),O.sub(H.multiplyScalar(H.dot(C))).normalize(),D.crossVectors(G,C);const I=D.dot(p[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,I)}for(let K=0,C=P.length;K<C;++K){const A=P[K],I=A.start,lt=A.count;for(let st=I,pt=I+lt;st<pt;st+=3)F(t.getX(st+0)),F(t.getX(st+1)),F(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,p=new nt,m=new nt,_=new nt,v=new nt;if(t)for(let x=0,y=t.count;x<y;x+=3){const R=t.getX(x+0),w=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),d.add(_),p.add(_),m.add(_),s.setXYZ(R,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let y=0,R=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*_;for(let g=0;g<_;g++)x[R++]=m[y++]}return new Ui(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ha,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],y=t(x,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];_.push(y.toJSON(t.data))}_.length>0&&(l[p]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,y=v.length;x<y;x++)_.push(v[x].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lg=new tn,cs=new av,ac=new hd,cg=new nt,sc=new nt,rc=new nt,oc=new nt,ah=new nt,lc=new nt,ug=new nt,cc=new nt;class Kn extends Qn{constructor(t=new Ha,i=new bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){lc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&(ah.fromBufferAttribute(v,t),h?lc.addScaledVector(ah,_):lc.addScaledVector(ah.sub(i),_))}i.add(lc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ac.copy(s.boundingSphere),ac.applyMatrix4(u),cs.copy(t.ray).recast(t.near),!(ac.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ac,cg)===null||cs.origin.distanceToSquared(cg)>(t.far-t.near)**2))&&(lg.copy(u).invert(),cs.copy(t.ray).applyMatrix4(lg),!(s.boundingBox!==null&&cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,cs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=x.length;R<w;R++){const M=x[R],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const G=d.getX(D),F=d.getX(D+1),K=d.getX(D+2);l=uc(this,g,t,s,m,_,v,G,F,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=uc(this,h,t,s,m,_,v,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let R=0,w=x.length;R<w;R++){const M=x[R],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const G=D,F=D+1,K=D+2;l=uc(this,g,t,s,m,_,v,G,F,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=M,O=M+1,D=M+2;l=uc(this,h,t,s,m,_,v,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function iM(r,t,i,s,l,u,h,d){let p;if(t.side===Pn?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,t.side===Ia,d),p===null)return null;cc.copy(d),cc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(cc);return m<i.near||m>i.far?null:{distance:m,point:cc.clone(),object:r}}function uc(r,t,i,s,l,u,h,d,p,m){r.getVertexPosition(d,sc),r.getVertexPosition(p,rc),r.getVertexPosition(m,oc);const _=iM(r,t,i,s,sc,rc,oc,ug);if(_){const v=new nt;Si.getBarycoord(ug,sc,rc,oc,v),l&&(_.uv=Si.getInterpolatedAttribute(l,d,p,m,v,new de)),u&&(_.uv1=Si.getInterpolatedAttribute(u,d,p,m,v,new de)),h&&(_.normal=Si.getInterpolatedAttribute(h,d,p,m,v,new nt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new nt,materialIndex:0};Si.getNormal(sc,rc,oc,x.normal),_.face=x,_.barycoord=v}return _}class Go extends Ha{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],_=[],v=[];let x=0,y=0;R("z","y","x",-1,-1,s,i,t,h,u,0),R("z","y","x",1,-1,s,i,-t,h,u,1),R("x","z","y",1,1,t,s,i,l,h,2),R("x","z","y",1,-1,t,s,-i,l,h,3),R("x","y","z",1,-1,t,i,s,l,u,4),R("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Li(m,3)),this.setAttribute("normal",new Li(_,3)),this.setAttribute("uv",new Li(v,2));function R(w,M,g,P,O,D,H,G,F,K,C){const A=D/F,I=H/K,lt=D/2,st=H/2,pt=G/2,ft=F+1,z=K+1;let at=0,q=0;const xt=new nt;for(let L=0;L<z;L++){const tt=L*I-st;for(let Mt=0;Mt<ft;Mt++){const bt=Mt*A-lt;xt[w]=bt*P,xt[M]=tt*O,xt[g]=pt,m.push(xt.x,xt.y,xt.z),xt[w]=0,xt[M]=0,xt[g]=G>0?1:-1,_.push(xt.x,xt.y,xt.z),v.push(Mt/F),v.push(1-L/K),at+=1}}for(let L=0;L<K;L++)for(let tt=0;tt<F;tt++){const Mt=x+tt+ft*L,bt=x+tt+ft*(L+1),W=x+(tt+1)+ft*(L+1),ht=x+(tt+1)+ft*L;p.push(Mt,bt,ht),p.push(bt,W,ht),q+=6}d.addGroup(y,q,C),y+=q,x+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function On(r){const t={};for(let i=0;i<r.length;i++){const s=wr(r[i]);for(const l in s)t[l]=s[l]}return t}function aM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function cv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const sM={clone:wr,merge:On};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Rc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=aM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class uv extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=aa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new nt,fg=new de,hg=new de;class ui extends uv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Bo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,i){return this.getViewBounds(t,fg,hg),i.subVectors(hg,fg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Oo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hr=-90,dr=1;class lM extends Qn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(hr,dr,t,i);l.layers=this.layers,this.add(l);const u=new ui(hr,dr,t,i);u.layers=this.layers,this.add(u);const h=new ui(hr,dr,t,i);h.layers=this.layers,this.add(h);const d=new ui(hr,dr,t,i);d.layers=this.layers,this.add(d);const p=new ui(hr,dr,t,i);p.layers=this.layers,this.add(p);const m=new ui(hr,dr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Tc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,x,y),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class fv extends zn{constructor(t,i,s,l,u,h,d,p,m,_){t=t!==void 0?t:[],i=i!==void 0?i:Tr,super(t,i,s,l,u,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cM extends xs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new fv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Go(5,5,5),u=new Ni({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Pn,blending:Ba});u.uniforms.tEquirect.value=i;const h=new Kn(l,u),d=i.minFilter;return i.minFilter===vs&&(i.minFilter=Di),new lM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class fc extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),g=this._getHandJoint(m,w);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),y=.02,R=.005;m.inputState.pinching&&x>y+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=y-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class fM extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const rh=new nt,hM=new nt,dM=new le;class Pa{constructor(t=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=rh.subVectors(s,i).cross(hM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(rh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||dM.getNormalMatrix(t),l=this.coplanarPoint(rh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new hd,hc=new nt;class hv{constructor(t=new Pa,i=new Pa,s=new Pa,l=new Pa,u=new Pa,h=new Pa){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=aa){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],v=l[6],x=l[7],y=l[8],R=l[9],w=l[10],M=l[11],g=l[12],P=l[13],O=l[14],D=l[15];if(s[0].setComponents(p-u,x-m,M-y,D-g).normalize(),s[1].setComponents(p+u,x+m,M+y,D+g).normalize(),s[2].setComponents(p+h,x+_,M+R,D+P).normalize(),s[3].setComponents(p-h,x-_,M-R,D-P).normalize(),s[4].setComponents(p-d,x-v,M-w,D-O).normalize(),i===aa)s[5].setComponents(p+d,x+v,M+w,D+O).normalize();else if(i===Tc)s[5].setComponents(d,v,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(hc.x=l.normal.x>0?t.max.x:t.min.x,hc.y=l.normal.y>0?t.max.y:t.min.y,hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dv extends zn{constructor(t,i,s,l,u,h,d,p,m,_=Mr){if(_!==Mr&&_!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Mr&&(s=Ss),s===void 0&&_===Rr&&(s=Ar),super(null,l,u,h,d,p,_,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Mi,this.minFilter=p!==void 0?p:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Cc extends Ha{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,v=t/d,x=i/p,y=[],R=[],w=[],M=[];for(let g=0;g<_;g++){const P=g*x-h;for(let O=0;O<m;O++){const D=O*v-u;R.push(D,-P,0),w.push(0,0,1),M.push(O/d),M.push(1-g/p)}}for(let g=0;g<p;g++)for(let P=0;P<d;P++){const O=P+m*g,D=P+m*(g+1),H=P+1+m*(g+1),G=P+1+m*g;y.push(O,D,G),y.push(D,H,G)}this.setIndex(y),this.setAttribute("position",new Li(R,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.width,t.height,t.widthSegments,t.heightSegments)}}class gr extends Ha{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const _=[],v=new nt,x=new nt,y=[],R=[],w=[],M=[];for(let g=0;g<=s;g++){const P=[],O=g/s;let D=0;g===0&&h===0?D=.5/i:g===s&&p===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const G=H/i;v.x=-t*Math.cos(l+G*u)*Math.sin(h+O*d),v.y=t*Math.cos(h+O*d),v.z=t*Math.sin(l+G*u)*Math.sin(h+O*d),R.push(v.x,v.y,v.z),x.copy(v).normalize(),w.push(x.x,x.y,x.z),M.push(G+D,1-O),P.push(m++)}_.push(P)}for(let g=0;g<s;g++)for(let P=0;P<i;P++){const O=_[g][P+1],D=_[g][P],H=_[g+1][P],G=_[g+1][P+1];(g!==0||h>0)&&y.push(O,D,G),(g!==s-1||p<Math.PI)&&y.push(D,H,G)}this.setIndex(y),this.setAttribute("position",new Li(R,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pM extends Rc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mM extends Rc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dg={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class _M{constructor(t,i,s){const l=this;let u=!1,h=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(_){d++,u===!1&&l.onStart!==void 0&&l.onStart(_,h,d),u=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return m.push(_,v),this},this.removeHandler=function(_){const v=m.indexOf(_);return v!==-1&&m.splice(v,2),this},this.getHandler=function(_){for(let v=0,x=m.length;v<x;v+=2){const y=m[v],R=m[v+1];if(y.global&&(y.lastIndex=0),y.test(_))return R}return null}}}const gM=new _M;class dd{constructor(t){this.manager=t!==void 0?t:gM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}dd.DEFAULT_MATERIAL_NAME="__DEFAULT";class vM extends dd{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=dg.get(t);if(h!==void 0)return u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0),h;const d=Fo("img");function p(){_(),dg.add(t,this),i&&i(this),u.manager.itemEnd(t)}function m(v){_(),l&&l(v),u.manager.itemError(t),u.manager.itemEnd(t)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(t),d.src=t,d}}class SM extends dd{constructor(t){super(t)}load(t,i,s,l){const u=new zn,h=new vM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class xM extends uv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class MM extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class pg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yM extends ys{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function mg(r,t,i,s){const l=EM(s);switch(i){case jg:return r*t;case Kg:return r*t;case Qg:return r*t*2;case Jg:return r*t/l.components*l.byteLength;case od:return r*t/l.components*l.byteLength;case $g:return r*t*2/l.components*l.byteLength;case ld:return r*t*2/l.components*l.byteLength;case Zg:return r*t*3/l.components*l.byteLength;case xi:return r*t*4/l.components*l.byteLength;case cd:return r*t*4/l.components*l.byteLength;case gc:case vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Sc:case xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wh:case Uh:return Math.max(r,16)*Math.max(t,8)/4;case Ch:case Dh:return Math.max(r,8)*Math.max(t,8)/2;case Lh:case Nh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Oh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case kh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case jh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Mc:case Zh:case Kh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case tv:case Qh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Jh:case $h:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function EM(r){switch(r){case ra:case Wg:return{byteLength:1,components:1};case zo:case Yg:case Io:return{byteLength:2,components:1};case sd:case rd:return{byteLength:2,components:4};case Ss:case ad:case ia:return{byteLength:4,components:1};case qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pv(){let r=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function TM(r){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const _=p.array,v=p.updateRanges;if(r.bindBuffer(m,d),v.length===0)r.bufferSubData(m,0,_);else{v.sort((y,R)=>y.start-R.start);let x=0;for(let y=1;y<v.length;y++){const R=v[x],w=v[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++x,v[x]=w)}v.length=x+1;for(let y=0,R=v.length;y<R;y++){const w=v[y];r.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
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
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
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
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
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
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FM=`#ifdef USE_IRIDESCENCE
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
#endif`,IM=`#ifdef USE_BUMPMAP
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
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jM=`#define PI 3.141592653589793
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
} // validated`,ZM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KM=`vec3 transformedNormal = objectNormal;
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
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
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
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_y=`uniform bool receiveShadow;
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
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
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
#endif`,Ey=`struct PhysicalMaterial {
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
}`,Ty=`
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
#endif`,by=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Oy=`#if defined( USE_POINTS_UV )
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
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,By=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`#ifdef USE_MORPHTARGETS
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
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
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
#endif`,jy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cE=`float getShadowMask() {
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
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vE=`#ifdef USE_TRANSMISSION
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
#endif`,SE=`#ifdef USE_TRANSMISSION
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
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
}`,UE=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LE=`#define DISTANCE
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
}`,NE=`#define DISTANCE
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
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
}`,BE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,IE=`uniform vec3 diffuse;
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
}`,HE=`#define LAMBERT
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
}`,GE=`#define LAMBERT
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
}`,VE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,XE=`#define NORMAL
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
}`,WE=`#define NORMAL
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
}`,YE=`#define PHONG
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
}`,qE=`#define PHONG
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
}`,jE=`#define STANDARD
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
}`,ZE=`#define STANDARD
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
}`,KE=`#define TOON
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
}`,QE=`#define TOON
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
}`,JE=`uniform float size;
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
}`,$E=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,eT=`uniform vec3 color;
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
}`,nT=`uniform float rotation;
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
}`,iT=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:bM,alphahash_pars_fragment:AM,alphamap_fragment:RM,alphamap_pars_fragment:CM,alphatest_fragment:wM,alphatest_pars_fragment:DM,aomap_fragment:UM,aomap_pars_fragment:LM,batching_pars_vertex:NM,batching_vertex:OM,begin_vertex:PM,beginnormal_vertex:zM,bsdfs:BM,iridescence_fragment:FM,bumpmap_pars_fragment:IM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:kM,color_fragment:XM,color_pars_fragment:WM,color_pars_vertex:YM,color_vertex:qM,common:jM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:KM,displacementmap_pars_vertex:QM,displacementmap_vertex:JM,emissivemap_fragment:$M,emissivemap_pars_fragment:ty,colorspace_fragment:ey,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:ay,envmap_pars_fragment:sy,envmap_pars_vertex:ry,envmap_physical_pars_fragment:gy,envmap_vertex:oy,fog_vertex:ly,fog_pars_vertex:cy,fog_fragment:uy,fog_pars_fragment:fy,gradientmap_pars_fragment:hy,lightmap_pars_fragment:dy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:_y,lights_toon_fragment:vy,lights_toon_pars_fragment:Sy,lights_phong_fragment:xy,lights_phong_pars_fragment:My,lights_physical_fragment:yy,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:by,lights_fragment_end:Ay,logdepthbuf_fragment:Ry,logdepthbuf_pars_fragment:Cy,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Dy,map_fragment:Uy,map_pars_fragment:Ly,map_particle_fragment:Ny,map_particle_pars_fragment:Oy,metalnessmap_fragment:Py,metalnessmap_pars_fragment:zy,morphinstance_vertex:By,morphcolor_vertex:Fy,morphnormal_vertex:Iy,morphtarget_pars_vertex:Hy,morphtarget_vertex:Gy,normal_fragment_begin:Vy,normal_fragment_maps:ky,normal_pars_fragment:Xy,normal_pars_vertex:Wy,normal_vertex:Yy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:jy,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Qy,opaque_fragment:Jy,packing:$y,premultiplied_alpha_fragment:tE,project_vertex:eE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:sE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:hE,skinnormal_vertex:dE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:_E,tonemapping_pars_fragment:gE,transmission_fragment:vE,transmission_pars_fragment:SE,uv_pars_fragment:xE,uv_pars_vertex:ME,uv_vertex:yE,worldpos_vertex:EE,background_vert:TE,background_frag:bE,backgroundCube_vert:AE,backgroundCube_frag:RE,cube_vert:CE,cube_frag:wE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:LE,distanceRGBA_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:zE,linedashed_frag:BE,meshbasic_vert:FE,meshbasic_frag:IE,meshlambert_vert:HE,meshlambert_frag:GE,meshmatcap_vert:VE,meshmatcap_frag:kE,meshnormal_vert:XE,meshnormal_frag:WE,meshphong_vert:YE,meshphong_frag:qE,meshphysical_vert:jE,meshphysical_frag:ZE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:tT,shadow_frag:eT,sprite_vert:nT,sprite_frag:iT},Lt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ci={basic:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new De(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:On([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:On([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new De(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:On([Lt.points,Lt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:On([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:On([Lt.common,Lt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:On([Lt.sprite,Lt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:On([Lt.common,Lt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:On([Lt.lights,Lt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ci.physical={uniforms:On([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const dc={r:0,b:0,g:0},fs=new oa,aT=new tn;function sT(r,t,i,s,l,u,h){const d=new De(0);let p=u===!0?0:1,m,_,v=null,x=0,y=null;function R(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const H=R(O);H===null?g(d,p):H&&H.isColor&&(g(H,1),D=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(O,D){const H=R(D);H&&(H.isCubeTexture||H.mapping===Ac)?(_===void 0&&(_=new Kn(new Go(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:wr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),fs.copy(D.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(fs)),_.material.toneMapped=Re.getTransfer(H.colorSpace)!==Pe,(v!==H||x!==H.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,v=H,x=H.version,y=r.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Kn(new Cc(2,2),new Ni({name:"BackgroundMaterial",uniforms:wr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Re.getTransfer(H.colorSpace)!==Pe,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,v=H,x=H.version,y=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function g(O,D){O.getRGB(dc,cv(r)),s.buffers.color.setClear(dc.r,dc.g,dc.b,D,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,g(d,p)},render:w,addToRenderList:M,dispose:P}}function rT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(A,I,lt,st,pt){let ft=!1;const z=v(st,lt,I);u!==z&&(u=z,m(u.object)),ft=y(A,st,lt,pt),ft&&R(A,st,lt,pt),pt!==null&&t.update(pt,r.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(A,I,lt,st),pt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function p(){return r.createVertexArray()}function m(A){return r.bindVertexArray(A)}function _(A){return r.deleteVertexArray(A)}function v(A,I,lt){const st=lt.wireframe===!0;let pt=s[A.id];pt===void 0&&(pt={},s[A.id]=pt);let ft=pt[I.id];ft===void 0&&(ft={},pt[I.id]=ft);let z=ft[st];return z===void 0&&(z=x(p()),ft[st]=z),z}function x(A){const I=[],lt=[],st=[];for(let pt=0;pt<i;pt++)I[pt]=0,lt[pt]=0,st[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:lt,attributeDivisors:st,object:A,attributes:{},index:null}}function y(A,I,lt,st){const pt=u.attributes,ft=I.attributes;let z=0;const at=lt.getAttributes();for(const q in at)if(at[q].location>=0){const L=pt[q];let tt=ft[q];if(tt===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(tt=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(tt=A.instanceColor)),L===void 0||L.attribute!==tt||tt&&L.data!==tt.data)return!0;z++}return u.attributesNum!==z||u.index!==st}function R(A,I,lt,st){const pt={},ft=I.attributes;let z=0;const at=lt.getAttributes();for(const q in at)if(at[q].location>=0){let L=ft[q];L===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const tt={};tt.attribute=L,L&&L.data&&(tt.data=L.data),pt[q]=tt,z++}u.attributes=pt,u.attributesNum=z,u.index=st}function w(){const A=u.newAttributes;for(let I=0,lt=A.length;I<lt;I++)A[I]=0}function M(A){g(A,0)}function g(A,I){const lt=u.newAttributes,st=u.enabledAttributes,pt=u.attributeDivisors;lt[A]=1,st[A]===0&&(r.enableVertexAttribArray(A),st[A]=1),pt[A]!==I&&(r.vertexAttribDivisor(A,I),pt[A]=I)}function P(){const A=u.newAttributes,I=u.enabledAttributes;for(let lt=0,st=I.length;lt<st;lt++)I[lt]!==A[lt]&&(r.disableVertexAttribArray(lt),I[lt]=0)}function O(A,I,lt,st,pt,ft,z){z===!0?r.vertexAttribIPointer(A,I,lt,pt,ft):r.vertexAttribPointer(A,I,lt,st,pt,ft)}function D(A,I,lt,st){w();const pt=st.attributes,ft=lt.getAttributes(),z=I.defaultAttributeValues;for(const at in ft){const q=ft[at];if(q.location>=0){let xt=pt[at];if(xt===void 0&&(at==="instanceMatrix"&&A.instanceMatrix&&(xt=A.instanceMatrix),at==="instanceColor"&&A.instanceColor&&(xt=A.instanceColor)),xt!==void 0){const L=xt.normalized,tt=xt.itemSize,Mt=t.get(xt);if(Mt===void 0)continue;const bt=Mt.buffer,W=Mt.type,ht=Mt.bytesPerElement,vt=W===r.INT||W===r.UNSIGNED_INT||xt.gpuType===ad;if(xt.isInterleavedBufferAttribute){const Et=xt.data,At=Et.stride,Yt=xt.offset;if(Et.isInstancedInterleavedBuffer){for(let Dt=0;Dt<q.locationSize;Dt++)g(q.location+Dt,Et.meshPerAttribute);A.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Dt=0;Dt<q.locationSize;Dt++)M(q.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let Dt=0;Dt<q.locationSize;Dt++)O(q.location+Dt,tt/q.locationSize,W,L,At*ht,(Yt+tt/q.locationSize*Dt)*ht,vt)}else{if(xt.isInstancedBufferAttribute){for(let Et=0;Et<q.locationSize;Et++)g(q.location+Et,xt.meshPerAttribute);A.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Et=0;Et<q.locationSize;Et++)M(q.location+Et);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let Et=0;Et<q.locationSize;Et++)O(q.location+Et,tt/q.locationSize,W,L,tt*ht,tt/q.locationSize*Et*ht,vt)}}else if(z!==void 0){const L=z[at];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(q.location,L);break;case 3:r.vertexAttrib3fv(q.location,L);break;case 4:r.vertexAttrib4fv(q.location,L);break;default:r.vertexAttrib1fv(q.location,L)}}}}P()}function H(){K();for(const A in s){const I=s[A];for(const lt in I){const st=I[lt];for(const pt in st)_(st[pt].object),delete st[pt];delete I[lt]}delete s[A]}}function G(A){if(s[A.id]===void 0)return;const I=s[A.id];for(const lt in I){const st=I[lt];for(const pt in st)_(st[pt].object),delete st[pt];delete I[lt]}delete s[A.id]}function F(A){for(const I in s){const lt=s[I];if(lt[A.id]===void 0)continue;const st=lt[A.id];for(const pt in st)_(st[pt].object),delete st[pt];delete lt[A.id]}}function K(){C(),h=!0,u!==l&&(u=l,m(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function oT(r,t,i){let s;function l(m){s=m}function u(m,_){r.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,v){v!==0&&(r.drawArraysInstanced(s,m,_,v),i.update(_,s,v))}function d(m,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,v);let y=0;for(let R=0;R<v;R++)y+=_[R];i.update(y,s,1)}function p(m,_,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let R=0;R<m.length;R++)h(m[R],_[R],x[R]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,_,0,x,0,v);let R=0;for(let w=0;w<v;w++)R+=_[w]*x[w];i.update(R,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function lT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==xi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const K=F===Io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ra&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ia&&!K)}function p(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=R>0,G=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:H,maxSamples:G}}function cT(r){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Pa,d=new le,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||s!==0||l;return l=x,s=v.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,y){const R=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,g=r.get(v);if(!l||R===null||R.length===0||u&&!M)u?_(null):m();else{const P=u?0:s,O=P*4;let D=g.clippingState||null;p.value=D,D=_(R,x,O,y);for(let H=0;H!==O;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,x,y,R){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=p.value,R!==!0||M===null){const g=y+w*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<g)&&(M=new Float32Array(g));for(let O=0,D=y;O!==w;++O,D+=4)h.copy(v[O]).applyMatrix4(P,d),h.normal.toArray(M,D),M[D+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}function uT(r){let t=new WeakMap;function i(h,d){return d===Th?h.mapping=Tr:d===bh&&(h.mapping=br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Th||d===bh)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new cM(p.height);return m.fromEquirectangularTexture(r,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const vr=4,_g=[.125,.215,.35,.446,.526,.582],_s=20,oh=new xM,gg=new De;let lh=null,ch=0,uh=0,fh=!1;const ps=(1+Math.sqrt(5))/2,pr=1/ps,vg=[new nt(-ps,pr,0),new nt(ps,pr,0),new nt(-pr,0,ps),new nt(pr,0,ps),new nt(0,ps,-pr),new nt(0,ps,pr),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],fT=new nt;class Sg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=fT}=u;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=fh,t.scissorTest=!1,pc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Tr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Io,format:xi,colorSpace:Cr,depthBuffer:!1},l=xg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xg(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(u)),this._blurMaterial=dT(u,t,i)}return l}_compileMaterial(t){const i=new Kn(this._lodPlanes[0],t);this._renderer.compile(i,oh)}_sceneToCubeUV(t,i,s,l,u){const p=new ui(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(gg),v.toneMapping=Fa,v.autoClear=!1;const R=new bc({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),w=new Kn(new Go,R);let M=!1;const g=t.background;g?g.isColor&&(R.color.copy(g),t.background=null,M=!0):(R.color.copy(gg),M=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[P],u.y,u.z)):O===1?(p.up.set(0,0,m[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[P],u.z)):(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[P]));const D=this._cubeSize;pc(l,O*D,P>2?D:0,D,D),v.setRenderTarget(l),M&&v.render(w,p),v.render(t,p)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Tr||t.mapping===br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Kn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;pc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,oh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=vg[(l-u-1)%vg.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Kn(this._lodPlanes[l],m),x=m.uniforms,y=this._sizeLods[s]-1,R=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*_s-1),w=u/R,M=isFinite(u)?1+Math.floor(_*w):_s;M>_s&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${_s}`);const g=[];let P=0;for(let F=0;F<_s;++F){const K=F/w,C=Math.exp(-K*K/2);g.push(C),F===0?P+=C:F<M&&(P+=2*C)}for(let F=0;F<g.length;F++)g[F]=g[F]/P;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=R,x.mipInt.value=O-s;const D=this._sizeLods[l],H=3*D*(l>O-vr?l-O+vr:0),G=4*(this._cubeSize-D);pc(i,H,G,3*D,2*D),p.setRenderTarget(i),p.render(v,oh)}}function hT(r){const t=[],i=[],s=[];let l=r;const u=r-vr+1+_g.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-vr?p=_g[h-r+vr-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,R=6,w=3,M=2,g=1,P=new Float32Array(w*R*y),O=new Float32Array(M*R*y),D=new Float32Array(g*R*y);for(let G=0;G<y;G++){const F=G%3*2/3-1,K=G>2?0:-1,C=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];P.set(C,w*R*G),O.set(x,M*R*G);const A=[G,G,G,G,G,G];D.set(A,g*R*G)}const H=new Ha;H.setAttribute("position",new Ui(P,w)),H.setAttribute("uv",new Ui(O,M)),H.setAttribute("faceIndex",new Ui(D,g)),t.push(H),l>vr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function xg(r,t,i){const s=new xs(r,t,i);return s.texture.mapping=Ac,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function pc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function dT(r,t,i){const s=new Float32Array(_s),l=new nt(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Mg(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function yg(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function pd(){return`

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
	`}function pT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Th||p===bh,_=p===Tr||p===br;if(m||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Sg(r)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Sg(r)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function mT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ds("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function _T(r,t,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const R in x.attributes)t.remove(x.attributes[R]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(t.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function m(v){const x=[],y=v.index,R=v.attributes.position;let w=0;if(y!==null){const P=y.array;w=y.version;for(let O=0,D=P.length;O<D;O+=3){const H=P[O+0],G=P[O+1],F=P[O+2];x.push(H,G,G,F,F,H)}}else if(R!==void 0){const P=R.array;w=R.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const H=O+0,G=O+1,F=O+2;x.push(H,G,G,F,F,H)}}else return;const M=new(nv(x)?lv:ov)(x,1);M.version=w;const g=u.get(v);g&&t.remove(g),u.set(v,M)}function _(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function gT(r,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function p(x,y){r.drawElements(s,y,u,x*h),i.update(y,s,1)}function m(x,y,R){R!==0&&(r.drawElementsInstanced(s,y,u,x*h,R),i.update(y,s,R))}function _(x,y,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,R);let M=0;for(let g=0;g<R;g++)M+=y[g];i.update(M,s,1)}function v(x,y,R,w){if(R===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<x.length;g++)m(x[g]/h,y[g],w[g]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,w,0,R);let g=0;for(let P=0;P<R;P++)g+=y[P]*w[P];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function vT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ST(r,t,i){const s=new WeakMap,l=new Ze;function u(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let A=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const R=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;R===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let H=d.attributes.position.count*D,G=1;H>t.maxTextureSize&&(G=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const F=new Float32Array(H*G*4*v),K=new iv(F,H,G,v);K.type=ia,K.needsUpdate=!0;const C=D*4;for(let I=0;I<v;I++){const lt=g[I],st=P[I],pt=O[I],ft=H*G*4*I;for(let z=0;z<lt.count;z++){const at=z*C;R===!0&&(l.fromBufferAttribute(lt,z),F[ft+at+0]=l.x,F[ft+at+1]=l.y,F[ft+at+2]=l.z,F[ft+at+3]=0),w===!0&&(l.fromBufferAttribute(st,z),F[ft+at+4]=l.x,F[ft+at+5]=l.y,F[ft+at+6]=l.z,F[ft+at+7]=0),M===!0&&(l.fromBufferAttribute(pt,z),F[ft+at+8]=l.x,F[ft+at+9]=l.y,F[ft+at+10]=l.z,F[ft+at+11]=pt.itemSize===4?l.w:1)}}x={count:v,texture:K,size:new de(H,G)},s.set(d,x),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const w=d.morphTargetsRelative?1:1-R;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:u}}function xT(r,t,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,_=p.geometry,v=t.get(p,_);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const mv=new zn,Eg=new dv(1,1),_v=new iv,gv=new Yx,vv=new fv,Tg=[],bg=[],Ag=new Float32Array(16),Rg=new Float32Array(9),Cg=new Float32Array(4);function Ur(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=Tg[l];if(u===void 0&&(u=new Float32Array(l),Tg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(u,d)}return u}function un(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function fn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function wc(r,t){let i=bg[t];i===void 0&&(i=new Int32Array(t),bg[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function MT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function yT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2fv(this.addr,t),fn(i,t)}}function ET(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;r.uniform3fv(this.addr,t),fn(i,t)}}function TT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4fv(this.addr,t),fn(i,t)}}function bT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Cg.set(s),r.uniformMatrix2fv(this.addr,!1,Cg),fn(i,s)}}function AT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Rg.set(s),r.uniformMatrix3fv(this.addr,!1,Rg),fn(i,s)}}function RT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Ag.set(s),r.uniformMatrix4fv(this.addr,!1,Ag),fn(i,s)}}function CT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function wT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2iv(this.addr,t),fn(i,t)}}function DT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3iv(this.addr,t),fn(i,t)}}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4iv(this.addr,t),fn(i,t)}}function LT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function NT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2uiv(this.addr,t),fn(i,t)}}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3uiv(this.addr,t),fn(i,t)}}function PT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4uiv(this.addr,t),fn(i,t)}}function zT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Eg.compareFunction=ev,u=Eg):u=mv,i.setTexture2D(t||u,l)}function BT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||gv,l)}function FT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||vv,l)}function IT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||_v,l)}function HT(r){switch(r){case 5126:return MT;case 35664:return yT;case 35665:return ET;case 35666:return TT;case 35674:return bT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return wT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return LT;case 36294:return NT;case 36295:return OT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return IT}}function GT(r,t){r.uniform1fv(this.addr,t)}function VT(r,t){const i=Ur(t,this.size,2);r.uniform2fv(this.addr,i)}function kT(r,t){const i=Ur(t,this.size,3);r.uniform3fv(this.addr,i)}function XT(r,t){const i=Ur(t,this.size,4);r.uniform4fv(this.addr,i)}function WT(r,t){const i=Ur(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function YT(r,t){const i=Ur(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function qT(r,t){const i=Ur(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function jT(r,t){r.uniform1iv(this.addr,t)}function ZT(r,t){r.uniform2iv(this.addr,t)}function KT(r,t){r.uniform3iv(this.addr,t)}function QT(r,t){r.uniform4iv(this.addr,t)}function JT(r,t){r.uniform1uiv(this.addr,t)}function $T(r,t){r.uniform2uiv(this.addr,t)}function tb(r,t){r.uniform3uiv(this.addr,t)}function eb(r,t){r.uniform4uiv(this.addr,t)}function nb(r,t,i){const s=this.cache,l=t.length,u=wc(i,l);un(s,u)||(r.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||mv,u[h])}function ib(r,t,i){const s=this.cache,l=t.length,u=wc(i,l);un(s,u)||(r.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||gv,u[h])}function ab(r,t,i){const s=this.cache,l=t.length,u=wc(i,l);un(s,u)||(r.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||vv,u[h])}function sb(r,t,i){const s=this.cache,l=t.length,u=wc(i,l);un(s,u)||(r.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||_v,u[h])}function rb(r){switch(r){case 5126:return GT;case 35664:return VT;case 35665:return kT;case 35666:return XT;case 35674:return WT;case 35675:return YT;case 35676:return qT;case 5124:case 35670:return jT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return tb;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return sb}}class ob{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=HT(i.type)}}class lb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rb(i.type)}}class cb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function wg(r,t){r.seq.push(t),r.map[t.id]=t}function ub(r,t,i){const s=r.name,l=s.length;for(hh.lastIndex=0;;){const u=hh.exec(s),h=hh.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){wg(i,m===void 0?new ob(d,r,t):new lb(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new cb(d),wg(i,v)),i=v}}}class yc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);ub(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Dg(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const fb=37297;let hb=0;function db(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Ug=new le;function pb(r){Re._getMatrix(Ug,Re.workingColorSpace,r);const t=`mat3( ${Ug.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case Ec:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Lg(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+db(r.getShaderSource(t),h)}else return l}function mb(r,t){const i=pb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function _b(r,t){let i;switch(t){case nx:i="Linear";break;case ix:i="Reinhard";break;case ax:i="Cineon";break;case sx:i="ACESFilmic";break;case ox:i="AgX";break;case lx:i="Neutral";break;case rx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new nt;function gb(){Re.getLuminanceCoefficients(mc);const r=mc.x.toFixed(4),t=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function Sb(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function xb(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function No(r){return r!==""}function Ng(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Og(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(r){return r.replace(Mb,Eb)}const yb=new Map;function Eb(r,t){let i=ue[t];if(i===void 0){const s=yb.get(t);if(s!==void 0)i=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ed(i)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(r){return r.replace(Tb,bb)}function bb(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function zg(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ab(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vg?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===PS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===na&&(t="SHADOWMAP_TYPE_VSM"),t}function Rb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Tr:case br:t="ENVMAP_TYPE_CUBE";break;case Ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function wb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kg:t="ENVMAP_BLENDING_MULTIPLY";break;case tx:t="ENVMAP_BLENDING_MIX";break;case ex:t="ENVMAP_BLENDING_ADD";break}return t}function Db(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function Ub(r,t,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Ab(i),m=Rb(i),_=Cb(i),v=wb(i),x=Db(i),y=vb(i),R=Sb(u),w=l.createProgram();let M,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(No).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(No).join(`
`),g.length>0&&(g+=`
`)):(M=[zg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[zg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?ue.tonemapping_pars_fragment:"",i.toneMapping!==Fa?_b("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,mb("linearToOutputTexel",i.outputColorSpace),gb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),h=ed(h),h=Ng(h,i),h=Og(h,i),d=ed(d),d=Ng(d,i),d=Og(d,i),h=Pg(h),d=Pg(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===j_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===j_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=P+M+h,D=P+g+d,H=Dg(l,l.VERTEX_SHADER,O),G=Dg(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,G),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(I){if(r.debug.checkShaderErrors){const lt=l.getProgramInfoLog(w).trim(),st=l.getShaderInfoLog(H).trim(),pt=l.getShaderInfoLog(G).trim();let ft=!0,z=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ft=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,H,G);else{const at=Lg(l,H,"vertex"),q=Lg(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+lt+`
`+at+`
`+q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||pt==="")&&(z=!1);z&&(I.diagnostics={runnable:ft,programLog:lt,vertexShader:{log:st,prefix:M},fragmentShader:{log:pt,prefix:g}})}l.deleteShader(H),l.deleteShader(G),K=new yc(l,w),C=xb(l,w)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,fb)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hb++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=G,this}let Lb=0;class Nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Ob(t),i.set(t,s)),s}}class Ob{constructor(t){this.id=Lb++,this.code=t,this.usedTimes=0}}function Pb(r,t,i,s,l,u,h){const d=new sv,p=new Nb,m=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function M(C,A,I,lt,st){const pt=lt.fog,ft=st.geometry,z=C.isMeshStandardMaterial?lt.environment:null,at=(C.isMeshStandardMaterial?i:t).get(C.envMap||z),q=at&&at.mapping===Ac?at.image.height:null,xt=R[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const L=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=L!==void 0?L.length:0;let Mt=0;ft.morphAttributes.position!==void 0&&(Mt=1),ft.morphAttributes.normal!==void 0&&(Mt=2),ft.morphAttributes.color!==void 0&&(Mt=3);let bt,W,ht,vt;if(xt){const Ee=Ci[xt];bt=Ee.vertexShader,W=Ee.fragmentShader}else bt=C.vertexShader,W=C.fragmentShader,p.update(C),ht=p.getVertexShaderID(C),vt=p.getFragmentShaderID(C);const Et=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Yt=st.isInstancedMesh===!0,Dt=st.isBatchedMesh===!0,Me=!!C.map,Ce=!!C.matcap,$t=!!at,B=!!C.aoMap,en=!!C.lightMap,ie=!!C.bumpMap,ce=!!C.normalMap,Gt=!!C.displacementMap,we=!!C.emissiveMap,Vt=!!C.metalnessMap,U=!!C.roughnessMap,E=C.anisotropy>0,J=C.clearcoat>0,ut=C.dispersion>0,gt=C.iridescence>0,dt=C.sheen>0,kt=C.transmission>0,wt=E&&!!C.anisotropyMap,zt=J&&!!C.clearcoatMap,_e=J&&!!C.clearcoatNormalMap,Tt=J&&!!C.clearcoatRoughnessMap,Bt=gt&&!!C.iridescenceMap,Qt=gt&&!!C.iridescenceThicknessMap,Xt=dt&&!!C.sheenColorMap,Ft=dt&&!!C.sheenRoughnessMap,re=!!C.specularMap,Zt=!!C.specularColorMap,Ue=!!C.specularIntensityMap,X=kt&&!!C.transmissionMap,Nt=kt&&!!C.thicknessMap,rt=!!C.gradientMap,_t=!!C.alphaMap,Ct=C.alphaTest>0,Ut=!!C.alphaHash,te=!!C.extensions;let Ge=Fa;C.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ge=r.toneMapping);const nn={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:bt,fragmentShader:W,defines:C.defines,customVertexShaderID:ht,customFragmentShaderID:vt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Dt,batchingColor:Dt&&st._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&st.instanceColor!==null,instancingMorph:Yt&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Et===null?r.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Cr,alphaToCoverage:!!C.alphaToCoverage,map:Me,matcap:Ce,envMap:$t,envMapMode:$t&&at.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:en,bumpMap:ie,normalMap:ce,displacementMap:x&&Gt,emissiveMap:we,normalMapObjectSpace:ce&&C.normalMapType===dx,normalMapTangentSpace:ce&&C.normalMapType===hx,metalnessMap:Vt,roughnessMap:U,anisotropy:E,anisotropyMap:wt,clearcoat:J,clearcoatMap:zt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Tt,dispersion:ut,iridescence:gt,iridescenceMap:Bt,iridescenceThicknessMap:Qt,sheen:dt,sheenColorMap:Xt,sheenRoughnessMap:Ft,specularMap:re,specularColorMap:Zt,specularIntensityMap:Ue,transmission:kt,transmissionMap:X,thicknessMap:Nt,gradientMap:rt,opaque:C.transparent===!1&&C.blending===xr&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Ut,combine:C.combine,mapUv:Me&&w(C.map.channel),aoMapUv:B&&w(C.aoMap.channel),lightMapUv:en&&w(C.lightMap.channel),bumpMapUv:ie&&w(C.bumpMap.channel),normalMapUv:ce&&w(C.normalMap.channel),displacementMapUv:Gt&&w(C.displacementMap.channel),emissiveMapUv:we&&w(C.emissiveMap.channel),metalnessMapUv:Vt&&w(C.metalnessMap.channel),roughnessMapUv:U&&w(C.roughnessMap.channel),anisotropyMapUv:wt&&w(C.anisotropyMap.channel),clearcoatMapUv:zt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(C.sheenRoughnessMap.channel),specularMapUv:re&&w(C.specularMap.channel),specularColorMapUv:Zt&&w(C.specularColorMap.channel),specularIntensityMapUv:Ue&&w(C.specularIntensityMap.channel),transmissionMapUv:X&&w(C.transmissionMap.channel),thicknessMapUv:Nt&&w(C.thicknessMap.channel),alphaMapUv:_t&&w(C.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(ce||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ft.attributes.uv&&(Me||_t),fog:!!pt,useFog:C.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:At,skinning:st.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Mt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Me&&C.map.isVideoTexture===!0&&Re.getTransfer(C.map.colorSpace)===Pe,decodeVideoTextureEmissive:we&&C.emissiveMap.isVideoTexture===!0&&Re.getTransfer(C.emissiveMap.colorSpace)===Pe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===wi,flipSided:C.side===Pn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:te&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&C.extensions.multiDraw===!0||Dt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return nn.vertexUv1s=m.has(1),nn.vertexUv2s=m.has(2),nn.vertexUv3s=m.has(3),m.clear(),nn}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)A.push(I),A.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(P(A,C),O(A,C),A.push(r.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function P(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function O(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const A=R[C.type];let I;if(A){const lt=Ci[A];I=sM.clone(lt.uniforms)}else I=C.uniforms;return I}function H(C,A){let I;for(let lt=0,st=_.length;lt<st;lt++){const pt=_[lt];if(pt.cacheKey===A){I=pt,++I.usedTimes;break}}return I===void 0&&(I=new Ub(r,A,C,u),_.push(I)),I}function G(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function F(C){p.remove(C)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:G,releaseShaderCache:F,programs:_,dispose:K}}function zb(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Bb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Bg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Fg(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,y,R,w,M){let g=r[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:y,groupOrder:R,renderOrder:v.renderOrder,z:w,group:M},r[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=y,g.groupOrder=R,g.renderOrder=v.renderOrder,g.z=w,g.group=M),t++,g}function d(v,x,y,R,w,M){const g=h(v,x,y,R,w,M);y.transmission>0?s.push(g):y.transparent===!0?l.push(g):i.push(g)}function p(v,x,y,R,w,M){const g=h(v,x,y,R,w,M);y.transmission>0?s.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function m(v,x){i.length>1&&i.sort(v||Bb),s.length>1&&s.sort(x||Bg),l.length>1&&l.sort(x||Bg)}function _(){for(let v=t,x=r.length;v<x;v++){const y=r[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:_,sort:m}}function Fb(){let r=new WeakMap;function t(s,l){const u=r.get(s);let h;return u===void 0?(h=new Fg,r.set(s,[h])):l>=u.length?(h=new Fg,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function Ib(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new nt,color:new De};break;case"SpotLight":i={position:new nt,direction:new nt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return r[t.id]=i,i}}}function Hb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let Gb=0;function Vb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kb(r){const t=new Ib,i=Hb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new nt);const l=new nt,u=new tn,h=new tn;function d(m){let _=0,v=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,R=0,w=0,M=0,g=0,P=0,O=0,D=0,H=0,G=0,F=0;m.sort(Vb);for(let C=0,A=m.length;C<A;C++){const I=m[C],lt=I.color,st=I.intensity,pt=I.distance,ft=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=lt.r*st,v+=lt.g*st,x+=lt.b*st;else if(I.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(I.sh.coefficients[z],st);F++}else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const at=I.shadow,q=i.get(I);q.shadowIntensity=at.intensity,q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=ft,s.directionalShadowMatrix[y]=I.shadow.matrix,P++}s.directional[y]=z,y++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(lt).multiplyScalar(st),z.distance=pt,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,s.spot[w]=z;const at=I.shadow;if(I.map&&(s.spotLightMap[H]=I.map,H++,at.updateMatrices(I),I.castShadow&&G++),s.spotLightMatrix[w]=at.matrix,I.castShadow){const q=i.get(I);q.shadowIntensity=at.intensity,q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,s.spotShadow[w]=q,s.spotShadowMap[w]=ft,D++}w++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(lt).multiplyScalar(st),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=z,M++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const at=I.shadow,q=i.get(I);q.shadowIntensity=at.intensity,q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,q.shadowCameraNear=at.camera.near,q.shadowCameraFar=at.camera.far,s.pointShadow[R]=q,s.pointShadowMap[R]=ft,s.pointShadowMatrix[R]=I.shadow.matrix,O++}s.point[R]=z,R++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(st),z.groundColor.copy(I.groundColor).multiplyScalar(st),s.hemi[g]=z,g++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=x;const K=s.hash;(K.directionalLength!==y||K.pointLength!==R||K.spotLength!==w||K.rectAreaLength!==M||K.hemiLength!==g||K.numDirectionalShadows!==P||K.numPointShadows!==O||K.numSpotShadows!==D||K.numSpotMaps!==H||K.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=R,s.hemi.length=g,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+H-G,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=F,K.directionalLength=y,K.pointLength=R,K.spotLength=w,K.rectAreaLength=M,K.hemiLength=g,K.numDirectionalShadows=P,K.numPointShadows=O,K.numSpotShadows=D,K.numSpotMaps=H,K.numLightProbes=F,s.version=Gb++)}function p(m,_){let v=0,x=0,y=0,R=0,w=0;const M=_.matrixWorldInverse;for(let g=0,P=m.length;g<P;g++){const O=m[g];if(O.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(O.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=s.rectArea[R];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),u.copy(O.matrixWorld),u.premultiply(M),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:d,setupView:p,state:s}}function Ig(r){const t=new kb(r),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function Xb(r){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Ig(r),t.set(l,[d])):u>=h.length?(d=new Ig(r),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yb=`uniform sampler2D shadow_pass;
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
}`;function qb(r,t,i){let s=new hv;const l=new de,u=new de,h=new Ze,d=new pM({depthPacking:fx}),p=new mM,m={},_=i.maxTextureSize,v={[Ia]:Pn,[Pn]:Ia,[wi]:wi},x=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Wb,fragmentShader:Yb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const R=new Ha;R.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Kn(R,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vg;let g=this.type;this.render=function(G,F,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const C=r.getRenderTarget(),A=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),lt=r.state;lt.setBlending(Ba),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=g!==na&&this.type===na,pt=g===na&&this.type!==na;for(let ft=0,z=G.length;ft<z;ft++){const at=G[ft],q=at.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const xt=q.getFrameExtents();if(l.multiply(xt),u.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/xt.x),l.x=u.x*xt.x,q.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/xt.y),l.y=u.y*xt.y,q.mapSize.y=u.y)),q.map===null||st===!0||pt===!0){const tt=this.type!==na?{minFilter:Mi,magFilter:Mi}:{};q.map!==null&&q.map.dispose(),q.map=new xs(l.x,l.y,tt),q.map.texture.name=at.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const L=q.getViewportCount();for(let tt=0;tt<L;tt++){const Mt=q.getViewport(tt);h.set(u.x*Mt.x,u.y*Mt.y,u.x*Mt.z,u.y*Mt.w),lt.viewport(h),q.updateMatrices(at,tt),s=q.getFrustum(),D(F,K,q.camera,at,this.type)}q.isPointLightShadow!==!0&&this.type===na&&P(q,K),q.needsUpdate=!1}g=this.type,M.needsUpdate=!1,r.setRenderTarget(C,A,I)};function P(G,F){const K=t.update(w);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new xs(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(F,null,K,x,w,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(F,null,K,y,w,null)}function O(G,F,K,C){let A=null;const I=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(I!==void 0)A=I;else if(A=K.isPointLight===!0?p:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const lt=A.uuid,st=F.uuid;let pt=m[lt];pt===void 0&&(pt={},m[lt]=pt);let ft=pt[st];ft===void 0&&(ft=A.clone(),pt[st]=ft,F.addEventListener("dispose",H)),A=ft}if(A.visible=F.visible,A.wireframe=F.wireframe,C===na?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const lt=r.properties.get(A);lt.light=K}return A}function D(G,F,K,C,A){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&A===na)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const st=t.update(G),pt=G.material;if(Array.isArray(pt)){const ft=st.groups;for(let z=0,at=ft.length;z<at;z++){const q=ft[z],xt=pt[q.materialIndex];if(xt&&xt.visible){const L=O(G,xt,C,A);G.onBeforeShadow(r,G,F,K,st,L,q),r.renderBufferDirect(K,null,st,L,G,q),G.onAfterShadow(r,G,F,K,st,L,q)}}}else if(pt.visible){const ft=O(G,pt,C,A);G.onBeforeShadow(r,G,F,K,st,ft,null),r.renderBufferDirect(K,null,st,ft,G,null),G.onAfterShadow(r,G,F,K,st,ft,null)}}const lt=G.children;for(let st=0,pt=lt.length;st<pt;st++)D(lt[st],F,K,C,A)}function H(G){G.target.removeEventListener("dispose",H);for(const K in m){const C=m[K],A=G.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const jb={[gh]:vh,[Sh]:yh,[xh]:Eh,[Er]:Mh,[vh]:gh,[yh]:Sh,[Eh]:xh,[Mh]:Er};function Zb(r,t){function i(){let X=!1;const Nt=new Ze;let rt=null;const _t=new Ze(0,0,0,0);return{setMask:function(Ct){rt!==Ct&&!X&&(r.colorMask(Ct,Ct,Ct,Ct),rt=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Ut,te,Ge,nn){nn===!0&&(Ct*=Ge,Ut*=Ge,te*=Ge),Nt.set(Ct,Ut,te,Ge),_t.equals(Nt)===!1&&(r.clearColor(Ct,Ut,te,Ge),_t.copy(Nt))},reset:function(){X=!1,rt=null,_t.set(-1,0,0,0)}}}function s(){let X=!1,Nt=!1,rt=null,_t=null,Ct=null;return{setReversed:function(Ut){if(Nt!==Ut){const te=t.get("EXT_clip_control");Nt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Ge=Ct;Ct=null,this.setClear(Ge)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?Et(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(Ut){rt!==Ut&&!X&&(r.depthMask(Ut),rt=Ut)},setFunc:function(Ut){if(Nt&&(Ut=jb[Ut]),_t!==Ut){switch(Ut){case gh:r.depthFunc(r.NEVER);break;case vh:r.depthFunc(r.ALWAYS);break;case Sh:r.depthFunc(r.LESS);break;case Er:r.depthFunc(r.LEQUAL);break;case xh:r.depthFunc(r.EQUAL);break;case Mh:r.depthFunc(r.GEQUAL);break;case yh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=Ut}},setLocked:function(Ut){X=Ut},setClear:function(Ut){Ct!==Ut&&(Nt&&(Ut=1-Ut),r.clearDepth(Ut),Ct=Ut)},reset:function(){X=!1,rt=null,_t=null,Ct=null,Nt=!1}}}function l(){let X=!1,Nt=null,rt=null,_t=null,Ct=null,Ut=null,te=null,Ge=null,nn=null;return{setTest:function(Ee){X||(Ee?Et(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!X&&(r.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,Rn,Cn){(rt!==Ee||_t!==Rn||Ct!==Cn)&&(r.stencilFunc(Ee,Rn,Cn),rt=Ee,_t=Rn,Ct=Cn)},setOp:function(Ee,Rn,Cn){(Ut!==Ee||te!==Rn||Ge!==Cn)&&(r.stencilOp(Ee,Rn,Cn),Ut=Ee,te=Rn,Ge=Cn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){nn!==Ee&&(r.clearStencil(Ee),nn=Ee)},reset:function(){X=!1,Nt=null,rt=null,_t=null,Ct=null,Ut=null,te=null,Ge=null,nn=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,G=null,F=new De(0,0,0),K=0,C=!1,A=null,I=null,lt=null,st=null,pt=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,at=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=at>=1):q.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=at>=2);let xt=null,L={};const tt=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),bt=new Ze().fromArray(tt),W=new Ze().fromArray(Mt);function ht(X,Nt,rt,_t){const Ct=new Uint8Array(4),Ut=r.createTexture();r.bindTexture(X,Ut),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<rt;te++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Nt+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Ut}const vt={};vt[r.TEXTURE_2D]=ht(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Et(r.DEPTH_TEST),h.setFunc(Er),ie(!1),ce(k_),Et(r.CULL_FACE),B(Ba);function Et(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function At(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function Yt(X,Nt){return v[X]!==Nt?(r.bindFramebuffer(X,Nt),v[X]=Nt,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Nt),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Dt(X,Nt){let rt=y,_t=!1;if(X){rt=x.get(Nt),rt===void 0&&(rt=[],x.set(Nt,rt));const Ct=X.textures;if(rt.length!==Ct.length||rt[0]!==r.COLOR_ATTACHMENT0){for(let Ut=0,te=Ct.length;Ut<te;Ut++)rt[Ut]=r.COLOR_ATTACHMENT0+Ut;rt.length=Ct.length,_t=!0}}else rt[0]!==r.BACK&&(rt[0]=r.BACK,_t=!0);_t&&r.drawBuffers(rt)}function Me(X){return R!==X?(r.useProgram(X),R=X,!0):!1}const Ce={[ms]:r.FUNC_ADD,[BS]:r.FUNC_SUBTRACT,[FS]:r.FUNC_REVERSE_SUBTRACT};Ce[IS]=r.MIN,Ce[HS]=r.MAX;const $t={[GS]:r.ZERO,[VS]:r.ONE,[kS]:r.SRC_COLOR,[mh]:r.SRC_ALPHA,[ZS]:r.SRC_ALPHA_SATURATE,[qS]:r.DST_COLOR,[WS]:r.DST_ALPHA,[XS]:r.ONE_MINUS_SRC_COLOR,[_h]:r.ONE_MINUS_SRC_ALPHA,[jS]:r.ONE_MINUS_DST_COLOR,[YS]:r.ONE_MINUS_DST_ALPHA,[KS]:r.CONSTANT_COLOR,[QS]:r.ONE_MINUS_CONSTANT_COLOR,[JS]:r.CONSTANT_ALPHA,[$S]:r.ONE_MINUS_CONSTANT_ALPHA};function B(X,Nt,rt,_t,Ct,Ut,te,Ge,nn,Ee){if(X===Ba){w===!0&&(At(r.BLEND),w=!1);return}if(w===!1&&(Et(r.BLEND),w=!0),X!==zS){if(X!==M||Ee!==C){if((g!==ms||D!==ms)&&(r.blendEquation(r.FUNC_ADD),g=ms,D=ms),Ee)switch(X){case xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ph:r.blendFunc(r.ONE,r.ONE);break;case X_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case W_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ph:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case X_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case W_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,O=null,H=null,G=null,F.set(0,0,0),K=0,M=X,C=Ee}return}Ct=Ct||Nt,Ut=Ut||rt,te=te||_t,(Nt!==g||Ct!==D)&&(r.blendEquationSeparate(Ce[Nt],Ce[Ct]),g=Nt,D=Ct),(rt!==P||_t!==O||Ut!==H||te!==G)&&(r.blendFuncSeparate($t[rt],$t[_t],$t[Ut],$t[te]),P=rt,O=_t,H=Ut,G=te),(Ge.equals(F)===!1||nn!==K)&&(r.blendColor(Ge.r,Ge.g,Ge.b,nn),F.copy(Ge),K=nn),M=X,C=!1}function en(X,Nt){X.side===wi?At(r.CULL_FACE):Et(r.CULL_FACE);let rt=X.side===Pn;Nt&&(rt=!rt),ie(rt),X.blending===xr&&X.transparent===!1?B(Ba):B(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),we(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Et(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(X){A!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),A=X)}function ce(X){X!==NS?(Et(r.CULL_FACE),X!==I&&(X===k_?r.cullFace(r.BACK):X===OS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),I=X}function Gt(X){X!==lt&&(z&&r.lineWidth(X),lt=X)}function we(X,Nt,rt){X?(Et(r.POLYGON_OFFSET_FILL),(st!==Nt||pt!==rt)&&(r.polygonOffset(Nt,rt),st=Nt,pt=rt)):At(r.POLYGON_OFFSET_FILL)}function Vt(X){X?Et(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function U(X){X===void 0&&(X=r.TEXTURE0+ft-1),xt!==X&&(r.activeTexture(X),xt=X)}function E(X,Nt,rt){rt===void 0&&(xt===null?rt=r.TEXTURE0+ft-1:rt=xt);let _t=L[rt];_t===void 0&&(_t={type:void 0,texture:void 0},L[rt]=_t),(_t.type!==X||_t.texture!==Nt)&&(xt!==rt&&(r.activeTexture(rt),xt=rt),r.bindTexture(X,Nt||vt[X]),_t.type=X,_t.texture=Nt)}function J(){const X=L[xt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ut(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(X){bt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),bt.copy(X))}function Ft(X){W.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),W.copy(X))}function re(X,Nt){let rt=m.get(Nt);rt===void 0&&(rt=new WeakMap,m.set(Nt,rt));let _t=rt.get(X);_t===void 0&&(_t=r.getUniformBlockIndex(Nt,X.name),rt.set(X,_t))}function Zt(X,Nt){const _t=m.get(Nt).get(X);p.get(Nt)!==_t&&(r.uniformBlockBinding(Nt,_t,X.__bindingPointIndex),p.set(Nt,_t))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},xt=null,L={},v={},x=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,G=null,F=new De(0,0,0),K=0,C=!1,A=null,I=null,lt=null,st=null,pt=null,bt.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Et,disable:At,bindFramebuffer:Yt,drawBuffers:Dt,useProgram:Me,setBlending:B,setMaterial:en,setFlipSided:ie,setCullFace:ce,setLineWidth:Gt,setPolygonOffset:we,setScissorTest:Vt,activeTexture:U,bindTexture:E,unbindTexture:J,compressedTexImage2D:ut,compressedTexImage3D:gt,texImage2D:Bt,texImage3D:Qt,updateUBOMapping:re,uniformBlockBinding:Zt,texStorage2D:_e,texStorage3D:Tt,texSubImage2D:dt,texSubImage3D:kt,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Xt,viewport:Ft,reset:Ue}}function Kb(r,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new de,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(U,E){return y?new OffscreenCanvas(U,E):Fo("canvas")}function w(U,E,J){let ut=1;const gt=Vt(U);if((gt.width>J||gt.height>J)&&(ut=J/Math.max(gt.width,gt.height)),ut<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(ut*gt.width),kt=Math.floor(ut*gt.height);v===void 0&&(v=R(dt,kt));const wt=E?R(dt,kt):v;return wt.width=dt,wt.height=kt,wt.getContext("2d").drawImage(U,0,0,dt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+dt+"x"+kt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),U;return U}function M(U){return U.generateMipmaps}function g(U){r.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(U,E,J,ut,gt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=E;if(E===r.RED&&(J===r.FLOAT&&(dt=r.R32F),J===r.HALF_FLOAT&&(dt=r.R16F),J===r.UNSIGNED_BYTE&&(dt=r.R8)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(dt=r.R8UI),J===r.UNSIGNED_SHORT&&(dt=r.R16UI),J===r.UNSIGNED_INT&&(dt=r.R32UI),J===r.BYTE&&(dt=r.R8I),J===r.SHORT&&(dt=r.R16I),J===r.INT&&(dt=r.R32I)),E===r.RG&&(J===r.FLOAT&&(dt=r.RG32F),J===r.HALF_FLOAT&&(dt=r.RG16F),J===r.UNSIGNED_BYTE&&(dt=r.RG8)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(dt=r.RG8UI),J===r.UNSIGNED_SHORT&&(dt=r.RG16UI),J===r.UNSIGNED_INT&&(dt=r.RG32UI),J===r.BYTE&&(dt=r.RG8I),J===r.SHORT&&(dt=r.RG16I),J===r.INT&&(dt=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),J===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),J===r.UNSIGNED_INT&&(dt=r.RGB32UI),J===r.BYTE&&(dt=r.RGB8I),J===r.SHORT&&(dt=r.RGB16I),J===r.INT&&(dt=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),J===r.UNSIGNED_INT&&(dt=r.RGBA32UI),J===r.BYTE&&(dt=r.RGBA8I),J===r.SHORT&&(dt=r.RGBA16I),J===r.INT&&(dt=r.RGBA32I)),E===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),E===r.RGBA){const kt=gt?Ec:Re.getTransfer(ut);J===r.FLOAT&&(dt=r.RGBA32F),J===r.HALF_FLOAT&&(dt=r.RGBA16F),J===r.UNSIGNED_BYTE&&(dt=kt===Pe?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(U,E){let J;return U?E===null||E===Ss||E===Ar?J=r.DEPTH24_STENCIL8:E===ia?J=r.DEPTH32F_STENCIL8:E===zo&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ss||E===Ar?J=r.DEPTH_COMPONENT24:E===ia?J=r.DEPTH_COMPONENT32F:E===zo&&(J=r.DEPTH_COMPONENT16),J}function H(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Mi&&U.minFilter!==Di?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function G(U){const E=U.target;E.removeEventListener("dispose",G),K(E),E.isVideoTexture&&_.delete(E)}function F(U){const E=U.target;E.removeEventListener("dispose",F),A(E)}function K(U){const E=s.get(U);if(E.__webglInit===void 0)return;const J=U.source,ut=x.get(J);if(ut){const gt=ut[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&C(U),Object.keys(ut).length===0&&x.delete(J)}s.remove(U)}function C(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const J=U.source,ut=x.get(J);delete ut[E.__cacheKey],h.memory.textures--}function A(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let gt=0;gt<E.__webglFramebuffer[ut].length;gt++)r.deleteFramebuffer(E.__webglFramebuffer[ut][gt]);else r.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)r.deleteFramebuffer(E.__webglFramebuffer[ut]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=U.textures;for(let ut=0,gt=J.length;ut<gt;ut++){const dt=s.get(J[ut]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(J[ut])}s.remove(U)}let I=0;function lt(){I=0}function st(){const U=I;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),I+=1,U}function pt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ft(U,E){const J=s.get(U);if(U.isVideoTexture&&Gt(U),U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){const ut=U.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(J,U,E);return}}i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function z(U,E){const J=s.get(U);if(U.version>0&&J.__version!==U.version){W(J,U,E);return}i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function at(U,E){const J=s.get(U);if(U.version>0&&J.__version!==U.version){W(J,U,E);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function q(U,E){const J=s.get(U);if(U.version>0&&J.__version!==U.version){ht(J,U,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const xt={[Ah]:r.REPEAT,[gs]:r.CLAMP_TO_EDGE,[Rh]:r.MIRRORED_REPEAT},L={[Mi]:r.NEAREST,[cx]:r.NEAREST_MIPMAP_NEAREST,[jl]:r.NEAREST_MIPMAP_LINEAR,[Di]:r.LINEAR,[If]:r.LINEAR_MIPMAP_NEAREST,[vs]:r.LINEAR_MIPMAP_LINEAR},tt={[px]:r.NEVER,[xx]:r.ALWAYS,[mx]:r.LESS,[ev]:r.LEQUAL,[_x]:r.EQUAL,[Sx]:r.GEQUAL,[gx]:r.GREATER,[vx]:r.NOTEQUAL};function Mt(U,E){if(E.type===ia&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Di||E.magFilter===If||E.magFilter===jl||E.magFilter===vs||E.minFilter===Di||E.minFilter===If||E.minFilter===jl||E.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,xt[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,xt[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,xt[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,L[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mi||E.minFilter!==jl&&E.minFilter!==vs||E.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function bt(U,E){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",G));const ut=E.source;let gt=x.get(ut);gt===void 0&&(gt={},x.set(ut,gt));const dt=pt(E);if(dt!==U.__cacheKey){gt[dt]===void 0&&(gt[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,J=!0),gt[dt].usedTimes++;const kt=gt[U.__cacheKey];kt!==void 0&&(gt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&C(E)),U.__cacheKey=dt,U.__webglTexture=gt[dt].texture}return J}function W(U,E,J){let ut=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=r.TEXTURE_3D);const gt=bt(U,E),dt=E.source;i.bindTexture(ut,U.__webglTexture,r.TEXTURE0+J);const kt=s.get(dt);if(dt.version!==kt.__version||gt===!0){i.activeTexture(r.TEXTURE0+J);const wt=Re.getPrimaries(Re.workingColorSpace),zt=E.colorSpace===za?null:Re.getPrimaries(E.colorSpace),_e=E.colorSpace===za||wt===zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Tt=w(E.image,!1,l.maxTextureSize);Tt=we(E,Tt);const Bt=u.convert(E.format,E.colorSpace),Qt=u.convert(E.type);let Xt=O(E.internalFormat,Bt,Qt,E.colorSpace,E.isVideoTexture);Mt(ut,E);let Ft;const re=E.mipmaps,Zt=E.isVideoTexture!==!0,Ue=kt.__version===void 0||gt===!0,X=dt.dataReady,Nt=H(E,Tt);if(E.isDepthTexture)Xt=D(E.format===Rr,E.type),Ue&&(Zt?i.texStorage2D(r.TEXTURE_2D,1,Xt,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Bt,Qt,null));else if(E.isDataTexture)if(re.length>0){Zt&&Ue&&i.texStorage2D(r.TEXTURE_2D,Nt,Xt,re[0].width,re[0].height);for(let rt=0,_t=re.length;rt<_t;rt++)Ft=re[rt],Zt?X&&i.texSubImage2D(r.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,Qt,Ft.data):i.texImage2D(r.TEXTURE_2D,rt,Xt,Ft.width,Ft.height,0,Bt,Qt,Ft.data);E.generateMipmaps=!1}else Zt?(Ue&&i.texStorage2D(r.TEXTURE_2D,Nt,Xt,Tt.width,Tt.height),X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Bt,Qt,Tt.data)):i.texImage2D(r.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Bt,Qt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&Ue&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Xt,re[0].width,re[0].height,Tt.depth);for(let rt=0,_t=re.length;rt<_t;rt++)if(Ft=re[rt],E.format!==xi)if(Bt!==null)if(Zt){if(X)if(E.layerUpdates.size>0){const Ct=mg(Ft.width,Ft.height,E.format,E.type);for(const Ut of E.layerUpdates){const te=Ft.data.subarray(Ut*Ct/Ft.data.BYTES_PER_ELEMENT,(Ut+1)*Ct/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,Ut,Ft.width,Ft.height,1,Bt,te)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,Tt.depth,Bt,Ft.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,Xt,Ft.width,Ft.height,Tt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,Tt.depth,Bt,Qt,Ft.data):i.texImage3D(r.TEXTURE_2D_ARRAY,rt,Xt,Ft.width,Ft.height,Tt.depth,0,Bt,Qt,Ft.data)}else{Zt&&Ue&&i.texStorage2D(r.TEXTURE_2D,Nt,Xt,re[0].width,re[0].height);for(let rt=0,_t=re.length;rt<_t;rt++)Ft=re[rt],E.format!==xi?Bt!==null?Zt?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(r.TEXTURE_2D,rt,Xt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?X&&i.texSubImage2D(r.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,Qt,Ft.data):i.texImage2D(r.TEXTURE_2D,rt,Xt,Ft.width,Ft.height,0,Bt,Qt,Ft.data)}else if(E.isDataArrayTexture)if(Zt){if(Ue&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Xt,Tt.width,Tt.height,Tt.depth),X)if(E.layerUpdates.size>0){const rt=mg(Tt.width,Tt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ct=Tt.data.subarray(_t*rt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*rt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Bt,Qt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,Qt,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,Tt.width,Tt.height,Tt.depth,0,Bt,Qt,Tt.data);else if(E.isData3DTexture)Zt?(Ue&&i.texStorage3D(r.TEXTURE_3D,Nt,Xt,Tt.width,Tt.height,Tt.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,Qt,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,Xt,Tt.width,Tt.height,Tt.depth,0,Bt,Qt,Tt.data);else if(E.isFramebufferTexture){if(Ue)if(Zt)i.texStorage2D(r.TEXTURE_2D,Nt,Xt,Tt.width,Tt.height);else{let rt=Tt.width,_t=Tt.height;for(let Ct=0;Ct<Nt;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,Xt,rt,_t,0,Bt,Qt,null),rt>>=1,_t>>=1}}else if(re.length>0){if(Zt&&Ue){const rt=Vt(re[0]);i.texStorage2D(r.TEXTURE_2D,Nt,Xt,rt.width,rt.height)}for(let rt=0,_t=re.length;rt<_t;rt++)Ft=re[rt],Zt?X&&i.texSubImage2D(r.TEXTURE_2D,rt,0,0,Bt,Qt,Ft):i.texImage2D(r.TEXTURE_2D,rt,Xt,Bt,Qt,Ft);E.generateMipmaps=!1}else if(Zt){if(Ue){const rt=Vt(Tt);i.texStorage2D(r.TEXTURE_2D,Nt,Xt,rt.width,rt.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,Qt,Tt)}else i.texImage2D(r.TEXTURE_2D,0,Xt,Bt,Qt,Tt);M(E)&&g(ut),kt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ht(U,E,J){if(E.image.length!==6)return;const ut=bt(U,E),gt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+J);const dt=s.get(gt);if(gt.version!==dt.__version||ut===!0){i.activeTexture(r.TEXTURE0+J);const kt=Re.getPrimaries(Re.workingColorSpace),wt=E.colorSpace===za?null:Re.getPrimaries(E.colorSpace),zt=E.colorSpace===za||kt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!_e&&!Tt?Bt[_t]=w(E.image[_t],!0,l.maxCubemapSize):Bt[_t]=Tt?E.image[_t].image:E.image[_t],Bt[_t]=we(E,Bt[_t]);const Qt=Bt[0],Xt=u.convert(E.format,E.colorSpace),Ft=u.convert(E.type),re=O(E.internalFormat,Xt,Ft,E.colorSpace),Zt=E.isVideoTexture!==!0,Ue=dt.__version===void 0||ut===!0,X=gt.dataReady;let Nt=H(E,Qt);Mt(r.TEXTURE_CUBE_MAP,E);let rt;if(_e){Zt&&Ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,re,Qt.width,Qt.height);for(let _t=0;_t<6;_t++){rt=Bt[_t].mipmaps;for(let Ct=0;Ct<rt.length;Ct++){const Ut=rt[Ct];E.format!==xi?Xt!==null?Zt?X&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Ut.width,Ut.height,Xt,Ut.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,re,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Ut.width,Ut.height,Xt,Ft,Ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,re,Ut.width,Ut.height,0,Xt,Ft,Ut.data)}}}else{if(rt=E.mipmaps,Zt&&Ue){rt.length>0&&Nt++;const _t=Vt(Bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Xt,Ft,Bt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Bt[_t].width,Bt[_t].height,0,Xt,Ft,Bt[_t].data);for(let Ct=0;Ct<rt.length;Ct++){const te=rt[Ct].image[_t].image;Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,te.width,te.height,Xt,Ft,te.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,re,te.width,te.height,0,Xt,Ft,te.data)}}else{Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Ft,Bt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Xt,Ft,Bt[_t]);for(let Ct=0;Ct<rt.length;Ct++){const Ut=rt[Ct];Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Xt,Ft,Ut.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,re,Xt,Ft,Ut.image[_t])}}}M(E)&&g(r.TEXTURE_CUBE_MAP),dt.__version=gt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function vt(U,E,J,ut,gt,dt){const kt=u.convert(J.format,J.colorSpace),wt=u.convert(J.type),zt=O(J.internalFormat,kt,wt,J.colorSpace),_e=s.get(E),Tt=s.get(J);if(Tt.__renderTarget=E,!_e.__hasExternalTextures){const Bt=Math.max(1,E.width>>dt),Qt=Math.max(1,E.height>>dt);gt===r.TEXTURE_3D||gt===r.TEXTURE_2D_ARRAY?i.texImage3D(gt,dt,zt,Bt,Qt,E.depth,0,kt,wt,null):i.texImage2D(gt,dt,zt,Bt,Qt,0,kt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),ce(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,gt,Tt.__webglTexture,0,ie(E)):(gt===r.TEXTURE_2D||gt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,gt,Tt.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(U,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const ut=E.depthTexture,gt=ut&&ut.isDepthTexture?ut.type:null,dt=D(E.stencilBuffer,gt),kt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=ie(E);ce(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,dt,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,U)}else{const ut=E.textures;for(let gt=0;gt<ut.length;gt++){const dt=ut[gt],kt=u.convert(dt.format,dt.colorSpace),wt=u.convert(dt.type),zt=O(dt.internalFormat,kt,wt,dt.colorSpace),_e=ie(E);J&&ce(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,zt,E.width,E.height):ce(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,zt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,zt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=s.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const gt=ut.__webglTexture,dt=ie(E);if(E.depthTexture.format===Mr)ce(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,gt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,gt,0);else if(E.depthTexture.format===Rr)ce(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,gt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function Yt(U){const E=s.get(U),J=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ut=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const gt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",gt)};ut.addEventListener("dispose",gt),E.__depthDisposeCallback=gt}E.__boundDepthTexture=ut}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");At(E.__webglFramebuffer,U)}else if(J){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=r.createRenderbuffer(),Et(E.__webglDepthbuffer[ut],U,!1);else{const gt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Et(E.__webglDepthbuffer,U,!1);else{const ut=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,gt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(U,E,J){const ut=s.get(U);E!==void 0&&vt(ut.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Yt(U)}function Me(U){const E=U.texture,J=s.get(U),ut=s.get(E);U.addEventListener("dispose",F);const gt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,kt=gt.length>1;if(kt||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=E.version,h.memory.textures++),dt){J.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[wt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)J.__webglFramebuffer[wt][zt]=r.createFramebuffer()}else J.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)J.__webglFramebuffer[wt]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(kt)for(let wt=0,zt=gt.length;wt<zt;wt++){const _e=s.get(gt[wt]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&ce(U)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let wt=0;wt<gt.length;wt++){const zt=gt[wt];J.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[wt]);const _e=u.convert(zt.format,zt.colorSpace),Tt=u.convert(zt.type),Bt=O(zt.internalFormat,_e,Tt,zt.colorSpace,U.isXRRenderTarget===!0),Qt=ie(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,Bt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,J.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Et(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),Mt(r.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)vt(J.__webglFramebuffer[wt][zt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else vt(J.__webglFramebuffer[wt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let wt=0,zt=gt.length;wt<zt;wt++){const _e=gt[wt],Tt=s.get(_e);i.bindTexture(r.TEXTURE_2D,Tt.__webglTexture),Mt(r.TEXTURE_2D,_e),vt(J.__webglFramebuffer,U,_e,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,0),M(_e)&&g(r.TEXTURE_2D)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,ut.__webglTexture),Mt(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)vt(J.__webglFramebuffer[zt],U,E,r.COLOR_ATTACHMENT0,wt,zt);else vt(J.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,wt,0);M(E)&&g(wt),i.unbindTexture()}U.depthBuffer&&Yt(U)}function Ce(U){const E=U.textures;for(let J=0,ut=E.length;J<ut;J++){const gt=E[J];if(M(gt)){const dt=P(U),kt=s.get(gt).__webglTexture;i.bindTexture(dt,kt),g(dt),i.unbindTexture()}}}const $t=[],B=[];function en(U){if(U.samples>0){if(ce(U)===!1){const E=U.textures,J=U.width,ut=U.height;let gt=r.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=s.get(U),wt=E.length>1;if(wt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(gt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(gt|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[zt]);const _e=s.get(E[zt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,J,ut,0,0,J,ut,gt,r.NEAREST),p===!0&&($t.length=0,B.length=0,$t.push(r.COLOR_ATTACHMENT0+zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&($t.push(dt),B.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,kt.__webglColorRenderbuffer[zt]);const _e=s.get(E[zt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,_e,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ie(U){return Math.min(l.maxSamples,U.samples)}function ce(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Gt(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function we(U,E){const J=U.colorSpace,ut=U.format,gt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Cr&&J!==za&&(Re.getTransfer(J)===Pe?(ut!==xi||gt!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function Vt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=ft,this.setTexture2DArray=z,this.setTexture3D=at,this.setTextureCube=q,this.rebindTextures=Dt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=ce}function Qb(r,t){function i(s,l=za){let u;const h=Re.getTransfer(l);if(s===ra)return r.UNSIGNED_BYTE;if(s===sd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===rd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===qg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Wg)return r.BYTE;if(s===Yg)return r.SHORT;if(s===zo)return r.UNSIGNED_SHORT;if(s===ad)return r.INT;if(s===Ss)return r.UNSIGNED_INT;if(s===ia)return r.FLOAT;if(s===Io)return r.HALF_FLOAT;if(s===jg)return r.ALPHA;if(s===Zg)return r.RGB;if(s===xi)return r.RGBA;if(s===Kg)return r.LUMINANCE;if(s===Qg)return r.LUMINANCE_ALPHA;if(s===Mr)return r.DEPTH_COMPONENT;if(s===Rr)return r.DEPTH_STENCIL;if(s===Jg)return r.RED;if(s===od)return r.RED_INTEGER;if(s===$g)return r.RG;if(s===ld)return r.RG_INTEGER;if(s===cd)return r.RGBA_INTEGER;if(s===gc||s===vc||s===Sc||s===xc)if(h===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===gc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===gc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ch||s===wh||s===Dh||s===Uh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Ch)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lh||s===Nh||s===Oh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Lh||s===Nh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Oh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ph||s===zh||s===Bh||s===Fh||s===Ih||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===Yh||s===qh||s===jh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Ph)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ih)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mc||s===Zh||s===Kh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Mc)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tv||s===Qh||s===Jh||s===$h)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Mc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Qh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$h)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ar?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const Jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$b=`
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

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new zn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ni({vertexShader:Jb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Kn(new Cc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends ys{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,y=null,R=null;const w=new tA,M=i.getContextAttributes();let g=null,P=null;const O=[],D=[],H=new de;let G=null;const F=new ui;F.viewport=new Ze;const K=new ui;K.viewport=new Ze;const C=[F,K],A=new MM;let I=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ht=O[W];return ht===void 0&&(ht=new sh,O[W]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(W){let ht=O[W];return ht===void 0&&(ht=new sh,O[W]=ht),ht.getGripSpace()},this.getHand=function(W){let ht=O[W];return ht===void 0&&(ht=new sh,O[W]=ht),ht.getHandSpace()};function st(W){const ht=D.indexOf(W.inputSource);if(ht===-1)return;const vt=O[ht];vt!==void 0&&(vt.update(W.inputSource,W.frame,m||h),vt.dispatchEvent({type:W.type,data:W.inputSource}))}function pt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ft);for(let W=0;W<O.length;W++){const ht=D[W];ht!==null&&(D[W]=null,O[W].disconnect(ht))}I=null,lt=null,w.reset(),t.setRenderTarget(g),y=null,x=null,v=null,l=null,P=null,bt.stop(),s.isPresenting=!1,t.setPixelRatio(G),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Et=null,At=null;M.depth&&(At=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,vt=M.stencil?Rr:Mr,Et=M.stencil?Ar:Ss);const Yt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Yt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new xs(x.textureWidth,x.textureHeight,{format:xi,type:ra,depthTexture:new dv(x.textureWidth,x.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,vt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new xs(y.framebufferWidth,y.framebufferHeight,{format:xi,type:ra,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),bt.setContext(l),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ft(W){for(let ht=0;ht<W.removed.length;ht++){const vt=W.removed[ht],Et=D.indexOf(vt);Et>=0&&(D[Et]=null,O[Et].disconnect(vt))}for(let ht=0;ht<W.added.length;ht++){const vt=W.added[ht];let Et=D.indexOf(vt);if(Et===-1){for(let Yt=0;Yt<O.length;Yt++)if(Yt>=D.length){D.push(vt),Et=Yt;break}else if(D[Yt]===null){D[Yt]=vt,Et=Yt;break}if(Et===-1)break}const At=O[Et];At&&At.connect(vt)}}const z=new nt,at=new nt;function q(W,ht,vt){z.setFromMatrixPosition(ht.matrixWorld),at.setFromMatrixPosition(vt.matrixWorld);const Et=z.distanceTo(at),At=ht.projectionMatrix.elements,Yt=vt.projectionMatrix.elements,Dt=At[14]/(At[10]-1),Me=At[14]/(At[10]+1),Ce=(At[9]+1)/At[5],$t=(At[9]-1)/At[5],B=(At[8]-1)/At[0],en=(Yt[8]+1)/Yt[0],ie=Dt*B,ce=Dt*en,Gt=Et/(-B+en),we=Gt*-B;if(ht.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(we),W.translateZ(Gt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),At[10]===-1)W.projectionMatrix.copy(ht.projectionMatrix),W.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Vt=Dt+Gt,U=Me+Gt,E=ie-we,J=ce+(Et-we),ut=Ce*Me/U*Vt,gt=$t*Me/U*Vt;W.projectionMatrix.makePerspective(E,J,ut,gt,Vt,U),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function xt(W,ht){ht===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ht.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let ht=W.near,vt=W.far;w.texture!==null&&(w.depthNear>0&&(ht=w.depthNear),w.depthFar>0&&(vt=w.depthFar)),A.near=K.near=F.near=ht,A.far=K.far=F.far=vt,(I!==A.near||lt!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,lt=A.far),F.layers.mask=W.layers.mask|2,K.layers.mask=W.layers.mask|4,A.layers.mask=F.layers.mask|K.layers.mask;const Et=W.parent,At=A.cameras;xt(A,Et);for(let Yt=0;Yt<At.length;Yt++)xt(At[Yt],Et);At.length===2?q(A,F,K):A.projectionMatrix.copy(F.projectionMatrix),L(W,A,Et)};function L(W,ht,vt){vt===null?W.matrix.copy(ht.matrixWorld):(W.matrix.copy(vt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ht.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ht.projectionMatrix),W.projectionMatrixInverse.copy(ht.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Bo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(W){p=W,x!==null&&(x.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let tt=null;function Mt(W,ht){if(_=ht.getViewerPose(m||h),R=ht,_!==null){const vt=_.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let Et=!1;vt.length!==A.cameras.length&&(A.cameras.length=0,Et=!0);for(let Dt=0;Dt<vt.length;Dt++){const Me=vt[Dt];let Ce=null;if(y!==null)Ce=y.getViewport(Me);else{const B=v.getViewSubImage(x,Me);Ce=B.viewport,Dt===0&&(t.setRenderTargetTextures(P,B.colorTexture,x.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(P))}let $t=C[Dt];$t===void 0&&($t=new ui,$t.layers.enable(Dt),$t.viewport=new Ze,C[Dt]=$t),$t.matrix.fromArray(Me.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Me.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Dt===0&&(A.matrix.copy($t.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Et===!0&&A.cameras.push($t)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Dt=v.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&w.init(t,Dt,l.renderState)}}for(let vt=0;vt<O.length;vt++){const Et=D[vt],At=O[vt];Et!==null&&At!==void 0&&At.update(Et,ht,m||h)}tt&&tt(W,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),R=null}const bt=new pv;bt.setAnimationLoop(Mt),this.setAnimationLoop=function(W){tt=W},this.dispose=function(){}}}const hs=new oa,nA=new tn;function iA(r,t){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function s(M,g){g.color.getRGB(M.fogColor.value,cv(r)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,P,O,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),v(M,g)):g.isMeshPhongMaterial?(u(M,g),_(M,g)):g.isMeshStandardMaterial?(u(M,g),x(M,g),g.isMeshPhysicalMaterial&&y(M,g,D)):g.isMeshMatcapMaterial?(u(M,g),R(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),w(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?p(M,g,P,O):g.isSpriteMaterial?m(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===Pn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===Pn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const P=t.get(g),O=P.envMap,D=P.envMapRotation;O&&(M.envMap.value=O,hs.copy(D),hs.x*=-1,hs.y*=-1,hs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),M.envMapRotation.value.setFromMatrix4(nA.makeRotationFromEuler(hs)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function p(M,g,P,O){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*P,M.scale.value=O*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function m(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function v(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function x(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,P){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,g){g.matcap&&(M.matcap.value=g.matcap)}function w(M,g){const P=t.get(g).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function aA(r,t,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,O){const D=O.program;s.uniformBlockBinding(P,D)}function m(P,O){let D=l[P.id];D===void 0&&(R(P),D=_(P),l[P.id]=D,P.addEventListener("dispose",M));const H=O.program;s.updateUBOMapping(P,H);const G=t.render.frame;u[P.id]!==G&&(x(P),u[P.id]=G)}function _(P){const O=v();P.__bindingPointIndex=O;const D=r.createBuffer(),H=P.__size,G=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,H,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],D=P.uniforms,H=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let G=0,F=D.length;G<F;G++){const K=Array.isArray(D[G])?D[G]:[D[G]];for(let C=0,A=K.length;C<A;C++){const I=K[C];if(y(I,G,C,H)===!0){const lt=I.__offset,st=Array.isArray(I.value)?I.value:[I.value];let pt=0;for(let ft=0;ft<st.length;ft++){const z=st[ft],at=w(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,lt+pt,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,pt),pt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,lt,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,O,D,H){const G=P.value,F=O+"_"+D;if(H[F]===void 0)return typeof G=="number"||typeof G=="boolean"?H[F]=G:H[F]=G.clone(),!0;{const K=H[F];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return H[F]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function R(P){const O=P.uniforms;let D=0;const H=16;for(let F=0,K=O.length;F<K;F++){const C=Array.isArray(O[F])?O[F]:[O[F]];for(let A=0,I=C.length;A<I;A++){const lt=C[A],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let pt=0,ft=st.length;pt<ft;pt++){const z=st[pt],at=w(z),q=D%H,xt=q%at.boundary,L=q+xt;D+=xt,L!==0&&H-L<at.storage&&(D+=H-L),lt.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=at.storage}}}const G=D%H;return G>0&&(D+=H-G),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:g}}class sA{constructor(t={}){const{canvas:i=Bx(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const R=new Uint32Array(4),w=new Int32Array(4);let M=null,g=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=Fa,this.toneMappingExposure=1;const D=this;let H=!1,G=0,F=0,K=null,C=-1,A=null;const I=new Ze,lt=new Ze;let st=null;const pt=new De(0);let ft=0,z=i.width,at=i.height,q=1,xt=null,L=null;const tt=new Ze(0,0,z,at),Mt=new Ze(0,0,z,at);let bt=!1;const W=new hv;let ht=!1,vt=!1;this.transmissionResolutionScale=1;const Et=new tn,At=new tn,Yt=new nt,Dt=new Ze,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function $t(){return K===null?q:1}let B=s;function en(b,Y){return i.getContext(b,Y)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${id}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),B===null){const Y="webgl2";if(B=en(Y,b),B===null)throw en(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ie,ce,Gt,we,Vt,U,E,J,ut,gt,dt,kt,wt,zt,_e,Tt,Bt,Qt,Xt,Ft,re,Zt,Ue,X;function Nt(){ie=new mT(B),ie.init(),Zt=new Qb(B,ie),ce=new lT(B,ie,t,Zt),Gt=new Zb(B,ie),ce.reverseDepthBuffer&&x&&Gt.buffers.depth.setReversed(!0),we=new vT(B),Vt=new zb,U=new Kb(B,ie,Gt,Vt,ce,Zt,we),E=new uT(D),J=new pT(D),ut=new TM(B),Ue=new rT(B,ut),gt=new _T(B,ut,we,Ue),dt=new xT(B,gt,ut,we),Xt=new ST(B,ce,U),Tt=new cT(Vt),kt=new Pb(D,E,J,ie,ce,Ue,Tt),wt=new iA(D,Vt),zt=new Fb,_e=new Xb(ie),Qt=new sT(D,E,J,Gt,dt,y,p),Bt=new qb(D,dt,ce),X=new aA(B,we,ce,Gt),Ft=new oT(B,ie,we),re=new gT(B,ie,we),we.programs=kt.programs,D.capabilities=ce,D.extensions=ie,D.properties=Vt,D.renderLists=zt,D.shadowMap=Bt,D.state=Gt,D.info=we}Nt();const rt=new eA(D,B);this.xr=rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(z,at,!1))},this.getSize=function(b){return b.set(z,at)},this.setSize=function(b,Y,et=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,at=Y,i.width=Math.floor(b*q),i.height=Math.floor(Y*q),et===!0&&(i.style.width=b+"px",i.style.height=Y+"px"),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(z*q,at*q).floor()},this.setDrawingBufferSize=function(b,Y,et){z=b,at=Y,q=et,i.width=Math.floor(b*et),i.height=Math.floor(Y*et),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,Y,et,Q){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,Y,et,Q),Gt.viewport(I.copy(tt).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(Mt)},this.setScissor=function(b,Y,et,Q){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,Y,et,Q),Gt.scissor(lt.copy(Mt).multiplyScalar(q).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(b){Gt.setScissorTest(bt=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){L=b},this.getClearColor=function(b){return b.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,et=!0){let Q=0;if(b){let j=!1;if(K!==null){const yt=K.texture.format;j=yt===cd||yt===ld||yt===od}if(j){const yt=K.texture.type,Rt=yt===ra||yt===Ss||yt===zo||yt===Ar||yt===sd||yt===rd,Pt=Qt.getClearColor(),Ot=Qt.getClearAlpha(),ee=Pt.r,ne=Pt.g,jt=Pt.b;Rt?(R[0]=ee,R[1]=ne,R[2]=jt,R[3]=Ot,B.clearBufferuiv(B.COLOR,0,R)):(w[0]=ee,w[1]=ne,w[2]=jt,w[3]=Ot,B.clearBufferiv(B.COLOR,0,w))}else Q|=B.COLOR_BUFFER_BIT}Y&&(Q|=B.DEPTH_BUFFER_BIT),et&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Qt.dispose(),zt.dispose(),_e.dispose(),Vt.dispose(),E.dispose(),J.dispose(),dt.dispose(),Ue.dispose(),X.dispose(),kt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Vo),rt.removeEventListener("sessionend",Lr),yi.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const b=we.autoReset,Y=Bt.enabled,et=Bt.autoUpdate,Q=Bt.needsUpdate,j=Bt.type;Nt(),we.autoReset=b,Bt.enabled=Y,Bt.autoUpdate=et,Bt.needsUpdate=Q,Bt.type=j}function Ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const Y=b.target;Y.removeEventListener("dispose",te),Ge(Y)}function Ge(b){nn(b),Vt.remove(b)}function nn(b){const Y=Vt.get(b).programs;Y!==void 0&&(Y.forEach(function(et){kt.releaseProgram(et)}),b.isShaderMaterial&&kt.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,et,Q,j,yt){Y===null&&(Y=Me);const Rt=j.isMesh&&j.matrixWorld.determinant()<0,Pt=Dc(b,Y,et,Q,j);Gt.setMaterial(Q,Rt);let Ot=et.index,ee=1;if(Q.wireframe===!0){if(Ot=gt.getWireframeAttribute(et),Ot===void 0)return;ee=2}const ne=et.drawRange,jt=et.attributes.position;let ge=ne.start*ee,ve=(ne.start+ne.count)*ee;yt!==null&&(ge=Math.max(ge,yt.start*ee),ve=Math.min(ve,(yt.start+yt.count)*ee)),Ot!==null?(ge=Math.max(ge,0),ve=Math.min(ve,Ot.count)):jt!=null&&(ge=Math.max(ge,0),ve=Math.min(ve,jt.count));const He=ve-ge;if(He<0||He===1/0)return;Ue.setup(j,Q,Pt,et,Ot);let Te,ae=Ft;if(Ot!==null&&(Te=ut.get(Ot),ae=re,ae.setIndex(Te)),j.isMesh)Q.wireframe===!0?(Gt.setLineWidth(Q.wireframeLinewidth*$t()),ae.setMode(B.LINES)):ae.setMode(B.TRIANGLES);else if(j.isLine){let Kt=Q.linewidth;Kt===void 0&&(Kt=1),Gt.setLineWidth(Kt*$t()),j.isLineSegments?ae.setMode(B.LINES):j.isLineLoop?ae.setMode(B.LINE_LOOP):ae.setMode(B.LINE_STRIP)}else j.isPoints?ae.setMode(B.POINTS):j.isSprite&&ae.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ae.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,rn=j._multiDrawCounts,Se=j._multiDrawCount,Bn=Ot?ut.get(Ot).bytesPerElement:1,fi=Vt.get(Q).currentProgram.getUniforms();for(let wn=0;wn<Se;wn++)fi.setValue(B,"_gl_DrawID",wn),ae.render(Kt[wn]/Bn,rn[wn])}else if(j.isInstancedMesh)ae.renderInstances(ge,He,j.count);else if(et.isInstancedBufferGeometry){const Kt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,rn=Math.min(et.instanceCount,Kt);ae.renderInstances(ge,He,rn)}else ae.render(ge,He)};function Ee(b,Y,et){b.transparent===!0&&b.side===wi&&b.forceSinglePass===!1?(b.side=Pn,b.needsUpdate=!0,sn(b,Y,et),b.side=Ia,b.needsUpdate=!0,sn(b,Y,et),b.side=wi):sn(b,Y,et)}this.compile=function(b,Y,et=null){et===null&&(et=b),g=_e.get(et),g.init(Y),O.push(g),et.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),b!==et&&b.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const Q=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const yt=j.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){const Pt=yt[Rt];Ee(Pt,et,j),Q.add(Pt)}else Ee(yt,et,j),Q.add(yt)}),g=O.pop(),Q},this.compileAsync=function(b,Y,et=null){const Q=this.compile(b,Y,et);return new Promise(j=>{function yt(){if(Q.forEach(function(Rt){Vt.get(Rt).currentProgram.isReady()&&Q.delete(Rt)}),Q.size===0){j(b);return}setTimeout(yt,10)}ie.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Rn=null;function Cn(b){Rn&&Rn(b)}function Vo(){yi.stop()}function Lr(){yi.start()}const yi=new pv;yi.setAnimationLoop(Cn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(b){Rn=b,rt.setAnimationLoop(b),b===null?yi.stop():yi.start()},rt.addEventListener("sessionstart",Vo),rt.addEventListener("sessionend",Lr),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(Y),Y=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,Y,K),g=_e.get(b,O.length),g.init(Y),O.push(g),At.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W.setFromProjectionMatrix(At),vt=this.localClippingEnabled,ht=Tt.init(this.clippingPlanes,vt),M=zt.get(b,P.length),M.init(),P.push(M),rt.enabled===!0&&rt.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&Es(yt,Y,-1/0,D.sortObjects)}Es(b,Y,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(xt,L),Ce=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ce&&Qt.addToRenderList(M,b),this.info.render.frame++,ht===!0&&Tt.beginShadows();const et=g.state.shadowsArray;Bt.render(et,b,Y),ht===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,j=M.transmissive;if(g.setupLights(),Y.isArrayCamera){const yt=Y.cameras;if(j.length>0)for(let Rt=0,Pt=yt.length;Rt<Pt;Rt++){const Ot=yt[Rt];ko(Q,j,b,Ot)}Ce&&Qt.render(b);for(let Rt=0,Pt=yt.length;Rt<Pt;Rt++){const Ot=yt[Rt];Nr(M,b,Ot,Ot.viewport)}}else j.length>0&&ko(Q,j,b,Y),Ce&&Qt.render(b),Nr(M,b,Y);K!==null&&F===0&&(U.updateMultisampleRenderTarget(K),U.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(D,b,Y),Ue.resetDefaultState(),C=-1,A=null,O.pop(),O.length>0?(g=O[O.length-1],ht===!0&&Tt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Es(b,Y,et,Q){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)et=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){Q&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(At);const Rt=dt.update(b),Pt=b.material;Pt.visible&&M.push(b,Rt,Pt,et,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const Rt=dt.update(b),Pt=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Dt.copy(Rt.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(At)),Array.isArray(Pt)){const Ot=Rt.groups;for(let ee=0,ne=Ot.length;ee<ne;ee++){const jt=Ot[ee],ge=Pt[jt.materialIndex];ge&&ge.visible&&M.push(b,Rt,ge,et,Dt.z,jt)}}else Pt.visible&&M.push(b,Rt,Pt,et,Dt.z,null)}}const yt=b.children;for(let Rt=0,Pt=yt.length;Rt<Pt;Rt++)Es(yt[Rt],Y,et,Q)}function Nr(b,Y,et,Q){const j=b.opaque,yt=b.transmissive,Rt=b.transparent;g.setupLightsView(et),ht===!0&&Tt.setGlobalState(D.clippingPlanes,et),Q&&Gt.viewport(I.copy(Q)),j.length>0&&Vn(j,Y,et),yt.length>0&&Vn(yt,Y,et),Rt.length>0&&Vn(Rt,Y,et),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function ko(b,Y,et,Q){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new xs(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Io:ra,minFilter:vs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const yt=g.state.transmissionRenderTarget[Q.id],Rt=Q.viewport||I;yt.setSize(Rt.z*D.transmissionResolutionScale,Rt.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget();D.setRenderTarget(yt),D.getClearColor(pt),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),Ce&&Qt.render(et);const Ot=D.toneMapping;D.toneMapping=Fa;const ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),ht===!0&&Tt.setGlobalState(D.clippingPlanes,Q),Vn(b,et,Q),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let jt=0,ge=Y.length;jt<ge;jt++){const ve=Y[jt],He=ve.object,Te=ve.geometry,ae=ve.material,Kt=ve.group;if(ae.side===wi&&He.layers.test(Q.layers)){const rn=ae.side;ae.side=Pn,ae.needsUpdate=!0,an(He,et,Q,Te,ae,Kt),ae.side=rn,ae.needsUpdate=!0,ne=!0}}ne===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}D.setRenderTarget(Pt),D.setClearColor(pt,ft),ee!==void 0&&(Q.viewport=ee),D.toneMapping=Ot}function Vn(b,Y,et){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,yt=b.length;j<yt;j++){const Rt=b[j],Pt=Rt.object,Ot=Rt.geometry,ee=Q===null?Rt.material:Q,ne=Rt.group;Pt.layers.test(et.layers)&&an(Pt,Y,et,Ot,ee,ne)}}function an(b,Y,et,Q,j,yt){b.onBeforeRender(D,Y,et,Q,j,yt),b.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(D,Y,et,Q,b,yt),j.transparent===!0&&j.side===wi&&j.forceSinglePass===!1?(j.side=Pn,j.needsUpdate=!0,D.renderBufferDirect(et,Y,Q,j,b,yt),j.side=Ia,j.needsUpdate=!0,D.renderBufferDirect(et,Y,Q,j,b,yt),j.side=wi):D.renderBufferDirect(et,Y,Q,j,b,yt),b.onAfterRender(D,Y,et,Q,j,yt)}function sn(b,Y,et){Y.isScene!==!0&&(Y=Me);const Q=Vt.get(b),j=g.state.lights,yt=g.state.shadowsArray,Rt=j.state.version,Pt=kt.getParameters(b,j.state,yt,Y,et),Ot=kt.getProgramCacheKey(Pt);let ee=Q.programs;Q.environment=b.isMeshStandardMaterial?Y.environment:null,Q.fog=Y.fog,Q.envMap=(b.isMeshStandardMaterial?J:E).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,ee===void 0&&(b.addEventListener("dispose",te),ee=new Map,Q.programs=ee);let ne=ee.get(Ot);if(ne!==void 0){if(Q.currentProgram===ne&&Q.lightsStateVersion===Rt)return Ts(b,Pt),ne}else Pt.uniforms=kt.getUniforms(b),b.onBeforeCompile(Pt,D),ne=kt.acquireProgram(Pt,Ot),ee.set(Ot,ne),Q.uniforms=Pt.uniforms;const jt=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(jt.clippingPlanes=Tt.uniform),Ts(b,Pt),Q.needsLights=Xo(b),Q.lightsStateVersion=Rt,Q.needsLights&&(jt.ambientLightColor.value=j.state.ambient,jt.lightProbe.value=j.state.probe,jt.directionalLights.value=j.state.directional,jt.directionalLightShadows.value=j.state.directionalShadow,jt.spotLights.value=j.state.spot,jt.spotLightShadows.value=j.state.spotShadow,jt.rectAreaLights.value=j.state.rectArea,jt.ltc_1.value=j.state.rectAreaLTC1,jt.ltc_2.value=j.state.rectAreaLTC2,jt.pointLights.value=j.state.point,jt.pointLightShadows.value=j.state.pointShadow,jt.hemisphereLights.value=j.state.hemi,jt.directionalShadowMap.value=j.state.directionalShadowMap,jt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,jt.spotShadowMap.value=j.state.spotShadowMap,jt.spotLightMatrix.value=j.state.spotLightMatrix,jt.spotLightMap.value=j.state.spotLightMap,jt.pointShadowMap.value=j.state.pointShadowMap,jt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=ne,Q.uniformsList=null,ne}function Oi(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=yc.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Ts(b,Y){const et=Vt.get(b);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.batchingColor=Y.batchingColor,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.instancingMorph=Y.instancingMorph,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function Dc(b,Y,et,Q,j){Y.isScene!==!0&&(Y=Me),U.resetTextureUnits();const yt=Y.fog,Rt=Q.isMeshStandardMaterial?Y.environment:null,Pt=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Cr,Ot=(Q.isMeshStandardMaterial?J:E).get(Q.envMap||Rt),ee=Q.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ne=!!et.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),jt=!!et.morphAttributes.position,ge=!!et.morphAttributes.normal,ve=!!et.morphAttributes.color;let He=Fa;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(He=D.toneMapping);const Te=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ae=Te!==void 0?Te.length:0,Kt=Vt.get(Q),rn=g.state.lights;if(ht===!0&&(vt===!0||b!==A)){const Xe=b===A&&Q.id===C;Tt.setState(Q,b,Xe)}let Se=!1;Q.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==rn.state.version||Kt.outputColorSpace!==Pt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Ot||Q.fog===!0&&Kt.fog!==yt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Tt.numPlanes||Kt.numIntersection!==Tt.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==ne||Kt.morphTargets!==jt||Kt.morphNormals!==ge||Kt.morphColors!==ve||Kt.toneMapping!==He||Kt.morphTargetsCount!==ae)&&(Se=!0):(Se=!0,Kt.__version=Q.version);let Bn=Kt.currentProgram;Se===!0&&(Bn=sn(Q,Y,j));let fi=!1,wn=!1,hn=!1;const Le=Bn.getUniforms(),Dn=Kt.uniforms;if(Gt.useProgram(Bn.program)&&(fi=!0,wn=!0,hn=!0),Q.id!==C&&(C=Q.id,wn=!0),fi||A!==b){Gt.buffers.depth.getReversed()?(Et.copy(b.projectionMatrix),Ix(Et),Hx(Et),Le.setValue(B,"projectionMatrix",Et)):Le.setValue(B,"projectionMatrix",b.projectionMatrix),Le.setValue(B,"viewMatrix",b.matrixWorldInverse);const vn=Le.map.cameraPosition;vn!==void 0&&vn.setValue(B,Yt.setFromMatrixPosition(b.matrixWorld)),ce.logarithmicDepthBuffer&&Le.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Le.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,wn=!0,hn=!0)}if(j.isSkinnedMesh){Le.setOptional(B,j,"bindMatrix"),Le.setOptional(B,j,"bindMatrixInverse");const Xe=j.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Le.setValue(B,"boneTexture",Xe.boneTexture,U))}j.isBatchedMesh&&(Le.setOptional(B,j,"batchingTexture"),Le.setValue(B,"batchingTexture",j._matricesTexture,U),Le.setOptional(B,j,"batchingIdTexture"),Le.setValue(B,"batchingIdTexture",j._indirectTexture,U),Le.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Le.setValue(B,"batchingColorTexture",j._colorsTexture,U));const yn=et.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Xt.update(j,et,Bn),(wn||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Le.setValue(B,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Dn.envMap.value=Ot,Dn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&Y.environment!==null&&(Dn.envMapIntensity.value=Y.environmentIntensity),wn&&(Le.setValue(B,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Uc(Dn,hn),yt&&Q.fog===!0&&wt.refreshFogUniforms(Dn,yt),wt.refreshMaterialUniforms(Dn,Q,q,at,g.state.transmissionRenderTarget[b.id]),yc.upload(B,Oi(Kt),Dn,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(yc.upload(B,Oi(Kt),Dn,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Le.setValue(B,"center",j.center),Le.setValue(B,"modelViewMatrix",j.modelViewMatrix),Le.setValue(B,"normalMatrix",j.normalMatrix),Le.setValue(B,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Xe=Q.uniformsGroups;for(let vn=0,bs=Xe.length;vn<bs;vn++){const Fn=Xe[vn];X.update(Fn,Bn),X.bind(Fn,Bn)}}return Bn}function Uc(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function Xo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,Y,et){Vt.get(b.texture).__webglTexture=Y,Vt.get(b.depthTexture).__webglTexture=et;const Q=Vt.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=et===void 0,Q.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,Y){const et=Vt.get(b);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0};const Ga=B.createFramebuffer();this.setRenderTarget=function(b,Y=0,et=0){K=b,G=Y,F=et;let Q=!0,j=null,yt=!1,Rt=!1;if(b){const Ot=Vt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(Ot.__hasExternalTextures)U.rebindTextures(b,Vt.get(b.texture).__webglTexture,Vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const jt=b.depthTexture;if(Ot.__boundDepthTexture!==jt){if(jt!==null&&Vt.has(jt)&&(b.width!==jt.image.width||b.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const ee=b.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Rt=!0);const ne=Vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?j=ne[Y][et]:j=ne[Y],yt=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?j=Vt.get(b).__webglMultisampledFramebuffer:Array.isArray(ne)?j=ne[et]:j=ne,I.copy(b.viewport),lt.copy(b.scissor),st=b.scissorTest}else I.copy(tt).multiplyScalar(q).floor(),lt.copy(Mt).multiplyScalar(q).floor(),st=bt;if(et!==0&&(j=Ga),Gt.bindFramebuffer(B.FRAMEBUFFER,j)&&Q&&Gt.drawBuffers(b,j),Gt.viewport(I),Gt.scissor(lt),Gt.setScissorTest(st),yt){const Ot=Vt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,et)}else if(Rt){const Ot=Vt.get(b.texture),ee=Y;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ot.__webglTexture,et,ee)}else if(b!==null&&et!==0){const Ot=Vt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ot.__webglTexture,et)}C=-1},this.readRenderTargetPixels=function(b,Y,et,Q,j,yt,Rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){Gt.bindFramebuffer(B.FRAMEBUFFER,Pt);try{const Ot=b.texture,ee=Ot.format,ne=Ot.type;if(!ce.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-Q&&et>=0&&et<=b.height-j&&B.readPixels(Y,et,Q,j,Zt.convert(ee),Zt.convert(ne),yt)}finally{const Ot=K!==null?Vt.get(K).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,Y,et,Q,j,yt,Rt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){const Ot=b.texture,ee=Ot.format,ne=Ot.type;if(!ce.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=b.width-Q&&et>=0&&et<=b.height-j){Gt.bindFramebuffer(B.FRAMEBUFFER,Pt);const jt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,jt),B.bufferData(B.PIXEL_PACK_BUFFER,yt.byteLength,B.STREAM_READ),B.readPixels(Y,et,Q,j,Zt.convert(ee),Zt.convert(ne),0);const ge=K!==null?Vt.get(K).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,ge);const ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Fx(B,ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,jt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,yt),B.deleteBuffer(jt),B.deleteSync(ve),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,Y=null,et=0){b.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1]);const Q=Math.pow(2,-et),j=Math.floor(b.image.width*Q),yt=Math.floor(b.image.height*Q),Rt=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;U.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,et,0,0,Rt,Pt,j,yt),Gt.unbindTexture()};const Or=B.createFramebuffer(),Pi=B.createFramebuffer();this.copyTextureToTexture=function(b,Y,et=null,Q=null,j=0,yt=null){b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],Y=arguments[2],yt=arguments[3]||0,et=null),yt===null&&(j!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=j,j=0):yt=0);let Rt,Pt,Ot,ee,ne,jt,ge,ve,He;const Te=b.isCompressedTexture?b.mipmaps[yt]:b.image;if(et!==null)Rt=et.max.x-et.min.x,Pt=et.max.y-et.min.y,Ot=et.isBox3?et.max.z-et.min.z:1,ee=et.min.x,ne=et.min.y,jt=et.isBox3?et.min.z:0;else{const yn=Math.pow(2,-j);Rt=Math.floor(Te.width*yn),Pt=Math.floor(Te.height*yn),b.isDataArrayTexture?Ot=Te.depth:b.isData3DTexture?Ot=Math.floor(Te.depth*yn):Ot=1,ee=0,ne=0,jt=0}Q!==null?(ge=Q.x,ve=Q.y,He=Q.z):(ge=0,ve=0,He=0);const ae=Zt.convert(Y.format),Kt=Zt.convert(Y.type);let rn;Y.isData3DTexture?(U.setTexture3D(Y,0),rn=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),rn=B.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),rn=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=B.getParameter(B.UNPACK_ROW_LENGTH),Bn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fi=B.getParameter(B.UNPACK_SKIP_PIXELS),wn=B.getParameter(B.UNPACK_SKIP_ROWS),hn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Te.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Te.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ee),B.pixelStorei(B.UNPACK_SKIP_ROWS,ne),B.pixelStorei(B.UNPACK_SKIP_IMAGES,jt);const Le=b.isDataArrayTexture||b.isData3DTexture,Dn=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const yn=Vt.get(b),Xe=Vt.get(Y),vn=Vt.get(yn.__renderTarget),bs=Vt.get(Xe.__renderTarget);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,vn.__webglFramebuffer),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Fn=0;Fn<Ot;Fn++)Le&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(b).__webglTexture,j,jt+Fn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(Y).__webglTexture,yt,He+Fn)),B.blitFramebuffer(ee,ne,Rt,Pt,ge,ve,Rt,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||Vt.has(b)){const yn=Vt.get(b),Xe=Vt.get(Y);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,Or),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pi);for(let vn=0;vn<Ot;vn++)Le?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yn.__webglTexture,j,jt+vn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yn.__webglTexture,j),Dn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.__webglTexture,yt,He+vn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xe.__webglTexture,yt),j!==0?B.blitFramebuffer(ee,ne,Rt,Pt,ge,ve,Rt,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):Dn?B.copyTexSubImage3D(rn,yt,ge,ve,He+vn,ee,ne,Rt,Pt):B.copyTexSubImage2D(rn,yt,ge,ve,ee,ne,Rt,Pt);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Dn?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(rn,yt,ge,ve,He,Rt,Pt,Ot,ae,Kt,Te.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(rn,yt,ge,ve,He,Rt,Pt,Ot,ae,Te.data):B.texSubImage3D(rn,yt,ge,ve,He,Rt,Pt,Ot,ae,Kt,Te):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,yt,ge,ve,Rt,Pt,ae,Kt,Te.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,yt,ge,ve,Te.width,Te.height,ae,Te.data):B.texSubImage2D(B.TEXTURE_2D,yt,ge,ve,Rt,Pt,ae,Kt,Te);B.pixelStorei(B.UNPACK_ROW_LENGTH,Se),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fi),B.pixelStorei(B.UNPACK_SKIP_ROWS,wn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hn),yt===0&&Y.generateMipmaps&&B.generateMipmap(rn),Gt.unbindTexture()},this.copyTextureToTexture3D=function(b,Y,et=null,Q=null,j=0){return b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],Y=arguments[3],j=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Y,et,Q,j)},this.initRenderTarget=function(b){Vt.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),Gt.unbindTexture()},this.resetState=function(){G=0,F=0,K=null,Gt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const Hg={type:"change"},md={type:"start"},Sv={type:"end"},_c=new av,Gg=new Pa,rA=Math.cos(70*td.DEG2RAD),cn=new nt,Gn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dh=1e-6;class oA extends yM{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.enabled=!0,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:_r.ROTATE,TWO:_r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new Ms,this._lastTargetPosition=new nt,this._quat=new Ms().setFromUnitVectors(t.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pg,this._sphericalDelta=new pg,this._scale=1,this._panOffset=new nt,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new nt,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cA.bind(this),this._onPointerDown=lA.bind(this),this._onPointerUp=uA.bind(this),this._onContextMenu=gA.bind(this),this._onMouseWheel=dA.bind(this),this._onKeyDown=pA.bind(this),this._onTouchStart=mA.bind(this),this._onTouchMove=_A.bind(this),this._onMouseDown=fA.bind(this),this._onMouseMove=hA.bind(this),this._interceptControlDown=vA.bind(this),this._interceptControlUp=SA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hg),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),l<-Math.PI?l+=Gn:l>Math.PI&&(l-=Gn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=cn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new nt(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(_c.origin.copy(this.object.position),_c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_c.direction))<rA?this.object.lookAt(this.target):(Gg.setFromNormalAndCoplanarPoint(this.object.up,this.target),_c.intersectPlane(Gg,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dh||this._lastTargetPosition.distanceToSquared(this.target)>dh?(this.dispatchEvent(Hg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Gn/60*this.autoRotateSpeed*t:Gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let u=cn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new de,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function lA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function cA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function uA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sv),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function fA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ze.DOLLY;break;case Sr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ze.ROTATE}break;case Sr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(md)}function hA(r){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function dA(r){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(r.preventDefault(),this.dispatchEvent(md),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Sv))}function pA(r){this.enabled!==!1&&this._handleKeyDown(r)}function mA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case _r.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ze.TOUCH_ROTATE;break;case _r.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case _r.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ze.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(md)}function _A(r){switch(this._trackPointer(r),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ze.NONE}}function gA(r){this.enabled!==!1&&r.preventDefault()}function vA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var gn=nd();const xA=`
  varying vec2 vUv;
  varying vec3 vWorldNormal;
  
  void main() {
    vUv = uv;
    vWorldNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,MA=`
  uniform sampler2D dayTexture;
  uniform sampler2D nightTexture;
  
  varying vec2 vUv;
  varying vec3 vWorldNormal;

  void main() {
    vec3 sunDirection = normalize(vec3(-1.0, 0.0, 1.0));

    float lightIntensity = dot(vWorldNormal, sunDirection);

    float transitionStart = -0.1; 
    float transitionEnd = 0.1;  

    vec4 dayColor = texture2D(dayTexture, vUv);
    vec4 nightColor = texture2D(nightTexture, vUv);
    
    float mixFactor = smoothstep(transitionStart, transitionEnd, lightIntensity);
    
    vec4 finalColor = mix(nightColor, dayColor, clamp(mixFactor, 0.0, 1.0));

    gl_FragColor = finalColor;
  }
`;function yA(r,t){return new Ni({uniforms:{dayTexture:{value:r},nightTexture:{value:t}},vertexShader:xA,fragmentShader:MA,side:wi})}function EA({rimHex:r=35071,facingHex:t=0}={}){const i={color1:{value:new De(r)},color2:{value:new De(t)},fresnelBias:{value:.1},fresnelScale:{value:1},fresnelPower:{value:4}},s=`
  uniform float fresnelBias;
  uniform float fresnelScale;
  uniform float fresnelPower;
  
  varying float vReflectionFactor;
  
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
    vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
  
    gl_Position = projectionMatrix * mvPosition;
  }
  `,l=`
  uniform vec3 color1;
  uniform vec3 color2;
  
  varying float vReflectionFactor;
  
  void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
  }
  `;return new Ni({uniforms:i,vertexShader:s,fragmentShader:l,transparent:!0,blending:ph})}const TA=()=>{const r=gn.useRef(null),t=gn.useRef(null),i="https://github.com/rudraxDragon",[s,l]=gn.useState(!1),[u,h]=gn.useState(!1),d=()=>{h(!1)},p=z=>{u&&z.target.classList.contains("help-dialog")&&d()};gn.useEffect(()=>(u&&document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}),[u]);const m=z=>{s&&!z.target.closest(".controls-container")&&!z.target.classList.contains("Heading")&&l(!1)};gn.useEffect(()=>(s&&document.addEventListener("click",m),()=>{document.removeEventListener("click",m)}),[s]);const _=gn.useRef(null),[v,x]=gn.useState(!0),y=gn.useRef(null),[R,w]=gn.useState(!0),M=gn.useRef(4e-4),[g,P]=gn.useState(4),[O,D]=gn.useState(0),[H,G]=gn.useState(!1),[F,K]=gn.useState(!0);gn.useEffect(()=>{const z=new fM,at=75,q=window.innerWidth/window.innerHeight,xt=.1,L=100,tt=new ui(at,q,xt,L);tt.position.set(-1.22,.73,-1.5);const Mt=new sA({antialias:!0});Mt.setSize(window.innerWidth,window.innerHeight),r.current.appendChild(Mt.domElement);const bt=new SM,W=(vt,Et,At)=>new Promise(Yt=>{bt.load(vt,Dt=>{D((Et+1)/At*100),Yt(Dt)})});(async()=>{const vt=await Promise.all([W("images/earth_daymap.png",0,4),W("images/earth_nightmap.jpg",1,4),W("images/earthclouds.jpg",2,4),W("images/stars_milky_way.jpg",3,4)]),[Et,At,Yt,Dt]=vt,Me=new gr(1,64,64),Ce=yA(Et,At),$t=new Kn(Me,Ce);t.current=$t,$t.rotation.x=td.degToRad(F?23.5:0),z.add($t);const B=new gr(1.01,64,64),en=new bc({map:Yt,transparent:!0,opacity:.2}),ie=new Kn(B,en);ie.visible=v,_.current=ie,z.add(ie);const ce=new gr(10,32,32),Gt=new bc({map:Dt,side:Pn}),we=new Kn(ce,Gt);z.add(we);const Vt=new gr(1.01,64,64),U=EA(),E=new Kn(Vt,U);E.visible=R,y.current=E,z.add(E),G(!0);const J=new oA(tt,Mt.domElement);J.enableDamping=!0,J.dampingFactor=.05,J.minDistance=1.5,J.maxDistance=5,J.target.set(0,0,0),J.mouseButtons.RIGHT=null;const ut=()=>{requestAnimationFrame(ut);const gt=M.current;$t.rotation.y+=gt,ie.rotation.y+=gt+1e-4,E.rotation.y+=gt+1e-4,J.update(),Mt.render(z,tt)};ut()})()},[]),gn.useEffect(()=>{H&&h(!0)},[H]);const C=z=>z<.5?4*z*z*z:1-Math.pow(-2*z+2,3)/2;gn.useEffect(()=>{if(!t.current)return;const z=td.degToRad(F?23.5:0),at=t.current.rotation.x;let q=0;const tt=.5*60,Mt=()=>{if(q>=1){t.current.rotation.x=z;return}q+=1/tt;const bt=C(q);t.current.rotation.x=at+(z-at)*bt,requestAnimationFrame(Mt)};Mt()},[F]);const A=()=>{_.current&&(_.current.visible=!_.current.visible),x(z=>!z)},I=()=>{y.current&&(y.current.visible=!y.current.visible),w(z=>!z)},lt=()=>{g<10&&(M.current+=1e-4,P(z=>z+1))},st=()=>{g>1&&(M.current-=1e-4,P(z=>z-1))},pt=()=>{l(z=>!z)},ft=()=>{K(z=>!z)};return Ht.jsxs(Ht.Fragment,{children:[!H&&Ht.jsx("div",{className:"loading-screen",children:Ht.jsxs("div",{className:"loading-container",children:[Ht.jsx("h2",{children:"🌍 Loading Earth..."}),Ht.jsx("div",{className:"progress-bar",children:Ht.jsx("div",{className:"progress-fill",style:{width:`${O}%`}})}),Ht.jsxs("p",{children:[Math.round(O),"%"]}),Ht.jsx("p",{className:"loading-text",children:"Rendering a beautiful view of Earth..."})]})}),Ht.jsx("div",{ref:r,className:"earth"}),Ht.jsxs("div",{className:"navigation",children:[Ht.jsx("h1",{className:"Heading",onClick:pt,children:"पृथ्वी"}),Ht.jsxs("div",{className:"contacts",children:[Ht.jsx("a",{href:i,children:Ht.jsx("img",{src:"images/me.jpg",alt:"Photo of Rudraksh Prasad",className:"profilePic"})}),Ht.jsxs("div",{className:"nameAndLink",children:[Ht.jsx("h1",{className:"name",children:"Rudraksh Prasad"}),Ht.jsx("hr",{}),Ht.jsx("img",{src:"images/github.svg",alt:"github logo",className:"githubLogo"}),Ht.jsx("a",{href:i,className:"link",children:"rudraxDragon"})]})]})]}),u&&Ht.jsx("div",{className:"help-dialog",children:Ht.jsxs("div",{className:"dialog-content",children:[Ht.jsx("button",{className:"close-btn",onClick:d,children:"X"}),Ht.jsx("h2",{children:"How to Use the Controls"}),Ht.jsx("p",{children:"Welcome to the Earth Sandbox! Here's how you can interact:"}),Ht.jsxs("ul",{children:[Ht.jsxs("li",{children:[Ht.jsx("strong",{children:'Click on "पृथ्वी" (Earth) at the top of the screen'})," to reveal the control panel where you can toggle clouds, glow, and adjust speed."]}),Ht.jsxs("li",{children:[Ht.jsx("strong",{children:"Clouds:"})," Toggle clouds on/off by clicking the ",Ht.jsx("strong",{children:'"Clouds: ON/OFF"'})," button in the control panel below the Earth."]}),Ht.jsxs("li",{children:[Ht.jsx("strong",{children:"Glow:"})," Toggle the glow effect on/off by clicking the ",Ht.jsx("strong",{children:'"Glow: ON/OFF"'})," button in the same control panel."]}),Ht.jsxs("li",{children:[Ht.jsx("strong",{children:"Speed:"})," Adjust Earth's rotation speed by clicking the ",Ht.jsx("strong",{children:"left (◀)"})," and ",Ht.jsx("strong",{children:"right (▶)"}),' arrows next to "Speed" in the control panel. Each click increases or decreases the rotation speed.']}),Ht.jsxs("li",{children:[Ht.jsx("strong",{children:"Zoom:"})," Use the mouse scroll wheel or drag with your fingers to zoom in and out. You can also use the ",Ht.jsx("strong",{children:"OrbitControls"})," (move around the Earth by dragging) to adjust your view."]}),Ht.jsxs("li",{children:[Ht.jsx("strong",{children:"Axis:"})," Click the ",Ht.jsx("strong",{children:'"Axis: ON/OFF"'})," button to toggle the 23.5° tilt axis line. This helps visualize Earth's tilt."]})]}),Ht.jsx("p",{className:"footer",children:Ht.jsx("strong",{children:"Click on पृथ्वी at the top to start interacting with the controls!"})})]})}),Ht.jsxs("div",{className:`controls-container ${s?"show":""}`,children:[Ht.jsxs("div",{className:"control-item",children:[Ht.jsx("span",{children:"Clouds:"}),Ht.jsx("button",{className:`toggle-btn ${v?"":"off"}`,onClick:A,children:v?"ON":"OFF"})]}),Ht.jsxs("div",{className:"control-item",children:[Ht.jsx("span",{children:"Glow:"}),Ht.jsx("button",{className:`toggle-btn ${R?"":"off"}`,onClick:I,children:R?"ON":"OFF"})]}),Ht.jsxs("div",{className:"control-item",children:[Ht.jsx("span",{children:"Axis:"}),Ht.jsx("button",{className:`toggle-btn ${F?"":"off"}`,onClick:ft,children:F?"ON":"OFF"})]}),Ht.jsxs("div",{className:"control-item speed-control",children:[Ht.jsx("span",{children:"Speed:"}),Ht.jsx("button",{className:"speed-btn",onClick:st,children:"◀"}),Ht.jsx("span",{className:"speed-value",children:g}),Ht.jsx("button",{className:"speed-btn",onClick:lt,children:"▶"})]})]})]})},bA=LS.createRoot(document.getElementById("root"));bA.render(Ht.jsx(TA,{}));
