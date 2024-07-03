import {useEffect, useRef, useState} from 'react';
import useReduxStore from '@/Hooks/useReduxStore';
import {getAllSlots} from '@/Store/Actions/booking-actions';

const UseAvailability = ({navigation, params}) => {
  const [time, setTime] = useState(false);
  const yourDate = new Date();
  const minDate = yourDate.toISOString().split('T')[0];
  const currentDate = yourDate.toISOString().split('T')[0];
  const [date, setDate] = useState(currentDate);
  const [selectTime, setSelectTime] = useState({});

  const availabilityHandler = () => navigation.goBack();
  const {getState, dispatch} = useReduxStore();
  const {allSlots, zip} = getState('Booking');
  const {loading} = getState('Auth');
  const onRefresh = () => dispatch(getAllSlots());

  const locationRoute = () => navigation.navigate('Location');
  const summaryRoute = () => navigation.navigate('Summary', params);

  const locationModalRef = useRef(null);

  const onOpen = () => locationModalRef.current?.open();
  const onClose = () => locationModalRef.current?.close();

  const getSlots = () => {
    onClose();
    navigation.navigate('AvailableSlots', {
      ...params,
      service_id: params?.service_id,
      clients: params?.clients,
      timeslot: selectTime?._id,
      start: selectTime?.start,
      totalPrice: params?.totalPrice,
      date: date,
      addsOnID: params?.addsOnID,
      zip,
    });
  };

  useEffect(() => {
    onRefresh();
  }, []);

  return {
    date,
    minDate,
    time,
    loading,
    selectTime,
    allSlots,
    locationModalRef,
    onRefresh,
    setDate,
    onOpen,
    onClose,
    getSlots,
    setSelectTime,
    availabilityHandler,
    locationRoute,
    summaryRoute,
  };
};

export default UseAvailability;
