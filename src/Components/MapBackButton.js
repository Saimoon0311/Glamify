import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Colors, FontFamily} from '@/Theme/Variables';
import {backButton} from '@/Assets/Images';
import {Touchable} from './Touchable';

const MapBackButton = ({navigation}) => {
  return (
    <Touchable
      onPress={() => navigation.goBack('')}
      Opacity={0.7}
      style={styles.container}>
      <Image source={backButton} style={styles.backButton} />
      <Text style={styles.text}>Go Back</Text>
    </Touchable>
  );
};

export default MapBackButton;

const styles = StyleSheet.create({
  container: {
    width: 100,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '700',
    fontFamily: FontFamily.bold,
  },
});
