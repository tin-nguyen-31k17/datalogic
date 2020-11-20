(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{143:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return d})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(2),o=t(6),r=(t(0),t(171)),c=t(183),i=t(184),l={id:"faq",title:"Frequently Asked Questions"},d={unversionedId:"android/faq",id:"android/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Why am I not receiving intents broadcasted by IntentWedge?",source:"@site/docs/android/faq.mdx",slug:"/android/faq",permalink:"/android/faq",version:"current",sidebar:"AndroidStudioSDK",previous:{title:"Android Studio SDK",permalink:"/android/overview"},next:{title:"Sample Apps",permalink:"/android/samples"}},s=[{value:"Why am I not receiving intents broadcasted by IntentWedge?",id:"why-am-i-not-receiving-intents-broadcasted-by-intentwedge",children:[]},{value:"Is the Datalogic SDK compatible with ProGuard obfuscation?",id:"is-the-datalogic-sdk-compatible-with-proguard-obfuscation",children:[]},{value:"How can I receive barcode data in my app?",id:"how-can-i-receive-barcode-data-in-my-app",children:[]},{value:"How can I configure Decoder properties?",id:"how-can-i-configure-decoder-properties",children:[]},{value:"How can I retrieve device information and control other device features?",id:"how-can-i-retrieve-device-information-and-control-other-device-features",children:[{value:"Info",id:"info",children:[]},{value:"Power",id:"power",children:[]},{value:"Location",id:"location",children:[]},{value:"NFC",id:"nfc",children:[]},{value:"LEDs",id:"leds",children:[]},{value:"Touch",id:"touch",children:[]},{value:"Sleep and Wakeup",id:"sleep-and-wakeup",children:[]},{value:"Reset",id:"reset",children:[]}]}],b={rightToc:s};function p(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"why-am-i-not-receiving-intents-broadcasted-by-intentwedge"},"Why am I not receiving intents broadcasted by IntentWedge?"),Object(r.b)("p",null,"You are likely using an implicit broadcast. Google introduced several limitations regarding implicit broadcasts in Android 8 in order to improve dispatching performance. According to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/about/versions/oreo/background#broadcasts"}),"Android documentation"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Android 8.0 (API level 26) makes these limitations more stringent."),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Apps that target Android 8.0 or higher can no longer register broadcast receivers for implicit broadcasts in their manifest. An implicit broadcast is a broadcast that does not target that app specifically. For example, ACTION_PACKAGE_REPLACED is an implicit broadcast, since it is sent to all registered listeners, letting them know that some package on the device was replaced. However, ACTION_MY_PACKAGE_REPLACED is not an implicit broadcast, since it is sent only to the app whose package was replaced, no matter how many other apps have registered listeners for that broadcast. "),Object(r.b)("li",{parentName:"ul"},"Apps can continue to register for explicit broadcasts in their manifests."),Object(r.b)("li",{parentName:"ul"},"Apps can use Context.registerReceiver() at runtime to register a receiver for any broadcast, whether implicit or explicit."),Object(r.b)("li",{parentName:"ul"},"Broadcasts that require a signature permission are exempted from this restriction, since these broadcasts are only sent to apps that are signed with the same certificate, not to all the apps on the device."))),Object(r.b)("p",null,"So, if your app registers itself to receive the intent used by IntentWedge in the Manifest, this approach works properly until Android 7. But, if the app follows the new Google guidelines regarding broadcast limitations introduced in Android 8, that is to register the App to receive intents at runtime with the Context.registerReceiver() call, this feature will work as expected for all Android versions."),Object(r.b)("h2",{id:"is-the-datalogic-sdk-compatible-with-proguard-obfuscation"},"Is the Datalogic SDK compatible with ProGuard obfuscation?"),Object(r.b)("p",null,"Yes. However, in order to ensure your app builds correctly while using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/studio/build/shrink-code"}),"ProGuard obfuscation"),", you will need to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/studio/build/shrink-code#keep-code"}),"edit your ProGuard rules file"),". Add the following rules to ensure R8 includes all the code it needs to correctly use the Datalogic SDK:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"-keep class com.datalogic.cradle.** { *; }\n-keep class com.datalogic.decode.** { *; }\n-keep class com.datalogic.device.** { *; }\n-keep class com.datalogic.extension.** { *; }\n-keep class com.datalogic.softspot.** { *; }\n")),Object(r.b)("h2",{id:"how-can-i-receive-barcode-data-in-my-app"},"How can I receive barcode data in my app?"),Object(r.b)("p",null,"Register a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/ReadListener.html"}),"ReadListener")," to receive read events on successful barcode reads:"),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"override fun onResume() {\n  super.onResume()\n  try {\n    if (decoder == null) {\n      decoder = BarcodeManager()\n      listener = ReadListener { decodeResult ->\n        mBarcodeText.text = decodeResult.text\n      }\n    }\n    decoder!!.addReadListener(listener)\n\n  } catch (e : DecodeException) {\n      e.printStackTrace()\n  }\n}\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"@Override\nprotected void onResume() {\n  super.onResume();\n  try {\n    if (decoder == null) {\n      decoder = new BarcodeManager();\n      listener = new ReadListener() {\n        @Override\n        public void onRead(DecodeResult decodeResult) {\n          mBarcodeText.setText(decodeResult.getText());\n        }\n      };\n      decoder.addReadListener(listener);\n    }\n  } catch (DecodeException e) {\n      e.printStackTrace();\n  }\n}\n")))),Object(r.b)("p",null,"Unregister the ReadListener in your ",Object(r.b)("inlineCode",{parentName:"p"},"Activity.onPause()"),":"),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"override fun onPause() {\n  super.onPause()\n\n  if (decoder != null) {\n    try {\n      decoder!!.removeReadListener(listener)\n      decoder = null\n    } catch (e: Exception) {\n      e.printStackTrace()\n    }\n  }\n}\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"@Override\nprotected void onPause() {\n  super.onPause();\n  if (decoder != null) {\n    try {\n      decoder.removeReadListener(listener);\n      decoder = null;\n    } catch (Exception e) {\n      e.printStackTrace();\n    }\n  }\n}\n")))),Object(r.b)("p",null,"The actual barcode scanning is started via any physical scan trigger on the device. Though to start scanning when a button on the application is pressed,you need to call ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/BarcodeManager.html#startDecode(int)"}),"BarcodeManager.startDecode()"),"."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Take a look at the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/android-samples-astudio/tree/master/Kotlin/DecodeListener"}),"Kotlin")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/android-samples-astudio/tree/master/Java/DecodeListener"}),"Java")," DecodeListener examples to see this in action."))),Object(r.b)("h2",{id:"how-can-i-configure-decoder-properties"},"How can I configure Decoder properties?"),Object(r.b)("p",null,"To configure the decoder properties, you need to instantiate ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/BarcodeManager.html"}),"BarcodeManager")," and get a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScannerProperties.html"}),"ScannerProperties")," reference."),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"var manager: BarcodeManager? = null\nvar configuration: ScannerProperties? = null\n\ntry {\n    manager = BarcodeManager()\n} catch (e: DecodeException) {\n    e.printStackTrace()\n}\n\nconfiguration = ScannerProperties.edit(manager)\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BarcodeManager manager = null;\nScannerProperties configuration = null;\n\ntry {\n    manager = new BarcodeManager();\n} catch (DecodeException e) {\n    e.printStackTrace();\n}\nconfiguration = ScannerProperties.edit(manager);\n")))),Object(r.b)("p",null,"Properties are organized hierarchically. Each property has the method ",Object(r.b)("inlineCode",{parentName:"p"},"set")," that requires a different argument depending on the property type (i.e.: int, boolean, String, etc...):"),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"configuration = ScannerProperties.edit(manager)\n\nconfiguration!!.code39.enable.set(true);\nconfiguration!!.code39.enableChecksum.set(false);\nconfiguration!!.code39.fullAscii.set(true);\nconfiguration!!.code39.Length1.set(20);\nconfiguration!!.code39.userID.set('x');\n\nif (configuration!!.qrCode.isSupported()) {\n    configuration!!.qrCode.enable.set(false);\n}\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"configuration.code39.enable.set(true);\nconfiguration.code39.enableChecksum.set(false);\nconfiguration.code39.fullAscii.set(true);\nconfiguration.code39.Length1.set(20);\nconfiguration.code39.userID.set('x');\n\nif (configuration.qrCode.isSupported()) {\n    configuration.qrCode.enable.set(false);\n}\n")))),Object(r.b)("p",null,"For the configuration to be actually applied, you must call the method ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/decode/configuration/ScannerProperties.html#store"}),"ScannerProperties.store"),"."),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"val errorCode = configuration!!.store(manager, true)\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"try {\n    configuration.store(manager, true);\n} catch (ConfigException e) {\n    e.printStackTrace();\n    return;\n}\n")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Take a look at the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/android-samples-astudio/tree/master/Kotlin/DecodeConfigSampleAPI"}),"Kotlin")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/android-samples-astudio/tree/master/Java/DecodeConfigSampleAPI"}),"Java")," DecodeConfigSampleAPI examples to see this in action."))),Object(r.b)("h2",{id:"how-can-i-retrieve-device-information-and-control-other-device-features"},"How can I retrieve device information and control other device features?"),Object(r.b)("p",null,"The Datalogic Android SDK provides APIs for many useful operations that can't be done using the standard AOSP SDK."),Object(r.b)("h3",{id:"info"},"Info"),Object(r.b)("p",null,"Datalogic SDK provides advanced information about the device in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/info/SYSTEM.html"}),"SYSTEM")," class, which exposes Wi-Fi type, keyboard type and others as static members. Example usage:"),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"com.datalogic.device.info.SYSTEM.SDK_VERSION_INT\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"com.datalogic.device.info.SYSTEM.SDK_VERSION_INT;\n")))),Object(r.b)("h3",{id:"power"},"Power"),Object(r.b)("p",null,"To get information about the battery, Android broadcasts the ",Object(r.b)("inlineCode",{parentName:"p"},"Intent")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/content/Intent.html#ACTION_BATTERY_CHANGED"}),"Intent.ACTION_BATTERY_CHANGED()")," which carries information in its extra properties. The intent is fired every time the status of the battery changes. Once  you register a receiver, notice that this particular behavior happens because the battery intent is a STICKY one: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/content/Context.html#sendStickyBroadcast"}),"Content.sendStickyBroadcast()"),"."),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"var currentBatteryStatus: Intent? =\n  registerReceiver(null, IntentFilter(\n        Intent.ACTION_BATTERY_CHANGED)\n  )\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Intent currentBatteryStatus =\n  registerReceiver(null, new IntentFilter(\n    Intent.ACTION_BATTERY_CHANGED)\n  );\n")))),Object(r.b)("h3",{id:"location"},"Location"),Object(r.b)("p",null,"The standard Android SDK does not allow toggling of the Location services (GPS, network, etc...) thus an application must ask the user to do it manually. Datalogic SDK overcomes this limitation by providing the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/location/LocationManager.html"}),"LocationManager")," class, which there is an example of below:"),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"try {\n  val loc: LocationManager? = LocationManager()\n  loc!!.setLocationMode(if (enable) LocationMode.SENSORS_AND_NETWORK else LocationMode.OFF)\n} catch (e1: DeviceException) {\n  e.printStackTrace()\n}\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"com.datalogic.device.location.LocationManager loc = null;\ntry {\n  loc = new com.datalogic.device.location.LocationManager();\n  loc.setLocationMode(enable ? LocationMode.SENSORS_AND_NETWORK : LocationMode.OFF);\n} catch (DeviceException e) {\n  e.printStackTrace();\n}\n")))),Object(r.b)("h3",{id:"nfc"},"NFC"),Object(r.b)("p",null,"Standard Android SDK doesn't allow to turn on or off the NFC adapter, thus an application must ask to the user to manually do it. Datalogic SDK overcomes this limit providing the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/nfc/NfcManager.html"}),"NfcManager")," class. "),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'val error = com.datalogic.device.nfc.NfcManager().enableNfcAdapter(enable)\nif (error != DeviceException.SUCCESS) {\n  Log.e(javaClass.name, "Error while setting NFC", ErrorManager.getLastError())\n}\n'))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'int error = new com.datalogic.device.nfc.NfcManager().enableNfcAdapter(enable);\nif(error != DeviceException.SUCCESS) {\n  Log.e(getClass().getName(), "Error while setting NFC", ErrorManager.getLastError());\n}\n')))),Object(r.b)("h3",{id:"leds"},"LEDs"),Object(r.b)("p",null,"Datalogic SDK allows one to control LEDs on the device. The standard Android APIs for controlling the notification LED via the notifications system still works, though you are limited to 1 LED. Datalogic devices may have more LEDs, and it is easier to control them using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/notification/LedManager.html"}),"LedManager")," than the standard API."),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"LedManager led = LedManager();\nled.blinkLed(Led.LED_GREEN_SPOT, 1, 500, 500)\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"LedManager led = new LedManager();\nled.blinkLed(Led.LED_GREEN_SPOT, 1, 500, 500);\n")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Please notice that not all LEDs on a device can be freely controlled by a user application, as some are reserved to the system."))),Object(r.b)("h3",{id:"touch"},"Touch"),Object(r.b)("p",null," The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/input/TouchManager.html"}),"TouchManager")," class can be used to lock the touchscreen."),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"val tm = TouchManager()\ntm.lockInput(true)\nThread.sleep(2000)\ntm.lockInput(false)\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"TouchManager tm = new TouchManager();\ntm.lockInput(true);\nThread.sleep(2000);\ntm.lockInput(false);\n")))),Object(r.b)("h3",{id:"sleep-and-wakeup"},"Sleep and Wakeup"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/PowerManager.html"}),"PowerManager")," class allows to configure the screen off timeout and the wakeup sources of the device."),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/SuspendTimeout.html"}),"SuspendTimeout")," can be set with a condition: the device running on battery or the device plugged to a power source, the function ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/PowerManager.html#setSuspendTimeout(com.datalogic.device.power.SuspendTimeout,%20boolean)"}),"PowerManager.setSuspendTimeout()")," has a boolean argument for it."),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"val pm = PowerManager()\n\npm.setSuspendTimeout(SuspendTimeout.MINUTES_5, false) // battery\npm.setSuspendTimeout(SuspendTimeout.NEVER, true) // ext power\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"PowerManager pm = new PowerManager();\n\npm.setSuspendTimeout(SuspendTimeout.MINUTES_5, false); // battery\npm.setSuspendTimeout(SuspendTimeout.NEVER, true); // ext power\n")))),Object(r.b)("p",null,"Please notice that not all the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/WakeupSource.html"}),"WakeupSource"),"s\navailable in the SDK are supported by a device, thus is better to check for the support before enabling/disabling them."),Object(r.b)(c.a,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"if (pm.isWakeupSupported(WakeupSource.TRIG_LEFT) &&\n    !pm.isWakeupActive(WakeupSource.TRIG_LEFT)) {\n  pm.activateWakeup(WakeupSource.TRIG_LEFT)\n}\n"))),Object(r.b)(i.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"if (pm.isWakeupSupported(WakeupSource.TRIG_LEFT) &&\n      !pm.isWakeupActive(WakeupSource.TRIG_LEFT)) {\n  pm.activateWakeup(WakeupSource.TRIG_LEFT);\n}\n")))),Object(r.b)("h3",{id:"reset"},"Reset"),Object(r.b)("p",null,"With the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/power/PowerManager.html"}),"PowerManager")," class it is possible to perform several type of resets and reboot of the device. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html#ENTERPRISE_RESET"}),"BootType.ENTERPRISE_RESET")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html#FACTORY_RESET"}),"BootType.FACTORY_RESET")," reset types clear the configuration of the device setting it to a custom one or to the out-of-the-box one respectively, while ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/android-sdk-docs/reference/com/datalogic/device/BootType.html#RESET"}),"BootType.RESET")," is a software reboot of the device."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Take a look at the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/android-samples-astudio/tree/master/Kotlin/DeviceSampleAPI"}),"Kotlin")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/android-samples-astudio/tree/master/Java/DeviceSampleAPI"}),"Java")," DeviceSampleAPI examples to see this in action."))))}p.isMDXComponent=!0},171:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),s=function(e){var a=o.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},b=function(e){var a=s(e.components);return o.a.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=n,m=b["".concat(c,".").concat(u)]||b[u]||p[u]||r;return t?o.a.createElement(m,i(i({ref:a},d),{},{components:t})):o.a.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<r;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},174:function(e,a,t){"use strict";function n(e){var a,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(o&&(o+=" "),o+=t);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}a.a=function(){for(var e,a,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(o&&(o+=" "),o+=a);return o}},179:function(e,a,t){"use strict";var n=t(0),o=Object(n.createContext)(void 0);a.a=o},180:function(e,a,t){"use strict";var n=t(0),o=t(179);a.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},183:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(180),c=t(174),i=t(47),l=t.n(i),d=37,s=39;a.a=function(e){var a=e.block,t=e.children,i=e.defaultValue,b=e.values,p=e.groupId,u=Object(r.a)(),m=u.tabGroupChoices,h=u.setTabGroupChoices,v=Object(n.useState)(i),g=v[0],j=v[1],O=Object(n.useState)(!1),f=O[0],T=O[1];if(null!=p){var N=m[p];null!=N&&N!==g&&b.some((function(e){return e.value===N}))&&j(N)}var y=function(e){j(e),null!=p&&h(p,e)},k=[],w=function(e){e.metaKey||e.altKey||e.ctrlKey||T(!0)},S=function(){T(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",w),window.addEventListener("mousedown",S)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a})},b.map((function(e){var a=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===a,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===a}),style:f?{}:{outline:"none"},key:a,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case s:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case d:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(k,e.target,e),w(e)},onFocus:function(){return y(a)},onClick:function(){y(a),T(!1)},onPointerDown:function(){return T(!1)}},t)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===g}))[0]))}},184:function(e,a,t){"use strict";var n=t(0),o=t.n(n);a.a=function(e){return o.a.createElement("div",null,e.children)}}}]);