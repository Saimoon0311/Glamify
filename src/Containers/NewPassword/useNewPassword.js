import {useEffect} from 'react';
import useFormHook from '@/Hooks/useForm';
import useReduxStore from '@/Hooks/useReduxStore';
import Schemas from '@/Utils/Validation';
import {updatePassword} from '@/Store/Actions/auth-action';

const useNewPassword = ({replace, route}) => {
  const {handleSubmit, errors, control} = useFormHook(Schemas.newPassword);
  const {getState, dispatch} = useReduxStore();
  const {update, verifyToken: token} = getState('Auth');
  const onSubmit = ({confirm_password, password}) => {
    dispatch(
      updatePassword({
        token,
        password,
        ...route.params,
        password_confirmation: confirm_password,
      }),
    );
  };
  useEffect(() => {
    if (update) replace('Update');
  }, [update]);

  return {handleSubmit, errors, control, onSubmit};
};

export default useNewPassword;
