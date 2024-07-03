import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: width * 0.05,
  },
  bar: {
    height: 5,
    borderRadius: 3,
    width: width * 0.15,
    marginHorizontal: width * 0.425,
    marginTop: 10,
    backgroundColor: Colors.darkGray,
  },
  inputContainer: {
    paddingTop: 20,
    width: width * 0.9,
    alignItems: 'center',
  },
  cardText: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: FontSize.regular,
    fontFamily: FontFamily.bold,
  },
  button: {alignItems: 'center'},
  btnStyle: {
    width: width * 0.9,
    height: 60,
    backgroundColor: Colors.heading,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: Colors.white,
    fontSize: FontSize.medium + 2,
    fontWeight: '400',
    fontFamily: FontFamily.bold,
  },
  label: {
    color: Colors.description,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
    marginBottom: 5,
  },
  cardStyle: {
    borderWidth: 1,
    backgroundColor: Colors.white,
    textColor: Colors.black,
    placeholderColor: Colors.lightGray,
  },
  mainContainer: {width: '100%'},
  label: {
    color: Colors.description,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
    marginBottom: 5,
  },
  Input: {
    borderWidth: 1,
    height: 65,
    borderColor: Colors.border,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: Colors.heading,
  },
});
