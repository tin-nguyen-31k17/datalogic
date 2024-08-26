"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[62819],{16341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var i=t(85893),s=t(11151),a=t(10993);const c={id:"web-socket",title:"Web Socket Integration",sidebar_label:"Web Socket"},d=void 0,l={id:"aladdin/web-socket",title:"Web Socket Integration",description:"Overview",source:"@site/docs/aladdin/web-socket.mdx",sourceDirName:"aladdin",slug:"/aladdin/web-socket",permalink:"/aladdin/web-socket",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"web-socket",title:"Web Socket Integration",sidebar_label:"Web Socket"},sidebar:"Aladdin",previous:{title:"Intent",permalink:"/aladdin/intent-integration"},next:{title:"Find My Device",permalink:"/aladdin/find-my-device"}},o={},r=[{value:"Overview",id:"overview",level:2},{value:"WebSocket Integration in Aladdin",id:"websocket-integration-in-aladdin",level:2},{value:"Events / Messages",id:"events--messages",level:2},{value:"Event: <code>connection_status</code>",id:"event-connection_status",level:3},{value:"Event: <code>scan</code>",id:"event-scan",level:3},{value:"Message: <code>connectionState</code>",id:"message-connectionstate",level:3},{value:"Message: <code>lastBarcode</code>",id:"message-lastbarcode",level:3},{value:"WebSocket Sample Client",id:"websocket-sample-client",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"This section outlines the capabilities of the WebSocket integration, which facilitates seamless integration with the Android Aladdin application. Intent integration provides a sophisticated communication model, enabling developers to efficiently receive and manage scanned data. With built-in functionalities for two-way communication between the server and client, developers gain a professional and adaptable solution for incorporating scanned data into their applications."}),"\n",(0,i.jsx)(n.h2,{id:"websocket-integration-in-aladdin",children:"WebSocket Integration in Aladdin"}),"\n",(0,i.jsx)(n.p,{children:"The Aladdin server runs on localhost and provides a configurable port address."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select the Web socket option in the Integration UI of Aladdin app."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A dialog box asking for port address will appear. You must enter a valid port number. Please use a port address between 1024 to 65535. Default port address is 8000."}),"\n",(0,i.jsx)(a.f5,{img:"/img/aladdin/integration-socket-port.png"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Tap "Done" to initialize the server.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"events--messages",children:"Events / Messages"}),"\n",(0,i.jsx)(n.p,{children:"Events / messages will be communicated between the Aladdin app and the client app using JSON protocol. Below is a description of the events and JSON structure supported in Aladdin."}),"\n",(0,i.jsxs)(n.h3,{id:"event-connection_status",children:["Event: ",(0,i.jsx)(n.code,{children:"connection_status"})]}),"\n",(0,i.jsxs)(n.p,{children:["The connection status event is used to notify the client about the connection state between the scanner and the Aladdin app (status can be ",(0,i.jsx)(n.a,{href:"#message-connectionstate",children:"requested by client"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"JSON fields:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"event_type"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"The event type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"The connection status of the CODiScan to the Aladdin app"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "event_type": "connection_status",\n    "status": true,\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"event-scan",children:["Event: ",(0,i.jsx)(n.code,{children:"scan"})]}),"\n",(0,i.jsxs)(n.p,{children:["The Scan event is used to notify the client of a barcode scan from Aladdin (latest scanned barcode data can be ",(0,i.jsx)(n.a,{href:"#message-lastbarcode",children:"requested by client"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"JSON fields:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"event_type"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"The event type ()"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scan_time"}),(0,i.jsx)(n.td,{children:"Long"}),(0,i.jsx)(n.td,{children:"The time in milliseconds of the scan event (based on current device time)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scan_code"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"The barcode content"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scan_code_type"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"The barcode type"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "event_type": "scan",\n    "scan_time": 1705048949979,\n    "scan_code": "ABC",\n    "scan_code_type": "Code-128"\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"message-connectionstate",children:["Message: ",(0,i.jsx)(n.code,{children:"connectionState"})]}),"\n",(0,i.jsx)(n.p,{children:"The client can request the latest scanned barcode data by sending a JSON object to the server in the following form:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ "event_type": "connectionState" }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This will result in the server responding with a ",(0,i.jsx)(n.a,{href:"#event-connection_status",children:"connection status event"})," message."]}),"\n",(0,i.jsxs)(n.h3,{id:"message-lastbarcode",children:["Message: ",(0,i.jsx)(n.code,{children:"lastBarcode"})]}),"\n",(0,i.jsx)(n.p,{children:"The client can request the latest scanned barcode data by sending a JSON object to the server in the following form:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ "event_type": "lastBarcode" }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This will result in the server responding with a ",(0,i.jsx)(n.a,{href:"#event-scan",children:"scan event"})," message."]}),"\n",(0,i.jsx)(n.h2,{id:"websocket-sample-client",children:"WebSocket Sample Client"}),"\n",(0,i.jsx)(n.p,{children:"The Aladdin WebSocket client is a purposefully crafted sample application designed to showcase the dynamic capabilities of the WebSocket integration."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The client ",(0,i.jsx)(n.a,{href:"https://github.com/datalogic/aladdin-samples/releases?q=websocket&expanded=true",children:"APK"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/datalogic/aladdin-samples/tree/main/websocket-client",children:"source code"})," can be found in the ",(0,i.jsx)(n.a,{href:"https://github.com/datalogic/aladdin-samples/",children:"Aladdin samples"})," repository on Github."]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the WebSocket client application and tap ",(0,i.jsx)(n.strong,{children:"Connect to server"}),". A dialog box asking for port address will appear. Please, enter the same port address you entered in Aladdin application."]}),"\n",(0,i.jsxs)(a.QA,{children:[(0,i.jsx)(a.f5,{img:"/img/aladdin/websocket-client-home.png"}),(0,i.jsx)(a.f5,{img:"/img/aladdin/websocket-client-port.png"}),(0,i.jsx)(a.f5,{img:"/img/aladdin/websocket-client-connected.png"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once connected to the server, you can receive events whenever a barcode is scanned by the CODiScan and the CODiScan is connected to the Aladdin app."}),"\n",(0,i.jsx)(a.f5,{img:"/img/aladdin/websocket-client-barcode.png"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Tap ",(0,i.jsx)(n.strong,{children:"Get latest barcode"})," to get the last barcode scanned by the CODiScan."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Tap ",(0,i.jsx)(n.strong,{children:"Get scanner status"})," to get the CODiScan connection status with the Aladdin app. Status value will be ",(0,i.jsx)(n.code,{children:"true"})," if CODiScan is connected to Aladdin, ",(0,i.jsx)(n.code,{children:"false"})," if it is not connected."]}),"\n",(0,i.jsx)(a.f5,{img:"/img/aladdin/websocket-client-scanner-status.png"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Tap ",(0,i.jsx)(n.strong,{children:"Disconnect from server"})," to close the socket and stop the communication between the client and the Aladdin app."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},10993:(e,n,t)=>{t.d(n,{QA:()=>c,TS:()=>s,f5:()=>a});t(67294);var i=t(85893);function s(e){let{img:n,maxWidth:t="fit-content",maxHeight:s="fit-content"}=e;return(0,i.jsx)("img",{src:n,style:{width:"auto",height:"auto",maxWidth:t,maxHeight:s}})}function a(e){let{img:n}=e;return(0,i.jsx)("img",{src:n,style:{maxHeight:"550px"}})}function c(e){let{children:n,flexWrap:t="wrap",alignItems:s="center",rowGap:a="15px",columnGap:c="25px"}=e;return(0,i.jsx)("div",{style:{display:"flex",alignItems:s,flexWrap:t,rowGap:a,columnGap:c,marginBottom:"20px"},children:n})}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var i=t(67294);const s={},a=i.createContext(s);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);