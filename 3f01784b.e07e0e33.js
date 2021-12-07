(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),c=(a(0),a(299)),i={id:"faq",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},o={unversionedId:"usblan/faq",id:"usblan/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Can USBLAN be used as an ActiveSync replacement?",source:"@site/docs/usblan/faq.md",slug:"/usblan/faq",permalink:"/usblan/faq",version:"current",sidebar_label:"Frequently Asked Questions",sidebar:"USBLAN",previous:{title:"USBLAN",permalink:"/usblan/overview"}},l=[{value:"Can USBLAN be used as an ActiveSync replacement?",id:"can-usblan-be-used-as-an-activesync-replacement",children:[]},{value:"How can I use a USBLAN connection for Visual Studio debugging?",id:"how-can-i-use-a-usblan-connection-for-visual-studio-debugging",children:[{value:"On your PC",id:"on-your-pc",children:[]},{value:"Device steps",id:"device-steps",children:[]},{value:"Install required cab file for VS 2008 debugging",id:"install-required-cab-file-for-vs-2008-debugging",children:[]}]},{value:"What Datalogic devices (and firmware versions) include the driver?",id:"what-datalogic-devices-and-firmware-versions-include-the-driver",children:[]},{value:"What should happen when I plug in the device?",id:"what-should-happen-when-i-plug-in-the-device",children:[{value:"Are there any configurable settings?",id:"are-there-any-configurable-settings",children:[]},{value:"How do I remove the driver from my PC?",id:"how-do-i-remove-the-driver-from-my-pc",children:[]},{value:"What IP addresses do devices get?",id:"what-ip-addresses-do-devices-get",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"can-usblan-be-used-as-an-activesync-replacement"},"Can USBLAN be used as an ActiveSync replacement?"),Object(c.b)("p",null,"Probably. It is not as full-featured as ActiveSync, but you can do the following:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Communicate over USBLAN using standard TCP/IP or UDP/IP communication"),Object(c.b)("li",{parentName:"ul"},'Deploy and debug apps in Visual Studio 2008. See "How can I use a USBLAN connection for Visual Studio debugging?" below.'),Object(c.b)("li",{parentName:"ul"},"Use Datalogic's ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/cesync/samples"}),"device-sync")," command line tool in place of ActiveSync tools like ",Object(c.b)("inlineCode",{parentName:"li"},"CECopy")," and ",Object(c.b)("inlineCode",{parentName:"li"},"RAPI Start")),Object(c.b)("li",{parentName:"ul"},"Use Datalogic ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/dxu/"}),"DXU")," for Remote Desktop functionality")),Object(c.b)("h2",{id:"how-can-i-use-a-usblan-connection-for-visual-studio-debugging"},"How can I use a USBLAN connection for Visual Studio debugging?"),Object(c.b)("p",null,"Follow the directions below. This is useful if you can't or don't want to use ActiveSync to debug your app in Visual Studio 2008.  You can debug over USBLAN, Ethernet dock, and a Wi-Fi connection to your WEC7 device (Skorpio X4 or Falcon X4) instead. The following steps assuming you will be using a USBLAN connection and the ",Object(c.b)("inlineCode",{parentName:"p"},"device-sync")," command line tool. The ",Object(c.b)("inlineCode",{parentName:"p"},"device-sync")," tool is not strictly necessary, as you could copy the files over and start the processes another way, but it makes the whole process much easier. These steps were adapted from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.toradex.com/knowledge-base/application-debugging-over-ethernet-using-visual-studio-2008"}),"this article"),"."),Object(c.b)("h3",{id:"on-your-pc"},"On your PC"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Follow the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.toradex.com/knowledge-base/application-debugging-over-ethernet-using-visual-studio-2008#Prepare_Visual_Studio_2008_VS2008"}),"steps here")," to configure Visual Studio 2008 (one time setup).")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"If you have a SD card, you could copy the files there. In that case, skip to the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#device-steps"}),"Device Steps")," section")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Download the latest version of the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"cesync/samples"}),"device-sync")," tool")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Open a command prompt in the unzipped folder and run these commands. (You could put all these in a .bat file if desired):"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'device-sync mkdir /debug\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\clientshutdown.exe" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\CMAccept.exe" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\ConmanClient2.exe" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\DeviceAgentTransport.dll" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\DeviceDMA.dll" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\eDbgTL.dll" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\emulatorstub.exe" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Common Files\\microsoft shared\\CoreCon\\1.0\\Target\\wce400\\armv4i\\TcpConnectionA.dll" /debug/\ndevice-sync push "C:\\Program Files (x86)\\Microsoft.NET\\SDK\\CompactFramework\\v3.5\\WindowsCE\\Diagnostics\\NETCFv35.Messages.EN.cab" /debug/\ndevice-sync start /debug/conmanclient2\ndevice-sync start /debug/cmaccept\n')))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"As of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/device-sync/releases/tag/v1.4"}),"version 1.4"),", all ",Object(c.b)("inlineCode",{parentName:"p"},"device-sync")," commands support the ",Object(c.b)("inlineCode",{parentName:"p"},"--ip")," parameter. You can use this to connect to a device over Wi-Fi for example. Here is the first line from the script above with the ",Object(c.b)("inlineCode",{parentName:"p"},"--ip")," parameter included:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"device-sync mkdir --ip 10.1.1.2 /debug\n")))),Object(c.b)("h3",{id:"device-steps"},"Device steps"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"Note:"))," these steps are only necessary if you are not using the device-sync tool. Otherwise, you just started these processes :)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Open a command prompt on the device, cd into debug and run:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"conmanclient2\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Open a 2nd command prompt on the device, cd into debug and run:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cmaccept\n")),Object(c.b)("h3",{id:"install-required-cab-file-for-vs-2008-debugging"},"Install required cab file for VS 2008 debugging"),Object(c.b)("p",null,"This is somewhat unrelated, but usually required to properly use Visual Studio 2008 debugging mode for DotNet apps, even over ActiveSync"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Open Explorer, navigate to /debug, and double click on NETCFv35.Messages.EN.cab. Say yes"),Object(c.b)("li",{parentName:"ul"},"Start your app in Visual Studio 2008 as normal.")),Object(c.b)("h2",{id:"what-datalogic-devices-and-firmware-versions-include-the-driver"},"What Datalogic devices (and firmware versions) include the driver?"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Device"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Firmware version required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Falcon X3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.30")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Falcon X3+"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.30")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skorpio X3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.30")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Falcon X4 WEC7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.20")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skorpio X4 WEC7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.20")))),Object(c.b)("h2",{id:"what-should-happen-when-i-plug-in-the-device"},"What should happen when I plug in the device?"),Object(c.b)("p",null,"After reboot, with the device connected, the device should connect and use the driver you installed in Step 1. The device will show up in Windows Device Manager as \"Datalogic USBLAN Adapter #1\" or similar.\nIf you do an 'ipconfig' on your Windows 7/8 box from a command prompt, you will a new adapter similar to this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"})," Ethernet adapter Local Area Connection 15:\n\n    Connection-specific DNS Suffix  . :\n    Link-local IPv6 Address . . . . . : fe80::b900:ee93:f400:5ee2%51\n    IPv4 Address. . . . . . . . . . . : 169.254.1.1\n    Subnet Mask . . . . . . . . . . . : 255.255.255.248\n    Default Gateway . . . . . . . . . :\n")),Object(c.b)("p",null,"You should be able to ping the device from a cmd prompt (",Object(c.b)("inlineCode",{parentName:"p"},"ping 169.254.1.2"),")\nYou can connect to the device using DXU by connecting to IP address ",Object(c.b)("inlineCode",{parentName:"p"},"169.254.1.2"),"."),Object(c.b)("h3",{id:"are-there-any-configurable-settings"},"Are there any configurable settings?"),Object(c.b)("p",null,"Yes, take a look at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://usblan.belcarra.com/"}),"the manual")," for descriptions of specific registry values."),Object(c.b)("p",null,"The path to the ",Object(c.b)("em",{parentName:"p"},"production")," USBLAN driver registry settings is:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\DatalogicUSBLAN\\\n")),Object(c.b)("h3",{id:"how-do-i-remove-the-driver-from-my-pc"},"How do I remove the driver from my PC?"),Object(c.b)("p",null,"If the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#Uninstallation"}),"basic uninstallation steps")," don't work for you, repeat the following steps with every hardware ID (i.e. each specific device) you've used so far."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'Run Device Manager and look for your device. If you find it, right click and select "uninstall" and check the "Remove Driver Software" checkbox.'),Object(c.b)("li",{parentName:"ul"},"Unplug the device and connect it again. You may find a previous edition of USBLAN matches."),Object(c.b)("li",{parentName:"ul"},'Repeat the above until the device manager reports "unknown device"'),Object(c.b)("li",{parentName:"ul"},"Repeat the preceding steps for other HIDs."),Object(c.b)("li",{parentName:"ul"},'We\'re still not finished: connect your device to other USB ports on the PC -- make sure you get "unknown device" reported.'),Object(c.b)("li",{parentName:"ul"},"Under Windows 10, there is a version on Windows Update. When the removal of local versions is complete, Windows Update will supply a new version. This can be prevented by temporarily suppressing internet access."),Object(c.b)("li",{parentName:"ul"},"For completeness, technically, the DatalogicUSBLAN folder in the registry should be removed (\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\DatalogicUSBLAN",")",". After this the machine will need to be rebooted.")),Object(c.b)("h3",{id:"what-ip-addresses-do-devices-get"},"What IP addresses do devices get?"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Device connected"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Windows NDIS IP address"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Device IP address"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1st device"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.2")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2nd device"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.9"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.10")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3rd device"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.17"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.18")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4th device"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.25"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.26")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5th device"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.33"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.34")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6th device"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.41"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.42")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7th device"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.49"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.50")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8th device"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.57"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"169.254.1.58")))))}s.isMDXComponent=!0},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||c;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);