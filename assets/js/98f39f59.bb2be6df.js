"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[8483],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,u=d["".concat(s,".").concat(m)]||d[m]||h[m]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"android",title:"DXU Android",sidebar_label:"Android"},s=void 0,p={unversionedId:"dxu/android",id:"dxu/android",title:"DXU Android",description:"Downloads",source:"@site/docs/dxu/android.md",sourceDirName:"dxu",slug:"/dxu/android",permalink:"/dxu/android",tags:[],version:"current",frontMatter:{id:"android",title:"DXU Android",sidebar_label:"Android"},sidebar:"DXU",previous:{title:"Frequently Asked Questions (Android)",permalink:"/dxu/connect-to-devices"},next:{title:"Android HTTP API",permalink:"/dxu/android-http-api"}},c={},h=[{value:"Downloads",id:"downloads",level:2},{value:"Settings",id:"settings",level:2},{value:"a. Enable Service",id:"a-enable-service",level:3},{value:"b. Enable Discovery Manager",id:"b-enable-discovery-manager",level:3},{value:"c. Enable Log",id:"c-enable-log",level:3},{value:"d. Change Log File Location",id:"d-change-log-file-location",level:3},{value:"e. Allow Binary Data in Configuration",id:"e-allow-binary-data-in-configuration",level:3},{value:"f. Custom Home Page",id:"f-custom-home-page",level:3},{value:"g. Home Page Location",id:"g-home-page-location",level:3},{value:"h. Is Authentication Required",id:"h-is-authentication-required",level:3},{value:"i. User Name",id:"i-user-name",level:3},{value:"j. Password",id:"j-password",level:3},{value:"k. Is Simplified Deploy enabled",id:"k-is-simplified-deploy-enabled",level:3},{value:"l. Is application install enabled",id:"l-is-application-install-enabled",level:3},{value:"m. Enable VNC",id:"m-enable-vnc",level:3},{value:"n. VNC Password",id:"n-vnc-password",level:3},{value:"Advanced Settings",id:"advanced-settings",level:2},{value:"a. Device HTTP Server Port",id:"a-device-http-server-port",level:3},{value:"b. Device UDP Server Port",id:"b-device-udp-server-port",level:3},{value:"Desktop UDP Server Port",id:"desktop-udp-server-port",level:3},{value:"c. VNC Server Port",id:"c-vnc-server-port",level:3},{value:"Version",id:"version",level:2},{value:"Logging",id:"logging",level:2},{value:"Security",id:"security",level:2},{value:"Enable Authentication in DXU Agent",id:"enable-authentication-in-dxu-agent",level:3},{value:"Change the User Name in DXU Agent",id:"change-the-user-name-in-dxu-agent",level:3},{value:"Change the Password in DXU Agent",id:"change-the-password-in-dxu-agent",level:3}],d={toc:h};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"downloads"},"Downloads"),(0,o.kt)("p",null,"DXU Agent comes preloaded on Datalogic Android devices, but we also make the latest released version available here in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datalogic/dxu-android/releases"},"Releases")," section on the DXU Android Github page."),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"The most important thing to remember about changing DXU Agent settings\nis that the DXU Agent Service must be disabled before changing settings,\nand it must be enabled again after changing settings to put those\nsettings into operation."),(0,o.kt)("p",null,"Find these settings in the DXU Agent application on the mobile computer."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the DXU Agent application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Menu")," button (",(0,o.kt)("strong",{parentName:"p"},"\u22ee"),") to display the menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"Settings button",src:n(48617).Z,width:"483",height:"391"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," button."))),(0,o.kt)("p",null,"Here is a brief overview of each of the settings:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"DXU Agent settings",src:n(98886).Z,width:"300",height:"709"})),(0,o.kt)("h3",{id:"a-enable-service"},"a. Enable Service"),(0,o.kt)("p",null,"This checkbox is the key to changing any settings in DXU Agent.\nUnchecking this checkbox allows you to edit almost all settings.\nChecking this checkbox puts those settings into operation. This checkbox\nis checked by default."),(0,o.kt)("p",null,"Also, if for some reason you want to disable DXU on a mobile computer,\nyou can uncheck this checkbox to prevent DXU from changing settings.\nDoing this will not undo settings changes already made, but it will\nprevent DXU from getting the mobile computer\u2019s settings and will prevent\nDXU from changing any settings on the mobile computer."),(0,o.kt)("h3",{id:"b-enable-discovery-manager"},"b. Enable Discovery Manager"),(0,o.kt)("p",null,"This checkbox controls the mobile computer\u2019s broadcast of its name and\ndevice type over USB or over a network to the DXU desktop application.\nWhen checked, DXU will automatically see when the mobile computer\nconnects to USB or over a network. When unchecked, DXU will not display\nwhen the mobile computer connects to USB or over the network. This\ncheckbox is checked by default."),(0,o.kt)("h3",{id:"c-enable-log"},"c. Enable Log"),(0,o.kt)("p",null,"This checkbox enables DXU Agent\u2019s logging capability. When enabled, logs\nare written to the log file location. Logging can be helpful when\ndiagnosing problems, but at a slight cost of slowing DXU and consuming\nslightly more power. This checkbox is not checked by default."),(0,o.kt)("h3",{id:"d-change-log-file-location"},"d. Change Log File Location"),(0,o.kt)("p",null,"This field allows you to specify where DXU Agent\u2019s log file is kept on\nyour Datalogic mobile computer. The default location on Android OS\nmobile computers is /storage/sdcard0, which is located in the device\u2019s\non-board flash memory. This location is a persistent location, so log\nfiles stored here are safe if the mobile computer reboots. If a MicroSD\ncard is used, you may wish to specify that logs be kept on the card if\nthe card has greater capacity than on-board flash. MicroSD cards are\nalso persistent."),(0,o.kt)("h3",{id:"e-allow-binary-data-in-configuration"},"e. Allow Binary Data in Configuration"),(0,o.kt)("p",null,"This checkbox allows a few types of binary data to be transmitted from\nthe Datalogic mobile computer to DXU, and from DXU to the mobile\ncomputer. Checking this checkbox allows binary data to\nbe sent to or from the binary computer in the configuration file.\nUnchecking this checkbox blocks transfer of binary data in the\nconfiguration file. Binary data can be quite large compared to other\nconfiguration data, so if performance is important, the\nadministrator can uncheck this checkbox to make configuration files\nsmaller and quicker to apply. This checkbox is checked by default."),(0,o.kt)("h3",{id:"f-custom-home-page"},"f. Custom Home Page"),(0,o.kt)("p",null,"This checkbox enables a locally hosted web page that can be displayed on\nthe device when network connectivity fails. Checking this checkbox will\nset browsers\u2019 error pages to the home page located in the \u201cHome Page\nLocation\u201d folder location. Unchecking this checkbox returns browsers to\ntheir default error behavior when they cannot load any particular web\npage."),(0,o.kt)("h3",{id:"g-home-page-location"},"g. Home Page Location"),(0,o.kt)("p",null,"This field stores the path to a locally hosted web page that can be\ndisplayed on the device when network connectivity fails. This\nfunctionality is enabled by the \u201cCustom Home Page\u201d checkbox. This folder\ncan be located in either internal flash (/storage/sdcard0) or in a\nMicroSD card (/storage/sdcard1). The default value is /storage/sdcard0."),(0,o.kt)("h3",{id:"h-is-authentication-required"},"h. Is Authentication Required"),(0,o.kt)("p",null,"This checkbox enables authentication to launch DXU Agent, and puts the\nUser Name and Password into operation. When enabled, the user must\ncorrectly type both the user name and password to gain access to DXU\nAgent\u2019s settings. This checkbox is not checked by default."),(0,o.kt)("p",null,"Note that these settings are also enforced by the DXU desktop\napplication when it loads the configuration from the device. The DXU\nadministrator will be prompted to type this user name and password. Once\nauthenticated, the DXU administrator can edit the user name and password\nin DXU and apply these to devices."),(0,o.kt)("h3",{id:"i-user-name"},"i. User Name"),(0,o.kt)("p",null,"This field stores the user name used to log into DXU Agent. It is put\ninto effect when the \u201cIs Authentication Required\u201d checkbox is checked.\nThe default value is \u201cadmin\u201d and you can change it."),(0,o.kt)("h3",{id:"j-password"},"j. Password"),(0,o.kt)("p",null,"This field stores the password used to log into DXU Agent. It is put\ninto effect when the \u201cIs Authentication Required\u201d checkbox is checked.\nThe default value is \u201c0000\u201d and you can change\nit."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Password",src:n(42303).Z,width:"566",height:"346"})),(0,o.kt)("h3",{id:"k-is-simplified-deploy-enabled"},"k. Is Simplified Deploy enabled"),(0,o.kt)("p",null,"This checkbox enables Simplified Deploy. This is a security setting that could be used, for example, to allow use of Simplified Deploy only once as an out-of-box experience."),(0,o.kt)("h3",{id:"l-is-application-install-enabled"},"l. Is application install enabled"),(0,o.kt)("p",null,"This checkbox enables installing applications with Simplified Deploy. This is a security setting that can be used to disable the feature of allowing Simplified Deploy to install customer applications onto the device."),(0,o.kt)("h3",{id:"m-enable-vnc"},"m. Enable VNC"),(0,o.kt)("p",null,"This checkbox enables VNC, a cross-platform standard for remotely\ncontrolling computers. DXU uses VNC to implement its Remote Control\nfeature. Unchecking this checkbox blocks DXU from remotely observing and\ncontrolling the device. Checking this checkbox enables this feature.\nThis checkbox is checked by default."),(0,o.kt)("h3",{id:"n-vnc-password"},"n. VNC Password"),(0,o.kt)("p",null,"This field allows VNC communication to be authenticated, so prying eyes\ncannot remotely connect to and control your Datalogic mobile computer.\nThis field is blank by default."),(0,o.kt)("h2",{id:"advanced-settings"},"Advanced Settings"),(0,o.kt)("p",null,"These settings must match settings in DXU Desktop in order for the DXU desktop\napplication to communicate with Datalogic mobile computers. A mismatch\nwill result in a communication failure, which will block all\nconfiguration functionality."),(0,o.kt)("p",null,"Change these settings only if you understand precisely any advantage you\nmay gain by doing so. Most users will not realize any advantage from\nchanging these port settings."),(0,o.kt)("p",null,"Find these settings in the DXU Agent application on the mobile computer."),(0,o.kt)("p",null,"To configure DXU Agent\u2019s ",(0,o.kt)("strong",{parentName:"p"},"Advanced Settings"),", do this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the DXU Agent application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Menu")," button (",(0,o.kt)("strong",{parentName:"p"},"\u22ee"),") to display the menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"Settings button",src:n(48617).Z,width:"483",height:"391"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," button."))),(0,o.kt)("p",null,"As with the DXU Agent settings listed above, these advanced settings can\nonly be changed when the ",(0,o.kt)("inlineCode",{parentName:"p"},"Enable Service")," checkbox is unchecked."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Advanced settings",src:n(73750).Z,width:"230",height:"219"})),(0,o.kt)("h3",{id:"a-device-http-server-port"},"a. Device HTTP Server Port"),(0,o.kt)("p",null,"This field configures the HTTP port for the DXU server running on the\ndevice. It is set to TCP port 80 by default, the same as most web\nservers."),(0,o.kt)("h3",{id:"b-device-udp-server-port"},"b. Device UDP Server Port"),(0,o.kt)("p",null,"This field configures the UDP port for the DXU server running on the\ndevice. It is set to UDP port 3453 by default."),(0,o.kt)("h3",{id:"desktop-udp-server-port"},"Desktop UDP Server Port"),(0,o.kt)("p",null,"This field configures the UDP port for communicating to the DXU desktop\nserver. It is set to UDP port 3453 by default."),(0,o.kt)("h3",{id:"c-vnc-server-port"},"c. VNC Server Port"),(0,o.kt)("p",null,"This field configures the HTTP port for VNC running on the device. It is\nset to TCP port 5900 by default, which is the customary port used by\nmost VNC clients for connections."),(0,o.kt)("h2",{id:"version"},"Version"),(0,o.kt)("p",null,"This page displays the DXU Agent version number."),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"DXU Agent can log its activities. When enabled, logs are written to the\nlog file location. Logging can be helpful when diagnosing problems, but\nat a slight cost of slowing DXU Agent and consuming slightly more power.\nThis checkbox is not checked by default."),(0,o.kt)("p",null,"You can specify where DXU Agent\u2019s log file is kept on your Datalogic\nmobile computer. The default location on Android OS mobile computers is\n/storage/sdcard0, which is located in the device\u2019s on-board flash\nmemory. This location is a persistent location, so log files stored here\nare safe if the mobile computer reboots. If a MicroSD card is used, you\nmay wish to specify that logs be kept on the card if the card has\ngreater capacity than on-board flash. MicroSD cards are also persistent."),(0,o.kt)("p",null,"To enable DXU Agent logging on your Datalogic mobile computer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Resume your mobile computer and unlock its screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the ",(0,o.kt)("strong",{parentName:"p"},"DXU Agent")," application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Menu")," button (",(0,o.kt)("strong",{parentName:"p"},"\u22ee"),") to display the menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncheck the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must uncheck \u201cEnable Service\u201d before you can change any setting in DXU Agent."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Log"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clean up by tapping the ",(0,o.kt)("strong",{parentName:"p"},"Home")," button."))),(0,o.kt)("p",null,"To specify where log files are stored on your Datalogic mobile computer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Resume your mobile computer and unlock its screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the ",(0,o.kt)("strong",{parentName:"p"},"DXU Agent")," application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Menu")," button (",(0,o.kt)("strong",{parentName:"p"},"\u22ee"),") to display the menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncheck the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Change Log File Location")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type a valid path on your device into the \u201cChange Log File Location\u201d\nfield, and then tap the ",(0,o.kt)("strong",{parentName:"p"},"OK")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional, but desired if you wish to log to this new location)\nCheck the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Log"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clean up by tapping the ",(0,o.kt)("strong",{parentName:"p"},"Home")," button."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must uncheck \u201cEnable Service\u201d before you can change any setting in DXU Agent."))),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("p",null,"Configurations and configuration files can require authentication to\nopen and apply. DXU implements an invisible sort of authentication by\nautomatically applying a default user name and password to every DXU\nconfiguration and configuration file. You can display an authentication\nprompt whenever anyone attempts to connect to one of your Datalogic\nmobile computers with DXU, and change both the user name and password as\nwell to increase security of your devices."),(0,o.kt)("h3",{id:"enable-authentication-in-dxu-agent"},"Enable Authentication in DXU Agent"),(0,o.kt)("p",null,"You can ensure that users are prompted to enter a user name and password\nto open a configuration file in the DXU console or to DXU Agent\u2019s\nSettings window on a Datalogic mobile computer. This capability is\nenabled with a single checkbox in DXU Agent."),(0,o.kt)("p",null,"To enable authentication:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Resume your mobile computer and unlock its screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the ",(0,o.kt)("strong",{parentName:"p"},"DXU Agent")," application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Menu")," button (",(0,o.kt)("strong",{parentName:"p"},"\u22ee"),") to display the menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncheck the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the \u201c",(0,o.kt)("strong",{parentName:"p"},"Is Authentication Required"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clean up by tapping the ",(0,o.kt)("strong",{parentName:"p"},"Home")," button."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must uncheck \u201cEnable Service\u201d before you can change any setting in DXU Agent."))),(0,o.kt)("p",null,"To authenticate while opening DXU Agent\u2019s Settings window:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Resume your mobile computer and unlock its screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the ",(0,o.kt)("strong",{parentName:"p"},"DXU Agent")," application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Menu")," button (",(0,o.kt)("strong",{parentName:"p"},"\u22ee"),") to display the menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type your password into the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enter Password"),"\u201d field, and then tap\nthe ",(0,o.kt)("strong",{parentName:"p"},"OK")," button."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"Enter Password",src:n(42303).Z,width:"566",height:"346"})))),(0,o.kt)("h3",{id:"change-the-user-name-in-dxu-agent"},"Change the User Name in DXU Agent"),(0,o.kt)("p",null,"Editing the user name adds an extra layer of complication to\nauthentication. The default user name is \u201cadmin.\u201d Changing the user name\nadds another piece of information that a hacker must enter correctly to\naccess the configuration in DXU."),(0,o.kt)("p",null,"To change the User Name:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Resume your mobile computer and unlock its screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the ",(0,o.kt)("strong",{parentName:"p"},"DXU Agent")," application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Menu")," button (",(0,o.kt)("strong",{parentName:"p"},"\u22ee"),") to display the menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncheck the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the \u201c",(0,o.kt)("strong",{parentName:"p"},"User Name"),"\u201d button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete the contents of the field, and type a new user name.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"OK")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the \u201c",(0,o.kt)("strong",{parentName:"p"},"Is Authentication Required"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clean up by tapping the ",(0,o.kt)("strong",{parentName:"p"},"Home")," button."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must uncheck \u201cEnable Service\u201d before you can change any setting in DXU Agent."))),(0,o.kt)("h3",{id:"change-the-password-in-dxu-agent"},"Change the Password in DXU Agent"),(0,o.kt)("p",null,"Editing the password ensures the simplest means to keep untrusted actors\nout of DXU Agent configuration settings. The default password is \u201c0000.\u201d"),(0,o.kt)("p",null,"To change the Password:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Resume your mobile computer and unlock its screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the ",(0,o.kt)("strong",{parentName:"p"},"DXU Agent")," application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Menu")," button (",(0,o.kt)("strong",{parentName:"p"},"\u22ee"),") to display the menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncheck the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must uncheck \u201cEnable Service\u201d before you can change any setting in DXU Agent.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"Password")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete the contents of the field, and type a password.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the ",(0,o.kt)("strong",{parentName:"p"},"OK")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the \u201c",(0,o.kt)("strong",{parentName:"p"},"Is Authentication Required"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the \u201c",(0,o.kt)("strong",{parentName:"p"},"Enable Service"),"\u201d checkbox.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clean up by tapping the ",(0,o.kt)("strong",{parentName:"p"},"Home")," button."))))}m.isMDXComponent=!0},48617:function(e,t,n){t.Z=n.p+"assets/images/image46-685b8be67a34100049fd8609dfee4fe6.png"},98886:function(e,t,n){t.Z=n.p+"assets/images/image47-0ed39ce0e7565d87fdb86fa1571b06db.png"},42303:function(e,t,n){t.Z=n.p+"assets/images/image48-72a02b422e40f2fd3bf181c695569a8b.png"},73750:function(e,t,n){t.Z=n.p+"assets/images/image49-595ecd0087bf3ea108eb0ce07b717297.png"}}]);