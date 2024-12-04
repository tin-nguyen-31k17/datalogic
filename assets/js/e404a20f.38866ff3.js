"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[60225],{35932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=t(85893),l=t(11151),r=t(74866),a=t(85162),s=t(10993);const o={id:"pairing-intent",title:"Pairing Intent",sidebar_label:"Pairing Intent"},c=void 0,d={id:"aladdin/pairing-intent",title:"Pairing Intent",description:"The pairing intent is only supported in version 3.2.4 or later of the Aladdin app.",source:"@site/docs/aladdin/pairing-intent.mdx",sourceDirName:"aladdin",slug:"/aladdin/pairing-intent",permalink:"/aladdin/pairing-intent",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pairing-intent",title:"Pairing Intent",sidebar_label:"Pairing Intent"},sidebar:"Aladdin",previous:{title:"Scanning History",permalink:"/aladdin/scanning-history"},next:{title:"Firmware Update",permalink:"/aladdin/firmware"}},u={},h=[{value:"Overview",id:"overview",level:2},{value:"Action",id:"action",level:2},{value:"Extras",id:"extras",level:2},{value:"Auto Close",id:"auto-close",level:3},{value:"Show Logo",id:"show-logo",level:3},{value:"Background Color",id:"background-color",level:3},{value:"Title Color",id:"title-color",level:3},{value:"Title",id:"title",level:3},{value:"Sample code",id:"sample-code",level:2}];function p(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The pairing intent is only supported in version 3.2.4 or later of the Aladdin app."})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Applications can use a pairing intent that is exposed by the Aladdin app to start a pairing activity in the Aladdin app.  This activity displays a barcode that can be scanned by a CODiScan to pair it with the device."}),"\n",(0,i.jsx)(s.f5,{img:"/img/aladdin/pairing-intent.png"}),"\n",(0,i.jsx)(n.h2,{id:"action",children:"Action"}),"\n",(0,i.jsx)(n.p,{children:"When creating the pairing intent the following action should be used:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"com.datalogic.aladdinapp.ACTION_EXTERNAL_PAIRING_ACTIVITY\n"})}),"\n",(0,i.jsx)(n.h2,{id:"extras",children:"Extras"}),"\n",(0,i.jsx)(n.p,{children:"The pairing intent supports several extras that can be used to configure the operation and appearance of the pairing activity. All extras are optional."}),"\n",(0,i.jsx)(n.h3,{id:"auto-close",children:"Auto Close"}),"\n",(0,i.jsx)(n.p,{children:"Controls how the pairing activity should behave once a pairing is completed or an error occurs."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key Name:"})," ",(0,i.jsx)(n.code,{children:"autoClose"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," int"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"2"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"0"})})," - Pairing activity will remain running on successful pairing or error."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"1"})})," - Pairing activity will automatically close and return to the application that issued the intent."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2"})}),' - Pairing activity will remain running until "Close" button is tapped by the user.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.QA,{columnGap:"50px",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("center",{children:[(0,i.jsx)(s.f5,{img:"/img/aladdin/autoclose_0.png"}),(0,i.jsx)(n.p,{children:"Auto Close = 0"})]})}),(0,i.jsx)("div",{children:(0,i.jsxs)("center",{children:[(0,i.jsx)(s.f5,{img:"/img/aladdin/autoclose_2.png"}),(0,i.jsx)(n.p,{children:"Auto Close = 2"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"show-logo",children:"Show Logo"}),"\n",(0,i.jsx)(n.p,{children:"Controls whether the Datalogic logo should be displayed."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key Name:"})," ",(0,i.jsx)(n.code,{children:"showLogo"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," boolean"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})})," - Hide the Datalogic logo"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"true"})})," - Show the Datalogic logo"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"background-color",children:"Background Color"}),"\n",(0,i.jsx)(n.p,{children:"Sets the background color."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key Name:"})," ",(0,i.jsx)(n.code,{children:"bgColor"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"#FFFFFF"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Format:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Data is specified in hexidecimal RGB data with the format ",(0,i.jsx)(n.code,{children:"#RRGGBB"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"title-color",children:"Title Color"}),"\n",(0,i.jsx)(n.p,{children:"Sets the title text color."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key Name:"})," ",(0,i.jsx)(n.code,{children:"titleColor"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"#002696"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Format:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Data is specified in hexidecimal RGB data with the format ",(0,i.jsx)(n.code,{children:"#RRGGBB"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"title",children:"Title"}),"\n",(0,i.jsx)(n.p,{children:"String that should be displayed above the pairing barcode."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key Name:"})," ",(0,i.jsx)(n.code,{children:"title"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"Scan QR Code to pair your device"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sample-code",children:"Sample code"}),"\n",(0,i.jsx)(n.p,{children:"The following code fragment illustrates how to issue the pairing intent."}),"\n",(0,i.jsxs)(r.Z,{groupId:"language",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],children:[(0,i.jsx)(a.Z,{value:"kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'// Register callback for activity result\nval startForResult = registerForActivityResult(StartActivityForResult()) { result ->\n    when (result.resultCode) {\n        Activity.RESULT_OK -> {\n            // Pairing completed successfully\n        }\n        Activity.RESULT_CANCELED -> {\n            // Activity closed before pairing completed\n        }\n        Activity.RESULT_FIRST_USER -> {\n            // Pairing failed\n        }\n    }\n}\n\n// Create activity intent\nval pairingIntent = Intent("com.datalogic.aladdinapp.ACTION_EXTERNAL_PAIRING_ACTIVITY")\n    .putExtra("autoClose", 1) // Close automatically on connect\n    .putExtra("showLogo", false) // Hide the Datalogic logo\n    .putExtra("bgColor", "#CCCCFF") // Set the background color to light blue\n    .putExtra("titleColor", "#FF0000")  // Set the title color to red\n    .putExtra("title", "Scan this to pair.") // Set the title to custom text\n\n// Launch the activity\nstartForResult.launch(pairingIntent)\n\n'})})}),(0,i.jsx)(a.Z,{value:"java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// Register callback for activity result\nActivityResultLauncher<Intent> startForResult = registerForActivityResult(\n    new StartActivityForResult(),\n    new ActivityResultCallback<ActivityResult>() {\n        @Override\n        public void onActivityResult(ActivityResult result) {\n            switch (result.getResultCode()) {\n                case Activity.RESULT_OK:\n                    // Pairing completed successfully\n                    break;\n                case Activity.RESULT_CANCELED:\n                    // Activity closed before pairing completed\n                    break;\n                case Activity.RESULT_FIRST_USER:\n                    // Pairing failed\n                    break;\n            }\n        }\n    });\n\n// Create activity intent\nIntent pairingIntent = new Intent("com.datalogic.aladdinapp.ACTION_EXTERNAL_PAIRING_ACTIVITY")\n    .putExtra("autoClose", 1) // Close automatically on connect\n    .putExtra("showLogo", false) // Hide the Datalogic logo\n    .putExtra("bgColor", "#CCCCFF") // Set the background color to light blue\n    .putExtra("titleColor", "#FF0000") // Set the title color to red\n    .putExtra("title", "Scan this to pair."); // Set the title to custom text\n\n// Launch the activity\nstartForResult.launch(pairingIntent);\n\n'})})})]})]})}function g(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var i=t(36905);const l={tabItem:"tabItem_Ymn6"};var r=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(l.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>C});var i=t(67294),l=t(36905),r=t(12466),a=t(16550),s=t(20469),o=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:l}}=e;return{value:n,label:t,attributes:i,default:l}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const l=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=h(e),[a,o]=(0,i.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const l=null!=(n=i.find((e=>e.default)))?n:i[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[c,u]=g({queryString:t,groupId:l}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[l,r]=(0,d.Nk)(t);return[l,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),v=(()=>{const e=null!=c?c:x;return p({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function f(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),l=s[t].value;l!==i&&(c(n),a(l))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var i;const n=o.indexOf(e.currentTarget)+1;t=null!=(i=o[n])?i:o[0];break}case"ArrowLeft":{var l;const n=o.indexOf(e.currentTarget)-1;t=null!=(l=o[n])?l:o[o.length-1];break}}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,l.Z)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":i===n}),children:null!=t?t:n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,l.Z)("tabs-container",v.tabList),children:[(0,m.jsx)(f,{...n,...e}),(0,m.jsx)(b,{...n,...e})]})}function C(e){const n=(0,j.Z)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(n))}},10993:(e,n,t)=>{t.d(n,{QA:()=>s,TS:()=>l,f5:()=>r,sD:()=>o,xo:()=>a});t(67294);var i=t(85893);function l(e){let{img:n,maxWidth:t="fit-content",maxHeight:l="fit-content"}=e;return(0,i.jsx)("img",{src:n,style:{width:"auto",height:"auto",maxWidth:t,maxHeight:l}})}function r(e){let{img:n,height:t="550px"}=e;return(0,i.jsx)("img",{src:n,style:{maxHeight:t}})}function a(e){let{img:n,height:t="550px",caption:l}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:n,style:{maxHeight:t}}),(0,i.jsx)("center",{children:(0,i.jsx)("b",{children:l})})]})}function s(e){let{children:n,flexWrap:t="wrap",alignItems:l="center",rowGap:r="15px",columnGap:a="25px"}=e;return(0,i.jsx)("div",{style:{display:"flex",alignItems:l,flexWrap:t,rowGap:r,columnGap:a,marginBottom:"20px"},children:n})}function o(e){let{img:n}=e;return(0,i.jsx)("img",{src:n,style:{border:"2px solid black"}})}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const l={},r=i.createContext(l);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);