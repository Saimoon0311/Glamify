import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FontSize, FontFamily} from '@/Theme/Variables';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  btnStyle: {
    width: width * 0.75,
    height: '17.5%',
    borderColor: '#231F20',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: null,
    height: null,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  safearea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.transparent,
  },
  container: {
    height: '40%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  subHeading: {
    fontSize: FontSize.medium,
    color: Colors.heading,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
  },
  btnTitle: {
    color: Colors.heading,
    fontSize: FontSize.medium,
    fontWeight: '400',
    fontFamily: FontFamily.semiBold,
  },
  signInTitle: {
    fontWeight: '700',
    fontFamily: FontFamily.semiBold,
    textDecorationLine: 'underline',
  },
  splash: {
    width: width * 0.75,
    height: height * 0.075,
    resizeMode: 'contain',
  },
});

export default styles;
