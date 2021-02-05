(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(199)),i={title:"Scan2Deploy Studio 1.4.4",author:"Scan2Deploy Studio",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/studio",tags:["scan2deploy-studio"]},c={permalink:"/releases/2020/12/11/scan2deploy-studio-v1.4.4",source:"@site/blog/2020-12-11-scan2deploy-studio-v1.4.4.md",description:"Scan2Deploy Studio update 1.4.4.",date:"2020-12-11T00:00:00.000Z",tags:[{label:"scan2deploy-studio",permalink:"/releases/tags/scan-2-deploy-studio"}],title:"Scan2Deploy Studio 1.4.4",readingTime:1.01,truncated:!0,prevItem:{title:"Android Studio SDK 1.25",permalink:"/releases/2021/01/12/android-studio-sdk-v1.25"},nextItem:{title:"Datalogic WiFi Guard 1.10.3",permalink:"/releases/2020/12/11/wifiguard"}},l=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Corrected defects",id:"corrected-defects",children:[]},{value:"Compatibility",id:"compatibility",children:[]}],p={rightToc:l};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Scan2Deploy Studio update 1.4.4."),Object(o.b)("p",null,"This release includes hotfixes for a few bugs, and allows users to change the Final Action setting when enabling/disabling apps on Android 8 devices."),Object(o.b)("p",null,"Downloads are available in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-studio/releases"}),"Releases")," section on the Scan2Deploy Studio Github page."),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Allow users to change the Final Action setting when enabling/disabling apps on Android 8 devices")),Object(o.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Correct a defect that caused a broken profile to be created when the Update Scan2Deploy Agent download was canceled.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Correct a defect that made it impossible to re-check the Update Scan2Deploy Agent option.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Fix an issue where loading profiles created in older versions of Scan2Deploy Studio would cause bad behavior."))),Object(o.b)("h2",{id:"compatibility"},"Compatibility"),Object(o.b)("p",null,"This release is designed to work with  ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-android/releases/tag/v1.18.3248"}),"Scan2Deploy Agent v1.18")," or later. Fortunately, Scan2Deploy Studio now makes updating to the latest version of Scan2Deploy Agent easier. Any time you create a new profile using ",Object(o.b)("strong",{parentName:"p"},"Scan2Deploy Studio 1.4"),", the latest ",Object(o.b)("strong",{parentName:"p"},"Scan2Deploy agent")," will be included in the profile automatically. If that's not the behavior you want, you can easily uncheck ",Object(o.b)("strong",{parentName:"p"},"Update Scan2Deploy Agent to latest version")," on the ",Object(o.b)("strong",{parentName:"p"},"Save and Print")," page to prevent the agent from being updated."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Update Scan2Deploy Agent to latest version",src:n(241).default})))}s.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(f,c(c({ref:t},p),{},{components:n})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},241:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/update-s2d-agent-d41367599a724aa34774f0fc2aa932bf.png"}}]);