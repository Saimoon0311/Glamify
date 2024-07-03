import {useState, useCallback, useEffect} from 'react';
import useReduxStore from '@/Hooks/useReduxStore';
import {getAddsOn} from '@/Store/Actions/booking-actions';

const useService = ({navigation, params}) => {
  const [count, setCount] = useState(1);
  const [checkCount, setCheckCount] = useState(1);
  const [addsOnData, setAddsOnData] = useState([]);
  const [checkData, setCheckData] = useState([]);
  console.log('addsOnData', addsOnData);
  const [total, setTotal] = useState(0);
  const incrementCount = useCallback(() => setCount(prev => prev + 1), [count]);
  const decrementCount = useCallback(() => setCount(prev => prev - 1), [count]);
  const incrementCheckCount = useCallback(
    () => setCheckCount(prev => prev + 1),
    [checkCount],
  );
  const decrementCheckCount = useCallback(
    () => setCheckCount(prev => prev - 1),
    [checkCount],
  );
  const {getState, dispatch} = useReduxStore();
  const {addsOn} = getState('Booking');
  // console.log(params);

  const updateAddsOn = useCallback(
    addOn => {
      const found = addsOnData.filter(val => val._id == addOn._id);
      if (found.length) {
        setAddsOnData(prev => {
          const addsOnRemoved = prev.filter(val => val._id !== addOn._id);
          const totalValue = addsOnRemoved.reduce(
            (previousValue, currentValue) =>
              previousValue + Number(currentValue.price),
            0,
          );
          setTotal(totalValue);
          return addsOnRemoved;
        });
      } else {
        setAddsOnData(prev => {
          const newAddsOnAdded = [...prev, addOn];
          const totalValue = newAddsOnAdded.reduce(
            (previousValue, currentValue) =>
              previousValue + Number(currentValue.price),
            0,
          );
          setTotal(totalValue);
          return newAddsOnAdded;
        });
      }
    },
    [addsOnData],
  );

  const updateCheckOn = useCallback(
    addOn => {
      const found = checkData.filter(val => val._id == addOn._id);
      if (found.length) {
        setCheckData(prev => {
          const addsOnChecked = prev.filter(val => val._id !== addOn._id);
          const totalValue = addsOnChecked.reduce(
            (previousValue, currentValue) =>
              previousValue + Number(currentValue.price),
            0,
          );
          setTotal(totalValue);
          return addsOnChecked;
        });
      } else {
        setCheckData(prev => {
          const newAddsOnChecked = [...prev, addOn];
          const totalValue = newAddsOnChecked.reduce(
            (previousValue, currentValue) =>
              previousValue + Number(currentValue.price),
            0,
          );
          setTotal(totalValue);
          return newAddsOnChecked;
        });
      }
    },
    [checkData],
  );

  const totalPrice = Number(Number(params?.price) * count + total);

  const onSubmit = () =>
    navigation.navigate('Availability', {
      totalPrice: parseFloat(totalPrice),
      // params,
      time: params?.time,
      title: params?.title,
      service_id: params?._id,
      clients: count,
      addsOnID: addsOn.map(({_id}) => _id),
    });

  useEffect(() => {
    dispatch(getAddsOn({_id: params?._id}));
  }, []);

  return {
    // data,
    addsOn,
    totalPrice,
    count,
    addsOnData,
    checkCount,
    incrementCheckCount,
    decrementCheckCount,
    onSubmit,
    updateAddsOn,
    incrementCount,
    decrementCount,
  };
};

export default useService;
