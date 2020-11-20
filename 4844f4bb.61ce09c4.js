(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{171:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return g}));var r=t(0),n=t.n(r);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),s=function(e){var a=n.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return n.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,g=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return t?n.a.createElement(g,i(i({ref:a},p),{},{components:t})):n.a.createElement(g,i({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},91:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return s}));var r=t(2),n=t(6),o=(t(0),t(171)),c={id:"overview",title:"Cordova SDK",sidebar_label:"Overview"},i={unversionedId:"cordova/overview",id:"cordova/overview",isDocsHomePage:!1,title:"Cordova SDK",description:"Library that exposes the Datalogic Android (Java) SDK as a Cordova plugin. It lets you receive barcode data from the scanner, as well as configure various scanner and device settings. It is available as a npm package for easy consumption here: @datalogic/cordova-plugin-datalogic.",source:"@site/docs/cordova/overview.md",slug:"/cordova/overview",permalink:"/cordova/overview",version:"current",sidebar_label:"Overview",sidebar:"CordovaSDK",next:{title:"Frequently Asked Questions",permalink:"/cordova/faq"}},l=[{value:"Installation",id:"installation",children:[]}],p={rightToc:l};function s(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Library that exposes the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/datalogic/datalogic-android-sdk"}),"Datalogic Android (Java) SDK")," as a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://cordova.apache.org/plugins/?q=cordova-plugin-datalogic"}),"Cordova plugin"),". It lets you receive barcode data from the scanner, as well as configure various scanner and device settings. It is available as a npm package for easy consumption here: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@datalogic/cordova-plugin-datalogic"}),"@datalogic/cordova-plugin-datalogic"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"You can install the plugin from the ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," registry as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i @datalogic/cordova-plugin-datalogic\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"...or"))," use the following Cordova CLI command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cordova plugin add @datalogic/cordova-plugin-datalogic\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"or,"))," if you are using ionic, this ionic command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ionic cordova plugin add @datalogic/cordova-plugin-datalogic\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"or,"))," if you are using PhoneGap CLI, this phonegap command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"phonegap plugin add @datalogic/cordova-plugin-datalogic\n")))}s.isMDXComponent=!0}}]);