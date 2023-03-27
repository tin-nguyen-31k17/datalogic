"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[4195],{85162:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294),n=a(86010),i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,o),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return U}});var r=a(87462),n=a(67294),i=a(86010),o=a(12466),l=a(16550),c=a(91980),s=a(67392),u=a(50012);function m(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:m(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,c._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function h(e){var t,a,r,i,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,s=e.groupId,m=d(e),h=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:m})})),v=h[0],f=h[1],w=p({queryString:c,groupId:s}),b=w[0],E=w[1],U=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,u.Nk)(t),r=a[0],i=a[1],[r,(0,n.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=U[0],D=U[1],L=function(){var e=null!=b?b:k;return g({value:e,tabValues:m})?e:null}();return(0,n.useLayoutEffect)((function(){L&&f(L)}),[L]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!g({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),E(e),D(e)}),[E,D,m]),tabValues:m}}var v=a(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){var t=e.className,a=e.block,l=e.selectedValue,c=e.selectValue,s=e.tabValues,u=[],m=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=u.indexOf(t),r=s[a].value;r!==l&&(m(t),c(r))},g=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,n=u.indexOf(e.currentTarget)+1;a=null!=(r=u[n])?r:u[0];break;case"ArrowLeft":var i,o=u.indexOf(e.currentTarget)-1;a=null!=(i=u[o])?i:u[u.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return u.push(e)},onKeyDown:g,onClick:d},o,{className:(0,i.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function b(e){var t=e.lazy,a=e.children,r=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var i=a.find((function(e){return e.props.value===r}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function E(e){var t=h(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},n.createElement(w,(0,r.Z)({},e,t)),n.createElement(b,(0,r.Z)({},e,t)))}function U(e){var t=(0,v.Z)();return n.createElement(E,(0,r.Z)({key:String(t)},e))}},7978:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var r=a(87462),n=a(67294),i=a(86010),o=a(54774),l=(a(39960),a(52263)),c=a(44996),s={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featuresOdd:"featuresOdd_MAkx",featureImage:"featureImage_yA8i",dlBlue:"dlBlue_Q7_O"},u=a(74866),m=a(85162),d={title:"Scan2Deploy Studio",imageUrl:"img/homepage/home-scan2deploy.png",imageLink:"/scan2deploy/studio",urlTitle:"Download Tool",toolURL:"https://github.com/datalogic/scan2deploy-studio/releases",description:n.createElement(n.Fragment,null,"Software for configuring Android devices using barcodes.")},g={title:"Android Enterprise QR Code Generator",imageUrl:"img/homepage/home-aeqr.png",imageLink:"/aeqrdoc/overview",urlTitle:"Website",toolURL:"https://datalogic.github.io/aeqr/",description:n.createElement(n.Fragment,null,"Create standard and encrypted Android Enterprise Enrollment QR codes.")},p={title:"OEMConfig",imageUrl:"img/homepage/home-oemconfig.svg",imageLink:"/oemconfig/overview",urlTitle:"Download App",toolURL:"https://play.google.com/store/apps/details?id=com.datalogic.settings.oemconfig",description:n.createElement(n.Fragment,null,"Software for configuring Datalogic specific settings on Android devices. Used by 3rd party EMMs.")},h={title:"Wi-Fi QR Code Generator",imageUrl:"img/homepage/home-wifiqr.png",imageLink:"/wifiqrdoc/overview",urlTitle:"Website",toolURL:"https://datalogic.github.io/wifiqr/",description:n.createElement(n.Fragment,null,"Create standard and encrypted Wi-Fi QR codes.")},v={title:"DXU",imageUrl:"img/homepage/home-dxu-desktop.svg",imageLink:"/dxu/overview",urlTitle:"Download Tool",toolURL:"https://github.com/datalogic/dxu/releases",description:n.createElement(n.Fragment,null,"Windows desktop software for configuring Android and WEC7.")},f={title:"Android SDK",imageUrl:"img/homepage/home-android.png",imageLink:"/android/overview",urlTitle:"API Documentation",toolURL:"https://datalogic.github.io/android-sdk-docs/reference/packages.html",description:n.createElement(n.Fragment,null,"For ",n.createElement("img",{src:"/img/homepage/home-kotlin.png",width:"18"})," Kotlin and ",n.createElement("img",{src:"/img/homepage/home-java.svg",width:"28"}),"Java app development.")},w={title:"JavaScript SDK",imageUrl:"img/homepage/JavaScript-logo.png",imageLink:"/javascript/overview",urlTitle:"Download SDK",toolURL:"https://github.com/datalogic/javascript-sdk/releases",description:n.createElement(n.Fragment,null,"Interface a web app with Datalogic Enterprise Browser.")},b={title:"MAUI / Xamarin SDK",imageUrl:"img/homepage/home-maui.png",imageLink:"/xamarin/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"MAUI / Xamarin (C#) interface to the SDK for Android devices. For development in Visual Studio.")},E={title:"Cordova SDK",imageUrl:"img/homepage/home-cordova.png",imageLink:"/cordova/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"Cordova plugin for use in ",n.createElement("img",{src:"/img/homepage/home-ionic.png",width:"20"})," Ionic apps.")},U={title:"React Native SDK",imageUrl:"img/homepage/home-react.svg",imageLink:"/reactnative/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"React Native module for use in React Native apps.")},k={title:"Handheld Core SDK",imageUrl:"img/homepage/RIDA.png",imageLink:"/hhs/overview",urlTitle:"Download SDK",toolURL:"https://github.com/datalogic/hhs-android-core-sdk-demoapp",description:n.createElement(n.Fragment,null,"Interface an Android app with a Datalogic Bluetooth\xae hand held scanner.")},D={title:"Datalogic Launcher",imageUrl:"img/homepage/home-launcher.svg",imageLink:"/launcher/overview",urlTitle:"Download App",toolURL:"https://play.google.com/store/apps/details?id=com.datalogic.launcher",description:n.createElement(n.Fragment,null,"Android application that locks down the device to launch only allowed applications.")},L={title:"Datalogic Enterprise Browser",imageUrl:"img/homepage/home-browser.svg",imageLink:"/browser/overview",urlTitle:"Download App",toolURL:"https://play.google.com/store/apps/details?id=com.datalogic.browser",description:n.createElement(n.Fragment,null,"Android application for web browsing to only allowed sites and to expose JavaScript access to the scanner.")},y={title:"Datalogic Logger",imageUrl:"img/homepage/home-logger.svg",imageLink:"/logger/overview",urlTitle:"Download App",toolURL:"https://play.google.com/store/apps/details?id=com.datalogic.logger",description:n.createElement(n.Fragment,null,"Android application that collects device logs for further analysis.")},S={title:"Datalogic WiFi Guard",imageUrl:"img/homepage/home-wifi-guard.png",imageLink:"/wifiguard/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"Android application that assists in improving Wi\u2011Fi network performance and diagnosing connection problems.")},T={title:"Memor Ethernet Adapter Service Utility",imageUrl:"img/homepage/home-phonegap.png",imageLink:"/m10ethcradle/overview",urlTitle:"Download Tool",toolURL:"https://developer.datalogic.com/mobile-computers/tools/M10EA",description:n.createElement(n.Fragment,null,"Android application that manages the Memor 10 or Memor 11 connection to the Ethernet cradle.")},N={title:"Scan2Deploy CE",imageUrl:"img/homepage/home-scan2deploy.png",imageLink:"/scan2deploy-ce/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"Software for configuring WEC7 devices using barcodes.")},R={title:"Windows CE SDK",imageUrl:"img/homepage/home-windows.png",imageLink:"/ce/overview",urlTitle:"Download SDK",toolURL:"https://github.com/datalogic/wince-sdk/releases",description:n.createElement(n.Fragment,null,"Datalogic SDK for Windows CE and Windows Mobile devices.")},A={title:"Datalogic CE Sync SDK",imageUrl:"img/homepage/home-ce-sync.svg",imageLink:"/cesync/overview",urlTitle:"",toolURL:"",description:n.createElement(n.Fragment,null,"A simple command line tool that makes use of the datalogic-ce-sync library.")},F={title:"USBLAN",imageUrl:"img/usblan/usb-symbol.png",imageLink:"/usblan/overview",urlTitle:"Download Tool",toolURL:"https://github.com/datalogic/usblan/releases",description:n.createElement(n.Fragment,null,"Driver for TCP/IP communication over USB connections.")},I={title:"JavaPOS",imageUrl:"img/homepage/home-java.svg",imageLink:"/javapos/overview",urlTitle:"Download SDK",toolURL:"https://www.datalogic.com/eng/Download/Form/36031",description:n.createElement(n.Fragment,null,"Java implementation of UnifiedPOS specification for interfacing with fixed retail and handheld scanning devices.")},C={title:"OPOS",imageUrl:"img/homepage/home-opos.png",imageLink:"/opos/overview",urlTitle:"Download SDK",toolURL:"https://www.datalogic.com/eng/Download/Form/35971",description:n.createElement(n.Fragment,null,"Windows implementation of UnifiedPOS specification for interfacing with fixed retail and handheld scanning devices.")},V=[d,g,p,h,v],x=[f,w,b,E,U,k],K=[D,L,y,S,T],Z=[N,v],_=[R,A],q=[F],O=[I,C];function W(e){var t=e.imageUrl,a=e.title,r=e.imageLink,o=e.description,l=e.className,u=e.urlTitle,m=e.toolURL,d=(0,c.Z)(t);return n.createElement("div",{className:(0,i.Z)("col col--4",l)},d&&n.createElement("div",{className:"text--center"},n.createElement("a",{href:r},n.createElement("img",{className:s.featureImage,src:d,alt:a}))),n.createElement("h3",{className:"text--center"},a),n.createElement("h4",{className:"text--center"},n.createElement("a",{href:m},u)),n.createElement("p",null,o))}function M(e){var t=e.feature,a=e.title,i=e.className;return t&&t.length>0&&n.createElement("section",{className:i},n.createElement("div",{className:"container"},n.createElement("h1",null,a),n.createElement("br",null),n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement(W,(0,r.Z)({key:t},e,{className:!0}))})))))}var P=function(){var e=(0,l.Z)().siteConfig,t=void 0===e?{}:e;return n.createElement(o.Z,{title:""+t.title,description:"Datalogic technical documentation site"},n.createElement("main",null,n.createElement(u.Z,null,n.createElement(m.Z,{value:"android",label:"Android",default:!0},n.createElement(M,{feature:V,title:"Configuration",className:s.features}),n.createElement(M,{feature:x,title:"SDKs",className:s.featuresOdd}),n.createElement(M,{feature:K,title:"Utilities",className:s.features})),n.createElement(m.Z,{value:"win",label:"Windows CE"},n.createElement(M,{feature:Z,title:"Configuration",className:s.features}),n.createElement(M,{feature:_,title:"SDKs",className:s.featuresOdd}),n.createElement(M,{feature:q,title:"Utilities",className:s.features})),n.createElement(m.Z,{value:"pos",label:"POS"},n.createElement(M,{feature:O,title:"SDK",className:s.features,description:"Here is text"})))))}}}]);