(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{252:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(314)),c={title:"JavaPOS 1.14.066 (1.14.12-066)",author:"JavaPOS API",author_image_url:"/img/homepage/home-java.svg",author_url:"/javapos/overview",tags:["javapos"]},i={permalink:"/releases/2021/10/20/javapos-1.14.066",source:"@site/blog/2021-10-20-javapos-1.14.066.md",description:"Enhancements",date:"2021-10-20T00:00:00.000Z",tags:[{label:"javapos",permalink:"/releases/tags/javapos"}],title:"JavaPOS 1.14.066 (1.14.12-066)",readingTime:.31,truncated:!1,prevItem:{title:"Datalogic Logger 1.00.2",permalink:"/releases/2021/11/01/logger"},nextItem:{title:"OEMConfig v2.0.0",permalink:"/releases/2021/10/11/oemconfig-v2.0.0"}},l=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Corrected defects",id:"corrected-defects",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Upgraded to latest JNA third-party library. JavaPOS works with JNA 5.2.0 through JNA 5.9.0.")),Object(o.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixed an issue causing health checks to repeat after a reset during the Firmware Update process."),Object(o.b)("li",{parentName:"ul"},"Removed several jpos.xml properties that are not used.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"canAcceptConfigItems"),Object(o.b)("li",{parentName:"ul"},"vendorURL"),Object(o.b)("li",{parentName:"ul"},"useSunJavaxComm"),Object(o.b)("li",{parentName:"ul"},"updateUsage"),Object(o.b)("li",{parentName:"ul"},"serviceClass"),Object(o.b)("li",{parentName:"ul"},"serviceInstanceFactoryClass"),Object(o.b)("li",{parentName:"ul"},"fullDisable"),Object(o.b)("li",{parentName:"ul"},"scanControl")))))}p.isMDXComponent=!0},314:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,f=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);