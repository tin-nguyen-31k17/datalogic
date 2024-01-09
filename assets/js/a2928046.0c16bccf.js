"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[67],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=n,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return r?i.createElement(f,o(o({ref:t},p),{},{components:r})):i.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}y.displayName="MDXCreateElement"},28928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const a={id:"overview",title:"Integrity Kit",sidebar_label:"Overview"},o=void 0,c={unversionedId:"integritykit/overview",id:"integritykit/overview",title:"Integrity Kit",description:"Overview",source:"@site/docs/integritykit/overview.md",sourceDirName:"integritykit",slug:"/integritykit/overview",permalink:"/integritykit/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Integrity Kit",sidebar_label:"Overview"},sidebar:"IntegrityKit",next:{title:"JTAG Locking System",permalink:"/integritykit/jtag-locking-system"}},s={},l=[{value:"Overview",id:"overview",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Mobile devices based on the Android operating system are at risk of hardware tampering, which involves modifying a device's hardware to gain unauthorized access to its data or functionality. Hardware tampering can allow attackers to gain access to sensitive data, modify the device's firmware or software, turn the device into a surveillance tool, or disable critical functionality. These risks can be difficult to detect and bypass many of the security measures built into the Android operating system, making hardware tampering a significant security risk for mobile devices."),(0,n.kt)("p",null,"Datalogic Integrity Kit has implemented a strong mitigation strategy for the security risks associated with hardware tampering on Android-based mobile devices, that consist in three key components:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/integritykit/jtag-locking-system"},"JTAG Locking System")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/integritykit/secure-boot-protection"},"Secure Boot Protection")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/integritykit/disable-usb-data-transfer"},"Disable USB Data Transfer")))}d.isMDXComponent=!0}}]);