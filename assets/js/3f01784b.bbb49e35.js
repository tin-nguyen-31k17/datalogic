"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[1784],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"faq",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},s=void 0,d={unversionedId:"usblan/faq",id:"usblan/faq",title:"Frequently Asked Questions",description:"Can USBLAN be used as an ActiveSync replacement?",source:"@site/docs/usblan/faq.md",sourceDirName:"usblan",slug:"/usblan/faq",permalink:"/usblan/faq",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},sidebar:"USBLAN",previous:{title:"Overview",permalink:"/usblan/overview"}},c={},u=[{value:"Can USBLAN be used as an ActiveSync replacement?",id:"can-usblan-be-used-as-an-activesync-replacement",level:2},{value:"How can I use a USBLAN connection for Visual Studio debugging?",id:"how-can-i-use-a-usblan-connection-for-visual-studio-debugging",level:2},{value:"On your PC",id:"on-your-pc",level:3},{value:"Device steps",id:"device-steps",level:3},{value:"Install required cab file for VS 2008 debugging",id:"install-required-cab-file-for-vs-2008-debugging",level:3},{value:"What Datalogic devices (and firmware versions) include the driver?",id:"what-datalogic-devices-and-firmware-versions-include-the-driver",level:2},{value:"What should happen when I plug in the device?",id:"what-should-happen-when-i-plug-in-the-device",level:2},{value:"Are there any configurable settings?",id:"are-there-any-configurable-settings",level:3},{value:"How do I remove the driver from my PC?",id:"how-do-i-remove-the-driver-from-my-pc",level:3},{value:"What IP addresses do devices get?",id:"what-ip-addresses-do-devices-get",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"can-usblan-be-used-as-an-activesync-replacement"},"Can USBLAN be used as an ActiveSync replacement?"),(0,i.kt)("p",null,"Probably. It is not as full-featured as ActiveSync, but you can do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Communicate over USBLAN using standard TCP/IP or UDP/IP communication"),(0,i.kt)("li",{parentName:"ul"},'Deploy and debug apps in Visual Studio 2008. See "How can I use a USBLAN connection for Visual Studio debugging?" below.'),(0,i.kt)("li",{parentName:"ul"},"Use Datalogic's ",(0,i.kt)("a",{parentName:"li",href:"/cesync/samples"},"device-sync")," command line tool in place of ActiveSync tools like ",(0,i.kt)("inlineCode",{parentName:"li"},"CECopy")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"RAPI Start")),(0,i.kt)("li",{parentName:"ul"},"Use Datalogic ",(0,i.kt)("a",{parentName:"li",href:"/dxu/"},"DXU")," for Remote Desktop functionality")),(0,i.kt)("h2",{id:"how-can-i-use-a-usblan-connection-for-visual-studio-debugging"},"How can I use a USBLAN connection for Visual Studio debugging?"),(0,i.kt)("p",null,"Follow the directions below. This is useful if you can't or don't want to use ActiveSync to debug your app in Visual Studio 2008.  You can debug over USBLAN, Ethernet dock, and a Wi-Fi connection to your WEC7 device (Skorpio X4 or Falcon X4) instead. The following steps assuming you will be using a USBLAN connection and the ",(0,i.kt)("inlineCode",{parentName:"p"},"device-sync")," command line tool. The ",(0,i.kt)("inlineCode",{parentName:"p"},"device-sync")," tool is not strictly necessary, as you could copy the files over and start the processes another way, but it makes the whole process much easier. These steps were adapted from ",(0,i.kt)("a",{parentName:"p",href:"https://developer.toradex.com/knowledge-base/application-debugging-over-ethernet-using-visual-studio-2008"},"this article"),"."),(0,i.kt)("h3",{id:"on-your-pc"},"On your PC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.toradex.com/knowledge-base/application-debugging-over-ethernet-using-visual-studio-2008#Prepare_Visual_Studio_2008_VS2008"},"steps here")," to configure Visual Studio 2008 (one time setup).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have a SD card, you could copy the files there. In that case, skip to the ",(0,i.kt)("a",{parentName:"p",href:"#device-steps"},"Device Steps")," section")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Download the latest version of the ",(0,i.kt)("a",{parentName:"p",href:"cesync/samples"},"device-sync")," tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open a command prompt in the unzipped folder and run these commands. (You could put all these in a .bat file if desired):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'device-sync mkdir /debug\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\clientshutdown.exe" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\CMAccept.exe" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\ConmanClient2.exe" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\DeviceAgentTransport.dll" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\DeviceDMA.dll" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\eDbgTL.dll" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\emulatorstub.exe" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\TcpConnectionA.dll" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Microsoft.NET\\SDK\\CompactFramework\\v3.5\\WindowsCE\\Diagnostics\\NETCFv35.Messages.EN.cab" /debug/\ndevice-sync start /debug/conmanclient2\ndevice-sync start /debug/cmaccept\n')))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datalogic/device-sync/releases/tag/v1.4"},"version 1.4"),", all ",(0,i.kt)("inlineCode",{parentName:"p"},"device-sync")," commands support the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ip")," parameter. You can use this to connect to a device over Wi-Fi for example. Here is the first line from the script above with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ip")," parameter included:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"device-sync mkdir --ip 10.1.1.2 /debug\n")))),(0,i.kt)("h3",{id:"device-steps"},"Device steps"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note:"))," these steps are only necessary if you are not using the device-sync tool. Otherwise, you just started these processes :)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open a command prompt on the device, cd into debug and run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"conmanclient2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open a 2nd command prompt on the device, cd into debug and run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cmaccept\n")),(0,i.kt)("h3",{id:"install-required-cab-file-for-vs-2008-debugging"},"Install required cab file for VS 2008 debugging"),(0,i.kt)("p",null,"This is somewhat unrelated, but usually required to properly use Visual Studio 2008 debugging mode for DotNet apps, even over ActiveSync"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open Explorer, navigate to /debug, and double click on NETCFv35.Messages.EN.cab. Say yes"),(0,i.kt)("li",{parentName:"ul"},"Start your app in Visual Studio 2008 as normal.")),(0,i.kt)("h2",{id:"what-datalogic-devices-and-firmware-versions-include-the-driver"},"What Datalogic devices (and firmware versions) include the driver?"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Device"),(0,i.kt)("th",{parentName:"tr",align:null},"Firmware version required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Falcon X3"),(0,i.kt)("td",{parentName:"tr",align:null},"2.30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Falcon X3+"),(0,i.kt)("td",{parentName:"tr",align:null},"2.30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Skorpio X3"),(0,i.kt)("td",{parentName:"tr",align:null},"2.30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Falcon X4 WEC7"),(0,i.kt)("td",{parentName:"tr",align:null},"1.20")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Skorpio X4 WEC7"),(0,i.kt)("td",{parentName:"tr",align:null},"1.20")))),(0,i.kt)("h2",{id:"what-should-happen-when-i-plug-in-the-device"},"What should happen when I plug in the device?"),(0,i.kt)("p",null,"After reboot, with the device connected, the device should connect and use the driver you installed in Step 1. The device will show up in Windows Device Manager as \"Datalogic USBLAN Adapter #1\" or similar.\nIf you do an 'ipconfig' on your Windows 7/8 box from a command prompt, you will a new adapter similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," Ethernet adapter Local Area Connection 15:\n\n    Connection-specific DNS Suffix  . :\n    Link-local IPv6 Address . . . . . : fe80::b900:ee93:f400:5ee2%51\n    IPv4 Address. . . . . . . . . . . : 169.254.1.1\n    Subnet Mask . . . . . . . . . . . : 255.255.255.248\n    Default Gateway . . . . . . . . . :\n")),(0,i.kt)("p",null,"You should be able to ping the device from a cmd prompt (",(0,i.kt)("inlineCode",{parentName:"p"},"ping 169.254.1.2"),")\nYou can connect to the device using DXU by connecting to IP address ",(0,i.kt)("inlineCode",{parentName:"p"},"169.254.1.2"),"."),(0,i.kt)("h3",{id:"are-there-any-configurable-settings"},"Are there any configurable settings?"),(0,i.kt)("p",null,"Yes, take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://usblan.belcarra.com/"},"the manual")," for descriptions of specific registry values."),(0,i.kt)("p",null,"The path to the ",(0,i.kt)("em",{parentName:"p"},"production")," USBLAN driver registry settings is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\DatalogicUSBLAN\\\n")),(0,i.kt)("h3",{id:"how-do-i-remove-the-driver-from-my-pc"},"How do I remove the driver from my PC?"),(0,i.kt)("p",null,"If the ",(0,i.kt)("a",{parentName:"p",href:"#Uninstallation"},"basic uninstallation steps")," don't work for you, repeat the following steps with every hardware ID (i.e. each specific device) you've used so far."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Run Device Manager and look for your device. If you find it, right click and select "uninstall" and check the "Remove Driver Software" checkbox.'),(0,i.kt)("li",{parentName:"ul"},"Unplug the device and connect it again. You may find a previous edition of USBLAN matches."),(0,i.kt)("li",{parentName:"ul"},'Repeat the above until the device manager reports "unknown device"'),(0,i.kt)("li",{parentName:"ul"},"Repeat the preceding steps for other HIDs."),(0,i.kt)("li",{parentName:"ul"},'We\'re still not finished: connect your device to other USB ports on the PC -- make sure you get "unknown device" reported.'),(0,i.kt)("li",{parentName:"ul"},"Under Windows 10, there is a version on Windows Update. When the removal of local versions is complete, Windows Update will supply a new version. This can be prevented by temporarily suppressing internet access."),(0,i.kt)("li",{parentName:"ul"},"For completeness, technically, the DatalogicUSBLAN folder in the registry should be removed (\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\DatalogicUSBLAN",")",". After this the machine will need to be rebooted.")),(0,i.kt)("h3",{id:"what-ip-addresses-do-devices-get"},"What IP addresses do devices get?"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Device connected"),(0,i.kt)("th",{parentName:"tr",align:null},"Windows NDIS IP address"),(0,i.kt)("th",{parentName:"tr",align:null},"Device IP address"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1st device"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.1"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2nd device"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.9"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3rd device"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.17"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.18")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4th device"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.25"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.26")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5th device"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.33"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.34")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6th device"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.41"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.42")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7th device"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.49"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.50")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8th device"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.57"),(0,i.kt)("td",{parentName:"tr",align:null},"169.254.1.58")))))}m.isMDXComponent=!0}}]);