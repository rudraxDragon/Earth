(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Uf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function xS(){if(U_)return bo;U_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return bo.Fragment=t,bo.jsx=i,bo.jsxs=i,bo}var L_;function MS(){return L_||(L_=1,Uf.exports=xS()),Uf.exports}var Ee=MS(),Lf={exports:{}},Ao={},Nf={exports:{}},Of={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function yS(){return N_||(N_=1,function(o){function t(k,at){var Y=k.length;k.push(at);t:for(;0<Y;){var St=Y-1>>>1,U=k[St];if(0<l(U,at))k[St]=at,k[Y]=U,Y=St;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var at=k[0],Y=k.pop();if(Y!==at){k[0]=Y;t:for(var St=0,U=k.length,nt=U>>>1;St<nt;){var yt=2*(St+1)-1,bt=k[yt],q=yt+1,ht=k[q];if(0>l(bt,Y))q<U&&0>l(ht,bt)?(k[St]=ht,k[q]=Y,St=q):(k[St]=bt,k[yt]=Y,St=yt);else if(q<U&&0>l(ht,Y))k[St]=ht,k[q]=Y,St=q;else break t}}return at}function l(k,at){var Y=k.sortIndex-at.sortIndex;return Y!==0?Y:k.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,v=null,x=3,y=!1,R=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(k){for(var at=i(m);at!==null;){if(at.callback===null)s(m);else if(at.startTime<=k)s(m),at.sortIndex=at.expirationTime,t(p,at);else break;at=i(m)}}function D(k){if(w=!1,O(k),!R)if(i(p)!==null)R=!0,ft();else{var at=i(m);at!==null&&dt(D,at.startTime-k)}}var H=!1,z=-1,I=5,K=-1;function C(){return!(o.unstable_now()-K<I)}function A(){if(H){var k=o.unstable_now();K=k;var at=!0;try{t:{R=!1,w&&(w=!1,g(z),z=-1),y=!0;var Y=x;try{e:{for(O(k),v=i(p);v!==null&&!(v.expirationTime>k&&C());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var U=St(v.expirationTime<=k);if(k=o.unstable_now(),typeof U=="function"){v.callback=U,O(k),at=!0;break e}v===i(p)&&s(p),O(k)}else s(p);v=i(p)}if(v!==null)at=!0;else{var nt=i(m);nt!==null&&dt(D,nt.startTime-k),at=!1}}break t}finally{v=null,x=Y,y=!1}at=void 0}}finally{at?F():H=!1}}}var F;if(typeof P=="function")F=function(){P(A)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,st=ot.port2;ot.port1.onmessage=A,F=function(){st.postMessage(null)}}else F=function(){M(A,0)};function ft(){H||(H=!0,F())}function dt(k,at){z=M(function(){k(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_continueExecution=function(){R||y||(R=!0,ft())},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(k){switch(x){case 1:case 2:case 3:var at=3;break;default:at=x}var Y=x;x=at;try{return k()}finally{x=Y}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(k,at){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Y=x;x=k;try{return at()}finally{x=Y}},o.unstable_scheduleCallback=function(k,at,Y){var St=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?St+Y:St):Y=St,k){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,k={id:_++,callback:at,priorityLevel:k,startTime:Y,expirationTime:U,sortIndex:-1},Y>St?(k.sortIndex=Y,t(m,k),i(p)===null&&k===i(m)&&(w?(g(z),z=-1):w=!0,dt(D,Y-St))):(k.sortIndex=U,t(p,k),R||y||(R=!0,ft())),k},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(k){var at=x;return function(){var Y=x;x=at;try{return k.apply(this,arguments)}finally{x=Y}}}}(Of)),Of}var O_;function ES(){return O_||(O_=1,Nf.exports=yS()),Nf.exports}var Pf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function TS(){if(P_)return re;P_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,w={};function M(U,nt,yt){this.props=U,this.context=nt,this.refs=w,this.updater=yt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,nt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,nt,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=M.prototype;function P(U,nt,yt){this.props=U,this.context=nt,this.refs=w,this.updater=yt||y}var O=P.prototype=new g;O.constructor=P,R(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function I(U,nt,yt,bt,q,ht){return yt=ht.ref,{$$typeof:o,type:U,key:nt,ref:yt!==void 0?yt:null,props:ht}}function K(U,nt){return I(U.type,nt,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function A(U){var nt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(yt){return nt[yt]})}var F=/\/+/g;function ot(U,nt){return typeof U=="object"&&U!==null&&U.key!=null?A(""+U.key):nt.toString(36)}function st(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(st,st):(U.status="pending",U.then(function(nt){U.status==="pending"&&(U.status="fulfilled",U.value=nt)},function(nt){U.status==="pending"&&(U.status="rejected",U.reason=nt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function dt(U,nt,yt,bt,q){var ht=typeof U;(ht==="undefined"||ht==="boolean")&&(U=null);var gt=!1;if(U===null)gt=!0;else switch(ht){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(U.$$typeof){case o:case t:gt=!0;break;case _:return gt=U._init,dt(gt(U._payload),nt,yt,bt,q)}}if(gt)return q=q(U),gt=bt===""?"."+ot(U,0):bt,D(q)?(yt="",gt!=null&&(yt=gt.replace(F,"$&/")+"/"),dt(q,nt,yt,"",function(Yt){return Yt})):q!=null&&(C(q)&&(q=K(q,yt+(q.key==null||U&&U.key===q.key?"":(""+q.key).replace(F,"$&/")+"/")+gt)),nt.push(q)),1;gt=0;var Et=bt===""?".":bt+":";if(D(U))for(var At=0;At<U.length;At++)bt=U[At],ht=Et+ot(bt,At),gt+=dt(bt,nt,yt,ht,q);else if(At=x(U),typeof At=="function")for(U=At.call(U),At=0;!(bt=U.next()).done;)bt=bt.value,ht=Et+ot(bt,At++),gt+=dt(bt,nt,yt,ht,q);else if(ht==="object"){if(typeof U.then=="function")return dt(ft(U),nt,yt,bt,q);throw nt=String(U),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return gt}function k(U,nt,yt){if(U==null)return U;var bt=[],q=0;return dt(U,bt,"","",function(ht){return nt.call(yt,ht,q++)}),bt}function at(U){if(U._status===-1){var nt=U._result;nt=nt(),nt.then(function(yt){(U._status===0||U._status===-1)&&(U._status=1,U._result=yt)},function(yt){(U._status===0||U._status===-1)&&(U._status=2,U._result=yt)}),U._status===-1&&(U._status=0,U._result=nt)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function St(){}return re.Children={map:k,forEach:function(U,nt,yt){k(U,function(){nt.apply(this,arguments)},yt)},count:function(U){var nt=0;return k(U,function(){nt++}),nt},toArray:function(U){return k(U,function(nt){return nt})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},re.Component=M,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=s,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,re.act=function(){throw Error("act(...) is not supported in production builds of React.")},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cloneElement=function(U,nt,yt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var bt=R({},U.props),q=U.key,ht=void 0;if(nt!=null)for(gt in nt.ref!==void 0&&(ht=void 0),nt.key!==void 0&&(q=""+nt.key),nt)!z.call(nt,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&nt.ref===void 0||(bt[gt]=nt[gt]);var gt=arguments.length-2;if(gt===1)bt.children=yt;else if(1<gt){for(var Et=Array(gt),At=0;At<gt;At++)Et[At]=arguments[At+2];bt.children=Et}return I(U.type,q,void 0,void 0,ht,bt)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,nt,yt){var bt,q={},ht=null;if(nt!=null)for(bt in nt.key!==void 0&&(ht=""+nt.key),nt)z.call(nt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(q[bt]=nt[bt]);var gt=arguments.length-2;if(gt===1)q.children=yt;else if(1<gt){for(var Et=Array(gt),At=0;At<gt;At++)Et[At]=arguments[At+2];q.children=Et}if(U&&U.defaultProps)for(bt in gt=U.defaultProps,gt)q[bt]===void 0&&(q[bt]=gt[bt]);return I(U,ht,void 0,void 0,null,q)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=C,re.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:at}},re.memo=function(U,nt){return{$$typeof:m,type:U,compare:nt===void 0?null:nt}},re.startTransition=function(U){var nt=H.T,yt={};H.T=yt;try{var bt=U(),q=H.S;q!==null&&q(yt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(St,Y)}catch(ht){Y(ht)}finally{H.T=nt}},re.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},re.use=function(U){return H.H.use(U)},re.useActionState=function(U,nt,yt){return H.H.useActionState(U,nt,yt)},re.useCallback=function(U,nt){return H.H.useCallback(U,nt)},re.useContext=function(U){return H.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,nt){return H.H.useDeferredValue(U,nt)},re.useEffect=function(U,nt){return H.H.useEffect(U,nt)},re.useId=function(){return H.H.useId()},re.useImperativeHandle=function(U,nt,yt){return H.H.useImperativeHandle(U,nt,yt)},re.useInsertionEffect=function(U,nt){return H.H.useInsertionEffect(U,nt)},re.useLayoutEffect=function(U,nt){return H.H.useLayoutEffect(U,nt)},re.useMemo=function(U,nt){return H.H.useMemo(U,nt)},re.useOptimistic=function(U,nt){return H.H.useOptimistic(U,nt)},re.useReducer=function(U,nt,yt){return H.H.useReducer(U,nt,yt)},re.useRef=function(U){return H.H.useRef(U)},re.useState=function(U){return H.H.useState(U)},re.useSyncExternalStore=function(U,nt,yt){return H.H.useSyncExternalStore(U,nt,yt)},re.useTransition=function(){return H.H.useTransition()},re.version="19.0.0",re}var z_;function ed(){return z_||(z_=1,Pf.exports=TS()),Pf.exports}var zf={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function bS(){if(B_)return En;B_=1;var o=ed();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,_)},En.flushSync=function(p){var m=h.T,_=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=_,s.d.f()}},En.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},En.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},En.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):_==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},En.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},En.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},En.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},En.requestFormReset=function(p){s.d.r(p)},En.unstable_batchedUpdates=function(p,m){return p(m)},En.useFormState=function(p,m,_){return h.H.useFormState(p,m,_)},En.useFormStatus=function(){return h.H.useHostTransitionStatus()},En.version="19.0.0",En}var F_;function AS(){if(F_)return zf.exports;F_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),zf.exports=bS(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function RS(){if(I_)return Ao;I_=1;var o=ES(),t=ed(),i=AS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),y=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case g:return n=e.displayName||null,n!==null?n:K(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return K(e(n))}catch{}}return null}var C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,F,ot;function st(e){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+e+ot}var ft=!1;function dt(e,n){if(!e||ft)return"";ft=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var it=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){it=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var N=S.split(`
`),V=T.split(`
`);for(c=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(r===N.length||c===V.length)for(r=N.length-1,c=V.length-1;1<=r&&0<=c&&N[r]!==V[c];)c--;for(;1<=r&&0<=c;r--,c--)if(N[r]!==V[c]){if(r!==1||c!==1)do if(r--,c--,0>c||N[r]!==V[c]){var ct=`
`+N[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=c);break}}}finally{ft=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?st(a):""}function k(e){switch(e.tag){case 26:case 27:case 5:return st(e.type);case 16:return st("Lazy");case 13:return st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return e=dt(e.type,!1),e;case 11:return e=dt(e.type.render,!1),e;case 1:return e=dt(e.type,!0),e;default:return""}}function at(e){try{var n="";do n+=k(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Y(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function St(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(Y(e)!==e)throw Error(s(188))}function nt(e){var n=e.alternate;if(!n){if(n=Y(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return U(c),e;if(f===r)return U(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,r=f;break}if(T===r){S=!0,r=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,r=c;break}if(T===r){S=!0,r=f,a=c;break}T=T.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function yt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=yt(e),n!==null)return n;e=e.sibling}return null}var bt=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},gt=[],Et=-1;function At(e){return{current:e}}function Yt(e){0>Et||(e.current=gt[Et],gt[Et]=null,Et--)}function Nt(e,n){Et++,gt[Et]=e.current,e.current=n}var xe=At(null),Me=At(null),Qt=At(null),B=At(null);function je(e,n){switch(Nt(Qt,n),Nt(Me,e),Nt(xe,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?r_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=r_(e),n=o_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Yt(xe),Nt(xe,n)}function se(){Yt(xe),Yt(Me),Yt(Qt)}function ue(e){e.memoizedState!==null&&Nt(B,e);var n=xe.current,a=o_(n,e.type);n!==a&&(Nt(Me,e),Nt(xe,a))}function kt(e){Me.current===e&&(Yt(xe),Yt(Me)),B.current===e&&(Yt(B),xo._currentValue=ht)}var De=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,L=o.unstable_cancelCallback,E=o.unstable_shouldYield,tt=o.unstable_requestPaint,ut=o.unstable_now,xt=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,me=o.unstable_IdlePriority,Tt=o.log,Bt=o.unstable_setDisableYieldValue,Kt=null,Gt=null;function Ft(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Kt,e,void 0,(e.current.flags&128)===128)}catch{}}function ae(e){if(typeof Tt=="function"&&Bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Kt,e)}catch{}}var jt=Math.clz32?Math.clz32:Lt,Ue=Math.log,X=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(Ue(e)/X|0)|0}var rt=128,_t=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,f=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~c,a!==0?r=Ct(a):(f&=T,f!==0?r=Ct(f):e||(S=T&~S,S!==0&&(r=Ct(S))))):(T=a&~c,T!==0?r=Ct(T):f!==0?r=Ct(f):e||(S=a&~S,S!==0&&(r=Ct(S)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:r}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ge(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(){var e=rt;return rt<<=1,(rt&4194176)===0&&(rt=128),e}function Te(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function An(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Rn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Io(e,n,a,r,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,N=e.expirationTimes,V=e.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-jt(a),vt=1<<ct;T[ct]=0,N[ct]=-1;var it=V[ct];if(it!==null)for(V[ct]=null,ct=0;ct<it.length;ct++){var lt=it[ct];lt!==null&&(lt.lane&=-536870913)}a&=~vt}r!==0&&Dr(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Dr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-jt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194218}function yi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-jt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ur(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:b_(e.type))}function Ho(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Gn=Math.random().toString(36).slice(2),an="__reactFiber$"+Gn,sn="__reactProps$"+Gn,Oi="__reactContainer$"+Gn,Ts="__reactEvents$"+Gn,Cc="__reactListeners$"+Gn,wc="__reactHandles$"+Gn,Go="__reactResources$"+Gn,Ga="__reactMarker$"+Gn;function Lr(e){delete e[an],delete e[sn],delete e[Ts],delete e[Cc],delete e[wc]}function Pi(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[an])return a;e=u_(e)}return n}e=a,a=e.parentNode}return null}function b(e){if(e=e[an]||e[Oi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function $(e){var n=e[Go];return n||(n=e[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[Ga]=!0}var j=new Set,Mt={};function Rt(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(Mt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},qt={};function _e(e){return De.call(qt,e)?!0:De.call(ee,e)?!1:te.test(e)?qt[e]=!0:(ee[e]=!0,!1)}function ge(e,n,a){if(_e(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function He(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rn(e){var n=Zt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){r=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ve(e){e._valueTracker||(e._valueTracker=rn(e))}function Pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Zt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cn=/[\n"\\]/g;function hn(e){return e.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Le(e,n,a,r,c,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,S,ne(n)):a!=null?Mn(e,S,ne(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ne(T):e.removeAttribute("name")}function wn(e,n,a,r,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Mn(e,n,a){n==="number"&&ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xe(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function gn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function bs(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(bt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var gv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||gv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function md(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&pd(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&pd(e,f,n[f])}function Dc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(e){return Sv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uc=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Rs=null;function _d(e){var n=b(e);if(n&&(e=n.stateNode)){var a=e[sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Le(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[sn]||null;if(!c)throw Error(s(90));Le(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Pn(r)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Xe(e,!!a.multiple,n,!1)}}}var Nc=!1;function gd(e,n,a){if(Nc)return e(n,a);Nc=!0;try{var r=e(n);return r}finally{if(Nc=!1,(As!==null||Rs!==null)&&(bl(),As&&(n=As,e=Rs,Rs=As=null,_d(n),e)))for(n=0;n<e.length;n++)_d(e[n])}}function Nr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Oc=!1;if(Ot)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Oc=!1}var la=null,Pc=null,ko=null;function vd(){if(ko)return ko;var e,n=Pc,a=n.length,r,c="value"in la?la.value:la.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(r=1;r<=S&&n[a-r]===c[f-r];r++);return ko=c.slice(e,1<r?1-r:void 0)}function Xo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function Sd(){return!1}function Bn(e){function n(a,r,c,f,S){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Sd,this.isPropagationStopped=Sd,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Bn(Va),Pr=A({},Va,{view:0,detail:0}),xv=Bn(Pr),zc,Bc,zr,Yo=A({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(zc=e.screenX-zr.screenX,Bc=e.screenY-zr.screenY):Bc=zc=0,zr=e),zc)},movementY:function(e){return"movementY"in e?e.movementY:Bc}}),xd=Bn(Yo),Mv=A({},Yo,{dataTransfer:0}),yv=Bn(Mv),Ev=A({},Pr,{relatedTarget:0}),Fc=Bn(Ev),Tv=A({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=Bn(Tv),Av=A({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rv=Bn(Av),Cv=A({},Va,{data:0}),Md=Bn(Cv),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Uv[e])?!!n[e]:!1}function Ic(){return Lv}var Nv=A({},Pr,{key:function(e){if(e.key){var n=wv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ov=Bn(Nv),Pv=A({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=Bn(Pv),zv=A({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),Bv=Bn(zv),Fv=A({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=Bn(Fv),Hv=A({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=Bn(Hv),Vv=A({},Va,{newState:0,oldState:0}),kv=Bn(Vv),Xv=[9,13,27,32],Hc=Ot&&"CompositionEvent"in window,Br=null;Ot&&"documentMode"in document&&(Br=document.documentMode);var Wv=Ot&&"TextEvent"in window&&!Br,Ed=Ot&&(!Hc||Br&&8<Br&&11>=Br),Td=" ",bd=!1;function Ad(e,n){switch(e){case"keyup":return Xv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cs=!1;function qv(e,n){switch(e){case"compositionend":return Rd(n);case"keypress":return n.which!==32?null:(bd=!0,Td);case"textInput":return e=n.data,e===Td&&bd?null:e;default:return null}}function Yv(e,n){if(Cs)return e==="compositionend"||!Hc&&Ad(e,n)?(e=vd(),ko=Pc=la=null,Cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ed&&n.locale!=="ko"?null:n.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jv[e.type]:n==="textarea"}function wd(e,n,a,r){As?Rs?Rs.push(r):Rs=[r]:As=r,n=Dl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Fr=null,Ir=null;function Zv(e){e_(e,0)}function jo(e){var n=W(e);if(Pn(n))return e}function Dd(e,n){if(e==="change")return n}var Ud=!1;if(Ot){var Gc;if(Ot){var Vc="oninput"in document;if(!Vc){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),Vc=typeof Ld.oninput=="function"}Gc=Vc}else Gc=!1;Ud=Gc&&(!document.documentMode||9<document.documentMode)}function Nd(){Fr&&(Fr.detachEvent("onpropertychange",Od),Ir=Fr=null)}function Od(e){if(e.propertyName==="value"&&jo(Ir)){var n=[];wd(n,Ir,e,Lc(e)),gd(Zv,n)}}function Kv(e,n,a){e==="focusin"?(Nd(),Fr=n,Ir=a,Fr.attachEvent("onpropertychange",Od)):e==="focusout"&&Nd()}function Qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Ir)}function Jv(e,n){if(e==="click")return jo(n)}function $v(e,n){if(e==="input"||e==="change")return jo(n)}function t0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:t0;function Hr(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!Vn(e[c],n[c]))return!1}return!0}function Pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,n){var a=Pd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pd(a)}}function Bd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ui(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ui(e.document)}return n}function kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function e0(e,n){var a=Fd(n);n=e.focusedElem;var r=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Bd(n.ownerDocument.documentElement,n)){if(r!==null&&kc(n)){if(e=r.start,a=r.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(r.start,c);r=r.end===void 0?f:Math.min(r.end,c),!a.extend&&f>r&&(c=r,r=f,f=c),c=zd(n,f);var S=zd(n,r);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>r?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var n0=Ot&&"documentMode"in document&&11>=document.documentMode,ws=null,Xc=null,Gr=null,Wc=!1;function Id(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||ws==null||ws!==ui(r)||(r=ws,"selectionStart"in r&&kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Hr(Gr,r)||(Gr=r,r=Dl(Xc,"onSelect"),0<r.length&&(n=new qo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ws)))}function ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},qc={},Hd={};Ot&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Xa(e){if(qc[e])return qc[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hd)return qc[e]=n[a];return e}var Gd=Xa("animationend"),Vd=Xa("animationiteration"),kd=Xa("animationstart"),i0=Xa("transitionrun"),a0=Xa("transitionstart"),s0=Xa("transitioncancel"),Xd=Xa("transitionend"),Wd=new Map,qd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function fi(e,n){Wd.set(e,n),Rt(n,[e])}var Qn=[],Us=0,Yc=0;function Zo(){for(var e=Us,n=Yc=Us=0;n<e;){var a=Qn[n];Qn[n++]=null;var r=Qn[n];Qn[n++]=null;var c=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,r!==null&&c!==null){var S=r.pending;S===null?c.next=c:(c.next=S.next,S.next=c),r.pending=c}f!==0&&Yd(a,c,f)}}function Ko(e,n,a,r){Qn[Us++]=e,Qn[Us++]=n,Qn[Us++]=a,Qn[Us++]=r,Yc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function jc(e,n,a,r){return Ko(e,n,a,r),Qo(e)}function ca(e,n){return Ko(e,null,null,n),Qo(e)}function Yd(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-jt(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function Qo(e){if(50<ho)throw ho=0,tf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ls={},jd=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var a=jd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:at(n)},jd.set(e,n),n)}return{value:e,source:n,stack:at(n)}}var Ns=[],Os=0,Jo=null,$o=0,$n=[],ti=0,Wa=null,zi=1,Bi="";function qa(e,n){Ns[Os++]=$o,Ns[Os++]=Jo,Jo=e,$o=n}function Zd(e,n,a){$n[ti++]=zi,$n[ti++]=Bi,$n[ti++]=Wa,Wa=e;var r=zi;e=Bi;var c=32-jt(r)-1;r&=~(1<<c),a+=1;var f=32-jt(n)+c;if(30<f){var S=c-c%5;f=(r&(1<<S)-1).toString(32),r>>=S,c-=S,zi=1<<32-jt(n)+c|a<<c|r,Bi=f+e}else zi=1<<f|a<<c|r,Bi=e}function Zc(e){e.return!==null&&(qa(e,1),Zd(e,1,0))}function Kc(e){for(;e===Jo;)Jo=Ns[--Os],Ns[Os]=null,$o=Ns[--Os],Ns[Os]=null;for(;e===Wa;)Wa=$n[--ti],$n[ti]=null,Bi=$n[--ti],$n[ti]=null,zi=$n[--ti],$n[ti]=null}var Dn=null,vn=null,Ae=!1,hi=null,Ei=!1,Qc=Error(s(519));function Ya(e){var n=Error(s(418,""));throw Xr(Jn(n,e)),Qc}function Kd(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[an]=e,n[sn]=r,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)Se(mo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),wn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ve(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),bs(n,r.value,r.defaultValue,r.children),ve(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||s_(n.textContent,a)?(r.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),r.onScroll!=null&&Se("scroll",n),r.onScrollEnd!=null&&Se("scrollend",n),r.onClick!=null&&(n.onclick=Ul),n=!0):n=!1,n||Ya(e)}function Qd(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 3:case 27:Ei=!0;return;case 5:case 13:Ei=!1;return;default:Dn=Dn.return}}function Vr(e){if(e!==Dn)return!1;if(!Ae)return Qd(e),Ae=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&vn&&Ya(e),Qd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){vn=pi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}vn=null}}else vn=Dn?pi(e.stateNode.nextSibling):null;return!0}function kr(){vn=Dn=null,Ae=!1}function Xr(e){hi===null?hi=[e]:hi.push(e)}var Wr=Error(s(460)),Jd=Error(s(474)),Jc={then:function(){}};function $d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tl(){}function tp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(tl,tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Wr?Error(s(483)):e;default:if(typeof n.status=="string")n.then(tl,tl);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Wr?Error(s(483)):e}throw qr=n,Wr}}var qr=null;function ep(){if(qr===null)throw Error(s(459));var e=qr;return qr=null,e}var Ps=null,Yr=0;function el(e){var n=Yr;return Yr+=1,Ps===null&&(Ps=[]),tp(Ps,e,n)}function jr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function nl(e,n){throw n.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function np(e){var n=e._init;return n(e._payload)}function ip(e){function n(Z,G){if(e){var J=Z.deletions;J===null?(Z.deletions=[G],Z.flags|=16):J.push(G)}}function a(Z,G){if(!e)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function r(Z){for(var G=new Map;Z!==null;)Z.key!==null?G.set(Z.key,Z):G.set(Z.index,Z),Z=Z.sibling;return G}function c(Z,G){return Z=Ma(Z,G),Z.index=0,Z.sibling=null,Z}function f(Z,G,J){return Z.index=J,e?(J=Z.alternate,J!==null?(J=J.index,J<G?(Z.flags|=33554434,G):J):(Z.flags|=33554434,G)):(Z.flags|=1048576,G)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=33554434),Z}function T(Z,G,J,mt){return G===null||G.tag!==6?(G=qu(J,Z.mode,mt),G.return=Z,G):(G=c(G,J),G.return=Z,G)}function N(Z,G,J,mt){var It=J.type;return It===p?ct(Z,G,J.props.children,mt,J.key):G!==null&&(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&np(It)===G.type)?(G=c(G,J.props),jr(G,J),G.return=Z,G):(G=xl(J.type,J.key,J.props,null,Z.mode,mt),jr(G,J),G.return=Z,G)}function V(Z,G,J,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Yu(J,Z.mode,mt),G.return=Z,G):(G=c(G,J.children||[]),G.return=Z,G)}function ct(Z,G,J,mt,It){return G===null||G.tag!==7?(G=is(J,Z.mode,mt,It),G.return=Z,G):(G=c(G,J),G.return=Z,G)}function vt(Z,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=qu(""+G,Z.mode,J),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return J=xl(G.type,G.key,G.props,null,Z.mode,J),jr(J,G),J.return=Z,J;case d:return G=Yu(G,Z.mode,J),G.return=Z,G;case P:var mt=G._init;return G=mt(G._payload),vt(Z,G,J)}if(bt(G)||z(G))return G=is(G,Z.mode,J,null),G.return=Z,G;if(typeof G.then=="function")return vt(Z,el(G),J);if(G.$$typeof===y)return vt(Z,gl(Z,G),J);nl(Z,G)}return null}function it(Z,G,J,mt){var It=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return It!==null?null:T(Z,G,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===It?N(Z,G,J,mt):null;case d:return J.key===It?V(Z,G,J,mt):null;case P:return It=J._init,J=It(J._payload),it(Z,G,J,mt)}if(bt(J)||z(J))return It!==null?null:ct(Z,G,J,mt,null);if(typeof J.then=="function")return it(Z,G,el(J),mt);if(J.$$typeof===y)return it(Z,G,gl(Z,J),mt);nl(Z,J)}return null}function lt(Z,G,J,mt,It){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(J)||null,T(G,Z,""+mt,It);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case h:return Z=Z.get(mt.key===null?J:mt.key)||null,N(G,Z,mt,It);case d:return Z=Z.get(mt.key===null?J:mt.key)||null,V(G,Z,mt,It);case P:var fe=mt._init;return mt=fe(mt._payload),lt(Z,G,J,mt,It)}if(bt(mt)||z(mt))return Z=Z.get(J)||null,ct(G,Z,mt,It,null);if(typeof mt.then=="function")return lt(Z,G,J,el(mt),It);if(mt.$$typeof===y)return lt(Z,G,J,gl(G,mt),It);nl(G,mt)}return null}function Vt(Z,G,J,mt){for(var It=null,fe=null,Wt=G,Jt=G=0,mn=null;Wt!==null&&Jt<J.length;Jt++){Wt.index>Jt?(mn=Wt,Wt=null):mn=Wt.sibling;var Re=it(Z,Wt,J[Jt],mt);if(Re===null){Wt===null&&(Wt=mn);break}e&&Wt&&Re.alternate===null&&n(Z,Wt),G=f(Re,G,Jt),fe===null?It=Re:fe.sibling=Re,fe=Re,Wt=mn}if(Jt===J.length)return a(Z,Wt),Ae&&qa(Z,Jt),It;if(Wt===null){for(;Jt<J.length;Jt++)Wt=vt(Z,J[Jt],mt),Wt!==null&&(G=f(Wt,G,Jt),fe===null?It=Wt:fe.sibling=Wt,fe=Wt);return Ae&&qa(Z,Jt),It}for(Wt=r(Wt);Jt<J.length;Jt++)mn=lt(Wt,Z,Jt,J[Jt],mt),mn!==null&&(e&&mn.alternate!==null&&Wt.delete(mn.key===null?Jt:mn.key),G=f(mn,G,Jt),fe===null?It=mn:fe.sibling=mn,fe=mn);return e&&Wt.forEach(function(Ca){return n(Z,Ca)}),Ae&&qa(Z,Jt),It}function ie(Z,G,J,mt){if(J==null)throw Error(s(151));for(var It=null,fe=null,Wt=G,Jt=G=0,mn=null,Re=J.next();Wt!==null&&!Re.done;Jt++,Re=J.next()){Wt.index>Jt?(mn=Wt,Wt=null):mn=Wt.sibling;var Ca=it(Z,Wt,Re.value,mt);if(Ca===null){Wt===null&&(Wt=mn);break}e&&Wt&&Ca.alternate===null&&n(Z,Wt),G=f(Ca,G,Jt),fe===null?It=Ca:fe.sibling=Ca,fe=Ca,Wt=mn}if(Re.done)return a(Z,Wt),Ae&&qa(Z,Jt),It;if(Wt===null){for(;!Re.done;Jt++,Re=J.next())Re=vt(Z,Re.value,mt),Re!==null&&(G=f(Re,G,Jt),fe===null?It=Re:fe.sibling=Re,fe=Re);return Ae&&qa(Z,Jt),It}for(Wt=r(Wt);!Re.done;Jt++,Re=J.next())Re=lt(Wt,Z,Jt,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&Wt.delete(Re.key===null?Jt:Re.key),G=f(Re,G,Jt),fe===null?It=Re:fe.sibling=Re,fe=Re);return e&&Wt.forEach(function(SS){return n(Z,SS)}),Ae&&qa(Z,Jt),It}function Ye(Z,G,J,mt){if(typeof J=="object"&&J!==null&&J.type===p&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var It=J.key;G!==null;){if(G.key===It){if(It=J.type,It===p){if(G.tag===7){a(Z,G.sibling),mt=c(G,J.props.children),mt.return=Z,Z=mt;break t}}else if(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&np(It)===G.type){a(Z,G.sibling),mt=c(G,J.props),jr(mt,J),mt.return=Z,Z=mt;break t}a(Z,G);break}else n(Z,G);G=G.sibling}J.type===p?(mt=is(J.props.children,Z.mode,mt,J.key),mt.return=Z,Z=mt):(mt=xl(J.type,J.key,J.props,null,Z.mode,mt),jr(mt,J),mt.return=Z,Z=mt)}return S(Z);case d:t:{for(It=J.key;G!==null;){if(G.key===It)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(Z,G.sibling),mt=c(G,J.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,G);break}else n(Z,G);G=G.sibling}mt=Yu(J,Z.mode,mt),mt.return=Z,Z=mt}return S(Z);case P:return It=J._init,J=It(J._payload),Ye(Z,G,J,mt)}if(bt(J))return Vt(Z,G,J,mt);if(z(J)){if(It=z(J),typeof It!="function")throw Error(s(150));return J=It.call(J),ie(Z,G,J,mt)}if(typeof J.then=="function")return Ye(Z,G,el(J),mt);if(J.$$typeof===y)return Ye(Z,G,gl(Z,J),mt);nl(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(Z,G.sibling),mt=c(G,J),mt.return=Z,Z=mt):(a(Z,G),mt=qu(J,Z.mode,mt),mt.return=Z,Z=mt),S(Z)):a(Z,G)}return function(Z,G,J,mt){try{Yr=0;var It=Ye(Z,G,J,mt);return Ps=null,It}catch(Wt){if(Wt===Wr)throw Wt;var fe=ai(29,Wt,null,Z.mode);return fe.lanes=mt,fe.return=Z,fe}finally{}}}var ja=ip(!0),ap=ip(!1),zs=At(null),il=At(0);function sp(e,n){e=ji,Nt(il,e),Nt(zs,n),ji=e|n.baseLanes}function $c(){Nt(il,ji),Nt(zs,zs.current)}function tu(){ji=il.current,Yt(zs),Yt(il)}var ei=At(null),Ti=null;function ua(e){var n=e.alternate;Nt(on,on.current&1),Nt(ei,e),Ti===null&&(n===null||zs.current!==null||n.memoizedState!==null)&&(Ti=e)}function rp(e){if(e.tag===22){if(Nt(on,on.current),Nt(ei,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else fa()}function fa(){Nt(on,on.current),Nt(ei,ei.current)}function Fi(e){Yt(ei),Ti===e&&(Ti=null),Yt(on)}var on=At(0);function al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var r0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},o0=o.unstable_scheduleCallback,l0=o.unstable_NormalPriority,ln={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new r0,data:new Map,refCount:0}}function Zr(e){e.refCount--,e.refCount===0&&o0(l0,function(){e.controller.abort()})}var Kr=null,nu=0,Bs=0,Fs=null;function c0(e,n){if(Kr===null){var a=Kr=[];nu=0,Bs=cf(),Fs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return nu++,n.then(op,op),n}function op(){if(--nu===0&&Kr!==null){Fs!==null&&(Fs.status="fulfilled");var e=Kr;Kr=null,Bs=0,Fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function u0(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var lp=C.S;C.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&c0(e,n),lp!==null&&lp(e,n)};var Za=At(null);function iu(){var e=Za.current;return e!==null?e:Fe.pooledCache}function sl(e,n){n===null?Nt(Za,Za.current):Nt(Za,n.pool)}function cp(){var e=iu();return e===null?null:{parent:ln._currentValue,pool:e}}var ha=0,ce=null,Ne=null,Qe=null,rl=!1,Is=!1,Ka=!1,ol=0,Qr=0,Hs=null,f0=0;function Ze(){throw Error(s(321))}function au(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function su(e,n,a,r,c,f){return ha=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?Qa:da,Ka=!1,f=a(r,c),Ka=!1,Is&&(f=fp(n,a,r,c)),up(e),f}function up(e){C.H=bi;var n=Ne!==null&&Ne.next!==null;if(ha=0,Qe=Ne=ce=null,rl=!1,Qr=0,Hs=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&_l(e)&&(dn=!0))}function fp(e,n,a,r){ce=e;var c=0;do{if(Is&&(Hs=null),Qr=0,Is=!1,25<=c)throw Error(s(301));if(c+=1,Qe=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=Ja,f=n(a,r)}while(Is);return f}function h0(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?Jr(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ce.flags|=1024),n}function ru(){var e=ol!==0;return ol=0,e}function ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function lu(e){if(rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}rl=!1}ha=0,Qe=Ne=ce=null,Is=!1,Qr=ol=0,Hs=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ce.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Je(){if(Ne===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Qe===null?ce.memoizedState:Qe.next;if(n!==null)Qe=n,Ne=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Qe===null?ce.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}var ll;ll=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Jr(e){var n=Qr;return Qr+=1,Hs===null&&(Hs=[]),e=tp(Hs,e,n),n=ce,(Qe===null?n.memoizedState:Qe.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Qa:da),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===y)return yn(e)}throw Error(s(438,String(e)))}function cu(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ll(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=D;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=Je();return uu(n,Ne,e)}function uu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=S=null,N=null,V=n,ct=!1;do{var vt=V.lane&-536870913;if(vt!==V.lane?(ye&vt)===vt:(ha&vt)===vt){var it=V.revertLane;if(it===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),vt===Bs&&(ct=!0);else if((ha&it)===it){V=V.next,it===Bs&&(ct=!0);continue}else vt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=vt,S=f):N=N.next=vt,ce.lanes|=it,ya|=it;vt=V.action,Ka&&a(f,vt),f=V.hasEagerState?V.eagerState:a(f,vt)}else it={lane:vt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=it,S=f):N=N.next=it,ce.lanes|=vt,ya|=vt;V=V.next}while(V!==null&&V!==n);if(N===null?S=f:N.next=T,!Vn(f,e.memoizedState)&&(dn=!0,ct&&(a=Fs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=N,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function fu(e){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Vn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function hp(e,n,a){var r=ce,c=Je(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Vn((Ne||c).memoizedState,a);if(S&&(c.memoizedState=a,dn=!0),c=c.queue,pu(mp.bind(null,r,c,e),[e]),c.getSnapshot!==n||S||Qe!==null&&Qe.memoizedState.tag&1){if(r.flags|=2048,Gs(9,pp.bind(null,r,c,a,n),{destroy:void 0},null),Fe===null)throw Error(s(349));f||(ha&60)!==0||dp(r,n,a)}return a}function dp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=ll(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function pp(e,n,a,r){n.value=a,n.getSnapshot=r,_p(n)&&gp(e)}function mp(e,n,a){return a(function(){_p(n)&&gp(e)})}function _p(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function gp(e){var n=ca(e,2);n!==null&&Un(n,e,2)}function hu(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),Ka){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function vp(e,n,a,r){return e.baseState=a,uu(e,Ne,typeof r=="function"?r:Ii)}function d0(e,n,a,r,c){if(dl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};C.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Sp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Sp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=C.T,S={};C.T=S;try{var T=a(c,r),N=C.S;N!==null&&N(S,T),xp(e,n,T)}catch(V){du(e,n,V)}finally{C.T=f}}else try{f=a(c,r),xp(e,n,f)}catch(V){du(e,n,V)}}function xp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Mp(e,n,r)},function(r){return du(e,n,r)}):Mp(e,n,a)}function Mp(e,n,a){n.status="fulfilled",n.value=a,yp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Sp(e,a)))}function du(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,yp(n),n=n.next;while(n!==r)}e.action=null}function yp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ep(e,n){return n}function Tp(e,n){if(Ae){var a=Fe.formState;if(a!==null){t:{var r=ce;if(Ae){if(vn){e:{for(var c=vn,f=Ei;c.nodeType!==8;){if(!f){c=null;break e}if(c=pi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){vn=pi(c.nextSibling),r=c.data==="F!";break t}}Ya(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ep,lastRenderedState:n},a.queue=r,a=Vp.bind(null,ce,r),r.dispatch=a,r=hu(!1),f=Su.bind(null,ce,!1,r.queue),r=Fn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=d0.bind(null,ce,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function bp(e){var n=Je();return Ap(n,Ne,e)}function Ap(e,n,a){n=uu(e,n,Ep)[0],e=ul(Ii)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Jr(n):n;var r=Je(),c=r.queue,f=c.dispatch;return a!==r.memoizedState&&(ce.flags|=2048,Gs(9,p0.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function p0(e,n){e.action=n}function Rp(e){var n=Je(),a=Ne;if(a!==null)return Ap(n,a,e);Je(),n=n.memoizedState,a=Je();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Gs(e,n,a,r){return e={tag:e,create:n,inst:a,deps:r,next:null},n=ce.updateQueue,n===null&&(n=ll(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Cp(){return Je().memoizedState}function fl(e,n,a,r){var c=Fn();ce.flags|=e,c.memoizedState=Gs(1|n,a,{destroy:void 0},r===void 0?null:r)}function hl(e,n,a,r){var c=Je();r=r===void 0?null:r;var f=c.memoizedState.inst;Ne!==null&&r!==null&&au(r,Ne.memoizedState.deps)?c.memoizedState=Gs(n,a,f,r):(ce.flags|=e,c.memoizedState=Gs(1|n,a,f,r))}function wp(e,n){fl(8390656,8,e,n)}function pu(e,n){hl(2048,8,e,n)}function Dp(e,n){return hl(4,2,e,n)}function Up(e,n){return hl(4,4,e,n)}function Lp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Np(e,n,a){a=a!=null?a.concat([e]):null,hl(4,4,Lp.bind(null,n,e),a)}function mu(){}function Op(e,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&au(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Pp(e,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&au(n,r[1]))return r[0];if(r=e(),Ka){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[r,n],r}function _u(e,n,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Bm(),ce.lanes|=e,ya|=e,a)}function zp(e,n,a,r){return Vn(a,n)?a:zs.current!==null?(e=_u(e,a,r),Vn(e,n)||(dn=!0),e):(ha&42)===0?(dn=!0,e.memoizedState=a):(e=Bm(),ce.lanes|=e,ya|=e,n)}function Bp(e,n,a,r,c){var f=q.p;q.p=f!==0&&8>f?f:8;var S=C.T,T={};C.T=T,Su(e,!1,n,a);try{var N=c(),V=C.S;if(V!==null&&V(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ct=u0(N,r);$r(e,n,ct,qn(e))}else $r(e,n,r,qn(e))}catch(vt){$r(e,n,{then:function(){},status:"rejected",reason:vt},qn())}finally{q.p=f,C.T=S}}function m0(){}function gu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Fp(e).queue;Bp(e,c,n,ht,a===null?m0:function(){return Ip(e),a(r)})}function Fp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:ht},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ip(e){var n=Fp(e).next.queue;$r(e,n,{},qn())}function vu(){return yn(xo)}function Hp(){return Je().memoizedState}function Gp(){return Je().memoizedState}function _0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();e=_a(a);var r=ga(n,e,a);r!==null&&(Un(r,n,a),no(r,n,a)),n={cache:eu()},e.payload=n;return}n=n.return}}function g0(e,n,a){var r=qn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(e)?kp(n,a):(a=jc(e,n,a,r),a!==null&&(Un(a,e,r),Xp(a,n,r)))}function Vp(e,n,a){var r=qn();$r(e,n,a,r)}function $r(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(e))kp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Vn(T,S))return Ko(e,n,c,0),Fe===null&&Zo(),!1}catch{}finally{}if(a=jc(e,n,c,r),a!==null)return Un(a,e,r),Xp(a,n,r),!0}return!1}function Su(e,n,a,r){if(r={lane:2,revertLane:cf(),action:r,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(n)throw Error(s(479))}else n=jc(e,a,r,2),n!==null&&Un(n,e,2)}function dl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function kp(e,n){Is=rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Xp(e,n,a){if((a&4194176)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,yi(e,a)}}var bi={readContext:yn,use:cl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze};bi.useCacheRefresh=Ze,bi.useMemoCache=Ze,bi.useHostTransitionStatus=Ze,bi.useFormState=Ze,bi.useActionState=Ze,bi.useOptimistic=Ze;var Qa={readContext:yn,use:cl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:wp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,fl(4194308,4,Lp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){fl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var r=e();if(Ka){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Fn();if(a!==void 0){var c=a(n);if(Ka){ae(!0);try{a(n)}finally{ae(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=g0.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=hu(e);var n=e.queue,a=Vp.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(e,n){var a=Fn();return _u(a,e,n)},useTransition:function(){var e=hu(!1);return e=Bp.bind(null,ce,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ce,c=Fn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Fe===null)throw Error(s(349));(ye&60)!==0||dp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,wp(mp.bind(null,r,f,e),[e]),r.flags|=2048,Gs(9,pp.bind(null,r,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Fn(),n=Fe.identifierPrefix;if(Ae){var a=Bi,r=zi;a=(r&~(1<<32-jt(r)-1)).toString(32)+a,n=":"+n+"R"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=f0++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Fn().memoizedState=_0.bind(null,ce)}};Qa.useMemoCache=cu,Qa.useHostTransitionStatus=vu,Qa.useFormState=Tp,Qa.useActionState=Tp,Qa.useOptimistic=function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Su.bind(null,ce,!0,a),a.dispatch=n,[e,n]};var da={readContext:yn,use:cl,useCallback:Op,useContext:yn,useEffect:pu,useImperativeHandle:Np,useInsertionEffect:Dp,useLayoutEffect:Up,useMemo:Pp,useReducer:ul,useRef:Cp,useState:function(){return ul(Ii)},useDebugValue:mu,useDeferredValue:function(e,n){var a=Je();return zp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=ul(Ii)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:hp,useId:Hp};da.useCacheRefresh=Gp,da.useMemoCache=cu,da.useHostTransitionStatus=vu,da.useFormState=bp,da.useActionState=bp,da.useOptimistic=function(e,n){var a=Je();return vp(a,Ne,e,n)};var Ja={readContext:yn,use:cl,useCallback:Op,useContext:yn,useEffect:pu,useImperativeHandle:Np,useInsertionEffect:Dp,useLayoutEffect:Up,useMemo:Pp,useReducer:fu,useRef:Cp,useState:function(){return fu(Ii)},useDebugValue:mu,useDeferredValue:function(e,n){var a=Je();return Ne===null?_u(a,e,n):zp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=fu(Ii)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:Jr(e),n]},useSyncExternalStore:hp,useId:Hp};Ja.useCacheRefresh=Gp,Ja.useMemoCache=cu,Ja.useHostTransitionStatus=vu,Ja.useFormState=Rp,Ja.useActionState=Rp,Ja.useOptimistic=function(e,n){var a=Je();return Ne!==null?vp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])};function xu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:A({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mu={isMounted:function(e){return(e=e._reactInternals)?Y(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var r=qn(),c=_a(r);c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,r),n!==null&&(Un(n,e,r),no(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=qn(),c=_a(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,r),n!==null&&(Un(n,e,r),no(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qn(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=ga(e,r,a),n!==null&&(Un(n,e,a),no(n,e,a))}};function Wp(e,n,a,r,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,S):n.prototype&&n.prototype.isPureReactComponent?!Hr(a,r)||!Hr(c,f):!0}function qp(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Mu.enqueueReplaceState(n,n.state,null)}function $a(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=A({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yp(e){pl(e)}function jp(e){console.error(e)}function Zp(e){pl(e)}function ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Kp(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function yu(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(e,n)},a}function Qp(e){return e=_a(e),e.tag=3,e}function Jp(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Kp(n,a,r)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Kp(n,a,r),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function v0(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 13:return Ti===null?af():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),rf(e,r,c)),!1;case 22:return a.flags|=65536,r===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),rf(e,r,c)),!1}throw Error(s(435,a.tag))}return rf(e,r,c),af(),!1}if(Ae)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Qc&&(e=Error(s(422),{cause:r}),Xr(Jn(e,a)))):(r!==Qc&&(n=Error(s(423),{cause:r}),Xr(Jn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Jn(r,a),c=yu(e.stateNode,r,c),Bu(e,c),qe!==4&&(qe=2)),!1;var f=Error(s(520),{cause:r});if(f=Jn(f,a),uo===null?uo=[f]:uo.push(f),qe!==4&&(qe=2),n===null)return!0;r=Jn(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=yu(a.stateNode,r,e),Bu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Qp(c),Jp(c,e,a,r),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var $p=Error(s(461)),dn=!1;function Sn(e,n,a,r){n.child=e===null?ap(n,null,a,r):ja(n,e.child,a,r)}function tm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var S={};for(var T in r)T!=="ref"&&(S[T]=r[T])}else S=r;return es(n),r=su(e,n,a,S,f,c),T=ru(),e!==null&&!dn?(ou(e,n,c),Hi(e,n,c)):(Ae&&T&&Zc(n),n.flags|=1,Sn(e,n,r,c),n.child)}function em(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,nm(e,n,f,r,c)):(e=xl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Uu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hr,a(S,r)&&e.ref===n.ref)return Hi(e,n,c)}return n.flags|=1,e=Ma(f,r),e.ref=n.ref,e.return=n,n.child=e}function nm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Hr(f,r)&&e.ref===n.ref)if(dn=!1,n.pendingProps=r=f,Uu(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Hi(e,n,c)}return Eu(e,n,a,r,c)}function im(e,n,a){var r=n.pendingProps,c=r.children,f=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(to(e,n),r.mode==="hidden"||f){if((n.flags&128)!==0){if(r=S!==null?S.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return am(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,S!==null?S.cachePool:null),S!==null?sp(n,S):$c(),rp(n);else return n.lanes=n.childLanes=536870912,am(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(sl(n,S.cachePool),sp(n,S),fa(),n.memoizedState=null):(e!==null&&sl(n,null),$c(),fa());return Sn(e,n,c,a),n.child}function am(e,n,a,r){var c=iu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&sl(n,null),$c(),rp(n),e!==null&&eo(e,n,r,!0),null}function to(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Eu(e,n,a,r,c){return es(n),a=su(e,n,a,r,void 0,c),r=ru(),e!==null&&!dn?(ou(e,n,c),Hi(e,n,c)):(Ae&&r&&Zc(n),n.flags|=1,Sn(e,n,a,c),n.child)}function sm(e,n,a,r,c,f){return es(n),n.updateQueue=null,a=fp(n,r,a,c),up(e),r=ru(),e!==null&&!dn?(ou(e,n,f),Hi(e,n,f)):(Ae&&r&&Zc(n),n.flags|=1,Sn(e,n,a,f),n.child)}function rm(e,n,a,r,c){if(es(n),n.stateNode===null){var f=Ls,S=a.contextType;typeof S=="object"&&S!==null&&(f=yn(S)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?yn(S):Ls,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(xu(n,a,S,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Mu.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,N=$a(a,T);f.props=N;var V=f.context,ct=a.contextType;S=Ls,typeof ct=="object"&&ct!==null&&(S=yn(ct));var vt=a.getDerivedStateFromProps;ct=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||V!==S)&&qp(n,f,r,S),ma=!1;var it=n.memoizedState;f.state=it,ao(n,r,f,c),io(),V=n.memoizedState,T||it!==V||ma?(typeof vt=="function"&&(xu(n,a,vt,r),V=n.memoizedState),(N=ma||Wp(n,a,N,r,it,V,S))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=V),f.props=r,f.state=V,f.context=S,r=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,zu(e,n),S=n.memoizedProps,ct=$a(a,S),f.props=ct,vt=n.pendingProps,it=f.context,V=a.contextType,N=Ls,typeof V=="object"&&V!==null&&(N=yn(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==vt||it!==N)&&qp(n,f,r,N),ma=!1,it=n.memoizedState,f.state=it,ao(n,r,f,c),io();var lt=n.memoizedState;S!==vt||it!==lt||ma||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof T=="function"&&(xu(n,a,T,r),lt=n.memoizedState),(ct=ma||Wp(n,a,ct,r,it,lt,N)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(V||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=N,r=ct):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,to(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ja(n,e.child,null,c),n.child=ja(n,null,a,c)):Sn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Hi(e,n,c),e}function om(e,n,a,r){return kr(),n.flags|=256,Sn(e,n,a,r),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(e){return{baseLanes:e,cachePool:cp()}}function Au(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function lm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?ua(n):fa(),Ae){var T=vn,N;if(N=T){t:{for(N=T,T=Ei;N.nodeType!==8;){if(!T){T=null;break t}if(N=pi(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Wa!==null?{id:zi,overflow:Bi}:null,retryLane:536870912},N=ai(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Dn=n,vn=null,N=!0):N=!1}N||Ya(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Fi(n)}return T=r.children,r=r.fallback,c?(fa(),c=n.mode,T=Cu({mode:"hidden",children:T},c),r=is(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(e,S,a),n.memoizedState=Tu,r):(ua(n),Ru(n,T))}if(N=e.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(ua(n),n.flags&=-257,n=wu(e,n,a)):n.memoizedState!==null?(fa(),n.child=e.child,n.flags|=128,n=null):(fa(),c=r.fallback,T=n.mode,r=Cu({mode:"visible",children:r.children},T),c=is(c,T,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,ja(n,e.child,null,a),r=n.child,r.memoizedState=bu(a),r.childLanes=Au(e,S,a),n.memoizedState=Tu,n=c);else if(ua(n),T.data==="$!"){if(S=T.nextSibling&&T.nextSibling.dataset,S)var V=S.dgst;S=V,r=Error(s(419)),r.stack="",r.digest=S,Xr({value:r,source:null,stack:null}),n=wu(e,n,a)}else if(dn||eo(e,n,a,!1),S=(a&e.childLanes)!==0,dn||S){if(S=Fe,S!==null){if(r=a&-a,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(S.suspendedLanes|a))!==0?0:r,r!==0&&r!==N.retryLane)throw N.retryLane=r,ca(e,r),Un(S,e,r),$p}T.data==="$?"||af(),n=wu(e,n,a)}else T.data==="$?"?(n.flags|=128,n.child=e.child,n=N0.bind(null,e),T._reactRetry=n,n=null):(e=N.treeContext,vn=pi(T.nextSibling),Dn=n,Ae=!0,hi=null,Ei=!1,e!==null&&($n[ti++]=zi,$n[ti++]=Bi,$n[ti++]=Wa,zi=e.id,Bi=e.overflow,Wa=n),n=Ru(n,r.children),n.flags|=4096);return n}return c?(fa(),c=r.fallback,T=n.mode,N=e.child,V=N.sibling,r=Ma(N,{mode:"hidden",children:r.children}),r.subtreeFlags=N.subtreeFlags&31457280,V!==null?c=Ma(V,c):(c=is(c,T,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,T=e.child.memoizedState,T===null?T=bu(a):(N=T.cachePool,N!==null?(V=ln._currentValue,N=N.parent!==V?{parent:V,pool:V}:N):N=cp(),T={baseLanes:T.baseLanes|a,cachePool:N}),c.memoizedState=T,c.childLanes=Au(e,S,a),n.memoizedState=Tu,r):(ua(n),a=e.child,e=a.sibling,a=Ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Ru(e,n){return n=Cu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cu(e,n){return Om(e,n,0,null)}function wu(e,n,a){return ja(n,e.child,null,a),e=Ru(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Nu(e.return,n,a)}function Du(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function um(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(Sn(e,n,r.children,a),r=on.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cm(e,a,n);else if(e.tag===19)cm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Nt(on,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&al(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&al(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(eo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function S0(e,n,a){switch(n.tag){case 3:je(n,n.stateNode.containerInfo),pa(n,ln,e.memoizedState.cache),kr();break;case 27:case 5:ue(n);break;case 4:je(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lm(e,n,a):(ua(n),e=Hi(e,n,a),e!==null?e.sibling:null);ua(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(eo(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return um(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Nt(on,on.current),r)break;return null;case 22:case 23:return n.lanes=0,im(e,n,a);case 24:pa(n,ln,e.memoizedState.cache)}return Hi(e,n,a)}function fm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Uu(e,a)&&(n.flags&128)===0)return dn=!1,S0(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Ae&&(n.flags&1048576)!==0&&Zd(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")Wu(r)?(e=$a(r,e),n.tag=1,n=rm(null,n,r,e,a)):(n.tag=0,n=Eu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===R){n.tag=11,n=tm(null,n,r,e,a);break t}else if(c===g){n.tag=14,n=em(null,n,r,e,a);break t}}throw n=K(r)||r,Error(s(306,n,""))}}return n;case 0:return Eu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=$a(r,n.pendingProps),rm(e,n,r,c,a);case 3:t:{if(je(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var f=n.pendingProps;c=n.memoizedState,r=c.element,zu(e,n),ao(n,f,null,a);var S=n.memoizedState;if(f=S.cache,pa(n,ln,f),f!==c.cache&&Ou(n,[ln],a,!0),io(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=om(e,n,f,a);break t}else if(f!==r){r=Jn(Error(s(424)),n),Xr(r),n=om(e,n,f,a);break t}else for(vn=pi(n.stateNode.containerInfo.firstChild),Dn=n,Ae=!0,hi=null,Ei=!0,a=ap(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(kr(),f===r){n=Hi(e,n,a);break t}Sn(e,n,f,a)}n=n.child}return n;case 26:return to(e,n),e===null?(a=p_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,r=Ll(Qt.current).createElement(a),r[an]=n,r[sn]=e,xn(r,a,e),Q(r),n.stateNode=r):n.memoizedState=p_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ue(n),e===null&&Ae&&(r=n.stateNode=f_(n.type,n.pendingProps,Qt.current),Dn=n,Ei=!0,vn=pi(r.firstChild)),r=n.pendingProps.children,e!==null||Ae?Sn(e,n,r,a):n.child=ja(n,null,r,a),to(e,n),n.child;case 5:return e===null&&Ae&&((c=r=vn)&&(r=Z0(r,n.type,n.pendingProps,Ei),r!==null?(n.stateNode=r,Dn=n,vn=pi(r.firstChild),Ei=!1,c=!0):c=!1),c||Ya(n)),ue(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,r=f.children,vf(c,f)?r=null:S!==null&&vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=su(e,n,h0,null,null,a),xo._currentValue=c),to(e,n),Sn(e,n,r,a),n.child;case 6:return e===null&&Ae&&((e=a=vn)&&(a=K0(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Dn=n,vn=null,e=!0):e=!1),e||Ya(n)),null;case 13:return lm(e,n,a);case 4:return je(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ja(n,null,r,a):Sn(e,n,r,a),n.child;case 11:return tm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),Sn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,es(n),c=yn(c),r=r(c),n.flags|=1,Sn(e,n,r,a),n.child;case 14:return em(e,n,n.type,n.pendingProps,a);case 15:return nm(e,n,n.type,n.pendingProps,a);case 19:return um(e,n,a);case 22:return im(e,n,a);case 24:return es(n),r=yn(ln),e===null?(c=iu(),c===null&&(c=Fe,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Pu(n),pa(n,ln,c)):((e.lanes&a)!==0&&(zu(e,n),ao(n,null,null,a),io()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,ln,r)):(r=f.cache,pa(n,ln,r),r!==c.cache&&Ou(n,[ln],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var Lu=At(null),ts=null,Gi=null;function pa(e,n,a){Nt(Lu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=Lu.current,Yt(Lu)}function Nu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Ou(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Nu(f.return,a,e),r||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Nu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function eo(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var T=c.type;Vn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===B.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&Ou(n,e,a,r),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function es(e){ts=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return hm(ts,e)}function gl(e,n){return ts===null&&es(e),hm(e,n)}function hm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var ma=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ke&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Qo(e),Yd(e,null,a),n}return Ko(e,r,n,a),Qo(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,yi(e,a)}}function Bu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function io(){if(Fu){var e=Fs;if(e!==null)throw e}}function ao(e,n,a,r){Fu=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var N=T,V=N.next;N.next=null,S===null?f=V:S.next=V,S=N;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==S&&(T===null?ct.firstBaseUpdate=V:T.next=V,ct.lastBaseUpdate=N))}if(f!==null){var vt=c.baseState;S=0,ct=V=N=null,T=f;do{var it=T.lane&-536870913,lt=it!==T.lane;if(lt?(ye&it)===it:(r&it)===it){it!==0&&it===Bs&&(Fu=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=e,ie=T;it=n;var Ye=a;switch(ie.tag){case 1:if(Vt=ie.payload,typeof Vt=="function"){vt=Vt.call(Ye,vt,it);break t}vt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ie.payload,it=typeof Vt=="function"?Vt.call(Ye,vt,it):Vt,it==null)break t;vt=A({},vt,it);break t;case 2:ma=!0}}it=T.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?(V=ct=lt,N=vt):ct=ct.next=lt,S|=it;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ct===null&&(N=vt),c.baseState=N,c.firstBaseUpdate=V,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),ya|=S,e.lanes=S,e.memoizedState=vt}}function dm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function pm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dm(a[e],n)}function so(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,S=a.inst;r=f(),S.destroy=r}a=a.next}while(a!==c)}}catch(T){Be(n,n.return,T)}}function va(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var S=r.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var N=a;try{T()}catch(V){Be(c,N,V)}}}r=r.next}while(r!==f)}}catch(V){Be(n,n.return,V)}}function mm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pm(n,a)}catch(r){Be(e,e.return,r)}}}function _m(e,n,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Be(e,n,r)}}function ns(e,n){try{var a=e.ref;if(a!==null){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=r;break;default:c=r}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){Be(e,n,f)}}function kn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Be(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(e,n,c)}else a.current=null}function gm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Be(e,e.return,c)}}function vm(e,n,a){try{var r=e.stateNode;X0(r,e.type,a,n),r[sn]=n}catch(c){Be(e,e.return,c)}}function Sm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Iu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ul));else if(r!==4&&r!==27&&(e=e.child,e!==null))for(Hu(e,n,a),e=e.sibling;e!==null;)Hu(e,n,a),e=e.sibling}function vl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&r!==27&&(e=e.child,e!==null))for(vl(e,n,a),e=e.sibling;e!==null;)vl(e,n,a),e=e.sibling}var ki=!1,We=!1,Gu=!1,xm=typeof WeakSet=="function"?WeakSet:Set,pn=null,Mm=!1;function x0(e,n){if(e=e.containerInfo,_f=Fl,e=Fd(e),kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,N=-1,V=0,ct=0,vt=e,it=null;e:for(;;){for(var lt;vt!==a||c!==0&&vt.nodeType!==3||(T=S+c),vt!==f||r!==0&&vt.nodeType!==3||(N=S+r),vt.nodeType===3&&(S+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)it=vt,vt=lt;for(;;){if(vt===e)break e;if(it===a&&++V===c&&(T=S),it===f&&++ct===r&&(N=S),(lt=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=lt}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(gf={focusedElem:e,selectionRange:a},Fl=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=$a(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Be(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Mf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}return Vt=Mm,Mm=!1,Vt}function ym(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(e,a),r&4&&so(5,a);break;case 1:if(Wi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(T){Be(a,a.return,T)}else{var c=$a(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Be(a,a.return,T)}}r&64&&mm(a),r&512&&ns(a,a.return);break;case 3:if(Wi(e,a),r&64&&(r=a.updateQueue,r!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{pm(r,e)}catch(T){Be(a,a.return,T)}}break;case 26:Wi(e,a),r&512&&ns(a,a.return);break;case 27:case 5:Wi(e,a),n===null&&r&4&&gm(a),r&512&&ns(a,a.return);break;case 12:Wi(e,a);break;case 13:Wi(e,a),r&4&&bm(e,a);break;case 22:if(c=a.memoizedState!==null||ki,!c){n=n!==null&&n.memoizedState!==null||We;var f=ki,S=We;ki=c,(We=n)&&!S?Sa(e,a,(a.subtreeFlags&8772)!==0):Wi(e,a),ki=f,We=S}r&512&&(a.memoizedProps.mode==="manual"?ns(a,a.return):kn(a,a.return));break;default:Wi(e,a)}}function Em(e){var n=e.alternate;n!==null&&(e.alternate=null,Em(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Lr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Xn=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Tm(e,n,a),a=a.sibling}function Tm(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Kt,a)}catch{}switch(a.tag){case 26:We||kn(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||kn(a,n);var r=$e,c=Xn;for($e=a.stateNode,Xi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Lr(a),$e=r,Xn=c;break;case 5:We||kn(a,n);case 6:c=$e;var f=Xn;if($e=null,Xi(e,n,a),$e=c,Xn=f,$e!==null)if(Xn)try{e=$e,r=a.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)}catch(S){Be(a,n,S)}else try{$e.removeChild(a.stateNode)}catch(S){Be(a,n,S)}break;case 18:$e!==null&&(Xn?(n=$e,a=a.stateNode,n.nodeType===8?xf(n.parentNode,a):n.nodeType===1&&xf(n,a),To(n)):xf($e,a.stateNode));break;case 4:r=$e,c=Xn,$e=a.stateNode.containerInfo,Xn=!0,Xi(e,n,a),$e=r,Xn=c;break;case 0:case 11:case 14:case 15:We||va(2,a,n),We||va(4,a,n),Xi(e,n,a);break;case 1:We||(kn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&_m(a,n,r)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:We||kn(a,n),We=(r=We)||a.memoizedState!==null,Xi(e,n,a),We=r;break;default:Xi(e,n,a)}}function bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(a){Be(n,n.return,a)}}function M0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new xm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new xm),n;default:throw Error(s(435,e.tag))}}function Vu(e,n){var a=M0(e);n.forEach(function(r){var c=O0.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function ni(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:case 5:$e=T.stateNode,Xn=!1;break t;case 3:$e=T.stateNode.containerInfo,Xn=!0;break t;case 4:$e=T.stateNode.containerInfo,Xn=!0;break t}T=T.return}if($e===null)throw Error(s(160));Tm(f,S,c),$e=null,Xn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Am(n,e),n=n.sibling}var di=null;function Am(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(n,e),ii(e),r&4&&(va(3,e,e.return),so(3,e),va(5,e,e.return));break;case 1:ni(n,e),ii(e),r&512&&(We||a===null||kn(a,a.return)),r&64&&ki&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=di;if(ni(n,e),ii(e),r&512&&(We||a===null||kn(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ga]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),xn(f,r,a),f[an]=e,Q(f),r=f;break t;case"link":var S=g_("link","href",c).get(r+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;case"meta":if(S=g_("meta","content",c).get(r+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=e,Q(f),r=f}e.stateNode=r}else v_(c,e.type,e.stateNode);else e.stateNode=__(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?v_(c,e.type,e.stateNode):__(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&vm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var N=c.firstChild;N;){var V=N.nextSibling,ct=N.nodeName;N[Ga]||ct==="HEAD"||ct==="BODY"||ct==="SCRIPT"||ct==="STYLE"||ct==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=V}for(var vt=e.type,it=c.attributes;it.length;)c.removeAttributeNode(it[0]);xn(c,vt,f),c[an]=e,c[sn]=f}catch(Vt){Be(e,e.return,Vt)}}case 5:if(ni(n,e),ii(e),r&512&&(We||a===null||kn(a,a.return)),e.flags&32){c=e.stateNode;try{zn(c,"")}catch(Vt){Be(e,e.return,Vt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,vm(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Gu=!0);break;case 6:if(ni(n,e),ii(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Vt){Be(e,e.return,Vt)}}break;case 3:if(Pl=null,c=di,di=Nl(n.containerInfo),ni(n,e),di=c,ii(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(Vt){Be(e,e.return,Vt)}Gu&&(Gu=!1,Rm(e));break;case 4:r=di,di=Nl(e.stateNode.containerInfo),ni(n,e),ii(e),di=r;break;case 12:ni(n,e),ii(e);break;case 13:ni(n,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=ut()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Vu(e,r)));break;case 22:if(r&512&&(We||a===null||kn(a,a.return)),N=e.memoizedState!==null,V=a!==null&&a.memoizedState!==null,ct=ki,vt=We,ki=ct||N,We=vt||V,ni(n,e),We=vt,ki=ct,ii(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,r&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=ki||We,a===null||V||n||Vs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(c=V.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=V.stateNode,T=V.memoizedProps.style;var lt=T!=null&&T.hasOwnProperty("display")?T.display:null;S.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Vt){Be(V,V.return,Vt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=N?"":V.memoizedProps}catch(Vt){Be(V,V.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Vu(e,a))));break;case 19:ni(n,e),ii(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Vu(e,r)));break;case 21:break;default:ni(n,e),ii(e)}}function ii(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Sm(a)){var r=a;break t}a=a.return}throw Error(s(160))}switch(r.tag){case 27:var c=r.stateNode,f=Iu(e);vl(e,f,c);break;case 5:var S=r.stateNode;r.flags&32&&(zn(S,""),r.flags&=-33);var T=Iu(e);vl(e,T,S);break;case 3:case 4:var N=r.stateNode.containerInfo,V=Iu(e);Hu(e,V,N);break;default:throw Error(s(161))}}}catch(ct){Be(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Rm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ym(e,n.alternate,n),n=n.sibling}function Vs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),Vs(n);break;case 1:kn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_m(n,n.return,a),Vs(n);break;case 26:case 27:case 5:kn(n,n.return),Vs(n);break;case 22:kn(n,n.return),n.memoizedState===null&&Vs(n);break;default:Vs(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),so(4,f);break;case 1:if(Sa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){Be(r,r.return,V)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)dm(N[c],T)}catch(V){Be(r,r.return,V)}}a&&S&64&&mm(f),ns(f,f.return);break;case 26:case 27:case 5:Sa(c,f,a),a&&r===null&&S&4&&gm(f),ns(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&S&4&&bm(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),ns(f,f.return);break;default:Sa(c,f,a)}n=n.sibling}}function ku(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zr(a))}function Xu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e))}function xa(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Cm(e,n,a,r),n=n.sibling}function Cm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xa(e,n,a,r),c&2048&&so(9,n);break;case 3:xa(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e)));break;case 12:if(c&2048){xa(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Be(n,n.return,N)}}else xa(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?xa(e,n,a,r):ro(e,n):f._visibility&4?xa(e,n,a,r):(f._visibility|=4,ks(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:xa(e,n,a,r),c&2048&&Xu(n.alternate,n);break;default:xa(e,n,a,r)}}function ks(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,N=r,V=S.flags;switch(S.tag){case 0:case 11:case 15:ks(f,S,T,N,c),so(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&4?ks(f,S,T,N,c):ro(f,S):(ct._visibility|=4,ks(f,S,T,N,c)),c&&V&2048&&ku(S.alternate,S);break;case 24:ks(f,S,T,N,c),c&&V&2048&&Xu(S.alternate,S);break;default:ks(f,S,T,N,c)}n=n.sibling}}function ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ro(a,r),c&2048&&ku(r.alternate,r);break;case 24:ro(a,r),c&2048&&Xu(r.alternate,r);break;default:ro(a,r)}n=n.sibling}}var oo=8192;function Xs(e){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 26:Xs(e),e.flags&oo&&e.memoizedState!==null&&cS(di,e.memoizedState,e.memoizedProps);break;case 5:Xs(e);break;case 3:case 4:var n=di;di=Nl(e.stateNode.containerInfo),Xs(e),di=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oo,oo=16777216,Xs(e),oo=n):Xs(e));break;default:Xs(e)}}function Dm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Lm(r,e)}Dm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&va(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Sl(e)):lo(e);break;default:lo(e)}}function Sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Lm(r,e)}Dm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Sl(n));break;default:Sl(n)}e=e.sibling}}function Lm(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Zr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,pn=r;else t:for(a=e;pn!==null;){r=pn;var c=r.sibling,f=r.return;if(Em(r),r===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}function y0(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,n,a,r){return new y0(e,n,a,r)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,n){var a=e.alternate;return a===null?(a=ai(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Nm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,r,c,f){var S=0;if(r=e,typeof e=="function")Wu(e)&&(S=1);else if(typeof e=="string")S=oS(e,a,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return is(a.children,c,f,n);case m:S=8,c|=24;break;case _:return e=ai(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case w:return e=ai(13,a,n,c),e.elementType=w,e.lanes=f,e;case M:return e=ai(19,a,n,c),e.elementType=M,e.lanes=f,e;case O:return Om(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case y:S=10;break t;case x:S=9;break t;case R:S=11;break t;case g:S=14;break t;case P:S=16,r=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ai(S,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function is(e,n,a,r){return e=ai(7,e,r,n),e.lanes=a,e}function Om(e,n,a,r){e=ai(22,e,r,n),e.elementType=O,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)===0){var S=ca(f,2);S!==null&&(c._pendingVisibility|=2,Un(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)!==0){var S=ca(f,2);S!==null&&(c._pendingVisibility&=-3,Un(S,f,2))}}};return e.stateNode=c,e}function qu(e,n,a){return e=ai(6,e,null,n),e.lanes=a,e}function Yu(e,n,a){return n=ai(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function qi(e){e.flags|=4}function Pm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!S_(n)){if(n=ei.current,n!==null&&((ye&4194176)===ye?Ti!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ti))throw qr=Jc,Jd;e.flags|=8192}}function Ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Te():536870912,e.lanes|=n,qs|=n)}function co(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&31457280,r|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function E0(e,n,a){var r=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(ln),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vr(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hi!==null&&(ef(hi),hi=null))),Ve(n),null;case 26:return a=n.memoizedState,e===null?(qi(n),a!==null?(Ve(n),Pm(n,a)):(Ve(n),n.flags&=-16777217)):a?a!==e.memoizedState?(qi(n),Ve(n),Pm(n,a)):(Ve(n),n.flags&=-16777217):(e.memoizedProps!==r&&qi(n),Ve(n),n.flags&=-16777217),null;case 27:kt(n),a=Qt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}e=xe.current,Vr(n)?Kd(n):(e=f_(c,r,a),n.stateNode=e,qi(n))}return Ve(n),null;case 5:if(kt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(e=xe.current,Vr(n))Kd(n);else{switch(c=Ll(Qt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[an]=n,e[sn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(xn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(n)}}return Ve(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Qt.current,Vr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||s_(e.nodeValue,a)),e||Ya(n)}else e=Ll(e).createTextNode(r),e[an]=n,n.stateNode=e}return Ve(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Vr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else hi!==null&&(ef(hi),hi=null),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Ve(n),null;case 4:return se(),e===null&&df(n.stateNode.containerInfo),Ve(n),null;case 10:return Vi(n.type),Ve(n),null;case 19:if(Yt(on),c=n.memoizedState,c===null)return Ve(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)co(c,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=al(e),f!==null){for(n.flags|=128,co(c,!1),e=f.updateQueue,n.updateQueue=e,Ml(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Nm(a,e),a=a.sibling;return Nt(on,on.current&1|2),n.child}e=e.sibling}c.tail!==null&&ut()>yl&&(n.flags|=128,r=!0,co(c,!1),n.lanes=4194304)}else{if(!r)if(e=al(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Ml(n,e),co(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return Ve(n),null}else 2*ut()-c.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,r=!0,co(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ut(),n.sibling=null,e=on.current,Nt(on,r?e&1|2:e&1),n):(Ve(n),null);case 22:case 23:return Fi(n),tu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Yt(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(ln),Ve(n),null;case 25:return null}throw Error(s(156,n.tag))}function T0(e,n){switch(Kc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(ln),se(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Yt(on),null;case 4:return se(),null;case 10:return Vi(n.type),null;case 22:case 23:return Fi(n),tu(),e!==null&&Yt(Za),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(ln),null;case 25:return null;default:return null}}function zm(e,n){switch(Kc(n),n.tag){case 3:Vi(ln),se();break;case 26:case 27:case 5:kt(n);break;case 4:se();break;case 13:Fi(n);break;case 19:Yt(on);break;case 10:Vi(n.type);break;case 22:case 23:Fi(n),tu(),e!==null&&Yt(Za);break;case 24:Vi(ln)}}var b0={getCacheForType:function(e){var n=yn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},A0=typeof WeakMap=="function"?WeakMap:Map,ke=0,Fe=null,de=null,ye=0,Ie=0,Wn=null,Yi=!1,Ws=!1,ju=!1,ji=0,qe=0,ya=0,as=0,Zu=0,si=0,qs=0,uo=null,Ai=null,Ku=!1,Qu=0,yl=1/0,El=null,Ea=null,Tl=!1,ss=null,fo=0,Ju=0,$u=null,ho=0,tf=null;function qn(){if((ke&2)!==0&&ye!==0)return ye&-ye;if(C.T!==null){var e=Bs;return e!==0?e:cf()}return Ur()}function Bm(){si===0&&(si=(ye&536870912)===0||Ae?nn():536870912);var e=ei.current;return e!==null&&(e.flags|=32),si}function Un(e,n,a){(e===Fe&&Ie===2||e.cancelPendingCommit!==null)&&(Ys(e,0),Zi(e,ye,si,!1)),Rn(e,a),((ke&2)===0||e!==Fe)&&(e===Fe&&((ke&2)===0&&(as|=a),qe===4&&Zi(e,ye,si,!1)),Ri(e))}function Fm(e,n,a){if((ke&6)!==0)throw Error(s(327));var r=!a&&(n&60)===0&&(n&e.expiredLanes)===0||$t(e,n),c=r?w0(e,n):sf(e,n,!0),f=r;do{if(c===0){Ws&&!r&&Zi(e,n,0,!1);break}else if(c===6)Zi(e,n,0,!Yi);else{if(a=e.current.alternate,f&&!R0(a)){c=sf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=uo;var N=T.current.memoizedState.isDehydrated;if(N&&(Ys(T,S).flags|=256),S=sf(T,S,!1),S!==2){if(ju&&!N){T.errorRecoveryDisabledLanes|=f,as|=f,c=4;break t}f=Ai,Ai=c,f!==null&&ef(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){Ys(e,0),Zi(e,n,0,!0);break}t:{switch(r=e,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){Zi(r,n,si,!Yi);break t}break;case 2:Ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if(r.finishedWork=a,r.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-ut(),10<f)){if(Zi(r,n,si,!Yi),Dt(r,0)!==0)break t;r.timeoutHandle=l_(Im.bind(null,r,a,Ai,El,Ku,n,si,as,qs,Yi,2,-0,0),f);break t}Im(r,a,Ai,El,Ku,n,si,as,qs,Yi,0,-0,0)}}break}while(!0);Ri(e)}function ef(e){Ai===null?Ai=e:Ai.push.apply(Ai,e)}function Im(e,n,a,r,c,f,S,T,N,V,ct,vt,it){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:lS},wm(n),n=uS(),n!==null)){e.cancelPendingCommit=n(qm.bind(null,e,a,r,c,S,T,N,1,vt,it)),Zi(e,f,S,!V);return}qm(e,a,r,c,S,T,N,ct,vt,it)}function R0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zi(e,n,a,r){n&=~Zu,n&=~as,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-jt(c),S=1<<f;r[f]=-1,c&=~S}a!==0&&Dr(e,a,n)}function bl(){return(ke&6)===0?(po(0),!1):!0}function nf(){if(de!==null){if(Ie===0)var e=de.return;else e=de,Gi=ts=null,lu(e),Ps=null,Yr=0,e=de;for(;e!==null;)zm(e.alternate,e),e=e.return;de=null}}function Ys(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,q0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nf(),Fe=e,de=a=Ma(e.current,null),ye=n,Ie=0,Wn=null,Yi=!1,Ws=$t(e,n),ju=!1,qs=si=Zu=as=ya=qe=0,Ai=uo=null,Ku=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-jt(r),f=1<<c;n|=e[c],r&=~f}return ji=n,Zo(),a}function Hm(e,n){ce=null,C.H=bi,n===Wr?(n=ep(),Ie=3):n===Jd?(n=ep(),Ie=4):Ie=n===$p?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,de===null&&(qe=1,ml(e,Jn(n,e.current)))}function Gm(){var e=C.H;return C.H=bi,e===null?bi:e}function Vm(){var e=C.A;return C.A=b0,e}function af(){qe=4,Yi||(ye&4194176)!==ye&&ei.current!==null||(Ws=!0),(ya&134217727)===0&&(as&134217727)===0||Fe===null||Zi(Fe,ye,si,!1)}function sf(e,n,a){var r=ke;ke|=2;var c=Gm(),f=Vm();(Fe!==e||ye!==n)&&(El=null,Ys(e,n)),n=!1;var S=qe;t:do try{if(Ie!==0&&de!==null){var T=de,N=Wn;switch(Ie){case 8:nf(),S=6;break t;case 3:case 2:case 6:ei.current===null&&(n=!0);var V=Ie;if(Ie=0,Wn=null,js(e,T,N,V),a&&Ws){S=0;break t}break;default:V=Ie,Ie=0,Wn=null,js(e,T,N,V)}}C0(),S=qe;break}catch(ct){Hm(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Gi=ts=null,ke=r,C.H=c,C.A=f,de===null&&(Fe=null,ye=0,Zo()),S}function C0(){for(;de!==null;)km(de)}function w0(e,n){var a=ke;ke|=2;var r=Gm(),c=Vm();Fe!==e||ye!==n?(El=null,yl=ut()+500,Ys(e,n)):Ws=$t(e,n);t:do try{if(Ie!==0&&de!==null){n=de;var f=Wn;e:switch(Ie){case 1:Ie=0,Wn=null,js(e,n,f,1);break;case 2:if($d(f)){Ie=0,Wn=null,Xm(n);break}n=function(){Ie===2&&Fe===e&&(Ie=7),Ri(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:$d(f)?(Ie=0,Wn=null,Xm(n)):(Ie=0,Wn=null,js(e,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var T=de;if(!S||S_(S)){Ie=0,Wn=null;var N=T.sibling;if(N!==null)de=N;else{var V=T.return;V!==null?(de=V,Al(V)):de=null}break e}}Ie=0,Wn=null,js(e,n,f,5);break;case 6:Ie=0,Wn=null,js(e,n,f,6);break;case 8:nf(),qe=6;break t;default:throw Error(s(462))}}D0();break}catch(ct){Hm(e,ct)}while(!0);return Gi=ts=null,C.H=r,C.A=c,ke=a,de!==null?0:(Fe=null,ye=0,Zo(),qe)}function D0(){for(;de!==null&&!E();)km(de)}function km(e){var n=fm(e.alternate,e,ji);e.memoizedProps=e.pendingProps,n===null?Al(e):de=n}function Xm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=sm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=sm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:lu(n);default:zm(a,n),n=de=Nm(n,ji),n=fm(a,n,ji)}e.memoizedProps=e.pendingProps,n===null?Al(e):de=n}function js(e,n,a,r){Gi=ts=null,lu(n),Ps=null,Yr=0;var c=n.return;try{if(v0(e,c,n,a,ye)){qe=1,ml(e,Jn(a,e.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;qe=1,ml(e,Jn(a,e.current)),de=null;return}n.flags&32768?(Ae||r===1?e=!0:Ws||(ye&536870912)!==0?e=!1:(Yi=e=!0,(r===2||r===3||r===6)&&(r=ei.current,r!==null&&r.tag===13&&(r.flags|=16384))),Wm(n,e)):Al(n)}function Al(e){var n=e;do{if((n.flags&32768)!==0){Wm(n,Yi);return}e=n.return;var a=E0(n.alternate,n,ji);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);qe===0&&(qe=5)}function Wm(e,n){do{var a=T0(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);qe=6,de=null}function qm(e,n,a,r,c,f,S,T,N,V){var ct=C.T,vt=q.p;try{q.p=2,C.T=null,U0(e,n,a,r,vt,c,f,S,T,N,V)}finally{C.T=ct,q.p=vt}}function U0(e,n,a,r,c,f,S,T){do Zs();while(ss!==null);if((ke&6)!==0)throw Error(s(327));var N=e.finishedWork;if(r=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=N.lanes|N.childLanes;if(V|=Yc,Io(e,r,V,f,S,T),e===Fe&&(de=Fe=null,ye=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||Tl||(Tl=!0,Ju=V,$u=a,P0(wt,function(){return Zs(),null})),a=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,f=q.p,q.p=2,S=ke,ke|=4,x0(e,N),Am(N,e),e0(gf,e.containerInfo),Fl=!!_f,gf=_f=null,e.current=N,ym(e,N.alternate,N),tt(),ke=S,q.p=f,C.T=a):e.current=N,Tl?(Tl=!1,ss=e,fo=r):Ym(e,V),V=e.pendingLanes,V===0&&(Ea=null),Ft(N.stateNode),Ri(e),n!==null)for(c=e.onRecoverableError,N=0;N<n.length;N++)V=n[N],c(V.value,{componentStack:V.stack});return(fo&3)!==0&&Zs(),V=e.pendingLanes,(r&4194218)!==0&&(V&42)!==0?e===tf?ho++:(ho=0,tf=e):ho=0,po(0),null}function Ym(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zr(n)))}function Zs(){if(ss!==null){var e=ss,n=Ju;Ju=0;var a=Es(fo),r=C.T,c=q.p;try{if(q.p=32>a?32:a,C.T=null,ss===null)var f=!1;else{a=$u,$u=null;var S=ss,T=fo;if(ss=null,fo=0,(ke&6)!==0)throw Error(s(331));var N=ke;if(ke|=4,Um(S.current),Cm(S,S.current,T,a),ke=N,po(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Kt,S)}catch{}f=!0}return f}finally{q.p=c,C.T=r,Ym(e,n)}}return!1}function jm(e,n,a){n=Jn(a,n),n=yu(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(Rn(e,2),Ri(e))}function Be(e,n,a){if(e.tag===3)jm(e,e,a);else for(;n!==null;){if(n.tag===3){jm(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))){e=Jn(a,e),a=Qp(2),r=ga(n,a,2),r!==null&&(Jp(a,r,n,e),Rn(r,2),Ri(r));break}}n=n.return}}function rf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new A0;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(ju=!0,c.add(a),e=L0.bind(null,e,n,a),n.then(e,e))}function L0(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Fe===e&&(ye&a)===a&&(qe===4||qe===3&&(ye&62914560)===ye&&300>ut()-Qu?(ke&2)===0&&Ys(e,0):Zu|=a,qs===ye&&(qs=0)),Ri(e)}function Zm(e,n){n===0&&(n=Te()),e=ca(e,n),e!==null&&(Rn(e,n),Ri(e))}function N0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Zm(e,a)}function O0(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Zm(e,a)}function P0(e,n){return Xt(e,n)}var Rl=null,Ks=null,of=!1,Cl=!1,lf=!1,rs=0;function Ri(e){e!==Ks&&e.next===null&&(Ks===null?Rl=Ks=e:Ks=Ks.next=e),Cl=!0,of||(of=!0,B0(z0))}function po(e,n){if(!lf&&Cl){lf=!0;do for(var a=!1,r=Rl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var S=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-jt(42|e)+1)-1,f&=c&~(S&~T),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Jm(r,f))}else f=ye,f=Dt(r,r===Fe?f:0),(f&3)===0||$t(r,f)||(a=!0,Jm(r,f));r=r.next}while(a);lf=!1}}function z0(){Cl=of=!1;var e=0;rs!==0&&(W0()&&(e=rs),rs=0);for(var n=ut(),a=null,r=Rl;r!==null;){var c=r.next,f=Km(r,n);f===0?(r.next=null,a===null?Rl=c:a.next=c,c===null&&(Ks=a)):(a=r,(e!==0||(f&3)!==0)&&(Cl=!0)),r=c}po(e)}function Km(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-jt(f),T=1<<S,N=c[S];N===-1?((T&a)===0||(T&r)!==0)&&(c[S]=Ge(T,n)):N<=n&&(e.expiredLanes|=T),f&=~T}if(n=Fe,a=ye,a=Dt(e,e===n?a:0),r=e.callbackNode,a===0||e===n&&Ie===2||e.cancelPendingCommit!==null)return r!==null&&r!==null&&L(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&L(r),Es(a)){case 2:case 8:a=Ht;break;case 32:a=wt;break;case 268435456:a=me;break;default:a=wt}return r=Qm.bind(null,e),a=Xt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&L(r),e.callbackPriority=2,e.callbackNode=null,2}function Qm(e,n){var a=e.callbackNode;if(Zs()&&e.callbackNode!==a)return null;var r=ye;return r=Dt(e,e===Fe?r:0),r===0?null:(Fm(e,r,n),Km(e,ut()),e.callbackNode!=null&&e.callbackNode===a?Qm.bind(null,e):null)}function Jm(e,n){if(Zs())return null;Fm(e,n,!0)}function B0(e){Y0(function(){(ke&6)!==0?Xt(pt,e):e()})}function cf(){return rs===0&&(rs=nn()),rs}function $m(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vo(""+e)}function t_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function F0(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=$m((c[sn]||null).action),S=r.submitter;S&&(n=(n=S[sn]||null)?$m(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new qo("action","action",null,r,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rs!==0){var N=S?t_(c,S):new FormData(c);gu(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=S?t_(c,S):new FormData(c),gu(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var uf=0;uf<qd.length;uf++){var ff=qd[uf],I0=ff.toLowerCase(),H0=ff[0].toUpperCase()+ff.slice(1);fi(I0,"on"+H0)}fi(Gd,"onAnimationEnd"),fi(Vd,"onAnimationIteration"),fi(kd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(i0,"onTransitionRun"),fi(a0,"onTransitionStart"),fi(s0,"onTransitionCancel"),fi(Xd,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function e_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var S=r.length-1;0<=S;S--){var T=r[S],N=T.instance,V=T.currentTarget;if(T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(ct){pl(ct)}c.currentTarget=null,f=N}else for(S=0;S<r.length;S++){if(T=r[S],N=T.instance,V=T.currentTarget,T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(ct){pl(ct)}c.currentTarget=null,f=N}}}}function Se(e,n){var a=n[Ts];a===void 0&&(a=n[Ts]=new Set);var r=e+"__bubble";a.has(r)||(n_(n,e,2,!1),a.add(r))}function hf(e,n,a){var r=0;n&&(r|=4),n_(a,e,r,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function df(e){if(!e[wl]){e[wl]=!0,j.forEach(function(a){a!=="selectionchange"&&(G0.has(a)||hf(a,!1,e),hf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wl]||(n[wl]=!0,hf("selectionchange",!1,n))}}function n_(e,n,a,r){switch(b_(n)){case 2:var c=dS;break;case 8:c=pS;break;default:c=Af}a=c.bind(null,n,a,e),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function pf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var T=r.stateNode.containerInfo;if(T===c||T.nodeType===8&&T.parentNode===c)break;if(S===4)for(S=r.return;S!==null;){var N=S.tag;if((N===3||N===4)&&(N=S.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;S=S.return}for(;T!==null;){if(S=Pi(T),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){r=f=S;continue t}T=T.parentNode}}r=r.return}gd(function(){var V=f,ct=Lc(a),vt=[];t:{var it=Wd.get(e);if(it!==void 0){var lt=qo,Vt=e;switch(e){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":lt=Ov;break;case"focusin":Vt="focus",lt=Fc;break;case"focusout":Vt="blur",lt=Fc;break;case"beforeblur":case"afterblur":lt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Bv;break;case Gd:case Vd:case kd:lt=bv;break;case Xd:lt=Iv;break;case"scroll":case"scrollend":lt=xv;break;case"wheel":lt=Gv;break;case"copy":case"cut":case"paste":lt=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=yd;break;case"toggle":case"beforetoggle":lt=kv}var ie=(n&4)!==0,Ye=!ie&&(e==="scroll"||e==="scrollend"),Z=ie?it!==null?it+"Capture":null:it;ie=[];for(var G=V,J;G!==null;){var mt=G;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Z===null||(mt=Nr(G,Z),mt!=null&&ie.push(_o(G,mt,J))),Ye)break;G=G.return}0<ie.length&&(it=new lt(it,Vt,null,a,ct),vt.push({event:it,listeners:ie}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==Uc&&(Vt=a.relatedTarget||a.fromElement)&&(Pi(Vt)||Vt[Oi]))break t;if((lt||it)&&(it=ct.window===ct?ct:(it=ct.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Vt=a.relatedTarget||a.toElement,lt=V,Vt=Vt?Pi(Vt):null,Vt!==null&&(Ye=Y(Vt),ie=Vt.tag,Vt!==Ye||ie!==5&&ie!==27&&ie!==6)&&(Vt=null)):(lt=null,Vt=V),lt!==Vt)){if(ie=xd,mt="onMouseLeave",Z="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ie=yd,mt="onPointerLeave",Z="onPointerEnter",G="pointer"),Ye=lt==null?it:W(lt),J=Vt==null?it:W(Vt),it=new ie(mt,G+"leave",lt,a,ct),it.target=Ye,it.relatedTarget=J,mt=null,Pi(ct)===V&&(ie=new ie(Z,G+"enter",Vt,a,ct),ie.target=J,ie.relatedTarget=Ye,mt=ie),Ye=mt,lt&&Vt)e:{for(ie=lt,Z=Vt,G=0,J=ie;J;J=Qs(J))G++;for(J=0,mt=Z;mt;mt=Qs(mt))J++;for(;0<G-J;)ie=Qs(ie),G--;for(;0<J-G;)Z=Qs(Z),J--;for(;G--;){if(ie===Z||Z!==null&&ie===Z.alternate)break e;ie=Qs(ie),Z=Qs(Z)}ie=null}else ie=null;lt!==null&&i_(vt,it,lt,ie,!1),Vt!==null&&Ye!==null&&i_(vt,Ye,Vt,ie,!0)}}t:{if(it=V?W(V):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var It=Dd;else if(Cd(it))if(Ud)It=$v;else{It=Qv;var fe=Kv}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?V&&Dc(V.elementType)&&(It=Dd):It=Jv;if(It&&(It=It(e,V))){wd(vt,It,a,ct);break t}fe&&fe(e,it,V),e==="focusout"&&V&&it.type==="number"&&V.memoizedProps.value!=null&&Mn(it,"number",it.value)}switch(fe=V?W(V):window,e){case"focusin":(Cd(fe)||fe.contentEditable==="true")&&(ws=fe,Xc=V,Gr=null);break;case"focusout":Gr=Xc=ws=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Id(vt,a,ct);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":Id(vt,a,ct)}var Wt;if(Hc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Cs?Ad(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Ed&&a.locale!=="ko"&&(Cs||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Cs&&(Wt=vd()):(la=ct,Pc="value"in la?la.value:la.textContent,Cs=!0)),fe=Dl(V,Jt),0<fe.length&&(Jt=new Md(Jt,e,null,a,ct),vt.push({event:Jt,listeners:fe}),Wt?Jt.data=Wt:(Wt=Rd(a),Wt!==null&&(Jt.data=Wt)))),(Wt=Wv?qv(e,a):Yv(e,a))&&(Jt=Dl(V,"onBeforeInput"),0<Jt.length&&(fe=new Md("onBeforeInput","beforeinput",null,a,ct),vt.push({event:fe,listeners:Jt}),fe.data=Wt)),F0(vt,e,V,a,ct)}e_(vt,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Dl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Nr(e,a),c!=null&&r.unshift(_o(e,c,f)),c=Nr(e,n),c!=null&&r.push(_o(e,c,f))),e=e.return}return r}function Qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function i_(e,n,a,r,c){for(var f=n._reactName,S=[];a!==null&&a!==r;){var T=a,N=T.alternate,V=T.stateNode;if(T=T.tag,N!==null&&N===r)break;T!==5&&T!==26&&T!==27||V===null||(N=V,c?(V=Nr(a,f),V!=null&&S.unshift(_o(a,V,N))):c||(V=Nr(a,f),V!=null&&S.push(_o(a,V,N)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var V0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function a_(e){return(typeof e=="string"?e:""+e).replace(V0,`
`).replace(k0,"")}function s_(e,n){return n=a_(n),a_(e)===n}function Ul(){}function Oe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||zn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&zn(e,""+r);break;case"className":He(e,"class",r);break;case"tabIndex":He(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":He(e,a,r);break;case"style":md(e,r,f);break;case"data":if(n!=="object"){He(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ul);break;case"onScroll":r!=null&&Se("scroll",e);break;case"onScrollEnd":r!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Vo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ge(e,"popover",r);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ge(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vv.get(a)||a,ge(e,a,r))}}function mf(e,n,a,r,c,f){switch(a){case"style":md(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?zn(e,r):(typeof r=="number"||typeof r=="bigint")&&zn(e,""+r);break;case"onScroll":r!=null&&Se("scroll",e);break;case"onScrollEnd":r!=null&&Se("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ge(e,a,r)}}}function xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,f,S,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),r&&Oe(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var T=f=S=c=null,N=null,V=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":S=ct;break;case"checked":N=ct;break;case"defaultChecked":V=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Oe(e,n,r,ct,a,null)}}wn(e,f,T,N,V,S,c,!1),ve(e);return;case"select":Se("invalid",e),r=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":r=T;default:Oe(e,n,c,T,a,null)}n=f,a=S,e.multiple=!!r,n!=null?Xe(e,!!r,n,!1):a!=null&&Xe(e,!!r,a,!0);return;case"textarea":Se("invalid",e),f=c=r=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Oe(e,n,S,T,a,null)}bs(e,r,c,f),ve(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(r=a[N],r!=null))switch(N){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Oe(e,n,N,r,a,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(r=0;r<mo.length;r++)Se(mo[r],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(r=a[V],r!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,V,r,a,null)}return;default:if(Dc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&mf(e,n,ct,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Oe(e,n,T,r,a,null))}function X0(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,N=null,V=null,ct=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":N=vt;default:r.hasOwnProperty(lt)||Oe(e,n,lt,null,r,vt)}}for(var it in r){var lt=r[it];if(vt=a[it],r.hasOwnProperty(it)&&(lt!=null||vt!=null))switch(it){case"type":f=lt;break;case"name":c=lt;break;case"checked":V=lt;break;case"defaultChecked":ct=lt;break;case"value":S=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&Oe(e,n,it,lt,r,vt)}}Le(e,S,T,N,V,ct,f,c);return;case"select":lt=S=T=it=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":lt=N;default:r.hasOwnProperty(f)||Oe(e,n,f,null,r,N)}for(c in r)if(f=r[c],N=a[c],r.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==N&&Oe(e,n,c,f,r,N)}n=T,a=S,r=lt,it!=null?Xe(e,!!a,it,!1):!!r!=!!a&&(n!=null?Xe(e,!!a,n,!0):Xe(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,r,c)}for(S in r)if(c=r[S],f=a[S],r.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Oe(e,n,S,c,r,f)}gn(e,it,lt);return;case"option":for(var Vt in a)if(it=a[Vt],a.hasOwnProperty(Vt)&&it!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Oe(e,n,Vt,null,r,it)}for(N in r)if(it=r[N],lt=a[N],r.hasOwnProperty(N)&&it!==lt&&(it!=null||lt!=null))switch(N){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,N,it,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!r.hasOwnProperty(ie)&&Oe(e,n,ie,null,r,it);for(V in r)if(it=r[V],lt=a[V],r.hasOwnProperty(V)&&it!==lt&&(it!=null||lt!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Oe(e,n,V,it,r,lt)}return;default:if(Dc(n)){for(var Ye in a)it=a[Ye],a.hasOwnProperty(Ye)&&it!==void 0&&!r.hasOwnProperty(Ye)&&mf(e,n,Ye,void 0,r,it);for(ct in r)it=r[ct],lt=a[ct],!r.hasOwnProperty(ct)||it===lt||it===void 0&&lt===void 0||mf(e,n,ct,it,r,lt);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!r.hasOwnProperty(Z)&&Oe(e,n,Z,null,r,it);for(vt in r)it=r[vt],lt=a[vt],!r.hasOwnProperty(vt)||it===lt||it==null&&lt==null||Oe(e,n,vt,it,r,lt)}var _f=null,gf=null;function Ll(e){return e.nodeType===9?e:e.ownerDocument}function r_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sf=null;function W0(){var e=window.event;return e&&e.type==="popstate"?e===Sf?!1:(Sf=e,!0):(Sf=null,!1)}var l_=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,c_=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof c_<"u"?function(e){return c_.resolve(null).then(e).catch(j0)}:l_;function j0(e){setTimeout(function(){throw e})}function xf(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(r===0){e.removeChild(c),To(n);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=c}while(a);To(n)}function Mf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Z0(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ga])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function K0(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function u_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function f_(e,n,a){switch(n=Ll(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var ri=new Map,h_=new Set;function Nl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ki=q.d;q.d={f:Q0,r:J0,D:$0,C:tS,L:eS,m:nS,X:aS,S:iS,M:sS};function Q0(){var e=Ki.f(),n=bl();return e||n}function J0(e){var n=b(e);n!==null&&n.tag===5&&n.type==="form"?Ip(n):Ki.r(e)}var Js=typeof document>"u"?null:document;function d_(e,n,a){var r=Js;if(r&&typeof n=="string"&&n){var c=hn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),h_.has(c)||(h_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),xn(n,"link",e),Q(n),r.head.appendChild(n)))}}function $0(e){Ki.D(e),d_("dns-prefetch",e,null)}function tS(e,n){Ki.C(e,n),d_("preconnect",e,n)}function eS(e,n,a){Ki.L(e,n,a);var r=Js;if(r&&e&&n){var c='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hn(a.imageSizes)+'"]')):c+='[href="'+hn(e)+'"]';var f=c;switch(n){case"style":f=$s(e);break;case"script":f=tr(e)}ri.has(f)||(e=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(go(f))||n==="script"&&r.querySelector(vo(f))||(n=r.createElement("link"),xn(n,"link",e),Q(n),r.head.appendChild(n)))}}function nS(e,n){Ki.m(e,n);var a=Js;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hn(r)+'"][href="'+hn(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=tr(e)}if(!ri.has(f)&&(e=A({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}r=a.createElement("link"),xn(r,"link",e),Q(r),a.head.appendChild(r)}}}function iS(e,n,a){Ki.S(e,n,a);var r=Js;if(r&&e){var c=$(r).hoistableStyles,f=$s(e);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=r.querySelector(go(f)))T.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&yf(e,a);var N=S=r.createElement("link");Q(N),xn(N,"link",e),N._p=new Promise(function(V,ct){N.onload=V,N.onerror=ct}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ol(S,n,r)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function aS(e,n){Ki.X(e,n);var a=Js;if(a&&e){var r=$(a).hoistableScripts,c=tr(e),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(e=A({src:e,async:!0},n),(n=ri.get(c))&&Ef(e,n),f=a.createElement("script"),Q(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function sS(e,n){Ki.M(e,n);var a=Js;if(a&&e){var r=$(a).hoistableScripts,c=tr(e),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(e=A({src:e,async:!0,type:"module"},n),(n=ri.get(c))&&Ef(e,n),f=a.createElement("script"),Q(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function p_(e,n,a,r){var c=(c=Qt.current)?Nl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$s(a.href),a=$(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$s(a.href);var f=$(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(go(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||rS(c,e,a,S.state))),n&&r===null)throw Error(s(528,""));return S}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=tr(a),a=$(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function $s(e){return'href="'+hn(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function m_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function rS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),xn(n,"link",a),Q(n),e.head.appendChild(n))}function tr(e){return'[src="'+hn(e)+'"]'}function vo(e){return"script[async]"+e}function __(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+hn(a.href)+'"]');if(r)return n.instance=r,Q(r),r;var c=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Q(r),xn(r,"style",c),Ol(r,a.precedence,e),n.instance=r;case"stylesheet":c=$s(a.href);var f=e.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;r=m_(a),(c=ri.get(c))&&yf(r,c),f=(e.ownerDocument||e).createElement("link"),Q(f);var S=f;return S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),xn(f,"link",r),n.state.loading|=4,Ol(f,a.precedence,e),n.instance=f;case"script":return f=tr(a.src),(c=e.querySelector(vo(f)))?(n.instance=c,Q(c),c):(r=a,(c=ri.get(f))&&(r=A({},a),Ef(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),xn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ol(r,a.precedence,e));return n.instance}function Ol(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,S=0;S<r.length;S++){var T=r[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ef(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Pl=null;function g_(e,n,a){if(Pl===null){var r=new Map,c=Pl=new Map;c.set(a,r)}else c=Pl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ga]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=r.get(S);T?T.push(f):r.set(S,[f])}}return r}function v_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function oS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function S_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var So=null;function lS(){}function cS(e,n,a){if(So===null)throw Error(s(475));var r=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=$s(a.href),f=e.querySelector(go(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=zl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,Q(f);return}f=e.ownerDocument||e,a=m_(a),(c=ri.get(c))&&yf(a,c),f=f.createElement("link"),Q(f);var S=f;S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),xn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=zl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function uS(){if(So===null)throw Error(s(475));var e=So;return e.stylesheets&&e.count===0&&Tf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Tf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bl=null;function Tf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bl=new Map,n.forEach(fS,e),Bl=null,zl.call(e))}function fS(e,n){if(!(n.state.loading&4)){var a=Bl.get(e);if(a)var r=a.get(null);else{a=new Map,Bl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),r=S)}r&&a.set(null,r)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||r,f===r&&a.set(null,c),a.set(S,c),this.count++,r=zl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:y,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function hS(e,n,a,r,c,f,S,T){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=An(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.hiddenUpdates=An(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function x_(e,n,a,r,c,f,S,T,N,V,ct,vt){return e=new hS(e,n,a,S,T,N,V,vt),n=1,f===!0&&(n|=24),f=ai(3,null,null,n),e.current=f,f.stateNode=e,n=eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Pu(f),e}function M_(e){return e?(e=Ls,e):Ls}function y_(e,n,a,r,c,f){c=M_(c),r.context===null?r.context=c:r.pendingContext=c,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ga(e,r,n),a!==null&&(Un(a,e,n),no(a,e,n))}function E_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function bf(e,n){E_(e,n),(e=e.alternate)&&E_(e,n)}function T_(e){if(e.tag===13){var n=ca(e,67108864);n!==null&&Un(n,e,67108864),bf(e,67108864)}}var Fl=!0;function dS(e,n,a,r){var c=C.T;C.T=null;var f=q.p;try{q.p=2,Af(e,n,a,r)}finally{q.p=f,C.T=c}}function pS(e,n,a,r){var c=C.T;C.T=null;var f=q.p;try{q.p=8,Af(e,n,a,r)}finally{q.p=f,C.T=c}}function Af(e,n,a,r){if(Fl){var c=Rf(r);if(c===null)pf(e,n,r,Il,a),A_(e,r);else if(_S(c,e,n,a,r))r.stopPropagation();else if(A_(e,r),n&4&&-1<mS.indexOf(e)){for(;c!==null;){var f=b(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ct(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var N=1<<31-jt(S);T.entanglements[1]|=N,S&=~N}Ri(f),(ke&6)===0&&(yl=ut()+500,po(0))}}break;case 13:T=ca(f,2),T!==null&&Un(T,f,2),bl(),bf(f,2)}if(f=Rf(r),f===null&&pf(e,n,r,Il,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else pf(e,n,r,null,a)}}function Rf(e){return e=Lc(e),Cf(e)}var Il=null;function Cf(e){if(Il=null,e=Pi(e),e!==null){var n=Y(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=St(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Il=e,null}function b_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case pt:return 2;case Ht:return 8;case wt:case zt:return 32;case me:return 268435456;default:return 32}default:return 32}}var wf=!1,Ta=null,ba=null,Aa=null,Mo=new Map,yo=new Map,Ra=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A_(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Eo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=b(n),n!==null&&T_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function _S(e,n,a,r,c){switch(n){case"focusin":return Ta=Eo(Ta,e,n,a,r,c),!0;case"dragenter":return ba=Eo(ba,e,n,a,r,c),!0;case"mouseover":return Aa=Eo(Aa,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,Eo(Mo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,Eo(yo.get(f)||null,e,n,a,r,c)),!0}return!1}function R_(e){var n=Pi(e.target);if(n!==null){var a=Y(n);if(a!==null){if(n=a.tag,n===13){if(n=St(a),n!==null){e.blockedOn=n,Ho(e.priority,function(){if(a.tag===13){var r=qn(),c=ca(a,r);c!==null&&Un(c,a,r),bf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Rf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Uc=r,a.target.dispatchEvent(r),Uc=null}else return n=b(a),n!==null&&T_(n),e.blockedOn=a,!1;n.shift()}return!0}function C_(e,n,a){Hl(e)&&a.delete(n)}function gS(){wf=!1,Ta!==null&&Hl(Ta)&&(Ta=null),ba!==null&&Hl(ba)&&(ba=null),Aa!==null&&Hl(Aa)&&(Aa=null),Mo.forEach(C_),yo.forEach(C_)}function Gl(e,n){e.blockedOn===n&&(e.blockedOn=null,wf||(wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,gS)))}var Vl=null;function w_(e){Vl!==e&&(Vl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===e&&(Vl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Cf(r||a)===null)continue;break}var f=b(a);f!==null&&(e.splice(n,3),n-=3,gu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function To(e){function n(N){return Gl(N,e)}Ta!==null&&Gl(Ta,e),ba!==null&&Gl(ba,e),Aa!==null&&Gl(Aa,e),Mo.forEach(n),yo.forEach(n);for(var a=0;a<Ra.length;a++){var r=Ra[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)R_(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],S=c[sn]||null;if(typeof f=="function")S||w_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[sn]||null)T=S.formAction;else if(Cf(c)!==null)continue}else T=S.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),w_(a)}}}function Df(e){this._internalRoot=e}kl.prototype.render=Df.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=qn();y_(a,r,e,n,null,null)},kl.prototype.unmount=Df.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Zs(),y_(e.current,2,null,e,null,null),bl(),n[Oi]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ur();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&R_(e)}};var D_=t.version;if(D_!=="19.0.0")throw Error(s(527,D_,"19.0.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=nt(n),e=e!==null?yt(e):null,e=e===null?null:e.stateNode,e};var vS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Pi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Kt=Xl.inject(vS),Gt=Xl}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Yp,f=jp,S=Zp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=x_(e,1,!1,null,null,a,r,c,f,S,T,null),e[Oi]=n.current,df(e.nodeType===8?e.parentNode:e),new Df(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Yp,S=jp,T=Zp,N=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=x_(e,1,!0,n,a??null,r,c,f,S,T,N,V),n.context=M_(null),a=n.current,r=qn(),c=_a(r),c.callback=null,ga(a,c,r),n.current.lanes=r,Rn(n,r),Ri(n),e[Oi]=n.current,df(e),new kl(n)},Ao.version="19.0.0",Ao}var H_;function CS(){if(H_)return Lf.exports;H_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Lf.exports=RS(),Lf.exports}var wS=CS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nd="174",vr={ROTATE:0,DOLLY:1,PAN:2},mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DS=0,G_=1,US=2,Ig=1,LS=2,na=3,Ia=0,Nn=1,wi=2,Ba=0,Sr=1,dh=2,V_=3,k_=4,NS=5,ms=100,OS=101,PS=102,zS=103,BS=104,FS=200,IS=201,HS=202,GS=203,ph=204,mh=205,VS=206,kS=207,XS=208,WS=209,qS=210,YS=211,jS=212,ZS=213,KS=214,_h=0,gh=1,vh=2,yr=3,Sh=4,xh=5,Mh=6,yh=7,Hg=0,QS=1,JS=2,Fa=0,$S=1,tx=2,ex=3,nx=4,ix=5,ax=6,sx=7,Gg=300,Er=301,Tr=302,Eh=303,Th=304,Tc=306,bh=1e3,gs=1001,Ah=1002,Mi=1003,rx=1004,Wl=1005,Di=1006,Bf=1007,vs=1008,ra=1009,Vg=1010,kg=1011,No=1012,id=1013,Ss=1014,ia=1015,Po=1016,ad=1017,sd=1018,br=1020,Xg=35902,Wg=1021,qg=1022,xi=1023,Yg=1024,jg=1025,xr=1026,Ar=1027,Zg=1028,rd=1029,Kg=1030,od=1031,ld=1033,pc=33776,mc=33777,_c=33778,gc=33779,Rh=35840,Ch=35841,wh=35842,Dh=35843,Uh=36196,Lh=37492,Nh=37496,Oh=37808,Ph=37809,zh=37810,Bh=37811,Fh=37812,Ih=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,Xh=37818,Wh=37819,qh=37820,Yh=37821,vc=36492,jh=36494,Zh=36495,Qg=36283,Kh=36284,Qh=36285,Jh=36286,ox=3200,lx=3201,cx=0,ux=1,za="",li="srgb",Rr="srgb-linear",Mc="linear",Pe="srgb",er=7680,X_=519,fx=512,hx=513,dx=514,Jg=515,px=516,mx=517,_x=518,gx=519,W_=35044,q_="300 es",aa=2e3,yc=2001;class ys{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=Math.PI/180,$h=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]).toLowerCase()}function pe(o,t,i){return Math.max(t,Math.min(i,o))}function vx(o,t){return(o%t+t)%t}function Ff(o,t,i){return(1-i)*o+i*t}function Ro(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Sx={DEG2RAD:Sc};class he{constructor(t=0,i=0){he.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,i,s,l,u,h,d,p,m){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m)}set(t,i,s,l,u,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=p,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],_=s[4],v=s[7],x=s[2],y=s[5],R=s[8],w=l[0],M=l[3],g=l[6],P=l[1],O=l[4],D=l[7],H=l[2],z=l[5],I=l[8];return u[0]=h*w+d*P+p*H,u[3]=h*M+d*O+p*z,u[6]=h*g+d*D+p*I,u[1]=m*w+_*P+v*H,u[4]=m*M+_*O+v*z,u[7]=m*g+_*D+v*I,u[2]=x*w+y*P+R*H,u[5]=x*M+y*O+R*z,u[8]=x*g+y*D+R*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-s*u*_+s*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=_*h-d*m,x=d*p-_*u,y=m*u-h*p,R=i*v+s*x+l*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=v*w,t[1]=(l*m-_*s)*w,t[2]=(d*s-l*h)*w,t[3]=x*w,t[4]=(_*i-l*p)*w,t[5]=(l*u-d*i)*w,t[6]=y*w,t[7]=(s*p-m*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(If.makeScale(t,i)),this}rotate(t){return this.premultiply(If.makeRotation(-t)),this}translate(t,i){return this.premultiply(If.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const If=new oe;function $g(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Oo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xx(){const o=Oo("canvas");return o.style.display="block",o}const Y_={};function ds(o){o in Y_||(Y_[o]=!0,console.warn(o))}function Mx(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function yx(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ex(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const j_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tx(){const o={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Mc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Rr]:{primaries:t,whitePoint:s,transfer:Mc,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Ce=Tx();function sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let nr;class bx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{nr===void 0&&(nr=Oo("canvas")),nr.width=t.width,nr.height=t.height;const s=nr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=nr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Oo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=sa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(sa(i[s]/255)*255):i[s]=sa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ax=0;class cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=zo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Hf(l[h].image)):u.push(Hf(l[h]))}else u=Hf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Hf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rx=0;class On extends ys{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=gs,l=gs,u=Di,h=vs,d=xi,p=ra,m=On.DEFAULT_ANISOTROPY,_=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=zo(),this.name="",this.source=new cd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bh:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bh:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Gg;On.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,s=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],_=p[4],v=p[8],x=p[1],y=p[5],R=p[9],w=p[2],M=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+w)<.1&&Math.abs(R+M)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,D=(y+1)/2,H=(g+1)/2,z=(_+x)/4,I=(v+w)/4,K=(R+M)/4;return O>D&&O>H?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=z/s,u=I/s):D>H?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=z/l,u=K/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=I/u,l=K/u),this.set(s,l,u,i),this}let P=Math.sqrt((M-R)*(M-R)+(v-w)*(v-w)+(x-_)*(x-_));return Math.abs(P)<.001&&(P=1),this.x=(M-R)/P,this.y=(v-w)/P,this.z=(x-_)/P,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cx extends ys{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new On(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends Cx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class tv extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wx extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let p=s[l+0],m=s[l+1],_=s[l+2],v=s[l+3];const x=u[h+0],y=u[h+1],R=u[h+2],w=u[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=R,t[i+3]=w;return}if(v!==w||p!==x||m!==y||_!==R){let M=1-d;const g=p*x+m*y+_*R+v*w,P=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const H=Math.sqrt(O),z=Math.atan2(H,g*P);M=Math.sin(M*z)/H,d=Math.sin(d*z)/H}const D=d*P;if(p=p*M+x*D,m=m*M+y*D,_=_*M+R*D,v=v*M+w*D,M===1-d){const H=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=H,m*=H,_*=H,v*=H}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],v=u[h],x=u[h+1],y=u[h+2],R=u[h+3];return t[i]=d*R+_*v+p*y-m*x,t[i+1]=p*R+_*x+m*v-d*y,t[i+2]=m*R+_*y+d*x-p*v,t[i+3]=_*R-d*v-p*x-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),v=d(u/2),x=p(s/2),y=p(l/2),R=p(u/2);switch(h){case"XYZ":this._x=x*_*v+m*y*R,this._y=m*y*v-x*_*R,this._z=m*_*R+x*y*v,this._w=m*_*v-x*y*R;break;case"YXZ":this._x=x*_*v+m*y*R,this._y=m*y*v-x*_*R,this._z=m*_*R-x*y*v,this._w=m*_*v+x*y*R;break;case"ZXY":this._x=x*_*v-m*y*R,this._y=m*y*v+x*_*R,this._z=m*_*R+x*y*v,this._w=m*_*v-x*y*R;break;case"ZYX":this._x=x*_*v-m*y*R,this._y=m*y*v+x*_*R,this._z=m*_*R-x*y*v,this._w=m*_*v+x*y*R;break;case"YZX":this._x=x*_*v+m*y*R,this._y=m*y*v+x*_*R,this._z=m*_*R-x*y*v,this._w=m*_*v-x*y*R;break;case"XZY":this._x=x*_*v-m*y*R,this._y=m*y*v-x*_*R,this._z=m*_*R+x*y*v,this._w=m*_*v+x*y*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],v=i[10],x=s+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(h-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(u-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(h-l)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-u*p,this._y=l*_+h*p+u*d-s*m,this._z=u*_+h*m+s*p-l*d,this._w=h*_-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-i)*_)/m,x=Math.sin(i*_)/m;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,s=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(K_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(K_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),_=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+p*m+h*v-d*_,this.y=s+p*_+d*m-u*v,this.z=l+p*v+u*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Gf.copy(this).projectOnVector(t),this.sub(Gf)}reflect(t){return this.sub(Gf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new et,K_=new Ms;class Bo{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,mi):mi.fromBufferAttribute(u,h),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ql.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ql.copy(s.boundingBox)),ql.applyMatrix4(t.matrixWorld),this.union(ql)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),Yl.subVectors(this.max,Co),ir.subVectors(t.a,Co),ar.subVectors(t.b,Co),sr.subVectors(t.c,Co),wa.subVectors(ar,ir),Da.subVectors(sr,ar),os.subVectors(ir,sr);let i=[0,-wa.z,wa.y,0,-Da.z,Da.y,0,-os.z,os.y,wa.z,0,-wa.x,Da.z,0,-Da.x,os.z,0,-os.x,-wa.y,wa.x,0,-Da.y,Da.x,0,-os.y,os.x,0];return!Vf(i,ir,ar,sr,Yl)||(i=[1,0,0,0,1,0,0,0,1],!Vf(i,ir,ar,sr,Yl))?!1:(jl.crossVectors(wa,Da),i=[jl.x,jl.y,jl.z],Vf(i,ir,ar,sr,Yl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qi=[new et,new et,new et,new et,new et,new et,new et,new et],mi=new et,ql=new Bo,ir=new et,ar=new et,sr=new et,wa=new et,Da=new et,os=new et,Co=new et,Yl=new et,jl=new et,ls=new et;function Vf(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ls.fromArray(o,u);const d=l.x*Math.abs(ls.x)+l.y*Math.abs(ls.y)+l.z*Math.abs(ls.z),p=t.dot(ls),m=i.dot(ls),_=s.dot(ls);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const Dx=new Bo,wo=new et,kf=new et;class ud{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Dx.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(kf)),this.expandByPoint(wo.copy(t.center).sub(kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new et,Xf=new et,Zl=new et,Ua=new et,Wf=new et,Kl=new et,qf=new et;class ev{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Xf.copy(t).add(i).multiplyScalar(.5),Zl.copy(i).sub(t).normalize(),Ua.copy(this.origin).sub(Xf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Zl),d=Ua.dot(this.direction),p=-Ua.dot(Zl),m=Ua.lengthSq(),_=Math.abs(1-h*h);let v,x,y,R;if(_>0)if(v=h*p-d,x=h*d-p,R=u*_,v>=0)if(x>=-R)if(x<=R){const w=1/_;v*=w,x*=w,y=v*(v+h*x+2*d)+x*(h*v+x+2*p)+m}else x=u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*p)+m;else x<=-R?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m):x<=R?(v=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Xf).addScaledVector(Zl,x),y}intersectSphere(t,i){Ji.subVectors(t.center,this.origin);const s=Ji.dot(this.direction),l=Ji.dot(Ji)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,p=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,p=(t.min.z-x.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,i,s,l,u){Wf.subVectors(i,t),Kl.subVectors(s,t),qf.crossVectors(Wf,Kl);let h=this.direction.dot(qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,t);const p=d*this.direction.dot(Kl.crossVectors(Ua,Kl));if(p<0)return null;const m=d*this.direction.dot(Wf.cross(Ua));if(m<0||p+m>h)return null;const _=-d*Ua.dot(qf);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,u,h,d,p,m,_,v,x,y,R,w,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m,_,v,x,y,R,w,M)}set(t,i,s,l,u,h,d,p,m,_,v,x,y,R,w,M){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=y,g[7]=R,g[11]=w,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/rr.setFromMatrixColumn(t,0).length(),u=1/rr.setFromMatrixColumn(t,1).length(),h=1/rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*_,y=h*v,R=d*_,w=d*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=y+R*m,i[5]=x-w*m,i[9]=-d*p,i[2]=w-x*m,i[6]=R+y*m,i[10]=h*p}else if(t.order==="YXZ"){const x=p*_,y=p*v,R=m*_,w=m*v;i[0]=x+w*d,i[4]=R*d-y,i[8]=h*m,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=y*d-R,i[6]=w+x*d,i[10]=h*p}else if(t.order==="ZXY"){const x=p*_,y=p*v,R=m*_,w=m*v;i[0]=x-w*d,i[4]=-h*v,i[8]=R+y*d,i[1]=y+R*d,i[5]=h*_,i[9]=w-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const x=h*_,y=h*v,R=d*_,w=d*v;i[0]=p*_,i[4]=R*m-y,i[8]=x*m+w,i[1]=p*v,i[5]=w*m+x,i[9]=y*m-R,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const x=h*p,y=h*m,R=d*p,w=d*m;i[0]=p*_,i[4]=w-x*v,i[8]=R*v+y,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=y*v+R,i[10]=x-w*v}else if(t.order==="XZY"){const x=h*p,y=h*m,R=d*p,w=d*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=x*v+w,i[5]=h*_,i[9]=y*v-R,i[2]=R*v-y,i[6]=d*_,i[10]=w*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ux,t,Lx)}lookAt(t,i,s){const l=this.elements;return Yn.subVectors(t,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),La.crossVectors(s,Yn),La.lengthSq()===0&&(Math.abs(s.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),La.crossVectors(s,Yn)),La.normalize(),Ql.crossVectors(Yn,La),l[0]=La.x,l[4]=Ql.x,l[8]=Yn.x,l[1]=La.y,l[5]=Ql.y,l[9]=Yn.y,l[2]=La.z,l[6]=Ql.z,l[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],_=s[1],v=s[5],x=s[9],y=s[13],R=s[2],w=s[6],M=s[10],g=s[14],P=s[3],O=s[7],D=s[11],H=s[15],z=l[0],I=l[4],K=l[8],C=l[12],A=l[1],F=l[5],ot=l[9],st=l[13],ft=l[2],dt=l[6],k=l[10],at=l[14],Y=l[3],St=l[7],U=l[11],nt=l[15];return u[0]=h*z+d*A+p*ft+m*Y,u[4]=h*I+d*F+p*dt+m*St,u[8]=h*K+d*ot+p*k+m*U,u[12]=h*C+d*st+p*at+m*nt,u[1]=_*z+v*A+x*ft+y*Y,u[5]=_*I+v*F+x*dt+y*St,u[9]=_*K+v*ot+x*k+y*U,u[13]=_*C+v*st+x*at+y*nt,u[2]=R*z+w*A+M*ft+g*Y,u[6]=R*I+w*F+M*dt+g*St,u[10]=R*K+w*ot+M*k+g*U,u[14]=R*C+w*st+M*at+g*nt,u[3]=P*z+O*A+D*ft+H*Y,u[7]=P*I+O*F+D*dt+H*St,u[11]=P*K+O*ot+D*k+H*U,u[15]=P*C+O*st+D*at+H*nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],v=t[6],x=t[10],y=t[14],R=t[3],w=t[7],M=t[11],g=t[15];return R*(+u*p*v-l*m*v-u*d*x+s*m*x+l*d*y-s*p*y)+w*(+i*p*y-i*m*x+u*h*x-l*h*y+l*m*_-u*p*_)+M*(+i*m*v-i*d*y-u*h*v+s*h*y+u*d*_-s*m*_)+g*(-l*d*_-i*p*v+i*d*x+l*h*v-s*h*x+s*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=t[9],x=t[10],y=t[11],R=t[12],w=t[13],M=t[14],g=t[15],P=v*M*m-w*x*m+w*p*y-d*M*y-v*p*g+d*x*g,O=R*x*m-_*M*m-R*p*y+h*M*y+_*p*g-h*x*g,D=_*w*m-R*v*m+R*d*y-h*w*y-_*d*g+h*v*g,H=R*v*p-_*w*p-R*d*x+h*w*x+_*d*M-h*v*M,z=i*P+s*O+l*D+u*H;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return t[0]=P*I,t[1]=(w*x*u-v*M*u-w*l*y+s*M*y+v*l*g-s*x*g)*I,t[2]=(d*M*u-w*p*u+w*l*m-s*M*m-d*l*g+s*p*g)*I,t[3]=(v*p*u-d*x*u-v*l*m+s*x*m+d*l*y-s*p*y)*I,t[4]=O*I,t[5]=(_*M*u-R*x*u+R*l*y-i*M*y-_*l*g+i*x*g)*I,t[6]=(R*p*u-h*M*u-R*l*m+i*M*m+h*l*g-i*p*g)*I,t[7]=(h*x*u-_*p*u+_*l*m-i*x*m-h*l*y+i*p*y)*I,t[8]=D*I,t[9]=(R*v*u-_*w*u-R*s*y+i*w*y+_*s*g-i*v*g)*I,t[10]=(h*w*u-R*d*u+R*s*m-i*w*m-h*s*g+i*d*g)*I,t[11]=(_*d*u-h*v*u-_*s*m+i*v*m+h*s*y-i*d*y)*I,t[12]=H*I,t[13]=(_*w*l-R*v*l+R*s*x-i*w*x-_*s*M+i*v*M)*I,t[14]=(R*d*l-h*w*l-R*s*p+i*w*p+h*s*M-i*d*M)*I,t[15]=(h*v*l-_*d*l+_*s*p-i*v*p-h*s*x+i*d*x)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,p=t.z,m=u*h,_=u*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*h,0,m*p-l*d,_*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,_=h+h,v=d+d,x=u*m,y=u*_,R=u*v,w=h*_,M=h*v,g=d*v,P=p*m,O=p*_,D=p*v,H=s.x,z=s.y,I=s.z;return l[0]=(1-(w+g))*H,l[1]=(y+D)*H,l[2]=(R-O)*H,l[3]=0,l[4]=(y-D)*z,l[5]=(1-(x+g))*z,l[6]=(M+P)*z,l[7]=0,l[8]=(R+O)*I,l[9]=(M-P)*I,l[10]=(1-(x+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=rr.set(l[0],l[1],l[2]).length();const h=rr.set(l[4],l[5],l[6]).length(),d=rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const m=1/u,_=1/h,v=1/d;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=aa){const p=this.elements,m=2*u/(i-t),_=2*u/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let y,R;if(d===aa)y=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===yc)y=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=aa){const p=this.elements,m=1/(i-t),_=1/(s-l),v=1/(h-u),x=(i+t)*m,y=(s+l)*_;let R,w;if(d===aa)R=(h+u)*v,w=-2*v;else if(d===yc)R=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=w,p[14]=-R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const rr=new et,_i=new en,Ux=new et(0,0,0),Lx=new et(1,1,1),La=new et,Ql=new et,Yn=new et,Q_=new en,J_=new Ms;class oa{constructor(t=0,i=0,s=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-pe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Q_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Q_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return J_.setFromEuler(this),this.setFromQuaternion(J_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class nv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nx=0;const $_=new et,or=new Ms,$i=new en,Jl=new et,Do=new et,Ox=new et,Px=new Ms,tg=new et(1,0,0),eg=new et(0,1,0),ng=new et(0,0,1),ig={type:"added"},zx={type:"removed"},lr={type:"childadded",child:null},Yf={type:"childremoved",child:null};class Kn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const t=new et,i=new oa,s=new Ms,l=new et(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new oe}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return or.setFromAxisAngle(t,i),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,i){return or.setFromAxisAngle(t,i),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(tg,t)}rotateY(t){return this.rotateOnAxis(eg,t)}rotateZ(t){return this.rotateOnAxis(ng,t)}translateOnAxis(t,i){return $_.copy(t).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(tg,t)}translateY(t){return this.translateOnAxis(eg,t)}translateZ(t){return this.translateOnAxis(ng,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Jl.copy(t):Jl.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Do,Jl,this.up):$i.lookAt(Jl,Do,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),or.setFromRotationMatrix($i),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ig),lr.child=t,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zx),Yf.child=t,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ig),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,Ox),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Px,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),v=h(t.shapes),x=h(t.skeletons),y=h(t.animations),R=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),R.length>0&&(s.nodes=R)}return s.object=l,s;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Kn.DEFAULT_UP=new et(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new et,ta=new et,jf=new et,ea=new et,cr=new et,ur=new et,ag=new et,Zf=new et,Kf=new et,Qf=new et,Jf=new Ke,$f=new Ke,th=new Ke;class Si{constructor(t=new et,i=new et,s=new et){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),gi.subVectors(t,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){gi.subVectors(l,i),ta.subVectors(s,i),jf.subVectors(t,i);const h=gi.dot(gi),d=gi.dot(ta),p=gi.dot(jf),m=ta.dot(ta),_=ta.dot(jf),v=h*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(m*p-d*_)*x,R=(h*_-d*p)*x;return u.set(1-y-R,R,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(t,i,s,l,u,h,d,p){return this.getBarycoord(t,i,s,l,ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ea.x),p.addScaledVector(h,ea.y),p.addScaledVector(d,ea.z),p)}static getInterpolatedAttribute(t,i,s,l,u,h){return Jf.setScalar(0),$f.setScalar(0),th.setScalar(0),Jf.fromBufferAttribute(t,i),$f.fromBufferAttribute(t,s),th.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Jf,u.x),h.addScaledVector($f,u.y),h.addScaledVector(th,u.z),h}static isFrontFacing(t,i,s,l){return gi.subVectors(s,i),ta.subVectors(t,i),gi.cross(ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),gi.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;cr.subVectors(l,s),ur.subVectors(u,s),Zf.subVectors(t,s);const p=cr.dot(Zf),m=ur.dot(Zf);if(p<=0&&m<=0)return i.copy(s);Kf.subVectors(t,l);const _=cr.dot(Kf),v=ur.dot(Kf);if(_>=0&&v<=_)return i.copy(l);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(cr,h);Qf.subVectors(t,u);const y=cr.dot(Qf),R=ur.dot(Qf);if(R>=0&&y<=R)return i.copy(u);const w=y*m-p*R;if(w<=0&&m>=0&&R<=0)return d=m/(m-R),i.copy(s).addScaledVector(ur,d);const M=_*R-y*v;if(M<=0&&v-_>=0&&y-R>=0)return ag.subVectors(u,l),d=(v-_)/(v-_+(y-R)),i.copy(l).addScaledVector(ag,d);const g=1/(M+w+x);return h=w*g,d=x*g,i.copy(s).addScaledVector(cr,h).addScaledVector(ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},$l={h:0,s:0,l:0};function eh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class we{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=vx(t,1),i=pe(i,0,1),s=pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=eh(h,u,t+1/3),this.g=eh(h,u,t),this.b=eh(h,u,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=li){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const s=iv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ce.fromWorkingColorSpace(bn.copy(this),t),Math.round(pe(bn.r*255,0,255))*65536+Math.round(pe(bn.g*255,0,255))*256+Math.round(pe(bn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(bn.copy(this),i);const s=bn.r,l=bn.g,u=bn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=_<=.5?v/(h+d):v/(2-h-d),h){case s:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-s)/v+2;break;case u:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=li){Ce.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,l=bn.b;return t!==li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Na),this.setHSL(Na.h+t,Na.s+i,Na.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Na),t.getHSL($l);const s=Ff(Na.h,$l.h,i),l=Ff(Na.s,$l.s,i),u=Ff(Na.l,$l.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new we;we.NAMES=iv;let Bx=0;class bc extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=Sr,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(s.blending=this.blending),this.side!==Ia&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ph&&(s.blendSrc=this.blendSrc),this.blendDst!==mh&&(s.blendDst=this.blendDst),this.blendEquation!==ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ec extends bc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new et,tc=new he;let Fx=0;class Ui{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=W_,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(t),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=In(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==W_&&(t.usage=this.usage),t}}class av extends Ui{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class sv extends Ui{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Li extends Ui{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Ix=0;const oi=new en,nh=new Kn,fr=new et,jn=new Bo,Uo=new Bo,_n=new et;class Ha extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($g(t)?sv:av)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new oe().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,s){return oi.makeTranslation(t,i,s),this.applyMatrix4(oi),this}scale(t,i,s){return oi.makeScale(t,i,s),this.applyMatrix4(oi),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Li(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ud);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const s=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(jn.min,Uo.min),jn.expandByPoint(_n),_n.addVectors(jn.max,Uo.max),jn.expandByPoint(_n)):(jn.expandByPoint(Uo.min),jn.expandByPoint(Uo.max))}jn.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)_n.fromBufferAttribute(d,m),p&&(fr.fromBufferAttribute(t,m),_n.add(fr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<s.count;K++)d[K]=new et,p[K]=new et;const m=new et,_=new et,v=new et,x=new he,y=new he,R=new he,w=new et,M=new et;function g(K,C,A){m.fromBufferAttribute(s,K),_.fromBufferAttribute(s,C),v.fromBufferAttribute(s,A),x.fromBufferAttribute(u,K),y.fromBufferAttribute(u,C),R.fromBufferAttribute(u,A),_.sub(m),v.sub(m),y.sub(x),R.sub(x);const F=1/(y.x*R.y-R.x*y.y);isFinite(F)&&(w.copy(_).multiplyScalar(R.y).addScaledVector(v,-y.y).multiplyScalar(F),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-R.x).multiplyScalar(F),d[K].add(w),d[C].add(w),d[A].add(w),p[K].add(M),p[C].add(M),p[A].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ot=A.count;for(let st=F,ft=F+ot;st<ft;st+=3)g(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const O=new et,D=new et,H=new et,z=new et;function I(K){H.fromBufferAttribute(l,K),z.copy(H);const C=d[K];O.copy(C),O.sub(H.multiplyScalar(H.dot(C))).normalize(),D.crossVectors(z,C);const F=D.dot(p[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,F)}for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ot=A.count;for(let st=F,ft=F+ot;st<ft;st+=3)I(t.getX(st+0)),I(t.getX(st+1)),I(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new et,u=new et,h=new et,d=new et,p=new et,m=new et,_=new et,v=new et;if(t)for(let x=0,y=t.count;x<y;x+=3){const R=t.getX(x+0),w=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),d.add(_),p.add(_),m.add(_),s.setXYZ(R,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let y=0,R=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*_;for(let g=0;g<_;g++)x[R++]=m[y++]}return new Ui(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ha,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],y=t(x,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];_.push(y.toJSON(t.data))}_.length>0&&(l[p]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,y=v.length;x<y;x++)_.push(v[x].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sg=new en,cs=new ev,ec=new ud,rg=new et,nc=new et,ic=new et,ac=new et,ih=new et,sc=new et,og=new et,rc=new et;class Zn extends Kn{constructor(t=new Ha,i=new Ec){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){sc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&(ih.fromBufferAttribute(v,t),h?sc.addScaledVector(ih,_):sc.addScaledVector(ih.sub(i),_))}i.add(sc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ec.copy(s.boundingSphere),ec.applyMatrix4(u),cs.copy(t.ray).recast(t.near),!(ec.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ec,rg)===null||cs.origin.distanceToSquared(rg)>(t.far-t.near)**2))&&(sg.copy(u).invert(),cs.copy(t.ray).applyMatrix4(sg),!(s.boundingBox!==null&&cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,cs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=x.length;R<w;R++){const M=x[R],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const z=d.getX(D),I=d.getX(D+1),K=d.getX(D+2);l=oc(this,g,t,s,m,_,v,z,I,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=oc(this,h,t,s,m,_,v,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let R=0,w=x.length;R<w;R++){const M=x[R],g=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const z=D,I=D+1,K=D+2;l=oc(this,g,t,s,m,_,v,z,I,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=M,O=M+1,D=M+2;l=oc(this,h,t,s,m,_,v,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Hx(o,t,i,s,l,u,h,d){let p;if(t.side===Nn?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,t.side===Ia,d),p===null)return null;rc.copy(d),rc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(rc);return m<i.near||m>i.far?null:{distance:m,point:rc.clone(),object:o}}function oc(o,t,i,s,l,u,h,d,p,m){o.getVertexPosition(d,nc),o.getVertexPosition(p,ic),o.getVertexPosition(m,ac);const _=Hx(o,t,i,s,nc,ic,ac,og);if(_){const v=new et;Si.getBarycoord(og,nc,ic,ac,v),l&&(_.uv=Si.getInterpolatedAttribute(l,d,p,m,v,new he)),u&&(_.uv1=Si.getInterpolatedAttribute(u,d,p,m,v,new he)),h&&(_.normal=Si.getInterpolatedAttribute(h,d,p,m,v,new et),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new et,materialIndex:0};Si.getNormal(nc,ic,ac,x.normal),_.face=x,_.barycoord=v}return _}class Fo extends Ha{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],_=[],v=[];let x=0,y=0;R("z","y","x",-1,-1,s,i,t,h,u,0),R("z","y","x",1,-1,s,i,-t,h,u,1),R("x","z","y",1,1,t,s,i,l,h,2),R("x","z","y",1,-1,t,s,-i,l,h,3),R("x","y","z",1,-1,t,i,s,l,u,4),R("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Li(m,3)),this.setAttribute("normal",new Li(_,3)),this.setAttribute("uv",new Li(v,2));function R(w,M,g,P,O,D,H,z,I,K,C){const A=D/I,F=H/K,ot=D/2,st=H/2,ft=z/2,dt=I+1,k=K+1;let at=0,Y=0;const St=new et;for(let U=0;U<k;U++){const nt=U*F-st;for(let yt=0;yt<dt;yt++){const bt=yt*A-ot;St[w]=bt*P,St[M]=nt*O,St[g]=ft,m.push(St.x,St.y,St.z),St[w]=0,St[M]=0,St[g]=z>0?1:-1,_.push(St.x,St.y,St.z),v.push(yt/I),v.push(1-U/K),at+=1}}for(let U=0;U<K;U++)for(let nt=0;nt<I;nt++){const yt=x+nt+dt*U,bt=x+nt+dt*(U+1),q=x+(nt+1)+dt*(U+1),ht=x+(nt+1)+dt*U;p.push(yt,bt,ht),p.push(bt,q,ht),Y+=6}d.addGroup(y,Y,C),y+=Y,x+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ln(o){const t={};for(let i=0;i<o.length;i++){const s=Cr(o[i]);for(const l in s)t[l]=s[l]}return t}function Gx(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function rv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Vx={clone:Cr,merge:Ln};var kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends bc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=Xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Gx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ov extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=aa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new et,lg=new he,cg=new he;class ci extends ov{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,i){return this.getViewBounds(t,lg,cg),i.subVectors(cg,lg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Sc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hr=-90,dr=1;class Wx extends Kn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(hr,dr,t,i);l.layers=this.layers,this.add(l);const u=new ci(hr,dr,t,i);u.layers=this.layers,this.add(u);const h=new ci(hr,dr,t,i);h.layers=this.layers,this.add(h);const d=new ci(hr,dr,t,i);d.layers=this.layers,this.add(d);const p=new ci(hr,dr,t,i);p.layers=this.layers,this.add(p);const m=new ci(hr,dr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,x,y),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class lv extends On{constructor(t,i,s,l,u,h,d,p,m,_){t=t!==void 0?t:[],i=i!==void 0?i:Er,super(t,i,s,l,u,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qx extends xs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new lv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Fo(5,5,5),u=new Ni({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Nn,blending:Ba});u.uniforms.tEquirect.value=i;const h=new Zn(l,u),d=i.minFilter;return i.minFilter===vs&&(i.minFilter=Di),new Wx(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class lc extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yx={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),g=this._getHandJoint(m,w);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),y=.02,R=.005;m.inputState.pinching&&x>y+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=y-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new lc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class jx extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const sh=new et,Zx=new et,Kx=new oe;class Pa{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=sh.subVectors(s,i).cross(Zx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(sh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Kx.getNormalMatrix(t),l=this.coplanarPoint(sh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new ud,cc=new et;class cv{constructor(t=new Pa,i=new Pa,s=new Pa,l=new Pa,u=new Pa,h=new Pa){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=aa){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],_=l[5],v=l[6],x=l[7],y=l[8],R=l[9],w=l[10],M=l[11],g=l[12],P=l[13],O=l[14],D=l[15];if(s[0].setComponents(p-u,x-m,M-y,D-g).normalize(),s[1].setComponents(p+u,x+m,M+y,D+g).normalize(),s[2].setComponents(p+h,x+_,M+R,D+P).normalize(),s[3].setComponents(p-h,x-_,M-R,D-P).normalize(),s[4].setComponents(p-d,x-v,M-w,D-O).normalize(),i===aa)s[5].setComponents(p+d,x+v,M+w,D+O).normalize();else if(i===yc)s[5].setComponents(d,v,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(cc.x=l.normal.x>0?t.max.x:t.min.x,cc.y=l.normal.y>0?t.max.y:t.min.y,cc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uv extends On{constructor(t,i,s,l,u,h,d,p,m,_=xr){if(_!==xr&&_!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===xr&&(s=Ss),s===void 0&&_===Ar&&(s=br),super(null,l,u,h,d,p,_,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Mi,this.minFilter=p!==void 0?p:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ac extends Ha{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,v=t/d,x=i/p,y=[],R=[],w=[],M=[];for(let g=0;g<_;g++){const P=g*x-h;for(let O=0;O<m;O++){const D=O*v-u;R.push(D,-P,0),w.push(0,0,1),M.push(O/d),M.push(1-g/p)}}for(let g=0;g<p;g++)for(let P=0;P<d;P++){const O=P+m*g,D=P+m*(g+1),H=P+1+m*(g+1),z=P+1+m*g;y.push(O,D,z),y.push(D,H,z)}this.setIndex(y),this.setAttribute("position",new Li(R,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.width,t.height,t.widthSegments,t.heightSegments)}}class _r extends Ha{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const _=[],v=new et,x=new et,y=[],R=[],w=[],M=[];for(let g=0;g<=s;g++){const P=[],O=g/s;let D=0;g===0&&h===0?D=.5/i:g===s&&p===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const z=H/i;v.x=-t*Math.cos(l+z*u)*Math.sin(h+O*d),v.y=t*Math.cos(h+O*d),v.z=t*Math.sin(l+z*u)*Math.sin(h+O*d),R.push(v.x,v.y,v.z),x.copy(v).normalize(),w.push(x.x,x.y,x.z),M.push(z+D,1-O),P.push(m++)}_.push(P)}for(let g=0;g<s;g++)for(let P=0;P<i;P++){const O=_[g][P+1],D=_[g][P],H=_[g+1][P],z=_[g+1][P+1];(g!==0||h>0)&&y.push(O,D,z),(g!==s-1||p<Math.PI)&&y.push(D,H,z)}this.setIndex(y),this.setAttribute("position",new Li(R,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qx extends bc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jx extends bc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ug={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class $x{constructor(t,i,s){const l=this;let u=!1,h=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(_){d++,u===!1&&l.onStart!==void 0&&l.onStart(_,h,d),u=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return m.push(_,v),this},this.removeHandler=function(_){const v=m.indexOf(_);return v!==-1&&m.splice(v,2),this},this.getHandler=function(_){for(let v=0,x=m.length;v<x;v+=2){const y=m[v],R=m[v+1];if(y.global&&(y.lastIndex=0),y.test(_))return R}return null}}}const tM=new $x;class fd{constructor(t){this.manager=t!==void 0?t:tM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}fd.DEFAULT_MATERIAL_NAME="__DEFAULT";class eM extends fd{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=ug.get(t);if(h!==void 0)return u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0),h;const d=Oo("img");function p(){_(),ug.add(t,this),i&&i(this),u.manager.itemEnd(t)}function m(v){_(),l&&l(v),u.manager.itemError(t),u.manager.itemEnd(t)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(t),d.src=t,d}}class nM extends fd{constructor(t){super(t)}load(t,i,s,l){const u=new On,h=new eM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class iM extends ov{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class aM extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class fg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sM extends ys{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function hg(o,t,i,s){const l=rM(s);switch(i){case Wg:return o*t;case Yg:return o*t;case jg:return o*t*2;case Zg:return o*t/l.components*l.byteLength;case rd:return o*t/l.components*l.byteLength;case Kg:return o*t*2/l.components*l.byteLength;case od:return o*t*2/l.components*l.byteLength;case qg:return o*t*3/l.components*l.byteLength;case xi:return o*t*4/l.components*l.byteLength;case ld:return o*t*4/l.components*l.byteLength;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case _c:case gc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ch:case Dh:return Math.max(o,16)*Math.max(t,8)/4;case Rh:case wh:return Math.max(o,8)*Math.max(t,8)/2;case Uh:case Lh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Oh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case zh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case qh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case vc:case jh:case Zh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Qg:case Kh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rM(o){switch(o){case ra:case Vg:return{byteLength:1,components:1};case No:case kg:case Po:return{byteLength:2,components:1};case ad:case sd:return{byteLength:2,components:4};case Ss:case id:case ia:return{byteLength:4,components:1};case Xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fv(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function oM(o){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const _=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,_);else{v.sort((y,R)=>y.start-R.start);let x=0;for(let y=1;y<v.length;y++){const R=v[x],w=v[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++x,v[x]=w)}v.length=x+1;for(let y=0,R=v.length;y<R;y++){const w=v[y];o.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
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
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MM=`#ifdef USE_IRIDESCENCE
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
#endif`,yM=`#ifdef USE_BUMPMAP
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UM=`#define PI 3.141592653589793
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NM=`vec3 transformedNormal = objectNormal;
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
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
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
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
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
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,ry=`struct PhysicalMaterial {
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
}`,oy=`
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gy=`#if defined( USE_POINTS_UV )
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
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
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
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dy=`#ifdef USE_NORMALMAP
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
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qy=`float getShadowMask() {
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
}`,Yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#ifdef USE_TRANSMISSION
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
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
}`,pE=`#if DEPTH_PACKING == 3200
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
}`,mE=`#define DISTANCE
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
}`,_E=`#define DISTANCE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`uniform float scale;
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
}`,xE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,yE=`uniform vec3 diffuse;
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
}`,EE=`#define LAMBERT
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
}`,TE=`#define LAMBERT
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
}`,bE=`#define MATCAP
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
}`,AE=`#define MATCAP
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
}`,RE=`#define NORMAL
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
}`,CE=`#define NORMAL
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
}`,wE=`#define PHONG
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
}`,DE=`#define PHONG
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
}`,UE=`#define STANDARD
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
}`,LE=`#define STANDARD
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
}`,NE=`#define TOON
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
}`,OE=`#define TOON
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
}`,PE=`uniform float size;
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
}`,zE=`uniform vec3 diffuse;
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
}`,BE=`#include <common>
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
}`,FE=`uniform vec3 color;
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
}`,IE=`uniform float rotation;
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
}`,HE=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:fM,alphatest_fragment:hM,alphatest_pars_fragment:dM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:_M,batching_vertex:gM,begin_vertex:vM,beginnormal_vertex:SM,bsdfs:xM,iridescence_fragment:MM,bumpmap_pars_fragment:yM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:CM,color_pars_vertex:wM,color_vertex:DM,common:UM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:NM,displacementmap_pars_vertex:OM,displacementmap_vertex:PM,emissivemap_fragment:zM,emissivemap_pars_fragment:BM,colorspace_fragment:FM,colorspace_pars_fragment:IM,envmap_fragment:HM,envmap_common_pars_fragment:GM,envmap_pars_fragment:VM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:ty,envmap_vertex:XM,fog_vertex:WM,fog_pars_vertex:qM,fog_fragment:YM,fog_pars_fragment:jM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:KM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:JM,lights_pars_begin:$M,lights_toon_fragment:ey,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:ay,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:oy,lights_fragment_maps:ly,lights_fragment_end:cy,logdepthbuf_fragment:uy,logdepthbuf_pars_fragment:fy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:dy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:_y,map_particle_pars_fragment:gy,metalnessmap_fragment:vy,metalnessmap_pars_fragment:Sy,morphinstance_vertex:xy,morphcolor_vertex:My,morphnormal_vertex:yy,morphtarget_pars_vertex:Ey,morphtarget_vertex:Ty,normal_fragment_begin:by,normal_fragment_maps:Ay,normal_pars_fragment:Ry,normal_pars_vertex:Cy,normal_vertex:wy,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Ny,iridescence_pars_fragment:Oy,opaque_fragment:Py,packing:zy,premultiplied_alpha_fragment:By,project_vertex:Fy,dithering_fragment:Iy,dithering_pars_fragment:Hy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Xy,shadowmap_vertex:Wy,shadowmask_pars_fragment:qy,skinbase_vertex:Yy,skinning_pars_vertex:jy,skinning_vertex:Zy,skinnormal_vertex:Ky,specularmap_fragment:Qy,specularmap_pars_fragment:Jy,tonemapping_fragment:$y,tonemapping_pars_fragment:tE,transmission_fragment:eE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:aE,uv_vertex:sE,worldpos_vertex:rE,background_vert:oE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:uE,cube_vert:fE,cube_frag:hE,depth_vert:dE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:_E,equirect_vert:gE,equirect_frag:vE,linedashed_vert:SE,linedashed_frag:xE,meshbasic_vert:ME,meshbasic_frag:yE,meshlambert_vert:EE,meshlambert_frag:TE,meshmatcap_vert:bE,meshmatcap_frag:AE,meshnormal_vert:RE,meshnormal_frag:CE,meshphong_vert:wE,meshphong_frag:DE,meshphysical_vert:UE,meshphysical_frag:LE,meshtoon_vert:NE,meshtoon_frag:OE,points_vert:PE,points_frag:zE,shadow_vert:BE,shadow_frag:FE,sprite_vert:IE,sprite_frag:HE},Ut={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ci={basic:{uniforms:Ln([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Ln([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Ln([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Ln([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Ln([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Ln([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Ln([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Ln([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Ln([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Ln([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Ln([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Ln([Ut.common,Ut.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Ln([Ut.lights,Ut.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ci.physical={uniforms:Ln([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const uc={r:0,b:0,g:0},fs=new oa,GE=new en;function VE(o,t,i,s,l,u,h){const d=new we(0);let p=u===!0?0:1,m,_,v=null,x=0,y=null;function R(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const H=R(O);H===null?g(d,p):H&&H.isColor&&(g(H,1),D=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,D){const H=R(D);H&&(H.isCubeTexture||H.mapping===Tc)?(_===void 0&&(_=new Zn(new Fo(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Cr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,I,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),fs.copy(D.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(GE.makeRotationFromEuler(fs)),_.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Pe,(v!==H||x!==H.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,v=H,x=H.version,y=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Zn(new Ac(2,2),new Ni({name:"BackgroundMaterial",uniforms:Cr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Pe,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,v=H,x=H.version,y=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function g(O,D){O.getRGB(uc,rv(o)),s.buffers.color.setClear(uc.r,uc.g,uc.b,D,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,g(d,p)},render:w,addToRenderList:M,dispose:P}}function kE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(A,F,ot,st,ft){let dt=!1;const k=v(st,ot,F);u!==k&&(u=k,m(u.object)),dt=y(A,st,ot,ft),dt&&R(A,st,ot,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(A,F,ot,st),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function v(A,F,ot){const st=ot.wireframe===!0;let ft=s[A.id];ft===void 0&&(ft={},s[A.id]=ft);let dt=ft[F.id];dt===void 0&&(dt={},ft[F.id]=dt);let k=dt[st];return k===void 0&&(k=x(p()),dt[st]=k),k}function x(A){const F=[],ot=[],st=[];for(let ft=0;ft<i;ft++)F[ft]=0,ot[ft]=0,st[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ot,attributeDivisors:st,object:A,attributes:{},index:null}}function y(A,F,ot,st){const ft=u.attributes,dt=F.attributes;let k=0;const at=ot.getAttributes();for(const Y in at)if(at[Y].location>=0){const U=ft[Y];let nt=dt[Y];if(nt===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),U===void 0||U.attribute!==nt||nt&&U.data!==nt.data)return!0;k++}return u.attributesNum!==k||u.index!==st}function R(A,F,ot,st){const ft={},dt=F.attributes;let k=0;const at=ot.getAttributes();for(const Y in at)if(at[Y].location>=0){let U=dt[Y];U===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(U=A.instanceColor));const nt={};nt.attribute=U,U&&U.data&&(nt.data=U.data),ft[Y]=nt,k++}u.attributes=ft,u.attributesNum=k,u.index=st}function w(){const A=u.newAttributes;for(let F=0,ot=A.length;F<ot;F++)A[F]=0}function M(A){g(A,0)}function g(A,F){const ot=u.newAttributes,st=u.enabledAttributes,ft=u.attributeDivisors;ot[A]=1,st[A]===0&&(o.enableVertexAttribArray(A),st[A]=1),ft[A]!==F&&(o.vertexAttribDivisor(A,F),ft[A]=F)}function P(){const A=u.newAttributes,F=u.enabledAttributes;for(let ot=0,st=F.length;ot<st;ot++)F[ot]!==A[ot]&&(o.disableVertexAttribArray(ot),F[ot]=0)}function O(A,F,ot,st,ft,dt,k){k===!0?o.vertexAttribIPointer(A,F,ot,ft,dt):o.vertexAttribPointer(A,F,ot,st,ft,dt)}function D(A,F,ot,st){w();const ft=st.attributes,dt=ot.getAttributes(),k=F.defaultAttributeValues;for(const at in dt){const Y=dt[at];if(Y.location>=0){let St=ft[at];if(St===void 0&&(at==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),at==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){const U=St.normalized,nt=St.itemSize,yt=t.get(St);if(yt===void 0)continue;const bt=yt.buffer,q=yt.type,ht=yt.bytesPerElement,gt=q===o.INT||q===o.UNSIGNED_INT||St.gpuType===id;if(St.isInterleavedBufferAttribute){const Et=St.data,At=Et.stride,Yt=St.offset;if(Et.isInstancedInterleavedBuffer){for(let Nt=0;Nt<Y.locationSize;Nt++)g(Y.location+Nt,Et.meshPerAttribute);A.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Nt=0;Nt<Y.locationSize;Nt++)M(Y.location+Nt);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let Nt=0;Nt<Y.locationSize;Nt++)O(Y.location+Nt,nt/Y.locationSize,q,U,At*ht,(Yt+nt/Y.locationSize*Nt)*ht,gt)}else{if(St.isInstancedBufferAttribute){for(let Et=0;Et<Y.locationSize;Et++)g(Y.location+Et,St.meshPerAttribute);A.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Et=0;Et<Y.locationSize;Et++)M(Y.location+Et);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let Et=0;Et<Y.locationSize;Et++)O(Y.location+Et,nt/Y.locationSize,q,U,nt*ht,nt/Y.locationSize*Et*ht,gt)}}else if(k!==void 0){const U=k[at];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}P()}function H(){K();for(const A in s){const F=s[A];for(const ot in F){const st=F[ot];for(const ft in st)_(st[ft].object),delete st[ft];delete F[ot]}delete s[A]}}function z(A){if(s[A.id]===void 0)return;const F=s[A.id];for(const ot in F){const st=F[ot];for(const ft in st)_(st[ft].object),delete st[ft];delete F[ot]}delete s[A.id]}function I(A){for(const F in s){const ot=s[F];if(ot[A.id]===void 0)continue;const st=ot[A.id];for(const ft in st)_(st[ft].object),delete st[ft];delete ot[A.id]}}function K(){C(),h=!0,u!==l&&(u=l,m(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function XE(o,t,i){let s;function l(m){s=m}function u(m,_){o.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,v){v!==0&&(o.drawArraysInstanced(s,m,_,v),i.update(_,s,v))}function d(m,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,v);let y=0;for(let R=0;R<v;R++)y+=_[R];i.update(y,s,1)}function p(m,_,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let R=0;R<m.length;R++)h(m[R],_[R],x[R]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,_,0,x,0,v);let R=0;for(let w=0;w<v;w++)R+=_[w]*x[w];i.update(R,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function WE(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==xi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const K=I===Po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ra&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ia&&!K)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=R>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:H,maxSamples:z}}function qE(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Pa,d=new oe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||s!==0||l;return l=x,s=v.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,y){const R=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,g=o.get(v);if(!l||R===null||R.length===0||u&&!M)u?_(null):m();else{const P=u?0:s,O=P*4;let D=g.clippingState||null;p.value=D,D=_(R,x,O,y);for(let H=0;H!==O;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,x,y,R){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=p.value,R!==!0||M===null){const g=y+w*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<g)&&(M=new Float32Array(g));for(let O=0,D=y;O!==w;++O,D+=4)h.copy(v[O]).applyMatrix4(P,d),h.normal.toArray(M,D),M[D+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}function YE(o){let t=new WeakMap;function i(h,d){return d===Eh?h.mapping=Er:d===Th&&(h.mapping=Tr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Eh||d===Th)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new qx(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const gr=4,dg=[.125,.215,.35,.446,.526,.582],_s=20,rh=new iM,pg=new we;let oh=null,lh=0,ch=0,uh=!1;const ps=(1+Math.sqrt(5))/2,pr=1/ps,mg=[new et(-ps,pr,0),new et(ps,pr,0),new et(-pr,0,ps),new et(pr,0,ps),new et(0,ps,-pr),new et(0,ps,pr),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],jE=new et;class _g{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=jE}=u;oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oh,lh,ch),this._renderer.xr.enabled=uh,t.scissorTest=!1,fc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Er||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Po,format:xi,colorSpace:Rr,depthBuffer:!1},l=gg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZE(u)),this._blurMaterial=KE(u,t,i)}return l}_compileMaterial(t){const i=new Zn(this._lodPlanes[0],t);this._renderer.compile(i,rh)}_sceneToCubeUV(t,i,s,l,u){const p=new ci(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(pg),v.toneMapping=Fa,v.autoClear=!1;const R=new Ec({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),w=new Zn(new Fo,R);let M=!1;const g=t.background;g?g.isColor&&(R.color.copy(g),t.background=null,M=!0):(R.color.copy(pg),M=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[P],u.y,u.z)):O===1?(p.up.set(0,0,m[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[P],u.z)):(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[P]));const D=this._cubeSize;fc(l,O*D,P>2?D:0,D,D),v.setRenderTarget(l),M&&v.render(w,p),v.render(t,p)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Er||t.mapping===Tr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Zn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;fc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,rh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=mg[(l-u-1)%mg.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Zn(this._lodPlanes[l],m),x=m.uniforms,y=this._sizeLods[s]-1,R=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*_s-1),w=u/R,M=isFinite(u)?1+Math.floor(_*w):_s;M>_s&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${_s}`);const g=[];let P=0;for(let I=0;I<_s;++I){const K=I/w,C=Math.exp(-K*K/2);g.push(C),I===0?P+=C:I<M&&(P+=2*C)}for(let I=0;I<g.length;I++)g[I]=g[I]/P;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=R,x.mipInt.value=O-s;const D=this._sizeLods[l],H=3*D*(l>O-gr?l-O+gr:0),z=4*(this._cubeSize-D);fc(i,H,z,3*D,2*D),p.setRenderTarget(i),p.render(v,rh)}}function ZE(o){const t=[],i=[],s=[];let l=o;const u=o-gr+1+dg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-gr?p=dg[h-o+gr-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,R=6,w=3,M=2,g=1,P=new Float32Array(w*R*y),O=new Float32Array(M*R*y),D=new Float32Array(g*R*y);for(let z=0;z<y;z++){const I=z%3*2/3-1,K=z>2?0:-1,C=[I,K,0,I+2/3,K,0,I+2/3,K+1,0,I,K,0,I+2/3,K+1,0,I,K+1,0];P.set(C,w*R*z),O.set(x,M*R*z);const A=[z,z,z,z,z,z];D.set(A,g*R*z)}const H=new Ha;H.setAttribute("position",new Ui(P,w)),H.setAttribute("uv",new Ui(O,M)),H.setAttribute("faceIndex",new Ui(D,g)),t.push(H),l>gr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function gg(o,t,i){const s=new xs(o,t,i);return s.texture.mapping=Tc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function KE(o,t,i){const s=new Float32Array(_s),l=new et(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function vg(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Sg(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function hd(){return`

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
	`}function QE(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Eh||p===Th,_=p===Er||p===Tr;if(m||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new _g(o)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new _g(o)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function JE(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ds("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function $E(o,t,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const R in x.attributes)t.remove(x.attributes[R]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(t.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)t.update(x[y],o.ARRAY_BUFFER)}function m(v){const x=[],y=v.index,R=v.attributes.position;let w=0;if(y!==null){const P=y.array;w=y.version;for(let O=0,D=P.length;O<D;O+=3){const H=P[O+0],z=P[O+1],I=P[O+2];x.push(H,z,z,I,I,H)}}else if(R!==void 0){const P=R.array;w=R.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const H=O+0,z=O+1,I=O+2;x.push(H,z,z,I,I,H)}}else return;const M=new($g(x)?sv:av)(x,1);M.version=w;const g=u.get(v);g&&t.remove(g),u.set(v,M)}function _(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function tT(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function p(x,y){o.drawElements(s,y,u,x*h),i.update(y,s,1)}function m(x,y,R){R!==0&&(o.drawElementsInstanced(s,y,u,x*h,R),i.update(y,s,R))}function _(x,y,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,R);let M=0;for(let g=0;g<R;g++)M+=y[g];i.update(M,s,1)}function v(x,y,R,w){if(R===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<x.length;g++)m(x[g]/h,y[g],w[g]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,w,0,R);let g=0;for(let P=0;P<R;P++)g+=y[P]*w[P];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function eT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nT(o,t,i){const s=new WeakMap,l=new Ke;function u(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let A=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const R=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;R===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let H=d.attributes.position.count*D,z=1;H>t.maxTextureSize&&(z=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const I=new Float32Array(H*z*4*v),K=new tv(I,H,z,v);K.type=ia,K.needsUpdate=!0;const C=D*4;for(let F=0;F<v;F++){const ot=g[F],st=P[F],ft=O[F],dt=H*z*4*F;for(let k=0;k<ot.count;k++){const at=k*C;R===!0&&(l.fromBufferAttribute(ot,k),I[dt+at+0]=l.x,I[dt+at+1]=l.y,I[dt+at+2]=l.z,I[dt+at+3]=0),w===!0&&(l.fromBufferAttribute(st,k),I[dt+at+4]=l.x,I[dt+at+5]=l.y,I[dt+at+6]=l.z,I[dt+at+7]=0),M===!0&&(l.fromBufferAttribute(ft,k),I[dt+at+8]=l.x,I[dt+at+9]=l.y,I[dt+at+10]=l.z,I[dt+at+11]=ft.itemSize===4?l.w:1)}}x={count:v,texture:K,size:new he(H,z)},s.set(d,x),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const w=d.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function iT(o,t,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,_=p.geometry,v=t.get(p,_);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const hv=new On,xg=new uv(1,1),dv=new tv,pv=new wx,mv=new lv,Mg=[],yg=[],Eg=new Float32Array(16),Tg=new Float32Array(9),bg=new Float32Array(4);function wr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=Mg[l];if(u===void 0&&(u=new Float32Array(l),Mg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function un(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function fn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Rc(o,t){let i=yg[t];i===void 0&&(i=new Int32Array(t),yg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function aT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2fv(this.addr,t),fn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;o.uniform3fv(this.addr,t),fn(i,t)}}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4fv(this.addr,t),fn(i,t)}}function lT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;bg.set(s),o.uniformMatrix2fv(this.addr,!1,bg),fn(i,s)}}function cT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Tg.set(s),o.uniformMatrix3fv(this.addr,!1,Tg),fn(i,s)}}function uT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Eg.set(s),o.uniformMatrix4fv(this.addr,!1,Eg),fn(i,s)}}function fT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function hT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2iv(this.addr,t),fn(i,t)}}function dT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;o.uniform3iv(this.addr,t),fn(i,t)}}function pT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4iv(this.addr,t),fn(i,t)}}function mT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2uiv(this.addr,t),fn(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;o.uniform3uiv(this.addr,t),fn(i,t)}}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4uiv(this.addr,t),fn(i,t)}}function ST(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(xg.compareFunction=Jg,u=xg):u=hv,i.setTexture2D(t||u,l)}function xT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||pv,l)}function MT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||mv,l)}function yT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||dv,l)}function ET(o){switch(o){case 5126:return aT;case 35664:return sT;case 35665:return rT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return hT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return _T;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return yT}}function TT(o,t){o.uniform1fv(this.addr,t)}function bT(o,t){const i=wr(t,this.size,2);o.uniform2fv(this.addr,i)}function AT(o,t){const i=wr(t,this.size,3);o.uniform3fv(this.addr,i)}function RT(o,t){const i=wr(t,this.size,4);o.uniform4fv(this.addr,i)}function CT(o,t){const i=wr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function wT(o,t){const i=wr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function DT(o,t){const i=wr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function UT(o,t){o.uniform1iv(this.addr,t)}function LT(o,t){o.uniform2iv(this.addr,t)}function NT(o,t){o.uniform3iv(this.addr,t)}function OT(o,t){o.uniform4iv(this.addr,t)}function PT(o,t){o.uniform1uiv(this.addr,t)}function zT(o,t){o.uniform2uiv(this.addr,t)}function BT(o,t){o.uniform3uiv(this.addr,t)}function FT(o,t){o.uniform4uiv(this.addr,t)}function IT(o,t,i){const s=this.cache,l=t.length,u=Rc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||hv,u[h])}function HT(o,t,i){const s=this.cache,l=t.length,u=Rc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||pv,u[h])}function GT(o,t,i){const s=this.cache,l=t.length,u=Rc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||mv,u[h])}function VT(o,t,i){const s=this.cache,l=t.length,u=Rc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||dv,u[h])}function kT(o){switch(o){case 5126:return TT;case 35664:return bT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return zT;case 36295:return BT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}class XT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ET(i.type)}}class WT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kT(i.type)}}class qT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const fh=/(\w+)(\])?(\[|\.)?/g;function Ag(o,t){o.seq.push(t),o.map[t.id]=t}function YT(o,t,i){const s=o.name,l=s.length;for(fh.lastIndex=0;;){const u=fh.exec(s),h=fh.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Ag(i,m===void 0?new XT(d,o,t):new WT(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new qT(d),Ag(i,v)),i=v}}}class xc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);YT(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Rg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const jT=37297;let ZT=0;function KT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Cg=new oe;function QT(o){Ce._getMatrix(Cg,Ce.workingColorSpace,o);const t=`mat3( ${Cg.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Mc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function wg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+KT(o.getShaderSource(t),h)}else return l}function JT(o,t){const i=QT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function $T(o,t){let i;switch(t){case $S:i="Linear";break;case tx:i="Reinhard";break;case ex:i="Cineon";break;case nx:i="ACESFilmic";break;case ax:i="AgX";break;case sx:i="Neutral";break;case ix:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const hc=new et;function tb(){Ce.getLuminanceCoefficients(hc);const o=hc.x.toFixed(4),t=hc.y.toFixed(4),i=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function nb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function ib(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Lo(o){return o!==""}function Dg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ug(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(o){return o.replace(ab,rb)}const sb=new Map;function rb(o,t){let i=le[t];if(i===void 0){const s=sb.get(t);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return td(i)}const ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(o){return o.replace(ob,lb)}function lb(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Ng(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ig?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===LS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===na&&(t="SHADOWMAP_TYPE_VSM"),t}function ub(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Er:case Tr:t="ENVMAP_TYPE_CUBE";break;case Tc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Tr:t="ENVMAP_MODE_REFRACTION";break}return t}function hb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hg:t="ENVMAP_BLENDING_MULTIPLY";break;case QS:t="ENVMAP_BLENDING_MIX";break;case JS:t="ENVMAP_BLENDING_ADD";break}return t}function db(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function pb(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=cb(i),m=ub(i),_=fb(i),v=hb(i),x=db(i),y=eb(i),R=nb(u),w=l.createProgram();let M,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Lo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Lo).join(`
`),g.length>0&&(g+=`
`)):(M=[Ng(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),g=[Ng(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?le.tonemapping_pars_fragment:"",i.toneMapping!==Fa?$T("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,JT("linearToOutputTexel",i.outputColorSpace),tb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=td(h),h=Dg(h,i),h=Ug(h,i),d=td(d),d=Dg(d,i),d=Ug(d,i),h=Lg(h),d=Lg(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=P+M+h,D=P+g+d,H=Rg(l,l.VERTEX_SHADER,O),z=Rg(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(F){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(w).trim(),st=l.getShaderInfoLog(H).trim(),ft=l.getShaderInfoLog(z).trim();let dt=!0,k=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,z);else{const at=wg(l,H,"vertex"),Y=wg(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+at+`
`+Y)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||ft==="")&&(k=!1);k&&(F.diagnostics={runnable:dt,programLog:ot,vertexShader:{log:st,prefix:M},fragmentShader:{log:ft,prefix:g}})}l.deleteShader(H),l.deleteShader(z),K=new xc(l,w),C=ib(l,w)}let K;this.getUniforms=function(){return K===void 0&&I(this),K};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,jT)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=z,this}let mb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new gb(t),i.set(t,s)),s}}class gb{constructor(t){this.id=mb++,this.code=t,this.usedTimes=0}}function vb(o,t,i,s,l,u,h){const d=new nv,p=new _b,m=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function M(C,A,F,ot,st){const ft=ot.fog,dt=st.geometry,k=C.isMeshStandardMaterial?ot.environment:null,at=(C.isMeshStandardMaterial?i:t).get(C.envMap||k),Y=at&&at.mapping===Tc?at.image.height:null,St=R[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const U=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,nt=U!==void 0?U.length:0;let yt=0;dt.morphAttributes.position!==void 0&&(yt=1),dt.morphAttributes.normal!==void 0&&(yt=2),dt.morphAttributes.color!==void 0&&(yt=3);let bt,q,ht,gt;if(St){const Te=Ci[St];bt=Te.vertexShader,q=Te.fragmentShader}else bt=C.vertexShader,q=C.fragmentShader,p.update(C),ht=p.getVertexShaderID(C),gt=p.getFragmentShaderID(C);const Et=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Yt=st.isInstancedMesh===!0,Nt=st.isBatchedMesh===!0,xe=!!C.map,Me=!!C.matcap,Qt=!!at,B=!!C.aoMap,je=!!C.lightMap,se=!!C.bumpMap,ue=!!C.normalMap,kt=!!C.displacementMap,De=!!C.emissiveMap,Xt=!!C.metalnessMap,L=!!C.roughnessMap,E=C.anisotropy>0,tt=C.clearcoat>0,ut=C.dispersion>0,xt=C.iridescence>0,pt=C.sheen>0,Ht=C.transmission>0,wt=E&&!!C.anisotropyMap,zt=tt&&!!C.clearcoatMap,me=tt&&!!C.clearcoatNormalMap,Tt=tt&&!!C.clearcoatRoughnessMap,Bt=xt&&!!C.iridescenceMap,Kt=xt&&!!C.iridescenceThicknessMap,Gt=pt&&!!C.sheenColorMap,Ft=pt&&!!C.sheenRoughnessMap,ae=!!C.specularMap,jt=!!C.specularColorMap,Ue=!!C.specularIntensityMap,X=Ht&&!!C.transmissionMap,Lt=Ht&&!!C.thicknessMap,rt=!!C.gradientMap,_t=!!C.alphaMap,Ct=C.alphaTest>0,Dt=!!C.alphaHash,$t=!!C.extensions;let Ge=Fa;C.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ge=o.toneMapping);const nn={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:bt,fragmentShader:q,defines:C.defines,customVertexShaderID:ht,customFragmentShaderID:gt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Nt,batchingColor:Nt&&st._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&st.instanceColor!==null,instancingMorph:Yt&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Rr,alphaToCoverage:!!C.alphaToCoverage,map:xe,matcap:Me,envMap:Qt,envMapMode:Qt&&at.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:je,bumpMap:se,normalMap:ue,displacementMap:x&&kt,emissiveMap:De,normalMapObjectSpace:ue&&C.normalMapType===ux,normalMapTangentSpace:ue&&C.normalMapType===cx,metalnessMap:Xt,roughnessMap:L,anisotropy:E,anisotropyMap:wt,clearcoat:tt,clearcoatMap:zt,clearcoatNormalMap:me,clearcoatRoughnessMap:Tt,dispersion:ut,iridescence:xt,iridescenceMap:Bt,iridescenceThicknessMap:Kt,sheen:pt,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:ae,specularColorMap:jt,specularIntensityMap:Ue,transmission:Ht,transmissionMap:X,thicknessMap:Lt,gradientMap:rt,opaque:C.transparent===!1&&C.blending===Sr&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:C.combine,mapUv:xe&&w(C.map.channel),aoMapUv:B&&w(C.aoMap.channel),lightMapUv:je&&w(C.lightMap.channel),bumpMapUv:se&&w(C.bumpMap.channel),normalMapUv:ue&&w(C.normalMap.channel),displacementMapUv:kt&&w(C.displacementMap.channel),emissiveMapUv:De&&w(C.emissiveMap.channel),metalnessMapUv:Xt&&w(C.metalnessMap.channel),roughnessMapUv:L&&w(C.roughnessMap.channel),anisotropyMapUv:wt&&w(C.anisotropyMap.channel),clearcoatMapUv:zt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:me&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(C.sheenRoughnessMap.channel),specularMapUv:ae&&w(C.specularMap.channel),specularColorMapUv:jt&&w(C.specularColorMap.channel),specularIntensityMapUv:Ue&&w(C.specularIntensityMap.channel),transmissionMapUv:X&&w(C.transmissionMap.channel),thicknessMapUv:Lt&&w(C.thicknessMap.channel),alphaMapUv:_t&&w(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(ue||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!dt.attributes.uv&&(xe||_t),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:At,skinning:st.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:yt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ge,decodeVideoTexture:xe&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===Pe,decodeVideoTextureEmissive:De&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===Pe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===wi,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:$t&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&C.extensions.multiDraw===!0||Nt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return nn.vertexUv1s=m.has(1),nn.vertexUv2s=m.has(2),nn.vertexUv3s=m.has(3),m.clear(),nn}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)A.push(F),A.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(A,C),O(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function P(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function O(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const A=R[C.type];let F;if(A){const ot=Ci[A];F=Vx.clone(ot.uniforms)}else F=C.uniforms;return F}function H(C,A){let F;for(let ot=0,st=_.length;ot<st;ot++){const ft=_[ot];if(ft.cacheKey===A){F=ft,++F.usedTimes;break}}return F===void 0&&(F=new pb(o,A,C,u),_.push(F)),F}function z(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function I(C){p.remove(C)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:z,releaseShaderCache:I,programs:_,dispose:K}}function Sb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function xb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Og(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Pg(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,y,R,w,M){let g=o[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:y,groupOrder:R,renderOrder:v.renderOrder,z:w,group:M},o[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=y,g.groupOrder=R,g.renderOrder=v.renderOrder,g.z=w,g.group=M),t++,g}function d(v,x,y,R,w,M){const g=h(v,x,y,R,w,M);y.transmission>0?s.push(g):y.transparent===!0?l.push(g):i.push(g)}function p(v,x,y,R,w,M){const g=h(v,x,y,R,w,M);y.transmission>0?s.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function m(v,x){i.length>1&&i.sort(v||xb),s.length>1&&s.sort(x||Og),l.length>1&&l.sort(x||Og)}function _(){for(let v=t,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:_,sort:m}}function Mb(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new Pg,o.set(s,[h])):l>=u.length?(h=new Pg,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function yb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new we};break;case"SpotLight":i={position:new et,direction:new et,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new et,halfWidth:new et,halfHeight:new et};break}return o[t.id]=i,i}}}function Eb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Tb=0;function bb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Ab(o){const t=new yb,i=Eb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new et);const l=new et,u=new en,h=new en;function d(m){let _=0,v=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,R=0,w=0,M=0,g=0,P=0,O=0,D=0,H=0,z=0,I=0;m.sort(bb);for(let C=0,A=m.length;C<A;C++){const F=m[C],ot=F.color,st=F.intensity,ft=F.distance,dt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=ot.r*st,v+=ot.g*st,x+=ot.b*st;else if(F.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(F.sh.coefficients[k],st);I++}else if(F.isDirectionalLight){const k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const at=F.shadow,Y=i.get(F);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=dt,s.directionalShadowMatrix[y]=F.shadow.matrix,P++}s.directional[y]=k,y++}else if(F.isSpotLight){const k=t.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(ot).multiplyScalar(st),k.distance=ft,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,s.spot[w]=k;const at=F.shadow;if(F.map&&(s.spotLightMap[H]=F.map,H++,at.updateMatrices(F),F.castShadow&&z++),s.spotLightMatrix[w]=at.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,s.spotShadow[w]=Y,s.spotShadowMap[w]=dt,D++}w++}else if(F.isRectAreaLight){const k=t.get(F);k.color.copy(ot).multiplyScalar(st),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=k,M++}else if(F.isPointLight){const k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),k.distance=F.distance,k.decay=F.decay,F.castShadow){const at=F.shadow,Y=i.get(F);Y.shadowIntensity=at.intensity,Y.shadowBias=at.bias,Y.shadowNormalBias=at.normalBias,Y.shadowRadius=at.radius,Y.shadowMapSize=at.mapSize,Y.shadowCameraNear=at.camera.near,Y.shadowCameraFar=at.camera.far,s.pointShadow[R]=Y,s.pointShadowMap[R]=dt,s.pointShadowMatrix[R]=F.shadow.matrix,O++}s.point[R]=k,R++}else if(F.isHemisphereLight){const k=t.get(F);k.skyColor.copy(F.color).multiplyScalar(st),k.groundColor.copy(F.groundColor).multiplyScalar(st),s.hemi[g]=k,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=x;const K=s.hash;(K.directionalLength!==y||K.pointLength!==R||K.spotLength!==w||K.rectAreaLength!==M||K.hemiLength!==g||K.numDirectionalShadows!==P||K.numPointShadows!==O||K.numSpotShadows!==D||K.numSpotMaps!==H||K.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=R,s.hemi.length=g,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+H-z,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=I,K.directionalLength=y,K.pointLength=R,K.spotLength=w,K.rectAreaLength=M,K.hemiLength=g,K.numDirectionalShadows=P,K.numPointShadows=O,K.numSpotShadows=D,K.numSpotMaps=H,K.numLightProbes=I,s.version=Tb++)}function p(m,_){let v=0,x=0,y=0,R=0,w=0;const M=_.matrixWorldInverse;for(let g=0,P=m.length;g<P;g++){const O=m[g];if(O.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(O.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=s.rectArea[R];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),u.copy(O.matrixWorld),u.premultiply(M),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:d,setupView:p,state:s}}function zg(o){const t=new Ab(o),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function Rb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new zg(o),t.set(l,[d])):u>=h.length?(d=new zg(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`;function Db(o,t,i){let s=new cv;const l=new he,u=new he,h=new Ke,d=new Qx({depthPacking:lx}),p=new Jx,m={},_=i.maxTextureSize,v={[Ia]:Nn,[Nn]:Ia,[wi]:wi},x=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Cb,fragmentShader:wb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const R=new Ha;R.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Zn(R,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ig;let g=this.type;this.render=function(z,I,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Ba),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=g!==na&&this.type===na,ft=g===na&&this.type!==na;for(let dt=0,k=z.length;dt<k;dt++){const at=z[dt],Y=at.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const St=Y.getFrameExtents();if(l.multiply(St),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/St.x),l.x=u.x*St.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/St.y),l.y=u.y*St.y,Y.mapSize.y=u.y)),Y.map===null||st===!0||ft===!0){const nt=this.type!==na?{minFilter:Mi,magFilter:Mi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new xs(l.x,l.y,nt),Y.map.texture.name=at.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let nt=0;nt<U;nt++){const yt=Y.getViewport(nt);h.set(u.x*yt.x,u.y*yt.y,u.x*yt.z,u.y*yt.w),ot.viewport(h),Y.updateMatrices(at,nt),s=Y.getFrustum(),D(I,K,Y.camera,at,this.type)}Y.isPointLightShadow!==!0&&this.type===na&&P(Y,K),Y.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(C,A,F)};function P(z,I){const K=t.update(w);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new xs(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(I,null,K,x,w,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(I,null,K,y,w,null)}function O(z,I,K,C){let A=null;const F=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)A=F;else if(A=K.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ot=A.uuid,st=I.uuid;let ft=m[ot];ft===void 0&&(ft={},m[ot]=ft);let dt=ft[st];dt===void 0&&(dt=A.clone(),ft[st]=dt,I.addEventListener("dispose",H)),A=dt}if(A.visible=I.visible,A.wireframe=I.wireframe,C===na?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:v[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ot=o.properties.get(A);ot.light=K}return A}function D(z,I,K,C,A){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===na)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const st=t.update(z),ft=z.material;if(Array.isArray(ft)){const dt=st.groups;for(let k=0,at=dt.length;k<at;k++){const Y=dt[k],St=ft[Y.materialIndex];if(St&&St.visible){const U=O(z,St,C,A);z.onBeforeShadow(o,z,I,K,st,U,Y),o.renderBufferDirect(K,null,st,U,z,Y),z.onAfterShadow(o,z,I,K,st,U,Y)}}}else if(ft.visible){const dt=O(z,ft,C,A);z.onBeforeShadow(o,z,I,K,st,dt,null),o.renderBufferDirect(K,null,st,dt,z,null),z.onAfterShadow(o,z,I,K,st,dt,null)}}const ot=z.children;for(let st=0,ft=ot.length;st<ft;st++)D(ot[st],I,K,C,A)}function H(z){z.target.removeEventListener("dispose",H);for(const K in m){const C=m[K],A=z.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const Ub={[_h]:gh,[vh]:Mh,[Sh]:yh,[yr]:xh,[gh]:_h,[Mh]:vh,[yh]:Sh,[xh]:yr};function Lb(o,t){function i(){let X=!1;const Lt=new Ke;let rt=null;const _t=new Ke(0,0,0,0);return{setMask:function(Ct){rt!==Ct&&!X&&(o.colorMask(Ct,Ct,Ct,Ct),rt=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Dt,$t,Ge,nn){nn===!0&&(Ct*=Ge,Dt*=Ge,$t*=Ge),Lt.set(Ct,Dt,$t,Ge),_t.equals(Lt)===!1&&(o.clearColor(Ct,Dt,$t,Ge),_t.copy(Lt))},reset:function(){X=!1,rt=null,_t.set(-1,0,0,0)}}}function s(){let X=!1,Lt=!1,rt=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Lt!==Dt){const $t=t.get("EXT_clip_control");Lt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Ge=Ct;Ct=null,this.setClear(Ge)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Et(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(Dt){rt!==Dt&&!X&&(o.depthMask(Dt),rt=Dt)},setFunc:function(Dt){if(Lt&&(Dt=Ub[Dt]),_t!==Dt){switch(Dt){case _h:o.depthFunc(o.NEVER);break;case gh:o.depthFunc(o.ALWAYS);break;case vh:o.depthFunc(o.LESS);break;case yr:o.depthFunc(o.LEQUAL);break;case Sh:o.depthFunc(o.EQUAL);break;case xh:o.depthFunc(o.GEQUAL);break;case Mh:o.depthFunc(o.GREATER);break;case yh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Dt}},setLocked:function(Dt){X=Dt},setClear:function(Dt){Ct!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){X=!1,rt=null,_t=null,Ct=null,Lt=!1}}}function l(){let X=!1,Lt=null,rt=null,_t=null,Ct=null,Dt=null,$t=null,Ge=null,nn=null;return{setTest:function(Te){X||(Te?Et(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!X&&(o.stencilMask(Te),Lt=Te)},setFunc:function(Te,An,Rn){(rt!==Te||_t!==An||Ct!==Rn)&&(o.stencilFunc(Te,An,Rn),rt=Te,_t=An,Ct=Rn)},setOp:function(Te,An,Rn){(Dt!==Te||$t!==An||Ge!==Rn)&&(o.stencilOp(Te,An,Rn),Dt=Te,$t=An,Ge=Rn)},setLocked:function(Te){X=Te},setClear:function(Te){nn!==Te&&(o.clearStencil(Te),nn=Te)},reset:function(){X=!1,Lt=null,rt=null,_t=null,Ct=null,Dt=null,$t=null,Ge=null,nn=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,z=null,I=new we(0,0,0),K=0,C=!1,A=null,F=null,ot=null,st=null,ft=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,at=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=at>=1):Y.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=at>=2);let St=null,U={};const nt=o.getParameter(o.SCISSOR_BOX),yt=o.getParameter(o.VIEWPORT),bt=new Ke().fromArray(nt),q=new Ke().fromArray(yt);function ht(X,Lt,rt,_t){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(X,Dt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<rt;$t++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Lt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const gt={};gt[o.TEXTURE_2D]=ht(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Et(o.DEPTH_TEST),h.setFunc(yr),se(!1),ue(G_),Et(o.CULL_FACE),B(Ba);function Et(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function At(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Yt(X,Lt){return v[X]!==Lt?(o.bindFramebuffer(X,Lt),v[X]=Lt,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Nt(X,Lt){let rt=y,_t=!1;if(X){rt=x.get(Lt),rt===void 0&&(rt=[],x.set(Lt,rt));const Ct=X.textures;if(rt.length!==Ct.length||rt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)rt[Dt]=o.COLOR_ATTACHMENT0+Dt;rt.length=Ct.length,_t=!0}}else rt[0]!==o.BACK&&(rt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(rt)}function xe(X){return R!==X?(o.useProgram(X),R=X,!0):!1}const Me={[ms]:o.FUNC_ADD,[OS]:o.FUNC_SUBTRACT,[PS]:o.FUNC_REVERSE_SUBTRACT};Me[zS]=o.MIN,Me[BS]=o.MAX;const Qt={[FS]:o.ZERO,[IS]:o.ONE,[HS]:o.SRC_COLOR,[ph]:o.SRC_ALPHA,[qS]:o.SRC_ALPHA_SATURATE,[XS]:o.DST_COLOR,[VS]:o.DST_ALPHA,[GS]:o.ONE_MINUS_SRC_COLOR,[mh]:o.ONE_MINUS_SRC_ALPHA,[WS]:o.ONE_MINUS_DST_COLOR,[kS]:o.ONE_MINUS_DST_ALPHA,[YS]:o.CONSTANT_COLOR,[jS]:o.ONE_MINUS_CONSTANT_COLOR,[ZS]:o.CONSTANT_ALPHA,[KS]:o.ONE_MINUS_CONSTANT_ALPHA};function B(X,Lt,rt,_t,Ct,Dt,$t,Ge,nn,Te){if(X===Ba){w===!0&&(At(o.BLEND),w=!1);return}if(w===!1&&(Et(o.BLEND),w=!0),X!==NS){if(X!==M||Te!==C){if((g!==ms||D!==ms)&&(o.blendEquation(o.FUNC_ADD),g=ms,D=ms),Te)switch(X){case Sr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dh:o.blendFunc(o.ONE,o.ONE);break;case V_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case k_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Sr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case V_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case k_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,O=null,H=null,z=null,I.set(0,0,0),K=0,M=X,C=Te}return}Ct=Ct||Lt,Dt=Dt||rt,$t=$t||_t,(Lt!==g||Ct!==D)&&(o.blendEquationSeparate(Me[Lt],Me[Ct]),g=Lt,D=Ct),(rt!==P||_t!==O||Dt!==H||$t!==z)&&(o.blendFuncSeparate(Qt[rt],Qt[_t],Qt[Dt],Qt[$t]),P=rt,O=_t,H=Dt,z=$t),(Ge.equals(I)===!1||nn!==K)&&(o.blendColor(Ge.r,Ge.g,Ge.b,nn),I.copy(Ge),K=nn),M=X,C=!1}function je(X,Lt){X.side===wi?At(o.CULL_FACE):Et(o.CULL_FACE);let rt=X.side===Nn;Lt&&(rt=!rt),se(rt),X.blending===Sr&&X.transparent===!1?B(Ba):B(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),De(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){A!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),A=X)}function ue(X){X!==DS?(Et(o.CULL_FACE),X!==F&&(X===G_?o.cullFace(o.BACK):X===US?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),F=X}function kt(X){X!==ot&&(k&&o.lineWidth(X),ot=X)}function De(X,Lt,rt){X?(Et(o.POLYGON_OFFSET_FILL),(st!==Lt||ft!==rt)&&(o.polygonOffset(Lt,rt),st=Lt,ft=rt)):At(o.POLYGON_OFFSET_FILL)}function Xt(X){X?Et(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function L(X){X===void 0&&(X=o.TEXTURE0+dt-1),St!==X&&(o.activeTexture(X),St=X)}function E(X,Lt,rt){rt===void 0&&(St===null?rt=o.TEXTURE0+dt-1:rt=St);let _t=U[rt];_t===void 0&&(_t={type:void 0,texture:void 0},U[rt]=_t),(_t.type!==X||_t.texture!==Lt)&&(St!==rt&&(o.activeTexture(rt),St=rt),o.bindTexture(X,Lt||gt[X]),_t.type=X,_t.texture=Lt)}function tt(){const X=U[St];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ut(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(X){bt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),bt.copy(X))}function Ft(X){q.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),q.copy(X))}function ae(X,Lt){let rt=m.get(Lt);rt===void 0&&(rt=new WeakMap,m.set(Lt,rt));let _t=rt.get(X);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,X.name),rt.set(X,_t))}function jt(X,Lt){const _t=m.get(Lt).get(X);p.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,X.__bindingPointIndex),p.set(Lt,_t))}function Ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,U={},v={},x=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,z=null,I=new we(0,0,0),K=0,C=!1,A=null,F=null,ot=null,st=null,ft=null,bt.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Et,disable:At,bindFramebuffer:Yt,drawBuffers:Nt,useProgram:xe,setBlending:B,setMaterial:je,setFlipSided:se,setCullFace:ue,setLineWidth:kt,setPolygonOffset:De,setScissorTest:Xt,activeTexture:L,bindTexture:E,unbindTexture:tt,compressedTexImage2D:ut,compressedTexImage3D:xt,texImage2D:Bt,texImage3D:Kt,updateUBOMapping:ae,uniformBlockBinding:jt,texStorage2D:me,texStorage3D:Tt,texSubImage2D:pt,texSubImage3D:Ht,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:Ue}}function Nb(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new he,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(L,E){return y?new OffscreenCanvas(L,E):Oo("canvas")}function w(L,E,tt){let ut=1;const xt=Xt(L);if((xt.width>tt||xt.height>tt)&&(ut=tt/Math.max(xt.width,xt.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const pt=Math.floor(ut*xt.width),Ht=Math.floor(ut*xt.height);v===void 0&&(v=R(pt,Ht));const wt=E?R(pt,Ht):v;return wt.width=pt,wt.height=Ht,wt.getContext("2d").drawImage(L,0,0,pt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+pt+"x"+Ht+")."),wt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function M(L){return L.generateMipmaps}function g(L){o.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,E,tt,ut,xt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pt=E;if(E===o.RED&&(tt===o.FLOAT&&(pt=o.R32F),tt===o.HALF_FLOAT&&(pt=o.R16F),tt===o.UNSIGNED_BYTE&&(pt=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.R8UI),tt===o.UNSIGNED_SHORT&&(pt=o.R16UI),tt===o.UNSIGNED_INT&&(pt=o.R32UI),tt===o.BYTE&&(pt=o.R8I),tt===o.SHORT&&(pt=o.R16I),tt===o.INT&&(pt=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(pt=o.RG32F),tt===o.HALF_FLOAT&&(pt=o.RG16F),tt===o.UNSIGNED_BYTE&&(pt=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RG16UI),tt===o.UNSIGNED_INT&&(pt=o.RG32UI),tt===o.BYTE&&(pt=o.RG8I),tt===o.SHORT&&(pt=o.RG16I),tt===o.INT&&(pt=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),tt===o.UNSIGNED_INT&&(pt=o.RGB32UI),tt===o.BYTE&&(pt=o.RGB8I),tt===o.SHORT&&(pt=o.RGB16I),tt===o.INT&&(pt=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(pt=o.RGBA32UI),tt===o.BYTE&&(pt=o.RGBA8I),tt===o.SHORT&&(pt=o.RGBA16I),tt===o.INT&&(pt=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),E===o.RGBA){const Ht=xt?Mc:Ce.getTransfer(ut);tt===o.FLOAT&&(pt=o.RGBA32F),tt===o.HALF_FLOAT&&(pt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(pt=Ht===Pe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(L,E){let tt;return L?E===null||E===Ss||E===br?tt=o.DEPTH24_STENCIL8:E===ia?tt=o.DEPTH32F_STENCIL8:E===No&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ss||E===br?tt=o.DEPTH_COMPONENT24:E===ia?tt=o.DEPTH_COMPONENT32F:E===No&&(tt=o.DEPTH_COMPONENT16),tt}function H(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mi&&L.minFilter!==Di?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function z(L){const E=L.target;E.removeEventListener("dispose",z),K(E),E.isVideoTexture&&_.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),A(E)}function K(L){const E=s.get(L);if(E.__webglInit===void 0)return;const tt=L.source,ut=x.get(tt);if(ut){const xt=ut[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(L),Object.keys(ut).length===0&&x.delete(tt)}s.remove(L)}function C(L){const E=s.get(L);o.deleteTexture(E.__webglTexture);const tt=L.source,ut=x.get(tt);delete ut[E.__cacheKey],h.memory.textures--}function A(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let xt=0;xt<E.__webglFramebuffer[ut].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[ut][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=L.textures;for(let ut=0,xt=tt.length;ut<xt;ut++){const pt=s.get(tt[ut]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(tt[ut])}s.remove(L)}let F=0;function ot(){F=0}function st(){const L=F;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),F+=1,L}function ft(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function dt(L,E){const tt=s.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,L,E);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function k(L,E){const tt=s.get(L);if(L.version>0&&tt.__version!==L.version){q(tt,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function at(L,E){const tt=s.get(L);if(L.version>0&&tt.__version!==L.version){q(tt,L,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function Y(L,E){const tt=s.get(L);if(L.version>0&&tt.__version!==L.version){ht(tt,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const St={[bh]:o.REPEAT,[gs]:o.CLAMP_TO_EDGE,[Ah]:o.MIRRORED_REPEAT},U={[Mi]:o.NEAREST,[rx]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[Di]:o.LINEAR,[Bf]:o.LINEAR_MIPMAP_NEAREST,[vs]:o.LINEAR_MIPMAP_LINEAR},nt={[fx]:o.NEVER,[gx]:o.ALWAYS,[hx]:o.LESS,[Jg]:o.LEQUAL,[dx]:o.EQUAL,[_x]:o.GEQUAL,[px]:o.GREATER,[mx]:o.NOTEQUAL};function yt(L,E){if(E.type===ia&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Di||E.magFilter===Bf||E.magFilter===Wl||E.magFilter===vs||E.minFilter===Di||E.minFilter===Bf||E.minFilter===Wl||E.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,nt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mi||E.minFilter!==Wl&&E.minFilter!==vs||E.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function bt(L,E){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",z));const ut=E.source;let xt=x.get(ut);xt===void 0&&(xt={},x.set(ut,xt));const pt=ft(E);if(pt!==L.__cacheKey){xt[pt]===void 0&&(xt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),xt[pt].usedTimes++;const Ht=xt[L.__cacheKey];Ht!==void 0&&(xt[L.__cacheKey].usedTimes--,Ht.usedTimes===0&&C(E)),L.__cacheKey=pt,L.__webglTexture=xt[pt].texture}return tt}function q(L,E,tt){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const xt=bt(L,E),pt=E.source;i.bindTexture(ut,L.__webglTexture,o.TEXTURE0+tt);const Ht=s.get(pt);if(pt.version!==Ht.__version||xt===!0){i.activeTexture(o.TEXTURE0+tt);const wt=Ce.getPrimaries(Ce.workingColorSpace),zt=E.colorSpace===za?null:Ce.getPrimaries(E.colorSpace),me=E.colorSpace===za||wt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Tt=w(E.image,!1,l.maxTextureSize);Tt=De(E,Tt);const Bt=u.convert(E.format,E.colorSpace),Kt=u.convert(E.type);let Gt=O(E.internalFormat,Bt,Kt,E.colorSpace,E.isVideoTexture);yt(ut,E);let Ft;const ae=E.mipmaps,jt=E.isVideoTexture!==!0,Ue=Ht.__version===void 0||xt===!0,X=pt.dataReady,Lt=H(E,Tt);if(E.isDepthTexture)Gt=D(E.format===Ar,E.type),Ue&&(jt?i.texStorage2D(o.TEXTURE_2D,1,Gt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,Tt.width,Tt.height,0,Bt,Kt,null));else if(E.isDataTexture)if(ae.length>0){jt&&Ue&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let rt=0,_t=ae.length;rt<_t;rt++)Ft=ae[rt],jt?X&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,Kt,Ft.data):i.texImage2D(o.TEXTURE_2D,rt,Gt,Ft.width,Ft.height,0,Bt,Kt,Ft.data);E.generateMipmaps=!1}else jt?(Ue&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Tt.width,Tt.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Bt,Kt,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,Tt.width,Tt.height,0,Bt,Kt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,ae[0].width,ae[0].height,Tt.depth);for(let rt=0,_t=ae.length;rt<_t;rt++)if(Ft=ae[rt],E.format!==xi)if(Bt!==null)if(jt){if(X)if(E.layerUpdates.size>0){const Ct=hg(Ft.width,Ft.height,E.format,E.type);for(const Dt of E.layerUpdates){const $t=Ft.data.subarray(Dt*Ct/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,Dt,Ft.width,Ft.height,1,Bt,$t)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,Tt.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,rt,Gt,Ft.width,Ft.height,Tt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,Tt.depth,Bt,Kt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,rt,Gt,Ft.width,Ft.height,Tt.depth,0,Bt,Kt,Ft.data)}else{jt&&Ue&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let rt=0,_t=ae.length;rt<_t;rt++)Ft=ae[rt],E.format!==xi?Bt!==null?jt?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,rt,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?X&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,Kt,Ft.data):i.texImage2D(o.TEXTURE_2D,rt,Gt,Ft.width,Ft.height,0,Bt,Kt,Ft.data)}else if(E.isDataArrayTexture)if(jt){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,Tt.width,Tt.height,Tt.depth),X)if(E.layerUpdates.size>0){const rt=hg(Tt.width,Tt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ct=Tt.data.subarray(_t*rt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*rt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Bt,Kt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,Kt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Tt.width,Tt.height,Tt.depth,0,Bt,Kt,Tt.data);else if(E.isData3DTexture)jt?(Ue&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,Tt.width,Tt.height,Tt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,Kt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,Tt.width,Tt.height,Tt.depth,0,Bt,Kt,Tt.data);else if(E.isFramebufferTexture){if(Ue)if(jt)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Tt.width,Tt.height);else{let rt=Tt.width,_t=Tt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Gt,rt,_t,0,Bt,Kt,null),rt>>=1,_t>>=1}}else if(ae.length>0){if(jt&&Ue){const rt=Xt(ae[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,rt.width,rt.height)}for(let rt=0,_t=ae.length;rt<_t;rt++)Ft=ae[rt],jt?X&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Bt,Kt,Ft):i.texImage2D(o.TEXTURE_2D,rt,Gt,Bt,Kt,Ft);E.generateMipmaps=!1}else if(jt){if(Ue){const rt=Xt(Tt);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,rt.width,rt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Kt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,Kt,Tt);M(E)&&g(ut),Ht.__version=pt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ht(L,E,tt){if(E.image.length!==6)return;const ut=bt(L,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+tt);const pt=s.get(xt);if(xt.version!==pt.__version||ut===!0){i.activeTexture(o.TEXTURE0+tt);const Ht=Ce.getPrimaries(Ce.workingColorSpace),wt=E.colorSpace===za?null:Ce.getPrimaries(E.colorSpace),zt=E.colorSpace===za||Ht===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const me=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!me&&!Tt?Bt[_t]=w(E.image[_t],!0,l.maxCubemapSize):Bt[_t]=Tt?E.image[_t].image:E.image[_t],Bt[_t]=De(E,Bt[_t]);const Kt=Bt[0],Gt=u.convert(E.format,E.colorSpace),Ft=u.convert(E.type),ae=O(E.internalFormat,Gt,Ft,E.colorSpace),jt=E.isVideoTexture!==!0,Ue=pt.__version===void 0||ut===!0,X=xt.dataReady;let Lt=H(E,Kt);yt(o.TEXTURE_CUBE_MAP,E);let rt;if(me){jt&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){rt=Bt[_t].mipmaps;for(let Ct=0;Ct<rt.length;Ct++){const Dt=rt[Ct];E.format!==xi?Gt!==null?jt?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ae,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ae,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(rt=E.mipmaps,jt&&Ue){rt.length>0&&Lt++;const _t=Xt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){jt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Gt,Ft,Bt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Bt[_t].width,Bt[_t].height,0,Gt,Ft,Bt[_t].data);for(let Ct=0;Ct<rt.length;Ct++){const $t=rt[Ct].image[_t].image;jt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,$t.width,$t.height,Gt,Ft,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ae,$t.width,$t.height,0,Gt,Ft,$t.data)}}else{jt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,Ft,Bt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Gt,Ft,Bt[_t]);for(let Ct=0;Ct<rt.length;Ct++){const Dt=rt[Ct];jt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Gt,Ft,Dt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ae,Gt,Ft,Dt.image[_t])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),pt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function gt(L,E,tt,ut,xt,pt){const Ht=u.convert(tt.format,tt.colorSpace),wt=u.convert(tt.type),zt=O(tt.internalFormat,Ht,wt,tt.colorSpace),me=s.get(E),Tt=s.get(tt);if(Tt.__renderTarget=E,!me.__hasExternalTextures){const Bt=Math.max(1,E.width>>pt),Kt=Math.max(1,E.height>>pt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,pt,zt,Bt,Kt,E.depth,0,Ht,wt,null):i.texImage2D(xt,pt,zt,Bt,Kt,0,Ht,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),ue(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,xt,Tt.__webglTexture,0,se(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,xt,Tt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(L,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ut=E.depthTexture,xt=ut&&ut.isDepthTexture?ut.type:null,pt=D(E.stencilBuffer,xt),Ht=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=se(E);ue(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,pt,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,pt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,pt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,L)}else{const ut=E.textures;for(let xt=0;xt<ut.length;xt++){const pt=ut[xt],Ht=u.convert(pt.format,pt.colorSpace),wt=u.convert(pt.type),zt=O(pt.internalFormat,Ht,wt,pt.colorSpace),me=se(E);tt&&ue(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,zt,E.width,E.height):ue(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=s.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt(E.depthTexture,0);const xt=ut.__webglTexture,pt=se(E);if(E.depthTexture.format===xr)ue(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Ar)ue(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Yt(L){const E=s.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",xt)};ut.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ut}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");At(E.__webglFramebuffer,L)}else if(tt){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),Et(E.__webglDepthbuffer[ut],L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Et(E.__webglDepthbuffer,L,!1);else{const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ut,o.RENDERBUFFER,xt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(L,E,tt){const ut=s.get(L);E!==void 0&&gt(ut.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Yt(L)}function xe(L){const E=L.texture,tt=s.get(L),ut=s.get(E);L.addEventListener("dispose",I);const xt=L.textures,pt=L.isWebGLCubeRenderTarget===!0,Ht=xt.length>1;if(Ht||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,h.memory.textures++),pt){tt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[wt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)tt.__webglFramebuffer[wt][zt]=o.createFramebuffer()}else tt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)tt.__webglFramebuffer[wt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let wt=0,zt=xt.length;wt<zt;wt++){const me=s.get(xt[wt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&ue(L)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let wt=0;wt<xt.length;wt++){const zt=xt[wt];tt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]);const me=u.convert(zt.format,zt.colorSpace),Tt=u.convert(zt.type),Bt=O(zt.internalFormat,me,Tt,zt.colorSpace,L.isXRRenderTarget===!0),Kt=se(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Bt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Et(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),yt(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)gt(tt.__webglFramebuffer[wt][zt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else gt(tt.__webglFramebuffer[wt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,zt=xt.length;wt<zt;wt++){const me=xt[wt],Tt=s.get(me);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),yt(o.TEXTURE_2D,me),gt(tt.__webglFramebuffer,L,me,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),M(me)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ut.__webglTexture),yt(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)gt(tt.__webglFramebuffer[zt],L,E,o.COLOR_ATTACHMENT0,wt,zt);else gt(tt.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,wt,0);M(E)&&g(wt),i.unbindTexture()}L.depthBuffer&&Yt(L)}function Me(L){const E=L.textures;for(let tt=0,ut=E.length;tt<ut;tt++){const xt=E[tt];if(M(xt)){const pt=P(L),Ht=s.get(xt).__webglTexture;i.bindTexture(pt,Ht),g(pt),i.unbindTexture()}}}const Qt=[],B=[];function je(L){if(L.samples>0){if(ue(L)===!1){const E=L.textures,tt=L.width,ut=L.height;let xt=o.COLOR_BUFFER_BIT;const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=s.get(L),wt=E.length>1;if(wt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=s.get(E[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,xt,o.NEAREST),p===!0&&(Qt.length=0,B.length=0,Qt.push(o.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qt.push(pt),B.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=s.get(E[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function se(L){return Math.min(l.maxSamples,L.samples)}function ue(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(L){const E=h.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function De(L,E){const tt=L.colorSpace,ut=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==Rr&&tt!==za&&(Ce.getTransfer(tt)===Pe?(ut!==xi||xt!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=dt,this.setTexture2DArray=k,this.setTexture3D=at,this.setTextureCube=Y,this.rebindTextures=Nt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ue}function Ob(o,t){function i(s,l=za){let u;const h=Ce.getTransfer(l);if(s===ra)return o.UNSIGNED_BYTE;if(s===ad)return o.UNSIGNED_SHORT_4_4_4_4;if(s===sd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Xg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Vg)return o.BYTE;if(s===kg)return o.SHORT;if(s===No)return o.UNSIGNED_SHORT;if(s===id)return o.INT;if(s===Ss)return o.UNSIGNED_INT;if(s===ia)return o.FLOAT;if(s===Po)return o.HALF_FLOAT;if(s===Wg)return o.ALPHA;if(s===qg)return o.RGB;if(s===xi)return o.RGBA;if(s===Yg)return o.LUMINANCE;if(s===jg)return o.LUMINANCE_ALPHA;if(s===xr)return o.DEPTH_COMPONENT;if(s===Ar)return o.DEPTH_STENCIL;if(s===Zg)return o.RED;if(s===rd)return o.RED_INTEGER;if(s===Kg)return o.RG;if(s===od)return o.RG_INTEGER;if(s===ld)return o.RGBA_INTEGER;if(s===pc||s===mc||s===_c||s===gc)if(h===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===pc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===pc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_c)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rh||s===Ch||s===wh||s===Dh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Rh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ch)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh||s===Lh||s===Nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Uh||s===Lh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Nh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Oh||s===Ph||s===zh||s===Bh||s===Fh||s===Ih||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Oh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ph)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ih)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vc||s===jh||s===Zh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===vc)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qg||s===Kh||s===Qh||s===Jh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===vc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Kh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zb=`
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

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new On,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ni({vertexShader:Pb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zn(new Ac(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fb extends ys{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,y=null,R=null;const w=new Bb,M=i.getContextAttributes();let g=null,P=null;const O=[],D=[],H=new he;let z=null;const I=new ci;I.viewport=new Ke;const K=new ci;K.viewport=new Ke;const C=[I,K],A=new aM;let F=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ht=O[q];return ht===void 0&&(ht=new ah,O[q]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(q){let ht=O[q];return ht===void 0&&(ht=new ah,O[q]=ht),ht.getGripSpace()},this.getHand=function(q){let ht=O[q];return ht===void 0&&(ht=new ah,O[q]=ht),ht.getHandSpace()};function st(q){const ht=D.indexOf(q.inputSource);if(ht===-1)return;const gt=O[ht];gt!==void 0&&(gt.update(q.inputSource,q.frame,m||h),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function ft(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",dt);for(let q=0;q<O.length;q++){const ht=D[q];ht!==null&&(D[q]=null,O[q].disconnect(ht))}F=null,ot=null,w.reset(),t.setRenderTarget(g),y=null,x=null,v=null,l=null,P=null,bt.stop(),s.isPresenting=!1,t.setPixelRatio(z),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",dt),M.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Et=null,At=null;M.depth&&(At=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=M.stencil?Ar:xr,Et=M.stencil?br:Ss);const Yt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Yt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new xs(x.textureWidth,x.textureHeight,{format:xi,type:ra,depthTexture:new uv(x.textureWidth,x.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const gt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new xs(y.framebufferWidth,y.framebufferHeight,{format:xi,type:ra,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),bt.setContext(l),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function dt(q){for(let ht=0;ht<q.removed.length;ht++){const gt=q.removed[ht],Et=D.indexOf(gt);Et>=0&&(D[Et]=null,O[Et].disconnect(gt))}for(let ht=0;ht<q.added.length;ht++){const gt=q.added[ht];let Et=D.indexOf(gt);if(Et===-1){for(let Yt=0;Yt<O.length;Yt++)if(Yt>=D.length){D.push(gt),Et=Yt;break}else if(D[Yt]===null){D[Yt]=gt,Et=Yt;break}if(Et===-1)break}const At=O[Et];At&&At.connect(gt)}}const k=new et,at=new et;function Y(q,ht,gt){k.setFromMatrixPosition(ht.matrixWorld),at.setFromMatrixPosition(gt.matrixWorld);const Et=k.distanceTo(at),At=ht.projectionMatrix.elements,Yt=gt.projectionMatrix.elements,Nt=At[14]/(At[10]-1),xe=At[14]/(At[10]+1),Me=(At[9]+1)/At[5],Qt=(At[9]-1)/At[5],B=(At[8]-1)/At[0],je=(Yt[8]+1)/Yt[0],se=Nt*B,ue=Nt*je,kt=Et/(-B+je),De=kt*-B;if(ht.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(ht.projectionMatrix),q.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Xt=Nt+kt,L=xe+kt,E=se-De,tt=ue+(Et-De),ut=Me*xe/L*Xt,xt=Qt*xe/L*Xt;q.projectionMatrix.makePerspective(E,tt,ut,xt,Xt,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function St(q,ht){ht===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ht.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ht=q.near,gt=q.far;w.texture!==null&&(w.depthNear>0&&(ht=w.depthNear),w.depthFar>0&&(gt=w.depthFar)),A.near=K.near=I.near=ht,A.far=K.far=I.far=gt,(F!==A.near||ot!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,ot=A.far),I.layers.mask=q.layers.mask|2,K.layers.mask=q.layers.mask|4,A.layers.mask=I.layers.mask|K.layers.mask;const Et=q.parent,At=A.cameras;St(A,Et);for(let Yt=0;Yt<At.length;Yt++)St(At[Yt],Et);At.length===2?Y(A,I,K):A.projectionMatrix.copy(I.projectionMatrix),U(q,A,Et)};function U(q,ht,gt){gt===null?q.matrix.copy(ht.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ht.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ht.projectionMatrix),q.projectionMatrixInverse.copy(ht.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$h*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(q){p=q,x!==null&&(x.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let nt=null;function yt(q,ht){if(_=ht.getViewerPose(m||h),R=ht,_!==null){const gt=_.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let Et=!1;gt.length!==A.cameras.length&&(A.cameras.length=0,Et=!0);for(let Nt=0;Nt<gt.length;Nt++){const xe=gt[Nt];let Me=null;if(y!==null)Me=y.getViewport(xe);else{const B=v.getViewSubImage(x,xe);Me=B.viewport,Nt===0&&(t.setRenderTargetTextures(P,B.colorTexture,x.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(P))}let Qt=C[Nt];Qt===void 0&&(Qt=new ci,Qt.layers.enable(Nt),Qt.viewport=new Ke,C[Nt]=Qt),Qt.matrix.fromArray(xe.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(xe.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Me.x,Me.y,Me.width,Me.height),Nt===0&&(A.matrix.copy(Qt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Et===!0&&A.cameras.push(Qt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Nt=v.getDepthInformation(gt[0]);Nt&&Nt.isValid&&Nt.texture&&w.init(t,Nt,l.renderState)}}for(let gt=0;gt<O.length;gt++){const Et=D[gt],At=O[gt];Et!==null&&At!==void 0&&At.update(Et,ht,m||h)}nt&&nt(q,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),R=null}const bt=new fv;bt.setAnimationLoop(yt),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const hs=new oa,Ib=new en;function Hb(o,t){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function s(M,g){g.color.getRGB(M.fogColor.value,rv(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,P,O,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),v(M,g)):g.isMeshPhongMaterial?(u(M,g),_(M,g)):g.isMeshStandardMaterial?(u(M,g),x(M,g),g.isMeshPhysicalMaterial&&y(M,g,D)):g.isMeshMatcapMaterial?(u(M,g),R(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),w(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?p(M,g,P,O):g.isSpriteMaterial?m(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===Nn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===Nn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const P=t.get(g),O=P.envMap,D=P.envMapRotation;O&&(M.envMap.value=O,hs.copy(D),hs.x*=-1,hs.y*=-1,hs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),M.envMapRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(hs)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function p(M,g,P,O){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*P,M.scale.value=O*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function m(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function v(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function x(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,P){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,g){g.matcap&&(M.matcap.value=g.matcap)}function w(M,g){const P=t.get(g).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Gb(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,O){const D=O.program;s.uniformBlockBinding(P,D)}function m(P,O){let D=l[P.id];D===void 0&&(R(P),D=_(P),l[P.id]=D,P.addEventListener("dispose",M));const H=O.program;s.updateUBOMapping(P,H);const z=t.render.frame;u[P.id]!==z&&(x(P),u[P.id]=z)}function _(P){const O=v();P.__bindingPointIndex=O;const D=o.createBuffer(),H=P.__size,z=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],D=P.uniforms,H=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let z=0,I=D.length;z<I;z++){const K=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,A=K.length;C<A;C++){const F=K[C];if(y(F,z,C,H)===!0){const ot=F.__offset,st=Array.isArray(F.value)?F.value:[F.value];let ft=0;for(let dt=0;dt<st.length;dt++){const k=st[dt],at=w(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,ot+ft,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,ft),ft+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,O,D,H){const z=P.value,I=O+"_"+D;if(H[I]===void 0)return typeof z=="number"||typeof z=="boolean"?H[I]=z:H[I]=z.clone(),!0;{const K=H[I];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return H[I]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function R(P){const O=P.uniforms;let D=0;const H=16;for(let I=0,K=O.length;I<K;I++){const C=Array.isArray(O[I])?O[I]:[O[I]];for(let A=0,F=C.length;A<F;A++){const ot=C[A],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let ft=0,dt=st.length;ft<dt;ft++){const k=st[ft],at=w(k),Y=D%H,St=Y%at.boundary,U=Y+St;D+=St,U!==0&&H-U<at.storage&&(D+=H-U),ot.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=at.storage}}}const z=D%H;return z>0&&(D+=H-z),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:g}}class Vb{constructor(t={}){const{canvas:i=xx(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const R=new Uint32Array(4),w=new Int32Array(4);let M=null,g=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=Fa,this.toneMappingExposure=1;const D=this;let H=!1,z=0,I=0,K=null,C=-1,A=null;const F=new Ke,ot=new Ke;let st=null;const ft=new we(0);let dt=0,k=i.width,at=i.height,Y=1,St=null,U=null;const nt=new Ke(0,0,k,at),yt=new Ke(0,0,k,at);let bt=!1;const q=new cv;let ht=!1,gt=!1;this.transmissionResolutionScale=1;const Et=new en,At=new en,Yt=new et,Nt=new Ke,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Qt(){return K===null?Y:1}let B=s;function je(b,W){return i.getContext(b,W)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${nd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),B===null){const W="webgl2";if(B=je(W,b),B===null)throw je(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,ue,kt,De,Xt,L,E,tt,ut,xt,pt,Ht,wt,zt,me,Tt,Bt,Kt,Gt,Ft,ae,jt,Ue,X;function Lt(){se=new JE(B),se.init(),jt=new Ob(B,se),ue=new WE(B,se,t,jt),kt=new Lb(B,se),ue.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),De=new eT(B),Xt=new Sb,L=new Nb(B,se,kt,Xt,ue,jt,De),E=new YE(D),tt=new QE(D),ut=new oM(B),Ue=new kE(B,ut),xt=new $E(B,ut,De,Ue),pt=new iT(B,xt,ut,De),Gt=new nT(B,ue,L),Tt=new qE(Xt),Ht=new vb(D,E,tt,se,ue,Ue,Tt),wt=new Hb(D,Xt),zt=new Mb,me=new Rb(se),Kt=new VE(D,E,tt,kt,pt,y,p),Bt=new Db(D,pt,ue),X=new Gb(B,De,ue,kt),Ft=new XE(B,se,De),ae=new tT(B,se,De),De.programs=Ht.programs,D.capabilities=ue,D.extensions=se,D.properties=Xt,D.renderLists=zt,D.shadowMap=Bt,D.state=kt,D.info=De}Lt();const rt=new Fb(D,B);this.xr=rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(k,at,!1))},this.getSize=function(b){return b.set(k,at)},this.setSize=function(b,W,$=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,at=W,i.width=Math.floor(b*Y),i.height=Math.floor(W*Y),$===!0&&(i.style.width=b+"px",i.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(k*Y,at*Y).floor()},this.setDrawingBufferSize=function(b,W,$){k=b,at=W,Y=$,i.width=Math.floor(b*$),i.height=Math.floor(W*$),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,W,$,Q){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,W,$,Q),kt.viewport(F.copy(nt).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(yt)},this.setScissor=function(b,W,$,Q){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,W,$,Q),kt.scissor(ot.copy(yt).multiplyScalar(Y).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(b){kt.setScissorTest(bt=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,$=!0){let Q=0;if(b){let j=!1;if(K!==null){const Mt=K.texture.format;j=Mt===ld||Mt===od||Mt===rd}if(j){const Mt=K.texture.type,Rt=Mt===ra||Mt===Ss||Mt===No||Mt===br||Mt===ad||Mt===sd,Pt=Kt.getClearColor(),Ot=Kt.getClearAlpha(),te=Pt.r,ee=Pt.g,qt=Pt.b;Rt?(R[0]=te,R[1]=ee,R[2]=qt,R[3]=Ot,B.clearBufferuiv(B.COLOR,0,R)):(w[0]=te,w[1]=ee,w[2]=qt,w[3]=Ot,B.clearBufferiv(B.COLOR,0,w))}else Q|=B.COLOR_BUFFER_BIT}W&&(Q|=B.DEPTH_BUFFER_BIT),$&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Kt.dispose(),zt.dispose(),me.dispose(),Xt.dispose(),E.dispose(),tt.dispose(),pt.dispose(),Ue.dispose(),X.dispose(),Ht.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Io),rt.removeEventListener("sessionend",Dr),yi.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const b=De.autoReset,W=Bt.enabled,$=Bt.autoUpdate,Q=Bt.needsUpdate,j=Bt.type;Lt(),De.autoReset=b,Bt.enabled=W,Bt.autoUpdate=$,Bt.needsUpdate=Q,Bt.type=j}function Dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $t(b){const W=b.target;W.removeEventListener("dispose",$t),Ge(W)}function Ge(b){nn(b),Xt.remove(b)}function nn(b){const W=Xt.get(b).programs;W!==void 0&&(W.forEach(function($){Ht.releaseProgram($)}),b.isShaderMaterial&&Ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,$,Q,j,Mt){W===null&&(W=xe);const Rt=j.isMesh&&j.matrixWorld.determinant()<0,Pt=Cc(b,W,$,Q,j);kt.setMaterial(Q,Rt);let Ot=$.index,te=1;if(Q.wireframe===!0){if(Ot=xt.getWireframeAttribute($),Ot===void 0)return;te=2}const ee=$.drawRange,qt=$.attributes.position;let _e=ee.start*te,ge=(ee.start+ee.count)*te;Mt!==null&&(_e=Math.max(_e,Mt.start*te),ge=Math.min(ge,(Mt.start+Mt.count)*te)),Ot!==null?(_e=Math.max(_e,0),ge=Math.min(ge,Ot.count)):qt!=null&&(_e=Math.max(_e,0),ge=Math.min(ge,qt.count));const He=ge-_e;if(He<0||He===1/0)return;Ue.setup(j,Q,Pt,$,Ot);let be,ne=Ft;if(Ot!==null&&(be=ut.get(Ot),ne=ae,ne.setIndex(be)),j.isMesh)Q.wireframe===!0?(kt.setLineWidth(Q.wireframeLinewidth*Qt()),ne.setMode(B.LINES)):ne.setMode(B.TRIANGLES);else if(j.isLine){let Zt=Q.linewidth;Zt===void 0&&(Zt=1),kt.setLineWidth(Zt*Qt()),j.isLineSegments?ne.setMode(B.LINES):j.isLineLoop?ne.setMode(B.LINE_LOOP):ne.setMode(B.LINE_STRIP)}else j.isPoints?ne.setMode(B.POINTS):j.isSprite&&ne.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,rn=j._multiDrawCounts,ve=j._multiDrawCount,Pn=Ot?ut.get(Ot).bytesPerElement:1,ui=Xt.get(Q).currentProgram.getUniforms();for(let Cn=0;Cn<ve;Cn++)ui.setValue(B,"_gl_DrawID",Cn),ne.render(Zt[Cn]/Pn,rn[Cn])}else if(j.isInstancedMesh)ne.renderInstances(_e,He,j.count);else if($.isInstancedBufferGeometry){const Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,rn=Math.min($.instanceCount,Zt);ne.renderInstances(_e,He,rn)}else ne.render(_e,He)};function Te(b,W,$){b.transparent===!0&&b.side===wi&&b.forceSinglePass===!1?(b.side=Nn,b.needsUpdate=!0,sn(b,W,$),b.side=Ia,b.needsUpdate=!0,sn(b,W,$),b.side=wi):sn(b,W,$)}this.compile=function(b,W,$=null){$===null&&($=b),g=me.get($),g.init(W),O.push(g),$.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),b!==$&&b.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const Q=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){const Pt=Mt[Rt];Te(Pt,$,j),Q.add(Pt)}else Te(Mt,$,j),Q.add(Mt)}),g=O.pop(),Q},this.compileAsync=function(b,W,$=null){const Q=this.compile(b,W,$);return new Promise(j=>{function Mt(){if(Q.forEach(function(Rt){Xt.get(Rt).currentProgram.isReady()&&Q.delete(Rt)}),Q.size===0){j(b);return}setTimeout(Mt,10)}se.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let An=null;function Rn(b){An&&An(b)}function Io(){yi.stop()}function Dr(){yi.start()}const yi=new fv;yi.setAnimationLoop(Rn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(b){An=b,rt.setAnimationLoop(b),b===null?yi.stop():yi.start()},rt.addEventListener("sessionstart",Io),rt.addEventListener("sessionend",Dr),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(W),W=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,W,K),g=me.get(b,O.length),g.init(W),O.push(g),At.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(At),gt=this.localClippingEnabled,ht=Tt.init(this.clippingPlanes,gt),M=zt.get(b,P.length),M.init(),P.push(M),rt.enabled===!0&&rt.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&Es(Mt,W,-1/0,D.sortObjects)}Es(b,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(St,U),Me=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Me&&Kt.addToRenderList(M,b),this.info.render.frame++,ht===!0&&Tt.beginShadows();const $=g.state.shadowsArray;Bt.render($,b,W),ht===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,j=M.transmissive;if(g.setupLights(),W.isArrayCamera){const Mt=W.cameras;if(j.length>0)for(let Rt=0,Pt=Mt.length;Rt<Pt;Rt++){const Ot=Mt[Rt];Ho(Q,j,b,Ot)}Me&&Kt.render(b);for(let Rt=0,Pt=Mt.length;Rt<Pt;Rt++){const Ot=Mt[Rt];Ur(M,b,Ot,Ot.viewport)}}else j.length>0&&Ho(Q,j,b,W),Me&&Kt.render(b),Ur(M,b,W);K!==null&&I===0&&(L.updateMultisampleRenderTarget(K),L.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(D,b,W),Ue.resetDefaultState(),C=-1,A=null,O.pop(),O.length>0?(g=O[O.length-1],ht===!0&&Tt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Es(b,W,$,Q){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){Q&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(At);const Rt=pt.update(b),Pt=b.material;Pt.visible&&M.push(b,Rt,Pt,$,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const Rt=pt.update(b),Pt=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Nt.copy(Rt.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(At)),Array.isArray(Pt)){const Ot=Rt.groups;for(let te=0,ee=Ot.length;te<ee;te++){const qt=Ot[te],_e=Pt[qt.materialIndex];_e&&_e.visible&&M.push(b,Rt,_e,$,Nt.z,qt)}}else Pt.visible&&M.push(b,Rt,Pt,$,Nt.z,null)}}const Mt=b.children;for(let Rt=0,Pt=Mt.length;Rt<Pt;Rt++)Es(Mt[Rt],W,$,Q)}function Ur(b,W,$,Q){const j=b.opaque,Mt=b.transmissive,Rt=b.transparent;g.setupLightsView($),ht===!0&&Tt.setGlobalState(D.clippingPlanes,$),Q&&kt.viewport(F.copy(Q)),j.length>0&&Gn(j,W,$),Mt.length>0&&Gn(Mt,W,$),Rt.length>0&&Gn(Rt,W,$),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ho(b,W,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new xs(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Po:ra,minFilter:vs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Mt=g.state.transmissionRenderTarget[Q.id],Rt=Q.viewport||F;Mt.setSize(Rt.z*D.transmissionResolutionScale,Rt.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget();D.setRenderTarget(Mt),D.getClearColor(ft),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),Me&&Kt.render($);const Ot=D.toneMapping;D.toneMapping=Fa;const te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),ht===!0&&Tt.setGlobalState(D.clippingPlanes,Q),Gn(b,$,Q),L.updateMultisampleRenderTarget(Mt),L.updateRenderTargetMipmap(Mt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let qt=0,_e=W.length;qt<_e;qt++){const ge=W[qt],He=ge.object,be=ge.geometry,ne=ge.material,Zt=ge.group;if(ne.side===wi&&He.layers.test(Q.layers)){const rn=ne.side;ne.side=Nn,ne.needsUpdate=!0,an(He,$,Q,be,ne,Zt),ne.side=rn,ne.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(Mt),L.updateRenderTargetMipmap(Mt))}D.setRenderTarget(Pt),D.setClearColor(ft,dt),te!==void 0&&(Q.viewport=te),D.toneMapping=Ot}function Gn(b,W,$){const Q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Mt=b.length;j<Mt;j++){const Rt=b[j],Pt=Rt.object,Ot=Rt.geometry,te=Q===null?Rt.material:Q,ee=Rt.group;Pt.layers.test($.layers)&&an(Pt,W,$,Ot,te,ee)}}function an(b,W,$,Q,j,Mt){b.onBeforeRender(D,W,$,Q,j,Mt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(D,W,$,Q,b,Mt),j.transparent===!0&&j.side===wi&&j.forceSinglePass===!1?(j.side=Nn,j.needsUpdate=!0,D.renderBufferDirect($,W,Q,j,b,Mt),j.side=Ia,j.needsUpdate=!0,D.renderBufferDirect($,W,Q,j,b,Mt),j.side=wi):D.renderBufferDirect($,W,Q,j,b,Mt),b.onAfterRender(D,W,$,Q,j,Mt)}function sn(b,W,$){W.isScene!==!0&&(W=xe);const Q=Xt.get(b),j=g.state.lights,Mt=g.state.shadowsArray,Rt=j.state.version,Pt=Ht.getParameters(b,j.state,Mt,W,$),Ot=Ht.getProgramCacheKey(Pt);let te=Q.programs;Q.environment=b.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(b.isMeshStandardMaterial?tt:E).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,te===void 0&&(b.addEventListener("dispose",$t),te=new Map,Q.programs=te);let ee=te.get(Ot);if(ee!==void 0){if(Q.currentProgram===ee&&Q.lightsStateVersion===Rt)return Ts(b,Pt),ee}else Pt.uniforms=Ht.getUniforms(b),b.onBeforeCompile(Pt,D),ee=Ht.acquireProgram(Pt,Ot),te.set(Ot,ee),Q.uniforms=Pt.uniforms;const qt=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=Tt.uniform),Ts(b,Pt),Q.needsLights=Go(b),Q.lightsStateVersion=Rt,Q.needsLights&&(qt.ambientLightColor.value=j.state.ambient,qt.lightProbe.value=j.state.probe,qt.directionalLights.value=j.state.directional,qt.directionalLightShadows.value=j.state.directionalShadow,qt.spotLights.value=j.state.spot,qt.spotLightShadows.value=j.state.spotShadow,qt.rectAreaLights.value=j.state.rectArea,qt.ltc_1.value=j.state.rectAreaLTC1,qt.ltc_2.value=j.state.rectAreaLTC2,qt.pointLights.value=j.state.point,qt.pointLightShadows.value=j.state.pointShadow,qt.hemisphereLights.value=j.state.hemi,qt.directionalShadowMap.value=j.state.directionalShadowMap,qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qt.spotShadowMap.value=j.state.spotShadowMap,qt.spotLightMatrix.value=j.state.spotLightMatrix,qt.spotLightMap.value=j.state.spotLightMap,qt.pointShadowMap.value=j.state.pointShadowMap,qt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=ee,Q.uniformsList=null,ee}function Oi(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=xc.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Ts(b,W){const $=Xt.get(b);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Cc(b,W,$,Q,j){W.isScene!==!0&&(W=xe),L.resetTextureUnits();const Mt=W.fog,Rt=Q.isMeshStandardMaterial?W.environment:null,Pt=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Rr,Ot=(Q.isMeshStandardMaterial?tt:E).get(Q.envMap||Rt),te=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ee=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qt=!!$.morphAttributes.position,_e=!!$.morphAttributes.normal,ge=!!$.morphAttributes.color;let He=Fa;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(He=D.toneMapping);const be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=be!==void 0?be.length:0,Zt=Xt.get(Q),rn=g.state.lights;if(ht===!0&&(gt===!0||b!==A)){const Xe=b===A&&Q.id===C;Tt.setState(Q,b,Xe)}let ve=!1;Q.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==rn.state.version||Zt.outputColorSpace!==Pt||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==Ot||Q.fog===!0&&Zt.fog!==Mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Tt.numPlanes||Zt.numIntersection!==Tt.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==ee||Zt.morphTargets!==qt||Zt.morphNormals!==_e||Zt.morphColors!==ge||Zt.toneMapping!==He||Zt.morphTargetsCount!==ne)&&(ve=!0):(ve=!0,Zt.__version=Q.version);let Pn=Zt.currentProgram;ve===!0&&(Pn=sn(Q,W,j));let ui=!1,Cn=!1,hn=!1;const Le=Pn.getUniforms(),wn=Zt.uniforms;if(kt.useProgram(Pn.program)&&(ui=!0,Cn=!0,hn=!0),Q.id!==C&&(C=Q.id,Cn=!0),ui||A!==b){kt.buffers.depth.getReversed()?(Et.copy(b.projectionMatrix),yx(Et),Ex(Et),Le.setValue(B,"projectionMatrix",Et)):Le.setValue(B,"projectionMatrix",b.projectionMatrix),Le.setValue(B,"viewMatrix",b.matrixWorldInverse);const gn=Le.map.cameraPosition;gn!==void 0&&gn.setValue(B,Yt.setFromMatrixPosition(b.matrixWorld)),ue.logarithmicDepthBuffer&&Le.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Le.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Cn=!0,hn=!0)}if(j.isSkinnedMesh){Le.setOptional(B,j,"bindMatrix"),Le.setOptional(B,j,"bindMatrixInverse");const Xe=j.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Le.setValue(B,"boneTexture",Xe.boneTexture,L))}j.isBatchedMesh&&(Le.setOptional(B,j,"batchingTexture"),Le.setValue(B,"batchingTexture",j._matricesTexture,L),Le.setOptional(B,j,"batchingIdTexture"),Le.setValue(B,"batchingIdTexture",j._indirectTexture,L),Le.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Le.setValue(B,"batchingColorTexture",j._colorsTexture,L));const Mn=$.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Gt.update(j,$,Pn),(Cn||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,Le.setValue(B,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(wn.envMap.value=Ot,wn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(wn.envMapIntensity.value=W.environmentIntensity),Cn&&(Le.setValue(B,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&wc(wn,hn),Mt&&Q.fog===!0&&wt.refreshFogUniforms(wn,Mt),wt.refreshMaterialUniforms(wn,Q,Y,at,g.state.transmissionRenderTarget[b.id]),xc.upload(B,Oi(Zt),wn,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(xc.upload(B,Oi(Zt),wn,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Le.setValue(B,"center",j.center),Le.setValue(B,"modelViewMatrix",j.modelViewMatrix),Le.setValue(B,"normalMatrix",j.normalMatrix),Le.setValue(B,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Xe=Q.uniformsGroups;for(let gn=0,bs=Xe.length;gn<bs;gn++){const zn=Xe[gn];X.update(zn,Pn),X.bind(zn,Pn)}}return Pn}function wc(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Go(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,W,$){Xt.get(b.texture).__webglTexture=W,Xt.get(b.depthTexture).__webglTexture=$;const Q=Xt.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const $=Xt.get(b);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0};const Ga=B.createFramebuffer();this.setRenderTarget=function(b,W=0,$=0){K=b,z=W,I=$;let Q=!0,j=null,Mt=!1,Rt=!1;if(b){const Ot=Xt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Ot.__hasExternalTextures)L.rebindTextures(b,Xt.get(b.texture).__webglTexture,Xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qt=b.depthTexture;if(Ot.__boundDepthTexture!==qt){if(qt!==null&&Xt.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const te=b.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Rt=!0);const ee=Xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?j=ee[W][$]:j=ee[W],Mt=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?j=Xt.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?j=ee[$]:j=ee,F.copy(b.viewport),ot.copy(b.scissor),st=b.scissorTest}else F.copy(nt).multiplyScalar(Y).floor(),ot.copy(yt).multiplyScalar(Y).floor(),st=bt;if($!==0&&(j=Ga),kt.bindFramebuffer(B.FRAMEBUFFER,j)&&Q&&kt.drawBuffers(b,j),kt.viewport(F),kt.scissor(ot),kt.setScissorTest(st),Mt){const Ot=Xt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,$)}else if(Rt){const Ot=Xt.get(b.texture),te=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ot.__webglTexture,$,te)}else if(b!==null&&$!==0){const Ot=Xt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ot.__webglTexture,$)}C=-1},this.readRenderTargetPixels=function(b,W,$,Q,j,Mt,Rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){kt.bindFramebuffer(B.FRAMEBUFFER,Pt);try{const Ot=b.texture,te=Ot.format,ee=Ot.type;if(!ue.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-Q&&$>=0&&$<=b.height-j&&B.readPixels(W,$,Q,j,jt.convert(te),jt.convert(ee),Mt)}finally{const Ot=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,W,$,Q,j,Mt,Rt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){const Ot=b.texture,te=Ot.format,ee=Ot.type;if(!ue.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-Q&&$>=0&&$<=b.height-j){kt.bindFramebuffer(B.FRAMEBUFFER,Pt);const qt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qt),B.bufferData(B.PIXEL_PACK_BUFFER,Mt.byteLength,B.STREAM_READ),B.readPixels(W,$,Q,j,jt.convert(te),jt.convert(ee),0);const _e=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,_e);const ge=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Mx(B,ge,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,qt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Mt),B.deleteBuffer(qt),B.deleteSync(ge),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,W=null,$=0){b.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);const Q=Math.pow(2,-$),j=Math.floor(b.image.width*Q),Mt=Math.floor(b.image.height*Q),Rt=W!==null?W.x:0,Pt=W!==null?W.y:0;L.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Rt,Pt,j,Mt),kt.unbindTexture()};const Lr=B.createFramebuffer(),Pi=B.createFramebuffer();this.copyTextureToTexture=function(b,W,$=null,Q=null,j=0,Mt=null){b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],W=arguments[2],Mt=arguments[3]||0,$=null),Mt===null&&(j!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=j,j=0):Mt=0);let Rt,Pt,Ot,te,ee,qt,_e,ge,He;const be=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if($!==null)Rt=$.max.x-$.min.x,Pt=$.max.y-$.min.y,Ot=$.isBox3?$.max.z-$.min.z:1,te=$.min.x,ee=$.min.y,qt=$.isBox3?$.min.z:0;else{const Mn=Math.pow(2,-j);Rt=Math.floor(be.width*Mn),Pt=Math.floor(be.height*Mn),b.isDataArrayTexture?Ot=be.depth:b.isData3DTexture?Ot=Math.floor(be.depth*Mn):Ot=1,te=0,ee=0,qt=0}Q!==null?(_e=Q.x,ge=Q.y,He=Q.z):(_e=0,ge=0,He=0);const ne=jt.convert(W.format),Zt=jt.convert(W.type);let rn;W.isData3DTexture?(L.setTexture3D(W,0),rn=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),rn=B.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),rn=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ve=B.getParameter(B.UNPACK_ROW_LENGTH),Pn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ui=B.getParameter(B.UNPACK_SKIP_PIXELS),Cn=B.getParameter(B.UNPACK_SKIP_ROWS),hn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,be.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,be.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,ee),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qt);const Le=b.isDataArrayTexture||b.isData3DTexture,wn=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const Mn=Xt.get(b),Xe=Xt.get(W),gn=Xt.get(Mn.__renderTarget),bs=Xt.get(Xe.__renderTarget);kt.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let zn=0;zn<Ot;zn++)Le&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.get(b).__webglTexture,j,qt+zn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.get(W).__webglTexture,Mt,He+zn)),B.blitFramebuffer(te,ee,Rt,Pt,_e,ge,Rt,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||Xt.has(b)){const Mn=Xt.get(b),Xe=Xt.get(W);kt.bindFramebuffer(B.READ_FRAMEBUFFER,Lr),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pi);for(let gn=0;gn<Ot;gn++)Le?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mn.__webglTexture,j,qt+gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mn.__webglTexture,j),wn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.__webglTexture,Mt,He+gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xe.__webglTexture,Mt),j!==0?B.blitFramebuffer(te,ee,Rt,Pt,_e,ge,Rt,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):wn?B.copyTexSubImage3D(rn,Mt,_e,ge,He+gn,te,ee,Rt,Pt):B.copyTexSubImage2D(rn,Mt,_e,ge,te,ee,Rt,Pt);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else wn?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(rn,Mt,_e,ge,He,Rt,Pt,Ot,ne,Zt,be.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(rn,Mt,_e,ge,He,Rt,Pt,Ot,ne,be.data):B.texSubImage3D(rn,Mt,_e,ge,He,Rt,Pt,Ot,ne,Zt,be):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Mt,_e,ge,Rt,Pt,ne,Zt,be.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Mt,_e,ge,be.width,be.height,ne,be.data):B.texSubImage2D(B.TEXTURE_2D,Mt,_e,ge,Rt,Pt,ne,Zt,be);B.pixelStorei(B.UNPACK_ROW_LENGTH,ve),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ui),B.pixelStorei(B.UNPACK_SKIP_ROWS,Cn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hn),Mt===0&&W.generateMipmaps&&B.generateMipmap(rn),kt.unbindTexture()},this.copyTextureToTexture3D=function(b,W,$=null,Q=null,j=0){return b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],W=arguments[3],j=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,$,Q,j)},this.initRenderTarget=function(b){Xt.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),kt.unbindTexture()},this.resetState=function(){z=0,I=0,K=null,kt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const Bg={type:"change"},dd={type:"start"},_v={type:"end"},dc=new ev,Fg=new Pa,kb=Math.cos(70*Sx.DEG2RAD),cn=new et,Hn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hh=1e-6;class Xb extends sM{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:mr.ROTATE,TWO:mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new Ms,this._lastTargetPosition=new et,this._quat=new Ms().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fg,this._sphericalDelta=new fg,this._scale=1,this._panOffset=new et,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new et,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qb.bind(this),this._onPointerDown=Wb.bind(this),this._onPointerUp=Yb.bind(this),this._onContextMenu=tA.bind(this),this._onMouseWheel=Kb.bind(this),this._onKeyDown=Qb.bind(this),this._onTouchStart=Jb.bind(this),this._onTouchMove=$b.bind(this),this._onMouseDown=jb.bind(this),this._onMouseMove=Zb.bind(this),this._interceptControlDown=eA.bind(this),this._interceptControlUp=nA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bg),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),l<-Math.PI?l+=Hn:l>Math.PI&&(l-=Hn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=cn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new et(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(dc.origin.copy(this.object.position),dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dc.direction))<kb?this.object.lookAt(this.target):(Fg.setFromNormalAndCoplanarPoint(this.object.up,this.target),dc.intersectPlane(Fg,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hh||this._lastTargetPosition.distanceToSquared(this.target)>hh?(this.dispatchEvent(Bg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Hn/60*this.autoRotateSpeed*t:Hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let u=cn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new he,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Wb(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function qb(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function Yb(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_v),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function jb(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ze.DOLLY;break;case vr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ze.ROTATE}break;case vr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(dd)}function Zb(o){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Kb(o){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(o.preventDefault(),this.dispatchEvent(dd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(_v))}function Qb(o){this.enabled!==!1&&this._handleKeyDown(o)}function Jb(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ze.TOUCH_ROTATE;break;case mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ze.TOUCH_DOLLY_PAN;break;case mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(dd)}function $b(o){switch(this._trackPointer(o),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ze.NONE}}function tA(o){this.enabled!==!1&&o.preventDefault()}function eA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var vi=ed();const iA=`
  varying vec2 vUv;
  varying vec3 vWorldNormal;
  
  void main() {
    vUv = uv;
    vWorldNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,aA=`
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
`;function sA(o,t){return new Ni({uniforms:{dayTexture:{value:o},nightTexture:{value:t}},vertexShader:iA,fragmentShader:aA,side:wi})}function rA({rimHex:o=35071,facingHex:t=0}={}){const i={color1:{value:new we(o)},color2:{value:new we(t)},fresnelBias:{value:.1},fresnelScale:{value:1},fresnelPower:{value:4}},s=`
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
  `;return new Ni({uniforms:i,vertexShader:s,fragmentShader:l,transparent:!0,blending:dh})}const oA=()=>{const o=vi.useRef(null),t="https://github.com/rudraxDragon",[i,s]=vi.useState(!1),l=vi.useRef(null),[u,h]=vi.useState(!0),d=vi.useRef(null),[p,m]=vi.useState(!0),_=vi.useRef(3e-4),[v,x]=vi.useState(3),[y,R]=vi.useState(0),[w,M]=vi.useState(!1);vi.useEffect(()=>{const z=new jx,I=75,K=window.innerWidth/window.innerHeight,C=.1,A=100,F=new ci(I,K,C,A);F.position.set(-1.22,.73,-1.5);const ot=new Vb({antialias:!0});ot.setSize(window.innerWidth,window.innerHeight),o.current.appendChild(ot.domElement);const st=new nM,ft=(k,at,Y)=>new Promise(St=>{st.load(k,U=>{R((at+1)/Y*100),St(U)})});(async()=>{const k=await Promise.all([ft("images/earth_daymap.png",0,4),ft("images/earth_nightmap.jpg",1,4),ft("images/earthclouds.jpg",2,4),ft("images/stars_milky_way.jpg",3,4)]),[at,Y,St,U]=k,nt=new _r(1,64,64),yt=sA(at,Y),bt=new Zn(nt,yt);z.add(bt);const q=new _r(1.01,64,64),ht=new Ec({map:St,transparent:!0,opacity:.2}),gt=new Zn(q,ht);gt.visible=u,l.current=gt,z.add(gt);const Et=new _r(10,32,32),At=new Ec({map:U,side:Nn}),Yt=new Zn(Et,At);z.add(Yt);const Nt=new _r(1.01,64,64),xe=rA(),Me=new Zn(Nt,xe);Me.visible=p,d.current=Me,z.add(Me),M(!0);const Qt=new Xb(F,ot.domElement);Qt.enableDamping=!0,Qt.dampingFactor=.05,Qt.minDistance=1.1,Qt.maxDistance=5,Qt.target.set(0,0,0),Qt.mouseButtons.RIGHT=null;const B=()=>{requestAnimationFrame(B);const je=_.current;bt.rotation.y+=je,gt.rotation.y+=je+1e-4,Me.rotation.y+=je+1e-4,Qt.update(),ot.render(z,F)};B()})()},[]);const g=()=>{l.current&&(l.current.visible=!l.current.visible),h(z=>!z)},P=()=>{d.current&&(d.current.visible=!d.current.visible),m(z=>!z)},O=()=>{v<10&&(_.current+=1e-4,x(z=>z+1))},D=()=>{v>1&&(_.current-=1e-4,x(z=>z-1))},H=()=>{s(z=>!z)};return Ee.jsxs(Ee.Fragment,{children:[!w&&Ee.jsx("div",{className:"loading-screen",children:Ee.jsxs("div",{className:"loading-container",children:[Ee.jsx("h2",{children:"🌍 Loading Earth..."}),Ee.jsx("div",{className:"progress-bar",children:Ee.jsx("div",{className:"progress-fill",style:{width:`${y}%`}})}),Ee.jsxs("p",{children:[Math.round(y),"%"]}),Ee.jsx("p",{className:"loading-text",children:"Rendering a beautiful view of Earth..."})]})}),Ee.jsx("div",{ref:o,className:"earth"}),Ee.jsxs("div",{className:"navigation",children:[Ee.jsx("h1",{className:"Heading",onClick:H,children:"पृथ्वी"}),Ee.jsxs("div",{className:"contacts",children:[Ee.jsx("a",{href:t,children:Ee.jsx("img",{src:"images/me.jpg",alt:"Photo of Rudraksh Prasad",className:"profilePic"})}),Ee.jsxs("div",{className:"nameAndLink",children:[Ee.jsx("h1",{className:"name",children:"Rudraksh Prasad"}),Ee.jsx("hr",{}),Ee.jsx("img",{src:"images/github.svg",alt:"github logo",className:"githubLogo"}),Ee.jsx("a",{href:t,className:"link",children:"rudraxDragon"})]})]})]}),Ee.jsxs("div",{className:`controls-container ${i?"show":""}`,children:[Ee.jsxs("div",{className:"control-item",children:[Ee.jsx("span",{children:"Clouds:"}),Ee.jsx("button",{className:`toggle-btn ${u?"":"off"}`,onClick:g,children:u?"ON":"OFF"})]}),Ee.jsxs("div",{className:"control-item",children:[Ee.jsx("span",{children:"Glow:"}),Ee.jsx("button",{className:`toggle-btn ${p?"":"off"}`,onClick:P,children:p?"ON":"OFF"})]}),Ee.jsxs("div",{className:"control-item speed-control",children:[Ee.jsx("span",{children:"Speed:"}),Ee.jsx("button",{className:"speed-btn",onClick:D,children:"◀"}),Ee.jsx("span",{className:"speed-value",children:v}),Ee.jsx("button",{className:"speed-btn",onClick:O,children:"▶"})]})]})]})},lA=wS.createRoot(document.getElementById("root"));lA.render(Ee.jsx(oA,{}));
