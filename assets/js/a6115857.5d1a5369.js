"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[4233],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62693:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"overview",title:"MAUI / Xamarin SDK",sidebar_label:"Overview"},s=void 0,p={unversionedId:"xamarin/overview",id:"xamarin/overview",title:"MAUI / Xamarin SDK",description:"The Datalogic MAUI / Xamarin SDK is distributed using NuGet.  More information can be found below.",source:"@site/docs/xamarin/overview.md",sourceDirName:"xamarin",slug:"/xamarin/overview",permalink:"/xamarin/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"MAUI / Xamarin SDK",sidebar_label:"Overview"},sidebar:"XamarinSDK",next:{title:"Frequently Asked Questions",permalink:"/xamarin/faq"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Standard API",id:"standard-api",level:3},{value:"Self-shopping API",id:"self-shopping-api",level:3},{value:"Using the SDK",id:"using-the-sdk",level:2},{value:"Install Visual Studio",id:"install-visual-studio",level:3},{value:"Create a MAUI Project",id:"create-a-maui-project",level:3},{value:"Create a Xamarin Project",id:"create-a-xamarin-project",level:3},{value:"NuGet",id:"nuget",level:3},{value:"Use the SDK",id:"use-the-sdk",level:3},{value:"Compile and Run",id:"compile-and-run",level:3}],d={toc:c},m="wrapper";function g(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Distribution",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Datalogic MAUI / Xamarin SDK is distributed using ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/datalogic-xamarin-sdk"},"NuGet"),".  More information can be found ",(0,i.kt)("a",{parentName:"p",href:"/xamarin/overview#using-the-sdk"},"below"),".")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Datalogic MAUI / Xamarin SDK allows developers to write Android apps using the ",(0,i.kt)("inlineCode",{parentName:"p"},"C#"),"  language to access features available on Datalogic Android devices. This can be done using either the .NET MAUI framework or the Xamarin platform, both available through Visual Studio. The Datalogic MAUI / Xamarin SDK is distributed as 2 separate APIs, the standard API, and the self-shopping API."),(0,i.kt)("h3",{id:"standard-api"},"Standard API"),(0,i.kt)("p",null,"Provides essential APIs related to the device scanner and device itself."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datalogic.github.io/xamarin-sdk-docs/html/R_Project_Documentation.htm"},"Standard API documentation"))),(0,i.kt)("h3",{id:"self-shopping-api"},"Self-shopping API"),(0,i.kt)("p",null,"Provides APIs related to the locking cradle available for use with ",(0,i.kt)("inlineCode",{parentName:"p"},"Joya Touch Android")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Memor 1")," devices."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/R_Project_Documentation.htm"},"Self-shopping API documentation"))),(0,i.kt)("h2",{id:"using-the-sdk"},"Using the SDK"),(0,i.kt)("h3",{id:"install-visual-studio"},"Install Visual Studio"),(0,i.kt)("p",null,"MAUI development requires Visual Studio 2022. If you don't yet have Visual Studio installed with MAUI support, you can follow the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/maui/get-started/installation?view=net-maui-7.0&tabs=vswin"},"Microsoft MAUI installation guide here"),". Xamarin development requires either using Visual Studio on Windows or MacOS. Visual Studio 2022 is recommended. If you don't yet have Visual Studio installed with Xamarin support, follow ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/xamarin/get-started/installation/?pivots=windows-vs2022"},"Microsoft's Installing Xamarin guide")," here."),(0,i.kt)("h3",{id:"create-a-maui-project"},"Create a MAUI Project"),(0,i.kt)("p",null,"Open Visual Studio and select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Create a new project"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New Project",src:a(49891).Z,width:"1011",height:"675"})),(0,i.kt)("p",null,"In the New Project window, type ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"MAUI"))," into the search bar at the top, and select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},".NET MAUI App")),". Click through and select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},".NET 6.0")),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New Project &gt; Android",src:a(85337).Z,width:"1008",height:"666"})),(0,i.kt)("p",null,"Your new project should now be created. In ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Solution Explorer")),", navigate to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Platforms/Android/MainActivity.cs")),".\nYour window should now look similar to this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MainActivity",src:a(7626).Z,width:"1368",height:"847"})),(0,i.kt)("p",null,"Skip down to the NuGet section to learn how to install the Datalogic SDK."),(0,i.kt)("h3",{id:"create-a-xamarin-project"},"Create a Xamarin Project"),(0,i.kt)("p",null,"Open Visual Studio and select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Create a new project"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New Project",src:a(49891).Z,width:"1011",height:"675"})),(0,i.kt)("p",null,"In the New Project window, type ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"android"))," into the search bar at the top, and select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Android App (Xamarin)")),". Click through and select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Blank App")),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New Project &gt; Android",src:a(87061).Z,width:"1012",height:"671"})),(0,i.kt)("p",null,"Your new project should now be created. In ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Solution Explorer")),", find and open ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"MainActivity.cs")),".\nYour window should now look similar to this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MainActivity",src:a(51318).Z,width:"1364",height:"819"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you would rather just start with an example Xamarin project that is already configured to use the Datalogic MAUI / Xamarin SDK, check out the ",(0,i.kt)("a",{parentName:"p",href:"/xamarin/samples"},"DecodeListener")," sample project.")),(0,i.kt)("h3",{id:"nuget"},"NuGet"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/"},"NuGet")," is a widely used package manager for .NET development that comes\npre-installed in Visual Studio. Datalogic uses NuGet to distribute the Datalogic MAUI / Xamarin SDK. ",(0,i.kt)("strong",{parentName:"p"},"The installation is the same for both MAUI and Xamarin solutions"),".\nFirst, open NuGet by navigating to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Tools > NuGet Package Manager > Manage NuGet Packages for Solution")),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"NuGet Open",src:a(50686).Z,width:"1368",height:"822"})),(0,i.kt)("p",null,"In the 'NuGet - Solution' tab, Click ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Browse")),". Type ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"datalogic"))," in the search box.\nSelect the result titled ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"datalogic-xamarin-sdk")),". Next, select your project and click ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Install")),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"NuGet Install",src:a(57465).Z,width:"1367",height:"818"})),(0,i.kt)("p",null,"Click Installed at the top of the window. You will now see 'datalogic-xamarin-sdk'\nlisted as an installed package."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"NuGet Installed",src:a(10486).Z,width:"1368",height:"818"})),(0,i.kt)("p",null,"You can now close the NuGet tab."),(0,i.kt)("h3",{id:"use-the-sdk"},"Use the SDK"),(0,i.kt)("p",null,"You can now start using the SDK in your code. For example, open ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"MainActivity.cs"))," inside your project.\nAdd this line in your code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C#"},"BarcodeManager decoder = null;\n")),(0,i.kt)("p",null,"You should see that Intellisense is working for the Datalogic MAUI / Xamarin SDK as you type.\nAt this point, you could go over to the ",(0,i.kt)("a",{parentName:"p",href:"/xamarin/samples"},"DecodeListener"),"\nsample project to understand what is necessary to receive barcode data in your application."),(0,i.kt)("h3",{id:"compile-and-run"},"Compile and Run"),(0,i.kt)("p",null,"Connect your Datalogic mobile computer running Android to your computer via USB cable and click the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Run button")),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A",src:a(33988).Z,width:"300",height:"97"})),(0,i.kt)("p",null,"Congratulations, you are all set up! Head over to the ",(0,i.kt)("a",{parentName:"p",href:"/xamarin/samples"},"Samples apps"),"\nto learn how to use various parts of the Datalogic MAUI / Xamarin SDK."))}g.isMDXComponent=!0},7626:function(e,t,a){t.Z=a.p+"assets/images/maui-MainActivity-1117686ac12cbaac409810a5a5123703.png"},85337:function(e,t,a){t.Z=a.p+"assets/images/maui-new-project-484d011d8986d0ab1a8a79cd4d2ee1cf.png"},57465:function(e,t,a){t.Z=a.p+"assets/images/nuget-install-864c8577f3dd5cc133122232d9624ef3.png"},10486:function(e,t,a){t.Z=a.p+"assets/images/nuget-installed-b851388b3c3b49c3e5e238b0c5112c4e.png"},50686:function(e,t,a){t.Z=a.p+"assets/images/nuget-open-ba09a191f45c404e210c4e2ff37061ee.png"},33988:function(e,t,a){t.Z=a.p+"assets/images/visual-studio-run-9e0dbfedc2e230895b13acf5fb35e688.png"},51318:function(e,t,a){t.Z=a.p+"assets/images/xamarin-MainActivity-9fa2dbfc6b1120c09e24e232c2be1a6e.png"},87061:function(e,t,a){t.Z=a.p+"assets/images/xamarin-new-project-59a3203108bf74d7e9945bebc8c385e0.png"},49891:function(e,t,a){t.Z=a.p+"assets/images/xamarin-new-b8b0e6c478deb8de43b8ec9fa625a7f1.png"}}]);