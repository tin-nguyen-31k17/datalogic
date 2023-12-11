"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[6848],{3905:(_,e,A)=>{A.d(e,{Zo:()=>E,kt:()=>a});var C=A(67294);function n(_,e,A){return e in _?Object.defineProperty(_,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):_[e]=A,_}function D(_,e){var A=Object.keys(_);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(_);e&&(C=C.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),A.push.apply(A,C)}return A}function S(_){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?D(Object(A),!0).forEach((function(e){n(_,e,A[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(A)):D(Object(A)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(A,e))}))}return _}function I(_,e){if(null==_)return{};var A,C,n=function(_,e){if(null==_)return{};var A,C,n={},D=Object.keys(_);for(C=0;C<D.length;C++)A=D[C],e.indexOf(A)>=0||(n[A]=_[A]);return n}(_,e);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(_);for(C=0;C<D.length;C++)A=D[C],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(_,A)&&(n[A]=_[A])}return n}var r=C.createContext({}),t=function(_){var e=C.useContext(r),A=e;return _&&(A="function"==typeof _?_(e):S(S({},e),_)),A},E=function(_){var e=t(_.components);return C.createElement(r.Provider,{value:e},_.children)},L="mdxType",T={inlineCode:"code",wrapper:function(_){var e=_.children;return C.createElement(C.Fragment,{},e)}},o=C.forwardRef((function(_,e){var A=_.components,n=_.mdxType,D=_.originalType,r=_.parentName,E=I(_,["components","mdxType","originalType","parentName"]),L=t(A),o=n,a=L["".concat(r,".").concat(o)]||L[o]||T[o]||D;return A?C.createElement(a,S(S({ref:e},E),{},{components:A})):C.createElement(a,S({ref:e},E))}));function a(_,e){var A=arguments,n=e&&e.mdxType;if("string"==typeof _||n){var D=A.length,S=new Array(D);S[0]=o;var I={};for(var r in e)hasOwnProperty.call(e,r)&&(I[r]=e[r]);I.originalType=_,I[L]="string"==typeof _?_:n,S[1]=I;for(var t=2;t<D;t++)S[t]=A[t];return C.createElement.apply(null,S)}return C.createElement.apply(null,A)}o.displayName="MDXCreateElement"},96966:(_,e,A)=>{A.r(e),A.d(e,{assets:()=>r,contentTitle:()=>S,default:()=>T,frontMatter:()=>D,metadata:()=>I,toc:()=>t});var C=A(87462),n=(A(67294),A(3905));const D={id:"labelparsercsv",title:"LabelParser Configuration Reference",sidebar_label:"LabelIdentifiers.csv"},S=void 0,I={unversionedId:"javapos/configref/labelparsercsv",id:"javapos/configref/labelparsercsv",title:"LabelParser Configuration Reference",description:"Overview",source:"@site/docs/javapos/configref/labelparsercsv.md",sourceDirName:"javapos/configref",slug:"/javapos/configref/labelparsercsv",permalink:"/javapos/configref/labelparsercsv",draft:!1,tags:[],version:"current",frontMatter:{id:"labelparsercsv",title:"LabelParser Configuration Reference",sidebar_label:"LabelIdentifiers.csv"},sidebar:"JavaPOS",previous:{title:"jpos.xml",permalink:"/javapos/configref/jposxml"},next:{title:"javax.usb.properties",permalink:"/javapos/configref/javaxusbproperties"}},r={},t=[{value:"Overview",id:"overview",level:2},{value:"Default configuration file",id:"default-configuration-file",level:2}],E={toc:t},L="wrapper";function T(_){let{components:e,...A}=_;return(0,n.kt)(L,(0,C.Z)({},E,A,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The LabelIdentifiers.csv file contains the parsing information used to detect the various barcodes across communication interfaces. This file's location\ncan be configured through the ",(0,n.kt)("a",{parentName:"p",href:"/javapos/configref/dlsproperties#labelidentifiersfile"},"LabelIdentifiersFile")," property in dls.properties. ",(0,n.kt)("strong",{parentName:"p"},"This file should not be modified.")),(0,n.kt)("h2",{id:"default-configuration-file"},"Default configuration file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"UPOS Identifier Names,UPOS IDs,Tag Name,USA (code),EU (code),IBM-USB-OEM,SCRS232,Output Prefix,Output Suffix, Version Number = 1.1.3\nSCAN_SDT_Codabar,107,CI_LABEL_ID_ABC_CODABAR,53,53,,,,,\nSCAN_SDT_PLESSEY,144,CI_LABEL_ID_ANKER_PLESSEY,6F,6F,,,,,\nSCAN_SDT_AZTEC,206,CI_LABEL_ID_AZTEC,417A,21,00340B,417A,,,\nSCAN_SDT_OTHER,501,CI_LABEL_ID_BC412,39,39,,,,,\nSCAN_SDT_HANXIN,215,CI_LABEL_ID_CHINA_SENSIBLE_CODE,2453,2453,,,,,\nSCAN_SDT_Codabar,107,CI_LABEL_ID_CODABAR,25,52,000E0B,25,,,\nSCAN_SDT_EAN13,104,CI_LABEL_ID_ISSN,6E,6E,,,,,\nSCAN_SDT_CodablockA,212,CI_LABEL_ID_CODABLOCK_A,6E,6E,,,,,\nSCAN_SDT_CodablockF,213,CI_LABEL_ID_CODABLOCK_F,6C,6D,,,,,\nSCAN_SDT_Code11,142,CI_LABEL_ID_CODE11,4345,62,,,,,\nSCAN_SDT_Code128,110,CI_LABEL_ID_CODE128,23,54,00180B,4233,,,\nSCAN_SDT_Code16k,211,CI_LABEL_ID_CODE16K,70,70,,,,,\nSCAN_SDT_Code39,108,CI_LABEL_ID_CODE39,2A,56,000A0B,4231,,,\nSCAN_SDT_CodeCIP,139,CI_LABEL_ID_CODE39_CIP,59,59,,,,,\nSCAN_SDT_Code39,108,CI_LABEL_ID_CODE39_DANISH_PPT,2459,2459,,,,,\nSCAN_SDT_Code39,108,CI_LABEL_ID_CODE39_LAPOSTE,2461,2461,,,,,\nSCAN_SDT_Code39,108,CI_LABEL_ID_CODE39_PZN,245A,245A,,,,,\nSCAN_SDT_OTHER,501,CI_LABEL_ID_CODE4,34,34,,,,,\nSCAN_SDT_Code49,210,CI_LABEL_ID_CODE49,71,71,00350B,,,,\nSCAN_SDT_OTHER,501,CI_LABEL_ID_CODE5,6A,6A,,,,,\nSCAN_SDT_Code93,109,CI_LABEL_ID_CODE93,26,55,00190B,26,,,\nSCAN_SDT_ITF_CK,133,CI_LABEL_ID_COMPRESSED_2OF5,68,68,,,,,\nSCAN_SDT_RSS14,131,CI_LABEL_ID_DATABAR_14,5234,75,002A0B,5234,,,\nSCAN_SDT_GS1DATABAR,131,CI_LABEL_ID_DATABAR_14_COMPOSITE,5234,63,002A0B,5234,,,\nSCAN_SDT_RSS_EXPANDED ,132,CI_LABEL_ID_DATABAR_EXPANDED,5258,74,002B0B,5258,,,\nSCAN_SDT_GS1DATABAR_E,132,CI_LABEL_ID_DATABAR_EXPANDED_COMPOSITE,5258,64,002B0B,5258,,,\nSCAN_SDT_GS1DATABAR_TYPE2,134,CI_LABEL_ID_DATABAR_LIMITED,524C,76,002A0B,524C,,,\nSCAN_SDT_GS1DATABAR_TYPE2,134,CI_LABEL_ID_DATABAR_LIMITED_COMPOSITE,524C,69,002A0B,524C,,,\nSCAN_SDT_TF,105,CI_LABEL_ID_S25,73,50,000C0B,73,,,\nSCAN_SDT_TF,105,CI_LABEL_ID_DATALOGIC_2OF5,73,73,,,,,\nSCAN_SDT_DATAMATRIX,203,CI_LABEL_ID_DATAMATRIX,446D,77,00320B,446D,,,\nSCAN_SDT_EAN128,120,CI_LABEL_ID_EAN128,5D4331,6B,00250B,5D4331,,,\nSCAN_SDT_EAN128,120,CI_LABEL_ID_EAN128_COMPOSITE,5D4331,2445,,5D4331,,,\nSCAN_SDT_EAN13,104,CI_LABEL_ID_EAN13,46,42,16,46,,,\nSCAN_SDT_EAN13_S,119,CI_LABEL_ID_EAN13_COMPOSITE,46,2446,00230B,46,,,\nSCAN_SDT_EAN13_S,119,CI_LABEL_ID_EAN13_P2,46,4C,00130B,46,,,\nSCAN_SDT_EAN13_S,119,CI_LABEL_ID_EAN13_P5,46,4D,00150B,46,,,\nSCAN_SDT_EAN13_S,119,CI_LABEL_ID_EAN13_P8,46,23,,46,,,\nSCAN_SDT_EAN8,103,CI_LABEL_ID_EAN8,4646,41,0C,4646,,,\nSCAN_SDT_EAN8_S,118,CI_LABEL_ID_EAN8_COMPOSITE,4646,2447,00220B,4646,,,\nSCAN_SDT_EAN8_S,118,CI_LABEL_ID_EAN8_P2,4646,4A,00170B,4646,,,\nSCAN_SDT_EAN8_S,118,CI_LABEL_ID_EAN8_P5,4646,4B,001D0B,4646,,,\nSCAN_SDT_EAN8_S,118,CI_LABEL_ID_EAN8_P8,4646,2A,,4646,,,\nSCAN_SDT_ITF,106,CI_LABEL_ID_FOLLET_2OF5,4F,4F,,,,,\nSCAN_SDT_GS1DATAMATRIX,208,CI_LABEL_ID_GS1_DATAMATRIX,4467,2477,00360B,4467,,,\nSCAN_SDT_GS1QRCODE,209,CI_LABEL_ID_GS1_QR_CODE,5147,2471,00370B,5147,,,\nSCAN_SDT_OTHER,501,CI_LABEL_ID_GTIN,47,2441,,47,,,\nSCAN_SDT_OTHER,501,CI_LABEL_ID_GTIN2,4732,2442,,4732,,,\nSCAN_SDT_OTHER,501,CI_LABEL_ID_GTIN5,4735,2443,,4735,,,\nSCAN_SDT_OTHER,501,CI_LABEL_ID_GTIN8,4738,2444,,4738,,,\nSCAN_SDT_ITF,106,CI_LABEL_ID_I2OF5,69,4E,000D0B,4232,,,\nSCAN_SDT_ITF,106,CI_LABEL_ID_I2OF5_CIP_HR,65,65,,,,,\nSCAN_SDT_TF,105,CI_LABEL_ID_IATA_INDUSTRIAL_2OF5,4941,26,,,,,\nSCAN_SDT_TF,105,CI_LABEL_ID_INDUSTRIAL_2OF5,57,57,,,,,\nSCAN_SDT_EAN13,104,CI_LABEL_ID_ISBN,49,40,,49,,,\nSCAN_SDT_ISBT128,141,CI_LABEL_ID_ISBT128_CONCAT,66,66,,,,,\nSCAN_SDT_TFMAT,136,CI_LABEL_ID_MATRIX_2OF5,67,67,,,,,\nSCAN_SDT_MAXICODE,202,CI_LABEL_ID_MAXICODE,4D43,78,002F0B,,,,\nSCAN_SDT_PDF417,201,CI_LABEL_ID_PDF417,50,72,002E0B,50,,,\nSCAN_SDT_UPDF417,207,CI_LABEL_ID_MICRO_PDF,6D50,38,00380B,6D50,,,\nSCAN_SDT_QRCODE,204,CI_LABEL_ID_QR_CODE,5152,79,00330B,5152,,,\nSCAN_SDT_UQRCODE,205,CI_LABEL_ID_MICROQR,2451,2451,00330B,2451,,,\nSCAN_SDT_MSI,143,CI_LABEL_ID_MSI,40,5A,,40,,,\nSCAN_SDT_Codabar,107,CI_LABEL_ID_NW7_CODABAR,244E,244E,,,,,\nSCAN_SDT_PLESSEY,144,CI_LABEL_ID_PLESSEY,61,61,,,,,\nSCAN_SDT_AusPost,301,CI_LABEL_ID_POSTAL_AUSTRALIAN,244B,244B,,,,,\nSCAN_SDT_UsIntelligent,310,CI_LABEL_ID_POSTAL_IMB,2456,2456,,,,,\nSCAN_SDT_JapanPost,306,CI_LABEL_ID_POSTAL_JAPANESE,2452,2452,,,,,\nSCAN_SDT_DutchKix,304,CI_LABEL_ID_POSTAL_KIX,2455,2455,,,,,\nSCAN_SDT_UsPlanet,311,CI_LABEL_ID_POSTAL_PLANET,2457,2457,,,,,\nSCAN_SDT_OTHER,501,CI_LABEL_ID_POSTAL_PORTUGAL,2450,2450,,,,,\nSCAN_SDT_UkPost,309,CI_LABEL_ID_POSTAL_ROYAL_MAIL,244D,244D,,,,,\nSCAN_SDT_SwedenPost,308,CI_LABEL_ID_POSTAL_SWEDISH,2458,2458,,,,,\nSCAN_SDT_PostNet,312,CI_LABEL_ID_POSTNET,244C,244C,,,,,\nSCAN_SDT_TRIOPTIC39,140,CI_LABEL_ID_TRIOPTIC,2454,2454,,,,,\nSCAN_SDT_UPCA,101,CI_LABEL_ID_UPCA,41,43,0D,41,,,\nSCAN_SDT_UPCA_S,111,CI_LABEL_ID_UPCA_COMPOSITE,41,2448,00200B,41,,,\nSCAN_SDT_UPCA_S,111,CI_LABEL_ID_UPCA_P2,41,46,00160B,41,,,\nSCAN_SDT_UPCA_S,111,CI_LABEL_ID_UPCA_P5,41,47,00110B,41,,,\nSCAN_SDT_UPCA_S,111,CI_LABEL_ID_UPCA_P8,41,51,,41,,,\nSCAN_SDT_UPCE,102,CI_LABEL_ID_UPCE,45,44,0A,45,,,\nSCAN_SDT_UPCE_S,112,CI_LABEL_ID_UPCE_COMPOSITE,45,244A,00210B,45,,,\nSCAN_SDT_UPCE_S,112,CI_LABEL_ID_UPCE_P2,45,48,00120B,45,,,\nSCAN_SDT_UPCE_S,112,CI_LABEL_ID_UPCE_P5,45,49,00140B,45,,,\nSCAN_SDT_UPCE_S,112,CI_LABEL_ID_UPCE_P8,45,45,,45,,,\nSCAN_SDT_Code32,138,CI_LABEL_ID_CODE32,,58,,,,,\nSCAN_SDT_OCRA,121,CI_LABEL_ID_OCR_A,246F,246F,00300B,,,,\nSCAN_SDT_OCRB,122,CI_LABEL_ID_OCR_B,2470,2470,00310B,,,,\nSCAN_SDT_UNKNOWN,0,CI_LABEL_ID_UNKNOWN,,,00FF0B,,,,\n")))}T.isMDXComponent=!0}}]);