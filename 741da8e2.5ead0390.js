(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),i=(a(0),a(297)),o={title:"Scan2Deploy Studio 1.5.2",author:"Scan2Deploy Studio",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/studio",tags:["scan2deploy-studio"]},l={permalink:"/releases/2021/04/29/scan2deploy-studio-v1.5.2",source:"@site/blog/2021-04-29-scan2deploy-studio-v1.5.2.md",description:"Scan2Deploy Studio 1.5.2 is now available. It includes UI improvements, new features, new script commands, and enhancements to the Visual Formatter.",date:"2021-04-29T00:00:00.000Z",tags:[{label:"scan2deploy-studio",permalink:"/releases/tags/scan-2-deploy-studio"}],title:"Scan2Deploy Studio 1.5.2",readingTime:3.225,truncated:!0,prevItem:{title:"Datalogic Android SDK 1.27",permalink:"/releases/2021/05/14/datalogic-android-sdk-v1.27"},nextItem:{title:"Scan2Deploy Android 1.31",permalink:"/releases/2021/04/28/scan2deploy-android-v1.31"}},c=[{value:"Enhancements",id:"enhancements",children:[]},{value:"Compatibility",id:"compatibility",children:[]},{value:"Corrected Defects",id:"corrected-defects",children:[]}],p={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Scan2Deploy Studio 1.5.2 is now available. It includes UI improvements, new features, new script commands, and enhancements to the Visual Formatter."),Object(i.b)("p",null,"Downloads are available in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-studio/releases"}),"Releases")," section on the Scan2Deploy Studio Github page."),Object(i.b)("h2",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Simplified UI"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Merged the ",Object(i.b)("inlineCode",{parentName:"li"},"Manage Apps"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Install Apps"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"Datalogic Apps")," pages into one ",Object(i.b)("inlineCode",{parentName:"li"},"Applications")," page"),Object(i.b)("li",{parentName:"ul"},"Merged the ",Object(i.b)("inlineCode",{parentName:"li"},"Apply DXU Config")," page into the ",Object(i.b)("inlineCode",{parentName:"li"},"File Upload")," page."),Object(i.b)("li",{parentName:"ul"},"See and edit profile name in title bar"),Object(i.b)("li",{parentName:"ul"},"Removed ability to enable/disable services since disabling services could sometimes cause inconsistent device behavior"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Added features"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Support for multiple Wi-Fi networks"),Object(i.b)("li",{parentName:"ul"},"Support for WPA3 Wi-Fi encryption"),Object(i.b)("li",{parentName:"ul"},"Can now make copies of profiles in the profiles list"),Object(i.b)("li",{parentName:"ul"},"Can now update Wi-Fi Guard from the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/scan2deploy/studio#update"}),"Update tab")," on the ",Object(i.b)("inlineCode",{parentName:"li"},"Applications")," page"),Object(i.b)("li",{parentName:"ul"},"Added right-click menu to copy and paste text and copy images. For Example, this could be useful for copying barcode images and inserting into your own document or webpage."),Object(i.b)("li",{parentName:"ul"},"New ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/scan2deploy/studio#profile-host-location"}),"Profile host location")," features",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Added on device host locations ",Object(i.b)("inlineCode",{parentName:"li"},"Device storage"),", ",Object(i.b)("inlineCode",{parentName:"li"},"SD card"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"USB storage device")),Object(i.b)("li",{parentName:"ul"},"Added support for hosting via FTP servers"),Object(i.b)("li",{parentName:"ul"},"For profiles hosted in Scan2Deploy Studio, the profile host location URL will now auto-update when viewing a QR code from the profiles list"))),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("em",{parentName:"li"},"Copy JSON data (no whitespace)")," and ",Object(i.b)("em",{parentName:"li"},"Copy JSON data")," options to the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/scan2deploy/studio#copy-data"}),"Copy data")," button that appears below Scan2Deploy barcodes."),Object(i.b)("li",{parentName:"ul"},"Added ability to clear or make no changes to default home/launcher app settings."),Object(i.b)("li",{parentName:"ul"},"New script commands",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/scan2deploy/studio#battery_optimization"}),"BATTERY_OPTIMIZATION")," - enables or disables battery optimization for the given package."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/scan2deploy/studio#set_setting"}),"SET_SETTING")," - Set a system setting in the GLOBAL, SECURE, and SYSTEM namespaces."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/scan2deploy/studio#shell"}),"SHELL")," - Run an arbitrary adb shell command."))),Object(i.b)("li",{parentName:"ul"},"Added SureLock to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/scan2deploy/studio#default-homelauncher"}),"Default Home/Launcher")," options on Save and Print page"),Object(i.b)("li",{parentName:"ul"},"Added ability to suppress SureLock EULA on first use via ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/scan2deploy/studio#configuration-column"}),"managed configuration")),Object(i.b)("li",{parentName:"ul"},"Added ability to opt out of including the OEMConfig app in the deployment package when configuring settings that required it on the device"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Visual Formatter enhancements"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Arrays: Possibility to add, remove and edit array constants"),Object(i.b)("li",{parentName:"ul"},"Arrays: Type checking on arrays to avoid the creation of connections with incompatible types"),Object(i.b)("li",{parentName:"ul"},"Arrays: Added blocks for array operations"),Object(i.b)("li",{parentName:"ul"},"Added the possibility to create multiple formatters in the same project and to select the active one when installed on the device"),Object(i.b)("li",{parentName:"ul"},"Added the dispatcher chart, used to specify which formatter to execute based on the inputs received from the scanner"),Object(i.b)("li",{parentName:"ul"},"Allow editing switch nodes as well as constant nodes"),Object(i.b)("li",{parentName:"ul"},"Added several string operations (regex replace, conversions, trim, reverse, etc...)"),Object(i.b)("li",{parentName:"ul"},"Adding custom inputs, outputs and variables, generally used through the Datalogic SDK"),Object(i.b)("li",{parentName:"ul"},"Feature level selection to remove dispatcher and custom variables when selecting a low feature level"),Object(i.b)("li",{parentName:"ul"},"General UI refactoring also introducing new options (import/export, item add/remove/edit, etc...)"),Object(i.b)("li",{parentName:"ul"},"Added documentation for the single nodes (only for the operations)")))),Object(i.b)("h2",{id:"compatibility"},"Compatibility"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-android/releases/tag/v1.31"}),"Scan2Deploy Agent v1.31")," is required for some new features added to this version of Scan2Deploy Studio"),Object(i.b)("h2",{id:"corrected-defects"},"Corrected Defects"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Issue where app would show infinite loading spinner if an invalid tar file was imported"),Object(i.b)("li",{parentName:"ul"},"Issue where downloaded apps could become corrupted and cause profile to fail to deploy"),Object(i.b)("li",{parentName:"ul"},"Issue where profile could show as saved even when there were some unsaved changes"),Object(i.b)("li",{parentName:"ul"},"Issue where the Scripts page could appear erroneously when editing a previous profile"),Object(i.b)("li",{parentName:"ul"},"Issue where loading a profile created in a newer version of Scan2Deploy Studio would freeze older versions of the app"),Object(i.b)("li",{parentName:"ul"},"Issue where a password was required for open Wi-Fi networks"),Object(i.b)("li",{parentName:"ul"},"Issue where profiles created on the same day would sort randomly in the profiles list"),Object(i.b)("li",{parentName:"ul"},"Issue where some valid Deployment host location paths were being rejected as invalid"),Object(i.b)("li",{parentName:"ul"},"Issue where Profiles list would sometimes not show on app first launch")))}s.isMDXComponent=!0},297:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(m,l(l({ref:t},p),{},{components:a})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);