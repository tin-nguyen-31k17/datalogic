"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[9745],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,h=p["".concat(c,".").concat(g)]||p[g]||f[g]||o;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79810:function(e,t,n){n.r(t),n.d(t,{LogIcon:function(){return p},assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"archives",title:"Managing Log Archives",sidebar_label:"Managing Log Archives"},c=void 0,s={unversionedId:"logger/archives",id:"logger/archives",title:"Managing Log Archives",description:"(<img src= style={{",source:"@site/docs/logger/archives.md",sourceDirName:"logger",slug:"/logger/archives",permalink:"/logger/archives",tags:[],version:"current",frontMatter:{id:"archives",title:"Managing Log Archives",sidebar_label:"Managing Log Archives"},sidebar:"Logger",previous:{title:"Collecting Logs",permalink:"/logger/logging"},next:{title:"Logger API",permalink:"/logger/api"}},d={},f=[{value:"Exporting Log Archives",id:"exporting-log-archives",level:2},{value:"Location of Log Archives",id:"location-of-log-archives",level:2},{value:"Archive contents",id:"archive-contents",level:2}],p=function(e){var t=e.img;return(0,o.kt)("span",{style:{display:"inline-block"}},"(",(0,o.kt)("img",{src:t,style:{verticalAlign:"bottom",display:"inline"}}),")")},g={toc:f,LogIcon:p};function h(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The bottom portion of the main screen displays a list of the archive files that exist on the device.  The combined storage required by these files can become large, so it is recommended to regularly remove them by using one of two methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Export file:")," Tap the Export icon ",(0,o.kt)(p,{img:"/img/shared/export.svg",mdxType:"LogIcon"})," for a file entry to export it to an external location.  See the following section for details.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Delete file:")," Tap the Delete icon ",(0,o.kt)(p,{img:"/img/shared/delete.svg",mdxType:"LogIcon"})," for a file entry to delete it from the device."))),(0,o.kt)("h2",{id:"exporting-log-archives"},"Exporting Log Archives"),(0,o.kt)("p",null,"When you tap the Export icon for an archive file, you will see the following dialog:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Export Log Archive",src:n(34132).Z,width:"216",height:"124"})),(0,o.kt)("p",null,"The initial selections in the dialog are based on the configuration specified in the Settings screen under ",(0,o.kt)("a",{parentName:"p",href:"/logger/config#general-settings"},"General Settings"),".  If no SD card is installed in the device, that option is disabled."),(0,o.kt)("p",null,"You can change the settings (including the server URL) to redirect the selected archive to a different location.  The next section details where the file is located when exporting to an SD Card.  Tap the Export button to send the archive to the specified location.  Once the export begins, the archive entry displays an indicator of the transfer progress."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Export in progress",src:n(19209).Z,width:"270",height:"269"})),(0,o.kt)("p",null,'More than one archive can be queued for export at the same time by tapping the Export icon for additional archives in the list.  While an archive is waiting to be transferred, it will display a status of "Pending".  If you tap on the Cancel button ',(0,o.kt)(p,{img:"/img/shared/cancel.svg",mdxType:"LogIcon"})," at any time before the export has completed, the transfer will be stopped and the archive will remain in the list."),(0,o.kt)("p",null,"When the export has completed successfully, the file will automatically be deleted from the internal storage of the device (and removed from the list).  If an error occurs during the transfer, the archive will remain in the list and a notification will be generated indicating that there was an error.  This would typically only happen if there was a network error during transmission."),(0,o.kt)("h2",{id:"location-of-log-archives"},"Location of Log Archives"),(0,o.kt)("p",null,"Instead of exporting log archives using the UI, you may connect the device directly to a PC and copy the files from the device over USB.  Follow these steps to locate the archive files on the device using Windows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Attach the device to a PC with a USB cable."),(0,o.kt)("li",{parentName:"ol"},"Open Windows Explorer.  If the Android device is not listed, then launch the Settings Application on the device and follow these steps:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Tap "Connected devices"'),(0,o.kt)("li",{parentName:"ol"},'Tap "USB"'),(0,o.kt)("li",{parentName:"ol"},'Under the heading "Use USB for", tap "File Transfer"'))),(0,o.kt)("li",{parentName:"ol"},'Open the icon for the Android device (e.g. "Skorpio X5").'),(0,o.kt)("li",{parentName:"ol"},'Open "Internal Shared Storage".  If the files are located on an SD card, you can choose that location instead (e.g. "SanDisk SD Card")'),(0,o.kt)("li",{parentName:"ol"},"The archive files are located in the following folder:\n",(0,o.kt)("inlineCode",{parentName:"li"},"Android\\data\\com.datalogic.logger\\files"))),(0,o.kt)("p",null,"After making a copy of the file, it is best to delete the file from the device to make room for additional archives."),(0,o.kt)("h2",{id:"archive-contents"},"Archive contents"),(0,o.kt)("p",null,"Once the log archive is transferred from the device, you can examine its contents.  The name of the file provides some information as to its contents.  The name follows this format:"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","log","_","<",(0,o.kt)("em",{parentName:"p"},"deviceModel"),">","_","<",(0,o.kt)("em",{parentName:"p"},"deviceSerialNumber"),">","_","<",(0,o.kt)("em",{parentName:"p"},"dateTime"),">",".zip"),(0,o.kt)("p",null,"The date/time used in the name is taken at the point the archive is created (when logging stops)."),(0,o.kt)("p",null,"The archive file is a standard ZIP file, so any software (such as Windows Explorer) that can read ZIP files can be used to read its contents.  Inside the archive you will find the following files.  Each file is a text file, viewable from several programs, such as Notepad."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"readme.txt"),(0,o.kt)("br",null),"\nThis describes the settings used to control logging behavior, as well as special circumstances (such as recovery from a device freeze) of how the archive was created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"logcat.log")," (if enabled)",(0,o.kt)("br",null),"\nThis contains the log content generated by the Logcat module."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kern.log")," (if enabled).",(0,o.kt)("br",null),"\nThis contains the log content generated by the Kernel module.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The log modules use the Linux line termination sequence (",(0,o.kt)("samp",null,"LF"),").  This may not be compatible with all Windows-based text file viewers."))),(0,o.kt)("p",null,"The specific entries inside each log file are intended to be examined by a software engineer who is familiar with the software that generated the message."))}h.isMDXComponent=!0},34132:function(e,t){t.Z="data:image/png;base64,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"},19209:function(e,t,n){t.Z=n.p+"assets/images/mainXfer-253d24a0ad0331d8e0a16572cb5c0d1a.png"}}]);