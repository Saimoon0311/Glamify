import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  btnStyle: {
    width: '90%',
    height: 60,
    borderColor: '#231F20',
    borderWidth: 1,
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
    marginTop: 40,
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
    height: height / 1.04,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTitle: {color: Colors.white, fontSize: 16, fontWeight: '700'},
  heading: {
    fontSize: FontSize.xLarge + 6,
    color: Colors.heading,
    fontFamily: FontFamily.bold,
  },
  subHeading: {
    fontSize: FontSize.medium,
    fontWeight: '400',
    fontFamily: FontFamily.regular,
    color: Colors.heading,
    marginTop: 10,
  },
});

export default styles;
