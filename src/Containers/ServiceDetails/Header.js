import {clock} from '@/Assets/Images';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './stylesheets';

const Header = ({params, decrementCount, incrementCount, Lines, count}) => (
  <View style={styles.mainSubContainer}>
    <View>
      <Text style={styles.subContainerHeading} numberOfLines={Lines}>
        {params?.title}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={clock} style={styles.icon} />
        <Text style={[styles.time, {marginLeft: 3.5}]} numberOfLines={Lines}>
          {params?.time} min
        </Text>
      </View>
      <Text style={styles.desc} numberOfLines={Lines + 1}>
        {params?.description}
      </Text>
      <View style={styles.countContainer}>
        <Text style={styles.clientText}>How many clients?</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            disabled={count == 1}
            style={styles.btn}
            onPress={decrementCount}>
            <View style={styles.minusBtn} />
          </TouchableOpacity>
          <Text style={styles.count}>{count}</Text>
          <TouchableOpacity
            disabled={count >= 2}
            style={styles.btn}
            onPress={incrementCount}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default Header;
