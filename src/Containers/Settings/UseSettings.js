import useReduxStore from '@/Hooks/useReduxStore';
import {deleteAccount, logOutUser} from '@/Store/Actions/auth-action';

const UseSettings = ({navigation}) => {
  const {dispatch} = useReduxStore();
  const logOutHandler = () => dispatch(logOutUser());
  const deleteAccountHandler = _ => dispatch(deleteAccount());
  const profileHandler = () => navigation.navigate('Profile');
  const bookingHandler = () => navigation.navigate('BookingStack');
  const walletHandler = () => navigation.navigate('WalletStack');
  return {
    logOutHandler,
    deleteAccountHandler,
    profileHandler,
    bookingHandler,
    walletHandler,
  };
};

export default UseSettings;
