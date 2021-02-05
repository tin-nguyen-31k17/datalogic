(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{199:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(199)),i={title:"Android Studio SDK 1.25",tags:["android-studio-sdk"],author:"Android Studio SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},c={permalink:"/releases/2021/01/12/android-studio-sdk-v1.25",source:"@site/blog/2021-01-12-android-studio-sdk-v1.25.md",description:"Android Studio SDK 1.25 is now available. You can access the documentation here. The online API documentation is available here.",date:"2021-01-12T00:00:00.000Z",tags:[{label:"android-studio-sdk",permalink:"/releases/tags/android-studio-sdk"}],title:"Android Studio SDK 1.25",readingTime:.55,truncated:!1,prevItem:{title:"DXU Android v1.33",permalink:"/releases/2021/02/04/dxu-android-v1.33"},nextItem:{title:"Scan2Deploy Studio 1.4.4",permalink:"/releases/2020/12/11/scan2deploy-studio-v1.4.4"}},d=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Other notes",id:"other-notes",children:[]}],l={rightToc:d};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Android Studio SDK 1.25 is now available. You can access the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/android/overview"}),"documentation here"),". The online API documentation is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/"}),"available here"),"."),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/AppManager.html"}),"AppManager")," class. AppManager gives developers the ability to manage installed applications. It provides the following methods.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/PackageInstaller.html"}),"PackageInstaller")," class. PackageInstaller gives developers the ability to install, uninstall and upgrade applications in unattended/silent mode.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added ",Object(o.b)("inlineCode",{parentName:"p"},"linearTransmissionEnable")," property to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Composite.html"}),"Composite")," class."))),Object(o.b)("h2",{id:"other-notes"},"Other notes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"On Android 10 (Android Q) devices, GPS and network sensors can't be toggled separately. Therefore, passing a ",Object(o.b)("em",{parentName:"li"},"LocationMode")," value of ",Object(o.b)("inlineCode",{parentName:"li"},"NETWORK")," or ",Object(o.b)("inlineCode",{parentName:"li"},"SENSORS")," to the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/location/LocationManager.html#setLocationMode(com.datalogic.device.location.LocationMode)"}),"LocationManager.setLocationMode()")," method will effectively be treated as if the value ",Object(o.b)("inlineCode",{parentName:"li"},"SENSORS_AND_NETWORK")," had been passed in.")))}s.isMDXComponent=!0}}]);