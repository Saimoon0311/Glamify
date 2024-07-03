import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  BackHandler,
} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {check} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';

const {width, height} = Dimensions.get('window');

const Thanks = ({navigation}) => {
  const appointmentModalClose = () => {
    navigation.popToTop();
    navigation.replace('MainTabs', {
      screen: 'BookingStack',
      params: {screen: 'Appointments'},
    });
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 60, alignItems: 'center'}}>
        <Text style={styles.headingText}>Appointment</Text>
        <Text style={styles.headingsubText}>Has Been Booked</Text>
        <View style={styles.checkBox}>
          <Image source={check} style={styles.check} />
        </View>
        <Touchable
          Opacity={0.7}
          style={styles.checkBox}
          onPress={appointmentModalClose}>
          <Text style={styles.headingText}>OK</Text>
        </Touchable>
      </View>
    </View>
  );
};

export default Thanks;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.black,
  },
  crossBox: {
    alignItems: 'flex-end',
    padding: 20,
  },
  headingText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: FontFamily.bold,
    fontSize: FontSize.large + 4,
  },
  headingsubText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: FontFamily.regular,
    fontSize: FontSize.medium + 2,
    paddingTop: 5,
  },
  checkBox: {
    marginTop: height * 0.05,
  },
  checkBox: {
    marginTop: height * 0.035,
  },
  check: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
  },
});
