(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(187)),l={id:"api",title:"React Native API",sidebar_label:"API"},i={unversionedId:"reactnative/api",id:"reactnative/api",isDocsHomePage:!1,title:"React Native API",description:"API Reference",source:"@site/docs/reactnative/api.md",slug:"/reactnative/api",permalink:"/reactnative/api",version:"current",sidebar_label:"API",sidebar:"ReactNativeSDK",previous:{title:"React Native SDK",permalink:"/reactnative/overview"},next:{title:"Sample Apps",permalink:"/reactnative/samples"}},c=[{value:"API Reference",id:"api-reference",children:[{value:"Namespaces",id:"namespaces",children:[]},{value:"BarcodeManager",id:"barcodemanager",children:[]},{value:"AutoScanTrigger",id:"autoscantrigger",children:[]},{value:"KeyboardManager",id:"keyboardmanager",children:[]},{value:"LedManager",id:"ledmanager",children:[]},{value:"ScannerProperties",id:"scannerproperties",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"api-reference"},"API Reference"),Object(b.b)("p",null,"All functions are asynchronous. All functions will, at a minimum, include a ",Object(b.b)("inlineCode",{parentName:"p"},"promise")," parameter, which will return the success or failure result of the Java/Kotlin function."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"promise")," will be returned in most cases, and will return the same value as the standard\nJava/Kotlin function would.")),Object(b.b)("h3",{id:"namespaces"},"Namespaces"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Namespace"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#barcodemanager"}),"BarcodeManager")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"receive barcode data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#autoscantrigger"}),"AutoScanTrigger")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"work the the autoscan features")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#keyboardmanager"}),"KeyboardManager")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set usable device triggers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#ledmanager"}),"LedManager")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"control device LEDs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#scannerproperties"}),"ScannerProperties")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"define availabled symbologies")))),Object(b.b)("h3",{id:"barcodemanager"},"BarcodeManager"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#addreadlistenerpromise-number"}),"addReadListener")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Register to receive barcode data on each scan.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#presstriggerpromise-number"}),"pressTrigger")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simulate a trigger button press.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#releasetriggerpromise-number"}),"releaseTrigger")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simulate a trigger button release.")))),Object(b.b)("h4",{id:"addreadlistenerpromise-number"},".addReadListener(",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): number"),Object(b.b)("p",null,"Register to receive barcode data on each scan. The ",Object(b.b)("inlineCode",{parentName:"p"},"callback")," you send to the NativeEventEmitter (see example below) will be called ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"every time"))," a barcode is successfully scanned. Therefore, you will typically only need to call ",Object(b.b)("inlineCode",{parentName:"p"},"barcodeManager.addReadListener()")," ",Object(b.b)("em",{parentName:"p"},"once")," in your application."),Object(b.b)("h5",{id:"response"},"Response"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"barcodeData")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string")," - the barcode data scanned."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"barcodeType")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string")," - will be one of the ",Object(b.b)("inlineCode",{parentName:"li"},"BarcodeID")," values defined in the ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/datalogic/datalogic-android-sdk/blob/master/sdk/src/main/java/com/datalogic/decode/BarcodeID.java"}),"BarcodeID class")," in the ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/datalogic/datalogic-android-sdk"}),"Datalogic Android SDK"),".")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "barcodeData": "EUG2997",\n   "barcodeType": "CODE128"\n}\n')),Object(b.b)("h5",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NativeEventEmitter } from 'react-native';\nimport { BarcodeManager } from '@datalogic/react-native-datalogic-module';\n...\nconst eventEmitter = new NativeEventEmitter(BarcodeManager);\neventEmitter.addListener('successCallback', (map) => {\n  Alert.alert('Barcode Data:' + map.barcodeData);\n});\nawait BarcodeManager.addReadListener();\n")),Object(b.b)("h4",{id:"presstriggerpromise-number"},".pressTrigger(",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): number"),Object(b.b)("p",null,"Call this method to simulate a trigger button press. The method does not always immediately start a capture; instead it behaves like pressing a physical scan button."),Object(b.b)("h5",{id:"response-1"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"number")," with  SUCCESS (0) in case of success, otherwise a possible error code, matching one of the DecodeException error constants."),Object(b.b)("h5",{id:"example-1"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { BarcodeManager } from '@datalogic/react-native-datalogic-module';\n...\nvar triggerReturn = await BarcodeManager.pressTrigger();\nif (triggerReturn === 0) {\n  console.log('Press Trigger Success');\n} else {\n  console.log('Press Trigger Failure: ' + triggerReturn);\n}\n")),Object(b.b)("h4",{id:"releasetriggerpromise-number"},".releaseTrigger(",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): number"),Object(b.b)("p",null,"Call this method to simulate a release of a trigger button. The method does not always immediately stop a capture; instead it behaves like releasing a physical scan button."),Object(b.b)("h5",{id:"response-2"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"number")," with  SUCCESS (0) in case of success, otherwise a possible error code, matching one of the DecodeException error constants."),Object(b.b)("h5",{id:"example-2"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { BarcodeManager } from '@datalogic/react-native-datalogic-module';\n...\nvar triggerReturn = await BarcodeManager.releaseTrigger();\nif (triggerReturn === 0) {\n  console.log('Release Trigger Success');\n} else {\n  console.log('Release Trigger Failure: ' + triggerReturn);\n}\n")),Object(b.b)("h3",{id:"autoscantrigger"},"AutoScanTrigger"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#isavailablepromise-boolean"}),"isAvailable")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determine if the auto scan feature is available on this device.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#getsupportedrangespromise-object"}),"getSupportedRanges")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get the supported ranges of the autoscan feature.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#getcurrentrangepromise-object"}),"getCurrentRange")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get the current range of the autoscan feature.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#setcurrentrangerangeid-promise-boolean"}),"setCurrentRange")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the current range of the autoscan feature.")))),Object(b.b)("h4",{id:"isavailablepromise-boolean"},".isAvailable(",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): boolean"),Object(b.b)("p",null,"Determine if the auto scan feature is available on this device."),Object(b.b)("h5",{id:"response-3"},"Response"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"boolean")," - indicates if autoscan is supported or not on this device.")),Object(b.b)("h5",{id:"example-3"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { AutoScanTrigger } from '@datalogic/react-native-datalogic-module';\n...\nvar isAvailableReturn = await AutoScanTrigger.isAvailable();\nconsole.log(isAvailableReturn);\n")),Object(b.b)("h4",{id:"getsupportedrangespromise-object"},".getSupportedRanges(",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): Object"),Object(b.b)("p",null,"Get the supported ranges of the autoscan feature."),Object(b.b)("h5",{id:"response-4"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"supportedRanges")," : ",Object(b.b)("inlineCode",{parentName:"p"},"Object")," - provides array of ranges device supports. The array will be null if device does not support autoscan. Each object in the array contains:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"id")," : ",Object(b.b)("inlineCode",{parentName:"li"},"number")," - unique value for a step in the supported ranges"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"name")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string")," - descriptive text related to the ",Object(b.b)("inlineCode",{parentName:"li"},"id"))),Object(b.b)("p",null,"If AutoScan is not supported by device:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"null\n")),Object(b.b)("p",null,"If AutoScan is supported:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "supportedRanges":[\n  {\n    "id":0,\n    "name":"Near"\n  },\n  {\n    "id":1,\n    "name":"Intermediate"\n  },\n  {\n    "id":2,\n    "name":"Far"\n  }\n  ]\n}\n')),Object(b.b)("h5",{id:"example-4"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { AutoScanTrigger } from '@datalogic/react-native-datalogic-module';\n...\nvar supportedRangesReturn = await AutoScanTrigger.getSupportedRanges();\nconsole.log(supportedRangesReturn);\n")),Object(b.b)("h4",{id:"getcurrentrangepromise-object"},".getCurrentRange(",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): Object"),Object(b.b)("p",null,"Get the current range of the autoscan feature."),Object(b.b)("h5",{id:"response-5"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"currentRange")," : ",Object(b.b)("inlineCode",{parentName:"p"},"object")," - contains 2 fields:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"id")," : ",Object(b.b)("inlineCode",{parentName:"li"},"number")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"name")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string"))),Object(b.b)("p",null,"If AutoScan is not supported by device:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"null\n")),Object(b.b)("p",null,"If AutoScan is supported:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "currentRange":\n  {\n      "id":1,\n      "name":"Intermediate"\n  }\n}\n')),Object(b.b)("h5",{id:"example-5"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { AutoScanTrigger } from '@datalogic/react-native-datalogic-module';\n...\nvar currentRangeReturn = await AutoScanTrigger.getCurrentRange();\nconsole.log(currentRangeReturn);\n")),Object(b.b)("h4",{id:"setcurrentrangerangeid-promise-boolean"},".setCurrentRange(",Object(b.b)("inlineCode",{parentName:"h4"},"rangeId"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): boolean"),Object(b.b)("p",null,"Set the current range of the autoscan feature."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rangeId")," : ",Object(b.b)("inlineCode",{parentName:"p"},"number")," - should match one of the ",Object(b.b)("inlineCode",{parentName:"p"},"id")," values retrieved by the getSupportedRanges function."),Object(b.b)("h5",{id:"response-6"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Boolean")," with true or false depending on success. "),Object(b.b)("h5",{id:"example-6"},"Example"),Object(b.b)("p",null,'Set current range to "Intermediate"'),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var setRangeReturn = await AutoScanTrigger.setCurrentRange(0);\nconsole.log(setRangeReturn);\n")),Object(b.b)("h3",{id:"keyboardmanager"},"KeyboardManager"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#getallavailabletriggers-promise-object"}),"getAllAvailableTriggers")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get all the available triggers of the device.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#setallavailabletriggersenable-promise-boolean"}),"setAllAvailableTriggers")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set all the devices triggers on or off.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#settriggersconfig-promise-boolean"}),"setTriggers")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set one or more triggers on or off.")))),Object(b.b)("h4",{id:"getallavailabletriggers-promise-object"},".getAllAvailableTriggers (",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): Object"),Object(b.b)("p",null,"Get all the available triggers of the device."),Object(b.b)("h5",{id:"response-7"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"triggers")," : ",Object(b.b)("inlineCode",{parentName:"p"},"Object")," - each Object in the triggers Object contains:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"enabled")," : ",Object(b.b)("inlineCode",{parentName:"li"},"boolean")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"id")," : ",Object(b.b)("inlineCode",{parentName:"li"},"number")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"name")," : ",Object(b.b)("inlineCode",{parentName:"li"},"string"))),Object(b.b)("p",null,"Typical response:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "triggers":[\n    {\n        "enabled":true,\n        "id":0,\n        "name":"Left Trigger"\n    },\n    {\n        "enabled":false,\n        "id":1,\n        "name":"Right Trigger"\n    },\n    {\n        "enabled":false,\n        "id":2,\n        "name":"Pistol Trigger"\n    }\n    ]\n}\n')),Object(b.b)("h5",{id:"example-7"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var getTriggersReturn = await KeyboardManager.getAllAvailableTriggers();\nconsole.log(getTriggersReturn);\n")),Object(b.b)("h4",{id:"setallavailabletriggersenable-promise-boolean"},".setAllAvailableTriggers(",Object(b.b)("inlineCode",{parentName:"h4"},"enable"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): boolean"),Object(b.b)("p",null,"Set all the devices triggers on or off."),Object(b.b)("h5",{id:"response-8"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"boolean")," with true/false based on success"),Object(b.b)("h5",{id:"example-8"},"Example"),Object(b.b)("p",null,"Turn all triggers on."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var setTriggersReturn = await KeyboardManager.setAllAvailableTriggers(\n  true\n);\nconsole.log(setTriggersReturn);\n")),Object(b.b)("h4",{id:"settriggersconfig-promise-boolean"},".setTriggers(",Object(b.b)("inlineCode",{parentName:"h4"},"config"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): boolean"),Object(b.b)("p",null,"Set one or more triggers on or off. You will likely call ",Object(b.b)("inlineCode",{parentName:"p"},"getAllAvailableTriggers"),", edit the ",Object(b.b)("inlineCode",{parentName:"p"},"enabled")," flags of each returned object as desired, and then resubmit by calling ",Object(b.b)("inlineCode",{parentName:"p"},"setTriggers"),"."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"config")," : ",Object(b.b)("inlineCode",{parentName:"p"},"Object")," - each object in the array represents an individual trigger. Each object in the array contains:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"id")," : ",Object(b.b)("inlineCode",{parentName:"li"},"number")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"enabled")," : ",Object(b.b)("inlineCode",{parentName:"li"},"boolean"))),Object(b.b)("h5",{id:"response-9"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"boolean")," with true/false based on success."),Object(b.b)("h5",{id:"example-9"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var triggersArray = [\n  { enabled: false, id: 0, name: 'Left Trigger' },\n  { enabled: true, id: 1, name: 'Right Trigger' },\n  { enabled: false, id: 2, name: 'Pistol Trigger' },\n];\nvar setTriggersReturn = await KeyboardManager.setTriggers(triggersArray);\nconsole.log(setTriggersReturn);\n")),Object(b.b)("h3",{id:"ledmanager"},"LedManager"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#setledobject-promise-boolean"}),"setLed")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set various device LEDs.")))),Object(b.b)("h4",{id:"setledobject-promise-boolean"},".setLed(",Object(b.b)("inlineCode",{parentName:"h4"},"object"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): boolean"),Object(b.b)("p",null,"Set the various device LEDs. A list of enum values for LEDs can be found ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/notification/Led.html"}),"here"),"."),Object(b.b)("h5",{id:"response-10"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"boolean")," with true/false based on success."),Object(b.b)("h5",{id:"example-10"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var ledMap = { led: 'LED_GREEN_SPOT', enable: false };\nvar setLedReturn = await LedManager.setLed(ledMap);\nconsole.log(setLedReturn);\n")),Object(b.b)("h3",{id:"scannerproperties"},"ScannerProperties"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#editpromise-object"}),"edit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get a list of supported properties along with the state of each (enabled or disabled).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#storeproperties-promise-boolean"}),"store")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Apply changes to one or more properties with the values supplied.")))),Object(b.b)("h4",{id:"editpromise-object"},".edit(",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): Object"),Object(b.b)("p",null,"Get a list of supported scanner properties along with the state of each (enabled or disabled)."),Object(b.b)("h5",{id:"response-11"},"Response"),Object(b.b)("p",null,"A single Object containing Objects for each of the available symbologies. Each symbology contains, at a minimum, these fields:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"enable")," : ",Object(b.b)("inlineCode",{parentName:"li"},"boolean")," - if scanner is set to detect this barcode type or not"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"supported")," : ",Object(b.b)("inlineCode",{parentName:"li"},"boolean")," - if the scanner supports the given barcode type or not")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "keyboardWedge":{"enable":true,"supported":true},\n  "aztec":{"enable":true,"supported":true},\n  "codabar":{"enable":true,"supported":true},\n  "code128":{"enable":true,"supported":true},\n  "code39":{"enable":true,"supported":true},\n  "code93":{"enable":false,"supported":true},\n  "composite":{"enable":false,"supported":true},\n  "datamatrix":{"enable":true,"supported":true},\n  "digimarc":{"enable":false,"supported":false},\n  "discrete25":{"enable":false,"supported":true},\n  "ean13":{"enable":true,"supported":true},\n  "ean8":{"enable":true,"supported":true},\n  "gs1DataBar_14":{"enable":true,"supported":true},\n  "gs1DataBar_Expanded":{"enable":true,"supported":true},\n  "gs1DataBar_Limited":{"enable":true,"supported":true},\n  "interleaved25":{"enable":true,"supported":true},\n  "matrix25":{"enable":false,"supported":true},\n  "maxicode":{"enable":false,"supported":true},\n  "microQr":{"enable":false,"supported":true},\n  "micropdf417":{"enable":false,"supported":true},\n  "msi":{"enable":false,"supported":true},\n  "p4State":{"enable":false,"supported":true},\n  "pAus":{"enable":false,"supported":true},\n  "pJap":{"enable":false,"supported":true},\n  "pKix":{"enable":false,"supported":true},\n  "pPlanet":{"enable":false,"supported":true},\n  "pPostnet":{"enable":false,"supported":true},\n  "pRM":{"enable":false,"supported":true},\n  "pdf417":{"enable":true,"supported":true},\n  "qrCode":{"enable":true,"supported":true},\n  "upcA":{"enable":true,"supported":true},\n  "upcE":{"enable":true,"supported":true}\n}\n')),Object(b.b)("h5",{id:"example-11"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var editReturn = await ScannerProperties.edit();\nconsole.log(JSON.stringify(editReturn, undefined, 1));\n")),Object(b.b)("h4",{id:"storeproperties-promise-boolean"},".store(",Object(b.b)("inlineCode",{parentName:"h4"},"properties"),", ",Object(b.b)("inlineCode",{parentName:"h4"},"promise"),"): boolean"),Object(b.b)("p",null,"Apply changes to one or more symbologies with the values supplied in ",Object(b.b)("inlineCode",{parentName:"p"},"properties"),"."),Object(b.b)("h5",{id:"response-12"},"Response"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"boolean")," with true/false based on success."),Object(b.b)("h5",{id:"examples"},"Examples"),Object(b.b)("p",null,"Disable keyboardWedge symbology, enable aztec symbology."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var storeMap = {\n  keyboardWedge: { enable: false, supported: true },\n  aztec: { enable: true },\n};\nvar storeReturn = await ScannerProperties.store(storeMap);\nconsole.log(JSON.stringify(storeReturn, undefined, 1));\n")))}p.isMDXComponent=!0},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,j=s["".concat(l,".").concat(u)]||s[u]||d[u]||b;return a?r.a.createElement(j,i(i({ref:t},o),{},{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);