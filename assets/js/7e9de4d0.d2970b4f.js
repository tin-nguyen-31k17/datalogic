"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[7164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=i,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={id:"overview",title:"Wi-Fi QR Code Generator",sidebar_label:"Overview"},o=void 0,l={unversionedId:"wifiqrdoc/overview",id:"wifiqrdoc/overview",title:"Wi-Fi QR Code Generator",description:"The Wi-Fi QR Code Generator site can be found at https://datalogic.github.io/wifiqr/.",source:"@site/docs/wifiqrdoc/overview.md",sourceDirName:"wifiqrdoc",slug:"/wifiqrdoc/overview",permalink:"/wifiqrdoc/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Wi-Fi QR Code Generator",sidebar_label:"Overview"},sidebar:"WiFiQR"},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Enable the feature",id:"enable-the-feature",level:3},{value:"Encryption types",id:"encryption-types",level:3},{value:"Hidden networks",id:"hidden-networks",level:3}],c={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Website Location",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Wi-Fi QR Code Generator site can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://datalogic.github.io/wifiqr/"},"https://datalogic.github.io/wifiqr/"),".")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://datalogic.github.io/wifiqr"},"Wi-Fi QR Code Generator")," page creates a standard ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zxing/zxing/wiki/Barcode-Contents#wi-fi-network-config-android-ios-11"},"Wi-Fi QR code")," and offers to encrypt it using a Datalogic public key. If encrypted, it can only be read by Datalogic Android devices.  This feature is supported in these firmware versions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Device"),(0,i.kt)("th",{parentName:"tr",align:null},"Minimum firmware version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Memor 1"),(0,i.kt)("td",{parentName:"tr",align:null},"v3.06.08")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Memor 10"),(0,i.kt)("td",{parentName:"tr",align:null},"v1.05")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Joya Touch"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.21.38")))),(0,i.kt)("h3",{id:"enable-the-feature"},"Enable the feature"),(0,i.kt)("p",null,"In order for the device to successfully process Wi-Fi barcodes, the Wi-Fi Configuration format must be enabled on the scanning device. To enable the Wi-Fi Configuration format, open the Settings app and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Datalogic Settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Scanner Settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbology settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"QR Code")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"Enable Wi-Fi Configuration Format")," on."),(0,i.kt)("h3",{id:"encryption-types"},"Encryption types"),(0,i.kt)("p",null,"The Wi-Fi QR Generator supports two different network encryption types: ",(0,i.kt)("inlineCode",{parentName:"p"},"WPA/WPA2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"WEP"),". For networks using ",(0,i.kt)("inlineCode",{parentName:"p"},"WPA/WPA2")," encryption, the maximum password length is 63 characters. For ",(0,i.kt)("inlineCode",{parentName:"p"},"WEP")," networks, the network key must be either 5 or 13 characters long."),(0,i.kt)("h3",{id:"hidden-networks"},"Hidden networks"),(0,i.kt)("p",null,"The hidden network option is for use with Wi-Fi networks that do not publicly broadcast their ",(0,i.kt)("inlineCode",{parentName:"p"},"SSID"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"SSID")," is always a required field. Note that if the network is not hidden, the device will still connect to the given ",(0,i.kt)("inlineCode",{parentName:"p"},"SSID"),"."))}u.isMDXComponent=!0}}]);