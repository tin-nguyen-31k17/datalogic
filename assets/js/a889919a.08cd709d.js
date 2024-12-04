"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[93091],{77757:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=i(85893),r=i(11151);const t={id:"power-settings",title:"Power & Charging"},l=void 0,c={id:"oemconfig/power-settings",title:"Power & Charging",description:"Settings",source:"@site/docs/oemconfig/power-settings.md",sourceDirName:"oemconfig",slug:"/oemconfig/power-settings",permalink:"/oemconfig/power-settings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"power-settings",title:"Power & Charging"},sidebar:"OEMConfig",previous:{title:"Scanner Settings",permalink:"/oemconfig/scanner-settings"},next:{title:"Keyboard & Scan Buttons",permalink:"/oemconfig/key-settings"}},d={},o=[{value:"Settings",id:"settings",level:2},{value:"General",id:"general",level:3},{value:"Battery Saver",id:"battery-saver",level:3},{value:"Wakeup Sources",id:"wakeup-sources",level:3},{value:"Battery Charging",id:"battery-charging",level:3},{value:"Off-Mode Charge",id:"off-mode-charge",level:3},{value:"Charging Sources",id:"charging-sources",level:3},{value:"Pocket-Mode",id:"pocket-mode",level:3}];function a(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Suspend on external power"}),": Sets the screen timeout for when the device is connected to an external power source (i.e. charging). The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"5 minutes"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Suspend on internal power"}),": Sets the screen timeout for when the device is running on battery power. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"1 minute"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"battery-saver",children:"Battery Saver"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Enable"}),": Immediately enables battery saver mode on the device. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"false"})}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"info",children:(0,s.jsx)(n.p,{children:"On Android 8.1, this setting may not persist through a reboot or connection to a charging source."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Auto enable"}),": Sets the battery saver mode to be enabled when the battery falls below the specified trigger level. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Auto enable trigger level"}),": Sets the trigger level (in battery percentage) for auto enabling the battery saver mode. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"5"})}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"May be scaled to the closest valid option depending on the Android version."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Auto disable"}),": Sets battery saver mode to be automatically disabled when the battery is above 90%. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"true"})}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Battery saver auto disable"})," is only available on Android 10+"]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"wakeup-sources",children:"Wakeup Sources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Wakeup source"}),": The device wakeup source to enable/disable. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"None"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Enable"}),": Enables the selected device wakeup source. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Act directly from suspend"}),": Enables the wakeup source to perform its defined action directly after waking the device from suspend.  If disabled, then a second press of the wakeup trigger (after wakeup) is required to perform the action.  The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"battery-charging",children:"Battery Charging"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Battery charging profile"}),": Represents the charging profile used to manage the charging preferences. This setting is persistent through reboots and factory resets. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Device default preference"})}),", which on many devices results in ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Speed and Capacity preference"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Battery charging profile policy"}),": Sets the policy for configuring the battery charging profile. The value selects where the charging profile comes from (device or battery). The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Set by device"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Enable battery LED"}),": Enables automatic control of the battery LED. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"off-mode-charge",children:"Off-Mode Charge"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Policy"}),": The policy for automatic exit from charging mode while the device is turned off and being charged. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Auto-Power-On when charge threshold reached"})}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Memor 20 devices must be in the cradle and charge threshold must be reached for the off-mode charge ",(0,s.jsx)(n.code,{children:"Policy"})," to take effect."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Threshold"})," The charging threshold (%) for automatic exit from changing mode. Valid values in range of 5-100. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"10"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"charging-sources",children:"Charging Sources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Wired cradle enable"}),": Enables charging from wired cradle. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Datalogic wireless cradle enable"}),": Enables charging from Datalogic wireless cradle. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Other wireless chargers enable"}),": Enables charging from other wireless chargers. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"true"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"USB enable"}),": Enables charging from USB. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"true"})}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Disabling USB as a charging source will also disable USB client functionality."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"pocket-mode",children:"Pocket-Mode"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Enable"}),": Enables the Pocket-Mode feature, which can turn off parts of the device when it detects that the display is covered (e.g. in a pocket).  The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"false"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Behavior"}),": Selects the behavior when Pocket-Mode is active. The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Device lock"})}),". The options are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Display off: Turn off the display (the device remains unlocked)."}),"\n",(0,s.jsx)(n.li,{children:"Progressive lock: Same as Display Off, but transitions to Device Lock after a timeout."}),"\n",(0,s.jsx)(n.li,{children:"Device lock: Turn off the device (the device is locked)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Activation delay"}),": Delay after detection before Pocket-Mode becomes active (500 to 10,000 ms.) The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"500 ms."})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Progressive lock timeout"}),": Timeout before transitioning from Display Off to Device Lock (used with Progressive Lock behavior).  The default value is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"10 minutes"})}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var s=i(67294);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);