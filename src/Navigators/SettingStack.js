import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '@/Containers/Screens';
import {screenOptions} from '@/Theme/Variables';
const SettingStack = createStackNavigator();

const SettingStackScreen = () => (
  <SettingStack.Navigator
    screenOptions={screenOptions}
    initialRouteName="Settings">
    <SettingStack.Screen
      options={{headerShown: false}}
      name="Setting"
      component={Screens.Setting}
    />
    <SettingStack.Screen
      options={{headerShown: false}}
      name="Profile"
      component={Screens.Profile}
    />
  </SettingStack.Navigator>
);

export default SettingStackScreen;
