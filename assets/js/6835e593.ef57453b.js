"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[7866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(r),b=n,g=s["".concat(l,".").concat(b)]||s[b]||u[b]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:n,i[1]=d;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},71949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"keyboard",title:"Keyboard Wedge",sidebar_label:"Keyboard Wedge"},i=void 0,d={unversionedId:"wedge/keyboard",id:"wedge/keyboard",title:"Keyboard Wedge",description:"The goal of the keyboard wedge is to enable the possibility to identify the barcode reader as Keyboad input. This means that all text boxes in your application can be filled with red text by a barcode.",source:"@site/docs/wedge/keyboard.md",sourceDirName:"wedge",slug:"/wedge/keyboard",permalink:"/wedge/keyboard",draft:!1,tags:[],version:"current",frontMatter:{id:"keyboard",title:"Keyboard Wedge",sidebar_label:"Keyboard Wedge"},sidebar:"Wedge",previous:{title:"Overview",permalink:"/wedge/overview"},next:{title:"Intent Wedge",permalink:"/wedge/intent"}},l={},c=[],p={toc:c},s="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The goal of the keyboard wedge is to enable the possibility to identify the barcode reader as Keyboad input. This means that all text boxes in your application can be filled with red text by a barcode."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sample Image",src:r(87046).Z,width:"1298",height:"420"})," "),(0,n.kt)("p",null,"The keyboard wedge properties are editable through the ",(0,n.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/KeyboardWedge.html"},"SDK"),", ",(0,n.kt)("a",{parentName:"p",href:"https://datalogic.github.io/oemconfig/scanner-settings/#keyboard-wedge"},"OEM Config"),", ",(0,n.kt)("a",{parentName:"p",href:"https://datalogic.github.io/scan2deploy/scanner-and-device-page/"},"Scan2Deploy Studio"),", and Datalogic Settings."),(0,n.kt)("p",null,"To access the Keyboard Wedge settings, tap Datalogic Settings -> Scanner & Decoder -> Wedge. Under the Keyboard Wedge section you can find the following options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enable keyboard wedge"),"\nEnable the captured data to be sent to the foreground application in the form of key events. The default value is true.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keyboard wedge only on focus"),"\nEnable captured data to be sent as key events to the current text area with active keyboard input. The default value is false.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keyboard wedge input mode"),"\nThe input mode for keyboard wedge. Valid values are displayed in a single select list. The default value is Text Injection."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sample Image",src:r(40448).Z,width:"269",height:"302"})))}u.isMDXComponent=!0},87046:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/keyboard-c596f5bec11a2d5df703bbfd575806a4.png"},40448:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/keyboard_settings-d4a6856e34354cbdeca783fd361648d0.png"}}]);