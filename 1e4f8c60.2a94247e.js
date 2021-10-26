(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(8),c=(n(0),n(286)),o={id:"overview",title:"OEMConfig",sidebar_label:"Overview"},r={unversionedId:"oemconfig/overview",id:"oemconfig/overview",isDocsHomePage:!1,title:"OEMConfig",description:"This document is a guide for installing and using OEMConfig to configure Datalogic devices.",source:"@site/docs/oemconfig/overview.md",slug:"/oemconfig/overview",permalink:"/oemconfig/overview",version:"current",sidebar_label:"Overview",sidebar:"OEMConfig",next:{title:"Scanner Settings",permalink:"/oemconfig/scanner-settings"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Applying Managed Configurations",id:"applying-managed-configurations",children:[]},{value:"Feedback Channel",id:"feedback-channel",children:[]},{value:"Managed Configuration Restrictions",id:"managed-configuration-restrictions",children:[]},{value:"Release Notes",id:"release-notes",children:[{value:"OEMConfig 2.0.0",id:"oemconfig-200",children:[]},{value:"OEMConfig 1.10.0",id:"oemconfig-1100",children:[]},{value:"OEMConfig 1.9.0",id:"oemconfig-190",children:[]},{value:"OEMConfig 1.8.2",id:"oemconfig-182",children:[]},{value:"OEMConfig 1.8.1",id:"oemconfig-181",children:[]},{value:"OEMConfig 1.8.0",id:"oemconfig-180",children:[]},{value:"OEMConfig 1.7.2",id:"oemconfig-172",children:[]},{value:"OEMConfig 1.7.1 (internal release)",id:"oemconfig-171-internal-release",children:[]},{value:"OEMConfig 1.7.0",id:"oemconfig-170",children:[]},{value:"OEMConfig 1.6.2",id:"oemconfig-162",children:[]},{value:"OEMConfig 1.6.1",id:"oemconfig-161",children:[]},{value:"OEMConfig 1.6.0",id:"oemconfig-160",children:[]},{value:"OEMConfig 1.5.1",id:"oemconfig-151",children:[]},{value:"OEMConfig 1.5.0",id:"oemconfig-150",children:[]},{value:"OEMConfig 1.4.0",id:"oemconfig-140",children:[]},{value:"OEMConfig 1.3.0",id:"oemconfig-130",children:[]},{value:"OEMConfig 1.2.0",id:"oemconfig-120",children:[]},{value:"OEMConfig 1.1.0",id:"oemconfig-110",children:[]}]}],l={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This document is a guide for installing and using OEMConfig to configure Datalogic devices."),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"The Datalogic OEMConfig application is available in ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://play.google.com/store/apps/details?id=com.datalogic.settings.oemconfig"}),"Managed Google Play"),". The application is compatible with Datalogic devices running Android 8 and above. The Datalogic OEMConfig application is published to your device by your Enterprise Mobility Solution (EMM) provider through the EMM administrator console. Please refer to your EMM's instructions on how to add and deploy OEMConfig to your devices."),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"  OEMConfig can only be configured through an EMM administrator console. The OEMConfig application is a foreground service; it doesn't have a user interface or launcher icon. You can verify that OEMConfig is installed on your device by going to ",Object(c.b)("inlineCode",{parentName:"p"},"Settings")," > ",Object(c.b)("inlineCode",{parentName:"p"},"Apps & notifications")," > ",Object(c.b)("inlineCode",{parentName:"p"},"App info"),"."))),Object(c.b)("p",null,"The following links provide more information about Android Enterprise and OEMConfig."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Datalogic OEMConfig ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://play.google.com/store/apps/details?id=com.datalogic.settings.oemconfig"}),"on the Play Store")),Object(c.b)("li",{parentName:"ul"},"Learn more about ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://support.google.com/work/android/answer/6174030?hl=en&ref_topic=6174026"}),"Managed Google Play Setup")),Object(c.b)("li",{parentName:"ul"},"Learn more about ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developers.google.com/android/work/"}),"Android Enterprise")),Object(c.b)("li",{parentName:"ul"},"See list of ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://androidenterprisepartners.withgoogle.com/emm/"}),"Android Enterprise Recommended EMMs")),Object(c.b)("li",{parentName:"ul"},"Learn more about ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.blog.google/products/android-enterprise/oemconfig-supports-enterprise-device-features/"}),"OEMConfig"))),Object(c.b)("h2",{id:"applying-managed-configurations"},"Applying Managed Configurations"),Object(c.b)("p",null,"The managed configuration contains the device settings exposed by OEMConfig. Your EMM administrator console provides an interface to view and make changes to the managed configuration. Once configured, the EMM will publish the customized configuration to the device to be applied by the Datalogic OEMConfig application. Refer to your EMM's instructions on how to edit and send the managed configuration to your devices."),Object(c.b)("p",null,"Once the EMM has published the custom configuration, the OEMConfig application will be notified and will automatically begin applying the custom configuration to the device. In most cases, the configuration should be applied in less than one minute."),Object(c.b)("p",null,"Updates to the managed configuration and Datalogic OEMConfig app will be uploaded to Managed Google Play. The EMM will sync with the latest version of Datalogic OEMConfig. Therefore, the latest updates and features will always be available for use."),Object(c.b)("h2",{id:"feedback-channel"},"Feedback Channel"),Object(c.b)("p",null,"The application feedback channel is a mechanism to provide configuration results to an administrator. Once a managed configuration is deployed, a feedback state will be created for each restriction received. This state will either be ",Object(c.b)("em",{parentName:"p"},"INFO")," (success) or ",Object(c.b)("em",{parentName:"p"},"ERROR")," (failure), and will contain the sent value and other relevant data."),Object(c.b)("p",null,"The report will then be available for retrieval by the EMM administrator console. The report may not be immediately available (a request for immediate feedback retrieval is allowed three times per device in a 24-hr period), but will be retrieved within some time frame."),Object(c.b)("p",null,"For information regarding feedback channel support within the EMM administrator console, please contact your EMM provider."),Object(c.b)("h2",{id:"managed-configuration-restrictions"},"Managed Configuration Restrictions"),Object(c.b)("p",null,"Each customizable setting in the managed configuration is a restriction type."),Object(c.b)("p",null,"The following sections contain:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A description of each restriction in the managed configuration"),Object(c.b)("li",{parentName:"ul"},"Any dependencies on other restrictions"),Object(c.b)("li",{parentName:"ul"},"Valid value ranges and data types"),Object(c.b)("li",{parentName:"ul"},"The restriction's default value")),Object(c.b)("p",null,"A brief description of each restriction should also be presented in the EMM administrator console."),Object(c.b)("h2",{id:"release-notes"},"Release Notes"),Object(c.b)("h3",{id:"oemconfig-200"},"OEMConfig 2.0.0"),Object(c.b)("h4",{id:"enhancements"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added baroque and viper options to ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#notification"}),"Good read audio mode")),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#notification"}),"Good read audio channel")),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options"}),"Illumination time")),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options"}),"Scan mode")),Object(c.b)("li",{parentName:"ul"},"Added Multi Scan ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#multi-scan"}),"Partial results")),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#presentation-mode"}),"Presentation mode")),Object(c.b)("li",{parentName:"ul"},"Added Barcode settings:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#code-39"}),"Code 39 Aggressiveness")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#data-matrix"}),"Data Matrix Aggressiveness")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#interleaved-2-of-5"}),"Interleaved 2 of 5 Aggressiveness")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#upcean-aggressiveness"}),"UPC/EAN Aggressiveness")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#data-matrix"}),"Data Matrix mirror")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#data-matrix-gs1-data-matrix"}),"GS1-Data Matrix symbology")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#qr-code-gs1-qr-code"}),"GS1-QR code symbology")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#interleaved-2-of-5-itf-14"}),"ITF-14 symbology")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#ocr"}),"OCR symbology")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#qr-code"}),"Scan2Deploy configuration format")))),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/power-settings#off-mode-charge"}),"Off-mode charge")),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#dual-sim-memor-20-only"}),"Memor 20 Dual SIM")),Object(c.b)("li",{parentName:"ul"},"Added Wi-Fi settings:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#module-settings"}),"Power save")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#roaming-settings"}),"Roaming profile")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#wi-fi-channel-selection"}),"Channel configuration")))),Object(c.b)("li",{parentName:"ul"},"Added NTP settings:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#ntp"}),"Secondary NTP server")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#ntp"}),"NTP server connection timeout")))),Object(c.b)("li",{parentName:"ul"},"Added USB function:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#usb"}),"Default USB function")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#usb"}),"Current USB function"))))),Object(c.b)("h4",{id:"corrected-defects"},"Corrected Defects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fixed issue where settings would not apply on Memor 10 Android 8.1"),Object(c.b)("li",{parentName:"ul"},"Fixed issue where settings would not apply on Memor K")),Object(c.b)("h3",{id:"oemconfig-1100"},"OEMConfig 1.10.0"),Object(c.b)("h4",{id:"enhancements-1"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/launch-intents"}),"Launch Activities")," settings.")),Object(c.b)("h3",{id:"oemconfig-190"},"OEMConfig 1.9.0"),Object(c.b)("h4",{id:"enhancements-2"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Increased keyboard remapping support to cover all keys on the Skorpio X5 and the volume keys.")),Object(c.b)("h4",{id:"corrected-defects-1"},"Corrected Defects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added descriptions to some configuration items to better indicate which products they are supported on.")),Object(c.b)("h3",{id:"oemconfig-182"},"OEMConfig 1.8.2"),Object(c.b)("h4",{id:"enhancements-3"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Improved handling of incorrect values for newer settings")),Object(c.b)("h3",{id:"oemconfig-181"},"OEMConfig 1.8.1"),Object(c.b)("h4",{id:"corrected-defects-2"},"Corrected Defects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fixed incorrect default value for Memor 20 ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#2nd-display"}),"2nd Display")," Sleep setting")),Object(c.b)("h3",{id:"oemconfig-180"},"OEMConfig 1.8.0"),Object(c.b)("h4",{id:"enhancements-4"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/power-settings#battery-saver"}),"Battery Saver")," settings"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#wi-fi"}),"Wi-Fi")," settings"),Object(c.b)("li",{parentName:"ul"},"Added Memor 20 ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#2nd-display"}),"2nd Display")," settings"),Object(c.b)("li",{parentName:"ul"},"Added Memor 20 ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#ethernet"}),"Ethernet")," setting"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#display"}),"Disable touch screen")," setting")),Object(c.b)("h4",{id:"corrected-defects-3"},"Corrected Defects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added missing ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/key-settings#auto-scan"}),"Auto scan")," trigger"),Object(c.b)("li",{parentName:"ul"},"Improved screen brightness consistency across devices")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-172"},"OEMConfig 1.7.2"),Object(c.b)("h4",{id:"corrected-defects-4"},"Corrected Defects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fixed ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#language"}),"Language")," setting not persisting through reboot")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-171-internal-release"},"OEMConfig 1.7.1 (internal release)"),Object(c.b)("h4",{id:"enhancements-5"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Changed default behavior when started from Scan2Deploy")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-170"},"OEMConfig 1.7.0"),Object(c.b)("h4",{id:"enhancements-6"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/overview#feedback-channel"}),"Feedback Channel")," support"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#usb"}),"USB Debugging")," setting"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#language"}),"Language")," setting"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#linear-quiet-zones"}),"MSI Linear Quiet Zone")," setting")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-162"},"OEMConfig 1.6.2"),Object(c.b)("h4",{id:"corrected-defects-5"},"Corrected Defects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fixed space character trimming for scanner ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#formatting"}),"formatting")," settings (escape sequence now allowed)")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-161"},"OEMConfig 1.6.1"),Object(c.b)("h4",{id:"enhancements-7"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Updated settings organization"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#code-128-isbt-128"}),"ISBT 128 User ID")," settings")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-160"},"OEMConfig 1.6.0"),Object(c.b)("h4",{id:"enhancements-8"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings"}),"Network")," settings",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#general"}),"Airplane Mode")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#bluetooth"}),"Bluetooth")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#mobile-network"}),"Mobile Network"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#apn"}),"APN")))))),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#system-settings"}),"System")," settings",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#date-and-time"}),"Date and Time")," and ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#ntp"}),"NTP")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#display"}),"Display")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#sound"}),"Sound")," and ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#volume"}),"Volume"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-151"},"OEMConfig 1.5.1"),Object(c.b)("h4",{id:"corrected-defects-6"},"Corrected Defects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fixed service notification icon format")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-150"},"OEMConfig 1.5.0"),Object(c.b)("h4",{id:"enhancements-9"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/key-settings#key-remapping"}),"Key remapping")," settings")),Object(c.b)("h4",{id:"corrected-defects-7"},"Corrected Defects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Changed default value for keyboard wedge input mode"),Object(c.b)("li",{parentName:"ul"},"Fixed mismatch in restrictions schema for firmware update")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-140"},"OEMConfig 1.4.0"),Object(c.b)("h4",{id:"enhancements-10"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/power-settings#wireless-charging"}),"Charging profile")," setting"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/system-settings#location"}),"Location mode")," setting"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/network-settings#nfc"}),"NFC configuration")," setting"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/power-settings#general"}),"Power management")," settings"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/key-settings#key-triggers"}),"Key trigger configuration")," settings")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-130"},"OEMConfig 1.3.0"),Object(c.b)("h4",{id:"enhancements-11"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Improved ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#notification"}),"Good read audio file")," selection (split into separate custom and default values)"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#msi"}),"MSI")," and ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#code-128"}),"Code 128")," aggressiveness settings"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#advanced-barcode-options"}),"Code 128 linear quiet zone")," setting"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options-multi-scan"}),"Scanning illumination type")," setting"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options-multi-scan"}),"Image capture profile")," setting"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options-multi-scan"}),"Custom image capture profile")," setting")),Object(c.b)("h4",{id:"corrected-defects-8"},"Corrected Defects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Removed value dependencies, allowing any setting to be configured regardless of another setting's state")),Object(c.b)("h4",{id:"other-notes"},"Other Notes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Removed top level bundle arrays from schema  ")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-120"},"OEMConfig 1.2.0"),Object(c.b)("h4",{id:"enhancements-12"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Unconfigured settings have their default value applied")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oemconfig-110"},"OEMConfig 1.1.0"),Object(c.b)("h4",{id:"compatibility"},"Compatibility"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Android 8 and above")),Object(c.b)("h4",{id:"enhancements-13"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#notification"}),"Notification")," settings"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#good-read"}),"Good Read")," settings"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#formatting"}),"Formatting")," settings"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#scanner-options-multi-scan"}),"Scanner Options & Multi Scan")," settings"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#wedge"}),"Wedge")," settings"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/scanner-settings#symbologies"}),"Symbology")," settings"),Object(c.b)("li",{parentName:"ul"},"Added ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/oemconfig/firmware"}),"Firmware Update")," settings")),Object(c.b)("h4",{id:"other-notes-1"},"Other Notes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Initial release in Play Store  ")))}s.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,O=d["".concat(o,".").concat(g)]||d[g]||m[g]||c;return n?i.a.createElement(O,r(r({ref:t},l),{},{components:n})):i.a.createElement(O,r({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=g;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var l=2;l<c;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);