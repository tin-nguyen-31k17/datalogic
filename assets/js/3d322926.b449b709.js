"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var g=n.createContext({}),l=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(g.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,g=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=i,w=c["".concat(g,".").concat(d)]||c[d]||h[d]||a;return r?n.createElement(w,o(o({ref:t},p),{},{components:r})):n.createElement(w,o({ref:t},p))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51766:(e,t,r)=>{r.r(t),r.d(t,{AppIcon:()=>p,TableIcon:()=>c,assets:()=>g,contentTitle:()=>o,default:()=>w,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={id:"browse",title:"Browsing",sidebar_label:"Browsing"},o=void 0,s={unversionedId:"browser/browse",id:"browser/browse",title:"Browsing",description:"Overview",source:"@site/docs/browser/browse.md",sourceDirName:"browser",slug:"/browser/browse",permalink:"/browser/browse",draft:!1,tags:[],version:"current",frontMatter:{id:"browse",title:"Browsing",sidebar_label:"Browsing"},sidebar:"Browser",previous:{title:"Overview",permalink:"/browser/overview"},next:{title:"Browser Settings",permalink:"/browser/config"}},g={},l=[{value:"Overview",id:"overview",level:2},{value:"Navigation bar",id:"navigation-bar",level:2},{value:"Browsing pages",id:"browsing-pages",level:2},{value:"Error pages",id:"error-pages",level:3},{value:"Page authentication",id:"page-authentication",level:3}],p=e=>{let{img:t}=e;return(0,i.kt)("span",{style:{display:"inline-block"}},"(",(0,i.kt)("img",{src:t,style:{verticalAlign:"bottom",display:"inline"}}),")")},c=e=>{let{img:t}=e;return(0,i.kt)("img",{src:t,style:{verticalAlign:"bottom"}})},h={toc:l,AppIcon:p,TableIcon:c},d="wrapper";function w(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The browser screen allows the user to display content from web applications.  It is shown once a site from the Favorites screen is tapped."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Browser Screen",src:r(35760).Z,width:"270",height:"315"})),(0,i.kt)("h2",{id:"navigation-bar"},"Navigation bar"),(0,i.kt)("p",null,"At the top of the browser screen is a navigation bar with information and controls for assisting with web page navigation.  When full screen page viewing is enabled (the default), it can be exposed by dragging the page down.  It can be hidden again by dragging up."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigation Title",src:r(75669).Z,width:"270",height:"50"})),(0,i.kt)("p",null,"The contents of the navigation bar is configurable.  Additional details on the options are found in ",(0,i.kt)("a",{parentName:"p",href:"/browser/operation#display-settings"},(0,i.kt)("strong",{parentName:"a"},"Display Settings")),".  By default, the navigation bar is configured to display the title of the current web page.  This can be changed to display the URL of the current page:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigation URL",src:r(97966).Z,width:"270",height:"50"})),(0,i.kt)("p",null,"When displayed, the URL cannot be edited.  You can only browse to web pages using hyperlinks or an item on the Favorites screen.  If both the title and URL display are disabled, that portion of the navigation bar is hidden.  The remaining buttons are for navigating to web pages and browser screens."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\xa0","\xa0","\xa0","\xa0","\xa0","Button","\xa0","\xa0","\xa0","\xa0","\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(c,{img:"/img/browser/home.svg",mdxType:"TableIcon"})," ",(0,i.kt)("strong",{parentName:"td"},"Home")),(0,i.kt)("td",{parentName:"tr",align:null},"Browses to the Home page.  If no page has been specified in the Browser configuration, this will display the ",(0,i.kt)("a",{parentName:"td",href:"/browser/overview#favorites-screen"},(0,i.kt)("strong",{parentName:"a"},"Favorites Screen")),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(c,{img:"/img/browser/back.svg",mdxType:"TableIcon"})," ",(0,i.kt)("strong",{parentName:"td"},"Back")),(0,i.kt)("td",{parentName:"tr",align:null},"Browses to the previous web page in the navigation history.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(c,{img:"/img/browser/fwd.svg",mdxType:"TableIcon"})," ",(0,i.kt)("strong",{parentName:"td"},"Forward")),(0,i.kt)("td",{parentName:"tr",align:null},"Browses to the next web page in the navigation history.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(c,{img:"/img/browser/refresh.svg",mdxType:"TableIcon"})," ",(0,i.kt)("strong",{parentName:"td"},"Refresh")),(0,i.kt)("td",{parentName:"tr",align:null},"Reloads the current web page.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(c,{img:"/img/browser/favOff.svg",mdxType:"TableIcon"})," ",(0,i.kt)("strong",{parentName:"td"},"Favorites")),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Favorites screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(c,{img:"/img/shared/config.svg",mdxType:"TableIcon"})," ",(0,i.kt)("strong",{parentName:"td"},"Settings")),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Administrator password dialog, before going to the Browser Settings screen if the correct password is entered.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Note:")," This option may not appear if it has been disabled.")))),(0,i.kt)("h2",{id:"browsing-pages"},"Browsing pages"),(0,i.kt)("p",null,"Normally, browsing to web pages continues without issue by tapping on hyperlinks or by tapping on an icon from the Favorites screen.  The following sections describe special behavior when browsing to pages."),(0,i.kt)("h3",{id:"error-pages"},"Error pages"),(0,i.kt)("p",null,"When browsing web pages, the Datalogic Enterprise Browser will block any attempt to load a page which is located in a domain not in the allowed list.  When this happens, an error page will load which displays the bad URL and the reason for the failure."),(0,i.kt)("p",null,"In addition, various (device or server) network errors can occur, or a page may timeout trying to load.  When this happens, an error page is also displayed which display the nature of the error and an error code to assist in diagnosing the root cause."),(0,i.kt)("h3",{id:"page-authentication"},"Page authentication"),(0,i.kt)("p",null,"Some web pages require authentication before the page loads.  In the case of basic authentication (requiring a username and password), the browser will present a dialog identifying the web server and requesting authentication credentials."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Page Authentication",src:r(34313).Z,width:"234",height:"147"})),(0,i.kt)("p",null,"Once the credentials have been entered, tap Submit to send the information to the server for verification.  If the information is not correct, the dialog will appear again to retry.  This will continue to happen until the credentials are accepted.  Once accepted, they are stored for future use the next time the browser visits the same web server.  These credentials can also be specified in the ",(0,i.kt)("a",{parentName:"p",href:"/browser/sites#configure-site-settings"},(0,i.kt)("strong",{parentName:"a"},"Site Configuration"))," before visiting the site."))}w.isMDXComponent=!0},34313:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/browseAuth-5b620aa6589342ebae95be1b2af05fc2.png"},35760:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/browseFull-0ac6f80f61811f8d1ff5ed6d743ae936.png"},75669:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},97966:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);