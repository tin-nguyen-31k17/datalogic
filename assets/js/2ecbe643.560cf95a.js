"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[1207],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=o,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15149:function(e,t,n){n.r(t),n.d(t,{AppIcon:function(){return d},assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return h}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"apps",title:"Allowed Apps",sidebar_label:"Allowed Apps"},p=void 0,s={unversionedId:"launcher/apps",id:"launcher/apps",title:"Allowed Apps",description:"Overview",source:"@site/docs/launcher/apps.md",sourceDirName:"launcher",slug:"/launcher/apps",permalink:"/launcher/apps",draft:!1,tags:[],version:"current",frontMatter:{id:"apps",title:"Allowed Apps",sidebar_label:"Allowed Apps"},sidebar:"Launcher",previous:{title:"Home Settings",permalink:"/launcher/home"},next:{title:"Appearance Settings",permalink:"/launcher/disp"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Allowed Apps Settings",id:"allowed-apps-settings",level:2},{value:"Allow apps to launch other apps",id:"allow-apps-to-launch-other-apps",level:3},{value:"Add/Remove an application to/from the Home Screen",id:"addremove-an-application-tofrom-the-home-screen",level:3},{value:"Add a URL shortcut",id:"add-a-url-shortcut",level:3},{value:"Delete a URL shortcut",id:"delete-a-url-shortcut",level:3},{value:"Configure Application Settings",id:"configure-application-settings",level:2}],d=function(e){var t=e.img;return(0,i.kt)("span",{style:{display:"inline-block"}},"(",(0,i.kt)("img",{src:t,style:{verticalAlign:"bottom",display:"inline"}}),")")},u={toc:h,AppIcon:d},m="wrapper";function g(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)(m,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Allowed Apps screen controls which applications and URLs are allowed access from the launcher.  It can be reached by tapping on the Apps button ",(0,i.kt)(d,{img:"/img/launcher/apps.svg",mdxType:"AppIcon"})," from the Home Settings screen."),(0,i.kt)("h2",{id:"allowed-apps-settings"},"Allowed Apps Settings"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Allowed Apps Settings",src:n(49274).Z,width:"270",height:"490"})),(0,i.kt)("p",null,"This screen presents a list of all apps which are installed on the device, as well as any URLs which are currently included on the Home Screen.  Items are shown in alphabetic order (by name), along with their icon.  The icons and names may be customized."),(0,i.kt)("h3",{id:"allow-apps-to-launch-other-apps"},"Allow apps to launch other apps"),(0,i.kt)("p",null,"By default, only apps displayed on the Home Screen may be launched.  This is the most secure setting for the device, but will prevent apps from launching an activity within another app that is not on the Home Screen.  To change this behavior, select the checkbox at the top of the Allowed Apps screen.  When selected, all apps installed on the device (at that moment) will be permitted to launch, regardless of their appearance on the Home Screen."),(0,i.kt)("h3",{id:"addremove-an-application-tofrom-the-home-screen"},"Add/Remove an application to/from the Home Screen"),(0,i.kt)("p",null,"To add an application to the Home Screen, tap the Home icon ",(0,i.kt)(d,{img:"/img/launcher/homeOff.svg",mdxType:"AppIcon"})," to the right of the application to mark it as displayed.  Tap the icon again to remove the application from the list displayed on the Home Screen."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Unchecking an application from the list does not uninstall the application from the device.  It only removes the entry from the list displayed by the Home Screen.")),(0,i.kt)("p",null,"The application list also includes an item labeled ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher Settings"),".  The Home icon for this item can be used to toggle the visibility of the Launcher Settings icon on the Home Screen."),(0,i.kt)("h3",{id:"add-a-url-shortcut"},"Add a URL shortcut"),(0,i.kt)("p",null,"In addition to launching applications, the Home Screen can also browse to web pages using the default browser.  To add a URL shortcut, tap the URL icon ",(0,i.kt)(d,{img:"/img/launcher/url.svg",mdxType:"AppIcon"})," located in the top right corner of the screen.  This will display the ",(0,i.kt)("a",{parentName:"p",href:"#configure-application-settings"},(0,i.kt)("strong",{parentName:"a"},"Configure URL"))," screen (see below).  Tapping the Back button without providing a valid URL will cancel the addition."),(0,i.kt)("h3",{id:"delete-a-url-shortcut"},"Delete a URL shortcut"),(0,i.kt)("p",null,"To remove a URL shortcut from the existing list, tap the Delete icon ",(0,i.kt)(d,{img:"/img/shared/delete.svg",mdxType:"AppIcon"})," for its list entry.  You will be asked to confirm the deletion."),(0,i.kt)("h2",{id:"configure-application-settings"},"Configure Application Settings"),(0,i.kt)("p",null,"Tapping on the name of an application (or URL) from the Allowed Apps list displays the current settings used to display and launch the item from the Home Screen.  You can also reach this screen directly from the Home Settings screen by tapping on any application (or URL) icon."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure App Settings",src:n(33649).Z,width:"270",height:"280"})),(0,i.kt)("p",null,"The header at the top of the settings display identifies the current item by showing the currently selected icon.  For applications, the name (according to its manifest) and package are also displayed.  The following application settings are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:null},"(URL shortcut only) This is the URL to the web page the browser should go to when launched.  ",(0,i.kt)("inlineCode",{parentName:"td"},"http://")," will automatically be added to the URL if the scheme is not included.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Label"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the user-friendly name displayed with the icon when shown on the Home Screen.  It defaults to the name specified in the package, but may be changed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Change Icon..."),(0,i.kt)("td",{parentName:"tr",align:null},'This is the icon displayed when shown on the Home Screen.  Tapping this item presents a screen which lets you select an image to use as the icon.  The first item in the list represents the default icon loaded from the package (or a standard icon for URLs).  The images shown to select from are taken from the public "Downloads" and "Pictures" folders on the device.  These are the locations where image files are typically downloaded from a browser (or similar application), and can be viewed by launching the standard Files application on the device.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Password"),(0,i.kt)("td",{parentName:"tr",align:null},"This is a password required to launch the app/URL from the Home Screen.  If empty, no password is required.  The password does not apply if the app is launched outside of the Home Screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Launch on startup"),(0,i.kt)("td",{parentName:"tr",align:null},"When enabled, this will launch the application (or URL) immediately when the launcher starts (typically on device boot).  It is launched prior to presenting the Home Screen.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Note:")," Only one app can be launched on startup, so selecting this will disable any other item which previously had this enabled.")))),(0,i.kt)("p",null,"When all changes to an application entry are complete, tap the Back button to return to the list of allowed applications."))}g.isMDXComponent=!0},49274:function(e,t,n){t.Z=n.p+"assets/images/cfgAllow-77b9dc3cf5d297e2ae717974773a866b.png"},33649:function(e,t,n){t.Z=n.p+"assets/images/cfgApp-68263a5b5250a728cdf22c1c21f275c4.png"}}]);