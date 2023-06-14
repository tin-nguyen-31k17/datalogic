"use strict";(self.webpackChunkdatalogic_github_io=self.webpackChunkdatalogic_github_io||[]).push([[7682],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return t?n.createElement(m,i(i({ref:a},d),{},{components:t})):n.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},73396:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],c={id:"faq",title:"Frequently Asked Questions"},l=void 0,s={unversionedId:"xamarin/faq",id:"xamarin/faq",title:"Frequently Asked Questions",description:"How can I receive barcode data in my app?",source:"@site/docs/xamarin/faq.md",sourceDirName:"xamarin",slug:"/xamarin/faq",permalink:"/xamarin/faq",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"AndroidStudioSDK",previous:{title:"Overview",permalink:"/xamarin/overview"},next:{title:"Sample Apps",permalink:"/xamarin/samples"}},d={},p=[{value:"How can I receive barcode data in my app?",id:"how-can-i-receive-barcode-data-in-my-app",level:2},{value:"How can I configure Decoder properties?",id:"how-can-i-configure-decoder-properties",level:2},{value:"How can I retrieve device information?",id:"how-can-i-retrieve-device-information",level:2},{value:"Info",id:"info",level:3},{value:"Power",id:"power",level:3},{value:"Location",id:"location",level:3},{value:"NFC",id:"nfc",level:3},{value:"Notifications",id:"notifications",level:3},{value:"Touch",id:"touch",level:3},{value:"Sleep and Wakeup",id:"sleep-and-wakeup",level:3},{value:"Reset",id:"reset",level:3},{value:"How can I access the self-shopping cradle?",id:"how-can-i-access-the-self-shopping-cradle",level:2},{value:"Cradle State",id:"cradle-state",level:3},{value:"Cradle LEDs",id:"cradle-leds",level:3},{value:"Cradle Lock",id:"cradle-lock",level:3},{value:"Cradle Config Area",id:"cradle-config-area",level:3},{value:"Cradle Custom Area",id:"cradle-custom-area",level:3}],u={toc:p},h="wrapper";function m(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)(h,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-can-i-receive-barcode-data-in-my-app"},"How can I receive barcode data in my app?"),(0,r.kt)("p",null,"Register an ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_IReadListener.htm"},"IReadListener")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Activity.OnResume()")," to receive read events on successful barcode reads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'protected override void OnResume()\n{\n    base.OnResume();\n\n    if (decoder == null)\n    {\n        decoder = new BarcodeManager();\n    }\n\n    try\n    {\n    decoder.AddReadListener(this);\n    }\n    catch (DecodeException e)\n    {\n        Log.Error(LOGTAG, "Error while trying to bind a listener to BarcodeManager", e);\n    }\n}\n')),(0,r.kt)("p",null,"Unregister the IReadListener in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Activity.onPause()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'protected override void OnPause()\n{\n    base.OnPause();\n\n    if (decoder != null)\n    {\n        try\n        {\n            decoder.RemoveReadListener(this);\n    }\n    catch (Exception e)\n    {\n            Log.Error(LOGTAG, "Error while trying to remove a listener from BarcodeManager", e);\n    }\n    }\n}\n')),(0,r.kt)("p",null,"The actual barcode scanning is started via any physical scan trigger on the device. Though to start scanning when a button on the application is pressed, you need to call ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_BarcodeManager.htm"},"BarcodeManager.StartDecode()"),"."),(0,r.kt)("h2",{id:"how-can-i-configure-decoder-properties"},"How can I configure Decoder properties?"),(0,r.kt)("p",null,"To configure the decoder properties, you need to instantiate ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_BarcodeManager.htm"},"BarcodeManager")," and get a ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_Configuration_ScannerProperties.htm"},"ScannerProperties")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"BarcodeManager manager = null;\nScannerProperties configuration = null;\n...\nmanager = new BarcodeManager();\n...\nconfiguration = ScannerProperties.Edit(manager);\n")),(0,r.kt)("p",null,"Properties are organized hierarchically. Each property has the method ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," that requires a different argument depending on the property type (i.e.: int, boolean, String, etc...):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"configuration.Code39.EnableChecksum.Set(true);\nconfiguration.Code39.FullAscii.Set(true);\nconfiguration.Code39.Length1.Set(20);\n...\nconfiguration.code39.userID.set('x');\n...\n if (configuration.QrCode.IsSupported)\n{\n    configuration.QrCode.Enable.Set(false);\n}\n")),(0,r.kt)("p",null,"For the configuration to be actually applied, you must call the ScannerProperties' ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"configuration.Store(manager, true);\n")),(0,r.kt)("h2",{id:"how-can-i-retrieve-device-information"},"How can I retrieve device information?"),(0,r.kt)("p",null,"The Datalogic Android SDK provides many common operations done on an Android device to gather information."),(0,r.kt)("h3",{id:"info"},"Info"),(0,r.kt)("p",null,"The Datalogic Xamarin SDK provides advanced information about the device in the class ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Info_SYSTEM.htm"},"SYSTEM"),", which exposes Wi-Fi type, keyboard type and others as static members."),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Com.Datalogic.Device.Info.SYSTEM.SdkVersionInt;\n")),(0,r.kt)("h3",{id:"power"},"Power"),(0,r.kt)("p",null,"To get information about the battery, Xamarin broadcasts the ",(0,r.kt)("inlineCode",{parentName:"p"},"Intent")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.xamarin.com/api/field/Android.Content.Intent.ActionBatteryChanged/"},"ActionBatteryChanged"),", which can carry information in its extra properties. The intent is fired every time the status of the battery changes and once when you register a receiver, notice that this particular behavior happens because the battery intent is a STICKY one: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.xamarin.com/api/member/Android.Content.Context.SendStickyBroadcast/"},"SendStickyBroadcast"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Intent currentBatteryStatus = RegisterReceiver(null, new IntentFilter(\n    Android.Content.Intent.ActionBatteryChanged));\n")),(0,r.kt)("h3",{id:"location"},"Location"),(0,r.kt)("p",null,"The standard Android SDK doesn't allow turning on or off the Location providers (GPS, network, etc...), thus an application must ask to the user to manually do it. Datalogic SDK overcome this limit by providing the class ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Location_LocationManager.htm"},"LocationManager"),". Here's how to use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Com.Datalogic.Device.Location.LocationManager loc = null;\ntry\n{\n    loc = new Com.Datalogic.Device.Location.LocationManager();\n    loc.setLocationMode(enable ? LocationMode.SensorsAndNetwork : LocationMode.Off);\n}\ncatch (DeviceException e)\n{\n    Log.Error(this.LocalClassName, "Exception while switching location mode ", e);\n}\n')),(0,r.kt)("h3",{id:"nfc"},"NFC"),(0,r.kt)("p",null,"Standard Android SDK doesn't allow to turn on or off the NFC adapter, thus an application must ask to the user to manually do it. Datalogic SDK overcomes this limit by providing the class ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Nfc_NfcManager.htm"},"NfcManager"),"."),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"NfcManager nfc = new Com.Datalogic.Device.Nfc.NfcManager();\nnfc.EnableNfcAdapter(enable);\n")),(0,r.kt)("h3",{id:"notifications"},"Notifications"),(0,r.kt)("p",null,"Datalogic SDK allows to control LEDs on the device. However, not all LEDs on a device can be freely controlled by a user application; some are reserved to the system. The standard Android APIs for controlling the notification LED via the notifications system still works, though you are limited to 1 LED, while Datalogic devices may have more LEDs, and it is easier to control them using the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Notification_LedManager.htm"},"LedManager")," class than the standard API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"LedManager led = new LedManager();\nled.blinkLed(Led.LedGreenSpot, 1, 500, 500);\n")),(0,r.kt)("h3",{id:"touch"},"Touch"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Input_TouchManager.htm"},"TouchManager")," class can be used to lock the touchscreen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"TouchManager tm = new TouchManager();\ntm.lockInput(true);\nThread.sleep(2000);\ntm.lockInput(false);\n")),(0,r.kt)("h3",{id:"sleep-and-wakeup"},"Sleep and Wakeup"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_PowerManager.htm"},"PowerManager")," class allows one to configure screen timeout and wakeup sources for the device. ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_SuspendTimeout.htm"},"SuspendTimeout")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/M_Com_Datalogic_Device_Power_PowerManager_SetSuspendTimeout.htm"},"SetSuspendTimeout")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"PowerManager pm = new PowerManager();\n\npm.SetSuspendTimeout(SuspendTimeout.Minutes5, false); // battery\n\npm.SetSuspendTimeout(SuspendTimeout.Never, true); // ext power\n")),(0,r.kt)("p",null,"Please note that not all the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_WakeupSource.htm"},"WakeupSource")," values available in the SDK are supported by a device, thus it is better to check if they are supported before enabling/disabling them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"if (pm.isWakeupSupported(WakeupSource.TrigLeft) &&\n        !pm.isWakeupActive(WakeupSource.TrigLeft)) {\n    pm.activateWakeup(WakeupSource.TrigLeft);\n}\n")),(0,r.kt)("h3",{id:"reset"},"Reset"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_PowerManager.htm"},"PowerManager")," class allows you to perform several types of resets and reboots of the device."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://datalogic.github.io/xamarin-sdk-docs/html/P_Com_Datalogic_Device_BootType_EnterpriseReset.htm"},"EnterpriseReset"),' - clear device configuration and perform a "Enterprise" reset'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://datalogic.github.io/xamarin-sdk-docs/html/P_Com_Datalogic_Device_BootType_FactoryReset.htm"},"FactoryReset")," - clear device configuration and perform an out-of-the-box level factory reset.\nreset types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://datalogic.github.io/xamarin-sdk-docs/html/P_Com_Datalogic_Device_BootType_Reset.htm"},"Reset")," - perform a software reboot of the device.")),(0,r.kt)("h2",{id:"how-can-i-access-the-self-shopping-cradle"},"How can I access the self-shopping cradle?"),(0,r.kt)("h3",{id:"cradle-state"},"Cradle State"),(0,r.kt)("p",null,"Access details such as whether or not the device is in a cradle, the cradle's version, device insertion count, slot index, and whether or not fast charging is supported. These details are stored in the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_StateInfo.htm"},"StateInfo")," class."),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\n\nStateInfo state = new StateInfo();\nif (jtCradle.GetCradleState(state))\n  string insCount = "Insertion count: " + state.InsertionCount;\n')),(0,r.kt)("h3",{id:"cradle-leds"},"Cradle LEDs"),(0,r.kt)("p",null,"Change the state of the LEDs on the cradle by using the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_LedAction.htm"},"LedAction")," class."),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\njtCradle.ControlLed(LedAction.BlinkSlow);\n")),(0,r.kt)("h3",{id:"cradle-lock"},"Cradle Lock"),(0,r.kt)("p",null,"Change the state of the cradle lock using the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_LockAction.htm"},"LockAction")," class."),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\njtCradle.ControlLock(Action.UnlockWithLedOn);\n")),(0,r.kt)("h3",{id:"cradle-config-area"},"Cradle Config Area"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_ConfigArea.htm"},"ConfigArea")," class to access the current cradle slot's configuration area, consisting of an array of bytes. Also, an exposed method allows to get or set the fast charge value contained in one of the bytes of the configuration area."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\nConfigArea config = new ConfigArea();\nbyte[] configValues;\nif (jtCradle.ReadConfigArea(config))\n{\n  configValues = config.GetContent();\n}\n")),(0,r.kt)("h3",{id:"cradle-custom-area"},"Cradle Custom Area"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_CustomArea.htm"},"CustomArea")," class to access the custom data area of the cradle slot being occupied."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\nCustomArea custom = new CustomArea();\nbyte[] customValues;\nif (jtCradle.ReadCustomArea(custom, custom.Size))\n{\n  customValues = custom.GetContent();\n}\n")))}m.isMDXComponent=!0}}]);