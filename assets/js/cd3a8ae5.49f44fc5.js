"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[2197],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),v=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=v(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=v(a),d=n,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var v=2;v<i;v++)o[v]=a[v];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>v});var r=a(87462),n=(a(67294),a(3905));const i={id:"overview",title:"Datalogic JavaPOS API",pagination_label:"JavaPOS Overview"},o=void 0,l={unversionedId:"javapos/overview",id:"javapos/overview",title:"Datalogic JavaPOS API",description:"The Datalogic JavaPOS API can be downloaded from the Datalogic Partner Portal.",source:"@site/docs/javapos/overview.md",sourceDirName:"javapos",slug:"/javapos/overview",permalink:"/javapos/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Datalogic JavaPOS API",pagination_label:"JavaPOS Overview"},sidebar:"JavaPOS",next:{title:"Distribution Overview",permalink:"/javapos/distribution/overview"}},p={},v=[{value:"Overview",id:"overview",level:2},{value:"Releases",id:"releases",level:2},{value:"Developer Topics",id:"developer-topics",level:2},{value:"Distribution",id:"distribution",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Developing with JavaPOS",id:"developing-with-javapos",level:3},{value:"Remote Management",id:"remote-management",level:3}],c={toc:v},s="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Downloading the API",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The Datalogic JavaPOS API can be downloaded from the ",(0,n.kt)("a",{parentName:"p",href:"https://partnernet.datalogic.com/search/index/sf?search_txt=javapos2"},"Datalogic Partner Portal"),".")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Datalogic JavaPOS API is a Java Application Programming Interface for\nutilizing Datalogic devices in a UPOS Compliant Point-of-Sale application."),(0,n.kt)("h2",{id:"releases"},"Releases"),(0,n.kt)("p",null,"Current General Availability Release: ",(0,n.kt)("a",{parentName:"p",href:"https://cdn.datalogic.com/Download?iddwnfile=39445"},"1.14.075")),(0,n.kt)("h2",{id:"developer-topics"},"Developer Topics"),(0,n.kt)("h3",{id:"distribution"},(0,n.kt)("a",{parentName:"h3",href:"/javapos/distribution/overview"},"Distribution")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/javapos/distribution/installing"},"Installing Datalogic JavaPOS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/javapos/distribution/filesref"},"Installed Files Reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/javapos/distribution/uninstalling"},"Uninstalling Datalogic JavaPOS"))),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/javapos/configref/overview"},"Configuration Files Reference"))),(0,n.kt)("h3",{id:"developing-with-javapos"},(0,n.kt)("a",{parentName:"h3",href:"/javapos/develop/overview"},"Developing with JavaPOS")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/javapos/develop/appintegrate"},"Application Integration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/javapos/develop/tutorial"},"Tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/javapos/develop/hellodatalogicjavapos"},"Examples"))),(0,n.kt)("h3",{id:"remote-management"},"Remote Management"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/javapos/mbeans"},"Remote Management with JavaPOS using MBeans"))))}u.isMDXComponent=!0}}]);