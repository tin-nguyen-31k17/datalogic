"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[37975],{54544:(e,r,n)=>{n.r(r),n.d(r,{CheckMark:()=>p,NoSupport:()=>o,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(85893),s=n(11151);const i={id:"zebra",title:"Porting Guide",sidebar_label:"Porting Guide"},c=void 0,a={id:"javascript/zebra",title:"Porting Guide",description:"For users who have an existing Zebra Enterprise Browser web app, many of the functions from Zebra's Barcode Module can be adjusted for use with the Datalogic Enterprise Browser JavaScript SDK.",source:"@site/docs/javascript/zebra.mdx",sourceDirName:"javascript",slug:"/javascript/zebra",permalink:"/javascript/zebra",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"zebra",title:"Porting Guide",sidebar_label:"Porting Guide"},sidebar:"AndroidStudioSDK",previous:{title:"Frequently Asked Questions",permalink:"/javascript/faq"},next:{title:"Overview",permalink:"/xamarin/overview"}},l={},d=[{value:"Functions",id:"functions",level:2},{value:"disable",id:"disable",level:3},{value:"enable",id:"enable",level:3},{value:"getAllProperties",id:"getallproperties",level:3},{value:"getProperties",id:"getproperties",level:3},{value:"getProperty",id:"getproperty",level:3},{value:"getSupportedProperties",id:"getsupportedproperties",level:3},{value:"isParamSupported",id:"isparamsupported",level:3},{value:"resetToDefault",id:"resettodefault",level:3},{value:"setProperties",id:"setproperties",level:3},{value:"setProperty",id:"setproperty",level:3},{value:"start",id:"start",level:3},{value:"stop",id:"stop",level:3},{value:"take",id:"take",level:3}],o=()=>{const e={span:"span",...(0,s.a)()};return(0,t.jsx)(e.span,{children:"\u274c"})},p=()=>{const e={span:"span",...(0,s.a)()};return(0,t.jsx)(e.span,{children:"\u2714"})};function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"For users who have an existing Zebra Enterprise Browser web app, many of the functions from Zebra's Barcode Module can be adjusted for use with the Datalogic Enterprise Browser JavaScript SDK."}),"\n",(0,t.jsxs)(r.p,{children:["Many of the Zebra scanner properties of ",(0,t.jsx)(r.code,{children:"EB.Barcode"})," have equivalent Datalogic scanner properties found in the ",(0,t.jsx)(r.code,{children:"BcdPropIds"})," object.  Note that while the Zebra scanner properties can be accessed as either data members of ",(0,t.jsx)(r.code,{children:"EB.Barcode"})," or through member functions, the Datalogic Properties can only be accessed through member functions using the constant values from ",(0,t.jsx)(r.code,{children:"BcdPropIds"}),"."]}),"\n","\n","\n",(0,t.jsx)(r.p,{children:"The following table summarizes which Zebra functions are supported by the Datalogic JavaScript SDK."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Zebra Function"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"Datalogic Support"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"addConnectionListener"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"barcode_recognize"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"commandRemoteScanner"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#disable",children:(0,t.jsx)(r.strong,{children:"disable"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#enable",children:(0,t.jsx)(r.strong,{children:"enable"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"enumerate"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#getallproperties",children:(0,t.jsx)(r.strong,{children:"getAllProperties"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"getautoCharacterSetPreference"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"getDefault"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#getproperties",children:(0,t.jsx)(r.strong,{children:"getProperties"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#getproperty",children:(0,t.jsx)(r.strong,{children:"getProperty"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#getsupportedproperties",children:(0,t.jsx)(r.strong,{children:"getSupportedProperties"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#isparamsupported",children:(0,t.jsx)(r.strong,{children:"isParamSupported"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"registerBluetoothStatus"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"removeConnectionListener"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#resettodefault",children:(0,t.jsx)(r.strong,{children:"resetToDefault"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"setautoCharacterSetPreference"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"setDefault"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(o,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#setproperties",children:(0,t.jsx)(r.strong,{children:"setProperties"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#setproperty",children:(0,t.jsx)(r.strong,{children:"setProperty"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#start",children:(0,t.jsx)(r.strong,{children:"start"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#stop",children:(0,t.jsx)(r.strong,{children:"stop"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#take",children:(0,t.jsx)(r.strong,{children:"take"})})}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:(0,t.jsx)(p,{})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(r.p,{children:"The following entries provide details on various Zebra functions and the equivalent code using the Datalogic SDK."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"disable",children:"disable"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Disable the scanner and place it in its default state."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"EB.Barcode.disable();\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To reset scanner properties and disable physical triggers, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"DLBarcodeMgr.setDefaults();\nDLKeyboardMgr.enableTriggers(false);\n\n// Optionally, to also clear the callback listeners for scan and/or timeout.\nDLBarcodeMgr.ignoreScan();\nDLBarcodeMgr.ignoreTimeout();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"enable",children:"enable"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Enable the scanner, optionally configure its settings, and place it in a state where it will respond to hardware (or soft) triggers."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'EB.Barcode.enable({}, scanReceived);\n\nfunction scanReceived(params) {\n    if (params[\'data\']== "" || params[\'time\']=="") {\n        document.getElementById(\'display\').innerHTML = "Scan timeout";\n        return;\n    }\n\n    var resultStr = "Barcode Data: " + params[\'data\'] + "<br>Time: " + params[\'time\'];\n    document.getElementById("display").innerHTML = resultStr;\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"The scanner is always enabled.  To enable physical triggers and start listening for scan results, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'DLKeyboardMgr.enableTriggers(true);\nDLBarcodeMgr.onScan(scanReceived);\nDLBarcodeMgr.onTimeout(scanTimeout);\n\nfunction scanReceived(scan) {\n    var idStr = "Barcode ID: " + Object.keys(SymIds)[scan.id];\n    var dataStr = "<br>Data: " + scan.text;\n    document.getElementById("display").innerHTML = idStr + dataStr;\n}\n\nfunction scanTimeout() {\n    document.getElementById("display").innerHTML = "Scan timeout";\n}\n'})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"getallproperties",children:"getAllProperties"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Return all the scanner properties as object/value pairs."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"let scanProps = EB.Barcode.getAllProperties();\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To get all of the scanner property values, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"let scanProps = {};  // This will contain all the scanner properties.\nfor (const key in BcdPropIds) {\n    scanProps[key] = DLBarcodeMgr.getProperty(BcdPropIds[key]);\n}\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"getproperties",children:"getProperties"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Return a set of requested scanner properties as object/value pairs."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'let scanProps = EB.Barcode.getProperties(["code39", "code128"]);\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To read multiple scanner property values, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"let scanProps = {CODE39_ENABLE, CODE128_ENABLE};\nfor (const key in Object.keys(scanProps)) {\n    scanProps[key] = DLBarcodeMgr.getProperty(BcdPropIds[key]);\n}\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"getproperty",children:"getProperty"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Return the value of a scanner property."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'let code39Enable = EB.Barcode.getProperty("code39");\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To read the value of a scanner property, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"let code39Enable = DLBarcodeMgr.getProperty(BcdPropIds.CODE39_ENABLE);\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"getsupportedproperties",children:"getSupportedProperties"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Return an array with the scanner properties supported on the device."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"let supportedProps = EB.Barcode.getSuportedProperties();\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To get the supported scanner properties, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"let supportedProps = {};\nfor (const key in Object.keys(BcdPropIds)) {\n    if (DLBarcodeMgr.isAvailable(BcdPropIds[key])) {\n        supportedProps[key] = DLBarcodeMgr.getProperty(BcdPropIds[key]); \n    }\n} \n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"isparamsupported",children:"isParamSupported"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Returns true if the specified scanner property is supported on the device."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'if (EB.Barcode.isParamSupported("code128")) {\n    alert("Code-128 enable property is supported");\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To determine if a scanner property is supported, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'if (DLBarcodeMgr.isAvailable(BcdPropIds.CODE128_ENABLE)) {\n    alert("Code-128 enable property is supported");\n}\n'})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"resettodefault",children:"resetToDefault"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Resets the scanner properties to default values."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"EB.Barcode.resetToDefault();\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To reset scanner properties to defaults, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"DLBarcodeMgr.setDefaults();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"setproperties",children:"setProperties"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsxs)(r.p,{children:["Set the values of scanner properties specified by property",":value"," pairs."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'EB.Barcode.setProperties(\n   {code39:"true",           // ID/value for Code 39\n    code128minLength:"8"});  // ID/value for Code 128 min\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To set multiple scanner property values, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"DLBarcodeMgr.setProperties(\n    [BcdPropIds.CODE39_ENABLE, BcdPropIds.CODE128_LENGTH1],  // IDs\n    [true, 8]);  // Values (Note: values are not strings)\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"setproperty",children:"setProperty"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Set the value of a scanner property."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'EB.Barcode.setProperty("code39", "true");\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To set the value of a scanner property, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"DLBarcodeMgr.setProperty(BcdPropIds.CODE39_ENABLE, true);\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"start",children:"start"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Initiate a scan without pressing the hardware trigger."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"EB.Barcode.start();\n// Note: If the scan result is a timeout you need to make this call:\n// EB.Barcode.stop();\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To start a scan (without a hardware trigger), use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"DLBarcodeMgr.startDecode();\n// Note: A call to stopDecode() is not required on a scan timeout.\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"stop",children:"stop"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Stop a scan initiated with start()."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"EB.Barcode.stop();\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"To stop a scan started by startDecode(), use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"DLBarcodeMgr.stopDecode();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"take",children:"take"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Zebra:"})}),"\n",(0,t.jsx)(r.p,{children:"Enable the scanner, optionally configure its settings, and place it in a state where it will respond to hardware (or soft) triggers."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'EB.Barcode.take({}, scanReceived);\n\nfunction scanReceived(params) {\n    if (params[\'status\']== "cancel") {\n        document.getElementById(\'display\').innerHTML = "Scan cancelled";\n        return;\n    }\n\n    document.getElementById("display").innerHTML = "Barcode Data: " + params[\'barcode\'];\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Datalogic:"})}),"\n",(0,t.jsx)(r.p,{children:"The scanner is always enabled.  To start a scan listen for results, use the following code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'DLBarcodeMgr.onScan(scanReceived);\nDLBarcodeMgr.onTimeout(scanTimeout);\nDLBarcodeMgr.startDecode();\n\nfunction scanReceived(scan) {\n    var idStr = "Barcode ID: " + Object.keys(SymIds)[scan.id];\n    var dataStr = "Data: " + scan.text;\n    document.getElementById("display").innerHTML = idStr + "<br>" + dataStr;\n}\n\nfunction scanTimeout() {\n    document.getElementById("display").innerHTML = "Scan timeout";\n}\n'})})]})}function x(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var t=n(67294);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);