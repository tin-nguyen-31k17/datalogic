"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[8788],{59123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var s=t(85893),i=t(11151),r=t(74866),l=t(85162);const a={id:"action-selection-page",title:"Action Selection Page",sidebar_label:"Action Selection"},c=void 0,d={id:"scan2deploy/action-selection-page",title:"Action Selection Page",description:"This page allows the user to select the type of device they want to configure, and add or remove various actions from the current profile. The available actions are split",source:"@site/docs/scan2deploy/action-selection-page.mdx",sourceDirName:"scan2deploy",slug:"/scan2deploy/action-selection-page",permalink:"/scan2deploy/action-selection-page",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"action-selection-page",title:"Action Selection Page",sidebar_label:"Action Selection"},sidebar:"Scan2DeployStudio",previous:{title:"Welcome",permalink:"/scan2deploy/welcome-page"},next:{title:"Wi-Fi Setup",permalink:"/scan2deploy/wifi-page"}},o={},h=[{value:"Device Selection",id:"device-selection",level:2},{value:"Configuration Actions",id:"configuration-actions",level:2},{value:"Firmware Actions",id:"firmware-actions",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This page allows the user to select the type of device they want to configure, and add or remove various actions from the current profile. The available actions are split\ninto two categories, 'configuration actions' and 'firmware actions', correlating to the type of profile selected on the ",(0,s.jsx)(n.a,{href:"/scan2deploy/welcome-page",children:"Welcome Page"}),". These actions may be further restricted\ndepending on the device selection. By default, the ",(0,s.jsx)(n.code,{children:"Wi-Fi Setup"})," action is already selected."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Action Selection",src:t(87653).Z+"",width:"1113",height:"812"})}),"\n",(0,s.jsx)(n.h2,{id:"device-selection",children:"Device Selection"}),"\n",(0,s.jsx)(n.p,{children:"These fields allow you to select the specific device you will be deploying to. The available actions and settings may change depending on your selection."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model"})," (e.g. Memor 11, Skorpio X5, Joya Touch 22, etc.)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SKU"})," (e.g. GMS, AOSP, region-specific, etc.)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"OS Version"})," (Android version)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-actions",children:"Configuration Actions"}),"\n",(0,s.jsx)(n.p,{children:"Actions can be further broken down into two sub-selections based on the deployment method."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Host Profile"})," - Supports all actions. Selected by default."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Barcode Only"})," - Supports actions that do not require hosting of Scan2Deploy Profile."]}),"\n"]}),"\n",(0,s.jsxs)(r.Z,{defaultValue:"hostProfile",values:[{label:"Host Profile",value:"hostProfile"},{label:"Barcode Only",value:"barcodeOnly"}],children:[(0,s.jsx)(l.Z,{value:"hostProfile",children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Action"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Device Specific"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/wifi-page",children:"Wi-Fi Setup"})}),(0,s.jsx)(n.td,{children:"Configure Wi-Fi network connection settings"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/applications-page",children:"Applications"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("br",{}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/applications-page#manage",children:"Manage"})," - Enable/disable device applications"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/applications-page#install",children:"Install"})," - Install local apps"]})]})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/scanner-and-device-page",children:"Device and Scanner Settings"})}),(0,s.jsx)(n.td,{children:"Configure scanner settings and parameters"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/scripts-page",children:"Scripts"})}),(0,s.jsx)(n.td,{children:"Configure script commands to apply to the device"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/file-upload-page",children:"File Upload"})}),(0,s.jsx)(n.td,{children:"Upload files with arbitrary file extension"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/visual-formatter-basic-concepts",children:"Visual Formatter"})}),(0,s.jsx)(n.td,{children:"Setup barcode visual formatting"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/launcher-page",children:"Launcher"})}),(0,s.jsx)(n.td,{children:"Configure Datalogic Launcher"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/browser-page",children:"Enterprise Browser"})}),(0,s.jsx)(n.td,{children:"Configure Datalogic Enterprise Browser"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/advanced-keyboard-page",children:"Advanced Keyboard"})}),(0,s.jsx)(n.td,{children:"Configure Datalogic Advanced Keyboard"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page",children:"Save and Scan"}),(0,s.jsx)("br",{}),"*",(0,s.jsx)(n.em,{children:"automatically added"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("br",{}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page#mobility-suite-updates",children:"Mobility Suite Updates"})," - Update Datalogic apps to latest version"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page#scan2deploy-settings",children:"Scan2Deploy Settings"})," - Configure settings specific to Scan2Deploy"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page#android-settings",children:"Android Settings"})," - Configure settings specific to the Android system"]})]})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]})]})]})}),(0,s.jsx)(l.Z,{value:"barcodeOnly",children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Action"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Device Specific"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/wifi-page",children:"Wi-Fi Setup"})}),(0,s.jsx)(n.td,{children:"Configure Wi-Fi network connection settings"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/applications-page",children:"Applications"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("br",{}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/applications-page#manage",children:"Manage"})," - Enable/disable device applications"]})," "]})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/scanner-and-device-page",children:"Device and Scanner Settings"})}),(0,s.jsx)(n.td,{children:"Configure scanner settings and parameters"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/scripts-page",children:"Scripts"})}),(0,s.jsx)(n.td,{children:"Configure script commands to apply to the device"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page",children:"Save and Scan"}),(0,s.jsx)("br",{}),"*",(0,s.jsx)(n.em,{children:"automatically added"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("br",{}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page#scan2deploy-settings",children:"Scan2Deploy Settings"})," - Configure settings specific to Scan2Deploy"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page#android-settings",children:"Android Settings"})," - Configure settings specific to the Android system"]})]})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]})]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"firmware-actions",children:"Firmware Actions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Action"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Device Specific"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Host required"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/wifi-page",children:"Wi-Fi Setup"})}),(0,s.jsx)(n.td,{children:"Configure Wi-Fi network connection settings"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/scan2deploy/firmware-update-page",children:"Firmware Update"})}),(0,s.jsx)(n.td,{children:"Update device firmware with OTA package"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page",children:"Save and Scan"}),(0,s.jsx)("br",{}),"*",(0,s.jsx)(n.em,{children:"automatically added"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("br",{}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page#mobility-suite-updates",children:"Mobility Suite Updates"})," - Update Scan2Deploy Agent to latest version"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page#scan2deploy-settings",children:"Scan2Deploy Settings"})," - Configure settings specific to Scan2Deploy"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"/scan2deploy/save-and-scan-page#android-settings",children:"Android Settings"})," - Configure settings specific to the Android system"]})]})]}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2713"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Unlike ",(0,s.jsx)(n.code,{children:"configuration"})," profiles, ",(0,s.jsx)(n.code,{children:"firmware"})," profiles are much more limited as they are focused solely on updating device firmware."]})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var s=t(36905);const i={tabItem:"tabItem_Ymn6"};var r=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>S});var s=t(67294),i=t(36905),r=t(12466),l=t(16550),a=t(20469),c=t(91980),d=t(67392),o=t(50012);function h(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=u(e),[l,c]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=s.find((e=>e.default)))?n:s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,h]=x({queryString:t,groupId:i}),[j,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,r]=(0,o.Nk)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),f=(()=>{const e=null!=d?d:j;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);c(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(85893);function b(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),o=e=>{const n=e.currentTarget,t=c.indexOf(n),i=a[t].value;i!==s&&(d(n),l(i))},h=e=>{var n;let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{var s;const n=c.indexOf(e.currentTarget)+1;t=null!=(s=c[n])?s:c[0];break}case"ArrowLeft":{var i;const n=c.indexOf(e.currentTarget)-1;t=null!=(i=c[n])?i:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...r,className:(0,i.Z)("tabs__item",f.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function m(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=j(e);return(0,y.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,y.jsx)(b,{...e,...n}),(0,y.jsx)(m,{...e,...n})]})}function S(e){const n=(0,g.Z)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(n))}},87653:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/action_selection_deployment-611a2bdbbf41c47e313b92a09d9200ed.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(67294);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);