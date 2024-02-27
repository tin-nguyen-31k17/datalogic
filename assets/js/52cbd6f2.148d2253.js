"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[22277],{65757:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(85893),s=i(11151);const r={id:"overview",title:"USBLAN",sidebar_label:"Overview"},a=void 0,o={id:"usblan/overview",title:"USBLAN",description:"USBLAN can be downloaded from the Datalogic GitHub site.",source:"@site/docs/usblan/overview.md",sourceDirName:"usblan",slug:"/usblan/overview",permalink:"/usblan/overview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"USBLAN",sidebar_label:"Overview"},sidebar:"USBLAN",next:{title:"Frequently Asked Questions",permalink:"/usblan/faq"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Uninstallation",id:"uninstallation",level:2},{value:"More Information",id:"more-information",level:2},{value:"Driver Documentation",id:"driver-documentation",level:3},{value:"Development using USBLAN driver",id:"development-using-usblan-driver",level:3},{value:"Apps that use USBLAN",id:"apps-that-use-usblan",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Downloading USBLAN",type:"tip",children:(0,t.jsxs)(n.p,{children:["USBLAN can be downloaded from the ",(0,t.jsx)(n.a,{href:"https://github.com/datalogic/usblan/releases",children:"Datalogic GitHub site"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"USBLAN for Windows allows for the simple creation and management of a USB link from a PC to a vendor device, using industry standard networking over USB protocols. When a matching device is connected, USBLAN is loaded as driver for the network function, and creates a virtual network interface, which functions like an Ethernet or wireless interface, but using the USB network link as a medium.\nThe USBLAN driver is provided with an easy-to-use installation kit that can be distributed as-is by  OEMs, or, customized further as part of the installation of other software.\nFor each connected device instance, USBLAN creates a layer 2 network interface. The underlying medium is a USB transfer containing one or more IEEE802.2 frames."}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Plug and Play"})," - drivers are installed automatically for each device, either from a local driver store or via the Internet from Windows Update"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Windows 10"}),", 8.1, 7 and XP support -  x64 and x86"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Power Management"})," \u2013 The driver supports Windows power management allowing the host to enter standby, sleep and hibernation modes, and subsequently resume"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IPv6"})," \u2013 Fully supported"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IPv4"})," \u2013 address can be assigned via DHCP, Auto-IP or can be a static IP address"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DHCP Service"})," \u2013 an optional built-in DHCP server can be used to coordinate and assign the IPv4 address of both the host and device network interfaces"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Composite function"})," \u2013 USBLAN transparently supports a composite device with a network sub-function. It is only necessary to identify the matching interface (MI) value of the network sub-function."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HCK/HLK"})," \u2013 drivers are fully compliant and qualified with Microsoft Windows Hardware Certification tests and procedures"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Multiple devices"})})," \u2013 Sixteen devices may be connected simultaneously to different USB ports on the host."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Please read ",(0,t.jsx)(n.code,{children:"License.txt"})," for the end user license agreement."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For best results, run the ",(0,t.jsx)(n.code,{children:"setup.bat"})," file BEFORE plugging your device in."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On your CE device, make sure you have enabled ",(0,t.jsx)(n.code,{children:"USBLAN"})," mode by navigating to ",(0,t.jsx)(n.code,{children:"Control Panel"})," > ",(0,t.jsx)(n.code,{children:"PC Connection"})," > ",(0,t.jsx)(n.code,{children:"USBLAN"}),". Reboot if needed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"uninstallation",children:"Uninstallation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"There are two methods of removing the USBLAN driver. These two methods should not be mixed: if one if used, the other should not be."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"setup.bat"})," script uses ",(0,t.jsx)(n.code,{children:"DPInst"})," from Microsoft to pre-install the drivers required for your device. ",(0,t.jsx)(n.code,{children:"DPInst"})," creates a USBLAN entry in the ",(0,t.jsx)(n.code,{children:"Programs and Features"})," list. Uninstalling this program/feature will uninstall the USBLAN driver."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Installed devices may be removed using the Device Manager program.  There is an option in the Device Manager to "remove driver software". This option will remove USBLAN and all device instances from the registry.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsx)(n.h3,{id:"driver-documentation",children:"Driver Documentation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://usblan.belcarra.com/p/updating-usblan.html",children:"Updating USBLAN"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://usblan.belcarra.com/p/uninstalling.html",children:"Uninstalling Driver"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://usblan.belcarra.com/",children:"Belcarra USBLAN Manual"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"development-using-usblan-driver",children:"Development using USBLAN driver"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.nuget.org/packages/datalogic-ce-sync/",children:"Datalogic CE Sync"})," - DotNet package available via NuGet. Used to communicate over USBLAN with Datalogic Windows CE devices."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"apps-that-use-usblan",children:"Apps that use USBLAN"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/datalogic/device-sync",children:"Device Sync"})," - Windows command-line app  built using Datalogic CE Sync library"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/dxu/overview",children:"Datalogic DXU"})," - Desktop software capable of connecting to Datalogic Windows CE devices over USBLAN driver."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(67294);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);