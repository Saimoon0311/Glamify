import React, {useEffect} from 'react';
import {View, Text, Image, BackHandler, Dimensions} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {Touchable} from './Touchable';
import {enable} from '@/Assets/Images';
const {height, width} = Dimensions.get('window');

const LocationModal = ({onPress}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: height * 0.4,
        backgroundColor: Colors.white,
        borderRadius: 10,
      }}>
      <Image
        source={enable}
        style={{
          height: width * 0.12,
          width: width * 0.12,
          resizeMode: 'contain',
          tintColor: Colors.pink,
        }}
      />
      <Text
        style={{
          color: Colors.heading,
          fontSize: FontSize.large - 6,
          fontFamily: FontFamily.bold,
        }}>
        Enable Your Location
      </Text>
      <Text
        style={{
          color: Colors.black,
          textAlign: 'center',
          fontSize: FontSize.medium - 2,
          fontWeight: '300',
          opacity: 0.5,
          fontFamily: FontFamily.regular,
          paddingHorizontal: 35,
        }}>
        Turn on your phone location to help our platform find your place for
        better results
      </Text>
      <Touchable
        onPress={onPress}
        style={{
          width: width * 0.3,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.heading,
        }}>
        <Text
          style={{
            color: Colors.white,
            fontSize: FontSize.medium,
            fontFamily: FontFamily.bold,
            fontWeight: '600',
          }}>
          Enable
        </Text>
      </Touchable>
    </View>
  );
};

export default LocationModal;
