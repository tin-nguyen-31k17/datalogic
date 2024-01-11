"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[4233],{51898:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(85893),a=i(11151);const s={id:"overview",title:"MAUI / Xamarin SDK",sidebar_label:"Overview"},r=void 0,o={id:"xamarin/overview",title:"MAUI / Xamarin SDK",description:"The Datalogic MAUI / Xamarin SDK is distributed using NuGet.  More information can be found below.",source:"@site/docs/xamarin/overview.md",sourceDirName:"xamarin",slug:"/xamarin/overview",permalink:"/xamarin/overview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"MAUI / Xamarin SDK",sidebar_label:"Overview"},sidebar:"AndroidStudioSDK",previous:{title:"Porting Guide",permalink:"/javascript/zebra"},next:{title:"Frequently Asked Questions",permalink:"/xamarin/faq"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Standard API",id:"standard-api",level:3},{value:"Self-shopping API",id:"self-shopping-api",level:3},{value:"Using the SDK",id:"using-the-sdk",level:2},{value:"Install Visual Studio",id:"install-visual-studio",level:3},{value:"Create a MAUI Project",id:"create-a-maui-project",level:3},{value:"Create a Xamarin Project",id:"create-a-xamarin-project",level:3},{value:"NuGet",id:"nuget",level:3},{value:"Use the SDK",id:"use-the-sdk",level:3},{value:"Compile and Run",id:"compile-and-run",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Distribution",type:"tip",children:(0,t.jsxs)(n.p,{children:["The Datalogic MAUI / Xamarin SDK is distributed using ",(0,t.jsx)(n.a,{href:"https://www.nuget.org/packages/datalogic-xamarin-sdk",children:"NuGet"}),".  More information can be found ",(0,t.jsx)(n.a,{href:"#using-the-sdk",children:"below"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The Datalogic MAUI / Xamarin SDK allows developers to write Android apps using the ",(0,t.jsx)(n.code,{children:"C#"}),"  language to access features available on Datalogic Android devices. This can be done using either the .NET MAUI framework or the Xamarin platform, both available through Visual Studio. The Datalogic MAUI / Xamarin SDK is distributed as 2 separate APIs, the standard API, and the self-shopping API."]}),"\n",(0,t.jsx)(n.h3,{id:"standard-api",children:"Standard API"}),"\n",(0,t.jsx)(n.p,{children:"Provides essential APIs related to the device scanner and device itself."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://datalogic.github.io/xamarin-sdk-docs/html/R_Project_Documentation.htm",children:"Standard API documentation"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"self-shopping-api",children:"Self-shopping API"}),"\n",(0,t.jsxs)(n.p,{children:["Provides APIs related to the locking cradle available for use with ",(0,t.jsx)(n.code,{children:"Joya Touch Android"})," and ",(0,t.jsx)(n.code,{children:"Memor 1"})," devices."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/R_Project_Documentation.htm",children:"Self-shopping API documentation"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-sdk",children:"Using the SDK"}),"\n",(0,t.jsx)(n.h3,{id:"install-visual-studio",children:"Install Visual Studio"}),"\n",(0,t.jsxs)(n.p,{children:["MAUI development requires Visual Studio 2022. If you don't yet have Visual Studio installed with MAUI support, you can follow the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/maui/get-started/installation?view=net-maui-7.0&tabs=vswin",children:"Microsoft MAUI installation guide here"}),". Xamarin development requires either using Visual Studio on Windows or MacOS. Visual Studio 2022 is recommended. If you don't yet have Visual Studio installed with Xamarin support, follow ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/xamarin/get-started/installation/?pivots=windows-vs2022",children:"Microsoft's Installing Xamarin guide"})," here."]}),"\n",(0,t.jsx)(n.h3,{id:"create-a-maui-project",children:"Create a MAUI Project"}),"\n",(0,t.jsxs)(n.p,{children:["Open Visual Studio and select ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Create a new project"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"New Project",src:i(49891).Z+"",width:"1011",height:"675"})}),"\n",(0,t.jsxs)(n.p,{children:["In the New Project window, type ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"MAUI"})})," into the search bar at the top, and select ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:".NET MAUI App"})}),". Click through and select ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:".NET 6.0"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"New Project &gt; Android",src:i(85337).Z+"",width:"1008",height:"666"})}),"\n",(0,t.jsxs)(n.p,{children:["Your new project should now be created. In ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Solution Explorer"})}),", navigate to ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Platforms/Android/MainActivity.cs"})}),".\nYour window should now look similar to this:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MainActivity",src:i(7626).Z+"",width:"1368",height:"847"})}),"\n",(0,t.jsx)(n.p,{children:"Skip down to the NuGet section to learn how to install the Datalogic SDK."}),"\n",(0,t.jsx)(n.h3,{id:"create-a-xamarin-project",children:"Create a Xamarin Project"}),"\n",(0,t.jsxs)(n.p,{children:["Open Visual Studio and select ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Create a new project"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"New Project",src:i(49891).Z+"",width:"1011",height:"675"})}),"\n",(0,t.jsxs)(n.p,{children:["In the New Project window, type ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"android"})})," into the search bar at the top, and select ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Android App (Xamarin)"})}),". Click through and select ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Blank App"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"New Project &gt; Android",src:i(87061).Z+"",width:"1012",height:"671"})}),"\n",(0,t.jsxs)(n.p,{children:["Your new project should now be created. In ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Solution Explorer"})}),", find and open ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"MainActivity.cs"})}),".\nYour window should now look similar to this:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MainActivity",src:i(51318).Z+"",width:"1364",height:"819"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you would rather just start with an example Xamarin project that is already configured to use the Datalogic MAUI / Xamarin SDK, check out the ",(0,t.jsx)(n.a,{href:"/xamarin/samples",children:"DecodeListener"})," sample project."]})}),"\n",(0,t.jsx)(n.h3,{id:"nuget",children:"NuGet"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.nuget.org/",children:"NuGet"})," is a widely used package manager for .NET development that comes\npre-installed in Visual Studio. Datalogic uses NuGet to distribute the Datalogic MAUI / Xamarin SDK. ",(0,t.jsx)(n.strong,{children:"The installation is the same for both MAUI and Xamarin solutions"}),".\nFirst, open NuGet by navigating to ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Tools > NuGet Package Manager > Manage NuGet Packages for Solution"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"NuGet Open",src:i(50686).Z+"",width:"1368",height:"822"})}),"\n",(0,t.jsxs)(n.p,{children:["In the 'NuGet - Solution' tab, Click ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Browse"})}),". Type ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"datalogic"})})," in the search box.\nSelect the result titled ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"datalogic-xamarin-sdk"})}),". Next, select your project and click ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Install"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"NuGet Install",src:i(57465).Z+"",width:"1367",height:"818"})}),"\n",(0,t.jsx)(n.p,{children:"Click Installed at the top of the window. You will now see 'datalogic-xamarin-sdk'\nlisted as an installed package."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"NuGet Installed",src:i(10486).Z+"",width:"1368",height:"818"})}),"\n",(0,t.jsx)(n.p,{children:"You can now close the NuGet tab."}),"\n",(0,t.jsx)(n.h3,{id:"use-the-sdk",children:"Use the SDK"}),"\n",(0,t.jsxs)(n.p,{children:["You can now start using the SDK in your code. For example, open ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"MainActivity.cs"})})," inside your project.\nAdd this line in your code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"BarcodeManager decoder = null;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You should see that Intellisense is working for the Datalogic MAUI / Xamarin SDK as you type.\nAt this point, you could go over to the ",(0,t.jsx)(n.a,{href:"/xamarin/samples",children:"DecodeListener"}),"\nsample project to understand what is necessary to receive barcode data in your application."]}),"\n",(0,t.jsx)(n.h3,{id:"compile-and-run",children:"Compile and Run"}),"\n",(0,t.jsxs)(n.p,{children:["Connect your Datalogic mobile computer running Android to your computer via USB cable and click the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Run button"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"A",src:i(33988).Z+"",width:"300",height:"97"})}),"\n",(0,t.jsxs)(n.p,{children:["Congratulations, you are all set up! Head over to the ",(0,t.jsx)(n.a,{href:"/xamarin/samples",children:"Samples apps"}),"\nto learn how to use various parts of the Datalogic MAUI / Xamarin SDK."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7626:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/maui-MainActivity-1117686ac12cbaac409810a5a5123703.png"},85337:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/maui-new-project-484d011d8986d0ab1a8a79cd4d2ee1cf.png"},57465:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/nuget-install-864c8577f3dd5cc133122232d9624ef3.png"},10486:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/nuget-installed-b851388b3c3b49c3e5e238b0c5112c4e.png"},50686:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/nuget-open-ba09a191f45c404e210c4e2ff37061ee.png"},33988:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/visual-studio-run-9e0dbfedc2e230895b13acf5fb35e688.png"},51318:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/xamarin-MainActivity-9fa2dbfc6b1120c09e24e232c2be1a6e.png"},87061:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/xamarin-new-project-59a3203108bf74d7e9945bebc8c385e0.png"},49891:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/xamarin-new-b8b0e6c478deb8de43b8ec9fa625a7f1.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(67294);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);