"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[4195],{85162:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(67294),n=a(86010),i={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,l),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(87462),n=a(67294),i=a(86010),l=a(12466),o=a(16550),c=a(91980),s=a(67392),u=a(50012);function m(e){return function(e){var t,a;return null!=(t=null==(a=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:m(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,c._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function h(e){var t,a,r,i,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,s=e.groupId,m=d(e),h=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:m})})),f=h[0],v=h[1],b=p({queryString:c,groupId:s}),w=b[0],E=b[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,u.Nk)(t),r=a[0],i=a[1],[r,(0,n.useCallback)((function(e){t&&i.set(e)}),[t,i])]),U=y[0],L=y[1],k=function(){var e=null!=w?w:U;return g({value:e,tabValues:m})?e:null}();return(0,n.useLayoutEffect)((function(){k&&v(k)}),[k]),{selectedValue:f,selectValue:(0,n.useCallback)((function(e){if(!g({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),E(e),L(e)}),[E,L,m]),tabValues:m}}var f=a(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,a=e.block,o=e.selectedValue,c=e.selectValue,s=e.tabValues,u=[],m=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=u.indexOf(t),r=s[a].value;r!==o&&(m(t),c(r))},g=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,n=u.indexOf(e.currentTarget)+1;a=null!=(r=u[n])?r:u[0];break;case"ArrowLeft":var i,l=u.indexOf(e.currentTarget)-1;a=null!=(i=u[l])?i:u[u.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return u.push(e)},onKeyDown:g,onClick:d},l,{className:(0,i.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function w(e){var t=e.lazy,a=e.children,r=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===r}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function E(e){var t=h(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function y(e){var t=(0,f.Z)();return n.createElement(E,(0,r.Z)({key:String(t)},e))}},7978:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var r=a(87462),n=a(67294),i=a(86010),l=a(7452),o=(a(39960),a(52263)),c=a(44996),s={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featuresOdd:"featuresOdd_MAkx",featureImage:"featureImage_yA8i",dlBlue:"dlBlue_Q7_O"},u=a(74866),m=a(85162),d={title:"Datalogic Shield",imageUrl:"img/homepage/home-shield.png",imageLink:"https://www.datalogic.com/eng/mobile-computers/datalogic-shield-pd-846.html",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"Android security patches/updates for Datalogic mobile computers.")},g={title:"Datalogic Launcher",imageUrl:"img/homepage/home-launcher.png",imageLink:"/launcher/overview",urlTitle:"Download App",toolURL:"https://play.google.com/store/apps/details?id=com.datalogic.launcher",description:n.createElement(n.Fragment,null,"Android application that locks down the device to launch only allowed applications.")},p={title:"Datalogic Enterprise Browser",imageUrl:"img/homepage/home-browser.png",imageLink:"/browser/overview",urlTitle:"Download App",toolURL:"https://play.google.com/store/apps/details?id=com.datalogic.browser",description:n.createElement(n.Fragment,null,"Android application for web browsing to only allowed sites and to expose JavaScript access to the scanner.")},h={title:"Scan2Deploy Studio",imageUrl:"img/homepage/home-scan2deploy.png",imageLink:"/scan2deploy/studio",urlTitle:"Download Tool",toolURL:"https://github.com/datalogic/scan2deploy-studio/releases",description:n.createElement(n.Fragment,null,"Software for configuring Android devices using barcodes.")},f={title:"Android Enterprise QR Code Generator",imageUrl:"img/homepage/home-aeqr.png",imageLink:"/aeqrdoc/overview",urlTitle:"Website",toolURL:"https://datalogic.github.io/aeqr/",description:n.createElement(n.Fragment,null,"Create standard and encrypted Android Enterprise Enrollment QR codes.")},v={title:"OEMConfig",imageUrl:"img/homepage/home-oemconfig.png",imageLink:"/oemconfig/overview",urlTitle:"Download App",toolURL:"https://play.google.com/store/apps/details?id=com.datalogic.settings.oemconfig",description:n.createElement(n.Fragment,null,"Software for configuring Datalogic specific settings on Android devices. Used by 3rd party EMMs.")},b={title:"Wi-Fi QR Code Generator",imageUrl:"img/homepage/home-wifiqr.png",imageLink:"/wifiqrdoc/overview",urlTitle:"Website",toolURL:"https://datalogic.github.io/wifiqr/",description:n.createElement(n.Fragment,null,"Create standard and encrypted Wi-Fi QR codes.")},w={title:"Android SDKs",imageUrl:"img/homepage/home-android-sdk.png",imageLink:"/android/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"App development SDKs supporting various languages including ",n.createElement("img",{src:"/img/homepage/home-kotlin.svg",width:"18"})," Kotlin, ",n.createElement("img",{src:"/img/homepage/home-java.svg",width:"20"})," Java, and ",n.createElement("img",{src:"/img/homepage/home-javascript.svg",width:"20"})," Javascript.")},E={title:"Visual Formatter",imageUrl:"img/homepage/home-format.png",imageLink:"/scan2deploy/visual-formatter-basic-concepts",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"Allows users to create formatting rules to manipulate the barcode data received from the scanner.")},y={title:"SoftSpot",imageUrl:"img/homepage/home-softspot.png",imageLink:"/softspot/overview",urlTitle:"Download App",toolURL:"https://play.google.com/store/apps/details?id=com.datalogic.softspot",description:n.createElement(n.Fragment,null,"Android application that allows for easy access to the barcode scanner and other frequently used actions.")},U={title:"Datalogic Logger",imageUrl:"img/homepage/home-logger.png",imageLink:"/logger/overview",urlTitle:"Download App",toolURL:"https://play.google.com/store/apps/details?id=com.datalogic.logger",description:n.createElement(n.Fragment,null,"Android application that collects device logs for further analysis.")},L={title:"Datalogic WiFi Guard",imageUrl:"img/homepage/home-wifi-guard.png",imageLink:"/wifiguard/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"Android application that assists in improving Wi\u2011Fi network performance and diagnosing connection problems.")},k={title:"Battery Manager",imageUrl:"img/homepage/home-battery.png",imageLink:"/battery-manager/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"Android application that present battery usage information and help optimize power consumption.")},D={title:"Handheld Core SDK",imageUrl:"img/homepage/home-handheld.png",imageLink:"/hhs/overview",urlTitle:"Download SDK",toolURL:"https://github.com/datalogic/hhs-android-core-sdk-demoapp",description:n.createElement(n.Fragment,null,"Interface an Android app with a Datalogic Bluetooth\xae hand held scanner.")},S={title:"Memor Ethernet Adapter Service Utility",imageUrl:"img/homepage/home-ethernet.png",imageLink:"/m10ethcradle/overview",urlTitle:"Download Tool",toolURL:"https://developer.datalogic.com/mobile-computers/tools/M10EA",description:n.createElement(n.Fragment,null,"Android application that manages the Memor 10 or Memor 11 connection to the Ethernet cradle.")},T={title:"Scan2Deploy CE",imageUrl:"img/homepage/home-scan2deploy.png",imageLink:"/scan2deploy-ce/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"Software for configuring WEC7 devices using barcodes.")},N={title:"DXU",imageUrl:"img/homepage/home-dxu-desktop.svg",imageLink:"/dxu/overview",urlTitle:"Download Tool",toolURL:"https://github.com/datalogic/dxu/releases",description:n.createElement(n.Fragment,null,"Windows desktop software for configuring Android and WEC7.")},A={title:"Windows CE SDK",imageUrl:"img/homepage/home-ce-sdk.png",imageLink:"/ce/overview",urlTitle:"Download SDK",toolURL:"https://github.com/datalogic/wince-sdk/releases",description:n.createElement(n.Fragment,null,"Datalogic SDK for Windows CE and Windows Mobile devices.")},R={title:"Datalogic CE Sync SDK",imageUrl:"img/homepage/home-ce-sync.svg",imageLink:"/cesync/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"A simple command line tool that makes use of the datalogic-ce-sync library.")},F={title:"USBLAN",imageUrl:"img/homepage/home-usblan.png",imageLink:"/usblan/overview",urlTitle:"Download Tool",toolURL:"https://github.com/datalogic/usblan/releases",description:n.createElement(n.Fragment,null,"Driver for TCP/IP communication over USB connections.")},C={title:"JavaPOS",imageUrl:"img/homepage/home-java.svg",imageLink:"/javapos/overview",urlTitle:"Download SDK",toolURL:"https://www.datalogic.com/eng/Download/Form/36031",description:n.createElement(n.Fragment,null,"Java implementation of UnifiedPOS specification for interfacing with fixed retail and handheld scanning devices.")},I={title:"OPOS",imageUrl:"img/homepage/home-opos.png",imageLink:"/opos/overview",urlTitle:"Download SDK",toolURL:"https://www.datalogic.com/eng/Download/Form/35971",description:n.createElement(n.Fragment,null,"Windows implementation of UnifiedPOS specification for interfacing with fixed retail and handheld scanning devices.")},V=[d,g,p],Z=[h,f,v,b],O=[w,E],_=[y,U,L,k],q=[N],x=[D],K=[S],W=[T,N],B=[A,R],M=[F],P=[C,I];function j(e){var t=e.imageUrl,a=e.title,r=e.imageLink,l=e.description,o=e.className,u=e.urlTitle,m=e.toolURL,d=(0,c.Z)(t);return n.createElement("div",{className:(0,i.Z)("col col--4",o)},d&&n.createElement("div",{className:"text--center"},n.createElement("a",{href:r},n.createElement("img",{className:s.featureImage,src:d,alt:a}))),n.createElement("h3",{className:"text--center"},a),n.createElement("h4",{className:"text--center"},n.createElement("a",{href:m},u)),n.createElement("p",null,l))}function J(e){var t=e.feature,a=e.title,i=e.className;return t&&t.length>0&&n.createElement("section",{className:i},n.createElement("div",{className:"container"},n.createElement("h1",null,a),n.createElement("br",null),n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement(j,(0,r.Z)({key:t},e,{className:!0}))})))))}var z=function(){var e=(0,o.Z)().siteConfig,t=void 0===e?{}:e;return n.createElement(l.Z,{title:""+t.title,description:"Datalogic technical documentation site"},n.createElement("main",null,n.createElement(u.Z,null,n.createElement(m.Z,{value:"suite",label:"Mobility Suite",default:!0},n.createElement(J,{feature:V,title:"Protect",className:s.features}),n.createElement(J,{feature:Z,title:"Configure",className:s.featuresOdd}),n.createElement(J,{feature:O,title:"Develop",className:s.features}),n.createElement(J,{feature:_,title:"Optimize",className:s.featuresOdd})),n.createElement(m.Z,{value:"android",label:"Android"},n.createElement(J,{feature:q,title:"Configuration",className:s.features}),n.createElement(J,{feature:x,title:"SDK",className:s.featuresOdd}),n.createElement(J,{feature:K,title:"Utilities",className:s.features})),n.createElement(m.Z,{value:"win",label:"Windows CE"},n.createElement(J,{feature:W,title:"Configuration",className:s.features}),n.createElement(J,{feature:B,title:"SDKs",className:s.featuresOdd}),n.createElement(J,{feature:M,title:"Utilities",className:s.features})),n.createElement(m.Z,{value:"pos",label:"POS"},n.createElement(J,{feature:P,title:"SDKs",className:s.features})))))}}}]);