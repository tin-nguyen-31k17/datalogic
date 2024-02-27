"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[28156],{11190:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var t=n(85893),i=n(11151);const s={id:"javaxusbproperties",title:"javax.usb.properties Reference",sidebar_label:"javax.usb.properties"},a=void 0,o={id:"javapos/configref/javaxusbproperties",title:"javax.usb.properties Reference",description:"Overview",source:"@site/docs/javapos/configref/javaxusbproperties.md",sourceDirName:"javapos/configref",slug:"/javapos/configref/javaxusbproperties",permalink:"/javapos/configref/javaxusbproperties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"javaxusbproperties",title:"javax.usb.properties Reference",sidebar_label:"javax.usb.properties"},sidebar:"JavaPOS",previous:{title:"LabelIdentifiers.csv",permalink:"/javapos/configref/labelparsercsv"},next:{title:"jpos.properties",permalink:"/javapos/configref/jposproperties"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Default configuration file",id:"default-configuration-file",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(r.p,{children:["The javax.usb.properties file is used to configure the USB implementation on Linux operating systems. For more information regarding the settings and usages, please refer to the ",(0,t.jsx)(r.a,{href:"http://javax-usb.sourceforge.net/",children:"JSR80 project documentation"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"default-configuration-file",children:"Default configuration file"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-properties",children:"#\r\n# Properties file for javax.usb\r\n#\r\n# This file is provided by the Linux implementation of javax.usb.\r\n#\r\n# The 2.4 kernel does not support control-type queueing nor interrupt-type\r\n# queueing (see below to enable javax.usb internal queueing).\r\n#\r\n# Some 2.4 kernels do not properly handle hotplug notification, specifically\r\n# those somewhere after 2.4.19.  See below to enable polling instead.\r\n#\r\n\r\n################################################################################\r\n# Properties required/used by javax.usb API\r\n################################################################################\r\n\r\n# This is required by the API, this is the class that the API will create\r\n# to implement UsbServices.\r\njavax.usb.services = com.ibm.jusb.os.linux.LinuxUsbServices\r\n#javax.usb.services = de.ailis.usb4java.Services \r\n\r\n################################################################################\r\n# Properties required/used by javax.usb Common Reference Implementation\r\n################################################################################\r\n\r\n# These properties enable queueing for different pipe types.  If the operating\r\n# system does not support queueing for a particular pipe type (or at all),\r\n# enable queueing here.  This queueing is most likely much slower than OS-level\r\n# queueing, so if the OS supports queueing, these should not be enabled.\r\n#com.ibm.jusb.UsbPipeImp.queueSubmissions.control = true\r\n#com.ibm.jusb.UsbPipeImp.queueSubmissions.interrupt = false\r\n#com.ibm.jusb.UsbPipeImp.queueSubmissions.isochronous = false\r\n#com.ibm.jusb.UsbPipeImp.queueSubmissions.bulk = false\r\n\r\n# This property is similar to the UsbPipe-specific queueing properties, but\r\n# this applies only to the Default Control Pipe queueing.\r\ncom.ibm.jusb.UsbDeviceImp.queueSubmissions = true\r\n\r\n################################################################################\r\n# Properties required/used by javax.usb Linux Implementation\r\n################################################################################\r\n\r\n# If polling should be used instead of waiting for a hotplug notification.\r\n# Some kernel versions have a bug, and don't update the device node(s) until\r\n# many seconds after waking up threads waiting on the devices file.\r\n# If you are not getting hotplug events on a moderately to heavily loaded system,\r\n# use polling.\r\n# Note that since the new (buggy?) kernel behavior breaks javax.usb, this defaults to true!\r\n# If you know your kernel isn't broken you can set this to false.\r\ncom.ibm.jusb.os.linux.LinuxUsbServices.topologyUpdateUsePolling = true\r\n\r\n# If polling is disabled, this is how long in ms to delay after a\r\n# hotplug event is signalled to re-enumerate the USB bus.\r\n# If polling is enabled, this is how often to poll.\r\ncom.ibm.jusb.os.linux.LinuxUsbServices.topologyUpdateDelay = 500\r\n\r\n# After new device(s) are detected, the device's driver is probably taking its\r\n# sweet time talking to them.  This delay lets the Linux driver (if any) have some time to\r\n# talk before we send a device connection event, which may cause an application\r\n# to immediately start talking to the device.\r\ncom.ibm.jusb.os.linux.LinuxUsbServices.topologyUpdateNewDeviceDelay = 100\r\n\r\n################################################################################\r\n# Tracing properties used by javax.usb Linux Implementation\r\n################################################################################\r\n\r\n# These rest apply to JNI tracing levels.  This is a little better than it used to be,\r\n# but it needs more improvement as far as controlling the tracers and levels.\r\n\r\n# This either disables tracing entirely, or enables some amount of tracing.\r\n#com.ibm.jusb.os.linux.LinuxUsbServices.JNI.tracing = true\r\n\r\n# This defines where the JNI tracing output is sent.\r\n# The default is stderr.  Note that if append mode is used, the trace file will\r\n# grow ever-larger every time javax.usb is run, and its size should be managed\r\n# somehow.  In file mode, the file size will not be managed/limited by javax.usb.\r\n#  1 - stdout\r\n#  2 - stderr\r\n#  3 - file (truncate mode)\r\n#  4 - file (append mode)\r\n#com.ibm.jusb.os.linux.LinuxUsbServices.JNI.trace_output = 2\r\n\r\n# This is the filename to trace to, if trace_output is set to file tracing.\r\n# There is NO DEFAULT to this, it must be set if trace_output is set to file tracing.\r\n#com.ibm.jusb.os.linux.LinuxUsbServices.JNI.trace_filename = \r\n\r\n# This sets the tracing level.  Higher levels mean more tracing.\r\n# This level applies to ALL tracers.  See each tracer for their levels.\r\n#com.ibm.jusb.os.linux.LinuxUsbServices.JNI.trace_level = 4\r\n\r\n# This enables or disables default tracing.  This is the most used tracer.\r\n# The trace_data must also be enabled.\r\n# These are the levels for this tracer.\r\n#  0 - CRITICAL\r\n#  1 - ERROR\r\n#  2 - INFO\r\n#  3 - FUNCTION\r\n#  4 - DEBUG\r\n#  5 - OTHER\r\n#com.ibm.jusb.os.linux.LinuxUsbServices.JNI.trace_default = true\r\n\r\n# This enables or disables hotplug tracing.\r\n# The trace_data must also be enabled.\r\n# These are the levels for this tracer.\r\n#  0 - CRITICAL\r\n#  1 - ERROR\r\n#  2 - CHANGE\r\n#  3 - DEVICE\r\n#  4 - OTHER\r\n#com.ibm.jusb.os.linux.LinuxUsbServices.JNI.trace_hotplug = true\r\n\r\n# This enables or disables xfer tracing.\r\n# The trace_data must also be enabled.\r\n# These are the levels for this tracer.\r\n#  0 - CRITICAL\r\n#  1 - ERROR\r\n#  2 - REQUEST\r\n#  3 - METADATA\r\n#  4 - DATA\r\n#  5 - OTHER\r\n#com.ibm.jusb.os.linux.LinuxUsbServices.JNI.trace_xfer = true\r\n\r\n# This enables or disables urb tracing.\r\n# The trace_data must also be enabled.\r\n# WARNING!  DATA-level tracing will generate a LOT of output.\r\n# These are the levels for this tracer.\r\n#  2 - METADATA\r\n#  3 - DATA\r\n#com.ibm.jusb.os.linux.LinuxUsbServices.JNI.trace_urb = false\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var t=n(67294);const i={},s=t.createContext(i);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);