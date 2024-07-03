import React from 'react';
import {Text} from 'react-native';
import {Touchable} from './Touchable';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {useNavigation} from '@react-navigation/core';

const AppointmentButton = ({title}) => {
  const {navigate} = useNavigation();
  const locationRoute = () => {
    navigate('HomeStack');
    navigate('Location');
  };
  return (
    <Touchable
      onPress={locationRoute}
      style={{
        position: 'absolute',
        bottom: 5,
        right: '5%',
        left: '5%',
        width: '90%',
        height: 50,
        borderColor: Colors.heading,
        borderWidth: 1,
        backgroundColor: Colors.heading,
        shadowColor: Colors.heading,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...{Opacity: 0.8, onPress: locationRoute}}>
      <Text
        style={{
          color: Colors.white,
          fontSize: FontSize.medium,
          fontFamily: FontFamily.semiBold,
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </Touchable>
  );
};

export default AppointmentButton;
