import {useEffect} from 'react';
import useReduxStore from '@/Hooks/useReduxStore';
import {
  getTransactionHistory,
  getWalletAmount,
} from '@/Store/Actions/booking-actions';

const useTransaction = ({navigation}) => {
  const {getState, dispatch} = useReduxStore();
  const {transactionHistory} = getState('Booking');
  const onRefresh = () => {
    dispatch(getWalletAmount());
    dispatch(getTransactionHistory());
  };
  useEffect(() => {
    onRefresh();
  }, []);

  useEffect(() => {
    const event = navigation.addListener('focus', () => {
      dispatch(getWalletAmount());
      dispatch(getTransactionHistory());
    });
    return event;
  }, [transactionHistory]);

  // useEffect(() => {
  //   dispatch(getWalletAmount());
  //   dispatch(getTransactionHistory());
  // }, []);

  return {transactionHistory, onRefresh};
};

export default useTransaction;
