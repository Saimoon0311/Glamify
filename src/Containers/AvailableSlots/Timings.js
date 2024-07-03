import {Touchable} from '@/Components/Touchable';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Timings = ({item, index, summaryRoute}) => {
  return (
    <View key={index} style={styles.listSpace}>
      {/* <Text style={styles.title}>{item.name}</Text> */}
      <View style={styles.listView}>
        {item.timeslots.map((items, el) => (
          <Touchable
            onPress={() => summaryRoute(items)}
            key={el}
            style={[
              styles.listStyle,
              {marginRight: (el + 1) % 3 === 0 ? 0 : 10},
            ]}>
            <Text style={styles.listText}>{items.start}</Text>
          </Touchable>
        ))}
      </View>
    </View>
  );
};

export default Timings;
