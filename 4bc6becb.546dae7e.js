(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{235:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||f[b]||c;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},236:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},237:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(240),o=n(236),i=n(52),l=n.n(i),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,p=e.defaultValue,f=e.values,b=e.groupId,d=e.className,m=Object(c.a)(),v=m.tabGroupChoices,y=m.setTabGroupChoices,O=Object(r.useState)(p),g=O[0],j=O[1];if(null!=b){var h=v[b];null!=h&&h!==g&&f.some((function(e){return e.value===h}))&&j(h)}var w=function(e){j(e),null!=b&&y(b,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(i.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},238:function(e,t,n){"use strict";var r=n(3),a=n(0),c=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return c.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},240:function(e,t,n){"use strict";var r=n(0),a=n(241);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},241:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),c=(n(0),n(235)),o=n(237),i=n(238),l={},u={unversionedId:"scan2deploy/scripting/inflate",id:"scan2deploy/scripting/inflate",isDocsHomePage:!1,title:"inflate",description:"<Tabs",source:"@site/docs/scan2deploy/scripting/inflate.md",slug:"/scan2deploy/scripting/inflate",permalink:"/scan2deploy/scripting/inflate",version:"current"},s=[],p={rightToc:s};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(o.a,{defaultValue:"syntax",values:[{label:"Syntax",value:"syntax"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"syntax",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"INFLATE <archive-path> <target-path>\n"))),Object(c.b)(i.a,{value:"example",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"INFLATE /sdcard/Download/test.zip /sdcard/Download/Unzipped\n")))),Object(c.b)("p",null,"Inflates the ZIP archive found at ",Object(c.b)("inlineCode",{parentName:"p"},"archive-path")," to ",Object(c.b)("inlineCode",{parentName:"p"},"target-path")," folder."))}f.isMDXComponent=!0}}]);