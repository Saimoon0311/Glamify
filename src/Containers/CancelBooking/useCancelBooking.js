import {useEffect, useState} from 'react';
import useReduxStore from '@/Hooks/useReduxStore';
import {
  bookingCancelRequest,
  getCancelReasons,
} from '@/Store/Actions/booking-actions';
import useFormHook from '@/Hooks/useForm';
import Schemas from '@/Utils/Validation';

const useCancelBooking = ({navigate, goBack, route}) => {
  const {getState, dispatch} = useReduxStore();
  const {cancelReasons, bookingCancelled} = getState('Booking');
  const {handleSubmit, errors, control} = useFormHook(Schemas.bookingCancel);
  const backHandler = () => goBack();
  const cancelData = route.params;
  const [checked, setChecked] = useState('');
  console.log('checked', checked);
  const radioData = [...cancelReasons, 'Other.'];

  const onSubmit = () => {
    dispatch(
      bookingCancelRequest({
        booking_id: cancelData?._id,
        reason: checked,
      }),
    );
  };
  // const onSubmit = data => {
  //   dispatch(
  //     bookingCancelRequest({
  //       booking_id: cancelData?._id,
  //       reason: checked != 'Other.' ? checked : data?.reason,
  //     }),
  //   );
  // };

  useEffect(() => {
    if (!cancelReasons.length) dispatch(getCancelReasons());
  }, []);

  useEffect(() => {
    if (bookingCancelled) backHandler();
  }, [bookingCancelled]);

  return {
    radioData,
    cancelReasons,
    checked,
    control,
    errors,
    setChecked,
    onSubmit,
  };
};

export default useCancelBooking;
