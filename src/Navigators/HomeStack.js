import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '@/Containers/Screens';
import {screenOptions} from '@/Theme/Variables';

const HomeStack = createStackNavigator();
const option = {headerShown: false};
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={screenOptions}>
    <HomeStack.Screen options={option} name="Home" component={Screens.Home} />
    <HomeStack.Screen name="Packages" component={Screens.Packages} />
    <HomeStack.Screen name="Services" component={Screens.Services} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
