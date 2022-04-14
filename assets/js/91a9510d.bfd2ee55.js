"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[9396],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10925:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"Scan2Deploy Android 1.25",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},c=void 0,d={permalink:"/releases/2020/09/22/scan2deploy-android-v1.25",source:"@site/blog/2020-09-22-scan2deploy-android-v1.25.md",title:"Scan2Deploy Android 1.25",description:"Enhancements",date:"2020-09-22T00:00:00.000Z",formattedDate:"September 22, 2020",tags:[{label:"scan2deploy-android",permalink:"/releases/tags/scan-2-deploy-android"}],readingTime:.695,truncated:!0,authors:[{name:"Scan2Deploy Android",url:"/scan2deploy/android",imageURL:"/img/homepage/home-scan2deploy.png"}],frontMatter:{title:"Scan2Deploy Android 1.25",author:"Scan2Deploy Android",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/android",tags:["scan2deploy-android"]},prevItem:{title:"Scan2Deploy Studio 1.4.3",permalink:"/releases/2020/10/05/scan2deploy-studio-v1.4.3"},nextItem:{title:"Scan2Deploy Android Schema v1-7-0",permalink:"/releases/2020/09/22/scan2deploy-schema-v1-7-0"}},p={authorsImageUrls:[void 0]},s=[{value:"Enhancements",id:"enhancements",level:2}],u={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added support for downloading profiles using FTP. See ",(0,o.kt)("inlineCode",{parentName:"li"},"scheme"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ftp-username"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"ftp-password")," in the ",(0,o.kt)("a",{parentName:"li",href:"/scan2deploy/android-schema#deployment"},"deployment section of the Android schema"),"."),(0,o.kt)("li",{parentName:"ul"},"Added WPA3 support for some devices running Android 9 and above. See new mode values in the ",(0,o.kt)("a",{parentName:"li",href:"/scan2deploy/android-schema#deployment"},"deployment section of the Android schema"),"."),(0,o.kt)("li",{parentName:"ul"},"Allow setting a different system default launcher. See new ",(0,o.kt)("a",{parentName:"li",href:"/scan2deploy/android-schema#default-home"},"default-home section")," in the Android schema."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/scan2deploy/android#start-service-intent"},"Added a service")," that listens for requests to apply Scan2Deploy profiles without the Scan2Deploy UI (activity) being visible. The profile will be applied silently, without any Scan2Deploy UI being displayed in the foreground.")))}m.isMDXComponent=!0}}]);