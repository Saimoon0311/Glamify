import React from 'react';
import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {add} from '@/Assets/Images';
import {Touchable} from './Touchable';
import LinearGradient from 'react-native-linear-gradient';

const gradientConfig = {
  colors: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
  location: [0, 1],
};

const OfferCard = ({
  onPress,
  price,
  heading,
  src,
  margin,
  width = 200,
  height = 250,
}) => (
  <ImageBackground
    style={[styles.cardContainer, {width, height, marginLeft: margin}]}
    source={src}>
    <LinearGradient
      start={gradientConfig.start}
      end={gradientConfig.end}
      locations={gradientConfig.location}
      colors={gradientConfig.colors}
      style={[styles.backgroundImage, styles.gradientContainer]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 65,
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.heading}>{heading}</Text>
          {price && <Text style={styles.price}>${price.toFixed(2)}</Text>}
        </View>
        <View
          style={{
            paddingLeft: 47.5,
          }}>
          <Touchable onPress={onPress}>
            <Image source={add} style={styles.btnImage} />
          </Touchable>
        </View>
      </View>
    </LinearGradient>
  </ImageBackground>
);

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: FontSize.medium - 2,
    fontWeight: '600',
    fontFamily: FontFamily.bold,
    color: Colors.heading,
  },
  price: {
    fontWeight: '700',
    fontFamily: FontFamily.semiBold,
    fontSize: FontSize.medium + 4,
    color: Colors.heading,
  },
  btnImage: {width: 36, height: 36, resizeMode: 'contain'},
  bgImage: {borderRadius: 15, resizeMode: 'contain'},
  backgroundImage: {width: '100%', height: 120},
  gradientContainer: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});

export default OfferCard;
