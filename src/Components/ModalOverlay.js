import React from 'react';
import {Animated, View, Pressable, StyleSheet} from 'react-native';

const radius = 20;

const ModalOverlay = ({children, onBack, style}) => (
  <View style={{flex: 1, justifyContent: 'flex-end'}}>
    <Pressable style={StyleSheet.absoluteFill} onPress={onBack} />
    <Animated.View
      style={[
        {
          backgroundColor: '#fff',
          borderTopRightRadius: radius,
          borderTopLeftRadius: radius,
          padding: radius,
        },
        style,
      ]}>
      {children}
    </Animated.View>
  </View>
);

export default ModalOverlay;
