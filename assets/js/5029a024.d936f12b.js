"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3462],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,d=p["".concat(u,".").concat(g)]||p[g]||h[g]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71868:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"overview",title:"Datalogic Launcher",sidebar_label:"Overview"},u=void 0,l={unversionedId:"launcher/overview",id:"launcher/overview",title:"Datalogic Launcher",description:"Overview",source:"@site/docs/launcher/overview.md",sourceDirName:"launcher",slug:"/launcher/overview",permalink:"/launcher/overview",tags:[],version:"current",frontMatter:{id:"overview",title:"Datalogic Launcher",sidebar_label:"Overview"},sidebar:"Launcher",next:{title:"Home Settings",permalink:"/launcher/home"}},s={},h=[{value:"Overview",id:"overview",level:2},{value:"Launcher Screen",id:"launcher-screen",level:2},{value:"Configuration",id:"configuration",level:2}],p={toc:h};function g(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Datalogic Launcher is an Android application used to lock down the device to launch only allowed applications.  It can also limit access to several system device features, such as the Overview button (for switching apps) and the Global Actions dialog (for restarting the device).  Once started, it behaves as the device Home screen (when you tap the Home button)."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Launcher Main Screen",src:n(80976).Z,width:"270",height:"160"})),(0,i.kt)("p",null,"Here is a list of the devices supported by Datalogic Launcher and the required minimum firmware version:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Device"),(0,i.kt)("th",{parentName:"tr",align:null},"Minimum firmware version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Skorpio X5"),(0,i.kt)("td",{parentName:"tr",align:null},"2.10.002.20210423 (Engineering build)")))),(0,i.kt)("h2",{id:"launcher-screen"},"Launcher Screen"),(0,i.kt)("p",null,"The main launcher screen displays a list of applications that are allowed to be launched.  Any application can be launched from this screen by tapping its icon.  You can return to this screen from another application by tapping the Home button.  (The Home button is in the center of the Navigation bar at the bottom of the screen.)"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The list of allowed applications, the way they appear, and the overall appearance of the main launcher screen can be configured.  To access the launcher configuration, tap the ",(0,i.kt)("strong",{parentName:"p"},"Launcher Settings")," icon from the main launcher screen.  It is displayed last in the list of allowed applications."),(0,i.kt)("p",null,"The visibility of the Launcher Settings icon can be disabled.  When the icon is not visible, a back door tap sequence can be used instead to access the settings screen.  This sequence requires the user to rapidly tap 5 times anywhere on the launcher screen which is not covered by an application icon."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Launcher Settings",src:n(36225).Z,width:"216",height:"147"})),(0,i.kt)("p",null,"When attempting to access the Launcher settings, the user will be prompted for the administrator password.  To protect the locked state of the device, the correct password must be entered before the settings can be accessed.  If the administrator password is set to the default (0000), then the dialog will remind the user with a hint.  Tapping the Back button will dismiss the password dialog."),(0,i.kt)("p",null,"The settings screen also contains an option to exit Datalogic Launcher entirely, which returns the device to the default Home screen.  More information on Launcher configuration can be found in ",(0,i.kt)("a",{parentName:"p",href:"/launcher/home"},(0,i.kt)("strong",{parentName:"a"},"Home Settings")),"."))}g.isMDXComponent=!0},36225:function(e,t,n){t.Z=n.p+"assets/images/adminPwd-805e1e1d59073f4977bc6d55847e49d0.png"},80976:function(e,t){t.Z="data:image/png;base64,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"}}]);