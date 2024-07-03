import useFormHook from '@/Hooks/useForm';
import useReduxStore from '@/Hooks/useReduxStore';
import {loginUser} from '@/Store/Actions/auth-action';
import Schemas from '@/Utils/Validation';

const useLogin = ({navigate}) => {
  const {dispatch} = useReduxStore();
  const {handleSubmit, errors, control} = useFormHook(Schemas.logIn);
  const onSubmit = data => {
    console.log('submiting with ', data);
    dispatch(loginUser(data));
  };
  const signUpRoute = () => navigate('SignUp');
  const forgotRoute = () => navigate('Forgot');

  return {handleSubmit, errors, control, onSubmit, signUpRoute, forgotRoute};
};

export default useLogin;
