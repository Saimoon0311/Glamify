import {useEffect} from 'react';
import useFormHook from '@/Hooks/useForm';
import useReduxStore from '@/Hooks/useReduxStore';
import {signUpUser} from '@/Store/Actions/auth-action';
import Schemas from '@/Utils/Validation';

const useSignUp = ({navigate}) => {
  const {getState, dispatch} = useReduxStore();
  const {isRegister} = getState('Auth');
  const {handleSubmit, errors, control} = useFormHook(Schemas.signUp);
  const onSubmit = data => {
    console.log('submiting with ', data);
    dispatch(signUpUser(data));
  };
  const logInRoute = () => navigate('Login');

  useEffect(() => {
    if (isRegister) logInRoute();
  }, [isRegister]);

  return {handleSubmit, errors, control, onSubmit, logInRoute};
};

export default useSignUp;
