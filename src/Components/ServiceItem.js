import React from 'react';
import {Text, View} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const ServiceItem = ({service, type, onPress}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
    }}>
    <Text
      style={{
        fontSize: FontSize.medium + 2,
        fontFamily: FontFamily.bold,
        fontWeight: '700',
        color: Colors.heading,
      }}>
      {service}
    </Text>
    <Text
      onPress={onPress}
      style={{
        fontSize: FontSize.small + 2,
        fontFamily: FontFamily.semiBold,
        fontWeight: '400',
        color: Colors.heading,
      }}>
      {type}
    </Text>
  </View>
);

export default ServiceItem;
