"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[4667],{99734:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(67294)),u=r(56281),i=r(99790);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=d(e);if(t){var u=d(this).constructor;r=Reflect.construct(o,arguments,u)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;return y(e)}(this,r)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,r,n,c=s(a);function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(y(e=c.call.apply(c,[this].concat(r))),"callPlayer",u.callPlayer),b(y(e),"duration",null),b(y(e),"currentTime",null),b(y(e),"secondsLoaded",null),b(y(e),"mute",(function(){})),b(y(e),"unmute",(function(){})),b(y(e),"ref",(function(t){e.iframe=t})),e}return t=a,r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;(0,u.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((function(e){t.player=e.PlayerWidget(t.iframe),t.player.ready.then((function(){t.player.events.play.on(t.props.onPlay),t.player.events.pause.on(t.props.onPause),t.player.events.ended.on(t.props.onEnded),t.player.events.error.on(t.props.error),t.player.events.progress.on((function(e,r){t.currentTime=e,t.duration=r})),t.props.onReady()}))}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props,t=e.url,r=e.config,n=t.match(i.MATCH_URL_MIXCLOUD)[1],c=(0,u.queryString)(l(l({},r.options),{},{feed:"/".concat(n,"/")}));return o.default.createElement("iframe",{key:n,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?".concat(c),frameBorder:"0"})}}],r&&f(t.prototype,r),n&&f(t,n),a}(o.Component);t.default=h,b(h,"displayName","Mixcloud"),b(h,"canPlay",i.canPlay.mixcloud),b(h,"loopOnEnded",!0)}}]);