(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(237)),o={title:"Datalogic WiFi Guard 1.10.3",author:"Datalogic WiFi Guard",author_image_url:"/img/homepage/home-wifi-guard.png",author_url:"/wifiguard/overview",tags:["wifi-guard"]},c={permalink:"/releases/2020/12/11/wifiguard",source:"@site/blog/2020-12-11-wifiguard.md",description:"Compatibility",date:"2020-12-11T00:00:00.000Z",tags:[{label:"wifi-guard",permalink:"/releases/tags/wifi-guard"}],title:"Datalogic WiFi Guard 1.10.3",readingTime:.71,truncated:!1,prevItem:{title:"Datalogic Android SDK 1.25",permalink:"/releases/2021/01/12/datalogic-android-sdk-v1.25"},nextItem:{title:"Scan2Deploy Studio 1.4.4",permalink:"/releases/2020/12/11/scan2deploy-studio-v1.4.4"}},l=[{value:"Compatibility",id:"compatibility",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Corrected defects",id:"corrected-defects",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"compatibility"},"Compatibility"),Object(i.b)("p",null,"The application requires the following minimum firmware versions:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Device"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Minimum firmware version"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Skorpio X5"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.08.044")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Memor 20"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.07.01")))),Object(i.b)("h2",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Datalogic WiFi Guard is now supported on Memor 20."),Object(i.b)("li",{parentName:"ul"},"Improved automatic pan/zoom when graphing to keep data visible and maximize use of the screen."),Object(i.b)("li",{parentName:"ul"},"Added checks for disabled Wi-Fi before attempting data collection."),Object(i.b)("li",{parentName:"ul"},"Improved Ping error reporting for an unreachable destination."),Object(i.b)("li",{parentName:"ul"},"Improved color contrast for data series.")),Object(i.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Statistics graph displays the correct RSSI Roaming Threshold setting."),Object(i.b)("li",{parentName:"ul"},"Graph Storage buttons are not always disabled with an empty graph."),Object(i.b)("li",{parentName:"ul"},"Corrected miscellaneous graphing display issues:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Axis labels may overlap."),Object(i.b)("li",{parentName:"ul"},"Corrected scale used when loading Statistics graph files."),Object(i.b)("li",{parentName:"ul"},"Connected AP indicator in the legend does not update when it changes.")))))}p.isMDXComponent=!0},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),s=a,m=b["".concat(o,".").concat(s)]||b[s]||d[s]||i;return r?n.a.createElement(m,c(c({ref:t},u),{},{components:r})):n.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);