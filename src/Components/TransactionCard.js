import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {Touchable} from './Touchable';
import {calender, clock} from '@/Assets/Images';

const TransactionCard = ({item}) => {
  const {date, amount, type, description} = item;
  const {booking_id} = description;
  // console.log('card', item);
  const dateForm = new Date(date);
  return (
    <DropShadow style={styles.dropShadow}>
      <View style={styles.cardContainer}>
        <View style={styles.subContainer}>
          <Text numberOfLines={1} style={styles.heading}>
            {description?.description}
          </Text>
          <Text numberOfLines={1} style={styles.subHeading}>
            {type}
          </Text>
          {/* <Text numberOfLines={1} style={styles.desc}>
            {dateForm?.toLocaleDateString('en-US')}
            {dateForm?.toLocaleTimeString('en-US')}
          </Text> */}
          <View style={[styles.row]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={calender} style={styles.icon} />
              <Text numberOfLines={1} style={styles.headerDate}>
                {dateForm?.toLocaleDateString('en-US')}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 12.5,
              }}>
              <Image source={clock} style={styles.icon} />
              <Text numberOfLines={1} style={styles.time}>
                {dateForm?.toLocaleTimeString('en-US')}
              </Text>
            </View>
          </View>
        </View>
        <Touchable Opacity={0.7} style={styles.reedeemContainer}>
          <Text numberOfLines={1} style={styles.reedeemText}>
            ${parseFloat(amount).toFixed(2)}
          </Text>
        </Touchable>
      </View>
    </DropShadow>
  );
};

export default TransactionCard;

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
    fontSize: FontSize.medium,
    fontFamily: FontFamily.semiBold,
    color: Colors.heading,
  },
  subHeading: {
    color: Colors.heading,
    fontSize: FontSize.medium,
    textTransform: 'capitalize',
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
    fontSize: FontSize.regular,
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
  headerDate: {
    color: Colors.gray,
    fontSize: FontSize.small - 2,
    fontWeight: '600',
    fontFamily: FontFamily.regular,
    marginLeft: 4.5,
  },
  row: {
    flexDirection: 'row',
    paddingTop: 2.5,
    paddingBottom: 5,
  },
  time: {
    color: Colors.gray,
    fontSize: FontSize.small - 2,
    fontWeight: '600',
    fontFamily: FontFamily.regular,
    marginLeft: 4.5,
  },
  icon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: Colors.gray,
  },
});
