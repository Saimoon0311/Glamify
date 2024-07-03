import {Touchable} from '@/Components/Touchable';
import {Colors} from '@/Theme/Variables';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './stylesheets';

const Content = ({
  addsOn,
  updateAddsOn,
  count,
  checkCount,
  incrementCheckCount,
  decrementCheckCount,
}) => {
  // console.log('addsOn', addsOn);
  return (
    <View style={styles.scrollContainer}>
      <Text style={styles.addText}>Add-ons</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        {addsOn.map(value => (
          <View key={value?._id} style={styles.cardContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.cardHeading}>{value.title}</Text>
              <View style={styles.cardCheckBoxContainer}>
                <Text style={styles.cardPrice}>${value.price}</Text>
                <BouncyCheckbox
                  size={20}
                  fillColor="#231F20"
                  unfillColor="#FFFFFF"
                  iconStyle={styles.checkBoxIcon}
                  onPress={() => updateAddsOn(value)}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.cardDesc} numberOfLines={2}>
                {value.description}
              </Text>
              {/* {count == 2 && (
                <View
                  style={[
                    styles.btnContainer,
                    {
                      backgroundColor: Colors.white,
                    },
                  ]}>
                  <Touchable
                    disabled={checkCount == 1}
                    style={styles.btn}
                    onPress={decrementCheckCount}>
                    <View style={styles.minusBtn} />
                  </Touchable>
                  <Text style={styles.count}>{checkCount}</Text>
                  <Touchable
                    disabled={checkCount >= 2}
                    style={styles.btn}
                    onPress={incrementCheckCount}>
                    <Text style={styles.plus}>+</Text>
                  </Touchable>
                </View>
              )} */}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Content;
