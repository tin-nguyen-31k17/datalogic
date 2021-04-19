(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),o=(a(0),a(216)),i={title:"Datalogic Android SDK 1.26",tags:["datalogic-android-sdk"],author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},c={permalink:"/releases/2021/03/10/datalogic-android-sdk-v1.26",source:"@site/blog/2021-03-10-datalogic-android-sdk-v1.26.md",description:"Datalogic Android SDK 1.26 is now available. You can access the documentation here. The online API documentation is available here.",date:"2021-03-10T00:00:00.000Z",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],title:"Datalogic Android SDK 1.26",readingTime:.4,truncated:!1,prevItem:{title:"OEMConfig v1.8.0",permalink:"/releases/2021/03/19/oemconfig-v1.8.0"},nextItem:{title:"Scan2Deploy Android 1.30",permalink:"/releases/2021/03/01/scan2deploy-android-v1.30"}},d=[{value:"Enhancements",id:"enhancements",children:[]}],l={rightToc:d};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Datalogic Android SDK 1.26 is now available. You can access the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/android/overview"}),"documentation here"),". The online API documentation is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/"}),"available here"),"."),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added Scanner Presentation Mode support. Documentation links:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/PresentationMode.html"}),"PresentationMode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/PresentationState.html"}),"PresentationState")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/PresentationStateListener.html"}),"PresentationStateListener")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/BarcodeManager.html#addPresentationStateListener(com.datalogic.decode.PresentationStateListener)"}),"BarcodeManager.addPresentationStateListener")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/BarcodeManager.html#removePresentationStateListener(com.datalogic.decode.PresentationStateListener)"}),"BarcodeManager.removePresentationStateListener")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added Data Matrix mirrored support. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/DatamatrixMirror.html"}),"DatamatrixMirror"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added audio channel selection for scanner notifications. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ToneNotificationChannel.html"}),"ToneNotificationChannel"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added visual formatter feature level to check & retrieve the list of properties related to a visual formatter item. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/VisualFormatter.html#getFeatureLevel()"}),"VisualFormatter.getFeatureLevel()")))))}s.isMDXComponent=!0},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(a),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);