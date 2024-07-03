import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import {Bar} from 'react-native-progress';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const RatingCard = ({rating, progress, count}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View>
        <StarRating
          rating={rating}
          maxStars={5}
          starSize={20}
          style={{
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
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
        <Bar progress={progress} color={Colors.black} width={100} />
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
};

export default RatingCard;

const styles = StyleSheet.create({
  count: {
    width: 30,
    color: Colors.gray2,
    textAlign: 'right',
    fontSize: FontSize.medium - 2,
    fontFamily: FontFamily.regular,
  },
});
