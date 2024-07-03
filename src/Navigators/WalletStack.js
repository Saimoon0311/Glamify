import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '@/Containers/Screens';

const WalletStack = createStackNavigator();

const WalletStackScreen = () => (
  <WalletStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
    <WalletStack.Screen
      options={{headerShown: false}}
      name="Wallet"
      component={Screens.Wallet}
    />
  </WalletStack.Navigator>
);

export default WalletStackScreen;
