"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[9877],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(87462),a=t(67294),l=t(72389),o=t(63725),u=t(86010),i="tabItem_LplD";function c(e){var n,t,l,c=e.lazy,s=e.block,p=e.defaultValue,f=e.values,d=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,o.lx)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),O=h.tabGroupChoices,k=h.setTabGroupChoices,T=(0,a.useState)(g),w=T[0],x=T[1],E=[],N=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=O[d];null!=j&&j!==w&&b.some((function(e){return e.value===j}))&&x(j)}var D=function(e){var n=e.currentTarget,t=E.indexOf(n),r=b[t].value;r!==w&&(N(n),x(r),null!=d&&k(d,r))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},m)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:D,onClick:D},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function s(e){var n=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},73648:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=t(9877),u=t(58215),i=["components"],c={},s=void 0,p={unversionedId:"scan2deploy/scripting/uninstall",id:"scan2deploy/scripting/uninstall",title:"uninstall",description:"<Tabs",source:"@site/docs/scan2deploy/scripting/uninstall.md",sourceDirName:"scan2deploy/scripting",slug:"/scan2deploy/scripting/uninstall",permalink:"/scan2deploy/scripting/uninstall",tags:[],version:"current",frontMatter:{}},f={},d=[],m={toc:d};function v(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{defaultValue:"syntax",values:[{label:"Syntax",value:"syntax"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"UNINSTALL <package-name>\n"))),(0,l.kt)(u.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"UNINSTALL com.company.app\n")))),(0,l.kt)("p",null,"  Uninstalls a previously installed application given its ",(0,l.kt)("inlineCode",{parentName:"p"},"package-name"),"."))}v.isMDXComponent=!0}}]);