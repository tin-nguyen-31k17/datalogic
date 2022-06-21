"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[9264],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(87462),a=n(67294),l=n(72389),o=n(63725),u=n(86010),i="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),k=h.tabGroupChoices,O=h.setTabGroupChoices,T=(0,a.useState)(g),w=T[0],x=T[1],E=[],N=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=k[f];null!=j&&j!==w&&b.some((function(e){return e.value===j}))&&x(j)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==w&&(N(t),x(r),null!=f&&O(f,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},m)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:D,onClick:D},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function s(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},68983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(9877),u=n(58215),i=["components"],c={},s=void 0,p={unversionedId:"scan2deploy/scripting/broadcast",id:"scan2deploy/scripting/broadcast",title:"broadcast",description:"<Tabs",source:"@site/docs/scan2deploy/scripting/broadcast.md",sourceDirName:"scan2deploy/scripting",slug:"/scan2deploy/scripting/broadcast",permalink:"/scan2deploy/scripting/broadcast",tags:[],version:"current",frontMatter:{}},d={},f=[],m={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{defaultValue:"syntax",values:[{label:"Syntax",value:"syntax"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"syntax",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"BROADCAST <arguments>\n"))),(0,l.kt)(u.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'BROADCAST -a datalogic.action.test -n com.datalogic.test/TestBroadcastReceiver --es extra_key "extra_string_value"\n')))),(0,l.kt)("p",null,"Broadcasts the intent with the specified intent arguments.  Supported extra arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-e | -es - Add string data as a key-value pair"),(0,l.kt)("li",{parentName:"ul"},"-ef - Add float data as a key-value pair"),(0,l.kt)("li",{parentName:"ul"},"-ei - Add integer data as a key-value pair"),(0,l.kt)("li",{parentName:"ul"},"-el - Add long data as a key-value pair"),(0,l.kt)("li",{parentName:"ul"},"-ez - Add boolean data as a key-value pair")))}v.isMDXComponent=!0}}]);