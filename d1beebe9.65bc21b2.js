(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(192)),i={title:"Scan2Deploy Android 1.27",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},c={permalink:"/releases/2020/11/03/scan2deploy-android-v1.27",source:"@site/blog/2020-11-03-scan2deploy-android-v1.27.md",description:"Enhancements",date:"2020-11-03T00:00:00.000Z",tags:[{label:"scan2deploy-android",permalink:"/releases/tags/scan-2-deploy-android"}],title:"Scan2Deploy Android 1.27",readingTime:.695,truncated:!0,prevItem:{title:"Datalogic WiFi Guard 1.10.3",permalink:"/releases/2020/12/11/wifiguard"},nextItem:{title:"Android Studio SDK 1.24",permalink:"/releases/2020/11/02/android-studio-sdk-v1.24"}},p=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Compatibility",id:"compatibility",children:[]},{value:"Corrected defects",id:"corrected-defects",children:[]}],l={rightToc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Support the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/scan2deploy/android-schema#set_setting"}),"SET_SETTING")," script command.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Supports applying profiles located on device in internal storage, on removable USB storage, and on removable SD cards. See ",Object(o.b)("inlineCode",{parentName:"p"},"storage-type")," in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/scan2deploy/android-schema#deployment"}),"deployment section")," of the Android schema.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Allows plain json to be passed to Scan2Deploy via the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/scan2deploy/android#start-service-intent"}),"START_SERVICE intent")," and when ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/scan2deploy/android#call-startactivity"}),"starting the Scan2Deploy activity"),"."))),Object(o.b)("h2",{id:"compatibility"},"Compatibility"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This version of Scan2Deploy supports all schema versions up to and including schema v1-9-0. Schema v1-9-0 is required for the ",Object(o.b)("inlineCode",{parentName:"p"},"SET_SETTINGS")," script command and the ",Object(o.b)("inlineCode",{parentName:"p"},"storage-type")," field.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This version is designed to work with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/releases/2020/10/05/scan2deploy-studio-v1.4.3"}),"Scan2Deploy Studio 1.4.3 or higher"),". Note that version 1.4.3 does not yet offer direct support for the new ",Object(o.b)("inlineCode",{parentName:"p"},"SET_SETTINGS")," script command and ",Object(o.b)("inlineCode",{parentName:"p"},"storage-type")," fields."))),Object(o.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Resolves an issue that prevented some MDMs from successfully passing barcode data to the Scan2Deploy service.")))}d.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);