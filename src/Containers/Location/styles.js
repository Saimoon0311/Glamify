import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const styles = StyleSheet.create({
  mapStyle: StyleSheet.absoluteFillObject,
  locationBtnContainer: {alignItems: 'center', padding: 20},
  btn: {
    width: '75%',
    height: 60,
    backgroundColor: Colors.heading,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: Colors.white,
    fontSize: FontSize.medium + 2,
    fontFamily: FontFamily.bold,
    fontWeight: '600',
  },
  markerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.black,
    fontSize: FontSize.medium - 2,
    fontFamily: FontFamily.semiBold,
    textAlign: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: Colors.error,
  },
});

export default styles;
