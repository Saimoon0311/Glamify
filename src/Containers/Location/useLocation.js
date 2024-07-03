import {useState, useRef, useEffect, useCallback} from 'react';
import {
  hasLocationPermission,
  locationPermission,
} from '@/Hooks/useLocationPermission';
import useReduxStore from '@/Hooks/useReduxStore';
import {
  getLocationAvailability,
  getUserAddress,
} from '@/Store/Actions/booking-actions';

const region = {
  latitude: -37.802834,
  longitude: 144.927478,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const newLocation = {
  description: 'Add new location',
  geometry: {location: {lat: null, lng: null}},
};

const useLocation = ({navigation: {navigate, replace}}) => {
  const {getState, dispatch} = useReduxStore();
  const {message, categories, userAddress} = getState('Booking');
  const [initialRegion, setInitialRegion] = useState(region);
  const [value, setValue] = useState('');
  const modalizeRef = useRef(null);
  const locationModalRef = useRef(null);
  const mapRef = useRef(null);
  // console.log('userAddress', userAddress);
  const addLocation = () => replace('AddLocation');
  console.log('categories', categories);

  const predefinedPlaces = [...userAddress, newLocation];
  // const predefinedPlaces = [homePlace, workPlace, newLocation];

  const enableLocation = () =>
    locationPermission()
      .then(res => locationModalRef?.current?.close())
      .catch(_ => locationModalRef?.current?.close());

  const onOpen = () => modalizeRef.current?.open();
  const onClose = () => modalizeRef.current?.close();

  const onService = () =>
    setValue(value => (value == 'services' ? '' : 'services'));

  const onPackage = () =>
    setValue(value => (value == 'packages' ? '' : 'packages'));

  const daynamicRoute = () => {
    if (value)
      navigate(
        value.replace(value.charAt(), value.charAt().toLocaleUpperCase()),
        categories,
      );
  };

  const updateRegion = newRegion => {
    const {latitude, longitude} = newRegion;
    getAvailableLocation({latitude, longitude});
    setInitialRegion(newRegion);
  };

  const onSearch = useCallback((data, {geometry} = {}) => {
    if (data.description == newLocation.description) addLocation();
    else {
      const {location} = geometry;
      const {lat: latitude, lng: longitude} = location;
      getAvailableLocation({latitude, longitude});
      updateAnimateRegion({latitude, longitude});
    }
    // console.log('first', data, geometry);
  }, []);

  const onDragEnd = useCallback(({nativeEvent}) => {
    const {coordinate} = nativeEvent;
    const {latitude, longitude} = coordinate;
    getAvailableLocation({latitude, longitude});
    updateAnimateRegion({latitude, longitude});
  }, []);

  const getAvailableLocation = param =>
    dispatch(getLocationAvailability(param));

  const updateAnimateRegion = useCallback(({latitude, longitude}) => {
    setInitialRegion(prev => ({
      ...prev,
      latitude,
      longitude,
    }));
    mapRef.current.animateToRegion({
      ...initialRegion,
      latitude,
      longitude,
    });
  }, []);

  useEffect(() => {
    hasLocationPermission().then(res => {
      if (res !== 'granted') locationModalRef?.current?.open();
    });
    dispatch(getUserAddress());
  }, []);
  return {
    value,
    mapRef,
    modalizeRef,
    initialRegion,
    predefinedPlaces,
    locationModalRef,
    message,
    categories,
    newLocation,
    onOpen,
    onClose,
    onSearch,
    onDragEnd,
    onPackage,
    onService,
    daynamicRoute,
    enableLocation,
    updateRegion,
  };
};

export default useLocation;
