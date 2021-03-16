(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{171:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return d}));var n=t(3),r=t(7),o=(t(0),t(201)),c={id:"faq",title:"Frequently Asked Questions"},i={unversionedId:"xamarin/faq",id:"xamarin/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"How can I receive barcode data in my app?",source:"@site/docs/xamarin/faq.md",slug:"/xamarin/faq",permalink:"/xamarin/faq",version:"current",sidebar:"XamarinSDK",previous:{title:"Xamarin SDK",permalink:"/xamarin/overview"},next:{title:"Sample Apps",permalink:"/xamarin/samples"}},l=[{value:"How can I receive barcode data in my app?",id:"how-can-i-receive-barcode-data-in-my-app",children:[]},{value:"How can I configure Decoder properties?",id:"how-can-i-configure-decoder-properties",children:[]},{value:"How can I retrieve device information?",id:"how-can-i-retrieve-device-information",children:[{value:"Info",id:"info",children:[]},{value:"Power",id:"power",children:[]},{value:"Location",id:"location",children:[]},{value:"NFC",id:"nfc",children:[]},{value:"Notifications",id:"notifications",children:[]},{value:"Touch",id:"touch",children:[]},{value:"Sleep and Wakeup",id:"sleep-and-wakeup",children:[]},{value:"Reset",id:"reset",children:[]}]},{value:"How can I access the self-shopping cradle?",id:"how-can-i-access-the-self-shopping-cradle",children:[{value:"Cradle State",id:"cradle-state",children:[]},{value:"Cradle LEDs",id:"cradle-leds",children:[]},{value:"Cradle Lock",id:"cradle-lock",children:[]},{value:"Cradle Config Area",id:"cradle-config-area",children:[]},{value:"Cradle Custom Area",id:"cradle-custom-area",children:[]}]}],s={rightToc:l};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-can-i-receive-barcode-data-in-my-app"},"How can I receive barcode data in my app?"),Object(o.b)("p",null,"Register an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_IReadListener.htm"}),"IReadListener")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"Activity.OnResume()")," to receive read events on successful barcode reads:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'protected override void OnResume()\n{\n    base.OnResume();\n\n    if (decoder == null)\n    {\n        decoder = new BarcodeManager();\n    }\n\n    try\n    {\n    decoder.AddReadListener(this);\n    }\n    catch (DecodeException e)\n    {\n        Log.Error(LOGTAG, "Error while trying to bind a listener to BarcodeManager", e);\n    }\n}\n')),Object(o.b)("p",null,"Unregister the IReadListener in your ",Object(o.b)("inlineCode",{parentName:"p"},"Activity.onPause()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'protected override void OnPause()\n{\n    base.OnPause();\n\n    if (decoder != null)\n    {\n        try\n        {\n            decoder.RemoveReadListener(this);\n    }\n    catch (Exception e)\n    {\n            Log.Error(LOGTAG, "Error while trying to remove a listener from BarcodeManager", e);\n    }\n    }\n}\n')),Object(o.b)("p",null,"The actual barcode scanning is started via any physical scan trigger on the device. Though to start scanning when a button on the application is pressed, you need to call ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_BarcodeManager.htm"}),"BarcodeManager.StartDecode()"),"."),Object(o.b)("h2",{id:"how-can-i-configure-decoder-properties"},"How can I configure Decoder properties?"),Object(o.b)("p",null,"To configure the decoder properties, you need to instantiate ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_BarcodeManager.htm"}),"BarcodeManager")," and get a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Decode_Configuration_ScannerProperties.htm"}),"ScannerProperties")," instance."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"BarcodeManager manager = null;\nScannerProperties configuration = null;\n...\nmanager = new BarcodeManager();\n...\nconfiguration = ScannerProperties.Edit(manager);\n")),Object(o.b)("p",null,"Properties are organized hierarchically. Each property has the method ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," that requires a different argument depending on the property type (i.e.: int, boolean, String, etc...):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"configuration.Code39.EnableChecksum.Set(true);\nconfiguration.Code39.FullAscii.Set(true);\nconfiguration.Code39.Length1.Set(20);\n...\nconfiguration.code39.userID.set('x');\n...\n if (configuration.QrCode.IsSupported)\n{\n    configuration.QrCode.Enable.Set(false);\n}\n")),Object(o.b)("p",null,"For the configuration to be actually applied, you must call the ScannerProperties' ",Object(o.b)("inlineCode",{parentName:"p"},"Store")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"configuration.Store(manager, true);\n")),Object(o.b)("h2",{id:"how-can-i-retrieve-device-information"},"How can I retrieve device information?"),Object(o.b)("p",null,"The Datalogic Android SDK provides many common operations done on an Android device to gather information."),Object(o.b)("h3",{id:"info"},"Info"),Object(o.b)("p",null,"The Datalogic Xamarin SDK provides advanced information about the device in the class ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Info_SYSTEM.htm"}),"SYSTEM"),", which exposes Wi-Fi type, keyboard type and others as static members."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"Com.Datalogic.Device.Info.SYSTEM.SdkVersionInt;\n")),Object(o.b)("h3",{id:"power"},"Power"),Object(o.b)("p",null,"To get information about the battery, Xamarin broadcasts the ",Object(o.b)("inlineCode",{parentName:"p"},"Intent")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.xamarin.com/api/field/Android.Content.Intent.ActionBatteryChanged/"}),"ActionBatteryChanged"),", which can carry information in its extra properties. The intent is fired every time the status of the battery changes and once when you register a receiver, notice that this particular behavior happens because the battery intent is a STICKY one: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.xamarin.com/api/member/Android.Content.Context.SendStickyBroadcast/"}),"SendStickyBroadcast"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"Intent currentBatteryStatus = RegisterReceiver(null, new IntentFilter(\n    Android.Content.Intent.ActionBatteryChanged));\n")),Object(o.b)("h3",{id:"location"},"Location"),Object(o.b)("p",null,"The standard Android SDK doesn't allow turning on or off the Location providers (GPS, network, etc...), thus an application must ask to the user to manually do it. Datalogic SDK overcome this limit by providing the class ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Location_LocationManager.htm"}),"LocationManager"),". Here's how to use it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'Com.Datalogic.Device.Location.LocationManager loc = null;\ntry\n{\n    loc = new Com.Datalogic.Device.Location.LocationManager();\n    loc.setLocationMode(enable ? LocationMode.SensorsAndNetwork : LocationMode.Off);\n}\ncatch (DeviceException e)\n{\n    Log.Error(this.LocalClassName, "Exception while switching location mode ", e);\n}\n')),Object(o.b)("h3",{id:"nfc"},"NFC"),Object(o.b)("p",null,"Standard Android SDK doesn't allow to turn on or off the NFC adapter, thus an application must ask to the user to manually do it. Datalogic SDK overcomes this limit by providing the class ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Nfc_NfcManager.htm"}),"NfcManager"),"."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"NfcManager nfc = new Com.Datalogic.Device.Nfc.NfcManager();\nnfc.EnableNfcAdapter(enable);\n")),Object(o.b)("h3",{id:"notifications"},"Notifications"),Object(o.b)("p",null,"Datalogic SDK allows to control LEDs on the device. However, not all LEDs on a device can be freely controlled by a user application; some are reserved to the system. The standard Android APIs for controlling the notification LED via the notifications system still works, though you are limited to 1 LED, while Datalogic devices may have more LEDs, and it is easier to control them using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Notification_LedManager.htm"}),"LedManager")," class than the standard API."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"LedManager led = new LedManager();\nled.blinkLed(Led.LedGreenSpot, 1, 500, 500);\n")),Object(o.b)("h3",{id:"touch"},"Touch"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Input_TouchManager.htm"}),"TouchManager")," class can be used to lock the touchscreen."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"TouchManager tm = new TouchManager();\ntm.lockInput(true);\nThread.sleep(2000);\ntm.lockInput(false);\n")),Object(o.b)("h3",{id:"sleep-and-wakeup"},"Sleep and Wakeup"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_PowerManager.htm"}),"PowerManager")," class allows one to configure screen timeout and wakeup sources for the device. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_SuspendTimeout.htm"}),"SuspendTimeout")," using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/M_Com_Datalogic_Device_Power_PowerManager_SetSuspendTimeout.htm"}),"SetSuspendTimeout")," method."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"PowerManager pm = new PowerManager();\n\npm.SetSuspendTimeout(SuspendTimeout.Minutes5, false); // battery\n\npm.SetSuspendTimeout(SuspendTimeout.Never, true); // ext power\n")),Object(o.b)("p",null,"Please note that not all the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_WakeupSource.htm"}),"WakeupSource")," values available in the SDK are supported by a device, thus it is better to check if they are supported before enabling/disabling them."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"if (pm.isWakeupSupported(WakeupSource.TrigLeft) &&\n        !pm.isWakeupActive(WakeupSource.TrigLeft)) {\n    pm.activateWakeup(WakeupSource.TrigLeft);\n}\n")),Object(o.b)("h3",{id:"reset"},"Reset"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/T_Com_Datalogic_Device_Power_PowerManager.htm"}),"PowerManager")," class allows you to perform several types of resets and reboots of the device."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/P_Com_Datalogic_Device_BootType_EnterpriseReset.htm"}),"EnterpriseReset"),' - clear device configuration and perform a "Enterprise" reset'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/P_Com_Datalogic_Device_BootType_FactoryReset.htm"}),"FactoryReset")," - clear device configuration and perform an out-of-the-box level factory reset.\nreset types"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://datalogic.github.io/xamarin-sdk-docs/html/P_Com_Datalogic_Device_BootType_Reset.htm"}),"Reset")," - perform a software reboot of the device.")),Object(o.b)("h2",{id:"how-can-i-access-the-self-shopping-cradle"},"How can I access the self-shopping cradle?"),Object(o.b)("h3",{id:"cradle-state"},"Cradle State"),Object(o.b)("p",null,"Access details such as whether or not the device is in a cradle, the cradle's version, device insertion count, slot index, and whether or not fast charging is supported. These details are stored in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_StateInfo.htm"}),"StateInfo")," class."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\n\nStateInfo state = new StateInfo();\nif (jtCradle.GetCradleState(state))\n  string insCount = "Insertion count: " + state.InsertionCount;\n')),Object(o.b)("h3",{id:"cradle-leds"},"Cradle LEDs"),Object(o.b)("p",null,"Change the state of the LEDs on the cradle by using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_LedAction.htm"}),"LedAction")," class."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\njtCradle.ControlLed(LedAction.BlinkSlow);\n")),Object(o.b)("h3",{id:"cradle-lock"},"Cradle Lock"),Object(o.b)("p",null,"Change the state of the cradle lock using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_LockAction.htm"}),"LockAction")," class."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\njtCradle.ControlLock(Action.UnlockWithLedOn);\n")),Object(o.b)("h3",{id:"cradle-config-area"},"Cradle Config Area"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_ConfigArea.htm"}),"ConfigArea")," class to access the current cradle slot's configuration area, consisting of an array of bytes. Also, an exposed method allows to get or set the fast charge value contained in one of the bytes of the configuration area."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\nConfigArea config = new ConfigArea();\nbyte[] configValues;\nif (jtCradle.ReadConfigArea(config))\n{\n  configValues = config.GetContent();\n}\n")),Object(o.b)("h3",{id:"cradle-custom-area"},"Cradle Custom Area"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datalogic.github.io/xamarin-sdk-selfshopping/html/T_Com_Datalogic_Extension_Selfshopping_Cradle_Joyatouch_CustomArea.htm"}),"CustomArea")," class to access the custom data area of the cradle slot being occupied."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"ICradleJoyaTouch jtCradle  = (ICradleJoyaTouch) CradleManager.Cradle;\nCustomArea custom = new CustomArea();\nbyte[] customValues;\nif (jtCradle.ReadCustomArea(custom, custom.Size))\n{\n  customValues = custom.GetContent();\n}\n")))}d.isMDXComponent=!0},201:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return h}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),d=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,h=p["".concat(c,".").concat(u)]||p[u]||b[u]||o;return t?r.a.createElement(h,i(i({ref:a},s),{},{components:t})):r.a.createElement(h,i({ref:a},s))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);