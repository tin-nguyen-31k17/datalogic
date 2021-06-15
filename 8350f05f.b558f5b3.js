(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(239)),i=n(241),c=n(242),l={title:"Datalogic Android SDK 1.27",tags:["datalogic-android-sdk"],author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},u={permalink:"/releases/2021/05/14/datalogic-android-sdk-v1.27",source:"@site/blog/2021-05-14-datalogic-android-sdk-v1.27.md",description:"Datalogic Android SDK 1.27 is now available. The SDK add-on version supports Android API levels up to 29 (Android 10).",date:"2021-05-14T00:00:00.000Z",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],title:"Datalogic Android SDK 1.27",readingTime:2.57,truncated:!1,prevItem:{title:"Datalogic Android SDK 1.28",permalink:"/releases/2021/06/14/datalogic-android-sdk-v1.28"},nextItem:{title:"Scan2Deploy Studio 1.5.2",permalink:"/releases/2021/04/29/scan2deploy-studio-v1.5.2"}},d=[{value:"Enhancements",id:"enhancements",children:[{value:"Configuration Manager",id:"configuration-manager",children:[]},{value:"Other Enhancements",id:"other-enhancements",children:[]}]}],p={rightToc:d};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Datalogic Android SDK 1.27 is now available. The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/android/overview#sdk-add-on"}),"SDK add-on")," version supports Android API levels up to 29 (Android 10)."),Object(o.b)("p",null,"You can access the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/android/overview"}),"documentation here"),"."),Object(o.b)("h2",{id:"enhancements"},"Enhancements"),Object(o.b)("h3",{id:"configuration-manager"},"Configuration Manager"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/ConfigurationManager.html"}),"ConfigurationManager")," class gives the developer the ability to browse and set the configuration properties of the device. For a list of all of the supported properties and groups offered by the ConfigurationManager, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html"}),"PropertyID")," documentation."),Object(o.b)("p",null,"A high level list of available properties is as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"WIFI_GROUP - includes many advanced Wi-Fi settings available on the device including power save, logging, roaming, and scan interval")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"DATE_AND_TIME_GROUP - date and time settings such as NTP server and time zone")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"POWER_GROUP - device charging policy settings")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"USB_GROUP - allows for settings current and default USB function modes of the device."))),Object(o.b)(i.a,{defaultValue:"code",values:[{label:"Code snippet",value:"code"},{label:"Logcat",value:"output"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"code",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import com.datalogic.device.configuration.ConfigurationManager;\nimport com.datalogic.device.configuration.Property;\nimport com.datalogic.device.configuration.PropertyGroup;\n...\nConfigurationManager configurationManager = new ConfigurationManager(getApplicationContext());\nPropertyGroup rootGroup = configurationManager.getTreeRoot();\nprintGroup(rootGroup);\n...\nvoid printGroup(PropertyGroup pg) {\n\n  Log.d("SAMPLE", pg.getName());\n\n  for (Property p : pg.getProperties()) {\n    Log.d("SAMPLE", "  " + p.getName() + ": " + p.get());\n  }\n\n  for (PropertyGroup p : pg.getGroups()) {\n    printGroup(p);\n  }\n\n}\n'))),Object(o.b)(c.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"D/SAMPLE: MIB_ROOT\nD/SAMPLE: WIFI_GROUP\nD/SAMPLE: WIFI_MODULE_SETTINGS_GROUP\nD/SAMPLE:   WIFI_802_DOT_11_MODE: WIFI_802_DOT_11_ALL_ENABLED\nD/SAMPLE:   WIFI_BAND_SELECTION: WIFI_BAND_BOTH_ENABLED\nD/SAMPLE:   WIFI_POWER_SAVE: WIFI_POWER_SAVE_ENABLED\nD/SAMPLE:   WIFI_VERBOSE_WIFI_MODULE_LOG: true\nD/SAMPLE: WIFI_CHANNELS_GROUP\nD/SAMPLE:   WIFI_COUNTRY_CODE: US\nD/SAMPLE: WIFI_CHANNELS_GROUP_2_4GHZ\nD/SAMPLE:   WIFI_CHANNEL_1: true\nD/SAMPLE:   WIFI_CHANNEL_2: true\nD/SAMPLE:   WIFI_CHANNEL_3: true\nD/SAMPLE:   WIFI_CHANNEL_4: true\nD/SAMPLE:   WIFI_CHANNEL_5: true\nD/SAMPLE:   WIFI_CHANNEL_6: true\nD/SAMPLE:   WIFI_CHANNEL_7: true\nD/SAMPLE:   WIFI_CHANNEL_8: true\nD/SAMPLE:   WIFI_CHANNEL_9: true\nD/SAMPLE:   WIFI_CHANNEL_10: true\nD/SAMPLE:   WIFI_CHANNEL_11: true\nD/SAMPLE:   WIFI_CHANNEL_12: null\nD/SAMPLE:   WIFI_CHANNEL_13: null\nD/SAMPLE: WIFI_CHANNELS_GROUP_5GHZ\nD/SAMPLE:   WIFI_CHANNEL_36: true\nD/SAMPLE:   WIFI_CHANNEL_40: true\nD/SAMPLE:   WIFI_CHANNEL_44: true\nD/SAMPLE:   WIFI_CHANNEL_48: true\nD/SAMPLE:   WIFI_CHANNEL_52: true\nD/SAMPLE:   WIFI_CHANNEL_56: true\nD/SAMPLE:   WIFI_CHANNEL_60: true\nD/SAMPLE:   WIFI_CHANNEL_64: true\nD/SAMPLE:   WIFI_CHANNEL_100: true\nD/SAMPLE:   WIFI_CHANNEL_104: true\nD/SAMPLE:   WIFI_CHANNEL_108: true\nD/SAMPLE:   WIFI_CHANNEL_112: true\nD/SAMPLE:   WIFI_CHANNEL_116: true\nD/SAMPLE:   WIFI_CHANNEL_120: true\nD/SAMPLE:   WIFI_CHANNEL_124: true\nD/SAMPLE:   WIFI_CHANNEL_128: true\nD/SAMPLE:   WIFI_CHANNEL_132: true\nD/SAMPLE:   WIFI_CHANNEL_136: true\nD/SAMPLE:   WIFI_CHANNEL_140: true\nD/SAMPLE:   WIFI_CHANNEL_144: true\nD/SAMPLE:   WIFI_CHANNEL_149: true\nD/SAMPLE:   WIFI_CHANNEL_153: true\nD/SAMPLE:   WIFI_CHANNEL_157: true\nD/SAMPLE:   WIFI_CHANNEL_161: true\nD/SAMPLE:   WIFI_CHANNEL_165: true\nD/SAMPLE:   WIFI_CHANNEL_169: null\nD/SAMPLE:   WIFI_CHANNEL_173: null\nD/SAMPLE: WIFI_ROAMING_SETTINGS_GROUP\nD/SAMPLE:   WIFI_ROAMING_PROFILE: CUSTOM\nD/SAMPLE:   WIFI_ROAMING_RSSI_THRESHOLD: 76\nD/SAMPLE:   WIFI_ROAMING_RSSI_DIFFERENCE: 5\nD/SAMPLE: WIFI_SCAN_SETTINGS_GROUP\nD/SAMPLE: WIFI_SCAN_TIMINGS_GROUP\nD/SAMPLE:   WIFI_SCAN_INTERVAL: 5\nD/SAMPLE:   WIFI_SCAN_INTERVAL_MAX: 10\nD/SAMPLE:   WIFI_CONNECTED_SCAN_INTERVAL: 20\nD/SAMPLE:   WIFI_CONNECTED_SCAN_INTERVAL_MAX: 160\nD/SAMPLE: DATE_AND_TIME_GROUP\nD/SAMPLE:   DATE_AND_TIME_AUTO_TIME: true\nD/SAMPLE:   DATE_AND_TIME_AUTO_TIME_ZONE: true\nD/SAMPLE:   DATE_AND_TIME_TIMEZONE_ID: America/New_York\nD/SAMPLE:   DATE_AND_TIME_TIME_24H_FORMAT: false\nD/SAMPLE:   DATE_AND_TIME_NTP_SERVER: \nD/SAMPLE:   DATE_AND_TIME_NTP_SERVER_2: \nD/SAMPLE:   DATE_AND_TIME_NTP_TIMEOUT: 10000\nD/SAMPLE: POWER_GROUP\nD/SAMPLE: POWER_OFF_CHARGING_MODE_GROUP\nD/SAMPLE:   POWER_OFF_CHARGING_MODE_POLICY: ALWAYS_POWER_ON_ON_THRESHOLD\nD/SAMPLE:   POWER_OFF_CHARGING_MODE_THRESHOLD: 10\nD/SAMPLE: USB_GROUP\nD/SAMPLE:   USB_DEFAULT_FUNCTION: NONE\nD/SAMPLE:   USB_CURRENT_FUNCTION: NONE \n")))),Object(o.b)("h3",{id:"other-enhancements"},"Other Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added notes on how to avoid possible deadlock issues when calling some Package Installer APIs on the UI thread. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/PackageInstaller.html"}),"PackageInstaller")," for more details.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added methods to ",Object(o.b)("inlineCode",{parentName:"p"},"DLCradleManager"),": ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/cradle/DLCradleManager.html#rebootCradle()"}),"rebootCradle()")," to reboot the cradle and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/cradle/DLCradleManager.html#getType()"}),"getType()")," to retrieve the cradle type.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Scan mode to support presentation or continuous mode - see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScanMode.html"}),"ScanMode"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Added ",Object(o.b)("inlineCode",{parentName:"p"},"BAROQUE")," and ",Object(o.b)("inlineCode",{parentName:"p"},"VIPER")," beep modes - see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ToneNotificationMode.html"}),"ToneNotificationMode"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Updated documentation to clarify minimum keyboard multitap delay. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/input/AdvancedKeyboard.html"}),"AdvancedKeyboard")," class for more details."))))}s.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return _}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},E=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),E=a,_=p["".concat(i,".").concat(E)]||p[E]||s[E]||o;return n?r.a.createElement(_,c(c({ref:t},u),{},{components:n})):r.a.createElement(_,c({ref:t},u))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=E;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},240:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},241:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(244),i=n(240),c=n(52),l=n.n(c),u=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,p=e.defaultValue,s=e.values,E=e.groupId,_=e.className,A=Object(o.a)(),b=A.tabGroupChoices,N=A.setTabGroupChoices,I=Object(a.useState)(p),O=I[0],m=I[1];if(null!=E){var f=b[E];null!=f&&f!==O&&s.some((function(e){return e.value===f}))&&m(f)}var g=function(e){m(e),null!=E&&N(E,e)},L=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},_)},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return L.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(L,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(a.cloneElement)(c.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},242:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},244:function(e,t,n){"use strict";var a=n(0),r=n(245);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},245:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r}}]);