import {useEffect, useState} from 'react';
import useFormHook from '@/Hooks/useForm';
import useReduxStore from '@/Hooks/useReduxStore';
import {hasMediaPermission, mediaPermission} from '@/Hooks/useMediaPermission';
import {updateProfile} from '@/Store/Actions/auth-action';
import Schemas from '@/Utils/Validation';
import * as ImagePicker from 'react-native-image-picker';

const UseProfiles = ({navigation}) => {
  const {getState, dispatch} = useReduxStore();
  const {user} = getState('Auth');
  // console.log('user', user);
  const {handleSubmit, errors, control} = useFormHook(Schemas.updateProfile);
  const [image, setImage] = useState('');
  const onSubmit = data => {
    dispatch(
      updateProfile({
        name: data?.name,
        phone: data?.phone,
        profile_photo: image || user?.profile_photo,
      }),
    );
    // console.log('Updated Data', data);
    // dispatch(updateProfile(data));
  };
  const profileHandler = () => navigation.goBack();

  const launchImageLibrarys = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(
      options,
      ({assets, didCancel, errorMessage, errorCode}) => {
        console.log('Response = ', {
          assets,
          didCancel,
          errorMessage,
          errorCode,
        });

        if (didCancel) console.log('User cancelled image picker');
        else if (errorMessage)
          console.log('ImagePicker errorMessage: ', errorMessage);
        else setImage(assets[0]);
      },
    );
  };

  useEffect(() => {
    hasMediaPermission().then(res => {
      if (res !== 'granted');
    });
  }, []);

  return {
    user,
    errors,
    control,
    image,
    launchImageLibrarys,
    handleSubmit,
    onSubmit,
    profileHandler,
  };
};

export default UseProfiles;
