import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  btnStyle: {
    width: '67%',
    height: '20%',
    borderColor: '#231F20',
    borderWidth: 1,
    backgroundColor: Colors.heading,
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
  subHeading: {
    fontSize: FontSize.medium,
    color: Colors.heading,
    fontWeight: '400',
    fontFamily: FontFamily.regular,
  },
  imageContainer: {
    width: null,
    height: null,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  mainContainer: {
    height: height / 1.075,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'space-around',
  },
  btnTitle: {
    color: Colors.white,
    fontSize: FontSize.medium + 1,
    fontWeight: '700',
  },
  subContainer: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  heading: {
    fontSize: FontSize.xLarge + 6,
    fontFamily: FontFamily.bold,
    alignSelf: 'flex-start',
    color: Colors.heading,
    paddingTop: 5,
  },
});

export default styles;
