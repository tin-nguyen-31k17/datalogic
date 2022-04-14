"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[6306],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25617:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={id:"samples",title:"Device Sync sample app",sidebar_label:"Sample Apps"},s=void 0,c={unversionedId:"cesync/samples",id:"cesync/samples",title:"Device Sync sample app",description:"A simple command line tool that makes use of the datalogic-ce-sync library.",source:"@site/docs/cesync/samples.md",sourceDirName:"cesync",slug:"/cesync/samples",permalink:"/cesync/samples",tags:[],version:"current",frontMatter:{id:"samples",title:"Device Sync sample app",sidebar_label:"Sample Apps"},sidebar:"CESyncSDK",previous:{title:"API",permalink:"/cesync/api"}},p={},u=[{value:"Run",id:"run",level:2},{value:"Commands",id:"commands",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Examples",id:"examples",level:2},{value:"To compile",id:"to-compile",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A simple command line tool that makes use of the ",(0,i.kt)("a",{parentName:"p",href:"/cesync/overview"},"datalogic-ce-sync")," library.\nAlso uses the nice ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/CommandLineParser/"},"CommandLineParser")," library."),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compiled versions are stored in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datalogic/device-sync/releases"},"releases")," folder."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"device-sync.exe")," will be located inside the ",(0,i.kt)("strong",{parentName:"li"},"device-sync")," folder in a given ZIP file."),(0,i.kt)("li",{parentName:"ul"},"Start a ",(0,i.kt)("strong",{parentName:"li"},"Command Prompt")," and ",(0,i.kt)("strong",{parentName:"li"},"cd")," in to the ",(0,i.kt)("strong",{parentName:"li"},"device-sync")," folder."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"device-sync.exe")," at a Command Prompt.  Yes, you must have all those .dll files in the same directory as the executable.")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"C:\\publish\\device-sync --help\ndevice-sync 1.0.0\nCopyright (C) 2018 device-sync\n\n  push       Push files to a device\n\n  pull       Pull files from a device\n\n  start      Start a process on the device\n\n  find       Search a directory on the device for directories and files whose names satisfy the mask.\n\n  mkdir      Create a new directory on the device.\n\n  touch      Sets the last modified time of a file on the device\n\n  delete     Delete a specified file from the device\n\n  help       Display more information on a specific command.\n\n  version    Display version information.\n")),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Commands are finicky with slash direction (backslash vs. forward-slash). Try both, but most use forward-slash.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"device-sync --help")," to get usage details."),(0,i.kt)("li",{parentName:"ul"},"Get command specific help, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"device-sync push --help"))),(0,i.kt)("h2",{id:"to-compile"},"To compile"),(0,i.kt)("p",null,"You will need DotNet Core 2.0 installed on your machine, which is available as part of Visual Studio 2017."),(0,i.kt)("p",null,"cd into the root project directory. Now run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet publish -c release -r win10-x64 --self-contained\n")),(0,i.kt)("p",null,"This will generate a folder containing device-sync.exe along with all necessary ",(0,i.kt)("inlineCode",{parentName:"p"},"dll"),"s, such that you can just drop the folder onto any Windows 7/8/10 PC and run the executable.  The folder is generated at:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bin/release/netcoreapp2.0/win10-x64/publish\n")))}d.isMDXComponent=!0}}]);