"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3022],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,v=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(v,i(i({ref:t},p),{},{components:a})):n.createElement(v,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(87462),r=a(67294),l=a(72389),i=a(63725),o=a(86010),d="tabItem_LplD";function u(e){var t,a,l,u=e.lazy,p=e.block,s=e.defaultValue,c=e.values,m=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===s?s:null!=(t=null!=s?s:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),b=h.tabGroupChoices,x=h.setTabGroupChoices,y=(0,r.useState)(f),E=y[0],T=y[1],w=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=b[m];null!=R&&R!==E&&g.some((function(e){return e.value===R}))&&T(R)}var I=function(e){var t=e.currentTarget,a=w.indexOf(t),n=g[a].value;n!==E&&(C(t),T(n),null!=m&&x(m,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},g.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return w.push(e)},onKeyDown:A,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},83123:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(9877),o=a(58215),d=["components"],u={title:"Android Intents",id:"android-intents"},p=void 0,s={unversionedId:"dxu/android-intents",id:"dxu/android-intents",title:"Android Intents",description:"The DXU Android agent exposes several intents. These are useful for 3rd party applications, such as MDM clients to perform actions such as:",source:"@site/docs/dxu/android-intents.md",sourceDirName:"dxu",slug:"/dxu/android-intents",permalink:"/dxu/android-intents",tags:[],version:"current",frontMatter:{title:"Android Intents",id:"android-intents"},sidebar:"DXU",previous:{title:"Android HTTP API",permalink:"/dxu/android-http-api"},next:{title:"Windows CE Agent",permalink:"/dxu/ce"}},c={},m=[{value:"Apply DXU settings",id:"apply-dxu-settings",level:2},{value:"Broadcast Action",id:"broadcast-action",level:3},{value:"Broadcast Receiver",id:"broadcast-receiver",level:3},{value:"Extras",id:"extras",level:3},{value:"Examples",id:"examples",level:3},{value:"Firmware Update",id:"firmware-update",level:2},{value:"Broadcast Action",id:"broadcast-action-1",level:3},{value:"Broadcast Receiver",id:"broadcast-receiver-1",level:3},{value:"Extras",id:"extras-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Device Reset",id:"device-reset",level:2},{value:"Broadcast Action",id:"broadcast-action-2",level:3},{value:"Broadcast Receiver",id:"broadcast-receiver-2",level:3},{value:"Extras",id:"extras-2",level:3},{value:"Examples",id:"examples-2",level:3}],v={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The DXU Android agent exposes several intents. These are useful for 3rd party applications, such as MDM clients to perform actions such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"applying ",(0,l.kt)("a",{parentName:"li",href:"#apply-dxu-settings"},"DXU settings")),(0,l.kt)("li",{parentName:"ul"},"initiate ",(0,l.kt)("a",{parentName:"li",href:"#firmware-update"},"firmware updates")),(0,l.kt)("li",{parentName:"ul"},"perform ",(0,l.kt)("a",{parentName:"li",href:"#device-reset"},"device resets"))),(0,l.kt)("h2",{id:"apply-dxu-settings"},"Apply DXU settings"),(0,l.kt)("p",null,"Used to apply a DXU configuration from a .dxu file on the device."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You must specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"path"),". If both given, ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," is used. If neither given, nothing happens."))),(0,l.kt)("h3",{id:"broadcast-action"},"Broadcast Action"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"com.datalogic.dxu.action.APPLY_SETTINGS")),(0,l.kt)("h3",{id:"broadcast-receiver"},"Broadcast Receiver"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"com.datalogic.dxu.plugin.EnterpriseReceiver")),(0,l.kt)("h3",{id:"extras"},"Extras"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Extra"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"content URI provided by FileProvider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"path to file located on device")))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{defaultValue:"java-uri",values:[{label:"Java uri example",value:"java-uri"},{label:"Java path example",value:"java-path"},{label:"ADB path example",value:"adb-path"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java-uri",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'/* Assumes a Uri has been made using a FileProvider */\nIntent i = new Intent("com.datalogic.dxu.action.APPLY_SETTINGS")\n  .putExtra("uri", uri.toString())\n  .setClassName("com.datalogic.dxu", "com.datalogic.dxu.plugin.EnterpriseReceiver");\n\ngetApplicationContext().grantUriPermission(packageName, uri, Intent.FLAG_GRANT_READ_URI_PERMISSION);\n\ngetApplicationContext().sendBroadcast(i);\n'))),(0,l.kt)(o.Z,{value:"java-path",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Intent i = new Intent("com.datalogic.dxu.action.APPLY_SETTINGS")\n  .putExtra("path", "sdcard/Download/myfile.dxu")\n  .setClassName("com.datalogic.dxu", "com.datalogic.dxu.plugin.EnterpriseReceiver");\n\ngetApplicationContext().sendBroadcast(i, "com.datalogic.dxu.PLUGIN");\n'))),(0,l.kt)(o.Z,{value:"adb-path",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'adb shell am broadcast -a com.datalogic.dxu.action.APPLY_SETTINGS -n com.datalogic.dxu/.plugin.EnterpriseReceiver -e path "sdcard/Download/config.dxu"\n')))),(0,l.kt)("h2",{id:"firmware-update"},"Firmware Update"),(0,l.kt)("p",null,"Firmware update process is initiated, passing as extras the ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," of the OTA package (.zip file) to be loaded and some optional parameters."),(0,l.kt)("h3",{id:"broadcast-action-1"},"Broadcast Action"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"com.datalogic.dxu.action.FIRMWARE_UPDATE")),(0,l.kt)("h3",{id:"broadcast-receiver-1"},"Broadcast Receiver"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"com.datalogic.dxu.plugin.FirmwareReceiver")),(0,l.kt)("h3",{id:"extras-1"},"Extras"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Extra"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"path to file located on device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"force")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", update will be applied even if versions match")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"silent")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", popup window to confirm update will appear")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resetType")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies whether or not all the device's setting should be reset as part of the firmware update procedure. Valid values are:",(0,l.kt)("br",null)," \u2022 ",(0,l.kt)("inlineCode",{parentName:"td"},"none")," - no reset will be performed",(0,l.kt)("br",null)," \u2022 ",(0,l.kt)("inlineCode",{parentName:"td"},"enterprise")," - perform an enterprise reset ",(0,l.kt)("br",null)," \u2022 ",(0,l.kt)("inlineCode",{parentName:"td"},"factory")," - perform factory reset")))),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Intent i = new Intent("com.datalogic.dxu.action.FIRMWARE_UPDATE")\n  .putExtra("force", "false")\n  .putExtra("silent", "true")\n  .putExtra("resetType", "none")\n  .putExtra("path", "sdcard/OS.zip")\n  .setClassName("com.datalogic.dxu", "com.datalogic.dxu.plugin.FirmwareReceiver");\n\ngetApplicationContext().sendBroadcast(i);\n'))),(0,l.kt)(o.Z,{value:"shell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"adb shell am broadcast -a com.datalogic.dxu.action.FIRMWARE_UPDATE -n com.datalogic.dxu/.plugin.FirmwareReceiver -e force false -e silent true -e path sdcard/OS.zip\n")))),(0,l.kt)("h2",{id:"device-reset"},"Device Reset"),(0,l.kt)("p",null,"Used to either reboot the device or perform a full enterprise or factory reset."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This intent requires that the broadcaster have the ",(0,l.kt)("inlineCode",{parentName:"p"},"com.datalogic.dxu.PLUGIN")," permission."))),(0,l.kt)("h3",{id:"broadcast-action-2"},"Broadcast Action"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"com.datalogic.dxu.action.RESET")),(0,l.kt)("h3",{id:"broadcast-receiver-2"},"Broadcast Receiver"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"com.datalogic.dxu.plugin.ResetReceiver")),(0,l.kt)("h3",{id:"extras-2"},"Extras"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Extra"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RESET")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the type of reset to perform. Values map to ",(0,l.kt)("a",{parentName:"td",href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html"},"BootType")," values: ",(0,l.kt)("br",null)," \u2022 ",(0,l.kt)("inlineCode",{parentName:"td"},"RESET")," - reboot the device only ",(0,l.kt)("br",null)," \u2022 ",(0,l.kt)("inlineCode",{parentName:"td"},"ENTERPRISE_RESET")," - perform a full enterprise reset of the device \u26a0\ufe0f",(0,l.kt)("br",null)," \u2022 ",(0,l.kt)("inlineCode",{parentName:"td"},"FACTORY_RESET")," - perform a full factory reset of the device \u26a0\ufe0f")))),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// assumes we have <uses-permission android:name="com.datalogic.dxu.PLUGIN" /> defined in AndroidManifest.xml\n\nIntent i = new Intent("com.datalogic.dxu.action.RESET")\n    .putExtra("type", "RESET")\n    .setClassName("com.datalogic.dxu", "com.datalogic.dxu.plugin.ResetReceiver");\n\ngetApplicationContext().sendBroadcast(i, "com.datalogic.dxu.PLUGIN");\n')))}k.isMDXComponent=!0}}]);