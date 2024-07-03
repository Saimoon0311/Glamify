import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {StyleSheet} from 'react-native';
const paddingValue = 20;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  timeContainer: {
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: paddingValue,
  },
  date: {
    color: Colors.heading,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
  },
  minutesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    justifyContent: 'space-between',
  },
  clockImage: {width: 15, height: 15},
  minutes: {
    color: Colors.placeholder,
    fontSize: FontSize.small,
    fontFamily: FontFamily.bold,
    fontWeight: '600',
  },
  serviceHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceHeading: {
    color: Colors.heading,
    fontFamily: FontFamily.semiBold,
    fontWeight: '600',
    fontSize: FontSize.small + 2,
  },
  servicePrice: {
    color: Colors.heading,
    fontFamily: FontFamily.semiBold,
    fontWeight: '600',
    fontSize: FontSize.small + 2,
  },
  gstContainer: {
    marginTop: 30,
  },
  gstText: {
    color: 'rgba(35, 31, 32, 0.35)',
    fontFamily: FontFamily.semiBold,
    fontWeight: '600',
    fontSize: FontSize.small,
  },
  gstPrice: {
    color: 'rgba(35, 31, 32, 0.35)',
    fontFamily: FontFamily.semiBold,
    fontWeight: '600',
  },
  gstTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  creditsContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  useCreditBtn: {
    width: 93,
    height: 43,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  useCreditBtnTitle: {
    color: Colors.white,
    fontSize: FontSize.small + 2,
    fontFamily: FontFamily.semiBold,
  },
  creditText: {
    color: Colors.heading,
    fontSize: FontSize.medium,
    fontWeight: '400',
    fontFamily: FontFamily.semiBold,
  },
  totalContainer: {
    height: 60,
    backgroundColor: 'rgba(151, 151, 151, 0.1)',
    justifyContent: 'center',
    marginTop: 10,
  },
  totalContentContainer: {
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: paddingValue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    color: Colors.heading,
    fontWeight: '600',
    fontFamily: FontFamily.semiBold,
    fontSize: FontSize.medium,
  },
  cardPickerContainer: {
    height: 180,
    padding: 20,
  },
  cardImage: {height: 23, width: 30, marginRight: 14},
  privacyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 37,
    alignItems: 'center',
  },
  privacyArrowImage: {height: 9, width: 5, transform: [{rotate: '90deg'}]},
  btnContainer: {
    height: 180,
    backgroundColor: Colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: '90%',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    fontWeight: '600',
    color: Colors.white,
    fontSize: FontSize.regular - 2,
    fontFamily: FontFamily.semiBold,
  },
  subContainer: {marginTop: 30, paddingHorizontal: 20},
});

export default styles;
