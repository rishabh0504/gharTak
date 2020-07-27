React Native based android application.

set ANDROID_HOME=C:\Users\username\AppData\Local\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools


Update sdk.dir properties in local.properties which is value of ANDROID_HOME

npm install in orrt directory.



cd android 
gradlew.bat installDebug --info
react-native link react-native-material-kit


// To react-native update  :  https://github.com/facebook/react-native/blob/0.62-stable/template/android/app/build.gradle
