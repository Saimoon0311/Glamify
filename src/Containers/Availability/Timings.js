import React from 'react';
import {Text, View} from 'react-native';
import {Touchable} from '@/Components/Touchable';
import styles from './styles';
import {Colors} from '@/Theme/Variables';

const Timings = ({item, index, selectTime, summaryRoute, setSelectTime}) => {
  // console.log({selectTime, item});
  return (
    <View style={styles.listSpace}>
      <View style={styles.listView}>
        <Touchable
          // onPress={() => summaryRoute(item)}
          onPress={() => setSelectTime(item)}
          style={[
            styles.listStyle,
            {
              backgroundColor:
                selectTime?._id == item?._id ? Colors.black : Colors.white,
            },
            // marginRight: (index + 1) % 3 === 0 ? 0 : 10,
          ]}>
          <Text
            style={[
              styles.listText,
              {
                color:
                  selectTime?._id == item?._id ? Colors.white : Colors.black,
              },
            ]}>
            {item.start.replace('0:00', '0')}
          </Text>
        </Touchable>
      </View>
    </View>
  );
};

export default Timings;
