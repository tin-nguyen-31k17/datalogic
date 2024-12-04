"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[40567],{80781:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=i(85893),a=i(11151),r=i(10993);const o={id:"home-page",title:"Home Page",sidebar_label:"Home Page"},l=void 0,s={id:"aladdin/home-page",title:"Home Page",description:"The Aladdin application home page contains the following sections:",source:"@site/docs/aladdin/home-page.mdx",sourceDirName:"aladdin",slug:"/aladdin/home-page",permalink:"/aladdin/home-page",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"home-page",title:"Home Page",sidebar_label:"Home Page"},sidebar:"Aladdin",previous:{title:"Overview",permalink:"/aladdin/overview"},next:{title:"Keyboard",permalink:"/aladdin/kbd-integration"}},d={},c=[{value:"Battery",id:"battery",level:2},{value:"Battery level indicator",id:"battery-level-indicator",level:3},{value:"Battery Information",id:"battery-information",level:3},{value:"Device Status",id:"device-status",level:2},{value:"Integration",id:"integration",level:2},{value:"Configuration",id:"configuration",level:2}];function h(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The Aladdin application home page contains the following sections:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#battery",children:"Battery Information"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#device-status",children:"Device Status Information"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#integration",children:"Integration Menu"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration",children:"Configuration Menu"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"battery",children:"Battery"}),"\n",(0,t.jsx)(n.p,{children:"This section displays battery related information e.g., current battery level and other battery related parameters."}),"\n",(0,t.jsx)(n.h3,{id:"battery-level-indicator",children:"Battery level indicator"}),"\n",(0,t.jsx)(n.p,{children:"The application displays the real time battery level of the connected CODiScan in an immersive view as shown in the screenshots below."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Battery_Level",src:i(14756).Z+"",width:"1689",height:"139"})}),"\n",(0,t.jsx)(n.h3,{id:"battery-information",children:"Battery Information"}),"\n",(0,t.jsx)(n.p,{children:"The application displays advanced battery information like percentage, management profile (user-customizable), charging status, source, temperature, voltage, current, charge left."}),"\n",(0,t.jsxs)(r.QA,{columnGap:"50px",children:[(0,t.jsx)(r.f5,{img:"/img/aladdin/battery-management.png"}),(0,t.jsx)(r.f5,{img:"/img/aladdin/battery-profile.png"})]}),"\n",(0,t.jsx)(n.h2,{id:"device-status",children:"Device Status"}),"\n",(0,t.jsx)(n.p,{children:"Tap the >> icon next to the device name on the home page as shown in the first screenshot below. The CODiScan will make a beep sound and the application will take you to the Device Status page that displays:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Device Type"}),"\n",(0,t.jsx)(n.li,{children:"Firmware version"}),"\n",(0,t.jsx)(n.li,{children:"Device ID"}),"\n",(0,t.jsx)(n.li,{children:"Battery management profile"}),"\n"]}),"\n",(0,t.jsxs)(r.QA,{columnGap:"50px",children:[(0,t.jsx)(r.f5,{img:"/img/aladdin/home-device-details.png"}),(0,t.jsx)(r.f5,{img:"/img/aladdin/device-status.png"})]}),"\n",(0,t.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,t.jsx)(n.p,{children:"Once connection between the application and the CODiScan is established, you can send commands to the scanner or receive data from it. The Aladdin application starts a foreground service that keeps the communication with the scanner alive. When the foreground service is running, the mobile device running the application will show a persistent notification in the notification window. This foreground service does not start on boot, but only when connection with the CODiScan is established. With the help of foreground services, the application provides five interface methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"../aladdin/kbd-integration",children:"Keyboard"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Aladdin on-screen keyboard outputs barcode data as key input."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"../aladdin/intent-integration",children:"Intent"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Barcode data sent to application using an intent."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"../aladdin/web-socket",children:"Web Socket"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Barcode data sent to application using a web socket."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"../aladdin/sdk-integration",children:"SDK"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SDK interface that can be used by applications to retrieve barcode data."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"../aladdin/native-integration",children:"Native Integration"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Barcode data injected into barcode scanning interface as though it were scanned by the integrated scanner.  (Newer Datalogic devices only)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Once paired, a scanner configuration can be queried by the Aladdin application. The application can apply a minimal set of configurations (available even remotely). The following configurations are available to view and modify:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Pairing (Disconnection Timeout)"}),"\n",(0,t.jsx)(n.li,{children:"Feedback and Aiming (e.g. Beeper, Lateral LED, Vibration, Vibration duration, Aiming)"}),"\n",(0,t.jsx)(n.li,{children:"Battery (e.g. Battery profile, standby time frame)"}),"\n",(0,t.jsx)(n.li,{children:"Device Key (e.g. Reading mode, Bluetooth link to host check, Battery status, Unlink etc.)"}),"\n",(0,t.jsx)(n.li,{children:"Reading (e.g. Pick list mode, Mobile phone display)"}),"\n",(0,t.jsx)(n.li,{children:"Symbologies 1D, 2D and Postal (e.g., 39, 128, UPC/EAN, Interleaved 2 of 5, POSTNET, IMB, QR, Datamatrix, Aztec, Maxicode, Green Spot Duration, Beeper duration)"}),"\n",(0,t.jsx)(n.li,{children:"Barcode Encoding (Unicode, Simplified Chinese, Korean)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"It is also possible to configure the device by downloading configuration from the Aladdin configurator website and scanning the downloaded QR code (see the barcode icon on top right corner of the image below)."}),"\n",(0,t.jsxs)(r.QA,{columnGap:"50px",children:[(0,t.jsx)(r.f5,{img:"/img/aladdin/configuration-settings.png"}),(0,t.jsx)(r.f5,{img:"/img/aladdin/cfg_barcode_scan.png"})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"On Android 13+ the app notifications are disabled by default. You may need to enable notifications manually to view foreground service notification."})})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},10993:(e,n,i)=>{i.d(n,{QA:()=>l,TS:()=>a,f5:()=>r,sD:()=>s,xo:()=>o});i(67294);var t=i(85893);function a(e){let{img:n,maxWidth:i="fit-content",maxHeight:a="fit-content"}=e;return(0,t.jsx)("img",{src:n,style:{width:"auto",height:"auto",maxWidth:i,maxHeight:a}})}function r(e){let{img:n,height:i="550px"}=e;return(0,t.jsx)("img",{src:n,style:{maxHeight:i}})}function o(e){let{img:n,height:i="550px",caption:a}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:n,style:{maxHeight:i}}),(0,t.jsx)("center",{children:(0,t.jsx)("b",{children:a})})]})}function l(e){let{children:n,flexWrap:i="wrap",alignItems:a="center",rowGap:r="15px",columnGap:o="25px"}=e;return(0,t.jsx)("div",{style:{display:"flex",alignItems:a,flexWrap:i,rowGap:r,columnGap:o,marginBottom:"20px"},children:n})}function s(e){let{img:n}=e;return(0,t.jsx)("img",{src:n,style:{border:"2px solid black"}})}},14756:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/battery-level-47df9e7f4055f9a70e2e7834e7ea6d25.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(67294);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);