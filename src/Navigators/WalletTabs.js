import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as Screens from '@/Containers/Screens';
import {Colors, topTabsStyles} from '@/Theme/Variables';
import WalletHeader from '@/Components/WalletHeader';
import SafeAreaWraper from '@/Components/SafeAreaView';

const Tab = createMaterialTopTabNavigator();

const WalletTabs = () => (
  <SafeAreaWraper>
    <WalletHeader />
    <Tab.Navigator
      screenOptions={topTabsStyles}
      sceneContainerStyle={{backgroundColor: Colors.white}}>
      <Tab.Screen name="Transaction" component={Screens.Transaction} />
      <Tab.Screen name="Credits" component={Screens.Credits} />
      {/* <Tab.Screen name="Reedeem" component={Screens.Reedeem} /> */}
    </Tab.Navigator>
  </SafeAreaWraper>
);

export default WalletTabs;
