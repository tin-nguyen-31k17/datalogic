(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return c})),r.d(a,"metadata",(function(){return s})),r.d(a,"rightToc",(function(){return p})),r.d(a,"Img",(function(){return u})),r.d(a,"default",(function(){return b}));var t=r(3),n=r(8),o=(r(0),r(299)),l=r(301),i=r(302),c={id:"barcodereaderexample",title:"BarCodeReaderExample",sidebar_label:"Barcode Reader Example"},s={unversionedId:"javapos/develop/barcodereaderexample",id:"javapos/develop/barcodereaderexample",isDocsHomePage:!1,title:"BarCodeReaderExample",description:"<img src={src}",source:"@site/docs/javapos/develop/barcodereaderexample.md",slug:"/javapos/develop/barcodereaderexample",permalink:"/javapos/develop/barcodereaderexample",version:"current",sidebar_label:"Barcode Reader Example",sidebar:"JavaPOS",previous:{title:"HelloDatalogicJavaPOS",permalink:"/javapos/develop/hellodatalogicjavapos"},next:{title:"HelloJavaPOSScale",permalink:"/javapos/develop/hellojavaposscale"}},p=[{value:"A scanner example program for Datalogic JavaPOS",id:"a-scanner-example-program-for-datalogic-javapos",children:[]}],u=function(e){var a=e.src;return Object(o.b)("img",{src:a,style:{maxWidth:"750px",maxHeight:"750px"}})},d={rightToc:p,Img:u};function b(e){var a=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,r,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"a-scanner-example-program-for-datalogic-javapos"},"A scanner example program for Datalogic JavaPOS"),Object(o.b)("p",null,"BarCodeReaderExample outputs barcode data until you press enter to exit.\nBarCodeReaderExample runs with Datalogic JavaPOS.\nThe latest release of JavaPOS can be downloaded from the\nDatalogic website ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.datalogic.com/eng/Download/Form/21984"}),"here"),"."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/datalogic/BarcodeReaderExample"}),"BarCodeReaderExample repository"),"\ncontains the BarCodeReaderExample.java source and shell scripts to run the\nBarCodeReaderExample.jar you build. The repository also has a\nNetBeans IDE (Integrated Development Environment) project to perform\nthe build. Other IDEs can be used."),Object(o.b)("p",null,"Steps to build and run BarCodeReaderExample.jar:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install Datalogic JavaPOS. This install includes the JavaPOSTest\nprogram."),Object(o.b)("li",{parentName:"ol"},"Make sure Datalogic JavaPOS runs with your scanner.\nWith your scaner and JavaPOSTest do an ",Object(o.b)("strong",{parentName:"li"},"Open"),", ",Object(o.b)("strong",{parentName:"li"},"Claim"),", ",Object(o.b)("strong",{parentName:"li"},"Enable")," and\nthen scan a barcode. Assuming the barcode type (UPC-A, QR Code,\n.etc,) is enabled on the scanner it should read the barcode."),Object(o.b)("li",{parentName:"ol"},"Clone or download the ",Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/datalogic/BarcodeReaderExample"}),"BarCodeReaderExample repository"),"."),Object(o.b)("li",{parentName:"ol"},"Build BarCodeReaderExample.jar. This was originally done with the\nfollowing. Variations near these should work.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Apache NetBeans 11.0"),Object(o.b)("li",{parentName:"ul"},"Java jdk1.8.0_231"),Object(o.b)("li",{parentName:"ul"},"The BarCodeReaderExample project in NetBeans is a Java\nwith Ant, Java Application project. The build uses a\nlibrary of the JavaPOS's .jar files.\nThese .jar files are in the JavaPOS install's root\ndirectory where it has its JavaPOS.jar and its SupportJars\ndirectory. Create this library via ",Object(o.b)("strong",{parentName:"li"},"NetBeans -> Tools -> Libraries"),".\nAdd the library to the BarCodeReaderExample NetBeans project\nvia its ",Object(o.b)("strong",{parentName:"li"},"Properties -> Libraries -> Classpath + -> Add Library...")))),Object(o.b)("li",{parentName:"ol"},"Update the jpos.xml of your installed JavaPOS to include a\n",Object(o.b)("inlineCode",{parentName:"li"},'<JposEntry logicalName="DatalogicJavaPOSDevice">')," entry for your scanner and\ninterface. This entry is a copy of the entry you used with\nJavaPOSTest above. The only difference is the logicalName is changed\nto DatalogicJavaPOSDevice."),Object(o.b)("li",{parentName:"ol"},"With BarCodeReaderExample make your scanner read. Use the\nappropriate BarCodeReaderExample script:",Object(o.b)(l.a,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"win",mdxType:"TabItem"},".cmd ",Object(o.b)("br",null),Object(o.b)(u,{src:"/img/javapos/develop/BarCodeReaderExample/Command_Prompt_showing_run_of_BarCodeReaderExample.cmd.png",mdxType:"Img"})),Object(o.b)(i.a,{value:"linux",mdxType:"TabItem"},".sh ",Object(o.b)("br",null),Object(o.b)(u,{src:"/img/javapos/develop/BarCodeReaderExample/Terminal_showing_run_of_BarCodeReaderExample.sh.png",mdxType:"Img"}))))))}b.isMDXComponent=!0},299:function(e,a,r){"use strict";r.d(a,"a",(function(){return u})),r.d(a,"b",(function(){return m}));var t=r(0),n=r.n(t);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var a=n.a.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},u=function(e){var a=p(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=n.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=t,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return r?n.a.createElement(m,i(i({ref:a},s),{},{components:r})):n.a.createElement(m,i({ref:a},s))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},300:function(e,a,r){"use strict";function t(e){var a,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(r=t(e[a]))&&(n&&(n+=" "),n+=r);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.a=function(){for(var e,a,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(a=t(e))&&(n&&(n+=" "),n+=a);return n}},301:function(e,a,r){"use strict";var t=r(0),n=r.n(t),o=r(303),l=r(300),i=r(53),c=r.n(i),s=37,p=39;a.a=function(e){var a=e.lazy,r=e.block,i=e.children,u=e.defaultValue,d=e.values,b=e.groupId,m=e.className,f=Object(o.a)(),v=f.tabGroupChoices,O=f.setTabGroupChoices,h=Object(t.useState)(u),j=h[0],g=h[1];if(null!=b){var y=v[b];null!=y&&y!==j&&d.some((function(e){return e.value===y}))&&g(y)}var x=function(e){g(e),null!=b&&O(b,e)},w=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":r},m)},d.map((function(e){var a=e.value,r=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===a,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,a,r){switch(r.keyCode){case p:!function(e,a){var r=e.indexOf(a)+1;e[r]?e[r].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var r=e.indexOf(a)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,a)}}(w,e.target,e)},onFocus:function(){return x(a)},onClick:function(){x(a)}},r)}))),a?Object(t.cloneElement)(i.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,a){return Object(t.cloneElement)(e,{key:a,hidden:e.props.value!==j})}))))}},302:function(e,a,r){"use strict";var t=r(3),n=r(0),o=r.n(n);a.a=function(e){var a=e.children,r=e.hidden,n=e.className;return o.a.createElement("div",Object(t.a)({role:"tabpanel"},{hidden:r,className:n}),a)}},303:function(e,a,r){"use strict";var t=r(0),n=r(304);a.a=function(){var e=Object(t.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},304:function(e,a,r){"use strict";var t=r(0),n=Object(t.createContext)(void 0);a.a=n}}]);