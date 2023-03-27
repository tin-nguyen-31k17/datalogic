"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[9580],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||i;return t?n.createElement(m,o(o({ref:r},s),{},{components:t})):n.createElement(m,o({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},98998:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"brandproperties",title:"brand.properties Reference",sidebar_label:"brand.properties"},u=void 0,p={unversionedId:"javapos/configref/brandproperties",id:"javapos/configref/brandproperties",title:"brand.properties Reference",description:"Overview",source:"@site/docs/javapos/configref/brandproperties.md",sourceDirName:"javapos/configref",slug:"/javapos/configref/brandproperties",permalink:"/javapos/configref/brandproperties",draft:!1,tags:[],version:"current",frontMatter:{id:"brandproperties",title:"brand.properties Reference",sidebar_label:"brand.properties"},sidebar:"JavaPOS",previous:{title:"Configuration Overview",permalink:"/javapos/configref/overview"},next:{title:"dls.properties",permalink:"/javapos/configref/dlsproperties"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2},{value:"BrandedProduct",id:"brandedproduct",level:3},{value:"BrandingName",id:"brandingname",level:3},{value:"BrandingPrefix",id:"brandingprefix",level:3},{value:"ManufacturerName",id:"manufacturername",level:3},{value:"ManufacturerShortName",id:"manufacturershortname",level:3},{value:"Default and Examples",id:"default-and-examples",level:2}],d={toc:c},f="wrapper";function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(f,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Datalogic JavaPOS API provides the ability to perform custom branding using the brand.properties file. This plain-text file contains ",(0,i.kt)("strong",{parentName:"p"},"key / value")," pairs containing configuration for branding specific information."),(0,i.kt)("p",null,"This file ",(0,i.kt)("strong",{parentName:"p"},"must")," appear in the current working directory of the application utilizing the Datalogic JavaPOS API in order to function properly. If this file does not appear, a warning is logged and default branding configuration is used."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"Each available property is discussed in the following sections."),(0,i.kt)("h3",{id:"brandedproduct"},"BrandedProduct"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("em",{parentName:"li"},"DLSJavaPOS"))),(0,i.kt)("p",null,"The BrandedProduct property assigns the value to use when a Branded product name is normally logged or otherwise shown."),(0,i.kt)("p",null,"The value here is used to create the Device Service Version as reported in logging."),(0,i.kt)("h3",{id:"brandingname"},"BrandingName"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("em",{parentName:"li"},"Datalogic ADC"))),(0,i.kt)("p",null,"The BrandingName property assigns the value to use when a Branded company name is normally logged or otherwise shown."),(0,i.kt)("h3",{id:"brandingprefix"},"BrandingPrefix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("em",{parentName:"li"},"dls"))),(0,i.kt)("p",null,"The BrandingPrefix property assigns the value to use when reading legacy configuration files. The value of this property is parsed as part of the prefix of a FQDN domain name for branded property files."),(0,i.kt)("p",null,"As of JavaPOS 1.14.045, branded properties are no longer used. This property continues to exist only to support legacy installations using branded property values. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Changing this property could cause unexpected results."))),(0,i.kt)("h3",{id:"manufacturername"},"ManufacturerName"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("em",{parentName:"li"},"Datalogic Scanning"))),(0,i.kt)("p",null,"The ManufacturerName property assigns the value to use when the Manufacturer Name is normally logged or shown. This property is used in remote access and other situations where a Manufacturer Name is requested by specification."),(0,i.kt)("h3",{id:"manufacturershortname"},"ManufacturerShortName"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("em",{parentName:"li"},"DLA"))),(0,i.kt)("p",null,"The ManufacturerShortName property assigns the value to use when the Manufacturer Short Name is normally logged or shown. This property is used in remote access and other situations where a Manufacturer Short Name is requested by specification."),(0,i.kt)("h2",{id:"default-and-examples"},"Default and Examples"),(0,i.kt)("p",null,"Datalogic JavaPOS is installed with the following default values in the ",(0,i.kt)("strong",{parentName:"p"},"brand.properties")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BrandedProduct=DLSJavaPOS\nBrandingName=Datalogic ADC\nBrandingPrefix=dls\nManufacturerName=Datalogic Scanning\nManufacturerShortName=DLA\n")))}m.isMDXComponent=!0}}]);