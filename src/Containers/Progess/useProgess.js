import {useEffect} from 'react';
import useReduxStore from '@/Hooks/useReduxStore';
import {getAllAssignedBooking} from '@/Store/Actions/booking-actions';

const useProgess = ({navigation}) => {
  const {getState, dispatch} = useReduxStore();
  const {assignedBookings} = getState('Booking');
  const onRefresh = () => dispatch(getAllAssignedBooking());

  const appointmentHandler = param =>
    navigation.navigate('PackageFetch', param);
  const cancelHandler = param => navigation.navigate('CancelBooking', param);
  const books = true;
  const booked = true;
  const cancel = true;
  useEffect(() => {
    onRefresh();
  }, []);

  useEffect(() => {
    const event = navigation.addListener('focus', () =>
      dispatch(getAllAssignedBooking()),
    );
    return event;
  }, [assignedBookings]);

  return {
    assignedBookings,
    books,
    booked,
    cancel,
    appointmentHandler,
    cancelHandler,
    onRefresh,
  };
};

export default useProgess;
