/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@pnotify/core/dist/PNotify.js":
/*!****************************************************!*\
  !*** ./node_modules/@pnotify/core/dist/PNotify.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):0}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,n){return(f=u()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return n&&l(o,n.prototype),o}).apply(null,arguments)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?d(t):e}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,e)||v(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function g(){}function $(t,e){for(var n in e)t[n]=e[n];return t}function _(t){return t()}function k(){return Object.create(null)}function x(t){t.forEach(_)}function b(t){return"function"==typeof t}function w(t,n){return t!=t?n==n:t!==n||t&&"object"===e(t)||"function"==typeof t}function O(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function T(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function E(){return H(" ")}function S(){return H("")}function N(t,e,n,i){return t.addEventListener(e,n,i),function(){return t.removeEventListener(e,n,i)}}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t){return Array.from(t.childNodes)}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}var j,R=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n(this,t),this.a=e,this.e=this.n=null}return o(t,[{key:"m",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.e||(this.e=T(e.nodeName),this.t=e,this.h(t)),this.i(n)}},{key:"h",value:function(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}},{key:"i",value:function(t){for(var e=0;e<this.n.length;e+=1)C(this.t,this.n[e],t)}},{key:"p",value:function(t){this.d(),this.h(t),this.i(this.a)}},{key:"d",value:function(){this.n.forEach(M)}}]),t}();function W(t){j=t}function I(){if(!j)throw new Error("Function called outside component initialization");return j}function D(){var t=I();return function(e,n){var i=t.$$.callbacks[e];if(i){var o=function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);i.slice().forEach((function(e){e.call(t,o)}))}}}function F(t,e){var n=t.$$.callbacks[e.type];n&&n.slice().forEach((function(t){return t(e)}))}var q=[],B=[],z=[],U=[],G=Promise.resolve(),J=!1;function K(){J||(J=!0,G.then(Z))}function Q(){return K(),G}function V(t){z.push(t)}var X=!1,Y=new Set;function Z(){if(!X){X=!0;do{for(var t=0;t<q.length;t+=1){var e=q[t];W(e),tt(e.$$)}for(W(null),q.length=0;B.length;)B.pop()();for(var n=0;n<z.length;n+=1){var i=z[n];Y.has(i)||(Y.add(i),i())}z.length=0}while(q.length);for(;U.length;)U.pop()();J=!1,X=!1,Y.clear()}}function tt(t){if(null!==t.fragment){t.update(),x(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}var et,nt=new Set;function it(){et={r:0,c:[],p:et}}function ot(){et.r||x(et.c),et=et.p}function rt(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function st(t,e,n,i){if(t&&t.o){if(nt.has(t))return;nt.add(t),et.c.push((function(){nt.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}var at="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:__webpack_require__.g;function ct(t,e){st(t,1,1,(function(){e.delete(t.key)}))}function lt(t,e,n,i,o,r,s,a,c,l,u,f){for(var d=t.length,h=r.length,p=d,m={};p--;)m[t[p].key]=p;var v=[],y=new Map,g=new Map;for(p=h;p--;){var $=f(o,r,p),_=n($),k=s.get(_);k?i&&k.p($,e):(k=l(_,$)).c(),y.set(_,v[p]=k),_ in m&&g.set(_,Math.abs(p-m[_]))}var x=new Set,b=new Set;function w(t){rt(t,1),t.m(a,u),s.set(t.key,t),u=t.first,h--}for(;d&&h;){var O=v[h-1],C=t[d-1],M=O.key,T=C.key;O===C?(u=O.first,d--,h--):y.has(T)?!s.has(M)||x.has(M)?w(O):b.has(T)?d--:g.get(M)>g.get(T)?(b.add(M),w(O)):(x.add(T),d--):(c(C,s),d--)}for(;d--;){var H=t[d];y.has(H.key)||c(H,s)}for(;h;)w(v[h-1]);return v}function ut(t,e){for(var n={},i={},o={$$scope:1},r=t.length;r--;){var s=t[r],a=e[r];if(a){for(var c in s)c in a||(i[c]=1);for(var l in a)o[l]||(n[l]=a[l],o[l]=1);t[r]=a}else for(var u in s)o[u]=1}for(var f in i)f in n||(n[f]=void 0);return n}function ft(t){return"object"===e(t)&&null!==t?t:{}}function dt(t){t&&t.c()}function ht(t,e,n){var i=t.$$,o=i.fragment,r=i.on_mount,s=i.on_destroy,a=i.after_update;o&&o.m(e,n),V((function(){var e=r.map(_).filter(b);s?s.push.apply(s,m(e)):x(e),t.$$.on_mount=[]})),a.forEach(V)}function pt(t,e){var n=t.$$;null!==n.fragment&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(q.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}var vt=function(){function t(){n(this,t)}return o(t,[{key:"$destroy",value:function(){pt(this,1),this.$destroy=g}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}]),t}(),yt=function(){function t(e){if(n(this,t),Object.assign(this,{dir1:null,dir2:null,firstpos1:null,firstpos2:null,spacing1:25,spacing2:25,push:"bottom",maxOpen:1,maxStrategy:"wait",maxClosureCausesWait:!0,modal:"ish",modalishFlash:!0,overlayClose:!0,overlayClosesPinned:!1,positioned:!0,context:window&&document.body||null},e),"ish"===this.modal&&1!==this.maxOpen)throw new Error("A modalish stack must have a maxOpen value of 1.");if("ish"===this.modal&&!this.dir1)throw new Error("A modalish stack must have a direction.");if("top"===this.push&&"ish"===this.modal&&"close"!==this.maxStrategy)throw new Error("A modalish stack that pushes to the top must use the close maxStrategy.");this._noticeHead={notice:null,prev:null,next:null},this._noticeTail={notice:null,prev:this._noticeHead,next:null},this._noticeHead.next=this._noticeTail,this._noticeMap=new WeakMap,this._length=0,this._addpos2=0,this._animation=!0,this._posTimer=null,this._openNotices=0,this._listener=null,this._overlayOpen=!1,this._overlayInserted=!1,this._collapsingModalState=!1,this._leader=null,this._leaderOff=null,this._masking=null,this._maskingOff=null,this._swapping=!1,this._callbacks={}}return o(t,[{key:"forEach",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.start,o=void 0===i?"oldest":i,r=n.dir,s=void 0===r?"newer":r,a=n.skipModuleHandled,c=void 0!==a&&a;if("head"===o||"newest"===o&&"top"===this.push||"oldest"===o&&"bottom"===this.push)e=this._noticeHead.next;else if("tail"===o||"newest"===o&&"bottom"===this.push||"oldest"===o&&"top"===this.push)e=this._noticeTail.prev;else{if(!this._noticeMap.has(o))throw new Error("Invalid start param.");e=this._noticeMap.get(o)}for(;e.notice;){var l=e.notice;if("prev"===s||"top"===this.push&&"newer"===s||"bottom"===this.push&&"older"===s)e=e.prev;else{if(!("next"===s||"top"===this.push&&"older"===s||"bottom"===this.push&&"newer"===s))throw new Error("Invalid dir param.");e=e.next}if(!(c&&l.getModuleHandled()||!1!==t(l)))break}}},{key:"close",value:function(t){this.forEach((function(e){return e.close(t,!1,!1)}))}},{key:"open",value:function(t){this.forEach((function(e){return e.open(t)}))}},{key:"openLast",value:function(){this.forEach((function(t){if(-1===["opening","open","waiting"].indexOf(t.getState()))return t.open(),!1}),{start:"newest",dir:"older"})}},{key:"swap",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return-1===["open","opening","closing"].indexOf(t.getState())?Promise.reject():(this._swapping=e,t.close(i,!1,o).then((function(){return e.open(i)})).finally((function(){n._swapping=!1})))}},{key:"on",value:function(t,e){var n=this;return t in this._callbacks||(this._callbacks[t]=[]),this._callbacks[t].push(e),function(){n._callbacks[t].splice(n._callbacks[t].indexOf(e),1)}}},{key:"fire",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.stack=this,t in this._callbacks&&this._callbacks[t].forEach((function(t){return t(e)}))}},{key:"position",value:function(){var t=this;this.positioned&&this._length>0?(this.fire("beforePosition"),this._resetPositionData(),this.forEach((function(e){t._positionNotice(e)}),{start:"head",dir:"next",skipModuleHandled:!0}),this.fire("afterPosition")):(delete this._nextpos1,delete this._nextpos2)}},{key:"queuePosition",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this._posTimer&&clearTimeout(this._posTimer),this._posTimer=setTimeout((function(){return t.position()}),e)}},{key:"_resetPositionData",value:function(){this._nextpos1=this.firstpos1,this._nextpos2=this.firstpos2,this._addpos2=0}},{key:"_positionNotice",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t===this._masking;if(this.positioned){var n=t.refs.elem;if(n&&(n.classList.contains("pnotify-in")||n.classList.contains("pnotify-initial")||e)){var i=[this.firstpos1,this.firstpos2,this._nextpos1,this._nextpos2,this._addpos2],o=i[0],r=i[1],s=i[2],a=i[3],c=i[4];n.getBoundingClientRect(),!this._animation||e||this._collapsingModalState?t._setMoveClass(""):t._setMoveClass("pnotify-move");var l,u=this.context===document.body?window.innerHeight:this.context.scrollHeight,f=this.context===document.body?window.innerWidth:this.context.scrollWidth;if(this.dir1){var d;switch(l={down:"top",up:"bottom",left:"right",right:"left"}[this.dir1],this.dir1){case"down":d=n.offsetTop;break;case"up":d=u-n.scrollHeight-n.offsetTop;break;case"left":d=f-n.scrollWidth-n.offsetLeft;break;case"right":d=n.offsetLeft}null==o&&(s=o=d)}if(this.dir1&&this.dir2){var h,p={down:"top",up:"bottom",left:"right",right:"left"}[this.dir2];switch(this.dir2){case"down":h=n.offsetTop;break;case"up":h=u-n.scrollHeight-n.offsetTop;break;case"left":h=f-n.scrollWidth-n.offsetLeft;break;case"right":h=n.offsetLeft}if(null==r&&(a=r=h),!e){var m=s+n.offsetHeight+this.spacing1,v=s+n.offsetWidth+this.spacing1;(("down"===this.dir1||"up"===this.dir1)&&m>u||("left"===this.dir1||"right"===this.dir1)&&v>f)&&(s=o,a+=c+this.spacing2,c=0)}switch(null!=a&&(n.style[p]="".concat(a,"px"),this._animation||n.style[p]),this.dir2){case"down":case"up":n.offsetHeight+(parseFloat(n.style.marginTop,10)||0)+(parseFloat(n.style.marginBottom,10)||0)>c&&(c=n.offsetHeight);break;case"left":case"right":n.offsetWidth+(parseFloat(n.style.marginLeft,10)||0)+(parseFloat(n.style.marginRight,10)||0)>c&&(c=n.offsetWidth)}}else if(this.dir1){var y,g;switch(this.dir1){case"down":case"up":g=["left","right"],y=this.context.scrollWidth/2-n.offsetWidth/2;break;case"left":case"right":g=["top","bottom"],y=u/2-n.offsetHeight/2}n.style[g[0]]="".concat(y,"px"),n.style[g[1]]="auto",this._animation||n.style[g[0]]}if(this.dir1)switch(null!=s&&(n.style[l]="".concat(s,"px"),this._animation||n.style[l]),this.dir1){case"down":case"up":s+=n.offsetHeight+this.spacing1;break;case"left":case"right":s+=n.offsetWidth+this.spacing1}else{var $=f/2-n.offsetWidth/2,_=u/2-n.offsetHeight/2;n.style.left="".concat($,"px"),n.style.top="".concat(_,"px"),this._animation||n.style.left}e||(this.firstpos1=o,this.firstpos2=r,this._nextpos1=s,this._nextpos2=a,this._addpos2=c)}}}},{key:"_addNotice",value:function(t){var e=this;this.fire("beforeAddNotice",{notice:t});var n=function(){if(e.fire("beforeOpenNotice",{notice:t}),t.getModuleHandled())e.fire("afterOpenNotice",{notice:t});else{if(e._openNotices++,("ish"!==e.modal||!e._overlayOpen)&&e.maxOpen!==1/0&&e._openNotices>e.maxOpen&&"close"===e.maxStrategy){var n=e._openNotices-e.maxOpen;e.forEach((function(t){if(-1!==["opening","open"].indexOf(t.getState()))return t.close(!1,!1,e.maxClosureCausesWait),t===e._leader&&e._setLeader(null),!!--n}))}!0===e.modal&&e._insertOverlay(),"ish"!==e.modal||e._leader&&-1!==["opening","open","closing"].indexOf(e._leader.getState())||e._setLeader(t),"ish"===e.modal&&e._overlayOpen&&t._preventTimerClose(!0),e.fire("afterOpenNotice",{notice:t})}},i={notice:t,prev:null,next:null,beforeOpenOff:t.on("pnotify:beforeOpen",n),afterCloseOff:t.on("pnotify:afterClose",(function(){if(e.fire("beforeCloseNotice",{notice:t}),t.getModuleHandled())e.fire("afterCloseNotice",{notice:t});else{if(e._openNotices--,"ish"===e.modal&&t===e._leader&&(e._setLeader(null),e._masking&&e._setMasking(null)),!e._swapping&&e.maxOpen!==1/0&&e._openNotices<e.maxOpen){var n=!1,i=function(i){if(i!==t&&"waiting"===i.getState()&&(i.open().catch((function(){})),e._openNotices>=e.maxOpen))return n=!0,!1};"wait"===e.maxStrategy?(e.forEach(i,{start:t,dir:"next"}),n||e.forEach(i,{start:t,dir:"prev"})):"close"===e.maxStrategy&&e.maxClosureCausesWait&&(e.forEach(i,{start:t,dir:"older"}),n||e.forEach(i,{start:t,dir:"newer"}))}e._openNotices<=0?(e._openNotices=0,e._resetPositionData(),e._overlayOpen&&!e._swapping&&e._removeOverlay()):e._collapsingModalState||e.queuePosition(0),e.fire("afterCloseNotice",{notice:t})}}))};if("top"===this.push?(i.next=this._noticeHead.next,i.prev=this._noticeHead,i.next.prev=i,i.prev.next=i):(i.prev=this._noticeTail.prev,i.next=this._noticeTail,i.prev.next=i,i.next.prev=i),this._noticeMap.set(t,i),this._length++,this._listener||(this._listener=function(){return e.position()},this.context.addEventListener("pnotify:position",this._listener)),-1!==["open","opening","closing"].indexOf(t.getState()))n();else if("ish"===this.modal&&this.modalishFlash&&this._shouldNoticeWait(t))var o=t.on("pnotify:mount",(function(){o(),t._setMasking(!0,!1,(function(){t._setMasking(!1)})),e._resetPositionData(),e._positionNotice(e._leader),window.requestAnimationFrame((function(){e._positionNotice(t,!0)}))}));this.fire("afterAddNotice",{notice:t})}},{key:"_removeNotice",value:function(t){if(this._noticeMap.has(t)){this.fire("beforeRemoveNotice",{notice:t});var e=this._noticeMap.get(t);this._leader===t&&this._setLeader(null),this._masking===t&&this._setMasking(null),e.prev.next=e.next,e.next.prev=e.prev,e.prev=null,e.next=null,e.beforeOpenOff(),e.beforeOpenOff=null,e.afterCloseOff(),e.afterCloseOff=null,this._noticeMap.delete(t),this._length--,!this._length&&this._listener&&(this.context.removeEventListener("pnotify:position",this._listener),this._listener=null),!this._length&&this._overlayOpen&&this._removeOverlay(),-1!==["open","opening","closing"].indexOf(t.getState())&&this._handleNoticeClosed(t),this.fire("afterRemoveNotice",{notice:t})}}},{key:"_setLeader",value:function(t){var e=this;if(this.fire("beforeSetLeader",{leader:t}),this._leaderOff&&(this._leaderOff(),this._leaderOff=null),this._leader=t,this._leader){var n,i=function(){var t=null;e._overlayOpen&&(e._collapsingModalState=!0,e.forEach((function(n){n._preventTimerClose(!1),n!==e._leader&&-1!==["opening","open"].indexOf(n.getState())&&(t||(t=n),n.close(n===t,!1,!0))}),{start:e._leader,dir:"next",skipModuleHandled:!0}),e._removeOverlay()),o&&(clearTimeout(o),o=null),e.forEach((function(n){if(n!==e._leader)return"waiting"===n.getState()||n===t?(e._setMasking(n,!!t),!1):void 0}),{start:e._leader,dir:"next",skipModuleHandled:!0})},o=null,r=function(){o&&(clearTimeout(o),o=null),o=setTimeout((function(){o=null,e._setMasking(null)}),750)};this._leaderOff=(n=[this._leader.on("mouseenter",i),this._leader.on("focusin",i),this._leader.on("mouseleave",r),this._leader.on("focusout",r)],function(){return n.map((function(t){return t()}))}),this.fire("afterSetLeader",{leader:t})}else this.fire("afterSetLeader",{leader:t})}},{key:"_setMasking",value:function(t,e){var n=this;if(this._masking){if(this._masking===t)return;this._masking._setMasking(!1,e)}if(this._maskingOff&&(this._maskingOff(),this._maskingOff=null),this._masking=t,this._masking){this._resetPositionData(),this._leader&&this._positionNotice(this._leader),this._masking._setMasking(!0,e),window.requestAnimationFrame((function(){n._masking&&n._positionNotice(n._masking)}));var i,o=function(){"ish"===n.modal&&(n._insertOverlay(),n._setMasking(null,!0),n.forEach((function(t){t._preventTimerClose(!0),"waiting"===t.getState()&&t.open()}),{start:n._leader,dir:"next",skipModuleHandled:!0}))};this._maskingOff=(i=[this._masking.on("mouseenter",o),this._masking.on("focusin",o)],function(){return i.map((function(t){return t()}))})}}},{key:"_shouldNoticeWait",value:function(t){return this._swapping!==t&&!("ish"===this.modal&&this._overlayOpen)&&this.maxOpen!==1/0&&this._openNotices>=this.maxOpen&&"wait"===this.maxStrategy}},{key:"_insertOverlay",value:function(){var t=this;this._overlay||(this._overlay=document.createElement("div"),this._overlay.classList.add("pnotify-modal-overlay"),this.dir1&&this._overlay.classList.add("pnotify-modal-overlay-".concat(this.dir1)),this.overlayClose&&this._overlay.classList.add("pnotify-modal-overlay-closes"),this.context!==document.body&&(this._overlay.style.height="".concat(this.context.scrollHeight,"px"),this._overlay.style.width="".concat(this.context.scrollWidth,"px")),this._overlay.addEventListener("click",(function(e){if(t.overlayClose){if(t.fire("overlayClose",{clickEvent:e}),e.defaultPrevented)return;t._leader&&t._setLeader(null),t.forEach((function(e){-1===["closed","closing","waiting"].indexOf(e.getState())&&(e.hide||t.overlayClosesPinned?e.close():e.hide||"ish"!==t.modal||(t._leader?e.close(!1,!1,!0):t._setLeader(e)))}),{skipModuleHandled:!0}),t._overlayOpen&&t._removeOverlay()}}))),this._overlay.parentNode!==this.context&&(this.fire("beforeAddOverlay"),this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlay=this.context.insertBefore(this._overlay,this.context.firstChild),this._overlayOpen=!0,this._overlayInserted=!0,window.requestAnimationFrame((function(){t._overlay.classList.add("pnotify-modal-overlay-in"),t.fire("afterAddOverlay")}))),this._collapsingModalState=!1}},{key:"_removeOverlay",value:function(){var t=this;this._overlay.parentNode&&(this.fire("beforeRemoveOverlay"),this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlayOpen=!1,setTimeout((function(){t._overlayInserted=!1,t._overlay.parentNode&&(t._overlay.parentNode.removeChild(t._overlay),t.fire("afterRemoveOverlay"))}),250),setTimeout((function(){t._collapsingModalState=!1}),400))}},{key:"notices",get:function(){var t=[];return this.forEach((function(e){return t.push(e)})),t}},{key:"length",get:function(){return this._length}},{key:"leader",get:function(){return this._leader}}]),t}(),gt=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return f(Jt,e)};var $t=at.Map;function _t(t,e,n){var i=t.slice();return i[109]=e[n][0],i[110]=e[n][1],i}function kt(t,e,n){var i=t.slice();return i[109]=e[n][0],i[110]=e[n][1],i}function xt(t,e,n){var i=t.slice();return i[109]=e[n][0],i[110]=e[n][1],i}function bt(t,e,n){var i=t.slice();return i[109]=e[n][0],i[110]=e[n][1],i}function wt(t,e){var n,i,o,r,s=[{self:e[42]},e[110]],a=e[109].default;function c(t){for(var e={},n=0;n<s.length;n+=1)e=$(e,s[n]);return{props:e}}return a&&(i=new a(c())),{key:t,first:null,c:function(){n=S(),i&&dt(i.$$.fragment),o=S(),this.first=n},m:function(t,e){C(t,n,e),i&&ht(i,t,e),C(t,o,e),r=!0},p:function(t,e){var n=2176&e[1]?ut(s,[2048&e[1]&&{self:t[42]},128&e[1]&&ft(t[110])]):{};if(a!==(a=t[109].default)){if(i){it();var r=i;st(r.$$.fragment,1,0,(function(){pt(r,1)})),ot()}a?(dt((i=new a(c())).$$.fragment),rt(i.$$.fragment,1),ht(i,o.parentNode,o)):i=null}else a&&i.$set(n)},i:function(t){r||(i&&rt(i.$$.fragment,t),r=!0)},o:function(t){i&&st(i.$$.fragment,t),r=!1},d:function(t){t&&M(n),t&&M(o),i&&pt(i,t)}}}function Ot(t){var e,n,i,o,r,s;return{c:function(){e=T("div"),P(n=T("span"),"class",t[22]("closer")),P(e,"class",i="pnotify-closer ".concat(t[21]("closer")," ").concat(t[17]&&!t[26]||t[28]?"pnotify-hidden":"")),P(e,"role","button"),P(e,"tabindex","0"),P(e,"title",o=t[20].close)},m:function(i,o){C(i,e,o),O(e,n),r||(s=N(e,"click",t[81]),r=!0)},p:function(t,n){335675392&n[0]&&i!==(i="pnotify-closer ".concat(t[21]("closer")," ").concat(t[17]&&!t[26]||t[28]?"pnotify-hidden":""))&&P(e,"class",i),1048576&n[0]&&o!==(o=t[20].close)&&P(e,"title",o)},d:function(t){t&&M(e),r=!1,s()}}}function Ct(t){var e,n,i,o,r,s,a,c;return{c:function(){e=T("div"),P(n=T("span"),"class",i="".concat(t[22]("sticker")," ").concat(t[3]?t[22]("unstuck"):t[22]("stuck"))),P(e,"class",o="pnotify-sticker ".concat(t[21]("sticker")," ").concat(t[19]&&!t[26]||t[28]?"pnotify-hidden":"")),P(e,"role","button"),P(e,"aria-pressed",r=!t[3]),P(e,"tabindex","0"),P(e,"title",s=t[3]?t[20].stick:t[20].unstick)},m:function(i,o){C(i,e,o),O(e,n),a||(c=N(e,"click",t[82]),a=!0)},p:function(t,a){8&a[0]&&i!==(i="".concat(t[22]("sticker")," ").concat(t[3]?t[22]("unstuck"):t[22]("stuck")))&&P(n,"class",i),336068608&a[0]&&o!==(o="pnotify-sticker ".concat(t[21]("sticker")," ").concat(t[19]&&!t[26]||t[28]?"pnotify-hidden":""))&&P(e,"class",o),8&a[0]&&r!==(r=!t[3])&&P(e,"aria-pressed",r),1048584&a[0]&&s!==(s=t[3]?t[20].stick:t[20].unstick)&&P(e,"title",s)},d:function(t){t&&M(e),a=!1,c()}}}function Mt(t){var e,n,i;return{c:function(){e=T("div"),P(n=T("span"),"class",i=!0===t[13]?t[22](t[4]):t[13]),P(e,"class","pnotify-icon ".concat(t[21]("icon")))},m:function(i,o){C(i,e,o),O(e,n),t[83](e)},p:function(t,e){8208&e[0]&&i!==(i=!0===t[13]?t[22](t[4]):t[13])&&P(n,"class",i)},d:function(n){n&&M(e),t[83](null)}}}function Tt(t,e){var n,i,o,r,s=[{self:e[42]},e[110]],a=e[109].default;function c(t){for(var e={},n=0;n<s.length;n+=1)e=$(e,s[n]);return{props:e}}return a&&(i=new a(c())),{key:t,first:null,c:function(){n=S(),i&&dt(i.$$.fragment),o=S(),this.first=n},m:function(t,e){C(t,n,e),i&&ht(i,t,e),C(t,o,e),r=!0},p:function(t,e){var n=2304&e[1]?ut(s,[2048&e[1]&&{self:t[42]},256&e[1]&&ft(t[110])]):{};if(a!==(a=t[109].default)){if(i){it();var r=i;st(r.$$.fragment,1,0,(function(){pt(r,1)})),ot()}a?(dt((i=new a(c())).$$.fragment),rt(i.$$.fragment,1),ht(i,o.parentNode,o)):i=null}else a&&i.$set(n)},i:function(t){r||(i&&rt(i.$$.fragment,t),r=!0)},o:function(t){i&&st(i.$$.fragment,t),r=!1},d:function(t){t&&M(n),t&&M(o),i&&pt(i,t)}}}function Ht(t){var e,n=!t[34]&&Et(t);return{c:function(){e=T("div"),n&&n.c(),P(e,"class","pnotify-title ".concat(t[21]("title")))},m:function(i,o){C(i,e,o),n&&n.m(e,null),t[84](e)},p:function(t,i){t[34]?n&&(n.d(1),n=null):n?n.p(t,i):((n=Et(t)).c(),n.m(e,null))},d:function(i){i&&M(e),n&&n.d(),t[84](null)}}}function Et(t){var e;function n(t,e){return t[6]?Nt:St}var i=n(t),o=i(t);return{c:function(){o.c(),e=S()},m:function(t,n){o.m(t,n),C(t,e,n)},p:function(t,r){i===(i=n(t))&&o?o.p(t,r):(o.d(1),(o=i(t))&&(o.c(),o.m(e.parentNode,e)))},d:function(t){o.d(t),t&&M(e)}}}function St(t){var e,n;return{c:function(){e=T("span"),n=H(t[5]),P(e,"class","pnotify-pre-line")},m:function(t,i){C(t,e,i),O(e,n)},p:function(t,e){32&e[0]&&L(n,t[5])},d:function(t){t&&M(e)}}}function Nt(t){var e,n;return{c:function(){n=S(),e=new R(n)},m:function(i,o){e.m(t[5],i,o),C(i,n,o)},p:function(t,n){32&n[0]&&e.p(t[5])},d:function(t){t&&M(n),t&&e.d()}}}function Pt(t){var e,n,i=!t[35]&&At(t);return{c:function(){e=T("div"),i&&i.c(),P(e,"class",n="pnotify-text ".concat(t[21]("text")," ").concat(""===t[33]?"":"pnotify-text-with-max-height")),P(e,"style",t[33]),P(e,"role","alert")},m:function(n,o){C(n,e,o),i&&i.m(e,null),t[85](e)},p:function(t,o){t[35]?i&&(i.d(1),i=null):i?i.p(t,o):((i=At(t)).c(),i.m(e,null)),4&o[1]&&n!==(n="pnotify-text ".concat(t[21]("text")," ").concat(""===t[33]?"":"pnotify-text-with-max-height"))&&P(e,"class",n),4&o[1]&&P(e,"style",t[33])},d:function(n){n&&M(e),i&&i.d(),t[85](null)}}}function At(t){var e;function n(t,e){return t[8]?jt:Lt}var i=n(t),o=i(t);return{c:function(){o.c(),e=S()},m:function(t,n){o.m(t,n),C(t,e,n)},p:function(t,r){i===(i=n(t))&&o?o.p(t,r):(o.d(1),(o=i(t))&&(o.c(),o.m(e.parentNode,e)))},d:function(t){o.d(t),t&&M(e)}}}function Lt(t){var e,n;return{c:function(){e=T("span"),n=H(t[7]),P(e,"class","pnotify-pre-line")},m:function(t,i){C(t,e,i),O(e,n)},p:function(t,e){128&e[0]&&L(n,t[7])},d:function(t){t&&M(e)}}}function jt(t){var e,n;return{c:function(){n=S(),e=new R(n)},m:function(i,o){e.m(t[7],i,o),C(i,n,o)},p:function(t,n){128&n[0]&&e.p(t[7])},d:function(t){t&&M(n),t&&e.d()}}}function Rt(t,e){var n,i,o,r,s=[{self:e[42]},e[110]],a=e[109].default;function c(t){for(var e={},n=0;n<s.length;n+=1)e=$(e,s[n]);return{props:e}}return a&&(i=new a(c())),{key:t,first:null,c:function(){n=S(),i&&dt(i.$$.fragment),o=S(),this.first=n},m:function(t,e){C(t,n,e),i&&ht(i,t,e),C(t,o,e),r=!0},p:function(t,e){var n=2560&e[1]?ut(s,[2048&e[1]&&{self:t[42]},512&e[1]&&ft(t[110])]):{};if(a!==(a=t[109].default)){if(i){it();var r=i;st(r.$$.fragment,1,0,(function(){pt(r,1)})),ot()}a?(dt((i=new a(c())).$$.fragment),rt(i.$$.fragment,1),ht(i,o.parentNode,o)):i=null}else a&&i.$set(n)},i:function(t){r||(i&&rt(i.$$.fragment,t),r=!0)},o:function(t){i&&st(i.$$.fragment,t),r=!1},d:function(t){t&&M(n),t&&M(o),i&&pt(i,t)}}}function Wt(t,e){var n,i,o,r,s=[{self:e[42]},e[110]],a=e[109].default;function c(t){for(var e={},n=0;n<s.length;n+=1)e=$(e,s[n]);return{props:e}}return a&&(i=new a(c())),{key:t,first:null,c:function(){n=S(),i&&dt(i.$$.fragment),o=S(),this.first=n},m:function(t,e){C(t,n,e),i&&ht(i,t,e),C(t,o,e),r=!0},p:function(t,e){var n=3072&e[1]?ut(s,[2048&e[1]&&{self:t[42]},1024&e[1]&&ft(t[110])]):{};if(a!==(a=t[109].default)){if(i){it();var r=i;st(r.$$.fragment,1,0,(function(){pt(r,1)})),ot()}a?(dt((i=new a(c())).$$.fragment),rt(i.$$.fragment,1),ht(i,o.parentNode,o)):i=null}else a&&i.$set(n)},i:function(t){r||(i&&rt(i.$$.fragment,t),r=!0)},o:function(t){i&&st(i.$$.fragment,t),r=!1},d:function(t){t&&M(n),t&&M(o),i&&pt(i,t)}}}function It(t){for(var e,n,i,o,r,s,a,c,l,u,f,d,h,p,m,v,y,$=[],_=new $t,k=[],w=new $t,H=[],S=new $t,A=[],L=new $t,j=t[38],R=function(t){return t[109]},W=0;W<j.length;W+=1){var I=bt(t,j,W),D=R(I);_.set(D,$[W]=wt(D,I))}for(var F=t[16]&&!t[36]&&Ot(t),q=t[18]&&!t[36]&&Ct(t),B=!1!==t[13]&&Mt(t),z=t[39],U=function(t){return t[109]},G=0;G<z.length;G+=1){var J=xt(t,z,G),K=U(J);w.set(K,k[G]=Tt(K,J))}for(var Q=!1!==t[5]&&Ht(t),V=!1!==t[7]&&Pt(t),X=t[40],Y=function(t){return t[109]},Z=0;Z<X.length;Z+=1){var tt=kt(t,X,Z),et=Y(tt);S.set(et,H[Z]=Rt(et,tt))}for(var nt=t[41],at=function(t){return t[109]},ut=0;ut<nt.length;ut+=1){var ft=_t(t,nt,ut),dt=at(ft);L.set(dt,A[ut]=Wt(dt,ft))}return{c:function(){e=T("div"),n=T("div");for(var m=0;m<$.length;m+=1)$[m].c();i=E(),F&&F.c(),o=E(),q&&q.c(),r=E(),B&&B.c(),s=E(),a=T("div");for(var v=0;v<k.length;v+=1)k[v].c();c=E(),Q&&Q.c(),l=E(),V&&V.c(),u=E();for(var y=0;y<H.length;y+=1)H[y].c();f=E();for(var g=0;g<A.length;g+=1)A[g].c();P(a,"class","pnotify-content ".concat(t[21]("content"))),P(n,"class",d="pnotify-container ".concat(t[21]("container")," ").concat(t[21](t[4])," ").concat(t[15]?"pnotify-shadow":""," ").concat(t[27].container.join(" "))),P(n,"style",h="".concat(t[31]," ").concat(t[32])),P(n,"role","alert"),P(e,"data-pnotify",""),P(e,"class",p="pnotify ".concat(!t[0]||t[0].positioned?"pnotify-positioned":""," ").concat(!1!==t[13]?"pnotify-with-icon":""," ").concat(t[21]("elem")," pnotify-mode-").concat(t[9]," ").concat(t[10]," ").concat(t[24]," ").concat(t[25]," ").concat(t[37]," ").concat("fade"===t[2]?"pnotify-fade-".concat(t[14]):""," ").concat(t[30]?"pnotify-modal ".concat(t[11]):t[12]," ").concat(t[28]?"pnotify-masking":""," ").concat(t[29]?"pnotify-masking-in":""," ").concat(t[27].elem.join(" "))),P(e,"aria-live","assertive"),P(e,"role","alertdialog")},m:function(d,h){C(d,e,h),O(e,n);for(var p=0;p<$.length;p+=1)$[p].m(n,null);O(n,i),F&&F.m(n,null),O(n,o),q&&q.m(n,null),O(n,r),B&&B.m(n,null),O(n,s),O(n,a);for(var _=0;_<k.length;_+=1)k[_].m(a,null);O(a,c),Q&&Q.m(a,null),O(a,l),V&&V.m(a,null),O(a,u);for(var x=0;x<H.length;x+=1)H[x].m(a,null);t[86](a),O(n,f);for(var w=0;w<A.length;w+=1)A[w].m(n,null);var M;t[87](n),t[88](e),m=!0,v||(y=[(M=t[43].call(null,e),M&&b(M.destroy)?M.destroy:g),N(e,"mouseenter",t[44]),N(e,"mouseleave",t[45]),N(e,"focusin",t[44]),N(e,"focusout",t[45])],v=!0)},p:function(t,f){if(2176&f[1]){var v=t[38];it(),$=lt($,f,R,1,t,v,_,n,ct,wt,i,bt),ot()}if(t[16]&&!t[36]?F?F.p(t,f):((F=Ot(t)).c(),F.m(n,o)):F&&(F.d(1),F=null),t[18]&&!t[36]?q?q.p(t,f):((q=Ct(t)).c(),q.m(n,r)):q&&(q.d(1),q=null),!1!==t[13]?B?B.p(t,f):((B=Mt(t)).c(),B.m(n,s)):B&&(B.d(1),B=null),2304&f[1]){var y=t[39];it(),k=lt(k,f,U,1,t,y,w,a,ct,Tt,c,xt),ot()}if(!1!==t[5]?Q?Q.p(t,f):((Q=Ht(t)).c(),Q.m(a,l)):Q&&(Q.d(1),Q=null),!1!==t[7]?V?V.p(t,f):((V=Pt(t)).c(),V.m(a,u)):V&&(V.d(1),V=null),2560&f[1]){var g=t[40];it(),H=lt(H,f,Y,1,t,g,S,a,ct,Rt,null,kt),ot()}if(3072&f[1]){var x=t[41];it(),A=lt(A,f,at,1,t,x,L,n,ct,Wt,null,_t),ot()}(!m||134250512&f[0]&&d!==(d="pnotify-container ".concat(t[21]("container")," ").concat(t[21](t[4])," ").concat(t[15]?"pnotify-shadow":""," ").concat(t[27].container.join(" "))))&&P(n,"class",d),(!m||3&f[1]&&h!==(h="".concat(t[31]," ").concat(t[32])))&&P(n,"style",h),(!m||2063629829&f[0]|64&f[1]&&p!==(p="pnotify ".concat(!t[0]||t[0].positioned?"pnotify-positioned":""," ").concat(!1!==t[13]?"pnotify-with-icon":""," ").concat(t[21]("elem")," pnotify-mode-").concat(t[9]," ").concat(t[10]," ").concat(t[24]," ").concat(t[25]," ").concat(t[37]," ").concat("fade"===t[2]?"pnotify-fade-".concat(t[14]):""," ").concat(t[30]?"pnotify-modal ".concat(t[11]):t[12]," ").concat(t[28]?"pnotify-masking":""," ").concat(t[29]?"pnotify-masking-in":""," ").concat(t[27].elem.join(" "))))&&P(e,"class",p)},i:function(t){if(!m){for(var e=0;e<j.length;e+=1)rt($[e]);for(var n=0;n<z.length;n+=1)rt(k[n]);for(var i=0;i<X.length;i+=1)rt(H[i]);for(var o=0;o<nt.length;o+=1)rt(A[o]);m=!0}},o:function(t){for(var e=0;e<$.length;e+=1)st($[e]);for(var n=0;n<k.length;n+=1)st(k[n]);for(var i=0;i<H.length;i+=1)st(H[i]);for(var o=0;o<A.length;o+=1)st(A[o]);m=!1},d:function(n){n&&M(e);for(var i=0;i<$.length;i+=1)$[i].d();F&&F.d(),q&&q.d(),B&&B.d();for(var o=0;o<k.length;o+=1)k[o].d();Q&&Q.d(),V&&V.d();for(var r=0;r<H.length;r+=1)H[r].d();t[86](null);for(var s=0;s<A.length;s+=1)A[s].d();t[87](null),t[88](null),v=!1,x(y)}}}function Dt(t,n){"object"!==e(t)&&(t={text:t}),n&&(t.type=n);var i=document.body;return"stack"in t&&t.stack&&t.stack.context&&(i=t.stack.context),{target:i,props:t}}var Ft,qt=new yt({dir1:"down",dir2:"left",firstpos1:25,firstpos2:25,spacing1:36,spacing2:36,push:"bottom"}),Bt=new Map,zt={type:"notice",title:!1,titleTrusted:!1,text:!1,textTrusted:!1,styling:"brighttheme",icons:"brighttheme",mode:"no-preference",addClass:"",addModalClass:"",addModelessClass:"",autoOpen:!0,width:"360px",minHeight:"16px",maxTextHeight:"200px",icon:!0,animation:"fade",animateSpeed:"normal",shadow:!0,hide:!0,delay:8e3,mouseReset:!0,closer:!0,closerHover:!0,sticker:!0,stickerHover:!0,labels:{close:"Close",stick:"Pin",unstick:"Unpin"},remove:!0,destroy:!0,stack:qt,modules:Bt};function Ut(){qt.context||(qt.context=document.body),window.addEventListener("resize",(function(){Ft&&clearTimeout(Ft),Ft=setTimeout((function(){var t=new Event("pnotify:position");document.body.dispatchEvent(t),Ft=null}),10)}))}function Gt(t,e,n){var i=I(),o=D(),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture"].concat(m(e));function i(e){F(t,e)}return function(t){for(var e=[],o=0;o<n.length;o++)e.push(N(t,n[o],i));return{destroy:function(){for(var t=0;t<e.length;t++)e[t]()}}}}(i,["pnotify:init","pnotify:mount","pnotify:update","pnotify:beforeOpen","pnotify:afterOpen","pnotify:enterModal","pnotify:leaveModal","pnotify:beforeClose","pnotify:afterClose","pnotify:beforeDestroy","pnotify:afterDestroy","focusin","focusout","animationend","transitionend"]),s=e.modules,c=void 0===s?new Map(zt.modules):s,l=e.stack,u=void 0===l?zt.stack:l,f={elem:null,container:null,content:null,iconContainer:null,titleContainer:null,textContainer:null},d=a({},zt);Qt("init",{notice:i,defaults:d});var h,v=e.type,y=void 0===v?d.type:v,g=e.title,$=void 0===g?d.title:g,_=e.titleTrusted,k=void 0===_?d.titleTrusted:_,x=e.text,b=void 0===x?d.text:x,w=e.textTrusted,O=void 0===w?d.textTrusted:w,C=e.styling,M=void 0===C?d.styling:C,T=e.icons,H=void 0===T?d.icons:T,E=e.mode,S=void 0===E?d.mode:E,P=e.addClass,A=void 0===P?d.addClass:P,L=e.addModalClass,j=void 0===L?d.addModalClass:L,R=e.addModelessClass,W=void 0===R?d.addModelessClass:R,q=e.autoOpen,z=void 0===q?d.autoOpen:q,U=e.width,G=void 0===U?d.width:U,J=e.minHeight,K=void 0===J?d.minHeight:J,V=e.maxTextHeight,X=void 0===V?d.maxTextHeight:V,Y=e.icon,Z=void 0===Y?d.icon:Y,tt=e.animation,et=void 0===tt?d.animation:tt,nt=e.animateSpeed,it=void 0===nt?d.animateSpeed:nt,ot=e.shadow,rt=void 0===ot?d.shadow:ot,st=e.hide,at=void 0===st?d.hide:st,ct=e.delay,lt=void 0===ct?d.delay:ct,ut=e.mouseReset,ft=void 0===ut?d.mouseReset:ut,dt=e.closer,ht=void 0===dt?d.closer:dt,pt=e.closerHover,mt=void 0===pt?d.closerHover:pt,vt=e.sticker,yt=void 0===vt?d.sticker:vt,gt=e.stickerHover,$t=void 0===gt?d.stickerHover:gt,_t=e.labels,kt=void 0===_t?d.labels:_t,xt=e.remove,bt=void 0===xt?d.remove:xt,wt=e.destroy,Ot=void 0===wt?d.destroy:wt,Ct="closed",Mt=null,Tt=null,Ht=null,Et=!1,St="",Nt="",Pt=!1,At=!1,Lt={elem:[],container:[]},jt=!1,Rt=!1,Wt=!1,It=!1,Dt=null,Ft=at,qt=null,Bt=null,Ut=u&&(!0===u.modal||"ish"===u.modal&&"prevented"===Mt),Gt=NaN,Jt=null,Kt=null;function Qt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a({notice:i},e);"init"===t&&Array.from(c).forEach((function(t){var e=p(t,2),i=e[0];e[1];return"init"in i&&i.init(n)}));var r=f.elem||u&&u.context||document.body;if(!r)return o("pnotify:".concat(t),n),!0;var s=new Event("pnotify:".concat(t),{bubbles:"init"===t||"mount"===t,cancelable:t.startsWith("before")});return s.detail=n,r.dispatchEvent(s),!s.defaultPrevented}function Vt(){var t=u&&u.context||document.body;if(!t)throw new Error("No context to insert this notice into.");if(!f.elem)throw new Error("Trying to insert notice before element is available.");f.elem.parentNode!==t&&t.appendChild(f.elem)}function Xt(){f.elem&&f.elem.parentNode.removeChild(f.elem)}h=function(){Qt("mount"),z&&Zt().catch((function(){}))},I().$$.on_mount.push(h),function(t){I().$$.before_update.push(t)}((function(){Qt("update"),"closed"!==Ct&&"waiting"!==Ct&&at!==Ft&&(at?Ft||ae():se()),"closed"!==Ct&&"closing"!==Ct&&u&&!u._collapsingModalState&&u.queuePosition(),Ft=at}));var Yt=e.open,Zt=void 0===Yt?function(t){if("opening"===Ct)return qt;if("open"===Ct)return at&&ae(),Promise.resolve();if(!jt&&u&&u._shouldNoticeWait(i))return Ct="waiting",Promise.reject();if(!Qt("beforeOpen",{immediate:t}))return Promise.reject();var e,o;Ct="opening",n(28,Wt=!1),n(24,St="pnotify-initial pnotify-hidden");var r=new Promise((function(t,n){e=t,o=n}));qt=r;var s=function(){at&&ae(),Ct="open",Qt("afterOpen",{immediate:t}),qt=null,e()};return Rt?(s(),Promise.resolve()):(Vt(),window.requestAnimationFrame((function(){if("opening"!==Ct)return o(),void(qt=null);u&&(n(0,u._animation=!1,u),"top"===u.push&&u._resetPositionData(),u._positionNotice(i),u.queuePosition(0),n(0,u._animation=!0,u)),ie(s,t)})),r)}:Yt,te=e.close,ee=void 0===te?function(t,e,o){if("closing"===Ct)return Bt;if("closed"===Ct)return Promise.resolve();var r,s=function(){Qt("beforeDestroy")&&(u&&u._removeNotice(i),i.$destroy(),Qt("afterDestroy"))};if("waiting"===Ct)return o||(Ct="closed",Ot&&!o&&s()),Promise.resolve();if(!Qt("beforeClose",{immediate:t,timerHide:e,waitAfterward:o}))return Promise.reject();Ct="closing",Pt=!!e,Mt&&"prevented"!==Mt&&clearTimeout&&clearTimeout(Mt),Mt=null;var a=new Promise((function(t,e){r=t}));return Bt=a,re((function(){n(26,At=!1),Pt=!1,Ct=o?"waiting":"closed",Qt("afterClose",{immediate:t,timerHide:e,waitAfterward:o}),Bt=null,r(),o||(Ot?s():bt&&Xt())}),t),a}:te,ne=e.animateIn,ie=void 0===ne?function(t,e){Et="in";var i=function e(n){if(!(n&&f.elem&&n.target!==f.elem||(f.elem&&f.elem.removeEventListener("transitionend",e),Tt&&clearTimeout(Tt),"in"!==Et))){var i=Rt;if(!i&&f.elem){var o=f.elem.getBoundingClientRect();for(var r in o)if(o[r]>0){i=!0;break}}i?(t&&t.call(),Et=!1):Tt=setTimeout(e,40)}};if("fade"!==et||e){var o=et;n(2,et="none"),n(24,St="pnotify-in ".concat("fade"===o?"pnotify-fade-in":"")),Q().then((function(){n(2,et=o),i()}))}else f.elem&&f.elem.addEventListener("transitionend",i),n(24,St="pnotify-in"),Q().then((function(){n(24,St="pnotify-in pnotify-fade-in"),Tt=setTimeout(i,650)}))}:ne,oe=e.animateOut,re=void 0===oe?function(t,e){Et="out";var i=function e(i){if(!(i&&f.elem&&i.target!==f.elem||(f.elem&&f.elem.removeEventListener("transitionend",e),Ht&&clearTimeout(Ht),"out"!==Et))){var o=Rt;if(!o&&f.elem){var r=f.elem.getBoundingClientRect();for(var s in r)if(r[s]>0){o=!0;break}}f.elem&&f.elem.style.opacity&&"0"!==f.elem.style.opacity&&o?Ht=setTimeout(e,40):(n(24,St=""),t&&t.call(),Et=!1)}};"fade"!==et||e?(n(24,St=""),Q().then((function(){i()}))):(f.elem&&f.elem.addEventListener("transitionend",i),n(24,St="pnotify-in"),Ht=setTimeout(i,650))}:oe;function se(){Mt&&"prevented"!==Mt&&(clearTimeout(Mt),Mt=null),Ht&&clearTimeout(Ht),"closing"===Ct&&(Ct="open",Et=!1,n(24,St="fade"===et?"pnotify-in pnotify-fade-in":"pnotify-in"))}function ae(){"prevented"!==Mt&&(se(),lt!==1/0&&(Mt=setTimeout((function(){return ee(!1,!0)}),isNaN(lt)?0:lt)))}var ce,le,ue,fe,de,he,pe,me,ve,ye,ge;return t.$$set=function(t){"modules"in t&&n(46,c=t.modules),"stack"in t&&n(0,u=t.stack),"type"in t&&n(4,y=t.type),"title"in t&&n(5,$=t.title),"titleTrusted"in t&&n(6,k=t.titleTrusted),"text"in t&&n(7,b=t.text),"textTrusted"in t&&n(8,O=t.textTrusted),"styling"in t&&n(47,M=t.styling),"icons"in t&&n(48,H=t.icons),"mode"in t&&n(9,S=t.mode),"addClass"in t&&n(10,A=t.addClass),"addModalClass"in t&&n(11,j=t.addModalClass),"addModelessClass"in t&&n(12,W=t.addModelessClass),"autoOpen"in t&&n(49,z=t.autoOpen),"width"in t&&n(50,G=t.width),"minHeight"in t&&n(51,K=t.minHeight),"maxTextHeight"in t&&n(52,X=t.maxTextHeight),"icon"in t&&n(13,Z=t.icon),"animation"in t&&n(2,et=t.animation),"animateSpeed"in t&&n(14,it=t.animateSpeed),"shadow"in t&&n(15,rt=t.shadow),"hide"in t&&n(3,at=t.hide),"delay"in t&&n(53,lt=t.delay),"mouseReset"in t&&n(54,ft=t.mouseReset),"closer"in t&&n(16,ht=t.closer),"closerHover"in t&&n(17,mt=t.closerHover),"sticker"in t&&n(18,yt=t.sticker),"stickerHover"in t&&n(19,$t=t.stickerHover),"labels"in t&&n(20,kt=t.labels),"remove"in t&&n(55,bt=t.remove),"destroy"in t&&n(56,Ot=t.destroy),"open"in t&&n(59,Zt=t.open),"close"in t&&n(23,ee=t.close),"animateIn"in t&&n(60,ie=t.animateIn),"animateOut"in t&&n(61,re=t.animateOut)},t.$$.update=function(){524288&t.$$.dirty[1]&&n(31,ce="string"==typeof G?"width: ".concat(G,";"):""),1048576&t.$$.dirty[1]&&n(32,le="string"==typeof K?"min-height: ".concat(K,";"):""),2097152&t.$$.dirty[1]&&n(33,ue="string"==typeof X?"max-height: ".concat(X,";"):""),32&t.$$.dirty[0]&&n(34,fe=$ instanceof HTMLElement),128&t.$$.dirty[0]&&n(35,de=b instanceof HTMLElement),1&t.$$.dirty[0]|1792&t.$$.dirty[3]&&Gt!==u&&(Gt&&(Gt._removeNotice(i),n(30,Ut=!1),Jt(),Kt()),u&&(u._addNotice(i),n(102,Jt=u.on("beforeAddOverlay",(function(){n(30,Ut=!0),Qt("enterModal")}))),n(103,Kt=u.on("afterRemoveOverlay",(function(){n(30,Ut=!1),Qt("leaveModal")})))),n(101,Gt=u)),1073748992&t.$$.dirty[0]&&n(36,he=A.match(/\bnonblock\b/)||j.match(/\bnonblock\b/)&&Ut||W.match(/\bnonblock\b/)&&!Ut),1&t.$$.dirty[0]&&n(37,pe=u&&u.dir1?"pnotify-stack-".concat(u.dir1):""),32768&t.$$.dirty[1]&&n(38,me=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"PrependContainer"===n.position}))),32768&t.$$.dirty[1]&&n(39,ve=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"PrependContent"===n.position}))),32768&t.$$.dirty[1]&&n(40,ye=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"AppendContent"===n.position}))),32768&t.$$.dirty[1]&&n(41,ge=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"AppendContainer"===n.position}))),34&t.$$.dirty[0]|8&t.$$.dirty[1]&&fe&&f.titleContainer&&f.titleContainer.appendChild($),130&t.$$.dirty[0]|16&t.$$.dirty[1]&&de&&f.textContainer&&f.textContainer.appendChild(b)},[u,f,et,at,y,$,k,b,O,S,A,j,W,Z,it,rt,ht,mt,yt,$t,kt,function(t){return"string"==typeof M?"".concat(M,"-").concat(t):t in M?M[t]:"".concat(M.prefix,"-").concat(t)},function(t){return"string"==typeof H?"".concat(H,"-icon-").concat(t):t in H?H[t]:"".concat(H.prefix,"-icon-").concat(t)},ee,St,Nt,At,Lt,Wt,It,Ut,ce,le,ue,fe,de,he,pe,me,ve,ye,ge,i,r,function(t){if(n(26,At=!0),ft&&"closing"===Ct){if(!Pt)return;se()}at&&ft&&se()},function(t){n(26,At=!1),at&&ft&&"out"!==Et&&-1!==["open","opening"].indexOf(Ct)&&ae()},c,M,H,z,G,K,X,lt,ft,bt,Ot,function(){return Ct},function(){return Mt},Zt,ie,re,se,ae,function(t){t?(se(),Mt="prevented"):"prevented"===Mt&&(Mt=null,"open"===Ct&&at&&ae())},function(){return i.$on.apply(i,arguments)},function(){return i.$set.apply(i,arguments)},function(t,e){o(t,e)},function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){var i=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];-1===Lt[t].indexOf(i)&&Lt[t].push(i)}n(27,Lt)},function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){var i=e+1<1||arguments.length<=e+1?void 0:arguments[e+1],o=Lt[t].indexOf(i);-1!==o&&Lt[t].splice(o,1)}n(27,Lt)},function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){var n=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];if(-1===Lt[t].indexOf(n))return!1}return!0},function(){return jt},function(t){return jt=t},function(){return Rt},function(t){return Rt=t},function(t){return Et=t},function(){return St},function(t){return n(24,St=t)},function(){return Nt},function(t){return n(25,Nt=t)},function(t,e,i){if(Dt&&clearTimeout(Dt),Wt!==t)if(t)n(28,Wt=!0),n(29,It=!!e),Vt(),Q().then((function(){window.requestAnimationFrame((function(){if(Wt)if(e&&i)i();else{n(29,It=!0);var t=function t(){f.elem&&f.elem.removeEventListener("transitionend",t),Dt&&clearTimeout(Dt),It&&i&&i()};f.elem&&f.elem.addEventListener("transitionend",t),Dt=setTimeout(t,650)}}))}));else if(e)n(28,Wt=!1),n(29,It=!1),bt&&-1===["open","opening","closing"].indexOf(Ct)&&Xt(),i&&i();else{var o=function t(){f.elem&&f.elem.removeEventListener("transitionend",t),Dt&&clearTimeout(Dt),It||(n(28,Wt=!1),bt&&-1===["open","opening","closing"].indexOf(Ct)&&Xt(),i&&i())};n(29,It=!1),f.elem&&f.elem.addEventListener("transitionend",o),f.elem&&f.elem.style.opacity,Dt=setTimeout(o,650)}},function(){return ee(!1)},function(){return n(3,at=!at)},function(t){B[t?"unshift":"push"]((function(){f.iconContainer=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.titleContainer=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.textContainer=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.content=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.container=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.elem=t,n(1,f)}))}]}window&&document.body?Ut():document.addEventListener("DOMContentLoaded",Ut);var Jt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(s,t);var e,i,r=(e=s,i=u(),function(){var t,n=c(e);if(i){var o=c(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return h(this,t)});function s(t){var e;return n(this,s),function(t,e,n,i,o,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],a=j;W(t);var c=e.props||{},l=t.$$={fragment:null,ctx:null,props:r,update:g,not_equal:o,bound:k(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:k(),dirty:s,skip_bound:!1},u=!1;if(l.ctx=n?n(t,c,(function(e,n){var i=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return l.ctx&&o(l.ctx[e],l.ctx[e]=i)&&(!l.skip_bound&&l.bound[e]&&l.bound[e](i),u&&mt(t,e)),n})):[],l.update(),u=!0,x(l.before_update),l.fragment=!!i&&i(l.ctx),e.target){if(e.hydrate){var f=A(e.target);l.fragment&&l.fragment.l(f),f.forEach(M)}else l.fragment&&l.fragment.c();e.intro&&rt(t.$$.fragment),ht(t,e.target,e.anchor),Z()}W(a)}(d(e=r.call(this)),t,Gt,It,w,{modules:46,stack:0,refs:1,type:4,title:5,titleTrusted:6,text:7,textTrusted:8,styling:47,icons:48,mode:9,addClass:10,addModalClass:11,addModelessClass:12,autoOpen:49,width:50,minHeight:51,maxTextHeight:52,icon:13,animation:2,animateSpeed:14,shadow:15,hide:3,delay:53,mouseReset:54,closer:16,closerHover:17,sticker:18,stickerHover:19,labels:20,remove:55,destroy:56,getState:57,getTimer:58,getStyle:21,getIcon:22,open:59,close:23,animateIn:60,animateOut:61,cancelClose:62,queueClose:63,_preventTimerClose:64,on:65,update:66,fire:67,addModuleClass:68,removeModuleClass:69,hasModuleClass:70,getModuleHandled:71,setModuleHandled:72,getModuleOpen:73,setModuleOpen:74,setAnimating:75,getAnimatingClass:76,setAnimatingClass:77,_getMoveClass:78,_setMoveClass:79,_setMasking:80},[-1,-1,-1,-1]),e}return o(s,[{key:"modules",get:function(){return this.$$.ctx[46]},set:function(t){this.$set({modules:t}),Z()}},{key:"stack",get:function(){return this.$$.ctx[0]},set:function(t){this.$set({stack:t}),Z()}},{key:"refs",get:function(){return this.$$.ctx[1]}},{key:"type",get:function(){return this.$$.ctx[4]},set:function(t){this.$set({type:t}),Z()}},{key:"title",get:function(){return this.$$.ctx[5]},set:function(t){this.$set({title:t}),Z()}},{key:"titleTrusted",get:function(){return this.$$.ctx[6]},set:function(t){this.$set({titleTrusted:t}),Z()}},{key:"text",get:function(){return this.$$.ctx[7]},set:function(t){this.$set({text:t}),Z()}},{key:"textTrusted",get:function(){return this.$$.ctx[8]},set:function(t){this.$set({textTrusted:t}),Z()}},{key:"styling",get:function(){return this.$$.ctx[47]},set:function(t){this.$set({styling:t}),Z()}},{key:"icons",get:function(){return this.$$.ctx[48]},set:function(t){this.$set({icons:t}),Z()}},{key:"mode",get:function(){return this.$$.ctx[9]},set:function(t){this.$set({mode:t}),Z()}},{key:"addClass",get:function(){return this.$$.ctx[10]},set:function(t){this.$set({addClass:t}),Z()}},{key:"addModalClass",get:function(){return this.$$.ctx[11]},set:function(t){this.$set({addModalClass:t}),Z()}},{key:"addModelessClass",get:function(){return this.$$.ctx[12]},set:function(t){this.$set({addModelessClass:t}),Z()}},{key:"autoOpen",get:function(){return this.$$.ctx[49]},set:function(t){this.$set({autoOpen:t}),Z()}},{key:"width",get:function(){return this.$$.ctx[50]},set:function(t){this.$set({width:t}),Z()}},{key:"minHeight",get:function(){return this.$$.ctx[51]},set:function(t){this.$set({minHeight:t}),Z()}},{key:"maxTextHeight",get:function(){return this.$$.ctx[52]},set:function(t){this.$set({maxTextHeight:t}),Z()}},{key:"icon",get:function(){return this.$$.ctx[13]},set:function(t){this.$set({icon:t}),Z()}},{key:"animation",get:function(){return this.$$.ctx[2]},set:function(t){this.$set({animation:t}),Z()}},{key:"animateSpeed",get:function(){return this.$$.ctx[14]},set:function(t){this.$set({animateSpeed:t}),Z()}},{key:"shadow",get:function(){return this.$$.ctx[15]},set:function(t){this.$set({shadow:t}),Z()}},{key:"hide",get:function(){return this.$$.ctx[3]},set:function(t){this.$set({hide:t}),Z()}},{key:"delay",get:function(){return this.$$.ctx[53]},set:function(t){this.$set({delay:t}),Z()}},{key:"mouseReset",get:function(){return this.$$.ctx[54]},set:function(t){this.$set({mouseReset:t}),Z()}},{key:"closer",get:function(){return this.$$.ctx[16]},set:function(t){this.$set({closer:t}),Z()}},{key:"closerHover",get:function(){return this.$$.ctx[17]},set:function(t){this.$set({closerHover:t}),Z()}},{key:"sticker",get:function(){return this.$$.ctx[18]},set:function(t){this.$set({sticker:t}),Z()}},{key:"stickerHover",get:function(){return this.$$.ctx[19]},set:function(t){this.$set({stickerHover:t}),Z()}},{key:"labels",get:function(){return this.$$.ctx[20]},set:function(t){this.$set({labels:t}),Z()}},{key:"remove",get:function(){return this.$$.ctx[55]},set:function(t){this.$set({remove:t}),Z()}},{key:"destroy",get:function(){return this.$$.ctx[56]},set:function(t){this.$set({destroy:t}),Z()}},{key:"getState",get:function(){return this.$$.ctx[57]}},{key:"getTimer",get:function(){return this.$$.ctx[58]}},{key:"getStyle",get:function(){return this.$$.ctx[21]}},{key:"getIcon",get:function(){return this.$$.ctx[22]}},{key:"open",get:function(){return this.$$.ctx[59]},set:function(t){this.$set({open:t}),Z()}},{key:"close",get:function(){return this.$$.ctx[23]},set:function(t){this.$set({close:t}),Z()}},{key:"animateIn",get:function(){return this.$$.ctx[60]},set:function(t){this.$set({animateIn:t}),Z()}},{key:"animateOut",get:function(){return this.$$.ctx[61]},set:function(t){this.$set({animateOut:t}),Z()}},{key:"cancelClose",get:function(){return this.$$.ctx[62]}},{key:"queueClose",get:function(){return this.$$.ctx[63]}},{key:"_preventTimerClose",get:function(){return this.$$.ctx[64]}},{key:"on",get:function(){return this.$$.ctx[65]}},{key:"update",get:function(){return this.$$.ctx[66]}},{key:"fire",get:function(){return this.$$.ctx[67]}},{key:"addModuleClass",get:function(){return this.$$.ctx[68]}},{key:"removeModuleClass",get:function(){return this.$$.ctx[69]}},{key:"hasModuleClass",get:function(){return this.$$.ctx[70]}},{key:"getModuleHandled",get:function(){return this.$$.ctx[71]}},{key:"setModuleHandled",get:function(){return this.$$.ctx[72]}},{key:"getModuleOpen",get:function(){return this.$$.ctx[73]}},{key:"setModuleOpen",get:function(){return this.$$.ctx[74]}},{key:"setAnimating",get:function(){return this.$$.ctx[75]}},{key:"getAnimatingClass",get:function(){return this.$$.ctx[76]}},{key:"setAnimatingClass",get:function(){return this.$$.ctx[77]}},{key:"_getMoveClass",get:function(){return this.$$.ctx[78]}},{key:"_setMoveClass",get:function(){return this.$$.ctx[79]}},{key:"_setMasking",get:function(){return this.$$.ctx[80]}}]),s}(vt);t.Stack=yt,t.alert=function(t){return gt(Dt(t))},t.default=Jt,t.defaultModules=Bt,t.defaultStack=qt,t.defaults=zt,t.error=function(t){return gt(Dt(t,"error"))},t.info=function(t){return gt(Dt(t,"info"))},t.notice=function(t){return gt(Dt(t,"notice"))},t.success=function(t){return gt(Dt(t,"success"))},Object.defineProperty(t,"__esModule",{value:!0})}));


/***/ }),

/***/ "./node_modules/@pnotify/mobile/dist/PNotifyMobile.js":
/*!************************************************************!*\
  !*** ./node_modules/@pnotify/mobile/dist/PNotifyMobile.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):0}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?f(t):e}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}function s(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(){}function p(t){return t()}function y(){return Object.create(null)}function d(t){t.forEach(p)}function m(t){return"function"==typeof t}function h(t,n){return t!=t?n==n:t!==n||t&&"object"===e(t)||"function"==typeof t}function v(t){t.parentNode.removeChild(t)}function g(t){return Array.from(t.childNodes)}var b;function _(t){b=t}function $(){if(!b)throw new Error("Function called outside component initialization");return b}var w=[],P=[],x=[],O=[],j=Promise.resolve(),k=!1;function S(t){x.push(t)}var E=!1,A=new Set;function D(){if(!E){E=!0;do{for(var t=0;t<w.length;t+=1){var e=w[t];_(e),T(e.$$)}for(_(null),w.length=0;P.length;)P.pop()();for(var n=0;n<x.length;n+=1){var r=x[n];A.has(r)||(A.add(r),r())}x.length=0}while(w.length);for(;O.length;)O.pop()();k=!1,E=!1,A.clear()}}function T(t){if(null!==t.fragment){t.update(),d(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}var C=new Set;function M(t,e){t&&t.i&&(C.delete(t),t.i(e))}var R="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:__webpack_require__.g;function W(t,e,n){var r=t.$$,o=r.fragment,i=r.on_mount,f=r.on_destroy,c=r.after_update;o&&o.m(e,n),S((function(){var e=i.map(p).filter(m);f?f.push.apply(f,s(e)):d(e),t.$$.on_mount=[]})),c.forEach(S)}function q(t,e){-1===t.$$.dirty[0]&&(w.push(t),k||(k=!0,j.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}var I=function(){function t(){n(this,t)}var e,o,i;return e=t,(o=[{key:"$destroy",value:function(){var t,e;t=1,null!==(e=this.$$).fragment&&(d(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[]),this.$destroy=l}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&r(e.prototype,o),i&&r(e,i),t}(),L=R.window;function N(t){var e,n;return{c:l,m:function(r,o){var i,f,c,u;e||(i=L,f="resize",c=t[3],i.addEventListener(f,c,u),n=function(){return i.removeEventListener(f,c,u)},e=!0)},p:l,i:l,o:l,d:function(t){e=!1,n()}}}var z={swipeDismiss:!0};function X(t,e,n){var r,o=e.self,i=void 0===o?null:o,f=e.swipeDismiss,c=void 0===f?z.swipeDismiss:f,u=null,s=null,a=null,l=null,p="left",y="X",d="Width",m=window.innerWidth,h=[];r=function(){h=[i.on("touchstart",(function(t){if(c){var e=i.stack;if(e)switch(e.dir1){case"up":case"down":p="left",y="X",d="Width";break;case"left":case"right":p="top",y="Y",d="Height"}u=t.touches[0]["screen".concat(y)],a=i.refs.elem["scroll".concat(d)],l=window.getComputedStyle(i.refs.elem).opacity,n(1,i.refs.container.style[p]=0,i)}})),i.on("touchmove",(function(t){if(u&&c){var e=t.touches[0]["screen".concat(y)];s=e-u;var r=(1-Math.abs(s)/a)*l;n(1,i.refs.elem.style.opacity=r,i),n(1,i.refs.container.style[p]="".concat(s,"px"),i)}})),i.on("touchend",(function(){if(u&&c){if(i.refs.container.classList.add("pnotify-mobile-animate-left"),Math.abs(s)>40){var t=s<0?-2*a:2*a;n(1,i.refs.elem.style.opacity=0,i),n(1,i.refs.container.style[p]="".concat(t,"px"),i),i.close()}else i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty(p);u=null,s=null,a=null,l=null}})),i.on("touchcancel",(function(){u&&c&&(i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty(p),u=null,s=null,a=null,l=null)})),i.on("pnotify:afterClose",(function(){c&&(i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty("left"),i.refs.container.style.removeProperty("top"))}))]},$().$$.on_mount.push(r),function(t){$().$$.on_destroy.push(t)}((function(){h.forEach((function(t){return t()}))}));return t.$$set=function(t){"self"in t&&n(1,i=t.self),"swipeDismiss"in t&&n(2,c=t.swipeDismiss)},t.$$.update=function(){if(3&t.$$.dirty){var e=i.stack;e&&(m<=480?"_m_spacing1"in e||(e._m_spacing1=e.spacing1,e._m_firstpos1=e.firstpos1,e._m_spacing2=e.spacing2,e._m_firstpos2=e.firstpos2,e.spacing1=0,e.firstpos1=0,e.spacing2=0,e.firstpos2=0,e.queuePosition()):"_m_spacing1"in e&&(e.spacing1=e._m_spacing1,delete e._m_spacing1,e.firstpos1=e._m_firstpos1,delete e._m_firstpos1,e.spacing2=e._m_spacing2,delete e._m_spacing2,e.firstpos2=e._m_firstpos2,delete e._m_firstpos2,e.queuePosition()))}},[m,i,c,function(){return n(0,m=window.innerWidth)}]}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,t);var e=u(r);function r(t){var o;return n(this,r),function(t,e,n,r,o,i){var f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=b;_(t);var u=e.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:l,not_equal:o,bound:y(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:y(),dirty:f,skip_bound:!1},a=!1;if(s.ctx=n?n(t,u,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&o(s.ctx[e],s.ctx[e]=r)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](r),a&&q(t,e)),n})):[],s.update(),a=!0,d(s.before_update),s.fragment=!!r&&r(s.ctx),e.target){if(e.hydrate){var p=g(e.target);s.fragment&&s.fragment.l(p),p.forEach(v)}else s.fragment&&s.fragment.c();e.intro&&M(t.$$.fragment),W(t,e.target,e.anchor),D()}_(c)}(f(o=e.call(this)),t,X,N,h,{self:1,swipeDismiss:2}),o}return r}(I);t.default=F,t.defaults=z,t.position="PrependContainer",Object.defineProperty(t,"__esModule",{value:!0})}));


/***/ }),

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ex */ "./src/js/components/ex.js");
/* harmony import */ var _components_ex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_ex__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
/* harmony import */ var graph_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graph-tabs */ "./node_modules/graph-tabs/src/graph-tabs.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов

const profileTabs = document.querySelector('.profile__tabs');
if (profileTabs) {
  const tabs = new graph_tabs__WEBPACK_IMPORTED_MODULE_1__["default"]('profile');
}

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_jquery_validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/jquery.validate.js */ "./src/js/vendor/jquery.validate.js");
/* harmony import */ var _vendor_jquery_validate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_validate_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/components/ex.js":
/*!*********************************!*\
  !*** ./src/js/components/ex.js ***!
  \*********************************/
/***/ (() => {

// const cityNizhny = document.querySelector('.city-nizhny')

// if (cityNizhny) {
//   const cityAnother = document.querySelector('.city-another')

//   cityNizhny.addEventListener('click', () => {
//     const input = cityNizhny.querySelector('input')
//     if (input.checked) {
//       $('.js-city_area-spoiler').slideUp(300);
//       $('.js-city_nizhny-spoiler').slideDown(300);
//     }
//   })
//   cityAnother.addEventListener('click', () => {
//     const input = cityAnother.querySelector('input')
//     if (input.checked) {
//       $('.js-city_nizhny-spoiler').slideUp(300);
//       $('.js-city_area-spoiler').slideDown(300);
//     }
//   })
// }

const cityNizhny = document.querySelector('.city-nizhny');
if (cityNizhny) {
  const cityAnother = document.querySelector('.city-another');
  const input1 = cityNizhny.querySelector('input');
  input1.addEventListener('change', () => {
    if (input1.checked) {
      $('.js-city_area-spoiler').slideUp(300);
      $('.js-city_nizhny-spoiler').slideDown(300);
    }
  });
  const input2 = cityAnother.querySelector('input');
  input2.addEventListener('change', () => {
    if (input2.checked) {
      $('.js-city_nizhny-spoiler').slideUp(300);
      $('.js-city_area-spoiler').slideDown(300);
    }
  });
}
const testTimer = document.querySelector('#timer');
if (testTimer) {
  let time = 1500;
  // const countDownEl = document.getelementById("#timer-minutes");
  const test = document.querySelector('.test');
  const testEnd = document.querySelector('.test__end');
  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    testTimer.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (minutes <= 4) {
      testTimer.style.color = '#FF4D1C';
    }
    if (time < 0) {
      test.classList.add('hide');
      testEnd.classList.add('active');
    }
  }
  setInterval(updateCountdown, 1000);
}
const testSubmitBtn = document.querySelector('#test-submit');
if (testSubmitBtn) {
  const test = document.querySelector('.test');
  const testEnd = document.querySelector('.test__end');
  testSubmitBtn.addEventListener('click', e => {
    e.preventDefault();
    test.classList.add('hide');
    testEnd.classList.add('active');
  });
}

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _vendor_datatables_ru_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/datatables-ru.json */ "./src/js/vendor/datatables-ru.json");
/* harmony import */ var _node_modules_pnotify_core_dist_PNotify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@pnotify/core/dist/PNotify.js */ "./node_modules/@pnotify/core/dist/PNotify.js");
/* harmony import */ var _node_modules_pnotify_core_dist_PNotify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnotify_core_dist_PNotify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnotify_mobile_dist_PNotifyMobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js */ "./node_modules/@pnotify/mobile/dist/PNotifyMobile.js");
/* harmony import */ var _node_modules_pnotify_mobile_dist_PNotifyMobile_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnotify_mobile_dist_PNotifyMobile_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e);}:t(e);}("undefined"!=typeof window?window:undefined,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e);}:function(e){return t.concat.apply([],e);},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item;},x=function(e){return null!=e&&e===e.window;},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o);}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e;}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t);};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e);}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this);},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e];},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t;},each:function(e){return E.each(this,e);},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e);}));},slice:function(){return this.pushStack(s.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2;}));},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2;}));},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[]);},end:function(){return this.prevObject||this.constructor();},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a;},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e);},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l);},isEmptyObject:function(e){var t;for(t in e)return!1;return!0;},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n);},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break;}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e;},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n;},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n);},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e;},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r;},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a);},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase();});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date(),p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0;},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1;},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320));},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;},oe=function(){T();},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase();},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType;}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t));}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1;}};}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n;}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n;}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n;}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",");}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error();return H.apply(n,f.querySelectorAll(c)),n;}catch(e){N(t,!0);}finally{s===E&&e.removeAttribute("id");}}}return g(t.replace(B,"$1"),e,n,r);}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n;};}function le(e){return e[E]=!0,e;}function ce(e){var t=C.createElement("fieldset");try{return!!e(t);}catch(e){return!1;}finally{t.parentNode&&t.parentNode.removeChild(t),t=null;}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t;}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1;}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t;};}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n;};}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t;};}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]));});});}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e;}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML");},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length;}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))");}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className");}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length;}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length;}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t;};},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[];}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n;};},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o];}return[];}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0;}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r;}return o;},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e);},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]");}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:");})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F);}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)));}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1;},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1);}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0;}),C;},se.matches=function(e,t){return se(e,null,null,t);},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n;}catch(e){N(t,!0);}return 0<se(t,C,null,[e]).length;},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t);},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null;},se.escape=function(e){return(e+"").replace(re,ie);},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e);},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1);}return u=null,e;},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e);}else if(3===i||4===i)return e.nodeValue;}else while(t=e[r++])n+=o(t);return n;},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4);},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e;},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3));}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0;}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t;};},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"");});},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"));};},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode;}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling";}return!0;}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break;}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g;}};},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i]);}):function(e){return a(e,0,t);}):a;}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i));}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop();};}),has:le(function(t){return function(e){return 0<se(t,e).length;};}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t);};}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-");}while((e=e.parentNode)&&1===e.nodeType);return!1;};}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id;},root:function(e){return e===a;},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex);},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected;},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected;},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0;},parent:function(e){return!b.pseudos.empty(e);},header:function(e){return J.test(e.nodeName);},input:function(e){return Q.test(e.nodeName);},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t;},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase());},first:ye(function(){return[0];}),last:ye(function(e,t){return[t-1];}),eq:ye(function(e,t,n){return[n<0?n+t:n];}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e;}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e;}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e;}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e;})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r;}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1;}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0;}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0;}return!1;};}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0;}:i[0];}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a;}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n;}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r);}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a));}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p);});}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i;},a,!0),l=be(function(e){return-1<P(i,e);},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r;}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e));}c.push(t);}return we(c);}return me.prototype=b.filters=b.pseudos,b.setFilters=new me(),h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break;}return t?a.length:a?se.error(e):x(e,s).slice(0);},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break;}i&&(k=h);}m&&((o=!s&&o)&&u--,e&&c.push(o));}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f);}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r);}return i&&(k=h,w=p),c;},m?le(r):r))).selector=e;}return a;},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length);}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break;}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n;},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"));}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href");})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2);}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value");})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue;}),ce(function(e){return null==e.getAttribute("disabled");})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null;}),se;}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e);}return r;},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n;},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase();}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r;}):n.nodeType?E.grep(e,function(e){return e===n!==r;}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r;}):E.filter(n,e,r);}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType;}));},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0;}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n;},filter:function(e){return this.pushStack(j(this,e||[],!1));},not:function(e){return this.pushStack(j(this,e||[],!0));},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length;}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this;}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this;}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this);}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e;}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0;});},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break;}return this.pushStack(1<o.length?E.uniqueSort(o):o);},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))));},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e));}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null;},parents:function(e){return h(e,"parentNode");},parentsUntil:function(e,t,n){return h(e,"parentNode",n);},next:function(e){return O(e,"nextSibling");},prev:function(e){return O(e,"previousSibling");},nextAll:function(e){return h(e,"nextSibling");},prevAll:function(e){return h(e,"previousSibling");},nextUntil:function(e,t,n){return h(e,"nextSibling",n);},prevUntil:function(e,t,n){return h(e,"previousSibling",n);},siblings:function(e){return T((e.parentNode||{}).firstChild,e);},children:function(e){return T(e.firstChild);},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes));}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n);};});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e;}function M(e){throw e;}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r));}catch(e){n.apply(void 0,[e]);}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0;}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1);}r.memory||(t=!1),i=!1,a&&(s=t?[]:"");},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t);});}(arguments),t&&!i&&c()),this;},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--;}),this;},has:function(e){return e?-1<E.inArray(e,s):0<s.length;},empty:function(){return s&&(s=[]),this;},disable:function(){return a=u=[],s=t="",this;},disabled:function(){return!s;},lock:function(){return a=u=[],t||i||(s=t=""),this;},locked:function(){return!!a;},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this;},fire:function(){return f.fireWith(this,arguments),this;},fired:function(){return!!o;}};return f;},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i;},always:function(){return s.done(arguments).fail(arguments),this;},"catch":function(e){return a.then(null,e);},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments);});}),i=null;}).promise();},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r));}},t=s?e:function(){try{e();}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r));}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t));};}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M));}).promise();},promise:function(e){return null!=e?E.extend(e,a):a;}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r;},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this;},s[t[0]+"With"]=n.fireWith;}),a.promise(s),e&&e.call(s,s),s;},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i);};};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise();}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t);},E.readyException=function(e){C.setTimeout(function(){throw e;});};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready();}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e);}),this;},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E]);}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n);})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o;},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase();}function X(e){return e.replace(_,"ms-").replace(z,U);}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType;};function G(){this.expando=E.expando+G.uid++;}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t;},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i;},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)];},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t);},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]];}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando]);}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t);}};var Y=new G(),Q=new G(),J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i);}catch(e){}Q.set(e,t,n);}else n=void 0;return n;}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e);},data:function(e,t,n){return Q.access(e,t,n);},removeData:function(e,t){Q.remove(e,t);},_data:function(e,t,n){return Y.access(e,t,n);},_removeData:function(e,t){Y.remove(e,t);}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0);}return i;}return"object"==typeof n?this.each(function(){Q.set(this,n);}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e);});},null,e,1<arguments.length,null,!0);},removeData:function(e){return this.each(function(){Q.remove(this,e);});}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[];},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t);},o)),!r&&o&&o.empty.fire();},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n]);})});}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t);});},dequeue:function(e){return this.each(function(){E.dequeue(this,e);});},clearQueue:function(e){return this.queue(e||"fx",[]);},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o]);};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t);}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e);},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument;});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display");};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur();}:function(){return E.css(e,t,"");},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[];}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i;}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e;}E.fn.extend({show:function(){return le(this,!0);},hide:function(){return le(this);},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide();});}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n;}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"));}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent="";}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o);}return f;}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0;}function Te(){return!1;}function Ce(e,t){return e===function(){try{return S.activeElement;}catch(e){}}()==("focus"===t);}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e;}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments);}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n);});}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value;}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation());}})):void 0===Y.get(e,i)&&E.event.add(e,i,we);}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0;}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0);}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d]);}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events");}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));}return c.postDispatch&&c.postDispatch.call(this,u),u.result;}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o});}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s;},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent);}:function(){if(this.originalEvent)return this.originalEvent[t];},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e});}});},fix:function(e){return e[E.expando]?e:new E.Event(e);},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1;},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0;},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a");}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result);}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n);},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0;},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault();},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation();},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation();}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1;},trigger:function(){return Ee(this,t),!0;},_default:function(e){return Y.get(e.target,t);},delegateType:e};}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t;}};}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r);},one:function(e,t,n,r){return Se(this,e,t,n,r,1);},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this;}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t);});}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e;}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e;}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e;}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a));}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o);});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l));}return n;}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e;}E.extend({htmlPrefilter:function(e){return e;},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c;},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0;}n[Q.expando]&&(n[Q.expando]=void 0);}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0);},remove:function(e){return Oe(this,e);},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e);});},null,e,arguments.length);},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e);});},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild);}});},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this);});},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling);});},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this;},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t);});},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0;}catch(e){}}t&&this.empty().append(e);},null,e,arguments.length);},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this));},n);}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n);};});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e);},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r;},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a;}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get;}};}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null;}}function t(e){return Math.round(parseFloat(e));}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r;},pixelBoxStyles:function(){return e(),o;},pixelPosition:function(){return e(),n;},reliableMarginLeft:function(){return e(),s;},scrollboxSize:function(){return e(),i;},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a;}}));}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e;}(e)||e);}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t;}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u;}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto";}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px";}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i);}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n;}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n));}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i;}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n);});},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s);}};}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left;}))+"px";}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n;}},"margin"!==i&&(E.cssHooks[i+o].set=Je);}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o;}return void 0!==n?E.style(e,t,n):E.css(e,t);},e,t,1<arguments.length);}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px");},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this);},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this;}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0;},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit);}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);}},E.easing={linear:function(e){return e;},swing:function(e){return .5-Math.cos(e*Math.PI)/2;},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick());}function ut(){return C.setTimeout(function(){tt=void 0;}),tt=Date.now();}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i;}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r;}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem;}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1);},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n;},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this;}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&("expand"in a))for(n in o=a.expand(o),delete e[r],o)(n in e)||(e[n]=o[n],t[n]=i);else t[r]=i;}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l;}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n;}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t);},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s();}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire();});})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0;}d[r]=y&&y[r]||E.style(e,r);}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l;}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2];})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r]);})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0));}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e);}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue);},r;},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r);},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0);};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a);},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o);};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i);});},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish;});}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n);};}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n);};}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0;},E.fx.timer=function(e){E.timers.push(e),E.fx.start();},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st());},E.fx.stop=function(){nt=null;},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n);};});},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length);},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e);});}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r);},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t;}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n);}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n;}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r;};});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ");}function vt(e){return e.getAttribute&&e.getAttribute("class")||"";}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[];}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length);},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e];});}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t];},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null;},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex);}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this;}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)));}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a);}}):this;},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)));}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ");}a=yt(n),r!==a&&this.setAttribute("class",a);}}):this:this.attr("class","");},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n);}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""));}));},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1;}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+"";})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t));})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0;}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e));}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t);}return s;},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o;}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t);}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value;});}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation();};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C);}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result;}},simulate:function(e,t,n){var r=E.extend(new E.Event(),n,{type:e,isSimulated:!0});E.event.trigger(r,null,t);}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this);});},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0);}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e));};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1);},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r));}};});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=new C.DOMParser().parseFromString(e,"text/xml");}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent;}).join("\n"):e)),t;};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i);});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i);}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n);};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value);});else for(n in e)jt(n,e[n],t,i);return r.join("&");},E.fn.extend({serialize:function(){return E.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this;}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e));}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")};}):{name:t.name,value:n.replace(kt,"\r\n")};}).get();}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t);};}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1);}),r;}return l(i.dataTypes[0])||!s["*"]&&l("*");}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e;}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e);},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2]);}t=n[e.toLowerCase()+" "];}return null==t?null:t.join(", ");},getAllResponseHeaders:function(){return h?p:null;},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this;},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this;},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this;},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this;}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host;}catch(e){y.crossDomain=!0;}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid++ +o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout");},y.timeout));try{h=!1,c.send(a,l);}catch(e){if(h)throw e;l(-1,e);}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break;}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break;}a||(a=i);}o=o||a;}if(o)return o!==u[0]&&u.unshift(o),n[o];}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break;}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t);}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o};}}return{state:"success",data:t};}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")));}return T;},getJSON:function(e,t,n){return E.get(e,t,n,"json");},getScript:function(e,t){return E.get(e,void 0,t,"script");}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e));};}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"");}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n);}});},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e;}).append(this)),this;},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e));}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n);});},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t);});},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes);}),this;}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e);},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length);},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest();}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()));};},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a();});},o=o("abort");try{r.send(i.hasContent&&i.data||null);}catch(e){if(o)throw e;}},abort:function(){o&&o();}};}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1);}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e;}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET");}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type);}),S.head.appendChild(r[0]);},abort:function(){i&&i();}};});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e;}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0];},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments;},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0;}),"script";}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o;},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e);}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e]);});}),this;},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem;}).length;},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f);}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e);});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0;},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0));}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)};}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re;});}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n;},t,e,arguments.length);};}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t;});}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i);},s,n?e:void 0,n);};});}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e);};}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n);},unbind:function(e,t){return this.off(e,null,t);},delegate:function(e,t,n,r){return this.on(t,e,n,r);},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n);},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e);}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n);};});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)));}).guid=e.guid=e.guid||E.guid++,i;},E.holdReady=function(e){e?E.readyWait++:E.ready(!0);},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e));},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1");},"function"==typeof define&&__webpack_require__.amdO&&define("jquery",[],function(){return E;});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E;},"undefined"==typeof e&&(C.jQuery=C.$=E),E;});/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2023 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8-beta.73
 */!function(e,t){if("object"==typeof exports&&"object"=="object")module.exports=t(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));else if("function"==typeof define&&__webpack_require__.amdO)define(["jquery"],t);else{var i="object"==typeof exports?t(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")):t(e.jQuery);for(var a in i)("object"==typeof exports?exports:e)[a]=i[a];}}("undefined"!=typeof self?self:undefined,function(e){return function(){"use strict";var t={3046:function(e,t,i){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i(7149),i(3194),i(9302),i(4013),i(3851),i(219),i(207),i(5296);var n=((a=i(2394))&&a.__esModule?a:{default:a}).default;t.default=n;},8741:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=i;},3976:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(2839),n={_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:function(){},onincomplete:function(){},oncleared:function(){},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:function(){},onBeforeMask:null,onBeforePaste:function(e,t){return"function"==typeof t.onBeforeMask?t.onBeforeMask.call(this,e,t):e;},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:function(){},skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[a.keys.Backspace,a.keys.Tab,a.keys.Pause,a.keys.Escape,a.keys.PageUp,a.keys.PageDown,a.keys.End,a.keys.Home,a.keys.ArrowLeft,a.keys.ArrowUp,a.keys.ArrowRight,a.keys.ArrowDown,a.keys.Insert,a.keys.Delete,a.keys.ContextMenu,a.keys.F1,a.keys.F2,a.keys.F3,a.keys.F4,a.keys.F5,a.keys.F6,a.keys.F7,a.keys.F8,a.keys.F9,a.keys.F10,a.keys.F11,a.keys.F12,a.keys.Process,a.keys.Unidentified,a.keys.Shift,a.keys.Control,a.keys.Alt,a.keys.Tab,a.keys.AltGraph,a.keys.CapsLock],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}};t.default=n;},7392:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}};},3287:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=i(7957))&&a.__esModule?a:{default:a};if(void 0===n.default)throw"jQuery not loaded!";var r=n.default;t.default=r;},9845:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.ie=void 0;var a,n=(a=i(9380))&&a.__esModule?a:{default:a};var r=n.default.navigator&&n.default.navigator.userAgent||"",o=r.indexOf("MSIE ")>0||r.indexOf("Trident/")>0,s=navigator.userAgentData&&navigator.userAgentData.mobile||n.default.navigator&&n.default.navigator.maxTouchPoints||"ontouchstart"in n.default,l=/iphone/i.test(r);t.iphone=l,t.mobile=s,t.ie=o;},7184:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(i,"\\$1");};var i=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim");},6030:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var a=i(8711),n=i(2839),r=i(9845),o=i(7215),s=i(7760),l=i(4713);function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(e,t);}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]};},e:function(e){throw e;},f:n};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var r,o=!0,s=!1;return{s:function(){i=i.call(e);},n:function(){var e=i.next();return o=e.done,e;},e:function(e){s=!0,r=e;},f:function(){try{o||null==i.return||i.return();}finally{if(s)throw r;}}};}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a;}var f={keyEvent:function(e,t,i,c,u){var p=this.inputmask,d=p.opts,h=p.dependencyLib,m=p.maskset,v=this,g=h(v),k=e.key,y=a.caret.call(p,v),b=d.onKeyDown.call(this,e,a.getBuffer.call(p),y,d);if(void 0!==b)return b;if(k===n.keys.Backspace||k===n.keys.Delete||r.iphone&&k===n.keys.BACKSPACE_SAFARI||e.ctrlKey&&k===n.keys.x&&!("oncut"in v))e.preventDefault(),o.handleRemove.call(p,v,k,y),(0,s.writeBuffer)(v,a.getBuffer.call(p,!0),m.p,e,v.inputmask._valueGet()!==a.getBuffer.call(p).join(""));else if(k===n.keys.End||k===n.keys.PageDown){e.preventDefault();var x=a.seekNext.call(p,a.getLastValidPosition.call(p));a.caret.call(p,v,e.shiftKey?y.begin:x,x,!0);}else k===n.keys.Home&&!e.shiftKey||k===n.keys.PageUp?(e.preventDefault(),a.caret.call(p,v,0,e.shiftKey?y.begin:0,!0)):d.undoOnEscape&&k===n.keys.Escape&&!0!==e.altKey?((0,s.checkVal)(v,!0,!1,p.undoValue.split("")),g.trigger("click")):k!==n.keys.Insert||e.shiftKey||e.ctrlKey||void 0!==p.userOptions.insertMode?!0===d.tabThrough&&k===n.keys.Tab?!0===e.shiftKey?(y.end=a.seekPrevious.call(p,y.end,!0),!0===l.getTest.call(p,y.end-1).match.static&&y.end--,y.begin=a.seekPrevious.call(p,y.end,!0),y.begin>=0&&y.end>0&&(e.preventDefault(),a.caret.call(p,v,y.begin,y.end))):(y.begin=a.seekNext.call(p,y.begin,!0),y.end=a.seekNext.call(p,y.begin,!0),y.end<m.maskLength&&y.end--,y.begin<=m.maskLength&&(e.preventDefault(),a.caret.call(p,v,y.begin,y.end))):e.shiftKey||d.insertModeVisual&&!1===d.insertMode&&(k===n.keys.ArrowRight?setTimeout(function(){var e=a.caret.call(p,v);a.caret.call(p,v,e.begin);},0):k===n.keys.ArrowLeft&&setTimeout(function(){var e=a.translatePosition.call(p,v.inputmask.caretPos.begin);a.translatePosition.call(p,v.inputmask.caretPos.end);p.isRTL?a.caret.call(p,v,e+(e===m.maskLength?0:1)):a.caret.call(p,v,e-(0===e?0:1));},0)):o.isSelection.call(p,y)?d.insertMode=!d.insertMode:(d.insertMode=!d.insertMode,a.caret.call(p,v,y.begin,y.begin));return p.isComposing=k==n.keys.Process||k==n.keys.Unidentified,p.ignorable=d.ignorables.includes(k),f.keypressEvent.call(this,e,t,i,c,u);},keypressEvent:function(e,t,i,r,l){var c=this.inputmask||this,u=c.opts,f=c.dependencyLib,p=c.maskset,d=c.el,h=f(d),m=e.key;if(!0===t||e.ctrlKey&&e.altKey||!(e.ctrlKey||e.metaKey||c.ignorable)){if(m){var v,g=t?{begin:l,end:l}:a.caret.call(c,d);m=u.substitutes[m]||m,p.writeOutBuffer=!0;var k=o.isValid.call(c,g,m,r,void 0,void 0,void 0,t);if(!1!==k&&(a.resetMaskSet.call(c,!0),v=void 0!==k.caret?k.caret:a.seekNext.call(c,k.pos.begin?k.pos.begin:k.pos),p.p=v),v=u.numericInput&&void 0===k.caret?a.seekPrevious.call(c,v):v,!1!==i&&(setTimeout(function(){u.onKeyValidation.call(d,m,k);},0),p.writeOutBuffer&&!1!==k)){var y=a.getBuffer.call(c);(0,s.writeBuffer)(d,y,v,e,!0!==t);}if(e.preventDefault(),t)return!1!==k&&(k.forwardPosition=v),k;}}else m===n.keys.Enter&&c.undoValue!==c._valueGet(!0)&&(c.undoValue=c._valueGet(!0),setTimeout(function(){h.trigger("change");},0));},pasteEvent:function(e){var t,i=this.inputmask,n=i.opts,r=i._valueGet(!0),o=a.caret.call(i,this);i.isRTL&&(t=o.end,o.end=a.translatePosition.call(i,o.begin),o.begin=a.translatePosition.call(i,t));var l=r.substr(0,o.begin),u=r.substr(o.end,r.length);if(l==(i.isRTL?a.getBufferTemplate.call(i).slice().reverse():a.getBufferTemplate.call(i)).slice(0,o.begin).join("")&&(l=""),u==(i.isRTL?a.getBufferTemplate.call(i).slice().reverse():a.getBufferTemplate.call(i)).slice(o.end).join("")&&(u=""),window.clipboardData&&window.clipboardData.getData)r=l+window.clipboardData.getData("Text")+u;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;r=l+e.clipboardData.getData("text/plain")+u;}var f=r;if(i.isRTL){f=f.split("");var p,d=c(a.getBufferTemplate.call(i));try{for(d.s();!(p=d.n()).done;){var h=p.value;f[0]===h&&f.shift();}}catch(e){d.e(e);}finally{d.f();}f=f.join("");}if("function"==typeof n.onBeforePaste){if(!1===(f=n.onBeforePaste.call(i,f,n)))return!1;f||(f=r);}(0,s.checkVal)(this,!0,!1,f.toString().split(""),e),e.preventDefault();},inputFallBackEvent:function(e){var t=this.inputmask,i=t.opts,o=t.dependencyLib;var c,u=this,p=u.inputmask._valueGet(!0),d=(t.isRTL?a.getBuffer.call(t).slice().reverse():a.getBuffer.call(t)).join(""),h=a.caret.call(t,u,void 0,void 0,!0);if(d!==p){if(c=function(e,n,r){for(var o,s,c,u=e.substr(0,r.begin).split(""),f=e.substr(r.begin).split(""),p=n.substr(0,r.begin).split(""),d=n.substr(r.begin).split(""),h=u.length>=p.length?u.length:p.length,m=f.length>=d.length?f.length:d.length,v="",g=[],k="~";u.length<h;)u.push(k);for(;p.length<h;)p.push(k);for(;f.length<m;)f.unshift(k);for(;d.length<m;)d.unshift(k);var y=u.concat(f),b=p.concat(d);for(s=0,o=y.length;s<o;s++)switch(c=l.getPlaceholder.call(t,a.translatePosition.call(t,s)),v){case"insertText":b[s-1]===y[s]&&r.begin==y.length-1&&g.push(y[s]),s=o;break;case"insertReplacementText":case"deleteContentBackward":y[s]===k?r.end++:s=o;break;default:y[s]!==b[s]&&(y[s+1]!==k&&y[s+1]!==c&&void 0!==y[s+1]||(b[s]!==c||b[s+1]!==k)&&b[s]!==k?b[s+1]===k&&b[s]===y[s+1]?(v="insertText",g.push(y[s]),r.begin--,r.end--):y[s]!==c&&y[s]!==k&&(y[s+1]===k||b[s]!==y[s]&&b[s+1]===y[s+1])?(v="insertReplacementText",g.push(y[s]),r.begin--):y[s]===k?(v="deleteContentBackward",(a.isMask.call(t,a.translatePosition.call(t,s),!0)||b[s]===i.radixPoint)&&r.end++):s=o:(v="insertText",g.push(y[s]),r.begin--,r.end--));}return{action:v,data:g,caret:r};}(p,d,h),(u.inputmask.shadowRoot||u.ownerDocument).activeElement!==u&&u.focus(),(0,s.writeBuffer)(u,a.getBuffer.call(t)),a.caret.call(t,u,h.begin,h.end,!0),!r.mobile&&t.skipNextInsert&&"insertText"===e.inputType&&"insertText"===c.action&&t.isComposing)return!1;switch("insertCompositionText"===e.inputType&&"insertText"===c.action&&t.isComposing?t.skipNextInsert=!0:t.skipNextInsert=!1,c.action){case"insertText":case"insertReplacementText":c.data.forEach(function(e,i){var a=new o.Event("keypress");a.key=e,t.ignorable=!1,f.keypressEvent.call(u,a);}),setTimeout(function(){t.$el.trigger("keyup");},0);break;case"deleteContentBackward":var m=new o.Event("keydown");m.key=n.keys.Backspace,f.keyEvent.call(u,m);break;default:(0,s.applyInputValue)(u,p),a.caret.call(t,u,h.begin,h.end,!0);}e.preventDefault();}},setValueEvent:function(e){var t=this.inputmask,i=this,n=e&&e.detail?e.detail[0]:arguments[1];void 0===n&&(n=i.inputmask._valueGet(!0)),(0,s.applyInputValue)(i,n),(e.detail&&void 0!==e.detail[1]||void 0!==arguments[2])&&a.caret.call(t,i,e.detail?e.detail[1]:arguments[2]);},focusEvent:function(e){var t=this.inputmask,i=t.opts,n=this,r=n.inputmask._valueGet();i.showMaskOnFocus&&r!==a.getBuffer.call(t).join("")&&(0,s.writeBuffer)(n,a.getBuffer.call(t),a.seekNext.call(t,a.getLastValidPosition.call(t))),!0!==i.positionCaretOnTab||!1!==t.mouseEnter||o.isComplete.call(t,a.getBuffer.call(t))&&-1!==a.getLastValidPosition.call(t)||f.clickEvent.apply(n,[e,!0]),t.undoValue=t._valueGet(!0);},invalidEvent:function(e){this.inputmask.validationEvent=!0;},mouseleaveEvent:function(){var e=this.inputmask,t=e.opts,i=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&(i.inputmask.shadowRoot||i.ownerDocument).activeElement!==i&&(0,s.HandleNativePlaceholder)(i,e.originalPlaceholder);},clickEvent:function(e,t){var i=this.inputmask;i.clicked++;var n=this;if((n.inputmask.shadowRoot||n.ownerDocument).activeElement===n){var r=a.determineNewCaretPosition.call(i,a.caret.call(i,n),t);void 0!==r&&a.caret.call(i,n,r);}},cutEvent:function(e){var t=this.inputmask,i=t.maskset,r=this,l=a.caret.call(t,r),c=t.isRTL?a.getBuffer.call(t).slice(l.end,l.begin):a.getBuffer.call(t).slice(l.begin,l.end),u=t.isRTL?c.reverse().join(""):c.join("");window.navigator.clipboard?window.navigator.clipboard.writeText(u):window.clipboardData&&window.clipboardData.getData&&window.clipboardData.setData("Text",u),o.handleRemove.call(t,r,n.keys.Delete,l),(0,s.writeBuffer)(r,a.getBuffer.call(t),i.p,e,t.undoValue!==t._valueGet(!0));},blurEvent:function(e){var t=this.inputmask,i=t.opts,n=t.dependencyLib;t.clicked=0;var r=n(this),l=this;if(l.inputmask){(0,s.HandleNativePlaceholder)(l,t.originalPlaceholder);var c=l.inputmask._valueGet(),u=a.getBuffer.call(t).slice();""!==c&&(i.clearMaskOnLostFocus&&(-1===a.getLastValidPosition.call(t)&&c===a.getBufferTemplate.call(t).join("")?u=[]:s.clearOptionalTail.call(t,u)),!1===o.isComplete.call(t,u)&&(setTimeout(function(){r.trigger("incomplete");},0),i.clearIncomplete&&(a.resetMaskSet.call(t),u=i.clearMaskOnLostFocus?[]:a.getBufferTemplate.call(t).slice())),(0,s.writeBuffer)(l,u,void 0,e)),t.undoValue!==t._valueGet(!0)&&(t.undoValue=t._valueGet(!0),r.trigger("change"));}},mouseenterEvent:function(){var e=this.inputmask,t=e.opts.showMaskOnHover,i=this;if(e.mouseEnter=!0,(i.inputmask.shadowRoot||i.ownerDocument).activeElement!==i){var n=(e.isRTL?a.getBufferTemplate.call(e).slice().reverse():a.getBufferTemplate.call(e)).join("");t&&(0,s.HandleNativePlaceholder)(i,n);}},submitEvent:function(){var e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger("change"),-1===a.getLastValidPosition.call(e)&&e._valueGet&&e._valueGet()===a.getBufferTemplate.call(e).join("")&&e._valueSet(""),t.clearIncomplete&&!1===o.isComplete.call(e,a.getBuffer.call(e))&&e._valueSet(""),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout(function(){(0,s.writeBuffer)(e.el,a.getBuffer.call(e));},0));},resetEvent:function(){var e=this.inputmask;e.refreshValue=!0,setTimeout(function(){(0,s.applyInputValue)(e.el,e._valueGet(!0));},0);}};t.EventHandlers=f;},9716:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var a,n=(a=i(2394))&&a.__esModule?a:{default:a},r=i(2839),o=i(8711),s=i(7760);var l={on:function(e,t,i){var a=e.inputmask.dependencyLib,l=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);var l,c=this,u=c.inputmask,f=u?u.opts:void 0;if(void 0===u&&"FORM"!==this.nodeName){var p=a.data(c,"_inputmask_opts");a(c).off(),p&&new n.default(p).mask(c);}else{if(["submit","reset","setvalue"].includes(t.type)||"FORM"===this.nodeName||!(c.disabled||c.readOnly&&!("keydown"===t.type&&t.ctrlKey&&t.key===r.keys.c||!1===f.tabThrough&&t.key===r.keys.Tab))){switch(t.type){case"input":if(!0===u.skipInputEvent)return u.skipInputEvent=!1,t.preventDefault();break;case"click":case"focus":return u.validationEvent?(u.validationEvent=!1,e.blur(),(0,s.HandleNativePlaceholder)(e,(u.isRTL?o.getBufferTemplate.call(u).slice().reverse():o.getBufferTemplate.call(u)).join("")),setTimeout(function(){e.focus();},f.validationEventTimeOut),!1):(l=arguments,void setTimeout(function(){e.inputmask&&i.apply(c,l);},0));}var d=i.apply(c,arguments);return!1===d&&(t.preventDefault(),t.stopPropagation()),d;}t.preventDefault();}};["submit","reset"].includes(t)?(l=l.bind(e),null!==e.form&&a(e.form).on(t,l)):a(e).on(t,l),e.inputmask.events[t]=e.inputmask.events[t]||[],e.inputmask.events[t].push(l);},off:function(e,t){if(e.inputmask&&e.inputmask.events){var i=e.inputmask.dependencyLib,a=e.inputmask.events;for(var n in t&&((a=[])[t]=e.inputmask.events[t]),a){for(var r=a[n];r.length>0;){var o=r.pop();["submit","reset"].includes(n)?null!==e.form&&i(e.form).off(n,o):i(e).off(n,o);}delete e.inputmask.events[n];}}}};t.EventRuler=l;},219:function(e,t,i){var a=p(i(2394)),n=i(2839),r=p(i(7184)),o=i(8711),s=i(4713);function l(e,t){return function(e){if(Array.isArray(e))return e;}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,n,r,o,s=[],l=!0,c=!1;try{if(r=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;l=!1;}else for(;!(l=(a=r.call(i)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){c=!0,n=e;}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return;}finally{if(c)throw n;}}return s;}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(e,t);}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}();}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a;}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e;}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e;},u(e);}function f(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(n=a.key,r=void 0,r=function(e,t){if("object"!==u(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!==u(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===t?String:Number)(e);}(n,"string"),"symbol"===u(r)?r:String(r)),a);}var n,r;}function p(e){return e&&e.__esModule?e:{default:e};}var d=a.default.dependencyLib,h=function(){function e(t,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,e),this.mask=t,this.format=i,this.opts=a,this._date=new Date(1,0,1),this.initDateObject(t,this.opts);}var t,i,a;return t=e,(i=[{key:"date",get:function(){return void 0===this._date&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts)),this._date;}},{key:"initDateObject",value:function(e,t){var i;for(P(t).lastIndex=0;i=P(t).exec(this.format);){var a=new RegExp("\\d+$").exec(i[0]),n=a?i[0][0]+"x":i[0],r=void 0;if(void 0!==e){if(a){var o=P(t).lastIndex,s=T(i.index,t);P(t).lastIndex=o,r=e.slice(0,e.indexOf(s.nextMatch[0]));}else r=e.slice(0,g[n]&&g[n][4]||n.length);e=e.slice(r.length);}Object.prototype.hasOwnProperty.call(g,n)&&this.setValue(this,r,n,g[n][2],g[n][1]);}}},{key:"setValue",value:function(e,t,i,a,n){if(void 0!==t&&(e[a]="ampm"===a?t:t.replace(/[^0-9]/g,"0"),e["raw"+a]=t.replace(/\s/g,"_")),void 0!==n){var r=e[a];("day"===a&&29===parseInt(r)||"month"===a&&2===parseInt(r))&&(29!==parseInt(e.day)||2!==parseInt(e.month)||""!==e.year&&void 0!==e.year||e._date.setFullYear(2012,1,29)),"day"===a&&(v=!0,0===parseInt(r)&&(r=1)),"month"===a&&(v=!0),"year"===a&&(v=!0,r.length<4&&(r=M(r,4,!0))),""===r||isNaN(r)||n.call(e._date,r),"ampm"===a&&n.call(e._date,r);}}},{key:"reset",value:function(){this._date=new Date(1,0,1);}},{key:"reInit",value:function(){this._date=void 0,this.date;}}])&&f(t.prototype,i),a&&f(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e;}(),m=new Date().getFullYear(),v=!1,g={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return M(Date.prototype.getDate.call(this),2);}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t);},"month",function(){return Date.prototype.getMonth.call(this)+1;}],mm:["0[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t);},"month",function(){return M(Date.prototype.getMonth.call(this)+1,2);}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return M(Date.prototype.getFullYear.call(this),2);}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return M(Date.prototype.getFullYear.call(this),4);}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return M(Date.prototype.getHours.call(this),2);}],hx:[function(e){return"[0-9]{".concat(e,"}");},Date.prototype.setHours,"hours",function(e){return Date.prototype.getHours;}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return M(Date.prototype.getHours.call(this),2);}],Hx:[function(e){return"[0-9]{".concat(e,"}");},Date.prototype.setHours,"hours",function(e){return function(){return M(Date.prototype.getHours.call(this),e);};}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return M(Date.prototype.getMinutes.call(this),2);}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return M(Date.prototype.getSeconds.call(this),2);}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return M(Date.prototype.getMilliseconds.call(this),3);},3],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return M(Date.prototype.getMilliseconds.call(this),2);},2],t:["[ap]",y,"ampm",b,1],tt:["[ap]m",y,"ampm",b,2],T:["[AP]",y,"ampm",b,1],TT:["[AP]M",y,"ampm",b,2],Z:[".*",void 0,"Z",function(){var e=this.toString().match(/\((.+)\)/)[1];e.includes(" ")&&(e=(e=e.replace("-"," ").toUpperCase()).split(" ").map(function(e){return l(e,1)[0];}).join(""));return e;}],o:[""],S:[""]},k={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function y(e){var t=this.getHours();e.toLowerCase().includes("p")?this.setHours(t+12):e.toLowerCase().includes("a")&&t>=12&&this.setHours(t-12);}function b(){var e=this.getHours();return(e=e||12)>=12?"PM":"AM";}function x(e){var t=new RegExp("\\d+$").exec(e[0]);if(t&&void 0!==t[0]){var i=g[e[0][0]+"x"].slice("");return i[0]=i[0](t[0]),i[3]=i[3](t[0]),i;}if(g[e[0]])return g[e[0]];}function P(e){if(!e.tokenizer){var t=[],i=[];for(var a in g)if(/\.*x$/.test(a)){var n=a[0]+"\\d+";-1===i.indexOf(n)&&i.push(n);}else-1===t.indexOf(a[0])&&t.push(a[0]);e.tokenizer="("+(i.length>0?i.join("|")+"|":"")+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g");}return e.tokenizer;}function w(e,t,i){if(!v)return!0;if(void 0===e.rawday||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||"29"==e.day&&(!isFinite(e.rawyear)||void 0===e.rawyear||""===e.rawyear)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if("29"==e.day){var a=T(t.pos,i);if("yyyy"===a.targetMatch[0]&&t.pos-a.targetMatchIndex==2)return t.remove=t.pos+1,t;}else if("02"==e.month&&"30"==e.day&&void 0!==t.c)return e.day="03",e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:"0"},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1;}function S(e,t,i,a){var n,o,s="";for(P(i).lastIndex=0;n=P(i).exec(e);){if(void 0===t){if(o=x(n))s+="("+o[0]+")";else switch(n[0]){case"[":s+="(";break;case"]":s+=")?";break;default:s+=(0,r.default)(n[0]);}}else if(o=x(n)){if(!0!==a&&o[3])s+=o[3].call(t.date);else o[2]?s+=t["raw"+o[2]]:s+=n[0];}else s+=n[0];}return s;}function M(e,t,i){for(e=String(e),t=t||2;e.length<t;)e=i?e+"0":"0"+e;return e;}function _(e,t,i){return"string"==typeof e?new h(e,t,i):e&&"object"===u(e)&&Object.prototype.hasOwnProperty.call(e,"date")?e:void 0;}function O(e,t){return S(t.inputFormat,{date:e},t);}function T(e,t){var i,a,n=0,r=0;for(P(t).lastIndex=0;a=P(t).exec(t.inputFormat);){var o=new RegExp("\\d+$").exec(a[0]);if((n+=r=o?parseInt(o[0]):a[0].length)>=e+1){i=a,a=P(t).exec(t.inputFormat);break;}}return{targetMatchIndex:n-r,nextMatch:a,targetMatch:i};}a.default.extendAliases({datetime:{mask:function(e){return e.numericInput=!1,g.S=e.i18n.ordinalSuffix.join("|"),e.inputFormat=k[e.inputFormat]||e.inputFormat,e.displayFormat=k[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=k[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=""!==e.placeholder?e.placeholder:e.inputFormat.replace(/[[\]]/,""),e.regex=S(e.inputFormat,void 0,e),e.min=_(e.min,e.inputFormat,e),e.max=_(e.max,e.inputFormat,e),null;},placeholder:"",inputFormat:"isoDateTime",displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function(e,t,i,a,n,r,o,s){if(s)return!0;if(isNaN(i)&&e[t]!==i){var l=T(t,n);if(l.nextMatch&&l.nextMatch[0]===i&&l.targetMatch[0].length>1){var c=g[l.targetMatch[0]][0];if(new RegExp(c).test("0"+e[t-1]))return e[t]=e[t-1],e[t-1]="0",{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1};}}return!0;},postValidation:function(e,t,i,a,n,r,o,l){var c,u;if(o)return!0;if(!1===a&&(((c=T(t+1,n)).targetMatch&&c.targetMatchIndex===t&&c.targetMatch[0].length>1&&void 0!==g[c.targetMatch[0]]||(c=T(t+2,n)).targetMatch&&c.targetMatchIndex===t+1&&c.targetMatch[0].length>1&&void 0!==g[c.targetMatch[0]])&&(u=g[c.targetMatch[0]][0]),void 0!==u&&(void 0!==r.validPositions[t+1]&&new RegExp(u).test(i+"0")?(e[t]=i,e[t+1]="0",a={pos:t+2,caret:t}):new RegExp(u).test("0"+i)&&(e[t]="0",e[t+1]=i,a={pos:t+2})),!1===a))return a;if(a.fuzzy&&(e=a.buffer,t=a.pos),(c=T(t,n)).targetMatch&&c.targetMatch[0]&&void 0!==g[c.targetMatch[0]]){var f=g[c.targetMatch[0]];u=f[0];var p=e.slice(c.targetMatchIndex,c.targetMatchIndex+c.targetMatch[0].length);if(!1===new RegExp(u).test(p.join(""))&&2===c.targetMatch[0].length&&r.validPositions[c.targetMatchIndex]&&r.validPositions[c.targetMatchIndex+1]&&(r.validPositions[c.targetMatchIndex+1].input="0"),"year"==f[2])for(var d=s.getMaskTemplate.call(this,!1,1,void 0,!0),h=t+1;h<e.length;h++)e[h]=d[h],delete r.validPositions[h];}var v=a,k=_(e.join(""),n.inputFormat,n);return v&&!isNaN(k.date.getTime())&&(n.prefillYear&&(v=function(e,t,i){if(e.year!==e.rawyear){var a=m.toString(),n=e.rawyear.replace(/[^0-9]/g,""),r=a.slice(0,n.length),o=a.slice(n.length);if(2===n.length&&n===r){var s=new Date(m,e.month-1,e.day);e.day==s.getDate()&&(!i.max||i.max.date.getTime()>=s.getTime())&&(e.date.setFullYear(m),e.year=a,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}]);}}return t;}(k,v,n)),v=function(e,t,i,a,n){if(!t)return t;if(t&&i.min&&!isNaN(i.min.date.getTime())){var r;for(e.reset(),P(i).lastIndex=0;r=P(i).exec(i.inputFormat);){var o;if((o=x(r))&&o[3]){for(var s=o[1],l=e[o[2]],c=i.min[o[2]],u=i.max?i.max[o[2]]:c,f=[],p=!1,d=0;d<c.length;d++)void 0!==a.validPositions[d+r.index]||p?(f[d]=l[d],p=p||l[d]>c[d]):(f[d]=c[d],"year"===o[2]&&l.length-1==d&&c!=u&&(f=(parseInt(f.join(""))+1).toString().split("")),"ampm"===o[2]&&c!=u&&i.min.date.getTime()>e.date.getTime()&&(f[d]=u[d]));s.call(e._date,f.join(""));}}t=i.min.date.getTime()<=e.date.getTime(),e.reInit();}return t&&i.max&&(isNaN(i.max.date.getTime())||(t=i.max.date.getTime()>=e.date.getTime())),t;}(k,v=w.call(this,k,v,n),n,r)),void 0!==t&&v&&a.pos!==t?{buffer:S(n.inputFormat,k,n).split(""),refreshFromBuffer:{start:t,end:a.pos},pos:a.caret||a.pos}:v;},onKeyDown:function(e,t,i,a){e.ctrlKey&&e.key===n.keys.ArrowRight&&(this.inputmask._valueSet(O(new Date(),a)),d(this).trigger("setvalue"));},onUnMask:function(e,t,i){return t?S(i.outputFormat,_(e,i.inputFormat,i),i,!0):t;},casing:function(e,t,i,a){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e;},onBeforeMask:function(e,t){return"[object Date]"===Object.prototype.toString.call(e)&&(e=O(e,t)),e;},insertMode:!1,insertModeVisual:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric",prefillYear:!0}});},3851:function(e,t,i){var a,n=(a=i(2394))&&a.__esModule?a:{default:a},r=i(8711),o=i(4713);n.default.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var s=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function l(e,t,i,a,n){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,s.test(e);}n.default.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)://.*",autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:"i{1,3}.j{1,3}.k{1,3}.l{1,3}",definitions:{i:{validator:l},j:{validator:l},k:{validator:l},l:{validator:l}},onUnMask:function(e,t,i){return e;},inputmode:"decimal",substitutes:{",":"."}},email:{mask:function(e){var t=e.separator,i=e.quantifier,a="*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",n=a;if(t)for(var r=0;r<i;r++)n+="[".concat(t).concat(a,"]");return n;},greedy:!1,casing:"lower",separator:null,quantifier:5,skipOptionalPartCharacter:"",onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","");},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function(e,t,i){return e;},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function(e,t,i,a,n,s,l){var c=o.getMaskTemplate.call(this,!0,r.getLastValidPosition.call(this),!0,!0);return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));}}});},207:function(e,t,i){var a=s(i(2394)),n=s(i(7184)),r=i(8711),o=i(2839);function s(e){return e&&e.__esModule?e:{default:e};}var l=a.default.dependencyLib;function c(e,t){for(var i="",n=0;n<e.length;n++)a.default.prototype.definitions[e.charAt(n)]||t.definitions[e.charAt(n)]||t.optionalmarker[0]===e.charAt(n)||t.optionalmarker[1]===e.charAt(n)||t.quantifiermarker[0]===e.charAt(n)||t.quantifiermarker[1]===e.charAt(n)||t.groupmarker[0]===e.charAt(n)||t.groupmarker[1]===e.charAt(n)||t.alternatormarker===e.charAt(n)?i+="\\"+e.charAt(n):i+=e.charAt(n);return i;}function u(e,t,i,a){if(e.length>0&&t>0&&(!i.digitsOptional||a)){var n=e.indexOf(i.radixPoint),r=!1;i.negationSymbol.back===e[e.length-1]&&(r=!0,e.length--),-1===n&&(e.push(i.radixPoint),n=e.length-1);for(var o=1;o<=t;o++)isFinite(e[n+o])||(e[n+o]="0");}return r&&e.push(i.negationSymbol.back),e;}function f(e,t){var i=0;for(var a in"+"===e&&(i=r.seekNext.call(this,t.validPositions.length-1)),t.tests)if((a=parseInt(a))>=i)for(var n=0,o=t.tests[a].length;n<o;n++)if((void 0===t.validPositions[a]||"-"===e)&&t.tests[a][n].match.def===e)return a+(void 0!==t.validPositions[a]&&"-"!==e?1:0);return i;}function p(e,t){for(var i=-1,a=0,n=t.validPositions.length;a<n;a++){var r=t.validPositions[a];if(r&&r.match.def===e){i=a;break;}}return i;}function d(e,t,i,a,n){var r=t.buffer?t.buffer.indexOf(n.radixPoint):-1,o=(-1!==r||a&&n.jitMasking)&&new RegExp(n.definitions[9].validator).test(e);return n._radixDance&&-1!==r&&o&&null==t.validPositions[r]?{insert:{pos:r===i?r+1:r,c:n.radixPoint},pos:i}:o;}a.default.extendAliases({numeric:{mask:function(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&(e.positionCaretOnClick="lvp");var t="0",i=e.radixPoint;!0===e.numericInput&&void 0===e.__financeInput?(t="1",e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e._radixDance=!1,i=","===e.radixPoint?"?":"!",""!==e.radixPoint&&void 0===e.definitions[i]&&(e.definitions[i]={},e.definitions[i].validator="["+e.radixPoint+"]",e.definitions[i].placeholder=e.radixPoint,e.definitions[i].static=!0,e.definitions[i].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);var a,r="[+]";if(r+=c(e.prefix,e),""!==e.groupSeparator?(void 0===e.definitions[e.groupSeparator]&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator="["+e.groupSeparator+"]",e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),r+=e._mask(e)):r+="9{+}",void 0!==e.digits&&0!==e.digits){var o=e.digits.toString().split(",");isFinite(o[0])&&o[1]&&isFinite(o[1])?r+=i+t+"{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(a=r+i+t+"{0,"+e.digits+"}",e.keepStatic=!0):r+=i+t+"{"+e.digits+"}");}else e.inputmode="numeric";return r+=c(e.suffix,e),r+="[-]",a&&(r=[a+c(e.suffix,e)+"[-]",r]),e.greedy=!1,function(e){void 0===e.parseMinMaxOptions&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp((0,n.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp((0,n.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done");}(e),""!==e.radixPoint&&e.substituteRadixPoint&&(e.substitutes["."==e.radixPoint?",":"."]=e.radixPoint),r;},_mask:function(e){return"("+e.groupSeparator+"999){+|1}";},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"decimal",shortcuts:{k:"1000",m:"1000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:d},1:{validator:d,definitionSymbol:"9"},9:{validator:"[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",definitionSymbol:"*"},"+":{validator:function(e,t,i,a,n){return n.allowMinus&&("-"===e||e===n.negationSymbol.front);}},"-":{validator:function(e,t,i,a,n){return n.allowMinus&&e===n.negationSymbol.back;}}},preValidation:function(e,t,i,a,n,r,o,s){if(!1!==n.__financeInput&&i===n.radixPoint)return!1;var l=e.indexOf(n.radixPoint),c=t;if(t=function(e,t,i,a,n){return n._radixDance&&n.numericInput&&t!==n.negationSymbol.back&&e<=i&&(i>0||t==n.radixPoint)&&(void 0===a.validPositions[e-1]||a.validPositions[e-1].input!==n.negationSymbol.back)&&(e-=1),e;}(t,i,l,r,n),"-"===i||i===n.negationSymbol.front){if(!0!==n.allowMinus)return!1;var u=!1,d=p("+",r),h=p("-",r);return-1!==d&&(u=[d,h]),!1!==u?{remove:u,caret:c-n.negationSymbol.back.length}:{insert:[{pos:f.call(this,"+",r),c:n.negationSymbol.front,fromIsValid:!0},{pos:f.call(this,"-",r),c:n.negationSymbol.back,fromIsValid:void 0}],caret:c+n.negationSymbol.back.length};}if(i===n.groupSeparator)return{caret:c};if(s)return!0;if(-1!==l&&!0===n._radixDance&&!1===a&&i===n.radixPoint&&void 0!==n.digits&&(isNaN(n.digits)||parseInt(n.digits)>0)&&l!==t)return{caret:n._radixDance&&t===l-1?l+1:l};if(!1===n.__financeInput)if(a){if(n.digitsOptional)return{rewritePosition:o.end};if(!n.digitsOptional){if(o.begin>l&&o.end<=l)return i===n.radixPoint?{insert:{pos:l+1,c:"0",fromIsValid:!0},rewritePosition:l}:{rewritePosition:l+1};if(o.begin<l)return{rewritePosition:o.begin-1};}}else if(!n.showMaskOnHover&&!n.showMaskOnFocus&&!n.digitsOptional&&n.digits>0&&""===this.__valueGet.call(this.el))return{rewritePosition:l};return{rewritePosition:t};},postValidation:function(e,t,i,a,n,r,o){if(!1===a)return a;if(o)return!0;if(null!==n.min||null!==n.max){var s=n.onUnMask(e.slice().reverse().join(""),void 0,l.extend({},n,{unmaskAsNumber:!0}));if(null!==n.min&&s<n.min&&(s.toString().length>n.min.toString().length||s<0))return!1;if(null!==n.max&&s>n.max)return!!n.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:u(n.max.toString().replace(".",n.radixPoint).split(""),n.digits,n).reverse()};}return a;},onUnMask:function(e,t,i){if(""===t&&!0===i.nullable)return t;var a=e.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp((0,n.default)(i.groupSeparator),"g"),""),""!==i.placeholder.charAt(0)&&(a=a.replace(new RegExp(i.placeholder.charAt(0),"g"),"0")),i.unmaskAsNumber?(""!==i.radixPoint&&-1!==a.indexOf(i.radixPoint)&&(a=a.replace(n.default.call(this,i.radixPoint),".")),a=(a=a.replace(new RegExp("^"+(0,n.default)(i.negationSymbol.front)),"-")).replace(new RegExp((0,n.default)(i.negationSymbol.back)+"$"),""),Number(a)):a;},isComplete:function(e,t){var i=(t.numericInput?e.slice().reverse():e).join("");return i=(i=(i=(i=(i=i.replace(new RegExp("^"+(0,n.default)(t.negationSymbol.front)),"-")).replace(new RegExp((0,n.default)(t.negationSymbol.back)+"$"),"")).replace(t.prefix,"")).replace(t.suffix,"")).replace(new RegExp((0,n.default)(t.groupSeparator)+"([0-9]{3})","g"),"$1"),","===t.radixPoint&&(i=i.replace((0,n.default)(t.radixPoint),".")),isFinite(i);},onBeforeMask:function(e,t){var i=t.radixPoint||",";isFinite(t.digits)&&(t.digits=parseInt(t.digits)),"number"!=typeof e&&"number"!==t.inputType||""===i||(e=e.toString().replace(".",i));var a="-"===e.charAt(0)||e.charAt(0)===t.negationSymbol.front,r=e.split(i),o=r[0].replace(/[^\-0-9]/g,""),s=r.length>1?r[1].replace(/[^0-9]/g,""):"",l=r.length>1;e=o+(""!==s?i+s:s);var c=0;if(""!==i&&(c=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,""!==s||!t.digitsOptional)){var f=Math.pow(10,c||1);e=e.replace((0,n.default)(i),"."),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*f)/f).toFixed(c)),e=e.toString().replace(".",i);}if(0===t.digits&&-1!==e.indexOf(i)&&(e=e.substring(0,e.indexOf(i))),null!==t.min||null!==t.max){var p=e.toString().replace(i,".");null!==t.min&&p<t.min?e=t.min.toString().replace(".",i):null!==t.max&&p>t.max&&(e=t.max.toString().replace(".",i));}return a&&"-"!==e.charAt(0)&&(e="-"+e),u(e.toString().split(""),c,t,l).join("");},onBeforeWrite:function(e,t,i,a){function r(e,t){if(!1!==a.__financeInput||t){var i=e.indexOf(a.radixPoint);-1!==i&&e.splice(i,1);}if(""!==a.groupSeparator)for(;-1!==(i=e.indexOf(a.groupSeparator));)e.splice(i,1);return e;}var o,s;if(a.stripLeadingZeroes&&(s=function(e,t){var i=new RegExp("(^"+(""!==t.negationSymbol.front?(0,n.default)(t.negationSymbol.front)+"?":"")+(0,n.default)(t.prefix)+")(.*)("+(0,n.default)(t.suffix)+(""!=t.negationSymbol.back?(0,n.default)(t.negationSymbol.back)+"?":"")+"$)").exec(e.slice().reverse().join("")),a=i?i[2]:"",r=!1;return a&&(a=a.split(t.radixPoint.charAt(0))[0],r=new RegExp("^[0"+t.groupSeparator+"]*").exec(a)),!(!r||!(r[0].length>1||r[0].length>0&&r[0].length<a.length))&&r;}(t,a)))for(var c=t.join("").lastIndexOf(s[0].split("").reverse().join(""))-(s[0]==s.input?0:1),f=s[0]==s.input?1:0,p=s[0].length-f;p>0;p--)delete this.maskset.validPositions[c+p],delete t[c+p];if(e)switch(e.type){case"blur":case"checkval":if(null!==a.min){var d=a.onUnMask(t.slice().reverse().join(""),void 0,l.extend({},a,{unmaskAsNumber:!0}));if(null!==a.min&&d<a.min)return{refreshFromBuffer:!0,buffer:u(a.min.toString().replace(".",a.radixPoint).split(""),a.digits,a).reverse()};}if(t[t.length-1]===a.negationSymbol.front){var h=new RegExp("(^"+(""!=a.negationSymbol.front?(0,n.default)(a.negationSymbol.front)+"?":"")+(0,n.default)(a.prefix)+")(.*)("+(0,n.default)(a.suffix)+(""!=a.negationSymbol.back?(0,n.default)(a.negationSymbol.back)+"?":"")+"$)").exec(r(t.slice(),!0).reverse().join(""));0==(h?h[2]:"")&&(o={refreshFromBuffer:!0,buffer:[0]});}else if(""!==a.radixPoint){t.indexOf(a.radixPoint)===a.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+a.suffix.length):(t.splice(0,1+a.suffix.length),o={refreshFromBuffer:!0,buffer:r(t)}));}if(a.enforceDigitsOnBlur){var m=(o=o||{})&&o.buffer||t.slice().reverse();o.refreshFromBuffer=!0,o.buffer=u(m,a.digits,a,!0).reverse();}}return o;},onKeyDown:function(e,t,i,a){var n,r=l(this);if(3!=e.location){var s,c=e.key;if((s=a.shortcuts&&a.shortcuts[c])&&s.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(s)),r.trigger("setvalue"),!1;}if(e.ctrlKey)switch(e.key){case o.keys.ArrowUp:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(a.step)),r.trigger("setvalue"),!1;case o.keys.ArrowDown:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(a.step)),r.trigger("setvalue"),!1;}if(!e.shiftKey&&(e.key===o.keys.Delete||e.key===o.keys.Backspace||e.key===o.keys.BACKSPACE_SAFARI)&&i.begin!==t.length){if(t[e.key===o.keys.Delete?i.begin-1:i.end]===a.negationSymbol.front)return n=t.slice().reverse(),""!==a.negationSymbol.front&&n.shift(),""!==a.negationSymbol.back&&n.pop(),r.trigger("setvalue",[n.join(""),i.begin]),!1;if(!0===a._radixDance){var f=t.indexOf(a.radixPoint);if(a.digitsOptional){if(0===f)return(n=t.slice().reverse()).pop(),r.trigger("setvalue",[n.join(""),i.begin>=n.length?n.length:i.begin]),!1;}else if(-1!==f&&(i.begin<f||i.end<f||e.key===o.keys.Delete&&(i.begin===f||i.begin-1===f))){var p=void 0;return i.begin===i.end&&(e.key===o.keys.Backspace||e.key===o.keys.BACKSPACE_SAFARI?i.begin++:e.key===o.keys.Delete&&i.begin-1===f&&(p=l.extend({},i),i.begin--,i.end--)),(n=t.slice().reverse()).splice(n.length-i.begin,i.begin-i.end+1),n=u(n,a.digits,a).join(""),p&&(i=p),r.trigger("setvalue",[n,i.begin>=n.length?f+1:i.begin]),!1;}}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",inputmode:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function(e){return"("+e.groupSeparator+"99){*|1}("+e.groupSeparator+"999){1|1}";},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}});},9380:function(e,t,i){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=i(8741))&&a.__esModule?a:{default:a}).default?window:{};t.default=n;},7760:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=function(e,t){var i=e?e.inputmask:this;if(s.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||""===e.placeholder)){var a=r.getBuffer.call(i).slice(),n=e.inputmask._valueGet();if(n!==t){var o=r.getLastValidPosition.call(i);-1===o&&n===r.getBufferTemplate.call(i).join("")?a=[]:-1!==o&&u.call(i,a),p(e,a);}}}else e.placeholder!==t&&(e.placeholder=t,""===e.placeholder&&e.removeAttribute("placeholder"));},t.applyInputValue=c,t.checkVal=f,t.clearOptionalTail=u,t.unmaskedvalue=function(e){var t=e?e.inputmask:this,i=t.opts,a=t.maskset;if(e){if(void 0===e.inputmask)return e.value;e.inputmask&&e.inputmask.refreshValue&&c(e,e.inputmask._valueGet(!0));}for(var n=[],o=a.validPositions,s=0,l=o.length;s<l;s++)o[s]&&o[s].match&&(1!=o[s].match.static||Array.isArray(a.metadata)&&!0!==o[s].generatedInput)&&n.push(o[s].input);var u=0===n.length?"":(t.isRTL?n.reverse():n).join("");if("function"==typeof i.onUnMask){var f=(t.isRTL?r.getBuffer.call(t).slice().reverse():r.getBuffer.call(t)).join("");u=i.onUnMask.call(t,f,u,i);}return u;},t.writeBuffer=p;var a=i(2839),n=i(4713),r=i(8711),o=i(7215),s=i(9845),l=i(6030);function c(e,t){var i=e?e.inputmask:this,a=i.opts;e.inputmask.refreshValue=!1,"function"==typeof a.onBeforeMask&&(t=a.onBeforeMask.call(i,t,a)||t),f(e,!0,!1,t=t.toString().split("")),i.undoValue=i._valueGet(!0),(a.clearMaskOnLostFocus||a.clearIncomplete)&&e.inputmask._valueGet()===r.getBufferTemplate.call(i).join("")&&-1===r.getLastValidPosition.call(i)&&e.inputmask._valueSet("");}function u(e){e.length=0;for(var t,i=n.getMaskTemplate.call(this,!0,0,!0,void 0,!0);void 0!==(t=i.shift());)e.push(t);return e;}function f(e,t,i,a,s){var c=e?e.inputmask:this,u=c.maskset,f=c.opts,d=c.dependencyLib,h=a.slice(),m="",v=-1,g=void 0,k=f.skipOptionalPartCharacter;f.skipOptionalPartCharacter="",r.resetMaskSet.call(c),u.tests={},v=f.radixPoint?r.determineNewCaretPosition.call(c,{begin:0,end:0},!1,!1===f.__financeInput?"radixFocus":void 0).begin:0,u.p=v,c.caretPos={begin:v};var y=[],b=c.caretPos;if(h.forEach(function(e,t){if(void 0!==e){var a=new d.Event("_checkval");a.key=e,m+=e;var o=r.getLastValidPosition.call(c,void 0,!0);!function(e,t){for(var i=n.getMaskTemplate.call(c,!0,0).slice(e,r.seekNext.call(c,e,!1,!1)).join("").replace(/'/g,""),a=i.indexOf(t);a>0&&" "===i[a-1];)a--;var o=0===a&&!r.isMask.call(c,e)&&(n.getTest.call(c,e).match.nativeDef===t.charAt(0)||!0===n.getTest.call(c,e).match.static&&n.getTest.call(c,e).match.nativeDef==="'"+t.charAt(0)||" "===n.getTest.call(c,e).match.nativeDef&&(n.getTest.call(c,e+1).match.nativeDef===t.charAt(0)||!0===n.getTest.call(c,e+1).match.static&&n.getTest.call(c,e+1).match.nativeDef==="'"+t.charAt(0)));if(!o&&a>0&&!r.isMask.call(c,e,!1,!0)){var s=r.seekNext.call(c,e);c.caretPos.begin<s&&(c.caretPos={begin:s});}return o;}(v,m)?(g=l.EventHandlers.keypressEvent.call(c,a,!0,!1,i,c.caretPos.begin))&&(v=c.caretPos.begin+1,m=""):g=l.EventHandlers.keypressEvent.call(c,a,!0,!1,i,o+1),g?(void 0!==g.pos&&u.validPositions[g.pos]&&!0===u.validPositions[g.pos].match.static&&void 0===u.validPositions[g.pos].alternation&&(y.push(g.pos),c.isRTL||(g.forwardPosition=g.pos+1)),p.call(c,void 0,r.getBuffer.call(c),g.forwardPosition,a,!1),c.caretPos={begin:g.forwardPosition,end:g.forwardPosition},b=c.caretPos):void 0===u.validPositions[t]&&h[t]===n.getPlaceholder.call(c,t)&&r.isMask.call(c,t,!0)?c.caretPos.begin++:c.caretPos=b;}}),y.length>0){var x,P,w=r.seekNext.call(c,-1,void 0,!1);if(!o.isComplete.call(c,r.getBuffer.call(c))&&y.length<=w||o.isComplete.call(c,r.getBuffer.call(c))&&y.length>0&&y.length!==w&&0===y[0])for(var S=w;void 0!==(x=y.shift());){var M=new d.Event("_checkval");if((P=u.validPositions[x]).generatedInput=!0,M.key=P.input,(g=l.EventHandlers.keypressEvent.call(c,M,!0,!1,i,S))&&void 0!==g.pos&&g.pos!==x&&u.validPositions[g.pos]&&!0===u.validPositions[g.pos].match.static)y.push(g.pos);else if(!g)break;S++;}}t&&p.call(c,e,r.getBuffer.call(c),g?g.forwardPosition:c.caretPos.begin,s||new d.Event("checkval"),s&&("input"===s.type&&c.undoValue!==r.getBuffer.call(c).join("")||"paste"===s.type)),f.skipOptionalPartCharacter=k;}function p(e,t,i,n,s){var l=e?e.inputmask:this,c=l.opts,u=l.dependencyLib;if(n&&"function"==typeof c.onBeforeWrite){var f=c.onBeforeWrite.call(l,n,t,i,c);if(f){if(f.refreshFromBuffer){var p=f.refreshFromBuffer;o.refreshFromBuffer.call(l,!0===p?p:p.start,p.end,f.buffer||t),t=r.getBuffer.call(l,!0);}void 0!==i&&(i=void 0!==f.caret?f.caret:i);}}if(void 0!==e&&(e.inputmask._valueSet(t.join("")),void 0===i||void 0!==n&&"blur"===n.type||r.caret.call(l,e,i,void 0,void 0,void 0!==n&&"keydown"===n.type&&(n.key===a.keys.Delete||n.key===a.keys.Backspace)),!0===s)){var d=u(e),h=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,d.trigger("input"),setTimeout(function(){h===r.getBufferTemplate.call(l).join("")?d.trigger("cleared"):!0===o.isComplete.call(l,t)&&d.trigger("complete");},0);}}},2394:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(157),n=v(i(3287)),r=v(i(9380)),o=i(2391),s=i(4713),l=i(8711),c=i(7215),u=i(7760),f=i(9716),p=v(i(7392)),d=v(i(3976)),h=v(i(8741));function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e;}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e;},m(e);}function v(e){return e&&e.__esModule?e:{default:e};}var g=r.default.document,k="_inputmask_opts";function y(e,t,i){if(h.default){if(!(this instanceof y))return new y(e,t,i);this.dependencyLib=n.default,this.el=void 0,this.events={},this.maskset=void 0,!0!==i&&("[object Object]"===Object.prototype.toString.call(e)?t=e:(t=t||{},e&&(t.alias=e)),this.opts=n.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&void 0!==t.definitions,this.userOptions=t||{},b(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.clicked=0,this.originalPlaceholder=void 0,this.isComposing=!1,this.hasAlternator=!1;}}function b(e,t,i){var a=y.prototype.aliases[e];return a?(a.alias&&b(a.alias,void 0,i),n.default.extend(!0,i,a),n.default.extend(!0,i,t),!0):(null===i.mask&&(i.mask=e),!1);}y.prototype={dataAttribute:"data-inputmask",defaults:d.default,definitions:p.default,aliases:{},masksCache:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput;},mask:function(e){var t=this;return"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e)).forEach(function(e,i){var s=n.default.extend(!0,{},t.opts);if(function(e,t,i,a){function o(t,n){var o=""===a?t:a+"-"+t;null!==(n=void 0!==n?n:e.getAttribute(o))&&("string"==typeof n&&(0===t.indexOf("on")?n=r.default[n]:"false"===n?n=!1:"true"===n&&(n=!0)),i[t]=n);}if(!0===t.importDataAttributes){var s,l,c,u,f=e.getAttribute(a);if(f&&""!==f&&(f=f.replace(/'/g,'"'),l=JSON.parse("{"+f+"}")),l)for(u in c=void 0,l)if("alias"===u.toLowerCase()){c=l[u];break;}for(s in o("alias",c),i.alias&&b(i.alias,i,t),t){if(l)for(u in c=void 0,l)if(u.toLowerCase()===s.toLowerCase()){c=l[u];break;}o(s,c);}}n.default.extend(!0,t,i),("rtl"===e.dir||t.rightAlign)&&(e.style.textAlign="right");("rtl"===e.dir||t.numericInput)&&(e.dir="ltr",e.removeAttribute("dir"),t.isRTL=!0);return Object.keys(i).length;}(e,s,n.default.extend(!0,{},t.userOptions),t.dataAttribute)){var l=(0,o.generateMaskSet)(s,t.noMasksCache);void 0!==l&&(void 0!==e.inputmask&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new y(void 0,void 0,!0),e.inputmask.opts=s,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=n.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,n.default)(e),e.inputmask.maskset=l,n.default.data(e,k,t.userOptions),a.mask.call(e.inputmask));}}),e&&e[0]&&e[0].inputmask||this;},option:function(e,t){return"string"==typeof e?this.opts[e]:"object"===m(e)?(n.default.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0;},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),void 0===this.el||void 0!==e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");u.checkVal.call(this,void 0,!1,!1,t),"function"==typeof this.opts.onBeforeWrite&&this.opts.onBeforeWrite.call(this,void 0,l.getBuffer.call(this),0,this.opts);}return u.unmaskedvalue.call(this,this.el);},remove:function(){if(this.el){n.default.data(this.el,k,null);var e=this.opts.autoUnmask?(0,u.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e!==l.getBufferTemplate.call(this).join("")?this._valueSet(e,this.opts.autoUnmask):this._valueSet(""),f.EventRuler.off(this.el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),"value")&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0}):g.__lookupGetter__&&this.el.__lookupGetter__("value")&&this.__valueGet&&(this.el.__defineGetter__("value",this.__valueGet),this.el.__defineSetter__("value",this.__valueSet)),this.el.inputmask=void 0;}return this.el;},getemptymask:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?l.getBufferTemplate.call(this).reverse():l.getBufferTemplate.call(this)).join("");},hasMaskedValue:function(){return!this.opts.autoUnmask;},isComplete:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),c.isComplete.call(this,l.getBuffer.call(this));},getmetadata:function(){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){var e=s.getMaskTemplate.call(this,!0,0,!1).join("");return this.maskset.metadata.forEach(function(t){return t.mask!==e||(e=t,!1);}),e;}return this.maskset.metadata;},isValid:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");u.checkVal.call(this,void 0,!0,!1,t);}else e=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");for(var i=l.getBuffer.call(this),a=l.determineLastRequiredPosition.call(this),n=i.length-1;n>a&&!l.isMask.call(this,n);n--);return i.splice(a,n+1-a),c.isComplete.call(this,i)&&e===(this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join(""));},format:function(e,t){this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache);var i=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");u.checkVal.call(this,void 0,!0,!1,i);var a=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");return t?{value:a,metadata:this.getmetadata()}:a;},setValue:function(e){this.el&&(0,n.default)(this.el).trigger("setvalue",[e]);},analyseMask:o.analyseMask},y.extendDefaults=function(e){n.default.extend(!0,y.prototype.defaults,e);},y.extendDefinitions=function(e){n.default.extend(!0,y.prototype.definitions,e);},y.extendAliases=function(e){n.default.extend(!0,y.prototype.aliases,e);},y.format=function(e,t,i){return y(t).format(e,i);},y.unmask=function(e,t){return y(t).unmaskedvalue(e);},y.isValid=function(e,t){return y(t).isValid(e);},y.remove=function(e){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach(function(e){e.inputmask&&e.inputmask.remove();});},y.setValue=function(e,t){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach(function(e){e.inputmask?e.inputmask.setValue(t):(0,n.default)(e).trigger("setvalue",[t]);});},y.dependencyLib=n.default,r.default.Inputmask=y;var x=y;t.default=x;},5296:function(e,t,i){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e;}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e;},a(e);}var n=h(i(9380)),r=h(i(2394)),o=h(i(8741));function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(r=n.key,o=void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===t?String:Number)(e);}(r,"string"),"symbol"===a(o)?o:String(o)),n);}var r,o;}function l(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}(e);}function c(e){var t="function"==typeof Map?new Map():void 0;return c=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a);}function a(){return u(e,arguments,d(this).constructor);}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),p(a,e);},c(e);}function u(e,t,i){return u=f()?Reflect.construct.bind():function(e,t,i){var a=[null];a.push.apply(a,t);var n=new(Function.bind.apply(e,a))();return i&&p(n,i.prototype),n;},u.apply(null,arguments);}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0;}catch(e){return!1;}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e;},p(e,t);}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e);},d(e);}function h(e){return e&&e.__esModule?e:{default:e};}var m=n.default.document;if(o.default&&m&&m.head&&m.head.attachShadow&&n.default.customElements&&void 0===n.default.customElements.get("input-mask")){var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t);}(u,e);var t,i,a,n,o,c=(t=u,i=f(),function(){var e,a=d(t);if(i){var n=d(this).constructor;e=Reflect.construct(a,arguments,n);}else e=a.apply(this,arguments);return l(this,e);});function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,u);var t=(e=c.call(this)).getAttributeNames(),i=e.attachShadow({mode:"closed"}),a=m.createElement("input");for(var n in a.type="text",i.appendChild(a),t)Object.prototype.hasOwnProperty.call(t,n)&&a.setAttribute(t[n],e.getAttribute(t[n]));var o=new r.default();return o.dataAttribute="",o.mask(a),a.inputmask.shadowRoot=i,e;}return a=u,n&&s(a.prototype,n),o&&s(a,o),Object.defineProperty(a,"prototype",{writable:!1}),a;}(c(HTMLElement));n.default.customElements.define("input-mask",v);}},443:function(e,t,i){var a=o(i(7957)),n=o(i(2394));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e;}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e;},r(e);}function o(e){return e&&e.__esModule?e:{default:e};}void 0===a.default.fn.inputmask&&(a.default.fn.inputmask=function(e,t){var i,o=this[0];if(void 0===t&&(t={}),"string"==typeof e)switch(e){case"unmaskedvalue":return o&&o.inputmask?o.inputmask.unmaskedvalue():(0,a.default)(o).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove();});case"getemptymask":return o&&o.inputmask?o.inputmask.getemptymask():"";case"hasMaskedValue":return!(!o||!o.inputmask)&&o.inputmask.hasMaskedValue();case"isComplete":return!o||!o.inputmask||o.inputmask.isComplete();case"getmetadata":return o&&o.inputmask?o.inputmask.getmetadata():void 0;case"setvalue":n.default.setValue(o,t);break;case"option":if("string"!=typeof t)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(t);});if(o&&void 0!==o.inputmask)return o.inputmask.option(t);break;default:return t.alias=e,i=new n.default(t),this.each(function(){i.mask(this);});}else{if(Array.isArray(e))return t.alias=e,i=new n.default(t),this.each(function(){i.mask(this);});if("object"==r(e))return i=new n.default(e),void 0===e.mask&&void 0===e.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(e);i.mask(this);}):this.each(function(){i.mask(this);});if(void 0===e)return this.each(function(){(i=new n.default(t)).mask(this);});}});},2839:function(e,t){function i(e,t){return function(e){if(Array.isArray(e))return e;}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,n,r,o,s=[],l=!0,c=!1;try{if(r=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;l=!1;}else for(;!(l=(a=r.call(i)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){c=!0,n=e;}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return;}finally{if(c)throw n;}}return s;}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(e,t);}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}();}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a;}Object.defineProperty(t,"__esModule",{value:!0}),t.keys=t.keyCode=void 0,t.toKey=function(e,t){return r[e]||(t?String.fromCharCode(e):String.fromCharCode(e).toLowerCase());},t.toKeyCode=function(e){return n[e];};var n={AltGraph:18,ArrowDown:40,ArrowLeft:37,ArrowRight:39,ArrowUp:38,Backspace:8,BACKSPACE_SAFARI:127,CapsLock:20,Delete:46,End:35,Enter:13,Escape:27,Home:36,Insert:45,PageDown:34,PageUp:33,Space:32,Tab:9,c:67,x:88,z:90,Shift:16,Control:17,Alt:18,Pause:19,Meta_LEFT:91,Meta_RIGHT:92,ContextMenu:93,Process:229,Unidentified:229,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123};t.keyCode=n;var r=Object.entries(n).reduce(function(e,t){var a=i(t,2),n=a[0],r=a[1];return e[r]=void 0===e[r]?n:e[r],e;},{}),o=Object.entries(n).reduce(function(e,t){var a=i(t,2),n=a[0];a[1];return e[n]="Space"===n?" ":n,e;},{});t.keys=o;},2391:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=function(e,t,i){var a,o,s,l,c,u,f=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,p=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,d=!1,h=new n.default(),m=[],v=[],g=!1;function k(e,a,n){n=void 0!==n?n:e.matches.length;var o=e.matches[n-1];if(t){if(0===a.indexOf("[")||d&&/\\d|\\s|\\w|\\p/i.test(a)||"."===a){var s=i.casing?"i":"";/^\\p\{.*}$/i.test(a)&&(s+="u"),e.matches.splice(n++,0,{fn:new RegExp(a,s),static:!1,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==a,casing:null,def:a,placeholder:void 0,nativeDef:a});}else d&&(a=a[a.length-1]),a.split("").forEach(function(t,a){o=e.matches[n-1],e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||t)?new RegExp("["+(i.staticDefinitionSymbol||t)+"]",i.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==t&&!0!==o.static,casing:null,def:i.staticDefinitionSymbol||t,placeholder:void 0!==i.staticDefinitionSymbol?t:void 0,nativeDef:(d?"'":"")+t});});d=!1;}else{var l=i.definitions&&i.definitions[a]||i.usePrototypeDefinitions&&r.default.prototype.definitions[a];l&&!d?e.matches.splice(n++,0,{fn:l.validator?"string"==typeof l.validator?new RegExp(l.validator,i.casing?"i":""):new function(){this.test=l.validator;}():new RegExp("."),static:l.static||!1,optionality:l.optional||!1,defOptionality:l.optional||!1,newBlockMarker:void 0===o||l.optional?"master":o.def!==(l.definitionSymbol||a),casing:l.casing,def:l.definitionSymbol||a,placeholder:l.placeholder,nativeDef:a,generated:l.generated}):(e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||a)?new RegExp("["+(i.staticDefinitionSymbol||a)+"]",i.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==a&&!0!==o.static,casing:null,def:i.staticDefinitionSymbol||a,placeholder:void 0!==i.staticDefinitionSymbol?a:void 0,nativeDef:(d?"'":"")+a}),d=!1);}}function y(){if(m.length>0){if(k(l=m[m.length-1],o),l.isAlternator){c=m.pop();for(var e=0;e<c.matches.length;e++)c.matches[e].isGroup&&(c.matches[e].isGroup=!1);m.length>0?(l=m[m.length-1]).matches.push(c):h.matches.push(c);}}else k(h,o);}function b(e){var t=new n.default(!0);return t.openGroup=!1,t.matches=e,t;}function x(){if((s=m.pop()).openGroup=!1,void 0!==s){if(m.length>0){if((l=m[m.length-1]).matches.push(s),l.isAlternator){for(var e=(c=m.pop()).matches[0].matches?c.matches[0].matches.length:1,t=0;t<c.matches.length;t++)c.matches[t].isGroup=!1,c.matches[t].alternatorGroup=!1,null===i.keepStatic&&e<(c.matches[t].matches?c.matches[t].matches.length:1)&&(i.keepStatic=!0),e=c.matches[t].matches?c.matches[t].matches.length:1;m.length>0?(l=m[m.length-1]).matches.push(c):h.matches.push(c);}}else h.matches.push(s);}else y();}function P(e){var t=e.pop();return t.isQuantifier&&(t=b([e.pop(),t])),t;}t&&(i.optionalmarker[0]=void 0,i.optionalmarker[1]=void 0);for(;a=t?p.exec(e):f.exec(e);){if(o=a[0],t){switch(o.charAt(0)){case"?":o="{0,1}";break;case"+":case"*":o="{"+o+"}";break;case"|":if(0===m.length){var w=b(h.matches);w.openGroup=!0,m.push(w),h.matches=[],g=!0;}}switch(o){case"\\d":o="[0-9]";break;case"\\p":o+=p.exec(e)[0],o+=p.exec(e)[0];}}if(d)y();else switch(o.charAt(0)){case"$":case"^":t||y();break;case i.escapeChar:d=!0,t&&y();break;case i.optionalmarker[1]:case i.groupmarker[1]:x();break;case i.optionalmarker[0]:m.push(new n.default(!1,!0));break;case i.groupmarker[0]:m.push(new n.default(!0));break;case i.quantifiermarker[0]:var S=new n.default(!1,!1,!0),M=(o=o.replace(/[{}?]/g,"")).split("|"),_=M[0].split(","),O=isNaN(_[0])?_[0]:parseInt(_[0]),T=1===_.length?O:isNaN(_[1])?_[1]:parseInt(_[1]),E=isNaN(M[1])?M[1]:parseInt(M[1]);"*"!==O&&"+"!==O||(O="*"===T?0:1),S.quantifier={min:O,max:T,jit:E};var j=m.length>0?m[m.length-1].matches:h.matches;(a=j.pop()).isGroup||(a=b([a])),j.push(a),j.push(S);break;case i.alternatormarker:if(m.length>0){var A=(l=m[m.length-1]).matches[l.matches.length-1];u=l.openGroup&&(void 0===A.matches||!1===A.isGroup&&!1===A.isAlternator)?m.pop():P(l.matches);}else u=P(h.matches);if(u.isAlternator)m.push(u);else if(u.alternatorGroup?(c=m.pop(),u.alternatorGroup=!1):c=new n.default(!1,!1,!1,!0),c.matches.push(u),m.push(c),u.openGroup){u.openGroup=!1;var D=new n.default(!0);D.alternatorGroup=!0,m.push(D);}break;default:y();}}g&&x();for(;m.length>0;)s=m.pop(),h.matches.push(s);h.matches.length>0&&(!function e(a){a&&a.matches&&a.matches.forEach(function(n,r){var o=a.matches[r+1];(void 0===o||void 0===o.matches||!1===o.isQuantifier)&&n&&n.isGroup&&(n.isGroup=!1,t||(k(n,i.groupmarker[0],0),!0!==n.openGroup&&k(n,i.groupmarker[1]))),e(n);});}(h),v.push(h));(i.numericInput||i.isRTL)&&function e(t){for(var a in t.matches=t.matches.reverse(),t.matches)if(Object.prototype.hasOwnProperty.call(t.matches,a)){var n=parseInt(a);if(t.matches[a].isQuantifier&&t.matches[n+1]&&t.matches[n+1].isGroup){var r=t.matches[a];t.matches.splice(a,1),t.matches.splice(n+1,0,r);}void 0!==t.matches[a].matches?t.matches[a]=e(t.matches[a]):t.matches[a]=((o=t.matches[a])===i.optionalmarker[0]?o=i.optionalmarker[1]:o===i.optionalmarker[1]?o=i.optionalmarker[0]:o===i.groupmarker[0]?o=i.groupmarker[1]:o===i.groupmarker[1]&&(o=i.groupmarker[0]),o);}var o;return t;}(v[0]);return v;},t.generateMaskSet=function(e,t){var i;function n(e,t){var i=t.repeat,a=t.groupmarker,n=t.quantifiermarker,r=t.keepStatic;if(i>0||"*"===i||"+"===i){var l="*"===i?0:"+"===i?1:i;e=a[0]+e+a[1]+n[0]+l+","+i+n[1];}if(!0===r){var c=e.match(new RegExp("(.)\\[([^\\]]*)\\]","g"));c&&c.forEach(function(t,i){var a=function(e,t){return function(e){if(Array.isArray(e))return e;}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,n,r,o,s=[],l=!0,c=!1;try{if(r=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;l=!1;}else for(;!(l=(a=r.call(i)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){c=!0,n=e;}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return;}finally{if(c)throw n;}}return s;}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(e,t);}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}();}(t.split("["),2),n=a[0],r=a[1];r=r.replace("]",""),e=e.replace(new RegExp("".concat((0,o.default)(n),"\\[").concat((0,o.default)(r),"\\]")),n.charAt(0)===r.charAt(0)?"(".concat(n,"|").concat(n).concat(r,")"):"".concat(n,"[").concat(r,"]"));});}return e;}function l(e,i,o){var s,l,c=!1;return null!==e&&""!==e||((c=null!==o.regex)?e=(e=o.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(c=!0,e=".*")),1===e.length&&!1===o.greedy&&0!==o.repeat&&(o.placeholder=""),e=n(e,o),l=c?"regex_"+o.regex:o.numericInput?e.split("").reverse().join(""):e,null!==o.keepStatic&&(l="ks_"+o.keepStatic+l),void 0===r.default.prototype.masksCache[l]||!0===t?(s={mask:e,maskToken:r.default.prototype.analyseMask(e,c,o),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:i,maskLength:void 0,jitOffset:{}},!0!==t&&(r.default.prototype.masksCache[l]=s,s=a.default.extend(!0,{},r.default.prototype.masksCache[l]))):s=a.default.extend(!0,{},r.default.prototype.masksCache[l]),s;}"function"==typeof e.mask&&(e.mask=e.mask(e));if(Array.isArray(e.mask)){if(e.mask.length>1){null===e.keepStatic&&(e.keepStatic=!0);var c=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach(function(t){c.length>1&&(c+=e.alternatormarker),void 0!==t.mask&&"function"!=typeof t.mask?c+=t.mask:c+=t;}),l(c+=e.groupmarker[1],e.mask,e);}e.mask=e.mask.pop();}i=e.mask&&void 0!==e.mask.mask&&"function"!=typeof e.mask.mask?l(e.mask.mask,e.mask,e):l(e.mask,e.mask,e);null===e.keepStatic&&(e.keepStatic=!1);return i;};var a=l(i(3287)),n=l(i(9695)),r=l(i(2394)),o=l(i(7184));function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a;}function l(e){return e&&e.__esModule?e:{default:e};}},157:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=function(){var e=this,t=this.opts,i=this.el,u=this.dependencyLib;o.EventRuler.off(i);var f=function(t,i){"textarea"!==t.tagName.toLowerCase()&&i.ignorables.push(a.keys.Enter);var s=t.getAttribute("type"),l="input"===t.tagName.toLowerCase()&&i.supportsInputType.includes(s)||t.isContentEditable||"textarea"===t.tagName.toLowerCase();if(!l)if("input"===t.tagName.toLowerCase()){var c=document.createElement("input");c.setAttribute("type",s),l="text"===c.type,c=null;}else l="partial";return!1!==l?function(t){var a,s;function l(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==n.getLastValidPosition.call(e)||!0!==i.nullable?(this.inputmask.shadowRoot||this.ownerDocument).activeElement===this&&i.clearMaskOnLostFocus?(e.isRTL?r.clearOptionalTail.call(e,n.getBuffer.call(e).slice()).reverse():r.clearOptionalTail.call(e,n.getBuffer.call(e).slice())).join(""):a.call(this):"":a.call(this);}function c(e){s.call(this,e),this.inputmask&&(0,r.applyInputValue)(this,e);}if(!t.inputmask.__valueGet){if(!0!==i.noValuePatching){if(Object.getOwnPropertyDescriptor){var f=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):void 0;f&&f.get&&f.set?(a=f.get,s=f.set,Object.defineProperty(t,"value",{get:l,set:c,configurable:!0})):"input"!==t.tagName.toLowerCase()&&(a=function(){return this.textContent;},s=function(e){this.textContent=e;},Object.defineProperty(t,"value",{get:l,set:c,configurable:!0}));}else document.__lookupGetter__&&t.__lookupGetter__("value")&&(a=t.__lookupGetter__("value"),s=t.__lookupSetter__("value"),t.__defineGetter__("value",l),t.__defineSetter__("value",c));t.inputmask.__valueGet=a,t.inputmask.__valueSet=s;}t.inputmask._valueGet=function(t){return e.isRTL&&!0!==t?a.call(this.el).split("").reverse().join(""):a.call(this.el);},t.inputmask._valueSet=function(t,i){s.call(this.el,null==t?"":!0!==i&&e.isRTL?t.split("").reverse().join(""):t);},void 0===a&&(a=function(){return this.value;},s=function(e){this.value=e;},function(t){if(u.valHooks&&(void 0===u.valHooks[t]||!0!==u.valHooks[t].inputmaskpatch)){var a=u.valHooks[t]&&u.valHooks[t].get?u.valHooks[t].get:function(e){return e.value;},o=u.valHooks[t]&&u.valHooks[t].set?u.valHooks[t].set:function(e,t){return e.value=t,e;};u.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();var r=a(t);return-1!==n.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)||!0!==i.nullable?r:"";}return a(t);},set:function(e,t){var i=o(e,t);return e.inputmask&&(0,r.applyInputValue)(e,t),i;},inputmaskpatch:!0};}}(t.type),function(e){o.EventRuler.on(e,"mouseenter",function(){var e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?n.getBuffer.call(e.inputmask).slice().reverse():n.getBuffer.call(e.inputmask)).join("")&&(0,r.applyInputValue)(e,t);});}(t));}}(t):t.inputmask=void 0,l;}(i,t);if(!1!==f){e.originalPlaceholder=i.placeholder,e.maxLength=void 0!==i?i.maxLength:void 0,-1===e.maxLength&&(e.maxLength=void 0),"inputMode"in i&&null===i.getAttribute("inputmode")&&(i.inputMode=t.inputmode,i.setAttribute("inputmode",t.inputmode)),!0===f&&(t.showMaskOnFocus=t.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(i.autocomplete),s.iphone&&(t.insertModeVisual=!1,i.setAttribute("autocorrect","off")),o.EventRuler.on(i,"submit",c.EventHandlers.submitEvent),o.EventRuler.on(i,"reset",c.EventHandlers.resetEvent),o.EventRuler.on(i,"blur",c.EventHandlers.blurEvent),o.EventRuler.on(i,"focus",c.EventHandlers.focusEvent),o.EventRuler.on(i,"invalid",c.EventHandlers.invalidEvent),o.EventRuler.on(i,"click",c.EventHandlers.clickEvent),o.EventRuler.on(i,"mouseleave",c.EventHandlers.mouseleaveEvent),o.EventRuler.on(i,"mouseenter",c.EventHandlers.mouseenterEvent),o.EventRuler.on(i,"paste",c.EventHandlers.pasteEvent),o.EventRuler.on(i,"cut",c.EventHandlers.cutEvent),o.EventRuler.on(i,"complete",t.oncomplete),o.EventRuler.on(i,"incomplete",t.onincomplete),o.EventRuler.on(i,"cleared",t.oncleared),!0!==t.inputEventOnly&&o.EventRuler.on(i,"keydown",c.EventHandlers.keyEvent),(s.mobile||t.inputEventOnly)&&i.removeAttribute("maxLength"),o.EventRuler.on(i,"input",c.EventHandlers.inputFallBackEvent)),o.EventRuler.on(i,"setvalue",c.EventHandlers.setValueEvent),n.getBufferTemplate.call(e).join(""),e.undoValue=e._valueGet(!0);var p=(i.inputmask.shadowRoot||i.ownerDocument).activeElement;if(""!==i.inputmask._valueGet(!0)||!1===t.clearMaskOnLostFocus||p===i){(0,r.applyInputValue)(i,i.inputmask._valueGet(!0),t);var d=n.getBuffer.call(e).slice();!1===l.isComplete.call(e,d)&&t.clearIncomplete&&n.resetMaskSet.call(e),t.clearMaskOnLostFocus&&p!==i&&(-1===n.getLastValidPosition.call(e)?d=[]:r.clearOptionalTail.call(e,d)),(!1===t.clearMaskOnLostFocus||t.showMaskOnFocus&&p===i||""!==i.inputmask._valueGet(!0))&&(0,r.writeBuffer)(i,d),p===i&&n.caret.call(e,i,n.seekNext.call(e,n.getLastValidPosition.call(e)));}}};var a=i(2839),n=i(8711),r=i(7760),o=i(9716),s=i(9845),l=i(7215),c=i(6030);},9695:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i,a){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1};};},3194:function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),a=i.length>>>0;if(0===a)return!1;for(var n=0|t,r=Math.max(n>=0?n:a-Math.abs(n),0);r<a;){if(i[r]===e)return!0;r++;}return!1;}});},9302:function(){var e=Function.bind.call(Function.call,Array.prototype.reduce),t=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),i=Function.bind.call(Function.call,Array.prototype.concat),a=Object.keys;Object.entries||(Object.entries=function(n){return e(a(n),function(e,a){return i(e,"string"==typeof a&&t(n,a)?[[a,n[a]]]:[]);},[]);});},7149:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e;}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e;},e(t);}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===e("test".__proto__)?function(e){return e.__proto__;}:function(e){return e.constructor.prototype;});},4013:function(){String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t);});},8711:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=function(e,t,i,a,n){var r,o=this,s=this.opts;if(void 0===t)return"selectionStart"in e&&"selectionEnd"in e?(t=e.selectionStart,i=e.selectionEnd):window.getSelection?(r=window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==e&&r.commonAncestorContainer!==e||(t=r.startOffset,i=r.endOffset):document.selection&&document.selection.createRange&&(i=(t=0-(r=document.selection.createRange()).duplicate().moveStart("character",-e.inputmask._valueGet().length))+r.text.length),{begin:a?t:c.call(o,t),end:a?i:c.call(o,i)};if(Array.isArray(t)&&(i=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),void 0!==t.begin&&(i=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),"number"==typeof t){t=a?t:c.call(o,t),i="number"==typeof(i=a?i:c.call(o,i))?i:t;var l=parseInt(((e.ownerDocument.defaultView||window).getComputedStyle?(e.ownerDocument.defaultView||window).getComputedStyle(e,null):e.currentStyle).fontSize)*i;if(e.scrollLeft=l>e.scrollWidth?l:0,e.inputmask.caretPos={begin:t,end:i},s.insertModeVisual&&!1===s.insertMode&&t===i&&(n||i++),e===(e.inputmask.shadowRoot||e.ownerDocument).activeElement)if("setSelectionRange"in e)e.setSelectionRange(t,i);else if(window.getSelection){if(r=document.createRange(),void 0===e.firstChild||null===e.firstChild){var u=document.createTextNode("");e.appendChild(u);}r.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),r.setEnd(e.firstChild,i<e.inputmask._valueGet().length?i:e.inputmask._valueGet().length),r.collapse(!0);var f=window.getSelection();f.removeAllRanges(),f.addRange(r);}else e.createTextRange&&((r=e.createTextRange()).collapse(!0),r.moveEnd("character",i),r.moveStart("character",t),r.select());}},t.determineLastRequiredPosition=function(e){var t,i,r=this,s=r.maskset,l=r.dependencyLib,c=a.getMaskTemplate.call(r,!0,o.call(r),!0,!0),u=c.length,f=o.call(r),p={},d=s.validPositions[f],h=void 0!==d?d.locator.slice():void 0;for(t=f+1;t<c.length;t++)h=(i=a.getTestTemplate.call(r,t,h,t-1)).locator.slice(),p[t]=l.extend(!0,{},i);var m=d&&void 0!==d.alternation?d.locator[d.alternation]:void 0;for(t=u-1;t>f&&((i=p[t]).match.optionality||i.match.optionalQuantifier&&i.match.newBlockMarker||m&&(m!==p[t].locator[d.alternation]&&1!=i.match.static||!0===i.match.static&&i.locator[d.alternation]&&n.checkAlternationMatch.call(r,i.locator[d.alternation].toString().split(","),m.toString().split(","))&&""!==a.getTests.call(r,t)[0].def))&&c[t]===a.getPlaceholder.call(r,t,i.match);t--)u--;return e?{l:u,def:p[u]?p[u].match:void 0}:u;},t.determineNewCaretPosition=function(e,t,i){var n=this,c=n.maskset,u=n.opts;t&&(n.isRTL?e.end=e.begin:e.begin=e.end);if(e.begin===e.end){switch(i=i||u.positionCaretOnClick){case"none":break;case"select":e={begin:0,end:r.call(n).length};break;case"ignore":e.end=e.begin=l.call(n,o.call(n));break;case"radixFocus":if(n.clicked>1&&0==c.validPositions.length)break;if(function(e){if(""!==u.radixPoint&&0!==u.digits){var t=c.validPositions;if(void 0===t[e]||t[e].input===a.getPlaceholder.call(n,e)){if(e<l.call(n,-1))return!0;var i=r.call(n).indexOf(u.radixPoint);if(-1!==i){for(var o=0,s=t.length;o<s;o++)if(t[o]&&i<o&&t[o].input!==a.getPlaceholder.call(n,o))return!1;return!0;}}}return!1;}(e.begin)){var f=r.call(n).join("").indexOf(u.radixPoint);e.end=e.begin=u.numericInput?l.call(n,f):f;break;}default:var p=e.begin,d=o.call(n,p,!0),h=l.call(n,-1!==d||s.call(n,0)?d:-1);if(p<=h)e.end=e.begin=s.call(n,p,!1,!0)?p:l.call(n,p);else{var m=c.validPositions[d],v=a.getTestTemplate.call(n,h,m?m.match.locator:void 0,m),g=a.getPlaceholder.call(n,h,v.match);if(""!==g&&r.call(n)[h]!==g&&!0!==v.match.optionalQuantifier&&!0!==v.match.newBlockMarker||!s.call(n,h,u.keepStatic,!0)&&v.match.def===g){var k=l.call(n,h);(p>=k||p===h)&&(h=k);}e.end=e.begin=h;}}return e;}},t.getBuffer=r,t.getBufferTemplate=function(){var e=this.maskset;void 0===e._buffer&&(e._buffer=a.getMaskTemplate.call(this,!1,1),void 0===e.buffer&&(e.buffer=e._buffer.slice()));return e._buffer;},t.getLastValidPosition=o,t.isMask=s,t.resetMaskSet=function(e){var t=this.maskset;t.buffer=void 0,!0!==e&&(t.validPositions=[],t.p=0);},t.seekNext=l,t.seekPrevious=function(e,t){var i=this,n=e-1;if(e<=0)return 0;for(;n>0&&(!0===t&&(!0!==a.getTest.call(i,n).match.newBlockMarker||!s.call(i,n,void 0,!0))||!0!==t&&!s.call(i,n,void 0,!0));)n--;return n;},t.translatePosition=c;var a=i(4713),n=i(7215);function r(e){var t=this,i=t.maskset;return void 0!==i.buffer&&!0!==e||(i.buffer=a.getMaskTemplate.call(t,!0,o.call(t),!0),void 0===i._buffer&&(i._buffer=i.buffer.slice())),i.buffer;}function o(e,t,i){var a=this.maskset,n=-1,r=-1,o=i||a.validPositions;void 0===e&&(e=-1);for(var s=0,l=o.length;s<l;s++)o[s]&&(t||!0!==o[s].generatedInput)&&(s<=e&&(n=s),s>=e&&(r=s));return-1===n||n==e?r:-1==r||e-n<r-e?n:r;}function s(e,t,i){var n=this,r=this.maskset,o=a.getTestTemplate.call(n,e).match;if(""===o.def&&(o=a.getTest.call(n,e).match),!0!==o.static)return o.fn;if(!0===i&&void 0!==r.validPositions[e]&&!0!==r.validPositions[e].generatedInput)return!0;if(!0!==t&&e>-1){if(i){var s=a.getTests.call(n,e);return s.length>1+(""===s[s.length-1].match.def?1:0);}var l=a.determineTestTemplate.call(n,e,a.getTests.call(n,e)),c=a.getPlaceholder.call(n,e,l.match);return l.match.def!==c;}return!1;}function l(e,t,i){var n=this;void 0===i&&(i=!0);for(var r=e+1;""!==a.getTest.call(n,r).match.def&&(!0===t&&(!0!==a.getTest.call(n,r).match.newBlockMarker||!s.call(n,r,void 0,!0))||!0!==t&&!s.call(n,r,void 0,i));)r++;return r;}function c(e){var t=this.opts,i=this.el;return!this.isRTL||"number"!=typeof e||t.greedy&&""===t.placeholder||!i||(e=this._valueGet().length-e)<0&&(e=0),e;}},4713:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=c,t.getDecisionTaker=o,t.getMaskTemplate=function(e,t,i,a,n){var r=this,o=this.opts,u=this.maskset,f=o.greedy;n&&o.greedy&&(o.greedy=!1,r.maskset.tests={});t=t||0;var d,h,m,v,g=[],k=0;do{if(!0===e&&u.validPositions[k])h=(m=n&&u.validPositions[k].match.optionality&&void 0===u.validPositions[k+1]&&(!0===u.validPositions[k].generatedInput||u.validPositions[k].input==o.skipOptionalPartCharacter&&k>0)?c.call(r,k,p.call(r,k,d,k-1)):u.validPositions[k]).match,d=m.locator.slice(),g.push(!0===i?m.input:!1===i?h.nativeDef:s.call(r,k,h));else{h=(m=l.call(r,k,d,k-1)).match,d=m.locator.slice();var y=!0!==a&&(!1!==o.jitMasking?o.jitMasking:h.jit);(v=(v&&h.static&&h.def!==o.groupSeparator&&null===h.fn||u.validPositions[k-1]&&h.static&&h.def!==o.groupSeparator&&null===h.fn)&&u.tests[k]&&1===u.tests[k].length)||!1===y||void 0===y||"number"==typeof y&&isFinite(y)&&y>k?g.push(!1===i?h.nativeDef:s.call(r,g.length,h)):v=!1;}k++;}while(!0!==h.static||""!==h.def||t>k);""===g[g.length-1]&&g.pop();!1===i&&void 0!==u.maskLength||(u.maskLength=k-1);return o.greedy=f,g;},t.getPlaceholder=s,t.getTest=u,t.getTestTemplate=l,t.getTests=p,t.isSubsetOf=f;var a,n=(a=i(2394))&&a.__esModule?a:{default:a};function r(e,t){var i=(null!=e.alternation?e.mloc[o(e)]:e.locator).join("");if(""!==i)for(;i.length<t;)i+="0";return i;}function o(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),void 0!==t?t.toString():"";}function s(e,t,i){var a=this.opts,n=this.maskset;if(void 0!==(t=t||u.call(this,e).match).placeholder||!0===i)return"function"==typeof t.placeholder?t.placeholder(a):t.placeholder;if(!0===t.static){if(e>-1&&void 0===n.validPositions[e]){var r,o=p.call(this,e),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(""!==o[l].match.def&&!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(!0===o[l].match.static||void 0===r||!1!==o[l].match.fn.test(r.match.def,n,e,!0,a))&&(s.push(o[l]),!0===o[l].match.static&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return a.placeholder.charAt(e%a.placeholder.length);}return t.def;}return a.placeholder.charAt(e%a.placeholder.length);}function l(e,t,i){return this.maskset.validPositions[e]||c.call(this,e,p.call(this,e,t?t.slice():t,i));}function c(e,t){var i=this.opts,a=0,n=function(e,t){var i=0,a=!1;t.forEach(function(e){e.match.optionality&&(0!==i&&i!==e.match.optionality&&(a=!0),(0===i||i>e.match.optionality)&&(i=e.match.optionality));}),i&&(0==e||1==t.length?i=0:a||(i=0));return i;}(e,t);e=e>0?e-1:0;var o,s,l,c=r(u.call(this,e));i.greedy&&t.length>1&&""===t[t.length-1].match.def&&(a=1);for(var f=0;f<t.length-a;f++){var p=t[f];o=r(p,c.length);var d=Math.abs(o-c);(void 0===s||""!==o&&d<s||l&&!i.greedy&&l.match.optionality&&l.match.optionality-n>0&&"master"===l.match.newBlockMarker&&(!p.match.optionality||p.match.optionality-n<1||!p.match.newBlockMarker)||l&&!i.greedy&&l.match.optionalQuantifier&&!p.match.optionalQuantifier)&&(s=d,l=p);}return l;}function u(e,t){var i=this.maskset;return i.validPositions[e]?i.validPositions[e]:(t||p.call(this,e))[0];}function f(e,t,i){function a(e){for(var t,i=[],a=-1,n=0,r=e.length;n<r;n++)if("-"===e.charAt(n))for(t=e.charCodeAt(n+1);++a<t;)i.push(String.fromCharCode(a));else a=e.charCodeAt(n),i.push(e.charAt(n));return i.join("");}return e.match.def===t.match.nativeDef||!(!(i.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)||!0===e.match.static||!0===t.match.static)&&-1!==a(t.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g,"")));}function p(e,t,i){var a,r,o=this,s=this.dependencyLib,l=this.maskset,u=this.opts,p=this.el,d=l.maskToken,h=t?i:0,m=t?t.slice():[0],v=[],g=!1,k=t?t.join(""):"";function y(t,i,r,s){function c(r,s,d){function m(e,t){var i=0===t.matches.indexOf(e);return i||t.matches.every(function(a,n){return!0===a.isQuantifier?i=m(e,t.matches[n-1]):Object.prototype.hasOwnProperty.call(a,"matches")&&(i=m(e,a)),!i;}),i;}function x(e,t,i){var a,n;if((l.tests[e]||l.validPositions[e])&&(l.tests[e]||[l.validPositions[e]]).every(function(e,r){if(e.mloc[t])return a=e,!1;var o=void 0!==i?i:e.alternation,s=void 0!==e.locator[o]?e.locator[o].toString().indexOf(t):-1;return(void 0===n||s<n)&&-1!==s&&(a=e,n=s),!0;}),a){var r=a.locator[a.alternation];return(a.mloc[t]||a.mloc[r]||a.locator).slice((void 0!==i?i:a.alternation)+1);}return void 0!==i?x(e,t):void 0;}function P(e,t){var i=e.alternation,a=void 0===t||i===t.alternation&&-1===e.locator[i].toString().indexOf(t.locator[i]);if(!a&&i>t.alternation)for(var n=t.alternation;n<i;n++)if(e.locator[n]!==t.locator[n]){i=n,a=!0;break;}if(a){e.mloc=e.mloc||{};var r=e.locator[i];if(void 0!==r){if("string"==typeof r&&(r=r.split(",")[0]),void 0===e.mloc[r]&&(e.mloc[r]=e.locator.slice()),void 0!==t){for(var o in t.mloc)"string"==typeof o&&(o=o.split(",")[0]),void 0===e.mloc[o]&&(e.mloc[o]=t.mloc[o]);e.locator[i]=Object.keys(e.mloc).join(",");}return!0;}e.alternation=void 0;}return!1;}function w(e,t){if(e.locator.length!==t.locator.length)return!1;for(var i=e.alternation+1;i<e.locator.length;i++)if(e.locator[i]!==t.locator[i])return!1;return!0;}if(h>e+u._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+l.mask;if(h===e&&void 0===r.matches){if(v.push({match:r,locator:s.reverse(),cd:k,mloc:{}}),!r.optionality||void 0!==d||!(u.definitions&&u.definitions[r.nativeDef]&&u.definitions[r.nativeDef].optional||n.default.prototype.definitions[r.nativeDef]&&n.default.prototype.definitions[r.nativeDef].optional))return!0;g=!0,h=e;}else if(void 0!==r.matches){if(r.isGroup&&d!==r)return function(){if(r=c(t.matches[t.matches.indexOf(r)+1],s,d))return!0;}();if(r.isOptional)return function(){var t=r,n=v.length;if(r=y(r,i,s,d),v.length>0){if(v.forEach(function(e,t){t>=n&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1);}),a=v[v.length-1].match,void 0!==d||!m(a,t))return r;g=!0,h=e;}}();if(r.isAlternator)return function(){o.hasAlternator=!0;var a,n,m,k=r,y=[],b=v.slice(),S=s.length,M=!1,_=i.length>0?i.shift():-1;if(-1===_||"string"==typeof _){var O,T=h,E=i.slice(),j=[];if("string"==typeof _)j=_.split(",");else for(O=0;O<k.matches.length;O++)j.push(O.toString());if(void 0!==l.excludes[e]){for(var A=j.slice(),D=0,B=l.excludes[e].length;D<B;D++){var C=l.excludes[e][D].toString().split(":");s.length==C[1]&&j.splice(j.indexOf(C[0]),1);}0===j.length&&(delete l.excludes[e],j=A);}(!0===u.keepStatic||isFinite(parseInt(u.keepStatic))&&T>=u.keepStatic)&&(j=j.slice(0,1));for(var R=0;R<j.length;R++){O=parseInt(j[R]),v=[],i="string"==typeof _&&x(h,O,S)||E.slice();var F=k.matches[O];if(F&&c(F,[O].concat(s),d))r=!0;else if(0===R&&(M=!0),F&&F.matches&&F.matches.length>k.matches[0].matches.length)break;a=v.slice(),h=T,v=[];for(var L=0;L<a.length;L++){var I=a[L],V=!1;I.match.jit=I.match.jit||M,I.alternation=I.alternation||S,P(I);for(var N=0;N<y.length;N++){var G=y[N];if("string"!=typeof _||void 0!==I.alternation&&j.includes(I.locator[I.alternation].toString())){if(I.match.nativeDef===G.match.nativeDef){V=!0,P(G,I);break;}if(f(I,G,u)){P(I,G)&&(V=!0,y.splice(y.indexOf(G),0,I));break;}if(f(G,I,u)){P(G,I);break;}if(m=G,!0===(n=I).match.static&&!0!==m.match.static&&m.match.fn.test(n.match.def,l,e,!1,u,!1)){w(I,G)||void 0!==p.inputmask.userOptions.keepStatic?P(I,G)&&(V=!0,y.splice(y.indexOf(G),0,I)):u.keepStatic=!0;break;}}}V||y.push(I);}}v=b.concat(y),h=e,g=v.length>0,r=y.length>0,i=E.slice();}else r=c(k.matches[_]||t.matches[_],[_].concat(s),d);if(r)return!0;}();if(r.isQuantifier&&d!==t.matches[t.matches.indexOf(r)-1])return function(){for(var n=r,o=!1,f=i.length>0?i.shift():0;f<(isNaN(n.quantifier.max)?f+1:n.quantifier.max)&&h<=e;f++){var p=t.matches[t.matches.indexOf(n)-1];if(r=c(p,[f].concat(s),p)){if(v.forEach(function(t,i){(a=b(p,t.match)?t.match:v[v.length-1].match).optionalQuantifier=f>=n.quantifier.min,a.jit=(f+1)*(p.matches.indexOf(a)+1)>n.quantifier.jit,a.optionalQuantifier&&m(a,p)&&(g=!0,h=e,u.greedy&&null==l.validPositions[e-1]&&f>n.quantifier.min&&-1!=["*","+"].indexOf(n.quantifier.max)&&(v.pop(),k=void 0),o=!0,r=!1),!o&&a.jit&&(l.jitOffset[e]=p.matches.length-p.matches.indexOf(a));}),o)break;return!0;}}}();if(r=y(r,i,s,d))return!0;}else h++;}for(var d=i.length>0?i.shift():0;d<t.matches.length;d++)if(!0!==t.matches[d].isQuantifier){var m=c(t.matches[d],[d].concat(r),s);if(m&&h===e)return m;if(h>e)break;}}function b(e,t){var i=-1!=e.matches.indexOf(t);return i||e.matches.forEach(function(e,a){void 0===e.matches||i||(i=b(e,t));}),i;}if(e>-1){if(void 0===t){for(var x,P=e-1;void 0===(x=l.validPositions[P]||l.tests[P])&&P>-1;)P--;void 0!==x&&P>-1&&(m=function(e,t){var i,a=[];return Array.isArray(t)||(t=[t]),t.length>0&&(void 0===t[0].alternation||!0===u.keepStatic?0===(a=c.call(o,e,t.slice()).locator.slice()).length&&(a=t[0].locator.slice()):t.forEach(function(e){""!==e.def&&(0===a.length?(i=e.alternation,a=e.locator.slice()):e.locator[i]&&-1===a[i].toString().indexOf(e.locator[i])&&(a[i]+=","+e.locator[i]));})),a;}(P,x),k=m.join(""),h=P);}if(l.tests[e]&&l.tests[e][0].cd===k)return l.tests[e];for(var w=m.shift();w<d.length;w++){if(y(d[w],m,[w])&&h===e||h>e)break;}}return(0===v.length||g)&&v.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:k}),void 0!==t&&l.tests[e]?r=s.extend(!0,[],v):(l.tests[e]=s.extend(!0,[],v),r=l.tests[e]),v.forEach(function(e){e.match.optionality=e.match.defOptionality||!1;}),r;}},7215:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=s,t.checkAlternationMatch=function(e,t,i){for(var a,n=this.opts.greedy?t:t.slice(0,1),r=!1,o=void 0!==i?i.split(","):[],s=0;s<o.length;s++)-1!==(a=e.indexOf(o[s]))&&e.splice(a,1);for(var l=0;l<e.length;l++)if(n.includes(e[l])){r=!0;break;}return r;},t.handleRemove=function(e,t,i,o,l){var c=this,u=this.maskset,f=this.opts;if((f.numericInput||c.isRTL)&&(t===n.keys.Backspace?t=n.keys.Delete:t===n.keys.Delete&&(t=n.keys.Backspace),c.isRTL)){var p=i.end;i.end=i.begin,i.begin=p;}var d,h=r.getLastValidPosition.call(c,void 0,!0);i.end>=r.getBuffer.call(c).length&&h>=i.end&&(i.end=h+1);t===n.keys.Backspace?i.end-i.begin<1&&(i.begin=r.seekPrevious.call(c,i.begin)):t===n.keys.Delete&&i.begin===i.end&&(i.end=r.isMask.call(c,i.end,!0,!0)?i.end+1:r.seekNext.call(c,i.end)+1);if(!1!==(d=m.call(c,i))){if(!0!==o&&!1!==f.keepStatic||null!==f.regex&&-1!==a.getTest.call(c,i.begin).match.def.indexOf("|")){var v=s.call(c,!0);if(v){var g=void 0!==v.caret?v.caret:v.pos?r.seekNext.call(c,v.pos.begin?v.pos.begin:v.pos):r.getLastValidPosition.call(c,-1,!0);(t!==n.keys.Delete||i.begin>g)&&i.begin;}}!0!==o&&(u.p=t===n.keys.Delete?i.begin+d:i.begin,u.p=r.determineNewCaretPosition.call(c,{begin:u.p,end:u.p},!1,!1===f.insertMode&&t===n.keys.Backspace?"none":void 0).begin);}},t.isComplete=c,t.isSelection=u,t.isValid=f,t.refreshFromBuffer=d,t.revalidateMask=m;var a=i(4713),n=i(2839),r=i(8711),o=i(6030);function s(e,t,i,n,o,l){var c,u,p,d,h,m,v,g,k,y,b,x=this,P=this.dependencyLib,w=this.opts,S=x.maskset,M=P.extend(!0,[],S.validPositions),_=P.extend(!0,{},S.tests),O=!1,T=!1,E=void 0!==o?o:r.getLastValidPosition.call(x);if(l&&(y=l.begin,b=l.end,l.begin>l.end&&(y=l.end,b=l.begin)),-1===E&&void 0===o)c=0,u=(d=a.getTest.call(x,c)).alternation;else for(;E>=0;E--)if((p=S.validPositions[E])&&void 0!==p.alternation){if(E<=(e||0)&&d&&d.locator[p.alternation]!==p.locator[p.alternation])break;c=E,u=S.validPositions[c].alternation,d=p;}if(void 0!==u){v=parseInt(c),S.excludes[v]=S.excludes[v]||[],!0!==e&&S.excludes[v].push((0,a.getDecisionTaker)(d)+":"+d.alternation);var j=[],A=-1;for(h=v;h<r.getLastValidPosition.call(x,void 0,!0)+1;h++)-1===A&&e<=h&&void 0!==t&&(j.push(t),A=j.length-1),(m=S.validPositions[h])&&!0!==m.generatedInput&&(void 0===l||h<y||h>=b)&&j.push(m.input),delete S.validPositions[h];for(-1===A&&void 0!==t&&(j.push(t),A=j.length-1);void 0!==S.excludes[v]&&S.excludes[v].length<10;){for(S.tests={},r.resetMaskSet.call(x,!0),O=!0,h=0;h<j.length&&(g=O.caret||r.getLastValidPosition.call(x,void 0,!0)+1,k=j[h],O=f.call(x,g,k,!1,n,!0));h++)h===A&&(T=O),1==e&&O&&(T={caretPos:h});if(O)break;if(r.resetMaskSet.call(x),d=a.getTest.call(x,v),S.validPositions=P.extend(!0,[],M),S.tests=P.extend(!0,{},_),!S.excludes[v]){T=s.call(x,e,t,i,n,v-1,l);break;}var D=(0,a.getDecisionTaker)(d);if(-1!==S.excludes[v].indexOf(D+":"+d.alternation)){T=s.call(x,e,t,i,n,v-1,l);break;}for(S.excludes[v].push(D+":"+d.alternation),h=v;h<r.getLastValidPosition.call(x,void 0,!0)+1;h++)delete S.validPositions[h];}}return T&&!1===w.keepStatic||delete S.excludes[v],T;}function l(e,t,i){var a=this.opts,r=this.maskset;switch(a.casing||t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var o=r.validPositions[i-1];e=0===i||o&&o.input===String.fromCharCode(n.keyCode.Space)?e.toUpperCase():e.toLowerCase();break;default:if("function"==typeof a.casing){var s=Array.prototype.slice.call(arguments);s.push(r.validPositions),e=a.casing.apply(this,s);}}return e;}function c(e){var t=this,i=this.opts,n=this.maskset;if("function"==typeof i.isComplete)return i.isComplete(e,i);if("*"!==i.repeat){var o=!1,s=r.determineLastRequiredPosition.call(t,!0),l=r.seekPrevious.call(t,s.l);if(void 0===s.def||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){o=!0;for(var c=0;c<=l;c++){var u=a.getTestTemplate.call(t,c).match;if(!0!==u.static&&void 0===n.validPositions[c]&&!0!==u.optionality&&!0!==u.optionalQuantifier||!0===u.static&&e[c]!==a.getPlaceholder.call(t,c,u)){o=!1;break;}}}return o;}}function u(e){var t=this.opts.insertMode?0:1;return this.isRTL?e.begin-e.end>t:e.end-e.begin>t;}function f(e,t,i,n,o,p,v){var g=this,k=this.dependencyLib,y=this.opts,b=g.maskset;i=!0===i;var x=e;function P(e){if(void 0!==e){if(void 0!==e.remove&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort(function(e,t){return g.isRTL?e.pos-t.pos:t.pos-e.pos;}).forEach(function(e){m.call(g,{begin:e,end:e+1});}),e.remove=void 0),void 0!==e.insert&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort(function(e,t){return g.isRTL?t.pos-e.pos:e.pos-t.pos;}).forEach(function(e){""!==e.c&&f.call(g,e.pos,e.c,void 0===e.strict||e.strict,void 0!==e.fromIsValid?e.fromIsValid:n);}),e.insert=void 0),e.refreshFromBuffer&&e.buffer){var t=e.refreshFromBuffer;d.call(g,!0===t?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0;}void 0!==e.rewritePosition&&(x=e.rewritePosition,e=!0);}return e;}function w(t,i,o){var s=!1;return a.getTests.call(g,t).every(function(c,f){var p=c.match;if(r.getBuffer.call(g,!0),!1!==(s=(!p.jit||void 0!==b.validPositions[r.seekPrevious.call(g,t)])&&(null!=p.fn?p.fn.test(i,b,t,o,y,u.call(g,e)):(i===p.def||i===y.skipOptionalPartCharacter)&&""!==p.def&&{c:a.getPlaceholder.call(g,t,p,!0)||p.def,pos:t}))){var d=void 0!==s.c?s.c:i,h=t;return d=d===y.skipOptionalPartCharacter&&!0===p.static?a.getPlaceholder.call(g,t,p,!0)||p.def:d,!0!==(s=P(s))&&void 0!==s.pos&&s.pos!==t&&(h=s.pos),!0!==s&&void 0===s.pos&&void 0===s.c?!1:(!1===m.call(g,e,k.extend({},c,{input:l.call(g,d,p,h)}),n,h)&&(s=!1),!1);}return!0;}),s;}void 0!==e.begin&&(x=g.isRTL?e.end:e.begin);var S=!0,M=k.extend(!0,{},b.validPositions);if(!1===y.keepStatic&&void 0!==b.excludes[x]&&!0!==o&&!0!==n)for(var _=x;_<(g.isRTL?e.begin:e.end);_++)void 0!==b.excludes[_]&&(b.excludes[_]=void 0,delete b.tests[_]);if("function"==typeof y.preValidation&&!0!==n&&!0!==p&&(S=P(S=y.preValidation.call(g,r.getBuffer.call(g),x,t,u.call(g,e),y,b,e,i||o))),!0===S){if(S=w(x,t,i),(!i||!0===n)&&!1===S&&!0!==p){var O=b.validPositions[x];if(!O||!0!==O.match.static||O.match.def!==t&&t!==y.skipOptionalPartCharacter){if(y.insertMode||void 0===b.validPositions[r.seekNext.call(g,x)]||e.end>x){var T=!1;if(b.jitOffset[x]&&void 0===b.validPositions[r.seekNext.call(g,x)]&&!1!==(S=f.call(g,x+b.jitOffset[x],t,!0,!0))&&(!0!==o&&(S.caret=x),T=!0),e.end>x&&(b.validPositions[x]=void 0),!T&&!r.isMask.call(g,x,y.keepStatic&&0===x))for(var E=x+1,j=r.seekNext.call(g,x,!1,0!==x);E<=j;E++)if(!1!==(S=w(E,t,i))){S=h.call(g,x,void 0!==S.pos?S.pos:E)||S,x=E;break;}}}else S={caret:r.seekNext.call(g,x)};}g.hasAlternator&&!0!==o&&!i&&(!1===S&&y.keepStatic&&(c.call(g,r.getBuffer.call(g))||0===x)?S=s.call(g,x,t,i,n,void 0,e):(u.call(g,e)&&b.tests[x]&&b.tests[x].length>1&&y.keepStatic||1==S&&!0!==y.numericInput&&b.tests[x]&&b.tests[x].length>1&&r.getLastValidPosition.call(g,void 0,!0)>x)&&(S=s.call(g,!0))),!0===S&&(S={pos:x});}if("function"==typeof y.postValidation&&!0!==n&&!0!==p){var A=y.postValidation.call(g,r.getBuffer.call(g,!0),void 0!==e.begin?g.isRTL?e.end:e.begin:e,t,S,y,b,i,v);void 0!==A&&(S=!0===A?S:A);}S&&void 0===S.pos&&(S.pos=x),!1===S||!0===p?(r.resetMaskSet.call(g,!0),b.validPositions=k.extend(!0,[],M)):h.call(g,void 0,x,!0);var D=P(S);void 0!==g.maxLength&&r.getBuffer.call(g).length>g.maxLength&&!n&&(r.resetMaskSet.call(g,!0),b.validPositions=k.extend(!0,[],M),D=!1);return D;}function p(e,t,i){for(var n=this.maskset,r=!1,o=a.getTests.call(this,e),s=0;s<o.length;s++){if(o[s].match&&(o[s].match.nativeDef===t.match[i.shiftPositions?"def":"nativeDef"]&&(!i.shiftPositions||!t.match.static)||o[s].match.nativeDef===t.match.nativeDef||i.regex&&!o[s].match.static&&o[s].match.fn.test(t.input,n,e,!1,i))){r=!0;break;}if(o[s].match&&o[s].match.def===t.match.nativeDef){r=void 0;break;}}return!1===r&&void 0!==n.jitOffset[e]&&(r=p.call(this,e+n.jitOffset[e],t,i)),r;}function d(e,t,i){var a,n,s=this,l=this.maskset,c=this.opts,u=this.dependencyLib,f=c.skipOptionalPartCharacter,p=s.isRTL?i.slice().reverse():i;if(c.skipOptionalPartCharacter="",!0===e)r.resetMaskSet.call(s),l.tests={},e=0,t=i.length,n=r.determineNewCaretPosition.call(s,{begin:0,end:0},!1).begin;else{for(a=e;a<t;a++)delete l.validPositions[a];n=e;}var d=new u.Event("keypress");for(a=e;a<t;a++){d.key=p[a].toString(),s.ignorable=!1;var h=o.EventHandlers.keypressEvent.call(s,d,!0,!1,!1,n);!1!==h&&void 0!==h&&(n=h.forwardPosition);}c.skipOptionalPartCharacter=f;}function h(e,t,i){var n=this,o=this.maskset,s=this.dependencyLib;if(void 0===e)for(e=t-1;e>0&&!o.validPositions[e];e--);for(var l=e;l<t;l++){if(void 0===o.validPositions[l]&&!r.isMask.call(n,l,!1))if(0==l?a.getTest.call(n,l):o.validPositions[l-1]){var c=a.getTests.call(n,l).slice();""===c[c.length-1].match.def&&c.pop();var u,p=a.determineTestTemplate.call(n,l,c);if(p&&(!0!==p.match.jit||"master"===p.match.newBlockMarker&&(u=o.validPositions[l+1])&&!0===u.match.optionalQuantifier)&&((p=s.extend({},p,{input:a.getPlaceholder.call(n,l,p.match,!0)||p.match.def})).generatedInput=!0,m.call(n,l,p,!0),!0!==i)){var d=o.validPositions[t].input;return o.validPositions[t]=void 0,f.call(n,t,d,!0,!0);}}}}function m(e,t,i,n){var o=this,s=this.maskset,l=this.opts,c=this.dependencyLib;function u(e,t,i){var a=t[e];if(void 0!==a&&!0===a.match.static&&!0!==a.match.optionality&&(void 0===t[0]||void 0===t[0].alternation)){var n=i.begin<=e-1?t[e-1]&&!0===t[e-1].match.static&&t[e-1]:t[e-1],r=i.end>e+1?t[e+1]&&!0===t[e+1].match.static&&t[e+1]:t[e+1];return n&&r;}return!1;}var d=0,h=void 0!==e.begin?e.begin:e,m=void 0!==e.end?e.end:e,v=!0;if(e.begin>e.end&&(h=e.end,m=e.begin),n=void 0!==n?n:h,void 0===i&&(h!==m||l.insertMode&&void 0!==s.validPositions[n]||void 0===t||t.match.optionalQuantifier||t.match.optionality)){var g,k=c.extend(!0,{},s.validPositions),y=r.getLastValidPosition.call(o,void 0,!0);for(s.p=h,g=y;g>=h;g--)delete s.validPositions[g],void 0===t&&delete s.tests[g+1];var b,x,P=n,w=P;for(t&&(s.validPositions[n]=c.extend(!0,{},t),w++,P++),g=t?m:m-1;g<=y;g++){if(void 0!==(b=k[g])&&!0!==b.generatedInput&&(g>=m||g>=h&&u(g,k,{begin:h,end:m}))){for(;""!==a.getTest.call(o,w).match.def;){if(!1!==(x=p.call(o,w,b,l))||"+"===b.match.def){"+"===b.match.def&&r.getBuffer.call(o,!0);var S=f.call(o,w,b.input,"+"!==b.match.def,!0);if(v=!1!==S,P=(S.pos||w)+1,!v&&x)break;}else v=!1;if(v){void 0===t&&b.match.static&&g===e.begin&&d++;break;}if(!v&&r.getBuffer.call(o),w>s.maskLength)break;w++;}""==a.getTest.call(o,w).match.def&&(v=!1),w=P;}if(!v)break;}if(!v)return s.validPositions=c.extend(!0,[],k),r.resetMaskSet.call(o,!0),!1;}else t&&a.getTest.call(o,n).match.cd===t.match.cd&&(s.validPositions[n]=c.extend(!0,{},t));return r.resetMaskSet.call(o,!0),d;}},7957:function(t){t.exports=e;}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,a),r.exports;}var n={};return function(){var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,i=(t=a(3046))&&t.__esModule?t:{default:t};a(443);var r=i.default;e.default=r;}(),n;}();});/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 JГ¶rn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0);}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0;}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1);})),i);},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this);}),e;},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e);}),i;},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e];}),u;}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o);}return o;}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val());},filled:function(e){return!!t.trim(""+t(e).val());},unchecked:function(e){return!t(e).prop("checked");}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init();},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i);}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i;});}),e);},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide());},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t);},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t);},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode);},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s);},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s);}},setDefaults:function(e){t.extend(t.validator.defaults,e);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Пожалуйста введите корректный почтовый адрес.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e);}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e;});});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i);}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid();},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid();},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i;},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e);});}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue");},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(t){var e=0;for(var i in t)e++;return e;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return 0===this.size();},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name;}).length&&e;},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0);});},clean:function(e){return t(e)[0];},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext);},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([]);},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers);},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t);},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s;},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue;}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1;}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o;}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0);},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase());},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e]);},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0;},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>");},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s;},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t;},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message);}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return t(this.errorList).map(function(){return this.element;});},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s);},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i;});},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name);},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t;},checkable:function(t){return /radio|checkbox/i.test(t.type);},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']");},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length;}return e.length;},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0;},dependTypes:{"boolean":function(t){return t;},string:function(e,i){return!!t(e,i.form).length;},"function":function(t,e){return t(e);}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch";},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0);},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1);},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")});}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e);},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this]);}),i;},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0);}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i;},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r;},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i;},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i);}n?e[s]=void 0!==r.param?r.param:!0:delete e[s];}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r;}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]));}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]));}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e;},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0;}),e=i;}return e;},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e));},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0;}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0;},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t);},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t);},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t));},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t);},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r;}return 0===i%10;},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s;},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r;},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r;},min:function(t,e,i){return this.optional(e)||t>=i;},max:function(t,e,i){return this.optional(e)||i>=t;},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t;},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid();}),e===r.val();},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors();}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o);}r.valid=a,n.stopRequest(i,a);}},s)),"pending";}}}),t.format=t.validator.format;})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s);});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments);};}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0;});}});}(jQuery);/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#dt/jszip-2.5.0/dt-1.13.3/b-2.3.5/b-html5-2.3.5/r-2.4.0
 *
 * Included libraries:
 *   JSZip 2.5.0, DataTables 1.13.3, Buttons 2.3.5, HTML5 export 2.3.5, Responsive 2.4.0
 */ /*!

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/!function(a){if("object"==typeof exports&&"undefined"!="object")module.exports=a();else if("function"==typeof define&&__webpack_require__.amdO)define([],a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof __webpack_require__.g?b=__webpack_require__.g:"undefined"!=typeof self&&(b=self),b.JSZip=a();}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i=undefined;if(!h&&i)return require(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'");}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a);},j,j.exports,a,b,c,d);}return c[g].exports;}for(var f=undefined,g=0;g<d.length;g++)e(d[g]);return e;}({1:[function(a,b,c){"use strict";var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(a){for(var b,c,e,f,g,h,i,j="",k=0;k<a.length;)b=a.charCodeAt(k++),c=a.charCodeAt(k++),e=a.charCodeAt(k++),f=b>>2,g=(3&b)<<4|c>>4,h=(15&c)<<2|e>>6,i=63&e,isNaN(c)?h=i=64:isNaN(e)&&(i=64),j=j+d.charAt(f)+d.charAt(g)+d.charAt(h)+d.charAt(i);return j;},c.decode=function(a){var b,c,e,f,g,h,i,j="",k=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");k<a.length;)f=d.indexOf(a.charAt(k++)),g=d.indexOf(a.charAt(k++)),h=d.indexOf(a.charAt(k++)),i=d.indexOf(a.charAt(k++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,j+=String.fromCharCode(b),64!=h&&(j+=String.fromCharCode(c)),64!=i&&(j+=String.fromCharCode(e));return j;};},{}],2:[function(a,b){"use strict";function c(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null;}c.prototype={getContent:function(){return null;},getCompressedContent:function(){return null;}},b.exports=c;},{}],3:[function(a,b,c){"use strict";c.STORE={magic:"\x00\x00",compress:function(a){return a;},uncompress:function(a){return a;},compressInputType:null,uncompressInputType:null},c.DEFLATE=a("./flate");},{"./flate":8}],4:[function(a,b){"use strict";var c=a("./utils"),d=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];b.exports=function(a,b){if("undefined"==typeof a||!a.length)return 0;var e="string"!==c.getTypeOf(a);"undefined"==typeof b&&(b=0);var f=0,g=0,h=0;b=-1^b;for(var i=0,j=a.length;j>i;i++)h=e?a[i]:a.charCodeAt(i),g=255&(b^h),f=d[g],b=b>>>8^f;return-1^b;};},{"./utils":21}],5:[function(a,b){"use strict";function c(){this.data=null,this.length=0,this.index=0;}var d=a("./utils");c.prototype={checkOffset:function(a){this.checkIndex(this.index+a);},checkIndex:function(a){if(this.length<a||0>a)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?");},setIndex:function(a){this.checkIndex(a),this.index=a;},skip:function(a){this.setIndex(this.index+a);},byteAt:function(){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b>=this.index;b--)c=(c<<8)+this.byteAt(b);return this.index+=a,c;},readString:function(a){return d.transformTo("string",this.readData(a));},readData:function(){},lastIndexOfSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1);}},b.exports=c;},{"./utils":21}],6:[function(a,b,c){"use strict";c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!1,c.date=null,c.compression=null,c.compressionOptions=null,c.comment=null,c.unixPermissions=null,c.dosPermissions=null;},{}],7:[function(a,b,c){"use strict";var d=a("./utils");c.string2binary=function(a){return d.string2binary(a);},c.string2Uint8Array=function(a){return d.transformTo("uint8array",a);},c.uint8Array2String=function(a){return d.transformTo("string",a);},c.string2Blob=function(a){var b=d.transformTo("arraybuffer",a);return d.arrayBuffer2Blob(b);},c.arrayBuffer2Blob=function(a){return d.arrayBuffer2Blob(a);},c.transformTo=function(a,b){return d.transformTo(a,b);},c.getTypeOf=function(a){return d.getTypeOf(a);},c.checkSupport=function(a){return d.checkSupport(a);},c.MAX_VALUE_16BITS=d.MAX_VALUE_16BITS,c.MAX_VALUE_32BITS=d.MAX_VALUE_32BITS,c.pretty=function(a){return d.pretty(a);},c.findCompression=function(a){return d.findCompression(a);},c.isRegExp=function(a){return d.isRegExp(a);};},{"./utils":21}],8:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,e=a("pako");c.uncompressInputType=d?"uint8array":"array",c.compressInputType=d?"uint8array":"array",c.magic="\b\x00",c.compress=function(a,b){return e.deflateRaw(a,{level:b.level||-1});},c.uncompress=function(a){return e.inflateRaw(a);};},{pako:24}],9:[function(a,b){"use strict";function c(a,b){return this instanceof c?(this.files={},this.comment=null,this.root="",a&&this.load(a,b),void(this.clone=function(){var a=new c();for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a;})):new c(a,b);}var d=a("./base64");c.prototype=a("./object"),c.prototype.load=a("./load"),c.support=a("./support"),c.defaults=a("./defaults"),c.utils=a("./deprecatedPublicUtils"),c.base64={encode:function(a){return d.encode(a);},decode:function(a){return d.decode(a);}},c.compressions=a("./compressions"),b.exports=c;},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(a,b){"use strict";var c=a("./base64"),d=a("./zipEntries");b.exports=function(a,b){var e,f,g,h;for(b=b||{},b.base64&&(a=c.decode(a)),f=new d(a,b),e=f.files,g=0;g<e.length;g++)h=e[g],this.file(h.fileName,h.decompressed,{binary:!0,optimizedBinaryString:!0,date:h.date,dir:h.dir,comment:h.fileComment.length?h.fileComment:null,unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions,createFolders:b.createFolders});return f.zipComment.length&&(this.comment=f.zipComment),this;};},{"./base64":1,"./zipEntries":22}],11:[function(a,b){(function(a){"use strict";b.exports=function(b,c){return new a(b,c);},b.exports.test=function(b){return a.isBuffer(b);};}).call(this,"undefined"!=typeof Buffer?Buffer:void 0);},{}],12:[function(a,b){"use strict";function c(a){this.data=a,this.length=this.data.length,this.index=0;}var d=a("./uint8ArrayReader");c.prototype=new d(),c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b;},b.exports=c;},{"./uint8ArrayReader":18}],13:[function(a,b){"use strict";var c=a("./support"),d=a("./utils"),e=a("./crc32"),f=a("./signature"),g=a("./defaults"),h=a("./base64"),i=a("./compressions"),j=a("./compressedObject"),k=a("./nodeBuffer"),l=a("./utf8"),m=a("./stringWriter"),n=a("./uint8ArrayWriter"),o=function(a){if(a._data instanceof j&&(a._data=a._data.getContent(),a.options.binary=!0,a.options.base64=!1,"uint8array"===d.getTypeOf(a._data))){var b=a._data;a._data=new Uint8Array(b.length),0!==b.length&&a._data.set(b,0);}return a._data;},p=function(a){var b=o(a),e=d.getTypeOf(b);return"string"===e?!a.options.binary&&c.nodebuffer?k(b,"utf-8"):a.asBinary():b;},q=function(a){var b=o(this);return null===b||"undefined"==typeof b?"":(this.options.base64&&(b=h.decode(b)),b=a&&this.options.binary?D.utf8decode(b):d.transformTo("string",b),a||this.options.binary||(b=d.transformTo("string",D.utf8encode(b))),b);},r=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=b,this.options=c,this._initialMetadata={dir:c.dir,date:c.date};};r.prototype={asText:function(){return q.call(this,!0);},asBinary:function(){return q.call(this,!1);},asNodeBuffer:function(){var a=p(this);return d.transformTo("nodebuffer",a);},asUint8Array:function(){var a=p(this);return d.transformTo("uint8array",a);},asArrayBuffer:function(){return this.asUint8Array().buffer;}};var s=function(a,b){var c,d="";for(c=0;b>c;c++)d+=String.fromCharCode(255&a),a>>>=8;return d;},t=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c;},u=function(a){return a=a||{},a.base64!==!0||null!==a.binary&&void 0!==a.binary||(a.binary=!0),a=t(a,g),a.date=a.date||new Date(),null!==a.compression&&(a.compression=a.compression.toUpperCase()),a;},v=function(a,b,c){var e,f=d.getTypeOf(b);if(c=u(c),"string"==typeof c.unixPermissions&&(c.unixPermissions=parseInt(c.unixPermissions,8)),c.unixPermissions&&16384&c.unixPermissions&&(c.dir=!0),c.dosPermissions&&16&c.dosPermissions&&(c.dir=!0),c.dir&&(a=x(a)),c.createFolders&&(e=w(a))&&y.call(this,e,!0),c.dir||null===b||"undefined"==typeof b)c.base64=!1,c.binary=!1,b=null,f=null;else if("string"===f)c.binary&&!c.base64&&c.optimizedBinaryString!==!0&&(b=d.string2binary(b));else{if(c.base64=!1,c.binary=!0,!(f||b instanceof j))throw new Error("The data of '"+a+"' is in an unsupported format !");"arraybuffer"===f&&(b=d.transformTo("uint8array",b));}var g=new r(a,b,c);return this.files[a]=g,g;},w=function(a){"/"==a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):"";},x=function(a){return"/"!=a.slice(-1)&&(a+="/"),a;},y=function(a,b){return b="undefined"!=typeof b?b:!1,a=x(a),this.files[a]||v.call(this,a,null,{dir:!0,createFolders:b}),this.files[a];},z=function(a,b,c){var f,g=new j();return a._data instanceof j?(g.uncompressedSize=a._data.uncompressedSize,g.crc32=a._data.crc32,0===g.uncompressedSize||a.dir?(b=i.STORE,g.compressedContent="",g.crc32=0):a._data.compressionMethod===b.magic?g.compressedContent=a._data.getCompressedContent():(f=a._data.getContent(),g.compressedContent=b.compress(d.transformTo(b.compressInputType,f),c))):(f=p(a),(!f||0===f.length||a.dir)&&(b=i.STORE,f=""),g.uncompressedSize=f.length,g.crc32=e(f),g.compressedContent=b.compress(d.transformTo(b.compressInputType,f),c)),g.compressedSize=g.compressedContent.length,g.compressionMethod=b.magic,g;},A=function(a,b){var c=a;return a||(c=b?16893:33204),(65535&c)<<16;},B=function(a){return 63&(a||0);},C=function(a,b,c,g,h){var i,j,k,m,n=(c.compressedContent,d.transformTo("string",l.utf8encode(b.name))),o=b.comment||"",p=d.transformTo("string",l.utf8encode(o)),q=n.length!==b.name.length,r=p.length!==o.length,t=b.options,u="",v="",w="";k=b._initialMetadata.dir!==b.dir?b.dir:t.dir,m=b._initialMetadata.date!==b.date?b.date:t.date;var x=0,y=0;k&&(x|=16),"UNIX"===h?(y=798,x|=A(b.unixPermissions,k)):(y=20,x|=B(b.dosPermissions,k)),i=m.getHours(),i<<=6,i|=m.getMinutes(),i<<=5,i|=m.getSeconds()/2,j=m.getFullYear()-1980,j<<=4,j|=m.getMonth()+1,j<<=5,j|=m.getDate(),q&&(v=s(1,1)+s(e(n),4)+n,u+="up"+s(v.length,2)+v),r&&(w=s(1,1)+s(this.crc32(p),4)+p,u+="uc"+s(w.length,2)+w);var z="";z+="\n\x00",z+=q||r?"\x00\b":"\x00\x00",z+=c.compressionMethod,z+=s(i,2),z+=s(j,2),z+=s(c.crc32,4),z+=s(c.compressedSize,4),z+=s(c.uncompressedSize,4),z+=s(n.length,2),z+=s(u.length,2);var C=f.LOCAL_FILE_HEADER+z+n+u,D=f.CENTRAL_FILE_HEADER+s(y,2)+z+s(p.length,2)+"\x00\x00\x00\x00"+s(x,4)+s(g,4)+n+u+p;return{fileRecord:C,dirRecord:D,compressedObject:c};},D={load:function(){throw new Error("Load method is not defined. Is the file jszip-load.js included ?");},filter:function(a){var b,c,d,e,f=[];for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],e=new r(d.name,d._data,t(d.options)),c=b.slice(this.root.length,b.length),b.slice(0,this.root.length)===this.root&&a(c,e)&&f.push(e));return f;},file:function(a,b,c){if(1===arguments.length){if(d.isRegExp(a)){var e=a;return this.filter(function(a,b){return!b.dir&&e.test(a);});}return this.filter(function(b,c){return!c.dir&&b===a;})[0]||null;}return a=this.root+a,v.call(this,a,b,c),this;},folder:function(a){if(!a)return this;if(d.isRegExp(a))return this.filter(function(b,c){return c.dir&&a.test(b);});var b=this.root+a,c=y.call(this,b),e=this.clone();return e.root=c.name,e;},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!=a.slice(-1)&&(a+="/"),b=this.files[a]),b&&!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a;}),d=0;d<c.length;d++)delete this.files[c[d].name];return this;},generate:function(a){a=t(a||{},{base64:!0,compression:"STORE",compressionOptions:null,type:"base64",platform:"DOS",comment:null,mimeType:"application/zip"}),d.checkSupport(a.type),("darwin"===a.platform||"freebsd"===a.platform||"linux"===a.platform||"sunos"===a.platform)&&(a.platform="UNIX"),"win32"===a.platform&&(a.platform="DOS");var b,c,e=[],g=0,j=0,k=d.transformTo("string",this.utf8encode(a.comment||this.comment||""));for(var l in this.files)if(this.files.hasOwnProperty(l)){var o=this.files[l],p=o.options.compression||a.compression.toUpperCase(),q=i[p];if(!q)throw new Error(p+" is not a valid compression method !");var r=o.options.compressionOptions||a.compressionOptions||{},u=z.call(this,o,q,r),v=C.call(this,l,o,u,g,a.platform);g+=v.fileRecord.length+u.compressedSize,j+=v.dirRecord.length,e.push(v);}var w="";w=f.CENTRAL_DIRECTORY_END+"\x00\x00\x00\x00"+s(e.length,2)+s(e.length,2)+s(j,4)+s(g,4)+s(k.length,2)+k;var x=a.type.toLowerCase();for(b="uint8array"===x||"arraybuffer"===x||"blob"===x||"nodebuffer"===x?new n(g+j+w.length):new m(g+j+w.length),c=0;c<e.length;c++)b.append(e[c].fileRecord),b.append(e[c].compressedObject.compressedContent);for(c=0;c<e.length;c++)b.append(e[c].dirRecord);b.append(w);var y=b.finalize();switch(a.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return d.transformTo(a.type.toLowerCase(),y);case"blob":return d.arrayBuffer2Blob(d.transformTo("arraybuffer",y),a.mimeType);case"base64":return a.base64?h.encode(y):y;default:return y;}},crc32:function(a,b){return e(a,b);},utf8encode:function(a){return d.transformTo("string",l.utf8encode(a));},utf8decode:function(a){return l.utf8decode(a);}};b.exports=D;},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(a,b,c){"use strict";c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\b";},{}],15:[function(a,b){"use strict";function c(a,b){this.data=a,b||(this.data=e.string2binary(this.data)),this.length=this.data.length,this.index=0;}var d=a("./dataReader"),e=a("./utils");c.prototype=new d(),c.prototype.byteAt=function(a){return this.data.charCodeAt(a);},c.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a);},c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b;},b.exports=c;},{"./dataReader":5,"./utils":21}],16:[function(a,b){"use strict";var c=a("./utils"),d=function(){this.data=[];};d.prototype={append:function(a){a=c.transformTo("string",a),this.data.push(a);},finalize:function(){return this.data.join("");}},b.exports=d;},{"./utils":21}],17:[function(a,b,c){(function(a){"use strict";if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,c.nodebuffer="undefined"!=typeof a,c.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)c.blob=!1;else{var b=new ArrayBuffer(0);try{c.blob=0===new Blob([b],{type:"application/zip"}).size;}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e();f.append(b),c.blob=0===f.getBlob("application/zip").size;}catch(d){c.blob=!1;}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0);},{}],18:[function(a,b){"use strict";function c(a){a&&(this.data=a,this.length=this.data.length,this.index=0);}var d=a("./dataReader");c.prototype=new d(),c.prototype.byteAt=function(a){return this.data[a];},c.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f>=0;--f)if(this.data[f]===b&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===e)return f;return-1;},c.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.index,this.index+a);return this.index+=a,b;},b.exports=c;},{"./dataReader":5}],19:[function(a,b){"use strict";var c=a("./utils"),d=function(a){this.data=new Uint8Array(a),this.index=0;};d.prototype={append:function(a){0!==a.length&&(a=c.transformTo("uint8array",a),this.data.set(a,this.index),this.index+=a.length);},finalize:function(){return this.data;}},b.exports=d;},{"./utils":21}],20:[function(a,b,c){"use strict";for(var d=a("./utils"),e=a("./support"),f=a("./nodeBuffer"),g=new Array(256),h=0;256>h;h++)g[h]=h>=252?6:h>=248?5:h>=240?4:h>=224?3:h>=192?2:1;g[254]=g[254]=1;var i=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=e.uint8array?new Uint8Array(i):new Array(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b;},j=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+g[a[c]]>b?c:b;},k=function(a){var b,c,e,f,h=a.length,i=new Array(2*h);for(c=0,b=0;h>b;)if(e=a[b++],128>e)i[c++]=e;else if(f=g[e],f>4)i[c++]=65533,b+=f-1;else{for(e&=2===f?31:3===f?15:7;f>1&&h>b;)e=e<<6|63&a[b++],f--;f>1?i[c++]=65533:65536>e?i[c++]=e:(e-=65536,i[c++]=55296|e>>10&1023,i[c++]=56320|1023&e);}return i.length!==c&&(i.subarray?i=i.subarray(0,c):i.length=c),d.applyFromCharCode(i);};c.utf8encode=function(a){return e.nodebuffer?f(a,"utf-8"):i(a);},c.utf8decode=function(a){if(e.nodebuffer)return d.transformTo("nodebuffer",a).toString("utf-8");a=d.transformTo(e.uint8array?"uint8array":"array",a);for(var b=[],c=0,f=a.length,g=65536;f>c;){var h=j(a,Math.min(c+g,f));b.push(e.uint8array?k(a.subarray(c,h)):k(a.slice(c,h))),c=h;}return b.join("");};},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(a,b,c){"use strict";function d(a){return a;}function e(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b;}function f(a){var b=65536,d=[],e=a.length,f=c.getTypeOf(a),g=0,h=!0;try{switch(f){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0));break;case"nodebuffer":String.fromCharCode.apply(null,j(0));}}catch(i){h=!1;}if(!h){for(var k="",l=0;l<a.length;l++)k+=String.fromCharCode(a[l]);return k;}for(;e>g&&b>1;)try{d.push("array"===f||"nodebuffer"===f?String.fromCharCode.apply(null,a.slice(g,Math.min(g+b,e))):String.fromCharCode.apply(null,a.subarray(g,Math.min(g+b,e)))),g+=b;}catch(i){b=Math.floor(b/2);}return d.join("");}function g(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];return b;}var h=a("./support"),i=a("./compressions"),j=a("./nodeBuffer");c.string2binary=function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(255&a.charCodeAt(c));return b;},c.arrayBuffer2Blob=function(a,b){c.checkSupport("blob"),b=b||"application/zip";try{return new Blob([a],{type:b});}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e();return f.append(a),f.getBlob(b);}catch(d){throw new Error("Bug : can't construct the Blob.");}}},c.applyFromCharCode=f;var k={};k.string={string:d,array:function(a){return e(a,new Array(a.length));},arraybuffer:function(a){return k.string.uint8array(a).buffer;},uint8array:function(a){return e(a,new Uint8Array(a.length));},nodebuffer:function(a){return e(a,j(a.length));}},k.array={string:f,array:d,arraybuffer:function(a){return new Uint8Array(a).buffer;},uint8array:function(a){return new Uint8Array(a);},nodebuffer:function(a){return j(a);}},k.arraybuffer={string:function(a){return f(new Uint8Array(a));},array:function(a){return g(new Uint8Array(a),new Array(a.byteLength));},arraybuffer:d,uint8array:function(a){return new Uint8Array(a);},nodebuffer:function(a){return j(new Uint8Array(a));}},k.uint8array={string:f,array:function(a){return g(a,new Array(a.length));},arraybuffer:function(a){return a.buffer;},uint8array:d,nodebuffer:function(a){return j(a);}},k.nodebuffer={string:f,array:function(a){return g(a,new Array(a.length));},arraybuffer:function(a){return k.nodebuffer.uint8array(a).buffer;},uint8array:function(a){return g(a,new Uint8Array(a.length));},nodebuffer:d},c.transformTo=function(a,b){if(b||(b=""),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=k[d][a](b);return e;},c.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":h.nodebuffer&&j.test(a)?"nodebuffer":h.uint8array&&a instanceof Uint8Array?"uint8array":h.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0;},c.checkSupport=function(a){var b=h[a.toLowerCase()];if(!b)throw new Error(a+" is not supported by this browser");},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d="";for(c=0;c<(a||"").length;c++)b=a.charCodeAt(c),d+="\\x"+(16>b?"0":"")+b.toString(16).toUpperCase();return d;},c.findCompression=function(a){for(var b in i)if(i.hasOwnProperty(b)&&i[b].magic===a)return i[b];return null;},c.isRegExp=function(a){return"[object RegExp]"===Object.prototype.toString.call(a);};},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(a,b){"use strict";function c(a,b){this.files=[],this.loadOptions=b,a&&this.load(a);}var d=a("./stringReader"),e=a("./nodeBufferReader"),f=a("./uint8ArrayReader"),g=a("./utils"),h=a("./signature"),i=a("./zipEntry"),j=a("./support"),k=a("./object");c.prototype={checkSignature:function(a){var b=this.reader.readString(4);if(b!==a)throw new Error("Corrupted zip or bug : unexpected signature ("+g.pretty(b)+", expected "+g.pretty(a)+")");},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=k.utf8decode(this.zipComment);},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;d>e;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readString(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c};},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported");},readLocalFiles:function(){var a,b;for(a=0;a<this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes();},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===h.CENTRAL_FILE_HEADER;)a=new i({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a);},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(-1===a){var b=!0;try{this.reader.setIndex(0),this.checkSignature(h.LOCAL_FILE_HEADER),b=!1;}catch(c){}throw new Error(b?"Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html":"Corrupted zip : can't find end of central directory");}if(this.reader.setIndex(a),this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),-1===a)throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");this.reader.setIndex(a),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral();}},prepareReader:function(a){var b=g.getTypeOf(a);this.reader="string"!==b||j.uint8array?"nodebuffer"===b?new e(a):new f(g.transformTo("uint8array",a)):new d(a,this.loadOptions.optimizedBinaryString);},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles();}},b.exports=c;},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(a,b){"use strict";function c(a,b){this.options=a,this.loadOptions=b;}var d=a("./stringReader"),e=a("./utils"),f=a("./compressedObject"),g=a("./object"),h=0,i=3;c.prototype={isEncrypted:function(){return 1===(1&this.bitFlag);},useUTF8:function(){return 2048===(2048&this.bitFlag);},prepareCompressedContent:function(a,b,c){return function(){var d=a.index;a.setIndex(b);var e=a.readData(c);return a.setIndex(d),e;};},prepareContent:function(a,b,c,d,f){return function(){var a=e.transformTo(d.uncompressInputType,this.getCompressedContent()),b=d.uncompress(a);if(b.length!==f)throw new Error("Bug : uncompressed data size mismatch");return b;};},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readString(this.fileNameLength),a.skip(c),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");if(b=e.findCompression(this.compressionMethod),null===b)throw new Error("Corrupted zip : compression "+e.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")");if(this.decompressed=new f(),this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(a,a.index,this.compressedSize,b),this.decompressed.getContent=this.prepareContent(a,a.index,this.compressedSize,b,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=e.transformTo("string",this.decompressed.getContent()),g.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch");},readCentralPart:function(a){if(this.versionMadeBy=a.readInt(2),this.versionNeeded=a.readInt(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4),this.fileNameLength=a.readInt(2),this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");this.fileName=a.readString(this.fileNameLength),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readString(this.fileCommentLength);},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var a=this.versionMadeBy>>8;this.dir=16&this.externalFileAttributes?!0:!1,a===h&&(this.dosPermissions=63&this.externalFileAttributes),a===i&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileName.slice(-1)||(this.dir=!0);},parseZIP64ExtraField:function(){if(this.extraFields[1]){var a=new d(this.extraFields[1].value);this.uncompressedSize===e.MAX_VALUE_32BITS&&(this.uncompressedSize=a.readInt(8)),this.compressedSize===e.MAX_VALUE_32BITS&&(this.compressedSize=a.readInt(8)),this.localHeaderOffset===e.MAX_VALUE_32BITS&&(this.localHeaderOffset=a.readInt(8)),this.diskNumberStart===e.MAX_VALUE_32BITS&&(this.diskNumberStart=a.readInt(4));}},readExtraFields:function(a){var b,c,d,e=a.index;for(this.extraFields=this.extraFields||{};a.index<e+this.extraFieldsLength;)b=a.readInt(2),c=a.readInt(2),d=a.readString(c),this.extraFields[b]={id:b,length:c,value:d};},handleUTF8:function(){if(this.useUTF8())this.fileName=g.utf8decode(this.fileName),this.fileComment=g.utf8decode(this.fileComment);else{var a=this.findExtraFieldUnicodePath();null!==a&&(this.fileName=a);var b=this.findExtraFieldUnicodeComment();null!==b&&(this.fileComment=b);}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileName)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5));}return null;},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileComment)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5));}return null;}},b.exports=c;},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(a,b){"use strict";var c=a("./lib/utils/common").assign,d=a("./lib/deflate"),e=a("./lib/inflate"),f=a("./lib/zlib/constants"),g={};c(g,d,e,f),b.exports=g;},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(a,b,c){"use strict";function d(a,b){var c=new s(b);if(c.push(a,!0),c.err)throw c.msg;return c.result;}function e(a,b){return b=b||{},b.raw=!0,d(a,b);}function f(a,b){return b=b||{},b.gzip=!0,d(a,b);}var g=a("./zlib/deflate.js"),h=a("./utils/common"),i=a("./utils/strings"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=0,m=4,n=0,o=1,p=-1,q=0,r=8,s=function(a){this.options=h.assign({level:p,method:r,chunkSize:16384,windowBits:15,memLevel:8,strategy:q,to:""},a||{});var b=this.options;b.raw&&b.windowBits>0?b.windowBits=-b.windowBits:b.gzip&&b.windowBits>0&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k(),this.strm.avail_out=0;var c=g.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==n)throw new Error(j[c]);b.header&&g.deflateSetHeader(this.strm,b.header);};s.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?m:l,e.input="string"==typeof a?i.string2buf(a):a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&&(e.output=new h.Buf8(f),e.next_out=0,e.avail_out=f),c=g.deflate(e,d),c!==o&&c!==n)return this.onEnd(c),this.ended=!0,!1;(0===e.avail_out||0===e.avail_in&&d===m)&&this.onData("string"===this.options.to?i.buf2binstring(h.shrinkBuf(e.output,e.next_out)):h.shrinkBuf(e.output,e.next_out));}while((e.avail_in>0||0===e.avail_out)&&c!==o);return d===m?(c=g.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===n):!0;},s.prototype.onData=function(a){this.chunks.push(a);},s.prototype.onEnd=function(a){a===n&&(this.result="string"===this.options.to?this.chunks.join(""):h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg;},c.Deflate=s,c.deflate=d,c.deflateRaw=e,c.gzip=f;},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(a,b,c){"use strict";function d(a,b){var c=new m(b);if(c.push(a,!0),c.err)throw c.msg;return c.result;}function e(a,b){return b=b||{},b.raw=!0,d(a,b);}var f=a("./zlib/inflate.js"),g=a("./utils/common"),h=a("./utils/strings"),i=a("./zlib/constants"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=a("./zlib/gzheader"),m=function(a){this.options=g.assign({chunkSize:16384,windowBits:0,to:""},a||{});var b=this.options;b.raw&&b.windowBits>=0&&b.windowBits<16&&(b.windowBits=-b.windowBits,0===b.windowBits&&(b.windowBits=-15)),!(b.windowBits>=0&&b.windowBits<16)||a&&a.windowBits||(b.windowBits+=32),b.windowBits>15&&b.windowBits<48&&0===(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k(),this.strm.avail_out=0;var c=f.inflateInit2(this.strm,b.windowBits);if(c!==i.Z_OK)throw new Error(j[c]);this.header=new l(),f.inflateGetHeader(this.strm,this.header);};m.prototype.push=function(a,b){var c,d,e,j,k,l=this.strm,m=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?i.Z_FINISH:i.Z_NO_FLUSH,l.input="string"==typeof a?h.binstring2buf(a):a,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&&(l.output=new g.Buf8(m),l.next_out=0,l.avail_out=m),c=f.inflate(l,i.Z_NO_FLUSH),c!==i.Z_STREAM_END&&c!==i.Z_OK)return this.onEnd(c),this.ended=!0,!1;l.next_out&&(0===l.avail_out||c===i.Z_STREAM_END||0===l.avail_in&&d===i.Z_FINISH)&&("string"===this.options.to?(e=h.utf8border(l.output,l.next_out),j=l.next_out-e,k=h.buf2string(l.output,e),l.next_out=j,l.avail_out=m-j,j&&g.arraySet(l.output,l.output,e,j,0),this.onData(k)):this.onData(g.shrinkBuf(l.output,l.next_out)));}while(l.avail_in>0&&c!==i.Z_STREAM_END);return c===i.Z_STREAM_END&&(d=i.Z_FINISH),d===i.Z_FINISH?(c=f.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===i.Z_OK):!0;},m.prototype.onData=function(a){this.chunks.push(a);},m.prototype.onEnd=function(a){a===i.Z_OK&&(this.result="string"===this.options.to?this.chunks.join(""):g.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg;},c.Inflate=m,c.inflate=d,c.inflateRaw=e,c.ungzip=d;},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!=typeof c)throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d]);}}return a;},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a);};var e={arraySet:function(a,b,c,d,e){if(b.subarray&&a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;d>f;f++)a[e+f]=b[c+f];},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;c>b;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;c>b;b++)f=a[b],g.set(f,e),e+=f.length;return g;}},f={arraySet:function(a,b,c,d,e){for(var f=0;d>f;f++)a[e+f]=b[c+f];},flattenChunks:function(a){return[].concat.apply([],a);}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f));},c.setTyped(d);},{}],28:[function(a,b,c){"use strict";function d(a,b){if(65537>b&&(a.subarray&&g||!a.subarray&&f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c="",d=0;b>d;d++)c+=String.fromCharCode(a[d]);return c;}var e=a("./common"),f=!0,g=!0;try{String.fromCharCode.apply(null,[0]);}catch(h){f=!1;}try{String.fromCharCode.apply(null,new Uint8Array(1));}catch(h){g=!1;}for(var i=new e.Buf8(256),j=0;256>j;j++)i[j]=j>=252?6:j>=248?5:j>=240?4:j>=224?3:j>=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=new e.Buf8(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b;},c.buf2binstring=function(a){return d(a,a.length);},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;d>c;c++)b[c]=a.charCodeAt(c);return b;},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;h>c;)if(f=a[c++],128>f)j[e++]=f;else if(g=i[f],g>4)j[e++]=65533,c+=g-1;else{for(f&=2===g?31:3===g?15:7;g>1&&h>c;)f=f<<6|63&a[c++],g--;g>1?j[e++]=65533:65536>f?j[e++]=f:(f-=65536,j[e++]=55296|f>>10&1023,j[e++]=56320|1023&f);}return d(j,e);},c.utf8border=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+i[a[c]]>b?c:b;};},{"./common":27}],29:[function(a,b){"use strict";function c(a,b,c,d){for(var e=65535&a|0,f=a>>>16&65535|0,g=0;0!==c;){g=c>2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521;}return e|f<<16|0;}b.exports=c;},{}],30:[function(a,b){b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};},{}],31:[function(a,b){"use strict";function c(){for(var a,b=[],c=0;256>c;c++){a=c;for(var d=0;8>d;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a;}return b;}function d(a,b,c,d){var f=e,g=d+c;a=-1^a;for(var h=d;g>h;h++)a=a>>>8^f[255&(a^b[h])];return-1^a;}var e=c();b.exports=d;},{}],32:[function(a,b,c){"use strict";function d(a,b){return a.msg=G[b],b;}function e(a){return(a<<1)-(a>4?9:0);}function f(a){for(var b=a.length;--b>=0;)a[b]=0;}function g(a){var b=a.state,c=b.pending;c>a.avail_out&&(c=a.avail_out),0!==c&&(C.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&&(b.pending_out=0));}function h(a,b){D._tr_flush_block(a,a.block_start>=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm);}function i(a,b){a.pending_buf[a.pending++]=b;}function j(a,b){a.pending_buf[a.pending++]=b>>>8&255,a.pending_buf[a.pending++]=255&b;}function k(a,b,c,d){var e=a.avail_in;return e>d&&(e=d),0===e?0:(a.avail_in-=e,C.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=E(a.adler,b,e,c):2===a.state.wrap&&(a.adler=F(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e);}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart>a.w_size-jb?a.strstart-(a.w_size-jb):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ib,n=j[f+g-1],o=j[f+g];a.prev_length>=a.good_match&&(e>>=2),h>a.lookahead&&(h=a.lookahead);do if(c=b,j[c+g]===o&&j[c+g-1]===n&&j[c]===j[f]&&j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&m>f);if(d=ib-(m-f),f=m-ib,d>g){if(a.match_start=b,g=d,d>=h)break;n=j[f+g-1],o=j[f+g];}}while((b=l[b&k])>i&&0!==--e);return g<=a.lookahead?g:a.lookahead;}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart>=g+(g-jb)){C.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d>=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d>=g?d-g:0;while(--c);e+=g;}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert>=hb)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+hb-1])&a.hash_mask,a.prev[f&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert<hb)););}while(a.lookahead<jb&&0!==a.strm.avail_in);}function n(a,b){var c=65535;for(c>a.pending_buf_size-5&&(c=a.pending_buf_size-5);;){if(a.lookahead<=1){if(m(a),0===a.lookahead&&b===H)return sb;if(0===a.lookahead)break;}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart>=d)&&(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return sb;if(a.strstart-a.block_start>=a.w_size-jb&&(h(a,!1),0===a.strm.avail_out))return sb;}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.strstart>a.block_start&&(h(a,!1),0===a.strm.avail_out)?sb:sb;}function o(a,b){for(var c,d;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break;}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c)),a.match_length>=hb){if(d=D._tr_tally(a,a.strstart-a.match_start,a.match_length-hb),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=hb){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++;}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;}else d=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&&(h(a,!1),0===a.strm.avail_out))return sb;}return a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb;}function p(a,b){for(var c,d,e;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break;}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=hb-1,0!==c&&a.prev_length<a.max_lazy_match&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c),a.match_length<=5&&(a.strategy===S||a.match_length===hb&&a.strstart-a.match_start>4096)&&(a.match_length=hb-1)),a.prev_length>=hb&&a.match_length<=a.prev_length){e=a.strstart+a.lookahead-hb,d=D._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-hb),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart<=e&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=hb-1,a.strstart++,d&&(h(a,!1),0===a.strm.avail_out))return sb;}else if(a.match_available){if(d=D._tr_tally(a,0,a.window[a.strstart-1]),d&&h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return sb;}else a.match_available=1,a.strstart++,a.lookahead--;}return a.match_available&&(d=D._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb;}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead<=ib){if(m(a),a.lookahead<=ib&&b===H)return sb;if(0===a.lookahead)break;}if(a.match_length=0,a.lookahead>=hb&&a.strstart>0&&(e=a.strstart-1,d=g[e],d===g[++e]&&d===g[++e]&&d===g[++e])){f=a.strstart+ib;do;while(d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&f>e);a.match_length=ib-(f-e),a.match_length>a.lookahead&&(a.match_length=a.lookahead);}if(a.match_length>=hb?(c=D._tr_tally(a,1,a.match_length-hb),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&&(h(a,!1),0===a.strm.avail_out))return sb;}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb;}function r(a,b){for(var c;;){if(0===a.lookahead&&(m(a),0===a.lookahead)){if(b===H)return sb;break;}if(a.match_length=0,c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&&(h(a,!1),0===a.strm.avail_out))return sb;}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb;}function s(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=B[a.level].max_lazy,a.good_match=B[a.level].good_length,a.nice_match=B[a.level].nice_length,a.max_chain_length=B[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=hb-1,a.match_available=0,a.ins_h=0;}function t(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new C.Buf16(2*fb),this.dyn_dtree=new C.Buf16(2*(2*db+1)),this.bl_tree=new C.Buf16(2*(2*eb+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new C.Buf16(gb+1),this.heap=new C.Buf16(2*cb+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new C.Buf16(2*cb+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0;}function u(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=X,b=a.state,b.pending=0,b.pending_out=0,b.wrap<0&&(b.wrap=-b.wrap),b.status=b.wrap?lb:qb,a.adler=2===b.wrap?0:1,b.last_flush=H,D._tr_init(b),M):d(a,O);}function v(a){var b=u(a);return b===M&&s(a.state),b;}function w(a,b){return a&&a.state?2!==a.state.wrap?O:(a.state.gzhead=b,M):O;}function x(a,b,c,e,f,g){if(!a)return O;var h=1;if(b===R&&(b=6),0>e?(h=0,e=-e):e>15&&(h=2,e-=16),1>f||f>Z||c!==Y||8>e||e>15||0>b||b>9||0>g||g>V)return d(a,O);8===e&&(e=9);var i=new t();return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1<<i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1<<i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+hb-1)/hb),i.window=new C.Buf8(2*i.w_size),i.head=new C.Buf16(i.hash_size),i.prev=new C.Buf16(i.w_size),i.lit_bufsize=1<<f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new C.Buf8(i.pending_buf_size),i.d_buf=i.lit_bufsize>>1,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,v(a);}function y(a,b){return x(a,b,Y,$,_,W);}function z(a,b){var c,h,k,l;if(!a||!a.state||b>L||0>b)return a?d(a,O):O;if(h=a.state,!a.output||!a.input&&0!==a.avail_in||h.status===rb&&b!==K)return d(a,0===a.avail_out?Q:O);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===lb)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&h.gzhead.time),i(h,h.gzhead.time>>8&255),i(h,h.gzhead.time>>16&255),i(h,h.gzhead.time>>24&255),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(i(h,255&h.gzhead.extra.length),i(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(a.adler=F(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=mb):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,wb),h.status=qb);else{var m=Y+(h.w_bits-8<<4)<<8,n=-1;n=h.strategy>=T||h.level<2?0:h.level<6?1:6===h.level?2:3,m|=n<<6,0!==h.strstart&&(m|=kb),m+=31-m%31,h.status=qb,j(h,m),0!==h.strstart&&(j(h,a.adler>>>16),j(h,65535&a.adler)),a.adler=1;}if(h.status===mb)if(h.gzhead.extra){for(k=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=nb);}else h.status=nb;if(h.status===nb)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break;}l=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l);}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.gzindex=0,h.status=ob);}else h.status=ob;if(h.status===ob)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break;}l=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l);}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.status=pb);}else h.status=pb;if(h.status===pb&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&g(a),h.pending+2<=h.pending_buf_size&&(i(h,255&a.adler),i(h,a.adler>>8&255),a.adler=0,h.status=qb)):h.status=qb),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,M;}else if(0===a.avail_in&&e(b)<=e(c)&&b!==K)return d(a,Q);if(h.status===rb&&0!==a.avail_in)return d(a,Q);if(0!==a.avail_in||0!==h.lookahead||b!==H&&h.status!==rb){var o=h.strategy===T?r(h,b):h.strategy===U?q(h,b):B[h.level].func(h,b);if((o===ub||o===vb)&&(h.status=rb),o===sb||o===ub)return 0===a.avail_out&&(h.last_flush=-1),M;if(o===tb&&(b===I?D._tr_align(h):b!==L&&(D._tr_stored_block(h,0,0,!1),b===J&&(f(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,M;}return b!==K?M:h.wrap<=0?N:(2===h.wrap?(i(h,255&a.adler),i(h,a.adler>>8&255),i(h,a.adler>>16&255),i(h,a.adler>>24&255),i(h,255&a.total_in),i(h,a.total_in>>8&255),i(h,a.total_in>>16&255),i(h,a.total_in>>24&255)):(j(h,a.adler>>>16),j(h,65535&a.adler)),g(a),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?M:N);}function A(a){var b;return a&&a.state?(b=a.state.status,b!==lb&&b!==mb&&b!==nb&&b!==ob&&b!==pb&&b!==qb&&b!==rb?d(a,O):(a.state=null,b===qb?d(a,P):M)):O;}var B,C=a("../utils/common"),D=a("./trees"),E=a("./adler32"),F=a("./crc32"),G=a("./messages"),H=0,I=1,J=3,K=4,L=5,M=0,N=1,O=-2,P=-3,Q=-5,R=-1,S=1,T=2,U=3,V=4,W=0,X=2,Y=8,Z=9,$=15,_=8,ab=29,bb=256,cb=bb+1+ab,db=30,eb=19,fb=2*cb+1,gb=15,hb=3,ib=258,jb=ib+hb+1,kb=32,lb=42,mb=69,nb=73,ob=91,pb=103,qb=113,rb=666,sb=1,tb=2,ub=3,vb=4,wb=3,xb=function(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e;};B=[new xb(0,0,0,0,n),new xb(4,4,8,4,o),new xb(4,5,16,8,o),new xb(4,6,32,32,o),new xb(4,4,16,16,p),new xb(8,16,32,32,p),new xb(8,16,128,128,p),new xb(8,32,128,256,p),new xb(32,128,258,1024,p),new xb(32,258,258,4096,p)],c.deflateInit=y,c.deflateInit2=x,c.deflateReset=v,c.deflateResetKeep=u,c.deflateSetHeader=w,c.deflate=z,c.deflateEnd=A,c.deflateInfo="pako deflate (from Nodeca project)";},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(a,b){"use strict";function c(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1;}b.exports=c;},{}],34:[function(a,b){"use strict";var c=30,d=12;b.exports=function(a,b){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;e=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=e.dmax,l=e.wsize,m=e.whave,n=e.wnext,o=e.window,p=e.hold,q=e.bits,r=e.lencode,s=e.distcode,t=(1<<e.lenbits)-1,u=(1<<e.distbits)-1;a:do{15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=r[p&t];b:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,0===w)C[h++]=65535&v;else{if(!(16&w)){if(0===(64&w)){v=r[(65535&v)+(p&(1<<w)-1)];continue b;}if(32&w){e.mode=d;break a;}a.msg="invalid literal/length code",e.mode=c;break a;}x=65535&v,w&=15,w&&(w>q&&(p+=B[f++]<<q,q+=8),x+=p&(1<<w)-1,p>>>=w,q-=w),15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=s[p&u];c:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,!(16&w)){if(0===(64&w)){v=s[(65535&v)+(p&(1<<w)-1)];continue c;}a.msg="invalid distance code",e.mode=c;break a;}if(y=65535&v,w&=15,w>q&&(p+=B[f++]<<q,q+=8,w>q&&(p+=B[f++]<<q,q+=8)),y+=p&(1<<w)-1,y>k){a.msg="invalid distance too far back",e.mode=c;break a;}if(p>>>=w,q-=w,w=h-i,y>w){if(w=y-w,w>m&&e.sane){a.msg="invalid distance too far back",e.mode=c;break a;}if(z=0,A=o,0===n){if(z+=l-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C;}}else if(w>n){if(z+=l+n-w,w-=n,x>w){x-=w;do C[h++]=o[z++];while(--w);if(z=0,x>n){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C;}}}else if(z+=n-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C;}for(;x>2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&&(C[h++]=A[z++],x>1&&(C[h++]=A[z++]));}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x>2);x&&(C[h++]=C[z++],x>1&&(C[h++]=C[z++]));}break;}}break;}}while(g>f&&j>h);x=q>>3,f-=x,q-=x<<3,p&=(1<<q)-1,a.next_in=f,a.next_out=h,a.avail_in=g>f?5+(g-f):5-(f-g),a.avail_out=j>h?257+(j-h):257-(h-j),e.hold=p,e.bits=q;};},{}],35:[function(a,b,c){"use strict";function d(a){return(a>>>24&255)+(a>>>8&65280)+((65280&a)<<8)+((255&a)<<24);}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0;}function f(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg="",b.wrap&&(a.adler=1&b.wrap),b.mode=K,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new r.Buf32(ob),b.distcode=b.distdyn=new r.Buf32(pb),b.sane=1,b.back=-1,C):F;}function g(a){var b;return a&&a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):F;}function h(a,b){var c,d;return a&&a.state?(d=a.state,0>b?(c=0,b=-b):(c=(b>>4)+1,48>b&&(b&=15)),b&&(8>b||b>15)?F:(null!==d.window&&d.wbits!==b&&(d.window=null),d.wrap=c,d.wbits=b,g(a))):F;}function i(a,b){var c,d;return a?(d=new e(),a.state=d,d.window=null,c=h(a,b),c!==C&&(a.state=null),c):F;}function j(a){return i(a,rb);}function k(a){if(sb){var b;for(p=new r.Buf32(512),q=new r.Buf32(32),b=0;144>b;)a.lens[b++]=8;for(;256>b;)a.lens[b++]=9;for(;280>b;)a.lens[b++]=7;for(;288>b;)a.lens[b++]=8;for(v(x,a.lens,0,288,p,0,a.work,{bits:9}),b=0;32>b;)a.lens[b++]=5;v(y,a.lens,0,32,q,0,a.work,{bits:5}),sb=!1;}a.lencode=p,a.lenbits=9,a.distcode=q,a.distbits=5;}function l(a,b,c,d){var e,f=a.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=new r.Buf8(f.wsize)),d>=f.wsize?(r.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e>d&&(e=d),r.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(r.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0;}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab=0,Bb=new r.Buf8(4),Cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&&0!==a.avail_in)return F;c=a.state,c.mode===V&&(c.mode=W),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xb=C;a:for(;;)switch(c.mode){case K:if(0===c.wrap){c.mode=W;break;}for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if(2&c.wrap&&35615===m){c.check=0,Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0),m=0,n=0,c.mode=L;break;}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&m)<<8)+(m>>8))%31){a.msg="incorrect header check",c.mode=lb;break;}if((15&m)!==J){a.msg="unknown compression method",c.mode=lb;break;}if(m>>>=4,n-=4,wb=(15&m)+8,0===c.wbits)c.wbits=wb;else if(wb>c.wbits){a.msg="invalid window size",c.mode=lb;break;}c.dmax=1<<wb,a.adler=c.check=1,c.mode=512&m?T:V,m=0,n=0;break;case L:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if(c.flags=m,(255&c.flags)!==J){a.msg="unknown compression method",c.mode=lb;break;}if(57344&c.flags){a.msg="unknown header flags set",c.mode=lb;break;}c.head&&(c.head.text=m>>8&1),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=M;case M:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}c.head&&(c.head.time=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,Bb[2]=m>>>16&255,Bb[3]=m>>>24&255,c.check=t(c.check,Bb,4,0)),m=0,n=0,c.mode=N;case N:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}c.head&&(c.head.xflags=255&m,c.head.os=m>>8),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=O;case O:if(1024&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}c.length=m,c.head&&(c.head.extra_len=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0;}else c.head&&(c.head.extra=null);c.mode=P;case P:if(1024&c.flags&&(q=c.length,q>i&&(q=i),q&&(c.head&&(wb=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),r.arraySet(c.head.extra,e,g,q,wb)),512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=Q;case Q:if(2048&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.name+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a;}else c.head&&(c.head.name=null);c.length=0,c.mode=R;case R:if(4096&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.comment+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a;}else c.head&&(c.head.comment=null);c.mode=S;case S:if(512&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if(m!==(65535&c.check)){a.msg="header crc mismatch",c.mode=lb;break;}m=0,n=0;}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),a.adler=c.check=0,c.mode=V;break;case T:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}a.adler=c.check=d(m),m=0,n=0,c.mode=U;case U:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,E;a.adler=c.check=1,c.mode=V;case V:if(b===A||b===B)break a;case W:if(c.last){m>>>=7&n,n-=7&n,c.mode=ib;break;}for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}switch(c.last=1&m,m>>>=1,n-=1,3&m){case 0:c.mode=X;break;case 1:if(k(c),c.mode=bb,b===B){m>>>=2,n-=2;break a;}break;case 2:c.mode=$;break;case 3:a.msg="invalid block type",c.mode=lb;}m>>>=2,n-=2;break;case X:for(m>>>=7&n,n-=7&n;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if((65535&m)!==(m>>>16^65535)){a.msg="invalid stored block lengths",c.mode=lb;break;}if(c.length=65535&m,m=0,n=0,c.mode=Y,b===B)break a;case Y:c.mode=Z;case Z:if(q=c.length){if(q>i&&(q=i),q>j&&(q=j),0===q)break a;r.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break;}c.mode=V;break;case $:for(;14>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if(c.nlen=(31&m)+257,m>>>=5,n-=5,c.ndist=(31&m)+1,m>>>=5,n-=5,c.ncode=(15&m)+4,m>>>=4,n-=4,c.nlen>286||c.ndist>30){a.msg="too many length or distance symbols",c.mode=lb;break;}c.have=0,c.mode=_;case _:for(;c.have<c.ncode;){for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}c.lens[Cb[c.have++]]=7&m,m>>>=3,n-=3;}for(;c.have<19;)c.lens[Cb[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,yb={bits:c.lenbits},xb=v(w,c.lens,0,19,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid code lengths set",c.mode=lb;break;}c.have=0,c.mode=ab;case ab:for(;c.have<c.nlen+c.ndist;){for(;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if(16>sb)m>>>=qb,n-=qb,c.lens[c.have++]=sb;else{if(16===sb){for(zb=qb+2;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if(m>>>=qb,n-=qb,0===c.have){a.msg="invalid bit length repeat",c.mode=lb;break;}wb=c.lens[c.have-1],q=3+(3&m),m>>>=2,n-=2;}else if(17===sb){for(zb=qb+3;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}m>>>=qb,n-=qb,wb=0,q=3+(7&m),m>>>=3,n-=3;}else{for(zb=qb+7;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}m>>>=qb,n-=qb,wb=0,q=11+(127&m),m>>>=7,n-=7;}if(c.have+q>c.nlen+c.ndist){a.msg="invalid bit length repeat",c.mode=lb;break;}for(;q--;)c.lens[c.have++]=wb;}}if(c.mode===lb)break;if(0===c.lens[256]){a.msg="invalid code -- missing end-of-block",c.mode=lb;break;}if(c.lenbits=9,yb={bits:c.lenbits},xb=v(x,c.lens,0,c.nlen,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid literal/lengths set",c.mode=lb;break;}if(c.distbits=6,c.distcode=c.distdyn,yb={bits:c.distbits},xb=v(y,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,yb),c.distbits=yb.bits,xb){a.msg="invalid distances set",c.mode=lb;break;}if(c.mode=bb,b===B)break a;case bb:c.mode=cb;case cb:if(i>=6&&j>=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,u(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===V&&(c.back=-1);break;}for(c.back=0;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if(rb&&0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.lencode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}m>>>=tb,n-=tb,c.back+=tb;}if(m>>>=qb,n-=qb,c.back+=qb,c.length=sb,0===rb){c.mode=hb;break;}if(32&rb){c.back=-1,c.mode=V;break;}if(64&rb){a.msg="invalid literal/length code",c.mode=lb;break;}c.extra=15&rb,c.mode=db;case db:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}c.length+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra;}c.was=c.length,c.mode=eb;case eb:for(;Ab=c.distcode[m&(1<<c.distbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if(0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.distcode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}m>>>=tb,n-=tb,c.back+=tb;}if(m>>>=qb,n-=qb,c.back+=qb,64&rb){a.msg="invalid distance code",c.mode=lb;break;}c.offset=sb,c.extra=15&rb,c.mode=fb;case fb:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}c.offset+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra;}if(c.offset>c.dmax){a.msg="invalid distance too far back",c.mode=lb;break;}c.mode=gb;case gb:if(0===j)break a;if(q=p-j,c.offset>q){if(q=c.offset-q,q>c.whave&&c.sane){a.msg="invalid distance too far back",c.mode=lb;break;}q>c.wnext?(q-=c.wnext,ob=c.wsize-q):ob=c.wnext-q,q>c.length&&(q=c.length),pb=c.window;}else pb=f,ob=h-c.offset,q=c.length;q>j&&(q=j),j-=q,c.length-=q;do f[h++]=pb[ob++];while(--q);0===c.length&&(c.mode=cb);break;case hb:if(0===j)break a;f[h++]=c.length,j--,c.mode=cb;break;case ib:if(c.wrap){for(;32>n;){if(0===i)break a;i--,m|=e[g++]<<n,n+=8;}if(p-=j,a.total_out+=p,c.total+=p,p&&(a.adler=c.check=c.flags?t(c.check,f,p,h-p):s(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg="incorrect data check",c.mode=lb;break;}m=0,n=0;}c.mode=jb;case jb:if(c.wrap&&c.flags){for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8;}if(m!==(4294967295&c.total)){a.msg="incorrect length check",c.mode=lb;break;}m=0,n=0;}c.mode=kb;case kb:xb=D;break a;case lb:xb=G;break a;case mb:return H;case nb:default:return F;}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&&c.mode<lb&&(c.mode<ib||b!==z))&&l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=mb,H):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&&p&&(a.adler=c.check=c.flags?t(c.check,f,p,a.next_out-p):s(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===V?128:0)+(c.mode===bb||c.mode===Y?256:0),(0===o&&0===p||b===z)&&xb===C&&(xb=I),xb);}function n(a){if(!a||!a.state)return F;var b=a.state;return b.window&&(b.window=null),a.state=null,C;}function o(a,b){var c;return a&&a.state?(c=a.state,0===(2&c.wrap)?F:(c.head=b,b.done=!1,C)):F;}var p,q,r=a("../utils/common"),s=a("./adler32"),t=a("./crc32"),u=a("./inffast"),v=a("./inftrees"),w=0,x=1,y=2,z=4,A=5,B=6,C=0,D=1,E=2,F=-2,G=-3,H=-4,I=-5,J=8,K=1,L=2,M=3,N=4,O=5,P=6,Q=7,R=8,S=9,T=10,U=11,V=12,W=13,X=14,Y=15,Z=16,$=17,_=18,ab=19,bb=20,cb=21,db=22,eb=23,fb=24,gb=25,hb=26,ib=27,jb=28,kb=29,lb=30,mb=31,nb=32,ob=852,pb=592,qb=15,rb=qb,sb=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateInfo="pako inflate (from Nodeca project)";},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(a,b){"use strict";var c=a("../utils/common"),d=15,e=852,f=592,g=0,h=1,i=2,j=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],k=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,n,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new c.Buf16(d+1),Q=new c.Buf16(d+1),R=null,S=0;for(D=0;d>=D;D++)P[D]=0;for(E=0;o>E;E++)P[b[n+E]]++;for(H=C,G=d;G>=1&&0===P[G];G--);if(H>G&&(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;G>F&&0===P[F];F++);for(F>H&&(H=F),K=1,D=1;d>=D;D++)if(K<<=1,K-=P[D],0>K)return-1;if(K>0&&(a===g||1!==G))return-1;for(Q[1]=0,D=1;d>D;D++)Q[D+1]=Q[D]+P[D];for(E=0;o>E;E++)0!==b[n+E]&&(r[Q[b[n+E]]++]=E);if(a===g?(N=R=r,y=19):a===h?(N=j,O-=257,R=k,S-=257,y=256):(N=l,R=m,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1<<H,w=L-1,a===h&&L>e||a===i&&L>f)return 1;for(var T=0;;){T++,z=D-J,r[E]<y?(A=0,B=r[E]):r[E]>y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1<<D-J,u=1<<I,F=u;do u-=t,p[x+(M>>J)+u]=z<<24|A<<16|B|0;while(0!==u);for(t=1<<D-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[n+r[E]];}if(D>H&&(M&w)!==v){for(0===J&&(J=H),x+=F,I=D-J,K=1<<I;G>I+J&&(K-=P[I+J],!(0>=K));)I++,K<<=1;if(L+=1<<I,a===h&&L>e||a===i&&L>f)return 1;v=M&w,p[v]=H<<24|I<<16|x-q|0;}}return 0!==M&&(p[x+M]=D-J<<24|64<<16|0),s.bits=H,0;};},{"../utils/common":27}],37:[function(a,b){"use strict";b.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};},{}],38:[function(a,b,c){"use strict";function d(a){for(var b=a.length;--b>=0;)a[b]=0;}function e(a){return 256>a?gb[a]:gb[256+(a>>>7)];}function f(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=b>>>8&255;}function g(a,b,c){a.bi_valid>V-c?(a.bi_buf|=b<<a.bi_valid&65535,f(a,a.bi_buf),a.bi_buf=b>>V-a.bi_valid,a.bi_valid+=c-V):(a.bi_buf|=b<<a.bi_valid&65535,a.bi_valid+=c);}function h(a,b,c){g(a,c[2*b],c[2*b+1]);}function i(a,b){var c=0;do c|=1&a,a>>>=1,c<<=1;while(--b>0);return c>>>1;}function j(a){16===a.bi_valid?(f(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid>=8&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8);}function k(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;U>=f;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,c=a.heap_max+1;T>c;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f>o&&(f=o,p++),i[2*d+1]=f,d>j||(a.bl_count[f]++,g=0,d>=n&&(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&&(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2;}while(p>0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e>j||(i[2*e+1]!==f&&(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--);}}function l(a,b,c){var d,e,f=new Array(U+1),g=0;for(d=1;U>=d;d++)f[d]=g=g+c[d-1]<<1;for(e=0;b>=e;e++){var h=a[2*e+1];0!==h&&(a[2*e]=i(f[h]++,h));}}function m(){var a,b,c,d,e,f=new Array(U+1);for(c=0,d=0;O-1>d;d++)for(ib[d]=c,a=0;a<1<<_[d];a++)hb[c++]=d;for(hb[c-1]=d,e=0,d=0;16>d;d++)for(jb[d]=e,a=0;a<1<<ab[d];a++)gb[e++]=d;for(e>>=7;R>d;d++)for(jb[d]=e<<7,a=0;a<1<<ab[d]-7;a++)gb[256+e++]=d;for(b=0;U>=b;b++)f[b]=0;for(a=0;143>=a;)eb[2*a+1]=8,a++,f[8]++;for(;255>=a;)eb[2*a+1]=9,a++,f[9]++;for(;279>=a;)eb[2*a+1]=7,a++,f[7]++;for(;287>=a;)eb[2*a+1]=8,a++,f[8]++;for(l(eb,Q+1,f),a=0;R>a;a++)fb[2*a+1]=5,fb[2*a]=i(a,5);kb=new nb(eb,_,P+1,Q,U),lb=new nb(fb,ab,0,R,U),mb=new nb(new Array(0),bb,0,S,W);}function n(a){var b;for(b=0;Q>b;b++)a.dyn_ltree[2*b]=0;for(b=0;R>b;b++)a.dyn_dtree[2*b]=0;for(b=0;S>b;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*X]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0;}function o(a){a.bi_valid>8?f(a,a.bi_buf):a.bi_valid>0&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0;}function p(a,b,c,d){o(a),d&&(f(a,c),f(a,~c)),E.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c;}function q(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c];}function r(a,b,c){for(var d=a.heap[c],e=c<<1;e<=a.heap_len&&(e<a.heap_len&&q(b,a.heap[e+1],a.heap[e],a.depth)&&e++,!q(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e<<=1;a.heap[c]=d;}function s(a,b,c){var d,f,i,j,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]<<8|a.pending_buf[a.d_buf+2*k+1],f=a.pending_buf[a.l_buf+k],k++,0===d?h(a,f,b):(i=hb[f],h(a,i+P+1,b),j=_[i],0!==j&&(f-=ib[i],g(a,f,j)),d--,i=e(d),h(a,i,c),j=ab[i],0!==j&&(d-=jb[i],g(a,d,j)));while(k<a.last_lit);h(a,X,b);}function t(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=T,c=0;i>c;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len<2;)e=a.heap[++a.heap_len]=2>j?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&&(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len>>1;c>=1;c--)r(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],r(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]>=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,r(a,f,1);while(a.heap_len>=2);a.heap[--a.heap_max]=a.heap[1],k(a,b),l(f,j,a.bl_count);}function u(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&&(i=138,j=3),b[2*(c+1)+1]=65535,d=0;c>=d;d++)e=g,g=b[2*(d+1)+1],++h<i&&e===g||(j>h?a.bl_tree[2*e]+=h:0!==e?(e!==f&&a.bl_tree[2*e]++,a.bl_tree[2*Y]++):10>=h?a.bl_tree[2*Z]++:a.bl_tree[2*$]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4));}function v(a,b,c){var d,e,f=-1,i=b[1],j=0,k=7,l=4;for(0===i&&(k=138,l=3),d=0;c>=d;d++)if(e=i,i=b[2*(d+1)+1],!(++j<k&&e===i)){if(l>j){do h(a,e,a.bl_tree);while(0!==--j);}else 0!==e?(e!==f&&(h(a,e,a.bl_tree),j--),h(a,Y,a.bl_tree),g(a,j-3,2)):10>=j?(h(a,Z,a.bl_tree),g(a,j-3,3)):(h(a,$,a.bl_tree),g(a,j-11,7));j=0,f=e,0===i?(k=138,l=3):e===i?(k=6,l=3):(k=7,l=4);}}function w(a){var b;for(u(a,a.dyn_ltree,a.l_desc.max_code),u(a,a.dyn_dtree,a.d_desc.max_code),t(a,a.bl_desc),b=S-1;b>=3&&0===a.bl_tree[2*cb[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b;}function x(a,b,c,d){var e;for(g(a,b-257,5),g(a,c-1,5),g(a,d-4,4),e=0;d>e;e++)g(a,a.bl_tree[2*cb[e]+1],3);v(a,a.dyn_ltree,b-1),v(a,a.dyn_dtree,c-1);}function y(a){var b,c=4093624447;for(b=0;31>=b;b++,c>>>=1)if(1&c&&0!==a.dyn_ltree[2*b])return G;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return H;for(b=32;P>b;b++)if(0!==a.dyn_ltree[2*b])return H;return G;}function z(a){pb||(m(),pb=!0),a.l_desc=new ob(a.dyn_ltree,kb),a.d_desc=new ob(a.dyn_dtree,lb),a.bl_desc=new ob(a.bl_tree,mb),a.bi_buf=0,a.bi_valid=0,n(a);}function A(a,b,c,d){g(a,(J<<1)+(d?1:0),3),p(a,b,c,!0);}function B(a){g(a,K<<1,3),h(a,X,eb),j(a);}function C(a,b,c,d){var e,f,h=0;a.level>0?(a.strm.data_type===I&&(a.strm.data_type=y(a)),t(a,a.l_desc),t(a,a.d_desc),h=w(a),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,e>=f&&(e=f)):e=f=c+5,e>=c+4&&-1!==b?A(a,b,c,d):a.strategy===F||f===e?(g(a,(K<<1)+(d?1:0),3),s(a,eb,fb)):(g(a,(L<<1)+(d?1:0),3),x(a,a.l_desc.max_code+1,a.d_desc.max_code+1,h+1),s(a,a.dyn_ltree,a.dyn_dtree)),n(a),d&&o(a);}function D(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b>>>8&255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&b,a.pending_buf[a.l_buf+a.last_lit]=255&c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(hb[c]+P+1)]++,a.dyn_dtree[2*e(b)]++),a.last_lit===a.lit_bufsize-1;}var E=a("../utils/common"),F=4,G=0,H=1,I=2,J=0,K=1,L=2,M=3,N=258,O=29,P=256,Q=P+1+O,R=30,S=19,T=2*Q+1,U=15,V=16,W=7,X=256,Y=16,Z=17,$=18,_=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ab=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],bb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],db=512,eb=new Array(2*(Q+2));d(eb);var fb=new Array(2*R);d(fb);var gb=new Array(db);d(gb);var hb=new Array(N-M+1);d(hb);var ib=new Array(O);d(ib);var jb=new Array(R);d(jb);var kb,lb,mb,nb=function(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&&a.length;},ob=function(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b;},pb=!1;c._tr_init=z,c._tr_stored_block=A,c._tr_flush_block=C,c._tr_tally=D,c._tr_align=B;},{"../utils/common":27}],39:[function(a,b){"use strict";function c(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0;}b.exports=c;},{}]},{},[9])(9);});/*! DataTables 1.13.3
 * ©2008-2023 SpryMedia Ltd - datatables.net/license
 */!function(n){"use strict";"function"==typeof define&&__webpack_require__.amdO?define(["jquery"],function(t){return n(t,window,document);}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e=e||("undefined"!=typeof window?__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"):__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")(t)),n(e,t,t.document);}:window.DataTable=n(jQuery,window,document);}(function(P,j,y,N){"use strict";function d(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null;}function l(t,e,n){var a=typeof t,r="string"==a;return"number"==a||"bigint"==a||!!h(t)||(e&&r&&(t=G(t,e)),n&&r&&(t=t.replace(q,"")),!isNaN(parseFloat(t))&&isFinite(t));}function a(t,e,n){var a;return!!h(t)||(h(a=t)||"string"==typeof a)&&!!l(t.replace(V,""),e,n)||null;}function m(t,e,n,a){var r=[],o=0,i=e.length;if(a!==N)for(;o<i;o++)t[e[o]][n]&&r.push(t[e[o]][n][a]);else for(;o<i;o++)r.push(t[e[o]][n]);return r;}function f(t,e){var n,a=[];e===N?(e=0,n=t):(n=e,e=t);for(var r=e;r<n;r++)a.push(r);return a;}function _(t){for(var e=[],n=0,a=t.length;n<a;n++)t[n]&&e.push(t[n]);return e;}function s(t,e){return-1!==this.indexOf(t,e=e===N?0:e);}var p,e,t,C=function(t,v){if(this instanceof C)return P(t).DataTable(v);v=t,this.$=function(t,e){return this.api(!0).$(t,e);},this._=function(t,e){return this.api(!0).rows(t,e).data();},this.api=function(t){return new B(t?ge(this[p.iApiIndex]):this);},this.fnAddData=function(t,e){var n=this.api(!0),t=(Array.isArray(t)&&(Array.isArray(t[0])||P.isPlainObject(t[0]))?n.rows:n.row).add(t);return e!==N&&!e||n.draw(),t.flatten().toArray();},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),n=e.settings()[0],a=n.oScroll;t===N||t?e.draw(!1):""===a.sX&&""===a.sY||Qt(n);},this.fnClearTable=function(t){var e=this.api(!0).clear();t!==N&&!t||e.draw();},this.fnClose=function(t){this.api(!0).row(t).child.hide();},this.fnDeleteRow=function(t,e,n){var a=this.api(!0),t=a.rows(t),r=t.settings()[0],o=r.aoData[t[0][0]];return t.remove(),e&&e.call(this,r,o),n!==N&&!n||a.draw(),o;},this.fnDestroy=function(t){this.api(!0).destroy(t);},this.fnDraw=function(t){this.api(!0).draw(t);},this.fnFilter=function(t,e,n,a,r,o){var i=this.api(!0);(null===e||e===N?i:i.column(e)).search(t,n,a,o),i.draw();},this.fnGetData=function(t,e){var n,a=this.api(!0);return t!==N?(n=t.nodeName?t.nodeName.toLowerCase():"",e!==N||"td"==n||"th"==n?a.cell(t,e).data():a.row(t).data()||null):a.data().toArray();},this.fnGetNodes=function(t){var e=this.api(!0);return t!==N?e.row(t).node():e.rows().nodes().flatten().toArray();},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase();return"TR"==n?e.row(t).index():"TD"==n||"TH"==n?[(n=e.cell(t).index()).row,n.columnVisible,n.column]:null;},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown();},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0];},this.fnPageChange=function(t,e){t=this.api(!0).page(t);e!==N&&!e||t.draw(!1);},this.fnSetColumnVis=function(t,e,n){t=this.api(!0).column(t).visible(e);n!==N&&!n||t.columns.adjust().draw();},this.fnSettings=function(){return ge(this[p.iApiIndex]);},this.fnSort=function(t){this.api(!0).order(t).draw();},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n);},this.fnUpdate=function(t,e,n,a,r){var o=this.api(!0);return(n===N||null===n?o.row(e):o.cell(e,n)).data(t),r!==N&&!r||o.columns.adjust(),a!==N&&!a||o.draw(),0;},this.fnVersionCheck=p.fnVersionCheck;var e,y=this,D=v===N,_=this.length;for(e in D&&(v={}),this.oApi=this.internal=p.internal,C.ext.internal)e&&(this[e]=Ge(e));return this.each(function(){var r=1<_?be({},v,!0):v,o=0,t=this.getAttribute("id"),i=!1,e=C.defaults,l=P(this);if("table"!=this.nodeName.toLowerCase())W(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{K(e),Q(e.column),w(e,e,!0),w(e.column,e.column,!0),w(e,P.extend(r,l.data()),!0);for(var n=C.settings,o=0,s=n.length;o<s;o++){var a=n[o];if(a.nTable==this||a.nTHead&&a.nTHead.parentNode==this||a.nTFoot&&a.nTFoot.parentNode==this){var u=(r.bRetrieve!==N?r:e).bRetrieve,c=(r.bDestroy!==N?r:e).bDestroy;if(D||u)return a.oInstance;if(c){a.oInstance.fnDestroy();break;}return void W(a,0,"Cannot reinitialise DataTable",3);}if(a.sTableId==this.id){n.splice(o,1);break;}}null!==t&&""!==t||(t="DataTables_Table_"+C.ext._unique++,this.id=t);var f,d,h=P.extend(!0,{},C.models.oSettings,{sDestroyWidth:l[0].style.width,sInstance:t,sTableId:t}),p=(h.nTable=this,h.oApi=y.internal,h.oInit=r,n.push(h),h.oInstance=1===y.length?y:l.dataTable(),K(r),Z(r.oLanguage),r.aLengthMenu&&!r.iDisplayLength&&(r.iDisplayLength=(Array.isArray(r.aLengthMenu[0])?r.aLengthMenu[0]:r.aLengthMenu)[0]),r=be(P.extend(!0,{},e),r),F(h.oFeatures,r,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),F(h,r,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),F(h.oScroll,r,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),F(h.oLanguage,r,"fnInfoCallback"),L(h,"aoDrawCallback",r.fnDrawCallback,"user"),L(h,"aoServerParams",r.fnServerParams,"user"),L(h,"aoStateSaveParams",r.fnStateSaveParams,"user"),L(h,"aoStateLoadParams",r.fnStateLoadParams,"user"),L(h,"aoStateLoaded",r.fnStateLoaded,"user"),L(h,"aoRowCallback",r.fnRowCallback,"user"),L(h,"aoRowCreatedCallback",r.fnCreatedRow,"user"),L(h,"aoHeaderCallback",r.fnHeaderCallback,"user"),L(h,"aoFooterCallback",r.fnFooterCallback,"user"),L(h,"aoInitComplete",r.fnInitComplete,"user"),L(h,"aoPreDrawCallback",r.fnPreDrawCallback,"user"),h.rowIdFn=A(r.rowId),tt(h),h.oClasses),g=(P.extend(p,C.ext.classes,r.oClasses),l.addClass(p.sTable),h.iInitDisplayStart===N&&(h.iInitDisplayStart=r.iDisplayStart,h._iDisplayStart=r.iDisplayStart),null!==r.iDeferLoading&&(h.bDeferLoading=!0,t=Array.isArray(r.iDeferLoading),h._iRecordsDisplay=t?r.iDeferLoading[0]:r.iDeferLoading,h._iRecordsTotal=t?r.iDeferLoading[1]:r.iDeferLoading),h.oLanguage),t=(P.extend(!0,g,r.oLanguage),g.sUrl?(P.ajax({dataType:"json",url:g.sUrl,success:function(t){w(e.oLanguage,t),Z(t),P.extend(!0,g,t,h.oInit.oLanguage),R(h,null,"i18n",[h]),Jt(h);},error:function(){Jt(h);}}),i=!0):R(h,null,"i18n",[h]),null===r.asStripeClasses&&(h.asStripeClasses=[p.sStripeOdd,p.sStripeEven]),h.asStripeClasses),b=l.children("tbody").find("tr").eq(0),m=(-1!==P.inArray(!0,P.map(t,function(t,e){return b.hasClass(t);}))&&(P("tbody tr",this).removeClass(t.join(" ")),h.asDestroyStripes=t.slice()),[]),t=this.getElementsByTagName("thead");if(0!==t.length&&(Ct(h.aoHeader,t[0]),m=wt(h)),null===r.aoColumns)for(f=[],o=0,s=m.length;o<s;o++)f.push(null);else f=r.aoColumns;for(o=0,s=f.length;o<s;o++)nt(h,m?m[o]:null);st(h,r.aoColumnDefs,f,function(t,e){at(h,t,e);}),b.length&&(d=function(t,e){return null!==t.getAttribute("data-"+e)?e:null;},P(b[0]).children("th, td").each(function(t,e){var n,a=h.aoColumns[t];a||W(h,0,"Incorrect column count",18),a.mData===t&&(n=d(e,"sort")||d(e,"order"),e=d(e,"filter")||d(e,"search"),null===n&&null===e||(a.mData={_:t+".display",sort:null!==n?t+".@data-"+n:N,type:null!==n?t+".@data-"+n:N,filter:null!==e?t+".@data-"+e:N},at(h,t)));}));var S=h.oFeatures,t=function(){if(r.aaSorting===N){var t=h.aaSorting;for(o=0,s=t.length;o<s;o++)t[o][1]=h.aoColumns[o].asSorting[0];}ce(h),S.bSort&&L(h,"aoDrawCallback",function(){var t,n;h.bSorted&&(t=I(h),n={},P.each(t,function(t,e){n[e.src]=e.dir;}),R(h,null,"order",[h,t,n]),le(h));}),L(h,"aoDrawCallback",function(){(h.bSorted||"ssp"===E(h)||S.bDeferRender)&&ce(h);},"sc");var e=l.children("caption").each(function(){this._captionSide=P(this).css("caption-side");}),n=l.children("thead"),a=(0===n.length&&(n=P("<thead/>").appendTo(l)),h.nTHead=n[0],l.children("tbody")),n=(0===a.length&&(a=P("<tbody/>").insertAfter(n)),h.nTBody=a[0],l.children("tfoot"));if(0===(n=0===n.length&&0<e.length&&(""!==h.oScroll.sX||""!==h.oScroll.sY)?P("<tfoot/>").appendTo(l):n).length||0===n.children().length?l.addClass(p.sNoFooter):0<n.length&&(h.nTFoot=n[0],Ct(h.aoFooter,h.nTFoot)),r.aaData)for(o=0;o<r.aaData.length;o++)x(h,r.aaData[o]);else!h.bDeferLoading&&"dom"!=E(h)||ut(h,P(h.nTBody).children("tr"));h.aiDisplay=h.aiDisplayMaster.slice(),!(h.bInitialised=!0)===i&&Jt(h);};L(h,"aoDrawCallback",de,"state_save"),r.bStateSave?(S.bStateSave=!0,he(h,0,t)):t();}}),y=null,this;},c={},U=/[\r\n\u2028]/g,V=/<.*?>/g,X=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,J=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),q=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,h=function(t){return!t||!0===t||"-"===t;},G=function(t,e){return c[e]||(c[e]=new RegExp(Ot(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(c[e],"."):t;},H=function(t,e,n){var a=[],r=0,o=t.length;if(n!==N)for(;r<o;r++)t[r]&&t[r][e]&&a.push(t[r][e][n]);else for(;r<o;r++)t[r]&&a.push(t[r][e]);return a;},$=function(t){if(!(t.length<2))for(var e=t.slice().sort(),n=e[0],a=1,r=e.length;a<r;a++){if(e[a]===n)return!1;n=e[a];}return!0;},z=function(t){if($(t))return t.slice();var e,n,a,r=[],o=t.length,i=0;t:for(n=0;n<o;n++){for(e=t[n],a=0;a<i;a++)if(r[a]===e)continue t;r.push(e),i++;}return r;},Y=function(t,e){if(Array.isArray(e))for(var n=0;n<e.length;n++)Y(t,e[n]);else t.push(e);return t;};function i(n){var a,r,o={};P.each(n,function(t,e){(a=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(a[1]+" ")&&(r=t.replace(a[0],a[2].toLowerCase()),o[r]=t,"o"===a[1])&&i(n[t]);}),n._hungarianMap=o;}function w(n,a,r){var o;n._hungarianMap||i(n),P.each(a,function(t,e){(o=n._hungarianMap[t])===N||!r&&a[o]!==N||("o"===o.charAt(0)?(a[o]||(a[o]={}),P.extend(!0,a[o],a[t]),w(n[o],a[o],r)):a[o]=a[t]);});}function Z(t){var e,n=C.defaults.oLanguage,a=n.sDecimal;a&&Me(a),t&&(e=t.sZeroRecords,!t.sEmptyTable&&e&&"No data available in table"===n.sEmptyTable&&F(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&e&&"Loading..."===n.sLoadingRecords&&F(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands),e=t.sDecimal)&&a!==e&&Me(e);}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t);}),Array.prototype.includes||(Array.prototype.includes=s),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");}),String.prototype.includes||(String.prototype.includes=s),C.util={throttle:function(a,t){var r,o,i=t!==N?t:200;return function(){var t=this,e=+new Date(),n=arguments;r&&e<r+i?(clearTimeout(o),o=setTimeout(function(){r=N,a.apply(t,n);},i)):(r=e,a.apply(t,n));};},escapeRegex:function(t){return t.replace(J,"\\$1");},set:function(a){var d;return P.isPlainObject(a)?C.util.set(a._):null===a?function(){}:"function"==typeof a?function(t,e,n){a(t,"set",e,n);}:"string"!=typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("(")?function(t,e){t[a]=e;}:(d=function(t,e,n){for(var a,r,o,i,l=dt(n),n=l[l.length-1],s=0,u=l.length-1;s<u;s++){if("__proto__"===l[s]||"constructor"===l[s])throw new Error("Cannot set prototype values");if(a=l[s].match(ft),r=l[s].match(g),a){if(l[s]=l[s].replace(ft,""),t[l[s]]=[],(a=l.slice()).splice(0,s+1),i=a.join("."),Array.isArray(e))for(var c=0,f=e.length;c<f;c++)d(o={},e[c],i),t[l[s]].push(o);else t[l[s]]=e;return;}r&&(l[s]=l[s].replace(g,""),t=t[l[s]](e)),null!==t[l[s]]&&t[l[s]]!==N||(t[l[s]]={}),t=t[l[s]];}n.match(g)?t[n.replace(g,"")](e):t[n.replace(ft,"")]=e;},function(t,e){return d(t,e,a);});},get:function(r){var o,d;return P.isPlainObject(r)?(o={},P.each(r,function(t,e){e&&(o[t]=C.util.get(e));}),function(t,e,n,a){var r=o[e]||o._;return r!==N?r(t,e,n,a):t;}):null===r?function(t){return t;}:"function"==typeof r?function(t,e,n,a){return r(t,e,n,a);}:"string"!=typeof r||-1===r.indexOf(".")&&-1===r.indexOf("[")&&-1===r.indexOf("(")?function(t,e){return t[r];}:(d=function(t,e,n){var a,r,o;if(""!==n)for(var i=dt(n),l=0,s=i.length;l<s;l++){if(f=i[l].match(ft),a=i[l].match(g),f){if(i[l]=i[l].replace(ft,""),""!==i[l]&&(t=t[i[l]]),r=[],i.splice(0,l+1),o=i.join("."),Array.isArray(t))for(var u=0,c=t.length;u<c;u++)r.push(d(t[u],e,o));var f=f[0].substring(1,f[0].length-1);t=""===f?r:r.join(f);break;}if(a)i[l]=i[l].replace(g,""),t=t[i[l]]();else{if(null===t||t[i[l]]===N)return N;t=t[i[l]];}}return t;},function(t,e){return d(t,e,r);});}};var r=function(t,e,n){t[e]!==N&&(t[n]=t[e]);};function K(t){r(t,"ordering","bSort"),r(t,"orderMulti","bSortMulti"),r(t,"orderClasses","bSortClasses"),r(t,"orderCellsTop","bSortCellsTop"),r(t,"order","aaSorting"),r(t,"orderFixed","aaSortingFixed"),r(t,"paging","bPaginate"),r(t,"pagingType","sPaginationType"),r(t,"pageLength","iDisplayLength"),r(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"");var e=t.aoSearchCols;if(e)for(var n=0,a=e.length;n<a;n++)e[n]&&w(C.models.oSearch,e[n]);}function Q(t){r(t,"orderable","bSortable"),r(t,"orderData","aDataSort"),r(t,"orderSequence","asSorting"),r(t,"orderDataType","sortDataType");var e=t.aDataSort;"number"!=typeof e||Array.isArray(e)||(t.aDataSort=[e]);}function tt(t){var e,n,a,r;C.__browser||(C.__browser=e={},r=(a=(n=P("<div/>").css({position:"fixed",top:0,left:-1*P(j).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(P("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(P("<div/>").css({width:"100%",height:10}))).appendTo("body")).children()).children(),e.barWidth=a[0].offsetWidth-a[0].clientWidth,e.bScrollOversize=100===r[0].offsetWidth&&100!==a[0].clientWidth,e.bScrollbarLeft=1!==Math.round(r.offset().left),e.bBounding=!!n[0].getBoundingClientRect().width,n.remove()),P.extend(t.oBrowser,C.__browser),t.oScroll.iBarWidth=C.__browser.barWidth;}function et(t,e,n,a,r,o){var i,l=a,s=!1;for(n!==N&&(i=n,s=!0);l!==r;)t.hasOwnProperty(l)&&(i=s?e(i,t[l],l,t):t[l],s=!0,l+=o);return i;}function nt(t,e){var n=C.defaults.column,a=t.aoColumns.length,n=P.extend({},C.models.oColumn,n,{nTh:e||y.createElement("th"),sTitle:n.sTitle||(e?e.innerHTML:""),aDataSort:n.aDataSort||[a],mData:n.mData||a,idx:a}),n=(t.aoColumns.push(n),t.aoPreSearchCols);n[a]=P.extend({},C.models.oSearch,n[a]),at(t,a,P(e).data());}function at(t,e,n){function a(t){return"string"==typeof t&&-1!==t.indexOf("@");}var e=t.aoColumns[e],r=t.oClasses,o=P(e.nTh),i=(!e.sWidthOrig&&(e.sWidthOrig=o.attr("width")||null,u=(o.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/))&&(e.sWidthOrig=u[1]),n!==N&&null!==n&&(Q(n),w(C.defaults.column,n,!0),n.mDataProp===N||n.mData||(n.mData=n.mDataProp),n.sType&&(e._sManualType=n.sType),n.className&&!n.sClass&&(n.sClass=n.className),n.sClass&&o.addClass(n.sClass),u=e.sClass,P.extend(e,n),F(e,n,"sWidth","sWidthOrig"),u!==e.sClass&&(e.sClass=u+" "+e.sClass),n.iDataSort!==N&&(e.aDataSort=[n.iDataSort]),F(e,n,"aDataSort")),e.mData),l=A(i),s=e.mRender?A(e.mRender):null,u=(e._bAttrSrc=P.isPlainObject(i)&&(a(i.sort)||a(i.type)||a(i.filter)),e._setter=null,e.fnGetData=function(t,e,n){var a=l(t,e,N,n);return s&&e?s(a,e,t,n):a;},e.fnSetData=function(t,e,n){return b(i)(t,e,n);},"number"!=typeof i&&(t._rowReadObject=!0),t.oFeatures.bSort||(e.bSortable=!1,o.addClass(r.sSortableNone)),-1!==P.inArray("asc",e.asSorting)),n=-1!==P.inArray("desc",e.asSorting);e.bSortable&&(u||n)?u&&!n?(e.sSortingClass=r.sSortableAsc,e.sSortingClassJUI=r.sSortJUIAscAllowed):!u&&n?(e.sSortingClass=r.sSortableDesc,e.sSortingClassJUI=r.sSortJUIDescAllowed):(e.sSortingClass=r.sSortable,e.sSortingClassJUI=r.sSortJUI):(e.sSortingClass=r.sSortableNone,e.sSortingClassJUI="");}function O(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns;ee(t);for(var n=0,a=e.length;n<a;n++)e[n].nTh.style.width=e[n].sWidth;}var r=t.oScroll;""===r.sY&&""===r.sX||Qt(t),R(t,null,"column-sizing",[t]);}function rt(t,e){t=it(t,"bVisible");return"number"==typeof t[e]?t[e]:null;}function ot(t,e){t=it(t,"bVisible"),e=P.inArray(e,t);return-1!==e?e:null;}function T(t){var n=0;return P.each(t.aoColumns,function(t,e){e.bVisible&&"none"!==P(e.nTh).css("display")&&n++;}),n;}function it(t,n){var a=[];return P.map(t.aoColumns,function(t,e){t[n]&&a.push(e);}),a;}function lt(t){for(var e,n,a,r,o,i,l,s=t.aoColumns,u=t.aoData,c=C.ext.type.detect,f=0,d=s.length;f<d;f++)if(l=[],!(o=s[f]).sType&&o._sManualType)o.sType=o._sManualType;else if(!o.sType){for(e=0,n=c.length;e<n;e++){for(a=0,r=u.length;a<r&&(l[a]===N&&(l[a]=S(t,a,f,"type")),(i=c[e](l[a],t))||e===c.length-1)&&("html"!==i||h(l[a]));a++);if(i){o.sType=i;break;}}o.sType||(o.sType="string");}}function st(t,e,n,a){var r,o,i,l,s=t.aoColumns;if(e)for(r=e.length-1;0<=r;r--)for(var u,c=(u=e[r]).target!==N?u.target:u.targets!==N?u.targets:u.aTargets,f=0,d=(c=Array.isArray(c)?c:[c]).length;f<d;f++)if("number"==typeof c[f]&&0<=c[f]){for(;s.length<=c[f];)nt(t);a(c[f],u);}else if("number"==typeof c[f]&&c[f]<0)a(s.length+c[f],u);else if("string"==typeof c[f])for(i=0,l=s.length;i<l;i++)"_all"!=c[f]&&!P(s[i].nTh).hasClass(c[f])||a(i,u);if(n)for(r=0,o=n.length;r<o;r++)a(r,n[r]);}function x(t,e,n,a){for(var r=t.aoData.length,o=P.extend(!0,{},C.models.oRow,{src:n?"dom":"data",idx:r}),i=(o._aData=e,t.aoData.push(o),t.aoColumns),l=0,s=i.length;l<s;l++)i[l].sType=null;t.aiDisplayMaster.push(r);e=t.rowIdFn(e);return e!==N&&(t.aIds[e]=o),!n&&t.oFeatures.bDeferRender||St(t,r,n,a),r;}function ut(n,t){var a;return(t=t instanceof P?t:P(t)).map(function(t,e){return a=mt(n,e),x(n,a.data,e,a.cells);});}function S(t,e,n,a){"search"===a?a="filter":"order"===a&&(a="sort");var r=t.iDraw,o=t.aoColumns[n],i=t.aoData[e]._aData,l=o.sDefaultContent,s=o.fnGetData(i,a,{settings:t,row:e,col:n});if(s===N)return t.iDrawError!=r&&null===l&&(W(t,0,"Requested unknown parameter "+("function"==typeof o.mData?"{function}":"'"+o.mData+"'")+" for row "+e+", column "+n,4),t.iDrawError=r),l;if(s!==i&&null!==s||null===l||a===N){if("function"==typeof s)return s.call(i);}else s=l;return null===s&&"display"===a?"":"filter"===a&&(e=C.ext.type.search)[o.sType]?e[o.sType](s):s;}function ct(t,e,n,a){var r=t.aoColumns[n],o=t.aoData[e]._aData;r.fnSetData(o,a,{settings:t,row:e,col:n});}var ft=/\[.*?\]$/,g=/\(\)$/;function dt(t){return P.map(t.match(/(\\.|[^\.])+/g)||[""],function(t){return t.replace(/\\\./g,".");});}var A=C.util.get,b=C.util.set;function ht(t){return H(t.aoData,"_aData");}function pt(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={};}function gt(t,e,n){for(var a=-1,r=0,o=t.length;r<o;r++)t[r]==e?a=r:t[r]>e&&t[r]--;-1!=a&&n===N&&t.splice(a,1);}function bt(n,a,t,e){function r(t,e){for(;t.childNodes.length;)t.removeChild(t.firstChild);t.innerHTML=S(n,a,e,"display");}var o,i,l=n.aoData[a];if("dom"!==t&&(t&&"auto"!==t||"dom"!==l.src)){var s=l.anCells;if(s)if(e!==N)r(s[e],e);else for(o=0,i=s.length;o<i;o++)r(s[o],o);}else l._aData=mt(n,l,e,e===N?N:l._aData).data;l._aSortData=null,l._aFilterData=null;var u=n.aoColumns;if(e!==N)u[e].sType=null;else{for(o=0,i=u.length;o<i;o++)u[o].sType=null;vt(n,l);}}function mt(t,e,n,a){function r(t,e){var n;"string"==typeof t&&-1!==(n=t.indexOf("@"))&&(n=t.substring(n+1),b(t)(a,e.getAttribute(n)));}function o(t){n!==N&&n!==f||(l=d[f],s=t.innerHTML.trim(),l&&l._bAttrSrc?(b(l.mData._)(a,s),r(l.mData.sort,t),r(l.mData.type,t),r(l.mData.filter,t)):h?(l._setter||(l._setter=b(l.mData)),l._setter(a,s)):a[f]=s),f++;}var i,l,s,u=[],c=e.firstChild,f=0,d=t.aoColumns,h=t._rowReadObject;a=a!==N?a:h?{}:[];if(c)for(;c;)"TD"!=(i=c.nodeName.toUpperCase())&&"TH"!=i||(o(c),u.push(c)),c=c.nextSibling;else for(var p=0,g=(u=e.anCells).length;p<g;p++)o(u[p]);var e=e.firstChild?e:e.nTr;return e&&(e=e.getAttribute("id"))&&b(t.rowId)(a,e),{data:a,cells:u};}function St(t,e,n,a){var r,o,i,l,s,u,c=t.aoData[e],f=c._aData,d=[];if(null===c.nTr){for(r=n||y.createElement("tr"),c.nTr=r,c.anCells=d,r._DT_RowIndex=e,vt(t,c),l=0,s=t.aoColumns.length;l<s;l++)i=t.aoColumns[l],(o=(u=!n)?y.createElement(i.sCellType):a[l])||W(t,0,"Incorrect column count",18),o._DT_CellIndex={row:e,column:l},d.push(o),!u&&(!i.mRender&&i.mData===l||P.isPlainObject(i.mData)&&i.mData._===l+".display")||(o.innerHTML=S(t,e,l,"display")),i.sClass&&(o.className+=" "+i.sClass),i.bVisible&&!n?r.appendChild(o):!i.bVisible&&n&&o.parentNode.removeChild(o),i.fnCreatedCell&&i.fnCreatedCell.call(t.oInstance,o,S(t,e,l),f,e,l);R(t,"aoRowCreatedCallback",null,[r,f,e,d]);}}function vt(t,e){var n=e.nTr,a=e._aData;n&&((t=t.rowIdFn(a))&&(n.id=t),a.DT_RowClass&&(t=a.DT_RowClass.split(" "),e.__rowc=e.__rowc?z(e.__rowc.concat(t)):t,P(n).removeClass(e.__rowc.join(" ")).addClass(a.DT_RowClass)),a.DT_RowAttr&&P(n).attr(a.DT_RowAttr),a.DT_RowData)&&P(n).data(a.DT_RowData);}function yt(t){var e,n,a,r=t.nTHead,o=t.nTFoot,i=0===P("th, td",r).length,l=t.oClasses,s=t.aoColumns;for(i&&(n=P("<tr/>").appendTo(r)),c=0,f=s.length;c<f;c++)a=s[c],e=P(a.nTh).addClass(a.sClass),i&&e.appendTo(n),t.oFeatures.bSort&&(e.addClass(a.sSortingClass),!1!==a.bSortable)&&(e.attr("tabindex",t.iTabIndex).attr("aria-controls",t.sTableId),ue(t,a.nTh,c)),a.sTitle!=e[0].innerHTML&&e.html(a.sTitle),ve(t,"header")(t,e,a,l);if(i&&Ct(t.aoHeader,r),P(r).children("tr").children("th, td").addClass(l.sHeaderTH),P(o).children("tr").children("th, td").addClass(l.sFooterTH),null!==o)for(var u=t.aoFooter[0],c=0,f=u.length;c<f;c++)(a=s[c])?(a.nTf=u[c].cell,a.sClass&&P(a.nTf).addClass(a.sClass)):W(t,0,"Incorrect column count",18);}function Dt(t,e,n){var a,r,o,i,l,s,u,c,f,d=[],h=[],p=t.aoColumns.length;if(e){for(n===N&&(n=!1),a=0,r=e.length;a<r;a++){for(d[a]=e[a].slice(),d[a].nTr=e[a].nTr,o=p-1;0<=o;o--)t.aoColumns[o].bVisible||n||d[a].splice(o,1);h.push([]);}for(a=0,r=d.length;a<r;a++){if(u=d[a].nTr)for(;s=u.firstChild;)u.removeChild(s);for(o=0,i=d[a].length;o<i;o++)if(f=c=1,h[a][o]===N){for(u.appendChild(d[a][o].cell),h[a][o]=1;d[a+c]!==N&&d[a][o].cell==d[a+c][o].cell;)h[a+c][o]=1,c++;for(;d[a][o+f]!==N&&d[a][o].cell==d[a][o+f].cell;){for(l=0;l<c;l++)h[a+l][o+f]=1;f++;}P(d[a][o].cell).attr("rowspan",c).attr("colspan",f);}}}}function v(t,e){n="ssp"==E(s=t),(l=s.iInitDisplayStart)!==N&&-1!==l&&(s._iDisplayStart=!n&&l>=s.fnRecordsDisplay()?0:l,s.iInitDisplayStart=-1);var n=R(t,"aoPreDrawCallback","preDraw",[t]);if(-1!==P.inArray(!1,n))D(t,!1);else{var a=[],r=0,o=t.asStripeClasses,i=o.length,l=t.oLanguage,s="ssp"==E(t),u=t.aiDisplay,n=t._iDisplayStart,c=t.fnDisplayEnd();if(t.bDrawing=!0,t.bDeferLoading)t.bDeferLoading=!1,t.iDraw++,D(t,!1);else if(s){if(!t.bDestroying&&!e)return void xt(t);}else t.iDraw++;if(0!==u.length)for(var f=s?t.aoData.length:c,d=s?0:n;d<f;d++){var h,p=u[d],g=t.aoData[p],b=(null===g.nTr&&St(t,p),g.nTr);0!==i&&(h=o[r%i],g._sRowStripe!=h)&&(P(b).removeClass(g._sRowStripe).addClass(h),g._sRowStripe=h),R(t,"aoRowCallback",null,[b,g._aData,r,d,p]),a.push(b),r++;}else{e=l.sZeroRecords;1==t.iDraw&&"ajax"==E(t)?e=l.sLoadingRecords:l.sEmptyTable&&0===t.fnRecordsTotal()&&(e=l.sEmptyTable),a[0]=P("<tr/>",{class:i?o[0]:""}).append(P("<td />",{valign:"top",colSpan:T(t),class:t.oClasses.sRowEmpty}).html(e))[0];}R(t,"aoHeaderCallback","header",[P(t.nTHead).children("tr")[0],ht(t),n,c,u]),R(t,"aoFooterCallback","footer",[P(t.nTFoot).children("tr")[0],ht(t),n,c,u]);s=P(t.nTBody);s.children().detach(),s.append(P(a)),R(t,"aoDrawCallback","draw",[t]),t.bSorted=!1,t.bFiltered=!1,t.bDrawing=!1;}}function u(t,e){var n=t.oFeatures,a=n.bSort,n=n.bFilter;a&&ie(t),n?Rt(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,v(t),t._drawHold=!1;}function _t(t){for(var e,n,a,r,o,i,l,s=t.oClasses,u=P(t.nTable),u=P("<div/>").insertBefore(u),c=t.oFeatures,f=P("<div/>",{id:t.sTableId+"_wrapper",class:s.sWrapper+(t.nTFoot?"":" "+s.sNoFooter)}),d=(t.nHolding=u[0],t.nTableWrapper=f[0],t.nTableReinsertBefore=t.nTable.nextSibling,t.sDom.split("")),h=0;h<d.length;h++){if(e=null,"<"==(n=d[h])){if(a=P("<div/>")[0],"'"==(r=d[h+1])||'"'==r){for(o="",i=2;d[h+i]!=r;)o+=d[h+i],i++;"H"==o?o=s.sJUIHeader:"F"==o&&(o=s.sJUIFooter),-1!=o.indexOf(".")?(l=o.split("."),a.id=l[0].substr(1,l[0].length-1),a.className=l[1]):"#"==o.charAt(0)?a.id=o.substr(1,o.length-1):a.className=o,h+=i;}f.append(a),f=P(a);}else if(">"==n)f=f.parent();else if("l"==n&&c.bPaginate&&c.bLengthChange)e=$t(t);else if("f"==n&&c.bFilter)e=Lt(t);else if("r"==n&&c.bProcessing)e=Zt(t);else if("t"==n)e=Kt(t);else if("i"==n&&c.bInfo)e=Ut(t);else if("p"==n&&c.bPaginate)e=zt(t);else if(0!==C.ext.feature.length)for(var p=C.ext.feature,g=0,b=p.length;g<b;g++)if(n==p[g].cFeature){e=p[g].fnInit(t);break;}e&&((l=t.aanFeatures)[n]||(l[n]=[]),l[n].push(e),f.append(e));}u.replaceWith(f),t.nHolding=null;}function Ct(t,e){var n,a,r,o,i,l,s,u,c,f,d=P(e).children("tr");for(t.splice(0,t.length),r=0,l=d.length;r<l;r++)t.push([]);for(r=0,l=d.length;r<l;r++)for(a=(n=d[r]).firstChild;a;){if("TD"==a.nodeName.toUpperCase()||"TH"==a.nodeName.toUpperCase())for(u=(u=+a.getAttribute("colspan"))&&0!=u&&1!=u?u:1,c=(c=+a.getAttribute("rowspan"))&&0!=c&&1!=c?c:1,s=function(t,e,n){for(var a=t[e];a[n];)n++;return n;}(t,r,0),f=1==u,i=0;i<u;i++)for(o=0;o<c;o++)t[r+o][s+i]={cell:a,unique:f},t[r+o].nTr=n;a=a.nextSibling;}}function wt(t,e,n){var a=[];n||(n=t.aoHeader,e&&Ct(n=[],e));for(var r=0,o=n.length;r<o;r++)for(var i=0,l=n[r].length;i<l;i++)!n[r][i].unique||a[i]&&t.bSortCellsTop||(a[i]=n[r][i].cell);return a;}function Tt(r,t,n){function e(t){var e=r.jqXHR?r.jqXHR.status:null;(null===t||"number"==typeof e&&204==e)&&Ft(r,t={},[]),(e=t.error||t.sError)&&W(r,0,e),r.json=t,R(r,null,"xhr",[r,t,r.jqXHR]),n(t);}R(r,"aoServerParams","serverParams",[t]),t&&Array.isArray(t)&&(a={},o=/(.*?)\[\]$/,P.each(t,function(t,e){var n=e.name.match(o);n?(n=n[0],a[n]||(a[n]=[]),a[n].push(e.value)):a[e.name]=e.value;}),t=a);var a,o,i,l=r.ajax,s=r.oInstance,u=(P.isPlainObject(l)&&l.data&&(u="function"==typeof(i=l.data)?i(t,r):i,t="function"==typeof i&&u?u:P.extend(!0,t,u),delete l.data),{data:t,success:e,dataType:"json",cache:!1,type:r.sServerMethod,error:function(t,e,n){var a=R(r,null,"xhr",[r,null,r.jqXHR]);-1===P.inArray(!0,a)&&("parsererror"==e?W(r,0,"Invalid JSON response",1):4===t.readyState&&W(r,0,"Ajax error",7)),D(r,!1);}});r.oAjaxData=t,R(r,null,"preXhr",[r,t]),r.fnServerData?r.fnServerData.call(s,r.sAjaxSource,P.map(t,function(t,e){return{name:e,value:t};}),e,r):r.sAjaxSource||"string"==typeof l?r.jqXHR=P.ajax(P.extend(u,{url:l||r.sAjaxSource})):"function"==typeof l?r.jqXHR=l.call(s,t,e,r):(r.jqXHR=P.ajax(P.extend(u,l)),l.data=i);}function xt(e){e.iDraw++,D(e,!0),Tt(e,At(e),function(t){It(e,t);});}function At(t){for(var e,n,a,r=t.aoColumns,o=r.length,i=t.oFeatures,l=t.oPreviousSearch,s=t.aoPreSearchCols,u=[],c=I(t),f=t._iDisplayStart,d=!1!==i.bPaginate?t._iDisplayLength:-1,h=function(t,e){u.push({name:t,value:e});},p=(h("sEcho",t.iDraw),h("iColumns",o),h("sColumns",H(r,"sName").join(",")),h("iDisplayStart",f),h("iDisplayLength",d),{draw:t.iDraw,columns:[],order:[],start:f,length:d,search:{value:l.sSearch,regex:l.bRegex}}),g=0;g<o;g++)n=r[g],a=s[g],e="function"==typeof n.mData?"function":n.mData,p.columns.push({data:e,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:a.sSearch,regex:a.bRegex}}),h("mDataProp_"+g,e),i.bFilter&&(h("sSearch_"+g,a.sSearch),h("bRegex_"+g,a.bRegex),h("bSearchable_"+g,n.bSearchable)),i.bSort&&h("bSortable_"+g,n.bSortable);i.bFilter&&(h("sSearch",l.sSearch),h("bRegex",l.bRegex)),i.bSort&&(P.each(c,function(t,e){p.order.push({column:e.col,dir:e.dir}),h("iSortCol_"+t,e.col),h("sSortDir_"+t,e.dir);}),h("iSortingCols",c.length));f=C.ext.legacy.ajax;return null===f?t.sAjaxSource?u:p:f?u:p;}function It(t,n){function e(t,e){return n[t]!==N?n[t]:n[e];}var a=Ft(t,n),r=e("sEcho","draw"),o=e("iTotalRecords","recordsTotal"),i=e("iTotalDisplayRecords","recordsFiltered");if(r!==N){if(+r<t.iDraw)return;t.iDraw=+r;}a=a||[],pt(t),t._iRecordsTotal=parseInt(o,10),t._iRecordsDisplay=parseInt(i,10);for(var l=0,s=a.length;l<s;l++)x(t,a[l]);t.aiDisplay=t.aiDisplayMaster.slice(),v(t,!0),t._bInitComplete||qt(t,n),D(t,!1);}function Ft(t,e,n){t=P.isPlainObject(t.ajax)&&t.ajax.dataSrc!==N?t.ajax.dataSrc:t.sAjaxDataProp;if(!n)return"data"===t?e.aaData||e[t]:""!==t?A(t)(e):e;b(t)(e,n);}function Lt(n){function e(t){i.f;var e=this.value||"";o.return&&"Enter"!==t.key||e!=o.sSearch&&(Rt(n,{sSearch:e,bRegex:o.bRegex,bSmart:o.bSmart,bCaseInsensitive:o.bCaseInsensitive,return:o.return}),n._iDisplayStart=0,v(n));}var t=n.oClasses,a=n.sTableId,r=n.oLanguage,o=n.oPreviousSearch,i=n.aanFeatures,l='<input type="search" class="'+t.sFilterInput+'"/>',s=(s=r.sSearch).match(/_INPUT_/)?s.replace("_INPUT_",l):s+l,l=P("<div/>",{id:i.f?null:a+"_filter",class:t.sFilter}).append(P("<label/>").append(s)),t=null!==n.searchDelay?n.searchDelay:"ssp"===E(n)?400:0,u=P("input",l).val(o.sSearch).attr("placeholder",r.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",t?ne(e,t):e).on("mouseup",function(t){setTimeout(function(){e.call(u[0],t);},10);}).on("keypress.DT",function(t){if(13==t.keyCode)return!1;}).attr("aria-controls",a);return P(n.nTable).on("search.dt.DT",function(t,e){if(n===e)try{u[0]!==y.activeElement&&u.val(o.sSearch);}catch(t){}}),l[0];}function Rt(t,e,n){function a(t){o.sSearch=t.sSearch,o.bRegex=t.bRegex,o.bSmart=t.bSmart,o.bCaseInsensitive=t.bCaseInsensitive,o.return=t.return;}function r(t){return t.bEscapeRegex!==N?!t.bEscapeRegex:t.bRegex;}var o=t.oPreviousSearch,i=t.aoPreSearchCols;if(lt(t),"ssp"!=E(t)){Nt(t,e.sSearch,n,r(e),e.bSmart,e.bCaseInsensitive,e.return),a(e);for(var l=0;l<i.length;l++)jt(t,i[l].sSearch,l,r(i[l]),i[l].bSmart,i[l].bCaseInsensitive);Pt(t);}else a(e);t.bFiltered=!0,R(t,null,"search",[t]);}function Pt(t){for(var e,n,a=C.ext.search,r=t.aiDisplay,o=0,i=a.length;o<i;o++){for(var l=[],s=0,u=r.length;s<u;s++)n=r[s],e=t.aoData[n],a[o](t,e._aFilterData,n,e._aData,s)&&l.push(n);r.length=0,P.merge(r,l);}}function jt(t,e,n,a,r,o){if(""!==e){for(var i,l=[],s=t.aiDisplay,u=Ht(e,a,r,o),c=0;c<s.length;c++)i=t.aoData[s[c]]._aFilterData[n],u.test(i)&&l.push(s[c]);t.aiDisplay=l;}}function Nt(t,e,n,a,r,o){var i,l,s,u=Ht(e,a,r,o),r=t.oPreviousSearch.sSearch,o=t.aiDisplayMaster,c=[];if(0!==C.ext.search.length&&(n=!0),l=Wt(t),e.length<=0)t.aiDisplay=o.slice();else{for((l||n||a||r.length>e.length||0!==e.indexOf(r)||t.bSorted)&&(t.aiDisplay=o.slice()),i=t.aiDisplay,s=0;s<i.length;s++)u.test(t.aoData[i[s]]._sFilterRow)&&c.push(i[s]);t.aiDisplay=c;}}function Ht(t,e,n,a){return t=e?t:Ot(t),n&&(t="^(?=.*?"+P.map(t.match(/"[^"]+"|[^ ]+/g)||[""],function(t){var e;return(t='"'===t.charAt(0)?(e=t.match(/^"(.*)"$/))?e[1]:t:t).replace('"',"");}).join(")(?=.*?")+").*$"),new RegExp(t,a?"i":"");}var Ot=C.util.escapeRegex,kt=P("<div>")[0],Mt=kt.textContent!==N;function Wt(t){for(var e,n,a,r,o,i=t.aoColumns,l=!1,s=0,u=t.aoData.length;s<u;s++)if(!(o=t.aoData[s])._aFilterData){for(a=[],e=0,n=i.length;e<n;e++)i[e].bSearchable?"string"!=typeof(r=null===(r=S(t,s,e,"filter"))?"":r)&&r.toString&&(r=r.toString()):r="",r.indexOf&&-1!==r.indexOf("&")&&(kt.innerHTML=r,r=Mt?kt.textContent:kt.innerText),r.replace&&(r=r.replace(/[\r\n\u2028]/g,"")),a.push(r);o._aFilterData=a,o._sFilterRow=a.join("  "),l=!0;}return l;}function Et(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive};}function Bt(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive};}function Ut(t){var e=t.sTableId,n=t.aanFeatures.i,a=P("<div/>",{class:t.oClasses.sInfo,id:n?null:e+"_info"});return n||(t.aoDrawCallback.push({fn:Vt,sName:"information"}),a.attr("role","status").attr("aria-live","polite"),P(t.nTable).attr("aria-describedby",e+"_info")),a[0];}function Vt(t){var e,n,a,r,o,i,l=t.aanFeatures.i;0!==l.length&&(i=t.oLanguage,e=t._iDisplayStart+1,n=t.fnDisplayEnd(),a=t.fnRecordsTotal(),o=(r=t.fnRecordsDisplay())?i.sInfo:i.sInfoEmpty,r!==a&&(o+=" "+i.sInfoFiltered),o=Xt(t,o+=i.sInfoPostFix),null!==(i=i.fnInfoCallback)&&(o=i.call(t.oInstance,t,e,n,a,r,o)),P(l).html(o));}function Xt(t,e){var n=t.fnFormatNumber,a=t._iDisplayStart+1,r=t._iDisplayLength,o=t.fnRecordsDisplay(),i=-1===r;return e.replace(/_START_/g,n.call(t,a)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,o)).replace(/_PAGE_/g,n.call(t,i?1:Math.ceil(a/r))).replace(/_PAGES_/g,n.call(t,i?1:Math.ceil(o/r)));}function Jt(n){var a,t,e,r=n.iInitDisplayStart,o=n.aoColumns,i=n.oFeatures,l=n.bDeferLoading;if(n.bInitialised){for(_t(n),yt(n),Dt(n,n.aoHeader),Dt(n,n.aoFooter),D(n,!0),i.bAutoWidth&&ee(n),a=0,t=o.length;a<t;a++)(e=o[a]).sWidth&&(e.nTh.style.width=M(e.sWidth));R(n,null,"preInit",[n]),u(n);i=E(n);"ssp"==i&&!l||("ajax"==i?Tt(n,[],function(t){var e=Ft(n,t);for(a=0;a<e.length;a++)x(n,e[a]);n.iInitDisplayStart=r,u(n),D(n,!1),qt(n,t);}):(D(n,!1),qt(n)));}else setTimeout(function(){Jt(n);},200);}function qt(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&O(t),R(t,null,"plugin-init",[t,e]),R(t,"aoInitComplete","init",[t,e]);}function Gt(t,e){e=parseInt(e,10);t._iDisplayLength=e,Se(t),R(t,null,"length",[t,e]);}function $t(a){for(var t=a.oClasses,e=a.sTableId,n=a.aLengthMenu,r=Array.isArray(n[0]),o=r?n[0]:n,i=r?n[1]:n,l=P("<select/>",{name:e+"_length","aria-controls":e,class:t.sLengthSelect}),s=0,u=o.length;s<u;s++)l[0][s]=new Option("number"==typeof i[s]?a.fnFormatNumber(i[s]):i[s],o[s]);var c=P("<div><label/></div>").addClass(t.sLength);return a.aanFeatures.l||(c[0].id=e+"_length"),c.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",l[0].outerHTML)),P("select",c).val(a._iDisplayLength).on("change.DT",function(t){Gt(a,P(this).val()),v(a);}),P(a.nTable).on("length.dt.DT",function(t,e,n){a===e&&P("select",c).val(n);}),c[0];}function zt(t){function c(t){v(t);}var e=t.sPaginationType,f=C.ext.pager[e],d="function"==typeof f,e=P("<div/>").addClass(t.oClasses.sPaging+e)[0],h=t.aanFeatures;return d||f.fnInit(t,e,c),h.p||(e.id=t.sTableId+"_paginate",t.aoDrawCallback.push({fn:function(t){if(d)for(var e=t._iDisplayStart,n=t._iDisplayLength,a=t.fnRecordsDisplay(),r=-1===n,o=r?0:Math.ceil(e/n),i=r?1:Math.ceil(a/n),l=f(o,i),s=0,u=h.p.length;s<u;s++)ve(t,"pageButton")(t,h.p[s],s,l,o,i);else f.fnUpdate(t,c);},sName:"pagination"})),e;}function Yt(t,e,n){var a=t._iDisplayStart,r=t._iDisplayLength,o=t.fnRecordsDisplay(),o=(0===o||-1===r?a=0:"number"==typeof e?o<(a=e*r)&&(a=0):"first"==e?a=0:"previous"==e?(a=0<=r?a-r:0)<0&&(a=0):"next"==e?a+r<o&&(a+=r):"last"==e?a=Math.floor((o-1)/r)*r:W(t,0,"Unknown paging action: "+e,5),t._iDisplayStart!==a);return t._iDisplayStart=a,o?(R(t,null,"page",[t]),n&&v(t)):R(t,null,"page-nc",[t]),o;}function Zt(t){return P("<div/>",{id:t.aanFeatures.r?null:t.sTableId+"_processing",class:t.oClasses.sProcessing,role:"status"}).html(t.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(t.nTable)[0];}function D(t,e){t.oFeatures.bProcessing&&P(t.aanFeatures.r).css("display",e?"block":"none"),R(t,null,"processing",[t,e]);}function Kt(t){var e,n,a,r,o,i,l,s,u,c,f,d,h=P(t.nTable),p=t.oScroll;return""===p.sX&&""===p.sY?t.nTable:(e=p.sX,n=p.sY,a=t.oClasses,o=(r=h.children("caption")).length?r[0]._captionSide:null,s=P(h[0].cloneNode(!1)),i=P(h[0].cloneNode(!1)),u=function(t){return t?M(t):null;},(l=h.children("tfoot")).length||(l=null),s=P(f="<div/>",{class:a.sScrollWrapper}).append(P(f,{class:a.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:e?u(e):"100%"}).append(P(f,{class:a.sScrollHeadInner}).css({"box-sizing":"content-box",width:p.sXInner||"100%"}).append(s.removeAttr("id").css("margin-left",0).append("top"===o?r:null).append(h.children("thead"))))).append(P(f,{class:a.sScrollBody}).css({position:"relative",overflow:"auto",width:u(e)}).append(h)),l&&s.append(P(f,{class:a.sScrollFoot}).css({overflow:"hidden",border:0,width:e?u(e):"100%"}).append(P(f,{class:a.sScrollFootInner}).append(i.removeAttr("id").css("margin-left",0).append("bottom"===o?r:null).append(h.children("tfoot"))))),u=s.children(),c=u[0],f=u[1],d=l?u[2]:null,e&&P(f).on("scroll.DT",function(t){var e=this.scrollLeft;c.scrollLeft=e,l&&(d.scrollLeft=e);}),P(f).css("max-height",n),p.bCollapse||P(f).css("height",n),t.nScrollHead=c,t.nScrollBody=f,t.nScrollFoot=d,t.aoDrawCallback.push({fn:Qt,sName:"scrolling"}),s[0]);}function Qt(n){function t(t){(t=t.style).paddingTop="0",t.paddingBottom="0",t.borderTopWidth="0",t.borderBottomWidth="0",t.height=0;}var e,a,r,o,i,l=n.oScroll,s=l.sX,u=l.sXInner,c=l.sY,l=l.iBarWidth,f=P(n.nScrollHead),d=f[0].style,h=f.children("div"),p=h[0].style,h=h.children("table"),g=n.nScrollBody,b=P(g),m=g.style,S=P(n.nScrollFoot).children("div"),v=S.children("table"),y=P(n.nTHead),D=P(n.nTable),_=D[0],C=_.style,w=n.nTFoot?P(n.nTFoot):null,T=n.oBrowser,x=T.bScrollOversize,A=(H(n.aoColumns,"nTh"),[]),I=[],F=[],L=[],R=g.scrollHeight>g.clientHeight;n.scrollBarVis!==R&&n.scrollBarVis!==N?(n.scrollBarVis=R,O(n)):(n.scrollBarVis=R,D.children("thead, tfoot").remove(),w&&(R=w.clone().prependTo(D),i=w.find("tr"),a=R.find("tr"),R.find("[id]").removeAttr("id")),R=y.clone().prependTo(D),y=y.find("tr"),e=R.find("tr"),R.find("th, td").removeAttr("tabindex"),R.find("[id]").removeAttr("id"),s||(m.width="100%",f[0].style.width="100%"),P.each(wt(n,R),function(t,e){r=rt(n,t),e.style.width=n.aoColumns[r].sWidth;}),w&&k(function(t){t.style.width="";},a),f=D.outerWidth(),""===s?(C.width="100%",x&&(D.find("tbody").height()>g.offsetHeight||"scroll"==b.css("overflow-y"))&&(C.width=M(D.outerWidth()-l)),f=D.outerWidth()):""!==u&&(C.width=M(u),f=D.outerWidth()),k(t,e),k(function(t){var e=j.getComputedStyle?j.getComputedStyle(t).width:M(P(t).width());F.push(t.innerHTML),A.push(e);},e),k(function(t,e){t.style.width=A[e];},y),P(e).css("height",0),w&&(k(t,a),k(function(t){L.push(t.innerHTML),I.push(M(P(t).css("width")));},a),k(function(t,e){t.style.width=I[e];},i),P(a).height(0)),k(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+F[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=A[e];},e),w&&k(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+L[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=I[e];},a),Math.round(D.outerWidth())<Math.round(f)?(o=g.scrollHeight>g.offsetHeight||"scroll"==b.css("overflow-y")?f+l:f,x&&(g.scrollHeight>g.offsetHeight||"scroll"==b.css("overflow-y"))&&(C.width=M(o-l)),""!==s&&""===u||W(n,1,"Possible column misalignment",6)):o="100%",m.width=M(o),d.width=M(o),w&&(n.nScrollFoot.style.width=M(o)),c||x&&(m.height=M(_.offsetHeight+l)),R=D.outerWidth(),h[0].style.width=M(R),p.width=M(R),y=D.height()>g.clientHeight||"scroll"==b.css("overflow-y"),p[i="padding"+(T.bScrollbarLeft?"Left":"Right")]=y?l+"px":"0px",w&&(v[0].style.width=M(R),S[0].style.width=M(R),S[0].style[i]=y?l+"px":"0px"),D.children("colgroup").insertBefore(D.children("thead")),b.trigger("scroll"),!n.bSorted&&!n.bFiltered||n._drawHold||(g.scrollTop=0));}function k(t,e,n){for(var a,r,o=0,i=0,l=e.length;i<l;){for(a=e[i].firstChild,r=n?n[i].firstChild:null;a;)1===a.nodeType&&(n?t(a,r,o):t(a,o),o++),a=a.nextSibling,r=n?r.nextSibling:null;i++;}}var te=/<.*?>/g;function ee(t){var e,n,a=t.nTable,r=t.aoColumns,o=t.oScroll,i=o.sY,l=o.sX,o=o.sXInner,s=r.length,u=it(t,"bVisible"),c=P("th",t.nTHead),f=a.getAttribute("width"),d=a.parentNode,h=!1,p=t.oBrowser,g=p.bScrollOversize,b=a.style.width;for(b&&-1!==b.indexOf("%")&&(f=b),D=0;D<u.length;D++)null!==(e=r[u[D]]).sWidth&&(e.sWidth=ae(e.sWidthOrig,d),h=!0);if(g||!h&&!l&&!i&&s==T(t)&&s==c.length)for(D=0;D<s;D++){var m=rt(t,D);null!==m&&(r[m].sWidth=M(c.eq(D).width()));}else{var b=P(a).clone().css("visibility","hidden").removeAttr("id"),S=(b.find("tbody tr").remove(),P("<tr/>").appendTo(b.find("tbody")));for(b.find("thead, tfoot").remove(),b.append(P(t.nTHead).clone()).append(P(t.nTFoot).clone()),b.find("tfoot th, tfoot td").css("width",""),c=wt(t,b.find("thead")[0]),D=0;D<u.length;D++)e=r[u[D]],c[D].style.width=null!==e.sWidthOrig&&""!==e.sWidthOrig?M(e.sWidthOrig):"",e.sWidthOrig&&l&&P(c[D]).append(P("<div/>").css({width:e.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(t.aoData.length)for(D=0;D<u.length;D++)e=r[n=u[D]],P(re(t,n)).clone(!1).append(e.sContentPadding).appendTo(S);P("[name]",b).removeAttr("name");for(var v=P("<div/>").css(l||i?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(b).appendTo(d),y=(l&&o?b.width(o):l?(b.css("width","auto"),b.removeAttr("width"),b.width()<d.clientWidth&&f&&b.width(d.clientWidth)):i?b.width(d.clientWidth):f&&b.width(f),0),D=0;D<u.length;D++){var _=P(c[D]),C=_.outerWidth()-_.width(),_=p.bBounding?Math.ceil(c[D].getBoundingClientRect().width):_.outerWidth();y+=_,r[u[D]].sWidth=M(_-C);}a.style.width=M(y),v.remove();}f&&(a.style.width=M(f)),!f&&!l||t._reszEvt||(o=function(){P(j).on("resize.DT-"+t.sInstance,ne(function(){O(t);}));},g?setTimeout(o,1e3):o(),t._reszEvt=!0);}var ne=C.util.throttle;function ae(t,e){return t?(e=(t=P("<div/>").css("width",M(t)).appendTo(e||y.body))[0].offsetWidth,t.remove(),e):0;}function re(t,e){var n,a=oe(t,e);return a<0?null:(n=t.aoData[a]).nTr?n.anCells[e]:P("<td/>").html(S(t,a,e,"display"))[0];}function oe(t,e){for(var n,a=-1,r=-1,o=0,i=t.aoData.length;o<i;o++)(n=(n=(n=S(t,o,e,"display")+"").replace(te,"")).replace(/&nbsp;/g," ")).length>a&&(a=n.length,r=o);return r;}function M(t){return null===t?"0px":"number"==typeof t?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t;}function I(t){function e(t){t.length&&!Array.isArray(t[0])?h.push(t):P.merge(h,t);}var n,a,r,o,i,l,s,u=[],c=t.aoColumns,f=t.aaSortingFixed,d=P.isPlainObject(f),h=[];for(Array.isArray(f)&&e(f),d&&f.pre&&e(f.pre),e(t.aaSorting),d&&f.post&&e(f.post),n=0;n<h.length;n++)for(r=(o=c[s=h[n][a=0]].aDataSort).length;a<r;a++)l=c[i=o[a]].sType||"string",h[n]._idx===N&&(h[n]._idx=P.inArray(h[n][1],c[i].asSorting)),u.push({src:s,col:i,dir:h[n][1],index:h[n]._idx,type:l,formatter:C.ext.type.order[l+"-pre"]});return u;}function ie(t){var e,n,a,r,c,f=[],u=C.ext.type.order,d=t.aoData,o=(t.aoColumns,0),i=t.aiDisplayMaster;for(lt(t),e=0,n=(c=I(t)).length;e<n;e++)(r=c[e]).formatter&&o++,fe(t,r.col);if("ssp"!=E(t)&&0!==c.length){for(e=0,a=i.length;e<a;e++)f[i[e]]=e;o===c.length?i.sort(function(t,e){for(var n,a,r,o,i=c.length,l=d[t]._aSortData,s=d[e]._aSortData,u=0;u<i;u++)if(0!=(r=(n=l[(o=c[u]).col])<(a=s[o.col])?-1:a<n?1:0))return"asc"===o.dir?r:-r;return(n=f[t])<(a=f[e])?-1:a<n?1:0;}):i.sort(function(t,e){for(var n,a,r,o=c.length,i=d[t]._aSortData,l=d[e]._aSortData,s=0;s<o;s++)if(n=i[(r=c[s]).col],a=l[r.col],0!==(r=(u[r.type+"-"+r.dir]||u["string-"+r.dir])(n,a)))return r;return(n=f[t])<(a=f[e])?-1:a<n?1:0;});}t.bSorted=!0;}function le(t){for(var e=t.aoColumns,n=I(t),a=t.oLanguage.oAria,r=0,o=e.length;r<o;r++){var i=e[r],l=i.asSorting,s=i.ariaTitle||i.sTitle.replace(/<.*?>/g,""),u=i.nTh;u.removeAttribute("aria-sort"),i=i.bSortable?s+("asc"===(0<n.length&&n[0].col==r&&(u.setAttribute("aria-sort","asc"==n[0].dir?"ascending":"descending"),l[n[0].index+1])||l[0])?a.sSortAscending:a.sSortDescending):s,u.setAttribute("aria-label",i);}}function se(t,e,n,a){function r(t,e){var n=t._idx;return(n=n===N?P.inArray(t[1],s):n)+1<s.length?n+1:e?null:0;}var o,i=t.aoColumns[e],l=t.aaSorting,s=i.asSorting;"number"==typeof l[0]&&(l=t.aaSorting=[l]),n&&t.oFeatures.bSortMulti?-1!==(i=P.inArray(e,H(l,"0")))?null===(o=null===(o=r(l[i],!0))&&1===l.length?0:o)?l.splice(i,1):(l[i][1]=s[o],l[i]._idx=o):(l.push([e,s[0],0]),l[l.length-1]._idx=0):l.length&&l[0][0]==e?(o=r(l[0]),l.length=1,l[0][1]=s[o],l[0]._idx=o):(l.length=0,l.push([e,s[0]]),l[0]._idx=0),u(t),"function"==typeof a&&a(t);}function ue(e,t,n,a){var r=e.aoColumns[n];me(t,{},function(t){!1!==r.bSortable&&(e.oFeatures.bProcessing?(D(e,!0),setTimeout(function(){se(e,n,t.shiftKey,a),"ssp"!==E(e)&&D(e,!1);},0)):se(e,n,t.shiftKey,a));});}function ce(t){var e,n,a,r=t.aLastSort,o=t.oClasses.sSortColumn,i=I(t),l=t.oFeatures;if(l.bSort&&l.bSortClasses){for(e=0,n=r.length;e<n;e++)a=r[e].src,P(H(t.aoData,"anCells",a)).removeClass(o+(e<2?e+1:3));for(e=0,n=i.length;e<n;e++)a=i[e].src,P(H(t.aoData,"anCells",a)).addClass(o+(e<2?e+1:3));}t.aLastSort=i;}function fe(t,e){for(var n,a,r,o=t.aoColumns[e],i=C.ext.order[o.sSortDataType],l=(i&&(n=i.call(t.oInstance,t,e,ot(t,e))),C.ext.type.order[o.sType+"-pre"]),s=0,u=t.aoData.length;s<u;s++)(a=t.aoData[s])._aSortData||(a._aSortData=[]),a._aSortData[e]&&!i||(r=i?n[s]:S(t,s,e,"sort"),a._aSortData[e]=l?l(r):r);}function de(n){var t;n._bLoadingState||(t={time:+new Date(),start:n._iDisplayStart,length:n._iDisplayLength,order:P.extend(!0,[],n.aaSorting),search:Et(n.oPreviousSearch),columns:P.map(n.aoColumns,function(t,e){return{visible:t.bVisible,search:Et(n.aoPreSearchCols[e])};})},n.oSavedState=t,R(n,"aoStateSaveParams","stateSaveParams",[n,t]),n.oFeatures.bStateSave&&!n.bDestroying&&n.fnStateSaveCallback.call(n.oInstance,n,t));}function he(e,t,n){var a;if(e.oFeatures.bStateSave)return(a=e.fnStateLoadCallback.call(e.oInstance,e,function(t){pe(e,t,n);}))!==N&&pe(e,a,n),!0;n();}function pe(n,t,e){var a,r,o=n.aoColumns,i=(n._bLoadingState=!0,n._bInitComplete?new C.Api(n):null);if(t&&t.time){var l=R(n,"aoStateLoadParams","stateLoadParams",[n,t]);if(-1!==P.inArray(!1,l))n._bLoadingState=!1;else{l=n.iStateDuration;if(0<l&&t.time<+new Date()-1e3*l)n._bLoadingState=!1;else if(t.columns&&o.length!==t.columns.length)n._bLoadingState=!1;else{if(n.oLoadedState=P.extend(!0,{},t),t.length!==N&&(i?i.page.len(t.length):n._iDisplayLength=t.length),t.start!==N&&(null===i?(n._iDisplayStart=t.start,n.iInitDisplayStart=t.start):Yt(n,t.start/n._iDisplayLength)),t.order!==N&&(n.aaSorting=[],P.each(t.order,function(t,e){n.aaSorting.push(e[0]>=o.length?[0,e[1]]:e);})),t.search!==N&&P.extend(n.oPreviousSearch,Bt(t.search)),t.columns){for(a=0,r=t.columns.length;a<r;a++){var s=t.columns[a];s.visible!==N&&(i?i.column(a).visible(s.visible,!1):o[a].bVisible=s.visible),s.search!==N&&P.extend(n.aoPreSearchCols[a],Bt(s.search));}i&&i.columns.adjust();}n._bLoadingState=!1,R(n,"aoStateLoaded","stateLoaded",[n,t]);}}}else n._bLoadingState=!1;e();}function ge(t){var e=C.settings,t=P.inArray(t,H(e,"nTable"));return-1!==t?e[t]:null;}function W(t,e,n,a){if(n="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+n,a&&(n+=". For more information about this error, please see http://datatables.net/tn/"+a),e)j.console&&console.log&&console.log(n);else{e=C.ext,e=e.sErrMode||e.errMode;if(t&&R(t,null,"error",[t,a,n]),"alert"==e)(0,_node_modules_pnotify_core_dist_PNotify_js__WEBPACK_IMPORTED_MODULE_3__.alert)(n);else{if("throw"==e)throw new Error(n);"function"==typeof e&&e(t,a,n);}}}function F(n,a,t,e){Array.isArray(t)?P.each(t,function(t,e){Array.isArray(e)?F(n,a,e[0],e[1]):F(n,a,e);}):(e===N&&(e=t),a[t]!==N&&(n[e]=a[t]));}function be(t,e,n){var a,r;for(r in e)e.hasOwnProperty(r)&&(a=e[r],P.isPlainObject(a)?(P.isPlainObject(t[r])||(t[r]={}),P.extend(!0,t[r],a)):n&&"data"!==r&&"aaData"!==r&&Array.isArray(a)?t[r]=a.slice():t[r]=a);return t;}function me(e,t,n){P(e).on("click.DT",t,function(t){P(e).trigger("blur"),n(t);}).on("keypress.DT",t,function(t){13===t.which&&(t.preventDefault(),n(t));}).on("selectstart.DT",function(){return!1;});}function L(t,e,n,a){n&&t[e].push({fn:n,sName:a});}function R(n,t,e,a){var r=[];return t&&(r=P.map(n[t].slice().reverse(),function(t,e){return t.fn.apply(n.oInstance,a);})),null!==e&&(t=P.Event(e+".dt"),(e=P(n.nTable)).trigger(t,a),0===e.parents("body").length&&P("body").trigger(t,a),r.push(t.result)),r;}function Se(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),a=t._iDisplayLength;n<=e&&(e=n-a),e-=e%a,t._iDisplayStart=e=-1===a||e<0?0:e;}function ve(t,e){var t=t.renderer,n=C.ext.renderer[e];return P.isPlainObject(t)&&t[e]?n[t[e]]||n._:"string"==typeof t&&n[t]||n._;}function E(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom";}function ye(t,n){var a;return Array.isArray(t)?P.map(t,function(t){return ye(t,n);}):"number"==typeof t?[n[t]]:(a=P.map(n,function(t,e){return t.nTable;}),P(a).filter(t).map(function(t){var e=P.inArray(this,a);return n[e];}).toArray());}function De(r,o,t){var e,n;t&&(e=new B(r)).one("draw",function(){t(e.ajax.json());}),"ssp"==E(r)?u(r,o):(D(r,!0),(n=r.jqXHR)&&4!==n.readyState&&n.abort(),Tt(r,[],function(t){pt(r);for(var e=Ft(r,t),n=0,a=e.length;n<a;n++)x(r,e[n]);u(r,o),D(r,!1);}));}function _e(t,e,n,a,r){for(var o,i,l,s,u=[],c=typeof e,f=0,d=(e=e&&"string"!=c&&"function"!=c&&e.length!==N?e:[e]).length;f<d;f++)for(l=0,s=(i=e[f]&&e[f].split&&!e[f].match(/[\[\(:]/)?e[f].split(","):[e[f]]).length;l<s;l++)(o=n("string"==typeof i[l]?i[l].trim():i[l]))&&o.length&&(u=u.concat(o));var h=p.selector[t];if(h.length)for(f=0,d=h.length;f<d;f++)u=h[f](a,r,u);return z(u);}function Ce(t){return(t=t||{}).filter&&t.search===N&&(t.search=t.filter),P.extend({search:"none",order:"current",page:"all"},t);}function we(t){for(var e=0,n=t.length;e<n;e++)if(0<t[e].length)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t;return t.length=0,t;}function Te(o,t,e,n){function i(t,e){var n;if(Array.isArray(t)||t instanceof P)for(var a=0,r=t.length;a<r;a++)i(t[a],e);else t.nodeName&&"tr"===t.nodeName.toLowerCase()?l.push(t):(n=P("<tr><td></td></tr>").addClass(e),P("td",n).addClass(e).html(t)[0].colSpan=T(o),l.push(n[0]));}var l=[];i(e,n),t._details&&t._details.detach(),t._details=P(l),t._detailsShow&&t._details.insertAfter(t.nTr);}function xe(t,e){var n=t.context;if(n.length&&t.length){var a=n[0].aoData[t[0]];if(a._details){(a._detailsShow=e)?(a._details.insertAfter(a.nTr),P(a.nTr).addClass("dt-hasChild")):(a._details.detach(),P(a.nTr).removeClass("dt-hasChild")),R(n[0],null,"childRow",[e,t.row(t[0])]);var s=n[0],r=new B(s),a=".dt.DT_details",e="draw"+a,t="column-sizing"+a,a="destroy"+a,u=s.aoData;if(r.off(e+" "+t+" "+a),H(u,"_details").length>0){r.on(e,function(t,e){if(s!==e)return;r.rows({page:"current"}).eq(0).each(function(t){var e=u[t];if(e._detailsShow)e._details.insertAfter(e.nTr);});});r.on(t,function(t,e,n,a){if(s!==e)return;var r,o=T(e);for(var i=0,l=u.length;i<l;i++){r=u[i];if(r._details)r._details.children("td[colspan]").attr("colspan",o);}});r.on(a,function(t,e){if(s!==e)return;for(var n=0,a=u.length;n<a;n++)if(u[n]._details)Re(r,n);});}Le(n);}}}function Ae(t,e,n,a,r){for(var o=[],i=0,l=r.length;i<l;i++)o.push(S(t,r[i],e));return o;}var Ie=[],o=Array.prototype,B=function(t,e){if(!(this instanceof B))return new B(t,e);function n(t){var e,n,a,r;t=t,a=C.settings,r=P.map(a,function(t,e){return t.nTable;}),(t=t?t.nTable&&t.oApi?[t]:t.nodeName&&"table"===t.nodeName.toLowerCase()?-1!==(e=P.inArray(t,r))?[a[e]]:null:t&&"function"==typeof t.settings?t.settings().toArray():("string"==typeof t?n=P(t):t instanceof P&&(n=t),n?n.map(function(t){return-1!==(e=P.inArray(this,r))?a[e]:null;}).toArray():void 0):[])&&o.push.apply(o,t);}var o=[];if(Array.isArray(t))for(var a=0,r=t.length;a<r;a++)n(t[a]);else n(t);this.context=z(o),e&&P.merge(this,e),this.selector={rows:null,cols:null,opts:null},B.extend(this,this,Ie);},Fe=(C.Api=B,P.extend(B.prototype,{any:function(){return 0!==this.count();},concat:o.concat,context:[],count:function(){return this.flatten().length;},each:function(t){for(var e=0,n=this.length;e<n;e++)t.call(this,this[e],e,this);return this;},eq:function(t){var e=this.context;return e.length>t?new B(e[t],this[t]):null;},filter:function(t){var e=[];if(o.filter)e=o.filter.call(this,t,this);else for(var n=0,a=this.length;n<a;n++)t.call(this,this[n],n,this)&&e.push(this[n]);return new B(this.context,e);},flatten:function(){var t=[];return new B(this.context,t.concat.apply(t,this.toArray()));},join:o.join,indexOf:o.indexOf||function(t,e){for(var n=e||0,a=this.length;n<a;n++)if(this[n]===t)return n;return-1;},iterator:function(t,e,n,a){var r,o,i,l,s,u,c,f,d=[],h=this.context,p=this.selector;for("string"==typeof t&&(a=n,n=e,e=t,t=!1),o=0,i=h.length;o<i;o++){var g=new B(h[o]);if("table"===e)(r=n.call(g,h[o],o))!==N&&d.push(r);else if("columns"===e||"rows"===e)(r=n.call(g,h[o],this[o],o))!==N&&d.push(r);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(c=this[o],"column-rows"===e&&(u=Fe(h[o],p.opts)),l=0,s=c.length;l<s;l++)f=c[l],(r="cell"===e?n.call(g,h[o],f.row,f.column,o,l):n.call(g,h[o],f,o,l,u))!==N&&d.push(r);}return d.length||a?((t=(a=new B(h,t?d.concat.apply([],d):d)).selector).rows=p.rows,t.cols=p.cols,t.opts=p.opts,a):this;},lastIndexOf:o.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments);},length:0,map:function(t){var e=[];if(o.map)e=o.map.call(this,t,this);else for(var n=0,a=this.length;n<a;n++)e.push(t.call(this,this[n],n));return new B(this.context,e);},pluck:function(t){var e=C.util.get(t);return this.map(function(t){return e(t);});},pop:o.pop,push:o.push,reduce:o.reduce||function(t,e){return et(this,t,e,0,this.length,1);},reduceRight:o.reduceRight||function(t,e){return et(this,t,e,this.length-1,-1,-1);},reverse:o.reverse,selector:null,shift:o.shift,slice:function(){return new B(this.context,this);},sort:o.sort,splice:o.splice,toArray:function(){return o.slice.call(this);},to$:function(){return P(this);},toJQuery:function(){return P(this);},unique:function(){return new B(this.context,z(this));},unshift:o.unshift}),B.extend=function(t,e,n){if(n.length&&e&&(e instanceof B||e.__dt_wrapper))for(var a,r=0,o=n.length;r<o;r++)e[(a=n[r]).name]="function"===a.type?function(e,n,a){return function(){var t=n.apply(e,arguments);return B.extend(t,t,a.methodExt),t;};}(t,a.val,a):"object"===a.type?{}:a.val,e[a.name].__dt_wrapper=!0,B.extend(t,e[a.name],a.propExt);},B.register=e=function(t,e){if(Array.isArray(t))for(var n=0,a=t.length;n<a;n++)B.register(t[n],e);else for(var r=t.split("."),o=Ie,i=0,l=r.length;i<l;i++){var s,u,c=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n].name===e)return t[n];return null;}(o,u=(s=-1!==r[i].indexOf("()"))?r[i].replace("()",""):r[i]);c||o.push(c={name:u,val:{},methodExt:[],propExt:[],type:"object"}),i===l-1?(c.val=e,c.type="function"==typeof e?"function":P.isPlainObject(e)?"object":"other"):o=s?c.methodExt:c.propExt;}},B.registerPlural=t=function(t,e,n){B.register(t,n),B.register(e,function(){var t=n.apply(this,arguments);return t===this?this:t instanceof B?t.length?Array.isArray(t[0])?new B(t.context,t[0]):t[0]:N:t;});},e("tables()",function(t){return t!==N&&null!==t?new B(ye(t,this.context)):this;}),e("table()",function(t){var t=this.tables(t),e=t.context;return e.length?new B(e[0]):t;}),t("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){return t.nTable;},1);}),t("tables().body()","table().body()",function(){return this.iterator("table",function(t){return t.nTBody;},1);}),t("tables().header()","table().header()",function(){return this.iterator("table",function(t){return t.nTHead;},1);}),t("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){return t.nTFoot;},1);}),t("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper;},1);}),e("draw()",function(e){return this.iterator("table",function(t){"page"===e?v(t):u(t,!1===(e="string"==typeof e?"full-hold"!==e:e));});}),e("page()",function(e){return e===N?this.page.info().page:this.iterator("table",function(t){Yt(t,e);});}),e("page.info()",function(t){var e,n,a,r,o;return 0===this.context.length?N:(n=(e=this.context[0])._iDisplayStart,a=e.oFeatures.bPaginate?e._iDisplayLength:-1,r=e.fnRecordsDisplay(),{page:(o=-1===a)?0:Math.floor(n/a),pages:o?1:Math.ceil(r/a),start:n,end:e.fnDisplayEnd(),length:a,recordsTotal:e.fnRecordsTotal(),recordsDisplay:r,serverSide:"ssp"===E(e)});}),e("page.len()",function(e){return e===N?0!==this.context.length?this.context[0]._iDisplayLength:N:this.iterator("table",function(t){Gt(t,e);});}),e("ajax.json()",function(){var t=this.context;if(0<t.length)return t[0].json;}),e("ajax.params()",function(){var t=this.context;if(0<t.length)return t[0].oAjaxData;}),e("ajax.reload()",function(e,n){return this.iterator("table",function(t){De(t,!1===n,e);});}),e("ajax.url()",function(e){var t=this.context;return e===N?0===t.length?N:(t=t[0]).ajax?P.isPlainObject(t.ajax)?t.ajax.url:t.ajax:t.sAjaxSource:this.iterator("table",function(t){P.isPlainObject(t.ajax)?t.ajax.url=e:t.ajax=e;});}),e("ajax.url().load()",function(e,n){return this.iterator("table",function(t){De(t,!1===n,e);});}),function(t,e){var n,a=[],r=t.aiDisplay,o=t.aiDisplayMaster,i=e.search,l=e.order,e=e.page;if("ssp"==E(t))return"removed"===i?[]:f(0,o.length);if("current"==e)for(u=t._iDisplayStart,c=t.fnDisplayEnd();u<c;u++)a.push(r[u]);else if("current"==l||"applied"==l){if("none"==i)a=o.slice();else if("applied"==i)a=r.slice();else if("removed"==i){for(var s={},u=0,c=r.length;u<c;u++)s[r[u]]=null;a=P.map(o,function(t){return s.hasOwnProperty(t)?null:t;});}}else if("index"==l||"original"==l)for(u=0,c=t.aoData.length;u<c;u++)("none"==i||-1===(n=P.inArray(u,r))&&"removed"==i||0<=n&&"applied"==i)&&a.push(u);return a;}),Le=(e("rows()",function(e,n){e===N?e="":P.isPlainObject(e)&&(n=e,e=""),n=Ce(n);var t=this.iterator("table",function(t){return _e("row",e,function(n){var t=d(n),a=r.aoData;if(null!==t&&!o)return[t];if(i=i||Fe(r,o),null!==t&&-1!==P.inArray(t,i))return[t];if(null===n||n===N||""===n)return i;if("function"==typeof n)return P.map(i,function(t){var e=a[t];return n(t,e._aData,e.nTr)?t:null;});if(n.nodeName)return t=n._DT_RowIndex,e=n._DT_CellIndex,t!==N?a[t]&&a[t].nTr===n?[t]:[]:e?a[e.row]&&a[e.row].nTr===n.parentNode?[e.row]:[]:(t=P(n).closest("*[data-dt-row]")).length?[t.data("dt-row")]:[];if("string"==typeof n&&"#"===n.charAt(0)){var e=r.aIds[n.replace(/^#/,"")];if(e!==N)return[e.idx];}t=_(m(r.aoData,i,"nTr"));return P(t).filter(n).map(function(){return this._DT_RowIndex;}).toArray();},r=t,o=n);var r,o,i;},1);return t.selector.rows=e,t.selector.opts=n,t;}),e("rows().nodes()",function(){return this.iterator("row",function(t,e){return t.aoData[e].nTr||N;},1);}),e("rows().data()",function(){return this.iterator(!0,"rows",function(t,e){return m(t.aoData,e,"_aData");},1);}),t("rows().cache()","row().cache()",function(n){return this.iterator("row",function(t,e){t=t.aoData[e];return"search"===n?t._aFilterData:t._aSortData;},1);}),t("rows().invalidate()","row().invalidate()",function(n){return this.iterator("row",function(t,e){bt(t,e,n);});}),t("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,e){return e;},1);}),t("rows().ids()","row().id()",function(t){for(var e=[],n=this.context,a=0,r=n.length;a<r;a++)for(var o=0,i=this[a].length;o<i;o++){var l=n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);e.push((!0===t?"#":"")+l);}return new B(n,e);}),t("rows().remove()","row().remove()",function(){var f=this;return this.iterator("row",function(t,e,n){var a,r,o,i,l,s,u=t.aoData,c=u[e];for(u.splice(e,1),a=0,r=u.length;a<r;a++)if(s=(l=u[a]).anCells,null!==l.nTr&&(l.nTr._DT_RowIndex=a),null!==s)for(o=0,i=s.length;o<i;o++)s[o]._DT_CellIndex.row=a;gt(t.aiDisplayMaster,e),gt(t.aiDisplay,e),gt(f[n],e,!1),0<t._iRecordsDisplay&&t._iRecordsDisplay--,Se(t);n=t.rowIdFn(c._aData);n!==N&&delete t.aIds[n];}),this.iterator("table",function(t){for(var e=0,n=t.aoData.length;e<n;e++)t.aoData[e].idx=e;}),this;}),e("rows.add()",function(o){var t=this.iterator("table",function(t){for(var e,n=[],a=0,r=o.length;a<r;a++)(e=o[a]).nodeName&&"TR"===e.nodeName.toUpperCase()?n.push(ut(t,e)[0]):n.push(x(t,e));return n;},1),e=this.rows(-1);return e.pop(),P.merge(e,t),e;}),e("row()",function(t,e){return we(this.rows(t,e));}),e("row().data()",function(t){var e,n=this.context;return t===N?n.length&&this.length?n[0].aoData[this[0]]._aData:N:((e=n[0].aoData[this[0]])._aData=t,Array.isArray(t)&&e.nTr&&e.nTr.id&&b(n[0].rowId)(t,e.nTr.id),bt(n[0],this[0],"data"),this);}),e("row().node()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]].nTr||null;}),e("row.add()",function(e){e instanceof P&&e.length&&(e=e[0]);var t=this.iterator("table",function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?ut(t,e)[0]:x(t,e);});return this.row(t[0]);}),P(y).on("plugin-init.dt",function(t,e){var n=new B(e),a="on-plugin-init",r="stateSaveParams."+a,o="destroy. "+a,a=(n.on(r,function(t,e,n){for(var a=e.rowIdFn,r=e.aoData,o=[],i=0;i<r.length;i++)r[i]._detailsShow&&o.push("#"+a(r[i]._aData));n.childRows=o;}),n.on(o,function(){n.off(r+" "+o);}),n.state.loaded());a&&a.childRows&&n.rows(P.map(a.childRows,function(t){return t.replace(/:/g,"\\:");})).every(function(){R(e,null,"requestChild",[this]);});}),C.util.throttle(function(t){de(t[0]);},500)),Re=function(t,e){var n=t.context;n.length&&(e=n[0].aoData[e!==N?e:t[0]])&&e._details&&(e._details.remove(),e._detailsShow=N,e._details=N,P(e.nTr).removeClass("dt-hasChild"),Le(n));},Pe="row().child",je=Pe+"()",Ne=(e(je,function(t,e){var n=this.context;return t===N?n.length&&this.length?n[0].aoData[this[0]]._details:N:(!0===t?this.child.show():!1===t?Re(this):n.length&&this.length&&Te(n[0],n[0].aoData[this[0]],t,e),this);}),e([Pe+".show()",je+".show()"],function(t){return xe(this,!0),this;}),e([Pe+".hide()",je+".hide()"],function(){return xe(this,!1),this;}),e([Pe+".remove()",je+".remove()"],function(){return Re(this),this;}),e(Pe+".isShown()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]]._detailsShow||!1;}),/^([^:]+):(name|visIdx|visible)$/),He=(e("columns()",function(n,a){n===N?n="":P.isPlainObject(n)&&(a=n,n=""),a=Ce(a);var t=this.iterator("table",function(t){return e=n,l=a,s=(i=t).aoColumns,u=H(s,"sName"),c=H(s,"nTh"),_e("column",e,function(n){var a,t=d(n);if(""===n)return f(s.length);if(null!==t)return[0<=t?t:s.length+t];if("function"==typeof n)return a=Fe(i,l),P.map(s,function(t,e){return n(e,Ae(i,e,0,0,a),c[e])?e:null;});var r="string"==typeof n?n.match(Ne):"";if(r)switch(r[2]){case"visIdx":case"visible":var e,o=parseInt(r[1],10);return o<0?[(e=P.map(s,function(t,e){return t.bVisible?e:null;}))[e.length+o]]:[rt(i,o)];case"name":return P.map(u,function(t,e){return t===r[1]?e:null;});default:return[];}return n.nodeName&&n._DT_CellIndex?[n._DT_CellIndex.column]:(t=P(c).filter(n).map(function(){return P.inArray(this,c);}).toArray()).length||!n.nodeName?t:(t=P(n).closest("*[data-dt-column]")).length?[t.data("dt-column")]:[];},i,l);var i,e,l,s,u,c;},1);return t.selector.cols=n,t.selector.opts=a,t;}),t("columns().header()","column().header()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTh;},1);}),t("columns().footer()","column().footer()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTf;},1);}),t("columns().data()","column().data()",function(){return this.iterator("column-rows",Ae,1);}),t("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].mData;},1);}),t("columns().cache()","column().cache()",function(o){return this.iterator("column-rows",function(t,e,n,a,r){return m(t.aoData,r,"search"===o?"_aFilterData":"_aSortData",e);},1);}),t("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,n,a,r){return m(t.aoData,r,"anCells",e);},1);}),t("columns().visible()","column().visible()",function(f,n){var e=this,t=this.iterator("column",function(t,e){if(f===N)return t.aoColumns[e].bVisible;var n,a,r=e,e=f,o=t.aoColumns,i=o[r],l=t.aoData;if(e===N)i.bVisible;else if(i.bVisible!==e){if(e)for(var s=P.inArray(!0,H(o,"bVisible"),r+1),u=0,c=l.length;u<c;u++)a=l[u].nTr,n=l[u].anCells,a&&a.insertBefore(n[r],n[s]||null);else P(H(t.aoData,"anCells",r)).detach();i.bVisible=e;}});return f!==N&&this.iterator("table",function(t){Dt(t,t.aoHeader),Dt(t,t.aoFooter),t.aiDisplay.length||P(t.nTBody).find("td[colspan]").attr("colspan",T(t)),de(t),e.iterator("column",function(t,e){R(t,null,"column-visibility",[t,e,f,n]);}),n!==N&&!n||e.columns.adjust();}),t;}),t("columns().indexes()","column().index()",function(n){return this.iterator("column",function(t,e){return"visible"===n?ot(t,e):e;},1);}),e("columns.adjust()",function(){return this.iterator("table",function(t){O(t);},1);}),e("column.index()",function(t,e){var n;if(0!==this.context.length)return n=this.context[0],"fromVisible"===t||"toData"===t?rt(n,e):"fromData"===t||"toVisible"===t?ot(n,e):void 0;}),e("column()",function(t,e){return we(this.columns(t,e));}),e("cells()",function(g,t,b){var a,r,o,i,l,s,e;return P.isPlainObject(g)&&(g.row===N?(b=g,g=null):(b=t,t=null)),P.isPlainObject(t)&&(b=t,t=null),null===t||t===N?this.iterator("table",function(t){return a=t,t=g,e=Ce(b),f=a.aoData,d=Fe(a,e),n=_(m(f,d,"anCells")),h=P(Y([],n)),p=a.aoColumns.length,_e("cell",t,function(t){var e,n="function"==typeof t;if(null===t||t===N||n){for(o=[],i=0,l=d.length;i<l;i++)for(r=d[i],s=0;s<p;s++)u={row:r,column:s},(!n||(c=f[r],t(u,S(a,r,s),c.anCells?c.anCells[s]:null)))&&o.push(u);return o;}return P.isPlainObject(t)?t.column!==N&&t.row!==N&&-1!==P.inArray(t.row,d)?[t]:[]:(e=h.filter(t).map(function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column};}).toArray()).length||!t.nodeName?e:(c=P(t).closest("*[data-dt-row]")).length?[{row:c.data("dt-row"),column:c.data("dt-column")}]:[];},a,e);var a,e,r,o,i,l,s,u,c,f,d,n,h,p;}):(e=b?{page:b.page,order:b.order,search:b.search}:{},a=this.columns(t,e),r=this.rows(g,e),e=this.iterator("table",function(t,e){var n=[];for(o=0,i=r[e].length;o<i;o++)for(l=0,s=a[e].length;l<s;l++)n.push({row:r[e][o],column:a[e][l]});return n;},1),e=b&&b.selected?this.cells(e,b):e,P.extend(e.selector,{cols:t,rows:g,opts:b}),e);}),t("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,n){t=t.aoData[e];return t&&t.anCells?t.anCells[n]:N;},1);}),e("cells().data()",function(){return this.iterator("cell",function(t,e,n){return S(t,e,n);},1);}),t("cells().cache()","cell().cache()",function(a){return a="search"===a?"_aFilterData":"_aSortData",this.iterator("cell",function(t,e,n){return t.aoData[e][a][n];},1);}),t("cells().render()","cell().render()",function(a){return this.iterator("cell",function(t,e,n){return S(t,e,n,a);},1);}),t("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,e,n){return{row:e,column:n,columnVisible:ot(t,n)};},1);}),t("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(t,e,n){bt(t,e,a,n);});}),e("cell()",function(t,e,n){return we(this.cells(t,e,n));}),e("cell().data()",function(t){var e=this.context,n=this[0];return t===N?e.length&&n.length?S(e[0],n[0].row,n[0].column):N:(ct(e[0],n[0].row,n[0].column,t),bt(e[0],n[0].row,"data",n[0].column),this);}),e("order()",function(e,t){var n=this.context;return e===N?0!==n.length?n[0].aaSorting:N:("number"==typeof e?e=[[e,t]]:e.length&&!Array.isArray(e[0])&&(e=Array.prototype.slice.call(arguments)),this.iterator("table",function(t){t.aaSorting=e.slice();}));}),e("order.listener()",function(e,n,a){return this.iterator("table",function(t){ue(t,e,n,a);});}),e("order.fixed()",function(e){var t;return e?this.iterator("table",function(t){t.aaSortingFixed=P.extend(!0,{},e);}):(t=(t=this.context).length?t[0].aaSortingFixed:N,Array.isArray(t)?{pre:t}:t);}),e(["columns().order()","column().order()"],function(a){var r=this;return this.iterator("table",function(t,e){var n=[];P.each(r[e],function(t,e){n.push([e,a]);}),t.aaSorting=n;});}),e("search()",function(e,n,a,r){var t=this.context;return e===N?0!==t.length?t[0].oPreviousSearch.sSearch:N:this.iterator("table",function(t){t.oFeatures.bFilter&&Rt(t,P.extend({},t.oPreviousSearch,{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===a||a,bCaseInsensitive:null===r||r}),1);});}),t("columns().search()","column().search()",function(a,r,o,i){return this.iterator("column",function(t,e){var n=t.aoPreSearchCols;if(a===N)return n[e].sSearch;t.oFeatures.bFilter&&(P.extend(n[e],{sSearch:a+"",bRegex:null!==r&&r,bSmart:null===o||o,bCaseInsensitive:null===i||i}),Rt(t,t.oPreviousSearch,1));});}),e("state()",function(){return this.context.length?this.context[0].oSavedState:null;}),e("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{});});}),e("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null;}),e("state.save()",function(){return this.iterator("table",function(t){de(t);});}),C.versionCheck=C.fnVersionCheck=function(t){for(var e,n,a=C.version.split("."),r=t.split("."),o=0,i=r.length;o<i;o++)if((e=parseInt(a[o],10)||0)!==(n=parseInt(r[o],10)||0))return n<e;return!0;},C.isDataTable=C.fnIsDataTable=function(t){var r=P(t).get(0),o=!1;return t instanceof C.Api||(P.each(C.settings,function(t,e){var n=e.nScrollHead?P("table",e.nScrollHead)[0]:null,a=e.nScrollFoot?P("table",e.nScrollFoot)[0]:null;e.nTable!==r&&n!==r&&a!==r||(o=!0);}),o);},C.tables=C.fnTables=function(e){var t=!1,n=(P.isPlainObject(e)&&(t=e.api,e=e.visible),P.map(C.settings,function(t){if(!e||P(t.nTable).is(":visible"))return t.nTable;}));return t?new B(n):n;},C.camelToHungarian=w,e("$()",function(t,e){e=this.rows(e).nodes(),e=P(e);return P([].concat(e.filter(t).toArray(),e.find(t).toArray()));}),P.each(["on","one","off"],function(t,n){e(n+"()",function(){var t=Array.prototype.slice.call(arguments),e=(t[0]=P.map(t[0].split(/\s/),function(t){return t.match(/\.dt\b/)?t:t+".dt";}).join(" "),P(this.tables().nodes()));return e[n].apply(e,t),this;});}),e("clear()",function(){return this.iterator("table",function(t){pt(t);});}),e("settings()",function(){return new B(this.context,this.context);}),e("init()",function(){var t=this.context;return t.length?t[0].oInit:null;}),e("data()",function(){return this.iterator("table",function(t){return H(t.aoData,"_aData");}).flatten();}),e("destroy()",function(c){return c=c||!1,this.iterator("table",function(e){var n,t=e.oClasses,a=e.nTable,r=e.nTBody,o=e.nTHead,i=e.nTFoot,l=P(a),r=P(r),s=P(e.nTableWrapper),u=P.map(e.aoData,function(t){return t.nTr;}),i=(e.bDestroying=!0,R(e,"aoDestroyCallback","destroy",[e]),c||new B(e).columns().visible(!0),s.off(".DT").find(":not(tbody *)").off(".DT"),P(j).off(".DT-"+e.sInstance),a!=o.parentNode&&(l.children("thead").detach(),l.append(o)),i&&a!=i.parentNode&&(l.children("tfoot").detach(),l.append(i)),e.aaSorting=[],e.aaSortingFixed=[],ce(e),P(u).removeClass(e.asStripeClasses.join(" ")),P("th, td",o).removeClass(t.sSortable+" "+t.sSortableAsc+" "+t.sSortableDesc+" "+t.sSortableNone),r.children().detach(),r.append(u),e.nTableWrapper.parentNode),o=c?"remove":"detach",u=(l[o](),s[o](),!c&&i&&(i.insertBefore(a,e.nTableReinsertBefore),l.css("width",e.sDestroyWidth).removeClass(t.sTable),n=e.asDestroyStripes.length)&&r.children().each(function(t){P(this).addClass(e.asDestroyStripes[t%n]);}),P.inArray(e,C.settings));-1!==u&&C.settings.splice(u,1);});}),P.each(["column","row","cell"],function(t,s){e(s+"s().every()",function(o){var i=this.selector.opts,l=this;return this.iterator(s,function(t,e,n,a,r){o.call(l[s](e,"cell"===s?n:i,"cell"===s?i:N),e,n,a,r);});});}),e("i18n()",function(t,e,n){var a=this.context[0],t=A(t)(a.oLanguage);return t===N&&(t=e),(t=n!==N&&P.isPlainObject(t)?t[n]!==N?t[n]:t._:t).replace("%d",n);}),C.version="1.13.3",C.settings=[],C.models={},C.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0,return:!1},C.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},C.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},C.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands);},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname));}catch(t){return{};}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e));}catch(t){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:P.extend({},C.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},i(C.defaults),C.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},i(C.defaults.column),C.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,jqXHR:null,json:N,oAjaxData:N,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==E(this)?+this._iRecordsTotal:this.aiDisplayMaster.length;},fnRecordsDisplay:function(){return"ssp"==E(this)?+this._iRecordsDisplay:this.aiDisplay.length;},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,a=this.aiDisplay.length,r=this.oFeatures,o=r.bPaginate;return r.bServerSide?!1===o||-1===t?e+a:Math.min(e+t,this._iRecordsDisplay):!o||a<n||-1===t?a:n;},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},C.ext=p={buttons:{},classes:{},build:"dt/jszip-2.5.0/dt-1.13.3/b-2.3.5/b-html5-2.3.5/r-2.4.0",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:C.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:C.version},P.extend(p,{afnFiltering:p.search,aTypes:p.type.detect,ofnSearch:p.type.search,oSort:p.type.order,afnSortData:p.order,aoFeatures:p.feature,oApi:p.internal,oStdClasses:p.classes,oPagination:p.pager}),P.extend(C.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_desc_disabled",sSortableDesc:"sorting_asc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""}),C.ext.pager);function Oe(t,e){var n=[],a=He.numbers_length,r=Math.floor(a/2);return e<=a?n=f(0,e):t<=r?((n=f(0,a-2)).push("ellipsis"),n.push(e-1)):((e-1-r<=t?n=f(e-(a-2),e):((n=f(t-r+2,t+r-1)).push("ellipsis"),n.push(e-1),n)).splice(0,0,"ellipsis"),n.splice(0,0,0)),n.DT_el="span",n;}P.extend(He,{simple:function(t,e){return["previous","next"];},full:function(t,e){return["first","previous","next","last"];},numbers:function(t,e){return[Oe(t,e)];},simple_numbers:function(t,e){return["previous",Oe(t,e),"next"];},full_numbers:function(t,e){return["first","previous",Oe(t,e),"next","last"];},first_last_numbers:function(t,e){return["first",Oe(t,e),"last"];},_numbers:Oe,numbers_length:7}),P.extend(!0,C.ext.renderer,{pageButton:{_:function(c,t,f,e,d,h){function p(t,e){for(var n,a,r,o=m.sPageButtonDisabled,i=function(t){Yt(c,t.data.action,!0);},l=0,s=e.length;l<s;l++)if(n=e[l],Array.isArray(n)){var u=P("<"+(n.DT_el||"div")+"/>").appendTo(t);p(u,n);}else{switch(g=null,b=n,a=c.iTabIndex,n){case"ellipsis":t.append('<span class="ellipsis">&#x2026;</span>');break;case"first":g=S.sFirst,0===d&&(a=-1,b+=" "+o);break;case"previous":g=S.sPrevious,0===d&&(a=-1,b+=" "+o);break;case"next":g=S.sNext,0!==h&&d!==h-1||(a=-1,b+=" "+o);break;case"last":g=S.sLast,0!==h&&d!==h-1||(a=-1,b+=" "+o);break;default:g=c.fnFormatNumber(n+1),b=d===n?m.sPageButtonActive:"";}null!==g&&(u=c.oInit.pagingTag||"a",r=-1!==b.indexOf(o),me(P("<"+u+">",{class:m.sPageButton+" "+b,"aria-controls":c.sTableId,"aria-disabled":r?"true":null,"aria-label":v[n],"aria-role":"link","aria-current":b===m.sPageButtonActive?"page":null,"data-dt-idx":n,tabindex:a,id:0===f&&"string"==typeof n?c.sTableId+"_"+n:null}).html(g).appendTo(t),{action:n},i));}}var g,b,n,m=c.oClasses,S=c.oLanguage.oPaginate,v=c.oLanguage.oAria.paginate||{};try{n=P(t).find(y.activeElement).data("dt-idx");}catch(t){}p(P(t).empty(),e),n!==N&&P(t).find("[data-dt-idx="+n+"]").trigger("focus");}}}),P.extend(C.ext.type.detect,[function(t,e){e=e.oLanguage.sDecimal;return l(t,e)?"num"+e:null;},function(t,e){var n;return(!t||t instanceof Date||X.test(t))&&(null!==(n=Date.parse(t))&&!isNaN(n)||h(t))?"date":null;},function(t,e){e=e.oLanguage.sDecimal;return l(t,e,!0)?"num-fmt"+e:null;},function(t,e){e=e.oLanguage.sDecimal;return a(t,e)?"html-num"+e:null;},function(t,e){e=e.oLanguage.sDecimal;return a(t,e,!0)?"html-num-fmt"+e:null;},function(t,e){return h(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null;}]),P.extend(C.ext.type.search,{html:function(t){return h(t)?t:"string"==typeof t?t.replace(U," ").replace(V,""):"";},string:function(t){return!h(t)&&"string"==typeof t?t.replace(U," "):t;}});function ke(t,e,n,a){var r;return 0===t||t&&"-"!==t?"number"==(r=typeof t)||"bigint"==r?t:+(t=(t=e?G(t,e):t).replace&&(n&&(t=t.replace(n,"")),a)?t.replace(a,""):t):-1/0;}function Me(n){P.each({num:function(t){return ke(t,n);},"num-fmt":function(t){return ke(t,n,q);},"html-num":function(t){return ke(t,n,V);},"html-num-fmt":function(t){return ke(t,n,V,q);}},function(t,e){p.type.order[t+n+"-pre"]=e,t.match(/^html\-/)&&(p.type.search[t+n]=p.type.search.html);});}P.extend(p.type.order,{"date-pre":function(t){t=Date.parse(t);return isNaN(t)?-1/0:t;},"html-pre":function(t){return h(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+"";},"string-pre":function(t){return h(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():"";},"string-asc":function(t,e){return t<e?-1:e<t?1:0;},"string-desc":function(t,e){return t<e?1:e<t?-1:0;}}),Me(""),P.extend(!0,C.ext.renderer,{header:{_:function(r,o,i,l){P(r.nTable).on("order.dt.DT",function(t,e,n,a){r===e&&(e=i.idx,o.removeClass(l.sSortAsc+" "+l.sSortDesc).addClass("asc"==a[e]?l.sSortAsc:"desc"==a[e]?l.sSortDesc:i.sSortingClass));});},jqueryui:function(r,o,i,l){P("<div/>").addClass(l.sSortJUIWrapper).append(o.contents()).append(P("<span/>").addClass(l.sSortIcon+" "+i.sSortingClassJUI)).appendTo(o),P(r.nTable).on("order.dt.DT",function(t,e,n,a){r===e&&(e=i.idx,o.removeClass(l.sSortAsc+" "+l.sSortDesc).addClass("asc"==a[e]?l.sSortAsc:"desc"==a[e]?l.sSortDesc:i.sSortingClass),o.find("span."+l.sSortIcon).removeClass(l.sSortJUIAsc+" "+l.sSortJUIDesc+" "+l.sSortJUI+" "+l.sSortJUIAscAllowed+" "+l.sSortJUIDescAllowed).addClass("asc"==a[e]?l.sSortJUIAsc:"desc"==a[e]?l.sSortJUIDesc:i.sSortingClassJUI));});}}});function We(t){return"string"==typeof(t=Array.isArray(t)?t.join(","):t)?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t;}function Ee(t,e,n,a,r){return j.moment?t[e](r):j.luxon?t[n](r):a?t[a](r):t;}var Be=!1;function Ue(t,e,n){var a;if(j.moment){if(!(a=j.moment.utc(t,e,n,!0)).isValid())return null;}else if(j.luxon){if(!(a=e&&"string"==typeof t?j.luxon.DateTime.fromFormat(t,e):j.luxon.DateTime.fromISO(t)).isValid)return null;a.setLocale(n);}else e?(Be||(0,_node_modules_pnotify_core_dist_PNotify_js__WEBPACK_IMPORTED_MODULE_3__.alert)("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),Be=!0):a=new Date(t);return a;}function Ve(s){return function(a,r,o,i){0===arguments.length?(o="en",a=r=null):1===arguments.length?(o="en",r=a,a=null):2===arguments.length&&(o=r,r=a,a=null);var l="datetime-"+r;return C.ext.type.order[l]||(C.ext.type.detect.unshift(function(t){return t===l&&l;}),C.ext.type.order[l+"-asc"]=function(t,e){t=t.valueOf(),e=e.valueOf();return t===e?0:t<e?-1:1;},C.ext.type.order[l+"-desc"]=function(t,e){t=t.valueOf(),e=e.valueOf();return t===e?0:e<t?-1:1;}),function(t,e){var n;return null!==t&&t!==N||(t="--now"===i?(n=new Date(),new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds()))):""),"type"===e?l:""===t?"sort"!==e?"":Ue("0000-01-01 00:00:00",null,o):!(null===r||a!==r||"sort"===e||"type"===e||t instanceof Date)||null===(n=Ue(t,a,o))?t:"sort"===e?n:(t=null===r?Ee(n,"toDate","toJSDate","")[s]():Ee(n,"format","toFormat","toISOString",r),"display"===e?We(t):t);};};}var Xe=",",Je=".";if(Intl)try{for(var qe=new Intl.NumberFormat().formatToParts(100000.1),n=0;n<qe.length;n++)"group"===qe[n].type?Xe=qe[n].value:"decimal"===qe[n].type&&(Je=qe[n].value);}catch(t){}function Ge(e){return function(){var t=[ge(this[C.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return C.ext.internal[e].apply(this,t);};}return C.datetime=function(n,a){var r="datetime-detect-"+n;a=a||"en",C.ext.type.order[r]||(C.ext.type.detect.unshift(function(t){var e=Ue(t,n,a);return!(""!==t&&!e)&&r;}),C.ext.type.order[r+"-pre"]=function(t){return Ue(t,n,a)||0;});},C.render={date:Ve("toLocaleDateString"),datetime:Ve("toLocaleString"),time:Ve("toLocaleTimeString"),number:function(a,r,o,i,l){return null!==a&&a!==N||(a=Xe),null!==r&&r!==N||(r=Je),{display:function(t){if("number"!=typeof t&&"string"!=typeof t)return t;if(""===t||null===t)return t;var e=t<0?"-":"",n=parseFloat(t);if(isNaN(n))return We(t);n=n.toFixed(o),t=Math.abs(n);n=parseInt(t,10),t=o?r+(t-n).toFixed(o).substring(2):"";return(e=0===n&&0===parseFloat(t)?"":e)+(i||"")+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+t+(l||"");}};},text:function(){return{display:We,filter:We};}},P.extend(C.ext.internal,{_fnExternApiFunc:Ge,_fnBuildAjax:Tt,_fnAjaxUpdate:xt,_fnAjaxParameters:At,_fnAjaxUpdateDraw:It,_fnAjaxDataSrc:Ft,_fnAddColumn:nt,_fnColumnOptions:at,_fnAdjustColumnSizing:O,_fnVisibleToColumnIndex:rt,_fnColumnIndexToVisible:ot,_fnVisbleColumns:T,_fnGetColumns:it,_fnColumnTypes:lt,_fnApplyColumnDefs:st,_fnHungarianMap:i,_fnCamelToHungarian:w,_fnLanguageCompat:Z,_fnBrowserDetect:tt,_fnAddData:x,_fnAddTr:ut,_fnNodeToDataIndex:function(t,e){return e._DT_RowIndex!==N?e._DT_RowIndex:null;},_fnNodeToColumnIndex:function(t,e,n){return P.inArray(n,t.aoData[e].anCells);},_fnGetCellData:S,_fnSetCellData:ct,_fnSplitObjNotation:dt,_fnGetObjectDataFn:A,_fnSetObjectDataFn:b,_fnGetDataMaster:ht,_fnClearTable:pt,_fnDeleteIndex:gt,_fnInvalidate:bt,_fnGetRowElements:mt,_fnCreateTr:St,_fnBuildHead:yt,_fnDrawHead:Dt,_fnDraw:v,_fnReDraw:u,_fnAddOptionsHtml:_t,_fnDetectHeader:Ct,_fnGetUniqueThs:wt,_fnFeatureHtmlFilter:Lt,_fnFilterComplete:Rt,_fnFilterCustom:Pt,_fnFilterColumn:jt,_fnFilter:Nt,_fnFilterCreateSearch:Ht,_fnEscapeRegex:Ot,_fnFilterData:Wt,_fnFeatureHtmlInfo:Ut,_fnUpdateInfo:Vt,_fnInfoMacros:Xt,_fnInitialise:Jt,_fnInitComplete:qt,_fnLengthChange:Gt,_fnFeatureHtmlLength:$t,_fnFeatureHtmlPaginate:zt,_fnPageChange:Yt,_fnFeatureHtmlProcessing:Zt,_fnProcessingDisplay:D,_fnFeatureHtmlTable:Kt,_fnScrollDraw:Qt,_fnApplyToChildren:k,_fnCalculateColumnWidths:ee,_fnThrottle:ne,_fnConvertToWidth:ae,_fnGetWidestNode:re,_fnGetMaxLenString:oe,_fnStringToCss:M,_fnSortFlatten:I,_fnSort:ie,_fnSortAria:le,_fnSortListener:se,_fnSortAttachListener:ue,_fnSortingClasses:ce,_fnSortData:fe,_fnSaveState:de,_fnLoadState:he,_fnImplementState:pe,_fnSettingsFromNode:ge,_fnLog:W,_fnMap:F,_fnBindAction:me,_fnCallbackReg:L,_fnCallbackFire:R,_fnLengthOverflow:Se,_fnRenderer:ve,_fnDataSource:E,_fnRowAttributes:vt,_fnExtend:be,_fnCalculateEnd:function(){}}),((P.fn.dataTable=C).$=P).fn.dataTableSettings=C.settings,P.fn.dataTableExt=C.ext,P.fn.DataTable=function(t){return P(this).dataTable(t).api();},P.each(C,function(t,e){P.fn.DataTable[t]=e;}),C;});/*! DataTables styling integration
 * ©2018 SpryMedia Ltd - datatables.net/license
 */!function(t){"function"==typeof define&&__webpack_require__.amdO?define(["jquery","datatables.net"],function(e){return t(e,window,document);}):"object"==typeof exports?module.exports=function(e,n){return e=e||window,(n=n||("undefined"!=typeof window?__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"):__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")(e))).fn.dataTable||__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(e,n),t(n,0,e.document);}:t(jQuery,window,document);}(function(e,n,t,u){"use strict";return e.fn.dataTable;});/*! Buttons for DataTables 2.3.5
 * ©2016-2023 SpryMedia Ltd - datatables.net/license
 */!function(e){"function"==typeof define&&__webpack_require__.amdO?define(["jquery","datatables.net"],function(t){return e(t,window,document);}):"object"==typeof exports?module.exports=function(t,n){return t=t||window,(n=n||("undefined"!=typeof window?__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"):__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")(t))).fn.dataTable||__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(t,n),e(n,t,t.document);}:e(jQuery,window,document);}(function(v,m,y,x){"use strict";var e=v.fn.dataTable,o=0,C=0,w=e.ext.buttons;function _(t,n,e){v.fn.animate?t.stop().fadeIn(n,e):(t.css("display","block"),e&&e.call(t));}function A(t,n,e){v.fn.animate?t.stop().fadeOut(n,e):(t.css("display","none"),e&&e.call(t));}function k(n,t){if(!(this instanceof k))return function(t){return new k(t,n).container();};!0===(t=void 0===t?{}:t)&&(t={}),Array.isArray(t)&&(t={buttons:t}),this.c=v.extend(!0,{},k.defaults,t),t.buttons&&(this.c.buttons=t.buttons),this.s={dt:new e.Api(n),buttons:[],listenKeys:"",namespace:"dtb"+o++},this.dom={container:v("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor();}v.extend(k.prototype,{action:function(t,n){t=this._nodeToButton(t);return n===x?t.conf.action:(t.conf.action=n,this);},active:function(t,n){var t=this._nodeToButton(t),e=this.c.dom.button.active,t=v(t.node);return n===x?t.hasClass(e):(t.toggleClass(e,n===x||n),this);},add:function(t,n,e){var o=this.s.buttons;if("string"==typeof n){for(var i=n.split("-"),s=this.s,r=0,a=i.length-1;r<a;r++)s=s.buttons[+i[r]];o=s.buttons,n=+i[i.length-1];}return this._expandButton(o,t,t!==x?t.split:x,(t===x||t.split===x||0===t.split.length)&&s!==x,!1,n),e!==x&&!0!==e||this._draw(),this;},collectionRebuild:function(t,n){var e=this._nodeToButton(t);if(n!==x){for(var o=e.buttons.length-1;0<=o;o--)this.remove(e.buttons[o].node);for(e.conf.prefixButtons&&n.unshift.apply(n,e.conf.prefixButtons),e.conf.postfixButtons&&n.push.apply(n,e.conf.postfixButtons),o=0;o<n.length;o++){var i=n[o];this._expandButton(e.buttons,i,i!==x&&i.config!==x&&i.config.split!==x,!0,i.parentConf!==x&&i.parentConf.split!==x,null,i.parentConf);}}this._draw(e.collection,e.buttons);},container:function(){return this.dom.container;},disable:function(t){t=this._nodeToButton(t);return v(t.node).addClass(this.c.dom.button.disabled).prop("disabled",!0),this;},destroy:function(){v("body").off("keyup."+this.s.namespace);for(var t=this.s.buttons.slice(),n=0,e=t.length;n<e;n++)this.remove(t[n].node);this.dom.container.remove();var o=this.s.dt.settings()[0];for(n=0,e=o.length;n<e;n++)if(o.inst===this){o.splice(n,1);break;}return this;},enable:function(t,n){return!1===n?this.disable(t):(n=this._nodeToButton(t),v(n.node).removeClass(this.c.dom.button.disabled).prop("disabled",!1),this);},index:function(t,n,e){n||(n="",e=this.s.buttons);for(var o=0,i=e.length;o<i;o++){var s=e[o].buttons;if(e[o].node===t)return n+o;if(s&&s.length){s=this.index(t,o+"-",s);if(null!==s)return s;}}return null;},name:function(){return this.c.name;},node:function(t){return t?(t=this._nodeToButton(t),v(t.node)):this.dom.container;},processing:function(t,n){var e=this.s.dt,o=this._nodeToButton(t);return n===x?v(o.node).hasClass("processing"):(v(o.node).toggleClass("processing",n),v(e.table().node()).triggerHandler("buttons-processing.dt",[n,e.button(t),e,v(t),o.conf]),this);},remove:function(t){var n=this._nodeToButton(t),e=this._nodeToHost(t),o=this.s.dt;if(n.buttons.length)for(var i=n.buttons.length-1;0<=i;i--)this.remove(n.buttons[i].node);n.conf.destroying=!0,n.conf.destroy&&n.conf.destroy.call(o.button(t),o,v(t),n.conf),this._removeKey(n.conf),v(n.node).remove();o=v.inArray(n,e);return e.splice(o,1),this;},text:function(t,n){function e(t){return"function"==typeof t?t(i,s,o.conf):t;}var o=this._nodeToButton(t),t=this.c.dom.collection.buttonLiner,t=(o.inCollection&&t&&t.tag?t:this.c.dom.buttonLiner).tag,i=this.s.dt,s=v(o.node);return n===x?e(o.conf.text):(o.conf.text=n,(t?s.children(t).eq(0).filter(":not(.dt-down-arrow)"):s).html(e(n)),this);},_constructor:function(){var e=this,t=this.s.dt,o=t.settings()[0],n=this.c.buttons;o._buttons||(o._buttons=[]),o._buttons.push({inst:this,name:this.c.name});for(var i=0,s=n.length;i<s;i++)this.add(n[i]);t.on("destroy",function(t,n){n===o&&e.destroy();}),v("body").on("keyup."+this.s.namespace,function(t){var n;y.activeElement&&y.activeElement!==y.body||(n=String.fromCharCode(t.keyCode).toLowerCase(),-1!==e.s.listenKeys.toLowerCase().indexOf(n)&&e._keypress(n,t));});},_addKey:function(t){t.key&&(this.s.listenKeys+=(v.isPlainObject(t.key)?t.key:t).key);},_draw:function(t,n){t||(t=this.dom.container,n=this.s.buttons),t.children().detach();for(var e=0,o=n.length;e<o;e++)t.append(n[e].inserter),t.append(" "),n[e].buttons&&n[e].buttons.length&&this._draw(n[e].collection,n[e].buttons);},_expandButton:function(t,n,e,o,i,s,r){var a=this.s.dt,l=!1,c=Array.isArray(n)?n:[n];n===x&&(c=Array.isArray(e)?e:[e]),n!==x&&n.split!==x&&(l=!0);for(var u=0,d=c.length;u<d;u++){var f=this._resolveExtends(c[u]);if(f)if(l=!(f.config===x||!f.config.split),Array.isArray(f))this._expandButton(t,f,p!==x&&p.conf!==x?p.conf.split:x,o,r!==x&&r.split!==x,s,r);else{var p=this._buildButton(f,o,f.split!==x||f.config!==x&&f.config.split!==x,i);if(p){if(s!==x&&null!==s?(t.splice(s,0,p),s++):t.push(p),p.conf.buttons||p.conf.split){if(p.collection=v("<"+(l?this.c.dom.splitCollection:this.c.dom.collection).tag+"/>"),p.conf._collection=p.collection,p.conf.split)for(var h=0;h<p.conf.split.length;h++)"object"==typeof p.conf.split[h]&&(p.conf.split[h].parent=r,p.conf.split[h].collectionLayout===x&&(p.conf.split[h].collectionLayout=p.conf.collectionLayout),p.conf.split[h].dropup===x&&(p.conf.split[h].dropup=p.conf.dropup),p.conf.split[h].fade===x)&&(p.conf.split[h].fade=p.conf.fade);else v(p.node).append(v('<span class="dt-down-arrow">'+this.c.dom.splitDropdown.text+"</span>"));this._expandButton(p.buttons,p.conf.buttons,p.conf.split,!l,l,s,p.conf);}p.conf.parent=r,f.init&&f.init.call(a.button(p.node),a,v(p.node),f),0;}}}},_buildButton:function(n,t,e,o){function i(t){return"function"==typeof t?t(h,l,n):t;}var s,r,a,l,c=this.c.dom.button,u=this.c.dom.buttonLiner,d=this.c.dom.collection,f=(this.c.dom.split,this.c.dom.splitCollection),p=this.c.dom.splitDropdownButton,h=this.s.dt;if(n.spacer)return r=v("<span></span>").addClass("dt-button-spacer "+n.style+" "+c.spacerClass).html(i(n.text)),{conf:n,node:r,inserter:r,buttons:[],inCollection:t,isSplit:e,inSplit:o,collection:null};if(!e&&o&&f?c=p:!e&&t&&d.button&&(c=d.button),!e&&o&&f.buttonLiner?u=f.buttonLiner:!e&&t&&d.buttonLiner&&(u=d.buttonLiner),n.available&&!n.available(h,n)&&!n.hasOwnProperty("html"))return!1;n.hasOwnProperty("html")?l=v(n.html):(s=function(t,n,e,o){o.action.call(n.button(e),t,n,e,o),v(n.table().node()).triggerHandler("buttons-action.dt",[n.button(e),n,e,o]);},r=n.tag||c.tag,a=n.clickBlurs===x||n.clickBlurs,l=v("<"+r+"/>").addClass(c.className).addClass(o?this.c.dom.splitDropdownButton.className:"").attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(t){t.preventDefault(),!l.hasClass(c.disabled)&&n.action&&s(t,h,l,n),a&&l.trigger("blur");}).on("keypress.dtb",function(t){13===t.keyCode&&(t.preventDefault(),!l.hasClass(c.disabled))&&n.action&&s(t,h,l,n);}),"a"===r.toLowerCase()&&l.attr("href","#"),"button"===r.toLowerCase()&&l.attr("type","button"),u.tag?(p=v("<"+u.tag+"/>").html(i(n.text)).addClass(u.className),"a"===u.tag.toLowerCase()&&p.attr("href","#"),l.append(p)):l.html(i(n.text)),!1===n.enabled&&l.addClass(c.disabled),n.className&&l.addClass(n.className),n.titleAttr&&l.attr("title",i(n.titleAttr)),n.attr&&l.attr(n.attr),n.namespace||(n.namespace=".dt-button-"+C++),n.config!==x&&n.config.split&&(n.split=n.config.split));var b,g,m,y,f=this.c.dom.buttonContainer,d=f&&f.tag?v("<"+f.tag+"/>").addClass(f.className).append(l):l;return this._addKey(n),this.c.buttonCreated&&(d=this.c.buttonCreated(n,d)),e&&((b=v("<div/>").addClass(this.c.dom.splitWrapper.className)).append(l),g=v.extend(n,{text:this.c.dom.splitDropdown.text,className:this.c.dom.splitDropdown.className,closeButton:!1,attr:{"aria-haspopup":"dialog","aria-expanded":!1},align:this.c.dom.splitDropdown.align,splitAlignClass:this.c.dom.splitDropdown.splitAlignClass}),this._addKey(g),m=function(t,n,e,o){w.split.action.call(n.button(b),t,n,e,o),v(n.table().node()).triggerHandler("buttons-action.dt",[n.button(e),n,e,o]),e.attr("aria-expanded",!0);},y=v('<button class="'+this.c.dom.splitDropdown.className+' dt-button"><span class="dt-btn-split-drop-arrow">'+this.c.dom.splitDropdown.text+"</span></button>").on("click.dtb",function(t){t.preventDefault(),t.stopPropagation(),y.hasClass(c.disabled)||m(t,h,y,g),a&&y.trigger("blur");}).on("keypress.dtb",function(t){13===t.keyCode&&(t.preventDefault(),y.hasClass(c.disabled)||m(t,h,y,g));}),0===n.split.length&&y.addClass("dtb-hide-drop"),b.append(y).attr(g.attr)),{conf:n,node:(e?b:l).get(0),inserter:e?b:d,buttons:[],inCollection:t,isSplit:e,inSplit:o,collection:null};},_nodeToButton:function(t,n){for(var e=0,o=(n=n||this.s.buttons).length;e<o;e++){if(n[e].node===t)return n[e];if(n[e].buttons.length){var i=this._nodeToButton(t,n[e].buttons);if(i)return i;}}},_nodeToHost:function(t,n){for(var e=0,o=(n=n||this.s.buttons).length;e<o;e++){if(n[e].node===t)return n;if(n[e].buttons.length){var i=this._nodeToHost(t,n[e].buttons);if(i)return i;}}},_keypress:function(s,r){var a;r._buttonsHandled||(a=function(t){for(var n,e,o=0,i=t.length;o<i;o++)n=t[o].conf,e=t[o].node,!n.key||n.key!==s&&(!v.isPlainObject(n.key)||n.key.key!==s||n.key.shiftKey&&!r.shiftKey||n.key.altKey&&!r.altKey||n.key.ctrlKey&&!r.ctrlKey||n.key.metaKey&&!r.metaKey)||(r._buttonsHandled=!0,v(e).click()),t[o].buttons.length&&a(t[o].buttons);})(this.s.buttons);},_removeKey:function(t){var n;t.key&&(t=(v.isPlainObject(t.key)?t.key:t).key,n=this.s.listenKeys.split(""),t=v.inArray(t,n),n.splice(t,1),this.s.listenKeys=n.join(""));},_resolveExtends:function(e){function t(t){for(var n=0;!v.isPlainObject(t)&&!Array.isArray(t);){if(t===x)return;if("function"==typeof t){if(!(t=t.call(i,s,e)))return!1;}else if("string"==typeof t){if(!w[t])return{html:t};t=w[t];}if(30<++n)throw"Buttons: Too many iterations";}return Array.isArray(t)?t:v.extend({},t);}var n,o,i=this,s=this.s.dt;for(e=t(e);e&&e.extend;){if(!w[e.extend])throw"Cannot extend unknown button type: "+e.extend;var r=t(w[e.extend]);if(Array.isArray(r))return r;if(!r)return!1;var a=r.className;e.config!==x&&r.config!==x&&(e.config=v.extend({},r.config,e.config)),e=v.extend({},r,e),a&&e.className!==a&&(e.className=a+" "+e.className),e.extend=r.extend;}var l=e.postfixButtons;if(l)for(e.buttons||(e.buttons=[]),n=0,o=l.length;n<o;n++)e.buttons.push(l[n]);var c=e.prefixButtons;if(c)for(e.buttons||(e.buttons=[]),n=0,o=c.length;n<o;n++)e.buttons.splice(n,0,c[n]);return e;},_popover:function(o,t,n,e){function i(){h=!0,A(v(".dt-button-collection"),b.fade,function(){v(this).detach();}),v(f.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()).attr("aria-expanded","false"),v("div.dt-button-background").off("click.dtb-collection"),k.background(!1,b.backgroundClassName,b.fade,g),v(m).off("resize.resize.dtb-collection"),v("body").off(".dtb-collection"),f.off("buttons-action.b-internal"),f.off("destroy");}var s,r,a,l,c,u,d,f=t,p=this.c,h=!1,b=v.extend({align:"button-left",autoClose:!1,background:!0,backgroundClassName:"dt-button-background",closeButton:!0,contentClassName:p.dom.collection.className,collectionLayout:"",collectionTitle:"",dropup:!1,fade:400,popoverTitle:"",rightAlignClassName:"dt-button-right",tag:p.dom.collection.tag},n),g=t.node();!1===o?i():((p=v(f.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes())).length&&(g.closest("div.dt-button-collection").length&&(g=p.eq(0)),i()),n=v(".dt-button",o).length,p="",3===n?p="dtb-b3":2===n?p="dtb-b2":1===n&&(p="dtb-b1"),s=v("<div/>").addClass("dt-button-collection").addClass(b.collectionLayout).addClass(b.splitAlignClass).addClass(p).css("display","none").attr({"aria-modal":!0,role:"dialog"}),o=v(o).addClass(b.contentClassName).attr("role","menu").appendTo(s),g.attr("aria-expanded","true"),g.parents("body")[0]!==y.body&&(g=y.body.lastChild),b.popoverTitle?s.prepend('<div class="dt-button-collection-title">'+b.popoverTitle+"</div>"):b.collectionTitle&&s.prepend('<div class="dt-button-collection-title">'+b.collectionTitle+"</div>"),b.closeButton&&s.prepend('<div class="dtb-popover-close">x</div>').addClass("dtb-collection-closeable"),_(s.insertAfter(g),b.fade),n=v(t.table().container()),d=s.css("position"),"container"!==b.span&&"dt-container"!==b.align||(g=g.parent(),s.css("width",n.width())),"absolute"===d?(p=v(g[0].offsetParent),t=g.position(),n=g.offset(),r=p.offset(),a=p.position(),l=m.getComputedStyle(p[0]),r.height=p.outerHeight(),r.width=p.width()+parseFloat(l.paddingLeft),r.right=r.left+r.width,r.bottom=r.top+r.height,p=t.top+g.outerHeight(),c=t.left,s.css({top:p,left:c}),l=m.getComputedStyle(s[0]),(u=s.offset()).height=s.outerHeight(),u.width=s.outerWidth(),u.right=u.left+u.width,u.bottom=u.top+u.height,u.marginTop=parseFloat(l.marginTop),u.marginBottom=parseFloat(l.marginBottom),b.dropup&&(p=t.top-u.height-u.marginTop-u.marginBottom),"button-right"!==b.align&&!s.hasClass(b.rightAlignClassName)||(c=t.left-u.width+g.outerWidth()),"dt-container"!==b.align&&"container"!==b.align||(c=c<t.left?-t.left:c)+u.width>r.width&&(c=r.width-u.width),a.left+c+u.width>v(m).width()&&(c=v(m).width()-u.width-a.left),n.left+c<0&&(c=-n.left),a.top+p+u.height>v(m).height()+v(m).scrollTop()&&(p=t.top-u.height-u.marginTop-u.marginBottom),a.top+p<v(m).scrollTop()&&(p=t.top+g.outerHeight()),s.css({top:p,left:c})):((d=function(){var t=v(m).height()/2,n=s.height()/2;s.css("marginTop",-1*(n=t<n?t:n));})(),v(m).on("resize.dtb-collection",function(){d();})),b.background&&k.background(!0,b.backgroundClassName,b.fade,b.backgroundHost||g),v("div.dt-button-background").on("click.dtb-collection",function(){}),b.autoClose&&setTimeout(function(){f.on("buttons-action.b-internal",function(t,n,e,o){o[0]!==g[0]&&i();});},0),v(s).trigger("buttons-popover.dt"),f.on("destroy",i),setTimeout(function(){h=!1,v("body").on("click.dtb-collection",function(t){var n,e;!h&&(n=v.fn.addBack?"addBack":"andSelf",e=v(t.target).parent()[0],!v(t.target).parents()[n]().filter(o).length&&!v(e).hasClass("dt-buttons")||v(t.target).hasClass("dt-button-background"))&&i();}).on("keyup.dtb-collection",function(t){27===t.keyCode&&i();}).on("keydown.dtb-collection",function(t){var n=v("a, button",o),e=y.activeElement;9===t.keyCode&&(-1===n.index(e)?(n.first().focus(),t.preventDefault()):t.shiftKey?e===n[0]&&(n.last().focus(),t.preventDefault()):e===n.last()[0]&&(n.first().focus(),t.preventDefault()));});},0));}}),k.background=function(t,n,e,o){e===x&&(e=400),o=o||y.body,t?_(v("<div/>").addClass(n).css("display","none").insertAfter(o),e):A(v("div."+n),e,function(){v(this).removeClass(n).remove();});},k.instanceSelector=function(t,i){var s,r,a;return t===x||null===t?v.map(i,function(t){return t.inst;}):(s=[],r=v.map(i,function(t){return t.name;}),(a=function(t){var n;if(Array.isArray(t))for(var e=0,o=t.length;e<o;e++)a(t[e]);else"string"==typeof t?-1!==t.indexOf(",")?a(t.split(",")):-1!==(n=v.inArray(t.trim(),r))&&s.push(i[n].inst):"number"==typeof t?s.push(i[t].inst):"object"==typeof t&&s.push(t);})(t),s);},k.buttonSelector=function(t,n){for(var c=[],u=function(t,n,e){for(var o,i,s=0,r=n.length;s<r;s++)(o=n[s])&&(t.push({node:o.node,name:o.conf.name,idx:i=e!==x?e+s:s+""}),o.buttons)&&u(t,o.buttons,i+"-");},d=function(t,n){var e=[],o=(u(e,n.s.buttons),v.map(e,function(t){return t.node;}));if(Array.isArray(t)||t instanceof v)for(s=0,r=t.length;s<r;s++)d(t[s],n);else if(null===t||t===x||"*"===t)for(s=0,r=e.length;s<r;s++)c.push({inst:n,node:e[s].node});else if("number"==typeof t)n.s.buttons[t]&&c.push({inst:n,node:n.s.buttons[t].node});else if("string"==typeof t){if(-1!==t.indexOf(","))for(var i=t.split(","),s=0,r=i.length;s<r;s++)d(i[s].trim(),n);else if(t.match(/^\d+(\-\d+)*$/)){var a=v.map(e,function(t){return t.idx;});c.push({inst:n,node:e[v.inArray(t,a)].node});}else if(-1!==t.indexOf(":name")){var l=t.replace(":name","");for(s=0,r=e.length;s<r;s++)e[s].name===l&&c.push({inst:n,node:e[s].node});}else v(o).filter(t).each(function(){c.push({inst:n,node:this});});}else"object"==typeof t&&t.nodeName&&-1!==(a=v.inArray(t,o))&&c.push({inst:n,node:o[a]});},e=0,o=t.length;e<o;e++){var i=t[e];d(n,i);}return c;},k.stripData=function(t,n){return"string"==typeof t&&(t=(t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")).replace(/<!\-\-.*?\-\->/g,""),n&&!n.stripHtml||(t=t.replace(/<[^>]*>/g,"")),n&&!n.trim||(t=t.replace(/^\s+|\s+$/g,"")),n&&!n.stripNewlines||(t=t.replace(/\n/g," ")),!n||n.decodeEntities)&&(l.innerHTML=t,t=l.value),t;},k.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:""},button:{tag:"button",className:"dt-button",active:"active",disabled:"disabled",spacerClass:""},buttonLiner:{tag:"span",className:""},split:{tag:"div",className:"dt-button-split"},splitWrapper:{tag:"div",className:"dt-btn-split-wrapper"},splitDropdown:{tag:"button",text:"&#x25BC;",className:"dt-btn-split-drop",align:"split-right",splitAlignClass:"dt-button-split-left"},splitDropdownButton:{tag:"button",className:"dt-btn-split-drop-button dt-button"},splitCollection:{tag:"div",className:"dt-button-split-collection"}}},v.extend(w,{collection:{text:function(t){return t.i18n("buttons.collection","Collection");},className:"buttons-collection",closeButton:!(k.version="2.3.5"),init:function(t,n,e){n.attr("aria-expanded",!1);},action:function(t,n,e,o){o._collection.parents("body").length?this.popover(!1,o):this.popover(o._collection,o),"keypress"===t.type&&v("a, button",o._collection).eq(0).focus();},attr:{"aria-haspopup":"dialog"}},split:{text:function(t){return t.i18n("buttons.split","Split");},className:"buttons-split",closeButton:!1,init:function(t,n,e){return n.attr("aria-expanded",!1);},action:function(t,n,e,o){this.popover(o._collection,o);},attr:{"aria-haspopup":"dialog"}},copy:function(t,n){if(w.copyHtml5)return"copyHtml5";},csv:function(t,n){if(w.csvHtml5&&w.csvHtml5.available(t,n))return"csvHtml5";},excel:function(t,n){if(w.excelHtml5&&w.excelHtml5.available(t,n))return"excelHtml5";},pdf:function(t,n){if(w.pdfHtml5&&w.pdfHtml5.available(t,n))return"pdfHtml5";},pageLength:function(t){var n=t.settings()[0].aLengthMenu,e=[],o=[];if(Array.isArray(n[0]))e=n[0],o=n[1];else for(var i=0;i<n.length;i++){var s=n[i];v.isPlainObject(s)?(e.push(s.value),o.push(s.label)):(e.push(s),o.push(s));}return{extend:"collection",text:function(t){return t.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},t.page.len());},className:"buttons-page-length",autoClose:!0,buttons:v.map(e,function(s,t){return{text:o[t],className:"button-page-length",action:function(t,n){n.page.len(s).draw();},init:function(t,n,e){function o(){i.active(t.page.len()===s);}var i=this;t.on("length.dt"+e.namespace,o),o();},destroy:function(t,n,e){t.off("length.dt"+e.namespace);}};}),init:function(t,n,e){var o=this;t.on("length.dt"+e.namespace,function(){o.text(e.text);});},destroy:function(t,n,e){t.off("length.dt"+e.namespace);}};},spacer:{style:"empty",spacer:!0,text:function(t){return t.i18n("buttons.spacer","");}}}),e.Api.register("buttons()",function(n,e){e===x&&(e=n,n=x),this.selector.buttonGroup=n;var t=this.iterator(!0,"table",function(t){if(t._buttons)return k.buttonSelector(k.instanceSelector(n,t._buttons),e);},!0);return t._groupSelector=n,t;}),e.Api.register("button()",function(t,n){t=this.buttons(t,n);return 1<t.length&&t.splice(1,t.length),t;}),e.Api.registerPlural("buttons().active()","button().active()",function(n){return n===x?this.map(function(t){return t.inst.active(t.node);}):this.each(function(t){t.inst.active(t.node,n);});}),e.Api.registerPlural("buttons().action()","button().action()",function(n){return n===x?this.map(function(t){return t.inst.action(t.node);}):this.each(function(t){t.inst.action(t.node,n);});}),e.Api.registerPlural("buttons().collectionRebuild()","button().collectionRebuild()",function(e){return this.each(function(t){for(var n=0;n<e.length;n++)"object"==typeof e[n]&&(e[n].parentConf=t);t.inst.collectionRebuild(t.node,e);});}),e.Api.register(["buttons().enable()","button().enable()"],function(n){return this.each(function(t){t.inst.enable(t.node,n);});}),e.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(t){t.inst.disable(t.node);});}),e.Api.register("button().index()",function(){var n=null;return this.each(function(t){t=t.inst.index(t.node);null!==t&&(n=t);}),n;}),e.Api.registerPlural("buttons().nodes()","button().node()",function(){var n=v();return v(this.each(function(t){n=n.add(t.inst.node(t.node));})),n;}),e.Api.registerPlural("buttons().processing()","button().processing()",function(n){return n===x?this.map(function(t){return t.inst.processing(t.node);}):this.each(function(t){t.inst.processing(t.node,n);});}),e.Api.registerPlural("buttons().text()","button().text()",function(n){return n===x?this.map(function(t){return t.inst.text(t.node);}):this.each(function(t){t.inst.text(t.node,n);});}),e.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(t){t.inst.node(t.node).trigger("click");});}),e.Api.register("button().popover()",function(n,e){return this.map(function(t){return t.inst._popover(n,this.button(this[0].node),e);});}),e.Api.register("buttons().containers()",function(){var i=v(),s=this._groupSelector;return this.iterator(!0,"table",function(t){if(t._buttons)for(var n=k.instanceSelector(s,t._buttons),e=0,o=n.length;e<o;e++)i=i.add(n[e].container());}),i;}),e.Api.register("buttons().container()",function(){return this.containers().eq(0);}),e.Api.register("button().add()",function(t,n,e){var o=this.context;return o.length&&(o=k.instanceSelector(this._groupSelector,o[0]._buttons)).length&&o[0].add(n,t,e),this.button(this._groupSelector,t);}),e.Api.register("buttons().destroy()",function(){return this.pluck("inst").unique().each(function(t){t.destroy();}),this;}),e.Api.registerPlural("buttons().remove()","buttons().remove()",function(){return this.each(function(t){t.inst.remove(t.node);}),this;}),e.Api.register("buttons.info()",function(t,n,e){var o=this;return!1===t?(this.off("destroy.btn-info"),A(v("#datatables_buttons_info"),400,function(){v(this).remove();}),clearTimeout(i),i=null):(i&&clearTimeout(i),v("#datatables_buttons_info").length&&v("#datatables_buttons_info").remove(),t=t?"<h2>"+t+"</h2>":"",_(v('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t).append(v("<div/>")["string"==typeof n?"html":"append"](n)).css("display","none").appendTo("body")),e!==x&&0!==e&&(i=setTimeout(function(){o.buttons.info(!1);},e)),this.on("destroy.btn-info",function(){o.buttons.info(!1);})),this;}),e.Api.register("buttons.exportData()",function(t){if(this.context.length)return c(new e.Api(this.context[0]),t);}),e.Api.register("buttons.exportInfo()",function(t){return{filename:n(t=t||{}),title:r(t),messageTop:a(this,t.message||t.messageTop,"top"),messageBottom:a(this,t.messageBottom,"bottom")};});var i,n=function(t){var n;return(n="function"==typeof(n="*"===t.filename&&"*"!==t.title&&t.title!==x&&null!==t.title&&""!==t.title?t.title:t.filename)?n():n)===x||null===n?null:(n=(n=-1!==n.indexOf("*")?n.replace("*",v("head > title").text()).trim():n).replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""))+(s(t.extension)||"");},s=function(t){return null===t||t===x?null:"function"==typeof t?t():t;},r=function(t){t=s(t.title);return null===t?null:-1!==t.indexOf("*")?t.replace("*",v("head > title").text()||"Exported data"):t;},a=function(t,n,e){n=s(n);return null===n?null:(t=v("caption",t.table().container()).eq(0),"*"===n?t.css("caption-side")!==e?null:t.length?t.text():"":n);},l=v("<textarea/>")[0],c=function(e,t){for(var o=v.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(t){return k.stripData(t,o);},footer:function(t){return k.stripData(t,o);},body:function(t){return k.stripData(t,o);}},customizeData:null},t),t=e.columns(o.columns).indexes().map(function(t){var n=e.column(t).header();return o.format.header(n.innerHTML,t,n);}).toArray(),n=e.table().footer()?e.columns(o.columns).indexes().map(function(t){var n=e.column(t).footer();return o.format.footer(n?n.innerHTML:"",t,n);}).toArray():null,i=v.extend({},o.modifier),i=(e.select&&"function"==typeof e.select.info&&i.selected===x&&e.rows(o.rows,v.extend({selected:!0},i)).any()&&v.extend(i,{selected:!0}),e.rows(o.rows,i).indexes().toArray()),i=e.cells(i,o.columns),s=i.render(o.orthogonal).toArray(),r=i.nodes().toArray(),a=t.length,l=[],c=0,u=0,d=0<a?s.length/a:0;u<d;u++){for(var f=[a],p=0;p<a;p++)f[p]=o.format.body(s[c],u,p,r[c]),c++;l[u]=f;}i={header:t,footer:n,body:l};return o.customizeData&&o.customizeData(i),i;};function t(t,n){t=new e.Api(t),n=n||t.init().buttons||e.defaults.buttons;return new k(t,n).container();}return v.fn.dataTable.Buttons=k,v.fn.DataTable.Buttons=k,v(y).on("init.dt plugin-init.dt",function(t,n){"dt"===t.namespace&&(t=n.oInit.buttons||e.defaults.buttons)&&!n._buttons&&new k(n,t).container();}),e.ext.feature.push({fnInit:t,cFeature:"B"}),e.ext.features&&e.ext.features.register("buttons",t),e;});/*! DataTables styling wrapper for Buttons
 * ©2018 SpryMedia Ltd - datatables.net/license
 */!function(n){"function"==typeof define&&__webpack_require__.amdO?define(["jquery","datatables.net-dt","datatables.net-buttons"],function(e){return n(e,window,document);}):"object"==typeof exports?module.exports=function(e,t){return e=e||window,(t=t||("undefined"!=typeof window?__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"):__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")(e))).fn.dataTable||__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net-dt'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(e,t),t.fn.dataTable.Buttons||__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net-buttons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(e,t),n(t,e,e.document);}:n(jQuery,window,document);}(function(e,n,t,a){"use strict";var u,e=e.fn.dataTable;return u=function(e,t,n,a){return e.fn.dataTable;},"function"==typeof define&&__webpack_require__.amdO?define(["jquery","datatables.net-dt","datatables.net-buttons"],function(e){return u(e);}):"object"==typeof exports?module.exports=function(e,t){return e=e||n,(t=t&&t.fn.dataTable?t:__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net-dt'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(e,t).$).fn.dataTable.Buttons||__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net-buttons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(e,t),u(t,0,e.document);}:u(jQuery),e;});/*!
 * HTML5 export buttons for Buttons and DataTables.
 * 2016 SpryMedia Ltd - datatables.net/license
 *
 * FileSaver.js (1.3.3) - MIT license
 * Copyright © 2016 Eli Grey - http://eligrey.com
 */!function(n){"function"==typeof define&&__webpack_require__.amdO?define(["jquery","datatables.net","datatables.net-buttons"],function(t){return n(t,window,document);}):"object"==typeof exports?module.exports=function(t,e,o,l){return t=t||window,(e=e||("undefined"!=typeof window?__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"):__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")(t))).fn.dataTable||__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(t,e),e.fn.dataTable.Buttons||__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net-buttons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(t,e),n(e,t,t.document);}:n(jQuery,window,document);}(function(C,T,y,t,e,k){"use strict";var o,l,n=C.fn.dataTable;function S(){return o||T.JSZip;}function s(){return l||T.pdfMake;}n.Buttons.pdfMake=function(t){if(!t)return s();l=t;},n.Buttons.jszip=function(t){if(!t)return S();o=t;};function N(t){var e="Sheet1";return e=t.sheetName?t.sheetName.replace(/[\[\]\*\/\\\?\:]/g,""):e;}function u(t,e){for(var o=c(e),l=t.buttons.exportData(e.exportOptions),n=e.fieldBoundary,r=e.fieldSeparator,a=new RegExp(n,"g"),d=e.escapeChar!==k?e.escapeChar:"\\",p=function(t){for(var e="",o=0,l=t.length;o<l;o++)0<o&&(e+=r),e+=n?n+(""+t[o]).replace(a,d+n)+n:t[o];return e;},t=e.header?p(l.header)+o:"",e=e.footer&&l.footer?o+p(l.footer):"",i=[],s=0,f=l.body.length;s<f;s++)i.push(p(l.body[s]));return{str:t+i.join(o)+e,rows:i.length};}function f(){var t;return-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera")&&!!((t=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/))&&1<t.length&&+t[1]<603.1);}var O=function(d){var p,i,s,f,m,y,e,u,c,l,t;if(!(void 0===d||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent)))return t=d.document,p=function(){return d.URL||d.webkitURL||d;},i=t.createElementNS("http://www.w3.org/1999/xhtml","a"),s="download"in i,f=/constructor/i.test(d.HTMLElement)||d.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent),y=function(t){(d.setImmediate||d.setTimeout)(function(){throw t;},0);},e=4e4,u=function(t){setTimeout(function(){"string"==typeof t?p().revokeObjectURL(t):t.remove();},e);},c=function(t){return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t;},t=(l=function(t,o,e){e||(t=c(t));var l,n,r=this,e="application/octet-stream"===t.type,a=function(){for(var t=r,e="writestart progress write writeend".split(" "),o=void 0,l=(e=[].concat(e)).length;l--;){var n=t["on"+e[l]];if("function"==typeof n)try{n.call(t,o||t);}catch(t){y(t);}}};r.readyState=r.INIT,s?(l=p().createObjectURL(t),setTimeout(function(){var t,e;i.href=l,i.download=o,t=i,e=new MouseEvent("click"),t.dispatchEvent(e),a(),u(l),r.readyState=r.DONE;})):(m||e&&f)&&d.FileReader?((n=new FileReader()).onloadend=function(){var t=m?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");d.open(t,"_blank")||(d.location.href=t),r.readyState=r.DONE,a();},n.readAsDataURL(t),r.readyState=r.INIT):(l=l||p().createObjectURL(t),!e&&d.open(l,"_blank")||(d.location.href=l),r.readyState=r.DONE,a(),u(l));}).prototype,"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,o){return e=e||t.name||"download",o||(t=c(t)),navigator.msSaveOrOpenBlob(t,e);}:(t.abort=function(){},t.readyState=t.INIT=0,t.WRITING=1,t.DONE=2,t.error=t.onwritestart=t.onprogress=t.onwrite=t.onabort=t.onerror=t.onwriteend=null,function(t,e,o){return new l(t,e||t.name||"download",o);});}("undefined"!=typeof self&&self||void 0!==T&&T||this.content),c=(n.fileSave=O,function(t){return t.newline||(navigator.userAgent.match(/Windows/)?"\r\n":"\n");});function z(t){for(var e="A".charCodeAt(0),o="Z".charCodeAt(0)-e+1,l="";0<=t;)l=String.fromCharCode(t%o+e)+l,t=Math.floor(t/o)-1;return l;}try{var D,A=new XMLSerializer();}catch(t){}function E(t,e,o){var l=t.createElement(e);return o&&(o.attr&&C(l).attr(o.attr),o.children&&C.each(o.children,function(t,e){l.appendChild(e);}),null!==o.text)&&o.text!==k&&l.appendChild(t.createTextNode(o.text)),l;}var _={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},R=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(t){return t/100;}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(t){return t/100;}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(t){return-1*t.replace(/[\(\)]/g,"");}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(t){return-1*t.replace(/[\(\)]/g,"");}},{match:/^\-?[\d,]+$/,style:63},{match:/^\-?[\d,]+\.\d{2}$/,style:64},{match:/^[\d]{4}\-[01][\d]\-[0123][\d]$/,style:67,fmt:function(t){return Math.round(25569+Date.parse(t)/864e5);}}];return n.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(t){return t.i18n("buttons.copy","Copy");},action:function(t,e,o,l){this.processing(!0);var n=this,r=u(e,l),a=e.buttons.exportInfo(l),d=c(l),p=r.str,i=C("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0}),d=(a.title&&(p=a.title+d+d+p),a.messageTop&&(p=a.messageTop+d+d+p),a.messageBottom&&(p=p+d+d+a.messageBottom),l.customize&&(p=l.customize(p,l,e)),C("<textarea readonly/>").val(p).appendTo(i));if(y.queryCommandSupported("copy")){i.appendTo(e.table().container()),d[0].focus(),d[0].select();try{var s=y.execCommand("copy");if(i.remove(),s)return e.buttons.info(e.i18n("buttons.copyTitle","Copy to clipboard"),e.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},r.rows),2e3),void this.processing(!1);}catch(t){}}function f(){m.off("click.buttons-copy"),C(y).off(".buttons-copy"),e.buttons.info(!1);}var a=C("<span>"+e.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(i),m=(e.buttons.info(e.i18n("buttons.copyTitle","Copy to clipboard"),a,0),d[0].focus(),d[0].select(),C(a).closest(".dt-button-info"));m.on("click.buttons-copy",f),C(y).on("keydown.buttons-copy",function(t){27===t.keyCode&&(f(),n.processing(!1));}).on("copy.buttons-copy cut.buttons-copy",function(){f(),n.processing(!1);});},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"},n.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return T.FileReader!==k&&T.Blob;},text:function(t){return t.i18n("buttons.csv","CSV");},action:function(t,e,o,l){this.processing(!0);var n=u(e,l).str,r=e.buttons.exportInfo(l),a=l.charset;l.customize&&(n=l.customize(n,l,e)),a=!1!==a?(a=a||y.characterSet||y.charset)&&";charset="+a:"",l.bom&&(n=String.fromCharCode(65279)+n),O(new Blob([n],{type:"text/csv"+a}),r.filename,!0),this.processing(!1);},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1},n.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return T.FileReader!==k&&S()!==k&&!f()&&A;},text:function(t){return t.i18n("buttons.excel","Excel");},action:function(t,e,o,s){this.processing(!0);function l(t){return t=_[t],C.parseXML(t);}function n(t){m=E(u,"row",{attr:{r:f=y+1}});for(var e=0,o=t.length;e<o;e++){var l=z(e)+""+f,n=null;if(null===t[e]||t[e]===k||""===t[e]){if(!0!==s.createEmptyCells)continue;t[e]="";}var r=t[e];t[e]="function"==typeof t[e].trim?t[e].trim():t[e];for(var a=0,d=R.length;a<d;a++){var p=R[a];if(t[e].match&&!t[e].match(/^0\d+/)&&t[e].match(p.match)){var i=t[e].replace(/[^\d\.\-]/g,"");p.fmt&&(i=p.fmt(i)),n=E(u,"c",{attr:{r:l,s:p.style},children:[E(u,"v",{text:i})]});break;}}n=n||("number"==typeof t[e]||t[e].match&&t[e].match(/^-?\d+(\.\d+)?([eE]\-?\d+)?$/)&&!t[e].match(/^0\d+/)?E(u,"c",{attr:{t:"n",r:l},children:[E(u,"v",{text:t[e]})]}):(r=r.replace?r.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""):r,E(u,"c",{attr:{t:"inlineStr",r:l},children:{row:E(u,"is",{children:{row:E(u,"t",{text:r,attr:{"xml:space":"preserve"}})}})}}))),m.appendChild(n);}c.appendChild(m),y++;}function r(t,e){var o=C("mergeCells",u);o[0].appendChild(E(u,"mergeCell",{attr:{ref:"A"+t+":"+z(e)+t}})),o.attr("count",parseFloat(o.attr("count"))+1),C("row:eq("+(t-1)+") c",u).attr("s","51");}var a,f,m,d=this,y=0,u=l("xl/worksheets/sheet1.xml"),c=u.getElementsByTagName("sheetData")[0],p={_rels:{".rels":l("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":l("xl/_rels/workbook.xml.rels")},"workbook.xml":l("xl/workbook.xml"),"styles.xml":l("xl/styles.xml"),worksheets:{"sheet1.xml":u}},"[Content_Types].xml":l("[Content_Types].xml")},i=e.buttons.exportData(s.exportOptions),I=(s.customizeData&&s.customizeData(i),e.buttons.exportInfo(s));I.title&&(n([I.title]),r(y,i.header.length-1)),I.messageTop&&(n([I.messageTop]),r(y,i.header.length-1)),s.header&&(n(i.header),C("row:last c",u).attr("s","2"));for(var F=y,x=0,h=i.body.length;x<h;x++)n(i.body[x]);a=y,s.footer&&i.footer&&(n(i.footer),C("row:last c",u).attr("s","2")),I.messageBottom&&(n([I.messageBottom]),r(y,i.header.length-1));var b=E(u,"cols");C("worksheet",u).prepend(b);for(var g=0,v=i.header.length;g<v;g++)b.appendChild(E(u,"col",{attr:{min:g+1,max:g+1,width:function(t,e){var o=t.header[e].length;t.footer&&t.footer[e].length>o&&(o=t.footer[e].length);for(var l=0,n=t.body.length;l<n;l++){var r,a=t.body[l][e];if(40<(o=o<(r=(-1!==(a=null!==a&&a!==k?a.toString():"").indexOf("\n")?((r=a.split("\n")).sort(function(t,e){return e.length-t.length;}),r[0]):a).length)?r:o))return 54;}return 6<(o*=1.35)?o:6;}(i,g),customWidth:1}}));var B=p.xl["workbook.xml"];C("sheets sheet",B).attr("name",N(s)),s.autoFilter&&(C("mergeCells",u).before(E(u,"autoFilter",{attr:{ref:"A"+F+":"+z(i.header.length-1)+a}})),C("definedNames",B).append(E(B,"definedName",{attr:{name:"_xlnm._FilterDatabase",localSheetId:"0",hidden:1},text:N(s)+"!$A$"+F+":"+z(i.header.length-1)+a}))),s.customize&&s.customize(p,s,e),0===C("mergeCells",u).children().length&&C("mergeCells",u).remove();var B=new(S())(),F={compression:"DEFLATE",type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},w=(!function s(f,t){D===k&&(D=-1===A.serializeToString(new T.DOMParser().parseFromString(_["xl/worksheets/sheet1.xml"],"text/xml")).indexOf("xmlns:r")),C.each(t,function(t,e){if(C.isPlainObject(e))s(f.folder(t),e);else{if(D){for(var o,l=e.childNodes[0],n=[],r=l.attributes.length-1;0<=r;r--){var a=l.attributes[r].nodeName,d=l.attributes[r].nodeValue;-1!==a.indexOf(":")&&(n.push({name:a,value:d}),l.removeAttribute(a));}for(r=0,o=n.length;r<o;r++){var p=e.createAttribute(n[r].name.replace(":","_dt_b_namespace_token_"));p.value=n[r].value,l.setAttributeNode(p);}}var i=A.serializeToString(e),i=(i=D?(i=(i=-1===i.indexOf("<?xml")?'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+i:i).replace(/_dt_b_namespace_token_/g,":")).replace(/xmlns:NS[\d]+="" NS[\d]+:/g,""):i).replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>");f.file(t,i);}});}(B,p),I.filename);175<w&&(w=w.substr(0,175)),B.generateAsync?B.generateAsync(F).then(function(t){O(t,w),d.processing(!1);}):(O(B.generate(F),w),this.processing(!1));},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*",createEmptyCells:!1,autoFilter:!1,sheetName:""},n.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return T.FileReader!==k&&s();},text:function(t){return t.i18n("buttons.pdf","PDF");},action:function(t,e,o,l){this.processing(!0);var n=e.buttons.exportData(l.exportOptions),r=e.buttons.exportInfo(l),a=[];l.header&&a.push(C.map(n.header,function(t){return{text:"string"==typeof t?t:t+"",style:"tableHeader"};}));for(var d=0,p=n.body.length;d<p;d++)a.push(C.map(n.body[d],function(t){return{text:"string"==typeof(t=null!==t&&t!==k?t:"")?t:t+"",style:d%2?"tableBodyEven":"tableBodyOdd"};}));l.footer&&n.footer&&a.push(C.map(n.footer,function(t){return{text:"string"==typeof t?t:t+"",style:"tableFooter"};}));var i={pageSize:l.pageSize,pageOrientation:l.orientation,content:[{table:{headerRows:1,body:a},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}},e=(r.messageTop&&i.content.unshift({text:r.messageTop,style:"message",margin:[0,0,0,12]}),r.messageBottom&&i.content.push({text:r.messageBottom,style:"message",margin:[0,0,0,12]}),r.title&&i.content.unshift({text:r.title,style:"title",margin:[0,0,0,12]}),l.customize&&l.customize(i,l,e),s().createPdf(i));"open"!==l.download||f()?e.download(r.filename):e.open(),this.processing(!1);},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,messageTop:"*",messageBottom:"*",customize:null,download:"download"},n;});/*! Responsive 2.4.0
 * 2014-2022 SpryMedia Ltd - datatables.net/license
 */!function(n){"function"==typeof define&&__webpack_require__.amdO?define(["jquery","datatables.net"],function(e){return n(e,window,document);}):"object"==typeof exports?module.exports=function(e,t){return e=e||window,(t=t||("undefined"!=typeof window?__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"):__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")(e))).fn.dataTable||__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(e,t),n(t,e,e.document);}:n(jQuery,window,document);}(function(f,m,o,h){"use strict";function d(e,t){if(!r.versionCheck||!r.versionCheck("1.10.10"))throw"DataTables Responsive requires DataTables 1.10.10 or newer";this.s={childNodeStore:{},columns:[],current:[],dt:new r.Api(e)},this.s.dt.settings()[0].responsive||(t&&"string"==typeof t.details?t.details={type:t.details}:t&&!1===t.details?t.details={type:!1}:t&&!0===t.details&&(t.details={type:"inline"}),this.c=f.extend(!0,{},d.defaults,r.defaults.responsive,t),(e.responsive=this)._constructor());}var r=f.fn.dataTable,e=(f.extend(d.prototype,{_constructor:function(){var s=this,i=this.s.dt,e=i.settings()[0],t=f(m).innerWidth(),e=(i.settings()[0]._responsive=this,f(m).on("resize.dtr orientationchange.dtr",r.util.throttle(function(){var e=f(m).innerWidth();e!==t&&(s._resize(),t=e);})),e.oApi._fnCallbackReg(e,"aoRowCreatedCallback",function(e,t,n){-1!==f.inArray(!1,s.s.current)&&f(">td, >th",e).each(function(e){e=i.column.index("toData",e);!1===s.s.current[e]&&f(this).css("display","none");});}),i.on("destroy.dtr",function(){i.off(".dtr"),f(i.table().body()).off(".dtr"),f(m).off("resize.dtr orientationchange.dtr"),i.cells(".dtr-control").nodes().to$().removeClass("dtr-control"),f.each(s.s.current,function(e,t){!1===t&&s._setColumnVis(e,!0);});}),this.c.breakpoints.sort(function(e,t){return e.width<t.width?1:e.width>t.width?-1:0;}),this._classLogic(),this._resizeAuto(),this.c.details);!1!==e.type&&(s._detailsInit(),i.on("column-visibility.dtr",function(){s._timer&&clearTimeout(s._timer),s._timer=setTimeout(function(){s._timer=null,s._classLogic(),s._resizeAuto(),s._resize(!0),s._redrawChildren();},100);}),i.on("draw.dtr",function(){s._redrawChildren();}),f(i.table().node()).addClass("dtr-"+e.type)),i.on("column-reorder.dtr",function(e,t,n){s._classLogic(),s._resizeAuto(),s._resize(!0);}),i.on("column-sizing.dtr",function(){s._resizeAuto(),s._resize();}),i.on("column-calc.dt",function(e,t){for(var n=s.s.current,i=0;i<n.length;i++){var r=t.visible.indexOf(i);!1===n[i]&&0<=r&&t.visible.splice(r,1);}}),i.on("preXhr.dtr",function(){var e=[];i.rows().every(function(){this.child.isShown()&&e.push(this.id(!0));}),i.one("draw.dtr",function(){s._resizeAuto(),s._resize(),i.rows(e).every(function(){s._detailsDisplay(this,!1);});});}),i.on("draw.dtr",function(){s._controlClass();}).on("init.dtr",function(e,t,n){"dt"===e.namespace&&(s._resizeAuto(),s._resize(),f.inArray(!1,s.s.current))&&i.columns.adjust();}),this._resize();},_childNodes:function(e,t,n){var i=t+"-"+n;if(this.s.childNodeStore[i])return this.s.childNodeStore[i];for(var r=[],s=e.cell(t,n).node().childNodes,o=0,d=s.length;o<d;o++)r.push(s[o]);return this.s.childNodeStore[i]=r;},_childNodesRestore:function(e,t,n){var i=t+"-"+n;if(this.s.childNodeStore[i]){for(var r=e.cell(t,n).node(),s=this.s.childNodeStore[i][0].parentNode.childNodes,o=[],d=0,a=s.length;d<a;d++)o.push(s[d]);for(var l=0,c=o.length;l<c;l++)r.appendChild(o[l]);this.s.childNodeStore[i]=h;}},_columnsVisiblity:function(n){for(var i=this.s.dt,e=this.s.columns,t=e.map(function(e,t){return{columnIdx:t,priority:e.priority};}).sort(function(e,t){return e.priority!==t.priority?e.priority-t.priority:e.columnIdx-t.columnIdx;}),r=f.map(e,function(e,t){return!1===i.column(t).visible()?"not-visible":(!e.auto||null!==e.minWidth)&&(!0===e.auto?"-":-1!==f.inArray(n,e.includeIn));}),s=0,o=0,d=r.length;o<d;o++)!0===r[o]&&(s+=e[o].minWidth);var a=i.settings()[0].oScroll,a=a.sY||a.sX?a.iBarWidth:0,l=i.table().container().offsetWidth-a-s;for(o=0,d=r.length;o<d;o++)e[o].control&&(l-=e[o].minWidth);var c=!1;for(o=0,d=t.length;o<d;o++){var u=t[o].columnIdx;"-"===r[u]&&!e[u].control&&e[u].minWidth&&(c||l-e[u].minWidth<0?r[u]=!(c=!0):r[u]=!0,l-=e[u].minWidth);}var h=!1;for(o=0,d=e.length;o<d;o++)if(!e[o].control&&!e[o].never&&!1===r[o]){h=!0;break;}for(o=0,d=e.length;o<d;o++)e[o].control&&(r[o]=h),"not-visible"===r[o]&&(r[o]=!1);return-1===f.inArray(!0,r)&&(r[0]=!0),r;},_classLogic:function(){function d(e,t,n,i){var r,s,o;if(n){if("max-"===n)for(r=a._find(t).width,s=0,o=l.length;s<o;s++)l[s].width<=r&&u(e,l[s].name);else if("min-"===n)for(r=a._find(t).width,s=0,o=l.length;s<o;s++)l[s].width>=r&&u(e,l[s].name);else if("not-"===n)for(s=0,o=l.length;s<o;s++)-1===l[s].name.indexOf(i)&&u(e,l[s].name);}else c[e].includeIn.push(t);}var a=this,l=this.c.breakpoints,i=this.s.dt,c=i.columns().eq(0).map(function(e){var t=this.column(e),n=t.header().className,e=i.settings()[0].aoColumns[e].responsivePriority,t=t.header().getAttribute("data-priority");return e===h&&(e=t===h||null===t?1e4:+t),{className:n,includeIn:[],auto:!1,control:!1,never:!!n.match(/\b(dtr\-)?never\b/),priority:e};}),u=function(e,t){e=c[e].includeIn;-1===f.inArray(t,e)&&e.push(t);};c.each(function(e,r){for(var t=e.className.split(" "),s=!1,n=0,i=t.length;n<i;n++){var o=t[n].trim();if("all"===o||"dtr-all"===o)return s=!0,void(e.includeIn=f.map(l,function(e){return e.name;}));if("none"===o||"dtr-none"===o||e.never)return void(s=!0);if("control"===o||"dtr-control"===o)return s=!0,void(e.control=!0);f.each(l,function(e,t){var n=t.name.split("-"),i=new RegExp("(min\\-|max\\-|not\\-)?("+n[0]+")(\\-[_a-zA-Z0-9])?"),i=o.match(i);i&&(s=!0,i[2]===n[0]&&i[3]==="-"+n[1]?d(r,t.name,i[1],i[2]+i[3]):i[2]!==n[0]||i[3]||d(r,t.name,i[1],i[2]));});}s||(e.auto=!0);}),this.s.columns=c;},_controlClass:function(){var e,t,n;"inline"===this.c.details.type&&(e=this.s.dt,t=this.s.current,n=f.inArray(!0,t),e.cells(null,function(e){return e!==n;},{page:"current"}).nodes().to$().filter(".dtr-control").removeClass("dtr-control"),e.cells(null,n,{page:"current"}).nodes().to$().addClass("dtr-control"));},_detailsDisplay:function(e,t){var n,i=this,r=this.s.dt,s=this.c.details;s&&!1!==s.type&&(n="string"==typeof s.renderer?d.renderer[s.renderer]():s.renderer,!0!==(s=s.display(e,t,function(){return n.call(i,r,e[0],i._detailsObj(e[0]));}))&&!1!==s||f(r.table().node()).triggerHandler("responsive-display.dt",[r,e,s,t]));},_detailsInit:function(){var n=this,i=this.s.dt,e=this.c.details,r=("inline"===e.type&&(e.target="td.dtr-control, th.dtr-control"),i.on("draw.dtr",function(){n._tabIndexes();}),n._tabIndexes(),f(i.table().body()).on("keyup.dtr","td, th",function(e){13===e.keyCode&&f(this).data("dtr-keyboard")&&f(this).click();}),e.target),e="string"==typeof r?r:"td, th";r===h&&null===r||f(i.table().body()).on("click.dtr mousedown.dtr mouseup.dtr",e,function(e){if(f(i.table().node()).hasClass("collapsed")&&-1!==f.inArray(f(this).closest("tr").get(0),i.rows().nodes().toArray())){if("number"==typeof r){var t=r<0?i.columns().eq(0).length+r:r;if(i.cell(this).index().column!==t)return;}t=i.row(f(this).closest("tr"));"click"===e.type?n._detailsDisplay(t,!1):"mousedown"===e.type?f(this).css("outline","none"):"mouseup"===e.type&&f(this).trigger("blur").css("outline","");}});},_detailsObj:function(n){var i=this,r=this.s.dt;return f.map(this.s.columns,function(e,t){if(!e.never&&!e.control)return{className:(e=r.settings()[0].aoColumns[t]).sClass,columnIndex:t,data:r.cell(n,t).render(i.c.orthogonal),hidden:r.column(t).visible()&&!i.s.current[t],rowIndex:n,title:null!==e.sTitle?e.sTitle:f(r.column(t).header()).text()};});},_find:function(e){for(var t=this.c.breakpoints,n=0,i=t.length;n<i;n++)if(t[n].name===e)return t[n];},_redrawChildren:function(){var n=this,i=this.s.dt;i.rows({page:"current"}).iterator("row",function(e,t){i.row(t);n._detailsDisplay(i.row(t),!0);});},_resize:function(n){for(var e,i=this,t=this.s.dt,r=f(m).innerWidth(),s=this.c.breakpoints,o=s[0].name,d=this.s.columns,a=this.s.current.slice(),l=s.length-1;0<=l;l--)if(r<=s[l].width){o=s[l].name;break;}var c=this._columnsVisiblity(o),u=(this.s.current=c,!1);for(l=0,e=d.length;l<e;l++)if(!1===c[l]&&!d[l].never&&!d[l].control&&!1==!t.column(l).visible()){u=!0;break;}f(t.table().node()).toggleClass("collapsed",u);var h=!1,p=0;t.columns().eq(0).each(function(e,t){!0===c[t]&&p++,!n&&c[t]===a[t]||(h=!0,i._setColumnVis(e,c[t]));}),this._redrawChildren(),h&&(f(t.table().node()).trigger("responsive-resize.dt",[t,this.s.current]),0===t.page.info().recordsDisplay)&&f("td",t.table().body()).eq(0).attr("colspan",p),i._controlClass();},_resizeAuto:function(){var e,t,n,i,r,s=this.s.dt,o=this.s.columns,d=this;this.c.auto&&-1!==f.inArray(!0,f.map(o,function(e){return e.auto;}))&&(f.isEmptyObject(this.s.childNodeStore)||f.each(this.s.childNodeStore,function(e){e=e.split("-");d._childNodesRestore(s,+e[0],+e[1]);}),s.table().node().offsetWidth,s.columns,e=s.table().node().cloneNode(!1),t=f(s.table().header().cloneNode(!1)).appendTo(e),i=f(s.table().body()).clone(!1,!1).empty().appendTo(e),e.style.width="auto",n=s.columns().header().filter(function(e){return s.column(e).visible();}).to$().clone(!1).css("display","table-cell").css("width","auto").css("min-width",0),f(i).append(f(s.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display",""),(i=s.table().footer())&&(i=f(i.cloneNode(!1)).appendTo(e),r=s.columns().footer().filter(function(e){return s.column(e).visible();}).to$().clone(!1).css("display","table-cell"),f("<tr/>").append(r).appendTo(i)),f("<tr/>").append(n).appendTo(t),"inline"===this.c.details.type&&f(e).addClass("dtr-inline collapsed"),f(e).find("[name]").removeAttr("name"),f(e).css("position","relative"),(r=f("<div/>").css({width:1,height:1,overflow:"hidden",clear:"both"}).append(e)).insertBefore(s.table().node()),n.each(function(e){e=s.column.index("fromVisible",e);o[e].minWidth=this.offsetWidth||0;}),r.remove());},_responsiveOnlyHidden:function(){var n=this.s.dt;return f.map(this.s.current,function(e,t){return!1===n.column(t).visible()||e;});},_setColumnVis:function(e,t){var n=this,i=this.s.dt,r=t?"":"none";f(i.column(e).header()).css("display",r).toggleClass("dtr-hidden",!t),f(i.column(e).footer()).css("display",r).toggleClass("dtr-hidden",!t),i.column(e).nodes().to$().css("display",r).toggleClass("dtr-hidden",!t),f.isEmptyObject(this.s.childNodeStore)||i.cells(null,e).indexes().each(function(e){n._childNodesRestore(i,e.row,e.column);});},_tabIndexes:function(){var e=this.s.dt,t=e.cells({page:"current"}).nodes().to$(),n=e.settings()[0],i=this.c.details.target;t.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"),("number"==typeof i?e.cells(null,i,{page:"current"}).nodes().to$():f(i="td:first-child, th:first-child"===i?">td:first-child, >th:first-child":i,e.rows({page:"current"}).nodes())).attr("tabIndex",n.iTabIndex).data("dtr-keyboard",1);}}),d.defaults={breakpoints:d.breakpoints=[{name:"desktop",width:1/0},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}],auto:!0,details:{display:(d.display={childRow:function(e,t,n){return t?f(e.node()).hasClass("parent")?(e.child(n(),"child").show(),!0):void 0:e.child.isShown()?(e.child(!1),f(e.node()).removeClass("parent"),!1):(e.child(n(),"child").show(),f(e.node()).addClass("parent"),!0);},childRowImmediate:function(e,t,n){return!t&&e.child.isShown()||!e.responsive.hasHidden()?(e.child(!1),f(e.node()).removeClass("parent"),!1):(e.child(n(),"child").show(),f(e.node()).addClass("parent"),!0);},modal:function(s){return function(e,t,n){var i,r;t?f("div.dtr-modal-content").empty().append(n()):(i=function(){r.remove(),f(o).off("keypress.dtr");},r=f('<div class="dtr-modal"/>').append(f('<div class="dtr-modal-display"/>').append(f('<div class="dtr-modal-content"/>').append(n())).append(f('<div class="dtr-modal-close">&times;</div>').click(function(){i();}))).append(f('<div class="dtr-modal-background"/>').click(function(){i();})).appendTo("body"),f(o).on("keyup.dtr",function(e){27===e.keyCode&&(e.stopPropagation(),i());})),s&&s.header&&f("div.dtr-modal-content").prepend("<h2>"+s.header(e)+"</h2>");};}}).childRow,renderer:(d.renderer={listHiddenNodes:function(){return function(i,e,t){var r=this,s=f('<ul data-dtr-index="'+e+'" class="dtr-details"/>'),o=!1;f.each(t,function(e,t){var n;t.hidden&&(n=t.className?'class="'+t.className+'"':"",f("<li "+n+' data-dtr-index="'+t.columnIndex+'" data-dt-row="'+t.rowIndex+'" data-dt-column="'+t.columnIndex+'"><span class="dtr-title">'+t.title+"</span> </li>").append(f('<span class="dtr-data"/>').append(r._childNodes(i,t.rowIndex,t.columnIndex))).appendTo(s),o=!0);});return!!o&&s;};},listHidden:function(){return function(e,t,n){n=f.map(n,function(e){var t=e.className?'class="'+e.className+'"':"";return e.hidden?"<li "+t+' data-dtr-index="'+e.columnIndex+'" data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><span class="dtr-title">'+e.title+'</span> <span class="dtr-data">'+e.data+"</span></li>":"";}).join("");return!!n&&f('<ul data-dtr-index="'+t+'" class="dtr-details"/>').append(n);};},tableAll:function(i){return i=f.extend({tableClass:""},i),function(e,t,n){n=f.map(n,function(e){return"<tr "+(e.className?'class="'+e.className+'"':"")+' data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>";}).join("");return f('<table class="'+i.tableClass+' dtr-details" width="100%"/>').append(n);};}}).listHidden(),target:0,type:"inline"},orthogonal:"display"},f.fn.dataTable.Api);return e.register("responsive()",function(){return this;}),e.register("responsive.index()",function(e){return{column:(e=f(e)).data("dtr-index"),row:e.parent().data("dtr-index")};}),e.register("responsive.rebuild()",function(){return this.iterator("table",function(e){e._responsive&&e._responsive._classLogic();});}),e.register("responsive.recalc()",function(){return this.iterator("table",function(e){e._responsive&&(e._responsive._resizeAuto(),e._responsive._resize());});}),e.register("responsive.hasHidden()",function(){var e=this.context[0];return!!e._responsive&&-1!==f.inArray(!1,e._responsive._responsiveOnlyHidden());}),e.registerPlural("columns().responsiveHidden()","column().responsiveHidden()",function(){return this.iterator("column",function(e,t){return!!e._responsive&&e._responsive._responsiveOnlyHidden()[t];},1);}),d.version="2.4.0",f.fn.dataTable.Responsive=d,f.fn.DataTable.Responsive=d,f(o).on("preInit.dt.dtr",function(e,t,n){"dt"===e.namespace&&(f(t.nTable).hasClass("responsive")||f(t.nTable).hasClass("dt-responsive")||t.oInit.responsive||r.defaults.responsive)&&!1!==(e=t.oInit.responsive)&&new d(t,f.isPlainObject(e)?e:{});}),r;});/*! DataTables styling wrapper for Responsive
 * © SpryMedia Ltd - datatables.net/license
 */(function(factory){if(typeof define==='function'&&__webpack_require__.amdO){// AMD
define(['jquery','datatables.net-dt','datatables.net-responsive'],function($){return factory($,window,document);});}else if(typeof exports==='object'){// CommonJS
module.exports=function(root,$){if(!root){// CommonJS environments without a window global must pass a
// root. This will give an error otherwise
root=window;}if(!$){$=typeof window!=='undefined'?// jQuery's factory checks for a global window
__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"):__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")(root);}if(!$.fn.dataTable){__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net-dt'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(root,$);}if(!$.fn.dataTable){__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net-responsive'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(root,$);}return factory($,root,root.document);};}else{// Browser
factory(jQuery,window,document);}})(function($,window,document,undefined){'use strict';var DataTable=$.fn.dataTable;return DataTable;});/*! Responsive 2.4.0
 * 2014-2022 SpryMedia Ltd - datatables.net/license
 */!function(n){"function"==typeof define&&__webpack_require__.amdO?define(["jquery","datatables.net"],function(e){return n(e,window,document);}):"object"==typeof exports?module.exports=function(e,t){return e=e||window,(t=t||("undefined"!=typeof window?__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"):__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")(e))).fn.dataTable||__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'datatables.net'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(e,t),n(t,e,e.document);}:n(jQuery,window,document);}(function(f,m,o,h){"use strict";function d(e,t){if(!r.versionCheck||!r.versionCheck("1.10.10"))throw"DataTables Responsive requires DataTables 1.10.10 or newer";this.s={childNodeStore:{},columns:[],current:[],dt:new r.Api(e)},this.s.dt.settings()[0].responsive||(t&&"string"==typeof t.details?t.details={type:t.details}:t&&!1===t.details?t.details={type:!1}:t&&!0===t.details&&(t.details={type:"inline"}),this.c=f.extend(!0,{},d.defaults,r.defaults.responsive,t),(e.responsive=this)._constructor());}var r=f.fn.dataTable,e=(f.extend(d.prototype,{_constructor:function(){var s=this,i=this.s.dt,e=i.settings()[0],t=f(m).innerWidth(),e=(i.settings()[0]._responsive=this,f(m).on("resize.dtr orientationchange.dtr",r.util.throttle(function(){var e=f(m).innerWidth();e!==t&&(s._resize(),t=e);})),e.oApi._fnCallbackReg(e,"aoRowCreatedCallback",function(e,t,n){-1!==f.inArray(!1,s.s.current)&&f(">td, >th",e).each(function(e){e=i.column.index("toData",e);!1===s.s.current[e]&&f(this).css("display","none");});}),i.on("destroy.dtr",function(){i.off(".dtr"),f(i.table().body()).off(".dtr"),f(m).off("resize.dtr orientationchange.dtr"),i.cells(".dtr-control").nodes().to$().removeClass("dtr-control"),f.each(s.s.current,function(e,t){!1===t&&s._setColumnVis(e,!0);});}),this.c.breakpoints.sort(function(e,t){return e.width<t.width?1:e.width>t.width?-1:0;}),this._classLogic(),this._resizeAuto(),this.c.details);!1!==e.type&&(s._detailsInit(),i.on("column-visibility.dtr",function(){s._timer&&clearTimeout(s._timer),s._timer=setTimeout(function(){s._timer=null,s._classLogic(),s._resizeAuto(),s._resize(!0),s._redrawChildren();},100);}),i.on("draw.dtr",function(){s._redrawChildren();}),f(i.table().node()).addClass("dtr-"+e.type)),i.on("column-reorder.dtr",function(e,t,n){s._classLogic(),s._resizeAuto(),s._resize(!0);}),i.on("column-sizing.dtr",function(){s._resizeAuto(),s._resize();}),i.on("column-calc.dt",function(e,t){for(var n=s.s.current,i=0;i<n.length;i++){var r=t.visible.indexOf(i);!1===n[i]&&0<=r&&t.visible.splice(r,1);}}),i.on("preXhr.dtr",function(){var e=[];i.rows().every(function(){this.child.isShown()&&e.push(this.id(!0));}),i.one("draw.dtr",function(){s._resizeAuto(),s._resize(),i.rows(e).every(function(){s._detailsDisplay(this,!1);});});}),i.on("draw.dtr",function(){s._controlClass();}).on("init.dtr",function(e,t,n){"dt"===e.namespace&&(s._resizeAuto(),s._resize(),f.inArray(!1,s.s.current))&&i.columns.adjust();}),this._resize();},_childNodes:function(e,t,n){var i=t+"-"+n;if(this.s.childNodeStore[i])return this.s.childNodeStore[i];for(var r=[],s=e.cell(t,n).node().childNodes,o=0,d=s.length;o<d;o++)r.push(s[o]);return this.s.childNodeStore[i]=r;},_childNodesRestore:function(e,t,n){var i=t+"-"+n;if(this.s.childNodeStore[i]){for(var r=e.cell(t,n).node(),s=this.s.childNodeStore[i][0].parentNode.childNodes,o=[],d=0,a=s.length;d<a;d++)o.push(s[d]);for(var l=0,c=o.length;l<c;l++)r.appendChild(o[l]);this.s.childNodeStore[i]=h;}},_columnsVisiblity:function(n){for(var i=this.s.dt,e=this.s.columns,t=e.map(function(e,t){return{columnIdx:t,priority:e.priority};}).sort(function(e,t){return e.priority!==t.priority?e.priority-t.priority:e.columnIdx-t.columnIdx;}),r=f.map(e,function(e,t){return!1===i.column(t).visible()?"not-visible":(!e.auto||null!==e.minWidth)&&(!0===e.auto?"-":-1!==f.inArray(n,e.includeIn));}),s=0,o=0,d=r.length;o<d;o++)!0===r[o]&&(s+=e[o].minWidth);var a=i.settings()[0].oScroll,a=a.sY||a.sX?a.iBarWidth:0,l=i.table().container().offsetWidth-a-s;for(o=0,d=r.length;o<d;o++)e[o].control&&(l-=e[o].minWidth);var c=!1;for(o=0,d=t.length;o<d;o++){var u=t[o].columnIdx;"-"===r[u]&&!e[u].control&&e[u].minWidth&&(c||l-e[u].minWidth<0?r[u]=!(c=!0):r[u]=!0,l-=e[u].minWidth);}var h=!1;for(o=0,d=e.length;o<d;o++)if(!e[o].control&&!e[o].never&&!1===r[o]){h=!0;break;}for(o=0,d=e.length;o<d;o++)e[o].control&&(r[o]=h),"not-visible"===r[o]&&(r[o]=!1);return-1===f.inArray(!0,r)&&(r[0]=!0),r;},_classLogic:function(){function d(e,t,n,i){var r,s,o;if(n){if("max-"===n)for(r=a._find(t).width,s=0,o=l.length;s<o;s++)l[s].width<=r&&u(e,l[s].name);else if("min-"===n)for(r=a._find(t).width,s=0,o=l.length;s<o;s++)l[s].width>=r&&u(e,l[s].name);else if("not-"===n)for(s=0,o=l.length;s<o;s++)-1===l[s].name.indexOf(i)&&u(e,l[s].name);}else c[e].includeIn.push(t);}var a=this,l=this.c.breakpoints,i=this.s.dt,c=i.columns().eq(0).map(function(e){var t=this.column(e),n=t.header().className,e=i.settings()[0].aoColumns[e].responsivePriority,t=t.header().getAttribute("data-priority");return e===h&&(e=t===h||null===t?1e4:+t),{className:n,includeIn:[],auto:!1,control:!1,never:!!n.match(/\b(dtr\-)?never\b/),priority:e};}),u=function(e,t){e=c[e].includeIn;-1===f.inArray(t,e)&&e.push(t);};c.each(function(e,r){for(var t=e.className.split(" "),s=!1,n=0,i=t.length;n<i;n++){var o=t[n].trim();if("all"===o||"dtr-all"===o)return s=!0,void(e.includeIn=f.map(l,function(e){return e.name;}));if("none"===o||"dtr-none"===o||e.never)return void(s=!0);if("control"===o||"dtr-control"===o)return s=!0,void(e.control=!0);f.each(l,function(e,t){var n=t.name.split("-"),i=new RegExp("(min\\-|max\\-|not\\-)?("+n[0]+")(\\-[_a-zA-Z0-9])?"),i=o.match(i);i&&(s=!0,i[2]===n[0]&&i[3]==="-"+n[1]?d(r,t.name,i[1],i[2]+i[3]):i[2]!==n[0]||i[3]||d(r,t.name,i[1],i[2]));});}s||(e.auto=!0);}),this.s.columns=c;},_controlClass:function(){var e,t,n;"inline"===this.c.details.type&&(e=this.s.dt,t=this.s.current,n=f.inArray(!0,t),e.cells(null,function(e){return e!==n;},{page:"current"}).nodes().to$().filter(".dtr-control").removeClass("dtr-control"),e.cells(null,n,{page:"current"}).nodes().to$().addClass("dtr-control"));},_detailsDisplay:function(e,t){var n,i=this,r=this.s.dt,s=this.c.details;s&&!1!==s.type&&(n="string"==typeof s.renderer?d.renderer[s.renderer]():s.renderer,!0!==(s=s.display(e,t,function(){return n.call(i,r,e[0],i._detailsObj(e[0]));}))&&!1!==s||f(r.table().node()).triggerHandler("responsive-display.dt",[r,e,s,t]));},_detailsInit:function(){var n=this,i=this.s.dt,e=this.c.details,r=("inline"===e.type&&(e.target="td.dtr-control, th.dtr-control"),i.on("draw.dtr",function(){n._tabIndexes();}),n._tabIndexes(),f(i.table().body()).on("keyup.dtr","td, th",function(e){13===e.keyCode&&f(this).data("dtr-keyboard")&&f(this).click();}),e.target),e="string"==typeof r?r:"td, th";r===h&&null===r||f(i.table().body()).on("click.dtr mousedown.dtr mouseup.dtr",e,function(e){if(f(i.table().node()).hasClass("collapsed")&&-1!==f.inArray(f(this).closest("tr").get(0),i.rows().nodes().toArray())){if("number"==typeof r){var t=r<0?i.columns().eq(0).length+r:r;if(i.cell(this).index().column!==t)return;}t=i.row(f(this).closest("tr"));"click"===e.type?n._detailsDisplay(t,!1):"mousedown"===e.type?f(this).css("outline","none"):"mouseup"===e.type&&f(this).trigger("blur").css("outline","");}});},_detailsObj:function(n){var i=this,r=this.s.dt;return f.map(this.s.columns,function(e,t){if(!e.never&&!e.control)return{className:(e=r.settings()[0].aoColumns[t]).sClass,columnIndex:t,data:r.cell(n,t).render(i.c.orthogonal),hidden:r.column(t).visible()&&!i.s.current[t],rowIndex:n,title:null!==e.sTitle?e.sTitle:f(r.column(t).header()).text()};});},_find:function(e){for(var t=this.c.breakpoints,n=0,i=t.length;n<i;n++)if(t[n].name===e)return t[n];},_redrawChildren:function(){var n=this,i=this.s.dt;i.rows({page:"current"}).iterator("row",function(e,t){i.row(t);n._detailsDisplay(i.row(t),!0);});},_resize:function(n){for(var e,i=this,t=this.s.dt,r=f(m).innerWidth(),s=this.c.breakpoints,o=s[0].name,d=this.s.columns,a=this.s.current.slice(),l=s.length-1;0<=l;l--)if(r<=s[l].width){o=s[l].name;break;}var c=this._columnsVisiblity(o),u=(this.s.current=c,!1);for(l=0,e=d.length;l<e;l++)if(!1===c[l]&&!d[l].never&&!d[l].control&&!1==!t.column(l).visible()){u=!0;break;}f(t.table().node()).toggleClass("collapsed",u);var h=!1,p=0;t.columns().eq(0).each(function(e,t){!0===c[t]&&p++,!n&&c[t]===a[t]||(h=!0,i._setColumnVis(e,c[t]));}),this._redrawChildren(),h&&(f(t.table().node()).trigger("responsive-resize.dt",[t,this.s.current]),0===t.page.info().recordsDisplay)&&f("td",t.table().body()).eq(0).attr("colspan",p),i._controlClass();},_resizeAuto:function(){var e,t,n,i,r,s=this.s.dt,o=this.s.columns,d=this;this.c.auto&&-1!==f.inArray(!0,f.map(o,function(e){return e.auto;}))&&(f.isEmptyObject(this.s.childNodeStore)||f.each(this.s.childNodeStore,function(e){e=e.split("-");d._childNodesRestore(s,+e[0],+e[1]);}),s.table().node().offsetWidth,s.columns,e=s.table().node().cloneNode(!1),t=f(s.table().header().cloneNode(!1)).appendTo(e),i=f(s.table().body()).clone(!1,!1).empty().appendTo(e),e.style.width="auto",n=s.columns().header().filter(function(e){return s.column(e).visible();}).to$().clone(!1).css("display","table-cell").css("width","auto").css("min-width",0),f(i).append(f(s.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display",""),(i=s.table().footer())&&(i=f(i.cloneNode(!1)).appendTo(e),r=s.columns().footer().filter(function(e){return s.column(e).visible();}).to$().clone(!1).css("display","table-cell"),f("<tr/>").append(r).appendTo(i)),f("<tr/>").append(n).appendTo(t),"inline"===this.c.details.type&&f(e).addClass("dtr-inline collapsed"),f(e).find("[name]").removeAttr("name"),f(e).css("position","relative"),(r=f("<div/>").css({width:1,height:1,overflow:"hidden",clear:"both"}).append(e)).insertBefore(s.table().node()),n.each(function(e){e=s.column.index("fromVisible",e);o[e].minWidth=this.offsetWidth||0;}),r.remove());},_responsiveOnlyHidden:function(){var n=this.s.dt;return f.map(this.s.current,function(e,t){return!1===n.column(t).visible()||e;});},_setColumnVis:function(e,t){var n=this,i=this.s.dt,r=t?"":"none";f(i.column(e).header()).css("display",r).toggleClass("dtr-hidden",!t),f(i.column(e).footer()).css("display",r).toggleClass("dtr-hidden",!t),i.column(e).nodes().to$().css("display",r).toggleClass("dtr-hidden",!t),f.isEmptyObject(this.s.childNodeStore)||i.cells(null,e).indexes().each(function(e){n._childNodesRestore(i,e.row,e.column);});},_tabIndexes:function(){var e=this.s.dt,t=e.cells({page:"current"}).nodes().to$(),n=e.settings()[0],i=this.c.details.target;t.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"),("number"==typeof i?e.cells(null,i,{page:"current"}).nodes().to$():f(i="td:first-child, th:first-child"===i?">td:first-child, >th:first-child":i,e.rows({page:"current"}).nodes())).attr("tabIndex",n.iTabIndex).data("dtr-keyboard",1);}}),d.defaults={breakpoints:d.breakpoints=[{name:"desktop",width:1/0},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}],auto:!0,details:{display:(d.display={childRow:function(e,t,n){return t?f(e.node()).hasClass("parent")?(e.child(n(),"child").show(),!0):void 0:e.child.isShown()?(e.child(!1),f(e.node()).removeClass("parent"),!1):(e.child(n(),"child").show(),f(e.node()).addClass("parent"),!0);},childRowImmediate:function(e,t,n){return!t&&e.child.isShown()||!e.responsive.hasHidden()?(e.child(!1),f(e.node()).removeClass("parent"),!1):(e.child(n(),"child").show(),f(e.node()).addClass("parent"),!0);},modal:function(s){return function(e,t,n){var i,r;t?f("div.dtr-modal-content").empty().append(n()):(i=function(){r.remove(),f(o).off("keypress.dtr");},r=f('<div class="dtr-modal"/>').append(f('<div class="dtr-modal-display"/>').append(f('<div class="dtr-modal-content"/>').append(n())).append(f('<div class="dtr-modal-close">&times;</div>').click(function(){i();}))).append(f('<div class="dtr-modal-background"/>').click(function(){i();})).appendTo("body"),f(o).on("keyup.dtr",function(e){27===e.keyCode&&(e.stopPropagation(),i());})),s&&s.header&&f("div.dtr-modal-content").prepend("<h2>"+s.header(e)+"</h2>");};}}).childRow,renderer:(d.renderer={listHiddenNodes:function(){return function(i,e,t){var r=this,s=f('<ul data-dtr-index="'+e+'" class="dtr-details"/>'),o=!1;f.each(t,function(e,t){var n;t.hidden&&(n=t.className?'class="'+t.className+'"':"",f("<li "+n+' data-dtr-index="'+t.columnIndex+'" data-dt-row="'+t.rowIndex+'" data-dt-column="'+t.columnIndex+'"><span class="dtr-title">'+t.title+"</span> </li>").append(f('<span class="dtr-data"/>').append(r._childNodes(i,t.rowIndex,t.columnIndex))).appendTo(s),o=!0);});return!!o&&s;};},listHidden:function(){return function(e,t,n){n=f.map(n,function(e){var t=e.className?'class="'+e.className+'"':"";return e.hidden?"<li "+t+' data-dtr-index="'+e.columnIndex+'" data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><span class="dtr-title">'+e.title+'</span> <span class="dtr-data">'+e.data+"</span></li>":"";}).join("");return!!n&&f('<ul data-dtr-index="'+t+'" class="dtr-details"/>').append(n);};},tableAll:function(i){return i=f.extend({tableClass:""},i),function(e,t,n){n=f.map(n,function(e){return"<tr "+(e.className?'class="'+e.className+'"':"")+' data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>";}).join("");return f('<table class="'+i.tableClass+' dtr-details" width="100%"/>').append(n);};}}).listHidden(),target:0,type:"inline"},orthogonal:"display"},f.fn.dataTable.Api);return e.register("responsive()",function(){return this;}),e.register("responsive.index()",function(e){return{column:(e=f(e)).data("dtr-index"),row:e.parent().data("dtr-index")};}),e.register("responsive.rebuild()",function(){return this.iterator("table",function(e){e._responsive&&e._responsive._classLogic();});}),e.register("responsive.recalc()",function(){return this.iterator("table",function(e){e._responsive&&(e._responsive._resizeAuto(),e._responsive._resize());});}),e.register("responsive.hasHidden()",function(){var e=this.context[0];return!!e._responsive&&-1!==f.inArray(!1,e._responsive._responsiveOnlyHidden());}),e.registerPlural("columns().responsiveHidden()","column().responsiveHidden()",function(){return this.iterator("column",function(e,t){return!!e._responsive&&e._responsive._responsiveOnlyHidden()[t];},1);}),d.version="2.4.0",f.fn.dataTable.Responsive=d,f.fn.DataTable.Responsive=d,f(o).on("preInit.dt.dtr",function(e,t,n){"dt"===e.namespace&&(f(t.nTable).hasClass("responsive")||f(t.nTable).hasClass("dt-responsive")||t.oInit.responsive||r.defaults.responsive)&&!1!==(e=t.oInit.responsive)&&new d(t,f.isPlainObject(e)?e:{});}),r;});// -------Datepicker-------
!function(t,e,i){!function(){var s,a,n,h="2.2.3",o="datepicker",r=".datepicker-here",c=!1,d='<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',l={classes:"",inline:!1,language:"ru",startDate:new Date(),firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"@",toggleSelected:!0,keyboardNav:!0,position:"bottom left",offset:12,view:"days",minView:"days",showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:",",range:!1,todayButton:!1,clearButton:!1,showEvent:"focus",autoClose:!1,monthsField:"monthsShort",prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:"",onShow:"",onHide:"",onChangeMonth:"",onChangeYear:"",onChangeDecade:"",onChangeView:"",onRenderCell:""},u={ctrlRight:[17,39],ctrlUp:[17,38],ctrlLeft:[17,37],ctrlDown:[17,40],shiftRight:[16,39],shiftUp:[16,38],shiftLeft:[16,37],shiftDown:[16,40],altUp:[18,38],altRight:[18,39],altLeft:[18,37],altDown:[18,40],ctrlShiftUp:[16,17,38]},m=function(t,a){this.el=t,this.$el=e(t),this.opts=e.extend(!0,{},l,a,this.$el.data()),s==i&&(s=e("body")),this.opts.startDate||(this.opts.startDate=new Date()),"INPUT"==this.el.nodeName&&(this.elIsInput=!0),this.opts.altField&&(this.$altField="string"==typeof this.opts.altField?e(this.opts.altField):this.opts.altField),this.inited=!1,this.visible=!1,this.silent=!1,this.currentDate=this.opts.startDate,this.currentView=this.opts.view,this._createShortCuts(),this.selectedDates=[],this.views={},this.keys=[],this.minRange="",this.maxRange="",this._prevOnSelectValue="",this.init();};n=m,n.prototype={VERSION:h,viewIndexes:["days","months","years"],init:function(){c||this.opts.inline||!this.elIsInput||this._buildDatepickersContainer(),this._buildBaseHtml(),this._defineLocale(this.opts.language),this._syncWithMinMaxDates(),this.elIsInput&&(this.opts.inline||(this._setPositionClasses(this.opts.position),this._bindEvents()),this.opts.keyboardNav&&!this.opts.onlyTimepicker&&this._bindKeyboardEvents(),this.$datepicker.on("mousedown",this._onMouseDownDatepicker.bind(this)),this.$datepicker.on("mouseup",this._onMouseUpDatepicker.bind(this))),this.opts.classes&&this.$datepicker.addClass(this.opts.classes),this.opts.timepicker&&(this.timepicker=new e.fn.datepicker.Timepicker(this,this.opts),this._bindTimepickerEvents()),this.opts.onlyTimepicker&&this.$datepicker.addClass("-only-timepicker-"),this.views[this.currentView]=new e.fn.datepicker.Body(this,this.currentView,this.opts),this.views[this.currentView].show(),this.nav=new e.fn.datepicker.Navigation(this,this.opts),this.view=this.currentView,this.$el.on("clickCell.adp",this._onClickCell.bind(this)),this.$datepicker.on("mouseenter",".datepicker--cell",this._onMouseEnterCell.bind(this)),this.$datepicker.on("mouseleave",".datepicker--cell",this._onMouseLeaveCell.bind(this)),this.inited=!0;},_createShortCuts:function(){this.minDate=this.opts.minDate?this.opts.minDate:new Date(-86399999136e5),this.maxDate=this.opts.maxDate?this.opts.maxDate:new Date(86399999136e5);},_bindEvents:function(){this.$el.on(this.opts.showEvent+".adp",this._onShowEvent.bind(this)),this.$el.on("mouseup.adp",this._onMouseUpEl.bind(this)),this.$el.on("blur.adp",this._onBlur.bind(this)),this.$el.on("keyup.adp",this._onKeyUpGeneral.bind(this)),e(t).on("resize.adp",this._onResize.bind(this)),e("body").on("mouseup.adp",this._onMouseUpBody.bind(this));},_bindKeyboardEvents:function(){this.$el.on("keydown.adp",this._onKeyDown.bind(this)),this.$el.on("keyup.adp",this._onKeyUp.bind(this)),this.$el.on("hotKey.adp",this._onHotKey.bind(this));},_bindTimepickerEvents:function(){this.$el.on("timeChange.adp",this._onTimeChange.bind(this));},isWeekend:function(t){return-1!==this.opts.weekends.indexOf(t);},_defineLocale:function(t){"string"==typeof t?(this.loc=e.fn.datepicker.language[t],this.loc||(console.warn("Can't find language \""+t+'" in Datepicker.language, will use "ru" instead'),this.loc=e.extend(!0,{},e.fn.datepicker.language.ru)),this.loc=e.extend(!0,{},e.fn.datepicker.language.ru,e.fn.datepicker.language[t])):this.loc=e.extend(!0,{},e.fn.datepicker.language.ru,t),this.opts.dateFormat&&(this.loc.dateFormat=this.opts.dateFormat),this.opts.timeFormat&&(this.loc.timeFormat=this.opts.timeFormat),""!==this.opts.firstDay&&(this.loc.firstDay=this.opts.firstDay),this.opts.timepicker&&(this.loc.dateFormat=[this.loc.dateFormat,this.loc.timeFormat].join(this.opts.dateTimeSeparator)),this.opts.onlyTimepicker&&(this.loc.dateFormat=this.loc.timeFormat);var i=this._getWordBoundaryRegExp;(this.loc.timeFormat.match(i("aa"))||this.loc.timeFormat.match(i("AA")))&&(this.ampm=!0);},_buildDatepickersContainer:function(){c=!0,s.append('<div class="datepickers-container" id="datepickers-container"></div>'),a=e("#datepickers-container");},_buildBaseHtml:function(){var t,i=e('<div class="datepicker-inline">');t="INPUT"==this.el.nodeName?this.opts.inline?i.insertAfter(this.$el):a:i.appendTo(this.$el),this.$datepicker=e(d).appendTo(t),this.$content=e(".datepicker--content",this.$datepicker),this.$nav=e(".datepicker--nav",this.$datepicker);},_triggerOnChange:function(){if(!this.selectedDates.length){if(""===this._prevOnSelectValue)return;return this._prevOnSelectValue="",this.opts.onSelect("","",this);}var t,e=this.selectedDates,i=n.getParsedDate(e[0]),s=this,a=new Date(i.year,i.month,i.date,i.hours,i.minutes);t=e.map(function(t){return s.formatDate(s.loc.dateFormat,t);}).join(this.opts.multipleDatesSeparator),(this.opts.multipleDates||this.opts.range)&&(a=e.map(function(t){var e=n.getParsedDate(t);return new Date(e.year,e.month,e.date,e.hours,e.minutes);})),this._prevOnSelectValue=t,this.opts.onSelect(t,a,this);},next:function(){var t=this.parsedDate,e=this.opts;switch(this.view){case"days":this.date=new Date(t.year,t.month+1,1),e.onChangeMonth&&e.onChangeMonth(this.parsedDate.month,this.parsedDate.year);break;case"months":this.date=new Date(t.year+1,t.month,1),e.onChangeYear&&e.onChangeYear(this.parsedDate.year);break;case"years":this.date=new Date(t.year+10,0,1),e.onChangeDecade&&e.onChangeDecade(this.curDecade);}},prev:function(){var t=this.parsedDate,e=this.opts;switch(this.view){case"days":this.date=new Date(t.year,t.month-1,1),e.onChangeMonth&&e.onChangeMonth(this.parsedDate.month,this.parsedDate.year);break;case"months":this.date=new Date(t.year-1,t.month,1),e.onChangeYear&&e.onChangeYear(this.parsedDate.year);break;case"years":this.date=new Date(t.year-10,0,1),e.onChangeDecade&&e.onChangeDecade(this.curDecade);}},formatDate:function(t,e){e=e||this.date;var i,s=t,a=this._getWordBoundaryRegExp,h=this.loc,o=n.getLeadingZeroNum,r=n.getDecade(e),c=n.getParsedDate(e),d=c.fullHours,l=c.hours,u=t.match(a("aa"))||t.match(a("AA")),m="am",p=this._replacer;switch(this.opts.timepicker&&this.timepicker&&u&&(i=this.timepicker._getValidHoursFromDate(e,u),d=o(i.hours),l=i.hours,m=i.dayPeriod),!0){case /@/.test(s):s=s.replace(/@/,e.getTime());case /aa/.test(s):s=p(s,a("aa"),m);case /AA/.test(s):s=p(s,a("AA"),m.toUpperCase());case /dd/.test(s):s=p(s,a("dd"),c.fullDate);case /d/.test(s):s=p(s,a("d"),c.date);case /DD/.test(s):s=p(s,a("DD"),h.days[c.day]);case /D/.test(s):s=p(s,a("D"),h.daysShort[c.day]);case /mm/.test(s):s=p(s,a("mm"),c.fullMonth);case /m/.test(s):s=p(s,a("m"),c.month+1);case /MM/.test(s):s=p(s,a("MM"),this.loc.months[c.month]);case /M/.test(s):s=p(s,a("M"),h.monthsShort[c.month]);case /ii/.test(s):s=p(s,a("ii"),c.fullMinutes);case /i/.test(s):s=p(s,a("i"),c.minutes);case /hh/.test(s):s=p(s,a("hh"),d);case /h/.test(s):s=p(s,a("h"),l);case /yyyy/.test(s):s=p(s,a("yyyy"),c.year);case /yyyy1/.test(s):s=p(s,a("yyyy1"),r[0]);case /yyyy2/.test(s):s=p(s,a("yyyy2"),r[1]);case /yy/.test(s):s=p(s,a("yy"),c.year.toString().slice(-2));}return s;},_replacer:function(t,e,i){return t.replace(e,function(t,e,s,a){return e+i+a;});},_getWordBoundaryRegExp:function(t){var e="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+e+")("+t+")($|<|"+e+")","g");},selectDate:function(t){var e=this,i=e.opts,s=e.parsedDate,a=e.selectedDates,h=a.length,o="";if(Array.isArray(t))return void t.forEach(function(t){e.selectDate(t);});if(t instanceof Date){if(this.lastSelectedDate=t,this.timepicker&&this.timepicker._setTime(t),e._trigger("selectDate",t),this.timepicker&&(t.setHours(this.timepicker.hours),t.setMinutes(this.timepicker.minutes)),"days"==e.view&&t.getMonth()!=s.month&&i.moveToOtherMonthsOnSelect&&(o=new Date(t.getFullYear(),t.getMonth(),1)),"years"==e.view&&t.getFullYear()!=s.year&&i.moveToOtherYearsOnSelect&&(o=new Date(t.getFullYear(),0,1)),o&&(e.silent=!0,e.date=o,e.silent=!1,e.nav._render()),i.multipleDates&&!i.range){if(h===i.multipleDates)return;e._isSelected(t)||e.selectedDates.push(t);}else i.range?2==h?(e.selectedDates=[t],e.minRange=t,e.maxRange=""):1==h?(e.selectedDates.push(t),e.maxRange?e.minRange=t:e.maxRange=t,n.bigger(e.maxRange,e.minRange)&&(e.maxRange=e.minRange,e.minRange=t),e.selectedDates=[e.minRange,e.maxRange]):(e.selectedDates=[t],e.minRange=t):e.selectedDates=[t];e._setInputValue(),i.onSelect&&e._triggerOnChange(),i.autoClose&&!this.timepickerIsActive&&(i.multipleDates||i.range?i.range&&2==e.selectedDates.length&&e.hide():e.hide()),e.views[this.currentView]._render();}},removeDate:function(t){var e=this.selectedDates,i=this;if(t instanceof Date)return e.some(function(s,a){return n.isSame(s,t)?(e.splice(a,1),i.selectedDates.length?i.lastSelectedDate=i.selectedDates[i.selectedDates.length-1]:(i.minRange="",i.maxRange="",i.lastSelectedDate=""),i.views[i.currentView]._render(),i._setInputValue(),i.opts.onSelect&&i._triggerOnChange(),!0):void 0;});},today:function(){this.silent=!0,this.view=this.opts.minView,this.silent=!1,this.date=new Date(),this.opts.todayButton instanceof Date&&this.selectDate(this.opts.todayButton);},clear:function(){this.selectedDates=[],this.minRange="",this.maxRange="",this.views[this.currentView]._render(),this._setInputValue(),this.opts.onSelect&&this._triggerOnChange();},update:function(t,i){var s=arguments.length,a=this.lastSelectedDate;return 2==s?this.opts[t]=i:1==s&&"object"==typeof t&&(this.opts=e.extend(!0,this.opts,t)),this._createShortCuts(),this._syncWithMinMaxDates(),this._defineLocale(this.opts.language),this.nav._addButtonsIfNeed(),this.opts.onlyTimepicker||this.nav._render(),this.views[this.currentView]._render(),this.elIsInput&&!this.opts.inline&&(this._setPositionClasses(this.opts.position),this.visible&&this.setPosition(this.opts.position)),this.opts.classes&&this.$datepicker.addClass(this.opts.classes),this.opts.onlyTimepicker&&this.$datepicker.addClass("-only-timepicker-"),this.opts.timepicker&&(a&&this.timepicker._handleDate(a),this.timepicker._updateRanges(),this.timepicker._updateCurrentTime(),a&&(a.setHours(this.timepicker.hours),a.setMinutes(this.timepicker.minutes))),this._setInputValue(),this;},_syncWithMinMaxDates:function(){var t=this.date.getTime();this.silent=!0,this.minTime>t&&(this.date=this.minDate),this.maxTime<t&&(this.date=this.maxDate),this.silent=!1;},_isSelected:function(t,e){var i=!1;return this.selectedDates.some(function(s){return n.isSame(s,t,e)?(i=s,!0):void 0;}),i;},_setInputValue:function(){var t,e=this,i=e.opts,s=e.loc.dateFormat,a=i.altFieldDateFormat,n=e.selectedDates.map(function(t){return e.formatDate(s,t);});i.altField&&e.$altField.length&&(t=this.selectedDates.map(function(t){return e.formatDate(a,t);}),t=t.join(this.opts.multipleDatesSeparator),this.$altField.val(t)),n=n.join(this.opts.multipleDatesSeparator),this.$el.val(n);},_isInRange:function(t,e){var i=t.getTime(),s=n.getParsedDate(t),a=n.getParsedDate(this.minDate),h=n.getParsedDate(this.maxDate),o=new Date(s.year,s.month,a.date).getTime(),r=new Date(s.year,s.month,h.date).getTime(),c={day:i>=this.minTime&&i<=this.maxTime,month:o>=this.minTime&&r<=this.maxTime,year:s.year>=a.year&&s.year<=h.year};return e?c[e]:c.day;},_getDimensions:function(t){var e=t.offset();return{width:t.outerWidth(),height:t.outerHeight(),left:e.left,top:e.top};},_getDateFromCell:function(t){var e=this.parsedDate,s=t.data("year")||e.year,a=t.data("month")==i?e.month:t.data("month"),n=t.data("date")||1;return new Date(s,a,n);},_setPositionClasses:function(t){t=t.split(" ");var e=t[0],i=t[1],s="datepicker -"+e+"-"+i+"- -from-"+e+"-";this.visible&&(s+=" active"),this.$datepicker.removeAttr("class").addClass(s);},setPosition:function(t){t=t||this.opts.position;var e,i,s=this._getDimensions(this.$el),a=this._getDimensions(this.$datepicker),n=t.split(" "),h=this.opts.offset,o=n[0],r=n[1];switch(o){case"top":e=s.top-a.height-h;break;case"right":i=s.left+s.width+h;break;case"bottom":e=s.top+s.height+h;break;case"left":i=s.left-a.width-h;}switch(r){case"top":e=s.top;break;case"right":i=s.left+s.width-a.width;break;case"bottom":e=s.top+s.height-a.height;break;case"left":i=s.left;break;case"center":/left|right/.test(o)?e=s.top+s.height/2-a.height/2:i=s.left+s.width/2-a.width/2;}this.$datepicker.css({left:i,top:e});},show:function(){var t=this.opts.onShow;this.setPosition(this.opts.position),this.$datepicker.addClass("active"),this.visible=!0,t&&this._bindVisionEvents(t);},hide:function(){var t=this.opts.onHide;this.$datepicker.removeClass("active").css({left:"-100000px"}),this.focused="",this.keys=[],this.inFocus=!1,this.visible=!1,this.$el.blur(),t&&this._bindVisionEvents(t);},down:function(t){this._changeView(t,"down");},up:function(t){this._changeView(t,"up");},_bindVisionEvents:function(t){this.$datepicker.off("transitionend.dp"),t(this,!1),this.$datepicker.one("transitionend.dp",t.bind(this,this,!0));},_changeView:function(t,e){t=t||this.focused||this.date;var i="up"==e?this.viewIndex+1:this.viewIndex-1;i>2&&(i=2),0>i&&(i=0),this.silent=!0,this.date=new Date(t.getFullYear(),t.getMonth(),1),this.silent=!1,this.view=this.viewIndexes[i];},_handleHotKey:function(t){var e,i,s,a=n.getParsedDate(this._getFocusedDate()),h=this.opts,o=!1,r=!1,c=!1,d=a.year,l=a.month,u=a.date;switch(t){case"ctrlRight":case"ctrlUp":l+=1,o=!0;break;case"ctrlLeft":case"ctrlDown":l-=1,o=!0;break;case"shiftRight":case"shiftUp":r=!0,d+=1;break;case"shiftLeft":case"shiftDown":r=!0,d-=1;break;case"altRight":case"altUp":c=!0,d+=10;break;case"altLeft":case"altDown":c=!0,d-=10;break;case"ctrlShiftUp":this.up();}s=n.getDaysCount(new Date(d,l)),i=new Date(d,l,u),u>s&&(u=s),i.getTime()<this.minTime?i=this.minDate:i.getTime()>this.maxTime&&(i=this.maxDate),this.focused=i,e=n.getParsedDate(i),o&&h.onChangeMonth&&h.onChangeMonth(e.month,e.year),r&&h.onChangeYear&&h.onChangeYear(e.year),c&&h.onChangeDecade&&h.onChangeDecade(this.curDecade);},_registerKey:function(t){var e=this.keys.some(function(e){return e==t;});e||this.keys.push(t);},_unRegisterKey:function(t){var e=this.keys.indexOf(t);this.keys.splice(e,1);},_isHotKeyPressed:function(){var t,e=!1,i=this,s=this.keys.sort();for(var a in u)t=u[a],s.length==t.length&&t.every(function(t,e){return t==s[e];})&&(i._trigger("hotKey",a),e=!0);return e;},_trigger:function(t,e){this.$el.trigger(t,e);},_focusNextCell:function(t,e){e=e||this.cellType;var i=n.getParsedDate(this._getFocusedDate()),s=i.year,a=i.month,h=i.date;if(!this._isHotKeyPressed()){switch(t){case 37:"day"==e?h-=1:"","month"==e?a-=1:"","year"==e?s-=1:"";break;case 38:"day"==e?h-=7:"","month"==e?a-=3:"","year"==e?s-=4:"";break;case 39:"day"==e?h+=1:"","month"==e?a+=1:"","year"==e?s+=1:"";break;case 40:"day"==e?h+=7:"","month"==e?a+=3:"","year"==e?s+=4:"";}var o=new Date(s,a,h);o.getTime()<this.minTime?o=this.minDate:o.getTime()>this.maxTime&&(o=this.maxDate),this.focused=o;}},_getFocusedDate:function(){var t=this.focused||this.selectedDates[this.selectedDates.length-1],e=this.parsedDate;if(!t)switch(this.view){case"days":t=new Date(e.year,e.month,new Date().getDate());break;case"months":t=new Date(e.year,e.month,1);break;case"years":t=new Date(e.year,0,1);}return t;},_getCell:function(t,i){i=i||this.cellType;var s,a=n.getParsedDate(t),h='.datepicker--cell[data-year="'+a.year+'"]';switch(i){case"month":h='[data-month="'+a.month+'"]';break;case"day":h+='[data-month="'+a.month+'"][data-date="'+a.date+'"]';}return s=this.views[this.currentView].$el.find(h),s.length?s:e("");},destroy:function(){var t=this;t.$el.off(".adp").data("datepicker",""),t.selectedDates=[],t.focused="",t.views={},t.keys=[],t.minRange="",t.maxRange="",t.opts.inline||!t.elIsInput?t.$datepicker.closest(".datepicker-inline").remove():t.$datepicker.remove();},_handleAlreadySelectedDates:function(t,e){this.opts.range?this.opts.toggleSelected?this.removeDate(e):2!=this.selectedDates.length&&this._trigger("clickCell",e):this.opts.toggleSelected&&this.removeDate(e),this.opts.toggleSelected||(this.lastSelectedDate=t,this.opts.timepicker&&(this.timepicker._setTime(t),this.timepicker.update()));},_onShowEvent:function(t){this.visible||this.show();},_onBlur:function(){!this.inFocus&&this.visible&&this.hide();},_onMouseDownDatepicker:function(t){this.inFocus=!0;},_onMouseUpDatepicker:function(t){this.inFocus=!1,t.originalEvent.inFocus=!0,t.originalEvent.timepickerFocus||this.$el.focus();},_onKeyUpGeneral:function(t){var e=this.$el.val();e||this.clear();},_onResize:function(){this.visible&&this.setPosition();},_onMouseUpBody:function(t){t.originalEvent.inFocus||this.visible&&!this.inFocus&&this.hide();},_onMouseUpEl:function(t){t.originalEvent.inFocus=!0,setTimeout(this._onKeyUpGeneral.bind(this),4);},_onKeyDown:function(t){var e=t.which;if(this._registerKey(e),e>=37&&40>=e&&(t.preventDefault(),this._focusNextCell(e)),13==e&&this.focused){if(this._getCell(this.focused).hasClass("-disabled-"))return;if(this.view!=this.opts.minView)this.down();else{var i=this._isSelected(this.focused,this.cellType);if(!i)return this.timepicker&&(this.focused.setHours(this.timepicker.hours),this.focused.setMinutes(this.timepicker.minutes)),void this.selectDate(this.focused);this._handleAlreadySelectedDates(i,this.focused);}}27==e&&this.hide();},_onKeyUp:function(t){var e=t.which;this._unRegisterKey(e);},_onHotKey:function(t,e){this._handleHotKey(e);},_onMouseEnterCell:function(t){var i=e(t.target).closest(".datepicker--cell"),s=this._getDateFromCell(i);this.silent=!0,this.focused&&(this.focused=""),i.addClass("-focus-"),this.focused=s,this.silent=!1,this.opts.range&&1==this.selectedDates.length&&(this.minRange=this.selectedDates[0],this.maxRange="",n.less(this.minRange,this.focused)&&(this.maxRange=this.minRange,this.minRange=""),this.views[this.currentView]._update());},_onMouseLeaveCell:function(t){var i=e(t.target).closest(".datepicker--cell");i.removeClass("-focus-"),this.silent=!0,this.focused="",this.silent=!1;},_onTimeChange:function(t,e,i){var s=new Date(),a=this.selectedDates,n=!1;a.length&&(n=!0,s=this.lastSelectedDate),s.setHours(e),s.setMinutes(i),n||this._getCell(s).hasClass("-disabled-")?(this._setInputValue(),this.opts.onSelect&&this._triggerOnChange()):this.selectDate(s);},_onClickCell:function(t,e){this.timepicker&&(e.setHours(this.timepicker.hours),e.setMinutes(this.timepicker.minutes)),this.selectDate(e);},set focused(t){if(!t&&this.focused){var e=this._getCell(this.focused);e.length&&e.removeClass("-focus-");}this._focused=t,this.opts.range&&1==this.selectedDates.length&&(this.minRange=this.selectedDates[0],this.maxRange="",n.less(this.minRange,this._focused)&&(this.maxRange=this.minRange,this.minRange="")),this.silent||(this.date=t);},get focused(){return this._focused;},get parsedDate(){return n.getParsedDate(this.date);},set date(t){return t instanceof Date?(this.currentDate=t,this.inited&&!this.silent&&(this.views[this.view]._render(),this.nav._render(),this.visible&&this.elIsInput&&this.setPosition()),t):void 0;},get date(){return this.currentDate;},set view(t){return this.viewIndex=this.viewIndexes.indexOf(t),this.viewIndex<0?void 0:(this.prevView=this.currentView,this.currentView=t,this.inited&&(this.views[t]?this.views[t]._render():this.views[t]=new e.fn.datepicker.Body(this,t,this.opts),this.views[this.prevView].hide(),this.views[t].show(),this.nav._render(),this.opts.onChangeView&&this.opts.onChangeView(t),this.elIsInput&&this.visible&&this.setPosition()),t);},get view(){return this.currentView;},get cellType(){return this.view.substring(0,this.view.length-1);},get minTime(){var t=n.getParsedDate(this.minDate);return new Date(t.year,t.month,t.date).getTime();},get maxTime(){var t=n.getParsedDate(this.maxDate);return new Date(t.year,t.month,t.date).getTime();},get curDecade(){return n.getDecade(this.date);}},n.getDaysCount=function(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate();},n.getParsedDate=function(t){return{year:t.getFullYear(),month:t.getMonth(),fullMonth:t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,date:t.getDate(),fullDate:t.getDate()<10?"0"+t.getDate():t.getDate(),day:t.getDay(),hours:t.getHours(),fullHours:t.getHours()<10?"0"+t.getHours():t.getHours(),minutes:t.getMinutes(),fullMinutes:t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()};},n.getDecade=function(t){var e=10*Math.floor(t.getFullYear()/10);return[e,e+9];},n.template=function(t,e){return t.replace(/#\{([\w]+)\}/g,function(t,i){return e[i]||0===e[i]?e[i]:void 0;});},n.isSame=function(t,e,i){if(!t||!e)return!1;var s=n.getParsedDate(t),a=n.getParsedDate(e),h=i?i:"day",o={day:s.date==a.date&&s.month==a.month&&s.year==a.year,month:s.month==a.month&&s.year==a.year,year:s.year==a.year};return o[h];},n.less=function(t,e,i){return t&&e?e.getTime()<t.getTime():!1;},n.bigger=function(t,e,i){return t&&e?e.getTime()>t.getTime():!1;},n.getLeadingZeroNum=function(t){return parseInt(t)<10?"0"+t:t;},n.resetTime=function(t){return"object"==typeof t?(t=n.getParsedDate(t),new Date(t.year,t.month,t.date)):void 0;},e.fn.datepicker=function(t){return this.each(function(){if(e.data(this,o)){var i=e.data(this,o);i.opts=e.extend(!0,i.opts,t),i.update();}else e.data(this,o,new m(this,t));});},e.fn.datepicker.Constructor=m,e.fn.datepicker.language={ru:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.mm.yyyy",timeFormat:"hh:ii",firstDay:1}},e(function(){e(r).datepicker();});}(),function(){var t={days:'<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',months:'<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',years:'<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'},s=e.fn.datepicker,a=s.Constructor;s.Body=function(t,i,s){this.d=t,this.type=i,this.opts=s,this.$el=e(""),this.opts.onlyTimepicker||this.init();},s.Body.prototype={init:function(){this._buildBaseHtml(),this._render(),this._bindEvents();},_bindEvents:function(){this.$el.on("click",".datepicker--cell",e.proxy(this._onClickCell,this));},_buildBaseHtml:function(){this.$el=e(t[this.type]).appendTo(this.d.$content),this.$names=e(".datepicker--days-names",this.$el),this.$cells=e(".datepicker--cells",this.$el);},_getDayNamesHtml:function(t,e,s,a){return e=e!=i?e:t,s=s?s:"",a=a!=i?a:0,a>7?s:7==e?this._getDayNamesHtml(t,0,s,++a):(s+='<div class="datepicker--day-name'+(this.d.isWeekend(e)?" -weekend-":"")+'">'+this.d.loc.daysMin[e]+"</div>",this._getDayNamesHtml(t,++e,s,++a));},_getCellContents:function(t,e){var i="datepicker--cell datepicker--cell-"+e,s=new Date(),n=this.d,h=a.resetTime(n.minRange),o=a.resetTime(n.maxRange),r=n.opts,c=a.getParsedDate(t),d={},l=c.date;switch(e){case"day":n.isWeekend(c.day)&&(i+=" -weekend-"),c.month!=this.d.parsedDate.month&&(i+=" -other-month-",r.selectOtherMonths||(i+=" -disabled-"),r.showOtherMonths||(l=""));break;case"month":l=n.loc[n.opts.monthsField][c.month];break;case"year":var u=n.curDecade;l=c.year,(c.year<u[0]||c.year>u[1])&&(i+=" -other-decade-",r.selectOtherYears||(i+=" -disabled-"),r.showOtherYears||(l=""));}return r.onRenderCell&&(d=r.onRenderCell(t,e)||{},l=d.html?d.html:l,i+=d.classes?" "+d.classes:""),r.range&&(a.isSame(h,t,e)&&(i+=" -range-from-"),a.isSame(o,t,e)&&(i+=" -range-to-"),1==n.selectedDates.length&&n.focused?((a.bigger(h,t)&&a.less(n.focused,t)||a.less(o,t)&&a.bigger(n.focused,t))&&(i+=" -in-range-"),a.less(o,t)&&a.isSame(n.focused,t)&&(i+=" -range-from-"),a.bigger(h,t)&&a.isSame(n.focused,t)&&(i+=" -range-to-")):2==n.selectedDates.length&&a.bigger(h,t)&&a.less(o,t)&&(i+=" -in-range-")),a.isSame(s,t,e)&&(i+=" -current-"),n.focused&&a.isSame(t,n.focused,e)&&(i+=" -focus-"),n._isSelected(t,e)&&(i+=" -selected-"),(!n._isInRange(t,e)||d.disabled)&&(i+=" -disabled-"),{html:l,classes:i};},_getDaysHtml:function(t){var e=a.getDaysCount(t),i=new Date(t.getFullYear(),t.getMonth(),1).getDay(),s=new Date(t.getFullYear(),t.getMonth(),e).getDay(),n=i-this.d.loc.firstDay,h=6-s+this.d.loc.firstDay;n=0>n?n+7:n,h=h>6?h-7:h;for(var o,r,c=-n+1,d="",l=c,u=e+h;u>=l;l++)r=t.getFullYear(),o=t.getMonth(),d+=this._getDayHtml(new Date(r,o,l));return d;},_getDayHtml:function(t){var e=this._getCellContents(t,"day");return'<div class="'+e.classes+'" data-date="'+t.getDate()+'" data-month="'+t.getMonth()+'" data-year="'+t.getFullYear()+'">'+e.html+"</div>";},_getMonthsHtml:function(t){for(var e="",i=a.getParsedDate(t),s=0;12>s;)e+=this._getMonthHtml(new Date(i.year,s)),s++;return e;},_getMonthHtml:function(t){var e=this._getCellContents(t,"month");return'<div class="'+e.classes+'" data-month="'+t.getMonth()+'">'+e.html+"</div>";},_getYearsHtml:function(t){var e=(a.getParsedDate(t),a.getDecade(t)),i=e[0]-1,s="",n=i;for(n;n<=e[1]+1;n++)s+=this._getYearHtml(new Date(n,0));return s;},_getYearHtml:function(t){var e=this._getCellContents(t,"year");return'<div class="'+e.classes+'" data-year="'+t.getFullYear()+'">'+e.html+"</div>";},_renderTypes:{days:function(){var t=this._getDayNamesHtml(this.d.loc.firstDay),e=this._getDaysHtml(this.d.currentDate);this.$cells.html(e),this.$names.html(t);},months:function(){var t=this._getMonthsHtml(this.d.currentDate);this.$cells.html(t);},years:function(){var t=this._getYearsHtml(this.d.currentDate);this.$cells.html(t);}},_render:function(){this.opts.onlyTimepicker||this._renderTypes[this.type].bind(this)();},_update:function(){var t,i,s,a=e(".datepicker--cell",this.$cells),n=this;a.each(function(a,h){i=e(this),s=n.d._getDateFromCell(e(this)),t=n._getCellContents(s,n.d.cellType),i.attr("class",t.classes);});},show:function(){this.opts.onlyTimepicker||(this.$el.addClass("active"),this.acitve=!0);},hide:function(){this.$el.removeClass("active"),this.active=!1;},_handleClick:function(t){var e=t.data("date")||1,i=t.data("month")||0,s=t.data("year")||this.d.parsedDate.year,a=this.d;if(a.view!=this.opts.minView)return void a.down(new Date(s,i,e));var n=new Date(s,i,e),h=this.d._isSelected(n,this.d.cellType);return h?void a._handleAlreadySelectedDates.bind(a,h,n)():void a._trigger("clickCell",n);},_onClickCell:function(t){var i=e(t.target).closest(".datepicker--cell");i.hasClass("-disabled-")||this._handleClick.bind(this)(i);}};}(),function(){var t='<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',i='<div class="datepicker--buttons"></div>',s='<span class="datepicker--button" data-action="#{action}">#{label}</span>',a=e.fn.datepicker,n=a.Constructor;a.Navigation=function(t,e){this.d=t,this.opts=e,this.$buttonsContainer="",this.init();},a.Navigation.prototype={init:function(){this._buildBaseHtml(),this._bindEvents();},_bindEvents:function(){this.d.$nav.on("click",".datepicker--nav-action",e.proxy(this._onClickNavButton,this)),this.d.$nav.on("click",".datepicker--nav-title",e.proxy(this._onClickNavTitle,this)),this.d.$datepicker.on("click",".datepicker--button",e.proxy(this._onClickNavButton,this));},_buildBaseHtml:function(){this.opts.onlyTimepicker||this._render(),this._addButtonsIfNeed();},_addButtonsIfNeed:function(){this.opts.todayButton&&this._addButton("today"),this.opts.clearButton&&this._addButton("clear");},_render:function(){var i=this._getTitle(this.d.currentDate),s=n.template(t,e.extend({title:i},this.opts));this.d.$nav.html(s),"years"==this.d.view&&e(".datepicker--nav-title",this.d.$nav).addClass("-disabled-"),this.setNavStatus();},_getTitle:function(t){return this.d.formatDate(this.opts.navTitles[this.d.view],t);},_addButton:function(t){this.$buttonsContainer.length||this._addButtonsContainer();var i={action:t,label:this.d.loc[t]},a=n.template(s,i);e("[data-action="+t+"]",this.$buttonsContainer).length||this.$buttonsContainer.append(a);},_addButtonsContainer:function(){this.d.$datepicker.append(i),this.$buttonsContainer=e(".datepicker--buttons",this.d.$datepicker);},setNavStatus:function(){if((this.opts.minDate||this.opts.maxDate)&&this.opts.disableNavWhenOutOfRange){var t=this.d.parsedDate,e=t.month,i=t.year,s=t.date;switch(this.d.view){case"days":this.d._isInRange(new Date(i,e-1,1),"month")||this._disableNav("prev"),this.d._isInRange(new Date(i,e+1,1),"month")||this._disableNav("next");break;case"months":this.d._isInRange(new Date(i-1,e,s),"year")||this._disableNav("prev"),this.d._isInRange(new Date(i+1,e,s),"year")||this._disableNav("next");break;case"years":var a=n.getDecade(this.d.date);this.d._isInRange(new Date(a[0]-1,0,1),"year")||this._disableNav("prev"),this.d._isInRange(new Date(a[1]+1,0,1),"year")||this._disableNav("next");}}},_disableNav:function(t){e('[data-action="'+t+'"]',this.d.$nav).addClass("-disabled-");},_activateNav:function(t){e('[data-action="'+t+'"]',this.d.$nav).removeClass("-disabled-");},_onClickNavButton:function(t){var i=e(t.target).closest("[data-action]"),s=i.data("action");this.d[s]();},_onClickNavTitle:function(t){return e(t.target).hasClass("-disabled-")?void 0:"days"==this.d.view?this.d.view="months":void(this.d.view="years");}};}(),function(){var t='<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',i=e.fn.datepicker,s=i.Constructor;i.Timepicker=function(t,e){this.d=t,this.opts=e,this.init();},i.Timepicker.prototype={init:function(){var t="input";this._setTime(this.d.date),this._buildHTML(),navigator.userAgent.match(/trident/gi)&&(t="change"),this.d.$el.on("selectDate",this._onSelectDate.bind(this)),this.$ranges.on(t,this._onChangeRange.bind(this)),this.$ranges.on("mouseup",this._onMouseUpRange.bind(this)),this.$ranges.on("mousemove focus ",this._onMouseEnterRange.bind(this)),this.$ranges.on("mouseout blur",this._onMouseOutRange.bind(this));},_setTime:function(t){var e=s.getParsedDate(t);this._handleDate(t),this.hours=e.hours<this.minHours?this.minHours:e.hours,this.minutes=e.minutes<this.minMinutes?this.minMinutes:e.minutes;},_setMinTimeFromDate:function(t){this.minHours=t.getHours(),this.minMinutes=t.getMinutes(),this.d.lastSelectedDate&&this.d.lastSelectedDate.getHours()>t.getHours()&&(this.minMinutes=this.opts.minMinutes);},_setMaxTimeFromDate:function(t){this.maxHours=t.getHours(),this.maxMinutes=t.getMinutes(),this.d.lastSelectedDate&&this.d.lastSelectedDate.getHours()<t.getHours()&&(this.maxMinutes=this.opts.maxMinutes);},_setDefaultMinMaxTime:function(){var t=23,e=59,i=this.opts;this.minHours=i.minHours<0||i.minHours>t?0:i.minHours,this.minMinutes=i.minMinutes<0||i.minMinutes>e?0:i.minMinutes,this.maxHours=i.maxHours<0||i.maxHours>t?t:i.maxHours,this.maxMinutes=i.maxMinutes<0||i.maxMinutes>e?e:i.maxMinutes;},_validateHoursMinutes:function(t){this.hours<this.minHours?this.hours=this.minHours:this.hours>this.maxHours&&(this.hours=this.maxHours),this.minutes<this.minMinutes?this.minutes=this.minMinutes:this.minutes>this.maxMinutes&&(this.minutes=this.maxMinutes);},_buildHTML:function(){var i=s.getLeadingZeroNum,a={hourMin:this.minHours,hourMax:i(this.maxHours),hourStep:this.opts.hoursStep,hourValue:this.hours,hourVisible:i(this.displayHours),minMin:this.minMinutes,minMax:i(this.maxMinutes),minStep:this.opts.minutesStep,minValue:i(this.minutes)},n=s.template(t,a);this.$timepicker=e(n).appendTo(this.d.$datepicker),this.$ranges=e('[type="range"]',this.$timepicker),this.$hours=e('[name="hours"]',this.$timepicker),this.$minutes=e('[name="minutes"]',this.$timepicker),this.$hoursText=e(".datepicker--time-current-hours",this.$timepicker),this.$minutesText=e(".datepicker--time-current-minutes",this.$timepicker),this.d.ampm&&(this.$ampm=e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current",this.$timepicker)).html(this.dayPeriod),this.$timepicker.addClass("-am-pm-"));},_updateCurrentTime:function(){var t=s.getLeadingZeroNum(this.displayHours),e=s.getLeadingZeroNum(this.minutes);this.$hoursText.html(t),this.$minutesText.html(e),this.d.ampm&&this.$ampm.html(this.dayPeriod);},_updateRanges:function(){this.$hours.attr({min:this.minHours,max:this.maxHours}).val(this.hours),this.$minutes.attr({min:this.minMinutes,max:this.maxMinutes}).val(this.minutes);},_handleDate:function(t){this._setDefaultMinMaxTime(),t&&(s.isSame(t,this.d.opts.minDate)?this._setMinTimeFromDate(this.d.opts.minDate):s.isSame(t,this.d.opts.maxDate)&&this._setMaxTimeFromDate(this.d.opts.maxDate)),this._validateHoursMinutes(t);},update:function(){this._updateRanges(),this._updateCurrentTime();},_getValidHoursFromDate:function(t,e){var i=t,a=t;t instanceof Date&&(i=s.getParsedDate(t),a=i.hours);var n=e||this.d.ampm,h="am";if(n)switch(!0){case 0==a:a=12;break;case 12==a:h="pm";break;case a>11:a-=12,h="pm";}return{hours:a,dayPeriod:h};},set hours(t){this._hours=t;var e=this._getValidHoursFromDate(t);this.displayHours=e.hours,this.dayPeriod=e.dayPeriod;},get hours(){return this._hours;},_onChangeRange:function(t){var i=e(t.target),s=i.attr("name");this.d.timepickerIsActive=!0,this[s]=i.val(),this._updateCurrentTime(),this.d._trigger("timeChange",[this.hours,this.minutes]),this._handleDate(this.d.lastSelectedDate),this.update();},_onSelectDate:function(t,e){this._handleDate(e),this.update();},_onMouseEnterRange:function(t){var i=e(t.target).attr("name");e(".datepicker--time-current-"+i,this.$timepicker).addClass("-focus-");},_onMouseOutRange:function(t){var i=e(t.target).attr("name");this.d.inFocus||e(".datepicker--time-current-"+i,this.$timepicker).removeClass("-focus-");},_onMouseUpRange:function(t){this.d.timepickerIsActive=!1;}};}();}(window,jQuery);// -------/Datepicker-------
$(document).ready(function(){if($("#aero_phone").length){$("#aero_phone").inputmask('+7-999-999-99-99');}$("#become_vol").validate({ignore:":hidden",rules:{fullname:{required:true},dob:{required:true},user_dob_agreement:{required:true},user_photo:{required:true},gender:{required:true},citizenship:{required:true},phone:{required:true},email:{required:true},vk_link:{required:true},inst_link:{required:true},preferred_direction_of_volunteering:{required:true},preferred_direction_of_volunteering_sob:{required:true},proficiency_in_english:{required:true},other_languages:{required:true},other_lang_text:{required:true},proficiency_in_other_lang:{required:true},size_clothes:{required:true},size_clothes_niz:{required:true},city:{required:true},city_area:{required:true},study_place:{required:true},study_class:{required:true},study_family:{required:true},volunteered_at_the_сhampionships:{required:true},volunteered_at_the_forum:{required:true},experience:{required:true},state_awards:{required:true},experience_leading:{required:true},why_volunteer:{required:true},work:{required:true},passport_ser_num:{required:true},passport_date:{required:true},passport_who:{required:true},passport_address:{required:true},passport_address_fact:{required:true},trustee:{required:true},terms_ok:{required:true},terms_ok2:{required:true},user_dob_fio:{required:true},user_dob_phone:{required:true},fullname_f:{required:true},fullname_i:{required:true},fullname_o:{required:true}},messages:{username:{required:"Это поле должно быть заполнено",email:"Введите корректный email"},terms_ok:{required:"Вы должны подтвердить"},terms_ok2:{required:"Вы должны подтвердить"}}});$("#enter-form").validate({ignore:":hidden",rules:{enter_email:{required:true},enter_fullname:{required:true},enter_checkbox:{required:true}},messages:{enter_checkbox:{required:"Вы должны подтвердить"}}});$("#password-form").validate({ignore:":hidden",rules:{enter_pass:{required:true},repeat_pass:{required:true}}});$("#question-form").validate({ignore:":hidden",rules:{question:{required:true}}});});$.extend($.validator.messages,{required:"Это поле необходимо заполнить."});$(document).ready(function(){$('input[name="passport_ser_num"]').inputmask({"mask":"9999 999999"});$('.js-dob-calendar').datepicker({dateFormat:'yyyy/mm/dd',view:'years',// minDate: '0',
// maxDate: "0",
onSelect:function(dateText,inst){var birthDay=dateText;var DOB=new Date(birthDay);var today=new Date();var age=today.getTime()-DOB.getTime();age=Math.floor(age/(1000*60*60*24*365.25));if(parseInt(age)<18){$('.js-dob-spoiler').slideDown(300);}else{$('.js-dob-spoiler').slideUp(300);}if(parseInt(age)<16){$('#become_vol .content-block__more').addClass('disabled');$('#become_vol .content-block__more .youshallnotpass').remove();$('#become_vol .content-block__more').append('<span class="youshallnotpass">К сожалению, вы не можете отправить анкету, так как вы младше 16 лет.</span>');}else{$('#become_vol .content-block__more').removeClass('disabled');$('#become_vol .content-block__more .youshallnotpass').remove();}}});});var adminTable=$('#admin-table').DataTable({responsive:true,dom:'Bfrtip',buttons:['excel'],language:_vendor_datatables_ru_json__WEBPACK_IMPORTED_MODULE_4__});var testTable=$('#test-table').DataTable({responsive:true,language:_vendor_datatables_ru_json__WEBPACK_IMPORTED_MODULE_4__,"ordering":false,paging:false,"searching":false});_node_modules_pnotify_core_dist_PNotify_js__WEBPACK_IMPORTED_MODULE_3__.defaultModules.set(_node_modules_pnotify_mobile_dist_PNotifyMobile_js__WEBPACK_IMPORTED_MODULE_5__,{});// alert({
//   text: 'Notice me, senpai!',
// });
//Balls change
$('.volh_ball_change').click(function(){$(this).parent().find('.volh_ball_change_hidden').addClass('active');});$(document).mouseup(function(e){var div=$('.volh_ball_change_hidden');if(!div.is(e.target)&&div.has(e.target).length===0){$('.volh_ball_change_hidden').removeClass('active');}});$('.js-change-answer-ball').click(function(){var th_parent=$(this).parents('.vt_td2');var ball_prev=th_parent.find('.vol_ball_cur').text();var ball_new=th_parent.find('.txt_i').val();if(ball_new==ball_prev||!ball_new||ball_new==''){th_parent.find('.txt_i').addClass('error');return;}else{var data={};data['nn_action']='volhandling_change_answer_ball';data['anketa']=th_parent.find('.js-change-answer-ball').attr('data-anketaid');data['idx']=th_parent.find('.js-change-answer-ball').attr('data-idx');data['new_ball']=ball_new;$.ajax({url:[location.protocol,'//',location.host,location.pathname].join(''),data:data,type:'post',dataType:'json',beforeSend:function(){// $('#send_talisman_draft').addClass('disabled');
},success:function(response){if(response.success){PNotify.success('Сохранили');// setTimeout(function(){document.location.reload(true);},1000);
$('.volh_ball_change_hidden').removeClass('active');th_parent.find('.vol_ball_cur').text(ball_new);$('.pp').removeClass('show');$('html,body').removeClass('noscroll');}else{PNotify.error('К сожалению, произошла ошибка при загрузке данных =( Пожалуйста, обратитесь к администрацие сайта ');}},error:function(){PNotify.error('К сожалению, произошла ошибка при загрузке данных =( Пожалуйста, обратитесь к администрацие сайта ');},complete:function(){//  $('#send_talisman_draft').removeClass('disabled');
}});}});//Balls change END


/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./src/js/vendor/jquery.validate.js":
/*!******************************************!*\
  !*** ./src/js/vendor/jquery.validate.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Validation Plugin v1.19.6-pre
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2023 Jörn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.extend($.fn, {
    // https://jqueryvalidation.org/validate/
    validate: function (options) {
      // If nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }
        return;
      }

      // Check if a validator for this form was already created
      var validator = $.data(this[0], "validator");
      if (validator) {
        return validator;
      }

      // Add novalidate tag if HTML5.
      this.attr("novalidate", "novalidate");
      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);
      if (validator.settings.onsubmit) {
        this.on("click.validate", ":submit", function (event) {
          // Track the used submit button to properly handle scripted
          // submits later.
          validator.submitButton = event.currentTarget;

          // Allow suppressing validation by adding a cancel class to the submit button
          if ($(this).hasClass("cancel")) {
            validator.cancelSubmit = true;
          }

          // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
          if ($(this).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        });

        // Validate the form on submit
        this.on("submit.validate", function (event) {
          if (validator.settings.debug) {
            // Prevent form submit to be able to see console output
            event.preventDefault();
          }
          function handle() {
            var hidden, result;

            // Insert a hidden input as a replacement for the missing submit button
            // The hidden input is inserted in two cases:
            //   - A user defined a `submitHandler`
            //   - There was a pending request due to `remote` method and `stopRequest()`
            //     was called to submit the form in case it's valid
            if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
              hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
            }
            if (validator.settings.submitHandler && !validator.settings.debug) {
              result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
              if (hidden) {
                // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }
              if (result !== undefined) {
                return result;
              }
              return false;
            }
            return true;
          }

          // Prevent submit for invalid forms or custom submit handlers
          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }
          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }
            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }
      return validator;
    },
    // https://jqueryvalidation.org/valid/
    valid: function () {
      var valid, validator, errorList;
      if ($(this[0]).is("form")) {
        valid = this.validate().form();
      } else {
        errorList = [];
        valid = true;
        validator = $(this[0].form).validate();
        this.each(function () {
          valid = validator.element(this) && valid;
          if (!valid) {
            errorList = errorList.concat(validator.errorList);
          }
        });
        validator.errorList = errorList;
      }
      return valid;
    },
    // https://jqueryvalidation.org/rules/
    rules: function (command, argument) {
      var element = this[0],
        isContentEditable = typeof this.attr("contenteditable") !== "undefined" && this.attr("contenteditable") !== "false",
        settings,
        staticRules,
        existingRules,
        data,
        param,
        filtered;

      // If nothing is selected, return empty object; can't chain anyway
      if (element == null) {
        return;
      }
      if (!element.form && isContentEditable) {
        element.form = this.closest("form")[0];
        element.name = this.attr("name");
      }
      if (element.form == null) {
        return;
      }
      if (command) {
        settings = $.data(element.form, "validator").settings;
        staticRules = settings.rules;
        existingRules = $.validator.staticRules(element);
        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument));

            // Remove messages from rules, but allow them to be set separately
            delete existingRules.messages;
            staticRules[element.name] = existingRules;
            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            }
            break;
          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }
            filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }
      data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);

      // Make sure required is at front
      if (data.required) {
        param = data.required;
        delete data.required;
        data = $.extend({
          required: param
        }, data);
      }

      // Make sure remote is at back
      if (data.remote) {
        param = data.remote;
        delete data.remote;
        data = $.extend(data, {
          remote: param
        });
      }
      return data;
    }
  });

  // JQuery trim is deprecated, provide a trim method based on String.prototype.trim
  var trim = function (str) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };

  // Custom selectors
  $.extend($.expr.pseudos || $.expr[":"], {
    // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

    // https://jqueryvalidation.org/blank-selector/
    blank: function (a) {
      return !trim("" + $(a).val());
    },
    // https://jqueryvalidation.org/filled-selector/
    filled: function (a) {
      var val = $(a).val();
      return val !== null && !!trim("" + val);
    },
    // https://jqueryvalidation.org/unchecked-selector/
    unchecked: function (a) {
      return !$(a).prop("checked");
    }
  });

  // Constructor for validator
  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };

  // https://jqueryvalidation.org/jQuery.validator.format/
  $.validator.format = function (source, params) {
    if (arguments.length === 1) {
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }
    if (params === undefined) {
      return source;
    }
    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor !== Array) {
      params = [params];
    }
    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
        return n;
      });
    });
    return source;
  };
  $.extend($.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: false,
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function (element) {
        this.lastActive = element;

        // Hide error label and remove error class on focus if enabled
        if (this.settings.focusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          }
          this.hideThese(this.errorsFor(element));
        }
      },
      onfocusout: function (element) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function (element, event) {
        // Avoid revalidate the field when pressing one of the following keys
        // Shift       => 16
        // Ctrl        => 17
        // Alt         => 18
        // Caps lock   => 20
        // End         => 35
        // Home        => 36
        // Left arrow  => 37
        // Up arrow    => 38
        // Right arrow => 39
        // Down arrow  => 40
        // Insert      => 45
        // Num lock    => 144
        // AltGr key   => 225
        var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
          return;
        } else if (element.name in this.submitted || element.name in this.invalid) {
          this.element(element);
        }
      },
      onclick: function (element) {
        // Click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted) {
          this.element(element);

          // Or option elements, check parent select in that case
        } else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },
    // https://jqueryvalidation.org/jQuery.validator.setDefaults/
    setDefaults: function (settings) {
      $.extend($.validator.defaults, settings);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}."),
      step: $.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: false,
    prototype: {
      init: function () {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var currentForm = this.currentForm,
          groups = this.groups = {},
          rules;
        $.each(this.settings.groups, function (key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }
          $.each(value, function (index, name) {
            groups[name] = key;
          });
        });
        rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });
        function delegate(event) {
          var isContentEditable = typeof $(this).attr("contenteditable") !== "undefined" && $(this).attr("contenteditable") !== "false";

          // Set form expando on contenteditable
          if (!this.form && isContentEditable) {
            this.form = $(this).closest("form")[0];
            this.name = $(this).attr("name");
          }

          // Ignore the element if it belongs to another form. This will happen mainly
          // when setting the `form` attribute of an input to the id of another form.
          if (currentForm !== this.form) {
            return;
          }
          var validator = $.data(this.form, "validator"),
            eventType = "on" + event.type.replace(/^validate/, ""),
            settings = validator.settings;
          if (settings[eventType] && !$(this).is(settings.ignore)) {
            settings[eventType].call(validator, this, event);
          }
        }
        $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate)

        // Support: Chrome, oldIE
        // "select" is provided as event.target when clicking a option
        .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
        if (this.settings.invalidHandler) {
          $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
        }
      },
      // https://jqueryvalidation.org/Validator.form/
      form: function () {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }
        this.showErrors();
        return this.valid();
      },
      checkForm: function () {
        this.prepareForm();
        for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
          this.check(elements[i]);
        }
        return this.valid();
      },
      // https://jqueryvalidation.org/Validator.element/
      element: function (element) {
        var cleanElement = this.clean(element),
          checkElement = this.validationTargetFor(cleanElement),
          v = this,
          result = true,
          rs,
          group;
        if (checkElement === undefined) {
          delete this.invalid[cleanElement.name];
        } else {
          this.prepareElement(checkElement);
          this.currentElements = $(checkElement);

          // If this element is grouped, then validate all group elements already
          // containing a value
          group = this.groups[checkElement.name];
          if (group) {
            $.each(this.groups, function (name, testgroup) {
              if (testgroup === group && name !== checkElement.name) {
                cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                if (cleanElement && cleanElement.name in v.invalid) {
                  v.currentElements.push(cleanElement);
                  result = v.check(cleanElement) && result;
                }
              }
            });
          }
          rs = this.check(checkElement) !== false;
          result = result && rs;
          if (rs) {
            this.invalid[checkElement.name] = false;
          } else {
            this.invalid[checkElement.name] = true;
          }
          if (!this.numberOfInvalids()) {
            // Hide error containers on last error
            this.toHide = this.toHide.add(this.containers);
          }
          this.showErrors();

          // Add aria-invalid status for screen readers
          $(element).attr("aria-invalid", !rs);
        }
        return result;
      },
      // https://jqueryvalidation.org/Validator.showErrors/
      showErrors: function (errors) {
        if (errors) {
          var validator = this;

          // Add items to error list and map
          $.extend(this.errorMap, errors);
          this.errorList = $.map(this.errorMap, function (message, name) {
            return {
              message: message,
              element: validator.findByName(name)[0]
            };
          });

          // Remove items from success list
          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }
        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },
      // https://jqueryvalidation.org/Validator.resetForm/
      resetForm: function () {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }
        this.invalid = {};
        this.submitted = {};
        this.prepareForm();
        this.hideErrors();
        var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(elements);
      },
      resetElements: function (elements) {
        var i;
        if (this.settings.unhighlight) {
          for (i = 0; elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
            this.findByName(elements[i].name).removeClass(this.settings.validClass);
          }
        } else {
          elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
        }
      },
      numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      },
      objectLength: function (obj) {
        /* jshint unused: false */
        var count = 0,
          i;
        for (i in obj) {
          // This check allows counting elements with empty error
          // message as invalid elements
          if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
            count++;
          }
        }
        return count;
      },
      hideErrors: function () {
        this.hideThese(this.toHide);
      },
      hideThese: function (errors) {
        errors.not(this.containers).text("");
        this.addWrapper(errors).hide();
      },
      valid: function () {
        return this.size() === 0;
      },
      size: function () {
        return this.errorList.length;
      },
      focusInvalid: function () {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus")

            // Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
            .trigger("focusin");
          } catch (e) {

            // Ignore IE throwing errors when focusing hidden elements
          }
        }
      },
      findLastActive: function () {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
          return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
      },
      elements: function () {
        var validator = this,
          rulesCache = {};

        // Select all valid inputs inside the form (no submit or reset buttons)
        return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var name = this.name || $(this).attr("name"); // For contenteditable
          var isContentEditable = typeof $(this).attr("contenteditable") !== "undefined" && $(this).attr("contenteditable") !== "false";
          if (!name && validator.settings.debug && window.console) {
            console.error("%o has no name assigned", this);
          }

          // Set form expando on contenteditable
          if (isContentEditable) {
            this.form = $(this).closest("form")[0];
            this.name = name;
          }

          // Ignore elements that belong to other/nested forms
          if (this.form !== validator.currentForm) {
            return false;
          }

          // Select only the first element for each name, and only those with rules specified
          if (name in rulesCache || !validator.objectLength($(this).rules())) {
            return false;
          }
          rulesCache[name] = true;
          return true;
        });
      },
      clean: function (selector) {
        return $(selector)[0];
      },
      errors: function () {
        var errorClass = this.settings.errorClass.split(" ").join(".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },
      resetInternals: function () {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
      },
      reset: function () {
        this.resetInternals();
        this.currentElements = $([]);
      },
      prepareForm: function () {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function (element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },
      elementValue: function (element) {
        var $element = $(element),
          type = element.type,
          isContentEditable = typeof $element.attr("contenteditable") !== "undefined" && $element.attr("contenteditable") !== "false",
          val,
          idx;
        if (type === "radio" || type === "checkbox") {
          return this.findByName(element.name).filter(":checked").val();
        } else if (type === "number" && typeof element.validity !== "undefined") {
          return element.validity.badInput ? "NaN" : $element.val();
        }
        if (isContentEditable) {
          val = $element.text();
        } else {
          val = $element.val();
        }
        if (type === "file") {
          // Modern browser (chrome & safari)
          if (val.substr(0, 12) === "C:\\fakepath\\") {
            return val.substr(12);
          }

          // Legacy browsers
          // Unix-based path
          idx = val.lastIndexOf("/");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }

          // Windows-based path
          idx = val.lastIndexOf("\\");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }

          // Just the file name
          return val;
        }
        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }
        return val;
      },
      check: function (element) {
        element = this.validationTargetFor(this.clean(element));
        var rules = $(element).rules(),
          rulesCount = $.map(rules, function (n, i) {
            return i;
          }).length,
          dependencyMismatch = false,
          val = this.elementValue(element),
          result,
          method,
          rule,
          normalizer;

        // Abort any pending Ajax request from a previous call to this method.
        this.abortRequest(element);

        // Prioritize the local normalizer defined for this element over the global one
        // if the former exists, otherwise user the global one in case it exists.
        if (typeof rules.normalizer === "function") {
          normalizer = rules.normalizer;
        } else if (typeof this.settings.normalizer === "function") {
          normalizer = this.settings.normalizer;
        }

        // If normalizer is defined, then call it to retreive the changed value instead
        // of using the real one.
        // Note that `this` in the normalizer is `element`.
        if (normalizer) {
          val = normalizer.call(element, val);

          // Delete the normalizer from rules to avoid treating it as a pre-defined method.
          delete rules.normalizer;
        }
        for (method in rules) {
          rule = {
            method: method,
            parameters: rules[method]
          };
          try {
            result = $.validator.methods[method].call(this, val, element, rule.parameters);

            // If a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules
            if (result === "dependency-mismatch" && rulesCount === 1) {
              dependencyMismatch = true;
              continue;
            }
            dependencyMismatch = false;
            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }
            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
            }
            if (e instanceof TypeError) {
              e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
            }
            throw e;
          }
        }
        if (dependencyMismatch) {
          return;
        }
        if (this.objectLength(rules)) {
          this.successList.push(element);
        }
        return true;
      },
      // Return the custom message for the given element and validation method
      // specified in the element's HTML5 data attribute
      // return the generic message if present and no method specific message is present
      customDataMessage: function (element, method) {
        return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
      },
      // Return the custom message for the given element name and validation method
      customMessage: function (name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },
      // Return the first defined argument, allowing empty strings
      findDefined: function () {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }
        return undefined;
      },
      // The second parameter 'rule' used to be a string, and extended to an object literal
      // of the following form:
      // rule = {
      //     method: "method name",
      //     parameters: "the given method parameters"
      // }
      //
      // The old behavior still supported, kept to maintain backward compatibility with
      // old code, and will be removed in the next major release.
      defaultMessage: function (element, rule) {
        if (typeof rule === "string") {
          rule = {
            method: rule
          };
        }
        var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method),
          // 'title' is never undefined, so handle empty string as undefined
          !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
          theregex = /\$?\{(\d+)\}/g;
        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }
        return message;
      },
      formatAndAdd: function (element, rule) {
        var message = this.defaultMessage(element, rule);
        this.errorList.push({
          message: message,
          element: element,
          method: rule.method
        });
        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },
      addWrapper: function (toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }
        return toToggle;
      },
      defaultShowErrors: function () {
        var i, elements, error;
        for (i = 0; this.errorList[i]; i++) {
          error = this.errorList[i];
          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          }
          this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }
        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },
      validElements: function () {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function () {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function (element, message) {
        var place,
          group,
          errorID,
          v,
          error = this.errorsFor(element),
          elementID = this.idOrName(element),
          describedBy = $(element).attr("aria-describedby");
        if (error.length) {
          // Refresh error/success class
          error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);

          // Replace message on existing label
          if (this.settings && this.settings.escapeHtml) {
            error.text(message || "");
          } else {
            error.html(message || "");
          }
        } else {
          // Create error element
          error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass);
          if (this.settings && this.settings.escapeHtml) {
            error.text(message || "");
          } else {
            error.html(message || "");
          }

          // Maintain reference to the element to be placed into the DOM
          place = error;
          if (this.settings.wrapper) {
            // Make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }
          if (this.labelContainer.length) {
            this.labelContainer.append(place);
          } else if (this.settings.errorPlacement) {
            this.settings.errorPlacement.call(this, place, $(element));
          } else {
            place.insertAfter(element);
          }

          // Link error back to the element
          if (error.is("label")) {
            // If the error is a label, then associate using 'for'
            error.attr("for", elementID);

            // If the element is not a child of an associated label, then it's necessary
            // to explicitly apply aria-describedby
          } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
            errorID = error.attr("id");

            // Respect existing non-error aria-describedby
            if (!describedBy) {
              describedBy = errorID;
            } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
              // Add to end of list if not already present
              describedBy += " " + errorID;
            }
            $(element).attr("aria-describedby", describedBy);

            // If this element is grouped, then assign to all elements in the same group
            group = this.groups[element.name];
            if (group) {
              v = this;
              $.each(v.groups, function (name, testgroup) {
                if (testgroup === group) {
                  $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                }
              });
            }
          }
        }
        if (!message && this.settings.success) {
          error.text("");
          if (typeof this.settings.success === "string") {
            error.addClass(this.settings.success);
          } else {
            this.settings.success(error, element);
          }
        }
        this.toShow = this.toShow.add(error);
      },
      errorsFor: function (element) {
        var name = this.escapeCssMeta(this.idOrName(element)),
          describer = $(element).attr("aria-describedby"),
          selector = "label[for='" + name + "'], label[for='" + name + "'] *";

        // 'aria-describedby' should directly reference the error element
        if (describer) {
          selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
        }
        return this.errors().filter(selector);
      },
      // See https://api.jquery.com/category/selectors/, for CSS
      // meta-characters that should be escaped in order to be used with JQuery
      // as a literal part of a name/id or any selector.
      escapeCssMeta: function (string) {
        if (string === undefined) {
          return "";
        }
        return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function (element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },
      validationTargetFor: function (element) {
        // If radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          element = this.findByName(element.name);
        }

        // Always apply ignore filter
        return $(element).not(this.settings.ignore)[0];
      },
      checkable: function (element) {
        return /radio|checkbox/i.test(element.type);
      },
      findByName: function (name) {
        return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
      },
      getLength: function (value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;
          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }
        }
        return value.length;
      },
      depend: function (param, element) {
        return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
      },
      dependTypes: {
        "boolean": function (param) {
          return param;
        },
        "string": function (param, element) {
          return !!$(param, element.form).length;
        },
        "function": function (param, element) {
          return param(element);
        }
      },
      optional: function (element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },
      elementAjaxPort: function (element) {
        return "validate" + element.name;
      },
      startRequest: function (element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          $(element).addClass(this.settings.pendingClass);
          this.pending[element.name] = true;
        }
      },
      stopRequest: function (element, valid) {
        this.pendingRequest--;

        // Sometimes synchronization fails, make sure pendingRequest is never < 0
        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }
        delete this.pending[element.name];
        $(element).removeClass(this.settings.pendingClass);
        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form() && this.pendingRequest === 0) {
          $(this.currentForm).trigger("submit");

          // Remove the hidden input that was used as a replacement for the
          // missing submit button. The hidden input is added by `handle()`
          // to ensure that the value of the used submit button is passed on
          // for scripted submits triggered by this method
          if (this.submitButton) {
            $("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
          }
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },
      abortRequest: function (element) {
        var port;
        if (this.pending[element.name]) {
          port = this.elementAjaxPort(element);
          $.ajaxAbort(port);
          this.pendingRequest--;

          // Sometimes synchronization fails, make sure pendingRequest is never < 0
          if (this.pendingRequest < 0) {
            this.pendingRequest = 0;
          }
          delete this.pending[element.name];
          $(element).removeClass(this.settings.pendingClass);
        }
      },
      previousValue: function (element, method) {
        method = typeof method === "string" && method || "remote";
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, {
            method: method
          })
        });
      },
      // Cleans up all forms and elements, removes validator-specific events
      destroy: function () {
        this.resetForm();
        $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: true
      },
      email: {
        email: true
      },
      url: {
        url: true
      },
      date: {
        date: true
      },
      dateISO: {
        dateISO: true
      },
      number: {
        number: true
      },
      digits: {
        digits: true
      },
      creditcard: {
        creditcard: true
      }
    },
    addClassRules: function (className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },
    classRules: function (element) {
      var rules = {},
        classes = $(element).attr("class");
      if (classes) {
        $.each(classes.split(" "), function () {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }
      return rules;
    },
    normalizeAttributeRule: function (rules, type, method, value) {
      // Convert the value to a number for number inputs, and for text for backwards compability
      // allows type="date" and others to be compared as strings
      if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
        value = Number(value);

        // Support Opera Mini, which returns NaN for undefined minlength
        if (isNaN(value)) {
          value = undefined;
        }
      }
      if (value || value === 0) {
        rules[method] = value;
      } else if (type === method && type !== "range") {
        // Exception: the jquery validate 'range' method
        // does not test for the html5 'range' type
        rules[type === "date" ? "dateISO" : method] = true;
      }
    },
    attributeRules: function (element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;
      for (method in $.validator.methods) {
        // Support for <input required> in both html5 and older browsers
        if (method === "required") {
          value = element.getAttribute(method);

          // Some browsers return an empty string for the required attribute
          // and non-HTML5 browsers might have required="" markup
          if (value === "") {
            value = true;
          }

          // Force non-HTML5 browsers to return bool
          value = !!value;
        } else {
          value = $element.attr(method);
        }
        this.normalizeAttributeRule(rules, type, method, value);
      }

      // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }
      return rules;
    },
    dataRules: function (element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;
      for (method in $.validator.methods) {
        value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());

        // Cast empty attributes like `data-rule-required` to `true`
        if (value === "") {
          value = true;
        }
        this.normalizeAttributeRule(rules, type, method, value);
      }
      return rules;
    },
    staticRules: function (element) {
      var rules = {},
        validator = $.data(element.form, "validator");
      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }
      return rules;
    },
    normalizeRules: function (rules, element) {
      // Handle dependency check
      $.each(rules, function (prop, val) {
        // Ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }
        if (val.param || val.depends) {
          var keepRule = true;
          switch (typeof val.depends) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;
            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }
          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            $.data(element.form, "validator").resetElements($(element));
            delete rules[prop];
          }
        }
      });

      // Evaluate parameters
      $.each(rules, function (rule, parameter) {
        rules[rule] = typeof parameter === "function" && rule !== "normalizer" ? parameter(element) : parameter;
      });

      // Clean number parameters
      $.each(["minlength", "maxlength"], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(["rangelength", "range"], function () {
        var parts;
        if (rules[this]) {
          if (Array.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });
      if ($.validator.autoCreateRanges) {
        // Auto-create ranges
        if (rules.min != null && rules.max != null) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }
        if (rules.minlength != null && rules.maxlength != null) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }
      return rules;
    },
    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function (data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }
      return data;
    },
    // https://jqueryvalidation.org/jQuery.validator.addMethod/
    addMethod: function (name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },
    // https://jqueryvalidation.org/jQuery.validator.methods/
    methods: {
      // https://jqueryvalidation.org/required-method/
      required: function (value, element, param) {
        // Check if dependency is met
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }
        if (element.nodeName.toLowerCase() === "select") {
          // Could be an array for select-multiple or a string, both are fine this way
          var val = $(element).val();
          return val && val.length > 0;
        }
        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }
        return value !== undefined && value !== null && value.length > 0;
      },
      // https://jqueryvalidation.org/email-method/
      email: function (value, element) {
        // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
        // Retrieved 2014-01-14
        // If you have a problem with this implementation, report a bug against the above spec
        // Or use custom methods to implement your own email validation
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      // https://jqueryvalidation.org/url-method/
      url: function (value, element) {
        // Copyright (c) 2010-2013 Diego Perini, MIT licensed
        // https://gist.github.com/dperini/729294
        // see also https://mathiasbynens.be/demo/url-regex
        // modified to allow protocol-relative URLs
        return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      },
      // https://jqueryvalidation.org/date-method/
      date: function () {
        var called = false;
        return function (value, element) {
          if (!called) {
            called = true;
            if (this.settings.debug && window.console) {
              console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\n" + "Please don't use it, since it relies on the Date constructor, which\n" + "behaves very differently across browsers and locales. Use `dateISO`\n" + "instead or one of the locale specific methods in `localizations/`\n" + "and `additional-methods.js`.");
            }
          }
          return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
        };
      }(),
      // https://jqueryvalidation.org/dateISO-method/
      dateISO: function (value, element) {
        return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
      },
      // https://jqueryvalidation.org/number-method/
      number: function (value, element) {
        return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },
      // https://jqueryvalidation.org/digits-method/
      digits: function (value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },
      // https://jqueryvalidation.org/minlength-method/
      minlength: function (value, element, param) {
        var length = Array.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param;
      },
      // https://jqueryvalidation.org/maxlength-method/
      maxlength: function (value, element, param) {
        var length = Array.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= param;
      },
      // https://jqueryvalidation.org/rangelength-method/
      rangelength: function (value, element, param) {
        var length = Array.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param[0] && length <= param[1];
      },
      // https://jqueryvalidation.org/min-method/
      min: function (value, element, param) {
        return this.optional(element) || value >= param;
      },
      // https://jqueryvalidation.org/max-method/
      max: function (value, element, param) {
        return this.optional(element) || value <= param;
      },
      // https://jqueryvalidation.org/range-method/
      range: function (value, element, param) {
        return this.optional(element) || value >= param[0] && value <= param[1];
      },
      // https://jqueryvalidation.org/step-method/
      step: function (value, element, param) {
        var type = $(element).attr("type"),
          errorMessage = "Step attribute on input type " + type + " is not supported.",
          supportedTypes = ["text", "number", "range"],
          re = new RegExp("\\b" + type + "\\b"),
          notSupported = type && !re.test(supportedTypes.join()),
          decimalPlaces = function (num) {
            var match = ("" + num).match(/(?:\.(\d+))?$/);
            if (!match) {
              return 0;
            }

            // Number of digits right of decimal point.
            return match[1] ? match[1].length : 0;
          },
          toInt = function (num) {
            return Math.round(num * Math.pow(10, decimals));
          },
          valid = true,
          decimals;

        // Works only for text, number and range input types
        // TODO find a way to support input types date, datetime, datetime-local, month, time and week
        if (notSupported) {
          throw new Error(errorMessage);
        }
        decimals = decimalPlaces(param);

        // Value can't have too many decimals
        if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
          valid = false;
        }
        return this.optional(element) || valid;
      },
      // https://jqueryvalidation.org/equalTo-method/
      equalTo: function (value, element, param) {
        // Bind to the blur event of the target in order to revalidate whenever the target field is updated
        var target = $(param);
        if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
          target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
            $(element).valid();
          });
        }
        return value === target.val();
      },
      // https://jqueryvalidation.org/remote-method/
      remote: function (value, element, param, method) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }
        method = typeof method === "string" && method || "remote";
        var previous = this.previousValue(element, method),
          validator,
          data,
          optionDataString;
        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }
        previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
        this.settings.messages[element.name][method] = previous.message;
        param = typeof param === "string" && {
          url: param
        } || param;
        optionDataString = $.param($.extend({
          data: value
        }, param.data));
        if (previous.old === optionDataString) {
          return previous.valid;
        }
        previous.old = optionDataString;
        validator = this;
        this.startRequest(element);
        data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          mode: "abort",
          port: this.elementAjaxPort(element),
          dataType: "json",
          data: data,
          context: validator.currentForm,
          success: function (response) {
            var valid = response === true || response === "true",
              errors,
              message,
              submitted;
            validator.settings.messages[element.name][method] = previous.originalMessage;
            if (valid) {
              submitted = validator.formSubmitted;
              validator.toHide = validator.errorsFor(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              validator.invalid[element.name] = false;
              validator.showErrors();
            } else {
              errors = {};
              message = response || validator.defaultMessage(element, {
                method: method,
                parameters: value
              });
              errors[element.name] = previous.message = message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }
            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }
    }
  });

  // Ajax mode: abort
  // usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
  //        $.ajaxAbort( port );
  // if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

  var pendingRequests = {},
    ajax;

  // Use a prefilter if available (1.5+)
  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;
      if (settings.mode === "abort") {
        $.ajaxAbort(port);
        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    ajax = $.ajax;
    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
        port = ("port" in settings ? settings : $.ajaxSettings).port;
      if (mode === "abort") {
        $.ajaxAbort(port);
        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }
      return ajax.apply(this, arguments);
    };
  }

  // Abort the previous request without sending a new one
  $.ajaxAbort = function (port) {
    if (pendingRequests[port]) {
      pendingRequests[port].abort();
      delete pendingRequests[port];
    }
  };
  return $;
});

/***/ }),

/***/ "./node_modules/graph-tabs/src/graph-tabs.js":
/*!***************************************************!*\
  !*** ./node_modules/graph-tabs/src/graph-tabs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphTabs)
/* harmony export */ });
class GraphTabs {
  constructor(selector, options) {
    let defaultOptions = {
      isChanged: () => {}
    }
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabList = this.tabs.querySelector('.tabs__nav');
      this.tabsBtns = this.tabList.querySelectorAll('.tabs__nav-btn');
      this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel');
    } else {
      console.error('Селектор data-tabs не существует!');
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
      console.error('Количество элементов с одинаковым data-tabs больше одного!');
      return;
    }

    if (this.tabsBtns.length !== this.tabsPanels.length) {
      console.error('Количество кнопок и элементов табов не совпадает!');
      return;
    }
  }

  init() {
    this.tabList.setAttribute('role', 'tablist');

    this.tabsBtns.forEach((el, i) => {
      el.setAttribute('role', 'tab');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('id', `${this.selector}${i + 1}`);
      el.classList.remove('tabs__nav-btn--active');
    });

    this.tabsPanels.forEach((el, i) => {
      el.setAttribute('role', 'tabpanel');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('aria-labelledby', this.tabsBtns[i].id);
      el.classList.remove('tabs__panel--active');
    });

    this.tabsBtns[0].classList.add('tabs__nav-btn--active');
    this.tabsBtns[0].removeAttribute('tabindex');
    this.tabsBtns[0].setAttribute('aria-selected', 'true');
    this.tabsPanels[0].classList.add('tabs__panel--active');
  }

  events() {
    this.tabsBtns.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        let currentTab = this.tabList.querySelector('[aria-selected]');

        if (e.currentTarget !== currentTab) {
          this.switchTabs(e.currentTarget, currentTab);
        }
      });

      el.addEventListener('keydown', (e) => {
        let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);

        let dir = null;

        if (e.which === 37) {
          dir = index - 1;
        } else if (e.which === 39) {
          dir = index + 1;
        } else if (e.which === 40) {
          dir = 'down';
        } else {
          dir = null;
        }

        if (dir !== null) {
          if (dir === 'down') {
            this.tabsPanels[i].focus();
          } else if (this.tabsBtns[dir]) {
            this.switchTabs(this.tabsBtns[dir], e.currentTarget);
          }
        }
      });
    });
  }

  switchTabs(newTab, oldTab = this.tabs.querySelector('[aria-selected]')) {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');

    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');

    let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

    this.tabsPanels[oldIndex].classList.remove('tabs__panel--active');
    this.tabsPanels[index].classList.add('tabs__panel--active');

    this.tabsBtns[oldIndex].classList.remove('tabs__nav-btn--active');
    this.tabsBtns[index].classList.add('tabs__nav-btn--active');

    this.options.isChanged(this);
  }
}

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.9
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2022-12-19
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {

					// `qSA` may not throw for unrecognized parts using forgiving parsing:
					// https://drafts.csswg.org/selectors/#forgiving-selector
					// like the `:has()` pseudo-class:
					// https://drafts.csswg.org/selectors/#relational
					// `CSS.supports` is still expected to return `false` then:
					// https://drafts.csswg.org/css-conditional-4/#typedef-supports-selector-fn
					// https://drafts.csswg.org/css-conditional-4/#dfn-support-selector
					if ( support.cssSupportsSelector &&

						// eslint-disable-next-line no-undef
						!CSS.supports( "selector(:is(" + newSelector + "))" ) ) {

						// Support: IE 11+
						// Throw to get to the same code path as an error directly in qSA.
						// Note: once we only support browser supporting
						// `CSS.supports('selector(...)')`, we can most likely drop
						// the `try-catch`. IE doesn't implement the API.
						throw new Error();
					}

					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	// Support: Chrome 105+, Firefox 104+, Safari 15.4+
	// Make sure forgiving mode is not used in `CSS.supports( "selector(...)" )`.
	//
	// `:is()` uses a forgiving selector list as an argument and is widely
	// implemented, so it's a good one to test against.
	support.cssSupportsSelector = assert( function() {
		/* eslint-disable no-undef */

		return CSS.supports( "selector(*)" ) &&

			// Support: Firefox 78-81 only
			// In old Firefox, `:is()` didn't use forgiving parsing. In that case,
			// fail this test as there's no selector to test against that.
			// `CSS.supports` uses unforgiving parsing
			document.querySelectorAll( ":is(:jqfake)" ) &&

			// `*` is needed as Safari & newer Chrome implemented something in between
			// for `:has()` - it throws in `qSA` if it only contains an unsupported
			// argument but multiple ones, one of which is supported, are fine.
			// We want to play safe in case `:is()` gets the same treatment.
			!CSS.supports( "selector(:is(*,:jqfake))" );

		/* eslint-enable */
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	if ( !support.cssSupportsSelector ) {

		// Support: Chrome 105+, Safari 15.4+
		// `:has()` uses a forgiving selector list as an argument so our regular
		// `try-catch` mechanism fails to catch `:has()` with arguments not supported
		// natively like `:has(:contains("Foo"))`. Where supported & spec-compliant,
		// we now use `CSS.supports("selector(:is(SELECTOR_TO_BE_TESTED))")`, but
		// outside that we mark `:has` as buggy.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {

			// Support: IE <9 only
			// IE doesn't have `contains` on `document` so we need to check for
			// `documentElement` presence.
			// We need to fall back to `a` when `documentElement` is missing
			// as `ownerDocument` of elements within `<template/>` may have
			// a null one - a default behavior of all modern browsers.
			var adown = a.nodeType === 9 && a.documentElement || a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./src/js/vendor/datatables-ru.json":
/*!******************************************!*\
  !*** ./src/js/vendor/datatables-ru.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"processing":"Подождите...","search":"Поиск:","lengthMenu":"Показать _MENU_ записей","info":"Записи с _START_ до _END_ из _TOTAL_ записей","infoEmpty":"Записи с 0 до 0 из 0 записей","infoFiltered":"(отфильтровано из _MAX_ записей)","loadingRecords":"Загрузка записей...","zeroRecords":"Записи отсутствуют.","emptyTable":"В таблице отсутствуют данные","paginate":{"first":"Первая","previous":"Предыдущая","next":"Следующая","last":"Последняя"},"aria":{"sortAscending":": активировать для сортировки столбца по возрастанию","sortDescending":": активировать для сортировки столбца по убыванию"},"select":{"rows":{"1":"Выбрана одна запись","_":"Выбрано записей: %d"},"cells":{"1":"Выбрана 1 ячейка ","_":"Выбрано %d ячеек"},"columns":{"1":"Выбран 1 столбец ","_":"Выбрано %d столбцов "}},"searchBuilder":{"conditions":{"string":{"startsWith":"Начинается с","contains":"Содержит","empty":"Пусто","endsWith":"Заканчивается на","equals":"Равно","not":"Не","notEmpty":"Не пусто","notContains":"Не содержит","notStartsWith":"Не начинается на","notEndsWith":"Не заканчивается на"},"date":{"after":"После","before":"До","between":"Между","empty":"Пусто","equals":"Равно","not":"Не","notBetween":"Не между","notEmpty":"Не пусто"},"number":{"empty":"Пусто","equals":"Равно","gt":"Больше чем","gte":"Больше, чем равно","lt":"Меньше чем","lte":"Меньше, чем равно","not":"Не","notEmpty":"Не пусто","between":"Между","notBetween":"Не между ними"},"array":{"equals":"Равно","empty":"Пусто","contains":"Содержит","not":"Не равно","notEmpty":"Не пусто","without":"Без"}},"data":"Данные","deleteTitle":"Удалить условие фильтрации","logicAnd":"И","logicOr":"Или","title":{"0":"Конструктор поиска","_":"Конструктор поиска (%d)"},"value":"Значение","add":"Добавить условие","button":{"0":"Конструктор поиска","_":"Конструктор поиска (%d)"},"clearAll":"Очистить всё","condition":"Условие","leftTitle":"Превосходные критерии","rightTitle":"Критерии отступа"},"searchPanes":{"clearMessage":"Очистить всё","collapse":{"0":"Панели поиска","_":"Панели поиска (%d)"},"count":"{total}","countFiltered":"{shown} ({total})","emptyPanes":"Нет панелей поиска","loadMessage":"Загрузка панелей поиска","title":"Фильтры активны - %d","showMessage":"Показать все","collapseMessage":"Скрыть все"},"buttons":{"pdf":"PDF","print":"Печать","collection":"Коллекция <span class=\\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\\"></span>","colvis":"Видимость столбцов","colvisRestore":"Восстановить видимость","copy":"Копировать","copyKeys":"Нажмите ctrl or u2318 + C, чтобы скопировать данные таблицы в буфер обмена.  Для отмены, щелкните по сообщению или нажмите escape.","copyTitle":"Скопировать в буфер обмена","csv":"CSV","excel":"Excel","pageLength":{"1":"Показать 1 строку","-1":"Показать все строки","_":"Показать %d строк"},"removeState":"Удалить","renameState":"Переименовать","copySuccess":{"1":"Строка скопирована в буфер обмена","_":"Скопировано %d строк в буфер обмена"},"createState":"Создать состояние","removeAllStates":"Удалить все состояния","savedStates":"Сохраненные состояния","stateRestore":"Состояние %d","updateState":"Обновить"},"decimal":".","infoThousands":",","autoFill":{"cancel":"Отменить","fill":"Заполнить все ячейки <i>%d<i></i></i>","fillHorizontal":"Заполнить ячейки по горизонтали","fillVertical":"Заполнить ячейки по вертикали","info":"Информация"},"datetime":{"previous":"Предыдущий","next":"Следующий","hours":"Часы","minutes":"Минуты","seconds":"Секунды","unknown":"Неизвестный","amPm":["AM","PM"],"months":{"0":"Январь","1":"Февраль","2":"Март","3":"Апрель","4":"Май","5":"Июнь","6":"Июль","7":"Август","8":"Сентябрь","9":"Октябрь","10":"Ноябрь","11":"Декабрь"},"weekdays":["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]},"editor":{"close":"Закрыть","create":{"button":"Новый","title":"Создать новую запись","submit":"Создать"},"edit":{"button":"Изменить","title":"Изменить запись","submit":"Изменить"},"remove":{"button":"Удалить","title":"Удалить","submit":"Удалить","confirm":{"1":"Вы точно хотите удалить 1 строку?","_":"Вы точно хотите удалить %d строк?"}},"multi":{"restore":"Отменить изменения","title":"Несколько значений","noMulti":"Это поле должно редактироватся отдельно, а не как часть групы","info":"Выбранные элементы содержат разные значения для этого входа.  Чтобы отредактировать и установить для всех элементов этого ввода одинаковое значение, нажмите или коснитесь здесь, в противном случае они сохранят свои индивидуальные значения."},"error":{"system":"Возникла системная ошибка (<a target=\\"\\\\\\" rel=\\"nofollow\\" href=\\"\\\\\\">Подробнее</a>)."}},"searchPlaceholder":"Что ищете?","stateRestore":{"creationModal":{"button":"Создать","search":"Поиск","columns":{"search":"Поиск по столбцам","visible":"Видимость столбцов"},"name":"Имя:","order":"Сортировка","paging":"Страницы","scroller":"Позиция прокрутки","searchBuilder":"Редактор поиска","select":"Выделение","title":"Создать новое состояние","toggleLabel":"Включает:"},"removeJoiner":"и","removeSubmit":"Удалить","renameButton":"Переименовать","duplicateError":"Состояние с таким именем уже существует.","emptyError":"Имя не может быть пустым.","emptyStates":"Нет сохраненных состояний","removeConfirm":"Вы уверены, что хотите удалить %s?","removeError":"Не удалось удалить состояние.","removeTitle":"Удалить состояние","renameLabel":"Новое имя для %s:","renameTitle":"Переименовать состояние"},"thousands":" "}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map