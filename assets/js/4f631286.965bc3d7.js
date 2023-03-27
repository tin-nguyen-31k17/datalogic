"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[2028],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(86010),i={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),o=a(16550),u=a(91980),s=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function v(e){var t,a,n,i,l=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,c=m(e),v=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),f=v[0],g=v[1],b=h({queryString:u,groupId:s}),y=b[0],k=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,p.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),x=w[0],E=w[1],N=function(){var e=null!=y?y:x;return d({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){N&&g(N)}),[N]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),E(e)}),[k,E,c]),tabValues:c}}var f=a(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,a=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,p=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==o&&(c(t),u(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var i,l=p.indexOf(e.currentTarget)-1;a=null!=(i=p[l])?i:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var i=a.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},56693:function(e,t,a){a.r(t),a.d(t,{Img:function(){return h},assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(74866),o=a(85162),u=["components"],s={id:"liveweightexample",title:"LiveWeightExample",sidebar_label:"LiveWeightExample"},p=void 0,c={unversionedId:"javapos/develop/liveweightexample",id:"javapos/develop/liveweightexample",title:"LiveWeightExample",description:"A scale example program for Datalogic JavaPOS",source:"@site/docs/javapos/develop/liveweightexample.md",sourceDirName:"javapos/develop",slug:"/javapos/develop/liveweightexample",permalink:"/javapos/develop/liveweightexample",draft:!1,tags:[],version:"current",frontMatter:{id:"liveweightexample",title:"LiveWeightExample",sidebar_label:"LiveWeightExample"},sidebar:"JavaPOS",previous:{title:"HelloJavaPOSScale",permalink:"/javapos/develop/hellojavaposscale"},next:{title:"MBeans",permalink:"/javapos/mbeans"}},m={},d=[{value:"A scale example program for Datalogic JavaPOS",id:"a-scale-example-program-for-datalogic-javapos",level:2}],h=function(e){var t=e.src;return(0,i.kt)("img",{src:t,style:{maxWidth:"750px",maxHeight:"750px"}})},v={toc:d,Img:h},f="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)(f,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"a-scale-example-program-for-datalogic-javapos"},"A scale example program for Datalogic JavaPOS"),(0,i.kt)("p",null,"LiveWeightExample outputs live weight data until you press enter to exit.\nLiveWeightExample runs with Datalogic JavaPOS.\nThe latest release of JavaPOS can be downloaded from the\nDatalogic website ",(0,i.kt)("a",{parentName:"p",href:"https://www.datalogic.com/eng/Download/Form/21984"},"here"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datalogic/LiveWeightExample"},"LiveWeightExample repository")," contains the LiveWeightExample.java source and shell\nscripts to run the LiveWeightExample.jar you build. The\nrepository also has a NetBeans IDE (Integrated Development\nEnvironment) project to perform the build.\nOther IDEs can be used."),(0,i.kt)("p",null,"Steps to build and run LiveWeightExample.jar:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Datalogic JavaPOS. This install includes the JavaPOSTest\nprogram.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure Datalogic JavaPOS runs with your scale.\nWith your scale and JavaPOSTest do an ",(0,i.kt)("strong",{parentName:"p"},"Open"),", ",(0,i.kt)("strong",{parentName:"p"},"Claim"),", ",(0,i.kt)("strong",{parentName:"p"},"Enable")," and\n",(0,i.kt)("strong",{parentName:"p"},"Read Weight"),". With nothing on the scale it should read 0.000.\nPut something on the scale. Press ",(0,i.kt)("strong",{parentName:"p"},"Read Weight")," again. It should\nread a positive number.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone or download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datalogic/LiveWeightExample"},"LiveWeightExample repository"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Build LiveWeightExample.jar. This was originally done with the\nfollowing. Variations near these should work."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Apache NetBeans 11.0"),(0,i.kt)("li",{parentName:"ul"},"Java jdk1.8.0_231"),(0,i.kt)("li",{parentName:"ul"},"The LiveWeightExample project in NetBeans is a Java\nwith Ant, Java Application project. The build uses a\nlibrary of the JavaPOS's .jar files.\nThese .jar files are in the JavaPOS install's root\ndirectory where it has its JavaPOS.jar and its SupportJars\ndirectory. Create this library via ",(0,i.kt)("strong",{parentName:"li"},"NetBeans -> Tools -> Libraries"),".\nAdd the library to the LiveWeightExample NetBeans project\nvia its ",(0,i.kt)("strong",{parentName:"li"},"Properties -> Libraries -> Classpath + -> Add Library..."))),(0,i.kt)("p",{parentName:"li"},"Another variation here builds LiveWeightExample.jar without\nrequiring the Apache NetBeans 11.0 Integrated Development Environment\n(IDE). It instead builds with the included script\nBuildLiveWeightExample.cmd or BuildLiveWeightExample.sh. These\nscripts explicitly use the Java JDK's javac and jar programs and\nrequire no intermediary IDE. Related \"inside\" scripts show\nwhat is inside LiveWeightExample.jar and Datalogic's JavaPOS.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the jpos.xml of your installed JavaPOS to include\na ",(0,i.kt)("inlineCode",{parentName:"p"},'<JposEntry logicalName="JavaPOSScaleDevice">')," entry\nfor your scale and interface. This entry is a copy of the entry\nyou used with JavaPOSTest above. The only difference is the\nlogicalName is changed to JavaPOSScaleDevice.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"With LiveWeightExample.jar make your scale weigh. Use the\nappropriate LiveWeightExample script, .cmd or .sh. With nothing\non the scale it should output ",(0,i.kt)("inlineCode",{parentName:"p"},"Zero Weight: 0"),". With something\non the scale it should output ",(0,i.kt)("inlineCode",{parentName:"p"},"Stable Weight: (number) (units)"),".\nWhen the scale weight is changed and before the scale settles, it should output\n",(0,i.kt)("inlineCode",{parentName:"p"},"Unstable Weight: --.--"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The following image shows a successful run."),(0,i.kt)(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)(h,{src:"/img/javapos/develop/LiveWeightExample/Command_Prompt_showing_run_of_LiveWeightExample.cmd.png",mdxType:"Img"})),(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)(h,{src:"/img/javapos/develop/LiveWeightExample/Terminal_showing_run_of_LiveWeightExample.sh.png",mdxType:"Img"}))))))}g.isMDXComponent=!0}}]);