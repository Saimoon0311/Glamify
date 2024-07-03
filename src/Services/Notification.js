import messaging from '@react-native-firebase/messaging';
import {Alert, Platform} from 'react-native';
import {requestNotifications, openSettings} from 'react-native-permissions';
import notifee, {EventType} from '@notifee/react-native';

const onNotificationNotiFee = async data => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  notifee.displayNotification({
    ...data.notification,
    android: {
      channelId,
      ...data.notification.android,
      pressAction: {
        id: 'default',
      },
    },
  });
};

class FCMService {
  register = (onRegister, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNoitificationListeners(onRegister, onOpenNotification);
    console.log('FCMService register successfully');
  };

  checkPermission = async onRegister => {
    try {
      const authStatus = await messaging().hasPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      console.log(enabled, 'checkPermission');
      if (enabled) this.getToken(onRegister);
      else this.requestPermission(onRegister);
    } catch (error) {
      console.log(error);
    }
  };

  getToken = onRegister =>
    messaging()
      .getToken()
      .then(res => onRegister(res));

  requestPermission = async onRegister => {
    try {
      const {status, settings} = await requestNotifications([
        'alert',
        'sound',
        'badge',
      ]);
      if (status === 'granted') this.getToken(onRegister);
      else {
        Alert.alert(
          'Warning',
          `Push notifications have been ${status}. You will not receive any important notification unless enabled from settings. `,
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'Open Setting',
              onPress: () => {
                openSettings().catch(() =>
                  console.warn('cannot open settings'),
                );
              },
            },
          ],
        );
      }
    } catch (error) {
      console.log('Requested persmission rejected ', error);
    }
  };

  deletedToken = () => {
    messaging()
      .deleteToken()
      .catch(error => {
        console.log('Delected token error ', error);
      });
  };

  createNoitificationListeners = (onRegister, onOpenNotification) => {
    // Triggered  when a particular  notification  has been recevied in foreground
    this.notificationListener = messaging().onMessage(onNotificationNotiFee);

    // If your app is backgound, you can listen for when a
    //notification is clicked / tapped / opened as follows
    this.notificationOpenedListener = messaging().onNotificationOpenedApp(
      notification => {
        // console.log(notification);
        if (notification) onOpenNotification(notification);
        // this.removeDelieveredNotification(notification);
      },
    );

    // if your app is closed, you can check if  it was opened by notification
    // being  clicked / tapped / opened as follows
    messaging()
      .getInitialNotification()
      .then(notification => {
        if (notification) onOpenNotification(notification);
        // this.removeDelieveredNotification(notification);
      });

    // Triggered when have  new token
    this.onTokenRefreshListener = messaging().onTokenRefresh(onRegister);

    this.forgroundListner = notifee.onForegroundEvent(({type, detail}) => {
      if (EventType[type] == 'PRESS') onOpenNotification(detail.notification);
    });
    this.backgroundListner = notifee.onBackgroundEvent(
      async ({type, detail}) => {
        const {notification, pressAction} = detail;
        console.log(type, EventType.ACTION_PRESS, pressAction.id);
        if (
          type === EventType.ACTION_PRESS &&
          pressAction.id === 'mark-as-read'
        )
          onOpenNotification(notification);
        await notifee.cancelNotification(notification.id);
      },
    );
  };

  unRegister = () => {
    this.notificationListener();
    this.notificationOpenedListener();
    this.onTokenRefreshListener();
    this.forgroundListner();
    this.deletedToken();
    console.log('FCMService unRegister successfully');
  };
}

export const fcmService = new FCMService();
