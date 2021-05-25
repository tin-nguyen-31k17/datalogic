(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{237:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||s[u]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(237)),i={title:"Datalogic Android SDK 1.27",tags:["datalogic-android-sdk"],author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},c={permalink:"/releases/2021/05/14/datalogic-android-sdk-v1.27",source:"@site/blog/2021-05-14-datalogic-android-sdk-v1.27.md",description:"Datalogic Android SDK 1.27 is now available. The SDK add-on version supports Android API levels up to 29 (Android 10).",date:"2021-05-14T00:00:00.000Z",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],title:"Datalogic Android SDK 1.27",readingTime:1.315,truncated:!1,nextItem:{title:"Scan2Deploy Studio 1.5.2",permalink:"/releases/2021/04/29/scan2deploy-studio-v1.5.2"}},d=[{value:"Enhancements",id:"enhancements",children:[{value:"Configuration Manager",id:"configuration-manager",children:[]},{value:"Other Enhancements",id:"other-enhancements",children:[]}]},{value:"Other notes",id:"other-notes",children:[]}],l={rightToc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Datalogic Android SDK 1.27 is now available. The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/android/overview#sdk-add-on"}),"SDK add-on")," version supports Android API levels up to 29 (Android 10)."),Object(o.b)("p",null,"You can access the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/android/overview"}),"documentation here"),"."),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("h3",{id:"configuration-manager"},"Configuration Manager"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/ConfigurationManager.html"}),"ConfigurationManager")," class gives the developer the ability to browse and set the configuration properties of the device. For a list of all of the supported properties and groups offered by the ConfigurationManager, see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html"}),"PropertyID")," documentation."),Object(o.b)("p",null,"A high level list of available properties is as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"WIFI_GROUP - includes many advanced Wi-Fi settings available on the device including power save, logging, roaming, and scan interval")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"DATE_AND_TIME_GROUP - date and time settings such as NTP server and time zone")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"POWER_GROUP - device charging policy settings")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"USB_GROUP - allows for settings current and default USB function modes of the device."))),Object(o.b)("h3",{id:"other-enhancements"},"Other Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added notes on how to avoid possible deadlock issues when calling some Package Installer APIs on the UI thread. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/PackageInstaller.html"}),"PackageInstaller")," for more details.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added methods to ",Object(o.b)("inlineCode",{parentName:"p"},"DLCradleManager"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/cradle/DLCradleManager.html#rebootCradle()"}),"rebootCradle()")," to reboot the cradle and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/cradle/DLCradleManager.html#getType()"}),"getType()")," to retrieve the cradle type.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Scan mode to support presentation or continuous mode - see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScanMode.html"}),"ScanMode"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added ",Object(o.b)("inlineCode",{parentName:"p"},"BAROQUE")," and ",Object(o.b)("inlineCode",{parentName:"p"},"VIPER")," beep modes - see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ToneNotificationMode.html"}),"ToneNotificationMode"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Updated documentation to clarify minimum keyboard multitap delay. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/input/AdvancedKeyboard.html"}),"AdvancedKeyboard")," class for more details."))),Object(o.b)("h2",{id:"other-notes"},"Other notes"),Object(o.b)("p",null,"The following methods in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/Property.html"}),"Property")," class have been marked deprecated in this release:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"load()"),Object(o.b)("li",{parentName:"ul"},"store()"),Object(o.b)("li",{parentName:"ul"},"findPropertybyId()"),Object(o.b)("li",{parentName:"ul"},"storelist()"),Object(o.b)("li",{parentName:"ul"},"loadlist()")),Object(o.b)("p",null,"The following methods in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyGroup.html"}),"PropertyGroup")," class have been marked deprecated in this release:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"load()"),Object(o.b)("li",{parentName:"ul"},"store()"),Object(o.b)("li",{parentName:"ul"},"isFullySupported()")))}p.isMDXComponent=!0}}]);