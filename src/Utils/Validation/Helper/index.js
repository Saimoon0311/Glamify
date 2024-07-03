import React from 'react';
import {Image, Text, View} from 'react-native';
import * as images from '@/Assets/Images';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

export const getRouteIcon = ({route: {name}}) => ({
  tabBarIcon: _ => (
    <Image
      {...{
        source: images[name],
        resizeMode: 'contain',
        style: {width: 25, height: 25},
      }}
    />
  ),
  headerShown: false,
  tabBarStyle: {backgroundColor: Colors.pink, paddingVertical: 5},
  tabBarLabel: ({focused}) => (
    <>
      <Text
        style={{
          marginBottom: 8,
          fontWeight: '400',
          fontSize: FontSize.small - 2,
          fontFamily: FontFamily.regular,
          color: Colors.heading,
        }}>
        {name.replace('Stack', '')}
      </Text>
      {focused && (
        <View
          style={{
            backgroundColor: '#252122',
            height: 4,
            // marginBottom:5,
            width: 4,
            borderRadius: 2,
            position: 'absolute',
            bottom: 4,
          }}
        />
      )}
    </>
  ),
});

export const getCredentials = () => {
  if (__DEV__)
    return {
      baseURL: 'https://beauty-service.staginganideos.com/api',
    };
  else {
    console.log = () => {};
    return {
      baseURL: 'https://beauty-service.staginganideos.com/api',
    };
  }
};
