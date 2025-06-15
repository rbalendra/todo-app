(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))c(S);new MutationObserver(S=>{for(const E of S)if(E.type==="childList")for(const N of E.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&c(N)}).observe(document,{childList:!0,subtree:!0});function f(S){const E={};return S.integrity&&(E.integrity=S.integrity),S.referrerPolicy&&(E.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?E.credentials="include":S.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function c(S){if(S.ep)return;S.ep=!0;const E=f(S);fetch(S.href,E)}})();function gb(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Eo={exports:{}},Ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function yb(){if(zd)return Ul;zd=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(c,S,E){var N=null;if(E!==void 0&&(N=""+E),S.key!==void 0&&(N=""+S.key),"key"in S){E={};for(var G in S)G!=="key"&&(E[G]=S[G])}else E=S;return S=E.ref,{$$typeof:u,type:c,key:N,ref:S!==void 0?S:null,props:E}}return Ul.Fragment=s,Ul.jsx=f,Ul.jsxs=f,Ul}var _d;function xb(){return _d||(_d=1,Eo.exports=yb()),Eo.exports}var D=xb(),Ao={exports:{}},nn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Sb(){if(Md)return nn;Md=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),N=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),Y=Symbol.iterator;function C(h){return h===null||typeof h!="object"?null:(h=Y&&h[Y]||h["@@iterator"],typeof h=="function"?h:null)}var on={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,k={};function K(h,M,j){this.props=h,this.context=M,this.refs=k,this.updater=j||on}K.prototype.isReactComponent={},K.prototype.setState=function(h,M){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,M,"setState")},K.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Yn(){}Yn.prototype=K.prototype;function Mn(h,M,j){this.props=h,this.context=M,this.refs=k,this.updater=j||on}var dn=Mn.prototype=new Yn;dn.constructor=Mn,Z(dn,K.prototype),dn.isPureReactComponent=!0;var Tn=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Q=Object.prototype.hasOwnProperty;function U(h,M,j,H,L,sn){return j=sn.ref,{$$typeof:u,type:h,key:M,ref:j!==void 0?j:null,props:sn}}function J(h,M){return U(h.type,M,void 0,void 0,void 0,h.props)}function tn(h){return typeof h=="object"&&h!==null&&h.$$typeof===u}function Ft(h){var M={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(j){return M[j]})}var Et=/\/+/g;function Kn(h,M){return typeof h=="object"&&h!==null&&h.key!=null?Ft(""+h.key):M.toString(36)}function Aa(){}function za(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Aa,Aa):(h.status="pending",h.then(function(M){h.status==="pending"&&(h.status="fulfilled",h.value=M)},function(M){h.status==="pending"&&(h.status="rejected",h.reason=M)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function Jn(h,M,j,H,L){var sn=typeof h;(sn==="undefined"||sn==="boolean")&&(h=null);var I=!1;if(h===null)I=!0;else switch(sn){case"bigint":case"string":case"number":I=!0;break;case"object":switch(h.$$typeof){case u:case s:I=!0;break;case R:return I=h._init,Jn(I(h._payload),M,j,H,L)}}if(I)return L=L(h),I=H===""?"."+Kn(h,0):H,Tn(L)?(j="",I!=null&&(j=I.replace(Et,"$&/")+"/"),Jn(L,M,j,"",function(It){return It})):L!=null&&(tn(L)&&(L=J(L,j+(L.key==null||h&&h.key===L.key?"":(""+L.key).replace(Et,"$&/")+"/")+I)),M.push(L)),1;I=0;var lt=H===""?".":H+":";if(Tn(h))for(var En=0;En<h.length;En++)H=h[En],sn=lt+Kn(H,En),I+=Jn(H,M,j,sn,L);else if(En=C(h),typeof En=="function")for(h=En.call(h),En=0;!(H=h.next()).done;)H=H.value,sn=lt+Kn(H,En++),I+=Jn(H,M,j,sn,L);else if(sn==="object"){if(typeof h.then=="function")return Jn(za(h),M,j,H,L);throw M=String(h),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return I}function A(h,M,j){if(h==null)return h;var H=[],L=0;return Jn(h,H,"","",function(sn){return M.call(j,sn,L++)}),H}function q(h){if(h._status===-1){var M=h._result;M=M(),M.then(function(j){(h._status===0||h._status===-1)&&(h._status=1,h._result=j)},function(j){(h._status===0||h._status===-1)&&(h._status=2,h._result=j)}),h._status===-1&&(h._status=0,h._result=M)}if(h._status===1)return h._result.default;throw h._result}var $=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function xn(){}return nn.Children={map:A,forEach:function(h,M,j){A(h,function(){M.apply(this,arguments)},j)},count:function(h){var M=0;return A(h,function(){M++}),M},toArray:function(h){return A(h,function(M){return M})||[]},only:function(h){if(!tn(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},nn.Component=K,nn.Fragment=f,nn.Profiler=S,nn.PureComponent=Mn,nn.StrictMode=c,nn.Suspense=T,nn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,nn.__COMPILER_RUNTIME={__proto__:null,c:function(h){return F.H.useMemoCache(h)}},nn.cache=function(h){return function(){return h.apply(null,arguments)}},nn.cloneElement=function(h,M,j){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var H=Z({},h.props),L=h.key,sn=void 0;if(M!=null)for(I in M.ref!==void 0&&(sn=void 0),M.key!==void 0&&(L=""+M.key),M)!Q.call(M,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&M.ref===void 0||(H[I]=M[I]);var I=arguments.length-2;if(I===1)H.children=j;else if(1<I){for(var lt=Array(I),En=0;En<I;En++)lt[En]=arguments[En+2];H.children=lt}return U(h.type,L,void 0,void 0,sn,H)},nn.createContext=function(h){return h={$$typeof:N,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:E,_context:h},h},nn.createElement=function(h,M,j){var H,L={},sn=null;if(M!=null)for(H in M.key!==void 0&&(sn=""+M.key),M)Q.call(M,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(L[H]=M[H]);var I=arguments.length-2;if(I===1)L.children=j;else if(1<I){for(var lt=Array(I),En=0;En<I;En++)lt[En]=arguments[En+2];L.children=lt}if(h&&h.defaultProps)for(H in I=h.defaultProps,I)L[H]===void 0&&(L[H]=I[H]);return U(h,sn,void 0,void 0,null,L)},nn.createRef=function(){return{current:null}},nn.forwardRef=function(h){return{$$typeof:G,render:h}},nn.isValidElement=tn,nn.lazy=function(h){return{$$typeof:R,_payload:{_status:-1,_result:h},_init:q}},nn.memo=function(h,M){return{$$typeof:g,type:h,compare:M===void 0?null:M}},nn.startTransition=function(h){var M=F.T,j={};F.T=j;try{var H=h(),L=F.S;L!==null&&L(j,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(xn,$)}catch(sn){$(sn)}finally{F.T=M}},nn.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},nn.use=function(h){return F.H.use(h)},nn.useActionState=function(h,M,j){return F.H.useActionState(h,M,j)},nn.useCallback=function(h,M){return F.H.useCallback(h,M)},nn.useContext=function(h){return F.H.useContext(h)},nn.useDebugValue=function(){},nn.useDeferredValue=function(h,M){return F.H.useDeferredValue(h,M)},nn.useEffect=function(h,M,j){var H=F.H;if(typeof j=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(h,M)},nn.useId=function(){return F.H.useId()},nn.useImperativeHandle=function(h,M,j){return F.H.useImperativeHandle(h,M,j)},nn.useInsertionEffect=function(h,M){return F.H.useInsertionEffect(h,M)},nn.useLayoutEffect=function(h,M){return F.H.useLayoutEffect(h,M)},nn.useMemo=function(h,M){return F.H.useMemo(h,M)},nn.useOptimistic=function(h,M){return F.H.useOptimistic(h,M)},nn.useReducer=function(h,M,j){return F.H.useReducer(h,M,j)},nn.useRef=function(h){return F.H.useRef(h)},nn.useState=function(h){return F.H.useState(h)},nn.useSyncExternalStore=function(h,M,j){return F.H.useSyncExternalStore(h,M,j)},nn.useTransition=function(){return F.H.useTransition()},nn.version="19.1.0",nn}var Dd;function ko(){return Dd||(Dd=1,Ao.exports=Sb()),Ao.exports}var Un=ko();const rn=gb(Un);var zo={exports:{}},Hl={},_o={exports:{}},Mo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function Ob(){return Nd||(Nd=1,function(u){function s(A,q){var $=A.length;A.push(q);n:for(;0<$;){var xn=$-1>>>1,h=A[xn];if(0<S(h,q))A[xn]=q,A[$]=h,$=xn;else break n}}function f(A){return A.length===0?null:A[0]}function c(A){if(A.length===0)return null;var q=A[0],$=A.pop();if($!==q){A[0]=$;n:for(var xn=0,h=A.length,M=h>>>1;xn<M;){var j=2*(xn+1)-1,H=A[j],L=j+1,sn=A[L];if(0>S(H,$))L<h&&0>S(sn,H)?(A[xn]=sn,A[L]=$,xn=L):(A[xn]=H,A[j]=$,xn=j);else if(L<h&&0>S(sn,$))A[xn]=sn,A[L]=$,xn=L;else break n}}return q}function S(A,q){var $=A.sortIndex-q.sortIndex;return $!==0?$:A.id-q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;u.unstable_now=function(){return E.now()}}else{var N=Date,G=N.now();u.unstable_now=function(){return N.now()-G}}var T=[],g=[],R=1,Y=null,C=3,on=!1,Z=!1,k=!1,K=!1,Yn=typeof setTimeout=="function"?setTimeout:null,Mn=typeof clearTimeout=="function"?clearTimeout:null,dn=typeof setImmediate<"u"?setImmediate:null;function Tn(A){for(var q=f(g);q!==null;){if(q.callback===null)c(g);else if(q.startTime<=A)c(g),q.sortIndex=q.expirationTime,s(T,q);else break;q=f(g)}}function F(A){if(k=!1,Tn(A),!Z)if(f(T)!==null)Z=!0,Q||(Q=!0,Kn());else{var q=f(g);q!==null&&Jn(F,q.startTime-A)}}var Q=!1,U=-1,J=5,tn=-1;function Ft(){return K?!0:!(u.unstable_now()-tn<J)}function Et(){if(K=!1,Q){var A=u.unstable_now();tn=A;var q=!0;try{n:{Z=!1,k&&(k=!1,Mn(U),U=-1),on=!0;var $=C;try{t:{for(Tn(A),Y=f(T);Y!==null&&!(Y.expirationTime>A&&Ft());){var xn=Y.callback;if(typeof xn=="function"){Y.callback=null,C=Y.priorityLevel;var h=xn(Y.expirationTime<=A);if(A=u.unstable_now(),typeof h=="function"){Y.callback=h,Tn(A),q=!0;break t}Y===f(T)&&c(T),Tn(A)}else c(T);Y=f(T)}if(Y!==null)q=!0;else{var M=f(g);M!==null&&Jn(F,M.startTime-A),q=!1}}break n}finally{Y=null,C=$,on=!1}q=void 0}}finally{q?Kn():Q=!1}}}var Kn;if(typeof dn=="function")Kn=function(){dn(Et)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,za=Aa.port2;Aa.port1.onmessage=Et,Kn=function(){za.postMessage(null)}}else Kn=function(){Yn(Et,0)};function Jn(A,q){U=Yn(function(){A(u.unstable_now())},q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(A){A.callback=null},u.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<A?Math.floor(1e3/A):5},u.unstable_getCurrentPriorityLevel=function(){return C},u.unstable_next=function(A){switch(C){case 1:case 2:case 3:var q=3;break;default:q=C}var $=C;C=q;try{return A()}finally{C=$}},u.unstable_requestPaint=function(){K=!0},u.unstable_runWithPriority=function(A,q){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var $=C;C=A;try{return q()}finally{C=$}},u.unstable_scheduleCallback=function(A,q,$){var xn=u.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?xn+$:xn):$=xn,A){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=$+h,A={id:R++,callback:q,priorityLevel:A,startTime:$,expirationTime:h,sortIndex:-1},$>xn?(A.sortIndex=$,s(g,A),f(T)===null&&A===f(g)&&(k?(Mn(U),U=-1):k=!0,Jn(F,$-xn))):(A.sortIndex=h,s(T,A),Z||on||(Z=!0,Q||(Q=!0,Kn()))),A},u.unstable_shouldYield=Ft,u.unstable_wrapCallback=function(A){var q=C;return function(){var $=C;C=q;try{return A.apply(this,arguments)}finally{C=$}}}}(Mo)),Mo}var Rd;function Tb(){return Rd||(Rd=1,_o.exports=Ob()),_o.exports}var Do={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Eb(){if(kd)return Wn;kd=1;var u=ko();function s(T){var g="https://react.dev/errors/"+T;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)g+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+T+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},S=Symbol.for("react.portal");function E(T,g,R){var Y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:Y==null?null:""+Y,children:T,containerInfo:g,implementation:R}}var N=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(T,g){if(T==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Wn.createPortal=function(T,g){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return E(T,g,null,R)},Wn.flushSync=function(T){var g=N.T,R=c.p;try{if(N.T=null,c.p=2,T)return T()}finally{N.T=g,c.p=R,c.d.f()}},Wn.preconnect=function(T,g){typeof T=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(T,g))},Wn.prefetchDNS=function(T){typeof T=="string"&&c.d.D(T)},Wn.preinit=function(T,g){if(typeof T=="string"&&g&&typeof g.as=="string"){var R=g.as,Y=G(R,g.crossOrigin),C=typeof g.integrity=="string"?g.integrity:void 0,on=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;R==="style"?c.d.S(T,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:Y,integrity:C,fetchPriority:on}):R==="script"&&c.d.X(T,{crossOrigin:Y,integrity:C,fetchPriority:on,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Wn.preinitModule=function(T,g){if(typeof T=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var R=G(g.as,g.crossOrigin);c.d.M(T,{crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(T)},Wn.preload=function(T,g){if(typeof T=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var R=g.as,Y=G(R,g.crossOrigin);c.d.L(T,R,{crossOrigin:Y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Wn.preloadModule=function(T,g){if(typeof T=="string")if(g){var R=G(g.as,g.crossOrigin);c.d.m(T,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(T)},Wn.requestFormReset=function(T){c.d.r(T)},Wn.unstable_batchedUpdates=function(T,g){return T(g)},Wn.useFormState=function(T,g,R){return N.H.useFormState(T,g,R)},Wn.useFormStatus=function(){return N.H.useHostTransitionStatus()},Wn.version="19.1.0",Wn}var Ud;function Ab(){if(Ud)return Do.exports;Ud=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),Do.exports=Eb(),Do.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function zb(){if(Hd)return Hl;Hd=1;var u=Tb(),s=ko(),f=Ab();function c(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function E(n){var t=n,a=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(a=t.return),n=t.return;while(n)}return t.tag===3?a:null}function N(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function G(n){if(E(n)!==n)throw Error(c(188))}function T(n){var t=n.alternate;if(!t){if(t=E(n),t===null)throw Error(c(188));return t!==n?null:n}for(var a=n,e=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(e=l.return,e!==null){a=e;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return G(l),n;if(i===e)return G(l),t;i=i.sibling}throw Error(c(188))}if(a.return!==e.return)a=l,e=i;else{for(var r=!1,o=l.child;o;){if(o===a){r=!0,a=l,e=i;break}if(o===e){r=!0,e=l,a=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===a){r=!0,a=i,e=l;break}if(o===e){r=!0,e=i,a=l;break}o=o.sibling}if(!r)throw Error(c(189))}}if(a.alternate!==e)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?n:t}function g(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=g(n),t!==null)return t;n=n.sibling}return null}var R=Object.assign,Y=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),on=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),Yn=Symbol.for("react.provider"),Mn=Symbol.for("react.consumer"),dn=Symbol.for("react.context"),Tn=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),tn=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),Et=Symbol.iterator;function Kn(n){return n===null||typeof n!="object"?null:(n=Et&&n[Et]||n["@@iterator"],typeof n=="function"?n:null)}var Aa=Symbol.for("react.client.reference");function za(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Aa?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Z:return"Fragment";case K:return"Profiler";case k:return"StrictMode";case F:return"Suspense";case Q:return"SuspenseList";case tn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case on:return"Portal";case dn:return(n.displayName||"Context")+".Provider";case Mn:return(n._context.displayName||"Context")+".Consumer";case Tn:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case U:return t=n.displayName||null,t!==null?t:za(n.type)||"Memo";case J:t=n._payload,n=n._init;try{return za(n(t))}catch{}}return null}var Jn=Array.isArray,A=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},xn=[],h=-1;function M(n){return{current:n}}function j(n){0>h||(n.current=xn[h],xn[h]=null,h--)}function H(n,t){h++,xn[h]=n.current,n.current=t}var L=M(null),sn=M(null),I=M(null),lt=M(null);function En(n,t){switch(H(I,t),H(sn,n),H(L,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?nd(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=nd(t),n=td(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}j(L),H(L,n)}function It(){j(L),j(sn),j(I)}function ou(n){n.memoizedState!==null&&H(lt,n);var t=L.current,a=td(t,n.type);t!==a&&(H(sn,n),H(L,a))}function jl(n){sn.current===n&&(j(L),j(sn)),lt.current===n&&(j(lt),Ml._currentValue=$)}var cu=Object.prototype.hasOwnProperty,su=u.unstable_scheduleCallback,fu=u.unstable_cancelCallback,$d=u.unstable_shouldYield,Wd=u.unstable_requestPaint,Nt=u.unstable_now,Fd=u.unstable_getCurrentPriorityLevel,Uo=u.unstable_ImmediatePriority,Ho=u.unstable_UserBlockingPriority,wl=u.unstable_NormalPriority,Id=u.unstable_LowPriority,qo=u.unstable_IdlePriority,n0=u.log,t0=u.unstable_setDisableYieldValue,Ce=null,it=null;function na(n){if(typeof n0=="function"&&t0(n),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Ce,n)}catch{}}var ut=Math.clz32?Math.clz32:l0,a0=Math.log,e0=Math.LN2;function l0(n){return n>>>=0,n===0?32:31-(a0(n)/e0|0)|0}var Yl=256,Bl=4194304;function _a(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Xl(n,t,a){var e=n.pendingLanes;if(e===0)return 0;var l=0,i=n.suspendedLanes,r=n.pingedLanes;n=n.warmLanes;var o=e&134217727;return o!==0?(e=o&~i,e!==0?l=_a(e):(r&=o,r!==0?l=_a(r):a||(a=o&~n,a!==0&&(l=_a(a))))):(o=e&~i,o!==0?l=_a(o):r!==0?l=_a(r):a||(a=e&~n,a!==0&&(l=_a(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function je(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function i0(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Co(){var n=Yl;return Yl<<=1,(Yl&4194048)===0&&(Yl=256),n}function jo(){var n=Bl;return Bl<<=1,(Bl&62914560)===0&&(Bl=4194304),n}function du(n){for(var t=[],a=0;31>a;a++)t.push(n);return t}function we(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function u0(n,t,a,e,l,i){var r=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var o=n.entanglements,d=n.expirationTimes,p=n.hiddenUpdates;for(a=r&~a;0<a;){var O=31-ut(a),_=1<<O;o[O]=0,d[O]=-1;var y=p[O];if(y!==null)for(p[O]=null,O=0;O<y.length;O++){var x=y[O];x!==null&&(x.lane&=-536870913)}a&=~_}e!==0&&wo(n,e,0),i!==0&&l===0&&n.tag!==0&&(n.suspendedLanes|=i&~(r&~t))}function wo(n,t,a){n.pendingLanes|=t,n.suspendedLanes&=~t;var e=31-ut(t);n.entangledLanes|=t,n.entanglements[e]=n.entanglements[e]|1073741824|a&4194090}function Yo(n,t){var a=n.entangledLanes|=t;for(n=n.entanglements;a;){var e=31-ut(a),l=1<<e;l&t|n[e]&t&&(n[e]|=t),a&=~l}}function hu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function bu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Bo(){var n=q.p;return n!==0?n:(n=window.event,n===void 0?32:xd(n.type))}function r0(n,t){var a=q.p;try{return q.p=n,t()}finally{q.p=a}}var ta=Math.random().toString(36).slice(2),Pn="__reactFiber$"+ta,In="__reactProps$"+ta,Va="__reactContainer$"+ta,mu="__reactEvents$"+ta,o0="__reactListeners$"+ta,c0="__reactHandles$"+ta,Xo="__reactResources$"+ta,Ye="__reactMarker$"+ta;function vu(n){delete n[Pn],delete n[In],delete n[mu],delete n[o0],delete n[c0]}function Ka(n){var t=n[Pn];if(t)return t;for(var a=n.parentNode;a;){if(t=a[Va]||a[Pn]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(n=id(n);n!==null;){if(a=n[Pn])return a;n=id(n)}return t}n=a,a=n.parentNode}return null}function Ja(n){if(n=n[Pn]||n[Va]){var t=n.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return n}return null}function Be(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(c(33))}function Pa(n){var t=n[Xo];return t||(t=n[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Bn(n){n[Ye]=!0}var Go=new Set,Qo={};function Ma(n,t){$a(n,t),$a(n+"Capture",t)}function $a(n,t){for(Qo[n]=t,n=0;n<t.length;n++)Go.add(t[n])}var s0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zo={},Lo={};function f0(n){return cu.call(Lo,n)?!0:cu.call(Zo,n)?!1:s0.test(n)?Lo[n]=!0:(Zo[n]=!0,!1)}function Gl(n,t,a){if(f0(t))if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+a)}}function Ql(n,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+a)}}function Ct(n,t,a,e){if(e===null)n.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(t,a,""+e)}}var pu,Vo;function Wa(n){if(pu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pu=t&&t[1]||"",Vo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pu+n+Vo}var gu=!1;function yu(n,t){if(!n||gu)return"";gu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(x){var y=x}Reflect.construct(n,[],_)}else{try{_.call()}catch(x){y=x}n.call(_.prototype)}}else{try{throw Error()}catch(x){y=x}(_=n())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(x){if(x&&y&&typeof x.stack=="string")return[x.stack,y.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=e.DetermineComponentFrameRoot(),r=i[0],o=i[1];if(r&&o){var d=r.split(`
`),p=o.split(`
`);for(l=e=0;e<d.length&&!d[e].includes("DetermineComponentFrameRoot");)e++;for(;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;if(e===d.length||l===p.length)for(e=d.length-1,l=p.length-1;1<=e&&0<=l&&d[e]!==p[l];)l--;for(;1<=e&&0<=l;e--,l--)if(d[e]!==p[l]){if(e!==1||l!==1)do if(e--,l--,0>l||d[e]!==p[l]){var O=`
`+d[e].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=e&&0<=l);break}}}finally{gu=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Wa(a):""}function d0(n){switch(n.tag){case 26:case 27:case 5:return Wa(n.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 15:return yu(n.type,!1);case 11:return yu(n.type.render,!1);case 1:return yu(n.type,!0);case 31:return Wa("Activity");default:return""}}function Ko(n){try{var t="";do t+=d0(n),n=n.return;while(n);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function mt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Jo(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function h0(n){var t=Jo(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),e=""+n[t];if(!n.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){e=""+r,i.call(this,r)}}),Object.defineProperty(n,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(r){e=""+r},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Zl(n){n._valueTracker||(n._valueTracker=h0(n))}function Po(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var a=t.getValue(),e="";return n&&(e=Jo(n)?n.checked?"true":"false":n.value),n=e,n!==a?(t.setValue(n),!0):!1}function Ll(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var b0=/[\n"\\]/g;function vt(n){return n.replace(b0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xu(n,t,a,e,l,i,r,o){n.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?n.type=r:n.removeAttribute("type"),t!=null?r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+mt(t)):n.value!==""+mt(t)&&(n.value=""+mt(t)):r!=="submit"&&r!=="reset"||n.removeAttribute("value"),t!=null?Su(n,r,mt(t)):a!=null?Su(n,r,mt(a)):e!=null&&n.removeAttribute("value"),l==null&&i!=null&&(n.defaultChecked=!!i),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+mt(o):n.removeAttribute("name")}function $o(n,t,a,e,l,i,r,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+mt(a):"",t=t!=null?""+mt(t):a,o||t===n.value||(n.value=t),n.defaultValue=t}e=e??l,e=typeof e!="function"&&typeof e!="symbol"&&!!e,n.checked=o?n.checked:!!e,n.defaultChecked=!!e,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.name=r)}function Su(n,t,a){t==="number"&&Ll(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Fa(n,t,a,e){if(n=n.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<n.length;a++)l=t.hasOwnProperty("$"+n[a].value),n[a].selected!==l&&(n[a].selected=l),l&&e&&(n[a].defaultSelected=!0)}else{for(a=""+mt(a),t=null,l=0;l<n.length;l++){if(n[l].value===a){n[l].selected=!0,e&&(n[l].defaultSelected=!0);return}t!==null||n[l].disabled||(t=n[l])}t!==null&&(t.selected=!0)}}function Wo(n,t,a){if(t!=null&&(t=""+mt(t),t!==n.value&&(n.value=t),a==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=a!=null?""+mt(a):""}function Fo(n,t,a,e){if(t==null){if(e!=null){if(a!=null)throw Error(c(92));if(Jn(e)){if(1<e.length)throw Error(c(93));e=e[0]}a=e}a==null&&(a=""),t=a}a=mt(t),n.defaultValue=a,e=n.textContent,e===a&&e!==""&&e!==null&&(n.value=e)}function Ia(n,t){if(t){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=t;return}}n.textContent=t}var m0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Io(n,t,a){var e=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":e?n.setProperty(t,a):typeof a!="number"||a===0||m0.has(t)?t==="float"?n.cssFloat=a:n[t]=(""+a).trim():n[t]=a+"px"}function nc(n,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(n=n.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="");for(var l in t)e=t[l],t.hasOwnProperty(l)&&a[l]!==e&&Io(n,l,e)}else for(var i in t)t.hasOwnProperty(i)&&Io(n,i,t[i])}function Ou(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var v0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(n){return p0.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Tu=null;function Eu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ne=null,te=null;function tc(n){var t=Ja(n);if(t&&(n=t.stateNode)){var a=n[In]||null;n:switch(n=t.stateNode,t.type){case"input":if(xu(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var e=a[t];if(e!==n&&e.form===n.form){var l=e[In]||null;if(!l)throw Error(c(90));xu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)e=a[t],e.form===n.form&&Po(e)}break n;case"textarea":Wo(n,a.value,a.defaultValue);break n;case"select":t=a.value,t!=null&&Fa(n,!!a.multiple,t,!1)}}}var Au=!1;function ac(n,t,a){if(Au)return n(t,a);Au=!0;try{var e=n(t);return e}finally{if(Au=!1,(ne!==null||te!==null)&&(Ri(),ne&&(t=ne,n=te,te=ne=null,tc(t),n)))for(t=0;t<n.length;t++)tc(n[t])}}function Xe(n,t){var a=n.stateNode;if(a===null)return null;var e=a[In]||null;if(e===null)return null;a=e[t];n:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(n=n.type,e=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!e;break n;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=!1;if(jt)try{var Ge={};Object.defineProperty(Ge,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Ge,Ge),window.removeEventListener("test",Ge,Ge)}catch{zu=!1}var aa=null,_u=null,Kl=null;function ec(){if(Kl)return Kl;var n,t=_u,a=t.length,e,l="value"in aa?aa.value:aa.textContent,i=l.length;for(n=0;n<a&&t[n]===l[n];n++);var r=a-n;for(e=1;e<=r&&t[a-e]===l[i-e];e++);return Kl=l.slice(n,1<e?1-e:void 0)}function Jl(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function Pl(){return!0}function lc(){return!1}function nt(n){function t(a,e,l,i,r){this._reactName=a,this._targetInst=l,this.type=e,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(a=n[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pl:lc,this.isPropagationStopped=lc,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=nt(Da),Qe=R({},Da,{view:0,detail:0}),g0=nt(Qe),Mu,Du,Ze,Wl=R({},Qe,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ze&&(Ze&&n.type==="mousemove"?(Mu=n.screenX-Ze.screenX,Du=n.screenY-Ze.screenY):Du=Mu=0,Ze=n),Mu)},movementY:function(n){return"movementY"in n?n.movementY:Du}}),ic=nt(Wl),y0=R({},Wl,{dataTransfer:0}),x0=nt(y0),S0=R({},Qe,{relatedTarget:0}),Nu=nt(S0),O0=R({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=nt(O0),E0=R({},Da,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),A0=nt(E0),z0=R({},Da,{data:0}),uc=nt(z0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=D0[n])?!!t[n]:!1}function Ru(){return N0}var R0=R({},Qe,{key:function(n){if(n.key){var t=_0[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Jl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(n){return n.type==="keypress"?Jl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),k0=nt(R0),U0=R({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=nt(U0),H0=R({},Qe,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),q0=nt(H0),C0=R({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=nt(C0),w0=R({},Wl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=nt(w0),B0=R({},Da,{newState:0,oldState:0}),X0=nt(B0),G0=[9,13,27,32],ku=jt&&"CompositionEvent"in window,Le=null;jt&&"documentMode"in document&&(Le=document.documentMode);var Q0=jt&&"TextEvent"in window&&!Le,oc=jt&&(!ku||Le&&8<Le&&11>=Le),cc=" ",sc=!1;function fc(n,t){switch(n){case"keyup":return G0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ae=!1;function Z0(n,t){switch(n){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(sc=!0,cc);case"textInput":return n=t.data,n===cc&&sc?null:n;default:return null}}function L0(n,t){if(ae)return n==="compositionend"||!ku&&fc(n,t)?(n=ec(),Kl=_u=aa=null,ae=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hc(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!V0[n.type]:t==="textarea"}function bc(n,t,a,e){ne?te?te.push(e):te=[e]:ne=e,t=ji(t,"onChange"),0<t.length&&(a=new $l("onChange","change",null,a,e),n.push({event:a,listeners:t}))}var Ve=null,Ke=null;function K0(n){Pf(n,0)}function Fl(n){var t=Be(n);if(Po(t))return n}function mc(n,t){if(n==="change")return t}var vc=!1;if(jt){var Uu;if(jt){var Hu="oninput"in document;if(!Hu){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),Hu=typeof pc.oninput=="function"}Uu=Hu}else Uu=!1;vc=Uu&&(!document.documentMode||9<document.documentMode)}function gc(){Ve&&(Ve.detachEvent("onpropertychange",yc),Ke=Ve=null)}function yc(n){if(n.propertyName==="value"&&Fl(Ke)){var t=[];bc(t,Ke,n,Eu(n)),ac(K0,t)}}function J0(n,t,a){n==="focusin"?(gc(),Ve=t,Ke=a,Ve.attachEvent("onpropertychange",yc)):n==="focusout"&&gc()}function P0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fl(Ke)}function $0(n,t){if(n==="click")return Fl(t)}function W0(n,t){if(n==="input"||n==="change")return Fl(t)}function F0(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var rt=typeof Object.is=="function"?Object.is:F0;function Je(n,t){if(rt(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var a=Object.keys(n),e=Object.keys(t);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var l=a[e];if(!cu.call(t,l)||!rt(n[l],t[l]))return!1}return!0}function xc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sc(n,t){var a=xc(n);n=0;for(var e;a;){if(a.nodeType===3){if(e=n+a.textContent.length,n<=t&&e>=t)return{node:a,offset:t-n};n=e}n:{for(;a;){if(a.nextSibling){a=a.nextSibling;break n}a=a.parentNode}a=void 0}a=xc(a)}}function Oc(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?Oc(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function Tc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=Ll(n.document);t instanceof n.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)n=t.contentWindow;else break;t=Ll(n.document)}return t}function qu(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var I0=jt&&"documentMode"in document&&11>=document.documentMode,ee=null,Cu=null,Pe=null,ju=!1;function Ec(n,t,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ju||ee==null||ee!==Ll(e)||(e=ee,"selectionStart"in e&&qu(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Pe&&Je(Pe,e)||(Pe=e,e=ji(Cu,"onSelect"),0<e.length&&(t=new $l("onSelect","select",null,t,a),n.push({event:t,listeners:e}),t.target=ee)))}function Na(n,t){var a={};return a[n.toLowerCase()]=t.toLowerCase(),a["Webkit"+n]="webkit"+t,a["Moz"+n]="moz"+t,a}var le={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},wu={},Ac={};jt&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete le.animationend.animation,delete le.animationiteration.animation,delete le.animationstart.animation),"TransitionEvent"in window||delete le.transitionend.transition);function Ra(n){if(wu[n])return wu[n];if(!le[n])return n;var t=le[n],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ac)return wu[n]=t[a];return n}var zc=Ra("animationend"),_c=Ra("animationiteration"),Mc=Ra("animationstart"),nh=Ra("transitionrun"),th=Ra("transitionstart"),ah=Ra("transitioncancel"),Dc=Ra("transitionend"),Nc=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function At(n,t){Nc.set(n,t),Ma(t,[n])}var Rc=new WeakMap;function pt(n,t){if(typeof n=="object"&&n!==null){var a=Rc.get(n);return a!==void 0?a:(t={value:n,source:t,stack:Ko(t)},Rc.set(n,t),t)}return{value:n,source:t,stack:Ko(t)}}var gt=[],ie=0,Bu=0;function Il(){for(var n=ie,t=Bu=ie=0;t<n;){var a=gt[t];gt[t++]=null;var e=gt[t];gt[t++]=null;var l=gt[t];gt[t++]=null;var i=gt[t];if(gt[t++]=null,e!==null&&l!==null){var r=e.pending;r===null?l.next=l:(l.next=r.next,r.next=l),e.pending=l}i!==0&&kc(a,l,i)}}function ni(n,t,a,e){gt[ie++]=n,gt[ie++]=t,gt[ie++]=a,gt[ie++]=e,Bu|=e,n.lanes|=e,n=n.alternate,n!==null&&(n.lanes|=e)}function Xu(n,t,a,e){return ni(n,t,a,e),ti(n)}function ue(n,t){return ni(n,null,null,t),ti(n)}function kc(n,t,a){n.lanes|=a;var e=n.alternate;e!==null&&(e.lanes|=a);for(var l=!1,i=n.return;i!==null;)i.childLanes|=a,e=i.alternate,e!==null&&(e.childLanes|=a),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(l=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,l&&t!==null&&(l=31-ut(a),n=i.hiddenUpdates,e=n[l],e===null?n[l]=[t]:e.push(t),t.lane=a|536870912),i):null}function ti(n){if(50<xl)throw xl=0,Kr=null,Error(c(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var re={};function eh(n,t,a,e){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(n,t,a,e){return new eh(n,t,a,e)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wt(n,t){var a=n.alternate;return a===null?(a=ot(n.tag,t,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=t,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,t=n.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Uc(n,t){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,t=a.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function ai(n,t,a,e,l,i){var r=0;if(e=n,typeof n=="function")Gu(n)&&(r=1);else if(typeof n=="string")r=ib(n,a,L.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case tn:return n=ot(31,a,t,l),n.elementType=tn,n.lanes=i,n;case Z:return ka(a.children,l,i,t);case k:r=8,l|=24;break;case K:return n=ot(12,a,t,l|2),n.elementType=K,n.lanes=i,n;case F:return n=ot(13,a,t,l),n.elementType=F,n.lanes=i,n;case Q:return n=ot(19,a,t,l),n.elementType=Q,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Yn:case dn:r=10;break n;case Mn:r=9;break n;case Tn:r=11;break n;case U:r=14;break n;case J:r=16,e=null;break n}r=29,a=Error(c(130,n===null?"null":typeof n,"")),e=null}return t=ot(r,a,t,l),t.elementType=n,t.type=e,t.lanes=i,t}function ka(n,t,a,e){return n=ot(7,n,e,t),n.lanes=a,n}function Qu(n,t,a){return n=ot(6,n,null,t),n.lanes=a,n}function Zu(n,t,a){return t=ot(4,n.children!==null?n.children:[],n.key,t),t.lanes=a,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var oe=[],ce=0,ei=null,li=0,yt=[],xt=0,Ua=null,Yt=1,Bt="";function Ha(n,t){oe[ce++]=li,oe[ce++]=ei,ei=n,li=t}function Hc(n,t,a){yt[xt++]=Yt,yt[xt++]=Bt,yt[xt++]=Ua,Ua=n;var e=Yt;n=Bt;var l=32-ut(e)-1;e&=~(1<<l),a+=1;var i=32-ut(t)+l;if(30<i){var r=l-l%5;i=(e&(1<<r)-1).toString(32),e>>=r,l-=r,Yt=1<<32-ut(t)+l|a<<l|e,Bt=i+n}else Yt=1<<i|a<<l|e,Bt=n}function Lu(n){n.return!==null&&(Ha(n,1),Hc(n,1,0))}function Vu(n){for(;n===ei;)ei=oe[--ce],oe[ce]=null,li=oe[--ce],oe[ce]=null;for(;n===Ua;)Ua=yt[--xt],yt[xt]=null,Bt=yt[--xt],yt[xt]=null,Yt=yt[--xt],yt[xt]=null}var Fn=null,Dn=null,hn=!1,qa=null,Rt=!1,Ku=Error(c(519));function Ca(n){var t=Error(c(418,""));throw Fe(pt(t,n)),Ku}function qc(n){var t=n.stateNode,a=n.type,e=n.memoizedProps;switch(t[Pn]=n,t[In]=e,a){case"dialog":un("cancel",t),un("close",t);break;case"iframe":case"object":case"embed":un("load",t);break;case"video":case"audio":for(a=0;a<Ol.length;a++)un(Ol[a],t);break;case"source":un("error",t);break;case"img":case"image":case"link":un("error",t),un("load",t);break;case"details":un("toggle",t);break;case"input":un("invalid",t),$o(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0),Zl(t);break;case"select":un("invalid",t);break;case"textarea":un("invalid",t),Fo(t,e.value,e.defaultValue,e.children),Zl(t)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||e.suppressHydrationWarning===!0||If(t.textContent,a)?(e.popover!=null&&(un("beforetoggle",t),un("toggle",t)),e.onScroll!=null&&un("scroll",t),e.onScrollEnd!=null&&un("scrollend",t),e.onClick!=null&&(t.onclick=wi),t=!0):t=!1,t||Ca(n)}function Cc(n){for(Fn=n.return;Fn;)switch(Fn.tag){case 5:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Fn=Fn.return}}function $e(n){if(n!==Fn)return!1;if(!hn)return Cc(n),hn=!0,!1;var t=n.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||co(n.type,n.memoizedProps)),a=!a),a&&Dn&&Ca(n),Cc(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(t===0){Dn=_t(n.nextSibling);break n}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;n=n.nextSibling}Dn=null}}else t===27?(t=Dn,ga(n.type)?(n=bo,bo=null,Dn=n):Dn=t):Dn=Fn?_t(n.stateNode.nextSibling):null;return!0}function We(){Dn=Fn=null,hn=!1}function jc(){var n=qa;return n!==null&&(et===null?et=n:et.push.apply(et,n),qa=null),n}function Fe(n){qa===null?qa=[n]:qa.push(n)}var Ju=M(null),ja=null,Xt=null;function ea(n,t,a){H(Ju,t._currentValue),t._currentValue=a}function Gt(n){n._currentValue=Ju.current,j(Ju)}function Pu(n,t,a){for(;n!==null;){var e=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),n===a)break;n=n.return}}function $u(n,t,a,e){var l=n.child;for(l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){var r=l.child;i=i.firstContext;n:for(;i!==null;){var o=i;i=l;for(var d=0;d<t.length;d++)if(o.context===t[d]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Pu(i.return,a,n),e||(r=null);break n}i=o.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(c(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Pu(r,a,n),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===n){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Ie(n,t,a,e){n=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var o=l.type;rt(l.pendingProps.value,r.value)||(n!==null?n.push(o):n=[o])}}else if(l===lt.current){if(r=l.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(n!==null?n.push(Ml):n=[Ml])}l=l.return}n!==null&&$u(t,n,a,e),t.flags|=262144}function ii(n){for(n=n.firstContext;n!==null;){if(!rt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function wa(n){ja=n,Xt=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function $n(n){return wc(ja,n)}function ui(n,t){return ja===null&&wa(n),wc(n,t)}function wc(n,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Xt===null){if(n===null)throw Error(c(308));Xt=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else Xt=Xt.next=t;return a}var lh=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(a,e){n.push(e)}};this.abort=function(){t.aborted=!0,n.forEach(function(a){return a()})}},ih=u.unstable_scheduleCallback,uh=u.unstable_NormalPriority,Cn={$$typeof:dn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new lh,data:new Map,refCount:0}}function nl(n){n.refCount--,n.refCount===0&&ih(uh,function(){n.controller.abort()})}var tl=null,Fu=0,se=0,fe=null;function rh(n,t){if(tl===null){var a=tl=[];Fu=0,se=no(),fe={status:"pending",value:void 0,then:function(e){a.push(e)}}}return Fu++,t.then(Yc,Yc),t}function Yc(){if(--Fu===0&&tl!==null){fe!==null&&(fe.status="fulfilled");var n=tl;tl=null,se=0,fe=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function oh(n,t){var a=[],e={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return n.then(function(){e.status="fulfilled",e.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(e.status="rejected",e.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),e}var Bc=A.S;A.S=function(n,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&rh(n,t),Bc!==null&&Bc(n,t)};var Ya=M(null);function Iu(){var n=Ya.current;return n!==null?n:On.pooledCache}function ri(n,t){t===null?H(Ya,Ya.current):H(Ya,t.pool)}function Xc(){var n=Iu();return n===null?null:{parent:Cn._currentValue,pool:n}}var al=Error(c(460)),Gc=Error(c(474)),oi=Error(c(542)),nr={then:function(){}};function Qc(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ci(){}function Zc(n,t,a){switch(a=n[a],a===void 0?n.push(t):a!==t&&(t.then(ci,ci),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Vc(n),n;default:if(typeof t.status=="string")t.then(ci,ci);else{if(n=On,n!==null&&100<n.shellSuspendCounter)throw Error(c(482));n=t,n.status="pending",n.then(function(e){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=e}},function(e){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Vc(n),n}throw el=t,al}}var el=null;function Lc(){if(el===null)throw Error(c(459));var n=el;return el=null,n}function Vc(n){if(n===al||n===oi)throw Error(c(483))}var la=!1;function tr(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ar(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ia(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ua(n,t,a){var e=n.updateQueue;if(e===null)return null;if(e=e.shared,(bn&2)!==0){var l=e.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t,t=ti(n),kc(n,null,a),t}return ni(n,e,t,a),ti(n)}function ll(n,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var e=t.lanes;e&=n.pendingLanes,a|=e,t.lanes=a,Yo(n,a)}}function er(n,t){var a=n.updateQueue,e=n.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:e.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:e.shared,callbacks:e.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=t:n.next=t,a.lastBaseUpdate=t}var lr=!1;function il(){if(lr){var n=fe;if(n!==null)throw n}}function ul(n,t,a,e){lr=!1;var l=n.updateQueue;la=!1;var i=l.firstBaseUpdate,r=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var d=o,p=d.next;d.next=null,r===null?i=p:r.next=p,r=d;var O=n.alternate;O!==null&&(O=O.updateQueue,o=O.lastBaseUpdate,o!==r&&(o===null?O.firstBaseUpdate=p:o.next=p,O.lastBaseUpdate=d))}if(i!==null){var _=l.baseState;r=0,O=p=d=null,o=i;do{var y=o.lane&-536870913,x=y!==o.lane;if(x?(cn&y)===y:(e&y)===y){y!==0&&y===se&&(lr=!0),O!==null&&(O=O.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});n:{var W=n,V=o;y=t;var yn=a;switch(V.tag){case 1:if(W=V.payload,typeof W=="function"){_=W.call(yn,_,y);break n}_=W;break n;case 3:W.flags=W.flags&-65537|128;case 0:if(W=V.payload,y=typeof W=="function"?W.call(yn,_,y):W,y==null)break n;_=R({},_,y);break n;case 2:la=!0}}y=o.callback,y!==null&&(n.flags|=64,x&&(n.flags|=8192),x=l.callbacks,x===null?l.callbacks=[y]:x.push(y))}else x={lane:y,tag:o.tag,payload:o.payload,callback:o.callback,next:null},O===null?(p=O=x,d=_):O=O.next=x,r|=y;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;x=o,o=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);O===null&&(d=_),l.baseState=d,l.firstBaseUpdate=p,l.lastBaseUpdate=O,i===null&&(l.shared.lanes=0),ba|=r,n.lanes=r,n.memoizedState=_}}function Kc(n,t){if(typeof n!="function")throw Error(c(191,n));n.call(t)}function Jc(n,t){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Kc(a[n],t)}var de=M(null),si=M(0);function Pc(n,t){n=Pt,H(si,n),H(de,t),Pt=n|t.baseLanes}function ir(){H(si,Pt),H(de,de.current)}function ur(){Pt=si.current,j(de),j(si)}var ra=0,an=null,pn=null,Hn=null,fi=!1,he=!1,Ba=!1,di=0,rl=0,be=null,ch=0;function Rn(){throw Error(c(321))}function rr(n,t){if(t===null)return!1;for(var a=0;a<t.length&&a<n.length;a++)if(!rt(n[a],t[a]))return!1;return!0}function or(n,t,a,e,l,i){return ra=i,an=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=n===null||n.memoizedState===null?ks:Us,Ba=!1,i=a(e,l),Ba=!1,he&&(i=Wc(t,a,e,l)),$c(n),i}function $c(n){A.H=gi;var t=pn!==null&&pn.next!==null;if(ra=0,Hn=pn=an=null,fi=!1,rl=0,be=null,t)throw Error(c(300));n===null||Xn||(n=n.dependencies,n!==null&&ii(n)&&(Xn=!0))}function Wc(n,t,a,e){an=n;var l=0;do{if(he&&(be=null),rl=0,he=!1,25<=l)throw Error(c(301));if(l+=1,Hn=pn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}A.H=vh,i=t(a,e)}while(he);return i}function sh(){var n=A.H,t=n.useState()[0];return t=typeof t.then=="function"?ol(t):t,n=n.useState()[0],(pn!==null?pn.memoizedState:null)!==n&&(an.flags|=1024),t}function cr(){var n=di!==0;return di=0,n}function sr(n,t,a){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~a}function fr(n){if(fi){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}fi=!1}ra=0,Hn=pn=an=null,he=!1,rl=di=0,be=null}function tt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Hn===null?an.memoizedState=Hn=n:Hn=Hn.next=n,Hn}function qn(){if(pn===null){var n=an.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var t=Hn===null?an.memoizedState:Hn.next;if(t!==null)Hn=t,pn=n;else{if(n===null)throw an.alternate===null?Error(c(467)):Error(c(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Hn===null?an.memoizedState=Hn=n:Hn=Hn.next=n}return Hn}function dr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(n){var t=rl;return rl+=1,be===null&&(be=[]),n=Zc(be,n,t),t=an,(Hn===null?t.memoizedState:Hn.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?ks:Us),n}function hi(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ol(n);if(n.$$typeof===dn)return $n(n)}throw Error(c(438,String(n)))}function hr(n){var t=null,a=an.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var e=an.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=dr(),an.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(n),e=0;e<n;e++)a[e]=Ft;return t.index++,a}function Qt(n,t){return typeof t=="function"?t(n):t}function bi(n){var t=qn();return br(t,pn,n)}function br(n,t,a){var e=n.queue;if(e===null)throw Error(c(311));e.lastRenderedReducer=a;var l=n.baseQueue,i=e.pending;if(i!==null){if(l!==null){var r=l.next;l.next=i.next,i.next=r}t.baseQueue=l=i,e.pending=null}if(i=n.baseState,l===null)n.memoizedState=i;else{t=l.next;var o=r=null,d=null,p=t,O=!1;do{var _=p.lane&-536870913;if(_!==p.lane?(cn&_)===_:(ra&_)===_){var y=p.revertLane;if(y===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),_===se&&(O=!0);else if((ra&y)===y){p=p.next,y===se&&(O=!0);continue}else _={lane:0,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},d===null?(o=d=_,r=i):d=d.next=_,an.lanes|=y,ba|=y;_=p.action,Ba&&a(i,_),i=p.hasEagerState?p.eagerState:a(i,_)}else y={lane:_,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},d===null?(o=d=y,r=i):d=d.next=y,an.lanes|=_,ba|=_;p=p.next}while(p!==null&&p!==t);if(d===null?r=i:d.next=o,!rt(i,n.memoizedState)&&(Xn=!0,O&&(a=fe,a!==null)))throw a;n.memoizedState=i,n.baseState=r,n.baseQueue=d,e.lastRenderedState=i}return l===null&&(e.lanes=0),[n.memoizedState,e.dispatch]}function mr(n){var t=qn(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var e=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var r=l=l.next;do i=n(i,r.action),r=r.next;while(r!==l);rt(i,t.memoizedState)||(Xn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,e]}function Fc(n,t,a){var e=an,l=qn(),i=hn;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var r=!rt((pn||l).memoizedState,a);r&&(l.memoizedState=a,Xn=!0),l=l.queue;var o=ts.bind(null,e,l,n);if(cl(2048,8,o,[n]),l.getSnapshot!==t||r||Hn!==null&&Hn.memoizedState.tag&1){if(e.flags|=2048,me(9,mi(),ns.bind(null,e,l,a,t),null),On===null)throw Error(c(349));i||(ra&124)!==0||Ic(e,t,a)}return a}function Ic(n,t,a){n.flags|=16384,n={getSnapshot:t,value:a},t=an.updateQueue,t===null?(t=dr(),an.updateQueue=t,t.stores=[n]):(a=t.stores,a===null?t.stores=[n]:a.push(n))}function ns(n,t,a,e){t.value=a,t.getSnapshot=e,as(t)&&es(n)}function ts(n,t,a){return a(function(){as(t)&&es(n)})}function as(n){var t=n.getSnapshot;n=n.value;try{var a=t();return!rt(n,a)}catch{return!0}}function es(n){var t=ue(n,2);t!==null&&ht(t,n,2)}function vr(n){var t=tt();if(typeof n=="function"){var a=n;if(n=a(),Ba){na(!0);try{a()}finally{na(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:n},t}function ls(n,t,a,e){return n.baseState=a,br(n,pn,typeof e=="function"?e:Qt)}function fh(n,t,a,e,l){if(pi(n))throw Error(c(485));if(n=t.action,n!==null){var i={payload:l,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};A.T!==null?a(!0):i.isTransition=!1,e(i),a=t.pending,a===null?(i.next=t.pending=i,is(t,i)):(i.next=a.next,t.pending=a.next=i)}}function is(n,t){var a=t.action,e=t.payload,l=n.state;if(t.isTransition){var i=A.T,r={};A.T=r;try{var o=a(l,e),d=A.S;d!==null&&d(r,o),us(n,t,o)}catch(p){pr(n,t,p)}finally{A.T=i}}else try{i=a(l,e),us(n,t,i)}catch(p){pr(n,t,p)}}function us(n,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){rs(n,t,e)},function(e){return pr(n,t,e)}):rs(n,t,a)}function rs(n,t,a){t.status="fulfilled",t.value=a,os(t),n.state=a,t=n.pending,t!==null&&(a=t.next,a===t?n.pending=null:(a=a.next,t.next=a,is(n,a)))}function pr(n,t,a){var e=n.pending;if(n.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=a,os(t),t=t.next;while(t!==e)}n.action=null}function os(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function cs(n,t){return t}function ss(n,t){if(hn){var a=On.formState;if(a!==null){n:{var e=an;if(hn){if(Dn){t:{for(var l=Dn,i=Rt;l.nodeType!==8;){if(!i){l=null;break t}if(l=_t(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Dn=_t(l.nextSibling),e=l.data==="F!";break n}}Ca(e)}e=!1}e&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},a.queue=e,a=Ds.bind(null,an,e),e.dispatch=a,e=vr(!1),i=Or.bind(null,an,!1,e.queue),e=tt(),l={state:t,dispatch:null,action:n,pending:null},e.queue=l,a=fh.bind(null,an,l,i,a),l.dispatch=a,e.memoizedState=n,[t,a,!1]}function fs(n){var t=qn();return ds(t,pn,n)}function ds(n,t,a){if(t=br(n,t,cs)[0],n=bi(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=ol(t)}catch(r){throw r===al?oi:r}else e=t;t=qn();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(an.flags|=2048,me(9,mi(),dh.bind(null,l,a),null)),[e,i,n]}function dh(n,t){n.action=t}function hs(n){var t=qn(),a=pn;if(a!==null)return ds(t,a,n);qn(),t=t.memoizedState,a=qn();var e=a.queue.dispatch;return a.memoizedState=n,[t,e,!1]}function me(n,t,a,e){return n={tag:n,create:a,deps:e,inst:t,next:null},t=an.updateQueue,t===null&&(t=dr(),an.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=n.next=n:(e=a.next,a.next=n,n.next=e,t.lastEffect=n),n}function mi(){return{destroy:void 0,resource:void 0}}function bs(){return qn().memoizedState}function vi(n,t,a,e){var l=tt();e=e===void 0?null:e,an.flags|=n,l.memoizedState=me(1|t,mi(),a,e)}function cl(n,t,a,e){var l=qn();e=e===void 0?null:e;var i=l.memoizedState.inst;pn!==null&&e!==null&&rr(e,pn.memoizedState.deps)?l.memoizedState=me(t,i,a,e):(an.flags|=n,l.memoizedState=me(1|t,i,a,e))}function ms(n,t){vi(8390656,8,n,t)}function vs(n,t){cl(2048,8,n,t)}function ps(n,t){return cl(4,2,n,t)}function gs(n,t){return cl(4,4,n,t)}function ys(n,t){if(typeof t=="function"){n=n();var a=t(n);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function xs(n,t,a){a=a!=null?a.concat([n]):null,cl(4,4,ys.bind(null,t,n),a)}function gr(){}function Ss(n,t){var a=qn();t=t===void 0?null:t;var e=a.memoizedState;return t!==null&&rr(t,e[1])?e[0]:(a.memoizedState=[n,t],n)}function Os(n,t){var a=qn();t=t===void 0?null:t;var e=a.memoizedState;if(t!==null&&rr(t,e[1]))return e[0];if(e=n(),Ba){na(!0);try{n()}finally{na(!1)}}return a.memoizedState=[e,t],e}function yr(n,t,a){return a===void 0||(ra&1073741824)!==0?n.memoizedState=t:(n.memoizedState=a,n=zf(),an.lanes|=n,ba|=n,a)}function Ts(n,t,a,e){return rt(a,t)?a:de.current!==null?(n=yr(n,a,e),rt(n,t)||(Xn=!0),n):(ra&42)===0?(Xn=!0,n.memoizedState=a):(n=zf(),an.lanes|=n,ba|=n,t)}function Es(n,t,a,e,l){var i=q.p;q.p=i!==0&&8>i?i:8;var r=A.T,o={};A.T=o,Or(n,!1,t,a);try{var d=l(),p=A.S;if(p!==null&&p(o,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var O=oh(d,e);sl(n,t,O,dt(n))}else sl(n,t,e,dt(n))}catch(_){sl(n,t,{then:function(){},status:"rejected",reason:_},dt())}finally{q.p=i,A.T=r}}function hh(){}function xr(n,t,a,e){if(n.tag!==5)throw Error(c(476));var l=As(n).queue;Es(n,l,t,$,a===null?hh:function(){return zs(n),a(e)})}function As(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:a},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function zs(n){var t=As(n).next.queue;sl(n,t,{},dt())}function Sr(){return $n(Ml)}function _s(){return qn().memoizedState}function Ms(){return qn().memoizedState}function bh(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var a=dt();n=ia(a);var e=ua(t,n,a);e!==null&&(ht(e,t,a),ll(e,t,a)),t={cache:Wu()},n.payload=t;return}t=t.return}}function mh(n,t,a){var e=dt();a={lane:e,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pi(n)?Ns(t,a):(a=Xu(n,t,a,e),a!==null&&(ht(a,n,e),Rs(a,t,e)))}function Ds(n,t,a){var e=dt();sl(n,t,a,e)}function sl(n,t,a,e){var l={lane:e,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pi(n))Ns(t,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,o=i(r,a);if(l.hasEagerState=!0,l.eagerState=o,rt(o,r))return ni(n,t,l,0),On===null&&Il(),!1}catch{}finally{}if(a=Xu(n,t,l,e),a!==null)return ht(a,n,e),Rs(a,t,e),!0}return!1}function Or(n,t,a,e){if(e={lane:2,revertLane:no(),action:e,hasEagerState:!1,eagerState:null,next:null},pi(n)){if(t)throw Error(c(479))}else t=Xu(n,a,e,2),t!==null&&ht(t,n,2)}function pi(n){var t=n.alternate;return n===an||t!==null&&t===an}function Ns(n,t){he=fi=!0;var a=n.pending;a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t}function Rs(n,t,a){if((a&4194048)!==0){var e=t.lanes;e&=n.pendingLanes,a|=e,t.lanes=a,Yo(n,a)}}var gi={readContext:$n,use:hi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useLayoutEffect:Rn,useInsertionEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useSyncExternalStore:Rn,useId:Rn,useHostTransitionStatus:Rn,useFormState:Rn,useActionState:Rn,useOptimistic:Rn,useMemoCache:Rn,useCacheRefresh:Rn},ks={readContext:$n,use:hi,useCallback:function(n,t){return tt().memoizedState=[n,t===void 0?null:t],n},useContext:$n,useEffect:ms,useImperativeHandle:function(n,t,a){a=a!=null?a.concat([n]):null,vi(4194308,4,ys.bind(null,t,n),a)},useLayoutEffect:function(n,t){return vi(4194308,4,n,t)},useInsertionEffect:function(n,t){vi(4,2,n,t)},useMemo:function(n,t){var a=tt();t=t===void 0?null:t;var e=n();if(Ba){na(!0);try{n()}finally{na(!1)}}return a.memoizedState=[e,t],e},useReducer:function(n,t,a){var e=tt();if(a!==void 0){var l=a(t);if(Ba){na(!0);try{a(t)}finally{na(!1)}}}else l=t;return e.memoizedState=e.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},e.queue=n,n=n.dispatch=mh.bind(null,an,n),[e.memoizedState,n]},useRef:function(n){var t=tt();return n={current:n},t.memoizedState=n},useState:function(n){n=vr(n);var t=n.queue,a=Ds.bind(null,an,t);return t.dispatch=a,[n.memoizedState,a]},useDebugValue:gr,useDeferredValue:function(n,t){var a=tt();return yr(a,n,t)},useTransition:function(){var n=vr(!1);return n=Es.bind(null,an,n.queue,!0,!1),tt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,a){var e=an,l=tt();if(hn){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),On===null)throw Error(c(349));(cn&124)!==0||Ic(e,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,ms(ts.bind(null,e,i,n),[n]),e.flags|=2048,me(9,mi(),ns.bind(null,e,i,a,t),null),a},useId:function(){var n=tt(),t=On.identifierPrefix;if(hn){var a=Bt,e=Yt;a=(e&~(1<<32-ut(e)-1)).toString(32)+a,t="«"+t+"R"+a,a=di++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=ch++,t="«"+t+"r"+a.toString(32)+"»";return n.memoizedState=t},useHostTransitionStatus:Sr,useFormState:ss,useActionState:ss,useOptimistic:function(n){var t=tt();t.memoizedState=t.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Or.bind(null,an,!0,a),a.dispatch=t,[n,t]},useMemoCache:hr,useCacheRefresh:function(){return tt().memoizedState=bh.bind(null,an)}},Us={readContext:$n,use:hi,useCallback:Ss,useContext:$n,useEffect:vs,useImperativeHandle:xs,useInsertionEffect:ps,useLayoutEffect:gs,useMemo:Os,useReducer:bi,useRef:bs,useState:function(){return bi(Qt)},useDebugValue:gr,useDeferredValue:function(n,t){var a=qn();return Ts(a,pn.memoizedState,n,t)},useTransition:function(){var n=bi(Qt)[0],t=qn().memoizedState;return[typeof n=="boolean"?n:ol(n),t]},useSyncExternalStore:Fc,useId:_s,useHostTransitionStatus:Sr,useFormState:fs,useActionState:fs,useOptimistic:function(n,t){var a=qn();return ls(a,pn,n,t)},useMemoCache:hr,useCacheRefresh:Ms},vh={readContext:$n,use:hi,useCallback:Ss,useContext:$n,useEffect:vs,useImperativeHandle:xs,useInsertionEffect:ps,useLayoutEffect:gs,useMemo:Os,useReducer:mr,useRef:bs,useState:function(){return mr(Qt)},useDebugValue:gr,useDeferredValue:function(n,t){var a=qn();return pn===null?yr(a,n,t):Ts(a,pn.memoizedState,n,t)},useTransition:function(){var n=mr(Qt)[0],t=qn().memoizedState;return[typeof n=="boolean"?n:ol(n),t]},useSyncExternalStore:Fc,useId:_s,useHostTransitionStatus:Sr,useFormState:hs,useActionState:hs,useOptimistic:function(n,t){var a=qn();return pn!==null?ls(a,pn,n,t):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:hr,useCacheRefresh:Ms},ve=null,fl=0;function yi(n){var t=fl;return fl+=1,ve===null&&(ve=[]),Zc(ve,n,t)}function dl(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function xi(n,t){throw t.$$typeof===Y?Error(c(525)):(n=Object.prototype.toString.call(t),Error(c(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function Hs(n){var t=n._init;return t(n._payload)}function qs(n){function t(m,b){if(n){var v=m.deletions;v===null?(m.deletions=[b],m.flags|=16):v.push(b)}}function a(m,b){if(!n)return null;for(;b!==null;)t(m,b),b=b.sibling;return null}function e(m){for(var b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function l(m,b){return m=wt(m,b),m.index=0,m.sibling=null,m}function i(m,b,v){return m.index=v,n?(v=m.alternate,v!==null?(v=v.index,v<b?(m.flags|=67108866,b):v):(m.flags|=67108866,b)):(m.flags|=1048576,b)}function r(m){return n&&m.alternate===null&&(m.flags|=67108866),m}function o(m,b,v,z){return b===null||b.tag!==6?(b=Qu(v,m.mode,z),b.return=m,b):(b=l(b,v),b.return=m,b)}function d(m,b,v,z){var w=v.type;return w===Z?O(m,b,v.props.children,z,v.key):b!==null&&(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===J&&Hs(w)===b.type)?(b=l(b,v.props),dl(b,v),b.return=m,b):(b=ai(v.type,v.key,v.props,null,m.mode,z),dl(b,v),b.return=m,b)}function p(m,b,v,z){return b===null||b.tag!==4||b.stateNode.containerInfo!==v.containerInfo||b.stateNode.implementation!==v.implementation?(b=Zu(v,m.mode,z),b.return=m,b):(b=l(b,v.children||[]),b.return=m,b)}function O(m,b,v,z,w){return b===null||b.tag!==7?(b=ka(v,m.mode,z,w),b.return=m,b):(b=l(b,v),b.return=m,b)}function _(m,b,v){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Qu(""+b,m.mode,v),b.return=m,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case C:return v=ai(b.type,b.key,b.props,null,m.mode,v),dl(v,b),v.return=m,v;case on:return b=Zu(b,m.mode,v),b.return=m,b;case J:var z=b._init;return b=z(b._payload),_(m,b,v)}if(Jn(b)||Kn(b))return b=ka(b,m.mode,v,null),b.return=m,b;if(typeof b.then=="function")return _(m,yi(b),v);if(b.$$typeof===dn)return _(m,ui(m,b),v);xi(m,b)}return null}function y(m,b,v,z){var w=b!==null?b.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return w!==null?null:o(m,b,""+v,z);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case C:return v.key===w?d(m,b,v,z):null;case on:return v.key===w?p(m,b,v,z):null;case J:return w=v._init,v=w(v._payload),y(m,b,v,z)}if(Jn(v)||Kn(v))return w!==null?null:O(m,b,v,z,null);if(typeof v.then=="function")return y(m,b,yi(v),z);if(v.$$typeof===dn)return y(m,b,ui(m,v),z);xi(m,v)}return null}function x(m,b,v,z,w){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return m=m.get(v)||null,o(b,m,""+z,w);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case C:return m=m.get(z.key===null?v:z.key)||null,d(b,m,z,w);case on:return m=m.get(z.key===null?v:z.key)||null,p(b,m,z,w);case J:var en=z._init;return z=en(z._payload),x(m,b,v,z,w)}if(Jn(z)||Kn(z))return m=m.get(v)||null,O(b,m,z,w,null);if(typeof z.then=="function")return x(m,b,v,yi(z),w);if(z.$$typeof===dn)return x(m,b,v,ui(b,z),w);xi(b,z)}return null}function W(m,b,v,z){for(var w=null,en=null,B=b,P=b=0,Qn=null;B!==null&&P<v.length;P++){B.index>P?(Qn=B,B=null):Qn=B.sibling;var fn=y(m,B,v[P],z);if(fn===null){B===null&&(B=Qn);break}n&&B&&fn.alternate===null&&t(m,B),b=i(fn,b,P),en===null?w=fn:en.sibling=fn,en=fn,B=Qn}if(P===v.length)return a(m,B),hn&&Ha(m,P),w;if(B===null){for(;P<v.length;P++)B=_(m,v[P],z),B!==null&&(b=i(B,b,P),en===null?w=B:en.sibling=B,en=B);return hn&&Ha(m,P),w}for(B=e(B);P<v.length;P++)Qn=x(B,m,P,v[P],z),Qn!==null&&(n&&Qn.alternate!==null&&B.delete(Qn.key===null?P:Qn.key),b=i(Qn,b,P),en===null?w=Qn:en.sibling=Qn,en=Qn);return n&&B.forEach(function(Ta){return t(m,Ta)}),hn&&Ha(m,P),w}function V(m,b,v,z){if(v==null)throw Error(c(151));for(var w=null,en=null,B=b,P=b=0,Qn=null,fn=v.next();B!==null&&!fn.done;P++,fn=v.next()){B.index>P?(Qn=B,B=null):Qn=B.sibling;var Ta=y(m,B,fn.value,z);if(Ta===null){B===null&&(B=Qn);break}n&&B&&Ta.alternate===null&&t(m,B),b=i(Ta,b,P),en===null?w=Ta:en.sibling=Ta,en=Ta,B=Qn}if(fn.done)return a(m,B),hn&&Ha(m,P),w;if(B===null){for(;!fn.done;P++,fn=v.next())fn=_(m,fn.value,z),fn!==null&&(b=i(fn,b,P),en===null?w=fn:en.sibling=fn,en=fn);return hn&&Ha(m,P),w}for(B=e(B);!fn.done;P++,fn=v.next())fn=x(B,m,P,fn.value,z),fn!==null&&(n&&fn.alternate!==null&&B.delete(fn.key===null?P:fn.key),b=i(fn,b,P),en===null?w=fn:en.sibling=fn,en=fn);return n&&B.forEach(function(pb){return t(m,pb)}),hn&&Ha(m,P),w}function yn(m,b,v,z){if(typeof v=="object"&&v!==null&&v.type===Z&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case C:n:{for(var w=v.key;b!==null;){if(b.key===w){if(w=v.type,w===Z){if(b.tag===7){a(m,b.sibling),z=l(b,v.props.children),z.return=m,m=z;break n}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===J&&Hs(w)===b.type){a(m,b.sibling),z=l(b,v.props),dl(z,v),z.return=m,m=z;break n}a(m,b);break}else t(m,b);b=b.sibling}v.type===Z?(z=ka(v.props.children,m.mode,z,v.key),z.return=m,m=z):(z=ai(v.type,v.key,v.props,null,m.mode,z),dl(z,v),z.return=m,m=z)}return r(m);case on:n:{for(w=v.key;b!==null;){if(b.key===w)if(b.tag===4&&b.stateNode.containerInfo===v.containerInfo&&b.stateNode.implementation===v.implementation){a(m,b.sibling),z=l(b,v.children||[]),z.return=m,m=z;break n}else{a(m,b);break}else t(m,b);b=b.sibling}z=Zu(v,m.mode,z),z.return=m,m=z}return r(m);case J:return w=v._init,v=w(v._payload),yn(m,b,v,z)}if(Jn(v))return W(m,b,v,z);if(Kn(v)){if(w=Kn(v),typeof w!="function")throw Error(c(150));return v=w.call(v),V(m,b,v,z)}if(typeof v.then=="function")return yn(m,b,yi(v),z);if(v.$$typeof===dn)return yn(m,b,ui(m,v),z);xi(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,b!==null&&b.tag===6?(a(m,b.sibling),z=l(b,v),z.return=m,m=z):(a(m,b),z=Qu(v,m.mode,z),z.return=m,m=z),r(m)):a(m,b)}return function(m,b,v,z){try{fl=0;var w=yn(m,b,v,z);return ve=null,w}catch(B){if(B===al||B===oi)throw B;var en=ot(29,B,null,m.mode);return en.lanes=z,en.return=m,en}finally{}}}var pe=qs(!0),Cs=qs(!1),St=M(null),kt=null;function oa(n){var t=n.alternate;H(jn,jn.current&1),H(St,n),kt===null&&(t===null||de.current!==null||t.memoizedState!==null)&&(kt=n)}function js(n){if(n.tag===22){if(H(jn,jn.current),H(St,n),kt===null){var t=n.alternate;t!==null&&t.memoizedState!==null&&(kt=n)}}else ca()}function ca(){H(jn,jn.current),H(St,St.current)}function Zt(n){j(St),kt===n&&(kt=null),j(jn)}var jn=M(0);function Si(n){for(var t=n;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ho(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Tr(n,t,a,e){t=n.memoizedState,a=a(e,t),a=a==null?t:R({},t,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Er={enqueueSetState:function(n,t,a){n=n._reactInternals;var e=dt(),l=ia(e);l.payload=t,a!=null&&(l.callback=a),t=ua(n,l,e),t!==null&&(ht(t,n,e),ll(t,n,e))},enqueueReplaceState:function(n,t,a){n=n._reactInternals;var e=dt(),l=ia(e);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ua(n,l,e),t!==null&&(ht(t,n,e),ll(t,n,e))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var a=dt(),e=ia(a);e.tag=2,t!=null&&(e.callback=t),t=ua(n,e,a),t!==null&&(ht(t,n,a),ll(t,n,a))}};function ws(n,t,a,e,l,i,r){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(e,i,r):t.prototype&&t.prototype.isPureReactComponent?!Je(a,e)||!Je(l,i):!0}function Ys(n,t,a,e){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,e),t.state!==n&&Er.enqueueReplaceState(t,t.state,null)}function Xa(n,t){var a=t;if("ref"in t){a={};for(var e in t)e!=="ref"&&(a[e]=t[e])}if(n=n.defaultProps){a===t&&(a=R({},a));for(var l in n)a[l]===void 0&&(a[l]=n[l])}return a}var Oi=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Bs(n){Oi(n)}function Xs(n){console.error(n)}function Gs(n){Oi(n)}function Ti(n,t){try{var a=n.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(n,t,a){try{var e=n.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ar(n,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Ti(n,t)},a}function Zs(n){return n=ia(n),n.tag=3,n}function Ls(n,t,a,e){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=e.value;n.payload=function(){return l(i)},n.callback=function(){Qs(t,a,e)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Qs(t,a,e),typeof l!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})})}function ph(n,t,a,e,l){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=a.alternate,t!==null&&Ie(t,a,l,!0),a=St.current,a!==null){switch(a.tag){case 13:return kt===null?Pr():a.alternate===null&&Nn===0&&(Nn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,e===nr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([e]):t.add(e),Wr(n,e,l)),!1;case 22:return a.flags|=65536,e===nr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([e]):a.add(e)),Wr(n,e,l)),!1}throw Error(c(435,a.tag))}return Wr(n,e,l),Pr(),!1}if(hn)return t=St.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,e!==Ku&&(n=Error(c(422),{cause:e}),Fe(pt(n,a)))):(e!==Ku&&(t=Error(c(423),{cause:e}),Fe(pt(t,a))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,e=pt(e,a),l=Ar(n.stateNode,e,l),er(n,l),Nn!==4&&(Nn=2)),!1;var i=Error(c(520),{cause:e});if(i=pt(i,a),yl===null?yl=[i]:yl.push(i),Nn!==4&&(Nn=2),t===null)return!0;e=pt(e,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,n=l&-l,a.lanes|=n,n=Ar(a.stateNode,e,n),er(a,n),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Zs(l),Ls(l,n,a,e),er(a,l),!1}a=a.return}while(a!==null);return!1}var Vs=Error(c(461)),Xn=!1;function Zn(n,t,a,e){t.child=n===null?Cs(t,null,a,e):pe(t,n.child,a,e)}function Ks(n,t,a,e,l){a=a.render;var i=t.ref;if("ref"in e){var r={};for(var o in e)o!=="ref"&&(r[o]=e[o])}else r=e;return wa(t),e=or(n,t,a,r,i,l),o=cr(),n!==null&&!Xn?(sr(n,t,l),Lt(n,t,l)):(hn&&o&&Lu(t),t.flags|=1,Zn(n,t,e,l),t.child)}function Js(n,t,a,e,l){if(n===null){var i=a.type;return typeof i=="function"&&!Gu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Ps(n,t,i,e,l)):(n=ai(a.type,null,e,t,t.mode,l),n.ref=t.ref,n.return=t,t.child=n)}if(i=n.child,!Ur(n,l)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:Je,a(r,e)&&n.ref===t.ref)return Lt(n,t,l)}return t.flags|=1,n=wt(i,e),n.ref=t.ref,n.return=t,t.child=n}function Ps(n,t,a,e,l){if(n!==null){var i=n.memoizedProps;if(Je(i,e)&&n.ref===t.ref)if(Xn=!1,t.pendingProps=e=i,Ur(n,l))(n.flags&131072)!==0&&(Xn=!0);else return t.lanes=n.lanes,Lt(n,t,l)}return zr(n,t,a,e,l)}function $s(n,t,a){var e=t.pendingProps,l=e.children,i=n!==null?n.memoizedState:null;if(e.mode==="hidden"){if((t.flags&128)!==0){if(e=i!==null?i.baseLanes|a:a,n!==null){for(l=t.child=n.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;t.childLanes=i&~e}else t.childLanes=0,t.child=null;return Ws(n,t,e,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&ri(t,i!==null?i.cachePool:null),i!==null?Pc(t,i):ir(),js(t);else return t.lanes=t.childLanes=536870912,Ws(n,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ri(t,i.cachePool),Pc(t,i),ca(),t.memoizedState=null):(n!==null&&ri(t,null),ir(),ca());return Zn(n,t,l,a),t.child}function Ws(n,t,a,e){var l=Iu();return l=l===null?null:{parent:Cn._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},n!==null&&ri(t,null),ir(),js(t),n!==null&&Ie(n,t,e,!0),null}function Ei(n,t){var a=t.ref;if(a===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(n===null||n.ref!==a)&&(t.flags|=4194816)}}function zr(n,t,a,e,l){return wa(t),a=or(n,t,a,e,void 0,l),e=cr(),n!==null&&!Xn?(sr(n,t,l),Lt(n,t,l)):(hn&&e&&Lu(t),t.flags|=1,Zn(n,t,a,l),t.child)}function Fs(n,t,a,e,l,i){return wa(t),t.updateQueue=null,a=Wc(t,e,a,l),$c(n),e=cr(),n!==null&&!Xn?(sr(n,t,i),Lt(n,t,i)):(hn&&e&&Lu(t),t.flags|=1,Zn(n,t,a,i),t.child)}function Is(n,t,a,e,l){if(wa(t),t.stateNode===null){var i=re,r=a.contextType;typeof r=="object"&&r!==null&&(i=$n(r)),i=new a(e,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Er,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=e,i.state=t.memoizedState,i.refs={},tr(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?$n(r):re,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Tr(t,a,r,e),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Er.enqueueReplaceState(i,i.state,null),ul(t,e,i,l),il(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(n===null){i=t.stateNode;var o=t.memoizedProps,d=Xa(a,o);i.props=d;var p=i.context,O=a.contextType;r=re,typeof O=="object"&&O!==null&&(r=$n(O));var _=a.getDerivedStateFromProps;O=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||p!==r)&&Ys(t,i,e,r),la=!1;var y=t.memoizedState;i.state=y,ul(t,e,i,l),il(),p=t.memoizedState,o||y!==p||la?(typeof _=="function"&&(Tr(t,a,_,e),p=t.memoizedState),(d=la||ws(t,a,d,e,y,p,r))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=p),i.props=e,i.state=p,i.context=r,e=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{i=t.stateNode,ar(n,t),r=t.memoizedProps,O=Xa(a,r),i.props=O,_=t.pendingProps,y=i.context,p=a.contextType,d=re,typeof p=="object"&&p!==null&&(d=$n(p)),o=a.getDerivedStateFromProps,(p=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==_||y!==d)&&Ys(t,i,e,d),la=!1,y=t.memoizedState,i.state=y,ul(t,e,i,l),il();var x=t.memoizedState;r!==_||y!==x||la||n!==null&&n.dependencies!==null&&ii(n.dependencies)?(typeof o=="function"&&(Tr(t,a,o,e),x=t.memoizedState),(O=la||ws(t,a,O,e,y,x,d)||n!==null&&n.dependencies!==null&&ii(n.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,x,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,x,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===n.memoizedProps&&y===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&y===n.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=x),i.props=e,i.state=x,i.context=d,e=O):(typeof i.componentDidUpdate!="function"||r===n.memoizedProps&&y===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&y===n.memoizedState||(t.flags|=1024),e=!1)}return i=e,Ei(n,t),e=(t.flags&128)!==0,i||e?(i=t.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,n!==null&&e?(t.child=pe(t,n.child,null,l),t.child=pe(t,null,a,l)):Zn(n,t,a,l),t.memoizedState=i.state,n=t.child):n=Lt(n,t,l),n}function nf(n,t,a,e){return We(),t.flags|=256,Zn(n,t,a,e),t.child}var _r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mr(n){return{baseLanes:n,cachePool:Xc()}}function Dr(n,t,a){return n=n!==null?n.childLanes&~a:0,t&&(n|=Ot),n}function tf(n,t,a){var e=t.pendingProps,l=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=n!==null&&n.memoizedState===null?!1:(jn.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,n===null){if(hn){if(l?oa(t):ca(),hn){var o=Dn,d;if(d=o){n:{for(d=o,o=Rt;d.nodeType!==8;){if(!o){o=null;break n}if(d=_t(d.nextSibling),d===null){o=null;break n}}o=d}o!==null?(t.memoizedState={dehydrated:o,treeContext:Ua!==null?{id:Yt,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},d=ot(18,null,null,0),d.stateNode=o,d.return=t,t.child=d,Fn=t,Dn=null,d=!0):d=!1}d||Ca(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return ho(o)?t.lanes=32:t.lanes=536870912,null;Zt(t)}return o=e.children,e=e.fallback,l?(ca(),l=t.mode,o=Ai({mode:"hidden",children:o},l),e=ka(e,l,a,null),o.return=t,e.return=t,o.sibling=e,t.child=o,l=t.child,l.memoizedState=Mr(a),l.childLanes=Dr(n,r,a),t.memoizedState=_r,e):(oa(t),Nr(t,o))}if(d=n.memoizedState,d!==null&&(o=d.dehydrated,o!==null)){if(i)t.flags&256?(oa(t),t.flags&=-257,t=Rr(n,t,a)):t.memoizedState!==null?(ca(),t.child=n.child,t.flags|=128,t=null):(ca(),l=e.fallback,o=t.mode,e=Ai({mode:"visible",children:e.children},o),l=ka(l,o,a,null),l.flags|=2,e.return=t,l.return=t,e.sibling=l,t.child=e,pe(t,n.child,null,a),e=t.child,e.memoizedState=Mr(a),e.childLanes=Dr(n,r,a),t.memoizedState=_r,t=l);else if(oa(t),ho(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var p=r.dgst;r=p,e=Error(c(419)),e.stack="",e.digest=r,Fe({value:e,source:null,stack:null}),t=Rr(n,t,a)}else if(Xn||Ie(n,t,a,!1),r=(a&n.childLanes)!==0,Xn||r){if(r=On,r!==null&&(e=a&-a,e=(e&42)!==0?1:hu(e),e=(e&(r.suspendedLanes|a))!==0?0:e,e!==0&&e!==d.retryLane))throw d.retryLane=e,ue(n,e),ht(r,n,e),Vs;o.data==="$?"||Pr(),t=Rr(n,t,a)}else o.data==="$?"?(t.flags|=192,t.child=n.child,t=null):(n=d.treeContext,Dn=_t(o.nextSibling),Fn=t,hn=!0,qa=null,Rt=!1,n!==null&&(yt[xt++]=Yt,yt[xt++]=Bt,yt[xt++]=Ua,Yt=n.id,Bt=n.overflow,Ua=t),t=Nr(t,e.children),t.flags|=4096);return t}return l?(ca(),l=e.fallback,o=t.mode,d=n.child,p=d.sibling,e=wt(d,{mode:"hidden",children:e.children}),e.subtreeFlags=d.subtreeFlags&65011712,p!==null?l=wt(p,l):(l=ka(l,o,a,null),l.flags|=2),l.return=t,e.return=t,e.sibling=l,t.child=e,e=l,l=t.child,o=n.child.memoizedState,o===null?o=Mr(a):(d=o.cachePool,d!==null?(p=Cn._currentValue,d=d.parent!==p?{parent:p,pool:p}:d):d=Xc(),o={baseLanes:o.baseLanes|a,cachePool:d}),l.memoizedState=o,l.childLanes=Dr(n,r,a),t.memoizedState=_r,e):(oa(t),a=n.child,n=a.sibling,a=wt(a,{mode:"visible",children:e.children}),a.return=t,a.sibling=null,n!==null&&(r=t.deletions,r===null?(t.deletions=[n],t.flags|=16):r.push(n)),t.child=a,t.memoizedState=null,a)}function Nr(n,t){return t=Ai({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function Ai(n,t){return n=ot(22,n,null,t),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Rr(n,t,a){return pe(t,n.child,null,a),n=Nr(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function af(n,t,a){n.lanes|=t;var e=n.alternate;e!==null&&(e.lanes|=t),Pu(n.return,t,a)}function kr(n,t,a,e,l){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=e,i.tail=a,i.tailMode=l)}function ef(n,t,a){var e=t.pendingProps,l=e.revealOrder,i=e.tail;if(Zn(n,t,e.children,a),e=jn.current,(e&2)!==0)e=e&1|2,t.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&af(n,a,t);else if(n.tag===19)af(n,a,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break n;for(;n.sibling===null;){if(n.return===null||n.return===t)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}e&=1}switch(H(jn,e),l){case"forwards":for(a=t.child,l=null;a!==null;)n=a.alternate,n!==null&&Si(n)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),kr(t,!1,l,a,i);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(n=l.alternate,n!==null&&Si(n)===null){t.child=l;break}n=l.sibling,l.sibling=a,a=l,l=n}kr(t,!0,a,null,i);break;case"together":kr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lt(n,t,a){if(n!==null&&(t.dependencies=n.dependencies),ba|=t.lanes,(a&t.childLanes)===0)if(n!==null){if(Ie(n,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(c(153));if(t.child!==null){for(n=t.child,a=wt(n,n.pendingProps),t.child=a,a.return=t;n.sibling!==null;)n=n.sibling,a=a.sibling=wt(n,n.pendingProps),a.return=t;a.sibling=null}return t.child}function Ur(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&ii(n)))}function gh(n,t,a){switch(t.tag){case 3:En(t,t.stateNode.containerInfo),ea(t,Cn,n.memoizedState.cache),We();break;case 27:case 5:ou(t);break;case 4:En(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var e=t.memoizedState;if(e!==null)return e.dehydrated!==null?(oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?tf(n,t,a):(oa(t),n=Lt(n,t,a),n!==null?n.sibling:null);oa(t);break;case 19:var l=(n.flags&128)!==0;if(e=(a&t.childLanes)!==0,e||(Ie(n,t,a,!1),e=(a&t.childLanes)!==0),l){if(e)return ef(n,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(jn,jn.current),e)break;return null;case 22:case 23:return t.lanes=0,$s(n,t,a);case 24:ea(t,Cn,n.memoizedState.cache)}return Lt(n,t,a)}function lf(n,t,a){if(n!==null)if(n.memoizedProps!==t.pendingProps)Xn=!0;else{if(!Ur(n,a)&&(t.flags&128)===0)return Xn=!1,gh(n,t,a);Xn=(n.flags&131072)!==0}else Xn=!1,hn&&(t.flags&1048576)!==0&&Hc(t,li,t.index);switch(t.lanes=0,t.tag){case 16:n:{n=t.pendingProps;var e=t.elementType,l=e._init;if(e=l(e._payload),t.type=e,typeof e=="function")Gu(e)?(n=Xa(e,n),t.tag=1,t=Is(null,t,e,n,a)):(t.tag=0,t=zr(null,t,e,n,a));else{if(e!=null){if(l=e.$$typeof,l===Tn){t.tag=11,t=Ks(null,t,e,n,a);break n}else if(l===U){t.tag=14,t=Js(null,t,e,n,a);break n}}throw t=za(e)||e,Error(c(306,t,""))}}return t;case 0:return zr(n,t,t.type,t.pendingProps,a);case 1:return e=t.type,l=Xa(e,t.pendingProps),Is(n,t,e,l,a);case 3:n:{if(En(t,t.stateNode.containerInfo),n===null)throw Error(c(387));e=t.pendingProps;var i=t.memoizedState;l=i.element,ar(n,t),ul(t,e,null,a);var r=t.memoizedState;if(e=r.cache,ea(t,Cn,e),e!==i.cache&&$u(t,[Cn],a,!0),il(),e=r.element,i.isDehydrated)if(i={element:e,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=nf(n,t,e,a);break n}else if(e!==l){l=pt(Error(c(424)),t),Fe(l),t=nf(n,t,e,a);break n}else{switch(n=t.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Dn=_t(n.firstChild),Fn=t,hn=!0,qa=null,Rt=!0,a=Cs(t,null,e,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(We(),e===l){t=Lt(n,t,a);break n}Zn(n,t,e,a)}t=t.child}return t;case 26:return Ei(n,t),n===null?(a=cd(t.type,null,t.pendingProps,null))?t.memoizedState=a:hn||(a=t.type,n=t.pendingProps,e=Yi(I.current).createElement(a),e[Pn]=t,e[In]=n,Vn(e,a,n),Bn(e),t.stateNode=e):t.memoizedState=cd(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return ou(t),n===null&&hn&&(e=t.stateNode=ud(t.type,t.pendingProps,I.current),Fn=t,Rt=!0,l=Dn,ga(t.type)?(bo=l,Dn=_t(e.firstChild)):Dn=l),Zn(n,t,t.pendingProps.children,a),Ei(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&hn&&((l=e=Dn)&&(e=Vh(e,t.type,t.pendingProps,Rt),e!==null?(t.stateNode=e,Fn=t,Dn=_t(e.firstChild),Rt=!1,l=!0):l=!1),l||Ca(t)),ou(t),l=t.type,i=t.pendingProps,r=n!==null?n.memoizedProps:null,e=i.children,co(l,i)?e=null:r!==null&&co(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=or(n,t,sh,null,null,a),Ml._currentValue=l),Ei(n,t),Zn(n,t,e,a),t.child;case 6:return n===null&&hn&&((n=a=Dn)&&(a=Kh(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Fn=t,Dn=null,n=!0):n=!1),n||Ca(t)),null;case 13:return tf(n,t,a);case 4:return En(t,t.stateNode.containerInfo),e=t.pendingProps,n===null?t.child=pe(t,null,e,a):Zn(n,t,e,a),t.child;case 11:return Ks(n,t,t.type,t.pendingProps,a);case 7:return Zn(n,t,t.pendingProps,a),t.child;case 8:return Zn(n,t,t.pendingProps.children,a),t.child;case 12:return Zn(n,t,t.pendingProps.children,a),t.child;case 10:return e=t.pendingProps,ea(t,t.type,e.value),Zn(n,t,e.children,a),t.child;case 9:return l=t.type._context,e=t.pendingProps.children,wa(t),l=$n(l),e=e(l),t.flags|=1,Zn(n,t,e,a),t.child;case 14:return Js(n,t,t.type,t.pendingProps,a);case 15:return Ps(n,t,t.type,t.pendingProps,a);case 19:return ef(n,t,a);case 31:return e=t.pendingProps,a=t.mode,e={mode:e.mode,children:e.children},n===null?(a=Ai(e,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=wt(n.child,e),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return $s(n,t,a);case 24:return wa(t),e=$n(Cn),n===null?(l=Iu(),l===null&&(l=On,i=Wu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:e,cache:l},tr(t),ea(t,Cn,l)):((n.lanes&a)!==0&&(ar(n,t),ul(t,null,null,a),il()),l=n.memoizedState,i=t.memoizedState,l.parent!==e?(l={parent:e,cache:e},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ea(t,Cn,e)):(e=i.cache,ea(t,Cn,e),e!==l.cache&&$u(t,[Cn],a,!0))),Zn(n,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Vt(n){n.flags|=4}function uf(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!bd(t)){if(t=St.current,t!==null&&((cn&4194048)===cn?kt!==null:(cn&62914560)!==cn&&(cn&536870912)===0||t!==kt))throw el=nr,Gc;n.flags|=8192}}function zi(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?jo():536870912,n.lanes|=t,Se|=t)}function hl(n,t){if(!hn)switch(n.tailMode){case"hidden":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:e.sibling=null}}function _n(n){var t=n.alternate!==null&&n.alternate.child===n.child,a=0,e=0;if(t)for(var l=n.child;l!==null;)a|=l.lanes|l.childLanes,e|=l.subtreeFlags&65011712,e|=l.flags&65011712,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)a|=l.lanes|l.childLanes,e|=l.subtreeFlags,e|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=e,n.childLanes=a,t}function yh(n,t,a){var e=t.pendingProps;switch(Vu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(t),null;case 1:return _n(t),null;case 3:return a=t.stateNode,e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Gt(Cn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&($e(t)?Vt(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jc())),_n(t),null;case 26:return a=t.memoizedState,n===null?(Vt(t),a!==null?(_n(t),uf(t,a)):(_n(t),t.flags&=-16777217)):a?a!==n.memoizedState?(Vt(t),_n(t),uf(t,a)):(_n(t),t.flags&=-16777217):(n.memoizedProps!==e&&Vt(t),_n(t),t.flags&=-16777217),null;case 27:jl(t),a=I.current;var l=t.type;if(n!==null&&t.stateNode!=null)n.memoizedProps!==e&&Vt(t);else{if(!e){if(t.stateNode===null)throw Error(c(166));return _n(t),null}n=L.current,$e(t)?qc(t):(n=ud(l,e,a),t.stateNode=n,Vt(t))}return _n(t),null;case 5:if(jl(t),a=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==e&&Vt(t);else{if(!e){if(t.stateNode===null)throw Error(c(166));return _n(t),null}if(n=L.current,$e(t))qc(t);else{switch(l=Yi(I.current),n){case 1:n=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?l.createElement("select",{is:e.is}):l.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?l.createElement(a,{is:e.is}):l.createElement(a)}}n[Pn]=t,n[In]=e;n:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break n;for(;l.sibling===null;){if(l.return===null||l.return===t)break n;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=n;n:switch(Vn(n,a,e),a){case"button":case"input":case"select":case"textarea":n=!!e.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&Vt(t)}}return _n(t),t.flags&=-16777217,null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==e&&Vt(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(c(166));if(n=I.current,$e(t)){if(n=t.stateNode,a=t.memoizedProps,e=null,l=Fn,l!==null)switch(l.tag){case 27:case 5:e=l.memoizedProps}n[Pn]=t,n=!!(n.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||If(n.nodeValue,a)),n||Ca(t)}else n=Yi(n).createTextNode(e),n[Pn]=t,t.stateNode=n}return _n(t),null;case 13:if(e=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=$e(t),e!==null&&e.dehydrated!==null){if(n===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Pn]=t}else We(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_n(t),l=!1}else l=jc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Zt(t),t):(Zt(t),null)}if(Zt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=e!==null,n=n!==null&&n.memoizedState!==null,a){e=t.child,l=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(l=e.alternate.memoizedState.cachePool.pool);var i=null;e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==l&&(e.flags|=2048)}return a!==n&&a&&(t.child.flags|=8192),zi(t,t.updateQueue),_n(t),null;case 4:return It(),n===null&&lo(t.stateNode.containerInfo),_n(t),null;case 10:return Gt(t.type),_n(t),null;case 19:if(j(jn),l=t.memoizedState,l===null)return _n(t),null;if(e=(t.flags&128)!==0,i=l.rendering,i===null)if(e)hl(l,!1);else{if(Nn!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(i=Si(n),i!==null){for(t.flags|=128,hl(l,!1),n=i.updateQueue,t.updateQueue=n,zi(t,n),t.subtreeFlags=0,n=a,a=t.child;a!==null;)Uc(a,n),a=a.sibling;return H(jn,jn.current&1|2),t.child}n=n.sibling}l.tail!==null&&Nt()>Di&&(t.flags|=128,e=!0,hl(l,!1),t.lanes=4194304)}else{if(!e)if(n=Si(i),n!==null){if(t.flags|=128,e=!0,n=n.updateQueue,t.updateQueue=n,zi(t,n),hl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!hn)return _n(t),null}else 2*Nt()-l.renderingStartTime>Di&&a!==536870912&&(t.flags|=128,e=!0,hl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Nt(),t.sibling=null,n=jn.current,H(jn,e?n&1|2:n&1),t):(_n(t),null);case 22:case 23:return Zt(t),ur(),e=t.memoizedState!==null,n!==null?n.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(a&536870912)!==0&&(t.flags&128)===0&&(_n(t),t.subtreeFlags&6&&(t.flags|=8192)):_n(t),a=t.updateQueue,a!==null&&zi(t,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(t.flags|=2048),n!==null&&j(Ya),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Gt(Cn),_n(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function xh(n,t){switch(Vu(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Gt(Cn),It(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return jl(t),null;case 13:if(Zt(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(c(340));We()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return j(jn),null;case 4:return It(),null;case 10:return Gt(t.type),null;case 22:case 23:return Zt(t),ur(),n!==null&&j(Ya),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return Gt(Cn),null;case 25:return null;default:return null}}function rf(n,t){switch(Vu(t),t.tag){case 3:Gt(Cn),It();break;case 26:case 27:case 5:jl(t);break;case 4:It();break;case 13:Zt(t);break;case 19:j(jn);break;case 10:Gt(t.type);break;case 22:case 23:Zt(t),ur(),n!==null&&j(Ya);break;case 24:Gt(Cn)}}function bl(n,t){try{var a=t.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var l=e.next;a=l;do{if((a.tag&n)===n){e=void 0;var i=a.create,r=a.inst;e=i(),r.destroy=e}a=a.next}while(a!==l)}}catch(o){Sn(t,t.return,o)}}function sa(n,t,a){try{var e=t.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var i=l.next;e=i;do{if((e.tag&n)===n){var r=e.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,l=t;var d=a,p=o;try{p()}catch(O){Sn(l,d,O)}}}e=e.next}while(e!==i)}}catch(O){Sn(t,t.return,O)}}function of(n){var t=n.updateQueue;if(t!==null){var a=n.stateNode;try{Jc(t,a)}catch(e){Sn(n,n.return,e)}}}function cf(n,t,a){a.props=Xa(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(e){Sn(n,t,e)}}function ml(n,t){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var e=n.stateNode;break;case 30:e=n.stateNode;break;default:e=n.stateNode}typeof a=="function"?n.refCleanup=a(e):a.current=e}}catch(l){Sn(n,t,l)}}function Ut(n,t){var a=n.ref,e=n.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(l){Sn(n,t,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Sn(n,t,l)}else a.current=null}function sf(n){var t=n.type,a=n.memoizedProps,e=n.stateNode;try{n:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break n;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(l){Sn(n,n.return,l)}}function Hr(n,t,a){try{var e=n.stateNode;Xh(e,n.type,a,t),e[In]=t}catch(l){Sn(n,n.return,l)}}function ff(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ga(n.type)||n.tag===4}function qr(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||ff(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ga(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cr(n,t,a){var e=n.tag;if(e===5||e===6)n=n.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(n),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=wi));else if(e!==4&&(e===27&&ga(n.type)&&(a=n.stateNode,t=null),n=n.child,n!==null))for(Cr(n,t,a),n=n.sibling;n!==null;)Cr(n,t,a),n=n.sibling}function _i(n,t,a){var e=n.tag;if(e===5||e===6)n=n.stateNode,t?a.insertBefore(n,t):a.appendChild(n);else if(e!==4&&(e===27&&ga(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(_i(n,t,a),n=n.sibling;n!==null;)_i(n,t,a),n=n.sibling}function df(n){var t=n.stateNode,a=n.memoizedProps;try{for(var e=n.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Vn(t,e,a),t[Pn]=n,t[In]=a}catch(i){Sn(n,n.return,i)}}var Kt=!1,kn=!1,jr=!1,hf=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function Sh(n,t){if(n=n.containerInfo,ro=Li,n=Tc(n),qu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var l=e.anchorOffset,i=e.focusNode;e=e.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break n}var r=0,o=-1,d=-1,p=0,O=0,_=n,y=null;t:for(;;){for(var x;_!==a||l!==0&&_.nodeType!==3||(o=r+l),_!==i||e!==0&&_.nodeType!==3||(d=r+e),_.nodeType===3&&(r+=_.nodeValue.length),(x=_.firstChild)!==null;)y=_,_=x;for(;;){if(_===n)break t;if(y===a&&++p===l&&(o=r),y===i&&++O===e&&(d=r),(x=_.nextSibling)!==null)break;_=y,y=_.parentNode}_=x}a=o===-1||d===-1?null:{start:o,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(oo={focusedElem:n,selectionRange:a},Li=!1,Gn=t;Gn!==null;)if(t=Gn,n=t.child,(t.subtreeFlags&1024)!==0&&n!==null)n.return=t,Gn=n;else for(;Gn!==null;){switch(t=Gn,i=t.alternate,n=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,e=a.stateNode;try{var W=Xa(a.type,l,a.elementType===a.type);n=e.getSnapshotBeforeUpdate(W,i),e.__reactInternalSnapshotBeforeUpdate=n}catch(V){Sn(a,a.return,V)}}break;case 3:if((n&1024)!==0){if(n=t.stateNode.containerInfo,a=n.nodeType,a===9)fo(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":fo(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(c(163))}if(n=t.sibling,n!==null){n.return=t.return,Gn=n;break}Gn=t.return}}function bf(n,t,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:fa(n,a),e&4&&bl(5,a);break;case 1:if(fa(n,a),e&4)if(n=a.stateNode,t===null)try{n.componentDidMount()}catch(r){Sn(a,a.return,r)}else{var l=Xa(a.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(l,t,n.__reactInternalSnapshotBeforeUpdate)}catch(r){Sn(a,a.return,r)}}e&64&&of(a),e&512&&ml(a,a.return);break;case 3:if(fa(n,a),e&64&&(n=a.updateQueue,n!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Jc(n,t)}catch(r){Sn(a,a.return,r)}}break;case 27:t===null&&e&4&&df(a);case 26:case 5:fa(n,a),t===null&&e&4&&sf(a),e&512&&ml(a,a.return);break;case 12:fa(n,a);break;case 13:fa(n,a),e&4&&pf(n,a),e&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=Nh.bind(null,a),Jh(n,a))));break;case 22:if(e=a.memoizedState!==null||Kt,!e){t=t!==null&&t.memoizedState!==null||kn,l=Kt;var i=kn;Kt=e,(kn=t)&&!i?da(n,a,(a.subtreeFlags&8772)!==0):fa(n,a),Kt=l,kn=i}break;case 30:break;default:fa(n,a)}}function mf(n){var t=n.alternate;t!==null&&(n.alternate=null,mf(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&vu(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var An=null,at=!1;function Jt(n,t,a){for(a=a.child;a!==null;)vf(n,t,a),a=a.sibling}function vf(n,t,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Ce,a)}catch{}switch(a.tag){case 26:kn||Ut(a,t),Jt(n,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:kn||Ut(a,t);var e=An,l=at;ga(a.type)&&(An=a.stateNode,at=!1),Jt(n,t,a),El(a.stateNode),An=e,at=l;break;case 5:kn||Ut(a,t);case 6:if(e=An,l=at,An=null,Jt(n,t,a),An=e,at=l,An!==null)if(at)try{(An.nodeType===9?An.body:An.nodeName==="HTML"?An.ownerDocument.body:An).removeChild(a.stateNode)}catch(i){Sn(a,t,i)}else try{An.removeChild(a.stateNode)}catch(i){Sn(a,t,i)}break;case 18:An!==null&&(at?(n=An,ld(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),kl(n)):ld(An,a.stateNode));break;case 4:e=An,l=at,An=a.stateNode.containerInfo,at=!0,Jt(n,t,a),An=e,at=l;break;case 0:case 11:case 14:case 15:kn||sa(2,a,t),kn||sa(4,a,t),Jt(n,t,a);break;case 1:kn||(Ut(a,t),e=a.stateNode,typeof e.componentWillUnmount=="function"&&cf(a,t,e)),Jt(n,t,a);break;case 21:Jt(n,t,a);break;case 22:kn=(e=kn)||a.memoizedState!==null,Jt(n,t,a),kn=e;break;default:Jt(n,t,a)}}function pf(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{kl(n)}catch(a){Sn(t,t.return,a)}}function Oh(n){switch(n.tag){case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new hf),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new hf),t;default:throw Error(c(435,n.tag))}}function wr(n,t){var a=Oh(n);t.forEach(function(e){var l=Rh.bind(null,n,e);a.has(e)||(a.add(e),e.then(l,l))})}function ct(n,t){var a=t.deletions;if(a!==null)for(var e=0;e<a.length;e++){var l=a[e],i=n,r=t,o=r;n:for(;o!==null;){switch(o.tag){case 27:if(ga(o.type)){An=o.stateNode,at=!1;break n}break;case 5:An=o.stateNode,at=!1;break n;case 3:case 4:An=o.stateNode.containerInfo,at=!0;break n}o=o.return}if(An===null)throw Error(c(160));vf(i,r,l),An=null,at=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)gf(t,n),t=t.sibling}var zt=null;function gf(n,t){var a=n.alternate,e=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ct(t,n),st(n),e&4&&(sa(3,n,n.return),bl(3,n),sa(5,n,n.return));break;case 1:ct(t,n),st(n),e&512&&(kn||a===null||Ut(a,a.return)),e&64&&Kt&&(n=n.updateQueue,n!==null&&(e=n.callbacks,e!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var l=zt;if(ct(t,n),st(n),e&512&&(kn||a===null||Ut(a,a.return)),e&4){var i=a!==null?a.memoizedState:null;if(e=n.memoizedState,a===null)if(e===null)if(n.stateNode===null){n:{e=n.type,a=n.memoizedProps,l=l.ownerDocument||l;t:switch(e){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ye]||i[Pn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(e),l.head.insertBefore(i,l.querySelector("head > title"))),Vn(i,e,a),i[Pn]=n,Bn(i),e=i;break n;case"link":var r=dd("link","href",l).get(e+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(i=r[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break t}}i=l.createElement(e),Vn(i,e,a),l.head.appendChild(i);break;case"meta":if(r=dd("meta","content",l).get(e+(a.content||""))){for(o=0;o<r.length;o++)if(i=r[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break t}}i=l.createElement(e),Vn(i,e,a),l.head.appendChild(i);break;default:throw Error(c(468,e))}i[Pn]=n,Bn(i),e=i}n.stateNode=e}else hd(l,n.type,n.stateNode);else n.stateNode=fd(l,e,n.memoizedProps);else i!==e?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,e===null?hd(l,n.type,n.stateNode):fd(l,e,n.memoizedProps)):e===null&&n.stateNode!==null&&Hr(n,n.memoizedProps,a.memoizedProps)}break;case 27:ct(t,n),st(n),e&512&&(kn||a===null||Ut(a,a.return)),a!==null&&e&4&&Hr(n,n.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,n),st(n),e&512&&(kn||a===null||Ut(a,a.return)),n.flags&32){l=n.stateNode;try{Ia(l,"")}catch(x){Sn(n,n.return,x)}}e&4&&n.stateNode!=null&&(l=n.memoizedProps,Hr(n,l,a!==null?a.memoizedProps:l)),e&1024&&(jr=!0);break;case 6:if(ct(t,n),st(n),e&4){if(n.stateNode===null)throw Error(c(162));e=n.memoizedProps,a=n.stateNode;try{a.nodeValue=e}catch(x){Sn(n,n.return,x)}}break;case 3:if(Gi=null,l=zt,zt=Bi(t.containerInfo),ct(t,n),zt=l,st(n),e&4&&a!==null&&a.memoizedState.isDehydrated)try{kl(t.containerInfo)}catch(x){Sn(n,n.return,x)}jr&&(jr=!1,yf(n));break;case 4:e=zt,zt=Bi(n.stateNode.containerInfo),ct(t,n),st(n),zt=e;break;case 12:ct(t,n),st(n);break;case 13:ct(t,n),st(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zr=Nt()),e&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,wr(n,e)));break;case 22:l=n.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,p=Kt,O=kn;if(Kt=p||l,kn=O||d,ct(t,n),kn=O,Kt=p,st(n),e&8192)n:for(t=n.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||d||Kt||kn||Ga(n)),a=null,t=n;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(i=d.stateNode,l)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=d.stateNode;var _=d.memoizedProps.style,y=_!=null&&_.hasOwnProperty("display")?_.display:null;o.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(x){Sn(d,d.return,x)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(x){Sn(d,d.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break n;for(;t.sibling===null;){if(t.return===null||t.return===n)break n;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}e&4&&(e=n.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,wr(n,a))));break;case 19:ct(t,n),st(n),e&4&&(e=n.updateQueue,e!==null&&(n.updateQueue=null,wr(n,e)));break;case 30:break;case 21:break;default:ct(t,n),st(n)}}function st(n){var t=n.flags;if(t&2){try{for(var a,e=n.return;e!==null;){if(ff(e)){a=e;break}e=e.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,i=qr(n);_i(n,i,l);break;case 5:var r=a.stateNode;a.flags&32&&(Ia(r,""),a.flags&=-33);var o=qr(n);_i(n,o,r);break;case 3:case 4:var d=a.stateNode.containerInfo,p=qr(n);Cr(n,p,d);break;default:throw Error(c(161))}}catch(O){Sn(n,n.return,O)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function yf(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;yf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function fa(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bf(n,t.alternate,t),t=t.sibling}function Ga(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),Ga(t);break;case 1:Ut(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&cf(t,t.return,a),Ga(t);break;case 27:El(t.stateNode);case 26:case 5:Ut(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}n=n.sibling}}function da(n,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var e=t.alternate,l=n,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:da(l,i,a),bl(4,i);break;case 1:if(da(l,i,a),e=i,l=e.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){Sn(e,e.return,p)}if(e=i,l=e.updateQueue,l!==null){var o=e.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)Kc(d[l],o)}catch(p){Sn(e,e.return,p)}}a&&r&64&&of(i),ml(i,i.return);break;case 27:df(i);case 26:case 5:da(l,i,a),a&&e===null&&r&4&&sf(i),ml(i,i.return);break;case 12:da(l,i,a);break;case 13:da(l,i,a),a&&r&4&&pf(l,i);break;case 22:i.memoizedState===null&&da(l,i,a),ml(i,i.return);break;case 30:break;default:da(l,i,a)}t=t.sibling}}function Yr(n,t){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&nl(a))}function Br(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&nl(n))}function Ht(n,t,a,e){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xf(n,t,a,e),t=t.sibling}function xf(n,t,a,e){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(n,t,a,e),l&2048&&bl(9,t);break;case 1:Ht(n,t,a,e);break;case 3:Ht(n,t,a,e),l&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&nl(n)));break;case 12:if(l&2048){Ht(n,t,a,e),n=t.stateNode;try{var i=t.memoizedProps,r=i.id,o=i.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(d){Sn(t,t.return,d)}}else Ht(n,t,a,e);break;case 13:Ht(n,t,a,e);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Ht(n,t,a,e):vl(n,t):i._visibility&2?Ht(n,t,a,e):(i._visibility|=2,ge(n,t,a,e,(t.subtreeFlags&10256)!==0)),l&2048&&Yr(r,t);break;case 24:Ht(n,t,a,e),l&2048&&Br(t.alternate,t);break;default:Ht(n,t,a,e)}}function ge(n,t,a,e,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=n,r=t,o=a,d=e,p=r.flags;switch(r.tag){case 0:case 11:case 15:ge(i,r,o,d,l),bl(8,r);break;case 23:break;case 22:var O=r.stateNode;r.memoizedState!==null?O._visibility&2?ge(i,r,o,d,l):vl(i,r):(O._visibility|=2,ge(i,r,o,d,l)),l&&p&2048&&Yr(r.alternate,r);break;case 24:ge(i,r,o,d,l),l&&p&2048&&Br(r.alternate,r);break;default:ge(i,r,o,d,l)}t=t.sibling}}function vl(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=n,e=t,l=e.flags;switch(e.tag){case 22:vl(a,e),l&2048&&Yr(e.alternate,e);break;case 24:vl(a,e),l&2048&&Br(e.alternate,e);break;default:vl(a,e)}t=t.sibling}}var pl=8192;function ye(n){if(n.subtreeFlags&pl)for(n=n.child;n!==null;)Sf(n),n=n.sibling}function Sf(n){switch(n.tag){case 26:ye(n),n.flags&pl&&n.memoizedState!==null&&rb(zt,n.memoizedState,n.memoizedProps);break;case 5:ye(n);break;case 3:case 4:var t=zt;zt=Bi(n.stateNode.containerInfo),ye(n),zt=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=pl,pl=16777216,ye(n),pl=t):ye(n));break;default:ye(n)}}function Of(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function gl(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Gn=e,Ef(e,n)}Of(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tf(n),n=n.sibling}function Tf(n){switch(n.tag){case 0:case 11:case 15:gl(n),n.flags&2048&&sa(9,n,n.return);break;case 3:gl(n);break;case 12:gl(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,Mi(n)):gl(n);break;default:gl(n)}}function Mi(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Gn=e,Ef(e,n)}Of(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:sa(8,t,t.return),Mi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Mi(t));break;default:Mi(t)}n=n.sibling}}function Ef(n,t){for(;Gn!==null;){var a=Gn;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:nl(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,Gn=e;else n:for(a=n;Gn!==null;){e=Gn;var l=e.sibling,i=e.return;if(mf(e),e===a){Gn=null;break n}if(l!==null){l.return=i,Gn=l;break n}Gn=i}}}var Th={getCacheForType:function(n){var t=$n(Cn),a=t.data.get(n);return a===void 0&&(a=n(),t.data.set(n,a)),a}},Eh=typeof WeakMap=="function"?WeakMap:Map,bn=0,On=null,ln=null,cn=0,mn=0,ft=null,ha=!1,xe=!1,Xr=!1,Pt=0,Nn=0,ba=0,Qa=0,Gr=0,Ot=0,Se=0,yl=null,et=null,Qr=!1,Zr=0,Di=1/0,Ni=null,ma=null,Ln=0,va=null,Oe=null,Te=0,Lr=0,Vr=null,Af=null,xl=0,Kr=null;function dt(){if((bn&2)!==0&&cn!==0)return cn&-cn;if(A.T!==null){var n=se;return n!==0?n:no()}return Bo()}function zf(){Ot===0&&(Ot=(cn&536870912)===0||hn?Co():536870912);var n=St.current;return n!==null&&(n.flags|=32),Ot}function ht(n,t,a){(n===On&&(mn===2||mn===9)||n.cancelPendingCommit!==null)&&(Ee(n,0),pa(n,cn,Ot,!1)),we(n,a),((bn&2)===0||n!==On)&&(n===On&&((bn&2)===0&&(Qa|=a),Nn===4&&pa(n,cn,Ot,!1)),qt(n))}function _f(n,t,a){if((bn&6)!==0)throw Error(c(327));var e=!a&&(t&124)===0&&(t&n.expiredLanes)===0||je(n,t),l=e?_h(n,t):$r(n,t,!0),i=e;do{if(l===0){xe&&!e&&pa(n,t,0,!1);break}else{if(a=n.current.alternate,i&&!Ah(a)){l=$r(n,t,!1),i=!1;continue}if(l===2){if(i=t,n.errorRecoveryDisabledLanes&i)var r=0;else r=n.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;n:{var o=n;l=yl;var d=o.current.memoizedState.isDehydrated;if(d&&(Ee(o,r).flags|=256),r=$r(o,r,!1),r!==2){if(Xr&&!d){o.errorRecoveryDisabledLanes|=i,Qa|=i,l=4;break n}i=et,et=l,i!==null&&(et===null?et=i:et.push.apply(et,i))}l=r}if(i=!1,l!==2)continue}}if(l===1){Ee(n,0),pa(n,t,0,!0);break}n:{switch(e=n,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:pa(e,t,Ot,!ha);break n;case 2:et=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Zr+300-Nt(),10<l)){if(pa(e,t,Ot,!ha),Xl(e,0,!0)!==0)break n;e.timeoutHandle=ad(Mf.bind(null,e,a,et,Ni,Qr,t,Ot,Qa,Se,ha,i,2,-0,0),l);break n}Mf(e,a,et,Ni,Qr,t,Ot,Qa,Se,ha,i,0,-0,0)}}break}while(!0);qt(n)}function Mf(n,t,a,e,l,i,r,o,d,p,O,_,y,x){if(n.timeoutHandle=-1,_=t.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(_l={stylesheets:null,count:0,unsuspend:ub},Sf(t),_=ob(),_!==null)){n.cancelPendingCommit=_(qf.bind(null,n,t,i,a,e,l,r,o,d,O,1,y,x)),pa(n,i,r,!p);return}qf(n,t,i,a,e,l,r,o,d)}function Ah(n){for(var t=n;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var l=a[e],i=l.getSnapshot;l=l.value;try{if(!rt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(n,t,a,e){t&=~Gr,t&=~Qa,n.suspendedLanes|=t,n.pingedLanes&=~t,e&&(n.warmLanes|=t),e=n.expirationTimes;for(var l=t;0<l;){var i=31-ut(l),r=1<<i;e[i]=-1,l&=~r}a!==0&&wo(n,a,t)}function Ri(){return(bn&6)===0?(Sl(0),!1):!0}function Jr(){if(ln!==null){if(mn===0)var n=ln.return;else n=ln,Xt=ja=null,fr(n),ve=null,fl=0,n=ln;for(;n!==null;)rf(n.alternate,n),n=n.return;ln=null}}function Ee(n,t){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,Qh(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Jr(),On=n,ln=a=wt(n.current,null),cn=t,mn=0,ft=null,ha=!1,xe=je(n,t),Xr=!1,Se=Ot=Gr=Qa=ba=Nn=0,et=yl=null,Qr=!1,(t&8)!==0&&(t|=t&32);var e=n.entangledLanes;if(e!==0)for(n=n.entanglements,e&=t;0<e;){var l=31-ut(e),i=1<<l;t|=n[l],e&=~i}return Pt=t,Il(),a}function Df(n,t){an=null,A.H=gi,t===al||t===oi?(t=Lc(),mn=3):t===Gc?(t=Lc(),mn=4):mn=t===Vs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,ln===null&&(Nn=1,Ti(n,pt(t,n.current)))}function Nf(){var n=A.H;return A.H=gi,n===null?gi:n}function Rf(){var n=A.A;return A.A=Th,n}function Pr(){Nn=4,ha||(cn&4194048)!==cn&&St.current!==null||(xe=!0),(ba&134217727)===0&&(Qa&134217727)===0||On===null||pa(On,cn,Ot,!1)}function $r(n,t,a){var e=bn;bn|=2;var l=Nf(),i=Rf();(On!==n||cn!==t)&&(Ni=null,Ee(n,t)),t=!1;var r=Nn;n:do try{if(mn!==0&&ln!==null){var o=ln,d=ft;switch(mn){case 8:Jr(),r=6;break n;case 3:case 2:case 9:case 6:St.current===null&&(t=!0);var p=mn;if(mn=0,ft=null,Ae(n,o,d,p),a&&xe){r=0;break n}break;default:p=mn,mn=0,ft=null,Ae(n,o,d,p)}}zh(),r=Nn;break}catch(O){Df(n,O)}while(!0);return t&&n.shellSuspendCounter++,Xt=ja=null,bn=e,A.H=l,A.A=i,ln===null&&(On=null,cn=0,Il()),r}function zh(){for(;ln!==null;)kf(ln)}function _h(n,t){var a=bn;bn|=2;var e=Nf(),l=Rf();On!==n||cn!==t?(Ni=null,Di=Nt()+500,Ee(n,t)):xe=je(n,t);n:do try{if(mn!==0&&ln!==null){t=ln;var i=ft;t:switch(mn){case 1:mn=0,ft=null,Ae(n,t,i,1);break;case 2:case 9:if(Qc(i)){mn=0,ft=null,Uf(t);break}t=function(){mn!==2&&mn!==9||On!==n||(mn=7),qt(n)},i.then(t,t);break n;case 3:mn=7;break n;case 4:mn=5;break n;case 7:Qc(i)?(mn=0,ft=null,Uf(t)):(mn=0,ft=null,Ae(n,t,i,7));break;case 5:var r=null;switch(ln.tag){case 26:r=ln.memoizedState;case 5:case 27:var o=ln;if(!r||bd(r)){mn=0,ft=null;var d=o.sibling;if(d!==null)ln=d;else{var p=o.return;p!==null?(ln=p,ki(p)):ln=null}break t}}mn=0,ft=null,Ae(n,t,i,5);break;case 6:mn=0,ft=null,Ae(n,t,i,6);break;case 8:Jr(),Nn=6;break n;default:throw Error(c(462))}}Mh();break}catch(O){Df(n,O)}while(!0);return Xt=ja=null,A.H=e,A.A=l,bn=a,ln!==null?0:(On=null,cn=0,Il(),Nn)}function Mh(){for(;ln!==null&&!$d();)kf(ln)}function kf(n){var t=lf(n.alternate,n,Pt);n.memoizedProps=n.pendingProps,t===null?ki(n):ln=t}function Uf(n){var t=n,a=t.alternate;switch(t.tag){case 15:case 0:t=Fs(a,t,t.pendingProps,t.type,void 0,cn);break;case 11:t=Fs(a,t,t.pendingProps,t.type.render,t.ref,cn);break;case 5:fr(t);default:rf(a,t),t=ln=Uc(t,Pt),t=lf(a,t,Pt)}n.memoizedProps=n.pendingProps,t===null?ki(n):ln=t}function Ae(n,t,a,e){Xt=ja=null,fr(t),ve=null,fl=0;var l=t.return;try{if(ph(n,l,t,a,cn)){Nn=1,Ti(n,pt(a,n.current)),ln=null;return}}catch(i){if(l!==null)throw ln=l,i;Nn=1,Ti(n,pt(a,n.current)),ln=null;return}t.flags&32768?(hn||e===1?n=!0:xe||(cn&536870912)!==0?n=!1:(ha=n=!0,(e===2||e===9||e===3||e===6)&&(e=St.current,e!==null&&e.tag===13&&(e.flags|=16384))),Hf(t,n)):ki(t)}function ki(n){var t=n;do{if((t.flags&32768)!==0){Hf(t,ha);return}n=t.return;var a=yh(t.alternate,t,Pt);if(a!==null){ln=a;return}if(t=t.sibling,t!==null){ln=t;return}ln=t=n}while(t!==null);Nn===0&&(Nn=5)}function Hf(n,t){do{var a=xh(n.alternate,n);if(a!==null){a.flags&=32767,ln=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(n=n.sibling,n!==null)){ln=n;return}ln=n=a}while(n!==null);Nn=6,ln=null}function qf(n,t,a,e,l,i,r,o,d){n.cancelPendingCommit=null;do Ui();while(Ln!==0);if((bn&6)!==0)throw Error(c(327));if(t!==null){if(t===n.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Bu,u0(n,a,i,r,o,d),n===On&&(ln=On=null,cn=0),Oe=t,va=n,Te=a,Lr=i,Vr=l,Af=e,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,kh(wl,function(){return Bf(),null})):(n.callbackNode=null,n.callbackPriority=0),e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=A.T,A.T=null,l=q.p,q.p=2,r=bn,bn|=4;try{Sh(n,t,a)}finally{bn=r,q.p=l,A.T=e}}Ln=1,Cf(),jf(),wf()}}function Cf(){if(Ln===1){Ln=0;var n=va,t=Oe,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var e=q.p;q.p=2;var l=bn;bn|=4;try{gf(t,n);var i=oo,r=Tc(n.containerInfo),o=i.focusedElem,d=i.selectionRange;if(r!==o&&o&&o.ownerDocument&&Oc(o.ownerDocument.documentElement,o)){if(d!==null&&qu(o)){var p=d.start,O=d.end;if(O===void 0&&(O=p),"selectionStart"in o)o.selectionStart=p,o.selectionEnd=Math.min(O,o.value.length);else{var _=o.ownerDocument||document,y=_&&_.defaultView||window;if(y.getSelection){var x=y.getSelection(),W=o.textContent.length,V=Math.min(d.start,W),yn=d.end===void 0?V:Math.min(d.end,W);!x.extend&&V>yn&&(r=yn,yn=V,V=r);var m=Sc(o,V),b=Sc(o,yn);if(m&&b&&(x.rangeCount!==1||x.anchorNode!==m.node||x.anchorOffset!==m.offset||x.focusNode!==b.node||x.focusOffset!==b.offset)){var v=_.createRange();v.setStart(m.node,m.offset),x.removeAllRanges(),V>yn?(x.addRange(v),x.extend(b.node,b.offset)):(v.setEnd(b.node,b.offset),x.addRange(v))}}}}for(_=[],x=o;x=x.parentNode;)x.nodeType===1&&_.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<_.length;o++){var z=_[o];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Li=!!ro,oo=ro=null}finally{bn=l,q.p=e,A.T=a}}n.current=t,Ln=2}}function jf(){if(Ln===2){Ln=0;var n=va,t=Oe,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var e=q.p;q.p=2;var l=bn;bn|=4;try{bf(n,t.alternate,t)}finally{bn=l,q.p=e,A.T=a}}Ln=3}}function wf(){if(Ln===4||Ln===3){Ln=0,Wd();var n=va,t=Oe,a=Te,e=Af;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ln=5:(Ln=0,Oe=va=null,Yf(n,n.pendingLanes));var l=n.pendingLanes;if(l===0&&(ma=null),bu(a),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Ce,t,void 0,(t.current.flags&128)===128)}catch{}if(e!==null){t=A.T,l=q.p,q.p=2,A.T=null;try{for(var i=n.onRecoverableError,r=0;r<e.length;r++){var o=e[r];i(o.value,{componentStack:o.stack})}}finally{A.T=t,q.p=l}}(Te&3)!==0&&Ui(),qt(n),l=n.pendingLanes,(a&4194090)!==0&&(l&42)!==0?n===Kr?xl++:(xl=0,Kr=n):xl=0,Sl(0)}}function Yf(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,nl(t)))}function Ui(n){return Cf(),jf(),wf(),Bf()}function Bf(){if(Ln!==5)return!1;var n=va,t=Lr;Lr=0;var a=bu(Te),e=A.T,l=q.p;try{q.p=32>a?32:a,A.T=null,a=Vr,Vr=null;var i=va,r=Te;if(Ln=0,Oe=va=null,Te=0,(bn&6)!==0)throw Error(c(331));var o=bn;if(bn|=4,Tf(i.current),xf(i,i.current,r,a),bn=o,Sl(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Ce,i)}catch{}return!0}finally{q.p=l,A.T=e,Yf(n,t)}}function Xf(n,t,a){t=pt(a,t),t=Ar(n.stateNode,t,2),n=ua(n,t,2),n!==null&&(we(n,2),qt(n))}function Sn(n,t,a){if(n.tag===3)Xf(n,n,a);else for(;t!==null;){if(t.tag===3){Xf(t,n,a);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(ma===null||!ma.has(e))){n=pt(a,n),a=Zs(2),e=ua(t,a,2),e!==null&&(Ls(a,e,t,n),we(e,2),qt(e));break}}t=t.return}}function Wr(n,t,a){var e=n.pingCache;if(e===null){e=n.pingCache=new Eh;var l=new Set;e.set(t,l)}else l=e.get(t),l===void 0&&(l=new Set,e.set(t,l));l.has(a)||(Xr=!0,l.add(a),n=Dh.bind(null,n,t,a),t.then(n,n))}function Dh(n,t,a){var e=n.pingCache;e!==null&&e.delete(t),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,On===n&&(cn&a)===a&&(Nn===4||Nn===3&&(cn&62914560)===cn&&300>Nt()-Zr?(bn&2)===0&&Ee(n,0):Gr|=a,Se===cn&&(Se=0)),qt(n)}function Gf(n,t){t===0&&(t=jo()),n=ue(n,t),n!==null&&(we(n,t),qt(n))}function Nh(n){var t=n.memoizedState,a=0;t!==null&&(a=t.retryLane),Gf(n,a)}function Rh(n,t){var a=0;switch(n.tag){case 13:var e=n.stateNode,l=n.memoizedState;l!==null&&(a=l.retryLane);break;case 19:e=n.stateNode;break;case 22:e=n.stateNode._retryCache;break;default:throw Error(c(314))}e!==null&&e.delete(t),Gf(n,a)}function kh(n,t){return su(n,t)}var Hi=null,ze=null,Fr=!1,qi=!1,Ir=!1,Za=0;function qt(n){n!==ze&&n.next===null&&(ze===null?Hi=ze=n:ze=ze.next=n),qi=!0,Fr||(Fr=!0,Hh())}function Sl(n,t){if(!Ir&&qi){Ir=!0;do for(var a=!1,e=Hi;e!==null;){if(n!==0){var l=e.pendingLanes;if(l===0)var i=0;else{var r=e.suspendedLanes,o=e.pingedLanes;i=(1<<31-ut(42|n)+1)-1,i&=l&~(r&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Vf(e,i))}else i=cn,i=Xl(e,e===On?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(i&3)===0||je(e,i)||(a=!0,Vf(e,i));e=e.next}while(a);Ir=!1}}function Uh(){Qf()}function Qf(){qi=Fr=!1;var n=0;Za!==0&&(Gh()&&(n=Za),Za=0);for(var t=Nt(),a=null,e=Hi;e!==null;){var l=e.next,i=Zf(e,t);i===0?(e.next=null,a===null?Hi=l:a.next=l,l===null&&(ze=a)):(a=e,(n!==0||(i&3)!==0)&&(qi=!0)),e=l}Sl(n)}function Zf(n,t){for(var a=n.suspendedLanes,e=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var r=31-ut(i),o=1<<r,d=l[r];d===-1?((o&a)===0||(o&e)!==0)&&(l[r]=i0(o,t)):d<=t&&(n.expiredLanes|=o),i&=~o}if(t=On,a=cn,a=Xl(n,n===t?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),e=n.callbackNode,a===0||n===t&&(mn===2||mn===9)||n.cancelPendingCommit!==null)return e!==null&&e!==null&&fu(e),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||je(n,a)){if(t=a&-a,t===n.callbackPriority)return t;switch(e!==null&&fu(e),bu(a)){case 2:case 8:a=Ho;break;case 32:a=wl;break;case 268435456:a=qo;break;default:a=wl}return e=Lf.bind(null,n),a=su(a,e),n.callbackPriority=t,n.callbackNode=a,t}return e!==null&&e!==null&&fu(e),n.callbackPriority=2,n.callbackNode=null,2}function Lf(n,t){if(Ln!==0&&Ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Ui()&&n.callbackNode!==a)return null;var e=cn;return e=Xl(n,n===On?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),e===0?null:(_f(n,e,t),Zf(n,Nt()),n.callbackNode!=null&&n.callbackNode===a?Lf.bind(null,n):null)}function Vf(n,t){if(Ui())return null;_f(n,t,!0)}function Hh(){Zh(function(){(bn&6)!==0?su(Uo,Uh):Qf()})}function no(){return Za===0&&(Za=Co()),Za}function Kf(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Vl(""+n)}function Jf(n,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,n.id&&a.setAttribute("form",n.id),t.parentNode.insertBefore(a,t),n=new FormData(n),a.parentNode.removeChild(a),n}function qh(n,t,a,e,l){if(t==="submit"&&a&&a.stateNode===l){var i=Kf((l[In]||null).action),r=e.submitter;r&&(t=(t=r[In]||null)?Kf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var o=new $l("action","action",null,e,l);n.push({event:o,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Za!==0){var d=r?Jf(l,r):new FormData(l);xr(a,{pending:!0,data:d,method:l.method,action:i},null,d)}}else typeof i=="function"&&(o.preventDefault(),d=r?Jf(l,r):new FormData(l),xr(a,{pending:!0,data:d,method:l.method,action:i},i,d))},currentTarget:l}]})}}for(var to=0;to<Yu.length;to++){var ao=Yu[to],Ch=ao.toLowerCase(),jh=ao[0].toUpperCase()+ao.slice(1);At(Ch,"on"+jh)}At(zc,"onAnimationEnd"),At(_c,"onAnimationIteration"),At(Mc,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(nh,"onTransitionRun"),At(th,"onTransitionStart"),At(ah,"onTransitionCancel"),At(Dc,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function Pf(n,t){t=(t&4)!==0;for(var a=0;a<n.length;a++){var e=n[a],l=e.event;e=e.listeners;n:{var i=void 0;if(t)for(var r=e.length-1;0<=r;r--){var o=e[r],d=o.instance,p=o.currentTarget;if(o=o.listener,d!==i&&l.isPropagationStopped())break n;i=o,l.currentTarget=p;try{i(l)}catch(O){Oi(O)}l.currentTarget=null,i=d}else for(r=0;r<e.length;r++){if(o=e[r],d=o.instance,p=o.currentTarget,o=o.listener,d!==i&&l.isPropagationStopped())break n;i=o,l.currentTarget=p;try{i(l)}catch(O){Oi(O)}l.currentTarget=null,i=d}}}}function un(n,t){var a=t[mu];a===void 0&&(a=t[mu]=new Set);var e=n+"__bubble";a.has(e)||($f(t,n,2,!1),a.add(e))}function eo(n,t,a){var e=0;t&&(e|=4),$f(a,n,e,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function lo(n){if(!n[Ci]){n[Ci]=!0,Go.forEach(function(a){a!=="selectionchange"&&(wh.has(a)||eo(a,!1,n),eo(a,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,eo("selectionchange",!1,t))}}function $f(n,t,a,e){switch(xd(t)){case 2:var l=fb;break;case 8:l=db;break;default:l=yo}a=l.bind(null,t,a,n),l=void 0,!zu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),e?l!==void 0?n.addEventListener(t,a,{capture:!0,passive:l}):n.addEventListener(t,a,!0):l!==void 0?n.addEventListener(t,a,{passive:l}):n.addEventListener(t,a,!1)}function io(n,t,a,e,l){var i=e;if((t&1)===0&&(t&2)===0&&e!==null)n:for(;;){if(e===null)return;var r=e.tag;if(r===3||r===4){var o=e.stateNode.containerInfo;if(o===l)break;if(r===4)for(r=e.return;r!==null;){var d=r.tag;if((d===3||d===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;o!==null;){if(r=Ka(o),r===null)return;if(d=r.tag,d===5||d===6||d===26||d===27){e=i=r;continue n}o=o.parentNode}}e=e.return}ac(function(){var p=i,O=Eu(a),_=[];n:{var y=Nc.get(n);if(y!==void 0){var x=$l,W=n;switch(n){case"keypress":if(Jl(a)===0)break n;case"keydown":case"keyup":x=k0;break;case"focusin":W="focus",x=Nu;break;case"focusout":W="blur",x=Nu;break;case"beforeblur":case"afterblur":x=Nu;break;case"click":if(a.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=q0;break;case zc:case _c:case Mc:x=T0;break;case Dc:x=j0;break;case"scroll":case"scrollend":x=g0;break;case"wheel":x=Y0;break;case"copy":case"cut":case"paste":x=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=rc;break;case"toggle":case"beforetoggle":x=X0}var V=(t&4)!==0,yn=!V&&(n==="scroll"||n==="scrollend"),m=V?y!==null?y+"Capture":null:y;V=[];for(var b=p,v;b!==null;){var z=b;if(v=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||v===null||m===null||(z=Xe(b,m),z!=null&&V.push(Tl(b,z,v))),yn)break;b=b.return}0<V.length&&(y=new x(y,W,null,a,O),_.push({event:y,listeners:V}))}}if((t&7)===0){n:{if(y=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",y&&a!==Tu&&(W=a.relatedTarget||a.fromElement)&&(Ka(W)||W[Va]))break n;if((x||y)&&(y=O.window===O?O:(y=O.ownerDocument)?y.defaultView||y.parentWindow:window,x?(W=a.relatedTarget||a.toElement,x=p,W=W?Ka(W):null,W!==null&&(yn=E(W),V=W.tag,W!==yn||V!==5&&V!==27&&V!==6)&&(W=null)):(x=null,W=p),x!==W)){if(V=ic,z="onMouseLeave",m="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(V=rc,z="onPointerLeave",m="onPointerEnter",b="pointer"),yn=x==null?y:Be(x),v=W==null?y:Be(W),y=new V(z,b+"leave",x,a,O),y.target=yn,y.relatedTarget=v,z=null,Ka(O)===p&&(V=new V(m,b+"enter",W,a,O),V.target=v,V.relatedTarget=yn,z=V),yn=z,x&&W)t:{for(V=x,m=W,b=0,v=V;v;v=_e(v))b++;for(v=0,z=m;z;z=_e(z))v++;for(;0<b-v;)V=_e(V),b--;for(;0<v-b;)m=_e(m),v--;for(;b--;){if(V===m||m!==null&&V===m.alternate)break t;V=_e(V),m=_e(m)}V=null}else V=null;x!==null&&Wf(_,y,x,V,!1),W!==null&&yn!==null&&Wf(_,yn,W,V,!0)}}n:{if(y=p?Be(p):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var w=mc;else if(hc(y))if(vc)w=W0;else{w=P0;var en=J0}else x=y.nodeName,!x||x.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?p&&Ou(p.elementType)&&(w=mc):w=$0;if(w&&(w=w(n,p))){bc(_,w,a,O);break n}en&&en(n,y,p),n==="focusout"&&p&&y.type==="number"&&p.memoizedProps.value!=null&&Su(y,"number",y.value)}switch(en=p?Be(p):window,n){case"focusin":(hc(en)||en.contentEditable==="true")&&(ee=en,Cu=p,Pe=null);break;case"focusout":Pe=Cu=ee=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Ec(_,a,O);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":Ec(_,a,O)}var B;if(ku)n:{switch(n){case"compositionstart":var P="onCompositionStart";break n;case"compositionend":P="onCompositionEnd";break n;case"compositionupdate":P="onCompositionUpdate";break n}P=void 0}else ae?fc(n,a)&&(P="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(oc&&a.locale!=="ko"&&(ae||P!=="onCompositionStart"?P==="onCompositionEnd"&&ae&&(B=ec()):(aa=O,_u="value"in aa?aa.value:aa.textContent,ae=!0)),en=ji(p,P),0<en.length&&(P=new uc(P,n,null,a,O),_.push({event:P,listeners:en}),B?P.data=B:(B=dc(a),B!==null&&(P.data=B)))),(B=Q0?Z0(n,a):L0(n,a))&&(P=ji(p,"onBeforeInput"),0<P.length&&(en=new uc("onBeforeInput","beforeinput",null,a,O),_.push({event:en,listeners:P}),en.data=B)),qh(_,n,p,a,O)}Pf(_,t)})}function Tl(n,t,a){return{instance:n,listener:t,currentTarget:a}}function ji(n,t){for(var a=t+"Capture",e=[];n!==null;){var l=n,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Xe(n,a),l!=null&&e.unshift(Tl(n,l,i)),l=Xe(n,t),l!=null&&e.push(Tl(n,l,i))),n.tag===3)return e;n=n.return}return[]}function _e(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Wf(n,t,a,e,l){for(var i=t._reactName,r=[];a!==null&&a!==e;){var o=a,d=o.alternate,p=o.stateNode;if(o=o.tag,d!==null&&d===e)break;o!==5&&o!==26&&o!==27||p===null||(d=p,l?(p=Xe(a,i),p!=null&&r.unshift(Tl(a,p,d))):l||(p=Xe(a,i),p!=null&&r.push(Tl(a,p,d)))),a=a.return}r.length!==0&&n.push({event:t,listeners:r})}var Yh=/\r\n?/g,Bh=/\u0000|\uFFFD/g;function Ff(n){return(typeof n=="string"?n:""+n).replace(Yh,`
`).replace(Bh,"")}function If(n,t){return t=Ff(t),Ff(n)===t}function wi(){}function gn(n,t,a,e,l,i){switch(a){case"children":typeof e=="string"?t==="body"||t==="textarea"&&e===""||Ia(n,e):(typeof e=="number"||typeof e=="bigint")&&t!=="body"&&Ia(n,""+e);break;case"className":Ql(n,"class",e);break;case"tabIndex":Ql(n,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Ql(n,a,e);break;case"style":nc(n,e,i);break;case"data":if(t!=="object"){Ql(n,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||a!=="href")){n.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){n.removeAttribute(a);break}e=Vl(""+e),n.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&gn(n,t,"name",l.name,l,null),gn(n,t,"formEncType",l.formEncType,l,null),gn(n,t,"formMethod",l.formMethod,l,null),gn(n,t,"formTarget",l.formTarget,l,null)):(gn(n,t,"encType",l.encType,l,null),gn(n,t,"method",l.method,l,null),gn(n,t,"target",l.target,l,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){n.removeAttribute(a);break}e=Vl(""+e),n.setAttribute(a,e);break;case"onClick":e!=null&&(n.onclick=wi);break;case"onScroll":e!=null&&un("scroll",n);break;case"onScrollEnd":e!=null&&un("scrollend",n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(c(61));if(a=e.__html,a!=null){if(l.children!=null)throw Error(c(60));n.innerHTML=a}}break;case"multiple":n.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":n.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){n.removeAttribute("xlink:href");break}a=Vl(""+e),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?n.setAttribute(a,""+e):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":e===!0?n.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?n.setAttribute(a,e):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?n.setAttribute(a,e):n.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?n.removeAttribute(a):n.setAttribute(a,e);break;case"popover":un("beforetoggle",n),un("toggle",n),Gl(n,"popover",e);break;case"xlinkActuate":Ct(n,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Ct(n,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Ct(n,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Ct(n,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Ct(n,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Ct(n,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Ct(n,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Ct(n,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Ct(n,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Gl(n,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=v0.get(a)||a,Gl(n,a,e))}}function uo(n,t,a,e,l,i){switch(a){case"style":nc(n,e,i);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(c(61));if(a=e.__html,a!=null){if(l.children!=null)throw Error(c(60));n.innerHTML=a}}break;case"children":typeof e=="string"?Ia(n,e):(typeof e=="number"||typeof e=="bigint")&&Ia(n,""+e);break;case"onScroll":e!=null&&un("scroll",n);break;case"onScrollEnd":e!=null&&un("scrollend",n);break;case"onClick":e!=null&&(n.onclick=wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))n:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=n[In]||null,i=i!=null?i[a]:null,typeof i=="function"&&n.removeEventListener(t,i,l),typeof e=="function")){typeof i!="function"&&i!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(t,e,l);break n}a in n?n[a]=e:e===!0?n.setAttribute(a,""):Gl(n,a,e)}}}function Vn(n,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":un("error",n),un("load",n);var e=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":e=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:gn(n,t,i,r,a,null)}}l&&gn(n,t,"srcSet",a.srcSet,a,null),e&&gn(n,t,"src",a.src,a,null);return;case"input":un("invalid",n);var o=i=r=l=null,d=null,p=null;for(e in a)if(a.hasOwnProperty(e)){var O=a[e];if(O!=null)switch(e){case"name":l=O;break;case"type":r=O;break;case"checked":d=O;break;case"defaultChecked":p=O;break;case"value":i=O;break;case"defaultValue":o=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:gn(n,t,e,O,a,null)}}$o(n,i,o,d,p,r,l,!1),Zl(n);return;case"select":un("invalid",n),e=r=i=null;for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"value":i=o;break;case"defaultValue":r=o;break;case"multiple":e=o;default:gn(n,t,l,o,a,null)}t=i,a=r,n.multiple=!!e,t!=null?Fa(n,!!e,t,!1):a!=null&&Fa(n,!!e,a,!0);return;case"textarea":un("invalid",n),i=l=e=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":e=o;break;case"defaultValue":l=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:gn(n,t,r,o,a,null)}Fo(n,e,l,i),Zl(n);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(e=a[d],e!=null))switch(d){case"selected":n.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:gn(n,t,d,e,a,null)}return;case"dialog":un("beforetoggle",n),un("toggle",n),un("cancel",n),un("close",n);break;case"iframe":case"object":un("load",n);break;case"video":case"audio":for(e=0;e<Ol.length;e++)un(Ol[e],n);break;case"image":un("error",n),un("load",n);break;case"details":un("toggle",n);break;case"embed":case"source":case"link":un("error",n),un("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(e=a[p],e!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:gn(n,t,p,e,a,null)}return;default:if(Ou(t)){for(O in a)a.hasOwnProperty(O)&&(e=a[O],e!==void 0&&uo(n,t,O,e,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(e=a[o],e!=null&&gn(n,t,o,e,a,null))}function Xh(n,t,a,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,r=null,o=null,d=null,p=null,O=null;for(x in a){var _=a[x];if(a.hasOwnProperty(x)&&_!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":d=_;default:e.hasOwnProperty(x)||gn(n,t,x,null,e,_)}}for(var y in e){var x=e[y];if(_=a[y],e.hasOwnProperty(y)&&(x!=null||_!=null))switch(y){case"type":i=x;break;case"name":l=x;break;case"checked":p=x;break;case"defaultChecked":O=x;break;case"value":r=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(c(137,t));break;default:x!==_&&gn(n,t,y,x,e,_)}}xu(n,r,o,d,p,O,i,l);return;case"select":x=r=o=y=null;for(i in a)if(d=a[i],a.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":x=d;default:e.hasOwnProperty(i)||gn(n,t,i,null,e,d)}for(l in e)if(i=e[l],d=a[l],e.hasOwnProperty(l)&&(i!=null||d!=null))switch(l){case"value":y=i;break;case"defaultValue":o=i;break;case"multiple":r=i;default:i!==d&&gn(n,t,l,i,e,d)}t=o,a=r,e=x,y!=null?Fa(n,!!a,y,!1):!!e!=!!a&&(t!=null?Fa(n,!!a,t,!0):Fa(n,!!a,a?[]:"",!1));return;case"textarea":x=y=null;for(o in a)if(l=a[o],a.hasOwnProperty(o)&&l!=null&&!e.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:gn(n,t,o,null,e,l)}for(r in e)if(l=e[r],i=a[r],e.hasOwnProperty(r)&&(l!=null||i!=null))switch(r){case"value":y=l;break;case"defaultValue":x=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&gn(n,t,r,l,e,i)}Wo(n,y,x);return;case"option":for(var W in a)if(y=a[W],a.hasOwnProperty(W)&&y!=null&&!e.hasOwnProperty(W))switch(W){case"selected":n.selected=!1;break;default:gn(n,t,W,null,e,y)}for(d in e)if(y=e[d],x=a[d],e.hasOwnProperty(d)&&y!==x&&(y!=null||x!=null))switch(d){case"selected":n.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:gn(n,t,d,y,e,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in a)y=a[V],a.hasOwnProperty(V)&&y!=null&&!e.hasOwnProperty(V)&&gn(n,t,V,null,e,y);for(p in e)if(y=e[p],x=a[p],e.hasOwnProperty(p)&&y!==x&&(y!=null||x!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(c(137,t));break;default:gn(n,t,p,y,e,x)}return;default:if(Ou(t)){for(var yn in a)y=a[yn],a.hasOwnProperty(yn)&&y!==void 0&&!e.hasOwnProperty(yn)&&uo(n,t,yn,void 0,e,y);for(O in e)y=e[O],x=a[O],!e.hasOwnProperty(O)||y===x||y===void 0&&x===void 0||uo(n,t,O,y,e,x);return}}for(var m in a)y=a[m],a.hasOwnProperty(m)&&y!=null&&!e.hasOwnProperty(m)&&gn(n,t,m,null,e,y);for(_ in e)y=e[_],x=a[_],!e.hasOwnProperty(_)||y===x||y==null&&x==null||gn(n,t,_,y,e,x)}var ro=null,oo=null;function Yi(n){return n.nodeType===9?n:n.ownerDocument}function nd(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function td(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function co(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var so=null;function Gh(){var n=window.event;return n&&n.type==="popstate"?n===so?!1:(so=n,!0):(so=null,!1)}var ad=typeof setTimeout=="function"?setTimeout:void 0,Qh=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,Zh=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(n){return ed.resolve(null).then(n).catch(Lh)}:ad;function Lh(n){setTimeout(function(){throw n})}function ga(n){return n==="head"}function ld(n,t){var a=t,e=0,l=0;do{var i=a.nextSibling;if(n.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<e&&8>e){a=e;var r=n.ownerDocument;if(a&1&&El(r.documentElement),a&2&&El(r.body),a&4)for(a=r.head,El(a),r=a.firstChild;r;){var o=r.nextSibling,d=r.nodeName;r[Ye]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}if(l===0){n.removeChild(i),kl(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:e=a.charCodeAt(0)-48;else e=0;a=i}while(a);kl(t)}function fo(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fo(a),vu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function Vh(n,t,a,e){for(;n.nodeType===1;){var l=a;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(e){if(!n[Ye])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==l.rel||n.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=_t(n.nextSibling),n===null)break}return null}function Kh(n,t,a){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=_t(n.nextSibling),n===null))return null;return n}function ho(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Jh(n,t){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")t();else{var e=function(){t(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),n._reactRetry=e}}function _t(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return n}var bo=null;function id(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return n;t--}else a==="/$"&&t++}n=n.previousSibling}return null}function ud(n,t,a){switch(t=Yi(a),n){case"html":if(n=t.documentElement,!n)throw Error(c(452));return n;case"head":if(n=t.head,!n)throw Error(c(453));return n;case"body":if(n=t.body,!n)throw Error(c(454));return n;default:throw Error(c(451))}}function El(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);vu(n)}var Tt=new Map,rd=new Set;function Bi(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var $t=q.d;q.d={f:Ph,r:$h,D:Wh,C:Fh,L:Ih,m:nb,X:ab,S:tb,M:eb};function Ph(){var n=$t.f(),t=Ri();return n||t}function $h(n){var t=Ja(n);t!==null&&t.tag===5&&t.type==="form"?zs(t):$t.r(n)}var Me=typeof document>"u"?null:document;function od(n,t,a){var e=Me;if(e&&typeof t=="string"&&t){var l=vt(t);l='link[rel="'+n+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),rd.has(l)||(rd.add(l),n={rel:n,crossOrigin:a,href:t},e.querySelector(l)===null&&(t=e.createElement("link"),Vn(t,"link",n),Bn(t),e.head.appendChild(t)))}}function Wh(n){$t.D(n),od("dns-prefetch",n,null)}function Fh(n,t){$t.C(n,t),od("preconnect",n,t)}function Ih(n,t,a){$t.L(n,t,a);var e=Me;if(e&&n&&t){var l='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+vt(a.imageSizes)+'"]')):l+='[href="'+vt(n)+'"]';var i=l;switch(t){case"style":i=De(n);break;case"script":i=Ne(n)}Tt.has(i)||(n=R({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:n,as:t},a),Tt.set(i,n),e.querySelector(l)!==null||t==="style"&&e.querySelector(Al(i))||t==="script"&&e.querySelector(zl(i))||(t=e.createElement("link"),Vn(t,"link",n),Bn(t),e.head.appendChild(t)))}}function nb(n,t){$t.m(n,t);var a=Me;if(a&&n){var e=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+vt(e)+'"][href="'+vt(n)+'"]',i=l;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ne(n)}if(!Tt.has(i)&&(n=R({rel:"modulepreload",href:n},t),Tt.set(i,n),a.querySelector(l)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zl(i)))return}e=a.createElement("link"),Vn(e,"link",n),Bn(e),a.head.appendChild(e)}}}function tb(n,t,a){$t.S(n,t,a);var e=Me;if(e&&n){var l=Pa(e).hoistableStyles,i=De(n);t=t||"default";var r=l.get(i);if(!r){var o={loading:0,preload:null};if(r=e.querySelector(Al(i)))o.loading=5;else{n=R({rel:"stylesheet",href:n,"data-precedence":t},a),(a=Tt.get(i))&&mo(n,a);var d=r=e.createElement("link");Bn(d),Vn(d,"link",n),d._p=new Promise(function(p,O){d.onload=p,d.onerror=O}),d.addEventListener("load",function(){o.loading|=1}),d.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Xi(r,t,e)}r={type:"stylesheet",instance:r,count:1,state:o},l.set(i,r)}}}function ab(n,t){$t.X(n,t);var a=Me;if(a&&n){var e=Pa(a).hoistableScripts,l=Ne(n),i=e.get(l);i||(i=a.querySelector(zl(l)),i||(n=R({src:n,async:!0},t),(t=Tt.get(l))&&vo(n,t),i=a.createElement("script"),Bn(i),Vn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(l,i))}}function eb(n,t){$t.M(n,t);var a=Me;if(a&&n){var e=Pa(a).hoistableScripts,l=Ne(n),i=e.get(l);i||(i=a.querySelector(zl(l)),i||(n=R({src:n,async:!0,type:"module"},t),(t=Tt.get(l))&&vo(n,t),i=a.createElement("script"),Bn(i),Vn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(l,i))}}function cd(n,t,a,e){var l=(l=I.current)?Bi(l):null;if(!l)throw Error(c(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=De(a.href),a=Pa(l).hoistableStyles,e=a.get(t),e||(e={type:"style",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=De(a.href);var i=Pa(l).hoistableStyles,r=i.get(n);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,r),(i=l.querySelector(Al(n)))&&!i._p&&(r.instance=i,r.state.loading=5),Tt.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(n,a),i||lb(l,n,a,r.state))),t&&e===null)throw Error(c(528,""));return r}if(t&&e!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ne(a),a=Pa(l).hoistableScripts,e=a.get(t),e||(e={type:"script",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,n))}}function De(n){return'href="'+vt(n)+'"'}function Al(n){return'link[rel="stylesheet"]['+n+"]"}function sd(n){return R({},n,{"data-precedence":n.precedence,precedence:null})}function lb(n,t,a,e){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?e.loading=1:(t=n.createElement("link"),e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2}),Vn(t,"link",a),Bn(t),n.head.appendChild(t))}function Ne(n){return'[src="'+vt(n)+'"]'}function zl(n){return"script[async]"+n}function fd(n,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var e=n.querySelector('style[data-href~="'+vt(a.href)+'"]');if(e)return t.instance=e,Bn(e),e;var l=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(n.ownerDocument||n).createElement("style"),Bn(e),Vn(e,"style",l),Xi(e,a.precedence,n),t.instance=e;case"stylesheet":l=De(a.href);var i=n.querySelector(Al(l));if(i)return t.state.loading|=4,t.instance=i,Bn(i),i;e=sd(a),(l=Tt.get(l))&&mo(e,l),i=(n.ownerDocument||n).createElement("link"),Bn(i);var r=i;return r._p=new Promise(function(o,d){r.onload=o,r.onerror=d}),Vn(i,"link",e),t.state.loading|=4,Xi(i,a.precedence,n),t.instance=i;case"script":return i=Ne(a.src),(l=n.querySelector(zl(i)))?(t.instance=l,Bn(l),l):(e=a,(l=Tt.get(i))&&(e=R({},a),vo(e,l)),n=n.ownerDocument||n,l=n.createElement("script"),Bn(l),Vn(l,"link",e),n.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,Xi(e,a.precedence,n));return t.instance}function Xi(n,t,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=e.length?e[e.length-1]:null,i=l,r=0;r<e.length;r++){var o=e[r];if(o.dataset.precedence===t)i=o;else if(i!==l)break}i?i.parentNode.insertBefore(n,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(n,t.firstChild))}function mo(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function vo(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var Gi=null;function dd(n,t,a){if(Gi===null){var e=new Map,l=Gi=new Map;l.set(a,e)}else l=Gi,e=l.get(a),e||(e=new Map,l.set(a,e));if(e.has(n))return e;for(e.set(n,null),a=a.getElementsByTagName(n),l=0;l<a.length;l++){var i=a[l];if(!(i[Ye]||i[Pn]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=n+r;var o=e.get(r);o?o.push(i):e.set(r,[i])}}return e}function hd(n,t,a){n=n.ownerDocument||n,n.head.insertBefore(a,t==="title"?n.querySelector("head > title"):null)}function ib(n,t,a){if(a===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bd(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var _l=null;function ub(){}function rb(n,t,a){if(_l===null)throw Error(c(475));var e=_l;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=De(a.href),i=n.querySelector(Al(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Qi.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=i,Bn(i);return}i=n.ownerDocument||n,a=sd(a),(l=Tt.get(l))&&mo(a,l),i=i.createElement("link"),Bn(i);var r=i;r._p=new Promise(function(o,d){r.onload=o,r.onerror=d}),Vn(i,"link",a),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Qi.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}function ob(){if(_l===null)throw Error(c(475));var n=_l;return n.stylesheets&&n.count===0&&po(n,n.stylesheets),0<n.count?function(t){var a=setTimeout(function(){if(n.stylesheets&&po(n,n.stylesheets),n.unsuspend){var e=n.unsuspend;n.unsuspend=null,e()}},6e4);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Qi(){if(this.count--,this.count===0){if(this.stylesheets)po(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Zi=null;function po(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Zi=new Map,t.forEach(cb,n),Zi=null,Qi.call(n))}function cb(n,t){if(!(t.state.loading&4)){var a=Zi.get(n);if(a)var e=a.get(null);else{a=new Map,Zi.set(n,a);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var r=l[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),e=r)}e&&a.set(null,e)}l=t.instance,r=l.getAttribute("data-precedence"),i=a.get(r)||e,i===e&&a.set(null,l),a.set(r,l),this.count++,e=Qi.bind(this),l.addEventListener("load",e),l.addEventListener("error",e),i?i.parentNode.insertBefore(l,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),t.state.loading|=4}}var Ml={$$typeof:dn,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function sb(n,t,a,e,l,i,r,o){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=du(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.hiddenUpdates=du(null),this.identifierPrefix=e,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function md(n,t,a,e,l,i,r,o,d,p,O,_){return n=new sb(n,t,a,r,o,d,p,_),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),n.current=i,i.stateNode=n,t=Wu(),t.refCount++,n.pooledCache=t,t.refCount++,i.memoizedState={element:e,isDehydrated:a,cache:t},tr(i),n}function vd(n){return n?(n=re,n):re}function pd(n,t,a,e,l,i){l=vd(l),e.context===null?e.context=l:e.pendingContext=l,e=ia(t),e.payload={element:a},i=i===void 0?null:i,i!==null&&(e.callback=i),a=ua(n,e,t),a!==null&&(ht(a,n,t),ll(a,n,t))}function gd(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<t?a:t}}function go(n,t){gd(n,t),(n=n.alternate)&&gd(n,t)}function yd(n){if(n.tag===13){var t=ue(n,67108864);t!==null&&ht(t,n,67108864),go(n,67108864)}}var Li=!0;function fb(n,t,a,e){var l=A.T;A.T=null;var i=q.p;try{q.p=2,yo(n,t,a,e)}finally{q.p=i,A.T=l}}function db(n,t,a,e){var l=A.T;A.T=null;var i=q.p;try{q.p=8,yo(n,t,a,e)}finally{q.p=i,A.T=l}}function yo(n,t,a,e){if(Li){var l=xo(e);if(l===null)io(n,t,e,Vi,a),Sd(n,e);else if(bb(l,n,t,a,e))e.stopPropagation();else if(Sd(n,e),t&4&&-1<hb.indexOf(n)){for(;l!==null;){var i=Ja(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=_a(i.pendingLanes);if(r!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var d=1<<31-ut(r);o.entanglements[1]|=d,r&=~d}qt(i),(bn&6)===0&&(Di=Nt()+500,Sl(0))}}break;case 13:o=ue(i,2),o!==null&&ht(o,i,2),Ri(),go(i,2)}if(i=xo(e),i===null&&io(n,t,e,Vi,a),i===l)break;l=i}l!==null&&e.stopPropagation()}else io(n,t,e,null,a)}}function xo(n){return n=Eu(n),So(n)}var Vi=null;function So(n){if(Vi=null,n=Ka(n),n!==null){var t=E(n);if(t===null)n=null;else{var a=t.tag;if(a===13){if(n=N(t),n!==null)return n;n=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return Vi=n,null}function xd(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fd()){case Uo:return 2;case Ho:return 8;case wl:case Id:return 32;case qo:return 268435456;default:return 32}default:return 32}}var Oo=!1,ya=null,xa=null,Sa=null,Dl=new Map,Nl=new Map,Oa=[],hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sd(n,t){switch(n){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":Dl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(t.pointerId)}}function Rl(n,t,a,e,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:t,domEventName:a,eventSystemFlags:e,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Ja(t),t!==null&&yd(t)),n):(n.eventSystemFlags|=e,t=n.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),n)}function bb(n,t,a,e,l){switch(t){case"focusin":return ya=Rl(ya,n,t,a,e,l),!0;case"dragenter":return xa=Rl(xa,n,t,a,e,l),!0;case"mouseover":return Sa=Rl(Sa,n,t,a,e,l),!0;case"pointerover":var i=l.pointerId;return Dl.set(i,Rl(Dl.get(i)||null,n,t,a,e,l)),!0;case"gotpointercapture":return i=l.pointerId,Nl.set(i,Rl(Nl.get(i)||null,n,t,a,e,l)),!0}return!1}function Od(n){var t=Ka(n.target);if(t!==null){var a=E(t);if(a!==null){if(t=a.tag,t===13){if(t=N(a),t!==null){n.blockedOn=t,r0(n.priority,function(){if(a.tag===13){var e=dt();e=hu(e);var l=ue(a,e);l!==null&&ht(l,a,e),go(a,e)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ki(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var a=xo(n.nativeEvent);if(a===null){a=n.nativeEvent;var e=new a.constructor(a.type,a);Tu=e,a.target.dispatchEvent(e),Tu=null}else return t=Ja(a),t!==null&&yd(t),n.blockedOn=a,!1;t.shift()}return!0}function Td(n,t,a){Ki(n)&&a.delete(t)}function mb(){Oo=!1,ya!==null&&Ki(ya)&&(ya=null),xa!==null&&Ki(xa)&&(xa=null),Sa!==null&&Ki(Sa)&&(Sa=null),Dl.forEach(Td),Nl.forEach(Td)}function Ji(n,t){n.blockedOn===t&&(n.blockedOn=null,Oo||(Oo=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,mb)))}var Pi=null;function Ed(n){Pi!==n&&(Pi=n,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Pi===n&&(Pi=null);for(var t=0;t<n.length;t+=3){var a=n[t],e=n[t+1],l=n[t+2];if(typeof e!="function"){if(So(e||a)===null)continue;break}var i=Ja(a);i!==null&&(n.splice(t,3),t-=3,xr(i,{pending:!0,data:l,method:a.method,action:e},e,l))}}))}function kl(n){function t(d){return Ji(d,n)}ya!==null&&Ji(ya,n),xa!==null&&Ji(xa,n),Sa!==null&&Ji(Sa,n),Dl.forEach(t),Nl.forEach(t);for(var a=0;a<Oa.length;a++){var e=Oa[a];e.blockedOn===n&&(e.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)Od(a),a.blockedOn===null&&Oa.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var l=a[e],i=a[e+1],r=l[In]||null;if(typeof i=="function")r||Ed(a);else if(r){var o=null;if(i&&i.hasAttribute("formAction")){if(l=i,r=i[In]||null)o=r.formAction;else if(So(l)!==null)continue}else o=r.action;typeof o=="function"?a[e+1]=o:(a.splice(e,3),e-=3),Ed(a)}}}function To(n){this._internalRoot=n}$i.prototype.render=To.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,e=dt();pd(a,e,n,t,null,null)},$i.prototype.unmount=To.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;pd(n.current,2,null,n,null,null),Ri(),t[Va]=null}};function $i(n){this._internalRoot=n}$i.prototype.unstable_scheduleHydration=function(n){if(n){var t=Bo();n={blockedOn:null,target:n,priority:t};for(var a=0;a<Oa.length&&t!==0&&t<Oa[a].priority;a++);Oa.splice(a,0,n),a===0&&Od(n)}};var Ad=s.version;if(Ad!=="19.1.0")throw Error(c(527,Ad,"19.1.0"));q.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(c(188)):(n=Object.keys(n).join(","),Error(c(268,n)));return n=T(t),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var vb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Ce=Wi.inject(vb),it=Wi}catch{}}return Hl.createRoot=function(n,t){if(!S(n))throw Error(c(299));var a=!1,e="",l=Bs,i=Xs,r=Gs,o=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=md(n,1,!1,null,null,a,e,l,i,r,o,null),n[Va]=t.current,lo(n),new To(t)},Hl.hydrateRoot=function(n,t,a){if(!S(n))throw Error(c(299));var e=!1,l="",i=Bs,r=Xs,o=Gs,d=null,p=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(d=a.unstable_transitionCallbacks),a.formState!==void 0&&(p=a.formState)),t=md(n,1,!0,t,a??null,e,l,i,r,o,d,p),t.context=vd(null),a=t.current,e=dt(),e=hu(e),l=ia(e),l.callback=null,ua(a,l,e),a=e,t.current.lanes=a,we(t,a),qt(t),n[Va]=t.current,lo(n),new $i(t)},Hl.version="19.1.0",Hl}var qd;function _b(){if(qd)return zo.exports;qd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),zo.exports=zb(),zo.exports}var Mb=_b();const La="http://ec2-3-106-122-62.ap-southeast-2.compute.amazonaws.com:8080",Db=async()=>{try{const u=await fetch(`${La}/todos?completed=false`);if(!u.ok)throw new Error(`Error fetching todos: ${u.status}`);return await u.json()}catch(u){throw console.error("Failed to fetch todos:",u),u}},Ld=async u=>{const s=await fetch(`${La}/todos`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!s.ok)throw new Error(`Error: ${s.status}`);return await s.json()},Nb=async u=>{const s=await fetch(`${La}/todos/${u}`,{method:"DELETE"});if(!s.ok)throw new Error(`Failed to delete todo ${u}: ${s.status}`)},Rb=async(u,s)=>{const f=await fetch(`${La}/todos/${u}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!f.ok)throw new Error(`Error updating todo: ${f.status}`);return await f.json()},kb=async()=>{try{const u=await fetch(`${La}/categories`);if(!u.ok)throw new Error(`Error fetching categories: ${u.status}`);return await u.json()}catch(u){throw console.error("Failed to fetch categories:",u),u}},Ub=async u=>{const s=await fetch(`${La}/categories`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!s.ok)throw new Error(`Error: ${s.status}`);return await s.json()},Hb=async u=>{if(!(await fetch(`${La}/categories/${u}`,{method:"DELETE"})).ok)throw new Error("Failed to delete category")};var Vd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cd=rn.createContext&&rn.createContext(Vd),qb=["attr","size","title"];function Cb(u,s){if(u==null)return{};var f=jb(u,s),c,S;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(u);for(S=0;S<E.length;S++)c=E[S],!(s.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(u,c)&&(f[c]=u[c])}return f}function jb(u,s){if(u==null)return{};var f={};for(var c in u)if(Object.prototype.hasOwnProperty.call(u,c)){if(s.indexOf(c)>=0)continue;f[c]=u[c]}return f}function nu(){return nu=Object.assign?Object.assign.bind():function(u){for(var s=1;s<arguments.length;s++){var f=arguments[s];for(var c in f)Object.prototype.hasOwnProperty.call(f,c)&&(u[c]=f[c])}return u},nu.apply(this,arguments)}function jd(u,s){var f=Object.keys(u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(u);s&&(c=c.filter(function(S){return Object.getOwnPropertyDescriptor(u,S).enumerable})),f.push.apply(f,c)}return f}function tu(u){for(var s=1;s<arguments.length;s++){var f=arguments[s]!=null?arguments[s]:{};s%2?jd(Object(f),!0).forEach(function(c){wb(u,c,f[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(f)):jd(Object(f)).forEach(function(c){Object.defineProperty(u,c,Object.getOwnPropertyDescriptor(f,c))})}return u}function wb(u,s,f){return s=Yb(s),s in u?Object.defineProperty(u,s,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[s]=f,u}function Yb(u){var s=Bb(u,"string");return typeof s=="symbol"?s:s+""}function Bb(u,s){if(typeof u!="object"||!u)return u;var f=u[Symbol.toPrimitive];if(f!==void 0){var c=f.call(u,s);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(u)}function Kd(u){return u&&u.map((s,f)=>rn.createElement(s.tag,tu({key:f},s.attr),Kd(s.child)))}function qe(u){return s=>rn.createElement(Xb,nu({attr:tu({},u.attr)},s),Kd(u.child))}function Xb(u){var s=f=>{var{attr:c,size:S,title:E}=u,N=Cb(u,qb),G=S||f.size||"1em",T;return f.className&&(T=f.className),u.className&&(T=(T?T+" ":"")+u.className),rn.createElement("svg",nu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},f.attr,c,N,{className:T,style:tu(tu({color:u.color||f.color},f.style),u.style),height:G,width:G,xmlns:"http://www.w3.org/2000/svg"}),E&&rn.createElement("title",null,E),u.children)};return Cd!==void 0?rn.createElement(Cd.Consumer,null,f=>s(f)):s(Vd)}function Gb(u){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(u)}const Qb=({isOpen:u,onClose:s,title:f,children:c})=>{const[S,E]=Un.useState(!1);return Un.useEffect(()=>{u?setTimeout(()=>E(!0),10):E(!1)},[u]),u?D.jsxs("div",{className:`
            fixed inset-0 z-50 flex items-center justify-center p-4
            transition-all duration-300 ease-out
            ${S?"opacity-100":"opacity-0"}
        `,children:[D.jsx("div",{className:`
                    absolute inset-0  backdrop-blur-sm
                    transition-all ease-in-out duration-300
					${S?"bg-gray-800":"bg-transparent"}
                `,onClick:s}),D.jsxs("div",{className:"relative z-10 bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border-5 border-purple-500 no-scrollbar h-[800px] ",children:[D.jsxs("div",{className:"flex justify-between items-center p-6 border-b border-gray-100",children:[D.jsx("h2",{className:"text-2xl font-semibold text-gray-800",children:f}),D.jsx("button",{onClick:s,className:"text-gray-400 hover:text-gray-600 text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors",children:D.jsx(Gb,{className:"w-6 h-6"})})]}),D.jsx("div",{className:"p-6",children:c})]})]}):null};function Zb({variant:u="PRIMARY",children:s,className:f="",...c}){const N=`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${{PRIMARY:"bg-blue-600 text-white hover:bg-blue-700",SECONDARY:"bg-gray-200 text-gray-900 hover:bg-gray-300",SUCCESS:"bg-green-600 text-white hover:bg-green-700",DANGER:"bg-red-600 text-white hover:bg-red-700",WARNING:"bg-yellow-500 text-white hover:bg-yellow-600"}[u]} ${f}`;return D.jsx("button",{className:N,...c,children:s})}function Lb({onSuccess:u,onClose:s,initialData:f}){const[c,S]=Un.useState({id:f==null?void 0:f.id,name:(f==null?void 0:f.name)??"",dueDate:(f==null?void 0:f.dueDate)??"",isCompleted:(f==null?void 0:f.isCompleted)??!1,categoryIds:(f==null?void 0:f.todoCategories.map(Q=>Q.category.id))??[]}),[E,N]=Un.useState(!1),[G,T]=Un.useState([]),[g,R]=Un.useState(!0),[Y,C]=Un.useState(""),[on,Z]=Un.useState(!1),[k,K]=Un.useState("");Un.useEffect(()=>{(async()=>{try{const U=await kb();T(U)}catch(U){console.error("Failed to fetch categories:",U)}finally{R(!1)}})()},[]),Un.useEffect(()=>{f&&S({id:f.id,name:f.name,dueDate:f.dueDate,isCompleted:f.isCompleted,categoryIds:f.todoCategories.map(Q=>Q.category.id)??[]})},[f]);const Yn=async Q=>{if(Q.preventDefault(),!(!c.name.trim()||!c.dueDate)){N(!0);try{c.id?await Rb(c.id,{name:c.name.trim(),dueDate:c.dueDate,isCompleted:c.isCompleted,categoryIds:c.categoryIds}):await Ld({name:c.name.trim(),dueDate:c.dueDate,isCompleted:c.isCompleted,categoryIds:c.categoryIds}),u(),s()}catch(U){console.error("Failed to create todo:",U)}finally{N(!1)}}},Mn=Q=>{const{name:U,value:J,type:tn,checked:Ft}=Q.target;S(Et=>({...Et,[U]:tn==="checkbox"?Ft:J}))},dn=Q=>{S(U=>({...U,categoryIds:U.categoryIds.includes(Q)?U.categoryIds.filter(J=>J!==Q):[...U.categoryIds,Q]}))},Tn=async()=>{if(!Y.trim())return;if(K(""),G.some(U=>U.name.toLowerCase()===Y.trim().toLowerCase())){K("Category already exists!");return}Z(!0);try{const U=await Ub({name:Y.trim()});T(J=>[...J,U]),S(J=>({...J,categoryIds:[...J.categoryIds,U.id]})),C("")}catch(U){K("Failed to create category. Please try again."+U)}finally{Z(!1)}},F=async Q=>{try{await Hb(Q),T(U=>U.filter(J=>J.id!==Q)),S(U=>({...U,categoryIds:U.categoryIds.filter(J=>J!==Q)}))}catch(U){console.error("Failed to delete category:",U)}};return D.jsxs("form",{onSubmit:Yn,className:"space-y-4",children:[D.jsxs("div",{children:[D.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Task Name"}),D.jsx("input",{type:"text",name:"name",value:c.name,onChange:Mn,required:!0,className:"w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500  outline-none transition-all duration-200 text-gray-900",placeholder:"Enter task name"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Due Date"}),D.jsx("input",{type:"date",name:"dueDate",value:c.dueDate,onChange:Mn,required:!0,className:"w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500  outline-none transition-all duration-200 text-gray-900"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Categories"}),D.jsx("div",{className:"min-h-[120px]",children:g?D.jsx("div",{className:"flex items-center justify-center ",children:D.jsx("p",{className:"text-sm text-gray-500",children:"Loading categories..."})}):D.jsx("div",{className:"space-y-2 max-h-[190px] overflow-y-auto no-scrollbar",children:G.map(Q=>D.jsxs("label",{className:"flex items-center justify-between p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx("input",{type:"checkbox",checked:c.categoryIds.includes(Q.id),onChange:()=>dn(Q.id),className:"w-4 h-4 accent-purple-500 bg-gray-100 border-gray-300 rounded"}),D.jsx("span",{className:"text-gray-700",children:Q.name})]}),D.jsx("button",{type:"button",onClick:()=>F(Q.id),className:"text-red-400 hover:text-red-600 text-sm font-bold px-2 py-1 rounded-lg hover:bg-red-100 transition-colors duration-200",children:"Delete"})]},Q.id))})}),D.jsxs("div",{className:"mt-3 pt-3 border-t border-purple-900",children:[D.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Create New Category"}),D.jsxs("div",{className:"flex gap-2",children:[D.jsx("input",{type:"text",value:Y,onChange:Q=>{C(Q.target.value),K("")},onKeyDown:Q=>{Q.key==="Enter"&&(Q.preventDefault(),Tn())},placeholder:"New Category name",className:"w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500  outline-none transition-all duration-200 text-gray-900"}),D.jsx(Zb,{type:"button",onClick:Tn,disabled:!Y.trim()||on,className:"px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",children:on?"Creating category...":"Add"})]}),k&&D.jsx("p",{className:"text-red-500 text-sm mt-1",children:k})]})]}),D.jsxs("label",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-200",children:[D.jsx("input",{type:"checkbox",name:"isCompleted",checked:c.isCompleted,disabled:!c.id,onChange:Mn,className:"w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 transition-colors duration-200"}),D.jsx("span",{className:"text-gray-700",children:"Mark as completed"})]}),D.jsxs("div",{className:"flex gap-3 pt-2",children:[D.jsx("button",{type:"submit",disabled:E,className:"flex-1 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]",children:E?c.id?"Saving...":"Creating...":c.id?"Save Changes":"Create Task"}),D.jsx("button",{type:"button",onClick:s,className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]",children:"Cancel"})]})]})}function Vb(u){return qe({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"},child:[]}]})(u)}function Kb(u){return qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},child:[]},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},child:[]}]})(u)}function Jb(u){return qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(u)}function wn(u,s){s===void 0&&(s={});var f=s.insertAt;if(u&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],S=document.createElement("style");S.type="text/css",f==="top"&&c.firstChild?c.insertBefore(S,c.firstChild):c.appendChild(S),S.styleSheet?S.styleSheet.cssText=u:S.appendChild(document.createTextNode(u))}}wn(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var vn=function(){return vn=Object.assign||function(u){for(var s,f=1,c=arguments.length;f<c;f++)for(var S in s=arguments[f])Object.prototype.hasOwnProperty.call(s,S)&&(u[S]=s[S]);return u},vn.apply(this,arguments)};function au(u){return au=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},au(u)}var Pb=/^\s+/,$b=/\s+$/;function X(u,s){if(s=s||{},(u=u||"")instanceof X)return u;if(!(this instanceof X))return new X(u,s);var f=function(c){var S={r:0,g:0,b:0},E=1,N=null,G=null,T=null,g=!1,R=!1;typeof c=="string"&&(c=function(Z){Z=Z.replace(Pb,"").replace($b,"").toLowerCase();var k,K=!1;if(Ro[Z])Z=Ro[Z],K=!0;else if(Z=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(k=Mt.rgb.exec(Z))?{r:k[1],g:k[2],b:k[3]}:(k=Mt.rgba.exec(Z))?{r:k[1],g:k[2],b:k[3],a:k[4]}:(k=Mt.hsl.exec(Z))?{h:k[1],s:k[2],l:k[3]}:(k=Mt.hsla.exec(Z))?{h:k[1],s:k[2],l:k[3],a:k[4]}:(k=Mt.hsv.exec(Z))?{h:k[1],s:k[2],v:k[3]}:(k=Mt.hsva.exec(Z))?{h:k[1],s:k[2],v:k[3],a:k[4]}:(k=Mt.hex8.exec(Z))?{r:bt(k[1]),g:bt(k[2]),b:bt(k[3]),a:Qd(k[4]),format:K?"name":"hex8"}:(k=Mt.hex6.exec(Z))?{r:bt(k[1]),g:bt(k[2]),b:bt(k[3]),format:K?"name":"hex"}:(k=Mt.hex4.exec(Z))?{r:bt(k[1]+""+k[1]),g:bt(k[2]+""+k[2]),b:bt(k[3]+""+k[3]),a:Qd(k[4]+""+k[4]),format:K?"name":"hex8"}:(k=Mt.hex3.exec(Z))?{r:bt(k[1]+""+k[1]),g:bt(k[2]+""+k[2]),b:bt(k[3]+""+k[3]),format:K?"name":"hex"}:!1}(c)),au(c)=="object"&&(Wt(c.r)&&Wt(c.g)&&Wt(c.b)?(Y=c.r,C=c.g,on=c.b,S={r:255*zn(Y,255),g:255*zn(C,255),b:255*zn(on,255)},g=!0,R=String(c.r).substr(-1)==="%"?"prgb":"rgb"):Wt(c.h)&&Wt(c.s)&&Wt(c.v)?(N=ql(c.s),G=ql(c.v),S=function(Z,k,K){Z=6*zn(Z,360),k=zn(k,100),K=zn(K,100);var Yn=Math.floor(Z),Mn=Z-Yn,dn=K*(1-k),Tn=K*(1-Mn*k),F=K*(1-(1-Mn)*k),Q=Yn%6,U=[K,Tn,dn,dn,F,K][Q],J=[F,K,K,Tn,dn,dn][Q],tn=[dn,dn,F,K,K,Tn][Q];return{r:255*U,g:255*J,b:255*tn}}(c.h,N,G),g=!0,R="hsv"):Wt(c.h)&&Wt(c.s)&&Wt(c.l)&&(N=ql(c.s),T=ql(c.l),S=function(Z,k,K){var Yn,Mn,dn;function Tn(U,J,tn){return tn<0&&(tn+=1),tn>1&&(tn-=1),tn<1/6?U+6*(J-U)*tn:tn<.5?J:tn<2/3?U+(J-U)*(2/3-tn)*6:U}if(Z=zn(Z,360),k=zn(k,100),K=zn(K,100),k===0)Yn=Mn=dn=K;else{var F=K<.5?K*(1+k):K+k-K*k,Q=2*K-F;Yn=Tn(Q,F,Z+1/3),Mn=Tn(Q,F,Z),dn=Tn(Q,F,Z-1/3)}return{r:255*Yn,g:255*Mn,b:255*dn}}(c.h,N,T),g=!0,R="hsl"),c.hasOwnProperty("a")&&(E=c.a));var Y,C,on;return E=Jd(E),{ok:g,format:c.format||R,r:Math.min(255,Math.max(S.r,0)),g:Math.min(255,Math.max(S.g,0)),b:Math.min(255,Math.max(S.b,0)),a:E}}(u);this._originalInput=u,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=Math.round(100*this._a)/100,this._format=s.format||f.format,this._gradientType=s.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=f.ok}function wd(u,s,f){u=zn(u,255),s=zn(s,255),f=zn(f,255);var c,S,E=Math.max(u,s,f),N=Math.min(u,s,f),G=(E+N)/2;if(E==N)c=S=0;else{var T=E-N;switch(S=G>.5?T/(2-E-N):T/(E+N),E){case u:c=(s-f)/T+(s<f?6:0);break;case s:c=(f-u)/T+2;break;case f:c=(u-s)/T+4}c/=6}return{h:c,s:S,l:G}}function Yd(u,s,f){u=zn(u,255),s=zn(s,255),f=zn(f,255);var c,S,E=Math.max(u,s,f),N=Math.min(u,s,f),G=E,T=E-N;if(S=E===0?0:T/E,E==N)c=0;else{switch(E){case u:c=(s-f)/T+(s<f?6:0);break;case s:c=(f-u)/T+2;break;case f:c=(u-s)/T+4}c/=6}return{h:c,s:S,v:G}}function Bd(u,s,f,c){var S=[Dt(Math.round(u).toString(16)),Dt(Math.round(s).toString(16)),Dt(Math.round(f).toString(16))];return c&&S[0].charAt(0)==S[0].charAt(1)&&S[1].charAt(0)==S[1].charAt(1)&&S[2].charAt(0)==S[2].charAt(1)?S[0].charAt(0)+S[1].charAt(0)+S[2].charAt(0):S.join("")}function Xd(u,s,f,c){return[Dt(Pd(c)),Dt(Math.round(u).toString(16)),Dt(Math.round(s).toString(16)),Dt(Math.round(f).toString(16))].join("")}function Wb(u,s){s=s===0?0:s||10;var f=X(u).toHsl();return f.s-=s/100,f.s=eu(f.s),X(f)}function Fb(u,s){s=s===0?0:s||10;var f=X(u).toHsl();return f.s+=s/100,f.s=eu(f.s),X(f)}function Ib(u){return X(u).desaturate(100)}function nm(u,s){s=s===0?0:s||10;var f=X(u).toHsl();return f.l+=s/100,f.l=eu(f.l),X(f)}function tm(u,s){s=s===0?0:s||10;var f=X(u).toRgb();return f.r=Math.max(0,Math.min(255,f.r-Math.round(-s/100*255))),f.g=Math.max(0,Math.min(255,f.g-Math.round(-s/100*255))),f.b=Math.max(0,Math.min(255,f.b-Math.round(-s/100*255))),X(f)}function am(u,s){s=s===0?0:s||10;var f=X(u).toHsl();return f.l-=s/100,f.l=eu(f.l),X(f)}function em(u,s){var f=X(u).toHsl(),c=(f.h+s)%360;return f.h=c<0?360+c:c,X(f)}function lm(u){var s=X(u).toHsl();return s.h=(s.h+180)%360,X(s)}function Gd(u,s){if(isNaN(s)||s<=0)throw new Error("Argument to polyad must be a positive number");for(var f=X(u).toHsl(),c=[X(u)],S=360/s,E=1;E<s;E++)c.push(X({h:(f.h+E*S)%360,s:f.s,l:f.l}));return c}function im(u){var s=X(u).toHsl(),f=s.h;return[X(u),X({h:(f+72)%360,s:s.s,l:s.l}),X({h:(f+216)%360,s:s.s,l:s.l})]}function um(u,s,f){s=s||6,f=f||30;var c=X(u).toHsl(),S=360/f,E=[X(u)];for(c.h=(c.h-(S*s>>1)+720)%360;--s;)c.h=(c.h+S)%360,E.push(X(c));return E}function rm(u,s){s=s||6;for(var f=X(u).toHsv(),c=f.h,S=f.s,E=f.v,N=[],G=1/s;s--;)N.push(X({h:c,s:S,v:E})),E=(E+G)%1;return N}X.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var u=this.toRgb();return(299*u.r+587*u.g+114*u.b)/1e3},getLuminance:function(){var u,s,f,c=this.toRgb();return u=c.r/255,s=c.g/255,f=c.b/255,.2126*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))+.7152*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.0722*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))},setAlpha:function(u){return this._a=Jd(u),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var u=Yd(this._r,this._g,this._b);return{h:360*u.h,s:u.s,v:u.v,a:this._a}},toHsvString:function(){var u=Yd(this._r,this._g,this._b),s=Math.round(360*u.h),f=Math.round(100*u.s),c=Math.round(100*u.v);return this._a==1?"hsv("+s+", "+f+"%, "+c+"%)":"hsva("+s+", "+f+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var u=wd(this._r,this._g,this._b);return{h:360*u.h,s:u.s,l:u.l,a:this._a}},toHslString:function(){var u=wd(this._r,this._g,this._b),s=Math.round(360*u.h),f=Math.round(100*u.s),c=Math.round(100*u.l);return this._a==1?"hsl("+s+", "+f+"%, "+c+"%)":"hsla("+s+", "+f+"%, "+c+"%, "+this._roundA+")"},toHex:function(u){return Bd(this._r,this._g,this._b,u)},toHexString:function(u){return"#"+this.toHex(u)},toHex8:function(u){return function(s,f,c,S,E){var N=[Dt(Math.round(s).toString(16)),Dt(Math.round(f).toString(16)),Dt(Math.round(c).toString(16)),Dt(Pd(S))];return E&&N[0].charAt(0)==N[0].charAt(1)&&N[1].charAt(0)==N[1].charAt(1)&&N[2].charAt(0)==N[2].charAt(1)&&N[3].charAt(0)==N[3].charAt(1)?N[0].charAt(0)+N[1].charAt(0)+N[2].charAt(0)+N[3].charAt(0):N.join("")}(this._r,this._g,this._b,this._a,u)},toHex8String:function(u){return"#"+this.toHex8(u)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*zn(this._r,255))+"%",g:Math.round(100*zn(this._g,255))+"%",b:Math.round(100*zn(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*zn(this._r,255))+"%, "+Math.round(100*zn(this._g,255))+"%, "+Math.round(100*zn(this._b,255))+"%)":"rgba("+Math.round(100*zn(this._r,255))+"%, "+Math.round(100*zn(this._g,255))+"%, "+Math.round(100*zn(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(om[Bd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(u){var s="#"+Xd(this._r,this._g,this._b,this._a),f=s,c=this._gradientType?"GradientType = 1, ":"";if(u){var S=X(u);f="#"+Xd(S._r,S._g,S._b,S._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+s+",endColorstr="+f+")"},toString:function(u){var s=!!u;u=u||this._format;var f=!1,c=this._a<1&&this._a>=0;return s||!c||u!=="hex"&&u!=="hex6"&&u!=="hex3"&&u!=="hex4"&&u!=="hex8"&&u!=="name"?(u==="rgb"&&(f=this.toRgbString()),u==="prgb"&&(f=this.toPercentageRgbString()),u!=="hex"&&u!=="hex6"||(f=this.toHexString()),u==="hex3"&&(f=this.toHexString(!0)),u==="hex4"&&(f=this.toHex8String(!0)),u==="hex8"&&(f=this.toHex8String()),u==="name"&&(f=this.toName()),u==="hsl"&&(f=this.toHslString()),u==="hsv"&&(f=this.toHsvString()),f||this.toHexString()):u==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return X(this.toString())},_applyModification:function(u,s){var f=u.apply(null,[this].concat([].slice.call(s)));return this._r=f._r,this._g=f._g,this._b=f._b,this.setAlpha(f._a),this},lighten:function(){return this._applyModification(nm,arguments)},brighten:function(){return this._applyModification(tm,arguments)},darken:function(){return this._applyModification(am,arguments)},desaturate:function(){return this._applyModification(Wb,arguments)},saturate:function(){return this._applyModification(Fb,arguments)},greyscale:function(){return this._applyModification(Ib,arguments)},spin:function(){return this._applyModification(em,arguments)},_applyCombination:function(u,s){return u.apply(null,[this].concat([].slice.call(s)))},analogous:function(){return this._applyCombination(um,arguments)},complement:function(){return this._applyCombination(lm,arguments)},monochromatic:function(){return this._applyCombination(rm,arguments)},splitcomplement:function(){return this._applyCombination(im,arguments)},triad:function(){return this._applyCombination(Gd,[3])},tetrad:function(){return this._applyCombination(Gd,[4])}},X.fromRatio=function(u,s){if(au(u)=="object"){var f={};for(var c in u)u.hasOwnProperty(c)&&(f[c]=c==="a"?u[c]:ql(u[c]));u=f}return X(u,s)},X.equals=function(u,s){return!(!u||!s)&&X(u).toRgbString()==X(s).toRgbString()},X.random=function(){return X.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},X.mix=function(u,s,f){f=f===0?0:f||50;var c=X(u).toRgb(),S=X(s).toRgb(),E=f/100;return X({r:(S.r-c.r)*E+c.r,g:(S.g-c.g)*E+c.g,b:(S.b-c.b)*E+c.b,a:(S.a-c.a)*E+c.a})},X.readability=function(u,s){var f=X(u),c=X(s);return(Math.max(f.getLuminance(),c.getLuminance())+.05)/(Math.min(f.getLuminance(),c.getLuminance())+.05)},X.isReadable=function(u,s,f){var c,S,E=X.readability(u,s);switch(S=!1,(c=function(N){var G,T;return G=((N=N||{level:"AA",size:"small"}).level||"AA").toUpperCase(),T=(N.size||"small").toLowerCase(),G!=="AA"&&G!=="AAA"&&(G="AA"),T!=="small"&&T!=="large"&&(T="small"),{level:G,size:T}}(f)).level+c.size){case"AAsmall":case"AAAlarge":S=E>=4.5;break;case"AAlarge":S=E>=3;break;case"AAAsmall":S=E>=7}return S},X.mostReadable=function(u,s,f){var c,S,E,N,G=null,T=0;S=(f=f||{}).includeFallbackColors,E=f.level,N=f.size;for(var g=0;g<s.length;g++)(c=X.readability(u,s[g]))>T&&(T=c,G=X(s[g]));return X.isReadable(u,G,{level:E,size:N})||!S?G:(f.includeFallbackColors=!1,X.mostReadable(u,["#fff","#000"],f))};var Ro=X.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},om=X.hexNames=function(u){var s={};for(var f in u)u.hasOwnProperty(f)&&(s[u[f]]=f);return s}(Ro);function Jd(u){return u=parseFloat(u),(isNaN(u)||u<0||u>1)&&(u=1),u}function zn(u,s){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(u)&&(u="100%");var f=function(c){return typeof c=="string"&&c.indexOf("%")!=-1}(u);return u=Math.min(s,Math.max(0,parseFloat(u))),f&&(u=parseInt(u*s,10)/100),Math.abs(u-s)<1e-6?1:u%s/parseFloat(s)}function eu(u){return Math.min(1,Math.max(0,u))}function bt(u){return parseInt(u,16)}function Dt(u){return u.length==1?"0"+u:""+u}function ql(u){return u<=1&&(u=100*u+"%"),u}function Pd(u){return Math.round(255*parseFloat(u)).toString(16)}function Qd(u){return bt(u)/255}var Ea,Fi,Ii,Mt=(Fi="[\\s|\\(]+("+(Ea="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ea+")[,|\\s]+("+Ea+")\\s*\\)?",Ii="[\\s|\\(]+("+Ea+")[,|\\s]+("+Ea+")[,|\\s]+("+Ea+")[,|\\s]+("+Ea+")\\s*\\)?",{CSS_UNIT:new RegExp(Ea),rgb:new RegExp("rgb"+Fi),rgba:new RegExp("rgba"+Ii),hsl:new RegExp("hsl"+Fi),hsla:new RegExp("hsla"+Ii),hsv:new RegExp("hsv"+Fi),hsva:new RegExp("hsva"+Ii),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Wt(u){return!!Mt.CSS_UNIT.exec(u)}var lu=function(u,s){var f=(typeof u=="string"?parseInt(u):u)||0;if(f>=-5&&f<=5){var c=f,S=parseFloat(s),E=S+c*(S/5)*-1;return(E==0||E<=Number.EPSILON)&&(E=.1),{animationPeriod:E+"s"}}return{animationPeriod:s}},iu=function(u,s){var f=u||{},c="";switch(s){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var S={};if(f.fontSize){var E=f.fontSize;S=function(N,G){var T={};for(var g in N)Object.prototype.hasOwnProperty.call(N,g)&&G.indexOf(g)<0&&(T[g]=N[g]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function"){var R=0;for(g=Object.getOwnPropertySymbols(N);R<g.length;R++)G.indexOf(g[R])<0&&Object.prototype.propertyIsEnumerable.call(N,g[R])&&(T[g[R]]=N[g[R]])}return T}(f,["fontSize"]),c=E}return{fontSize:c,styles:S}},cm={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},uu=function(u){var s=u.className,f=u.text,c=u.textColor,S=u.staticText,E=u.style;return f?rn.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(s||"").trim(),style:vn(vn(vn({},S&&cm),c&&{color:c,mixBlendMode:"unset"}),E&&E)},typeof f=="string"&&f.length?f:"loading"):null},Cl="rgb(50, 205, 50)";function ru(u,s){if(s===void 0&&(s=0),u.length===0)throw new Error("Input array cannot be empty!");var f=[];return function c(S,E){return E===void 0&&(E=0),f.push.apply(f,S),f.length<E&&c(f,E),f.slice(0,E)}(u,s)}wn(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);X(Cl).toRgb();Array.from({length:4},function(u,s){return"--atom-phase".concat(s+1,"-rgb")});wn(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--commet-phase".concat(s+1,"-color")});wn(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--OP-annulus-phase".concat(s+1,"-color")});function No(u){return u&&u.Math===Math&&u}wn(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);No(typeof window=="object"&&window)||No(typeof self=="object"&&self)||No(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(u,s){return"--OP-dotted-phase".concat(s+1,"-color")});wn(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--OP-spokes-phase".concat(s+1,"-color")});wn(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(u,s){return"--OP-annulus-dual-sectors-phase".concat(s+1,"-color")});wn(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return["--OP-annulus-track-phase".concat(s+1,"-color"),"--OP-annulus-sector-phase".concat(s+1,"-color")]});wn(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--four-square-phase".concat(s+1,"-color")});wn(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--mosaic-phase".concat(s+1,"-color")});wn(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--riple-phase".concat(s+1,"-color")});wn(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var Re=Array.from({length:4},function(u,s){return"--TD-pulsate-phase".concat(s+1,"-color")}),sm=function(u){var s,f=iu(u==null?void 0:u.style,u==null?void 0:u.size),c=f.styles,S=f.fontSize,E=u==null?void 0:u.easing,N=lu(u==null?void 0:u.speedPlus,"1.2s").animationPeriod,G=function(T){var g={};if(T instanceof Array){for(var R=ru(T,Re.length),Y=0;Y<R.length&&!(Y>=4);Y++)g[Re[Y]]=R[Y];return g}try{if(typeof T!="string")throw new Error("Color String expected");for(var C=0;C<Re.length;C++)g[Re[C]]=T}catch(on){for(on instanceof Error?console.warn("[".concat(on.message,']: Received "').concat(typeof T,'" instead with value, ').concat(JSON.stringify(T))):console.warn("".concat(JSON.stringify(T),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),C=0;C<Re.length;C++)g[Re[C]]=Cl}return g}((s=u==null?void 0:u.color)!==null&&s!==void 0?s:"");return rn.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:vn(vn(vn(vn(vn({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),E&&{"--rli-animation-function":E}),G),c),role:"status","aria-live":"polite","aria-label":"Loading"},rn.createElement("span",{className:"rli-d-i-b pulsate-indicator"},rn.createElement("span",{className:"rli-d-i-b pulsate-dot"}),rn.createElement("span",{className:"rli-d-i-b pulsate-dot"}),rn.createElement("span",{className:"rli-d-i-b pulsate-dot"})),rn.createElement(uu,{staticText:!0,text:u==null?void 0:u.text,textColor:u==null?void 0:u.textColor}))};wn(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var ke=Array.from({length:4},function(u,s){return"--TD-brick-stack-phase".concat(s+1,"-color")}),fm=function(u){var s,f=iu(u==null?void 0:u.style,u==null?void 0:u.size),c=f.styles,S=f.fontSize,E=u==null?void 0:u.easing,N=lu(u==null?void 0:u.speedPlus,"1s").animationPeriod,G=function(T){var g={};if(T instanceof Array){for(var R=ru(T,ke.length),Y=0;Y<R.length&&!(Y>=4);Y++)g[ke[Y]]=R[Y];return g}try{if(typeof T!="string")throw new Error("Color String expected");for(var C=0;C<ke.length;C++)g[ke[C]]=T}catch(on){for(on instanceof Error?console.warn("[".concat(on.message,']: Received "').concat(typeof T,'" instead with value, ').concat(JSON.stringify(T))):console.warn("".concat(JSON.stringify(T),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),C=0;C<ke.length;C++)g[ke[C]]=Cl}return g}((s=u==null?void 0:u.color)!==null&&s!==void 0?s:"");return rn.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:vn(vn(vn(vn(vn({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),E&&{"--rli-animation-function":E}),G),c),role:"status","aria-live":"polite","aria-label":"Loading"},rn.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},rn.createElement("span",{className:"rli-d-i-b brick-stack"})),rn.createElement(uu,{staticText:!0,text:u==null?void 0:u.text,textColor:u==null?void 0:u.textColor}))};wn(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var Ue=Array.from({length:4},function(u,s){return"--TD-bob-phase".concat(s+1,"-color")}),dm=function(u){var s,f=iu(u==null?void 0:u.style,u==null?void 0:u.size),c=f.styles,S=f.fontSize,E=u==null?void 0:u.easing,N=lu(u==null?void 0:u.speedPlus,"1.2s").animationPeriod,G=function(T){var g={};if(T instanceof Array){for(var R=ru(T,Ue.length),Y=0;Y<R.length&&!(Y>=4);Y++)g[Ue[Y]]=R[Y];return g}try{if(typeof T!="string")throw new Error("Color String expected");for(var C=0;C<Ue.length;C++)g[Ue[C]]=T}catch(on){for(on instanceof Error?console.warn("[".concat(on.message,']: Received "').concat(typeof T,'" instead with value, ').concat(JSON.stringify(T))):console.warn("".concat(JSON.stringify(T),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),C=0;C<Ue.length;C++)g[Ue[C]]=Cl}return g}((s=u==null?void 0:u.color)!==null&&s!==void 0?s:"");return rn.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:vn(vn(vn(vn(vn({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),E&&{"--rli-animation-function":E}),G),c),role:"status","aria-live":"polite","aria-label":"Loading"},rn.createElement("span",{className:"bob-indicator"},rn.createElement("span",{className:"bobbing"})),rn.createElement(uu,{staticText:!0,text:u==null?void 0:u.text,textColor:u==null?void 0:u.textColor}))};wn(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var He=Array.from({length:4},function(u,s){return"--TD-bounce-phase".concat(s+1,"-color")}),hm=function(u){var s,f=iu(u==null?void 0:u.style,u==null?void 0:u.size),c=f.styles,S=f.fontSize,E=u==null?void 0:u.easing,N=lu(u==null?void 0:u.speedPlus,"0.5s").animationPeriod,G=function(T){var g={};if(T instanceof Array){for(var R=ru(T,He.length),Y=0;Y<R.length&&!(Y>=4);Y++)g[He[Y]]=R[Y];return g}try{if(typeof T!="string")throw new Error("Color String expected");for(var C=0;C<He.length;C++)g[He[C]]=T}catch{for(C=0;C<He.length;C++)g[He[C]]=Cl}return g}((s=u==null?void 0:u.color)!==null&&s!==void 0?s:"");return rn.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:vn(vn(vn(vn(vn({},S&&{fontSize:S}),N&&{"--rli-animation-duration":N}),E&&{"--rli-animation-function":E}),G),c)},rn.createElement("span",{className:"wrapper"},rn.createElement("span",{className:"group"},rn.createElement("span",{className:"rli-d-i-b dot"}),rn.createElement("span",{className:"rli-d-i-b dot"}),rn.createElement("span",{className:"rli-d-i-b dot"})),rn.createElement("span",{className:"group"},rn.createElement("span",{className:"rli-d-i-b shadow"}),rn.createElement("span",{className:"rli-d-i-b shadow"}),rn.createElement("span",{className:"rli-d-i-b shadow"}))),rn.createElement(uu,{staticText:!0,text:u==null?void 0:u.text,textColor:u==null?void 0:u.textColor,style:{marginTop:"2px"}}))},Zd=function(u){var s=Object(u).variant,f=s===void 0?"pulsate":s;return f==="pulsate"?rn.createElement(sm,vn({},u)):f==="brick-stack"?rn.createElement(fm,vn({},u)):f==="bob"?rn.createElement(dm,vn({},u)):f==="bounce"?rn.createElement(hm,vn({},u)):null};wn(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--shape-phase".concat(s+1,"-color")});wn(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--trophySpin-phase".concat(s+1,"-color")});wn(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--slab-phase".concat(s+1,"-color")});wn(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(u,s){return"--life-line-phase".concat(s+1,"-color")});function bm(u){return qe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},child:[]}]})(u)}function mm(u){return qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z"},child:[]}]})(u)}const vm=()=>{const[u,s]=Un.useState([]),[f,c]=Un.useState(!1),[S,E]=Un.useState(void 0),[N,G]=Un.useState(!0),[T,g]=Un.useState(""),[R,Y]=Un.useState(null),[C,on]=Un.useState(null);Un.useEffect(()=>{Z()},[]);const Z=async()=>{try{const U=await Db();s(U),g("")}catch(U){g("Failed to load tasks. Please refresh the page."+U)}finally{G(!1)}},k=()=>{E(void 0),c(!0)},K=()=>{E(void 0),c(!1)},Yn=()=>{Z(),K()},Mn=U=>{const J=u.find(tn=>tn.id===U);J&&(E(J),c(!0))},dn=async U=>{Y(U);try{await Nb(U),s(J=>J.filter(tn=>tn.id!==U))}catch(J){g("Failed to delete task. Please Try again"+J)}finally{Y(null)}},Tn=async U=>{try{const J={name:`${U.name} (Copy)`,dueDate:U.dueDate,isCompleted:!1,categoryIds:U.todoCategories.map(tn=>tn.category.id)};await Ld(J),Z()}catch(J){g("Failed to duplicate task. Please try again."+J)}},F=U=>{on(J=>J===U?null:U)},Q=U=>{const J=new Date;J.setHours(0,0,0,0);const tn=new Date(U);return tn.setHours(0,0,0,0),tn<=J};return T?D.jsx("div",{className:"min-h-screen py-8",children:D.jsx("div",{className:"max-w-2xl mx-auto",children:D.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-2xl p-6 text-center",children:[D.jsx("div",{className:" mb-4",children:D.jsx("div",{className:"text-4xl mb-4",children:"⚠️"})}),D.jsx("h2",{className:"text-red-800 text-xl font-semibold mb-2",children:"Something went wrong"}),D.jsx("h3",{className:"text-red-600 mb-4",children:T}),D.jsx("button",{onClick:Z,className:"bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors",children:"Try Again"})]})})}):D.jsxs("div",{className:"min-h-screen py-8 rounded-4xl ",children:[D.jsxs("div",{className:"max-w-2xl mx-auto",children:[D.jsx("div",{className:"bg-gray-50 rounded-2xl shadow-sm p-6 mb-6 border-2 border-slate-600",children:D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx(Vb,{className:"text-3xl text-slate-900"}),D.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"TASK MANAGER"})]}),D.jsx("button",{onClick:k,children:D.jsx(mm,{className:"w-10 h-10 bg-purple-400 hover:bg-purple-900 rounded-full transition-colors shadow-sm hover:shadow-sm"})})]})}),C&&D.jsx("div",{className:"mb-4 text-right",children:D.jsx("button",{onClick:()=>on(null),className:"text-sm font-bold text-red-600 hover:underline bg-red-100 rounded-md p-1 border-1 ",children:"Clear filter"})}),D.jsx("div",{className:"bg-gray-50 rounded-2xl shadow-sm p-6 border-2 border-slate-600",children:N?D.jsxs("div",{className:"text-center py-12",children:[D.jsx(Zd,{color:["#7c31cc","#cc3133","#81cc31","#31ccc9"]}),D.jsx("p",{className:"text-gray-500 mt-4",children:"Loading your tasks..."})]}):u.length===0?D.jsxs("div",{className:"text-center py-12 text-gray-500",children:[D.jsx("div",{className:"text-6xl mb-4",children:"📋"}),D.jsx("p",{className:"text-lg",children:"No tasks yet"}),D.jsx("p",{className:"text-sm",children:"Click the + button to add your first task"})]}):D.jsx("div",{className:"space-y-3",children:u.map(U=>{const J=C!==null&&!U.todoCategories.some(tn=>tn.category.id===C);return D.jsxs("div",{className:`
								flex items-center justify-between p-4 rounded-xl border-1 border-slate-600
								hover:bg-purple-50 transition-colors
								${R===U.id?"opacity-50 pointer-events-none":""}
								${J?"opacity-30 filter blur-sm":""}
							  `,children:[D.jsxs("div",{className:"flex-1",children:[D.jsx("h3",{className:"font-medium text-gray-800 mb-1 text-xl",children:U.name}),Q(U.dueDate)?D.jsx("p",{className:"text-sm text-red-500 font-bold",children:"OVERDUE"}):D.jsxs("p",{className:"text-sm text-gray-500",children:["Due: ",U.dueDate]}),U.todoCategories&&U.todoCategories.length>0&&D.jsx("div",{className:"flex flex-wrap gap-1 mt-2",children:U.todoCategories.map(tn=>D.jsx("span",{onClick:()=>F(tn.category.id),className:"bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full border-1 cursor-pointer hover:bg-purple-200 transition-colors",style:C===tn.category.id?{backgroundColor:"#d8b4fe",fontWeight:"bold",textTransform:"uppercase"}:{},children:tn.category.name},tn.id))})]}),D.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[D.jsx("button",{onClick:()=>Mn(U.id),className:"text-gray-400 hover:text-green-500 p-2 rounded-lg hover:bg-green-50 transition-colors border-1",title:"Edit task",children:D.jsx(Kb,{className:"w-4 h-4"})}),D.jsx("button",{onClick:()=>Tn(U),className:"text-gray-400 hover:text-blue-500 p-2 rounded-lg hover:bg-blue-50 transition-colors border-1",title:"Duplicate task",children:D.jsx(bm,{className:"w-4 h-4"})}),D.jsx("button",{onClick:()=>dn(U.id),className:"text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors border-1",title:"Delete task",children:R===U.id?D.jsx(Zd,{color:"#ef4444",size:"small"}):D.jsx(Jb,{className:"w-4 h-4"})})]})]},U.id)})})})]}),D.jsx(Qb,{isOpen:f,onClose:K,title:S?"Edit Task":"Create New Task",children:D.jsx(Lb,{onSuccess:Yn,onClose:K,initialData:S})})]})};function pm(){return D.jsx("div",{className:"min-h-screen bg-gray-300 text-white ",children:D.jsx("div",{className:"max-w-3xl mx-auto p-3",children:D.jsx(vm,{})})})}Mb.createRoot(document.getElementById("root")).render(D.jsx(Un.StrictMode,{children:D.jsx(pm,{})}));
