(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{199:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},s=function(e){var r=l(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=l(t),b=n,f=s["".concat(i,".").concat(b)]||s[b]||p[b]||o;return t?a.a.createElement(f,d(d({ref:r},c),{},{components:t})):a.a.createElement(f,d({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var d={};for(var u in r)hasOwnProperty.call(r,u)&&(d[u]=r[u]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},81:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return d})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(199)),i={title:"DXU Android v1.33",author:"DXU Android",author_image_url:"/img/homepage/home-dxu.png",author_url:"/dxu/android",tags:["dxu-android"]},d={permalink:"/releases/2021/02/04/dxu-android-v1.33",source:"@site/blog/2021-02-04-dxu-android-v1.33.md",description:"The last release of DXU Android released on Github prior to v1.33 was v1.29. Several version of DXU Android (v1.30, v1.31, v1.32) are included in device firmware, but have not been made available separately on Github.",date:"2021-02-04T00:00:00.000Z",tags:[{label:"dxu-android",permalink:"/releases/tags/dxu-android"}],title:"DXU Android v1.33",readingTime:.625,truncated:!1,nextItem:{title:"Android Studio SDK 1.25",permalink:"/releases/2021/01/12/android-studio-sdk-v1.25"}},u=[{value:"Corrected defects",id:"corrected-defects",children:[{value:"DXU 1.33.5991",id:"dxu-1335991",children:[]},{value:"DXU 1.32.4399",id:"dxu-1324399",children:[]},{value:"DXU 1.31.4151",id:"dxu-1314151",children:[]},{value:"DXU 1.30.3690",id:"dxu-1303690",children:[]}]}],c={rightToc:u};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The last release of DXU Android released on Github prior to v1.33 was v1.29. Several version of DXU Android (v1.30, v1.31, v1.32) are included in device firmware, but have not been made available separately on Github."),Object(o.b)("h2",{id:"corrected-defects"},"Corrected defects"),Object(o.b)("h3",{id:"dxu-1335991"},"DXU 1.33.5991"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixed an error that prevented DXU desktop from getting all parameters from Memor 20")),Object(o.b)("h3",{id:"dxu-1324399"},"DXU 1.32.4399"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixed an issue causing issues on Android devices. DXU always returned error \u201cError While Loading Configuration\u201d when importing a Skorpio X5 DXU configuration file")),Object(o.b)("h3",{id:"dxu-1314151"},"DXU 1.31.4151"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Updated scanner/decoding settings for use on Skorpio X5"),Object(o.b)("li",{parentName:"ul"},"Resolved issue where Surelock could cause a system crash")),Object(o.b)("h3",{id:"dxu-1303690"},"DXU 1.30.3690"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixed DXU Agent issues caused by setting target API level to 28 (Android 9)")))}l.isMDXComponent=!0}}]);