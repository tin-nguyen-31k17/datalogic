"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[3790],{58215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),o=n(67294),r=n(72389),l=n(63725),i=n(86010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,c=e.block,g=e.defaultValue,d=e.values,p=e.groupId,m=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===g?g:null!=(t=null!=g?g:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),L=b.tabGroupChoices,N=b.setTabGroupChoices,I=(0,o.useState)(k),w=I[0],y=I[1],T=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var S=L[p];null!=S&&S!==w&&h.some((function(e){return e.value===S}))&&y(S)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==w&&(x(t),y(a),null!=p&&N(p,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:P,onClick:P},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},59161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(9877),i=n(58215),s=(n(31736),["components"]),u={id:"api",title:"Logger API",sidebar_label:"Logger API"},c=void 0,g={unversionedId:"logger/api",id:"logger/api",title:"Logger API",description:"Command Intents",source:"@site/docs/logger/api.md",sourceDirName:"logger",slug:"/logger/api",permalink:"/logger/api",tags:[],version:"current",frontMatter:{id:"api",title:"Logger API",sidebar_label:"Logger API"},sidebar:"Logger",previous:{title:"Managing Log Archives",permalink:"/logger/archives"}},d={},p=[{value:"Command Intents",id:"command-intents",level:2},{value:"Start a Log Session",id:"start-a-log-session",level:3},{value:"Stop a Log Session",id:"stop-a-log-session",level:3},{value:"Export Latest Log Archive",id:"export-latest-log-archive",level:3},{value:"Sample code",id:"sample-code",level:3}],m={toc:p};function v(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command-intents"},"Command Intents"),(0,r.kt)("p",null,"Applications can send commands to Datalogic Logger through a set of API intents.  These intents perform the same actions that are available through the Logger application.  They can be useful to issues commands in response to a system event, such as the start of a user login, or the reporting of an error."),(0,r.kt)("p",null,"To avoid the potential for any application other than Datalogic Logger from processing the Intent, all intents should be created using the following package name for the recipient:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"com.datalogic.logger")),(0,r.kt)("p",null,"The available intents with specific details on their behavior are listed below."),(0,r.kt)("h3",{id:"start-a-log-session"},"Start a Log Session"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent Action:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"com.datalogic.logger.START_LOG")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent Data:")," None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent Extra Data:")," None")),(0,r.kt)("p",null,"A new log session is started using the existing configuration settings.  If the logging service is busy (already running), this command will be ignored."),(0,r.kt)("p",null,"If this command is issued early during a device reboot, any unsaved log content from a previous session (due to a system crash) will be archived before starting a new session."),(0,r.kt)("h3",{id:"stop-a-log-session"},"Stop a Log Session"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent Action:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"com.datalogic.logger.STOP_LOG")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent Data:")," None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent Extra Data:")," None")),(0,r.kt)("p",null,"Any current log session is stopped, and an archive file of the log content will be created.  If no log session was currently active, this command will be ignored."),(0,r.kt)("h3",{id:"export-latest-log-archive"},"Export Latest Log Archive"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent Action:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"com.datalogic.logger.EXPORT_LOG")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent Data:")," None"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent Extra Data:")," Optional",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key Name:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"url")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type:")," String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," If included, this specifies the server URL to use for exporting the archive.  If not included, the existing configuration setting will be used.")))),(0,r.kt)("p",null,"The most recent archive on the device will be exported to the server URL specified by the current configuration setting (or the URL specified by the optional extra data in the intent).  Any archive that is already queued for export will not be considered in selecting the most recent archive.  If no archive exists, this command will be ignored."),(0,r.kt)("p",null,"If this command is issued early during a device reboot, any unsaved log content from a previous session (due to a system crash) will be archived and then selected to be exported."),(0,r.kt)("h3",{id:"sample-code"},"Sample code"),(0,r.kt)("p",null,"The following code fragment illustrates how to issue each of the logger intents from an activity."),(0,r.kt)(l.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun logDemo()\n{\n    val logPackage = "com.datalogic.logger"\n\n    // Create/Send intent to start a log session.\n    val startLog = Intent("com.datalogic.logger.START_LOG")\n    startLog.setPackage(logPackage)\n    sendBroadcast(startLog)\n\n    // Create/Send intent to stop a log session.\n    val stopLog = Intent("com.datalogic.logger.STOP_LOG")\n    stopLog.setPackage(logPackage)\n    sendBroadcast(stopLog)\n\n    // Create/Send intent to export log files to a specific URL.\n    val exportLog = Intent("com.datalogic.logger.EXPORT_LOG")\n    val serverUrl = "https://www.myserver.com/logUploads"\n    exportLog.setPackage(logPackage)\n    exportLog.putExtra("url", serverUrl)\n    sendBroadcast(exportLog)\n}\n'))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'fun logDemo()\n{\n    String logPackage = "com.datalogic.logger";\n\n    // Create/Send intent to start a log session.\n    Intent startLog = new Intent("com.datalogic.logger.START_LOG");\n    startLog.setPackage(logPackage);\n    sendBroadcast(startLog);\n\n    // Create/Send intent to stop a log session.\n    Intent stopLog = new Intent("com.datalogic.logger.STOP_LOG");\n    stopLog.setPackage(logPackage);\n    sendBroadcast(stopLog);\n\n    // Create/Send intent to export log files to a specific URL.\n    Intent exportLog = new Intent("com.datalogic.logger.EXPORT_LOG");\n    String serverUrl = "https://www.myserver.com/logUploads";\n    exportLog.setPackage(logPackage);\n    exportLog.putExtra("url", serverUrl);\n    sendBroadcast(exportLog);\n}\n')))))}v.isMDXComponent=!0}}]);