// @fancyapps/ui/Fancybox v4.0.25
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function i(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=c(t);if(e){var o=c(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return u(this,i)}}function v(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=v(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:i):o.value}},p.apply(this,arguments)}function g(t){throw new TypeError('"'+t+'" is read-only')}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,o,a=[],s=!0,r=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(t){r=!0,o=t}finally{try{s||null==i.return||i.return()}finally{if(r)throw o}}return a}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return x(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function w(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=b(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,r=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){r=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw a}}}}var k=function(t){return"object"===n(t)&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t)},S=function t(){for(var e=!1,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];"boolean"==typeof o[0]&&(e=o.shift());var s=o[0];if(!s||"object"!==n(s))throw new Error("extendee must be an object");for(var r=o.slice(1),l=r.length,c=0;c<l;c++){var h=r[c];for(var d in h)if(h.hasOwnProperty(d)){var u=h[d];if(e&&(Array.isArray(u)||k(u))){var f=Array.isArray(u)?[]:{};s[d]=t(!0,s.hasOwnProperty(d)?s[d]:f,u)}else s[d]=u}}return s},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4;return t=parseFloat(t)||0,Math.round((t+Number.EPSILON)*e)/e},$=function t(e){return!!(e&&"object"===n(e)&&e instanceof Element&&e!==document.body)&&(!e.__Panzoom&&(function(t){var e=getComputedStyle(t)["overflow-y"],i=getComputedStyle(t)["overflow-x"],n=("scroll"===e||"auto"===e)&&Math.abs(t.scrollHeight-t.clientHeight)>1,o=("scroll"===i||"auto"===i)&&Math.abs(t.scrollWidth-t.clientWidth)>1;return n||o}(e)?e:t(e.parentNode)))},E="undefined"!=typeof window&&window.ResizeObserver||function(){function t(e){o(this,t),this.observables=[],this.boundCheck=this.check.bind(this),this.boundCheck(),this.callback=e}return s(t,[{key:"observe",value:function(t){if(!this.observables.some((function(e){return e.el===t}))){var e={el:t,size:{height:t.clientHeight,width:t.clientWidth}};this.observables.push(e)}}},{key:"unobserve",value:function(t){this.observables=this.observables.filter((function(e){return e.el!==t}))}},{key:"disconnect",value:function(){this.observables=[]}},{key:"check",value:function(){var t=this.observables.filter((function(t){var e=t.el.clientHeight,i=t.el.clientWidth;if(t.size.height!==e||t.size.width!==i)return t.size.height=e,t.size.width=i,!0})).map((function(t){return t.el}));t.length>0&&this.callback(t),window.requestAnimationFrame(this.boundCheck)}}]),t}(),P=s((function t(e){o(this,t),this.id=self.Touch&&e instanceof Touch?e.identifier:-1,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY})),T=function(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0},L=function(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t},_=function(t){return"changedTouches"in t},A=function(){function t(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.start,s=void 0===a?function(){return!0}:a,r=n.move,l=void 0===r?function(){}:r,c=n.end,h=void 0===c?function(){}:c;o(this,t),this._element=e,this.startPointers=[],this.currentPointers=[],this._pointerStart=function(t){if(1&t.buttons){var e=new P(t);i.currentPointers.some((function(t){return t.id===e.id}))||i._triggerPointerStart(e,t)&&(window.addEventListener("mousemove",i._move,{passive:!1}),window.addEventListener("mouseup",i._pointerEnd,{passive:!1}))}},this._touchStart=function(t){for(var e=0,n=Array.from(t.changedTouches||[]);e<n.length;e++){var o=n[e];i._triggerPointerStart(new P(o),t)}},this._move=function(t){var e,n=i.currentPointers.slice(),o=_(t)?Array.from(t.changedTouches).map((function(t){return new P(t)})):[new P(t)],a=[],s=w(o);try{var r=function(){var t=e.value,n=i.currentPointers.findIndex((function(e){return e.id===t.id}));if(n<0)return"continue";a.push(t),i.currentPointers[n]=t};for(s.s();!(e=s.n()).done;)r()}catch(t){s.e(t)}finally{s.f()}i._moveCallback(n,i.currentPointers.slice(),t)},this._triggerPointerEnd=function(t,e){if(!_(e)&&1&e.buttons)return!1;var n=i.currentPointers.findIndex((function(e){return e.id===t.id}));return!(n<0)&&(i.currentPointers.splice(n,1),i.startPointers.splice(n,1),i._endCallback(t,e),!0)},this._pointerEnd=function(t){i._triggerPointerEnd(new P(t),t)&&(window.removeEventListener("mousemove",i._move),window.removeEventListener("mouseup",i._pointerEnd))},this._touchEnd=function(t){for(var e=0,n=Array.from(t.changedTouches||[]);e<n.length;e++){var o=n[e];i._triggerPointerEnd(new P(o),t)}},this._startCallback=s,this._moveCallback=l,this._endCallback=h,this._element.addEventListener("mousedown",this._pointerStart,{passive:!1}),this._element.addEventListener("touchstart",this._touchStart,{passive:!1}),this._element.addEventListener("touchmove",this._move,{passive:!1}),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd)}return s(t,[{key:"stop",value:function(){this._element.removeEventListener("mousedown",this._pointerStart,{passive:!1}),this._element.removeEventListener("touchstart",this._touchStart,{passive:!1}),this._element.removeEventListener("touchmove",this._move,{passive:!1}),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),window.removeEventListener("mousemove",this._move,{passive:!1}),window.removeEventListener("mouseup",this._pointerEnd,{passive:!1})}},{key:"_triggerPointerStart",value:function(t,e){return!!this._startCallback(t,e)&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}}]),t}(),O=function(t,e){return t.split(".").reduce((function(t,e){return t&&t[e]}),e)},z=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.options=S(!0,{},e),this.plugins=[],this.events={};for(var i=0,n=["on","once"];i<n.length;i++)for(var a=n[i],s=0,r=Object.entries(this.options[a]||{});s<r.length;s++){var l=r[s];this[a].apply(this,y(l))}}return s(t,[{key:"option",value:function(t,e){t=String(t);var i=O(t,this.options);if("function"==typeof i){for(var n,o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];i=(n=i).call.apply(n,[this,this].concat(a))}return void 0===i?e:i}},{key:"localize",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t=(t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,(function(t,n,o){var a="";o?a=e.option("".concat(n[0]+n.toLowerCase().substring(1),".l10n.").concat(o)):n&&(a=e.option("l10n.".concat(n))),a||(a=t);for(var s=0;s<i.length;s++)a=a.split(i[s][0]).join(i[s][1]);return a}))).replace(/\{\{(.*)\}\}/,(function(t,e){return e}))}},{key:"on",value:function(t,e){var i=this;if(k(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.on.apply(this,y(a))}return this}return String(t).split(" ").forEach((function(t){var n=i.events[t]=i.events[t]||[];-1==n.indexOf(e)&&n.push(e)})),this}},{key:"once",value:function(t,e){var i=this;if(k(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.once.apply(this,y(a))}return this}return String(t).split(" ").forEach((function(t){var n=function n(){i.off(t,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];e.call.apply(e,[i,i].concat(a))};n._=e,i.on(t,n)})),this}},{key:"off",value:function(t,e){var i=this;if(!k(t))return t.split(" ").forEach((function(t){var n=i.events[t];if(!n||!n.length)return i;for(var o=-1,a=0,s=n.length;a<s;a++){var r=n[a];if(r&&(r===e||r._===e)){o=a;break}}-1!=o&&n.splice(o,1)})),this;for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.off.apply(this,y(a))}}},{key:"trigger",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o,a=w(y(this.events[t]||[]).slice());try{for(a.s();!(o=a.n()).done;){var s=o.value;if(s&&!1===s.call.apply(s,[this,this].concat(i)))return!1}}catch(t){a.e(t)}finally{a.f()}var r,l=w(y(this.events["*"]||[]).slice());try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c&&!1===c.call.apply(c,[this,t,this].concat(i)))return!1}}catch(t){l.e(t)}finally{l.f()}return!0}},{key:"attachPlugins",value:function(t){for(var e={},i=0,n=Object.entries(t||{});i<n.length;i++){var o=m(n[i],2),a=o[0],s=o[1];!1===this.options[a]||this.plugins[a]||(this.options[a]=S({},s.defaults||{},this.options[a]),e[a]=new s(this))}for(var r=0,l=Object.entries(e);r<l.length;r++){var c=m(l[r],2);c[0],c[1].attach(this)}return this.plugins=Object.assign({},this.plugins,e),this}},{key:"detachPlugins",value:function(){for(var t in this.plugins){var e=void 0;(e=this.plugins[t])&&"function"==typeof e.detach&&e.detach(this)}return this.plugins={},this}}]),t}(),M={touch:!0,zoom:!0,pinchToZoom:!0,panOnlyZoomed:!1,lockAxis:!1,friction:.64,decelFriction:.88,zoomFriction:.74,bounceForce:.2,baseScale:1,minScale:1,maxScale:2,step:.5,textSelection:!1,click:"toggleZoom",wheel:"zoom",wheelFactor:42,wheelLimit:5,draggableClass:"is-draggable",draggingClass:"is-dragging",ratio:1},I=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,n),(i=e.call(this,S(!0,{},M,a))).state="init",i.$container=t;for(var s=0,r=["onLoad","onWheel","onClick"];s<r.length;s++){var l=r[s];i[l]=i[l].bind(d(i))}return i.initLayout(),i.resetValues(),i.attachPlugins(n.Plugins),i.trigger("init"),i.updateMetrics(),i.attachEvents(),i.trigger("ready"),!1===i.option("centerOnStart")?i.state="ready":i.panTo({friction:0}),t.__Panzoom=d(i),i}return s(n,[{key:"initLayout",value:function(){var t=this.$container;if(!(t instanceof HTMLElement))throw new Error("Panzoom: Container not found");var e=this.option("content")||t.querySelector(".panzoom__content");if(!e)throw new Error("Panzoom: Content not found");this.$content=e;var i,n=this.option("viewport")||t.querySelector(".panzoom__viewport");n||!1===this.option("wrapInner")||((n=document.createElement("div")).classList.add("panzoom__viewport"),(i=n).append.apply(i,y(t.childNodes)),t.appendChild(n));this.$viewport=n||e.parentNode}},{key:"resetValues",value:function(){this.updateRate=this.option("updateRate",/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?250:24),this.container={width:0,height:0},this.viewport={width:0,height:0},this.content={origWidth:0,origHeight:0,width:0,height:0,x:this.option("x",0),y:this.option("y",0),scale:this.option("baseScale")},this.transform={x:0,y:0,scale:1},this.resetDragPosition()}},{key:"onLoad",value:function(t){this.updateMetrics(),this.panTo({scale:this.option("baseScale"),friction:0}),this.trigger("load",t)}},{key:"onClick",value:function(t){if(!t.defaultPrevented)if(this.option("textSelection")&&window.getSelection().toString().length)t.stopPropagation();else{var e=this.$content.getClientRects()[0];if("ready"!==this.state&&(this.dragPosition.midPoint||Math.abs(e.top-this.dragStart.rect.top)>1||Math.abs(e.left-this.dragStart.rect.left)>1))return t.preventDefault(),void t.stopPropagation();!1!==this.trigger("click",t)&&this.option("zoom")&&"toggleZoom"===this.option("click")&&(t.preventDefault(),t.stopPropagation(),this.zoomWithClick(t))}}},{key:"onWheel",value:function(t){!1!==this.trigger("wheel",t)&&this.option("zoom")&&this.option("wheel")&&this.zoomWithWheel(t)}},{key:"zoomWithWheel",value:function(t){void 0===this.changedDelta&&(this.changedDelta=0);var e=Math.max(-1,Math.min(1,-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)),i=this.content.scale,n=i*(100+e*this.option("wheelFactor"))/100;if(e<0&&Math.abs(i-this.option("minScale"))<.01||e>0&&Math.abs(i-this.option("maxScale"))<.01?(this.changedDelta+=Math.abs(e),n=i):(this.changedDelta=0,n=Math.max(Math.min(n,this.option("maxScale")),this.option("minScale"))),!(this.changedDelta>this.option("wheelLimit"))&&(t.preventDefault(),n!==i)){var o=this.$content.getBoundingClientRect(),a=t.clientX-o.left,s=t.clientY-o.top;this.zoomTo(n,{x:a,y:s})}}},{key:"zoomWithClick",value:function(t){var e=this.$content.getClientRects()[0],i=t.clientX-e.left,n=t.clientY-e.top;this.toggleZoom({x:i,y:n})}},{key:"attachEvents",value:function(){var t=this;this.$content.addEventListener("load",this.onLoad),this.$container.addEventListener("wheel",this.onWheel,{passive:!1}),this.$container.addEventListener("click",this.onClick,{passive:!1}),this.initObserver();var e=new A(this.$container,{start:function(i,n){if(!t.option("touch"))return!1;if(t.velocity.scale<0)return!1;var o=n.composedPath()[0];if(!e.currentPointers.length){if(-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(o.nodeName))return!1;if(t.option("textSelection")&&function(t,e,i){for(var n=t.childNodes,o=document.createRange(),a=0;a<n.length;a++){var s=n[a];if(s.nodeType===Node.TEXT_NODE){o.selectNodeContents(s);var r=o.getBoundingClientRect();if(e>=r.left&&i>=r.top&&e<=r.right&&i<=r.bottom)return s}}return!1}(o,n.clientX,n.clientY))return!1}return!$(o)&&(!1!==t.trigger("touchStart",n)&&("mousedown"===n.type&&n.preventDefault(),t.state="pointerdown",t.resetDragPosition(),t.dragPosition.midPoint=null,t.dragPosition.time=Date.now(),!0))},move:function(i,n,o){if("pointerdown"===t.state)if(!1!==t.trigger("touchMove",o)){if(!(n.length<2&&!0===t.option("panOnlyZoomed")&&t.content.width<=t.viewport.width&&t.content.height<=t.viewport.height&&t.transform.scale<=t.option("baseScale"))&&(!(n.length>1)||t.option("zoom")&&!1!==t.option("pinchToZoom"))){var a=L(i[0],i[1]),s=L(n[0],n[1]),r=s.clientX-a.clientX,l=s.clientY-a.clientY,c=T(i[0],i[1]),h=T(n[0],n[1]),d=c&&h?h/c:1;t.dragOffset.x+=r,t.dragOffset.y+=l,t.dragOffset.scale*=d,t.dragOffset.time=Date.now()-t.dragPosition.time;var u=1===t.dragStart.scale&&t.option("lockAxis");if(u&&!t.lockAxis){if(Math.abs(t.dragOffset.x)<6&&Math.abs(t.dragOffset.y)<6)return void o.preventDefault();var f=Math.abs(180*Math.atan2(t.dragOffset.y,t.dragOffset.x)/Math.PI);t.lockAxis=f>45&&f<135?"y":"x"}if("xy"===u||"y"!==t.lockAxis){if(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation(),t.lockAxis&&(t.dragOffset["x"===t.lockAxis?"y":"x"]=0),t.$container.classList.add(t.option("draggingClass")),t.transform.scale===t.option("baseScale")&&"y"===t.lockAxis||(t.dragPosition.x=t.dragStart.x+t.dragOffset.x),t.transform.scale===t.option("baseScale")&&"x"===t.lockAxis||(t.dragPosition.y=t.dragStart.y+t.dragOffset.y),t.dragPosition.scale=t.dragStart.scale*t.dragOffset.scale,n.length>1){var v=L(e.startPointers[0],e.startPointers[1]),p=v.clientX-t.dragStart.rect.x,g=v.clientY-t.dragStart.rect.y,m=t.getZoomDelta(t.content.scale*t.dragOffset.scale,p,g),y=m.deltaX,b=m.deltaY;t.dragPosition.x-=y,t.dragPosition.y-=b,t.dragPosition.midPoint=s}else t.setDragResistance();t.transform={x:t.dragPosition.x,y:t.dragPosition.y,scale:t.dragPosition.scale},t.startAnimation()}}}else o.preventDefault()},end:function(n,o){if("pointerdown"===t.state)if(t._dragOffset=i({},t.dragOffset),e.currentPointers.length)t.resetDragPosition();else if(t.state="decel",t.friction=t.option("decelFriction"),t.recalculateTransform(),t.$container.classList.remove(t.option("draggingClass")),!1!==t.trigger("touchEnd",o)&&"decel"===t.state){var a=t.option("minScale");if(t.transform.scale<a)t.zoomTo(a,{friction:.64});else{var s=t.option("maxScale");if(t.transform.scale-s>.01){var r=t.dragPosition.midPoint||n,l=t.$content.getClientRects()[0];t.zoomTo(s,{friction:.64,x:r.clientX-l.left,y:r.clientY-l.top})}else;}}}});this.pointerTracker=e}},{key:"initObserver",value:function(){var t=this;this.resizeObserver||(this.resizeObserver=new E((function(){t.updateTimer||(t.updateTimer=setTimeout((function(){var e=t.$container.getBoundingClientRect();e.width&&e.height?((Math.abs(e.width-t.container.width)>1||Math.abs(e.height-t.container.height)>1)&&(t.isAnimating()&&t.endAnimation(!0),t.updateMetrics(),t.panTo({x:t.content.x,y:t.content.y,scale:t.option("baseScale"),friction:0})),t.updateTimer=null):t.updateTimer=null}),t.updateRate))})),this.resizeObserver.observe(this.$container))}},{key:"resetDragPosition",value:function(){this.lockAxis=null,this.friction=this.option("friction"),this.velocity={x:0,y:0,scale:0};var t=this.content,e=t.x,n=t.y,o=t.scale;this.dragStart={rect:this.$content.getBoundingClientRect(),x:e,y:n,scale:o},this.dragPosition=i(i({},this.dragPosition),{},{x:e,y:n,scale:o}),this.dragOffset={x:0,y:0,scale:1,time:0}}},{key:"updateMetrics",value:function(t){!0!==t&&this.trigger("beforeUpdate");var e,n=this.$container,o=this.$content,a=this.$viewport,s=o instanceof HTMLImageElement,r=this.option("zoom"),l=this.option("resizeParent",r),c=this.option("width"),h=this.option("height"),d=c||(e=o,Math.max(parseFloat(e.naturalWidth||0),parseFloat(e.width&&e.width.baseVal&&e.width.baseVal.value||0),parseFloat(e.offsetWidth||0),parseFloat(e.scrollWidth||0))),u=h||function(t){return Math.max(parseFloat(t.naturalHeight||0),parseFloat(t.height&&t.height.baseVal&&t.height.baseVal.value||0),parseFloat(t.offsetHeight||0),parseFloat(t.scrollHeight||0))}(o);Object.assign(o.style,{width:c?"".concat(c,"px"):"",height:h?"".concat(h,"px"):"",maxWidth:"",maxHeight:""}),l&&Object.assign(a.style,{width:"",height:""});var f=this.option("ratio");c=d=C(d*f),h=u=C(u*f);var v=o.getBoundingClientRect(),p=a.getBoundingClientRect(),g=a==n?p:n.getBoundingClientRect(),m=Math.max(a.offsetWidth,C(p.width)),y=Math.max(a.offsetHeight,C(p.height)),b=window.getComputedStyle(a);if(m-=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight),y-=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom),this.viewport.width=m,this.viewport.height=y,r){if(Math.abs(d-v.width)>.1||Math.abs(u-v.height)>.1){var x=function(t,e,i,n){var o=Math.min(i/t||0,n/e);return{width:t*o||0,height:e*o||0}}(d,u,Math.min(d,v.width),Math.min(u,v.height));c=C(x.width),h=C(x.height)}Object.assign(o.style,{width:"".concat(c,"px"),height:"".concat(h,"px"),transform:""})}if(l&&(Object.assign(a.style,{width:"".concat(c,"px"),height:"".concat(h,"px")}),this.viewport=i(i({},this.viewport),{},{width:c,height:h})),s&&r&&"function"!=typeof this.options.maxScale){var w=this.option("maxScale");this.options.maxScale=function(){return this.content.origWidth>0&&this.content.fitWidth>0?this.content.origWidth/this.content.fitWidth:w}}this.content=i(i({},this.content),{},{origWidth:d,origHeight:u,fitWidth:c,fitHeight:h,width:c,height:h,scale:1,isZoomable:r}),this.container={width:g.width,height:g.height},!0!==t&&this.trigger("afterUpdate")}},{key:"zoomIn",value:function(t){this.zoomTo(this.content.scale+(t||this.option("step")))}},{key:"zoomOut",value:function(t){this.zoomTo(this.content.scale-(t||this.option("step")))}},{key:"toggleZoom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.option("maxScale"),i=this.option("baseScale"),n=this.content.scale>i+.5*(e-i)?i:e;this.zoomTo(n,t)}},{key:"zoomTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.option("baseScale"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?null:i,o=e.y,a=void 0===o?null:o;t=Math.max(Math.min(t,this.option("maxScale")),this.option("minScale"));var s=C(this.content.scale/(this.content.width/this.content.fitWidth),1e7);null===n&&(n=this.content.width*s*.5),null===a&&(a=this.content.height*s*.5);var r=this.getZoomDelta(t,n,a),l=r.deltaX,c=r.deltaY;n=this.content.x-l,a=this.content.y-c,this.panTo({x:n,y:a,scale:t,friction:this.option("zoomFriction")})}},{key:"getZoomDelta",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.content.fitWidth*this.content.scale,o=this.content.fitHeight*this.content.scale,a=e>0&&n?e/n:0,s=i>0&&o?i/o:0,r=this.content.fitWidth*t,l=this.content.fitHeight*t,c=(r-n)*a,h=(l-o)*s;return{deltaX:c,deltaY:h}}},{key:"panTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?this.content.x:e,o=t.y,a=void 0===o?this.content.y:o,s=t.scale,r=t.friction,l=void 0===r?this.option("friction"):r,c=t.ignoreBounds,h=void 0!==c&&c;if(s=s||this.content.scale||1,!h){var d=this.getBounds(s),u=d.boundX,f=d.boundY;u&&(n=Math.max(Math.min(n,u.to),u.from)),f&&(a=Math.max(Math.min(a,f.to),f.from))}this.friction=l,this.transform=i(i({},this.transform),{},{x:n,y:a,scale:s}),l?(this.state="panning",this.velocity={x:(1/this.friction-1)*(n-this.content.x),y:(1/this.friction-1)*(a-this.content.y),scale:(1/this.friction-1)*(s-this.content.scale)},this.startAnimation()):this.endAnimation()}},{key:"startAnimation",value:function(){var t=this;this.rAF?cancelAnimationFrame(this.rAF):this.trigger("startAnimation"),this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"animate",value:function(){var t=this;if(this.setEdgeForce(),this.setDragForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.velocity.scale*=this.friction,this.content.x+=this.velocity.x,this.content.y+=this.velocity.y,this.content.scale+=this.velocity.scale,this.isAnimating())this.setTransform();else if("pointerdown"!==this.state)return void this.endAnimation();this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"getBounds",value:function(t){var e=this.boundX,i=this.boundY;if(void 0!==e&&void 0!==i)return{boundX:e,boundY:i};e={from:0,to:0},i={from:0,to:0},t=t||this.transform.scale;var n=this.content.fitWidth*t,o=this.content.fitHeight*t,a=this.viewport.width,s=this.viewport.height;if(n<a){var r=C(.5*(a-n));e.from=r,e.to=r}else e.from=C(a-n);if(o<s){var l=.5*(s-o);i.from=l,i.to=l}else i.from=C(s-o);return{boundX:e,boundY:i}}},{key:"setEdgeForce",value:function(){if("decel"===this.state){var t,e,i,n,o=this.option("bounceForce"),a=this.getBounds(Math.max(this.transform.scale,this.content.scale)),s=a.boundX,r=a.boundY;if(s&&(t=this.content.x<s.from,e=this.content.x>s.to),r&&(i=this.content.y<r.from,n=this.content.y>r.to),t||e){var l=((t?s.from:s.to)-this.content.x)*o,c=this.content.x+(this.velocity.x+l)/this.friction;c>=s.from&&c<=s.to&&(l+=this.velocity.x),this.velocity.x=l,this.recalculateTransform()}if(i||n){var h=((i?r.from:r.to)-this.content.y)*o,d=this.content.y+(h+this.velocity.y)/this.friction;d>=r.from&&d<=r.to&&(h+=this.velocity.y),this.velocity.y=h,this.recalculateTransform()}}}},{key:"setDragResistance",value:function(){if("pointerdown"===this.state){var t,e,i,n,o=this.getBounds(this.dragPosition.scale),a=o.boundX,s=o.boundY;if(a&&(t=this.dragPosition.x<a.from,e=this.dragPosition.x>a.to),s&&(i=this.dragPosition.y<s.from,n=this.dragPosition.y>s.to),(t||e)&&(!t||!e)){var r=t?a.from:a.to,l=r-this.dragPosition.x;this.dragPosition.x=r-.3*l}if((i||n)&&(!i||!n)){var c=i?s.from:s.to,h=c-this.dragPosition.y;this.dragPosition.y=c-.3*h}}}},{key:"setDragForce",value:function(){"pointerdown"===this.state&&(this.velocity.x=this.dragPosition.x-this.content.x,this.velocity.y=this.dragPosition.y-this.content.y,this.velocity.scale=this.dragPosition.scale-this.content.scale)}},{key:"recalculateTransform",value:function(){this.transform.x=this.content.x+this.velocity.x/(1/this.friction-1),this.transform.y=this.content.y+this.velocity.y/(1/this.friction-1),this.transform.scale=this.content.scale+this.velocity.scale/(1/this.friction-1)}},{key:"isAnimating",value:function(){return!(!this.friction||!(Math.abs(this.velocity.x)>.05||Math.abs(this.velocity.y)>.05||Math.abs(this.velocity.scale)>.05))}},{key:"setTransform",value:function(t){var e,n,o,a,s;(t?(e=C(this.transform.x),n=C(this.transform.y),o=this.transform.scale,this.content=i(i({},this.content),{},{x:e,y:n,scale:o})):(e=C(this.content.x),n=C(this.content.y),o=this.content.scale/(this.content.width/this.content.fitWidth),this.content=i(i({},this.content),{},{x:e,y:n})),this.trigger("beforeTransform"),e=C(this.content.x),n=C(this.content.y),t&&this.option("zoom"))?(a=C(this.content.fitWidth*o),s=C(this.content.fitHeight*o),this.content.width=a,this.content.height=s,this.transform=i(i({},this.transform),{},{width:a,height:s,scale:o}),Object.assign(this.$content.style,{width:"".concat(a,"px"),height:"".concat(s,"px"),maxWidth:"none",maxHeight:"none",transform:"translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(1)")})):this.$content.style.transform="translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(").concat(o,")");this.trigger("afterTransform")}},{key:"endAnimation",value:function(t){cancelAnimationFrame(this.rAF),this.rAF=null,this.velocity={x:0,y:0,scale:0},this.setTransform(!0),this.state="ready",this.handleCursor(),!0!==t&&this.trigger("endAnimation")}},{key:"handleCursor",value:function(){var t=this.option("draggableClass");t&&this.option("touch")&&(1==this.option("panOnlyZoomed")&&this.content.width<=this.viewport.width&&this.content.height<=this.viewport.height&&this.transform.scale<=this.option("baseScale")?this.$container.classList.remove(t):this.$container.classList.add(t))}},{key:"detachEvents",value:function(){this.$content.removeEventListener("load",this.onLoad),this.$container.removeEventListener("wheel",this.onWheel,{passive:!1}),this.$container.removeEventListener("click",this.onClick,{passive:!1}),this.pointerTracker&&(this.pointerTracker.stop(),this.pointerTracker=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"destroy",value:function(){"destroy"!==this.state&&(this.state="destroy",clearTimeout(this.updateTimer),this.updateTimer=null,cancelAnimationFrame(this.rAF),this.rAF=null,this.detachEvents(),this.detachPlugins(),this.resetDragPosition())}}]),n}(z);I.version="4.0.25",I.Plugins={};var F=function(t,e){var i=0;return function(){var n=(new Date).getTime();if(!(n-i<e))return i=n,t.apply(void 0,arguments)}},R=function(){function t(e){o(this,t),this.$container=null,this.$prev=null,this.$next=null,this.carousel=e,this.onRefresh=this.onRefresh.bind(this)}return s(t,[{key:"option",value:function(t){return this.carousel.option("Navigation.".concat(t))}},{key:"createButton",value:function(t){var e,i=this,n=document.createElement("button");n.setAttribute("title",this.carousel.localize("{{".concat(t.toUpperCase(),"}}")));var o=this.option("classNames.button")+" "+this.option("classNames.".concat(t));return(e=n.classList).add.apply(e,y(o.split(" "))),n.setAttribute("tabindex","0"),n.innerHTML=this.carousel.localize(this.option("".concat(t,"Tpl"))),n.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),i.carousel["slide".concat("next"===t?"Next":"Prev")]()})),n}},{key:"build",value:function(){var t;this.$container||(this.$container=document.createElement("div"),(t=this.$container.classList).add.apply(t,y(this.option("classNames.main").split(" "))),this.carousel.$container.appendChild(this.$container));this.$next||(this.$next=this.createButton("next"),this.$container.appendChild(this.$next)),this.$prev||(this.$prev=this.createButton("prev"),this.$container.appendChild(this.$prev))}},{key:"onRefresh",value:function(){var t=this.carousel.pages.length;t<=1||t>1&&this.carousel.elemDimWidth<this.carousel.wrapDimWidth&&!Number.isInteger(this.carousel.option("slidesPerPage"))?this.cleanup():(this.build(),this.$prev.removeAttribute("disabled"),this.$next.removeAttribute("disabled"),this.carousel.option("infiniteX",this.carousel.option("infinite"))||(this.carousel.page<=0&&this.$prev.setAttribute("disabled",""),this.carousel.page>=t-1&&this.$next.setAttribute("disabled","")))}},{key:"cleanup",value:function(){this.$prev&&this.$prev.remove(),this.$prev=null,this.$next&&this.$next.remove(),this.$next=null,this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.carousel.on("refresh change",this.onRefresh)}},{key:"detach",value:function(){this.carousel.off("refresh change",this.onRefresh),this.cleanup()}}]),t}();R.defaults={prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',classNames:{main:"carousel__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}};var N=function(){function t(e){o(this,t),this.carousel=e,this.$list=null,this.events={change:this.onChange.bind(this),refresh:this.onRefresh.bind(this)}}return s(t,[{key:"buildList",value:function(){var t=this;if(!(this.carousel.pages.length<this.carousel.option("Dots.minSlideCount"))){var e=document.createElement("ol");return e.classList.add("carousel__dots"),e.addEventListener("click",(function(e){if("page"in e.target.dataset){e.preventDefault(),e.stopPropagation();var i=parseInt(e.target.dataset.page,10),n=t.carousel;i!==n.page&&(n.pages.length<3&&n.option("infinite")?n[0==i?"slidePrev":"slideNext"]():n.slideTo(i))}})),this.$list=e,this.carousel.$container.appendChild(e),this.carousel.$container.classList.add("has-dots"),e}}},{key:"removeList",value:function(){this.$list&&(this.$list.parentNode.removeChild(this.$list),this.$list=null),this.carousel.$container.classList.remove("has-dots")}},{key:"rebuildDots",value:function(){var t=this,e=this.$list,i=!!e,n=this.carousel.pages.length;if(n<2)i&&this.removeList();else{i||(e=this.buildList());var o=this.$list.children.length;if(o>n)for(var a=n;a<o;a++)this.$list.removeChild(this.$list.lastChild);else{for(var s=function(e){var i=document.createElement("li");i.classList.add("carousel__dot"),i.dataset.page=e,i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.setAttribute("title",t.carousel.localize("{{GOTO}}",[["%d",e+1]])),i.addEventListener("keydown",(function(t){var e,n=t.code;"Enter"===n||"NumpadEnter"===n?e=i:"ArrowRight"===n?e=i.nextSibling:"ArrowLeft"===n&&(e=i.previousSibling),e&&e.click()})),t.$list.appendChild(i)},r=o;r<n;r++)s(r);this.setActiveDot()}}}},{key:"setActiveDot",value:function(){if(this.$list){this.$list.childNodes.forEach((function(t){t.classList.remove("is-selected")}));var t=this.$list.childNodes[this.carousel.page];t&&t.classList.add("is-selected")}}},{key:"onChange",value:function(){this.setActiveDot()}},{key:"onRefresh",value:function(){this.rebuildDots()}},{key:"attach",value:function(){this.carousel.on(this.events)}},{key:"detach",value:function(){this.removeList(),this.carousel.off(this.events),this.carousel=null}}]),t}(),D=function(){function t(e){o(this,t),this.carousel=e,this.selectedIndex=null,this.friction=0,this.onNavReady=this.onNavReady.bind(this),this.onNavClick=this.onNavClick.bind(this),this.onNavCreateSlide=this.onNavCreateSlide.bind(this),this.onTargetChange=this.onTargetChange.bind(this)}return s(t,[{key:"addAsTargetFor",value:function(t){this.target=this.carousel,this.nav=t,this.attachEvents()}},{key:"addAsNavFor",value:function(t){this.target=t,this.nav=this.carousel,this.attachEvents()}},{key:"attachEvents",value:function(){this.nav.options.initialSlide=this.target.options.initialPage,this.nav.on("ready",this.onNavReady),this.nav.on("createSlide",this.onNavCreateSlide),this.nav.on("Panzoom.click",this.onNavClick),this.target.on("change",this.onTargetChange),this.target.on("Panzoom.afterUpdate",this.onTargetChange)}},{key:"onNavReady",value:function(){this.onTargetChange(!0)}},{key:"onNavClick",value:function(t,e,i){var n=i.target.closest(".carousel__slide");if(n){i.stopPropagation();var o=parseInt(n.dataset.index,10),a=this.target.findPageForSlide(o);this.target.page!==a&&this.target.slideTo(a,{friction:this.friction}),this.markSelectedSlide(o)}}},{key:"onNavCreateSlide",value:function(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}},{key:"onTargetChange",value:function(){var t=this.target.pages[this.target.page].indexes[0],e=this.nav.findPageForSlide(t);this.nav.slideTo(e),this.markSelectedSlide(t)}},{key:"markSelectedSlide",value:function(t){this.selectedIndex=t,y(this.nav.slides).filter((function(t){return t.$el&&t.$el.classList.remove("is-nav-selected")}));var e=this.nav.slides[t];e&&e.$el&&e.$el.classList.add("is-nav-selected")}},{key:"attach",value:function(t){var e=t.options.Sync;(e.target||e.nav)&&(e.target?this.addAsNavFor(e.target):e.nav&&this.addAsTargetFor(e.nav),this.friction=e.friction)}},{key:"detach",value:function(){this.nav&&(this.nav.off("ready",this.onNavReady),this.nav.off("Panzoom.click",this.onNavClick),this.nav.off("createSlide",this.onNavCreateSlide)),this.target&&(this.target.off("Panzoom.afterUpdate",this.onTargetChange),this.target.off("change",this.onTargetChange))}}]),t}();D.defaults={friction:.92};var B={Navigation:R,Dots:N,Sync:D},W={slides:[],preload:0,slidesPerPage:"auto",initialPage:null,initialSlide:null,friction:.92,center:!0,infinite:!0,fill:!0,dragFree:!1,prefix:"",classNames:{viewport:"carousel__viewport",track:"carousel__track",slide:"carousel__slide",slideSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}},H=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,n),a=S(!0,{},W,a),(i=e.call(this,a)).state="init",i.$container=t,!(i.$container instanceof HTMLElement))throw new Error("No root element provided");return i.slideNext=F(i.slideNext.bind(d(i)),250),i.slidePrev=F(i.slidePrev.bind(d(i)),250),i.init(),t.__Carousel=d(i),i}return s(n,[{key:"init",value:function(){this.pages=[],this.page=this.pageIndex=null,this.prevPage=this.prevPageIndex=null,this.attachPlugins(n.Plugins),this.trigger("init"),this.initLayout(),this.initSlides(),this.updateMetrics(),this.$track&&this.pages.length&&(this.$track.style.transform="translate3d(".concat(-1*this.pages[this.page].left,"px, 0px, 0) scale(1)")),this.manageSlideVisiblity(),this.initPanzoom(),this.state="ready",this.trigger("ready")}},{key:"initLayout",value:function(){var t,e,i,n,o=this.option("prefix"),a=this.option("classNames");(this.$viewport=this.option("viewport")||this.$container.querySelector(".".concat(o).concat(a.viewport)),this.$viewport)||(this.$viewport=document.createElement("div"),(t=this.$viewport.classList).add.apply(t,y((o+a.viewport).split(" "))),(e=this.$viewport).append.apply(e,y(this.$container.childNodes)),this.$container.appendChild(this.$viewport));(this.$track=this.option("track")||this.$container.querySelector(".".concat(o).concat(a.track)),this.$track)||(this.$track=document.createElement("div"),(i=this.$track.classList).add.apply(i,y((o+a.track).split(" "))),(n=this.$track).append.apply(n,y(this.$viewport.childNodes)),this.$viewport.appendChild(this.$track))}},{key:"initSlides",value:function(){var t=this;this.slides=[],this.$viewport.querySelectorAll(".".concat(this.option("prefix")).concat(this.option("classNames.slide"))).forEach((function(e){var i={$el:e,isDom:!0};t.slides.push(i),t.trigger("createSlide",i,t.slides.length)})),Array.isArray(this.options.slides)&&(this.slides=S(!0,y(this.slides),this.options.slides))}},{key:"updateMetrics",value:function(){var t,e=this,n=0,o=[];this.slides.forEach((function(i,a){var s=i.$el,r=i.isDom||!t?e.getSlideMetrics(s):t;i.index=a,i.width=r,i.left=n,t=r,n+=r,o.push(a)}));var a=Math.max(this.$track.offsetWidth,C(this.$track.getBoundingClientRect().width)),s=getComputedStyle(this.$track);a-=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),this.contentWidth=n,this.viewportWidth=a;var r=[],l=this.option("slidesPerPage");if(Number.isInteger(l)&&n>a)for(var c=0;c<this.slides.length;c+=l)r.push({indexes:o.slice(c,c+l),slides:this.slides.slice(c,c+l)});else for(var h=0,d=0,u=0;u<this.slides.length;u+=1){var f=this.slides[u];(!r.length||d+f.width>a)&&(r.push({indexes:[],slides:[]}),h=r.length-1,d=0),d+=f.width,r[h].indexes.push(u),r[h].slides.push(f)}var v=this.option("center"),p=this.option("fill");r.forEach((function(t,i){t.index=i,t.width=t.slides.reduce((function(t,e){return t+e.width}),0),t.left=t.slides[0].left,v&&(t.left+=.5*(a-t.width)*-1),p&&!e.option("infiniteX",e.option("infinite"))&&n>a&&(t.left=Math.max(t.left,0),t.left=Math.min(t.left,n-a))}));var g,m=[];r.forEach((function(t){var e=i({},t);g&&e.left===g.left?(g.width+=e.width,g.slides=[].concat(y(g.slides),y(e.slides)),g.indexes=[].concat(y(g.indexes),y(e.indexes))):(e.index=m.length,g=e,m.push(e))})),this.pages=m;var b=this.page;if(null===b){var x=this.option("initialSlide");b=null!==x?this.findPageForSlide(x):parseInt(this.option("initialPage",0),10)||0,m[b]||(b=m.length&&b>m.length?m[m.length-1].index:0),this.page=b,this.pageIndex=b}this.updatePanzoom(),this.trigger("refresh")}},{key:"getSlideMetrics",value:function(t){if(!t){var e,i,n=this.slides[0];if((t=document.createElement("div")).dataset.isTestEl=1,t.style.visibility="hidden",(e=t.classList).add.apply(e,y((this.option("prefix")+this.option("classNames.slide")).split(" "))),n.customClass)(i=t.classList).add.apply(i,y(n.customClass.split(" ")));this.$track.prepend(t)}var o=Math.max(t.offsetWidth,C(t.getBoundingClientRect().width)),a=t.currentStyle||window.getComputedStyle(t);return o=o+(parseFloat(a.marginLeft)||0)+(parseFloat(a.marginRight)||0),t.dataset.isTestEl&&t.remove(),o}},{key:"findPageForSlide",value:function(t){t=parseInt(t,10)||0;var e=this.pages.find((function(e){return e.indexes.indexOf(t)>-1}));return e?e.index:null}},{key:"slideNext",value:function(){this.slideTo(this.pageIndex+1)}},{key:"slidePrev",value:function(){this.slideTo(this.pageIndex-1)}},{key:"slideTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?-1*this.setPage(t,!0):i,o=e.y,a=void 0===o?0:o,s=e.friction,r=void 0===s?this.option("friction"):s;this.Panzoom.content.x===n&&!this.Panzoom.velocity.x&&r||(this.Panzoom.panTo({x:n,y:a,friction:r,ignoreBounds:!0}),"ready"===this.state&&"ready"===this.Panzoom.state&&this.trigger("settle"))}},{key:"initPanzoom",value:function(){var t=this;this.Panzoom&&this.Panzoom.destroy();var e=S(!0,{},{content:this.$track,wrapInner:!1,resizeParent:!1,zoom:!1,click:!1,lockAxis:"x",x:this.pages.length?-1*this.pages[this.page].left:0,centerOnStart:!1,textSelection:function(){return t.option("textSelection",!1)},panOnlyZoomed:function(){return this.content.width<=this.viewport.width}},this.option("Panzoom"));this.Panzoom=new I(this.$container,e),this.Panzoom.on({"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Panzoom.".concat(e)].concat(n))},afterUpdate:function(){t.updatePage()},beforeTransform:this.onBeforeTransform.bind(this),touchEnd:this.onTouchEnd.bind(this),endAnimation:function(){t.trigger("settle")}}),this.updateMetrics(),this.manageSlideVisiblity()}},{key:"updatePanzoom",value:function(){this.Panzoom&&(this.Panzoom.content=i(i({},this.Panzoom.content),{},{fitWidth:this.contentWidth,origWidth:this.contentWidth,width:this.contentWidth}),this.pages.length>1&&this.option("infiniteX",this.option("infinite"))?this.Panzoom.boundX=null:this.pages.length&&(this.Panzoom.boundX={from:-1*this.pages[this.pages.length-1].left,to:-1*this.pages[0].left}),this.option("infiniteY",this.option("infinite"))?this.Panzoom.boundY=null:this.Panzoom.boundY={from:0,to:0},this.Panzoom.handleCursor())}},{key:"manageSlideVisiblity",value:function(){var t=this,e=this.contentWidth,i=this.viewportWidth,n=this.Panzoom?-1*this.Panzoom.content.x:this.pages.length?this.pages[this.page].left:0,o=this.option("preload"),a=this.option("infiniteX",this.option("infinite")),s=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-left")),r=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-right"));this.slides.forEach((function(l){var c,h,d=0;c=n-s,h=n+i+r,c-=o*(i+s+r),h+=o*(i+s+r);var u=l.left+l.width>c&&l.left<h;c=n+e-s,h=n+e+i+r,c-=o*(i+s+r);var f=a&&l.left+l.width>c&&l.left<h;c=n-e-s,h=n-e+i+r,c-=o*(i+s+r);var v=a&&l.left+l.width>c&&l.left<h;f||u||v?(t.createSlideEl(l),u&&(d=0),f&&(d=-1),v&&(d=1),l.left+l.width>n&&l.left<=n+i+r&&(d=0)):t.removeSlideEl(l),l.hasDiff=d}));var l=0,c=0;this.slides.forEach((function(t,i){var n=0;t.$el?(i!==l||t.hasDiff?n=c+t.hasDiff*e:c=0,t.$el.style.left=Math.abs(n)>.1?"".concat(c+t.hasDiff*e,"px"):"",l++):c+=t.width})),this.markSelectedSlides()}},{key:"createSlideEl",value:function(t){var e;if(t){if(!t.$el){var i,n=document.createElement("div");if(n.dataset.index=t.index,(e=n.classList).add.apply(e,y((this.option("prefix")+this.option("classNames.slide")).split(" "))),t.customClass)(i=n.classList).add.apply(i,y(t.customClass.split(" ")));t.html&&(n.innerHTML=t.html);var o=[];this.slides.forEach((function(t,e){t.$el&&o.push(e)}));var a=t.index,s=null;if(o.length){var r=o.reduce((function(t,e){return Math.abs(e-a)<Math.abs(t-a)?e:t}));s=this.slides[r]}return this.$track.insertBefore(n,s&&s.$el?s.index<t.index?s.$el.nextSibling:s.$el:null),t.$el=n,this.trigger("createSlide",t,a),t}var l,c=t.$el.dataset.index;c&&parseInt(c,10)===t.index||(t.$el.dataset.index=t.index,t.$el.querySelectorAll("[data-lazy-srcset]").forEach((function(t){t.srcset=t.dataset.lazySrcset})),t.$el.querySelectorAll("[data-lazy-src]").forEach((function(t){var e=t.dataset.lazySrc;t instanceof HTMLImageElement?t.src=e:t.style.backgroundImage="url('".concat(e,"')")})),(l=t.$el.dataset.lazySrc)&&(t.$el.style.backgroundImage="url('".concat(l,"')")),t.state="ready")}}},{key:"removeSlideEl",value:function(t){t.$el&&!t.isDom&&(this.trigger("removeSlide",t),t.$el.remove(),t.$el=null)}},{key:"markSelectedSlides",value:function(){var t=this,e=this.option("classNames.slideSelected"),i="aria-hidden";this.slides.forEach((function(n,o){var a=n.$el;if(a){var s=t.pages[t.page];s&&s.indexes&&s.indexes.indexOf(o)>-1?(e&&!a.classList.contains(e)&&(a.classList.add(e),t.trigger("selectSlide",n)),a.removeAttribute(i)):(e&&a.classList.contains(e)&&(a.classList.remove(e),t.trigger("unselectSlide",n)),a.setAttribute(i,!0))}}))}},{key:"updatePage",value:function(){this.updateMetrics(),this.slideTo(this.page,{friction:0})}},{key:"onBeforeTransform",value:function(){this.option("infiniteX",this.option("infinite"))&&this.manageInfiniteTrack(),this.manageSlideVisiblity()}},{key:"manageInfiniteTrack",value:function(){var t=this.contentWidth,e=this.viewportWidth;if(!(!this.option("infiniteX",this.option("infinite"))||this.pages.length<2||t<e)){var i=this.Panzoom,n=!1;return i.content.x<-1*(t-e)&&(i.content.x+=t,this.pageIndex=this.pageIndex-this.pages.length,n=!0),i.content.x>e&&(i.content.x-=t,this.pageIndex=this.pageIndex+this.pages.length,n=!0),n&&"pointerdown"===i.state&&i.resetDragPosition(),n}}},{key:"onTouchEnd",value:function(t,e){var i=this.option("dragFree");if(!i&&this.pages.length>1&&t.dragOffset.time<350&&Math.abs(t.dragOffset.y)<1&&Math.abs(t.dragOffset.x)>5)this[t.dragOffset.x<0?"slideNext":"slidePrev"]();else if(i){var n=m(this.getPageFromPosition(-1*t.transform.x),2)[1];this.setPage(n)}else this.slideToClosest()}},{key:"slideToClosest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getPageFromPosition(-1*this.Panzoom.content.x),i=m(e,2),n=i[1];this.slideTo(n,t)}},{key:"getPageFromPosition",value:function(t){var e=this.pages.length;this.option("center")&&(t+=.5*this.viewportWidth);var i=Math.floor(t/this.contentWidth);t-=i*this.contentWidth;var n=this.slides.find((function(e){return e.left<=t&&e.left+e.width>t}));if(n){var o=this.findPageForSlide(n.index);return[o,o+i*e]}return[0,0]}},{key:"setPage",value:function(t,e){var i=0,n=parseInt(t,10)||0,o=this.page,a=this.pageIndex,s=this.pages.length,r=this.contentWidth,l=this.viewportWidth;if(t=(n%s+s)%s,this.option("infiniteX",this.option("infinite"))&&r>l){var c=Math.floor(n/s)||0,h=r;if(i=this.pages[t].left+c*h,!0===e&&s>2){var d=-1*this.Panzoom.content.x,u=i-h,f=i+h,v=Math.abs(d-i),p=Math.abs(d-u),g=Math.abs(d-f);g<v&&g<=p?(i=f,n+=s):p<v&&p<g&&(i=u,n-=s)}}else t=n=Math.max(0,Math.min(n,s-1)),i=this.pages.length?this.pages[t].left:0;return this.page=t,this.pageIndex=n,null!==o&&t!==o&&(this.prevPage=o,this.prevPageIndex=a,this.trigger("change",t,o)),i}},{key:"destroy",value:function(){var t=this;this.state="destroy",this.slides.forEach((function(e){t.removeSlideEl(e)})),this.slides=[],this.Panzoom.destroy(),this.detachPlugins()}}]),n}(z);H.version="4.0.25",H.Plugins=B;var j=!("undefined"==typeof window||!window.document||!window.document.createElement),X=null,q=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'],U=function(t){if(t&&j){null===X&&document.createElement("div").focus({get preventScroll(){return X=!0,!1}});try{if(t.setActive)t.setActive();else if(X)t.focus({preventScroll:!0});else{var e=window.pageXOffset||document.body.scrollTop,i=window.pageYOffset||document.body.scrollLeft;t.focus(),document.body.scrollTo({top:e,left:i,behavior:"auto"})}}catch(t){}}},Y=function(){function t(e){o(this,t),this.fancybox=e,this.viewport=null,this.pendingUpdate=null;for(var i=0,n=["onReady","onResize","onTouchstart","onTouchmove"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}}return s(t,[{key:"onReady",value:function(){var t=window.visualViewport;t&&(this.viewport=t,this.startY=0,t.addEventListener("resize",this.onResize),this.updateViewport()),window.addEventListener("touchstart",this.onTouchstart,{passive:!1}),window.addEventListener("touchmove",this.onTouchmove,{passive:!1}),window.addEventListener("wheel",this.onWheel,{passive:!1})}},{key:"onResize",value:function(){this.updateViewport()}},{key:"updateViewport",value:function(){var t=this.fancybox,e=this.viewport,i=e.scale||1,n=t.$container;if(n){var o="",a="",s="";i-1>.1&&(o="".concat(e.width*i,"px"),a="".concat(e.height*i,"px"),s="translate3d(".concat(e.offsetLeft,"px, ").concat(e.offsetTop,"px, 0) scale(").concat(1/i,")")),n.style.width=o,n.style.height=a,n.style.transform=s}}},{key:"onTouchstart",value:function(t){this.startY=t.touches?t.touches[0].screenY:t.screenY}},{key:"onTouchmove",value:function(t){var e=this.startY,i=window.innerWidth/window.document.documentElement.clientWidth;if(t.cancelable&&!(t.touches.length>1||1!==i)){var n=$(t.composedPath()[0]);if(n){var o=window.getComputedStyle(n),a=parseInt(o.getPropertyValue("height"),10),s=t.touches?t.touches[0].screenY:t.screenY,r=e<=s&&0===n.scrollTop,l=e>=s&&n.scrollHeight-n.scrollTop===a;(r||l)&&t.preventDefault()}else t.preventDefault()}}},{key:"onWheel",value:function(t){$(t.composedPath()[0])||t.preventDefault()}},{key:"cleanup",value:function(){this.pendingUpdate&&(cancelAnimationFrame(this.pendingUpdate),this.pendingUpdate=null);var t=this.viewport;t&&(t.removeEventListener("resize",this.onResize),this.viewport=null),window.removeEventListener("touchstart",this.onTouchstart,!1),window.removeEventListener("touchmove",this.onTouchmove,!1),window.removeEventListener("wheel",this.onWheel,{passive:!1})}},{key:"attach",value:function(){this.fancybox.on("initLayout",this.onReady)}},{key:"detach",value:function(){this.fancybox.off("initLayout",this.onReady),this.cleanup()}}]),t}(),V=function(){function t(e){o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var i=0,n=["onPrepare","onClosing","onKeydown"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={prepare:this.onPrepare,closing:this.onClosing,keydown:this.onKeydown}}return s(t,[{key:"onPrepare",value:function(){this.getSlides().length<this.fancybox.option("Thumbs.minSlideCount")?this.state="disabled":!0===this.fancybox.option("Thumbs.autoStart")&&this.fancybox.Carousel.Panzoom.content.height>=this.fancybox.option("Thumbs.minScreenHeight")&&this.build()}},{key:"onClosing",value:function(){this.Carousel&&this.Carousel.Panzoom.detachEvents()}},{key:"onKeydown",value:function(t,e){e===t.option("Thumbs.key")&&this.toggle()}},{key:"build",value:function(){var t=this;if(!this.$container){var e=document.createElement("div");e.classList.add("fancybox__thumbs"),this.fancybox.$carousel.parentNode.insertBefore(e,this.fancybox.$carousel.nextSibling),this.Carousel=new H(e,S(!0,{Dots:!1,Navigation:!1,Sync:{friction:0},infinite:!1,center:!0,fill:!0,dragFree:!0,slidesPerPage:1,preload:1},this.fancybox.option("Thumbs.Carousel"),{Sync:{target:this.fancybox.Carousel},slides:this.getSlides()})),this.Carousel.Panzoom.on("wheel",(function(e,i){i.preventDefault(),t.fancybox[i.deltaY<0?"prev":"next"]()})),this.$container=e,this.state="visible"}}},{key:"getSlides",value:function(){var t,e=[],i=w(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){var n=t.value,o=n.thumb;o&&e.push({html:'<div class="fancybox__thumb" style="background-image:url(\''.concat(o,"')\"></div>"),customClass:"has-thumb has-".concat(n.type||"image")})}}catch(t){i.e(t)}finally{i.f()}return e}},{key:"toggle",value:function(){"visible"===this.state?this.hide():"hidden"===this.state?this.show():this.build()}},{key:"show",value:function(){"hidden"===this.state&&(this.$container.style.display="",this.Carousel.Panzoom.attachEvents(),this.state="visible")}},{key:"hide",value:function(){"visible"===this.state&&(this.Carousel.Panzoom.detachEvents(),this.$container.style.display="none",this.state="hidden")}},{key:"cleanup",value:function(){this.Carousel&&(this.Carousel.destroy(),this.Carousel=null),this.$container&&(this.$container.remove(),this.$container=null),this.state="init"}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();V.defaults={minSlideCount:2,minScreenHeight:500,autoStart:!0,key:"t",Carousel:{}};var Z=function(t,e){for(var i=new URL(t),n=new URLSearchParams(i.search),o=new URLSearchParams,a=0,s=[].concat(y(n),y(Object.entries(e)));a<s.length;a++){var r=m(s[a],2),l=r[0],c=r[1];"t"===l?o.set("start",parseInt(c)):o.set(l,c)}o=o.toString();var h=t.match(/#t=((.*)?\d+s)/);return h&&(o+="#t=".concat(h[1])),o},G={video:{autoplay:!0,ratio:16/9},youtube:{autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},vimeo:{hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},html5video:{tpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',format:""}},K=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onInit","onReady","onCreateSlide","onRemoveSlide","onSelectSlide","onUnselectSlide","onRefresh","onMessage"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={init:this.onInit,ready:this.onReady,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide,"Carousel.selectSlide":this.onSelectSlide,"Carousel.unselectSlide":this.onUnselectSlide,"Carousel.refresh":this.onRefresh}}return s(t,[{key:"onInit",value:function(){var t,e=w(this.fancybox.items);try{for(e.s();!(t=e.n()).done;){var i=t.value;this.processType(i)}}catch(t){e.e(t)}finally{e.f()}}},{key:"processType",value:function(t){if(t.html)return t.src=t.html,t.type="html",void delete t.html;var e=t.src||"",i=t.type||this.fancybox.options.type,n=null;if(!e||"string"==typeof e){if(n=e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){var o=Z(e,this.fancybox.option("Html.youtube")),a=encodeURIComponent(n[1]);t.videoId=a,t.src="https://www.youtube-nocookie.com/embed/".concat(a,"?").concat(o),t.thumb=t.thumb||"https://i.ytimg.com/vi/".concat(a,"/mqdefault.jpg"),t.vendor="youtube",i="video"}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)){var s=Z(e,this.fancybox.option("Html.vimeo")),r=encodeURIComponent(n[1]);t.videoId=r,t.src="https://player.vimeo.com/video/".concat(r,"?").concat(s),t.vendor="vimeo",i="video"}else(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src="//maps.google.".concat(n[1],"/?ll=").concat((n[2]?n[2]+"&z="+Math.floor(n[3])+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&"),"&output=").concat(n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"),i="map"):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src="//maps.google.".concat(n[1],"/maps?q=").concat(n[2].replace("query=","q=").replace("api=1",""),"&output=embed"),i="map");i||("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i="html5video",t.format=t.format||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i="image":e.match(/\.(pdf)((\?|#).*)?$/i)&&(i="pdf")),t.type=i||this.fancybox.option("defaultType","image"),"html5video"!==i&&"video"!==i||(t.video=S({},this.fancybox.option("Html.video"),t.video),t._width&&t._height?t.ratio=parseFloat(t._width)/parseFloat(t._height):t.ratio=t.ratio||t.video.ratio||G.video.ratio)}}},{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&(t.setContent(e),e.index===t.fancybox.getSlide().index&&t.playVideo(e))}))}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"loadInlineContent",value:function(t){var e;if(t.src instanceof HTMLElement)e=t.src;else if("string"==typeof t.src){var i=t.src.split("#",2),n=2===i.length&&""===i[0]?i[1]:i[0];e=document.getElementById(n)}if(e){if("clone"===t.type||e.$placeHolder){var o=(e=e.cloneNode(!0)).getAttribute("id");o=o?"".concat(o,"--clone"):"clone-".concat(this.fancybox.id,"-").concat(t.index),e.setAttribute("id",o)}else{var a=document.createElement("div");a.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(a,e),e.$placeHolder=a}this.fancybox.setContent(t,e)}else this.fancybox.setError(t,"{{ELEMENT_NOT_FOUND}}")}},{key:"loadAjaxContent",value:function(t){var e=this.fancybox,i=new XMLHttpRequest;e.showLoading(t),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&"ready"===e.state&&(e.hideLoading(t),200===i.status?e.setContent(t,i.responseText):e.setError(t,404===i.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))},i.open("GET",t.src),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(t.ajax||null),t.xhr=i}},{key:"loadIframeContent",value:function(t){var e=this,i=this.fancybox,n=document.createElement("iframe");if(n.className="fancybox__iframe",n.setAttribute("id","fancybox__iframe_".concat(i.id,"_").concat(t.index)),n.setAttribute("allow","autoplay; fullscreen"),n.setAttribute("scrolling","auto"),t.$iframe=n,"iframe"!==t.type||!1===t.preload)return n.setAttribute("src",t.src),this.fancybox.setContent(t,n),void this.resizeIframe(t);i.showLoading(t);var o=document.createElement("div");o.style.visibility="hidden",this.fancybox.setContent(t,o),o.appendChild(n),n.onerror=function(){i.setError(t,"{{IFRAME_ERROR}}")},n.onload=function(){i.hideLoading(t);var o=!1;n.isReady||(n.isReady=!0,o=!0),n.src.length&&(n.parentNode.style.visibility="",e.resizeIframe(t),o&&i.revealContent(t))},n.setAttribute("src",t.src)}},{key:"setAspectRatio",value:function(t){var e=t.$content,i=t.ratio;if(e){var n=t._width,o=t._height;if(i||n&&o){Object.assign(e.style,{width:n&&o?"100%":"",height:n&&o?"100%":"",maxWidth:"",maxHeight:""});var a=e.offsetWidth,s=e.offsetHeight;if(o=o||s,(n=n||a)>a||o>s){var r=Math.min(a/n,s/o);n*=r,o*=r}Math.abs(n/o-i)>.01&&(i<n/o?n=o*i:o=n/i),Object.assign(e.style,{width:"".concat(n,"px"),height:"".concat(o,"px")})}}}},{key:"resizeIframe",value:function(t){var e=t.$iframe;if(e){var i=t._width||0,n=t._height||0;i&&n&&(t.autoSize=!1);var o=e.parentNode,a=o&&o.style;if(!1!==t.preload&&!1!==t.autoSize&&a)try{var s=window.getComputedStyle(o),r=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),l=parseFloat(s.paddingTop)+parseFloat(s.paddingBottom),c=e.contentWindow.document,h=c.getElementsByTagName("html")[0],d=c.body;a.width="",d.style.overflow="hidden",i=i||h.scrollWidth+r,a.width="".concat(i,"px"),d.style.overflow="",a.flex="0 0 auto",a.height="".concat(d.scrollHeight,"px"),n=h.scrollHeight+l}catch(t){}if(i||n){var u={flex:"0 1 auto"};i&&(u.width="".concat(i,"px")),n&&(u.height="".concat(n,"px")),Object.assign(a,u)}}}},{key:"onRefresh",value:function(t,e){var i=this;e.slides.forEach((function(t){t.$el&&(t.$iframe&&i.resizeIframe(t),t.ratio&&i.setAspectRatio(t))}))}},{key:"setContent",value:function(t){if(t&&!t.isDom){switch(t.type){case"html":this.fancybox.setContent(t,t.src);break;case"html5video":this.fancybox.setContent(t,this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.format||t.html5video&&t.html5video.format||"").replace("{{poster}}",t.poster||t.thumb||""));break;case"inline":case"clone":this.loadInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"pdf":case"video":case"map":t.preload=!1;case"iframe":this.loadIframeContent(t)}t.ratio&&this.setAspectRatio(t)}}},{key:"onSelectSlide",value:function(t,e,i){"ready"===t.state&&this.playVideo(i)}},{key:"playVideo",value:function(t){if("html5video"===t.type&&t.video.autoplay)try{var e=t.$el.querySelector("video");if(e){var i=e.play();void 0!==i&&i.then((function(){})).catch((function(t){e.muted=!0,e.play()}))}}catch(t){}if("video"===t.type&&t.$iframe&&t.$iframe.contentWindow){!function e(){if("done"===t.state&&t.$iframe&&t.$iframe.contentWindow){var i;if(t.$iframe.isReady)return t.video&&t.video.autoplay&&(i="youtube"==t.vendor?{event:"command",func:"playVideo"}:{method:"play",value:"true"}),void(i&&t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"));"youtube"===t.vendor&&(i={event:"listening",id:t.$iframe.getAttribute("id")},t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"))}t.poller=setTimeout(e,250)}()}}},{key:"onUnselectSlide",value:function(t,e,i){if("html5video"!==i.type){var n=!1;"vimeo"==i.vendor?n={method:"pause",value:"true"}:"youtube"===i.vendor&&(n={event:"command",func:"pauseVideo"}),n&&i.$iframe&&i.$iframe.contentWindow&&i.$iframe.contentWindow.postMessage(JSON.stringify(n),"*"),clearTimeout(i.poller)}else try{i.$el.querySelector("video").pause()}catch(t){}}},{key:"onRemoveSlide",value:function(t,e,i){i.xhr&&(i.xhr.abort(),i.xhr=null),i.$iframe&&(i.$iframe.onload=i.$iframe.onerror=null,i.$iframe.src="//about:blank",i.$iframe=null);var n=i.$content;"inline"===i.type&&n&&(n.classList.remove("fancybox__content"),"none"!==n.style.display&&(n.style.display="none")),i.$closeButton&&(i.$closeButton.remove(),i.$closeButton=null);var o=n&&n.$placeHolder;o&&(o.parentNode.insertBefore(n,o),o.remove(),n.$placeHolder=null)}},{key:"onMessage",value:function(t){try{var e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event){var i,n=w(document.getElementsByClassName("fancybox__iframe"));try{for(n.s();!(i=n.n()).done;){var o=i.value;o.contentWindow===t.source&&(o.isReady=1)}}catch(t){n.e(t)}finally{n.f()}}}else"https://www.youtube-nocookie.com"===t.origin&&"onReady"===e.event&&(document.getElementById(e.id).isReady=1)}catch(t){}}},{key:"attach",value:function(){this.fancybox.on(this.events),window.addEventListener("message",this.onMessage,!1)}},{key:"detach",value:function(){this.fancybox.off(this.events),window.removeEventListener("message",this.onMessage,!1)}}]),t}();K.defaults=G;var J=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onReady","onClosing","onDone","onPageChange","onCreateSlide","onRemoveSlide","onImageStatusChange"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={ready:this.onReady,closing:this.onClosing,done:this.onDone,"Carousel.change":this.onPageChange,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide}}return s(t,[{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&t.setContent(e)}))}},{key:"onDone",value:function(t,e){this.handleCursor(e)}},{key:"onClosing",value:function(t){clearTimeout(this.clickTimer),this.clickTimer=null,t.Carousel.slides.forEach((function(t){t.$image&&(t.state="destroy"),t.Panzoom&&t.Panzoom.detachEvents()})),"closing"===this.fancybox.state&&this.canZoom(t.getSlide())&&this.zoomOut()}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"onRemoveSlide",value:function(t,e,i){i.$image&&(i.$el.classList.remove(t.option("Image.canZoomInClass")),i.$image.remove(),i.$image=null),i.Panzoom&&(i.Panzoom.destroy(),i.Panzoom=null),i.$el&&i.$el.dataset&&delete i.$el.dataset.imageFit}},{key:"setContent",value:function(t){var e=this;if(!(t.isDom||t.html||t.type&&"image"!==t.type||t.$image)){t.type="image",t.state="loading";var i=document.createElement("div");i.style.visibility="hidden";var n=document.createElement("img");n.addEventListener("load",(function(i){i.stopImmediatePropagation(),e.onImageStatusChange(t)})),n.addEventListener("error",(function(){e.onImageStatusChange(t)})),n.src=t.src,n.alt="",n.draggable=!1,n.classList.add("fancybox__image"),t.srcset&&n.setAttribute("srcset",t.srcset),t.sizes&&n.setAttribute("sizes",t.sizes),t.$image=n;var o=this.fancybox.option("Image.wrap");if(o){var a=document.createElement("div");a.classList.add("string"==typeof o?o:"fancybox__image-wrap"),a.appendChild(n),i.appendChild(a),t.$wrap=a}else i.appendChild(n);t.$el.dataset.imageFit=this.fancybox.option("Image.fit"),this.fancybox.setContent(t,i),n.complete||n.error?this.onImageStatusChange(t):this.fancybox.showLoading(t)}}},{key:"onImageStatusChange",value:function(t){var e=this,i=t.$image;i&&"loading"===t.state&&(i.complete&&i.naturalWidth&&i.naturalHeight?(this.fancybox.hideLoading(t),"contain"===this.fancybox.option("Image.fit")&&this.initSlidePanzoom(t),t.$el.addEventListener("wheel",(function(i){return e.onWheel(t,i)}),{passive:!1}),t.$content.addEventListener("click",(function(i){return e.onClick(t,i)}),{passive:!1}),this.revealContent(t)):this.fancybox.setError(t,"{{IMAGE_ERROR}}"))}},{key:"initSlidePanzoom",value:function(t){var e=this;t.Panzoom||(t.Panzoom=new I(t.$el,S(!0,this.fancybox.option("Image.Panzoom",{}),{viewport:t.$wrap,content:t.$image,width:t._width,height:t._height,wrapInner:!1,textSelection:!0,touch:this.fancybox.option("Image.touch"),panOnlyZoomed:!0,click:!1,wheel:!1})),t.Panzoom.on("startAnimation",(function(){e.fancybox.trigger("Image.startAnimation",t)})),t.Panzoom.on("endAnimation",(function(){"zoomIn"===t.state&&e.fancybox.done(t),e.handleCursor(t),e.fancybox.trigger("Image.endAnimation",t)})),t.Panzoom.on("afterUpdate",(function(){e.handleCursor(t),e.fancybox.trigger("Image.afterUpdate",t)})))}},{key:"revealContent",value:function(t){null===this.fancybox.Carousel.prevPage&&t.index===this.fancybox.options.startIndex&&this.canZoom(t)?this.zoomIn():this.fancybox.revealContent(t)}},{key:"getZoomInfo",value:function(t){var e=t.$thumb.getBoundingClientRect(),i=e.width,n=e.height,o=t.$content.getBoundingClientRect(),a=o.width,s=o.height,r=o.top-e.top,l=o.left-e.left,c=this.fancybox.option("Image.zoomOpacity");return"auto"===c&&(c=Math.abs(i/n-a/s)>.1),{top:r,left:l,scale:a&&i?i/a:1,opacity:c}}},{key:"canZoom",value:function(t){var e=this.fancybox,i=e.$container;if(window.visualViewport&&1!==window.visualViewport.scale)return!1;if(t.Panzoom&&!t.Panzoom.content.width)return!1;if(!e.option("Image.zoom")||"contain"!==e.option("Image.fit"))return!1;var n=t.$thumb;if(!n||"loading"===t.state)return!1;i.classList.add("fancybox__no-click");var o,a=n.getBoundingClientRect();if(this.fancybox.option("Image.ignoreCoveredThumbnail")){var s=document.elementFromPoint(a.left+1,a.top+1)===n,r=document.elementFromPoint(a.right-1,a.bottom-1)===n;o=s&&r}else o=document.elementFromPoint(a.left+.5*a.width,a.top+.5*a.height)===n;return i.classList.remove("fancybox__no-click"),o}},{key:"zoomIn",value:function(){var t=this.fancybox,e=t.getSlide(),i=e.Panzoom,n=this.getZoomInfo(e),o=n.top,a=n.left,s=n.scale,r=n.opacity;t.trigger("reveal",e),i.panTo({x:-1*a,y:-1*o,scale:s,friction:0,ignoreBounds:!0}),e.$content.style.visibility="",e.state="zoomIn",!0===r&&i.on("afterTransform",(function(t){"zoomIn"!==e.state&&"zoomOut"!==e.state||(t.$content.style.opacity=Math.min(1,1-(1-t.content.scale)/(1-s)))})),i.panTo({x:0,y:0,scale:1,friction:this.fancybox.option("Image.zoomFriction")})}},{key:"zoomOut",value:function(){var t=this,e=this.fancybox,i=e.getSlide(),n=i.Panzoom;if(n){i.state="zoomOut",e.state="customClosing",i.$caption&&(i.$caption.style.visibility="hidden");var o=this.fancybox.option("Image.zoomFriction"),a=function(e){var a=t.getZoomInfo(i),s=a.top,r=a.left,l=a.scale,c=a.opacity;e||c||(o*=.82),n.panTo({x:-1*r,y:-1*s,scale:l,friction:o,ignoreBounds:!0}),o*=.98};window.addEventListener("scroll",a),n.once("endAnimation",(function(){window.removeEventListener("scroll",a),e.destroy()})),a()}}},{key:"handleCursor",value:function(t){if("image"===t.type&&t.$el){var e=t.Panzoom,i=this.fancybox.option("Image.click",!1,t),n=this.fancybox.option("Image.touch"),o=t.$el.classList,a=this.fancybox.option("Image.canZoomInClass"),s=this.fancybox.option("Image.canZoomOutClass");if(o.remove(s),o.remove(a),e&&"toggleZoom"===i)e&&1===e.content.scale&&e.option("maxScale")-e.content.scale>.01?o.add(a):e.content.scale>1&&!n&&o.add(s);else"close"===i&&o.add(s)}}},{key:"onWheel",value:function(t,e){if("ready"===this.fancybox.state&&!1!==this.fancybox.trigger("Image.wheel",e))switch(this.fancybox.option("Image.wheel")){case"zoom":"done"===t.state&&t.Panzoom&&t.Panzoom.zoomWithWheel(e);break;case"close":this.fancybox.close();break;case"slide":this.fancybox[e.deltaY<0?"prev":"next"]()}}},{key:"onClick",value:function(t,e){var i=this;if("ready"===this.fancybox.state){var n=t.Panzoom;if(!n||!n.dragPosition.midPoint&&0===n.dragOffset.x&&0===n.dragOffset.y&&1===n.dragOffset.scale){if(this.fancybox.Carousel.Panzoom.lockAxis)return!1;var o=function(n){switch(n){case"toggleZoom":e.stopPropagation(),t.Panzoom&&t.Panzoom.zoomWithClick(e);break;case"close":i.fancybox.close();break;case"next":e.stopPropagation(),i.fancybox.next()}},a=this.fancybox.option("Image.click"),s=this.fancybox.option("Image.doubleClick");s?this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null,o(s)):this.clickTimer=setTimeout((function(){i.clickTimer=null,o(a)}),300):o(a)}}}},{key:"onPageChange",value:function(t,e){var i=t.getSlide();e.slides.forEach((function(t){t.Panzoom&&"done"===t.state&&t.index!==i.index&&t.Panzoom.panTo({x:0,y:0,scale:1,friction:.8})}))}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events)}}]),t}();J.defaults={canZoomInClass:"can-zoom_in",canZoomOutClass:"can-zoom_out",zoom:!0,zoomOpacity:"auto",zoomFriction:.82,ignoreCoveredThumbnail:!1,touch:!0,click:"toggleZoom",doubleClick:null,wheel:"zoom",fit:"contain",wrap:!1,Panzoom:{ratio:1}};var Q=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onChange","onClosing"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={initCarousel:this.onChange,"Carousel.change":this.onChange,closing:this.onClosing},this.hasCreatedHistory=!1,this.origHash="",this.timer=null}return s(t,[{key:"onChange",value:function(t){var e=this,i=t.Carousel;this.timer&&clearTimeout(this.timer);var n=null===i.prevPage,o=t.getSlide(),a=new URL(document.URL).hash,s=!1;if(o.slug)s="#"+o.slug;else{var r=o.$trigger&&o.$trigger.dataset,l=t.option("slug")||r&&r.fancybox;l&&l.length&&"true"!==l&&(s="#"+l+(i.slides.length>1?"-"+(o.index+1):""))}n&&(this.origHash=a!==s?a:""),s&&a!==s&&(this.timer=setTimeout((function(){try{window.history[n?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+s),n&&(e.hasCreatedHistory=!0)}catch(t){}}),300))}},{key:"onClosing",value:function(){if(this.timer&&clearTimeout(this.timer),!0!==this.hasSilentClose)try{return void window.history.replaceState({},document.title,window.location.pathname+window.location.search+(this.origHash||""))}catch(t){}}},{key:"attach",value:function(t){t.on(this.events)}},{key:"detach",value:function(t){t.off(this.events)}}],[{key:"startFromUrl",value:function(){var e=t.Fancybox;if(e&&!e.getInstance()&&!1!==e.defaults.Hash){var i=t.getParsedURL(),n=i.hash,o=i.slug,a=i.index;if(o){var s=document.querySelector('[data-slug="'.concat(n,'"]'));if(s&&s.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),!e.getInstance()){var r=document.querySelectorAll('[data-fancybox="'.concat(o,'"]'));r.length&&(null===a&&1===r.length?s=r[0]:a&&(s=r[a-1]),s&&s.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))}}}}},{key:"onHashChange",value:function(){var e=t.getParsedURL(),i=e.slug,n=e.index,o=t.Fancybox,a=o&&o.getInstance();if(a&&a.plugins.Hash){if(i){var s=a.Carousel;if(i===a.option("slug"))return s.slideTo(n-1);var r,l=w(s.slides);try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c.slug&&c.slug===i)return s.slideTo(c.index)}}catch(t){l.e(t)}finally{l.f()}var h=a.getSlide(),d=h.$trigger&&h.$trigger.dataset;if(d&&d.fancybox===i)return s.slideTo(n-1)}a.plugins.Hash.hasSilentClose=!0,a.close()}t.startFromUrl()}},{key:"create",value:function(e){function i(){window.addEventListener("hashchange",t.onHashChange,!1),t.startFromUrl()}t.Fancybox=e,j&&window.requestAnimationFrame((function(){/complete|interactive|loaded/.test(document.readyState)?i():document.addEventListener("DOMContentLoaded",i)}))}},{key:"destroy",value:function(){window.removeEventListener("hashchange",t.onHashChange,!1)}},{key:"getParsedURL",value:function(){var t=window.location.hash.substr(1),e=t.split("-"),i=e.length>1&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||null;return{hash:t,slug:e.join("-"),index:i}}}]),t}(),tt={pageXOffset:0,pageYOffset:0,element:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement},activate:function(t){tt.pageXOffset=window.pageXOffset,tt.pageYOffset=window.pageYOffset,t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},deactivate:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},et=function(){function t(e){o(this,t),this.fancybox=e,this.active=!1,this.handleVisibilityChange=this.handleVisibilityChange.bind(this)}return s(t,[{key:"isActive",value:function(){return this.active}},{key:"setTimer",value:function(){var t=this;if(this.active&&!this.timer){var e=this.fancybox.option("slideshow.delay",3e3);this.timer=setTimeout((function(){t.timer=null,t.fancybox.option("infinite")||t.fancybox.getSlide().index!==t.fancybox.Carousel.slides.length-1?t.fancybox.next():t.fancybox.jumpTo(0,{friction:0})}),e);var i=this.$progress;i||((i=document.createElement("div")).classList.add("fancybox__progress"),this.fancybox.$carousel.parentNode.insertBefore(i,this.fancybox.$carousel),this.$progress=i,i.offsetHeight),i.style.transitionDuration="".concat(e,"ms"),i.style.transform="scaleX(1)"}}},{key:"clearTimer",value:function(){clearTimeout(this.timer),this.timer=null,this.$progress&&(this.$progress.style.transitionDuration="",this.$progress.style.transform="",this.$progress.offsetHeight)}},{key:"activate",value:function(){this.active||(this.active=!0,this.fancybox.$container.classList.add("has-slideshow"),"done"===this.fancybox.getSlide().state&&this.setTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange,!1))}},{key:"handleVisibilityChange",value:function(){this.deactivate()}},{key:"deactivate",value:function(){this.active=!1,this.clearTimer(),this.fancybox.$container.classList.remove("has-slideshow"),document.removeEventListener("visibilitychange",this.handleVisibilityChange,!1)}},{key:"toggle",value:function(){this.active?this.deactivate():this.fancybox.Carousel.slides.length>1&&this.activate()}}]),t}(),it={display:["counter","zoom","slideshow","fullscreen","thumbs","close"],autoEnable:!0,items:{counter:{position:"left",type:"div",class:"fancybox__counter",html:'<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',attr:{tabindex:-1}},prev:{type:"button",class:"fancybox__button--prev",label:"PREV",html:'<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',attr:{"data-fancybox-prev":""}},next:{type:"button",class:"fancybox__button--next",label:"NEXT",html:'<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',attr:{"data-fancybox-next":""}},fullscreen:{type:"button",class:"fancybox__button--fullscreen",label:"TOGGLE_FULLSCREEN",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',click:function(t){t.preventDefault(),tt.element()?tt.deactivate():tt.activate(this.fancybox.$container)}},slideshow:{type:"button",class:"fancybox__button--slideshow",label:"TOGGLE_SLIDESHOW",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',click:function(t){t.preventDefault(),this.Slideshow.toggle()}},zoom:{type:"button",class:"fancybox__button--zoom",label:"TOGGLE_ZOOM",html:'<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',click:function(t){t.preventDefault();var e=this.fancybox.getSlide().Panzoom;e&&e.toggleZoom()}},download:{type:"link",label:"DOWNLOAD",class:"fancybox__button--download",html:'<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',click:function(t){t.stopPropagation()}},thumbs:{type:"button",label:"TOGGLE_THUMBS",class:"fancybox__button--thumbs",html:'<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',click:function(t){t.stopPropagation();var e=this.fancybox.plugins.Thumbs;e&&e.toggle()}},close:{type:"button",label:"CLOSE",class:"fancybox__button--close",html:'<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',attr:{"data-fancybox-close":"",tabindex:0}}}},nt=function(){function t(e){var i=this;o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var n=0,a=["onInit","onPrepare","onDone","onKeydown","onClosing","onChange","onSettle","onRefresh"];n<a.length;n++){var s=a[n];this[s]=this[s].bind(this)}this.events={init:this.onInit,prepare:this.onPrepare,done:this.onDone,keydown:this.onKeydown,closing:this.onClosing,"Carousel.change":this.onChange,"Carousel.settle":this.onSettle,"Carousel.Panzoom.touchStart":function(){return i.onRefresh()},"Image.startAnimation":function(t,e){return i.onRefresh(e)},"Image.afterUpdate":function(t,e){return i.onRefresh(e)}}}return s(t,[{key:"onInit",value:function(){if(this.fancybox.option("Toolbar.autoEnable")){var t,e=!1,i=w(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){if("image"===t.value.type){e=!0;break}}}catch(t){i.e(t)}finally{i.f()}if(!e)return void(this.state="disabled")}var n,o=w(this.fancybox.option("Toolbar.display"));try{for(o.s();!(n=o.n()).done;){var a=n.value;if("close"===(k(a)?a.id:a)){this.fancybox.options.closeButton=!1;break}}}catch(t){o.e(t)}finally{o.f()}}},{key:"onPrepare",value:function(){var t=this.fancybox;if("init"===this.state&&(this.build(),this.update(),this.Slideshow=new et(t),!t.Carousel.prevPage&&(t.option("slideshow.autoStart")&&this.Slideshow.activate(),t.option("fullscreen.autoStart")&&!tt.element())))try{tt.activate(t.$container)}catch(t){}}},{key:"onFsChange",value:function(){window.scrollTo(tt.pageXOffset,tt.pageYOffset)}},{key:"onSettle",value:function(){var t=this.fancybox,e=this.Slideshow;e&&e.isActive()&&(t.getSlide().index!==t.Carousel.slides.length-1||t.option("infinite")?"done"===t.getSlide().state&&e.setTimer():e.deactivate())}},{key:"onChange",value:function(){this.update(),this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer()}},{key:"onDone",value:function(t,e){var i=this.Slideshow;e.index===t.getSlide().index&&(this.update(),i&&i.isActive()&&(t.option("infinite")||e.index!==t.Carousel.slides.length-1?i.setTimer():i.deactivate()))}},{key:"onRefresh",value:function(t){t&&t.index!==this.fancybox.getSlide().index||(this.update(),!this.Slideshow||!this.Slideshow.isActive()||t&&"done"!==t.state||this.Slideshow.deactivate())}},{key:"onKeydown",value:function(t,e,i){" "===e&&this.Slideshow&&(this.Slideshow.toggle(),i.preventDefault())}},{key:"onClosing",value:function(){this.Slideshow&&this.Slideshow.deactivate(),document.removeEventListener("fullscreenchange",this.onFsChange)}},{key:"createElement",value:function(t){var e,i;("div"===t.type?e=document.createElement("div"):(e=document.createElement("link"===t.type?"a":"button")).classList.add("carousel__button"),e.innerHTML=t.html,e.setAttribute("tabindex",t.tabindex||0),t.class)&&(i=e.classList).add.apply(i,y(t.class.split(" ")));for(var n in t.attr)e.setAttribute(n,t.attr[n]);t.label&&e.setAttribute("title",this.fancybox.localize("{{".concat(t.label,"}}"))),t.click&&e.addEventListener("click",t.click.bind(this)),"prev"===t.id&&e.setAttribute("data-fancybox-prev",""),"next"===t.id&&e.setAttribute("data-fancybox-next","");var o=e.querySelector("svg");return o&&(o.setAttribute("role","img"),o.setAttribute("tabindex","-1"),o.setAttribute("xmlns","http://www.w3.org/2000/svg")),e}},{key:"build",value:function(){var t=this;this.cleanup();var e,i=this.fancybox.option("Toolbar.items"),n=[{position:"left",items:[]},{position:"center",items:[]},{position:"right",items:[]}],o=this.fancybox.plugins.Thumbs,a=w(this.fancybox.option("Toolbar.display"));try{var s=function(){var a=e.value,s=void 0,r=void 0;if(k(a)?(s=a.id,r=S({},i[s],a)):r=i[s=a],["counter","next","prev","slideshow"].includes(s)&&t.fancybox.items.length<2)return"continue";if("fullscreen"===s){if(!document.fullscreenEnabled||window.fullScreen)return"continue";document.addEventListener("fullscreenchange",t.onFsChange)}if("thumbs"===s&&(!o||"disabled"===o.state))return"continue";if(!r)return"continue";var l=r.position||"right",c=n.find((function(t){return t.position===l}));c&&c.items.push(r)};for(a.s();!(e=a.n()).done;)s()}catch(t){a.e(t)}finally{a.f()}var r=document.createElement("div");r.classList.add("fancybox__toolbar");for(var l=0,c=n;l<c.length;l++){var h=c[l];if(h.items.length){var d=document.createElement("div");d.classList.add("fancybox__toolbar__items"),d.classList.add("fancybox__toolbar__items--".concat(h.position));var u,f=w(h.items);try{for(f.s();!(u=f.n()).done;){var v=u.value;d.appendChild(this.createElement(v))}}catch(t){f.e(t)}finally{f.f()}r.appendChild(d)}}this.fancybox.$carousel.parentNode.insertBefore(r,this.fancybox.$carousel),this.$container=r}},{key:"update",value:function(){var t,e=this.fancybox.getSlide(),i=e.index,n=this.fancybox.items.length,o=e.downloadSrc||("image"!==e.type||e.error?null:e.src),a=w(this.fancybox.$container.querySelectorAll("a.fancybox__button--download"));try{for(a.s();!(t=a.n()).done;){var s=t.value;o?(s.removeAttribute("disabled"),s.removeAttribute("tabindex"),s.setAttribute("href",o),s.setAttribute("download",o),s.setAttribute("target","_blank")):(s.setAttribute("disabled",""),s.setAttribute("tabindex",-1),s.removeAttribute("href"),s.removeAttribute("download"))}}catch(t){a.e(t)}finally{a.f()}var r,l=e.Panzoom,c=l&&l.option("maxScale")>l.option("baseScale"),h=w(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"));try{for(h.s();!(r=h.n()).done;){var d=r.value;c?d.removeAttribute("disabled"):d.setAttribute("disabled","")}}catch(t){h.e(t)}finally{h.f()}var u,f=w(this.fancybox.$container.querySelectorAll("[data-fancybox-index]"));try{for(f.s();!(u=f.n()).done;){u.value.innerHTML=e.index+1}}catch(t){f.e(t)}finally{f.f()}var v,p=w(this.fancybox.$container.querySelectorAll("[data-fancybox-count]"));try{for(p.s();!(v=p.n()).done;){v.value.innerHTML=n}}catch(t){p.e(t)}finally{p.f()}if(!this.fancybox.option("infinite")){var g,m=w(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"));try{for(m.s();!(g=m.n()).done;){var y=g.value;0===i?y.setAttribute("disabled",""):y.removeAttribute("disabled")}}catch(t){m.e(t)}finally{m.f()}var b,x=w(this.fancybox.$container.querySelectorAll("[data-fancybox-next]"));try{for(x.s();!(b=x.n()).done;){var k=b.value;i===n-1?k.setAttribute("disabled",""):k.removeAttribute("disabled")}}catch(t){x.e(t)}finally{x.f()}}}},{key:"cleanup",value:function(){this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer(),this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();nt.defaults=it;var ot={ScrollLock:Y,Thumbs:V,Html:K,Toolbar:nt,Image:J,Hash:Q},at={startIndex:0,preload:1,infinite:!0,showClass:"fancybox-zoomInUp",hideClass:"fancybox-fadeOut",animated:!0,hideScrollbar:!0,parentEl:null,mainClass:null,autoFocus:!0,trapFocus:!0,placeFocusBack:!0,click:"close",closeButton:"inside",dragToClose:!0,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"next",ArrowDown:"prev",ArrowRight:"next",ArrowLeft:"prev"},template:{closeButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',spinner:'<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',main:null},l10n:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}},st=new Map,rt=0,lt=function(t){l(i,t);var e=f(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(this,i),t=t.map((function(t){return t.width&&(t._width=t.width),t.height&&(t._height=t.height),t})),(n=e.call(this,S(!0,{},at,a))).bindHandlers(),n.state="init",n.setItems(t),n.attachPlugins(i.Plugins),n.trigger("init"),!0===n.option("hideScrollbar")&&n.hideScrollbar(),n.initLayout(),n.initCarousel(),n.attachEvents(),st.set(n.id,d(n)),n.trigger("prepare"),n.state="ready",n.trigger("ready"),n.$container.setAttribute("aria-hidden","false"),n.option("trapFocus")&&n.focus(),n}return s(i,[{key:"option",value:function(t){for(var e,n=this.getSlide(),o=n?n[t]:void 0,a=arguments.length,s=new Array(a>1?a-1:0),r=1;r<a;r++)s[r-1]=arguments[r];if(void 0!==o){var l;if("function"==typeof o)(l=o).call.apply(l,[this,this].concat(s)),g("value");return o}return(e=p(c(i.prototype),"option",this)).call.apply(e,[this,t].concat(s))}},{key:"bindHandlers",value:function(){for(var t=0,e=["onMousedown","onKeydown","onClick","onFocus","onCreateSlide","onSettle","onTouchMove","onTouchEnd","onTransform"];t<e.length;t++){var i=e[t];this[i]=this[i].bind(this)}}},{key:"attachEvents",value:function(){document.addEventListener("mousedown",this.onMousedown),document.addEventListener("keydown",this.onKeydown,!0),this.option("trapFocus")&&document.addEventListener("focus",this.onFocus,!0),this.$container.addEventListener("click",this.onClick)}},{key:"detachEvents",value:function(){document.removeEventListener("mousedown",this.onMousedown),document.removeEventListener("keydown",this.onKeydown,!0),document.removeEventListener("focus",this.onFocus,!0),this.$container.removeEventListener("click",this.onClick)}},{key:"initLayout",value:function(){var t=this;this.$root=this.option("parentEl")||document.body;var e=this.option("template.main");e&&(this.$root.insertAdjacentHTML("beforeend",this.localize(e)),this.$container=this.$root.querySelector(".fancybox__container")),this.$container||(this.$container=document.createElement("div"),this.$root.appendChild(this.$container)),this.$container.onscroll=function(){return t.$container.scrollLeft=0,!1},Object.entries({class:"fancybox__container",role:"dialog",tabIndex:"-1","aria-modal":"true","aria-hidden":"true","aria-label":this.localize("{{MODAL}}")}).forEach((function(e){var i;return(i=t.$container).setAttribute.apply(i,y(e))})),this.option("animated")&&this.$container.classList.add("is-animated"),this.$backdrop=this.$container.querySelector(".fancybox__backdrop"),this.$backdrop||(this.$backdrop=document.createElement("div"),this.$backdrop.classList.add("fancybox__backdrop"),this.$container.appendChild(this.$backdrop)),this.$carousel=this.$container.querySelector(".fancybox__carousel"),this.$carousel||(this.$carousel=document.createElement("div"),this.$carousel.classList.add("fancybox__carousel"),this.$container.appendChild(this.$carousel)),this.$container.Fancybox=this,this.id=this.$container.getAttribute("id"),this.id||(this.id=this.options.id||++rt,this.$container.setAttribute("id","fancybox-"+this.id));var i,n=this.option("mainClass");n&&(i=this.$container.classList).add.apply(i,y(n.split(" ")));return document.documentElement.classList.add("with-fancybox"),this.trigger("initLayout"),this}},{key:"setItems",value:function(t){var e,i=[],n=w(t);try{for(n.s();!(e=n.n()).done;){var o=e.value,a=o.$trigger;if(a){var s=a.dataset||{};o.src=s.src||a.getAttribute("href")||o.src,o.type=s.type||o.type,!o.src&&a instanceof HTMLImageElement&&(o.src=a.currentSrc||o.$trigger.src)}var r=o.$thumb;if(!r){var l=o.$trigger&&o.$trigger.origTarget;l&&(r=l instanceof HTMLImageElement?l:l.querySelector("img:not([aria-hidden])")),!r&&o.$trigger&&(r=o.$trigger instanceof HTMLImageElement?o.$trigger:o.$trigger.querySelector("img:not([aria-hidden])"))}o.$thumb=r||null;var c=o.thumb;!c&&r&&!(c=r.currentSrc||r.src)&&r.dataset&&(c=r.dataset.lazySrc||r.dataset.src),c||"image"!==o.type||(c=o.src),o.thumb=c||null,o.caption=o.caption||"",i.push(o)}}catch(t){n.e(t)}finally{n.f()}this.items=i}},{key:"initCarousel",value:function(){var t=this;return this.Carousel=new H(this.$carousel,S(!0,{},{prefix:"",classNames:{viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"},textSelection:!0,preload:this.option("preload"),friction:.88,slides:this.items,initialPage:this.options.startIndex,slidesPerPage:1,infiniteX:this.option("infinite"),infiniteY:!0,l10n:this.option("l10n"),Dots:!1,Navigation:{classNames:{main:"fancybox__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}},Panzoom:{textSelection:!0,panOnlyZoomed:function(){return t.Carousel&&t.Carousel.pages&&t.Carousel.pages.length<2&&!t.option("dragToClose")},lockAxis:function(){if(t.Carousel){var e="x";return t.option("dragToClose")&&(e+="y"),e}}},on:{"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Carousel.".concat(e)].concat(n))},init:function(e){return t.Carousel=e},createSlide:this.onCreateSlide,settle:this.onSettle}},this.option("Carousel"))),this.option("dragToClose")&&this.Carousel.Panzoom.on({touchMove:this.onTouchMove,afterTransform:this.onTransform,touchEnd:this.onTouchEnd}),this.trigger("initCarousel"),this}},{key:"onCreateSlide",value:function(t,e){var i=e.caption||"";if("function"==typeof this.options.caption&&(i=this.options.caption.call(this,this,this.Carousel,e)),"string"==typeof i&&i.length){var n=document.createElement("div"),o="fancybox__caption_".concat(this.id,"_").concat(e.index);n.className="fancybox__caption",n.innerHTML=i,n.setAttribute("id",o),e.$caption=e.$el.appendChild(n),e.$el.classList.add("has-caption"),e.$el.setAttribute("aria-labelledby",o)}}},{key:"onSettle",value:function(){this.option("autoFocus")&&this.focus()}},{key:"onFocus",value:function(t){this.focus(t)}},{key:"onClick",value:function(t){if(!t.defaultPrevented){var e=t.composedPath()[0];if(e.matches("[data-fancybox-close]"))return t.preventDefault(),void i.close(!1,t);if(e.matches("[data-fancybox-next]"))return t.preventDefault(),void i.next();if(e.matches("[data-fancybox-prev]"))return t.preventDefault(),void i.prev();var n=".fancybox__content";if(e.closest(n))e.matches(n)&&document.activeElement.blur();else if(!getSelection().toString().length)if(!1!==this.trigger("click",t))switch(this.option("click")){case"close":this.close();break;case"next":this.next()}}}},{key:"onTouchMove",value:function(){var t=this.getSlide().Panzoom;return!t||1===t.content.scale}},{key:"onTouchEnd",value:function(t){var e=t.dragOffset.y;Math.abs(e)>=150||Math.abs(e)>=35&&t.dragOffset.time<350?(this.option("hideClass")&&(this.getSlide().hideClass="fancybox-throwOut".concat(t.content.y<0?"Up":"Down")),this.close()):"y"===t.lockAxis&&t.panTo({y:0})}},{key:"onTransform",value:function(t){if(this.$backdrop){var e=Math.abs(t.content.y),i=e<1?"":Math.max(.33,Math.min(1,1-e/t.content.fitHeight*1.5));this.$container.style.setProperty("--fancybox-ts",i?"0s":""),this.$container.style.setProperty("--fancybox-opacity",i)}}},{key:"onMousedown",value:function(){"ready"===this.state&&document.body.classList.add("is-using-mouse")}},{key:"onKeydown",value:function(t){if(i.getInstance().id===this.id){document.body.classList.remove("is-using-mouse");var e=t.key,n=this.option("keyboard");if(n&&!t.ctrlKey&&!t.altKey&&!t.shiftKey){var o=t.composedPath()[0],a=document.activeElement&&document.activeElement.classList,s=a&&a.contains("carousel__button");if("Escape"!==e&&!s)if(t.target.isContentEditable||-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(o.nodeName))return;if(!1!==this.trigger("keydown",e,t)){var r=n[e];"function"==typeof this[r]&&this[r]()}}}}},{key:"getSlide",value:function(){var t=this.Carousel;if(!t)return null;var e=null===t.page?t.option("initialPage"):t.page,i=t.pages||[];return i.length&&i[e]?i[e].slides[0]:null}},{key:"focus",value:function(t){if(!(i.ignoreFocusChange||["init","closing","customClosing","destroy"].indexOf(this.state)>-1)){t&&t.preventDefault(),i.ignoreFocusChange=!0;for(var e,n=this.$container,o=this.getSlide(),a="done"===o.state?o.$el:null,s=[],r=0,l=Array.from(n.querySelectorAll(q));r<l.length;r++){var c=l[r],h=c.offsetParent,d=a&&a.contains(c),u=!this.Carousel.$viewport.contains(c);h&&(d||u)?(s.push(c),void 0!==c.dataset.origTabindex&&(c.tabIndex=c.dataset.origTabindex,c.removeAttribute("data-orig-tabindex")),(c.hasAttribute("autoFocus")||!e&&d&&!c.classList.contains("carousel__button"))&&(e=c)):(c.dataset.origTabindex=void 0===c.dataset.origTabindex?c.getAttribute("tabindex"):c.dataset.origTabindex,c.tabIndex=-1)}t?s.indexOf(t.target)>-1?this.lastFocus=t.target:this.lastFocus===n?U(s[s.length-1]):U(n):this.option("autoFocus")&&e?U(e):s.indexOf(document.activeElement)<0&&U(n),this.lastFocus=document.activeElement,i.ignoreFocusChange=!1}}},{key:"hideScrollbar",value:function(){if(j){var t=window.innerWidth-document.documentElement.getBoundingClientRect().width,e="fancybox-style-noscroll",i=document.getElementById(e);i||t>0&&((i=document.createElement("style")).id=e,i.type="text/css",i.innerHTML=".compensate-for-scrollbar {padding-right: ".concat(t,"px;}"),document.getElementsByTagName("head")[0].appendChild(i),document.body.classList.add("compensate-for-scrollbar"))}}},{key:"revealScrollbar",value:function(){document.body.classList.remove("compensate-for-scrollbar");var t=document.getElementById("fancybox-style-noscroll");t&&t.remove()}},{key:"clearContent",value:function(t){this.Carousel.trigger("removeSlide",t),t.$content&&(t.$content.remove(),t.$content=null),t.$closeButton&&(t.$closeButton.remove(),t.$closeButton=null),t._className&&t.$el.classList.remove(t._className)}},{key:"setContent",value:function(t,e){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.$el;if(e instanceof HTMLElement)["img","iframe","video","audio"].indexOf(e.nodeName.toLowerCase())>-1?(i=document.createElement("div")).appendChild(e):i=e;else{var a=document.createRange().createContextualFragment(e);(i=document.createElement("div")).appendChild(a)}if(t.filter&&!t.error&&(i=i.querySelector(t.filter)),i instanceof Element)return t._className="has-".concat(n.suffix||t.type||"unknown"),o.classList.add(t._className),i.classList.add("fancybox__content"),"none"!==i.style.display&&"none"!==getComputedStyle(i).getPropertyValue("display")||(i.style.display=t.display||this.option("defaultDisplay")||"flex"),t.id&&i.setAttribute("id",t.id),t.$content=i,o.prepend(i),this.manageCloseButton(t),"loading"!==t.state&&this.revealContent(t),i;this.setError(t,"{{ELEMENT_NOT_FOUND}}")}},{key:"manageCloseButton",value:function(t){var e=this,i=void 0===t.closeButton?this.option("closeButton"):t.closeButton;if(i&&("top"!==i||!this.$closeButton)){var n=document.createElement("button");n.classList.add("carousel__button","is-close"),n.setAttribute("title",this.options.l10n.CLOSE),n.innerHTML=this.option("template.closeButton"),n.addEventListener("click",(function(t){return e.close(t)})),"inside"===i?(t.$closeButton&&t.$closeButton.remove(),t.$closeButton=t.$content.appendChild(n)):this.$closeButton=this.$container.insertBefore(n,this.$container.firstChild)}}},{key:"revealContent",value:function(t){var e=this;this.trigger("reveal",t),t.$content.style.visibility="";var i=!1;t.error||"loading"===t.state||null!==this.Carousel.prevPage||t.index!==this.options.startIndex||(i=void 0===t.showClass?this.option("showClass"):t.showClass),i?(t.state="animating",this.animateCSS(t.$content,i,(function(){e.done(t)}))):this.done(t)}},{key:"animateCSS",value:function(t,e,i){if(t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!0,cancelable:!0})),t&&e){t.addEventListener("animationend",(function n(o){o.currentTarget===this&&(t.removeEventListener("animationend",n),i&&i(),t.classList.remove(e))})),t.classList.add(e)}else"function"==typeof i&&i()}},{key:"done",value:function(t){t.state="done",this.trigger("done",t);var e=this.getSlide();e&&t.index===e.index&&this.option("autoFocus")&&this.focus()}},{key:"setError",value:function(t,e){t.error=e,this.hideLoading(t),this.clearContent(t);var i=document.createElement("div");i.classList.add("fancybox-error"),i.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,i,{suffix:"error"})}},{key:"showLoading",value:function(t){var e=this;t.state="loading",t.$el.classList.add("is-loading");var i=t.$el.querySelector(".fancybox__spinner");i||((i=document.createElement("div")).classList.add("fancybox__spinner"),i.innerHTML=this.option("template.spinner"),i.addEventListener("click",(function(){e.Carousel.Panzoom.velocity||e.close()})),t.$el.prepend(i))}},{key:"hideLoading",value:function(t){var e=t.$el&&t.$el.querySelector(".fancybox__spinner");e&&(e.remove(),t.$el.classList.remove("is-loading")),"loading"===t.state&&(this.trigger("load",t),t.state="ready")}},{key:"next",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slideNext()}},{key:"prev",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slidePrev()}},{key:"jumpTo",value:function(){var t;this.Carousel&&(t=this.Carousel).slideTo.apply(t,arguments)}},{key:"close",value:function(t){var e=this;if(t&&t.preventDefault(),!["closing","customClosing","destroy"].includes(this.state)&&!1!==this.trigger("shouldClose",t)&&(this.state="closing",this.Carousel.Panzoom.destroy(),this.detachEvents(),this.trigger("closing",t),"destroy"!==this.state)){this.$container.setAttribute("aria-hidden","true"),this.$container.classList.add("is-closing");var i=this.getSlide();if(this.Carousel.slides.forEach((function(t){t.$content&&t.index!==i.index&&e.Carousel.trigger("removeSlide",t)})),"closing"===this.state){var n=void 0===i.hideClass?this.option("hideClass"):i.hideClass;this.animateCSS(i.$content,n,(function(){e.destroy()}),!0)}}}},{key:"destroy",value:function(){if("destroy"!==this.state){this.state="destroy",this.trigger("destroy");var t=this.option("placeFocusBack")?this.getSlide().$trigger:null;this.Carousel.destroy(),this.detachPlugins(),this.Carousel=null,this.options={},this.events={},this.$container.remove(),this.$container=this.$backdrop=this.$carousel=null,t&&U(t),st.delete(this.id);var e=i.getInstance();e?e.focus():(document.documentElement.classList.remove("with-fancybox"),document.body.classList.remove("is-using-mouse"),this.revealScrollbar())}}}],[{key:"show",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new i(t,e)}},{key:"fromEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.defaultPrevented&&!(t.button&&0!==t.button||t.ctrlKey||t.metaKey||t.shiftKey)){var n,o,a,s=t.composedPath()[0],r=s;if((r.matches("[data-fancybox-trigger]")||(r=r.closest("[data-fancybox-trigger]")))&&(n=r&&r.dataset&&r.dataset.fancyboxTrigger),n){var l=document.querySelectorAll('[data-fancybox="'.concat(n,'"]')),c=parseInt(r.dataset.fancyboxIndex,10)||0;r=l.length?l[c]:r}r||(r=s),Array.from(i.openers.keys()).reverse().some((function(e){a=r;var i=!1;try{a instanceof Element&&("string"==typeof e||e instanceof String)&&(i=a.matches(e)||(a=a.closest(e)))}catch(t){}return!!i&&(t.preventDefault(),o=e,!0)}));var h=!1;if(o){e.event=t,e.target=a,a.origTarget=s,h=i.fromOpener(o,e);var d=i.getInstance();d&&"ready"===d.state&&t.detail&&document.body.classList.add("is-using-mouse")}return h}}},{key:"fromOpener",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(t){for(var e=["false","0","no","null","undefined"],i=["true","1","yes"],n=Object.assign({},t.dataset),o={},a=0,s=Object.entries(n);a<s.length;a++){var r=m(s[a],2),l=r[0],c=r[1];if("fancybox"!==l)if("width"===l||"height"===l)o["_".concat(l)]=c;else if("string"==typeof c||c instanceof String)if(e.indexOf(c)>-1)o[l]=!1;else if(i.indexOf(o[l])>-1)o[l]=!0;else try{o[l]=JSON.parse(c)}catch(t){o[l]=c}else o[l]=c}return t instanceof Element&&(o.$trigger=t),o},o=[],a=e.startIndex||0,s=e.target||null,r=void 0!==(e=S({},e,i.openers.get(t))).groupAll&&e.groupAll,l=void 0===e.groupAttr?"data-fancybox":e.groupAttr,c=l&&s?s.getAttribute("".concat(l)):"";if(!s||c||r){var h=e.root||(s?s.getRootNode():document.body);o=[].slice.call(h.querySelectorAll(t))}if(s&&!r&&(o=c?o.filter((function(t){return t.getAttribute("".concat(l))===c})):[s]),!o.length)return!1;var d=i.getInstance();return!(d&&o.indexOf(d.options.$trigger)>-1)&&(a=s?o.indexOf(s):a,new i(o=o.map(n),S({},e,{startIndex:a,$trigger:s})))}},{key:"bind",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function n(){document.body.addEventListener("click",i.fromEvent,!1)}j&&(i.openers.size||(/complete|interactive|loaded/.test(document.readyState)?n():document.addEventListener("DOMContentLoaded",n)),i.openers.set(t,e))}},{key:"unbind",value:function(t){i.openers.delete(t),i.openers.size||i.destroy()}},{key:"destroy",value:function(){for(var t;t=i.getInstance();)t.destroy();i.openers=new Map,document.body.removeEventListener("click",i.fromEvent,!1)}},{key:"getInstance",value:function(t){return t?st.get(t):Array.from(st.values()).reverse().find((function(t){return!["closing","customClosing","destroy"].includes(t.state)&&t}))||null}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1?arguments[1]:void 0;if(t){var n,o=w(st.values());try{for(o.s();!(n=o.n()).done;){var a=n.value;a.close(e)}}catch(t){o.e(t)}finally{o.f()}}else{var s=i.getInstance();s&&s.close(e)}}},{key:"next",value:function(){var t=i.getInstance();t&&t.next()}},{key:"prev",value:function(){var t=i.getInstance();t&&t.prev()}}]),i}(z);lt.version="4.0.25",lt.defaults=at,lt.openers=new Map,lt.Plugins=ot,lt.bind("[data-fancybox]");for(var ct=0,ht=Object.entries(lt.Plugins||{});ct<ht.length;ct++){var dt=m(ht[ct],2);dt[0];var ut=dt[1];"function"==typeof ut.create&&ut.create(lt)}t.Carousel=H,t.Fancybox=lt,t.Panzoom=I}));

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
})(this, (function (exports) { 'use strict';

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var check = function (it) {
        return it && it.Math == Math && it;
    }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


    var global$p = // eslint-disable-next-line es/no-global-this -- safe
        check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
        check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
        function () {
            return this;
        }() || Function('return this')();

    var objectGetOwnPropertyDescriptor = {};

    var fails$8 = function (exec) {
        try {
            return !!exec();
        } catch (error) {
            return true;
        }
    };

    var fails$7 = fails$8; // Detect IE8's incomplete defineProperty implementation


    var descriptors = !fails$7(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- required for testing
        return Object.defineProperty({}, 1, {
            get: function () {
                return 7;
            }
        })[1] != 7;
    });

    var fails$6 = fails$8;

    var functionBindNative = !fails$6(function () {
        var test = function () {
            /* empty */
        }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


        return typeof test != 'function' || test.hasOwnProperty('prototype');
    });

    var NATIVE_BIND$1 = functionBindNative;

    var call$5 = Function.prototype.call;
    var functionCall = NATIVE_BIND$1 ? call$5.bind(call$5) : function () {
        return call$5.apply(call$5, arguments);
    };

    var objectPropertyIsEnumerable = {};

    var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

    var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

    var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
        1: 2
    }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

    objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor$1(this, V);
        return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;

    var createPropertyDescriptor$2 = function (bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };

    var NATIVE_BIND = functionBindNative;

    var FunctionPrototype$1 = Function.prototype;
    var bind = FunctionPrototype$1.bind;
    var call$4 = FunctionPrototype$1.call;
    var uncurryThis$b = NATIVE_BIND && bind.bind(call$4, call$4);
    var functionUncurryThis = NATIVE_BIND ? function (fn) {
        return fn && uncurryThis$b(fn);
    } : function (fn) {
        return fn && function () {
            return call$4.apply(fn, arguments);
        };
    };

    var uncurryThis$a = functionUncurryThis;

    var toString$4 = uncurryThis$a({}.toString);
    var stringSlice$1 = uncurryThis$a(''.slice);

    var classofRaw$1 = function (it) {
        return stringSlice$1(toString$4(it), 8, -1);
    };

    var global$o = global$p;

    var uncurryThis$9 = functionUncurryThis;

    var fails$5 = fails$8;

    var classof$2 = classofRaw$1;

    var Object$4 = global$o.Object;
    var split = uncurryThis$9(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

    var indexedObject = fails$5(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins -- safe
        return !Object$4('z').propertyIsEnumerable(0);
    }) ? function (it) {
        return classof$2(it) == 'String' ? split(it, '') : Object$4(it);
    } : Object$4;

    var global$n = global$p;

    var TypeError$7 = global$n.TypeError; // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible

    var requireObjectCoercible$4 = function (it) {
        if (it == undefined) throw TypeError$7("Can't call method on " + it);
        return it;
    };

    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject$1 = indexedObject;

    var requireObjectCoercible$3 = requireObjectCoercible$4;

    var toIndexedObject$3 = function (it) {
        return IndexedObject$1(requireObjectCoercible$3(it));
    };

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    var isCallable$a = function (argument) {
        return typeof argument == 'function';
    };

    var isCallable$9 = isCallable$a;

    var isObject$5 = function (it) {
        return typeof it == 'object' ? it !== null : isCallable$9(it);
    };

    var global$m = global$p;

    var isCallable$8 = isCallable$a;

    var aFunction = function (argument) {
        return isCallable$8(argument) ? argument : undefined;
    };

    var getBuiltIn$3 = function (namespace, method) {
        return arguments.length < 2 ? aFunction(global$m[namespace]) : global$m[namespace] && global$m[namespace][method];
    };

    var uncurryThis$8 = functionUncurryThis;

    var objectIsPrototypeOf = uncurryThis$8({}.isPrototypeOf);

    var getBuiltIn$2 = getBuiltIn$3;

    var engineUserAgent = getBuiltIn$2('navigator', 'userAgent') || '';

    var global$l = global$p;

    var userAgent$1 = engineUserAgent;

    var process = global$l.process;
    var Deno = global$l.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match, version;

    if (v8) {
        match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
        // but their correct versions are not interesting for us

        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    } // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
    // so check `userAgent` even if `.v8` exists, but 0


    if (!version && userAgent$1) {
        match = userAgent$1.match(/Edge\/(\d+)/);

        if (!match || match[1] >= 74) {
            match = userAgent$1.match(/Chrome\/(\d+)/);
            if (match) version = +match[1];
        }
    }

    var engineV8Version = version;

    /* eslint-disable es/no-symbol -- required for testing */

    var V8_VERSION = engineV8Version;

    var fails$4 = fails$8; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$4(function () {
        var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
        // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

        return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
            !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });

    /* eslint-disable es/no-symbol -- required for testing */

    var NATIVE_SYMBOL$1 = nativeSymbol;

    var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

    var global$k = global$p;

    var getBuiltIn$1 = getBuiltIn$3;

    var isCallable$7 = isCallable$a;

    var isPrototypeOf = objectIsPrototypeOf;

    var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

    var Object$3 = global$k.Object;
    var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
        return typeof it == 'symbol';
    } : function (it) {
        var $Symbol = getBuiltIn$1('Symbol');
        return isCallable$7($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
    };

    var global$j = global$p;

    var String$3 = global$j.String;

    var tryToString$1 = function (argument) {
        try {
            return String$3(argument);
        } catch (error) {
            return 'Object';
        }
    };

    var global$i = global$p;

    var isCallable$6 = isCallable$a;

    var tryToString = tryToString$1;

    var TypeError$6 = global$i.TypeError; // `Assert: IsCallable(argument) is true`

    var aCallable$1 = function (argument) {
        if (isCallable$6(argument)) return argument;
        throw TypeError$6(tryToString(argument) + ' is not a function');
    };

    var aCallable = aCallable$1; // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod


    var getMethod$1 = function (V, P) {
        var func = V[P];
        return func == null ? undefined : aCallable(func);
    };

    var global$h = global$p;

    var call$3 = functionCall;

    var isCallable$5 = isCallable$a;

    var isObject$4 = isObject$5;

    var TypeError$5 = global$h.TypeError; // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive

    var ordinaryToPrimitive$1 = function (input, pref) {
        var fn, val;
        if (pref === 'string' && isCallable$5(fn = input.toString) && !isObject$4(val = call$3(fn, input))) return val;
        if (isCallable$5(fn = input.valueOf) && !isObject$4(val = call$3(fn, input))) return val;
        if (pref !== 'string' && isCallable$5(fn = input.toString) && !isObject$4(val = call$3(fn, input))) return val;
        throw TypeError$5("Can't convert object to primitive value");
    };

    var shared$3 = {exports: {}};

    var global$g = global$p; // eslint-disable-next-line es/no-object-defineproperty -- safe


    var defineProperty$1 = Object.defineProperty;

    var setGlobal$3 = function (key, value) {
        try {
            defineProperty$1(global$g, key, {
                value: value,
                configurable: true,
                writable: true
            });
        } catch (error) {
            global$g[key] = value;
        }

        return value;
    };

    var global$f = global$p;

    var setGlobal$2 = setGlobal$3;

    var SHARED = '__core-js_shared__';
    var store$3 = global$f[SHARED] || setGlobal$2(SHARED, {});
    var sharedStore = store$3;

    var store$2 = sharedStore;

    (shared$3.exports = function (key, value) {
        return store$2[key] || (store$2[key] = value !== undefined ? value : {});
    })('versions', []).push({
        version: '3.21.0',
        mode: 'global',
        copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
        source: 'https://github.com/zloirock/core-js'
    });

    var global$e = global$p;

    var requireObjectCoercible$2 = requireObjectCoercible$4;

    var Object$2 = global$e.Object; // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject

    var toObject$2 = function (argument) {
        return Object$2(requireObjectCoercible$2(argument));
    };

    var uncurryThis$7 = functionUncurryThis;

    var toObject$1 = toObject$2;

    var hasOwnProperty = uncurryThis$7({}.hasOwnProperty); // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty

    var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject$1(it), key);
    };

    var uncurryThis$6 = functionUncurryThis;

    var id = 0;
    var postfix = Math.random();
    var toString$3 = uncurryThis$6(1.0.toString);

    var uid$2 = function (key) {
        return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36);
    };

    var global$d = global$p;

    var shared$2 = shared$3.exports;

    var hasOwn$6 = hasOwnProperty_1;

    var uid$1 = uid$2;

    var NATIVE_SYMBOL = nativeSymbol;

    var USE_SYMBOL_AS_UID = useSymbolAsUid;

    var WellKnownSymbolsStore = shared$2('wks');
    var Symbol$1 = global$d.Symbol;
    var symbolFor = Symbol$1 && Symbol$1['for'];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

    var wellKnownSymbol$3 = function (name) {
        if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
            var description = 'Symbol.' + name;

            if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
                WellKnownSymbolsStore[name] = Symbol$1[name];
            } else if (USE_SYMBOL_AS_UID && symbolFor) {
                WellKnownSymbolsStore[name] = symbolFor(description);
            } else {
                WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
            }
        }

        return WellKnownSymbolsStore[name];
    };

    var global$c = global$p;

    var call$2 = functionCall;

    var isObject$3 = isObject$5;

    var isSymbol$1 = isSymbol$2;

    var getMethod = getMethod$1;

    var ordinaryToPrimitive = ordinaryToPrimitive$1;

    var wellKnownSymbol$2 = wellKnownSymbol$3;

    var TypeError$4 = global$c.TypeError;
    var TO_PRIMITIVE = wellKnownSymbol$2('toPrimitive'); // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive

    var toPrimitive$1 = function (input, pref) {
        if (!isObject$3(input) || isSymbol$1(input)) return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;

        if (exoticToPrim) {
            if (pref === undefined) pref = 'default';
            result = call$2(exoticToPrim, input, pref);
            if (!isObject$3(result) || isSymbol$1(result)) return result;
            throw TypeError$4("Can't convert object to primitive value");
        }

        if (pref === undefined) pref = 'number';
        return ordinaryToPrimitive(input, pref);
    };

    var toPrimitive = toPrimitive$1;

    var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey


    var toPropertyKey$2 = function (argument) {
        var key = toPrimitive(argument, 'string');
        return isSymbol(key) ? key : key + '';
    };

    var global$b = global$p;

    var isObject$2 = isObject$5;

    var document$1 = global$b.document; // typeof document.createElement is 'object' in old IE

    var EXISTS$1 = isObject$2(document$1) && isObject$2(document$1.createElement);

    var documentCreateElement = function (it) {
        return EXISTS$1 ? document$1.createElement(it) : {};
    };

    var DESCRIPTORS$6 = descriptors;

    var fails$3 = fails$8;

    var createElement = documentCreateElement; // Thanks to IE8 for its funny defineProperty


    var ie8DomDefine = !DESCRIPTORS$6 && !fails$3(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- required for testing
        return Object.defineProperty(createElement('div'), 'a', {
            get: function () {
                return 7;
            }
        }).a != 7;
    });

    var DESCRIPTORS$5 = descriptors;

    var call$1 = functionCall;

    var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;

    var createPropertyDescriptor$1 = createPropertyDescriptor$2;

    var toIndexedObject$2 = toIndexedObject$3;

    var toPropertyKey$1 = toPropertyKey$2;

    var hasOwn$5 = hasOwnProperty_1;

    var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


    var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

    objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject$2(O);
        P = toPropertyKey$1(P);
        if (IE8_DOM_DEFINE$1) try {
            return $getOwnPropertyDescriptor$1(O, P);
        } catch (error) {
            /* empty */
        }
        if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call$1(propertyIsEnumerableModule$1.f, O, P), O[P]);
    };

    var objectDefineProperty = {};

    var DESCRIPTORS$4 = descriptors;

    var fails$2 = fails$8; // V8 ~ Chrome 36-
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334


    var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$2(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- required for testing
        return Object.defineProperty(function () {
            /* empty */
        }, 'prototype', {
            value: 42,
            writable: false
        }).prototype != 42;
    });

    var global$a = global$p;

    var isObject$1 = isObject$5;

    var String$2 = global$a.String;
    var TypeError$3 = global$a.TypeError; // `Assert: Type(argument) is Object`

    var anObject$2 = function (argument) {
        if (isObject$1(argument)) return argument;
        throw TypeError$3(String$2(argument) + ' is not an object');
    };

    var global$9 = global$p;

    var DESCRIPTORS$3 = descriptors;

    var IE8_DOM_DEFINE = ie8DomDefine;

    var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;

    var anObject$1 = anObject$2;

    var toPropertyKey = toPropertyKey$2;

    var TypeError$2 = global$9.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

    var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = 'enumerable';
    var CONFIGURABLE$1 = 'configurable';
    var WRITABLE = 'writable'; // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty

    objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
        anObject$1(O);
        P = toPropertyKey(P);
        anObject$1(Attributes);

        if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
            var current = $getOwnPropertyDescriptor(O, P);

            if (current && current[WRITABLE]) {
                O[P] = Attributes.value;
                Attributes = {
                    configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
                    enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                    writable: false
                };
            }
        }

        return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
        anObject$1(O);
        P = toPropertyKey(P);
        anObject$1(Attributes);
        if (IE8_DOM_DEFINE) try {
            return $defineProperty(O, P, Attributes);
        } catch (error) {
            /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError$2('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
    };

    var DESCRIPTORS$2 = descriptors;

    var definePropertyModule$1 = objectDefineProperty;

    var createPropertyDescriptor = createPropertyDescriptor$2;

    var createNonEnumerableProperty$3 = DESCRIPTORS$2 ? function (object, key, value) {
        return definePropertyModule$1.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
        object[key] = value;
        return object;
    };

    var redefine$1 = {exports: {}};

    var uncurryThis$5 = functionUncurryThis;

    var isCallable$4 = isCallable$a;

    var store$1 = sharedStore;

    var functionToString = uncurryThis$5(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

    if (!isCallable$4(store$1.inspectSource)) {
        store$1.inspectSource = function (it) {
            return functionToString(it);
        };
    }

    var inspectSource$2 = store$1.inspectSource;

    var global$8 = global$p;

    var isCallable$3 = isCallable$a;

    var inspectSource$1 = inspectSource$2;

    var WeakMap$1 = global$8.WeakMap;
    var nativeWeakMap = isCallable$3(WeakMap$1) && /native code/.test(inspectSource$1(WeakMap$1));

    var shared$1 = shared$3.exports;

    var uid = uid$2;

    var keys = shared$1('keys');

    var sharedKey$1 = function (key) {
        return keys[key] || (keys[key] = uid(key));
    };

    var hiddenKeys$3 = {};

    var NATIVE_WEAK_MAP = nativeWeakMap;

    var global$7 = global$p;

    var uncurryThis$4 = functionUncurryThis;

    var isObject = isObject$5;

    var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;

    var hasOwn$4 = hasOwnProperty_1;

    var shared = sharedStore;

    var sharedKey = sharedKey$1;

    var hiddenKeys$2 = hiddenKeys$3;

    var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
    var TypeError$1 = global$7.TypeError;
    var WeakMap = global$7.WeakMap;
    var set$1, get, has;

    var enforce = function (it) {
        return has(it) ? get(it) : set$1(it, {});
    };

    var getterFor = function (TYPE) {
        return function (it) {
            var state;

            if (!isObject(it) || (state = get(it)).type !== TYPE) {
                throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
            }

            return state;
        };
    };

    if (NATIVE_WEAK_MAP || shared.state) {
        var store = shared.state || (shared.state = new WeakMap());
        var wmget = uncurryThis$4(store.get);
        var wmhas = uncurryThis$4(store.has);
        var wmset = uncurryThis$4(store.set);

        set$1 = function (it, metadata) {
            if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            wmset(store, it, metadata);
            return metadata;
        };

        get = function (it) {
            return wmget(store, it) || {};
        };

        has = function (it) {
            return wmhas(store, it);
        };
    } else {
        var STATE = sharedKey('state');
        hiddenKeys$2[STATE] = true;

        set$1 = function (it, metadata) {
            if (hasOwn$4(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty$2(it, STATE, metadata);
            return metadata;
        };

        get = function (it) {
            return hasOwn$4(it, STATE) ? it[STATE] : {};
        };

        has = function (it) {
            return hasOwn$4(it, STATE);
        };
    }

    var internalState = {
        set: set$1,
        get: get,
        has: has,
        enforce: enforce,
        getterFor: getterFor
    };

    var DESCRIPTORS$1 = descriptors;

    var hasOwn$3 = hasOwnProperty_1;

    var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

    var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn$3(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

    var PROPER = EXISTS && function something() {
        /* empty */
    }.name === 'something';

    var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || DESCRIPTORS$1 && getDescriptor(FunctionPrototype, 'name').configurable);
    var functionName = {
        EXISTS: EXISTS,
        PROPER: PROPER,
        CONFIGURABLE: CONFIGURABLE
    };

    var global$6 = global$p;

    var isCallable$2 = isCallable$a;

    var hasOwn$2 = hasOwnProperty_1;

    var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;

    var setGlobal$1 = setGlobal$3;

    var inspectSource = inspectSource$2;

    var InternalStateModule = internalState;

    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;

    var getInternalState = InternalStateModule.get;
    var enforceInternalState = InternalStateModule.enforce;
    var TEMPLATE = String(String).split('String');
    (redefine$1.exports = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== undefined ? options.name : key;
        var state;

        if (isCallable$2(value)) {
            if (String(name).slice(0, 7) === 'Symbol(') {
                name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
            }

            if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
                createNonEnumerableProperty$1(value, 'name', name);
            }

            state = enforceInternalState(value);

            if (!state.source) {
                state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
            }
        }

        if (O === global$6) {
            if (simple) O[key] = value;else setGlobal$1(key, value);
            return;
        } else if (!unsafe) {
            delete O[key];
        } else if (!noTargetGet && O[key]) {
            simple = true;
        }

        if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
        return isCallable$2(this) && getInternalState(this).source || inspectSource(this);
    });

    var objectGetOwnPropertyNames = {};

    var ceil$1 = Math.ceil;
    var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity

    var toIntegerOrInfinity$3 = function (argument) {
        var number = +argument; // eslint-disable-next-line no-self-compare -- safe

        return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil$1)(number);
    };

    var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

    var max = Math.max;
    var min$1 = Math.min; // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

    var toAbsoluteIndex$1 = function (index, length) {
        var integer = toIntegerOrInfinity$2(index);
        return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
    };

    var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

    var min = Math.min; // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength

    var toLength$2 = function (argument) {
        return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    var toLength$1 = toLength$2; // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike


    var lengthOfArrayLike$1 = function (obj) {
        return toLength$1(obj.length);
    };

    var toIndexedObject$1 = toIndexedObject$3;

    var toAbsoluteIndex = toAbsoluteIndex$1;

    var lengthOfArrayLike = lengthOfArrayLike$1; // `Array.prototype.{ indexOf, includes }` methods implementation


    var createMethod$1 = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
            var O = toIndexedObject$1($this);
            var length = lengthOfArrayLike(O);
            var index = toAbsoluteIndex(fromIndex, length);
            var value; // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare -- NaN check

            if (IS_INCLUDES && el != el) while (length > index) {
                value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

                if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            }
            return !IS_INCLUDES && -1;
        };
    };

    var arrayIncludes = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod$1(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod$1(false)
    };

    var uncurryThis$3 = functionUncurryThis;

    var hasOwn$1 = hasOwnProperty_1;

    var toIndexedObject = toIndexedObject$3;

    var indexOf = arrayIncludes.indexOf;

    var hiddenKeys$1 = hiddenKeys$3;

    var push = uncurryThis$3([].push);

    var objectKeysInternal = function (object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;

        for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key); // Don't enum bug & hidden keys


        while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
            ~indexOf(result, key) || push(result, key);
        }

        return result;
    };

    // IE8- don't enum bug keys
    var enumBugKeys$2 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

    var internalObjectKeys$1 = objectKeysInternal;

    var enumBugKeys$1 = enumBugKeys$2;

    var hiddenKeys = enumBugKeys$1.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es/no-object-getownpropertynames -- safe

    objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys$1(O, hiddenKeys);
    };

    var objectGetOwnPropertySymbols = {};

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

    var getBuiltIn = getBuiltIn$3;

    var uncurryThis$2 = functionUncurryThis;

    var getOwnPropertyNamesModule = objectGetOwnPropertyNames;

    var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;

    var anObject = anObject$2;

    var concat$1 = uncurryThis$2([].concat); // all object keys, includes non-enumerable and symbols

    var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
        return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
    };

    var hasOwn = hasOwnProperty_1;

    var ownKeys = ownKeys$1;

    var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;

    var definePropertyModule = objectDefineProperty;

    var copyConstructorProperties$1 = function (target, source, exceptions) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
                defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
        }
    };

    var fails$1 = fails$8;

    var isCallable$1 = isCallable$a;

    var replacement = /#|\.prototype\./;

    var isForced$1 = function (feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : isCallable$1(detection) ? fails$1(detection) : !!detection;
    };

    var normalize = isForced$1.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced$1.data = {};
    var NATIVE = isForced$1.NATIVE = 'N';
    var POLYFILL = isForced$1.POLYFILL = 'P';
    var isForced_1 = isForced$1;

    var global$5 = global$p;

    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

    var createNonEnumerableProperty = createNonEnumerableProperty$3;

    var redefine = redefine$1.exports;

    var setGlobal = setGlobal$3;

    var copyConstructorProperties = copyConstructorProperties$1;

    var isForced = isForced_1;
    /*
     options.target      - name of the target object
     options.global      - target is the global object
     options.stat        - export as static methods of target
     options.proto       - export as prototype methods of target
     options.real        - real prototype method for the `pure` version
     options.forced      - export even if the native feature is available
     options.bind        - bind methods to the target, required for the `pure` version
     options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
     options.unsafe      - use the simple assignment of property instead of delete + defineProperty
     options.sham        - add a flag to not completely full polyfills
     options.enumerable  - export as enumerable property
     options.noTargetGet - prevent calling a getter on target
     options.name        - the .name of the function if it does not match the key
     */


    var _export = function (options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;

        if (GLOBAL) {
            target = global$5;
        } else if (STATIC) {
            target = global$5[TARGET] || setGlobal(TARGET, {});
        } else {
            target = (global$5[TARGET] || {}).prototype;
        }

        if (target) for (key in source) {
            sourceProperty = source[key];

            if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
            } else targetProperty = target[key];

            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

            if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty == typeof targetProperty) continue;
                copyConstructorProperties(sourceProperty, targetProperty);
            } // add a flag to not completely full polyfills


            if (options.sham || targetProperty && targetProperty.sham) {
                createNonEnumerableProperty(sourceProperty, 'sham', true);
            } // extend global


            redefine(target, key, sourceProperty, options);
        }
    };

    var internalObjectKeys = objectKeysInternal;

    var enumBugKeys = enumBugKeys$2; // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe


    var objectKeys$1 = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
    };

    var DESCRIPTORS = descriptors;

    var uncurryThis$1 = functionUncurryThis;

    var call = functionCall;

    var fails = fails$8;

    var objectKeys = objectKeys$1;

    var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;

    var propertyIsEnumerableModule = objectPropertyIsEnumerable;

    var toObject = toObject$2;

    var IndexedObject = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe


    var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

    var defineProperty = Object.defineProperty;
    var concat = uncurryThis$1([].concat); // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign

    var objectAssign = !$assign || fails(function () {
        // should have correct order of operations (Edge bug)
        if (DESCRIPTORS && $assign({
            b: 1
        }, $assign(defineProperty({}, 'a', {
            enumerable: true,
            get: function () {
                defineProperty(this, 'b', {
                    value: 3,
                    enumerable: false
                });
            }
        }), {
            b: 2
        })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

        var A = {};
        var B = {}; // eslint-disable-next-line es/no-symbol -- safe

        var symbol = Symbol();
        var alphabet = 'abcdefghijklmnopqrst';
        A[symbol] = 7;
        alphabet.split('').forEach(function (chr) {
            B[chr] = chr;
        });
        return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
    }) ? function assign(target, source) {
        // eslint-disable-line no-unused-vars -- required for `.length`
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        var propertyIsEnumerable = propertyIsEnumerableModule.f;

        while (argumentsLength > index) {
            var S = IndexedObject(arguments[index++]);
            var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
            var length = keys.length;
            var j = 0;
            var key;

            while (length > j) {
                key = keys[j++];
                if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
            }
        }

        return T;
    } : $assign;

    var $$4 = _export;

    var assign = objectAssign; // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    // eslint-disable-next-line es/no-object-assign -- required for testing


    $$4({
        target: 'Object',
        stat: true,
        forced: Object.assign !== assign
    }, {
        assign: assign
    });

    var wellKnownSymbol$1 = wellKnownSymbol$3;

    var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
    var test = {};
    test[TO_STRING_TAG$1] = 'z';
    var toStringTagSupport = String(test) === '[object z]';

    var global$4 = global$p;

    var TO_STRING_TAG_SUPPORT = toStringTagSupport;

    var isCallable = isCallable$a;

    var classofRaw = classofRaw$1;

    var wellKnownSymbol = wellKnownSymbol$3;

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    var Object$1 = global$4.Object; // ES3 wrong here

    var CORRECT_ARGUMENTS = classofRaw(function () {
        return arguments;
    }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

    var tryGet = function (it, key) {
        try {
            return it[key];
        } catch (error) {
            /* empty */
        }
    }; // getting tag from ES6+ `Object.prototype.toString`


    var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
            : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
                : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
                    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
    };

    var global$3 = global$p;

    var classof = classof$1;

    var String$1 = global$3.String;

    var toString$2 = function (argument) {
        if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
        return String$1(argument);
    };

    var global$2 = global$p;

    var toIntegerOrInfinity = toIntegerOrInfinity$3;

    var toString$1 = toString$2;

    var requireObjectCoercible$1 = requireObjectCoercible$4;

    var RangeError = global$2.RangeError; // `String.prototype.repeat` method implementation
    // https://tc39.es/ecma262/#sec-string.prototype.repeat

    var stringRepeat = function repeat(count) {
        var str = toString$1(requireObjectCoercible$1(this));
        var result = '';
        var n = toIntegerOrInfinity(count);
        if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

        for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

        return result;
    };

    var $$3 = _export;

    var repeat$1 = stringRepeat; // `String.prototype.repeat` method
    // https://tc39.es/ecma262/#sec-string.prototype.repeat


    $$3({
        target: 'String',
        proto: true
    }, {
        repeat: repeat$1
    });

    // https://github.com/tc39/proposal-string-pad-start-end
    var uncurryThis = functionUncurryThis;

    var toLength = toLength$2;

    var toString = toString$2;

    var $repeat = stringRepeat;

    var requireObjectCoercible = requireObjectCoercible$4;

    var repeat = uncurryThis($repeat);
    var stringSlice = uncurryThis(''.slice);
    var ceil = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

    var createMethod = function (IS_END) {
        return function ($this, maxLength, fillString) {
            var S = toString(requireObjectCoercible($this));
            var intMaxLength = toLength(maxLength);
            var stringLength = S.length;
            var fillStr = fillString === undefined ? ' ' : toString(fillString);
            var fillLen, stringFiller;
            if (intMaxLength <= stringLength || fillStr == '') return S;
            fillLen = intMaxLength - stringLength;
            stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
            if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
            return IS_END ? S + stringFiller : stringFiller + S;
        };
    };

    var stringPad = {
        // `String.prototype.padStart` method
        // https://tc39.es/ecma262/#sec-string.prototype.padstart
        start: createMethod(false),
        // `String.prototype.padEnd` method
        // https://tc39.es/ecma262/#sec-string.prototype.padend
        end: createMethod(true)
    };

    // https://github.com/zloirock/core-js/issues/280
    var userAgent = engineUserAgent;

    var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

    var $$2 = _export;

    var $padStart = stringPad.start;

    var WEBKIT_BUG$1 = stringPadWebkitBug; // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart


    $$2({
        target: 'String',
        proto: true,
        forced: WEBKIT_BUG$1
    }, {
        padStart: function padStart(maxLength
                                    /* , fillString = ' ' */
        ) {
            return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    var $$1 = _export;

    var $padEnd = stringPad.end;

    var WEBKIT_BUG = stringPadWebkitBug; // `String.prototype.padEnd` method
    // https://tc39.es/ecma262/#sec-string.prototype.padend


    $$1({
        target: 'String',
        proto: true,
        forced: WEBKIT_BUG
    }, {
        padEnd: function padEnd(maxLength
                                /* , fillString = ' ' */
        ) {
            return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    var $ = _export;

    var global$1 = global$p; // `globalThis` object
    // https://tc39.es/ecma262/#sec-globalthis


    $({
        global: true
    }, {
        globalThis: global$1
    });

    function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        Object.defineProperty(subClass, "prototype", {
            writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;

        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }

        return target;
    }

    function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};

        var target = _objectWithoutPropertiesLoose(source, excluded);

        var key, i;

        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
                key = sourceSymbolKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                target[key] = source[key];
            }
        }

        return target;
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
        }

        return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;

                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
        };
    }

    function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
        }

        return object;
    }

    function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
        } else {
            _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);

                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);

                if (desc.get) {
                    return desc.get.call(arguments.length < 3 ? target : receiver);
                }

                return desc.value;
            };
        }

        return _get.apply(this, arguments);
    }

    function set(target, property, value, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.set) {
            set = Reflect.set;
        } else {
            set = function set(target, property, value, receiver) {
                var base = _superPropBase(target, property);

                var desc;

                if (base) {
                    desc = Object.getOwnPropertyDescriptor(base, property);

                    if (desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    } else if (!desc.writable) {
                        return false;
                    }
                }

                desc = Object.getOwnPropertyDescriptor(receiver, property);

                if (desc) {
                    if (!desc.writable) {
                        return false;
                    }

                    desc.value = value;
                    Object.defineProperty(receiver, property, desc);
                } else {
                    _defineProperty(receiver, property, value);
                }

                return true;
            };
        }

        return set(target, property, value, receiver);
    }

    function _set(target, property, value, receiver, isStrict) {
        var s = set(target, property, value, receiver || target);

        if (!s && isStrict) {
            throw new Error('failed to set property');
        }

        return value;
    }

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;

        var _s, _e;

        try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    /**
     Provides details of changing model value
     @param {Object} [details]
     @param {string} [details.inserted] - Inserted symbols
     @param {boolean} [details.skip] - Can skip chars
     @param {number} [details.removeCount] - Removed symbols count
     @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
     */
    var ChangeDetails = /*#__PURE__*/function () {
        /** Inserted symbols */

        /** Can skip chars */

        /** Additional offset if any changes occurred before tail */

        /** Raw inserted is used by dynamic mask */
        function ChangeDetails(details) {
            _classCallCheck(this, ChangeDetails);

            Object.assign(this, {
                inserted: '',
                rawInserted: '',
                skip: false,
                tailShift: 0
            }, details);
        }
        /**
         Aggregate changes
         @returns {ChangeDetails} `this`
         */


        _createClass(ChangeDetails, [{
            key: "aggregate",
            value: function aggregate(details) {
                this.rawInserted += details.rawInserted;
                this.skip = this.skip || details.skip;
                this.inserted += details.inserted;
                this.tailShift += details.tailShift;
                return this;
            }
            /** Total offset considering all changes */

        }, {
            key: "offset",
            get: function get() {
                return this.tailShift + this.inserted.length;
            }
        }]);

        return ChangeDetails;
    }();

    /** Checks if value is string */

    function isString(str) {
        return typeof str === 'string' || str instanceof String;
    }
    /**
     Direction
     @prop {string} NONE
     @prop {string} LEFT
     @prop {string} FORCE_LEFT
     @prop {string} RIGHT
     @prop {string} FORCE_RIGHT
     */

    var DIRECTION = {
        NONE: 'NONE',
        LEFT: 'LEFT',
        FORCE_LEFT: 'FORCE_LEFT',
        RIGHT: 'RIGHT',
        FORCE_RIGHT: 'FORCE_RIGHT'
    };
    /** */

    function forceDirection(direction) {
        switch (direction) {
            case DIRECTION.LEFT:
                return DIRECTION.FORCE_LEFT;

            case DIRECTION.RIGHT:
                return DIRECTION.FORCE_RIGHT;

            default:
                return direction;
        }
    }
    /** Escapes regular expression control chars */

    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    }
    function normalizePrepare(prep) {
        return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
    } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

    function objectIncludes(b, a) {
        if (a === b) return true;
        var arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i;

        if (arrA && arrB) {
            if (a.length != b.length) return false;

            for (i = 0; i < a.length; i++) {
                if (!objectIncludes(a[i], b[i])) return false;
            }

            return true;
        }

        if (arrA != arrB) return false;

        if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
            var dateA = a instanceof Date,
                dateB = b instanceof Date;
            if (dateA && dateB) return a.getTime() == b.getTime();
            if (dateA != dateB) return false;
            var regexpA = a instanceof RegExp,
                regexpB = b instanceof RegExp;
            if (regexpA && regexpB) return a.toString() == b.toString();
            if (regexpA != regexpB) return false;
            var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

            for (i = 0; i < keys.length; i++) {
                // $FlowFixMe ... ???
                if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
            }

            for (i = 0; i < keys.length; i++) {
                if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
            }

            return true;
        } else if (a && b && typeof a === 'function' && typeof b === 'function') {
            return a.toString() === b.toString();
        }

        return false;
    }
    /** Selection range */

    /** Provides details of changing input */

    var ActionDetails = /*#__PURE__*/function () {
        /** Current input value */

        /** Current cursor position */

        /** Old input value */

        /** Old selection */
        function ActionDetails(value, cursorPos, oldValue, oldSelection) {
            _classCallCheck(this, ActionDetails);

            this.value = value;
            this.cursorPos = cursorPos;
            this.oldValue = oldValue;
            this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

            while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
                --this.oldSelection.start;
            }
        }
        /**
         Start changing position
         @readonly
         */


        _createClass(ActionDetails, [{
            key: "startChangePos",
            get: function get() {
                return Math.min(this.cursorPos, this.oldSelection.start);
            }
            /**
             Inserted symbols count
             @readonly
             */

        }, {
            key: "insertedCount",
            get: function get() {
                return this.cursorPos - this.startChangePos;
            }
            /**
             Inserted symbols
             @readonly
             */

        }, {
            key: "inserted",
            get: function get() {
                return this.value.substr(this.startChangePos, this.insertedCount);
            }
            /**
             Removed symbols count
             @readonly
             */

        }, {
            key: "removedCount",
            get: function get() {
                // Math.max for opposite operation
                return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
                    this.oldValue.length - this.value.length, 0);
            }
            /**
             Removed symbols
             @readonly
             */

        }, {
            key: "removed",
            get: function get() {
                return this.oldValue.substr(this.startChangePos, this.removedCount);
            }
            /**
             Unchanged head symbols
             @readonly
             */

        }, {
            key: "head",
            get: function get() {
                return this.value.substring(0, this.startChangePos);
            }
            /**
             Unchanged tail symbols
             @readonly
             */

        }, {
            key: "tail",
            get: function get() {
                return this.value.substring(this.startChangePos + this.insertedCount);
            }
            /**
             Remove direction
             @readonly
             */

        }, {
            key: "removeDirection",
            get: function get() {
                if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right

                return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
                this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
            }
        }]);

        return ActionDetails;
    }();

    /** Provides details of continuous extracted tail */
    var ContinuousTailDetails = /*#__PURE__*/function () {
        /** Tail value as string */

        /** Tail start position */

        /** Start position */
        function ContinuousTailDetails() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var stop = arguments.length > 2 ? arguments[2] : undefined;

            _classCallCheck(this, ContinuousTailDetails);

            this.value = value;
            this.from = from;
            this.stop = stop;
        }

        _createClass(ContinuousTailDetails, [{
            key: "toString",
            value: function toString() {
                return this.value;
            }
        }, {
            key: "extend",
            value: function extend(tail) {
                this.value += String(tail);
            }
        }, {
            key: "appendTo",
            value: function appendTo(masked) {
                return masked.append(this.toString(), {
                    tail: true
                }).aggregate(masked._appendPlaceholder());
            }
        }, {
            key: "state",
            get: function get() {
                return {
                    value: this.value,
                    from: this.from,
                    stop: this.stop
                };
            },
            set: function set(state) {
                Object.assign(this, state);
            }
        }, {
            key: "unshift",
            value: function unshift(beforePos) {
                if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
                var shiftChar = this.value[0];
                this.value = this.value.slice(1);
                return shiftChar;
            }
        }, {
            key: "shift",
            value: function shift() {
                if (!this.value.length) return '';
                var shiftChar = this.value[this.value.length - 1];
                this.value = this.value.slice(0, -1);
                return shiftChar;
            }
        }]);

        return ContinuousTailDetails;
    }();

    /**
     * Applies mask on element.
     * @constructor
     * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
     * @param {Object} opts - Custom mask options
     * @return {InputMask}
     */
    function IMask(el) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // currently available only for input-like elements
        return new IMask.InputMask(el, opts);
    }

    /** Supported mask type */

    /** Provides common masking stuff */
    var Masked = /*#__PURE__*/function () {
        // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

        /** @type {Mask} */

        /** */
        // $FlowFixMe no ideas

        /** Transforms value before mask processing */

        /** Validates if value is acceptable */

        /** Does additional processing in the end of editing */

        /** Format typed value to string */

        /** Parse strgin to get typed value */

        /** Enable characters overwriting */

        /** */

        /** */
        function Masked(opts) {
            _classCallCheck(this, Masked);

            this._value = '';

            this._update(Object.assign({}, Masked.DEFAULTS, opts));

            this.isInitialized = true;
        }
        /** Sets and applies new options */


        _createClass(Masked, [{
            key: "updateOptions",
            value: function updateOptions(opts) {
                if (!Object.keys(opts).length) return; // $FlowFixMe

                this.withValueRefresh(this._update.bind(this, opts));
            }
            /**
             Sets new options
             @protected
             */

        }, {
            key: "_update",
            value: function _update(opts) {
                Object.assign(this, opts);
            }
            /** Mask state */

        }, {
            key: "state",
            get: function get() {
                return {
                    _value: this.value
                };
            },
            set: function set(state) {
                this._value = state._value;
            }
            /** Resets value */

        }, {
            key: "reset",
            value: function reset() {
                this._value = '';
            }
            /** */

        }, {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(value) {
                this.resolve(value);
            }
            /** Resolve new value */

        }, {
            key: "resolve",
            value: function resolve(value) {
                this.reset();
                this.append(value, {
                    input: true
                }, '');
                this.doCommit();
                return this.value;
            }
            /** */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this.value;
            },
            set: function set(value) {
                this.reset();
                this.append(value, {}, '');
                this.doCommit();
            }
            /** */

        }, {
            key: "typedValue",
            get: function get() {
                return this.doParse(this.value);
            },
            set: function set(value) {
                this.value = this.doFormat(value);
            }
            /** Value that includes raw user input */

        }, {
            key: "rawInputValue",
            get: function get() {
                return this.extractInput(0, this.value.length, {
                    raw: true
                });
            },
            set: function set(value) {
                this.reset();
                this.append(value, {
                    raw: true
                }, '');
                this.doCommit();
            }
            /** */

        }, {
            key: "isComplete",
            get: function get() {
                return true;
            }
            /** */

        }, {
            key: "isFilled",
            get: function get() {
                return this.isComplete;
            }
            /** Finds nearest input position in direction */

        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos, direction) {
                return cursorPos;
            }
            /** Extracts value in range considering flags */

        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                return this.value.slice(fromPos, toPos);
            }
            /** Extracts tail in range */

        }, {
            key: "extractTail",
            value: function extractTail() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
            }
            /** Appends tail */
            // $FlowFixMe no ideas

        }, {
            key: "appendTail",
            value: function appendTail(tail) {
                if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                return tail.appendTo(this);
            }
            /** Appends char */

        }, {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                if (!ch) return new ChangeDetails();
                this._value += ch;
                return new ChangeDetails({
                    inserted: ch,
                    rawInserted: ch
                });
            }
            /** Appends char */

        }, {
            key: "_appendChar",
            value: function _appendChar(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var checkTail = arguments.length > 2 ? arguments[2] : undefined;
                var consistentState = this.state;
                var details;

                var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));

                var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

                ch = _normalizePrepare2[0];
                details = _normalizePrepare2[1];
                details = details.aggregate(this._appendCharRaw(ch, flags));

                if (details.inserted) {
                    var consistentTail;
                    var appended = this.doValidate(flags) !== false;

                    if (appended && checkTail != null) {
                        // validation ok, check tail
                        var beforeTailState = this.state;

                        if (this.overwrite === true) {
                            consistentTail = checkTail.state;
                            checkTail.unshift(this.value.length);
                        }

                        var tailDetails = this.appendTail(checkTail);
                        appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

                        if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
                            this.state = beforeTailState;
                            consistentTail = checkTail.state;
                            checkTail.shift();
                            tailDetails = this.appendTail(checkTail);
                            appended = tailDetails.rawInserted === checkTail.toString();
                        } // if ok, rollback state after tail


                        if (appended && tailDetails.inserted) this.state = beforeTailState;
                    } // revert all if something went wrong


                    if (!appended) {
                        details = new ChangeDetails();
                        this.state = consistentState;
                        if (checkTail && consistentTail) checkTail.state = consistentTail;
                    }
                }

                return details;
            }
            /** Appends optional placeholder at end */

        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                return new ChangeDetails();
            }
            /** Appends optional eager placeholder at end */

        }, {
            key: "_appendEager",
            value: function _appendEager() {
                return new ChangeDetails();
            }
            /** Appends symbols considering flags */
            // $FlowFixMe no ideas

        }, {
            key: "append",
            value: function append(str, flags, tail) {
                if (!isString(str)) throw new Error('value should be string');
                var details = new ChangeDetails();
                var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
                if (flags && flags.tail) flags._beforeTailState = this.state;

                for (var ci = 0; ci < str.length; ++ci) {
                    details.aggregate(this._appendChar(str[ci], flags, checkTail));
                } // append tail but aggregate only tailShift


                if (checkTail != null) {
                    details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
                    // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
                    // this._resetBeforeTailState();
                }

                if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
                    details.aggregate(this._appendEager());
                }

                return details;
            }
            /** */

        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
                return new ChangeDetails();
            }
            /** Calls function and reapplies current value */

        }, {
            key: "withValueRefresh",
            value: function withValueRefresh(fn) {
                if (this._refreshing || !this.isInitialized) return fn();
                this._refreshing = true;
                var rawInput = this.rawInputValue;
                var value = this.value;
                var ret = fn();
                this.rawInputValue = rawInput; // append lost trailing chars at end

                if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
                    this.append(value.slice(this.value.length), {}, '');
                }

                delete this._refreshing;
                return ret;
            }
            /** */

        }, {
            key: "runIsolated",
            value: function runIsolated(fn) {
                if (this._isolated || !this.isInitialized) return fn(this);
                this._isolated = true;
                var state = this.state;
                var ret = fn(this);
                this.state = state;
                delete this._isolated;
                return ret;
            }
            /**
             Prepares string before mask processing
             @protected
             */

        }, {
            key: "doPrepare",
            value: function doPrepare(str) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.prepare ? this.prepare(str, this, flags) : str;
            }
            /**
             Validates if value is acceptable
             @protected
             */

        }, {
            key: "doValidate",
            value: function doValidate(flags) {
                return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
            }
            /**
             Does additional processing in the end of editing
             @protected
             */

        }, {
            key: "doCommit",
            value: function doCommit() {
                if (this.commit) this.commit(this.value, this);
            }
            /** */

        }, {
            key: "doFormat",
            value: function doFormat(value) {
                return this.format ? this.format(value, this) : value;
            }
            /** */

        }, {
            key: "doParse",
            value: function doParse(str) {
                return this.parse ? this.parse(str, this) : str;
            }
            /** */

        }, {
            key: "splice",
            value: function splice(start, deleteCount, inserted, removeDirection) {
                var tailPos = start + deleteCount;
                var tail = this.extractTail(tailPos);
                var oldRawValue;

                if (this.eager) {
                    removeDirection = forceDirection(removeDirection);
                    oldRawValue = this.extractInput(0, tailPos, {
                        raw: true
                    });
                }

                var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
                var details = new ChangeDetails({
                    tailShift: startChangePos - start // adjust tailShift if start was aligned

                }).aggregate(this.remove(startChangePos));

                if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
                    if (removeDirection === DIRECTION.FORCE_LEFT) {
                        var valLength;

                        while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
                            details.aggregate(new ChangeDetails({
                                tailShift: -1
                            })).aggregate(this.remove(valLength - 1));
                        }
                    } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
                        tail.unshift();
                    }
                }

                return details.aggregate(this.append(inserted, {
                    input: true
                }, tail));
            }
        }, {
            key: "maskEquals",
            value: function maskEquals(mask) {
                return this.mask === mask;
            }
        }]);

        return Masked;
    }();
    Masked.DEFAULTS = {
        format: function format(v) {
            return v;
        },
        parse: function parse(v) {
            return v;
        }
    };
    IMask.Masked = Masked;

    /** Get Masked class by mask type */

    function maskedClass(mask) {
        if (mask == null) {
            throw new Error('mask property should be defined');
        } // $FlowFixMe


        if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

        if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

        if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

        if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

        if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

        if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

        if (mask instanceof IMask.Masked) return mask.constructor; // $FlowFixMe

        if (mask instanceof Function) return IMask.MaskedFunction;
        console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
        // $FlowFixMe

        return IMask.Masked;
    }
    /** Creates new {@link Masked} depending on mask type */

    function createMask(opts) {
        // $FlowFixMe
        if (IMask.Masked && opts instanceof IMask.Masked) return opts;
        opts = Object.assign({}, opts);
        var mask = opts.mask; // $FlowFixMe

        if (IMask.Masked && mask instanceof IMask.Masked) return mask;
        var MaskedClass = maskedClass(mask);
        if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
        return new MaskedClass(opts);
    }
    IMask.createMask = createMask;

    var _excluded$4 = ["mask"];
    var DEFAULT_INPUT_DEFINITIONS = {
        '0': /\d/,
        'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // http://stackoverflow.com/a/22075070
        '*': /./
    };
    /** */

    var PatternInputDefinition = /*#__PURE__*/function () {
        /** */

        /** */

        /** */

        /** */

        /** */

        /** */

        /** */
        function PatternInputDefinition(opts) {
            _classCallCheck(this, PatternInputDefinition);

            var mask = opts.mask,
                blockOpts = _objectWithoutProperties(opts, _excluded$4);

            this.masked = createMask({
                mask: mask
            });
            Object.assign(this, blockOpts);
        }

        _createClass(PatternInputDefinition, [{
            key: "reset",
            value: function reset() {
                this.isFilled = false;
                this.masked.reset();
            }
        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                if (fromPos === 0 && toPos >= 1) {
                    this.isFilled = false;
                    return this.masked.remove(fromPos, toPos);
                }

                return new ChangeDetails();
            }
        }, {
            key: "value",
            get: function get() {
                return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
            }
        }, {
            key: "unmaskedValue",
            get: function get() {
                return this.masked.unmaskedValue;
            }
        }, {
            key: "isComplete",
            get: function get() {
                return Boolean(this.masked.value) || this.isOptional;
            }
        }, {
            key: "_appendChar",
            value: function _appendChar(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (this.isFilled) return new ChangeDetails();
                var state = this.masked.state; // simulate input

                var details = this.masked._appendChar(ch, flags);

                if (details.inserted && this.doValidate(flags) === false) {
                    details.inserted = details.rawInserted = '';
                    this.masked.state = state;
                }

                if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
                    details.inserted = this.placeholderChar;
                }

                details.skip = !details.inserted && !this.isOptional;
                this.isFilled = Boolean(details.inserted);
                return details;
            }
        }, {
            key: "append",
            value: function append() {
                var _this$masked;

                // TODO probably should be done via _appendChar
                return (_this$masked = this.masked).append.apply(_this$masked, arguments);
            }
        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                var details = new ChangeDetails();
                if (this.isFilled || this.isOptional) return details;
                this.isFilled = true;
                details.inserted = this.placeholderChar;
                return details;
            }
        }, {
            key: "_appendEager",
            value: function _appendEager() {
                return new ChangeDetails();
            }
        }, {
            key: "extractTail",
            value: function extractTail() {
                var _this$masked2;

                return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
            }
        }, {
            key: "appendTail",
            value: function appendTail() {
                var _this$masked3;

                return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
            }
        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var flags = arguments.length > 2 ? arguments[2] : undefined;
                return this.masked.extractInput(fromPos, toPos, flags);
            }
        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
                var minPos = 0;
                var maxPos = this.value.length;
                var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

                switch (direction) {
                    case DIRECTION.LEFT:
                    case DIRECTION.FORCE_LEFT:
                        return this.isComplete ? boundPos : minPos;

                    case DIRECTION.RIGHT:
                    case DIRECTION.FORCE_RIGHT:
                        return this.isComplete ? boundPos : maxPos;

                    case DIRECTION.NONE:
                    default:
                        return boundPos;
                }
            }
        }, {
            key: "doValidate",
            value: function doValidate() {
                var _this$masked4, _this$parent;

                return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
            }
        }, {
            key: "doCommit",
            value: function doCommit() {
                this.masked.doCommit();
            }
        }, {
            key: "state",
            get: function get() {
                return {
                    masked: this.masked.state,
                    isFilled: this.isFilled
                };
            },
            set: function set(state) {
                this.masked.state = state.masked;
                this.isFilled = state.isFilled;
            }
        }]);

        return PatternInputDefinition;
    }();

    var PatternFixedDefinition = /*#__PURE__*/function () {
        /** */

        /** */

        /** */

        /** */

        /** */

        /** */
        function PatternFixedDefinition(opts) {
            _classCallCheck(this, PatternFixedDefinition);

            Object.assign(this, opts);
            this._value = '';
            this.isFixed = true;
        }

        _createClass(PatternFixedDefinition, [{
            key: "value",
            get: function get() {
                return this._value;
            }
        }, {
            key: "unmaskedValue",
            get: function get() {
                return this.isUnmasking ? this.value : '';
            }
        }, {
            key: "reset",
            value: function reset() {
                this._isRawInput = false;
                this._value = '';
            }
        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
                if (!this._value) this._isRawInput = false;
                return new ChangeDetails();
            }
        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
                var minPos = 0;
                var maxPos = this._value.length;

                switch (direction) {
                    case DIRECTION.LEFT:
                    case DIRECTION.FORCE_LEFT:
                        return minPos;

                    case DIRECTION.NONE:
                    case DIRECTION.RIGHT:
                    case DIRECTION.FORCE_RIGHT:
                    default:
                        return maxPos;
                }
            }
        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
            }
        }, {
            key: "isComplete",
            get: function get() {
                return true;
            }
        }, {
            key: "isFilled",
            get: function get() {
                return Boolean(this._value);
            }
        }, {
            key: "_appendChar",
            value: function _appendChar(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var details = new ChangeDetails();
                if (this._value) return details;
                var appended = this.char === ch;
                var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
                if (isResolved) details.rawInserted = this.char;
                this._value = details.inserted = this.char;
                this._isRawInput = isResolved && (flags.raw || flags.input);
                return details;
            }
        }, {
            key: "_appendEager",
            value: function _appendEager() {
                return this._appendChar(this.char);
            }
        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                var details = new ChangeDetails();
                if (this._value) return details;
                this._value = details.inserted = this.char;
                return details;
            }
        }, {
            key: "extractTail",
            value: function extractTail() {
                arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                return new ContinuousTailDetails('');
            } // $FlowFixMe no ideas

        }, {
            key: "appendTail",
            value: function appendTail(tail) {
                if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                return tail.appendTo(this);
            }
        }, {
            key: "append",
            value: function append(str, flags, tail) {
                var details = this._appendChar(str[0], flags);

                if (tail != null) {
                    details.tailShift += this.appendTail(tail).tailShift;
                }

                return details;
            }
        }, {
            key: "doCommit",
            value: function doCommit() {}
        }, {
            key: "state",
            get: function get() {
                return {
                    _value: this._value,
                    _isRawInput: this._isRawInput
                };
            },
            set: function set(state) {
                Object.assign(this, state);
            }
        }]);

        return PatternFixedDefinition;
    }();

    var _excluded$3 = ["chunks"];

    var ChunksTailDetails = /*#__PURE__*/function () {
        /** */
        function ChunksTailDetails() {
            var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            _classCallCheck(this, ChunksTailDetails);

            this.chunks = chunks;
            this.from = from;
        }

        _createClass(ChunksTailDetails, [{
            key: "toString",
            value: function toString() {
                return this.chunks.map(String).join('');
            } // $FlowFixMe no ideas

        }, {
            key: "extend",
            value: function extend(tailChunk) {
                if (!String(tailChunk)) return;
                if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
                var lastChunk = this.chunks[this.chunks.length - 1];
                var extendLast = lastChunk && ( // if stops are same or tail has no stop
                    lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
                    tailChunk.from === lastChunk.from + lastChunk.toString().length;

                if (tailChunk instanceof ContinuousTailDetails) {
                    // check the ability to extend previous chunk
                    if (extendLast) {
                        // extend previous chunk
                        lastChunk.extend(tailChunk.toString());
                    } else {
                        // append new chunk
                        this.chunks.push(tailChunk);
                    }
                } else if (tailChunk instanceof ChunksTailDetails) {
                    if (tailChunk.stop == null) {
                        // unwrap floating chunks to parent, keeping `from` pos
                        var firstTailChunk;

                        while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
                            firstTailChunk = tailChunk.chunks.shift();
                            firstTailChunk.from += tailChunk.from;
                            this.extend(firstTailChunk);
                        }
                    } // if tail chunk still has value


                    if (tailChunk.toString()) {
                        // if chunks contains stops, then popup stop to container
                        tailChunk.stop = tailChunk.blockIndex;
                        this.chunks.push(tailChunk);
                    }
                }
            }
        }, {
            key: "appendTo",
            value: function appendTo(masked) {
                // $FlowFixMe
                if (!(masked instanceof IMask.MaskedPattern)) {
                    var tail = new ContinuousTailDetails(this.toString());
                    return tail.appendTo(masked);
                }

                var details = new ChangeDetails();

                for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
                    var chunk = this.chunks[ci];

                    var lastBlockIter = masked._mapPosToBlock(masked.value.length);

                    var stop = chunk.stop;
                    var chunkBlock = void 0;

                    if (stop != null && ( // if block not found or stop is behind lastBlock
                        !lastBlockIter || lastBlockIter.index <= stop)) {
                        if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
                            masked._stops.indexOf(stop) >= 0) {
                            details.aggregate(masked._appendPlaceholder(stop));
                        }

                        chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
                    }

                    if (chunkBlock) {
                        var tailDetails = chunkBlock.appendTail(chunk);
                        tailDetails.skip = false; // always ignore skip, it will be set on last

                        details.aggregate(tailDetails);
                        masked._value += tailDetails.inserted; // get not inserted chars

                        var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                        if (remainChars) details.aggregate(masked.append(remainChars, {
                            tail: true
                        }));
                    } else {
                        details.aggregate(masked.append(chunk.toString(), {
                            tail: true
                        }));
                    }
                }
                return details;
            }
        }, {
            key: "state",
            get: function get() {
                return {
                    chunks: this.chunks.map(function (c) {
                        return c.state;
                    }),
                    from: this.from,
                    stop: this.stop,
                    blockIndex: this.blockIndex
                };
            },
            set: function set(state) {
                var chunks = state.chunks,
                    props = _objectWithoutProperties(state, _excluded$3);

                Object.assign(this, props);
                this.chunks = chunks.map(function (cstate) {
                    var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

                    chunk.state = cstate;
                    return chunk;
                });
            }
        }, {
            key: "unshift",
            value: function unshift(beforePos) {
                if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
                var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
                var ci = 0;

                while (ci < this.chunks.length) {
                    var chunk = this.chunks[ci];
                    var shiftChar = chunk.unshift(chunkShiftPos);

                    if (chunk.toString()) {
                        // chunk still contains value
                        // but not shifted - means no more available chars to shift
                        if (!shiftChar) break;
                        ++ci;
                    } else {
                        // clean if chunk has no value
                        this.chunks.splice(ci, 1);
                    }

                    if (shiftChar) return shiftChar;
                }

                return '';
            }
        }, {
            key: "shift",
            value: function shift() {
                if (!this.chunks.length) return '';
                var ci = this.chunks.length - 1;

                while (0 <= ci) {
                    var chunk = this.chunks[ci];
                    var shiftChar = chunk.shift();

                    if (chunk.toString()) {
                        // chunk still contains value
                        // but not shifted - means no more available chars to shift
                        if (!shiftChar) break;
                        --ci;
                    } else {
                        // clean if chunk has no value
                        this.chunks.splice(ci, 1);
                    }

                    if (shiftChar) return shiftChar;
                }

                return '';
            }
        }]);

        return ChunksTailDetails;
    }();

    var PatternCursor = /*#__PURE__*/function () {
        function PatternCursor(masked, pos) {
            _classCallCheck(this, PatternCursor);

            this.masked = masked;
            this._log = [];

            var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? // first
                {
                    index: 0,
                    offset: 0
                } : // last
                {
                    index: this.masked._blocks.length,
                    offset: 0
                }),
                offset = _ref.offset,
                index = _ref.index;

            this.offset = offset;
            this.index = index;
            this.ok = false;
        }

        _createClass(PatternCursor, [{
            key: "block",
            get: function get() {
                return this.masked._blocks[this.index];
            }
        }, {
            key: "pos",
            get: function get() {
                return this.masked._blockStartPos(this.index) + this.offset;
            }
        }, {
            key: "state",
            get: function get() {
                return {
                    index: this.index,
                    offset: this.offset,
                    ok: this.ok
                };
            },
            set: function set(s) {
                Object.assign(this, s);
            }
        }, {
            key: "pushState",
            value: function pushState() {
                this._log.push(this.state);
            }
        }, {
            key: "popState",
            value: function popState() {
                var s = this._log.pop();

                this.state = s;
                return s;
            }
        }, {
            key: "bindBlock",
            value: function bindBlock() {
                if (this.block) return;

                if (this.index < 0) {
                    this.index = 0;
                    this.offset = 0;
                }

                if (this.index >= this.masked._blocks.length) {
                    this.index = this.masked._blocks.length - 1;
                    this.offset = this.block.value.length;
                }
            }
        }, {
            key: "_pushLeft",
            value: function _pushLeft(fn) {
                this.pushState();

                for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
                    var _this$block;

                    if (fn()) return this.ok = true;
                }

                return this.ok = false;
            }
        }, {
            key: "_pushRight",
            value: function _pushRight(fn) {
                this.pushState();

                for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
                    if (fn()) return this.ok = true;
                }

                return this.ok = false;
            }
        }, {
            key: "pushLeftBeforeFilled",
            value: function pushLeftBeforeFilled() {
                var _this = this;

                return this._pushLeft(function () {
                    if (_this.block.isFixed || !_this.block.value) return;
                    _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
                    if (_this.offset !== 0) return true;
                });
            }
        }, {
            key: "pushLeftBeforeInput",
            value: function pushLeftBeforeInput() {
                var _this2 = this;

                // cases:
                // filled input: 00|
                // optional empty input: 00[]|
                // nested block: XX<[]>|
                return this._pushLeft(function () {
                    if (_this2.block.isFixed) return;
                    _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
                    return true;
                });
            }
        }, {
            key: "pushLeftBeforeRequired",
            value: function pushLeftBeforeRequired() {
                var _this3 = this;

                return this._pushLeft(function () {
                    if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
                    _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
                    return true;
                });
            }
        }, {
            key: "pushRightBeforeFilled",
            value: function pushRightBeforeFilled() {
                var _this4 = this;

                return this._pushRight(function () {
                    if (_this4.block.isFixed || !_this4.block.value) return;
                    _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
                    if (_this4.offset !== _this4.block.value.length) return true;
                });
            }
        }, {
            key: "pushRightBeforeInput",
            value: function pushRightBeforeInput() {
                var _this5 = this;

                return this._pushRight(function () {
                    if (_this5.block.isFixed) return; // const o = this.offset;

                    _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
                    // aa|X
                    // aa<X|[]>X_    - this will not work
                    // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

                    return true;
                });
            }
        }, {
            key: "pushRightBeforeRequired",
            value: function pushRightBeforeRequired() {
                var _this6 = this;

                return this._pushRight(function () {
                    if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_

                    _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
                    return true;
                });
            }
        }]);

        return PatternCursor;
    }();

    /** Masking by RegExp */

    var MaskedRegExp = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedRegExp, _Masked);

        var _super = _createSuper(MaskedRegExp);

        function MaskedRegExp() {
            _classCallCheck(this, MaskedRegExp);

            return _super.apply(this, arguments);
        }

        _createClass(MaskedRegExp, [{
            key: "_update",
            value:
                /**
                 @override
                 @param {Object} opts
                 */
                function _update(opts) {
                    if (opts.mask) opts.validate = function (value) {
                        return value.search(opts.mask) >= 0;
                    };

                    _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
                }
        }]);

        return MaskedRegExp;
    }(Masked);
    IMask.MaskedRegExp = MaskedRegExp;

    var _excluded$2 = ["_blocks"];

    /**
     Pattern mask
     @param {Object} opts
     @param {Object} opts.blocks
     @param {Object} opts.definitions
     @param {string} opts.placeholderChar
     @param {boolean} opts.lazy
     */
    var MaskedPattern = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedPattern, _Masked);

        var _super = _createSuper(MaskedPattern);

        /** */

        /** */

        /** Single char for empty input */

        /** Show placeholder only when needed */
        function MaskedPattern() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, MaskedPattern);

            // TODO type $Shape<MaskedPatternOptions>={} does not work
            opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
            return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
        }
        /**
         @override
         @param {Object} opts
         */


        _createClass(MaskedPattern, [{
            key: "_update",
            value: function _update() {
                var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                opts.definitions = Object.assign({}, this.definitions, opts.definitions);

                _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

                this._rebuildMask();
            }
            /** */

        }, {
            key: "_rebuildMask",
            value: function _rebuildMask() {
                var _this = this;

                var defs = this.definitions;
                this._blocks = [];
                this._stops = [];
                this._maskedBlocks = {};
                var pattern = this.mask;
                if (!pattern || !defs) return;
                var unmaskingBlock = false;
                var optionalBlock = false;

                for (var i = 0; i < pattern.length; ++i) {
                    if (this.blocks) {
                        var _ret = function () {
                            var p = pattern.slice(i);
                            var bNames = Object.keys(_this.blocks).filter(function (bName) {
                                return p.indexOf(bName) === 0;
                            }); // order by key length

                            bNames.sort(function (a, b) {
                                return b.length - a.length;
                            }); // use block name with max length

                            var bName = bNames[0];

                            if (bName) {
                                // $FlowFixMe no ideas
                                var maskedBlock = createMask(Object.assign({
                                    parent: _this,
                                    lazy: _this.lazy,
                                    eager: _this.eager,
                                    placeholderChar: _this.placeholderChar,
                                    overwrite: _this.overwrite
                                }, _this.blocks[bName]));

                                if (maskedBlock) {
                                    _this._blocks.push(maskedBlock); // store block index


                                    if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                                    _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                                }

                                i += bName.length - 1;
                                return "continue";
                            }
                        }();

                        if (_ret === "continue") continue;
                    }

                    var char = pattern[i];
                    var isInput = (char in defs);

                    if (char === MaskedPattern.STOP_CHAR) {
                        this._stops.push(this._blocks.length);

                        continue;
                    }

                    if (char === '{' || char === '}') {
                        unmaskingBlock = !unmaskingBlock;
                        continue;
                    }

                    if (char === '[' || char === ']') {
                        optionalBlock = !optionalBlock;
                        continue;
                    }

                    if (char === MaskedPattern.ESCAPE_CHAR) {
                        ++i;
                        char = pattern[i];
                        if (!char) break;
                        isInput = false;
                    }

                    var def = isInput ? new PatternInputDefinition({
                        parent: this,
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        mask: defs[char],
                        isOptional: optionalBlock
                    }) : new PatternFixedDefinition({
                        char: char,
                        eager: this.eager,
                        isUnmasking: unmaskingBlock
                    });

                    this._blocks.push(def);
                }
            }
            /**
             @override
             */

        }, {
            key: "state",
            get: function get() {
                return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
                    _blocks: this._blocks.map(function (b) {
                        return b.state;
                    })
                });
            },
            set: function set(state) {
                var _blocks = state._blocks,
                    maskedState = _objectWithoutProperties(state, _excluded$2);

                this._blocks.forEach(function (b, bi) {
                    return b.state = _blocks[bi];
                });

                _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
            }
            /**
             @override
             */

        }, {
            key: "reset",
            value: function reset() {
                _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

                this._blocks.forEach(function (b) {
                    return b.reset();
                });
            }
            /**
             @override
             */

        }, {
            key: "isComplete",
            get: function get() {
                return this._blocks.every(function (b) {
                    return b.isComplete;
                });
            }
            /**
             @override
             */

        }, {
            key: "isFilled",
            get: function get() {
                return this._blocks.every(function (b) {
                    return b.isFilled;
                });
            }
        }, {
            key: "isFixed",
            get: function get() {
                return this._blocks.every(function (b) {
                    return b.isFixed;
                });
            }
        }, {
            key: "isOptional",
            get: function get() {
                return this._blocks.every(function (b) {
                    return b.isOptional;
                });
            }
            /**
             @override
             */

        }, {
            key: "doCommit",
            value: function doCommit() {
                this._blocks.forEach(function (b) {
                    return b.doCommit();
                });

                _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
            }
            /**
             @override
             */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this._blocks.reduce(function (str, b) {
                    return str += b.unmaskedValue;
                }, '');
            },
            set: function set(unmaskedValue) {
                _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
            }
            /**
             @override
             */

        }, {
            key: "value",
            get: function get() {
                // TODO return _value when not in change?
                return this._blocks.reduce(function (str, b) {
                    return str += b.value;
                }, '');
            },
            set: function set(value) {
                _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
            }
            /**
             @override
             */

        }, {
            key: "appendTail",
            value: function appendTail(tail) {
                return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
            }
            /**
             @override
             */

        }, {
            key: "_appendEager",
            value: function _appendEager() {
                var _this$_mapPosToBlock;

                var details = new ChangeDetails();
                var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
                if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

                if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

                for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
                    var d = this._blocks[bi]._appendEager();

                    if (!d.inserted) break;
                    details.aggregate(d);
                }

                return details;
            }
            /**
             @override
             */

        }, {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var blockIter = this._mapPosToBlock(this.value.length);

                var details = new ChangeDetails();
                if (!blockIter) return details;

                for (var bi = blockIter.index;; ++bi) {
                    var _flags$_beforeTailSta;

                    var _block = this._blocks[bi];
                    if (!_block) break;

                    var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
                        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi]
                    }));

                    var skip = blockDetails.skip;
                    details.aggregate(blockDetails);
                    if (skip || blockDetails.rawInserted) break; // go next char
                }

                return details;
            }
            /**
             @override
             */

        }, {
            key: "extractTail",
            value: function extractTail() {
                var _this2 = this;

                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var chunkTail = new ChunksTailDetails();
                if (fromPos === toPos) return chunkTail;

                this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
                    var blockChunk = b.extractTail(bFromPos, bToPos);
                    blockChunk.stop = _this2._findStopBefore(bi);
                    blockChunk.from = _this2._blockStartPos(bi);
                    if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
                    chunkTail.extend(blockChunk);
                });

                return chunkTail;
            }
            /**
             @override
             */

        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                if (fromPos === toPos) return '';
                var input = '';

                this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
                    input += b.extractInput(fromPos, toPos, flags);
                });

                return input;
            }
        }, {
            key: "_findStopBefore",
            value: function _findStopBefore(blockIndex) {
                var stopBefore;

                for (var si = 0; si < this._stops.length; ++si) {
                    var stop = this._stops[si];
                    if (stop <= blockIndex) stopBefore = stop;else break;
                }

                return stopBefore;
            }
            /** Appends placeholder depending on laziness */

        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder(toBlockIndex) {
                var _this3 = this;

                var details = new ChangeDetails();
                if (this.lazy && toBlockIndex == null) return details;

                var startBlockIter = this._mapPosToBlock(this.value.length);

                if (!startBlockIter) return details;
                var startBlockIndex = startBlockIter.index;
                var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

                this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
                    if (!b.lazy || toBlockIndex != null) {
                        // $FlowFixMe `_blocks` may not be present
                        var args = b._blocks != null ? [b._blocks.length] : [];

                        var bDetails = b._appendPlaceholder.apply(b, args);

                        _this3._value += bDetails.inserted;
                        details.aggregate(bDetails);
                    }
                });

                return details;
            }
            /** Finds block in pos */

        }, {
            key: "_mapPosToBlock",
            value: function _mapPosToBlock(pos) {
                var accVal = '';

                for (var bi = 0; bi < this._blocks.length; ++bi) {
                    var _block2 = this._blocks[bi];
                    var blockStartPos = accVal.length;
                    accVal += _block2.value;

                    if (pos <= accVal.length) {
                        return {
                            index: bi,
                            offset: pos - blockStartPos
                        };
                    }
                }
            }
            /** */

        }, {
            key: "_blockStartPos",
            value: function _blockStartPos(blockIndex) {
                return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
                    return pos += b.value.length;
                }, 0);
            }
            /** */

        }, {
            key: "_forEachBlocksInRange",
            value: function _forEachBlocksInRange(fromPos) {
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var fn = arguments.length > 2 ? arguments[2] : undefined;

                var fromBlockIter = this._mapPosToBlock(fromPos);

                if (fromBlockIter) {
                    var toBlockIter = this._mapPosToBlock(toPos); // process first block


                    var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
                    var fromBlockStartPos = fromBlockIter.offset;
                    var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
                    fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

                    if (toBlockIter && !isSameBlock) {
                        // process intermediate blocks
                        for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
                            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                        } // process last block


                        fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
                    }
                }
            }
            /**
             @override
             */

        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

                this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
                    removeDetails.aggregate(b.remove(bFromPos, bToPos));
                });

                return removeDetails;
            }
            /**
             @override
             */

        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
                if (!this._blocks.length) return 0;
                var cursor = new PatternCursor(this, cursorPos);

                if (direction === DIRECTION.NONE) {
                    // -------------------------------------------------
                    // NONE should only go out from fixed to the right!
                    // -------------------------------------------------
                    if (cursor.pushRightBeforeInput()) return cursor.pos;
                    cursor.popState();
                    if (cursor.pushLeftBeforeInput()) return cursor.pos;
                    return this.value.length;
                } // FORCE is only about a|* otherwise is 0


                if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
                    // try to break fast when *|a
                    if (direction === DIRECTION.LEFT) {
                        cursor.pushRightBeforeFilled();
                        if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                        cursor.popState();
                    } // forward flow


                    cursor.pushLeftBeforeInput();
                    cursor.pushLeftBeforeRequired();
                    cursor.pushLeftBeforeFilled(); // backward flow

                    if (direction === DIRECTION.LEFT) {
                        cursor.pushRightBeforeInput();
                        cursor.pushRightBeforeRequired();
                        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                        cursor.popState();
                        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                        cursor.popState();
                    }

                    if (cursor.ok) return cursor.pos;
                    if (direction === DIRECTION.FORCE_LEFT) return 0;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos; // cursor.popState();
                    // if (
                    //   cursor.pushRightBeforeInput() &&
                    //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
                    //   (!this.lazy || this.extractInput())
                    // ) return cursor.pos;

                    return 0;
                }

                if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
                    // forward flow
                    cursor.pushRightBeforeInput();
                    cursor.pushRightBeforeRequired();
                    if (cursor.pushRightBeforeFilled()) return cursor.pos;
                    if (direction === DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
                }

                return cursorPos;
            }
            /** Get block by name */

        }, {
            key: "maskedBlock",
            value: function maskedBlock(name) {
                return this.maskedBlocks(name)[0];
            }
            /** Get all blocks by name */

        }, {
            key: "maskedBlocks",
            value: function maskedBlocks(name) {
                var _this4 = this;

                var indices = this._maskedBlocks[name];
                if (!indices) return [];
                return indices.map(function (gi) {
                    return _this4._blocks[gi];
                });
            }
        }]);

        return MaskedPattern;
    }(Masked);
    MaskedPattern.DEFAULTS = {
        lazy: true,
        placeholderChar: '_'
    };
    MaskedPattern.STOP_CHAR = '`';
    MaskedPattern.ESCAPE_CHAR = '\\';
    MaskedPattern.InputDefinition = PatternInputDefinition;
    MaskedPattern.FixedDefinition = PatternFixedDefinition;
    IMask.MaskedPattern = MaskedPattern;

    /** Pattern which accepts ranges */

    var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
        _inherits(MaskedRange, _MaskedPattern);

        var _super = _createSuper(MaskedRange);

        function MaskedRange() {
            _classCallCheck(this, MaskedRange);

            return _super.apply(this, arguments);
        }

        _createClass(MaskedRange, [{
            key: "_matchFrom",
            get:
            /**
             Optionally sets max length of pattern.
             Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
             */

            /** Min bound */

            /** Max bound */

                /** */
                function get() {
                    return this.maxLength - String(this.from).length;
                }
            /**
             @override
             */

        }, {
            key: "_update",
            value: function _update(opts) {
                // TODO type
                opts = Object.assign({
                    to: this.to || 0,
                    from: this.from || 0,
                    maxLength: this.maxLength || 0
                }, opts);
                var maxLength = String(opts.to).length;
                if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
                opts.maxLength = maxLength;
                var fromStr = String(opts.from).padStart(maxLength, '0');
                var toStr = String(opts.to).padStart(maxLength, '0');
                var sameCharsCount = 0;

                while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
                    ++sameCharsCount;
                }

                opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

                _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
            }
            /**
             @override
             */

        }, {
            key: "isComplete",
            get: function get() {
                return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
            }
        }, {
            key: "boundaries",
            value: function boundaries(str) {
                var minstr = '';
                var maxstr = '';

                var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
                    _ref2 = _slicedToArray(_ref, 3),
                    placeholder = _ref2[1],
                    num = _ref2[2];

                if (num) {
                    minstr = '0'.repeat(placeholder.length) + num;
                    maxstr = '9'.repeat(placeholder.length) + num;
                }

                minstr = minstr.padEnd(this.maxLength, '0');
                maxstr = maxstr.padEnd(this.maxLength, '9');
                return [minstr, maxstr];
            } // TODO str is a single char everytime

            /**
             @override
             */

        }, {
            key: "doPrepare",
            value: function doPrepare(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var details;

                var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

                var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

                ch = _normalizePrepare2[0];
                details = _normalizePrepare2[1];
                if (!this.autofix || !ch) return ch;
                var fromStr = String(this.from).padStart(this.maxLength, '0');
                var toStr = String(this.to).padStart(this.maxLength, '0');
                var nextVal = this.value + ch;
                if (nextVal.length > this.maxLength) return '';

                var _this$boundaries = this.boundaries(nextVal),
                    _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
                    minstr = _this$boundaries2[0],
                    maxstr = _this$boundaries2[1];

                if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

                if (Number(minstr) > this.to) {
                    if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
                        return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
                    }

                    return toStr[nextVal.length - 1];
                }

                return ch;
            }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate() {
                var _get2;

                var str = this.value;
                var firstNonZero = str.search(/[^0]/);
                if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

                var _this$boundaries3 = this.boundaries(str),
                    _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
                    minstr = _this$boundaries4[0],
                    maxstr = _this$boundaries4[1];

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
            }
        }]);

        return MaskedRange;
    }(MaskedPattern);
    IMask.MaskedRange = MaskedRange;

    /** Date mask */

    var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
        _inherits(MaskedDate, _MaskedPattern);

        var _super = _createSuper(MaskedDate);

        /** Pattern mask for date according to {@link MaskedDate#format} */

        /** Start date */

        /** End date */

        /** */

        /**
         @param {Object} opts
         */
        function MaskedDate(opts) {
            _classCallCheck(this, MaskedDate);

            return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
        }
        /**
         @override
         */


        _createClass(MaskedDate, [{
            key: "_update",
            value: function _update(opts) {
                if (opts.mask === Date) delete opts.mask;
                if (opts.pattern) opts.mask = opts.pattern;
                var blocks = opts.blocks;
                opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

                if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
                if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

                if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
                    opts.blocks.m.from = opts.min.getMonth() + 1;
                    opts.blocks.m.to = opts.max.getMonth() + 1;

                    if (opts.blocks.m.from === opts.blocks.m.to) {
                        opts.blocks.d.from = opts.min.getDate();
                        opts.blocks.d.to = opts.max.getDate();
                    }
                }

                Object.assign(opts.blocks, this.blocks, blocks); // add autofix

                Object.keys(opts.blocks).forEach(function (bk) {
                    var b = opts.blocks[bk];
                    if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
                });

                _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
            }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate() {
                var _get2;

                var date = this.date;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
            }
            /** Checks if date is exists */

        }, {
            key: "isDateExist",
            value: function isDateExist(str) {
                return this.format(this.parse(str, this), this).indexOf(str) >= 0;
            }
            /** Parsed Date */

        }, {
            key: "date",
            get: function get() {
                return this.typedValue;
            },
            set: function set(date) {
                this.typedValue = date;
            }
            /**
             @override
             */

        }, {
            key: "typedValue",
            get: function get() {
                return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
            },
            set: function set(value) {
                _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
            }
            /**
             @override
             */

        }, {
            key: "maskEquals",
            value: function maskEquals(mask) {
                return mask === Date || _get(_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, mask);
            }
        }]);

        return MaskedDate;
    }(MaskedPattern);
    MaskedDate.DEFAULTS = {
        pattern: 'd{.}`m{.}`Y',
        format: function format(date) {
            if (!date) return '';
            var day = String(date.getDate()).padStart(2, '0');
            var month = String(date.getMonth() + 1).padStart(2, '0');
            var year = date.getFullYear();
            return [day, month, year].join('.');
        },
        parse: function parse(str) {
            var _str$split = str.split('.'),
                _str$split2 = _slicedToArray(_str$split, 3),
                day = _str$split2[0],
                month = _str$split2[1],
                year = _str$split2[2];

            return new Date(year, month - 1, day);
        }
    };

    MaskedDate.GET_DEFAULT_BLOCKS = function () {
        return {
            d: {
                mask: MaskedRange,
                from: 1,
                to: 31,
                maxLength: 2
            },
            m: {
                mask: MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2
            },
            Y: {
                mask: MaskedRange,
                from: 1900,
                to: 9999
            }
        };
    };

    IMask.MaskedDate = MaskedDate;

    /**
     Generic element API to use with mask
     @interface
     */
    var MaskElement = /*#__PURE__*/function () {
        function MaskElement() {
            _classCallCheck(this, MaskElement);
        }

        _createClass(MaskElement, [{
            key: "selectionStart",
            get:
            /** */

            /** */

            /** */

                /** Safely returns selection start */
                function get() {
                    var start;

                    try {
                        start = this._unsafeSelectionStart;
                    } catch (e) {}

                    return start != null ? start : this.value.length;
                }
            /** Safely returns selection end */

        }, {
            key: "selectionEnd",
            get: function get() {
                var end;

                try {
                    end = this._unsafeSelectionEnd;
                } catch (e) {}

                return end != null ? end : this.value.length;
            }
            /** Safely sets element selection */

        }, {
            key: "select",
            value: function select(start, end) {
                if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

                try {
                    this._unsafeSelect(start, end);
                } catch (e) {}
            }
            /** Should be overriden in subclasses */

        }, {
            key: "_unsafeSelect",
            value: function _unsafeSelect(start, end) {}
            /** Should be overriden in subclasses */

        }, {
            key: "isActive",
            get: function get() {
                return false;
            }
            /** Should be overriden in subclasses */

        }, {
            key: "bindEvents",
            value: function bindEvents(handlers) {}
            /** Should be overriden in subclasses */

        }, {
            key: "unbindEvents",
            value: function unbindEvents() {}
        }]);

        return MaskElement;
    }();
    IMask.MaskElement = MaskElement;

    /** Bridge between HTMLElement and {@link Masked} */

    var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
        _inherits(HTMLMaskElement, _MaskElement);

        var _super = _createSuper(HTMLMaskElement);

        /** Mapping between HTMLElement events and mask internal events */

        /** HTMLElement to use mask on */

        /**
         @param {HTMLInputElement|HTMLTextAreaElement} input
         */
        function HTMLMaskElement(input) {
            var _this;

            _classCallCheck(this, HTMLMaskElement);

            _this = _super.call(this);
            _this.input = input;
            _this._handlers = {};
            return _this;
        }
        /** */
        // $FlowFixMe https://github.com/facebook/flow/issues/2839


        _createClass(HTMLMaskElement, [{
            key: "rootElement",
            get: function get() {
                var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

                return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
            }
            /**
             Is element in focus
             @readonly
             */

        }, {
            key: "isActive",
            get: function get() {
                //$FlowFixMe
                return this.input === this.rootElement.activeElement;
            }
            /**
             Returns HTMLElement selection start
             @override
             */

        }, {
            key: "_unsafeSelectionStart",
            get: function get() {
                return this.input.selectionStart;
            }
            /**
             Returns HTMLElement selection end
             @override
             */

        }, {
            key: "_unsafeSelectionEnd",
            get: function get() {
                return this.input.selectionEnd;
            }
            /**
             Sets HTMLElement selection
             @override
             */

        }, {
            key: "_unsafeSelect",
            value: function _unsafeSelect(start, end) {
                this.input.setSelectionRange(start, end);
            }
            /**
             HTMLElement value
             @override
             */

        }, {
            key: "value",
            get: function get() {
                return this.input.value;
            },
            set: function set(value) {
                this.input.value = value;
            }
            /**
             Binds HTMLElement events to mask internal events
             @override
             */

        }, {
            key: "bindEvents",
            value: function bindEvents(handlers) {
                var _this2 = this;

                Object.keys(handlers).forEach(function (event) {
                    return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
                });
            }
            /**
             Unbinds HTMLElement events to mask internal events
             @override
             */

        }, {
            key: "unbindEvents",
            value: function unbindEvents() {
                var _this3 = this;

                Object.keys(this._handlers).forEach(function (event) {
                    return _this3._toggleEventHandler(event);
                });
            }
            /** */

        }, {
            key: "_toggleEventHandler",
            value: function _toggleEventHandler(event, handler) {
                if (this._handlers[event]) {
                    this.input.removeEventListener(event, this._handlers[event]);
                    delete this._handlers[event];
                }

                if (handler) {
                    this.input.addEventListener(event, handler);
                    this._handlers[event] = handler;
                }
            }
        }]);

        return HTMLMaskElement;
    }(MaskElement);
    HTMLMaskElement.EVENTS_MAP = {
        selectionChange: 'keydown',
        input: 'input',
        drop: 'drop',
        click: 'click',
        focus: 'focus',
        commit: 'blur'
    };
    IMask.HTMLMaskElement = HTMLMaskElement;

    var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
        _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

        var _super = _createSuper(HTMLContenteditableMaskElement);

        function HTMLContenteditableMaskElement() {
            _classCallCheck(this, HTMLContenteditableMaskElement);

            return _super.apply(this, arguments);
        }

        _createClass(HTMLContenteditableMaskElement, [{
            key: "_unsafeSelectionStart",
            get:
                /**
                 Returns HTMLElement selection start
                 @override
                 */
                function get() {
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();
                    var anchorOffset = selection && selection.anchorOffset;
                    var focusOffset = selection && selection.focusOffset;

                    if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
                        return anchorOffset;
                    }

                    return focusOffset;
                }
            /**
             Returns HTMLElement selection end
             @override
             */

        }, {
            key: "_unsafeSelectionEnd",
            get: function get() {
                var root = this.rootElement;
                var selection = root.getSelection && root.getSelection();
                var anchorOffset = selection && selection.anchorOffset;
                var focusOffset = selection && selection.focusOffset;

                if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
                    return anchorOffset;
                }

                return focusOffset;
            }
            /**
             Sets HTMLElement selection
             @override
             */

        }, {
            key: "_unsafeSelect",
            value: function _unsafeSelect(start, end) {
                if (!this.rootElement.createRange) return;
                var range = this.rootElement.createRange();
                range.setStart(this.input.firstChild || this.input, start);
                range.setEnd(this.input.lastChild || this.input, end);
                var root = this.rootElement;
                var selection = root.getSelection && root.getSelection();

                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
            /**
             HTMLElement value
             @override
             */

        }, {
            key: "value",
            get: function get() {
                // $FlowFixMe
                return this.input.textContent;
            },
            set: function set(value) {
                this.input.textContent = value;
            }
        }]);

        return HTMLContenteditableMaskElement;
    }(HTMLMaskElement);
    IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

    var _excluded$1 = ["mask"];
    /** Listens to element events and controls changes between element and {@link Masked} */

    var InputMask = /*#__PURE__*/function () {
        /**
         View element
         @readonly
         */

        /**
         Internal {@link Masked} model
         @readonly
         */

        /**
         @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
         @param {Object} opts
         */
        function InputMask(el, opts) {
            _classCallCheck(this, InputMask);

            this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
            this.masked = createMask(opts);
            this._listeners = {};
            this._value = '';
            this._unmaskedValue = '';
            this._saveSelection = this._saveSelection.bind(this);
            this._onInput = this._onInput.bind(this);
            this._onChange = this._onChange.bind(this);
            this._onDrop = this._onDrop.bind(this);
            this._onFocus = this._onFocus.bind(this);
            this._onClick = this._onClick.bind(this);
            this.alignCursor = this.alignCursor.bind(this);
            this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

            this._bindEvents(); // refresh


            this.updateValue();

            this._onChange();
        }
        /** Read or update mask */


        _createClass(InputMask, [{
            key: "mask",
            get: function get() {
                return this.masked.mask;
            },
            set: function set(mask) {
                if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

                if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
                    this.masked.updateOptions({
                        mask: mask
                    });
                    return;
                }

                var masked = createMask({
                    mask: mask
                });
                masked.unmaskedValue = this.masked.unmaskedValue;
                this.masked = masked;
            }
            /** Raw value */

        }, {
            key: "maskEquals",
            value: function maskEquals(mask) {
                var _this$masked;

                return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
            }
        }, {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(str) {
                this.masked.value = str;
                this.updateControl();
                this.alignCursor();
            }
            /** Unmasked value */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this._unmaskedValue;
            },
            set: function set(str) {
                this.masked.unmaskedValue = str;
                this.updateControl();
                this.alignCursor();
            }
            /** Typed unmasked value */

        }, {
            key: "typedValue",
            get: function get() {
                return this.masked.typedValue;
            },
            set: function set(val) {
                this.masked.typedValue = val;
                this.updateControl();
                this.alignCursor();
            }
            /**
             Starts listening to element events
             @protected
             */

        }, {
            key: "_bindEvents",
            value: function _bindEvents() {
                this.el.bindEvents({
                    selectionChange: this._saveSelection,
                    input: this._onInput,
                    drop: this._onDrop,
                    click: this._onClick,
                    focus: this._onFocus,
                    commit: this._onChange
                });
            }
            /**
             Stops listening to element events
             @protected
             */

        }, {
            key: "_unbindEvents",
            value: function _unbindEvents() {
                if (this.el) this.el.unbindEvents();
            }
            /**
             Fires custom event
             @protected
             */

        }, {
            key: "_fireEvent",
            value: function _fireEvent(ev) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                var listeners = this._listeners[ev];
                if (!listeners) return;
                listeners.forEach(function (l) {
                    return l.apply(void 0, args);
                });
            }
            /**
             Current selection start
             @readonly
             */

        }, {
            key: "selectionStart",
            get: function get() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
            }
            /** Current cursor position */

        }, {
            key: "cursorPos",
            get: function get() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
            },
            set: function set(pos) {
                if (!this.el || !this.el.isActive) return;
                this.el.select(pos, pos);

                this._saveSelection();
            }
            /**
             Stores current selection
             @protected
             */

        }, {
            key: "_saveSelection",
            value: function
                /* ev */
                _saveSelection() {
                if (this.value !== this.el.value) {
                    console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
                }

                this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos
                };
            }
            /** Syncronizes model value from view */

        }, {
            key: "updateValue",
            value: function updateValue() {
                this.masked.value = this.el.value;
                this._value = this.masked.value;
            }
            /** Syncronizes view from model value, fires change events */

        }, {
            key: "updateControl",
            value: function updateControl() {
                var newUnmaskedValue = this.masked.unmaskedValue;
                var newValue = this.masked.value;
                var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
                this._unmaskedValue = newUnmaskedValue;
                this._value = newValue;
                if (this.el.value !== newValue) this.el.value = newValue;
                if (isChanged) this._fireChangeEvents();
            }
            /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

        }, {
            key: "updateOptions",
            value: function updateOptions(opts) {
                var mask = opts.mask,
                    restOpts = _objectWithoutProperties(opts, _excluded$1);

                var updateMask = !this.maskEquals(mask);
                var updateOpts = !objectIncludes(this.masked, restOpts);
                if (updateMask) this.mask = mask;
                if (updateOpts) this.masked.updateOptions(restOpts);
                if (updateMask || updateOpts) this.updateControl();
            }
            /** Updates cursor */

        }, {
            key: "updateCursor",
            value: function updateCursor(cursorPos) {
                if (cursorPos == null) return;
                this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

                this._delayUpdateCursor(cursorPos);
            }
            /**
             Delays cursor update to support mobile browsers
             @private
             */

        }, {
            key: "_delayUpdateCursor",
            value: function _delayUpdateCursor(cursorPos) {
                var _this = this;

                this._abortUpdateCursor();

                this._changingCursorPos = cursorPos;
                this._cursorChanging = setTimeout(function () {
                    if (!_this.el) return; // if was destroyed

                    _this.cursorPos = _this._changingCursorPos;

                    _this._abortUpdateCursor();
                }, 10);
            }
            /**
             Fires custom events
             @protected
             */

        }, {
            key: "_fireChangeEvents",
            value: function _fireChangeEvents() {
                this._fireEvent('accept', this._inputEvent);

                if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
            }
            /**
             Aborts delayed cursor update
             @private
             */

        }, {
            key: "_abortUpdateCursor",
            value: function _abortUpdateCursor() {
                if (this._cursorChanging) {
                    clearTimeout(this._cursorChanging);
                    delete this._cursorChanging;
                }
            }
            /** Aligns cursor to nearest available position */

        }, {
            key: "alignCursor",
            value: function alignCursor() {
                this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
            }
            /** Aligns cursor only if selection is empty */

        }, {
            key: "alignCursorFriendly",
            value: function alignCursorFriendly() {
                if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

                this.alignCursor();
            }
            /** Adds listener on custom event */

        }, {
            key: "on",
            value: function on(ev, handler) {
                if (!this._listeners[ev]) this._listeners[ev] = [];

                this._listeners[ev].push(handler);

                return this;
            }
            /** Removes custom event listener */

        }, {
            key: "off",
            value: function off(ev, handler) {
                if (!this._listeners[ev]) return this;

                if (!handler) {
                    delete this._listeners[ev];
                    return this;
                }

                var hIndex = this._listeners[ev].indexOf(handler);

                if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
                return this;
            }
            /** Handles view input event */

        }, {
            key: "_onInput",
            value: function _onInput(e) {
                this._inputEvent = e;

                this._abortUpdateCursor(); // fix strange IE behavior


                if (!this._selection) return this.updateValue();
                var details = new ActionDetails( // new state
                    this.el.value, this.cursorPos, // old state
                    this.value, this._selection);
                var oldRawValue = this.masked.rawInputValue;
                var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
                // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

                var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
                var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
                if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
                this.updateControl();
                this.updateCursor(cursorPos);
                delete this._inputEvent;
            }
            /** Handles view change event and commits model value */

        }, {
            key: "_onChange",
            value: function _onChange() {
                if (this.value !== this.el.value) {
                    this.updateValue();
                }

                this.masked.doCommit();
                this.updateControl();

                this._saveSelection();
            }
            /** Handles view drop event, prevents by default */

        }, {
            key: "_onDrop",
            value: function _onDrop(ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            /** Restore last selection on focus */

        }, {
            key: "_onFocus",
            value: function _onFocus(ev) {
                this.alignCursorFriendly();
            }
            /** Restore last selection on focus */

        }, {
            key: "_onClick",
            value: function _onClick(ev) {
                this.alignCursorFriendly();
            }
            /** Unbind view events and removes element reference */

        }, {
            key: "destroy",
            value: function destroy() {
                this._unbindEvents(); // $FlowFixMe why not do so?


                this._listeners.length = 0; // $FlowFixMe

                delete this.el;
            }
        }]);

        return InputMask;
    }();
    IMask.InputMask = InputMask;

    /** Pattern which validates enum values */

    var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
        _inherits(MaskedEnum, _MaskedPattern);

        var _super = _createSuper(MaskedEnum);

        function MaskedEnum() {
            _classCallCheck(this, MaskedEnum);

            return _super.apply(this, arguments);
        }

        _createClass(MaskedEnum, [{
            key: "_update",
            value:
                /**
                 @override
                 @param {Object} opts
                 */
                function _update(opts) {
                    // TODO type
                    if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

                    _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
                }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate() {
                var _this = this,
                    _get2;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return this.enum.some(function (e) {
                    return e.indexOf(_this.unmaskedValue) >= 0;
                }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
            }
        }]);

        return MaskedEnum;
    }(MaskedPattern);
    IMask.MaskedEnum = MaskedEnum;

    /**
     Number mask
     @param {Object} opts
     @param {string} opts.radix - Single char
     @param {string} opts.thousandsSeparator - Single char
     @param {Array<string>} opts.mapToRadix - Array of single chars
     @param {number} opts.min
     @param {number} opts.max
     @param {number} opts.scale - Digits after point
     @param {boolean} opts.signed - Allow negative
     @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
     @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
     */
    var MaskedNumber = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedNumber, _Masked);

        var _super = _createSuper(MaskedNumber);

        /** Single char */

        /** Single char */

        /** Array of single chars */

        /** */

        /** */

        /** Digits after point */

        /** */

        /** Flag to remove leading and trailing zeros in the end of editing */

        /** Flag to pad trailing zeros after point in the end of editing */
        function MaskedNumber(opts) {
            _classCallCheck(this, MaskedNumber);

            return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
        }
        /**
         @override
         */


        _createClass(MaskedNumber, [{
            key: "_update",
            value: function _update(opts) {
                _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

                this._updateRegExps();
            }
            /** */

        }, {
            key: "_updateRegExps",
            value: function _updateRegExps() {
                // use different regexp to process user input (more strict, input suffix) and tail shifting
                var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
                var midInput = '(0|([1-9]+\\d*))?';
                var mid = '\\d*';
                var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
                this._numberRegExpInput = new RegExp(start + midInput + end);
                this._numberRegExp = new RegExp(start + mid + end);
                this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
                this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
            }
            /** */

        }, {
            key: "_removeThousandsSeparators",
            value: function _removeThousandsSeparators(value) {
                return value.replace(this._thousandsSeparatorRegExp, '');
            }
            /** */

        }, {
            key: "_insertThousandsSeparators",
            value: function _insertThousandsSeparators(value) {
                // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                var parts = value.split(this.radix);
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
                return parts.join(this.radix);
            }
            /**
             @override
             */

        }, {
            key: "doPrepare",
            value: function doPrepare(ch) {
                var _get2;

                ch = ch.replace(this._mapToRadixRegExp, this.radix);

                var noSepCh = this._removeThousandsSeparators(ch);

                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
                    _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
                    prepCh = _normalizePrepare2[0],
                    details = _normalizePrepare2[1];

                if (ch && !noSepCh) details.skip = true;
                return [prepCh, details];
            }
            /** */

        }, {
            key: "_separatorsCount",
            value: function _separatorsCount(to) {
                var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var count = 0;

                for (var pos = 0; pos < to; ++pos) {
                    if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
                        ++count;
                        if (extendOnSeparators) to += this.thousandsSeparator.length;
                    }
                }

                return count;
            }
            /** */

        }, {
            key: "_separatorsCountFromSlice",
            value: function _separatorsCountFromSlice() {
                var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
                return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
            }
            /**
             @override
             */

        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var flags = arguments.length > 2 ? arguments[2] : undefined;

                var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

                var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

                fromPos = _this$_adjustRangeWit2[0];
                toPos = _this$_adjustRangeWit2[1];
                return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
            }
            /**
             @override
             */

        }, {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
                var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

                var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

                this._value = this._removeThousandsSeparators(this.value);

                var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

                this._value = this._insertThousandsSeparators(this._value);
                var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

                var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

                appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
                appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
                return appendDetails;
            }
            /** */

        }, {
            key: "_findSeparatorAround",
            value: function _findSeparatorAround(pos) {
                if (this.thousandsSeparator) {
                    var searchFrom = pos - this.thousandsSeparator.length + 1;
                    var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
                    if (separatorPos <= pos) return separatorPos;
                }

                return -1;
            }
        }, {
            key: "_adjustRangeWithSeparators",
            value: function _adjustRangeWithSeparators(from, to) {
                var separatorAroundFromPos = this._findSeparatorAround(from);

                if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

                var separatorAroundToPos = this._findSeparatorAround(to);

                if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
                return [from, to];
            }
            /**
             @override
             */

        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

                var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

                fromPos = _this$_adjustRangeWit4[0];
                toPos = _this$_adjustRangeWit4[1];
                var valueBeforePos = this.value.slice(0, fromPos);
                var valueAfterPos = this.value.slice(toPos);

                var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

                this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

                var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

                return new ChangeDetails({
                    tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
                });
            }
            /**
             @override
             */

        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos, direction) {
                if (!this.thousandsSeparator) return cursorPos;

                switch (direction) {
                    case DIRECTION.NONE:
                    case DIRECTION.LEFT:
                    case DIRECTION.FORCE_LEFT:
                    {
                        var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

                        if (separatorAtLeftPos >= 0) {
                            var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

                            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                                return separatorAtLeftPos;
                            }
                        }

                        break;
                    }

                    case DIRECTION.RIGHT:
                    case DIRECTION.FORCE_RIGHT:
                    {
                        var separatorAtRightPos = this._findSeparatorAround(cursorPos);

                        if (separatorAtRightPos >= 0) {
                            return separatorAtRightPos + this.thousandsSeparator.length;
                        }
                    }
                }

                return cursorPos;
            }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate(flags) {
                var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

                var valid = regexp.test(this._removeThousandsSeparators(this.value));

                if (valid) {
                    // validate as number
                    var number = this.number;
                    valid = valid && !isNaN(number) && ( // check min bound for negative values
                        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
                        this.max == null || this.max <= 0 || this.number <= this.max);
                }

                return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
            }
            /**
             @override
             */

        }, {
            key: "doCommit",
            value: function doCommit() {
                if (this.value) {
                    var number = this.number;
                    var validnum = number; // check bounds

                    if (this.min != null) validnum = Math.max(validnum, this.min);
                    if (this.max != null) validnum = Math.min(validnum, this.max);
                    if (validnum !== number) this.unmaskedValue = String(validnum);
                    var formatted = this.value;
                    if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
                    if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
                    this._value = formatted;
                }

                _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
            }
            /** */

        }, {
            key: "_normalizeZeros",
            value: function _normalizeZeros(value) {
                var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


                parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
                    return sign + num;
                }); // add leading zero

                if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

                if (parts.length > 1) {
                    parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

                    if (!parts[1].length) parts.length = 1; // remove fractional
                }

                return this._insertThousandsSeparators(parts.join(this.radix));
            }
            /** */

        }, {
            key: "_padFractionalZeros",
            value: function _padFractionalZeros(value) {
                if (!value) return value;
                var parts = value.split(this.radix);
                if (parts.length < 2) parts.push('');
                parts[1] = parts[1].padEnd(this.scale, '0');
                return parts.join(this.radix);
            }
            /**
             @override
             */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
            },
            set: function set(unmaskedValue) {
                _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
            }
            /**
             @override
             */

        }, {
            key: "typedValue",
            get: function get() {
                return Number(this.unmaskedValue);
            },
            set: function set(n) {
                _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
            }
            /** Parsed Number */

        }, {
            key: "number",
            get: function get() {
                return this.typedValue;
            },
            set: function set(number) {
                this.typedValue = number;
            }
            /**
             Is negative allowed
             @readonly
             */

        }, {
            key: "allowNegative",
            get: function get() {
                return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
            }
        }]);

        return MaskedNumber;
    }(Masked);
    MaskedNumber.DEFAULTS = {
        radix: ',',
        thousandsSeparator: '',
        mapToRadix: ['.'],
        scale: 2,
        signed: false,
        normalizeZeros: true,
        padFractionalZeros: false
    };
    IMask.MaskedNumber = MaskedNumber;

    /** Masking by custom Function */

    var MaskedFunction = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedFunction, _Masked);

        var _super = _createSuper(MaskedFunction);

        function MaskedFunction() {
            _classCallCheck(this, MaskedFunction);

            return _super.apply(this, arguments);
        }

        _createClass(MaskedFunction, [{
            key: "_update",
            value:
                /**
                 @override
                 @param {Object} opts
                 */
                function _update(opts) {
                    if (opts.mask) opts.validate = opts.mask;

                    _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
                }
        }]);

        return MaskedFunction;
    }(Masked);
    IMask.MaskedFunction = MaskedFunction;

    var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

    /** Dynamic mask for choosing apropriate mask in run-time */
    var MaskedDynamic = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedDynamic, _Masked);

        var _super = _createSuper(MaskedDynamic);

        /** Currently chosen mask */

        /** Compliled {@link Masked} options */

        /** Chooses {@link Masked} depending on input value */

        /**
         @param {Object} opts
         */
        function MaskedDynamic(opts) {
            var _this;

            _classCallCheck(this, MaskedDynamic);

            _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
            _this.currentMask = null;
            return _this;
        }
        /**
         @override
         */


        _createClass(MaskedDynamic, [{
            key: "_update",
            value: function _update(opts) {
                _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

                if ('mask' in opts) {
                    // mask could be totally dynamic with only `dispatch` option
                    this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
                        return createMask(m);
                    }) : [];
                }
            }
            /**
             @override
             */

        }, {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var details = this._applyDispatch(ch, flags);

                if (this.currentMask) {
                    details.aggregate(this.currentMask._appendChar(ch, flags));
                }

                return details;
            }
        }, {
            key: "_applyDispatch",
            value: function _applyDispatch() {
                var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
                var inputValue = this.rawInputValue;
                var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
                    flags._beforeTailState._rawInputValue : inputValue;
                var tailValue = inputValue.slice(insertValue.length);
                var prevMask = this.currentMask;
                var details = new ChangeDetails();
                var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

                this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

                if (this.currentMask) {
                    if (this.currentMask !== prevMask) {
                        // if mask changed reapply input
                        this.currentMask.reset();

                        if (insertValue) {
                            // $FlowFixMe - it's ok, we don't change current mask above
                            var d = this.currentMask.append(insertValue, {
                                raw: true
                            });
                            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
                        }

                        if (tailValue) {
                            // $FlowFixMe - it's ok, we don't change current mask above
                            details.tailShift += this.currentMask.append(tailValue, {
                                raw: true,
                                tail: true
                            }).tailShift;
                        }
                    } else {
                        // Dispatch can do something bad with state, so
                        // restore prev mask state
                        this.currentMask.state = prevMaskState;
                    }
                }

                return details;
            }
        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                var details = this._applyDispatch.apply(this, arguments);

                if (this.currentMask) {
                    details.aggregate(this.currentMask._appendPlaceholder());
                }

                return details;
            }
            /**
             @override
             */

        }, {
            key: "_appendEager",
            value: function _appendEager() {
                var details = this._applyDispatch.apply(this, arguments);

                if (this.currentMask) {
                    details.aggregate(this.currentMask._appendEager());
                }

                return details;
            }
            /**
             @override
             */

        }, {
            key: "doDispatch",
            value: function doDispatch(appended) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.dispatch(appended, this, flags);
            }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate() {
                var _get2, _this$currentMask;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
            }
            /**
             @override
             */

        }, {
            key: "reset",
            value: function reset() {
                var _this$currentMask2;

                (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.reset();
                this.compiledMasks.forEach(function (m) {
                    return m.reset();
                });
            }
            /**
             @override
             */

        }, {
            key: "value",
            get: function get() {
                return this.currentMask ? this.currentMask.value : '';
            },
            set: function set(value) {
                _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
            }
            /**
             @override
             */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this.currentMask ? this.currentMask.unmaskedValue : '';
            },
            set: function set(unmaskedValue) {
                _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
            }
            /**
             @override
             */

        }, {
            key: "typedValue",
            get: function get() {
                return this.currentMask ? this.currentMask.typedValue : '';
            } // probably typedValue should not be used with dynamic
            ,
            set: function set(value) {
                var unmaskedValue = String(value); // double check it

                if (this.currentMask) {
                    this.currentMask.typedValue = value;
                    unmaskedValue = this.currentMask.unmaskedValue;
                }

                this.unmaskedValue = unmaskedValue;
            }
            /**
             @override
             */

        }, {
            key: "isComplete",
            get: function get() {
                var _this$currentMask3;

                return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete);
            }
            /**
             @override
             */

        }, {
            key: "isFilled",
            get: function get() {
                var _this$currentMask4;

                return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled);
            }
            /**
             @override
             */

        }, {
            key: "remove",
            value: function remove() {
                var details = new ChangeDetails();

                if (this.currentMask) {
                    var _this$currentMask5;

                    details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)) // update with dispatch
                    .aggregate(this._applyDispatch());
                }

                return details;
            }
            /**
             @override
             */

        }, {
            key: "state",
            get: function get() {
                return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
                    _rawInputValue: this.rawInputValue,
                    compiledMasks: this.compiledMasks.map(function (m) {
                        return m.state;
                    }),
                    currentMaskRef: this.currentMask,
                    currentMask: this.currentMask && this.currentMask.state
                });
            },
            set: function set(state) {
                var compiledMasks = state.compiledMasks,
                    currentMaskRef = state.currentMaskRef,
                    currentMask = state.currentMask,
                    maskedState = _objectWithoutProperties(state, _excluded);

                this.compiledMasks.forEach(function (m, mi) {
                    return m.state = compiledMasks[mi];
                });

                if (currentMaskRef != null) {
                    this.currentMask = currentMaskRef;
                    this.currentMask.state = currentMask;
                }

                _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
            }
            /**
             @override
             */

        }, {
            key: "extractInput",
            value: function extractInput() {
                var _this$currentMask6;

                return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
            }
            /**
             @override
             */

        }, {
            key: "extractTail",
            value: function extractTail() {
                var _this$currentMask7, _get3;

                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
            }
            /**
             @override
             */

        }, {
            key: "doCommit",
            value: function doCommit() {
                if (this.currentMask) this.currentMask.doCommit();

                _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
            }
            /**
             @override
             */

        }, {
            key: "nearestInputPos",
            value: function nearestInputPos() {
                var _this$currentMask8, _get4;

                for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    args[_key3] = arguments[_key3];
                }

                return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
            }
        }, {
            key: "overwrite",
            get: function get() {
                return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
            },
            set: function set(overwrite) {
                console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
            }
        }, {
            key: "eager",
            get: function get() {
                return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), "eager", this);
            },
            set: function set(eager) {
                console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
            }
            /**
             @override
             */

        }, {
            key: "maskEquals",
            value: function maskEquals(mask) {
                return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
                    var _mask$mi;

                    return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
                });
            }
        }]);

        return MaskedDynamic;
    }(Masked);
    MaskedDynamic.DEFAULTS = {
        dispatch: function dispatch(appended, masked, flags) {
            if (!masked.compiledMasks.length) return;
            var inputValue = masked.rawInputValue; // simulate input

            var inputs = masked.compiledMasks.map(function (m, index) {
                m.reset();
                m.append(inputValue, {
                    raw: true
                });
                m.append(appended, flags);
                var weight = m.rawInputValue.length;
                return {
                    weight: weight,
                    index: index
                };
            }); // pop masks with longer values first

            inputs.sort(function (i1, i2) {
                return i2.weight - i1.weight;
            });
            return masked.compiledMasks[inputs[0].index];
        }
    };
    IMask.MaskedDynamic = MaskedDynamic;

    /** Mask pipe source and destination types */

    var PIPE_TYPE = {
        MASKED: 'value',
        UNMASKED: 'unmaskedValue',
        TYPED: 'typedValue'
    };
    /** Creates new pipe function depending on mask type, source and destination options */

    function createPipe(mask) {
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
        var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
        var masked = createMask(mask);
        return function (value) {
            return masked.runIsolated(function (m) {
                m[from] = value;
                return m[to];
            });
        };
    }
    /** Pipes value through mask depending on mask type, source and destination options */

    function pipe(value) {
        for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            pipeArgs[_key - 1] = arguments[_key];
        }

        return createPipe.apply(void 0, pipeArgs)(value);
    }
    IMask.PIPE_TYPE = PIPE_TYPE;
    IMask.createPipe = createPipe;
    IMask.pipe = pipe;

    try {
        globalThis.IMask = IMask;
    } catch (e) {}

    exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
    exports.HTMLMaskElement = HTMLMaskElement;
    exports.InputMask = InputMask;
    exports.MaskElement = MaskElement;
    exports.Masked = Masked;
    exports.MaskedDate = MaskedDate;
    exports.MaskedDynamic = MaskedDynamic;
    exports.MaskedEnum = MaskedEnum;
    exports.MaskedFunction = MaskedFunction;
    exports.MaskedNumber = MaskedNumber;
    exports.MaskedPattern = MaskedPattern;
    exports.MaskedRange = MaskedRange;
    exports.MaskedRegExp = MaskedRegExp;
    exports.PIPE_TYPE = PIPE_TYPE;
    exports.createMask = createMask;
    exports.createPipe = createPipe;
    exports["default"] = IMask;
    exports.pipe = pipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=imask.js.map

document.addEventListener("DOMContentLoaded", () => {
    // !-----------------------------------------------------------------!
    // Открытие менюшки
    function showMenu() {
        if (window.innerWidth <= 768) {
            const btn = document.querySelector(".burger_js"),
                menu = document.querySelector(".header__links_js"),
                links = menu.querySelectorAll("a");
            btn.addEventListener("click", (e) => {
                menu.classList.toggle("-active");
            });

            // скрыть меню после нажатия на ссылку
            links.forEach(elem => {
                elem.addEventListener("click", () => {
                    if (!elem.closest(".header__links_first_submenu")) {
                        menu.classList.toggle("-active");
                    }

                });
            });
        }

    }

    showMenu();

    // Динамическое кол-во столбцов у элементов меню (как для 2 так и для 3 уровня)
    function adjustColumns(selector) {
        if (window.innerWidth >= 768) {
            let container = document.querySelector(selector);
            if (container === null || container === undefined) {
                return
            }
            let containerHeight = container.clientHeight;
            let menuList = container.querySelectorAll(selector + ' > li'),
                styleForListElem = getComputedStyle(menuList[0]), // кроме высоты блока узнаю его отступы и потом все сложу
                listElemHeight = menuList[0].offsetHeight + parseInt(styleForListElem.marginTop) + parseInt(styleForListElem.marginBottom);
            let countElemInColumn = Math.round(containerHeight / listElemHeight); // сколько влезет в 1 ряд
            // сколько должно быть столбиков
            container.style.gridTemplateColumns = `repeat(${Math.ceil(menuList.length / countElemInColumn)}, 1fr)`;

            //     Для меню 3-го уровня кол-во столбиков будет по 6 шт
            let submenu = container.querySelectorAll(".header__links_second_submenu");
            submenu.forEach(elem => {
                if (elem !== null) {
                    let submenuElements = elem.querySelectorAll("li");
                    elem.style.gridTemplateColumns = `repeat(${Math.ceil(submenuElements.length / 6)}, 1fr)`;
                }
            })
        }
    }

    adjustColumns(".header__links_first_submenu");
    adjustColumns(".header__links_second_submenu");

    window.addEventListener('resize', () => adjustColumns(".header__links_first_submenu"));
    window.addEventListener("load", () => adjustColumns(".header__links_first_submenu"));

    //    Слайдеры
    try {
        const otzivy__slider = document.querySelectorAll(".otzyvy__slider_js");
        otzivy__slider.forEach(elem => {
            new Carousel(elem)
        });

        const komanda__slider = new Carousel(document.querySelector(".komanda__slider_js"));


    } catch (e) {

    }



    //    Выключить автофокус у фенсибокс
    Fancybox.bind("[data-fancybox]", {
        autoFocus: false,
        click: false,
        dragToClose: false
    });
    // !-----------------------------------------------------------------!

    //    QUIZ
    class Quiz {
        _quiz;
        _quizWrap;
        _radInp;
        // _btnBack;
        _iKey;
        _area;
        _btnArea;

        constructor(quizID) {
            this._quiz = document.getElementById(quizID);
            if (this._quiz === null) {
                return;
            }
            this._quizWrap = this._quiz.querySelectorAll(".quiz__wrap_js");
            this._area = this._quiz.querySelector(".area_js");
            this._btnArea = this._quiz.querySelector(".area_js_btn");
            this._radInp = this._quiz.querySelectorAll("input[type=radio]");
            // this._btnBack = this._quiz.querySelectorAll(".quiz__back_js");
            this._iKey = 0;
            this.addListener();
            // this.addListenerToBtnBack();
        }

        addListener() {
            this._radInp.forEach(elem => {
                elem.addEventListener("click", (e) => {
                    console.log(e.target);
                    this.next();
                });
            });
            this.check_correct();
        }

        check_correct() {
            this._btnArea.addEventListener("click", () => {
                let area_error = this._quiz.querySelector(".area_error");
                if (this._area.value.trim() === "" || this._area.value.trim() === " " || parseInt(this._area.value.trim()) <= 0) {
                    area_error.style.display = "block";
                } else {
                    this.next();
                }
            });
        }

        /*addListenerToBtnBack(){
            this._btnBack.forEach(elem => {
                elem.addEventListener("click", () => {
                    this.prev();
                });
            });
        }*/
        next() {
            this._quizWrap[this._iKey].style.display = "none";
            this._quizWrap[this._iKey + 1].style.display = "block";
            this._iKey++;
        }

        prev() {
            this._quizWrap[this._iKey].style.display = "none";
            this._quizWrap[this._iKey - 1].style.display = "block";
            this._iKey--;
            this._radInp.forEach(elem => {
                if (elem.dataset.name === `quiz__rad_${this._iKey}`) {
                    elem.checked = false;
                }
            });
        }
    }

    let quiz1 = new Quiz("quiz-1");
    // !-----------------------------------------------------------------!


    //    Отправка на сервер
    //Поиск моих форм по странице
    function findMyForms() {
        let forms = document.querySelectorAll(".my-forms");
        forms.forEach(form => {
            // Для проверки данных в переменно $_POST
            // form.method = "POST";
            // form.action = "/fn";
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                form.querySelector("button").disabled = true; // отключил кнопку
                form.querySelector("button").style.opacity = "0.6";
                req(e, form);
            });
        });
    }

    findMyForms();

    //Получаем ответ от сервера
    function req(e, actionElem) {
        let formData = new FormData(actionElem);
        /*for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`); // проверка того какие данные в форме
        }*/
        //Проверка ЕСТЬ ЛИ ФАЙЛ
        if (formData.has("userfile")) {
            // проверка пустой ли файл
            if (formData.get("userfile").name !== "" || formData.get("userfile").type !== "application/octet-stream") {
                //Проверка на тип файла. Проходит по перечню и выдает false если найдет совпадение
                if (formData.get("userfile").type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
                    formData.get("userfile").type !== "application/msword" &&
                    formData.get("userfile").type !== "application/pdf" &&
                    formData.get("userfile").type !== "image/jpeg" &&
                    formData.get("userfile").type !== "image/png") {
                    return showPopup("format");
                    //Проверка на размер файла (до 10 Мб)10485760
                } else if (formData.get("userfile").size > 10485760) {
                    return showPopup("bigsize");
                }
                //Если файла не загрузили то удаляем это поле
            } else {
                formData.delete("userfile");
            }
        }
        //Проверка МАСКИ ТЕЛЕФОНА +7(xxx) ......
        if (
            formData.get("phone").length !== 17 ||
            formData.get("phone")[0] !== "+" ||
            formData.get("phone")[1] !== "7" ||
            formData.get("phone")[2] !== "(" ||
            formData.get("phone")[3] === "8" ||
            formData.get("phone")[6] !== ")" ||
            formData.get("phone")[16] === "_"
        ) {
            return showPopup("wrong", actionElem);
        }
        //    ДОБАВИТЬ ДАННЫЕ ИЗ ПСЕВДОФИЛЬТРА В ФОРМУ
        if (actionElem.classList.contains("psevdo_form_js")) {
            let data_link = data_filter.querySelectorAll(".filter_select_js > a");
            data_link.forEach((elem, i) => {
                formData.append(desc_filter[i], elem.textContent);
            });
        }
        // formData.delete("politica");
        getData("/fn", formData)
            .then(data => showPopup(data, actionElem));
    }

    // Запрос к серверу
    async function getData(url, data) {
        const res = await fetch(`${url}`, {
            method: "POST",
            body: data
        });
        if (!res.ok) {
            console.log("Error: " + res.status);
        }
        return await res.text();
    }

    //Всплывашка с подтверждением / отказом
    function showPopup(data, form) {
        let div = document.createElement("div"),
            p = document.createElement("p"),
            span = document.createElement("span"),
            closeBtn = document.createElement("b");
        //close btn
        closeBtn.addEventListener("click", () => {
            div.remove();
        });
        //Check server - response
        if (data === "success") {
            // p.innerHTML = "Спасибо за заявку!";
            // span.innerHTML = "Мы свяжемся с вами в самое ближайшее время";
            // div.classList.remove("my-popup-error");
            // div.classList.add("my-popup-done");
            // //  Отчистим форму
            // clearMyForm(form);
            document.location.href = "/thanks";
            return;
        } else if (data === "wrong") {
            p.innerHTML = "Неверно ввели номер";
            span.innerHTML = "Пожалуйста, проверьте верно ли вы ввели номер. Номер должен начинаться с +7(ххх) и иметь длинну 11 цифр";
            div.classList.remove("my-popup-done");
            div.classList.add("my-popup-error");
            form.querySelector("button").disabled = false;
            form.querySelector("button").style.opacity = "1";
        } else if (data === "bigsize") {
            p.innerHTML = "Ошибка";
            span.innerHTML = "Простите, но размер вашего файла не должен быть больше 10 Мб";
            div.classList.remove("my-popup-done");
            div.classList.add("my-popup-error");
        } else if (data === "format") {
            p.innerHTML = "Неверный формат";
            span.innerHTML = "Формат вашего файла должен быть: .doc, .docx, .pdf, .jpeg, .jpg, .png";
            div.classList.remove("my-popup-done");
            div.classList.add("my-popup-error");
            form.querySelector("button").disabled = false;
            form.querySelector("button").style.opacity = "1";
        } else {
            p.innerHTML = "Что то пошло не так";
            span.innerHTML = "Пожалуйста, повторите еще, если ошибка не исчезнет дайте нам знать";
            div.classList.add("my-popup-error");
            form.querySelector("button").disabled = false;
            form.querySelector("button").style.opacity = "1";
        }
        //general things for pop-up
        div.classList.add("show-my-wrapper");
        closeBtn.append(document.createElement("i"));
        div.append(p, span, closeBtn);
        document.body.appendChild(div);
    }

    // Добавить маски на телефоны
    function addMask() {
        let phones = document.querySelectorAll("input[name=phone]");
        let options = {
            mask: "+{7}(000) 000 00 00",
            lazy: false
        };
        phones.forEach(elem => {
            IMask(elem, options);
        });
    }

    addMask();

    // Ленивая загрузка фото
    /*! lozad.js - v1.14.0 - 2019-10-31
    * https://github.com/ApoorvSaxena/lozad.js
    * Copyright (c) 2019 Apoorv Saxena; Licensed MIT */


    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
            typeof define === 'function' && define.amd ? define(factory) :
                (global.lozad = factory());
    }(this, (function () {
        'use strict';

        /**
         * Detect IE browser
         * @const {boolean}
         * @private
         */
        var isIE = typeof document !== 'undefined' && document.documentMode;

        var defaultConfig = {
            rootMargin: '0px',
            threshold: 0,
            load: function load(element) {
                if (element.nodeName.toLowerCase() === 'picture') {
                    var img = document.createElement('img');
                    if (isIE && element.getAttribute('data-iesrc')) {
                        img.src = element.getAttribute('data-iesrc');
                    }

                    if (element.getAttribute('data-alt')) {
                        img.alt = element.getAttribute('data-alt');
                    }

                    element.append(img);
                }

                if (element.nodeName.toLowerCase() === 'video' && !element.getAttribute('data-src')) {
                    if (element.children) {
                        var childs = element.children;
                        var childSrc = void 0;
                        for (var i = 0; i <= childs.length - 1; i++) {
                            childSrc = childs[i].getAttribute('data-src');
                            if (childSrc) {
                                childs[i].src = childSrc;
                            }
                        }

                        element.load();
                    }
                }

                if (element.getAttribute('data-poster')) {
                    element.poster = element.getAttribute('data-poster');
                }

                if (element.getAttribute('data-src')) {
                    element.src = element.getAttribute('data-src');
                }

                if (element.getAttribute('data-srcset')) {
                    element.setAttribute('srcset', element.getAttribute('data-srcset'));
                }

                if (element.getAttribute('data-background-image')) {
                    element.style.backgroundImage = 'url(\'' + element.getAttribute('data-background-image').split(',').join('\'),url(\'') + '\')';
                } else if (element.getAttribute('data-background-image-set')) {
                    var imageSetLinks = element.getAttribute('data-background-image-set').split(',');
                    var firstUrlLink = imageSetLinks[0].substr(0, imageSetLinks[0].indexOf(' ')) || imageSetLinks[0]; // Substring before ... 1x
                    firstUrlLink = firstUrlLink.indexOf('url(') === -1 ? 'url(' + firstUrlLink + ')' : firstUrlLink;
                    if (imageSetLinks.length === 1) {
                        element.style.backgroundImage = firstUrlLink;
                    } else {
                        element.setAttribute('style', (element.getAttribute('style') || '') + ('background-image: ' + firstUrlLink + '; background-image: -webkit-image-set(' + imageSetLinks + '); background-image: image-set(' + imageSetLinks + ')'));
                    }
                }

                if (element.getAttribute('data-toggle-class')) {
                    element.classList.toggle(element.getAttribute('data-toggle-class'));
                }
            },
            loaded: function loaded() {
            }
        };

        function markAsLoaded(element) {
            element.setAttribute('data-loaded', true);
        }

        var isLoaded = function isLoaded(element) {
            return element.getAttribute('data-loaded') === 'true';
        };

        var onIntersection = function onIntersection(load, loaded) {
            return function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.intersectionRatio > 0 || entry.isIntersecting) {
                        observer.unobserve(entry.target);

                        if (!isLoaded(entry.target)) {
                            load(entry.target);
                            markAsLoaded(entry.target);
                            loaded(entry.target);
                        }
                    }
                });
            };
        };

        var getElements = function getElements(selector) {
            var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

            if (selector instanceof Element) {
                return [selector];
            }

            if (selector instanceof NodeList) {
                return selector;
            }

            return root.querySelectorAll(selector);
        };

        function lozad() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.lozad';
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var _Object$assign = Object.assign({}, defaultConfig, options),
                root = _Object$assign.root,
                rootMargin = _Object$assign.rootMargin,
                threshold = _Object$assign.threshold,
                load = _Object$assign.load,
                loaded = _Object$assign.loaded;

            var observer = void 0;

            if (typeof window !== 'undefined' && window.IntersectionObserver) {
                observer = new IntersectionObserver(onIntersection(load, loaded), {
                    root: root,
                    rootMargin: rootMargin,
                    threshold: threshold
                });
            }

            return {
                observe: function observe() {
                    var elements = getElements(selector, root);

                    for (var i = 0; i < elements.length; i++) {
                        if (isLoaded(elements[i])) {
                            continue;
                        }

                        if (observer) {
                            observer.observe(elements[i]);
                            continue;
                        }

                        load(elements[i]);
                        markAsLoaded(elements[i]);
                        loaded(elements[i]);
                    }
                },
                triggerLoad: function triggerLoad(element) {
                    if (isLoaded(element)) {
                        return;
                    }

                    load(element);
                    markAsLoaded(element);
                    loaded(element);
                },

                observer: observer
            };
        }

        return lozad;

    })));

    lozad('.lazy').observe();


    // -------------- preventDefault --------------------
    function removeLink() {
        try {
            let a_arr = document.querySelectorAll(".remove_link");
            a_arr.forEach(elem => {
                elem.addEventListener("click", (e) => {
                    e.preventDefault();
                });
            });
        } catch (e) {
            console.log("Нет ссылок для удаления")
        }
    }

    removeLink();
    // -------------- preventDefault END --------------------


    // Показать уведомление что товар добавили
    function showNotification(where) {
        let notify = document.querySelector(".notification_js");
        if (where === "akcii") {
            notify.textContent = "Тут пусто! Ищите дальше!";
            notify.style.display = "block";
            setTimeout(() => {
                notify.style.display = "none";
            }, 1300)
        }
    }


    // АЛГОРИТМ ДЛЯ АКЦИИ
    function randomAkcii() {
        try {
            let elemetns = document.querySelectorAll(".akcii_elemts_js > a");
            let rand = Math.floor(Math.random() * elemetns.length - 1);
            // let rand = 1

            // Создал 10 победных ссылок
            for (let i = 0; i < 10; i++) {
                // добавляем всплывашку
                elemetns[rand].setAttribute('data-fancybox', '');
                elemetns[rand].setAttribute('data-src', '#skidka');
                rand = Math.floor(Math.random() * elemetns.length - 1);
            }

            elemetns.forEach((elem, i) => {
                if (elem.dataset.src === undefined) {
                    // Если не попали, то делаем мини всплывашку с боку, чтобы искали еще
                    elem.addEventListener("click", (e) => {
                        e.preventDefault();
                        showNotification('akcii')
                    })
                }
            })
        } catch (e) {
            console.log("Акции: " + e)
        }
    }

    randomAkcii();

    // КОНЕЦ ЛОГИКИ КОРЗИНЫ И ТД


//    Убрать лишний текст из форм
    function addPoliticaText() {
        try {
            let tags = document.querySelectorAll(".politica_js");
            tags.forEach(elem => {
                elem.innerHTML = `Нажимая на кнопку, Вы даете согласие на обработку персональных данных в соответствии <a href="./privacy.docx">с&nbsp;политикой конфиденциальности`
            })
        } catch (e) {
            console.log("Нет текста из форм")
        }
    }

    addPoliticaText();

//  Нормальный скрол до элементов
    function fixScrollToAnchor() {
        // Получите высоту вашей шапки
        let headerHeight = document.querySelector('#header').offsetHeight;

        // Обработчик события для якорных ссылок
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (!anchor.closest(".akcii_elemts_js")
                && !anchor.closest(".table")
                && !anchor.closest(".header__links_submenu_js")
                && !anchor.closest(".header__icons")
                && !anchor.closest(".felial__text")
                && !anchor.closest(".product_js")
            ) {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();

                    // Получите ID элемента, к которому нужно прокрутить страницу
                    const targetId = anchor.getAttribute('href').substring(1);

                    // Найдите целевой элемент
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        // Вычислите позицию для прокрутки с учетом высоты шапки
                        const scrollToPosition = targetElement.offsetTop - headerHeight;

                        // Используйте метод scrollTop для прокрутки страницы с плавной анимацией
                        window.scrollTo({
                            top: scrollToPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            }

        });
    }
    fixScrollToAnchor();

    // Скрыть шапку при скроле
   /* function hideHeader() {
        if (window.innerWidth > 768) {
            let lastScrollTop = 0;
            let header = document.querySelector("#header");
            window.addEventListener("scroll", function () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (scrollTop > lastScrollTop) {
                    // Скролл вниз
                    header.classList.add("scroll");
                } else {
                    // Скролл вверх
                    header.classList.remove("scroll");
                }

                lastScrollTop = scrollTop;
            });
        }
    }
    hideHeader();*/

    // Анимация элементов
    function myAnimate() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-delay') || '0.3';
                    entry.target.style.setProperty('--delay', `${delay}s`);
                    entry.target.classList.add("visible");
                }
            });
        }, {threshold: [0.1]});

        document.querySelectorAll(".hidden").forEach((element) => {
            observer.observe(element);
        });

    }

    myAnimate();

    // Фильтрация услуг
    function myFilter() {
        const searchInput = document.querySelector('.search_input_js');
        const suggestions = document.getElementById('suggestions_js');
        const priceFilter = document.getElementById('price_filter_js');
        const products = document.querySelectorAll('.product_js');
        const loadButton = document.getElementById('load_button_js');
        const parent = document.querySelector('.product_list_js');
        const form = document.querySelector('.search_form_js');
        let visibleCount = 6, count = 0, parentHeight = 0;

        // Функция для отображения подсказок и фильтрации товаров при вводе
        searchInput.addEventListener('input', () => {
            filterProducts();
            filterSuggestions();
        });

        // Функция для фильтрации по цене и популярности
        priceFilter.addEventListener('change', () => {
            filterProducts();
        });

        // Обработчик события click на документе для скрытия списка подсказок
        document.addEventListener('click', (event) => {
            if (!suggestions.contains(event.target) && event.target !== searchInput) {
                suggestions.style.display = 'none';
            } else {
                suggestions.style.display = 'block';
            }
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            filterProducts();
        });


        // Показ шести элементов и дальнейшее открытие элементов
        loadButton.addEventListener('click', () => {
            visibleCount += 6;
            // Логика для скрытия списка
            if (loadButton.dataset.event === "hide") {
                loadButton.dataset.event = "go";
                loadButton.textContent = "Показать еще ↓";
                // чтобы экран пользователь оставался на том же месте где и был
                parentHeight = parent.getBoundingClientRect().height - (products[0].getBoundingClientRect().height * 2);
                window.scrollBy(0, -parentHeight);
                // скрою элменты (все кроме 6)
                visibleCount = 6;
            }
            btnTextSwitch();
            filterProducts()
        });

        // скрою кнопку если элементов ровно visibleCount
        if (products.length === visibleCount) {
            loadButton.classList.add("-hide");
        }


        function btnTextSwitch() {
            // Если товаров открыто больше чем есть всего
            if (visibleCount >= products.length) {
                loadButton.dataset.event = "hide";
                loadButton.textContent = "Скрыть";
            }
        }


        // функция для отображения подсказок
        function filterSuggestions() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            // Отображаю только те подсказки, которые подходят по фразе
            suggestions.querySelectorAll('.suggestions_elem').forEach((elem) => {
                const elemName = elem.textContent.toLowerCase();
                const matchesSearch = elemName.includes(searchTerm);

                if (matchesSearch) {
                    elem.style.display = 'block';
                } else {
                    elem.style.display = 'none';
                }
            });
        }

        // при нажатии на подсказку поменяю значение импута и вызову фильтрацию
        function choiceSuggestion() {
            suggestions.querySelectorAll('.suggestions_elem').forEach((elem) => {
                elem.addEventListener("click", () => {
                    searchInput.value = elem.textContent;
                    filterProducts();
                })
            });
        }

        choiceSuggestion();


        // Функция для фильтрации товаров
        function filterProducts() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const selectedValue = priceFilter.value;
            count = 0; // Обновляю счетчик

            // Возьмем все товары и проведем фильтрацию по их имени
            products.forEach((product) => {
                const productName = product.getAttribute('data-name').toLowerCase();
                const matchesSearch = productName.includes(searchTerm);

                if (matchesSearch && count < visibleCount) {
                    product.style.display = 'flex';
                    count++; // Отображаю по 6 элементов
                } else {
                    product.style.display = 'none';
                }
            });

            if (selectedValue !== 'default') {
                const sortedProducts = [...products].sort((a, b) => {
                    const priceA = parseInt(a.getAttribute('data-price'));
                    const priceB = parseInt(b.getAttribute('data-price'));

                    if (selectedValue === 'low-to-high') {
                        return priceA - priceB;
                    } else if (selectedValue === 'high-to-low') {
                        return priceB - priceA;
                    }
                });

                sortedProducts.forEach((product) => {
                    document.querySelector('.product_list_js').appendChild(product);
                });
            }
        }

        filterProducts()
    }

    myFilter();

    // автоматическая высота заголовков у карточек
    function alignCardTitles() {
        if (window.innerWidth >= 768) {
            const cards = document.querySelectorAll('.product_js');
            let maxTitleHeight = 0;
            let rowStartIndex = 0;
            let parent = document.querySelector(".product_list_js"); // обертка где лежат элементы
            let count; // кол-во эл-тов в ряду

            count = Math.floor(parent.getBoundingClientRect().width / cards[0]);

            for (let i = 0; i < cards.length; i++) {
                const title = cards[i].querySelector('.products__link');
                maxTitleHeight = Math.max(maxTitleHeight, title.offsetHeight);

                const isRowEnd = (i % count === 0) || (i === cards.length - 1); // Здесь count - количество карточек в ряду
                // const isRowEnd = (i % count === 2) || (i === cards.length - 1); // Здесь count - количество карточек в ряду

                if (isRowEnd) {
                    for (let j = rowStartIndex; j <= i; j++) {
                        cards[j].querySelector('.products__link').style.minHeight = maxTitleHeight + 'px';
                    }
                    maxTitleHeight = 0;
                    rowStartIndex = i + 1;
                }
            }
        }
    }

    alignCardTitles();
    window.addEventListener('resize', alignCardTitles);
    document.addEventListener('DOMContentLoaded', alignCardTitles);

    // Поисковая строка яндекс
    function yandexTextField() {
        const input = document.querySelector('.questions__textfield_js'),
            elements = document.querySelectorAll('.questions__list_js a');
        let count = 0;

        setInterval(() => {
            if (count >= elements.length) {
                count = 0;
            }
            input.textContent = elements[count].textContent;
            count++;
        }, 1000)
    }
    yandexTextField();

    // Текущая дата для таблицы с ценами
    function currentDate() {

        // Создайте массив с названиями месяцев
        const months = [
            "января",
            "февраля",
            "марта",
            "апреля",
            "мая",
            "июня",
            "июля",
            "августа",
            "сентября",
            "октября",
            "ноября",
            "декабря"
        ];

        // Получите текущую дату
        const currentDate = new Date();

        // Извлеките день и месяц из текущей даты
        const dayOfMonth = currentDate.getDate();
        const monthIndex = currentDate.getMonth();

        // Получите название месяца
        const monthName = months[monthIndex];

        // Отформатируйте текущую дату в виде "17 декабря"
        const formattedDate = `${dayOfMonth} ${monthName}`;

        document.querySelector(".price__subtitle_js").textContent = `Прайс обновлён ${formattedDate}`
    }
    currentDate()

});















