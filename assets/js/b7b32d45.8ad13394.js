"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3074],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47938:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={id:"export",title:"Export/Import Settings",sidebar_label:"Export/Import Settings"},p=void 0,s={unversionedId:"browser/export",id:"browser/export",title:"Export/Import Settings",description:"Cloning Browser Settings",source:"@site/docs/browser/export.md",sourceDirName:"browser",slug:"/browser/export",permalink:"/browser/export",tags:[],version:"current",frontMatter:{id:"export",title:"Export/Import Settings",sidebar_label:"Export/Import Settings"},sidebar:"Browser",previous:{title:"Operation Settings",permalink:"/browser/operation"}},c={},u=[{value:"Cloning Browser Settings",id:"cloning-browser-settings",level:2}],f={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cloning-browser-settings"},"Cloning Browser Settings"),(0,i.kt)("p",null,"To clone the Datalogic Enterprise Browser configuration from one device to multiple devices, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Export the device configuration to a file.")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},'Go to the Browser Settings screen, and tap "Export to File".'),(0,i.kt)("li",{parentName:"ol"},'A dialog will appear prompting you for the name of the file to save the configuration to.  If the name begins with a "/" (slash), it is assumed that the full path to the file is specified.  If not, then the file will be stored in the public "Downloads" directory.  The default name is "browser.cfg".'),(0,i.kt)("li",{parentName:"ol"},"Tap the Export button to save the configuration to the named file."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Copy the configuration file from the device to a PC.")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Attach the device to a PC with a USB cable."),(0,i.kt)("li",{parentName:"ol"},"Open Windows Explorer.  If the Android device is not listed, then launch the Settings Application on the device and follow these steps:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},'Tap "Connected devices"'),(0,i.kt)("li",{parentName:"ol"},'Tap "USB"'),(0,i.kt)("li",{parentName:"ol"},'Under the heading "Use USB for", tap "File Transfer"'))),(0,i.kt)("li",{parentName:"ol"},'Open the icon for the Android device (e.g. "Skorpio X5").'),(0,i.kt)("li",{parentName:"ol"},'Open "Internal Shared Storage".  If the files are located on an SD card, you can choose that location instead (e.g. "SanDisk SD Card")'),(0,i.kt)("li",{parentName:"ol"},'Browse to the folder where the file is stored (e.g. "Download")'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Import the configuration to a device using an EMM (or Scan2Deploy Studio)")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Using the EMM console, locate the Datalogic Enterprise Browser configuration settings."),(0,i.kt)("li",{parentName:"ol"},'For the setting "Import settings from file", specify the filename of the configuration settings file.  The filename should match the value used by the "Export to File" dialog from step 1 earlier (e.g. "browser.cfg").'),(0,i.kt)("li",{parentName:"ol"},'Configure the EMM to send the configuration file to the device.  The name and location should be the same as specified by the previous step (e.g. "/sdcard/Download/browser.cfg")'),(0,i.kt)("li",{parentName:"ol"},"Configure the EMM to send any additional files required by the configuration for custom wallpaper and/or icons."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Enroll one or more devices with the EMM (or Scan2Deploy Studio)")),(0,i.kt)("p",{parentName:"li"},"Once a new device is enrolled with the EMM, the settings will automatically be applied to the new device.  The same is true when scanning a barcode to deploy settings with Scan2Deploy Studio."))))}d.isMDXComponent=!0}}]);