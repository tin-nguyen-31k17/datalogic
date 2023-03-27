"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[7864],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,g=m["".concat(c,".").concat(p)]||m[p]||s[p]||a;return n?r.createElement(g,i(i({ref:t},f),{},{components:n})):r.createElement(g,i({ref:t},f))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"OEMConfig v2.1.1",author:"OEMConfig",author_image_url:"/img/homepage/home-oemconfig.svg",author_url:"/oemconfig/overview",tags:["oemconfig"]},c=void 0,u={permalink:"/releases/2022/1/10/oemconfig-v2.1.1",source:"@site/blog/2022-1-10-oemconfig-v2.1.1.md",title:"OEMConfig v2.1.1",description:"Enhancements",date:"2022-01-10T00:00:00.000Z",formattedDate:"January 10, 2022",tags:[{label:"oemconfig",permalink:"/releases/tags/oemconfig"}],readingTime:.35,hasTruncateMarker:!1,authors:[{name:"OEMConfig",url:"/oemconfig/overview",imageURL:"/img/homepage/home-oemconfig.svg"}],frontMatter:{title:"OEMConfig v2.1.1",author:"OEMConfig",author_image_url:"/img/homepage/home-oemconfig.svg",author_url:"/oemconfig/overview",tags:["oemconfig"]},prevItem:{title:"Datalogic Android SDK 1.30",permalink:"/releases/2022/01/12/datalogic-android-sdk-v1.30"},nextItem:{title:"Scan2Deploy Studio 1.6.7",permalink:"/releases/2022/01/06/scan2deploy-studio-v1.6.7"}},f={authorsImageUrls:[void 0]},m=[{value:"Enhancements",id:"enhancements",level:2},{value:"Corrected Defects",id:"corrected-defects",level:2}],s={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"enhancements"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added support for SDK v1.30"),(0,a.kt)("li",{parentName:"ul"},"Added decoding settings:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/oemconfig/scanner-settings#ocr"},"OCR multiframe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/oemconfig/scanner-settings#linear-quiet-zones"},"Linear Quiet Zone")," settings for Interleaved 2 of 5, Codabar, Code 93, and Matrix 2 of 5."))),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("a",{parentName:"li",href:"/oemconfig/system-settings#touch-mode"},"Touch Screen Sensitivity")),(0,a.kt)("li",{parentName:"ul"},"Added support for file download using HTTP/S or FTP/S:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/oemconfig/scanner-settings#notification"},"Custom good read audio file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/oemconfig/firmware"},"OTA update file")," ")))),(0,a.kt)("h2",{id:"corrected-defects"},"Corrected Defects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reboot is no longer required to enable/disable Ethernet.")))}g.isMDXComponent=!0}}]);