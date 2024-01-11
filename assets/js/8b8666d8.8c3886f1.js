"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[813],{82964:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var o=i(85893),n=i(11151);const a={title:"Datalogic Android SDK 1.29",author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/android/overview",tags:["datalogic-android-sdk"]},t=void 0,r={permalink:"/releases/2021/08/06/datalogic-android-sdk-v1.29",source:"@site/blog/2021-08-06-datalogic-android-sdk-v1.29.md",title:"Datalogic Android SDK 1.29",description:"Datalogic Android SDK 1.29 is now available. The SDK add-on version supports Android API levels up to 30 (Android 11).",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],readingTime:1.24,hasTruncateMarker:!1,authors:[{name:"Datalogic Android SDK",url:"/android/overview",imageURL:"/img/homepage/home-android-sdk.png"}],frontMatter:{title:"Datalogic Android SDK 1.29",author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android-sdk.png",author_url:"/android/overview",tags:["datalogic-android-sdk"]},unlisted:!1,prevItem:{title:"OEMConfig 1.10.0",permalink:"/releases/2021/08/24/oemconfig-v1.10.0"},nextItem:{title:"DXU Desktop 2.1.3",permalink:"/releases/2021/07/26/dxu-desktop-v2.1.3"}},c={authorsImageUrls:[void 0]},s=[{value:"Enhancements",id:"enhancements",level:2},{value:"Corrected defects",id:"corrected-defects",level:2}];function l(e){const d={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.p,{children:["Datalogic Android SDK 1.29 is now available. The ",(0,o.jsx)(d.a,{href:"/android/overview#sdk-add-on",children:"SDK add-on"})," version supports Android API levels up to 30 (Android 11)."]}),"\n",(0,o.jsxs)(d.p,{children:["You can access the ",(0,o.jsx)(d.a,{href:"/android/overview",children:"documentation here"}),"."]}),"\n",(0,o.jsx)(d.h2,{id:"enhancements",children:"Enhancements"}),"\n",(0,o.jsxs)(d.ul,{children:["\n",(0,o.jsxs)(d.li,{children:["Added several read-only properties that can be retrieved by the ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/ConfigurationManager.html",children:(0,o.jsx)(d.code,{children:"ConfigurationManager"})})," class:","\n",(0,o.jsxs)(d.ul,{children:["\n",(0,o.jsxs)(d.li,{children:[(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/WifiRoamingProfile.html",children:(0,o.jsx)(d.code,{children:"WifiRoamingProfile"})})," enum for setting roaming aggressiveness"]}),"\n",(0,o.jsxs)(d.li,{children:[(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/OffChargingModePolicy.html",children:(0,o.jsx)(d.code,{children:"OffChargingModePolicy"})})," enum for setting the off charging mode"]}),"\n",(0,o.jsxs)(d.li,{children:[(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/UsbFunction.html",children:(0,o.jsx)(d.code,{children:"USBFunction"})})," enum for setting the default and current USB Transfer Protocol"]}),"\n",(0,o.jsxs)(d.li,{children:["Dual SIM Configuration for devices that support 2 SIM cards. See ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/DualSimPreferredCallsAndSms.html",children:(0,o.jsx)(d.code,{children:"DualSimPreferredCallsAndSms"})}),", ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/DualSimPreferredCallsAndSms.html",children:(0,o.jsx)(d.code,{children:"DualSimPreferredData"})}),", and ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/DualSimStatus.html",children:(0,o.jsx)(d.code,{children:"DualSimStatus"})})," enums."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(d.li,{children:["New ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/Intents.html",children:(0,o.jsx)(d.code,{children:"Intents"})})," class.","\n",(0,o.jsxs)(d.ul,{children:["\n",(0,o.jsx)(d.li,{children:"Cradle Intents to control the Cradle and to be notified about Cradle Events"}),"\n",(0,o.jsx)(d.li,{children:"Configuration Intents to change the device configuration and to be notified about configuration changes"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(d.li,{children:["Added ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/QRCode.html#s2dEnable",children:"Scan2Deploy QRCode support"}),". This allows users to scan a Scan2Deploy barcode while using any application and cause the Scan2Deploy Android UI to be displayed."]}),"\n",(0,o.jsxs)(d.li,{children:["Added ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/OCR.html",children:"Optical Character Recognition (OCR) support"})," to the scanner. Uses includes scanning travel documentation in ",(0,o.jsx)(d.strong,{children:"TD1"})," size and reading passports in ",(0,o.jsx)(d.strong,{children:"TD3"})," size"]}),"\n",(0,o.jsxs)(d.li,{children:["Added ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/MultiScan.html#partialResultMode",children:"Multiscan partial results mode"})," to allow the user to collect a defined number of barcodes in a single session and transmit them at the same time."]}),"\n",(0,o.jsxs)(d.li,{children:["Added Aggressiveness support for several symbologies (",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Code39.html",children:(0,o.jsx)(d.code,{children:"Code39"})}),", ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Interleaved25.html",children:(0,o.jsx)(d.code,{children:"Interleaved25"})}),", ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Ean13.html",children:(0,o.jsx)(d.code,{children:"EAN13"})}),", ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Datamatrix.html",children:(0,o.jsx)(d.code,{children:"DataMatrix"})}),")"]}),"\n",(0,o.jsxs)(d.li,{children:["Added ITF14 symbology support (see ",(0,o.jsx)(d.code,{children:"itf14"})," method inside the ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Interleaved25.html",children:(0,o.jsx)(d.code,{children:"Interleaved25"})})," class)"]}),"\n",(0,o.jsxs)(d.li,{children:["Added GS1-QR Code support (see ",(0,o.jsx)(d.code,{children:"gs1_qrCode"})," method inside the ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/Interleaved25.html",children:(0,o.jsx)(d.code,{children:"QRCode"})})," class)"]}),"\n"]}),"\n",(0,o.jsx)(d.h2,{id:"corrected-defects",children:"Corrected defects"}),"\n",(0,o.jsxs)(d.ul,{children:["\n",(0,o.jsxs)(d.li,{children:["Fixed ",(0,o.jsx)(d.a,{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/WifiPowerSave.html",children:(0,o.jsx)(d.code,{children:"WifiPowerSave"})})," enum. Replaced ",(0,o.jsx)(d.code,{children:"WIFI_Q_POWER"})," and ",(0,o.jsx)(d.code,{children:"WIFI_Q_POWER_VOIP_CALLS"})," with ",(0,o.jsx)(d.code,{children:"WIFI_POWER_SAVE_ENABLED"})," and ",(0,o.jsx)(d.code,{children:"WIFI_POWER_SAVE_ENABLED_VOIP_CALLS"})," definitions"]}),"\n"]})]})}function h(e={}){const{wrapper:d}={...(0,n.a)(),...e.components};return d?(0,o.jsx)(d,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,d,i)=>{i.d(d,{Z:()=>r,a:()=>t});var o=i(67294);const n={},a=o.createContext(n);function t(e){const d=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(a.Provider,{value:d},e.children)}}}]);