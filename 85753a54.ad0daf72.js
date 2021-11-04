(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{197:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(295)),i={title:"Datalogic Logger 1.00.2",author:"Datalogic Logger",author_image_url:"/img/homepage/home-logger.svg",author_url:"/logger/overview",tags:["logger"]},c={permalink:"/releases/2021/11/01/logger",source:"@site/blog/2021-11-01-logger.md",description:"Datalogic Logger is now available.  It is an Android application designed to collect information logged by various software components to assist in diagnosing issues.  Once started, it runs in the background with minimal impact to device performance.  When complete, an archive of the results is generated, which can be exported from the device for further study.  You can access the documentation here.",date:"2021-11-01T00:00:00.000Z",tags:[{label:"logger",permalink:"/releases/tags/logger"}],title:"Datalogic Logger 1.00.2",readingTime:.745,truncated:!1,nextItem:{title:"OEMConfig v2.0.0",permalink:"/releases/2021/10/11/oemconfig-v2.0.0"}},l=[],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Datalogic Logger is now available.  It is an Android application designed to collect information logged by various software components to assist in diagnosing issues.  Once started, it runs in the background with minimal impact to device performance.  When complete, an archive of the results is generated, which can be exported from the device for further study.  You can access the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/logger/overview"}),"documentation here"),"."),Object(o.b)("p",null,"The features available in the initial release are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Logcat module",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Collect data from Logcat messages generated from applications and services."),Object(o.b)("li",{parentName:"ul"},"Filter reocrded content by package, tag and/or priority."))),Object(o.b)("li",{parentName:"ul"},"Kernel module",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Collect data from other core Android system services."))),Object(o.b)("li",{parentName:"ul"},"Export logs",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Log files can be sent from the device to SD Card or remote server."))),Object(o.b)("li",{parentName:"ul"},"External control",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Configurable from device, Scan2Deploy Studio or EMM console."),Object(o.b)("li",{parentName:"ul"},"API available to start or stop a log session, and export log files.")))))}u.isMDXComponent=!0},295:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||g[m]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);