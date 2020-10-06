(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{154:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,u=s["".concat(b,".").concat(m)]||s[m]||d[m]||c;return a?n.a.createElement(u,o(o({ref:t},l),{},{components:a})):n.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var l=2;l<c;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),c=(a(0),a(154)),b={id:"samples",title:"Sample Apps"},o={unversionedId:"cordova/samples",id:"cordova/samples",isDocsHomePage:!1,title:"Sample Apps",description:"Ionic Samples",source:"@site/docs/cordova/samples.md",slug:"/cordova/samples",permalink:"/cordova/samples",version:"current",sidebar:"CordovaSDK",previous:{title:"Cordova API",permalink:"/cordova/api"}},i=[{value:"Ionic Samples",id:"ionic-samples",children:[{value:"Build",id:"build",children:[]}]},{value:"Phonegap Samples",id:"phonegap-samples",children:[{value:"Build",id:"build-1",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"ionic-samples"},"Ionic Samples"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://ionicframework.com/"}),"Ionic")," sample apps that use the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/datalogic/cordova-plugin-datalogic"}),"Datalogic Cordova plugin"),". Pre-compiled APKs are provided in ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/datalogic/ionic-samples/releases"}),"releases"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/datalogic/ionic-samples/tree/master/AutoScanTrigger"}),"AutoScanTrigger")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Uses ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"api#autoscantrigger"}),Object(c.b)("inlineCode",{parentName:"a"},"autoScanTrigger"))," functions to toggle available triggers.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/datalogic/ionic-samples/blob/master/DecodeListener"}),"DecodeListener")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Uses ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"api#barcodemanager"}),Object(c.b)("inlineCode",{parentName:"a"},"barcodeManager"))," functions to display barcode data on the screen.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/datalogic/ionic-samples/blob/master/LedManager"}),"LedManager")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Uses ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"api#ledmanager"}),Object(c.b)("inlineCode",{parentName:"a"},"ledManager"))," functions to turn device LEDs on and off.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/datalogic/ionic-samples/blob/master/SetSymbologies"}),"SetSymbologies")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Uses ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"api#scannerproperties"}),Object(c.b)("inlineCode",{parentName:"a"},"scannerProperties"))," functions to enable or disable barcode symbologies.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/datalogic/ionic-samples/blob/master/SetTriggers"}),"SetTriggers")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Uses ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"api#keyboardmanager"}),Object(c.b)("inlineCode",{parentName:"a"},"keyboardManager"))," functions to enable or disable device triggers.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/datalogic/ionic-samples/blob/master/Wedge"}),"Wedge")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Uses ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"api#scannerproperties"}),Object(c.b)("inlineCode",{parentName:"a"},"scannerProperties"))," functions to enable or disable barcode keyboard wedge.")))),Object(c.b)("h3",{id:"build"},"Build"),Object(c.b)("p",null,"First, make sure you are set up to build and run on an Android device. See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://ionicframework.com/docs/intro/deploying/"}),"requirements here"),". You can build and run any of the Ionic app samples with a single command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ionic cordova run android --device\n")),Object(c.b)("h2",{id:"phonegap-samples"},"Phonegap Samples"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://phonegap.com/"}),"Phonegap")," sample apps that use the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/datalogic/cordova-plugin-datalogic"}),"Datalogic Cordova plugin"),". Pre-compiled APKs are provided in ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/datalogic/phonegap-samples/releases"}),"releases"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/datalogic/phonegap-samples/tree/master/BarcodeManager/"}),"BarcodeManager")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Demonstrates using the ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"api#addreadlistner-successcallback-errorcallback-object"}),Object(c.b)("inlineCode",{parentName:"a"},"addReadListner"))," ,  ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"api#presstrigger-successcallback-errorcallback-object"}),Object(c.b)("inlineCode",{parentName:"a"},"pressTrigger"))," and ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"api#releasetrigger-successcallback-errorcallback-object"}),Object(c.b)("inlineCode",{parentName:"a"},"releaseTrigger")),"functions to simulate scan trigger button press and release in an app.")))),Object(c.b)("h3",{id:"build-1"},"Build"),Object(c.b)("p",null,"First, make sure you are set up to build and run on an Android device. See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://docs.phonegap.com/getting-started/1-install-phonegap/cli/"}),"requirements here"),". You can build and run any of the PhoneGap app samples with a single command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"phonegap run android --device\n")))}p.isMDXComponent=!0}}]);