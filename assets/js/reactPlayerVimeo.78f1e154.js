"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3743],{86746:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(67294)),u=r(56281),a=r(99790);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=y(e);if(t){var u=y(this).constructor;r=Reflect.construct(o,arguments,u)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;return f(e)}(this,r)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,r,n,a=s(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return d(f(e=a.call.apply(a,[this].concat(r))),"callPlayer",u.callPlayer),d(f(e),"duration",null),d(f(e),"currentTime",null),d(f(e),"secondsLoaded",null),d(f(e),"mute",(function(){e.setVolume(0)})),d(f(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),d(f(e),"ref",(function(t){e.container=t})),e}return t=i,r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;this.duration=null,(0,u.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then((function(r){if(t.container){var n=t.props.config,o=n.playerOptions,u=n.title;t.player=new r.Player(t.container,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({url:e,autoplay:t.props.playing,muted:t.props.muted,loop:t.props.loop,playsinline:t.props.playsinline,controls:t.props.controls},o)),t.player.ready().then((function(){var e=t.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",u&&(e.title=u)})).catch(t.props.onError),t.player.on("loaded",(function(){t.props.onReady(),t.refreshDuration()})),t.player.on("play",(function(){t.props.onPlay(),t.refreshDuration()})),t.player.on("pause",t.props.onPause),t.player.on("seeked",(function(e){return t.props.onSeek(e.seconds)})),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",(function(e){var r=e.seconds;t.currentTime=r})),t.player.on("progress",(function(e){var r=e.seconds;t.secondsLoaded=r})),t.player.on("bufferstart",t.props.onBuffer),t.player.on("bufferend",t.props.onBufferEnd)}}),this.props.onError)}},{key:"refreshDuration",value:function(){var e=this;this.player.getDuration().then((function(t){e.duration=t}))}},{key:"play",value:function(){var e=this.callPlayer("play");e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("unload")}},{key:"seekTo",value:function(e){this.callPlayer("setCurrentTime",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e={width:"100%",height:"100%",overflow:"hidden",display:this.props.display};return o.default.createElement("div",{key:this.props.url,ref:this.ref,style:e})}}],r&&c(t.prototype,r),n&&c(t,n),i}(o.Component);t.default=h,d(h,"displayName","Vimeo"),d(h,"canPlay",a.canPlay.vimeo),d(h,"forceLoad",!0)}}]);