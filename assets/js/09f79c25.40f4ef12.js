"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[194],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95408:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"faq",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},l=void 0,c={unversionedId:"javascript/faq",id:"javascript/faq",title:"Frequently Asked Questions",description:"Why is my soft trigger button continually firing?",source:"@site/docs/javascript/faq.md",sourceDirName:"javascript",slug:"/javascript/faq",permalink:"/javascript/faq",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},sidebar:"AndroidStudioSDK",previous:{title:"DLKeyboardMgr",permalink:"/javascript/keyboard"},next:{title:"Porting Guide",permalink:"/javascript/zebra"}},p={},u=[{value:"Why is my soft trigger button continually firing?",id:"why-is-my-soft-trigger-button-continually-firing",level:3},{value:"What SDK do I use to access the camera (or other peripherals)?",id:"what-sdk-do-i-use-to-access-the-camera-or-other-peripherals",level:3}],d={toc:u},h="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"why-is-my-soft-trigger-button-continually-firing"},"Why is my soft trigger button continually firing?"),(0,o.kt)("p",null,"A page can include a button which is used to start scanning, such as the following element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button id="start" onclick="DLBarcodeMgr.startDecode()">Start Scan</button>\n')),(0,o.kt)("p",null,"If the scanner settings are left at default values, this can cause the scanner to re-trigger non-stop until you aim the scanner away from a barcode label."),(0,o.kt)("p",null,"The reason for this is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"WEDGE_KEYBOARD_ENABLE")," property is enabled by default.  When enabled, the scan result is sent to the web page as keyboard events, as if each letter was typed.  Since the button on the page currently has input focus, all of the keyboard input goes to the button.  This also includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"LABEL_SUFFIX")," property, which by default is ",(0,o.kt)("inlineCode",{parentName:"p"},"[LF]"),".  The final character is interpreted by the button as an onclick event, which repeats the scan trigger process again (forever)."),(0,o.kt)("p",null,"There are multiple ways to avoid this behavior.  Here are three alternative solutions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable the button when clicked, then enable button on scan/timeout event (once the label has been read).  See the barcode.html sample page in the SDK distribution for an example of this approach.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ontouchstart event instead of onclick.  This event only responds to touch events and does not respond to keyboard input."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button id="start" ontouchstart="DLBarcodeMgr.startDecode()">Start Scan</button>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable keyboard wedge before scan.  This prevents the label data from being sent to the button."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"DLBarcodeMgr.setProperty(BcdPropIds.WEDGE_KEYBOARD_ENABLE, false);\n")))),(0,o.kt)("h3",{id:"what-sdk-do-i-use-to-access-the-camera-or-other-peripherals"},"What SDK do I use to access the camera (or other peripherals)?"),(0,o.kt)("p",null,"The Datalogic JavaScript SDK does not contain specific APIs for managing the camera or other peripherals, such as the microphone and device location.  These can be managed instead by using APIs available as part of the HTML 5 standard, which are supported by the Browser."),(0,o.kt)("p",null,"Here are links to HTML 5 documentation/guides on these topics:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media"},(0,o.kt)("strong",{parentName:"a"},"Audio/Video APIs"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"},(0,o.kt)("strong",{parentName:"a"},"Location API"))))}f.isMDXComponent=!0}}]);