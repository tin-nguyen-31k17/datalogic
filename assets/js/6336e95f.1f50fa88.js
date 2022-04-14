"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[9204],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21481:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"JavaPOS 1.14.059 (1.14.09-059)",author:"JavaPOS API",author_image_url:"/img/homepage/home-java.svg",author_url:"/javapos/overview",tags:["javapos"]},s=void 0,c={permalink:"/releases/2020/02/05/javapos-1.14.059",source:"@site/blog/2020-02-05-javapos-1.14.059.md",title:"JavaPOS 1.14.059 (1.14.09-059)",description:"Enhancements",date:"2020-02-05T00:00:00.000Z",formattedDate:"February 5, 2020",tags:[{label:"javapos",permalink:"/releases/tags/javapos"}],readingTime:1.045,truncated:!1,authors:[{name:"JavaPOS API",url:"/javapos/overview",imageURL:"/img/homepage/home-java.svg"}],frontMatter:{title:"JavaPOS 1.14.059 (1.14.09-059)",author:"JavaPOS API",author_image_url:"/img/homepage/home-java.svg",author_url:"/javapos/overview",tags:["javapos"]},prevItem:{title:"JavaPOS 1.14.060 (1.14.10-060)",permalink:"/releases/2020/04/08/javapos-1.14.060"}},u={authorsImageUrls:[void 0]},p=[{value:"Enhancements",id:"enhancements",level:2},{value:"Corrected defects",id:"corrected-defects",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Firmware update now always sends reset to the device."),(0,o.kt)("li",{parentName:"ul"},"Added support for DLS Secondary Handheld Serial Number into IHS Parser."),(0,o.kt)("li",{parentName:"ul"},"Serial port handling refactored and improved."),(0,o.kt)("li",{parentName:"ul"},"Statistics has been rewritten entirely and now uses a configurable parsing table to parse Information, Health and Statistics responses.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("a",{parentName:"li",href:"/javapos/configref/ihsparsercsv"},"IHSParser.csv")," to installation location."),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("strong",{parentName:"li"},"IHSParserFile")," configuration option to ",(0,o.kt)("a",{parentName:"li",href:"/javapos/configref/dlsproperties"},"dls.properties"),"."))),(0,o.kt)("li",{parentName:"ul"},"Added a 9XXX-series custom Direct I/O command to support Cradled Host functionality."),(0,o.kt)("li",{parentName:"ul"},"Firmware update now immediately exits on a ",(0,o.kt)("strong",{parentName:"li"},"BEL")," response from the device."),(0,o.kt)("li",{parentName:"ul"},"Added support for battery specific fields to statistics.")),(0,o.kt)("h2",{id:"corrected-defects"},"Corrected defects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Corrected an error in WinXXHid.dll nativeSendData causing crashes."),(0,o.kt)("li",{parentName:"ul"},"Corrected an error in ",(0,o.kt)("strong",{parentName:"li"},"JavaPOSTest")," causing Cell Phone Scan Exit to call Cell Phone Scan Enter."),(0,o.kt)("li",{parentName:"ul"},"Added a secondary search for comparing firmware versions."),(0,o.kt)("li",{parentName:"ul"},"Corrected an error in ",(0,o.kt)("strong",{parentName:"li"},"JavaPOSTest")," causing the previous weight to remain on screen."),(0,o.kt)("li",{parentName:"ul"},"Corrected several issues in Statistics implementation."),(0,o.kt)("li",{parentName:"ul"},"Removed the Edit menu from ",(0,o.kt)("strong",{parentName:"li"},"JavaPOSTest")," as it was not being used."),(0,o.kt)("li",{parentName:"ul"},"Removed ",(0,o.kt)("em",{parentName:"li"},"java.ext.dirs")," dependencies from the JavaPOS API."),(0,o.kt)("li",{parentName:"ul"},"Converted Linux USB-OEM implementation to an asynchronous listener."),(0,o.kt)("li",{parentName:"ul"},"Corrected an encoding error in parsing HDL files."),(0,o.kt)("li",{parentName:"ul"},"Corrected an error causing Health checks to fail after firmware update.")))}d.isMDXComponent=!0}}]);