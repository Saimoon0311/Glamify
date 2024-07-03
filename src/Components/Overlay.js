import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Overlay = () => (
  <View
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4 )',
      position: 'absolute',
      zIndex: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <ActivityIndicator size={'large'} color="#fff" />
  </View>
);

export default Overlay;
