(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var jd={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function SM(){if(V_)return ol;V_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return ol.Fragment=e,ol.jsx=n,ol.jsxs=n,ol}var k_;function MM(){return k_||(k_=1,jd.exports=SM()),jd.exports}var W=MM(),Kd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function bM(){if(X_)return rt;X_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function y(P,j,Se){this.props=P,this.context=j,this.refs=M,this.updater=Se||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,j){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,j,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=y.prototype;function I(P,j,Se){this.props=P,this.context=j,this.refs=M,this.updater=Se||b}var R=I.prototype=new O;R.constructor=I,A(R,y.prototype),R.isPureReactComponent=!0;var U=Array.isArray;function N(){}var D={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(P,j,Se){var we=Se.ref;return{$$typeof:r,type:P,key:j,ref:we!==void 0?we:null,props:Se}}function V(P,j){return L(P.type,j,P.props)}function z(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function K(P){var j={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return j[Se]})}var ce=/\/+/g;function _e(P,j){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):j.toString(36)}function Z(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(N,N):(P.status="pending",P.then(function(j){P.status==="pending"&&(P.status="fulfilled",P.value=j)},function(j){P.status==="pending"&&(P.status="rejected",P.reason=j)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,j,Se,we,Ie){var se=typeof P;(se==="undefined"||se==="boolean")&&(P=null);var ye=!1;if(P===null)ye=!0;else switch(se){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(P.$$typeof){case r:case e:ye=!0;break;case g:return ye=P._init,F(ye(P._payload),j,Se,we,Ie)}}if(ye)return Ie=Ie(P),ye=we===""?"."+_e(P,0):we,U(Ie)?(Se="",ye!=null&&(Se=ye.replace(ce,"$&/")+"/"),F(Ie,j,Se,"",function(it){return it})):Ie!=null&&(z(Ie)&&(Ie=V(Ie,Se+(Ie.key==null||P&&P.key===Ie.key?"":(""+Ie.key).replace(ce,"$&/")+"/")+ye)),j.push(Ie)),1;ye=0;var Ee=we===""?".":we+":";if(U(P))for(var He=0;He<P.length;He++)we=P[He],se=Ee+_e(we,He),ye+=F(we,j,Se,se,Ie);else if(He=x(P),typeof He=="function")for(P=He.call(P),He=0;!(we=P.next()).done;)we=we.value,se=Ee+_e(we,He++),ye+=F(we,j,Se,se,Ie);else if(se==="object"){if(typeof P.then=="function")return F(Z(P),j,Se,we,Ie);throw j=String(P),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(P,j,Se){if(P==null)return P;var we=[],Ie=0;return F(P,we,"","",function(se){return j.call(Se,se,Ie++)}),we}function ee(P){if(P._status===-1){var j=P._result;j=j(),j.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=j)}if(P._status===1)return P._result.default;throw P._result}var pe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},be={map:G,forEach:function(P,j,Se){G(P,function(){j.apply(this,arguments)},Se)},count:function(P){var j=0;return G(P,function(){j++}),j},toArray:function(P){return G(P,function(j){return j})||[]},only:function(P){if(!z(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return rt.Activity=_,rt.Children=be,rt.Component=y,rt.Fragment=n,rt.Profiler=o,rt.PureComponent=I,rt.StrictMode=a,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,rt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return D.H.useMemoCache(P)}},rt.cache=function(P){return function(){return P.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(P,j,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var we=A({},P.props),Ie=P.key;if(j!=null)for(se in j.key!==void 0&&(Ie=""+j.key),j)!T.call(j,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&j.ref===void 0||(we[se]=j[se]);var se=arguments.length-2;if(se===1)we.children=Se;else if(1<se){for(var ye=Array(se),Ee=0;Ee<se;Ee++)ye[Ee]=arguments[Ee+2];we.children=ye}return L(P.type,Ie,we)},rt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},rt.createElement=function(P,j,Se){var we,Ie={},se=null;if(j!=null)for(we in j.key!==void 0&&(se=""+j.key),j)T.call(j,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Ie[we]=j[we]);var ye=arguments.length-2;if(ye===1)Ie.children=Se;else if(1<ye){for(var Ee=Array(ye),He=0;He<ye;He++)Ee[He]=arguments[He+2];Ie.children=Ee}if(P&&P.defaultProps)for(we in ye=P.defaultProps,ye)Ie[we]===void 0&&(Ie[we]=ye[we]);return L(P,se,Ie)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(P){return{$$typeof:d,render:P}},rt.isValidElement=z,rt.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:ee}},rt.memo=function(P,j){return{$$typeof:h,type:P,compare:j===void 0?null:j}},rt.startTransition=function(P){var j=D.T,Se={};D.T=Se;try{var we=P(),Ie=D.S;Ie!==null&&Ie(Se,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(N,pe)}catch(se){pe(se)}finally{j!==null&&Se.types!==null&&(j.types=Se.types),D.T=j}},rt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},rt.use=function(P){return D.H.use(P)},rt.useActionState=function(P,j,Se){return D.H.useActionState(P,j,Se)},rt.useCallback=function(P,j){return D.H.useCallback(P,j)},rt.useContext=function(P){return D.H.useContext(P)},rt.useDebugValue=function(){},rt.useDeferredValue=function(P,j){return D.H.useDeferredValue(P,j)},rt.useEffect=function(P,j){return D.H.useEffect(P,j)},rt.useEffectEvent=function(P){return D.H.useEffectEvent(P)},rt.useId=function(){return D.H.useId()},rt.useImperativeHandle=function(P,j,Se){return D.H.useImperativeHandle(P,j,Se)},rt.useInsertionEffect=function(P,j){return D.H.useInsertionEffect(P,j)},rt.useLayoutEffect=function(P,j){return D.H.useLayoutEffect(P,j)},rt.useMemo=function(P,j){return D.H.useMemo(P,j)},rt.useOptimistic=function(P,j){return D.H.useOptimistic(P,j)},rt.useReducer=function(P,j,Se){return D.H.useReducer(P,j,Se)},rt.useRef=function(P){return D.H.useRef(P)},rt.useState=function(P){return D.H.useState(P)},rt.useSyncExternalStore=function(P,j,Se){return D.H.useSyncExternalStore(P,j,Se)},rt.useTransition=function(){return D.H.useTransition()},rt.version="19.2.7",rt}var W_;function Op(){return W_||(W_=1,Kd.exports=bM()),Kd.exports}var lt=Op(),Zd={exports:{}},ll={},Qd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function EM(){return q_||(q_=1,(function(r){function e(F,G){var ee=F.length;F.push(G);e:for(;0<ee;){var pe=ee-1>>>1,be=F[pe];if(0<o(be,G))F[pe]=G,F[ee]=be,ee=pe;else break e}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var G=F[0],ee=F.pop();if(ee!==G){F[0]=ee;e:for(var pe=0,be=F.length,P=be>>>1;pe<P;){var j=2*(pe+1)-1,Se=F[j],we=j+1,Ie=F[we];if(0>o(Se,ee))we<be&&0>o(Ie,Se)?(F[pe]=Ie,F[we]=ee,pe=we):(F[pe]=Se,F[j]=ee,pe=j);else if(we<be&&0>o(Ie,ee))F[pe]=Ie,F[we]=ee,pe=we;else break e}}return G}function o(F,G){var ee=F.sortIndex-G.sortIndex;return ee!==0?ee:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var p=[],h=[],g=1,_=null,v=3,x=!1,b=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var G=n(h);G!==null;){if(G.callback===null)a(h);else if(G.startTime<=F)a(h),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(h)}}function U(F){if(A=!1,R(F),!b)if(n(p)!==null)b=!0,N||(N=!0,K());else{var G=n(h);G!==null&&Z(U,G.startTime-F)}}var N=!1,D=-1,T=5,L=-1;function V(){return M?!0:!(r.unstable_now()-L<T)}function z(){if(M=!1,N){var F=r.unstable_now();L=F;var G=!0;try{e:{b=!1,A&&(A=!1,O(D),D=-1),x=!0;var ee=v;try{t:{for(R(F),_=n(p);_!==null&&!(_.expirationTime>F&&V());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,v=_.priorityLevel;var be=pe(_.expirationTime<=F);if(F=r.unstable_now(),typeof be=="function"){_.callback=be,R(F),G=!0;break t}_===n(p)&&a(p),R(F)}else a(p);_=n(p)}if(_!==null)G=!0;else{var P=n(h);P!==null&&Z(U,P.startTime-F),G=!1}}break e}finally{_=null,v=ee,x=!1}G=void 0}}finally{G?K():N=!1}}}var K;if(typeof I=="function")K=function(){I(z)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,_e=ce.port2;ce.port1.onmessage=z,K=function(){_e.postMessage(null)}}else K=function(){y(z,0)};function Z(F,G){D=y(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(F){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ee=v;v=G;try{return F()}finally{v=ee}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=v;v=F;try{return G()}finally{v=ee}},r.unstable_scheduleCallback=function(F,G,ee){var pe=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,F){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,F={id:g++,callback:G,priorityLevel:F,startTime:ee,expirationTime:be,sortIndex:-1},ee>pe?(F.sortIndex=ee,e(h,F),n(p)===null&&F===n(h)&&(A?(O(D),D=-1):A=!0,Z(U,ee-pe))):(F.sortIndex=be,e(p,F),b||x||(b=!0,N||(N=!0,K()))),F},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(F){var G=v;return function(){var ee=v;v=G;try{return F.apply(this,arguments)}finally{v=ee}}}})(Jd)),Jd}var Y_;function TM(){return Y_||(Y_=1,Qd.exports=EM()),Qd.exports}var $d={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function AM(){if(j_)return Hn;j_=1;var r=Op();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:h,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Hn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,g)},Hn.flushSync=function(p){var h=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=h,a.p=g,a.d.f()}},Hn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},Hn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Hn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Hn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},Hn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Hn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=d(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},Hn.requestFormReset=function(p){a.d.r(p)},Hn.unstable_batchedUpdates=function(p,h){return p(h)},Hn.useFormState=function(p,h,g){return u.H.useFormState(p,h,g)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.7",Hn}var K_;function RM(){if(K_)return $d.exports;K_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),$d.exports=AM(),$d.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function wM(){if(Z_)return ll;Z_=1;var r=TM(),e=Op(),n=RM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function h(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var S=!1,C=f.child;C;){if(C===s){S=!0,s=f,l=m;break}if(C===l){S=!0,l=f,s=m;break}C=C.sibling}if(!S){for(C=m.child;C;){if(C===s){S=!0,s=m,l=f;break}if(C===l){S=!0,l=m,s=f;break}C=C.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case U:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case I:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case R:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}var Z=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},pe=[],be=-1;function P(t){return{current:t}}function j(t){0>be||(t.current=pe[be],pe[be]=null,be--)}function Se(t,i){be++,pe[be]=t.current,t.current=i}var we=P(null),Ie=P(null),se=P(null),ye=P(null);function Ee(t,i){switch(Se(se,i),Se(Ie,t),Se(we,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?f_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=f_(i),t=d_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(we),Se(we,t)}function He(){j(we),j(Ie),j(se)}function it(t){t.memoizedState!==null&&Se(ye,t);var i=we.current,s=d_(i,t.type);i!==s&&(Se(Ie,t),Se(we,s))}function Qe(t){Ie.current===t&&(j(we),j(Ie)),ye.current===t&&(j(ye),il._currentValue=ee)}var Qt,pt;function Tt(t){if(Qt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Qt=i&&i[1]||"",pt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+pt}var At=!1;function gt(t,i){if(!t||At)return"";At=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ue){var le=ue}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ue){le=ue}t.call(xe.prototype)}}else{try{throw Error()}catch(ue){le=ue}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],C=m[1];if(S&&C){var H=S.split(`
`),ne=C.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ne.length&&!ne[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===ne.length)for(l=H.length-1,f=ne.length-1;1<=l&&0<=f&&H[l]!==ne[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==ne[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==ne[f]){var me=`
`+H[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=f);break}}}finally{At=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Tt(s):""}function rn(t,i){switch(t.tag){case 26:case 27:case 5:return Tt(t.type);case 16:return Tt("Lazy");case 13:return t.child!==i&&i!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return gt(t.type,!1);case 11:return gt(t.type.render,!1);case 1:return gt(t.type,!0);case 31:return Tt("Activity");default:return""}}function on(t){try{var i="",s=null;do i+=rn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ln=Object.prototype.hasOwnProperty,hn=r.unstable_scheduleCallback,Zt=r.unstable_cancelCallback,cn=r.unstable_shouldYield,Y=r.unstable_requestPaint,kt=r.unstable_now,Dt=r.unstable_getCurrentPriorityLevel,B=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,re=r.unstable_LowPriority,de=r.unstable_IdlePriority,Te=r.log,Ne=r.unstable_setDisableYieldValue,fe=null,he=null;function Re(t){if(typeof Te=="function"&&Ne(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(fe,t)}catch{}}var Fe=Math.clz32?Math.clz32:Ze,Ue=Math.log,De=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Ue(t)/De|0)|0}var Je=256,st=262144,X=4194304;function Ae(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?f=Ae(l):(S&=C,S!==0?f=Ae(S):s||(s=C&~t,s!==0&&(f=Ae(s))))):(C=l&~m,C!==0?f=Ae(C):S!==0?f=Ae(S):s||(s=l&~t,s!==0&&(f=Ae(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ce(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Be(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function qe(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ve(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function en(t,i,s,l,f,m){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,ne=t.hiddenUpdates;for(s=S&~s;0<s;){var me=31-Fe(s),xe=1<<me;C[me]=0,H[me]=-1;var le=ne[me];if(le!==null)for(ne[me]=null,me=0;me<le.length;me++){var ue=le[me];ue!==null&&(ue.lane&=-536870913)}s&=~xe}l!==0&&Ot(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(S&~i))}function Ot(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Fe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function si(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Fe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ri(t,i){var s=i&-i;return s=(s&42)!==0?1:_o(s),(s&(t.suspendedLanes|i))!==0?0:s}function _o(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xo(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:P_(t.type))}function or(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var Yi=Math.random().toString(36).slice(2),_n="__reactFiber$"+Yi,Un="__reactProps$"+Yi,Zn="__reactContainer$"+Yi,ws="__reactEvents$"+Yi,Bl="__reactListeners$"+Yi,Fl="__reactHandles$"+Yi,Cs="__reactResources$"+Yi,Xa="__reactMarker$"+Yi;function Wa(t){delete t[_n],delete t[Un],delete t[ws],delete t[Bl],delete t[Fl]}function fa(t){var i=t[_n];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Zn]||s[_n]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=x_(t);t!==null;){if(s=t[_n])return s;t=x_(t)}return i}t=s,s=t.parentNode}return null}function da(t){if(t=t[_n]||t[Zn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Ns(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function qa(t){var i=t[Cs];return i||(i=t[Cs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vn(t){t[Xa]=!0}var zl=new Set,w={};function q(t,i){oe(t,i),oe(t+"Capture",i)}function oe(t,i){for(w[t]=i,t=0;t<i.length;t++)zl.add(i[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Oe={};function Ge(t){return ln.call(Oe,t)?!0:ln.call(ae,t)?!1:ie.test(t)?Oe[t]=!0:(ae[t]=!0,!1)}function Le(t,i,s){if(Ge(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Xe(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function ke(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ct(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,m.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){if(!t._valueTracker){var i=ct(t)?"checked":"value";t._valueTracker=je(t,i,""+t[i])}}function tn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ct(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pt=/[\n"\\]/g;function It(t){return t.replace(Pt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ze(t,i,s,l,f,m,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+$e(i)):t.value!==""+$e(i)&&(t.value=""+$e(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?_t(t,S,$e(i)):s!=null?_t(t,S,$e(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+$e(C):t.removeAttribute("name")}function zn(t,i,s,l,f,m,S,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){wt(t);return}s=s!=null?""+$e(s):"",i=i!=null?""+$e(i):s,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),wt(t)}function _t(t,i,s){i==="number"&&jt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function En(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+$e(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function oi(t,i,s){if(i!=null&&(i=""+$e(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+$e(s):""}function Ui(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(Z(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=$e(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),wt(t)}function li(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Bt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Bt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Oi(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&nn(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&nn(t,m,i[m])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ya=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ds(t){return Ya.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ha(){}var Xu=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lr=null,cr=null;function um(t){var i=da(t);if(i&&(t=i.stateNode)){var s=t[Un]||null;e:switch(t=i.stateNode,i.type){case"input":if(ze(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+It(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Un]||null;if(!f)throw Error(a(90));ze(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&tn(l)}break e;case"textarea":oi(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&En(t,!!s.multiple,i,!1)}}}var qu=!1;function fm(t,i,s){if(qu)return t(i,s);qu=!0;try{var l=t(i);return l}finally{if(qu=!1,(lr!==null||cr!==null)&&(Ac(),lr&&(i=lr,t=cr,cr=lr=null,um(i),t)))for(i=0;i<t.length;i++)um(t[i])}}function yo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Un]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=!1;if(pa)try{var So={};Object.defineProperty(So,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Yu=!1}var ja=null,ju=null,Hl=null;function dm(){if(Hl)return Hl;var t,i=ju,s=i.length,l,f="value"in ja?ja.value:ja.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[m-l];l++);return Hl=f.slice(t,1<l?1-l:void 0)}function Gl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function hm(){return!1}function Qn(t){function i(s,l,f,m,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vl:hm,this.isPropagationStopped=hm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Qn(Ls),Mo=_({},Ls,{view:0,detail:0}),xy=Qn(Mo),Ku,Zu,bo,Xl=_({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(Ku=t.screenX-bo.screenX,Zu=t.screenY-bo.screenY):Zu=Ku=0,bo=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),pm=Qn(Xl),yy=_({},Xl,{dataTransfer:0}),Sy=Qn(yy),My=_({},Mo,{relatedTarget:0}),Qu=Qn(My),by=_({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=Qn(by),Ty=_({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ay=Qn(Ty),Ry=_({},Ls,{data:0}),mm=Qn(Ry),wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ny[t])?!!i[t]:!1}function Ju(){return Dy}var Ly=_({},Mo,{key:function(t){if(t.key){var i=wy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uy=Qn(Ly),Oy=_({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gm=Qn(Oy),Py=_({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),Iy=Qn(Py),By=_({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=Qn(By),zy=_({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hy=Qn(zy),Gy=_({},Ls,{newState:0,oldState:0}),Vy=Qn(Gy),ky=[9,13,27,32],$u=pa&&"CompositionEvent"in window,Eo=null;pa&&"documentMode"in document&&(Eo=document.documentMode);var Xy=pa&&"TextEvent"in window&&!Eo,_m=pa&&(!$u||Eo&&8<Eo&&11>=Eo),vm=" ",xm=!1;function ym(t,i){switch(t){case"keyup":return ky.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function Wy(t,i){switch(t){case"compositionend":return Sm(i);case"keypress":return i.which!==32?null:(xm=!0,vm);case"textInput":return t=i.data,t===vm&&xm?null:t;default:return null}}function qy(t,i){if(ur)return t==="compositionend"||!$u&&ym(t,i)?(t=dm(),Hl=ju=ja=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _m&&i.locale!=="ko"?null:i.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Yy[t.type]:i==="textarea"}function bm(t,i,s,l){lr?cr?cr.push(l):cr=[l]:lr=l,i=Uc(i,"onChange"),0<i.length&&(s=new kl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var To=null,Ao=null;function jy(t){s_(t,0)}function Wl(t){var i=Ns(t);if(tn(i))return t}function Em(t,i){if(t==="change")return i}var Tm=!1;if(pa){var ef;if(pa){var tf="oninput"in document;if(!tf){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),tf=typeof Am.oninput=="function"}ef=tf}else ef=!1;Tm=ef&&(!document.documentMode||9<document.documentMode)}function Rm(){To&&(To.detachEvent("onpropertychange",wm),Ao=To=null)}function wm(t){if(t.propertyName==="value"&&Wl(Ao)){var i=[];bm(i,Ao,t,Wu(t)),fm(jy,i)}}function Ky(t,i,s){t==="focusin"?(Rm(),To=i,Ao=s,To.attachEvent("onpropertychange",wm)):t==="focusout"&&Rm()}function Zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Ao)}function Qy(t,i){if(t==="click")return Wl(i)}function Jy(t,i){if(t==="input"||t==="change")return Wl(i)}function $y(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ci=typeof Object.is=="function"?Object.is:$y;function Ro(t,i){if(ci(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!ln.call(i,f)||!ci(t[f],i[f]))return!1}return!0}function Cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nm(t,i){var s=Cm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Cm(s)}}function Dm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Lm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=jt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=jt(t.document)}return i}function nf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var eS=pa&&"documentMode"in document&&11>=document.documentMode,fr=null,af=null,wo=null,sf=!1;function Um(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;sf||fr==null||fr!==jt(l)||(l=fr,"selectionStart"in l&&nf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),wo&&Ro(wo,l)||(wo=l,l=Uc(af,"onSelect"),0<l.length&&(i=new kl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=fr)))}function Us(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var dr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},rf={},Om={};pa&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Os(t){if(rf[t])return rf[t];if(!dr[t])return t;var i=dr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Om)return rf[t]=i[s];return t}var Pm=Os("animationend"),Im=Os("animationiteration"),Bm=Os("animationstart"),tS=Os("transitionrun"),nS=Os("transitionstart"),iS=Os("transitioncancel"),Fm=Os("transitionend"),zm=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function Pi(t,i){zm.set(t,i),q(i,[t])}var ql=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],hr=0,lf=0;function Yl(){for(var t=hr,i=lf=hr=0;i<t;){var s=Si[i];Si[i++]=null;var l=Si[i];Si[i++]=null;var f=Si[i];Si[i++]=null;var m=Si[i];if(Si[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}m!==0&&Hm(s,f,m)}}function jl(t,i,s,l){Si[hr++]=t,Si[hr++]=i,Si[hr++]=s,Si[hr++]=l,lf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function cf(t,i,s,l){return jl(t,i,s,l),Kl(t)}function Ps(t,i){return jl(t,null,null,i),Kl(t)}function Hm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Fe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Kl(t){if(50<Zo)throw Zo=0,vd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var pr={};function aS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,i,s,l){return new aS(t,i,s,l)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,i){var s=t.alternate;return s===null?(s=ui(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Gm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Zl(t,i,s,l,f,m){var S=0;if(l=t,typeof t=="function")uf(t)&&(S=1);else if(typeof t=="string")S=cM(t,s,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ui(31,s,i,f),t.elementType=L,t.lanes=m,t;case A:return Is(s.children,f,m,i);case M:S=8,f|=24;break;case y:return t=ui(12,s,i,f|2),t.elementType=y,t.lanes=m,t;case U:return t=ui(13,s,i,f),t.elementType=U,t.lanes=m,t;case N:return t=ui(19,s,i,f),t.elementType=N,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:S=10;break e;case O:S=9;break e;case R:S=11;break e;case D:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ui(S,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Is(t,i,s,l){return t=ui(7,t,l,i),t.lanes=s,t}function ff(t,i,s){return t=ui(6,t,null,i),t.lanes=s,t}function Vm(t){var i=ui(18,null,null,0);return i.stateNode=t,i}function df(t,i,s){return i=ui(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var km=new WeakMap;function Mi(t,i){if(typeof t=="object"&&t!==null){var s=km.get(t);return s!==void 0?s:(i={value:t,source:i,stack:on(i)},km.set(t,i),i)}return{value:t,source:i,stack:on(i)}}var mr=[],gr=0,Ql=null,Co=0,bi=[],Ei=0,Ka=null,Ki=1,Zi="";function ga(t,i){mr[gr++]=Co,mr[gr++]=Ql,Ql=t,Co=i}function Xm(t,i,s){bi[Ei++]=Ki,bi[Ei++]=Zi,bi[Ei++]=Ka,Ka=t;var l=Ki;t=Zi;var f=32-Fe(l)-1;l&=~(1<<f),s+=1;var m=32-Fe(i)+f;if(30<m){var S=f-f%5;m=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Ki=1<<32-Fe(i)+f|s<<f|l,Zi=m+t}else Ki=1<<m|s<<f|l,Zi=t}function hf(t){t.return!==null&&(ga(t,1),Xm(t,1,0))}function pf(t){for(;t===Ql;)Ql=mr[--gr],mr[gr]=null,Co=mr[--gr],mr[gr]=null;for(;t===Ka;)Ka=bi[--Ei],bi[Ei]=null,Zi=bi[--Ei],bi[Ei]=null,Ki=bi[--Ei],bi[Ei]=null}function Wm(t,i){bi[Ei++]=Ki,bi[Ei++]=Zi,bi[Ei++]=Ka,Ki=i.id,Zi=i.overflow,Ka=t}var On=null,Jt=null,Rt=!1,Za=null,Ti=!1,mf=Error(a(519));function Qa(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw No(Mi(i,t)),mf}function qm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[_n]=t,i[Un]=l,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<Jo.length;s++)xt(Jo[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),zn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),Ui(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||c_(i.textContent,s)?(l.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),l.onScroll!=null&&xt("scroll",i),l.onScrollEnd!=null&&xt("scrollend",i),l.onClick!=null&&(i.onclick=ha),i=!0):i=!1,i||Qa(t,!0)}function Ym(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:On=On.return}}function _r(t){if(t!==On)return!1;if(!Rt)return Ym(t),Rt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ud(t.type,t.memoizedProps)),s=!s),s&&Jt&&Qa(t),Ym(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=v_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=v_(t)}else i===27?(i=Jt,fs(t.type)?(t=Fd,Fd=null,Jt=t):Jt=i):Jt=On?Ri(t.stateNode.nextSibling):null;return!0}function Bs(){Jt=On=null,Rt=!1}function gf(){var t=Za;return t!==null&&(ti===null?ti=t:ti.push.apply(ti,t),Za=null),t}function No(t){Za===null?Za=[t]:Za.push(t)}var _f=P(null),Fs=null,_a=null;function Ja(t,i,s){Se(_f,i._currentValue),i._currentValue=s}function va(t){t._currentValue=_f.current,j(_f)}function vf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function xf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=f;for(var H=0;H<i.length;H++)if(C.context===i[H]){m.lanes|=s,C=m.alternate,C!==null&&(C.lanes|=s),vf(m.return,s,t),l||(S=null);break e}m=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,m=S.alternate,m!==null&&(m.lanes|=s),vf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function vr(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var C=f.type;ci(f.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(f===ye.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}f=f.return}t!==null&&xf(i,t,s,l),i.flags|=262144}function Jl(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zs(t){Fs=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pn(t){return jm(Fs,t)}function $l(t,i){return Fs===null&&zs(t),jm(t,i)}function jm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},_a===null){if(t===null)throw Error(a(308));_a=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else _a=_a.next=i;return s}var sS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},rS=r.unstable_scheduleCallback,oS=r.unstable_NormalPriority,xn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new sS,data:new Map,refCount:0}}function Do(t){t.refCount--,t.refCount===0&&rS(oS,function(){t.controller.abort()})}var Lo=null,Sf=0,xr=0,yr=null;function lS(t,i){if(Lo===null){var s=Lo=[];Sf=0,xr=Ed(),yr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Sf++,i.then(Km,Km),i}function Km(){if(--Sf===0&&Lo!==null){yr!==null&&(yr.status="fulfilled");var t=Lo;Lo=null,xr=0,yr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function cS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Zm=F.S;F.S=function(t,i){U0=kt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&lS(t,i),Zm!==null&&Zm(t,i)};var Hs=P(null);function Mf(){var t=Hs.current;return t!==null?t:Kt.pooledCache}function ec(t,i){i===null?Se(Hs,Hs.current):Se(Hs,i.pool)}function Qm(){var t=Mf();return t===null?null:{parent:xn._currentValue,pool:t}}var Sr=Error(a(460)),bf=Error(a(474)),tc=Error(a(542)),nc={then:function(){}};function Jm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $m(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ha,ha),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,tg(t),t;default:if(typeof i.status=="string")i.then(ha,ha);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,tg(t),t}throw Vs=i,Sr}}function Gs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Vs=s,Sr):s}}var Vs=null;function eg(){if(Vs===null)throw Error(a(459));var t=Vs;return Vs=null,t}function tg(t){if(t===Sr||t===tc)throw Error(a(483))}var Mr=null,Uo=0;function ic(t){var i=Uo;return Uo+=1,Mr===null&&(Mr=[]),$m(Mr,t,i)}function Oo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ac(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function ng(t){function i(Q,k){if(t){var te=Q.deletions;te===null?(Q.deletions=[k],Q.flags|=16):te.push(k)}}function s(Q,k){if(!t)return null;for(;k!==null;)i(Q,k),k=k.sibling;return null}function l(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function f(Q,k){return Q=ma(Q,k),Q.index=0,Q.sibling=null,Q}function m(Q,k,te){return Q.index=te,t?(te=Q.alternate,te!==null?(te=te.index,te<k?(Q.flags|=67108866,k):te):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,k,te,ve){return k===null||k.tag!==6?(k=ff(te,Q.mode,ve),k.return=Q,k):(k=f(k,te),k.return=Q,k)}function H(Q,k,te,ve){var et=te.type;return et===A?me(Q,k,te.props.children,ve,te.key):k!==null&&(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Gs(et)===k.type)?(k=f(k,te.props),Oo(k,te),k.return=Q,k):(k=Zl(te.type,te.key,te.props,null,Q.mode,ve),Oo(k,te),k.return=Q,k)}function ne(Q,k,te,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==te.containerInfo||k.stateNode.implementation!==te.implementation?(k=df(te,Q.mode,ve),k.return=Q,k):(k=f(k,te.children||[]),k.return=Q,k)}function me(Q,k,te,ve,et){return k===null||k.tag!==7?(k=Is(te,Q.mode,ve,et),k.return=Q,k):(k=f(k,te),k.return=Q,k)}function xe(Q,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ff(""+k,Q.mode,te),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return te=Zl(k.type,k.key,k.props,null,Q.mode,te),Oo(te,k),te.return=Q,te;case b:return k=df(k,Q.mode,te),k.return=Q,k;case T:return k=Gs(k),xe(Q,k,te)}if(Z(k)||K(k))return k=Is(k,Q.mode,te,null),k.return=Q,k;if(typeof k.then=="function")return xe(Q,ic(k),te);if(k.$$typeof===I)return xe(Q,$l(Q,k),te);ac(Q,k)}return null}function le(Q,k,te,ve){var et=k!==null?k.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return et!==null?null:C(Q,k,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case x:return te.key===et?H(Q,k,te,ve):null;case b:return te.key===et?ne(Q,k,te,ve):null;case T:return te=Gs(te),le(Q,k,te,ve)}if(Z(te)||K(te))return et!==null?null:me(Q,k,te,ve,null);if(typeof te.then=="function")return le(Q,k,ic(te),ve);if(te.$$typeof===I)return le(Q,k,$l(Q,te),ve);ac(Q,te)}return null}function ue(Q,k,te,ve,et){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Q=Q.get(te)||null,C(k,Q,""+ve,et);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case x:return Q=Q.get(ve.key===null?te:ve.key)||null,H(k,Q,ve,et);case b:return Q=Q.get(ve.key===null?te:ve.key)||null,ne(k,Q,ve,et);case T:return ve=Gs(ve),ue(Q,k,te,ve,et)}if(Z(ve)||K(ve))return Q=Q.get(te)||null,me(k,Q,ve,et,null);if(typeof ve.then=="function")return ue(Q,k,te,ic(ve),et);if(ve.$$typeof===I)return ue(Q,k,te,$l(k,ve),et);ac(k,ve)}return null}function We(Q,k,te,ve){for(var et=null,Ct=null,Ye=k,ft=k=0,Et=null;Ye!==null&&ft<te.length;ft++){Ye.index>ft?(Et=Ye,Ye=null):Et=Ye.sibling;var Nt=le(Q,Ye,te[ft],ve);if(Nt===null){Ye===null&&(Ye=Et);break}t&&Ye&&Nt.alternate===null&&i(Q,Ye),k=m(Nt,k,ft),Ct===null?et=Nt:Ct.sibling=Nt,Ct=Nt,Ye=Et}if(ft===te.length)return s(Q,Ye),Rt&&ga(Q,ft),et;if(Ye===null){for(;ft<te.length;ft++)Ye=xe(Q,te[ft],ve),Ye!==null&&(k=m(Ye,k,ft),Ct===null?et=Ye:Ct.sibling=Ye,Ct=Ye);return Rt&&ga(Q,ft),et}for(Ye=l(Ye);ft<te.length;ft++)Et=ue(Ye,Q,ft,te[ft],ve),Et!==null&&(t&&Et.alternate!==null&&Ye.delete(Et.key===null?ft:Et.key),k=m(Et,k,ft),Ct===null?et=Et:Ct.sibling=Et,Ct=Et);return t&&Ye.forEach(function(gs){return i(Q,gs)}),Rt&&ga(Q,ft),et}function tt(Q,k,te,ve){if(te==null)throw Error(a(151));for(var et=null,Ct=null,Ye=k,ft=k=0,Et=null,Nt=te.next();Ye!==null&&!Nt.done;ft++,Nt=te.next()){Ye.index>ft?(Et=Ye,Ye=null):Et=Ye.sibling;var gs=le(Q,Ye,Nt.value,ve);if(gs===null){Ye===null&&(Ye=Et);break}t&&Ye&&gs.alternate===null&&i(Q,Ye),k=m(gs,k,ft),Ct===null?et=gs:Ct.sibling=gs,Ct=gs,Ye=Et}if(Nt.done)return s(Q,Ye),Rt&&ga(Q,ft),et;if(Ye===null){for(;!Nt.done;ft++,Nt=te.next())Nt=xe(Q,Nt.value,ve),Nt!==null&&(k=m(Nt,k,ft),Ct===null?et=Nt:Ct.sibling=Nt,Ct=Nt);return Rt&&ga(Q,ft),et}for(Ye=l(Ye);!Nt.done;ft++,Nt=te.next())Nt=ue(Ye,Q,ft,Nt.value,ve),Nt!==null&&(t&&Nt.alternate!==null&&Ye.delete(Nt.key===null?ft:Nt.key),k=m(Nt,k,ft),Ct===null?et=Nt:Ct.sibling=Nt,Ct=Nt);return t&&Ye.forEach(function(yM){return i(Q,yM)}),Rt&&ga(Q,ft),et}function qt(Q,k,te,ve){if(typeof te=="object"&&te!==null&&te.type===A&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case x:e:{for(var et=te.key;k!==null;){if(k.key===et){if(et=te.type,et===A){if(k.tag===7){s(Q,k.sibling),ve=f(k,te.props.children),ve.return=Q,Q=ve;break e}}else if(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&Gs(et)===k.type){s(Q,k.sibling),ve=f(k,te.props),Oo(ve,te),ve.return=Q,Q=ve;break e}s(Q,k);break}else i(Q,k);k=k.sibling}te.type===A?(ve=Is(te.props.children,Q.mode,ve,te.key),ve.return=Q,Q=ve):(ve=Zl(te.type,te.key,te.props,null,Q.mode,ve),Oo(ve,te),ve.return=Q,Q=ve)}return S(Q);case b:e:{for(et=te.key;k!==null;){if(k.key===et)if(k.tag===4&&k.stateNode.containerInfo===te.containerInfo&&k.stateNode.implementation===te.implementation){s(Q,k.sibling),ve=f(k,te.children||[]),ve.return=Q,Q=ve;break e}else{s(Q,k);break}else i(Q,k);k=k.sibling}ve=df(te,Q.mode,ve),ve.return=Q,Q=ve}return S(Q);case T:return te=Gs(te),qt(Q,k,te,ve)}if(Z(te))return We(Q,k,te,ve);if(K(te)){if(et=K(te),typeof et!="function")throw Error(a(150));return te=et.call(te),tt(Q,k,te,ve)}if(typeof te.then=="function")return qt(Q,k,ic(te),ve);if(te.$$typeof===I)return qt(Q,k,$l(Q,te),ve);ac(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,k!==null&&k.tag===6?(s(Q,k.sibling),ve=f(k,te),ve.return=Q,Q=ve):(s(Q,k),ve=ff(te,Q.mode,ve),ve.return=Q,Q=ve),S(Q)):s(Q,k)}return function(Q,k,te,ve){try{Uo=0;var et=qt(Q,k,te,ve);return Mr=null,et}catch(Ye){if(Ye===Sr||Ye===tc)throw Ye;var Ct=ui(29,Ye,null,Q.mode);return Ct.lanes=ve,Ct.return=Q,Ct}finally{}}}var ks=ng(!0),ig=ng(!1),$a=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function es(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ts(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Lt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Kl(t),Hm(t,null,s),i}return jl(t,l,i,s),Kl(t)}function Po(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,si(t,s)}}function Af(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Rf=!1;function Io(){if(Rf){var t=yr;if(t!==null)throw t}}function Bo(t,i,s,l){Rf=!1;var f=t.updateQueue;$a=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var H=C,ne=H.next;H.next=null,S===null?m=ne:S.next=ne,S=H;var me=t.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==S&&(C===null?me.firstBaseUpdate=ne:C.next=ne,me.lastBaseUpdate=H))}if(m!==null){var xe=f.baseState;S=0,me=ne=H=null,C=m;do{var le=C.lane&-536870913,ue=le!==C.lane;if(ue?(bt&le)===le:(l&le)===le){le!==0&&le===xr&&(Rf=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var We=t,tt=C;le=i;var qt=s;switch(tt.tag){case 1:if(We=tt.payload,typeof We=="function"){xe=We.call(qt,xe,le);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=tt.payload,le=typeof We=="function"?We.call(qt,xe,le):We,le==null)break e;xe=_({},xe,le);break e;case 2:$a=!0}}le=C.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=f.callbacks,ue===null?f.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(ne=me=ue,H=xe):me=me.next=ue,S|=le;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;ue=C,C=ue.next,ue.next=null,f.lastBaseUpdate=ue,f.shared.pending=null}}while(!0);me===null&&(H=xe),f.baseState=H,f.firstBaseUpdate=ne,f.lastBaseUpdate=me,m===null&&(f.shared.lanes=0),rs|=S,t.lanes=S,t.memoizedState=xe}}function ag(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function sg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ag(s[t],i)}var br=P(null),sc=P(0);function rg(t,i){t=Ra,Se(sc,t),Se(br,i),Ra=t|i.baseLanes}function wf(){Se(sc,Ra),Se(br,br.current)}function Cf(){Ra=sc.current,j(br),j(sc)}var fi=P(null),Ai=null;function ns(t){var i=t.alternate;Se(pn,pn.current&1),Se(fi,t),Ai===null&&(i===null||br.current!==null||i.memoizedState!==null)&&(Ai=t)}function Nf(t){Se(pn,pn.current),Se(fi,t),Ai===null&&(Ai=t)}function og(t){t.tag===22?(Se(pn,pn.current),Se(fi,t),Ai===null&&(Ai=t)):is()}function is(){Se(pn,pn.current),Se(fi,fi.current)}function di(t){j(fi),Ai===t&&(Ai=null),j(pn)}var pn=P(0);function rc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Id(s)||Bd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xa=0,ut=null,Xt=null,yn=null,oc=!1,Er=!1,Xs=!1,lc=0,Fo=0,Tr=null,uS=0;function un(){throw Error(a(321))}function Df(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ci(t[s],i[s]))return!1;return!0}function Lf(t,i,s,l,f,m){return xa=m,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?Xg:Yf,Xs=!1,m=s(l,f),Xs=!1,Er&&(m=cg(i,s,l,f)),lg(t),m}function lg(t){F.H=Go;var i=Xt!==null&&Xt.next!==null;if(xa=0,yn=Xt=ut=null,oc=!1,Fo=0,Tr=null,i)throw Error(a(300));t===null||Sn||(t=t.dependencies,t!==null&&Jl(t)&&(Sn=!0))}function cg(t,i,s,l){ut=t;var f=0;do{if(Er&&(Tr=null),Fo=0,Er=!1,25<=f)throw Error(a(301));if(f+=1,yn=Xt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=Wg,m=i(s,l)}while(Er);return m}function fS(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?zo(i):i,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(ut.flags|=1024),i}function Uf(){var t=lc!==0;return lc=0,t}function Of(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Pf(t){if(oc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}oc=!1}xa=0,yn=Xt=ut=null,Er=!1,Fo=lc=0,Tr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?ut.memoizedState=yn=t:yn=yn.next=t,yn}function mn(){if(Xt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=yn===null?ut.memoizedState:yn.next;if(i!==null)yn=i,Xt=t;else{if(t===null)throw ut.alternate===null?Error(a(467)):Error(a(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},yn===null?ut.memoizedState=yn=t:yn=yn.next=t}return yn}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(t){var i=Fo;return Fo+=1,Tr===null&&(Tr=[]),t=$m(Tr,t,i),i=ut,(yn===null?i.memoizedState:yn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Xg:Yf),t}function uc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zo(t);if(t.$$typeof===I)return Pn(t)}throw Error(a(438,String(t)))}function If(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=cc(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=V;return i.index++,s}function ya(t,i){return typeof i=="function"?i(t):i}function fc(t){var i=mn();return Bf(i,Xt,t)}function Bf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var C=S=null,H=null,ne=i,me=!1;do{var xe=ne.lane&-536870913;if(xe!==ne.lane?(bt&xe)===xe:(xa&xe)===xe){var le=ne.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),xe===xr&&(me=!0);else if((xa&le)===le){ne=ne.next,le===xr&&(me=!0);continue}else xe={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=xe,S=m):H=H.next=xe,ut.lanes|=le,rs|=le;xe=ne.action,Xs&&s(m,xe),m=ne.hasEagerState?ne.eagerState:s(m,xe)}else le={lane:xe,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=le,S=m):H=H.next=le,ut.lanes|=xe,rs|=xe;ne=ne.next}while(ne!==null&&ne!==i);if(H===null?S=m:H.next=C,!ci(m,t.memoizedState)&&(Sn=!0,me&&(s=yr,s!==null)))throw s;t.memoizedState=m,t.baseState=S,t.baseQueue=H,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ff(t){var i=mn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do m=t(m,S.action),S=S.next;while(S!==f);ci(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function ug(t,i,s){var l=ut,f=mn(),m=Rt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!ci((Xt||f).memoizedState,s);if(S&&(f.memoizedState=s,Sn=!0),f=f.queue,Gf(hg.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||yn!==null&&yn.memoizedState.tag&1){if(l.flags|=2048,Ar(9,{destroy:void 0},dg.bind(null,l,f,s,i),null),Kt===null)throw Error(a(349));m||(xa&127)!==0||fg(l,i,s)}return s}function fg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=cc(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function dg(t,i,s,l){i.value=s,i.getSnapshot=l,pg(i)&&mg(t)}function hg(t,i,s){return s(function(){pg(i)&&mg(t)})}function pg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ci(t,s)}catch{return!0}}function mg(t){var i=Ps(t,2);i!==null&&ni(i,t,2)}function zf(t){var i=Xn();if(typeof t=="function"){var s=t;if(t=s(),Xs){Re(!0);try{s()}finally{Re(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},i}function gg(t,i,s,l){return t.baseState=s,Bf(t,Xt,typeof l=="function"?l:ya)}function dS(t,i,s,l,f){if(pc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};F.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,_g(i,m)):(m.next=s.next,i.pending=s.next=m)}}function _g(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=F.T,S={};F.T=S;try{var C=s(f,l),H=F.S;H!==null&&H(S,C),vg(t,i,C)}catch(ne){Hf(t,i,ne)}finally{m!==null&&S.types!==null&&(m.types=S.types),F.T=m}}else try{m=s(f,l),vg(t,i,m)}catch(ne){Hf(t,i,ne)}}function vg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){xg(t,i,l)},function(l){return Hf(t,i,l)}):xg(t,i,s)}function xg(t,i,s){i.status="fulfilled",i.value=s,yg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,_g(t,s)))}function Hf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,yg(i),i=i.next;while(i!==l)}t.action=null}function yg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Sg(t,i){return i}function Mg(t,i){if(Rt){var s=Kt.formState;if(s!==null){e:{var l=ut;if(Rt){if(Jt){t:{for(var f=Jt,m=Ti;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Jt=Ri(f.nextSibling),l=f.data==="F!";break e}}Qa(l)}l=!1}l&&(i=s[0])}}return s=Xn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sg,lastRenderedState:i},s.queue=l,s=Gg.bind(null,ut,l),l.dispatch=s,l=zf(!1),m=qf.bind(null,ut,!1,l.queue),l=Xn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=dS.bind(null,ut,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function bg(t){var i=mn();return Eg(i,Xt,t)}function Eg(t,i,s){if(i=Bf(t,i,Sg)[0],t=fc(ya)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=zo(i)}catch(S){throw S===Sr?tc:S}else l=i;i=mn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,Ar(9,{destroy:void 0},hS.bind(null,f,s),null)),[l,m,t]}function hS(t,i){t.action=i}function Tg(t){var i=mn(),s=Xt;if(s!==null)return Eg(i,s,t);mn(),i=i.memoizedState,s=mn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Ar(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=cc(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Ag(){return mn().memoizedState}function dc(t,i,s,l){var f=Xn();ut.flags|=t,f.memoizedState=Ar(1|i,{destroy:void 0},s,l===void 0?null:l)}function hc(t,i,s,l){var f=mn();l=l===void 0?null:l;var m=f.memoizedState.inst;Xt!==null&&l!==null&&Df(l,Xt.memoizedState.deps)?f.memoizedState=Ar(i,m,s,l):(ut.flags|=t,f.memoizedState=Ar(1|i,m,s,l))}function Rg(t,i){dc(8390656,8,t,i)}function Gf(t,i){hc(2048,8,t,i)}function pS(t){ut.flags|=4;var i=ut.updateQueue;if(i===null)i=cc(),ut.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function wg(t){var i=mn().memoizedState;return pS({ref:i,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Cg(t,i){return hc(4,2,t,i)}function Ng(t,i){return hc(4,4,t,i)}function Dg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Lg(t,i,s){s=s!=null?s.concat([t]):null,hc(4,4,Dg.bind(null,i,t),s)}function Vf(){}function Ug(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Df(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Og(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Df(i,l[1]))return l[0];if(l=t(),Xs){Re(!0);try{t()}finally{Re(!1)}}return s.memoizedState=[l,i],l}function kf(t,i,s){return s===void 0||(xa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=P0(),ut.lanes|=t,rs|=t,s)}function Pg(t,i,s,l){return ci(s,i)?s:br.current!==null?(t=kf(t,s,l),ci(t,i)||(Sn=!0),t):(xa&42)===0||(xa&1073741824)!==0&&(bt&261930)===0?(Sn=!0,t.memoizedState=s):(t=P0(),ut.lanes|=t,rs|=t,i)}function Ig(t,i,s,l,f){var m=G.p;G.p=m!==0&&8>m?m:8;var S=F.T,C={};F.T=C,qf(t,!1,i,s);try{var H=f(),ne=F.S;if(ne!==null&&ne(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=cS(H,l);Ho(t,i,me,mi(t))}else Ho(t,i,l,mi(t))}catch(xe){Ho(t,i,{then:function(){},status:"rejected",reason:xe},mi())}finally{G.p=m,S!==null&&C.types!==null&&(S.types=C.types),F.T=S}}function mS(){}function Xf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Bg(t).queue;Ig(t,f,i,ee,s===null?mS:function(){return Fg(t),s(l)})}function Bg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:ee},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Fg(t){var i=Bg(t);i.next===null&&(i=t.alternate.memoizedState),Ho(t,i.next.queue,{},mi())}function Wf(){return Pn(il)}function zg(){return mn().memoizedState}function Hg(){return mn().memoizedState}function gS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=mi();t=es(s);var l=ts(i,t,s);l!==null&&(ni(l,i,s),Po(l,i,s)),i={cache:yf()},t.payload=i;return}i=i.return}}function _S(t,i,s){var l=mi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},pc(t)?Vg(i,s):(s=cf(t,i,s,l),s!==null&&(ni(s,t,l),kg(s,i,l)))}function Gg(t,i,s){var l=mi();Ho(t,i,s,l)}function Ho(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(pc(t))Vg(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,C=m(S,s);if(f.hasEagerState=!0,f.eagerState=C,ci(C,S))return jl(t,i,f,0),Kt===null&&Yl(),!1}catch{}finally{}if(s=cf(t,i,f,l),s!==null)return ni(s,t,l),kg(s,i,l),!0}return!1}function qf(t,i,s,l){if(l={lane:2,revertLane:Ed(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(i)throw Error(a(479))}else i=cf(t,s,l,2),i!==null&&ni(i,t,2)}function pc(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function Vg(t,i){Er=oc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function kg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,si(t,s)}}var Go={readContext:Pn,use:uc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};Go.useEffectEvent=un;var Xg={readContext:Pn,use:uc,useCallback:function(t,i){return Xn().memoizedState=[t,i===void 0?null:i],t},useContext:Pn,useEffect:Rg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,dc(4194308,4,Dg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return dc(4194308,4,t,i)},useInsertionEffect:function(t,i){dc(4,2,t,i)},useMemo:function(t,i){var s=Xn();i=i===void 0?null:i;var l=t();if(Xs){Re(!0);try{t()}finally{Re(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Xn();if(s!==void 0){var f=s(i);if(Xs){Re(!0);try{s(i)}finally{Re(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=_S.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=Xn();return t={current:t},i.memoizedState=t},useState:function(t){t=zf(t);var i=t.queue,s=Gg.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Vf,useDeferredValue:function(t,i){var s=Xn();return kf(s,t,i)},useTransition:function(){var t=zf(!1);return t=Ig.bind(null,ut,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ut,f=Xn();if(Rt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Kt===null)throw Error(a(349));(bt&127)!==0||fg(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Rg(hg.bind(null,l,m,t),[t]),l.flags|=2048,Ar(9,{destroy:void 0},dg.bind(null,l,m,s,i),null),s},useId:function(){var t=Xn(),i=Kt.identifierPrefix;if(Rt){var s=Zi,l=Ki;s=(l&~(1<<32-Fe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=lc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=uS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Wf,useFormState:Mg,useActionState:Mg,useOptimistic:function(t){var i=Xn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=qf.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:If,useCacheRefresh:function(){return Xn().memoizedState=gS.bind(null,ut)},useEffectEvent:function(t){var i=Xn(),s={impl:t};return i.memoizedState=s,function(){if((Lt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Yf={readContext:Pn,use:uc,useCallback:Ug,useContext:Pn,useEffect:Gf,useImperativeHandle:Lg,useInsertionEffect:Cg,useLayoutEffect:Ng,useMemo:Og,useReducer:fc,useRef:Ag,useState:function(){return fc(ya)},useDebugValue:Vf,useDeferredValue:function(t,i){var s=mn();return Pg(s,Xt.memoizedState,t,i)},useTransition:function(){var t=fc(ya)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:zo(t),i]},useSyncExternalStore:ug,useId:zg,useHostTransitionStatus:Wf,useFormState:bg,useActionState:bg,useOptimistic:function(t,i){var s=mn();return gg(s,Xt,t,i)},useMemoCache:If,useCacheRefresh:Hg};Yf.useEffectEvent=wg;var Wg={readContext:Pn,use:uc,useCallback:Ug,useContext:Pn,useEffect:Gf,useImperativeHandle:Lg,useInsertionEffect:Cg,useLayoutEffect:Ng,useMemo:Og,useReducer:Ff,useRef:Ag,useState:function(){return Ff(ya)},useDebugValue:Vf,useDeferredValue:function(t,i){var s=mn();return Xt===null?kf(s,t,i):Pg(s,Xt.memoizedState,t,i)},useTransition:function(){var t=Ff(ya)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:zo(t),i]},useSyncExternalStore:ug,useId:zg,useHostTransitionStatus:Wf,useFormState:Tg,useActionState:Tg,useOptimistic:function(t,i){var s=mn();return Xt!==null?gg(s,Xt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:If,useCacheRefresh:Hg};Wg.useEffectEvent=wg;function jf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Kf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=mi(),f=es(l);f.payload=i,s!=null&&(f.callback=s),i=ts(t,f,l),i!==null&&(ni(i,t,l),Po(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=mi(),f=es(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ts(t,f,l),i!==null&&(ni(i,t,l),Po(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=mi(),l=es(s);l.tag=2,i!=null&&(l.callback=i),i=ts(t,l,s),i!==null&&(ni(i,t,s),Po(i,t,s))}};function qg(t,i,s,l,f,m,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,S):i.prototype&&i.prototype.isPureReactComponent?!Ro(s,l)||!Ro(f,m):!0}function Yg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Kf.enqueueReplaceState(i,i.state,null)}function Ws(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function jg(t){ql(t)}function Kg(t){console.error(t)}function Zg(t){ql(t)}function mc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Qg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Zf(t,i,s){return s=es(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(t,i)},s}function Jg(t){return t=es(t),t.tag=3,t}function $g(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){Qg(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Qg(i,s,l),typeof f!="function"&&(os===null?os=new Set([this]):os.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function vS(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&vr(i,s,f,!0),s=fi.current,s!==null){switch(s.tag){case 31:case 13:return Ai===null?Rc():s.alternate===null&&fn===0&&(fn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===nc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Sd(t,l,f)),!1;case 22:return s.flags|=65536,l===nc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Sd(t,l,f)),!1}throw Error(a(435,s.tag))}return Sd(t,l,f),Rc(),!1}if(Rt)return i=fi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==mf&&(t=Error(a(422),{cause:l}),No(Mi(t,s)))):(l!==mf&&(i=Error(a(423),{cause:l}),No(Mi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Mi(l,s),f=Zf(t.stateNode,l,f),Af(t,f),fn!==4&&(fn=2)),!1;var m=Error(a(520),{cause:l});if(m=Mi(m,s),Ko===null?Ko=[m]:Ko.push(m),fn!==4&&(fn=2),i===null)return!0;l=Mi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Zf(s.stateNode,l,t),Af(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(os===null||!os.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Jg(f),$g(f,t,s,l),Af(s,f),!1}s=s.return}while(s!==null);return!1}var Qf=Error(a(461)),Sn=!1;function In(t,i,s,l){i.child=t===null?ig(i,null,s,l):ks(i,t.child,s,l)}function e0(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return zs(i),l=Lf(t,i,s,S,m,f),C=Uf(),t!==null&&!Sn?(Of(t,i,f),Sa(t,i,f)):(Rt&&C&&hf(i),i.flags|=1,In(t,i,l,f),i.child)}function t0(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!uf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,n0(t,i,m,l,f)):(t=Zl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!sd(t,f)){var S=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ro,s(S,l)&&t.ref===i.ref)return Sa(t,i,f)}return i.flags|=1,t=ma(m,l),t.ref=i.ref,t.return=i,i.child=t}function n0(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(Ro(m,l)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=l=m,sd(t,f))(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,Sa(t,i,f)}return Jf(t,i,s,l,f)}function i0(t,i,s,l){var f=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return a0(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ec(i,m!==null?m.cachePool:null),m!==null?rg(i,m):wf(),og(i);else return l=i.lanes=536870912,a0(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(ec(i,m.cachePool),rg(i,m),is(),i.memoizedState=null):(t!==null&&ec(i,null),wf(),is());return In(t,i,f,s),i.child}function Vo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function a0(t,i,s,l,f){var m=Mf();return m=m===null?null:{parent:xn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&ec(i,null),wf(),og(i),t!==null&&vr(t,i,l,!0),i.childLanes=f,null}function gc(t,i){return i=vc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function s0(t,i,s){return ks(i,t.child,null,s),t=gc(i,i.pendingProps),t.flags|=2,di(i),i.memoizedState=null,t}function xS(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=gc(i,l),i.lanes=536870912,Vo(null,t);if(Nf(i),(t=Jt)?(t=__(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=Vm(t),s.return=i,i.child=s,On=i,Jt=null)):t=null,t===null)throw Qa(i);return i.lanes=536870912,null}return gc(i,l)}var m=t.memoizedState;if(m!==null){var S=m.dehydrated;if(Nf(i),f)if(i.flags&256)i.flags&=-257,i=s0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Sn||vr(t,i,s,!1),f=(s&t.childLanes)!==0,Sn||f){if(l=Kt,l!==null&&(S=ri(l,s),S!==0&&S!==m.retryLane))throw m.retryLane=S,Ps(t,S),ni(l,t,S),Qf;Rc(),i=s0(t,i,s)}else t=m.treeContext,Jt=Ri(S.nextSibling),On=i,Rt=!0,Za=null,Ti=!1,t!==null&&Wm(i,t),i=gc(i,l),i.flags|=4096;return i}return t=ma(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function _c(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Jf(t,i,s,l,f){return zs(i),s=Lf(t,i,s,l,void 0,f),l=Uf(),t!==null&&!Sn?(Of(t,i,f),Sa(t,i,f)):(Rt&&l&&hf(i),i.flags|=1,In(t,i,s,f),i.child)}function r0(t,i,s,l,f,m){return zs(i),i.updateQueue=null,s=cg(i,l,s,f),lg(t),l=Uf(),t!==null&&!Sn?(Of(t,i,m),Sa(t,i,m)):(Rt&&l&&hf(i),i.flags|=1,In(t,i,s,m),i.child)}function o0(t,i,s,l,f){if(zs(i),i.stateNode===null){var m=pr,S=s.contextType;typeof S=="object"&&S!==null&&(m=Pn(S)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Kf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Ef(i),S=s.contextType,m.context=typeof S=="object"&&S!==null?Pn(S):pr,m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(jf(i,s,S,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&Kf.enqueueReplaceState(m,m.state,null),Bo(i,l,m,f),Io(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var C=i.memoizedProps,H=Ws(s,C);m.props=H;var ne=m.context,me=s.contextType;S=pr,typeof me=="object"&&me!==null&&(S=Pn(me));var xe=s.getDerivedStateFromProps;me=typeof xe=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,me||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||ne!==S)&&Yg(i,m,l,S),$a=!1;var le=i.memoizedState;m.state=le,Bo(i,l,m,f),Io(),ne=i.memoizedState,C||le!==ne||$a?(typeof xe=="function"&&(jf(i,s,xe,l),ne=i.memoizedState),(H=$a||qg(i,s,H,l,le,ne,S))?(me||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ne),m.props=l,m.state=ne,m.context=S,l=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Tf(t,i),S=i.memoizedProps,me=Ws(s,S),m.props=me,xe=i.pendingProps,le=m.context,ne=s.contextType,H=pr,typeof ne=="object"&&ne!==null&&(H=Pn(ne)),C=s.getDerivedStateFromProps,(ne=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==xe||le!==H)&&Yg(i,m,l,H),$a=!1,le=i.memoizedState,m.state=le,Bo(i,l,m,f),Io();var ue=i.memoizedState;S!==xe||le!==ue||$a||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof C=="function"&&(jf(i,s,C,l),ue=i.memoizedState),(me=$a||qg(i,s,me,l,le,ue,H)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(ne||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ue,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ue,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ue),m.props=l,m.state=ue,m.context=H,l=me):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,_c(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=ks(i,t.child,null,f),i.child=ks(i,null,s,f)):In(t,i,s,f),i.memoizedState=m.state,t=i.child):t=Sa(t,i,f),t}function l0(t,i,s,l){return Bs(),i.flags|=256,In(t,i,s,l),i.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ed(t){return{baseLanes:t,cachePool:Qm()}}function td(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=pi),t}function c0(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Rt){if(f?ns(i):is(),(t=Jt)?(t=__(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:Ki,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=Vm(t),s.return=i,i.child=s,On=i,Jt=null)):t=null,t===null)throw Qa(i);return Bd(t)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(is(),f=i.mode,C=vc({mode:"hidden",children:C},f),l=Is(l,f,s,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=ed(s),l.childLanes=td(t,S,s),i.memoizedState=$f,Vo(null,l)):(ns(i),nd(i,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(m)i.flags&256?(ns(i),i.flags&=-257,i=id(t,i,s)):i.memoizedState!==null?(is(),i.child=t.child,i.flags|=128,i=null):(is(),C=l.fallback,f=i.mode,l=vc({mode:"visible",children:l.children},f),C=Is(C,f,s,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,ks(i,t.child,null,s),l=i.child,l.memoizedState=ed(s),l.childLanes=td(t,S,s),i.memoizedState=$f,i=Vo(null,l));else if(ns(i),Bd(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var ne=S.dgst;S=ne,l=Error(a(419)),l.stack="",l.digest=S,No({value:l,source:null,stack:null}),i=id(t,i,s)}else if(Sn||vr(t,i,s,!1),S=(s&t.childLanes)!==0,Sn||S){if(S=Kt,S!==null&&(l=ri(S,s),l!==0&&l!==H.retryLane))throw H.retryLane=l,Ps(t,l),ni(S,t,l),Qf;Id(C)||Rc(),i=id(t,i,s)}else Id(C)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,Jt=Ri(C.nextSibling),On=i,Rt=!0,Za=null,Ti=!1,t!==null&&Wm(i,t),i=nd(i,l.children),i.flags|=4096);return i}return f?(is(),C=l.fallback,f=i.mode,H=t.child,ne=H.sibling,l=ma(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,ne!==null?C=ma(ne,C):(C=Is(C,f,s,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,Vo(null,l),l=i.child,C=t.child.memoizedState,C===null?C=ed(s):(f=C.cachePool,f!==null?(H=xn._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=Qm(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=td(t,S,s),i.memoizedState=$f,Vo(t.child,l)):(ns(i),s=t.child,t=s.sibling,s=ma(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function nd(t,i){return i=vc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function vc(t,i){return t=ui(22,t,null,i),t.lanes=0,t}function id(t,i,s){return ks(i,t.child,null,s),t=nd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function u0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vf(t.return,i,s)}function ad(t,i,s,l,f,m){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=m)}function f0(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var S=pn.current,C=(S&2)!==0;if(C?(S=S&1|2,i.flags|=128):S&=1,Se(pn,S),In(t,i,l,s),l=Rt?Co:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,s,i);else if(t.tag===19)u0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),ad(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&rc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}ad(i,!0,s,null,m,l);break;case"together":ad(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Sa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),rs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(vr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ma(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ma(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function sd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function yS(t,i,s){switch(i.tag){case 3:Ee(i,i.stateNode.containerInfo),Ja(i,xn,t.memoizedState.cache),Bs();break;case 27:case 5:it(i);break;case 4:Ee(i,i.stateNode.containerInfo);break;case 10:Ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Nf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ns(i),i.flags|=128,null):(s&i.child.childLanes)!==0?c0(t,i,s):(ns(i),t=Sa(t,i,s),t!==null?t.sibling:null);ns(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(vr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return f0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(pn,pn.current),l)break;return null;case 22:return i.lanes=0,i0(t,i,s,i.pendingProps);case 24:Ja(i,xn,t.memoizedState.cache)}return Sa(t,i,s)}function d0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Sn=!0;else{if(!sd(t,s)&&(i.flags&128)===0)return Sn=!1,yS(t,i,s);Sn=(t.flags&131072)!==0}else Sn=!1,Rt&&(i.flags&1048576)!==0&&Xm(i,Co,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Gs(i.elementType),i.type=t,typeof t=="function")uf(t)?(l=Ws(t,l),i.tag=1,i=o0(null,i,t,l,s)):(i.tag=0,i=Jf(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===R){i.tag=11,i=e0(null,i,t,l,s);break e}else if(f===D){i.tag=14,i=t0(null,i,t,l,s);break e}}throw i=_e(t)||t,Error(a(306,i,""))}}return i;case 0:return Jf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Ws(l,i.pendingProps),o0(t,i,l,f,s);case 3:e:{if(Ee(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Tf(t,i),Bo(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Ja(i,xn,l),l!==m.cache&&xf(i,[xn],s,!0),Io(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=l0(t,i,l,s);break e}else if(l!==f){f=Mi(Error(a(424)),i),No(f),i=l0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=Ri(t.firstChild),On=i,Rt=!0,Za=null,Ti=!0,s=ig(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Bs(),l===f){i=Sa(t,i,s);break e}In(t,i,l,s)}i=i.child}return i;case 26:return _c(t,i),t===null?(s=b_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Rt||(s=i.type,t=i.pendingProps,l=Oc(se.current).createElement(s),l[_n]=i,l[Un]=t,Bn(l,s,t),vn(l),i.stateNode=l):i.memoizedState=b_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return it(i),t===null&&Rt&&(l=i.stateNode=y_(i.type,i.pendingProps,se.current),On=i,Ti=!0,f=Jt,fs(i.type)?(Fd=f,Jt=Ri(l.firstChild)):Jt=f),In(t,i,i.pendingProps.children,s),_c(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Rt&&((f=l=Jt)&&(l=ZS(l,i.type,i.pendingProps,Ti),l!==null?(i.stateNode=l,On=i,Jt=Ri(l.firstChild),Ti=!1,f=!0):f=!1),f||Qa(i)),it(i),f=i.type,m=i.pendingProps,S=t!==null?t.memoizedProps:null,l=m.children,Ud(f,m)?l=null:S!==null&&Ud(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Lf(t,i,fS,null,null,s),il._currentValue=f),_c(t,i),In(t,i,l,s),i.child;case 6:return t===null&&Rt&&((t=s=Jt)&&(s=QS(s,i.pendingProps,Ti),s!==null?(i.stateNode=s,On=i,Jt=null,t=!0):t=!1),t||Qa(i)),null;case 13:return c0(t,i,s);case 4:return Ee(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ks(i,null,l,s):In(t,i,l,s),i.child;case 11:return e0(t,i,i.type,i.pendingProps,s);case 7:return In(t,i,i.pendingProps,s),i.child;case 8:return In(t,i,i.pendingProps.children,s),i.child;case 12:return In(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ja(i,i.type,l.value),In(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,zs(i),f=Pn(f),l=l(f),i.flags|=1,In(t,i,l,s),i.child;case 14:return t0(t,i,i.type,i.pendingProps,s);case 15:return n0(t,i,i.type,i.pendingProps,s);case 19:return f0(t,i,s);case 31:return xS(t,i,s);case 22:return i0(t,i,s,i.pendingProps);case 24:return zs(i),l=Pn(xn),t===null?(f=Mf(),f===null&&(f=Kt,m=yf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Ef(i),Ja(i,xn,f)):((t.lanes&s)!==0&&(Tf(t,i),Bo(i,null,null,s),Io()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ja(i,xn,l)):(l=m.cache,Ja(i,xn,l),l!==f.cache&&xf(i,[xn],s,!0))),In(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ma(t){t.flags|=4}function rd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(z0())t.flags|=8192;else throw Vs=nc,bf}else t.flags&=-16777217}function h0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!w_(i))if(z0())t.flags|=8192;else throw Vs=nc,bf}function xc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Me():536870912,t.lanes|=i,Nr|=i)}function ko(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function $t(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function SS(t,i,s){var l=i.pendingProps;switch(pf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return $t(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),va(xn),He(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(_r(i)?Ma(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gf())),$t(i),null;case 26:var f=i.type,m=i.memoizedState;return t===null?(Ma(i),m!==null?($t(i),h0(i,m)):($t(i),rd(i,f,null,l,s))):m?m!==t.memoizedState?(Ma(i),$t(i),h0(i,m)):($t(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ma(i),$t(i),rd(i,f,t,l,s)),null;case 27:if(Qe(i),s=se.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ma(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $t(i),null}t=we.current,_r(i)?qm(i):(t=y_(f,l,s),i.stateNode=t,Ma(i))}return $t(i),null;case 5:if(Qe(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ma(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $t(i),null}if(m=we.current,_r(i))qm(i);else{var S=Oc(se.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}m[_n]=i,m[Un]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=m;e:switch(Bn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ma(i)}}return $t(i),rd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ma(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=se.current,_r(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[_n]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||c_(t.nodeValue,s)),t||Qa(i,!0)}else t=Oc(t).createTextNode(l),t[_n]=i,i.stateNode=t}return $t(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=_r(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),t=!1}else s=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(di(i),i):(di(i),null);if((i.flags&128)!==0)throw Error(a(558))}return $t(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=_r(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),f=!1}else f=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(di(i),i):(di(i),null)}return di(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),xc(i,i.updateQueue),$t(i),null);case 4:return He(),t===null&&wd(i.stateNode.containerInfo),$t(i),null;case 10:return va(i.type),$t(i),null;case 19:if(j(pn),l=i.memoizedState,l===null)return $t(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)ko(l,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=rc(t),m!==null){for(i.flags|=128,ko(l,!1),t=m.updateQueue,i.updateQueue=t,xc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Gm(s,t),s=s.sibling;return Se(pn,pn.current&1|2),Rt&&ga(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&kt()>Ec&&(i.flags|=128,f=!0,ko(l,!1),i.lanes=4194304)}else{if(!f)if(t=rc(m),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,xc(i,t),ko(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Rt)return $t(i),null}else 2*kt()-l.renderingStartTime>Ec&&s!==536870912&&(i.flags|=128,f=!0,ko(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=kt(),t.sibling=null,s=pn.current,Se(pn,f?s&1|2:s&1),Rt&&ga(i,l.treeForkCount),t):($t(i),null);case 22:case 23:return di(i),Cf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),s=i.updateQueue,s!==null&&xc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&j(Hs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),va(xn),$t(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function MS(t,i){switch(pf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return va(xn),He(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Qe(i),null;case 31:if(i.memoizedState!==null){if(di(i),i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(di(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return j(pn),null;case 4:return He(),null;case 10:return va(i.type),null;case 22:case 23:return di(i),Cf(),t!==null&&j(Hs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return va(xn),null;case 25:return null;default:return null}}function p0(t,i){switch(pf(i),i.tag){case 3:va(xn),He();break;case 26:case 27:case 5:Qe(i);break;case 4:He();break;case 31:i.memoizedState!==null&&di(i);break;case 13:di(i);break;case 19:j(pn);break;case 10:va(i.type);break;case 22:case 23:di(i),Cf(),t!==null&&j(Hs);break;case 24:va(xn)}}function Xo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,S=s.inst;l=m(),S.destroy=l}s=s.next}while(s!==f)}}catch(C){zt(i,i.return,C)}}function as(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=i;var H=s,ne=C;try{ne()}catch(me){zt(f,H,me)}}}l=l.next}while(l!==m)}}catch(me){zt(i,i.return,me)}}function m0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{sg(i,s)}catch(l){zt(t,t.return,l)}}}function g0(t,i,s){s.props=Ws(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){zt(t,i,l)}}function Wo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){zt(t,i,f)}}function Qi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){zt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){zt(t,i,f)}else s.current=null}function _0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){zt(t,t.return,f)}}function od(t,i,s){try{var l=t.stateNode;XS(l,t.type,s,i),l[Un]=i}catch(f){zt(t,t.return,f)}}function v0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fs(t.type)||t.tag===4}function ld(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ha));else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(cd(t,i,s),t=t.sibling;t!==null;)cd(t,i,s),t=t.sibling}function yc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(yc(t,i,s),t=t.sibling;t!==null;)yc(t,i,s),t=t.sibling}function x0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Bn(i,l,s),i[_n]=t,i[Un]=s}catch(m){zt(t,t.return,m)}}var ba=!1,Mn=!1,ud=!1,y0=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function bS(t,i){if(t=t.containerInfo,Dd=Gc,t=Lm(t),nf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var S=0,C=-1,H=-1,ne=0,me=0,xe=t,le=null;t:for(;;){for(var ue;xe!==s||f!==0&&xe.nodeType!==3||(C=S+f),xe!==m||l!==0&&xe.nodeType!==3||(H=S+l),xe.nodeType===3&&(S+=xe.nodeValue.length),(ue=xe.firstChild)!==null;)le=xe,xe=ue;for(;;){if(xe===t)break t;if(le===s&&++ne===f&&(C=S),le===m&&++me===l&&(H=S),(ue=xe.nextSibling)!==null)break;xe=le,le=xe.parentNode}xe=ue}s=C===-1||H===-1?null:{start:C,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ld={focusedElem:t,selectionRange:s},Gc=!1,Nn=i;Nn!==null;)if(i=Nn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Nn=t;else for(;Nn!==null;){switch(i=Nn,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var We=Ws(s.type,f);t=l.getSnapshotBeforeUpdate(We,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Pd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Nn=t;break}Nn=i.return}}function S0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ta(t,s),l&4&&Xo(5,s);break;case 1:if(Ta(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){zt(s,s.return,S)}else{var f=Ws(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){zt(s,s.return,S)}}l&64&&m0(s),l&512&&Wo(s,s.return);break;case 3:if(Ta(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{sg(t,i)}catch(S){zt(s,s.return,S)}}break;case 27:i===null&&l&4&&x0(s);case 26:case 5:Ta(t,s),i===null&&l&4&&_0(s),l&512&&Wo(s,s.return);break;case 12:Ta(t,s);break;case 31:Ta(t,s),l&4&&E0(t,s);break;case 13:Ta(t,s),l&4&&T0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=LS.bind(null,s),JS(t,s))));break;case 22:if(l=s.memoizedState!==null||ba,!l){i=i!==null&&i.memoizedState!==null||Mn,f=ba;var m=Mn;ba=l,(Mn=i)&&!m?Aa(t,s,(s.subtreeFlags&8772)!==0):Ta(t,s),ba=f,Mn=m}break;case 30:break;default:Ta(t,s)}}function M0(t){var i=t.alternate;i!==null&&(t.alternate=null,M0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Wa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,Jn=!1;function Ea(t,i,s){for(s=s.child;s!==null;)b0(t,i,s),s=s.sibling}function b0(t,i,s){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(fe,s)}catch{}switch(s.tag){case 26:Mn||Qi(s,i),Ea(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Mn||Qi(s,i);var l=an,f=Jn;fs(s.type)&&(an=s.stateNode,Jn=!1),Ea(t,i,s),el(s.stateNode),an=l,Jn=f;break;case 5:Mn||Qi(s,i);case 6:if(l=an,f=Jn,an=null,Ea(t,i,s),an=l,Jn=f,an!==null)if(Jn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(s.stateNode)}catch(m){zt(s,i,m)}else try{an.removeChild(s.stateNode)}catch(m){zt(s,i,m)}break;case 18:an!==null&&(Jn?(t=an,m_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Fr(t)):m_(an,s.stateNode));break;case 4:l=an,f=Jn,an=s.stateNode.containerInfo,Jn=!0,Ea(t,i,s),an=l,Jn=f;break;case 0:case 11:case 14:case 15:as(2,s,i),Mn||as(4,s,i),Ea(t,i,s);break;case 1:Mn||(Qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&g0(s,i,l)),Ea(t,i,s);break;case 21:Ea(t,i,s);break;case 22:Mn=(l=Mn)||s.memoizedState!==null,Ea(t,i,s),Mn=l;break;default:Ea(t,i,s)}}function E0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fr(t)}catch(s){zt(i,i.return,s)}}}function T0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fr(t)}catch(s){zt(i,i.return,s)}}function ES(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new y0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new y0),i;default:throw Error(a(435,t.tag))}}function Sc(t,i){var s=ES(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=US.bind(null,t,l);l.then(f,f)}})}function $n(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,S=i,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(fs(C.type)){an=C.stateNode,Jn=!1;break e}break;case 5:an=C.stateNode,Jn=!1;break e;case 3:case 4:an=C.stateNode.containerInfo,Jn=!0;break e}C=C.return}if(an===null)throw Error(a(160));b0(m,S,f),an=null,Jn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)A0(i,t),i=i.sibling}var Ii=null;function A0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(i,t),ei(t),l&4&&(as(3,t,t.return),Xo(3,t),as(5,t,t.return));break;case 1:$n(i,t),ei(t),l&512&&(Mn||s===null||Qi(s,s.return)),l&64&&ba&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ii;if($n(i,t),ei(t),l&512&&(Mn||s===null||Qi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Xa]||m[_n]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Bn(m,l,s),m[_n]=t,vn(m),l=m;break e;case"link":var S=A_("link","href",f).get(l+(s.href||""));if(S){for(var C=0;C<S.length;C++)if(m=S[C],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(C,1);break t}}m=f.createElement(l),Bn(m,l,s),f.head.appendChild(m);break;case"meta":if(S=A_("meta","content",f).get(l+(s.content||""))){for(C=0;C<S.length;C++)if(m=S[C],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(C,1);break t}}m=f.createElement(l),Bn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[_n]=t,vn(m),l=m}t.stateNode=l}else R_(f,t.type,t.stateNode);else t.stateNode=T_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?R_(f,t.type,t.stateNode):T_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&od(t,t.memoizedProps,s.memoizedProps)}break;case 27:$n(i,t),ei(t),l&512&&(Mn||s===null||Qi(s,s.return)),s!==null&&l&4&&od(t,t.memoizedProps,s.memoizedProps);break;case 5:if($n(i,t),ei(t),l&512&&(Mn||s===null||Qi(s,s.return)),t.flags&32){f=t.stateNode;try{li(f,"")}catch(We){zt(t,t.return,We)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,od(t,f,s!==null?s.memoizedProps:f)),l&1024&&(ud=!0);break;case 6:if($n(i,t),ei(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(We){zt(t,t.return,We)}}break;case 3:if(Bc=null,f=Ii,Ii=Pc(i.containerInfo),$n(i,t),Ii=f,ei(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Fr(i.containerInfo)}catch(We){zt(t,t.return,We)}ud&&(ud=!1,R0(t));break;case 4:l=Ii,Ii=Pc(t.stateNode.containerInfo),$n(i,t),ei(t),Ii=l;break;case 12:$n(i,t),ei(t);break;case 31:$n(i,t),ei(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sc(t,l)));break;case 13:$n(i,t),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(bc=kt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sc(t,l)));break;case 22:f=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ne=ba,me=Mn;if(ba=ne||f,Mn=me||H,$n(i,t),Mn=me,ba=ne,ei(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||ba||Mn||qs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(m=H.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=H.stateNode;var xe=H.memoizedProps.style,le=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){zt(H,H.return,We)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(We){zt(H,H.return,We)}}}else if(i.tag===18){if(s===null){H=i;try{var ue=H.stateNode;f?g_(ue,!0):g_(H.stateNode,!1)}catch(We){zt(H,H.return,We)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Sc(t,s))));break;case 19:$n(i,t),ei(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Sc(t,l)));break;case 30:break;case 21:break;default:$n(i,t),ei(t)}}function ei(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(v0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=ld(t);yc(t,m,f);break;case 5:var S=s.stateNode;s.flags&32&&(li(S,""),s.flags&=-33);var C=ld(t);yc(t,C,S);break;case 3:case 4:var H=s.stateNode.containerInfo,ne=ld(t);cd(t,ne,H);break;default:throw Error(a(161))}}catch(me){zt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function R0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;R0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ta(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)S0(t,i.alternate,i),i=i.sibling}function qs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:as(4,i,i.return),qs(i);break;case 1:Qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&g0(i,i.return,s),qs(i);break;case 27:el(i.stateNode);case 26:case 5:Qi(i,i.return),qs(i);break;case 22:i.memoizedState===null&&qs(i);break;case 30:qs(i);break;default:qs(i)}t=t.sibling}}function Aa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:Aa(f,m,s),Xo(4,m);break;case 1:if(Aa(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ne){zt(l,l.return,ne)}if(l=m,f=l.updateQueue,f!==null){var C=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)ag(H[f],C)}catch(ne){zt(l,l.return,ne)}}s&&S&64&&m0(m),Wo(m,m.return);break;case 27:x0(m);case 26:case 5:Aa(f,m,s),s&&l===null&&S&4&&_0(m),Wo(m,m.return);break;case 12:Aa(f,m,s);break;case 31:Aa(f,m,s),s&&S&4&&E0(f,m);break;case 13:Aa(f,m,s),s&&S&4&&T0(f,m);break;case 22:m.memoizedState===null&&Aa(f,m,s),Wo(m,m.return);break;case 30:break;default:Aa(f,m,s)}i=i.sibling}}function fd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Do(s))}function dd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Do(t))}function Bi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)w0(t,i,s,l),i=i.sibling}function w0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Bi(t,i,s,l),f&2048&&Xo(9,i);break;case 1:Bi(t,i,s,l);break;case 3:Bi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Do(t)));break;case 12:if(f&2048){Bi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,S=m.id,C=m.onPostCommit;typeof C=="function"&&C(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){zt(i,i.return,H)}}else Bi(t,i,s,l);break;case 31:Bi(t,i,s,l);break;case 13:Bi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?Bi(t,i,s,l):qo(t,i):m._visibility&2?Bi(t,i,s,l):(m._visibility|=2,Rr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&fd(S,i);break;case 24:Bi(t,i,s,l),f&2048&&dd(i.alternate,i);break;default:Bi(t,i,s,l)}}function Rr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,S=i,C=s,H=l,ne=S.flags;switch(S.tag){case 0:case 11:case 15:Rr(m,S,C,H,f),Xo(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?Rr(m,S,C,H,f):qo(m,S):(me._visibility|=2,Rr(m,S,C,H,f)),f&&ne&2048&&fd(S.alternate,S);break;case 24:Rr(m,S,C,H,f),f&&ne&2048&&dd(S.alternate,S);break;default:Rr(m,S,C,H,f)}i=i.sibling}}function qo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:qo(s,l),f&2048&&fd(l.alternate,l);break;case 24:qo(s,l),f&2048&&dd(l.alternate,l);break;default:qo(s,l)}i=i.sibling}}var Yo=8192;function wr(t,i,s){if(t.subtreeFlags&Yo)for(t=t.child;t!==null;)C0(t,i,s),t=t.sibling}function C0(t,i,s){switch(t.tag){case 26:wr(t,i,s),t.flags&Yo&&t.memoizedState!==null&&uM(s,Ii,t.memoizedState,t.memoizedProps);break;case 5:wr(t,i,s);break;case 3:case 4:var l=Ii;Ii=Pc(t.stateNode.containerInfo),wr(t,i,s),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Yo,Yo=16777216,wr(t,i,s),Yo=l):wr(t,i,s));break;default:wr(t,i,s)}}function N0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function jo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Nn=l,L0(l,t)}N0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)D0(t),t=t.sibling}function D0(t){switch(t.tag){case 0:case 11:case 15:jo(t),t.flags&2048&&as(9,t,t.return);break;case 3:jo(t);break;case 12:jo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Mc(t)):jo(t);break;default:jo(t)}}function Mc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Nn=l,L0(l,t)}N0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:as(8,i,i.return),Mc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Mc(i));break;default:Mc(i)}t=t.sibling}}function L0(t,i){for(;Nn!==null;){var s=Nn;switch(s.tag){case 0:case 11:case 15:as(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Do(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Nn=l;else e:for(s=t;Nn!==null;){l=Nn;var f=l.sibling,m=l.return;if(M0(l),l===s){Nn=null;break e}if(f!==null){f.return=m,Nn=f;break e}Nn=m}}}var TS={getCacheForType:function(t){var i=Pn(xn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Pn(xn).controller.signal}},AS=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Kt=null,vt=null,bt=0,Ft=0,hi=null,ss=!1,Cr=!1,hd=!1,Ra=0,fn=0,rs=0,Ys=0,pd=0,pi=0,Nr=0,Ko=null,ti=null,md=!1,bc=0,U0=0,Ec=1/0,Tc=null,os=null,Tn=0,ls=null,Dr=null,wa=0,gd=0,_d=null,O0=null,Zo=0,vd=null;function mi(){return(Lt&2)!==0&&bt!==0?bt&-bt:F.T!==null?Ed():xo()}function P0(){if(pi===0)if((bt&536870912)===0||Rt){var t=st;st<<=1,(st&3932160)===0&&(st=262144),pi=t}else pi=536870912;return t=fi.current,t!==null&&(t.flags|=32),pi}function ni(t,i,s){(t===Kt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(Lr(t,0),cs(t,bt,pi,!1)),Ve(t,s),((Lt&2)===0||t!==Kt)&&(t===Kt&&((Lt&2)===0&&(Ys|=s),fn===4&&cs(t,bt,pi,!1)),Ji(t))}function I0(t,i,s){if((Lt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ce(t,i),f=l?CS(t,i):yd(t,i,!0),m=l;do{if(f===0){Cr&&!l&&cs(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!RS(s)){f=yd(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var C=t;f=Ko;var H=C.current.memoizedState.isDehydrated;if(H&&(Lr(C,S).flags|=256),S=yd(C,S,!1),S!==2){if(hd&&!H){C.errorRecoveryDisabledLanes|=m,Ys|=m,f=4;break e}m=ti,ti=f,m!==null&&(ti===null?ti=m:ti.push.apply(ti,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){Lr(t,0),cs(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:cs(l,i,pi,!ss);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=bc+300-kt(),10<f)){if(cs(l,i,pi,!ss),ge(l,0,!0)!==0)break e;wa=i,l.timeoutHandle=h_(B0.bind(null,l,s,ti,Tc,md,i,pi,Ys,Nr,ss,m,"Throttled",-0,0),f);break e}B0(l,s,ti,Tc,md,i,pi,Ys,Nr,ss,m,null,-0,0)}}break}while(!0);Ji(t)}function B0(t,i,s,l,f,m,S,C,H,ne,me,xe,le,ue){if(t.timeoutHandle=-1,xe=i.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},C0(i,m,xe);var We=(m&62914560)===m?bc-kt():(m&4194048)===m?U0-kt():0;if(We=fM(xe,We),We!==null){wa=m,t.cancelPendingCommit=We(W0.bind(null,t,i,m,s,l,f,S,C,H,me,xe,null,le,ue)),cs(t,m,S,!ne);return}}W0(t,i,m,s,l,f,S,C,H)}function RS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!ci(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cs(t,i,s,l){i&=~pd,i&=~Ys,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Fe(f),S=1<<m;l[m]=-1,f&=~S}s!==0&&Ot(t,s,i)}function Ac(){return(Lt&6)===0?(Qo(0),!1):!0}function xd(){if(vt!==null){if(Ft===0)var t=vt.return;else t=vt,_a=Fs=null,Pf(t),Mr=null,Uo=0,t=vt;for(;t!==null;)p0(t.alternate,t),t=t.return;vt=null}}function Lr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,YS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),wa=0,xd(),Kt=t,vt=s=ma(t.current,null),bt=i,Ft=0,hi=null,ss=!1,Cr=Ce(t,i),hd=!1,Nr=pi=pd=Ys=rs=fn=0,ti=Ko=null,md=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Fe(l),m=1<<f;i|=t[f],l&=~m}return Ra=i,Yl(),s}function F0(t,i){ut=null,F.H=Go,i===Sr||i===tc?(i=eg(),Ft=3):i===bf?(i=eg(),Ft=4):Ft=i===Qf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,hi=i,vt===null&&(fn=1,mc(t,Mi(i,t.current)))}function z0(){var t=fi.current;return t===null?!0:(bt&4194048)===bt?Ai===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Ai:!1}function H0(){var t=F.H;return F.H=Go,t===null?Go:t}function G0(){var t=F.A;return F.A=TS,t}function Rc(){fn=4,ss||(bt&4194048)!==bt&&fi.current!==null||(Cr=!0),(rs&134217727)===0&&(Ys&134217727)===0||Kt===null||cs(Kt,bt,pi,!1)}function yd(t,i,s){var l=Lt;Lt|=2;var f=H0(),m=G0();(Kt!==t||bt!==i)&&(Tc=null,Lr(t,i)),i=!1;var S=fn;e:do try{if(Ft!==0&&vt!==null){var C=vt,H=hi;switch(Ft){case 8:xd(),S=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(i=!0);var ne=Ft;if(Ft=0,hi=null,Ur(t,C,H,ne),s&&Cr){S=0;break e}break;default:ne=Ft,Ft=0,hi=null,Ur(t,C,H,ne)}}wS(),S=fn;break}catch(me){F0(t,me)}while(!0);return i&&t.shellSuspendCounter++,_a=Fs=null,Lt=l,F.H=f,F.A=m,vt===null&&(Kt=null,bt=0,Yl()),S}function wS(){for(;vt!==null;)V0(vt)}function CS(t,i){var s=Lt;Lt|=2;var l=H0(),f=G0();Kt!==t||bt!==i?(Tc=null,Ec=kt()+500,Lr(t,i)):Cr=Ce(t,i);e:do try{if(Ft!==0&&vt!==null){i=vt;var m=hi;t:switch(Ft){case 1:Ft=0,hi=null,Ur(t,i,m,1);break;case 2:case 9:if(Jm(m)){Ft=0,hi=null,k0(i);break}i=function(){Ft!==2&&Ft!==9||Kt!==t||(Ft=7),Ji(t)},m.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Jm(m)?(Ft=0,hi=null,k0(i)):(Ft=0,hi=null,Ur(t,i,m,7));break;case 5:var S=null;switch(vt.tag){case 26:S=vt.memoizedState;case 5:case 27:var C=vt;if(S?w_(S):C.stateNode.complete){Ft=0,hi=null;var H=C.sibling;if(H!==null)vt=H;else{var ne=C.return;ne!==null?(vt=ne,wc(ne)):vt=null}break t}}Ft=0,hi=null,Ur(t,i,m,5);break;case 6:Ft=0,hi=null,Ur(t,i,m,6);break;case 8:xd(),fn=6;break e;default:throw Error(a(462))}}NS();break}catch(me){F0(t,me)}while(!0);return _a=Fs=null,F.H=l,F.A=f,Lt=s,vt!==null?0:(Kt=null,bt=0,Yl(),fn)}function NS(){for(;vt!==null&&!cn();)V0(vt)}function V0(t){var i=d0(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,i===null?wc(t):vt=i}function k0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=r0(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=r0(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:Pf(i);default:p0(s,i),i=vt=Gm(i,Ra),i=d0(s,i,Ra)}t.memoizedProps=t.pendingProps,i===null?wc(t):vt=i}function Ur(t,i,s,l){_a=Fs=null,Pf(i),Mr=null,Uo=0;var f=i.return;try{if(vS(t,f,i,s,bt)){fn=1,mc(t,Mi(s,t.current)),vt=null;return}}catch(m){if(f!==null)throw vt=f,m;fn=1,mc(t,Mi(s,t.current)),vt=null;return}i.flags&32768?(Rt||l===1?t=!0:Cr||(bt&536870912)!==0?t=!1:(ss=t=!0,(l===2||l===9||l===3||l===6)&&(l=fi.current,l!==null&&l.tag===13&&(l.flags|=16384))),X0(i,t)):wc(i)}function wc(t){var i=t;do{if((i.flags&32768)!==0){X0(i,ss);return}t=i.return;var s=SS(i.alternate,i,Ra);if(s!==null){vt=s;return}if(i=i.sibling,i!==null){vt=i;return}vt=i=t}while(i!==null);fn===0&&(fn=5)}function X0(t,i){do{var s=MS(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);fn=6,vt=null}function W0(t,i,s,l,f,m,S,C,H){t.cancelPendingCommit=null;do Cc();while(Tn!==0);if((Lt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=lf,en(t,s,m,S,C,H),t===Kt&&(vt=Kt=null,bt=0),Dr=i,ls=t,wa=s,gd=m,_d=f,O0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,OS($,function(){return Z0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=G.p,G.p=2,S=Lt,Lt|=4;try{bS(t,i,s)}finally{Lt=S,G.p=f,F.T=l}}Tn=1,q0(),Y0(),j0()}}function q0(){if(Tn===1){Tn=0;var t=ls,i=Dr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=G.p;G.p=2;var f=Lt;Lt|=4;try{A0(i,t);var m=Ld,S=Lm(t.containerInfo),C=m.focusedElem,H=m.selectionRange;if(S!==C&&C&&C.ownerDocument&&Dm(C.ownerDocument.documentElement,C)){if(H!==null&&nf(C)){var ne=H.start,me=H.end;if(me===void 0&&(me=ne),"selectionStart"in C)C.selectionStart=ne,C.selectionEnd=Math.min(me,C.value.length);else{var xe=C.ownerDocument||document,le=xe&&xe.defaultView||window;if(le.getSelection){var ue=le.getSelection(),We=C.textContent.length,tt=Math.min(H.start,We),qt=H.end===void 0?tt:Math.min(H.end,We);!ue.extend&&tt>qt&&(S=qt,qt=tt,tt=S);var Q=Nm(C,tt),k=Nm(C,qt);if(Q&&k&&(ue.rangeCount!==1||ue.anchorNode!==Q.node||ue.anchorOffset!==Q.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var te=xe.createRange();te.setStart(Q.node,Q.offset),ue.removeAllRanges(),tt>qt?(ue.addRange(te),ue.extend(k.node,k.offset)):(te.setEnd(k.node,k.offset),ue.addRange(te))}}}}for(xe=[],ue=C;ue=ue.parentNode;)ue.nodeType===1&&xe.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<xe.length;C++){var ve=xe[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Gc=!!Dd,Ld=Dd=null}finally{Lt=f,G.p=l,F.T=s}}t.current=i,Tn=2}}function Y0(){if(Tn===2){Tn=0;var t=ls,i=Dr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=G.p;G.p=2;var f=Lt;Lt|=4;try{S0(t,i.alternate,i)}finally{Lt=f,G.p=l,F.T=s}}Tn=3}}function j0(){if(Tn===4||Tn===3){Tn=0,Y();var t=ls,i=Dr,s=wa,l=O0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,Dr=ls=null,K0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(os=null),vo(s),i=i.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,f=G.p,G.p=2,F.T=null;try{for(var m=t.onRecoverableError,S=0;S<l.length;S++){var C=l[S];m(C.value,{componentStack:C.stack})}}finally{F.T=i,G.p=f}}(wa&3)!==0&&Cc(),Ji(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===vd?Zo++:(Zo=0,vd=t):Zo=0,Qo(0)}}function K0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Do(i)))}function Cc(){return q0(),Y0(),j0(),Z0()}function Z0(){if(Tn!==5)return!1;var t=ls,i=gd;gd=0;var s=vo(wa),l=F.T,f=G.p;try{G.p=32>s?32:s,F.T=null,s=_d,_d=null;var m=ls,S=wa;if(Tn=0,Dr=ls=null,wa=0,(Lt&6)!==0)throw Error(a(331));var C=Lt;if(Lt|=4,D0(m.current),w0(m,m.current,S,s),Lt=C,Qo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(fe,m)}catch{}return!0}finally{G.p=f,F.T=l,K0(t,i)}}function Q0(t,i,s){i=Mi(s,i),i=Zf(t.stateNode,i,2),t=ts(t,i,2),t!==null&&(Ve(t,2),Ji(t))}function zt(t,i,s){if(t.tag===3)Q0(t,t,s);else for(;i!==null;){if(i.tag===3){Q0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(os===null||!os.has(l))){t=Mi(s,t),s=Jg(2),l=ts(i,s,2),l!==null&&($g(s,l,i,t),Ve(l,2),Ji(l));break}}i=i.return}}function Sd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new AS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(hd=!0,f.add(s),t=DS.bind(null,t,i,s),i.then(t,t))}function DS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Kt===t&&(bt&s)===s&&(fn===4||fn===3&&(bt&62914560)===bt&&300>kt()-bc?(Lt&2)===0&&Lr(t,0):pd|=s,Nr===bt&&(Nr=0)),Ji(t)}function J0(t,i){i===0&&(i=Me()),t=Ps(t,i),t!==null&&(Ve(t,i),Ji(t))}function LS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),J0(t,s)}function US(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),J0(t,s)}function OS(t,i){return hn(t,i)}var Nc=null,Or=null,Md=!1,Dc=!1,bd=!1,us=0;function Ji(t){t!==Or&&t.next===null&&(Or===null?Nc=Or=t:Or=Or.next=t),Dc=!0,Md||(Md=!0,IS())}function Qo(t,i){if(!bd&&Dc){bd=!0;do for(var s=!1,l=Nc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var S=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-Fe(42|t)+1)-1,m&=f&~(S&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,n_(l,m))}else m=bt,m=ge(l,l===Kt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ce(l,m)||(s=!0,n_(l,m));l=l.next}while(s);bd=!1}}function PS(){$0()}function $0(){Dc=Md=!1;var t=0;us!==0&&qS()&&(t=us);for(var i=kt(),s=null,l=Nc;l!==null;){var f=l.next,m=e_(l,i);m===0?(l.next=null,s===null?Nc=f:s.next=f,f===null&&(Or=s)):(s=l,(t!==0||(m&3)!==0)&&(Dc=!0)),l=f}Tn!==0&&Tn!==5||Qo(t),us!==0&&(us=0)}function e_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var S=31-Fe(m),C=1<<S,H=f[S];H===-1?((C&s)===0||(C&l)!==0)&&(f[S]=Be(C,i)):H<=i&&(t.expiredLanes|=C),m&=~C}if(i=Kt,s=bt,s=ge(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Zt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ce(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Zt(l),vo(s)){case 2:case 8:s=E;break;case 32:s=$;break;case 268435456:s=de;break;default:s=$}return l=t_.bind(null,t),s=hn(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Zt(l),t.callbackPriority=2,t.callbackNode=null,2}function t_(t,i){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Cc()&&t.callbackNode!==s)return null;var l=bt;return l=ge(t,t===Kt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(I0(t,l,i),e_(t,kt()),t.callbackNode!=null&&t.callbackNode===s?t_.bind(null,t):null)}function n_(t,i){if(Cc())return null;I0(t,i,!0)}function IS(){jS(function(){(Lt&6)!==0?hn(B,PS):$0()})}function Ed(){if(us===0){var t=xr;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),us=t}return us}function i_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ds(""+t)}function a_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function BS(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=i_((f[Un]||null).action),S=l.submitter;S&&(i=(i=S[Un]||null)?i_(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var C=new kl("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(us!==0){var H=S?a_(f,S):new FormData(f);Xf(s,{pending:!0,data:H,method:f.method,action:m},null,H)}}else typeof m=="function"&&(C.preventDefault(),H=S?a_(f,S):new FormData(f),Xf(s,{pending:!0,data:H,method:f.method,action:m},m,H))},currentTarget:f}]})}}for(var Td=0;Td<of.length;Td++){var Ad=of[Td],FS=Ad.toLowerCase(),zS=Ad[0].toUpperCase()+Ad.slice(1);Pi(FS,"on"+zS)}Pi(Pm,"onAnimationEnd"),Pi(Im,"onAnimationIteration"),Pi(Bm,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(tS,"onTransitionRun"),Pi(nS,"onTransitionStart"),Pi(iS,"onTransitionCancel"),Pi(Fm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function s_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var S=l.length-1;0<=S;S--){var C=l[S],H=C.instance,ne=C.currentTarget;if(C=C.listener,H!==m&&f.isPropagationStopped())break e;m=C,f.currentTarget=ne;try{m(f)}catch(me){ql(me)}f.currentTarget=null,m=H}else for(S=0;S<l.length;S++){if(C=l[S],H=C.instance,ne=C.currentTarget,C=C.listener,H!==m&&f.isPropagationStopped())break e;m=C,f.currentTarget=ne;try{m(f)}catch(me){ql(me)}f.currentTarget=null,m=H}}}}function xt(t,i){var s=i[ws];s===void 0&&(s=i[ws]=new Set);var l=t+"__bubble";s.has(l)||(r_(i,t,2,!1),s.add(l))}function Rd(t,i,s){var l=0;i&&(l|=4),r_(s,t,l,i)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function wd(t){if(!t[Lc]){t[Lc]=!0,zl.forEach(function(s){s!=="selectionchange"&&(HS.has(s)||Rd(s,!1,t),Rd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Lc]||(i[Lc]=!0,Rd("selectionchange",!1,i))}}function r_(t,i,s,l){switch(P_(i)){case 2:var f=pM;break;case 8:f=mM;break;default:f=kd}s=f.bind(null,i,s,t),f=void 0,!Yu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Cd(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=l.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=fa(C),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){l=m=S;continue e}C=C.parentNode}}l=l.return}fm(function(){var ne=m,me=Wu(s),xe=[];e:{var le=zm.get(t);if(le!==void 0){var ue=kl,We=t;switch(t){case"keypress":if(Gl(s)===0)break e;case"keydown":case"keyup":ue=Uy;break;case"focusin":We="focus",ue=Qu;break;case"focusout":We="blur",ue=Qu;break;case"beforeblur":case"afterblur":ue=Qu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Iy;break;case Pm:case Im:case Bm:ue=Ey;break;case Fm:ue=Fy;break;case"scroll":case"scrollend":ue=xy;break;case"wheel":ue=Hy;break;case"copy":case"cut":case"paste":ue=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=gm;break;case"toggle":case"beforetoggle":ue=Vy}var tt=(i&4)!==0,qt=!tt&&(t==="scroll"||t==="scrollend"),Q=tt?le!==null?le+"Capture":null:le;tt=[];for(var k=ne,te;k!==null;){var ve=k;if(te=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||te===null||Q===null||(ve=yo(k,Q),ve!=null&&tt.push($o(k,ve,te))),qt)break;k=k.return}0<tt.length&&(le=new ue(le,We,null,s,me),xe.push({event:le,listeners:tt}))}}if((i&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&s!==Xu&&(We=s.relatedTarget||s.fromElement)&&(fa(We)||We[Zn]))break e;if((ue||le)&&(le=me.window===me?me:(le=me.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(We=s.relatedTarget||s.toElement,ue=ne,We=We?fa(We):null,We!==null&&(qt=c(We),tt=We.tag,We!==qt||tt!==5&&tt!==27&&tt!==6)&&(We=null)):(ue=null,We=ne),ue!==We)){if(tt=pm,ve="onMouseLeave",Q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=gm,ve="onPointerLeave",Q="onPointerEnter",k="pointer"),qt=ue==null?le:Ns(ue),te=We==null?le:Ns(We),le=new tt(ve,k+"leave",ue,s,me),le.target=qt,le.relatedTarget=te,ve=null,fa(me)===ne&&(tt=new tt(Q,k+"enter",We,s,me),tt.target=te,tt.relatedTarget=qt,ve=tt),qt=ve,ue&&We)t:{for(tt=GS,Q=ue,k=We,te=0,ve=Q;ve;ve=tt(ve))te++;ve=0;for(var et=k;et;et=tt(et))ve++;for(;0<te-ve;)Q=tt(Q),te--;for(;0<ve-te;)k=tt(k),ve--;for(;te--;){if(Q===k||k!==null&&Q===k.alternate){tt=Q;break t}Q=tt(Q),k=tt(k)}tt=null}else tt=null;ue!==null&&o_(xe,le,ue,tt,!1),We!==null&&qt!==null&&o_(xe,qt,We,tt,!0)}}e:{if(le=ne?Ns(ne):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var Ct=Em;else if(Mm(le))if(Tm)Ct=Jy;else{Ct=Zy;var Ye=Ky}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&Ut(ne.elementType)&&(Ct=Em):Ct=Qy;if(Ct&&(Ct=Ct(t,ne))){bm(xe,Ct,s,me);break e}Ye&&Ye(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&_t(le,"number",le.value)}switch(Ye=ne?Ns(ne):window,t){case"focusin":(Mm(Ye)||Ye.contentEditable==="true")&&(fr=Ye,af=ne,wo=null);break;case"focusout":wo=af=fr=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Um(xe,s,me);break;case"selectionchange":if(eS)break;case"keydown":case"keyup":Um(xe,s,me)}var ft;if($u)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else ur?ym(t,s)&&(Et="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Et="onCompositionStart");Et&&(_m&&s.locale!=="ko"&&(ur||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&ur&&(ft=dm()):(ja=me,ju="value"in ja?ja.value:ja.textContent,ur=!0)),Ye=Uc(ne,Et),0<Ye.length&&(Et=new mm(Et,t,null,s,me),xe.push({event:Et,listeners:Ye}),ft?Et.data=ft:(ft=Sm(s),ft!==null&&(Et.data=ft)))),(ft=Xy?Wy(t,s):qy(t,s))&&(Et=Uc(ne,"onBeforeInput"),0<Et.length&&(Ye=new mm("onBeforeInput","beforeinput",null,s,me),xe.push({event:Ye,listeners:Et}),Ye.data=ft)),BS(xe,t,ne,s,me)}s_(xe,i)})}function $o(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Uc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=yo(t,s),f!=null&&l.unshift($o(t,f,m)),f=yo(t,i),f!=null&&l.push($o(t,f,m))),t.tag===3)return l;t=t.return}return[]}function GS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function o_(t,i,s,l,f){for(var m=i._reactName,S=[];s!==null&&s!==l;){var C=s,H=C.alternate,ne=C.stateNode;if(C=C.tag,H!==null&&H===l)break;C!==5&&C!==26&&C!==27||ne===null||(H=ne,f?(ne=yo(s,m),ne!=null&&S.unshift($o(s,ne,H))):f||(ne=yo(s,m),ne!=null&&S.push($o(s,ne,H)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var VS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function l_(t){return(typeof t=="string"?t:""+t).replace(VS,`
`).replace(kS,"")}function c_(t,i){return i=l_(i),l_(t)===i}function Wt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||li(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&li(t,""+l);break;case"className":Xe(t,"class",l);break;case"tabIndex":Xe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,s,l);break;case"style":Oi(t,l,m);break;case"data":if(i!=="object"){Xe(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ds(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Wt(t,i,"name",f.name,f,null),Wt(t,i,"formEncType",f.formEncType,f,null),Wt(t,i,"formMethod",f.formMethod,f,null),Wt(t,i,"formTarget",f.formTarget,f,null)):(Wt(t,i,"encType",f.encType,f,null),Wt(t,i,"method",f.method,f,null),Wt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ds(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ha);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ds(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Le(t,"popover",l);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Le(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ji.get(s)||s,Le(t,s,l))}}function Nd(t,i,s,l,f,m){switch(s){case"style":Oi(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?li(t,l):(typeof l=="number"||typeof l=="bigint")&&li(t,""+l);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[Un]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Le(t,s,l)}}}function Bn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var S=s[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,m,S,s,null)}}f&&Wt(t,i,"srcSet",s.srcSet,s,null),l&&Wt(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var C=m=S=f=null,H=null,ne=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":f=me;break;case"type":S=me;break;case"checked":H=me;break;case"defaultChecked":ne=me;break;case"value":m=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:Wt(t,i,l,me,s,null)}}zn(t,m,C,H,ne,S,f,!1);return;case"select":xt("invalid",t),l=S=m=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":m=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:Wt(t,i,f,C,s,null)}i=m,s=S,t.multiple=!!l,i!=null?En(t,!!l,i,!1):s!=null&&En(t,!!l,s,!0);return;case"textarea":xt("invalid",t),m=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(C=s[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":f=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Wt(t,i,S,C,s,null)}Ui(t,l,f,m);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Wt(t,i,H,l,s,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(l=0;l<Jo.length;l++)xt(Jo[l],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(l=s[ne],l!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,ne,l,s,null)}return;default:if(Ut(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&Nd(t,i,me,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Wt(t,i,C,l,s,null))}function XS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,C=null,H=null,ne=null,me=null;for(ue in s){var xe=s[ue];if(s.hasOwnProperty(ue)&&xe!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=xe;default:l.hasOwnProperty(ue)||Wt(t,i,ue,null,l,xe)}}for(var le in l){var ue=l[le];if(xe=s[le],l.hasOwnProperty(le)&&(ue!=null||xe!=null))switch(le){case"type":m=ue;break;case"name":f=ue;break;case"checked":ne=ue;break;case"defaultChecked":me=ue;break;case"value":S=ue;break;case"defaultValue":C=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,i));break;default:ue!==xe&&Wt(t,i,le,ue,l,xe)}}ze(t,S,C,H,ne,me,m,f);return;case"select":ue=S=C=le=null;for(m in s)if(H=s[m],s.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":ue=H;default:l.hasOwnProperty(m)||Wt(t,i,m,null,l,H)}for(f in l)if(m=l[f],H=s[f],l.hasOwnProperty(f)&&(m!=null||H!=null))switch(f){case"value":le=m;break;case"defaultValue":C=m;break;case"multiple":S=m;default:m!==H&&Wt(t,i,f,m,l,H)}i=C,s=S,l=ue,le!=null?En(t,!!s,le,!1):!!l!=!!s&&(i!=null?En(t,!!s,i,!0):En(t,!!s,s?[]:"",!1));return;case"textarea":ue=le=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Wt(t,i,C,null,l,f)}for(S in l)if(f=l[S],m=s[S],l.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":le=f;break;case"defaultValue":ue=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Wt(t,i,S,f,l,m)}oi(t,le,ue);return;case"option":for(var We in s)if(le=s[We],s.hasOwnProperty(We)&&le!=null&&!l.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Wt(t,i,We,null,l,le)}for(H in l)if(le=l[H],ue=s[H],l.hasOwnProperty(H)&&le!==ue&&(le!=null||ue!=null))switch(H){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Wt(t,i,H,le,l,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)le=s[tt],s.hasOwnProperty(tt)&&le!=null&&!l.hasOwnProperty(tt)&&Wt(t,i,tt,null,l,le);for(ne in l)if(le=l[ne],ue=s[ne],l.hasOwnProperty(ne)&&le!==ue&&(le!=null||ue!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:Wt(t,i,ne,le,l,ue)}return;default:if(Ut(i)){for(var qt in s)le=s[qt],s.hasOwnProperty(qt)&&le!==void 0&&!l.hasOwnProperty(qt)&&Nd(t,i,qt,void 0,l,le);for(me in l)le=l[me],ue=s[me],!l.hasOwnProperty(me)||le===ue||le===void 0&&ue===void 0||Nd(t,i,me,le,l,ue);return}}for(var Q in s)le=s[Q],s.hasOwnProperty(Q)&&le!=null&&!l.hasOwnProperty(Q)&&Wt(t,i,Q,null,l,le);for(xe in l)le=l[xe],ue=s[xe],!l.hasOwnProperty(xe)||le===ue||le==null&&ue==null||Wt(t,i,xe,le,l,ue)}function u_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function WS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,S=f.initiatorType,C=f.duration;if(m&&C&&u_(S)){for(S=0,C=f.responseEnd,l+=1;l<s.length;l++){var H=s[l],ne=H.startTime;if(ne>C)break;var me=H.transferSize,xe=H.initiatorType;me&&u_(xe)&&(H=H.responseEnd,S+=me*(H<C?1:(C-ne)/(H-ne)))}if(--l,i+=8*(m+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dd=null,Ld=null;function Oc(t){return t.nodeType===9?t:t.ownerDocument}function f_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Ud(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Od=null;function qS(){var t=window.event;return t&&t.type==="popstate"?t===Od?!1:(Od=t,!0):(Od=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,p_=typeof Promise=="function"?Promise:void 0,jS=typeof queueMicrotask=="function"?queueMicrotask:typeof p_<"u"?function(t){return p_.resolve(null).then(t).catch(KS)}:h_;function KS(t){setTimeout(function(){throw t})}function fs(t){return t==="head"}function m_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Fr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")el(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,el(s);for(var m=s.firstChild;m;){var S=m.nextSibling,C=m.nodeName;m[Xa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=S}}else s==="body"&&el(t.ownerDocument.body);s=f}while(s);Fr(i)}function g_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Pd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Pd(s),Wa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function ZS(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Xa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function QS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ri(t.nextSibling),t===null))return null;return t}function __(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ri(t.nextSibling),t===null))return null;return t}function Id(t){return t.data==="$?"||t.data==="$~"}function Bd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function JS(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ri(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Fd=null;function v_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ri(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function x_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function y_(t,i,s){switch(i=Oc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function el(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Wa(t)}var wi=new Map,S_=new Set;function Pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ca=G.d;G.d={f:$S,r:eM,D:tM,C:nM,L:iM,m:aM,X:rM,S:sM,M:oM};function $S(){var t=Ca.f(),i=Ac();return t||i}function eM(t){var i=da(t);i!==null&&i.tag===5&&i.type==="form"?Fg(i):Ca.r(t)}var Pr=typeof document>"u"?null:document;function M_(t,i,s){var l=Pr;if(l&&typeof i=="string"&&i){var f=It(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),S_.has(f)||(S_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Bn(i,"link",t),vn(i),l.head.appendChild(i)))}}function tM(t){Ca.D(t),M_("dns-prefetch",t,null)}function nM(t,i){Ca.C(t,i),M_("preconnect",t,i)}function iM(t,i,s){Ca.L(t,i,s);var l=Pr;if(l&&t&&i){var f='link[rel="preload"][as="'+It(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+It(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+It(s.imageSizes)+'"]')):f+='[href="'+It(t)+'"]';var m=f;switch(i){case"style":m=Ir(t);break;case"script":m=Br(t)}wi.has(m)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),wi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(tl(m))||i==="script"&&l.querySelector(nl(m))||(i=l.createElement("link"),Bn(i,"link",t),vn(i),l.head.appendChild(i)))}}function aM(t,i){Ca.m(t,i);var s=Pr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Br(t)}if(!wi.has(m)&&(t=_({rel:"modulepreload",href:t},i),wi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(nl(m)))return}l=s.createElement("link"),Bn(l,"link",t),vn(l),s.head.appendChild(l)}}}function sM(t,i,s){Ca.S(t,i,s);var l=Pr;if(l&&t){var f=qa(l).hoistableStyles,m=Ir(t);i=i||"default";var S=f.get(m);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(tl(m)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=wi.get(m))&&zd(t,s);var H=S=l.createElement("link");vn(H),Bn(H,"link",t),H._p=new Promise(function(ne,me){H.onload=ne,H.onerror=me}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Ic(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(m,S)}}}function rM(t,i){Ca.X(t,i);var s=Pr;if(s&&t){var l=qa(s).hoistableScripts,f=Br(t),m=l.get(f);m||(m=s.querySelector(nl(f)),m||(t=_({src:t,async:!0},i),(i=wi.get(f))&&Hd(t,i),m=s.createElement("script"),vn(m),Bn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function oM(t,i){Ca.M(t,i);var s=Pr;if(s&&t){var l=qa(s).hoistableScripts,f=Br(t),m=l.get(f);m||(m=s.querySelector(nl(f)),m||(t=_({src:t,async:!0,type:"module"},i),(i=wi.get(f))&&Hd(t,i),m=s.createElement("script"),vn(m),Bn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function b_(t,i,s,l){var f=(f=se.current)?Pc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ir(s.href),s=qa(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ir(s.href);var m=qa(f).hoistableStyles,S=m.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,S),(m=f.querySelector(tl(t)))&&!m._p&&(S.instance=m,S.state.loading=5),wi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},wi.set(t,s),m||lM(f,t,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Br(s),s=qa(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Ir(t){return'href="'+It(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function E_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function lM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Bn(i,"link",s),vn(i),t.head.appendChild(i))}function Br(t){return'[src="'+It(t)+'"]'}function nl(t){return"script[async]"+t}function T_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+It(s.href)+'"]');if(l)return i.instance=l,vn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),vn(l),Bn(l,"style",f),Ic(l,s.precedence,t),i.instance=l;case"stylesheet":f=Ir(s.href);var m=t.querySelector(tl(f));if(m)return i.state.loading|=4,i.instance=m,vn(m),m;l=E_(s),(f=wi.get(f))&&zd(l,f),m=(t.ownerDocument||t).createElement("link"),vn(m);var S=m;return S._p=new Promise(function(C,H){S.onload=C,S.onerror=H}),Bn(m,"link",l),i.state.loading|=4,Ic(m,s.precedence,t),i.instance=m;case"script":return m=Br(s.src),(f=t.querySelector(nl(m)))?(i.instance=f,vn(f),f):(l=s,(f=wi.get(m))&&(l=_({},s),Hd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),vn(f),Bn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ic(l,s.precedence,t));return i.instance}function Ic(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===i)m=C;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function zd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Hd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Bc=null;function A_(t,i,s){if(Bc===null){var l=new Map,f=Bc=new Map;f.set(s,l)}else f=Bc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Xa]||m[_n]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=t+S;var C=l.get(S);C?C.push(m):l.set(S,[m])}}return l}function R_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function cM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function w_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function uM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ir(l.href),m=i.querySelector(tl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Fc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,vn(m);return}m=i.ownerDocument||i,l=E_(l),(f=wi.get(f))&&zd(l,f),m=m.createElement("link"),vn(m);var S=m;S._p=new Promise(function(C,H){S.onload=C,S.onerror=H}),Bn(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Fc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Gd=0;function fM(t,i){return t.stylesheets&&t.count===0&&Hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Gd===0&&(Gd=62500*WS());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Gd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zc=null;function Hc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zc=new Map,i.forEach(dM,t),zc=null,Fc.call(t))}function dM(t,i){if(!(i.state.loading&4)){var s=zc.get(t);if(s)var l=s.get(null);else{s=new Map,zc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),m=s.get(S)||l,m===l&&s.set(null,f),s.set(S,f),this.count++,l=Fc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var il={$$typeof:I,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function hM(t,i,s,l,f,m,S,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function C_(t,i,s,l,f,m,S,C,H,ne,me,xe){return t=new hM(t,i,s,S,H,ne,me,xe,C),i=1,m===!0&&(i|=24),m=ui(3,null,null,i),t.current=m,m.stateNode=t,i=yf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Ef(m),t}function N_(t){return t?(t=pr,t):pr}function D_(t,i,s,l,f,m){f=N_(f),l.context===null?l.context=f:l.pendingContext=f,l=es(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=ts(t,l,i),s!==null&&(ni(s,t,i),Po(s,t,i))}function L_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Vd(t,i){L_(t,i),(t=t.alternate)&&L_(t,i)}function U_(t){if(t.tag===13||t.tag===31){var i=Ps(t,67108864);i!==null&&ni(i,t,67108864),Vd(t,67108864)}}function O_(t){if(t.tag===13||t.tag===31){var i=mi();i=_o(i);var s=Ps(t,i);s!==null&&ni(s,t,i),Vd(t,i)}}var Gc=!0;function pM(t,i,s,l){var f=F.T;F.T=null;var m=G.p;try{G.p=2,kd(t,i,s,l)}finally{G.p=m,F.T=f}}function mM(t,i,s,l){var f=F.T;F.T=null;var m=G.p;try{G.p=8,kd(t,i,s,l)}finally{G.p=m,F.T=f}}function kd(t,i,s,l){if(Gc){var f=Xd(l);if(f===null)Cd(t,i,l,Vc,s),I_(t,l);else if(_M(f,t,i,s,l))l.stopPropagation();else if(I_(t,l),i&4&&-1<gM.indexOf(t)){for(;f!==null;){var m=da(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Ae(m.pendingLanes);if(S!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var H=1<<31-Fe(S);C.entanglements[1]|=H,S&=~H}Ji(m),(Lt&6)===0&&(Ec=kt()+500,Qo(0))}}break;case 31:case 13:C=Ps(m,2),C!==null&&ni(C,m,2),Ac(),Vd(m,2)}if(m=Xd(l),m===null&&Cd(t,i,l,Vc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Cd(t,i,l,null,s)}}function Xd(t){return t=Wu(t),Wd(t)}var Vc=null;function Wd(t){if(Vc=null,t=fa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Vc=t,null}function P_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case B:return 2;case E:return 8;case $:case re:return 32;case de:return 268435456;default:return 32}default:return 32}}var qd=!1,ds=null,hs=null,ps=null,al=new Map,sl=new Map,ms=[],gM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I_(t,i){switch(t){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(i.pointerId)}}function rl(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=da(i),i!==null&&U_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function _M(t,i,s,l,f){switch(i){case"focusin":return ds=rl(ds,t,i,s,l,f),!0;case"dragenter":return hs=rl(hs,t,i,s,l,f),!0;case"mouseover":return ps=rl(ps,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return al.set(m,rl(al.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,sl.set(m,rl(sl.get(m)||null,t,i,s,l,f)),!0}return!1}function B_(t){var i=fa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,or(t.priority,function(){O_(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,or(t.priority,function(){O_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Xd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Xu=l,s.target.dispatchEvent(l),Xu=null}else return i=da(s),i!==null&&U_(i),t.blockedOn=s,!1;i.shift()}return!0}function F_(t,i,s){kc(t)&&s.delete(i)}function vM(){qd=!1,ds!==null&&kc(ds)&&(ds=null),hs!==null&&kc(hs)&&(hs=null),ps!==null&&kc(ps)&&(ps=null),al.forEach(F_),sl.forEach(F_)}function Xc(t,i){t.blockedOn===i&&(t.blockedOn=null,qd||(qd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,vM)))}var Wc=null;function z_(t){Wc!==t&&(Wc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wc===t&&(Wc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Wd(l||s)===null)continue;break}var m=da(s);m!==null&&(t.splice(i,3),i-=3,Xf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Fr(t){function i(H){return Xc(H,t)}ds!==null&&Xc(ds,t),hs!==null&&Xc(hs,t),ps!==null&&Xc(ps,t),al.forEach(i),sl.forEach(i);for(var s=0;s<ms.length;s++){var l=ms[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ms.length&&(s=ms[0],s.blockedOn===null);)B_(s),s.blockedOn===null&&ms.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],S=f[Un]||null;if(typeof m=="function")S||z_(s);else if(S){var C=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[Un]||null)C=S.formAction;else if(Wd(f)!==null)continue}else C=S.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),z_(s)}}}function H_(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Yd(t){this._internalRoot=t}qc.prototype.render=Yd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=mi();D_(s,l,t,i,null,null)},qc.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;D_(t.current,2,null,t,null,null),Ac(),i[Zn]=null}};function qc(t){this._internalRoot=t}qc.prototype.unstable_scheduleHydration=function(t){if(t){var i=xo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ms.length&&i!==0&&i<ms[s].priority;s++);ms.splice(s,0,t),s===0&&B_(t)}};var G_=e.version;if(G_!=="19.2.7")throw Error(a(527,G_,"19.2.7"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var xM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{fe=Yc.inject(xM),he=Yc}catch{}}return ll.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=jg,m=Kg,S=Zg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=C_(t,1,!1,null,null,s,l,null,f,m,S,H_),t[Zn]=i.current,wd(t),new Yd(i)},ll.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",m=jg,S=Kg,C=Zg,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=C_(t,1,!0,i,s??null,l,f,H,m,S,C,H_),i.context=N_(null),s=i.current,l=mi(),l=_o(l),f=es(l),f.callback=null,ts(s,f,l),s=l,i.current.lanes=s,Ve(i,s),Ji(i),t[Zn]=i.current,wd(t),new qc(i)},ll.version="19.2.7",ll}var Q_;function CM(){if(Q_)return Zd.exports;Q_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Zd.exports=wM(),Zd.exports}var NM=CM();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pp="185",DM=0,J_=1,LM=2,bu=1,Rx=2,yl=3,Ha=0,ii=1,vi=2,Fa=0,to=1,$_=2,ev=3,tv=4,UM=5,er=100,OM=101,PM=102,IM=103,BM=104,FM=200,zM=201,HM=202,GM=203,zh=204,Hh=205,VM=206,kM=207,XM=208,WM=209,qM=210,YM=211,jM=212,KM=213,ZM=214,Gh=0,Vh=1,kh=2,so=3,Xh=4,Wh=5,qh=6,Yh=7,wx=0,QM=1,JM=2,sa=0,Cx=1,Nx=2,Dx=3,Lx=4,Ux=5,Ox=6,Px=7,nv="attached",$M="detached",Ix=300,ar=301,ro=302,eh=303,th=304,zu=306,oo=1e3,ia=1001,Nu=1002,An=1003,Bx=1004,Sl=1005,Rn=1006,Eu=1007,Ia=1008,xi=1009,Fx=1010,zx=1011,Al=1012,Ip=1013,oa=1014,Di=1015,Ga=1016,Bp=1017,Fp=1018,Rl=1020,Hx=35902,Gx=35899,Vx=1021,kx=1022,Li=1023,Va=1026,nr=1027,zp=1028,Hp=1029,sr=1030,Gp=1031,Vp=1033,Tu=33776,Au=33777,Ru=33778,wu=33779,jh=35840,Kh=35841,Zh=35842,Qh=35843,Jh=36196,$h=37492,ep=37496,tp=37488,np=37489,Du=37490,ip=37491,ap=37808,sp=37809,rp=37810,op=37811,lp=37812,cp=37813,up=37814,fp=37815,dp=37816,hp=37817,pp=37818,mp=37819,gp=37820,_p=37821,vp=36492,xp=36494,yp=36495,Sp=36283,Mp=36284,Lu=36285,bp=36286,wl=2300,Cl=2301,nh=2302,iv=2303,av=2400,sv=2401,rv=2402,eb=2500,tb=0,Xx=1,Ep=2,nb=3200,Tp=0,ib=1,Es="",Fn="srgb",yi="srgb-linear",Uu="linear",Ht="srgb",zr=7680,ov=519,ab=512,sb=513,rb=514,kp=515,ob=516,lb=517,Xp=518,cb=519,Ap=35044,lv="300 es",aa=2e3,Nl=2001;function ub(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function db(){const r=Dl("canvas");return r.style.display="block",r}const cv={};function Ou(...r){const e="THREE."+r.shift();console.log(e,...r)}function Wx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ke(...r){r=Wx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function at(...r){r=Wx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function no(...r){const e=r.join(" ");e in cv||(cv[e]=!0,Ke(...r))}function hb(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const pb={[Gh]:Vh,[kh]:qh,[Xh]:Yh,[so]:Wh,[Vh]:Gh,[qh]:kh,[Yh]:Xh,[Wh]:so};class rr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uv=1234567;const bl=Math.PI/180,lo=180/Math.PI;function ki(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[a&255]+Gn[a>>8&255]+Gn[a>>16&255]+Gn[a>>24&255]).toLowerCase()}function St(r,e,n){return Math.max(e,Math.min(n,r))}function Wp(r,e){return(r%e+e)%e}function mb(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function gb(r,e,n){return r!==e?(n-r)/(e-r):0}function El(r,e,n){return(1-n)*r+n*e}function _b(r,e,n,a){return El(r,e,1-Math.exp(-n*a))}function vb(r,e=1){return e-Math.abs(Wp(r,e*2)-e)}function xb(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function yb(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function Sb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Mb(r,e){return r+Math.random()*(e-r)}function bb(r){return r*(.5-Math.random())}function Eb(r){r!==void 0&&(uv=r);let e=uv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tb(r){return r*bl}function Ab(r){return r*lo}function Rb(r){return(r&r-1)===0&&r!==0}function wb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Cb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Nb(r,e,n,a,o){const c=Math.cos,u=Math.sin,d=c(n/2),p=u(n/2),h=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),x=c((a-e)/2),b=u((a-e)/2);switch(o){case"XYX":r.set(d*g,p*_,p*v,d*h);break;case"YZY":r.set(p*v,d*g,p*_,d*h);break;case"ZXZ":r.set(p*_,p*v,d*g,d*h);break;case"XZX":r.set(d*g,p*b,p*x,d*h);break;case"YXY":r.set(p*x,d*g,p*b,d*h);break;case"ZYZ":r.set(p*b,p*x,d*g,d*h);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Db={DEG2RAD:bl,RAD2DEG:lo,generateUUID:ki,clamp:St,euclideanModulo:Wp,mapLinear:mb,inverseLerp:gb,lerp:El,damp:_b,pingpong:vb,smoothstep:xb,smootherstep:yb,randInt:Sb,randFloat:Mb,randFloatSpread:bb,seededRandom:Eb,degToRad:Tb,radToDeg:Ab,isPowerOfTwo:Rb,ceilPowerOfTwo:wb,floorPowerOfTwo:Cb,setQuaternionFromProperEuler:Nb,normalize:Gt,denormalize:Gi},sm=class sm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sm.prototype.isVector2=!0;let Mt=sm;class ka{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let p=a[o+0],h=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],x=c[u+1],b=c[u+2],A=c[u+3];if(_!==A||p!==v||h!==x||g!==b){let M=p*v+h*x+g*b+_*A;M<0&&(v=-v,x=-x,b=-b,A=-A,M=-M);let y=1-d;if(M<.9995){const O=Math.acos(M),I=Math.sin(O);y=Math.sin(y*O)/I,d=Math.sin(d*O)/I,p=p*y+v*d,h=h*y+x*d,g=g*y+b*d,_=_*y+A*d}else{p=p*y+v*d,h=h*y+x*d,g=g*y+b*d,_=_*y+A*d;const O=1/Math.sqrt(p*p+h*h+g*g+_*_);p*=O,h*=O,g*=O,_*=O}}e[n]=p,e[n+1]=h,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],p=a[o+1],h=a[o+2],g=a[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[n]=d*b+g*_+p*x-h*v,e[n+1]=p*b+g*v+h*_-d*x,e[n+2]=h*b+g*x+d*v-p*_,e[n+3]=g*b-d*_-p*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,h=d(a/2),g=d(o/2),_=d(c/2),v=p(a/2),x=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=v*g*_+h*x*b,this._y=h*x*_-v*g*b,this._z=h*g*b+v*x*_,this._w=h*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+h*x*b,this._y=h*x*_-v*g*b,this._z=h*g*b-v*x*_,this._w=h*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-h*x*b,this._y=h*x*_+v*g*b,this._z=h*g*b+v*x*_,this._w=h*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-h*x*b,this._y=h*x*_+v*g*b,this._z=h*g*b-v*x*_,this._w=h*g*_+v*x*b;break;case"YZX":this._x=v*g*_+h*x*b,this._y=h*x*_+v*g*b,this._z=h*g*b-v*x*_,this._w=h*g*_-v*x*b;break;case"XZY":this._x=v*g*_-h*x*b,this._y=h*x*_-v*g*b,this._z=h*g*b+v*x*_,this._w=h*g*_+v*x*b;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],h=n[2],g=n[6],_=n[10],v=a+d+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-h)*x,this._z=(u-o)*x}else if(a>d&&a>_){const x=2*Math.sqrt(1+a-d-_);this._w=(g-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+h)/x}else if(d>_){const x=2*Math.sqrt(1+d-a-_);this._w=(c-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-a-d);this._w=(u-o)/x,this._x=(c+h)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,h=n._z,g=n._w;return this._x=a*g+u*d+o*h-c*p,this._y=o*g+u*p+c*d-a*h,this._z=c*g+u*h+a*p-o*d,this._w=u*g-a*d-o*p-c*h,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rm=class rm{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,h=2*(u*o-d*a),g=2*(d*n-c*o),_=2*(c*a-u*n);return this.x=n+p*h+u*_-d*g,this.y=a+p*g+d*h-c*_,this.z=o+p*_+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-a*p,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rm.prototype.isVector3=!0;let J=rm;const ih=new J,fv=new ka,om=class om{constructor(e,n,a,o,c,u,d,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,p,h)}set(e,n,a,o,c,u,d,p,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],p=a[6],h=a[1],g=a[4],_=a[7],v=a[2],x=a[5],b=a[8],A=o[0],M=o[3],y=o[6],O=o[1],I=o[4],R=o[7],U=o[2],N=o[5],D=o[8];return c[0]=u*A+d*O+p*U,c[3]=u*M+d*I+p*N,c[6]=u*y+d*R+p*D,c[1]=h*A+g*O+_*U,c[4]=h*M+g*I+_*N,c[7]=h*y+g*R+_*D,c[2]=v*A+x*O+b*U,c[5]=v*M+x*I+b*N,c[8]=v*y+x*R+b*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],h=e[7],g=e[8];return n*u*g-n*d*h-a*c*g+a*d*p+o*c*h-o*u*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],h=e[7],g=e[8],_=g*u-d*h,v=d*p-g*c,x=h*c-u*p,b=n*_+a*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(o*h-g*a)*A,e[2]=(d*a-o*u)*A,e[3]=v*A,e[4]=(g*n-o*p)*A,e[5]=(o*c-d*n)*A,e[6]=x*A,e[7]=(a*p-h*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const p=Math.cos(c),h=Math.sin(c);return this.set(a*p,a*h,-a*(p*u+h*d)+u+e,-o*h,o*p,-o*(-h*u+p*d)+d+n,0,0,1),this}scale(e,n){return no("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ah.makeScale(e,n)),this}rotate(e){return no("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ah.makeRotation(-e)),this}translate(e,n){return no("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ah.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};om.prototype.isMatrix3=!0;let ot=om;const ah=new ot,dv=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){const r={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ht&&(o.r=za(o.r),o.g=za(o.g),o.b=za(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(o.r=io(o.r),o.g=io(o.g),o.b=io(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Es?Uu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return no("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return no("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[yi]:{primaries:e,whitePoint:a,transfer:Uu,toXYZ:dv,fromXYZ:hv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:a,transfer:Ht,toXYZ:dv,fromXYZ:hv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),r}const yt=Lb();function za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hr;class Ub{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Hr===void 0&&(Hr=Dl("canvas")),Hr.width=e.width,Hr.height=e.height;const o=Hr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Hr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=za(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(za(n[a]/255)*255):n[a]=za(n[a]);return{data:n,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ob=0;class qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(sh(o[u].image)):c.push(sh(o[u]))}else c=sh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ub.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Pb=0;const rh=new J;class Ln extends rr{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,a=ia,o=ia,c=Rn,u=Ia,d=Li,p=xi,h=Ln.DEFAULT_ANISOTROPY,g=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=ki(),this.name="",this.source=new qp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ke(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case ia:e.x=e.x<0?0:1;break;case Nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case ia:e.y=e.y<0?0:1;break;case Nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Ix;Ln.DEFAULT_ANISOTROPY=1;const lm=class lm{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const p=e.elements,h=p[0],g=p[4],_=p[8],v=p[1],x=p[5],b=p[9],A=p[2],M=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(b+M)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(h+1)/2,R=(x+1)/2,U=(y+1)/2,N=(g+v)/4,D=(_+A)/4,T=(b+M)/4;return I>R&&I>U?I<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(I),o=N/a,c=D/a):R>U?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=N/o,c=T/o):U<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(U),a=D/c,o=T/c),this.set(a,o,c,n),this}let O=Math.sqrt((M-b)*(M-b)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(_-A)/O,this.z=(v-g)/O,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lm.prototype.isVector4=!0;let Yt=lm;class Ib extends rr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new Ln(o),u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new qp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends Ib{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class qx extends Ln{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bb extends Ln{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fu=class Fu{constructor(e,n,a,o,c,u,d,p,h,g,_,v,x,b,A,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,p,h,g,_,v,x,b,A,M)}set(e,n,a,o,c,u,d,p,h,g,_,v,x,b,A,M){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=d,y[13]=p,y[2]=h,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=b,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fu().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Gr.setFromMatrixColumn(e,0).length(),c=1/Gr.setFromMatrixColumn(e,1).length(),u=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),p=Math.cos(o),h=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=d*g,A=d*_;n[0]=p*g,n[4]=-p*_,n[8]=h,n[1]=x+b*h,n[5]=v-A*h,n[9]=-d*p,n[2]=A-v*h,n[6]=b+x*h,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,x=p*_,b=h*g,A=h*_;n[0]=v+A*d,n[4]=b*d-x,n[8]=u*h,n[1]=u*_,n[5]=u*g,n[9]=-d,n[2]=x*d-b,n[6]=A+v*d,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,x=p*_,b=h*g,A=h*_;n[0]=v-A*d,n[4]=-u*_,n[8]=b+x*d,n[1]=x+b*d,n[5]=u*g,n[9]=A-v*d,n[2]=-u*h,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=d*g,A=d*_;n[0]=p*g,n[4]=b*h-x,n[8]=v*h+A,n[1]=p*_,n[5]=A*h+v,n[9]=x*h-b,n[2]=-h,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,x=u*h,b=d*p,A=d*h;n[0]=p*g,n[4]=A-v*_,n[8]=b*_+x,n[1]=_,n[5]=u*g,n[9]=-d*g,n[2]=-h*g,n[6]=x*_+b,n[10]=v-A*_}else if(e.order==="XZY"){const v=u*p,x=u*h,b=d*p,A=d*h;n[0]=p*g,n[4]=-_,n[8]=h*g,n[1]=v*_+A,n[5]=u*g,n[9]=x*_-b,n[2]=b*_-x,n[6]=d*g,n[10]=A*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fb,e,zb)}lookAt(e,n,a){const o=this.elements;return gi.subVectors(e,n),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),_s.crossVectors(a,gi),_s.lengthSq()===0&&(Math.abs(a.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),_s.crossVectors(a,gi)),_s.normalize(),jc.crossVectors(gi,_s),o[0]=_s.x,o[4]=jc.x,o[8]=gi.x,o[1]=_s.y,o[5]=jc.y,o[9]=gi.y,o[2]=_s.z,o[6]=jc.z,o[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],p=a[8],h=a[12],g=a[1],_=a[5],v=a[9],x=a[13],b=a[2],A=a[6],M=a[10],y=a[14],O=a[3],I=a[7],R=a[11],U=a[15],N=o[0],D=o[4],T=o[8],L=o[12],V=o[1],z=o[5],K=o[9],ce=o[13],_e=o[2],Z=o[6],F=o[10],G=o[14],ee=o[3],pe=o[7],be=o[11],P=o[15];return c[0]=u*N+d*V+p*_e+h*ee,c[4]=u*D+d*z+p*Z+h*pe,c[8]=u*T+d*K+p*F+h*be,c[12]=u*L+d*ce+p*G+h*P,c[1]=g*N+_*V+v*_e+x*ee,c[5]=g*D+_*z+v*Z+x*pe,c[9]=g*T+_*K+v*F+x*be,c[13]=g*L+_*ce+v*G+x*P,c[2]=b*N+A*V+M*_e+y*ee,c[6]=b*D+A*z+M*Z+y*pe,c[10]=b*T+A*K+M*F+y*be,c[14]=b*L+A*ce+M*G+y*P,c[3]=O*N+I*V+R*_e+U*ee,c[7]=O*D+I*z+R*Z+U*pe,c[11]=O*T+I*K+R*F+U*be,c[15]=O*L+I*ce+R*G+U*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],h=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],A=e[7],M=e[11],y=e[15],O=p*x-h*v,I=d*x-h*_,R=d*v-p*_,U=u*x-h*g,N=u*v-p*g,D=u*_-d*g;return n*(A*O-M*I+y*R)-a*(b*O-M*U+y*N)+o*(b*I-A*U+y*D)-c*(b*R-A*N+M*D)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[1],u=e[5],d=e[9],p=e[2],h=e[6],g=e[10];return n*(u*g-d*h)-a*(c*g-d*p)+o*(c*h-u*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],h=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],A=e[13],M=e[14],y=e[15],O=n*d-a*u,I=n*p-o*u,R=n*h-c*u,U=a*p-o*d,N=a*h-c*d,D=o*h-c*p,T=g*A-_*b,L=g*M-v*b,V=g*y-x*b,z=_*M-v*A,K=_*y-x*A,ce=v*y-x*M,_e=O*ce-I*K+R*z+U*V-N*L+D*T;if(_e===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/_e;return e[0]=(d*ce-p*K+h*z)*Z,e[1]=(o*K-a*ce-c*z)*Z,e[2]=(A*D-M*N+y*U)*Z,e[3]=(v*N-_*D-x*U)*Z,e[4]=(p*V-u*ce-h*L)*Z,e[5]=(n*ce-o*V+c*L)*Z,e[6]=(M*R-b*D-y*I)*Z,e[7]=(g*D-v*R+x*I)*Z,e[8]=(u*K-d*V+h*T)*Z,e[9]=(a*V-n*K-c*T)*Z,e[10]=(b*N-A*R+y*O)*Z,e[11]=(_*R-g*N-x*O)*Z,e[12]=(d*L-u*z-p*T)*Z,e[13]=(n*z-a*L+o*T)*Z,e[14]=(A*I-b*U-M*O)*Z,e[15]=(g*U-_*I+v*O)*Z,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,p=e.z,h=c*u,g=c*d;return this.set(h*u+a,h*d-o*p,h*p+o*d,0,h*d+o*p,g*d+a,g*p-o*u,0,h*p-o*d,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,h=c+c,g=u+u,_=d+d,v=c*h,x=c*g,b=c*_,A=u*g,M=u*_,y=d*_,O=p*h,I=p*g,R=p*_,U=a.x,N=a.y,D=a.z;return o[0]=(1-(A+y))*U,o[1]=(x+R)*U,o[2]=(b-I)*U,o[3]=0,o[4]=(x-R)*N,o[5]=(1-(v+y))*N,o[6]=(M+O)*N,o[7]=0,o[8]=(b+I)*D,o[9]=(M-O)*D,o[10]=(1-(v+A))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Gr.set(o[0],o[1],o[2]).length();const d=Gr.set(o[4],o[5],o[6]).length(),p=Gr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Fi.copy(this);const h=1/u,g=1/d,_=1/p;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,n.setFromRotationMatrix(Fi),a.x=u,a.y=d,a.z=p,this}makePerspective(e,n,a,o,c,u,d=aa,p=!1){const h=this.elements,g=2*c/(n-e),_=2*c/(a-o),v=(n+e)/(n-e),x=(a+o)/(a-o);let b,A;if(p)b=c/(u-c),A=u*c/(u-c);else if(d===aa)b=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===Nl)b=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=aa,p=!1){const h=this.elements,g=2/(n-e),_=2/(a-o),v=-(n+e)/(n-e),x=-(a+o)/(a-o);let b,A;if(p)b=1/(u-c),A=u/(u-c);else if(d===aa)b=-2/(u-c),A=-(u+c)/(u-c);else if(d===Nl)b=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=b,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Fu.prototype.isMatrix4=!0;let ht=Fu;const Gr=new J,Fi=new ht,Fb=new J(0,0,0),zb=new J(1,1,1),_s=new J,jc=new J,gi=new J,pv=new ht,mv=new ka;class Rs{constructor(e=0,n=0,a=0,o=Rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],h=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mv.setFromEuler(this),this.setFromQuaternion(mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rs.DEFAULT_ORDER="XYZ";let Yx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hb=0;const gv=new J,Vr=new ka,Na=new ht,Kc=new J,cl=new J,Gb=new J,Vb=new ka,_v=new J(1,0,0),vv=new J(0,1,0),xv=new J(0,0,1),yv={type:"added"},kb={type:"removed"},kr={type:"childadded",child:null},oh={type:"childremoved",child:null};class sn extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new J,n=new Rs,a=new ka,o=new J(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ht},normalMatrix:{value:new ot}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(_v,e)}rotateY(e){return this.rotateOnAxis(vv,e)}rotateZ(e){return this.rotateOnAxis(xv,e)}translateOnAxis(e,n){return gv.copy(e).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_v,e)}translateY(e){return this.translateOnAxis(vv,e)}translateZ(e){return this.translateOnAxis(xv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Kc.copy(e):Kc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(cl,Kc,this.up):Na.lookAt(Kc,cl,this.up),this.quaternion.setFromRotationMatrix(Na),o&&(Na.extractRotation(o.matrixWorld),Vr.setFromRotationMatrix(Na),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yv),kr.child=e,this.dispatchEvent(kr),kr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kb),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yv),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,Vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const _=p[h];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),h=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);d.length>0&&(a.geometries=d),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(d){const p=[];for(const h in d){const g=d[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}sn.DEFAULT_UP=new J(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ts extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const M=n.getJointPose(A,a),y=this._getHandJoint(h,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;h.inputState.pinching&&v>x+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Ts;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function ch(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class nt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=yt.workingColorSpace){return this.r=e,this.g=n,this.b=a,yt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=yt.workingColorSpace){if(e=Wp(e,1),n=St(n,0,1),a=St(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=ch(u,c,e+1/3),this.g=ch(u,c,e),this.b=ch(u,c,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,n=Fn){function a(c){c!==void 0&&parseFloat(c)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Ke("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const a=jx[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return yt.workingToColorSpace(Vn.copy(this),e),Math.round(St(Vn.r*255,0,255))*65536+Math.round(St(Vn.g*255,0,255))*256+Math.round(St(Vn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.workingToColorSpace(Vn.copy(this),n);const a=Vn.r,o=Vn.g,c=Vn.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let p,h;const g=(d+u)/2;if(d===u)p=0,h=0;else{const _=u-d;switch(h=g<=.5?_/(u+d):_/(2-u-d),u){case a:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-a)/_+2;break;case c:p=(a-o)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,n=yt.workingColorSpace){return yt.workingToColorSpace(Vn.copy(this),n),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Fn){yt.workingToColorSpace(Vn.copy(this),e);const n=Vn.r,a=Vn.g,o=Vn.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+n,vs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(vs),e.getHSL(Zc);const a=El(vs.h,Zc.h,n),o=El(vs.s,Zc.s,n),c=El(vs.l,Zc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new nt;nt.NAMES=jx;class Yp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(e),this.density=n}clone(){return new Yp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wb extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rs,this.environmentIntensity=1,this.environmentRotation=new Rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zi=new J,Da=new J,uh=new J,La=new J,Xr=new J,Wr=new J,Sv=new J,fh=new J,dh=new J,hh=new J,ph=new Yt,mh=new Yt,gh=new Yt;class Vi{constructor(e=new J,n=new J,a=new J){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),zi.subVectors(e,n),o.cross(zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){zi.subVectors(o,n),Da.subVectors(a,n),uh.subVectors(e,n);const u=zi.dot(zi),d=zi.dot(Da),p=zi.dot(uh),h=Da.dot(Da),g=Da.dot(uh),_=u*h-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(h*p-d*g)*v,b=(u*g-d*p)*v;return c.set(1-x-b,b,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,n,a,o,c,u,d,p){return this.getBarycoord(e,n,a,o,La)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,La.x),p.addScaledVector(u,La.y),p.addScaledVector(d,La.z),p)}static getInterpolatedAttribute(e,n,a,o,c,u){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,a),gh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ph,c.x),u.addScaledVector(mh,c.y),u.addScaledVector(gh,c.z),u}static isFrontFacing(e,n,a,o){return zi.subVectors(a,n),Da.subVectors(e,n),zi.cross(Da).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),zi.cross(Da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Vi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;Xr.subVectors(o,a),Wr.subVectors(c,a),fh.subVectors(e,a);const p=Xr.dot(fh),h=Wr.dot(fh);if(p<=0&&h<=0)return n.copy(a);dh.subVectors(e,o);const g=Xr.dot(dh),_=Wr.dot(dh);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*h;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Xr,u);hh.subVectors(e,c);const x=Xr.dot(hh),b=Wr.dot(hh);if(b>=0&&x<=b)return n.copy(c);const A=x*h-p*b;if(A<=0&&h>=0&&b<=0)return d=h/(h-b),n.copy(a).addScaledVector(Wr,d);const M=g*b-x*_;if(M<=0&&_-g>=0&&x-b>=0)return Sv.subVectors(c,o),d=(_-g)/(_-g+(x-b)),n.copy(o).addScaledVector(Sv,d);const y=1/(M+A+v);return u=A*y,d=v*y,n.copy(a).addScaledVector(Xr,u).addScaledVector(Wr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ca{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Hi):Hi.fromBufferAttribute(c,u),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Qc.copy(a.boundingBox)),Qc.applyMatrix4(e.matrixWorld),this.union(Qc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),Jc.subVectors(this.max,ul),qr.subVectors(e.a,ul),Yr.subVectors(e.b,ul),jr.subVectors(e.c,ul),xs.subVectors(Yr,qr),ys.subVectors(jr,Yr),js.subVectors(qr,jr);let n=[0,-xs.z,xs.y,0,-ys.z,ys.y,0,-js.z,js.y,xs.z,0,-xs.x,ys.z,0,-ys.x,js.z,0,-js.x,-xs.y,xs.x,0,-ys.y,ys.x,0,-js.y,js.x,0];return!_h(n,qr,Yr,jr,Jc)||(n=[1,0,0,0,1,0,0,0,1],!_h(n,qr,Yr,jr,Jc))?!1:($c.crossVectors(xs,ys),n=[$c.x,$c.y,$c.z],_h(n,qr,Yr,jr,Jc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ua=[new J,new J,new J,new J,new J,new J,new J,new J],Hi=new J,Qc=new ca,qr=new J,Yr=new J,jr=new J,xs=new J,ys=new J,js=new J,ul=new J,Jc=new J,$c=new J,Ks=new J;function _h(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Ks.fromArray(r,c);const d=o.x*Math.abs(Ks.x)+o.y*Math.abs(Ks.y)+o.z*Math.abs(Ks.z),p=e.dot(Ks),h=n.dot(Ks),g=a.dot(Ks);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>d)return!1}return!0}const bn=new J,eu=new Mt;let qb=0;class jn extends rr{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Ap,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)eu.fromBufferAttribute(this,n),eu.applyMatrix3(e),this.setXY(n,eu.x,eu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix3(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Gi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Gt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array),o=Gt(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array),o=Gt(o,this.array),c=Gt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Kx extends jn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Zx extends jn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class kn extends jn{constructor(e,n,a){super(new Float32Array(e),n,a)}}const Yb=new ca,fl=new J,vh=new J;class ua{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):Yb.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fl.subVectors(e,this.center);const n=fl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(fl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fl.copy(e.center).add(vh)),this.expandByPoint(fl.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jb=0;const Ci=new ht,xh=new sn,Kr=new J,_i=new ca,dl=new ca,Dn=new J;class ai extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ub(e)?Zx:Kx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ot().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,n,a){return Ci.makeTranslation(e,n,a),this.applyMatrix4(Ci),this}scale(e,n,a){return Ci.makeScale(e,n,a),this.applyMatrix4(Ci),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new kn(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const a=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];dl.setFromBufferAttribute(d),this.morphTargetsRelative?(Dn.addVectors(_i.min,dl.min),_i.expandByPoint(Dn),Dn.addVectors(_i.max,dl.max),_i.expandByPoint(Dn)):(_i.expandByPoint(dl.min),_i.expandByPoint(dl.max))}_i.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Dn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Dn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Dn.fromBufferAttribute(d,h),p&&(Kr.fromBufferAttribute(e,h),Dn.add(Kr)),o=Math.max(o,a.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new jn(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],p=[];for(let T=0;T<a.count;T++)d[T]=new J,p[T]=new J;const h=new J,g=new J,_=new J,v=new Mt,x=new Mt,b=new Mt,A=new J,M=new J;function y(T,L,V){h.fromBufferAttribute(a,T),g.fromBufferAttribute(a,L),_.fromBufferAttribute(a,V),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,L),b.fromBufferAttribute(c,V),g.sub(h),_.sub(h),x.sub(v),b.sub(v);const z=1/(x.x*b.y-b.x*x.y);isFinite(z)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(z),M.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(z),d[T].add(A),d[L].add(A),d[V].add(A),p[T].add(M),p[L].add(M),p[V].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,L=O.length;T<L;++T){const V=O[T],z=V.start,K=V.count;for(let ce=z,_e=z+K;ce<_e;ce+=3)y(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const I=new J,R=new J,U=new J,N=new J;function D(T){U.fromBufferAttribute(o,T),N.copy(U);const L=d[T];I.copy(L),I.sub(U.multiplyScalar(U.dot(L))).normalize(),R.crossVectors(N,L);const z=R.dot(p[T])<0?-1:1;u.setXYZW(T,I.x,I.y,I.z,z)}for(let T=0,L=O.length;T<L;++T){const V=O[T],z=V.start,K=V.count;for(let ce=z,_e=z+K;ce<_e;ce+=3)D(e.getX(ce+0)),D(e.getX(ce+1)),D(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new J,c=new J,u=new J,d=new J,p=new J,h=new J,g=new J,_=new J;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),A=e.getX(v+1),M=e.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(a,b),p.fromBufferAttribute(a,A),h.fromBufferAttribute(a,M),d.add(g),p.add(g),h.add(g),a.setXYZ(b,d.x,d.y,d.z),a.setXYZ(A,p.x,p.y,p.z),a.setXYZ(M,h.x,h.y,h.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Dn.fromBufferAttribute(e,n),Dn.normalize(),e.setXYZ(n,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(d,p){const h=d.array,g=d.itemSize,_=d.normalized,v=new h.constructor(p.length*g);let x=0,b=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?x=p[A]*d.data.stride+d.offset:x=p[A]*g;for(let y=0;y<g;y++)v[b++]=h[x++]}return new jn(v,g,_)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ai,a=this.index.array,o=this.attributes;for(const d in o){const p=o[d],h=e(p,a);n.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const p=[],h=c[d];for(let g=0,_=h.length;g<_;g++){const v=h[g],x=e(v,a);p.push(x)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const h=u[d];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const h=a[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let _=0,v=h.length;_<v;_++){const x=h[_];g.push(x.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ap,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[a+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wn=new J;class jp{constructor(e,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Wn.fromBufferAttribute(this,n),Wn.applyMatrix4(e),this.setXYZ(n,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Wn.fromBufferAttribute(this,n),Wn.applyNormalMatrix(e),this.setXYZ(n,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Wn.fromBufferAttribute(this,n),Wn.transformDirection(e),this.setXYZ(n,Wn.x,Wn.y,Wn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Gi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Gt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Gi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Gi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Gi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Gi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array),o=Gt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Gt(n,this.array),a=Gt(a,this.array),o=Gt(o,this.array),c=Gt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Ou("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new jn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ou("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Zb=0;class Xi extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=to,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Hh,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Ke(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(a.blending=this.blending),this.side!==Ha&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==zh&&(a.blendSrc=this.blendSrc),this.blendDst!==Hh&&(a.blendDst=this.blendDst),this.blendEquation!==er&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ov&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Mt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oa=new J,yh=new J,tu=new J,Ss=new J,Sh=new J,nu=new J,Mh=new J;class Hu{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,n),Oa.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){yh.copy(e).add(n).multiplyScalar(.5),tu.copy(n).sub(e).normalize(),Ss.copy(this.origin).sub(yh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(tu),d=Ss.dot(this.direction),p=-Ss.dot(tu),h=Ss.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*p-d,v=u*d-p,b=c*g,_>=0)if(v>=-b)if(v<=b){const A=1/g;_*=A,v*=A,x=_*(_+u*v+2*d)+v*(u*_+v+2*p)+h}else v=c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*p)+h;else v=-c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*p)+h;else v<=-b?(_=Math.max(0,-(-u*c+d)),v=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+h):v<=b?(_=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+h):(_=Math.max(0,-(u*c+d)),v=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+h);else v=u>0?-c:c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(yh).addScaledVector(tu,v),x}intersectSphere(e,n){Oa.subVectors(e.center,this.origin);const a=Oa.dot(this.direction),o=Oa.dot(Oa)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,p=a+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,p;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(a=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(a=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||d>o)||((d>a||a!==a)&&(a=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,n,a,o,c){Sh.subVectors(n,e),nu.subVectors(a,e),Mh.crossVectors(Sh,nu);let u=this.direction.dot(Mh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ss.subVectors(this.origin,e);const p=d*this.direction.dot(nu.crossVectors(Ss,nu));if(p<0)return null;const h=d*this.direction.dot(Sh.cross(Ss));if(h<0||p+h>u)return null;const g=-d*Ss.dot(Mh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ir extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rs,this.combine=wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mv=new ht,Zs=new Hu,iu=new ua,bv=new J,au=new J,su=new J,ru=new J,bh=new J,ou=new J,Ev=new J,lu=new J;class Kn extends sn{constructor(e=new ai,n=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){ou.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const g=d[p],_=c[p];g!==0&&(bh.fromBufferAttribute(_,e),u?ou.addScaledVector(bh,g):ou.addScaledVector(bh.sub(n),g))}n.add(ou)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),iu.copy(a.boundingSphere),iu.applyMatrix4(c),Zs.copy(e.ray).recast(e.near),!(iu.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(iu,bv)===null||Zs.origin.distanceToSquared(bv)>(e.far-e.near)**2))&&(Mv.copy(c).invert(),Zs.copy(e.ray).applyMatrix4(Mv),!(a.boundingBox!==null&&Zs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Zs)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const M=v[b],y=u[M.materialIndex],O=Math.max(M.start,x.start),I=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let R=O,U=I;R<U;R+=3){const N=d.getX(R),D=d.getX(R+1),T=d.getX(R+2);o=cu(this,y,e,a,h,g,_,N,D,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let M=b,y=A;M<y;M+=3){const O=d.getX(M),I=d.getX(M+1),R=d.getX(M+2);o=cu(this,u,e,a,h,g,_,O,I,R),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const M=v[b],y=u[M.materialIndex],O=Math.max(M.start,x.start),I=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let R=O,U=I;R<U;R+=3){const N=R,D=R+1,T=R+2;o=cu(this,y,e,a,h,g,_,N,D,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let M=b,y=A;M<y;M+=3){const O=M,I=M+1,R=M+2;o=cu(this,u,e,a,h,g,_,O,I,R),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function Qb(r,e,n,a,o,c,u,d){let p;if(e.side===ii?p=a.intersectTriangle(u,c,o,!0,d):p=a.intersectTriangle(o,c,u,e.side===Ha,d),p===null)return null;lu.copy(d),lu.applyMatrix4(r.matrixWorld);const h=n.ray.origin.distanceTo(lu);return h<n.near||h>n.far?null:{distance:h,point:lu.clone(),object:r}}function cu(r,e,n,a,o,c,u,d,p,h){r.getVertexPosition(d,au),r.getVertexPosition(p,su),r.getVertexPosition(h,ru);const g=Qb(r,e,n,a,au,su,ru,Ev);if(g){const _=new J;Vi.getBarycoord(Ev,au,su,ru,_),o&&(g.uv=Vi.getInterpolatedAttribute(o,d,p,h,_,new Mt)),c&&(g.uv1=Vi.getInterpolatedAttribute(c,d,p,h,_,new Mt)),u&&(g.normal=Vi.getInterpolatedAttribute(u,d,p,h,_,new J),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:h,normal:new J,materialIndex:0};Vi.getNormal(au,su,ru,v.normal),g.face=v,g.barycoord=_}return g}const hl=new Yt,Tv=new Yt,Av=new Yt,Jb=new Yt,Rv=new ht,uu=new J,Eh=new ua,wv=new ht,Th=new Hu;class $b extends Kn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nv,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ca),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,uu),this.boundingBox.expandByPoint(uu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ua),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,uu),this.boundingSphere.expandByPoint(uu)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,o=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eh.copy(this.boundingSphere),Eh.applyMatrix4(o),e.ray.intersectsSphere(Eh)!==!1&&(wv.copy(o).invert(),Th.copy(e.ray).applyMatrix4(wv),!(this.boundingBox!==null&&Th.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Th)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Yt,n=this.geometry.attributes.skinWeight;for(let a=0,o=n.count;a<o;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$M?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,o=this.geometry;Tv.fromBufferAttribute(o.attributes.skinIndex,e),Av.fromBufferAttribute(o.attributes.skinWeight,e),n.isVector4?(hl.copy(n),n.set(0,0,0,0)):(hl.set(...n,1),n.set(0,0,0)),hl.applyMatrix4(this.bindMatrix);for(let c=0;c<4;c++){const u=Av.getComponent(c);if(u!==0){const d=Tv.getComponent(c);Rv.multiplyMatrices(a.bones[d].matrixWorld,a.boneInverses[d]),n.addScaledVector(Jb.copy(hl).applyMatrix4(Rv),u)}}return n.isVector4&&(n.w=hl.w),n.applyMatrix4(this.bindMatrixInverse)}}class Qx extends sn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kp extends Ln{constructor(e=null,n=1,a=1,o,c,u,d,p,h=An,g=An,_,v){super(null,u,d,p,h,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cv=new ht,eE=new ht;class Zp{constructor(e=[],n=[]){this.uuid=ki(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,o=this.bones.length;a<o;a++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new ht;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,o=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const d=e[c]?e[c].matrixWorld:eE;Cv.multiplyMatrices(d,n[c]),Cv.toArray(a,c*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Zp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new Kp(n,e,e,Li,Di);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const o=this.bones[n];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,o=e.bones.length;a<o;a++){const c=e.bones[a];let u=n[c];u===void 0&&(Ke("Skeleton: No bone found with UUID:",c),u=new Qx),this.bones.push(u),this.boneInverses.push(new ht().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let o=0,c=n.length;o<c;o++){const u=n[o];e.bones.push(u.uuid);const d=a[o];e.boneInverses.push(d.toArray())}return e}}class Rp extends jn{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zr=new ht,Nv=new ht,fu=[],Dv=new ca,tE=new ht,pl=new Kn,ml=new ua;class nE extends Kn{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Rp(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,tE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ca),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Zr),Dv.copy(e.boundingBox).applyMatrix4(Zr),this.boundingBox.union(Dv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ua),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Zr),ml.copy(e.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(ml)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let d=0;d<a.length;d++)a[d]=o[u+d]}raycast(e,n){const a=this.matrixWorld,o=this.count;if(pl.geometry=this.geometry,pl.material=this.material,pl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(a),e.ray.intersectsSphere(ml)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Zr),Nv.multiplyMatrices(a,Zr),pl.matrixWorld=Nv,pl.raycast(e,fu);for(let u=0,d=fu.length;u<d;u++){const p=fu[u];p.instanceId=c,p.object=this,n.push(p)}fu.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Rp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new Kp(new Float32Array(o*this.count),o,this.count,zp,Di));const c=this.morphTexture.source.data.data;let u=0;for(let h=0;h<a.length;h++)u+=a[h];const d=this.geometry.morphTargetsRelative?1:1-u,p=o*e;return c[p]=d,c.set(a,p+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ah=new J,iE=new J,aE=new ot;class $s{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Ah.subVectors(a,n).cross(iE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(Ah),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||aE.getNormalMatrix(e),o=this.coplanarPoint(Ah).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new ua,sE=new Mt(.5,.5),du=new J;class Qp{constructor(e=new $s,n=new $s,a=new $s,o=new $s,c=new $s,u=new $s){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=aa,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],h=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],A=c[9],M=c[10],y=c[11],O=c[12],I=c[13],R=c[14],U=c[15];if(o[0].setComponents(h-u,x-g,y-b,U-O).normalize(),o[1].setComponents(h+u,x+g,y+b,U+O).normalize(),o[2].setComponents(h+d,x+_,y+A,U+I).normalize(),o[3].setComponents(h-d,x-_,y-A,U-I).normalize(),a)o[4].setComponents(p,v,M,R).normalize(),o[5].setComponents(h-p,x-v,y-M,U-R).normalize();else if(o[4].setComponents(h-p,x-v,y-M,U-R).normalize(),n===aa)o[5].setComponents(h+p,x+v,y+M,U+R).normalize();else if(n===Nl)o[5].setComponents(p,v,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);const n=sE.distanceTo(e.center);return Qs.radius=.7071067811865476+n,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(du.x=o.normal.x>0?e.max.x:e.min.x,du.y=o.normal.y>0?e.max.y:e.min.y,du.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jp extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pu=new J,Iu=new J,Lv=new ht,gl=new Hu,hu=new ua,Rh=new J,Uv=new J;class $p extends sn{constructor(e=new ai,n=new Jp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)Pu.fromBufferAttribute(n,o-1),Iu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=Pu.distanceTo(Iu);e.setAttribute("lineDistance",new kn(a,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),hu.copy(a.boundingSphere),hu.applyMatrix4(o),hu.radius+=c,e.ray.intersectsSphere(hu)===!1)return;Lv.copy(o).invert(),gl.copy(e.ray).applyMatrix4(Lv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let A=x,M=b-1;A<M;A+=h){const y=g.getX(A),O=g.getX(A+1),I=pu(this,e,gl,p,y,O,A);I&&n.push(I)}if(this.isLineLoop){const A=g.getX(b-1),M=g.getX(x),y=pu(this,e,gl,p,A,M,b-1);y&&n.push(y)}}else{const x=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let A=x,M=b-1;A<M;A+=h){const y=pu(this,e,gl,p,A,A+1,A);y&&n.push(y)}if(this.isLineLoop){const A=pu(this,e,gl,p,b-1,x,b-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function pu(r,e,n,a,o,c,u){const d=r.geometry.attributes.position;if(Pu.fromBufferAttribute(d,o),Iu.fromBufferAttribute(d,c),n.distanceSqToSegment(Pu,Iu,Rh,Uv)>a)return;Rh.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Rh);if(!(h<e.near||h>e.far))return{distance:h,point:Uv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Ov=new J,Pv=new J;class Jx extends $p{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Ov.fromBufferAttribute(n,o),Pv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Ov.distanceTo(Pv);e.setAttribute("lineDistance",new kn(a,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rE extends $p{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class $x extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Iv=new ht,wp=new Hu,mu=new ua,gu=new J;class oE extends sn{constructor(e=new ai,n=new $x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),mu.copy(a.boundingSphere),mu.applyMatrix4(o),mu.radius+=c,e.ray.intersectsSphere(mu)===!1)return;Iv.copy(o).invert(),wp.copy(e.ray).applyMatrix4(Iv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=a.index,_=a.attributes.position;if(h!==null){const v=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let b=v,A=x;b<A;b++){const M=h.getX(b);gu.fromBufferAttribute(_,M),Bv(gu,M,p,o,e,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let b=v,A=x;b<A;b++)gu.fromBufferAttribute(_,b),Bv(gu,b,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Bv(r,e,n,a,o,c,u){const d=wp.distanceSqToPoint(r);if(d<n){const p=new J;wp.closestPointToPoint(r,p),p.applyMatrix4(a);const h=o.ray.origin.distanceTo(p);if(h<o.near||h>o.far)return;c.push({distance:h,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class ey extends Ln{constructor(e=[],n=ar,a,o,c,u,d,p,h,g){super(e,n,a,o,c,u,d,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class co extends Ln{constructor(e,n,a=oa,o,c,u,d=An,p=An,h,g=Va,_=1){if(g!==Va&&g!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,c,u,d,p,g,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class lE extends co{constructor(e,n=oa,a=ar,o,c,u=An,d=An,p,h=Va){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,a,o,c,u,d,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ty extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ol extends ai{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],h=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,a,n,e,u,c,0),b("z","y","x",1,-1,a,n,-e,u,c,1),b("x","z","y",1,1,e,a,n,o,u,2),b("x","z","y",1,-1,e,a,-n,o,u,3),b("x","y","z",1,-1,e,n,a,o,c,4),b("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new kn(h,3)),this.setAttribute("normal",new kn(g,3)),this.setAttribute("uv",new kn(_,2));function b(A,M,y,O,I,R,U,N,D,T,L){const V=R/D,z=U/T,K=R/2,ce=U/2,_e=N/2,Z=D+1,F=T+1;let G=0,ee=0;const pe=new J;for(let be=0;be<F;be++){const P=be*z-ce;for(let j=0;j<Z;j++){const Se=j*V-K;pe[A]=Se*O,pe[M]=P*I,pe[y]=_e,h.push(pe.x,pe.y,pe.z),pe[A]=0,pe[M]=0,pe[y]=N>0?1:-1,g.push(pe.x,pe.y,pe.z),_.push(j/D),_.push(1-be/T),G+=1}}for(let be=0;be<T;be++)for(let P=0;P<D;P++){const j=v+P+Z*be,Se=v+P+Z*(be+1),we=v+(P+1)+Z*(be+1),Ie=v+(P+1)+Z*be;p.push(j,Se,Ie),p.push(Se,we,Ie),ee+=6}d.addGroup(x,ee,L),x+=ee,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pl extends ai{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),p=Math.floor(o),h=d+1,g=p+1,_=e/d,v=n/p,x=[],b=[],A=[],M=[];for(let y=0;y<g;y++){const O=y*v-u;for(let I=0;I<h;I++){const R=I*_-c;b.push(R,-O,0),A.push(0,0,1),M.push(I/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let O=0;O<d;O++){const I=O+h*y,R=O+h*(y+1),U=O+1+h*(y+1),N=O+1+h*y;x.push(I,R,N),x.push(R,U,N)}this.setIndex(x),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(A,3)),this.setAttribute("uv",new kn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.widthSegments,e.heightSegments)}}class em extends ai{constructor(e=1,n=.4,a=64,o=8,c=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:a,radialSegments:o,p:c,q:u},a=Math.floor(a),o=Math.floor(o);const d=[],p=[],h=[],g=[],_=new J,v=new J,x=new J,b=new J,A=new J,M=new J,y=new J;for(let I=0;I<=a;++I){const R=I/a*c*Math.PI*2;O(R,c,u,e,x),O(R+.01,c,u,e,b),M.subVectors(b,x),y.addVectors(b,x),A.crossVectors(M,y),y.crossVectors(A,M),A.normalize(),y.normalize();for(let U=0;U<=o;++U){const N=U/o*Math.PI*2,D=-n*Math.cos(N),T=n*Math.sin(N);_.x=x.x+(D*y.x+T*A.x),_.y=x.y+(D*y.y+T*A.y),_.z=x.z+(D*y.z+T*A.z),p.push(_.x,_.y,_.z),v.subVectors(_,x).normalize(),h.push(v.x,v.y,v.z),g.push(I/a),g.push(U/o)}}for(let I=1;I<=a;I++)for(let R=1;R<=o;R++){const U=(o+1)*(I-1)+(R-1),N=(o+1)*I+(R-1),D=(o+1)*I+R,T=(o+1)*(I-1)+R;d.push(U,N,T),d.push(N,D,T)}this.setIndex(d),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(h,3)),this.setAttribute("uv",new kn(g,2));function O(I,R,U,N,D){const T=Math.cos(I),L=Math.sin(I),V=U/R*I,z=Math.cos(V);D.x=N*(2+z)*.5*T,D.y=N*(2+z)*L*.5,D.z=N*Math.sin(V)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new em(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class cE extends Xi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new nt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function uo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];if(Fv(o))o.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(Fv(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function qn(r){const e={};for(let n=0;n<r.length;n++){const a=uo(r[n]);for(const o in a)e[o]=a[o]}return e}function Fv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function uE(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function ny(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const fE={clone:uo,merge:qn};var dE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dE,this.fragmentShader=hE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=uE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const o=e.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new nt().setHex(o.value);break;case"v2":this.uniforms[a].value=new Mt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new J().fromArray(o.value);break;case"v4":this.uniforms[a].value=new Yt().fromArray(o.value);break;case"m3":this.uniforms[a].value=new ot().fromArray(o.value);break;case"m4":this.uniforms[a].value=new ht().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pE extends la{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tm extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends tm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mE extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gE extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _u(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function _E(r){function e(o,c){return r[o]-r[c]}const n=r.length,a=new Array(n);for(let o=0;o!==n;++o)a[o]=o;return a.sort(e),a}function zv(r,e,n){const a=r.length,o=new r.constructor(a);for(let c=0,u=0;u!==a;++c){const d=n[c]*e;for(let p=0;p!==e;++p)o[u++]=r[d+p]}return o}function vE(r,e,n,a){let o=1,c=r[0];for(;c!==void 0&&c[a]===void 0;)c=r[o++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=r[o++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=r[o++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=r[o++];while(c!==void 0)}class fo{constructor(e,n,a,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,o=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<o)){for(let d=a+2;;){if(o===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===d)break;if(c=o,o=n[++a],e<o)break t}u=n.length;break n}if(!(e>=c)){const d=n[1];e<d&&(a=2,c=d);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(o=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const d=a+u>>>1;e<n[d]?u=d:a=d+1}if(o=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,o)}return this.interpolate_(a,c,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o;for(let u=0;u!==o;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class xE extends fo{constructor(e,n,a,o){super(e,n,a,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:av,endingEnd:av}}intervalChanged_(e,n,a){const o=this.parameterPositions;let c=e-2,u=e+1,d=o[c],p=o[u];if(d===void 0)switch(this.getSettings_().endingStart){case sv:c=e,d=2*n-a;break;case rv:c=o.length-2,d=n+o[c]-o[c+1];break;default:c=e,d=a}if(p===void 0)switch(this.getSettings_().endingEnd){case sv:u=e,p=2*a-n;break;case rv:u=1,p=a+o[1]-o[0];break;default:u=e-1,p=n}const h=(a-n)*.5,g=this.valueSize;this._weightPrev=h/(n-d),this._weightNext=h/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=e*d,h=p-d,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,b=(a-n)/(o-n),A=b*b,M=A*b,y=-v*M+2*v*A-v*b,O=(1+v)*M+(-1.5-2*v)*A+(-.5+v)*b+1,I=(-1-x)*M+(1.5+x)*A+.5*b,R=x*M-x*A;for(let U=0;U!==d;++U)c[U]=y*u[g+U]+O*u[h+U]+I*u[p+U]+R*u[_+U];return c}}class yE extends fo{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=e*d,h=p-d,g=(a-n)/(o-n),_=1-g;for(let v=0;v!==d;++v)c[v]=u[h+v]*_+u[p+v]*g;return c}}class SE extends fo{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class ME extends fo{interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=e*d,h=p-d,g=this.inTangents,_=this.outTangents;if(!g||!_){const b=(a-n)/(o-n),A=1-b;for(let M=0;M!==d;++M)c[M]=u[h+M]*A+u[p+M]*b;return c}const v=d*2,x=e-1;for(let b=0;b!==d;++b){const A=u[h+b],M=u[p+b],y=x*v+b*2,O=_[y],I=_[y+1],R=e*v+b*2,U=g[R],N=g[R+1];let D=(a-n)/(o-n),T,L,V,z,K;for(let ce=0;ce<8;ce++){T=D*D,L=T*D,V=1-D,z=V*V,K=z*V;const Z=K*n+3*z*D*O+3*V*T*U+L*o-a;if(Math.abs(Z)<1e-10)break;const F=3*z*(O-n)+6*V*D*(U-O)+3*T*(o-U);if(Math.abs(F)<1e-10)break;D=D-Z/F,D=Math.max(0,Math.min(1,D))}c[b]=K*A+3*z*D*I+3*V*T*N+L*M}return c}}class qi{constructor(e,n,a,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_u(n,this.TimeBufferType),this.values=_u(a,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:_u(e.times,Array),values:_u(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(a.interpolation=o)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new SE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const n=new ME(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case wl:n=this.InterpolantFactoryMethodDiscrete;break;case Cl:n=this.InterpolantFactoryMethodLinear;break;case nh:n=this.InterpolantFactoryMethodSmooth;break;case iv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ke("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wl;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return nh;case this.InterpolantFactoryMethodBezier:return iv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]*=e}return this}trim(e,n){const a=this.times,o=a.length;let c=0,u=o-1;for(;c!==o&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==o){c>=u&&(u=Math.max(u,1),c=u-1);const d=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*d,u*d)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,o=this.values,c=a.length;c===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let d=0;d!==c;d++){const p=a[d];if(typeof p=="number"&&isNaN(p)){at("KeyframeTrack: Time is not a valid number.",this,d,p),e=!1;break}if(u!==null&&u>p){at("KeyframeTrack: Out of order keys.",this,d,p,u),e=!1;break}u=p}if(o!==void 0&&fb(o))for(let d=0,p=o.length;d!==p;++d){const h=o[d];if(isNaN(h)){at("KeyframeTrack: Value is not a valid number.",this,d,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),o=this.getInterpolation()===nh,c=e.length-1;let u=1;for(let d=1;d<c;++d){let p=!1;const h=e[d],g=e[d+1];if(h!==g&&(d!==1||h!==e[0]))if(o)p=!0;else{const _=d*a,v=_-a,x=_+a;for(let b=0;b!==a;++b){const A=n[_+b];if(A!==n[v+b]||A!==n[x+b]){p=!0;break}}}if(p){if(d!==u){e[u]=e[d];const _=d*a,v=u*a;for(let x=0;x!==a;++x)n[v+x]=n[_+x]}++u}}if(c>0){e[u]=e[c];for(let d=c*a,p=u*a,h=0;h!==a;++h)n[p+h]=n[d+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,o=new a(this.name,e,n);return o.createInterpolant=this.createInterpolant,o}}qi.prototype.ValueTypeName="";qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=Cl;class ho extends qi{constructor(e,n,a){super(e,n,a)}}ho.prototype.ValueTypeName="bool";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=wl;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class iy extends qi{constructor(e,n,a,o){super(e,n,a,o)}}iy.prototype.ValueTypeName="color";class Ll extends qi{constructor(e,n,a,o){super(e,n,a,o)}}Ll.prototype.ValueTypeName="number";class bE extends fo{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=(a-n)/(o-n);let h=e*d;for(let g=h+d;h!==g;h+=4)ka.slerpFlat(c,0,u,h-d,u,h,p);return c}}class Ul extends qi{constructor(e,n,a,o){super(e,n,a,o)}InterpolantFactoryMethodLinear(e){return new bE(this.times,this.values,this.getValueSize(),e)}}Ul.prototype.ValueTypeName="quaternion";Ul.prototype.InterpolantFactoryMethodSmooth=void 0;class po extends qi{constructor(e,n,a){super(e,n,a)}}po.prototype.ValueTypeName="string";po.prototype.ValueBufferType=Array;po.prototype.DefaultInterpolation=wl;po.prototype.InterpolantFactoryMethodLinear=void 0;po.prototype.InterpolantFactoryMethodSmooth=void 0;class Bu extends qi{constructor(e,n,a,o){super(e,n,a,o)}}Bu.prototype.ValueTypeName="vector";class EE{constructor(e="",n=-1,a=[],o=eb){this.name=e,this.tracks=a,this.duration=n,this.blendMode=o,this.uuid=ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,o=1/(e.fps||1);for(let u=0,d=a.length;u!==d;++u)n.push(AE(a[u]).scale(o));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c.userData=JSON.parse(e.userData||"{}"),c}static toJSON(e){const n=[],a=e.tracks,o={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(qi.toJSON(a[c]));return o}static CreateFromMorphTargetSequence(e,n,a,o){const c=n.length,u=[];for(let d=0;d<c;d++){let p=[],h=[];p.push((d+c-1)%c,d,(d+1)%c),h.push(0,1,0);const g=_E(p);p=zv(p,1,g),h=zv(h,1,g),!o&&p[0]===0&&(p.push(c),h.push(h[0])),u.push(new Ll(".morphTargetInfluences["+n[d].name+"]",p,h).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const o=e;a=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<a.length;o++)if(a[o].name===n)return a[o];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const o={},c=/^([\w-]*?)([\d]+)$/;for(let d=0,p=e.length;d<p;d++){const h=e[d],g=h.name.match(c);if(g&&g.length>1){const _=g[1];let v=o[_];v||(o[_]=v=[]),v.push(h)}}const u=[];for(const d in o)u.push(this.CreateFromMorphTargetSequence(d,o[d],n,a));return u}resetDuration(){const e=this.tracks;let n=0;for(let a=0,o=e.length;a!==o;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function TE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ll;case"vector":case"vector2":case"vector3":case"vector4":return Bu;case"color":return iy;case"quaternion":return Ul;case"bool":case"boolean":return ho;case"string":return po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function AE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=TE(r.type);if(r.times===void 0){const n=[],a=[];vE(r.keys,n,a,"value"),r.times=n,r.values=a}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ba={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Hv(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Hv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Hv(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class RE{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return h.push(g,_),this},this.removeHandler=function(g){const _=h.indexOf(g);return _!==-1&&h.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=h.length;_<v;_+=2){const x=h[_],b=h[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wE=new RE;class mo{constructor(e){this.manager=e!==void 0?e:wE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}mo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pa={};class CE extends Error{constructor(e,n){super(e),this.response=n}}class ay extends mo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=Ba.get(`file:${e}`);if(c!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0);return}if(Pa[e]!==void 0){Pa[e].push({onLoad:n,onProgress:a,onError:o});return}Pa[e]=[],Pa[e].push({onLoad:n,onProgress:a,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,p=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=Pa[e],_=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=v?parseInt(v):0,b=x!==0;let A=0;const M=new ReadableStream({start(y){O();function O(){_.read().then(({done:I,value:R})=>{if(I)y.close();else{A+=R.byteLength;const U=new ProgressEvent("progress",{lengthComputable:b,loaded:A,total:x});for(let N=0,D=g.length;N<D;N++){const T=g[N];T.onProgress&&T.onProgress(U)}y.enqueue(R),O()}},I=>{y.error(I)})}}});return new Response(M)}else throw new CE(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return h.json();default:if(d==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return h.arrayBuffer().then(b=>x.decode(b))}}}).then(h=>{Ba.add(`file:${e}`,h);const g=Pa[e];delete Pa[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onLoad&&x.onLoad(h)}}).catch(h=>{const g=Pa[e];if(g===void 0)throw this.manager.itemError(e),h;delete Pa[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qr=new WeakMap;class NE extends mo{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ba.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=Qr.get(u);_===void 0&&(_=[],Qr.set(u,_)),_.push({onLoad:n,onError:o})}return u}const d=Dl("img");function p(){g(),n&&n(this);const _=Qr.get(this)||[];for(let v=0;v<_.length;v++){const x=_[v];x.onLoad&&x.onLoad(this)}Qr.delete(this),c.manager.itemEnd(e)}function h(_){g(),o&&o(_),Ba.remove(`image:${e}`);const v=Qr.get(this)||[];for(let x=0;x<v.length;x++){const b=v[x];b.onError&&b.onError(_)}Qr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",h,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Ba.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class DE extends mo{constructor(e){super(e)}load(e,n,a,o){const c=new Ln,u=new NE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Il extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class LE extends Il{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const wh=new ht,Gv=new J,Vv=new J;class nm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qp,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Gv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gv),Vv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vv),n.updateMatrixWorld(),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Nl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vu=new J,xu=new ka,$i=new J;let sy=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vu,xu,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vu,xu,$i.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(vu,xu,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vu,xu,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const Ms=new J,kv=new Mt,Xv=new Mt;class Yn extends sy{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,n){return this.getViewBounds(e,kv,Xv),n.subVectors(Xv,kv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/h,o*=u.width/p,a*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class UE extends nm{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=lo*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class OE extends Il{constructor(e,n,a=0,o=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new UE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class PE extends nm{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class IE extends Il{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new PE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Gu extends sy{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class BE extends nm{constructor(){super(new Gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cp extends Il{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new BE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class FE extends Il{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Ch=new WeakMap;class zE extends mo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ba.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(h=>{Ch.has(u)===!0?(o&&o(Ch.get(u)),c.manager.itemError(e),c.manager.itemEnd(e)):(n&&n(h),c.manager.itemEnd(e))});return}setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);return}const d={};d.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",d.headers=this.requestHeader,d.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,d).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(h){Ba.add(`image-bitmap:${e}`,h),n&&n(h),c.manager.itemEnd(e)}).catch(function(h){o&&o(h),Ch.set(p,h),Ba.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});Ba.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Jr=-90,$r=1;class HE extends sn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(Jr,$r,e,n);o.layers=this.layers,this.add(o);const c=new Yn(Jr,$r,e,n);c.layers=this.layers,this.add(c);const u=new Yn(Jr,$r,e,n);u.layers=this.layers,this.add(u);const d=new Yn(Jr,$r,e,n);d.layers=this.layers,this.add(d);const p=new Yn(Jr,$r,e,n);p.layers=this.layers,this.add(p);const h=new Yn(Jr,$r,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,p]=n;for(const h of n)this.remove(h);if(e===aa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Nl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(a,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class GE extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const im="\\[\\]\\.:\\/",VE=new RegExp("["+im+"]","g"),am="[^"+im+"]",kE="[^"+im.replace("\\.","")+"]",XE=/((?:WC+[\/:])*)/.source.replace("WC",am),WE=/(WCOD+)?/.source.replace("WCOD",kE),qE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",am),YE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",am),jE=new RegExp("^"+XE+WE+qE+YE+"$"),KE=["material","materials","bones","map"];class ZE{constructor(e,n,a){const o=a||Vt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,o)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Vt{constructor(e,n,a){this.path=n,this.parsedPath=a||Vt.parseTrackName(n),this.node=Vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Vt.Composite(e,n,a):new Vt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(VE,"")}static parseTrackName(e){const n=jE.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);KE.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const d=c[u];if(d.name===n||d.uuid===n)return d;const p=a(d.children);if(p)return p}return null},o=a(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)e[n++]=a[o]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(e||(e=Vt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let h=n.objectIndex;switch(a){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(h!==void 0){if(e[h]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[o];if(u===void 0){const h=n.nodeName;at("PropertyBinding: Trying to update property for track: "+h+"."+o+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=ZE;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const cm=class cm{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};cm.prototype.isMatrix2=!0;let Wv=cm;class QE extends Jx{constructor(e=10,n=10,a=4473924,o=8947848){a=new nt(a),o=new nt(o);const c=n/2,u=e/n,d=e/2,p=[],h=[];for(let v=0,x=0,b=-d;v<=n;v++,b+=u){p.push(-d,0,b,d,0,b),p.push(b,0,-d,b,0,d);const A=v===c?a:o;A.toArray(h,x),x+=3,A.toArray(h,x),x+=3,A.toArray(h,x),x+=3,A.toArray(h,x),x+=3}const g=new ai;g.setAttribute("position",new kn(p,3)),g.setAttribute("color",new kn(h,3));const _=new Jp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function qv(r,e,n,a){const o=JE(a);switch(n){case Vx:return r*e;case zp:return r*e/o.components*o.byteLength;case Hp:return r*e/o.components*o.byteLength;case sr:return r*e*2/o.components*o.byteLength;case Gp:return r*e*2/o.components*o.byteLength;case kx:return r*e*3/o.components*o.byteLength;case Li:return r*e*4/o.components*o.byteLength;case Vp:return r*e*4/o.components*o.byteLength;case Tu:case Au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ru:case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Qh:return Math.max(r,16)*Math.max(e,8)/4;case jh:case Zh:return Math.max(r,8)*Math.max(e,8)/2;case Jh:case $h:case tp:case np:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ep:case Du:case ip:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case rp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case op:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case lp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case cp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case up:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case fp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case hp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case pp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case mp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case gp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case _p:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case vp:case xp:case yp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sp:case Mp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lu:case bp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function JE(r){switch(r){case xi:case Fx:return{byteLength:1,components:1};case Al:case zx:case Ga:return{byteLength:2,components:1};case Bp:case Fp:return{byteLength:2,components:4};case oa:case Ip:case Di:return{byteLength:4,components:1};case Hx:case Gx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ry(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function $E(r){const e=new WeakMap;function n(d,p){const h=d.array,g=d.usage,_=h.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,h,g),d.onUploadCallback();let x;if(h instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=r.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=r.SHORT;else if(h instanceof Uint32Array)x=r.UNSIGNED_INT;else if(h instanceof Int32Array)x=r.INT;else if(h instanceof Int8Array)x=r.BYTE;else if(h instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,p,h){const g=p.array,_=p.updateRanges;if(r.bindBuffer(h,d),_.length===0)r.bufferSubData(h,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],A=_[x];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++v,_[v]=A)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const A=_[x];r.bufferSubData(h,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,n(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,d,p),h.version=d.version}}return{get:o,remove:c,update:u}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tT=`#ifdef USE_ALPHAHASH
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
#endif`,nT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rT=`#ifdef USE_AOMAP
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
#endif`,oT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lT=`#ifdef USE_BATCHING
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
#endif`,cT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hT=`#ifdef USE_IRIDESCENCE
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
#endif`,pT=`#ifdef USE_BUMPMAP
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
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ST=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bT=`#define PI 3.141592653589793
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
} // validated`,ET=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TT=`vec3 transformedNormal = objectNormal;
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
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",DT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
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
#endif`,PT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GT=`#ifdef USE_GRADIENTMAP
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
}`,VT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qT=`#ifdef USE_ENVMAP
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
#endif`,YT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QT=`PhysicalMaterial material;
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
#endif`,JT=`uniform sampler2D dfgLUT;
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
}`,$T=`
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,i1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u1=`#if defined( USE_POINTS_UV )
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
#endif`,f1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
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
#endif`,_1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b1=`#ifdef USE_NORMALMAP
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
#endif`,E1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z1=`float getShadowMask() {
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
}`,H1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tA=`uniform sampler2D t2D;
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
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
}`,oA=`#if DEPTH_PACKING == 3200
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
}`,lA=`#define DISTANCE
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
}`,cA=`#define DISTANCE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`uniform float scale;
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
}`,hA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#define LAMBERT
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
}`,_A=`#define LAMBERT
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
}`,vA=`#define MATCAP
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
}`,xA=`#define MATCAP
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
}`,yA=`#define NORMAL
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
}`,SA=`#define NORMAL
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
}`,MA=`#define PHONG
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
}`,bA=`#define PHONG
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
}`,EA=`#define STANDARD
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
}`,TA=`#define STANDARD
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
}`,AA=`#define TOON
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
}`,RA=`#define TOON
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
}`,wA=`uniform float size;
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
}`,CA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,DA=`uniform vec3 color;
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
}`,LA=`uniform float rotation;
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
}`,UA=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:eT,alphahash_pars_fragment:tT,alphamap_fragment:nT,alphamap_pars_fragment:iT,alphatest_fragment:aT,alphatest_pars_fragment:sT,aomap_fragment:rT,aomap_pars_fragment:oT,batching_pars_vertex:lT,batching_vertex:cT,begin_vertex:uT,beginnormal_vertex:fT,bsdfs:dT,iridescence_fragment:hT,bumpmap_pars_fragment:pT,clipping_planes_fragment:mT,clipping_planes_pars_fragment:gT,clipping_planes_pars_vertex:_T,clipping_planes_vertex:vT,color_fragment:xT,color_pars_fragment:yT,color_pars_vertex:ST,color_vertex:MT,common:bT,cube_uv_reflection_fragment:ET,defaultnormal_vertex:TT,displacementmap_pars_vertex:AT,displacementmap_vertex:RT,emissivemap_fragment:wT,emissivemap_pars_fragment:CT,colorspace_fragment:NT,colorspace_pars_fragment:DT,envmap_fragment:LT,envmap_common_pars_fragment:UT,envmap_pars_fragment:OT,envmap_pars_vertex:PT,envmap_physical_pars_fragment:qT,envmap_vertex:IT,fog_vertex:BT,fog_pars_vertex:FT,fog_fragment:zT,fog_pars_fragment:HT,gradientmap_pars_fragment:GT,lightmap_pars_fragment:VT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:XT,lights_pars_begin:WT,lights_toon_fragment:YT,lights_toon_pars_fragment:jT,lights_phong_fragment:KT,lights_phong_pars_fragment:ZT,lights_physical_fragment:QT,lights_physical_pars_fragment:JT,lights_fragment_begin:$T,lights_fragment_maps:e1,lights_fragment_end:t1,lightprobes_pars_fragment:n1,logdepthbuf_fragment:i1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:s1,logdepthbuf_vertex:r1,map_fragment:o1,map_pars_fragment:l1,map_particle_fragment:c1,map_particle_pars_fragment:u1,metalnessmap_fragment:f1,metalnessmap_pars_fragment:d1,morphinstance_vertex:h1,morphcolor_vertex:p1,morphnormal_vertex:m1,morphtarget_pars_vertex:g1,morphtarget_vertex:_1,normal_fragment_begin:v1,normal_fragment_maps:x1,normal_pars_fragment:y1,normal_pars_vertex:S1,normal_vertex:M1,normalmap_pars_fragment:b1,clearcoat_normal_fragment_begin:E1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:R1,opaque_fragment:w1,packing:C1,premultiplied_alpha_fragment:N1,project_vertex:D1,dithering_fragment:L1,dithering_pars_fragment:U1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:B1,shadowmap_vertex:F1,shadowmask_pars_fragment:z1,skinbase_vertex:H1,skinning_pars_vertex:G1,skinning_vertex:V1,skinnormal_vertex:k1,specularmap_fragment:X1,specularmap_pars_fragment:W1,tonemapping_fragment:q1,tonemapping_pars_fragment:Y1,transmission_fragment:j1,transmission_pars_fragment:K1,uv_pars_fragment:Z1,uv_pars_vertex:Q1,uv_vertex:J1,worldpos_vertex:$1,background_vert:eA,background_frag:tA,backgroundCube_vert:nA,backgroundCube_frag:iA,cube_vert:aA,cube_frag:sA,depth_vert:rA,depth_frag:oA,distance_vert:lA,distance_frag:cA,equirect_vert:uA,equirect_frag:fA,linedashed_vert:dA,linedashed_frag:hA,meshbasic_vert:pA,meshbasic_frag:mA,meshlambert_vert:gA,meshlambert_frag:_A,meshmatcap_vert:vA,meshmatcap_frag:xA,meshnormal_vert:yA,meshnormal_frag:SA,meshphong_vert:MA,meshphong_frag:bA,meshphysical_vert:EA,meshphysical_frag:TA,meshtoon_vert:AA,meshtoon_frag:RA,points_vert:wA,points_frag:CA,shadow_vert:NA,shadow_frag:DA,sprite_vert:LA,sprite_frag:UA},Pe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},na={basic:{uniforms:qn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:qn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:qn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:qn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:qn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:qn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:qn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:qn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:qn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:qn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:qn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:qn([Pe.common,Pe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:qn([Pe.lights,Pe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};na.physical={uniforms:qn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const yu={r:0,b:0,g:0},OA=new ht,oy=new ot;oy.set(-1,0,0,0,1,0,0,0,1);function PA(r,e,n,a,o,c){const u=new nt(0);let d=o===!0?0:1,p,h,g=null,_=0,v=null;function x(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const R=O.backgroundBlurriness>0;I=e.get(I,R)}return I}function b(O){let I=!1;const R=x(O);R===null?M(u,d):R&&R.isColor&&(M(R,1),I=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(O,I){const R=x(I);R&&(R.isCubeTexture||R.mapping===zu)?(h===void 0&&(h=new Kn(new Ol(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:uo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(OA.makeRotationFromEuler(I.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(oy),h.material.toneMapped=yt.getTransfer(R.colorSpace)!==Ht,(g!==R||_!==R.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,g=R,_=R.version,v=r.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Kn(new Pl(2,2),new la({name:"BackgroundMaterial",uniforms:uo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=yt.getTransfer(R.colorSpace)!==Ht,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,g=R,_=R.version,v=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function M(O,I){O.getRGB(yu,ny(r)),n.buffers.color.setClear(yu.r,yu.g,yu.b,I,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,I=1){u.set(O),d=I,M(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,M(u,d)},render:b,addToRenderList:A,dispose:y}}function IA(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function d(z,K,ce,_e,Z){let F=!1;const G=_(z,_e,ce,K);c!==G&&(c=G,h(c.object)),F=x(z,_e,ce,Z),F&&b(z,_e,ce,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,R(z,K,ce,_e),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return r.createVertexArray()}function h(z){return r.bindVertexArray(z)}function g(z){return r.deleteVertexArray(z)}function _(z,K,ce,_e){const Z=_e.wireframe===!0;let F=a[K.id];F===void 0&&(F={},a[K.id]=F);const G=z.isInstancedMesh===!0?z.id:0;let ee=F[G];ee===void 0&&(ee={},F[G]=ee);let pe=ee[ce.id];pe===void 0&&(pe={},ee[ce.id]=pe);let be=pe[Z];return be===void 0&&(be=v(p()),pe[Z]=be),be}function v(z){const K=[],ce=[],_e=[];for(let Z=0;Z<n;Z++)K[Z]=0,ce[Z]=0,_e[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ce,attributeDivisors:_e,object:z,attributes:{},index:null}}function x(z,K,ce,_e){const Z=c.attributes,F=K.attributes;let G=0;const ee=ce.getAttributes();for(const pe in ee)if(ee[pe].location>=0){const P=Z[pe];let j=F[pe];if(j===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(j=z.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;G++}return c.attributesNum!==G||c.index!==_e}function b(z,K,ce,_e){const Z={},F=K.attributes;let G=0;const ee=ce.getAttributes();for(const pe in ee)if(ee[pe].location>=0){let P=F[pe];P===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(P=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(P=z.instanceColor));const j={};j.attribute=P,P&&P.data&&(j.data=P.data),Z[pe]=j,G++}c.attributes=Z,c.attributesNum=G,c.index=_e}function A(){const z=c.newAttributes;for(let K=0,ce=z.length;K<ce;K++)z[K]=0}function M(z){y(z,0)}function y(z,K){const ce=c.newAttributes,_e=c.enabledAttributes,Z=c.attributeDivisors;ce[z]=1,_e[z]===0&&(r.enableVertexAttribArray(z),_e[z]=1),Z[z]!==K&&(r.vertexAttribDivisor(z,K),Z[z]=K)}function O(){const z=c.newAttributes,K=c.enabledAttributes;for(let ce=0,_e=K.length;ce<_e;ce++)K[ce]!==z[ce]&&(r.disableVertexAttribArray(ce),K[ce]=0)}function I(z,K,ce,_e,Z,F,G){G===!0?r.vertexAttribIPointer(z,K,ce,Z,F):r.vertexAttribPointer(z,K,ce,_e,Z,F)}function R(z,K,ce,_e){A();const Z=_e.attributes,F=ce.getAttributes(),G=K.defaultAttributeValues;for(const ee in F){const pe=F[ee];if(pe.location>=0){let be=Z[ee];if(be===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(be=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(be=z.instanceColor)),be!==void 0){const P=be.normalized,j=be.itemSize,Se=e.get(be);if(Se===void 0)continue;const we=Se.buffer,Ie=Se.type,se=Se.bytesPerElement,ye=Ie===r.INT||Ie===r.UNSIGNED_INT||be.gpuType===Ip;if(be.isInterleavedBufferAttribute){const Ee=be.data,He=Ee.stride,it=be.offset;if(Ee.isInstancedInterleavedBuffer){for(let Qe=0;Qe<pe.locationSize;Qe++)y(pe.location+Qe,Ee.meshPerAttribute);z.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Qe=0;Qe<pe.locationSize;Qe++)M(pe.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Qe=0;Qe<pe.locationSize;Qe++)I(pe.location+Qe,j/pe.locationSize,Ie,P,He*se,(it+j/pe.locationSize*Qe)*se,ye)}else{if(be.isInstancedBufferAttribute){for(let Ee=0;Ee<pe.locationSize;Ee++)y(pe.location+Ee,be.meshPerAttribute);z.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ee=0;Ee<pe.locationSize;Ee++)M(pe.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Ee=0;Ee<pe.locationSize;Ee++)I(pe.location+Ee,j/pe.locationSize,Ie,P,j*se,j/pe.locationSize*Ee*se,ye)}}else if(G!==void 0){const P=G[ee];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(pe.location,P);break;case 3:r.vertexAttrib3fv(pe.location,P);break;case 4:r.vertexAttrib4fv(pe.location,P);break;default:r.vertexAttrib1fv(pe.location,P)}}}}O()}function U(){L();for(const z in a){const K=a[z];for(const ce in K){const _e=K[ce];for(const Z in _e){const F=_e[Z];for(const G in F)g(F[G].object),delete F[G];delete _e[Z]}}delete a[z]}}function N(z){if(a[z.id]===void 0)return;const K=a[z.id];for(const ce in K){const _e=K[ce];for(const Z in _e){const F=_e[Z];for(const G in F)g(F[G].object),delete F[G];delete _e[Z]}}delete a[z.id]}function D(z){for(const K in a){const ce=a[K];for(const _e in ce){const Z=ce[_e];if(Z[z.id]===void 0)continue;const F=Z[z.id];for(const G in F)g(F[G].object),delete F[G];delete Z[z.id]}}}function T(z){for(const K in a){const ce=a[K],_e=z.isInstancedMesh===!0?z.id:0,Z=ce[_e];if(Z!==void 0){for(const F in Z){const G=Z[F];for(const ee in G)g(G[ee].object),delete G[ee];delete Z[F]}delete ce[_e],Object.keys(ce).length===0&&delete a[K]}}}function L(){V(),u=!0,c!==o&&(c=o,h(c.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:L,resetDefaultState:V,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:M,disableUnusedAttributes:O}}function BA(r,e,n){let a;function o(p){a=p}function c(p,h){r.drawArrays(a,p,h),n.update(h,a,1)}function u(p,h,g){g!==0&&(r.drawArraysInstanced(a,p,h,g),n.update(h,a,g))}function d(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,h,0,g);let v=0;for(let x=0;x<g;x++)v+=h[x];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function FA(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==Li&&a.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(D){const T=D===Ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==xi&&a.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Di&&!T)}function p(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(Ke("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:R,maxSamples:U,samples:N}}function zA(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new $s,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,A=_.clipIntersection,M=_.clipShadows,y=r.get(_);if(!o||b===null||b.length===0||c&&!M)c?g(null):h();else{const O=c?0:a,I=O*4;let R=y.clippingState||null;p.value=R,R=g(b,v,I,x);for(let U=0;U!==I;++U)R[U]=n[U];y.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,x,b){const A=_!==null?_.length:0;let M=null;if(A!==0){if(M=p.value,b!==!0||M===null){const y=x+A*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<y)&&(M=new Float32Array(y));for(let I=0,R=x;I!==A;++I,R+=4)u.copy(_[I]).applyMatrix4(O,d),u.normal.toArray(M,R),M[R+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}const As=4,Yv=[.125,.215,.35,.446,.526,.582],tr=20,HA=256,_l=new Gu,jv=new nt;let Nh=null,Dh=0,Lh=0,Uh=!1;const GA=new J;class Kv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=GA}=c;Nh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Dh,Lh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ar||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ga,format:Li,colorSpace:yi,depthBuffer:!1},o=Zv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VA(c)),this._blurMaterial=XA(c,e,n),this._ggxMaterial=kA(c,e,n)}return o}_compileMaterial(e){const n=new Kn(new ai,e);this._renderer.compile(n,_l)}_sceneToCubeUV(e,n,a,o,c){const p=new Yn(90,1,n,a),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(jv),_.toneMapping=sa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kn(new Ol,new ir({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let y=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,y=!0):(M.color.copy(jv),y=!0);for(let I=0;I<6;I++){const R=I%3;R===0?(p.up.set(0,h[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[I],c.y,c.z)):R===1?(p.up.set(0,0,h[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[I],c.z)):(p.up.set(0,h[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[I]));const U=this._cubeSize;eo(o,R*U,I>2?U:0,U,U),_.setRenderTarget(o),y&&_.render(A,p),_.render(e,p)}_.toneMapping=x,_.autoClear=v,e.background=O}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===ar||e.mapping===ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;eo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,_l)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const p=u.uniforms,h=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,x=_*v,{_lodMax:b}=this,A=this._sizeLods[a],M=3*A*(a>b-As?a-b+As:0),y=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=b-n,eo(c,M,y,3*A,2*A),o.setRenderTarget(c),o.render(d,_l),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-a,eo(e,M,y,3*A,2*A),o.setRenderTarget(e),o.render(d,_l)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,x=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*tr-1),A=c/b,M=isFinite(c)?1+Math.floor(g*A):tr;M>tr&&Ke(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${tr}`);const y=[];let O=0;for(let D=0;D<tr;++D){const T=D/A,L=Math.exp(-T*T/2);y.push(L),D===0?O+=L:D<M&&(O+=2*L)}for(let D=0;D<y.length;D++)y[D]=y[D]/O;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:I}=this;v.dTheta.value=b,v.mipInt.value=I-a;const R=this._sizeLods[o],U=3*R*(o>I-As?o-I+As:0),N=4*(this._cubeSize-R);eo(n,U,N,3*R,2*R),p.setRenderTarget(n),p.render(_,_l)}}function VA(r){const e=[],n=[],a=[];let o=r;const c=r-As+1+Yv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>r-As?p=Yv[u-r+As-1]:u===0&&(p=0),n.push(p);const h=1/(d-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,A=3,M=2,y=1,O=new Float32Array(A*b*x),I=new Float32Array(M*b*x),R=new Float32Array(y*b*x);for(let N=0;N<x;N++){const D=N%3*2/3-1,T=N>2?0:-1,L=[D,T,0,D+2/3,T,0,D+2/3,T+1,0,D,T,0,D+2/3,T+1,0,D,T+1,0];O.set(L,A*b*N),I.set(v,M*b*N);const V=[N,N,N,N,N,N];R.set(V,y*b*N)}const U=new ai;U.setAttribute("position",new jn(O,A)),U.setAttribute("uv",new jn(I,M)),U.setAttribute("faceIndex",new jn(R,y)),a.push(new Kn(U,null)),o>As&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Zv(r,e,n){const a=new ra(r,e,n);return a.texture.mapping=zu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function eo(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function kA(r,e,n){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function XA(r,e,n){const a=new Float32Array(tr),o=new J(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Qv(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Jv(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Vu(){return`

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
	`}class ly extends ra{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new ey(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ol(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:uo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ii,blending:Fa});c.uniforms.tEquirect.value=n;const u=new Kn(o,c),d=n.minFilter;return n.minFilter===Ia&&(n.minFilter=Rn),new HE(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function WA(r){let e=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===eh||x===th)if(e.has(v)){const b=e.get(v).texture;return d(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const A=new ly(b.height);return A.fromEquirectangularTexture(r,v),e.set(v,A),v.addEventListener("dispose",h),d(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===eh||x===th,A=x===ar||x===ro;if(b||A){let M=n.get(v);const y=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return a===null&&(a=new Kv(r)),M=b?a.fromEquirectangular(v,M):a.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),M.texture;if(M!==void 0)return M.texture;{const O=v.image;return b&&O&&O.height>0||A&&O&&p(O)?(a===null&&(a=new Kv(r)),M=b?a.fromEquirectangular(v):a.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),v.addEventListener("dispose",g),M.texture):null}}}return v}function d(v,x){return x===eh?v.mapping=ar:x===th&&(v.mapping=ro),v}function p(v){let x=0;const b=6;for(let A=0;A<b;A++)v[A]!==void 0&&x++;return x===b}function h(v){const x=v.target;x.removeEventListener("dispose",h);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function _(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function qA(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&no("WebGLRenderer: "+a+" extension not supported."),o}}}function YA(r,e,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function h(_){const v=[],x=_.index,b=_.attributes.position;let A=0;if(b===void 0)return;if(x!==null){const O=x.array;A=x.version;for(let I=0,R=O.length;I<R;I+=3){const U=O[I+0],N=O[I+1],D=O[I+2];v.push(U,N,N,D,D,U)}}else{const O=b.array;A=b.version;for(let I=0,R=O.length/3-1;I<R;I+=3){const U=I+0,N=I+1,D=I+2;v.push(U,N,N,D,D,U)}}const M=new(b.count>=65535?Zx:Kx)(v,1);M.version=A;const y=c.get(_);y&&e.remove(y),c.set(_,M)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&h(_)}else h(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function jA(r,e,n){let a;function o(_){a=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function p(_,v){r.drawElements(a,v,c,_*u),n.update(v,a,1)}function h(_,v,x){x!==0&&(r.drawElementsInstanced(a,v,c,_*u,x),n.update(v,a,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,_,0,x);let A=0;for(let M=0;M<x;M++)A+=v[M];n.update(A,a,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=g}function KA(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:at("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function ZA(r,e,n){const a=new WeakMap,o=new Yt;function c(u,d,p){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(d);if(v===void 0||v.count!==_){let V=function(){T.dispose(),a.delete(d),d.removeEventListener("dispose",V)};var x=V;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let R=0;b===!0&&(R=1),A===!0&&(R=2),M===!0&&(R=3);let U=d.attributes.position.count*R,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const D=new Float32Array(U*N*4*_),T=new qx(D,U,N,_);T.type=Di,T.needsUpdate=!0;const L=R*4;for(let z=0;z<_;z++){const K=y[z],ce=O[z],_e=I[z],Z=U*N*4*z;for(let F=0;F<K.count;F++){const G=F*L;b===!0&&(o.fromBufferAttribute(K,F),D[Z+G+0]=o.x,D[Z+G+1]=o.y,D[Z+G+2]=o.z,D[Z+G+3]=0),A===!0&&(o.fromBufferAttribute(ce,F),D[Z+G+4]=o.x,D[Z+G+5]=o.y,D[Z+G+6]=o.z,D[Z+G+7]=0),M===!0&&(o.fromBufferAttribute(_e,F),D[Z+G+8]=o.x,D[Z+G+9]=o.y,D[Z+G+10]=o.z,D[Z+G+11]=_e.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Mt(U,N)},a.set(d,v),d.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<h.length;M++)b+=h[M];const A=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function QA(r,e,n,a,o){let c=new WeakMap;function u(h){const g=o.render.frame,_=h.geometry,v=e.get(h,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),c.get(h)!==g&&(n.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function d(){c=new WeakMap}function p(h){const g=h.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:d}}const JA={[Cx]:"LINEAR_TONE_MAPPING",[Nx]:"REINHARD_TONE_MAPPING",[Dx]:"CINEON_TONE_MAPPING",[Lx]:"ACES_FILMIC_TONE_MAPPING",[Ox]:"AGX_TONE_MAPPING",[Px]:"NEUTRAL_TONE_MAPPING",[Ux]:"CUSTOM_TONE_MAPPING"};function $A(r,e,n,a,o,c){const u=new ra(e,n,{type:r,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new co(e,n):void 0}),d=new ra(e,n,{type:Ga,depthBuffer:!1,stencilBuffer:!1}),p=new ai;p.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new kn([0,2,0,0,2,0],2));const h=new pE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Kn(p,h),_=new Gu(-1,1,1,-1,0,1);let v=null,x=null,b=!1,A,M=null,y=[],O=!1;this.setSize=function(I,R){u.setSize(I,R),d.setSize(I,R);for(let U=0;U<y.length;U++){const N=y[U];N.setSize&&N.setSize(I,R)}},this.setEffects=function(I){y=I,O=y.length>0&&y[0].isRenderPass===!0;const R=u.width,U=u.height;for(let N=0;N<y.length;N++){const D=y[N];D.setSize&&D.setSize(R,U)}},this.begin=function(I,R){if(b||I.toneMapping===sa&&y.length===0)return!1;if(M=R,R!==null){const U=R.width,N=R.height;(u.width!==U||u.height!==N)&&this.setSize(U,N)}return O===!1&&I.setRenderTarget(u),A=I.toneMapping,I.toneMapping=sa,!0},this.hasRenderPass=function(){return O},this.end=function(I,R){I.toneMapping=A,b=!0;let U=u,N=d;for(let D=0;D<y.length;D++){const T=y[D];if(T.enabled!==!1&&(T.render(I,N,U,R),T.needsSwap!==!1)){const L=U;U=N,N=L}}if(v!==I.outputColorSpace||x!==I.toneMapping){v=I.outputColorSpace,x=I.toneMapping,h.defines={},yt.getTransfer(v)===Ht&&(h.defines.SRGB_TRANSFER="");const D=JA[x];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=U.texture,I.setRenderTarget(M),I.render(g,_),M=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),p.dispose(),h.dispose()}}const cy=new Ln,Np=new co(1,1),uy=new qx,fy=new Bb,dy=new ey,$v=[],ex=[],tx=new Float32Array(16),nx=new Float32Array(9),ix=new Float32Array(4);function go(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=$v[o];if(c===void 0&&(c=new Float32Array(o),$v[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function wn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Cn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function ku(r,e){let n=ex[e];n===void 0&&(n=new Int32Array(e),ex[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function eR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function tR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;r.uniform2fv(this.addr,e),Cn(n,e)}}function nR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wn(n,e))return;r.uniform3fv(this.addr,e),Cn(n,e)}}function iR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;r.uniform4fv(this.addr,e),Cn(n,e)}}function aR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(wn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(wn(n,a))return;ix.set(a),r.uniformMatrix2fv(this.addr,!1,ix),Cn(n,a)}}function sR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(wn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(wn(n,a))return;nx.set(a),r.uniformMatrix3fv(this.addr,!1,nx),Cn(n,a)}}function rR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(wn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(wn(n,a))return;tx.set(a),r.uniformMatrix4fv(this.addr,!1,tx),Cn(n,a)}}function oR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function lR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;r.uniform2iv(this.addr,e),Cn(n,e)}}function cR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;r.uniform3iv(this.addr,e),Cn(n,e)}}function uR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;r.uniform4iv(this.addr,e),Cn(n,e)}}function fR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function dR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;r.uniform2uiv(this.addr,e),Cn(n,e)}}function hR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;r.uniform3uiv(this.addr,e),Cn(n,e)}}function pR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;r.uniform4uiv(this.addr,e),Cn(n,e)}}function mR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Np.compareFunction=n.isReversedDepthBuffer()?Xp:kp,c=Np):c=cy,n.setTexture2D(e||c,o)}function gR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||fy,o)}function _R(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||dy,o)}function vR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||uy,o)}function xR(r){switch(r){case 5126:return eR;case 35664:return tR;case 35665:return nR;case 35666:return iR;case 35674:return aR;case 35675:return sR;case 35676:return rR;case 5124:case 35670:return oR;case 35667:case 35671:return lR;case 35668:case 35672:return cR;case 35669:case 35673:return uR;case 5125:return fR;case 36294:return dR;case 36295:return hR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return mR;case 35679:case 36299:case 36307:return gR;case 35680:case 36300:case 36308:case 36293:return _R;case 36289:case 36303:case 36311:case 36292:return vR}}function yR(r,e){r.uniform1fv(this.addr,e)}function SR(r,e){const n=go(e,this.size,2);r.uniform2fv(this.addr,n)}function MR(r,e){const n=go(e,this.size,3);r.uniform3fv(this.addr,n)}function bR(r,e){const n=go(e,this.size,4);r.uniform4fv(this.addr,n)}function ER(r,e){const n=go(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function TR(r,e){const n=go(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function AR(r,e){const n=go(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function RR(r,e){r.uniform1iv(this.addr,e)}function wR(r,e){r.uniform2iv(this.addr,e)}function CR(r,e){r.uniform3iv(this.addr,e)}function NR(r,e){r.uniform4iv(this.addr,e)}function DR(r,e){r.uniform1uiv(this.addr,e)}function LR(r,e){r.uniform2uiv(this.addr,e)}function UR(r,e){r.uniform3uiv(this.addr,e)}function OR(r,e){r.uniform4uiv(this.addr,e)}function PR(r,e,n){const a=this.cache,o=e.length,c=ku(n,o);wn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Np:u=cy;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function IR(r,e,n){const a=this.cache,o=e.length,c=ku(n,o);wn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||fy,c[u])}function BR(r,e,n){const a=this.cache,o=e.length,c=ku(n,o);wn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||dy,c[u])}function FR(r,e,n){const a=this.cache,o=e.length,c=ku(n,o);wn(a,c)||(r.uniform1iv(this.addr,c),Cn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||uy,c[u])}function zR(r){switch(r){case 5126:return yR;case 35664:return SR;case 35665:return MR;case 35666:return bR;case 35674:return ER;case 35675:return TR;case 35676:return AR;case 5124:case 35670:return RR;case 35667:case 35671:return wR;case 35668:case 35672:return CR;case 35669:case 35673:return NR;case 5125:return DR;case 36294:return LR;case 36295:return UR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return PR;case 35679:case 36299:case 36307:return IR;case 35680:case 36300:case 36308:case 36293:return BR;case 36289:case 36303:case 36311:case 36292:return FR}}class HR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=xR(n.type)}}class GR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zR(n.type)}}class VR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function ax(r,e){r.seq.push(e),r.map[e.id]=e}function kR(r,e,n){const a=r.name,o=a.length;for(Oh.lastIndex=0;;){const c=Oh.exec(a),u=Oh.lastIndex;let d=c[1];const p=c[2]==="]",h=c[3];if(p&&(d=d|0),h===void 0||h==="["&&u+2===o){ax(n,h===void 0?new HR(d,r,e):new GR(d,r,e));break}else{let _=n.map[d];_===void 0&&(_=new VR(d),ax(n,_)),n=_}}}class Cu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);kR(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=a[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function sx(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const XR=37297;let WR=0;function qR(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const rx=new ot;function YR(r){yt._getMatrix(rx,yt.workingColorSpace,r);const e=`mat3( ${rx.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(r)){case Uu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ox(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+qR(r.getShaderSource(e),d)}else return c}function jR(r,e){const n=YR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const KR={[Cx]:"Linear",[Nx]:"Reinhard",[Dx]:"Cineon",[Lx]:"ACESFilmic",[Ox]:"AgX",[Px]:"Neutral",[Ux]:"Custom"};function ZR(r,e){const n=KR[e];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Su=new J;function QR(){yt.getLuminanceCoefficients(Su);const r=Su.x.toFixed(4),e=Su.y.toFixed(4),n=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function $R(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function e2(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Ml(r){return r!==""}function lx(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(r){return r.replace(t2,i2)}const n2=new Map;function i2(r,e){let n=dt[e];if(n===void 0){const a=n2.get(e);if(a!==void 0)n=dt[a],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dp(n)}const a2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ux(r){return r.replace(a2,s2)}function s2(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function fx(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const r2={[bu]:"SHADOWMAP_TYPE_PCF",[yl]:"SHADOWMAP_TYPE_VSM"};function o2(r){return r2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const l2={[ar]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[zu]:"ENVMAP_TYPE_CUBE_UV"};function c2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":l2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const u2={[ro]:"ENVMAP_MODE_REFRACTION"};function f2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":u2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d2={[wx]:"ENVMAP_BLENDING_MULTIPLY",[QM]:"ENVMAP_BLENDING_MIX",[JM]:"ENVMAP_BLENDING_ADD"};function h2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":d2[r.combine]||"ENVMAP_BLENDING_NONE"}function p2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function m2(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=o2(n),h=c2(n),g=f2(n),_=h2(n),v=p2(n),x=JR(n),b=$R(c),A=o.createProgram();let M,y,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ml).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ml).join(`
`),y.length>0&&(y+=`
`)):(M=[fx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),y=[fx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sa?"#define TONE_MAPPING":"",n.toneMapping!==sa?dt.tonemapping_pars_fragment:"",n.toneMapping!==sa?ZR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,jR("linearToOutputTexel",n.outputColorSpace),QR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ml).join(`
`)),u=Dp(u),u=lx(u,n),u=cx(u,n),d=Dp(d),d=lx(d,n),d=cx(d,n),u=ux(u),d=ux(d),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=O+M+u,R=O+y+d,U=sx(o,o.VERTEX_SHADER,I),N=sx(o,o.FRAGMENT_SHADER,R);o.attachShader(A,U),o.attachShader(A,N),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function D(z){if(r.debug.checkShaderErrors){const K=o.getProgramInfoLog(A)||"",ce=o.getShaderInfoLog(U)||"",_e=o.getShaderInfoLog(N)||"",Z=K.trim(),F=ce.trim(),G=_e.trim();let ee=!0,pe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,U,N);else{const be=ox(o,U,"vertex"),P=ox(o,N,"fragment");at("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Z+`
`+be+`
`+P)}else Z!==""?Ke("WebGLProgram: Program Info Log:",Z):(F===""||G==="")&&(pe=!1);pe&&(z.diagnostics={runnable:ee,programLog:Z,vertexShader:{log:F,prefix:M},fragmentShader:{log:G,prefix:y}})}o.deleteShader(U),o.deleteShader(N),T=new Cu(o,A),L=e2(o,A)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(A,XR)),V},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=N,this}let g2=0;class _2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new v2(e),n.set(e,a)),a}}class v2{constructor(e){this.id=g2++,this.code=e,this.usedTimes=0}}function x2(r){return r===sr||r===Du||r===Lu}function y2(r,e,n,a,o,c){const u=new Yx,d=new _2,p=new Set,h=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return p.add(T),T===0?"uv":`uv${T}`}function A(T,L,V,z,K,ce){const _e=z.fog,Z=K.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||F,G),pe=ee&&ee.mapping===zu?ee.image.height:null,be=x[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&Ke("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const P=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,j=P!==void 0?P.length:0;let Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let we,Ie,se,ye;if(be){const Ve=na[be];we=Ve.vertexShader,Ie=Ve.fragmentShader}else{we=T.vertexShader,Ie=T.fragmentShader;const Ve=d.getVertexShaderStage(T),en=d.getFragmentShaderStage(T);d.update(T,Ve,en),se=Ve.id,ye=en.id}const Ee=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),it=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,Qt=!!T.map,pt=!!T.matcap,Tt=!!ee,At=!!T.aoMap,gt=!!T.lightMap,rn=!!T.bumpMap&&T.wireframe===!1,on=!!T.normalMap,ln=!!T.displacementMap,hn=!!T.emissiveMap,Zt=!!T.metalnessMap,cn=!!T.roughnessMap,Y=T.anisotropy>0,kt=T.clearcoat>0,Dt=T.dispersion>0,B=T.iridescence>0,E=T.sheen>0,$=T.transmission>0,re=Y&&!!T.anisotropyMap,de=kt&&!!T.clearcoatMap,Te=kt&&!!T.clearcoatNormalMap,Ne=kt&&!!T.clearcoatRoughnessMap,fe=B&&!!T.iridescenceMap,he=B&&!!T.iridescenceThicknessMap,Re=E&&!!T.sheenColorMap,Fe=E&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,De=!!T.specularColorMap,Ze=!!T.specularIntensityMap,Je=$&&!!T.transmissionMap,st=$&&!!T.thicknessMap,X=!!T.gradientMap,Ae=!!T.alphaMap,ge=T.alphaTest>0,Ce=!!T.alphaHash,Be=!!T.extensions;let Me=sa;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Me=r.toneMapping);const qe={shaderID:be,shaderType:T.type,shaderName:T.name,vertexShader:we,fragmentShader:Ie,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:it,instancingColor:it&&K.instanceColor!==null,instancingMorph:it&&K.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Qt,matcap:pt,envMap:Tt,envMapMode:Tt&&ee.mapping,envMapCubeUVHeight:pe,aoMap:At,lightMap:gt,bumpMap:rn,normalMap:on,displacementMap:ln,emissiveMap:hn,normalMapObjectSpace:on&&T.normalMapType===ib,normalMapTangentSpace:on&&T.normalMapType===Tp,packedNormalMap:on&&T.normalMapType===Tp&&x2(T.normalMap.format),metalnessMap:Zt,roughnessMap:cn,anisotropy:Y,anisotropyMap:re,clearcoat:kt,clearcoatMap:de,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ne,dispersion:Dt,iridescence:B,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:E,sheenColorMap:Re,sheenRoughnessMap:Fe,specularMap:Ue,specularColorMap:De,specularIntensityMap:Ze,transmission:$,transmissionMap:Je,thicknessMap:st,gradientMap:X,opaque:T.transparent===!1&&T.blending===to&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ge,alphaHash:Ce,combine:T.combine,mapUv:Qt&&b(T.map.channel),aoMapUv:At&&b(T.aoMap.channel),lightMapUv:gt&&b(T.lightMap.channel),bumpMapUv:rn&&b(T.bumpMap.channel),normalMapUv:on&&b(T.normalMap.channel),displacementMapUv:ln&&b(T.displacementMap.channel),emissiveMapUv:hn&&b(T.emissiveMap.channel),metalnessMapUv:Zt&&b(T.metalnessMap.channel),roughnessMapUv:cn&&b(T.roughnessMap.channel),anisotropyMapUv:re&&b(T.anisotropyMap.channel),clearcoatMapUv:de&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&b(T.sheenRoughnessMap.channel),specularMapUv:Ue&&b(T.specularMap.channel),specularColorMapUv:De&&b(T.specularColorMap.channel),specularIntensityMapUv:Ze&&b(T.specularIntensityMap.channel),transmissionMapUv:Je&&b(T.transmissionMap.channel),thicknessMapUv:st&&b(T.thicknessMap.channel),alphaMapUv:Ae&&b(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(on||Y),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Z.attributes.uv&&(Qt||Ae),fog:!!_e,useFog:T.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&on===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Se,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:Qt&&T.map.isVideoTexture===!0&&yt.getTransfer(T.map.colorSpace)===Ht,decodeVideoTextureEmissive:hn&&T.emissiveMap.isVideoTexture===!0&&yt.getTransfer(T.emissiveMap.colorSpace)===Ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===vi,flipSided:T.side===ii,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=p.has(1),qe.vertexUv2s=p.has(2),qe.vertexUv3s=p.has(3),p.clear(),qe}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)L.push(V),L.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(y(L,T),O(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function y(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function O(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function I(T){const L=x[T.type];let V;if(L){const z=na[L];V=fE.clone(z.uniforms)}else V=T.uniforms;return V}function R(T,L){let V=g.get(L);return V!==void 0?++V.usedTimes:(V=new m2(r,L,T,o),h.push(V),g.set(L,V)),V}function U(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){d.remove(T)}function D(){d.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:I,acquireProgram:R,releaseProgram:U,releaseShaderCache:N,programs:h,dispose:D}}function S2(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,p){r.get(u)[d]=p}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function M2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function dx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hx(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,b,A,M,y){let O=r[e];return O===void 0?(O={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:M,group:y},r[e]=O):(O.id=v.id,O.object=v,O.geometry=x,O.material=b,O.materialVariant=u(v),O.groupOrder=A,O.renderOrder=v.renderOrder,O.z=M,O.group=y),e++,O}function p(v,x,b,A,M,y){const O=d(v,x,b,A,M,y);b.transmission>0?a.push(O):b.transparent===!0?o.push(O):n.push(O)}function h(v,x,b,A,M,y){const O=d(v,x,b,A,M,y);b.transmission>0?a.unshift(O):b.transparent===!0?o.unshift(O):n.unshift(O)}function g(v,x,b){n.length>1&&n.sort(v||M2),a.length>1&&a.sort(x||dx),o.length>1&&o.sort(x||dx),b&&(n.reverse(),a.reverse(),o.reverse())}function _(){for(let v=e,x=r.length;v<x;v++){const b=r[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:p,unshift:h,finish:_,sort:g}}function b2(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new hx,r.set(a,[u])):o>=c.length?(u=new hx,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function E2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new nt};break;case"SpotLight":n={position:new J,direction:new J,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=n,n}}}function T2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let A2=0;function R2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function w2(r){const e=new E2,n=T2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new J);const o=new J,c=new ht,u=new ht;function d(h){let g=0,_=0,v=0;for(let L=0;L<9;L++)a.probe[L].set(0,0,0);let x=0,b=0,A=0,M=0,y=0,O=0,I=0,R=0,U=0,N=0,D=0;h.sort(R2);for(let L=0,V=h.length;L<V;L++){const z=h[L],K=z.color,ce=z.intensity,_e=z.distance;let Z=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===sr?Z=z.shadow.map.texture:Z=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=K.r*ce,_+=K.g*ce,v+=K.b*ce;else if(z.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(z.sh.coefficients[F],ce);D++}else if(z.isDirectionalLight){const F=e.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const G=z.shadow,ee=n.get(z);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,a.directionalShadow[x]=ee,a.directionalShadowMap[x]=Z,a.directionalShadowMatrix[x]=z.shadow.matrix,O++}a.directional[x]=F,x++}else if(z.isSpotLight){const F=e.get(z);F.position.setFromMatrixPosition(z.matrixWorld),F.color.copy(K).multiplyScalar(ce),F.distance=_e,F.coneCos=Math.cos(z.angle),F.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),F.decay=z.decay,a.spot[A]=F;const G=z.shadow;if(z.map&&(a.spotLightMap[U]=z.map,U++,G.updateMatrices(z),z.castShadow&&N++),a.spotLightMatrix[A]=G.matrix,z.castShadow){const ee=n.get(z);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,a.spotShadow[A]=ee,a.spotShadowMap[A]=Z,R++}A++}else if(z.isRectAreaLight){const F=e.get(z);F.color.copy(K).multiplyScalar(ce),F.halfWidth.set(z.width*.5,0,0),F.halfHeight.set(0,z.height*.5,0),a.rectArea[M]=F,M++}else if(z.isPointLight){const F=e.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity),F.distance=z.distance,F.decay=z.decay,z.castShadow){const G=z.shadow,ee=n.get(z);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,a.pointShadow[b]=ee,a.pointShadowMap[b]=Z,a.pointShadowMatrix[b]=z.shadow.matrix,I++}a.point[b]=F,b++}else if(z.isHemisphereLight){const F=e.get(z);F.skyColor.copy(z.color).multiplyScalar(ce),F.groundColor.copy(z.groundColor).multiplyScalar(ce),a.hemi[y]=F,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pe.LTC_FLOAT_1,a.rectAreaLTC2=Pe.LTC_FLOAT_2):(a.rectAreaLTC1=Pe.LTC_HALF_1,a.rectAreaLTC2=Pe.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const T=a.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==A||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==O||T.numPointShadows!==I||T.numSpotShadows!==R||T.numSpotMaps!==U||T.numLightProbes!==D)&&(a.directional.length=x,a.spot.length=A,a.rectArea.length=M,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=I,a.pointShadowMap.length=I,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=I,a.spotLightMatrix.length=R+U-N,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=D,T.directionalLength=x,T.pointLength=b,T.spotLength=A,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=O,T.numPointShadows=I,T.numSpotShadows=R,T.numSpotMaps=U,T.numLightProbes=D,a.version=A2++)}function p(h,g){let _=0,v=0,x=0,b=0,A=0;const M=g.matrixWorldInverse;for(let y=0,O=h.length;y<O;y++){const I=h[y];if(I.isDirectionalLight){const R=a.directional[_];R.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),_++}else if(I.isSpotLight){const R=a.spot[x];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),x++}else if(I.isRectAreaLight){const R=a.rectArea[b];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(M),u.identity(),c.copy(I.matrixWorld),c.premultiply(M),u.extractRotation(c),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),b++}else if(I.isPointLight){const R=a.point[v];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(M),v++}else if(I.isHemisphereLight){const R=a.hemi[A];R.direction.setFromMatrixPosition(I.matrixWorld),R.direction.transformDirection(M),A++}}}return{setup:d,setupView:p,state:a}}function px(r){const e=new w2(r),n=[],a=[],o=[];function c(v){_.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function d(v){a.push(v)}function p(v){o.push(v)}function h(){e.setup(n)}function g(v){e.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:p}}function C2(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new px(r),e.set(o,[d])):c>=u.length?(d=new px(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const N2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D2=`uniform sampler2D shadow_pass;
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
}`,L2=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],U2=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],mx=new ht,vl=new J,Ph=new J;function O2(r,e,n){let a=new Qp;const o=new Mt,c=new Mt,u=new Yt,d=new mE,p=new gE,h={},g=n.maxTextureSize,_={[Ha]:ii,[ii]:Ha,[vi]:vi},v=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:N2,fragmentShader:D2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new ai;b.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Kn(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let y=this.type;this.render=function(N,D,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===Rx&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=bu);const L=r.getRenderTarget(),V=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Fa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ce=y!==this.type;ce&&D.traverse(function(_e){_e.material&&(Array.isArray(_e.material)?_e.material.forEach(Z=>Z.needsUpdate=!0):_e.material.needsUpdate=!0)});for(let _e=0,Z=N.length;_e<Z;_e++){const F=N[_e],G=F.shadow;if(G===void 0){Ke("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ee=G.getFrameExtents();o.multiply(ee),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ee.x),o.x=c.x*ee.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ee.y),o.y=c.y*ee.y,G.mapSize.y=c.y));const pe=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=pe,G.map===null||ce===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===yl){if(F.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ra(o.x,o.y,{format:sr,type:Ga,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new co(o.x,o.y,Di),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Va,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An}else F.isPointLight?(G.map=new ly(o.x),G.map.depthTexture=new lE(o.x,oa)):(G.map=new ra(o.x,o.y),G.map.depthTexture=new co(o.x,o.y,oa)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Va,this.type===bu?(G.map.depthTexture.compareFunction=pe?Xp:kp,G.map.depthTexture.minFilter=Rn,G.map.depthTexture.magFilter=Rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An);G.camera.updateProjectionMatrix()}const be=G.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<be;P++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,P),r.clear();else{P===0&&(r.setRenderTarget(G.map),r.clear());const j=G.getViewport(P);u.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),K.viewport(u)}if(F.isPointLight){const j=G.camera,Se=G.matrix,we=F.distance||j.far;we!==j.far&&(j.far=we,j.updateProjectionMatrix()),vl.setFromMatrixPosition(F.matrixWorld),j.position.copy(vl),Ph.copy(j.position),Ph.add(L2[P]),j.up.copy(U2[P]),j.lookAt(Ph),j.updateMatrixWorld(),Se.makeTranslation(-vl.x,-vl.y,-vl.z),mx.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(mx,j.coordinateSystem,j.reversedDepth)}else G.updateMatrices(F);a=G.getFrustum(),R(D,T,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===yl&&O(G,T),G.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(L,V,z)};function O(N,D){const T=e.update(A);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ra(o.x,o.y,{format:sr,type:Ga})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(D,null,T,v,A,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(D,null,T,x,A,null)}function I(N,D,T,L){let V=null;const z=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)V=z;else if(V=T.isPointLight===!0?p:d,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const K=V.uuid,ce=D.uuid;let _e=h[K];_e===void 0&&(_e={},h[K]=_e);let Z=_e[ce];Z===void 0&&(Z=V.clone(),_e[ce]=Z,D.addEventListener("dispose",U)),V=Z}if(V.visible=D.visible,V.wireframe=D.wireframe,L===yl?V.side=D.shadowSide!==null?D.shadowSide:D.side:V.side=D.shadowSide!==null?D.shadowSide:_[D.side],V.alphaMap=D.alphaMap,V.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,V.map=D.map,V.clipShadows=D.clipShadows,V.clippingPlanes=D.clippingPlanes,V.clipIntersection=D.clipIntersection,V.displacementMap=D.displacementMap,V.displacementScale=D.displacementScale,V.displacementBias=D.displacementBias,V.wireframeLinewidth=D.wireframeLinewidth,V.linewidth=D.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const K=r.properties.get(V);K.light=T}return V}function R(N,D,T,L,V){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===yl)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const ce=e.update(N),_e=N.material;if(Array.isArray(_e)){const Z=ce.groups;for(let F=0,G=Z.length;F<G;F++){const ee=Z[F],pe=_e[ee.materialIndex];if(pe&&pe.visible){const be=I(N,pe,L,V);N.onBeforeShadow(r,N,D,T,ce,be,ee),r.renderBufferDirect(T,null,ce,be,N,ee),N.onAfterShadow(r,N,D,T,ce,be,ee)}}}else if(_e.visible){const Z=I(N,_e,L,V);N.onBeforeShadow(r,N,D,T,ce,Z,null),r.renderBufferDirect(T,null,ce,Z,N,null),N.onAfterShadow(r,N,D,T,ce,Z,null)}}const K=N.children;for(let ce=0,_e=K.length;ce<_e;ce++)R(K[ce],D,T,L,V)}function U(N){N.target.removeEventListener("dispose",U);for(const T in h){const L=h[T],V=N.target.uuid;V in L&&(L[V].dispose(),delete L[V])}}}function P2(r,e){function n(){let X=!1;const Ae=new Yt;let ge=null;const Ce=new Yt(0,0,0,0);return{setMask:function(Be){ge!==Be&&!X&&(r.colorMask(Be,Be,Be,Be),ge=Be)},setLocked:function(Be){X=Be},setClear:function(Be,Me,qe,Ve,en){en===!0&&(Be*=Ve,Me*=Ve,qe*=Ve),Ae.set(Be,Me,qe,Ve),Ce.equals(Ae)===!1&&(r.clearColor(Be,Me,qe,Ve),Ce.copy(Ae))},reset:function(){X=!1,ge=null,Ce.set(-1,0,0,0)}}}function a(){let X=!1,Ae=!1,ge=null,Ce=null,Be=null;return{setReversed:function(Me){if(Ae!==Me){const qe=e.get("EXT_clip_control");Me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const Ve=Be;Be=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(Me){Me?Ee(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(Me){ge!==Me&&!X&&(r.depthMask(Me),ge=Me)},setFunc:function(Me){if(Ae&&(Me=pb[Me]),Ce!==Me){switch(Me){case Gh:r.depthFunc(r.NEVER);break;case Vh:r.depthFunc(r.ALWAYS);break;case kh:r.depthFunc(r.LESS);break;case so:r.depthFunc(r.LEQUAL);break;case Xh:r.depthFunc(r.EQUAL);break;case Wh:r.depthFunc(r.GEQUAL);break;case qh:r.depthFunc(r.GREATER);break;case Yh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ce=Me}},setLocked:function(Me){X=Me},setClear:function(Me){Be!==Me&&(Be=Me,Ae&&(Me=1-Me),r.clearDepth(Me))},reset:function(){X=!1,ge=null,Ce=null,Be=null,Ae=!1}}}function o(){let X=!1,Ae=null,ge=null,Ce=null,Be=null,Me=null,qe=null,Ve=null,en=null;return{setTest:function(Ot){X||(Ot?Ee(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Ot){Ae!==Ot&&!X&&(r.stencilMask(Ot),Ae=Ot)},setFunc:function(Ot,si,ri){(ge!==Ot||Ce!==si||Be!==ri)&&(r.stencilFunc(Ot,si,ri),ge=Ot,Ce=si,Be=ri)},setOp:function(Ot,si,ri){(Me!==Ot||qe!==si||Ve!==ri)&&(r.stencilOp(Ot,si,ri),Me=Ot,qe=si,Ve=ri)},setLocked:function(Ot){X=Ot},setClear:function(Ot){en!==Ot&&(r.clearStencil(Ot),en=Ot)},reset:function(){X=!1,Ae=null,ge=null,Ce=null,Be=null,Me=null,qe=null,Ve=null,en=null}}}const c=new n,u=new a,d=new o,p=new WeakMap,h=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],A=null,M=!1,y=null,O=null,I=null,R=null,U=null,N=null,D=null,T=new nt(0,0,0),L=0,V=!1,z=null,K=null,ce=null,_e=null,Z=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const pe=r.getParameter(r.VERSION);pe.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(pe)[1]),G=ee>=1):pe.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),G=ee>=2);let be=null,P={};const j=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),we=new Yt().fromArray(j),Ie=new Yt().fromArray(Se);function se(X,Ae,ge,Ce){const Be=new Uint8Array(4),Me=r.createTexture();r.bindTexture(X,Me),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<ge;qe++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(Ae+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return Me}const ye={};ye[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Ee(r.DEPTH_TEST),u.setFunc(so),rn(!1),on(J_),Ee(r.CULL_FACE),At(Fa);function Ee(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function He(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function it(X,Ae){return v[X]!==Ae?(r.bindFramebuffer(X,Ae),v[X]=Ae,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ae),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Qe(X,Ae){let ge=b,Ce=!1;if(X){ge=x.get(Ae),ge===void 0&&(ge=[],x.set(Ae,ge));const Be=X.textures;if(ge.length!==Be.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,qe=Be.length;Me<qe;Me++)ge[Me]=r.COLOR_ATTACHMENT0+Me;ge.length=Be.length,Ce=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,Ce=!0);Ce&&r.drawBuffers(ge)}function Qt(X){return A!==X?(r.useProgram(X),A=X,!0):!1}const pt={[er]:r.FUNC_ADD,[OM]:r.FUNC_SUBTRACT,[PM]:r.FUNC_REVERSE_SUBTRACT};pt[IM]=r.MIN,pt[BM]=r.MAX;const Tt={[FM]:r.ZERO,[zM]:r.ONE,[HM]:r.SRC_COLOR,[zh]:r.SRC_ALPHA,[qM]:r.SRC_ALPHA_SATURATE,[XM]:r.DST_COLOR,[VM]:r.DST_ALPHA,[GM]:r.ONE_MINUS_SRC_COLOR,[Hh]:r.ONE_MINUS_SRC_ALPHA,[WM]:r.ONE_MINUS_DST_COLOR,[kM]:r.ONE_MINUS_DST_ALPHA,[YM]:r.CONSTANT_COLOR,[jM]:r.ONE_MINUS_CONSTANT_COLOR,[KM]:r.CONSTANT_ALPHA,[ZM]:r.ONE_MINUS_CONSTANT_ALPHA};function At(X,Ae,ge,Ce,Be,Me,qe,Ve,en,Ot){if(X===Fa){M===!0&&(He(r.BLEND),M=!1);return}if(M===!1&&(Ee(r.BLEND),M=!0),X!==UM){if(X!==y||Ot!==V){if((O!==er||U!==er)&&(r.blendEquation(r.FUNC_ADD),O=er,U=er),Ot)switch(X){case to:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $_:r.blendFunc(r.ONE,r.ONE);break;case ev:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:at("WebGLState: Invalid blending: ",X);break}else switch(X){case to:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ev:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tv:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",X);break}I=null,R=null,N=null,D=null,T.set(0,0,0),L=0,y=X,V=Ot}return}Be=Be||Ae,Me=Me||ge,qe=qe||Ce,(Ae!==O||Be!==U)&&(r.blendEquationSeparate(pt[Ae],pt[Be]),O=Ae,U=Be),(ge!==I||Ce!==R||Me!==N||qe!==D)&&(r.blendFuncSeparate(Tt[ge],Tt[Ce],Tt[Me],Tt[qe]),I=ge,R=Ce,N=Me,D=qe),(Ve.equals(T)===!1||en!==L)&&(r.blendColor(Ve.r,Ve.g,Ve.b,en),T.copy(Ve),L=en),y=X,V=!1}function gt(X,Ae){X.side===vi?He(r.CULL_FACE):Ee(r.CULL_FACE);let ge=X.side===ii;Ae&&(ge=!ge),rn(ge),X.blending===to&&X.transparent===!1?At(Fa):At(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ce=X.stencilWrite;d.setTest(Ce),Ce&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),hn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function rn(X){z!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),z=X)}function on(X){X!==DM?(Ee(r.CULL_FACE),X!==K&&(X===J_?r.cullFace(r.BACK):X===LM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),K=X}function ln(X){X!==ce&&(G&&r.lineWidth(X),ce=X)}function hn(X,Ae,ge){X?(Ee(r.POLYGON_OFFSET_FILL),(_e!==Ae||Z!==ge)&&(_e=Ae,Z=ge,u.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,ge))):He(r.POLYGON_OFFSET_FILL)}function Zt(X){X?Ee(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function cn(X){X===void 0&&(X=r.TEXTURE0+F-1),be!==X&&(r.activeTexture(X),be=X)}function Y(X,Ae,ge){ge===void 0&&(be===null?ge=r.TEXTURE0+F-1:ge=be);let Ce=P[ge];Ce===void 0&&(Ce={type:void 0,texture:void 0},P[ge]=Ce),(Ce.type!==X||Ce.texture!==Ae)&&(be!==ge&&(r.activeTexture(ge),be=ge),r.bindTexture(X,Ae||ye[X]),Ce.type=X,Ce.texture=Ae)}function kt(){const X=P[be];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Dt(){try{r.compressedTexImage2D(...arguments)}catch(X){at("WebGLState:",X)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(X){at("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){at("WebGLState:",X)}}function $(){try{r.texSubImage3D(...arguments)}catch(X){at("WebGLState:",X)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(X){at("WebGLState:",X)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(X){at("WebGLState:",X)}}function Te(){try{r.texStorage2D(...arguments)}catch(X){at("WebGLState:",X)}}function Ne(){try{r.texStorage3D(...arguments)}catch(X){at("WebGLState:",X)}}function fe(){try{r.texImage2D(...arguments)}catch(X){at("WebGLState:",X)}}function he(){try{r.texImage3D(...arguments)}catch(X){at("WebGLState:",X)}}function Re(X){return _[X]!==void 0?_[X]:r.getParameter(X)}function Fe(X,Ae){_[X]!==Ae&&(r.pixelStorei(X,Ae),_[X]=Ae)}function Ue(X){we.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),we.copy(X))}function De(X){Ie.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ie.copy(X))}function Ze(X,Ae){let ge=h.get(Ae);ge===void 0&&(ge=new WeakMap,h.set(Ae,ge));let Ce=ge.get(X);Ce===void 0&&(Ce=r.getUniformBlockIndex(Ae,X.name),ge.set(X,Ce))}function Je(X,Ae){const Ce=h.get(Ae).get(X);p.get(Ae)!==Ce&&(r.uniformBlockBinding(Ae,Ce,X.__bindingPointIndex),p.set(Ae,Ce))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},be=null,P={},v={},x=new WeakMap,b=[],A=null,M=!1,y=null,O=null,I=null,R=null,U=null,N=null,D=null,T=new nt(0,0,0),L=0,V=!1,z=null,K=null,ce=null,_e=null,Z=null,we.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Ee,disable:He,bindFramebuffer:it,drawBuffers:Qe,useProgram:Qt,setBlending:At,setMaterial:gt,setFlipSided:rn,setCullFace:on,setLineWidth:ln,setPolygonOffset:hn,setScissorTest:Zt,activeTexture:cn,bindTexture:Y,unbindTexture:kt,compressedTexImage2D:Dt,compressedTexImage3D:B,texImage2D:fe,texImage3D:he,pixelStorei:Fe,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Je,texStorage2D:Te,texStorage3D:Ne,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Ue,viewport:De,reset:st}}function I2(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(B,E){return b?new OffscreenCanvas(B,E):Dl("canvas")}function M(B,E,$){let re=1;const de=Dt(B);if((de.width>$||de.height>$)&&(re=$/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Te=Math.floor(re*de.width),Ne=Math.floor(re*de.height);v===void 0&&(v=A(Te,Ne));const fe=E?A(Te,Ne):v;return fe.width=Te,fe.height=Ne,fe.getContext("2d").drawImage(B,0,0,Te,Ne),Ke("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Te+"x"+Ne+")."),fe}else return"data"in B&&Ke("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),B;return B}function y(B){return B.generateMipmaps}function O(B){r.generateMipmap(B)}function I(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(B,E,$,re,de,Te=!1){if(B!==null){if(r[B]!==void 0)return r[B];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ne;re&&(Ne=e.get("EXT_texture_norm16"),Ne||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===r.RED&&($===r.FLOAT&&(fe=r.R32F),$===r.HALF_FLOAT&&(fe=r.R16F),$===r.UNSIGNED_BYTE&&(fe=r.R8),$===r.UNSIGNED_SHORT&&Ne&&(fe=Ne.R16_EXT),$===r.SHORT&&Ne&&(fe=Ne.R16_SNORM_EXT)),E===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(fe=r.R8UI),$===r.UNSIGNED_SHORT&&(fe=r.R16UI),$===r.UNSIGNED_INT&&(fe=r.R32UI),$===r.BYTE&&(fe=r.R8I),$===r.SHORT&&(fe=r.R16I),$===r.INT&&(fe=r.R32I)),E===r.RG&&($===r.FLOAT&&(fe=r.RG32F),$===r.HALF_FLOAT&&(fe=r.RG16F),$===r.UNSIGNED_BYTE&&(fe=r.RG8),$===r.UNSIGNED_SHORT&&Ne&&(fe=Ne.RG16_EXT),$===r.SHORT&&Ne&&(fe=Ne.RG16_SNORM_EXT)),E===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(fe=r.RG8UI),$===r.UNSIGNED_SHORT&&(fe=r.RG16UI),$===r.UNSIGNED_INT&&(fe=r.RG32UI),$===r.BYTE&&(fe=r.RG8I),$===r.SHORT&&(fe=r.RG16I),$===r.INT&&(fe=r.RG32I)),E===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),$===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),$===r.UNSIGNED_INT&&(fe=r.RGB32UI),$===r.BYTE&&(fe=r.RGB8I),$===r.SHORT&&(fe=r.RGB16I),$===r.INT&&(fe=r.RGB32I)),E===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),$===r.UNSIGNED_INT&&(fe=r.RGBA32UI),$===r.BYTE&&(fe=r.RGBA8I),$===r.SHORT&&(fe=r.RGBA16I),$===r.INT&&(fe=r.RGBA32I)),E===r.RGB&&($===r.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGB16_EXT),$===r.SHORT&&Ne&&(fe=Ne.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),E===r.RGBA){const he=Te?Uu:yt.getTransfer(de);$===r.FLOAT&&(fe=r.RGBA32F),$===r.HALF_FLOAT&&(fe=r.RGBA16F),$===r.UNSIGNED_BYTE&&(fe=he===Ht?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGBA16_EXT),$===r.SHORT&&Ne&&(fe=Ne.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(B,E){let $;return B?E===null||E===oa||E===Rl?$=r.DEPTH24_STENCIL8:E===Di?$=r.DEPTH32F_STENCIL8:E===Al&&($=r.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oa||E===Rl?$=r.DEPTH_COMPONENT24:E===Di?$=r.DEPTH_COMPONENT32F:E===Al&&($=r.DEPTH_COMPONENT16),$}function N(B,E){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==An&&B.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?E.mipmaps.length:1}function D(B){const E=B.target;E.removeEventListener("dispose",D),L(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(B){const E=B.target;E.removeEventListener("dispose",T),z(E)}function L(B){const E=a.get(B);if(E.__webglInit===void 0)return;const $=B.source,re=x.get($);if(re){const de=re[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&V(B),Object.keys(re).length===0&&x.delete($)}a.remove(B)}function V(B){const E=a.get(B);r.deleteTexture(E.__webglTexture);const $=B.source,re=x.get($);delete re[E.__cacheKey],u.memory.textures--}function z(B){const E=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let de=0;de<E.__webglFramebuffer[re].length;de++)r.deleteFramebuffer(E.__webglFramebuffer[re][de]);else r.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)r.deleteFramebuffer(E.__webglFramebuffer[re]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=B.textures;for(let re=0,de=$.length;re<de;re++){const Te=a.get($[re]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),u.memory.textures--),a.remove($[re])}a.remove(B)}let K=0;function ce(){K=0}function _e(){return K}function Z(B){K=B}function F(){const B=K;return B>=o.maxTextures&&Ke("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),K+=1,B}function G(B){const E=[];return E.push(B.wrapS),E.push(B.wrapT),E.push(B.wrapR||0),E.push(B.magFilter),E.push(B.minFilter),E.push(B.anisotropy),E.push(B.internalFormat),E.push(B.format),E.push(B.type),E.push(B.generateMipmaps),E.push(B.premultiplyAlpha),E.push(B.flipY),E.push(B.unpackAlignment),E.push(B.colorSpace),E.join()}function ee(B,E){const $=a.get(B);if(B.isVideoTexture&&Y(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&$.__version!==B.version){const re=B.image;if(re===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{He($,B,E);return}}else B.isExternalTexture&&($.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+E)}function pe(B,E){const $=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&$.__version!==B.version){He($,B,E);return}else B.isExternalTexture&&($.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+E)}function be(B,E){const $=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&$.__version!==B.version){He($,B,E);return}n.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+E)}function P(B,E){const $=a.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&$.__version!==B.version){it($,B,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+E)}const j={[oo]:r.REPEAT,[ia]:r.CLAMP_TO_EDGE,[Nu]:r.MIRRORED_REPEAT},Se={[An]:r.NEAREST,[Bx]:r.NEAREST_MIPMAP_NEAREST,[Sl]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[Eu]:r.LINEAR_MIPMAP_NEAREST,[Ia]:r.LINEAR_MIPMAP_LINEAR},we={[ab]:r.NEVER,[cb]:r.ALWAYS,[sb]:r.LESS,[kp]:r.LEQUAL,[rb]:r.EQUAL,[Xp]:r.GEQUAL,[ob]:r.GREATER,[lb]:r.NOTEQUAL};function Ie(B,E){if(E.type===Di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Eu||E.magFilter===Sl||E.magFilter===Ia||E.minFilter===Rn||E.minFilter===Eu||E.minFilter===Sl||E.minFilter===Ia)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,j[E.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,j[E.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,j[E.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,Se[E.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===An||E.minFilter!==Sl&&E.minFilter!==Ia||E.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function se(B,E){let $=!1;B.__webglInit===void 0&&(B.__webglInit=!0,E.addEventListener("dispose",D));const re=E.source;let de=x.get(re);de===void 0&&(de={},x.set(re,de));const Te=G(E);if(Te!==B.__cacheKey){de[Te]===void 0&&(de[Te]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,$=!0),de[Te].usedTimes++;const Ne=de[B.__cacheKey];Ne!==void 0&&(de[B.__cacheKey].usedTimes--,Ne.usedTimes===0&&V(E)),B.__cacheKey=Te,B.__webglTexture=de[Te].texture}return $}function ye(B,E,$){return Math.floor(Math.floor(B/$)/E)}function Ee(B,E,$,re){const Te=B.updateRanges;if(Te.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,$,re,E.data);else{Te.sort((Fe,Ue)=>Fe.start-Ue.start);let Ne=0;for(let Fe=1;Fe<Te.length;Fe++){const Ue=Te[Ne],De=Te[Fe],Ze=Ue.start+Ue.count,Je=ye(De.start,E.width,4),st=ye(Ue.start,E.width,4);De.start<=Ze+1&&Je===st&&ye(De.start+De.count-1,E.width,4)===Je?Ue.count=Math.max(Ue.count,De.start+De.count-Ue.start):(++Ne,Te[Ne]=De)}Te.length=Ne+1;const fe=n.getParameter(r.UNPACK_ROW_LENGTH),he=n.getParameter(r.UNPACK_SKIP_PIXELS),Re=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Fe=0,Ue=Te.length;Fe<Ue;Fe++){const De=Te[Fe],Ze=Math.floor(De.start/4),Je=Math.ceil(De.count/4),st=Ze%E.width,X=Math.floor(Ze/E.width),Ae=Je,ge=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,st),n.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,st,X,Ae,ge,$,re,E.data)}B.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,fe),n.pixelStorei(r.UNPACK_SKIP_PIXELS,he),n.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function He(B,E,$){let re=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=r.TEXTURE_3D);const de=se(B,E),Te=E.source;n.bindTexture(re,B.__webglTexture,r.TEXTURE0+$);const Ne=a.get(Te);if(Te.version!==Ne.__version||de===!0){if(n.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ge=yt.getPrimaries(yt.workingColorSpace),Ce=E.colorSpace===Es?null:yt.getPrimaries(E.colorSpace),Be=E.colorSpace===Es||ge===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let he=M(E.image,!1,o.maxTextureSize);he=kt(E,he);const Re=c.convert(E.format,E.colorSpace),Fe=c.convert(E.type);let Ue=R(E.internalFormat,Re,Fe,E.normalized,E.colorSpace,E.isVideoTexture);Ie(re,E);let De;const Ze=E.mipmaps,Je=E.isVideoTexture!==!0,st=Ne.__version===void 0||de===!0,X=Te.dataReady,Ae=N(E,he);if(E.isDepthTexture)Ue=U(E.format===nr,E.type),st&&(Je?n.texStorage2D(r.TEXTURE_2D,1,Ue,he.width,he.height):n.texImage2D(r.TEXTURE_2D,0,Ue,he.width,he.height,0,Re,Fe,null));else if(E.isDataTexture)if(Ze.length>0){Je&&st&&n.texStorage2D(r.TEXTURE_2D,Ae,Ue,Ze[0].width,Ze[0].height);for(let ge=0,Ce=Ze.length;ge<Ce;ge++)De=Ze[ge],Je?X&&n.texSubImage2D(r.TEXTURE_2D,ge,0,0,De.width,De.height,Re,Fe,De.data):n.texImage2D(r.TEXTURE_2D,ge,Ue,De.width,De.height,0,Re,Fe,De.data);E.generateMipmaps=!1}else Je?(st&&n.texStorage2D(r.TEXTURE_2D,Ae,Ue,he.width,he.height),X&&Ee(E,he,Re,Fe)):n.texImage2D(r.TEXTURE_2D,0,Ue,he.width,he.height,0,Re,Fe,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&st&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ue,Ze[0].width,Ze[0].height,he.depth);for(let ge=0,Ce=Ze.length;ge<Ce;ge++)if(De=Ze[ge],E.format!==Li)if(Re!==null)if(Je){if(X)if(E.layerUpdates.size>0){const Be=qv(De.width,De.height,E.format,E.type);for(const Me of E.layerUpdates){const qe=De.data.subarray(Me*Be/De.data.BYTES_PER_ELEMENT,(Me+1)*Be/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,Me,De.width,De.height,1,Re,qe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,De.width,De.height,he.depth,Re,De.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,Ue,De.width,De.height,he.depth,0,De.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?X&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,De.width,De.height,he.depth,Re,Fe,De.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ge,Ue,De.width,De.height,he.depth,0,Re,Fe,De.data)}else{Je&&st&&n.texStorage2D(r.TEXTURE_2D,Ae,Ue,Ze[0].width,Ze[0].height);for(let ge=0,Ce=Ze.length;ge<Ce;ge++)De=Ze[ge],E.format!==Li?Re!==null?Je?X&&n.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,De.width,De.height,Re,De.data):n.compressedTexImage2D(r.TEXTURE_2D,ge,Ue,De.width,De.height,0,De.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?X&&n.texSubImage2D(r.TEXTURE_2D,ge,0,0,De.width,De.height,Re,Fe,De.data):n.texImage2D(r.TEXTURE_2D,ge,Ue,De.width,De.height,0,Re,Fe,De.data)}else if(E.isDataArrayTexture)if(Je){if(st&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ue,he.width,he.height,he.depth),X)if(E.layerUpdates.size>0){const ge=qv(he.width,he.height,E.format,E.type);for(const Ce of E.layerUpdates){const Be=he.data.subarray(Ce*ge/he.data.BYTES_PER_ELEMENT,(Ce+1)*ge/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ce,he.width,he.height,1,Re,Fe,Be)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,Fe,he.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,Re,Fe,he.data);else if(E.isData3DTexture)Je?(st&&n.texStorage3D(r.TEXTURE_3D,Ae,Ue,he.width,he.height,he.depth),X&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,Fe,he.data)):n.texImage3D(r.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,Re,Fe,he.data);else if(E.isFramebufferTexture){if(st)if(Je)n.texStorage2D(r.TEXTURE_2D,Ae,Ue,he.width,he.height);else{let ge=he.width,Ce=he.height;for(let Be=0;Be<Ae;Be++)n.texImage2D(r.TEXTURE_2D,Be,Ue,ge,Ce,0,Re,Fe,null),ge>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ge=r.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),he.parentNode!==ge){ge.appendChild(he),_.add(E),ge.onpaint=Ce=>{const Be=Ce.changedElements;for(const Me of _)Be.includes(Me.image)&&(Me.needsUpdate=!0)},ge.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,he);else{const Be=r.RGBA,Me=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Be,Me,qe,he)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Je&&st){const ge=Dt(Ze[0]);n.texStorage2D(r.TEXTURE_2D,Ae,Ue,ge.width,ge.height)}for(let ge=0,Ce=Ze.length;ge<Ce;ge++)De=Ze[ge],Je?X&&n.texSubImage2D(r.TEXTURE_2D,ge,0,0,Re,Fe,De):n.texImage2D(r.TEXTURE_2D,ge,Ue,Re,Fe,De);E.generateMipmaps=!1}else if(Je){if(st){const ge=Dt(he);n.texStorage2D(r.TEXTURE_2D,Ae,Ue,ge.width,ge.height)}X&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Fe,he)}else n.texImage2D(r.TEXTURE_2D,0,Ue,Re,Fe,he);y(E)&&O(re),Ne.__version=Te.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function it(B,E,$){if(E.image.length!==6)return;const re=se(B,E),de=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+$);const Te=a.get(de);if(de.version!==Te.__version||re===!0){n.activeTexture(r.TEXTURE0+$);const Ne=yt.getPrimaries(yt.workingColorSpace),fe=E.colorSpace===Es?null:yt.getPrimaries(E.colorSpace),he=E.colorSpace===Es||Ne===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let Me=0;Me<6;Me++)!Re&&!Fe?Ue[Me]=M(E.image[Me],!0,o.maxCubemapSize):Ue[Me]=Fe?E.image[Me].image:E.image[Me],Ue[Me]=kt(E,Ue[Me]);const De=Ue[0],Ze=c.convert(E.format,E.colorSpace),Je=c.convert(E.type),st=R(E.internalFormat,Ze,Je,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Ae=Te.__version===void 0||re===!0,ge=de.dataReady;let Ce=N(E,De);Ie(r.TEXTURE_CUBE_MAP,E);let Be;if(Re){X&&Ae&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,st,De.width,De.height);for(let Me=0;Me<6;Me++){Be=Ue[Me].mipmaps;for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];E.format!==Li?Ze!==null?X?ge&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,Ve.width,Ve.height,Ze,Ve.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,st,Ve.width,Ve.height,0,Ve.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,Ve.width,Ve.height,Ze,Je,Ve.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,st,Ve.width,Ve.height,0,Ze,Je,Ve.data)}}}else{if(Be=E.mipmaps,X&&Ae){Be.length>0&&Ce++;const Me=Dt(Ue[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,st,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Fe){X?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ue[Me].width,Ue[Me].height,Ze,Je,Ue[Me].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,Ue[Me].width,Ue[Me].height,0,Ze,Je,Ue[Me].data);for(let qe=0;qe<Be.length;qe++){const en=Be[qe].image[Me].image;X?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,en.width,en.height,Ze,Je,en.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,st,en.width,en.height,0,Ze,Je,en.data)}}else{X?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ze,Je,Ue[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,Ze,Je,Ue[Me]);for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];X?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Ze,Je,Ve.image[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,st,Ze,Je,Ve.image[Me])}}}y(E)&&O(r.TEXTURE_CUBE_MAP),Te.__version=de.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function Qe(B,E,$,re,de,Te){const Ne=c.convert($.format,$.colorSpace),fe=c.convert($.type),he=R($.internalFormat,Ne,fe,$.normalized,$.colorSpace),Re=a.get(E),Fe=a.get($);if(Fe.__renderTarget=E,!Re.__hasExternalTextures){const Ue=Math.max(1,E.width>>Te),De=Math.max(1,E.height>>Te);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?n.texImage3D(de,Te,he,Ue,De,E.depth,0,Ne,fe,null):n.texImage2D(de,Te,he,Ue,De,0,Ne,fe,null)}n.bindFramebuffer(r.FRAMEBUFFER,B),cn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,de,Fe.__webglTexture,0,Zt(E)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,de,Fe.__webglTexture,Te),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(B,E,$){if(r.bindRenderbuffer(r.RENDERBUFFER,B),E.depthBuffer){const re=E.depthTexture,de=re&&re.isDepthTexture?re.type:null,Te=U(E.stencilBuffer,de),Ne=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;cn(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(E),Te,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(E),Te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Te,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,B)}else{const re=E.textures;for(let de=0;de<re.length;de++){const Te=re[de],Ne=c.convert(Te.format,Te.colorSpace),fe=c.convert(Te.type),he=R(Te.internalFormat,Ne,fe,Te.normalized,Te.colorSpace);cn(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(E),he,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(E),he,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,he,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(B,E,$){const re=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,B),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=a.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,E.depthTexture);const Re=c.convert(E.depthTexture.format),Fe=c.convert(E.depthTexture.type);let Ue;E.depthTexture.format===Va?Ue=r.DEPTH_COMPONENT24:E.depthTexture.format===nr&&(Ue=r.DEPTH24_STENCIL8);for(let De=0;De<6;De++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ue,E.width,E.height,0,Re,Fe,null)}}else ee(E.depthTexture,0);const Te=de.__webglTexture,Ne=Zt(E),fe=re?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,he=E.depthTexture.format===nr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Va)cn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Te,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Te,0);else if(E.depthTexture.format===nr)cn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Te,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tt(B){const E=a.get(B),$=B.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==B.depthTexture){const re=B.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=re}if(B.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let re=0;re<6;re++)pt(E.__webglFramebuffer[re],B,re);else{const re=B.texture.mipmaps;re&&re.length>0?pt(E.__webglFramebuffer[0],B,0):pt(E.__webglFramebuffer,B,0)}else if($){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=r.createRenderbuffer(),Qt(E.__webglDepthbuffer[re],B,!1);else{const de=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Te)}}else{const re=B.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Qt(E.__webglDepthbuffer,B,!1);else{const de=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Te)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function At(B,E,$){const re=a.get(B);E!==void 0&&Qe(re.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&Tt(B)}function gt(B){const E=B.texture,$=a.get(B),re=a.get(E);B.addEventListener("dispose",T);const de=B.textures,Te=B.isWebGLCubeRenderTarget===!0,Ne=de.length>1;if(Ne||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=E.version,u.memory.textures++),Te){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let he=0;he<E.mipmaps.length;he++)$.__webglFramebuffer[fe][he]=r.createFramebuffer()}else $.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)$.__webglFramebuffer[fe]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let fe=0,he=de.length;fe<he;fe++){const Re=a.get(de[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),u.memory.textures++)}if(B.samples>0&&cn(B)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<de.length;fe++){const he=de[fe];$.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const Re=c.convert(he.format,he.colorSpace),Fe=c.convert(he.type),Ue=R(he.internalFormat,Re,Fe,he.normalized,he.colorSpace,B.isXRRenderTarget===!0),De=Zt(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,Ue,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Qt($.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Te){n.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Qe($.__webglFramebuffer[fe][he],B,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Qe($.__webglFramebuffer[fe],B,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(E)&&O(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let fe=0,he=de.length;fe<he;fe++){const Re=de[fe],Fe=a.get(Re);let Ue=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ue=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ue,Fe.__webglTexture),Ie(Ue,Re),Qe($.__webglFramebuffer,B,Re,r.COLOR_ATTACHMENT0+fe,Ue,0),y(Re)&&O(Ue)}n.unbindTexture()}else{let fe=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(fe=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(fe,re.__webglTexture),Ie(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Qe($.__webglFramebuffer[he],B,E,r.COLOR_ATTACHMENT0,fe,he);else Qe($.__webglFramebuffer,B,E,r.COLOR_ATTACHMENT0,fe,0);y(E)&&O(fe),n.unbindTexture()}B.depthBuffer&&Tt(B)}function rn(B){const E=B.textures;for(let $=0,re=E.length;$<re;$++){const de=E[$];if(y(de)){const Te=I(B),Ne=a.get(de).__webglTexture;n.bindTexture(Te,Ne),O(Te),n.unbindTexture()}}}const on=[],ln=[];function hn(B){if(B.samples>0){if(cn(B)===!1){const E=B.textures,$=B.width,re=B.height;let de=r.COLOR_BUFFER_BIT;const Te=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=a.get(B),fe=E.length>1;if(fe)for(let Re=0;Re<E.length;Re++)n.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const he=B.texture.mipmaps;he&&he.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const Fe=a.get(E[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Fe,0)}r.blitFramebuffer(0,0,$,re,0,0,$,re,de,r.NEAREST),p===!0&&(on.length=0,ln.length=0,on.push(r.COLOR_ATTACHMENT0+Re),B.depthBuffer&&B.resolveDepthBuffer===!1&&(on.push(Te),ln.push(Te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ln)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,on))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<E.length;Re++){n.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const Fe=a.get(E[Re]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,Fe,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const E=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Zt(B){return Math.min(o.maxSamples,B.samples)}function cn(B){const E=a.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(B){const E=u.render.frame;g.get(B)!==E&&(g.set(B,E),B.update())}function kt(B,E){const $=B.colorSpace,re=B.format,de=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||$!==yi&&$!==Es&&(yt.getTransfer($)===Ht?(re!==Li||de!==xi)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",$)),E}function Dt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=ce,this.getTextureUnits=_e,this.setTextureUnits=Z,this.setTexture2D=ee,this.setTexture2DArray=pe,this.setTexture3D=be,this.setTextureCube=P,this.rebindTextures=At,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=rn,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=cn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function B2(r,e){function n(a,o=Es){let c;const u=yt.getTransfer(o);if(a===xi)return r.UNSIGNED_BYTE;if(a===Bp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Fp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Hx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Gx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Fx)return r.BYTE;if(a===zx)return r.SHORT;if(a===Al)return r.UNSIGNED_SHORT;if(a===Ip)return r.INT;if(a===oa)return r.UNSIGNED_INT;if(a===Di)return r.FLOAT;if(a===Ga)return r.HALF_FLOAT;if(a===Vx)return r.ALPHA;if(a===kx)return r.RGB;if(a===Li)return r.RGBA;if(a===Va)return r.DEPTH_COMPONENT;if(a===nr)return r.DEPTH_STENCIL;if(a===zp)return r.RED;if(a===Hp)return r.RED_INTEGER;if(a===sr)return r.RG;if(a===Gp)return r.RG_INTEGER;if(a===Vp)return r.RGBA_INTEGER;if(a===Tu||a===Au||a===Ru||a===wu)if(u===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Tu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Tu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ru)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===jh||a===Kh||a===Zh||a===Qh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===jh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Jh||a===$h||a===ep||a===tp||a===np||a===Du||a===ip)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Jh||a===$h)return u===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ep)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===tp)return c.COMPRESSED_R11_EAC;if(a===np)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Du)return c.COMPRESSED_RG11_EAC;if(a===ip)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===ap||a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===dp||a===hp||a===pp||a===mp||a===gp||a===_p)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===ap)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===sp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===rp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===op)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===lp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===cp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===up)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===fp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===dp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===hp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===pp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===mp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===gp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_p)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===vp||a===xp||a===yp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===vp)return u===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===xp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===yp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Sp||a===Mp||a===Lu||a===bp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Sp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Lu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===bp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Rl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const F2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z2=`
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

}`;class H2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new ty(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new la({vertexShader:F2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kn(new Pl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G2 extends rr{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",p=1,h=null,g=null,_=null,v=null,x=null,b=null;const A=typeof XRWebGLBinding<"u",M=new H2,y={},O=n.getContextAttributes();let I=null,R=null;const U=[],N=[],D=new Mt;let T=null;const L=new Yn;L.viewport=new Yt;const V=new Yn;V.viewport=new Yt;const z=[L,V],K=new GE;let ce=null,_e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ye=U[se];return ye===void 0&&(ye=new lh,U[se]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(se){let ye=U[se];return ye===void 0&&(ye=new lh,U[se]=ye),ye.getGripSpace()},this.getHand=function(se){let ye=U[se];return ye===void 0&&(ye=new lh,U[se]=ye),ye.getHandSpace()};function Z(se){const ye=N.indexOf(se.inputSource);if(ye===-1)return;const Ee=U[ye];Ee!==void 0&&(Ee.update(se.inputSource,se.frame,h||u),Ee.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",G);for(let se=0;se<U.length;se++){const ye=N[se];ye!==null&&(N[se]=null,U[se].disconnect(ye))}ce=null,_e=null,M.reset();for(const se in y)delete y[se];e.setRenderTarget(I),x=null,v=null,_=null,o=null,R=null,Ie.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,a.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,a.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",F),o.addEventListener("inputsourceschange",G),O.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,He=null,it=null;O.depth&&(it=O.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=O.stencil?nr:Va,He=O.stencil?Rl:oa);const Qe={colorFormat:n.RGBA8,depthFormat:it,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Qe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new ra(v.textureWidth,v.textureHeight,{format:Li,type:xi,depthTexture:new co(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new ra(x.framebufferWidth,x.framebufferHeight,{format:Li,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(d),Ie.setContext(o),Ie.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(se){for(let ye=0;ye<se.removed.length;ye++){const Ee=se.removed[ye],He=N.indexOf(Ee);He>=0&&(N[He]=null,U[He].disconnect(Ee))}for(let ye=0;ye<se.added.length;ye++){const Ee=se.added[ye];let He=N.indexOf(Ee);if(He===-1){for(let Qe=0;Qe<U.length;Qe++)if(Qe>=N.length){N.push(Ee),He=Qe;break}else if(N[Qe]===null){N[Qe]=Ee,He=Qe;break}if(He===-1)break}const it=U[He];it&&it.connect(Ee)}}const ee=new J,pe=new J;function be(se,ye,Ee){ee.setFromMatrixPosition(ye.matrixWorld),pe.setFromMatrixPosition(Ee.matrixWorld);const He=ee.distanceTo(pe),it=ye.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,Qt=it[14]/(it[10]-1),pt=it[14]/(it[10]+1),Tt=(it[9]+1)/it[5],At=(it[9]-1)/it[5],gt=(it[8]-1)/it[0],rn=(Qe[8]+1)/Qe[0],on=Qt*gt,ln=Qt*rn,hn=He/(-gt+rn),Zt=hn*-gt;if(ye.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Zt),se.translateZ(hn),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),it[10]===-1)se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const cn=Qt+hn,Y=pt+hn,kt=on-Zt,Dt=ln+(He-Zt),B=Tt*pt/Y*cn,E=At*pt/Y*cn;se.projectionMatrix.makePerspective(kt,Dt,B,E,cn,Y),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function P(se,ye){ye===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ye.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let ye=se.near,Ee=se.far;M.texture!==null&&(M.depthNear>0&&(ye=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),K.near=V.near=L.near=ye,K.far=V.far=L.far=Ee,(ce!==K.near||_e!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),ce=K.near,_e=K.far),K.layers.mask=se.layers.mask|6,L.layers.mask=K.layers.mask&-5,V.layers.mask=K.layers.mask&-3;const He=se.parent,it=K.cameras;P(K,He);for(let Qe=0;Qe<it.length;Qe++)P(it[Qe],He);it.length===2?be(K,L,V):K.projectionMatrix.copy(L.projectionMatrix),j(se,K,He)};function j(se,ye,Ee){Ee===null?se.matrix.copy(ye.matrixWorld):(se.matrix.copy(Ee.matrixWorld),se.matrix.invert(),se.matrix.multiply(ye.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=lo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(se){p=se,v!==null&&(v.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(se){return y[se]};let Se=null;function we(se,ye){if(g=ye.getViewerPose(h||u),b=ye,g!==null){const Ee=g.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let He=!1;Ee.length!==K.cameras.length&&(K.cameras.length=0,He=!0);for(let pt=0;pt<Ee.length;pt++){const Tt=Ee[pt];let At=null;if(x!==null)At=x.getViewport(Tt);else{const rn=_.getViewSubImage(v,Tt);At=rn.viewport,pt===0&&(e.setRenderTargetTextures(R,rn.colorTexture,rn.depthStencilTexture),e.setRenderTarget(R))}let gt=z[pt];gt===void 0&&(gt=new Yn,gt.layers.enable(pt),gt.viewport=new Yt,z[pt]=gt),gt.matrix.fromArray(Tt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Tt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(At.x,At.y,At.width,At.height),pt===0&&(K.matrix.copy(gt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),He===!0&&K.cameras.push(gt)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=a.getBinding();const pt=_.getDepthInformation(Ee[0]);pt&&pt.isValid&&pt.texture&&M.init(pt,o.renderState)}if(it&&it.includes("camera-access")&&A){e.state.unbindTexture(),_=a.getBinding();for(let pt=0;pt<Ee.length;pt++){const Tt=Ee[pt].camera;if(Tt){let At=y[Tt];At||(At=new ty,y[Tt]=At);const gt=_.getCameraImage(Tt);At.sourceTexture=gt}}}}for(let Ee=0;Ee<U.length;Ee++){const He=N[Ee],it=U[Ee];He!==null&&it!==void 0&&it.update(He,ye,h||u)}Se&&Se(se,ye),ye.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ye}),b=null}const Ie=new ry;Ie.setAnimationLoop(we),this.setAnimationLoop=function(se){Se=se},this.dispose=function(){}}}const V2=new ht,hy=new ot;hy.set(-1,0,0,0,1,0,0,0,1);function k2(r,e){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,ny(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,O,I,R){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),_(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&x(M,y,R)):y.isMeshMatcapMaterial?(c(M,y),b(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),A(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,O,I):y.isSpriteMaterial?h(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ii&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ii&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const O=e.get(y),I=O.envMap,R=O.envMapRotation;I&&(M.envMap.value=I,M.envMapRotation.value.setFromMatrix4(V2.makeRotationFromEuler(R)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(hy),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,O,I){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*O,M.scale.value=I*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,O){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ii&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const O=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function X2(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,U){const N=U.program;a.uniformBlockBinding(R,N)}function h(R,U){let N=o[R.id];N===void 0&&(M(R),N=g(R),o[R.id]=N,R.addEventListener("dispose",O));const D=U.program;a.updateUBOMapping(R,D);const T=e.render.frame;c[R.id]!==T&&(v(R),c[R.id]=T)}function g(R){const U=_();R.__bindingPointIndex=U;const N=r.createBuffer(),D=R.__size,T=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,D,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,N),N}function _(){for(let R=0;R<d;R++)if(u.indexOf(R)===-1)return u.push(R),R;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const U=o[R.id],N=R.uniforms,D=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let T=0,L=N.length;T<L;T++){const V=N[T];if(Array.isArray(V))for(let z=0,K=V.length;z<K;z++)x(V[z],T,z,D);else x(V,T,0,D)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(R,U,N,D){if(A(R,U,N,D)===!0){const T=R.__offset,L=R.value;if(Array.isArray(L)){let V=0;for(let z=0;z<L.length;z++){const K=L[z],ce=y(K);b(K,R.__data,V),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(V+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,R.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,R.__data)}}function b(R,U,N){typeof R=="number"||typeof R=="boolean"?U[0]=R:R.isMatrix3?(U[0]=R.elements[0],U[1]=R.elements[1],U[2]=R.elements[2],U[3]=0,U[4]=R.elements[3],U[5]=R.elements[4],U[6]=R.elements[5],U[7]=0,U[8]=R.elements[6],U[9]=R.elements[7],U[10]=R.elements[8],U[11]=0):ArrayBuffer.isView(R)?U.set(new R.constructor(R.buffer,R.byteOffset,U.length)):R.toArray(U,N)}function A(R,U,N,D){const T=R.value,L=U+"_"+N;if(D[L]===void 0)return typeof T=="number"||typeof T=="boolean"?D[L]=T:ArrayBuffer.isView(T)?D[L]=T.slice():D[L]=T.clone(),!0;{const V=D[L];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return D[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function M(R){const U=R.uniforms;let N=0;const D=16;for(let L=0,V=U.length;L<V;L++){const z=Array.isArray(U[L])?U[L]:[U[L]];for(let K=0,ce=z.length;K<ce;K++){const _e=z[K],Z=Array.isArray(_e.value)?_e.value:[_e.value];for(let F=0,G=Z.length;F<G;F++){const ee=Z[F],pe=y(ee),be=N%D,P=be%pe.boundary,j=be+P;N+=P,j!==0&&D-j<pe.storage&&(N+=D-j),_e.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),_e.__offset=N,N+=pe.storage}}}const T=N%D;return T>0&&(N+=D-T),R.__size=N,R.__cache={},this}function y(R){const U={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(U.boundary=4,U.storage=4):R.isVector2?(U.boundary=8,U.storage=8):R.isVector3||R.isColor?(U.boundary=16,U.storage=12):R.isVector4?(U.boundary=16,U.storage=16):R.isMatrix3?(U.boundary=48,U.storage=48):R.isMatrix4?(U.boundary=64,U.storage=64):R.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(U.boundary=16,U.storage=R.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",R),U}function O(R){const U=R.target;U.removeEventListener("dispose",O);const N=u.indexOf(U.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function I(){for(const R in o)r.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:p,update:h,dispose:I}}const W2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function q2(){return ea===null&&(ea=new Kp(W2,16,16,sr,Ga),ea.name="DFG_LUT",ea.minFilter=Rn,ea.magFilter=Rn,ea.wrapS=ia,ea.wrapT=ia,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class Y2{constructor(e={}){const{canvas:n=db(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=xi}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const A=x,M=new Set([Vp,Gp,Hp]),y=new Set([xi,oa,Al,Rl,Bp,Fp]),O=new Uint32Array(4),I=new Int32Array(4),R=new J;let U=null,N=null;const D=[],T=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let z=!1,K=null,ce=null,_e=null,Z=null;this._outputColorSpace=Fn;let F=0,G=0,ee=null,pe=-1,be=null;const P=new Yt,j=new Yt;let Se=null;const we=new nt(0);let Ie=0,se=n.width,ye=n.height,Ee=1,He=null,it=null;const Qe=new Yt(0,0,se,ye),Qt=new Yt(0,0,se,ye);let pt=!1;const Tt=new Qp;let At=!1,gt=!1;const rn=new ht,on=new J,ln=new Yt,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function cn(){return ee===null?Ee:1}let Y=a;function kt(w,q){return n.getContext(w,q)}try{const w={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pp}`),n.addEventListener("webglcontextlost",en,!1),n.addEventListener("webglcontextrestored",Ot,!1),n.addEventListener("webglcontextcreationerror",si,!1),Y===null){const q="webgl2";if(Y=kt(q,w),Y===null)throw kt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw at("WebGLRenderer: "+w.message),w}let Dt,B,E,$,re,de,Te,Ne,fe,he,Re,Fe,Ue,De,Ze,Je,st,X,Ae,ge,Ce,Be,Me;function qe(){Dt=new qA(Y),Dt.init(),Ce=new B2(Y,Dt),B=new FA(Y,Dt,e,Ce),E=new P2(Y,Dt),B.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ce=Y.createFramebuffer(),_e=Y.createFramebuffer(),Z=Y.createFramebuffer(),$=new KA(Y),re=new S2,de=new I2(Y,Dt,E,re,B,Ce,$),Te=new WA(V),Ne=new $E(Y),Be=new IA(Y,Ne),fe=new YA(Y,Ne,$,Be),he=new QA(Y,fe,Ne,Be,$),X=new ZA(Y,B,de),Ze=new zA(re),Re=new y2(V,Te,Dt,B,Be,Ze),Fe=new k2(V,re),Ue=new b2,De=new C2(Dt),st=new PA(V,Te,E,he,b,p),Je=new O2(V,he,B),Me=new X2(Y,$,B,E),Ae=new BA(Y,Dt,$),ge=new jA(Y,Dt,$),$.programs=Re.programs,V.capabilities=B,V.extensions=Dt,V.properties=re,V.renderLists=Ue,V.shadowMap=Je,V.state=E,V.info=$}qe(),A!==xi&&(L=new $A(A,n.width,n.height,d,o,c));const Ve=new G2(V,Y);this.xr=Ve,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=Dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(w){w!==void 0&&(Ee=w,this.setSize(se,ye,!1))},this.getSize=function(w){return w.set(se,ye)},this.setSize=function(w,q,oe=!0){if(Ve.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,ye=q,n.width=Math.floor(w*Ee),n.height=Math.floor(q*Ee),oe===!0&&(n.style.width=w+"px",n.style.height=q+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(se*Ee,ye*Ee).floor()},this.setDrawingBufferSize=function(w,q,oe){se=w,ye=q,Ee=oe,n.width=Math.floor(w*oe),n.height=Math.floor(q*oe),this.setViewport(0,0,w,q)},this.setEffects=function(w){if(A===xi){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let q=0;q<w.length;q++)if(w[q].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Qe)},this.setViewport=function(w,q,oe,ie){w.isVector4?Qe.set(w.x,w.y,w.z,w.w):Qe.set(w,q,oe,ie),E.viewport(P.copy(Qe).multiplyScalar(Ee).round())},this.getScissor=function(w){return w.copy(Qt)},this.setScissor=function(w,q,oe,ie){w.isVector4?Qt.set(w.x,w.y,w.z,w.w):Qt.set(w,q,oe,ie),E.scissor(j.copy(Qt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(w){E.setScissorTest(pt=w)},this.setOpaqueSort=function(w){He=w},this.setTransparentSort=function(w){it=w},this.getClearColor=function(w){return w.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,oe=!0){let ie=0;if(w){let ae=!1;if(ee!==null){const Oe=ee.texture.format;ae=M.has(Oe)}if(ae){const Oe=ee.texture.type,Ge=y.has(Oe),Le=st.getClearColor(),Xe=st.getClearAlpha(),ke=Le.r,$e=Le.g,ct=Le.b;Ge?(O[0]=ke,O[1]=$e,O[2]=ct,O[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,O)):(I[0]=ke,I[1]=$e,I[2]=ct,I[3]=Xe,Y.clearBufferiv(Y.COLOR,0,I))}else ie|=Y.COLOR_BUFFER_BIT}q&&(ie|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&Y.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),K=w},this.dispose=function(){n.removeEventListener("webglcontextlost",en,!1),n.removeEventListener("webglcontextrestored",Ot,!1),n.removeEventListener("webglcontextcreationerror",si,!1),st.dispose(),Ue.dispose(),De.dispose(),re.dispose(),Te.dispose(),he.dispose(),Be.dispose(),Me.dispose(),Re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",_n),Ve.removeEventListener("sessionend",Un),Zn.stop()};function en(w){w.preventDefault(),Ou("WebGLRenderer: Context Lost."),z=!0}function Ot(){Ou("WebGLRenderer: Context Restored."),z=!1;const w=$.autoReset,q=Je.enabled,oe=Je.autoUpdate,ie=Je.needsUpdate,ae=Je.type;qe(),$.autoReset=w,Je.enabled=q,Je.autoUpdate=oe,Je.needsUpdate=ie,Je.type=ae}function si(w){at("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ri(w){const q=w.target;q.removeEventListener("dispose",ri),_o(q)}function _o(w){vo(w),re.remove(w)}function vo(w){const q=re.get(w).programs;q!==void 0&&(q.forEach(function(oe){Re.releaseProgram(oe)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,oe,ie,ae,Oe){q===null&&(q=hn);const Ge=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Le=qa(w,q,oe,ie,ae);E.setMaterial(ie,Ge);let Xe=oe.index,ke=1;if(ie.wireframe===!0){if(Xe=fe.getWireframeAttribute(oe),Xe===void 0)return;ke=2}const $e=oe.drawRange,ct=oe.attributes.position;let je=$e.start*ke,wt=($e.start+$e.count)*ke;Oe!==null&&(je=Math.max(je,Oe.start*ke),wt=Math.min(wt,(Oe.start+Oe.count)*ke)),Xe!==null?(je=Math.max(je,0),wt=Math.min(wt,Xe.count)):ct!=null&&(je=Math.max(je,0),wt=Math.min(wt,ct.count));const tn=wt-je;if(tn<0||tn===1/0)return;Be.setup(ae,ie,Le,oe,Xe);let jt,Pt=Ae;if(Xe!==null&&(jt=Ne.get(Xe),Pt=ge,Pt.setIndex(jt)),ae.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*cn()),Pt.setMode(Y.LINES)):Pt.setMode(Y.TRIANGLES);else if(ae.isLine){let It=ie.linewidth;It===void 0&&(It=1),E.setLineWidth(It*cn()),ae.isLineSegments?Pt.setMode(Y.LINES):ae.isLineLoop?Pt.setMode(Y.LINE_LOOP):Pt.setMode(Y.LINE_STRIP)}else ae.isPoints?Pt.setMode(Y.POINTS):ae.isSprite&&Pt.setMode(Y.TRIANGLES);if(ae.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const It=ae._multiDrawStarts,ze=ae._multiDrawCounts,zn=ae._multiDrawCount,_t=Xe?Ne.get(Xe).bytesPerElement:1,En=re.get(ie).currentProgram.getUniforms();for(let oi=0;oi<zn;oi++)En.setValue(Y,"_gl_DrawID",oi),Pt.render(It[oi]/_t,ze[oi])}else if(ae.isInstancedMesh)Pt.renderInstances(je,tn,ae.count);else if(oe.isInstancedBufferGeometry){const It=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ze=Math.min(oe.instanceCount,It);Pt.renderInstances(je,tn,ze)}else Pt.render(je,tn)};function xo(w,q,oe){w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=ii,w.needsUpdate=!0,Wa(w,q,oe),w.side=Ha,w.needsUpdate=!0,Wa(w,q,oe),w.side=vi):Wa(w,q,oe)}this.compile=function(w,q,oe=null){oe===null&&(oe=w),N=De.get(oe),N.init(q),T.push(N),oe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),w!==oe&&w.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),N.setupLights();const ie=new Set;return w.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Oe=ae.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Le=Oe[Ge];xo(Le,oe,ae),ie.add(Le)}else xo(Oe,oe,ae),ie.add(Oe)}),N=T.pop(),ie},this.compileAsync=function(w,q,oe=null){const ie=this.compile(w,q,oe);return new Promise(ae=>{function Oe(){if(ie.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ie.delete(Ge)}),ie.size===0){ae(w);return}setTimeout(Oe,10)}Dt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let or=null;function Yi(w){or&&or(w)}function _n(){Zn.stop()}function Un(){Zn.start()}const Zn=new ry;Zn.setAnimationLoop(Yi),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(w){or=w,Ve.setAnimationLoop(w),w===null?Zn.stop():Zn.start()},Ve.addEventListener("sessionstart",_n),Ve.addEventListener("sessionend",Un),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;K!==null&&K.renderStart(w,q);const oe=Ve.enabled===!0&&Ve.isPresenting===!0,ie=L!==null&&(ee===null||oe)&&L.begin(V,ee);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(q),q=Ve.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,q,ee),N=De.get(w,T.length),N.init(q),N.state.textureUnits=de.getTextureUnits(),T.push(N),rn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Tt.setFromProjectionMatrix(rn,aa,q.reversedDepth),gt=this.localClippingEnabled,At=Ze.init(this.clippingPlanes,gt),U=Ue.get(w,D.length),U.init(),D.push(U),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=V.xr.getDepthSensingMesh();Ge!==null&&ws(Ge,q,-1/0,V.sortObjects)}ws(w,q,0,V.sortObjects),U.finish(),V.sortObjects===!0&&U.sort(He,it,q.reversedDepth),Zt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Zt&&st.addToRenderList(U,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&Ze.beginShadows();const ae=N.state.shadowsArray;if(Je.render(ae,w,q),At===!0&&Ze.endShadows(),(ie&&L.hasRenderPass())===!1){const Ge=U.opaque,Le=U.transmissive;if(N.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Le.length>0)for(let ke=0,$e=Xe.length;ke<$e;ke++){const ct=Xe[ke];Fl(Ge,Le,w,ct)}Zt&&st.render(w);for(let ke=0,$e=Xe.length;ke<$e;ke++){const ct=Xe[ke];Bl(U,w,ct,ct.viewport)}}else Le.length>0&&Fl(Ge,Le,w,q),Zt&&st.render(w),Bl(U,w,q)}ee!==null&&G===0&&(de.updateMultisampleRenderTarget(ee),de.updateRenderTargetMipmap(ee)),ie&&L.end(V),w.isScene===!0&&w.onAfterRender(V,w,q),Be.resetDefaultState(),pe=-1,be=null,T.pop(),T.length>0?(N=T[T.length-1],de.setTextureUnits(N.state.textureUnits),At===!0&&Ze.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,D.pop(),D.length>0?U=D[D.length-1]:U=null,K!==null&&K.renderEnd()};function ws(w,q,oe,ie){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLightProbeGrid)N.pushLightProbeGrid(w);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Tt.intersectsSprite(w)){ie&&ln.setFromMatrixPosition(w.matrixWorld).applyMatrix4(rn);const Ge=he.update(w),Le=w.material;Le.visible&&U.push(w,Ge,Le,oe,ln.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Tt.intersectsObject(w))){const Ge=he.update(w),Le=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ln.copy(w.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ln.copy(Ge.boundingSphere.center)),ln.applyMatrix4(w.matrixWorld).applyMatrix4(rn)),Array.isArray(Le)){const Xe=Ge.groups;for(let ke=0,$e=Xe.length;ke<$e;ke++){const ct=Xe[ke],je=Le[ct.materialIndex];je&&je.visible&&U.push(w,Ge,je,oe,ln.z,ct)}}else Le.visible&&U.push(w,Ge,Le,oe,ln.z,null)}}const Oe=w.children;for(let Ge=0,Le=Oe.length;Ge<Le;Ge++)ws(Oe[Ge],q,oe,ie)}function Bl(w,q,oe,ie){const{opaque:ae,transmissive:Oe,transparent:Ge}=w;N.setupLightsView(oe),At===!0&&Ze.setGlobalState(V.clippingPlanes,oe),ie&&E.viewport(P.copy(ie)),ae.length>0&&Cs(ae,q,oe),Oe.length>0&&Cs(Oe,q,oe),Ge.length>0&&Cs(Ge,q,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Fl(w,q,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ie.id]===void 0){const je=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ie.id]=new ra(1,1,{generateMipmaps:!0,type:je?Ga:xi,minFilter:Ia,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Oe=N.state.transmissionRenderTarget[ie.id],Ge=ie.viewport||P;Oe.setSize(Ge.z*V.transmissionResolutionScale,Ge.w*V.transmissionResolutionScale);const Le=V.getRenderTarget(),Xe=V.getActiveCubeFace(),ke=V.getActiveMipmapLevel();V.setRenderTarget(Oe),V.getClearColor(we),Ie=V.getClearAlpha(),Ie<1&&V.setClearColor(16777215,.5),V.clear(),Zt&&st.render(oe);const $e=V.toneMapping;V.toneMapping=sa;const ct=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),N.setupLightsView(ie),At===!0&&Ze.setGlobalState(V.clippingPlanes,ie),Cs(w,oe,ie),de.updateMultisampleRenderTarget(Oe),de.updateRenderTargetMipmap(Oe),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let wt=0,tn=q.length;wt<tn;wt++){const jt=q[wt],{object:Pt,geometry:It,material:ze,group:zn}=jt;if(ze.side===vi&&Pt.layers.test(ie.layers)){const _t=ze.side;ze.side=ii,ze.needsUpdate=!0,Xa(Pt,oe,ie,It,ze,zn),ze.side=_t,ze.needsUpdate=!0,je=!0}}je===!0&&(de.updateMultisampleRenderTarget(Oe),de.updateRenderTargetMipmap(Oe))}V.setRenderTarget(Le,Xe,ke),V.setClearColor(we,Ie),ct!==void 0&&(ie.viewport=ct),V.toneMapping=$e}function Cs(w,q,oe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,Oe=w.length;ae<Oe;ae++){const Ge=w[ae],{object:Le,geometry:Xe,group:ke}=Ge;let $e=Ge.material;$e.allowOverride===!0&&ie!==null&&($e=ie),Le.layers.test(oe.layers)&&Xa(Le,q,oe,Xe,$e,ke)}}function Xa(w,q,oe,ie,ae,Oe){w.onBeforeRender(V,q,oe,ie,ae,Oe),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ae.onBeforeRender(V,q,oe,ie,w,Oe),ae.transparent===!0&&ae.side===vi&&ae.forceSinglePass===!1?(ae.side=ii,ae.needsUpdate=!0,V.renderBufferDirect(oe,q,ie,ae,w,Oe),ae.side=Ha,ae.needsUpdate=!0,V.renderBufferDirect(oe,q,ie,ae,w,Oe),ae.side=vi):V.renderBufferDirect(oe,q,ie,ae,w,Oe),w.onAfterRender(V,q,oe,ie,ae,Oe)}function Wa(w,q,oe){q.isScene!==!0&&(q=hn);const ie=re.get(w),ae=N.state.lights,Oe=N.state.shadowsArray,Ge=ae.state.version,Le=Re.getParameters(w,ae.state,Oe,q,oe,N.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Le);let ke=ie.programs;ie.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const $e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ie.envMap=Te.get(w.envMap||ie.environment,$e),ie.envMapRotation=ie.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",ri),ke=new Map,ie.programs=ke);let ct=ke.get(Xe);if(ct!==void 0){if(ie.currentProgram===ct&&ie.lightsStateVersion===Ge)return da(w,Le),ct}else Le.uniforms=Re.getUniforms(w),K!==null&&w.isNodeMaterial&&K.build(w,oe,Le),w.onBeforeCompile(Le,V),ct=Re.acquireProgram(Le,Xe),ke.set(Xe,ct),ie.uniforms=Le.uniforms;const je=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Ze.uniform),da(w,Le),ie.needsLights=zl(w),ie.lightsStateVersion=Ge,ie.needsLights&&(je.ambientLightColor.value=ae.state.ambient,je.lightProbe.value=ae.state.probe,je.directionalLights.value=ae.state.directional,je.directionalLightShadows.value=ae.state.directionalShadow,je.spotLights.value=ae.state.spot,je.spotLightShadows.value=ae.state.spotShadow,je.rectAreaLights.value=ae.state.rectArea,je.ltc_1.value=ae.state.rectAreaLTC1,je.ltc_2.value=ae.state.rectAreaLTC2,je.pointLights.value=ae.state.point,je.pointLightShadows.value=ae.state.pointShadow,je.hemisphereLights.value=ae.state.hemi,je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,je.spotLightMatrix.value=ae.state.spotLightMatrix,je.spotLightMap.value=ae.state.spotLightMap,je.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=N.state.lightProbeGridArray.length>0,ie.currentProgram=ct,ie.uniformsList=null,ct}function fa(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=Cu.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function da(w,q){const oe=re.get(w);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function Ns(w,q){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;R.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ie=w.length;oe<ie;oe++){const ae=w[oe];if(ae.texture!==null&&ae.boundingBox.containsPoint(R))return ae}return null}function qa(w,q,oe,ie,ae){q.isScene!==!0&&(q=hn),de.resetTextureUnits();const Oe=q.fog,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Le=ee===null?V.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:yt.workingColorSpace,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,ke=Te.get(ie.envMap||Ge,Xe),$e=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ct=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!oe.morphAttributes.position,wt=!!oe.morphAttributes.normal,tn=!!oe.morphAttributes.color;let jt=sa;ie.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(jt=V.toneMapping);const Pt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,It=Pt!==void 0?Pt.length:0,ze=re.get(ie),zn=N.state.lights;if(At===!0&&(gt===!0||w!==be)){const Ut=w===be&&ie.id===pe;Ze.setState(ie,w,Ut)}let _t=!1;ie.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==zn.state.version||ze.outputColorSpace!==Le||ae.isBatchedMesh&&ze.batching===!1||!ae.isBatchedMesh&&ze.batching===!0||ae.isBatchedMesh&&ze.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&ze.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&ze.instancing===!1||!ae.isInstancedMesh&&ze.instancing===!0||ae.isSkinnedMesh&&ze.skinning===!1||!ae.isSkinnedMesh&&ze.skinning===!0||ae.isInstancedMesh&&ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&ze.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&ze.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&ze.instancingMorph===!1&&ae.morphTexture!==null||ze.envMap!==ke||ie.fog===!0&&ze.fog!==Oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ze.numPlanes||ze.numIntersection!==Ze.numIntersection)||ze.vertexAlphas!==$e||ze.vertexTangents!==ct||ze.morphTargets!==je||ze.morphNormals!==wt||ze.morphColors!==tn||ze.toneMapping!==jt||ze.morphTargetsCount!==It||!!ze.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,ze.__version=ie.version);let En=ze.currentProgram;_t===!0&&(En=Wa(ie,q,ae),K&&ie.isNodeMaterial&&K.onUpdateProgram(ie,En,ze));let oi=!1,Ui=!1,li=!1;const Bt=En.getUniforms(),nn=ze.uniforms;if(E.useProgram(En.program)&&(oi=!0,Ui=!0,li=!0),ie.id!==pe&&(pe=ie.id,Ui=!0),ze.needsLights){const Ut=Ns(N.state.lightProbeGridArray,ae);ze.lightProbeGrid!==Ut&&(ze.lightProbeGrid=Ut,Ui=!0)}if(oi||be!==w){E.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Bt.setValue(Y,"projectionMatrix",w.projectionMatrix),Bt.setValue(Y,"viewMatrix",w.matrixWorldInverse);const ji=Bt.map.cameraPosition;ji!==void 0&&ji.setValue(Y,on.setFromMatrixPosition(w.matrixWorld)),B.logarithmicDepthBuffer&&Bt.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Bt.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),be!==w&&(be=w,Ui=!0,li=!0)}if(ze.needsLights&&(zn.state.directionalShadowMap.length>0&&Bt.setValue(Y,"directionalShadowMap",zn.state.directionalShadowMap,de),zn.state.spotShadowMap.length>0&&Bt.setValue(Y,"spotShadowMap",zn.state.spotShadowMap,de),zn.state.pointShadowMap.length>0&&Bt.setValue(Y,"pointShadowMap",zn.state.pointShadowMap,de)),ae.isSkinnedMesh){Bt.setOptional(Y,ae,"bindMatrix"),Bt.setOptional(Y,ae,"bindMatrixInverse");const Ut=ae.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Bt.setValue(Y,"boneTexture",Ut.boneTexture,de))}ae.isBatchedMesh&&(Bt.setOptional(Y,ae,"batchingTexture"),Bt.setValue(Y,"batchingTexture",ae._matricesTexture,de),Bt.setOptional(Y,ae,"batchingIdTexture"),Bt.setValue(Y,"batchingIdTexture",ae._indirectTexture,de),Bt.setOptional(Y,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Bt.setValue(Y,"batchingColorTexture",ae._colorsTexture,de));const Oi=oe.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&X.update(ae,oe,En),(Ui||ze.receiveShadow!==ae.receiveShadow)&&(ze.receiveShadow=ae.receiveShadow,Bt.setValue(Y,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(nn.envMapIntensity.value=q.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=q2()),Ui){if(Bt.setValue(Y,"toneMappingExposure",V.toneMappingExposure),ze.needsLights&&vn(nn,li),Oe&&ie.fog===!0&&Fe.refreshFogUniforms(nn,Oe),Fe.refreshMaterialUniforms(nn,ie,Ee,ye,N.state.transmissionRenderTarget[w.id]),ze.needsLights&&ze.lightProbeGrid){const Ut=ze.lightProbeGrid;nn.probesSH.value=Ut.texture,nn.probesMin.value.copy(Ut.boundingBox.min),nn.probesMax.value.copy(Ut.boundingBox.max),nn.probesResolution.value.copy(Ut.resolution)}Cu.upload(Y,fa(ze),nn,de)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Cu.upload(Y,fa(ze),nn,de),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Bt.setValue(Y,"center",ae.center),Bt.setValue(Y,"modelViewMatrix",ae.modelViewMatrix),Bt.setValue(Y,"normalMatrix",ae.normalMatrix),Bt.setValue(Y,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Ut=ie.uniformsGroups;for(let ji=0,Ya=Ut.length;ji<Ya;ji++){const Ds=Ut[ji];Me.update(Ds,En),Me.bind(Ds,En)}}return En}function vn(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function zl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(w,q,oe){const ie=re.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),re.get(w.texture).__webglTexture=q,re.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const oe=re.get(w);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,oe=0){ee=w,F=q,G=oe;let ie=null,ae=!1,Oe=!1;if(w){const Le=re.get(w);if(Le.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Le.__webglFramebuffer),P.copy(w.viewport),j.copy(w.scissor),Se=w.scissorTest,E.viewport(P),E.scissor(j),E.setScissorTest(Se),pe=-1;return}else if(Le.__webglFramebuffer===void 0)de.setupRenderTarget(w);else if(Le.__hasExternalTextures)de.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $e=w.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&re.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const ke=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?ie=ke[q][oe]:ie=ke[q],ae=!0):w.samples>0&&de.useMultisampledRTT(w)===!1?ie=re.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?ie=ke[oe]:ie=ke,P.copy(w.viewport),j.copy(w.scissor),Se=w.scissorTest}else P.copy(Qe).multiplyScalar(Ee).floor(),j.copy(Qt).multiplyScalar(Ee).floor(),Se=pt;if(oe!==0&&(ie=ce),E.bindFramebuffer(Y.FRAMEBUFFER,ie)&&E.drawBuffers(w,ie),E.viewport(P),E.scissor(j),E.setScissorTest(Se),ae){const Le=re.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,oe)}else if(Oe){const Le=q;for(let Xe=0;Xe<w.textures.length;Xe++){const ke=re.get(w.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,oe,Le)}}else if(w!==null&&oe!==0){const Le=re.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Le.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(w,q,oe,ie,ae,Oe,Ge,Le=0){if(!(w&&w.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const ke=w.textures[Le],$e=ke.format,ct=ke.type;if(w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le),!B.textureFormatReadable($e)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(ct)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ie&&oe>=0&&oe<=w.height-ae&&Y.readPixels(q,oe,ie,ae,Ce.convert($e),Ce.convert(ct),Oe)}finally{const ke=ee!==null?re.get(ee).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,q,oe,ie,ae,Oe,Ge,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(q>=0&&q<=w.width-ie&&oe>=0&&oe<=w.height-ae){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);const ke=w.textures[Le],$e=ke.format,ct=ke.type;if(w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le),!B.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Oe.byteLength,Y.STREAM_READ),Y.readPixels(q,oe,ie,ae,Ce.convert($e),Ce.convert(ct),0);const wt=ee!==null?re.get(ee).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,wt);const tn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await hb(Y,tn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Oe),Y.deleteBuffer(je),Y.deleteSync(tn),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,oe=0){const ie=Math.pow(2,-oe),ae=Math.floor(w.image.width*ie),Oe=Math.floor(w.image.height*ie),Ge=q!==null?q.x:0,Le=q!==null?q.y:0;de.setTexture2D(w,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,Ge,Le,ae,Oe),E.unbindTexture()},this.copyTextureToTexture=function(w,q,oe=null,ie=null,ae=0,Oe=0){let Ge,Le,Xe,ke,$e,ct,je,wt,tn;const jt=w.isCompressedTexture?w.mipmaps[Oe]:w.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,$e=oe.min.y,ct=oe.isBox3?oe.min.z:0;else{const nn=Math.pow(2,-ae);Ge=Math.floor(jt.width*nn),Le=Math.floor(jt.height*nn),w.isDataArrayTexture?Xe=jt.depth:w.isData3DTexture?Xe=Math.floor(jt.depth*nn):Xe=1,ke=0,$e=0,ct=0}ie!==null?(je=ie.x,wt=ie.y,tn=ie.z):(je=0,wt=0,tn=0);const Pt=Ce.convert(q.format),It=Ce.convert(q.type);let ze;q.isData3DTexture?(de.setTexture3D(q,0),ze=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(de.setTexture2DArray(q,0),ze=Y.TEXTURE_2D_ARRAY):(de.setTexture2D(q,0),ze=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const zn=E.getParameter(Y.UNPACK_ROW_LENGTH),_t=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),En=E.getParameter(Y.UNPACK_SKIP_PIXELS),oi=E.getParameter(Y.UNPACK_SKIP_ROWS),Ui=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,jt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,jt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(Y.UNPACK_SKIP_ROWS,$e),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,ct);const li=w.isDataArrayTexture||w.isData3DTexture,Bt=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const nn=re.get(w),Oi=re.get(q),Ut=re.get(nn.__renderTarget),ji=re.get(Oi.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Ut.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Ya=0;Ya<Xe;Ya++)li&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(w).__webglTexture,ae,ct+Ya),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(q).__webglTexture,Oe,tn+Ya)),Y.blitFramebuffer(ke,$e,Ge,Le,je,wt,Ge,Le,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ae!==0||w.isRenderTargetTexture||re.has(w)){const nn=re.get(w),Oi=re.get(q);E.bindFramebuffer(Y.READ_FRAMEBUFFER,_e),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Z);for(let Ut=0;Ut<Xe;Ut++)li?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,nn.__webglTexture,ae,ct+Ut):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,nn.__webglTexture,ae),Bt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Oi.__webglTexture,Oe,tn+Ut):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oi.__webglTexture,Oe),ae!==0?Y.blitFramebuffer(ke,$e,Ge,Le,je,wt,Ge,Le,Y.COLOR_BUFFER_BIT,Y.NEAREST):Bt?Y.copyTexSubImage3D(ze,Oe,je,wt,tn+Ut,ke,$e,Ge,Le):Y.copyTexSubImage2D(ze,Oe,je,wt,ke,$e,Ge,Le);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Bt?w.isDataTexture||w.isData3DTexture?Y.texSubImage3D(ze,Oe,je,wt,tn,Ge,Le,Xe,Pt,It,jt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(ze,Oe,je,wt,tn,Ge,Le,Xe,Pt,jt.data):Y.texSubImage3D(ze,Oe,je,wt,tn,Ge,Le,Xe,Pt,It,jt):w.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Oe,je,wt,Ge,Le,Pt,It,jt.data):w.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Oe,je,wt,jt.width,jt.height,Pt,jt.data):Y.texSubImage2D(Y.TEXTURE_2D,Oe,je,wt,Ge,Le,Pt,It,jt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,zn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_t),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,En),E.pixelStorei(Y.UNPACK_SKIP_ROWS,oi),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ui),Oe===0&&q.generateMipmaps&&Y.generateMipmap(ze),E.unbindTexture()},this.initRenderTarget=function(w){re.get(w).__webglFramebuffer===void 0&&de.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?de.setTextureCube(w,0):w.isData3DTexture?de.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?de.setTexture2DArray(w,0):de.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){F=0,G=0,ee=null,E.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}function gx(r,e){if(e===tb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ep||e===Xx){let n=r.getIndex();if(n===null){const u=[],d=r.getAttribute("position");if(d!==void 0){for(let p=0;p<d.count;p++)u.push(p);r.setIndex(u),n=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const a=n.count-2,o=[];if(e===Ep)for(let u=1;u<=a;u++)o.push(n.getX(0)),o.push(n.getX(u)),o.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(o.push(n.getX(u)),o.push(n.getX(u+1)),o.push(n.getX(u+2))):(o.push(n.getX(u+2)),o.push(n.getX(u+1)),o.push(n.getX(u)));o.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=r.clone();return c.setIndex(o),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function j2(r){const e=new Map,n=new Map,a=r.clone();return py(r,a,function(o,c){e.set(c,o),n.set(o,c)}),a.traverse(function(o){if(!o.isSkinnedMesh)return;const c=o,u=e.get(o),d=u.skeleton.bones;c.skeleton=u.skeleton.clone(),c.bindMatrix.copy(u.bindMatrix),c.skeleton.bones=d.map(function(p){return n.get(p)}),c.bind(c.skeleton,c.bindMatrix)}),a}function py(r,e,n){n(r,e);for(let a=0;a<r.children.length;a++)py(r.children[a],e.children[a],n)}class K2 extends mo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new ew(n)}),this.register(function(n){return new tw(n)}),this.register(function(n){return new uw(n)}),this.register(function(n){return new fw(n)}),this.register(function(n){return new dw(n)}),this.register(function(n){return new iw(n)}),this.register(function(n){return new aw(n)}),this.register(function(n){return new sw(n)}),this.register(function(n){return new rw(n)}),this.register(function(n){return new $2(n)}),this.register(function(n){return new ow(n)}),this.register(function(n){return new nw(n)}),this.register(function(n){return new cw(n)}),this.register(function(n){return new lw(n)}),this.register(function(n){return new Q2(n)}),this.register(function(n){return new _x(n,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new _x(n,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new hw(n)})}load(e,n,a,o){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const h=Tl.extractUrlBase(e);u=Tl.resolveURL(h,this.path)}else u=Tl.extractUrlBase(e);this.manager.itemStart(e);const d=function(h){o?o(h):console.error(h),c.manager.itemError(e),c.manager.itemEnd(e)},p=new ay(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(h){try{c.parse(h,u,function(g){n(g),c.manager.itemEnd(e)},d)}catch(g){d(g)}},a,d)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,o){let c;const u={},d={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===my){try{u[mt.KHR_BINARY_GLTF]=new pw(e)}catch(_){o&&o(_);return}c=JSON.parse(u[mt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Rw(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](h);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),d[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case mt.KHR_MATERIALS_UNLIT:u[_]=new J2;break;case mt.KHR_DRACO_MESH_COMPRESSION:u[_]=new mw(c,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:u[_]=new gw;break;case mt.KHR_MESH_QUANTIZATION:u[_]=new _w;break;default:v.indexOf(_)>=0&&d[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}h.setExtensions(u),h.setPlugins(d),h.parse(a,o)}parseAsync(e,n){const a=this;return new Promise(function(o,c){a.parse(e,n,o,c)})}}function Z2(){let r={};return{get:function(e){return r[e]},add:function(e,n){r[e]=n},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function gn(r,e,n){const a=r.json.materials[e];return a.extensions&&a.extensions[n]?a.extensions[n]:null}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Q2{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,o=n.length;a<o;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let o=n.cache.get(a);if(o)return o;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let h;const g=new nt(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],yi);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":h=new Cp(g),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new IE(g),h.distance=_;break;case"spot":h=new OE(g),h.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,h.angle=p.spot.outerConeAngle,h.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return h.position.set(0,0,0),ta(h,p),p.intensity!==void 0&&(h.intensity=p.intensity),h.name=n.createUniqueName(p.name||"light_"+e),o=Promise.resolve(h),n.cache.add(a,o),o}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],d=(c.extensions&&c.extensions[this.name]||{}).light;return d===void 0?null:this._loadLight(d).then(function(p){return a._getNodeRef(n.cache,d,p)})}}class J2{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return ir}extendParams(e,n,a){const o=[];e.color=new nt(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],yi),e.opacity=u[3]}c.baseColorTexture!==void 0&&o.push(a.assignTexture(e,"map",c.baseColorTexture,Fn))}return Promise.all(o)}}class $2{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);return a===null||a.emissiveStrength!==void 0&&(n.emissiveIntensity=a.emissiveStrength),Promise.resolve()}}class ew{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(this.parser.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Mt(c,c)}return Promise.all(o)}}class tw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);return a===null||(n.dispersion=a.dispersion!==void 0?a.dispersion:0),Promise.resolve()}}class nw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class iw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(n.sheenColor=new nt(0,0,0),n.sheenRoughness=0,n.sheen=1,a.sheenColorFactor!==void 0){const c=a.sheenColorFactor;n.sheenColor.setRGB(c[0],c[1],c[2],yi)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenColorMap",a.sheenColorTexture,Fn)),a.sheenRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class aw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(this.parser.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class sw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return n.attenuationColor=new nt().setRGB(c[0],c[1],c[2],yi),Promise.all(o)}}class rw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);return a===null||(n.ior=a.ior!==void 0?a.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}}class ow{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return n.specularColor=new nt().setRGB(c[0],c[1],c[2],yi),a.specularColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularColorMap",a.specularColorTexture,Fn)),Promise.all(o)}}class lw{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(this.parser.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(o)}}class cw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return gn(this.parser,e,this.name)!==null?Wi:null}extendMaterialParams(e,n){const a=gn(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(this.parser.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class uw{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,o=a.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const c=o.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class fw{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],d=o.images[u.source];let p=a.textureLoader;if(d.uri){const h=a.options.manager.getHandler(d.uri);h!==null&&(p=h)}return a.loadTextureImage(e,u.source,p)}}class dw{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],d=o.images[u.source];let p=a.textureLoader;if(d.uri){const h=a.options.manager.getHandler(d.uri);h!==null&&(p=h)}return a.loadTextureImage(e,u.source,p)}}class _x{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const o=a.extensions[this.name],c=this.parser.getDependency("buffer",o.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(d){const p=o.byteOffset||0,h=o.byteLength||0,g=o.count,_=o.byteStride,v=new Uint8Array(d,p,h);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,o.mode,o.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(x),g,_,v,o.mode,o.filter),x})})}else return null}}class hw{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const o=n.meshes[a.mesh];for(const h of o.primitives)if(h.mode!==Ni.TRIANGLES&&h.mode!==Ni.TRIANGLE_STRIP&&h.mode!==Ni.TRIANGLE_FAN&&h.mode!==void 0)return null;const u=a.extensions[this.name].attributes,d=[],p={};for(const h in u)d.push(this.parser.getDependency("accessor",u[h]).then(g=>(p[h]=g,p[h])));return d.length<1?null:(d.push(this.parser.createNodeMesh(e)),Promise.all(d).then(h=>{const g=h.pop(),_=g.isGroup?g.children:[g],v=h[0].count,x=[];for(const b of _){const A=new ht,M=new J,y=new ka,O=new J(1,1,1),I=new nE(b.geometry,b.material,v);for(let R=0;R<v;R++)p.TRANSLATION&&M.fromBufferAttribute(p.TRANSLATION,R),p.ROTATION&&y.fromBufferAttribute(p.ROTATION,R),p.SCALE&&O.fromBufferAttribute(p.SCALE,R),I.setMatrixAt(R,A.compose(M,y,O));for(const R in p)if(R==="_COLOR_0"){const U=p[R];I.instanceColor=new Rp(U.array,U.itemSize,U.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&b.geometry.setAttribute(R,p[R]);sn.prototype.copy.call(I,b),this.parser.assignFinalMaterial(I),x.push(I)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const my="glTF",xl=12,vx={JSON:1313821514,BIN:5130562};class pw{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,xl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==my)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-xl,c=new DataView(e,xl);let u=0;for(;u<o;){const d=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===vx.JSON){const h=new Uint8Array(e,xl+u,d);this.content=a.decode(h)}else if(p===vx.BIN){const h=xl+u;this.body=e.slice(h,h+d)}u+=d}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mw{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,o=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,d={},p={},h={};for(const g in u){const _=Lp[g]||g.toLowerCase();d[_]=u[g]}for(const g in e.attributes){const _=Lp[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],x=ao[v.componentType];h[_]=x.name,p[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){o.decodeDracoFile(g,function(x){for(const b in x.attributes){const A=x.attributes[b],M=p[b];M!==void 0&&(A.normalized=M)}_(x)},d,h,yi,v)})})}}class gw{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class _w{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class gy extends fo{constructor(e,n,a,o){super(e,n,a,o)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o*3+o;for(let u=0;u!==o;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=d*2,h=d*3,g=o-n,_=(a-n)/g,v=_*_,x=v*_,b=e*h,A=b-h,M=-2*x+3*v,y=x-v,O=1-M,I=y-v+_;for(let R=0;R!==d;R++){const U=u[A+R+d],N=u[A+R+p]*g,D=u[b+R+d],T=u[b+R]*g;c[R]=O*U+I*N+M*D+y*T}return c}}const vw=new ka;class xw extends gy{interpolate_(e,n,a,o){const c=super.interpolate_(e,n,a,o);return vw.fromArray(c).normalize().toArray(c),c}}const Ni={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ao={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xx={9728:An,9729:Rn,9984:Bx,9985:Eu,9986:Sl,9987:Ia},yx={33071:ia,33648:Nu,10497:oo},Ih={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yw={CUBICSPLINE:void 0,LINEAR:Cl,STEP:wl},Bh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sw(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new tm({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ha})),r.DefaultMaterial}function Js(r,e,n){for(const a in n.extensions)r[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function ta(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Mw(r,e,n){let a=!1,o=!1,c=!1;for(let h=0,g=e.length;h<g;h++){const _=e[h];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(o=!0),_.COLOR_0!==void 0&&(c=!0),a&&o&&c)break}if(!a&&!o&&!c)return Promise.resolve(r);const u=[],d=[],p=[];for(let h=0,g=e.length;h<g;h++){const _=e[h];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):r.attributes.position;u.push(v)}if(o){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):r.attributes.normal;d.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):r.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(d),Promise.all(p)]).then(function(h){const g=h[0],_=h[1],v=h[2];return a&&(r.morphAttributes.position=g),o&&(r.morphAttributes.normal=_),c&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function bw(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)r.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(r.morphTargetInfluences.length===n.length){r.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++)r.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ew(r){let e;const n=r.extensions&&r.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Fh(n.attributes):e=r.indices+":"+Fh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let a=0,o=r.targets.length;a<o;a++)e+=":"+Fh(r.targets[a]);return e}function Fh(r){let e="";const n=Object.keys(r).sort();for(let a=0,o=n.length;a<o;a++)e+=n[a]+":"+r[n[a]]+";";return e}function Up(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Aw=new ht;class Rw{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new Z2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,o=-1,c=!1,u=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const d=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(d)===!0;const p=d.match(/Version\/(\d+)/);o=a&&p?parseInt(p[1],10):-1,c=d.indexOf("Firefox")>-1,u=c?d.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&o<17||c&&u<98?this.textureLoader=new DE(this.options.manager):this.textureLoader=new zE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ay(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,o=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const d={scene:u[0][o.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:o.asset,parser:a,userData:{}};return Js(c,d,o),ta(d,o),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(d)})).then(function(){for(const p of d.scenes)p.updateMatrixWorld();e(d)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let o=0,c=n.length;o<c;o++){const u=n[o].joints;for(let d=0,p=u.length;d<p;d++)e[u[d]].isBone=!0}for(let o=0,c=e.length;o<c;o++){const u=e[o];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const o=a.clone(),c=(u,d)=>{const p=this.associations.get(u);p!=null&&this.associations.set(d,p);for(const[h,g]of u.children.entries())c(g,d.children[h])};return c(a,o),o.name+="_instance_"+e.uses[n]++,o}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const o=e(n[a]);if(o)return o}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let o=0;o<n.length;o++){const c=e(n[o]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let o=this.cache.get(a);if(!o){switch(e){case"scene":o=this.loadScene(n);break;case"node":o=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":o=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":o=this.loadAccessor(n);break;case"bufferView":o=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":o=this.loadBuffer(n);break;case"material":o=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":o=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":o=this.loadSkin(n);break;case"animation":o=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":o=this.loadCamera(n);break;default:if(o=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(a,o)}return o}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(o.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(c,u){a.load(Tl.resolveURL(n.uri,o.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const o=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+o)})}loadAccessor(e){const n=this,a=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const u=Ih[o.type],d=ao[o.componentType],p=o.normalized===!0,h=new d(o.count*u);return Promise.resolve(new jn(h,u,p))}const c=[];return o.bufferView!==void 0?c.push(this.getDependency("bufferView",o.bufferView)):c.push(null),o.sparse!==void 0&&(c.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(c).then(function(u){const d=u[0],p=Ih[o.type],h=ao[o.componentType],g=h.BYTES_PER_ELEMENT,_=g*p,v=o.byteOffset||0,x=o.bufferView!==void 0?a.bufferViews[o.bufferView].byteStride:void 0,b=o.normalized===!0;let A,M;if(x&&x!==_){const y=Math.floor(v/x),O="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+y+":"+o.count;let I=n.cache.get(O);I||(A=new h(d,y*x,o.count*x/g),I=new Kb(A,x/g),n.cache.add(O,I)),M=new jp(I,p,v%x/g,b)}else d===null?A=new h(o.count*p):A=new h(d,v,o.count*p),M=new jn(A,p,b);if(o.sparse!==void 0){const y=Ih.SCALAR,O=ao[o.sparse.indices.componentType],I=o.sparse.indices.byteOffset||0,R=o.sparse.values.byteOffset||0,U=new O(u[1],I,o.sparse.count*y),N=new h(u[2],R,o.sparse.count*p);d!==null&&(M=new jn(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let D=0,T=U.length;D<T;D++){const L=U[D];if(M.setX(L,N[D*p]),p>=2&&M.setY(L,N[D*p+1]),p>=3&&M.setZ(L,N[D*p+2]),p>=4&&M.setW(L,N[D*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=b}return M})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let d=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(d=p)}return this.loadTextureImage(e,c,d)}loadTextureImage(e,n,a){const o=this,c=this.json,u=c.textures[e],d=c.images[n],p=(d.uri||d.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const h=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||d.name||"",g.name===""&&typeof d.uri=="string"&&d.uri.startsWith("data:image/")===!1&&(g.name=d.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=xx[v.magFilter]||Rn,g.minFilter=xx[v.minFilter]||Ia,g.wrapS=yx[v.wrapS]||oo,g.wrapT=yx[v.wrapT]||oo,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==An&&g.minFilter!==Rn,o.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=h,h}loadImageSource(e,n){const a=this,o=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=o.images[e],d=self.URL||self.webkitURL;let p=u.uri||"",h=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){h=!0;const v=new Blob([_],{type:u.mimeType});return p=d.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,x){let b=v;n.isImageBitmapLoader===!0&&(b=function(A){const M=new Ln(A);M.needsUpdate=!0,v(M)}),n.load(Tl.resolveURL(_,c.path),b,void 0,x)})}).then(function(_){return h===!0&&d.revokeObjectURL(p),ta(_,u),_.userData.mimeType=u.mimeType||Tw(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,o){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[mt.KHR_TEXTURE_TRANSFORM]){const d=a.extensions!==void 0?a.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(d){const p=c.associations.get(u);u=c.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(u,d),c.associations.set(u,p)}}return o!==void 0&&(u.colorSpace=o),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const o=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const d="PointsMaterial:"+a.uuid;let p=this.cache.get(d);p||(p=new $x,Xi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(d,p)),a=p}else if(e.isLine){const d="LineBasicMaterial:"+a.uuid;let p=this.cache.get(d);p||(p=new Jp,Xi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(d,p)),a=p}if(o||c||u){let d="ClonedMaterial:"+a.uuid+":";o&&(d+="derivative-tangents:"),c&&(d+="vertex-colors:"),u&&(d+="flat-shading:");let p=this.cache.get(d);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),o&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(d,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return tm}loadMaterial(e){const n=this,a=this.json,o=this.extensions,c=a.materials[e];let u;const d={},p=c.extensions||{},h=[];if(p[mt.KHR_MATERIALS_UNLIT]){const _=o[mt.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),h.push(_.extendParams(d,c,n))}else{const _=c.pbrMetallicRoughness||{};if(d.color=new nt(1,1,1),d.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;d.color.setRGB(v[0],v[1],v[2],yi),d.opacity=v[3]}_.baseColorTexture!==void 0&&h.push(n.assignTexture(d,"map",_.baseColorTexture,Fn)),d.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,d.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(h.push(n.assignTexture(d,"metalnessMap",_.metallicRoughnessTexture)),h.push(n.assignTexture(d,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,d)})))}c.doubleSided===!0&&(d.side=vi);const g=c.alphaMode||Bh.OPAQUE;if(g===Bh.BLEND?(d.transparent=!0,d.depthWrite=!1):(d.transparent=!1,g===Bh.MASK&&(d.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==ir&&(h.push(n.assignTexture(d,"normalMap",c.normalTexture)),d.normalScale=new Mt(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;d.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==ir&&(h.push(n.assignTexture(d,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(d.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==ir){const _=c.emissiveFactor;d.emissive=new nt().setRGB(_[0],_[1],_[2],yi)}return c.emissiveTexture!==void 0&&u!==ir&&h.push(n.assignTexture(d,"emissiveMap",c.emissiveTexture,Fn)),Promise.all(h).then(function(){const _=new u(d);return c.name&&(_.name=c.name),ta(_,c),n.associations.set(_,{materials:e}),c.extensions&&Js(o,_,c),_})}createUniqueName(e){const n=Vt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,o=this.primitiveCache;function c(d){return a[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(d,n).then(function(p){return Sx(p,d,n)})}const u=[];for(let d=0,p=e.length;d<p;d++){const h=e[d],g=Ew(h),_=o[g];if(_)u.push(_.promise);else{let v;h.extensions&&h.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?v=c(h):v=Sx(new ai,h,n),o[g]={primitive:h,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,o=this.extensions,c=a.meshes[e],u=c.primitives,d=[];for(let p=0,h=u.length;p<h;p++){const g=u[p].material===void 0?Sw(this.cache):this.getDependency("material",u[p].material);d.push(g)}return d.push(n.loadGeometries(u)),Promise.all(d).then(function(p){const h=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let x=0,b=g.length;x<b;x++){const A=g[x],M=u[x];let y;const O=h[x];if(M.mode===Ni.TRIANGLES||M.mode===Ni.TRIANGLE_STRIP||M.mode===Ni.TRIANGLE_FAN||M.mode===void 0)y=c.isSkinnedMesh===!0?new $b(A,O):new Kn(A,O),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),M.mode===Ni.TRIANGLE_STRIP?y.geometry=gx(y.geometry,Xx):M.mode===Ni.TRIANGLE_FAN&&(y.geometry=gx(y.geometry,Ep));else if(M.mode===Ni.LINES)y=new Jx(A,O);else if(M.mode===Ni.LINE_STRIP)y=new $p(A,O);else if(M.mode===Ni.LINE_LOOP)y=new rE(A,O);else if(M.mode===Ni.POINTS)y=new oE(A,O);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(y.geometry.morphAttributes).length>0&&bw(y,c),y.name=n.createUniqueName(c.name||"mesh_"+e),ta(y,c),M.extensions&&Js(o,y,M),n.assignFinalMaterial(y),_.push(y)}for(let x=0,b=_.length;x<b;x++)n.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return c.extensions&&Js(o,_[0],c),_[0];const v=new Ts;c.extensions&&Js(o,v,c),n.associations.set(v,{meshes:e});for(let x=0,b=_.length;x<b;x++)v.add(_[x]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],o=a[a.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Yn(Db.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):a.type==="orthographic"&&(n=new Gu(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),ta(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let o=0,c=n.joints.length;o<c;o++)a.push(this._loadNodeShallow(n.joints[o]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(o){const c=o.pop(),u=o,d=[],p=[];for(let h=0,g=u.length;h<g;h++){const _=u[h];if(_){d.push(_);const v=new ht;c!==null&&v.fromArray(c.array,h*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[h])}return new Zp(d,p)})}loadAnimation(e){const n=this.json,a=this,o=n.animations[e],c=o.name?o.name:"animation_"+e,u=[],d=[],p=[],h=[],g=[];for(let _=0,v=o.channels.length;_<v;_++){const x=o.channels[_],b=o.samplers[x.sampler],A=x.target,M=A.node,y=o.parameters!==void 0?o.parameters[b.input]:b.input,O=o.parameters!==void 0?o.parameters[b.output]:b.output;A.node!==void 0&&(u.push(this.getDependency("node",M)),d.push(this.getDependency("accessor",y)),p.push(this.getDependency("accessor",O)),h.push(b),g.push(A))}return Promise.all([Promise.all(u),Promise.all(d),Promise.all(p),Promise.all(h),Promise.all(g)]).then(function(_){const v=_[0],x=_[1],b=_[2],A=_[3],M=_[4],y=[];for(let I=0,R=v.length;I<R;I++){const U=v[I],N=x[I],D=b[I],T=A[I],L=M[I];if(U===void 0)continue;U.updateMatrix&&U.updateMatrix();const V=a._createAnimationTracks(U,N,D,T,L);if(V)for(let z=0;z<V.length;z++)y.push(V[z])}const O=new EE(c,void 0,y);return ta(O,o),O})}createNodeMesh(e){const n=this.json,a=this,o=n.nodes[e];return o.mesh===void 0?null:a.getDependency("mesh",o.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,o.mesh,c);return o.weights!==void 0&&u.traverse(function(d){if(d.isMesh)for(let p=0,h=o.weights.length;p<h;p++)d.morphTargetInfluences[p]=o.weights[p]}),u})}loadNode(e){const n=this.json,a=this,o=n.nodes[e],c=a._loadNodeShallow(e),u=[],d=o.children||[];for(let h=0,g=d.length;h<g;h++)u.push(a.getDependency("node",d[h]));const p=o.skin===void 0?Promise.resolve(null):a.getDependency("skin",o.skin);return Promise.all([c,Promise.all(u),p]).then(function(h){const g=h[0],_=h[1],v=h[2];v!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(v,Aw)});for(let x=0,b=_.length;x<b;x++)g.add(_[x]);if(g.userData.pivot!==void 0&&_.length>0){const x=g.userData.pivot,b=_[0];g.pivot=new J().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],b.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?o.createUniqueName(c.name):"",d=[],p=o._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return p&&d.push(p),c.camera!==void 0&&d.push(o.getDependency("camera",c.camera).then(function(h){return o._getNodeRef(o.cameraCache,c.camera,h)})),o._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){d.push(h)}),this.nodeCache[e]=Promise.all(d).then(function(h){let g;if(c.isBone===!0?g=new Qx:h.length>1?g=new Ts:h.length===1?g=h[0]:g=new sn,g!==h[0])for(let _=0,v=h.length;_<v;_++)g.add(h[_]);if(c.name&&(g.userData.name=c.name,g.name=u),ta(g,c),c.extensions&&Js(a,g,c),c.matrix!==void 0){const _=new ht;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!o.associations.has(g))o.associations.set(g,{});else if(c.mesh!==void 0&&o.meshCache.refs[c.mesh]>1){const _=o.associations.get(g);o.associations.set(g,{..._})}return o.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],o=this,c=new Ts;a.name&&(c.name=o.createUniqueName(a.name)),ta(c,a),a.extensions&&Js(n,c,a);const u=a.nodes||[],d=[];for(let p=0,h=u.length;p<h;p++)d.push(o.getDependency("node",u[p]));return Promise.all(d).then(function(p){for(let g=0,_=p.length;g<_;g++){const v=p[g];v.parent!==null?c.add(j2(v)):c.add(v)}const h=g=>{const _=new Map;for(const[v,x]of o.associations)(v instanceof Xi||v instanceof Ln)&&_.set(v,x);return g.traverse(v=>{const x=o.associations.get(v);x!=null&&_.set(v,x)}),_};return o.associations=h(c),c})}_createAnimationTracks(e,n,a,o,c){const u=[],d=e.name?e.name:e.uuid,p=[];function h(x){x.morphTargetInfluences&&p.push(x.name?x.name:x.uuid)}bs[c.path]===bs.weights?(h(e),e.isGroup&&e.children.forEach(h)):p.push(d);let g;switch(bs[c.path]){case bs.weights:g=Ll;break;case bs.rotation:g=Ul;break;case bs.translation:case bs.scale:g=Bu;break;default:switch(a.itemSize){case 1:g=Ll;break;case 2:case 3:default:g=Bu;break}break}const _=o.interpolation!==void 0?yw[o.interpolation]:Cl,v=this._getArrayFromAccessor(a);for(let x=0,b=p.length;x<b;x++){const A=new g(p[x]+"."+bs[c.path],n.array,v,_);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(A),u.push(A)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Up(n.constructor),o=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)o[c]=n[c]*a;n=o}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const o=this instanceof Ul?xw:gy;return new o(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ww(r,e,n){const a=e.attributes,o=new ca;if(a.POSITION!==void 0){const d=n.json.accessors[a.POSITION],p=d.min,h=d.max;if(p!==void 0&&h!==void 0){if(o.set(new J(p[0],p[1],p[2]),new J(h[0],h[1],h[2])),d.normalized){const g=Up(ao[d.componentType]);o.min.multiplyScalar(g),o.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const d=new J,p=new J;for(let h=0,g=c.length;h<g;h++){const _=c[h];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],x=v.min,b=v.max;if(x!==void 0&&b!==void 0){if(p.setX(Math.max(Math.abs(x[0]),Math.abs(b[0]))),p.setY(Math.max(Math.abs(x[1]),Math.abs(b[1]))),p.setZ(Math.max(Math.abs(x[2]),Math.abs(b[2]))),v.normalized){const A=Up(ao[v.componentType]);p.multiplyScalar(A)}d.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(d)}r.boundingBox=o;const u=new ua;o.getCenter(u.center),u.radius=o.min.distanceTo(o.max)/2,r.boundingSphere=u}function Sx(r,e,n){const a=e.attributes,o=[];function c(u,d){return n.getDependency("accessor",u).then(function(p){r.setAttribute(d,p)})}for(const u in a){const d=Lp[u]||u.toLowerCase();d in r.attributes||o.push(c(a[u],d))}if(e.indices!==void 0&&!r.index){const u=n.getDependency("accessor",e.indices).then(function(d){r.setIndex(d)});o.push(u)}return yt.workingColorSpace!==yi&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),ta(r,e),ww(r,e,n),Promise.all(o).then(function(){return e.targets!==void 0?Mw(r,e.targets,n):r})}const Cw=({uploadedFile:r,gesture:e,onModelLoaded:n,autoRotate:a,sensitivity:o})=>{const c=lt.useRef(null),u=lt.useRef(null),d=lt.useRef(null),p=lt.useRef(null),h=lt.useRef(null),g=lt.useRef(null),_=lt.useRef(null),v=lt.useRef(null),x=lt.useRef(0),b=lt.useRef(0),A=lt.useRef(1),M=lt.useRef(0),y=lt.useRef(0),O=lt.useRef(1),[I,R]=lt.useState(!1),[U,N]=lt.useState(null);lt.useEffect(()=>{if(!c.current||!u.current)return;const T=new Wb;T.background=new nt("#f8f9fa"),T.fog=new Yp("#f8f9fa",.15),d.current=T;const L=new Yn(45,c.current.clientWidth/c.current.clientHeight,.1,100);L.position.set(0,1.5,4.5),p.current=L;const V=new Y2({canvas:u.current,antialias:!0,alpha:!0});V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.setSize(c.current.clientWidth,c.current.clientHeight),V.shadowMap.enabled=!0,V.shadowMap.type=Rx,h.current=V;const z=new FE("#ffffff",.6);T.add(z);const K=new LE("#ffffff","#8d99ae",.4);K.position.set(0,20,0),T.add(K);const ce=new Cp("#ffffff",.8);ce.position.set(5,10,7),ce.castShadow=!0,ce.shadow.mapSize.width=1024,ce.shadow.mapSize.height=1024,ce.shadow.camera.near=.5,ce.shadow.camera.far=25,ce.shadow.camera.left=-3,ce.shadow.camera.right=3,ce.shadow.camera.top=3,ce.shadow.camera.bottom=-3,ce.shadow.bias=-5e-4,T.add(ce);const _e=new Cp("#e2e8f0",.4);_e.position.set(-5,3,-5),T.add(_e);const Z=new QE(20,40,"#cbd5e1","#f1f5f9");Z.position.y=-1,T.add(Z),_.current=Z;const F=new Pl(30,30),G=new cE({opacity:.1}),ee=new Kn(F,G);ee.rotation.x=-Math.PI/2,ee.position.y=-1,ee.receiveShadow=!0,T.add(ee);const pe=new Ts;T.add(pe),g.current=pe,D(pe);const be=new ResizeObserver(P=>{if(!P||P.length===0)return;const{width:j,height:Se}=P[0].contentRect;p.current&&h.current&&(p.current.aspect=j/Se,p.current.updateProjectionMatrix(),h.current.setSize(j,Se))});return be.observe(c.current),()=>{be.disconnect(),V.dispose(),T.clear()}},[]);const D=T=>{v.current&&T.remove(v.current);const L=new em(.6,.22,120,16),V=new Wi({color:"#4f46e5",metalness:.1,roughness:.1,transmission:.6,thickness:1.2,clearcoat:1,clearcoatRoughness:.1,side:vi}),z=new Kn(L,V);z.castShadow=!0,z.receiveShadow=!0,z.position.y=.2,T.add(z),v.current=z,x.current=0,b.current=0,A.current=1,M.current=0,y.current=0,O.current=1,n({name:"Default Torus Knot (Procedural)",size:"N/A",vertices:L.attributes.position.count,triangles:L.index?L.index.count/3:0})};return lt.useEffect(()=>{if(!r||!g.current)return;R(!0),N(null);const T=new K2,L=URL.createObjectURL(r);return T.load(L,V=>{const z=V.scene;let K=0,ce=0;z.traverse(P=>{if(P.isMesh){P.castShadow=!0,P.receiveShadow=!0,P.material&&(P.material.side=vi,P.material.shadowSide=vi);const j=P.geometry;j&&(K+=j.attributes.position.count,j.index?ce+=j.index.count/3:ce+=j.attributes.position.count/3)}});const _e=new ca().setFromObject(z),Z=new J;_e.getSize(Z);const F=new J;_e.getCenter(F),z.position.sub(F);const G=-Z.y/2;z.position.y-=G;const pe=1.8/(Math.max(Z.x,Z.y,Z.z)||1);z.scale.setScalar(pe),v.current&&g.current&&g.current.remove(v.current),g.current.add(z),v.current=z;const be=(r.size/(1024*1024)).toFixed(2)+" MB";n({name:r.name,size:be,vertices:K,triangles:Math.round(ce)}),x.current=0,b.current=0,A.current=1,M.current=0,y.current=0,O.current=1,R(!1),URL.revokeObjectURL(L)},void 0,V=>{console.error("Error loading GLTF model:",V),N("Failed to load 3D model. Make sure it is a valid GLB/GLTF file."),R(!1),URL.revokeObjectURL(L)}),()=>{URL.revokeObjectURL(L)}},[r]),lt.useEffect(()=>{const T=()=>{x.current=0,b.current=0,A.current=1,M.current=0,y.current=0,O.current=1};return window.addEventListener("reset-three-view",T),()=>{window.removeEventListener("reset-three-view",T)}},[]),lt.useEffect(()=>{if(!e||e.type==="none")return;const T=.015*o;switch(e.type){case"open":A.current=Math.min(2.5,A.current+T);break;case"fist":A.current=Math.max(.4,A.current-T);break;case"move_left":const L=Math.abs(e.movementX)*2.5*o;x.current-=Math.max(.01,L);break;case"move_right":const V=Math.abs(e.movementX)*2.5*o;x.current+=Math.max(.01,V);break}},[e,o]),lt.useEffect(()=>{let T;const L=()=>{const V=g.current,z=h.current,K=d.current,ce=p.current;V&&z&&K&&ce&&(a&&e.type==="none"&&(x.current+=.003),M.current+=(x.current-M.current)*.12,y.current+=(b.current-y.current)*.12,O.current+=(A.current-O.current)*.12,V.rotation.y=M.current,V.rotation.x=y.current,V.scale.setScalar(O.current),z.render(K,ce)),T=requestAnimationFrame(L)};return L(),()=>{cancelAnimationFrame(T)}},[a,e.type]),W.jsxs("div",{ref:c,className:"relative w-full h-full min-h-[450px] md:min-h-[600px] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-50 border border-slate-100",id:"three-canvas-container",children:[W.jsx("canvas",{ref:u,className:"absolute inset-0 block w-full h-full touch-none",id:"three-webgl-canvas"}),I&&W.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-sm z-10 transition-all duration-300",children:[W.jsxs("div",{className:"relative w-12 h-12",children:[W.jsx("div",{className:"absolute inset-0 border-2 border-slate-200 rounded-full"}),W.jsx("div",{className:"absolute inset-0 border-2 border-indigo-600 rounded-full border-t-transparent animate-spin"})]}),W.jsx("p",{className:"mt-4 text-xs font-mono text-slate-500 tracking-wider",children:"LOADING 3D MODEL..."})]}),U&&W.jsxs("div",{className:"absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl shadow-sm z-20 flex items-start gap-3 animate-fade-in",children:[W.jsx("div",{className:"flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-xs mt-0.5",children:"!"}),W.jsxs("div",{className:"flex-1",children:[W.jsx("p",{className:"text-sm font-medium",children:U}),W.jsx("button",{onClick:()=>N(null),className:"mt-2 text-xs font-semibold underline text-red-700 hover:text-red-900 focus:outline-none",children:"Dismiss"})]})]}),W.jsx("div",{className:"absolute top-4 left-4 font-mono text-[10px] text-slate-400 select-none z-0",children:"STUDIO ENVIRONMENT / LIGHT_GRID"})]})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Mu(r,e){const n=r.x-e.x,a=r.y-e.y,o=r.z!==void 0&&e.z!==void 0?r.z-e.z:0;return Math.sqrt(n*n+a*a+o*o)}function Nw(r,e,n=1){if(!r||r.length<21)return{type:"none",confidence:0,extendedFingers:0,movementX:0,rawX:.5,rawY:.5};const a=r[0],o=r[4],c=r[2],u=[{tip:8,pip:6,label:"Index"},{tip:12,pip:10,label:"Middle"},{tip:16,pip:14,label:"Ring"},{tip:20,pip:18,label:"Pinky"}];let d=0;u.forEach(A=>{const M=Mu(a,r[A.tip]),y=Mu(a,r[A.pip]);M>y*1.15&&d++});const p=Mu(a,o),h=Mu(a,c);p>h*1.1&&d++;let g="none";const _=r[9].x,v=r[9].y;let x=0;e!==null&&(x=_-e);const b=.008*n;return e!==null&&Math.abs(x)>b&&(x<-b?g="move_left":x>b&&(g="move_right")),g==="none"&&(d>=4?g="open":d<=1&&(g="fist")),{type:g,confidence:.9,extendedFingers:d,movementX:x,rawX:_,rawY:v}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lw=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),Mx=r=>{const e=Lw(r);return e.charAt(0).toUpperCase()+e.slice(1)},_y=(...r)=>r.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),Uw=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ow={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=lt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...d},p)=>lt.createElement("svg",{ref:p,...Ow,width:e,height:e,stroke:r,strokeWidth:a?Number(n)*24/Number(e):n,className:_y("lucide",o),...!c&&!Uw(d)&&{"aria-hidden":"true"},...d},[...u.map(([h,g])=>lt.createElement(h,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=(r,e)=>{const n=lt.forwardRef(({className:a,...o},c)=>lt.createElement(Pw,{ref:c,iconNode:e,className:_y(`lucide-${Dw(Mx(r))}`,`lucide-${r}`,a),...o}));return n.displayName=Mx(r),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Bw=dn("box",Iw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],zw=dn("camera",Fw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Gw=dn("circle-alert",Hw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],kw=dn("circle-question-mark",Vw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ww=dn("cpu",Xw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Yw=dn("disc",qw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],Kw=dn("hand",jw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Qw=dn("info",Zw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],$w=dn("layers",Jw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],tC=dn("pause",eC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],iC=dn("play",nC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],bx=dn("refresh-cw",aC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],vy=dn("rotate-ccw",sC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],oC=dn("rotate-cw",rC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],cC=dn("sliders-vertical",lC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ex=dn("sparkles",uC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Tx=dn("upload",fC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],hC=dn("video-off",dC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Ax=dn("video",pC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gC=dn("x",mC);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],vC=dn("zoom-in",_C);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],yC=dn("zoom-out",xC),SC=({onGestureDetected:r,cameraStatus:e,setCameraStatus:n,sensitivity:a})=>{const o=lt.useRef(null),c=lt.useRef(null),u=lt.useRef(null),d=lt.useRef(null),p=lt.useRef(null),[h,g]=lt.useState(null),_=()=>{if(d.current){try{d.current.stop()}catch(A){console.error("Error stopping MediaPipe Camera:",A)}d.current=null}if(p.current){try{p.current.close()}catch(A){console.error("Error closing MediaPipe Hands:",A)}p.current=null}if(o.current&&o.current.srcObject&&(o.current.srcObject.getTracks().forEach(M=>M.stop()),o.current.srcObject=null),c.current){const A=c.current.getContext("2d");A&&A.clearRect(0,0,c.current.width,c.current.height)}u.current=null,n("off")},v=async()=>{g(null),n("loading");const A=window.Hands,M=window.Camera;if(!A||!M){g("MediaPipe dependencies are still loading. Please wait a moment and try again."),n("error");return}try{const y=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});o.current&&(o.current.srcObject=y,o.current.play());const O=new A({locateFile:I=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${I}`});if(O.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.65,minTrackingConfidence:.65}),O.onResults(I=>{const R=c.current;if(!R)return;const U=R.getContext("2d");if(U)if(U.clearRect(0,0,R.width,R.height),I.multiHandLandmarks&&I.multiHandLandmarks.length>0){const N=I.multiHandLandmarks[0],D=Nw(N,u.current,a);u.current=N[9].x,r(D),x(U,N)}else r({type:"none",confidence:0,extendedFingers:0,movementX:0,rawX:.5,rawY:.5}),u.current=null}),p.current=O,o.current){const I=new M(o.current,{onFrame:async()=>{o.current&&p.current&&await p.current.send({image:o.current})},width:320,height:240});await I.start(),d.current=I,n("on")}}catch(y){console.error("Failed to initialize webcam hand tracking:",y);let O="Failed to access camera. Please make sure camera permissions are enabled in your browser.";y.name==="NotAllowedError"?O="Webcam permission denied. Please allow camera access in your browser settings.":y.name==="NotFoundError"&&(O="No webcam hardware detected on this device."),g(O),n("error"),_()}},x=(A,M)=>{const y=A.canvas.width,O=A.canvas.height,I=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];A.strokeStyle="rgba(99, 102, 241, 0.25)",A.lineWidth=6,A.lineCap="round",A.lineJoin="round",I.forEach(([R,U])=>{const N=M[R],D=M[U];N&&D&&(A.beginPath(),A.moveTo((1-N.x)*y,N.y*O),A.lineTo((1-D.x)*y,D.y*O),A.stroke())}),A.strokeStyle="#4f46e5",A.lineWidth=2.5,I.forEach(([R,U])=>{const N=M[R],D=M[U];N&&D&&(A.beginPath(),A.moveTo((1-N.x)*y,N.y*O),A.lineTo((1-D.x)*y,D.y*O),A.stroke())}),M.forEach((R,U)=>{const N=[4,8,12,16,20].includes(U);A.beginPath(),A.arc((1-R.x)*y,R.y*O,N?4.5:3,0,2*Math.PI),N?A.fillStyle="#6366f1":U===0?A.fillStyle="#1e1b4b":A.fillStyle="#818cf8",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=1,A.stroke()})};lt.useEffect(()=>()=>{_()},[]);const b=()=>{e==="on"?_():v()};return W.jsxs("div",{className:"flex flex-col gap-3",id:"camera-detector-panel",children:[W.jsxs("div",{className:"flex items-center justify-between",children:[W.jsxs("label",{className:"text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[W.jsx(zw,{size:14,className:"text-slate-400"})," WEBCAM TRACKER"]}),W.jsx("button",{onClick:b,disabled:e==="loading",className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${e==="on"?"bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100":e==="loading"?"bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-100 hover:shadow-md"}`,id:"camera-toggle-btn",children:e==="on"?W.jsxs(W.Fragment,{children:[W.jsx(hC,{size:13})," Close Camera"]}):e==="loading"?W.jsxs(W.Fragment,{children:[W.jsx(bx,{size:13,className:"animate-spin"})," Starting..."]}):W.jsxs(W.Fragment,{children:[W.jsx(Ax,{size:13})," Start Camera"]})})]}),W.jsxs("div",{className:`relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900 border transition-all duration-300 ${e==="on"?"border-indigo-200 shadow-inner":"border-slate-100 bg-slate-950"}`,id:"camera-frame-container",children:[W.jsx("video",{ref:o,className:"hidden",playsInline:!0,muted:!0,width:"320",height:"240"}),e==="on"?W.jsxs("div",{className:"w-full h-full relative",children:[W.jsx("video",{src:"",className:"w-full h-full object-cover scale-x-[-1]",style:{display:"none"}}),W.jsx("video",{ref:A=>{A&&o.current&&A.srcObject!==o.current.srcObject&&(A.srcObject=o.current.srcObject,A.play().catch(()=>{}))},className:"absolute inset-0 w-full h-full object-cover scale-x-[-1] opacity-75",playsInline:!0,muted:!0}),W.jsx("canvas",{ref:c,width:320,height:240,className:"absolute inset-0 w-full h-full z-10 block pointer-events-none"})]}):W.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-4 text-center",children:e==="loading"?W.jsxs("div",{className:"flex flex-col items-center gap-2",children:[W.jsx(bx,{size:24,className:"text-indigo-400 animate-spin"}),W.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Initializing hand tracking neural network..."})]}):e==="error"?W.jsxs("div",{className:"flex flex-col items-center gap-2 text-rose-400 max-w-xs",children:[W.jsx(Gw,{size:24,className:"text-rose-500"}),W.jsx("p",{className:"text-xs font-medium text-rose-300",children:h||"An error occurred"}),W.jsx("button",{onClick:v,className:"mt-2 text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white px-2.5 py-1 rounded",children:"Retry"})]}):W.jsxs("div",{className:"flex flex-col items-center gap-1.5 text-slate-400",children:[W.jsx(Ax,{size:24,className:"text-slate-600 mb-1"}),W.jsx("p",{className:"text-xs font-semibold",children:"Webcam Feed Off"}),W.jsx("p",{className:"text-[10px] text-slate-500 max-w-[200px]",children:'Click "Start Camera" to enable interactive hand gesture model control'})]})}),e==="on"&&W.jsxs("div",{className:"absolute top-3 right-3 bg-indigo-600/90 text-[9px] font-mono font-bold text-white px-1.5 py-0.5 rounded-full z-20 flex items-center gap-1",children:[W.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"ACTIVE TRACKING"]})]})]})},MC=({onFileSelect:r,selectedFile:e})=>{const n=lt.useRef(null),[a,o]=lt.useState(!1),c=_=>{if(_.target.files&&_.target.files.length>0){const v=_.target.files[0];v.name.endsWith(".glb")||v.name.endsWith(".gltf")?r(v):alert("Please select a valid .glb or .gltf file.")}},u=_=>{_.preventDefault(),o(!0)},d=()=>{o(!1)},p=_=>{if(_.preventDefault(),o(!1),_.dataTransfer.files&&_.dataTransfer.files.length>0){const v=_.dataTransfer.files[0];v.name.endsWith(".glb")||v.name.endsWith(".gltf")?r(v):alert("Please upload a valid .glb or .gltf file.")}},h=()=>{n.current&&!e&&n.current.click()},g=_=>{_.stopPropagation(),r(null),n.current&&(n.current.value="")};return W.jsxs("div",{className:"flex flex-col gap-2",id:"model-upload-section",children:[W.jsxs("label",{className:"text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[W.jsx(Tx,{size:14,className:"text-slate-400"})," Upload 3D Model"]}),W.jsxs("div",{onClick:h,onDragOver:u,onDragLeave:d,onDrop:p,className:`relative flex flex-col items-center justify-center p-5 rounded-xl border-2 border-dashed transition-all duration-200 text-center select-none ${e?"border-emerald-200 bg-emerald-50/20":a?"border-indigo-500 bg-indigo-50/30":"border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 cursor-pointer"}`,id:"upload-drag-area",children:[W.jsx("input",{ref:n,type:"file",accept:".glb,.gltf",onChange:c,className:"hidden",id:"glb-file-input"}),e?W.jsxs("div",{className:"flex items-center justify-between w-full gap-3",id:"uploaded-file-info",children:[W.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[W.jsx("div",{className:"p-2 bg-emerald-100 text-emerald-600 rounded-lg",children:W.jsx(Bw,{size:18})}),W.jsxs("div",{className:"text-left min-w-0",children:[W.jsx("p",{className:"text-xs font-semibold text-slate-700 truncate max-w-[150px] md:max-w-[180px]",children:e.name}),W.jsxs("p",{className:"text-[10px] text-slate-400 font-mono",children:[(e.size/(1024*1024)).toFixed(2)," MB"]})]})]}),W.jsx("button",{onClick:g,className:"p-1.5 hover:bg-slate-200 text-slate-400 hover:text-slate-600 rounded-lg transition-all cursor-pointer",title:"Reset to default model",id:"clear-model-btn",children:W.jsx(gC,{size:15})})]}):W.jsxs("div",{className:"flex flex-col items-center py-2",children:[W.jsx(Tx,{size:24,className:`mb-2 transition-transform duration-300 ${a?"translate-y-[-4px] text-indigo-500":"text-slate-400"}`}),W.jsxs("p",{className:"text-xs font-semibold text-slate-600",children:["Drag & drop GLB file or ",W.jsx("span",{className:"text-indigo-600 underline decoration-indigo-200",children:"browse"})]}),W.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:"Supports GLB or GLTF format up to 50MB"})]})]})]})},bC=({currentGesture:r})=>{const e=[{type:"open",icon:W.jsx(vC,{size:16,className:"text-indigo-600"}),title:"张开手指 (Spread)",description:"放大模型 (Scale Up)",symbol:"🖐️"},{type:"fist",icon:W.jsx(yC,{size:16,className:"text-amber-600"}),title:"紧握拳头 (Fist)",description:"缩小模型 (Scale Down)",symbol:"✊"},{type:"move_left",icon:W.jsx(vy,{size:16,className:"text-sky-600"}),title:"手往左移动 (Left)",description:"左旋转模型 (Rotate Left)",symbol:"⬅️"},{type:"move_right",icon:W.jsx(oC,{size:16,className:"text-sky-600"}),title:"手往右移动 (Right)",description:"右旋转模型 (Rotate Right)",symbol:"➡️"}];return W.jsxs("div",{className:"flex flex-col gap-2.5",id:"gesture-guide-section",children:[W.jsxs("label",{className:"text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[W.jsx(Kw,{size:14,className:"text-slate-400"})," Gesture Control Guide"]}),W.jsx("div",{className:"grid grid-cols-1 gap-2",id:"gesture-guide-list",children:e.map(n=>{const a=r===n.type;return W.jsxs("div",{className:`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ${a?"bg-indigo-50 border-indigo-200 shadow-sm scale-[1.01]":"bg-white border-slate-100 hover:border-slate-200"}`,id:`guide-item-${n.type}`,children:[W.jsxs("div",{className:"flex items-center gap-3",children:[W.jsx("div",{className:`p-2 rounded-lg transition-colors ${a?"bg-indigo-100/80 text-indigo-700":"bg-slate-50 text-slate-500"}`,children:n.icon}),W.jsxs("div",{children:[W.jsx("p",{className:`text-xs font-semibold ${a?"text-indigo-900":"text-slate-700"}`,children:n.title}),W.jsx("p",{className:`text-[10px] ${a?"text-indigo-600/90 font-medium":"text-slate-400"}`,children:n.description})]})]}),W.jsxs("div",{className:"flex items-center gap-2",children:[a&&W.jsx("span",{className:"text-[10px] bg-indigo-600 text-white font-mono font-bold px-1.5 py-0.5 rounded-full animate-pulse",children:"ACTIVE"}),W.jsx("span",{className:"text-base select-none",children:n.symbol})]})]},n.type)})})]})},EC=({info:r})=>r?W.jsxs("div",{className:"flex flex-col gap-2",id:"model-stats-section",children:[W.jsxs("label",{className:"text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[W.jsx(Qw,{size:14,className:"text-slate-400"})," Model Statistics"]}),W.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-slate-50 border border-slate-100 p-3.5 rounded-xl",id:"model-stats-grid",children:[W.jsxs("div",{className:"col-span-2 flex flex-col border-b border-slate-100 pb-2 mb-1",children:[W.jsx("span",{className:"text-[10px] text-slate-400 font-mono uppercase tracking-wider",children:"Loaded Model"}),W.jsx("span",{className:"text-xs font-bold text-slate-800 truncate",title:r.name,children:r.name})]}),W.jsxs("div",{className:"flex flex-col gap-0.5",children:[W.jsxs("div",{className:"flex items-center gap-1 text-[10px] font-medium text-slate-400",children:[W.jsx(Ww,{size:11}),W.jsx("span",{children:"Vertices"})]}),W.jsx("span",{className:"text-xs font-bold text-slate-700 font-mono",children:r.vertices?r.vertices.toLocaleString():"N/A"})]}),W.jsxs("div",{className:"flex flex-col gap-0.5",children:[W.jsxs("div",{className:"flex items-center gap-1 text-[10px] font-medium text-slate-400",children:[W.jsx($w,{size:11}),W.jsx("span",{children:"Triangles"})]}),W.jsx("span",{className:"text-xs font-bold text-slate-700 font-mono",children:r.triangles?r.triangles.toLocaleString():"N/A"})]}),W.jsxs("div",{className:"flex flex-col gap-0.5 mt-1.5",children:[W.jsxs("div",{className:"flex items-center gap-1 text-[10px] font-medium text-slate-400",children:[W.jsx(Yw,{size:11}),W.jsx("span",{children:"File Size"})]}),W.jsx("span",{className:"text-xs font-bold text-slate-700 font-mono",children:r.size})]}),W.jsxs("div",{className:"flex flex-col gap-0.5 mt-1.5",children:[W.jsxs("div",{className:"flex items-center gap-1 text-[10px] font-medium text-slate-400",children:[W.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-500"}),W.jsx("span",{children:"Status"})]}),W.jsx("span",{className:"text-xs font-semibold text-indigo-600",children:"Ready"})]})]})]}):null;function TC(){const[r,e]=lt.useState(null),[n,a]=lt.useState(null),[o,c]=lt.useState({type:"none",confidence:0,extendedFingers:0,movementX:0,rawX:.5,rawY:.5}),[u,d]=lt.useState("off"),[p,h]=lt.useState(!0),[g,_]=lt.useState(1.2),[v,x]=lt.useState(!0),b=y=>{c(y)},A=y=>{e(y),y||a(null)},M=()=>{if(document.getElementById("three-canvas-container"))if(r){const O=new File([r],r.name,{type:r.type});e(O)}else{e(null);const O=new CustomEvent("reset-three-view");window.dispatchEvent(O)}};return W.jsxs("div",{className:"min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans",id:"app-root",children:[W.jsx("header",{className:"bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-40 shadow-sm shadow-slate-100/40",id:"app-header",children:W.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[W.jsxs("div",{className:"flex items-center gap-3",children:[W.jsx("div",{className:"p-2 bg-indigo-50 text-indigo-600 rounded-xl",children:W.jsx(Ex,{size:20,className:"animate-pulse"})}),W.jsxs("div",{children:[W.jsxs("h1",{className:"text-base font-bold text-slate-900 tracking-tight flex items-center gap-2",children:["3D Model Gesture Viewer",W.jsx("span",{className:"text-[10px] font-medium bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-mono uppercase",children:"Interactive Space"})]}),W.jsx("p",{className:"text-xs text-slate-400",children:"Webcam-based Hand Tracking & 3D GLB/GLTF Rendering"})]})]}),W.jsxs("div",{className:"flex items-center gap-3",id:"header-controls",children:[W.jsxs("button",{onClick:()=>x(!v),className:`p-1.5 rounded-lg border text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-semibold ${v?"bg-indigo-50/50 border-indigo-100 text-indigo-600 hover:text-indigo-700":"border-slate-200"}`,title:"Show interactive helper",id:"help-toggle-btn",children:[W.jsx(kw,{size:15}),W.jsx("span",{children:v?"Hide Help":"Show Help"})]}),W.jsxs("div",{className:"flex items-center gap-4 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-100 text-xs font-mono",children:[W.jsxs("div",{className:"flex items-center gap-1.5",children:[W.jsx("span",{className:`w-2 h-2 rounded-full ${u==="on"?"bg-emerald-500 animate-pulse":"bg-slate-300"}`}),W.jsx("span",{className:"text-slate-500 text-[10px] uppercase",children:"TRACKER"})]}),W.jsx("div",{className:"w-[1px] h-3 bg-slate-200"}),W.jsxs("div",{className:"flex items-center gap-1.5",children:[W.jsx("span",{className:`w-2 h-2 rounded-full ${r?"bg-indigo-500":"bg-amber-500"}`}),W.jsx("span",{className:"text-slate-500 text-[10px] uppercase",children:r?"CUSTOM MODEL":"DEFAULT OBJ"})]})]})]})]})}),W.jsxs("main",{className:"flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6",id:"app-main",children:[v&&W.jsxs("div",{className:"lg:col-span-12 bg-indigo-900 text-indigo-100 p-5 rounded-2xl shadow-xl shadow-indigo-950/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fade-in",id:"welcome-banner",children:[W.jsxs("div",{className:"flex gap-4",children:[W.jsx("div",{className:"p-3 bg-indigo-800/80 rounded-xl text-indigo-300 flex-shrink-0 self-start md:self-center",children:W.jsx(Ex,{size:24})}),W.jsxs("div",{children:[W.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"欢迎体验 3D 手势模型展示器！"}),W.jsx("p",{className:"text-xs text-indigo-200 max-w-3xl leading-relaxed",children:"本系统将人工智能手势算法带到您的浏览器中。无需佩戴设备，开启摄像头，即可通过纯手势对 GLB 模型进行全方位交互。 张开五指放大，握拳缩小，左右移动手部即可进行平滑旋转。"})]})]}),W.jsx("button",{onClick:()=>x(!1),className:"text-xs font-bold bg-indigo-800 hover:bg-indigo-700 active:bg-indigo-950 text-indigo-100 border border-indigo-700/50 px-4 py-2 rounded-xl transition-all flex-shrink-0 cursor-pointer self-stretch md:self-auto text-center",id:"close-welcome-btn",children:"开始控制"})]}),W.jsxs("section",{className:"lg:col-span-4 flex flex-col gap-6",id:"left-sidebar",children:[W.jsxs("div",{className:"bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-100/50 flex flex-col gap-5",children:[W.jsx(MC,{onFileSelect:A,selectedFile:r}),W.jsx(EC,{info:n})]}),W.jsx("div",{className:"bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-100/50",children:W.jsx(SC,{onGestureDetected:b,cameraStatus:u,setCameraStatus:d,sensitivity:g})}),W.jsx("div",{className:"bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-100/50",children:W.jsx(bC,{currentGesture:o.type})})]}),W.jsxs("section",{className:"lg:col-span-8 flex flex-col gap-4",id:"right-viewport",children:[W.jsxs("div",{className:"relative flex-1 flex flex-col min-h-[450px] md:min-h-[600px] bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 overflow-hidden",id:"canvas-container-wrapper",children:[W.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-center justify-between z-30 pointer-events-none",id:"canvas-overlay-top",children:[W.jsxs("div",{className:"bg-white/95 backdrop-blur-md border border-slate-100 px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-2.5 pointer-events-auto",children:[W.jsx("span",{className:"flex h-2.5 w-2.5 relative",children:o.type!=="none"?W.jsxs(W.Fragment,{children:[W.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"}),W.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"})]}):W.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-300"})}),W.jsx("span",{className:"text-xs font-semibold text-slate-700",children:"当前手势:"}),W.jsxs("span",{className:"text-xs font-bold text-indigo-600 font-mono",children:[o.type==="open"&&"🖐️ 张开 (放大)",o.type==="fist"&&"✊ 握拳 (缩小)",o.type==="move_left"&&"⬅️ 向左移动 (左旋转)",o.type==="move_right"&&"➡️ 向右移动 (右旋转)",o.type==="none"&&"无 (静止)"]})]}),W.jsx("div",{className:"flex items-center gap-2 pointer-events-auto",children:W.jsxs("button",{onClick:M,className:"bg-white/95 backdrop-blur-md border border-slate-100 p-2.5 rounded-xl shadow-sm hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer",title:"Reset viewport camera position and model scale",id:"reset-view-btn",children:[W.jsx(vy,{size:14}),W.jsx("span",{children:"重置视角"})]})})]}),W.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-center justify-between gap-3 z-30 pointer-events-none",id:"canvas-overlay-bottom",children:[W.jsxs("button",{onClick:()=>h(!p),className:`pointer-events-auto flex items-center gap-2 px-3.5 py-2 rounded-xl shadow-sm backdrop-blur-md border transition-all duration-200 text-xs font-semibold cursor-pointer ${p?"bg-indigo-600 text-white border-indigo-500":"bg-white/95 text-slate-600 border-slate-100 hover:bg-slate-50"}`,id:"auto-rotate-toggle",children:[p?W.jsx(tC,{size:13}):W.jsx(iC,{size:13}),W.jsx("span",{children:p?"停止自动旋转":"开启自动旋转"})]}),W.jsxs("div",{className:"pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-100 p-3 rounded-xl shadow-sm flex items-center gap-3.5 max-w-sm",id:"sensitivity-bubble",children:[W.jsxs("div",{className:"flex items-center gap-1.5 text-slate-500",children:[W.jsx(cC,{size:13}),W.jsx("span",{className:"text-[10px] font-bold font-mono uppercase tracking-wider",children:"手势灵敏度"})]}),W.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.1",value:g,onChange:y=>_(parseFloat(y.target.value)),className:"w-24 md:w-32 accent-indigo-600 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer",id:"sensitivity-slider"}),W.jsxs("span",{className:"text-xs font-bold text-indigo-600 font-mono w-6",children:[g.toFixed(1),"x"]})]})]}),W.jsx(Cw,{uploadedFile:r,gesture:o,onModelLoaded:a,autoRotate:p,sensitivity:g})]}),W.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",id:"canvas-footer-hints",children:[W.jsxs("div",{className:"bg-white border border-slate-100 p-4 rounded-xl flex items-start gap-3",children:[W.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"}),W.jsxs("div",{children:[W.jsx("h4",{className:"text-xs font-bold text-slate-700 mb-0.5",children:"自适应渲染引擎"}),W.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"系统会自动对任何上传的 3D 模型进行重心定位、自动比例缩放，并生成平滑光影，保证模型始终呈现在视口中心。"})]})]}),W.jsxs("div",{className:"bg-white border border-slate-100 p-4 rounded-xl flex items-start gap-3",children:[W.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"}),W.jsxs("div",{children:[W.jsx("h4",{className:"text-xs font-bold text-slate-700 mb-0.5",children:"隐私与性能保证"}),W.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"所有摄像头计算与 3D 渲染均在您的浏览器本地进行，数据不会上传到任何服务器。安全隐私，超低延迟。"})]})]})]})]})]}),W.jsx("footer",{className:"bg-white border-t border-slate-100 py-6 px-6 text-center mt-12",id:"app-footer",children:W.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400",children:[W.jsx("p",{children:"© 2026 Minimal 3D Model Gesture Studio. Built for exceptional interactivity."}),W.jsxs("div",{className:"flex gap-4",children:[W.jsx("span",{children:"Powered by MediaPipe Hands"}),W.jsx("span",{children:"•"}),W.jsx("span",{children:"Three.js WebGL"})]})]})})]})}NM.createRoot(document.getElementById("root")).render(W.jsx(lt.StrictMode,{children:W.jsx(TC,{})}));
