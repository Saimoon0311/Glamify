import {useCallback} from 'react';
import {Alert, Platform} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  check,
  RESULTS,
  request,
  PERMISSIONS,
  openSettings,
} from 'react-native-permissions';
const camera = mediaType =>
  launchCamera({mediaType, quality: 0.5, maxHeight: 300, maxWidth: 300});
const openPicker = mediaType =>
  launchImageLibrary({mediaType, maxHeight: 300, maxWidth: 300, quality: 0.5});

const createWarninggAlert = ({label, message}) =>
  Alert.alert(label, message, [
    {
      text: 'Open setting',
      onPress: () => openSettings().then(res => console.log(res)),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
  ]);

const usePicker = mediaHandler => {
  const openCamera = useCallback(async mediaType => {
    try {
      const permission =
        Platform.OS == 'android'
          ? PERMISSIONS.ANDROID.CAMERA
          : PERMISSIONS.IOS.CAMERA;

      const response = await check(permission);
      if (response == RESULTS.GRANTED || response == RESULTS.LIMITED) {
        const {didCancel, assets} = await camera(mediaType);
        if (!didCancel) mediaHandler(assets[0]);
      } else {
        const requested = await request(permission);
        if (requested == RESULTS.GRANTED || requested == RESULTS.LIMITED) {
          const {didCancel, assets} = await camera(mediaType);
          if (!didCancel) mediaHandler(assets[0]);
        } else {
          createWarninggAlert({
            label: 'Camera Picker',
            message: `Please allow to access for camera your current permission is ${requested}`,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const launchLibrary = useCallback(async mediaType => {
    try {
      const permission =
        Platform.OS == 'android'
          ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
          : PERMISSIONS.IOS.PHOTO_LIBRARY;

      const response = await check(permission);
      if (response == RESULTS.GRANTED || response == RESULTS.LIMITED) {
        const {didCancel, assets} = await openPicker(mediaType);
        if (!didCancel) mediaHandler(assets[0]);
      } else {
        const requested = await request(permission);
        if (requested == RESULTS.GRANTED || requested == RESULTS.LIMITED) {
          const {didCancel, assets} = await openPicker(mediaType);
          if (!didCancel) mediaHandler(assets[0]);
        } else {
          createWarninggAlert({
            label: 'Media Picker',
            message: `Please allow to access media your current permission is ${requested}`,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return {
    openCamera,
    launchLibrary,
  };
};

export default usePicker;
