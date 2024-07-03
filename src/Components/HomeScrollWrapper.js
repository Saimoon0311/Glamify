import React from 'react';
import {ScrollView} from 'react-native';

const HomeScrollWrapper = ({children}) => (
  <ScrollView
    contentContainerStyle={{marginVertical: 15, padding: 5}}
    horizontal
    showsHorizontalScrollIndicator={false}>
    {children}
  </ScrollView>
);

export default HomeScrollWrapper;
