"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3032],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,g=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return n?i.createElement(g,l(l({ref:t},s),{},{components:n})):i.createElement(g,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86159:function(e,t,n){n.r(t),n.d(t,{Icon:function(){return h},assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],r={id:"scanner-and-device-page",title:"Device and Scanner Settings Page",sidebar_label:"Device and Scanner Settings"},c=void 0,p={unversionedId:"scan2deploy/scanner-and-device-page",id:"scan2deploy/scanner-and-device-page",title:"Device and Scanner Settings Page",description:"\x3c!--",source:"@site/docs/scan2deploy/device-and-scanner-page.md",sourceDirName:"scan2deploy",slug:"/scan2deploy/scanner-and-device-page",permalink:"/scan2deploy/scanner-and-device-page",tags:[],version:"current",frontMatter:{id:"scanner-and-device-page",title:"Device and Scanner Settings Page",sidebar_label:"Device and Scanner Settings"},sidebar:"Scan2DeployStudio",previous:{title:"Applications",permalink:"/scan2deploy/applications-page"},next:{title:"Scripts",permalink:"/scan2deploy/scripts-page"}},s={},d=[{value:"Global Policy",id:"global-policy",level:2},{value:"Application Policies",id:"application-policies",level:2},{value:"Creating a new policy",id:"creating-a-new-policy",level:3},{value:"Editing a policy",id:"editing-a-policy",level:3}],h=function(e){var t=e.img;return(0,o.kt)("span",{style:{display:"inline-block"}},"(",(0,o.kt)("img",{src:t,style:{verticalAlign:"bottom",display:"inline"}}),")")},u={toc:d,Icon:h};function g(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Device and scanner settings can be applied at a global or application level. The user can select the policy to modify on the left side of the screen. And the right side of the screen shows the settings for that policy. The checkbox next to a setting determines whether that setting is to be applied or not. The checkboxes allow the user to select and send down only the settings they wish to change."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Scanner Settings page",src:n(90357).Z,width:"1420",height:"853"})),(0,o.kt)("p",null," This page allows users to select and set Datalogic device and scanner settings, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oemconfig/power-settings"},"Power and Charging Settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oemconfig/network-settings"},"Network Settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oemconfig/system-settings"},"System Settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oemconfig/key-settings"},"Keyboard and Scan Buttons")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/oemconfig/scanner-settings"},"Scanner Settings"))),(0,o.kt)("h2",{id:"global-policy"},"Global Policy"),(0,o.kt)("p",null,"The global policy defines the global settings on the device. These settings are applied for all applications that do not have an application policy. To set the global policy settings:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the Global Policy option"),(0,o.kt)("li",{parentName:"ol"},"Modify the settings on the right side of the screen")),(0,o.kt)("h2",{id:"application-policies"},"Application Policies"),(0,o.kt)("p",null,"An application policy defines settings that apply to one or more applications. When an application has a policy, the settings defined by that policy are loaded any time that application is in the foreground. When that application is moved to the background, settings modified by the policy are reverted to their previous values."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Application policies require Datalogic SDK v1.32 or newer. You can view each SDKs minimum supported firmware ",(0,o.kt)("a",{parentName:"p",href:"/android/overview#supported-devices"},"here")))),(0,o.kt)("h3",{id:"creating-a-new-policy"},"Creating a new policy"),(0,o.kt)("p",null,"To create a new Application Policy. Click the Add button under the Applications Policies section. This will bring up the policy popup where the user can select the apps to associate with that policy and give the policy a name. By default, the list of available applications only includes preinstalled applications. Applications can be added to the list by filling in the label and package name fields at the bottom of the popup and pressing add button."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Scanner Settings page",src:n(5357).Z,width:"752",height:"939"})),(0,o.kt)("p",null,"The user adds an application to the policy by clicking the checkbox next to the desired application. When the user is finished adding applications to the policy. They can press the save button to commit their changes or the cancel button to discard them."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"An application can have only one policy. After an application has been added to a policy, that application will appear disabled in the application selector for all other policy."))),(0,o.kt)("h3",{id:"editing-a-policy"},"Editing a policy"),(0,o.kt)("p",null,"Pressing the ",(0,o.kt)(h,{img:"/img/browser/menu.svg",mdxType:"Icon"})," button next to a policy name will bring up a context menu that allows the user to edit or delete the policy. Selecting the edit option will launch the policy popup to allow the user to modify the policy name or associated applications. Pressing the delete button deletes the policy."),(0,o.kt)("p",null,"To set an application policy settings:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the desired Application Policy"),(0,o.kt)("li",{parentName:"ol"},"Modify the settings on the right side of the screen")))}g.isMDXComponent=!0},5357:function(e,t,n){t.Z=n.p+"assets/images/app_policy_create1-329893a9a69ad020a721ac5c5fc2410f.png"},90357:function(e,t,n){t.Z=n.p+"assets/images/scanner_settings-e588aefc831ca2665d3572967cd4c736.png"}}]);