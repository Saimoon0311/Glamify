import {useState, useRef, useCallback} from 'react';

const region = {
  latitude: -37.802834,
  longitude: 144.927478,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const useAddLocation = ({navigation: {navigate}}) => {
  const [initialRegion, setInitialRegion] = useState(region);
  const mapRef = useRef(null);
  const locationModalRef = useRef(null);
  const onOpen = () => locationModalRef.current?.open();
  const onClose = () => locationModalRef.current?.close();

  const updateRegion = newRegion => setInitialRegion(newRegion);

  const onSearch = useCallback((data, {geometry} = {}) => {
    const {location} = geometry;
    const {lat: latitude, lng: longitude} = location;
    updateAnimateRegion({latitude, longitude});
  }, []);

  const onDragEnd = useCallback(({nativeEvent}) => {
    const {coordinate} = nativeEvent;
    const {latitude, longitude} = coordinate;
    updateAnimateRegion({latitude, longitude});
  }, []);

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

  const addressRoute = () => {
    navigate('AddAddressDetails', initialRegion);
  };

  return {
    mapRef,
    initialRegion,
    locationModalRef,
    onClose,
    onOpen,
    onDragEnd,
    onSearch,
    updateRegion,
    addressRoute,
  };
};

export default useAddLocation;
