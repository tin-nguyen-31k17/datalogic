(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(237)),c={title:"Scan2Deploy Android 1.28",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},i={permalink:"/releases/2020/12/10/scan2deploy-android-v1.28",source:"@site/blog/2020-12-10-scan2deploy-android-v1.28.md",description:"Corrected defects",date:"2020-12-10T00:00:00.000Z",tags:[{label:"scan2deploy-android",permalink:"/releases/tags/scan-2-deploy-android"}],title:"Scan2Deploy Android 1.28",readingTime:.24,truncated:!1,prevItem:{title:"Scan2Deploy Studio 1.4.4",permalink:"/releases/2020/12/11/scan2deploy-studio-v1.4.4"},nextItem:{title:"Scan2Deploy Android 1.27",permalink:"/releases/2020/11/03/scan2deploy-android-v1.27"}},l=[{value:"Corrected defects",id:"corrected-defects",children:[]}],d={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Resolves an issue that caused Scan2Deploy to fail while installing APKs included in a profile ",Object(o.b)("inlineCode",{parentName:"li"},".tar")," file. The timing was such that GMS updates from Google were occurring in the background while the APK was being installed and this caused the install to fail.")))}p.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,y=u["".concat(c,".").concat(f)]||u[f]||s[f]||o;return n?a.a.createElement(y,i(i({ref:t},d),{},{components:n})):a.a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);