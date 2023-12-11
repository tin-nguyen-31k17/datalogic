"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[6590],{3905:(t,e,n)=>{n.d(e,{Zo:()=>h,kt:()=>f});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},h=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},g="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),g=p(n),d=i,f=g["".concat(l,".").concat(d)]||g[d]||c[d]||r;return n?o.createElement(f,a(a({ref:e},h),{},{components:n})):o.createElement(f,a({ref:e},h))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[g]="string"==typeof t?t:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3174:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={id:"general",title:"General Settings",sidebar_label:"General Settings"},a=void 0,s={unversionedId:"softspot/general",id:"softspot/general",title:"General Settings",description:"Appearance Settings",source:"@site/docs/softspot/general.md",sourceDirName:"softspot",slug:"/softspot/general",permalink:"/softspot/general",draft:!1,tags:[],version:"current",frontMatter:{id:"general",title:"General Settings",sidebar_label:"General Settings"},sidebar:"SoftSpot",previous:{title:"Actions",permalink:"/softspot/actions"},next:{title:"Export/Import Settings",permalink:"/softspot/export"}},l={},p=[{value:"Appearance Settings",id:"appearance-settings",level:2},{value:"Spot Visibility",id:"spot-visibility",level:3},{value:"Lock Position",id:"lock-position",level:3},{value:"Starting Spot Position",id:"starting-spot-position",level:3},{value:"Spot Size",id:"spot-size",level:3},{value:"Operation Settings",id:"operation-settings",level:2}],h={toc:p},g="wrapper";function c(t){let{components:e,...r}=t;return(0,i.kt)(g,(0,o.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"appearance-settings"},"Appearance Settings"),(0,i.kt)("p",null,"The Appearance Settings group presents a screen which controls the position and overall appearance of SoftSpot when it is displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Appearance Settings",src:n(42457).Z,width:"270",height:"490"})),(0,i.kt)("p",null,"The lower portion of the screen displays a sample of SoftSpot which mimics the appearance and behavior of the actual spot.  This provides instant feedback for how the settings control the appearance of the actual SoftSpot."),(0,i.kt)("h3",{id:"spot-visibility"},"Spot Visibility"),(0,i.kt)("p",null,"SoftSpot becomes transparent when it is not being used.  The slider at the top of the screen controls the transparency level."),(0,i.kt)("h3",{id:"lock-position"},"Lock Position"),(0,i.kt)("p",null,"During normal operation, SoftSpot can be moved to different locations on the screen (to avoid overlap with application screens) by dragging to a new position.  When the ",(0,i.kt)("inlineCode",{parentName:"p"},"Lock Position")," checkbox is checked, this behavior is changed and the location of SoftSpot is locked to its starting position."),(0,i.kt)("h3",{id:"starting-spot-position"},"Starting Spot Position"),(0,i.kt)("p",null,"When SoftSpot is enabled, its initial position is defined by the sample spot shown on this screen.  The starting position may be changed by touching the spot and dragging it to any of the pre-defined positions.  The nine available positions are combinations of the left/center/right and top/middle/bottom of the screen.  The position cannot be changed if the ",(0,i.kt)("inlineCode",{parentName:"p"},"Lock Position")," setting is checked."),(0,i.kt)("h3",{id:"spot-size"},"Spot Size"),(0,i.kt)("p",null,"The size of SoftSpot can also be configured (only at configuration, not during normal operation).  To adjust the size, use a pinch gesture to grow or shrink the spot size.  The size can be scaled to 1.5x, 2x or 2.5x normal size."),(0,i.kt)("h2",{id:"operation-settings"},"Operation Settings"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Operation Settings",src:n(65927).Z,width:"270",height:"180"})),(0,i.kt)("p",null,"Tapping the Operation Settings group presents a screen which controls general SoftSpot operation.  The following settings are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable SoftSpot on boot"),(0,i.kt)("td",{parentName:"tr",align:null},"When enabled, SoftSpot will automatically start when the device boots.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Swipe SoftSpot up to hide"),(0,i.kt)("td",{parentName:"tr",align:null},"When enabled, SoftSpot can be hidden with a touch gesture.  To hide the spot, touch the spot and swipe up quickly.  SoftSpot will still be enabled, but will be hidden from view.  To show SoftSpot again, tap the SoftSpot notification, as described in ",(0,i.kt)("a",{parentName:"td",href:"/softspot/overview#softspot-service"},(0,i.kt)("strong",{parentName:"a"},"SoftSpot Service")))))))}c.isMDXComponent=!0},42457:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/cfgDisp-57e7c40c77689982a8071327efaf075c.png"},65927:(t,e,n)=>{n.d(e,{Z:()=>o});const o="data:image/png;base64,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"}}]);