"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3091],{77757:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=s(85893),r=s(11151);const t={id:"power-settings",title:"Power & Charging"},l=void 0,o={id:"oemconfig/power-settings",title:"Power & Charging",description:"Settings",source:"@site/docs/oemconfig/power-settings.md",sourceDirName:"oemconfig",slug:"/oemconfig/power-settings",permalink:"/oemconfig/power-settings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"power-settings",title:"Power & Charging"},sidebar:"OEMConfig",previous:{title:"Scanner Settings",permalink:"/oemconfig/scanner-settings"},next:{title:"Keyboard & Scan Buttons",permalink:"/oemconfig/key-settings"}},d={},a=[{value:"Settings",id:"settings",level:2},{value:"General",id:"general",level:3},{value:"Battery Saver",id:"battery-saver",level:3},{value:"Wakeup Sources",id:"wakeup-sources",level:3},{value:"Wireless Charging",id:"wireless-charging",level:3},{value:"Off-Mode Charge",id:"off-mode-charge",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,i.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Suspend on external power"}),": Sets the screen timeout for when the device is connected to an external power source (i.e. charging). The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"5 minutes"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Suspend on internal power"}),": Sets the screen timeout for when the device is running on battery power. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"1 minute"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"battery-saver",children:"Battery Saver"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Battery saver enable"}),": Immediately enables battery saver mode on the device. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"info",children:(0,i.jsx)(n.p,{children:"On Android 8, this setting may not persist through a reboot or connection to a charging source."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Battery saver auto enable"}),": Sets the battery saver mode to be enabled when the battery falls below the specified trigger level. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Battery saver trigger level"}),": Sets the trigger level (in battery percentage) for auto enabling the battery saver mode. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"5"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"May be scaled to the closest valid option depending on the Android version."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Battery saver auto disable"}),": Sets battery saver mode to be automatically disabled when the battery is above 90%. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"true"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Battery saver auto disable"})," is only available on Android 10+"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"wakeup-sources",children:"Wakeup Sources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Wakeup source"}),": The device wakeup source to enable/disable. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"None"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Enable"}),": Enables the selected device wakeup source. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"wireless-charging",children:"Wireless Charging"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Charging profile"}),": Represents the charging profile used to manage the charging preferences. This setting is persistent through reboots and factory resets. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Device default preference"})}),", which on many devices results in ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Speed and Capacity preference"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"off-mode-charge",children:"Off-Mode Charge"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Policy"}),": The policy for automatic exit from charging mode while the device is turned off and being charged. Valid values are displayed in a single select list. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Auto-Power-On when charge threshold reached"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Memor 20 devices must be in the cradle and charge threshold must be reached for the off-mode charge ",(0,i.jsx)(n.code,{children:"Policy"})," to take effect."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Threshold"})," The charging threshold (%) for automatic exit from changing mode. Valid values in range of 5-100. The default value is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"10"})}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(67294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);