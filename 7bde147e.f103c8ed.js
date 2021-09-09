(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),o=(n(0),n(284)),i={title:"Scan2Deploy Android Schema v1-7-0",author:"Scan2Deploy Android Schema",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android-schema",tags:["scan2deploy-android-schema"]},c={permalink:"/releases/2020/09/22/scan2deploy-schema-v1-7-0",source:"@site/blog/2020-09-22-scan2deploy-schema-v1-7-0.md",description:"* Added new Wi-Fi 6 options to network.mode, including wpa2-eap, owe, wpa3-sae, and wpa3-eap-192.",date:"2020-09-22T00:00:00.000Z",tags:[{label:"scan2deploy-android-schema",permalink:"/releases/tags/scan-2-deploy-android-schema"}],title:"Scan2Deploy Android Schema v1-7-0",readingTime:.315,truncated:!1,prevItem:{title:"Scan2Deploy Android 1.25",permalink:"/releases/2020/09/22/scan2deploy-android-v1.25"},nextItem:{title:"Datalogic WiFi Guard 1.00.1",permalink:"/releases/2020/09/21/wifiguard"}},l=[],p={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added new Wi-Fi 6 options to ",Object(o.b)("inlineCode",{parentName:"li"},"network.mode"),", including ",Object(o.b)("strong",{parentName:"li"},"wpa2-eap"),", ",Object(o.b)("strong",{parentName:"li"},"owe"),", ",Object(o.b)("strong",{parentName:"li"},"wpa3-sae"),", and ",Object(o.b)("strong",{parentName:"li"},"wpa3-eap-192"),"."),Object(o.b)("li",{parentName:"ul"},"Removed the default for ",Object(o.b)("inlineCode",{parentName:"li"},"network.mode")," (was ",Object(o.b)("strong",{parentName:"li"},"open"),")."),Object(o.b)("li",{parentName:"ul"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"network.mode")," to be a ",Object(o.b)("strong",{parentName:"li"},"required")," field."),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("strong",{parentName:"li"},"ftp")," as a ",Object(o.b)("inlineCode",{parentName:"li"},"deployment.scheme")," value."),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("inlineCode",{parentName:"li"},"ftp-username")," field, for use when using ",Object(o.b)("strong",{parentName:"li"},"ftp")," as a ",Object(o.b)("inlineCode",{parentName:"li"},"deployment.scheme")," value."),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("inlineCode",{parentName:"li"},"ftp-password")," field, for use when using ",Object(o.b)("strong",{parentName:"li"},"ftp")," as a ",Object(o.b)("inlineCode",{parentName:"li"},"deployment.scheme")," value.")))}d.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);