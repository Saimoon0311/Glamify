import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import LinearGradient from 'react-native-linear-gradient';
import {Touchable} from '@/Components/Touchable';

const gradientConfig = {
  colors: ['#F9EFE6', 'rgba(249, 239, 230, 0.5)', 'rgba(249, 239, 230, 0)'],
  start: {x: 0.1, y: 0.2},
  end: {x: 0.5, y: 0.3},
  location: [0, 0.7, 1],
};

const PackageCard = ({item}) => (
  <>
    <ImageBackground
      source={item.cover}
      style={styles.backgroundImage}
      imageStyle={styles.bgImage}
      resizeMode="stretch"
    />
    <LinearGradient
      start={gradientConfig.start}
      end={gradientConfig.end}
      locations={gradientConfig.location}
      colors={gradientConfig.colors}
      style={[styles.backgroundImage, styles.gradientContainer]}>
      <View style={{paddingTop: 5}}>
        <Text style={styles.smallHeading}>
          {item.name.split(' ').slice(0, 2).join(' ')}
        </Text>
        <Text style={styles.mediumHeading}>
          {item.name.split(' ').slice(2, 4).join(' ')}
        </Text>
        <Text style={styles.desc} numberOfLines={1}>
          {item.desc}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.price}>${item.price}</Text>
        <Touchable Opacity={0.7} style={styles.btnContainer}>
          <Text style={styles.btnTitle}>Book</Text>
        </Touchable>
      </View>
    </LinearGradient>
  </>
);
const styles = StyleSheet.create({
  backgroundImage: {width: '100%', height: 150},
  gradientContainer: {
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  smallHeading: {
    color: Colors.heading,
    fontWeight: '400',
    fontSize: FontSize.small,
    fontFamily: FontFamily.bold,
  },
  mediumHeading: {
    color: Colors.heading,
    fontWeight: '600',
    fontSize: FontSize.medium + 4,
    fontFamily: FontFamily.bold,
    textTransform: 'capitalize',
  },
  desc: {
    color: Colors.heading,
    fontWeight: '400',
    fontSize: FontSize.small,
    fontFamily: FontFamily.regular,
  },
  price: {
    color: Colors.heading,
    fontWeight: '600',
    fontSize: FontSize.large - 2,
    fontFamily: FontFamily.bold,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 80,
    backgroundColor: Colors.heading,
  },
  btnTitle: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: FontSize.medium,
    fontFamily: FontFamily.bold,
  },
});
export default React.memo(PackageCard);
