"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[58498],{95953:(e,n,t)=>{t.r(n),t.d(n,{Img:()=>d,Video:()=>c,assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=t(85893),r=t(11151);t(74866),t(85162);const a={id:"visual-formatter-advanced-script-programming",title:"Visual Formatter Page (Advanced Script Programming)",sidebar_label:"Advanced Script Programming"},s=void 0,o={id:"scan2deploy/visual-formatter-advanced-script-programming",title:"Visual Formatter Page (Advanced Script Programming)",description:"This section shows how to create a Visual Formatter project without the use of the visual programming tool.",source:"@site/docs/scan2deploy/visual-formatter-advanced-script-programming.mdx",sourceDirName:"scan2deploy",slug:"/scan2deploy/visual-formatter-advanced-script-programming",permalink:"/scan2deploy/visual-formatter-advanced-script-programming",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"visual-formatter-advanced-script-programming",title:"Visual Formatter Page (Advanced Script Programming)",sidebar_label:"Advanced Script Programming"},sidebar:"Scan2DeployStudio",previous:{title:"Examples",permalink:"/scan2deploy/visual-formatter-examples"},next:{title:"Datalogic Launcher",permalink:"/scan2deploy/launcher-page"}},l={},c=({children:e,width:n})=>{const t={video:"video",...(0,r.a)()};return(0,i.jsx)(t.video,{controls:!0,allowFullScreen:!0,style:{width:n},children:e})},d=({src:e})=>{const n={img:"img",...(0,r.a)()};return(0,i.jsx)(n.img,{src:e,style:{verticalAlign:"top",minWidth:"200px",maxWidth:"200px"}})},h=[{value:"Project Zip File",id:"project-zip-file",level:2},{value:"JSON File",id:"json-file",level:2},{value:"Sample",id:"sample",level:3},{value:"Description",id:"description",level:3},{value:"JavaScript File",id:"javascript-file",level:2},{value:"Sample",id:"sample-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Variables",id:"variables",level:4},{value:"Enums",id:"enums",level:4},{value:"Methods",id:"methods",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This section shows how to create a Visual Formatter project without the use of the visual programming tool."}),"\n",(0,i.jsx)(n.h2,{id:"project-zip-file",children:"Project Zip File"}),"\n",(0,i.jsx)(n.p,{children:"To manually create a Visual Formatter project, the user needs to build the zip file of the project, containing at least 2 different files for each project item needed."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"It is suggested to use only a single project item, because no dispatcher should be needed when manually creating the script file, given the fact that the dispatchers are useful only in the visual programming tool."})}),"\n",(0,i.jsx)(n.p,{children:"The 2 files that need to be created are the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A JSON file containing the information related to the Visual Formatter project item. It is suggested to use only a single formatter item."}),"\n",(0,i.jsx)(n.li,{children:"A JavaScript file containing the code that implements the formatting logic. In case the user is not familiar with the JavaScript programming language, this code is usually generated through the visual programming tool."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The resulting zip file can be installed on the device using the Datalogic Settings application or through the Datalogic SDK methods."}),"\n",(0,i.jsx)(n.h2,{id:"json-file",children:"JSON File"}),"\n",(0,i.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(n.p,{children:"Below, a sample of the JSON file for a project is shown. The file name is set to formatter-1.json inside the zip."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="formatter-1.json"',children:'{\n    "info": {\n        "version": 1,\n        "name": "Formatter 1",\n        "id": "formatter-1",\n        "type": "formatter",\n        "description": "Formatter 1 Description",\n        "author": "Formatter 1 Author",\n        "revision": "1",\n        "date": "Mon Nov 02 2020 16:36:12 GMT+0100 (Central European Standard Time)",\n        "projectId": "68e50ae3-1665-448c-82fd-e102e524988c",\n        "projectName": "Sample 1 Project",\n        "active": true,\n        "featureLevel": 2,\n        "managedEvents": 1\n    },\n    "flowchart": {\n        "properties": [\n            {\n                "id": "prefix",\n                "name": "Prefix",\n                "description": "The prefix to add to the barcode",\n                "type": "string",\n                "direction": "input",\n                "defaultValue": "",\n                "hiddenFromUI": false\n            },\n            {\n                "id": "suffix",\n                "name": "Suffix",\n                "description": "The suffix to add to the barcode",\n                "type": "string",\n                "direction": "input",\n                "defaultValue": "",\n                "hiddenFromUI": false\n            }\n        ]\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The JSON is divided into two sections:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"info"}),": Contains the generic information about a project item, this information includes the following:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"version"}),": The version of the info section (currently only version 1 exists)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": The name of the project item."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"}),": The ID of the project item (it is the same as the file name)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),': The item type. Accepted values are either "formatter" or "dispatcher". For the manual script creation it is suggested to only have a single formatter item.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"description"}),": A description of the item's purpose."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"author"}),": The author of the project item."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"date"}),": The creation date."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"projectId"}),": A UUID used to uniquely identify the project item. It is important to generate it in order to avoid rewriting a previously defined project item, unless the goal is to update a previously installed one."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"projectName"}),": The name of the entire project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"active"}),": A boolean used to specify if the item should be automatically enabled after the installation on the device."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"featureLevel"}),": The feature level of the item. For more details, please check the ",(0,i.jsx)(n.a,{href:"/scan2deploy/visual-formatter-basic-concepts#feature-level",children:"Feature Level"})," section."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"managedEvents"}),": Specifies the type of events that are managed by this item, causing an execution of the script. The event values are 1 for BARCODE, 2 for START, 4 for STOP and 8 for TIMEOUT. To manage more than one event, the users need to specify a value equal to the sum of the events they want to manage (e.g. value of 6 for both START and STOP)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"flowchart"}),": When the JSON is generated from the visual programming interface, this section contains information about the flowchart created by the tool. When created manually, only the ",(0,i.jsx)(n.code,{children:"properties"})," field is necessary to define ",(0,i.jsx)(n.a,{href:"/scan2deploy/visual-formatter-basic-concepts#custom-properties",children:"Custom Properties"}),". The ",(0,i.jsx)(n.code,{children:"properties"})," field contains an array of entries, each one containing the following fields:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"}),": The ID of the property, used in the code to identify its name. Each property must have a unique ID."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," The name of the property, visualized in the Datalogic Settings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"description"}),": The description of the property, visualized in the Datalogic Settings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),": The Type of property, valid selections are 'string', 'number' and 'boolean'."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"direction"}),": Property direction, valid selections are 'input', 'output' and 'inout'."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"defaultValue"}),": The default value of this property, always specified as string value (e.g. ",(0,i.jsx)(n.code,{children:'"3"'})," instead of ",(0,i.jsx)(n.code,{children:"3"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hiddenFromUI"}),": When set to true, this property will be hidden from the Datalogic Settings of the device, preventing it from being edited on the device by the user."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"javascript-file",children:"JavaScript File"}),"\n",(0,i.jsx)(n.h3,{id:"sample-1",children:"Sample"}),"\n",(0,i.jsxs)(n.p,{children:["A sample is provided below, based on the JSON properties shown in the ",(0,i.jsx)(n.a,{href:"#json-file",children:"JSON File"})," section. The file name is set to formatter-1.js inside the zip."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="formatter-1.js"',children:'const barcodeString = getInputObject("prefixIn") +\n                      getInputObject("barcodeStringIn") +\n                      getInputObject("suffixIn");\nputOutputObject("barcodeStringOut", barcodeString);\n'})}),"\n",(0,i.jsx)(n.p,{children:"This sample code adds a prefix and suffix to the input barcode string, setting the result as the output barcode string."}),"\n",(0,i.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,i.jsx)(n.h4,{id:"variables",children:"Variables"}),"\n",(0,i.jsxs)(n.p,{children:["The Visual Formatter system provides several predefined inputs/outputs, as well as some utility methods to get and set their values. The available inputs/outputs can be seen in the ",(0,i.jsx)(n.a,{href:"/scan2deploy/visual-formatter-basic-concepts#predefined",children:"Predefined"})," section. For custom properties, the names are defined as the property ID concatenated with 'In' for the input and 'Out' for the output. In the example above, both the prefix and suffix properties are inputs and therefore defined as 'prefixIn' and 'suffixIn'. For inout properties, there will be both 'In' and 'Out' names available."]}),"\n",(0,i.jsx)(n.h4,{id:"enums",children:"Enums"}),"\n",(0,i.jsx)(n.p,{children:"Several enumerations are provided for use within Javascript, their definitions are as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="BarcodeType Enumeration"',children:"const BarcodeType = {\n    NOT_DEFINED: 0,\n    CODE39: 1,\n    DISCRETE25: 2,\n    MATRIX25: 3,\n    INTERLEAVED25: 4,\n    CODABAR: 5,\n    CODE93: 6,\n    CODE128: 7,\n    UPCA: 8,\n    UPCA_ADDON2: 9,\n    UPCA_ADDON5: 10,\n    UPCE: 11,\n    UPCE_ADDON2: 12,\n    UPCE_ADDON5: 13,\n    UPCE1: 14,\n    UPCE1_ADDON2: 15,\n    UPCE1_ADDON5: 16,\n    EAN13: 17,\n    EAN13_ADDON2: 18,\n    EAN13_ADDON5: 19,\n    EAN8: 20,\n    EAN8_ADDON2: 21,\n    EAN8_ADDON5: 22,\n    MSI: 23,\n    GS1_14: 24,\n    GS1_LIMIT: 25,\n    GS1_EXP: 26,\n    PDF417: 27,\n    DATAMATRIX: 28,\n    MAXICODE: 29,\n    TRIOPTIC: 30,\n    CODE32: 31,\n    MICROPDF417: 32,\n    QRCODE: 33,\n    AZTEC: 34,\n    POSTAL_PLANET: 35,\n    POSTAL_POSTNET: 36,\n    POSTAL_4STATE: 37,\n    POSTAL_ROYALMAIL: 38,\n    POSTAL_AUSTRALIAN: 39,\n    POSTAL_KIX: 40,\n    POSTAL_JAPAN: 41,\n    GS1_128: 42,\n    CODE39_FULLASCII: 43,\n    EAN13_ISBN: 44,\n    EAN13_ISSN: 45,\n    MICRO_QR: 46,\n    COMPOSITE_GS1_128_A: 47,\n    COMPOSITE_GS1_128_B: 48,\n    COMPOSITE_GS1_128_C: 49,\n    COMPOSITE_GS1_14_A: 50,\n    COMPOSITE_GS1_14_B: 51,\n    COMPOSITE_GS1_LIMIT_A: 52,\n    COMPOSITE_GS1_LIMIT_B: 53,\n    COMPOSITE_GS1_EXP_A: 54,\n    COMPOSITE_GS1_EXP_B: 55,\n    COMPOSITE_CC_A: 56,\n    COMPOSITE_CC_B: 57,\n    DOTCODE: 58,\n    ISBT_128: 59,\n    ISBT_128_CONCATENATED: 60\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="EventType Enumeration"',children:"const EventType = {\n    BARCODE: 0,\n    START: 1,\n    STOP: 2,\n    TIMEOUT: 3\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="KeyCode Enumeration"',children:"const KeyCode = {\n    A: 29,\n    ALT_LEFT: 57,\n    ALT_RIGHT: 58,\n    APOSTROPHE: 75,\n    AT: 77,\n    B: 30,\n    BACK: 4,\n    BACKSLASH: 73,\n    BREAK: 121,\n    BRIGHTNESS_DOWN: 220,\n    BRIGHTNESS_UP: 221,\n    C: 31,\n    CAPS_LOCK: 115,\n    CLEAR: 28,\n    COMMA: 55,\n    COPY: 278,\n    CTRL_LEFT: 113,\n    CTRL_RIGHT: 114,\n    CUT: 277,\n    D: 32,\n    DEL: 67,\n    DPAD_DOWN: 20,\n    DPAD_LEFT: 21,\n    DPAD_RIGHT: 22,\n    DPAD_UP: 19,\n    E: 33,\n    ENTER: 66,\n    EQUALS: 70,\n    ESCAPE: 111,\n    F: 34,\n    F1: 131,\n    F10: 140,\n    F11: 141,\n    F12: 142,\n    F2: 132,\n    F3: 133,\n    F4: 134,\n    F5: 135,\n    F6: 136,\n    F7: 137,\n    F8: 138,\n    F9: 139,\n    FORWARD: 125,\n    FORWARD_DEL: 112,\n    FUNCTION: 119,\n    G: 35,\n    GRAVE: 68,\n    H: 36,\n    HOME: 3,\n    I: 37,\n    INSERT: 124,\n    J: 38,\n    K: 39,\n    L: 40,\n    LEFT_BRACKED: 71,\n    M: 41,\n    MENU: 82,\n    META_LEFT: 117,\n    META_RIGHT: 118,\n    MINUS: 69,\n    MOVE_END: 123,\n    MOVE_HOME: 122,\n    N: 42,\n    NUM_0: 7,\n    NUM_1: 8,\n    NUM_2: 9,\n    NUM_3: 10,\n    NUM_4: 11,\n    NUM_5: 12,\n    NUM_6: 13,\n    NUM_7: 14,\n    NUM_8: 15,\n    NUM_9: 16,\n    NUM_LOCK: 143,\n    O: 43,\n    P: 44,\n    PAGE_DOWN: 93,\n    PAGE_UP: 92,\n    PASTE: 279,\n    PERIOD: 56,\n    PLUS: 81,\n    POUND: 18,\n    Q: 45,\n    R: 46,\n    RIGHT_BRACKET: 72,\n    S: 47,\n    SCROLL_LOCK: 116,\n    SEMICOLON: 74,\n    SHIFT_LEFT: 59,\n    SHIFT_RIGHT: 60,\n    SLASH: 76,\n    SPACE: 62,\n    STAR: 17,\n    SYM: 63,\n    SYSRQ: 120,\n    T: 48,\n    TAB: 61,\n    U: 49,\n    V: 50,\n    W: 51,\n    X: 52,\n    Y: 53,\n    Z: 54\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="IntentType Enumeration"',children:"const IntentType = {\n    START_ACTIVITY: 0,\n    START_SERVICE: 1,\n    SEND_BROADCAST: 2\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"These enum definitions can be used in a similar manner to what has been done within the visual programming tool."}),"\n",(0,i.jsx)(n.h4,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.p,{children:"The predefined methods available in the system are the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getInputObject(name)"}),": Gets the value of the input or inout object defined by the provided name (always with the 'In' suffix)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"putOutputObject(name, value)"}),": Sets the value of the output or inout object defined by the provided name (always with the 'Out' suffix)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"createAction(jsonString)"}),': Generates an action given a JSON string. This method requires a minimum Feature Level of 3, which introduced the actions array. The JSON format includes the "type" field used to specify the type of action. The rest of the fields depend on the action type and are defined as follows:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Barcode"}),": Simulates the read of the specified barcode."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"barcodeString"}),": field for barcode content"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"barcodeType"}),": field for barcode symbology (values found in the BarcodeType enum provided above)"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="Barcode definition"',children:'{\n  type: "Barcode";\n  barcodeString: string;\n  barcodeType: number;\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"KeyEvent"}),": Simulates a key event press/release."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"keyCode"}),": field for the key code value (as specified by the Android SDK documentation or using the KeyCode enum provided above)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pressed"}),": field to specify if the keycode has been pressed (true) or released (false)"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="KeyEvent definition"',children:'{\n  type: "KeyEvent";\n  keyCode: number;\n  pressed: boolean;\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Intent"}),": Executes an Android intent."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"intentType"}),": field for the type of intent to send (values found in the IntentType enum provided above)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"action"}),": (optional) field to specify the intent action"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"categories"}),": (optional) field to specify intent categories"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"packageName"}),": (optional) field to specify the package name for explicit intent"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"className"}),": (optional) field to specify the class name for explicit intent"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"extras"}),': (optional) field to specify the intent extras specified as a JSON string containing the string fields "type" (assuming values of "string", "number" or "boolean"), "name", and "value"']}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="Intent definition"',children:'{\n  type: "Intent";\n  intentType: number;\n  action?: string;\n  categories?: string[];\n  packageName?: string;\n  className?: string;\n  extras?: string[]; //stringified JSON Objects\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Wait"}),": Executes a delay of the given milliseconds (maximum 100 for each action created)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"delayMs"}),": field for the number of milliseconds to delay"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="Wait definition"',children:'{\n  type: "Wait";\n  delayMs: number;\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'An example of a JSON string to use when creating an action is shown below. In this case the action will send an intent to start an activity with class name "com.datalogic.test.MainActivity" contained in an application with package name "com.datalogic.test". A string extra is added, named "barcode" with value "barcodeValue". Both the extra and the entire JSON are converted in string format using the JSON.stringify method available in JavaScript.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'JSON.stringify({\n  type: "Intent",\n  intentType: IntentType.START_ACTIVITY,\n  action: "",\n  categories: [],\n  packageName: "com.datalogic.test",\n  className: "com.datalogic.test.MainActivity",\n  extras: [\n    JSON.stringify({\n      type: "string",\n      name: "barcode",\n      value: "barcodeValue"\n    })\n  ]\n})\n'})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var i=t(36905);const r={tabItem:"tabItem_Ymn6"};var a=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(67294),r=t(36905),a=t(12466),s=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=u(e),[s,l]=(0,i.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=i.find((e=>e.default)))?n:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:t,groupId:r}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,a]=(0,d.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),g=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function v(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),s(r))},h=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var i;const n=l.indexOf(e.currentTarget)+1;t=null!=(i=l[n])?i:l[0];break}case"ArrowLeft":{var r;const n=l.indexOf(e.currentTarget)-1;t=null!=(r=l[n])?r:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.Z)("tabs__item",g.tabItem,null==a?void 0:a.className,{"tabs__item--active":i===n}),children:null!=t?t:n},n)}))})}function T(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(T,{...n,...e})]})}function y(e){const n=(0,j.Z)();return(0,x.jsx)(b,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);