import {useEffect} from 'react';
import useReduxStore from '@/Hooks/useReduxStore';
import {getAllBooking} from '@/Store/Actions/booking-actions';

const useScheduled = ({navigation}) => {
  const {getState, dispatch} = useReduxStore();
  const {bookings} = getState('Booking');
  const onRefresh = () => dispatch(getAllBooking({status: 'accepted'}));
  const onSelect = params => navigation.navigate('Freelancer', params);
  const appointmentHandler = param =>
    navigation.navigate('PackageFetch', param);
  const cancelHandler = param => navigation.navigate('CancelBooking', param);
  const cancel = true;

  useEffect(() => {
    const event = navigation.addListener('focus', () => onRefresh());
    return event;
  }, [bookings]);

  return {
    bookings,
    cancel,
    appointmentHandler,
    cancelHandler,
    onRefresh,
    onSelect,
  };
};

export default useScheduled;
