(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const c of f)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function o(f){const c={};return f.integrity&&(c.integrity=f.integrity),f.referrerPolicy&&(c.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?c.credentials="include":f.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(f){if(f.ep)return;f.ep=!0;const c=o(f);fetch(f.href,c)}})();function rv(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ac={exports:{}},Qr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function iv(){if(_0)return Qr;_0=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(u,f,c){var h=null;if(c!==void 0&&(h=""+c),f.key!==void 0&&(h=""+f.key),"key"in f){c={};for(var p in f)p!=="key"&&(c[p]=f[p])}else c=f;return f=c.ref,{$$typeof:l,type:u,key:h,ref:f!==void 0?f:null,props:c}}return Qr.Fragment=r,Qr.jsx=o,Qr.jsxs=o,Qr}var S0;function ov(){return S0||(S0=1,ac.exports=iv()),ac.exports}var q=ov(),lc={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function uv(){if(O0)return xe;O0=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),C=Symbol.iterator;function w(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,H={};function te(x,U,Q){this.props=x,this.context=U,this.refs=H,this.updater=Q||ie}te.prototype.isReactComponent={},te.prototype.setState=function(x,U){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,U,"setState")},te.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Ce(){}Ce.prototype=te.prototype;function ne(x,U,Q){this.props=x,this.context=U,this.refs=H,this.updater=Q||ie}var ye=ne.prototype=new Ce;ye.constructor=ne,K(ye,te.prototype),ye.isPureReactComponent=!0;var je=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},Ye=Object.prototype.hasOwnProperty;function we(x,U,Q,L,oe,De){return Q=De.ref,{$$typeof:l,type:x,key:U,ref:Q!==void 0?Q:null,props:De}}function Fe(x,U){return we(x.type,U,void 0,void 0,void 0,x.props)}function ke(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function Ot(x){var U={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Q){return U[Q]})}var tt=/\/+/g;function ue(x,U){return typeof x=="object"&&x!==null&&x.key!=null?Ot(""+x.key):U.toString(36)}function Se(){}function ae(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Se,Se):(x.status="pending",x.then(function(U){x.status==="pending"&&(x.status="fulfilled",x.value=U)},function(U){x.status==="pending"&&(x.status="rejected",x.reason=U)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function fe(x,U,Q,L,oe){var De=typeof x;(De==="undefined"||De==="boolean")&&(x=null);var pe=!1;if(x===null)pe=!0;else switch(De){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(x.$$typeof){case l:case r:pe=!0;break;case O:return pe=x._init,fe(pe(x._payload),U,Q,L,oe)}}if(pe)return oe=oe(x),pe=L===""?"."+ue(x,0):L,je(oe)?(Q="",pe!=null&&(Q=pe.replace(tt,"$&/")+"/"),fe(oe,U,Q,"",function(Qt){return Qt})):oe!=null&&(ke(oe)&&(oe=Fe(oe,Q+(oe.key==null||x&&x.key===oe.key?"":(""+oe.key).replace(tt,"$&/")+"/")+pe)),U.push(oe)),1;pe=0;var yt=L===""?".":L+":";if(je(x))for(var Ke=0;Ke<x.length;Ke++)L=x[Ke],De=yt+ue(L,Ke),pe+=fe(L,U,Q,De,oe);else if(Ke=w(x),typeof Ke=="function")for(x=Ke.call(x),Ke=0;!(L=x.next()).done;)L=L.value,De=yt+ue(L,Ke++),pe+=fe(L,U,Q,De,oe);else if(De==="object"){if(typeof x.then=="function")return fe(ae(x),U,Q,L,oe);throw U=String(x),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return pe}function z(x,U,Q){if(x==null)return x;var L=[],oe=0;return fe(x,L,"","",function(De){return U.call(Q,De,oe++)}),L}function V(x){if(x._status===-1){var U=x._result;U=U(),U.then(function(Q){(x._status===0||x._status===-1)&&(x._status=1,x._result=Q)},function(Q){(x._status===0||x._status===-1)&&(x._status=2,x._result=Q)}),x._status===-1&&(x._status=0,x._result=U)}if(x._status===1)return x._result.default;throw x._result}var ee=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function Ne(){}return xe.Children={map:z,forEach:function(x,U,Q){z(x,function(){U.apply(this,arguments)},Q)},count:function(x){var U=0;return z(x,function(){U++}),U},toArray:function(x){return z(x,function(U){return U})||[]},only:function(x){if(!ke(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},xe.Component=te,xe.Fragment=o,xe.Profiler=f,xe.PureComponent=ne,xe.StrictMode=u,xe.Suspense=v,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,xe.__COMPILER_RUNTIME={__proto__:null,c:function(x){return J.H.useMemoCache(x)}},xe.cache=function(x){return function(){return x.apply(null,arguments)}},xe.cloneElement=function(x,U,Q){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var L=K({},x.props),oe=x.key,De=void 0;if(U!=null)for(pe in U.ref!==void 0&&(De=void 0),U.key!==void 0&&(oe=""+U.key),U)!Ye.call(U,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&U.ref===void 0||(L[pe]=U[pe]);var pe=arguments.length-2;if(pe===1)L.children=Q;else if(1<pe){for(var yt=Array(pe),Ke=0;Ke<pe;Ke++)yt[Ke]=arguments[Ke+2];L.children=yt}return we(x.type,oe,void 0,void 0,De,L)},xe.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},xe.createElement=function(x,U,Q){var L,oe={},De=null;if(U!=null)for(L in U.key!==void 0&&(De=""+U.key),U)Ye.call(U,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(oe[L]=U[L]);var pe=arguments.length-2;if(pe===1)oe.children=Q;else if(1<pe){for(var yt=Array(pe),Ke=0;Ke<pe;Ke++)yt[Ke]=arguments[Ke+2];oe.children=yt}if(x&&x.defaultProps)for(L in pe=x.defaultProps,pe)oe[L]===void 0&&(oe[L]=pe[L]);return we(x,De,void 0,void 0,null,oe)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(x){return{$$typeof:p,render:x}},xe.isValidElement=ke,xe.lazy=function(x){return{$$typeof:O,_payload:{_status:-1,_result:x},_init:V}},xe.memo=function(x,U){return{$$typeof:g,type:x,compare:U===void 0?null:U}},xe.startTransition=function(x){var U=J.T,Q={};J.T=Q;try{var L=x(),oe=J.S;oe!==null&&oe(Q,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(Ne,ee)}catch(De){ee(De)}finally{J.T=U}},xe.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},xe.use=function(x){return J.H.use(x)},xe.useActionState=function(x,U,Q){return J.H.useActionState(x,U,Q)},xe.useCallback=function(x,U){return J.H.useCallback(x,U)},xe.useContext=function(x){return J.H.useContext(x)},xe.useDebugValue=function(){},xe.useDeferredValue=function(x,U){return J.H.useDeferredValue(x,U)},xe.useEffect=function(x,U,Q){var L=J.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(x,U)},xe.useId=function(){return J.H.useId()},xe.useImperativeHandle=function(x,U,Q){return J.H.useImperativeHandle(x,U,Q)},xe.useInsertionEffect=function(x,U){return J.H.useInsertionEffect(x,U)},xe.useLayoutEffect=function(x,U){return J.H.useLayoutEffect(x,U)},xe.useMemo=function(x,U){return J.H.useMemo(x,U)},xe.useOptimistic=function(x,U){return J.H.useOptimistic(x,U)},xe.useReducer=function(x,U,Q){return J.H.useReducer(x,U,Q)},xe.useRef=function(x){return J.H.useRef(x)},xe.useState=function(x){return J.H.useState(x)},xe.useSyncExternalStore=function(x,U,Q){return J.H.useSyncExternalStore(x,U,Q)},xe.useTransition=function(){return J.H.useTransition()},xe.version="19.1.0",xe}var T0;function Sc(){return T0||(T0=1,lc.exports=uv()),lc.exports}var me=Sc();const he=rv(me);var rc={exports:{}},Kr={},ic={exports:{}},oc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function sv(){return A0||(A0=1,function(l){function r(z,V){var ee=z.length;z.push(V);e:for(;0<ee;){var Ne=ee-1>>>1,x=z[Ne];if(0<f(x,V))z[Ne]=V,z[ee]=x,ee=Ne;else break e}}function o(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var V=z[0],ee=z.pop();if(ee!==V){z[0]=ee;e:for(var Ne=0,x=z.length,U=x>>>1;Ne<U;){var Q=2*(Ne+1)-1,L=z[Q],oe=Q+1,De=z[oe];if(0>f(L,ee))oe<x&&0>f(De,L)?(z[Ne]=De,z[oe]=ee,Ne=oe):(z[Ne]=L,z[Q]=ee,Ne=Q);else if(oe<x&&0>f(De,ee))z[Ne]=De,z[oe]=ee,Ne=oe;else break e}}return V}function f(z,V){var ee=z.sortIndex-V.sortIndex;return ee!==0?ee:z.id-V.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;l.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();l.unstable_now=function(){return h.now()-p}}var v=[],g=[],O=1,C=null,w=3,ie=!1,K=!1,H=!1,te=!1,Ce=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;function je(z){for(var V=o(g);V!==null;){if(V.callback===null)u(g);else if(V.startTime<=z)u(g),V.sortIndex=V.expirationTime,r(v,V);else break;V=o(g)}}function J(z){if(H=!1,je(z),!K)if(o(v)!==null)K=!0,Ye||(Ye=!0,ue());else{var V=o(g);V!==null&&fe(J,V.startTime-z)}}var Ye=!1,we=-1,Fe=5,ke=-1;function Ot(){return te?!0:!(l.unstable_now()-ke<Fe)}function tt(){if(te=!1,Ye){var z=l.unstable_now();ke=z;var V=!0;try{e:{K=!1,H&&(H=!1,ne(we),we=-1),ie=!0;var ee=w;try{t:{for(je(z),C=o(v);C!==null&&!(C.expirationTime>z&&Ot());){var Ne=C.callback;if(typeof Ne=="function"){C.callback=null,w=C.priorityLevel;var x=Ne(C.expirationTime<=z);if(z=l.unstable_now(),typeof x=="function"){C.callback=x,je(z),V=!0;break t}C===o(v)&&u(v),je(z)}else u(v);C=o(v)}if(C!==null)V=!0;else{var U=o(g);U!==null&&fe(J,U.startTime-z),V=!1}}break e}finally{C=null,w=ee,ie=!1}V=void 0}}finally{V?ue():Ye=!1}}}var ue;if(typeof ye=="function")ue=function(){ye(tt)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,ae=Se.port2;Se.port1.onmessage=tt,ue=function(){ae.postMessage(null)}}else ue=function(){Ce(tt,0)};function fe(z,V){we=Ce(function(){z(l.unstable_now())},V)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(z){z.callback=null},l.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<z?Math.floor(1e3/z):5},l.unstable_getCurrentPriorityLevel=function(){return w},l.unstable_next=function(z){switch(w){case 1:case 2:case 3:var V=3;break;default:V=w}var ee=w;w=V;try{return z()}finally{w=ee}},l.unstable_requestPaint=function(){te=!0},l.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=w;w=z;try{return V()}finally{w=ee}},l.unstable_scheduleCallback=function(z,V,ee){var Ne=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ne+ee:Ne):ee=Ne,z){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ee+x,z={id:O++,callback:V,priorityLevel:z,startTime:ee,expirationTime:x,sortIndex:-1},ee>Ne?(z.sortIndex=ee,r(g,z),o(v)===null&&z===o(g)&&(H?(ne(we),we=-1):H=!0,fe(J,ee-Ne))):(z.sortIndex=x,r(v,z),K||ie||(K=!0,Ye||(Ye=!0,ue()))),z},l.unstable_shouldYield=Ot,l.unstable_wrapCallback=function(z){var V=w;return function(){var ee=w;w=V;try{return z.apply(this,arguments)}finally{w=ee}}}}(oc)),oc}var E0;function cv(){return E0||(E0=1,ic.exports=sv()),ic.exports}var uc={exports:{}},Et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function fv(){if(k0)return Et;k0=1;var l=Sc();function r(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)g+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function c(v,g,O){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:C==null?null:""+C,children:v,containerInfo:g,implementation:O}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Et.createPortal=function(v,g){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return c(v,g,null,O)},Et.flushSync=function(v){var g=h.T,O=u.p;try{if(h.T=null,u.p=2,v)return v()}finally{h.T=g,u.p=O,u.d.f()}},Et.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(v,g))},Et.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},Et.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var O=g.as,C=p(O,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,ie=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;O==="style"?u.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:w,fetchPriority:ie}):O==="script"&&u.d.X(v,{crossOrigin:C,integrity:w,fetchPriority:ie,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Et.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var O=p(g.as,g.crossOrigin);u.d.M(v,{crossOrigin:O,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(v)},Et.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var O=g.as,C=p(O,g.crossOrigin);u.d.L(v,O,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Et.preloadModule=function(v,g){if(typeof v=="string")if(g){var O=p(g.as,g.crossOrigin);u.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:O,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(v)},Et.requestFormReset=function(v){u.d.r(v)},Et.unstable_batchedUpdates=function(v,g){return v(g)},Et.useFormState=function(v,g,O){return h.H.useFormState(v,g,O)},Et.useFormStatus=function(){return h.H.useHostTransitionStatus()},Et.version="19.1.0",Et}var D0;function dv(){if(D0)return uc.exports;D0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),uc.exports=fv(),uc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function hv(){if(z0)return Kr;z0=1;var l=cv(),r=Sc(),o=dv();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return p(i),e;if(s===a)return p(i),t;s=s.sibling}throw Error(u(188))}if(n.return!==a.return)n=i,a=s;else{for(var d=!1,m=i.child;m;){if(m===n){d=!0,n=i,a=s;break}if(m===a){d=!0,a=i,n=s;break}m=m.sibling}if(!d){for(m=s.child;m;){if(m===n){d=!0,n=s,a=i;break}if(m===a){d=!0,a=s,n=i;break}m=m.sibling}if(!d)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,C=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),ie=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),ne=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ke=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),tt=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=tt&&e[tt]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case te:return"Profiler";case H:return"StrictMode";case J:return"Suspense";case Ye:return"SuspenseList";case ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ie:return"Portal";case ye:return(e.displayName||"Context")+".Provider";case ne:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var fe=Array.isArray,z=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},Ne=[],x=-1;function U(e){return{current:e}}function Q(e){0>x||(e.current=Ne[x],Ne[x]=null,x--)}function L(e,t){x++,Ne[x]=e.current,e.current=t}var oe=U(null),De=U(null),pe=U(null),yt=U(null);function Ke(e,t){switch(L(pe,t),L(De,e),L(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$h(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$h(t),e=Ph(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(oe),L(oe,e)}function Qt(){Q(oe),Q(De),Q(pe)}function Oa(e){e.memoizedState!==null&&L(yt,e);var t=oe.current,n=Ph(t,e.type);t!==n&&(L(De,e),L(oe,n))}function $a(e){De.current===e&&(Q(oe),Q(De)),yt.current===e&&(Q(yt),Zr._currentValue=ee)}var Pa=Object.prototype.hasOwnProperty,$l=l.unstable_scheduleCallback,Fa=l.unstable_cancelCallback,ii=l.unstable_shouldYield,Xo=l.unstable_requestPaint,Kt=l.unstable_now,wc=l.unstable_getCurrentPriorityLevel,Pl=l.unstable_ImmediatePriority,y=l.unstable_UserBlockingPriority,E=l.unstable_NormalPriority,M=l.unstable_LowPriority,X=l.unstable_IdlePriority,Y=l.log,Z=l.unstable_setDisableYieldValue,W=null,be=null;function ze(e){if(typeof Y=="function"&&Z(e),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(W,e)}catch{}}var $e=Math.clz32?Math.clz32:Go,Wa=Math.log,dn=Math.LN2;function Go(e){return e>>>=0,e===0?32:31-(Wa(e)/dn|0)|0}var Ln=256,Xn=4194304;function _n(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ta(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~s,a!==0?i=_n(a):(d&=m,d!==0?i=_n(d):n||(n=m&~e,n!==0&&(i=_n(n))))):(m=a&~s,m!==0?i=_n(m):d!==0?i=_n(d):n||(n=a&~e,n!==0&&(i=_n(n)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:i}function Aa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function oi(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nc(){var e=Ln;return Ln<<=1,(Ln&4194048)===0&&(Ln=256),e}function Mc(){var e=Xn;return Xn<<=1,(Xn&62914560)===0&&(Xn=4194304),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Km(e,t,n,a,i,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,b=e.expirationTimes,A=e.hiddenUpdates;for(n=d&~n;0<n;){var N=31-$e(n),j=1<<N;m[N]=0,b[N]=-1;var k=A[N];if(k!==null)for(A[N]=null,N=0;N<k.length;N++){var D=k[N];D!==null&&(D.lane&=-536870913)}n&=~j}a!==0&&Cc(e,a,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function Cc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-$e(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Rc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-$e(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Ko(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jc(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:p0(e.type))}function Jm(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var Gn=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Gn,Nt="__reactProps$"+Gn,Ia="__reactContainer$"+Gn,$o="__reactEvents$"+Gn,$m="__reactListeners$"+Gn,Pm="__reactHandles$"+Gn,Uc="__reactResources$"+Gn,Wl="__reactMarker$"+Gn;function Po(e){delete e[Tt],delete e[Nt],delete e[$o],delete e[$m],delete e[Pm]}function el(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ia]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=e0(e);e!==null;){if(n=e[Tt])return n;e=e0(e)}return t}e=n,n=e.parentNode}return null}function tl(e){if(e=e[Tt]||e[Ia]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Il(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function nl(e){var t=e[Uc];return t||(t=e[Uc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pt(e){e[Wl]=!0}var qc=new Set,Hc={};function Ea(e,t){al(e,t),al(e+"Capture",t)}function al(e,t){for(Hc[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var Fm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vc={},Bc={};function Wm(e){return Pa.call(Bc,e)?!0:Pa.call(Vc,e)?!1:Fm.test(e)?Bc[e]=!0:(Vc[e]=!0,!1)}function ui(e,t,n){if(Wm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function si(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Sn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Fo,Zc;function ll(e){if(Fo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fo=t&&t[1]||"",Zc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fo+e+Zc}var Wo=!1;function Io(e,t){if(!e||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(D){var k=D}Reflect.construct(e,[],j)}else{try{j.call()}catch(D){k=D}e.call(j.prototype)}}else{try{throw Error()}catch(D){k=D}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(D){if(D&&k&&typeof D.stack=="string")return[D.stack,k.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),d=s[0],m=s[1];if(d&&m){var b=d.split(`
`),A=m.split(`
`);for(i=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(a===b.length||i===A.length)for(a=b.length-1,i=A.length-1;1<=a&&0<=i&&b[a]!==A[i];)i--;for(;1<=a&&0<=i;a--,i--)if(b[a]!==A[i]){if(a!==1||i!==1)do if(a--,i--,0>i||b[a]!==A[i]){var N=`
`+b[a].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=a&&0<=i);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ll(n):""}function Im(e){switch(e.tag){case 26:case 27:case 5:return ll(e.type);case 16:return ll("Lazy");case 13:return ll("Suspense");case 19:return ll("SuspenseList");case 0:case 15:return Io(e.type,!1);case 11:return Io(e.type.render,!1);case 1:return Io(e.type,!0);case 31:return ll("Activity");default:return""}}function Yc(e){try{var t="";do t+=Im(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(e){var t=Lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){a=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ci(e){e._valueTracker||(e._valueTracker=ep(e))}function Xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Lc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tp=/[\n"\\]/g;function $t(e){return e.replace(tp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function eu(e,t,n,a,i,s,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Jt(t)):e.value!==""+Jt(t)&&(e.value=""+Jt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?tu(e,d,Jt(t)):n!=null?tu(e,d,Jt(n)):a!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Jt(m):e.removeAttribute("name")}function Gc(e,t,n,a,i,s,d,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+Jt(n):"",t=t!=null?""+Jt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function tu(e,t,n){t==="number"&&fi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function rl(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qc(e,t,n){if(t!=null&&(t=""+Jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Jt(n):""}function Kc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(fe(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function il(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||np.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $c(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Jc(e,i,a)}else for(var s in t)t.hasOwnProperty(s)&&Jc(e,s,t[s])}function nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function di(e){return lp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var au=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,ul=null;function Pc(e){var t=tl(e);if(t&&(e=t.stateNode)){var n=e[Nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(eu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+$t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[Nt]||null;if(!i)throw Error(u(90));eu(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Xc(a)}break e;case"textarea":Qc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&rl(e,!!n.multiple,t,!1)}}}var ru=!1;function Fc(e,t,n){if(ru)return e(t,n);ru=!0;try{var a=e(t);return a}finally{if(ru=!1,(ol!==null||ul!==null)&&(Fi(),ol&&(t=ol,e=ul,ul=ol=null,Pc(t),e)))for(t=0;t<e.length;t++)Pc(e[t])}}function er(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Nt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(On)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){iu=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{iu=!1}var Qn=null,ou=null,hi=null;function Wc(){if(hi)return hi;var e,t=ou,n=t.length,a,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===i[s-a];a++);return hi=i.slice(e,1<a?1-a:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function Ic(){return!1}function Mt(e){function t(n,a,i,s,d){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pi:Ic,this.isPropagationStopped=Ic,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=Mt(ka),nr=O({},ka,{view:0,detail:0}),rp=Mt(nr),uu,su,ar,vi=O({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(uu=e.screenX-ar.screenX,su=e.screenY-ar.screenY):su=uu=0,ar=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:su}}),ef=Mt(vi),ip=O({},vi,{dataTransfer:0}),op=Mt(ip),up=O({},nr,{relatedTarget:0}),cu=Mt(up),sp=O({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),cp=Mt(sp),fp=O({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dp=Mt(fp),hp=O({},ka,{data:0}),tf=Mt(hp),mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gp[e])?!!t[e]:!1}function fu(){return vp}var bp=O({},nr,{key:function(e){if(e.key){var t=mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yp=Mt(bp),xp=O({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=Mt(xp),_p=O({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Sp=Mt(_p),Op=O({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tp=Mt(Op),Ap=O({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ep=Mt(Ap),kp=O({},ka,{newState:0,oldState:0}),Dp=Mt(kp),zp=[9,13,27,32],du=On&&"CompositionEvent"in window,lr=null;On&&"documentMode"in document&&(lr=document.documentMode);var wp=On&&"TextEvent"in window&&!lr,af=On&&(!du||lr&&8<lr&&11>=lr),lf=" ",rf=!1;function of(e,t){switch(e){case"keyup":return zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function Np(e,t){switch(e){case"compositionend":return uf(t);case"keypress":return t.which!==32?null:(rf=!0,lf);case"textInput":return e=t.data,e===lf&&rf?null:e;default:return null}}function Mp(e,t){if(sl)return e==="compositionend"||!du&&of(e,t)?(e=Wc(),hi=ou=Qn=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return af&&t.locale!=="ko"?null:t.data;default:return null}}var Cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cp[e.type]:t==="textarea"}function cf(e,t,n,a){ol?ul?ul.push(a):ul=[a]:ol=a,t=ao(t,"onChange"),0<t.length&&(n=new gi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var rr=null,ir=null;function Rp(e){Xh(e,0)}function bi(e){var t=Il(e);if(Xc(t))return e}function ff(e,t){if(e==="change")return t}var df=!1;if(On){var hu;if(On){var mu="oninput"in document;if(!mu){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),mu=typeof hf.oninput=="function"}hu=mu}else hu=!1;df=hu&&(!document.documentMode||9<document.documentMode)}function mf(){rr&&(rr.detachEvent("onpropertychange",pf),ir=rr=null)}function pf(e){if(e.propertyName==="value"&&bi(ir)){var t=[];cf(t,ir,e,lu(e)),Fc(Rp,t)}}function jp(e,t,n){e==="focusin"?(mf(),rr=t,ir=n,rr.attachEvent("onpropertychange",pf)):e==="focusout"&&mf()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(ir)}function qp(e,t){if(e==="click")return bi(t)}function Hp(e,t){if(e==="input"||e==="change")return bi(t)}function Vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Vp;function or(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Pa.call(t,i)||!qt(e[i],t[i]))return!1}return!0}function gf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vf(e,t){var n=gf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gf(n)}}function bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=fi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fi(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Bp=On&&"documentMode"in document&&11>=document.documentMode,cl=null,gu=null,ur=null,vu=!1;function xf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||cl==null||cl!==fi(a)||(a=cl,"selectionStart"in a&&pu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ur&&or(ur,a)||(ur=a,a=ao(gu,"onSelect"),0<a.length&&(t=new gi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=cl)))}function Da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fl={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},bu={},_f={};On&&(_f=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function za(e){if(bu[e])return bu[e];if(!fl[e])return e;var t=fl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _f)return bu[e]=t[n];return e}var Sf=za("animationend"),Of=za("animationiteration"),Tf=za("animationstart"),Zp=za("transitionrun"),Yp=za("transitionstart"),Lp=za("transitioncancel"),Af=za("transitionend"),Ef=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function ln(e,t){Ef.set(e,t),Ea(t,[e])}var kf=new WeakMap;function Pt(e,t){if(typeof e=="object"&&e!==null){var n=kf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Yc(t)},kf.set(e,t),t)}return{value:e,source:t,stack:Yc(t)}}var Ft=[],dl=0,xu=0;function yi(){for(var e=dl,t=xu=dl=0;t<e;){var n=Ft[t];Ft[t++]=null;var a=Ft[t];Ft[t++]=null;var i=Ft[t];Ft[t++]=null;var s=Ft[t];if(Ft[t++]=null,a!==null&&i!==null){var d=a.pending;d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i}s!==0&&Df(n,i,s)}}function xi(e,t,n,a){Ft[dl++]=e,Ft[dl++]=t,Ft[dl++]=n,Ft[dl++]=a,xu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function _u(e,t,n,a){return xi(e,t,n,a),_i(e)}function hl(e,t){return xi(e,null,null,t),_i(e)}function Df(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-$e(n),e=s.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),s):null}function _i(e){if(50<Cr)throw Cr=0,ks=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ml={};function Xp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,a){return new Xp(e,t,n,a)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tn(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function zf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,a,i,s){var d=0;if(a=e,typeof e=="function")Su(e)&&(d=1);else if(typeof e=="string")d=Qg(e,n,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ke:return e=Ht(31,n,t,i),e.elementType=ke,e.lanes=s,e;case K:return wa(n.children,i,s,t);case H:d=8,i|=24;break;case te:return e=Ht(12,n,t,i|2),e.elementType=te,e.lanes=s,e;case J:return e=Ht(13,n,t,i),e.elementType=J,e.lanes=s,e;case Ye:return e=Ht(19,n,t,i),e.elementType=Ye,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:case ye:d=10;break e;case ne:d=9;break e;case je:d=11;break e;case we:d=14;break e;case Fe:d=16,a=null;break e}d=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Ht(d,n,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function wa(e,t,n,a){return e=Ht(7,e,a,t),e.lanes=n,e}function Ou(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function Tu(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pl=[],gl=0,Oi=null,Ti=0,Wt=[],It=0,Na=null,An=1,En="";function Ma(e,t){pl[gl++]=Ti,pl[gl++]=Oi,Oi=e,Ti=t}function wf(e,t,n){Wt[It++]=An,Wt[It++]=En,Wt[It++]=Na,Na=e;var a=An;e=En;var i=32-$e(a)-1;a&=~(1<<i),n+=1;var s=32-$e(t)+i;if(30<s){var d=i-i%5;s=(a&(1<<d)-1).toString(32),a>>=d,i-=d,An=1<<32-$e(t)+i|n<<i|a,En=s+e}else An=1<<s|n<<i|a,En=e}function Au(e){e.return!==null&&(Ma(e,1),wf(e,1,0))}function Eu(e){for(;e===Oi;)Oi=pl[--gl],pl[gl]=null,Ti=pl[--gl],pl[gl]=null;for(;e===Na;)Na=Wt[--It],Wt[It]=null,En=Wt[--It],Wt[It]=null,An=Wt[--It],Wt[It]=null}var Dt=null,nt=null,He=!1,Ca=null,hn=!1,ku=Error(u(519));function Ra(e){var t=Error(u(418,""));throw fr(Pt(t,e)),ku}function Nf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Tt]=e,t[Nt]=a,n){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(n=0;n<jr.length;n++)Ee(jr[n],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),Gc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ci(t);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),Kc(t,a.value,a.defaultValue,a.children),ci(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Jh(t.textContent,n)?(a.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),a.onScroll!=null&&Ee("scroll",t),a.onScrollEnd!=null&&Ee("scrollend",t),a.onClick!=null&&(t.onclick=lo),t=!0):t=!1,t||Ra(e)}function Mf(e){for(Dt=e.return;Dt;)switch(Dt.tag){case 5:case 13:hn=!1;return;case 27:case 3:hn=!0;return;default:Dt=Dt.return}}function sr(e){if(e!==Dt)return!1;if(!He)return Mf(e),He=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ls(e.type,e.memoizedProps)),n=!n),n&&nt&&Ra(e),Mf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){nt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}nt=null}}else t===27?(t=nt,ua(e.type)?(e=Ks,Ks=null,nt=e):nt=t):nt=Dt?on(e.stateNode.nextSibling):null;return!0}function cr(){nt=Dt=null,He=!1}function Cf(){var e=Ca;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Ca=null),e}function fr(e){Ca===null?Ca=[e]:Ca.push(e)}var Du=U(null),ja=null,kn=null;function Kn(e,t,n){L(Du,t._currentValue),t._currentValue=n}function Dn(e){e._currentValue=Du.current,Q(Du)}function zu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function wu(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var d=i.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=i;for(var b=0;b<t.length;b++)if(m.context===t[b]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),zu(s.return,n,e),a||(d=null);break e}s=m.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(u(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),zu(d,n,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function dr(e,t,n,a){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var m=i.type;qt(i.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(i===yt.current){if(d=i.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Zr):e=[Zr])}i=i.return}e!==null&&wu(t,e,n,a),t.flags|=262144}function Ai(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){ja=e,kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function At(e){return Rf(ja,e)}function Ei(e,t){return ja===null&&Ua(e),Rf(e,t)}function Rf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},kn===null){if(e===null)throw Error(u(308));kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kn=kn.next=t;return n}var Gp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Qp=l.unstable_scheduleCallback,Kp=l.unstable_NormalPriority,ft={$$typeof:ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new Gp,data:new Map,refCount:0}}function hr(e){e.refCount--,e.refCount===0&&Qp(Kp,function(){e.controller.abort()})}var mr=null,Mu=0,vl=0,bl=null;function Jp(e,t){if(mr===null){var n=mr=[];Mu=0,vl=Rs(),bl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Mu++,t.then(jf,jf),t}function jf(){if(--Mu===0&&mr!==null){bl!==null&&(bl.status="fulfilled");var e=mr;mr=null,vl=0,bl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $p(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Uf=z.S;z.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Jp(e,t),Uf!==null&&Uf(e,t)};var qa=U(null);function Cu(){var e=qa.current;return e!==null?e:Pe.pooledCache}function ki(e,t){t===null?L(qa,qa.current):L(qa,t.pool)}function qf(){var e=Cu();return e===null?null:{parent:ft._currentValue,pool:e}}var pr=Error(u(460)),Hf=Error(u(474)),Di=Error(u(542)),Ru={then:function(){}};function Vf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zi(){}function Bf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(zi,zi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yf(e),e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yf(e),e}throw gr=t,pr}}var gr=null;function Zf(){if(gr===null)throw Error(u(459));var e=gr;return gr=null,e}function Yf(e){if(e===pr||e===Di)throw Error(u(483))}var Jn=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ve&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=_i(e),Df(e,null,n),t}return xi(e,a,t,n),_i(e)}function vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Rc(e,n)}}function qu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Hu=!1;function br(){if(Hu){var e=bl;if(e!==null)throw e}}function yr(e,t,n,a){Hu=!1;var i=e.updateQueue;Jn=!1;var s=i.firstBaseUpdate,d=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var b=m,A=b.next;b.next=null,d===null?s=A:d.next=A,d=b;var N=e.alternate;N!==null&&(N=N.updateQueue,m=N.lastBaseUpdate,m!==d&&(m===null?N.firstBaseUpdate=A:m.next=A,N.lastBaseUpdate=b))}if(s!==null){var j=i.baseState;d=0,N=A=b=null,m=s;do{var k=m.lane&-536870913,D=k!==m.lane;if(D?(Me&k)===k:(a&k)===k){k!==0&&k===vl&&(Hu=!0),N!==null&&(N=N.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var de=e,se=m;k=t;var Ge=n;switch(se.tag){case 1:if(de=se.payload,typeof de=="function"){j=de.call(Ge,j,k);break e}j=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=se.payload,k=typeof de=="function"?de.call(Ge,j,k):de,k==null)break e;j=O({},j,k);break e;case 2:Jn=!0}}k=m.callback,k!==null&&(e.flags|=64,D&&(e.flags|=8192),D=i.callbacks,D===null?i.callbacks=[k]:D.push(k))}else D={lane:k,tag:m.tag,payload:m.payload,callback:m.callback,next:null},N===null?(A=N=D,b=j):N=N.next=D,d|=k;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;D=m,m=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);N===null&&(b=j),i.baseState=b,i.firstBaseUpdate=A,i.lastBaseUpdate=N,s===null&&(i.shared.lanes=0),la|=d,e.lanes=d,e.memoizedState=j}}function Lf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Xf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Lf(n[e],t)}var yl=U(null),wi=U(0);function Gf(e,t){e=jn,L(wi,e),L(yl,t),jn=e|t.baseLanes}function Vu(){L(wi,jn),L(yl,yl.current)}function Bu(){jn=wi.current,Q(yl),Q(wi)}var Fn=0,_e=null,Le=null,ot=null,Ni=!1,xl=!1,Ha=!1,Mi=0,xr=0,_l=null,Pp=0;function lt(){throw Error(u(321))}function Zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function Yu(e,t,n,a,i,s){return Fn=s,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Dd:zd,Ha=!1,s=n(a,i),Ha=!1,xl&&(s=Kf(t,n,a,i)),Qf(e),s}function Qf(e){z.H=Hi;var t=Le!==null&&Le.next!==null;if(Fn=0,ot=Le=_e=null,Ni=!1,xr=0,_l=null,t)throw Error(u(300));e===null||gt||(e=e.dependencies,e!==null&&Ai(e)&&(gt=!0))}function Kf(e,t,n,a){_e=e;var i=0;do{if(xl&&(_l=null),xr=0,xl=!1,25<=i)throw Error(u(301));if(i+=1,ot=Le=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}z.H=ag,s=t(n,a)}while(xl);return s}function Fp(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?_r(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(_e.flags|=1024),t}function Lu(){var e=Mi!==0;return Mi=0,e}function Xu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Gu(e){if(Ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ni=!1}Fn=0,ot=Le=_e=null,xl=!1,xr=Mi=0,_l=null}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?_e.memoizedState=ot=e:ot=ot.next=e,ot}function ut(){if(Le===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=ot===null?_e.memoizedState:ot.next;if(t!==null)ot=t,Le=e;else{if(e===null)throw _e.alternate===null?Error(u(467)):Error(u(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},ot===null?_e.memoizedState=ot=e:ot=ot.next=e}return ot}function Qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _r(e){var t=xr;return xr+=1,_l===null&&(_l=[]),e=Bf(_l,e,t),t=_e,(ot===null?t.memoizedState:ot.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Dd:zd),e}function Ci(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _r(e);if(e.$$typeof===ye)return At(e)}throw Error(u(438,String(e)))}function Ku(e){var t=null,n=_e.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=_e.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Qu(),_e.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ot;return t.index++,n}function zn(e,t){return typeof t=="function"?t(e):t}function Ri(e){var t=ut();return Ju(t,Le,e)}function Ju(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var i=e.baseQueue,s=a.pending;if(s!==null){if(i!==null){var d=i.next;i.next=s.next,s.next=d}t.baseQueue=i=s,a.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var m=d=null,b=null,A=t,N=!1;do{var j=A.lane&-536870913;if(j!==A.lane?(Me&j)===j:(Fn&j)===j){var k=A.revertLane;if(k===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),j===vl&&(N=!0);else if((Fn&k)===k){A=A.next,k===vl&&(N=!0);continue}else j={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(m=b=j,d=s):b=b.next=j,_e.lanes|=k,la|=k;j=A.action,Ha&&n(s,j),s=A.hasEagerState?A.eagerState:n(s,j)}else k={lane:j,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(m=b=k,d=s):b=b.next=k,_e.lanes|=j,la|=j;A=A.next}while(A!==null&&A!==t);if(b===null?d=s:b.next=m,!qt(s,e.memoizedState)&&(gt=!0,N&&(n=bl,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=b,a.lastRenderedState=s}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function $u(e){var t=ut(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do s=e(s,d.action),d=d.next;while(d!==i);qt(s,t.memoizedState)||(gt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Jf(e,t,n){var a=_e,i=ut(),s=He;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var d=!qt((Le||i).memoizedState,n);d&&(i.memoizedState=n,gt=!0),i=i.queue;var m=Ff.bind(null,a,i,e);if(Sr(2048,8,m,[e]),i.getSnapshot!==t||d||ot!==null&&ot.memoizedState.tag&1){if(a.flags|=2048,Sl(9,ji(),Pf.bind(null,a,i,n,t),null),Pe===null)throw Error(u(349));s||(Fn&124)!==0||$f(a,t,n)}return n}function $f(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t=Qu(),_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pf(e,t,n,a){t.value=n,t.getSnapshot=a,Wf(t)&&If(e)}function Ff(e,t,n){return n(function(){Wf(t)&&If(e)})}function Wf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function If(e){var t=hl(e,2);t!==null&&Lt(t,e,2)}function Pu(e){var t=Ct();if(typeof e=="function"){var n=e;if(e=n(),Ha){ze(!0);try{n()}finally{ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:e},t}function ed(e,t,n,a){return e.baseState=n,Ju(e,Le,typeof a=="function"?a:zn)}function Wp(e,t,n,a,i){if(qi(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};z.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,td(t,s)):(s.next=n.next,t.pending=n.next=s)}}function td(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var s=z.T,d={};z.T=d;try{var m=n(i,a),b=z.S;b!==null&&b(d,m),nd(e,t,m)}catch(A){Fu(e,t,A)}finally{z.T=s}}else try{s=n(i,a),nd(e,t,s)}catch(A){Fu(e,t,A)}}function nd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ad(e,t,a)},function(a){return Fu(e,t,a)}):ad(e,t,n)}function ad(e,t,n){t.status="fulfilled",t.value=n,ld(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,td(e,n)))}function Fu(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,ld(t),t=t.next;while(t!==a)}e.action=null}function ld(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rd(e,t){return t}function id(e,t){if(He){var n=Pe.formState;if(n!==null){e:{var a=_e;if(He){if(nt){t:{for(var i=nt,s=hn;i.nodeType!==8;){if(!s){i=null;break t}if(i=on(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){nt=on(i.nextSibling),a=i.data==="F!";break e}}Ra(a)}a=!1}a&&(t=n[0])}}return n=Ct(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rd,lastRenderedState:t},n.queue=a,n=Ad.bind(null,_e,a),a.dispatch=n,a=Pu(!1),s=ns.bind(null,_e,!1,a.queue),a=Ct(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Wp.bind(null,_e,i,s,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function od(e){var t=ut();return ud(t,Le,e)}function ud(e,t,n){if(t=Ju(e,t,rd)[0],e=Ri(zn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=_r(t)}catch(d){throw d===pr?Di:d}else a=t;t=ut();var i=t.queue,s=i.dispatch;return n!==t.memoizedState&&(_e.flags|=2048,Sl(9,ji(),Ip.bind(null,i,n),null)),[a,s,e]}function Ip(e,t){e.action=t}function sd(e){var t=ut(),n=Le;if(n!==null)return ud(t,n,e);ut(),t=t.memoizedState,n=ut();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Sl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=_e.updateQueue,t===null&&(t=Qu(),_e.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ji(){return{destroy:void 0,resource:void 0}}function cd(){return ut().memoizedState}function Ui(e,t,n,a){var i=Ct();a=a===void 0?null:a,_e.flags|=e,i.memoizedState=Sl(1|t,ji(),n,a)}function Sr(e,t,n,a){var i=ut();a=a===void 0?null:a;var s=i.memoizedState.inst;Le!==null&&a!==null&&Zu(a,Le.memoizedState.deps)?i.memoizedState=Sl(t,s,n,a):(_e.flags|=e,i.memoizedState=Sl(1|t,s,n,a))}function fd(e,t){Ui(8390656,8,e,t)}function dd(e,t){Sr(2048,8,e,t)}function hd(e,t){return Sr(4,2,e,t)}function md(e,t){return Sr(4,4,e,t)}function pd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gd(e,t,n){n=n!=null?n.concat([e]):null,Sr(4,4,pd.bind(null,t,e),n)}function Wu(){}function vd(e,t){var n=ut();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Zu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function bd(e,t){var n=ut();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Zu(t,a[1]))return a[0];if(a=e(),Ha){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[a,t],a}function Iu(e,t,n){return n===void 0||(Fn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=_h(),_e.lanes|=e,la|=e,n)}function yd(e,t,n,a){return qt(n,t)?n:yl.current!==null?(e=Iu(e,n,a),qt(e,t)||(gt=!0),e):(Fn&42)===0?(gt=!0,e.memoizedState=n):(e=_h(),_e.lanes|=e,la|=e,t)}function xd(e,t,n,a,i){var s=V.p;V.p=s!==0&&8>s?s:8;var d=z.T,m={};z.T=m,ns(e,!1,t,n);try{var b=i(),A=z.S;if(A!==null&&A(m,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var N=$p(b,a);Or(e,t,N,Yt(e))}else Or(e,t,a,Yt(e))}catch(j){Or(e,t,{then:function(){},status:"rejected",reason:j},Yt())}finally{V.p=s,z.T=d}}function eg(){}function es(e,t,n,a){if(e.tag!==5)throw Error(u(476));var i=_d(e).queue;xd(e,i,t,ee,n===null?eg:function(){return Sd(e),n(a)})}function _d(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sd(e){var t=_d(e).next.queue;Or(e,t,{},Yt())}function ts(){return At(Zr)}function Od(){return ut().memoizedState}function Td(){return ut().memoizedState}function tg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Yt();e=$n(n);var a=Pn(t,e,n);a!==null&&(Lt(a,t,n),vr(a,t,n)),t={cache:Nu()},e.payload=t;return}t=t.return}}function ng(e,t,n){var a=Yt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e)?Ed(t,n):(n=_u(e,t,n,a),n!==null&&(Lt(n,e,a),kd(n,t,a)))}function Ad(e,t,n){var a=Yt();Or(e,t,n,a)}function Or(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Ed(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,m=s(d,n);if(i.hasEagerState=!0,i.eagerState=m,qt(m,d))return xi(e,t,i,0),Pe===null&&yi(),!1}catch{}finally{}if(n=_u(e,t,i,a),n!==null)return Lt(n,e,a),kd(n,t,a),!0}return!1}function ns(e,t,n,a){if(a={lane:2,revertLane:Rs(),action:a,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(u(479))}else t=_u(e,n,a,2),t!==null&&Lt(t,e,2)}function qi(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function Ed(e,t){xl=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Rc(e,n)}}var Hi={readContext:At,use:Ci,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},Dd={readContext:At,use:Ci,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:fd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ui(4194308,4,pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var n=Ct();t=t===void 0?null:t;var a=e();if(Ha){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Ct();if(n!==void 0){var i=n(t);if(Ha){ze(!0);try{n(t)}finally{ze(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=ng.bind(null,_e,e),[a.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Pu(e);var t=e.queue,n=Ad.bind(null,_e,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Wu,useDeferredValue:function(e,t){var n=Ct();return Iu(n,e,t)},useTransition:function(){var e=Pu(!1);return e=xd.bind(null,_e,e.queue,!0,!1),Ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=_e,i=Ct();if(He){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Pe===null)throw Error(u(349));(Me&124)!==0||$f(a,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,fd(Ff.bind(null,a,s,e),[e]),a.flags|=2048,Sl(9,ji(),Pf.bind(null,a,s,n,t),null),n},useId:function(){var e=Ct(),t=Pe.identifierPrefix;if(He){var n=En,a=An;n=(a&~(1<<32-$e(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Mi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Pp++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ts,useFormState:id,useActionState:id,useOptimistic:function(e){var t=Ct();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ns.bind(null,_e,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ku,useCacheRefresh:function(){return Ct().memoizedState=tg.bind(null,_e)}},zd={readContext:At,use:Ci,useCallback:vd,useContext:At,useEffect:dd,useImperativeHandle:gd,useInsertionEffect:hd,useLayoutEffect:md,useMemo:bd,useReducer:Ri,useRef:cd,useState:function(){return Ri(zn)},useDebugValue:Wu,useDeferredValue:function(e,t){var n=ut();return yd(n,Le.memoizedState,e,t)},useTransition:function(){var e=Ri(zn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:_r(e),t]},useSyncExternalStore:Jf,useId:Od,useHostTransitionStatus:ts,useFormState:od,useActionState:od,useOptimistic:function(e,t){var n=ut();return ed(n,Le,e,t)},useMemoCache:Ku,useCacheRefresh:Td},ag={readContext:At,use:Ci,useCallback:vd,useContext:At,useEffect:dd,useImperativeHandle:gd,useInsertionEffect:hd,useLayoutEffect:md,useMemo:bd,useReducer:$u,useRef:cd,useState:function(){return $u(zn)},useDebugValue:Wu,useDeferredValue:function(e,t){var n=ut();return Le===null?Iu(n,e,t):yd(n,Le.memoizedState,e,t)},useTransition:function(){var e=$u(zn)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:_r(e),t]},useSyncExternalStore:Jf,useId:Od,useHostTransitionStatus:ts,useFormState:sd,useActionState:sd,useOptimistic:function(e,t){var n=ut();return Le!==null?ed(n,Le,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Td},Ol=null,Tr=0;function Vi(e){var t=Tr;return Tr+=1,Ol===null&&(Ol=[]),Bf(Ol,e,t)}function Ar(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bi(e,t){throw t.$$typeof===C?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wd(e){var t=e._init;return t(e._payload)}function Nd(e){function t(S,_){if(e){var T=S.deletions;T===null?(S.deletions=[_],S.flags|=16):T.push(_)}}function n(S,_){if(!e)return null;for(;_!==null;)t(S,_),_=_.sibling;return null}function a(S){for(var _=new Map;S!==null;)S.key!==null?_.set(S.key,S):_.set(S.index,S),S=S.sibling;return _}function i(S,_){return S=Tn(S,_),S.index=0,S.sibling=null,S}function s(S,_,T){return S.index=T,e?(T=S.alternate,T!==null?(T=T.index,T<_?(S.flags|=67108866,_):T):(S.flags|=67108866,_)):(S.flags|=1048576,_)}function d(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function m(S,_,T,R){return _===null||_.tag!==6?(_=Ou(T,S.mode,R),_.return=S,_):(_=i(_,T),_.return=S,_)}function b(S,_,T,R){var $=T.type;return $===K?N(S,_,T.props.children,R,T.key):_!==null&&(_.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Fe&&wd($)===_.type)?(_=i(_,T.props),Ar(_,T),_.return=S,_):(_=Si(T.type,T.key,T.props,null,S.mode,R),Ar(_,T),_.return=S,_)}function A(S,_,T,R){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Tu(T,S.mode,R),_.return=S,_):(_=i(_,T.children||[]),_.return=S,_)}function N(S,_,T,R,$){return _===null||_.tag!==7?(_=wa(T,S.mode,R,$),_.return=S,_):(_=i(_,T),_.return=S,_)}function j(S,_,T){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Ou(""+_,S.mode,T),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case w:return T=Si(_.type,_.key,_.props,null,S.mode,T),Ar(T,_),T.return=S,T;case ie:return _=Tu(_,S.mode,T),_.return=S,_;case Fe:var R=_._init;return _=R(_._payload),j(S,_,T)}if(fe(_)||ue(_))return _=wa(_,S.mode,T,null),_.return=S,_;if(typeof _.then=="function")return j(S,Vi(_),T);if(_.$$typeof===ye)return j(S,Ei(S,_),T);Bi(S,_)}return null}function k(S,_,T,R){var $=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return $!==null?null:m(S,_,""+T,R);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case w:return T.key===$?b(S,_,T,R):null;case ie:return T.key===$?A(S,_,T,R):null;case Fe:return $=T._init,T=$(T._payload),k(S,_,T,R)}if(fe(T)||ue(T))return $!==null?null:N(S,_,T,R,null);if(typeof T.then=="function")return k(S,_,Vi(T),R);if(T.$$typeof===ye)return k(S,_,Ei(S,T),R);Bi(S,T)}return null}function D(S,_,T,R,$){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return S=S.get(T)||null,m(_,S,""+R,$);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case w:return S=S.get(R.key===null?T:R.key)||null,b(_,S,R,$);case ie:return S=S.get(R.key===null?T:R.key)||null,A(_,S,R,$);case Fe:var Oe=R._init;return R=Oe(R._payload),D(S,_,T,R,$)}if(fe(R)||ue(R))return S=S.get(T)||null,N(_,S,R,$,null);if(typeof R.then=="function")return D(S,_,T,Vi(R),$);if(R.$$typeof===ye)return D(S,_,T,Ei(_,R),$);Bi(_,R)}return null}function de(S,_,T,R){for(var $=null,Oe=null,le=_,ce=_=0,bt=null;le!==null&&ce<T.length;ce++){le.index>ce?(bt=le,le=null):bt=le.sibling;var Ue=k(S,le,T[ce],R);if(Ue===null){le===null&&(le=bt);break}e&&le&&Ue.alternate===null&&t(S,le),_=s(Ue,_,ce),Oe===null?$=Ue:Oe.sibling=Ue,Oe=Ue,le=bt}if(ce===T.length)return n(S,le),He&&Ma(S,ce),$;if(le===null){for(;ce<T.length;ce++)le=j(S,T[ce],R),le!==null&&(_=s(le,_,ce),Oe===null?$=le:Oe.sibling=le,Oe=le);return He&&Ma(S,ce),$}for(le=a(le);ce<T.length;ce++)bt=D(le,S,ce,T[ce],R),bt!==null&&(e&&bt.alternate!==null&&le.delete(bt.key===null?ce:bt.key),_=s(bt,_,ce),Oe===null?$=bt:Oe.sibling=bt,Oe=bt);return e&&le.forEach(function(ha){return t(S,ha)}),He&&Ma(S,ce),$}function se(S,_,T,R){if(T==null)throw Error(u(151));for(var $=null,Oe=null,le=_,ce=_=0,bt=null,Ue=T.next();le!==null&&!Ue.done;ce++,Ue=T.next()){le.index>ce?(bt=le,le=null):bt=le.sibling;var ha=k(S,le,Ue.value,R);if(ha===null){le===null&&(le=bt);break}e&&le&&ha.alternate===null&&t(S,le),_=s(ha,_,ce),Oe===null?$=ha:Oe.sibling=ha,Oe=ha,le=bt}if(Ue.done)return n(S,le),He&&Ma(S,ce),$;if(le===null){for(;!Ue.done;ce++,Ue=T.next())Ue=j(S,Ue.value,R),Ue!==null&&(_=s(Ue,_,ce),Oe===null?$=Ue:Oe.sibling=Ue,Oe=Ue);return He&&Ma(S,ce),$}for(le=a(le);!Ue.done;ce++,Ue=T.next())Ue=D(le,S,ce,Ue.value,R),Ue!==null&&(e&&Ue.alternate!==null&&le.delete(Ue.key===null?ce:Ue.key),_=s(Ue,_,ce),Oe===null?$=Ue:Oe.sibling=Ue,Oe=Ue);return e&&le.forEach(function(lv){return t(S,lv)}),He&&Ma(S,ce),$}function Ge(S,_,T,R){if(typeof T=="object"&&T!==null&&T.type===K&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case w:e:{for(var $=T.key;_!==null;){if(_.key===$){if($=T.type,$===K){if(_.tag===7){n(S,_.sibling),R=i(_,T.props.children),R.return=S,S=R;break e}}else if(_.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Fe&&wd($)===_.type){n(S,_.sibling),R=i(_,T.props),Ar(R,T),R.return=S,S=R;break e}n(S,_);break}else t(S,_);_=_.sibling}T.type===K?(R=wa(T.props.children,S.mode,R,T.key),R.return=S,S=R):(R=Si(T.type,T.key,T.props,null,S.mode,R),Ar(R,T),R.return=S,S=R)}return d(S);case ie:e:{for($=T.key;_!==null;){if(_.key===$)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(S,_.sibling),R=i(_,T.children||[]),R.return=S,S=R;break e}else{n(S,_);break}else t(S,_);_=_.sibling}R=Tu(T,S.mode,R),R.return=S,S=R}return d(S);case Fe:return $=T._init,T=$(T._payload),Ge(S,_,T,R)}if(fe(T))return de(S,_,T,R);if(ue(T)){if($=ue(T),typeof $!="function")throw Error(u(150));return T=$.call(T),se(S,_,T,R)}if(typeof T.then=="function")return Ge(S,_,Vi(T),R);if(T.$$typeof===ye)return Ge(S,_,Ei(S,T),R);Bi(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,_!==null&&_.tag===6?(n(S,_.sibling),R=i(_,T),R.return=S,S=R):(n(S,_),R=Ou(T,S.mode,R),R.return=S,S=R),d(S)):n(S,_)}return function(S,_,T,R){try{Tr=0;var $=Ge(S,_,T,R);return Ol=null,$}catch(le){if(le===pr||le===Di)throw le;var Oe=Ht(29,le,null,S.mode);return Oe.lanes=R,Oe.return=S,Oe}finally{}}}var Tl=Nd(!0),Md=Nd(!1),en=U(null),mn=null;function Wn(e){var t=e.alternate;L(dt,dt.current&1),L(en,e),mn===null&&(t===null||yl.current!==null||t.memoizedState!==null)&&(mn=e)}function Cd(e){if(e.tag===22){if(L(dt,dt.current),L(en,e),mn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(mn=e)}}else In()}function In(){L(dt,dt.current),L(en,en.current)}function wn(e){Q(en),mn===e&&(mn=null),Q(dt)}var dt=U(0);function Zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Qs(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function as(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Yt(),i=$n(a);i.payload=t,n!=null&&(i.callback=n),t=Pn(e,i,a),t!==null&&(Lt(t,e,a),vr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Yt(),i=$n(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pn(e,i,a),t!==null&&(Lt(t,e,a),vr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yt(),a=$n(n);a.tag=2,t!=null&&(a.callback=t),t=Pn(e,a,n),t!==null&&(Lt(t,e,n),vr(t,e,n))}};function Rd(e,t,n,a,i,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,d):t.prototype&&t.prototype.isPureReactComponent?!or(n,a)||!or(i,s):!0}function jd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function Va(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=O({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var Yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ud(e){Yi(e)}function qd(e){console.error(e)}function Hd(e){Yi(e)}function Li(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Vd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function rs(e,t,n){return n=$n(n),n.tag=3,n.payload={element:null},n.callback=function(){Li(e,t)},n}function Bd(e){return e=$n(e),e.tag=3,e}function Zd(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;e.payload=function(){return i(s)},e.callback=function(){Vd(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Vd(t,n,a),typeof i!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function lg(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&dr(t,n,i,!0),n=en.current,n!==null){switch(n.tag){case 13:return mn===null?zs():n.alternate===null&&at===0&&(at=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Ru?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Ns(e,a,i)),!1;case 22:return n.flags|=65536,a===Ru?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Ns(e,a,i)),!1}throw Error(u(435,n.tag))}return Ns(e,a,i),zs(),!1}if(He)return t=en.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==ku&&(e=Error(u(422),{cause:a}),fr(Pt(e,n)))):(a!==ku&&(t=Error(u(423),{cause:a}),fr(Pt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Pt(a,n),i=rs(e.stateNode,a,i),qu(e,i),at!==4&&(at=2)),!1;var s=Error(u(520),{cause:a});if(s=Pt(s,n),Mr===null?Mr=[s]:Mr.push(s),at!==4&&(at=2),t===null)return!0;a=Pt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rs(n.stateNode,a,e),qu(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ra===null||!ra.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Bd(i),Zd(i,e,n,a),qu(n,i),!1}n=n.return}while(n!==null);return!1}var Yd=Error(u(461)),gt=!1;function xt(e,t,n,a){t.child=e===null?Md(t,null,n,a):Tl(t,e.child,n,a)}function Ld(e,t,n,a,i){n=n.render;var s=t.ref;if("ref"in a){var d={};for(var m in a)m!=="ref"&&(d[m]=a[m])}else d=a;return Ua(t),a=Yu(e,t,n,d,s,i),m=Lu(),e!==null&&!gt?(Xu(e,t,i),Nn(e,t,i)):(He&&m&&Au(t),t.flags|=1,xt(e,t,a,i),t.child)}function Xd(e,t,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!Su(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Gd(e,t,s,a,i)):(e=Si(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!hs(e,i)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(d,a)&&e.ref===t.ref)return Nn(e,t,i)}return t.flags|=1,e=Tn(s,a),e.ref=t.ref,e.return=t,t.child=e}function Gd(e,t,n,a,i){if(e!==null){var s=e.memoizedProps;if(or(s,a)&&e.ref===t.ref)if(gt=!1,t.pendingProps=a=s,hs(e,i))(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,Nn(e,t,i)}return is(e,t,n,a,i)}function Qd(e,t,n){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;t.childLanes=s&~a}else t.childLanes=0,t.child=null;return Kd(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ki(t,s!==null?s.cachePool:null),s!==null?Gf(t,s):Vu(),Cd(t);else return t.lanes=t.childLanes=536870912,Kd(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(ki(t,s.cachePool),Gf(t,s),In(),t.memoizedState=null):(e!==null&&ki(t,null),Vu(),In());return xt(e,t,i,n),t.child}function Kd(e,t,n,a){var i=Cu();return i=i===null?null:{parent:ft._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&ki(t,null),Vu(),Cd(t),e!==null&&dr(e,t,a,!0),null}function Xi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function is(e,t,n,a,i){return Ua(t),n=Yu(e,t,n,a,void 0,i),a=Lu(),e!==null&&!gt?(Xu(e,t,i),Nn(e,t,i)):(He&&a&&Au(t),t.flags|=1,xt(e,t,n,i),t.child)}function Jd(e,t,n,a,i,s){return Ua(t),t.updateQueue=null,n=Kf(t,a,n,i),Qf(e),a=Lu(),e!==null&&!gt?(Xu(e,t,s),Nn(e,t,s)):(He&&a&&Au(t),t.flags|=1,xt(e,t,n,s),t.child)}function $d(e,t,n,a,i){if(Ua(t),t.stateNode===null){var s=ml,d=n.contextType;typeof d=="object"&&d!==null&&(s=At(d)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ls,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ju(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?At(d):ml,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(as(t,n,d,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&ls.enqueueReplaceState(s,s.state,null),yr(t,a,s,i),br(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,b=Va(n,m);s.props=b;var A=s.context,N=n.contextType;d=ml,typeof N=="object"&&N!==null&&(d=At(N));var j=n.getDerivedStateFromProps;N=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,N||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||A!==d)&&jd(t,s,a,d),Jn=!1;var k=t.memoizedState;s.state=k,yr(t,a,s,i),br(),A=t.memoizedState,m||k!==A||Jn?(typeof j=="function"&&(as(t,n,j,a),A=t.memoizedState),(b=Jn||Rd(t,n,b,a,k,A,d))?(N||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),s.props=a,s.state=A,s.context=d,a=b):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,Uu(e,t),d=t.memoizedProps,N=Va(n,d),s.props=N,j=t.pendingProps,k=s.context,A=n.contextType,b=ml,typeof A=="object"&&A!==null&&(b=At(A)),m=n.getDerivedStateFromProps,(A=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==j||k!==b)&&jd(t,s,a,b),Jn=!1,k=t.memoizedState,s.state=k,yr(t,a,s,i),br();var D=t.memoizedState;d!==j||k!==D||Jn||e!==null&&e.dependencies!==null&&Ai(e.dependencies)?(typeof m=="function"&&(as(t,n,m,a),D=t.memoizedState),(N=Jn||Rd(t,n,N,a,k,D,b)||e!==null&&e.dependencies!==null&&Ai(e.dependencies))?(A||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,D,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,D,b)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=D),s.props=a,s.state=D,s.context=b,a=N):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Xi(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Tl(t,e.child,null,i),t.child=Tl(t,null,n,i)):xt(e,t,n,i),t.memoizedState=s.state,e=t.child):e=Nn(e,t,i),e}function Pd(e,t,n,a){return cr(),t.flags|=256,xt(e,t,n,a),t.child}var os={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function us(e){return{baseLanes:e,cachePool:qf()}}function ss(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=tn),e}function Fd(e,t,n){var a=t.pendingProps,i=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(dt.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(i?Wn(t):In(),He){var m=nt,b;if(b=m){e:{for(b=m,m=hn;b.nodeType!==8;){if(!m){m=null;break e}if(b=on(b.nextSibling),b===null){m=null;break e}}m=b}m!==null?(t.memoizedState={dehydrated:m,treeContext:Na!==null?{id:An,overflow:En}:null,retryLane:536870912,hydrationErrors:null},b=Ht(18,null,null,0),b.stateNode=m,b.return=t,t.child=b,Dt=t,nt=null,b=!0):b=!1}b||Ra(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return Qs(m)?t.lanes=32:t.lanes=536870912,null;wn(t)}return m=a.children,a=a.fallback,i?(In(),i=t.mode,m=Gi({mode:"hidden",children:m},i),a=wa(a,i,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,i=t.child,i.memoizedState=us(n),i.childLanes=ss(e,d,n),t.memoizedState=os,a):(Wn(t),cs(t,m))}if(b=e.memoizedState,b!==null&&(m=b.dehydrated,m!==null)){if(s)t.flags&256?(Wn(t),t.flags&=-257,t=fs(e,t,n)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),i=a.fallback,m=t.mode,a=Gi({mode:"visible",children:a.children},m),i=wa(i,m,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Tl(t,e.child,null,n),a=t.child,a.memoizedState=us(n),a.childLanes=ss(e,d,n),t.memoizedState=os,t=i);else if(Wn(t),Qs(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var A=d.dgst;d=A,a=Error(u(419)),a.stack="",a.digest=d,fr({value:a,source:null,stack:null}),t=fs(e,t,n)}else if(gt||dr(e,t,n,!1),d=(n&e.childLanes)!==0,gt||d){if(d=Pe,d!==null&&(a=n&-n,a=(a&42)!==0?1:Ko(a),a=(a&(d.suspendedLanes|n))!==0?0:a,a!==0&&a!==b.retryLane))throw b.retryLane=a,hl(e,a),Lt(d,e,a),Yd;m.data==="$?"||zs(),t=fs(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,nt=on(m.nextSibling),Dt=t,He=!0,Ca=null,hn=!1,e!==null&&(Wt[It++]=An,Wt[It++]=En,Wt[It++]=Na,An=e.id,En=e.overflow,Na=t),t=cs(t,a.children),t.flags|=4096);return t}return i?(In(),i=a.fallback,m=t.mode,b=e.child,A=b.sibling,a=Tn(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,A!==null?i=Tn(A,i):(i=wa(i,m,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,m=e.child.memoizedState,m===null?m=us(n):(b=m.cachePool,b!==null?(A=ft._currentValue,b=b.parent!==A?{parent:A,pool:A}:b):b=qf(),m={baseLanes:m.baseLanes|n,cachePool:b}),i.memoizedState=m,i.childLanes=ss(e,d,n),t.memoizedState=os,a):(Wn(t),n=e.child,e=n.sibling,n=Tn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function cs(e,t){return t=Gi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gi(e,t){return e=Ht(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fs(e,t,n){return Tl(t,e.child,null,n),e=cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),zu(e.return,t,n)}function ds(e,t,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function Id(e,t,n){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(xt(e,t,a.children,n),a=dt.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wd(e,n,t);else if(e.tag===19)Wd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(L(dt,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ds(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ds(t,!0,n,null,s);break;case"together":ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),la|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(dr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ai(e)))}function rg(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),Kn(t,ft,e.memoizedState.cache),cr();break;case 27:case 5:Oa(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:Kn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Fd(e,t,n):(Wn(t),e=Nn(e,t,n),e!==null?e.sibling:null);Wn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(dr(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Id(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(dt,dt.current),a)break;return null;case 22:case 23:return t.lanes=0,Qd(e,t,n);case 24:Kn(t,ft,e.memoizedState.cache)}return Nn(e,t,n)}function eh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)gt=!0;else{if(!hs(e,n)&&(t.flags&128)===0)return gt=!1,rg(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,He&&(t.flags&1048576)!==0&&wf(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")Su(a)?(e=Va(a,e),t.tag=1,t=$d(null,t,a,e,n)):(t.tag=0,t=is(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===je){t.tag=11,t=Ld(null,t,a,e,n);break e}else if(i===we){t.tag=14,t=Xd(null,t,a,e,n);break e}}throw t=ae(a)||a,Error(u(306,t,""))}}return t;case 0:return is(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Va(a,t.pendingProps),$d(e,t,a,i,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var s=t.memoizedState;i=s.element,Uu(e,t),yr(t,a,null,n);var d=t.memoizedState;if(a=d.cache,Kn(t,ft,a),a!==s.cache&&wu(t,[ft],n,!0),br(),a=d.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Pd(e,t,a,n);break e}else if(a!==i){i=Pt(Error(u(424)),t),fr(i),t=Pd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=on(e.firstChild),Dt=t,He=!0,Ca=null,hn=!0,n=Md(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(cr(),a===i){t=Nn(e,t,n);break e}xt(e,t,a,n)}t=t.child}return t;case 26:return Xi(e,t),e===null?(n=l0(t.type,null,t.pendingProps,null))?t.memoizedState=n:He||(n=t.type,e=t.pendingProps,a=ro(pe.current).createElement(n),a[Tt]=t,a[Nt]=e,St(a,n,e),pt(a),t.stateNode=a):t.memoizedState=l0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oa(t),e===null&&He&&(a=t.stateNode=t0(t.type,t.pendingProps,pe.current),Dt=t,hn=!0,i=nt,ua(t.type)?(Ks=i,nt=on(a.firstChild)):nt=i),xt(e,t,t.pendingProps.children,n),Xi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((i=a=nt)&&(a=Cg(a,t.type,t.pendingProps,hn),a!==null?(t.stateNode=a,Dt=t,nt=on(a.firstChild),hn=!1,i=!0):i=!1),i||Ra(t)),Oa(t),i=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,a=s.children,Ls(i,s)?a=null:d!==null&&Ls(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=Yu(e,t,Fp,null,null,n),Zr._currentValue=i),Xi(e,t),xt(e,t,a,n),t.child;case 6:return e===null&&He&&((e=n=nt)&&(n=Rg(n,t.pendingProps,hn),n!==null?(t.stateNode=n,Dt=t,nt=null,e=!0):e=!1),e||Ra(t)),null;case 13:return Fd(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Tl(t,null,a,n):xt(e,t,a,n),t.child;case 11:return Ld(e,t,t.type,t.pendingProps,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Kn(t,t.type,a.value),xt(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Ua(t),i=At(i),a=a(i),t.flags|=1,xt(e,t,a,n),t.child;case 14:return Xd(e,t,t.type,t.pendingProps,n);case 15:return Gd(e,t,t.type,t.pendingProps,n);case 19:return Id(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Gi(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Tn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Qd(e,t,n);case 24:return Ua(t),a=At(ft),e===null?(i=Cu(),i===null&&(i=Pe,s=Nu(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),t.memoizedState={parent:a,cache:i},ju(t),Kn(t,ft,i)):((e.lanes&n)!==0&&(Uu(e,t),yr(t,null,null,n),br()),i=e.memoizedState,s=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Kn(t,ft,a)):(a=s.cache,Kn(t,ft,a),a!==i.cache&&wu(t,[ft],n,!0))),xt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Mn(e){e.flags|=4}function th(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!s0(t)){if(t=en.current,t!==null&&((Me&4194048)===Me?mn!==null:(Me&62914560)!==Me&&(Me&536870912)===0||t!==mn))throw gr=Ru,Hf;e.flags|=8192}}function Qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Mc():536870912,e.lanes|=t,Dl|=t)}function Er(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ig(e,t,n){var a=t.pendingProps;switch(Eu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return et(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Dn(ft),Qt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(sr(t)?Mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cf())),et(t),null;case 26:return n=t.memoizedState,e===null?(Mn(t),n!==null?(et(t),th(t,n)):(et(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Mn(t),et(t),th(t,n)):(et(t),t.flags&=-16777217):(e.memoizedProps!==a&&Mn(t),et(t),t.flags&=-16777217),null;case 27:$a(t),n=pe.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return et(t),null}e=oe.current,sr(t)?Nf(t):(e=t0(i,a,n),t.stateNode=e,Mn(t))}return et(t),null;case 5:if($a(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return et(t),null}if(e=oe.current,sr(t))Nf(t);else{switch(i=ro(pe.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[Tt]=t,e[Nt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(St(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Mn(t)}}return et(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Mn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=pe.current,sr(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Dt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Tt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Jh(e.nodeValue,n)),e||Ra(t)}else e=ro(e).createTextNode(a),e[Tt]=t,t.stateNode=e}return et(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=sr(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Tt]=t}else cr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),i=!1}else i=Cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(wn(t),t):(wn(t),null)}if(wn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var s=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Qi(t,t.updateQueue),et(t),null;case 4:return Qt(),e===null&&Hs(t.stateNode.containerInfo),et(t),null;case 10:return Dn(t.type),et(t),null;case 19:if(Q(dt),i=t.memoizedState,i===null)return et(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Er(i,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Zi(e),s!==null){for(t.flags|=128,Er(i,!1),e=s.updateQueue,t.updateQueue=e,Qi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)zf(n,e),n=n.sibling;return L(dt,dt.current&1|2),t.child}e=e.sibling}i.tail!==null&&Kt()>$i&&(t.flags|=128,a=!0,Er(i,!1),t.lanes=4194304)}else{if(!a)if(e=Zi(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Qi(t,e),Er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!He)return et(t),null}else 2*Kt()-i.renderingStartTime>$i&&n!==536870912&&(t.flags|=128,a=!0,Er(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Kt(),t.sibling=null,e=dt.current,L(dt,a?e&1|2:e&1),t):(et(t),null);case 22:case 23:return wn(t),Bu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),n=t.updateQueue,n!==null&&Qi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Q(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Dn(ft),et(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function og(e,t){switch(Eu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(ft),Qt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $a(t),null;case 13:if(wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(dt),null;case 4:return Qt(),null;case 10:return Dn(t.type),null;case 22:case 23:return wn(t),Bu(),e!==null&&Q(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dn(ft),null;case 25:return null;default:return null}}function nh(e,t){switch(Eu(t),t.tag){case 3:Dn(ft),Qt();break;case 26:case 27:case 5:$a(t);break;case 4:Qt();break;case 13:wn(t);break;case 19:Q(dt);break;case 10:Dn(t.type);break;case 22:case 23:wn(t),Bu(),e!==null&&Q(qa);break;case 24:Dn(ft)}}function kr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var s=n.create,d=n.inst;a=s(),d.destroy=a}n=n.next}while(n!==i)}}catch(m){Je(t,t.return,m)}}function ea(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){var d=a.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,i=t;var b=n,A=m;try{A()}catch(N){Je(i,b,N)}}}a=a.next}while(a!==s)}}catch(N){Je(t,t.return,N)}}function ah(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xf(t,n)}catch(a){Je(e,e.return,a)}}}function lh(e,t,n){n.props=Va(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Je(e,t,a)}}function Dr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){Je(e,t,i)}}function pn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Je(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Je(e,t,i)}else n.current=null}function rh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Je(e,e.return,i)}}function ms(e,t,n){try{var a=e.stateNode;Dg(a,e.type,n,t),a[Nt]=t}catch(i){Je(e,e.return,i)}}function ih(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ua(e.type)||e.tag===4}function ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ih(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(a!==4&&(a===27&&ua(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function Ki(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ua(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function oh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);St(t,a,n),t[Tt]=e,t[Nt]=n}catch(s){Je(e,e.return,s)}}var Cn=!1,rt=!1,vs=!1,uh=typeof WeakSet=="function"?WeakSet:Set,vt=null;function ug(e,t){if(e=e.containerInfo,Zs=fo,e=yf(e),pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,m=-1,b=-1,A=0,N=0,j=e,k=null;t:for(;;){for(var D;j!==n||i!==0&&j.nodeType!==3||(m=d+i),j!==s||a!==0&&j.nodeType!==3||(b=d+a),j.nodeType===3&&(d+=j.nodeValue.length),(D=j.firstChild)!==null;)k=j,j=D;for(;;){if(j===e)break t;if(k===n&&++A===i&&(m=d),k===s&&++N===a&&(b=d),(D=j.nextSibling)!==null)break;j=k,k=j.parentNode}j=D}n=m===-1||b===-1?null:{start:m,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ys={focusedElem:e,selectionRange:n},fo=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,i=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var de=Va(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(de,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(se){Je(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Gs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function sh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:ta(e,n),a&4&&kr(5,n);break;case 1:if(ta(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Je(n,n.return,d)}else{var i=Va(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Je(n,n.return,d)}}a&64&&ah(n),a&512&&Dr(n,n.return);break;case 3:if(ta(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xf(e,t)}catch(d){Je(n,n.return,d)}}break;case 27:t===null&&a&4&&oh(n);case 26:case 5:ta(e,n),t===null&&a&4&&rh(n),a&512&&Dr(n,n.return);break;case 12:ta(e,n);break;case 13:ta(e,n),a&4&&dh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vg.bind(null,n),jg(e,n))));break;case 22:if(a=n.memoizedState!==null||Cn,!a){t=t!==null&&t.memoizedState!==null||rt,i=Cn;var s=rt;Cn=a,(rt=t)&&!s?na(e,n,(n.subtreeFlags&8772)!==0):ta(e,n),Cn=i,rt=s}break;case 30:break;default:ta(e,n)}}function ch(e){var t=e.alternate;t!==null&&(e.alternate=null,ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Po(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Rt=!1;function Rn(e,t,n){for(n=n.child;n!==null;)fh(e,t,n),n=n.sibling}function fh(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(W,n)}catch{}switch(n.tag){case 26:rt||pn(n,t),Rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rt||pn(n,t);var a=We,i=Rt;ua(n.type)&&(We=n.stateNode,Rt=!1),Rn(e,t,n),qr(n.stateNode),We=a,Rt=i;break;case 5:rt||pn(n,t);case 6:if(a=We,i=Rt,We=null,Rn(e,t,n),We=a,Rt=i,We!==null)if(Rt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode)}catch(s){Je(n,t,s)}else try{We.removeChild(n.stateNode)}catch(s){Je(n,t,s)}break;case 18:We!==null&&(Rt?(e=We,Ih(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Gr(e)):Ih(We,n.stateNode));break;case 4:a=We,i=Rt,We=n.stateNode.containerInfo,Rt=!0,Rn(e,t,n),We=a,Rt=i;break;case 0:case 11:case 14:case 15:rt||ea(2,n,t),rt||ea(4,n,t),Rn(e,t,n);break;case 1:rt||(pn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&lh(n,t,a)),Rn(e,t,n);break;case 21:Rn(e,t,n);break;case 22:rt=(a=rt)||n.memoizedState!==null,Rn(e,t,n),rt=a;break;default:Rn(e,t,n)}}function dh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gr(e)}catch(n){Je(t,t.return,n)}}function sg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uh),t;default:throw Error(u(435,e.tag))}}function bs(e,t){var n=sg(e);t.forEach(function(a){var i=bg.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function Vt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],s=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(ua(m.type)){We=m.stateNode,Rt=!1;break e}break;case 5:We=m.stateNode,Rt=!1;break e;case 3:case 4:We=m.stateNode.containerInfo,Rt=!0;break e}m=m.return}if(We===null)throw Error(u(160));fh(s,d,i),We=null,Rt=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)hh(t,e),t=t.sibling}var rn=null;function hh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vt(t,e),Bt(e),a&4&&(ea(3,e,e.return),kr(3,e),ea(5,e,e.return));break;case 1:Vt(t,e),Bt(e),a&512&&(rt||n===null||pn(n,n.return)),a&64&&Cn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=rn;if(Vt(t,e),Bt(e),a&512&&(rt||n===null||pn(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Wl]||s[Tt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),St(s,a,n),s[Tt]=e,pt(s),a=s;break e;case"link":var d=o0("link","href",i).get(a+(n.href||""));if(d){for(var m=0;m<d.length;m++)if(s=d[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(m,1);break t}}s=i.createElement(a),St(s,a,n),i.head.appendChild(s);break;case"meta":if(d=o0("meta","content",i).get(a+(n.content||""))){for(m=0;m<d.length;m++)if(s=d[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(m,1);break t}}s=i.createElement(a),St(s,a,n),i.head.appendChild(s);break;default:throw Error(u(468,a))}s[Tt]=e,pt(s),a=s}e.stateNode=a}else u0(i,e.type,e.stateNode);else e.stateNode=i0(i,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?u0(i,e.type,e.stateNode):i0(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ms(e,e.memoizedProps,n.memoizedProps)}break;case 27:Vt(t,e),Bt(e),a&512&&(rt||n===null||pn(n,n.return)),n!==null&&a&4&&ms(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Vt(t,e),Bt(e),a&512&&(rt||n===null||pn(n,n.return)),e.flags&32){i=e.stateNode;try{il(i,"")}catch(D){Je(e,e.return,D)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,ms(e,i,n!==null?n.memoizedProps:i)),a&1024&&(vs=!0);break;case 6:if(Vt(t,e),Bt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(D){Je(e,e.return,D)}}break;case 3:if(uo=null,i=rn,rn=io(t.containerInfo),Vt(t,e),rn=i,Bt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(D){Je(e,e.return,D)}vs&&(vs=!1,mh(e));break;case 4:a=rn,rn=io(e.stateNode.containerInfo),Vt(t,e),Bt(e),rn=a;break;case 12:Vt(t,e),Bt(e);break;case 13:Vt(t,e),Bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ts=Kt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bs(e,a)));break;case 22:i=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,A=Cn,N=rt;if(Cn=A||i,rt=N||b,Vt(t,e),rt=N,Cn=A,Bt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||b||Cn||rt||Ba(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(s=b.stateNode,i)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=b.stateNode;var j=b.memoizedProps.style,k=j!=null&&j.hasOwnProperty("display")?j.display:null;m.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(D){Je(b,b.return,D)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=i?"":b.memoizedProps}catch(D){Je(b,b.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,bs(e,n))));break;case 19:Vt(t,e),Bt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bs(e,a)));break;case 30:break;case 21:break;default:Vt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(ih(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var i=n.stateNode,s=ps(e);Ki(e,s,i);break;case 5:var d=n.stateNode;n.flags&32&&(il(d,""),n.flags&=-33);var m=ps(e);Ki(e,m,d);break;case 3:case 4:var b=n.stateNode.containerInfo,A=ps(e);gs(e,A,b);break;default:throw Error(u(161))}}catch(N){Je(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;mh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ta(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sh(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ea(4,t,t.return),Ba(t);break;case 1:pn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&lh(t,t.return,n),Ba(t);break;case 27:qr(t.stateNode);case 26:case 5:pn(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function na(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:na(i,s,n),kr(4,s);break;case 1:if(na(i,s,n),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){Je(a,a.return,A)}if(a=s,i=a.updateQueue,i!==null){var m=a.stateNode;try{var b=i.shared.hiddenCallbacks;if(b!==null)for(i.shared.hiddenCallbacks=null,i=0;i<b.length;i++)Lf(b[i],m)}catch(A){Je(a,a.return,A)}}n&&d&64&&ah(s),Dr(s,s.return);break;case 27:oh(s);case 26:case 5:na(i,s,n),n&&a===null&&d&4&&rh(s),Dr(s,s.return);break;case 12:na(i,s,n);break;case 13:na(i,s,n),n&&d&4&&dh(i,s);break;case 22:s.memoizedState===null&&na(i,s,n),Dr(s,s.return);break;case 30:break;default:na(i,s,n)}t=t.sibling}}function ys(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&hr(n))}function xs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hr(e))}function gn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ph(e,t,n,a),t=t.sibling}function ph(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:gn(e,t,n,a),i&2048&&kr(9,t);break;case 1:gn(e,t,n,a);break;case 3:gn(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hr(e)));break;case 12:if(i&2048){gn(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,m=s.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Je(t,t.return,b)}}else gn(e,t,n,a);break;case 13:gn(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?gn(e,t,n,a):zr(e,t):s._visibility&2?gn(e,t,n,a):(s._visibility|=2,Al(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&ys(d,t);break;case 24:gn(e,t,n,a),i&2048&&xs(t.alternate,t);break;default:gn(e,t,n,a)}}function Al(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,d=t,m=n,b=a,A=d.flags;switch(d.tag){case 0:case 11:case 15:Al(s,d,m,b,i),kr(8,d);break;case 23:break;case 22:var N=d.stateNode;d.memoizedState!==null?N._visibility&2?Al(s,d,m,b,i):zr(s,d):(N._visibility|=2,Al(s,d,m,b,i)),i&&A&2048&&ys(d.alternate,d);break;case 24:Al(s,d,m,b,i),i&&A&2048&&xs(d.alternate,d);break;default:Al(s,d,m,b,i)}t=t.sibling}}function zr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:zr(n,a),i&2048&&ys(a.alternate,a);break;case 24:zr(n,a),i&2048&&xs(a.alternate,a);break;default:zr(n,a)}t=t.sibling}}var wr=8192;function El(e){if(e.subtreeFlags&wr)for(e=e.child;e!==null;)gh(e),e=e.sibling}function gh(e){switch(e.tag){case 26:El(e),e.flags&wr&&e.memoizedState!==null&&Jg(rn,e.memoizedState,e.memoizedProps);break;case 5:El(e);break;case 3:case 4:var t=rn;rn=io(e.stateNode.containerInfo),El(e),rn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=wr,wr=16777216,El(e),wr=t):El(e));break;default:El(e)}}function vh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,yh(a,e)}vh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bh(e),e=e.sibling}function bh(e){switch(e.tag){case 0:case 11:case 15:Nr(e),e.flags&2048&&ea(9,e,e.return);break;case 3:Nr(e);break;case 12:Nr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):Nr(e);break;default:Nr(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,yh(a,e)}vh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ea(8,t,t.return),Ji(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function yh(e,t){for(;vt!==null;){var n=vt;switch(n.tag){case 0:case 11:case 15:ea(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:hr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,vt=a;else e:for(n=e;vt!==null;){a=vt;var i=a.sibling,s=a.return;if(ch(a),a===n){vt=null;break e}if(i!==null){i.return=s,vt=i;break e}vt=s}}}var cg={getCacheForType:function(e){var t=At(ft),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},fg=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Pe=null,Ae=null,Me=0,Be=0,Zt=null,aa=!1,kl=!1,_s=!1,jn=0,at=0,la=0,Za=0,Ss=0,tn=0,Dl=0,Mr=null,jt=null,Os=!1,Ts=0,$i=1/0,Pi=null,ra=null,_t=0,ia=null,zl=null,wl=0,As=0,Es=null,xh=null,Cr=0,ks=null;function Yt(){if((Ve&2)!==0&&Me!==0)return Me&-Me;if(z.T!==null){var e=vl;return e!==0?e:Rs()}return jc()}function _h(){tn===0&&(tn=(Me&536870912)===0||He?Nc():536870912);var e=en.current;return e!==null&&(e.flags|=32),tn}function Lt(e,t,n){(e===Pe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Nl(e,0),oa(e,Me,tn,!1)),Fl(e,n),((Ve&2)===0||e!==Pe)&&(e===Pe&&((Ve&2)===0&&(Za|=n),at===4&&oa(e,Me,tn,!1)),vn(e))}function Sh(e,t,n){if((Ve&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Aa(e,t),i=a?mg(e,t):ws(e,t,!0),s=a;do{if(i===0){kl&&!a&&oa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!dg(n)){i=ws(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;i=Mr;var b=m.current.memoizedState.isDehydrated;if(b&&(Nl(m,d).flags|=256),d=ws(m,d,!1),d!==2){if(_s&&!b){m.errorRecoveryDisabledLanes|=s,Za|=s,i=4;break e}s=jt,jt=i,s!==null&&(jt===null?jt=s:jt.push.apply(jt,s))}i=d}if(s=!1,i!==2)continue}}if(i===1){Nl(e,0),oa(e,t,0,!0);break}e:{switch(a=e,s=i,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:oa(a,t,tn,!aa);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Ts+300-Kt(),10<i)){if(oa(a,t,tn,!aa),Ta(a,0,!0)!==0)break e;a.timeoutHandle=Fh(Oh.bind(null,a,n,jt,Pi,Os,t,tn,Za,Dl,aa,s,2,-0,0),i);break e}Oh(a,n,jt,Pi,Os,t,tn,Za,Dl,aa,s,0,-0,0)}}break}while(!0);vn(e)}function Oh(e,t,n,a,i,s,d,m,b,A,N,j,k,D){if(e.timeoutHandle=-1,j=t.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(Br={stylesheets:null,count:0,unsuspend:Kg},gh(t),j=$g(),j!==null)){e.cancelPendingCommit=j(wh.bind(null,e,t,s,n,a,i,d,m,b,N,1,k,D)),oa(e,s,d,!A);return}wh(e,t,s,n,a,i,d,m,b)}function dg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t,n,a){t&=~Ss,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var s=31-$e(i),d=1<<s;a[s]=-1,i&=~d}n!==0&&Cc(e,n,t)}function Fi(){return(Ve&6)===0?(Rr(0),!1):!0}function Ds(){if(Ae!==null){if(Be===0)var e=Ae.return;else e=Ae,kn=ja=null,Gu(e),Ol=null,Tr=0,e=Ae;for(;e!==null;)nh(e.alternate,e),e=e.return;Ae=null}}function Nl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,wg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ds(),Pe=e,Ae=n=Tn(e.current,null),Me=t,Be=0,Zt=null,aa=!1,kl=Aa(e,t),_s=!1,Dl=tn=Ss=Za=la=at=0,jt=Mr=null,Os=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-$e(a),s=1<<i;t|=e[i],a&=~s}return jn=t,yi(),n}function Th(e,t){_e=null,z.H=Hi,t===pr||t===Di?(t=Zf(),Be=3):t===Hf?(t=Zf(),Be=4):Be=t===Yd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Zt=t,Ae===null&&(at=1,Li(e,Pt(t,e.current)))}function Ah(){var e=z.H;return z.H=Hi,e===null?Hi:e}function Eh(){var e=z.A;return z.A=cg,e}function zs(){at=4,aa||(Me&4194048)!==Me&&en.current!==null||(kl=!0),(la&134217727)===0&&(Za&134217727)===0||Pe===null||oa(Pe,Me,tn,!1)}function ws(e,t,n){var a=Ve;Ve|=2;var i=Ah(),s=Eh();(Pe!==e||Me!==t)&&(Pi=null,Nl(e,t)),t=!1;var d=at;e:do try{if(Be!==0&&Ae!==null){var m=Ae,b=Zt;switch(Be){case 8:Ds(),d=6;break e;case 3:case 2:case 9:case 6:en.current===null&&(t=!0);var A=Be;if(Be=0,Zt=null,Ml(e,m,b,A),n&&kl){d=0;break e}break;default:A=Be,Be=0,Zt=null,Ml(e,m,b,A)}}hg(),d=at;break}catch(N){Th(e,N)}while(!0);return t&&e.shellSuspendCounter++,kn=ja=null,Ve=a,z.H=i,z.A=s,Ae===null&&(Pe=null,Me=0,yi()),d}function hg(){for(;Ae!==null;)kh(Ae)}function mg(e,t){var n=Ve;Ve|=2;var a=Ah(),i=Eh();Pe!==e||Me!==t?(Pi=null,$i=Kt()+500,Nl(e,t)):kl=Aa(e,t);e:do try{if(Be!==0&&Ae!==null){t=Ae;var s=Zt;t:switch(Be){case 1:Be=0,Zt=null,Ml(e,t,s,1);break;case 2:case 9:if(Vf(s)){Be=0,Zt=null,Dh(t);break}t=function(){Be!==2&&Be!==9||Pe!==e||(Be=7),vn(e)},s.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:Vf(s)?(Be=0,Zt=null,Dh(t)):(Be=0,Zt=null,Ml(e,t,s,7));break;case 5:var d=null;switch(Ae.tag){case 26:d=Ae.memoizedState;case 5:case 27:var m=Ae;if(!d||s0(d)){Be=0,Zt=null;var b=m.sibling;if(b!==null)Ae=b;else{var A=m.return;A!==null?(Ae=A,Wi(A)):Ae=null}break t}}Be=0,Zt=null,Ml(e,t,s,5);break;case 6:Be=0,Zt=null,Ml(e,t,s,6);break;case 8:Ds(),at=6;break e;default:throw Error(u(462))}}pg();break}catch(N){Th(e,N)}while(!0);return kn=ja=null,z.H=a,z.A=i,Ve=n,Ae!==null?0:(Pe=null,Me=0,yi(),at)}function pg(){for(;Ae!==null&&!ii();)kh(Ae)}function kh(e){var t=eh(e.alternate,e,jn);e.memoizedProps=e.pendingProps,t===null?Wi(e):Ae=t}function Dh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jd(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=Jd(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Gu(t);default:nh(n,t),t=Ae=zf(t,jn),t=eh(n,t,jn)}e.memoizedProps=e.pendingProps,t===null?Wi(e):Ae=t}function Ml(e,t,n,a){kn=ja=null,Gu(t),Ol=null,Tr=0;var i=t.return;try{if(lg(e,i,t,n,Me)){at=1,Li(e,Pt(n,e.current)),Ae=null;return}}catch(s){if(i!==null)throw Ae=i,s;at=1,Li(e,Pt(n,e.current)),Ae=null;return}t.flags&32768?(He||a===1?e=!0:kl||(Me&536870912)!==0?e=!1:(aa=e=!0,(a===2||a===9||a===3||a===6)&&(a=en.current,a!==null&&a.tag===13&&(a.flags|=16384))),zh(t,e)):Wi(t)}function Wi(e){var t=e;do{if((t.flags&32768)!==0){zh(t,aa);return}e=t.return;var n=ig(t.alternate,t,jn);if(n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);at===0&&(at=5)}function zh(e,t){do{var n=og(e.alternate,e);if(n!==null){n.flags&=32767,Ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=n}while(e!==null);at=6,Ae=null}function wh(e,t,n,a,i,s,d,m,b){e.cancelPendingCommit=null;do Ii();while(_t!==0);if((Ve&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=xu,Km(e,n,s,d,m,b),e===Pe&&(Ae=Pe=null,Me=0),zl=t,ia=e,wl=n,As=s,Es=i,xh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yg(E,function(){return jh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,i=V.p,V.p=2,d=Ve,Ve|=4;try{ug(e,t,n)}finally{Ve=d,V.p=i,z.T=a}}_t=1,Nh(),Mh(),Ch()}}function Nh(){if(_t===1){_t=0;var e=ia,t=zl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var a=V.p;V.p=2;var i=Ve;Ve|=4;try{hh(t,e);var s=Ys,d=yf(e.containerInfo),m=s.focusedElem,b=s.selectionRange;if(d!==m&&m&&m.ownerDocument&&bf(m.ownerDocument.documentElement,m)){if(b!==null&&pu(m)){var A=b.start,N=b.end;if(N===void 0&&(N=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(N,m.value.length);else{var j=m.ownerDocument||document,k=j&&j.defaultView||window;if(k.getSelection){var D=k.getSelection(),de=m.textContent.length,se=Math.min(b.start,de),Ge=b.end===void 0?se:Math.min(b.end,de);!D.extend&&se>Ge&&(d=Ge,Ge=se,se=d);var S=vf(m,se),_=vf(m,Ge);if(S&&_&&(D.rangeCount!==1||D.anchorNode!==S.node||D.anchorOffset!==S.offset||D.focusNode!==_.node||D.focusOffset!==_.offset)){var T=j.createRange();T.setStart(S.node,S.offset),D.removeAllRanges(),se>Ge?(D.addRange(T),D.extend(_.node,_.offset)):(T.setEnd(_.node,_.offset),D.addRange(T))}}}}for(j=[],D=m;D=D.parentNode;)D.nodeType===1&&j.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<j.length;m++){var R=j[m];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}fo=!!Zs,Ys=Zs=null}finally{Ve=i,V.p=a,z.T=n}}e.current=t,_t=2}}function Mh(){if(_t===2){_t=0;var e=ia,t=zl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var a=V.p;V.p=2;var i=Ve;Ve|=4;try{sh(e,t.alternate,t)}finally{Ve=i,V.p=a,z.T=n}}_t=3}}function Ch(){if(_t===4||_t===3){_t=0,Xo();var e=ia,t=zl,n=wl,a=xh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_t=5:(_t=0,zl=ia=null,Rh(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ra=null),Jo(n),t=t.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(W,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=z.T,i=V.p,V.p=2,z.T=null;try{for(var s=e.onRecoverableError,d=0;d<a.length;d++){var m=a[d];s(m.value,{componentStack:m.stack})}}finally{z.T=t,V.p=i}}(wl&3)!==0&&Ii(),vn(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===ks?Cr++:(Cr=0,ks=e):Cr=0,Rr(0)}}function Rh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hr(t)))}function Ii(e){return Nh(),Mh(),Ch(),jh()}function jh(){if(_t!==5)return!1;var e=ia,t=As;As=0;var n=Jo(wl),a=z.T,i=V.p;try{V.p=32>n?32:n,z.T=null,n=Es,Es=null;var s=ia,d=wl;if(_t=0,zl=ia=null,wl=0,(Ve&6)!==0)throw Error(u(331));var m=Ve;if(Ve|=4,bh(s.current),ph(s,s.current,d,n),Ve=m,Rr(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(W,s)}catch{}return!0}finally{V.p=i,z.T=a,Rh(e,t)}}function Uh(e,t,n){t=Pt(n,t),t=rs(e.stateNode,t,2),e=Pn(e,t,2),e!==null&&(Fl(e,2),vn(e))}function Je(e,t,n){if(e.tag===3)Uh(e,e,n);else for(;t!==null;){if(t.tag===3){Uh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ra===null||!ra.has(a))){e=Pt(n,e),n=Bd(2),a=Pn(t,n,2),a!==null&&(Zd(n,a,t,e),Fl(a,2),vn(a));break}}t=t.return}}function Ns(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new fg;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(_s=!0,i.add(n),e=gg.bind(null,e,t,n),t.then(e,e))}function gg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pe===e&&(Me&n)===n&&(at===4||at===3&&(Me&62914560)===Me&&300>Kt()-Ts?(Ve&2)===0&&Nl(e,0):Ss|=n,Dl===Me&&(Dl=0)),vn(e)}function qh(e,t){t===0&&(t=Mc()),e=hl(e,t),e!==null&&(Fl(e,t),vn(e))}function vg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qh(e,n)}function bg(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),qh(e,n)}function yg(e,t){return $l(e,t)}var eo=null,Cl=null,Ms=!1,to=!1,Cs=!1,Ya=0;function vn(e){e!==Cl&&e.next===null&&(Cl===null?eo=Cl=e:Cl=Cl.next=e),to=!0,Ms||(Ms=!0,_g())}function Rr(e,t){if(!Cs&&to){Cs=!0;do for(var n=!1,a=eo;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var d=a.suspendedLanes,m=a.pingedLanes;s=(1<<31-$e(42|e)+1)-1,s&=i&~(d&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Zh(a,s))}else s=Me,s=Ta(a,a===Pe?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Aa(a,s)||(n=!0,Zh(a,s));a=a.next}while(n);Cs=!1}}function xg(){Hh()}function Hh(){to=Ms=!1;var e=0;Ya!==0&&(zg()&&(e=Ya),Ya=0);for(var t=Kt(),n=null,a=eo;a!==null;){var i=a.next,s=Vh(a,t);s===0?(a.next=null,n===null?eo=i:n.next=i,i===null&&(Cl=n)):(n=a,(e!==0||(s&3)!==0)&&(to=!0)),a=i}Rr(e)}function Vh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-$e(s),m=1<<d,b=i[d];b===-1?((m&n)===0||(m&a)!==0)&&(i[d]=oi(m,t)):b<=t&&(e.expiredLanes|=m),s&=~m}if(t=Pe,n=Me,n=Ta(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Fa(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Aa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Fa(a),Jo(n)){case 2:case 8:n=y;break;case 32:n=E;break;case 268435456:n=X;break;default:n=E}return a=Bh.bind(null,e),n=$l(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Fa(a),e.callbackPriority=2,e.callbackNode=null,2}function Bh(e,t){if(_t!==0&&_t!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ii()&&e.callbackNode!==n)return null;var a=Me;return a=Ta(e,e===Pe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Sh(e,a,t),Vh(e,Kt()),e.callbackNode!=null&&e.callbackNode===n?Bh.bind(null,e):null)}function Zh(e,t){if(Ii())return null;Sh(e,t,!0)}function _g(){Ng(function(){(Ve&6)!==0?$l(Pl,xg):Hh()})}function Rs(){return Ya===0&&(Ya=Nc()),Ya}function Yh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:di(""+e)}function Lh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Sg(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var s=Yh((i[Nt]||null).action),d=a.submitter;d&&(t=(t=d[Nt]||null)?Yh(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var m=new gi("action","action",null,a,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ya!==0){var b=d?Lh(i,d):new FormData(i);es(n,{pending:!0,data:b,method:i.method,action:s},null,b)}}else typeof s=="function"&&(m.preventDefault(),b=d?Lh(i,d):new FormData(i),es(n,{pending:!0,data:b,method:i.method,action:s},s,b))},currentTarget:i}]})}}for(var js=0;js<yu.length;js++){var Us=yu[js],Og=Us.toLowerCase(),Tg=Us[0].toUpperCase()+Us.slice(1);ln(Og,"on"+Tg)}ln(Sf,"onAnimationEnd"),ln(Of,"onAnimationIteration"),ln(Tf,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(Zp,"onTransitionRun"),ln(Yp,"onTransitionStart"),ln(Lp,"onTransitionCancel"),ln(Af,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ag=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jr));function Xh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var d=a.length-1;0<=d;d--){var m=a[d],b=m.instance,A=m.currentTarget;if(m=m.listener,b!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=A;try{s(i)}catch(N){Yi(N)}i.currentTarget=null,s=b}else for(d=0;d<a.length;d++){if(m=a[d],b=m.instance,A=m.currentTarget,m=m.listener,b!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=A;try{s(i)}catch(N){Yi(N)}i.currentTarget=null,s=b}}}}function Ee(e,t){var n=t[$o];n===void 0&&(n=t[$o]=new Set);var a=e+"__bubble";n.has(a)||(Gh(t,e,2,!1),n.add(a))}function qs(e,t,n){var a=0;t&&(a|=4),Gh(n,e,a,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function Hs(e){if(!e[no]){e[no]=!0,qc.forEach(function(n){n!=="selectionchange"&&(Ag.has(n)||qs(n,!1,e),qs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,qs("selectionchange",!1,t))}}function Gh(e,t,n,a){switch(p0(t)){case 2:var i=Wg;break;case 8:i=Ig;break;default:i=Ws}n=i.bind(null,t,n,e),i=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vs(e,t,n,a,i){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var m=a.stateNode.containerInfo;if(m===i)break;if(d===4)for(d=a.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;m!==null;){if(d=el(m),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){a=s=d;continue e}m=m.parentNode}}a=a.return}Fc(function(){var A=s,N=lu(n),j=[];e:{var k=Ef.get(e);if(k!==void 0){var D=gi,de=e;switch(e){case"keypress":if(mi(n)===0)break e;case"keydown":case"keyup":D=yp;break;case"focusin":de="focus",D=cu;break;case"focusout":de="blur",D=cu;break;case"beforeblur":case"afterblur":D=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Sp;break;case Sf:case Of:case Tf:D=cp;break;case Af:D=Tp;break;case"scroll":case"scrollend":D=rp;break;case"wheel":D=Ep;break;case"copy":case"cut":case"paste":D=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=nf;break;case"toggle":case"beforetoggle":D=Dp}var se=(t&4)!==0,Ge=!se&&(e==="scroll"||e==="scrollend"),S=se?k!==null?k+"Capture":null:k;se=[];for(var _=A,T;_!==null;){var R=_;if(T=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||T===null||S===null||(R=er(_,S),R!=null&&se.push(Ur(_,R,T))),Ge)break;_=_.return}0<se.length&&(k=new D(k,de,null,n,N),j.push({event:k,listeners:se}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",k&&n!==au&&(de=n.relatedTarget||n.fromElement)&&(el(de)||de[Ia]))break e;if((D||k)&&(k=N.window===N?N:(k=N.ownerDocument)?k.defaultView||k.parentWindow:window,D?(de=n.relatedTarget||n.toElement,D=A,de=de?el(de):null,de!==null&&(Ge=c(de),se=de.tag,de!==Ge||se!==5&&se!==27&&se!==6)&&(de=null)):(D=null,de=A),D!==de)){if(se=ef,R="onMouseLeave",S="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(se=nf,R="onPointerLeave",S="onPointerEnter",_="pointer"),Ge=D==null?k:Il(D),T=de==null?k:Il(de),k=new se(R,_+"leave",D,n,N),k.target=Ge,k.relatedTarget=T,R=null,el(N)===A&&(se=new se(S,_+"enter",de,n,N),se.target=T,se.relatedTarget=Ge,R=se),Ge=R,D&&de)t:{for(se=D,S=de,_=0,T=se;T;T=Rl(T))_++;for(T=0,R=S;R;R=Rl(R))T++;for(;0<_-T;)se=Rl(se),_--;for(;0<T-_;)S=Rl(S),T--;for(;_--;){if(se===S||S!==null&&se===S.alternate)break t;se=Rl(se),S=Rl(S)}se=null}else se=null;D!==null&&Qh(j,k,D,se,!1),de!==null&&Ge!==null&&Qh(j,Ge,de,se,!0)}}e:{if(k=A?Il(A):window,D=k.nodeName&&k.nodeName.toLowerCase(),D==="select"||D==="input"&&k.type==="file")var $=ff;else if(sf(k))if(df)$=Hp;else{$=Up;var Oe=jp}else D=k.nodeName,!D||D.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?A&&nu(A.elementType)&&($=ff):$=qp;if($&&($=$(e,A))){cf(j,$,n,N);break e}Oe&&Oe(e,k,A),e==="focusout"&&A&&k.type==="number"&&A.memoizedProps.value!=null&&tu(k,"number",k.value)}switch(Oe=A?Il(A):window,e){case"focusin":(sf(Oe)||Oe.contentEditable==="true")&&(cl=Oe,gu=A,ur=null);break;case"focusout":ur=gu=cl=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,xf(j,n,N);break;case"selectionchange":if(Bp)break;case"keydown":case"keyup":xf(j,n,N)}var le;if(du)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else sl?of(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(af&&n.locale!=="ko"&&(sl||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&sl&&(le=Wc()):(Qn=N,ou="value"in Qn?Qn.value:Qn.textContent,sl=!0)),Oe=ao(A,ce),0<Oe.length&&(ce=new tf(ce,e,null,n,N),j.push({event:ce,listeners:Oe}),le?ce.data=le:(le=uf(n),le!==null&&(ce.data=le)))),(le=wp?Np(e,n):Mp(e,n))&&(ce=ao(A,"onBeforeInput"),0<ce.length&&(Oe=new tf("onBeforeInput","beforeinput",null,n,N),j.push({event:Oe,listeners:ce}),Oe.data=le)),Sg(j,e,A,n,N)}Xh(j,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ao(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=er(e,n),i!=null&&a.unshift(Ur(e,i,s)),i=er(e,t),i!=null&&a.push(Ur(e,i,s))),e.tag===3)return a;e=e.return}return[]}function Rl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qh(e,t,n,a,i){for(var s=t._reactName,d=[];n!==null&&n!==a;){var m=n,b=m.alternate,A=m.stateNode;if(m=m.tag,b!==null&&b===a)break;m!==5&&m!==26&&m!==27||A===null||(b=A,i?(A=er(n,s),A!=null&&d.unshift(Ur(n,A,b))):i||(A=er(n,s),A!=null&&d.push(Ur(n,A,b)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Eg=/\r\n?/g,kg=/\u0000|\uFFFD/g;function Kh(e){return(typeof e=="string"?e:""+e).replace(Eg,`
`).replace(kg,"")}function Jh(e,t){return t=Kh(t),Kh(e)===t}function lo(){}function Xe(e,t,n,a,i,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||il(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&il(e,""+a);break;case"className":si(e,"class",a);break;case"tabIndex":si(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,n,a);break;case"style":$c(e,a,s);break;case"data":if(t!=="object"){si(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=di(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Xe(e,t,"name",i.name,i,null),Xe(e,t,"formEncType",i.formEncType,i,null),Xe(e,t,"formMethod",i.formMethod,i,null),Xe(e,t,"formTarget",i.formTarget,i,null)):(Xe(e,t,"encType",i.encType,i,null),Xe(e,t,"method",i.method,i,null),Xe(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=di(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=lo);break;case"onScroll":a!=null&&Ee("scroll",e);break;case"onScrollEnd":a!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=di(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),ui(e,"popover",a);break;case"xlinkActuate":Sn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Sn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Sn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Sn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Sn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Sn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Sn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Sn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Sn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ui(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ap.get(n)||n,ui(e,n,a))}}function Bs(e,t,n,a,i,s){switch(n){case"style":$c(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?il(e,a):(typeof a=="number"||typeof a=="bigint")&&il(e,""+a);break;case"onScroll":a!=null&&Ee("scroll",e);break;case"onScrollEnd":a!=null&&Ee("scrollend",e);break;case"onClick":a!=null&&(e.onclick=lo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),s=e[Nt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ui(e,n,a)}}}function St(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var a=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Xe(e,t,s,d,n,null)}}i&&Xe(e,t,"srcSet",n.srcSet,n,null),a&&Xe(e,t,"src",n.src,n,null);return;case"input":Ee("invalid",e);var m=s=d=i=null,b=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var N=n[a];if(N!=null)switch(a){case"name":i=N;break;case"type":d=N;break;case"checked":b=N;break;case"defaultChecked":A=N;break;case"value":s=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:Xe(e,t,a,N,n,null)}}Gc(e,s,m,b,A,d,i,!1),ci(e);return;case"select":Ee("invalid",e),a=d=s=null;for(i in n)if(n.hasOwnProperty(i)&&(m=n[i],m!=null))switch(i){case"value":s=m;break;case"defaultValue":d=m;break;case"multiple":a=m;default:Xe(e,t,i,m,n,null)}t=s,n=d,e.multiple=!!a,t!=null?rl(e,!!a,t,!1):n!=null&&rl(e,!!a,n,!0);return;case"textarea":Ee("invalid",e),s=i=a=null;for(d in n)if(n.hasOwnProperty(d)&&(m=n[d],m!=null))switch(d){case"value":a=m;break;case"defaultValue":i=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Xe(e,t,d,m,n,null)}Kc(e,a,i,s),ci(e);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Xe(e,t,b,a,n,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(a=0;a<jr.length;a++)Ee(jr[a],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Xe(e,t,A,a,n,null)}return;default:if(nu(t)){for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!==void 0&&Bs(e,t,N,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&Xe(e,t,m,a,n,null))}function Dg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,d=null,m=null,b=null,A=null,N=null;for(D in n){var j=n[D];if(n.hasOwnProperty(D)&&j!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":b=j;default:a.hasOwnProperty(D)||Xe(e,t,D,null,a,j)}}for(var k in a){var D=a[k];if(j=n[k],a.hasOwnProperty(k)&&(D!=null||j!=null))switch(k){case"type":s=D;break;case"name":i=D;break;case"checked":A=D;break;case"defaultChecked":N=D;break;case"value":d=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:D!==j&&Xe(e,t,k,D,a,j)}}eu(e,d,m,b,A,N,s,i);return;case"select":D=d=m=k=null;for(s in n)if(b=n[s],n.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":D=b;default:a.hasOwnProperty(s)||Xe(e,t,s,null,a,b)}for(i in a)if(s=a[i],b=n[i],a.hasOwnProperty(i)&&(s!=null||b!=null))switch(i){case"value":k=s;break;case"defaultValue":m=s;break;case"multiple":d=s;default:s!==b&&Xe(e,t,i,s,a,b)}t=m,n=d,a=D,k!=null?rl(e,!!n,k,!1):!!a!=!!n&&(t!=null?rl(e,!!n,t,!0):rl(e,!!n,n?[]:"",!1));return;case"textarea":D=k=null;for(m in n)if(i=n[m],n.hasOwnProperty(m)&&i!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Xe(e,t,m,null,a,i)}for(d in a)if(i=a[d],s=n[d],a.hasOwnProperty(d)&&(i!=null||s!=null))switch(d){case"value":k=i;break;case"defaultValue":D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==s&&Xe(e,t,d,i,a,s)}Qc(e,k,D);return;case"option":for(var de in n)if(k=n[de],n.hasOwnProperty(de)&&k!=null&&!a.hasOwnProperty(de))switch(de){case"selected":e.selected=!1;break;default:Xe(e,t,de,null,a,k)}for(b in a)if(k=a[b],D=n[b],a.hasOwnProperty(b)&&k!==D&&(k!=null||D!=null))switch(b){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Xe(e,t,b,k,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)k=n[se],n.hasOwnProperty(se)&&k!=null&&!a.hasOwnProperty(se)&&Xe(e,t,se,null,a,k);for(A in a)if(k=a[A],D=n[A],a.hasOwnProperty(A)&&k!==D&&(k!=null||D!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,t));break;default:Xe(e,t,A,k,a,D)}return;default:if(nu(t)){for(var Ge in n)k=n[Ge],n.hasOwnProperty(Ge)&&k!==void 0&&!a.hasOwnProperty(Ge)&&Bs(e,t,Ge,void 0,a,k);for(N in a)k=a[N],D=n[N],!a.hasOwnProperty(N)||k===D||k===void 0&&D===void 0||Bs(e,t,N,k,a,D);return}}for(var S in n)k=n[S],n.hasOwnProperty(S)&&k!=null&&!a.hasOwnProperty(S)&&Xe(e,t,S,null,a,k);for(j in a)k=a[j],D=n[j],!a.hasOwnProperty(j)||k===D||k==null&&D==null||Xe(e,t,j,k,a,D)}var Zs=null,Ys=null;function ro(e){return e.nodeType===9?e:e.ownerDocument}function $h(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ph(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=null;function zg(){var e=window.event;return e&&e.type==="popstate"?e===Xs?!1:(Xs=e,!0):(Xs=null,!1)}var Fh=typeof setTimeout=="function"?setTimeout:void 0,wg=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(e){return Wh.resolve(null).then(e).catch(Mg)}:Fh;function Mg(e){setTimeout(function(){throw e})}function ua(e){return e==="head"}function Ih(e,t){var n=t,a=0,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<a&&8>a){n=a;var d=e.ownerDocument;if(n&1&&qr(d.documentElement),n&2&&qr(d.body),n&4)for(n=d.head,qr(n),d=n.firstChild;d;){var m=d.nextSibling,b=d.nodeName;d[Wl]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=m}}if(i===0){e.removeChild(s),Gr(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=s}while(n);Gr(t)}function Gs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Gs(n),Po(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Cg(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=on(e.nextSibling),e===null)break}return null}function Rg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=on(e.nextSibling),e===null))return null;return e}function Qs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jg(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Ks=null;function e0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function t0(e,t,n){switch(t=ro(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function qr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Po(e)}var nn=new Map,n0=new Set;function io(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Un=V.d;V.d={f:Ug,r:qg,D:Hg,C:Vg,L:Bg,m:Zg,X:Lg,S:Yg,M:Xg};function Ug(){var e=Un.f(),t=Fi();return e||t}function qg(e){var t=tl(e);t!==null&&t.tag===5&&t.type==="form"?Sd(t):Un.r(e)}var jl=typeof document>"u"?null:document;function a0(e,t,n){var a=jl;if(a&&typeof t=="string"&&t){var i=$t(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),n0.has(i)||(n0.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),St(t,"link",e),pt(t),a.head.appendChild(t)))}}function Hg(e){Un.D(e),a0("dns-prefetch",e,null)}function Vg(e,t){Un.C(e,t),a0("preconnect",e,t)}function Bg(e,t,n){Un.L(e,t,n);var a=jl;if(a&&e&&t){var i='link[rel="preload"][as="'+$t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+$t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+$t(n.imageSizes)+'"]')):i+='[href="'+$t(e)+'"]';var s=i;switch(t){case"style":s=Ul(e);break;case"script":s=ql(e)}nn.has(s)||(e=O({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),nn.set(s,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(Hr(s))||t==="script"&&a.querySelector(Vr(s))||(t=a.createElement("link"),St(t,"link",e),pt(t),a.head.appendChild(t)))}}function Zg(e,t){Un.m(e,t);var n=jl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+$t(a)+'"][href="'+$t(e)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ql(e)}if(!nn.has(s)&&(e=O({rel:"modulepreload",href:e},t),nn.set(s,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Vr(s)))return}a=n.createElement("link"),St(a,"link",e),pt(a),n.head.appendChild(a)}}}function Yg(e,t,n){Un.S(e,t,n);var a=jl;if(a&&e){var i=nl(a).hoistableStyles,s=Ul(e);t=t||"default";var d=i.get(s);if(!d){var m={loading:0,preload:null};if(d=a.querySelector(Hr(s)))m.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=nn.get(s))&&Js(e,n);var b=d=a.createElement("link");pt(b),St(b,"link",e),b._p=new Promise(function(A,N){b.onload=A,b.onerror=N}),b.addEventListener("load",function(){m.loading|=1}),b.addEventListener("error",function(){m.loading|=2}),m.loading|=4,oo(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:m},i.set(s,d)}}}function Lg(e,t){Un.X(e,t);var n=jl;if(n&&e){var a=nl(n).hoistableScripts,i=ql(e),s=a.get(i);s||(s=n.querySelector(Vr(i)),s||(e=O({src:e,async:!0},t),(t=nn.get(i))&&$s(e,t),s=n.createElement("script"),pt(s),St(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Xg(e,t){Un.M(e,t);var n=jl;if(n&&e){var a=nl(n).hoistableScripts,i=ql(e),s=a.get(i);s||(s=n.querySelector(Vr(i)),s||(e=O({src:e,async:!0,type:"module"},t),(t=nn.get(i))&&$s(e,t),s=n.createElement("script"),pt(s),St(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function l0(e,t,n,a){var i=(i=pe.current)?io(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ul(n.href),n=nl(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ul(n.href);var s=nl(i).hoistableStyles,d=s.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=i.querySelector(Hr(e)))&&!s._p&&(d.instance=s,d.state.loading=5),nn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nn.set(e,n),s||Gg(i,e,n,d.state))),t&&a===null)throw Error(u(528,""));return d}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ql(n),n=nl(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ul(e){return'href="'+$t(e)+'"'}function Hr(e){return'link[rel="stylesheet"]['+e+"]"}function r0(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Gg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),St(t,"link",n),pt(t),e.head.appendChild(t))}function ql(e){return'[src="'+$t(e)+'"]'}function Vr(e){return"script[async]"+e}function i0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+$t(n.href)+'"]');if(a)return t.instance=a,pt(a),a;var i=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),pt(a),St(a,"style",i),oo(a,n.precedence,e),t.instance=a;case"stylesheet":i=Ul(n.href);var s=e.querySelector(Hr(i));if(s)return t.state.loading|=4,t.instance=s,pt(s),s;a=r0(n),(i=nn.get(i))&&Js(a,i),s=(e.ownerDocument||e).createElement("link"),pt(s);var d=s;return d._p=new Promise(function(m,b){d.onload=m,d.onerror=b}),St(s,"link",a),t.state.loading|=4,oo(s,n.precedence,e),t.instance=s;case"script":return s=ql(n.src),(i=e.querySelector(Vr(s)))?(t.instance=i,pt(i),i):(a=n,(i=nn.get(s))&&(a=O({},n),$s(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),pt(i),St(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,oo(a,n.precedence,e));return t.instance}function oo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,d=0;d<a.length;d++){var m=a[d];if(m.dataset.precedence===t)s=m;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Js(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $s(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var uo=null;function o0(e,t,n){if(uo===null){var a=new Map,i=uo=new Map;i.set(n,a)}else i=uo,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var s=n[i];if(!(s[Wl]||s[Tt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var m=a.get(d);m?m.push(s):a.set(d,[s])}}return a}function u0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Qg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function s0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Br=null;function Kg(){}function Jg(e,t,n){if(Br===null)throw Error(u(475));var a=Br;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ul(n.href),s=e.querySelector(Hr(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=so.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=s,pt(s);return}s=e.ownerDocument||e,n=r0(n),(i=nn.get(i))&&Js(n,i),s=s.createElement("link"),pt(s);var d=s;d._p=new Promise(function(m,b){d.onload=m,d.onerror=b}),St(s,"link",n),t.instance=s}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=so.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function $g(){if(Br===null)throw Error(u(475));var e=Br;return e.stylesheets&&e.count===0&&Ps(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ps(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function so(){if(this.count--,this.count===0){if(this.stylesheets)Ps(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var co=null;function Ps(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,co=new Map,t.forEach(Pg,e),co=null,so.call(e))}function Pg(e,t){if(!(t.state.loading&4)){var n=co.get(e);if(n)var a=n.get(null);else{n=new Map,co.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var d=i[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}i=t.instance,d=i.getAttribute("data-precedence"),s=n.get(d)||a,s===a&&n.set(null,i),n.set(d,i),this.count++,a=so.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Zr={$$typeof:ye,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Fg(e,t,n,a,i,s,d,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.hiddenUpdates=Qo(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function c0(e,t,n,a,i,s,d,m,b,A,N,j){return e=new Fg(e,t,n,d,m,b,A,j),t=1,s===!0&&(t|=24),s=Ht(3,null,null,t),e.current=s,s.stateNode=e,t=Nu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},ju(s),e}function f0(e){return e?(e=ml,e):ml}function d0(e,t,n,a,i,s){i=f0(i),a.context===null?a.context=i:a.pendingContext=i,a=$n(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=Pn(e,a,t),n!==null&&(Lt(n,e,t),vr(n,e,t))}function h0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fs(e,t){h0(e,t),(e=e.alternate)&&h0(e,t)}function m0(e){if(e.tag===13){var t=hl(e,67108864);t!==null&&Lt(t,e,67108864),Fs(e,67108864)}}var fo=!0;function Wg(e,t,n,a){var i=z.T;z.T=null;var s=V.p;try{V.p=2,Ws(e,t,n,a)}finally{V.p=s,z.T=i}}function Ig(e,t,n,a){var i=z.T;z.T=null;var s=V.p;try{V.p=8,Ws(e,t,n,a)}finally{V.p=s,z.T=i}}function Ws(e,t,n,a){if(fo){var i=Is(a);if(i===null)Vs(e,t,a,ho,n),g0(e,a);else if(tv(i,e,t,n,a))a.stopPropagation();else if(g0(e,a),t&4&&-1<ev.indexOf(e)){for(;i!==null;){var s=tl(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=_n(s.pendingLanes);if(d!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var b=1<<31-$e(d);m.entanglements[1]|=b,d&=~b}vn(s),(Ve&6)===0&&($i=Kt()+500,Rr(0))}}break;case 13:m=hl(s,2),m!==null&&Lt(m,s,2),Fi(),Fs(s,2)}if(s=Is(a),s===null&&Vs(e,t,a,ho,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else Vs(e,t,a,null,n)}}function Is(e){return e=lu(e),ec(e)}var ho=null;function ec(e){if(ho=null,e=el(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ho=e,null}function p0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wc()){case Pl:return 2;case y:return 8;case E:case M:return 32;case X:return 268435456;default:return 32}default:return 32}}var tc=!1,sa=null,ca=null,fa=null,Yr=new Map,Lr=new Map,da=[],ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g0(e,t){switch(e){case"focusin":case"focusout":sa=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function Xr(e,t,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=tl(t),t!==null&&m0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tv(e,t,n,a,i){switch(t){case"focusin":return sa=Xr(sa,e,t,n,a,i),!0;case"dragenter":return ca=Xr(ca,e,t,n,a,i),!0;case"mouseover":return fa=Xr(fa,e,t,n,a,i),!0;case"pointerover":var s=i.pointerId;return Yr.set(s,Xr(Yr.get(s)||null,e,t,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,Lr.set(s,Xr(Lr.get(s)||null,e,t,n,a,i)),!0}return!1}function v0(e){var t=el(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Jm(e.priority,function(){if(n.tag===13){var a=Yt();a=Ko(a);var i=hl(n,a);i!==null&&Lt(i,n,a),Fs(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Is(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);au=a,n.target.dispatchEvent(a),au=null}else return t=tl(n),t!==null&&m0(t),e.blockedOn=n,!1;t.shift()}return!0}function b0(e,t,n){mo(e)&&n.delete(t)}function nv(){tc=!1,sa!==null&&mo(sa)&&(sa=null),ca!==null&&mo(ca)&&(ca=null),fa!==null&&mo(fa)&&(fa=null),Yr.forEach(b0),Lr.forEach(b0)}function po(e,t){e.blockedOn===t&&(e.blockedOn=null,tc||(tc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,nv)))}var go=null;function y0(e){go!==e&&(go=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){go===e&&(go=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(ec(a||n)===null)continue;break}var s=tl(n);s!==null&&(e.splice(t,3),t-=3,es(s,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Gr(e){function t(b){return po(b,e)}sa!==null&&po(sa,e),ca!==null&&po(ca,e),fa!==null&&po(fa,e),Yr.forEach(t),Lr.forEach(t);for(var n=0;n<da.length;n++){var a=da[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<da.length&&(n=da[0],n.blockedOn===null);)v0(n),n.blockedOn===null&&da.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],s=n[a+1],d=i[Nt]||null;if(typeof s=="function")d||y0(n);else if(d){var m=null;if(s&&s.hasAttribute("formAction")){if(i=s,d=s[Nt]||null)m=d.formAction;else if(ec(i)!==null)continue}else m=d.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),y0(n)}}}function nc(e){this._internalRoot=e}vo.prototype.render=nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Yt();d0(n,a,e,t,null,null)},vo.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;d0(e.current,2,null,e,null,null),Fi(),t[Ia]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=jc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<da.length&&t!==0&&t<da[n].priority;n++);da.splice(n,0,e),n===0&&v0(e)}};var x0=r.version;if(x0!=="19.1.0")throw Error(u(527,x0,"19.1.0"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var av={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{W=bo.inject(av),be=bo}catch{}}return Kr.createRoot=function(e,t){if(!f(e))throw Error(u(299));var n=!1,a="",i=Ud,s=qd,d=Hd,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=c0(e,1,!1,null,null,n,a,i,s,d,m,null),e[Ia]=t.current,Hs(e),new nc(t)},Kr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(u(299));var a=!1,i="",s=Ud,d=qd,m=Hd,b=null,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks),n.formState!==void 0&&(A=n.formState)),t=c0(e,1,!0,t,n??null,a,i,s,d,m,b,A),t.context=f0(null),n=t.current,a=Yt(),a=Ko(a),i=$n(a),i.callback=null,Pn(n,i,a),n=a,t.current.lanes=n,Fl(t,n),vn(t),e[Ia]=t.current,Hs(e),new vo(t)},Kr.version="19.1.0",Kr}var w0;function mv(){if(w0)return rc.exports;w0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),rc.exports=hv(),rc.exports}var pv=mv();const Ka="https://deployedweb.site",gv=async l=>{try{const r=new URLSearchParams;l!=null&&l.categoryId&&(r.append("categoryId",l.categoryId.toString()),console.log("categoryId:",l.categoryId)),l!=null&&l.sortBy&&(r.append("sortBy",l.sortBy),console.log("sortBy:",l.sortBy)),l!=null&&l.sortOrder&&(r.append("sortOrder",l.sortOrder),console.log("sortOrder:",l.sortOrder));const o=`${Ka}/todos${r.toString()?`?${r.toString()}`:""}`;console.log("Fetching todos from:",o);const u=await fetch(o);if(!u.ok)throw new Error(`Error fetching todos: ${u.status}`);return await u.json()}catch(r){throw console.error("Failed to fetch todos:",r),r}},xm=async l=>{const r=await fetch(`${Ka}/todos`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!r.ok)throw new Error(`Error: ${r.status}`);return await r.json()},vv=async l=>{const r=await fetch(`${Ka}/todos/${l}`,{method:"DELETE"});if(!r.ok)throw new Error(`Failed to delete todo ${l}: ${r.status}`)},_m=async(l,r)=>{const o=await fetch(`${Ka}/todos/${l}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!o.ok)throw new Error(`Error updating todo: ${o.status}`);return await o.json()},bv=async()=>{try{const l=await fetch(`${Ka}/categories`);if(!l.ok)throw new Error(`Error fetching categories: ${l.status}`);return await l.json()}catch(l){throw console.error("Failed to fetch categories:",l),l}},yv=async l=>{const r=await fetch(`${Ka}/categories`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!r.ok)throw new Error(`Error: ${r.status}`);return await r.json()},xv=async l=>{if(!(await fetch(`${Ka}/categories/${l}`,{method:"DELETE"})).ok)throw new Error("Failed to delete category")};var Sm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N0=he.createContext&&he.createContext(Sm),_v=["attr","size","title"];function Sv(l,r){if(l==null)return{};var o=Ov(l,r),u,f;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);for(f=0;f<c.length;f++)u=c[f],!(r.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(l,u)&&(o[u]=l[u])}return o}function Ov(l,r){if(l==null)return{};var o={};for(var u in l)if(Object.prototype.hasOwnProperty.call(l,u)){if(r.indexOf(u)>=0)continue;o[u]=l[u]}return o}function Ao(){return Ao=Object.assign?Object.assign.bind():function(l){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(l[u]=o[u])}return l},Ao.apply(this,arguments)}function M0(l,r){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(l);r&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),o.push.apply(o,u)}return o}function Eo(l){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?M0(Object(o),!0).forEach(function(u){Tv(l,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):M0(Object(o)).forEach(function(u){Object.defineProperty(l,u,Object.getOwnPropertyDescriptor(o,u))})}return l}function Tv(l,r,o){return r=Av(r),r in l?Object.defineProperty(l,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[r]=o,l}function Av(l){var r=Ev(l,"string");return typeof r=="symbol"?r:r+""}function Ev(l,r){if(typeof l!="object"||!l)return l;var o=l[Symbol.toPrimitive];if(o!==void 0){var u=o.call(l,r);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function Om(l){return l&&l.map((r,o)=>he.createElement(r.tag,Eo({key:o},r.attr),Om(r.child)))}function Yn(l){return r=>he.createElement(kv,Ao({attr:Eo({},l.attr)},r),Om(l.child))}function kv(l){var r=o=>{var{attr:u,size:f,title:c}=l,h=Sv(l,_v),p=f||o.size||"1em",v;return o.className&&(v=o.className),l.className&&(v=(v?v+" ":"")+l.className),he.createElement("svg",Ao({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,u,h,{className:v,style:Eo(Eo({color:l.color||o.color},o.style),l.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&he.createElement("title",null,c),l.children)};return N0!==void 0?he.createElement(N0.Consumer,null,o=>r(o)):r(Sm)}function Dv(l){return Yn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(l)}const zv=({isOpen:l,onClose:r,title:o,children:u})=>{const[f,c]=me.useState(!1);return me.useEffect(()=>{l?setTimeout(()=>c(!0),10):c(!1)},[l]),l?q.jsxs("div",{className:`
            fixed inset-0 z-50 flex items-center justify-center p-4
            transition-all duration-300 ease-out
            ${f?"opacity-100":"opacity-0"}
        `,children:[q.jsx("div",{className:`
                    absolute inset-0  backdrop-blur-sm
                    transition-all ease-in-out duration-300
					${f?"bg-gray-800":"bg-transparent"}
                `,onClick:r}),q.jsxs("div",{className:"relative z-10 bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border-5 border-purple-500 no-scrollbar h-[700px] ",children:[q.jsxs("div",{className:"flex justify-between items-center p-6 border-b border-gray-100",children:[q.jsx("h2",{className:"text-2xl font-semibold text-gray-800",children:o}),q.jsx("button",{onClick:r,className:"text-gray-400 hover:text-gray-600 text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors",children:q.jsx(Dv,{className:"w-6 h-6"})})]}),q.jsx("div",{className:"p-6",children:u})]})]}):null};var ai=l=>l.type==="checkbox",Xa=l=>l instanceof Date,zt=l=>l==null;const Tm=l=>typeof l=="object";var it=l=>!zt(l)&&!Array.isArray(l)&&Tm(l)&&!Xa(l),wv=l=>it(l)&&l.target?ai(l.target)?l.target.checked:l.target.value:l,Nv=l=>l.substring(0,l.search(/\.\d+(\.|$)/))||l,Mv=(l,r)=>l.has(Nv(r)),Cv=l=>{const r=l.constructor&&l.constructor.prototype;return it(r)&&r.hasOwnProperty("isPrototypeOf")},Oc=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function kt(l){let r;const o=Array.isArray(l),u=typeof FileList<"u"?l instanceof FileList:!1;if(l instanceof Date)r=new Date(l);else if(l instanceof Set)r=new Set(l);else if(!(Oc&&(l instanceof Blob||u))&&(o||it(l)))if(r=o?[]:{},!o&&!Cv(l))r=l;else for(const f in l)l.hasOwnProperty(f)&&(r[f]=kt(l[f]));else return l;return r}var qo=l=>/^\w*$/.test(l),ct=l=>l===void 0,Tc=l=>Array.isArray(l)?l.filter(Boolean):[],Ac=l=>Tc(l.replace(/["|']|\]/g,"").split(/\.|\[/)),P=(l,r,o)=>{if(!r||!it(l))return o;const u=(qo(r)?[r]:Ac(r)).reduce((f,c)=>zt(f)?f:f[c],l);return ct(u)||u===l?ct(l[r])?o:l[r]:u},bn=l=>typeof l=="boolean",Qe=(l,r,o)=>{let u=-1;const f=qo(r)?[r]:Ac(r),c=f.length,h=c-1;for(;++u<c;){const p=f[u];let v=o;if(u!==h){const g=l[p];v=it(g)||Array.isArray(g)?g:isNaN(+f[u+1])?{}:[]}if(p==="__proto__"||p==="constructor"||p==="prototype")return;l[p]=v,l=l[p]}};const C0={BLUR:"blur",FOCUS_OUT:"focusout"},sn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},qn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Rv=he.createContext(null);Rv.displayName="HookFormContext";var jv=(l,r,o,u=!0)=>{const f={defaultValues:r._defaultValues};for(const c in l)Object.defineProperty(f,c,{get:()=>{const h=c;return r._proxyFormState[h]!==sn.all&&(r._proxyFormState[h]=!u||sn.all),l[h]}});return f};const Uv=typeof window<"u"?me.useLayoutEffect:me.useEffect;var yn=l=>typeof l=="string",qv=(l,r,o,u,f)=>yn(l)?(u&&r.watch.add(l),P(o,l,f)):Array.isArray(l)?l.map(c=>(u&&r.watch.add(c),P(o,c))):(u&&(r.watchAll=!0),o),Ec=(l,r,o,u,f)=>r?{...o[l],types:{...o[l]&&o[l].types?o[l].types:{},[u]:f||!0}}:{},Wr=l=>Array.isArray(l)?l:[l],R0=()=>{let l=[];return{get observers(){return l},next:f=>{for(const c of l)c.next&&c.next(f)},subscribe:f=>(l.push(f),{unsubscribe:()=>{l=l.filter(c=>c!==f)}}),unsubscribe:()=>{l=[]}}},dc=l=>zt(l)||!Tm(l);function ga(l,r){if(dc(l)||dc(r))return l===r;if(Xa(l)&&Xa(r))return l.getTime()===r.getTime();const o=Object.keys(l),u=Object.keys(r);if(o.length!==u.length)return!1;for(const f of o){const c=l[f];if(!u.includes(f))return!1;if(f!=="ref"){const h=r[f];if(Xa(c)&&Xa(h)||it(c)&&it(h)||Array.isArray(c)&&Array.isArray(h)?!ga(c,h):c!==h)return!1}}return!0}var Ut=l=>it(l)&&!Object.keys(l).length,kc=l=>l.type==="file",cn=l=>typeof l=="function",ko=l=>{if(!Oc)return!1;const r=l?l.ownerDocument:0;return l instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Am=l=>l.type==="select-multiple",Dc=l=>l.type==="radio",Hv=l=>Dc(l)||ai(l),sc=l=>ko(l)&&l.isConnected;function Vv(l,r){const o=r.slice(0,-1).length;let u=0;for(;u<o;)l=ct(l)?u++:l[r[u++]];return l}function Bv(l){for(const r in l)if(l.hasOwnProperty(r)&&!ct(l[r]))return!1;return!0}function ht(l,r){const o=Array.isArray(r)?r:qo(r)?[r]:Ac(r),u=o.length===1?l:Vv(l,o),f=o.length-1,c=o[f];return u&&delete u[c],f!==0&&(it(u)&&Ut(u)||Array.isArray(u)&&Bv(u))&&ht(l,o.slice(0,-1)),l}var Em=l=>{for(const r in l)if(cn(l[r]))return!0;return!1};function Do(l,r={}){const o=Array.isArray(l);if(it(l)||o)for(const u in l)Array.isArray(l[u])||it(l[u])&&!Em(l[u])?(r[u]=Array.isArray(l[u])?[]:{},Do(l[u],r[u])):zt(l[u])||(r[u]=!0);return r}function km(l,r,o){const u=Array.isArray(l);if(it(l)||u)for(const f in l)Array.isArray(l[f])||it(l[f])&&!Em(l[f])?ct(r)||dc(o[f])?o[f]=Array.isArray(l[f])?Do(l[f],[]):{...Do(l[f])}:km(l[f],zt(r)?{}:r[f],o[f]):o[f]=!ga(l[f],r[f]);return o}var Jr=(l,r)=>km(l,r,Do(r));const j0={value:!1,isValid:!1},U0={value:!0,isValid:!0};var Dm=l=>{if(Array.isArray(l)){if(l.length>1){const r=l.filter(o=>o&&o.checked&&!o.disabled).map(o=>o.value);return{value:r,isValid:!!r.length}}return l[0].checked&&!l[0].disabled?l[0].attributes&&!ct(l[0].attributes.value)?ct(l[0].value)||l[0].value===""?U0:{value:l[0].value,isValid:!0}:U0:j0}return j0},zm=(l,{valueAsNumber:r,valueAsDate:o,setValueAs:u})=>ct(l)?l:r?l===""?NaN:l&&+l:o&&yn(l)?new Date(l):u?u(l):l;const q0={isValid:!1,value:null};var wm=l=>Array.isArray(l)?l.reduce((r,o)=>o&&o.checked&&!o.disabled?{isValid:!0,value:o.value}:r,q0):q0;function H0(l){const r=l.ref;return kc(r)?r.files:Dc(r)?wm(l.refs).value:Am(r)?[...r.selectedOptions].map(({value:o})=>o):ai(r)?Dm(l.refs).value:zm(ct(r.value)?l.ref.value:r.value,l)}var Zv=(l,r,o,u)=>{const f={};for(const c of l){const h=P(r,c);h&&Qe(f,c,h._f)}return{criteriaMode:o,names:[...l],fields:f,shouldUseNativeValidation:u}},zo=l=>l instanceof RegExp,$r=l=>ct(l)?l:zo(l)?l.source:it(l)?zo(l.value)?l.value.source:l.value:l,V0=l=>({isOnSubmit:!l||l===sn.onSubmit,isOnBlur:l===sn.onBlur,isOnChange:l===sn.onChange,isOnAll:l===sn.all,isOnTouch:l===sn.onTouched});const B0="AsyncFunction";var Yv=l=>!!l&&!!l.validate&&!!(cn(l.validate)&&l.validate.constructor.name===B0||it(l.validate)&&Object.values(l.validate).find(r=>r.constructor.name===B0)),Lv=l=>l.mount&&(l.required||l.min||l.max||l.maxLength||l.minLength||l.pattern||l.validate),Z0=(l,r,o)=>!o&&(r.watchAll||r.watch.has(l)||[...r.watch].some(u=>l.startsWith(u)&&/^\.\w+/.test(l.slice(u.length))));const Ir=(l,r,o,u)=>{for(const f of o||Object.keys(l)){const c=P(l,f);if(c){const{_f:h,...p}=c;if(h){if(h.refs&&h.refs[0]&&r(h.refs[0],f)&&!u)return!0;if(h.ref&&r(h.ref,h.name)&&!u)return!0;if(Ir(p,r))break}else if(it(p)&&Ir(p,r))break}}};function Y0(l,r,o){const u=P(l,o);if(u||qo(o))return{error:u,name:o};const f=o.split(".");for(;f.length;){const c=f.join("."),h=P(r,c),p=P(l,c);if(h&&!Array.isArray(h)&&o!==c)return{name:o};if(p&&p.type)return{name:c,error:p};if(p&&p.root&&p.root.type)return{name:`${c}.root`,error:p.root};f.pop()}return{name:o}}var Xv=(l,r,o,u)=>{o(l);const{name:f,...c}=l;return Ut(c)||Object.keys(c).length>=Object.keys(r).length||Object.keys(c).find(h=>r[h]===(!u||sn.all))},Gv=(l,r,o)=>!l||!r||l===r||Wr(l).some(u=>u&&(o?u===r:u.startsWith(r)||r.startsWith(u))),Qv=(l,r,o,u,f)=>f.isOnAll?!1:!o&&f.isOnTouch?!(r||l):(o?u.isOnBlur:f.isOnBlur)?!l:(o?u.isOnChange:f.isOnChange)?l:!0,Kv=(l,r)=>!Tc(P(l,r)).length&&ht(l,r),Jv=(l,r,o)=>{const u=Wr(P(l,o));return Qe(u,"root",r[o]),Qe(l,o,u),l},Oo=l=>yn(l);function L0(l,r,o="validate"){if(Oo(l)||Array.isArray(l)&&l.every(Oo)||bn(l)&&!l)return{type:o,message:Oo(l)?l:"",ref:r}}var Hl=l=>it(l)&&!zo(l)?l:{value:l,message:""},X0=async(l,r,o,u,f,c)=>{const{ref:h,refs:p,required:v,maxLength:g,minLength:O,min:C,max:w,pattern:ie,validate:K,name:H,valueAsNumber:te,mount:Ce}=l._f,ne=P(o,H);if(!Ce||r.has(H))return{};const ye=p?p[0]:h,je=ue=>{f&&ye.reportValidity&&(ye.setCustomValidity(bn(ue)?"":ue||""),ye.reportValidity())},J={},Ye=Dc(h),we=ai(h),Fe=Ye||we,ke=(te||kc(h))&&ct(h.value)&&ct(ne)||ko(h)&&h.value===""||ne===""||Array.isArray(ne)&&!ne.length,Ot=Ec.bind(null,H,u,J),tt=(ue,Se,ae,fe=qn.maxLength,z=qn.minLength)=>{const V=ue?Se:ae;J[H]={type:ue?fe:z,message:V,ref:h,...Ot(ue?fe:z,V)}};if(c?!Array.isArray(ne)||!ne.length:v&&(!Fe&&(ke||zt(ne))||bn(ne)&&!ne||we&&!Dm(p).isValid||Ye&&!wm(p).isValid)){const{value:ue,message:Se}=Oo(v)?{value:!!v,message:v}:Hl(v);if(ue&&(J[H]={type:qn.required,message:Se,ref:ye,...Ot(qn.required,Se)},!u))return je(Se),J}if(!ke&&(!zt(C)||!zt(w))){let ue,Se;const ae=Hl(w),fe=Hl(C);if(!zt(ne)&&!isNaN(ne)){const z=h.valueAsNumber||ne&&+ne;zt(ae.value)||(ue=z>ae.value),zt(fe.value)||(Se=z<fe.value)}else{const z=h.valueAsDate||new Date(ne),V=x=>new Date(new Date().toDateString()+" "+x),ee=h.type=="time",Ne=h.type=="week";yn(ae.value)&&ne&&(ue=ee?V(ne)>V(ae.value):Ne?ne>ae.value:z>new Date(ae.value)),yn(fe.value)&&ne&&(Se=ee?V(ne)<V(fe.value):Ne?ne<fe.value:z<new Date(fe.value))}if((ue||Se)&&(tt(!!ue,ae.message,fe.message,qn.max,qn.min),!u))return je(J[H].message),J}if((g||O)&&!ke&&(yn(ne)||c&&Array.isArray(ne))){const ue=Hl(g),Se=Hl(O),ae=!zt(ue.value)&&ne.length>+ue.value,fe=!zt(Se.value)&&ne.length<+Se.value;if((ae||fe)&&(tt(ae,ue.message,Se.message),!u))return je(J[H].message),J}if(ie&&!ke&&yn(ne)){const{value:ue,message:Se}=Hl(ie);if(zo(ue)&&!ne.match(ue)&&(J[H]={type:qn.pattern,message:Se,ref:h,...Ot(qn.pattern,Se)},!u))return je(Se),J}if(K){if(cn(K)){const ue=await K(ne,o),Se=L0(ue,ye);if(Se&&(J[H]={...Se,...Ot(qn.validate,Se.message)},!u))return je(Se.message),J}else if(it(K)){let ue={};for(const Se in K){if(!Ut(ue)&&!u)break;const ae=L0(await K[Se](ne,o),ye,Se);ae&&(ue={...ae,...Ot(Se,ae.message)},je(ae.message),u&&(J[H]=ue))}if(!Ut(ue)&&(J[H]={ref:ye,...ue},!u))return J}}return je(!0),J};const $v={mode:sn.onSubmit,reValidateMode:sn.onChange,shouldFocusError:!0};function Pv(l={}){let r={...$v,...l},o={submitCount:0,isDirty:!1,isReady:!1,isLoading:cn(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1};const u={};let f=it(r.defaultValues)||it(r.values)?kt(r.defaultValues||r.values)||{}:{},c=r.shouldUnregister?{}:kt(f),h={action:!1,mount:!1,watch:!1},p={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},v,g=0;const O={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let C={...O};const w={array:R0(),state:R0()},ie=r.criteriaMode===sn.all,K=y=>E=>{clearTimeout(g),g=setTimeout(y,E)},H=async y=>{if(!r.disabled&&(O.isValid||C.isValid||y)){const E=r.resolver?Ut((await we()).errors):await ke(u,!0);E!==o.isValid&&w.state.next({isValid:E})}},te=(y,E)=>{!r.disabled&&(O.isValidating||O.validatingFields||C.isValidating||C.validatingFields)&&((y||Array.from(p.mount)).forEach(M=>{M&&(E?Qe(o.validatingFields,M,E):ht(o.validatingFields,M))}),w.state.next({validatingFields:o.validatingFields,isValidating:!Ut(o.validatingFields)}))},Ce=(y,E=[],M,X,Y=!0,Z=!0)=>{if(X&&M&&!r.disabled){if(h.action=!0,Z&&Array.isArray(P(u,y))){const W=M(P(u,y),X.argA,X.argB);Y&&Qe(u,y,W)}if(Z&&Array.isArray(P(o.errors,y))){const W=M(P(o.errors,y),X.argA,X.argB);Y&&Qe(o.errors,y,W),Kv(o.errors,y)}if((O.touchedFields||C.touchedFields)&&Z&&Array.isArray(P(o.touchedFields,y))){const W=M(P(o.touchedFields,y),X.argA,X.argB);Y&&Qe(o.touchedFields,y,W)}(O.dirtyFields||C.dirtyFields)&&(o.dirtyFields=Jr(f,c)),w.state.next({name:y,isDirty:tt(y,E),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else Qe(c,y,E)},ne=(y,E)=>{Qe(o.errors,y,E),w.state.next({errors:o.errors})},ye=y=>{o.errors=y,w.state.next({errors:o.errors,isValid:!1})},je=(y,E,M,X)=>{const Y=P(u,y);if(Y){const Z=P(c,y,ct(M)?P(f,y):M);ct(Z)||X&&X.defaultChecked||E?Qe(c,y,E?Z:H0(Y._f)):ae(y,Z),h.mount&&H()}},J=(y,E,M,X,Y)=>{let Z=!1,W=!1;const be={name:y};if(!r.disabled){if(!M||X){(O.isDirty||C.isDirty)&&(W=o.isDirty,o.isDirty=be.isDirty=tt(),Z=W!==be.isDirty);const ze=ga(P(f,y),E);W=!!P(o.dirtyFields,y),ze?ht(o.dirtyFields,y):Qe(o.dirtyFields,y,!0),be.dirtyFields=o.dirtyFields,Z=Z||(O.dirtyFields||C.dirtyFields)&&W!==!ze}if(M){const ze=P(o.touchedFields,y);ze||(Qe(o.touchedFields,y,M),be.touchedFields=o.touchedFields,Z=Z||(O.touchedFields||C.touchedFields)&&ze!==M)}Z&&Y&&w.state.next(be)}return Z?be:{}},Ye=(y,E,M,X)=>{const Y=P(o.errors,y),Z=(O.isValid||C.isValid)&&bn(E)&&o.isValid!==E;if(r.delayError&&M?(v=K(()=>ne(y,M)),v(r.delayError)):(clearTimeout(g),v=null,M?Qe(o.errors,y,M):ht(o.errors,y)),(M?!ga(Y,M):Y)||!Ut(X)||Z){const W={...X,...Z&&bn(E)?{isValid:E}:{},errors:o.errors,name:y};o={...o,...W},w.state.next(W)}},we=async y=>{te(y,!0);const E=await r.resolver(c,r.context,Zv(y||p.mount,u,r.criteriaMode,r.shouldUseNativeValidation));return te(y),E},Fe=async y=>{const{errors:E}=await we(y);if(y)for(const M of y){const X=P(E,M);X?Qe(o.errors,M,X):ht(o.errors,M)}else o.errors=E;return E},ke=async(y,E,M={valid:!0})=>{for(const X in y){const Y=y[X];if(Y){const{_f:Z,...W}=Y;if(Z){const be=p.array.has(Z.name),ze=Y._f&&Yv(Y._f);ze&&O.validatingFields&&te([X],!0);const $e=await X0(Y,p.disabled,c,ie,r.shouldUseNativeValidation&&!E,be);if(ze&&O.validatingFields&&te([X]),$e[Z.name]&&(M.valid=!1,E))break;!E&&(P($e,Z.name)?be?Jv(o.errors,$e,Z.name):Qe(o.errors,Z.name,$e[Z.name]):ht(o.errors,Z.name))}!Ut(W)&&await ke(W,E,M)}}return M.valid},Ot=()=>{for(const y of p.unMount){const E=P(u,y);E&&(E._f.refs?E._f.refs.every(M=>!sc(M)):!sc(E._f.ref))&&yt(y)}p.unMount=new Set},tt=(y,E)=>!r.disabled&&(y&&E&&Qe(c,y,E),!ga(x(),f)),ue=(y,E,M)=>qv(y,p,{...h.mount?c:ct(E)?f:yn(y)?{[y]:E}:E},M,E),Se=y=>Tc(P(h.mount?c:f,y,r.shouldUnregister?P(f,y,[]):[])),ae=(y,E,M={})=>{const X=P(u,y);let Y=E;if(X){const Z=X._f;Z&&(!Z.disabled&&Qe(c,y,zm(E,Z)),Y=ko(Z.ref)&&zt(E)?"":E,Am(Z.ref)?[...Z.ref.options].forEach(W=>W.selected=Y.includes(W.value)):Z.refs?ai(Z.ref)?Z.refs.forEach(W=>{(!W.defaultChecked||!W.disabled)&&(Array.isArray(Y)?W.checked=!!Y.find(be=>be===W.value):W.checked=Y===W.value||!!Y)}):Z.refs.forEach(W=>W.checked=W.value===Y):kc(Z.ref)?Z.ref.value="":(Z.ref.value=Y,Z.ref.type||w.state.next({name:y,values:kt(c)})))}(M.shouldDirty||M.shouldTouch)&&J(y,Y,M.shouldTouch,M.shouldDirty,!0),M.shouldValidate&&Ne(y)},fe=(y,E,M)=>{for(const X in E){if(!E.hasOwnProperty(X))return;const Y=E[X],Z=y+"."+X,W=P(u,Z);(p.array.has(y)||it(Y)||W&&!W._f)&&!Xa(Y)?fe(Z,Y,M):ae(Z,Y,M)}},z=(y,E,M={})=>{const X=P(u,y),Y=p.array.has(y),Z=kt(E);Qe(c,y,Z),Y?(w.array.next({name:y,values:kt(c)}),(O.isDirty||O.dirtyFields||C.isDirty||C.dirtyFields)&&M.shouldDirty&&w.state.next({name:y,dirtyFields:Jr(f,c),isDirty:tt(y,Z)})):X&&!X._f&&!zt(Z)?fe(y,Z,M):ae(y,Z,M),Z0(y,p)&&w.state.next({...o}),w.state.next({name:h.mount?y:void 0,values:kt(c)})},V=async y=>{h.mount=!0;const E=y.target;let M=E.name,X=!0;const Y=P(u,M),Z=ze=>{X=Number.isNaN(ze)||Xa(ze)&&isNaN(ze.getTime())||ga(ze,P(c,M,ze))},W=V0(r.mode),be=V0(r.reValidateMode);if(Y){let ze,$e;const Wa=E.type?H0(Y._f):wv(y),dn=y.type===C0.BLUR||y.type===C0.FOCUS_OUT,Go=!Lv(Y._f)&&!r.resolver&&!P(o.errors,M)&&!Y._f.deps||Qv(dn,P(o.touchedFields,M),o.isSubmitted,be,W),Ln=Z0(M,p,dn);Qe(c,M,Wa),dn?(Y._f.onBlur&&Y._f.onBlur(y),v&&v(0)):Y._f.onChange&&Y._f.onChange(y);const Xn=J(M,Wa,dn),_n=!Ut(Xn)||Ln;if(!dn&&w.state.next({name:M,type:y.type,values:kt(c)}),Go)return(O.isValid||C.isValid)&&(r.mode==="onBlur"?dn&&H():dn||H()),_n&&w.state.next({name:M,...Ln?{}:Xn});if(!dn&&Ln&&w.state.next({...o}),r.resolver){const{errors:Ta}=await we([M]);if(Z(Wa),X){const Aa=Y0(o.errors,u,M),oi=Y0(Ta,u,Aa.name||M);ze=oi.error,M=oi.name,$e=Ut(Ta)}}else te([M],!0),ze=(await X0(Y,p.disabled,c,ie,r.shouldUseNativeValidation))[M],te([M]),Z(Wa),X&&(ze?$e=!1:(O.isValid||C.isValid)&&($e=await ke(u,!0)));X&&(Y._f.deps&&Ne(Y._f.deps),Ye(M,$e,ze,Xn))}},ee=(y,E)=>{if(P(o.errors,E)&&y.focus)return y.focus(),1},Ne=async(y,E={})=>{let M,X;const Y=Wr(y);if(r.resolver){const Z=await Fe(ct(y)?y:Y);M=Ut(Z),X=y?!Y.some(W=>P(Z,W)):M}else y?(X=(await Promise.all(Y.map(async Z=>{const W=P(u,Z);return await ke(W&&W._f?{[Z]:W}:W)}))).every(Boolean),!(!X&&!o.isValid)&&H()):X=M=await ke(u);return w.state.next({...!yn(y)||(O.isValid||C.isValid)&&M!==o.isValid?{}:{name:y},...r.resolver||!y?{isValid:M}:{},errors:o.errors}),E.shouldFocus&&!X&&Ir(u,ee,y?Y:p.mount),X},x=y=>{const E={...h.mount?c:f};return ct(y)?E:yn(y)?P(E,y):y.map(M=>P(E,M))},U=(y,E)=>({invalid:!!P((E||o).errors,y),isDirty:!!P((E||o).dirtyFields,y),error:P((E||o).errors,y),isValidating:!!P(o.validatingFields,y),isTouched:!!P((E||o).touchedFields,y)}),Q=y=>{y&&Wr(y).forEach(E=>ht(o.errors,E)),w.state.next({errors:y?o.errors:{}})},L=(y,E,M)=>{const X=(P(u,y,{_f:{}})._f||{}).ref,Y=P(o.errors,y)||{},{ref:Z,message:W,type:be,...ze}=Y;Qe(o.errors,y,{...ze,...E,ref:X}),w.state.next({name:y,errors:o.errors,isValid:!1}),M&&M.shouldFocus&&X&&X.focus&&X.focus()},oe=(y,E)=>cn(y)?w.state.subscribe({next:M=>y(ue(void 0,E),M)}):ue(y,E,!0),De=y=>w.state.subscribe({next:E=>{Gv(y.name,E.name,y.exact)&&Xv(E,y.formState||O,Kt,y.reRenderRoot)&&y.callback({values:{...c},...o,...E})}}).unsubscribe,pe=y=>(h.mount=!0,C={...C,...y.formState},De({...y,formState:C})),yt=(y,E={})=>{for(const M of y?Wr(y):p.mount)p.mount.delete(M),p.array.delete(M),E.keepValue||(ht(u,M),ht(c,M)),!E.keepError&&ht(o.errors,M),!E.keepDirty&&ht(o.dirtyFields,M),!E.keepTouched&&ht(o.touchedFields,M),!E.keepIsValidating&&ht(o.validatingFields,M),!r.shouldUnregister&&!E.keepDefaultValue&&ht(f,M);w.state.next({values:kt(c)}),w.state.next({...o,...E.keepDirty?{isDirty:tt()}:{}}),!E.keepIsValid&&H()},Ke=({disabled:y,name:E})=>{(bn(y)&&h.mount||y||p.disabled.has(E))&&(y?p.disabled.add(E):p.disabled.delete(E))},Qt=(y,E={})=>{let M=P(u,y);const X=bn(E.disabled)||bn(r.disabled);return Qe(u,y,{...M||{},_f:{...M&&M._f?M._f:{ref:{name:y}},name:y,mount:!0,...E}}),p.mount.add(y),M?Ke({disabled:bn(E.disabled)?E.disabled:r.disabled,name:y}):je(y,!0,E.value),{...X?{disabled:E.disabled||r.disabled}:{},...r.progressive?{required:!!E.required,min:$r(E.min),max:$r(E.max),minLength:$r(E.minLength),maxLength:$r(E.maxLength),pattern:$r(E.pattern)}:{},name:y,onChange:V,onBlur:V,ref:Y=>{if(Y){Qt(y,E),M=P(u,y);const Z=ct(Y.value)&&Y.querySelectorAll&&Y.querySelectorAll("input,select,textarea")[0]||Y,W=Hv(Z),be=M._f.refs||[];if(W?be.find(ze=>ze===Z):Z===M._f.ref)return;Qe(u,y,{_f:{...M._f,...W?{refs:[...be.filter(sc),Z,...Array.isArray(P(f,y))?[{}]:[]],ref:{type:Z.type,name:y}}:{ref:Z}}}),je(y,!1,void 0,Z)}else M=P(u,y,{}),M._f&&(M._f.mount=!1),(r.shouldUnregister||E.shouldUnregister)&&!(Mv(p.array,y)&&h.action)&&p.unMount.add(y)}}},Oa=()=>r.shouldFocusError&&Ir(u,ee,p.mount),$a=y=>{bn(y)&&(w.state.next({disabled:y}),Ir(u,(E,M)=>{const X=P(u,M);X&&(E.disabled=X._f.disabled||y,Array.isArray(X._f.refs)&&X._f.refs.forEach(Y=>{Y.disabled=X._f.disabled||y}))},0,!1))},Pa=(y,E)=>async M=>{let X;M&&(M.preventDefault&&M.preventDefault(),M.persist&&M.persist());let Y=kt(c);if(w.state.next({isSubmitting:!0}),r.resolver){const{errors:Z,values:W}=await we();o.errors=Z,Y=W}else await ke(u);if(p.disabled.size)for(const Z of p.disabled)Qe(Y,Z,void 0);if(ht(o.errors,"root"),Ut(o.errors)){w.state.next({errors:{}});try{await y(Y,M)}catch(Z){X=Z}}else E&&await E({...o.errors},M),Oa(),setTimeout(Oa);if(w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ut(o.errors)&&!X,submitCount:o.submitCount+1,errors:o.errors}),X)throw X},$l=(y,E={})=>{P(u,y)&&(ct(E.defaultValue)?z(y,kt(P(f,y))):(z(y,E.defaultValue),Qe(f,y,kt(E.defaultValue))),E.keepTouched||ht(o.touchedFields,y),E.keepDirty||(ht(o.dirtyFields,y),o.isDirty=E.defaultValue?tt(y,kt(P(f,y))):tt()),E.keepError||(ht(o.errors,y),O.isValid&&H()),w.state.next({...o}))},Fa=(y,E={})=>{const M=y?kt(y):f,X=kt(M),Y=Ut(y),Z=Y?f:X;if(E.keepDefaultValues||(f=M),!E.keepValues){if(E.keepDirtyValues){const W=new Set([...p.mount,...Object.keys(Jr(f,c))]);for(const be of Array.from(W))P(o.dirtyFields,be)?Qe(Z,be,P(c,be)):z(be,P(Z,be))}else{if(Oc&&ct(y))for(const W of p.mount){const be=P(u,W);if(be&&be._f){const ze=Array.isArray(be._f.refs)?be._f.refs[0]:be._f.ref;if(ko(ze)){const $e=ze.closest("form");if($e){$e.reset();break}}}}for(const W of p.mount)z(W,P(Z,W))}c=kt(Z),w.array.next({values:{...Z}}),w.state.next({values:{...Z}})}p={mount:E.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!O.isValid||!!E.keepIsValid||!!E.keepDirtyValues,h.watch=!!r.shouldUnregister,w.state.next({submitCount:E.keepSubmitCount?o.submitCount:0,isDirty:Y?!1:E.keepDirty?o.isDirty:!!(E.keepDefaultValues&&!ga(y,f)),isSubmitted:E.keepIsSubmitted?o.isSubmitted:!1,dirtyFields:Y?{}:E.keepDirtyValues?E.keepDefaultValues&&c?Jr(f,c):o.dirtyFields:E.keepDefaultValues&&y?Jr(f,y):E.keepDirty?o.dirtyFields:{},touchedFields:E.keepTouched?o.touchedFields:{},errors:E.keepErrors?o.errors:{},isSubmitSuccessful:E.keepIsSubmitSuccessful?o.isSubmitSuccessful:!1,isSubmitting:!1})},ii=(y,E)=>Fa(cn(y)?y(c):y,E),Xo=(y,E={})=>{const M=P(u,y),X=M&&M._f;if(X){const Y=X.refs?X.refs[0]:X.ref;Y.focus&&(Y.focus(),E.shouldSelect&&cn(Y.select)&&Y.select())}},Kt=y=>{o={...o,...y}},Pl={control:{register:Qt,unregister:yt,getFieldState:U,handleSubmit:Pa,setError:L,_subscribe:De,_runSchema:we,_focusError:Oa,_getWatch:ue,_getDirty:tt,_setValid:H,_setFieldArray:Ce,_setDisabledField:Ke,_setErrors:ye,_getFieldArray:Se,_reset:Fa,_resetDefaultValues:()=>cn(r.defaultValues)&&r.defaultValues().then(y=>{ii(y,r.resetOptions),w.state.next({isLoading:!1})}),_removeUnmounted:Ot,_disableForm:$a,_subjects:w,_proxyFormState:O,get _fields(){return u},get _formValues(){return c},get _state(){return h},set _state(y){h=y},get _defaultValues(){return f},get _names(){return p},set _names(y){p=y},get _formState(){return o},get _options(){return r},set _options(y){r={...r,...y}}},subscribe:pe,trigger:Ne,register:Qt,handleSubmit:Pa,watch:oe,setValue:z,getValues:x,reset:ii,resetField:$l,clearErrors:Q,unregister:yt,setError:L,setFocus:Xo,getFieldState:U};return{...Pl,formControl:Pl}}function Fv(l={}){const r=he.useRef(void 0),o=he.useRef(void 0),[u,f]=he.useState({isDirty:!1,isValidating:!1,isLoading:cn(l.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:l.errors||{},disabled:l.disabled||!1,isReady:!1,defaultValues:cn(l.defaultValues)?void 0:l.defaultValues});if(!r.current)if(l.formControl)r.current={...l.formControl,formState:u},l.defaultValues&&!cn(l.defaultValues)&&l.formControl.reset(l.defaultValues,l.resetOptions);else{const{formControl:h,...p}=Pv(l);r.current={...p,formState:u}}const c=r.current.control;return c._options=l,Uv(()=>{const h=c._subscribe({formState:c._proxyFormState,callback:()=>f({...c._formState}),reRenderRoot:!0});return f(p=>({...p,isReady:!0})),c._formState.isReady=!0,h},[c]),he.useEffect(()=>c._disableForm(l.disabled),[c,l.disabled]),he.useEffect(()=>{l.mode&&(c._options.mode=l.mode),l.reValidateMode&&(c._options.reValidateMode=l.reValidateMode)},[c,l.mode,l.reValidateMode]),he.useEffect(()=>{l.errors&&(c._setErrors(l.errors),c._focusError())},[c,l.errors]),he.useEffect(()=>{l.shouldUnregister&&c._subjects.state.next({values:c._getWatch()})},[c,l.shouldUnregister]),he.useEffect(()=>{if(c._proxyFormState.isDirty){const h=c._getDirty();h!==u.isDirty&&c._subjects.state.next({isDirty:h})}},[c,u.isDirty]),he.useEffect(()=>{l.values&&!ga(l.values,o.current)?(c._reset(l.values,c._options.resetOptions),o.current=l.values,f(h=>({...h}))):c._resetDefaultValues()},[c,l.values]),he.useEffect(()=>{c._state.mount||(c._setValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),r.current.formState=jv(u,c),r.current}const G0=(l,r,o)=>{if(l&&"reportValidity"in l){const u=P(o,r);l.setCustomValidity(u&&u.message||""),l.reportValidity()}},hc=(l,r)=>{for(const o in r.fields){const u=r.fields[o];u&&u.ref&&"reportValidity"in u.ref?G0(u.ref,o,l):u&&u.refs&&u.refs.forEach(f=>G0(f,o,l))}},Q0=(l,r)=>{r.shouldUseNativeValidation&&hc(l,r);const o={};for(const u in l){const f=P(r.fields,u),c=Object.assign(l[u]||{},{ref:f&&f.ref});if(Wv(r.names||Object.keys(l),u)){const h=Object.assign({},P(o,u));Qe(h,"root",c),Qe(o,u,h)}else Qe(o,u,c)}return o},Wv=(l,r)=>{const o=K0(r);return l.some(u=>K0(u).match(`^${o}\\.\\d+`))};function K0(l){return l.replace(/\]|\[/g,"")}function Nm(l,r,o){function u(p,v){var g;Object.defineProperty(p,"_zod",{value:p._zod??{},enumerable:!1}),(g=p._zod).traits??(g.traits=new Set),p._zod.traits.add(l),r(p,v);for(const O in h.prototype)O in p||Object.defineProperty(p,O,{value:h.prototype[O].bind(p)});p._zod.constr=h,p._zod.def=v}const f=(o==null?void 0:o.Parent)??Object;class c extends f{}Object.defineProperty(c,"name",{value:l});function h(p){var v;const g=o!=null&&o.Parent?new c:this;u(g,p),(v=g._zod).deferred??(v.deferred=[]);for(const O of g._zod.deferred)O();return g}return Object.defineProperty(h,"init",{value:u}),Object.defineProperty(h,Symbol.hasInstance,{value:p=>{var v,g;return o!=null&&o.Parent&&p instanceof o.Parent?!0:(g=(v=p==null?void 0:p._zod)==null?void 0:v.traits)==null?void 0:g.has(l)}}),Object.defineProperty(h,"name",{value:l}),h}class Iv extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}const eb={};function Mm(l){return eb}function tb(l,r){return typeof r=="bigint"?r.toString():r}const Cm=Error.captureStackTrace?Error.captureStackTrace:(...l)=>{};function yo(l){return typeof l=="string"?l:l==null?void 0:l.message}function Rm(l,r,o){var f,c,h,p,v,g;const u={...l,path:l.path??[]};if(!l.message){const O=yo((h=(c=(f=l.inst)==null?void 0:f._zod.def)==null?void 0:c.error)==null?void 0:h.call(c,l))??yo((p=r==null?void 0:r.error)==null?void 0:p.call(r,l))??yo((v=o.customError)==null?void 0:v.call(o,l))??yo((g=o.localeError)==null?void 0:g.call(o,l))??"Invalid input";u.message=O}return delete u.inst,delete u.continue,r!=null&&r.reportInput||delete u.input,u}const jm=(l,r)=>{l.name="$ZodError",Object.defineProperty(l,"_zod",{value:l._zod,enumerable:!1}),Object.defineProperty(l,"issues",{value:r,enumerable:!1}),Object.defineProperty(l,"message",{get(){return JSON.stringify(r,tb,2)},enumerable:!0})},nb=Nm("$ZodError",jm),Um=Nm("$ZodError",jm,{Parent:Error}),ab=l=>(r,o,u,f)=>{const c=u?Object.assign(u,{async:!1}):{async:!1},h=r._zod.run({value:o,issues:[]},c);if(h instanceof Promise)throw new Iv;if(h.issues.length){const p=new((f==null?void 0:f.Err)??l)(h.issues.map(v=>Rm(v,c,Mm())));throw Cm(p,f==null?void 0:f.callee),p}return h.value},lb=ab(Um),rb=l=>async(r,o,u,f)=>{const c=u?Object.assign(u,{async:!0}):{async:!0};let h=r._zod.run({value:o,issues:[]},c);if(h instanceof Promise&&(h=await h),h.issues.length){const p=new((f==null?void 0:f.Err)??l)(h.issues.map(v=>Rm(v,c,Mm())));throw Cm(p,f==null?void 0:f.callee),p}return h.value},ib=rb(Um);function J0(l,r){try{var o=l()}catch(u){return r(u)}return o&&o.then?o.then(void 0,r):o}function ob(l,r){for(var o={};l.length;){var u=l[0],f=u.code,c=u.message,h=u.path.join(".");if(!o[h])if("unionErrors"in u){var p=u.unionErrors[0].errors[0];o[h]={message:p.message,type:p.code}}else o[h]={message:c,type:f};if("unionErrors"in u&&u.unionErrors.forEach(function(O){return O.errors.forEach(function(C){return l.push(C)})}),r){var v=o[h].types,g=v&&v[u.code];o[h]=Ec(h,r,o,f,g?[].concat(g,u.message):u.message)}l.shift()}return o}function ub(l,r){for(var o={};l.length;){var u=l[0],f=u.code,c=u.message,h=u.path.join(".");if(!o[h])if(u.code==="invalid_union"){var p=u.errors[0][0];o[h]={message:p.message,type:p.code}}else o[h]={message:c,type:f};if(u.code==="invalid_union"&&u.errors.forEach(function(O){return O.forEach(function(C){return l.push(C)})}),r){var v=o[h].types,g=v&&v[u.code];o[h]=Ec(h,r,o,f,g?[].concat(g,u.message):u.message)}l.shift()}return o}function sb(l,r,o){if(o===void 0&&(o={}),function(u){return"_def"in u&&typeof u._def=="object"&&"typeName"in u._def}(l))return function(u,f,c){try{return Promise.resolve(J0(function(){return Promise.resolve(l[o.mode==="sync"?"parse":"parseAsync"](u,r)).then(function(h){return c.shouldUseNativeValidation&&hc({},c),{errors:{},values:o.raw?Object.assign({},u):h}})},function(h){if(function(p){return Array.isArray(p==null?void 0:p.issues)}(h))return{values:{},errors:Q0(ob(h.errors,!c.shouldUseNativeValidation&&c.criteriaMode==="all"),c)};throw h}))}catch(h){return Promise.reject(h)}};if(function(u){return"_zod"in u&&typeof u._zod=="object"}(l))return function(u,f,c){try{return Promise.resolve(J0(function(){return Promise.resolve((o.mode==="sync"?lb:ib)(l,u,r)).then(function(h){return c.shouldUseNativeValidation&&hc({},c),{errors:{},values:o.raw?Object.assign({},u):h}})},function(h){if(function(p){return p instanceof nb}(h))return{values:{},errors:Q0(ub(h.issues,!c.shouldUseNativeValidation&&c.criteriaMode==="all"),c)};throw h}))}catch(h){return Promise.reject(h)}};throw new Error("Invalid input: not a Zod schema")}function $0({variant:l="PRIMARY",children:r,className:o="",...u}){const h=`px-4 py-1 rounded-full font-medium transition-colors duration-200 ${{PRIMARY:"bg-purple-600 text-white hover:bg-purple-900 rounded-xl",SECONDARY:"bg-gray-200 text-gray-900 hover:bg-gray-300 rounded-xl",SUCCESS:"bg-green-600 text-white hover:bg-green-700 rounded-xl",DANGER:"bg-red-600 text-white hover:bg-red-700 rounded-xl",WARNING:"bg-yellow-500 text-white hover:bg-yellow-600 rounded-xl"}[l]} ${o}`;return q.jsx("button",{className:h,...u,children:r})}const cb=({categories:l,selectedCategoryIds:r,onCategoriesUpdate:o,onCategoryToggle:u,isLoading:f})=>{const[c,h]=me.useState(""),[p,v]=me.useState(""),g=async()=>{if(!c.trim())return;if(v(""),l.some(w=>w.name.toLowerCase()===c.trim().toLowerCase())){v("Category already exists!");return}try{const w=await yv({name:c.trim()}),ie=[...l,w];o(ie),u(w.id),h("")}catch(w){v("Failed to create category. Please try again!"+w)}},O=async C=>{try{await xv(C);const w=l.filter(ie=>ie.id!==C);o(w),r.includes(C)&&u(C)}catch(w){console.error("Failed to delete category:",w)}};return q.jsxs("div",{children:[q.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Categories"}),q.jsx("div",{className:"min-h-[120px] border-1 text-slate-300 rounded-xl p-2 shadow-sm",children:f?q.jsx("div",{className:"flex items-center justify-center",children:q.jsx("p",{className:"text-sm text-gray-500",children:"Loading categories..."})}):q.jsx("div",{className:"space-y-2 max-h-[190px] overflow-y-auto no-scrollbar",children:l.map(C=>q.jsxs("label",{className:"flex items-center justify-between p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer",children:[q.jsxs("div",{className:"flex items-center gap-3",children:[q.jsx("input",{type:"checkbox",checked:r.includes(C.id),onChange:()=>u(C.id),className:"w-4 h-4 accent-purple-500 bg-gray-100 border-gray-300 rounded"}),q.jsx("span",{className:"text-gray-700",children:C.name})]}),q.jsx($0,{type:"button",onClick:()=>O(C.id),variant:"DANGER",className:"hover:text-red-200 text-sm font-bold px-2 py-1 rounded-3xl hover:bg-red-100 transition-colors duration-200",children:"Delete"})]},C.id))})}),"/* -------------------------------------------------------------------------- */",q.jsxs("div",{className:"mt-3 pt-3 border-t border-purple-900",children:[q.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Create New Category"}),q.jsxs("div",{className:"flex gap-2",children:[q.jsx("input",{type:"text",value:c,onChange:C=>{h(C.target.value),v("")},onKeyDown:C=>{C.key==="Enter"&&(C.preventDefault(),g())},placeholder:"New Category name",className:"w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 text-gray-900"}),q.jsx($0,{type:"button",onClick:g,variant:"PRIMARY",disabled:!c.trim(),className:"px-4 py-2 text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",children:"ADD"})]}),p&&q.jsx("p",{className:"text-red-500 text-sm mt-1",children:p})]})]})};var qe;(function(l){l.assertEqual=f=>{};function r(f){}l.assertIs=r;function o(f){throw new Error}l.assertNever=o,l.arrayToEnum=f=>{const c={};for(const h of f)c[h]=h;return c},l.getValidEnumValues=f=>{const c=l.objectKeys(f).filter(p=>typeof f[f[p]]!="number"),h={};for(const p of c)h[p]=f[p];return l.objectValues(h)},l.objectValues=f=>l.objectKeys(f).map(function(c){return f[c]}),l.objectKeys=typeof Object.keys=="function"?f=>Object.keys(f):f=>{const c=[];for(const h in f)Object.prototype.hasOwnProperty.call(f,h)&&c.push(h);return c},l.find=(f,c)=>{for(const h of f)if(c(h))return h},l.isInteger=typeof Number.isInteger=="function"?f=>Number.isInteger(f):f=>typeof f=="number"&&Number.isFinite(f)&&Math.floor(f)===f;function u(f,c=" | "){return f.map(h=>typeof h=="string"?`'${h}'`:h).join(c)}l.joinValues=u,l.jsonStringifyReplacer=(f,c)=>typeof c=="bigint"?c.toString():c})(qe||(qe={}));var P0;(function(l){l.mergeShapes=(r,o)=>({...r,...o})})(P0||(P0={}));const F=qe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),pa=l=>{switch(typeof l){case"undefined":return F.undefined;case"string":return F.string;case"number":return Number.isNaN(l)?F.nan:F.number;case"boolean":return F.boolean;case"function":return F.function;case"bigint":return F.bigint;case"symbol":return F.symbol;case"object":return Array.isArray(l)?F.array:l===null?F.null:l.then&&typeof l.then=="function"&&l.catch&&typeof l.catch=="function"?F.promise:typeof Map<"u"&&l instanceof Map?F.map:typeof Set<"u"&&l instanceof Set?F.set:typeof Date<"u"&&l instanceof Date?F.date:F.object;default:return F.unknown}},B=qe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Bn extends Error{get errors(){return this.issues}constructor(r){super(),this.issues=[],this.addIssue=u=>{this.issues=[...this.issues,u]},this.addIssues=(u=[])=>{this.issues=[...this.issues,...u]};const o=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,o):this.__proto__=o,this.name="ZodError",this.issues=r}format(r){const o=r||function(c){return c.message},u={_errors:[]},f=c=>{for(const h of c.issues)if(h.code==="invalid_union")h.unionErrors.map(f);else if(h.code==="invalid_return_type")f(h.returnTypeError);else if(h.code==="invalid_arguments")f(h.argumentsError);else if(h.path.length===0)u._errors.push(o(h));else{let p=u,v=0;for(;v<h.path.length;){const g=h.path[v];v===h.path.length-1?(p[g]=p[g]||{_errors:[]},p[g]._errors.push(o(h))):p[g]=p[g]||{_errors:[]},p=p[g],v++}}};return f(this),u}static assert(r){if(!(r instanceof Bn))throw new Error(`Not a ZodError: ${r}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,qe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(r=o=>o.message){const o={},u=[];for(const f of this.issues)f.path.length>0?(o[f.path[0]]=o[f.path[0]]||[],o[f.path[0]].push(r(f))):u.push(r(f));return{formErrors:u,fieldErrors:o}}get formErrors(){return this.flatten()}}Bn.create=l=>new Bn(l);const mc=(l,r)=>{let o;switch(l.code){case B.invalid_type:l.received===F.undefined?o="Required":o=`Expected ${l.expected}, received ${l.received}`;break;case B.invalid_literal:o=`Invalid literal value, expected ${JSON.stringify(l.expected,qe.jsonStringifyReplacer)}`;break;case B.unrecognized_keys:o=`Unrecognized key(s) in object: ${qe.joinValues(l.keys,", ")}`;break;case B.invalid_union:o="Invalid input";break;case B.invalid_union_discriminator:o=`Invalid discriminator value. Expected ${qe.joinValues(l.options)}`;break;case B.invalid_enum_value:o=`Invalid enum value. Expected ${qe.joinValues(l.options)}, received '${l.received}'`;break;case B.invalid_arguments:o="Invalid function arguments";break;case B.invalid_return_type:o="Invalid function return type";break;case B.invalid_date:o="Invalid date";break;case B.invalid_string:typeof l.validation=="object"?"includes"in l.validation?(o=`Invalid input: must include "${l.validation.includes}"`,typeof l.validation.position=="number"&&(o=`${o} at one or more positions greater than or equal to ${l.validation.position}`)):"startsWith"in l.validation?o=`Invalid input: must start with "${l.validation.startsWith}"`:"endsWith"in l.validation?o=`Invalid input: must end with "${l.validation.endsWith}"`:qe.assertNever(l.validation):l.validation!=="regex"?o=`Invalid ${l.validation}`:o="Invalid";break;case B.too_small:l.type==="array"?o=`Array must contain ${l.exact?"exactly":l.inclusive?"at least":"more than"} ${l.minimum} element(s)`:l.type==="string"?o=`String must contain ${l.exact?"exactly":l.inclusive?"at least":"over"} ${l.minimum} character(s)`:l.type==="number"?o=`Number must be ${l.exact?"exactly equal to ":l.inclusive?"greater than or equal to ":"greater than "}${l.minimum}`:l.type==="date"?o=`Date must be ${l.exact?"exactly equal to ":l.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(l.minimum))}`:o="Invalid input";break;case B.too_big:l.type==="array"?o=`Array must contain ${l.exact?"exactly":l.inclusive?"at most":"less than"} ${l.maximum} element(s)`:l.type==="string"?o=`String must contain ${l.exact?"exactly":l.inclusive?"at most":"under"} ${l.maximum} character(s)`:l.type==="number"?o=`Number must be ${l.exact?"exactly":l.inclusive?"less than or equal to":"less than"} ${l.maximum}`:l.type==="bigint"?o=`BigInt must be ${l.exact?"exactly":l.inclusive?"less than or equal to":"less than"} ${l.maximum}`:l.type==="date"?o=`Date must be ${l.exact?"exactly":l.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(l.maximum))}`:o="Invalid input";break;case B.custom:o="Invalid input";break;case B.invalid_intersection_types:o="Intersection results could not be merged";break;case B.not_multiple_of:o=`Number must be a multiple of ${l.multipleOf}`;break;case B.not_finite:o="Number must be finite";break;default:o=r.defaultError,qe.assertNever(l)}return{message:o}};let fb=mc;function db(){return fb}const hb=l=>{const{data:r,path:o,errorMaps:u,issueData:f}=l,c=[...o,...f.path||[]],h={...f,path:c};if(f.message!==void 0)return{...f,path:c,message:f.message};let p="";const v=u.filter(g=>!!g).slice().reverse();for(const g of v)p=g(h,{data:r,defaultError:p}).message;return{...f,path:c,message:p}};function G(l,r){const o=db(),u=hb({issueData:r,data:l.data,path:l.path,errorMaps:[l.common.contextualErrorMap,l.schemaErrorMap,o,o===mc?void 0:mc].filter(f=>!!f)});l.common.issues.push(u)}class Gt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(r,o){const u=[];for(const f of o){if(f.status==="aborted")return ge;f.status==="dirty"&&r.dirty(),u.push(f.value)}return{status:r.value,value:u}}static async mergeObjectAsync(r,o){const u=[];for(const f of o){const c=await f.key,h=await f.value;u.push({key:c,value:h})}return Gt.mergeObjectSync(r,u)}static mergeObjectSync(r,o){const u={};for(const f of o){const{key:c,value:h}=f;if(c.status==="aborted"||h.status==="aborted")return ge;c.status==="dirty"&&r.dirty(),h.status==="dirty"&&r.dirty(),c.value!=="__proto__"&&(typeof h.value<"u"||f.alwaysSet)&&(u[c.value]=h.value)}return{status:r.value,value:u}}}const ge=Object.freeze({status:"aborted"}),Pr=l=>({status:"dirty",value:l}),an=l=>({status:"valid",value:l}),F0=l=>l.status==="aborted",W0=l=>l.status==="dirty",Xl=l=>l.status==="valid",wo=l=>typeof Promise<"u"&&l instanceof Promise;var I;(function(l){l.errToObj=r=>typeof r=="string"?{message:r}:r||{},l.toString=r=>typeof r=="string"?r:r==null?void 0:r.message})(I||(I={}));class xa{constructor(r,o,u,f){this._cachedPath=[],this.parent=r,this.data=o,this._path=u,this._key=f}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const I0=(l,r)=>{if(Xl(r))return{success:!0,data:r.value};if(!l.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const o=new Bn(l.common.issues);return this._error=o,this._error}}};function Te(l){if(!l)return{};const{errorMap:r,invalid_type_error:o,required_error:u,description:f}=l;if(r&&(o||u))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return r?{errorMap:r,description:f}:{errorMap:(h,p)=>{const{message:v}=l;return h.code==="invalid_enum_value"?{message:v??p.defaultError}:typeof p.data>"u"?{message:v??u??p.defaultError}:h.code!=="invalid_type"?{message:p.defaultError}:{message:v??o??p.defaultError}},description:f}}class Re{get description(){return this._def.description}_getType(r){return pa(r.data)}_getOrReturnCtx(r,o){return o||{common:r.parent.common,data:r.data,parsedType:pa(r.data),schemaErrorMap:this._def.errorMap,path:r.path,parent:r.parent}}_processInputParams(r){return{status:new Gt,ctx:{common:r.parent.common,data:r.data,parsedType:pa(r.data),schemaErrorMap:this._def.errorMap,path:r.path,parent:r.parent}}}_parseSync(r){const o=this._parse(r);if(wo(o))throw new Error("Synchronous parse encountered promise.");return o}_parseAsync(r){const o=this._parse(r);return Promise.resolve(o)}parse(r,o){const u=this.safeParse(r,o);if(u.success)return u.data;throw u.error}safeParse(r,o){const u={common:{issues:[],async:(o==null?void 0:o.async)??!1,contextualErrorMap:o==null?void 0:o.errorMap},path:(o==null?void 0:o.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:r,parsedType:pa(r)},f=this._parseSync({data:r,path:u.path,parent:u});return I0(u,f)}"~validate"(r){var u,f;const o={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:r,parsedType:pa(r)};if(!this["~standard"].async)try{const c=this._parseSync({data:r,path:[],parent:o});return Xl(c)?{value:c.value}:{issues:o.common.issues}}catch(c){(f=(u=c==null?void 0:c.message)==null?void 0:u.toLowerCase())!=null&&f.includes("encountered")&&(this["~standard"].async=!0),o.common={issues:[],async:!0}}return this._parseAsync({data:r,path:[],parent:o}).then(c=>Xl(c)?{value:c.value}:{issues:o.common.issues})}async parseAsync(r,o){const u=await this.safeParseAsync(r,o);if(u.success)return u.data;throw u.error}async safeParseAsync(r,o){const u={common:{issues:[],contextualErrorMap:o==null?void 0:o.errorMap,async:!0},path:(o==null?void 0:o.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:r,parsedType:pa(r)},f=this._parse({data:r,path:u.path,parent:u}),c=await(wo(f)?f:Promise.resolve(f));return I0(u,c)}refine(r,o){const u=f=>typeof o=="string"||typeof o>"u"?{message:o}:typeof o=="function"?o(f):o;return this._refinement((f,c)=>{const h=r(f),p=()=>c.addIssue({code:B.custom,...u(f)});return typeof Promise<"u"&&h instanceof Promise?h.then(v=>v?!0:(p(),!1)):h?!0:(p(),!1)})}refinement(r,o){return this._refinement((u,f)=>r(u)?!0:(f.addIssue(typeof o=="function"?o(u,f):o),!1))}_refinement(r){return new Kl({schema:this,typeName:ve.ZodEffects,effect:{type:"refinement",refinement:r}})}superRefine(r){return this._refinement(r)}constructor(r){this.spa=this.safeParseAsync,this._def=r,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:o=>this["~validate"](o)}}optional(){return ya.create(this,this._def)}nullable(){return Jl.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return xn.create(this)}promise(){return Ro.create(this,this._def)}or(r){return Mo.create([this,r],this._def)}and(r){return Co.create(this,r,this._def)}transform(r){return new Kl({...Te(this._def),schema:this,typeName:ve.ZodEffects,effect:{type:"transform",transform:r}})}default(r){const o=typeof r=="function"?r:()=>r;return new gc({...Te(this._def),innerType:this,defaultValue:o,typeName:ve.ZodDefault})}brand(){return new Ub({typeName:ve.ZodBranded,type:this,...Te(this._def)})}catch(r){const o=typeof r=="function"?r:()=>r;return new vc({...Te(this._def),innerType:this,catchValue:o,typeName:ve.ZodCatch})}describe(r){const o=this.constructor;return new o({...this._def,description:r})}pipe(r){return zc.create(this,r)}readonly(){return bc.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const mb=/^c[^\s-]{8,}$/i,pb=/^[0-9a-z]+$/,gb=/^[0-9A-HJKMNP-TV-Z]{26}$/i,vb=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,bb=/^[a-z0-9_-]{21}$/i,yb=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,xb=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,_b=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Sb="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let cc;const Ob=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Tb=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Ab=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Eb=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,kb=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Db=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,qm="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",zb=new RegExp(`^${qm}$`);function Hm(l){let r="[0-5]\\d";l.precision?r=`${r}\\.\\d{${l.precision}}`:l.precision==null&&(r=`${r}(\\.\\d+)?`);const o=l.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${r})${o}`}function wb(l){return new RegExp(`^${Hm(l)}$`)}function Nb(l){let r=`${qm}T${Hm(l)}`;const o=[];return o.push(l.local?"Z?":"Z"),l.offset&&o.push("([+-]\\d{2}:?\\d{2})"),r=`${r}(${o.join("|")})`,new RegExp(`^${r}$`)}function Mb(l,r){return!!((r==="v4"||!r)&&Ob.test(l)||(r==="v6"||!r)&&Ab.test(l))}function Cb(l,r){if(!yb.test(l))return!1;try{const[o]=l.split("."),u=o.replace(/-/g,"+").replace(/_/g,"/").padEnd(o.length+(4-o.length%4)%4,"="),f=JSON.parse(atob(u));return!(typeof f!="object"||f===null||"typ"in f&&(f==null?void 0:f.typ)!=="JWT"||!f.alg||r&&f.alg!==r)}catch{return!1}}function Rb(l,r){return!!((r==="v4"||!r)&&Tb.test(l)||(r==="v6"||!r)&&Eb.test(l))}class ba extends Re{_parse(r){if(this._def.coerce&&(r.data=String(r.data)),this._getType(r)!==F.string){const c=this._getOrReturnCtx(r);return G(c,{code:B.invalid_type,expected:F.string,received:c.parsedType}),ge}const u=new Gt;let f;for(const c of this._def.checks)if(c.kind==="min")r.data.length<c.value&&(f=this._getOrReturnCtx(r,f),G(f,{code:B.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),u.dirty());else if(c.kind==="max")r.data.length>c.value&&(f=this._getOrReturnCtx(r,f),G(f,{code:B.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),u.dirty());else if(c.kind==="length"){const h=r.data.length>c.value,p=r.data.length<c.value;(h||p)&&(f=this._getOrReturnCtx(r,f),h?G(f,{code:B.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}):p&&G(f,{code:B.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}),u.dirty())}else if(c.kind==="email")_b.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"email",code:B.invalid_string,message:c.message}),u.dirty());else if(c.kind==="emoji")cc||(cc=new RegExp(Sb,"u")),cc.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"emoji",code:B.invalid_string,message:c.message}),u.dirty());else if(c.kind==="uuid")vb.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"uuid",code:B.invalid_string,message:c.message}),u.dirty());else if(c.kind==="nanoid")bb.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"nanoid",code:B.invalid_string,message:c.message}),u.dirty());else if(c.kind==="cuid")mb.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"cuid",code:B.invalid_string,message:c.message}),u.dirty());else if(c.kind==="cuid2")pb.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"cuid2",code:B.invalid_string,message:c.message}),u.dirty());else if(c.kind==="ulid")gb.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"ulid",code:B.invalid_string,message:c.message}),u.dirty());else if(c.kind==="url")try{new URL(r.data)}catch{f=this._getOrReturnCtx(r,f),G(f,{validation:"url",code:B.invalid_string,message:c.message}),u.dirty()}else c.kind==="regex"?(c.regex.lastIndex=0,c.regex.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"regex",code:B.invalid_string,message:c.message}),u.dirty())):c.kind==="trim"?r.data=r.data.trim():c.kind==="includes"?r.data.includes(c.value,c.position)||(f=this._getOrReturnCtx(r,f),G(f,{code:B.invalid_string,validation:{includes:c.value,position:c.position},message:c.message}),u.dirty()):c.kind==="toLowerCase"?r.data=r.data.toLowerCase():c.kind==="toUpperCase"?r.data=r.data.toUpperCase():c.kind==="startsWith"?r.data.startsWith(c.value)||(f=this._getOrReturnCtx(r,f),G(f,{code:B.invalid_string,validation:{startsWith:c.value},message:c.message}),u.dirty()):c.kind==="endsWith"?r.data.endsWith(c.value)||(f=this._getOrReturnCtx(r,f),G(f,{code:B.invalid_string,validation:{endsWith:c.value},message:c.message}),u.dirty()):c.kind==="datetime"?Nb(c).test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{code:B.invalid_string,validation:"datetime",message:c.message}),u.dirty()):c.kind==="date"?zb.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{code:B.invalid_string,validation:"date",message:c.message}),u.dirty()):c.kind==="time"?wb(c).test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{code:B.invalid_string,validation:"time",message:c.message}),u.dirty()):c.kind==="duration"?xb.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"duration",code:B.invalid_string,message:c.message}),u.dirty()):c.kind==="ip"?Mb(r.data,c.version)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"ip",code:B.invalid_string,message:c.message}),u.dirty()):c.kind==="jwt"?Cb(r.data,c.alg)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"jwt",code:B.invalid_string,message:c.message}),u.dirty()):c.kind==="cidr"?Rb(r.data,c.version)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"cidr",code:B.invalid_string,message:c.message}),u.dirty()):c.kind==="base64"?kb.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"base64",code:B.invalid_string,message:c.message}),u.dirty()):c.kind==="base64url"?Db.test(r.data)||(f=this._getOrReturnCtx(r,f),G(f,{validation:"base64url",code:B.invalid_string,message:c.message}),u.dirty()):qe.assertNever(c);return{status:u.value,value:r.data}}_regex(r,o,u){return this.refinement(f=>r.test(f),{validation:o,code:B.invalid_string,...I.errToObj(u)})}_addCheck(r){return new ba({...this._def,checks:[...this._def.checks,r]})}email(r){return this._addCheck({kind:"email",...I.errToObj(r)})}url(r){return this._addCheck({kind:"url",...I.errToObj(r)})}emoji(r){return this._addCheck({kind:"emoji",...I.errToObj(r)})}uuid(r){return this._addCheck({kind:"uuid",...I.errToObj(r)})}nanoid(r){return this._addCheck({kind:"nanoid",...I.errToObj(r)})}cuid(r){return this._addCheck({kind:"cuid",...I.errToObj(r)})}cuid2(r){return this._addCheck({kind:"cuid2",...I.errToObj(r)})}ulid(r){return this._addCheck({kind:"ulid",...I.errToObj(r)})}base64(r){return this._addCheck({kind:"base64",...I.errToObj(r)})}base64url(r){return this._addCheck({kind:"base64url",...I.errToObj(r)})}jwt(r){return this._addCheck({kind:"jwt",...I.errToObj(r)})}ip(r){return this._addCheck({kind:"ip",...I.errToObj(r)})}cidr(r){return this._addCheck({kind:"cidr",...I.errToObj(r)})}datetime(r){return typeof r=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:r}):this._addCheck({kind:"datetime",precision:typeof(r==null?void 0:r.precision)>"u"?null:r==null?void 0:r.precision,offset:(r==null?void 0:r.offset)??!1,local:(r==null?void 0:r.local)??!1,...I.errToObj(r==null?void 0:r.message)})}date(r){return this._addCheck({kind:"date",message:r})}time(r){return typeof r=="string"?this._addCheck({kind:"time",precision:null,message:r}):this._addCheck({kind:"time",precision:typeof(r==null?void 0:r.precision)>"u"?null:r==null?void 0:r.precision,...I.errToObj(r==null?void 0:r.message)})}duration(r){return this._addCheck({kind:"duration",...I.errToObj(r)})}regex(r,o){return this._addCheck({kind:"regex",regex:r,...I.errToObj(o)})}includes(r,o){return this._addCheck({kind:"includes",value:r,position:o==null?void 0:o.position,...I.errToObj(o==null?void 0:o.message)})}startsWith(r,o){return this._addCheck({kind:"startsWith",value:r,...I.errToObj(o)})}endsWith(r,o){return this._addCheck({kind:"endsWith",value:r,...I.errToObj(o)})}min(r,o){return this._addCheck({kind:"min",value:r,...I.errToObj(o)})}max(r,o){return this._addCheck({kind:"max",value:r,...I.errToObj(o)})}length(r,o){return this._addCheck({kind:"length",value:r,...I.errToObj(o)})}nonempty(r){return this.min(1,I.errToObj(r))}trim(){return new ba({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ba({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ba({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(r=>r.kind==="datetime")}get isDate(){return!!this._def.checks.find(r=>r.kind==="date")}get isTime(){return!!this._def.checks.find(r=>r.kind==="time")}get isDuration(){return!!this._def.checks.find(r=>r.kind==="duration")}get isEmail(){return!!this._def.checks.find(r=>r.kind==="email")}get isURL(){return!!this._def.checks.find(r=>r.kind==="url")}get isEmoji(){return!!this._def.checks.find(r=>r.kind==="emoji")}get isUUID(){return!!this._def.checks.find(r=>r.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(r=>r.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(r=>r.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(r=>r.kind==="cuid2")}get isULID(){return!!this._def.checks.find(r=>r.kind==="ulid")}get isIP(){return!!this._def.checks.find(r=>r.kind==="ip")}get isCIDR(){return!!this._def.checks.find(r=>r.kind==="cidr")}get isBase64(){return!!this._def.checks.find(r=>r.kind==="base64")}get isBase64url(){return!!this._def.checks.find(r=>r.kind==="base64url")}get minLength(){let r=null;for(const o of this._def.checks)o.kind==="min"&&(r===null||o.value>r)&&(r=o.value);return r}get maxLength(){let r=null;for(const o of this._def.checks)o.kind==="max"&&(r===null||o.value<r)&&(r=o.value);return r}}ba.create=l=>new ba({checks:[],typeName:ve.ZodString,coerce:(l==null?void 0:l.coerce)??!1,...Te(l)});function jb(l,r){const o=(l.toString().split(".")[1]||"").length,u=(r.toString().split(".")[1]||"").length,f=o>u?o:u,c=Number.parseInt(l.toFixed(f).replace(".","")),h=Number.parseInt(r.toFixed(f).replace(".",""));return c%h/10**f}class Gl extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(r){if(this._def.coerce&&(r.data=Number(r.data)),this._getType(r)!==F.number){const c=this._getOrReturnCtx(r);return G(c,{code:B.invalid_type,expected:F.number,received:c.parsedType}),ge}let u;const f=new Gt;for(const c of this._def.checks)c.kind==="int"?qe.isInteger(r.data)||(u=this._getOrReturnCtx(r,u),G(u,{code:B.invalid_type,expected:"integer",received:"float",message:c.message}),f.dirty()):c.kind==="min"?(c.inclusive?r.data<c.value:r.data<=c.value)&&(u=this._getOrReturnCtx(r,u),G(u,{code:B.too_small,minimum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),f.dirty()):c.kind==="max"?(c.inclusive?r.data>c.value:r.data>=c.value)&&(u=this._getOrReturnCtx(r,u),G(u,{code:B.too_big,maximum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),f.dirty()):c.kind==="multipleOf"?jb(r.data,c.value)!==0&&(u=this._getOrReturnCtx(r,u),G(u,{code:B.not_multiple_of,multipleOf:c.value,message:c.message}),f.dirty()):c.kind==="finite"?Number.isFinite(r.data)||(u=this._getOrReturnCtx(r,u),G(u,{code:B.not_finite,message:c.message}),f.dirty()):qe.assertNever(c);return{status:f.value,value:r.data}}gte(r,o){return this.setLimit("min",r,!0,I.toString(o))}gt(r,o){return this.setLimit("min",r,!1,I.toString(o))}lte(r,o){return this.setLimit("max",r,!0,I.toString(o))}lt(r,o){return this.setLimit("max",r,!1,I.toString(o))}setLimit(r,o,u,f){return new Gl({...this._def,checks:[...this._def.checks,{kind:r,value:o,inclusive:u,message:I.toString(f)}]})}_addCheck(r){return new Gl({...this._def,checks:[...this._def.checks,r]})}int(r){return this._addCheck({kind:"int",message:I.toString(r)})}positive(r){return this._addCheck({kind:"min",value:0,inclusive:!1,message:I.toString(r)})}negative(r){return this._addCheck({kind:"max",value:0,inclusive:!1,message:I.toString(r)})}nonpositive(r){return this._addCheck({kind:"max",value:0,inclusive:!0,message:I.toString(r)})}nonnegative(r){return this._addCheck({kind:"min",value:0,inclusive:!0,message:I.toString(r)})}multipleOf(r,o){return this._addCheck({kind:"multipleOf",value:r,message:I.toString(o)})}finite(r){return this._addCheck({kind:"finite",message:I.toString(r)})}safe(r){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:I.toString(r)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:I.toString(r)})}get minValue(){let r=null;for(const o of this._def.checks)o.kind==="min"&&(r===null||o.value>r)&&(r=o.value);return r}get maxValue(){let r=null;for(const o of this._def.checks)o.kind==="max"&&(r===null||o.value<r)&&(r=o.value);return r}get isInt(){return!!this._def.checks.find(r=>r.kind==="int"||r.kind==="multipleOf"&&qe.isInteger(r.value))}get isFinite(){let r=null,o=null;for(const u of this._def.checks){if(u.kind==="finite"||u.kind==="int"||u.kind==="multipleOf")return!0;u.kind==="min"?(o===null||u.value>o)&&(o=u.value):u.kind==="max"&&(r===null||u.value<r)&&(r=u.value)}return Number.isFinite(o)&&Number.isFinite(r)}}Gl.create=l=>new Gl({checks:[],typeName:ve.ZodNumber,coerce:(l==null?void 0:l.coerce)||!1,...Te(l)});class ti extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(r){if(this._def.coerce)try{r.data=BigInt(r.data)}catch{return this._getInvalidInput(r)}if(this._getType(r)!==F.bigint)return this._getInvalidInput(r);let u;const f=new Gt;for(const c of this._def.checks)c.kind==="min"?(c.inclusive?r.data<c.value:r.data<=c.value)&&(u=this._getOrReturnCtx(r,u),G(u,{code:B.too_small,type:"bigint",minimum:c.value,inclusive:c.inclusive,message:c.message}),f.dirty()):c.kind==="max"?(c.inclusive?r.data>c.value:r.data>=c.value)&&(u=this._getOrReturnCtx(r,u),G(u,{code:B.too_big,type:"bigint",maximum:c.value,inclusive:c.inclusive,message:c.message}),f.dirty()):c.kind==="multipleOf"?r.data%c.value!==BigInt(0)&&(u=this._getOrReturnCtx(r,u),G(u,{code:B.not_multiple_of,multipleOf:c.value,message:c.message}),f.dirty()):qe.assertNever(c);return{status:f.value,value:r.data}}_getInvalidInput(r){const o=this._getOrReturnCtx(r);return G(o,{code:B.invalid_type,expected:F.bigint,received:o.parsedType}),ge}gte(r,o){return this.setLimit("min",r,!0,I.toString(o))}gt(r,o){return this.setLimit("min",r,!1,I.toString(o))}lte(r,o){return this.setLimit("max",r,!0,I.toString(o))}lt(r,o){return this.setLimit("max",r,!1,I.toString(o))}setLimit(r,o,u,f){return new ti({...this._def,checks:[...this._def.checks,{kind:r,value:o,inclusive:u,message:I.toString(f)}]})}_addCheck(r){return new ti({...this._def,checks:[...this._def.checks,r]})}positive(r){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:I.toString(r)})}negative(r){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:I.toString(r)})}nonpositive(r){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:I.toString(r)})}nonnegative(r){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:I.toString(r)})}multipleOf(r,o){return this._addCheck({kind:"multipleOf",value:r,message:I.toString(o)})}get minValue(){let r=null;for(const o of this._def.checks)o.kind==="min"&&(r===null||o.value>r)&&(r=o.value);return r}get maxValue(){let r=null;for(const o of this._def.checks)o.kind==="max"&&(r===null||o.value<r)&&(r=o.value);return r}}ti.create=l=>new ti({checks:[],typeName:ve.ZodBigInt,coerce:(l==null?void 0:l.coerce)??!1,...Te(l)});class em extends Re{_parse(r){if(this._def.coerce&&(r.data=!!r.data),this._getType(r)!==F.boolean){const u=this._getOrReturnCtx(r);return G(u,{code:B.invalid_type,expected:F.boolean,received:u.parsedType}),ge}return an(r.data)}}em.create=l=>new em({typeName:ve.ZodBoolean,coerce:(l==null?void 0:l.coerce)||!1,...Te(l)});class No extends Re{_parse(r){if(this._def.coerce&&(r.data=new Date(r.data)),this._getType(r)!==F.date){const c=this._getOrReturnCtx(r);return G(c,{code:B.invalid_type,expected:F.date,received:c.parsedType}),ge}if(Number.isNaN(r.data.getTime())){const c=this._getOrReturnCtx(r);return G(c,{code:B.invalid_date}),ge}const u=new Gt;let f;for(const c of this._def.checks)c.kind==="min"?r.data.getTime()<c.value&&(f=this._getOrReturnCtx(r,f),G(f,{code:B.too_small,message:c.message,inclusive:!0,exact:!1,minimum:c.value,type:"date"}),u.dirty()):c.kind==="max"?r.data.getTime()>c.value&&(f=this._getOrReturnCtx(r,f),G(f,{code:B.too_big,message:c.message,inclusive:!0,exact:!1,maximum:c.value,type:"date"}),u.dirty()):qe.assertNever(c);return{status:u.value,value:new Date(r.data.getTime())}}_addCheck(r){return new No({...this._def,checks:[...this._def.checks,r]})}min(r,o){return this._addCheck({kind:"min",value:r.getTime(),message:I.toString(o)})}max(r,o){return this._addCheck({kind:"max",value:r.getTime(),message:I.toString(o)})}get minDate(){let r=null;for(const o of this._def.checks)o.kind==="min"&&(r===null||o.value>r)&&(r=o.value);return r!=null?new Date(r):null}get maxDate(){let r=null;for(const o of this._def.checks)o.kind==="max"&&(r===null||o.value<r)&&(r=o.value);return r!=null?new Date(r):null}}No.create=l=>new No({checks:[],coerce:(l==null?void 0:l.coerce)||!1,typeName:ve.ZodDate,...Te(l)});class tm extends Re{_parse(r){if(this._getType(r)!==F.symbol){const u=this._getOrReturnCtx(r);return G(u,{code:B.invalid_type,expected:F.symbol,received:u.parsedType}),ge}return an(r.data)}}tm.create=l=>new tm({typeName:ve.ZodSymbol,...Te(l)});class nm extends Re{_parse(r){if(this._getType(r)!==F.undefined){const u=this._getOrReturnCtx(r);return G(u,{code:B.invalid_type,expected:F.undefined,received:u.parsedType}),ge}return an(r.data)}}nm.create=l=>new nm({typeName:ve.ZodUndefined,...Te(l)});class am extends Re{_parse(r){if(this._getType(r)!==F.null){const u=this._getOrReturnCtx(r);return G(u,{code:B.invalid_type,expected:F.null,received:u.parsedType}),ge}return an(r.data)}}am.create=l=>new am({typeName:ve.ZodNull,...Te(l)});class lm extends Re{constructor(){super(...arguments),this._any=!0}_parse(r){return an(r.data)}}lm.create=l=>new lm({typeName:ve.ZodAny,...Te(l)});class rm extends Re{constructor(){super(...arguments),this._unknown=!0}_parse(r){return an(r.data)}}rm.create=l=>new rm({typeName:ve.ZodUnknown,...Te(l)});class _a extends Re{_parse(r){const o=this._getOrReturnCtx(r);return G(o,{code:B.invalid_type,expected:F.never,received:o.parsedType}),ge}}_a.create=l=>new _a({typeName:ve.ZodNever,...Te(l)});class im extends Re{_parse(r){if(this._getType(r)!==F.undefined){const u=this._getOrReturnCtx(r);return G(u,{code:B.invalid_type,expected:F.void,received:u.parsedType}),ge}return an(r.data)}}im.create=l=>new im({typeName:ve.ZodVoid,...Te(l)});class xn extends Re{_parse(r){const{ctx:o,status:u}=this._processInputParams(r),f=this._def;if(o.parsedType!==F.array)return G(o,{code:B.invalid_type,expected:F.array,received:o.parsedType}),ge;if(f.exactLength!==null){const h=o.data.length>f.exactLength.value,p=o.data.length<f.exactLength.value;(h||p)&&(G(o,{code:h?B.too_big:B.too_small,minimum:p?f.exactLength.value:void 0,maximum:h?f.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:f.exactLength.message}),u.dirty())}if(f.minLength!==null&&o.data.length<f.minLength.value&&(G(o,{code:B.too_small,minimum:f.minLength.value,type:"array",inclusive:!0,exact:!1,message:f.minLength.message}),u.dirty()),f.maxLength!==null&&o.data.length>f.maxLength.value&&(G(o,{code:B.too_big,maximum:f.maxLength.value,type:"array",inclusive:!0,exact:!1,message:f.maxLength.message}),u.dirty()),o.common.async)return Promise.all([...o.data].map((h,p)=>f.type._parseAsync(new xa(o,h,o.path,p)))).then(h=>Gt.mergeArray(u,h));const c=[...o.data].map((h,p)=>f.type._parseSync(new xa(o,h,o.path,p)));return Gt.mergeArray(u,c)}get element(){return this._def.type}min(r,o){return new xn({...this._def,minLength:{value:r,message:I.toString(o)}})}max(r,o){return new xn({...this._def,maxLength:{value:r,message:I.toString(o)}})}length(r,o){return new xn({...this._def,exactLength:{value:r,message:I.toString(o)}})}nonempty(r){return this.min(1,r)}}xn.create=(l,r)=>new xn({type:l,minLength:null,maxLength:null,exactLength:null,typeName:ve.ZodArray,...Te(r)});function Ll(l){if(l instanceof st){const r={};for(const o in l.shape){const u=l.shape[o];r[o]=ya.create(Ll(u))}return new st({...l._def,shape:()=>r})}else return l instanceof xn?new xn({...l._def,type:Ll(l.element)}):l instanceof ya?ya.create(Ll(l.unwrap())):l instanceof Jl?Jl.create(Ll(l.unwrap())):l instanceof Qa?Qa.create(l.items.map(r=>Ll(r))):l}class st extends Re{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const r=this._def.shape(),o=qe.objectKeys(r);return this._cached={shape:r,keys:o},this._cached}_parse(r){if(this._getType(r)!==F.object){const g=this._getOrReturnCtx(r);return G(g,{code:B.invalid_type,expected:F.object,received:g.parsedType}),ge}const{status:u,ctx:f}=this._processInputParams(r),{shape:c,keys:h}=this._getCached(),p=[];if(!(this._def.catchall instanceof _a&&this._def.unknownKeys==="strip"))for(const g in f.data)h.includes(g)||p.push(g);const v=[];for(const g of h){const O=c[g],C=f.data[g];v.push({key:{status:"valid",value:g},value:O._parse(new xa(f,C,f.path,g)),alwaysSet:g in f.data})}if(this._def.catchall instanceof _a){const g=this._def.unknownKeys;if(g==="passthrough")for(const O of p)v.push({key:{status:"valid",value:O},value:{status:"valid",value:f.data[O]}});else if(g==="strict")p.length>0&&(G(f,{code:B.unrecognized_keys,keys:p}),u.dirty());else if(g!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const g=this._def.catchall;for(const O of p){const C=f.data[O];v.push({key:{status:"valid",value:O},value:g._parse(new xa(f,C,f.path,O)),alwaysSet:O in f.data})}}return f.common.async?Promise.resolve().then(async()=>{const g=[];for(const O of v){const C=await O.key,w=await O.value;g.push({key:C,value:w,alwaysSet:O.alwaysSet})}return g}).then(g=>Gt.mergeObjectSync(u,g)):Gt.mergeObjectSync(u,v)}get shape(){return this._def.shape()}strict(r){return I.errToObj,new st({...this._def,unknownKeys:"strict",...r!==void 0?{errorMap:(o,u)=>{var c,h;const f=((h=(c=this._def).errorMap)==null?void 0:h.call(c,o,u).message)??u.defaultError;return o.code==="unrecognized_keys"?{message:I.errToObj(r).message??f}:{message:f}}}:{}})}strip(){return new st({...this._def,unknownKeys:"strip"})}passthrough(){return new st({...this._def,unknownKeys:"passthrough"})}extend(r){return new st({...this._def,shape:()=>({...this._def.shape(),...r})})}merge(r){return new st({unknownKeys:r._def.unknownKeys,catchall:r._def.catchall,shape:()=>({...this._def.shape(),...r._def.shape()}),typeName:ve.ZodObject})}setKey(r,o){return this.augment({[r]:o})}catchall(r){return new st({...this._def,catchall:r})}pick(r){const o={};for(const u of qe.objectKeys(r))r[u]&&this.shape[u]&&(o[u]=this.shape[u]);return new st({...this._def,shape:()=>o})}omit(r){const o={};for(const u of qe.objectKeys(this.shape))r[u]||(o[u]=this.shape[u]);return new st({...this._def,shape:()=>o})}deepPartial(){return Ll(this)}partial(r){const o={};for(const u of qe.objectKeys(this.shape)){const f=this.shape[u];r&&!r[u]?o[u]=f:o[u]=f.optional()}return new st({...this._def,shape:()=>o})}required(r){const o={};for(const u of qe.objectKeys(this.shape))if(r&&!r[u])o[u]=this.shape[u];else{let c=this.shape[u];for(;c instanceof ya;)c=c._def.innerType;o[u]=c}return new st({...this._def,shape:()=>o})}keyof(){return Vm(qe.objectKeys(this.shape))}}st.create=(l,r)=>new st({shape:()=>l,unknownKeys:"strip",catchall:_a.create(),typeName:ve.ZodObject,...Te(r)});st.strictCreate=(l,r)=>new st({shape:()=>l,unknownKeys:"strict",catchall:_a.create(),typeName:ve.ZodObject,...Te(r)});st.lazycreate=(l,r)=>new st({shape:l,unknownKeys:"strip",catchall:_a.create(),typeName:ve.ZodObject,...Te(r)});class Mo extends Re{_parse(r){const{ctx:o}=this._processInputParams(r),u=this._def.options;function f(c){for(const p of c)if(p.result.status==="valid")return p.result;for(const p of c)if(p.result.status==="dirty")return o.common.issues.push(...p.ctx.common.issues),p.result;const h=c.map(p=>new Bn(p.ctx.common.issues));return G(o,{code:B.invalid_union,unionErrors:h}),ge}if(o.common.async)return Promise.all(u.map(async c=>{const h={...o,common:{...o.common,issues:[]},parent:null};return{result:await c._parseAsync({data:o.data,path:o.path,parent:h}),ctx:h}})).then(f);{let c;const h=[];for(const v of u){const g={...o,common:{...o.common,issues:[]},parent:null},O=v._parseSync({data:o.data,path:o.path,parent:g});if(O.status==="valid")return O;O.status==="dirty"&&!c&&(c={result:O,ctx:g}),g.common.issues.length&&h.push(g.common.issues)}if(c)return o.common.issues.push(...c.ctx.common.issues),c.result;const p=h.map(v=>new Bn(v));return G(o,{code:B.invalid_union,unionErrors:p}),ge}}get options(){return this._def.options}}Mo.create=(l,r)=>new Mo({options:l,typeName:ve.ZodUnion,...Te(r)});function pc(l,r){const o=pa(l),u=pa(r);if(l===r)return{valid:!0,data:l};if(o===F.object&&u===F.object){const f=qe.objectKeys(r),c=qe.objectKeys(l).filter(p=>f.indexOf(p)!==-1),h={...l,...r};for(const p of c){const v=pc(l[p],r[p]);if(!v.valid)return{valid:!1};h[p]=v.data}return{valid:!0,data:h}}else if(o===F.array&&u===F.array){if(l.length!==r.length)return{valid:!1};const f=[];for(let c=0;c<l.length;c++){const h=l[c],p=r[c],v=pc(h,p);if(!v.valid)return{valid:!1};f.push(v.data)}return{valid:!0,data:f}}else return o===F.date&&u===F.date&&+l==+r?{valid:!0,data:l}:{valid:!1}}class Co extends Re{_parse(r){const{status:o,ctx:u}=this._processInputParams(r),f=(c,h)=>{if(F0(c)||F0(h))return ge;const p=pc(c.value,h.value);return p.valid?((W0(c)||W0(h))&&o.dirty(),{status:o.value,value:p.data}):(G(u,{code:B.invalid_intersection_types}),ge)};return u.common.async?Promise.all([this._def.left._parseAsync({data:u.data,path:u.path,parent:u}),this._def.right._parseAsync({data:u.data,path:u.path,parent:u})]).then(([c,h])=>f(c,h)):f(this._def.left._parseSync({data:u.data,path:u.path,parent:u}),this._def.right._parseSync({data:u.data,path:u.path,parent:u}))}}Co.create=(l,r,o)=>new Co({left:l,right:r,typeName:ve.ZodIntersection,...Te(o)});class Qa extends Re{_parse(r){const{status:o,ctx:u}=this._processInputParams(r);if(u.parsedType!==F.array)return G(u,{code:B.invalid_type,expected:F.array,received:u.parsedType}),ge;if(u.data.length<this._def.items.length)return G(u,{code:B.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ge;!this._def.rest&&u.data.length>this._def.items.length&&(G(u,{code:B.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),o.dirty());const c=[...u.data].map((h,p)=>{const v=this._def.items[p]||this._def.rest;return v?v._parse(new xa(u,h,u.path,p)):null}).filter(h=>!!h);return u.common.async?Promise.all(c).then(h=>Gt.mergeArray(o,h)):Gt.mergeArray(o,c)}get items(){return this._def.items}rest(r){return new Qa({...this._def,rest:r})}}Qa.create=(l,r)=>{if(!Array.isArray(l))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Qa({items:l,typeName:ve.ZodTuple,rest:null,...Te(r)})};class om extends Re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(r){const{status:o,ctx:u}=this._processInputParams(r);if(u.parsedType!==F.map)return G(u,{code:B.invalid_type,expected:F.map,received:u.parsedType}),ge;const f=this._def.keyType,c=this._def.valueType,h=[...u.data.entries()].map(([p,v],g)=>({key:f._parse(new xa(u,p,u.path,[g,"key"])),value:c._parse(new xa(u,v,u.path,[g,"value"]))}));if(u.common.async){const p=new Map;return Promise.resolve().then(async()=>{for(const v of h){const g=await v.key,O=await v.value;if(g.status==="aborted"||O.status==="aborted")return ge;(g.status==="dirty"||O.status==="dirty")&&o.dirty(),p.set(g.value,O.value)}return{status:o.value,value:p}})}else{const p=new Map;for(const v of h){const g=v.key,O=v.value;if(g.status==="aborted"||O.status==="aborted")return ge;(g.status==="dirty"||O.status==="dirty")&&o.dirty(),p.set(g.value,O.value)}return{status:o.value,value:p}}}}om.create=(l,r,o)=>new om({valueType:r,keyType:l,typeName:ve.ZodMap,...Te(o)});class ni extends Re{_parse(r){const{status:o,ctx:u}=this._processInputParams(r);if(u.parsedType!==F.set)return G(u,{code:B.invalid_type,expected:F.set,received:u.parsedType}),ge;const f=this._def;f.minSize!==null&&u.data.size<f.minSize.value&&(G(u,{code:B.too_small,minimum:f.minSize.value,type:"set",inclusive:!0,exact:!1,message:f.minSize.message}),o.dirty()),f.maxSize!==null&&u.data.size>f.maxSize.value&&(G(u,{code:B.too_big,maximum:f.maxSize.value,type:"set",inclusive:!0,exact:!1,message:f.maxSize.message}),o.dirty());const c=this._def.valueType;function h(v){const g=new Set;for(const O of v){if(O.status==="aborted")return ge;O.status==="dirty"&&o.dirty(),g.add(O.value)}return{status:o.value,value:g}}const p=[...u.data.values()].map((v,g)=>c._parse(new xa(u,v,u.path,g)));return u.common.async?Promise.all(p).then(v=>h(v)):h(p)}min(r,o){return new ni({...this._def,minSize:{value:r,message:I.toString(o)}})}max(r,o){return new ni({...this._def,maxSize:{value:r,message:I.toString(o)}})}size(r,o){return this.min(r,o).max(r,o)}nonempty(r){return this.min(1,r)}}ni.create=(l,r)=>new ni({valueType:l,minSize:null,maxSize:null,typeName:ve.ZodSet,...Te(r)});class um extends Re{get schema(){return this._def.getter()}_parse(r){const{ctx:o}=this._processInputParams(r);return this._def.getter()._parse({data:o.data,path:o.path,parent:o})}}um.create=(l,r)=>new um({getter:l,typeName:ve.ZodLazy,...Te(r)});class sm extends Re{_parse(r){if(r.data!==this._def.value){const o=this._getOrReturnCtx(r);return G(o,{received:o.data,code:B.invalid_literal,expected:this._def.value}),ge}return{status:"valid",value:r.data}}get value(){return this._def.value}}sm.create=(l,r)=>new sm({value:l,typeName:ve.ZodLiteral,...Te(r)});function Vm(l,r){return new Ql({values:l,typeName:ve.ZodEnum,...Te(r)})}class Ql extends Re{_parse(r){if(typeof r.data!="string"){const o=this._getOrReturnCtx(r),u=this._def.values;return G(o,{expected:qe.joinValues(u),received:o.parsedType,code:B.invalid_type}),ge}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(r.data)){const o=this._getOrReturnCtx(r),u=this._def.values;return G(o,{received:o.data,code:B.invalid_enum_value,options:u}),ge}return an(r.data)}get options(){return this._def.values}get enum(){const r={};for(const o of this._def.values)r[o]=o;return r}get Values(){const r={};for(const o of this._def.values)r[o]=o;return r}get Enum(){const r={};for(const o of this._def.values)r[o]=o;return r}extract(r,o=this._def){return Ql.create(r,{...this._def,...o})}exclude(r,o=this._def){return Ql.create(this.options.filter(u=>!r.includes(u)),{...this._def,...o})}}Ql.create=Vm;class cm extends Re{_parse(r){const o=qe.getValidEnumValues(this._def.values),u=this._getOrReturnCtx(r);if(u.parsedType!==F.string&&u.parsedType!==F.number){const f=qe.objectValues(o);return G(u,{expected:qe.joinValues(f),received:u.parsedType,code:B.invalid_type}),ge}if(this._cache||(this._cache=new Set(qe.getValidEnumValues(this._def.values))),!this._cache.has(r.data)){const f=qe.objectValues(o);return G(u,{received:u.data,code:B.invalid_enum_value,options:f}),ge}return an(r.data)}get enum(){return this._def.values}}cm.create=(l,r)=>new cm({values:l,typeName:ve.ZodNativeEnum,...Te(r)});class Ro extends Re{unwrap(){return this._def.type}_parse(r){const{ctx:o}=this._processInputParams(r);if(o.parsedType!==F.promise&&o.common.async===!1)return G(o,{code:B.invalid_type,expected:F.promise,received:o.parsedType}),ge;const u=o.parsedType===F.promise?o.data:Promise.resolve(o.data);return an(u.then(f=>this._def.type.parseAsync(f,{path:o.path,errorMap:o.common.contextualErrorMap})))}}Ro.create=(l,r)=>new Ro({type:l,typeName:ve.ZodPromise,...Te(r)});class Kl extends Re{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ve.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(r){const{status:o,ctx:u}=this._processInputParams(r),f=this._def.effect||null,c={addIssue:h=>{G(u,h),h.fatal?o.abort():o.dirty()},get path(){return u.path}};if(c.addIssue=c.addIssue.bind(c),f.type==="preprocess"){const h=f.transform(u.data,c);if(u.common.async)return Promise.resolve(h).then(async p=>{if(o.value==="aborted")return ge;const v=await this._def.schema._parseAsync({data:p,path:u.path,parent:u});return v.status==="aborted"?ge:v.status==="dirty"||o.value==="dirty"?Pr(v.value):v});{if(o.value==="aborted")return ge;const p=this._def.schema._parseSync({data:h,path:u.path,parent:u});return p.status==="aborted"?ge:p.status==="dirty"||o.value==="dirty"?Pr(p.value):p}}if(f.type==="refinement"){const h=p=>{const v=f.refinement(p,c);if(u.common.async)return Promise.resolve(v);if(v instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return p};if(u.common.async===!1){const p=this._def.schema._parseSync({data:u.data,path:u.path,parent:u});return p.status==="aborted"?ge:(p.status==="dirty"&&o.dirty(),h(p.value),{status:o.value,value:p.value})}else return this._def.schema._parseAsync({data:u.data,path:u.path,parent:u}).then(p=>p.status==="aborted"?ge:(p.status==="dirty"&&o.dirty(),h(p.value).then(()=>({status:o.value,value:p.value}))))}if(f.type==="transform")if(u.common.async===!1){const h=this._def.schema._parseSync({data:u.data,path:u.path,parent:u});if(!Xl(h))return ge;const p=f.transform(h.value,c);if(p instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:o.value,value:p}}else return this._def.schema._parseAsync({data:u.data,path:u.path,parent:u}).then(h=>Xl(h)?Promise.resolve(f.transform(h.value,c)).then(p=>({status:o.value,value:p})):ge);qe.assertNever(f)}}Kl.create=(l,r,o)=>new Kl({schema:l,typeName:ve.ZodEffects,effect:r,...Te(o)});Kl.createWithPreprocess=(l,r,o)=>new Kl({schema:r,effect:{type:"preprocess",transform:l},typeName:ve.ZodEffects,...Te(o)});class ya extends Re{_parse(r){return this._getType(r)===F.undefined?an(void 0):this._def.innerType._parse(r)}unwrap(){return this._def.innerType}}ya.create=(l,r)=>new ya({innerType:l,typeName:ve.ZodOptional,...Te(r)});class Jl extends Re{_parse(r){return this._getType(r)===F.null?an(null):this._def.innerType._parse(r)}unwrap(){return this._def.innerType}}Jl.create=(l,r)=>new Jl({innerType:l,typeName:ve.ZodNullable,...Te(r)});class gc extends Re{_parse(r){const{ctx:o}=this._processInputParams(r);let u=o.data;return o.parsedType===F.undefined&&(u=this._def.defaultValue()),this._def.innerType._parse({data:u,path:o.path,parent:o})}removeDefault(){return this._def.innerType}}gc.create=(l,r)=>new gc({innerType:l,typeName:ve.ZodDefault,defaultValue:typeof r.default=="function"?r.default:()=>r.default,...Te(r)});class vc extends Re{_parse(r){const{ctx:o}=this._processInputParams(r),u={...o,common:{...o.common,issues:[]}},f=this._def.innerType._parse({data:u.data,path:u.path,parent:{...u}});return wo(f)?f.then(c=>({status:"valid",value:c.status==="valid"?c.value:this._def.catchValue({get error(){return new Bn(u.common.issues)},input:u.data})})):{status:"valid",value:f.status==="valid"?f.value:this._def.catchValue({get error(){return new Bn(u.common.issues)},input:u.data})}}removeCatch(){return this._def.innerType}}vc.create=(l,r)=>new vc({innerType:l,typeName:ve.ZodCatch,catchValue:typeof r.catch=="function"?r.catch:()=>r.catch,...Te(r)});class fm extends Re{_parse(r){if(this._getType(r)!==F.nan){const u=this._getOrReturnCtx(r);return G(u,{code:B.invalid_type,expected:F.nan,received:u.parsedType}),ge}return{status:"valid",value:r.data}}}fm.create=l=>new fm({typeName:ve.ZodNaN,...Te(l)});class Ub extends Re{_parse(r){const{ctx:o}=this._processInputParams(r),u=o.data;return this._def.type._parse({data:u,path:o.path,parent:o})}unwrap(){return this._def.type}}class zc extends Re{_parse(r){const{status:o,ctx:u}=this._processInputParams(r);if(u.common.async)return(async()=>{const c=await this._def.in._parseAsync({data:u.data,path:u.path,parent:u});return c.status==="aborted"?ge:c.status==="dirty"?(o.dirty(),Pr(c.value)):this._def.out._parseAsync({data:c.value,path:u.path,parent:u})})();{const f=this._def.in._parseSync({data:u.data,path:u.path,parent:u});return f.status==="aborted"?ge:f.status==="dirty"?(o.dirty(),{status:"dirty",value:f.value}):this._def.out._parseSync({data:f.value,path:u.path,parent:u})}}static create(r,o){return new zc({in:r,out:o,typeName:ve.ZodPipeline})}}class bc extends Re{_parse(r){const o=this._def.innerType._parse(r),u=f=>(Xl(f)&&(f.value=Object.freeze(f.value)),f);return wo(o)?o.then(f=>u(f)):u(o)}unwrap(){return this._def.innerType}}bc.create=(l,r)=>new bc({innerType:l,typeName:ve.ZodReadonly,...Te(r)});var ve;(function(l){l.ZodString="ZodString",l.ZodNumber="ZodNumber",l.ZodNaN="ZodNaN",l.ZodBigInt="ZodBigInt",l.ZodBoolean="ZodBoolean",l.ZodDate="ZodDate",l.ZodSymbol="ZodSymbol",l.ZodUndefined="ZodUndefined",l.ZodNull="ZodNull",l.ZodAny="ZodAny",l.ZodUnknown="ZodUnknown",l.ZodNever="ZodNever",l.ZodVoid="ZodVoid",l.ZodArray="ZodArray",l.ZodObject="ZodObject",l.ZodUnion="ZodUnion",l.ZodDiscriminatedUnion="ZodDiscriminatedUnion",l.ZodIntersection="ZodIntersection",l.ZodTuple="ZodTuple",l.ZodRecord="ZodRecord",l.ZodMap="ZodMap",l.ZodSet="ZodSet",l.ZodFunction="ZodFunction",l.ZodLazy="ZodLazy",l.ZodLiteral="ZodLiteral",l.ZodEnum="ZodEnum",l.ZodEffects="ZodEffects",l.ZodNativeEnum="ZodNativeEnum",l.ZodOptional="ZodOptional",l.ZodNullable="ZodNullable",l.ZodDefault="ZodDefault",l.ZodCatch="ZodCatch",l.ZodPromise="ZodPromise",l.ZodBranded="ZodBranded",l.ZodPipeline="ZodPipeline",l.ZodReadonly="ZodReadonly"})(ve||(ve={}));const dm=ba.create,qb=Gl.create;_a.create;const Hb=xn.create,Vb=st.create;Mo.create;Co.create;Qa.create;Ql.create;Ro.create;ya.create;Jl.create;const Bb=Vb({name:dm().min(10,"Task name needs to be at least 10 characters").max(200,"Max 200 characters").refine(l=>l.trim().length>0,{message:"Task name cannot be empty or just spaces"}),dueDate:dm().min(1,"Due date is required").refine(l=>{const r=new Date;r.setHours(0,0,0,0);const o=new Date(l);return o.setHours(0,0,0,0),o>=r},{message:"Due date cannot be in the past"}),categoryIds:Hb(qb()).default([])}),Zb=({onSuccess:l,onClose:r,initialData:o})=>{var te;const[u,f]=me.useState([]),[c,h]=me.useState(!0),{register:p,handleSubmit:v,formState:{errors:g},watch:O,setValue:C,reset:w}=Fv({resolver:sb(Bb),defaultValues:{name:(o==null?void 0:o.name)||"",dueDate:(o==null?void 0:o.dueDate)||"",categoryIds:((te=o==null?void 0:o.todoCategories)==null?void 0:te.map(Ce=>Ce.category.id))||[]}});me.useEffect(()=>{(async()=>{try{const ne=await bv();f(ne)}catch(ne){console.error("Failed to fetch categories:",ne)}finally{h(!1)}})()},[]),me.useEffect(()=>{o&&w({name:o.name,dueDate:o.dueDate,categoryIds:o.todoCategories.map(Ce=>Ce.category.id)??[]})},[o,w]);const ie=async Ce=>{try{console.log("validated form data",Ce),o?await _m(o.id,Ce):await xm(Ce),l()}catch(ne){console.error("Failed to save todo:",ne)}},K=O("categoryIds")||[],H=Ce=>{const ne=K.includes(Ce)?K.filter(ye=>ye!==Ce):[...K,Ce];C("categoryIds",ne,{shouldValidate:!0})};return q.jsxs("form",{onSubmit:v(ie),className:"space-y-4",children:[q.jsxs("div",{children:[q.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Task Name"}),q.jsx("input",{type:"text",...p("name"),className:"w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 text-gray-900",placeholder:"Enter task name"}),g.name&&q.jsx("p",{className:"text-red-600 text-sm mt-1",children:g.name.message})]}),q.jsxs("div",{children:[q.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Due Date"}),q.jsx("input",{type:"date",...p("dueDate"),className:"w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 text-gray-900"}),g.dueDate&&q.jsx("p",{className:"text-red-600 text-sm mt-1",children:g.dueDate.message})]}),q.jsx(cb,{categories:u,selectedCategoryIds:K,onCategoriesUpdate:f,onCategoryToggle:H,isLoading:c}),q.jsxs("div",{className:"flex gap-2 pt-4",children:[q.jsx("button",{type:"submit",className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",children:o?"Update Task":"Create Task"}),q.jsx("button",{type:"button",onClick:r,className:"px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors",children:"Cancel"})]})]})};function Yb(l){return Yn({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"},child:[]}]})(l)}function mt(l,r){r===void 0&&(r={});var o=r.insertAt;if(l&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",o==="top"&&u.firstChild?u.insertBefore(f,u.firstChild):u.appendChild(f),f.styleSheet?f.styleSheet.cssText=l:f.appendChild(document.createTextNode(l))}}mt(`.react-loading-indicator-normalize,
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
}`);var Ze=function(){return Ze=Object.assign||function(l){for(var r,o=1,u=arguments.length;o<u;o++)for(var f in r=arguments[o])Object.prototype.hasOwnProperty.call(r,f)&&(l[f]=r[f]);return l},Ze.apply(this,arguments)};function jo(l){return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},jo(l)}var Lb=/^\s+/,Xb=/\s+$/;function re(l,r){if(r=r||{},(l=l||"")instanceof re)return l;if(!(this instanceof re))return new re(l,r);var o=function(u){var f={r:0,g:0,b:0},c=1,h=null,p=null,v=null,g=!1,O=!1;typeof u=="string"&&(u=function(K){K=K.replace(Lb,"").replace(Xb,"").toLowerCase();var H,te=!1;if(yc[K])K=yc[K],te=!0;else if(K=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(H=un.rgb.exec(K))?{r:H[1],g:H[2],b:H[3]}:(H=un.rgba.exec(K))?{r:H[1],g:H[2],b:H[3],a:H[4]}:(H=un.hsl.exec(K))?{h:H[1],s:H[2],l:H[3]}:(H=un.hsla.exec(K))?{h:H[1],s:H[2],l:H[3],a:H[4]}:(H=un.hsv.exec(K))?{h:H[1],s:H[2],v:H[3]}:(H=un.hsva.exec(K))?{h:H[1],s:H[2],v:H[3],a:H[4]}:(H=un.hex8.exec(K))?{r:Xt(H[1]),g:Xt(H[2]),b:Xt(H[3]),a:bm(H[4]),format:te?"name":"hex8"}:(H=un.hex6.exec(K))?{r:Xt(H[1]),g:Xt(H[2]),b:Xt(H[3]),format:te?"name":"hex"}:(H=un.hex4.exec(K))?{r:Xt(H[1]+""+H[1]),g:Xt(H[2]+""+H[2]),b:Xt(H[3]+""+H[3]),a:bm(H[4]+""+H[4]),format:te?"name":"hex8"}:(H=un.hex3.exec(K))?{r:Xt(H[1]+""+H[1]),g:Xt(H[2]+""+H[2]),b:Xt(H[3]+""+H[3]),format:te?"name":"hex"}:!1}(u)),jo(u)=="object"&&(Hn(u.r)&&Hn(u.g)&&Hn(u.b)?(C=u.r,w=u.g,ie=u.b,f={r:255*Ie(C,255),g:255*Ie(w,255),b:255*Ie(ie,255)},g=!0,O=String(u.r).substr(-1)==="%"?"prgb":"rgb"):Hn(u.h)&&Hn(u.s)&&Hn(u.v)?(h=Fr(u.s),p=Fr(u.v),f=function(K,H,te){K=6*Ie(K,360),H=Ie(H,100),te=Ie(te,100);var Ce=Math.floor(K),ne=K-Ce,ye=te*(1-H),je=te*(1-ne*H),J=te*(1-(1-ne)*H),Ye=Ce%6,we=[te,je,ye,ye,J,te][Ye],Fe=[J,te,te,je,ye,ye][Ye],ke=[ye,ye,J,te,te,je][Ye];return{r:255*we,g:255*Fe,b:255*ke}}(u.h,h,p),g=!0,O="hsv"):Hn(u.h)&&Hn(u.s)&&Hn(u.l)&&(h=Fr(u.s),v=Fr(u.l),f=function(K,H,te){var Ce,ne,ye;function je(we,Fe,ke){return ke<0&&(ke+=1),ke>1&&(ke-=1),ke<1/6?we+6*(Fe-we)*ke:ke<.5?Fe:ke<2/3?we+(Fe-we)*(2/3-ke)*6:we}if(K=Ie(K,360),H=Ie(H,100),te=Ie(te,100),H===0)Ce=ne=ye=te;else{var J=te<.5?te*(1+H):te+H-te*H,Ye=2*te-J;Ce=je(Ye,J,K+1/3),ne=je(Ye,J,K),ye=je(Ye,J,K-1/3)}return{r:255*Ce,g:255*ne,b:255*ye}}(u.h,h,v),g=!0,O="hsl"),u.hasOwnProperty("a")&&(c=u.a));var C,w,ie;return c=Bm(c),{ok:g,format:u.format||O,r:Math.min(255,Math.max(f.r,0)),g:Math.min(255,Math.max(f.g,0)),b:Math.min(255,Math.max(f.b,0)),a:c}}(l);this._originalInput=l,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||o.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function hm(l,r,o){l=Ie(l,255),r=Ie(r,255),o=Ie(o,255);var u,f,c=Math.max(l,r,o),h=Math.min(l,r,o),p=(c+h)/2;if(c==h)u=f=0;else{var v=c-h;switch(f=p>.5?v/(2-c-h):v/(c+h),c){case l:u=(r-o)/v+(r<o?6:0);break;case r:u=(o-l)/v+2;break;case o:u=(l-r)/v+4}u/=6}return{h:u,s:f,l:p}}function mm(l,r,o){l=Ie(l,255),r=Ie(r,255),o=Ie(o,255);var u,f,c=Math.max(l,r,o),h=Math.min(l,r,o),p=c,v=c-h;if(f=c===0?0:v/c,c==h)u=0;else{switch(c){case l:u=(r-o)/v+(r<o?6:0);break;case r:u=(o-l)/v+2;break;case o:u=(l-r)/v+4}u/=6}return{h:u,s:f,v:p}}function pm(l,r,o,u){var f=[fn(Math.round(l).toString(16)),fn(Math.round(r).toString(16)),fn(Math.round(o).toString(16))];return u&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0):f.join("")}function gm(l,r,o,u){return[fn(Zm(u)),fn(Math.round(l).toString(16)),fn(Math.round(r).toString(16)),fn(Math.round(o).toString(16))].join("")}function Gb(l,r){r=r===0?0:r||10;var o=re(l).toHsl();return o.s-=r/100,o.s=Ho(o.s),re(o)}function Qb(l,r){r=r===0?0:r||10;var o=re(l).toHsl();return o.s+=r/100,o.s=Ho(o.s),re(o)}function Kb(l){return re(l).desaturate(100)}function Jb(l,r){r=r===0?0:r||10;var o=re(l).toHsl();return o.l+=r/100,o.l=Ho(o.l),re(o)}function $b(l,r){r=r===0?0:r||10;var o=re(l).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-r/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-r/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-r/100*255))),re(o)}function Pb(l,r){r=r===0?0:r||10;var o=re(l).toHsl();return o.l-=r/100,o.l=Ho(o.l),re(o)}function Fb(l,r){var o=re(l).toHsl(),u=(o.h+r)%360;return o.h=u<0?360+u:u,re(o)}function Wb(l){var r=re(l).toHsl();return r.h=(r.h+180)%360,re(r)}function vm(l,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var o=re(l).toHsl(),u=[re(l)],f=360/r,c=1;c<r;c++)u.push(re({h:(o.h+c*f)%360,s:o.s,l:o.l}));return u}function Ib(l){var r=re(l).toHsl(),o=r.h;return[re(l),re({h:(o+72)%360,s:r.s,l:r.l}),re({h:(o+216)%360,s:r.s,l:r.l})]}function ey(l,r,o){r=r||6,o=o||30;var u=re(l).toHsl(),f=360/o,c=[re(l)];for(u.h=(u.h-(f*r>>1)+720)%360;--r;)u.h=(u.h+f)%360,c.push(re(u));return c}function ty(l,r){r=r||6;for(var o=re(l).toHsv(),u=o.h,f=o.s,c=o.v,h=[],p=1/r;r--;)h.push(re({h:u,s:f,v:c})),c=(c+p)%1;return h}re.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var l=this.toRgb();return(299*l.r+587*l.g+114*l.b)/1e3},getLuminance:function(){var l,r,o,u=this.toRgb();return l=u.r/255,r=u.g/255,o=u.b/255,.2126*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(l){return this._a=Bm(l),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var l=mm(this._r,this._g,this._b);return{h:360*l.h,s:l.s,v:l.v,a:this._a}},toHsvString:function(){var l=mm(this._r,this._g,this._b),r=Math.round(360*l.h),o=Math.round(100*l.s),u=Math.round(100*l.v);return this._a==1?"hsv("+r+", "+o+"%, "+u+"%)":"hsva("+r+", "+o+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var l=hm(this._r,this._g,this._b);return{h:360*l.h,s:l.s,l:l.l,a:this._a}},toHslString:function(){var l=hm(this._r,this._g,this._b),r=Math.round(360*l.h),o=Math.round(100*l.s),u=Math.round(100*l.l);return this._a==1?"hsl("+r+", "+o+"%, "+u+"%)":"hsla("+r+", "+o+"%, "+u+"%, "+this._roundA+")"},toHex:function(l){return pm(this._r,this._g,this._b,l)},toHexString:function(l){return"#"+this.toHex(l)},toHex8:function(l){return function(r,o,u,f,c){var h=[fn(Math.round(r).toString(16)),fn(Math.round(o).toString(16)),fn(Math.round(u).toString(16)),fn(Zm(f))];return c&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}(this._r,this._g,this._b,this._a,l)},toHex8String:function(l){return"#"+this.toHex8(l)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ie(this._r,255))+"%",g:Math.round(100*Ie(this._g,255))+"%",b:Math.round(100*Ie(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ie(this._r,255))+"%, "+Math.round(100*Ie(this._g,255))+"%, "+Math.round(100*Ie(this._b,255))+"%)":"rgba("+Math.round(100*Ie(this._r,255))+"%, "+Math.round(100*Ie(this._g,255))+"%, "+Math.round(100*Ie(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(ny[pm(this._r,this._g,this._b,!0)]||!1)},toFilter:function(l){var r="#"+gm(this._r,this._g,this._b,this._a),o=r,u=this._gradientType?"GradientType = 1, ":"";if(l){var f=re(l);o="#"+gm(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+r+",endColorstr="+o+")"},toString:function(l){var r=!!l;l=l||this._format;var o=!1,u=this._a<1&&this._a>=0;return r||!u||l!=="hex"&&l!=="hex6"&&l!=="hex3"&&l!=="hex4"&&l!=="hex8"&&l!=="name"?(l==="rgb"&&(o=this.toRgbString()),l==="prgb"&&(o=this.toPercentageRgbString()),l!=="hex"&&l!=="hex6"||(o=this.toHexString()),l==="hex3"&&(o=this.toHexString(!0)),l==="hex4"&&(o=this.toHex8String(!0)),l==="hex8"&&(o=this.toHex8String()),l==="name"&&(o=this.toName()),l==="hsl"&&(o=this.toHslString()),l==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):l==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return re(this.toString())},_applyModification:function(l,r){var o=l.apply(null,[this].concat([].slice.call(r)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(Jb,arguments)},brighten:function(){return this._applyModification($b,arguments)},darken:function(){return this._applyModification(Pb,arguments)},desaturate:function(){return this._applyModification(Gb,arguments)},saturate:function(){return this._applyModification(Qb,arguments)},greyscale:function(){return this._applyModification(Kb,arguments)},spin:function(){return this._applyModification(Fb,arguments)},_applyCombination:function(l,r){return l.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(ey,arguments)},complement:function(){return this._applyCombination(Wb,arguments)},monochromatic:function(){return this._applyCombination(ty,arguments)},splitcomplement:function(){return this._applyCombination(Ib,arguments)},triad:function(){return this._applyCombination(vm,[3])},tetrad:function(){return this._applyCombination(vm,[4])}},re.fromRatio=function(l,r){if(jo(l)=="object"){var o={};for(var u in l)l.hasOwnProperty(u)&&(o[u]=u==="a"?l[u]:Fr(l[u]));l=o}return re(l,r)},re.equals=function(l,r){return!(!l||!r)&&re(l).toRgbString()==re(r).toRgbString()},re.random=function(){return re.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},re.mix=function(l,r,o){o=o===0?0:o||50;var u=re(l).toRgb(),f=re(r).toRgb(),c=o/100;return re({r:(f.r-u.r)*c+u.r,g:(f.g-u.g)*c+u.g,b:(f.b-u.b)*c+u.b,a:(f.a-u.a)*c+u.a})},re.readability=function(l,r){var o=re(l),u=re(r);return(Math.max(o.getLuminance(),u.getLuminance())+.05)/(Math.min(o.getLuminance(),u.getLuminance())+.05)},re.isReadable=function(l,r,o){var u,f,c=re.readability(l,r);switch(f=!1,(u=function(h){var p,v;return p=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),v=(h.size||"small").toLowerCase(),p!=="AA"&&p!=="AAA"&&(p="AA"),v!=="small"&&v!=="large"&&(v="small"),{level:p,size:v}}(o)).level+u.size){case"AAsmall":case"AAAlarge":f=c>=4.5;break;case"AAlarge":f=c>=3;break;case"AAAsmall":f=c>=7}return f},re.mostReadable=function(l,r,o){var u,f,c,h,p=null,v=0;f=(o=o||{}).includeFallbackColors,c=o.level,h=o.size;for(var g=0;g<r.length;g++)(u=re.readability(l,r[g]))>v&&(v=u,p=re(r[g]));return re.isReadable(l,p,{level:c,size:h})||!f?p:(o.includeFallbackColors=!1,re.mostReadable(l,["#fff","#000"],o))};var yc=re.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ny=re.hexNames=function(l){var r={};for(var o in l)l.hasOwnProperty(o)&&(r[l[o]]=o);return r}(yc);function Bm(l){return l=parseFloat(l),(isNaN(l)||l<0||l>1)&&(l=1),l}function Ie(l,r){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(l)&&(l="100%");var o=function(u){return typeof u=="string"&&u.indexOf("%")!=-1}(l);return l=Math.min(r,Math.max(0,parseFloat(l))),o&&(l=parseInt(l*r,10)/100),Math.abs(l-r)<1e-6?1:l%r/parseFloat(r)}function Ho(l){return Math.min(1,Math.max(0,l))}function Xt(l){return parseInt(l,16)}function fn(l){return l.length==1?"0"+l:""+l}function Fr(l){return l<=1&&(l=100*l+"%"),l}function Zm(l){return Math.round(255*parseFloat(l)).toString(16)}function bm(l){return Xt(l)/255}var ma,xo,_o,un=(xo="[\\s|\\(]+("+(ma="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ma+")[,|\\s]+("+ma+")\\s*\\)?",_o="[\\s|\\(]+("+ma+")[,|\\s]+("+ma+")[,|\\s]+("+ma+")[,|\\s]+("+ma+")\\s*\\)?",{CSS_UNIT:new RegExp(ma),rgb:new RegExp("rgb"+xo),rgba:new RegExp("rgba"+_o),hsl:new RegExp("hsl"+xo),hsla:new RegExp("hsla"+_o),hsv:new RegExp("hsv"+xo),hsva:new RegExp("hsva"+_o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Hn(l){return!!un.CSS_UNIT.exec(l)}var Vo=function(l,r){var o=(typeof l=="string"?parseInt(l):l)||0;if(o>=-5&&o<=5){var u=o,f=parseFloat(r),c=f+u*(f/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:r}},Bo=function(l,r){var o=l||{},u="";switch(r){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var f={};if(o.fontSize){var c=o.fontSize;f=function(h,p){var v={};for(var g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.indexOf(g)<0&&(v[g]=h[g]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var O=0;for(g=Object.getOwnPropertySymbols(h);O<g.length;O++)p.indexOf(g[O])<0&&Object.prototype.propertyIsEnumerable.call(h,g[O])&&(v[g[O]]=h[g[O]])}return v}(o,["fontSize"]),u=c}return{fontSize:u,styles:f}},ay={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Zo=function(l){var r=l.className,o=l.text,u=l.textColor,f=l.staticText,c=l.style;return o?he.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:Ze(Ze(Ze({},f&&ay),u&&{color:u,mixBlendMode:"unset"}),c&&c)},typeof o=="string"&&o.length?o:"loading"):null},li="rgb(50, 205, 50)";function Yo(l,r){if(r===void 0&&(r=0),l.length===0)throw new Error("Input array cannot be empty!");var o=[];return function u(f,c){return c===void 0&&(c=0),o.push.apply(o,f),o.length<c&&u(o,c),o.slice(0,c)}(l,r)}mt(`.atom-rli-bounding-box {
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
}`);re(li).toRgb();Array.from({length:4},function(l,r){return"--atom-phase".concat(r+1,"-rgb")});mt(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--commet-phase".concat(r+1,"-color")});mt(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--OP-annulus-phase".concat(r+1,"-color")});function fc(l){return l&&l.Math===Math&&l}mt(`.OP-dotted-rli-bounding-box {
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
}`);fc(typeof window=="object"&&window)||fc(typeof self=="object"&&self)||fc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(l,r){return"--OP-dotted-phase".concat(r+1,"-color")});mt(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--OP-spokes-phase".concat(r+1,"-color")});mt(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")});mt(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]});mt(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--four-square-phase".concat(r+1,"-color")});mt(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--mosaic-phase".concat(r+1,"-color")});mt(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--riple-phase".concat(r+1,"-color")});mt(`.pulsate-rli-bounding-box {
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
}`);var Vl=Array.from({length:4},function(l,r){return"--TD-pulsate-phase".concat(r+1,"-color")}),ly=function(l){var r,o=Bo(l==null?void 0:l.style,l==null?void 0:l.size),u=o.styles,f=o.fontSize,c=l==null?void 0:l.easing,h=Vo(l==null?void 0:l.speedPlus,"1.2s").animationPeriod,p=function(v){var g={};if(v instanceof Array){for(var O=Yo(v,Vl.length),C=0;C<O.length&&!(C>=4);C++)g[Vl[C]]=O[C];return g}try{if(typeof v!="string")throw new Error("Color String expected");for(var w=0;w<Vl.length;w++)g[Vl[w]]=v}catch(ie){for(ie instanceof Error?console.warn("[".concat(ie.message,']: Received "').concat(typeof v,'" instead with value, ').concat(JSON.stringify(v))):console.warn("".concat(JSON.stringify(v),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),w=0;w<Vl.length;w++)g[Vl[w]]=li}return g}((r=l==null?void 0:l.color)!==null&&r!==void 0?r:"");return he.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Ze(Ze(Ze(Ze(Ze({},f&&{fontSize:f}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),p),u),role:"status","aria-live":"polite","aria-label":"Loading"},he.createElement("span",{className:"rli-d-i-b pulsate-indicator"},he.createElement("span",{className:"rli-d-i-b pulsate-dot"}),he.createElement("span",{className:"rli-d-i-b pulsate-dot"}),he.createElement("span",{className:"rli-d-i-b pulsate-dot"})),he.createElement(Zo,{staticText:!0,text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor}))};mt(`.brick-stack-rli-bounding-box {
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
}`);var Bl=Array.from({length:4},function(l,r){return"--TD-brick-stack-phase".concat(r+1,"-color")}),ry=function(l){var r,o=Bo(l==null?void 0:l.style,l==null?void 0:l.size),u=o.styles,f=o.fontSize,c=l==null?void 0:l.easing,h=Vo(l==null?void 0:l.speedPlus,"1s").animationPeriod,p=function(v){var g={};if(v instanceof Array){for(var O=Yo(v,Bl.length),C=0;C<O.length&&!(C>=4);C++)g[Bl[C]]=O[C];return g}try{if(typeof v!="string")throw new Error("Color String expected");for(var w=0;w<Bl.length;w++)g[Bl[w]]=v}catch(ie){for(ie instanceof Error?console.warn("[".concat(ie.message,']: Received "').concat(typeof v,'" instead with value, ').concat(JSON.stringify(v))):console.warn("".concat(JSON.stringify(v),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),w=0;w<Bl.length;w++)g[Bl[w]]=li}return g}((r=l==null?void 0:l.color)!==null&&r!==void 0?r:"");return he.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Ze(Ze(Ze(Ze(Ze({},f&&{fontSize:f}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),p),u),role:"status","aria-live":"polite","aria-label":"Loading"},he.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},he.createElement("span",{className:"rli-d-i-b brick-stack"})),he.createElement(Zo,{staticText:!0,text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor}))};mt(`.bob-rli-bounding-box {
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
}`);var Zl=Array.from({length:4},function(l,r){return"--TD-bob-phase".concat(r+1,"-color")}),iy=function(l){var r,o=Bo(l==null?void 0:l.style,l==null?void 0:l.size),u=o.styles,f=o.fontSize,c=l==null?void 0:l.easing,h=Vo(l==null?void 0:l.speedPlus,"1.2s").animationPeriod,p=function(v){var g={};if(v instanceof Array){for(var O=Yo(v,Zl.length),C=0;C<O.length&&!(C>=4);C++)g[Zl[C]]=O[C];return g}try{if(typeof v!="string")throw new Error("Color String expected");for(var w=0;w<Zl.length;w++)g[Zl[w]]=v}catch(ie){for(ie instanceof Error?console.warn("[".concat(ie.message,']: Received "').concat(typeof v,'" instead with value, ').concat(JSON.stringify(v))):console.warn("".concat(JSON.stringify(v),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),w=0;w<Zl.length;w++)g[Zl[w]]=li}return g}((r=l==null?void 0:l.color)!==null&&r!==void 0?r:"");return he.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Ze(Ze(Ze(Ze(Ze({},f&&{fontSize:f}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),p),u),role:"status","aria-live":"polite","aria-label":"Loading"},he.createElement("span",{className:"bob-indicator"},he.createElement("span",{className:"bobbing"})),he.createElement(Zo,{staticText:!0,text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor}))};mt(`.bounce-rli-bounding-box {
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
}`);var Yl=Array.from({length:4},function(l,r){return"--TD-bounce-phase".concat(r+1,"-color")}),oy=function(l){var r,o=Bo(l==null?void 0:l.style,l==null?void 0:l.size),u=o.styles,f=o.fontSize,c=l==null?void 0:l.easing,h=Vo(l==null?void 0:l.speedPlus,"0.5s").animationPeriod,p=function(v){var g={};if(v instanceof Array){for(var O=Yo(v,Yl.length),C=0;C<O.length&&!(C>=4);C++)g[Yl[C]]=O[C];return g}try{if(typeof v!="string")throw new Error("Color String expected");for(var w=0;w<Yl.length;w++)g[Yl[w]]=v}catch{for(w=0;w<Yl.length;w++)g[Yl[w]]=li}return g}((r=l==null?void 0:l.color)!==null&&r!==void 0?r:"");return he.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Ze(Ze(Ze(Ze(Ze({},f&&{fontSize:f}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),p),u)},he.createElement("span",{className:"wrapper"},he.createElement("span",{className:"group"},he.createElement("span",{className:"rli-d-i-b dot"}),he.createElement("span",{className:"rli-d-i-b dot"}),he.createElement("span",{className:"rli-d-i-b dot"})),he.createElement("span",{className:"group"},he.createElement("span",{className:"rli-d-i-b shadow"}),he.createElement("span",{className:"rli-d-i-b shadow"}),he.createElement("span",{className:"rli-d-i-b shadow"}))),he.createElement(Zo,{staticText:!0,text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor,style:{marginTop:"2px"}}))},Ym=function(l){var r=Object(l).variant,o=r===void 0?"pulsate":r;return o==="pulsate"?he.createElement(ly,Ze({},l)):o==="brick-stack"?he.createElement(ry,Ze({},l)):o==="bob"?he.createElement(iy,Ze({},l)):o==="bounce"?he.createElement(oy,Ze({},l)):null};mt(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--shape-phase".concat(r+1,"-color")});mt(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--trophySpin-phase".concat(r+1,"-color")});mt(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--slab-phase".concat(r+1,"-color")});mt(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(l,r){return"--life-line-phase".concat(r+1,"-color")});function uy(l){return Yn({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"},child:[]}]})(l)}function sy(l){return Yn({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},child:[]}]})(l)}function cy(l){return Yn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z"},child:[]}]})(l)}function fy(l){return Yn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(l)}function dy(l){return Yn({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"},child:[]}]})(l)}let hy={data:""},my=l=>typeof window=="object"?((l?l.querySelector("#_goober"):window._goober)||Object.assign((l||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:l||hy,py=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,gy=/\/\*[^]*?\*\/|  +/g,ym=/\n+/g,va=(l,r)=>{let o="",u="",f="";for(let c in l){let h=l[c];c[0]=="@"?c[1]=="i"?o=c+" "+h+";":u+=c[1]=="f"?va(h,c):c+"{"+va(h,c[1]=="k"?"":r)+"}":typeof h=="object"?u+=va(h,r?r.replace(/([^,])+/g,p=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,v=>/&/.test(v)?v.replace(/&/g,p):p?p+" "+v:v)):c):h!=null&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),f+=va.p?va.p(c,h):c+":"+h+";")}return o+(r&&f?r+"{"+f+"}":f)+u},Vn={},Lm=l=>{if(typeof l=="object"){let r="";for(let o in l)r+=o+Lm(l[o]);return r}return l},vy=(l,r,o,u,f)=>{let c=Lm(l),h=Vn[c]||(Vn[c]=(v=>{let g=0,O=11;for(;g<v.length;)O=101*O+v.charCodeAt(g++)>>>0;return"go"+O})(c));if(!Vn[h]){let v=c!==l?l:(g=>{let O,C,w=[{}];for(;O=py.exec(g.replace(gy,""));)O[4]?w.shift():O[3]?(C=O[3].replace(ym," ").trim(),w.unshift(w[0][C]=w[0][C]||{})):w[0][O[1]]=O[2].replace(ym," ").trim();return w[0]})(l);Vn[h]=va(f?{["@keyframes "+h]:v}:v,o?"":"."+h)}let p=o&&Vn.g?Vn.g:null;return o&&(Vn.g=Vn[h]),((v,g,O,C)=>{C?g.data=g.data.replace(C,v):g.data.indexOf(v)===-1&&(g.data=O?v+g.data:g.data+v)})(Vn[h],r,u,p),h},by=(l,r,o)=>l.reduce((u,f,c)=>{let h=r[c];if(h&&h.call){let p=h(o),v=p&&p.props&&p.props.className||/^go/.test(p)&&p;h=v?"."+v:p&&typeof p=="object"?p.props?"":va(p,""):p===!1?"":p}return u+f+(h??"")},"");function Lo(l){let r=this||{},o=l.call?l(r.p):l;return vy(o.unshift?o.raw?by(o,[].slice.call(arguments,1),r.p):o.reduce((u,f)=>Object.assign(u,f&&f.call?f(r.p):f),{}):o,my(r.target),r.g,r.o,r.k)}let Xm,xc,_c;Lo.bind({g:1});let Zn=Lo.bind({k:1});function yy(l,r,o,u){va.p=r,Xm=l,xc=o,_c=u}function Sa(l,r){let o=this||{};return function(){let u=arguments;function f(c,h){let p=Object.assign({},c),v=p.className||f.className;o.p=Object.assign({theme:xc&&xc()},p),o.o=/ *go\d+/.test(v),p.className=Lo.apply(o,u)+(v?" "+v:"");let g=l;return l[0]&&(g=p.as||l,delete p.as),_c&&g[0]&&_c(p),Xm(g,p)}return f}}var xy=l=>typeof l=="function",Uo=(l,r)=>xy(l)?l(r):l,_y=(()=>{let l=0;return()=>(++l).toString()})(),Gm=(()=>{let l;return()=>{if(l===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");l=!r||r.matches}return l}})(),Sy=20,Qm=(l,r)=>{switch(r.type){case 0:return{...l,toasts:[r.toast,...l.toasts].slice(0,Sy)};case 1:return{...l,toasts:l.toasts.map(c=>c.id===r.toast.id?{...c,...r.toast}:c)};case 2:let{toast:o}=r;return Qm(l,{type:l.toasts.find(c=>c.id===o.id)?1:0,toast:o});case 3:let{toastId:u}=r;return{...l,toasts:l.toasts.map(c=>c.id===u||u===void 0?{...c,dismissed:!0,visible:!1}:c)};case 4:return r.toastId===void 0?{...l,toasts:[]}:{...l,toasts:l.toasts.filter(c=>c.id!==r.toastId)};case 5:return{...l,pausedAt:r.time};case 6:let f=r.time-(l.pausedAt||0);return{...l,pausedAt:void 0,toasts:l.toasts.map(c=>({...c,pauseDuration:c.pauseDuration+f}))}}},To=[],Ga={toasts:[],pausedAt:void 0},Ja=l=>{Ga=Qm(Ga,l),To.forEach(r=>{r(Ga)})},Oy={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ty=(l={})=>{let[r,o]=me.useState(Ga),u=me.useRef(Ga);me.useEffect(()=>(u.current!==Ga&&o(Ga),To.push(o),()=>{let c=To.indexOf(o);c>-1&&To.splice(c,1)}),[]);let f=r.toasts.map(c=>{var h,p,v;return{...l,...l[c.type],...c,removeDelay:c.removeDelay||((h=l[c.type])==null?void 0:h.removeDelay)||(l==null?void 0:l.removeDelay),duration:c.duration||((p=l[c.type])==null?void 0:p.duration)||(l==null?void 0:l.duration)||Oy[c.type],style:{...l.style,...(v=l[c.type])==null?void 0:v.style,...c.style}}});return{...r,toasts:f}},Ay=(l,r="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:l,pauseDuration:0,...o,id:(o==null?void 0:o.id)||_y()}),ri=l=>(r,o)=>{let u=Ay(r,l,o);return Ja({type:2,toast:u}),u.id},wt=(l,r)=>ri("blank")(l,r);wt.error=ri("error");wt.success=ri("success");wt.loading=ri("loading");wt.custom=ri("custom");wt.dismiss=l=>{Ja({type:3,toastId:l})};wt.remove=l=>Ja({type:4,toastId:l});wt.promise=(l,r,o)=>{let u=wt.loading(r.loading,{...o,...o==null?void 0:o.loading});return typeof l=="function"&&(l=l()),l.then(f=>{let c=r.success?Uo(r.success,f):void 0;return c?wt.success(c,{id:u,...o,...o==null?void 0:o.success}):wt.dismiss(u),f}).catch(f=>{let c=r.error?Uo(r.error,f):void 0;c?wt.error(c,{id:u,...o,...o==null?void 0:o.error}):wt.dismiss(u)}),l};var Ey=(l,r)=>{Ja({type:1,toast:{id:l,height:r}})},ky=()=>{Ja({type:5,time:Date.now()})},ei=new Map,Dy=1e3,zy=(l,r=Dy)=>{if(ei.has(l))return;let o=setTimeout(()=>{ei.delete(l),Ja({type:4,toastId:l})},r);ei.set(l,o)},wy=l=>{let{toasts:r,pausedAt:o}=Ty(l);me.useEffect(()=>{if(o)return;let c=Date.now(),h=r.map(p=>{if(p.duration===1/0)return;let v=(p.duration||0)+p.pauseDuration-(c-p.createdAt);if(v<0){p.visible&&wt.dismiss(p.id);return}return setTimeout(()=>wt.dismiss(p.id),v)});return()=>{h.forEach(p=>p&&clearTimeout(p))}},[r,o]);let u=me.useCallback(()=>{o&&Ja({type:6,time:Date.now()})},[o]),f=me.useCallback((c,h)=>{let{reverseOrder:p=!1,gutter:v=8,defaultPosition:g}=h||{},O=r.filter(ie=>(ie.position||g)===(c.position||g)&&ie.height),C=O.findIndex(ie=>ie.id===c.id),w=O.filter((ie,K)=>K<C&&ie.visible).length;return O.filter(ie=>ie.visible).slice(...p?[w+1]:[0,w]).reduce((ie,K)=>ie+(K.height||0)+v,0)},[r]);return me.useEffect(()=>{r.forEach(c=>{if(c.dismissed)zy(c.id,c.removeDelay);else{let h=ei.get(c.id);h&&(clearTimeout(h),ei.delete(c.id))}})},[r]),{toasts:r,handlers:{updateHeight:Ey,startPause:ky,endPause:u,calculateOffset:f}}},Ny=Zn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,My=Zn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Cy=Zn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ry=Sa("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${l=>l.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ny} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${My} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${l=>l.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Cy} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,jy=Zn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Uy=Sa("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${l=>l.secondary||"#e0e0e0"};
  border-right-color: ${l=>l.primary||"#616161"};
  animation: ${jy} 1s linear infinite;
`,qy=Zn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Hy=Zn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Vy=Sa("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${l=>l.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Hy} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${l=>l.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,By=Sa("div")`
  position: absolute;
`,Zy=Sa("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Yy=Zn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ly=Sa("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Yy} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Xy=({toast:l})=>{let{icon:r,type:o,iconTheme:u}=l;return r!==void 0?typeof r=="string"?me.createElement(Ly,null,r):r:o==="blank"?null:me.createElement(Zy,null,me.createElement(Uy,{...u}),o!=="loading"&&me.createElement(By,null,o==="error"?me.createElement(Ry,{...u}):me.createElement(Vy,{...u})))},Gy=l=>`
0% {transform: translate3d(0,${l*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Qy=l=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${l*-150}%,-1px) scale(.6); opacity:0;}
`,Ky="0%{opacity:0;} 100%{opacity:1;}",Jy="0%{opacity:1;} 100%{opacity:0;}",$y=Sa("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Py=Sa("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Fy=(l,r)=>{let o=l.includes("top")?1:-1,[u,f]=Gm()?[Ky,Jy]:[Gy(o),Qy(o)];return{animation:r?`${Zn(u)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Zn(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Wy=me.memo(({toast:l,position:r,style:o,children:u})=>{let f=l.height?Fy(l.position||r||"top-center",l.visible):{opacity:0},c=me.createElement(Xy,{toast:l}),h=me.createElement(Py,{...l.ariaProps},Uo(l.message,l));return me.createElement($y,{className:l.className,style:{...f,...o,...l.style}},typeof u=="function"?u({icon:c,message:h}):me.createElement(me.Fragment,null,c,h))});yy(me.createElement);var Iy=({id:l,className:r,style:o,onHeightUpdate:u,children:f})=>{let c=me.useCallback(h=>{if(h){let p=()=>{let v=h.getBoundingClientRect().height;u(l,v)};p(),new MutationObserver(p).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[l,u]);return me.createElement("div",{ref:c,className:r,style:o},f)},e1=(l,r)=>{let o=l.includes("top"),u=o?{top:0}:{bottom:0},f=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Gm()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(o?1:-1)}px)`,...u,...f}},t1=Lo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,So=16,n1=({reverseOrder:l,position:r="top-center",toastOptions:o,gutter:u,children:f,containerStyle:c,containerClassName:h})=>{let{toasts:p,handlers:v}=wy(o);return me.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:So,left:So,right:So,bottom:So,pointerEvents:"none",...c},className:h,onMouseEnter:v.startPause,onMouseLeave:v.endPause},p.map(g=>{let O=g.position||r,C=v.calculateOffset(g,{reverseOrder:l,gutter:u,defaultPosition:r}),w=e1(O,C);return me.createElement(Iy,{id:g.id,key:g.id,onHeightUpdate:v.updateHeight,className:g.visible?t1:"",style:w},g.type==="custom"?Uo(g.message,g):f?f(g):me.createElement(Wy,{toast:g,position:O}))}))},La=wt;function a1(l){return Yn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},child:[]},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},child:[]}]})(l)}function l1(l){return Yn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(l)}const r1=({task:l,isDeleting:r,selectedCategoryId:o,onToggleComplete:u,onEdit:f,onDuplicate:c,onDelete:h,onFilterByCategory:p})=>{const v=g=>{const O=new Date;O.setHours(0,0,0,0);const C=new Date(g);return C.setHours(0,0,0,0),C<=O};return q.jsxs("div",{className:`
        flex items-center justify-between p-4 rounded-xl border-1 border-slate-600
        hover:bg-purple-100 transition-colors
        ${r===l.id?"opacity-50 pointer-events-none":""}
        ${l.isCompleted?"bg-green-50 border-green-300":""}
      `,children:[q.jsxs("div",{className:"flex-1",children:[q.jsx("h3",{className:`font-medium text-gray-600 mb-1 text-2xl ${l.isCompleted?"line-through decoration-pink-500":""}`,children:l.name}),v(l.dueDate)?q.jsxs("p",{className:"text-sm text-red-500 font-bold",children:["OVERDUE: ",l.dueDate]}):q.jsxs("p",{className:"text-sm text-gray-500",children:["Due: ",l.dueDate]}),l.todoCategories&&l.todoCategories.length>0&&q.jsx("div",{className:"flex flex-wrap gap-1 mt-2",children:l.todoCategories.map(g=>q.jsx("span",{onClick:()=>p(g.category.id),className:"bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full border-1 cursor-pointer hover:bg-purple-200 transition-colors",style:o===g.category.id?{backgroundColor:"#d8b4fe",fontWeight:"bold",textTransform:"uppercase"}:{},children:g.category.name},g.id))})]}),q.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[q.jsx("button",{onClick:()=>u(l),className:`p-2 rounded-full transition-colors ${l.isCompleted?"bg-green-500 text-white hover:bg-green-600":"bg-gray-200 text-gray-400 hover:bg-green-500 hover:text-white transition-all ease-in-out duration-500"}`,title:l.isCompleted?"Mark as incomplete":"Mark as complete",children:q.jsx(fy,{className:"w-6 h-6"})}),q.jsx("button",{onClick:()=>f(l.id),className:"text-gray-400 hover:text-green-500 p-2 rounded-lg hover:bg-green-50 transition-colors border-1",title:"Edit task",children:q.jsx(a1,{className:"w-4 h-4"})}),q.jsx("button",{onClick:()=>c(l),className:"text-gray-400 hover:text-blue-500 p-2 rounded-lg hover:bg-blue-50 transition-colors border-1",title:"Duplicate task",children:q.jsx(sy,{className:"w-4 h-4"})}),q.jsx("button",{onClick:()=>h(l.id),className:"text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors border-1",title:"Delete task",children:r===l.id?q.jsx(Ym,{color:"#ef4444",size:"small"}):q.jsx(l1,{className:"w-4 h-4"})})]})]})},i1=()=>{const[l,r]=me.useState([]),[o,u]=me.useState(!1),[f,c]=me.useState(void 0),[h,p]=me.useState(!0),[v,g]=me.useState(""),[O,C]=me.useState(null),[w,ie]=me.useState(null),[K,H]=me.useState("date"),[te,Ce]=me.useState("asc"),ne=l.length,ye=l.filter(ae=>ae.isCompleted).length,je=ne-ye;me.useEffect(()=>{J()},[w,K,te]);const J=async()=>{try{const ae=await gv({categoryId:w||void 0,sortBy:K,sortOrder:te});r(ae),g("")}catch(ae){g("Failed to load tasks. Please refresh the page."+ae)}finally{p(!1)}},Ye=()=>{c(void 0),u(!0)},we=()=>{c(void 0),u(!1)},Fe=()=>{J(),we()},ke=ae=>{const fe=l.find(z=>z.id===ae);fe&&(c(fe),u(!0))},Ot=async ae=>{C(ae);try{await vv(ae),r(fe=>fe.filter(z=>z.id!==ae)),La.success("Task deleted successfully! 🗑️")}catch(fe){g("Failed to delete task. Please Try again"+fe),La.error("Failed to delete task. Please try again.")}finally{C(null)}},tt=async ae=>{try{const fe={name:`${ae.name} (Copy)`,dueDate:ae.dueDate,isCompleted:!1,categoryIds:ae.todoCategories.map(z=>z.category.id)};await xm(fe),J(),La.success("Task duplicated successfully! 📋")}catch(fe){g("Failed to duplicate task. Please try again."+fe),La.error("Failed to duplicate task. Please try again.")}},ue=ae=>{ie(fe=>fe===ae?null:ae)},Se=async ae=>{const fe=!ae.isCompleted;r(z=>z.map(V=>V.id===ae.id?{...V,isCompleted:fe}:V));try{await _m(ae.id,{isCompleted:fe}),fe?La.success("Task completed! Well done! 🎉"):La("Task marked as incomplete",{icon:"↩️"})}catch(z){r(V=>V.map(ee=>ee.id===ae.id?{...ee,isCompleted:ae.isCompleted}:ee)),g("Failed to update task. Please try again."+z),La.error("Failed to update task. Please try again.")}};return v?q.jsx("div",{className:"min-h-screen py-8",children:q.jsx("div",{className:"max-w-2xl mx-auto",children:q.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-2xl p-6 text-center",children:[q.jsx("div",{className:" mb-4",children:q.jsx("div",{className:"text-7xl mb-4",children:"⚠️"})}),q.jsx("h2",{className:"text-red-800 text-xl font-semibold mb-2",children:"Something went wrong"}),q.jsx("h3",{className:"text-red-600 mb-4",children:v}),q.jsx("button",{onClick:J,className:"bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors",children:"Try Again"})]})})}):q.jsxs("div",{className:"min-h-screen py-8 rounded-4xl ",children:[q.jsxs("div",{className:"max-w-2xl mx-auto",children:[q.jsx("div",{className:"bg-gray-50 rounded-2xl shadow-sm p-6 mb-6 border-2 border-slate-600",children:q.jsxs("div",{className:"flex justify-between items-center",children:[q.jsxs("div",{className:"flex items-center gap-3",children:[q.jsx(Yb,{className:"text-3xl text-slate-900"}),q.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"TASK MANAGER"})]}),q.jsx("button",{onClick:Ye,children:q.jsx(cy,{className:"w-15 h-15 bg-green-600 hover:bg-purple-900 rounded-full transition-colors shadow-sm hover:shadow-sm"})})]})}),w&&q.jsx("div",{className:"mb-4 text-right",children:q.jsx("button",{onClick:()=>ie(null),className:"text-sm font-bold text-red-600 hover:underline bg-red-100 rounded-md p-1 border-1 ",children:"Clear filter"})}),q.jsx("div",{className:"bg-gray-50 rounded-xl p-4 mb-4 border-2 border-slate-600 ",children:q.jsxs("div",{className:"flex flex-wrap gap-3 items-center justify-center",children:[q.jsxs("div",{className:"flex gap-2",children:[q.jsxs("div",{className:"select-none px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm border border-green-300 flex items-center gap-1",children:["Completed: ",ye]}),q.jsxs("div",{className:"select-none px-3 py-1 bg-orange-100 text-orange-800 rounded-lg text-sm border border-orange-300 flex items-center gap-1",children:["Active: ",je]})]}),q.jsxs("div",{className:"flex gap-2",children:[q.jsxs("button",{onClick:()=>H("date"),className:`cursor-pointer px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-1 ${K==="date"?"cursor-pointer bg-purple-200 text-purple-800 border border-purple-300":"cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}`,children:[q.jsx(uy,{className:"w-4 h-4"}),"Sort by Date"]}),q.jsxs("button",{onClick:()=>H("name"),className:`cursor-pointer px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-1 ${K==="name"?"cursor-pointer bg-purple-200 text-purple-800 border border-purple-300":"cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 "}`,children:[q.jsx(dy,{className:"w-4 h-4"}),"Sort by Name"]})]}),q.jsx("button",{onClick:()=>Ce(te==="asc"?"desc":"asc"),className:"px-3 py-1  cursor-pointer bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 border border-purple-300",children:te==="asc"?"↑ Ascending":"↓ Descending"})]})}),q.jsx("div",{className:"bg-gray-50 rounded-2xl shadow-sm p-6 border-2 border-slate-600",children:h?q.jsxs("div",{className:"text-center py-12",children:[q.jsx(Ym,{color:["#7c31cc","#cc3133","#81cc31","#31ccc9"]}),q.jsx("p",{className:"text-gray-500 mt-4",children:"Loading your tasks..."})]}):l.length===0?q.jsxs("div",{className:"text-center py-12 text-gray-500",children:[q.jsx("div",{className:"text-6xl mb-4",children:"📋"}),q.jsx("p",{className:"text-lg",children:"No tasks yet"}),q.jsx("p",{className:"text-sm",children:"Click the + button to add your first task"})]}):q.jsx("div",{className:"space-y-3",children:l.map(ae=>q.jsx(r1,{task:ae,isDeleting:O,selectedCategoryId:w,onToggleComplete:Se,onEdit:ke,onDuplicate:tt,onDelete:Ot,onFilterByCategory:ue},ae.id))})})]}),q.jsx(zv,{isOpen:o,onClose:we,title:f?"Edit Task":"Create New Task",children:q.jsx(Zb,{onSuccess:Fe,onClose:we,initialData:f})})]})};function o1(){return q.jsx("div",{className:"min-h-screen bg-gray-300 text-white ",children:q.jsxs("div",{className:"max-w-3xl mx-auto p-3",children:[q.jsx(n1,{position:"top-center",toastOptions:{duration:5e3,style:{background:"#1E2939",color:"#fff",borderRadius:"12px",fontSize:"14px",padding:"10px",border:"3px solid #9AE600"},success:{iconTheme:{primary:"#10b981",secondary:"#fff"}},error:{iconTheme:{primary:"#ef4444",secondary:"#fff"}}}}),q.jsx(i1,{})]})})}pv.createRoot(document.getElementById("root")).render(q.jsx(me.StrictMode,{children:q.jsx(o1,{})}));
