"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[4504],{41931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(85893),r=n(11151),l=n(74866),u=n(85162);const s={},o=void 0,i={id:"scan2deploy/scripting/uninstall",title:"uninstall",description:"<Tabs",source:"@site/docs/scan2deploy/scripting/uninstall.mdx",sourceDirName:"scan2deploy/scripting",slug:"/scan2deploy/scripting/uninstall",permalink:"/scan2deploy/scripting/uninstall",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},d=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Z,{defaultValue:"syntax",values:[{label:"Syntax",value:"syntax"},{label:"Example",value:"example"}],children:[(0,a.jsx)(u.Z,{value:"syntax",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"UNINSTALL <package-name>\n"})})}),(0,a.jsx)(u.Z,{value:"example",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"UNINSTALL com.company.app\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["Uninstalls a previously installed application given its ",(0,a.jsx)(t.code,{children:"package-name"}),"."]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>u});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var l=n(85893);function u(e){let{children:t,hidden:n,className:u}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,u),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),l=n(12466),u=n(16550),s=n(20469),o=n(91980),i=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[u,o]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,d]=b({queryString:n,groupId:r}),[h,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=null!=i?i:h;return f({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:u,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=s[n].value;r!==a&&(i(t),u(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var a;const t=o.indexOf(e.currentTarget)+1;n=null!=(a=o[t])?a:o[0];break}case"ArrowLeft":{var r;const t=o.indexOf(e.currentTarget)-1;n=null!=(r=o[t])?r:o[o.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>u});var a=n(67294);const r={},l=a.createContext(r);function u(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);