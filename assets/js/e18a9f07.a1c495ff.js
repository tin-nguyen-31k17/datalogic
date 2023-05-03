"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[7176],{3905:function(n,e,a){a.d(e,{Zo:function(){return i},kt:function(){return c}});var t=a(67294);function l(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function r(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function m(n,e){if(null==n)return{};var a,t,l=function(n,e){if(null==n)return{};var a,t,l={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(l[a]=n[a]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(l[a]=n[a])}return l}var u=t.createContext({}),o=function(n){var e=t.useContext(u),a=e;return n&&(a="function"==typeof n?n(e):s(s({},e),n)),a},i=function(n){var e=o(n.components);return t.createElement(u.Provider,{value:e},n.children)},k="mdxType",y={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var a=n.components,l=n.mdxType,r=n.originalType,u=n.parentName,i=m(n,["components","mdxType","originalType","parentName"]),k=o(a),p=l,c=k["".concat(u,".").concat(p)]||k[p]||y[p]||r;return a?t.createElement(c,s(s({ref:e},i),{},{components:a})):t.createElement(c,s({ref:e},i))}));function c(n,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=a.length,s=new Array(r);s[0]=p;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=n,m[k]="string"==typeof n?n:l,s[1]=m;for(var o=2;o<r;o++)s[o]=a[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},13324:function(n,e,a){a.r(e),a.d(e,{assets:function(){return i},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return k}});var t=a(87462),l=a(63366),r=(a(67294),a(3905)),s=["components"],m={id:"prfparserjson",title:"Configuration Reference (prf_parser.json)",sidebar_label:"prf_parser.json"},u=void 0,o={unversionedId:"opos/configref/prfparserjson",id:"opos/configref/prfparserjson",title:"Configuration Reference (prf_parser.json)",description:"Overview",source:"@site/docs/opos/configref/prfparserjson.md",sourceDirName:"opos/configref",slug:"/opos/configref/prfparserjson",permalink:"/opos/configref/prfparserjson",draft:!1,tags:[],version:"current",frontMatter:{id:"prfparserjson",title:"Configuration Reference (prf_parser.json)",sidebar_label:"prf_parser.json"},sidebar:"OPOS",previous:{title:"ECICodePage.csv",permalink:"/opos/configref/ecicodepagecsv"},next:{title:"OPOS Registry Settings",permalink:"/opos/configref/registrysettings"}},i={},k=[{value:"Overview",id:"overview",level:2},{value:"Default configuration file",id:"default-configuration-file",level:2}],y={toc:k},p="wrapper";function c(n){var e=n.components,a=(0,l.Z)(n,s);return(0,r.kt)(p,(0,t.Z)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"prf_parser.json resides in the Configuration folder of the OPOS installation and it is used by both OPOS and the DLRMUS application. Upon claiming a scanner, these applications issue Information, Health and Statistics (IHS) commands. The data returned by these commands is then interpreted and routed (to PRF and/or MOF files) based upon the properties defined in the file prf_parser.json"),(0,r.kt)("p",null,"The following files are generated when claiming a scanner."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".PRF"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the PRF file is based upon the selected Profile (e.g. USBScanner.PRF)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},".MOF"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The MOF is used to update Windows WMI and its name is based upon the selected Profile (e.g. USBScanner.MOF). You will not be able to view the MOF unless you disable the DLWMIService. However, disabling the DLWMIService also prevents OPOS from updating Windows WMI.")))),(0,r.kt)("p",null,"The visibility of each data item is controlled by its ",(0,r.kt)("b",null,"mask")," property."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Mask"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Effect"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data appears in neither the PRF nor MOF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data appears only in the PRF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data appears only in the MOF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data appears in both the PRF and MOF")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"The first bit of the TopModelNumber mask will always be set to 1, regardless of how its mask is set in the file.")))),(0,r.kt)("h2",{id:"default-configuration-file"},"Default configuration file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Information": [\n    {\n      "key": "M",\n      "name": "TopModelNumber",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "S",\n      "name": "SerialNumber",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "m",\n      "name": "MainBoardNumber",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "A",\n      "name": "ApplicationROMID",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "R",\n      "name": "ApplicationRevisionLevel",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "C",\n      "name": "ConfigurationFileID",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "B",\n      "name": "BootloaderROMID",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "H",\n      "name": "HardwareID",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "h",\n      "name": "ConnectedDevices",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "U",\n      "name": "UniversalInterfaceApplicationROMID",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "u",\n      "name": "UniversalInterfaceBootloaderROMID",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "W",\n      "name": "InternalScaleInformation",\n      "value": null,\n      "mask": 0\n    },\n    {\n      "key": "D",\n      "name": "RemoteDisplayVersion",\n      "value": null,\n      "mask": 0\n    },\n    {\n      "key": "E",\n      "name": "SmartEASVersion",\n      "value": null,\n      "mask": 1\n    },\n    {\n      "key": "I",\n      "name": "Interface",\n      "value": "Unknown",\n      "mask": 3\n    },\n    {\n      "key": "r",\n      "name": "RFScannerRadioVersion",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "L",\n      "name": "SecondScannerVersion",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "b",\n      "name": "SecondScannerBootloader",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "X",\n      "name": "SecondModelNumber",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "V",\n      "name": "VisionLibraryVersion",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "v",\n      "name": "VirtualScanLineLibraryVersion",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "F",\n      "name": "FPGAVersion",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "Q",\n      "name": "SDRAMCfgVersion",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "P",\n      "name": "IPEAppVersion",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "T",\n      "name": "TDRType",\n      "value": "Unknown",\n      "mask": 3\n    },\n    {\n      "key": "f",\n      "name": "TDRFPGAVersion",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "l",\n      "name": "USBLoaderVersion",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "Y",\n      "name": "SecondSerialNumber",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "Z",\n      "name": "SecondSoftwareVersionNumber",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "d",\n      "name": "DPTCapable",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "q",\n      "name": "SoftwareID",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "I05",\n      "name": "Interface",\n      "value": "RS232",\n      "mask": 0\n    },\n    {\n      "key": "I4",\n      "name": "Interface",\n      "value": "IBM-4683 Port 17",\n      "mask": 0\n    },\n    {\n      "key": "I5",\n      "name": "Interface",\n      "value": "RS232-STD",\n      "mask": 0\n    },\n    {\n      "key": "I8",\n      "name": "Interface",\n      "value": "IBM-4683 Port 5B",\n      "mask": 0\n    },\n    {\n      "key": "I10",\n      "name": "Interface",\n      "value": "USB-COM-RS232-DL",\n      "mask": 0\n    },\n    {\n      "key": "I12",\n      "name": "Interface",\n      "value": "RS232-WN",\n      "mask": 0\n    },\n    {\n      "key": "I1e",\n      "name": "Interface",\n      "value": "USB-COM-SC",\n      "mask": 0\n    },\n    {\n      "key": "I20",\n      "name": "Interface",\n      "value": "RS232-SC",\n      "mask": 0\n    },\n    {\n      "key": "I23",\n      "name": "Interface",\n      "value": "IBM-4683 Port 9B",\n      "mask": 0\n    },\n    {\n      "key": "I35",\n      "name": "Interface",\n      "value": "USB Keyboard",\n      "mask": 0\n    },\n    {\n      "key": "I45",\n      "name": "Interface",\n      "value": "OEM USB",\n      "mask": 0\n    },\n    {\n      "key": "I47",\n      "name": "Interface",\n      "value": "USB-COM",\n      "mask": 0\n    },\n    {\n      "key": "I77",\n      "name": "Interface",\n      "value": "USB-HID",\n      "mask": 0\n    },\n    {\n      "key": "TI1",\n      "name": "TDRType",\n      "value": "T7 IR TDR",\n      "mask": 0\n    },\n    {\n      "key": "TI2",\n      "name": "TDRType",\n      "value": "T8.2 IR TDR",\n      "mask": 0\n    },\n    {\n      "key": "TI3",\n      "name": "TDRType",\n      "value": "T9 IR TDR",\n      "mask": 0\n    },\n    {\n      "key": "TI4",\n      "name": "TDRType",\n      "value": "T12 IR TDR",\n      "mask": 0\n    },\n    {\n      "key": "TI",\n      "name": "TDRType",\n      "value": "Unknown TDR Status",\n      "mask": 0\n    },\n    {\n      "key": "TN1",\n      "name": "TDRType",\n      "value": "7 Standard TDR",\n      "mask": 0\n    },\n    {\n      "key": "TN2",\n      "name": "TDRType",\n      "value": "8.2 Standard TDR",\n      "mask": 0\n    },\n    {\n      "key": "TN3",\n      "name": "TDRType",\n      "value": "9 Standard TDR",\n      "mask": 0\n    },\n    {\n      "key": "TN4",\n      "name": "TDRType",\n      "value": "12 Standard TDR",\n      "mask": 0\n    },\n    {\n      "key": "TN",\n      "name": "TDRType",\n      "value": "Unknown TDR Status",\n      "mask": 0\n    },\n    {\n      "key": "TL0",\n      "name": "TDRType",\n      "value": "Legacy TDR (height unknown)",\n      "mask": 0\n    },\n    {\n      "key": "TLO",\n      "name": "TDRType",\n      "value": "Legacy TDR (height unknown)",\n      "mask": 0\n    },\n    {\n      "key": "TL",\n      "name": "TDRType",\n      "value": "Unknown TDR Status",\n      "mask": 0\n    },\n    {\n      "key": "TU0",\n      "name": "TDRType",\n      "value": "TDR preset: undefined height",\n      "mask": 0\n    },\n    {\n      "key": "TU",\n      "name": "TDRType",\n      "value": "Unknown TDR Status",\n      "mask": 0\n    },\n    {\n      "key": "T??",\n      "name": "TDRType",\n      "value": "TDR present: not ready yet",\n      "mask": 0\n    },\n    {\n      "key": "T?",\n      "name": "TDRType",\n      "value": "Unknown TDR Status",\n      "mask": 0\n    },\n    {\n      "key": "!Dev",\n      "name": "DeviceCategory",\n      "value": "",\n      "mask": 3\n    },\n    {\n      "key": "!Mfg",\n      "name": "ManufacturerName",\n      "value": "Datalogic S.r.l.",\n      "mask": 3\n    },\n    {\n      "key": "!Mod",\n      "name": "ModelName",\n      "value": "",\n      "mask": 3\n    }\n  ],\n  "Health": [\n    {\n      "key": "m",\n      "name": "MotorHealth",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "h",\n      "name": "HorizontalLaserHealth",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "v",\n      "name": "VerticalLaserHealth",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "s",\n      "name": "ScaleHealth",\n      "value": null,\n      "mask": 0\n    },\n    {\n      "key": "d",\n      "name": "RemoteDisplayHealth",\n      "value": null,\n      "mask": 0\n    },\n    {\n      "key": "e",\n      "name": "EASSystemHealth",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "c",\n      "name": "CameraHealth",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "r",\n      "name": "RadioHealth",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "H",\n      "name": "USBHandheldConnected",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "D",\n      "name": "USBSerialDongleConnected",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "0",\n      "name": "IPE0Health",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "1",\n      "name": "IPE1Health",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "2",\n      "name": "IPE2Health",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "3",\n      "name": "IPE3Health",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "S",\n      "name": "ScaleSentryHealth",\n      "value": null,\n      "mask": 3\n    }\n  ],\n  "Statistics": [\n    {\n      "key": "P",\n      "name": "PowerOnHours",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "m",\n      "name": "MotorOnTime",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "l",\n      "name": "LaserOnTime",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "L",\n      "name": "GoodScanCount",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "C",\n      "name": "CustomData",\n      "value": null,\n      "mask": 3\n    },\n    {\n      "key": "E",\n      "name": "EASDeactivateCount",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "e",\n      "name": "EASManualCount",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "B",\n      "name": "NumberBatteryChargingCycles",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "T",\n      "name": "NumberTriggerPulls",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "K",\n      "name": "NumberKeyPresses",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "R",\n      "name": "TotalResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "r",\n      "name": "ErrorResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "V",\n      "name": "VerticalIPEForcedResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "H",\n      "name": "HorizontalIPEForcedResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "D",\n      "name": "Forced2DResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "Q",\n      "name": "TDRForcedResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "v",\n      "name": "VerticalIPEExcessiveResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "h",\n      "name": "HorizontalIPEExcessiveResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "d",\n      "name": "Excessive2DResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "q",\n      "name": "TDRExcessiveResets",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "Z",\n      "name": "POSInitiatedZeroRequests",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "X",\n      "name": "EnforcedZeroEvents",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "Y",\n      "name": "EASRuntimeFaults",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "b",\n      "name": "BatteryHealth",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "s",\n      "name": "BatteryChargeStatus",\n      "value": null,\n      "type": 1,\n      "mask": 3\n    },\n    {\n      "key": "S",\n      "name": "ScaleSentryEvents",\n      "value": null,\n      "type": 1,\n      "mask": 0\n    },\n    {\n      "key": "c",\n      "name": "ScaleCalibrationAttempts",\n      "value": null,\n      "type": 1,\n      "mask": 0\n    },\n    {\n      "key": "z",\n      "name": "ScaleZeroAttempts",\n      "value": null,\n      "mask": 0\n    }\n  ]\n}\n')))}c.isMDXComponent=!0}}]);