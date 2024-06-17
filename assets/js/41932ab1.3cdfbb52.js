"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[76603],{70734:(e,t,n)=>{n.r(t),n.d(t,{AppIcon:()=>h,assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(85893),a=n(11151);const s={id:"apps",title:"Allowed Apps",sidebar_label:"Allowed Apps"},o=void 0,l={id:"launcher/apps",title:"Allowed Apps",description:"Overview",source:"@site/docs/launcher/apps.mdx",sourceDirName:"launcher",slug:"/launcher/apps",permalink:"/launcher/apps",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"apps",title:"Allowed Apps",sidebar_label:"Allowed Apps"},sidebar:"Launcher",previous:{title:"Home Settings",permalink:"/launcher/home"},next:{title:"Appearance Settings",permalink:"/launcher/disp"}},r={},h=({img:e})=>{const t={img:"img",span:"span",...(0,a.a)()};return(0,i.jsxs)(t.span,{style:{display:"inline-block"},children:["(",(0,i.jsx)(t.img,{src:e,style:{verticalAlign:"bottom",display:"inline"}}),")"]})},c=[{value:"Overview",id:"overview",level:2},{value:"Allowed Apps Settings",id:"allowed-apps-settings",level:2},{value:"Allow apps to launch other apps",id:"allow-apps-to-launch-other-apps",level:3},{value:"Add/Remove an application to/from the Home Screen",id:"addremove-an-application-tofrom-the-home-screen",level:3},{value:"Add a URL shortcut",id:"add-a-url-shortcut",level:3},{value:"Delete a URL shortcut",id:"delete-a-url-shortcut",level:3},{value:"Configure Application Settings",id:"configure-application-settings",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The Allowed Apps screen controls which applications and URLs are allowed access from the launcher.  It can be reached by tapping on the Apps button ",(0,i.jsx)(h,{img:"/img/launcher/apps.svg"})," from the Home Settings screen."]}),"\n",(0,i.jsx)(t.h2,{id:"allowed-apps-settings",children:"Allowed Apps Settings"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Allowed Apps Settings",src:n(49274).Z+"",width:"270",height:"490"})}),"\n",(0,i.jsx)(t.p,{children:"This screen presents a list of all apps which are installed on the device, as well as any URLs which are currently included on the Home Screen.  Items are shown in alphabetic order (by name), along with their icon.  The icons and names may be customized."}),"\n",(0,i.jsx)(t.h3,{id:"allow-apps-to-launch-other-apps",children:"Allow apps to launch other apps"}),"\n",(0,i.jsx)(t.p,{children:"By default, only apps displayed on the Home Screen may be launched.  This is the most secure setting for the device, but will prevent apps from launching an activity within another app that is not on the Home Screen.  To change this behavior, select the checkbox at the top of the Allowed Apps screen.  When selected, all apps installed on the device (at that moment) will be permitted to launch, regardless of their appearance on the Home Screen."}),"\n",(0,i.jsx)(t.h3,{id:"addremove-an-application-tofrom-the-home-screen",children:"Add/Remove an application to/from the Home Screen"}),"\n",(0,i.jsxs)(t.p,{children:["To add an application to the Home Screen, tap the Home icon ",(0,i.jsx)(h,{img:"/img/launcher/homeOff.svg"})," to the right of the application to mark it as displayed.  Tap the icon again to remove the application from the list displayed on the Home Screen."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Unchecking an application from the list does not uninstall the application from the device.  It only removes the entry from the list displayed by the Home Screen."})}),"\n",(0,i.jsxs)(t.p,{children:["The application list also includes an item labeled ",(0,i.jsx)(t.code,{children:"Launcher Settings"}),".  The Home icon for this item can be used to toggle the visibility of the Launcher Settings icon on the Home Screen."]}),"\n",(0,i.jsx)(t.h3,{id:"add-a-url-shortcut",children:"Add a URL shortcut"}),"\n",(0,i.jsxs)(t.p,{children:["In addition to launching applications, the Home Screen can also browse to web pages using the default browser.  To add a URL shortcut, tap the URL icon ",(0,i.jsx)(h,{img:"/img/launcher/url.svg"})," located in the top right corner of the screen.  This will display the ",(0,i.jsx)(t.a,{href:"#configure-application-settings",children:(0,i.jsx)(t.strong,{children:"Configure URL"})})," screen (see below).  Tapping the Back button without providing a valid URL will cancel the addition."]}),"\n",(0,i.jsx)(t.p,{children:"When browsing to a web page using a shortcut from the Home screen, the page will be viewed using the default browser selected on the device.  If multiple browsers are installed and a default browser has not been defined, Launcher will attempt to use Datalogic Enterprise Browser, if available.  Otherwise it will use the first installed browser it finds."}),"\n",(0,i.jsx)(t.h3,{id:"delete-a-url-shortcut",children:"Delete a URL shortcut"}),"\n",(0,i.jsxs)(t.p,{children:["To remove a URL shortcut from the existing list, tap the Delete icon ",(0,i.jsx)(h,{img:"/img/shared/delete.svg"})," for its list entry.  You will be asked to confirm the deletion."]}),"\n",(0,i.jsx)(t.h2,{id:"configure-application-settings",children:"Configure Application Settings"}),"\n",(0,i.jsx)(t.p,{children:"Tapping on the name of an application (or URL) from the Allowed Apps list displays the current settings used to display and launch the item from the Home Screen.  You can also reach this screen directly from the Home Settings screen by tapping on any application (or URL) icon."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Configure App Settings",src:n(33649).Z+"",width:"270",height:"280"})}),"\n",(0,i.jsx)(t.p,{children:"The header at the top of the settings display identifies the current item by showing the currently selected icon.  For applications, the name (according to its manifest) and package are also displayed.  The following application settings are available:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Setting"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"URL"}),(0,i.jsxs)(t.td,{children:["(URL shortcut only) This is the URL to the web page the browser should go to when launched.  ",(0,i.jsx)(t.code,{children:"http://"})," will automatically be added to the URL if the scheme is not included."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Label"}),(0,i.jsx)(t.td,{children:"This is the user-friendly name displayed with the icon when shown on the Home Screen.  It defaults to the name specified in the package, but may be changed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Change Icon..."}),(0,i.jsx)(t.td,{children:'This is the icon displayed when shown on the Home Screen.  Tapping this item presents a screen which lets you select an image to use as the icon.  The first item in the list represents the default icon loaded from the package (or a standard icon for URLs).  The images shown to select from are taken from the public "Downloads" and "Pictures" folders on the device.  These are the locations where image files are typically downloaded from a browser (or similar application), and can be viewed by launching the standard Files application on the device.  Supported image file types are PNG, JPG and BMP.'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Password"}),(0,i.jsx)(t.td,{children:"This is a password required to launch the app/URL from the Home Screen.  If empty, no password is required.  The password does not apply if the app is launched outside of the Home Screen."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Launch on startup"}),(0,i.jsxs)(t.td,{children:["When enabled, this will launch the application (or URL) immediately when the launcher starts (typically on device boot).  It is launched prior to presenting the Home Screen.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," Only one app can be launched on startup, so selecting this will disable any other item which previously had this enabled."]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"When all changes to an application entry are complete, tap the Back button to return to the list of allowed applications."})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},49274:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cfgAllow-4a5837f8f4af060698d3da2027c98fa1.png"},33649:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cfgApp-68263a5b5250a728cdf22c1c21f275c4.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var i=n(67294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);