"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[4566],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,h=g["".concat(l,".").concat(d)]||g[d]||c[d]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91978:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"ping",title:"Ping Tab",sidebar_label:"Ping Tab"},l=void 0,p={unversionedId:"wifiguard/ping",id:"wifiguard/ping",title:"Ping Tab",description:"Overview",source:"@site/docs/wifiguard/ping.md",sourceDirName:"wifiguard",slug:"/wifiguard/ping",permalink:"/wifiguard/ping",tags:[],version:"current",frontMatter:{id:"ping",title:"Ping Tab",sidebar_label:"Ping Tab"},sidebar:"WiFiGuard",previous:{title:"Overview",permalink:"/wifiguard/overview"},next:{title:"Statistics Tab",permalink:"/wifiguard/stat"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Ping Controls",id:"ping-controls",level:3},{value:"Taking Ping Measurements",id:"taking-ping-measurements",level:2}],g={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Ping tab allows the user to perform a continuous ping to a network address.  It can be used to test the basic network connection state.  It contains a graph of ping results over time, a summary of ping success rate, and controls to change the ping behavior."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Ping Tab",src:n(22433).Z,width:"270",height:"490"})),(0,r.kt)("h3",{id:"ping-controls"},"Ping Controls"),(0,r.kt)("p",null,"The sheet with all the ping controls is at the bottom of the display and can be expanded by dragging up the gripper at its top center.  It can be collapsed by dragging it down.  The following controls are available:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Ping Controls",src:n(6198).Z,width:"270",height:"173"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Destination address:"),"  This is the network address which will be pinged.  It can be an IP address (e.g. 192.168.10.54), or a URL (e.g. mydomain.com).  The default value is the IP address of the current connection's gateway server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Timeout (10 - 60000 ms.):")," This is the time to wait for a response to the ping before declaring the ping attempt to be unsuccessful.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Interval (100 - 60000 ms.):")," This is the time to wait between successive ping attempts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Packet size (16 - 4096):")," This is the number of bytes of data padding which is added to the ping packet on each attempt.  It can be used to represent different sized network packets in applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Maximum TTL (1 - 128):")," This specifies the maximum Time To Live assigned to each ping attempt.  It is the maximum number of routers that may be used to deliver the network packet to the destination address before it is discarded."))),(0,r.kt)("p",null,"While ping data is being collected, the values of these controls cannot be changed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," In the current version, the time values are rounded up to seconds."),(0,r.kt)("h2",{id:"taking-ping-measurements"},"Taking Ping Measurements"),(0,r.kt)("p",null,"Before you begin taking ping measurements, set the destination address to something that you believe can be reached from the device on the network it is currently connected to.  You may also change the other controls from their default values."),(0,r.kt)("p",null,"Tap the blue Play button on the control sheet to begin a ping session.  When tapped, the control sheet will automatically collapse to reveal the graph results, and the Play button will change to a Stop button.  To stop the ping session, tap this button again."),(0,r.kt)("p",null,"While a ping session is active, the results are displayed in the graph and status line beneath it.  The graph displays the ping attempt on the horizontal axis, and the round trip time for each ping is shown on the vertical axis.  Any gaps in the graphed line represent one or more pings that did not respond or exceeded the timeout."),(0,r.kt)("p",null,"In addition to the individual ping response times, the graph also displays statistical information.  Dotted lines display the minimum, maximum and average response times for the session.  A status line beneath the graph summarizes the total success rate of the pings in the current session.  It shows the number of successful pings, ping attempts, and success rate as a percentage."))}d.isMDXComponent=!0},22433:function(e,t,n){t.Z=n.p+"assets/images/pingFull-125b0378675022713fa7acab6bc90e47.png"},6198:function(e,t,n){t.Z=n.p+"assets/images/pingSheet-826b919050554850c56afea3c216a040.png"}}]);