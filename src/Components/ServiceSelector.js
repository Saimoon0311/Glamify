import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Colors, FontSize, FontFamily} from '@/Theme/Variables';
import {Touchable} from './Touchable';

const ServiceSelector = ({value, onService, onPackage, onConfirm}) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Select Below:</Text>
    <Text
      style={{
        color: '#231F20',
        fontSize: FontSize.medium - 2,
        fontWeight: '300',
        opacity: 0.6,
      }}>
      There are many variations of passages of Lorem Ipsum available, but the
      majority.
    </Text>
    <View style={styles.lineView} />
    <View style={styles.checkBoxContainer}>
      <BouncyCheckbox
        size={25}
        fillColor="#231F20"
        unfillColor="#FFFFFF"
        text="Services"
        disableBuiltInState
        textStyle={styles.checkBoxTitle}
        onPress={onService}
        iconStyle={styles.checkBoxIcon}
        isChecked={Boolean(value == 'services')}
      />
      <BouncyCheckbox
        size={25}
        fillColor="#231F20"
        unfillColor="#FFFFFF"
        disableBuiltInState
        text="Packages"
        textStyle={styles.checkBoxTitle}
        onPress={onPackage}
        iconStyle={styles.checkBoxIcon}
        style={{marginLeft: 50}}
        disabled
        isChecked={Boolean(value == 'packages')}
      />
    </View>
    <Touchable
      disabled={value == '' ? true : false}
      onPress={onConfirm}
      Opacity={0.7}
      style={styles.btnContainer}>
      <Text style={styles.btnTitle}>Book An Appointment</Text>
    </Touchable>
  </View>
);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: 300,
    justifyContent: 'space-between',
  },
  heading: {
    color: Colors.heading,
    fontSize: FontSize.medium,
    fontWeight: '600',
  },
  lineView: {width: '100%', height: 1, backgroundColor: '#00000040'},
  checkBoxContainer: {flexDirection: 'row', justifyContent: 'flex-start'},
  checkBoxTitle: {
    fontFamily: FontFamily.regular,
    textDecorationLine: 'none',
    fontWeight: '600',
    fontSize: FontSize.medium,
    color: Colors.heading,
  },
  checkBoxIcon: {
    borderRadius: 0,
    borderColor: '#231F2080',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.heading,
    height: 50,
    marginHorizontal: 20,
    marginTop: 20,
    // borderRadius: 40,
  },
  btnTitle: {
    fontSize: FontSize.medium,
    fontWeight: '600',
    color: Colors.white,
    fontFamily: FontFamily.semiBold,
  },
});
export default ServiceSelector;
