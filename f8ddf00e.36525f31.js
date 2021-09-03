(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{267:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),c=(a(0),a(277)),b={id:"eciencodingcsv",title:"ECI Encoding Configuration Reference",sidebar_label:"ECIEncoding.csv"},i={unversionedId:"javapos/configref/eciencodingcsv",id:"javapos/configref/eciencodingcsv",isDocsHomePage:!1,title:"ECI Encoding Configuration Reference",description:"Overview",source:"@site/docs/javapos/configref/eciencodingcsv.md",slug:"/javapos/configref/eciencodingcsv",permalink:"/javapos/configref/eciencodingcsv",version:"current",sidebar_label:"ECIEncoding.csv",sidebar:"JavaPOS",previous:{title:"dls.properties Reference",permalink:"/javapos/configref/dlsproperties"},next:{title:"IHSParser Configuration Reference",permalink:"/javapos/configref/ihsparsercsv"}},O=[{value:"Overview",id:"overview",children:[]},{value:"Reference",id:"reference",children:[]},{value:"Default configuration file",id:"default-configuration-file",children:[]}],l={rightToc:O};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"The ECIEncoding.csv file contains the Extended Channel Interpretation (ECI) mappings supported by JavaPOS. ECI provides a method for transmiting additional data within a barcode to the host, most often used to encode national character sets into barcodes that are usually unsupported. ",Object(c.b)("strong",{parentName:"p"},"Care must be taken changing any value in this file, and is not recommended.")),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("p",null,"To enable ECI, set the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/javapos/configref/dlsproperties#enableeci"}),"EnableECI")," property to true and configure the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/javapos/configref/dlsproperties#eciencodingfile"}),"ECIEncodingFile")," property (if necessary) within the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/javapos/configref/dlsproperties"}),"dls.properties")," file."),Object(c.b)("p",null,"Supported ECI codes and encodings:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"ECI Code"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Java Encoding"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 15438 Bar code symbology specification-PDF417: Default character set to 1994 specification with GLI rules")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 15438 Bar code symbology specification-PDF417: Latin 1 character set to 1994 specification with GLI rules")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 15438 Bar code symbology specification-PDF417: Default character set with ECI rules")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-1 Latin alphabet No. 1")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-2 Latin alphabet No. 2")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-3 Latin alphabet No. 3")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_4"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-4 Latin alphabet No. 4")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_5"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-5 Latin/Cyrillic alphabet")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-6 Latin/Arabic alphabet")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"9"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-7 Latin/Greek alphabet")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"10"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-8 Latin/Hebrew alphabet")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"11"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_9"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-9 Latin alphabet No. 5")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"12"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-10 Latin alphabet No. 6")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"13"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Cp874"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-11 Latin/Thai alphabet")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"14"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"15"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_13"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-13 Latin alphabet No. 7 (Baltic Rim)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-14 Latin alphabet No. 8 (Celtic)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"17"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ISO8859_15"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-15 Latin alphabet No. 9")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"18"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 8859-16 Latin alphabet No. 10")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"19"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"20"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SJIS"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Shift JIS (JIS X 0208 Annex 1 + JIS X 0201)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"21"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Cp1250"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Windows 1250 Latin 2 (Central Europe)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"22"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Cp1251"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Windows 1251 Cyrillic")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"23"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Cp1252"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Windows 1252 Latin 1")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"24"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Cp1256"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Windows 1256 Arabic")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"25"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"UTF-16"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 10646 UCS-2 (High order byte first)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"26"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"UTF8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 10646 UTF-8")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"27"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO/IEC 646:1991 International Reference Version of ISO 7-bit coded character set")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"28"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Big5"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Big 5 (Taiwan) Chinese Character Set")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"29"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"GB18030"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GB (PRC) Chinese Character Set")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"30"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Cp949"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Korean Character Set")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"899"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Unsupported"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8-bit binary data")))),Object(c.b)("h2",{id:"default-configuration-file"},"Default configuration file"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"//Lines beginning with '//' will be ignored by parser.,,\n//DO NOT CHANGE FORMATTING, entries must remain in the format of following header line with a minimum of <ECI_CODE>,<JAVA_ENCODING>\n//ECI Code (integer), Java Encoding (empty field means unsupported), Optional Description (ignored by parser)\n0,, ISO/IEC 15438 Bar code symbology specification-PDF417: Default character set to 1994 specification with GLI rules\n1,, ISO/IEC 15438 Bar code symbology specification-PDF417: Latin 1 character set to 1994 specification with GLI rules\n2,, ISO/IEC 15438 Bar code symbology specification-PDF417: Default character set with ECI rules\n3,ISO8859_1, ISO/IEC 8859-1 Latin alphabet No. 1\n4,ISO8859_2, ISO/IEC 8859-2 Latin alphabet No. 2\n5,ISO8859_3, ISO/IEC 8859-3 Latin alphabet No. 3\n6,ISO8859_4, ISO/IEC 8859-4 Latin alphabet No. 4\n7,ISO8859_5, ISO/IEC 8859-5 Latin/Cyrillic alphabet\n8,ISO8859_6, ISO/IEC 8859-6 Latin/Arabic alphabet\n9,ISO8859_7, ISO/IEC 8859-7 Latin/Greek alphabet\n10,ISO8859_8, ISO/IEC 8859-8 Latin/Hebrew alphabet\n11,ISO8859_9, ISO/IEC 8859-9 Latin alphabet No. 5\n12,, ISO/IEC 8859-10 Latin alphabet No. 6\n13,Cp874, ISO/IEC 8859-11 Latin/Thai alphabet\n14,, Reserved\n15,ISO8859_13, ISO/IEC 8859-13 Latin alphabet No. 7 (Baltic Rim)\n16,, ISO/IEC 8859-14 Latin alphabet No. 8 (Celtic)\n17,ISO8859_15, ISO/IEC 8859-15 Latin alphabet No. 9\n18,, ISO/IEC 8859-16 Latin alphabet No. 10\n19,, Reserved\n20,SJIS, Shift JIS (JIS X 0208 Annex 1 + JIS X 0201)\n21,Cp1250, Windows 1250 Latin 2 (Central Europe)\n22,Cp1251, Windows 1251 Cyrillic\n23,Cp1252, Windows 1252 Latin 1\n24,Cp1256, Windows 1256 Arabic\n25,UTF-16, ISO/IEC 10646 UCS-2 (High order byte first)\n26,UTF8, ISO/IEC 10646 UTF-8\n27,, ISO/IEC 646:1991 International Reference Version of ISO 7-bit coded character set\n28,Big5, Big 5 (Taiwan) Chinese Character Set\n29,GB18030, GB (PRC) Chinese Character Set\n30,Cp949, Korean Character Set\n899,, 8-bit binary data\n")))}p.isMDXComponent=!0},277:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,l=O(e,["components","mdxType","originalType","parentName"]),o=p(a),d=n,m=o["".concat(b,".").concat(d)]||o[d]||j[d]||c;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=d;var i={};for(var O in t)hasOwnProperty.call(t,O)&&(i[O]=t[O]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var l=2;l<c;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);