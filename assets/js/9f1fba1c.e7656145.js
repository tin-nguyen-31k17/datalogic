"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[1792],{8775:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>p,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=o(85893),n=o(11151);const a={id:"jposproperties",title:"JPOS Configuration Reference",sidebar_label:"jpos.properties"},t=void 0,i={id:"javapos/configref/jposproperties",title:"JPOS Configuration Reference",description:"Overview",source:"@site/docs/javapos/configref/jposproperties.md",sourceDirName:"javapos/configref",slug:"/javapos/configref/jposproperties",permalink:"/javapos/configref/jposproperties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"jposproperties",title:"JPOS Configuration Reference",sidebar_label:"jpos.properties"},sidebar:"JavaPOS",previous:{title:"javax.usb.properties",permalink:"/javapos/configref/javaxusbproperties"},next:{title:"log4j2.xml",permalink:"/javapos/configref/log4j2xml"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2},{value:"jpos.loader.serviceManagerClass",id:"jposloaderservicemanagerclass",level:3},{value:"jpos.config.regPopulatorClass",id:"jposconfigregpopulatorclass",level:3},{value:"jpos.config.simple.SimpleRegPopulator",id:"jposconfigsimplesimpleregpopulator",level:4},{value:"jpos.config.simple.xml.XercesRegPopulator",id:"jposconfigsimplexmlxercesregpopulator",level:4},{value:"jpos.config.simple.xml.Xerces2RegPopulator",id:"jposconfigsimplexmlxerces2regpopulator",level:4},{value:"jpos.config.populatorFile",id:"jposconfigpopulatorfile",level:3},{value:"jpos.tracing",id:"jpostracing",level:3},{value:"Default configuration file",id:"default-configuration-file",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(r.p,{children:["The OMG JavaPOS Reference uses the jpos.properties file to configure the JPOS device registry. This document covers the configuration file and the settings used by Datalogic JavaPOS. ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Care must be taken changing any values in this file."})})]}),"\n",(0,s.jsx)(r.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(r.h3,{id:"jposloaderservicemanagerclass",children:"jpos.loader.serviceManagerClass"}),"\n",(0,s.jsx)(r.p,{children:'This property specifies the manager bootstrap class for the whole JCL.  Use this property to replace the default "simple" JCL implementation with your own.  The value must be a fully qualified class name that implements the interface jpos.loader.JposServiceManager'}),"\n",(0,s.jsx)(r.h3,{id:"jposconfigregpopulatorclass",children:"jpos.config.regPopulatorClass"}),"\n",(0,s.jsxs)(r.p,{children:["This property specifies the registry populator class that populates the entry registry.  It must be a fully qualified class name that implements the jpos.config.JposRegPopulator interface.  If you want to specify multiple populators then you should instead use the jpos.config.populator.class.",(0,s.jsx)(r.em,{children:"N"})," property, defined below, that allows you to specify many populators"]}),"\n",(0,s.jsx)(r.p,{children:"There are 3 populators that are provided with the JCL by default:"}),"\n",(0,s.jsx)(r.h4,{id:"jposconfigsimplesimpleregpopulator",children:"jpos.config.simple.SimpleRegPopulator"}),"\n",(0,s.jsx)(r.p,{children:"This populator loads/saves JposEntry objects as serialized objects in a Java serialized file, typically named: jpos.cfg"}),"\n",(0,s.jsx)(r.h4,{id:"jposconfigsimplexmlxercesregpopulator",children:"jpos.config.simple.xml.XercesRegPopulator"}),"\n",(0,s.jsxs)(r.p,{children:["This populator uses Xerces and implements an XML parser according to the jpos/res/jcl.dtd.  By default, the XML file must be named jpos.xml However, this named can be changed using the property (see below): jpos.config.populator.file.",(0,s.jsx)(r.em,{children:"N"})]}),"\n",(0,s.jsx)(r.h4,{id:"jposconfigsimplexmlxerces2regpopulator",children:"jpos.config.simple.xml.Xerces2RegPopulator"}),"\n",(0,s.jsx)(r.p,{children:"This populator uses Xerces2 and implements an XML parser according to the jpos/res/jcl.xsd XML schema.  The file name is same as above; however, since this parser expects an XML schema, the XML file header is different."}),"\n",(0,s.jsx)(r.p,{children:"See the jpos-schema.xml file."}),"\n",(0,s.jsxs)(r.p,{children:["NOTE: Xerces and Xerces2 are XML parsers from the ",(0,s.jsx)(r.a,{href:"http://www.apache.org",children:"http://www.apache.org"})," Jakarta projects."]}),"\n",(0,s.jsx)(r.h3,{id:"jposconfigpopulatorfile",children:"jpos.config.populatorFile"}),"\n",(0,s.jsxs)(r.p,{children:["Use this property to for the JCL to load a specific file (cfg or XML) when not using multiple populators via the jpos.config.populator.class.",(0,s.jsx)(r.em,{children:"N"})," multi-property"]}),"\n",(0,s.jsx)(r.h3,{id:"jpostracing",children:"jpos.tracing"}),"\n",(0,s.jsx)(r.p,{children:"The jpos.tracing property is a legacy property that turns on all JPOS tracing. Tracing in JPOS is performed by printing to STDOUT as described in the default configuration file."}),"\n",(0,s.jsx)(r.h2,{id:"default-configuration-file",children:"Default configuration file"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",children:'#------------------------------------------------------------------------------\r\n# JposTestCase.createPropFile() --\x3e ./jpos/res/jpos.properties file\r\n# Thu Jul 05 11:37:25 EDT 2001\r\n#------------------------------------------------------------------------------\r\n\r\n#------------------------------------------------------------------------------\r\n# Required properties\r\n# -------------------\r\n# 1) jpos.loader.serviceManagerClass\r\n#\r\n#    This property specifies the manager bootstrap class for the whole JCL.  Use\r\n#    this property to replace the default "simple" JCL implementation with your\r\n#    own.  The value must be a fully qualified class name that implements the\r\n#    interface jpos.loader.JposServiceManager\r\n#\r\n# 2) jpos.config.regPopulatorClass\r\n#\r\n#    This property specifies the registry populator class---that populates the\r\n#    entry registry.  It must be a fully qualified class name that implements\r\n#    the jpos.config.JposRegPopulator interface.  If you want to specify \r\n#    multiple populators then you should instead use the:\r\n#    jpos.config.populator.class.<n>\r\n#    property---defined below---that allows you to specify many populators\r\n#    There are 3 populators that are provided with the JCL by default:\r\n#    a) jpos.config.simple.SimpleRegPopulator\r\n#       This populator loads/saves JposEntry objects as serialized objects in\r\n#       a Java serialized file, typically named: jpos.cfg\r\n#    b) jpos.config.simple.xml.XercesRegPopulator \r\n#       This populator uses Xerces and implements an XML parser according to\r\n#       the jpos/res/jcl.dtd.  By default, the XML file must be named jpos.xml\r\n#       However, this named can be changed using the property (see below):\r\n#       jpos.config.populator.file.<n>\r\n#    c) jpos.config.simple.xml.Xerces2RegPopulator\r\n#       This populator uses Xerces2 and implements an XML parser according to\r\n#       the jpos/res/jcl.xsd XML schema.  The file name is same as above; however,\r\n#       since this parser expects an XML schema, the XML file header is different.\r\n#       See the jpos-schema.xml file.\r\n# \r\n# NOTE: Xerces and Xerces2 are XML parsers from the http://www.apache.org \r\n#       Jakarta projects.\r\n#------------------------------------------------------------------------------\r\n\r\njpos.loader.serviceManagerClass=jpos.loader.simple.SimpleServiceManager\r\n\r\n#jpos.config.regPopulatorClass=jpos.config.simple.SimpleRegPopulator\r\n#jpos.config.regPopulatorClass=jpos.config.simple.xml.SimpleXmlRegPopulator\r\njpos.config.regPopulatorClass=jpos.config.simple.xml.XercesRegPopulator\r\n\r\n#------------------------------------------------------------------------------\r\n# Use this property to for the JCL to load a specific file (cfg or XML)\r\n# when not using multiple populators via the jpos.config.populator.class.<n>\r\n# multi-property\r\n#------------------------------------------------------------------------------\r\n\r\n#jpos.config.populatorFile=jpos1.cfg\r\n\r\n#------------------------------------------------------------------------------\r\n# To define multiple populator then comment the property \r\n# "jpos.config.regPopulatorClass"\r\n# and use the following multiproperty properties (defines 2 populators one \r\n# XML and one serialized)\r\n#------------------------------------------------------------------------------\r\n\r\n#jpos.config.populator.class.0=jpos.config.simple.xml.SimpleXmlRegPopulator\r\n#jpos.config.populator.class.1=jpos.config.simple.SimpleRegPopulator\r\n\r\n#------------------------------------------------------------------------------\r\n# You can also define populator files for each populator as follows\r\n#------------------------------------------------------------------------------\r\n\r\n#jpos.config.populator.file.0=jpos0.xml\r\n#jpos.config.populator.file.1=jpos1.cfg\r\n\r\n#------------------------------------------------------------------------------\r\n# Tracing properties\r\n# ------------------\r\n# All tracing properties that are boolean attributes can be turned on of\r\n# off using ON/on/TRUE/true or OFF/false for any other value.\r\n# The available properties are (see commented properties below):\r\n# 1) jpos.tracing\r\n# This is a legacy property and will turn the global tracer on.  You should\r\n# note that it is preferable to use the named tracing property instead\r\n# 2) jpos.util.tracing.TurnOnAllNamedTracers\r\n# This property when turned on will enable all named tracers.  A named tracer\r\n# will print out a message prepended by [<name>] where <name> is the name of\r\n# the tracer in question.\r\n# 3) jpos.util.tracing.TurnOnNamedTracers = name1, name2, ...\r\n# This will turn on the named tracers listed as name1, name2, ... this is \r\n# useful if when all named tracers are on you want to filter the output\r\n#------------------------------------------------------------------------------\r\n\r\n#jpos.tracing=ON\r\n#jpos.util.tracing.TurnOnNamedTracers=XercesRegPopulator, AbstractRegPopulator, MainFrame\r\n#jpos.util.tracing.TurnOnNamedTracers=JposServiceLoader,SimpleEntryRegistry,SimpleRegPopulator,XercesRegPopulator \r\n#jpos.util.tracing.TurnOnAllNamedTracers=OFF\n'})})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,r,o)=>{o.d(r,{Z:()=>i,a:()=>t});var s=o(67294);const n={},a=s.createContext(n);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);