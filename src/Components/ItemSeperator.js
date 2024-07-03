import {View} from 'react-native';
import React from 'react';

const ItemSeperator = ({color = '#fff', marginVertical = 10}) => (
  <View style={{backgroundColor: color, marginVertical}} />
);

export default ItemSeperator;
