(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{215:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(235)),i={title:"Scan2Deploy Android 1.28",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},c={permalink:"/releases/2020/12/10/scan2deploy-android-v1.28",source:"@site/blog/2020-12-10-scan2deploy-android-v1.28.md",description:"Corrected defects",date:"2020-12-10T00:00:00.000Z",tags:[{label:"scan2deploy-android",permalink:"/releases/tags/scan-2-deploy-android"}],title:"Scan2Deploy Android 1.28",readingTime:.24,truncated:!1,prevItem:{title:"Datalogic WiFi Guard 1.10.3",permalink:"/releases/2020/12/11/wifiguard"},nextItem:{title:"Scan2Deploy Android 1.27",permalink:"/releases/2020/11/03/scan2deploy-android-v1.27"}},l=[{value:"Corrected defects",id:"corrected-defects",children:[]}],d={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Resolves an issue that caused Scan2Deploy to fail while installing APKs included in a profile ",Object(o.b)("inlineCode",{parentName:"li"},".tar")," file. The timing was such that GMS updates from Google were occurring in the background while the APK was being installed and this caused the install to fail.")))}p.isMDXComponent=!0},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,y=u["".concat(i,".").concat(f)]||u[f]||s[f]||o;return r?a.a.createElement(y,c(c({ref:t},d),{},{components:r})):a.a.createElement(y,c({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);