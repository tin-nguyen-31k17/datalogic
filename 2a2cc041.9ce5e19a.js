(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),i=(t(0),t(299)),c={id:"samples",title:"Device Sync sample app",sidebar_label:"Sample Apps"},o={unversionedId:"cesync/samples",id:"cesync/samples",isDocsHomePage:!1,title:"Device Sync sample app",description:"A simple command line tool that makes use of the datalogic-ce-sync library.",source:"@site/docs/cesync/samples.md",slug:"/cesync/samples",permalink:"/cesync/samples",version:"current",sidebar_label:"Sample Apps",sidebar:"CESyncSDK",previous:{title:"CE Device Sync API",permalink:"/cesync/api"}},l=[{value:"Run",id:"run",children:[]},{value:"Commands",id:"commands",children:[]},{value:"Known issues",id:"known-issues",children:[]},{value:"Examples",id:"examples",children:[]},{value:"To compile",id:"to-compile",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A simple command line tool that makes use of the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/cesync/overview"}),"datalogic-ce-sync")," library.\nAlso uses the nice ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nuget.org/packages/CommandLineParser/"}),"CommandLineParser")," library."),Object(i.b)("h2",{id:"run"},"Run"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Compiled versions are stored in the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/datalogic/device-sync/releases"}),"releases")," folder."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"device-sync.exe")," will be located inside the ",Object(i.b)("strong",{parentName:"li"},"device-sync")," folder in a given ZIP file."),Object(i.b)("li",{parentName:"ul"},"Start a ",Object(i.b)("strong",{parentName:"li"},"Command Prompt")," and ",Object(i.b)("strong",{parentName:"li"},"cd")," in to the ",Object(i.b)("strong",{parentName:"li"},"device-sync")," folder."),Object(i.b)("li",{parentName:"ul"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"device-sync.exe")," at a Command Prompt.  Yes, you must have all those .dll files in the same directory as the executable.")),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"C:\\publish\\device-sync --help\ndevice-sync 1.0.0\nCopyright (C) 2018 device-sync\n\n  push       Push files to a device\n\n  pull       Pull files from a device\n\n  start      Start a process on the device\n\n  find       Search a directory on the device for directories and files whose names satisfy the mask.\n\n  mkdir      Create a new directory on the device.\n\n  touch      Sets the last modified time of a file on the device\n\n  delete     Delete a specified file from the device\n\n  help       Display more information on a specific command.\n\n  version    Display version information.\n")),Object(i.b)("h2",{id:"known-issues"},"Known issues"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Commands are finicky with slash direction (backslash vs. forward-slash). Try both, but most use forward-slash.")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"device-sync --help")," to get usage details."),Object(i.b)("li",{parentName:"ul"},"Get command specific help, for example: ",Object(i.b)("inlineCode",{parentName:"li"},"device-sync push --help"))),Object(i.b)("h2",{id:"to-compile"},"To compile"),Object(i.b)("p",null,"You will need DotNet Core 2.0 installed on your machine, which is available as part of Visual Studio 2017."),Object(i.b)("p",null,"cd into the root project directory. Now run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"dotnet publish -c release -r win10-x64 --self-contained\n")),Object(i.b)("p",null,"This will generate a folder containing device-sync.exe along with all necessary ",Object(i.b)("inlineCode",{parentName:"p"},"dll"),"s, such that you can just drop the folder onto any Windows 7/8/10 PC and run the executable.  The folder is generated at:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"bin/release/netcoreapp2.0/win10-x64/publish\n")))}p.isMDXComponent=!0},299:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||i;return t?a.a.createElement(m,o(o({ref:n},s),{},{components:t})):a.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);