(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(209)),i={title:"Scan2Deploy Android 1.25",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},c={permalink:"/releases/2020/09/22/scan2deploy-android-v1.25",source:"@site/blog/2020-09-22-scan2deploy-android-v1.25.md",description:"Enhancements",date:"2020-09-22T00:00:00.000Z",tags:[{label:"scan2deploy-android",permalink:"/releases/tags/scan-2-deploy-android"}],title:"Scan2Deploy Android 1.25",readingTime:.695,truncated:!0,prevItem:{title:"Scan2Deploy Studio 1.4.3",permalink:"/releases/2020/10/05/scan2deploy-studio-v1.4.3"},nextItem:{title:"Scan2Deploy Android Schema v1-7-0",permalink:"/releases/2020/09/22/scan2deploy-schema-v1-7-0"}},l=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Compatibility",id:"compatibility",children:[]},{value:"Corrected defects",id:"corrected-defects",children:[]}],d={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added support for downloading profiles using FTP. See ",Object(o.b)("inlineCode",{parentName:"li"},"scheme"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ftp-username"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"ftp-password")," in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/scan2deploy/android-schema#deployment"}),"deployment section of the Android schema"),"."),Object(o.b)("li",{parentName:"ul"},"Added WPA3 support for some devices running Android 9 and above. See new mode values in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/scan2deploy/android-schema#deployment"}),"deployment section of the Android schema"),"."),Object(o.b)("li",{parentName:"ul"},"Allow setting a different system default launcher. See new ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/scan2deploy/android-schema#default-home"}),"default-home section")," in the Android schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/scan2deploy/android#start-service-intent"}),"Added a service")," that listens for requests to apply Scan2Deploy profiles without the Scan2Deploy UI (activity) being visible. The profile will be applied silently, without any Scan2Deploy UI being displayed in the foreground.")),Object(o.b)("h2",{id:"compatibility"},"Compatibility"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This version of Scan2Deploy supports the following schemas: schema v1-0-0, schema v1-1-0, schema v1-2-0, schema v1-3-0, schema v1-4-0, schema v1-5-0, schema v1-6-0, schema v1-7-0.")),Object(o.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Scan2Deploy Agent can freeze when the font size is changed")))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},d),{},{components:n})):a.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);