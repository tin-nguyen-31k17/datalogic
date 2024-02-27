"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[55843],{53318:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var s=i(85893),o=i(11151);const c={id:"ce-schema",title:"Windows CE Schema"},l=void 0,t={id:"scan2deploy-ce/ce-schema",title:"Windows CE Schema",description:'This repo stores the JSON schema used by Scan2Deploy for Windows CE. The latest "stable" version of the schema is also available at schemastore.org.',source:"@site/docs/scan2deploy-ce/ce-schema.md",sourceDirName:"scan2deploy-ce",slug:"/scan2deploy-ce/ce-schema",permalink:"/scan2deploy-ce/ce-schema",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ce-schema",title:"Windows CE Schema"},sidebar:"Scan2DeployCE",previous:{title:"Scan2Deploy CE",permalink:"/scan2deploy-ce/overview"}},d={},a=[{value:"Schema Versioning",id:"schema-versioning",level:2},{value:"Layout Section",id:"layout-section",level:3},{value:"Global Section",id:"global-section",level:3},{value:"Settings Section",id:"settings-section",level:3},{value:"Network Section",id:"network-section",level:3},{value:"Deployment Section",id:"deployment-section",level:3},{value:"Shell Section",id:"shell-section",level:3}];function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:['This repo stores the JSON schema used by Scan2Deploy for Windows CE. The latest "stable" version of the schema is also available at ',(0,s.jsx)(n.a,{href:"http://json.schemastore.org/datalogic-scan2deploy-ce",children:"schemastore.org"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"schema-versioning",children:"Schema Versioning"}),"\n",(0,s.jsxs)(n.p,{children:["The schema follows the conventions of ",(0,s.jsx)(n.a,{href:"https://github.com/snowplow/iglu/wiki/SchemaVer",children:"SchemaVer"}),", provided here for convenience:"]}),"\n",(0,s.jsx)(n.p,{children:"SchemaVer is defined as follows: MODEL-REVISION-ADDITION"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"MODEL when you make a breaking schema change which will prevent interaction with any historical data"}),"\n",(0,s.jsx)(n.li,{children:"REVISION when you introduce a schema change which may prevent interaction with some historical data"}),"\n",(0,s.jsx)(n.li,{children:"ADDITION when you make a schema change that is compatible with all historical data"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/datalogic/scan2deploy-ce-schema/blob/master/schema.json",children:"schema.json"})," file doesn't contain any indication of it's version on it's own. Instead, we use GitHub ",(0,s.jsx)(n.a,{href:"https://github.com/datalogic/scan2deploy-ce-schema/releases",children:"releases"})," to version the schema."]}),"\n",(0,s.jsx)(n.h3,{id:"layout-section",children:"Layout Section"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"layout"})," section is used to format the output file. The available parameters are the following"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": (optional) Free-form description field (350 max characters). Description will be displayed in header of output file. The default description is ",(0,s.jsx)(n.code,{children:"none"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"global-section",children:"Global Section"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"global"})," section is used to configure some application scoped settings. The available parameters are the following"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"target-path"}),": (optional) This is the base destination folder where any archive/folder will be inflated. The default value is ",(0,s.jsx)(n.code,{children:"\\FlashDisk"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"action"}),": (optional) Specifies the final action performed by the application at the very end of the staging process. This can be ",(0,s.jsx)(n.code,{children:"stay"}),", ",(0,s.jsx)(n.code,{children:"close"}),", ",(0,s.jsx)(n.code,{children:"warm-boot"}),", ",(0,s.jsx)(n.code,{children:"cold-boot"}),", or ",(0,s.jsx)(n.code,{children:"clean-boot"}),". The default value is ",(0,s.jsx)(n.code,{children:"cold-boot"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ping-timeout"}),": (optional) The timeout value used when attempting to reach the host server. The default value is ",(0,s.jsx)(n.code,{children:"1000"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"settings-section",children:"Settings Section"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"settings"})," section is used to configure some inner device settings. The available parameters are the following"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"usb-function"}),": (optional) USB communication function in use. Available values are ",(0,s.jsx)(n.code,{children:"active-sync-usb"}),", ",(0,s.jsx)(n.code,{children:"active-sync-com"}),", ",(0,s.jsx)(n.code,{children:"usblan"}),", and ",(0,s.jsx)(n.code,{children:"mass-storage"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The default value is ",(0,s.jsx)(n.code,{children:"active-sync-usb"}),". ",(0,s.jsx)(n.strong,{children:"Requires reboot for usb setting change to take effect."})]}),"\n",(0,s.jsx)(n.h3,{id:"network-section",children:"Network Section"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"network"})," section is used to configure the device Wi-Fi network. The available parameters are the following"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"profile"}),': (optional) The "friendly" name to associate with the network connection. The default value is ',(0,s.jsx)(n.code,{children:"datalogic"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"essid"}),": (optional) The wireless network ESSID. The default value is ",(0,s.jsx)(n.code,{children:"tsunami"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mode"}),": (optional) The wireless connection mode. Supported values are ",(0,s.jsx)(n.code,{children:"open"}),", ",(0,s.jsx)(n.code,{children:"wep-40"}),", ",(0,s.jsx)(n.code,{children:"wep-104"}),", ",(0,s.jsx)(n.code,{children:"wpa-psk"}),", ",(0,s.jsx)(n.code,{children:"wpa2-psk"}),", ",(0,s.jsx)(n.code,{children:"wpa-tkip"}),", and ",(0,s.jsx)(n.code,{children:"wpa2-aes"}),". The default value is ",(0,s.jsx)(n.code,{children:"open"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mode-key"}),": (optional) The wireless network key for ",(0,s.jsx)(n.code,{children:"wep-40"}),", ",(0,s.jsx)(n.code,{children:"wep-104"}),", ",(0,s.jsx)(n.code,{children:"wpa-psk"}),", and ",(0,s.jsx)(n.code,{children:"wpa2-psk"})," networks. The default value is the empty string (i.e. ",(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"index"}),": (optional) The wireless network key index for ",(0,s.jsx)(n.code,{children:"wep-40"})," and ",(0,s.jsx)(n.code,{children:"wep-104"})," networks. Supported values are ",(0,s.jsx)(n.code,{children:"1"}),", ",(0,s.jsx)(n.code,{children:"2"}),", ",(0,s.jsx)(n.code,{children:"3"}),", and ",(0,s.jsx)(n.code,{children:"4"}),". The default value is ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eap-method"}),": (optional) Configures the EAP authentication method. Supported values are ",(0,s.jsx)(n.code,{children:"none"}),", ",(0,s.jsx)(n.code,{children:"peap"}),", ",(0,s.jsx)(n.code,{children:"tls"}),", ",(0,s.jsx)(n.code,{children:"ttls"}),", ",(0,s.jsx)(n.code,{children:"fast"}),", and ",(0,s.jsx)(n.code,{children:"leap"}),". The default value is ",(0,s.jsx)(n.code,{children:"none"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eap-username"}),": (optional) The username for the EAP method. The default value is the empty string (i.e. ",(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eap-password"}),": (optional) The password for the EAP method. The default value is the empty string (i.e. ",(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"credentials-type"}),": (optional) Indicates the EAP credentials type. Supported values are ",(0,s.jsx)(n.code,{children:"password"}),", ",(0,s.jsx)(n.code,{children:"token"}),", ",(0,s.jsx)(n.code,{children:"certificate"}),", and ",(0,s.jsx)(n.code,{children:"unknown"}),". The default value is ",(0,s.jsx)(n.code,{children:"password"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"credentials-source"}),": (optional) Indicates the EAP credentials source. Supported values are ",(0,s.jsx)(n.code,{children:"user"}),", ",(0,s.jsx)(n.code,{children:"logon"}),", ",(0,s.jsx)(n.code,{children:"profile"}),", ",(0,s.jsx)(n.code,{children:"auto"}),", and ",(0,s.jsx)(n.code,{children:"unknown"}),". The default value is ",(0,s.jsx)(n.code,{children:"user"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"validate-server"}),": (optional) Boolean value indicating if the server certificate should be validated. The default value is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"connect-to-server"}),": (optional) Boolean value indicating if only the servers listed in the ",(0,s.jsx)(n.code,{children:"connect-to-server-names"})," list should be connected to. The default value is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"connect-to-server-names"}),": (optional) Semi-colon separated list of servers that are valid to connect to during server certificate validation. The default value is the empty string (i.e. ",(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"server-cert-name"}),': (optional) The "friendly" name of the server digital certificate that should be validated. The default value is the empty string (i.e. ',(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"outer-identity"}),": (optional)  The outer identity for the EAP method. The default value is the empty string (i.e. ",(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fast-reconnect"}),": (optional) Boolean value to enable fast reconnect. The default value is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inner-method"}),": (optional) The inner EAP authentication method to use. Supported values are ",(0,s.jsx)(n.code,{children:"eap-tls"}),", ",(0,s.jsx)(n.code,{children:"eap-MsChapV2"}),", and ",(0,s.jsx)(n.code,{children:"eap-gtc"}),". The default value is ",(0,s.jsx)(n.code,{children:"eap-tls"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"auto-pac"}),": (optional) Boolean value indicating if automatic PAC provisioning is used for an EAP-FAST network. The default value is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pac-file-path"}),": (optional) The full path to the PAC file for manual PAC provisioning. The default value is the empty string (i.e. ",(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pac-aid-info"}),": (optional) The PAC authority identity (AID) information used to select PAC from a list of PACs on the device. The default value is the empty string (i.e. ",(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"deployment-section",children:"Deployment Section"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"deployment"})," section can be used to download a ZIP archive from a server and inflate it to the ",(0,s.jsx)(n.code,{children:"target-path"})," folder. The available parameters are the following"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scheme"}),": (optional) The deployment download scheme to use. Can be either ",(0,s.jsx)(n.code,{children:"http"})," or ",(0,s.jsx)(n.code,{children:"https"}),". The default value is ",(0,s.jsx)(n.code,{children:"http"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"host"}),": (mandatory) The host-name or internet-protocol address of the server from which the resource is to be fetched."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"port"}),": (optional) TCP/IP port to be used to contact the server. The default value is ",(0,s.jsx)(n.code,{children:"80"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": (optional) Path to the server resource to download, complete with query-string if needed. The default value is the empty string (",(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"skip-inflation"}),": (optional) Boolean value instructing the application not to inflate the deployment archive once downloaded. This can be used to download an executable file. The default value is false."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"shell-section",children:"Shell Section"}),"\n",(0,s.jsxs)(n.p,{children:["In the final staging phase, Scan2Deploy can be used to perform post-staging procedures, such as to update firmware or apply a .dxu configuration file to the device.\nThe ",(0,s.jsx)(n.code,{children:"shell"})," section contains the JSON-array ",(0,s.jsx)(n.code,{children:"cmds"}),". Each object in ",(0,s.jsx)(n.code,{children:"cmds"})," is a shell command to execute. The available parameters are the following"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app-name"}),": (mandatory) The full path to the application to be executed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"args"}),": (optional) The command line arguments. The default value is the empty string (",(0,s.jsx)(n.code,{children:'""'}),")."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>l});var s=i(67294);const o={},c=s.createContext(o);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);