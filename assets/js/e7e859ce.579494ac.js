"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[7924],{20688:(e,t,n)=>{n.r(t),n.d(t,{BoldText:()=>d,Img:()=>h,ItalicText:()=>u,Video:()=>p,assets:()=>a,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(85893),s=n(11151);const o={id:"visual-formatter-ui-controls",title:"Visual Formatter Page (UI Controls)",sidebar_label:"UI Controls"},r=void 0,l={id:"scan2deploy/visual-formatter-ui-controls",title:"Visual Formatter Page (UI Controls)",description:"This section explains the Visual Formatter UI with its usages and shortcuts.",source:"@site/docs/scan2deploy/visual-formatter-ui-controls.mdx",sourceDirName:"scan2deploy",slug:"/scan2deploy/visual-formatter-ui-controls",permalink:"/scan2deploy/visual-formatter-ui-controls",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"visual-formatter-ui-controls",title:"Visual Formatter Page (UI Controls)",sidebar_label:"UI Controls"},sidebar:"Scan2DeployStudio",previous:{title:"Basic Concepts",permalink:"/scan2deploy/visual-formatter-basic-concepts"},next:{title:"Examples",permalink:"/scan2deploy/visual-formatter-examples"}},a={},c=[],h=({src:e,width:t,height:n})=>{const o={img:"img",...(0,s.a)()};return(0,i.jsx)(o.img,{src:e,style:{width:t,height:n}})},d=({children:e})=>{const t={span:"span",...(0,s.a)()};return(0,i.jsx)(t.span,{style:{fontWeight:"bold"},children:e})},u=({children:e})=>{const t={span:"span",...(0,s.a)()};return(0,i.jsx)(t.span,{style:{fontStyle:"italic"},children:e})},p=({children:e,width:t})=>{const n={video:"video",...(0,s.a)()};return(0,i.jsx)(n.video,{controls:"true",allowfullscreen:"true",style:{width:t},children:e})};function m(e){const t={a:"a",em:"em",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This section explains the Visual Formatter UI with its usages and shortcuts.\nThe starting page contains the chart of the first ",(0,i.jsx)(t.em,{children:"Formatter"})," item, as well as several UI components."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Visual Formatter UI",src:n(89303).Z+"",width:"1656",height:"736"})}),"\n",(0,i.jsxs)(t.p,{children:["The nodes on the left (in the Parameters and Operations sections) can be added by being dragged and dropped into the flowchart area on the right. You can connect an output of a node with an input of a different node using the left mouse button. All the different components are explained in the ",(0,i.jsx)(t.a,{href:"/scan2deploy/visual-formatter-basic-concepts",children:"Basic Concepts"})," section."]}),"\n",(0,i.jsx)(t.p,{children:"Above the chart, there are several controls that can be used to accomplish certain actions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(h,{src:"/img/visual-formatter/icons/new-chart.png",width:"30px",height:"30px"})," ",(0,i.jsx)(d,{children:"New Chart/Project"}),": Reset the current item chart or the entire project to its default (a single formatter chart showing only barcodeStringIn and barcodeStringOut connected)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(h,{src:"/img/visual-formatter/icons/import-export.png",width:"60px",height:"30px"})," ",(0,i.jsx)(d,{children:"Import/Export"}),": Allows the import or export of the current item chart or entire project. In the first case, only the selected item will be imported/exported while the rest of the project will be kept the same. Note that only Formatter items can be imported/exported individually. In order to also import/export the Dispatcher items, it is necessary to import/export the entire project. This is required because the execution of the Dispatcher depends on the Formatter items that are available within the project."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(h,{src:"/img/visual-formatter/icons/item-info.png",width:"30px",height:"30px"})," ",(0,i.jsx)(d,{children:"Item Info"}),": Opens a dialog to edit the current item information, such as the name or revision. From this dialog you can also set the active item, which is the item that will execute when the project is installed on a device. There is also a section general to the project and used to see the current feature level and to set the maximum one."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(h,{src:"/img/visual-formatter/icons/undo-redo.png",width:"60px",height:"30px"})," ",(0,i.jsx)(d,{children:"Undo/Redo"}),": Used to undo/redo the operations executed in the chart (adding of a new node or connection, removal of nodes, etc...). The undo shortcut is ",(0,i.jsx)(u,{children:"Ctrl+Z"})," and the redo shortcut is ",(0,i.jsx)(u,{children:"Ctrl+Y"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(h,{src:"/img/visual-formatter/icons/edit-selected.png",width:"30px",height:"30px"})," ",(0,i.jsx)(d,{children:"Edit Selected"}),": Used to edit the selected node. Works only when a single editable node is selected. Currently, the editable nodes are:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"All the constant values."}),"\n",(0,i.jsx)(t.li,{children:"The switch nodes."}),"\n",(0,i.jsx)(t.li,{children:"The custom properties (input, output or variable) in some parts."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(h,{src:"/img/visual-formatter/icons/help.png",width:"30px",height:"30px"})," ",(0,i.jsx)(d,{children:"Help"}),": Opens a help dialog describing how to use an operation block. Works only when a single operation block has been selected."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(h,{src:"/img/visual-formatter/icons/delete-selected.png",width:"30px",height:"30px"})," ",(0,i.jsx)(d,{children:"Delete Selected"}),": Removes the selected nodes and connections. Click using the left mouse button to select a single node. You can select multiple nodes and connections by keeping ",(0,i.jsx)(u,{children:"Ctrl"})," pressed while clicking on additional items, or by creating a selection area by holding ",(0,i.jsx)(u,{children:"Shift"})," and the left mouse button together and moving the cursor to encompass the desired items."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(h,{src:"/img/visual-formatter/icons/run-debugging.png",width:"30px",height:"30px"})," ",(0,i.jsx)(d,{children:"Run Debugging"}),": Used to test the currently created chart. It opens a dialog prompting you to set the value of all the inputs available in the chart. After configuring the inputs and confirming the action, the entire visual script is executed and the results are available inside the output nodes. It is also possible to see the intermediate results by hovering over the connections between the nodes or by clicking on the ",(0,i.jsx)(d,{children:"Show All Intermediate Values"})," button. To hide all debugging values you can click on the ",(0,i.jsx)(d,{children:"Clear Debugging Info"})," button."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"At the bottom of the page it is possible to select the item chart to edit, based on the item's name. It is also possible to add a new item by clicking the \"+\" icon, and to edit or remove an item through the context menu that appears when right clicking on an item's name."}),"\n",(0,i.jsx)(t.p,{children:"Some shortcuts are available inside the Visual Formatter UI:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Ctrl+Z"}),": Undo."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Ctrl+Y"}),": Redo."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Ctrl+A"}),": Select all nodes and connections currently included in the chart."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"ESC"}),": De-select all."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Ctrl+D"}),": Duplicate the selected nodes and connections. The connections will be duplicated only if they are between nodes that are both selected."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"To better understand the basic interface usage, below you can find a video showing a simple formatting rule being created with the purpose of surrounding every code with parentheses."}),"\n","\n",(0,i.jsx)(p,{width:"100%",children:(0,i.jsx)("source",{src:"/img/visual-formatter/visual-formatter-sample-ui-video.mp4",type:"video/mp4"})})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},89303:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/visual-formatter-ui-f555cd703da1813b00376fb89fd6ba2c.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var i=n(67294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);