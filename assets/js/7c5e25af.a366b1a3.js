"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[465],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return g}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,g=c["".concat(o,".").concat(u)]||c[u]||d[u]||s;return a?n.createElement(g,r(r({ref:t},h),{},{components:a})):n.createElement(g,r({ref:t},h))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85279:function(e,t,a){a.r(t),a.d(t,{RowImg:function(){return g},TableHeader:function(){return u},TableImg:function(){return m},WifiButton:function(){return d},assets:function(){return h},contentTitle:function(){return o},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),r=["components"],l={id:"stat",title:"Statistics Tab",sidebar_label:"Statistics Tab"},o=void 0,p={unversionedId:"wifiguard/stat",id:"wifiguard/stat",title:"Statistics Tab",description:"Overview",source:"@site/docs/wifiguard/stat.md",sourceDirName:"wifiguard",slug:"/wifiguard/stat",permalink:"/wifiguard/stat",draft:!1,tags:[],version:"current",frontMatter:{id:"stat",title:"Statistics Tab",sidebar_label:"Statistics Tab"},sidebar:"WiFiGuard",previous:{title:"Ping Tab",permalink:"/wifiguard/ping"}},h={},c=[{value:"Overview",id:"overview",level:2},{value:"SSID Filter",id:"ssid-filter",level:3},{value:"Graph Legend",id:"graph-legend",level:3},{value:"Graph Controls",id:"graph-controls",level:3},{value:"Collecting RSSI statistics",id:"collecting-rssi-statistics",level:2},{value:"Events",id:"events",level:3},{value:"Graph Storage",id:"graph-storage",level:2},{value:"Managing graph files",id:"managing-graph-files",level:3},{value:"Scan Results",id:"scan-results",level:2},{value:"Scan List",id:"scan-list",level:3},{value:"Access Point Entry",id:"access-point-entry",level:4},{value:"Channel Scan",id:"channel-scan",level:3},{value:"Access Point Details",id:"access-point-details",level:3}],d=function(e){var t=e.img;return(0,s.kt)("span",{style:{display:"inline-block"}},"(",(0,s.kt)("img",{src:t,style:{verticalAlign:"bottom",display:"inline"}}),")")},u=function(){return(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{style:{width:"20%"}},"Event"),(0,s.kt)("th",null,"Description")))},g=function(e){var t=e.img;return(0,s.kt)("img",{src:t,style:{verticalAlign:"bottom"}})},m=function(e){var t=e.img;return(0,s.kt)("img",{src:t,style:{backgroundColor:"#002596",verticalAlign:"bottom"}})},f={toc:c,WifiButton:d,TableHeader:u,RowImg:g,TableImg:m},k="wrapper";function y(e){var t=e.components,l=(0,i.Z)(e,r);return(0,s.kt)(k,(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"The Statistics tab allows the user to collect information about the Wi-Fi access points that are visible by the device.  It reports signal strength, roaming events and detailed information on access points, which can be used to determine the signal coverage of a wireless network.  The tab displays a graph of RSSI results, an optional legend, and controls for changing the graph content."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Statistics Tab",src:a(21189).Z,width:"270",height:"490"})),(0,s.kt)("h3",{id:"ssid-filter"},"SSID Filter"),(0,s.kt)("p",null,"This pop-up list in the graph title specifies the SSID to use for selecting which access points to include in the graph.  Since several access points are often in range of the device as it changes location, this is useful for ignoring APs which are not of interest.  The list's contents will update as soon as new SSIDs become visible to the device, and is reset when you start graphing.  Two special values in the list are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"All SSIDs:")," This selects all SSIDs (effectively disabling the filter).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Connected SSID:")," This selects any SSID that matches the Wi-Fi network the device is currently connected to.  It is the default value.  Note that the exact name of the SSID may change if the device roams between two Wi-Fi networks with different SSIDs."))),(0,s.kt)("p",null,"The SSID Filter cannot be changed while graphing is active."),(0,s.kt)("h3",{id:"graph-legend"},"Graph Legend"),(0,s.kt)("p",null,"The button in the upper right corner of the tab ",(0,s.kt)(d,{img:"/img/wifiguard/legend.svg",mdxType:"WifiButton"})," toggles the display of the graph legend.  When visible, the legend presents a scrollable list of each access point included in the graph.  To help identify each line in the graph, the BSSID and SSID (in parenthesis) for each entry is shown in a color which matches the color of the line drawn in the graph.  The visibility of each line can be toggled on/off by using the checkbox of each entry.  This can help reduce clutter on graphs which contain a large number of access points."),(0,s.kt)("p",null,'While graphing new RSSI data, any new access points that become visible are added to the top of the list.  The access point that the device is currently connected to is always listed first, and designated with a trailing asterisk ("*").'),(0,s.kt)("h3",{id:"graph-controls"},"Graph Controls"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Statistics Controls",src:a(73777).Z,width:"270",height:"134"})),(0,s.kt)("p",null,"The sheet with the graphing controls is at the bottom of the display and can be expanded by dragging up the gripper at its top center.  It can be collapsed by dragging it down.  The following controls are available:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Graph Storage:")," This button ",(0,s.kt)(d,{img:"/img/shared/folder.svg",mdxType:"WifiButton"}),"  takes you to the ",(0,s.kt)("a",{parentName:"p",href:"#graph-storage"},"Graph Storage")," screen where you can load and save RSSI graph data as CSV files, as well as share them with other applications (such as e-mail).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Minimum/Maximum/Average RSSI:")," These three checkbox controls toggle the visibility of additional lines on the graph.  These lines represent the calculated minimum, maximum, or average RSSI value over all sampled access points at each point along the graph.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Roaming threshold:")," This checkbox toggles the display of the RSSI threshold used by the device to initiate roaming.  When shown, it is represented by a horizontal dashed line.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Scan Results:")," This button takes you to the ",(0,s.kt)("a",{parentName:"p",href:"#scan-results"},"Scan Results")," screen where you can see a complete list of APs and detailed information on each of them.  It is disabled while graphing is active."))),(0,s.kt)("h2",{id:"collecting-rssi-statistics"},"Collecting RSSI statistics"),(0,s.kt)("p",null,"To begin graphing RSSI data, tap the blue Play button.  When tapped, the control sheet will automatically collapse to reveal the graph results, and the Play button will change to a Stop button.  To stop graphing, tap this button again."),(0,s.kt)("p",null,"While graphing, the RSSI values of visible access points are displayed in the graph, with each access point shown in a unique color.  The graph displays the time of each sample on the horizontal axis, and the RSSI value on the vertical axis.  Note that RSSI values are negative, with less negative (i.e. higher) values representing a stronger signal."),(0,s.kt)("p",null,"The line representing the AP the device is currently connected to (at the time) is drawn slightly thicker than the others.  The specific thicker line may change as the device roams between APs.  Any gaps in the graphed line represents a period where the access point was out of range."),(0,s.kt)("p",null,"It is not necessary to be in range of an access point when starting a graph.  In this case, no lines will be drawn until an AP is seen.  At this point, the lines for those APs will be drawn, and a connect event will also be shown (if it applies)."),(0,s.kt)("p",null,"Once you have collected RSSI graph data and stopped graphing, you can save the data to a file by tapping the gray storage button ",(0,s.kt)(d,{img:"/img/shared/folder.svg",mdxType:"WifiButton"}),"  which takes you to the ",(0,s.kt)("a",{parentName:"p",href:"#graph-storage"},"Graph Storage")," screen.  If you tap the Play button again without having saved the existing graph data, you will be asked to save or discard the current data before proceeding."),(0,s.kt)("h3",{id:"events"},"Events"),(0,s.kt)("p",null,"Space at the bottom of the graph is used to display icons which represent various events that can take place while graphing.  The possible events and their icons are:"),(0,s.kt)("table",null,(0,s.kt)(u,{mdxType:"TableHeader"}),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)(g,{img:"/img/wifiguard/connEvt.svg",mdxType:"RowImg"})," ",(0,s.kt)("strong",null,"Connect")),(0,s.kt)("td",null,"The device connected to a network.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)(g,{img:"/img/wifiguard/disconnEvt.svg",mdxType:"RowImg"})," ",(0,s.kt)("strong",null,"Disconnect")),(0,s.kt)("td",null,"The device disconnected from a network.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)(g,{img:"/img/wifiguard/roamEvt.svg",mdxType:"RowImg"})," ",(0,s.kt)("strong",null,"Roam")),(0,s.kt)("td",null,"The device roamed between access points.  The APs do not necessarily need to have the same SSID.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)(g,{img:"/img/wifiguard/userNote.svg",mdxType:"RowImg"})," ",(0,s.kt)("strong",null,"User Note")),(0,s.kt)("td",null,"The user has added a general annotation to the graph.  Tapping the gray Add Note button ",(0,s.kt)(d,{img:"/img/wifiguard/addNote.svg",mdxType:"WifiButton"})," while the graph is active will add this event at the current point in the graph.")))),(0,s.kt)("p",null,"If you tap on any of these event icons, you will see a dialog similar to the following:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Scan Results",src:a(4597).Z,width:"260",height:"95"})),(0,s.kt)("p",null,"This provides details on the specific event at that time along the graph.  If you tap the Edit icon ",(0,s.kt)(d,{img:"/img/shared/edit.svg",mdxType:"WifiButton"})," , an additional note field is created for the event.  This note field can be used to enter additional information about the event, such as the device location or an external event.  When finished editing the note, tap the Check icon ",(0,s.kt)(d,{img:"/img/shared/done.svg",mdxType:"WifiButton"}),"  to accept the changes, or the X icon to cancel them.  Event notes may be edited at any time, even with saved files, not only while the graph is active."),(0,s.kt)("h2",{id:"graph-storage"},"Graph Storage"),(0,s.kt)("p",null,'This screen allows you to save and load RSSI graph data.  These files are stored as CSV files, which allows you to share them with spreadsheet programs for further examination.  You can go back to the Statistics tab by tapping the "X" in the upper right corner, or the Android Back button.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Scan Results",src:a(98163).Z,width:"270",height:"320"})),(0,s.kt)("p",null,"The top portion of the screen relates to the graph currently visible from the main Statistics tab.  It includes the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Date / Time:")," This is the date and time when the collection of graph data was started.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Filter:")," This shows the value of the SSID filter used to collect the graph data.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Description:")," This field contains a text description of the graph contents.  Initially it is blank, but it can be edited by tapping on this field.  If the graph data was loaded from a file, it can still be changed and saved again to the file.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Save Locally:")," This button saves the current graph data to a CSV file.  An entry will be added to the file list to reflect the new file.  If the graph data was already saved, its description will be updated from the Description field when this button is tapped.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Share Graph:")," This button shares the current graph data with other programs that can process plain text CSV files (such as e-mail).  When tapped, the file is first saved (if not already saved) before sharing with another application.  From there, a system dialog appears to guide you to select which application you wish to share the CSV file with."))),(0,s.kt)("h3",{id:"managing-graph-files"},"Managing graph files"),(0,s.kt)("p",null,"The bottom half of the screen is a list of all previously saved RSSI graph data files.  Each entry is listed with the date/time the graph was created, the SSID filter used, and any available description of the graph contents."),(0,s.kt)("p",null,"To load a file and view its contents, tap the file entry from the list.  If the Statistics tab has graph data that has not been saved yet, you will be asked to save or discard this data first, before the new file is loaded.  Once loaded, the Graph Storage screen closes and you are returned to the main Statistics tab where the loaded data is displayed."),(0,s.kt)("p",null,"To share a previously saved file with another application, tap the Share icon ",(0,s.kt)(d,{img:"/img/shared/share.svg",mdxType:"WifiButton"}),"  for the file entry.  This does not change the currently loaded graph data.  To delete a saved file, tap the Delete icon ",(0,s.kt)(d,{img:"/img/shared/delete.svg",mdxType:"WifiButton"}),"  for the entry."),(0,s.kt)("h2",{id:"scan-results"},"Scan Results"),(0,s.kt)("p",null,"This screen displays details about all access points seen by the device.  The information can be viewed in one of two forms:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Format"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#scan-list"},(0,s.kt)(m,{img:"/img/wifiguard/scanView.svg",mdxType:"TableImg"})," ",(0,s.kt)("strong",{parentName:"a"},"Scan List"))),(0,s.kt)("td",{parentName:"tr",align:null},"List of APs and details on each of them.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#channel-scan"},(0,s.kt)(m,{img:"/img/wifiguard/chanView.svg",mdxType:"TableImg"})," ",(0,s.kt)("strong",{parentName:"a"},"Channel Scan"))),(0,s.kt)("td",{parentName:"tr",align:null},"Graphical display of Wi-Fi channel activity.")))),(0,s.kt)("p",null,'To switch between the two views, tap the icon for the alternate view in the upper right corner of the screen.  You can go back to the Statistics tab by tapping the "X" in the upper right corner, or the Android Back button.'),(0,s.kt)("h3",{id:"scan-list"},"Scan List"),(0,s.kt)("p",null,"This view of the ",(0,s.kt)("a",{parentName:"p",href:"#scan-results"},"Scan Results")," displays a list of all access points seen by the device.  The list includes details on each AP, which are regularly updated."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Scan Results",src:a(11455).Z,width:"270",height:"280"})),(0,s.kt)("p",null,"The top of the screen contains controls for the access point list:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"SSID Filter:")," This pop-up list specifies the SSID to use for selecting which access points to display in the list.  It operates in the same way as the control on the main Statistics tab.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Refresh:")," This button resets the list of access points and initiates a rescan.  This is useful if the AP list contains a significant number of entries which are out of range."))),(0,s.kt)("h4",{id:"access-point-entry"},"Access Point Entry"),(0,s.kt)("p",null,"Each entry in the access point list contains the following basic information on an access point:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"AP Information",src:a(59739).Z,width:"680",height:"132"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"SSID / BSSID:"),' These fields uniquely identify the access point in the list.  "(connected)" is shown next to the SSID if the device is currently connected to it.')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"RSSI:"),' This field reports the current RSSI value of the access point.  The color of this field corresponds to the RSSI level: Red = Low, Yellow = Medium, Green = High.  If the access point is out of range, this field displays "Offline".')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Security:"),"  This field displays a summary of security protocols supported.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Band:")," This displays the Wi-Fi band (2.4 GHz or 5.0 GHz) currently being used.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Channel:"),' This displays the Wi-Fi channel currently being used.  If the access point is out of range, this field displays "Offline".'))),(0,s.kt)("p",null,"Tapping on an access point entry in the list will take you to the ",(0,s.kt)("a",{parentName:"p",href:"#access-point-details"},"Access Point Details")," screen where you can see additional details on that AP."),(0,s.kt)("h3",{id:"channel-scan"},"Channel Scan"),(0,s.kt)("p",null,"This view of the ",(0,s.kt)("a",{parentName:"p",href:"#scan-results"},"Scan Results"),' displays a graph showing the Wi-Fi channels which are actively in use by all access points seen by the device.  The display is regularly updated, and APs which are out of range are not displayed.  You can go back to the Statistics tab by tapping the "X" in the upper right corner, or the Android Back button.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Scan Results",src:a(2160).Z,width:"270",height:"490"})),(0,s.kt)("p",null,"The top of the screen contains controls for the graph:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"SSID Filter:")," This pop-up list specifies the SSID to use for selecting which access points to display in the list.  It operates in the same way as the control on the main Statistics tab.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Graph Legend:")," This button toggles the display of the graph legend.  It operates in the same way as the control on the main Statistics tab.  In addition, if you tap and hold on an entry in the list, you will be shown a menu with a Scan Details option.  Selecting this option will take you to the ",(0,s.kt)("a",{parentName:"p",href:"#access-point-details"},"Access Point Details")," screen where you can see additional details on the AP from the legend list."))),(0,s.kt)("h3",{id:"access-point-details"},"Access Point Details"),(0,s.kt)("p",null,'This screen displays detailed information for a specific access point.  The title displays the SSID of the specific access point.  You can go back to the previous screen by tapping the "X" in the upper right corner, or the Android Back button.  The information is shown in a scrollable list and organized into several groups.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Scan Details",src:a(62966).Z,width:"270",height:"430"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Connection:")," This section is only visible if the device is connected to the displayed access point."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"IP Address:")," This is the current IP address assigned to the device.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"DNS:")," This is the IP address of the domain name server.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"DHCP:")," This is the IP address of the DHCP server.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Gateway:")," This is the IP address of the gateway server.")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"General")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"BSSID:")," This uniquely identifies the access point in the list.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"RSSI:"),' This is regularly updated to report the current RSSI value of the access point.  If the access point is out of range, this field displays "Offline".')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Channel (Band):"),' This is regularly updated to display the Wi-Fi channel and band currently being used to communicate with the network.  If the access point is out of range, this field displays "Offline".')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Protocols:")," This displays the 802.11 protocols available from the access point.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"AP MAC OUI:")," This is the manufacturer name from the Unique ID of the access point's MAC address.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Fast Roaming:")," This field shows the access point's support for Fast Roaming.")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Security")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"WPA 2/1:")," These fields show support for each of the security programs.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Group ciphers:")," This displays ciphers supported for broadcast packets.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Pairwise ciphers:")," This displays ciphers supported for unicast packets.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Key management:")," This shows the supported methods for managing security keys.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Enhanced Open:")," This field shows support for Opportunistic Wireless Encryption."))))))}y.isMDXComponent=!0},2160:function(e,t,a){t.Z=a.p+"assets/images/chanFull-5973d5f87952edec4e4e92c2ca0469f7.png"},4597:function(e,t,a){t.Z=a.p+"assets/images/noteFull-ef88cdbcbf98f6b552de3dee01d7bd90.png"},59739:function(e,t,a){t.Z=a.p+"assets/images/scanCard-ee1d366a5ff163accbd2316750c0c13f.png"},62966:function(e,t,a){t.Z=a.p+"assets/images/scanDetail-73f4272fdd64ea121dda70e6ae4006a5.png"},11455:function(e,t,a){t.Z=a.p+"assets/images/scanFull-d56c7d345980845c86c327b37c12a245.png"},21189:function(e,t,a){t.Z=a.p+"assets/images/statFull-3f023306b5b83c9b22449f3f389b6a9c.png"},73777:function(e,t,a){t.Z=a.p+"assets/images/statSheet-4c9eec120229c97d13cf251358ee4b33.png"},98163:function(e,t,a){t.Z=a.p+"assets/images/statStore-bbaf2ebee28f4a9a5106dd3d328c5c6d.png"}}]);