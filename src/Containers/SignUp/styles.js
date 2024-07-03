import {StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const styles = StyleSheet.create({
  btnStyle: {
    width: '70%',
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
  container: {
    height: 190,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subHeading: {color: Colors.heading, fontSize: FontSize.medium},
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
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputContainer: {
    height: 700,
    width: '100%',
    justifyContent: 'space-around',
  },
  btnTitle: {color: Colors.white, fontSize: FontSize.medium, fontWeight: '700'},
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  heading: {
    fontSize: FontSize.xLarge + 6,
    alignSelf: 'flex-start',
    fontFamily: FontFamily.bold,
    color: Colors.heading,
    marginBottom: 40,
  },
});

export default styles;
