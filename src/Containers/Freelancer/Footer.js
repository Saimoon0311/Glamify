import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {reviewsData} from '@/Config/localData';
import {Colors, FontFamily} from '@/Theme/Variables';
import StarRating from 'react-native-star-rating-widget';

const Footer = () => {
  return (
    <View
      style={{
        paddingTop: 40,
      }}>
      {reviewsData.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
            <View style={styles.mainCointainer}>
              <View style={styles.header}>
                <Image style={styles.icon} source={item?.image} />
                <View style={styles.heading}>
                  <Text style={styles.name}>{item?.name}</Text>
                  <View
                    style={{
                      marginTop: 5,
                      // width: 340,
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <StarRating
                      rating={item?.rating}
                      maxStars={5}
                      starSize={15}
                      style={{
                        //   paddingRight: 150,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      starStyle={{
                        marginLeft: 0,
                        marginRight: 0,
                      }}
                      onChange={() => {}}
                      color={Colors.yellow}
                      enableSwiping={false}
                    />
                    <Text style={styles.date}>{item?.date}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.messageBox}>
              <Text style={styles.message}>{item?.message}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  mainCointainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  heading: {
    paddingLeft: 10,
    flexDirection: 'column',
    width: '90%',
    // alignItems: 'flex-start',
  },
  name: {
    fontSize: 16,
    textAlign: 'left',
    color: Colors.black,
    fontFamily: FontFamily.bold,
  },
  date: {
    fontSize: 12,
    textAlign: 'right',
    color: Colors.darkGray,
    fontFamily: FontFamily.regular,
  },
  messageBox: {
    paddingTop: 10,
  },
  message: {
    opacity: 0.8,
    fontSize: 16,
    textAlign: 'left',
    color: Colors.black2,
    fontFamily: FontFamily.regular,
  },
});
