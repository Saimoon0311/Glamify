import {Platform, Alert} from 'react-native';
import {request, PERMISSIONS, check} from 'react-native-permissions';
const permission =
  Platform.OS == 'ios'
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export const locationPermission = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const hasPermission = await hasLocationPermission(permission);
      if (hasPermission == 'granted') resolve(true);
      else {
        const askPermission = await request(permission);
        console.log(askPermission);
        if (askPermission == 'granted') resolve(true);
        else {
          resolve(false);
          Alert.alert(
            `Please allow location for location base services your current status is ${askPermission}`,
          );
        }
      }
    } catch (error) {
      reject(false);
    }
  });
};

export const hasLocationPermission = () => check(permission);
