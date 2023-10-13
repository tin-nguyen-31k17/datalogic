"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[8589],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75933:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Scan2Deploy Agent 2.0.8",author:"Scan2Deploy Agent",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},c=void 0,p={permalink:"/releases/2023/04/27/scan2deploy-agent",source:"@site/blog/2023-04-27-scan2deploy-agent.md",title:"Scan2Deploy Agent 2.0.8",description:"Enhancements",date:"2023-04-27T00:00:00.000Z",formattedDate:"April 27, 2023",tags:[{label:"scan2deploy-android",permalink:"/releases/tags/scan-2-deploy-android"}],readingTime:.7,hasTruncateMarker:!1,authors:[{name:"Scan2Deploy Agent",url:"/scan2deploy/android",imageURL:"/img/homepage/home-scan2deploy.png"}],frontMatter:{title:"Scan2Deploy Agent 2.0.8",author:"Scan2Deploy Agent",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},prevItem:{title:"JavaScript SDK 1.0.2",permalink:"/releases/2023/04/27/javascript"},nextItem:{title:"JavaScript SDK 1.0.1",permalink:"/releases/2023/04/24/javascript"}},s={authorsImageUrls:[void 0]},u=[{value:"Enhancements",id:"enhancements",level:2},{value:"Corrected defects",id:"corrected-defects",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improved feedback of multi-label profiles."),(0,o.kt)("li",{parentName:"ul"},"Added feedback from OEMConfig."),(0,o.kt)("li",{parentName:"ul"},"Added feedback from OTA updates."),(0,o.kt)("li",{parentName:"ul"},"Improved script command processing."),(0,o.kt)("li",{parentName:"ul"},"Improved feedback when using Agent service."),(0,o.kt)("li",{parentName:"ul"},"Increased performance by reducing time to process profile."),(0,o.kt)("li",{parentName:"ul"},"Enhanced profile message content."),(0,o.kt)("li",{parentName:"ul"},"Added a log file of the previous profile.")),(0,o.kt)("h2",{id:"corrected-defects"},"Corrected defects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Corrected numerous stability issues."),(0,o.kt)("li",{parentName:"ul"},"Corrected issue where Profile Manager policies might fail to apply on devices with limited space in the enterprise partition."),(0,o.kt)("li",{parentName:"ul"},"Corrected issue failing to complete deployment when installing Keyboard mapping files."),(0,o.kt)("li",{parentName:"ul"},'Corrected "Unable to reach archive server" error when switching from an existing network connection to a different one defined in a profile.'),(0,o.kt)("li",{parentName:"ul"},"Corrected intermittent failures when installing Visual Formatter files."),(0,o.kt)("li",{parentName:"ul"},"Added more filters to avoid misinterpreting short Code-128 labels as old DL-Stager labels.")))}f.isMDXComponent=!0}}]);