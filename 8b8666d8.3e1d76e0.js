(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),i=(a(0),a(251)),o={title:"Datalogic Android SDK 1.29",tags:["datalogic-android-sdk"],author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},c={permalink:"/releases/2021/08/06/datalogic-android-sdk-v1.29",source:"@site/blog/2021-08-06-datalogic-android-sdk-v1.29.md",description:"Datalogic Android SDK 1.29 is now available. The SDK add-on version supports Android API levels up to 30 (Android 11).",date:"2021-08-06T00:00:00.000Z",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],title:"Datalogic Android SDK 1.29",readingTime:1.24,truncated:!1,prevItem:{title:"OEMConfig v1.10.0",permalink:"/releases/2021/08/24/oemconfig-v1.10.0"},nextItem:{title:"DXU Desktop 2.1.3",permalink:"/releases/2021/07/26/dxu-desktop-v2.1.3"}},d=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Corrected defects",id:"corrected-defects",children:[]}],l={rightToc:d};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Datalogic Android SDK 1.29 is now available. The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/android/overview#sdk-add-on"}),"SDK add-on")," version supports Android API levels up to 30 (Android 11)."),Object(i.b)("p",null,"You can access the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/android/overview"}),"documentation here"),"."),Object(i.b)("h2",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added several read-only properties that can be retrieved by the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/ConfigurationManager.html"}),Object(i.b)("inlineCode",{parentName:"a"},"ConfigurationManager"))," class:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/WifiRoamingProfile.html"}),Object(i.b)("inlineCode",{parentName:"a"},"WifiRoamingProfile"))," enum for setting roaming aggressiveness"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/OffChargingModePolicy.html"}),Object(i.b)("inlineCode",{parentName:"a"},"OffChargingModePolicy"))," enum for setting the off charging mode"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/UsbFunction.html"}),Object(i.b)("inlineCode",{parentName:"a"},"USBFunction"))," enum for setting the default and current USB Transfer Protocol"),Object(i.b)("li",{parentName:"ul"},"Dual SIM Configuration for devices that support 2 SIM cards. See ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/DualSimPreferredCallsAndSms.html"}),Object(i.b)("inlineCode",{parentName:"a"},"DualSimPreferredCallsAndSms")),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/DualSimPreferredCallsAndSms.html"}),Object(i.b)("inlineCode",{parentName:"a"},"DualSimPreferredData")),", and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/DualSimStatus.html"}),Object(i.b)("inlineCode",{parentName:"a"},"DualSimStatus"))," enums."))),Object(i.b)("li",{parentName:"ul"},"New ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/Intents.html"}),Object(i.b)("inlineCode",{parentName:"a"},"Intents"))," class.  ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Cradle Intents to control the Cradle and to be notified about Cradle Events"),Object(i.b)("li",{parentName:"ul"},"Configuration Intents to change the device configuration and to be notified about configuration changes"))),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/QRCode.html#s2dEnable"}),"Scan2Deploy QRCode support"),". This allows users to scan a Scan2Deploy barcode while using any application and cause the Scan2Deploy Android UI to be displayed.  "),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/OCR.html"}),"Optical Character Recognition (OCR) support")," to the scanner. Uses includes scanning travel documentation in ",Object(i.b)("strong",{parentName:"li"},"TD1")," size and reading passports in ",Object(i.b)("strong",{parentName:"li"},"TD3")," size"),Object(i.b)("li",{parentName:"ul"},"Aded ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/MultiScan.html#partialResultMode"}),"Multiscan partial results mode")," to allow the user to collect a defined number of barcodes in a single session and transmit them at the same time."),Object(i.b)("li",{parentName:"ul"},"Added Aggressiveness support for several symbologies (",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Code39.html"}),Object(i.b)("inlineCode",{parentName:"a"},"Code39")),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Interleaved25.html"}),Object(i.b)("inlineCode",{parentName:"a"},"Interleaved25")),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Ean13.html"}),Object(i.b)("inlineCode",{parentName:"a"},"EAN13")),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Datamatrix.html"}),Object(i.b)("inlineCode",{parentName:"a"},"DataMatrix")),")"),Object(i.b)("li",{parentName:"ul"},"Added ITF14 symbology support (see ",Object(i.b)("inlineCode",{parentName:"li"},"itf14")," method inside the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Interleaved25.html"}),Object(i.b)("inlineCode",{parentName:"a"},"Interleaved25"))," class)"),Object(i.b)("li",{parentName:"ul"},"Added GS1-QR Code support (see ",Object(i.b)("inlineCode",{parentName:"li"},"gs1_qrCode")," method inside the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Interleaved25.html"}),Object(i.b)("inlineCode",{parentName:"a"},"QRCode"))," class)")),Object(i.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixed ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/WifiPowerSave.html"}),Object(i.b)("inlineCode",{parentName:"a"},"WifiPowerSave"))," enum. Replaced ",Object(i.b)("inlineCode",{parentName:"li"},"WIFI_Q_POWER")," and ",Object(i.b)("inlineCode",{parentName:"li"},"WIFI_Q_POWER_VOIP_CALLS")," with ",Object(i.b)("inlineCode",{parentName:"li"},"WIFI_POWER_SAVE_ENABLED")," and ",Object(i.b)("inlineCode",{parentName:"li"},"WIFI_POWER_SAVE_ENABLED_VOIP_CALLS")," definitions")))}b.isMDXComponent=!0},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,m=s["".concat(o,".").concat(u)]||s[u]||p[u]||i;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);