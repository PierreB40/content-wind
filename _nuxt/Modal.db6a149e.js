import Ne from"./Scrim.669ddda8.js";import{k as Te,r as q,a6 as le,d as Fe,$ as Ee,b as te,W as Se,g as ae,w as Pe,c as De,a0 as Oe,f as ke,T as Re,a7 as Ce,l as Ie}from"./entry.874c24a6.js";import{u as Ae,t as xe}from"./index.6e7a6dee.js";const Be=()=>{const{$bodyLock:n}=Te();return n};/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var fe=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],_=fe.join(","),de=typeof Element>"u",D=de?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,L=!de&&Element.prototype.getRootNode?function(n){var e;return n==null||(e=n.getRootNode)===null||e===void 0?void 0:e.call(n)}:function(n){return n==null?void 0:n.ownerDocument},K=function n(e,t){var a;t===void 0&&(t=!0);var u=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"inert"),s=u===""||u==="true",r=s||t&&e&&n(e.parentNode);return r},_e=function(e){var t,a=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return a===""||a==="true"},ve=function(e,t,a){if(K(e))return[];var u=Array.prototype.slice.apply(e.querySelectorAll(_));return t&&D.call(e,_)&&u.unshift(e),u=u.filter(a),u},be=function n(e,t,a){for(var u=[],s=Array.from(e);s.length;){var r=s.shift();if(!K(r,!1))if(r.tagName==="SLOT"){var l=r.assignedElements(),f=l.length?l:r.children,b=n(f,!0,a);a.flatten?u.push.apply(u,b):u.push({scopeParent:r,candidates:b})}else{var N=D.call(r,_);N&&a.filter(r)&&(t||!e.includes(r))&&u.push(r);var g=r.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(r),T=!K(g,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(r));if(g&&T){var F=n(g===!0?r.children:g.children,!0,a);a.flatten?u.push.apply(u,F):u.push({scopeParent:r,candidates:F})}else s.unshift.apply(s,r.children)}}return u},pe=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},P=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||_e(e))&&!pe(e)?0:e.tabIndex},Le=function(e,t){var a=P(e);return a<0&&t&&!pe(e)?0:a},Ke=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},he=function(e){return e.tagName==="INPUT"},je=function(e){return he(e)&&e.type==="hidden"},Ve=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},Me=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},Ge=function(e){if(!e.name)return!0;var t=e.form||L(e),a=function(l){return t.querySelectorAll('input[type="radio"][name="'+l+'"]')},u;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")u=a(window.CSS.escape(e.name));else try{u=a(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var s=Me(u,e.form);return!s||s===e},Ue=function(e){return he(e)&&e.type==="radio"},$e=function(e){return Ue(e)&&!Ge(e)},qe=function(e){var t,a=e&&L(e),u=(t=a)===null||t===void 0?void 0:t.host,s=!1;if(a&&a!==e){var r,l,f;for(s=!!((r=u)!==null&&r!==void 0&&(l=r.ownerDocument)!==null&&l!==void 0&&l.contains(u)||e!=null&&(f=e.ownerDocument)!==null&&f!==void 0&&f.contains(e));!s&&u;){var b,N,g;a=L(u),u=(b=a)===null||b===void 0?void 0:b.host,s=!!((N=u)!==null&&N!==void 0&&(g=N.ownerDocument)!==null&&g!==void 0&&g.contains(u))}}return s},re=function(e){var t=e.getBoundingClientRect(),a=t.width,u=t.height;return a===0&&u===0},We=function(e,t){var a=t.displayCheck,u=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=D.call(e,"details>summary:first-of-type"),r=s?e.parentElement:e;if(D.call(r,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof u=="function"){for(var l=e;e;){var f=e.parentElement,b=L(e);if(f&&!f.shadowRoot&&u(f)===!0)return re(e);e.assignedSlot?e=e.assignedSlot:!f&&b!==e.ownerDocument?e=b.host:e=f}e=l}if(qe(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return re(e);return!1},Ye=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var u=t.children.item(a);if(u.tagName==="LEGEND")return D.call(t,"fieldset[disabled] *")?!0:!u.contains(e)}return!0}t=t.parentElement}return!1},j=function(e,t){return!(t.disabled||K(t)||je(t)||We(t,e)||Ve(t)||Ye(t))},W=function(e,t){return!($e(t)||P(t)<0||!j(e,t))},Ze=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},ze=function n(e){var t=[],a=[];return e.forEach(function(u,s){var r=!!u.scopeParent,l=r?u.scopeParent:u,f=Le(l,r),b=r?n(u.candidates):l;f===0?r?t.push.apply(t,b):t.push(l):a.push({documentOrder:s,tabIndex:f,item:u,isScope:r,content:b})}),a.sort(Ke).reduce(function(u,s){return s.isScope?u.push.apply(u,s.content):u.push(s.content),u},[]).concat(t)},Xe=function(e,t){t=t||{};var a;return t.getShadowRoot?a=be([e],t.includeContainer,{filter:W.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ze}):a=ve(e,t.includeContainer,W.bind(null,t)),ze(a)},Je=function(e,t){t=t||{};var a;return t.getShadowRoot?a=be([e],t.includeContainer,{filter:j.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=ve(e,t.includeContainer,j.bind(null,t)),a},O=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return D.call(e,_)===!1?!1:W(t,e)},Qe=fe.concat("iframe").join(","),$=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return D.call(e,Qe)===!1?!1:j(t,e)};/*!
* focus-trap 7.5.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ne(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),t.push.apply(t,a)}return t}function ie(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(t),!0).forEach(function(a){He(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function He(n,e,t){return e=tt(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function et(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function tt(n){var e=et(n,"string");return typeof e=="symbol"?e:String(e)}var oe={activateTrap:function(e,t){if(e.length>0){var a=e[e.length-1];a!==t&&a.pause()}var u=e.indexOf(t);u===-1||e.splice(u,1),e.push(t)},deactivateTrap:function(e,t){var a=e.indexOf(t);a!==-1&&e.splice(a,1),e.length>0&&e[e.length-1].unpause()}},at=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},rt=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},A=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},nt=function(e){return A(e)&&!e.shiftKey},it=function(e){return A(e)&&e.shiftKey},ue=function(e){return setTimeout(e,0)},se=function(e,t){var a=-1;return e.every(function(u,s){return t(u)?(a=s,!1):!0}),a},I=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),u=1;u<t;u++)a[u-1]=arguments[u];return typeof e=="function"?e.apply(void 0,a):e},B=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},ot=[],ut=function(e,t){var a=(t==null?void 0:t.document)||document,u=(t==null?void 0:t.trapStack)||ot,s=ie({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:nt,isKeyBackward:it},t),r={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},l,f=function(i,o,c){return i&&i[o]!==void 0?i[o]:s[c||o]},b=function(i,o){var c=typeof(o==null?void 0:o.composedPath)=="function"?o.composedPath():void 0;return r.containerGroups.findIndex(function(d){var v=d.container,h=d.tabbableNodes;return v.contains(i)||(c==null?void 0:c.includes(v))||h.find(function(m){return m===i})})},N=function(i){var o=s[i];if(typeof o=="function"){for(var c=arguments.length,d=new Array(c>1?c-1:0),v=1;v<c;v++)d[v-1]=arguments[v];o=o.apply(void 0,d)}if(o===!0&&(o=void 0),!o){if(o===void 0||o===!1)return o;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var h=o;if(typeof o=="string"&&(h=a.querySelector(o),!h))throw new Error("`".concat(i,"` as selector refers to no known node"));return h},g=function(){var i=N("initialFocus");if(i===!1)return!1;if(i===void 0||!$(i,s.tabbableOptions))if(b(a.activeElement)>=0)i=a.activeElement;else{var o=r.tabbableGroups[0],c=o&&o.firstTabbableNode;i=c||N("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},T=function(){if(r.containerGroups=r.containers.map(function(i){var o=Xe(i,s.tabbableOptions),c=Je(i,s.tabbableOptions),d=o.length>0?o[0]:void 0,v=o.length>0?o[o.length-1]:void 0,h=c.find(function(y){return O(y)}),m=c.slice().reverse().find(function(y){return O(y)}),w=!!o.find(function(y){return P(y)>0});return{container:i,tabbableNodes:o,focusableNodes:c,posTabIndexesFound:w,firstTabbableNode:d,lastTabbableNode:v,firstDomTabbableNode:h,lastDomTabbableNode:m,nextTabbableNode:function(S){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,E=o.indexOf(S);return E<0?R?c.slice(c.indexOf(S)+1).find(function(C){return O(C)}):c.slice(0,c.indexOf(S)).reverse().find(function(C){return O(C)}):o[E+(R?1:-1)]}}}),r.tabbableGroups=r.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),r.tabbableGroups.length<=0&&!N("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(r.containerGroups.find(function(i){return i.posTabIndexesFound})&&r.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},F=function p(i){if(i!==!1&&i!==a.activeElement){if(!i||!i.focus){p(g());return}i.focus({preventScroll:!!s.preventScroll}),r.mostRecentlyFocusedNode=i,at(i)&&i.select()}},Y=function(i){var o=N("setReturnFocus",i);return o||(o===!1?!1:i)},Z=function(i){var o=i.target,c=i.event,d=i.isBackward,v=d===void 0?!1:d;o=o||B(c),T();var h=null;if(r.tabbableGroups.length>0){var m=b(o,c),w=m>=0?r.containerGroups[m]:void 0;if(m<0)v?h=r.tabbableGroups[r.tabbableGroups.length-1].lastTabbableNode:h=r.tabbableGroups[0].firstTabbableNode;else if(v){var y=se(r.tabbableGroups,function(G){var U=G.firstTabbableNode;return o===U});if(y<0&&(w.container===o||$(o,s.tabbableOptions)&&!O(o,s.tabbableOptions)&&!w.nextTabbableNode(o,!1))&&(y=m),y>=0){var S=y===0?r.tabbableGroups.length-1:y-1,R=r.tabbableGroups[S];h=P(o)>=0?R.lastTabbableNode:R.lastDomTabbableNode}else A(c)||(h=w.nextTabbableNode(o,!1))}else{var E=se(r.tabbableGroups,function(G){var U=G.lastTabbableNode;return o===U});if(E<0&&(w.container===o||$(o,s.tabbableOptions)&&!O(o,s.tabbableOptions)&&!w.nextTabbableNode(o))&&(E=m),E>=0){var C=E===r.tabbableGroups.length-1?0:E+1,ee=r.tabbableGroups[C];h=P(o)>=0?ee.firstTabbableNode:ee.firstDomTabbableNode}else A(c)||(h=w.nextTabbableNode(o))}}else h=N("fallbackFocus");return h},x=function(i){var o=B(i);if(!(b(o,i)>=0)){if(I(s.clickOutsideDeactivates,i)){l.deactivate({returnFocus:s.returnFocusOnDeactivate});return}I(s.allowOutsideClick,i)||i.preventDefault()}},z=function(i){var o=B(i),c=b(o,i)>=0;if(c||o instanceof Document)c&&(r.mostRecentlyFocusedNode=o);else{i.stopImmediatePropagation();var d,v=!0;if(r.mostRecentlyFocusedNode)if(P(r.mostRecentlyFocusedNode)>0){var h=b(r.mostRecentlyFocusedNode),m=r.containerGroups[h].tabbableNodes;if(m.length>0){var w=m.findIndex(function(y){return y===r.mostRecentlyFocusedNode});w>=0&&(s.isKeyForward(r.recentNavEvent)?w+1<m.length&&(d=m[w+1],v=!1):w-1>=0&&(d=m[w-1],v=!1))}}else r.containerGroups.some(function(y){return y.tabbableNodes.some(function(S){return P(S)>0})})||(v=!1);else v=!1;v&&(d=Z({target:r.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(r.recentNavEvent)})),F(d||r.mostRecentlyFocusedNode||g())}r.recentNavEvent=void 0},ye=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;r.recentNavEvent=i;var c=Z({event:i,isBackward:o});c&&(A(i)&&i.preventDefault(),F(c))},X=function(i){if(rt(i)&&I(s.escapeDeactivates,i)!==!1){i.preventDefault(),l.deactivate();return}(s.isKeyForward(i)||s.isKeyBackward(i))&&ye(i,s.isKeyBackward(i))},J=function(i){var o=B(i);b(o,i)>=0||I(s.clickOutsideDeactivates,i)||I(s.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},Q=function(){if(r.active)return oe.activateTrap(u,l),r.delayInitialFocusTimer=s.delayInitialFocus?ue(function(){F(g())}):F(g()),a.addEventListener("focusin",z,!0),a.addEventListener("mousedown",x,{capture:!0,passive:!1}),a.addEventListener("touchstart",x,{capture:!0,passive:!1}),a.addEventListener("click",J,{capture:!0,passive:!1}),a.addEventListener("keydown",X,{capture:!0,passive:!1}),l},H=function(){if(r.active)return a.removeEventListener("focusin",z,!0),a.removeEventListener("mousedown",x,!0),a.removeEventListener("touchstart",x,!0),a.removeEventListener("click",J,!0),a.removeEventListener("keydown",X,!0),l},we=function(i){var o=i.some(function(c){var d=Array.from(c.removedNodes);return d.some(function(v){return v===r.mostRecentlyFocusedNode})});o&&F(g())},M=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(we):void 0,k=function(){M&&(M.disconnect(),r.active&&!r.paused&&r.containers.map(function(i){M.observe(i,{subtree:!0,childList:!0})}))};return l={get active(){return r.active},get paused(){return r.paused},activate:function(i){if(r.active)return this;var o=f(i,"onActivate"),c=f(i,"onPostActivate"),d=f(i,"checkCanFocusTrap");d||T(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=a.activeElement,o==null||o();var v=function(){d&&T(),Q(),k(),c==null||c()};return d?(d(r.containers.concat()).then(v,v),this):(v(),this)},deactivate:function(i){if(!r.active)return this;var o=ie({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},i);clearTimeout(r.delayInitialFocusTimer),r.delayInitialFocusTimer=void 0,H(),r.active=!1,r.paused=!1,k(),oe.deactivateTrap(u,l);var c=f(o,"onDeactivate"),d=f(o,"onPostDeactivate"),v=f(o,"checkCanReturnFocus"),h=f(o,"returnFocus","returnFocusOnDeactivate");c==null||c();var m=function(){ue(function(){h&&F(Y(r.nodeFocusedBeforeActivation)),d==null||d()})};return h&&v?(v(Y(r.nodeFocusedBeforeActivation)).then(m,m),this):(m(),this)},pause:function(i){if(r.paused||!r.active)return this;var o=f(i,"onPause"),c=f(i,"onPostPause");return r.paused=!0,o==null||o(),H(),k(),c==null||c(),this},unpause:function(i){if(!r.paused||!r.active)return this;var o=f(i,"onUnpause"),c=f(i,"onPostUnpause");return r.paused=!1,o==null||o(),T(),Q(),k(),c==null||c(),this},updateContainerElements:function(i){var o=[].concat(i).filter(Boolean);return r.containers=o.map(function(c){return typeof c=="string"?a.querySelector(c):c}),r.active&&T(),k(),this}},l.updateContainerElements(e),l},st=Object.defineProperty,ct=Object.defineProperties,lt=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,ce=(n,e,t)=>e in n?st(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ft=(n,e)=>{for(var t in e||(e={}))me.call(e,t)&&ce(n,t,e[t]);if(V)for(var t of V(e))ge.call(e,t)&&ce(n,t,e[t]);return n},dt=(n,e)=>ct(n,lt(e)),vt=(n,e)=>{var t={};for(var a in n)me.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(n!=null&&V)for(var a of V(n))e.indexOf(a)<0&&ge.call(n,a)&&(t[a]=n[a]);return t};function bt(n,e={}){let t;const a=e,{immediate:u}=a,s=vt(a,["immediate"]),r=q(!1),l=q(!1),f=T=>t&&t.activate(T),b=T=>t&&t.deactivate(T),N=()=>{t&&(t.pause(),l.value=!0)},g=()=>{t&&(t.unpause(),l.value=!1)};return le(()=>Ae(n),T=>{T&&(t=ut(T,dt(ft({},s),{onActivate(){r.value=!0,e.onActivate&&e.onActivate()},onDeactivate(){r.value=!1,e.onDeactivate&&e.onDeactivate()}})),u&&f())},{flush:"post"}),xe(()=>b()),{hasFocus:r,isPaused:l,activate:f,deactivate:b,pause:N,unpause:g}}const pt=Fe({__name:"Modal",props:{modelValue:{type:Boolean,default:!1},focusTrap:{type:Boolean,default:!0},transitionDuration:{type:Number,default:200},scrimBackgroundColor:Ee("{elements.modal.scrim.backgroundColor}")},emits:["update:modelValue"],setup(n){const e=n,t=q(),{activate:a,deactivate:u}=bt(t),{lock:s,unlock:r}=Be();return le(()=>e.modelValue,l=>{l?(s(),e.focusTrap&&setTimeout(()=>{a()})):(r(),e.focusTrap&&u())}),(l,f)=>{const b=Ne;return te(),Se(Ce,{to:"body"},[ae(Re,{name:"modal",duration:n.transitionDuration},{default:Pe(()=>[n.modelValue?(te(),De("div",{key:0,ref_key:"modalRef",ref:t,class:"modal-wrapper",tabindex:"0",onClick:f[0]||(f[0]=N=>l.$emit("update:modelValue"))},[ae(b,{color:e.scrimBackgroundColor,opacity:"0.6"},null,8,["color"]),Oe(l.$slots,"default",{},void 0,!0)],512)):ke("",!0)]),_:3},8,["duration"])])}}});const yt=Ie(pt,[["__scopeId","data-v-f33a5ffb"]]);export{yt as default};
