"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[40662],{43873:(e,n,t)=>{t.r(n),t.d(n,{AppIcon:()=>l,assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=t(85893),o=t(11151);const a={id:"home",title:"Home Settings",sidebar_label:"Home Settings"},s=void 0,r={id:"launcher/home",title:"Home Settings",description:"Overview",source:"@site/docs/launcher/home.mdx",sourceDirName:"launcher",slug:"/launcher/home",permalink:"/launcher/home",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"home",title:"Home Settings",sidebar_label:"Home Settings"},sidebar:"Launcher",previous:{title:"Overview",permalink:"/launcher/overview"},next:{title:"Allowed Apps",permalink:"/launcher/apps"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"EMM Configuration",id:"emm-configuration",level:2},{value:"Location of Files",id:"location-of-files",level:3},{value:"Export to File",id:"export-to-file",level:2},{value:"Launcher Configuration",id:"launcher-configuration",level:2}],l=({img:e})=>{const n={img:"img",span:"span",...(0,o.a)()};return(0,i.jsxs)(n.span,{style:{display:"inline-block"},children:["(",(0,i.jsx)(n.img,{src:e,style:{verticalAlign:"bottom",display:"inline"}}),")"]})};function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The Home Settings screen provides controls for defining the contents of the Home Screen and the appearance of device features.  It can be reached from the Home Screen by tapping on the Launcher Settings icon."}),"\n",(0,i.jsx)(n.h2,{id:"emm-configuration",children:"EMM Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The configuration settings available from the Settings screen can also be managed by Scan2Deploy Studio or an EMM console.  Once the values have been sent to the device, they will take precedence over values that may have been set within the app from the Settings screen."}),"\n",(0,i.jsxs)(n.p,{children:["When using an EMM configuration, an additional option is available for importing settings from a separate configuration file created on another device.  Details on how to do this can be found in ",(0,i.jsx)(n.a,{href:"/launcher/export",children:(0,i.jsx)(n.strong,{children:"Export/Import settings"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Once an EMM configuration has been applied, the Launcher Settings screen will display an additional switch labeled ",(0,i.jsx)(n.strong,{children:"Override administrator settings"}),".  When this swtich is disabled, the Launcher configuration controls are disabled to prevent settings adjustments from the device.  When enabled, the EMM settings are ignored and the controls are enabled to allow the settings to be changed."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If configuration changes are made using the settings screens on the device, the ",(0,i.jsx)(n.strong,{children:"Override administrator settings"})," switch is automatically enabled.  This is true even if the switch is hidden (if no settings have been applied by Scan2Deploy Studio or an EMM).  If you apply settings from an EMM configuration and they do not appear to have any affect on the device, go to the Launcher Settings screen and make sure that the override switch is disabled."]})}),"\n",(0,i.jsx)(n.h3,{id:"location-of-files",children:"Location of Files"}),"\n",(0,i.jsx)(n.p,{children:'When a configuration setting refers to an external file (such as a custom image), the location of the file may be specified in one of two ways.  If the setting begins with a "/" (slash), it is assumed that the full path to the file is specified.  If not, then the file is assumed to be stored in the public "Downloads" directory.'}),"\n",(0,i.jsx)(n.h2,{id:"export-to-file",children:"Export to File"}),"\n",(0,i.jsxs)(n.p,{children:["This setting allows you to save the entire launcher configuration to a separate file.  This file can then be placed on other devices and used to copy the configuration to them.  Specific steps for exporting and importing a configuration file can be found in ",(0,i.jsx)(n.a,{href:"/launcher/export",children:(0,i.jsx)(n.strong,{children:"Export/Import settings"})})]}),"\n",(0,i.jsx)(n.h2,{id:"launcher-configuration",children:"Launcher Configuration"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Home Settings Screen",src:t(87088).Z+"",width:"270",height:"490"})}),"\n",(0,i.jsxs)(n.p,{children:["Much of the Home Settings screen appears similar to the Home Screen.  The first time you enter this screen (or whenever the launcher screen contains no apps), you will automatically be taken to the ",(0,i.jsx)(n.a,{href:"/launcher/apps",children:(0,i.jsx)(n.strong,{children:"Allowed Apps"})})," screen."]}),"\n",(0,i.jsxs)(n.p,{children:["The title bar at the top of the screen includes two additional controls.  To add/remove apps from the Home Screen, tap the Apps icon ",(0,i.jsx)(n.a,{href:"/launcher/apps",children:(0,i.jsx)(l,{img:"/img/launcher/apps.svg"})}),".  For general configuration options, tap the Settings icon ",(0,i.jsx)(n.a,{href:"/launcher/config",children:(0,i.jsx)(l,{img:"/img/shared/config.svg"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The sheet at the bottom of the display includes controls for the appearance of the Home Screen.  It can be expanded by dragging up the gripper at its top center, and can be collapsed by dragging it down.  Details on how to change the background can be found in ",(0,i.jsx)(n.a,{href:"/launcher/disp#background-settings",children:(0,i.jsx)(n.strong,{children:"Background Settings"})}),".  Details on how to change the appearance of the app icons can be found in ",(0,i.jsx)(n.a,{href:"/launcher/disp#icon-appearance",children:(0,i.jsx)(n.strong,{children:"Icon Appearance"})}),".\nDetails on how to change the appearance of the title bar can be found in ",(0,i.jsx)(n.a,{href:"/launcher/disp#title-bar-settings",children:(0,i.jsx)(n.strong,{children:"Title Bar Settings"})}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},87088:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cfgHome-260eff550d4082b2584e3c547ecefd0c.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);