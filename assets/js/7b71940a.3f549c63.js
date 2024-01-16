"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3909],{80294:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>V,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=s(85893),n=s(11151),i=s(55619),a=s(42804);const t={id:"export",title:"Export/Import Settings",sidebar_label:"Export/Import Settings"},d=void 0,l={id:"launcher/export",title:"Export/Import Settings",description:"Cloning Launcher Settings",source:"@site/docs/launcher/export.mdx",sourceDirName:"launcher",slug:"/launcher/export",permalink:"/launcher/export",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"export",title:"Export/Import Settings",sidebar_label:"Export/Import Settings"},sidebar:"Launcher",previous:{title:"Launcher Settings",permalink:"/launcher/config"}},V={},c=[{value:"Cloning Launcher Settings",id:"cloning-launcher-settings",level:2}];function m(e){const r={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"cloning-launcher-settings",children:"Cloning Launcher Settings"}),"\n",(0,o.jsx)(r.p,{children:"Support for cloning settings is not yet available on all devices.  The following list shows the devices which support the feature and the required minimum firmware version:"}),"\n",(0,o.jsx)(i.J,{columns:a.a2,data:a.pl}),"\n",(0,o.jsx)(r.p,{children:"To clone the Datalogic Launcher configuration from one device to multiple devices, follow these steps:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Export the device configuration to a file."})}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:'Go to the Launcher Settings screen, and tap "Export to File".'}),"\n",(0,o.jsx)(r.li,{children:'A dialog will appear prompting you for the name of the file to save the configuration to.  If the name begins with a "/" (slash), it is assumed that the full path to the file is specified.  If not, then the file will be stored in the public "Downloads" directory.  The default name is "launcher.cfg".'}),"\n",(0,o.jsx)(r.li,{children:"Tap the Export button to save the configuration to the named file."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Copy the configuration file from the device to a PC."})}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"Attach the device to a PC with a USB cable."}),"\n",(0,o.jsxs)(r.li,{children:["Open Windows Explorer.  If the Android device is not listed, then launch the Settings Application on the device and follow these steps:","\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:'Tap "Connected devices"'}),"\n",(0,o.jsx)(r.li,{children:'Tap "USB"'}),"\n",(0,o.jsx)(r.li,{children:'Under the heading "Use USB for", tap "File Transfer"'}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.li,{children:'Open the icon for the Android device (e.g. "Skorpio X5").'}),"\n",(0,o.jsx)(r.li,{children:'Open "Internal Shared Storage".  If the files are located on an SD card, you can choose that location instead (e.g. "SanDisk SD Card")'}),"\n",(0,o.jsx)(r.li,{children:'Browse to the folder where the file is stored (e.g. "Download")'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Import the configuration to a device using an EMM (or Scan2Deploy Studio)"})}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"Using the EMM console, locate the Datalogic Launcher configuration settings."}),"\n",(0,o.jsx)(r.li,{children:'For the setting "Import settings from file", specify the filename of the configuration settings file.  The filename should match the value used by the "Export to File" dialog from step 1 earlier (e.g. "launcher.cfg").'}),"\n",(0,o.jsx)(r.li,{children:'Configure the EMM to send the configuration file to the device.  The name and location should be the same as specified by the previous step (e.g. "/sdcard/Download/launcher.cfg")'}),"\n",(0,o.jsx)(r.li,{children:"Configure the EMM to send any additional files required by the configuration for custom wallpaper and/or icons."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Enroll one or more devices with the EMM (or Scan2Deploy Studio)"})}),"\n",(0,o.jsx)(r.p,{children:"Once a new device is enrolled with the EMM, the settings will automatically be applied to the new device.  The same is true when scanning a barcode to deploy settings with Scan2Deploy Studio."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},55619:(e,r,s)=>{s.d(r,{J:()=>a});s(67294);var o=s(79521),n=s(85893);const i=()=>({}),a=e=>{let{columns:r,data:s,model:a,getHeaderProps:t=i,getColumnProps:d=i}=e;const{getTableProps:l,getTableBodyProps:V,headerGroups:c,rows:m,prepareRow:u}=(0,o.useTable)({columns:r,data:s,initialState:{hiddenColumns:["modelName"],filters:[{id:"modelName",value:a}]}},o.useFilters,o.useSortBy);return(0,n.jsxs)("table",{...l(),children:[(0,n.jsx)("thead",{children:c.map((e=>(0,n.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,n.jsxs)("th",{...e.getHeaderProps([{className:e.className},t(e),d(e),e.getSortByToggleProps()]),children:[e.render("Header"),(0,n.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""})]})))})))}),(0,n.jsx)("tbody",{...V(),children:m.map(((e,r)=>(u(e),(0,n.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>(0,n.jsx)("td",{...e.getCellProps([{className:e.column.className,style:e.column.style},d(e.column)]),children:e.render("Cell")})))}))))})]})}},42804:(e,r,s)=>{s.d(r,{A8:()=>V,BI:()=>n,JU:()=>d,OS:()=>t,Oz:()=>a,Qq:()=>i,YY:()=>l,a2:()=>m,fB:()=>p,gp:()=>v,pl:()=>u,r6:()=>o,u9:()=>c});const o=[{modelName:"Memor 10",firmwareVersion:"3.03.10",releaseDate:"2023-05-29",osVersion:"10",securityPatch:"2023-02-05",sdkAddOnVersion:"1.34.1",dlScannerServiceVersion:"2.2.0.23-r2-244",dlSettingsVersion:"2.11.0",scan2DeployVersion:"1.40.3",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 10",firmwareVersion:"3.02.06",releaseDate:"2022-07-25",osVersion:"10",securityPatch:"2022-01-01",sdkAddOnVersion:"1.31",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"1.37.10111",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 10",firmwareVersion:"3.01.05",releaseDate:"2022-03-01",osVersion:"10",securityPatch:"2022-01-01",sdkAddOnVersion:"1.31",dlScannerServiceVersion:"v2.2.0.12-r2-123",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 10",firmwareVersion:"3.00.03",releaseDate:"2021-10-21",osVersion:"10",securityPatch:"2021-08-01",sdkAddOnVersion:"1.29",dlScannerServiceVersion:"v2.2.0.10-r5-120",dlSettingsVersion:"",scan2DeployVersion:"1.33.7665",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 10",firmwareVersion:"2.10.16",releaseDate:"2022-04-20",osVersion:"9.0",securityPatch:"2021-09-01",sdkAddOnVersion:"1.29",visualFormatterFeatureLevel:"3"},{modelName:"Memor 10",firmwareVersion:"2.09.14",releaseDate:"2021-11-25",osVersion:"9.0",securityPatch:"2021-09-01",sdkAddOnVersion:"1.29",visualFormatterFeatureLevel:"2"},{modelName:"Memor 10",firmwareVersion:"2.07.11",releaseDate:"2021-04-29",osVersion:"9.0",securityPatch:"2021-03-01",sdkAddOnVersion:"1.25",scan2DeployVersion:"1.29.6539",setupWizardScannerVersion:"1.24.6565",dlBatteryManager:"1.5.0",espresso:{version:"2.0",sureLockVersion:"21.01.14",sureFoxVersion:"9.05"},visualFormatterFeatureLevel:"2"},{modelName:"Memor 10",firmwareVersion:"2.06.08",releaseDate:"2020-12-02",osVersion:"9.0",securityPatch:"2020-11-05",sdkAddOnVersion:"1.25",scan2DeployVersion:"1.26.5419",dlScannerServiceVersion:"2.1.0.1-r1-104",setupWizardScannerVersion:"1.22.4963",dxuAgentVersion:"1.32.4399",eaInstallerVersion:"2.4.4.08",sureLockVersion:"13.52",sureFoxVersion:"8.43",scan2DeployAlwaysEnabled:!0,visualFormatterFeatureLevel:"2"},{modelName:"Memor 10",firmwareVersion:"2.05.07",releaseDate:"2020-08-13",osVersion:"9.0",securityPatch:"2020-08-05",sdkAddOnVersion:"1.22",scan2DeployVersion:"",dlScannerServiceVersion:"1.3.2.01-r8",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor 10",firmwareVersion:"2.04.05",releaseDate:"2020-06-08",osVersion:"9.0",securityPatch:"2020-05-05",sdkAddOnVersion:"1.22",scan2DeployVersion:"",dlScannerServiceVersion:"1.3.2.00-r2",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor 10",firmwareVersion:"2.03.04",releaseDate:"2020-03-11",osVersion:"9.0",securityPatch:"2020-03-05",sdkAddOnVersion:"1.21",scan2DeployVersion:"1.17.3122",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor 10",firmwareVersion:"1.10.22",releaseDate:"2020-11-16",osVersion:"8.1",securityPatch:"2020-09-01",scan2DeployVersion:"1.26.5417",dlScannerServiceVersion:"1.3.2.01-r2.1-95",sdkAddOnVersion:"1.22",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor 10",firmwareVersion:"1.09.18",releaseDate:"2020-06-17",osVersion:"8.1",securityPatch:"2020-06-05",dxuAgentVersion:"1.28.1865",scan2DeployVersion:"1.18.3248",softSpotVersion:"2.1.1802",dlBatteryManager:"1.5.0",dlScannerServiceVersion:"1.3.2.01-r2",sdkAddOnVersion:"1.22",enterpriseAgentVersion:"2.3.4.02",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor 10",firmwareVersion:"1.07.15",releaseDate:"2019-12-27",osVersion:"8.1",securityPatch:"2020-01-05",dlScannerServiceVersion:"1.2.11.03-r5",dxuAgentVersion:"1.27.1624",sdkAddOnVersion:"1.21",sureLockVersion:"12.41",sureFoxVersion:"7.87",scan2DeployVersion:"1.13.1721",softSpotVersion:"2.0.444",dlBatteryManager:"1.4.5",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor 11",firmwareVersion:"1.07.15",releaseDate:"2024-01-15",osVersion:"11",securityPatch:"2024-01-05",sdkAddOnVersion:"1.34.6",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 11",firmwareVersion:"1.06.14",releaseDate:"2023-12-11",osVersion:"11",securityPatch:"2023-12-05",sdkAddOnVersion:"1.34.6",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 11",firmwareVersion:"1.05.12",releaseDate:"2023-11-20",osVersion:"11",securityPatch:"2023-11-05",sdkAddOnVersion:"1.34.6",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 11",firmwareVersion:"1.04.10",releaseDate:"2023-10-26",osVersion:"11",securityPatch:"2023-10-06",sdkAddOnVersion:"1.34.6",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 11",firmwareVersion:"1.03.07",releaseDate:"2023-09-13",osVersion:"11",securityPatch:"2023-08-05",sdkAddOnVersion:"1.34.6",dlScannerServiceVersion:"2.2.0.27-r3-247",dlSettingsVersion:"2.15.0",scan2DeployVersion:"2.1.0",visualFormatterFeatureLevel:"3"},{modelName:"Memor 11",firmwareVersion:"1.02.05",releaseDate:"2023-08-03",osVersion:"11",securityPatch:"2023-07-05",sdkAddOnVersion:"1.34.1",dlScannerServiceVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 11",firmwareVersion:"1.01.03",releaseDate:"2023-06-16",osVersion:"11",securityPatch:"2023-04-05",sdkAddOnVersion:"1.34.1",dlScannerServiceVersion:"2.2.0.23-r2-244",visualFormatterFeatureLevel:"3"},{modelName:"Memor 11",firmwareVersion:"1.00.01",releaseDate:"2023-03-31",osVersion:"11",securityPatch:"2023-01-05",sdkAddOnVersion:"1.33.6",dlScannerServiceVersion:"2.2.0.21-r6",dlSettingsVersion:"2.7.0",scan2DeployVersion:"1.40.2",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.26.001",releaseDate:"2024-01-15",osVersion:"11",securityPatch:"2024-01-05",sdkAddOnVersion:"1.34.7",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.25.001",releaseDate:"2023-12-14",osVersion:"11",securityPatch:"2023-12-05",sdkAddOnVersion:"1.34.7",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.24.001",releaseDate:"2023-11-08",osVersion:"11",securityPatch:"2023-11-05",sdkAddOnVersion:"1.34.7",dlScannerServiceVersion:"2.2.0.31-r1-249",dlSettingsVersion:"2.16.0",scan2DeployVersion:"",dockManagerVersion:"1.16.0",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.23.002",releaseDate:"2023-10-17",osVersion:"11",securityPatch:"2023-10-05",sdkAddOnVersion:"1.34.4",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.22.001",releaseDate:"2023-09-28",osVersion:"11",securityPatch:"2023-09-05",sdkAddOnVersion:"1.34.4",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.21.001",releaseDate:"2023-08-28",osVersion:"11",securityPatch:"2023-08-05",sdkAddOnVersion:"1.34.4",dlScannerServiceVersion:"2.2.0.27-r3-247",dlSettingsVersion:"2.15.0",scan2DeployVersion:"2.1.0",dockManagerVersion:"1.15.0",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.20.002",releaseDate:"2023-07-17",osVersion:"11",securityPatch:"2023-07-05",sdkAddOnVersion:"1.34.2",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.19.001",releaseDate:"2023-06-06",osVersion:"11",securityPatch:"2023-06-05",sdkAddOnVersion:"1.34.2",dlScannerServiceVersion:"2.2.0.23-r2-244",dlSettingsVersion:"",scan2DeployVersion:"2.0.8",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.17.001",releaseDate:"2023-05-11",osVersion:"11",securityPatch:"2023-05-05",sdkAddOnVersion:"1.33.7",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.16.001",releaseDate:"2023-04-18",osVersion:"11",securityPatch:"2023-04-05",sdkAddOnVersion:"1.33",dlScannerServiceVersion:"2.2.0.21-r4-239",dlSettingsVersion:"",scan2DeployVersion:"1.40.2",dockManagerVersion:"1.12.0",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.15.001",releaseDate:"2023-03-16",osVersion:"11",securityPatch:"2023-03-05",sdkAddOnVersion:"1.33",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.14.001",releaseDate:"2023-02-16",osVersion:"11",securityPatch:"2023-02-05",sdkAddOnVersion:"1.33",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.13.001",releaseDate:"2023-01-10",osVersion:"11",securityPatch:"2023-01-05",sdkAddOnVersion:"1.33",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.11.001",releaseDate:"2022-12-14",osVersion:"11",securityPatch:"2022-12-05",sdkAddOnVersion:"1.30",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.10.001",releaseDate:"2022-11-09",osVersion:"11",securityPatch:"2022-11-05",sdkAddOnVersion:"1.30",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.09.001",releaseDate:"2022-10-10",osVersion:"11",securityPatch:"2022-10-05",sdkAddOnVersion:"1.30",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.08.003",releaseDate:"2022-09-27",osVersion:"11",securityPatch:"2022-09-05",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"v2.2.0.12-r4-125",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.07.001",releaseDate:"2022-07-29",osVersion:"11",securityPatch:"2022-05-05",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"v2.2.0.12-r4-125",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"3.04.002",releaseDate:"2021-12-09",osVersion:"11",securityPatch:"2021-12-01",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"2.2.0.12-r2-123",dlSettingsVersion:"1.10.9",scan2DeployVersion:"1.33.7665",dockManagerVersion:"1.8.7",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"1.11.01",releaseDate:"2022-07-18",osVersion:"9.0",securityPatch:"2022-05-01",sdkAddOnVersion:"1.30",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"1.10.08",releaseDate:"2022-07-18",osVersion:"9.0",securityPatch:"2022-05-01",sdkAddOnVersion:"1.30",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"1.09.06",releaseDate:"2021-08-31",osVersion:"9.0",securityPatch:"2021-05-01",sdkAddOnVersion:"1.29",visualFormatterFeatureLevel:"3"},{modelName:"Memor 20",firmwareVersion:"1.07.08",releaseDate:"2021-03-23",osVersion:"9.0",securityPatch:"2021-02-01",dxuAgentVersion:"1.33.5991",scan2DeployVersion:"1.28",dockManagerVersion:"1.8.2",dlScannerServiceVersion:"2.1.0.3-r2-110",sdkAddOnVersion:"1.27",espresso:{version:"3.2",wifiguardVersion:"1.10",sureLockVersion:"17.14",sureFoxVersion:"8.53",enterpriseAgentVersion:"4.08"},visualFormatterFeatureLevel:"2"},{modelName:"Memor 20",firmwareVersion:"1.06.05",releaseDate:"2020-12-11",osVersion:"9.0",securityPatch:"2020-10-01",sdkAddOnVersion:"1.25",scan2DeployVersion:"1.24.5026",dlScannerServiceVersion:"2.1.0.0-r1-102",dxuAgentVersion:"1.32.4399",dockManagerVersion:"1.6.7",setupWizardScannerVersion:"1.22.4963",visualFormatterFeatureLevel:"0"},{modelName:"Memor 20",firmwareVersion:"1.05.05",releaseDate:"2020-09-03",osVersion:"9.0",securityPatch:"2020-08-05",sdkAddOnVersion:"1.24",scan2DeployVersion:"",dlScannerServiceVersion:"1.3.2.01-r5-97",sureLockVersion:"",dxuAgentVersion:"1.31.4151",softSpotVersion:"2.3.4387",setupWizardScannerVersion:"1.20.4598",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor 20",firmwareVersion:"1.04.15",releaseDate:"2020-07-30",osVersion:"9.0",securityPatch:"2020-05-05",sdkAddOnVersion:"1.23",scan2DeployVersion:"1.19.3684",dlScannerServiceVersion:"1.3.2.01-r3-95",sureLockVersion:"13.51",dxuAgentVersion:"1.29.3371",scan2DeployVersion:"1.19.3684",softSpotVersion:"2.2.3680",batteryManagerVersion:"1.5.0",dockManagerVersion:"1.5.0",eaInstallerVersion:"2.0.4.02",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor K",firmwareVersion:"1.02.09",releaseDate:"2022-07-27",osVersion:"9.0",securityPatch:"2021-06-01",sdkAddOnVersion:"1.26",visualFormatterFeatureLevel:"2"},{modelName:"Memor K",firmwareVersion:"1.00.04",releaseDate:"2020-08-06",osVersion:"9.0",sdkAddOnVersion:"1.22",dlScannerServiceVersion:"1.3.2.02-r1-mk",scan2DeployVersion:"1.31",dxuAgentVersion:"1.28.1865",sureFoxVersion:"7.87",sureLockVersion:"12.41",softSpotVersion:"2.1.1802",visualFormatterFeatureLevel:"2"},{modelName:"Joya Touch 22",firmwareVersion:"1.13.002",releaseDate:"2024-01-15",osVersion:"11",securityPatch:"2024-01-05",sdkAddOnVersion:"1.34.7",dlScannerServiceVersion:"2.2.0.34-r1-250",dlSettingsVersion:"2.16.0",scan2DeployVersion:"1.40.3",dockManagerVersion:"1.16.0",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch 22",firmwareVersion:"1.08.001",releaseDate:"2023-10-11",osVersion:"11",securityPatch:"2023-10-06",sdkAddOnVersion:"1.34.3",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch 22",firmwareVersion:"1.07.001",releaseDate:"2023-09-04",osVersion:"11",securityPatch:"2023-09-05",sdkAddOnVersion:"1.34.3",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch 22",firmwareVersion:"1.06.001",releaseDate:"2023-08-24",osVersion:"11",securityPatch:"2023-08-05",sdkAddOnVersion:"1.34.3",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"2.1.0",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch 22",firmwareVersion:"1.05.001",releaseDate:"2023-07-11",osVersion:"11",securityPatch:"2023-06-05",sdkAddOnVersion:"1.34.3",dlScannerServiceVersion:"2.2.0.27-r2-246",dlSettingsVersion:"2.14.0",scan2DeployVersion:"",dockManagerVersion:"1.14.0",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch 22",firmwareVersion:"1.04.001",releaseDate:"2023-04-28",osVersion:"11",securityPatch:"2023-04-01",sdkAddOnVersion:"1.34",dlScannerServiceVersion:"2.2.0.23 r1-243",dlSettingsVersion:"2.10.0",scan2DeployVersion:"",dockManagerVersion:"1.13.0",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch 22",firmwareVersion:"1.03.007",releaseDate:"2023-02-09",osVersion:"11",securityPatch:"2022-12-01",sdkAddOnVersion:"1.33",dlScannerServiceVersion:"2.2.0.21 r5-240",dlSettingsVersion:"2.7.0",scan2DeployVersion:"1.40.2",dockManagerVersion:"1.12.0",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch 22",firmwareVersion:"1.02.002",releaseDate:"2022-11-10",osVersion:"11",securityPatch:"2022-09-05",sdkAddOnVersion:"1.32",dlScannerServiceVersion:"2.2.0.16-r5-232",dlSettingsVersion:"2.3.3",scan2DeployVersion:"1.39.0",dockManagerVersion:"1.10.0",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch A6",firmwareVersion:"4.06.12",releaseDate:"2022-06-07",osVersion:"9.0",securityPatch:"2022-01-05",sdkAddOnVersion:"1.29",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch A6",firmwareVersion:"4.05.09",releaseDate:"2022-01-03",osVersion:"9.0",securityPatch:"2021-09-01",sdkAddOnVersion:"1.29",visualFormatterFeatureLevel:"3"},{modelName:"Joya Touch A6",firmwareVersion:"4.01.03",releaseDate:"2021-04-08",osVersion:"9.0",securityPatch:"2021-02-01",scan2DeployVersion:"1.29",dlScannerServiceVersion:"2.1.0.1-r2-105",sdkAddOnVersion:"1.25",dlBatteryManager:"1.6.0",visualFormatterFeatureLevel:"2"},{modelName:"Joya Touch A6",firmwareVersion:"3.04.05",releaseDate:"2021-01-07",osVersion:"8.1",securityPatch:"2020-10-01",sdkAddOnVersion:"1.24",visualFormatterFeatureLevel:"0"},{modelName:"Joya Touch A6",firmwareVersion:"3.03.04",releaseDate:"2020-08-07",osVersion:"8.1",securityPatch:"2020-06-05",sdkAddOnVersion:"1.24",scan2DeployVersion:"1.22.4257",dlScannerServiceVersion:"1.3.2.01-r9-101",sureLockVersion:"13.51",firefoxVersion:"68.8.1",visualFormatterFeatureLevel:"0"},{modelName:"Joya Touch A6",firmwareVersion:"3.02.02",releaseDate:"2020-06-03",osVersion:"8.1",securityPatch:"2020-03-05",dlCradleManager:"1.2.18",scan2DeployVersion:"1.18.3248",sdkAddOnVersion:"1.21",visualFormatterFeatureLevel:"N/A"},{modelName:"Joya Touch A6",firmwareVersion:"3.01.01",releaseDate:"2019-12-18",osVersion:"8.1",sdkAddOnVersion:"1.21",firefoxVersion:"63.0.2",visualFormatterFeatureLevel:"N/A"},{modelName:"Joya Touch A6",firmwareVersion:"2.25.46",releaseDate:"2020-10-27",osVersion:"7.1",sdkAddOnVersion:"1.21",visualFormatterFeatureLevel:"N/A"},{modelName:"Joya Touch A6",firmwareVersion:"2.24.44",releaseDate:"2020-07-20",osVersion:"7.1",sureLockVersion:"13.51",firefoxVersion:"68.8.1",sdkAddOnVersion:"1.21",visualFormatterFeatureLevel:"N/A"},{modelName:"Joya Touch A6",firmwareVersion:"2.23.42",releaseDate:"2020-06-03",osVersion:"7.1",dlCradleManager:"1.2.18",sdkAddOnVersion:"1.21",visualFormatterFeatureLevel:"N/A"},{modelName:"Joya Touch A6",firmwareVersion:"2.22.41",releaseDate:"2019-12-20",osVersion:"7.1",securityPatch:"2019-10-05",dlStagerVersion:"0.34.0",sdkAddOnVersion:"1.21",visualFormatterFeatureLevel:"N/A"},{modelName:"Joya Touch A6",firmwareVersion:"2.21.38",releaseDate:"2019-09-17",osVersion:"7.1",securityPatch:"2019-07-05",mobiControlVersion:"13.7.0",dxuAgentVersion:"1.24.390",sdkAddOnVersion:"1.20",visualFormatterFeatureLevel:"N/A"},{modelName:"Joya Touch A6",firmwareVersion:"2.20.34",releaseDate:"2019-06-05",osVersion:"7.1",dlScannerServiceVersion:"1.2.3.r14",securityPatch:"2019-04-05",sdkAddOnVersion:"1.18",dlCradleManager:"1.2.17",mobiControlVersion:"13.6.0",sureLockVersion:"11.51",dxuAgentVersion:"1.23.243",softSpotVersion:"1.8.92",enterpriseAgentVersion:"3.66",visualFormatterFeatureLevel:"N/A"},{modelName:"Joya Touch A6",firmwareVersion:"2.19.31",releaseDate:"2019-04-30",osVersion:"7.1",securityPatch:"2019-03-05",dlScannerServiceVersion:"1.2.3.r6",sdkAddOnVersion:"1.16",dlCradleManager:"1.2.16",visualFormatterFeatureLevel:"N/A"},{modelName:"DL-Axist/X4",firmwareVersion:"2.08.01",releaseDate:"2022-07-05",osVersion:"4.4",dlScannerServiceVersion:"",autoRangeScannerFalconX4:"",sureLockVersion:"",enterpriseAgentVersion:"",sdkAddOnVersion:"1.21",visualFormatterFeatureLevel:"N/A"},{modelName:"DL-Axist/X4",firmwareVersion:"2.07.03",releaseDate:"2020-10-01",osVersion:"4.4",dlScannerServiceVersion:"1.2.11.04-r4-90",autoRangeScannerFalconX4:"2.2.0.6",sureLockVersion:"15.55",enterpriseAgentVersion:"4.08",sdkAddOnVersion:"1.21",visualFormatterFeatureLevel:"N/A"},{modelName:"DL-Axist/X4",firmwareVersion:"2.06.01",releaseDate:"2020-02-26",osVersion:"4.4",dlScannerServiceVersion:"1.2.11.04-r4",autoRangeScannerFalconX4:"2.2.0.2",sdkAddOnVersion:"1.21",sureLockVersion:"12.41",enterpriseAgentVersion:"4.01",visualFormatterFeatureLevel:"N/A"},{modelName:"DL-Axist/X4",firmwareVersion:"2.03.02",releaseDate:"2019-06-28",osVersion:"4.4",dlScannerServiceVersion:"1.2.3-r12",autoRangeScannerFalconX4:"1.0.2.1",securityPatch:"2017-10-05",sdkAddOnVersion:"1.18",sureLockVersion:"11.51",dxuAgentVersion:"1.23.243",softSpotVersion:"1.8.92",enterpriseAgentVersion:"3.66",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor1",firmwareVersion:"3.10.14",releaseDate:"2021-01-15",osVersion:"8.1",securityPatch:"2020-10-01",sdkAddOnVersion:"1.19",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor1",firmwareVersion:"3.09.13",releaseDate:"2020-10-29",osVersion:"8.1",securityPatch:"2020-09-05",sdkAddOnVersion:"1.19",dlScannerServiceVersion:"1.2.9-r4.1-memor1-75",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor1",firmwareVersion:"3.08.11",releaseDate:"2020-06-10",osVersion:"8.1",securityPatch:"2020-04-05",dlCradleManager:"1.2.18",setupWizardScannerVersion:"1.16.2662",sdkAddOnVersion:"1.19",dxuAgentVersion:"1.28.1865",softSpotVersion:"2.1.1802",scan2DeployVersion:"1.18.3248",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor1",firmwareVersion:"3.07.09",releaseDate:"2019-09-27",osVersion:"8.1",securityPatch:"2019-10-05",sdkAddOnVersion:"1.19",dxuAgentVersion:"1.25.840",enterpriseAgentVersion:"3.67",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor1",firmwareVersion:"3.06.08",releaseDate:"2019-06-14",osVersion:"8.1",securityPatch:"2019-06-05",dlScannerServiceVersion:"1.2.9-r4-74",setupWizardScannerVersion:"1.9",sdkAddOnVersion:"1.19",softSpotVersion:"1.8.92",scan2DeployVersion:"1.9.198",dxuAgentVersion:"1.23.243",sureLockVersion:"11.51",visualFormatterFeatureLevel:"N/A"},{modelName:"Memor1",firmwareVersion:"3.04.06",releaseDate:"2019-03-15",osVersion:"8.1",securityPatch:"2019-02-05",dlScannerServiceVersion:"1.2.3-r6",setupWizardScannerVersion:"1.4",scanEngineCameraVersion:"2.0",dlCradleManager:"1.2.16",sdkAddOnVersion:"1.16",dlBatteryManager:"1.4.3",softSpotVersion:"1.6.84",scan2DeployVersion:"1.4.23",dxuAgentVersion:"1.16.51",enterpriseAgentVersion:"3.66",sureLockVersion:"7.97",visualFormatterFeatureLevel:"N/A"},{modelName:"Skorpio X5",firmwareVersion:"3.26.001",releaseDate:"2024-01-15",osVersion:"11",securityPatch:"2024-01-05",sdkAddOnVersion:"1.34.7",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.25.001",releaseDate:"2023-12-14",osVersion:"11",securityPatch:"2023-12-05",sdkAddOnVersion:"1.34.7",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.24.001",releaseDate:"2023-11-08",osVersion:"11",securityPatch:"2023-11-05",sdkAddOnVersion:"1.34.7",dlScannerServiceVersion:"2.2.0.31-r1-249",dlSettingsVersion:"2.16.0",scan2DeployVersion:"",dockManagerVersion:"1.16.0",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.23.001",releaseDate:"2023-10-17",osVersion:"11",securityPatch:"2023-10-05",sdkAddOnVersion:"1.34.4",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.22.002",releaseDate:"2023-09-22",osVersion:"11",securityPatch:"2023-09-05",sdkAddOnVersion:"1.34.4",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.21.001",releaseDate:"2023-08-28",osVersion:"11",securityPatch:"2023-08-05",sdkAddOnVersion:"1.34.4",dlScannerServiceVersion:"2.2.0.27-r3-247",dlSettingsVersion:"2.15.0",scan2DeployVersion:"2.1.0",dockManagerVersion:"1.15.0",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.20.002",releaseDate:"2023-07-17",osVersion:"11",securityPatch:"2023-07-05",sdkAddOnVersion:"1.34.2",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.19.001",releaseDate:"2023-06-06",osVersion:"11",securityPatch:"2023-06-05",sdkAddOnVersion:"1.34.2",dlScannerServiceVersion:"2.2.0.23-r2-244",dlScannerServiceVersion:"",dlSettingsVersion:"2.12.0",scan2DeployVersion:"2.0.8",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.17.001",releaseDate:"2023-05-11",osVersion:"11",securityPatch:"2023-05-05",sdkAddOnVersion:"1.33.7",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.16.001",releaseDate:"2023-04-19",osVersion:"11",securityPatch:"2023-04-05",sdkAddOnVersion:"1.33",dlScannerServiceVersion:"2.2.0.21-r4-239",dlSettingsVersion:"2.9.0",scan2DeployVersion:"1.40.2",dockManagerVersion:"1.12.0",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.15.001",releaseDate:"2023-03-16",osVersion:"11",securityPatch:"2023-03-05",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.14.001",releaseDate:"2023-02-16",osVersion:"11",securityPatch:"2023-02-05",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.13.001",releaseDate:"2023-01-10",osVersion:"11",securityPatch:"2023-01-05",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.11.001",releaseDate:"2022-12-14",osVersion:"11",securityPatch:"2022-12-05",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.10.001",releaseDate:"2022-11-09",osVersion:"11",securityPatch:"2022-11-05",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.09.001",releaseDate:"2022-10-10",osVersion:"11",securityPatch:"2022-10-05",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"",dlSettingsVersion:"",scan2DeployVersion:"",dockManagerVersion:"",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"3.06.004",releaseDate:"2022-07-18",osVersion:"11",securityPatch:"2022-05-05",sdkAddOnVersion:"1.30",dlScannerServiceVersion:"2.2.0.14-r1-127 ",dlSettingsVersion:"1.10.10",scan2DeployVersion:"1.33.7665",dockManagerVersion:"1.8.7",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"2.13.003",releaseDate:"2022-10-17",osVersion:"10",securityPatch:"2022-03-01",sdkAddOnVersion:"1.30",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"2.12.008",releaseDate:"2022-04-20",osVersion:"10",securityPatch:"2022-03-01",sdkAddOnVersion:"1.30",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"2.11.006",releaseDate:"2021-11-10",osVersion:"10",securityPatch:"2021-09-01",sdkAddOnVersion:"1.29",visualFormatterFeatureLevel:"3"},{modelName:"Skorpio X5",firmwareVersion:"2.10.005",releaseDate:"2021-07-09",osVersion:"10",securityPatch:"2021-06-01",sdkAddOnVersion:"1.28",visualFormatterFeatureLevel:"2"},{modelName:"Skorpio X5",firmwareVersion:"2.09.052",releaseDate:"2021-03-30",osVersion:"10",securityPatch:"2021-02-01",scan2DeployVersion:"1.28",dockManagerVersion:"1.8.2",dlScannerServiceVersion:"2.1.0.3-r2-110",sdkAddOnVersion:"1.27",dlSettingsVersion:"1.8.0",dxuAgentVersion:"1.33.5991",espresso:{version:"1.3.0",enterpriseAgentVersion:"4.08",sureLockVersion:"17.14",sureFoxVersion:"8.53",wifiguardVersion:"1.10.3.31"},visualFormatterFeatureLevel:"2"},{modelName:"Skorpio X5",firmwareVersion:"2.08.050",releaseDate:"2021-02-04",osVersion:"10",securityPatch:"2020-11-05",sdkAddOnVersion:"1.25",espresso:{version:"1.2.1",enterpriseAgentVersion:"4.08",sureLockVersion:"13.53",sureFoxVersion:"8.53",wifiguardVersion:"1.00.1.13"},visualFormatterFeatureLevel:"2"}],n=[{Header:"Model name",accessor:"modelName",className:"firmware-table",filter:(e,r,s)=>e.filter((e=>e.values[r].startsWith(s)))},{Header:"Firmware",accessor:"firmwareVersion",className:"firmware-table left"},{Header:"OS",accessor:"osVersion",className:"firmware-table "},{Header:"Release date",accessor:"releaseDate",className:"firmware-table left"},{Header:"Security Patch",accessor:"securityPatch",className:"firmware-table"},{Header:"SDK add-on",accessor:"sdkAddOnVersion",className:"firmware-table"},{Header:"Scanner Service",accessor:"dlScannerServiceVersion",className:"firmware-table"},{Header:"S2D Agent",accessor:"scan2DeployVersion",className:"firmware-table"}],i=[{Header:"Model name",accessor:"modelName",className:"firmware-table",filter:(e,r,s)=>e.filter((e=>e.values[r].startsWith(s)))},{Header:"Firmware version",accessor:"firmwareVersion",className:"firmware-table left"},{Header:"Release date",accessor:"releaseDate",className:"firmware-table left"},{Header:"OS version",accessor:"osVersion",className:"firmware-table left"},{Header:"Feature level",accessor:"visualFormatterFeatureLevel",className:"firmware-table",Cell:e=>{let{value:r}=e;return null==r?"UNKNOWN":r}}],a=[{dispName:"Joya Touch A6",osVersion:"9",sdkAddOnVersion:"4.05.09"},{dispName:"Joya Touch 22",osVersion:"11",sdkAddOnVersion:"1.02.002"},{dispName:"Memor 1",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Memor 10",osVersion:"10",sdkAddOnVersion:"3.00.03"},{dispName:"Memor 10",osVersion:"9",sdkAddOnVersion:"2.09.14"},{dispName:"Memor 11",osVersion:"11",sdkAddOnVersion:"1.00.01"},{dispName:"Memor 20",osVersion:"11",sdkAddOnVersion:"3.06.001"},{dispName:"Memor 20",osVersion:"9",sdkAddOnVersion:"1.07.01"},{dispName:"Memor K",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Skorpio X5",osVersion:"11",sdkAddOnVersion:"3.06.002"},{dispName:"Skorpio X5",osVersion:"10",sdkAddOnVersion:"2.08.044"}],t=[{dispName:"Joya Touch A6",osVersion:"9",sdkAddOnVersion:"4.05.09"},{dispName:"Joya Touch 22",osVersion:"11",sdkAddOnVersion:"1.02.002"},{dispName:"Memor 1",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Memor 10",osVersion:"10",sdkAddOnVersion:"3.01.05"},{dispName:"Memor 10",osVersion:"9",sdkAddOnVersion:"2.10.16"},{dispName:"Memor 11",osVersion:"11",sdkAddOnVersion:"1.00.01"},{dispName:"Memor 20",osVersion:"11",sdkAddOnVersion:"3.06.001"},{dispName:"Memor 20",osVersion:"9",sdkAddOnVersion:"1.10.08"},{dispName:"Memor K",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Skorpio X5",osVersion:"11",sdkAddOnVersion:"3.06.002"},{dispName:"Skorpio X5",osVersion:"10",sdkAddOnVersion:"2.12.008"}],d=[{dispName:"Joya Touch A6",osVersion:"9",sdkAddOnVersion:"Unsupported"},{dispName:"Joya Touch 22",osVersion:"11",sdkAddOnVersion:"1.02.002"},{dispName:"Memor 1",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Memor 10",osVersion:"10",sdkAddOnVersion:"3.01.05"},{dispName:"Memor 10",osVersion:"9",sdkAddOnVersion:"Unsupported"},{dispName:"Memor 11",osVersion:"11",sdkAddOnVersion:"1.00.01"},{dispName:"Memor 20",osVersion:"11",sdkAddOnVersion:"3.06.001"},{dispName:"Memor 20",osVersion:"9",sdkAddOnVersion:"1.10.008"},{dispName:"Memor K",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Skorpio X5",osVersion:"11",sdkAddOnVersion:"3.06.002"},{dispName:"Skorpio X5",osVersion:"10",sdkAddOnVersion:"2.12.008"}],l=[{dispName:"Joya Touch A6",osVersion:"9",sdkAddOnVersion:"4.05.09"},{dispName:"Joya Touch 22",osVersion:"11",sdkAddOnVersion:"1.02.002"},{dispName:"Memor 1",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Memor 10",osVersion:"10",sdkAddOnVersion:"3.01.05"},{dispName:"Memor 10",osVersion:"9",sdkAddOnVersion:"2.10.16"},{dispName:"Memor 11",osVersion:"11",sdkAddOnVersion:"1.00.01"},{dispName:"Memor 20",osVersion:"11",sdkAddOnVersion:"3.06.001"},{dispName:"Memor 20",osVersion:"9",sdkAddOnVersion:"1.10.008"},{dispName:"Memor K",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Skorpio X5",osVersion:"11",sdkAddOnVersion:"3.06.002"},{dispName:"Skorpio X5",osVersion:"10",sdkAddOnVersion:"2.12.008"}],V=[{dispName:"Joya Touch A6",osVersion:"9",sdkAddOnVersion:"4.05.09"},{dispName:"Joya Touch 22",osVersion:"11",sdkAddOnVersion:"1.02.002"},{dispName:"Memor 1",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Memor 10",osVersion:"10",sdkAddOnVersion:"3.00.03"},{dispName:"Memor 10",osVersion:"9",sdkAddOnVersion:"2.10.16"},{dispName:"Memor 11",osVersion:"11",sdkAddOnVersion:"1.00.01"},{dispName:"Memor 20",osVersion:"11",sdkAddOnVersion:"3.06.001"},{dispName:"Memor 20",osVersion:"9",sdkAddOnVersion:"1.06.05"},{dispName:"Memor K",osVersion:"Any",sdkAddOnVersion:"Unsupported"},{dispName:"Skorpio X5",osVersion:"11",sdkAddOnVersion:"3.06.002"},{dispName:"Skorpio X5",osVersion:"10",sdkAddOnVersion:"2.09.052"}],c=[{Header:"Device",accessor:"dispName",className:"firmware-table left"},{Header:"OS Version",accessor:"osVersion",className:"firmware-table left"},{Header:"Minimum Firmware Version",accessor:"sdkAddOnVersion",className:"firmware-table left"}],m=[{Header:"Device",accessor:"dispName",className:"firmware-table left"},{Header:"Minimum OS Version",accessor:"osVersion",className:"firmware-table left"},{Header:"Minimum Firmware Version",accessor:"firmwareVersion",className:"firmware-table left"}],u=[{dispName:"Joya Touch 22",osVersion:"11",firmwareVersion:"1.03.007"},{dispName:"Memor 10",osVersion:"10",firmwareVersion:"3.03.10"},{dispName:"Memor 11",osVersion:"11",firmwareVersion:"1.00.01"},{dispName:"Skorpio X5",osVersion:"11",firmwareVersion:"3.16.001"},{dispName:"Memor 20",osVersion:"Unsupported",firmwareVersion:"Unsupported"},{dispName:"Joya Touch A6",osVersion:"Unsupported",firmwareVersion:"Unsupported"},{dispName:"Memor 1",osVersion:"Unsupported",firmwareVersion:"Unsupported"},{dispName:"Memor K",osVersion:"Unsupported",firmwareVersion:"Unsupported"}],p=[{Header:"Device",accessor:"dispName",className:"firmware-table left"},{Header:"Minimum OS Version",accessor:"osVersion",className:"firmware-table left"},{Header:"Minimum Firmware Version",accessor:"firmwareVersion",className:"firmware-table left"}],v=[{dispName:"Joya Touch 22",osVersion:"11",firmwareVersion:"1.05.001"},{dispName:"Skorpio X5",osVersion:"10",firmwareVersion:"3.18.001"}]}}]);