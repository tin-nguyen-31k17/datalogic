"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[2026],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=g(n),f=r,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||l;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var g=2;g<l;g++)a[g]=n[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return g},toc:function(){return u}});var o=n(87462),r=n(63366),l=(n(67294),n(3905)),a=["components"],i={id:"log4j2xml",title:"Logging Configuration Reference",sidebar_label:"log4j2.xml"},s=void 0,g={unversionedId:"javapos/configref/log4j2xml",id:"javapos/configref/log4j2xml",title:"Logging Configuration Reference",description:"Overview",source:"@site/docs/javapos/configref/log4j2xml.md",sourceDirName:"javapos/configref",slug:"/javapos/configref/log4j2xml",permalink:"/javapos/configref/log4j2xml",tags:[],version:"current",frontMatter:{id:"log4j2xml",title:"Logging Configuration Reference",sidebar_label:"log4j2.xml"},sidebar:"JavaPOS",previous:{title:"jpos.properties",permalink:"/javapos/configref/jposproperties"},next:{title:"Overview",permalink:"/javapos/develop/overview"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2},{value:"Character Set Encoding",id:"character-set-encoding",level:3},{value:"Example Encoding for Windows",id:"example-encoding-for-windows",level:4},{value:"Example Encoding for Linux",id:"example-encoding-for-linux",level:4},{value:"Log Level",id:"log-level",level:3},{value:"Example Log Levels",id:"example-log-levels",level:4},{value:"Log File Size",id:"log-file-size",level:3},{value:"Example Size adjustment",id:"example-size-adjustment",level:4},{value:"Rollover Strategy",id:"rollover-strategy",level:3},{value:"Rollover Size",id:"rollover-size",level:4},{value:"Example Rollover max adjustment",id:"example-rollover-max-adjustment",level:5},{value:"Rollover Direction",id:"rollover-direction",level:4},{value:"Default configuration file",id:"default-configuration-file",level:2},{value:"Microsoft Windows Platform",id:"microsoft-windows-platform",level:3}],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Datalogic JavaPOS API uses Apache Log4j2 to provide logging services.  This document covers the default configuration of logging for Datalogic JavaPOS as well as a reference for some of the more common configuration changes. For a full reference to all available configuration options, please see the Apache Log4j2 Configuration ",(0,l.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.x/manual/configuration.html"},"Manual"),"."),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"character-set-encoding"},"Character Set Encoding"),(0,l.kt)("p",null,"Encoding is controlled by the first line of the configuration file. The encoding attribute accepts the name of whichever encoding is preferred for logging. Datalogic JavaPOS distributes with a default of windows-1252 encoding on the Microsoft Windows platform, and UTF-8 encoding on the Linux platform."),(0,l.kt)("h4",{id:"example-encoding-for-windows"},"Example Encoding for Windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="windows-1252"?>\n')),(0,l.kt)("h4",{id:"example-encoding-for-linux"},"Example Encoding for Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="utf-8"?>\n')),(0,l.kt)("h3",{id:"log-level"},"Log Level"),(0,l.kt)("p",null,"The threshold for logging messages can be adjusted in the ",(0,l.kt)("strong",{parentName:"p"},"Loggers")," element.  Datalogic JavaPOS is distributed with a default ",(0,l.kt)("strong",{parentName:"p"},"Root")," element with the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"level"))," attribute defaulted to ",(0,l.kt)("strong",{parentName:"p"},"debug"),". This denotes that all messages of level ",(0,l.kt)("strong",{parentName:"p"},"debug")," and lower are logged. The log level can be adjusted by changing the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"level"))," attribute to one of the following levels:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"trace - Entry and Exit to specific methods"),(0,l.kt)("li",{parentName:"ul"},"debug - Debugging information"),(0,l.kt)("li",{parentName:"ul"},"info - Informational Messages"),(0,l.kt)("li",{parentName:"ul"},"warn - Warnings"),(0,l.kt)("li",{parentName:"ul"},"error - Error Messages"),(0,l.kt)("li",{parentName:"ul"},"fatal - Fatal Errors")),(0,l.kt)("h4",{id:"example-log-levels"},"Example Log Levels"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<Root level="trace">\n<Root level="debug">\n<Root level="info">\n<Root level="warn">\n<Root level="error">\n<Root level="fatal">\n')),(0,l.kt)("h3",{id:"log-file-size"},"Log File Size"),(0,l.kt)("p",null,"The maximum size of each rolling log file can be adjusted in the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"size"))," attribute of the ",(0,l.kt)("strong",{parentName:"p"},"SizeBasedTriggeringPolicy")," element. Datalogic JavaPOS ships with a default setting of 20 MB for the size of each rolling log file. To set a custom size for each rolling log file, adjust the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"size"))," attribute to the desired size."),(0,l.kt)("h4",{id:"example-size-adjustment"},"Example Size adjustment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<SizeBasedTriggeringPolicy size="25 MB" />\n')),(0,l.kt)("h3",{id:"rollover-strategy"},"Rollover Strategy"),(0,l.kt)("h4",{id:"rollover-size"},"Rollover Size"),(0,l.kt)("p",null,"The number of files to use when rolling over can be adjusted in the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"max"))," attribute of the ",(0,l.kt)("strong",{parentName:"p"},"DefaultRolloverStrategy")," element. Datalogic JavaPOS ships with a default setting of 5 rolling log files. To set a custom number of rolling log files, adjust the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"max"))," attribute to the desired number of rollover files."),(0,l.kt)("h5",{id:"example-rollover-max-adjustment"},"Example Rollover max adjustment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<DefaultRolloverStrategy max="10" fileIndex="min"/>\n')),(0,l.kt)("h4",{id:"rollover-direction"},"Rollover Direction"),(0,l.kt)("p",null,"The direction that files rollover can be adjusted in the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"fileIndex"))," attribute of the ",(0,l.kt)("strong",{parentName:"p"},"DefaultRolloverStrategy")," element. Datalogic JavaPOS ships with a default setting of rolling to the minimum file. This means that the log file is rolled to name-1 and each log file is moved forward. To change direction, adjust the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"fileIndex"))," attribute to the desired direction."),(0,l.kt)("h2",{id:"default-configuration-file"},"Default configuration file"),(0,l.kt)("h3",{id:"microsoft-windows-platform"},"Microsoft Windows Platform"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="windows-1252"?>\n<Configuration status="WARN">\n<Appenders>\n    <Console name="Console" target="SYSTEM_OUT">\n    <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>\n    </Console>\n    <RollingFile name="RollingFile" filename="${env:TEMP}/jposTraceR.log"\n                filePattern="${env:TEMP}/jposTraceR-%i.log">\n        <PatternLayout>\n            <pattern>%d{DEFAULT} [%t] %-5level %c{1} - %msg %throwable{short.localizedMessage}%n</pattern>\n        </PatternLayout>\n        <Policies>\n            <OnStartupTriggeringPolicy />\n            <SizeBasedTriggeringPolicy size="20 MB" />\n        </Policies>\n        <DefaultRolloverStrategy max="5" fileIndex="min"/>\n    </RollingFile>\n</Appenders>\n<Loggers>\n    <Root level="debug">\n    <AppenderRef ref="RollingFile" />\n    </Root>\n</Loggers>\n</Configuration>\n')))}f.isMDXComponent=!0}}]);