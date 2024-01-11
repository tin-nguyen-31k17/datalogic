"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[7138],{98595:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=t(85893),d=t(11151);const r={title:"Datalogic Android SDK 1.33",author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/android/overview",tags:["datalogic-android-sdk"]},n=void 0,a={permalink:"/releases/2023/02/21/datalogic-android-sdk-v1.33",source:"@site/blog/2023-02-21-datalogic-android-sdk-v1.33.md",title:"Datalogic Android SDK 1.33",description:"Datalogic Android SDK 1.33 is now available. The SDK add-on version supports Android API levels up to 30 (Android 11).",date:"2023-02-21T00:00:00.000Z",formattedDate:"February 21, 2023",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],readingTime:1.06,hasTruncateMarker:!1,authors:[{name:"Datalogic Android SDK",url:"/android/overview",imageURL:"/img/homepage/home-android-sdk.png"}],frontMatter:{title:"Datalogic Android SDK 1.33",author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/android/overview",tags:["datalogic-android-sdk"]},unlisted:!1,prevItem:{title:"Datalogic Enterprise Browser 1.1.1.26",permalink:"/releases/2023/02/21/browser"},nextItem:{title:"Datalogic Launcher 1.1.2.27",permalink:"/releases/2023/02/21/launcher"}},c={authorsImageUrls:[void 0]},s=[{value:"Enhancements",id:"enhancements",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["Datalogic Android SDK 1.33 is now available. The ",(0,o.jsx)(i.a,{href:"/android/overview#sdk-add-on",children:"SDK add-on"})," version supports Android API levels up to 30 (Android 11)."]}),"\n",(0,o.jsxs)(i.p,{children:["You can access the ",(0,o.jsx)(i.a,{href:"/android/overview",children:"documentation here"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"enhancements",children:"Enhancements"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["added ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#GOOD_READ_TIMEOUT",children:(0,o.jsx)(i.code,{children:"GOOD_READ_TIMEOUT"})})," property for Barcode and Configuration Manager interfaces"]}),"\n",(0,o.jsxs)(i.li,{children:["added ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_MAC_RANDOMIZATION",children:(0,o.jsx)(i.code,{children:"WIFI_MAC_RANDOMIZATION"})})," and ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_NO_INTERNET_EXPECTED",children:(0,o.jsx)(i.code,{children:"WIFI_NO_INTERNET_EXPECTED"})})," properties for setting the Wifi Module"]}),"\n",(0,o.jsxs)(i.li,{children:["added ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_ROAMING_RETRY_TIMES",children:(0,o.jsx)(i.code,{children:"WIFI_ROAMING_RETRY_TIMES"})}),", ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_ROAMING_RECALCULATION_INTERVAL",children:(0,o.jsx)(i.code,{children:"WIFI_ROAMING_RECALCULATION_INTERVAL"})})," and ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_ROAMING_BEACON_PERIOD",children:(0,o.jsx)(i.code,{children:"WIFI_ROAMING_BEACON_PERIOD"})})," properties for setting the Wifi Roaming"]}),"\n",(0,o.jsxs)(i.li,{children:["added capability to setup the Cameras as input scanning modules:","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["new Barcode Manager methods to setup the ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/InputDevice.html",children:(0,o.jsx)(i.code,{children:"Input Device"})})," to be used for scanning (Cameras or Scan Engine) and to retrieve the supported Input Devices and the current Input Device in use;"]}),"\n",(0,o.jsxs)(i.li,{children:["new ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/CameraInputDevice.html",children:(0,o.jsx)(i.code,{children:"Camera Input Device"})})," object to setup the image capture options;"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#INPUT_TYPE",children:(0,o.jsx)(i.code,{children:"INPUT_TYPE"})})," and ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#PREVIEW_DISPLAY_MODE",children:(0,o.jsx)(i.code,{children:"PREVIEW_DISPLAY_MODE"})})," to configure the feature through the Configuration Manager interface;"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.li,{children:"improved documentation for setting up the persistence of a configuration profile through the Profile Manager"}),"\n",(0,o.jsx)(i.li,{children:"added broadcast, startactivity and startservice intent to perform device firmware upgrade"}),"\n",(0,o.jsxs)(i.li,{children:["addded method ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/cradle/DLCradleManager.html#getSlotIndex()",children:(0,o.jsx)(i.code,{children:"getSlotIndex()"})})," to retrieve the index of the slot where the device is inserted into the Cradle"]}),"\n",(0,o.jsxs)(i.li,{children:["addded method ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/cradle/DLCradleManager.html#getInsertionCount()",children:(0,o.jsx)(i.code,{children:"getInsertionCount()"})})," to retrieve the number of insertion into a slot of the Cradle"]}),"\n",(0,o.jsx)(i.li,{children:"extended Failures for supporting the JT22 Cradle"}),"\n",(0,o.jsxs)(i.li,{children:["added support to ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#CODE128_EXTENDED_ASCII",children:(0,o.jsx)(i.code,{children:"CODE128_EXTENDED_ASCII"})})," and ",(0,o.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#CODE128_CHARACTER_SET_MODE",children:(0,o.jsx)(i.code,{children:"CODE128_CHARACTER_SET_MODE"})})," to Configuration Manager interface"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,d.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>n});var o=t(67294);const d={},r=o.createContext(d);function n(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);