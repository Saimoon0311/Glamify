import React from 'react';
import {Text, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import * as images from '@/Assets/Images';
import {Touchable} from './Touchable';

const PlaceHolderCard = ({placeHolder, icon, onPress}) => {
  return (
    <DropShadow
      style={{
        shadowColor: Colors.heading,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <Touchable
        style={{
          width: FontSize.width / 2.4,
          height: 40,
          margin: 5,
          backgroundColor: Colors.white,
          borderRadius: 5,
          borderColor: Colors.border,
          padding: 10,
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        Opacity={0.6}
        onPress={onPress}>
        <Image
          source={images[icon]}
          style={{width: 14, height: 14, marginRight: 5}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: FontSize.small,
            fontWeight: '400',
            color: Colors.placeholder,
            fontFamily: FontFamily.regular,
          }}>
          {placeHolder}
        </Text>
      </Touchable>
    </DropShadow>
  );
};

export default PlaceHolderCard;
