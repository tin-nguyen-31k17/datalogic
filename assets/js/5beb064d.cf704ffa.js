"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[280],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(g,i(i({ref:a},d),{},{components:t})):n.createElement(g,i({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(87462),r=t(67294),o=t(86010),i=t(12466),l=t(16550),c=t(91980),s=t(67392),d=t(50012);function u(e){return function(e){var a,t;return null!=(a=null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=a?a:u(t);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:t});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){var a;let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(a=n.find((e=>e.default)))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:o}))),[c,s]=g({queryString:t,groupId:n}),[u,h]=function(e){let{groupId:a}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(a),[n,o]=(0,d.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),v=(()=>{const e=null!=c?c:u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var v=t(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:l,selectValue:c,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const a=e.currentTarget,t=d.indexOf(a),n=s[t].value;n!==l&&(u(a),c(n))},m=e=>{var a;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var n;const a=d.indexOf(e.currentTarget)+1;t=null!=(n=d[a])?n:d[0];break}case"ArrowLeft":{var r;const a=d.indexOf(e.currentTarget)-1;t=null!=(r=d[a])?r:d[d.length-1];break}}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},s.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===a})}),null!=t?t:a)})))}function b(e){let{lazy:a,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function T(e){const a=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(f,(0,n.Z)({},e,a)),r.createElement(b,(0,n.Z)({},e,a)))}function y(e){const a=(0,v.Z)();return r.createElement(T,(0,n.Z)({key:String(a)},e))}},45835:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=t(87462),r=(t(67294),t(3905)),o=t(74866),i=t(85162);const l={id:"faq",title:"Frequently Asked Questions"},c=void 0,s={unversionedId:"android/faq",id:"android/faq",title:"Frequently Asked Questions",description:"Why am I not receiving intents broadcasted by IntentWedge?",source:"@site/docs/android/faq.md",sourceDirName:"android",slug:"/android/faq",permalink:"/android/faq",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"AndroidStudioSDK",previous:{title:"Overview",permalink:"/android/overview"},next:{title:"Sample Apps",permalink:"/android/samples"}},d={},u=[{value:"Why am I not receiving intents broadcasted by IntentWedge?",id:"why-am-i-not-receiving-intents-broadcasted-by-intentwedge",level:2},{value:"Is the Datalogic SDK compatible with ProGuard obfuscation?",id:"is-the-datalogic-sdk-compatible-with-proguard-obfuscation",level:2},{value:"How can I receive barcode data in my app?",id:"how-can-i-receive-barcode-data-in-my-app",level:2},{value:"How can I configure Decoder properties?",id:"how-can-i-configure-decoder-properties",level:2},{value:"How can I retrieve device information and control other device features?",id:"how-can-i-retrieve-device-information-and-control-other-device-features",level:2},{value:"Info",id:"info",level:3},{value:"Power",id:"power",level:3},{value:"Location",id:"location",level:3},{value:"NFC",id:"nfc",level:3},{value:"LEDs",id:"leds",level:3},{value:"Touch",id:"touch",level:3},{value:"Sleep and Wakeup",id:"sleep-and-wakeup",level:3},{value:"Reset",id:"reset",level:3}],p={toc:u},m="wrapper";function g(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-am-i-not-receiving-intents-broadcasted-by-intentwedge"},"Why am I not receiving intents broadcasted by IntentWedge?"),(0,r.kt)("p",null,"You are likely using an implicit broadcast. Google introduced several limitations regarding implicit broadcasts in Android 8 in order to improve dispatching performance. According to the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/about/versions/oreo/background#broadcasts"},"Android documentation"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Android 8.0 (API level 26) makes these limitations more stringent."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Apps that target Android 8.0 or higher can no longer register broadcast receivers for implicit broadcasts in their manifest. An implicit broadcast is a broadcast that does not target that app specifically. For example, ACTION_PACKAGE_REPLACED is an implicit broadcast, since it is sent to all registered listeners, letting them know that some package on the device was replaced. However, ACTION_MY_PACKAGE_REPLACED is not an implicit broadcast, since it is sent only to the app whose package was replaced, no matter how many other apps have registered listeners for that broadcast."),(0,r.kt)("li",{parentName:"ul"},"Apps can continue to register for explicit broadcasts in their manifests."),(0,r.kt)("li",{parentName:"ul"},"Apps can use Context.registerReceiver() at runtime to register a receiver for any broadcast, whether implicit or explicit."),(0,r.kt)("li",{parentName:"ul"},"Broadcasts that require a signature permission are exempted from this restriction, since these broadcasts are only sent to apps that are signed with the same certificate, not to all the apps on the device."))),(0,r.kt)("p",null,"So, if your app registers itself to receive the intent used by IntentWedge in the Manifest, this approach works properly until Android 7. But, if the app follows the new Google guidelines regarding broadcast limitations introduced in Android 8, that is to register the App to receive intents at runtime with the Context.registerReceiver() call, this feature will work as expected for all Android versions."),(0,r.kt)("h2",{id:"is-the-datalogic-sdk-compatible-with-proguard-obfuscation"},"Is the Datalogic SDK compatible with ProGuard obfuscation?"),(0,r.kt)("p",null,"Yes. However, in order to ensure your app builds correctly while using ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/shrink-code"},"ProGuard obfuscation"),", you will need to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/shrink-code#keep-code"},"edit your ProGuard rules file"),". Add the following rules to ensure R8 includes all the code it needs to correctly use the Datalogic SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-keep class com.datalogic.cradle.** { *; }\n-keep class com.datalogic.decode.** { *; }\n-keep class com.datalogic.device.** { *; }\n-keep class com.datalogic.extension.** { *; }\n-keep class com.datalogic.softspot.** { *; }\n")),(0,r.kt)("h2",{id:"how-can-i-receive-barcode-data-in-my-app"},"How can I receive barcode data in my app?"),(0,r.kt)("p",null,"Register a ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/ReadListener.html"},"ReadListener")," to receive read events on successful barcode reads:"),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"override fun onResume() {\n  super.onResume()\n  try {\n    if (decoder == null) {\n      decoder = BarcodeManager()\n      listener = ReadListener { decodeResult ->\n        mBarcodeText.text = decodeResult.text\n      }\n    }\n    decoder!!.addReadListener(listener)\n\n  } catch (e : DecodeException) {\n      e.printStackTrace()\n  }\n}\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void onResume() {\n  super.onResume();\n  try {\n    if (decoder == null) {\n      decoder = new BarcodeManager();\n      listener = new ReadListener() {\n        @Override\n        public void onRead(DecodeResult decodeResult) {\n          mBarcodeText.setText(decodeResult.getText());\n        }\n      };\n      decoder.addReadListener(listener);\n    }\n  } catch (DecodeException e) {\n      e.printStackTrace();\n  }\n}\n")))),(0,r.kt)("p",null,"Unregister the ReadListener in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Activity.onPause()"),":"),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"override fun onPause() {\n  super.onPause()\n\n  if (decoder != null) {\n    try {\n      decoder!!.removeReadListener(listener)\n      decoder = null\n    } catch (e: Exception) {\n      e.printStackTrace()\n    }\n  }\n}\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void onPause() {\n  super.onPause();\n  if (decoder != null) {\n    try {\n      decoder.removeReadListener(listener);\n      decoder = null;\n    } catch (Exception e) {\n      e.printStackTrace();\n    }\n  }\n}\n")))),(0,r.kt)("p",null,"The actual barcode scanning is started via any physical scan trigger on the device. Though to start scanning when a button on the application is pressed,you need to call ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/BarcodeManager.html#startDecode(int)"},"BarcodeManager.startDecode()"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datalogic/android-samples-astudio/tree/master/Kotlin/DecodeListener"},"Kotlin")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datalogic/android-samples-astudio/tree/master/Java/DecodeListener"},"Java")," DecodeListener examples to see this in action.")),(0,r.kt)("h2",{id:"how-can-i-configure-decoder-properties"},"How can I configure Decoder properties?"),(0,r.kt)("p",null,"To configure the decoder properties, you need to instantiate ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/BarcodeManager.html"},"BarcodeManager")," and get a ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScannerProperties.html"},"ScannerProperties")," reference."),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var manager: BarcodeManager? = null\nvar configuration: ScannerProperties? = null\n\ntry {\n    manager = BarcodeManager()\n} catch (e: DecodeException) {\n    e.printStackTrace()\n}\n\nconfiguration = ScannerProperties.edit(manager)\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BarcodeManager manager = null;\nScannerProperties configuration = null;\n\ntry {\n    manager = new BarcodeManager();\n} catch (DecodeException e) {\n    e.printStackTrace();\n}\nconfiguration = ScannerProperties.edit(manager);\n")))),(0,r.kt)("p",null,"Properties are organized hierarchically. Each property has the method ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," that requires a different argument depending on the property type (i.e.: int, boolean, String, etc...):"),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"configuration = ScannerProperties.edit(manager)\n\nconfiguration!!.code39.enable.set(true);\nconfiguration!!.code39.enableChecksum.set(false);\nconfiguration!!.code39.fullAscii.set(true);\nconfiguration!!.code39.Length1.set(20);\nconfiguration!!.code39.userID.set('x');\n\nif (configuration!!.qrCode.isSupported()) {\n    configuration!!.qrCode.enable.set(false);\n}\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"configuration.code39.enable.set(true);\nconfiguration.code39.enableChecksum.set(false);\nconfiguration.code39.fullAscii.set(true);\nconfiguration.code39.Length1.set(20);\nconfiguration.code39.userID.set('x');\n\nif (configuration.qrCode.isSupported()) {\n    configuration.qrCode.enable.set(false);\n}\n")))),(0,r.kt)("p",null,"For the configuration to be actually applied, you must call the method ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScannerProperties.html#store"},"ScannerProperties.store"),"."),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"val errorCode = configuration!!.store(manager, true)\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"try {\n    configuration.store(manager, true);\n} catch (ConfigException e) {\n    e.printStackTrace();\n    return;\n}\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datalogic/android-samples-astudio/tree/master/Kotlin/DecodeConfigSampleAPI"},"Kotlin")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datalogic/android-samples-astudio/tree/master/Java/DecodeConfigSampleAPI"},"Java")," DecodeConfigSampleAPI examples to see this in action.")),(0,r.kt)("h2",{id:"how-can-i-retrieve-device-information-and-control-other-device-features"},"How can I retrieve device information and control other device features?"),(0,r.kt)("p",null,"The Datalogic Android SDK provides APIs for many useful operations that can't be done using the standard AOSP SDK."),(0,r.kt)("h3",{id:"info"},"Info"),(0,r.kt)("p",null,"Datalogic SDK provides advanced information about the device in the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html"},"SYSTEM")," class, which exposes Wi-Fi type, keyboard type and others as static members. Example usage:"),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"com.datalogic.device.info.SYSTEM.SDK_VERSION_INT\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"com.datalogic.device.info.SYSTEM.SDK_VERSION_INT;\n")))),(0,r.kt)("h3",{id:"power"},"Power"),(0,r.kt)("p",null,"To get information about the battery, Android broadcasts the ",(0,r.kt)("inlineCode",{parentName:"p"},"Intent")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/content/Intent.html#ACTION_BATTERY_CHANGED"},"Intent.ACTION_BATTERY_CHANGED()")," which carries information in its extra properties. The intent is fired every time the status of the battery changes. Once  you register a receiver, notice that this particular behavior happens because the battery intent is a STICKY one: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/content/Context.html#sendStickyBroadcast"},"Content.sendStickyBroadcast()"),"."),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var currentBatteryStatus: Intent? =\n  registerReceiver(null, IntentFilter(\n        Intent.ACTION_BATTERY_CHANGED)\n  )\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Intent currentBatteryStatus =\n  registerReceiver(null, new IntentFilter(\n    Intent.ACTION_BATTERY_CHANGED)\n  );\n")))),(0,r.kt)("h3",{id:"location"},"Location"),(0,r.kt)("p",null,"The standard Android SDK does not allow toggling of the Location services (GPS, network, etc...) thus an application must ask the user to do it manually. Datalogic SDK overcomes this limitation by providing the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/location/LocationManager.html"},"LocationManager")," class, which there is an example of below:"),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"try {\n  val loc: LocationManager? = LocationManager()\n  loc!!.setLocationMode(if (enable) LocationMode.SENSORS_AND_NETWORK else LocationMode.OFF)\n} catch (e1: DeviceException) {\n  e.printStackTrace()\n}\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"com.datalogic.device.location.LocationManager loc = null;\ntry {\n  loc = new com.datalogic.device.location.LocationManager();\n  loc.setLocationMode(enable ? LocationMode.SENSORS_AND_NETWORK : LocationMode.OFF);\n} catch (DeviceException e) {\n  e.printStackTrace();\n}\n")))),(0,r.kt)("h3",{id:"nfc"},"NFC"),(0,r.kt)("p",null,"Standard Android SDK doesn't allow to turn on or off the NFC adapter, thus an application must ask to the user to manually do it. Datalogic SDK overcomes this limit providing the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/nfc/NfcManager.html"},"NfcManager")," class."),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'val error = com.datalogic.device.nfc.NfcManager().enableNfcAdapter(enable)\nif (error != DeviceException.SUCCESS) {\n  Log.e(javaClass.name, "Error while setting NFC", ErrorManager.getLastError())\n}\n'))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'int error = new com.datalogic.device.nfc.NfcManager().enableNfcAdapter(enable);\nif(error != DeviceException.SUCCESS) {\n  Log.e(getClass().getName(), "Error while setting NFC", ErrorManager.getLastError());\n}\n')))),(0,r.kt)("h3",{id:"leds"},"LEDs"),(0,r.kt)("p",null,"Datalogic SDK allows one to control LEDs on the device. The standard Android APIs for controlling the notification LED via the notifications system still works, though you are limited to 1 LED. Datalogic devices may have more LEDs, and it is easier to control them using the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/notification/LedManager.html"},"LedManager")," than the standard API."),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LedManager led = LedManager();\nled.blinkLed(Led.LED_GREEN_SPOT, 1, 500, 500)\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LedManager led = new LedManager();\nled.blinkLed(Led.LED_GREEN_SPOT, 1, 500, 500);\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please notice that not all LEDs on a device can be freely controlled by a user application, as some are reserved to the system.")),(0,r.kt)("h3",{id:"touch"},"Touch"),(0,r.kt)("p",null," The ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/input/TouchManager.html"},"TouchManager")," class can be used to lock the touchscreen."),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"val tm = TouchManager()\ntm.lockInput(true)\nThread.sleep(2000)\ntm.lockInput(false)\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TouchManager tm = new TouchManager();\ntm.lockInput(true);\nThread.sleep(2000);\ntm.lockInput(false);\n")))),(0,r.kt)("h3",{id:"sleep-and-wakeup"},"Sleep and Wakeup"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/PowerManager.html"},"PowerManager")," class allows to configure the screen off timeout and the wakeup sources of the device."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/SuspendTimeout.html"},"SuspendTimeout")," can be set with a condition: the device running on battery or the device plugged to a power source, the function ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/PowerManager.html#setSuspendTimeout(com.datalogic.device.power.SuspendTimeout,%20boolean)"},"PowerManager.setSuspendTimeout()")," has a boolean argument for it."),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"val pm = PowerManager()\n\npm.setSuspendTimeout(SuspendTimeout.MINUTES_5, false) // battery\npm.setSuspendTimeout(SuspendTimeout.NEVER, true) // ext power\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"PowerManager pm = new PowerManager();\n\npm.setSuspendTimeout(SuspendTimeout.MINUTES_5, false); // battery\npm.setSuspendTimeout(SuspendTimeout.NEVER, true); // ext power\n")))),(0,r.kt)("p",null,"Please notice that not all the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/WakeupSource.html"},"WakeupSource"),"s\navailable in the SDK are supported by a device, thus is better to check for the support before enabling/disabling them."),(0,r.kt)(o.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (pm.isWakeupSupported(WakeupSource.TRIG_LEFT) &&\n    !pm.isWakeupActive(WakeupSource.TRIG_LEFT)) {\n  pm.activateWakeup(WakeupSource.TRIG_LEFT)\n}\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (pm.isWakeupSupported(WakeupSource.TRIG_LEFT) &&\n      !pm.isWakeupActive(WakeupSource.TRIG_LEFT)) {\n  pm.activateWakeup(WakeupSource.TRIG_LEFT);\n}\n")))),(0,r.kt)("h3",{id:"reset"},"Reset"),(0,r.kt)("p",null,"With the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/PowerManager.html"},"PowerManager")," class it is possible to perform several type of resets and reboot of the device. ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html#ENTERPRISE_RESET"},"BootType.ENTERPRISE_RESET")," and ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html#FACTORY_RESET"},"BootType.FACTORY_RESET")," reset types clear the configuration of the device setting it to a custom one or to the out-of-the-box one respectively, while ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html#RESET"},"BootType.RESET")," is a software reboot of the device."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datalogic/android-samples-astudio/tree/master/Kotlin/DeviceSampleAPI"},"Kotlin")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datalogic/android-samples-astudio/tree/master/Java/DeviceSampleAPI"},"Java")," DeviceSampleAPI examples to see this in action.")))}g.isMDXComponent=!0}}]);