(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),o=(a(0),a(284)),i={title:"Datalogic Android SDK 1.28",tags:["datalogic-android-sdk"],author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},c={permalink:"/releases/2021/06/14/datalogic-android-sdk-v1.28",source:"@site/blog/2021-06-14-datalogic-android-sdk-v1.28.md",description:"Datalogic Android SDK 1.28 is now available. The SDK add-on version supports Android API levels up to 30 (Android 11).",date:"2021-06-14T00:00:00.000Z",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],title:"Datalogic Android SDK 1.28",readingTime:.775,truncated:!1,prevItem:{title:"JavaPOS 1.14.065 (1.14.11-065)",permalink:"/releases/2021/07/14/javapos-1.14.065"},nextItem:{title:"Datalogic Android SDK 1.27",permalink:"/releases/2021/05/14/datalogic-android-sdk-v1.27"}},d=[{value:"Enhancements",id:"enhancements",children:[]}],l={rightToc:d};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Datalogic Android SDK 1.28 is now available. The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/android/overview#sdk-add-on"}),"SDK add-on")," version supports Android API levels up to 30 (Android 11)."),Object(o.b)("p",null,"You can access the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/android/overview"}),"documentation here"),"."),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Improved description of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/battery/DLBatteryManager.html#initBatteryEvents(android.content.Context)"}),"Battery Event initialization APIs"),", indicating the proper way to call it from a BroadcastReceiver.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Improved description to inform users that scanner properties cannot be changed when ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScanMode.html"}),"ScanMode"),' is set to "Always on" (ALWAYS_ON).')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added AppManager API to revoke permissions to apps: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/AppManager.html#revokePermissions(java.lang.String,%20java.util.ArrayList%3Cjava.lang.String%3E)"}),"revokePermissions()"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added ability to get and set Wi-Fi channel configuration values. See the ",Object(o.b)("strong",{parentName:"p"},"Class Overview")," section of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html"}),"PropertyID")," class to see a hierarchy of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyGroupID.html#WIFI_CHANNELS_GROUP"}),"WIFI_CHANNELS_GROUP")," settings. Enums for every supported Wi-Fi channel are available (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_CHANNEL_1"}),"WIFI_CHANNEL_1")," for instance), as well as higher level settings  ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_COUNTRY_CODE"}),"WIFI_COUNTRY_CODE")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_UNLOCK_CHANNELS"}),"WIFI_UNLOCK_CHANNELS"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can now retrieve ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html#SERIAL_NUMBER"}),"Serial number")," & ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html#PRODUCT_NUMBER"}),"Product number")," in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html"}),"SYSTEM")," class.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added support for the GS1-Datamatrix ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/Symbology.html"}),"symbology")," (GS1_DATAMATRIX).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added support to configure the Scanner ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScannerOptions.html#illuminationTime"}),"illumination pulse length"),"."))))}p.isMDXComponent=!0},284:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);