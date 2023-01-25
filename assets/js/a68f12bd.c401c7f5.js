"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[4423],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294);function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(87462),l=t(67294),i=t(72389),o=t(63725),a=t(86010),s="tabItem_LplD";function u(e){var n,t,i,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,g=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,O=(0,l.useState)(h),x=O[0],T=O[1],N=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=y[m];null!=_&&_!==x&&v.some((function(e){return e.value===_}))&&T(_)}var E=function(e){var n=e.currentTarget,t=N.indexOf(n),r=v[t].value;r!==x&&(P(n),T(r),null!=m&&w(m,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break;case"ArrowLeft":var l=N.indexOf(e.currentTarget)-1;t=N[l]||N[N.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},g)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:E,onClick:E},i,{className:(0,a.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),u?(0,l.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function c(e){var n=(0,i.Z)();return l.createElement(u,(0,r.Z)({key:String(n)},e))}},78292:function(e,n,t){t.r(n),t.d(n,{Img:function(){return d},assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=t(87462),l=t(63366),i=(t(67294),t(3905)),o=(t(9877),t(58215),["components"]),a={id:"uninstalling",title:"Uninstalling Datalogic OPOS",sidebar_label:"Uninstalling"},s=void 0,u={unversionedId:"opos/distribution/uninstalling",id:"opos/distribution/uninstalling",title:"Uninstalling Datalogic OPOS",description:"<img src=",source:"@site/docs/opos/distribution/uninstalling.md",sourceDirName:"opos/distribution",slug:"/opos/distribution/uninstalling",permalink:"/opos/distribution/uninstalling",tags:[],version:"current",frontMatter:{id:"uninstalling",title:"Uninstalling Datalogic OPOS",sidebar_label:"Uninstalling"},sidebar:"OPOS",previous:{title:"Installed Files (OPOS)",permalink:"/opos/distribution/filesref"},next:{title:"Required Configuration Files",permalink:"/opos/configref/overview"}},c={},p=[{value:"Important note",id:"important-note",level:2},{value:"Uninstalling",id:"uninstalling",level:2},{value:"Uninstalling using setup.exe (or .msi)",id:"uninstalling-using-setupexe-or-msi",level:2},{value:"Uninstalling using Windows &quot;Add or Remove Programs&quot;",id:"uninstalling-using-windows-add-or-remove-programs",level:2}],d=function(e){var n=e.src;return(0,i.kt)("img",{src:n,style:{maxWidth:"750px",maxHeight:"750px"}})},m={toc:p,Img:d};function g(e){var n=e.components,t=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page describes the process for removing Datalogic OPOS from your computer."),(0,i.kt)("h2",{id:"important-note"},"Important note"),(0,i.kt)("p",null,"The uninstall process will remove only those files it knows were part of the original installation. Files added (post-installation) to the installed folders will remain on your computer, as will their containing folders. Assuming those folders don't contain valuable content, you can safely delete them after the uninstall process has finished."),(0,i.kt)("h2",{id:"uninstalling"},"Uninstalling"),(0,i.kt)("p",null,"There are two common methods for uninstalling software."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the original installer (setup.exe or associated .msi)"),(0,i.kt)("li",{parentName:"ul"},'Use Windows "Add or Remove Programs"')),(0,i.kt)("p",null,"Use the first method if you have the original installer. Otherwise, use the latter method."),(0,i.kt)("h2",{id:"uninstalling-using-setupexe-or-msi"},"Uninstalling using setup.exe (or .msi)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate your file (e.g. in Windows File Explorer) and then double-click it."),(0,i.kt)(d,{src:"/img/opos/uninstall/opos_uninstall_launch.png",mdxType:"Img"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The uninstaller starts and a ",(0,i.kt)("b",null,"Welcome")," dialog is displayed. Click ",(0,i.kt)("b",null,"Remove Datalogic OPOS")," and then click ",(0,i.kt)("b",null,"Finish"),"."),(0,i.kt)(d,{src:"/img/opos/uninstall/opos_uninstall_welcome.png",mdxType:"Img"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A short sequence of Progress dialogs will be displayed as product is being uninstalled."),(0,i.kt)(d,{src:"/img/opos/uninstall/opos_uninstall_progress.png",mdxType:"Img"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The final dialog indicates uninstallation is complete. Click ",(0,i.kt)("b",null,"Close"),"."),(0,i.kt)(d,{src:"/img/opos/uninstall/opos_uninstall_complete.png",mdxType:"Img"}))),(0,i.kt)("h2",{id:"uninstalling-using-windows-add-or-remove-programs"},'Uninstalling using Windows "Add or Remove Programs"'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start Windows Run and type ",(0,i.kt)("b",null,"add"),", then click on ",(0,i.kt)("b",null,"Add or remove programs"),"."),(0,i.kt)(d,{src:"/img/opos/uninstall/opos_remove_launch.png",mdxType:"Img"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under ",(0,i.kt)("b",null,"Apps & features")," scroll down and locate the ",(0,i.kt)("b",null,"Datalogic OPOS ... Driver"),"."),(0,i.kt)(d,{src:"/img/opos/uninstall/opos_remove_find.png",mdxType:"Img"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Double-click the entry and then click on ",(0,i.kt)("b",null,"Uninstall"),"."),(0,i.kt)(d,{src:"/img/opos/uninstall/opos_remove_start.png",mdxType:"Img"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A short sequence of progress dialogs will be displayed as OPOS is being uninstalled."),(0,i.kt)(d,{src:"/img/opos/uninstall/opos_remove_progress.png",mdxType:"Img"}))))}g.isMDXComponent=!0}}]);