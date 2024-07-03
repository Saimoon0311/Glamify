import {useEffect} from 'react';
import useFormHook from '@/Hooks/useForm';
import useReduxStore from '@/Hooks/useReduxStore';
import {forgotUser} from '@/Store/Actions/auth-action';
import Schemas from '@/Utils/Validation';

const useForgot = ({replace}) => {
  const {handleSubmit, errors, control, getValues} = useFormHook(
    Schemas.forgot,
  );
  const {dispatch, getState} = useReduxStore();
  const {forgot} = getState('Auth');

  const onSubmit = data => dispatch(forgotUser(data));
  useEffect(() => {
    if (forgot) replace('Verification', getValues());
  }, [forgot]);

  return {handleSubmit, errors, control, onSubmit};
};

export default useForgot;
