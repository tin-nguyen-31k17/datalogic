(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(237)),i={title:"Scan2Deploy Android 1.25",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},c={permalink:"/releases/2020/09/22/scan2deploy-android-v1.25",source:"@site/blog/2020-09-22-scan2deploy-android-v1.25.md",description:"Enhancements",date:"2020-09-22T00:00:00.000Z",tags:[{label:"scan2deploy-android",permalink:"/releases/tags/scan-2-deploy-android"}],title:"Scan2Deploy Android 1.25",readingTime:.695,truncated:!0,prevItem:{title:"Scan2Deploy Studio 1.4.3",permalink:"/releases/2020/10/05/scan2deploy-studio-v1.4.3"},nextItem:{title:"Scan2Deploy Android Schema v1-7-0",permalink:"/releases/2020/09/22/scan2deploy-schema-v1-7-0"}},l=[{value:"Enhancements",id:"enhancements",children:[]}],d={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added support for downloading profiles using FTP. See ",Object(o.b)("inlineCode",{parentName:"li"},"scheme"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ftp-username"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"ftp-password")," in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/scan2deploy/android-schema#deployment"}),"deployment section of the Android schema"),"."),Object(o.b)("li",{parentName:"ul"},"Added WPA3 support for some devices running Android 9 and above. See new mode values in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/scan2deploy/android-schema#deployment"}),"deployment section of the Android schema"),"."),Object(o.b)("li",{parentName:"ul"},"Allow setting a different system default launcher. See new ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/scan2deploy/android-schema#default-home"}),"default-home section")," in the Android schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/scan2deploy/android#start-service-intent"}),"Added a service")," that listens for requests to apply Scan2Deploy profiles without the Scan2Deploy UI (activity) being visible. The profile will be applied silently, without any Scan2Deploy UI being displayed in the foreground.")))}p.isMDXComponent=!0},237:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,f=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?a.a.createElement(f,c(c({ref:n},d),{},{components:t})):a.a.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);