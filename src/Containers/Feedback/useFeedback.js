import {useEffect, useState} from 'react';
import Schemas from '@/Utils/Validation';
import useFormHook from '@/Hooks/useForm';
import useReduxStore from '@/Hooks/useReduxStore';
import {sendFeedback} from '@/Store/Actions/booking-actions';
import * as ImagePicker from 'react-native-image-picker';
import {hasMediaPermission} from '@/Hooks/useMediaPermission';

const useFeedback = ({navigation, route}) => {
  const {dispatch, getState} = useReduxStore();
  const {feedbackSent} = getState('Booking');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');
  const {errors, control, handleSubmit} = useFormHook(Schemas.sendFeedback);
  const backHandler = () => navigation.goBack();

  const data = route.params;

  // console.log('Feedback', data);

  console.log('image', image);

  const onSubmit = ({feedback}) => {
    var param = {};
    if (image != '') {
      param = {
        rating,
        feedback,
        booking_id: data?._id,
        feedback_image: image,
      };
    } else {
      param = {
        rating,
        feedback,
        booking_id: data?._id,
      };
    }
    dispatch(sendFeedback(param));
  };

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

  useEffect(() => {
    if (feedbackSent) backHandler();
  }, [feedbackSent]);

  return {
    rating,
    errors,
    control,
    onSubmit,
    setRating,
    backHandler,
    handleSubmit,
    launchImageLibrarys,
  };
};

export default useFeedback;
