"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3840],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20669:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"file-upload-page",title:"File Upload Page",sidebar_label:"File Upload"},p=void 0,c={unversionedId:"scan2deploy/file-upload-page",id:"scan2deploy/file-upload-page",title:"File Upload Page",description:"This page allows users to upload files with arbitrary file extensions.",source:"@site/docs/scan2deploy/file-upload-page.md",sourceDirName:"scan2deploy",slug:"/scan2deploy/file-upload-page",permalink:"/scan2deploy/file-upload-page",tags:[],version:"current",frontMatter:{id:"file-upload-page",title:"File Upload Page",sidebar_label:"File Upload"},sidebar:"Scan2DeployStudio",previous:{title:"Scripts",permalink:"/scan2deploy/scripts-page"},next:{title:"Basic Concepts",permalink:"/scan2deploy/visual-formatter-basic-concepts"}},s={},u=[{value:"Special file types",id:"special-file-types",level:2},{value:"DXU",id:"dxu",level:3},{value:"Visual keyboard remapper",id:"visual-keyboard-remapper",level:3}],d={toc:u};function f(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page allows users to upload files with arbitrary file extensions."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Scanner Settings page",src:a(82586).Z,width:"1019",height:"763"})),(0,i.kt)("h2",{id:"special-file-types"},"Special file types"),(0,i.kt)("p",null,"Scan2Deploy Studio will offer extra functionality for certain file types once they are added to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Uploaded Files"))," list."),(0,i.kt)("h3",{id:"dxu"},"DXU"),(0,i.kt)("p",null,"If the file added is a ",(0,i.kt)("a",{parentName:"p",href:"/dxu/overview"},"DXU")," configuration file ",(0,i.kt)("strong",{parentName:"p"},"(.dxu)"),", it can be selected for application on the device. Build your DXU configuration file using the Datalogic DXU application, along with a connected device of the type you are planning to deploy to (i.e. connect a Memor 10 if that's the device type you plan to configure for in Scan2Deploy Studio). Follow the ",(0,i.kt)("a",{parentName:"p",href:"/dxu/overview#save-a-configuration-file"},"Save a Configuration File")," steps as described in the DXU documentation, and then select that file on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"File Upload page")),"."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Apply DXU Config page",src:a(2933).Z,width:"989",height:"763"})),(0,i.kt)("h3",{id:"visual-keyboard-remapper"},"Visual keyboard remapper"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you add a Visual Keyboard Remapper file ",(0,i.kt)("strong",{parentName:"p"},"(.zip)")," on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Save and Print"))," page, you will be presented with more options related to the file, you will be provided options as to if and how it should be applied on the device.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Visual Keyboard Remapper software is currently only available internally at Datalogic. It can be used to visually remap keys for different functions. It is most useful on devices with full keyboard, like the ",(0,i.kt)("strong",{parentName:"p"},"Skorpio X5"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Visual keyboard remapper",src:a(20821).Z,width:"883",height:"852"})))}f.isMDXComponent=!0},2933:function(e,t,a){t.Z=a.p+"assets/images/apply_dxu_config-3da53d47ca3e050d10003f84d472d890.png"},20821:function(e,t,a){t.Z=a.p+"assets/images/file-upload-visual-keyboard-remapper-085deaa4d0310baef3bbc3a800c311c8.png"},82586:function(e,t,a){t.Z=a.p+"assets/images/file_upload-6ad79c5c9f70083a1945c7f7d1ed1e39.png"}}]);