(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{299:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,m=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},300:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},301:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(303),o=t(300),c=t(53),l=t.n(c),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.children,p=e.defaultValue,b=e.values,f=e.groupId,m=e.className,d=Object(i.a)(),O=d.tabGroupChoices,y=d.setTabGroupChoices,g=Object(r.useState)(p),v=g[0],j=g[1];if(null!=f){var h=O[f];null!=h&&h!==v&&b.some((function(e){return e.value===h}))&&j(h)}var N=function(e){j(e),null!=f&&y(f,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(r.cloneElement)(c.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},302:function(e,n,t){"use strict";var r=t(3),a=t(0),i=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:a}),n)}},303:function(e,n,t){"use strict";var r=t(0),a=t(304);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},304:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(299)),o=t(301),c=t(302),l={},s={unversionedId:"scan2deploy/scripting/grant",id:"scan2deploy/scripting/grant",isDocsHomePage:!1,title:"grant",description:"<Tabs",source:"@site/docs/scan2deploy/scripting/grant.md",slug:"/scan2deploy/scripting/grant",permalink:"/scan2deploy/scripting/grant",version:"current"},u=[],p={rightToc:u};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(o.a,{defaultValue:"syntax",values:[{label:"Syntax",value:"syntax"},{label:"Example",value:"example"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"syntax",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"GRANT [-p permission] [-s grant|deny|default] <package-name>\n"))),Object(i.b)(c.a,{value:"example",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"GRANT com.company.app\nGRANT -p android.permission.WRITE_EXTERNAL_STORAGE -s grant com.company.app\n")))),Object(i.b)("p",null,"Grants or revokes permissions on the specified package. The ",Object(i.b)("inlineCode",{parentName:"p"},"-p")," and ",Object(i.b)("inlineCode",{parentName:"p"},"-s")," parameters are optional."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[-p]")," If a permission is provided using the ",Object(i.b)("inlineCode",{parentName:"li"},"-p")," parameter, only that single permission will be affected. If no ",Object(i.b)("inlineCode",{parentName:"li"},"-p")," is specified, all the permissions declared in the manifest for the given ",Object(i.b)("inlineCode",{parentName:"li"},"package-name")," package will be affected."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[-s]")," The ",Object(i.b)("inlineCode",{parentName:"li"},"-s")," parameter can be used to specify that the permission be granted (",Object(i.b)("inlineCode",{parentName:"li"},"grant"),"), denied (",Object(i.b)("inlineCode",{parentName:"li"},"deny"),"), or user-configurable (",Object(i.b)("inlineCode",{parentName:"li"},"default"),"). In the case of ",Object(i.b)("inlineCode",{parentName:"li"},"grant")," and ",Object(i.b)("inlineCode",{parentName:"li"},"deny"),", the permission set is no longer user-configurable; if you view the permission in the Settings app on the device, you will see that it can't be modified. The default behavior is to ",Object(i.b)("inlineCode",{parentName:"li"},"grant")," permission(s).")))}b.isMDXComponent=!0}}]);