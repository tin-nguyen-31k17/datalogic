"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[392],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),v=a,f=p["".concat(c,".").concat(v)]||p[v]||d[v]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},88650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"overview",title:"CE Sync SDK",sidebar_label:"Overview"},c=void 0,u={unversionedId:"cesync/overview",id:"cesync/overview",title:"CE Sync SDK",description:"The Android SDK is distributed using NuGet.  More information can be found below.",source:"@site/docs/cesync/overview.md",sourceDirName:"cesync",slug:"/cesync/overview",permalink:"/cesync/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"CE Sync SDK",sidebar_label:"Overview"},sidebar:"CESyncSDK",next:{title:"API",permalink:"/cesync/api"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Version History",id:"version-history",level:2},{value:"v1.0.6",id:"v106",level:3},{value:"v1.0.5",id:"v105",level:3},{value:"v1.0.4",id:"v104",level:3},{value:"v1.0.3-alpha",id:"v103-alpha",level:3}],d={toc:p},v="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(v,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Distribution",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Android SDK is distributed using ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/datalogic-ce-sync"},"NuGet"),".  More information can be found ",(0,i.kt)("a",{parentName:"p",href:"/cesync/overview#overview"},"below"),".")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Datalogic CE Sync SDK allows you to communicate with Datalogic CE devices ",(0,i.kt)("a",{parentName:"p",href:"/usblan/overview"},"over USBLAN connections"),". The USBLAN driver must first be installed in order to use the CE Sync SDK."),(0,i.kt)("p",null,"If you want to see a sample app that uses the CE Sync SDK, take a look at the source code for our ",(0,i.kt)("a",{parentName:"p",href:"/cesync/samples"},"Device Sync command line tool"),". It's an easy to use command line tool that exercises all the features of the CE Sync SDK. Executables are provided as well as source code."),(0,i.kt)("p",null,"Datalogic uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/"},"NuGet")," to distribute the CE sync SDK. NuGet is a widely used package manager for .NET development that comes preinstalled in Visual Studio. You can access the package ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/datalogic-ce-sync"},"on Nuget here"),". The package can be included in your project as described on the Nuget page. The most convenient way to access NuGet is probably to open your project in Visual Studio, and navigate to ",(0,i.kt)("strong",{parentName:"p"},"Tools > NuGet Package Manager > Manage NuGet Packages for Solution"),"."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"The CE Sync SDK can be used to perform the following actions on the connected device:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"start processes"),(0,i.kt)("li",{parentName:"ul"},"list files and directories"),(0,i.kt)("li",{parentName:"ul"},"create directories"),(0,i.kt)("li",{parentName:"ul"},"push and pull files"),(0,i.kt)("li",{parentName:"ul"},"set file timestamps"),(0,i.kt)("li",{parentName:"ul"},"delete files")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/cesync/api"},"API documentation")," for more details."),(0,i.kt)("h2",{id:"version-history"},"Version History"),(0,i.kt)("h3",{id:"v106"},"v1.0.6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check for both slashes when transferring files")),(0,i.kt)("h3",{id:"v105"},"v1.0.5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"set HttpClient default timeout to infinite to support large file transfers (400MB+)"),(0,i.kt)("li",{parentName:"ul"},"remove unused delegate")),(0,i.kt)("h3",{id:"v104"},"v1.0.4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"support larger file transfers"),(0,i.kt)("li",{parentName:"ul"},"fixed bug involving the FindFiles() and FindDirectories() methods")),(0,i.kt)("h3",{id:"v103-alpha"},"v1.0.3-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initial release")))}f.isMDXComponent=!0}}]);