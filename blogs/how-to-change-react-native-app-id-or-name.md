---
title: "How to change React Native App ID or Name"
date: "Sun Nov 04 2018 02:00:00 GMT+0200 (Eastern European Standard Time)"
description: "Step-by-step guide to changing your React Native app's ID and name using react-native-ci-tools, with examples for both iOS and Android platforms."
---


This tutorial shows how to change React Native App ID or App Name.
## Why you would want to change App ID?
You can make your new app's id personal or when replacing a existing app with react native based version.
## Install the tool
```bash
npm i -g react-native-ci-tools
```

After trying many other tools this was the best. [Check out react-native-ci-tools](https://www.npmjs.com/package/react-native-ci-tools)
## iOS and Android
Navigate to the root of your project

```bash
react-native-ci-tools bundle "{Insert App ID}" "{Insert App Name}" -ia
```

Add `-a` for android

Add `-i` for iOS

Add `-ia` for both

