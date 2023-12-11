"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[8761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),s=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,c]=g({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),S=(()=>{const e=null!=s?s:u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{S&&o(S)}),[S]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);o(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var S=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==o&&(u(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=p.indexOf(e.currentTarget)+1;n=null!=(a=p[t])?a:p[0];break}case"ArrowLeft":{var r;const t=p.indexOf(e.currentTarget)-1;n=null!=(r=p[t])?r:p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function O(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function b(e){const t=(0,S.Z)();return r.createElement(O,(0,a.Z)({key:String(t)},e))}},12389:(e,t,n)=>{n.r(t),n.d(t,{Img:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));n(74866),n(85162);const l={id:"tutorialcsharpscale",title:"C# Live Weight Reader Tutorial",sidebar_label:"C# Live Weight Reader Tutorial"},i=void 0,o={unversionedId:"opos/develop/tutorialcsharpscale",id:"opos/develop/tutorialcsharpscale",title:"C# Live Weight Reader Tutorial",description:"Introduction",source:"@site/docs/opos/develop/tutorialcsharpscale.md",sourceDirName:"opos/develop",slug:"/opos/develop/tutorialcsharpscale",permalink:"/opos/develop/tutorialcsharpscale",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorialcsharpscale",title:"C# Live Weight Reader Tutorial",sidebar_label:"C# Live Weight Reader Tutorial"},sidebar:"OPOS",previous:{title:"C# Barcode Reader Tutorial",permalink:"/opos/develop/tutorialcsharpscanner"},next:{title:"Datalogic OPOS Examples on GitHub",permalink:"/opos/develop/datalogicoposexamples"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a project",id:"creating-a-project",level:2},{value:"Exposing OPOS control objects",id:"exposing-opos-control-objects",level:2},{value:"Creating the OPOS scale object",id:"creating-the-opos-scale-object",level:2},{value:"Accessing the OPOS Scale interface",id:"accessing-the-opos-scale-interface",level:2},{value:"Implementing event functions",id:"implementing-event-functions",level:3},{value:"Tying it all together",id:"tying-it-all-together",level:2}],p=e=>{let{src:t}=e;return(0,r.kt)("img",{src:t,style:{maxWidth:"750px",maxHeight:"750px"}})},u={toc:c,Img:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, we will be creating a simple console application in C# that opens, claims and enables a scale device and provides a live weight readings of items placed on the scale platter. This tutorial only covers a very basic aspect of development using OPOS with C#, but should suffice as a starting point for any application that looks to read weights from a Datalogic scale device."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Developing an application for a Datalogic scale device requires you to first have Datalogic's OPOS installed. The OPOS installer ensures the required ActiveX Controls are registered and any supporting files are present."),(0,r.kt)("h2",{id:"creating-a-project"},"Creating a project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using Visual Studio 2019, navigate to ",(0,r.kt)("strong",{parentName:"p"},"File > New > Project ...")),(0,r.kt)(p,{src:"/img/opos/develop/csharp/filenewproject.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Create a new project")," dialog, set the filter to ",(0,r.kt)("strong",{parentName:"p"},"C#"),", select ",(0,r.kt)("strong",{parentName:"p"},"Console App")," and select ",(0,r.kt)("strong",{parentName:"p"},"Next")),(0,r.kt)(p,{src:"/img/opos/develop/csharp/createnewproject.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Configure your new project")," dialog, declare your ",(0,r.kt)("strong",{parentName:"p"},"Project name"),", ",(0,r.kt)("strong",{parentName:"p"},"Location")," and ",(0,r.kt)("strong",{parentName:"p"},"Solution name")," as desired and then select ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scale/configurenewproject.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Additional information")," dialog, make sure the Target Framework is set to ",(0,r.kt)("em",{parentName:"p"},".NET 5.0")," and then select ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/additionalinfo.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the project has initialized, you ",(0,r.kt)("strong",{parentName:"p"},"must create and use an x86 configuration"),"; failure to do this will result in the unhandled exception ",(0,r.kt)("em",{parentName:"p"},"80040154 Class not registered (0x80040154 (REGDB_E_CLASSNOTREG))")," when you run the application. The Configuration Manager can be accessed by navigating to ",(0,r.kt)("strong",{parentName:"p"},"Build > Configuration Manager..."),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scale/newsolutionplatform.png",mdxType:"Img"}))),(0,r.kt)("h2",{id:"exposing-opos-control-objects"},"Exposing OPOS control objects"),(0,r.kt)("p",null,"The very first step is to reference the scale ActiveX Control as a ",(0,r.kt)("inlineCode",{parentName:"p"},"dependency"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the Visual Studio 2019 ",(0,r.kt)("strong",{parentName:"p"},"Solution Explorer"),", right mouse click ",(0,r.kt)("strong",{parentName:"p"},"Dependencies")," and select ",(0,r.kt)("strong",{parentName:"p"},"Add COM Reference")," from the context menu."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scale/addcomreference.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the ",(0,r.kt)("strong",{parentName:"p"},"Reference Manager")," dialog appears, filter on the keyword ",(0,r.kt)("strong",{parentName:"p"},"OPOS"),", select ",(0,r.kt)("em",{parentName:"p"},"OPOS 1.14.1 Constants")," and ",(0,r.kt)("em",{parentName:"p"},"OPOS Scale Control")," and then select OK.",(0,r.kt)("a",{name:"refmgr"})),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scale/addcomrefs.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At this point, expanding the ",(0,r.kt)("strong",{parentName:"p"},"Dependencies")," node of the ",(0,r.kt)("strong",{parentName:"p"},"Solution Explorer"),", you will see ",(0,r.kt)("inlineCode",{parentName:"p"},"Interop.OPOSCONSTANTSLib")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Interop.OposScale_CCO"),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scale/dependencies.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Near the top of your source file, add the statements ",(0,r.kt)("inlineCode",{parentName:"p"},"using OPOSCONSTANTSLib")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"using OposScale_CCO;")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing OPOSCONSTANTSLib;\nusing OposScale_CCO;\n\nnamespace CSharpScaleApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"creating-the-opos-scale-object"},"Creating the OPOS scale object"),(0,r.kt)("p",null,"Creating the scale object requires you to simply declare and instantiate it. However, if you attempt to build the application at this point you will encounter ",(0,r.kt)("em",{parentName:"p"},"error CS1752: Interop type 'OPOSScaleClass' cannot be embedded. Use the applicable interface instead.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing OPOSCONSTANTSLib;\nusing OposScale_CCO;\n\nnamespace CSharpScaleApp\n{\n    class Program\n    {\n        private static OPOSScaleClass scale;\n\n        static void Main(string[] args)\n        {\n            // Create a scale object.\n            scale = new OPOSScaleClass();\n        }\n    }\n}\n")),(0,r.kt)("p",null,"This issue is easily resolved by the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Expand the ",(0,r.kt)("strong",{parentName:"p"},"Dependencies")," and ",(0,r.kt)("strong",{parentName:"p"},"COM")," nodes in the ",(0,r.kt)("strong",{parentName:"p"},"Solution Explorer"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right mouse click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Interop.OposScale_CCO")," and select ",(0,r.kt)("strong",{parentName:"p"},"Properties")," from the context menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"Embed Interop Types")," to ",(0,r.kt)("strong",{parentName:"p"},"No"),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scale/embededproperty.png",mdxType:"Img"}))),(0,r.kt)("h2",{id:"accessing-the-opos-scale-interface"},"Accessing the OPOS Scale interface"),(0,r.kt)("p",null,"At this point, you are ready to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," object."),(0,r.kt)("p",null,"The OPOS standard defines a general sequence to access a device:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"open"),": open a context to the device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"claim"),": claim control over the device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enable"),": enable the device's operation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disable"),": disable the device's  operation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"release"),": release control over the device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"close"),": close the context to the device")),(0,r.kt)("p",null,"Opening a scale context requires you to reference a ",(0,r.kt)("em",{parentName:"p"},"device profile")," (a device profile simply being a name representing a set of parameters relevant to the device). When OPOS is installed, scale profiles are seen as the subkey names installed under the UPOS-specified registry key ",(0,r.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\Software\\Wow6432Node\\OLEforRetail\\ServiceOPOS\\SCALE"),". It is your choice whether you want to programmatically obtain the profile names from the registry or to simply hard-code them in your application."),(0,r.kt)("p",null,"If the scale context is successfully opened, you can then claim the device, gaining exclusive access to it. And if the device is successfully claimed, you can then enable it to perform subsequent operations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing OPOSCONSTANTSLib;\nusing OposScale_CCO;\n\nnamespace CSharpScaleApp\n{\n    class Program\n    {\n        private static OPOSScaleClass scale;\n\n        static void Main(string[] args)\n        {\n            // Create a scale object.\n            scale = new OPOSScaleClass();\n\n            // Open a context with the scale (e.g. "USBScale").\n            string profileName = "<your selected profile>";\n            scale.Open(profileName);\n\n            // Claim control of the scale using a 1000 millisecond timeout.\n            scale.ClaimDevice(1000);\n            if (scale.Claimed)\n            {\n                // Enable the scale and event transmission.\n                scale.DeviceEnabled = true;\n                scale.DataEventEnabled = true;\n\n                //\n                // more to come .... \n                //\n\n                // Disable and release.\n                scale.DataEventEnabled = false;\n                scale.ReleaseDevice();\n            }\n\n            // Finally, close the scale context.\n            scale.Close();\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"implementing-event-functions"},"Implementing event functions"),(0,r.kt)("p",null,"At this point, the scale object can act as a ",(0,r.kt)("em",{parentName:"p"},"sink")," (an object that receives input from the device). However, to make the application useful you must connect the scale object to a ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusUpdateEvent()")," method, allowing the application to retrieve the live weight data obtained by the scale object."),(0,r.kt)("p",null,"To see the event methods of the associated interface class ",(0,r.kt)("inlineCode",{parentName:"p"},"_IOPOSScaleEvents_Event")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right mouse click on ",(0,r.kt)("inlineCode",{parentName:"p"},"OPOSScaleClass")," in your source code and then select ",(0,r.kt)("strong",{parentName:"p"},"Peek Definition")," from the context menu."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scale/peekdefinition_a.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scrolling to the bottom of the displayed window you see four event methods."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scale/peekdefinition_b.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Placing your cursor over ",(0,r.kt)("inlineCode",{parentName:"p"},"_IOPOSScaleEvents_StatusUpdateEventEventHandler")," you will see the method signature."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scale/peekdefinition_c.png",mdxType:"Img"}))),(0,r.kt)("p",null,"For our purposes, we need to provide a fairly simple StatusUpdateEvent() method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'  static private void StatusUpdateEvent(int value)\n  {\n      int status = (int) scale.ResultCode;\n\n      if (value == (int)OPOSScaleConstants.SCAL_SUE_STABLE_WEIGHT)\n      {\n          Console.WriteLine(WeightFormat(scale.ScaleLiveWeight));\n      }\n      else if (value == (int)OPOSScaleConstants.SCAL_SUE_WEIGHT_UNSTABLE)\n      {\n          Console.WriteLine("Scale weight unstable");\n      }\n      else if (value == (int)OPOSScaleConstants.SCAL_SUE_WEIGHT_ZERO)\n      {\n          Console.WriteLine(WeightFormat(scale.ScaleLiveWeight));\n      }\n      else if (value == (int)OPOSScaleConstants.SCAL_SUE_WEIGHT_OVERWEIGHT)\n      {\n          Console.WriteLine("Weight limit exceeded.");\n      }\n      else if (value == (int)OPOSScaleConstants.SCAL_SUE_NOT_READY)\n      {\n          Console.WriteLine("Scale not ready.");\n      }\n      else if (value == (int)OPOSScaleConstants.SCAL_SUE_WEIGHT_UNDER_ZERO)\n      {\n          Console.WriteLine("Scale under zero weight.");\n      }\n      else\n      {\n          Console.WriteLine("Unknown status [{0}]", value);\n      }\n  }\n\n  static private string WeightFormat(int weight)\n  {\n      string weightStr = string.Empty;\n\n      string units = UnitAbbreviation(scale.WeightUnits);\n      if (units == string.Empty)\n      {\n          weightStr = string.Format("Unknown weight unit");\n      }\n      else\n      {\n          double dWeight = 0.001 * (double)weight;\n          weightStr = string.Format("{0:0.000} {1}", dWeight, units);\n      }\n\n      return weightStr;\n  }\n\n  static private string UnitAbbreviation(int units)\n  {\n      string unitStr = string.Empty;\n\n      switch ((OPOSScaleConstants)units)\n      {\n          case OPOSScaleConstants.SCAL_WU_GRAM: unitStr = "gr."; break;\n          case OPOSScaleConstants.SCAL_WU_KILOGRAM: unitStr = "kg."; break;\n          case OPOSScaleConstants.SCAL_WU_OUNCE: unitStr = "oz."; break;\n          case OPOSScaleConstants.SCAL_WU_POUND: unitStr = "lb."; break;\n      }\n\n      return unitStr;\n  }\n')),(0,r.kt)("h2",{id:"tying-it-all-together"},"Tying it all together"),(0,r.kt)("p",null,"All that remains to be done is to connect the scale object to the delegate method ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusUpdateEvent()")," and to write some simple thread management code."),(0,r.kt)("p",null," Connecting the scale object to the delegate method is done by simply adding the statement ",(0,r.kt)("inlineCode",{parentName:"p"},"scale.StatusUpdateEvent += StatusUpdateEvent;")," to your code."),(0,r.kt)("p",null,"Finally, a more complete example can be found in the ",(0,r.kt)("a",{parentName:"p",href:"./datalogicoposexamples"},"Datalogic OPOS Examples"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading;\nusing OPOSCONSTANTSLib;\nusing OposScale_CCO;\n\nnamespace CSharpScaleApp\n{\n    class Program\n    {\n        private static OPOSScaleClass scale;\n\n        static void Main(string[] args)\n        {\n            // Setup the console program to exit gracefully.\n            var exitEvent = new ManualResetEvent(false);\n            Console.CancelKeyPress += (sender, eventArgs) =>\n            {\n                eventArgs.Cancel = true;\n                exitEvent.Set();\n            };\n\n            // Create a scale object.\n            scale = new OPOSScaleClass();\n\n            // Open a context with the scale (e.g. "USBScale").\n            string profileName = "<your selected profile>";\n            scale.Open(profileName);\n\n            // Claim control of the scale using a 1000 millisecond timeout.\n            scale.ClaimDevice(1000);\n            if (scale.Claimed)\n            {\n                // Tell the scale we intend to perform "live" weighing.\n                scale.StatusNotify = (int)OPOSScaleConstants.SCAL_SN_ENABLED;\n                if (scale.ResultCode == (int)OPOS_Constants.OPOS_SUCCESS)\n                {\n                    // Subscribe to the delegate.\n                    scale.StatusUpdateEvent += StatusUpdateEvent;\n\n                    // Enable scale events.\n                    scale.DeviceEnabled = true;\n                    if (scale.DeviceEnabled)\n                    {\n                        // Enable event data transmission.\n                        scale.DataEventEnabled = true;\n\n                        // Wait for exit event.\n                        exitEvent.WaitOne();\n\n                        // Disable, release and close the scale.\n                        scale.DataEventEnabled = false;\n                    }\n\n                    // Unsubscribe from the delegate.\n                    scale.StatusUpdateEvent -= StatusUpdateEvent;\n                }\n\n                // Disable and release.\n                scale.DataEventEnabled = false;\n                scale.ReleaseDevice();\n            }\n\n            // Finally, close the scale context.\n            scale.Close();\n        }\n              \n        static private void StatusUpdateEvent(int value)\n        {\n            int status = (int) scale.ResultCode;\n\n            if (value == (int)OPOSScaleConstants.SCAL_SUE_STABLE_WEIGHT)\n            {\n                Console.WriteLine(WeightFormat(scale.ScaleLiveWeight));\n            }\n            else if (value == (int)OPOSScaleConstants.SCAL_SUE_WEIGHT_UNSTABLE)\n            {\n                Console.WriteLine("Scale weight unstable");\n            }\n            else if (value == (int)OPOSScaleConstants.SCAL_SUE_WEIGHT_ZERO)\n            {\n                Console.WriteLine(WeightFormat(scale.ScaleLiveWeight));\n            }\n            else if (value == (int)OPOSScaleConstants.SCAL_SUE_WEIGHT_OVERWEIGHT)\n            {\n                Console.WriteLine("Weight limit exceeded.");\n            }\n            else if (value == (int)OPOSScaleConstants.SCAL_SUE_NOT_READY)\n            {\n                Console.WriteLine("Scale not ready.");\n            }\n            else if (value == (int)OPOSScaleConstants.SCAL_SUE_WEIGHT_UNDER_ZERO)\n            {\n                Console.WriteLine("Scale under zero weight.");\n            }\n            else\n            {\n                Console.WriteLine("Unknown status [{0}]", value);\n            }\n        }\n\n        static private string WeightFormat(int weight)\n        {\n            string weightStr = string.Empty;\n\n            string units = UnitAbbreviation(scale.WeightUnits);\n            if (units == string.Empty)\n            {\n                weightStr = string.Format("Unknown weight unit");\n            }\n            else\n            {\n                double dWeight = 0.001 * (double)weight;\n                weightStr = string.Format("{0:0.000} {1}", dWeight, units);\n            }\n\n            return weightStr;\n        }\n\n        static private string UnitAbbreviation(int units)\n        {\n            string unitStr = string.Empty;\n\n            switch ((OPOSScaleConstants)units)\n            {\n                case OPOSScaleConstants.SCAL_WU_GRAM: unitStr = "gr."; break;\n                case OPOSScaleConstants.SCAL_WU_KILOGRAM: unitStr = "kg."; break;\n                case OPOSScaleConstants.SCAL_WU_OUNCE: unitStr = "oz."; break;\n                case OPOSScaleConstants.SCAL_WU_POUND: unitStr = "lb."; break;\n            }\n\n            return unitStr;\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);