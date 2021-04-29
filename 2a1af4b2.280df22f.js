(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{110:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return o}));var n=t(3),r=t(7),b=(t(0),t(235)),l={id:"api",title:"Cordova API",sidebar_label:"API"},c={unversionedId:"cordova/api",id:"cordova/api",isDocsHomePage:!1,title:"Cordova API",description:"API Reference",source:"@site/docs/cordova/api.md",slug:"/cordova/api",permalink:"/cordova/api",version:"current",sidebar_label:"API",sidebar:"CordovaSDK",previous:{title:"Frequently Asked Questions",permalink:"/cordova/faq"},next:{title:"Sample Apps",permalink:"/cordova/samples"}},i=[{value:"API Reference",id:"api-reference",children:[{value:"Namespaces",id:"namespaces",children:[]},{value:"barcodeManager",id:"barcodemanager",children:[]},{value:"autoScanTrigger",id:"autoscantrigger",children:[]},{value:"keyboardManager",id:"keyboardmanager",children:[]},{value:"ledManager",id:"ledmanager",children:[]},{value:"scannerProperties",id:"scannerproperties",children:[]}]}],s={rightToc:i};function o(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"api-reference"},"API Reference"),Object(b.b)("p",null,"All functions are asynchronous. All functions will, at a minimum, include ",Object(b.b)("inlineCode",{parentName:"p"},"successCallback")," and ",Object(b.b)("inlineCode",{parentName:"p"},"errorCallback")," parameters, both of which are callback functions."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"successCallback")," will be called in normal cases, and will return an appropriate JSON ",Object(b.b)("inlineCode",{parentName:"p"},"object"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"errorCallback")," will be called when there was an error, and will return a single error ",Object(b.b)("inlineCode",{parentName:"p"},"string"),"."))),Object(b.b)("h3",{id:"namespaces"},"Namespaces"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Namespace"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#barcodemanager"}),"barcodeManager")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"receive barcode data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#autoscantrigger"}),"autoScanTrigger")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"work the the autoscan features")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#keyboardmanager"}),"keyboardManager")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set usable device triggers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#ledmanager"}),"ledManager")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"control device LEDs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#scannerproperties"}),"scannerProperties")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"define availabled symbologies")))),Object(b.b)("h3",{id:"barcodemanager"},"barcodeManager"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#addreadlistner-successcallback-errorcallback-object"}),"addReadListner")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Register to receive barcode data on each scan.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#presstrigger-successcallback-errorcallback-object"}),"pressTrigger")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simulate a trigger button press.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#releasetrigger-successcallback-errorcallback-object"}),"releaseTrigger")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simulate a trigger button release.")))),Object(b.b)("h4",{id:"addreadlistnersuccesscallback-errorcallback-object"},".addReadListner(",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Register to receive barcode data on each scan. ",Object(b.b)("inlineCode",{parentName:"p"},"successCallback")," will be called ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"every time"))," a barcode is successfully scanned. Therefore, you will typically only need to call ",Object(b.b)("inlineCode",{parentName:"p"},"barcodeManager.addReadListner()")," ",Object(b.b)("em",{parentName:"p"},"once")," in your application."),Object(b.b)("h5",{id:"response"},"Response"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"barcodeData")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string")," - the barcode data scanned."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"barcodeType")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string")," - will be one of the ",Object(b.b)("inlineCode",{parentName:"li"},"BarcodeID")," values defined in the ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/datalogic/datalogic-android-sdk/blob/master/sdk/src/main/java/com/datalogic/decode/BarcodeID.java"}),"BarcodeID class")," in the ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/datalogic/datalogic-android-sdk"}),"Datalogic Android SDK"),".")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "barcodeData": "EUG2997",\n   "barcodeType": "CODE128"\n}\n')),Object(b.b)("h5",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'declare let barcodeManager : any;\n...\nbarcodeManager.addReadListner(\n   (data) => {\n     parsedData = JSON.parse(data);\n     alert(parsedData.barcodeData + ", " + parsedData.barcodeType);\n   },\n   (err)=>{ alert(err); }\n);\n')),Object(b.b)("h4",{id:"presstriggersuccesscallback-errorcallback-object"},".pressTrigger(",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Call this method to simulate a trigger button press. The method does not always immediately start a capture; instead it behaves like pressing a physical scan button."),Object(b.b)("h5",{id:"response-1"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"string")," with success message"),Object(b.b)("h5",{id:"example-1"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"barcodeManager.pressTrigger(\n  (data) => { alert(data); },\n  (err) => { alert(err);}\n);\n")),Object(b.b)("h4",{id:"releasetriggersuccesscallback-errorcallback-object"},".releaseTrigger(",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Call this method to simulate a release of a trigger button. The method does not always immediately stop a capture; instead it behaves like releasing a physical scan button."),Object(b.b)("h5",{id:"response-2"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"string")," with success message"),Object(b.b)("h5",{id:"example-2"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"barcodeManager.releaseTrigger(\n  (data) => { alert(data); },\n  (err) => { alert(err);}\n);\n")),Object(b.b)("h3",{id:"autoscantrigger"},"autoScanTrigger"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#isavailable-successcallback-errorcallback-object"}),"isAvailable")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determine if the auto scan feature is available on this device.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#getsupportedranges-successcallback-errorcallback-object"}),"getSupportedRanges")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get the supported ranges of the autoscan feature.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#getcurrentrange-successcallback-errorcallback-object"}),"getCurrentRange")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get the current range of the autoscan feature.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#setcurrentrange-id-successcallback-errorcallback-object"}),"setCurrentRange")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the current range of the autoscan feature.")))),Object(b.b)("h4",{id:"isavailablesuccesscallback-errorcallback-object"},".isAvailable(",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Determine if the auto scan feature is available on this device."),Object(b.b)("h5",{id:"response-3"},"Response"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"available")," : ",Object(b.b)("inlineCode",{parentName:"li"},"boolean")," - indicates if autoscan is supported or not on this device.")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ "available": true }\n')),Object(b.b)("h5",{id:"example-3"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"declare let autoScanTrigger : any;\nisAvailable : boolean = false;\n...\nautoScanTrigger.isAvailable(\n  (data) => {\n    this.isAvailable = JSON.parse(data).available;\n    alert(this.isAvailable);\n  },\n  (err) => { alert(err); }\n);\n")),Object(b.b)("h4",{id:"getsupportedrangessuccesscallback-errorcallback-object"},".getSupportedRanges(",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Get the supported ranges of the autoscan feature."),Object(b.b)("h5",{id:"response-4"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"supportedRanges")," : ",Object(b.b)("inlineCode",{parentName:"p"},"array")," - provides array of ranges device supports. The array will be empty if device does not support autoscan. Each object in the array contains:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"id")," : ",Object(b.b)("inlineCode",{parentName:"li"},"integer")," - unique value for a step in the supported ranges"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"name")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string")," - descriptive text related to the ",Object(b.b)("inlineCode",{parentName:"li"},"id"))),Object(b.b)("p",null,"If AutoScan is not supported by device:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ "supportedRanges":[] }\n')),Object(b.b)("p",null,"If AutoScan is supported:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "supportedRanges":[\n  {\n    "id":0,\n    "name":"Near"\n  },\n  {\n    "id":1,\n    "name":"Intermediate"\n  },\n  {\n    "id":2,\n    "name":"Far"\n  }\n  ]\n}\n')),Object(b.b)("h5",{id:"example-4"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'declare let autoScanTrigger : any;\nautoScanTrigger.getSupportedRanges(\n  (data) => {\n    alert(JSON.parse(data).supportedRanges);\n    if(this.supportedRanges.length == 0)\n      alert("Device does not support Auto Scan");\n  },\n  (err) => { alert(err); }\n);\n')),Object(b.b)("h4",{id:"getcurrentrangesuccesscallback-errorcallback-object"},".getCurrentRange(",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Get the current range of the autoscan feature."),Object(b.b)("h5",{id:"response-5"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"currentRange")," : ",Object(b.b)("inlineCode",{parentName:"p"},"object")," - contains 2 fields:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"id")," : ",Object(b.b)("inlineCode",{parentName:"li"},"integer")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"name")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string"))),Object(b.b)("p",null,"If AutoScan is not supported by device:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ "currentRange":null }\n')),Object(b.b)("p",null,"If AutoScan is supported:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "currentRange":\n  {\n      "id":1,\n      "name":"Intermediate"\n  }\n}\n')),Object(b.b)("h5",{id:"example-5"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"declare let autoScanTrigger : any;\nautoScanTrigger.getCurrentRange(\n  (data) => {\n    alert(JSON.parse(data).currentRange);\n  },\n  (err) => { alert(err); }\n);\n")),Object(b.b)("h4",{id:"setcurrentrangeid-successcallback-errorcallback-object"},".setCurrentRange(",Object(b.b)("inlineCode",{parentName:"h4"},"id"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Set the current range of the autoscan feature."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"id")," : ",Object(b.b)("inlineCode",{parentName:"p"},"integer")," - should match one of the ",Object(b.b)("inlineCode",{parentName:"p"},"id")," values retrieved by the getSupportedRanges function."),Object(b.b)("h5",{id:"response-6"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"string")," with success message"),Object(b.b)("h5",{id:"example-6"},"Example"),Object(b.b)("p",null,'Set current range to "Intermediate"'),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"autoScanTrigger.setCurrentRange(\n  0,\n  (data) => { alert(data); },\n  (err) => { alert(err); }\n);\n")),Object(b.b)("h3",{id:"keyboardmanager"},"keyboardManager"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#getallavailabletriggers-successcallback-errorcallback-object"}),"getAllAvailableTriggers")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get all the available triggers of the device.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#setallavailabletriggers-enable-successcallback-errorcallback-object"}),"setAllAvailableTriggers")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set all the devices triggers on or off.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#settriggers-config-successcallback-errorcallback-object"}),"setTriggers")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set one or more triggers on or off.")))),Object(b.b)("h4",{id:"getallavailabletriggers-successcallback-errorcallback-object"},".getAllAvailableTriggers (",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Get all the available triggers of the device."),Object(b.b)("h5",{id:"response-7"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"triggers")," : ",Object(b.b)("inlineCode",{parentName:"p"},"array")," - each object in the array contains:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"enabled")," : ",Object(b.b)("inlineCode",{parentName:"li"},"boolean")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"id")," : ",Object(b.b)("inlineCode",{parentName:"li"},"integer")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"name")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string"))),Object(b.b)("p",null,"Typical response:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "triggers":[\n    {\n        "enabled":true,\n        "id":3,\n        "name":"Front Trigger"\n    },\n    {\n        "enabled":false,\n        "id":4,\n        "name":"Auto Scan Trigger"\n    },\n    {\n        "enabled":false,\n        "id":5,\n        "name":"Motion Trigger"\n    }\n    ]\n}\n')),Object(b.b)("h5",{id:"example-7"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"keyboardManager.getAllAvailableTriggers(\n  (data) => { alert(JSON.parse(data).triggers); },\n  (err) => { alert(err); }\n);\n")),Object(b.b)("h4",{id:"setallavailabletriggersenable-successcallback-errorcallback-object"},".setAllAvailableTriggers(",Object(b.b)("inlineCode",{parentName:"h4"},"enable"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Set all the devices triggers on or off."),Object(b.b)("h5",{id:"response-8"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"string")," with success message"),Object(b.b)("h5",{id:"example-8"},"Example"),Object(b.b)("p",null,"Turn all triggers on."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"keyboardManager.setAllAvailableTriggers(\n  true,\n  (data) => { alert(data); },\n  (err) => { alert(err); }\n);\n")),Object(b.b)("h4",{id:"settriggersconfig-successcallback-errorcallback-object"},".setTriggers(",Object(b.b)("inlineCode",{parentName:"h4"},"config"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Set one or more triggers on or off. You will likely call ",Object(b.b)("inlineCode",{parentName:"p"},"getAllAvailableTriggers"),", edit the ",Object(b.b)("inlineCode",{parentName:"p"},"enabled")," flags of each returned object as desired, and then resubmit by calling ",Object(b.b)("inlineCode",{parentName:"p"},"setTriggers"),"."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"config")," : ",Object(b.b)("inlineCode",{parentName:"p"},"array")," - each object in the array represents an individual trigger. Each object in the array contains:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"id")," : ",Object(b.b)("inlineCode",{parentName:"li"},"integer")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"enabled")," : ",Object(b.b)("inlineCode",{parentName:"li"},"boolean"))),Object(b.b)("h5",{id:"response-9"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"string")," with success message"),Object(b.b)("h5",{id:"example-9"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"//an array os supported triggers\ntriggers:{id: number, name: string, enabled: boolean}[]  = [];\n...\nkeyboardManager.getAllAvailableTriggers(\n  (data) => {\n    this.triggers = JSON.parse(data).triggers;\n    this.triggers[0].enabled = false;\n\n    keyboardManager.setTriggers(\n      this.triggers,\n      (data) => { alert(data); },\n      (err) => { alert(err);}\n    );\n  },\n  (err) => { alert(err); }\n);\n")),Object(b.b)("h3",{id:"ledmanager"},"ledManager"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#setled-ledconfig-successcallback-errorcallback-object"}),"setLed")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set various device LEDs.")))),Object(b.b)("h4",{id:"setledledconfig-successcallback-errorcallback-object"},".setLed(",Object(b.b)("inlineCode",{parentName:"h4"},"ledConfig"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Set the various device LEDs. A list of enum values for LEDs can be found ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/notification/Led.html"}),"here"),"."),Object(b.b)("h5",{id:"response-10"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"string")," with success message"),Object(b.b)("h5",{id:"example-10"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'ledManager.setLed({"led": "LED_GOOD_READ", "enable": false}, null, null);\n')),Object(b.b)("h3",{id:"scannerproperties"},"scannerProperties"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#edit-successcallback-errorcallback-object"}),"edit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get a list of supported properties along with the state of each (enabled or disabled).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#store-properties-successcallback-errorcallback-object"}),"store")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Apply changes to one or more properties with the values supplied.")))),Object(b.b)("h4",{id:"editsuccesscallback-errorcallback-object"},".edit(",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Get a list of supported scanner properties along with the state of each (enabled or disabled)."),Object(b.b)("h5",{id:"response-11"},"Response"),Object(b.b)("p",null,"A single JSON object containing an object for each of the available symbologies. Each symbology contains, at a minimum, these fields:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"enable")," : ",Object(b.b)("inlineCode",{parentName:"li"},"boolean")," - if scanner is set to detect this barcode type or not"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"supported")," : ",Object(b.b)("inlineCode",{parentName:"li"},"boolean")," - if the scanner supports the given barcode type or not")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "keyboardWedge":{"enable":true,"supported":true},\n  "aztec":{"enable":true,"supported":true},\n  "codabar":{"enable":true,"supported":true},\n  "code128":{"enable":true,"supported":true},\n  "code39":{"enable":true,"supported":true},\n  "code93":{"enable":false,"supported":true},\n  "composite":{"enable":false,"supported":true},\n  "datamatrix":{"enable":true,"supported":true},\n  "digimarc":{"enable":false,"supported":false},\n  "discrete25":{"enable":false,"supported":true},\n  "ean13":{"enable":true,"supported":true},\n  "ean8":{"enable":true,"supported":true},\n  "gs1DataBar_14":{"enable":true,"supported":true},\n  "gs1DataBar_Expanded":{"enable":true,"supported":true},\n  "gs1DataBar_Limited":{"enable":true,"supported":true},\n  "interleaved25":{"enable":true,"supported":true},\n  "matrix25":{"enable":false,"supported":true},\n  "maxicode":{"enable":false,"supported":true},\n  "microQr":{"enable":false,"supported":true},\n  "micropdf417":{"enable":false,"supported":true},\n  "msi":{"enable":false,"supported":true},\n  "p4State":{"enable":false,"supported":true},\n  "pAus":{"enable":false,"supported":true},\n  "pJap":{"enable":false,"supported":true},\n  "pKix":{"enable":false,"supported":true},\n  "pPlanet":{"enable":false,"supported":true},\n  "pPostnet":{"enable":false,"supported":true},\n  "pRM":{"enable":false,"supported":true},\n  "pdf417":{"enable":true,"supported":true},\n  "qrCode":{"enable":true,"supported":true},\n  "upcA":{"enable":true,"supported":true},\n  "upcE":{"enable":true,"supported":true}\n}\n')),Object(b.b)("h5",{id:"example-11"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"properties : any = {};\n...\nscannerProperties.edit(\n  (data) => {\n    this.properties =  JSON.parse(data);\n    this.aztec = false;\n    this.codabar = false;\n    this.code128 = true;\n    this.keyboardWedge = false;\n  },\n  (err) => { alert(err); }\n);\n")),Object(b.b)("h4",{id:"storeproperties-successcallback-errorcallback-object"},".store(",Object(b.b)("inlineCode",{parentName:"h4"},"properties"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"successCallback"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"errorCallback"),"): Object"),Object(b.b)("p",null,"Apply changes to one or more symbologies with the values supplied in ",Object(b.b)("inlineCode",{parentName:"p"},"properties"),"."),Object(b.b)("h5",{id:"response-12"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"string")," with success message"),Object(b.b)("h5",{id:"examples"},"Examples"),Object(b.b)("p",null,"Enable UPC-E symbology"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'scannerProperties.store({"upcE":{"enable":true,"supported":true}}, null, null);\n')),Object(b.b)("p",null,"Disable keyboard wedge feature"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'scannerProperties.store({"keyboardWedge":{"enable":false}}, null, null);\n')))}o.isMDXComponent=!0},235:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function b(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){b(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),o=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=o(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},j=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=o(t),j=n,u=p["".concat(l,".").concat(j)]||p[j]||d[j]||b;return t?r.a.createElement(u,c(c({ref:a},s),{},{components:t})):r.a.createElement(u,c({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var b=t.length,l=new Array(b);l[0]=j;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<b;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);