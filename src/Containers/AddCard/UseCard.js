import {useEffect, useState} from 'react';
import useFormHook from '@/Hooks/useForm';
import useReduxStore from '@/Hooks/useReduxStore';
import Schemas from '@/Utils/Validation';
import {addCard} from '@/Store/Actions/payment-action';

const UseCard = ({navigation}) => {
  const {dispatch, getState} = useReduxStore();
  const {cardAdded} = getState('Payment');
  const cardHandler = () => navigation.goBack();
  const {handleSubmit, errors, control} = useFormHook(Schemas.addCard);
  const [card, setCard] = useState({});

  const [focus, setFocus] = useState(false);
  function onFocus() {
    setFocus(true);
  }
  function onBlur() {
    setFocus(false);
  }

  const AddCardData = () => dispatch(addCard(card));

  useEffect(() => {
    if (cardAdded) cardHandler();
  }, [cardAdded]);

  return {
    card,
    focus,
    errors,
    control,
    handleSubmit,
    setCard,
    onFocus,
    setFocus,
    onBlur,
    cardHandler,
    AddCardData,
  };
};
export default UseCard;
