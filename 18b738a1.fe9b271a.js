(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{171:function(e,t,i){"use strict";i.d(t,"a",(function(){return m})),i.d(t,"b",(function(){return O}));var r=i(0),n=i.n(r);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=n.a.createContext({}),b=function(e){var t=n.a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},m=function(e){var t=b(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=b(i),p=r,O=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return i?n.a.createElement(O,c(c({ref:t},o),{},{components:i})):n.a.createElement(O,c({ref:t},o))}));function O(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<a;o++)l[o]=i[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},69:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return b}));var r=i(2),n=i(6),a=(i(0),i(171)),l={title:"CE Device Sync API",sidebar_label:"API"},c={unversionedId:"cesync/api",id:"cesync/api",isDocsHomePage:!1,title:"CE Device Sync API",description:"static class USBLAN",source:"@site/docs/cesync/api.md",slug:"/cesync/api",permalink:"/cesync/api",version:"current",sidebar_label:"API",sidebar:"CESyncSDK",previous:{title:"CE Sync SDK",permalink:"/cesync/overview"},next:{title:"Device Sync sample app",permalink:"/cesync/samples"}},s=[{value:"static class USBLAN",id:"static-class-usblan",children:[{value:"Methods",id:"methods",children:[]}]},{value:"class SimpleFileInfo",id:"class-simplefileinfo",children:[{value:"Members",id:"members",children:[]},{value:"Constructors",id:"constructors",children:[]}]}],o={rightToc:s};function b(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"static-class-usblan"},"static class USBLAN"),Object(a.b)("h3",{id:"methods"},"Methods"),Object(a.b)("h4",{id:"static-bool-startprocessstring-exec-string-params"},"static bool StartProcess(string exec, string params)"),Object(a.b)("p",null,"Start a process on the device."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Parameters"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string exe"),": Path to the program to execute."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string parms"),": Parameters to send to exe. If using multiple parameters, seperate with a space."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Returns"),": True if process successfully started, or was already running. False otherwise.")),Object(a.b)("hr",null),Object(a.b)("h4",{id:"static-ienumerablesimplefileinfo-findfilesstring-directory-string-mask"},"static IEnumerable\\<SimpleFileInfo",">"," FindFiles(string directory, string mask)"),Object(a.b)("p",null," Search a directory on the device for files whose names satisfy the mask."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Parameters"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string directory"),": Path to the directory on device to search inside."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string mask"),": Name or pattern to search."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Returns"),": IEnumerable of the query results. Entries contain info on files. Null if an error occured.")),Object(a.b)("hr",null),Object(a.b)("h4",{id:"static-ienumerablesimplefileinfo-finddirectoriesstring-directory-string-mask"},"static IEnumerable\\<SimpleFileInfo",">"," FindDirectories(string directory, string mask)"),Object(a.b)("p",null," Search a directory on the device for directories whose names satisfy the mask."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Parameters"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string directory"),": Path to the directory on device to search inside."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string mask"),": Name or pattern to search."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Returns"),": IEnumerable of the query results. Entries contain info on directories. Null if an error occured.")),Object(a.b)("hr",null),Object(a.b)("h4",{id:"static-bool-createdirectorystring-devicedirname"},"static bool CreateDirectory(string deviceDirName)"),Object(a.b)("p",null," Create a new directory on the device."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Parameters"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string deviceDirName"),": The path to the new directory on the device."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Returns"),": True if directory did not already exist and was successfully created. False otherwise.")),Object(a.b)("hr",null),Object(a.b)("h4",{id:"static-bool-pushfiletodevicestring-localfilepath-string-devicefilepath-bool-replaceexisting"},"static bool PushFileToDevice(string localFilePath, string deviceFilePath, bool replaceExisting)"),Object(a.b)("p",null," Copy a file from the host machine to the device."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Parameters"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string localFilePath"),": Source path on host."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string deviceFilePath"),": Destination path on device."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"bool replaceExisting"),": Should an existing file be overwritten?"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Returns"),": True if file successfully copied to device, False otherwise.")),Object(a.b)("hr",null),Object(a.b)("h4",{id:"static-bool-pullfilefromdevicestring-devicefilepath-string-localfilepath-bool-replaceexisting"},"static bool PullFileFromDevice(string deviceFilePath, string localFilePath, bool replaceExisting)"),Object(a.b)("p",null," Copy a file from the device to the host machine."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Parameters"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string deviceFilePath"),": Source path on device."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string localFilePath"),": Destination path on host."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"bool replaceExisting"),": Should an existing file be overwritten?"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Returns"),": True if file successfully pulled from device and written to local file, False otherwise.")),Object(a.b)("hr",null),Object(a.b)("h4",{id:"static-bool-setfiledatetimestring-devicefilepath-datetime-lastwritedatetime"},"static bool SetFileDateTime(string deviceFilePath, DateTime lastWriteDateTime)"),Object(a.b)("p",null," Set the last modified time of a file on the device."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Parameters"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string deviceFilePath"),": Path to file on device."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DateTime lastWriteDateTime"),": The time the file will be set to."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Returns"),": True if time on file is successfully set, False otherwise.")),Object(a.b)("hr",null),Object(a.b)("h4",{id:"static-bool-deletefilestring-devicefilepath"},"static bool DeleteFile(string deviceFilePath)"),Object(a.b)("p",null," Delete a specified file from the device."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Parameters"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string deviceFilePath"),": Path to file on device."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Returns"),": True if file found, file is not Read-only, and file successfully deleted from device. False otherwise.")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"class-simplefileinfo"},"class SimpleFileInfo"),Object(a.b)("h3",{id:"members"},"Members"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string Name"),": The name of the file."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string DirectoryName"),": The path of the directory the file is in."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string Extension"),": The file extension."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string fullName"),": The full file path."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DateTime LastWriteTime"),": The last time the file was modified."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"long Length"),": Length of the file.")),Object(a.b)("h3",{id:"constructors"},"Constructors"),Object(a.b)("h4",{id:"simplefileinfoiofileinfo-fi"},"SimpleFileInfo(IO.FileInfo fi)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"FileInfo fi"),": Make a new object representing this object.")),Object(a.b)("h4",{id:"simplefileinfostring-fullname-long-length-datetime-lastwritetime"},"SimpleFileInfo(string fullName, long length, DateTime lastWriteTime)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"string fullName"),": Full file path."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"long length"),": Length of the file."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DateTime lastWriteTime"),": Last modified time.")))}b.isMDXComponent=!0}}]);