"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[2e3],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(a),m=r,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),l={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),u=a(91980),c=a(67392),p=a(50012);function s(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:s(a);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function g(e){var t,a,n,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,c=e.groupId,s=d(e),g=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:s})})),k=g[0],b=g[1],y=f({queryString:u,groupId:c}),h=y[0],v=y[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),a=(0,p.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=N[0],S=N[1],O=function(){var e=null!=h?h:w;return m({value:e,tabValues:s})?e:null}();return(0,r.useLayoutEffect)((function(){O&&b(O)}),[O]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),S(e)}),[v,S,s]),tabValues:s}}var k=a(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,a=e.block,o=e.selectedValue,u=e.selectValue,c=e.tabValues,p=[],s=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==o&&(s(t),u(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var l,i=p.indexOf(e.currentTarget)-1;a=null!=(l=p[i])?l:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function h(e){var t=e.lazy,a=e.children,n=e.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function v(e){var t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function N(e){var t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},46720:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(74866),o=a(85162),u=["components"],c={id:"action-selection-page",title:"Action Selection Page",sidebar_label:"Action Selection"},p=void 0,s={unversionedId:"scan2deploy/action-selection-page",id:"scan2deploy/action-selection-page",title:"Action Selection Page",description:"This page allows to user to select the type of device they want to configure and add or remove various actions to the current profile, which fall under 2 categories, Deployment Actions and Firmware Actions. These categories are represented by two different radio boxes. By default, the Deployment Actions radio box is selected,  with the Wi-Fi Setup action already selected.",source:"@site/docs/scan2deploy/action-selection-page.md",sourceDirName:"scan2deploy",slug:"/scan2deploy/action-selection-page",permalink:"/scan2deploy/action-selection-page",draft:!1,tags:[],version:"current",frontMatter:{id:"action-selection-page",title:"Action Selection Page",sidebar_label:"Action Selection"},sidebar:"Scan2DeployStudio",previous:{title:"Welcome",permalink:"/scan2deploy/welcome-page"},next:{title:"Wi-Fi Setup",permalink:"/scan2deploy/wifi-page"}},d={},m=[{value:"Device Selection",id:"device-selection",level:2},{value:"Deployment Actions",id:"deployment-actions",level:2},{value:"Firmware Actions",id:"firmware-actions",level:2}],f={toc:m},g="wrapper";function k(e){var t=e.components,c=(0,r.Z)(e,u);return(0,l.kt)(g,(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page allows to user to select the type of device they want to configure and add or remove various actions to the current profile, which fall under 2 categories, ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment Actions")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Firmware Actions"),". These categories are represented by two different radio boxes. By default, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment Actions")," radio box is selected,  with the ",(0,l.kt)("inlineCode",{parentName:"p"},"Wi-Fi Setup")," action already selected."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Action Selection",src:a(87653).Z,width:"1265",height:"763"})),(0,l.kt)("h2",{id:"device-selection"},"Device Selection"),(0,l.kt)("p",null,"Three fields allow you to select the specific device you will be deploying to."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select Model (e.g. Memor 20, Memor 10 etc.)"),(0,l.kt)("li",{parentName:"ul"},"Select SKU (e.g. US, EU, China etc.)"),(0,l.kt)("li",{parentName:"ul"},"Select OS Version (Android version)")),(0,l.kt)("h2",{id:"deployment-actions"},"Deployment Actions"),(0,l.kt)("p",null,"Supports two sub selections that are listed below."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Host Profile")," - Supports all actions. Selected by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Barcode Only")," - Supports actions that do not require hosting of Scan2Deploy Profile.")),(0,l.kt)(i.Z,{defaultValue:"hostProfile",values:[{label:"Host Profile",value:"hostProfile"},{label:"Barcode Only",value:"barcodeOnly"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"hostProfile",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Device Specific"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/wifi-page"},"Wi-Fi Setup")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Wi-Fi network connection settings"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page"},"Applications")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page#manage"},"Manage")," - Enable/disable device applications"),(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page#install"},"Install")," - Install local apps"),(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page#update"},"Update")," - Update Datalogic apps to latest version"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/scanner-and-device-page"},"Device and Scanner Settings")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure scanner settings and parameters"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/scripts-page"},"Add Scripts")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure script commands to apply to the device"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/file-upload-page"},"File Upload")),(0,l.kt)("td",{parentName:"tr",align:null},"Upload files with arbitrary file extension"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/visual-formatter-basic-concepts"},"Visual Formatter")),(0,l.kt)("td",{parentName:"tr",align:null},"Setup barcode visual formatting"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/launcher-page"},"Datalogic Launhcer")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Datalogic Launcher"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"))))),(0,l.kt)(o.Z,{value:"barcodeOnly",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Device Specific"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/wifi-page"},"Wi-Fi Setup")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Wi-Fi network connection settings"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page"},"Applications")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/applications-page#manage"},"Manage")," - Enable/disable device applications")," ")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/scanner-and-device-page"},"Device and Scanner Settings")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure scanner settings and parameters"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/scripts-page"},"Add Scripts")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure script commands to apply to the device"),(0,l.kt)("td",{parentName:"tr",align:null})))))),(0,l.kt)("h2",{id:"firmware-actions"},"Firmware Actions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Device Specific"),(0,l.kt)("th",{parentName:"tr",align:null},"Host required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/wifi-page"},"Wi-Fi Setup")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Wi-Fi network connection settings"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/scan2deploy/firmware-update-page"},"Firmware Update")),(0,l.kt)("td",{parentName:"tr",align:null},"Update device firmware with OTA package"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Unlike ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment")," profiles, ",(0,l.kt)("inlineCode",{parentName:"p"},"firmware")," profiles are much more limited as they are focused solely on updating device firmware.")))}k.isMDXComponent=!0},87653:function(e,t,a){t.Z=a.p+"assets/images/action_selection_deployment-d569517e5d17e85efc2f3405c7be2807.png"}}]);