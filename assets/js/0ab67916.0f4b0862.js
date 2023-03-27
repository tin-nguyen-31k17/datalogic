"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[1241],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return _}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=c(n),E=a,_=s["".concat(l,".").concat(E)]||s[E]||p[E]||o;return n?r.createElement(_,i(i({ref:t},d),{},{components:n})):r.createElement(_,i({ref:t},d))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=E;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return D}});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),u=n(16550),l=n(91980),c=n(67392),d=n(50012);function s(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function E(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function _(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function I(e){var t,n,r,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,c=e.groupId,s=p(e),I=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!E({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:s})})),m=I[0],A=I[1],N=_({queryString:l,groupId:c}),f=N[0],g=N[1],D=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,d.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),L=D[0],h=D[1],v=function(){var e=null!=f?f:L;return E({value:e,tabValues:s})?e:null}();return(0,a.useLayoutEffect)((function(){v&&A(v)}),[v]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!E({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);A(e),g(e),h(e)}),[g,h,s]),tabValues:s}}var m=n(72389),A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){var t=e.className,n=e.block,u=e.selectedValue,l=e.selectValue,c=e.tabValues,d=[],s=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==u&&(s(t),l(r))},E=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=d.indexOf(e.currentTarget)+1;n=null!=(r=d[a])?r:d[0];break;case"ArrowLeft":var o,i=d.indexOf(e.currentTarget)-1;n=null!=(o=d[i])?o:d[d.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return d.push(e)},onKeyDown:E,onClick:p},i,{className:(0,o.Z)("tabs__item",A.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function f(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function g(e){var t=I(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",A.tabList)},a.createElement(N,(0,r.Z)({},e,t)),a.createElement(f,(0,r.Z)({},e,t)))}function D(e){var t=(0,m.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},97200:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return E}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(74866),u=n(85162),l=["components"],c={title:"Datalogic Android SDK 1.27",tags:["datalogic-android-sdk"],author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},d=void 0,s={permalink:"/releases/2021/05/14/datalogic-android-sdk-v1.27",source:"@site/blog/2021-05-14-datalogic-android-sdk-v1.27.md",title:"Datalogic Android SDK 1.27",description:"Datalogic Android SDK 1.27 is now available. The SDK add-on version supports Android API levels up to 29 (Android 10).",date:"2021-05-14T00:00:00.000Z",formattedDate:"May 14, 2021",tags:[{label:"datalogic-android-sdk",permalink:"/releases/tags/datalogic-android-sdk"}],readingTime:2.57,hasTruncateMarker:!1,authors:[{name:"Datalogic Android SDK",url:"/android/overview",imageURL:"/img/homepage/home-android.png"}],frontMatter:{title:"Datalogic Android SDK 1.27",tags:["datalogic-android-sdk"],author:"Datalogic Android SDK",author_image_url:"/img/homepage/home-android.png",author_url:"/android/overview"},prevItem:{title:"Datalogic Android SDK 1.28",permalink:"/releases/2021/06/14/datalogic-android-sdk-v1.28"},nextItem:{title:"Scan2Deploy Studio 1.5.2",permalink:"/releases/2021/04/29/scan2deploy-studio-v1.5.2"}},p={authorsImageUrls:[void 0]},E=[{value:"Enhancements",id:"enhancements",level:2},{value:"Configuration Manager",id:"configuration-manager",level:3},{value:"Other Enhancements",id:"other-enhancements",level:3}],_={toc:E},I="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(I,(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Datalogic Android SDK 1.27 is now available. The ",(0,o.kt)("a",{parentName:"p",href:"/android/overview#sdk-add-on"},"SDK add-on")," version supports Android API levels up to 29 (Android 10)."),(0,o.kt)("p",null,"You can access the ",(0,o.kt)("a",{parentName:"p",href:"/android/overview"},"documentation here"),"."),(0,o.kt)("h2",{id:"enhancements"},"Enhancements"),(0,o.kt)("h3",{id:"configuration-manager"},"Configuration Manager"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/ConfigurationManager.html"},"ConfigurationManager")," class gives the developer the ability to browse and set the configuration properties of the device. For a list of all of the supported properties and groups offered by the ConfigurationManager, see the ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/configuration/PropertyID.html"},"PropertyID")," documentation."),(0,o.kt)("p",null,"A high level list of available properties is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"WIFI_GROUP - includes many advanced Wi-Fi settings available on the device including power save, logging, roaming, and scan interval")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DATE_AND_TIME_GROUP - date and time settings such as NTP server and time zone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"POWER_GROUP - device charging policy settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"USB_GROUP - allows for settings current and default USB function modes of the device."))),(0,o.kt)(i.Z,{defaultValue:"code",values:[{label:"Code snippet",value:"code"},{label:"Logcat",value:"output"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.datalogic.device.configuration.ConfigurationManager;\nimport com.datalogic.device.configuration.Property;\nimport com.datalogic.device.configuration.PropertyGroup;\n...\nConfigurationManager configurationManager = new ConfigurationManager(getApplicationContext());\nPropertyGroup rootGroup = configurationManager.getTreeRoot();\nprintGroup(rootGroup);\n...\nvoid printGroup(PropertyGroup pg) {\n\n  Log.d("SAMPLE", pg.getName());\n\n  for (Property p : pg.getProperties()) {\n    Log.d("SAMPLE", "  " + p.getName() + ": " + p.get());\n  }\n\n  for (PropertyGroup p : pg.getGroups()) {\n    printGroup(p);\n  }\n\n}\n'))),(0,o.kt)(u.Z,{value:"output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"D/SAMPLE: MIB_ROOT\nD/SAMPLE: WIFI_GROUP\nD/SAMPLE: WIFI_MODULE_SETTINGS_GROUP\nD/SAMPLE:   WIFI_802_DOT_11_MODE: WIFI_802_DOT_11_ALL_ENABLED\nD/SAMPLE:   WIFI_BAND_SELECTION: WIFI_BAND_BOTH_ENABLED\nD/SAMPLE:   WIFI_POWER_SAVE: WIFI_POWER_SAVE_ENABLED\nD/SAMPLE:   WIFI_VERBOSE_WIFI_MODULE_LOG: true\nD/SAMPLE: WIFI_CHANNELS_GROUP\nD/SAMPLE:   WIFI_COUNTRY_CODE: US\nD/SAMPLE: WIFI_CHANNELS_GROUP_2_4GHZ\nD/SAMPLE:   WIFI_CHANNEL_1: true\nD/SAMPLE:   WIFI_CHANNEL_2: true\nD/SAMPLE:   WIFI_CHANNEL_3: true\nD/SAMPLE:   WIFI_CHANNEL_4: true\nD/SAMPLE:   WIFI_CHANNEL_5: true\nD/SAMPLE:   WIFI_CHANNEL_6: true\nD/SAMPLE:   WIFI_CHANNEL_7: true\nD/SAMPLE:   WIFI_CHANNEL_8: true\nD/SAMPLE:   WIFI_CHANNEL_9: true\nD/SAMPLE:   WIFI_CHANNEL_10: true\nD/SAMPLE:   WIFI_CHANNEL_11: true\nD/SAMPLE:   WIFI_CHANNEL_12: null\nD/SAMPLE:   WIFI_CHANNEL_13: null\nD/SAMPLE: WIFI_CHANNELS_GROUP_5GHZ\nD/SAMPLE:   WIFI_CHANNEL_36: true\nD/SAMPLE:   WIFI_CHANNEL_40: true\nD/SAMPLE:   WIFI_CHANNEL_44: true\nD/SAMPLE:   WIFI_CHANNEL_48: true\nD/SAMPLE:   WIFI_CHANNEL_52: true\nD/SAMPLE:   WIFI_CHANNEL_56: true\nD/SAMPLE:   WIFI_CHANNEL_60: true\nD/SAMPLE:   WIFI_CHANNEL_64: true\nD/SAMPLE:   WIFI_CHANNEL_100: true\nD/SAMPLE:   WIFI_CHANNEL_104: true\nD/SAMPLE:   WIFI_CHANNEL_108: true\nD/SAMPLE:   WIFI_CHANNEL_112: true\nD/SAMPLE:   WIFI_CHANNEL_116: true\nD/SAMPLE:   WIFI_CHANNEL_120: true\nD/SAMPLE:   WIFI_CHANNEL_124: true\nD/SAMPLE:   WIFI_CHANNEL_128: true\nD/SAMPLE:   WIFI_CHANNEL_132: true\nD/SAMPLE:   WIFI_CHANNEL_136: true\nD/SAMPLE:   WIFI_CHANNEL_140: true\nD/SAMPLE:   WIFI_CHANNEL_144: true\nD/SAMPLE:   WIFI_CHANNEL_149: true\nD/SAMPLE:   WIFI_CHANNEL_153: true\nD/SAMPLE:   WIFI_CHANNEL_157: true\nD/SAMPLE:   WIFI_CHANNEL_161: true\nD/SAMPLE:   WIFI_CHANNEL_165: true\nD/SAMPLE:   WIFI_CHANNEL_169: null\nD/SAMPLE:   WIFI_CHANNEL_173: null\nD/SAMPLE: WIFI_ROAMING_SETTINGS_GROUP\nD/SAMPLE:   WIFI_ROAMING_PROFILE: CUSTOM\nD/SAMPLE:   WIFI_ROAMING_RSSI_THRESHOLD: 76\nD/SAMPLE:   WIFI_ROAMING_RSSI_DIFFERENCE: 5\nD/SAMPLE: WIFI_SCAN_SETTINGS_GROUP\nD/SAMPLE: WIFI_SCAN_TIMINGS_GROUP\nD/SAMPLE:   WIFI_SCAN_INTERVAL: 5\nD/SAMPLE:   WIFI_SCAN_INTERVAL_MAX: 10\nD/SAMPLE:   WIFI_CONNECTED_SCAN_INTERVAL: 20\nD/SAMPLE:   WIFI_CONNECTED_SCAN_INTERVAL_MAX: 160\nD/SAMPLE: DATE_AND_TIME_GROUP\nD/SAMPLE:   DATE_AND_TIME_AUTO_TIME: true\nD/SAMPLE:   DATE_AND_TIME_AUTO_TIME_ZONE: true\nD/SAMPLE:   DATE_AND_TIME_TIMEZONE_ID: America/New_York\nD/SAMPLE:   DATE_AND_TIME_TIME_24H_FORMAT: false\nD/SAMPLE:   DATE_AND_TIME_NTP_SERVER: \nD/SAMPLE:   DATE_AND_TIME_NTP_SERVER_2: \nD/SAMPLE:   DATE_AND_TIME_NTP_TIMEOUT: 10000\nD/SAMPLE: POWER_GROUP\nD/SAMPLE: POWER_OFF_CHARGING_MODE_GROUP\nD/SAMPLE:   POWER_OFF_CHARGING_MODE_POLICY: ALWAYS_POWER_ON_ON_THRESHOLD\nD/SAMPLE:   POWER_OFF_CHARGING_MODE_THRESHOLD: 10\nD/SAMPLE: USB_GROUP\nD/SAMPLE:   USB_DEFAULT_FUNCTION: NONE\nD/SAMPLE:   USB_CURRENT_FUNCTION: NONE \n")))),(0,o.kt)("h3",{id:"other-enhancements"},"Other Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added notes on how to avoid possible deadlock issues when calling some Package Installer APIs on the UI thread. See ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/app/PackageInstaller.html"},"PackageInstaller")," for more details.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added methods to ",(0,o.kt)("inlineCode",{parentName:"p"},"DLCradleManager"),": ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/cradle/DLCradleManager.html#rebootCradle()"},"rebootCradle()")," to reboot the cradle and ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/cradle/DLCradleManager.html#getType()"},"getType()")," to retrieve the cradle type.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Scan mode to support presentation or continuous mode - see ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScanMode.html"},"ScanMode"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added ",(0,o.kt)("inlineCode",{parentName:"p"},"BAROQUE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"VIPER")," beep modes - see ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ToneNotificationMode.html"},"ToneNotificationMode"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Updated documentation to clarify minimum keyboard multitap delay. See ",(0,o.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/input/AdvancedKeyboard.html"},"AdvancedKeyboard")," class for more details."))))}m.isMDXComponent=!0}}]);