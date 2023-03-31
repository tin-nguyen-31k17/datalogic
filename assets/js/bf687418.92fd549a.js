"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[7123],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(86010),o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(87462),a=r(67294),o=r(86010),u=r(12466),l=r(16550),i=r(91980),c=r(67392),s=r(50012);function p(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,l.k6)(),u=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function v(e){var t,r,n,o,u=e.defaultValue,l=e.queryString,i=void 0!==l&&l,c=e.groupId,p=f(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),b=v[0],y=v[1],h=m({queryString:i,groupId:c}),g=h[0],k=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=w[0],O=w[1],N=function(){var e=null!=g?g:E;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){N&&y(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),k(e),O(e)}),[k,O,p]),tabValues:p}}var b=r(72389),y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,r=e.block,l=e.selectedValue,i=e.selectValue,c=e.tabValues,s=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==l&&(p(t),i(n))},d=function(e){var t,r=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,u=s.indexOf(e.currentTarget)-1;r=null!=(o=s[u])?o:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:f},u,{className:(0,o.Z)("tabs__item",y.tabItem,null==u?void 0:u.className,{"tabs__item--active":l===t})}),null!=r?r:t)})))}function g(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===n}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},26955:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),u=r(74866),l=r(85162),i=["components"],c={},s=void 0,p={unversionedId:"scan2deploy/scripting/copy",id:"scan2deploy/scripting/copy",title:"copy",description:"<Tabs",source:"@site/docs/scan2deploy/scripting/copy.md",sourceDirName:"scan2deploy/scripting",slug:"/scan2deploy/scripting/copy",permalink:"/scan2deploy/scripting/copy",draft:!1,tags:[],version:"current",frontMatter:{}},f={},d=[],m={toc:d},v="wrapper";function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(v,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{defaultValue:"syntax",values:[{label:"Syntax",value:"syntax"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"syntax",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"COPY <source-file-path> <target-file-path> <overwrite>\n"))),(0,o.kt)(l.Z,{value:"example",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"COPY /sdcard/Download/test.apk /sdcard/MyApps/test.apk true\n")))),(0,o.kt)("p",null,"Copies a file located on-device from one location to another. If the target-file-path does not exist, it will be automatically created for you, even multiple folders deep if necessary."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"source-file-path")," - the full path to the source file to be copied, starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"target-file-path")," - the full path to the destination location where the file should be copied to. Should include the destination file name as well.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"overwrite")," - true or false. if set to ",(0,o.kt)("strong",{parentName:"p"},"true"),", the copy should overwrite an existing file. if set to ",(0,o.kt)("strong",{parentName:"p"},"false"),", the copy should not overwrite an existing file."))))}b.isMDXComponent=!0}}]);