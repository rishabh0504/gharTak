#!/bin/bash

echo "Creating bundle ======="
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
echo "Bundle created ====="

echo "Creating APK ======"
cd android
gradlew assembleDebug

echo " APK Build successfull ======"