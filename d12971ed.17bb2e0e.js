(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{170:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),o=(t(0),t(199)),c={id:"overview",title:"React Native SDK",sidebar_label:"Overview"},i={unversionedId:"reactnative/overview",id:"reactnative/overview",isDocsHomePage:!1,title:"React Native SDK",description:"Library that exposes the Datalogic Android (Java + Kotlin) SDK as a React Native module. It lets you receive barcode data from the scanner, as well as configure various scanner and device settings. It is available as a npm package for easy consumption here: @datalogic/react-native-datalogic-module.",source:"@site/docs/reactnative/overview.md",slug:"/reactnative/overview",permalink:"/reactnative/overview",version:"current",sidebar_label:"Overview",sidebar:"ReactNativeSDK",next:{title:"React Native API",permalink:"/reactnative/api"}},l=[{value:"Installation",id:"installation",children:[]},{value:"How can I create a React Native app that uses the Datalogic module?",id:"how-can-i-create-a-react-native-app-that-uses-the-datalogic-module",children:[{value:"Create a directory for your app",id:"create-a-directory-for-your-app",children:[]},{value:"Prepare your development environment for React Native",id:"prepare-your-development-environment-for-react-native",children:[]},{value:"Add datalogic module",id:"add-datalogic-module",children:[]},{value:"Add barcode handling code",id:"add-barcode-handling-code",children:[]},{value:"Start app on device",id:"start-app-on-device",children:[]}]},{value:"How can I create an APK of my application?",id:"how-can-i-create-an-apk-of-my-application",children:[{value:"Create the AAB",id:"create-the-aab",children:[]},{value:"Create the APK",id:"create-the-apk",children:[]}]}],d={rightToc:l};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Library that exposes the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/datalogic/datalogic-android-sdk"}),"Datalogic Android (Java + Kotlin) SDK")," as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/native-modules-android"}),"React Native module"),". It lets you receive barcode data from the scanner, as well as configure various scanner and device settings. It is available as a npm package for easy consumption here: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@datalogic/react-native-datalogic-module"}),"@datalogic/react-native-datalogic-module"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"You can use the plugin with either ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(o.b)("inlineCode",{parentName:"p"},"npm"),", just make sure that the method is consistent across your project."),Object(o.b)("p",null,"You can install the plugin using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @datalogic/react-native-datalogic-module\n")),Object(o.b)("p",null,"You can install the plugin from the ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," registry as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i @datalogic/react-native-datalogic-module\n")),Object(o.b)("h2",{id:"how-can-i-create-a-react-native-app-that-uses-the-datalogic-module"},"How can I create a React Native app that uses the Datalogic module?"),Object(o.b)("p",null,"Here's directions to create an app using ",Object(o.b)("inlineCode",{parentName:"p"},"React Native")," that can receive barcode data, starting from scratch, without React Native already installed."),Object(o.b)("h3",{id:"create-a-directory-for-your-app"},"Create a directory for your app"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir DecodeListener\ncd DecodeListener\n")),Object(o.b)("h3",{id:"prepare-your-development-environment-for-react-native"},"Prepare your development environment for React Native"),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/environment-setup"}),"https://reactnative.dev/docs/environment-setup")," and set up your React Native environment."),Object(o.b)("p",null,"WARNING: If you plan on using Expo, take note that the managed workflow does NOT work with the React Native Datalogic module. Use either the 'React Native CLI Quickstart', or make sure you select the bare workflow option if using Expo."),Object(o.b)("h3",{id:"add-datalogic-module"},"Add datalogic module"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @datalogic/react-native-datalogic-module\n")),Object(o.b)("h3",{id:"add-barcode-handling-code"},"Add barcode handling code"),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"App.js"),". Add this line after your last ",Object(o.b)("inlineCode",{parentName:"p"},"import"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { BarcodeManager, addReadListener } from '@datalogic/react-native-datalogic-module';\nimport { NativeEventEmitter } from 'react-native';\n")),Object(o.b)("p",null,"Next, add this code to a ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillMount()")," method before your return:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const eventEmitter = new NativeEventEmitter(BarcodeManager);\neventEmitter.addListener('successCallback', (map) => {\n  Alert.alert('Barcode Result', map.barcodeData + '\\n' + map.barcodeType);\n});\nawait BarcodeManager.addReadListener();\n")),Object(o.b)("p",null,"That's it. Start customizing your app to your liking. \ud83c\udf89"),Object(o.b)("h3",{id:"start-app-on-device"},"Start app on device"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn react-native run-android\n")),Object(o.b)("h2",{id:"how-can-i-create-an-apk-of-my-application"},"How can I create an APK of my application?"),Object(o.b)("p",null,"When you've finished your app, heres how to create the AAB (Android App Bundle) and APK files."),Object(o.b)("h3",{id:"create-the-aab"},"Create the AAB"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd android\n./gradlew bundleRelease\n")),Object(o.b)("p",null,"This will create the app-release.aab file which is now ready to be uploaded to Google Play.\nIf you want to access the APK to use on other platforms, you will need to follow a few more steps to extract it from the AAB file."),Object(o.b)("h3",{id:"create-the-apk"},"Create the APK"),Object(o.b)("p",null,"Download ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/google/bundletool"}),"Google bundletool")," and run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"java -jar bundletool.jar build-apks --bundle=/MyApp/my_app.aab --output=/MyApp/my_app.apks --mode=universal\n")),Object(o.b)("p",null,"Change the file name from ",Object(o.b)("inlineCode",{parentName:"p"},".apks")," to ",Object(o.b)("inlineCode",{parentName:"p"},".zip"),". Inside, the ",Object(o.b)("inlineCode",{parentName:"p"},"universal.apk")," file is your app."))}p.isMDXComponent=!0},199:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),p=function(e){var a=r.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(t),s=n,m=b["".concat(c,".").concat(s)]||b[s]||u[s]||o;return t?r.a.createElement(m,i(i({ref:a},d),{},{components:t})):r.a.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=t[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);