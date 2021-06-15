(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(239)),i={title:"Datalogic Android SDK 1.25",tags:["datalogic-android-sdk"],author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},c={permalink:"/releases/2021/01/12/datalogic-android-sdk-v1.25",source:"@site/blog/2021-01-12-datalogic-android-sdk-v1.25.md",description:"Datalogic Android SDK 1.25 is now available. You can access the documentation here. The online API documentation is available here.",date:"2021-01-12T00:00:00.000Z",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],title:"Datalogic Android SDK 1.25",readingTime:.55,truncated:!1,prevItem:{title:"DXU Android v1.33",permalink:"/releases/2021/02/04/dxu-android-v1.33"},nextItem:{title:"Datalogic WiFi Guard 1.10.3",permalink:"/releases/2020/12/11/wifiguard"}},l=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Other notes",id:"other-notes",children:[]}],d={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Datalogic Android SDK 1.25 is now available. You can access the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/android/overview"}),"documentation here"),". The online API documentation is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/"}),"available here"),"."),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/AppManager.html"}),"AppManager")," class. AppManager gives developers the ability to manage installed applications. It provides the following methods.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/PackageInstaller.html"}),"PackageInstaller")," class. PackageInstaller gives developers the ability to install, uninstall and upgrade applications in unattended/silent mode.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added ",Object(o.b)("inlineCode",{parentName:"p"},"linearTransmissionEnable")," property to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Composite.html"}),"Composite")," class."))),Object(o.b)("h2",{id:"other-notes"},"Other notes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"On Android 10 (Android Q) devices, GPS and network sensors can't be toggled separately. Therefore, passing a ",Object(o.b)("em",{parentName:"li"},"LocationMode")," value of ",Object(o.b)("inlineCode",{parentName:"li"},"NETWORK")," or ",Object(o.b)("inlineCode",{parentName:"li"},"SENSORS")," to the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/location/LocationManager.html#setLocationMode(com.datalogic.device.location.LocationMode)"}),"LocationManager.setLocationMode()")," method will effectively be treated as if the value ",Object(o.b)("inlineCode",{parentName:"li"},"SENSORS_AND_NETWORK")," had been passed in.")))}p.isMDXComponent=!0},239:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return a?r.a.createElement(m,c(c({ref:t},d),{},{components:a})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);