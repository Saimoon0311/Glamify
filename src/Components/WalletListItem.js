import React from 'react';
import {View, Image, Text} from 'react-native';
import {FontFamily, FontSize} from '@/Theme/Variables';
import {logo_icon, right_arrow} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';

const WalletListItem = ({heading, desc}) => (
  <View
    style={{
      backgroundColor: '#FAF0E7',
      width: '100%',
      height: 70,
      marginTop: 20,
      borderRadius: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
    <Image
      source={logo_icon}
      style={{width: 36, height: 36}}
      resizeMode="contain"
      alt="logo-Icon"
    />
    <View style={{width: '70%'}}>
      <Text fontWeight={FontFamily.bold} fontSize={FontSize.medium}>
        {heading}
      </Text>
      <Text fontWeight={FontFamily.regular} fontSize={FontSize.small}>
        {desc}
      </Text>
    </View>
    <Touchable>
      <Image
        source={right_arrow}
        style={{width: 15, height: 15}}
        alt="Right-arrow"
        resizeMode="contain"
      />
    </Touchable>
  </View>
);

export default WalletListItem;
