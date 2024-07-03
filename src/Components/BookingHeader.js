import {View, Text} from 'react-native';
import React from 'react';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const BookingHeader = () => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
    }}>
    <Text
      style={{
        fontSize: FontSize.regular - 2,
        color: Colors.heading,
        fontWeight: '600',
        fontFamily: FontFamily.semiBold,
      }}>
      Booking
    </Text>
  </View>
);

export default BookingHeader;
