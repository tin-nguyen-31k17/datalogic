"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[5758],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,y=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Scan2Deploy Android 1.27",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},p=void 0,c={permalink:"/releases/2020/11/03/scan2deploy-android-v1.27",source:"@site/blog/2020-11-03-scan2deploy-android-v1.27.md",title:"Scan2Deploy Android 1.27",description:"Enhancements",date:"2020-11-03T00:00:00.000Z",formattedDate:"November 3, 2020",tags:[{label:"scan2deploy-android",permalink:"/releases/tags/scan-2-deploy-android"}],readingTime:.695,hasTruncateMarker:!0,authors:[{name:"Scan2Deploy Android",url:"/scan2deploy/android",imageURL:"/img/homepage/home-scan2deploy.png"}],frontMatter:{title:"Scan2Deploy Android 1.27",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},prevItem:{title:"Scan2Deploy Android 1.28",permalink:"/releases/2020/12/10/scan2deploy-android-v1.28"},nextItem:{title:"Datalogic Android SDK 1.24",permalink:"/releases/2020/11/02/datalogic-android-sdk-v1.24"}},d={authorsImageUrls:[void 0]},s=[{value:"Enhancements",id:"enhancements",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Corrected defects",id:"corrected-defects",level:2}],u={toc:s},m="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support the ",(0,o.kt)("a",{parentName:"p",href:"/scan2deploy/android-schema#set_setting"},"SET_SETTING")," script command.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Supports applying profiles located on device in internal storage, on removable USB storage, and on removable SD cards. See ",(0,o.kt)("inlineCode",{parentName:"p"},"storage-type")," in the ",(0,o.kt)("a",{parentName:"p",href:"/scan2deploy/android-schema#deployment"},"deployment section")," of the Android schema.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Allows plain json to be passed to Scan2Deploy via the ",(0,o.kt)("a",{parentName:"p",href:"/scan2deploy/android#start-service-intent"},"START_SERVICE intent")," and when ",(0,o.kt)("a",{parentName:"p",href:"/scan2deploy/android#call-startactivity"},"starting the Scan2Deploy activity"),"."))),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This version of Scan2Deploy supports all schema versions up to and including schema v1-9-0. Schema v1-9-0 is required for the ",(0,o.kt)("inlineCode",{parentName:"p"},"SET_SETTINGS")," script command and the ",(0,o.kt)("inlineCode",{parentName:"p"},"storage-type")," field.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This version is designed to work with ",(0,o.kt)("a",{parentName:"p",href:"/releases/2020/10/05/scan2deploy-studio-v1.4.3"},"Scan2Deploy Studio 1.4.3 or higher"),". Note that version 1.4.3 does not yet offer direct support for the new ",(0,o.kt)("inlineCode",{parentName:"p"},"SET_SETTINGS")," script command and ",(0,o.kt)("inlineCode",{parentName:"p"},"storage-type")," fields."))),(0,o.kt)("h2",{id:"corrected-defects"},"Corrected defects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resolves an issue that prevented some MDMs from successfully passing barcode data to the Scan2Deploy service.")))}y.isMDXComponent=!0}}]);