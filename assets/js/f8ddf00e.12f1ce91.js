"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[1934],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),g=c(n),s=r,N=g["".concat(o,".").concat(s)]||g[s]||m[s]||i;return n?a.createElement(N,l(l({ref:e},d),{},{components:n})):a.createElement(N,l({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19278:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],p={id:"eciencodingcsv",title:"ECI Encoding Configuration Reference",sidebar_label:"ECIEncoding.csv"},o=void 0,c={unversionedId:"javapos/configref/eciencodingcsv",id:"javapos/configref/eciencodingcsv",title:"ECI Encoding Configuration Reference",description:"Overview",source:"@site/docs/javapos/configref/eciencodingcsv.md",sourceDirName:"javapos/configref",slug:"/javapos/configref/eciencodingcsv",permalink:"/javapos/configref/eciencodingcsv",tags:[],version:"current",frontMatter:{id:"eciencodingcsv",title:"ECI Encoding Configuration Reference",sidebar_label:"ECIEncoding.csv"},sidebar:"JavaPOS",previous:{title:"dls.properties",permalink:"/javapos/configref/dlsproperties"},next:{title:"IHSParser.csv",permalink:"/javapos/configref/ihsparsercsv"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2},{value:"Default configuration file",id:"default-configuration-file",level:2}],g={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ECIEncoding.csv file contains the Extended Channel Interpretation (ECI) mappings supported by JavaPOS. ECI provides a method for transmiting additional data within a barcode to the host, most often used to encode national character sets into barcodes that are usually unsupported. ",(0,i.kt)("strong",{parentName:"p"},"Care must be taken changing any value in this file, and is not recommended.")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"To enable ECI, set the ",(0,i.kt)("a",{parentName:"p",href:"/javapos/configref/dlsproperties#enableeci"},"EnableECI")," property to true and configure the ",(0,i.kt)("a",{parentName:"p",href:"/javapos/configref/dlsproperties#eciencodingfile"},"ECIEncodingFile")," property (if necessary) within the ",(0,i.kt)("a",{parentName:"p",href:"/javapos/configref/dlsproperties"},"dls.properties")," file."),(0,i.kt)("p",null,"Supported ECI codes and encodings:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"ECI Code"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Java Encoding"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 15438 Bar code symbology specification-PDF417: Default character set to 1994 specification with GLI rules")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 15438 Bar code symbology specification-PDF417: Latin 1 character set to 1994 specification with GLI rules")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 15438 Bar code symbology specification-PDF417: Default character set with ECI rules")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_1"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-1 Latin alphabet No. 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_2"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-2 Latin alphabet No. 2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_3"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-3 Latin alphabet No. 3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"6"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_4"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-4 Latin alphabet No. 4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"7"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_5"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-5 Latin/Cyrillic alphabet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"8"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_6"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-6 Latin/Arabic alphabet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_7"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-7 Latin/Greek alphabet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"10"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_8"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-8 Latin/Hebrew alphabet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"11"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_9"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-9 Latin alphabet No. 5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"12"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-10 Latin alphabet No. 6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"13"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cp874"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-11 Latin/Thai alphabet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"14"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"Reserved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"15"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_13"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-13 Latin alphabet No. 7 (Baltic Rim)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"16"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-14 Latin alphabet No. 8 (Celtic)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"17"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO8859_15"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-15 Latin alphabet No. 9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"18"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 8859-16 Latin alphabet No. 10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"19"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"Reserved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"20"),(0,i.kt)("td",{parentName:"tr",align:"center"},"SJIS"),(0,i.kt)("td",{parentName:"tr",align:null},"Shift JIS (JIS X 0208 Annex 1 + JIS X 0201)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"21"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cp1250"),(0,i.kt)("td",{parentName:"tr",align:null},"Windows 1250 Latin 2 (Central Europe)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"22"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cp1251"),(0,i.kt)("td",{parentName:"tr",align:null},"Windows 1251 Cyrillic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"23"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cp1252"),(0,i.kt)("td",{parentName:"tr",align:null},"Windows 1252 Latin 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"24"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cp1256"),(0,i.kt)("td",{parentName:"tr",align:null},"Windows 1256 Arabic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"25"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UTF-16"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 10646 UCS-2 (High order byte first)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"26"),(0,i.kt)("td",{parentName:"tr",align:"center"},"UTF8"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 10646 UTF-8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"27"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO/IEC 646:1991 International Reference Version of ISO 7-bit coded character set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"28"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Big5"),(0,i.kt)("td",{parentName:"tr",align:null},"Big 5 (Taiwan) Chinese Character Set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"29"),(0,i.kt)("td",{parentName:"tr",align:"center"},"GB18030"),(0,i.kt)("td",{parentName:"tr",align:null},"GB (PRC) Chinese Character Set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"30"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cp949"),(0,i.kt)("td",{parentName:"tr",align:null},"Korean Character Set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"899"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unsupported"),(0,i.kt)("td",{parentName:"tr",align:null},"8-bit binary data")))),(0,i.kt)("h2",{id:"default-configuration-file"},"Default configuration file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//Lines beginning with '//' will be ignored by parser.,,\n//DO NOT CHANGE FORMATTING, entries must remain in the format of following header line with a minimum of <ECI_CODE>,<JAVA_ENCODING>\n//ECI Code (integer), Java Encoding (empty field means unsupported), Optional Description (ignored by parser)\n0,, ISO/IEC 15438 Bar code symbology specification-PDF417: Default character set to 1994 specification with GLI rules\n1,, ISO/IEC 15438 Bar code symbology specification-PDF417: Latin 1 character set to 1994 specification with GLI rules\n2,, ISO/IEC 15438 Bar code symbology specification-PDF417: Default character set with ECI rules\n3,ISO8859_1, ISO/IEC 8859-1 Latin alphabet No. 1\n4,ISO8859_2, ISO/IEC 8859-2 Latin alphabet No. 2\n5,ISO8859_3, ISO/IEC 8859-3 Latin alphabet No. 3\n6,ISO8859_4, ISO/IEC 8859-4 Latin alphabet No. 4\n7,ISO8859_5, ISO/IEC 8859-5 Latin/Cyrillic alphabet\n8,ISO8859_6, ISO/IEC 8859-6 Latin/Arabic alphabet\n9,ISO8859_7, ISO/IEC 8859-7 Latin/Greek alphabet\n10,ISO8859_8, ISO/IEC 8859-8 Latin/Hebrew alphabet\n11,ISO8859_9, ISO/IEC 8859-9 Latin alphabet No. 5\n12,, ISO/IEC 8859-10 Latin alphabet No. 6\n13,Cp874, ISO/IEC 8859-11 Latin/Thai alphabet\n14,, Reserved\n15,ISO8859_13, ISO/IEC 8859-13 Latin alphabet No. 7 (Baltic Rim)\n16,, ISO/IEC 8859-14 Latin alphabet No. 8 (Celtic)\n17,ISO8859_15, ISO/IEC 8859-15 Latin alphabet No. 9\n18,, ISO/IEC 8859-16 Latin alphabet No. 10\n19,, Reserved\n20,SJIS, Shift JIS (JIS X 0208 Annex 1 + JIS X 0201)\n21,Cp1250, Windows 1250 Latin 2 (Central Europe)\n22,Cp1251, Windows 1251 Cyrillic\n23,Cp1252, Windows 1252 Latin 1\n24,Cp1256, Windows 1256 Arabic\n25,UTF-16, ISO/IEC 10646 UCS-2 (High order byte first)\n26,UTF8, ISO/IEC 10646 UTF-8\n27,, ISO/IEC 646:1991 International Reference Version of ISO 7-bit coded character set\n28,Big5, Big 5 (Taiwan) Chinese Character Set\n29,GB18030, GB (PRC) Chinese Character Set\n30,Cp949, Korean Character Set\n899,, 8-bit binary data\n")))}s.isMDXComponent=!0}}]);