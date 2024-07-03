import {useEffect} from 'react';
import useFormHook from '@/Hooks/useForm';
import useReduxStore from '@/Hooks/useReduxStore';
import Schemas from '@/Utils/Validation';
import {addUserAddress} from '@/Store/Actions/booking-actions';

const UseAddAddressDetails = ({navigation, route}) => {
  const {dispatch, getState} = useReduxStore();
  const {addressAdded} = getState('Booking');
  const cardHandler = () => navigation.replace('Location');
  const {handleSubmit, errors, control} = useFormHook(Schemas.addLocation);
  const {latitude, longitude} = route.params;
  // console.log('route', latitude, longitude);

  const onSubmit = ({title, address, description}) => {
    dispatch(
      addUserAddress({
        title,
        address,
        lat: latitude.toString(),
        long: longitude.toString(),
        description,
      }),
    );
  };

  useEffect(() => {
    if (addressAdded) cardHandler();
  }, [addressAdded]);

  return {
    errors,
    control,
    handleSubmit,
    onSubmit,
  };
};
export default UseAddAddressDetails;
