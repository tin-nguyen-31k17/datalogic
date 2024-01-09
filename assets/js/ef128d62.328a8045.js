"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[6993],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(n),u=i,f=c["".concat(s,".").concat(u)]||c[u]||g[u]||r;return n?a.createElement(f,o(o({ref:e},d),{},{components:n})):a.createElement(f,o({ref:e},d))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68407:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"config",title:"SoftSpot Settings",sidebar_label:"SoftSpot Settings"},o=void 0,l={unversionedId:"softspot/config",id:"softspot/config",title:"SoftSpot Settings",description:"Overview",source:"@site/docs/softspot/config.md",sourceDirName:"softspot",slug:"/softspot/config",permalink:"/softspot/config",draft:!1,tags:[],version:"current",frontMatter:{id:"config",title:"SoftSpot Settings",sidebar_label:"SoftSpot Settings"},sidebar:"SoftSpot",previous:{title:"Overview",permalink:"/softspot/overview"},next:{title:"Actions",permalink:"/softspot/actions"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"EMM Configuration",id:"emm-configuration",level:2},{value:"Location of Files",id:"location-of-files",level:3},{value:"Export to File",id:"export-to-file",level:2},{value:"Reset Settings",id:"reset-settings",level:2}],d={toc:p},c="wrapper";function g(t){let{components:e,...r}=t;return(0,i.kt)(c,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The SoftSpot Settings screen provides controls for configuring the actions, appearance, and general operation of the SoftSpot, as well as management of configuration settings.  It can be reached from the main application screen by tapping on the configuration settings icon."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SoftSpot Settings",src:n(11158).Z,width:"270",height:"300"})),(0,i.kt)("p",null,"The screen operates similar to the Android Settings application.  The settings are organized into groups, and the first screen displays a summary value of each group.  Tapping on the name of a group will take you to a screen with additional controls related to that group."),(0,i.kt)("h2",{id:"emm-configuration"},"EMM Configuration"),(0,i.kt)("p",null,"The configuration settings available from the Settings screen can also be managed by Scan2Deploy Studio or an EMM console.  Once the values have been sent to the device, they will take precedence over values that may have been set within the app from the Settings screen."),(0,i.kt)("p",null,"When using an EMM configuration, an additional option is available for importing settings from a separate configuration file created on another device.  Details on how to do this can be found in ",(0,i.kt)("a",{parentName:"p",href:"/softspot/export"},(0,i.kt)("strong",{parentName:"a"},"Export/Import settings"))),(0,i.kt)("p",null,"Once an EMM configuration has been applied, the SoftSpot Settings screen will display an additional switch labeled ",(0,i.kt)("strong",{parentName:"p"},"Override administrator settings"),".  When this switch is disabled, the SoftSpot configuration controls are disabled to prevent settings adjustments from the device.  When enabled, the EMM settings are ignored and the controls are enabled to allow the settings to be changed."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If configuration changes are made using the settings screens on the device, the ",(0,i.kt)("strong",{parentName:"p"},"Override administrator settings")," switch is automatically enabled.  This is true even if the switch is hidden (if no settings have been applied by Scan2Deploy Studio or an EMM).  If you apply settings from an EMM configuration and they do not appear to have any affect on the device, go to the SoftSpot Settings screen and make sure that the override switch is disabled.")),(0,i.kt)("h3",{id:"location-of-files"},"Location of Files"),(0,i.kt)("p",null,'When a configuration setting refers to an external file (such as a custom image), the location of the file may be specified in one of two ways.  If the setting begins with a "/" (slash), it is assumed that the full path to the file is specified.  If not, then the file is assumed to be stored in the public "Downloads" directory.'),(0,i.kt)("h2",{id:"export-to-file"},"Export to File"),(0,i.kt)("p",null,"This setting allows you to save the entire SoftSpot configuration to a separate file.  This file can then be placed on other devices and used to copy the configuration to them.  Specific steps for exporting and importing a configuration file can be found in ",(0,i.kt)("a",{parentName:"p",href:"/softspot/export"},(0,i.kt)("strong",{parentName:"a"},"Export/Import settings"))),(0,i.kt)("h2",{id:"reset-settings"},"Reset Settings"),(0,i.kt)("p",null,"Tapping on ",(0,i.kt)("inlineCode",{parentName:"p"},"Reset settings")," in the initial settings screen will reset all the SoftSpot settings to default values (after confirmation).  Here is a list of all the settings and their default values."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Import From File"),(0,i.kt)("td",{parentName:"tr",align:null},"EMM (or Scan2Deploy Studio) only; Blank (don't import settings from file)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Scan Settings")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scan image"),(0,i.kt)("td",{parentName:"tr",align:null},"Standard built-in image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vibrate on scan"),(0,i.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Display good read image"),(0,i.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Good Read image"),(0,i.kt)("td",{parentName:"tr",align:null},"Standard built-in image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Application Actions")),(0,i.kt)("td",{parentName:"tr",align:null},"Empty (no application actions)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Action image"),(0,i.kt)("td",{parentName:"tr",align:null},"Application icon as specified in the package manifest")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Appearance")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SoftSpot Size"),(0,i.kt)("td",{parentName:"tr",align:null},"Normal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Start Position"),(0,i.kt)("td",{parentName:"tr",align:null},"Middle center")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lock Position"),(0,i.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Visibility Level"),(0,i.kt)("td",{parentName:"tr",align:null},"60%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Operation")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable on boot"),(0,i.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable swipe to hide"),(0,i.kt)("td",{parentName:"tr",align:null},"Disabled")))))}g.isMDXComponent=!0},11158:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/cfgFull-fdaf73774b40854c417051fea64620b0.png"}}]);