(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(314)),i={title:"JavaPOS 1.14.065 (1.14.11-065)",author:"JavaPOS API",author_image_url:"/img/homepage/home-java.svg",author_url:"/javapos/overview",tags:["javapos"]},c={permalink:"/releases/2021/07/14/javapos-1.14.065",source:"@site/blog/2021-07-14-javapos-1.14.065.md",description:"Enhancements",date:"2021-07-14T00:00:00.000Z",tags:[{label:"javapos",permalink:"/releases/tags/javapos"}],title:"JavaPOS 1.14.065 (1.14.11-065)",readingTime:.715,truncated:!1,prevItem:{title:"DXU Desktop 2.1.3",permalink:"/releases/2021/07/26/dxu-desktop-v2.1.3"},nextItem:{title:"OEMConfig v1.9.0",permalink:"/releases/2021/07/14/oemconfig-v1.9.0"}},l=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Corrected defects",id:"corrected-defects",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Updated LabelParser to add support for MicroQR."),Object(o.b)("li",{parentName:"ul"},"Installer now automatically determines the correct version of nrjavaserial to install."),Object(o.b)("li",{parentName:"ul"},"WMI Implementation now supports ",Object(o.b)("strong",{parentName:"li"},"ModelName")," and ",Object(o.b)("strong",{parentName:"li"},"FirmwareRevision")," properties."),Object(o.b)("li",{parentName:"ul"},"Updated Function Key handling for ",Object(o.b)("em",{parentName:"li"},"PM9XXX-series")," devices to no longer search for INQ and ESC in Label data.")),Object(o.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Corrected error causing RS232 devices to not reconnect after firmware update in CentOS."),Object(o.b)("li",{parentName:"ul"},"Corrected discrepancies between the VAF specification and the IHS Parser."),Object(o.b)("li",{parentName:"ul"},"Corrected a problem causing NullPointerException when writing Avalanche registry entries."),Object(o.b)("li",{parentName:"ul"},"Corrected resetStatistics in the DLSBaseService to properly conform to UPOS."),Object(o.b)("li",{parentName:"ul"},"Corrected an error causing statistics to not be populated on Linux."),Object(o.b)("li",{parentName:"ul"},"Corrected an error in WMI Statistics causing corruption of statistics."),Object(o.b)("li",{parentName:"ul"},"Removed duplicate property names from DLSProperties."),Object(o.b)("li",{parentName:"ul"},"Corrected an error causing DEVICE_SERVICE_VERSION to not be properly updated during build.")))}s.isMDXComponent=!0},314:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);