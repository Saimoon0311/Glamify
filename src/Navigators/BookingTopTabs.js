import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as Screens from '@/Containers/Screens';
import {Colors, topTabsStyles} from '@/Theme/Variables';
import SafeAreaWraper from '@/Components/SafeAreaView';
import BookingHeader from '@/Components/BookingHeader';

const Tab = createMaterialTopTabNavigator();

const BookingTabScreen = () => (
  <SafeAreaWraper>
    <BookingHeader />
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: Colors.white}}
      screenOptions={topTabsStyles}>
      <Tab.Screen name="Progess" component={Screens.Progess} />
      <Tab.Screen name="Scheduled" component={Screens.Scheduled} />
      <Tab.Screen name="History" component={Screens.History} />
    </Tab.Navigator>
  </SafeAreaWraper>
);

export default BookingTabScreen;
