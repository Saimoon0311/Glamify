import {useEffect} from 'react';
import useReduxStore from '@/Hooks/useReduxStore';
import {getBookingHistory} from '@/Store/Actions/booking-actions';

const useHistory = ({navigation}) => {
  const feedbackHandler = params => navigation.navigate('Feedback', params);
  const {getState, dispatch} = useReduxStore();
  const {bookingHistory} = getState('Booking');
  const onRefresh = () => dispatch(getBookingHistory());

  useEffect(() => {
    onRefresh();
  }, []);

  useEffect(() => {
    const event = navigation.addListener('focus', () =>
      dispatch(getBookingHistory()),
    );
    return event;
  }, [bookingHistory]);

  return {bookingHistory, onRefresh, feedbackHandler};
};

export default useHistory;
