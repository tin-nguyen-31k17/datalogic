"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[2136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,y=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"studio",title:"Scan2Deploy Studio",sidebar_label:"Overview"},l=void 0,r={unversionedId:"scan2deploy/studio",id:"scan2deploy/studio",title:"Scan2Deploy Studio",description:"Scan2Deploy Studio can be downloaded from the Datalogic GitHub site.",source:"@site/docs/scan2deploy/studio.md",sourceDirName:"scan2deploy",slug:"/scan2deploy/studio",permalink:"/scan2deploy/studio",draft:!1,tags:[],version:"current",frontMatter:{id:"studio",title:"Scan2Deploy Studio",sidebar_label:"Overview"},sidebar:"Scan2DeployStudio",next:{title:"Welcome",permalink:"/scan2deploy/welcome-page"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Installation (Windows)",id:"installation-windows",level:2},{value:"Installation (Linux)",id:"installation-linux",level:2},{value:"Option 1",id:"option-1",level:3},{value:"Option 2",id:"option-2",level:3},{value:"Task tray",id:"task-tray",level:2},{value:"Check for update",id:"check-for-update",level:3},{value:"Settings",id:"settings",level:3},{value:"Exit",id:"exit",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Downloading Scan2Deploy",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Scan2Deploy Studio can be downloaded from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datalogic/scan2deploy-studio/releases/latest"},"Datalogic GitHub site"),".")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Scan2Deploy Studio can be used to stage Datalogic Mobile Computers running Android 8 and above. It is installable on 64-bit Windows 7/8/10 PCs."),(0,i.kt)("p",null,"Some notable features include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuring the device Wi-Fi network"),(0,i.kt)("li",{parentName:"ul"},"Setting device & scanner settings (e.g. the lock-screen enabled state)"),(0,i.kt)("li",{parentName:"ul"},"Downloading a data archive from a HTTP/HTTPS server and unpacking it to the device"),(0,i.kt)("li",{parentName:"ul"},"Installing/updating applications or firmware")),(0,i.kt)("admonition",{title:"Important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This document reflects the features and settings available in the latest ",(0,i.kt)("a",{parentName:"p",href:"/releases/tags/scan-2-deploy-studio"},"Scan2Deploy Studio release"),".")),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scan2Deploy Studio requires ",(0,i.kt)("a",{parentName:"p",href:"/scan2deploy/android"},"Scan2Deploy Android agent")," version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datalogic/scan2deploy-android/releases/tag/v1.11"},"1.11")," or higher running on the Android device. Depending on the features chosen within Studio, the required version may increase. The minimum required version can be seen within the next steps section, but it is recommended to include an update to the latest version within the profile whenever possible."),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'For Android 8 devices that do not have at least version 1.11 of Agent on the device, it can be installed directly from the "Hi There!" setup screen as ',(0,i.kt)("a",{parentName:"p",href:"/scan2deploy/android-legacy#enable-scan2deploy"},"described here"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For more detail regarding what versions of Scan2Deploy Android agent support what associated Scan2Deploy Studio features, see the full list of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datalogic/scan2deploy-android/releases"},"Scan2Deploy Android releases"),"."))),(0,i.kt)("h2",{id:"installation-windows"},"Installation (Windows)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datalogic/scan2deploy-studio/releases/latest"},"Download installer")),(0,i.kt)("li",{parentName:"ol"},"Launch the installer (may require authorization if User Access Control (UAC) is enabled)"),(0,i.kt)("li",{parentName:"ol"},"Follow on-screen prompts to finish installing")),(0,i.kt)("h2",{id:"installation-linux"},"Installation (Linux)"),(0,i.kt)("admonition",{title:"Deprecated",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Linux installation is no longer being supported and will not receive any updates past Scan2Deploy Studio 1.7.2")),(0,i.kt)("p",null,"To install and add Scan2Deploy Studio to the applications launcher, use one of the following options:"),(0,i.kt)("h3",{id:"option-1"},"Option 1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the Scan2Deploy Studio ",(0,i.kt)("strong",{parentName:"li"},".snap")," using ",(0,i.kt)("a",{parentName:"li",href:"https://snapcraft.io/"},"snapcraft"),"."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"snap install --dangerous <scan2deploy-snap-filename.snap>"))),(0,i.kt)("h3",{id:"option-2"},"Option 2"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the Scan2Deploy Studio ",(0,i.kt)("strong",{parentName:"li"},".AppImage")," using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/TheAssassin/AppImageLauncher"},"AppImageLauncher"),".",(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"AppImageLauncher can be installed following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheAssassin/AppImageLauncher/wiki/Install-on-Ubuntu-or-Debian"},"these instructions")))),(0,i.kt)("li",{parentName:"ol"},"Install/Run Studio",(0,i.kt)("br",{parentName:"li"}),"a. Install by double clicking the Scan2Deploy Studio AppImage and choosing 'Integrate and run'",(0,i.kt)("br",{parentName:"li"}),"b. Or, to simply run Scan2Deploy Studio without installing, execute the Scan2Deploy Studio .AppImage")),(0,i.kt)("h2",{id:"task-tray"},"Task tray"),(0,i.kt)("p",null,"When Scan2Deploy studio is running, it displays a task tray icon on the Windows taskbar.\nRight-clicking on the Scan2Deploy Studio icon in the task tray will result in a menu being displayed.\nThis gives you the option to fully ",(0,i.kt)("a",{parentName:"p",href:"#exit"},"exit")," Scan2Deploy Studio, ",(0,i.kt)("a",{parentName:"p",href:"#check-for-update"},"check for updates")," or configure certain ",(0,i.kt)("a",{parentName:"p",href:"#settings"},"settings"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Task tray",src:n(73097).Z,width:"201",height:"177"})),(0,i.kt)("h3",{id:"check-for-update"},"Check for update"),(0,i.kt)("p",null," Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Check for update"),", to immediately check for the latest version for your selected update channel."),(0,i.kt)("h3",{id:"settings"},"Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Run at startup")," - If checked (default), Scan2Deploy Studio will start after booting into Windows. If unchecked, it will not do so.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Check for updates on startup")," - If checked (default), Scan2Deploy Studio will check for updates when it is started. If unchecked, Scan2Deploy Studio will only check for updates when the ",(0,i.kt)("a",{parentName:"p",href:"#check-for-update"},(0,i.kt)("inlineCode",{parentName:"a"},"Check for update"))," option is chosen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Update channel")," - Choose if Scan2Deploy Studio should download ",(0,i.kt)("inlineCode",{parentName:"p"},"Beta")," releases, or only ",(0,i.kt)("inlineCode",{parentName:"p"},"Stable")," ones."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Stable")," - (Default option). Get the latest officially recommended version of Scan2Deploy Studio.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Beta")," - Get the latest release candidates for new stable versions. Updates received from this channel are still in the testing process and may contain features that aren't yet publicly documented. These releases should be considered mostly stable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Alpha")," - Get the latest Scan2Deploy Studio features and bug fixes as early as possible. Updates received from this channel are under active development and may contain experimental features. These releases should be considered unstable."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Each pre-release channel will still include updates from more stable channels. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Alpha")," will still receive ",(0,i.kt)("inlineCode",{parentName:"p"},"Beta")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Stable")," updates, whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"Beta")," will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"Stable")," but exclude ",(0,i.kt)("inlineCode",{parentName:"p"},"Alpha"),".")))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Task tray settings",src:n(88789).Z,width:"650",height:"300"})))),(0,i.kt)("h3",{id:"exit"},"Exit"),(0,i.kt)("p",null," When the Scan2Deploy Studio UI is closed, it continues running in the background. If you choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Exit"),", all Scan2Deploy Studio processes (including background) will be stopped."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Task tray exit",src:n(54605).Z,width:"477",height:"312"})),(0,i.kt)("admonition",{title:"Important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Carefully consider whether or not you want to completely stop Scan2Deploy Studio, particularly if you are relying on Scan2Deploy Studio to automatically host profiles for mobile devices")))}u.isMDXComponent=!0},54605:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/task-tray-exit-71937f91e6d5e9c1803e4c3cb6f328c5.gif"},88789:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/task-tray-update-channel-01026c9cb879926f8720482d13aafc63.gif"},73097:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);