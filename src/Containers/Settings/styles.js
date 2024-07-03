import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
    borderBottomColor: Colors.border,
    borderTopColor: Colors.border,
  },
  listItemImage: {width: 25, height: 25, marginRight: 20},
  listDeleteImage: {
    width: 25,
    height: 25,
    marginRight: 20,
    tintColor: Colors.error,
  },
  listItemImage2: {width: 15, height: 15, marginRight: 5},
  listItemHeading: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
    color: Colors.heading,
  },
  listDeleteHeading: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
    color: Colors.error,
  },
  mainScroll: {flexGrow: 1, backgroundColor: Colors.white},
  mainContainer: {
    width: null,
    height: null,
    flex: 1,
  },
  imageBg: {
    width: null,
    height: null,
    flex: 1,
    padding: 40,
  },
  usermainContainer: {
    height: 70,
    height: height * 0.085,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  userImg: {width: 112, height: 112, borderRadius: 15},
  userInfoContainer: {marginLeft: 10, marginTop: 10},
  userNameText: {
    fontSize: FontSize.regular,
    fontFamily: FontFamily.bold,
    color: Colors.heading,
  },
  userEmail: {
    fontSize: FontSize.medium,
    fontWeight: '600',
    fontFamily: FontFamily.semiBold,
    color: Colors.heading,
  },
  settingText: {
    fontSize: FontSize.large - 2,
    fontFamily: FontFamily.bold,
    fontWeight: '700',
    color: Colors.heading,
  },
  settingdesc: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: Colors.description,
  },
  profileItemContainer: {
    // marginTop: 20,
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
    borderBottomColor: Colors.border,
    borderTopColor: Colors.border,
  },
  logoutBtnContainer: {alignItems: 'center', marginTop: 40},
  logoutImg: {width: 174, height: 40, borderRadius: 20},
});
