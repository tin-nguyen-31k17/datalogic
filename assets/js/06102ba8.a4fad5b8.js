"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[6721],{25438:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var n=o(85893),a=o(11151);const t={title:"Datalogic Android SDK 1.28",author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/android/overview",tags:["datalogic-android-sdk"]},r=void 0,d={permalink:"/releases/2021/06/14/datalogic-android-sdk-v1.28",source:"@site/blog/2021-06-14-datalogic-android-sdk-v1.28.md",title:"Datalogic Android SDK 1.28",description:"Datalogic Android SDK 1.28 is now available. The SDK add-on version supports Android API levels up to 30 (Android 11).",date:"2021-06-14T00:00:00.000Z",formattedDate:"June 14, 2021",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],readingTime:.775,hasTruncateMarker:!1,authors:[{name:"Datalogic Android SDK",url:"/android/overview",imageURL:"/img/homepage/home-android-sdk.png"}],frontMatter:{title:"Datalogic Android SDK 1.28",author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/android/overview",tags:["datalogic-android-sdk"]},unlisted:!1,prevItem:{title:"OEMConfig 1.9.0",permalink:"/releases/2021/07/14/oemconfig-v1.9.0"},nextItem:{title:"Datalogic Android SDK 1.27",permalink:"/releases/2021/05/14/datalogic-android-sdk-v1.27"}},s={authorsImageUrls:[void 0]},c=[{value:"Enhancements",id:"enhancements",level:2}];function l(e){const i={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Datalogic Android SDK 1.28 is now available. The ",(0,n.jsx)(i.a,{href:"/android/overview#sdk-add-on",children:"SDK add-on"})," version supports Android API levels up to 30 (Android 11)."]}),"\n",(0,n.jsxs)(i.p,{children:["You can access the ",(0,n.jsx)(i.a,{href:"/android/overview",children:"documentation here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"enhancements",children:"Enhancements"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Improved description of ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/battery/DLBatteryManager.html#initBatteryEvents(android.content.Context)",children:"Battery Event initialization APIs"}),", indicating the proper way to call it from a BroadcastReceiver."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Improved description to inform users that scanner properties cannot be changed when ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScanMode.html",children:"ScanMode"}),' is set to "Always on" (ALWAYS_ON).']}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Added AppManager API to revoke permissions to apps: ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/AppManager.html#revokePermissions(java.lang.String,%20java.util.ArrayList%3Cjava.lang.String%3E)",children:"revokePermissions()"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Added ability to get and set Wi-Fi channel configuration values. See the ",(0,n.jsx)(i.strong,{children:"Class Overview"})," section of ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html",children:"PropertyID"})," class to see a hierarchy of the ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyGroupID.html#WIFI_CHANNELS_GROUP",children:"WIFI_CHANNELS_GROUP"})," settings. Enums for every supported Wi-Fi channel are available (",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_CHANNEL_1",children:"WIFI_CHANNEL_1"})," for instance), as well as higher level settings  ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_COUNTRY_CODE",children:"WIFI_COUNTRY_CODE"})," and ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html#WIFI_UNLOCK_CHANNELS",children:"WIFI_UNLOCK_CHANNELS"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["You can now retrieve ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html#SERIAL_NUMBER",children:"Serial number"})," & ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html#PRODUCT_NUMBER",children:"Product number"})," in the ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html",children:"SYSTEM"})," class."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Added support for the GS1-Datamatrix ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/Symbology.html",children:"symbology"})," (GS1_DATAMATRIX)."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Added support to configure the Scanner ",(0,n.jsx)(i.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScannerOptions.html#illuminationTime",children:"illumination pulse length"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,i,o)=>{o.d(i,{Z:()=>d,a:()=>r});var n=o(67294);const a={},t=n.createContext(a);function r(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);