import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  emptyImage: {
    tintColor: Colors.transparent,
  },
  btnTitle: {
    color: Colors.white,
    fontSize: FontSize.medium + 1,
    fontWeight: '700',
  },
  backImg: {alignSelf: 'flex-start', paddingTop: 10},
  headingContainer: {
    paddingVertical: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: FontSize.large - 2,
    fontFamily: FontFamily.bold,
    color: Colors.heading,
  },
  subHeading: {
    textAlign: 'center',
    fontSize: FontSize.medium - 2,
    fontFamily: FontFamily.regular,
    color: Colors.description,
    paddingTop: 5,
  },
  button: {alignItems: 'center'},
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
  btnTitle: {
    color: Colors.white,
    fontSize: FontSize.medium + 2,
    fontWeight: '400',
    fontFamily: FontFamily.bold,
  },
  image: {
    borderRadius: 90,
    height: 140,
    width: 140,
  },
});
