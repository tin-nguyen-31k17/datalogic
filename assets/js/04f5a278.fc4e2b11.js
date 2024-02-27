"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[57872],{58578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(85893),r=t(11151);const i={id:"tutorial",title:"Label Reader Tutorial",sidebar_label:"Label Reader Tutorial"},o=void 0,s={id:"javapos/develop/tutorial",title:"Label Reader Tutorial",description:"This section covers a basic Java Application tutorial. The tutorial will demonstrate how to create a basic label reader application using Java and the Datalogic JavaPOS API.",source:"@site/docs/javapos/develop/tutorial.md",sourceDirName:"javapos/develop",slug:"/javapos/develop/tutorial",permalink:"/javapos/develop/tutorial",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"tutorial",title:"Label Reader Tutorial",sidebar_label:"Label Reader Tutorial"},sidebar:"JavaPOS",previous:{title:"Application Integration",permalink:"/javapos/develop/appintegrate"},next:{title:"HelloDatalogicJavaPOS",permalink:"/javapos/develop/hellodatalogicjavapos"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Support Libraries",id:"support-libraries",level:3},{value:"Configuration Files",id:"configuration-files",level:3},{value:"Application Development",id:"application-development",level:2},{value:"The Tutorial Class",id:"the-tutorial-class",level:3},{value:"The Scanner implementation",id:"the-scanner-implementation",level:4},{value:"Open -&gt; Claim -&gt; Enable",id:"open---claim---enable",level:4},{value:"jpos.xml Profile",id:"jposxml-profile",level:5},{value:"Connecting to the device",id:"connecting-to-the-device",level:5},{value:"Disable -&gt; Release -&gt; Close",id:"disable---release---close",level:4},{value:"Data Events",id:"data-events",level:4},{value:"The main method",id:"the-main-method",level:4},{value:"Using a BufferedReader",id:"using-a-bufferedreader",level:5},{value:"Summary",id:"summary",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This section covers a basic Java Application tutorial. The tutorial will demonstrate how to create a basic label reader application using Java and the Datalogic JavaPOS API."}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"For this tutorial, we will be creating a simple console application in Java that opens, claims and enables a scanner device and provides a mechanism to see what labels were scanned with that device. This tutorial only covers a very basic aspect of development in JavaPOS, but should suffice as a starting point for any application that looks to read labels from a Datalogic scanning device."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"In order to develop an application for Datalogic Scanning devices, you will need to first have the supporting JAR libraries and configuration files needed for Datalogic JavaPOS present."}),"\n",(0,a.jsx)(n.h3,{id:"support-libraries",children:"Support Libraries"}),"\n",(0,a.jsx)(n.p,{children:"The easiest way to integrate JavaPOS into your application is to copy the entire SupportJars folder from the installed JavaPOS location to your project. This will add a SupportJars folder to your project and will contain all of the support libraries needed for JavaPOS. You will also need to copy the JavaPOS.jar file to your project. This file can be copied to the SupportJars folder if you wish, or can be copied to your application's directory."}),"\n",(0,a.jsx)(n.h3,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,a.jsx)(n.p,{children:"In order for JavaPOS to operate correctly, you will need the configuration files that are installed with JavaPOS copied into your application's directory."}),"\n",(0,a.jsx)(n.h2,{id:"application-development",children:"Application Development"}),"\n",(0,a.jsx)(n.h3,{id:"the-tutorial-class",children:"The Tutorial Class"}),"\n",(0,a.jsx)(n.p,{children:"In order to respond to JPOS events, your class will need to implement the jpos.events.DataListener interface in your class. This interface is part of the OMG JPOS 1.14 library (jpos114.jar). In order to implement the listener, you will also need to import the jpos.events.DataEvent class. Add the following imports to your class:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import jpos.events.DataEvent;\r\nimport jpos.events.DataListener;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now create your Tutorial class which implements the DataListener interface as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class Tutorial implements DataListener {\r\n    public void dataOccurred(DataEvent de) {\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that each time data is received from the Scanner device, the dataOccurred method will be called. This method is where we will put our label processing."}),"\n",(0,a.jsx)(n.h4,{id:"the-scanner-implementation",children:"The Scanner implementation"}),"\n",(0,a.jsx)(n.p,{children:"In order to program for a UPOS Scanner device, we will need to import the jpos.Scanner class. This class is the UPOS Scanner device implementation."}),"\n",(0,a.jsx)(n.p,{children:"Add the following import to the Tutorial class:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import jpos.Scanner;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, we will add a member variable to the Tutorial class to hold the Scanner instance."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class Tutorial implements DataListener {\r\n    private Scanner scanner;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, add a constructor for the Tutorial class that instantiates the Scanner instance as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class Tutorial implements DataListener {\r\n    private Scanner scanner;\r\n\r\n    public Tutorial() {\r\n        this.scanner = new Scanner();\r\n    }\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now the Tutorial class has a member variable named scanner that holds a generic UPOS Scanner instance."}),"\n",(0,a.jsx)(n.h4,{id:"open---claim---enable",children:"Open -> Claim -> Enable"}),"\n",(0,a.jsx)(n.p,{children:"In order for an application to read labels using a UPOS Scanning device, the application must first open the UPOS device. The application must then claim the device. Finally, the application sends an enable command to the claimed device allowing the device to begin reading labels. Each step of this process is represented by a method within the UPOS Scanner class. Each of these methods potentially throws a JposException when they are called, so it is a good time to import jpos.JposException by adding the following to your Tutorial class imports:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import jpos.JposException;\n"})}),"\n",(0,a.jsx)(n.h5,{id:"jposxml-profile",children:"jpos.xml Profile"}),"\n",(0,a.jsxs)(n.p,{children:["The JPOS Scanner.open method takes a single argument denoting the name of the jpos.xml Profile to use. This profile must match the ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"logicalName"})})," attribute of a ",(0,a.jsx)(n.strong,{children:"JposEntry"})," element in the jpos.xml file. For this example, I will be using the default jpos.xml that is shipped with Datalogic JavaPOS, and I will be using the ",(0,a.jsx)(n.strong,{children:"DL-Gryphon-GD4430-USB-OEM"})," profile from jpos.xml. You can find the beginning of this profile by looking in the jpos.xml file, but it is included here as well."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<JposEntry logicalName="DL-Gryphon-GD4430-USB-OEM">\r\n    <creation factoryClass="com.dls.jpos.service.DLSScannerInstanceFactory" serviceClass="com.dls.jpos.service.DLSScannerService"/>\r\n    <vendor name="DLA" url="http://www.adc.datalogic.com"/>\r\n    <jpos category="Scanner" version="1.13"/>\r\n    <product description="ScannerService" name="ScannerService" url="http://www.adc.datalogic.com"/>\n'})}),"\n",(0,a.jsx)(n.h5,{id:"connecting-to-the-device",children:"Connecting to the device"}),"\n",(0,a.jsx)(n.p,{children:"Now that I have my profile selected, it is time to add a method for connecting to the Scanner device. Add a method to your class to encapsulate connecting to a Scanner device. This method should take a single parameter that contains the logicalName of the profile to use. This method should return a boolean indicating whether it succeeded in connecting to the device."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public boolean connectScanner(String profile) {\r\n\r\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, we will add the call to Scanner.open. Because this call can throw an exception, we will need to surround it in a try .. catch clause. If the device fails to open, we need to notify the user and return false. ",(0,a.jsxs)(n.em,{children:["Note that the call to open merely loads the jpos.xml profile and does not attempt to connect to the device. The only reason that this call should fail is if a ",(0,a.jsx)(n.strong,{children:"JposEntry"})," element could not be found with the profile name."]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public boolean connectScanner(String profile) {\r\n    try {\r\n        this.scanner.open(profile);\r\n    } catch (JposException je) {\r\n        System.err.println("ERROR: Failed to open profile: " + profile + ", " + je);\r\n        return false;\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"After the device profile has been loaded through the call to Scanner.open, it is time to claim the device using Scanner.claim. Like Scanner.open, Scanner.claim can throw an exception and will need to be surrounded in a try .. catch clause. There are a variety of reasons that a call to claim would throw an exception, so it is important to examine the exception thrown and close the device if an exception is thrown during the call to Scanner.claim.\r\nThe call to Scanner.claim takes a single integer argument indicating the number of milliseconds to wait before timeout when claiming a device. For the purpose of this tutorial, we will be using a fixed timeout of 1000 milliseconds or one second, but it is recommended that this argument be configurable externally so that the code does not have to be rebuilt to change the value."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public boolean connectScanner(String profile) {\r\n    try {\r\n        this.scanner.open(profile);\r\n    } catch (JposException openx) {\r\n        System.err.println("ERROR: Failed to open profile: " + profile + ", " + openx);\r\n        return false;\r\n    }\r\n\r\n    try {\r\n        this.scanner.claim(1000);\r\n    } catch (JposException claimx) {\r\n        System.err.println("ERROR: Failed to claim scanner: " + claimx);\r\n        try {\r\n            this.scanner.close();\r\n        } catch (JposException closex) {\r\n            System.err.println("ERROR: Failed to close device: " + closex);\r\n        }\r\n        return false;\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"At this point, it is time to enable the device. The Scanner device is enabled by a call to Scanner.setDeviceEnabled with the argument of true. The Scanner.setDeviceEnabled method can throw a JposException, so it is necessary to wrap it in a try .. catch clause. If the call fails, it will be necessary to close the scanner before returning false."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    try {\r\n        this.scanner.setDeviceEnabled(true);\r\n    } catch (JposException enablex) {\r\n        System.err.println("ERROR: Failed to enable device: " + enablex);\r\n        try {\r\n            this.scanner.close();\r\n        } catch (JposException closex) {\r\n            System.err.println("ERROR: Failed to close device: " + closex);\r\n        }\r\n        return false;\r\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"The device should now be opened, claimed and enabled. However, there will be no data delivered from the device until the Data Event Enabled is set to true. This step is performed by a call to Scanner.setDataEventEnabled. Because Scanner.setDataEventEnabled can throw an exception, it is necessary to surround the statement in a try .. catch clause. Add the following code after the call to Scanner.setDeviceEnabled."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    try {\r\n        this.scanner.setDataEventEnabled(true);\r\n    } catch (JposException datax) {\r\n        System.err.println("ERROR: Failed to enable Data Events: " + datax);\r\n        try {\r\n            this.scanner.close();\r\n        } catch (JposException closex) {\r\n            System.err.println("ERROR: Failed to close device: " + closex);\r\n        }\r\n        return false;\r\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now that the scanner is opened, claimed, enabled and has Data Events enabled, the device can now start to deliver events to our application. In order to process those events, we will need to add our application as a data listener for the device. This will result in our dataOccurred method being called each time a data event is delivered from the device. Add the following to the end of your connectScanner method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"    this.scanner.addDataListener(this);\r\n    return true;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Here is the completed Tutorial.connectScanner method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public boolean connectScanner(String profile) {\r\n    try {\r\n        this.scanner.open(profile);\r\n    } catch (JposException openx) {\r\n        System.err.println("ERROR: Failed to open profile: " + profile + ", " + openx);\r\n        return false;\r\n    }\r\n\r\n    try {\r\n        this.scanner.claim(1000);\r\n    } catch (JposException claimx) {\r\n        System.err.println("ERROR: Failed to claim scanner: " + claimx);\r\n        try {\r\n            this.scanner.close();\r\n        } catch (JposException closex) {\r\n            System.err.println("ERROR: Failed to close device: " + closex);\r\n        }\r\n        return false;\r\n    }\r\n\r\n    try {\r\n        this.scanner.setDeviceEnabled(true);\r\n    } catch (JposException enablex) {\r\n        System.err.println("ERROR: Failed to enable device: " + enablex);\r\n        try {\r\n            this.scanner.close();\r\n        } catch (JposException closex) {\r\n            System.err.println("ERROR: Failed to close device: " + closex);\r\n        }\r\n        return false;\r\n    }\r\n\r\n    try {\r\n        this.scanner.setDataEventEnabled(true);\r\n    } catch (JposException datax) {\r\n        System.err.println("ERROR: Failed to enable Data Events: " + datax);\r\n        try {\r\n            this.scanner.close();\r\n        } catch (JposException closex) {\r\n            System.err.println("ERROR: Failed to close device: " + closex);\r\n        }\r\n        return false;\r\n    }\r\n\r\n    this.scanner.addDataListener(this);\r\n    return true;\r\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"disable---release---close",children:"Disable -> Release -> Close"}),"\n",(0,a.jsx)(n.p,{children:"Similar to the Open -> Claim -> Enable process, the Disable -> Release -> Close process is necessary to properly disconnect from the Scanner device. The UPOS Scanner class has methods for each of the steps to properly disconnect and the entire process should be encapsulated within a method similar to connectScanner. In this section, we will create a disconnectScanner method that facilitates this process. For the purpose of this tutorial, we will not be implementing any error handling outside of displaying the error that occurred, so there will be no need to return a value from this method."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public void disconnectScanner() {\r\n\r\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The first thing that we need to do is remove our application as a Data listener. This will stop any calls to the dataOccured method in our application."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public void disconnectScanner() {\r\n    this.scanner.removeDataListener(this);\r\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"At this point, we will assume that the device is in the Device Enabled state. This means that the first thing that we will need to do is disable the device by calling the Scanner.setDeviceEnabled with false for the argument. This method can throw an exception, so we will need to surround it in a try .. catch clause. If an exception is thrown here, we will not return and instead carry on to the next step of the process."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    try {\r\n        this.scanner.setDeviceEnabled(false);\r\n    } catch (JposException enablex) {\r\n        System.err.println("ERROR: Failed to disable device: " + enablex);\r\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"The device has now been returned to the Claimed state. The next step in the process is to release the device from our application. This is accomplished by calling the UPOS Scanner.release method. The release method can throw an exception, so we will need to surround it in a try .. catch clause. If an exception is thrown here, we will not return and instead carry on to the final step of the process."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    try {\r\n        this.scanner.release();\r\n    } catch (JposException releasex) {\r\n        System.err.println("ERROR: Failed to release device: " + releasex);\r\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"The device has now been returned to the Open state. The final step in the process is to close the device from our application. This is accomplished by calling the UPOS Scanner.close method. The close method can throw an exception, so we will need to surround it in a try .. catch clause. If an exception is thrown here, we will not return as there is no further action to be taken."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    try {\r\n        this.scanner.close();\r\n    } catch (JposException closex) {\r\n        System.err.println("ERROR: Failed to close device: " + closex);\r\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now we have a method to properly disconnect from the device. The error handling is very simple, but suffices for the purpose of this tutorial. Here is the entire disconnectScanner method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public void disconnectScanner() {\r\n    this.scanner.removeDataListener(this);\r\n\r\n    try {\r\n        this.scanner.setDeviceEnabled(false);\r\n    } catch (JposException enablex) {\r\n        System.err.println("ERROR: Failed to disable device: " + enablex);\r\n    }\r\n\r\n    try {\r\n        this.scanner.release();\r\n    } catch (JposException releasex) {\r\n        System.err.println("ERROR: Failed to release device: " + releasex);\r\n    }\r\n\r\n    try {\r\n        this.scanner.close();\r\n    } catch (JposException closex) {\r\n        System.err.println("ERROR: Failed to close device: " + closex);\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"data-events",children:"Data Events"}),"\n",(0,a.jsx)(n.p,{children:"A Data Event is produced each time data is received from the Scanner device. For the purpose of this tutorial, we are going to concentrate on gathering Label events and ignore all other types of Data events. We have already implemented the dataOccurred event as part of implementing the DataListener interface. Each time a Label is scanned using a Scanner device, a Data Event occurs, and our dataOccurred method is called."}),"\n",(0,a.jsx)(n.p,{children:"With Label data, we are concerned with three pieces of data: the raw Label data, the decoded Label data and the Label type. The UPOS Scanner class provides three methods to obtain this data. Scanner.getScanData returns a byte array containing the raw Label data. Scanner.getScanDataLabel returns a byte array containing the decoded Label data. Scanner.getScanDataType returns an integer denoting the symbology used to encode the Label data."}),"\n",(0,a.jsx)(n.p,{children:"We will now expand our dataOccurred method by adding local variables to hold the potential label data during each Data Event. Add the following to your dataOccurred method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public void dataOccurred(DataEvent de) {\r\n    byte[] scanData = new byte[]{};\r\n    byte[] scanDataLabel = new byte[]{};\r\n    int scanDataType = -1;\r\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The three methods used to populate our local variables are each methods that can throw an exception. It is usually not best practice to group statements into a single try .. catch clause, in this particular case, we will be grouping the three calls into a single try .. catch for brevity and clarity."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    try {\r\n        scanData = this.scanner.getScanData();\r\n        scanDataLabel = this.scanner.getScanDataLabel();\r\n        scanDataType = this.scanner.getScanDataType();\r\n    } catch (JposException scannerx) {\r\n        System.err.println("ERROR: JPOS Exception during data event: " + scannerx);\r\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"At this point, any sort of Data event may have been triggered. Calling each of these three methods will return a value regardless of whether a label event occurred. We are only interested in Scanned Label Events for the purpose of this tutorial, so we will test the length of the local scanData byte array to determine if we have any scan data, and display the information that was returned from the Scanner to the user. Add the following to your dataOccurred method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    if (scanData.length > 0) {\r\n        String sData = new String(scanData);\r\n        String sLabel = new String(scanDataLabel);\r\n        System.out.println("Raw Data: " + sData + ", Label Data: " + sLabel +\r\n            ", Type: " + scanDataType);\r\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now when a label is scanned, our event handler will output the data from the label. By default, the Data Event Enable is automatically set to false each time a Data Event is delivered. In order to get another label to read, we will need to set the Data Event Enabled to true again. Each time a data event is delivered, we need to repeat this process. As before, the Scanner.setDataEventEnabled can throw an exception, so we will surround it in a try .. catch clause."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    try {\r\n        this.scanner.setDataEventEnabled(true);\r\n    } catch (JposException datax) {\r\n        System.err.println("ERROR: Failed to enable Data Events. " + datax);\r\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now our event handler displays label events for the user and enables Data Events for another label read. The complete dataOccurred method is here for reference:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public void dataOccurred(DataEvent de) {\r\n    byte[] scanData = new byte[]{};\r\n    byte[] scanDataLabel = new byte[]{};\r\n    int scanDataType = -1;\r\n\r\n    try {\r\n        scanData = this.scanner.getScanData();\r\n        scanDataLabel = this.scanner.getScanDataLabel();\r\n        scanDataType = this.scanner.getScanDataType();\r\n    } catch (JposException scannerx) {\r\n        System.err.println("ERROR: JPOS Exception during data event: " + scannerx);\r\n    }\r\n\r\n    if (scanData.length > 0) {\r\n        String sData = new String(scanData);\r\n        String sLabel = new String(scanDataLabel);\r\n        System.out.println("Raw Data: " + sData + ", Label Data: " + sLabel +\r\n            ", Type: " + scanDataType);\r\n    }\r\n\r\n    try {\r\n        this.scanner.setDataEventEnabled(true);\r\n    } catch (JposException datax) {\r\n        System.err.println("ERROR: Failed to enable Data Events. " + datax);\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"the-main-method",children:"The main method"}),"\n",(0,a.jsx)(n.p,{children:"Now it is time to tie everything together into a working console application. We will now add a main method to our class to allow this tutorial to be launched from the command line. For the purpose of this tutorial, we will be creating a simple loop waiting for the user to press the Enter key. Until the user has pressed this key, the application will continue to read and display label events. Add a main method to your Tutorial class as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public static void main(String[] args) {\r\n    Tutorial tutorial = new Tutorial();\r\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As mentioned previously, we will be using the ",(0,a.jsx)(n.strong,{children:"DL-Gryphon-GD4430-USB-OEM"})," profile from the default ",(0,a.jsx)(n.strong,{children:"jpos.xml"})," file that is distributed with JavaPOS. If you have a different device that you are writing for, change this to the name of the profile that you are using in your ",(0,a.jsx)(n.strong,{children:"jpos.xml"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public static void main(String[] args) {\r\n    Tutorial tutorial = new Tutorial();\r\n    String profileName = "DL-Gryphon-GD4430-USB-OEM";\r\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"The next step is to connect to the scanner. We will be testing the boolean returned by the Tutorial.connectScanner method to determine whether the device is connected before proceeding. If the device does not connect, there is no reason to continue executing, so we will simply exit if Tutorial.connectScanner fails."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"    if (!tutorial.connectScanner(profileName)) {\r\n        System.exit(1);\r\n    }\n"})}),"\n",(0,a.jsx)(n.h5,{id:"using-a-bufferedreader",children:"Using a BufferedReader"}),"\n",(0,a.jsxs)(n.p,{children:["For our main loop, we will be using a BufferedReader instance to read from an InputStreamReader instance that is attached to System.in. This will allow us to read input from the console and determine when to stop executing. In order to use these classes, the following imports will need to be added to the ",(0,a.jsx)(n.strong,{children:"Tutorial"})," class:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import java.io.BufferedReader;\r\nimport java.io.IOException;\r\nimport java.io.InputStreamReader;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now we will add our loop to the main method after our call to Tutorial.connect."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));\r\n    while (true) {\r\n        System.out.println("Press Enter to exit.");\r\n        try {\r\n            reader.readLine();\r\n        } catch (IOException iox) {\r\n            System.err.println("ERROR: I/O Exception reading from System.in: " + iox);\r\n        }\r\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"Once the user has pressed Enter and is exiting the program, we will need to go ahead and disconnect from the scanner. Add the following to your main method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    tutorial.disconnectScanner();\r\n    System.out.println("Disconnected from device.");\r\n    System.exit(0);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Here is the completed Tutorial.main method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public static void main(String[] args) {\r\n    Tutorial tutorial = new Tutorial();\r\n    String profileName = "DL-Gryphon-GD4430-USB-OEM";\r\n\r\n    if (!tutorial.connectScanner(profileName)) {\r\n        System.exit(1);\r\n    }\r\n\r\n    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));\r\n    while (true) {\r\n        System.out.println("Press Enter to exit.");\r\n        try {\r\n            reader.readLine();\r\n        } catch (IOException iox) {\r\n            System.err.println("ERROR: I/O Exception reading from System.in: " + iox);\r\n        }\r\n    }\r\n\r\n    tutorial.disconnectScanner();\r\n    System.out.println("Disconnected from device.");\r\n    System.exit(0);\r\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"We have now created a simple application that will allow a user to connect to a Scanner device, display Label events until the user presses Enter and then disconnect from the Scanner device. This is, of course, a very minimal example and does not cover the full capabilities of the Datalogic JavaPOS API, however, it serves as an excellent starting point for applications that use the Datalogic JavaPOS API."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(67294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);