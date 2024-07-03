import React from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker} from 'react-native-maps';
import {Modalize} from 'react-native-modalize';
import {Colors, FontSize, modalStyles} from '@/Theme/Variables';
import ModalOverlay from '@/Components/ModalOverlay';
import ServiceSelector from '@/Components/ServiceSelector';
import useLocation from './useLocation';
import styles from './styles';
import LocationModal from '@/Components/LocationModal';
import {backButton, marker, roundplus} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';
import MapBackButton from '@/Components/MapBackButton';

const Location = ({navigation}) => {
  const location = useLocation({navigation});
  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalOverlay
        onBack={navigation.goBack}
        style={[
          modalStyles.locationScreen,
          {
            height: '100%',
          },
        ]}>
        <MapView
          style={styles.mapStyle}
          ref={location.mapRef}
          initialRegion={location.initialRegion}
          onRegionChangeComplete={location.updateRegion}>
          <Marker
            coordinate={location.initialRegion}
            onDragEnd={location.onDragEnd}
            draggable>
            <View style={styles.markerBox}>
              <View
                style={[
                  styles.textView,
                  {
                    padding: location.message.length ? 5 : 0,
                    marginVertical: location.message.length ? 5 : 0,
                  },
                ]}>
                <Text style={styles.text}>{location.message}</Text>
              </View>
              <Image source={marker} style={styles.icon} />
            </View>
          </Marker>
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
          renderRow={({description, name}) => {
            // console.log('data', description);
            const isValid = description == location?.newLocation?.description;
            return (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {isValid && (
                  <Image
                    source={roundplus}
                    style={{
                      width: 15,
                      height: 15,
                      resizeMode: 'contain',
                      marginRight: 7.5,
                    }}
                  />
                )}
                <Text
                  style={{
                    color: isValid ? Colors.success : Colors.black,
                  }}>
                  {description || name}
                </Text>
              </View>
            );
          }}
          styles={{
            textInput: {
              color: Colors.black,
              fontSize: FontSize.medium - 2,
            },
            predefinedPlacesDescription: {
              color: location.newLocation ? Colors.success : Colors.black,
              marginLeft: 5,
            },
          }}
        />
        <View style={styles.locationBtnContainer}>
          <TouchableOpacity
            disabled={
              location.message == 'Sorry. We do not operate in this area.'
                ? true
                : false
            }
            onPress={location.onOpen}
            activeOpacity={0.7}
            style={styles.btn}>
            <Text style={styles.btnTitle}>Confirm Location</Text>
          </TouchableOpacity>
        </View>
        <Modalize modalHeight={300} ref={location.modalizeRef}>
          <ServiceSelector
            {...{...location, onConfirm: location.daynamicRoute}}
          />
        </Modalize>
        <Modalize
          modalStyle={{
            marginBottom: FontSize.height * 0.3,
            marginHorizontal: 50,
            borderRadius: 10,
          }}
          closeOnOverlayTap={false}
          withHandle={false}
          modalHeight={FontSize.height * 0.4}
          ref={location.locationModalRef}>
          <LocationModal onPress={location.enableLocation} />
        </Modalize>
      </ModalOverlay>
    </SafeAreaView>
  );
};
export default React.memo(Location);
