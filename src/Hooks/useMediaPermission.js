import {Platform, Alert} from 'react-native';
import {
  request,
  checkMultiple,
  PERMISSIONS,
  check,
} from 'react-native-permissions';
const permission =
  Platform.OS == 'ios'
    ? PERMISSIONS.IOS.PHOTO_LIBRARY
    : PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION;

export const mediaPermission = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const hasPermission = await hasMediaPermission(permission);
      if (hasPermission == 'granted') resolve(true);
      else {
        const askPermission = await request(permission);
        console.log(askPermission);
        if (askPermission == 'granted') resolve(true);
        else {
          resolve(false);
          Alert.alert(
            `Please allow media for using Media status is ${askPermission}`,
          );
        }
      }
    } catch (error) {
      reject(false);
    }
  });
};

export const hasMediaPermission = () => check(permission);
