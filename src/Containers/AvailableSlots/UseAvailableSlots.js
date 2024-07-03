import {useEffect} from 'react';
import useReduxStore from '@/Hooks/useReduxStore';
import {getAvailableSlots} from '@/Store/Actions/booking-actions';

const UseAvailableSlots = ({navigation, params}) => {
  const {getState, dispatch} = useReduxStore();
  const {available} = getState('Booking');
  const {loading} = getState('Auth');
  // console.log('AvailableSlots', params);
  const availabilitySlotsHandler = () => navigation.goBack();
  const locationRoute = () => navigation.navigate('Location');
  const summaryRoute = () => {
    navigation.pop();
    navigation.navigate('Summary', params);
  };

  useEffect(() => {
    const {service_id, date, timeslot, clients, zip} = params;
    dispatch(getAvailableSlots({service_id, date, timeslot, clients, zip}));
  }, []);

  useEffect(() => {
    if (available) summaryRoute();
  }, [available]);

  return {
    loading,
    available,
    locationRoute,
    summaryRoute,
    availabilitySlotsHandler,
  };
};

export default UseAvailableSlots;
