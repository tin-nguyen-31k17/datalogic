"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[8984],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(a),m=n,g=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27554:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return s}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],d={title:"Datalogic Android SDK 1.28",author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/android/overview",tags:["datalogic-android-sdk"]},c=void 0,l={permalink:"/releases/2021/06/14/datalogic-android-sdk-v1.28",source:"@site/blog/2021-06-14-datalogic-android-sdk-v1.28.md",title:"Datalogic Android SDK 1.28",description:"Datalogic Android SDK 1.28 is now available. The SDK add-on version supports Android API levels up to 30 (Android 11).",date:"2021-06-14T00:00:00.000Z",formattedDate:"June 14, 2021",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],readingTime:.775,hasTruncateMarker:!1,authors:[{name:"Datalogic Android SDK",url:"/android/overview",imageURL:"/img/homepage/home-android-sdk.png"}],frontMatter:{title:"Datalogic Android SDK 1.28",author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/android/overview",tags:["datalogic-android-sdk"]},prevItem:{title:"OEMConfig 1.9.0",permalink:"/releases/2021/07/14/oemconfig-v1.9.0"},nextItem:{title:"Datalogic Android SDK 1.27",permalink:"/releases/2021/05/14/datalogic-android-sdk-v1.27"}},p={authorsImageUrls:[void 0]},s=[{value:"Enhancements",id:"enhancements",level:2}],u={toc:s},m="wrapper";function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Datalogic Android SDK 1.28 is now available. The ",(0,o.kt)("a",{parentName:"p",href:"/android/overview#sdk-add-on"},"SDK add-on")," version supports Android API levels up to 30 (Android 11)."),(0,o.kt)("p",null,"You can access the ",(0,o.kt)("a",{parentName:"p",href:"/android/overview"},"documentation here"),"."),(0,o.kt)("h2",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Improved description of ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/battery/DLBatteryManager.html#initBatteryEvents(android.content.Context)"},"Battery Event initialization APIs"),", indicating the proper way to call it from a BroadcastReceiver.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Improved description to inform users that scanner properties cannot be changed when ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScanMode.html"},"ScanMode"),' is set to "Always on" (ALWAYS_ON).')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added AppManager API to revoke permissions to apps: ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/AppManager.html#revokePermissions(java.lang.String,%20java.util.ArrayList%3Cjava.lang.String%3E)"},"revokePermissions()"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added ability to get and set Wi-Fi channel configuration values. See the ",(0,o.kt)("strong",{parentName:"p"},"Class Overview")," section of ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html"},"PropertyID")," class to see a hierarchy of the ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyGroupID.html#WIFI_CHANNELS_GROUP"},"WIFI_CHANNELS_GROUP")," settings. Enums for every supported Wi-Fi channel are available (",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_CHANNEL_1"},"WIFI_CHANNEL_1")," for instance), as well as higher level settings  ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_COUNTRY_CODE"},"WIFI_COUNTRY_CODE")," and ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_UNLOCK_CHANNELS"},"WIFI_UNLOCK_CHANNELS"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can now retrieve ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html#SERIAL_NUMBER"},"Serial number")," & ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html#PRODUCT_NUMBER"},"Product number")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html"},"SYSTEM")," class.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added support for the GS1-Datamatrix ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/Symbology.html"},"symbology")," (GS1_DATAMATRIX).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added support to configure the Scanner ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScannerOptions.html#illuminationTime"},"illumination pulse length"),"."))))}g.isMDXComponent=!0}}]);