import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStack';
import BookingTabScreen from './BookingTopTabs';
import SettingStackScreen from './SettingStack';
import {getRouteIcon} from '@/Utils/Validation/Helper';
import WalletTabs from './WalletTabs';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={getRouteIcon}>
    <Tab.Screen name="HomeStack" component={HomeStackScreen} />
    <Tab.Screen name="BookingStack" component={BookingTabScreen} />
    <Tab.Screen name="WalletStack" component={WalletTabs} />
    <Tab.Screen name="SettingStack" component={SettingStackScreen} />
  </Tab.Navigator>
);

export default MainTabs;
