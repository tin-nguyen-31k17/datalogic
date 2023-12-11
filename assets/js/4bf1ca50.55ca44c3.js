"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[6932],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,g=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return t?n.createElement(g,i(i({ref:a},d),{},{components:t})):n.createElement(g,i({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2122:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={id:"faq",title:"Frequently Asked Questions"},i=void 0,l={unversionedId:"cordova/faq",id:"cordova/faq",title:"Frequently Asked Questions",description:"How can I create an Ionic app that uses the Datalogic plugin?",source:"@site/docs/cordova/faq.md",sourceDirName:"cordova",slug:"/cordova/faq",permalink:"/cordova/faq",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"AndroidStudioSDK",previous:{title:"Overview",permalink:"/cordova/overview"},next:{title:"API",permalink:"/cordova/api"}},c={},p=[{value:"How can I create an Ionic app that uses the Datalogic plugin?",id:"how-can-i-create-an-ionic-app-that-uses-the-datalogic-plugin",level:2},{value:"Create a directory for your app",id:"create-a-directory-for-your-app",level:3},{value:"Install the latest version of Ionic",id:"install-the-latest-version-of-ionic",level:3},{value:"Create a new blank app",id:"create-a-new-blank-app",level:3},{value:"Make sure the app works",id:"make-sure-the-app-works",level:3},{value:"Add datalogic cordova plugin",id:"add-datalogic-cordova-plugin",level:3},{value:"Add barcode handling code",id:"add-barcode-handling-code",level:3},{value:"Remove the hyperlink",id:"remove-the-hyperlink",level:3},{value:"Restart app on device",id:"restart-app-on-device",level:3},{value:"Scan a barcode",id:"scan-a-barcode",level:3}],d={toc:p},s="wrapper";function u(e){let{components:a,...o}=e;return(0,r.kt)(s,(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-can-i-create-an-ionic-app-that-uses-the-datalogic-plugin"},"How can I create an Ionic app that uses the Datalogic plugin?"),(0,r.kt)("p",null,"Here's directions to create an app using ",(0,r.kt)("inlineCode",{parentName:"p"},"Ionic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Angular"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Cordova")," that can receive barcode data, starting from scratch, without Ionic already installed."),(0,r.kt)("h3",{id:"create-a-directory-for-your-app"},"Create a directory for your app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir DecodeListener\ncd DecodeListener\n")),(0,r.kt)("h3",{id:"install-the-latest-version-of-ionic"},"Install the latest version of Ionic"),(0,r.kt)("p",null,"For this example, version 5.4.4 was found and installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g ionic@latest\n")),(0,r.kt)("h3",{id:"create-a-new-blank-app"},"Create a new blank app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," ionic start DecodeListenerSample blank\n")),(0,r.kt)("p",null,"When prompted for a framework, I chose ",(0,r.kt)("inlineCode",{parentName:"p"},"Angular")," for this example."),(0,r.kt)("h3",{id:"make-sure-the-app-works"},"Make sure the app works"),(0,r.kt)("p",null," Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"native-run")," to be installed. Let's setup the app and verify it works before adding the Datalogic plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd DecodeListenerSample\nnpm i -g native-run\nionic cordova run android --device\n")),(0,r.kt)("h3",{id:"add-datalogic-cordova-plugin"},"Add datalogic cordova plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ionic cordova plugin add @datalogic/cordova-plugin-datalogic\n")),(0,r.kt)("h3",{id:"add-barcode-handling-code"},"Add barcode handling code"),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"app.component.ts"),". Add this line after your last ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"declare let barcodeManager: any;\n")),(0,r.kt)("p",null,"Next, add this code at the end of your ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeApp()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"barcodeManager.addReadListner(\n  (data) => {\n    alert(data);\n  },\n  (err) => {\n    console.log('ERR');\n   }\n);\n")),(0,r.kt)("h3",{id:"remove-the-hyperlink"},"Remove the hyperlink"),(0,r.kt)("p",null,"The blank Ionic app includes a hyperlink. If the device's ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyboard Wedge")," mode is turned on, it could annoyingly trigger the hyperlink, so let's remove it. Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/home/home.page.html")," and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},'<a target="_blank" rel="noopener" href="https://ionicframework.com/docs/">docs</a>')," code."),(0,r.kt)("h3",{id:"restart-app-on-device"},"Restart app on device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ionic cordova run android --device\n")),(0,r.kt)("h3",{id:"scan-a-barcode"},"Scan a barcode"),(0,r.kt)("p",null,"When you scan a barcode, using the app you will get an alert message similar to this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Barcode alert",src:t(78133).Z,width:"200",height:"356"})),(0,r.kt)("p",null,"That's it. Start customizing your app to your liking. \ud83c\udf89"))}u.isMDXComponent=!0},78133:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/screencap-a75c02587c12da133a9a05e123602d56.png"}}]);