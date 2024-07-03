import {useState, useRef, useEffect} from 'react';
import {openSettings} from 'react-native-permissions';
import {
  hasLocationPermission,
  locationPermission,
} from '@/Hooks/useLocationPermission';
import useReduxStore from '@/Hooks/useReduxStore';
import Geolocation from 'react-native-geolocation-service';
import {getLocationAvailability} from '@/Store/Actions/booking-actions';

const region = {
  latitude: -37.802834,
  longitude: 144.927478,
};

const useHome = ({navigation}) => {
  const {getState, dispatch} = useReduxStore();
  const {categories, assignedBookings} = getState('Booking');
  const [initialRegion, setInitialRegion] = useState(region);
  const [locationCheck, setLocationCheck] = useState(true);
  const locationModalRef = useRef(null);
  //   console.log('initialRegion', initialRegion);
  //   console.log('categories', categories);

  const enableLocation = () =>
    locationPermission()
      .then(res => {
        console.log(res, 'enablelocation');
        if (res) {
          getAvailableLocation();
          setLocationCheck(false);
        } else setLocationCheck(true);

        locationModalRef?.current?.close();
      })
      .catch(_ => {
        locationModalRef?.current?.close();
        setLocationCheck(true);
      });

  const updateRegion = position => {
    console.log('position');
    const {coords} = position;
    const {latitude, longitude} = coords;
    setInitialRegion({latitude, longitude});
    dispatch(
      getLocationAvailability({latitude: -37.802834, longitude: 144.927478}),
    );
  };

  const getAvailableLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('getAvailableLocation');
        updateRegion(position);
      },

      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const openLocationSetting = () =>
    openSettings().then(_ => console.log('Settings Open'));

  const onPressContainer = param =>
    navigation.navigate('ServiceContainer', param);

  console.log('locationCheck', locationCheck);

  useEffect(() => {
    hasLocationPermission().then(res => {
      console.log('res', res);
      if (res == 'granted') {
        setLocationCheck(false);
        getAvailableLocation();
      } else {
        setLocationCheck(true);
        locationModalRef?.current?.open();
      }
    });
  }, []);

  return {
    categories,
    assignedBookings,
    locationModalRef,
    locationCheck,
    enableLocation,
    onPressContainer,
    openLocationSetting,
  };
};

export default useHome;
