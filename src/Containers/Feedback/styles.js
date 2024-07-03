import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: width * 0.05,
    backgroundColor: Colors.white,
  },
  heading: {
    color: Colors.black,
    textAlign: 'center',
    marginHorizontal: width * 0.15,
    fontSize: FontSize.medium + 2,
    fontFamily: FontFamily.bold,
  },
  buttonText: {
    marginTop: 10,
    color: Colors.black,
    textAlign: 'center',
    fontSize: FontSize.small,
    fontFamily: FontFamily.semiBold,
  },
  buttonCard: {
    left: 0,
    right: 0,
    bottom: 10,
    position: 'absolute',
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.0625,
    backgroundColor: Colors.black,
    elevation: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
  box: {
    width: width * 0.275,
    height: width * 0.325,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
});

export default styles;
