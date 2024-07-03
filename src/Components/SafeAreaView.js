import {Colors} from '@/Theme/Variables';
import React from 'react';
import {SafeAreaView} from 'react-native';

const SafeAreaWraper = ({children}) => (
  <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
    {children}
  </SafeAreaView>
);

export default SafeAreaWraper;
