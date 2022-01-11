(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(8),o=(n(0),n(316)),c={title:"OEMConfig v2.1.0",author:"OEMConfig",author_image_url:"/img/homepage/home-oemconfig.svg",author_url:"/oemconfig/overview",tags:["oemconfig"]},i={permalink:"/releases/2022/01/10/oemconfig-v2.1.0",source:"@site/blog/2022-1-10-oemconfig-v2.1.0.md",description:"Enhancements",date:"2022-01-10T00:00:00.000Z",tags:[{label:"oemconfig",permalink:"/releases/tags/oemconfig"}],title:"OEMConfig v2.1.0",readingTime:.35,truncated:!1,nextItem:{title:"Scan2Deploy Studio 1.6.7",permalink:"/releases/2022/01/06/scan2deploy-studio-v1.6.7"}},l=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Corrected Defects",id:"corrected-defects",children:[]}],u={rightToc:l};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added support for SDK v1.30"),Object(o.b)("li",{parentName:"ul"},"Added decoding settings:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#ocr"}),"OCR multiframe")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#linear-quiet-zones"}),"Linear Quiet Zone")," settings for Interleaved 2 of 5, Codabar, Code 93, and Matrix 2 of 5."))),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oemconfig/system-settings#touch-mode"}),"Touch Screen Sensitivity")),Object(o.b)("li",{parentName:"ul"},"Added support for file download using HTTP/S or FTP/S:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#notification"}),"Custom good read audio file")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oemconfig/firmware"}),"OTA update file")," ")))),Object(o.b)("h2",{id:"corrected-defects"},"Corrected Defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reboot is not longer required to enable/disable Ethernet.")))}f.isMDXComponent=!0},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),f=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=f(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=f(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||s[b]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);