"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[2e3],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(a),m=r,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),r=a(67294),l=a(72389),i=a(63725),o=a(86010),p="tabItem_LplD";function c(e){var t,a,l,c=e.lazy,u=e.block,d=e.defaultValue,s=e.values,m=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=s?s:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),N=y.tabGroupChoices,b=y.setTabGroupChoices,w=(0,r.useState)(v),S=w[0],O=w[1],D=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=N[m];null!=A&&A!==S&&k.some((function(e){return e.value===A}))&&O(A)}var E=function(e){var t=e.currentTarget,a=D.indexOf(t),n=k[a].value;n!==S&&(T(t),O(n),null!=m&&b(m,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=D.indexOf(e.currentTarget)+1;a=D[n]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;a=D[r]||D[D.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return D.push(e)},onKeyDown:x,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function u(e){var t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},46720:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(9877),o=a(58215),p=["components"],c={id:"action-selection-page",title:"Action Selection Page",sidebar_label:"Action Selection"},u=void 0,d={unversionedId:"scan2deploy/action-selection-page",id:"scan2deploy/action-selection-page",title:"Action Selection Page",description:"This page allows to user to select the type of device they want to configure and add or remove various actions to the current profile, which fall under 2 categories, Deployment Actions and Firmware Actions. These categories are represented by two different radio boxes. By default, the Deployment Actions radio box is selected,  with the Wi-Fi Setup action already selected.",source:"@site/docs/scan2deploy/action-selection-page.md",sourceDirName:"scan2deploy",slug:"/scan2deploy/action-selection-page",permalink:"/scan2deploy/action-selection-page",tags:[],version:"current",frontMatter:{id:"action-selection-page",title:"Action Selection Page",sidebar_label:"Action Selection"},sidebar:"Scan2DeployStudio",previous:{title:"Welcome",permalink:"/scan2deploy/welcome-page"},next:{title:"Wi-Fi Setup",permalink:"/scan2deploy/wifi-page"}},s={},m=[{value:"Device Selection",id:"device-selection",level:2},{value:"Deployment Actions",id:"deployment-actions",level:2},{value:"Firmware Actions",id:"firmware-actions",level:2}],f={toc:m};function g(e){var t=e.components,c=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page allows to user to select the type of device they want to configure and add or remove various actions to the current profile, which fall under 2 categories, ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment Actions")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Firmware Actions"),". These categories are represented by two different radio boxes. By default, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment Actions")," radio box is selected,  with the ",(0,l.kt)("inlineCode",{parentName:"p"},"Wi-Fi Setup")," action already selected."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Action Selection",src:a(87653).Z,width:"1265",height:"763"})),(0,l.kt)("h2",{id:"device-selection"},"Device Selection"),(0,l.kt)("p",null,"Three fields allow you to select the specific device you will be deploying to."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select Model (e.g. Memor 20, Memor 10 etc.)"),(0,l.kt)("li",{parentName:"ul"},"Select SKU (e.g. US, EU, China etc.)"),(0,l.kt)("li",{parentName:"ul"},"Select OS Version (Android version)")),(0,l.kt)("h2",{id:"deployment-actions"},"Deployment Actions"),(0,l.kt)("p",null,"Supports two sub selections that are listed below."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Host Profile")," - Supports all actions. Selected by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Barcode Only")," - Supports actions that do not require hosting of Scan2Deploy Profile.")),(0,l.kt)(i.Z,{defaultValue:"hostProfile",values:[{label:"Host Profile",value:"hostProfile"},{label:"Barcode Only",value:"barcodeOnly"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"hostProfile",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Device Specific"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/wifi-page"},"Wi-Fi Setup")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Wi-Fi network connection settings"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page"},"Applications")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page#manage"},"Manage")," - Enable/disable device applications"),(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page#install"},"Install")," - Install local apps"),(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page#update"},"Update")," - Update Datalogic apps to latest version"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/scanner-and-device-page"},"Scanner and Device Settings")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure scanner settings and parameters"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/scripts-page"},"Add Scripts")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure script commands to apply to the device"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/file-upload-page"},"File Upload")),(0,l.kt)("td",{parentName:"tr",align:null},"Upload files with arbitrary file extension"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/visual-formatter-basic-concepts"},"Visual Formatter")),(0,l.kt)("td",{parentName:"tr",align:null},"Setup barcode visual formatting"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/launcher-page"},"Datalogic Launhcer")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Datalogic Launcher"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"))))),(0,l.kt)(o.Z,{value:"barcodeOnly",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Device Specific"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/wifi-page"},"Wi-Fi Setup")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Wi-Fi network connection settings"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page"},"Applications")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page#manage"},"Manage")," - Enable/disable device applications")," ")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/scanner-and-device-page"},"Scanner and Device Settings")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure scanner settings and parameters"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/scripts-page"},"Add Scripts")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure script commands to apply to the device"),(0,l.kt)("td",{parentName:"tr",align:null})))))),(0,l.kt)("h2",{id:"firmware-actions"},"Firmware Actions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Device Specific"),(0,l.kt)("th",{parentName:"tr",align:null},"Host required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/wifi-page"},"Wi-Fi Setup")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Wi-Fi network connection settings"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/firmware-update-page"},"Firmware Update")),(0,l.kt)("td",{parentName:"tr",align:null},"Update device firmware with OTA package"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Unlike ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment")," profiles, ",(0,l.kt)("inlineCode",{parentName:"p"},"firmware")," profiles are much more limited as they are focused solely on updating device firmware."))))}g.isMDXComponent=!0},87653:function(e,t,a){t.Z=a.p+"assets/images/action_selection_deployment-d569517e5d17e85efc2f3405c7be2807.png"}}]);