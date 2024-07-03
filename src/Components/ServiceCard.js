import React from 'react';
import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {defImage, plus} from '@/Assets/Images';
import {Touchable} from './Touchable';
import {baseURL} from '@/Config/Constants';
import FastImage from 'react-native-fast-image';

const ServiceCard = ({
  onPress,
  item,
  title,
  src,
  margin,
  width = 130,
  height = 165,
  onPressContainer,
}) => {
  const icon = `${baseURL.replace('api', '')}${src}`;
  return (
    <Touchable
      Opacity={0.7}
      onPress={() => onPressContainer(item)}
      style={[styles.cardContainer, {width, height, marginLeft: margin}]}>
      <FastImage
        style={styles.bgImage}
        source={{
          uri: icon,
          priority: FastImage.priority.high,
        }}
      />
      <View>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <View style={styles.overlay} />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 10,
    // marginHorizontal: -7.5,
  },
  heading: {
    fontSize: FontSize.medium,
    fontWeight: '600',
    fontFamily: FontFamily.bold,
    color: Colors.heading,
  },
  bgImage: {width: 80, height: 80, resizeMode: 'contain', marginTop: 10},
});

export default ServiceCard;
