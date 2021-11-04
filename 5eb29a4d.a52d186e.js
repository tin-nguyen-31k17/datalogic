(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"LogIcon",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(295)),i={id:"overview",title:"Datalogic Logger",sidebar_label:"Overview"},c={unversionedId:"logger/overview",id:"logger/overview",isDocsHomePage:!1,title:"Datalogic Logger",description:"Overview",source:"@site/docs/logger/overview.md",slug:"/logger/overview",permalink:"/logger/overview",version:"current",sidebar_label:"Overview",sidebar:"Logger",next:{title:"Logger Settings",permalink:"/logger/config"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Logging Service",id:"logging-service",children:[]},{value:"Log Archives",id:"log-archives",children:[]}],s=function(e){var t=e.img;return Object(o.b)("span",{style:{display:"inline-block"}},"(",Object(o.b)("img",{src:t,style:{verticalAlign:"bottom",display:"inline"}}),")")},g={rightToc:l,LogIcon:s};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},g,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Datalogic Logger is an Android application designed to collect information logged by various software components to assist in diagnosing issues.  Once started, it runs in the background with minimal impact to device performance.  When complete, an archive of the results is generated, which can be exported from the device for further study.  It comes pre-installed on the device and is not available for download."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Logger Main Screen",src:n(336).default})),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For the most effective use of the tool, it is recommended you work with Datalogic Technical Support when utilizing Datalogic Logger."))),Object(o.b)("p",null,"Here is a list of the devices supported by Datalogic Logger and the required minimum firmware version:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Device"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Minimum firmware version"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Joya Touch"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4.03")))),Object(o.b)("h2",{id:"logging-service"},"Logging Service"),Object(o.b)("p",null,"The work of gathering log content is actually performed by an Android service.  The top portion of the main screen displays the current status of this service.  When not running, the logging behavior can be configured by tapping on the settings icon ",Object(o.b)(s,{img:"/img/shared/config.svg",mdxType:"LogIcon"}),".  The available settings are detailed in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/logger/config"}),Object(o.b)("strong",{parentName:"a"},"Logger Settings")),".  Instructions for how to collect logs can be found in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/logger/logging"}),Object(o.b)("strong",{parentName:"a"},"Collecting Logs")),"."),Object(o.b)("p",null,"In addition to the controls on the main screen, the logging service can be controlled programmatically through an API.  Details on the API can be found in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/logger/api"}),Object(o.b)("strong",{parentName:"a"},"Logger API")),"."),Object(o.b)("h2",{id:"log-archives"},"Log Archives"),Object(o.b)("p",null,"At the end of a logging session, an archive (ZIP) file is created on the device which contains the collected log information."),Object(o.b)("p",null,"The bottom portion of the main screen displays a list of the archive files that exist on the device.  Each entry contains a brief summary of its contents, and controls for processing the archive further.  More information on archive files can be found in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/logger/archives"}),Object(o.b)("strong",{parentName:"a"},"Managing Log Archives")),"."))}b.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),g=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=g(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=g(n),d=r,u=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},336:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mainStop-5866a963349a508c524739b8d1c120d7.png"}}]);