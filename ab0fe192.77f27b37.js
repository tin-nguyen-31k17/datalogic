(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{243:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),o=(t(0),t(322)),i={title:"Scan2Deploy Android Schema v1-7-0",author:"Scan2Deploy Android Schema",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android-schema",tags:["scan2deploy-android-schema"]},c={permalink:"/releases/2020/09/22/scan2deploy-schema-v1-7-0",source:"@site/blog/2020-09-22-scan2deploy-schema-v1-7-0.md",description:"* Added new Wi-Fi 6 options to network.mode, including wpa2-eap, owe, wpa3-sae, and wpa3-eap-192.",date:"2020-09-22T00:00:00.000Z",tags:[{label:"scan2deploy-android-schema",permalink:"/releases/tags/scan-2-deploy-android-schema"}],title:"Scan2Deploy Android Schema v1-7-0",readingTime:.315,truncated:!1,prevItem:{title:"Scan2Deploy Studio 1.4.3",permalink:"/releases/2020/10/05/scan2deploy-studio-v1.4.3"},nextItem:{title:"Scan2Deploy Android 1.25",permalink:"/releases/2020/09/22/scan2deploy-android-v1.25"}},l=[],p={rightToc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added new Wi-Fi 6 options to ",Object(o.b)("inlineCode",{parentName:"li"},"network.mode"),", including ",Object(o.b)("strong",{parentName:"li"},"wpa2-eap"),", ",Object(o.b)("strong",{parentName:"li"},"owe"),", ",Object(o.b)("strong",{parentName:"li"},"wpa3-sae"),", and ",Object(o.b)("strong",{parentName:"li"},"wpa3-eap-192"),"."),Object(o.b)("li",{parentName:"ul"},"Removed the default for ",Object(o.b)("inlineCode",{parentName:"li"},"network.mode")," (was ",Object(o.b)("strong",{parentName:"li"},"open"),")."),Object(o.b)("li",{parentName:"ul"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"network.mode")," to be a ",Object(o.b)("strong",{parentName:"li"},"required")," field."),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("strong",{parentName:"li"},"ftp")," as a ",Object(o.b)("inlineCode",{parentName:"li"},"deployment.scheme")," value."),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("inlineCode",{parentName:"li"},"ftp-username")," field, for use when using ",Object(o.b)("strong",{parentName:"li"},"ftp")," as a ",Object(o.b)("inlineCode",{parentName:"li"},"deployment.scheme")," value."),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("inlineCode",{parentName:"li"},"ftp-password")," field, for use when using ",Object(o.b)("strong",{parentName:"li"},"ftp")," as a ",Object(o.b)("inlineCode",{parentName:"li"},"deployment.scheme")," value.")))}d.isMDXComponent=!0},322:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=r,b=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?a.a.createElement(b,c(c({ref:n},p),{},{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);