import {StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const styles = StyleSheet.create({
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.pink,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: Colors.black,
    fontSize: FontSize.medium + 2,
    fontFamily: FontFamily.bold,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
  subContainer: {
    // height: '90%',
    paddingTop: 10,
    paddingBottom: 40,
    alignItems: 'center',
    backgroundColor: Colors.pink,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  info: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: FontFamily.bold,
  },
  subHeading: {
    fontSize: 14,
    marginTop: 2.5,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: FontFamily.regular,
  },
  btnStyle: {
    width: '30%',
    height: 50,
    // height: '15%',
    marginTop: 40,
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
  btnTitle: {
    color: Colors.white,
    fontSize: FontSize.medium + 1,
    fontFamily: FontFamily.semiBold,
  },
  footer: {
    paddingTop: 20,
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  rowCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rating: {
    fontSize: 42,
    textAlign: 'center',
    color: Colors.black,
    fontFamily: FontFamily.bold,
  },
  ratingCount: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.darkGray,
    fontFamily: FontFamily.regular,
  },
});

export default styles;
