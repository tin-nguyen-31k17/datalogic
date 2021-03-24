(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{207:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(r,".").concat(m)]||d[m]||g[m]||o;return n?i.a.createElement(u,c(c({ref:t},b),{},{components:n})):i.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),o=(n(0),n(207)),r={id:"overview",title:"OEMConfig",sidebar_label:"Overview"},c={unversionedId:"oemconfig/overview",id:"oemconfig/overview",isDocsHomePage:!1,title:"OEMConfig",description:"This document is a guide for installing and using OEMConfig to configure Datalogic devices.",source:"@site/docs/oemconfig/overview.md",slug:"/oemconfig/overview",permalink:"/oemconfig/overview",version:"current",sidebar_label:"Overview",sidebar:"OEMConfig",next:{title:"Scanner Settings",permalink:"/oemconfig/scanner-settings"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Applying Managed Configurations",id:"applying-managed-configurations",children:[]},{value:"Feedback Channel",id:"feedback-channel",children:[]},{value:"Managed Configuration Restrictions",id:"managed-configuration-restrictions",children:[]},{value:"Release Notes",id:"release-notes",children:[{value:"OEMConfig 1.8.1",id:"oemconfig-181",children:[]},{value:"OEMConfig 1.8.0",id:"oemconfig-180",children:[]},{value:"OEMConfig 1.7.2",id:"oemconfig-172",children:[]},{value:"OEMConfig 1.7.1 (internal release)",id:"oemconfig-171-internal-release",children:[]},{value:"OEMConfig 1.7.0",id:"oemconfig-170",children:[]},{value:"OEMConfig 1.6.2",id:"oemconfig-162",children:[]},{value:"OEMConfig 1.6.1",id:"oemconfig-161",children:[]},{value:"OEMConfig 1.6.0",id:"oemconfig-160",children:[]},{value:"OEMConfig 1.5.1",id:"oemconfig-151",children:[]},{value:"OEMConfig 1.5.0",id:"oemconfig-150",children:[]},{value:"OEMConfig 1.4.0",id:"oemconfig-140",children:[]},{value:"OEMConfig 1.3.0",id:"oemconfig-130",children:[]},{value:"OEMConfig 1.2.0",id:"oemconfig-120",children:[]},{value:"OEMConfig 1.1.0",id:"oemconfig-110",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document is a guide for installing and using OEMConfig to configure Datalogic devices."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"The Datalogic OEMConfig application is available in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://play.google.com/store/apps/details?id=com.datalogic.settings.oemconfig"}),"Managed Google Play"),". The application is compatible with Datalogic devices running Android 8 and above. The Datalogic OEMConfig application is published to your device by your Enterprise Mobility Solution (EMM) provider through the EMM administrator console. Please refer to your EMM's instructions on how to add and deploy OEMConfig to your devices."),Object(o.b)("p",null,"The following links provide more information about Android Enterprise and OEMConfig."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Datalogic OEMConfig ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://play.google.com/store/apps/details?id=com.datalogic.settings.oemconfig"}),"on the Play Store")),Object(o.b)("li",{parentName:"ul"},"Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://support.google.com/work/android/answer/6174030?hl=en&ref_topic=6174026"}),"Managed Google Play Setup")),Object(o.b)("li",{parentName:"ul"},"Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developers.google.com/android/work/"}),"Android Enterprise")),Object(o.b)("li",{parentName:"ul"},"See list of ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://androidenterprisepartners.withgoogle.com/emm/"}),"Android Enterprise Recommended EMMs")),Object(o.b)("li",{parentName:"ul"},"Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.blog.google/products/android-enterprise/oemconfig-supports-enterprise-device-features/"}),"OEMConfig"))),Object(o.b)("h2",{id:"applying-managed-configurations"},"Applying Managed Configurations"),Object(o.b)("p",null,"The managed configuration contains the device settings exposed by OEMConfig. Your EMM administrator console provides an interface to view and make changes to the managed configuration. Once configured, the EMM will publish the customized configuration to the device to be applied by the Datalogic OEMConfig application. Refer to your EMM's instructions on how to edit and send the managed configuration to your devices."),Object(o.b)("p",null,"Once the EMM has published the custom configuration, the OEMConfig application will be notified and will automatically begin applying the custom configuration to the device. In most cases, the configuration should be applied in less than one minute."),Object(o.b)("p",null,"Updates to the managed configuration and Datalogic OEMConfig app will be uploaded to Managed Google Play. The EMM will sync with the latest version of Datalogic OEMConfig. Therefore, the latest updates and features will always be available for use."),Object(o.b)("h2",{id:"feedback-channel"},"Feedback Channel"),Object(o.b)("p",null,"The application feedback channel is a mechanism to provide configuration results to an administrator. Once a managed configuration is deployed, a feedback state will be created for each restriction received. This state will either be ",Object(o.b)("em",{parentName:"p"},"INFO")," (success) or ",Object(o.b)("em",{parentName:"p"},"ERROR")," (failure), and will contain the sent value and other relevant data."),Object(o.b)("p",null,"The report will then be available for retrieval by the EMM administrator console. The report may not be immediately available (a request for immediate feedback retrieval is allowed three times per device in a 24-hr period), but will be retrieved within some time frame."),Object(o.b)("p",null,"For information regarding feedback channel support within the EMM administrator console, please contact your EMM provider."),Object(o.b)("h2",{id:"managed-configuration-restrictions"},"Managed Configuration Restrictions"),Object(o.b)("p",null,"Each customizable setting in the managed configuration is a restriction type."),Object(o.b)("p",null,"The following sections contain:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A description of each restriction in the managed configuration"),Object(o.b)("li",{parentName:"ul"},"Any dependencies on other restrictions"),Object(o.b)("li",{parentName:"ul"},"Valid value ranges and data types"),Object(o.b)("li",{parentName:"ul"},"The restriction's default value")),Object(o.b)("p",null,"A brief description of each restriction should also be presented in the EMM administrator console."),Object(o.b)("h2",{id:"release-notes"},"Release Notes"),Object(o.b)("h3",{id:"oemconfig-181"},"OEMConfig 1.8.1"),Object(o.b)("h4",{id:"corrected-defects"},"Corrected Defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixed incorrect default value for Memor 20 ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#2nd-display"}),"2nd Display")," Sleep setting")),Object(o.b)("h3",{id:"oemconfig-180"},"OEMConfig 1.8.0"),Object(o.b)("h4",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/power-settings#battery-saver"}),"Battery Saver")," settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#wi-fi"}),"Wi-Fi")," settings"),Object(o.b)("li",{parentName:"ul"},"Added Memor 20 ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#2nd-display"}),"2nd Display")," settings"),Object(o.b)("li",{parentName:"ul"},"Added Memor 20 ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#ethernet"}),"Ethernet")," setting"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#display"}),"Disable touch screen")," setting")),Object(o.b)("h4",{id:"corrected-defects-1"},"Corrected Defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added missing ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/key-settings#auto-scan"}),"Auto scan")," trigger"),Object(o.b)("li",{parentName:"ul"},"Improved screen brightness consistency across devices")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-172"},"OEMConfig 1.7.2"),Object(o.b)("h4",{id:"corrected-defects-2"},"Corrected Defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixed ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#language"}),"Language")," setting not persisting through reboot")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-171-internal-release"},"OEMConfig 1.7.1 (internal release)"),Object(o.b)("h4",{id:"enhancements-1"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Changed default behavior when started from Scan2Deploy")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-170"},"OEMConfig 1.7.0"),Object(o.b)("h4",{id:"enhancements-2"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/overview#feedback-channel"}),"Feedback Channel")," support"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#usb"}),"USB Debugging")," setting"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#language"}),"Language")," setting"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#linear-quiet-zones"}),"MSI Linear Quiet Zone")," setting")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-162"},"OEMConfig 1.6.2"),Object(o.b)("h4",{id:"corrected-defects-3"},"Corrected Defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixed space character trimming for scanner ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#formatting"}),"formatting")," settings (escape sequence now allowed)")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-161"},"OEMConfig 1.6.1"),Object(o.b)("h4",{id:"enhancements-3"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Updated settings organization"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#code-128-isbt-128"}),"ISBT 128 User ID")," settings")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-160"},"OEMConfig 1.6.0"),Object(o.b)("h4",{id:"enhancements-4"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings"}),"Network")," settings",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#general"}),"Airplane Mode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#bluetooth"}),"Bluetooth")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#mobile-network"}),"Mobile Network"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#apn"}),"APN")))))),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#system-settings"}),"System")," settings",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#date-and-time"}),"Date and Time")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#ntp"}),"NTP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#display"}),"Display")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#sound"}),"Sound")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#volume"}),"Volume"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-151"},"OEMConfig 1.5.1"),Object(o.b)("h4",{id:"corrected-defects-4"},"Corrected Defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixed service notification icon format")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-150"},"OEMConfig 1.5.0"),Object(o.b)("h4",{id:"enhancements-5"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/key-settings#key-remapping"}),"Key remapping")," settings")),Object(o.b)("h4",{id:"corrected-defects-5"},"Corrected Defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Changed default value for keyboard wedge input mode"),Object(o.b)("li",{parentName:"ul"},"Fixed mismatch in restrictions schema for firmware update")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-140"},"OEMConfig 1.4.0"),Object(o.b)("h4",{id:"enhancements-6"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/power-settings#wireless-charging"}),"Charging profile")," setting"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#location"}),"Location mode")," setting"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#nfc"}),"NFC configuration")," setting"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/power-settings#general"}),"Power management")," settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/key-settings#key-triggers"}),"Key trigger configuration")," settings")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-130"},"OEMConfig 1.3.0"),Object(o.b)("h4",{id:"enhancements-7"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Improved ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#notification"}),"Good read audio file")," selection (split into separate custom and default values)"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#msi"}),"MSI")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#code-128"}),"Code 128")," aggressiveness settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#advanced-barcode-options"}),"Code 128 linear quiet zone")," setting"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options-multi-scan"}),"Scanning illumination type")," setting"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options-multi-scan"}),"Image capture profile")," setting"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options-multi-scan"}),"Custom image capture profile")," setting")),Object(o.b)("h4",{id:"corrected-defects-6"},"Corrected Defects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Removed value dependencies, allowing any setting to be configured regardless of another setting's state")),Object(o.b)("h4",{id:"other-notes"},"Other Notes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Removed top level bundle arrays from schema  ")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-120"},"OEMConfig 1.2.0"),Object(o.b)("h4",{id:"enhancements-8"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Unconfigured settings have their default value applied")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"oemconfig-110"},"OEMConfig 1.1.0"),Object(o.b)("h4",{id:"compatibility"},"Compatibility"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Android 8 and above")),Object(o.b)("h4",{id:"enhancements-9"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#notification"}),"Notification")," settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#good-read"}),"Good Read")," settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#formatting"}),"Formatting")," settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options-multi-scan"}),"Scanner Options & Multi Scan")," settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#wedge"}),"Wedge")," settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#symbologies"}),"Symbology")," settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/firmware"}),"Firmware Update")," settings")),Object(o.b)("h4",{id:"other-notes-1"},"Other Notes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Initial release in Play Store  ")))}s.isMDXComponent=!0}}]);