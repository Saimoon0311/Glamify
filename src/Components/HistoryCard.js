import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {Touchable} from '@/Components/Touchable';
import moment from 'moment';
const {width, height} = Dimensions.get('window');
const HistoryCard = ({item, feedbackHandler}) => {
  const {service, date, day, month, time, status, feedback} = item;
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const months = new Date(date);
  return (
    <Touchable
      Opacity={0.8}
      style={styles.cardMainContainer}
      onPress={() => (status == 'canceled' ? null : feedbackHandler(item))}>
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.cardFill}>
            <Text style={styles.day}>{new Date(date).getDate()}</Text>
            {/* <Text style={styles.day}>{day}</Text> */}
            <Text>{monthNames[months.getMonth()]}</Text>
            {/* <Text>{month}</Text> */}
          </View>
          <View>
            <Text numberOfLines={1} style={styles.title}>
              {service?.title}
            </Text>
            <View style={[styles.row]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text numberOfLines={1} style={styles.date}>
                  {new Date(date).getDate()}, {monthNames[months.getMonth()]}{' '}
                  {new Date(date).getFullYear()} at{' '}
                  {moment(new Date(date)).format('hh:mm A')}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.card,
            {
              backgroundColor: status == 'canceled' ? '#ED9F9F' : '#A8DD7E',
            },
          ]}>
          <Text style={styles.status}>{status}</Text>
          {/* <Text style={styles.status}>{status}</Text> */}
        </View>
      </View>
    </Touchable>
  );
};

export default HistoryCard;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 2.5,
    color: Colors.black,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.semiBold,
  },
  date: {
    color: Colors.gray,
    fontSize: FontSize.small - 2,
    fontFamily: FontFamily.regular,
  },
  cardMainContainer: {
    backgroundColor: Colors.white,
    padding: 10,
    justifyContent: 'space-between',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 2,
  },
  card: {
    padding: 5,
    width: width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFill: {
    padding: 5,

    width: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: Colors.pink,
  },
  day: {
    color: Colors.black,
    fontSize: FontSize.large,
    fontFamily: FontFamily.bold,
  },
  status: {
    color: Colors.white,
    textTransform: 'capitalize',
    fontSize: FontSize.small + 2,
    fontFamily: FontFamily.semiBold,
  },
});
