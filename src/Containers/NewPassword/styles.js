import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
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
  },
  inputContainer: {
    height: '70%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnTitle: {color: Colors.white, fontSize: 16, fontWeight: '700'},
  backImg: {alignSelf: 'flex-start', marginVertical: 50},
  heading: {
    fontSize: FontSize.xLarge + 6,
    fontFamily: FontFamily.bold,
    color: Colors.heading,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  cancel: {
    fontFamily: FontFamily.semiBold,
    fontSize: FontSize.medium,
    fontWeight: '600',
    color: '#231F20',
    opacity: 0.5,
  },
  marker: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
});

export default styles;
