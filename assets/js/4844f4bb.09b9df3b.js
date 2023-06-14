"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[9399],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return v}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,v=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return a?n.createElement(v,i(i({ref:t},d),{},{components:a})):n.createElement(v,i({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47471:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"overview",title:"Cordova SDK",sidebar_label:"Overview"},c=void 0,p={unversionedId:"cordova/overview",id:"cordova/overview",title:"Cordova SDK",description:"The Datalogic Cordova SDK has been deprecated and will no longer be updated.",source:"@site/docs/cordova/overview.md",sourceDirName:"cordova",slug:"/cordova/overview",permalink:"/cordova/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Cordova SDK",sidebar_label:"Overview"},sidebar:"AndroidStudioSDK",previous:{title:"Sample Apps",permalink:"/xamarin/samples"},next:{title:"Frequently Asked Questions",permalink:"/cordova/faq"}},d={},u=[{value:"Installation",id:"installation",level:2}],s={toc:u},m="wrapper";function v(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"This SDK has been deprecated",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Datalogic Cordova SDK has been deprecated and will no longer be updated.")),(0,o.kt)("admonition",{title:"Distribution",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The Datalogic Cordova SDK is distributed using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@datalogic/cordova-plugin-datalogic"},"npm"),".  More information can be found ",(0,o.kt)("a",{parentName:"p",href:"/cordova/overview#installation"},"below"),".")),(0,o.kt)("p",null,"Library that exposes the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datalogic/datalogic-android-sdk"},"Datalogic Android (Java) SDK")," as a ",(0,o.kt)("a",{parentName:"p",href:"https://cordova.apache.org/plugins/?q=cordova-plugin-datalogic"},"Cordova plugin"),". It lets you receive barcode data from the scanner, as well as configure various scanner and device settings. It is available as a npm package for easy consumption here: ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@datalogic/cordova-plugin-datalogic"},"@datalogic/cordova-plugin-datalogic"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can install the plugin from the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," registry as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @datalogic/cordova-plugin-datalogic\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"...or"))," use the following Cordova CLI command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cordova plugin add @datalogic/cordova-plugin-datalogic\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"or,"))," if you are using ionic, this ionic command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ionic cordova plugin add @datalogic/cordova-plugin-datalogic\n")))}v.isMDXComponent=!0}}]);