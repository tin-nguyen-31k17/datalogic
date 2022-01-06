(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{305:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(8),r=(a(0),a(314)),i={id:"generate",title:"Generate QR code",sidebar_label:"Generate QR Code"},c={unversionedId:"aeqrdoc/generate",id:"aeqrdoc/generate",isDocsHomePage:!1,title:"Generate QR code",description:"Getting started",source:"@site/docs/aeqrdoc/generate.md",slug:"/aeqrdoc/generate",permalink:"/aeqrdoc/generate",version:"current",sidebar_label:"Generate QR Code",sidebar:"AEQR",previous:{title:"Android Enterprise QR Code Generator",permalink:"/aeqrdoc/overview"},next:{title:"Import QR code",permalink:"/aeqrdoc/import"}},l=[{value:"Getting started",id:"getting-started",children:[]},{value:"Select an EMM",id:"select-an-emm",children:[]},{value:"Component name of admin receiver",id:"component-name-of-admin-receiver",children:[{value:"DEVICE_ADMIN_COMPONENT_NAME",id:"device_admin_component_name",children:[]}]},{value:"Download and enrollment",id:"download-and-enrollment",children:[{value:"DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION",id:"device_admin_package_download_location",children:[]},{value:"DEVICE_ADMIN_SIGNATURE_CHECKSUM",id:"device_admin_signature_checksum",children:[]},{value:"ADMIN_EXTRAS_BUNDLE",id:"admin_extras_bundle",children:[]}]},{value:"Configure Wi-Fi network",id:"configure-wi-fi-network",children:[]},{value:"Additional Android Enterprise properties",id:"additional-android-enterprise-properties",children:[]},{value:"Datalogic properties",id:"datalogic-properties",children:[{value:"Mobile network settings",id:"mobile-network-settings",children:[]},{value:"Network time protocol (NTP)",id:"network-time-protocol-ntp",children:[]},{value:"EMM Agent download",id:"emm-agent-download",children:[]}]},{value:"Encrypt QR code",id:"encrypt-qr-code",children:[]},{value:"Generate QR code",id:"generate-qr-code",children:[]},{value:"Save",id:"save",children:[]},{value:"Edit",id:"edit",children:[]},{value:"Start Over",id:"start-over",children:[]}],d={rightToc:l};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"getting-started"},"Getting started"),Object(r.b)("p",null,"To create a new enrollment QR code, go to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/aeqr/"}),"Android Enterprise QR Code Generator")," web page and select ",Object(r.b)("inlineCode",{parentName:"p"},"Create"),". The following sections explain how to configure, generate, and save enrollment QR codes."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Create New",src:a(626).default})),Object(r.b)("h2",{id:"select-an-emm"},"Select an EMM"),Object(r.b)("p",null,"To begin adding properties to the enrollment QR code, select an EMM from the list. The default is ",Object(r.b)("inlineCode",{parentName:"p"},"Other"),", which allows the administrator to manually create a QR code."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Select EMM",src:a(627).default})),Object(r.b)("p",null,"To create a QR code for one of Datalogic's EMM partners, select the desired EMM from the drop down list. Selecting an EMM will pre-populate the ",Object(r.b)("strong",{parentName:"p"},"Component name of admin receiver")," and ",Object(r.b)("strong",{parentName:"p"},"Download and enrollment")," sections."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The fields in the ",Object(r.b)("strong",{parentName:"p"},"Component name of admin receiver")," and ",Object(r.b)("strong",{parentName:"p"},"Download and enrollment")," sections are editable. However, it is not recommended to edit these values unless your EMM provides alternate values or you must generate these yourself."))),Object(r.b)("h2",{id:"component-name-of-admin-receiver"},"Component name of admin receiver"),Object(r.b)("h3",{id:"device_admin_component_name"},"DEVICE_ADMIN_COMPONENT_NAME"),Object(r.b)("p",null,"The admin receiver of the MDM application that will be set as the device owner."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," com.emm.android/DeviceAdminReceiver"),Object(r.b)("p",null,"This should be provided for you by the app developer, but it is possible to discover this field if necessary if you have the APK file. One way to do this:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Download ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibotpeaches.github.io/Apktool/"}),"apktool")," and install it. Note that this is a 3rd party tool and Datalogic is not involved in its development. Use at your discretion.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run it on your APK."),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"apktool.bat decode <file.apk>"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find the package name."),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},'grep "package=" file/AndroidManifest.xml'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find the receiver with the ",Object(r.b)("inlineCode",{parentName:"p"},"BIND_DEVICE_ADMIN")," permission: "),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"grep BIND_DEVICE_ADMIN file/AndroidManifest.xml"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The value output should be placed in the ",Object(r.b)("inlineCode",{parentName:"p"},"DEVICE_ADMIN_COMPONENT_NAME")," field."))),Object(r.b)("h2",{id:"download-and-enrollment"},"Download and enrollment"),Object(r.b)("p",null,"The fields in this section are required if the EMM Agent (DPC) is not already installed."),Object(r.b)("h3",{id:"device_admin_package_download_location"},"DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION"),Object(r.b)("p",null,"A url that specifies the download location of the device admin package. This should be made available by the app developer, but it is possible to upload the file to your own http or https location if desired."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mdm/agent.apk"}),"https://github.com/mdm/agent.apk")),Object(r.b)("p",null,"On Datalogic devices with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/aeqrdoc/overview#overview"}),"minimum required firmware"),", the device admin package can be downloaded from a FTP server."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"ftp://user:password@host:port/path"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")," ftp://username:",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:1234@192.168.1.2"}),"1234@192.168.1.2"),":21/mdm/agent.apk"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you are going to host the file on a server on your local area network, it is necessary to configure the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#emm-agent-download"}),"EMM Agent download")," settings."))),Object(r.b)("h3",{id:"device_admin_signature_checksum"},"DEVICE_ADMIN_SIGNATURE_CHECKSUM"),Object(r.b)("p",null,"This field stores a checksum value that is used by the device to verify that the admin application being installed has not been tampered with. This should be provided for you by the app developer, but it is possible to generate the value if necessary if you have the APK file. The correct output can be generated as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'keytool -list -printcert -jarfile MY_FILE.apk | grep -Po "(?<=SHA256:) .*" | xxd -r -p | openssl base64\n')),Object(r.b)("p",null,"You will need several tools to accomplish this (keytool, xxd and openssl). See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/44836891/how-do-i-get-the-signature-checksum-of-my-apk"}),"Stack Overflow")," for more details."),Object(r.b)("h3",{id:"admin_extras_bundle"},"ADMIN_EXTRAS_BUNDLE"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ADMIN_EXTRAS_BUNDLE")," field is optional. Selecting an EMM will auto populate the keys that are accepted by the EMM Agent. You will need to provide the values for the auto populated keys. Any key that does not have a value will be trimmed when the QR code is created. The auto populated keys may also be deleted, if desired. Additional key-value pairs may be added to the admin extras bundle. You should check with your EMM before adding keys to the admin extras bundle to prevent errors during provisioning. This field must contain valid JSON."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Manually creating QR code",src:a(628).default})),Object(r.b)("h2",{id:"configure-wi-fi-network"},"Configure Wi-Fi network"),Object(r.b)("p",null,"Configuring Wi-Fi is optional, but recommended to speed the provisioning process. All devices support WPA, WPA2, WEP, and Open networks."),Object(r.b)("p",null,"Support for configuring an EAP Wi-Fi network in a standard Android Enterprise enrollment QR code will be available in Android Q. However, Datalogic has added the ability to configure an EAP network in the enrollment QR code on Datalogic devices running Android 8 and above with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/aeqrdoc/overview#overview"}),"supported firmware"),"."),Object(r.b)("p",null,"Datalogic supports ",Object(r.b)("inlineCode",{parentName:"p"},"PEAP"),", ",Object(r.b)("inlineCode",{parentName:"p"},"PWD"),", ",Object(r.b)("inlineCode",{parentName:"p"},"SIM"),", ",Object(r.b)("inlineCode",{parentName:"p"},"AKA"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"AKA PRIME")," networks."),Object(r.b)("h2",{id:"additional-android-enterprise-properties"},"Additional Android Enterprise properties"),Object(r.b)("p",null,"These are standard Android Enterprise properties. They are all optional."),Object(r.b)("h2",{id:"datalogic-properties"},"Datalogic properties"),Object(r.b)("p",null,"These properties are only supported on Datalogic devices with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/aeqrdoc/overview#overview"}),"minimum required firmware"),". They are all optional."),Object(r.b)("h3",{id:"mobile-network-settings"},"Mobile network settings"),Object(r.b)("p",null,"Group of settings for configuring an APN and enabling mobile data."),Object(r.b)("h3",{id:"network-time-protocol-ntp"},"Network time protocol (NTP)"),Object(r.b)("p",null,"Setting to specify an NTP server for time synchronization."),Object(r.b)("h3",{id:"emm-agent-download"},"EMM Agent download"),Object(r.b)("p",null,"Additional settings to support downloading the EMM agent from a server located on a closed network."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"EMM Agent download settings are only supported on a subset of Datalogic devices with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/aeqrdoc/overview#overview"}),"minimum required firmware"),".")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"LOCAL_CONNECTION_ONLY"),": Allows the EMM Agent to be downloaded from a server located on a closed network, without internet access. If the server uses HTTP, this is the only required setting. If the server uses HTTPS, see ",Object(r.b)("inlineCode",{parentName:"p"},"TRUST_SERVER"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TRUST_SERVER"),": Allows the EMM Agent to be downloaded from a server that uses a HTTPS certificate that is not trusted by the Android Keystore."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Download and enrollment",src:a(629).default})),Object(r.b)("p",null,Object(r.b)("img",{alt:"DPC download",src:a(630).default})),Object(r.b)("p",null,"Scanning a QR code with these download properties on a device that does not meet the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/aeqrdoc/overview#overview"}),"minimum firmware requirements")," will result in the following error message on the device."),Object(r.b)("p",null,Object(r.b)("img",{alt:"EMM Agent download error",src:a(631).default})),Object(r.b)("h2",{id:"encrypt-qr-code"},"Encrypt QR code"),Object(r.b)("p",null,"Encryption is enabled by default. Please check that your device meets the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/aeqrdoc/overview#overview"}),"minimum firmware requirements")," for encryption. Scanning an encrypted QR code on a device that does not support encryption will result in no action from the device."),Object(r.b)("p",null,"Depending on the amount of data in the enrollment QR code, an encrypted QR code may be split into multiple QR codes. If multiple QR codes are generated, scan each QR code in the Setup Wizard to initiate device provisioning."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Scan Multiple QR Codes",src:a(632).default})),Object(r.b)("h2",{id:"generate-qr-code"},"Generate QR code"),Object(r.b)("p",null,"Once the QR code properties have been configured, click ",Object(r.b)("inlineCode",{parentName:"p"},"Generate QR Code")," at the end of the form to view and save your QR code(s). If the ",Object(r.b)("inlineCode",{parentName:"p"},"Generate QR Code")," button is disabled, review the form for errors. Errors are indicated by a red error symbol and an error message."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Generate QR code",src:a(633).default})),Object(r.b)("h2",{id:"save"},"Save"),Object(r.b)("p",null,"The enrollment QR code(s) can be scanned directly from the screen or can be saved to a PDF file. A unique filename is auto populated. The filename is editable. You may also add a description that will appear at the top of the PDF file. Click ",Object(r.b)("inlineCode",{parentName:"p"},"Save")," and the PDF file will be saved to your ",Object(r.b)("inlineCode",{parentName:"p"},"Downloads")," folder."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A QR code that contains a large amount of data may not be readable by your device. Encrypted QR codes for Datalogic devices will be split into multiple QR codes to support more data. However, an unencrypted QR code is not split into multiple codes and therefore data limits may need to be considered.")),Object(r.b)("h2",{id:"edit"},"Edit"),Object(r.b)("p",null,"To make changes to the QR code, click ",Object(r.b)("inlineCode",{parentName:"p"},"Edit")," or the ",Object(r.b)("inlineCode",{parentName:"p"},"Back")," button in the top left corner. All previously entered values are persisted and editable."),Object(r.b)("h2",{id:"start-over"},"Start Over"),Object(r.b)("p",null,"To discard all progress and start over, click the ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," button in the top left corner."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Warning: This action can't be undone.")))}p.isMDXComponent=!0},314:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||s[u]||r;return a?o.a.createElement(m,c(c({ref:t},d),{},{components:a})):o.a.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<r;d++)i[d]=a[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},626:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/create-new-a28ad4abda4750e37ff08ec0a13f52c8.png"},627:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/select-emm-ee9de776b5df694ad6537ba851e5afc3.png"},628:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/airwatch-configuration-da2e60af2a47f81c44182fab7d7800e8.png"},629:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dpc-download-91ef6df014eba5fa3a171f51ba94b1df.png"},630:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dl-dpc-download-dda4dac87ce598d1fe7168b4bed46c25.png"},631:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dpc-download-error-d27882d769da66b747f70f3e7013aff3.png"},632:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/scan-multiple-qrcodes-bb989a9e3f182c641545300854b3dfac.png"},633:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/generate-qr-b6166b3a4f8e025af4a349679ae171a9.png"}}]);