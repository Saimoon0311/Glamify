import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Touchable} from '@/Components/Touchable';
import {styles} from './stylesheet';

const Header = ({setExpandedIndex, item, index}) => (
  <Touchable
    Opacity={0.7}
    // onPress={() => setExpandedIndex(index)}
    style={styles.headerContainer}>
    <ImageBackground
      source={item.bgs}
      // source={{uri: item.bg}}
      style={styles.headerBgImage}
      // imageStyle={styles.headerImage}
    >
      <View style={styles.headerSubContainer}>
        <Text style={styles.headerHeading}>{item.title}</Text>
      </View>
    </ImageBackground>
  </Touchable>
);

export default Header;
