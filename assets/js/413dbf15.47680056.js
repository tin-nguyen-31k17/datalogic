"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[46684],{64994:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var a=i(85893),t=i(11151);const o={title:"Scan2Deploy Studio 1.9.0",author:"Scan2Deploy Studio",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/studio",tags:["scan2deploy-studio"]},l=void 0,s={permalink:"/releases/2023/06/07/scan2deploy-studio-v1.9.0",source:"@site/blog/2023-06-07-scan2deploy-studio-v1.9.0.md",title:"Scan2Deploy Studio 1.9.0",description:"Scan2Deploy Studio 1.9.0 is now available. It includes many new enhancements and bug fixes. Read below for more details.",date:"2023-06-07T00:00:00.000Z",formattedDate:"June 7, 2023",tags:[{label:"scan2deploy-studio",permalink:"/releases/tags/scan-2-deploy-studio"}],readingTime:2.785,hasTruncateMarker:!1,authors:[{name:"Scan2Deploy Studio",url:"/scan2deploy/studio",imageURL:"/img/homepage/home-scan2deploy.png"}],frontMatter:{title:"Scan2Deploy Studio 1.9.0",author:"Scan2Deploy Studio",author_image_url:"/img/homepage/home-scan2deploy.png",author_url:"/scan2deploy/studio",tags:["scan2deploy-studio"]},unlisted:!1,prevItem:{title:"JavaScript SDK 1.1.0",permalink:"/releases/2023/06/09/javascript"},nextItem:{title:"JavaScript SDK 1.0.2",permalink:"/releases/2023/04/27/javascript"}},d={authorsImageUrls:[void 0]},r=[{value:"Enhancements",id:"enhancements",level:2},{value:"Advanced Keyboard Remapping \ud83c\udd95",id:"advanced-keyboard-remapping-",level:3},{value:"Device &amp; Scanner / Application Configuration",id:"device--scanner--application-configuration",level:3},{value:"Deployment Settings",id:"deployment-settings",level:3},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"Corrected Defects",id:"corrected-defects",level:2}];function c(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Scan2Deploy Studio 1.9.0 is now available. It includes many new enhancements and bug fixes. Read below for more details."}),"\n",(0,a.jsxs)(n.p,{children:["Downloads are available in the ",(0,a.jsx)(n.a,{href:"https://github.com/datalogic/scan2deploy-studio/releases",children:"Releases"})," section on the Scan2Deploy Studio Github page."]}),"\n",(0,a.jsx)(n.h2,{id:"enhancements",children:"Enhancements"}),"\n",(0,a.jsx)(n.h3,{id:"advanced-keyboard-remapping-",children:"Advanced Keyboard Remapping \ud83c\udd95"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Added ",(0,a.jsx)(n.a,{href:"/scan2deploy/advanced-keyboard-page",children:"Advanced Keyboard feature"})," for Skorpio X5 and Joya Touch 22 devices"]}),"\n",(0,a.jsx)(n.li,{children:"Provides visual representation of different keyboard layouts and keys for customization"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"device--scanner--application-configuration",children:"Device & Scanner / Application Configuration"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Improved detection of default bundle array entries. They will no longer be added to profile if not modified","\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Originally reported as an issue where SureLock configuration would contain a blank application and webpage entry if not configured"})}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"An empty Global settings policy is now removed and will no longer trigger an attempted update on the device"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"deployment-settings",children:"Deployment Settings"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Added option to treat warnings as failure conditions during profile deployment on the device","\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Requires Scan2deploy Agent v2.0.8 or higher. Older agents will ignore the option and continue with the deployment when warnings are encountered (default behavior)"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Minor updates to UI and overall look & feel"}),"\n",(0,a.jsx)(n.li,{children:"Improved feature and application filtering based on device selection"}),"\n",(0,a.jsx)(n.li,{children:"Updated default device selection for new profiles to Memor 11"}),"\n",(0,a.jsx)(n.li,{children:"DuraSpeed is now filtered from application list for Memor 10 & 11 devices"}),"\n",(0,a.jsx)(n.li,{children:"Added link to Datalogic discussion board in 'about' info"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"corrected-defects",children:"Corrected Defects"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Applications","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fixed an issue that caused invalid URL validation and error messages in server log when a profile was loaded containing an 3rd party APK"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue where successive bundle array entries within application configuration would not increment the title index properly"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue that prevented downloads for application URLs with protocol set to HTTP instead of HTTPS"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue where the Applications page would be present when editing/importing a profile that only contained Datalogic Launcher/Browser configurations"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue where a failed remote APK download could result in an invalid file left within profile"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Datalogic Launcher","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fixed an issue that could cause system applications to be treated as custom applications when editing/importing a profile"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue that could cause custom application entries to duplicate within the UI"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue that caused the select apps modal to not be initialized properly when editing/importing a profile"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue that prevented encryption support of password fields within application specific controls"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Device and Scanner Settings","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fixed an issue that prevented the Device and Scanner Settings action from being removed if a Datalogic OEMConfig APK was added manually"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue that caused setting selection changes to not trigger profile updates after profile was saved"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue where additional bundle array entries could persist between selecting and unselecting the page"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue that prevented using an imported configuration file for Datalogic Browser"}),"\n",(0,a.jsx)(n.li,{children:'Fixed an issue where the available SKU for Joya Touch A6 devices was listed as "US GMS" instead of "AOSP (NON-GMS)"'}),"\n",(0,a.jsx)(n.li,{children:"Fixed a visual issue with the loading animation for firmware update files"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue where Wi-Fi EAP Phase2 field was not visually set on profile imports/edits when saved with default value"}),"\n",(0,a.jsx)(n.li,{children:"Fixed an issue where the multiply operation within Visual Formatter was not applied correctly"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>l});var a=i(67294);const t={},o=a.createContext(t);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);