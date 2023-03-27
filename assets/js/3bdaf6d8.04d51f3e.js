"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[4495],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),l={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function g(e){var t,n,a,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,p=d(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),b=g[0],k=g[1],h=f({queryString:s,groupId:u}),v=h[0],y=h[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),O=N[0],S=N[1],w=function(){var e=null!=v?v:O;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){w&&k(w)}),[w]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),S(e)}),[y,S,p]),tabValues:p}}var b=n(72389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;n=null!=(l=c[i])?l:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var l=n.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},3385:function(e,t,n){n.r(t),n.d(t,{Img:function(){return d},assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),o={id:"installing",title:"Installing Datalogic OPOS",sidebar_label:"Installing Datalogic OPOS"},s=void 0,u={unversionedId:"opos/distribution/installing",id:"opos/distribution/installing",title:"Installing Datalogic OPOS",description:"Datalogic OPOS is a set of Windows drivers that allow application developers to communicate with Datalogic Scanners and Scales. The Datalogic OPOS drivers can be installed for use within any UnifiedPOS compliant Point of Sale application.",source:"@site/docs/opos/distribution/installing.md",sourceDirName:"opos/distribution",slug:"/opos/distribution/installing",permalink:"/opos/distribution/installing",draft:!1,tags:[],version:"current",frontMatter:{id:"installing",title:"Installing Datalogic OPOS",sidebar_label:"Installing Datalogic OPOS"},sidebar:"OPOS",previous:{title:"Distribution Components",permalink:"/opos/distribution/distcomponents"},next:{title:"Installed Files (OPOS)",permalink:"/opos/distribution/filesref"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installing",id:"installing",level:2},{value:"Verification",id:"verification",level:2},{value:"Testing a scanner",id:"testing-a-scanner",level:3}],d=function(e){var t=e.src;return(0,l.kt)("img",{src:t,style:{maxWidth:"750px",maxHeight:"750px"}})},m={toc:p,Img:d},f="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Datalogic OPOS is a set of Windows drivers that allow application developers to communicate with Datalogic Scanners and Scales. The Datalogic OPOS drivers can be installed for use within any UnifiedPOS compliant Point of Sale application."),(0,l.kt)("p",null,"These drivers have been tested and verified to work on the following operating systems:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Microsoft Windows Vista, Windows 7, Windows 8, Windows 10")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Datalogic OPOS has the following operating system requirements for installation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Administrator privileges")),(0,l.kt)("h2",{id:"installing"},"Installing"),(0,l.kt)("p",null,"To install Datalogic OPOS, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Using Windows File Explorer, right mouse-click on ",(0,l.kt)("code",null,"setup.exe")," file and select ",(0,l.kt)("code",null,"Run as adminstrator"),"."),(0,l.kt)(d,{src:"/img/opos/install/opos_installer_launch.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The installer starts and a ",(0,l.kt)("b",null,"Welcome")," dialog is displayed."),(0,l.kt)(d,{src:"/img/opos/install/opos_installer_welcome.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("b",null,"I Agree")," to indicate you accept the terms of the End User License Agreement (EULA) and then click  ",(0,l.kt)("b",null,"Next")," to continue the installation."),(0,l.kt)(d,{src:"/img/opos/install/opos_installer_license.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"At this point you must decide whether you want to install Datalogic's Control Objects. The usual choice is ",(0,l.kt)("b",null,"Yes (typical)")," but you might choose ",(0,l.kt)("b",null,"No")," if you use Control Objects supplied by another vendor. Click ",(0,l.kt)("b",null,"Next")," after selecting your option."),(0,l.kt)(d,{src:"/img/opos/install/opos_installer_control_objects.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You are prompted to enter an installation path (the default is ",(0,l.kt)("code",null,"C:\\Program Files (x86)\\DLSOPOS\\"),"). It's advisable to use the default location. Provide a new path as necessary and then click ",(0,l.kt)("b",null,"Next"),"."),(0,l.kt)(d,{src:"/img/opos/install/opos_installer_location.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"When the Confirmation dialog appears, click ",(0,l.kt)("b",null,"Next")," to commit to product installation. "),(0,l.kt)(d,{src:"/img/opos/install/opos_installer_confirmation.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A short sequence of Progress dialogs will be displayed as product is being installed."),(0,l.kt)(d,{src:"/img/opos/install/opos_installer_progress.png",mdxType:"Img"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The final dialog indicates installation is complete. Click ",(0,l.kt)("b",null,"Close"),"."),(0,l.kt)(d,{src:"/img/opos/install/opos_installer_complete.png",mdxType:"Img"}))),(0,l.kt)("h2",{id:"verification"},"Verification"),(0,l.kt)("p",null,"The Datalogic OPOS installer automatically installs the DualTest application for testing scanners and scales. DualTest can be started by double-click the application icon installed on your desktop. The application must be run with administrative privileges."),(0,l.kt)(d,{src:"/img/opos/install/DualTest.ico",mdxType:"Img"}),(0,l.kt)("p",null,"Upon starting DualTest, the following dialog is displayed:"),(0,l.kt)(d,{src:"/img/opos/verification/opos_verification_dualtest_start.png",mdxType:"Img"}),(0,l.kt)("h3",{id:"testing-a-scanner"},"Testing a scanner"),(0,l.kt)("p",null,"The following procedure describes how to test a scanner."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Plug the scanner into an active USB port.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the Scanners list, click on the name of the profile name representing your scanner."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Profile Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USBHHScanner"),(0,l.kt)("td",{parentName:"tr",align:null},"USB-OEM Handheld Scanner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USBScanner"),(0,l.kt)("td",{parentName:"tr",align:null},"USB-OEM Fixed Retail Scanner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RS232Imager"),(0,l.kt)("td",{parentName:"tr",align:null},"USB-COM Scanner (either)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RS232Scanner"),(0,l.kt)("td",{parentName:"tr",align:null},"RS232 Scanner (either)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SCRS232Scanner"),(0,l.kt)("td",{parentName:"tr",align:null},"RS232 Single-cable Scanner"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In order, click the ",(0,l.kt)("strong",{parentName:"p"},"Open Scanner"),", ",(0,l.kt)("strong",{parentName:"p"},"Claim")," and ",(0,l.kt)("strong",{parentName:"p"},"Enable")," buttons.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the ",(0,l.kt)("strong",{parentName:"p"},"Auto Data Event")," button checkbox.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Scan an item. If the scanner is properly connected and configured, the scan data is automatically displayed."))))}g.isMDXComponent=!0}}]);