(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=i,m=b["".concat(o,".").concat(u)]||b[u]||h[u]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},234:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAIAAADbpWgoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQASURBVHhe7d1PSBRhHMbx2Z3Syj8VmJFG/w4dyjrYQQ8eNiMvpUGHNgySQL0lRBAdOnToIEEEdlMhCorsEGQ3IfPQwQ4aFHQIzAoUEilbNdDa3V6dX7FN5uw47zwza8+HBd9XdGb26/KujuMaMeLHDAKKyltCYXE0FkdjcTQWR2NxNBZHY3E0FkdjcbSAf8pvrq2TEVB3f5+MghBk8bXRvPn7j2QClNd48ntqXiZwXFXQwlW8pbNDRvr4sU0vQrSqlLeeGU98NSOmzDVJppNlxRvHOu/JnKuKRT0SVW41UIH03tQ21ZbD80jnOo7G4mgsjsbiaCyOxuJoLI7G4mgsjsbiaCyOxuJoLI7G4mgsjsbiaCyOxuJoLI7G4mgsjsbiaCyOxuJoIbomy9eLeLpa22QU9DVZvLYWjasKWpDFk6kfMsIKar+WgP9GImpEzegamWShKRbLXJEVtfrfGRiQSRZU7pSRkkkQTKNirwyDkDbSqXQy+9vw6MjY58mGQ1XWp6vc3f19to9Z/qb2aH1uUHJvHc98RLt6dIcEnznRWByNxdFYHI3F0VgcjcXRWByNxdFYHC33ijfFYjL6c5wrFs4duj2BFyDv5w4DZJ22jETix1MPnsj7yGfR0/WRdDrgs5f/G3NondFYk3urYY6qb7+6sI43VFaXbiqW9+lgW2qV8LzYxjL8PuyJqUTv8KAvv3U7VVXTc+GyTH69VI1MQsz2wjfxm+0PXzyXiT6+fHf4ZfabjBZ9mp6RUbjZjtN2L3ThT0BoLI7G4mgsjsbiaCyOxuJoLI7G4mgsjuZL8c0FG2S0aGtRoYzCzXactnuhi/OZrKMVlTtLS2SSHe8n4W4/e2q9yO+KmRHz3OEjMsmO98N+OfJ+6MNbmfyDQ/GivILE3R6ZAKm76vF/DzTX1v1dEKD4bHx6flYmS3FYVXZtKZURZcexGJ850RxWlQPlu1/duCUTn3+Vk7kIaF9VYEd+8OL512OjMlmKi+LeKyyvobL68aUr1lhv8RPXr/UOD1pjP2Tuy7G4i1VFbVT7P3lYBVSTzMe4I67jaCyOxuJoLI7G4mgsjsbiaCyOxuJoLI7G4mgsjsbiaCyOxuJoLI7G4mgsjsbiaCyOxuJoLI7monhLZ4fHqy9XJdXE1eVHLop3tbbt37ZdDcyIqf2mNlu4Pn9xP/pZW7btUctNbVY1cXW9irur4BT19XS1gyzZNqv3miwFc9iKzmuyLH4ct+LTZn8Lz2HzmRPNofib8Y8ywpqYSshopbxvYWUcizn/VYp6fthXtkMmELNzc+8mx2XiwZ6SsoJ8v56Nl6RyO34751yc9OI6jsbiaCyOxuJoLI7G4mgsjsbiaCyOZRg/ARbM1CPE6atqAAAAAElFTkSuQmCC"},290:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/EthCradle_install-e9ddfa3ccea56d903f62bcc9af929fa8.png"},291:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAIAAADbpWgoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOaSURBVHhe7d1PSBRhHMbxd2ZK20wrMAODig4dwpMd7OBhM/JSeujQhkESmMegW8eO3oKOJkRBkR061E3IPHSog3brENg/UEikbM0W12anV+eX2JTOzM7MM7P0fBi29yc5u/tV3s0J1VCFM4qATPmTUFgcjcXRWByNxdFYHI3F0VgcjcXRWBwt5a/yB7q6ZQU0Mj4mqzSkWXy7WVd+8FgGoLq+cyuVsgxw3FXQWBwtQ8VLpZK+tW0n3mP9zBmRoeK5XE7fWpYR77F+5ozgroLG4mgsjsbiaCyOxuJoLI7G4mgsjsbiaCyOxuJoLI7G4mgsjsbiaCyOxuJoLI7G4mgsjsbiaCyOxuJoLI7G4mgsjpZmcbvyU1ZYad2vK+XvkTCVaZnbZAigP5+/PXhVhjVXhm/dnZiQIQCdu6IqMqTBUm1HZZkGRzkVxw5+TL2fnvky33u8w313nXtkfMzzd7Y+9D2675uW2tvHN35Gh/rszgi+cqKxOBqLo7E4GoujsTgai6OxOBqLo7E4Wu0V78/nZfXnulasXjsMewEvRdGvHabIvWxpGIWzlYdP5W2UMPNCj+E4KV+9/N9YkztUX2ft7YY1qmfoxuo+3tt+omVPk7wtDp6tVtO7rawyLOmHPbdQfDL1MpH/dTvf0Tl67boMSh0YvDhb/CZDhrU27Z4Zvi+DUoWbQ49evZAhPon86/Dr0g9Zrfm8+F1W2eZ5nJ5nERd+BYTG4mgsjsbiaCyOxuJoLI7G4mgsjsbiaIkU39uwU1Zr9jfuklW2eR6n51nExf9K1um29kMtzTIEE/0i3J3nz2zHlqEqlmFdPnlKhmCiP+zX0x8mP76VYRM+xRvrGor3RmUA0k814u8eGOjq/rsgQNOlwmJ5SYZ/8dlVDu9rkRUF41uMr5xoLI6WoeIrK5FeKreQ3JmrEK64+2sZaKOwTbiroLE4GoujsTgai6OxOBqLo7E4GoujsTgai6OxOBqLo7E4GoujsTgai6OxOBqLo7E4GoujsThauOKWZciKfgvbJFzxUqmkb23bif3Qp03uw+me2XOPsRz6tG6T4MIVz+Vy+lY/gdgPfVrTTGqLc8/sucdYDn1at0lwST1J2gyLo/kUfzP7SVZYcwtFWVUr+hmq41vM/7tS9H51rPWgDBBLy8vv5mdliOBIc2tDfb0MEDq3fkGVYROJ/EQb2gL3cTQWR2NxNBZHY3E0FkdjcTQWR2NxLKV+AZa8DjmxSNXoAAAAAElFTkSuQmCC"},292:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/EthCradle_config-ad473d3c75946fa9e24163d30af36c84.png"},293:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/EthCradle_Init-ef232d84b4b6abd1a1133c61f33ddbf9.png"},294:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/EthCradle_WiFi-be9bcc3391e1e8984f8212c92b90958b.png"},295:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/EthCradle_disable-106cb0b6283bd9eee97364b3f230bdb5.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(154)),o={id:"overview",title:"Memor 10 Ethernet Adapter Service Utility",sidebar_label:"Overview"},c={unversionedId:"m10ethcradle/overview",id:"m10ethcradle/overview",isDocsHomePage:!1,title:"Memor 10 Ethernet Adapter Service Utility",description:"Downloads",source:"@site/docs/m10ethcradle/overview.md",slug:"/m10ethcradle/overview",permalink:"/m10ethcradle/overview",version:"current",sidebar_label:"Overview",sidebar:"M10Eth"},l=[{value:"Downloads",id:"downloads",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Installing and Launching the M10 EthCradle Service",id:"installing-and-launching-the-m10-ethcradle-service",children:[]},{value:"SSID/Password Configuration",id:"ssidpassword-configuration",children:[]},{value:"Using the Ethernet Dock and a WiFi Network",id:"using-the-ethernet-dock-and-a-wifi-network",children:[]},{value:"Disable WiFi profiles",id:"disable-wifi-profiles",children:[]}],s={rightToc:l};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"downloads"},"Downloads"),Object(a.b)("p",null,"Downloads are available in the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/datalogic/ethcradle/releases"}),"Releases")," section on the Memor 10 Ethernet Adapter Service Utility Github page."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"The Memor 10 Ethernet Adapter Service Utility is an Android application that manages the Memor 10 connection to the Ethernet cradle. The utility allows configuring the operation of the radio and the radio configuration.  "),Object(a.b)("h2",{id:"installing-and-launching-the-m10-ethcradle-service"},"Installing and Launching the M10 EthCradle Service"),Object(a.b)("p",null,"Prior to running the service on the Memor 10, the Memor 10 Ethernet Cradle must be\nconfigured. See link to dock config  for instructions on configuring the cradle.  "),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"In addition to setting the SSID and Password, the administrator login on the cradle must be changed from the Datalogic default settings for security."))),Object(a.b)("p",null,"Once the cradle has been configured, copy the M10 EthCradle Service apk to the\nMemor 10.  Once it is copied, click on it, which will install the utility.  When\ninstall is complete, click on the ",Object(a.b)("inlineCode",{parentName:"p"},"OPEN")," button on the bottom of the screen to launch the service. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"EthCradle",src:n(290).default})),Object(a.b)("p",null," No user screen will display but you will see a new icon in the upper left corner."),Object(a.b)("p",null,Object(a.b)("img",{alt:"EthCradle",src:n(234).default})),Object(a.b)("p",null,"This indicates that the EthCradle Service is running.  The 3 squares are outlines to indicate that the Memor 10 is not connected to the dock.  At this point the service will be in default mode.  In this mode, WiFi will only be enabled when the Memor 10 is inserted into a dock.  Once inserted, the Memor 10 will power up WiFi.  The Memor 10 will not connect to the Ethernet dock at this point until the SSID and Password are configured to match the values set on the dock.  Once the SSID & Password are configured and the Memor 10 connects, the status bar icon will change to 3 filled in squares indicating the Ethernet network is available."),Object(a.b)("p",null,Object(a.b)("img",{alt:"EthCradle",src:n(291).default})),Object(a.b)("p",null,"When the Memor 10 is removed from the dock, WiFi will power back down and the status bar icon will change back to the disconnected icon."),Object(a.b)("p",null,Object(a.b)("img",{alt:"EthCradle",src:n(234).default})),Object(a.b)("h2",{id:"ssidpassword-configuration"},"SSID/Password Configuration"),Object(a.b)("p",null,"To change from the default operation, drag down the status bar.  The M10 EthCradle configuration option will display.  "),Object(a.b)("p",null,Object(a.b)("img",{alt:"EthCradle",src:n(292).default})),Object(a.b)("p",null,"Click on it to bring up the service configuration screen."),Object(a.b)("p",null,Object(a.b)("img",{alt:"EthCradle",src:n(293).default})),Object(a.b)("p",null,"Enter the same SSID and Password that were set in the dock, then click the ",Object(a.b)("inlineCode",{parentName:"p"},"SAVE")," icon at the bottom of the display. The change will take effect immediately, allowing the Memor 10 to connect to the dock."),Object(a.b)("h2",{id:"using-the-ethernet-dock-and-a-wifi-network"},"Using the Ethernet Dock and a WiFi Network"),Object(a.b)("p",null,"By default, the Memor 10 is configured to turn off the WiFi radio when not in the dock. If the Memor 10 should connect to a wireless network when not docked, ",Object(a.b)("inlineCode",{parentName:"p"},"When Out-of-Cradle turn WiFi OFF")," should be disabled. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"EthCradle",src:n(294).default})),Object(a.b)("p",null,"In this mode, when out of the dock the radio will operate normally, connecting to the WiFi network profiles entered with the Android WiFi configuration.  The Ethernet Dock SSID and password will be removed, preventing the terminal from accidentally connecting to the Ethernet Dock.  "),Object(a.b)("p",null,"When the terminal is inserted back in the dock, all the existing Android WiFI profile(s) will be disabled and the Ethernet Dock profile will be added and set as the only active setting again.  This forces the terminal to connect only to the Ethernet network while in the dock.  "),Object(a.b)("h2",{id:"disable-wifi-profiles"},"Disable WiFi profiles"),Object(a.b)("p",null,"Normally ",Object(a.b)("inlineCode",{parentName:"p"},"When in-Cradle disable other WiFi profiles")," should be set to active.",Object(a.b)("br",{parentName:"p"}),"\n","This forces all profiles other than the Ethernet Dock profile to be disabled when inserted into the dock to assure that the Memor 10 will only associate to the dock. If the terminal has problems rejoining the network when removed from the dock, try changing this setting to keep all profiles active while in the dock.  This should not be necessary."),Object(a.b)("p",null,Object(a.b)("img",{alt:"EthCradle",src:n(295).default})))}d.isMDXComponent=!0}}]);