set ANDROID_HOME=C:\Users\risha\AppData\Local\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools


Update sdk.dir properties in local.properties which is value of ANDROID_HOME

npm install in orrt directory.



cd android 
gradlew.bat installDebug --info
react-native link react-native-material-kit

## Making local apk to deployable
Try below, it will generate an app-debug.apk on your root/android/app/build/outputs/apk/debug folder

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

then go to android folder and run

gradlew assembleDebug




