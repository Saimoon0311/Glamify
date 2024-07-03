/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '@/Store/store';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
/* This is a function that is called when the app is in the background and a notification is received. */
messaging().setBackgroundMessageHandler(async remoteMessage =>
  console.log('Message handled in the background!', remoteMessage),
);

/**
 * The Glamifi function is a wrapper for the App component that provides the App component with the
 * store
 */
const Glamifi = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

/* Registering the app with the app registry. */
AppRegistry.registerComponent(appName, () => Glamifi);
