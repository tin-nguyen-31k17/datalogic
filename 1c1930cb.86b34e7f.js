(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{172:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,m=b["".concat(c,".").concat(u)]||b[u]||p[u]||i;return a?o.a.createElement(m,r(r({ref:t},d),{},{components:a})):o.a.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var d=2;d<i;d++)c[d]=a[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},175:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},180:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},181:function(e,t,a){"use strict";var n=a(0),o=a(180);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},184:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(181),c=a(175),r=a(47),l=a.n(r),d=37,s=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,b=e.values,p=e.groupId,u=Object(i.a)(),m=u.tabGroupChoices,h=u.setTabGroupChoices,O=Object(n.useState)(r),j=O[0],g=O[1],f=Object(n.useState)(!1),y=f[0],v=f[1];if(null!=p){var N=m[p];null!=N&&N!==j&&b.some((function(e){return e.value===N}))&&g(N)}var S=function(e){g(e),null!=p&&h(p,e)},w=[],D=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},C=function(){v(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",D),window.addEventListener("mousedown",C)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),D(e)},onFocus:function(){return S(t)},onClick:function(){S(t),v(!1)},onPointerDown:function(){return v(!1)}},a)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}},185:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}},285:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/scan2deploy-qr-1314e8416aebaa4282fcd4062d1beefc.png"},286:function(e,t,a){"use strict";a.r(t),t.default="data:image/gif;base64,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"},287:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image84-1ce42699615c92d34c37b6d7d337877f.png"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),i=(a(0),a(172)),c=a(184),r=a(185),l={id:"android",title:"Scan2Deploy Android",sidebar_label:"Android agent"},d={unversionedId:"scan2deploy/android",id:"scan2deploy/android",isDocsHomePage:!1,title:"Scan2Deploy Android",description:"Screenshot",source:"@site/docs/scan2deploy/android.mdx",slug:"/scan2deploy/android",permalink:"/scan2deploy/android",version:"current",sidebar_label:"Android agent",sidebar:"Scan2DeployStudio",previous:{title:"Frequently Asked Questions",permalink:"/scan2deploy/faq"},next:{title:"Scan2Deploy Android Schema",permalink:"/scan2deploy/android-schema"}},s=[{value:"Downloads",id:"downloads",children:[]},{value:"Enable Scan2Deploy",id:"enable-scan2deploy",children:[{value:"Android Enterprise QR code for pre-installed Scan2Deploy",id:"android-enterprise-qr-code-for-pre-installed-scan2deploy",children:[]},{value:"Android Enterprise QR code for latest version of Scan2Deploy",id:"android-enterprise-qr-code-for-latest-version-of-scan2deploy",children:[]},{value:"Android Enterprise QR Code Generator",id:"android-enterprise-qr-code-generator",children:[]}]},{value:"Creating Scan2Deploy files",id:"creating-scan2deploy-files",children:[{value:"Scan2Deploy Studio",id:"scan2deploy-studio",children:[]},{value:"Using a text editor",id:"using-a-text-editor",children:[]}]},{value:"Generating barcodes",id:"generating-barcodes",children:[]},{value:"Example JSON files",id:"example-json-files",children:[{value:"Detailed",id:"detailed",children:[]},{value:"Update Datalogic Tools",id:"update-datalogic-tools",children:[]}]},{value:"Third-party integration",id:"third-party-integration",children:[{value:"Generate Scan2Deploy data",id:"generate-scan2deploy-data",children:[]},{value:"Start Service intent",id:"start-service-intent",children:[]},{value:"Call startActivity",id:"call-startactivity",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"Screenshot",src:a(285).default})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Scan2Deploy")," is an application devoted to the initial staging of Android devices by reading a barcode sequence. Depending on the content of the staging barcodes ",Object(i.b)("inlineCode",{parentName:"p"},"Scan2Deploy")," will, in this order:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"configure the device Wi-Fi network,"),Object(i.b)("li",{parentName:"ul"},"control some device inner system settings (e.g. the lock-screen enabled state),"),Object(i.b)("li",{parentName:"ul"},"download a data archive from a HTTP/HTTPS server and unpack it to the device,"),Object(i.b)("li",{parentName:"ul"},"install/update applications and the system image, and"),Object(i.b)("li",{parentName:"ul"},"run a script (to perform any additional setup).")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The documentation on this page is current as of Scan2Deploy Android version v1.27."))),Object(i.b)("h2",{id:"downloads"},"Downloads"),Object(i.b)("p",null,"Downloads are available in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-android/releases"}),"Releases")," section on the Scan2Deploy Android Github page."),Object(i.b)("h2",{id:"enable-scan2deploy"},"Enable Scan2Deploy"),Object(i.b)("p",null,"Scan2Deploy acts as an Android Enterprise ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/work/dpc/build-dpc"}),"Device Policy Cotroller (DPC)"),", running in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/android/work/play/emm-api/prov-devices#modes_of_operation"}),"device owner mode"),'. This allows Scan2Deploy to configure many protected device settings that would otherwise not be possible. Any DPC app that acts as a device owner must be configured to do so during device setup. By scanning a QR code at the first page of the Android Setup Wizard ("Hi There! page) on a new or factory-reset device, Scan2Deploy is configured as device owner. '),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("strong",{parentName:"p"},"simplest way")," to enable Scan2Deploy is to just scan any ",Object(i.b)("inlineCode",{parentName:"p"},"Scan2Deploy QR code")," at the ",Object(i.b)("inlineCode",{parentName:"p"},"Hi There!")," page. "))),Object(i.b)("p",null,"Alternatively, an Android Enterprise QR code can be scanned."),Object(i.b)("h3",{id:"android-enterprise-qr-code-for-pre-installed-scan2deploy"},"Android Enterprise QR code for pre-installed Scan2Deploy"),Object(i.b)("p",null,"Scan the following QR code at the ",Object(i.b)("inlineCode",{parentName:"p"},"Hi There!")," page to enroll the version of ",Object(i.b)("inlineCode",{parentName:"p"},"Scan2Deploy")," pre-installed in the device firmware as device owner:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," When ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#generating-barcodes"}),"generating Scan2Deploy QR codes"),", add ",Object(i.b)("inlineCode",{parentName:"p"},'"enroll": true')," in your ",Object(i.b)("inlineCode",{parentName:"p"},'"layout"')," section to cause this same QR code to be displayed in the upper right-hand corner of the page created."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'    "layout": {\n        "enroll": true\n    },\n')),Object(i.b)("p",null,":::"),Object(i.b)("h3",{id:"android-enterprise-qr-code-for-latest-version-of-scan2deploy"},"Android Enterprise QR code for latest version of Scan2Deploy"),Object(i.b)("p",null,"Scan the following QR code at the ",Object(i.b)("inlineCode",{parentName:"p"},"Hi There!")," page to enroll the latest version of ",Object(i.b)("inlineCode",{parentName:"p"},"Scan2Deploy")," available on GitHub as device owner:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Latest Scan2Deploy",src:a(286).default})),Object(i.b)("h3",{id:"android-enterprise-qr-code-generator"},"Android Enterprise QR Code Generator"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/aeqr/"}),"Android Enterprise QR Code Generator")," can be used to install the latest version on Scan2Deploy as well as give you the opportunity to add many other customization options. The basic process is:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"Datalogic Scan2Deploy")," in the ",Object(i.b)("inlineCode",{parentName:"li"},"Select an EMM")," field."),Object(i.b)("li",{parentName:"ol"},"Make any additional settings as desired (for instance, configure a Wi-Fi network)."),Object(i.b)("li",{parentName:"ol"},"Press the ",Object(i.b)("inlineCode",{parentName:"li"},"Generate QR Code")," button at the bottom of the page."),Object(i.b)("li",{parentName:"ol"},"Scan the QR code displayed.")),Object(i.b)("h2",{id:"creating-scan2deploy-files"},"Creating Scan2Deploy files"),Object(i.b)("p",null,"Scan2Deploy JSON files can be created either by Scan2Deploy Studio or manually using a text editor. It's highly reccomened to use Scan2Deploy Studio. "),Object(i.b)("h3",{id:"scan2deploy-studio"},"Scan2Deploy Studio"),Object(i.b)("p",null,"Refer to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"studio"}),"Scan2Deploy Studio")," documentation for a detailed description of how to use the tool."),Object(i.b)("h3",{id:"using-a-text-editor"},"Using a text editor"),Object(i.b)("p",null,"Scan2Deploy JSON files can be created using any text editor (notepad.exe can be used for example). A JSON schema is available to help ensure valid file content. There are several advantages to using an editor that supports this schema:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Provides help text for each field"),Object(i.b)("li",{parentName:"ul"},"Provides real-time compiler-like messages letting you know when you have made a mistake"),Object(i.b)("li",{parentName:"ul"},"Allows you to write files faster and with fewer mistakes")),Object(i.b)("h4",{id:"schema"},"$schema"),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://json-schema.org/"}),"JSON schema")," file is used to define the structure and features available in Scan2Deploy. The ",Object(i.b)("inlineCode",{parentName:"p"},"$schema")," tag is used to indicate which version of the schema you are using. You can versions of schema along with complete field documentation at the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-android-schema"}),"Scan2Deploy Android schema")," repo."),Object(i.b)("p",null,"\ud83d\udd17 ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-android-schema"}),"Schema Reference")),Object(i.b)("p",null,"The latest schema can be referenced like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "https://raw.githubusercontent.com/datalogic/scan2deploy-android-schema/master/schema.json"\n}\n')),Object(i.b)("p",null,"You can also point to a specific version of the schema by pointing to the desired tag. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "https://raw.githubusercontent.com/datalogic/scan2deploy-android-schema/v1-1-0/schema.json"\n}\n')),Object(i.b)("h4",{id:"choosing-an-editor"},"Choosing an editor"),Object(i.b)("p",null,"There are several good JSON editors available. We reccommend ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),". It is free and has ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/languages/json"}),"many features designed to make writing JSON files easier"),", including utilizing JSON schemas."),Object(i.b)("p",null,"By including the aforementioned ",Object(i.b)("inlineCode",{parentName:"p"},"$schema")," tag in you JSON file, Visual Studio Code will provide automatic tool tips and error underlining:"),Object(i.b)("p",null,"Some other editors know to use the schema files on schemastore.org when a given file uses a specific file extension that is registered on schemastore.org:  ",Object(i.b)("inlineCode",{parentName:"p"},"file-name.dla.json")),Object(i.b)("h2",{id:"generating-barcodes"},"Generating barcodes"),Object(i.b)("p",null,"Scan2Deploy barcodes can be generated both by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"studio"}),"Scan2Deploy Studio")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/scan2deploy-ce/overview#barcode-generation-using-dl_configexe"}),"dl_config.exe"),". It's highly reccomened to use Scan2Deploy Studio. "),Object(i.b)("h2",{id:"example-json-files"},"Example JSON files"),Object(i.b)("p",null,"These examples could be useful if you are making manual edits to your profile.json file."),Object(i.b)("h3",{id:"detailed"},"Detailed"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "http://json.schemastore.org/datalogic-scan2deploy-android",\n    "layout": {\n        "description": "This is for our Android devices",\n        "enroll": true\n    },\n    "padlock": {\n        "valid-until": "20991231235959",\n        "key": "ihavenomouthandimustscream",\n        "state": "locked",\n        "hide-from-launcher": false\n    },\n    "global": {\n        "target-path": "/mnt/sdcard/airwatch",\n        "install-path": "/mnt/sdcard/airwatch",\n        "update-path": "/mnt/sdcard/airwatch",\n        "purge-target-path": true,\n        "auto-scan": true,\n        "script": "setup.s",\n        "action": "close",\n        "backup-to-enterprise": true,\n        "script": [\n            "[Post-Install]",\n            "DISABLE_APP com.android.chrome"\n        ]\n    },\n    "settings": {\n        "date-time": "Thu, 19 Apr 2018 07:51:37 GMT",\n        "auto-time": false,\n        "auto-time-zone": false,\n        "auto-time-server": "pool.ntp.org",\n        "debug-bridge": false,\n        "lock-screen": false,\n        "status-bar": false,\n        "navigation-bar": true,\n        "charge-threshold": 0,\n        "usb-profile": "NONE",\n        "usb-function": "CHARGING"\n    },\n    "network": {\n        "essid": "TESTTKIP",\n        "hidden": false,\n        "mode": "wpa-psk",\n        "mode-key": "datalogic",\n        "mode-key-encrypted": false,\n        "ephemeral": false,\n        "wait-for-connection": true\n    },\n    "deployment": {\n        "scheme": "http",\n        "host": "172.19.0.77",\n        "port": 8080,\n        "path": "/airwatch.zip",\n        "ping-timeout": 1000,\n        "fetch-timeout": 60000,\n        "working-archive": "/mnt/sdcard/target.zip",\n        "skip-inflation": true\n    },\n    "blobs": [\n        {\n            "file": "/mnt/sdcard/airwatch/credentials.bin",\n            "content": "fd09B1iL/k4jRWrjrP0/sO44teY            +B3UafBLsMsCEqd1KOv6b6JYBXLVv70FmHdZhIVoEOQvHu7O4PUJStpZQ+4PYjPqCO+NQr81M7GOF421Ke8L2u4EYyqDE5qXfLy2shEgaRwRpr2f35/38WZkh6edyiWZQJjyLeZcuI7WiaJPpw7Jcw7ye7mb7Rl+ePNFmfvUrpeRFtN+5kUsx/SbB1v0gDyOOuoep"\n        }\n    ]\n}\n')),Object(i.b)("p",null,"Each section is ",Object(i.b)("em",{parentName:"p"},"optional")," in nature. Sections ",Object(i.b)("inlineCode",{parentName:"p"},"padlock"),", ",Object(i.b)("inlineCode",{parentName:"p"},"settings"),", ",Object(i.b)("inlineCode",{parentName:"p"},"network"),", ",Object(i.b)("inlineCode",{parentName:"p"},"deployment"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"blobs")," are skipped when missing. Also, for the ",Object(i.b)("inlineCode",{parentName:"p"},"settings")," section, the configuration parameters are ",Object(i.b)("em",{parentName:"p"},"optional")," and when not provided the current setting is kept."),Object(i.b)("h3",{id:"update-datalogic-tools"},"Update Datalogic Tools"),Object(i.b)("p",null,"The following example will update the Datalogic tools on the device to the following versions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DXU Agent 1.20.168"),Object(i.b)("li",{parentName:"ul"},"SoftSpot 1.8.92")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "http://json.schemastore.org/datalogic-scan2deploy-android",\n    "global": {\n        "auto-scan": true,\n        "target-path": "/sdcard/Download/"\n    },\n    "deployment": {\n        "scheme": "https",\n        "host": "github.com",\n        "port": 443,\n        "path": "/datalogic/sandbox/raw/master/demo.zip"\n    }\n}\n')),Object(i.b)("h2",{id:"third-party-integration"},"Third-party integration"),Object(i.b)("p",null,"Scan2Deploy configuration data can be passed to Scan2Deploy agent directly from other Android applications. For instance an MDM agent installed on the device could directly pass barcode data to Scan2Deploy agent, eliminating the need for a barcode to be physically scanned. The following steps are necessary to achieve this."),Object(i.b)("h3",{id:"generate-scan2deploy-data"},"Generate Scan2Deploy data"),Object(i.b)("p",null,"This can be achieved either by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#using-dl_configexe"}),"using dl_config.exe")," or by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#using-scan2deploy-studio"}),"using Scan2Deploy Studio"),"."),Object(i.b)("h4",{id:"using-dl_configexe"},"Using dl_config.exe"),Object(i.b)("p",null,"Once you have created a valid Scan2Deploy ",Object(i.b)("inlineCode",{parentName:"p"},"JSON")," file, use the ",Object(i.b)("inlineCode",{parentName:"p"},"--encodeonly")," flag of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/scan2deploy-ce/overview#barcode-generation-using-dl_configexe"}),"dl_config.exe (v1.7 or later)")," to cause the encoded data to be displayed on screen. Example usage:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"dl_config.exe test.json X --encodeonly=true\nDatalogic Staging Configurator (ver 1.7.1524)\nCopyright (c) 2016-2017 by Datalogic MCSA S.r.l.\n======================================================================\nLoading file 'test.json'\nProcessing data\n-----BEGIN ENCODED DATA-----\nBm9uiYc//NWOnA0ZtIrgJ/qy0DCvHR+a1XwUz1sTne8s0KEM9ANwTS0XD4NbIOf/hV0+MM7cOFiZMbUDtO1L4sb4vnJluFbQOEM3phIuCRiBuMtpnh85\n-----END ENCODED DATA-------\n")),Object(i.b)("p",null,"From there, copy the data found between the ",Object(i.b)("inlineCode",{parentName:"p"},"-----BEGIN ENCODED DATA-----")," and ",Object(i.b)("inlineCode",{parentName:"p"},"-----END ENCODED DATA-----")," headers and proceed to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#call-startactivity"}),"startActivity")," section below."),Object(i.b)("h4",{id:"using-scan2deploy-studio"},"Using Scan2Deploy Studio"),Object(i.b)("p",null,"Once you have stepped through ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/scan2deploy/studio"}),"Scan2Deploy Studio")," and have your barcode displayed on the ",Object(i.b)("strong",{parentName:"p"},"Save and Print")," page, click the ",Object(i.b)("strong",{parentName:"p"},"Copy to Clipboard")," button to copy the data to your copy buffer. The ",Object(i.b)("strong",{parentName:"p"},"Copy to Clipboard")," button is available in ",Object(i.b)("strong",{parentName:"p"},"Scan2Deploy Studio 1.3")," and later."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Screenshot",src:a(287).default})),Object(i.b)("h3",{id:"start-service-intent"},"Start Service intent"),Object(i.b)("p",null,"Scan2Deploy offers a service that listens for requests to apply Scan2Deploy profiles without the Scan2Deploy UI (activity) being visible. The profile will be applied silently, wilthout any Scan2Deploy UI being displayed in the foreground."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Broadcast action:")," ",Object(i.b)("inlineCode",{parentName:"li"},"datalogic.scan2deploy.intent.action.START_SERVICE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Broadcast receiver:")," ",Object(i.b)("inlineCode",{parentName:"li"},"com.datalogic.scan2deploy.S2dServiceReceiver"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Extras")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Extra"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"encoding")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v2"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicates how the ",Object(i.b)("inlineCode",{parentName:"td"},"data")," field is encoded. Allowed values are:",Object(i.b)("br",null)," \u2022 ",Object(i.b)("inlineCode",{parentName:"td"},"json")," - plain, unencrypted JSON file",Object(i.b)("br",null)," \u2022 ",Object(i.b)("inlineCode",{parentName:"td"},"v1")," - v1 encryption, generated by dl_config.exe",Object(i.b)("br",null)," \u2022 ",Object(i.b)("inlineCode",{parentName:"td"},"v2")," - v2 encryption generated by Scan2Deploy Studio")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"data")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"null")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The data that Scan2Deploy should process that would normally be received in a barcode.")))),Object(i.b)("h4",{id:"examples"},"Examples"),Object(i.b)("p",null,"These examples demonstrate passing properly escaped json data in ",Object(i.b)("inlineCode",{parentName:"p"},"data")," extra. The ",Object(i.b)("inlineCode",{parentName:"p"},"encoding")," extra must be set to ",Object(i.b)("inlineCode",{parentName:"p"},"json")," in this case."),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Intent i = new Intent("datalogic.scan2deploy.intent.action.START_SERVICE")\n  .putExtra("encoding", "json")\n  .putExtra("data", "{\\"global\\":{\\"action\\":\\"reset\\"}}");\n  .setClassName("com.datalogic.scan2deploy", "com.datalogic.scan2deploy.S2dServiceReceiver");\n\ngetApplicationContext().sendBroadcast(i);\n'))),Object(i.b)(r.a,{value:"shell",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ adb shell am broadcast -a datalogic.scan2deploy.intent.action.START_SERVICE -n "com.datalogic.scan2deploy/.S2dServiceReceiver" --es encoding v2 --es data "{\\"global\\":{\\"action\\":\\"reset\\"}}"\n')))),Object(i.b)("h3",{id:"call-startactivity"},"Call startActivity"),Object(i.b)("p",null,"Alternatively, you can start the Scan2Deploy ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/app/Activity#startActivity(android.content.Intent)"}),"activity")," if you want the Scan2Deploy UI to be visible. The same intent extras can be used in this case (",Object(i.b)("inlineCode",{parentName:"p"},"encoding")," and ",Object(i.b)("inlineCode",{parentName:"p"},"data"),"). These examples demonstrate passing in ",Object(i.b)("inlineCode",{parentName:"p"},"v2")," barcode data exported by Scan2Depoy Studio in the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," extra. Since ",Object(i.b)("inlineCode",{parentName:"p"},"v2")," is the default, no ",Object(i.b)("inlineCode",{parentName:"p"},"encoding")," parameter is required."),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'  Intent launchIntent = getPackageManager().getLaunchIntentForPackage("com.datalogic.scan2deploy");\n  launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);\n  launchIntent.putExtra("data", "Bm9uiYc//NWOnA0ZtIrgJ/qy0DCvHR+a1XwUz1sTne8s0KEM9ANwTS0XD4NbIOf/hV0+MM7cOFiZMbUDtO1L4sb4vnJluFbQOEM3phIuCRiBuMtpnh85");\n  getApplicationContext().startActivity(launchIntent);\n'))),Object(i.b)(r.a,{value:"shell",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"adb shell am start -S -n com.datalogic.scan2deploy/.MainActivity -e data Bm9uiYc//NWOnA0ZtIrgJ/qy0DCvHR+a1XwUz1sTne8s0KEM9ANwTS0XD4NbIOf/hV0+MM7cOFiZMbUDtO1L4sb4vnJluFbQOEM3phIuCRiBuMtpnh85\n")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can utilize an MDM console to start the ",Object(i.b)("inlineCode",{parentName:"p"},"Scan2Deploy")," activity or service with the desired ",Object(i.b)("inlineCode",{parentName:"p"},"data")," intent extra. However, that process will differ significantly from one MDM to the next and is outside the scope of what can be documented here."))))}p.isMDXComponent=!0}}]);