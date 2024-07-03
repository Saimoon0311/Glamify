import {TouchableOpacity} from 'react-native';
import React from 'react';

export const Touchable = ({children, onPress, Opacity, style, disabled}) => (
  <TouchableOpacity {...{onPress, activeOpacity: Opacity, style, disabled}}>
    {children}
  </TouchableOpacity>
);
