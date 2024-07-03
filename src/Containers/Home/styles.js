import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  subHeading: {fontSize: 16, color: Colors.heading},
  mainContainer: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.large,
    fontWeight: '600',
    color: Colors.heading,
    marginLeft: 8,
  },
  desc: {
    fontFamily: FontFamily.semiBold,
    fontSize: FontSize.medium - 2,
    color: Colors.heading,
    fontWeight: '400',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    width: '100%',
    paddingVertical: 10,
  },
  mainSubContainer: {flex: 1, paddingTop: 20, paddingBottom: 90},
  mainScroll: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    paddingBottom: 70,
  },
  settingsButton: {
    width: '60%',
    height: 50,
    borderColor: Colors.heading,
    borderWidth: 1,
    backgroundColor: Colors.heading,
    shadowColor: Colors.heading,
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
  para: {
    paddingBottom: 20,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.semiBold,
  },
});

export default styles;
