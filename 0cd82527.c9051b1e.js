(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{209:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),o=(a(0),a(209)),i={title:"Datalogic Android SDK 1.24",tags:["datalogic-android-sdk"],author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},c={permalink:"/releases/2020/11/02/datalogic-android-sdk-v1.24",source:"@site/blog/2020-11-02-datalogic-android-sdk-v1.24.md",description:"Datalogic Android SDK 1.24 is now available. You can access the documentation here. The online API documentation is available here.",date:"2020-11-02T00:00:00.000Z",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],title:"Datalogic Android SDK 1.24",readingTime:.505,truncated:!1,prevItem:{title:"Scan2Deploy Android 1.27",permalink:"/releases/2020/11/03/scan2deploy-android-v1.27"},nextItem:{title:"Scan2Deploy Android Schema v1-9-0",permalink:"/releases/2020/10/30/scan2deploy-schema-v1-9-0"}},d=[],l={rightToc:d};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Datalogic Android SDK 1.24 is now available. You can access the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/android/overview"}),"documentation here"),". The online API documentation is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/"}),"available here"),"."),Object(o.b)("p",null,"New features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Introduced 2nd display Brightness, SwitchOffTimeout, Rotation and Rolling Speed control. See ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/display/DLSecondDisplayManager.html"}),"DLSecondDisplayManager")," for details. Currently, these APIs only apply to the ",Object(o.b)("strong",{parentName:"li"},"Datalogic Memor 20"),"."),Object(o.b)("li",{parentName:"ul"},"Added Cradle APIs to control the locking cradle lever and manage Failure and Lock/Unlock Lever events. See ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/cradle/DLCradleManager.html"}),"DLCradleManager")," for details."),Object(o.b)("li",{parentName:"ul"},"Added Visual Formatter methods. See the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/VisualFormatter.html"}),"VisualFormatter class")," for details."),Object(o.b)("li",{parentName:"ul"},"Added methods to manage keyboard overlays and a method to reset the keyboard configuration to its default in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/input/AdvancedKeyboard.html"}),"AdvancedKeyboard")," class.")))}s.isMDXComponent=!0}}]);