import {useEffect, useState} from 'react';
import useFormHook from '@/Hooks/useForm';
import useReduxStore from '@/Hooks/useReduxStore';
import {forgotUser, verifyCode} from '@/Store/Actions/auth-action';
import Schemas from '@/Utils/Validation';

const useVerification = ({replace, route}) => {
  const [timer, setTimer] = useState(60);

  const getTime = t => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    return min + ':' + sec;
  };

  const {dispatch, getState} = useReduxStore();
  const {verification} = getState('Auth');
  const {handleSubmit, errors, control} = useFormHook(Schemas.verification);

  const onSubmit = data => dispatch(verifyCode({...data, ...route.params}));

  const resendCode = () => {
    setTimer(120);
    dispatch(forgotUser(route.params));
  };

  const userMail = route.params.email;

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (verification) replace('NewPassword', route.params);
  }, []);

  return {
    errors,
    control,
    userMail,
    timer,
    onSubmit,
    handleSubmit,
    getTime,
    resendCode,
  };
};

export default useVerification;
