"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[5386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(v,r(r({ref:t},c),{},{components:a})):n.createElement(v,r({ref:t},c))}));function v(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,r),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),l=a(67294),i=a(86010),r=a(12466),o=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){var t,a;return null!=(t=null==(a=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=null!=t?t:p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[r,o]=(0,l.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const l=null!=(t=n.find((e=>e.default)))?t:n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:i}))),[s,u]=v({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=null!=s?s:p;return m({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var n;const t=c.indexOf(e.currentTarget)+1;a=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{var l;const t=c.indexOf(e.currentTarget)-1;a=null!=(l=c[t])?l:c[c.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},r,{className:(0,i.Z)("tabs__item",k.tabItem,null==r?void 0:r.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},l.createElement(b,(0,n.Z)({},e,t)),l.createElement(h,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},86488:(e,t,a)=>{a.r(t),a.d(t,{Img:()=>d,assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),i=a(74866),r=a(85162);const o={id:"installing",title:"Installing Datalogic JavaPOS",sidebar_label:"Installing Datalogic JavaPOS"},s=void 0,u={unversionedId:"javapos/distribution/installing",id:"javapos/distribution/installing",title:"Installing Datalogic JavaPOS",description:"Datalogic JavaPOS is a set of Java-based drivers that allow Java application developers to communicate with Datalogic Scanners and Scales.",source:"@site/docs/javapos/distribution/installing.md",sourceDirName:"javapos/distribution",slug:"/javapos/distribution/installing",permalink:"/javapos/distribution/installing",draft:!1,tags:[],version:"current",frontMatter:{id:"installing",title:"Installing Datalogic JavaPOS",sidebar_label:"Installing Datalogic JavaPOS"},sidebar:"JavaPOS",previous:{title:"Distribution Overview",permalink:"/javapos/distribution/overview"},next:{title:"Installed Files Reference",permalink:"/javapos/distribution/filesref"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installing",id:"installing",level:2},{value:"Verification",id:"verification",level:2},{value:"Connecting a scanner",id:"connecting-a-scanner",level:3}],d=e=>{let{src:t}=e;return(0,l.kt)("img",{src:t,style:{maxWidth:"750px",maxHeight:"750px"}})},m={toc:p,Img:d},v="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(v,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Datalogic JavaPOS is a set of Java-based drivers that allow Java application developers to communicate with Datalogic Scanners and Scales.\nThe Datalogic JavaPOS drivers can be installed for use within any UnifiedPOS compliant Point of Sale application."),(0,l.kt)("p",null,"These drivers have been tested and verified to work on the following operating systems:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Microsoft Windows Vista, Windows 7, Windows 8, Windows 10"),(0,l.kt)("li",{parentName:"ul"},"Red Hat Enterprise Linux versions 5+"),(0,l.kt)("li",{parentName:"ul"},"SuSE Linux Professional 9.3+, CentOS 6+, OpenSuSE 11+, Ubuntu 16.04+")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Datalogic JavaPOS has the following operating system requirements for installation:"),(0,l.kt)(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Java runtime environment version 1.7 or later"),(0,l.kt)("li",null,"Administrator privileges"))),(0,l.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Java runtime environment version 1.7 or later"),(0,l.kt)("li",null,"Root privileges")))),(0,l.kt)("h2",{id:"installing"},"Installing"),(0,l.kt)("p",null,"To install Datalogic JavaPOS, perform the following steps:"),(0,l.kt)("admonition",{title:"Important",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If Datalogic JavaPOS is already installed on your computer, you must ",(0,l.kt)("a",{parentName:"p",href:"/javapos/distribution/uninstalling"},"uninstall")," before installing again.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"win",mdxType:"TabItem"},"Double-click the ",(0,l.kt)("code",null,"JavaPOS_Setup.jar")," file. The installer starts and a ",(0,l.kt)("b",null,"Welcome")," dialog is displayed."),(0,l.kt)(r.Z,{value:"linux",mdxType:"TabItem"},"From a terminal window, execute ",(0,l.kt)("code",null,"sudo java \u2013jar JavaPOS_Setup.jar"),". The installer starts and a ",(0,l.kt)("b",null,"Welcome")," dialog is displayed.")),(0,l.kt)(d,{src:"/img/javapos/install/javapos_installer_welcome.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("b",null,"Next"),". You must click to indicate you accept the terms of the End User License Agreement (EULA) in order to continue with the installation."),(0,l.kt)(d,{src:"/img/javapos/install/javapos_installer_license.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"win",mdxType:"TabItem"},"Click ",(0,l.kt)("b",null,"Next"),". You are prompted to enter an installation path (the default is ",(0,l.kt)("code",null,"C:\\Program Files\\Datalogic\\JavaPOS"),")."),(0,l.kt)(r.Z,{value:"linux",mdxType:"TabItem"},"Click ",(0,l.kt)("b",null,"Next"),". You are prompted to enter an installation path (the default is ",(0,l.kt)("code",null,"/usr/local/Datalogic/JavaPOS"),").")),(0,l.kt)(d,{src:"/img/javapos/install/javapos_installer_location.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("b",null,"OK")," to accept directory creation."),(0,l.kt)(d,{src:"/img/javapos/install/javapos_installer_confirm_directory.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("b",null,"Next")," to accept the install packages. Available packages for the current version are displayed in the window. Only the Base Datalogic Drivers are absolutely required. It is always recommended that all packages be installed as these drivers are dependent on many of the files. If some packages are unchecked, it may render the drivers unusable, unless the required files are already installed on the system."),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Packages may differ slightly on Linux.")),(0,l.kt)(d,{src:"/img/javapos/install/javapos_installer_packages.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("b",null,"Next")," to confirm the package installation progress."),(0,l.kt)(d,{src:"/img/javapos/install/javapos_installer_progress.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("b",null,"Next")," for updating Java environment variables."),(0,l.kt)(d,{src:"/img/javapos/install/javapos_installer_environment.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"When the ",(0,l.kt)("b",null,"Installation Completed")," message is displayed, click ",(0,l.kt)("b",null,"Done"),"."),(0,l.kt)(d,{src:"/img/javapos/install/javapos_installer_finished.png",mdxType:"Img"}))),(0,l.kt)("h2",{id:"verification"},"Verification"),(0,l.kt)("p",null,"The Datalogic JavaPOS installer automatically installs a JavaPOSTest application for testing all kinds of JavaPOS devices. The install directory contains a file that can be used to launch JavaPOSTest:"),(0,l.kt)(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"win",mdxType:"TabItem"},"Double-click the ",(0,l.kt)("code",null,"JavaPOSTest.bat")," file."),(0,l.kt)(r.Z,{value:"linux",mdxType:"TabItem"},"From a terminal window, execute ",(0,l.kt)("code",null,"sudo ./JavaPOSTest.sh"),(0,l.kt)("br",null),(0,l.kt)("br",null),"JavaPOSTest should always be run with sudo privileges. Shell script may also need the executable file permission added to it by running ",(0,l.kt)("code",null,"sudo chmod +x JavaPOSTest.sh"),(0,l.kt)("br",null))),(0,l.kt)("p",null,"After JavaPOSTest starts, the following screen is displayed:"),(0,l.kt)(d,{src:"/img/javapos/verification/javapos_verfication_javapostest.png",mdxType:"Img"}),(0,l.kt)("h3",{id:"connecting-a-scanner"},"Connecting a scanner"),(0,l.kt)("p",null,"The following procedure describes how to connect a scanner, using the Datalogic Magellan\u2122 9800i Scanner-Scale under Windows as an example.\nPerform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Plug the scanner into an active USB port.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If no scanner windows are currently open within the main JavaPOSTest window, click the ",(0,l.kt)("strong",{parentName:"p"},"Scanner")," button."),(0,l.kt)(d,{src:"/img/javapos/verification/javapos_verfication_newscanner.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the ",(0,l.kt)("strong",{parentName:"p"},"Logical Name field"),", select ",(0,l.kt)("inlineCode",{parentName:"p"},"DL-Magellan-9800i-USB-OEM-Scanner-Scale"),"."),(0,l.kt)(d,{src:"/img/javapos/verification/javapos_verfication_deviceselection.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Open"),", and then ",(0,l.kt)("strong",{parentName:"p"},"Claim"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the ",(0,l.kt)("strong",{parentName:"p"},"Enable")," button, or manually select the ",(0,l.kt)("strong",{parentName:"p"},"Data event enabled"),", ",(0,l.kt)("strong",{parentName:"p"},"Device enabled"),", and ",(0,l.kt)("strong",{parentName:"p"},"Decode data")," checkboxes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Scan an item. If the scanner is properly connected and configured, the scan data is automatically displayed."))),(0,l.kt)("p",null,"If the Logical Name field is empty or does not contain the profile name, JavaPOSTest was unable to locate the proper ",(0,l.kt)("inlineCode",{parentName:"p"},"jpos.xml")," file."),(0,l.kt)("p",null,"To correct this error, locate all ",(0,l.kt)("inlineCode",{parentName:"p"},"jpos.xml")," files on the system and identify the one that is picked up by the application during execution. A file in the same directory where the application is launched (or listed first in the CLASSPATH) takes priority. The installer creates a default ",(0,l.kt)("inlineCode",{parentName:"p"},"jpos.xml")," file in the installation folder. This file contains example profiles for many Datalogic devices."))}g.isMDXComponent=!0}}]);