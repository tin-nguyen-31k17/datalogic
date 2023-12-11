"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[7815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(r),k=n,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||p;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var i=2;i<p;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},22909:(e,t,r)=>{r.r(t),r.d(t,{CheckMark:()=>d,NoSupport:()=>c,assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const p={id:"zebra",title:"Porting Guide",sidebar_label:"Porting Guide"},l=void 0,o={unversionedId:"javascript/zebra",id:"javascript/zebra",title:"Porting Guide",description:"For users who have an existing Zebra Enterprise Browser web app, many of the functions from Zebra's Barcode Module can be adjusted for use with the Datalogic Enterprise Browser JavaScript SDK.",source:"@site/docs/javascript/zebra.md",sourceDirName:"javascript",slug:"/javascript/zebra",permalink:"/javascript/zebra",draft:!1,tags:[],version:"current",frontMatter:{id:"zebra",title:"Porting Guide",sidebar_label:"Porting Guide"},sidebar:"AndroidStudioSDK",previous:{title:"Frequently Asked Questions",permalink:"/javascript/faq"},next:{title:"Overview",permalink:"/xamarin/overview"}},s={},i=[{value:"Functions",id:"functions",level:2},{value:"disable",id:"disable",level:3},{value:"enable",id:"enable",level:3},{value:"getAllProperties",id:"getallproperties",level:3},{value:"getProperties",id:"getproperties",level:3},{value:"getProperty",id:"getproperty",level:3},{value:"getSupportedProperties",id:"getsupportedproperties",level:3},{value:"isParamSupported",id:"isparamsupported",level:3},{value:"resetToDefault",id:"resettodefault",level:3},{value:"setProperties",id:"setproperties",level:3},{value:"setProperty",id:"setproperty",level:3},{value:"start",id:"start",level:3},{value:"stop",id:"stop",level:3},{value:"take",id:"take",level:3}],c=()=>(0,n.kt)("span",null,"\u274c"),d=()=>(0,n.kt)("span",null,"\u2714"),u={toc:i,NoSupport:c,CheckMark:d},k="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For users who have an existing Zebra Enterprise Browser web app, many of the functions from Zebra's Barcode Module can be adjusted for use with the Datalogic Enterprise Browser JavaScript SDK."),(0,n.kt)("p",null,"Many of the Zebra scanner properties of ",(0,n.kt)("inlineCode",{parentName:"p"},"EB.Barcode")," have equivalent Datalogic scanner properties found in the ",(0,n.kt)("inlineCode",{parentName:"p"},"BcdPropIds")," object.  Note that while the Zebra scanner properties can be accessed as either data members of ",(0,n.kt)("inlineCode",{parentName:"p"},"EB.Barcode")," or through member functions, the Datalogic Properties can only be accessed through member functions using the constant values from ",(0,n.kt)("inlineCode",{parentName:"p"},"BcdPropIds"),"."),(0,n.kt)("p",null,"The following table summarizes which Zebra functions are supported by the Datalogic JavaScript SDK."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Zebra Function"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Datalogic Support"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addConnectionListener"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"barcode_recognize"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"commandRemoteScanner"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#disable"},(0,n.kt)("strong",{parentName:"a"},"disable"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#enable"},(0,n.kt)("strong",{parentName:"a"},"enable"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enumerate"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#getallproperties"},(0,n.kt)("strong",{parentName:"a"},"getAllProperties"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"getautoCharacterSetPreference"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"getDefault"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#getproperties"},(0,n.kt)("strong",{parentName:"a"},"getProperties"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#getproperty"},(0,n.kt)("strong",{parentName:"a"},"getProperty"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#getsupportedproperties"},(0,n.kt)("strong",{parentName:"a"},"getSupportedProperties"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#isparamsupported"},(0,n.kt)("strong",{parentName:"a"},"isParamSupported"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"registerBluetoothStatus"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"removeConnectionListener"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#resettodefault"},(0,n.kt)("strong",{parentName:"a"},"resetToDefault"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setautoCharacterSetPreference"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setDefault"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(c,{mdxType:"NoSupport"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#setproperties"},(0,n.kt)("strong",{parentName:"a"},"setProperties"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#setproperty"},(0,n.kt)("strong",{parentName:"a"},"setProperty"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#start"},(0,n.kt)("strong",{parentName:"a"},"start"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#stop"},(0,n.kt)("strong",{parentName:"a"},"stop"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#take"},(0,n.kt)("strong",{parentName:"a"},"take"))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)(d,{mdxType:"CheckMark"}))))),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("p",null,"The following entries provide details on various Zebra functions and the equivalent code using the Datalogic SDK."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"disable"},"disable"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Disable the scanner and place it in its default state."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"EB.Barcode.disable();\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To reset scanner properties and disable physical triggers, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"DLBarcodeMgr.setDefaults();\nDLKeyboardMgr.enableTriggers(false);\n\n// Optionally, to also clear the callback listeners for scan and/or timeout.\nDLBarcodeMgr.ignoreScan();\nDLBarcodeMgr.ignoreTimeout();\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"enable"},"enable"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Enable the scanner, optionally configure its settings, and place it in a state where it will respond to hardware (or soft) triggers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'EB.Barcode.enable({}, scanReceived);\n\nfunction scanReceived(params) {\n    if (params[\'data\']== "" || params[\'time\']=="") {\n        document.getElementById(\'display\').innerHTML = "Scan timeout";\n        return;\n    }\n\n    var resultStr = "Barcode Data: " + params[\'data\'] + "<br>Time: " + params[\'time\'];\n    document.getElementById("display").innerHTML = resultStr;\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"The scanner is always enabled.  To enable physical triggers and start listening for scan results, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'DLKeyboardMgr.enableTriggers(true);\nDLBarcodeMgr.onScan(scanReceived);\nDLBarcodeMgr.onTimeout(scanTimeout);\n\nfunction scanReceived(scan) {\n    var idStr = "Barcode ID: " + Object.keys(SymIds)[scan.id];\n    var dataStr = "<br>Data: " + scan.text;\n    document.getElementById("display").innerHTML = idStr + dataStr;\n}\n\nfunction scanTimeout() {\n    document.getElementById("display").innerHTML = "Scan timeout";\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getallproperties"},"getAllProperties"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Return all the scanner properties as object/value pairs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"let scanProps = EB.Barcode.getAllProperties();\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To get all of the scanner property values, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"let scanProps = {};  // This will contain all the scanner properties.\nfor (const key in BcdPropIds) {\n    scanProps[key] = DLBarcodeMgr.getProperty(BcdPropIds[key]);\n}\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getproperties"},"getProperties"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Return a set of requested scanner properties as object/value pairs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'let scanProps = EB.Barcode.getProperties(["code39", "code128"]);\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To read multiple scanner property values, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"let scanProps = {CODE39_ENABLE, CODE128_ENABLE};\nfor (const key in Object.keys(scanProps)) {\n    scanProps[key] = DLBarcodeMgr.getProperty(BcdPropIds[key]);\n}\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getproperty"},"getProperty"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Return the value of a scanner property."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'let code39Enable = EB.Barcode.getProperty("code39");\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To read the value of a scanner property, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"let code39Enable = DLBarcodeMgr.getProperty(BcdPropIds.CODE39_ENABLE);\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getsupportedproperties"},"getSupportedProperties"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Return an array with the scanner properties supported on the device."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"let supportedProps = EB.Barcode.getSuportedProperties();\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To get the supported scanner properties, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"let supportedProps = {};\nfor (const key in Object.keys(BcdPropIds)) {\n    if (DLBarcodeMgr.isAvailable(BcdPropIds[key])) {\n        supportedProps[key] = DLBarcodeMgr.getProperty(BcdPropIds[key]); \n    }\n} \n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"isparamsupported"},"isParamSupported"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Returns true if the specified scanner property is supported on the device."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'if (EB.Barcode.isParamSupported("code128")) {\n    alert("Code-128 enable property is supported");\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To determine if a scanner property is supported, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'if (DLBarcodeMgr.isAvailable(BcdPropIds.CODE128_ENABLE)) {\n    alert("Code-128 enable property is supported");\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"resettodefault"},"resetToDefault"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Resets the scanner properties to default values."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"EB.Barcode.resetToDefault();\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To reset scanner properties to defaults, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"DLBarcodeMgr.setDefaults();\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setproperties"},"setProperties"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Set the values of scanner properties specified by property:value pairs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'EB.Barcode.setProperties(\n   {code39:"true",           // ID/value for Code 39\n    code128minLength:"8"});  // ID/value for Code 128 min\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To set multiple scanner property values, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"DLBarcodeMgr.setProperties(\n    [BcdPropIds.CODE39_ENABLE, BcdPropIds.CODE128_LENGTH1],  // IDs\n    [true, 8]);  // Values (Note: values are not strings)\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setproperty"},"setProperty"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Set the value of a scanner property."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'EB.Barcode.setProperty("code39", "true");\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To set the value of a scanner property, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"DLBarcodeMgr.setProperty(BcdPropIds.CODE39_ENABLE, true);\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"start"},"start"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Initiate a scan without pressing the hardware trigger."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"EB.Barcode.start();\n// Note: If the scan result is a timeout you need to make this call:\n// EB.Barcode.stop();\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To start a scan (without a hardware trigger), use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"DLBarcodeMgr.startDecode();\n// Note: A call to stopDecode() is not required on a scan timeout.\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"stop"},"stop"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Stop a scan initiated with start()."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"EB.Barcode.stop();\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"To stop a scan started by startDecode(), use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"DLBarcodeMgr.stopDecode();\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"take"},"take"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zebra:")),(0,n.kt)("p",null,"Enable the scanner, optionally configure its settings, and place it in a state where it will respond to hardware (or soft) triggers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'EB.Barcode.take({}, scanReceived);\n\nfunction scanReceived(params) {\n    if (params[\'status\']== "cancel") {\n        document.getElementById(\'display\').innerHTML = "Scan cancelled";\n        return;\n    }\n\n    document.getElementById("display").innerHTML = "Barcode Data: " + params[\'barcode\'];\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Datalogic:")),(0,n.kt)("p",null,"The scanner is always enabled.  To start a scan listen for results, use the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'DLBarcodeMgr.onScan(scanReceived);\nDLBarcodeMgr.onTimeout(scanTimeout);\nDLBarcodeMgr.startDecode();\n\nfunction scanReceived(scan) {\n    var idStr = "Barcode ID: " + Object.keys(SymIds)[scan.id];\n    var dataStr = "Data: " + scan.text;\n    document.getElementById("display").innerHTML = idStr + "<br>" + dataStr;\n}\n\nfunction scanTimeout() {\n    document.getElementById("display").innerHTML = "Scan timeout";\n}\n')))}m.isMDXComponent=!0}}]);