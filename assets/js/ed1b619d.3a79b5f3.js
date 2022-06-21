"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[6776],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"overview",title:"Handheld Core SDK",sidebar_label:"Overview"},p=void 0,u={unversionedId:"hhs/overview",id:"hhs/overview",title:"Handheld Core SDK",description:"Overview",source:"@site/docs/hhs/overview.md",sourceDirName:"hhs",slug:"/hhs/overview",permalink:"/hhs/overview",tags:[],version:"current",frontMatter:{id:"overview",title:"Handheld Core SDK",sidebar_label:"Overview"},sidebar:"CoreSDK",next:{title:"Sample Apps",permalink:"/hhs/samples"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Supported devices",id:"supported-devices",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Using the SDK",id:"using-the-sdk",level:2}],d={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Datalogic Core SDK enables an Android app to interface with Datalogic Bluetooth\xae hand held scanners and to access some advanced scanner features."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ease the discovery and pairing of Datalogic Bluetooth\xae hand-held scanners"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Automatic generation of barcodes for passkey entry"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Receive the barcodes read by the scanner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Read diagnostic information"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scanner id, device name, sw release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Battery level")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Health status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Statistics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"...and more")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change the scanner configuration"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change beeper volume")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enable/disable vibration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set body LED color")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"...and more")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Control the scanner through action commands"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Emulate trigger press/release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enable/disable scanner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Emit beep")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Batch mode: start, dump, clear")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"...and more")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automatic recognition of SDK-enabled communication endpoints"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No configuration is needed on the scanner to let it work with SDK-enabled apps")))),(0,i.kt)("h2",{id:"supported-devices"},"Supported devices"),(0,i.kt)("p",null,"The Datalogic Core SDK is supported by the ",(0,i.kt)("a",{parentName:"p",href:"https://www.datalogic.com/eng/retail/hand-held-scanners/rida-dbt6400-retail-pd-714.html"},"RIDA\u2122 DBT6400")," cordless imager."),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"The detailed documentation of the Datalogic Core SDK is available here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datalogic.github.io/hhs-android-core-sdk-docs/index.html"},"API documentation"))),(0,i.kt)("h2",{id:"using-the-sdk"},"Using the SDK"),(0,i.kt)("p",null,"The Datalogic Core SDK is released as an Android binary library. The ",(0,i.kt)("a",{parentName:"p",href:"/hhs/samples"},"Datalogic Core SDK Demo App")," includes the Android Archive (AAR) file of the library and shows how the Datalogic Core SDK can be integrated inside an Android application."),(0,i.kt)("p",null,"For further information about Android libraries and how to use them, please refer to the following page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/projects/android-library"},"Create an Android library"))))}m.isMDXComponent=!0}}]);