(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Ed={exports:{}},Fa={},wd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function RT(){if(Ng)return Ce;Ng=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,q={};function b(V,Q,fe){this.props=V,this.context=Q,this.refs=q,this.updater=fe||P}b.prototype.isReactComponent={},b.prototype.setState=function(V,Q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Q,"setState")},b.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function H(){}H.prototype=b.prototype;function ne(V,Q,fe){this.props=V,this.context=Q,this.refs=q,this.updater=fe||P}var Z=ne.prototype=new H;Z.constructor=ne,L(Z,b.prototype),Z.isPureReactComponent=!0;var de=Array.isArray,Se=Object.prototype.hasOwnProperty,Te={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(V,Q,fe){var Ae,Re={},De=null,be=null;if(Q!=null)for(Ae in Q.ref!==void 0&&(be=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)Se.call(Q,Ae)&&!x.hasOwnProperty(Ae)&&(Re[Ae]=Q[Ae]);var Fe=arguments.length-2;if(Fe===1)Re.children=fe;else if(1<Fe){for(var $e=Array(Fe),_t=0;_t<Fe;_t++)$e[_t]=arguments[_t+2];Re.children=$e}if(V&&V.defaultProps)for(Ae in Fe=V.defaultProps,Fe)Re[Ae]===void 0&&(Re[Ae]=Fe[Ae]);return{$$typeof:n,type:V,key:De,ref:be,props:Re,_owner:Te.current}}function R(V,Q){return{$$typeof:n,type:V.type,key:Q,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var Q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(fe){return Q[fe]})}var M=/\/+/g;function C(V,Q){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):Q.toString(36)}function nt(V,Q,fe,Ae,Re){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(De){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case n:case e:be=!0}}if(be)return be=V,Re=Re(be),V=Ae===""?"."+C(be,0):Ae,de(Re)?(fe="",V!=null&&(fe=V.replace(M,"$&/")+"/"),nt(Re,Q,fe,"",function(_t){return _t})):Re!=null&&(N(Re)&&(Re=R(Re,fe+(!Re.key||be&&be.key===Re.key?"":(""+Re.key).replace(M,"$&/")+"/")+V)),Q.push(Re)),1;if(be=0,Ae=Ae===""?".":Ae+":",de(V))for(var Fe=0;Fe<V.length;Fe++){De=V[Fe];var $e=Ae+C(De,Fe);be+=nt(De,Q,fe,$e,Re)}else if($e=I(V),typeof $e=="function")for(V=$e.call(V),Fe=0;!(De=V.next()).done;)De=De.value,$e=Ae+C(De,Fe++),be+=nt(De,Q,fe,$e,Re);else if(De==="object")throw Q=String(V),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return be}function xt(V,Q,fe){if(V==null)return V;var Ae=[],Re=0;return nt(V,Ae,"","",function(De){return Q.call(fe,De,Re++)}),Ae}function Dt(V){if(V._status===-1){var Q=V._result;Q=Q(),Q.then(function(fe){(V._status===0||V._status===-1)&&(V._status=1,V._result=fe)},function(fe){(V._status===0||V._status===-1)&&(V._status=2,V._result=fe)}),V._status===-1&&(V._status=0,V._result=Q)}if(V._status===1)return V._result.default;throw V._result}var ze={current:null},re={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:re,ReactCurrentOwner:Te};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:xt,forEach:function(V,Q,fe){xt(V,function(){Q.apply(this,arguments)},fe)},count:function(V){var Q=0;return xt(V,function(){Q++}),Q},toArray:function(V){return xt(V,function(Q){return Q})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=b,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ne,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=se,Ce.cloneElement=function(V,Q,fe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=L({},V.props),Re=V.key,De=V.ref,be=V._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,be=Te.current),Q.key!==void 0&&(Re=""+Q.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for($e in Q)Se.call(Q,$e)&&!x.hasOwnProperty($e)&&(Ae[$e]=Q[$e]===void 0&&Fe!==void 0?Fe[$e]:Q[$e])}var $e=arguments.length-2;if($e===1)Ae.children=fe;else if(1<$e){Fe=Array($e);for(var _t=0;_t<$e;_t++)Fe[_t]=arguments[_t+2];Ae.children=Fe}return{$$typeof:n,type:V.type,key:Re,ref:De,props:Ae,_owner:be}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ce.createElement=S,Ce.createFactory=function(V){var Q=S.bind(null,V);return Q.type=V,Q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:d,render:V}},Ce.isValidElement=N,Ce.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Dt}},Ce.memo=function(V,Q){return{$$typeof:y,type:V,compare:Q===void 0?null:Q}},Ce.startTransition=function(V){var Q=re.transition;re.transition={};try{V()}finally{re.transition=Q}},Ce.unstable_act=se,Ce.useCallback=function(V,Q){return ze.current.useCallback(V,Q)},Ce.useContext=function(V){return ze.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return ze.current.useDeferredValue(V)},Ce.useEffect=function(V,Q){return ze.current.useEffect(V,Q)},Ce.useId=function(){return ze.current.useId()},Ce.useImperativeHandle=function(V,Q,fe){return ze.current.useImperativeHandle(V,Q,fe)},Ce.useInsertionEffect=function(V,Q){return ze.current.useInsertionEffect(V,Q)},Ce.useLayoutEffect=function(V,Q){return ze.current.useLayoutEffect(V,Q)},Ce.useMemo=function(V,Q){return ze.current.useMemo(V,Q)},Ce.useReducer=function(V,Q,fe){return ze.current.useReducer(V,Q,fe)},Ce.useRef=function(V){return ze.current.useRef(V)},Ce.useState=function(V){return ze.current.useState(V)},Ce.useSyncExternalStore=function(V,Q,fe){return ze.current.useSyncExternalStore(V,Q,fe)},Ce.useTransition=function(){return ze.current.useTransition()},Ce.version="18.3.1",Ce}var xg;function mf(){return xg||(xg=1,wd.exports=RT()),wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function CT(){if(Dg)return Fa;Dg=1;var n=mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,y){var E,T={},I=null,P=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(P=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(d&&d.defaultProps)for(E in p=d.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:d,key:I,ref:P,props:T,_owner:o.current}}return Fa.Fragment=t,Fa.jsx=h,Fa.jsxs=h,Fa}var Og;function PT(){return Og||(Og=1,Ed.exports=CT()),Ed.exports}var W=PT(),$=mf(),Fu={},Td={exports:{}},Zt={},Id={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function kT(){return Lg||(Lg=1,function(n){function e(re,me){var se=re.length;re.push(me);e:for(;0<se;){var V=se-1>>>1,Q=re[V];if(0<o(Q,me))re[V]=me,re[se]=Q,se=V;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],se=re.pop();if(se!==me){re[0]=se;e:for(var V=0,Q=re.length,fe=Q>>>1;V<fe;){var Ae=2*(V+1)-1,Re=re[Ae],De=Ae+1,be=re[De];if(0>o(Re,se))De<Q&&0>o(be,Re)?(re[V]=be,re[De]=se,V=De):(re[V]=Re,re[Ae]=se,V=Ae);else if(De<Q&&0>o(be,se))re[V]=be,re[De]=se,V=De;else break e}}return me}function o(re,me){var se=re.sortIndex-me.sortIndex;return se!==0?se:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();n.unstable_now=function(){return h.now()-d}}var p=[],y=[],E=1,T=null,I=3,P=!1,L=!1,q=!1,b=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function de(re){if(q=!1,Z(re),!L)if(t(p)!==null)L=!0,Dt(Se);else{var me=t(y);me!==null&&ze(de,me.startTime-re)}}function Se(re,me){L=!1,q&&(q=!1,H(S),S=-1),P=!0;var se=I;try{for(Z(me),T=t(p);T!==null&&(!(T.expirationTime>me)||re&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var Q=V(T.expirationTime<=me);me=n.unstable_now(),typeof Q=="function"?T.callback=Q:T===t(p)&&i(p),Z(me)}else i(p);T=t(p)}if(T!==null)var fe=!0;else{var Ae=t(y);Ae!==null&&ze(de,Ae.startTime-me),fe=!1}return fe}finally{T=null,I=se,P=!1}}var Te=!1,x=null,S=-1,R=5,N=-1;function O(){return!(n.unstable_now()-N<R)}function M(){if(x!==null){var re=n.unstable_now();N=re;var me=!0;try{me=x(!0,re)}finally{me?C():(Te=!1,x=null)}}else Te=!1}var C;if(typeof ne=="function")C=function(){ne(M)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,xt=nt.port2;nt.port1.onmessage=M,C=function(){xt.postMessage(null)}}else C=function(){b(M,0)};function Dt(re){x=re,Te||(Te=!0,C())}function ze(re,me){S=b(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){L||P||(L=!0,Dt(Se))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var se=I;I=me;try{return re()}finally{I=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var se=I;I=re;try{return me()}finally{I=se}},n.unstable_scheduleCallback=function(re,me,se){var V=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=se+Q,re={id:E++,callback:me,priorityLevel:re,startTime:se,expirationTime:Q,sortIndex:-1},se>V?(re.sortIndex=se,e(y,re),t(p)===null&&re===t(y)&&(q?(H(S),S=-1):q=!0,ze(de,se-V))):(re.sortIndex=Q,e(p,re),L||P||(L=!0,Dt(Se))),re},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(re){var me=I;return function(){var se=I;I=me;try{return re.apply(this,arguments)}finally{I=se}}}}(Sd)),Sd}var Vg;function NT(){return Vg||(Vg=1,Id.exports=kT()),Id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function xT(){if(Mg)return Zt;Mg=1;var n=mf(),e=NT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function P(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function L(r,s,a,c){if(s===null||typeof s>"u"||P(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,c,f,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){b[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];b[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){b[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){b[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){b[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){b[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){b[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){b[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){b[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function ne(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,ne);b[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,ne);b[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,ne);b[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){b[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),b.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){b[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function Z(r,s,a,c){var f=b.hasOwnProperty(s)?b[s]:null;(f!==null?f.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(L(s,a,f,c)&&(a=null),c||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var de=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),Te=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,V;function Q(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var fe=!1;function Ae(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){c=z}r.call(s.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=c.stack.split(`
`),v=f.length-1,A=g.length-1;1<=v&&0<=A&&f[v]!==g[A];)A--;for(;1<=v&&0<=A;v--,A--)if(f[v]!==g[A]){if(v!==1||A!==1)do if(v--,A--,0>A||f[v]!==g[A]){var k=`
`+f[v].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=v&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function Re(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case Te:return"Portal";case R:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case nt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case xt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Dt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function be(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function _t(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function pr(r){r._valueTracker||(r._valueTracker=_t(r))}function As(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Kr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function bi(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Rs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function qo(r,s){s=s.checked,s!=null&&Z(r,"checked",s,!1)}function Wo(r,s){qo(r,s);var a=Fe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Cs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Cs(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Il(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Cs(r,s,a){(s!=="number"||Kr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var mr=Array.isArray;function gr(r,s,a,c){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Ho(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ps(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(mr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function ks(r,s){var a=Fe(s.value),c=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Ko(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ht(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ht(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,Go=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Gr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ui=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(r){Ui.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Fi[s]=Fi[r]})});function Qo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Fi.hasOwnProperty(r)&&Fi[r]?(""+s).trim():s+"px"}function Yo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Qo(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var Jo=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(r,s){if(s){if(Jo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Zo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function Ns(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var xs=null,fn=null,Gn=null;function Ds(r){if(r=Ia(r)){if(typeof xs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Zl(s),xs(r.stateNode,r.type,s))}}function Qn(r){fn?Gn?Gn.push(r):Gn=[r]:fn=r}function ea(){if(fn){var r=fn,s=Gn;if(Gn=fn=null,Ds(r),s)for(r=0;r<s.length;r++)Ds(s[r])}}function zi(r,s){return r(s)}function ta(){}var _r=!1;function na(r,s,a){if(_r)return r(s,a);_r=!0;try{return zi(r,s,a)}finally{_r=!1,(fn!==null||Gn!==null)&&(ta(),ea())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Os=!1;if(d)try{var An={};Object.defineProperty(An,"passive",{get:function(){Os=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Os=!1}function Bi(r,s,a,c,f,g,v,A,k){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(J){this.onError(J)}}var $i=!1,Ls=null,Rn=!1,ra=null,Gc={onError:function(r){$i=!0,Ls=r}};function Vs(r,s,a,c,f,g,v,A,k){$i=!1,Ls=null,Bi.apply(Gc,arguments)}function Sl(r,s,a,c,f,g,v,A,k){if(Vs.apply(this,arguments),$i){if($i){var z=Ls;$i=!1,Ls=null}else throw Error(t(198));Rn||(Rn=!0,ra=z)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function qi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Pn(r){if(Cn(r)!==r)throw Error(t(188))}function Al(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Pn(f),r;if(g===c)return Pn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var v=!1,A=f.child;A;){if(A===a){v=!0,a=f,c=g;break}if(A===c){v=!0,c=f,a=g;break}A=A.sibling}if(!v){for(A=g.child;A;){if(A===a){v=!0,a=g,c=f;break}if(A===c){v=!0,c=g,a=f;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ia(r){return r=Al(r),r!==null?Ms(r):null}function Ms(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ms(r);if(s!==null)return s;r=r.sibling}return null}var bs=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,Rl=e.unstable_shouldYield,Qc=e.unstable_requestPaint,qe=e.unstable_now,Cl=e.unstable_getCurrentPriorityLevel,Wi=e.unstable_ImmediatePriority,Qr=e.unstable_UserBlockingPriority,pn=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Pl=e.unstable_IdlePriority,Hi=null,rn=null;function kl(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Hi,r,void 0,(r.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:xl,aa=Math.log,Nl=Math.LN2;function xl(r){return r>>>=0,r===0?32:31-(aa(r)/Nl|0)|0}var Fs=64,Us=4194304;function Yr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ki(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var A=v&~f;A!==0?c=Yr(A):(g&=v,g!==0&&(c=Yr(g)))}else v=a&~f,v!==0?c=Yr(v):g!==0&&(c=Yr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&f)&&(f=c&-c,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-zt(s),f=1<<a,c|=r[a],s&=~f;return c}function Yc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-zt(g),A=1<<v,k=f[v];k===-1?(!(A&a)||A&c)&&(f[v]=Yc(A,s)):k<=s&&(r.expiredLanes|=A),g&=~A}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Gi(){var r=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),r}function Jr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Xr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-zt(s),r[s]=a}function Be(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-zt(a),g=1<<f;s[f]=0,c[f]=-1,r[f]=-1,a&=~g}}function Zr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-zt(a),f=1<<c;f&s|r[c]&s&&(r[c]|=s),a&=~f}}var Ne=0;function ei(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Dl,js,Ol,Ll,Vl,la=!1,Yn=[],St=null,kn=null,Nn=null,ti=new Map,mn=new Map,Jn=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ml(r,s){switch(r){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ti.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(s.pointerId)}}function Ht(r,s,a,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ia(s),s!==null&&js(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Xc(r,s,a,c,f){switch(s){case"focusin":return St=Ht(St,r,s,a,c,f),!0;case"dragenter":return kn=Ht(kn,r,s,a,c,f),!0;case"mouseover":return Nn=Ht(Nn,r,s,a,c,f),!0;case"pointerover":var g=f.pointerId;return ti.set(g,Ht(ti.get(g)||null,r,s,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,mn.set(g,Ht(mn.get(g)||null,r,s,a,c,f)),!0}return!1}function bl(r){var s=Zi(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=qi(a),s!==null){r.blockedOn=s,Vl(r.priority,function(){Ol(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=zs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);ji=c,a.target.dispatchEvent(c),ji=null}else return s=Ia(a),s!==null&&js(s),r.blockedOn=a,!1;s.shift()}return!0}function Qi(r,s,a){Er(r)&&a.delete(s)}function Fl(){la=!1,St!==null&&Er(St)&&(St=null),kn!==null&&Er(kn)&&(kn=null),Nn!==null&&Er(Nn)&&(Nn=null),ti.forEach(Qi),mn.forEach(Qi)}function xn(r,s){r.blockedOn===s&&(r.blockedOn=null,la||(la=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fl)))}function Dn(r){function s(f){return xn(f,r)}if(0<Yn.length){xn(Yn[0],r);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(St!==null&&xn(St,r),kn!==null&&xn(kn,r),Nn!==null&&xn(Nn,r),ti.forEach(s),mn.forEach(s),a=0;a<Jn.length;a++)c=Jn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)bl(a),a.blockedOn===null&&Jn.shift()}var wr=de.ReactCurrentBatchConfig,ni=!0;function Qe(r,s,a,c){var f=Ne,g=wr.transition;wr.transition=null;try{Ne=1,ua(r,s,a,c)}finally{Ne=f,wr.transition=g}}function Zc(r,s,a,c){var f=Ne,g=wr.transition;wr.transition=null;try{Ne=4,ua(r,s,a,c)}finally{Ne=f,wr.transition=g}}function ua(r,s,a,c){if(ni){var f=zs(r,s,a,c);if(f===null)ch(r,s,c,Yi,a),Ml(r,c);else if(Xc(f,r,s,a,c))c.stopPropagation();else if(Ml(r,c),s&4&&-1<Jc.indexOf(r)){for(;f!==null;){var g=Ia(f);if(g!==null&&Dl(g),g=zs(r,s,a,c),g===null&&ch(r,s,c,Yi,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else ch(r,s,c,null,a)}}var Yi=null;function zs(r,s,a,c){if(Yi=null,r=Ns(c),r=Zi(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=qi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Yi=r,null}function ca(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cl()){case Wi:return 1;case Qr:return 4;case pn:case oa:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var on=null,Bs=null,Kt=null;function ha(){if(Kt)return Kt;var r,s=Bs,a=s.length,c,f="value"in on?on.value:on.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===f[g-c];c++);return Kt=f.slice(r,1<c?1-c:void 0)}function $s(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Xn(){return!0}function da(){return!1}function At(r){function s(a,c,f,g,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Xn:da,this.isPropagationStopped=da,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=At(On),Zn=se({},On,{view:0,detail:0}),eh=At(Zn),Ws,Tr,ri,Ji=se({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ri&&(ri&&r.type==="mousemove"?(Ws=r.screenX-ri.screenX,Tr=r.screenY-ri.screenY):Tr=Ws=0,ri=r),Ws)},movementY:function(r){return"movementY"in r?r.movementY:Tr}}),Hs=At(Ji),fa=se({},Ji,{dataTransfer:0}),Ul=At(fa),Ks=se({},Zn,{relatedTarget:0}),Gs=At(Ks),jl=se({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=At(jl),zl=se({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Bl=At(zl),$l=se({},On,{data:0}),pa=At($l),Qs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ql={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ql[r])?!!s[r]:!1}function er(){return Wl}var u=se({},Zn,{key:function(r){if(r.key){var s=Qs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=$s(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Bt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(r){return r.type==="keypress"?$s(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?$s(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),_=se({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(_),F=se({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),B=At(F),te=se({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=At(te),ft=se({},Ji,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(ft),vt=[9,13,27,32],ot=d&&"CompositionEvent"in window,gn=null;d&&"documentMode"in document&&(gn=document.documentMode);var an=d&&"TextEvent"in window&&!gn,Xi=d&&(!ot||gn&&8<gn&&11>=gn),Ys=" ",Sp=!1;function Ap(r,s){switch(r){case"keyup":return vt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Js=!1;function Sw(r,s){switch(r){case"compositionend":return Rp(s);case"keypress":return s.which!==32?null:(Sp=!0,Ys);case"textInput":return r=s.data,r===Ys&&Sp?null:r;default:return null}}function Aw(r,s){if(Js)return r==="compositionend"||!ot&&Ap(r,s)?(r=ha(),Kt=Bs=on=null,Js=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Xi&&s.locale!=="ko"?null:s.data;default:return null}}var Rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Rw[r.type]:s==="textarea"}function Pp(r,s,a,c){Qn(c),s=Yl(s,"onChange"),0<s.length&&(a=new qs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var ma=null,ga=null;function Cw(r){Hp(r,0)}function Hl(r){var s=no(r);if(As(s))return r}function Pw(r,s){if(r==="change")return s}var kp=!1;if(d){var th;if(d){var nh="oninput"in document;if(!nh){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),nh=typeof Np.oninput=="function"}th=nh}else th=!1;kp=th&&(!document.documentMode||9<document.documentMode)}function xp(){ma&&(ma.detachEvent("onpropertychange",Dp),ga=ma=null)}function Dp(r){if(r.propertyName==="value"&&Hl(ga)){var s=[];Pp(s,ga,r,Ns(r)),na(Cw,s)}}function kw(r,s,a){r==="focusin"?(xp(),ma=s,ga=a,ma.attachEvent("onpropertychange",Dp)):r==="focusout"&&xp()}function Nw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Hl(ga)}function xw(r,s){if(r==="click")return Hl(s)}function Dw(r,s){if(r==="input"||r==="change")return Hl(s)}function Ow(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ln=typeof Object.is=="function"?Object.is:Ow;function ya(r,s){if(Ln(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(s,f)||!Ln(r[f],s[f]))return!1}return!0}function Op(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Lp(r,s){var a=Op(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Op(a)}}function Vp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Vp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Mp(){for(var r=window,s=Kr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Kr(r.document)}return s}function rh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Lw(r){var s=Mp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Vp(a.ownerDocument.documentElement,a)){if(c!==null&&rh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=Lp(a,g);var v=Lp(a,c);f&&v&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Vw=d&&"documentMode"in document&&11>=document.documentMode,Xs=null,ih=null,_a=null,sh=!1;function bp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sh||Xs==null||Xs!==Kr(c)||(c=Xs,"selectionStart"in c&&rh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&ya(_a,c)||(_a=c,c=Yl(ih,"onSelect"),0<c.length&&(s=new qs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Xs)))}function Kl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Zs={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},oh={},Fp={};d&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Gl(r){if(oh[r])return oh[r];if(!Zs[r])return r;var s=Zs[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Fp)return oh[r]=s[a];return r}var Up=Gl("animationend"),jp=Gl("animationiteration"),zp=Gl("animationstart"),Bp=Gl("transitionend"),$p=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(r,s){$p.set(r,s),l(s,[r])}for(var ah=0;ah<qp.length;ah++){var lh=qp[ah],Mw=lh.toLowerCase(),bw=lh[0].toUpperCase()+lh.slice(1);ii(Mw,"on"+bw)}ii(Up,"onAnimationEnd"),ii(jp,"onAnimationIteration"),ii(zp,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(Bp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fw=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function Wp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Sl(c,s,void 0,r),r.currentTarget=null}function Hp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var A=c[v],k=A.instance,z=A.currentTarget;if(A=A.listener,k!==g&&f.isPropagationStopped())break e;Wp(f,A,z),g=k}else for(v=0;v<c.length;v++){if(A=c[v],k=A.instance,z=A.currentTarget,A=A.listener,k!==g&&f.isPropagationStopped())break e;Wp(f,A,z),g=k}}}if(Rn)throw r=ra,Rn=!1,ra=null,r}function He(r,s){var a=s[gh];a===void 0&&(a=s[gh]=new Set);var c=r+"__bubble";a.has(c)||(Kp(s,r,2,!1),a.add(c))}function uh(r,s,a){var c=0;s&&(c|=4),Kp(a,r,c,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Ea(r){if(!r[Ql]){r[Ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(Fw.has(a)||uh(a,!1,r),uh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,uh("selectionchange",!1,s))}}function Kp(r,s,a,c){switch(ca(s)){case 1:var f=Qe;break;case 4:f=Zc;break;default:f=ua}a=f.bind(null,s,a,r),f=void 0,!Os||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function ch(r,s,a,c,f){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;v=v.return}for(;A!==null;){if(v=Zi(A),v===null)return;if(k=v.tag,k===5||k===6){c=g=v;continue e}A=A.parentNode}}c=c.return}na(function(){var z=g,J=Ns(a),X=[];e:{var Y=$p.get(r);if(Y!==void 0){var ie=qs,ue=r;switch(r){case"keypress":if($s(a)===0)break e;case"keydown":case"keyup":ie=m;break;case"focusin":ue="focus",ie=Gs;break;case"focusout":ue="blur",ie=Gs;break;case"beforeblur":case"afterblur":ie=Gs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Ul;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=B;break;case Up:case jp:case zp:ie=Ir;break;case Bp:ie=je;break;case"scroll":ie=eh;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=Bl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=w}var ce=(s&4)!==0,it=!ce&&r==="scroll",U=ce?Y!==null?Y+"Capture":null:Y;ce=[];for(var D=z,j;D!==null;){j=D;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,U!==null&&(ee=rt(D,U),ee!=null&&ce.push(wa(D,ee,j)))),it)break;D=D.return}0<ce.length&&(Y=new ie(Y,ue,null,a,J),X.push({event:Y,listeners:ce}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",Y&&a!==ji&&(ue=a.relatedTarget||a.fromElement)&&(Zi(ue)||ue[Sr]))break e;if((ie||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=z,ue=ue?Zi(ue):null,ue!==null&&(it=Cn(ue),ue!==it||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=z),ie!==ue)){if(ce=Hs,ee="onMouseLeave",U="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(ce=w,ee="onPointerLeave",U="onPointerEnter",D="pointer"),it=ie==null?Y:no(ie),j=ue==null?Y:no(ue),Y=new ce(ee,D+"leave",ie,a,J),Y.target=it,Y.relatedTarget=j,ee=null,Zi(J)===z&&(ce=new ce(U,D+"enter",ue,a,J),ce.target=j,ce.relatedTarget=it,ee=ce),it=ee,ie&&ue)t:{for(ce=ie,U=ue,D=0,j=ce;j;j=eo(j))D++;for(j=0,ee=U;ee;ee=eo(ee))j++;for(;0<D-j;)ce=eo(ce),D--;for(;0<j-D;)U=eo(U),j--;for(;D--;){if(ce===U||U!==null&&ce===U.alternate)break t;ce=eo(ce),U=eo(U)}ce=null}else ce=null;ie!==null&&Gp(X,Y,ie,ce,!1),ue!==null&&it!==null&&Gp(X,it,ue,ce,!0)}}e:{if(Y=z?no(z):window,ie=Y.nodeName&&Y.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Y.type==="file")var he=Pw;else if(Cp(Y))if(kp)he=Dw;else{he=Nw;var ge=kw}else(ie=Y.nodeName)&&ie.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(he=xw);if(he&&(he=he(r,z))){Pp(X,he,a,J);break e}ge&&ge(r,Y,z),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&Cs(Y,"number",Y.value)}switch(ge=z?no(z):window,r){case"focusin":(Cp(ge)||ge.contentEditable==="true")&&(Xs=ge,ih=z,_a=null);break;case"focusout":_a=ih=Xs=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,bp(X,a,J);break;case"selectionchange":if(Vw)break;case"keydown":case"keyup":bp(X,a,J)}var ye;if(ot)e:{switch(r){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Js?Ap(r,a)&&(ve="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Xi&&a.locale!=="ko"&&(Js||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Js&&(ye=ha()):(on=J,Bs="value"in on?on.value:on.textContent,Js=!0)),ge=Yl(z,ve),0<ge.length&&(ve=new pa(ve,r,null,a,J),X.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=Rp(a),ye!==null&&(ve.data=ye)))),(ye=an?Sw(r,a):Aw(r,a))&&(z=Yl(z,"onBeforeInput"),0<z.length&&(J=new pa("onBeforeInput","beforeinput",null,a,J),X.push({event:J,listeners:z}),J.data=ye))}Hp(X,s)})}function wa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Yl(r,s){for(var a=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=rt(r,a),g!=null&&c.unshift(wa(r,g,f)),g=rt(r,s),g!=null&&c.push(wa(r,g,f))),r=r.return}return c}function eo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Gp(r,s,a,c,f){for(var g=s._reactName,v=[];a!==null&&a!==c;){var A=a,k=A.alternate,z=A.stateNode;if(k!==null&&k===c)break;A.tag===5&&z!==null&&(A=z,f?(k=rt(a,g),k!=null&&v.unshift(wa(a,k,A))):f||(k=rt(a,g),k!=null&&v.push(wa(a,k,A)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var Uw=/\r\n?/g,jw=/\u0000|\uFFFD/g;function Qp(r){return(typeof r=="string"?r:""+r).replace(Uw,`
`).replace(jw,"")}function Jl(r,s,a){if(s=Qp(s),Qp(r)!==s&&a)throw Error(t(425))}function Xl(){}var hh=null,dh=null;function fh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,zw=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,Bw=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(r){return Yp.resolve(null).then(r).catch($w)}:ph;function $w(r){setTimeout(function(){throw r})}function mh(r,s){var a=s,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),Dn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Dn(s)}function si(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Jp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var to=Math.random().toString(36).slice(2),tr="__reactFiber$"+to,Ta="__reactProps$"+to,Sr="__reactContainer$"+to,gh="__reactEvents$"+to,qw="__reactListeners$"+to,Ww="__reactHandles$"+to;function Zi(r){var s=r[tr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Sr]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Jp(r);r!==null;){if(a=r[tr])return a;r=Jp(r)}return s}r=a,a=r.parentNode}return null}function Ia(r){return r=r[tr]||r[Sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function no(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Zl(r){return r[Ta]||null}var yh=[],ro=-1;function oi(r){return{current:r}}function Ke(r){0>ro||(r.current=yh[ro],yh[ro]=null,ro--)}function We(r,s){ro++,yh[ro]=r.current,r.current=s}var ai={},Ot=oi(ai),Gt=oi(!1),es=ai;function io(r,s){var a=r.type.contextTypes;if(!a)return ai;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Qt(r){return r=r.childContextTypes,r!=null}function eu(){Ke(Gt),Ke(Ot)}function Xp(r,s,a){if(Ot.current!==ai)throw Error(t(168));We(Ot,s),We(Gt,a)}function Zp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in s))throw Error(t(108,be(r)||"Unknown",f));return se({},a,c)}function tu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ai,es=Ot.current,We(Ot,r),We(Gt,Gt.current),!0}function em(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Zp(r,s,es),c.__reactInternalMemoizedMergedChildContext=r,Ke(Gt),Ke(Ot),We(Ot,r)):Ke(Gt),We(Gt,a)}var Ar=null,nu=!1,_h=!1;function tm(r){Ar===null?Ar=[r]:Ar.push(r)}function Hw(r){nu=!0,tm(r)}function li(){if(!_h&&Ar!==null){_h=!0;var r=0,s=Ne;try{var a=Ar;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ar=null,nu=!1}catch(f){throw Ar!==null&&(Ar=Ar.slice(r+1)),bs(Wi,li),f}finally{Ne=s,_h=!1}}return null}var so=[],oo=0,ru=null,iu=0,yn=[],_n=0,ts=null,Rr=1,Cr="";function ns(r,s){so[oo++]=iu,so[oo++]=ru,ru=r,iu=s}function nm(r,s,a){yn[_n++]=Rr,yn[_n++]=Cr,yn[_n++]=ts,ts=r;var c=Rr;r=Cr;var f=32-zt(c)-1;c&=~(1<<f),a+=1;var g=32-zt(s)+f;if(30<g){var v=f-f%5;g=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Rr=1<<32-zt(s)+f|a<<f|c,Cr=g+r}else Rr=1<<g|a<<f|c,Cr=r}function vh(r){r.return!==null&&(ns(r,1),nm(r,1,0))}function Eh(r){for(;r===ru;)ru=so[--oo],so[oo]=null,iu=so[--oo],so[oo]=null;for(;r===ts;)ts=yn[--_n],yn[_n]=null,Cr=yn[--_n],yn[_n]=null,Rr=yn[--_n],yn[_n]=null}var ln=null,un=null,Ye=!1,Vn=null;function rm(r,s){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function im(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=si(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ts!==null?{id:Rr,overflow:Cr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function wh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Th(r){if(Ye){var s=un;if(s){var a=s;if(!im(r,s)){if(wh(r))throw Error(t(418));s=si(a.nextSibling);var c=ln;s&&im(r,s)?rm(c,a):(r.flags=r.flags&-4097|2,Ye=!1,ln=r)}}else{if(wh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,ln=r}}}function sm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function su(r){if(r!==ln)return!1;if(!Ye)return sm(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!fh(r.type,r.memoizedProps)),s&&(s=un)){if(wh(r))throw om(),Error(t(418));for(;s;)rm(r,s),s=si(s.nextSibling)}if(sm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=si(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?si(r.stateNode.nextSibling):null;return!0}function om(){for(var r=un;r;)r=si(r.nextSibling)}function ao(){un=ln=null,Ye=!1}function Ih(r){Vn===null?Vn=[r]:Vn.push(r)}var Kw=de.ReactCurrentBatchConfig;function Sa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var A=f.refs;v===null?delete A[g]:A[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function am(r){var s=r._init;return s(r._payload)}function lm(r){function s(U,D){if(r){var j=U.deletions;j===null?(U.deletions=[D],U.flags|=16):j.push(D)}}function a(U,D){if(!r)return null;for(;D!==null;)s(U,D),D=D.sibling;return null}function c(U,D){for(U=new Map;D!==null;)D.key!==null?U.set(D.key,D):U.set(D.index,D),D=D.sibling;return U}function f(U,D){return U=gi(U,D),U.index=0,U.sibling=null,U}function g(U,D,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<D?(U.flags|=2,D):j):(U.flags|=2,D)):(U.flags|=1048576,D)}function v(U){return r&&U.alternate===null&&(U.flags|=2),U}function A(U,D,j,ee){return D===null||D.tag!==6?(D=pd(j,U.mode,ee),D.return=U,D):(D=f(D,j),D.return=U,D)}function k(U,D,j,ee){var he=j.type;return he===x?J(U,D,j.props.children,ee,j.key):D!==null&&(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&am(he)===D.type)?(ee=f(D,j.props),ee.ref=Sa(U,D,j),ee.return=U,ee):(ee=Nu(j.type,j.key,j.props,null,U.mode,ee),ee.ref=Sa(U,D,j),ee.return=U,ee)}function z(U,D,j,ee){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=md(j,U.mode,ee),D.return=U,D):(D=f(D,j.children||[]),D.return=U,D)}function J(U,D,j,ee,he){return D===null||D.tag!==7?(D=cs(j,U.mode,ee,he),D.return=U,D):(D=f(D,j),D.return=U,D)}function X(U,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=pd(""+D,U.mode,j),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Se:return j=Nu(D.type,D.key,D.props,null,U.mode,j),j.ref=Sa(U,null,D),j.return=U,j;case Te:return D=md(D,U.mode,j),D.return=U,D;case Dt:var ee=D._init;return X(U,ee(D._payload),j)}if(mr(D)||me(D))return D=cs(D,U.mode,j,null),D.return=U,D;ou(U,D)}return null}function Y(U,D,j,ee){var he=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:A(U,D,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Se:return j.key===he?k(U,D,j,ee):null;case Te:return j.key===he?z(U,D,j,ee):null;case Dt:return he=j._init,Y(U,D,he(j._payload),ee)}if(mr(j)||me(j))return he!==null?null:J(U,D,j,ee,null);ou(U,j)}return null}function ie(U,D,j,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return U=U.get(j)||null,A(D,U,""+ee,he);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Se:return U=U.get(ee.key===null?j:ee.key)||null,k(D,U,ee,he);case Te:return U=U.get(ee.key===null?j:ee.key)||null,z(D,U,ee,he);case Dt:var ge=ee._init;return ie(U,D,j,ge(ee._payload),he)}if(mr(ee)||me(ee))return U=U.get(j)||null,J(D,U,ee,he,null);ou(D,ee)}return null}function ue(U,D,j,ee){for(var he=null,ge=null,ye=D,ve=D=0,Tt=null;ye!==null&&ve<j.length;ve++){ye.index>ve?(Tt=ye,ye=null):Tt=ye.sibling;var Me=Y(U,ye,j[ve],ee);if(Me===null){ye===null&&(ye=Tt);break}r&&ye&&Me.alternate===null&&s(U,ye),D=g(Me,D,ve),ge===null?he=Me:ge.sibling=Me,ge=Me,ye=Tt}if(ve===j.length)return a(U,ye),Ye&&ns(U,ve),he;if(ye===null){for(;ve<j.length;ve++)ye=X(U,j[ve],ee),ye!==null&&(D=g(ye,D,ve),ge===null?he=ye:ge.sibling=ye,ge=ye);return Ye&&ns(U,ve),he}for(ye=c(U,ye);ve<j.length;ve++)Tt=ie(ye,U,ve,j[ve],ee),Tt!==null&&(r&&Tt.alternate!==null&&ye.delete(Tt.key===null?ve:Tt.key),D=g(Tt,D,ve),ge===null?he=Tt:ge.sibling=Tt,ge=Tt);return r&&ye.forEach(function(yi){return s(U,yi)}),Ye&&ns(U,ve),he}function ce(U,D,j,ee){var he=me(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var ge=he=null,ye=D,ve=D=0,Tt=null,Me=j.next();ye!==null&&!Me.done;ve++,Me=j.next()){ye.index>ve?(Tt=ye,ye=null):Tt=ye.sibling;var yi=Y(U,ye,Me.value,ee);if(yi===null){ye===null&&(ye=Tt);break}r&&ye&&yi.alternate===null&&s(U,ye),D=g(yi,D,ve),ge===null?he=yi:ge.sibling=yi,ge=yi,ye=Tt}if(Me.done)return a(U,ye),Ye&&ns(U,ve),he;if(ye===null){for(;!Me.done;ve++,Me=j.next())Me=X(U,Me.value,ee),Me!==null&&(D=g(Me,D,ve),ge===null?he=Me:ge.sibling=Me,ge=Me);return Ye&&ns(U,ve),he}for(ye=c(U,ye);!Me.done;ve++,Me=j.next())Me=ie(ye,U,ve,Me.value,ee),Me!==null&&(r&&Me.alternate!==null&&ye.delete(Me.key===null?ve:Me.key),D=g(Me,D,ve),ge===null?he=Me:ge.sibling=Me,ge=Me);return r&&ye.forEach(function(AT){return s(U,AT)}),Ye&&ns(U,ve),he}function it(U,D,j,ee){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Se:e:{for(var he=j.key,ge=D;ge!==null;){if(ge.key===he){if(he=j.type,he===x){if(ge.tag===7){a(U,ge.sibling),D=f(ge,j.props.children),D.return=U,U=D;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&am(he)===ge.type){a(U,ge.sibling),D=f(ge,j.props),D.ref=Sa(U,ge,j),D.return=U,U=D;break e}a(U,ge);break}else s(U,ge);ge=ge.sibling}j.type===x?(D=cs(j.props.children,U.mode,ee,j.key),D.return=U,U=D):(ee=Nu(j.type,j.key,j.props,null,U.mode,ee),ee.ref=Sa(U,D,j),ee.return=U,U=ee)}return v(U);case Te:e:{for(ge=j.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(U,D.sibling),D=f(D,j.children||[]),D.return=U,U=D;break e}else{a(U,D);break}else s(U,D);D=D.sibling}D=md(j,U.mode,ee),D.return=U,U=D}return v(U);case Dt:return ge=j._init,it(U,D,ge(j._payload),ee)}if(mr(j))return ue(U,D,j,ee);if(me(j))return ce(U,D,j,ee);ou(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(U,D.sibling),D=f(D,j),D.return=U,U=D):(a(U,D),D=pd(j,U.mode,ee),D.return=U,U=D),v(U)):a(U,D)}return it}var lo=lm(!0),um=lm(!1),au=oi(null),lu=null,uo=null,Sh=null;function Ah(){Sh=uo=lu=null}function Rh(r){var s=au.current;Ke(au),r._currentValue=s}function Ch(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function co(r,s){lu=r,Sh=uo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Yt=!0),r.firstContext=null)}function vn(r){var s=r._currentValue;if(Sh!==r)if(r={context:r,memoizedValue:s,next:null},uo===null){if(lu===null)throw Error(t(308));uo=r,lu.dependencies={lanes:0,firstContext:r}}else uo=uo.next=r;return s}var rs=null;function Ph(r){rs===null?rs=[r]:rs.push(r)}function cm(r,s,a,c){var f=s.interleaved;return f===null?(a.next=a,Ph(s)):(a.next=f.next,f.next=a),s.interleaved=a,Pr(r,c)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ui=!1;function kh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function kr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ci(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,Pr(r,a)}return f=c.interleaved,f===null?(s.next=s,Ph(c)):(s.next=f.next,f.next=s),c.interleaved=s,Pr(r,a)}function uu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Zr(r,a)}}function dm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function cu(r,s,a,c){var f=r.updateQueue;ui=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var k=A,z=k.next;k.next=null,v===null?g=z:v.next=z,v=k;var J=r.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==v&&(A===null?J.firstBaseUpdate=z:A.next=z,J.lastBaseUpdate=k))}if(g!==null){var X=f.baseState;v=0,J=z=k=null,A=g;do{var Y=A.lane,ie=A.eventTime;if((c&Y)===Y){J!==null&&(J=J.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=r,ce=A;switch(Y=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(ie,X,Y);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Y=typeof ue=="function"?ue.call(ie,X,Y):ue,Y==null)break e;X=se({},X,Y);break e;case 2:ui=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[A]:Y.push(A))}else ie={eventTime:ie,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(z=J=ie,k=X):J=J.next=ie,v|=Y;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(J===null&&(k=X),f.baseState=k,f.firstBaseUpdate=z,f.lastBaseUpdate=J,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);os|=v,r.lanes=v,r.memoizedState=X}}function fm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Aa={},nr=oi(Aa),Ra=oi(Aa),Ca=oi(Aa);function is(r){if(r===Aa)throw Error(t(174));return r}function Nh(r,s){switch(We(Ca,s),We(Ra,r),We(nr,Aa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:dt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=dt(s,r)}Ke(nr),We(nr,s)}function ho(){Ke(nr),Ke(Ra),Ke(Ca)}function pm(r){is(Ca.current);var s=is(nr.current),a=dt(s,r.type);s!==a&&(We(Ra,r),We(nr,a))}function xh(r){Ra.current===r&&(Ke(nr),Ke(Ra))}var Xe=oi(0);function hu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Dh=[];function Oh(){for(var r=0;r<Dh.length;r++)Dh[r]._workInProgressVersionPrimary=null;Dh.length=0}var du=de.ReactCurrentDispatcher,Lh=de.ReactCurrentBatchConfig,ss=0,Ze=null,pt=null,Et=null,fu=!1,Pa=!1,ka=0,Gw=0;function Lt(){throw Error(t(321))}function Vh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Ln(r[a],s[a]))return!1;return!0}function Mh(r,s,a,c,f,g){if(ss=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,du.current=r===null||r.memoizedState===null?Xw:Zw,r=a(c,f),Pa){g=0;do{if(Pa=!1,ka=0,25<=g)throw Error(t(301));g+=1,Et=pt=null,s.updateQueue=null,du.current=eT,r=a(c,f)}while(Pa)}if(du.current=gu,s=pt!==null&&pt.next!==null,ss=0,Et=pt=Ze=null,fu=!1,s)throw Error(t(300));return r}function bh(){var r=ka!==0;return ka=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=r:Et=Et.next=r,Et}function En(){if(pt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=pt.next;var s=Et===null?Ze.memoizedState:Et.next;if(s!==null)Et=s,pt=r;else{if(r===null)throw Error(t(310));pt=r,r={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Et===null?Ze.memoizedState=Et=r:Et=Et.next=r}return Et}function Na(r,s){return typeof s=="function"?s(r):s}function Fh(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=pt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var A=v=null,k=null,z=g;do{var J=z.lane;if((ss&J)===J)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var X={lane:J,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(A=k=X,v=c):k=k.next=X,Ze.lanes|=J,os|=J}z=z.next}while(z!==null&&z!==g);k===null?v=c:k.next=A,Ln(c,s.memoizedState)||(Yt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=k,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Ze.lanes|=g,os|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Uh(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do g=r(g,v.action),v=v.next;while(v!==f);Ln(g,s.memoizedState)||(Yt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function mm(){}function gm(r,s){var a=Ze,c=En(),f=s(),g=!Ln(c.memoizedState,f);if(g&&(c.memoizedState=f,Yt=!0),c=c.queue,jh(vm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,xa(9,_m.bind(null,a,c,f,s),void 0,null),wt===null)throw Error(t(349));ss&30||ym(a,s,f)}return f}function ym(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function _m(r,s,a,c){s.value=a,s.getSnapshot=c,Em(s)&&wm(r)}function vm(r,s,a){return a(function(){Em(s)&&wm(r)})}function Em(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Ln(r,a)}catch{return!0}}function wm(r){var s=Pr(r,1);s!==null&&Un(s,r,1,-1)}function Tm(r){var s=rr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:r},s.queue=r,r=r.dispatch=Jw.bind(null,Ze,r),[s.memoizedState,r]}function xa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Im(){return En().memoizedState}function pu(r,s,a,c){var f=rr();Ze.flags|=r,f.memoizedState=xa(1|s,a,void 0,c===void 0?null:c)}function mu(r,s,a,c){var f=En();c=c===void 0?null:c;var g=void 0;if(pt!==null){var v=pt.memoizedState;if(g=v.destroy,c!==null&&Vh(c,v.deps)){f.memoizedState=xa(s,a,g,c);return}}Ze.flags|=r,f.memoizedState=xa(1|s,a,g,c)}function Sm(r,s){return pu(8390656,8,r,s)}function jh(r,s){return mu(2048,8,r,s)}function Am(r,s){return mu(4,2,r,s)}function Rm(r,s){return mu(4,4,r,s)}function Cm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Pm(r,s,a){return a=a!=null?a.concat([r]):null,mu(4,4,Cm.bind(null,s,r),a)}function zh(){}function km(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Vh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Nm(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Vh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function xm(r,s,a){return ss&21?(Ln(a,s)||(a=Gi(),Ze.lanes|=a,os|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Yt=!0),r.memoizedState=a)}function Qw(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=Lh.transition;Lh.transition={};try{r(!1),s()}finally{Ne=a,Lh.transition=c}}function Dm(){return En().memoizedState}function Yw(r,s,a){var c=pi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Om(r))Lm(s,a);else if(a=cm(r,s,a,c),a!==null){var f=qt();Un(a,r,c,f),Vm(a,s,c)}}function Jw(r,s,a){var c=pi(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Om(r))Lm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,A=g(v,a);if(f.hasEagerState=!0,f.eagerState=A,Ln(A,v)){var k=s.interleaved;k===null?(f.next=f,Ph(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}a=cm(r,s,f,c),a!==null&&(f=qt(),Un(a,r,c,f),Vm(a,s,c))}}function Om(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Lm(r,s){Pa=fu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Vm(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Zr(r,a)}}var gu={readContext:vn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},Xw={readContext:vn,useCallback:function(r,s){return rr().memoizedState=[r,s===void 0?null:s],r},useContext:vn,useEffect:Sm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,pu(4194308,4,Cm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return pu(4194308,4,r,s)},useInsertionEffect:function(r,s){return pu(4,2,r,s)},useMemo:function(r,s){var a=rr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=Yw.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=rr();return r={current:r},s.memoizedState=r},useState:Tm,useDebugValue:zh,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=Tm(!1),s=r[0];return r=Qw.bind(null,r[1]),rr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,f=rr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),wt===null)throw Error(t(349));ss&30||ym(c,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Sm(vm.bind(null,c,g,r),[r]),c.flags|=2048,xa(9,_m.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=rr(),s=wt.identifierPrefix;if(Ye){var a=Cr,c=Rr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=ka++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Gw++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},Zw={readContext:vn,useCallback:km,useContext:vn,useEffect:jh,useImperativeHandle:Pm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Nm,useReducer:Fh,useRef:Im,useState:function(){return Fh(Na)},useDebugValue:zh,useDeferredValue:function(r){var s=En();return xm(s,pt.memoizedState,r)},useTransition:function(){var r=Fh(Na)[0],s=En().memoizedState;return[r,s]},useMutableSource:mm,useSyncExternalStore:gm,useId:Dm,unstable_isNewReconciler:!1},eT={readContext:vn,useCallback:km,useContext:vn,useEffect:jh,useImperativeHandle:Pm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Nm,useReducer:Uh,useRef:Im,useState:function(){return Uh(Na)},useDebugValue:zh,useDeferredValue:function(r){var s=En();return pt===null?s.memoizedState=r:xm(s,pt.memoizedState,r)},useTransition:function(){var r=Uh(Na)[0],s=En().memoizedState;return[r,s]},useMutableSource:mm,useSyncExternalStore:gm,useId:Dm,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Bh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var yu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=qt(),f=pi(r),g=kr(c,f);g.payload=s,a!=null&&(g.callback=a),s=ci(r,g,f),s!==null&&(Un(s,r,f,c),uu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=qt(),f=pi(r),g=kr(c,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ci(r,g,f),s!==null&&(Un(s,r,f,c),uu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=qt(),c=pi(r),f=kr(a,c);f.tag=2,s!=null&&(f.callback=s),s=ci(r,f,c),s!==null&&(Un(s,r,c,a),uu(s,r,c))}};function Mm(r,s,a,c,f,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!ya(a,c)||!ya(f,g):!0}function bm(r,s,a){var c=!1,f=ai,g=s.contextType;return typeof g=="object"&&g!==null?g=vn(g):(f=Qt(s)?es:Ot.current,c=s.contextTypes,g=(c=c!=null)?io(r,f):ai),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Fm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&yu.enqueueReplaceState(s,s.state,null)}function $h(r,s,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},kh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=vn(g):(g=Qt(s)?es:Ot.current,f.context=io(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Bh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&yu.enqueueReplaceState(f,f.state,null),cu(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function fo(r,s){try{var a="",c=s;do a+=Re(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function qh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Wh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var tT=typeof WeakMap=="function"?WeakMap:Map;function Um(r,s,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Su||(Su=!0,od=c),Wh(r,s)},a}function jm(r,s,a){a=kr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;a.payload=function(){return c(f)},a.callback=function(){Wh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Wh(r,s),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function zm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new tT;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(a)||(f.add(a),r=mT.bind(null,r,s,a),s.then(r,r))}function Bm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function $m(r,s,a,c,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=kr(-1,1),s.tag=2,ci(a,s,1))),a.lanes|=1),r)}var nT=de.ReactCurrentOwner,Yt=!1;function $t(r,s,a,c){s.child=r===null?um(s,null,a,c):lo(s,r.child,a,c)}function qm(r,s,a,c,f){a=a.render;var g=s.ref;return co(s,f),c=Mh(r,s,a,c,g,f),a=bh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Ye&&a&&vh(s),s.flags|=1,$t(r,s,c,f),s.child)}function Wm(r,s,a,c,f){if(r===null){var g=a.type;return typeof g=="function"&&!fd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Hm(r,s,g,c,f)):(r=Nu(a.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(v,c)&&r.ref===s.ref)return Nr(r,s,f)}return s.flags|=1,r=gi(g,c),r.ref=s.ref,r.return=s,s.child=r}function Hm(r,s,a,c,f){if(r!==null){var g=r.memoizedProps;if(ya(g,c)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=c=g,(r.lanes&f)!==0)r.flags&131072&&(Yt=!0);else return s.lanes=r.lanes,Nr(r,s,f)}return Hh(r,s,a,c,f)}function Km(r,s,a){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(mo,cn),cn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(mo,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(mo,cn),cn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,We(mo,cn),cn|=c;return $t(r,s,f,a),s.child}function Gm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Hh(r,s,a,c,f){var g=Qt(a)?es:Ot.current;return g=io(s,g),co(s,f),a=Mh(r,s,a,c,g,f),c=bh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Ye&&c&&vh(s),s.flags|=1,$t(r,s,a,f),s.child)}function Qm(r,s,a,c,f){if(Qt(a)){var g=!0;tu(s)}else g=!1;if(co(s,f),s.stateNode===null)vu(r,s),bm(s,a,c),$h(s,a,c,f),c=!0;else if(r===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var k=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=vn(z):(z=Qt(a)?es:Ot.current,z=io(s,z));var J=a.getDerivedStateFromProps,X=typeof J=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||k!==z)&&Fm(s,v,c,z),ui=!1;var Y=s.memoizedState;v.state=Y,cu(s,c,v,f),k=s.memoizedState,A!==c||Y!==k||Gt.current||ui?(typeof J=="function"&&(Bh(s,a,J,c),k=s.memoizedState),(A=ui||Mm(s,a,A,c,Y,k,z))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),v.props=c,v.state=k,v.context=z,c=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,hm(r,s),A=s.memoizedProps,z=s.type===s.elementType?A:Mn(s.type,A),v.props=z,X=s.pendingProps,Y=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=vn(k):(k=Qt(a)?es:Ot.current,k=io(s,k));var ie=a.getDerivedStateFromProps;(J=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==X||Y!==k)&&Fm(s,v,c,k),ui=!1,Y=s.memoizedState,v.state=Y,cu(s,c,v,f);var ue=s.memoizedState;A!==X||Y!==ue||Gt.current||ui?(typeof ie=="function"&&(Bh(s,a,ie,c),ue=s.memoizedState),(z=ui||Mm(s,a,z,c,Y,ue,k)||!1)?(J||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=k,c=z):(typeof v.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),c=!1)}return Kh(r,s,a,c,g,f)}function Kh(r,s,a,c,f,g){Gm(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return f&&em(s,a,!1),Nr(r,s,g);c=s.stateNode,nT.current=s;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=lo(s,r.child,null,g),s.child=lo(s,null,A,g)):$t(r,s,A,g),s.memoizedState=c.state,f&&em(s,a,!0),s.child}function Ym(r){var s=r.stateNode;s.pendingContext?Xp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Xp(r,s.context,!1),Nh(r,s.containerInfo)}function Jm(r,s,a,c,f){return ao(),Ih(f),s.flags|=256,$t(r,s,a,c),s.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Qh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Xm(r,s,a){var c=s.pendingProps,f=Xe.current,g=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),We(Xe,f&1),r===null)return Th(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=xu(v,c,0,null),r=cs(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Qh(a),s.memoizedState=Gh,r):Yh(s,v));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return rT(r,s,v,c,A,f,a);if(g){g=c.fallback,v=s.mode,f=r.child,A=f.sibling;var k={mode:"hidden",children:c.children};return!(v&1)&&s.child!==f?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=gi(f,k),c.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=gi(A,g):(g=cs(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?Qh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Gh,c}return g=r.child,r=g.sibling,c=gi(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Yh(r,s){return s=xu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function _u(r,s,a,c){return c!==null&&Ih(c),lo(s,r.child,null,a),r=Yh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function rT(r,s,a,c,f,g,v){if(a)return s.flags&256?(s.flags&=-257,c=qh(Error(t(422))),_u(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,f=s.mode,c=xu({mode:"visible",children:c.children},f,0,null),g=cs(g,f,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&lo(s,r.child,null,v),s.child.memoizedState=Qh(v),s.memoizedState=Gh,g);if(!(s.mode&1))return _u(r,s,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=qh(g,c,void 0),_u(r,s,v,c)}if(A=(v&r.childLanes)!==0,Yt||A){if(c=wt,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|v)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Pr(r,f),Un(c,r,f,-1))}return dd(),c=qh(Error(t(421))),_u(r,s,v,c)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=gT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,un=si(f.nextSibling),ln=s,Ye=!0,Vn=null,r!==null&&(yn[_n++]=Rr,yn[_n++]=Cr,yn[_n++]=ts,Rr=r.id,Cr=r.overflow,ts=s),s=Yh(s,c.children),s.flags|=4096,s)}function Zm(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Ch(r.return,s,a)}function Jh(r,s,a,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function eg(r,s,a){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if($t(r,s,c.children,a),c=Xe.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Zm(r,a,s);else if(r.tag===19)Zm(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Xe,c),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&hu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Jh(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&hu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Jh(s,!0,a,null,g);break;case"together":Jh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),os|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=gi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=gi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function iT(r,s,a){switch(s.tag){case 3:Ym(s),ao();break;case 5:pm(s);break;case 1:Qt(s.type)&&tu(s);break;case 4:Nh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,f=s.memoizedProps.value;We(au,c._currentValue),c._currentValue=f;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Xe,Xe.current&1),s.flags|=128,null):a&s.child.childLanes?Xm(r,s,a):(We(Xe,Xe.current&1),r=Nr(r,s,a),r!==null?r.sibling:null);We(Xe,Xe.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return eg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(Xe,Xe.current),c)break;return null;case 22:case 23:return s.lanes=0,Km(r,s,a)}return Nr(r,s,a)}var tg,Xh,ng,rg;tg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Xh=function(){},ng=function(r,s,a,c){var f=r.memoizedProps;if(f!==c){r=s.stateNode,is(nr.current);var g=null;switch(a){case"input":f=bi(r,f),c=bi(r,c),g=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":f=Ho(r,f),c=Ho(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Xl)}Xo(a,c);var v;a=null;for(z in f)if(!c.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var A=f[z];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var k=c[z];if(A=f!=null?f[z]:void 0,c.hasOwnProperty(z)&&k!==A&&(k!=null||A!=null))if(z==="style")if(A){for(v in A)!A.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&A[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(g||(g=[]),g.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(g=g||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&He("scroll",r),g||A===k||(g=[])):(g=g||[]).push(z,k))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},rg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Da(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function sT(r,s,a){var c=s.pendingProps;switch(Eh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Qt(s.type)&&eu(),Vt(s),null;case 3:return c=s.stateNode,ho(),Ke(Gt),Ke(Ot),Oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(su(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Vn!==null&&(ud(Vn),Vn=null))),Xh(r,s),Vt(s),null;case 5:xh(s);var f=is(Ca.current);if(a=s.type,r!==null&&s.stateNode!=null)ng(r,s,a,c,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=is(nr.current),su(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[tr]=s,c[Ta]=g,r=(s.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(f=0;f<va.length;f++)He(va[f],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":Rs(c,g),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},He("invalid",c);break;case"textarea":Ps(c,g),He("invalid",c)}Xo(a,g),f=null;for(var v in g)if(g.hasOwnProperty(v)){var A=g[v];v==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&Jl(c.textContent,A,r),f=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Jl(c.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&He("scroll",c)}switch(a){case"input":pr(c),Il(c,g,!0);break;case"textarea":pr(c),Ko(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Xl)}c=f,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ht(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[tr]=s,r[Ta]=c,tg(r,s,!1,!1),s.stateNode=r;e:{switch(v=Zo(a,c),a){case"dialog":He("cancel",r),He("close",r),f=c;break;case"iframe":case"object":case"embed":He("load",r),f=c;break;case"video":case"audio":for(f=0;f<va.length;f++)He(va[f],r);f=c;break;case"source":He("error",r),f=c;break;case"img":case"image":case"link":He("error",r),He("load",r),f=c;break;case"details":He("toggle",r),f=c;break;case"input":Rs(r,c),f=bi(r,c),He("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),He("invalid",r);break;case"textarea":Ps(r,c),f=Ho(r,c),He("invalid",r);break;default:f=c}Xo(a,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var k=A[g];g==="style"?Yo(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Go(r,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Gr(r,k):typeof k=="number"&&Gr(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&He("scroll",r):k!=null&&Z(r,g,k,v))}switch(a){case"input":pr(r),Il(r,c,!1);break;case"textarea":pr(r),Ko(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Fe(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?gr(r,!!c.multiple,g,!1):c.defaultValue!=null&&gr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Xl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)rg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=is(Ca.current),is(nr.current),su(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(g=c.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:Jl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Jl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return Vt(s),null;case 13:if(Ke(Xe),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&un!==null&&s.mode&1&&!(s.flags&128))om(),ao(),s.flags|=98560,g=!1;else if(g=su(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[tr]=s}else ao(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Vt(s),g=!1}else Vn!==null&&(ud(Vn),Vn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||Xe.current&1?mt===0&&(mt=3):dd())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return ho(),Xh(r,s),r===null&&Ea(s.stateNode.containerInfo),Vt(s),null;case 10:return Rh(s.type._context),Vt(s),null;case 17:return Qt(s.type)&&eu(),Vt(s),null;case 19:if(Ke(Xe),g=s.memoizedState,g===null)return Vt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)Da(g,!1);else{if(mt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=hu(r),v!==null){for(s.flags|=128,Da(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Xe,Xe.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>go&&(s.flags|=128,c=!0,Da(g,!1),s.lanes=4194304)}else{if(!c)if(r=hu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Da(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Ye)return Vt(s),null}else 2*qe()-g.renderingStartTime>go&&a!==1073741824&&(s.flags|=128,c=!0,Da(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Xe.current,We(Xe,c?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return hd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?cn&1073741824&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function oT(r,s){switch(Eh(s),s.tag){case 1:return Qt(s.type)&&eu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ho(),Ke(Gt),Ke(Ot),Oh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return xh(s),null;case 13:if(Ke(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ao()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Xe),null;case 4:return ho(),null;case 10:return Rh(s.type._context),null;case 22:case 23:return hd(),null;case 24:return null;default:return null}}var Eu=!1,Mt=!1,aT=typeof WeakSet=="function"?WeakSet:Set,le=null;function po(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(r,s,c)}else a.current=null}function Zh(r,s,a){try{a()}catch(c){tt(r,s,c)}}var ig=!1;function lT(r,s){if(hh=ni,r=Mp(),rh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,A=-1,k=-1,z=0,J=0,X=r,Y=null;t:for(;;){for(var ie;X!==a||f!==0&&X.nodeType!==3||(A=v+f),X!==g||c!==0&&X.nodeType!==3||(k=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(ie=X.firstChild)!==null;)Y=X,X=ie;for(;;){if(X===r)break t;if(Y===a&&++z===f&&(A=v),Y===g&&++J===c&&(k=v),(ie=X.nextSibling)!==null)break;X=Y,Y=X.parentNode}X=ie}a=A===-1||k===-1?null:{start:A,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(dh={focusedElem:r,selectionRange:a},ni=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ue=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,it=ue.memoizedState,U=s.stateNode,D=U.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Mn(s.type,ce),it);U.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){tt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ue=ig,ig=!1,ue}function Oa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Zh(s,a,g)}f=f.next}while(f!==c)}}function wu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function ed(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function sg(r){var s=r.alternate;s!==null&&(r.alternate=null,sg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[tr],delete s[Ta],delete s[gh],delete s[qw],delete s[Ww])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function og(r){return r.tag===5||r.tag===3||r.tag===4}function ag(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||og(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function td(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Xl));else if(c!==4&&(r=r.child,r!==null))for(td(r,s,a),r=r.sibling;r!==null;)td(r,s,a),r=r.sibling}function nd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(nd(r,s,a),r=r.sibling;r!==null;)nd(r,s,a),r=r.sibling}var Rt=null,bn=!1;function hi(r,s,a){for(a=a.child;a!==null;)lg(r,s,a),a=a.sibling}function lg(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:Mt||po(a,s);case 6:var c=Rt,f=bn;Rt=null,hi(r,s,a),Rt=c,bn=f,Rt!==null&&(bn?(r=Rt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(bn?(r=Rt,a=a.stateNode,r.nodeType===8?mh(r.parentNode,a):r.nodeType===1&&mh(r,a),Dn(r)):mh(Rt,a.stateNode));break;case 4:c=Rt,f=bn,Rt=a.stateNode.containerInfo,bn=!0,hi(r,s,a),Rt=c,bn=f;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&Zh(a,s,v),f=f.next}while(f!==c)}hi(r,s,a);break;case 1:if(!Mt&&(po(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){tt(a,s,A)}hi(r,s,a);break;case 21:hi(r,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,hi(r,s,a),Mt=c):hi(r,s,a);break;default:hi(r,s,a)}}function ug(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new aT),s.forEach(function(c){var f=yT.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Fn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=r,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Rt=A.stateNode,bn=!1;break e;case 3:Rt=A.stateNode.containerInfo,bn=!0;break e;case 4:Rt=A.stateNode.containerInfo,bn=!0;break e}A=A.return}if(Rt===null)throw Error(t(160));lg(g,v,f),Rt=null,bn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(z){tt(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)cg(s,r),s=s.sibling}function cg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Fn(s,r),ir(r),c&4){try{Oa(3,r,r.return),wu(3,r)}catch(ce){tt(r,r.return,ce)}try{Oa(5,r,r.return)}catch(ce){tt(r,r.return,ce)}}break;case 1:Fn(s,r),ir(r),c&512&&a!==null&&po(a,a.return);break;case 5:if(Fn(s,r),ir(r),c&512&&a!==null&&po(a,a.return),r.flags&32){var f=r.stateNode;try{Gr(f,"")}catch(ce){tt(r,r.return,ce)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,A=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&qo(f,g),Zo(A,v);var z=Zo(A,g);for(v=0;v<k.length;v+=2){var J=k[v],X=k[v+1];J==="style"?Yo(f,X):J==="dangerouslySetInnerHTML"?Go(f,X):J==="children"?Gr(f,X):Z(f,J,X,z)}switch(A){case"input":Wo(f,g);break;case"textarea":ks(f,g);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ie=g.value;ie!=null?gr(f,!!g.multiple,ie,!1):Y!==!!g.multiple&&(g.defaultValue!=null?gr(f,!!g.multiple,g.defaultValue,!0):gr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ta]=g}catch(ce){tt(r,r.return,ce)}}break;case 6:if(Fn(s,r),ir(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ce){tt(r,r.return,ce)}}break;case 3:if(Fn(s,r),ir(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(s.containerInfo)}catch(ce){tt(r,r.return,ce)}break;case 4:Fn(s,r),ir(r);break;case 13:Fn(s,r),ir(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(sd=qe())),c&4&&ug(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(Mt=(z=Mt)||J,Fn(s,r),Mt=z):Fn(s,r),ir(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!J&&r.mode&1)for(le=r,J=r.child;J!==null;){for(X=le=J;le!==null;){switch(Y=le,ie=Y.child,Y.tag){case 0:case 11:case 14:case 15:Oa(4,Y,Y.return);break;case 1:po(Y,Y.return);var ue=Y.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Y,a=Y.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){tt(c,a,ce)}}break;case 5:po(Y,Y.return);break;case 22:if(Y.memoizedState!==null){fg(X);continue}}ie!==null?(ie.return=Y,le=ie):fg(X)}J=J.sibling}e:for(J=null,X=r;;){if(X.tag===5){if(J===null){J=X;try{f=X.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=X.stateNode,k=X.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=Qo("display",v))}catch(ce){tt(r,r.return,ce)}}}else if(X.tag===6){if(J===null)try{X.stateNode.nodeValue=z?"":X.memoizedProps}catch(ce){tt(r,r.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;J===X&&(J=null),X=X.return}J===X&&(J=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Fn(s,r),ir(r),c&4&&ug(r);break;case 21:break;default:Fn(s,r),ir(r)}}function ir(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(og(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Gr(f,""),c.flags&=-33);var g=ag(r);nd(r,g,f);break;case 3:case 4:var v=c.stateNode.containerInfo,A=ag(r);td(r,A,v);break;default:throw Error(t(161))}}catch(k){tt(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function uT(r,s,a){le=r,hg(r)}function hg(r,s,a){for(var c=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||Eu;if(!v){var A=f.alternate,k=A!==null&&A.memoizedState!==null||Mt;A=Eu;var z=Mt;if(Eu=v,(Mt=k)&&!z)for(le=f;le!==null;)v=le,k=v.child,v.tag===22&&v.memoizedState!==null?pg(f):k!==null?(k.return=v,le=k):pg(f);for(;g!==null;)le=g,hg(g),g=g.sibling;le=f,Eu=A,Mt=z}dg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,le=g):dg(r)}}function dg(r){for(;le!==null;){var s=le;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Mt||wu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&fm(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}fm(s,v,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var J=z.memoizedState;if(J!==null){var X=J.dehydrated;X!==null&&Dn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&ed(s)}catch(Y){tt(s,s.return,Y)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function fg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function pg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{wu(4,s)}catch(k){tt(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var f=s.return;try{c.componentDidMount()}catch(k){tt(s,f,k)}}var g=s.return;try{ed(s)}catch(k){tt(s,g,k)}break;case 5:var v=s.return;try{ed(s)}catch(k){tt(s,v,k)}}}catch(k){tt(s,s.return,k)}if(s===r){le=null;break}var A=s.sibling;if(A!==null){A.return=s.return,le=A;break}le=s.return}}var cT=Math.ceil,Tu=de.ReactCurrentDispatcher,rd=de.ReactCurrentOwner,wn=de.ReactCurrentBatchConfig,Ve=0,wt=null,at=null,Ct=0,cn=0,mo=oi(0),mt=0,La=null,os=0,Iu=0,id=0,Va=null,Jt=null,sd=0,go=1/0,xr=null,Su=!1,od=null,di=null,Au=!1,fi=null,Ru=0,Ma=0,ad=null,Cu=-1,Pu=0;function qt(){return Ve&6?qe():Cu!==-1?Cu:Cu=qe()}function pi(r){return r.mode&1?Ve&2&&Ct!==0?Ct&-Ct:Kw.transition!==null?(Pu===0&&(Pu=Gi()),Pu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:ca(r.type)),r):1}function Un(r,s,a,c){if(50<Ma)throw Ma=0,ad=null,Error(t(185));Xr(r,a,c),(!(Ve&2)||r!==wt)&&(r===wt&&(!(Ve&2)&&(Iu|=a),mt===4&&mi(r,Ct)),Xt(r,c),a===1&&Ve===0&&!(s.mode&1)&&(go=qe()+500,nu&&li()))}function Xt(r,s){var a=r.callbackNode;vr(r,s);var c=Ki(r,r===wt?Ct:0);if(c===0)a!==null&&sa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&sa(a),s===1)r.tag===0?Hw(gg.bind(null,r)):tm(gg.bind(null,r)),Bw(function(){!(Ve&6)&&li()}),a=null;else{switch(ei(c)){case 1:a=Wi;break;case 4:a=Qr;break;case 16:a=pn;break;case 536870912:a=Pl;break;default:a=pn}a=Sg(a,mg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function mg(r,s){if(Cu=-1,Pu=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(yo()&&r.callbackNode!==a)return null;var c=Ki(r,r===wt?Ct:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=ku(r,c);else{s=c;var f=Ve;Ve|=2;var g=_g();(wt!==r||Ct!==s)&&(xr=null,go=qe()+500,ls(r,s));do try{fT();break}catch(A){yg(r,A)}while(!0);Ah(),Tu.current=g,Ve=f,at!==null?s=0:(wt=null,Ct=0,s=mt)}if(s!==0){if(s===2&&(f=sn(r),f!==0&&(c=f,s=ld(r,f))),s===1)throw a=La,ls(r,0),mi(r,c),Xt(r,qe()),a;if(s===6)mi(r,c);else{if(f=r.current.alternate,!(c&30)&&!hT(f)&&(s=ku(r,c),s===2&&(g=sn(r),g!==0&&(c=g,s=ld(r,g))),s===1))throw a=La,ls(r,0),mi(r,c),Xt(r,qe()),a;switch(r.finishedWork=f,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:us(r,Jt,xr);break;case 3:if(mi(r,c),(c&130023424)===c&&(s=sd+500-qe(),10<s)){if(Ki(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=ph(us.bind(null,r,Jt,xr),s);break}us(r,Jt,xr);break;case 4:if(mi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,f=-1;0<c;){var v=31-zt(c);g=1<<v,v=s[v],v>f&&(f=v),c&=~g}if(c=f,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*cT(c/1960))-c,10<c){r.timeoutHandle=ph(us.bind(null,r,Jt,xr),c);break}us(r,Jt,xr);break;case 5:us(r,Jt,xr);break;default:throw Error(t(329))}}}return Xt(r,qe()),r.callbackNode===a?mg.bind(null,r):null}function ld(r,s){var a=Va;return r.current.memoizedState.isDehydrated&&(ls(r,s).flags|=256),r=ku(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&ud(s)),r}function ud(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function hT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!Ln(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function mi(r,s){for(s&=~id,s&=~Iu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-zt(s),c=1<<a;r[a]=-1,s&=~c}}function gg(r){if(Ve&6)throw Error(t(327));yo();var s=Ki(r,0);if(!(s&1))return Xt(r,qe()),null;var a=ku(r,s);if(r.tag!==0&&a===2){var c=sn(r);c!==0&&(s=c,a=ld(r,c))}if(a===1)throw a=La,ls(r,0),mi(r,s),Xt(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,us(r,Jt,xr),Xt(r,qe()),null}function cd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(go=qe()+500,nu&&li())}}function as(r){fi!==null&&fi.tag===0&&!(Ve&6)&&yo();var s=Ve;Ve|=1;var a=wn.transition,c=Ne;try{if(wn.transition=null,Ne=1,r)return r()}finally{Ne=c,wn.transition=a,Ve=s,!(Ve&6)&&li()}}function hd(){cn=mo.current,Ke(mo)}function ls(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,zw(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Eh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:ho(),Ke(Gt),Ke(Ot),Oh();break;case 5:xh(c);break;case 4:ho();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:Rh(c.type._context);break;case 22:case 23:hd()}a=a.return}if(wt=r,at=r=gi(r.current,null),Ct=cn=s,mt=0,La=null,id=Iu=os=0,Jt=Va=null,rs!==null){for(s=0;s<rs.length;s++)if(a=rs[s],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=f,c.next=v}a.pending=c}rs=null}return r}function yg(r,s){do{var a=at;try{if(Ah(),du.current=gu,fu){for(var c=Ze.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}fu=!1}if(ss=0,Et=pt=Ze=null,Pa=!1,ka=0,rd.current=null,a===null||a.return===null){mt=1,La=s,at=null;break}e:{var g=r,v=a.return,A=a,k=s;if(s=Ct,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,J=A,X=J.tag;if(!(J.mode&1)&&(X===0||X===11||X===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var ie=Bm(v);if(ie!==null){ie.flags&=-257,$m(ie,v,A,g,s),ie.mode&1&&zm(g,z,s),s=ie,k=z;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if(!(s&1)){zm(g,z,s),dd();break e}k=Error(t(426))}}else if(Ye&&A.mode&1){var it=Bm(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),$m(it,v,A,g,s),Ih(fo(k,A));break e}}g=k=fo(k,A),mt!==4&&(mt=2),Va===null?Va=[g]:Va.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=Um(g,k,s);dm(g,U);break e;case 1:A=k;var D=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(di===null||!di.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=jm(g,A,s);dm(g,ee);break e}}g=g.return}while(g!==null)}Eg(a)}catch(he){s=he,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function _g(){var r=Tu.current;return Tu.current=gu,r===null?gu:r}function dd(){(mt===0||mt===3||mt===2)&&(mt=4),wt===null||!(os&268435455)&&!(Iu&268435455)||mi(wt,Ct)}function ku(r,s){var a=Ve;Ve|=2;var c=_g();(wt!==r||Ct!==s)&&(xr=null,ls(r,s));do try{dT();break}catch(f){yg(r,f)}while(!0);if(Ah(),Ve=a,Tu.current=c,at!==null)throw Error(t(261));return wt=null,Ct=0,mt}function dT(){for(;at!==null;)vg(at)}function fT(){for(;at!==null&&!Rl();)vg(at)}function vg(r){var s=Ig(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?Eg(r):at=s,rd.current=null}function Eg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=oT(a,s),a!==null){a.flags&=32767,at=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{mt=6,at=null;return}}else if(a=sT(a,s,cn),a!==null){at=a;return}if(s=s.sibling,s!==null){at=s;return}at=s=r}while(s!==null);mt===0&&(mt=5)}function us(r,s,a){var c=Ne,f=wn.transition;try{wn.transition=null,Ne=1,pT(r,s,a,c)}finally{wn.transition=f,Ne=c}return null}function pT(r,s,a,c){do yo();while(fi!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(r,g),r===wt&&(at=wt=null,Ct=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Au||(Au=!0,Sg(pn,function(){return yo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=wn.transition,wn.transition=null;var v=Ne;Ne=1;var A=Ve;Ve|=4,rd.current=null,lT(r,a),cg(a,r),Lw(dh),ni=!!hh,dh=hh=null,r.current=a,uT(a),Qc(),Ve=A,Ne=v,wn.transition=g}else r.current=a;if(Au&&(Au=!1,fi=r,Ru=f),g=r.pendingLanes,g===0&&(di=null),kl(a.stateNode),Xt(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Su)throw Su=!1,r=od,od=null,r;return Ru&1&&r.tag!==0&&yo(),g=r.pendingLanes,g&1?r===ad?Ma++:(Ma=0,ad=r):Ma=0,li(),null}function yo(){if(fi!==null){var r=ei(Ru),s=wn.transition,a=Ne;try{if(wn.transition=null,Ne=16>r?16:r,fi===null)var c=!1;else{if(r=fi,fi=null,Ru=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,le=r.current;le!==null;){var g=le,v=g.child;if(le.flags&16){var A=g.deletions;if(A!==null){for(var k=0;k<A.length;k++){var z=A[k];for(le=z;le!==null;){var J=le;switch(J.tag){case 0:case 11:case 15:Oa(8,J,g)}var X=J.child;if(X!==null)X.return=J,le=X;else for(;le!==null;){J=le;var Y=J.sibling,ie=J.return;if(sg(J),J===z){le=null;break}if(Y!==null){Y.return=ie,le=Y;break}le=ie}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}le=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,le=v;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Oa(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,le=U;break e}le=g.return}}var D=r.current;for(le=D;le!==null;){v=le;var j=v.child;if(v.subtreeFlags&2064&&j!==null)j.return=v,le=j;else e:for(v=D;le!==null;){if(A=le,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:wu(9,A)}}catch(he){tt(A,A.return,he)}if(A===v){le=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,le=ee;break e}le=A.return}}if(Ve=f,li(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Hi,r)}catch{}c=!0}return c}finally{Ne=a,wn.transition=s}}return!1}function wg(r,s,a){s=fo(a,s),s=Um(r,s,1),r=ci(r,s,1),s=qt(),r!==null&&(Xr(r,1,s),Xt(r,s))}function tt(r,s,a){if(r.tag===3)wg(r,r,a);else for(;s!==null;){if(s.tag===3){wg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){r=fo(a,r),r=jm(s,r,1),s=ci(s,r,1),r=qt(),s!==null&&(Xr(s,1,r),Xt(s,r));break}}s=s.return}}function mT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=qt(),r.pingedLanes|=r.suspendedLanes&a,wt===r&&(Ct&a)===a&&(mt===4||mt===3&&(Ct&130023424)===Ct&&500>qe()-sd?ls(r,0):id|=a),Xt(r,s)}function Tg(r,s){s===0&&(r.mode&1?(s=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):s=1);var a=qt();r=Pr(r,s),r!==null&&(Xr(r,s,a),Xt(r,a))}function gT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Tg(r,a)}function yT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Tg(r,a)}var Ig;Ig=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Gt.current)Yt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Yt=!1,iT(r,s,a);Yt=!!(r.flags&131072)}else Yt=!1,Ye&&s.flags&1048576&&nm(s,iu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;vu(r,s),r=s.pendingProps;var f=io(s,Ot.current);co(s,a),f=Mh(null,s,c,r,f,a);var g=bh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qt(c)?(g=!0,tu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,kh(s),f.updater=yu,s.stateNode=f,f._reactInternals=s,$h(s,c,r,a),s=Kh(null,s,c,!0,g,a)):(s.tag=0,Ye&&g&&vh(s),$t(null,s,f,a),s=s.child),s;case 16:c=s.elementType;e:{switch(vu(r,s),r=s.pendingProps,f=c._init,c=f(c._payload),s.type=c,f=s.tag=vT(c),r=Mn(c,r),f){case 0:s=Hh(null,s,c,r,a);break e;case 1:s=Qm(null,s,c,r,a);break e;case 11:s=qm(null,s,c,r,a);break e;case 14:s=Wm(null,s,c,Mn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),Hh(r,s,c,f,a);case 1:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),Qm(r,s,c,f,a);case 3:e:{if(Ym(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,f=g.element,hm(r,s),cu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=fo(Error(t(423)),s),s=Jm(r,s,c,a,f);break e}else if(c!==f){f=fo(Error(t(424)),s),s=Jm(r,s,c,a,f);break e}else for(un=si(s.stateNode.containerInfo.firstChild),ln=s,Ye=!0,Vn=null,a=um(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ao(),c===f){s=Nr(r,s,a);break e}$t(r,s,c,a)}s=s.child}return s;case 5:return pm(s),r===null&&Th(s),c=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,v=f.children,fh(c,f)?v=null:g!==null&&fh(c,g)&&(s.flags|=32),Gm(r,s),$t(r,s,v,a),s.child;case 6:return r===null&&Th(s),null;case 13:return Xm(r,s,a);case 4:return Nh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=lo(s,null,c,a):$t(r,s,c,a),s.child;case 11:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),qm(r,s,c,f,a);case 7:return $t(r,s,s.pendingProps,a),s.child;case 8:return $t(r,s,s.pendingProps.children,a),s.child;case 12:return $t(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,f=s.pendingProps,g=s.memoizedProps,v=f.value,We(au,c._currentValue),c._currentValue=v,g!==null)if(Ln(g.value,v)){if(g.children===f.children&&!Gt.current){s=Nr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){v=g.child;for(var k=A.firstContext;k!==null;){if(k.context===c){if(g.tag===1){k=kr(-1,a&-a),k.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var J=z.pending;J===null?k.next=k:(k.next=J.next,J.next=k),z.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Ch(g.return,a,s),A.lanes|=a;break}k=k.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),Ch(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}$t(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,c=s.pendingProps.children,co(s,a),f=vn(f),c=c(f),s.flags|=1,$t(r,s,c,a),s.child;case 14:return c=s.type,f=Mn(c,s.pendingProps),f=Mn(c.type,f),Wm(r,s,c,f,a);case 15:return Hm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),vu(r,s),s.tag=1,Qt(c)?(r=!0,tu(s)):r=!1,co(s,a),bm(s,c,f),$h(s,c,f,a),Kh(null,s,c,!0,r,a);case 19:return eg(r,s,a);case 22:return Km(r,s,a)}throw Error(t(156,s.tag))};function Sg(r,s){return bs(r,s)}function _T(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new _T(r,s,a,c)}function fd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function vT(r){if(typeof r=="function")return fd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===xt)return 14}return 2}function gi(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Nu(r,s,a,c,f,g){var v=2;if(c=r,typeof r=="function")fd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case x:return cs(a.children,f,g,s);case S:v=8,f|=8;break;case R:return r=Tn(12,a,s,f|2),r.elementType=R,r.lanes=g,r;case C:return r=Tn(13,a,s,f),r.elementType=C,r.lanes=g,r;case nt:return r=Tn(19,a,s,f),r.elementType=nt,r.lanes=g,r;case ze:return xu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:v=10;break e;case O:v=9;break e;case M:v=11;break e;case xt:v=14;break e;case Dt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Tn(v,a,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function cs(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function xu(r,s,a,c){return r=Tn(22,r,c,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function pd(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function md(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function ET(r,s,a,c,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jr(0),this.expirationTimes=Jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function gd(r,s,a,c,f,g,v,A,k){return r=new ET(r,s,a,A,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Tn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(g),r}function wT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Ag(r){if(!r)return ai;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Qt(a))return Zp(r,a,s)}return s}function Rg(r,s,a,c,f,g,v,A,k){return r=gd(a,c,!0,r,f,g,v,A,k),r.context=Ag(null),a=r.current,c=qt(),f=pi(a),g=kr(c,f),g.callback=s??null,ci(a,g,f),r.current.lanes=f,Xr(r,f,c),Xt(r,c),r}function Du(r,s,a,c){var f=s.current,g=qt(),v=pi(f);return a=Ag(a),s.context===null?s.context=a:s.pendingContext=a,s=kr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ci(f,s,v),r!==null&&(Un(r,f,v,g),uu(r,f,v)),v}function Ou(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Cg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function yd(r,s){Cg(r,s),(r=r.alternate)&&Cg(r,s)}var Pg=typeof reportError=="function"?reportError:function(r){console.error(r)};function _d(r){this._internalRoot=r}Lu.prototype.render=_d.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Du(r,s,null,null)},Lu.prototype.unmount=_d.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;as(function(){Du(null,r,null,null)}),s[Sr]=null}};function Lu(r){this._internalRoot=r}Lu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ll();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Jn.length&&s!==0&&s<Jn[a].priority;a++);Jn.splice(a,0,r),a===0&&bl(r)}};function vd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Vu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function kg(){}function TT(r,s,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var z=Ou(v);g.call(z)}}var v=Rg(s,c,r,0,null,!1,!1,"",kg);return r._reactRootContainer=v,r[Sr]=v.current,Ea(r.nodeType===8?r.parentNode:r),as(),v}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var A=c;c=function(){var z=Ou(k);A.call(z)}}var k=gd(r,0,!1,null,null,!1,!1,"",kg);return r._reactRootContainer=k,r[Sr]=k.current,Ea(r.nodeType===8?r.parentNode:r),as(function(){Du(s,k,a,c)}),k}function Mu(r,s,a,c,f){var g=a._reactRootContainer;if(g){var v=g;if(typeof f=="function"){var A=f;f=function(){var k=Ou(v);A.call(k)}}Du(s,v,r,f)}else v=TT(a,s,r,f,c);return Ou(v)}Dl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Yr(s.pendingLanes);a!==0&&(Zr(s,a|1),Xt(s,qe()),!(Ve&6)&&(go=qe()+500,li()))}break;case 13:as(function(){var c=Pr(r,1);if(c!==null){var f=qt();Un(c,r,1,f)}}),yd(r,1)}},js=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=qt();Un(s,r,134217728,a)}yd(r,134217728)}},Ol=function(r){if(r.tag===13){var s=pi(r),a=Pr(r,s);if(a!==null){var c=qt();Un(a,r,s,c)}yd(r,s)}},Ll=function(){return Ne},Vl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},xs=function(r,s,a){switch(s){case"input":if(Wo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var f=Zl(c);if(!f)throw Error(t(90));As(c),Wo(c,f)}}}break;case"textarea":ks(r,a);break;case"select":s=a.value,s!=null&&gr(r,!!a.multiple,s,!1)}},zi=cd,ta=as;var IT={usingClientEntryPoint:!1,Events:[Ia,no,Zl,Qn,ea,cd]},ba={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ST={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ia(r),r===null?null:r.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{Hi=bu.inject(ST),rn=bu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IT,Zt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(s))throw Error(t(200));return wT(r,s,null,a)},Zt.createRoot=function(r,s){if(!vd(r))throw Error(t(299));var a=!1,c="",f=Pg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=gd(r,1,!1,null,null,a,!1,c,f),r[Sr]=s.current,Ea(r.nodeType===8?r.parentNode:r),new _d(s)},Zt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ia(s),r=r===null?null:r.stateNode,r},Zt.flushSync=function(r){return as(r)},Zt.hydrate=function(r,s,a){if(!Vu(s))throw Error(t(200));return Mu(null,r,s,!0,a)},Zt.hydrateRoot=function(r,s,a){if(!vd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",v=Pg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Rg(s,null,r,1,a??null,f,!1,g,v),r[Sr]=s.current,Ea(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Lu(s)},Zt.render=function(r,s,a){if(!Vu(s))throw Error(t(200));return Mu(null,r,s,!1,a)},Zt.unmountComponentAtNode=function(r){if(!Vu(r))throw Error(t(40));return r._reactRootContainer?(as(function(){Mu(null,null,r,!1,function(){r._reactRootContainer=null,r[Sr]=null})}),!0):!1},Zt.unstable_batchedUpdates=cd,Zt.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Vu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Mu(r,s,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var bg;function DT(){if(bg)return Td.exports;bg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Td.exports=xT(),Td.exports}var Fg;function OT(){if(Fg)return Fu;Fg=1;var n=DT();return Fu.createRoot=n.createRoot,Fu.hydrateRoot=n.hydrateRoot,Fu}var LT=OT(),Ua={},Ug;function VT(){if(Ug)return Ua;Ug=1,Object.defineProperty(Ua,"__esModule",{value:!0}),Ua.parse=h,Ua.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function h(I,P){const L=new l,q=I.length;if(q<2)return L;const b=(P==null?void 0:P.decode)||E;let H=0;do{const ne=I.indexOf("=",H);if(ne===-1)break;const Z=I.indexOf(";",H),de=Z===-1?q:Z;if(ne>de){H=I.lastIndexOf(";",ne-1)+1;continue}const Se=d(I,H,ne),Te=p(I,ne,Se),x=I.slice(Se,Te);if(L[x]===void 0){let S=d(I,ne+1,de),R=p(I,de,S);const N=b(I.slice(S,R));L[x]=N}H=de+1}while(H<q);return L}function d(I,P,L){do{const q=I.charCodeAt(P);if(q!==32&&q!==9)return P}while(++P<L);return L}function p(I,P,L){for(;P>L;){const q=I.charCodeAt(--P);if(q!==32&&q!==9)return P+1}return L}function y(I,P,L){const q=(L==null?void 0:L.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const b=q(P);if(!e.test(b))throw new TypeError(`argument val is invalid: ${P}`);let H=I+"="+b;if(!L)return H;if(L.maxAge!==void 0){if(!Number.isInteger(L.maxAge))throw new TypeError(`option maxAge is invalid: ${L.maxAge}`);H+="; Max-Age="+L.maxAge}if(L.domain){if(!t.test(L.domain))throw new TypeError(`option domain is invalid: ${L.domain}`);H+="; Domain="+L.domain}if(L.path){if(!i.test(L.path))throw new TypeError(`option path is invalid: ${L.path}`);H+="; Path="+L.path}if(L.expires){if(!T(L.expires)||!Number.isFinite(L.expires.valueOf()))throw new TypeError(`option expires is invalid: ${L.expires}`);H+="; Expires="+L.expires.toUTCString()}if(L.httpOnly&&(H+="; HttpOnly"),L.secure&&(H+="; Secure"),L.partitioned&&(H+="; Partitioned"),L.priority)switch(typeof L.priority=="string"?L.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${L.priority}`)}if(L.sameSite)switch(typeof L.sameSite=="string"?L.sameSite.toLowerCase():L.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${L.sameSite}`)}return H}function E(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Ua}VT();/**
 * react-router v7.1.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jg="popstate";function MT(n={}){function e(i,o){let{pathname:l,search:h,hash:d}=i.location;return zd("",{pathname:l,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Za(o)}return FT(e,t,null,n)}function Je(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Bn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bT(){return Math.random().toString(36).substring(2,10)}function zg(n,e){return{usr:n.state,key:n.key,idx:e}}function zd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Oo(e):e,state:t,key:e&&e.key||i||bT()}}function Za({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Oo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function FT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,d="POP",p=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function T(){d="POP";let b=E(),H=b==null?null:b-y;y=b,p&&p({action:d,location:q.location,delta:H})}function I(b,H){d="PUSH";let ne=zd(q.location,b,H);y=E()+1;let Z=zg(ne,y),de=q.createHref(ne);try{h.pushState(Z,"",de)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;o.location.assign(de)}l&&p&&p({action:d,location:q.location,delta:1})}function P(b,H){d="REPLACE";let ne=zd(q.location,b,H);y=E();let Z=zg(ne,y),de=q.createHref(ne);h.replaceState(Z,"",de),l&&p&&p({action:d,location:q.location,delta:0})}function L(b){let H=o.location.origin!=="null"?o.location.origin:o.location.href,ne=typeof b=="string"?b:Za(b);return ne=ne.replace(/ $/,"%20"),Je(H,`No window.location.(origin|href) available to create URL for href: ${ne}`),new URL(ne,H)}let q={get action(){return d},get location(){return n(o,h)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(jg,T),p=b,()=>{o.removeEventListener(jg,T),p=null}},createHref(b){return e(o,b)},createURL:L,encodeLocation(b){let H=L(b);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:I,replace:P,go(b){return h.go(b)}};return q}function __(n,e,t="/"){return UT(n,e,t,!1)}function UT(n,e,t,i){let o=typeof e=="string"?Oo(e):e,l=Ri(o.pathname||"/",t);if(l==null)return null;let h=v_(n);jT(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let y=JT(l);d=QT(h[p],y,i)}return d}function v_(n,e=[],t=[],i=""){let o=(l,h,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Fr([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(Je(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),v_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:KT(y,l.index),routesMeta:E})};return n.forEach((l,h)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,h);else for(let p of E_(l.path))o(l,h,p)}),e}function E_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=E_(i.join("/")),d=[];return d.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...h),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function jT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:GT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var zT=/^:[\w-]+$/,BT=3,$T=2,qT=1,WT=10,HT=-2,Bg=n=>n==="*";function KT(n,e){let t=n.split("/"),i=t.length;return t.some(Bg)&&(i+=HT),e&&(i+=$T),t.filter(o=>!Bg(o)).reduce((o,l)=>o+(zT.test(l)?BT:l===""?qT:WT),i)}function GT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function QT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=ic({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=ic({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Fr([l,T.pathname]),pathnameBase:tI(Fr([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Fr([l,T.pathnameBase]))}return h}function ic(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=YT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:T},I)=>{if(E==="*"){let L=d[I]||"";h=l.slice(0,l.length-L.length).replace(/(.)\/+$/,"$1")}const P=d[I];return T&&!P?y[E]=void 0:y[E]=(P||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function YT(n,e=!1,t=!0){Bn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function JT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ri(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function XT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Oo(n):n;return{pathname:t?t.startsWith("/")?t:ZT(t,e):e,search:nI(i),hash:rI(o)}}function ZT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ad(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function eI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function gf(n){let e=eI(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function yf(n,e,t,i=!1){let o;typeof n=="string"?o=Oo(n):(o={...n},Je(!o.pathname||!o.pathname.includes("?"),Ad("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),Ad("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),Ad("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,d;if(h==null)d=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}d=T>=0?e[T]:"/"}let p=XT(o,d),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Fr=n=>n.join("/").replace(/\/\/+/g,"/"),tI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),nI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,rI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function iI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var w_=["POST","PUT","PATCH","DELETE"];new Set(w_);var sI=["GET",...w_];new Set(sI);var Lo=$.createContext(null);Lo.displayName="DataRouter";var Sc=$.createContext(null);Sc.displayName="DataRouterState";var T_=$.createContext({isTransitioning:!1});T_.displayName="ViewTransition";var oI=$.createContext(new Map);oI.displayName="Fetchers";var aI=$.createContext(null);aI.displayName="Await";var Wn=$.createContext(null);Wn.displayName="Navigation";var cl=$.createContext(null);cl.displayName="Location";var Hn=$.createContext({outlet:null,matches:[],isDataRoute:!1});Hn.displayName="Route";var _f=$.createContext(null);_f.displayName="RouteError";function lI(n,{relative:e}={}){Je(Vo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=$.useContext(Wn),{hash:o,pathname:l,search:h}=hl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Fr([t,l])),i.createHref({pathname:d,search:h,hash:o})}function Vo(){return $.useContext(cl)!=null}function fr(){return Je(Vo(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(cl).location}var I_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function S_(n){$.useContext(Wn).static||$.useLayoutEffect(n)}function Mo(){let{isDataRoute:n}=$.useContext(Hn);return n?II():uI()}function uI(){Je(Vo(),"useNavigate() may be used only in the context of a <Router> component.");let n=$.useContext(Lo),{basename:e,navigator:t}=$.useContext(Wn),{matches:i}=$.useContext(Hn),{pathname:o}=fr(),l=JSON.stringify(gf(i)),h=$.useRef(!1);return S_(()=>{h.current=!0}),$.useCallback((p,y={})=>{if(Bn(h.current,I_),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=yf(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Fr([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}var cI=$.createContext(null);function hI(n){let e=$.useContext(Hn).outlet;return e&&$.createElement(cI.Provider,{value:n},e)}function hl(n,{relative:e}={}){let{matches:t}=$.useContext(Hn),{pathname:i}=fr(),o=JSON.stringify(gf(t));return $.useMemo(()=>yf(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function dI(n,e){return A_(n,e)}function A_(n,e,t,i){var ne;Je(Vo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=$.useContext(Wn),{matches:h}=$.useContext(Hn),d=h[h.length-1],p=d?d.params:{},y=d?d.pathname:"/",E=d?d.pathnameBase:"/",T=d&&d.route;{let Z=T&&T.path||"";R_(y,!T||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let I=fr(),P;if(e){let Z=typeof e=="string"?Oo(e):e;Je(E==="/"||((ne=Z.pathname)==null?void 0:ne.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),P=Z}else P=I;let L=P.pathname||"/",q=L;if(E!=="/"){let Z=E.replace(/^\//,"").split("/");q="/"+L.replace(/^\//,"").split("/").slice(Z.length).join("/")}let b=!l&&t&&t.matches&&t.matches.length>0?t.matches:__(n,{pathname:q});Bn(T||b!=null,`No routes matched location "${P.pathname}${P.search}${P.hash}" `),Bn(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=yI(b&&b.map(Z=>Object.assign({},Z,{params:Object.assign({},p,Z.params),pathname:Fr([E,o.encodeLocation?o.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?E:Fr([E,o.encodeLocation?o.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),h,t,i);return e&&H?$.createElement(cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...P},navigationType:"POP"}},H):H}function fI(){let n=TI(),e=iI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:l},"ErrorBoundary")," or"," ",$.createElement("code",{style:l},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:o},t):null,h)}var pI=$.createElement(fI,null),mI=class extends $.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?$.createElement(Hn.Provider,{value:this.props.routeContext},$.createElement(_f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gI({routeContext:n,match:e,children:t}){let i=$.useContext(Lo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Hn.Provider,{value:n},t)}function yI(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:E,errors:T}=t,I=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,I=!1,P=null,L=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,P=y.route.errorElement||pI,h&&(d<0&&E===0?(R_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,L=null):d===E&&(I=!0,L=y.route.hydrateFallbackElement||null)));let q=e.concat(o.slice(0,E+1)),b=()=>{let H;return T?H=P:I?H=L:y.route.Component?H=$.createElement(y.route.Component,null):y.route.element?H=y.route.element:H=p,$.createElement(gI,{match:y,routeContext:{outlet:p,matches:q,isDataRoute:t!=null},children:H})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?$.createElement(mI,{location:t.location,revalidation:t.revalidation,component:P,error:T,children:b(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):b()},null)}function vf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _I(n){let e=$.useContext(Lo);return Je(e,vf(n)),e}function vI(n){let e=$.useContext(Sc);return Je(e,vf(n)),e}function EI(n){let e=$.useContext(Hn);return Je(e,vf(n)),e}function Ef(n){let e=EI(n),t=e.matches[e.matches.length-1];return Je(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function wI(){return Ef("useRouteId")}function TI(){var i;let n=$.useContext(_f),e=vI("useRouteError"),t=Ef("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function II(){let{router:n}=_I("useNavigate"),e=Ef("useNavigate"),t=$.useRef(!1);return S_(()=>{t.current=!0}),$.useCallback(async(o,l={})=>{Bn(t.current,I_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var $g={};function R_(n,e,t){!e&&!$g[n]&&($g[n]=!0,Bn(!1,t))}$.memo(SI);function SI({routes:n,future:e,state:t}){return A_(n,void 0,t,e)}function AI({to:n,replace:e,state:t,relative:i}){Je(Vo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=$.useContext(Wn);Bn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=$.useContext(Hn),{pathname:h}=fr(),d=Mo(),p=yf(n,gf(l),h,i==="path"),y=JSON.stringify(p);return $.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function RI(n){return hI(n.context)}function Dr(n){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CI({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Je(!Vo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),d=$.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=Oo(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:I="default"}=t,P=$.useMemo(()=>{let L=Ri(p,h);return L==null?null:{location:{pathname:L,search:y,hash:E,state:T,key:I},navigationType:i}},[h,p,y,E,T,I,i]);return Bn(P!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:$.createElement(Wn.Provider,{value:d},$.createElement(cl.Provider,{children:e,value:P}))}function PI({children:n,location:e}){return dI(Bd(n),e)}function Bd(n,e=[]){let t=[];return $.Children.forEach(n,(i,o)=>{if(!$.isValidElement(i))return;let l=[...e,o];if(i.type===$.Fragment){t.push.apply(t,Bd(i.props.children,l));return}Je(i.type===Dr,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Bd(i.props.children,l)),t.push(h)}),t}var Hu="get",Ku="application/x-www-form-urlencoded";function Ac(n){return n!=null&&typeof n.tagName=="string"}function kI(n){return Ac(n)&&n.tagName.toLowerCase()==="button"}function NI(n){return Ac(n)&&n.tagName.toLowerCase()==="form"}function xI(n){return Ac(n)&&n.tagName.toLowerCase()==="input"}function DI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function OI(n,e){return n.button===0&&(!e||e==="_self")&&!DI(n)}var Uu=null;function LI(){if(Uu===null)try{new FormData(document.createElement("form"),0),Uu=!1}catch{Uu=!0}return Uu}var VI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rd(n){return n!=null&&!VI.has(n)?(Bn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ku}"`),null):n}function MI(n,e){let t,i,o,l,h;if(NI(n)){let d=n.getAttribute("action");i=d?Ri(d,e):null,t=n.getAttribute("method")||Hu,o=Rd(n.getAttribute("enctype"))||Ku,l=new FormData(n)}else if(kI(n)||xI(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Ri(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Hu,o=Rd(n.getAttribute("formenctype"))||Rd(d.getAttribute("enctype"))||Ku,l=new FormData(d,n),!LI()){let{name:y,type:E,value:T}=n;if(E==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(Ac(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Hu,i=null,o=Ku,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function wf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function bI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function FI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function UI(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await bI(l,t);return h.links?h.links():[]}return[]}));return $I(i.flat(1).filter(FI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function qg(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function jI(n,e){return zI(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function zI(n){return[...new Set(n)]}function BI(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function $I(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(BI(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function qI(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function WI(){let n=$.useContext(Lo);return wf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function HI(){let n=$.useContext(Sc);return wf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Tf=$.createContext(void 0);Tf.displayName="FrameworkContext";function C_(){let n=$.useContext(Tf);return wf(n,"You must render this element inside a <HydratedRouter> element"),n}function KI(n,e){let t=$.useContext(Tf),[i,o]=$.useState(!1),[l,h]=$.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,I=$.useRef(null);$.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let q=H=>{H.forEach(ne=>{h(ne.isIntersecting)})},b=new IntersectionObserver(q,{threshold:.5});return I.current&&b.observe(I.current),()=>{b.disconnect()}}},[n]),$.useEffect(()=>{if(i){let q=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(q)}}},[i]);let P=()=>{o(!0)},L=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:ja(d,P),onBlur:ja(p,L),onMouseEnter:ja(y,P),onMouseLeave:ja(E,L),onTouchStart:ja(T,P)}]:[!1,I,{}]}function ja(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function GI({page:n,...e}){let{router:t}=WI(),i=$.useMemo(()=>__(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?$.createElement(YI,{page:n,matches:i,...e}):null}function QI(n){let{manifest:e,routeModules:t}=C_(),[i,o]=$.useState([]);return $.useEffect(()=>{let l=!1;return UI(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function YI({page:n,matches:e,...t}){let i=fr(),{manifest:o,routeModules:l}=C_(),{loaderData:h,matches:d}=HI(),p=$.useMemo(()=>qg(n,e,d,o,i,"data"),[n,e,d,o,i]),y=$.useMemo(()=>qg(n,e,d,o,i,"assets"),[n,e,d,o,i]),E=$.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let P=new Set,L=!1;if(e.forEach(b=>{var ne;let H=o.routes[b.route.id];!H||!H.hasLoader||(!p.some(Z=>Z.route.id===b.route.id)&&b.route.id in h&&((ne=l[b.route.id])!=null&&ne.shouldRevalidate)||H.hasClientLoader?L=!0:P.add(b.route.id))}),P.size===0)return[];let q=qI(n);return L&&P.size>0&&q.searchParams.set("_routes",e.filter(b=>P.has(b.route.id)).map(b=>b.route.id).join(",")),[q.pathname+q.search]},[h,i,o,p,e,n,l]),T=$.useMemo(()=>jI(y,o),[y,o]),I=QI(y);return $.createElement($.Fragment,null,E.map(P=>$.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),T.map(P=>$.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),I.map(({key:P,link:L})=>$.createElement("link",{key:P,...L})))}function JI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var P_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{P_&&(window.__reactRouterVersion="7.1.4")}catch{}function XI({basename:n,children:e,window:t}){let i=$.useRef();i.current==null&&(i.current=MT({window:t,v5Compat:!0}));let o=i.current,[l,h]=$.useState({action:o.action,location:o.location}),d=$.useCallback(p=>{$.startTransition(()=>h(p))},[h]);return $.useLayoutEffect(()=>o.listen(d),[o,d]),$.createElement(CI,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var k_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ds=$.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:d,target:p,to:y,preventScrollReset:E,viewTransition:T,...I},P){let{basename:L}=$.useContext(Wn),q=typeof y=="string"&&k_.test(y),b,H=!1;if(typeof y=="string"&&q&&(b=y,P_))try{let R=new URL(window.location.href),N=y.startsWith("//")?new URL(R.protocol+y):new URL(y),O=Ri(N.pathname,L);N.origin===R.origin&&O!=null?y=O+N.search+N.hash:H=!0}catch{Bn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ne=lI(y,{relative:o}),[Z,de,Se]=KI(i,I),Te=tS(y,{replace:h,state:d,target:p,preventScrollReset:E,relative:o,viewTransition:T});function x(R){e&&e(R),R.defaultPrevented||Te(R)}let S=$.createElement("a",{...I,...Se,href:b||ne,onClick:H||l?e:x,ref:JI(P,de),target:p,"data-discover":!q&&t==="render"?"true":void 0});return Z&&!q?$.createElement($.Fragment,null,S,$.createElement(GI,{page:ne})):S});ds.displayName="Link";var N_=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:d,children:p,...y},E){let T=hl(h,{relative:y.relative}),I=fr(),P=$.useContext(Sc),{navigator:L,basename:q}=$.useContext(Wn),b=P!=null&&oS(T)&&d===!0,H=L.encodeLocation?L.encodeLocation(T).pathname:T.pathname,ne=I.pathname,Z=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;t||(ne=ne.toLowerCase(),Z=Z?Z.toLowerCase():null,H=H.toLowerCase()),Z&&q&&(Z=Ri(Z,q)||Z);const de=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Se=ne===H||!o&&ne.startsWith(H)&&ne.charAt(de)==="/",Te=Z!=null&&(Z===H||!o&&Z.startsWith(H)&&Z.charAt(H.length)==="/"),x={isActive:Se,isPending:Te,isTransitioning:b},S=Se?e:void 0,R;typeof i=="function"?R=i(x):R=[i,Se?"active":null,Te?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(x):l;return $.createElement(ds,{...y,"aria-current":S,className:R,ref:E,style:N,to:h,viewTransition:d},typeof p=="function"?p(x):p)});N_.displayName="NavLink";var ZI=$.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=Hu,action:d,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...I},P)=>{let L=iS(),q=sS(d,{relative:y}),b=h.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&k_.test(d),ne=Z=>{if(p&&p(Z),Z.defaultPrevented)return;Z.preventDefault();let de=Z.nativeEvent.submitter,Se=(de==null?void 0:de.getAttribute("formmethod"))||h;L(de||Z.currentTarget,{fetcherKey:e,method:Se,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:T})};return $.createElement("form",{ref:P,method:b,action:q,onSubmit:i?p:ne,...I,"data-discover":!H&&n==="render"?"true":void 0})});ZI.displayName="Form";function eS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function x_(n){let e=$.useContext(Lo);return Je(e,eS(n)),e}function tS(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let d=Mo(),p=fr(),y=hl(n,{relative:l});return $.useCallback(E=>{if(OI(E,e)){E.preventDefault();let T=t!==void 0?t:Za(p)===Za(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,d,y,t,i,e,n,o,l,h])}var nS=0,rS=()=>`__${String(++nS)}__`;function iS(){let{router:n}=x_("useSubmit"),{basename:e}=$.useContext(Wn),t=wI();return $.useCallback(async(i,o={})=>{let{action:l,method:h,encType:d,formData:p,body:y}=MI(i,e);if(o.navigate===!1){let E=o.fetcherKey||rS();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function sS(n,{relative:e}={}){let{basename:t}=$.useContext(Wn),i=$.useContext(Hn);Je(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...hl(n||".",{relative:e})},h=fr();if(n==null){l.search=h.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(E=>E==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let E=d.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Fr([t,l.pathname])),Za(l)}function oS(n,e={}){let t=$.useContext(T_);Je(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=x_("useViewTransitionState"),o=hl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ri(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Ri(t.nextLocation.pathname,i)||t.nextLocation.pathname;return ic(o.pathname,h)!=null||ic(o.pathname,l)!=null}new TextEncoder;function aS(){const[n,e]=$.useState([]),[t,i]=$.useState("https://pokeapi.co/api/v2/pokemon?limit=8"),o=Mo();$.useEffect(()=>{l()},[]);function l(){fetch(t).then(y=>y.json()).then(y=>{Promise.all(y.results.map(E=>fetch(E.url).then(T=>T.json()).then(T=>({...E,image:T.sprites.front_default,shinyImage:T.sprites.front_shiny,id:T.id,types:T.types.map(I=>I.type.name),url:E.url,height:T.height,weight:T.weight,abilities:T.abilities.map(I=>I.ability.name),stats:T.stats.map(I=>({name:I.stat.name,value:I.base_stat}))})))).then(E=>{e(T=>[...T,...E]),i(y.next)})})}function h(){l()}function d(y){o(`/DetallesPokemons/${y.name}`,{state:{pokemon:y}})}function p(y){return y[0]}return W.jsxs("div",{className:"pokedex",children:[W.jsx("ul",{className:"pokemon-list",children:n.map(y=>W.jsxs("li",{className:`pokemon-item ${p(y.types)}`,children:[W.jsx("img",{src:y.image,alt:y.name,className:"pokemon-image"}),W.jsx("p",{className:"pokemon-name",children:y.name})," ",W.jsxs("p",{className:"pokemon-name",children:["# ",y.id]}),W.jsx("button",{onClick:()=>d(y),className:"btn-details",children:"Ver detalles"})]},y.name))}),W.jsx("div",{className:"load-more-container",children:W.jsx("button",{className:"load-more",onClick:h,children:"Cargar más"})})]})}function lS(){return W.jsxs("div",{children:[W.jsx("h1",{children:"404"}),W.jsx("p",{children:"Page not found"})]})}var Wg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},uS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},O_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,d=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let I=(d&15)<<2|y>>6,P=y&63;p||(P=64,h||(I=64)),i.push(t[E],t[T],t[I],t[P])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(D_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):uS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new cS;const I=l<<2|d>>4;if(i.push(I),y!==64){const P=d<<4&240|y>>2;if(i.push(P),T!==64){const L=y<<6&192|T;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hS=function(n){const e=D_(n);return O_.encodeByteArray(e,!0)},sc=function(n){return hS(n).replace(/\./g,"")},L_=function(n){try{return O_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=()=>dS().__FIREBASE_DEFAULTS__,pS=()=>{if(typeof process>"u"||typeof Wg>"u")return;const n=Wg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},mS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&L_(n[1]);return e&&JSON.parse(e)},Rc=()=>{try{return fS()||pS()||mS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},V_=n=>{var e,t;return(t=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},gS=n=>{const e=V_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},M_=()=>{var n;return(n=Rc())===null||n===void 0?void 0:n.config},b_=n=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sc(JSON.stringify(t)),sc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function ES(){var n;const e=(n=Rc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function TS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IS(){const n=jt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function SS(){return!ES()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function U_(){try{return typeof indexedDB=="object"}catch{return!1}}function j_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function AS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="FirebaseError";class Kn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=RS,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?CS(l,i):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Kn(o,d,i)}}function CS(n,e){return n.replace(PS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const PS=/\{\$([^}]+)}/g;function kS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function el(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Hg(l)&&Hg(h)){if(!el(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Hg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ba(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function NS(n,e){const t=new xS(n,e);return t.subscribe.bind(t)}class xS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");DS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Cd),o.error===void 0&&(o.error=Cd),o.complete===void 0&&(o.complete=Cd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=1e3,LS=2,VS=4*60*60*1e3,MS=.5;function Kg(n,e=OS,t=LS){const i=e*Math.pow(t,n),o=Math.round(MS*i*(Math.random()-.5)*2);return Math.min(VS,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new yS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(US(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:FS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FS(n){return n===hs?void 0:n}function US(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const zS={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},BS=Pe.INFO,$S={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},qS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=$S[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=BS,this._logHandler=qS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const WS=(n,e)=>e.some(t=>n instanceof t);let Gg,Qg;function HS(){return Gg||(Gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KS(){return Qg||(Qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z_=new WeakMap,$d=new WeakMap,B_=new WeakMap,Pd=new WeakMap,If=new WeakMap;function GS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ti(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&z_.set(t,n)}).catch(()=>{}),If.set(e,n),e}function QS(n){if($d.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});$d.set(n,e)}let qd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $d.get(n);if(e==="objectStoreNames")return n.objectStoreNames||B_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ti(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function YS(n){qd=n(qd)}function JS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(kd(this),e,...t);return B_.set(i,e.sort?e.sort():[e]),Ti(i)}:KS().includes(n)?function(...e){return n.apply(kd(this),e),Ti(z_.get(this))}:function(...e){return Ti(n.apply(kd(this),e))}}function XS(n){return typeof n=="function"?JS(n):(n instanceof IDBTransaction&&QS(n),WS(n,HS())?new Proxy(n,qd):n)}function Ti(n){if(n instanceof IDBRequest)return GS(n);if(Pd.has(n))return Pd.get(n);const e=XS(n);return e!==n&&(Pd.set(n,e),If.set(e,n)),e}const kd=n=>If.get(n);function $_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),d=Ti(h);return i&&h.addEventListener("upgradeneeded",p=>{i(Ti(h.result),p.oldVersion,p.newVersion,Ti(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const ZS=["get","getKey","getAll","getAllKeys","count"],e0=["put","add","delete","clear"],Nd=new Map;function Yg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Nd.get(e))return Nd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=e0.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||ZS.includes(t)))return;const l=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Nd.set(e,l),l}YS(n=>({...n,get:(e,t,i)=>Yg(e,t)||n.get(e,t,i),has:(e,t)=>!!Yg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(n0(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function n0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wd="@firebase/app",Jg="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Cc("@firebase/app"),r0="@firebase/app-compat",i0="@firebase/analytics-compat",s0="@firebase/analytics",o0="@firebase/app-check-compat",a0="@firebase/app-check",l0="@firebase/auth",u0="@firebase/auth-compat",c0="@firebase/database",h0="@firebase/data-connect",d0="@firebase/database-compat",f0="@firebase/functions",p0="@firebase/functions-compat",m0="@firebase/installations",g0="@firebase/installations-compat",y0="@firebase/messaging",_0="@firebase/messaging-compat",v0="@firebase/performance",E0="@firebase/performance-compat",w0="@firebase/remote-config",T0="@firebase/remote-config-compat",I0="@firebase/storage",S0="@firebase/storage-compat",A0="@firebase/firestore",R0="@firebase/vertexai",C0="@firebase/firestore-compat",P0="firebase",k0="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="[DEFAULT]",N0={[Wd]:"fire-core",[r0]:"fire-core-compat",[s0]:"fire-analytics",[i0]:"fire-analytics-compat",[a0]:"fire-app-check",[o0]:"fire-app-check-compat",[l0]:"fire-auth",[u0]:"fire-auth-compat",[c0]:"fire-rtdb",[h0]:"fire-data-connect",[d0]:"fire-rtdb-compat",[f0]:"fire-fn",[p0]:"fire-fn-compat",[m0]:"fire-iid",[g0]:"fire-iid-compat",[y0]:"fire-fcm",[_0]:"fire-fcm-compat",[v0]:"fire-perf",[E0]:"fire-perf-compat",[w0]:"fire-rc",[T0]:"fire-rc-compat",[I0]:"fire-gcs",[S0]:"fire-gcs-compat",[A0]:"fire-fst",[C0]:"fire-fst-compat",[R0]:"fire-vertex","fire-js":"fire-js",[P0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map,x0=new Map,Kd=new Map;function Xg(n,e){try{n.container.addComponent(e)}catch(t){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hr(n){const e=n.name;if(Kd.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;Kd.set(e,n);for(const t of oc.values())Xg(t,n);for(const t of x0.values())Xg(t,n);return!0}function Ts(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function jn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new ws("app","Firebase",D0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=k0;function q_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Hd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ii.create("bad-app-name",{appName:String(o)});if(t||(t=M_()),!t)throw Ii.create("no-options");const l=oc.get(o);if(l){if(el(t,l.options)&&el(i,l.config))return l;throw Ii.create("duplicate-app",{appName:o})}const h=new jS(o);for(const p of Kd.values())h.addComponent(p);const d=new O0(t,i,h);return oc.set(o,d),d}function Sf(n=Hd){const e=oc.get(n);if(!e&&n===Hd&&M_())return q_();if(!e)throw Ii.create("no-app",{appName:n});return e}function In(n,e,t){var i;let o=(i=N0[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(d.join(" "));return}hr(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="firebase-heartbeat-database",V0=1,tl="firebase-heartbeat-store";let xd=null;function W_(){return xd||(xd=$_(L0,V0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ii.create("idb-open",{originalErrorMessage:n.message})})),xd}async function M0(n){try{const t=(await W_()).transaction(tl),i=await t.objectStore(tl).get(H_(n));return await t.done,i}catch(e){if(e instanceof Kn)zr.warn(e.message);else{const t=Ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zr.warn(t.message)}}}async function Zg(n,e){try{const i=(await W_()).transaction(tl,"readwrite");await i.objectStore(tl).put(e,H_(n)),await i.done}catch(t){if(t instanceof Kn)zr.warn(t.message);else{const i=Ii.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});zr.warn(i.message)}}}function H_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=1024,F0=30*24*60*60*1e3;class U0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new z0(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ey();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const d=new Date(h.date).valueOf();return Date.now()-d<=F0}),this._storage.overwrite(this._heartbeatsCache))}catch(i){zr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ey(),{heartbeatsToSend:i,unsentEntries:o}=j0(this._heartbeatsCache.heartbeats),l=sc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return zr.warn(t),""}}}function ey(){return new Date().toISOString().substring(0,10)}function j0(n,e=b0){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),ty(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ty(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class z0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U_()?j_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await M0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ty(n){return sc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n){hr(new $n("platform-logger",e=>new t0(e),"PRIVATE")),hr(new $n("heartbeat",e=>new U0(e),"PRIVATE")),In(Wd,Jg,n),In(Wd,Jg,"esm2017"),In("fire-js","")}B0("");function Af(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function K_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $0=K_,G_=new ws("auth","Firebase",K_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Cc("@firebase/auth");function q0(n,...e){ac.logLevel<=Pe.WARN&&ac.warn(`Auth (${bo}): ${n}`,...e)}function Gu(n,...e){ac.logLevel<=Pe.ERROR&&ac.error(`Auth (${bo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n,...e){throw Cf(n,...e)}function zn(n,...e){return Cf(n,...e)}function Rf(n,e,t){const i=Object.assign(Object.assign({},$0()),{[e]:t});return new ws("auth","Firebase",i).create(e,{appName:n.name})}function Ur(n){return Rf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function W0(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Sn(n,"argument-error"),Rf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return G_.create(n,...e)}function _e(n,e,...t){if(!n)throw Cf(e,...t)}function Vr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gu(e),new Error(e)}function Br(n,e){n||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function H0(){return ny()==="http:"||ny()==="https:"}function ny(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H0()||F_()||"connection"in navigator)?navigator.onLine:!0}function G0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Br(t>e,"Short delay should be less than long delay!"),this.isMobile=vS()||TS()}get(){return K0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n,e){Br(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=new fl(3e4,6e4);function Di(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Oi(n,e,t,i,o={}){return Y_(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const d=dl(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return wS()||(y.referrerPolicy="no-referrer"),Q_.fetch()(J_(n,n.config.apiHost,t,d),y)})}async function Y_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Q0),e);try{const o=new X0(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ju(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ju(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw ju(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw ju(n,"user-disabled",h);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Rf(n,E,y);Sn(n,E)}}catch(o){if(o instanceof Kn)throw o;Sn(n,"network-request-failed",{message:String(o)})}}async function pl(n,e,t,i,o={}){const l=await Oi(n,e,t,i,o);return"mfaPendingCredential"in l&&Sn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function J_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Pf(n.config,o):`${n.config.apiScheme}://${o}`}function J0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(zn(this.auth,"network-request-failed")),Y0.get())})}}function ju(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=zn(n,e,i);return o.customData._tokenResponse=t,o}function ry(n){return n!==void 0&&n.enterprise!==void 0}class Z0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return J0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eA(n,e){return Oi(n,"GET","/v2/recaptchaConfig",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(n,e){return Oi(n,"POST","/v1/accounts:delete",e)}async function X_(n,e){return Oi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nA(n,e=!1){const t=ct(n),i=await t.getIdToken(e),o=kf(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ka(Dd(o.auth_time)),issuedAtTime:Ka(Dd(o.iat)),expirationTime:Ka(Dd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Dd(n){return Number(n)*1e3}function kf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Gu("JWT malformed, contained fewer than 3 sections"),null;try{const o=L_(t);return o?JSON.parse(o):(Gu("Failed to decode base64 JWT payload"),null)}catch(o){return Gu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function iy(n){const e=kf(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Kn&&rA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function rA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ka(this.lastLoginAt),this.creationTime=Ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await nl(n,X_(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Z_(l.providerUserInfo):[],d=oA(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Qd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function sA(n){const e=ct(n);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Z_(n){return n.map(e=>{var{providerId:t}=e,i=Af(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(n,e){const t=await Y_(n,{},async()=>{const i=dl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=J_(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Q_.fetch()(h,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lA(n,e){return Oi(n,"POST","/v2/accounts:revokeToken",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=iy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await aA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new To;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Qd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await nl(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await lc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await nl(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,d,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,L=(h=t.photoURL)!==null&&h!==void 0?h:void 0,q=(d=t.tenantId)!==null&&d!==void 0?d:void 0,b=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,ne=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Z,emailVerified:de,isAnonymous:Se,providerData:Te,stsTokenManager:x}=t;_e(Z&&x,e,"internal-error");const S=To.fromJSON(this.name,x);_e(typeof Z=="string",e,"internal-error"),_i(T,e.name),_i(I,e.name),_e(typeof de=="boolean",e,"internal-error"),_e(typeof Se=="boolean",e,"internal-error"),_i(P,e.name),_i(L,e.name),_i(q,e.name),_i(b,e.name),_i(H,e.name),_i(ne,e.name);const R=new Mr({uid:Z,auth:e,email:I,emailVerified:de,displayName:T,isAnonymous:Se,photoURL:L,phoneNumber:P,tenantId:q,stsTokenManager:S,createdAt:H,lastLoginAt:ne});return Te&&Array.isArray(Te)&&(R.providerData=Te.map(N=>Object.assign({},N))),b&&(R._redirectEventId=b),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new To;o.updateFromServerResponse(t);const l=new Mr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await lc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Z_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new To;d.updateFromIdToken(i);const p=new Mr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Qd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new Map;function br(n){Br(n instanceof Function,"Expected a class definition");let e=sy.get(n);return e?(Br(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ev.type="NONE";const oy=ev;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n,e,t){return`firebase:${n}:${e}:${t}`}class Io{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Qu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Qu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Io(br(oy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||br(oy);const h=Qu(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const E=await y._get(h);if(E){const T=Mr._fromJSON(e,E);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Io(l,e,i):(l=p[0],d&&await l._set(h,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Io(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ov(e))return"Blackberry";if(av(e))return"Webos";if(nv(e))return"Safari";if((e.includes("chrome/")||rv(e))&&!e.includes("edge/"))return"Chrome";if(sv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function tv(n=jt()){return/firefox\//i.test(n)}function nv(n=jt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rv(n=jt()){return/crios\//i.test(n)}function iv(n=jt()){return/iemobile/i.test(n)}function sv(n=jt()){return/android/i.test(n)}function ov(n=jt()){return/blackberry/i.test(n)}function av(n=jt()){return/webos/i.test(n)}function Nf(n=jt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function uA(n=jt()){var e;return Nf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cA(){return IS()&&document.documentMode===10}function lv(n=jt()){return Nf(n)||sv(n)||av(n)||ov(n)||/windows phone/i.test(n)||iv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(n,e=[]){let t;switch(n){case"Browser":t=ay(jt());break;case"Worker":t=`${ay(jt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,d)=>{try{const p=e(l);h(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(n,e={}){return Oi(n,"GET","/v2/passwordPolicy",Di(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=6;class pA{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:fA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ly(this),this.idTokenSubscription=new ly(this),this.beforeStateQueue=new hA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await X_(this,{idToken:e}),i=await Mr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(jn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=G0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(Ur(this));const t=e?ct(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dA(this),t=new pA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await lA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&q0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Hr(n){return ct(n)}class ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=NS(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gA(n){Pc=n}function cv(n){return Pc.loadJS(n)}function yA(){return Pc.recaptchaEnterpriseScript}function _A(){return Pc.gapiScript}function vA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class EA{constructor(){this.enterprise=new wA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class wA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const TA="recaptcha-enterprise",hv="NO_RECAPTCHA";class IA{constructor(e){this.type=TA,this.auth=Hr(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,d)=>{eA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new Z0(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,h,d){const p=window.grecaptcha;ry(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(hv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new EA().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(d=>{if(!t&&ry(window.grecaptcha))o(d,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=yA();p.length!==0&&(p+=d),cv(p).then(()=>{o(d,l,h)}).catch(y=>{h(y)})}}).catch(d=>{h(d)})})}}async function uy(n,e,t,i=!1,o=!1){const l=new IA(n);let h;if(o)h=hv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Yd(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await uy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await uy(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(n,e){const t=Ts(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(el(l,e??{}))return o;Sn(o,"already-initialized")}return t.initialize({options:e})}function AA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function RA(n,e,t){const i=Hr(n);_e(i._canInitEmulator,i,"emulator-config-failed"),_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=dv(e),{host:h,port:d}=CA(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),PA()}function dv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function CA(n){const e=dv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:cy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:cy(h)}}}function cy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function PA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function kA(n,e){return Oi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(n,e){return pl(n,"POST","/v1/accounts:signInWithPassword",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(n,e){return pl(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}async function DA(n,e){return pl(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends xf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new rl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new rl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,t,"signInWithPassword",NA);case"emailLink":return xA(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,i,"signUpPassword",kA);case"emailLink":return DA(e,{idToken:t,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(n,e){return pl(n,"POST","/v1/accounts:signInWithIdp",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="http://localhost";class gs extends xf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Af(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new gs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,So(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:OA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VA(n){const e=za(Ba(n)).link,t=e?za(Ba(e)).deep_link_id:null,i=za(Ba(n)).deep_link_id;return(i?za(Ba(i)).link:null)||i||t||e||n}class Df{constructor(e){var t,i,o,l,h,d;const p=za(Ba(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,T=LA((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=VA(e);try{return new Df(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,t){return rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Df.parseLink(t);return _e(i,"argument-error"),rl._fromEmailAndCode(e,i.code,i.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Of{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends ml{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.FACEBOOK_SIGN_IN_METHOD="facebook.com";vi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ml{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return or.credential(t,i)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends ml{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.GITHUB_SIGN_IN_METHOD="github.com";Lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends ml{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ei.credential(t,i)}catch{return null}}}Ei.TWITTER_SIGN_IN_METHOD="twitter.com";Ei.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(n,e){return pl(n,"POST","/v1/accounts:signUp",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Mr._fromIdTokenResponse(e,i,o),h=hy(i);return new ys({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=hy(i);return new ys({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function hy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends Kn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new uc(e,t,i,o)}}function fv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(n,l,e,i):l})}async function bA(n,e,t=!1){const i=await nl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ys._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(n,e,t=!1){const{auth:i}=n;if(jn(i.app))return Promise.reject(Ur(i));const o="reauthenticate";try{const l=await nl(n,fv(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=kf(l.idToken);_e(h,i,"internal-error");const{sub:d}=h;return _e(n.uid===d,i,"user-mismatch"),ys._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Sn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(n,e,t=!1){if(jn(n.app))return Promise.reject(Ur(n));const i="signIn",o=await fv(n,i,e),l=await ys._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function UA(n,e){return pv(Hr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(n){const e=Hr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jA(n,e,t){if(jn(n.app))return Promise.reject(Ur(n));const i=Hr(n),h=await Yd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&mv(n),p}),d=await ys._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(d.user),d}function zA(n,e,t){return jn(n.app)?Promise.reject(Ur(n)):UA(ct(n),Fo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&mv(n),i})}function BA(n,e,t,i){return ct(n).onIdTokenChanged(e,t,i)}function $A(n,e,t){return ct(n).beforeAuthStateChanged(e,t)}function Lf(n,e,t,i){return ct(n).onAuthStateChanged(e,t,i)}function qA(n){return ct(n).signOut()}const cc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=1e3,HA=10;class yv extends gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);cA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,HA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yv.type="LOCAL";const KA=yv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v extends gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_v.type="SESSION";const vv=_v;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new kc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(h).map(async y=>y(t.origin,l)),p=await GA(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((d,p)=>{const y=Vf("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){return window}function YA(n){ar().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function JA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ZA(){return Ev()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="firebaseLocalStorageDb",eR=1,hc="firebaseLocalStorage",Tv="fbase_key";class gl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nc(n,e){return n.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function tR(){const n=indexedDB.deleteDatabase(wv);return new gl(n).toPromise()}function Jd(){const n=indexedDB.open(wv,eR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(hc,{keyPath:Tv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(hc)?e(i):(i.close(),await tR(),e(await Jd()))})})}async function dy(n,e,t){const i=Nc(n,!0).put({[Tv]:e,value:t});return new gl(i).toPromise()}async function nR(n,e){const t=Nc(n,!1).get(e),i=await new gl(t).toPromise();return i===void 0?null:i.value}function fy(n,e){const t=Nc(n,!0).delete(e);return new gl(t).toPromise()}const rR=800,iR=3;class Iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>iR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ev()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(ZA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await JA(),!this.activeServiceWorker)return;this.sender=new QA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jd();return await dy(e,cc,"1"),await fy(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>dy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>nR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Nc(o,!1).getAll();return new gl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iv.type="LOCAL";const sR=Iv;new fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n,e){return e?br(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends xf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oR(n){return pv(n.auth,new Mf(n),n.bypassAuthState)}function aR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),FA(t,new Mf(n),n.bypassAuthState)}async function lR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),bA(t,new Mf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oR;case"linkViaPopup":case"linkViaRedirect":return lR;case"reauthViaPopup":case"reauthViaRedirect":return aR;default:Sn(this.auth,"internal-error")}}resolve(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new fl(2e3,1e4);async function py(n,e,t){if(jn(n.app))return Promise.reject(zn(n,"operation-not-supported-in-this-environment"));const i=Hr(n);W0(n,e,Of);const o=Sv(i,t);return new fs(i,"signInViaPopup",e,o).executeNotNull()}class fs extends Av{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Br(this.filter.length===1,"Popup operations only handle one event");const e=Vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uR.get())};e()}}fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="pendingRedirect",Yu=new Map;class hR extends Av{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const i=await dR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dR(n,e){const t=mR(e),i=pR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function fR(n,e){Yu.set(n._key(),e)}function pR(n){return br(n._redirectPersistence)}function mR(n){return Qu(cR,n.config.apiKey,n.name)}async function gR(n,e){return await Hr(n)._initializationPromise,Rv(n,e,!1)}async function Rv(n,e,t=!1){if(jn(n.app))return Promise.reject(Ur(n));const i=Hr(n),o=Sv(i,e),h=await new hR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=10*60*1e3;class _R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Cv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yR&&this.cachedEventUids.clear(),this.cachedEventUids.has(my(e))}saveEventToCache(e){this.cachedEventUids.add(my(e)),this.lastProcessedEventTime=Date.now()}}function my(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(n,e={}){return Oi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TR=/^https?/;async function IR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ER(n);for(const t of e)try{if(SR(t))return}catch{}Sn(n,"unauthorized-domain")}function SR(n){const e=Gd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!TR.test(t))return!1;if(wR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=new fl(3e4,6e4);function gy(){const n=ar().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function RR(n){return new Promise((e,t)=>{var i,o,l;function h(){gy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gy(),t(zn(n,"network-request-failed"))},timeout:AR.get()})}if(!((o=(i=ar().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ar().gapi)===null||l===void 0)&&l.load)h();else{const d=vA("iframefcb");return ar()[d]=()=>{gapi.load?h():t(zn(n,"network-request-failed"))},cv(`${_A()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function CR(n){return Ju=Ju||RR(n),Ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=new fl(5e3,15e3),kR="__/auth/iframe",NR="emulator/auth/iframe",xR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OR(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pf(e,NR):`https://${n.config.authDomain}/${kR}`,i={apiKey:e.apiKey,appName:n.name,v:bo},o=DR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${dl(i).slice(1)}`}async function LR(n){const e=await CR(n),t=ar().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:OR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=zn(n,"network-request-failed"),d=ar().setTimeout(()=>{l(h)},PR.get());function p(){ar().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MR=500,bR=600,FR="_blank",UR="http://localhost";class yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jR(n,e,t,i=MR,o=bR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},VR),{width:i.toString(),height:o.toString(),top:l,left:h}),y=jt().toLowerCase();t&&(d=rv(y)?FR:t),tv(y)&&(e=e||UR,p.scrollbars="yes");const E=Object.entries(p).reduce((I,[P,L])=>`${I}${P}=${L},`,"");if(uA(y)&&d!=="_self")return zR(e||"",d),new yy(null);const T=window.open(e||"",d,E);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new yy(T)}function zR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="__/auth/handler",$R="emulator/auth/handler",qR=encodeURIComponent("fac");async function _y(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:bo,eventId:o};if(e instanceof Of){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",kS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof ml){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await n._getAppCheckToken(),y=p?`#${qR}=${encodeURIComponent(p)}`:"";return`${WR(n)}?${dl(d).slice(1)}${y}`}function WR({config:n}){return n.emulator?Pf(n,$R):`https://${n.authDomain}/${BR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="webStorageSupport";class HR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vv,this._completeRedirectFn=Rv,this._overrideRedirectResult=fR}async _openPopup(e,t,i,o){var l;Br((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await _y(e,t,i,Gd(),o);return jR(e,h,Vf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await _y(e,t,i,Gd(),o);return YA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Br(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await LR(e),i=new _R(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Od,{type:Od},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Od];h!==void 0&&t(!!h),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=IR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lv()||nv()||Nf()}}const KR=HR;var vy="@firebase/auth",Ey="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YR(n){hr(new $n("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uv(n)},y=new mA(i,o,l,p);return AA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),hr(new $n("auth-internal",e=>{const t=Hr(e.getProvider("auth").getImmediate());return(i=>new GR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(vy,Ey,QR(n)),In(vy,Ey,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=5*60,XR=b_("authIdTokenMaxAge")||JR;let wy=null;const ZR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>XR)return;const o=t==null?void 0:t.token;wy!==o&&(wy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Pv(n=Sf()){const e=Ts(n,"auth");if(e.isInitialized())return e.getImmediate();const t=SA(n,{popupRedirectResolver:KR,persistence:[sR,KA,vv]}),i=b_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=ZR(l.toString());$A(t,h,()=>h(t.currentUser)),BA(t,d=>h(d))}}const o=V_("auth");return o&&RA(t,`http://${o}`),t}function eC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=zn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",eC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YR("Browser");function tC(){let[n,e]=$.useState(null);const t=Pv();return $.useEffect(()=>{Lf(t,i=>{i?(e(W.jsx(RI,{})),console.log("SALTA CAMBIO EN LOGIN CON USER = "+i.displayName)):(console.log("Cierra sesión"),e(W.jsx(AI,{to:"/Login"})))})},[]),n}function nC(){const n=Mo();function e(){n("/PokemosApi")}return W.jsxs("div",{className:"landing-container",children:[W.jsxs("header",{className:"hero",children:[W.jsx("h1",{children:"¡DESCUBRE EL MUNDO POKÉMON!"}),W.jsx("p",{children:"Explora más de 1000 Pokémon en la Pokédex y demuestra tu conocimiento con un juego interactivo."}),W.jsx("button",{onClick:e,className:"cta-button",children:"Explorar Pokédex"})]}),W.jsxs("section",{className:"features",children:[W.jsxs("div",{className:"feature",children:[W.jsx("h2",{children:"Explora la Pokédex"}),W.jsx("p",{children:"Descubre información detallada de todos los Pokémon."})]}),W.jsxs("div",{className:"feature",children:[W.jsx("h2",{children:"Pon a prueba tu conocimiento"}),W.jsx("p",{children:"Juega y demuestra cuánto sabes sobre Pokémon."})]}),W.jsxs("div",{className:"feature",children:[W.jsx("h2",{children:"Diseño atractivo"}),W.jsx("p",{children:"Una interfaz amigable para fans de todas las edades."})]})]})]})}var Ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,kv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function R(){}R.prototype=S.prototype,x.D=S.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(N,O,M){for(var C=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)C[nt-2]=arguments[nt];return S.prototype[O].apply(N,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)N[O]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(O=0;16>O;++O)N[O]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=x.g[0],R=x.g[1],O=x.g[2];var M=x.g[3],C=S+(M^R&(O^M))+N[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+N[1]+3905402710&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+N[2]+606105819&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+N[3]+3250441966&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(M^R&(O^M))+N[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+N[5]+1200080426&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+N[6]+2821735955&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+N[7]+4249261313&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(M^R&(O^M))+N[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+N[9]+2336552879&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+N[10]+4294925233&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+N[11]+2304563134&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(M^R&(O^M))+N[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+N[13]+4254626195&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+N[14]+2792965006&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+N[15]+1236535329&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(O^M&(R^O))+N[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+N[6]+3225465664&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+N[11]+643717713&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+N[0]+3921069994&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(R^O))+N[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+N[10]+38016083&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+N[15]+3634488961&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+N[4]+3889429448&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(R^O))+N[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+N[14]+3275163606&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+N[3]+4107603335&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+N[8]+1163531501&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(R^O))+N[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+N[2]+4243563512&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+N[7]+1735328473&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+N[12]+2368359562&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(R^O^M)+N[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+N[8]+2272392833&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+N[11]+1839030562&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+N[14]+4259657740&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(R^O^M)+N[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+N[4]+1272893353&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+N[7]+4139469664&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+N[10]+3200236656&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(R^O^M)+N[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+N[0]+3936430074&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+N[3]+3572445317&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+N[6]+76029189&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(R^O^M)+N[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+N[12]+3873151461&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+N[15]+530742520&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+N[2]+3299628645&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(O^(R|~M))+N[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+N[7]+1126891415&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+N[14]+2878612391&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+N[5]+4237533241&4294967295,R=O+(C<<21&4294967295|C>>>11),C=S+(O^(R|~M))+N[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+N[3]+2399980690&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+N[10]+4293915773&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+N[1]+2240044497&4294967295,R=O+(C<<21&4294967295|C>>>11),C=S+(O^(R|~M))+N[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+N[15]+4264355552&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+N[6]+2734768916&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+N[13]+1309151649&4294967295,R=O+(C<<21&4294967295|C>>>11),C=S+(O^(R|~M))+N[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+N[11]+3174756917&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+N[2]+718787259&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+N[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+M&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var R=S-this.blockSize,N=this.B,O=this.h,M=0;M<S;){if(O==0)for(;M<=R;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<S;)if(N[O++]=x.charCodeAt(M++),O==this.blockSize){o(this,N),O=0;break}}else for(;M<S;)if(N[O++]=x[M++],O==this.blockSize){o(this,N),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var R=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=R&255,R/=256;for(this.u(x),x=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)x[R++]=this.g[S]>>>N&255;return x};function l(x,S){var R=d;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=S(x)}function h(x,S){this.h=S;for(var R=[],N=!0,O=x.length-1;0<=O;O--){var M=x[O]|0;N&&M==S||(R[O]=M,N=!1)}this.g=R}var d={};function p(x){return-128<=x&&128>x?l(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return b(y(-x));for(var S=[],R=1,N=0;x>=R;N++)S[N]=x/R|0,R*=4294967296;return new h(S,0)}function E(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return b(E(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),N=T,O=0;O<x.length;O+=8){var M=Math.min(8,x.length-O),C=parseInt(x.substring(O,O+M),S);8>M?(M=y(Math.pow(S,M)),N=N.j(M).add(y(C))):(N=N.j(R),N=N.add(y(C)))}return N}var T=p(0),I=p(1),P=p(16777216);n=h.prototype,n.m=function(){if(q(this))return-b(this).m();for(var x=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);x+=(0<=N?N:4294967296+N)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(L(this))return"0";if(q(this))return"-"+b(this).toString(x);for(var S=y(Math.pow(x,6)),R=this,N="";;){var O=de(R,S).g;R=H(R,O.j(S));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=O,L(R))return M+N;for(;6>M.length;)M="0"+M;N=M+N}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function L(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function q(x){return x.h==-1}n.l=function(x){return x=H(this,x),q(x)?-1:L(x)?0:1};function b(x){for(var S=x.g.length,R=[],N=0;N<S;N++)R[N]=~x.g[N];return new h(R,~x.h).add(I)}n.abs=function(){return q(this)?b(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],N=0,O=0;O<=S;O++){var M=N+(this.i(O)&65535)+(x.i(O)&65535),C=(M>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);N=C>>>16,M&=65535,C&=65535,R[O]=C<<16|M}return new h(R,R[R.length-1]&-2147483648?-1:0)};function H(x,S){return x.add(b(S))}n.j=function(x){if(L(this)||L(x))return T;if(q(this))return q(x)?b(this).j(b(x)):b(b(this).j(x));if(q(x))return b(this.j(b(x)));if(0>this.l(P)&&0>x.l(P))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<x.g.length;O++){var M=this.i(N)>>>16,C=this.i(N)&65535,nt=x.i(O)>>>16,xt=x.i(O)&65535;R[2*N+2*O]+=C*xt,ne(R,2*N+2*O),R[2*N+2*O+1]+=M*xt,ne(R,2*N+2*O+1),R[2*N+2*O+1]+=C*nt,ne(R,2*N+2*O+1),R[2*N+2*O+2]+=M*nt,ne(R,2*N+2*O+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new h(R,0)};function ne(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function Z(x,S){this.g=x,this.h=S}function de(x,S){if(L(S))throw Error("division by zero");if(L(x))return new Z(T,T);if(q(x))return S=de(b(x),S),new Z(b(S.g),b(S.h));if(q(S))return S=de(x,b(S)),new Z(b(S.g),S.h);if(30<x.g.length){if(q(x)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,N=S;0>=N.l(x);)R=Se(R),N=Se(N);var O=Te(R,1),M=Te(N,1);for(N=Te(N,2),R=Te(R,2);!L(N);){var C=M.add(N);0>=C.l(x)&&(O=O.add(R),M=C),N=Te(N,1),R=Te(R,1)}return S=H(x,O.j(S)),new Z(O,S)}for(O=T;0<=x.l(S);){for(R=Math.max(1,Math.floor(x.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),M=y(R),C=M.j(S);q(C)||0<C.l(x);)R-=N,M=y(R),C=M.j(S);L(M)&&(M=I),O=O.add(M),x=H(x,C)}return new Z(O,x)}n.A=function(x){return de(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&x.i(N);return new h(R,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|x.i(N);return new h(R,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^x.i(N);return new h(R,this.h^x.h)};function Se(x){for(var S=x.g.length+1,R=[],N=0;N<S;N++)R[N]=x.i(N)<<1|x.i(N-1)>>>31;return new h(R,x.h)}function Te(x,S){var R=S>>5;S%=32;for(var N=x.g.length-R,O=[],M=0;M<N;M++)O[M]=0<S?x.i(M+R)>>>S|x.i(M+R+1)<<32-S:x.i(M+R);return new h(O,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,kv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,Si=h}).apply(typeof Ty<"u"?Ty:typeof self<"u"?self:typeof window<"u"?window:{});var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nv,$a,xv,Xu,Xd,Dv,Ov,Lv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof zu=="object"&&zu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var F=u[w];if(!(F in _))break e;_=_[F]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,F={next:function(){if(!w&&_<u.length){var B=_++;return{value:m(B,u[B]),done:!1}}return w=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,w),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,I.apply(null,arguments)}function P(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function L(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,F,B){for(var te=Array(arguments.length-2),je=2;je<arguments.length;je++)te[je-2]=arguments[je];return m.prototype[F].apply(w,te)}}function q(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function b(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const F=u.length||0,B=w.length||0;u.length=F+B;for(let te=0;te<B;te++)u[F+te]=w[te]}else u.push(w)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ne(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function de(u){return de[" "](u),u}de[" "]=function(){};var Se=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function Te(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function x(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let _,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(_ in w)u[_]=w[_];for(let B=0;B<R.length;B++)_=R[B],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){d.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class nt{constructor(){this.h=this.g=null}add(m,_){const w=xt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var xt=new H(()=>new Dt,u=>u.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,re=!1,me=new nt,se=()=>{const u=d.Promise.resolve(void 0);ze=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var m=xt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Re(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Se){e:{try{de(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}L(Re,fe);var De={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,m,_,w,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=F,this.key=++Fe,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,m,_,w,F){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var te=Kr(u,m,w,F);return-1<te?(m=u[te],_||(m.fa=!1)):(m=new $e(m,this.src,B,!!w,F),m.fa=_,u.push(m)),m};function As(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],F=Array.prototype.indexOf.call(w,m,void 0),B;(B=0<=F)&&Array.prototype.splice.call(w,F,1),B&&(_t(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Kr(u,m,_,w){for(var F=0;F<u.length;++F){var B=u[F];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==w)return F}return-1}var bi="closure_lm_"+(1e6*Math.random()|0),Rs={};function qo(u,m,_,w,F){if(Array.isArray(m)){for(var B=0;B<m.length;B++)qo(u,m[B],_,w,F);return null}return _=Ko(_),u&&u[be]?u.K(m,_,y(w)?!!w.capture:!1,F):Wo(u,m,_,!1,w,F)}function Wo(u,m,_,w,F,B){if(!m)throw Error("Invalid event type");var te=y(F)?!!F.capture:!!F,je=Ps(u);if(je||(u[bi]=je=new pr(u)),_=je.add(m,_,w,te,B),_.proxy)return _;if(w=Il(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Ae||(F=te),F===void 0&&(F=!1),u.addEventListener(m.toString(),w,F);else if(u.attachEvent)u.attachEvent(gr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Il(){function u(_){return m.call(u.src,u.listener,_)}const m=Ho;return u}function Cs(u,m,_,w,F){if(Array.isArray(m))for(var B=0;B<m.length;B++)Cs(u,m[B],_,w,F);else w=y(w)?!!w.capture:!!w,_=Ko(_),u&&u[be]?(u=u.i,m=String(m).toString(),m in u.g&&(B=u.g[m],_=Kr(B,_,w,F),-1<_&&(_t(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ps(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Kr(m,_,w,F)),(_=-1<u?m[u]:null)&&mr(_))}function mr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[be])As(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(gr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Ps(m))?(As(_,u),_.h==0&&(_.src=null,m[bi]=null)):_t(u)}}}function gr(u){return u in Rs?Rs[u]:Rs[u]="on"+u}function Ho(u,m){if(u.da)u=!0;else{m=new Re(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&mr(u),u=_.call(w,m)}return u}function Ps(u){return u=u[bi],u instanceof pr?u:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ko(u){return typeof u=="function"?u:(u[ks]||(u[ks]=function(m){return u.handleEvent(m)}),u[ks])}function ht(){Q.call(this),this.i=new pr(this),this.M=this,this.F=null}L(ht,Q),ht.prototype[be]=!0,ht.prototype.removeEventListener=function(u,m,_,w){Cs(this,u,m,_,w)};function dt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var F=m;m=new fe(w,u),N(m,F)}if(F=!0,_)for(var B=_.length-1;0<=B;B--){var te=m.g=_[B];F=yr(te,w,!0,m)&&F}if(te=m.g=u,F=yr(te,w,!0,m)&&F,F=yr(te,w,!1,m)&&F,_)for(B=0;B<_.length;B++)te=m.g=_[B],F=yr(te,w,!1,m)&&F}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)_t(_[w]);delete u.g[m],u.h--}}this.F=null},ht.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ht.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function yr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,B=0;B<m.length;++B){var te=m[B];if(te&&!te.da&&te.capture==_){var je=te.listener,ft=te.ha||te.src;te.fa&&As(u.i,te),F=je.call(ft,w)!==!1&&F}}return F&&!w.defaultPrevented}function Go(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Gr(u){u.g=Go(()=>{u.g=null,u.i&&(u.i=!1,Gr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Fi extends Q{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Gr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ui(u){Q.call(this),this.h=u,this.g={}}L(Ui,Q);var Qo=[];function Yo(u){Te(u.g,function(m,_){this.g.hasOwnProperty(_)&&mr(m)},u),u.g={}}Ui.prototype.N=function(){Ui.aa.N.call(this),Yo(this)},Ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=d.JSON.stringify,Xo=d.JSON.parse,Zo=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function ji(){}ji.prototype.h=null;function Ns(u){return u.h||(u.h=u.i())}function xs(){}var fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gn(){fe.call(this,"d")}L(Gn,fe);function Ds(){fe.call(this,"c")}L(Ds,fe);var Qn={},ea=null;function zi(){return ea=ea||new ht}Qn.La="serverreachability";function ta(u){fe.call(this,Qn.La,u)}L(ta,fe);function _r(u){const m=zi();dt(m,new ta(m))}Qn.STAT_EVENT="statevent";function na(u,m){fe.call(this,Qn.STAT_EVENT,u),this.stat=m}L(na,fe);function rt(u){const m=zi();dt(m,new na(m,u))}Qn.Ma="timingevent";function Os(u,m){fe.call(this,Qn.Ma,u),this.size=m}L(Os,fe);function An(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Bi(){this.g=!0}Bi.prototype.xa=function(){this.g=!1};function $i(u,m,_,w,F,B){u.info(function(){if(u.g)if(B)for(var te="",je=B.split("&"),ft=0;ft<je.length;ft++){var Oe=je[ft].split("=");if(1<Oe.length){var vt=Oe[0];Oe=Oe[1];var ot=vt.split("_");te=2<=ot.length&&ot[1]=="type"?te+(vt+"="+Oe+"&"):te+(vt+"=redacted&")}}else te=null;else te=B;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+m+`
`+_+`
`+te})}function Ls(u,m,_,w,F,B,te){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+m+`
`+_+`
`+B+" "+te})}function Rn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Gc(u,_)+(w?" "+w:"")})}function ra(u,m){u.info(function(){return"TIMEOUT: "+m})}Bi.prototype.info=function(){};function Gc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var F=w[1];if(Array.isArray(F)&&!(1>F.length)){var B=F[0];if(B!="noop"&&B!="stop"&&B!="close")for(var te=1;te<F.length;te++)F[te]=""}}}}return Jo(_)}catch{return m}}var Vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function qi(){}L(qi,ji),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},Cn=new qi;function Pn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Ui(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Al}function Al(){this.i=null,this.g="",this.h=!1}var ia={},Ms={};function bs(u,m,_){u.L=1,u.v=Zr(sn(m)),u.m=_,u.P=!0,sa(u,null)}function sa(u,m){u.F=Date.now(),qe(u),u.A=sn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ti(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Al,u.g=$l(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Fi(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(Qo[0]=F.toString()),F=Qo);for(var B=0;B<F.length;B++){var te=qo(_,F[B],w||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),_r(),$i(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Kt(u)==3?m.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Kt(this.g);var m=this.g.Ba();const gn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||ot!=4||m==7||(m==8||0>=gn?_r(3):_r(2)),Wi(this);var _=this.g.Z();this.X=_;t:if(Rl(this)){var w=ha(this.g);u="";var F=w.length,B=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),Qr(this);var te="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(B&&m==F-1)});w.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,Ls(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ft=this.g;if((je=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(je)){var Oe=je;break t}}Oe=null}if(_=Oe)Rn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,_);else{this.o=!1,this.s=3,rt(12),pn(this),Qr(this);break e}}if(this.P){_=!0;let an;for(;!this.J&&this.C<te.length;)if(an=Qc(this,te),an==Ms){ot==4&&(this.s=4,rt(14),_=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==ia){this.s=4,rt(15),Rn(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else Rn(this.i,this.l,an,null),oa(this,an);if(Rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||te.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)Rn(this.i,this.l,te,"[Invalid Chunked Response]"),pn(this),Qr(this);else if(0<te.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),fa(vt),vt.M=!0,rt(11))}}else Rn(this.i,this.l,te,null),oa(this,te);ot==4&&pn(this),this.o&&!this.J&&(ot==4?Gs(this.j,this):(this.o=!1,qe(this)))}else $s(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),pn(this),Qr(this)}}}catch{}finally{}};function Rl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Qc(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Ms:(_=Number(m.substring(_,w)),isNaN(_)?ia:(w+=1,w+_>m.length?Ms:(m=m.slice(w,w+_),u.C=w+_,m)))}Pn.prototype.cancel=function(){this.J=!0,pn(this)};function qe(u){u.S=Date.now()+u.I,Cl(u,u.I)}function Cl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(I(u.ba,u),m)}function Wi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ra(this.i,this.A),this.L!=2&&(_r(),rt(17)),pn(this),this.s=2,Qr(this)):Cl(this,this.S-u)};function Qr(u){u.j.G==0||u.J||Gs(u.j,u)}function pn(u){Wi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Yo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function oa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||zt(_.h,u))){if(!u.K&&zt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Ks(_),On(_);else break e;Hs(_),rt(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=An(I(_.Za,_),6e3));if(1>=kl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ir(_,11)}else if((u.K||_.g==u)&&Ks(_),!ne(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Oe=F[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const vt=Oe[3];vt!=null&&(_.la=vt,_.j.info("VER="+_.la));const ot=Oe[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const gn=Oe[5];gn!=null&&typeof gn=="number"&&0<gn&&(w=1.5*gn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const an=u.g;if(an){const Xi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var B=w.h;B.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(aa(B,B.h),B.h=null))}if(w.D){const Ys=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Ys&&(w.ya=Ys,Be(w.I,w.D,Ys))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var te=u;if(w.qa=Bl(w,w.J?w.ia:null,w.W),te.K){Nl(w.h,te);var je=te,ft=w.L;ft&&(je.I=ft),je.B&&(Wi(je),qe(je)),w.g=te}else Ji(w);0<_.i.length&&Zn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Ir(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Ir(_,7):At(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}_r(4)}catch{}}var Pl=class{constructor(u,m){this.g=u,this.map=m}};function Hi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function kl(u){return u.h?1:u.g?u.g.size:0}function zt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function aa(u,m){u.g?u.g.add(m):u.h=m}function Nl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Hi.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return q(u.i)}function Fs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Us(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function Yr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Us(u),w=Fs(u),F=w.length,B=0;B<F;B++)m.call(void 0,w[B],_&&_[B],u)}var Ki=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),F=null;if(0<=w){var B=u[_].substring(0,w);F=u[_].substring(w+1)}else B=u[_];m(B,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function vr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof vr){this.h=u.h,Gi(this,u.j),this.o=u.o,this.g=u.g,Jr(this,u.s),this.l=u.l;var m=u.i,_=new Yn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Xr(this,_),this.m=u.m}else u&&(m=String(u).match(Ki))?(this.h=!1,Gi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Jr(this,m[4]),this.l=Ne(m[5]||"",!0),Xr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}vr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ei(m,js,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ei(m,js,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ei(_,_.charAt(0)=="/"?Ll:Ol,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ei(_,la)),u.join("")};function sn(u){return new vr(u)}function Gi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Jr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Xr(u,m,_){m instanceof Yn?(u.i=m,Jn(u.i,u.h)):(_||(m=ei(m,Vl)),u.i=new Yn(m,u.h))}function Be(u,m,_){u.i.set(m,_)}function Zr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ei(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Dl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Dl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var js=/[#\/\?@]/g,Ol=/[#\?:]/g,Ll=/[#\?]/g,Vl=/[#\?@]/g,la=/#/g;function Yn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function St(u){u.g||(u.g=new Map,u.h=0,u.i&&Yc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Yn.prototype,n.add=function(u,m){St(this),this.i=null,u=mn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function kn(u,m){St(u),m=mn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Nn(u,m){return St(u),m=mn(u,m),u.g.has(m)}n.forEach=function(u,m){St(this),this.g.forEach(function(_,w){_.forEach(function(F){u.call(m,F,w,this)},this)},this)},n.na=function(){St(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const F=u[w];for(let B=0;B<F.length;B++)_.push(m[w])}return _},n.V=function(u){St(this);let m=[];if(typeof u=="string")Nn(this,u)&&(m=m.concat(this.g.get(mn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return St(this),this.i=null,u=mn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ti(u,m,_){kn(u,m),0<_.length&&(u.i=null,u.g.set(mn(u,m),q(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const B=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var F=B;te[w]!==""&&(F+="="+encodeURIComponent(String(te[w]))),u.push(F)}}return this.i=u.join("&")};function mn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Jn(u,m){m&&!u.j&&(St(u),u.i=null,u.g.forEach(function(_,w){var F=w.toLowerCase();w!=F&&(kn(this,w),ti(this,F,_))},u)),u.j=m}function Jc(u,m){const _=new Bi;if(d.Image){const w=new Image;w.onload=P(Ht,_,"TestLoadImage: loaded",!0,m,w),w.onerror=P(Ht,_,"TestLoadImage: error",!1,m,w),w.onabort=P(Ht,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=P(Ht,_,"TestLoadImage: timeout",!1,m,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Ml(u,m){const _=new Bi,w=new AbortController,F=setTimeout(()=>{w.abort(),Ht(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(B=>{clearTimeout(F),B.ok?Ht(_,"TestPingServer: ok",!0,m):Ht(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Ht(_,"TestPingServer: error",!1,m)})}function Ht(u,m,_,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(_)}catch{}}function Xc(){this.g=new Zo}function bl(u,m,_){const w=_||"";try{Yr(u,function(F,B){let te=F;y(F)&&(te=Jo(F)),m.push(w+B+"="+encodeURIComponent(te))})}catch(F){throw m.push(w+"type="+encodeURIComponent("_badmap")),F}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}L(Er,ji),Er.prototype.g=function(){return new Qi(this.l,this.j)},Er.prototype.i=function(u){return function(){return u}}({});function Qi(u,m){ht.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Qi,ht),n=Qi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?xn(this):Dn(this),this.readyState==3&&Fl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,xn(this))},n.Qa=function(u){this.g&&(this.response=u,xn(this))},n.ga=function(){this.g&&xn(this)};function xn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let m="";return Te(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function ni(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=wr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,m,_))}function Qe(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Qe,ht);var Zc=/^https?$/i,ua=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ns(this.o):Ns(Cn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){Yi(this,B);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)_.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const B of w.keys())_.set(B,w.get(B));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),F=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ua,m,void 0))||w||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,te]of _)this.g.setRequestHeader(B,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Yi(this,B)}};function Yi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,zs(u),on(u)}function zs(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},n.bb=function(){ca(this)};function ca(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)Go(u.Ea,0,u);else if(dt(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=te===0){var F=String(u.D).match(Ki)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),w=!Zc.test(F?F.toLowerCase():"")}_=w}if(_)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var B=2<Kt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",zs(u)}}finally{on(u)}}}}function on(u,m){if(u.g){Bs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||dt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Bs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Xo(m)}};function ha(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function $s(u){const m={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(ne(u[w]))continue;var _=O(u[w]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[F]||[];m[F]=B,B.push(_)}x(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function da(u){this.Aa=0,this.i=[],this.j=new Bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Hi(u&&u.concurrentRequestLimit),this.Da=new Xc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=da.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){rt(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Bl(this,null,this.W),Zn(this)};function At(u){if(qs(u),u.G==3){var m=u.U++,_=sn(u.I);if(Be(_,"SID",u.K),Be(_,"RID",m),Be(_,"TYPE","terminate"),Tr(u,_),m=new Pn(u,u.j,m),m.L=2,m.v=Zr(sn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=$l(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}zl(u)}function On(u){u.g&&(fa(u),u.g.cancel(),u.g=null)}function qs(u){On(u),u.u&&(d.clearTimeout(u.u),u.u=null),Ks(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Zn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||se(),re||(ze(),re=!0),me.add(m,u),u.B=0}}function eh(u,m){return kl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(I(u.Ga,u,m),jl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Pn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),N(B,this.S)):B=this.S),this.m!==null||this.O||(F.H=B,B=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ri(this,F,m),_=sn(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),Tr(this,_),B&&(this.O?m="headers="+encodeURIComponent(String(wr(B)))+"&"+m:this.m&&ni(_,this.m,B)),aa(this.h,F),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",m),Be(_,"SID","null"),F.T=!0,bs(F,_,null)):bs(F,_,m),this.G=2}}else this.G==3&&(u?Ws(this,u):this.i.length==0||rn(this.h)||Ws(this))};function Ws(u,m){var _;m?_=m.l:_=u.U++;const w=sn(u.I);Be(w,"SID",u.K),Be(w,"RID",_),Be(w,"AID",u.T),Tr(u,w),u.m&&u.o&&ni(w,u.m,u.o),_=new Pn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ri(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),aa(u.h,_),bs(_,w,m)}function Tr(u,m){u.H&&Te(u.H,function(_,w){Be(m,w,_)}),u.l&&Yr({},function(_,w){Be(m,w,_)})}function ri(u,m,_){_=Math.min(u.i.length,_);var w=u.l?I(u.l.Na,u.l,u):null;e:{var F=u.i;let B=-1;for(;;){const te=["count="+_];B==-1?0<_?(B=F[0].g,te.push("ofs="+B)):B=0:te.push("ofs="+B);let je=!0;for(let ft=0;ft<_;ft++){let Oe=F[ft].g;const vt=F[ft].map;if(Oe-=B,0>Oe)B=Math.max(0,F[ft].g-100),je=!1;else try{bl(vt,te,"req"+Oe+"_")}catch{w&&w(vt)}}if(je){w=te.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function Ji(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||se(),re||(ze(),re=!0),me.add(m,u),u.v=0}}function Hs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(I(u.Fa,u),jl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),On(this),Ul(this))};function fa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Ul(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),Tr(u,m),u.m&&u.o&&ni(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Zr(sn(m)),_.m=null,_.P=!0,sa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Hs(this),rt(19))};function Ks(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Gs(u,m){var _=null;if(u.g==m){Ks(u),fa(u),u.g=null;var w=2}else if(zt(u.h,m))_=m.D,Nl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;w=zi(),dt(w,new Os(w,_)),Zn(u)}else Ji(u);else if(F=m.s,F==3||F==0&&0<m.X||!(w==1&&eh(u,m)||w==2&&Hs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:Ir(u,5);break;case 4:Ir(u,10);break;case 3:Ir(u,6);break;default:Ir(u,2)}}}function jl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ir(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),w=u.Xa;const F=!w;w=new vr(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Gi(w,"https"),Zr(w),F?Jc(w.toString(),_):Ml(w.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(m),zl(u),qs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function zl(u){if(u.G=0,u.ka=[],u.l){const m=xl(u.h);(m.length!=0||u.i.length!=0)&&(b(u.ka,m),b(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function Bl(u,m,_){var w=_ instanceof vr?sn(_):new vr(_);if(w.g!="")m&&(w.g=m+"."+w.g),Jr(w,w.s);else{var F=d.location;w=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var B=new vr(null);w&&Gi(B,w),m&&(B.g=m),F&&Jr(B,F),_&&(B.l=_),w=B}return _=u.D,m=u.ya,_&&m&&Be(w,_,m),Be(w,"VER",u.la),Tr(u,w),w}function $l(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Qe(new Er({eb:_})):new Qe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qs(){}Qs.prototype.g=function(u,m){return new Bt(u,m)};function Bt(u,m){ht.call(this),this.g=new da(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ne(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ne(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new er(this)}L(Bt,ht),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){At(this.g)},Bt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Jo(u),u=_);m.i.push(new Pl(m.Ya++,u)),m.G==3&&Zn(m)},Bt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,Bt.aa.N.call(this)};function ql(u){Gn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}L(ql,Gn);function Wl(){Ds.call(this),this.status=1}L(Wl,Ds);function er(u){this.g=u}L(er,pa),er.prototype.ua=function(){dt(this.g,"a")},er.prototype.ta=function(u){dt(this.g,new ql(u))},er.prototype.sa=function(u){dt(this.g,new Wl)},er.prototype.ra=function(){dt(this.g,"b")},Qs.prototype.createWebChannel=Qs.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Lv=function(){return new Qs},Ov=function(){return zi()},Dv=Qn,Xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,Xu=Vs,Sl.COMPLETE="complete",xv=Sl,xs.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,$a=xs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Nv=Qe}).apply(typeof zu<"u"?zu:typeof self<"u"?self:typeof window<"u"?window:{});const Iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Cc("@firebase/firestore");function _o(){return _s.logLevel}function oe(n,...e){if(_s.logLevel<=Pe.DEBUG){const t=e.map(bf);_s.debug(`Firestore (${Uo}): ${n}`,...t)}}function $r(n,...e){if(_s.logLevel<=Pe.ERROR){const t=e.map(bf);_s.error(`Firestore (${Uo}): ${n}`,...t)}}function Ro(n,...e){if(_s.logLevel<=Pe.WARN){const t=e.map(bf);_s.warn(`Firestore (${Uo}): ${n}`,...t)}}function bf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+n;throw $r(e),new Error(e)}function Ue(n,e){n||Ee()}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new jr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new jr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new Vv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ft(e)}}class oC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class aC{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new oC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new lC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=cC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function xe(n,e){return n<e?-1:n>e?1:0}function Co(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new gt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ae(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new gt(0,0))}static max(){return new we(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(),i===void 0?i=e.length-t:i>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=sr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=sr.isNumericId(e),o=sr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?sr.extractNumericId(e).compare(sr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class Ge extends sr{construct(e,t,i){return new Ge(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ae(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const hC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends sr{construct(e,t,i){return new kt(e,t,i)}static isValidIdentifier(e){return hC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ae(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ae(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ae(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(i+=d,o++):(l(),o++)}if(l(),h)throw new ae(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ge.fromString(e))}static fromName(e){return new pe(Ge.fromString(e).popFirst(5))}static empty(){return new pe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ge(e.slice()))}}function dC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new gt(t+1,0):new gt(t,i));return new Ci(o,pe.empty(),e)}function fC(n){return new Ci(n.readTime,n.key,-1)}class Ci{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ci(we.min(),pe.empty(),-1)}static max(){return new Ci(we.max(),pe.empty(),-1)}}function pC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==mC)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,i)=>{t(e)})}static reject(e){return new G((t,i)=>{i(e)})}static waitFor(e){return new G((t,i)=>{let o=0,l=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next(o=>o?G.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new G((i,o)=>{const l=e.length,h=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{h[y]=E,++d,d===l&&i(h)},E=>o(E))}})}static doWhile(e,t){return new G((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function yC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xc.oe=-1;function Dc(n){return n==null}function dc(n){return n===0&&1/n==-1/0}function _C(n){return typeof n=="number"&&Number.isInteger(n)&&!dc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Sy(e)),e=EC(n.get(t),e);return Sy(e)}function EC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Sy(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Li(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bu(this.root,e,this.comparator,!0)}}class Bu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Pt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ry(this.data.getIterator())}getIteratorFrom(e){return new Ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new hn([])}unionWith(e){let t=new yt(kt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Fv("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const wC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(n){if(Ue(!!n),typeof n=="string"){let e=0;const t=wC.exec(n);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ki(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Oc(n){const e=n.mapValue.fields.__previous_value__;return Ff(e)?Oc(e):e}function il(n){const e=Pi(n.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,t,i,o,l,h,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class sl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ni(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ff(n)?4:SC(n)?9007199254740991:IC(n)?10:11:Ee()}function dr(n,e){if(n===e)return!0;const t=Ni(n);if(t!==Ni(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return il(n).isEqual(il(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Pi(o.timestampValue),d=Pi(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return ki(o.bytesValue).isEqual(ki(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),d=st(l.doubleValue);return h===d?dc(h)===dc(d):isNaN(h)&&isNaN(d)}return!1}(n,e);case 9:return Co(n.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Ay(h)!==Ay(d))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(d[p]===void 0||!dr(h[p],d[p])))return!1;return!0}(n,e);default:return Ee()}}function ol(n,e){return(n.values||[]).find(t=>dr(t,e))!==void 0}function Po(n,e){if(n===e)return 0;const t=Ni(n),i=Ni(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return function(l,h){const d=st(l.integerValue||l.doubleValue),p=st(h.integerValue||h.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Cy(n.timestampValue,e.timestampValue);case 4:return Cy(il(n),il(e));case 5:return xe(n.stringValue,e.stringValue);case 6:return function(l,h){const d=ki(l),p=ki(h);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const d=l.split("/"),p=h.split("/");for(let y=0;y<d.length&&y<p.length;y++){const E=xe(d[y],p[y]);if(E!==0)return E}return xe(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const d=xe(st(l.latitude),st(h.latitude));return d!==0?d:xe(st(l.longitude),st(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Py(n.arrayValue,e.arrayValue);case 10:return function(l,h){var d,p,y,E;const T=l.fields||{},I=h.fields||{},P=(d=T.value)===null||d===void 0?void 0:d.arrayValue,L=(p=I.value)===null||p===void 0?void 0:p.arrayValue,q=xe(((y=P==null?void 0:P.values)===null||y===void 0?void 0:y.length)||0,((E=L==null?void 0:L.values)===null||E===void 0?void 0:E.length)||0);return q!==0?q:Py(P,L)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===$u.mapValue&&h===$u.mapValue)return 0;if(l===$u.mapValue)return 1;if(h===$u.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=h.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const I=xe(p[T],E[T]);if(I!==0)return I;const P=Po(d[p[T]],y[E[T]]);if(P!==0)return P}return xe(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Ee()}}function Cy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=Pi(n),i=Pi(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function Py(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Po(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function ko(n){return Zd(n)}function Zd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Pi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ki(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Zd(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Zd(t.fields[h])}`;return o+"}"}(n.mapValue):Ee()}function Zu(n){switch(Ni(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(n);return e?16+Zu(e):16;case 5:return 2*n.stringValue.length;case 6:return ki(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Zu(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Li(i.fields,(l,h)=>{o+=l.length+Zu(h)}),o}(n.mapValue);default:throw Ee()}}function ky(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ef(n){return!!n&&"integerValue"in n}function Uf(n){return!!n&&"arrayValue"in n}function Ny(n){return!!n&&"nullValue"in n}function xy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ec(n){return!!n&&"mapValue"in n}function IC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ga(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Li(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ga(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ga(n.arrayValue.values[t]);return e}return Object.assign({},n)}function SC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ec(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ga(t)}setAll(e){let t=kt.emptyPath(),i={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}h?i[d.lastSegment()]=Ga(h):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());ec(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];ec(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Li(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new tn(Ga(this.value))}}function Uv(n){const e=[];return Li(n.fields,(t,i)=>{const o=new kt([t]);if(ec(i)){const l=Uv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,i,o,l,h,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Ut(e,0,we.min(),we.min(),we.min(),tn.empty(),0)}static newFoundDocument(e,t,i,o){return new Ut(e,1,t,we.min(),i,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,we.min(),we.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,we.min(),we.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t){this.position=e,this.inclusive=t}}function Dy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=Po(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Oy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t="asc"){this.field=e,this.dir=t}}function AC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{}class ut extends jv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new CC(e,t,i):t==="array-contains"?new NC(e,i):t==="in"?new xC(e,i):t==="not-in"?new DC(e,i):t==="array-contains-any"?new OC(e,i):new ut(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new PC(e,i):new kC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Po(t,this.value)):t!==null&&Ni(this.value)===Ni(t)&&this.matchesComparison(Po(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends jv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new qn(e,t)}matches(e){return zv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zv(n){return n.op==="and"}function Bv(n){return RC(n)&&zv(n)}function RC(n){for(const e of n.filters)if(e instanceof qn)return!1;return!0}function tf(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+ko(n.value);if(Bv(n))return n.filters.map(e=>tf(e)).join(",");{const e=n.filters.map(t=>tf(t)).join(",");return`${n.op}(${e})`}}function $v(n,e){return n instanceof ut?function(i,o){return o instanceof ut&&i.op===o.op&&i.field.isEqual(o.field)&&dr(i.value,o.value)}(n,e):n instanceof qn?function(i,o){return o instanceof qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,d)=>l&&$v(h,o.filters[d]),!0):!1}(n,e):void Ee()}function qv(n){return n instanceof ut?function(t){return`${t.field.canonicalString()} ${t.op} ${ko(t.value)}`}(n):n instanceof qn?function(t){return t.op.toString()+" {"+t.getFilters().map(qv).join(" ,")+"}"}(n):"Filter"}class CC extends ut{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class PC extends ut{constructor(e,t){super(e,"in",t),this.keys=Wv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kC extends ut{constructor(e,t){super(e,"not-in",t),this.keys=Wv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Wv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>pe.fromName(i.referenceValue))}class NC extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Uf(t)&&ol(t.arrayValue,this.value)}}class xC extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ol(this.value.arrayValue,t)}}class DC extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ol(this.value.arrayValue,t)}}class OC extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Uf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ol(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,t=null,i=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.ue=null}}function Ly(n,e=null,t=[],i=[],o=null,l=null,h=null){return new LC(n,e,t,i,o,l,h)}function jf(n){const e=Ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>tf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Dc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ko(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ko(i)).join(",")),e.ue=t}return e.ue}function zf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!AC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$v(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oy(n.startAt,e.startAt)&&Oy(n.endAt,e.endAt)}function nf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t=null,i=[],o=[],l=null,h="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function VC(n,e,t,i,o,l,h,d){return new Bo(n,e,t,i,o,l,h,d)}function Bf(n){return new Bo(n)}function Vy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hv(n){return n.collectionGroup!==null}function Qa(n){const e=Ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new yt(kt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new al(l,i))}),t.has(kt.keyField().canonicalString())||e.ce.push(new al(kt.keyField(),i))}return e.ce}function lr(n){const e=Ie(n);return e.le||(e.le=MC(e,Qa(n))),e.le}function MC(n,e){if(n.limitType==="F")return Ly(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new al(o.field,l)});const t=n.endAt?new fc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new fc(n.startAt.position,n.startAt.inclusive):null;return Ly(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function rf(n,e){const t=n.filters.concat([e]);return new Bo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pc(n,e,t){return new Bo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Lc(n,e){return zf(lr(n),lr(e))&&n.limitType===e.limitType}function Kv(n){return`${jf(lr(n))}|lt:${n.limitType}`}function vo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>qv(o)).join(", ")}]`),Dc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>ko(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>ko(o)).join(",")),`Target(${i})`}(lr(n))}; limitType=${n.limitType})`}function Vc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Qa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,d,p){const y=Dy(h,d,p);return h.inclusive?y<=0:y<0}(i.startAt,Qa(i),o)||i.endAt&&!function(h,d,p){const y=Dy(h,d,p);return h.inclusive?y>=0:y>0}(i.endAt,Qa(i),o))}(n,e)}function bC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gv(n){return(e,t)=>{let i=!1;for(const o of Qa(n)){const l=FC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function FC(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):function(l,h,d){const p=h.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Po(p,y):Ee()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return bv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new et(pe.comparator);function qr(){return UC}const Qv=new et(pe.comparator);function qa(...n){let e=Qv;for(const t of n)e=e.insert(t.key,t);return e}function Yv(n){let e=Qv;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ps(){return Ya()}function Jv(){return Ya()}function Ya(){return new Is(n=>n.toString(),(n,e)=>n.isEqual(e))}const jC=new et(pe.comparator),zC=new yt(pe.comparator);function ke(...n){let e=zC;for(const t of n)e=e.add(t);return e}const BC=new yt(xe);function $C(){return BC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function Xv(n){return{integerValue:""+n}}function qC(n,e){return _C(e)?Xv(e):$f(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this._=void 0}}function WC(n,e,t){return n instanceof mc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Ff(l)&&(l=Oc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof ll?eE(n,e):n instanceof ul?tE(n,e):function(o,l){const h=Zv(o,l),d=My(h)+My(o.Pe);return ef(h)&&ef(o.Pe)?Xv(d):$f(o.serializer,d)}(n,e)}function HC(n,e,t){return n instanceof ll?eE(n,e):n instanceof ul?tE(n,e):t}function Zv(n,e){return n instanceof gc?function(i){return ef(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class mc extends Mc{}class ll extends Mc{constructor(e){super(),this.elements=e}}function eE(n,e){const t=nE(e);for(const i of n.elements)t.some(o=>dr(o,i))||t.push(i);return{arrayValue:{values:t}}}class ul extends Mc{constructor(e){super(),this.elements=e}}function tE(n,e){let t=nE(e);for(const i of n.elements)t=t.filter(o=>!dr(o,i));return{arrayValue:{values:t}}}class gc extends Mc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function My(n){return st(n.integerValue||n.doubleValue)}function nE(n){return Uf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function KC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof ll&&o instanceof ll||i instanceof ul&&o instanceof ul?Co(i.elements,o.elements,dr):i instanceof gc&&o instanceof gc?dr(i.Pe,o.Pe):i instanceof mc&&o instanceof mc}(n.transform,e.transform)}class GC{constructor(e,t){this.version=e,this.transformResults=t}}class ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bc{}function rE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sE(n.key,ur.none()):new yl(n.key,n.data,ur.none());{const t=n.data,i=tn.empty();let o=new yt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Vi(n.key,i,new hn(o.toArray()),ur.none())}}function QC(n,e,t){n instanceof yl?function(o,l,h){const d=o.value.clone(),p=Fy(o.fieldTransforms,l,h.transformResults);d.setAll(p),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Vi?function(o,l,h){if(!tc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const d=Fy(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(iE(o)),p.setAll(d),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ja(n,e,t,i){return n instanceof yl?function(l,h,d,p){if(!tc(l.precondition,h))return d;const y=l.value.clone(),E=Uy(l.fieldTransforms,p,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Vi?function(l,h,d,p){if(!tc(l.precondition,h))return d;const y=Uy(l.fieldTransforms,p,h),E=h.data;return E.setAll(iE(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,d){return tc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(n,e,t)}function YC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Zv(i.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(i.field,l))}return t||null}function by(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Co(i,o,(l,h)=>KC(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yl extends bc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Vi extends bc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function iE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Fy(n,e,t){const i=new Map;Ue(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,d=e.data.field(l.field);i.set(l.field,HC(h,d,t[o]))}return i}function Uy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,WC(l,h,e))}return i}class sE extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JC extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&QC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Jv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=t.has(o.key)?null:d;const p=rE(h,d);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(we.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(t,i)=>by(t,i))&&Co(this.baseMutations,e.baseMutations,(t,i)=>by(t,i))}}class qf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length);let o=function(){return jC}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new qf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Le;function tP(n){switch(n){default:return Ee();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function oE(n){if(n===void 0)return $r("GRPC error has no .code"),K.UNKNOWN;switch(n){case lt.OK:return K.OK;case lt.CANCELLED:return K.CANCELLED;case lt.UNKNOWN:return K.UNKNOWN;case lt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case lt.INTERNAL:return K.INTERNAL;case lt.UNAVAILABLE:return K.UNAVAILABLE;case lt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case lt.NOT_FOUND:return K.NOT_FOUND;case lt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case lt.ABORTED:return K.ABORTED;case lt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case lt.DATA_LOSS:return K.DATA_LOSS;default:return Ee()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=new Si([4294967295,4294967295],0);function jy(n){const e=nP().encode(n),t=new kv;return t.update(e),new Uint8Array(t.digest())}function zy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Si([t,i],0),new Si([o,l],0)]}class Wf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Wa(`Invalid padding: ${t}`);if(i<0)throw new Wa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Si.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Si.fromNumber(i)));return o.compare(rP)===1&&(o=new Si([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=jy(e),[i,o]=zy(t);for(let l=0;l<this.hashCount;l++){const h=this.de(i,o,l);if(!this.Ee(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Wf(l,o,t);return i.forEach(d=>h.insert(d)),h}insert(e){if(this.Te===0)return;const t=jy(e),[i,o]=zy(t);for(let l=0;l<this.hashCount;l++){const h=this.de(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,_l.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Fc(we.min(),o,new et(xe),qr(),ke())}}class _l{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new _l(i,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class aE{constructor(e,t){this.targetId=e,this.me=t}}class lE{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class By{constructor(){this.fe=0,this.ge=$y(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),i=ke();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee()}}),new _l(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=$y()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class iP{constructor(e){this.Be=e,this.Le=new Map,this.ke=qr(),this.qe=qu(),this.Qe=qu(),this.Ke=new et(xe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(nf(l))if(i===0){const h=new pe(l.path);this.We(t,h,Ut.newNoDocument(h,we.min()))}else Ue(i===1);else{const h=this.Ze(t);if(h!==i){const d=this.Xe(e),p=d?this.et(d,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,d;try{h=ki(i).toUint8Array()}catch(p){if(p instanceof Fv)return Ro("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Wf(h,o,l)}catch(p){return Ro(p instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Be.nt(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((l,h)=>{const d=this.Ye(h);if(d){if(l.current&&nf(d.target)){const p=new pe(d.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,Ut.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=ke();this.Qe.forEach((l,h)=>{let d=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Fc(e,t,this.Ke,this.ke,i);return this.ke=qr(),this.qe=qu(),this.Qe=qu(),this.Ke=new et(xe),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new By,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new yt(xe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new yt(xe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new By),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function qu(){return new et(pe.comparator)}function $y(){return new et(pe.comparator)}const sP={asc:"ASCENDING",desc:"DESCENDING"},oP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aP={and:"AND",or:"OR"};class lP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sf(n,e){return n.useProto3Json||Dc(e)?e:{value:e}}function yc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uP(n,e){return yc(n,e.toTimestamp())}function cr(n){return Ue(!!n),we.fromTimestamp(function(t){const i=Pi(t);return new gt(i.seconds,i.nanos)}(n))}function Hf(n,e){return of(n,e).canonicalString()}function of(n,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function cE(n){const e=Ge.fromString(n);return Ue(mE(e)),e}function af(n,e){return Hf(n.databaseId,e.path)}function Ld(n,e){const t=cE(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(dE(t))}function hE(n,e){return Hf(n.databaseId,e)}function cP(n){const e=cE(n);return e.length===4?Ge.emptyPath():dE(e)}function lf(n){return new Ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dE(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qy(n,e,t){return{name:af(n,e),fields:t.value.mapValue.fields}}function hP(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Ue(E===void 0||typeof E=="string"),Nt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Nt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(y){const E=y.code===void 0?K.UNKNOWN:oE(y.code);return new ae(E,y.message||"")}(h);t=new lE(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Ld(n,i.document.name),l=cr(i.document.updateTime),h=i.document.createTime?cr(i.document.createTime):we.min(),d=new tn({mapValue:{fields:i.document.fields}}),p=Ut.newFoundDocument(o,l,h,d),y=i.targetIds||[],E=i.removedTargetIds||[];t=new nc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Ld(n,i.document),l=i.readTime?cr(i.readTime):we.min(),h=Ut.newNoDocument(o,l),d=i.removedTargetIds||[];t=new nc([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Ld(n,i.document),l=i.removedTargetIds||[];t=new nc([],l,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new eP(o,l),d=i.targetId;t=new aE(d,h)}}return t}function dP(n,e){let t;if(e instanceof yl)t={update:qy(n,e.key,e.value)};else if(e instanceof sE)t={delete:af(n,e.key)};else if(e instanceof Vi)t={update:qy(n,e.key,e.data),updateMask:wP(e.fieldMask)};else{if(!(e instanceof JC))return Ee();t={verify:af(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const d=h.transform;if(d instanceof mc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ll)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ul)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof gc)return{fieldPath:h.field.canonicalString(),increment:d.Pe};throw Ee()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:uP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee()}(n,e.precondition)),t}function fP(n,e){return n&&n.length>0?(Ue(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(we.min())&&(h=cr(l)),new GC(h,o.transformResults||[])}(t,e))):[]}function pP(n,e){return{documents:[hE(n,e.path)]}}function mP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=hE(n,o);const l=function(y){if(y.length!==0)return pE(qn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(E=>function(I){return{field:Eo(I.field),direction:_P(I.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=sf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function gP(n){let e=cP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const I=fE(T);return I instanceof qn&&Bv(I)?I.getFilters():[I]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(I=>function(L){return new al(wo(L.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(T){let I;return I=typeof T=="object"?T.value:T,Dc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,P=T.values||[];return new fc(P,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,P=T.values||[];return new fc(P,I)}(t.endAt)),VC(e,o,h,l,d,"F",p,y)}function yP(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=wo(t.unaryFilter.field);return ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=wo(t.unaryFilter.field);return ut.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=wo(t.unaryFilter.field);return ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=wo(t.unaryFilter.field);return ut.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(n):n.fieldFilter!==void 0?function(t){return ut.create(wo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return qn.create(t.compositeFilter.filters.map(i=>fE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(n):Ee()}function _P(n){return sP[n]}function vP(n){return oP[n]}function EP(n){return aP[n]}function Eo(n){return{fieldPath:n.canonicalString()}}function wo(n){return kt.fromServerFormat(n.fieldPath)}function pE(n){return n instanceof ut?function(t){if(t.op==="=="){if(xy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NAN"}};if(Ny(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NAN"}};if(Ny(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(t.field),op:vP(t.op),value:t.value}}}(n):n instanceof qn?function(t){const i=t.getFilters().map(o=>pE(o));return i.length===1?i[0]:{compositeFilter:{op:EP(t.op),filters:i}}}(n):Ee()}function wP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function mE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,i,o,l=we.min(),h=we.min(),d=Nt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.ht=e}}function IP(n){const e=gP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(){this.ln=new AP}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ci.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class AP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new yt(Ge.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new yt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(41943040,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new No(0)}static Qn(){return new No(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy([n,e],[t,i]){const o=xe(n,t);return o===0?xe(e,i):o}class RP{constructor(e){this.Gn=e,this.buffer=new yt(Hy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Hy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class CP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){oe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zo(t)?oe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await jo(t)}await this.Yn(3e5)})}}class PP{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return G.resolve(xc.oe);const i=new RP(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Wy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,d,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),_o()<=Pe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function kP(n,e){return new PP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(){this.changes=new Is(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ja(i.mutation,o,hn.empty(),gt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ke()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ke()){const o=ps();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=qa();return l.forEach((d,p)=>{h=h.insert(d,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ps();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ke()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,i,o){let l=qr();const h=Ya(),d=function(){return Ya()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Vi)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Ja(E.mutation,y,E.mutation.getFieldMask(),gt.now())):h.set(y.key,hn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>{var T;return d.set(y,new xP(E,(T=h.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Ya();let o=new et((h,d)=>h-d),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||hn.empty();E=d.applyToLocalView(y,E),i.set(p,E);const T=(o.get(d.batchId)||ke()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,E=p.value,T=Jv();E.forEach(I=>{if(!l.has(I)){const P=rE(t.get(I),i.get(I));P!==null&&T.set(I,P),l=l.add(I)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return G.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(ps());let d=-1,p=l;return h.next(y=>G.forEach(y,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?G.resolve():this.remoteDocumentCache.getEntry(e,E).next(I=>{p=p.insert(E,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,ke())).next(E=>({batchId:d,changes:Yv(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(i=>{let o=qa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=qa();return this.indexManager.getCollectionParents(e,l).next(d=>G.forEach(d,p=>{const y=function(T,I){return new Bo(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,I)=>{h=h.insert(T,I)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Ut.newInvalidDocument(E)))});let d=qa();return h.forEach((p,y)=>{const E=l.get(p);E!==void 0&&Ja(E.mutation,y,hn.empty(),gt.now()),Vc(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:IP(o.bundledQuery),readTime:cr(o.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.overlays=new et(pe.comparator),this.dr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ps();return G.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.dr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=ps(),l=t.length+1,h=new pe(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=ps(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const d=ps(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>d.set(y,E)),!(d.size()>=o)););return G.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new ZC(t,i));let l=this.dr.get(t);l===void 0&&(l=ke(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.Er=new yt(It.Ar),this.Rr=new yt(It.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new It(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new It(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new pe(new Ge([])),i=new It(t,e),o=new It(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new pe(new Ge([])),i=new It(t,e),o=new It(t,e+1);let l=ke();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new It(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class It{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return pe.comparator(e.key,t.key)||xe(e.br,t.br)}static Vr(e,t){return xe(e.br,t.br)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new yt(It.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new XC(l,t,i,o);this.mutationQueue.push(h);for(const d of o)this.vr=this.vr.add(new It(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const d=this.Cr(h.br);l.push(d)}),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new yt(xe);return t.forEach(o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],d=>{i=i.add(d.br)})}),G.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new It(new pe(l),0);let d=new yt(xe);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},h),G.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return G.forEach(t.mutations,o=>{const l=new It(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new It(t,0),o=this.vr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.Nr=e,this.docs=function(){return new et(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=qr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=qr();const h=t.path,d=new pe(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||pC(fC(E),i)<=0||(o.has(E.key)||Vc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ee()}Br(e,t){return G.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new FP(this)}getSize(e){return G.resolve(this.size)}}class FP extends NP{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.persistence=e,this.Lr=new Is(t=>jf(t),zf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.kr=0,this.qr=new Kf,this.targetCount=0,this.Qr=No.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new No(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach((h,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Lr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),G.waitFor(l).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t){this.Kr={},this.overlays={},this.$r=new xc(0),this.Ur=!1,this.Ur=!0,this.Wr=new VP,this.referenceDelegate=e(this),this.Gr=new UP(this),this.indexManager=new SP,this.remoteDocumentCache=function(o){return new bP(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new TP(t),this.jr=new OP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new LP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new MP(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new jP(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return G.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class jP extends gC{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.Zr=new Kf,this.Xr=null}static ei(e){return new Gf(e)}get ti(){if(this.Xr)return this.Xr;throw Ee()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,i=>{const o=pe.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,we.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class _c{constructor(e,t){this.persistence=e,this.ri=new Is(i=>vC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=kP(this,t)}static ei(e,t){return new _c(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?G.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,h=>this.ir(e,h,t).next(d=>{d||(i++,l.removeEntry(h,we.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zu(e.data.value)),t}ir(e,t,i){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Qf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return SS()?8:yC(jt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new zP;return this.ts(e,t,h).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,h,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(_o()<=Pe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(_o()<=Pe.DEBUG&&oe("QueryEngine","Query:",vo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(_o()<=Pe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):G.resolve())}Xi(e,t){if(Vy(t))return G.resolve(null);let i=lr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=pc(t,null,"F"),i=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=ke(...l);return this.Zi.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,h,p.readTime)?this.Xi(e,pc(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Vy(t)||o.isEqual(we.min())?G.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?G.resolve(null):(_o()<=Pe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vo(t)),this.os(e,h,t,dC(o,-1)).next(d=>d))})}rs(e,t){let i=new yt(Gv(e));return t.forEach((o,l)=>{Vc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return _o()<=Pe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",vo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ci.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new et(xe),this.cs=new Is(l=>jf(l),zf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DP(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function qP(n,e,t,i){return new $P(n,e,t,i)}async function yE(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],d=[];let p=ke();for(const y of o){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){d.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:d}))})})}function WP(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,E){const T=y.batch,I=T.keys();let P=G.resolve();return I.forEach(L=>{P=P.next(()=>E.getEntry(p,L)).next(q=>{const b=y.docVersions.get(L);Ue(b!==null),q.version.compareTo(b)<0&&(T.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),E.addEntry(q)))})}),P.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=ke();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function _E(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function HP(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((E,T)=>{const I=o.get(T);if(!I)return;d.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,T)));let P=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(Nt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(E.resumeToken,i)),o=o.insert(T,P),function(q,b,H){return q.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(I,P,E)&&d.push(t.Gr.updateTargetData(l,P))});let p=qr(),y=ke();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(KP(l,h,e.documentUpdates).next(E=>{p=E.Is,y=E.ds})),!i.isEqual(we.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(E)}return G.waitFor(d).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function KP(n,e,t){let i=ke(),o=ke();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=qr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(d,p.readTime),h=h.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(d,p)):oe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:h,ds:o}})}function GP(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function QP(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,G.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new wi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function uf(n,e,t){const i=Ie(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!zo(h))throw h;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function Ky(n,e,t){const i=Ie(n);let o=we.min(),l=ke();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,E){const T=Ie(p),I=T.cs.get(E);return I!==void 0?G.resolve(T.us.get(I)):T.Gr.getTargetData(y,E)}(i,h,lr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:ke())).next(d=>(YP(i,bC(e),d),{documents:d,Es:l})))}function YP(n,e,t){let i=n.ls.get(e)||we.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class Gy{constructor(){this.activeTargetIds=$C()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JP{constructor(){this._o=new Gy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Gy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu=null;function Vd(){return Wu===null?Wu=function(){return 268435456+Math.round(2147483648*Math.random())}():Wu++,"0x"+Wu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class tk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const d=Vd(),p=this.No(t,i.toUriEncodedString());oe("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,h),this.Lo(t,p,y,o).then(E=>(oe("RestConnection",`Received RPC '${t}' ${d}: `,E),E),E=>{throw Ro("RestConnection",`RPC '${t}' ${d} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,h,d){return this.Oo(t,i,o,l,h)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=ZP[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=Vd();return new Promise((h,d)=>{const p=new Nv;p.setWithCredentials(!0),p.listenOnce(xv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Xu.NO_ERROR:const E=p.getResponseJson();oe(bt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Xu.TIMEOUT:oe(bt,`RPC '${e}' ${l} timed out`),d(new ae(K.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const T=p.getStatus();if(oe(bt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const L=function(b){const H=b.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(H)>=0?H:K.UNKNOWN}(P.status);d(new ae(L,P.message))}else d(new ae(K.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ae(K.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{oe(bt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);oe(bt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=Vd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Lv(),d=Ov(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");oe(bt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=h.createWebChannel(E,p);let I=!1,P=!1;const L=new ek({Eo:b=>{P?oe(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(I||(oe(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),oe(bt,`RPC '${e}' stream ${o} sending:`,b),T.send(b))},Ao:()=>T.close()}),q=(b,H,ne)=>{b.listen(H,Z=>{try{ne(Z)}catch(de){setTimeout(()=>{throw de},0)}})};return q(T,$a.EventType.OPEN,()=>{P||(oe(bt,`RPC '${e}' stream ${o} transport opened.`),L.So())}),q(T,$a.EventType.CLOSE,()=>{P||(P=!0,oe(bt,`RPC '${e}' stream ${o} transport closed`),L.Do())}),q(T,$a.EventType.ERROR,b=>{P||(P=!0,Ro(bt,`RPC '${e}' stream ${o} transport errored:`,b),L.Do(new ae(K.UNAVAILABLE,"The operation could not be completed")))}),q(T,$a.EventType.MESSAGE,b=>{var H;if(!P){const ne=b.data[0];Ue(!!ne);const Z=ne,de=(Z==null?void 0:Z.error)||((H=Z[0])===null||H===void 0?void 0:H.error);if(de){oe(bt,`RPC '${e}' stream ${o} received error:`,de);const Se=de.status;let Te=function(R){const N=lt[R];if(N!==void 0)return oE(N)}(Se),x=de.message;Te===void 0&&(Te=K.INTERNAL,x="Unknown error status: "+Se+" with message "+de.message),P=!0,L.Do(new ae(Te,x)),T.close()}else oe(bt,`RPC '${e}' stream ${o} received:`,ne),L.vo(ne)}}),q(d,Dv.STAT_EVENT,b=>{b.stat===Xd.PROXY?oe(bt,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===Xd.NOPROXY&&oe(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{L.bo()},0),L}}function Md(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n){return new lP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t,i,o,l,h,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new vE(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?($r(t.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new ae(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nk extends EE{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=hP(this.serializer,e),i=function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?cr(h.readTime):we.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=lf(this.serializer),t.addTarget=function(l,h){let d;const p=h.target;if(d=nf(p)?{documents:pP(l,p)}:{query:mP(l,p).ct},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=uE(l,h.resumeToken);const y=sf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){d.readTime=yc(l,h.snapshotVersion.toTimestamp());const y=sf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=yP(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=lf(this.serializer),t.removeTarget=e,this.c_(t)}}class rk extends EE{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=fP(e.writeResults,e.commitTime),i=cr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=lf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>dP(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ae(K.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,of(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(K.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.ko(e,of(t,i),o,h,d,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(K.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?($r(t),this.C_=!1):oe("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{Ss(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Ie(p);y.k_.add(4),await vl(y),y.K_.set("Unknown"),y.k_.delete(4),await jc(y)}(this))})}),this.K_=new sk(i,o)}}async function jc(n){if(Ss(n))for(const e of n.q_)await e(!0)}async function vl(n){for(const e of n.q_)await e(!1)}function wE(n,e){const t=Ie(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Zf(t)?Xf(t):$o(t).s_()&&Jf(t,e))}function Yf(n,e){const t=Ie(n),i=$o(t);t.L_.delete(e),i.s_()&&TE(t,e),t.L_.size===0&&(i.s_()?i.a_():Ss(t)&&t.K_.set("Unknown"))}function Jf(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$o(n).V_(e)}function TE(n,e){n.U_.xe(e),$o(n).m_(e)}function Xf(n){n.U_=new iP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),$o(n).start(),n.K_.F_()}function Zf(n){return Ss(n)&&!$o(n).i_()&&n.L_.size>0}function Ss(n){return Ie(n).k_.size===0}function IE(n){n.U_=void 0}async function ak(n){n.K_.set("Online")}async function lk(n){n.L_.forEach((e,t)=>{Jf(n,e)})}async function uk(n,e){IE(n),Zf(n)?(n.K_.O_(e),Xf(n)):n.K_.set("Unknown")}async function ck(n,e,t){if(n.K_.set("Online"),e instanceof lE&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const d of l.targetIds)o.L_.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.L_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await vc(n,i)}else if(e instanceof nc?n.U_.$e(e):e instanceof aE?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(we.min()))try{const i=await _E(n.localStore);t.compareTo(i)>=0&&await function(l,h){const d=l.U_.it(h);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.L_.get(y);E&&l.L_.set(y,E.withResumeToken(p.resumeToken,h))}}),d.targetMismatches.forEach((p,y)=>{const E=l.L_.get(p);if(!E)return;l.L_.set(p,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),TE(l,p);const T=new wi(E.target,p,y,E.sequenceNumber);Jf(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){oe("RemoteStore","Failed to raise snapshot:",i),await vc(n,i)}}async function vc(n,e,t){if(!zo(e))throw e;n.k_.add(1),await vl(n),n.K_.set("Offline"),t||(t=()=>_E(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await jc(n)})}function SE(n,e){return e().catch(t=>vc(n,t,e))}async function zc(n){const e=Ie(n),t=xi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;hk(e);)try{const o=await GP(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,dk(e,o)}catch(o){await vc(e,o)}AE(e)&&RE(e)}function hk(n){return Ss(n)&&n.B_.length<10}function dk(n,e){n.B_.push(e);const t=xi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function AE(n){return Ss(n)&&!xi(n).i_()&&n.B_.length>0}function RE(n){xi(n).start()}async function fk(n){xi(n).w_()}async function pk(n){const e=xi(n);for(const t of n.B_)e.g_(t.mutations)}async function mk(n,e,t){const i=n.B_.shift(),o=qf.from(i,e,t);await SE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await zc(n)}async function gk(n,e){e&&xi(n).f_&&await async function(i,o){if(function(h){return tP(h)&&h!==K.ABORTED}(o.code)){const l=i.B_.shift();xi(i).__(),await SE(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await zc(i)}}(n,e),AE(n)&&RE(n)}async function Yy(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const i=Ss(t);t.k_.add(3),await vl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await jc(t)}async function yk(n,e){const t=Ie(n);e?(t.k_.delete(2),await jc(t)):e||(t.k_.add(2),await vl(t),t.K_.set("Unknown"))}function $o(n){return n.W_||(n.W_=function(t,i,o){const l=Ie(t);return l.b_(),new nk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:ak.bind(null,n),mo:lk.bind(null,n),po:uk.bind(null,n),R_:ck.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Zf(n)?Xf(n):n.K_.set("Unknown")):(await n.W_.stop(),IE(n))})),n.W_}function xi(n){return n.G_||(n.G_=function(t,i,o){const l=Ie(t);return l.b_(),new rk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:fk.bind(null,n),po:gk.bind(null,n),p_:pk.bind(null,n),y_:mk.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await zc(n)):(await n.G_.stop(),n.B_.length>0&&(oe("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,d=new ep(e,t,h,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tp(n,e){if($r("AsyncQueue",`${e}: ${n}`),zo(n))return new ae(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=qa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ao;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.z_=new et(pe.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ee():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class xo{constructor(e,t,i,o,l,h,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new xo(e,t,Ao.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class vk{constructor(){this.queries=Xy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=Xy(),l.forEach((h,d)=>{for(const p of d.J_)p.onError(i)})})(this,new ae(K.ABORTED,"Firestore shutting down"))}}function Xy(){return new Is(n=>Kv(n),Lc)}async function CE(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new _k,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=tp(h,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&np(t)}async function PE(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Ek(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const d of h.J_)d.ta(o)&&(i=!0);h.H_=o}}i&&np(t)}function wk(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function np(n){n.X_.forEach(e=>{e.next()})}var cf,Zy;(Zy=cf||(cf={})).na="default",Zy.Cache="cache";class kE{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new xo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==cf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.key=e}}class xE{constructor(e){this.key=e}}class Tk{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ke(),this.mutatedKeys=ke(),this.Va=Gv(e),this.ma=new Ao(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new Jy,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const I=o.get(E),P=Vc(this.query,T)?T:null,L=!!I&&this.mutatedKeys.has(I.key),q=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;I&&P?I.data.isEqual(P.data)?L!==q&&(i.track({type:3,doc:P}),b=!0):this.ya(I,P)||(i.track({type:2,doc:P}),b=!0,(p&&this.Va(P,p)>0||y&&this.Va(P,y)<0)&&(d=!0)):!I&&P?(i.track({type:0,doc:P}),b=!0):I&&!P&&(i.track({type:1,doc:I}),b=!0,(p||y)&&(d=!0)),b&&(P?(h=h.add(P),l=q?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:h,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((E,T)=>function(P,L){const q=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return q(P)-q(L)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new xo(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Jy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ke(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new xE(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new NE(i))}),t}va(e){this.Ea=e.Es,this.Ra=ke();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return xo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Ik{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Sk{constructor(e){this.key=e,this.Fa=!1}}class Ak{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Is(d=>Kv(d),Lc),this.Oa=new Map,this.Na=new Set,this.Ba=new et(pe.comparator),this.La=new Map,this.ka=new Kf,this.qa={},this.Qa=new Map,this.Ka=No.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Rk(n,e,t=!0){const i=bE(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await DE(i,e,t,!0),o}async function Ck(n,e){const t=bE(n);await DE(t,e,!0,!1)}async function DE(n,e,t,i){const o=await QP(n.localStore,lr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await Pk(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&wE(n.remoteStore,o),d}async function Pk(n,e,t,i,o){n.Ua=(T,I,P)=>async function(q,b,H,ne){let Z=b.view.ga(H);Z.ss&&(Z=await Ky(q.localStore,b.query,!1).then(({documents:x})=>b.view.ga(x,Z)));const de=ne&&ne.targetChanges.get(b.targetId),Se=ne&&ne.targetMismatches.get(b.targetId)!=null,Te=b.view.applyChanges(Z,q.isPrimaryClient,de,Se);return t_(q,b.targetId,Te.ba),Te.snapshot}(n,T,I,P);const l=await Ky(n.localStore,e,!0),h=new Tk(e,l.Es),d=h.ga(l.documents),p=_l.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(d,n.isPrimaryClient,p);t_(n,t,y.ba);const E=new Ik(e,t,h);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function kk(n,e,t){const i=Ie(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!Lc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await uf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Yf(i.remoteStore,o.targetId),hf(i,o.targetId)}).catch(jo)):(hf(i,o.targetId),await uf(i.localStore,o.targetId,!0))}async function Nk(n,e){const t=Ie(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Yf(t.remoteStore,i.targetId))}async function xk(n,e,t){const i=Fk(n);try{const o=await function(h,d){const p=Ie(h),y=gt.now(),E=d.reduce((P,L)=>P.add(L.key),ke());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",P=>{let L=qr(),q=ke();return p.hs.getEntries(P,E).next(b=>{L=b,L.forEach((H,ne)=>{ne.isValidDocument()||(q=q.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(P,L)).next(b=>{T=b;const H=[];for(const ne of d){const Z=YC(ne,T.get(ne.key).overlayedDocument);Z!=null&&H.push(new Vi(ne.key,Z,Uv(Z.value.mapValue),ur.exists(!0)))}return p.mutationQueue.addMutationBatch(P,y,H,d)}).next(b=>{I=b;const H=b.applyToLocalDocumentSet(T,q);return p.documentOverlayCache.saveOverlays(P,b.batchId,H)})}).then(()=>({batchId:I.batchId,changes:Yv(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,d,p){let y=h.qa[h.currentUser.toKey()];y||(y=new et(xe)),y=y.insert(d,p),h.qa[h.currentUser.toKey()]=y}(i,o.batchId,t),await El(i,o.changes),await zc(i.remoteStore)}catch(o){const l=tp(o,"Failed to persist write");t.reject(l)}}async function OE(n,e){const t=Ie(n);try{const i=await HP(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.La.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Ue(h.Fa):o.removedDocuments.size>0&&(Ue(h.Fa),h.Fa=!1))}),await El(t,i,e)}catch(i){await jo(i)}}function e_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const d=h.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const p=Ie(h);p.onlineState=d;let y=!1;p.queries.forEach((E,T)=>{for(const I of T.J_)I.ea(d)&&(y=!0)}),y&&np(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Dk(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let h=new et(pe.comparator);h=h.insert(l,Ut.newNoDocument(l,we.min()));const d=ke().add(l),p=new Fc(we.min(),new Map,new et(xe),h,d);await OE(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),rp(i)}else await uf(i.localStore,e,!1).then(()=>hf(i,e,t)).catch(jo)}async function Ok(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await WP(t.localStore,e);VE(t,i,null),LE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await El(t,o)}catch(o){await jo(o)}}async function Lk(n,e,t){const i=Ie(n);try{const o=await function(h,d){const p=Ie(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(Ue(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);VE(i,e,t),LE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await El(i,o)}catch(o){await jo(o)}}function LE(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function VE(n,e,t){const i=Ie(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function hf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||ME(n,i)})}function ME(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Yf(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),rp(n))}function t_(n,e,t){for(const i of t)i instanceof NE?(n.ka.addReference(i.key,e),Vk(n,i)):i instanceof xE?(oe("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||ME(n,i.key)):Ee()}function Vk(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(oe("SyncEngine","New document in limbo: "+t),n.Na.add(i),rp(n))}function rp(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new pe(Ge.fromString(e)),i=n.Ka.next();n.La.set(i,new Sk(t)),n.Ba=n.Ba.insert(t,i),wE(n.remoteStore,new wi(lr(Bf(t.path)),i,"TargetPurposeLimboResolution",xc.oe))}}async function El(n,e,t){const i=Ie(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{h.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Qf.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(p,y){const E=Ie(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>G.forEach(y,I=>G.forEach(I.Wi,P=>E.persistence.referenceDelegate.addReference(T,I.targetId,P)).next(()=>G.forEach(I.Gi,P=>E.persistence.referenceDelegate.removeReference(T,I.targetId,P)))))}catch(T){if(!zo(T))throw T;oe("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const P=E.us.get(I),L=P.snapshotVersion,q=P.withLastLimboFreeSnapshotVersion(L);E.us=E.us.insert(I,q)}}}(i.localStore,l))}async function Mk(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const i=await yE(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new ae(K.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await El(t,i.Ts)}}function bk(n,e){const t=Ie(n),i=t.La.get(e);if(i&&i.Fa)return ke().add(i.key);{let o=ke();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const d=t.xa.get(h);o=o.unionWith(d.view.fa)}return o}}function bE(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=OE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dk.bind(null,e),e.Ma.R_=Ek.bind(null,e.eventManager),e.Ma.Wa=wk.bind(null,e.eventManager),e}function Fk(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ok.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Lk.bind(null,e),e}class Ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return qP(this.persistence,new BP,e.initialUser,this.serializer)}ja(e){return new gE(Gf.ei,this.serializer)}za(e){return new JP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ec.provider={build:()=>new Ec};class Uk extends Ec{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ue(this.persistence.referenceDelegate instanceof _c);const i=this.persistence.referenceDelegate.garbageCollector;return new CP(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new gE(i=>_c.ei(i,t),this.serializer)}}class df{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>e_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mk.bind(null,this.syncEngine),await yk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vk}()}createDatastore(e){const t=Uc(e.databaseInfo.databaseId),i=function(l){return new tk(l)}(e.databaseInfo);return function(l,h,d,p){return new ik(l,h,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,d){return new ok(i,o,l,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>e_(this.syncEngine,t,0),function(){return Qy.p()?new Qy:new XP}())}createSyncEngine(e,t){return function(o,l,h,d,p,y,E){const T=new Ak(o,l,h,d,p,y);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ie(o);oe("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await vl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}df.provider={build:()=>new df};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Mv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{oe("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(oe("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=tp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function bd(n,e){n.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await yE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function n_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zk(n);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Yy(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Yy(e.remoteStore,o)),n._onlineComponents=e}async function zk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await bd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Ro("Error using user provided cache. Falling back to memory cache: "+t),await bd(n,new Ec)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await bd(n,new Uk(void 0));return n._offlineComponents}async function UE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await n_(n,n._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await n_(n,new df))),n._onlineComponents}function Bk(n){return UE(n).then(e=>e.syncEngine)}async function jE(n){const e=await UE(n),t=e.eventManager;return t.onListen=Rk.bind(null,e.syncEngine),t.onUnlisten=kk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ck.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Nk.bind(null,e.syncEngine),t}function $k(n,e,t={}){const i=new jr;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,y){const E=new FE({next:I=>{E.eu(),h.enqueueAndForget(()=>PE(l,T));const P=I.docs.has(d);!P&&I.fromCache?y.reject(new ae(K.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&I.fromCache&&p&&p.source==="server"?y.reject(new ae(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new kE(Bf(d.path),E,{includeMetadataChanges:!0,ua:!0});return CE(l,T)}(await jE(n),n.asyncQueue,e,t,i)),i.promise}function qk(n,e,t={}){const i=new jr;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,y){const E=new FE({next:I=>{E.eu(),h.enqueueAndForget(()=>PE(l,T)),I.fromCache&&p.source==="server"?y.reject(new ae(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new kE(d,E,{includeMetadataChanges:!0,ua:!0});return CE(l,T)}(await jE(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n,e,t){if(!t)throw new ae(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Wk(n,e,t,i){if(e===!0&&i===!0)throw new ae(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function i_(n){if(!pe.isDocumentKey(n))throw new ae(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function s_(n){if(pe.isDocumentKey(n))throw new ae(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function Wr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bc(n);throw new ae(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new rC;switch(i.type){case"firstParty":return new aC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ae(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=r_.get(t);i&&(oe("ComponentProvider","Removing Datastore"),r_.delete(t),i.terminate())}(this),Promise.resolve()}}function Hk(n,e,t,i={}){var o;const l=(n=Wr(n,$c))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ft.MOCK_USER;else{d=_S(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ae(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}n._authCredentials=new iC(new Vv(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mi(this.firestore,e,this._query)}}class Wt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Ai extends Mi{constructor(e,t,i){super(e,t,Bf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new pe(e))}withConverter(e){return new Ai(this.firestore,e,this._path)}}function Kk(n,e,...t){if(n=ct(n),BE("collection","path",e),n instanceof $c){const i=Ge.fromString(e,...t);return s_(i),new Ai(n,null,i)}{if(!(n instanceof Wt||n instanceof Ai))throw new ae(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ge.fromString(e,...t));return s_(i),new Ai(n.firestore,null,i)}}function Gk(n,e,...t){if(n=ct(n),arguments.length===1&&(e=Mv.newId()),BE("doc","path",e),n instanceof $c){const i=Ge.fromString(e,...t);return i_(i),new Wt(n,null,new pe(i))}{if(!(n instanceof Wt||n instanceof Ai))throw new ae(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ge.fromString(e,...t));return i_(i),new Wt(n.firestore,n instanceof Ai?n.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new vE(this,"async_queue_retry"),this.fu=()=>{const i=Md();i&&oe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Md();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Md();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new jr;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!zo(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let d=h.message||"";return h.stack&&(d=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),d}(i);throw $r("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=ep.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.Eu.push(o),o}pu(){this.Au&&Ee()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class wl extends $c{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new a_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new a_(e),this._firestoreClient=void 0,await e}}}function Qk(n,e){const t=typeof n=="object"?n:Sf(),i=typeof n=="string"?n:"(default)",o=Ts(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=gS("firestore");l&&Hk(o,...l)}return o}function ip(n){if(n._terminated)throw new ae(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yk(n),n._firestoreClient}function Yk(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,E){return new TC(d,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,zE(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new jk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Do(Nt.fromBase64String(e))}catch(t){throw new ae(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Do(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=/^__.*__$/;class Xk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms):new yl(e,this.data,t,this.fieldTransforms)}}class $E{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class lp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new lp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return wc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(qE(this.Mu)&&Jk.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Zk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Uc(e)}$u(e,t,i,o=!1){return new lp({Mu:e,methodName:t,Ku:i,path:kt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function up(n){const e=n._freezeSettings(),t=Uc(n._databaseId);return new Zk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function e1(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);cp("Data must be an object, but it was:",h,i);const d=WE(i,h);let p,y;if(l.merge)p=new hn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const I=ff(e,T,t);if(!h.contains(I))throw new ae(K.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);KE(E,I)||E.push(I)}p=new hn(E),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new Xk(new tn(d),p,y)}class Wc extends sp{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wc}}function t1(n,e,t,i){const o=n.$u(1,e,t);cp("Data must be an object, but it was:",o,i);const l=[],h=tn.empty();Li(i,(p,y)=>{const E=hp(e,p,t);y=ct(y);const T=o.Lu(E);if(y instanceof Wc)l.push(E);else{const I=Tl(y,T);I!=null&&(l.push(E),h.set(E,I))}});const d=new hn(l);return new $E(h,d,o.fieldTransforms)}function n1(n,e,t,i,o,l){const h=n.$u(1,e,t),d=[ff(e,i,t)],p=[o];if(l.length%2!=0)throw new ae(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)d.push(ff(e,l[I])),p.push(l[I+1]);const y=[],E=tn.empty();for(let I=d.length-1;I>=0;--I)if(!KE(y,d[I])){const P=d[I];let L=p[I];L=ct(L);const q=h.Lu(P);if(L instanceof Wc)y.push(P);else{const b=Tl(L,q);b!=null&&(y.push(P),E.set(P,b))}}const T=new hn(y);return new $E(E,T,h.fieldTransforms)}function r1(n,e,t,i=!1){return Tl(t,n.$u(i?4:3,e))}function Tl(n,e){if(HE(n=ct(n)))return cp("Unsupported field value:",e,n),WE(n,e);if(n instanceof sp)return function(i,o){if(!qE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const d of i){let p=Tl(d,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=ct(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return qC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=gt.fromDate(i);return{timestampValue:yc(o.serializer,l)}}if(i instanceof gt){const l=new gt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:yc(o.serializer,l)}}if(i instanceof op)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Do)return{bytesValue:uE(o.serializer,i._byteString)};if(i instanceof Wt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Hf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof ap)return function(h,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return $f(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Bc(i)}`)}(n,e)}function WE(n,e){const t={};return bv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(n,(i,o)=>{const l=Tl(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function HE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof op||n instanceof Do||n instanceof Wt||n instanceof sp||n instanceof ap)}function cp(n,e,t){if(!HE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Bc(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function ff(n,e,t){if((e=ct(e))instanceof qc)return e._internalPath;if(typeof e=="string")return hp(n,e);throw wc("Field path arguments must be of type string or ",n,!1,void 0,t)}const i1=new RegExp("[~\\*/\\[\\]]");function hp(n,e,t){if(e.search(i1)>=0)throw wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qc(...e.split("."))._internalPath}catch{throw wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function wc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new ae(K.INVALID_ARGUMENT,d+n+p)}function KE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class s1 extends GE{data(){return super.data()}}function dp(n,e){return typeof e=="string"?hp(n,e):e instanceof qc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fp{}class pp extends fp{}function a1(n,e,...t){let i=[];e instanceof fp&&i.push(e),i=i.concat(t),function(l){const h=l.filter(p=>p instanceof gp).length,d=l.filter(p=>p instanceof mp).length;if(h>1||h>0&&d>0)throw new ae(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class mp extends pp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new mp(e,t,i)}_apply(e){const t=this._parse(e);return QE(e._query,t),new Mi(e.firestore,e.converter,rf(e._query,t))}_parse(e){const t=up(e.firestore);return function(l,h,d,p,y,E,T){let I;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ae(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){u_(T,E);const P=[];for(const L of T)P.push(l_(p,l,L));I={arrayValue:{values:P}}}else I=l_(p,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||u_(T,E),I=r1(d,h,T,E==="in"||E==="not-in");return ut.create(y,E,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class gp extends fp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const d=l.getFlattenedFilters();for(const p of d)QE(h,p),h=rf(h,p)}(e._query,t),new Mi(e.firestore,e.converter,rf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yp extends pp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new yp(e,t)}_apply(e){const t=function(o,l,h){if(o.startAt!==null)throw new ae(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ae(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new al(l,h)}(e._query,this._field,this._direction);return new Mi(e.firestore,e.converter,function(o,l){const h=o.explicitOrderBy.concat([l]);return new Bo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function l1(n,e="asc"){const t=e,i=dp("orderBy",n);return yp._create(i,t)}class _p extends pp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new _p(e,t,i)}_apply(e){return new Mi(e.firestore,e.converter,pc(e._query,this._limit,this._limitType))}}function u1(n){return _p._create("limit",n,"F")}function l_(n,e,t){if(typeof(t=ct(t))=="string"){if(t==="")throw new ae(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hv(e)&&t.indexOf("/")!==-1)throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ge.fromString(t));if(!pe.isDocumentKey(i))throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ky(n,new pe(i))}if(t instanceof Wt)return ky(n,t._key);throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bc(t)}.`)}function u_(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QE(n,e){const t=function(o,l){for(const h of o)for(const d of h.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ae(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class c1{convertValue(e,t="none"){switch(Ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Li(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new ap(l)}convertGeoPoint(e){return new op(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Oc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(il(e));default:return null}}convertTimestamp(e){const t=Pi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ge.fromString(e);Ue(mE(i));const o=new sl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||$r(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class YE extends GE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(dp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class rc extends YE{data(e={}){return super.data(e)}}class d1{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ha(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new rc(this._firestore,this._userDataWriter,i.key,i,new Ha(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const p=new rc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Ha(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new rc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Ha(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return d.type!==0&&(y=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),E=h.indexOf(d.doc.key)),{type:f1(d.type),doc:p,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function f1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(n){n=Wr(n,Wt);const e=Wr(n.firestore,wl);return $k(ip(e),n._key).then(t=>_1(e,n,t))}class JE extends c1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Do(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,t)}}function m1(n){n=Wr(n,Mi);const e=Wr(n.firestore,wl),t=ip(e),i=new JE(e);return o1(n._query),qk(t,n._query).then(o=>new d1(e,i,n,o))}function g1(n,e,t){n=Wr(n,Wt);const i=Wr(n.firestore,wl),o=h1(n.converter,e);return XE(i,[e1(up(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,ur.none())])}function y1(n,e,t,...i){n=Wr(n,Wt);const o=Wr(n.firestore,wl),l=up(o);let h;return h=typeof(e=ct(e))=="string"||e instanceof qc?n1(l,"updateDoc",n._key,e,t,i):t1(l,"updateDoc",n._key,e),XE(o,[h.toMutation(n._key,ur.exists(!0))])}function XE(n,e){return function(i,o){const l=new jr;return i.asyncQueue.enqueueAndForget(async()=>xk(await Bk(i),o,l)),l.promise}(ip(n),e)}function _1(n,e,t){const i=t.docs.get(e._key),o=new JE(n);return new YE(n,o,e._key,i,new Ha(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Uo=o})(bo),hr(new $n("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),d=new wl(new sC(i.getProvider("auth-internal")),new uC(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ae(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sl(y.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),In(Iy,"4.7.6",e),In(Iy,"4.7.6","esm2017")})();var v1="firebase",E1="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(v1,E1,"app");const ZE="@firebase/installations",vp="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=1e4,tw=`w:${vp}`,nw="FIS_v2",w1="https://firebaseinstallations.googleapis.com/v1",T1=60*60*1e3,I1="installations",S1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vs=new ws(I1,S1,A1);function rw(n){return n instanceof Kn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw({projectId:n}){return`${w1}/projects/${n}/installations`}function sw(n){return{token:n.token,requestStatus:2,expiresIn:C1(n.expiresIn),creationTime:Date.now()}}async function ow(n,e){const i=(await e.json()).error;return vs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function aw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function R1(n,{refreshToken:e}){const t=aw(n);return t.append("Authorization",P1(e)),t}async function lw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function C1(n){return Number(n.replace("s","000"))}function P1(n){return`${nw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=iw(n),o=aw(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:nw,appId:n.appId,sdkVersion:tw},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await lw(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:sw(y.authToken)}}else throw await ow("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=/^[cdef][\w-]{21}$/,pf="";function D1(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=O1(n);return x1.test(t)?t:pf}catch{return pf}}function O1(n){return N1(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=new Map;function hw(n,e){const t=Hc(n);dw(t,e),L1(t,e)}function dw(n,e){const t=cw.get(n);if(t)for(const i of t)i(e)}function L1(n,e){const t=V1();t&&t.postMessage({key:n,fid:e}),M1()}let ms=null;function V1(){return!ms&&"BroadcastChannel"in self&&(ms=new BroadcastChannel("[Firebase] FID Change"),ms.onmessage=n=>{dw(n.data.key,n.data.fid)}),ms}function M1(){cw.size===0&&ms&&(ms.close(),ms=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="firebase-installations-database",F1=1,Es="firebase-installations-store";let Fd=null;function Ep(){return Fd||(Fd=$_(b1,F1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Es)}}})),Fd}async function Tc(n,e){const t=Hc(n),o=(await Ep()).transaction(Es,"readwrite"),l=o.objectStore(Es),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&hw(n,e.fid),e}async function fw(n){const e=Hc(n),i=(await Ep()).transaction(Es,"readwrite");await i.objectStore(Es).delete(e),await i.done}async function Kc(n,e){const t=Hc(n),o=(await Ep()).transaction(Es,"readwrite"),l=o.objectStore(Es),h=await l.get(t),d=e(h);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&hw(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(n){let e;const t=await Kc(n.appConfig,i=>{const o=U1(i),l=j1(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===pf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function U1(n){const e=n||{fid:D1(),registrationStatus:0};return pw(e)}function j1(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(vs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=z1(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:B1(n)}:{installationEntry:e}}async function z1(n,e){try{const t=await k1(n,e);return Tc(n.appConfig,t)}catch(t){throw rw(t)&&t.customData.serverCode===409?await fw(n.appConfig):await Tc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function B1(n){let e=await c_(n.appConfig);for(;e.registrationStatus===1;)await uw(100),e=await c_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await wp(n);return i||t}return e}function c_(n){return Kc(n,e=>{if(!e)throw vs.create("installation-not-found");return pw(e)})}function pw(n){return $1(n)?{fid:n.fid,registrationStatus:0}:n}function $1(n){return n.registrationStatus===1&&n.registrationTime+ew<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1({appConfig:n,heartbeatServiceProvider:e},t){const i=W1(n,t),o=R1(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:tw,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await lw(()=>fetch(i,d));if(p.ok){const y=await p.json();return sw(y)}else throw await ow("Generate Auth Token",p)}function W1(n,{fid:e}){return`${iw(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(n,e=!1){let t;const i=await Kc(n.appConfig,l=>{if(!mw(l))throw vs.create("not-registered");const h=l.authToken;if(!e&&G1(h))return l;if(h.requestStatus===1)return t=H1(n,e),l;{if(!navigator.onLine)throw vs.create("app-offline");const d=Y1(l);return t=K1(n,d),d}});return t?await t:i.authToken}async function H1(n,e){let t=await h_(n.appConfig);for(;t.authToken.requestStatus===1;)await uw(100),t=await h_(n.appConfig);const i=t.authToken;return i.requestStatus===0?Tp(n,e):i}function h_(n){return Kc(n,e=>{if(!mw(e))throw vs.create("not-registered");const t=e.authToken;return J1(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function K1(n,e){try{const t=await q1(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Tc(n.appConfig,i),t}catch(t){if(rw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await fw(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Tc(n.appConfig,i)}throw t}}function mw(n){return n!==void 0&&n.registrationStatus===2}function G1(n){return n.requestStatus===2&&!Q1(n)}function Q1(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+T1}function Y1(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function J1(n){return n.requestStatus===1&&n.requestTime+ew<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X1(n){const e=n,{installationEntry:t,registrationPromise:i}=await wp(e);return i?i.catch(console.error):Tp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(n,e=!1){const t=n;return await eN(t),(await Tp(t,e)).token}async function eN(n){const{registrationPromise:e}=await wp(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(n){if(!n||!n.options)throw Ud("App Configuration");if(!n.name)throw Ud("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ud(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ud(n){return vs.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="installations",nN="installations-internal",rN=n=>{const e=n.getProvider("app").getImmediate(),t=tN(e),i=Ts(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},iN=n=>{const e=n.getProvider("app").getImmediate(),t=Ts(e,gw).getImmediate();return{getId:()=>X1(t),getToken:o=>Z1(t,o)}};function sN(){hr(new $n(gw,rN,"PUBLIC")),hr(new $n(nN,iN,"PRIVATE"))}sN();In(ZE,vp);In(ZE,vp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="analytics",oN="firebase_id",aN="origin",lN=60*1e3,uN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ip="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Cc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new ws("analytics","Analytics",cN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(n){if(!n.startsWith(Ip)){const e=dn.create("invalid-gtag-resource",{gtagURL:n});return nn.warn(e.message),""}return n}function yw(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function dN(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function fN(n,e){const t=dN("firebase-js-sdk-policy",{createScriptURL:hN}),i=document.createElement("script"),o=`${Ip}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function pN(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function mN(n,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const p=(await yw(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){nn.error(d)}n("config",o,l)}async function gN(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await yw(t);for(const p of h){const y=d.find(T=>T.measurementId===p),E=y&&e[y.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){nn.error(l)}}function yN(n,e,t,i){async function o(l,...h){try{if(l==="event"){const[d,p]=h;await gN(n,e,t,d,p)}else if(l==="config"){const[d,p]=h;await mN(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=h;n("consent",d,p)}else if(l==="get"){const[d,p,y]=h;n("get",d,p,y)}else if(l==="set"){const[d]=h;n("set",d)}else n(l,...h)}catch(d){nn.error(d)}}return o}function _N(n,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=yN(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function vN(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ip)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=30,wN=1e3;class TN{constructor(e={},t=wN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const _w=new TN;function IN(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function SN(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:IN(i)},l=uN.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let d="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function AN(n,e=_w,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw dn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw dn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new PN;return setTimeout(async()=>{d.abort()},lN),vw({appId:i,apiKey:o,measurementId:l},h,d,e)}async function vw(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=_w){var l;const{appId:h,measurementId:d}=n;try{await RN(i,e)}catch(p){if(d)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:d};throw p}try{const p=await SN(n);return o.deleteThrottleMetadata(h),p}catch(p){const y=p;if(!CN(y)){if(o.deleteThrottleMetadata(h),d)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:d};throw p}const E=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Kg(t,o.intervalMillis,EN):Kg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,T),nn.debug(`Calling attemptFetch again in ${E} millis`),vw(n,T,i,o)}}function RN(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function CN(n){if(!(n instanceof Kn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class PN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function kN(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,h=Object.assign(Object.assign({},i),{send_to:l});n("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(){if(U_())try{await j_()}catch(n){return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xN(n,e,t,i,o,l,h){var d;const p=AN(n);p.then(P=>{t[P.measurementId]=P.appId,n.options.measurementId&&P.measurementId!==n.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>nn.error(P)),e.push(p);const y=NN().then(P=>{if(P)return i.getId()}),[E,T]=await Promise.all([p,y]);vN(l)||fN(l,E.measurementId),o("js",new Date);const I=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return I[aN]="firebase",I.update=!0,T!=null&&(I[oN]=T),o("config",E.measurementId,I),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.app=e}_delete(){return delete Xa[this.app.options.appId],Promise.resolve()}}let Xa={},d_=[];const f_={};let jd="dataLayer",ON="gtag",p_,Ew,m_=!1;function LN(){const n=[];if(F_()&&n.push("This is a browser extension environment."),AS()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=dn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function VN(n,e,t){LN();const i=n.options.appId;if(!i)throw dn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(Xa[i]!=null)throw dn.create("already-exists",{id:i});if(!m_){pN(jd);const{wrappedGtag:l,gtagCore:h}=_N(Xa,d_,f_,jd,ON);Ew=l,p_=h,m_=!0}return Xa[i]=xN(n,d_,f_,e,p_,jd,t),new DN(n)}function MN(n=Sf()){n=ct(n);const e=Ts(n,Ic);return e.isInitialized()?e.getImmediate():bN(n)}function bN(n,e={}){const t=Ts(n,Ic);if(t.isInitialized()){const o=t.getImmediate();if(el(e,t.getOptions()))return o;throw dn.create("already-initialized")}return t.initialize({options:e})}function FN(n,e,t,i){n=ct(n),kN(Ew,Xa[n.app.options.appId],e,t,i).catch(o=>nn.error(o))}const g_="@firebase/analytics",y_="0.10.11";function UN(){hr(new $n(Ic,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return VN(i,o,t)},"PUBLIC")),hr(new $n("analytics-internal",n,"PRIVATE")),In(g_,y_),In(g_,y_,"esm2017");function n(e){try{const t=e.getProvider(Ic).getImmediate();return{logEvent:(i,o,l)=>FN(t,i,o,l)}}catch(t){throw dn.create("interop-component-reg-failed",{reason:t})}}}UN();const jN={apiKey:"AIzaSyDyw8qKjMVbPikZhOxC7uHM4sEgK1EewYs",authDomain:"pokeapi-6a5f6.firebaseapp.com",projectId:"pokeapi-6a5f6",storageBucket:"pokeapi-6a5f6.firebasestorage.app",messagingSenderId:"1035373749616",appId:"1:1035373749616:web:dc2177bbed3239eb17dbb5",measurementId:"G-QWW8BFMJ0R"},ww=q_(jN);MN(ww);const Tw=Qk(ww),Or=Pv();function Iw(){const[n,e]=$.useState([]);$.useEffect(()=>{t()},[]);function t(){try{const i=Kk(Tw,"Ranking"),o=a1(i,l1("puntuacion","desc"),u1(5));m1(o).then(l=>{const h=[];l.forEach(d=>{console.log(d),h.push({id:d.id,...d.data()})}),e(h)}).catch(l=>{console.log("error",l)})}catch(i){console.error("Error al obtener el ranking:",i)}}return W.jsxs("div",{className:"ranking",children:[W.jsx("h2",{children:"Top 5 Usuarios"}),W.jsx("ul",{children:n.map((i,o)=>W.jsxs("li",{children:[W.jsxs("span",{children:[o+1,". ",i.usuario]}),W.jsxs("span",{children:[" puntuacion: ",i.puntuacion]})]},i.id))})]})}function zN(){const[n,e]=$.useState({}),[t,i]=$.useState([]),[o,l]=$.useState(""),h=Mo();$.useEffect(()=>{d()},[]);function d(){l(""),p()}function p(){const T=Math.floor(Math.random()*1e3);fetch(`https://pokeapi.co/api/v2/pokemon/${T}`).then(I=>I.json()).then(I=>{e(I),y(I)})}function y(T){let I=[T.name];const P=[];for(let L=0;L<3;L++){let q=Math.floor(Math.random()*1e3);P.push(fetch(`https://pokeapi.co/api/v2/pokemon/${q}`).then(b=>b.json()).then(b=>b.name))}Promise.all(P).then(L=>{I=[...I,...L],i(I.sort(()=>Math.random()-.5))})}function E(T){T===n.name?(l("¡Correcto! "),h("/WinOrLose",{state:{winOrLose:!0,name:n.name}})):l("Incorrecto. Inténtalo de nuevo.")}return W.jsxs("div",{className:"container",children:[W.jsx("h2",{children:"¿Cuál es el nombre de este Pokémon?"}),W.jsxs("div",{className:"card",children:[n.sprites&&W.jsx("img",{src:n.sprites.front_default,alt:"Pokemon",className:"img-fluid"}),W.jsx("div",{className:"opciones",children:t.map((T,I)=>W.jsx("button",{className:"btn btn-primary",onClick:()=>E(T),children:T},I))}),W.jsx("p",{children:o}),W.jsx("button",{className:"btn btn-success",onClick:d,children:"Jugar de nuevo"})]}),W.jsx("div",{children:W.jsx(Iw,{})})]})}function BN(){const n=new or,e=new Lr,[t,i]=$.useState(""),[o,l]=$.useState(""),[h,d]=$.useState(null);$.useEffect(()=>{Or.onAuthStateChanged(P=>{d(P)})},[]),gR(Or).then(P=>{const L=or.credentialFromResult(P);L==null||L.accessToken,d(P.user)}).catch(P=>{console.error("Error:",P)});function p(){py(Or,n).then(P=>d(P.user)).catch(P=>console.error("Error:",P))}function y(){py(Or,e).then(P=>d(P.user)).catch(P=>console.error("Error:",P))}function E(){qA(Or).then(()=>d(null)).catch(P=>console.error("Error:",P))}function T(){jA(Or,t,o).then(P=>d(P.user)).catch(P=>console.error("Error:",P))}function I(){zA(Or,t,o).then(P=>d(P.user)).catch(P=>console.error("Error:",P))}return W.jsx("div",{className:"container",children:h?W.jsxs(W.Fragment,{children:[W.jsxs("h1",{className:"user-info",children:["Bienvenido, ",h.email]}),W.jsx("button",{className:"btn btn-danger",onClick:E,children:"Logout"})]}):W.jsxs(W.Fragment,{children:[W.jsx("h1",{className:"user-info",children:"Login"}),W.jsxs("div",{className:"auth-form",children:[W.jsxs("div",{className:"form-group",children:[W.jsx("input",{type:"email",placeholder:"Email",className:"form-control",onChange:P=>i(P.target.value)}),W.jsx("input",{type:"password",placeholder:"Contraseña",className:"form-control",onChange:P=>l(P.target.value)})]}),W.jsx("button",{className:"btn btn-primary",onClick:T,children:"Registrarse"}),W.jsx("button",{className:"btn btn-secondary",onClick:I,children:"Login "}),W.jsx("button",{className:"btn btn-apps",onClick:p,children:"Login con Google"}),W.jsx("button",{className:"btn btn-apps",onClick:y,children:"Login con GitHub"})]})]})})}function $N(){var i;const n=fr(),e=Mo(),t=(i=n.state)==null?void 0:i.pokemon;return t?W.jsxs("div",{id:"pokemon-details",children:[W.jsx("button",{id:"back-button",onClick:()=>e(-1),children:"Volver"}),W.jsxs("div",{id:"pokemon-info",children:[W.jsx("h2",{id:"pokemon-name",children:t.name}),W.jsxs("div",{id:"pokemon-images",children:[W.jsx("img",{id:"pokemon-image",src:t.image,alt:`${t.name} normal`}),W.jsx("img",{id:"pokemon-shiny",src:t.shinyImage,alt:`${t.name} shiny`})]}),W.jsxs("div",{id:"pokemon-details-info",children:[W.jsxs("p",{id:"pokemon-height",children:[W.jsx("strong",{children:"Altura:"})," ",t.height]}),W.jsxs("p",{id:"pokemon-weight",children:[W.jsx("strong",{children:"Peso:"})," ",t.weight]}),W.jsxs("p",{id:"pokemon-abilities",children:[W.jsx("strong",{children:"Habilidades:"})," ",t.abilities.join(", ")]}),W.jsxs("p",{id:"pokemon-types",children:[W.jsx("strong",{children:"Tipos:"})," ",t.types.join(", ")]})]}),W.jsxs("div",{children:[W.jsx("h3",{id:"stats-title",children:"Estadísticas"}),W.jsx("ul",{id:"pokemon-stats",children:t.stats.map((o,l)=>W.jsxs("li",{className:"stat-item",children:[W.jsxs("strong",{children:[o.name,":"]})," ",o.value]},l))})]})]})]}):W.jsx("p",{id:"no-data",children:"No hay datos del Pokémon."})}function qN(){var d,p;const n=fr(),e=(d=n.state)==null?void 0:d.winOrLose;(p=n.state)==null||p.name;const[t,i]=$.useState(null),[o,l]=$.useState(0);$.useEffect(()=>{Lf(Or,y=>{y&&i(y)})},[]),$.useEffect(()=>{t&&h()},[t]);function h(){if(!t||!t.uid)return;const y=Gk(Tw,"Ranking",t.uid);p1(y).then(E=>{if(E.exists())e?(y1(y,{puntuacion:E.data().puntuacion+1}),l(E.data().puntuacion+1)):l(E.data().puntuacion);else{console.log(t.displayName);let T=t.displayName?t.displayName:t.email.split("@")[0];g1(y,{usuario:T,puntuacion:1})}}).catch(E=>console.error("Error al obtener/crear ranking:",E))}return W.jsx(W.Fragment,{children:W.jsx("div",{className:"Pokemons",children:W.jsx("div",{className:"contPoke",children:W.jsxs("div",{className:"winPage",children:[e?W.jsxs(W.Fragment,{children:[W.jsx("h1",{children:"Correcto Has ganado."}),W.jsxs("p",{children:["numero de victorias",o]})]}):W.jsxs(W.Fragment,{children:[W.jsx("h1",{children:"Has perdido"}),W.jsxs("p",{children:["numero de victorias ",o]})]}),W.jsx(N_,{to:-1,className:"goBack",children:"Volver a jugar"}),W.jsx(Iw,{})]})})})})}function WN(){const[n,e]=$.useState(null);return $.useEffect(()=>{Lf(Or,t=>{e(t)})},[]),W.jsx(W.Fragment,{children:W.jsxs(XI,{children:[W.jsxs("nav",{children:[W.jsx(ds,{to:"/",children:"Inicio"}),W.jsx(ds,{to:"/PokemosApi",children:" Pokemons"}),W.jsx(ds,{to:"/Juego",children:"Juego"}),n?W.jsxs(W.Fragment,{children:[W.jsxs("p",{children:["Bienvenido, ",n.displayName?n.displayName:n.email.split("@")[0]]}),W.jsx(ds,{to:"/Login",children:"Cerrar Sesión"})]}):W.jsx(ds,{to:"/Login",children:"Login"})]}),W.jsxs(PI,{children:[W.jsx(Dr,{path:"/",element:W.jsx(nC,{})}),W.jsx(Dr,{path:"/Login",element:W.jsx(BN,{})}),W.jsxs(Dr,{element:W.jsx(tC,{}),children:[W.jsx(Dr,{path:"/PokemosApi",element:W.jsx(aS,{})}),W.jsx(Dr,{path:"/DetallesPokemons/:name",element:W.jsx($N,{})}),W.jsx(Dr,{path:"/Juego",element:W.jsx(zN,{})})]}),W.jsx(Dr,{path:"/WinOrLose",element:W.jsx(qN,{})}),W.jsx(Dr,{path:"*",element:W.jsx(lS,{})})]})]})})}LT.createRoot(document.getElementById("root")).render(W.jsx(WN,{}));
