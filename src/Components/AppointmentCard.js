import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {phone, message, calender, clock} from '@/Assets/Images';
import StarRating from 'react-native-star-rating-widget';
import {Touchable} from '@/Components/Touchable';
import {baseURL} from '@/Config/Constants';
import FastImage from 'react-native-fast-image';
const {width, height} = Dimensions.get('window');
const add_ons = ['Outdoor Option', 'Hair Accessories', 'Bang Trim'];
const reviews = 85;
const AppointmentCard = ({
  item,
  onPressCall,
  onPressMessage,
  appointmentHandler,
  cancelHandler,
  onPressFeed,
  feedbackHandler,
  marginLeft = 0,
  booked,
  books,
  cancel,
  isConfirmed,
  onSelect,
}) => {
  const {provider, service, date, status} = item;
  const URI = `${baseURL.replace('/api', '')}${provider?.profile_photo}`;
  const formatDate = new Date(date);

  // console.log('booking', item?._id);

  return (
    <Touchable
      // onPress={books ? () => appointmentHandler(item) : null}
      Opacity={books ? 0.8 : 1}
      style={[
        styles.cardMainContainer,
        {
          marginLeft,
          ...(marginLeft && {
            width: width * 0.75,
            height: height * 0.225,
          }),
        },
      ]}>
      {/* Card Header */}
      <CardHeader {...{service, date: formatDate, booked}} />
      {/* Badge Contenet */}
      <View>
        <Text style={styles.name}>Golden Lotus Beauty Salon</Text>
      </View>
      {cancel ? null : <BadgeContent add_ons={add_ons} />}
      {booked ? null : (
        <View style={styles.cardFooterContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Image source={URI} style={styles.userImage} /> */}
            <FastImage
              style={styles.userImage}
              source={{
                uri: URI,
                priority: FastImage.priority.high,
              }}
            />
            <View style={styles.userNameContainer}>
              <Text numberOfLines={1} style={styles.userName}>
                {provider.name}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <StarRating
                  rating={3.5}
                  maxStars={5}
                  starSize={10}
                  starStyle={{
                    marginLeft: 0,
                    marginRight: 2.5,
                    justifyContent: 'flex-start',
                  }}
                  onChange={() => console.log('Rating')}
                  color={Colors.black}
                  enableHalfStar={true}
                  enableSwiping={false}
                />
                <Text numberOfLines={1} style={styles.reviewText}>
                  ({reviews} Reviews)
                </Text>
              </View>
            </View>
          </View>
          <ButtonContainer
            {...{
              item,
              isConfirmed,
              onPressCall,
              onPressFeed,
              onPressMessage,
              feedbackHandler,
              onSelect,
            }}
          />
        </View>
      )}
      {cancel ? (
        <View style={styles.buttonRow}>
          <Touchable
            onPress={() => cancelHandler(item)}
            Opacity={0.7}
            style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel Appointment</Text>
          </Touchable>
          <Touchable
            onPress={() => appointmentHandler(item)}
            Opacity={0.7}
            style={styles.detailButton}>
            <Text style={styles.detailText}>View Details</Text>
          </Touchable>
        </View>
      ) : null}
    </Touchable>
  );
};

const CardHeader = ({service, date, booked}) => (
  <View style={styles.headerContainer}>
    <View style={{width: '80%'}}>
      <Text numberOfLines={1} style={styles.headerTitle}>
        {service?.title}
      </Text>
      <View style={[styles.row]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={calender} style={styles.icon} />
          <Text numberOfLines={1} style={styles.headerDate}>
            {date?.toLocaleDateString('en-US')}
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
            {date?.toLocaleTimeString('en-US')}
          </Text>
        </View>
      </View>
    </View>
    <Text numberOfLines={1} style={styles.price}>
      ${parseFloat(service?.price).toFixed(2)}
    </Text>
  </View>
);

const BadgeContent = ({add_ons}) => (
  <View style={styles.badgeMainContainer}>
    <Text numberOfLines={1} style={styles.addOnBadgeHeading}>
      Add -ons
    </Text>
    <View style={styles.badgeWrap}>
      {add_ons?.slice(0, 6).map((add, ind) => (
        <View
          style={[
            styles.addOnBadge,
            {marginLeft: ind % 3 == 0 || !ind ? 0 : 10},
          ]}
          key={ind}>
          <Text numberOfLines={1} style={styles.addOnBadgeText}>
            {add}
          </Text>
        </View>
      ))}
      {!add_ons.length && (
        <Text style={styles.addOnBadgeText}>No adds on added</Text>
      )}
    </View>
  </View>
);

const ButtonContainer = ({
  item,
  isConfirmed,
  onPressCall,
  onPressMessage,
  onPressFeed,
  feedbackHandler,
  onSelect,
}) => (
  <View style={styles.btnContainer}>
    {isConfirmed && (
      <Touchable
        onPress={feedbackHandler}
        style={[
          styles.btn,
          {
            width: width * 0.25,
            height: height * 0.045,
            marginRight: 15,
          },
        ]}>
        <Text style={styles.feedBackText}>Feedback</Text>
      </Touchable>
    )}
    {!isConfirmed && (
      <>
        <Touchable onPress={() => onSelect(item)} style={styles.btn}>
          {/* <Touchable onPress={onPressCall} style={styles.btn}> */}
          <Image source={phone} style={styles.btnIcon} />
        </Touchable>
        <Touchable onPress={() => onSelect(item)} style={styles.btn}>
          {/* <Touchable onPress={onPressMessage} style={styles.btn}> */}
          <Image source={message} style={[styles.btnIcon]} />
        </Touchable>
      </>
    )}
  </View>
);

export default AppointmentCard;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2.5,
  },
  headerTitle: {
    color: Colors.black,
    fontSize: FontSize.medium,
    fontWeight: '600',
    fontFamily: FontFamily.semiBold,
    marginBottom: 5,
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
  price: {
    color: Colors.heading,
    fontSize: FontSize.medium,
    fontWeight: '400',
    fontFamily: FontFamily.bold,
  },
  addOnBadge: {
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 10,
    borderColor: Colors.black,
  },
  addOnBadgeText: {
    color: Colors.heading,
    fontSize: FontSize.small - 2,
    fontWeight: '600',
    fontFamily: FontFamily.semiBold,
  },
  cardMainContainer: {
    backgroundColor: Colors.pink,
    padding: 10,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  badgeMainContainer: {marginTop: 20, marginBottom: 5, paddingBottom: 0},
  addOnBadgeHeading: {
    color: Colors.heading,
    fontSize: FontSize.small,
    fontWeight: '600',
    fontFamily: FontFamily.bold,
  },
  badgeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userImage: {width: 30, height: 30, borderRadius: 180},
  userNameContainer: {marginLeft: 10},
  userName: {
    color: Colors.heading,
    fontSize: FontSize.small + 2,
    fontWeight: '600',
    fontFamily: FontFamily.semiBold,
  },
  reviewText: {
    color: Colors.black,
    fontSize: FontSize.small - 4,
    fontWeight: '400',
    fontFamily: FontFamily.regular,
  },
  btnContainer: {
    // marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '25%',
    alignItems: 'center',
  },
  btn: {
    width: width * 0.075,
    height: width * 0.075,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.heading,
  },
  btnIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  feedBackText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: FontSize.medium,
    fontFamily: FontFamily.semiBold,
  },
  cardFooterContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: Colors.gray,
  },
  name: {
    color: Colors.black,
    fontSize: FontSize.medium - 2,
    fontFamily: FontFamily.regular,
  },
  buttonRow: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelButton: {
    height: 35,
    width: '42.5%',
    borderColor: Colors.error,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
  },
  cancelText: {
    color: Colors.error,
    fontSize: FontSize.small,
    fontFamily: FontFamily.semiBold,
  },
  detailButton: {
    height: 35,
    width: '42.5%',
    borderColor: Colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  detailText: {
    color: Colors.white,
    fontSize: FontSize.small,
    fontFamily: FontFamily.semiBold,
  },
});
