import React from 'react';
import {Image, Text, View} from 'react-native';
import {mark} from '@/Assets/Images';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const MarkItem = ({children}) => (
  <View
    style={{
      flexDirection: 'row',
      marginVertical: 2,
    }}>
    <Image
      source={mark}
      style={{width: 15, height: 15, marginRight: 10}}
      alt="mark"
    />
    <Text
      fontWeight="nova_Regular"
      color="black"
      fontFamily="heading"
      fontSize={12}
      alignSelf="flex-start"
      style={{
        fontWeight: '400',
        fontFamily: FontFamily.regular,
        color: Colors.heading,
        width: FontSize.width * 0.8,
      }}>
      {children}
    </Text>
  </View>
);

export default MarkItem;
