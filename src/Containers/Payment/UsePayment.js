import {useEffect} from 'react';
import useReduxStore from '@/Hooks/useReduxStore';
import {getAvailableCard} from '@/Store/Actions/payment-action';

const UsePayment = ({navigation, params}) => {
  const cardRoute = () => {
    navigation.navigate('AddCard');
  };
  const {getState, dispatch} = useReduxStore();
  const {paymentCards} = getState('Payment');
  const cardHandler = () => navigation.goBack();
  const chooseCard = param => {
    // console.log('first', params);
    navigation.navigate('Summary', {...params, ...param.card});
  };
  useEffect(() => {
    const event = navigation.addListener('focus', () =>
      dispatch(getAvailableCard()),
    );
    return event;
  }, [paymentCards]);

  return {paymentCards, cardRoute, cardHandler, chooseCard};
};
export default UsePayment;
