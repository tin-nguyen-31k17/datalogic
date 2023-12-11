"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[9875],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(a),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(g,o(o({ref:e},u),{},{components:a})):n.createElement(g,o({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46836:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"disable-usb-data-transfer",title:"Disable USB Data Transfer",sidebar_label:"Disable USB Data Transfer"},o=void 0,l={unversionedId:"integritykit/disable-usb-data-transfer",id:"integritykit/disable-usb-data-transfer",title:"Disable USB Data Transfer",description:"Datalogic Integrity Kit provides a mechanism to completely disable the USB data transfer, which can prevent attackers from using the USB interface to gain unauthorized access to the device's data or functionality. One scenario where USB data transfer could be exploited is through the use of malicious USB devices. An attacker could create a malicious USB device that, when plugged into the device, could execute commands to steal data, modify firmware or software, or install malware. With Datalogic disable USB data transfer mitigation strategy, the risk of such an attack is greatly reduced.",source:"@site/docs/integritykit/disable-usb-data-transfer.md",sourceDirName:"integritykit",slug:"/integritykit/disable-usb-data-transfer",permalink:"/integritykit/disable-usb-data-transfer",draft:!1,tags:[],version:"current",frontMatter:{id:"disable-usb-data-transfer",title:"Disable USB Data Transfer",sidebar_label:"Disable USB Data Transfer"},sidebar:"IntegrityKit",previous:{title:"Secure Boot Protection",permalink:"/integritykit/secure-boot-protection"}},c={},s=[],u={toc:s},d="wrapper";function p(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Datalogic Integrity Kit provides a mechanism to completely disable the USB data transfer, which can prevent attackers from using the USB interface to gain unauthorized access to the device's data or functionality. One scenario where USB data transfer could be exploited is through the use of malicious USB devices. An attacker could create a malicious USB device that, when plugged into the device, could execute commands to steal data, modify firmware or software, or install malware. With ",(0,r.kt)("strong",{parentName:"p"},"Datalogic")," disable USB data transfer mitigation strategy, the risk of such an attack is greatly reduced."),(0,r.kt)("p",null,"To disable USB data transfer through the Datalogic SDK on JT22 use the following code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.datalogic.device.configuration.ConfigurationManager; \nimport com.datalogic.device.configuration.PropertyID;\n\nConfigurationManager cm = new ConfigurationManager(aContext); \n\ncm.getPropertyById(PropertyID.USB_DATA).set(true); //or .set(false); \ncm.commit(); \n")),(0,r.kt)("p",null,"To disable USB data transfer through the Datalogic SDK on Memor 10 and Memor 11 using the following intent:"),(0,r.kt)("p",null,"Intent action: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"com.datalogic.extension.selfshopping.configuration.USB_ENABLE\n\nIntent extra: value, type int\n\n0: disable all (USB data/chare)\n1: enable all (USB data/chare)\n2: enable USB data only\n3: enable USB charge only\n")),(0,r.kt)("p",null,"Sample code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'int usbEnabled = 1;\n\nIntent intent = new Intent();\n\nintent.setAction("com.datalogic.extension.selfshopping.configuration.USB_ENABLE");\nintent.putExtra("value", usbEnabled);\n\nsendBroadcast(intent);\n')),(0,r.kt)("p",null,"The following table shows which devices support this feature:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Device")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Supported")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memor 11"),(0,r.kt)("td",{parentName:"tr",align:null},"YES (requires specific configuration)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memor 10"),(0,r.kt)("td",{parentName:"tr",align:null},"YES (requires specific configuration)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Joya Touch 22"),(0,r.kt)("td",{parentName:"tr",align:null},"YES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Joya Touch A6"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memor 20"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skorpio X5"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memor K"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))))}p.isMDXComponent=!0}}]);