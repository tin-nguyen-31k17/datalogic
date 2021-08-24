(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),a=(n(0),n(248)),i={title:"DXU Desktop 2.1.3",author:"DXU Desktop",author_image_url:"/img/homepage/home-dxu.png",author_url:"/dxu/overview",tags:["dxu-desktop"]},c={permalink:"/releases/2021/07/26/dxu-desktop-v2.1.3",source:"@site/blog/2021-07-26-dxu-desktop-v2.1.3.md",description:"DXU Desktop 2.1.3 is now available. It includes one minor enhancement and addresses one important defect.",date:"2021-07-26T00:00:00.000Z",tags:[{label:"dxu-desktop",permalink:"/releases/tags/dxu-desktop"}],title:"DXU Desktop 2.1.3",readingTime:1.235,truncated:!1,prevItem:{title:"Datalogic Android SDK 1.29",permalink:"/releases/2021/08/06/datalogic-android-sdk-v1.29"},nextItem:{title:"OEMConfig v1.9.0",permalink:"/releases/2021/07/14/oemconfig-v1.9.0"}},l=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Compatibility",id:"compatibility",children:[]},{value:"Corrected Defects",id:"corrected-defects",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"DXU Desktop 2.1.3 is now available. It includes one minor enhancement and addresses one important defect."),Object(a.b)("p",null,"Downloads are available in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/datalogic/dxu/releases"}),"Releases")," section on the DXU Desktop Github page."),Object(a.b)("h2",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"123113 - Added a link to the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://datalogic.github.io/dxu/overview/#include-unmodified-changes"}),"online documentation"),' next to the "Include unmodified changes" checkbox in DXU Desktop. This checkbox has implications that should be carefully considered.')),Object(a.b)("h2",{id:"compatibility"},"Compatibility"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For use on PC\u2019s running Windows 10, Windows 8.1, Windows 8 and Windows 7."),Object(a.b)("li",{parentName:"ul"},"For use with DL-Axist, Joya Touch Android, Skorpio X4 Android, Skorpio X4 WEC7, Falcon X4 Android, Falcon X4 WEC7, Memor 1, Memor 10, Memor 20."),Object(a.b)("li",{parentName:"ul"},"For use with Falcon X3+ CE6, Skorpio X3 CE6 on USBLAN only (required 2.30 fw version)."),Object(a.b)("li",{parentName:"ul"},"For WEC7 devices, DXU Desktop v2.0.0 and firmware version 1.70 are fully compatible. Earlier versions of either DXU or firmware may result in unexpected behavior."),Object(a.b)("li",{parentName:"ul"},"WEC7 DXU files created prior to firmware version 1.70 can still be applied to WEC7 devices, but can no longer be modified in DXU 2.0 or newer."),Object(a.b)("li",{parentName:"ul"},"Older versions of DXU Desktop used with WEC7 firmware v1.70 or later may crash when attempting to change Wi-Fi profiles.")),Object(a.b)("h2",{id:"corrected-defects"},"Corrected Defects"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'118594 - Resolved an issue where a user would be unable to edit a DXU configuration file that had previously been saved with only modified changes. That is, if a configuration had been saved with "Include unmodified changes" checkbox left ',Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"unchecked")),", that profile could not be edited properly.")))}d.isMDXComponent=!0},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);