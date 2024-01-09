"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[5234],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(87462),r=t(67294),o=t(86010),l=t(12466),i=t(16550),s=t(91980),c=t(67392),p=t(50012);function u(e){return function(e){var n,t;return null!=(n=null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:u(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=a.find((e=>e.default)))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[s,c]=g({queryString:t,groupId:a}),[u,h]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,o]=(0,p.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=null!=s?s:u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var v=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=c[t].value;a!==i&&(u(n),s(a))},m=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const n=p.indexOf(e.currentTarget)+1;t=null!=(a=p[n])?a:p[0];break}case"ArrowLeft":{var r;const n=p.indexOf(e.currentTarget)-1;t=null!=(r=p[n])?r:p[p.length-1];break}}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,n)),r.createElement(b,(0,a.Z)({},e,n)))}function N(e){const n=(0,v.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},18672:(e,n,t)=>{t.r(n),t.d(n,{Img:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));t(74866),t(85162);const o={id:"tutorialcsharpscanner",title:"C# Barcode Reader Tutorial",sidebar_label:"C# Barcode Reader Tutorial"},l=void 0,i={unversionedId:"opos/develop/tutorialcsharpscanner",id:"opos/develop/tutorialcsharpscanner",title:"C# Barcode Reader Tutorial",description:"Introduction",source:"@site/docs/opos/develop/tutorialcsharpscanner.md",sourceDirName:"opos/develop",slug:"/opos/develop/tutorialcsharpscanner",permalink:"/opos/develop/tutorialcsharpscanner",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorialcsharpscanner",title:"C# Barcode Reader Tutorial",sidebar_label:"C# Barcode Reader Tutorial"},sidebar:"OPOS",previous:{title:"C++ Live Weight Reader Tutorial",permalink:"/opos/develop/tutorialcppscale"},next:{title:"C# Live Weight Reader Tutorial",permalink:"/opos/develop/tutorialcsharpscale"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a project",id:"creating-a-project",level:2},{value:"Exposing OPOS control objects",id:"exposing-opos-control-objects",level:2},{value:"Creating the OPOS scanner object",id:"creating-the-opos-scanner-object",level:2},{value:"Accessing the OPOS Scanner interface",id:"accessing-the-opos-scanner-interface",level:2},{value:"Implementing event functions",id:"implementing-event-functions",level:3},{value:"Tying it all together",id:"tying-it-all-together",level:2}],p=e=>{let{src:n}=e;return(0,r.kt)("img",{src:n,style:{maxWidth:"750px",maxHeight:"750px"}})},u={toc:c,Img:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, we will be creating a simple console application in C# that opens, claims and enables a scanner device and provides a mechanism to see what labels were scanned with that device. This tutorial only covers a very basic aspect of development using OPOS with C#, but should suffice as a starting point for any application that looks to read labels from a Datalogic scanning device."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Developing an application for a Datalogic scanning device requires you to first have Datalogic's OPOS installed. The OPOS installer ensures the required ActiveX Controls are registered and any supporting files are present."),(0,r.kt)("h2",{id:"creating-a-project"},"Creating a project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using Visual Studio 2019, navigate to ",(0,r.kt)("strong",{parentName:"p"},"File > New > Project ...")),(0,r.kt)(p,{src:"/img/opos/develop/csharp/filenewproject.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Create a new project")," dialog, set the filter to ",(0,r.kt)("strong",{parentName:"p"},"C#"),", select ",(0,r.kt)("strong",{parentName:"p"},"Console App")," and select ",(0,r.kt)("strong",{parentName:"p"},"Next")),(0,r.kt)(p,{src:"/img/opos/develop/csharp/createnewproject.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Configure your new project")," dialog, declare your ",(0,r.kt)("strong",{parentName:"p"},"Project name"),", ",(0,r.kt)("strong",{parentName:"p"},"Location")," and ",(0,r.kt)("strong",{parentName:"p"},"Solution name")," as desired and then select ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scanner/configurenewproject.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Additional information")," dialog, make sure the Target Framework is set to ",(0,r.kt)("em",{parentName:"p"},".NET 5.0")," and then select ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/additionalinfo.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the project has initialized, you ",(0,r.kt)("strong",{parentName:"p"},"must create and use an x86 configuration"),"; failure to do this will result in the unhandled exception ",(0,r.kt)("em",{parentName:"p"},"80040154 Class not registered (0x80040154 (REGDB_E_CLASSNOTREG))")," when you run the application. The Configuration Manager can be accessed by navigating to ",(0,r.kt)("strong",{parentName:"p"},"Build > Configuration Manager..."),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scanner/newsolutionplatform.png",mdxType:"Img"}))),(0,r.kt)("h2",{id:"exposing-opos-control-objects"},"Exposing OPOS control objects"),(0,r.kt)("p",null,"The very first step is to reference the scanner ActiveX Control as a ",(0,r.kt)("inlineCode",{parentName:"p"},"dependency"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the Visual Studio 2019 ",(0,r.kt)("strong",{parentName:"p"},"Solution Explorer"),", right mouse click ",(0,r.kt)("strong",{parentName:"p"},"Dependencies")," and select ",(0,r.kt)("strong",{parentName:"p"},"Add COM Reference")," from the context menu."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scanner/addcomreference.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the ",(0,r.kt)("strong",{parentName:"p"},"Reference Manager")," dialog appears, filter on the keyword ",(0,r.kt)("strong",{parentName:"p"},"OPOS"),", select the ",(0,r.kt)("em",{parentName:"p"},"OPOS Scanner Control")," and then select OK."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scanner/addcomref.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At this point, expanding the ",(0,r.kt)("strong",{parentName:"p"},"Dependencies")," node of the ",(0,r.kt)("strong",{parentName:"p"},"Solution Explorer"),", you will see  ",(0,r.kt)("inlineCode",{parentName:"p"},"Interop.OposScanner_CCO"),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scanner/dependencies.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Near the top of your source file, add the statement ",(0,r.kt)("inlineCode",{parentName:"p"},"using OposScanner_CCO;")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing OPOSCONSTANTSLib;\nusing OposScanner_CCO;\n\nnamespace CSharpScannerApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"creating-the-opos-scanner-object"},"Creating the OPOS scanner object"),(0,r.kt)("p",null,"Creating the scanner object requires you to simply declare and instantiate it. However, if you attempt to build the application at this point you will encounter ",(0,r.kt)("em",{parentName:"p"},"error CS1752: Interop type 'OPOSScannerClass' cannot be embedded. Use the applicable interface instead.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing OposScanner_CCO;\n\nnamespace CSharpScannerApp\n{\n    class Program\n    {\n        private static OPOSScannerClass scanner;\n\n        static void Main(string[] args)\n        {\n            // Create a scanner object.\n            scanner = new OPOSScannerClass();\n        }\n    }\n}\n")),(0,r.kt)("p",null,"This issue is easily resolved by the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Expand the ",(0,r.kt)("strong",{parentName:"p"},"Dependencies")," and ",(0,r.kt)("strong",{parentName:"p"},"COM")," nodes in the ",(0,r.kt)("strong",{parentName:"p"},"Solution Explorer"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right mouse click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Interop.OposScanner_CCO")," and select ",(0,r.kt)("strong",{parentName:"p"},"Properties")," from the context menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"Embed Interop Types")," to ",(0,r.kt)("strong",{parentName:"p"},"No"),"."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scanner/embededproperty.png",mdxType:"Img"}))),(0,r.kt)("h2",{id:"accessing-the-opos-scanner-interface"},"Accessing the OPOS Scanner interface"),(0,r.kt)("p",null,"At this point, you are ready to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"scanner")," object."),(0,r.kt)("p",null,"The OPOS standard defines a general sequence to access a device:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"open"),": open a context to the device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"claim"),": claim control over the device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enable"),": enable the device's operation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disable"),": disable the device's  operation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"release"),": release control over the device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"close"),": close the context to the device")),(0,r.kt)("p",null,"Opening a scanner context requires you to reference a ",(0,r.kt)("em",{parentName:"p"},"device profile")," (a device profile simply being a name representing a set of parameters relevant to the device). When OPOS is installed, scanner profiles are seen as the subkey names installed under the UPOS-specified registry key ",(0,r.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\Software\\Wow6432Node\\OLEforRetail\\ServiceOPOS\\SCANNER"),". It is your choice whether you want to programmatically obtain the profile names from the registry or to simply hard-code them in your application."),(0,r.kt)("p",null,"If the scanner context is successfully opened, you can then claim the device, gaining exclusive access to it. And if the device is successfully claimed, you can then enable it to perform subsequent operations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing OposScanner_CCO;\n\nnamespace CSharpScannerApp\n{\n    class Program\n    {\n        private static OPOSScannerClass scanner;\n\n        static void Main(string[] args)\n        {\n            // Create a scanner object.\n            scanner = new OPOSScannerClass();\n\n            // Open a context with the scanner (e.g. "USBScanner").\n            string profileName = "<your selected profile>";\n            scanner.Open(profileName);\n\n            // Claim control of the scanner using a 1000 millisecond timeout.\n            scanner.ClaimDevice(1000);\n            if (scanner.Claimed)\n            {\n                // Enable the scanner and decoding events.\n                scanner.DeviceEnabled = true;\n                scanner.DataEventEnabled = true;\n                scanner.DecodeData = true;\n\n                //\n                // more to come .... \n                //\n\n                // Disable and release the scanner.\n                scanner.DataEventEnabled = false;\n                scanner.ReleaseDevice();\n            }\n\n            // Finally, close the scanner context.\n            scanner.Close();\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"implementing-event-functions"},"Implementing event functions"),(0,r.kt)("p",null,"At this point, the scanner object can act as a ",(0,r.kt)("em",{parentName:"p"},"sink")," (an object that receives input from the device). However, to make the application useful you must connect the scanner object to a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataEvent()")," method, allowing the application to retrieve the label data obtained by the scanner object."),(0,r.kt)("p",null,"To see the event methods of the associated interface class ",(0,r.kt)("inlineCode",{parentName:"p"},"_IOPOSScannerEvents_Event")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right mouse click on ",(0,r.kt)("inlineCode",{parentName:"p"},"OPOSScannerClass")," in your source code and then select ",(0,r.kt)("strong",{parentName:"p"},"Peek Definition")," from the context menu."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scanner/peekdefinition_a.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scrolling to the bottom of the displayed window you see four event methods."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scanner/peekdefinition_b.png",mdxType:"Img"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Placing your cursor over ",(0,r.kt)("inlineCode",{parentName:"p"},"_IOPOSScannerEvents_DataEventEventHandler")," you will see the method signature."),(0,r.kt)(p,{src:"/img/opos/develop/csharp/scanner/peekdefinition_c.png",mdxType:"Img"}))),(0,r.kt)("p",null,"For our purposes, we need to provide a simple DataEvent() method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'  static private void DataEvent(int value)\n  {\n      Console.WriteLine("Data: " + scanner.ScanDataLabel);\n      scanner.DataEventEnabled = true;\n  }\n')),(0,r.kt)("h2",{id:"tying-it-all-together"},"Tying it all together"),(0,r.kt)("p",null,"All that remains to be done is to connect the scanner object to the delegate method ",(0,r.kt)("inlineCode",{parentName:"p"},"DataEvent()")," and to write some simple thread management code."),(0,r.kt)("p",null," Connecting the scanner object to the delegate method is done by simply adding the statement ",(0,r.kt)("inlineCode",{parentName:"p"},"scanner.DataEvent += DataEvent;")," to your code."),(0,r.kt)("p",null,"Finally, a more complete example can be found in the ",(0,r.kt)("a",{parentName:"p",href:"./datalogicoposexamples"},"Datalogic OPOS Examples"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading;\nusing OposScanner_CCO;\n\nnamespace CSharpScannerApp\n{\n    class Program\n    {\n        private static OPOSScannerClass scanner;\n\n        static void Main(string[] args)\n        {\n            // Setup the console program to exit gracefully.\n            var exitEvent = new ManualResetEvent(false);\n            Console.CancelKeyPress += (sender, eventArgs) =>\n            {\n                eventArgs.Cancel = true;\n                exitEvent.Set();\n            };\n\n            // Create a scanner object.\n            scanner = new OPOSScannerClass();\n\n            // Open a context with the scanner (e.g. "USBScanner").\n            string profileName = "<your selected profile>";\n            scanner.Open(profileName);\n\n            // Claim control of the scanner using a 1000 millisecond timeout.\n            scanner.ClaimDevice(1000);\n            if (scanner.Claimed)\n            {\n                // Subscribe to the delegate.\n                scanner.DataEvent += DataEvent;\n\n                // Enable the scanner and decoding events.\n                scanner.DeviceEnabled = true;\n                scanner.DataEventEnabled = true;\n                scanner.DecodeData = true;\n\n                // Wait for exit event (meanwhile handling scanner events).\n                exitEvent.WaitOne();\n\n                // Unsubscribe from the delegate.\n                scanner.DataEvent -= DataEvent;\n\n                // Disable and release the scanner.\n                scanner.DataEventEnabled = false;\n                scanner.ReleaseDevice();\n            }\n\n            // Finally, close the scanner context.\n            scanner.Close();\n        }\n\n        static private void DataEvent(int value)\n        {\n            Console.WriteLine("Data: " + scanner.ScanDataLabel);\n            scanner.DataEventEnabled = true;\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);