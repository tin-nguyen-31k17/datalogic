"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[1459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(v,i(i({ref:t},p),{},{components:r})):a.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"JavaPOS 1.14.065 (1.14.11-065)",author:"JavaPOS API",author_image_url:"/img/homepage/home-java.svg",author_url:"/javapos/overview",tags:["javapos"]},i=void 0,l={permalink:"/releases/2021/07/14/javapos-1.14.065",source:"@site/blog/2021-07-14-javapos-1.14.065.md",title:"JavaPOS 1.14.065 (1.14.11-065)",description:"Enhancements",date:"2021-07-14T00:00:00.000Z",formattedDate:"July 14, 2021",tags:[{label:"javapos",permalink:"/releases/tags/javapos"}],readingTime:.715,hasTruncateMarker:!1,authors:[{name:"JavaPOS API",url:"/javapos/overview",imageURL:"/img/homepage/home-java.svg"}],frontMatter:{title:"JavaPOS 1.14.065 (1.14.11-065)",author:"JavaPOS API",author_image_url:"/img/homepage/home-java.svg",author_url:"/javapos/overview",tags:["javapos"]},prevItem:{title:"DXU Desktop 2.1.3",permalink:"/releases/2021/07/26/dxu-desktop-v2.1.3"},nextItem:{title:"OEMConfig 1.9.0",permalink:"/releases/2021/07/14/oemconfig-v1.9.0"}},c={authorsImageUrls:[void 0]},s=[{value:"Enhancements",id:"enhancements",level:2},{value:"Corrected defects",id:"corrected-defects",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"enhancements"},"Enhancements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated LabelParser to add support for MicroQR."),(0,n.kt)("li",{parentName:"ul"},"Installer now automatically determines the correct version of nrjavaserial to install."),(0,n.kt)("li",{parentName:"ul"},"WMI Implementation now supports ",(0,n.kt)("strong",{parentName:"li"},"ModelName")," and ",(0,n.kt)("strong",{parentName:"li"},"FirmwareRevision")," properties."),(0,n.kt)("li",{parentName:"ul"},"Updated Function Key handling for ",(0,n.kt)("em",{parentName:"li"},"PM9XXX-series")," devices to no longer search for INQ and ESC in Label data.")),(0,n.kt)("h2",{id:"corrected-defects"},"Corrected defects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Corrected error causing RS232 devices to not reconnect after firmware update in CentOS."),(0,n.kt)("li",{parentName:"ul"},"Corrected discrepancies between the VAF specification and the IHS Parser."),(0,n.kt)("li",{parentName:"ul"},"Corrected a problem causing NullPointerException when writing Avalanche registry entries."),(0,n.kt)("li",{parentName:"ul"},"Corrected resetStatistics in the DLSBaseService to properly conform to UPOS."),(0,n.kt)("li",{parentName:"ul"},"Corrected an error causing statistics to not be populated on Linux."),(0,n.kt)("li",{parentName:"ul"},"Corrected an error in WMI Statistics causing corruption of statistics."),(0,n.kt)("li",{parentName:"ul"},"Removed duplicate property names from DLSProperties."),(0,n.kt)("li",{parentName:"ul"},"Corrected an error causing DEVICE_SERVICE_VERSION to not be properly updated during build.")))}m.isMDXComponent=!0}}]);