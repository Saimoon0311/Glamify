import {View, Text} from 'react-native';
import React from 'react';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import useReduxStore from '@/Hooks/useReduxStore';

const WalletHeader = () => {
  const {getState} = useReduxStore();
  const {walletAmount} = getState('Booking');
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <Text
        style={{
          fontSize: FontSize.small,
          fontWeight: '400',
          fontFamily: FontFamily.regular,
          color: Colors.heading,
        }}>
        Points Progress
      </Text>
      <Text
        style={{
          fontSize: FontSize.xLarge,
          fontWeight: '600',
          fontFamily: FontFamily.semiBold,
          color: Colors.heading,
        }}>
        {walletAmount}
      </Text>
      <Text
        style={{
          fontSize: FontSize.small,
          fontWeight: '400',
          fontFamily: FontFamily.regular,
          color: Colors.heading,
        }}>
        245 Points Expiring On 1 May 2022
      </Text>
    </View>
  );
};

export default WalletHeader;
