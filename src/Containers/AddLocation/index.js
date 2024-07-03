import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker} from 'react-native-maps';
import {Colors, FontSize} from '@/Theme/Variables';
import useAddLocation from './useAddLocation';
import styles from './styles';
import {Modalize} from 'react-native-modalize';
import AddAddressDetails from '@/Components/AddAddressDetails/AddAddressDetails';
import MapBackButton from '@/Components/MapBackButton';

const AddLocation = ({navigation}) => {
  const location = useAddLocation({navigation});
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <MapView
          style={styles.mapStyle}
          ref={location.mapRef}
          initialRegion={location.initialRegion}
          onRegionChangeComplete={location.updateRegion}>
          <Marker
            coordinate={location.initialRegion}
            onDragEnd={location.onDragEnd}
            draggable
          />
        </MapView>
        <MapBackButton {...{navigation}} />
        <GooglePlacesAutocomplete
          placeholder="Search"
          textInputProps={{
            placeholderTextColor: Colors.black,
          }}
          onPress={location.onSearch}
          query={{
            key: 'AIzaSyDMVbjnRU98it-GVNhYN0-wFHKicRyu_VQ',
            language: 'en',
          }}
          predefinedPlaces={location.predefinedPlaces}
          currentLocation
          fetchDetails
          styles={styles.mapText}
        />
        <View style={styles.locationBtnContainer}>
          <TouchableOpacity
            onPress={location.onOpen}
            // onPress={location.addressRoute}
            activeOpacity={0.7}
            style={styles.btn}>
            <Text style={styles.btnTitle}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modalize
        modalStyle={{
          borderRadiusTopLeft: 10,
          borderRadiusTopRight: 10,
          width: '100%',
        }}
        modalHeight={FontSize.height * 0.9}
        ref={location.locationModalRef}>
        <AddAddressDetails
          {...{navigation, route: {params: location.initialRegion}}}
        />
      </Modalize>
    </SafeAreaView>
  );
};

export default React.memo(AddLocation);
