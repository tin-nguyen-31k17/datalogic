"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[2243],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},79193:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"config",title:"Launcher Settings",sidebar_label:"Launcher Settings"},p=void 0,d={unversionedId:"launcher/config",id:"launcher/config",title:"Launcher Settings",description:"Overview",source:"@site/docs/launcher/config.md",sourceDirName:"launcher",slug:"/launcher/config",permalink:"/launcher/config",draft:!1,tags:[],version:"current",frontMatter:{id:"config",title:"Launcher Settings",sidebar_label:"Launcher Settings"},sidebar:"Launcher",previous:{title:"Appearance Settings",permalink:"/launcher/disp"},next:{title:"Export/Import Settings",permalink:"/launcher/export"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"User Interface Settings",id:"user-interface-settings",level:2},{value:"Home Screen Title",id:"home-screen-title",level:3},{value:"General User Interface",id:"general-user-interface",level:3},{value:"Reset Settings",id:"reset-settings",level:2}],m={toc:u},c="wrapper";function g(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)(c,(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Launcher Settings screen provides controls for configuring the device wide user interface while using Datalogic Launcher, as well as management of configuration settings.  The screen operates similar to the Android Settings application, and can be reached from the Home Screen by tapping on the Launcher Settings icon."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Settings Screen",src:a(43113).Z,width:"270",height:"230"})),(0,l.kt)("h2",{id:"user-interface-settings"},"User Interface Settings"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"User Interface Settings",src:a(54255).Z,width:"270",height:"385"})),(0,l.kt)("p",null,"Tapping the User Interface group presents a screen which controls the overall user interface of the device while the launcher is running."),(0,l.kt)("h3",{id:"home-screen-title"},"Home Screen Title"),(0,l.kt)("p",null,"The Home Screen Title controls the presence of a title bar on the Home Screen and the text it displays.  When empty, the title bar is not shown.  Otherwise, the title bar is displayed at the top of the Home Screen."),(0,l.kt)("p",null,"In addition to general text, some device information may also be displayed in the title bar.  To achieve this, include the appropriate tag (not case sensitive) with the text of the Home Screen Title.  When detected in the title, tag is substituted for the actual information value from the device running Datalogic Launcher."),(0,l.kt)("p",null,"The following tags are supported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Information Tag"),(0,l.kt)("th",{parentName:"tr",align:null},"Device Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$sn"),(0,l.kt)("td",{parentName:"tr",align:null},"Device serial number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$dev"),(0,l.kt)("td",{parentName:"tr",align:null},"Device name")))),(0,l.kt)("p",null,"Examples of Home Screen titles are shown here:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Title Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Title Displayed"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warehouse Management"),(0,l.kt)("td",{parentName:"tr",align:null},"Warehouse Management")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$sn"),(0,l.kt)("td",{parentName:"tr",align:null},"I19G00068")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$dev"),(0,l.kt)("td",{parentName:"tr",align:null},"Floor 42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$dev S/N $sn"),(0,l.kt)("td",{parentName:"tr",align:null},"Floor 42 S/N I19G00068")))),(0,l.kt)("h3",{id:"general-user-interface"},"General User Interface"),(0,l.kt)("p",null,"The remaining available User Interface settings are described below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Screen Contents")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Overview Button"),(0,l.kt)("td",{parentName:"tr",align:null},"Make visible/available the overview button in the navigation bar at the bottom of the screen.  The Overview button is at the bottom right of the display and provides access to a list of recently launched applications to switch to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global Actions dialog"),(0,l.kt)("td",{parentName:"tr",align:null},"Make available the dialog of global actions that is displayed when a long press of the power key is made.  This dialog provides access to restart the device.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Notifications"),(0,l.kt)("td",{parentName:"tr",align:null},"Display notifications from the system and/or services in the top left corner of the display.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System Info"),(0,l.kt)("td",{parentName:"tr",align:null},"Display system information icons in the top status bar, such as the current time and battery status.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Launcher Administration")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allow access to settings and exit"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds an icon on the Home Screen at the end of the application list which provides access to the Settings screen.  ",(0,l.kt)("strong",{parentName:"td"},"Note:")," When hidden, back door access to the settings screen is still available by tapping 5 times on an empty area of the screen.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Administrator Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the administrator password used to access the settings screen (and optionally exit Datalogic Launcher).")))),(0,l.kt)("h2",{id:"reset-settings"},"Reset Settings"),(0,l.kt)("p",null,"Tapping on ",(0,l.kt)("inlineCode",{parentName:"p"},"Reset settings")," in the initial settings screen will reset all the launcher settings to default values (after confirmation).  Here is a list of all the settings and their default values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Import From File"),(0,l.kt)("td",{parentName:"tr",align:null},"EMM (or Scan2Deploy Studio) only; Blank (don't import settings from file)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allow apps to launch other apps"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled; only apps displayed on the Home Screen may be launched.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Allowed Apps")),(0,l.kt)("td",{parentName:"tr",align:null},"Empty (no applications allowed)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application Label"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as specified in the package manifest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty (Don't use URL)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application Icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as specified in the package manifest; standard built-in icon for URLs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty (no password required)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Launch on startup"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Screen Contents ")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Overview Button"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global Actions dialog"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Notifications"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"System Info"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Launcher Administration")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allow access to settings and exit"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Administrator Password"),(0,l.kt)("td",{parentName:"tr",align:null},"0000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Appearance")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application Layout"),(0,l.kt)("td",{parentName:"tr",align:null},"Grid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon Size"),(0,l.kt)("td",{parentName:"tr",align:null},"Small")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label Size"),(0,l.kt)("td",{parentName:"tr",align:null},"Small")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label Color"),(0,l.kt)("td",{parentName:"tr",align:null},"000000 (black; concatenated hexadecimal values for Red, Green, Blue)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Wallpaper")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Wallpaper Image"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Wallpaper Size"),(0,l.kt)("td",{parentName:"tr",align:null},"Center (no stretch)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Background Color"),(0,l.kt)("td",{parentName:"tr",align:null},"FFFFFF (white; concatenated hexadecimal values for Red, Green, Blue)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Title Bar")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title Text Size"),(0,l.kt)("td",{parentName:"tr",align:null},"Small")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title Text Color"),(0,l.kt)("td",{parentName:"tr",align:null},"000000 (black; concatenated hexadecimal values for Red, Green, Blue)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title Background Color"),(0,l.kt)("td",{parentName:"tr",align:null},"FFFFFF (white; concatenated hexadecimal values for Red, Green, Blue)")))))}g.isMDXComponent=!0},43113:function(t,e,a){e.Z=a.p+"assets/images/cfgFull-6e8fe4dec2c7e0bdeecf1085d7430a09.png"},54255:function(t,e,a){e.Z=a.p+"assets/images/cfgUI-177291de7ee971dd36aa954ed7cf46b6.png"}}]);