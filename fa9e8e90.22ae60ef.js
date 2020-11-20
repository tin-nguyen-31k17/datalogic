(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),l=(n(0),n(171)),o={id:"ce-schema",title:"Windows CE Schema"},r={unversionedId:"scan2deploy-ce/ce-schema",id:"scan2deploy-ce/ce-schema",isDocsHomePage:!1,title:"Windows CE Schema",description:'This repo stores the JSON schema used by Scan2Deploy for Windows CE. The latest "stable" version of the schema is also available at schemastore.org.',source:"@site/docs/scan2deploy-ce/ce-schema.md",slug:"/scan2deploy-ce/ce-schema",permalink:"/scan2deploy-ce/ce-schema",version:"current",sidebar:"Scan2DeployCE",previous:{title:"Scan2Deploy CE",permalink:"/scan2deploy-ce/overview"}},c=[{value:"Schema Versioning",id:"schema-versioning",children:[{value:"Layout Section",id:"layout-section",children:[]},{value:"Global Section",id:"global-section",children:[]},{value:"Settings Section",id:"settings-section",children:[]},{value:"Network Section",id:"network-section",children:[]},{value:"Deployment Section",id:"deployment-section",children:[]},{value:"Shell Section",id:"shell-section",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,'This repo stores the JSON schema used by Scan2Deploy for Windows CE. The latest "stable" version of the schema is also available at ',Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://json.schemastore.org/datalogic-scan2deploy-ce"}),"schemastore.org"),"."),Object(l.b)("h2",{id:"schema-versioning"},"Schema Versioning"),Object(l.b)("p",null,"The schema follows the conventions of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/snowplow/iglu/wiki/SchemaVer"}),"SchemaVer"),", provided here for convenience:"),Object(l.b)("p",null,"SchemaVer is defined as follows: MODEL-REVISION-ADDITION"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"MODEL when you make a breaking schema change which will prevent interaction with any historical data"),Object(l.b)("li",{parentName:"ul"},"REVISION when you introduce a schema change which may prevent interaction with some historical data"),Object(l.b)("li",{parentName:"ul"},"ADDITION when you make a schema change that is compatible with all historical data")),Object(l.b)("p",null,"The ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-ce-schema/blob/master/schema.json"}),"schema.json")," file doesn't contain any indication of it's version on it's own. Instead, we use Github's ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/datalogic/scan2deploy-ce-schema/releases"}),"releases")," to version the schema."),Object(l.b)("h3",{id:"layout-section"},"Layout Section"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"layout")," section is used to format the output file. The available parameters are the following"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"description"),": (optional) Free-form description field (350 max characters). Description will be displayed in header of output file. The default description is ",Object(l.b)("inlineCode",{parentName:"li"},"none"),".")),Object(l.b)("h3",{id:"global-section"},"Global Section"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"global")," section is used to configure some application scoped settings. The available parameters are the following"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"target-path"),": (optional) This is the base destination folder where any archive/folder will be inflated. The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"\\FlashDisk"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"action"),": (optional) Specifies the final action performed by the application at the very end of the staging process. This can be ",Object(l.b)("inlineCode",{parentName:"li"},"stay"),", ",Object(l.b)("inlineCode",{parentName:"li"},"close"),", ",Object(l.b)("inlineCode",{parentName:"li"},"warm-boot"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cold-boot"),", or ",Object(l.b)("inlineCode",{parentName:"li"},"clean-boot"),". The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"cold-boot"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ping-timeout"),": (optional) The timeout value used when attempting to reach the host server. The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"1000"),".")),Object(l.b)("h3",{id:"settings-section"},"Settings Section"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"settings")," section is used to configure some inner device settings. The available parameters are the following"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"usb-function"),": (optional) USB communication function in use. Available values are ",Object(l.b)("inlineCode",{parentName:"li"},"active-sync-usb"),", ",Object(l.b)("inlineCode",{parentName:"li"},"active-sync-com"),", ",Object(l.b)("inlineCode",{parentName:"li"},"usblan"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"mass-storage"),".")),Object(l.b)("p",null,"The default value is ",Object(l.b)("inlineCode",{parentName:"p"},"active-sync-usb"),". ",Object(l.b)("strong",{parentName:"p"},"Requires reboot for usb setting change to take effect.")),Object(l.b)("h3",{id:"network-section"},"Network Section"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"network")," section is used to configure the device Wi-Fi network. The available parameters are the following"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"profile"),': (optional) The "friendly" name to associate with the network connection. The default value is ',Object(l.b)("inlineCode",{parentName:"li"},"datalogic"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"essid"),": (optional) The wireless network ESSID. The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"tsunami"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mode"),": (optional) The wireless connection mode. Supported values are ",Object(l.b)("inlineCode",{parentName:"li"},"open"),", ",Object(l.b)("inlineCode",{parentName:"li"},"wep-40"),", ",Object(l.b)("inlineCode",{parentName:"li"},"wep-104"),", ",Object(l.b)("inlineCode",{parentName:"li"},"wpa-psk"),", ",Object(l.b)("inlineCode",{parentName:"li"},"wpa2-psk"),", ",Object(l.b)("inlineCode",{parentName:"li"},"wpa-tkip"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"wpa2-aes"),". The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"open"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mode-key"),": (optional) The wireless network key for ",Object(l.b)("inlineCode",{parentName:"li"},"wep-40"),", ",Object(l.b)("inlineCode",{parentName:"li"},"wep-104"),", ",Object(l.b)("inlineCode",{parentName:"li"},"wpa-psk"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"wpa2-psk")," networks. The default value is the empty string (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},'""'),")."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"index"),": (optional) The wireless network key index for ",Object(l.b)("inlineCode",{parentName:"li"},"wep-40")," and ",Object(l.b)("inlineCode",{parentName:"li"},"wep-104")," networks. Supported values are ",Object(l.b)("inlineCode",{parentName:"li"},"1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"2"),", ",Object(l.b)("inlineCode",{parentName:"li"},"3"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"4"),". The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"1"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"eap-method"),": (optional) Configures the EAP authentication method. Supported values are ",Object(l.b)("inlineCode",{parentName:"li"},"none"),", ",Object(l.b)("inlineCode",{parentName:"li"},"peap"),", ",Object(l.b)("inlineCode",{parentName:"li"},"tls"),", ",Object(l.b)("inlineCode",{parentName:"li"},"ttls"),", ",Object(l.b)("inlineCode",{parentName:"li"},"fast"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"leap"),". The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"eap-username"),": (optional) The username for the EAP method. The default value is the empty string (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},'""'),")."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"eap-password"),": (optional) The password for the EAP method. The default value is the empty string (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},'""'),")."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"credentials-type"),": (optional) Indicates the EAP credentials type. Supported values are ",Object(l.b)("inlineCode",{parentName:"li"},"password"),", ",Object(l.b)("inlineCode",{parentName:"li"},"token"),", ",Object(l.b)("inlineCode",{parentName:"li"},"certificate"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"unknown"),". The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"password"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"credentials-source"),": (optional) Indicates the EAP credentials source. Supported values are ",Object(l.b)("inlineCode",{parentName:"li"},"user"),", ",Object(l.b)("inlineCode",{parentName:"li"},"logon"),", ",Object(l.b)("inlineCode",{parentName:"li"},"profile"),", ",Object(l.b)("inlineCode",{parentName:"li"},"auto"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"unknown"),". The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"user"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"validate-server"),": (optional) Boolean value indicating if the server certificate should be validated. The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"connect-to-server"),": (optional) Boolean value indicating if only the servers listed in the ",Object(l.b)("inlineCode",{parentName:"li"},"connect-to-server-names")," list should be connected to. The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"connect-to-server-names"),": (optional) Semi-colon separated list of servers that are valid to connect to during server certificate validation. The default value is the empty string (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},'""'),")."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"server-cert-name"),': (optional) The "friendly" name of the server digital certificate that should be validated. The default value is the empty string (i.e. ',Object(l.b)("inlineCode",{parentName:"li"},'""'),")."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"outer-identity"),": (optional)  The outer identity for the EAP method. The default value is the empty string (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},'""'),")."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fast-reconnect"),": (optional) Boolean value to enable fast reconnect. The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"inner-method"),": (optional) The inner EAP authentication method to use. Supported values are ",Object(l.b)("inlineCode",{parentName:"li"},"eap-tls"),", ",Object(l.b)("inlineCode",{parentName:"li"},"eap-MsChapV2"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"eap-gtc"),". The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"eap-tls"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"auto-pac"),": (optional) Boolean value indicating if automatic PAC provisioning is used for an EAP-FAST network. The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pac-file-path"),": (optional) The full path to the PAC file for manual PAC provisioning. The default value is the empty string (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},'""'),")."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pac-aid-info"),": (optional) The PAC authority identity (AID) information used to select PAC from a list of PACs on the device. The default value is the empty string (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},'""'),").")),Object(l.b)("h3",{id:"deployment-section"},"Deployment Section"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"deployment")," section can be used to download a ZIP archive from a server and inflate it to the ",Object(l.b)("inlineCode",{parentName:"p"},"target-path")," folder. The available parameters are the following"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"scheme"),": (optional) The deployment download scheme to use. Can be either ",Object(l.b)("inlineCode",{parentName:"li"},"http")," or ",Object(l.b)("inlineCode",{parentName:"li"},"https"),". The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"http"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"host"),": (mandatory) The host-name or internet-protocol address of the server from which the resource is to be fetched."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"port"),": (optional) TCP/IP port to be used to contact the server. The default value is ",Object(l.b)("inlineCode",{parentName:"li"},"80"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"path"),": (optional) Path to the server resource to download, complete with query-string if needed. The default value is the empty string (",Object(l.b)("inlineCode",{parentName:"li"},'""'),")."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"skip-inflation"),": (optional) Boolean value instructing the application not to inflate the deployment archive once downloaded. This can be used to download an executable file. The default value is false.")),Object(l.b)("h3",{id:"shell-section"},"Shell Section"),Object(l.b)("p",null,"In the final staging phase, Scan2Deploy can be used to perform post-staging procedures, such as to update firmware or apply a .dxu configuration file to the device.\nThe ",Object(l.b)("inlineCode",{parentName:"p"},"shell")," section contains the JSON-array ",Object(l.b)("inlineCode",{parentName:"p"},"cmds"),". Each object in ",Object(l.b)("inlineCode",{parentName:"p"},"cmds")," is a shell command to execute. The available parameters are the following"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"app-name"),": (mandatory) The full path to the application to be executed."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"args"),": (optional) The command line arguments. The default value is the empty string (",Object(l.b)("inlineCode",{parentName:"li"},'""'),").")))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?i.a.createElement(u,r(r({ref:t},b),{},{components:n})):i.a.createElement(u,r({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var b=2;b<l;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);