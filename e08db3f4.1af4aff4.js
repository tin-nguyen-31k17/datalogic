(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),b=a(6),r=(a(0),a(154)),l={title:"Android HTTP API",id:"android-http-api"},c={unversionedId:"dxu/android-http-api",id:"dxu/android-http-api",isDocsHomePage:!1,title:"Android HTTP API",description:"While DXU Service is enabled and running, DXU Android provides an HTTP endpoint that can be used by local applications to control the scanner. This is useful for web-based applications that need to be able to control the scanner.",source:"@site/docs/dxu/android-http-api.md",slug:"/dxu/android-http-api",permalink:"/dxu/android-http-api",version:"current",sidebar:"DXU",previous:{title:"DXU Android",permalink:"/dxu/android"},next:{title:"Android Intents",permalink:"/dxu/android-intents"}},i=[{value:"Conventions",id:"conventions",children:[]},{value:"APIs",id:"apis",children:[{value:"Start scan trigger",id:"start-scan-trigger",children:[]},{value:"Release scan trigger",id:"release-scan-trigger",children:[]},{value:"Register scan start listener",id:"register-scan-start-listener",children:[]},{value:"Register stop scan listener",id:"register-stop-scan-listener",children:[]},{value:"Register a scan timeout listener",id:"register-a-scan-timeout-listener",children:[]},{value:"Register a scan read listener",id:"register-a-scan-read-listener",children:[]},{value:"Disable all physical triggers",id:"disable-all-physical-triggers",children:[]},{value:"Enable all physical triggers",id:"enable-all-physical-triggers",children:[]},{value:"Disable keyboard wedge",id:"disable-keyboard-wedge",children:[]},{value:"Enable keyboard wedge",id:"enable-keyboard-wedge",children:[]}]}],d={rightToc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"While ",Object(r.b)("inlineCode",{parentName:"p"},"DXU Service")," is enabled and running, DXU Android provides an HTTP endpoint that can be used by local applications to control the scanner. This is useful for web-based applications that need to be able to control the scanner."),Object(r.b)("h2",{id:"conventions"},"Conventions"),Object(r.b)("p",null,"In the documentation below, the following conventions are used:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"dxuPort")," is used to indicate the port on which DXU is running. The default value is ",Object(r.b)("inlineCode",{parentName:"p"},"8080"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Only ",Object(r.b)("inlineCode",{parentName:"p"},"localhost")," connections are allowed, i.e. connections to ",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:dxuPort/scan"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"All APIs, unless otherwise noted, are ",Object(r.b)("inlineCode",{parentName:"p"},"HTTP GET")," methods.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"API responses return no content unless otherwise indicated."))),Object(r.b)("h2",{id:"apis"},"APIs"),Object(r.b)("h3",{id:"start-scan-trigger"},"Start scan trigger"),Object(r.b)("p",null,"Causes the device's scanner to turn on and scan a barcode."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=start_trigger")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Optional Query Parameters")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"timeout=[integer]")," where ",Object(r.b)("inlineCode",{parentName:"td"},"timeout")," is the number of miliseconds delay before the barcode scan attempt times out. Default value is ",Object(r.b)("inlineCode",{parentName:"td"},"3000")," (3 seconds).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when the scanner could be turned on.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when the scanner could not be turned on.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.0")))),Object(r.b)("h3",{id:"release-scan-trigger"},"Release scan trigger"),Object(r.b)("p",null,"Causes the device's scanner to turn off and stop any barcode scan attempt in progress."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=stop_trigger")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when the scanner could be turned off.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when the scanner could not be turned off.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.0")))),Object(r.b)("h3",{id:"register-scan-start-listener"},"Register scan start listener"),Object(r.b)("p",null,"Register a scan start listener to be notified when a scan started event is triggered."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=start_listener")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when the listener could be registered")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when the listener could not be registered")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.0")))),Object(r.b)("h3",{id:"register-stop-scan-listener"},"Register stop scan listener"),Object(r.b)("p",null,"Register a scan stop listener to be notified when a scan stopped event is triggered."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=stop_listener")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when the listener could be registered")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when the listener could not be registered")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.0")))),Object(r.b)("h3",{id:"register-a-scan-timeout-listener"},"Register a scan timeout listener"),Object(r.b)("p",null,"Register a scan timeout listener to be notified when a scan timeout event is triggered."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=timeout_listener")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when the listener could be registered")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when the listener could not be registered")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.0")))),Object(r.b)("h3",{id:"register-a-scan-read-listener"},"Register a scan read listener"),Object(r.b)("p",null,"Register a scan read listener to be notified when a read event is triggered and received data is ready"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=read_listener")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Optional Query Parameters")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"output=[value]")," where ",Object(r.b)("inlineCode",{parentName:"td"},"output")," specifies the format in which the barcode data should be returned. The default value is ",Object(r.b)("inlineCode",{parentName:"td"},"text"),". Valid values are ",Object(r.b)("inlineCode",{parentName:"td"},"text"),", ",Object(r.b)("inlineCode",{parentName:"td"},"json")," and ",Object(r.b)("inlineCode",{parentName:"td"},"xml"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when data is available. Data is returned in the format specificed using the ",Object(r.b)("inlineCode",{parentName:"td"},"output")," parameter. ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("strong",{parentName:"td"},"text example:"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"353309092150281")," ",Object(r.b)("br",null),Object(r.b)("br",null)," ",Object(r.b)("strong",{parentName:"td"},"json example:"),Object(r.b)("br",null),'{"codeID":7,"dataAsText":"353309092150281\\n","rawData":',"[51,53,51,51,48,57,48,57,50,49,53,48,50,56,49]","}",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"xml example:"),Object(r.b)("br",null)," \\<com.datalogic.decode.Barcode",">",Object(r.b)("br",null),"\\<codeID",">","7\\</codeID",">",Object(r.b)("br",null),"  \\<dataAsText",">","353309092150281 \\</dataAsText",">",Object(r.b)("br",null)," \\<rawData",">","MzUzMzA5MDkyMTUwMjgx\\</rawData",">",Object(r.b)("br",null),"\\</com.datalogic.decode.Barcode",">",Object(r.b)("br",null),Object(r.b)("br",null))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when the data could not be retreived.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.0")))),Object(r.b)("h3",{id:"disable-all-physical-triggers"},"Disable all physical triggers"),Object(r.b)("p",null,"Use to disable all physical triggers on the device."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=disable_all_triggers")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when the physical triggers were successfully disabled")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when the physical triggers couldn't be disabled")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.29")))),Object(r.b)("h3",{id:"enable-all-physical-triggers"},"Enable all physical triggers"),Object(r.b)("p",null,"Use to enable all physical triggers on the device."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=enable_all_triggers")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when the physical triggers were successfully enabled")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when the physical triggers couldn't be enabled")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.29")))),Object(r.b)("h3",{id:"disable-keyboard-wedge"},"Disable keyboard wedge"),Object(r.b)("p",null,"Use to disable the keyboard wedge feature."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=disable_keyboardWedge")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when keyboard wedge was successfully disabled")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when keyboard wedge couldn't be disabled")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.29")))),Object(r.b)("h3",{id:"enable-keyboard-wedge"},"Enable keyboard wedge"),Object(r.b)("p",null,"Use to enable the keyboard wedge feature."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"th"},"/scan?action=disable_keyboardWedge")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Success Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200 OK")," when keyboard wedge was successfully enabled")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"500 INTERNAL SERVER ERROR")," when keyboard wedge couldn't be enabled")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Available since")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DXU Agent 1.29")))))}o.isMDXComponent=!0},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var d=b.a.createContext({}),o=function(e){var t=b.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return b.a.createElement(d.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=o(a),p=n,j=s["".concat(l,".").concat(p)]||s[p]||O[p]||r;return a?b.a.createElement(j,c(c({ref:t},d),{},{components:a})):b.a.createElement(j,c({ref:t},d))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var d=2;d<r;d++)l[d]=a[d];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);