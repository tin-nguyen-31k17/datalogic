"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[6763],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(g,l(l({ref:t},s),{},{components:a})):r.createElement(g,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57467:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"overview",title:"JavaScript SDK",sidebar_label:"Overview"},p=void 0,c={unversionedId:"javascript/overview",id:"javascript/overview",title:"JavaScript SDK",description:"The Datalogic Javascript SDK can be downloaded from the Datalogic GitHub site.",source:"@site/docs/javascript/overview.md",sourceDirName:"javascript",slug:"/javascript/overview",permalink:"/javascript/overview",tags:[],version:"current",frontMatter:{id:"overview",title:"JavaScript SDK",sidebar_label:"Overview"},sidebar:"JavaScriptSDK",next:{title:"DLBarcodeMgr",permalink:"/javascript/barcode"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Download Contents",id:"download-contents",level:2},{value:"Using SDK",id:"using-sdk",level:2},{value:"Namespaces",id:"namespaces",level:2}],m={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Downloading the SDK")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Datalogic Javascript SDK can be downloaded from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datalogic/javascript-sdk/releases"},"Datalogic GitHub site"),"."))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Datalogic JavaScript SDK allows users to write web apps that interface with the features of Datalogic Android devices through the Datalogic Enterprise Browser."),(0,i.kt)("p",null,"Click here for information on the ",(0,i.kt)("a",{parentName:"p",href:"/browser/overview"},(0,i.kt)("strong",{parentName:"a"},"Datalogic Enterprise Browser")),"."),(0,i.kt)("h2",{id:"download-contents"},"Download Contents"),(0,i.kt)("p",null,"The SDK repository is organized as the contents of a web server.  Its contents are described here:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index.html"),(0,i.kt)("td",{parentName:"tr",align:null},"Home page for SDK samples")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lib"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains JavaScript SDK implementation files")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lib/dl_barcode.js"),(0,i.kt)("td",{parentName:"tr",align:null},"Implementation of barcode manager API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lib/dl_keyboard.js"),(0,i.kt)("td",{parentName:"tr",align:null},"Implementation of keyboard manager API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"samples"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains SDK sample web pages")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"samples/barcode.html"),(0,i.kt)("td",{parentName:"tr",align:null},"Sample page to scan a barcode and display its contents.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"samples/camera.html"),(0,i.kt)("td",{parentName:"tr",align:null},"Sample page to take a picture with the camera, including preview.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"samples/config.html"),(0,i.kt)("td",{parentName:"tr",align:null},"Sample page to configure the scanner properties.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"samples/location.html"),(0,i.kt)("td",{parentName:"tr",align:null},"Sample page to display the current device location.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"samples/microphone.html"),(0,i.kt)("td",{parentName:"tr",align:null},"Sample page to record audio from the device microphone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"samples/trigger.html"),(0,i.kt)("td",{parentName:"tr",align:null},"Sample page to enable/disable the physical scanning triggers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"samples/res"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains resource files used by sample pages")))),(0,i.kt)("h2",{id:"using-sdk"},"Using SDK"),(0,i.kt)("p",null,"Once you've downloaded the JavaScript SDK files, you can include the desired API's in your HTML pages through a ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," tag, i.e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" charset="utf-8" src="dl_barcode.js"><\/script>\n')),(0,i.kt)("p",null,"Calls to the API may then be made in an additonal script tag.  Sample pages using the JavaScript SDK can be found in the repository on GitHub in the samples directory."),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"),(0,i.kt)("p",null,"The SDK is divided into multiple namespaces, each with their own API for managing a different aspect of the device."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/javascript/barcode"},(0,i.kt)("strong",{parentName:"a"},"DLBarcodeMgr"))),(0,i.kt)("td",{parentName:"tr",align:null},"Interface for the barcode and scanning features of the device.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/javascript/keyboard"},(0,i.kt)("strong",{parentName:"a"},"DLKeyboardMgr"))),(0,i.kt)("td",{parentName:"tr",align:null},"Interface for the physical keyboard of the device.")))))}u.isMDXComponent=!0}}]);