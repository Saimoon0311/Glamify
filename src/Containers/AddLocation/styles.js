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
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: Colors.error,
  },
  mapText: {
    textInput: {
      color: Colors.black,
      fontSize: FontSize.medium - 2,
      width: '90%',
    },
    predefinedPlacesDescription: {
      color: Colors.black,
      marginLeft: 5,
    },
  },
});

export default styles;
