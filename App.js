import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {verifyUser} from '@/Store/Actions/auth-action';
import {fcmService} from '@/Services/Notification';
import {screensEnabled, enableFreeze} from 'react-native-screens';
import Overlay from '@/Components/Overlay';
import Application from '@/Navigators/ApplicationStack';
import useReduxStore from '@/Hooks/useReduxStore';
/* It's a workaround for a bug in react-native-geolocation-service. */
navigator.geolocation = require('react-native-geolocation-service');

screensEnabled(true);
enableFreeze(true);

LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
  'Settings is not yet supported on Android',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

/**
 * It's a function that returns a component that renders the Application component and an Overlay
 * component if the loading state is true
 */
const App = () => {
  const {dispatch, getState} = useReduxStore();
  const {loading, isLogin} = getState('Auth');
  /* It's a hook that runs after the first render. */
  useEffect(() => {
    /* It's a function that registers the device to receive push notifications. */
    fcmService.register(onRegister, onOpenNotification);
    /* It's a function that verifies if the user is logged in. */
    dispatch(verifyUser());
    return () => {
      /* It's a function that unregisters the device from receiving push notifications. */
      fcmService.unRegister();
    };
  }, []);

  const onOpenNotification = notify => {
    console.log(notify);
  };

  const onRegister = fcmToken => console.log(fcmToken);

  return (
    <>
      <Application login={isLogin} />
      {loading && <Overlay />}
    </>
  );
};

export default React.memo(App);
