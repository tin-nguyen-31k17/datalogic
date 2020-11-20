(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var a=r(2),n=r(6),o=(r(0),r(171)),i={id:"visual-formatter-examples",title:"Examples",sidebar_label:"Examples"},s={unversionedId:"scan2deploy/visual-formatter-examples",id:"scan2deploy/visual-formatter-examples",isDocsHomePage:!1,title:"Examples",description:"This section shows some examples of usages for the Visual Formatter.",source:"@site/docs/scan2deploy/visual-formatter-examples.md",slug:"/scan2deploy/visual-formatter-examples",permalink:"/scan2deploy/visual-formatter-examples",version:"current",sidebar_label:"Examples",sidebar:"Scan2DeployStudio",previous:{title:"UI Controls",permalink:"/scan2deploy/visual-formatter-ui-controls"},next:{title:"Frequently Asked Questions",permalink:"/scan2deploy/faq"}},c=[{value:"Adding Prefix/Suffix",id:"adding-prefixsuffix",children:[]},{value:"Discarding Barcodes Based On Barcode Type",id:"discarding-barcodes-based-on-barcode-type",children:[]},{value:"Replacing Characters Inside The Barcode",id:"replacing-characters-inside-the-barcode",children:[]}],l={rightToc:c};function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section shows some examples of usages for the Visual Formatter."),Object(o.b)("h3",{id:"adding-prefixsuffix"},"Adding Prefix/Suffix"),Object(o.b)("p",null,"This example shows how to add a specified prefix and suffix to the barcode string."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Visual Formatter Add Prefix And Suffix",src:r(350).default})),Object(o.b)("h3",{id:"discarding-barcodes-based-on-barcode-type"},"Discarding Barcodes Based On Barcode Type"),Object(o.b)("p",null,"The below example shows how to discard barcodes by setting to false the propagateResultOut output. In this example all codes that are not EAN13 will be discarded."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Visual Formatter Discard Not EAN",src:r(351).default})),Object(o.b)("h3",{id:"replacing-characters-inside-the-barcode"},"Replacing Characters Inside The Barcode"),Object(o.b)("p",null,"This example shows how to replace characters inside the barcode string. It does also use a condition in order to execute the replacement only for QR codes."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Visual Formatter Replace Only For QR",src:r(352).default})))}d.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,b=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return r?n.a.createElement(b,s(s({ref:t},l),{},{components:r})):n.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},350:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/visual-formatter-add-prefix-and-suffix-8c29e0c6bd152079b9aa54d78b0441bb.png"},351:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/visual-formatter-discard-not-ean-7a4f8bac360938fea91f2e000e37b9be.png"},352:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/visual-formatter-replace-only-for-qr-b54dd72b177bf96b209f524784da7c11.png"}}]);