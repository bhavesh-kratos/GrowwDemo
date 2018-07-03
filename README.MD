This app is developed using react-native init and not using CRNA.

To run this app make sure you have react-native on your system. Then follow these steps in order:

1. run npm install or yarn install.
2. run react-native link
or  
npm install && react-native link

3. react-native run-android  or react-native run-ios

Please note that linking(step 2) is important as this project uses native-base library.


In this project I have used redux for app management, redux-saga middleware, reselect for memoized selector,
axios for making asynchronous api requests, redux-saga routines for creating action creators and native-base for Search bar's UI.