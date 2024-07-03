import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {Touchable} from './Touchable';

const WalletCard = ({item}) => {
  const {date, heading, value} = item;
  return (
    <DropShadow style={styles.dropShadow}>
      <View style={styles.cardContainer}>
        <View style={styles.subContainer}>
          <Text numberOfLines={1} style={styles.heading}>
            {heading}
          </Text>
          <Text numberOfLines={1} style={styles.subHeading}>
            {value}
          </Text>
          <Text numberOfLines={1} style={styles.desc}>
            {date}
          </Text>
        </View>
        <Touchable Opacity={0.7} style={styles.reedeemContainer}>
          <Text numberOfLines={1} style={styles.reedeemText}>
            Reedeem For 500 Points
          </Text>
        </Touchable>
      </View>
    </DropShadow>
  );
};

export default WalletCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 85,
    padding: 10,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderRadius: 10,
  },
  heading: {
    fontSize: FontSize.medium + 2,
    fontWeight: '700',
    fontFamily: FontFamily.semiBold,
    color: Colors.heading,
  },
  subHeading: {
    fontWeight: '600',
    color: Colors.heading,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.semiBold,
  },
  subContainer: {width: '50%', justifyContent: 'space-between', height: '100%'},
  reedeemContainer: {
    width: 150,
    height: 40,
    backgroundColor: Colors.pink,
    // borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  reedeemText: {
    fontSize: FontSize.small,
    fontWeight: '600',
    fontFamily: FontFamily.semiBold,
    color: Colors.heading,
  },
  desc: {
    fontSize: FontSize.small,
    color: Colors.description,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
  },
  dropShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
