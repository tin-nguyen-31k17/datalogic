"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[58082],{69502:(e,n,t)=>{t.r(n),t.d(n,{AppIcon:()=>h,TableImg:()=>u,assets:()=>o,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=t(85893),i=t(11151),s=t(74866),r=t(85162);t(9286);const l={id:"android",title:"Scan2Deploy Agent",sidebar_label:"Scan2Deploy Agent"},d=void 0,c={id:"scan2deploy/android",title:"Scan2Deploy Agent",description:"Documentation for older versions of Scan2Deploy Agent v1 can be found here.",source:"@site/docs/scan2deploy/android.mdx",sourceDirName:"scan2deploy",slug:"/scan2deploy/android",permalink:"/scan2deploy/android",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"android",title:"Scan2Deploy Agent",sidebar_label:"Scan2Deploy Agent"},sidebar:"Scan2DeployStudio",previous:{title:"Frequently Asked Questions",permalink:"/scan2deploy/faq"},next:{title:"Open Source Software",permalink:"/scan2deploy/open-source"}},o={},h=({img:e})=>{const n={img:"img",span:"span",...(0,i.a)()};return(0,a.jsxs)(n.span,{style:{display:"inline-block"},children:["(",(0,a.jsx)(n.img,{src:e,style:{verticalAlign:"bottom",display:"inline"}}),")"]})},u=({img:e})=>{const n={img:"img",...(0,i.a)()};return(0,a.jsx)(n.img,{src:e,style:{backgroundColor:"#FFFFFF",verticalAlign:"bottom"}})},p=[{value:"Main Screen",id:"main-screen",level:2},{value:"Previous Log",id:"previous-log",level:3},{value:"Padlock",id:"padlock",level:3},{value:"Starting a Profile Session",id:"starting-a-profile-session",level:2},{value:"Multiple Barcodes",id:"multiple-barcodes",level:3},{value:"Silent Deploy",id:"silent-deploy",level:3},{value:"Viewing Session Status",id:"viewing-session-status",level:2},{value:"Status",id:"status",level:3},{value:"Details",id:"details",level:3},{value:"Session Intents",id:"session-intents",level:2},{value:"Start Service Intent",id:"start-service-intent",level:3},{value:"Extras",id:"extras",level:4},{value:"Examples",id:"examples",level:4},{value:"Start Activity Intent",id:"start-activity-intent",level:3},{value:"Receive Service Feedback Intent",id:"receive-service-feedback-intent",level:3},{value:"Extras",id:"extras-1",level:4},{value:"Examples",id:"examples-1",level:4}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Documentation for older versions of Scan2Deploy Agent v1 can be found ",(0,a.jsx)(n.a,{href:"/scan2deploy/android-legacy",children:"here"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Scan2Deploy"})," is an application devoted to the initial staging of Android devices by reading a barcode sequence generated by ",(0,a.jsx)(n.a,{href:"/scan2deploy/studio",children:"Scan2Deploy Studio"}),". It is resident in all modern Datalogic mobile computers running Android 9.0 or higher. Downloads of all released versions are available in the ",(0,a.jsx)(n.a,{href:"https://github.com/datalogic/scan2deploy-android/releases",children:"Releases"})," section on the Scan2Deploy Android Github page. However, the app is usually updated directly via ",(0,a.jsx)(n.strong,{children:"Scan2Deploy Studio"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"main-screen",children:"Main Screen"}),"\n",(0,a.jsx)(n.p,{children:"When Agent is initially launched the screen looks as such:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Home",src:t(82792).Z+"",width:"237",height:"427"})}),"\n",(0,a.jsx)(n.h3,{id:"previous-log",children:"Previous Log"}),"\n",(0,a.jsxs)(n.p,{children:["If a profile has been previously scanned, then the ",(0,a.jsx)(n.code,{children:"Previous Log"})," button will be present. Pressing this button will display the log from the previous ",(0,a.jsx)(n.a,{href:"#viewing-session-status",children:"profile session"}),". This can be used to review what actions took place when the last profile was deployed, including when restoring from a backup."]}),"\n",(0,a.jsxs)(n.p,{children:["The log can alternatively be found on the device at ",(0,a.jsx)(n.code,{children:"/sdcard/Android/data/com.datalogic.scan2deploy/files/log.txt"}),". The log file mimics the Agent's UI, but also includes the contents of the barcode. It can be useful for debugging deployment issues."]}),"\n",(0,a.jsx)(n.h3,{id:"padlock",children:"Padlock"}),"\n",(0,a.jsxs)(n.p,{children:["Through the dl-stager tool, or custom edit of the profile's JSON, it is possible to set a password, or padlock, on a profile. Once a padlock has been applied to Agent, it is not possible to apply another profile unless it contains a matching padlock. If a padlock has been applied, Agent will display a key icon ",(0,a.jsx)(h,{img:"/img/scan2deploy/android/key.svg"})," in the top right corner."]}),"\n",(0,a.jsx)(n.h2,{id:"starting-a-profile-session",children:"Starting a Profile Session"}),"\n",(0,a.jsx)(n.p,{children:"The majority of profiles require a single barcode and, once scanned, Agent will immediately begin to apply the profile. A profile is broken up into multiple stages, such as 'Setup profile'. When a stage is being processed a spinner or percentage complete will be present to show progress. Additionally, while a profile is being applied the abort button will be present at the bottom of the screen. If pressed applying the profile will cease. The screen may appear similar to:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Progress",src:t(62543).Z+"",width:"234",height:"427"})}),"\n",(0,a.jsx)(n.h3,{id:"multiple-barcodes",children:"Multiple Barcodes"}),"\n",(0,a.jsx)(n.p,{children:"In the case of a profile requiring several barcodes a grid will appear on the screen to indicate which barcodes remain to be scanned."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Multi Barcode",src:t(7744).Z+"",width:"235",height:"427"})}),"\n",(0,a.jsx)(n.p,{children:"Each barcode is identified by an index  number. When a barcode is yet to be scanned a square with the particular barcode's index appears white. When the barcode is scanned it will be green. Once all barcodes have been scanned the profile will be applied."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"During the reading of a multiple barcode profile, if a barcode from a different profile is read, then the initial profile is discarded without being applied."})}),"\n",(0,a.jsx)(n.h3,{id:"silent-deploy",children:"Silent Deploy"}),"\n",(0,a.jsxs)(n.p,{children:["A third option is for the Agent service to be launched with no UI interface. This can be done through a v3 barcode or a ",(0,a.jsx)(n.a,{href:"#session-intents",children:"session intent"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"viewing-session-status",children:"Viewing Session Status"}),"\n",(0,a.jsx)(n.h3,{id:"status",children:"Status"}),"\n",(0,a.jsx)(n.p,{children:"The status of each stage is displayed at its right edge. When a stage is complete there are three possible statuses. Pass, fail, or warning. A pass indicates that the stage has successfully processed, a failure indicates a task of the stage has failed and the profile has not applied, and a warning can indicate several events, but it is non-critical to applying the rest of the profile."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Icon"}),(0,a.jsx)(n.th,{children:"Status"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(u,{img:"/img/scan2deploy/android/tick.svg"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Pass"})})}),(0,a.jsx)(n.td,{children:"Stage has finished, having successfully completed it's associated tasks."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(u,{img:"/img/scan2deploy/android/cross.svg"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Fail"})})}),(0,a.jsx)(n.td,{children:"Stage has failed to complete, profile ceased being applied during this stage."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(u,{img:"/img/scan2deploy/android/warn.svg"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Warning"})})}),(0,a.jsx)(n.td,{children:"Stage has finished, there are some warnings regarding tasks associated with the stage."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(u,{img:"/img/scan2deploy/android/spinner.svg"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Progress"})})}),(0,a.jsx)(n.td,{children:"Stage is currently being applied, with an indeterminate level of progress."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"xx%"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Progress"})})}),(0,a.jsx)(n.td,{children:"Stage is currently being applied, with a determinate level of progress displayed as a percentage number."})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"details",children:"Details"}),"\n",(0,a.jsx)(n.p,{children:"Tapping on a stage will expand to show details regarding it. Tapping again will collapse to hide the details.  Stages can be expanded at any time, even while a profile is being applied. These details range from general information, progress, warnings, or even reasons for failure to apply a profile. The screen will appear similar to:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Detail",src:t(30853).Z+"",width:"237",height:"427"})}),"\n",(0,a.jsx)(n.h2,{id:"session-intents",children:"Session Intents"}),"\n",(0,a.jsx)(n.p,{children:"Alternatively, Scan2Deploy configuration data can be passed into the Scan2Deploy app directly from other Android applications. For instance an MDM agent installed on the device could directly pass barcode data to Scan2Deploy agent, eliminating the need for a barcode to be physically scanned. The following steps are necessary to achieve this."}),"\n",(0,a.jsx)(n.h3,{id:"start-service-intent",children:"Start Service Intent"}),"\n",(0,a.jsx)(n.p,{children:"Scan2Deploy offers a service that listens for requests to apply Scan2Deploy profiles without the Scan2Deploy UI (activity) being visible. The profile will be applied silently, without any Scan2Deploy UI being displayed in the foreground."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Broadcast action:"})," ",(0,a.jsx)(n.code,{children:"datalogic.scan2deploy.intent.action.START_SERVICE"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Broadcast receiver:"})," ",(0,a.jsx)(n.code,{children:"com.datalogic.scan2deploy.S2dServiceReceiver"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"extras",children:"Extras"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Extra"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"encoding"})}),(0,a.jsx)(n.td,{children:"enum"}),(0,a.jsx)(n.td,{children:"no"}),(0,a.jsx)(n.td,{children:"<auto-detect encryption>"}),(0,a.jsxs)(n.td,{children:["Indicates how the ",(0,a.jsx)(n.code,{children:"data"})," field is encoded. Allowed values are:",(0,a.jsx)("br",{})," \u2022 ",(0,a.jsx)(n.code,{children:"json"})," - plain, unencrypted JSON file",(0,a.jsx)("br",{})," \u2022 ",(0,a.jsx)(n.code,{children:"v1"})," - v1 encryption, generated by dl_config.exe",(0,a.jsx)("br",{})," \u2022 ",(0,a.jsx)(n.code,{children:"v2"})," - v2 encryption generated by Scan2Deploy Studio ",(0,a.jsx)("br",{})," \u2022 ",(0,a.jsx)(n.code,{children:"v3"})," - v3 encryption generated by Scan2Deploy Studio"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"data"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"no"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:"null"})}),(0,a.jsx)(n.td,{children:"The data that Scan2Deploy should process that would normally be received in a barcode."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"package"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"no"}),(0,a.jsx)(n.td,{children:"n/a"}),(0,a.jsx)(n.td,{children:"Package name of the app receiving the service intent from Scan2Deploy Agent."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"receiver"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"no"}),(0,a.jsx)(n.td,{children:"n/a"}),(0,a.jsx)(n.td,{children:"The name of the component that is receiving the intent."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"profile-path"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"no"}),(0,a.jsx)(n.td,{children:"n/a"}),(0,a.jsxs)(n.td,{children:["A path to profile's tar file. This extra is an alternative to sending a profile through the ",(0,a.jsx)(n.code,{children:"data"})," extra. Enterprise backup must be enabled."]})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The start service intent must have either ",(0,a.jsx)(n.code,{children:"data"})," or a ",(0,a.jsx)(n.code,{children:"profile-path"})," extra included."]})}),"\n",(0,a.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["These examples demonstrate passing properly escaped json data in ",(0,a.jsx)(n.code,{children:"data"})," extra. The ",(0,a.jsx)(n.code,{children:"encoding"})," extra must be set to ",(0,a.jsx)(n.code,{children:"json"})," in this case."]}),"\n","\n",(0,a.jsxs)(s.Z,{groupId:"intent-format",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"Shell",value:"shell"}],children:[(0,a.jsx)(r.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val i = Intent("datalogic.scan2deploy.intent.action.START_SERVICE")\n    .putExtra("package", "com.android.test")\n    .putExtra("receiver", "com.android.test.FeedbackReceiver")\n    .putExtra("encoding", "json")\n    .putExtra("data", "{\\"global\\":{\\"action\\":\\"reset\\"}}")\n    .setClassName("com.datalogic.scan2deploy", "com.datalogic.scan2deploy.S2dServiceReceiver")\n\napplicationContext.sendBroadcast(i)\n'})})}),(0,a.jsx)(r.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Intent i = new Intent("datalogic.scan2deploy.intent.action.START_SERVICE")\n    .putExtra("package", "com.android.test")\n    .putExtra("receiver", "com.android.test.FeedbackReceiver")\n    .putExtra("encoding", "json")\n    .putExtra("data", "{\\"global\\":{\\"action\\":\\"reset\\"}}");\n    .setClassName("com.datalogic.scan2deploy", "com.datalogic.scan2deploy.S2dServiceReceiver");\n\ngetApplicationContext().sendBroadcast(i);\n'})})}),(0,a.jsx)(r.Z,{value:"shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'  adb shell am broadcast -a datalogic.scan2deploy.intent.action.START_SERVICE -n "com.datalogic.scan2deploy/.S2dServiceReceiver" --es encoding json --es data \'{\\"global\\":{\\"action\\":\\"reset\\"}}\'\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"start-activity-intent",children:"Start Activity Intent"}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively, you can start the Scan2Deploy ",(0,a.jsx)(n.a,{href:"https://developer.android.com/reference/android/app/Activity#startActivity(android.content.Intent)",children:"activity"})," if you want the Scan2Deploy UI to be visible. The same intent extras can be used in this case (",(0,a.jsx)(n.code,{children:"encoding"})," and ",(0,a.jsx)(n.code,{children:"data"}),"). These examples demonstrate passing in ",(0,a.jsx)(n.code,{children:"v2"})," barcode data exported by Scan2Deploy Studio in the ",(0,a.jsx)(n.code,{children:"data"})," extra."]}),"\n",(0,a.jsxs)(s.Z,{groupId:"intent-format",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"Shell",value:"shell"}],children:[(0,a.jsx)(r.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val launchIntent = packageManager.getLaunchIntentForPackage("com.datalogic.scan2deploy")\n\t?.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)\n\t?.putExtra("data", "Bm9uiYc//NWOnA0ZtIrgJ/qy0DCvHR+a1XwUz1sTne8s0KEM9ANwTS0XD4NbIOf/hV0+MM7cOFiZMbUDtO1L4sb4vnJluFbQOEM3phIuCRiBuMtpnh85")\napplicationContext.startActivity(launchIntent)\n'})})}),(0,a.jsx)(r.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Intent launchIntent = getPackageManager().getLaunchIntentForPackage("com.datalogic.scan2deploy");\nlaunchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);\nlaunchIntent.putExtra("data", "Bm9uiYc//NWOnA0ZtIrgJ/qy0DCvHR+a1XwUz1sTne8s0KEM9ANwTS0XD4NbIOf/hV0+MM7cOFiZMbUDtO1L4sb4vnJluFbQOEM3phIuCRiBuMtpnh85");\ngetApplicationContext().startActivity(launchIntent);\n'})})}),(0,a.jsx)(r.Z,{value:"shell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"adb shell am start -S -n com.datalogic.scan2deploy/.MainActivity -e data Bm9uiYc//NWOnA0ZtIrgJ/qy0DCvHR+a1XwUz1sTne8s0KEM9ANwTS0XD4NbIOf/hV0+MM7cOFiZMbUDtO1L4sb4vnJluFbQOEM3phIuCRiBuMtpnh85\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You can utilize an MDM console to start the ",(0,a.jsx)(n.code,{children:"Scan2Deploy"})," activity or service with the desired ",(0,a.jsx)(n.code,{children:"data"})," intent extra. However, that process will differ significantly from one MDM to the next and is outside the scope of what can be documented here."]})}),"\n",(0,a.jsx)(n.h3,{id:"receive-service-feedback-intent",children:"Receive Service Feedback Intent"}),"\n",(0,a.jsxs)(n.p,{children:["If Scan2Deploy Agent receives ",(0,a.jsx)(n.code,{children:"package"})," and ",(0,a.jsx)(n.code,{children:"receiver"})," extras within a start service intent then an intent will be sent to the matching application's receiver. The intent will have the following extras:"]}),"\n",(0,a.jsx)(n.h4,{id:"extras-1",children:"Extras"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Extra"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"feedback"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"yes"}),(0,a.jsx)(n.td,{children:'\'{ "status": "success", "info": "<log.txt output>" }\''}),(0,a.jsxs)(n.td,{children:["Text in a JSON format with two keys: Allowed values are:",(0,a.jsx)("br",{})," \u2022 ",(0,a.jsx)(n.code,{children:"status"}),' - string indicating "success" or "error"',(0,a.jsx)("br",{})," \u2022 ",(0,a.jsx)(n.code,{children:"info"})," - The log.txt output from the profile",(0,a.jsx)("br",{})]})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"examples-1",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"These examples demonstrate receiving the Scan2Deploy Agent service feedback intent:"}),"\n",(0,a.jsxs)(s.Z,{groupId:"intent-format",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],children:[(0,a.jsx)(r.Z,{value:"kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'class FeedbackReceiver: BroadcastReceiver() {\n\n    val TAG = "FeedbackReceiver"\n\n    override fun onReceive(context: Context, intent: Intent) {\n        Log.i(TAG, "onReceive")\n\n        if (intent.action == "com.datalogic.scan2deploy.FEEDBACK") {\n            try {\n                val feedback = intent.getStringExtra("feedback") ? return\n                val feedbackJson = JSONObject(feedback)\n                if (feedbackJson.getString("status").equals("success", ignoreCase = true)) {\n                    Log.d(TAG, "Success")\n                    Log.d(TAG, "More info: " + feedbackJson.getString("info"))\n                } else if (feedbackJson.getString("status").equals("error", ignoreCase = true)) {\n                    Log.d(TAG, "Error")\n                    Log.d(TAG, "More info: " + feedbackJson.getString("info"))\n                }\n            } catch (err: JSONException) {\n              Log.d(TAG, err.toString())\n            }\n        }\n    }\n}\n'})})}),(0,a.jsx)(r.Z,{value:"java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class FeedbackReceiver extends BroadcastReceiver {\n\n    String TAG = "FeedbackReceiver";\n\n    @Override\n    public void onReceive(Context context, Intent intent) {\n        Log.i(TAG, "onReceive");\n\n        if (intent.getAction().equals("com.datalogic.scan2deploy.FEEDBACK")) {\n            try {\n                JSONObject feedbackJson = new JSONObject(intent.getStringExtra("feedback"));\n                if (feedbackJson.getString("status").equalsIgnoreCase("success")) {\n                    Log.d(TAG, "Success");\n                    Log.d(TAG, "More info: " + feedbackJson.getString("info"));\n                } else if (feedbackJson.getString("status").equalsIgnoreCase("error")) {\n                    Log.d(TAG, "Error");\n                    Log.d(TAG, "More info: " + feedbackJson.getString("info"));\n                }\n            } catch (JSONException err){\n              Log.d(TAG, err.toString());\n            }\n        }\n    }\n}\n'})})})]})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(36905);const i={tabItem:"tabItem_Ymn6"};var s=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>A});var a=t(67294),i=t(36905),s=t(12466),r=t(16550),l=t(20469),d=t(91980),c=t(67392),o=t(50012);function h(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,d._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[r,d]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=a.find((e=>e.default)))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,h]=x({queryString:t,groupId:i}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,s]=(0,o.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=null!=c?c:g;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&d(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);d(e),h(e),v(e)}),[h,v,s]),tabValues:s}}var v=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function m(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),o=e=>{const n=e.currentTarget,t=d.indexOf(n),i=l[t].value;i!==a&&(c(n),r(i))},h=e=>{var n;let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{var a;const n=d.indexOf(e.currentTarget)+1;t=null!=(a=d[n])?a:d[0];break}case"ArrowLeft":{var i;const n=d.indexOf(e.currentTarget)-1;t=null!=(i=d[n])?i:d[d.length-1];break}}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:h,onClick:o,...s,className:(0,i.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(m,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function A(e){const n=(0,v.Z)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},30853:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/agent-detail-251618b345a88d2f05eee8d90e62602f.png"},82792:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/agent-home-e059d28c6106b606164d14635e190ff3.png"},7744:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/agent-multi-barcode-ad96da3394c355eeb21843ff15871a66.png"},62543:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"}}]);