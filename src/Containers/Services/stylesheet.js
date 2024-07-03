import {StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

export const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {width: '50%', height: 200, marginBottom: 0},
  headerBgImage: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },
  headerImage: {borderRadius: 17},
  headerSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerHeading: {
    color: Colors.white,
    fontSize: FontSize.medium + 2,
    fontWeight: '600',
    fontFamily: FontFamily.semiBold,
  },
  arrowImage: {width: 10, height: 10},
  contentContainer: {
    width: '100%',
    height: 500,
    marginBottom: 20,
  },
  contentSubContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentHeading: {
    color: Colors.white,
    fontSize: FontSize.medium,
    fontWeight: '700',
    fontFamily: FontFamily.regular,
  },
  contentScroll: {flexGrow: 1, paddingVertical: 20},
  contentTextContainer: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeading: {
    fontSize: FontSize.medium,
    fontWeight: '600',
    fontFamily: FontFamily.bold,
    color: Colors.heading,
  },
  timeText: {
    fontSize: FontSize.small - 2,
    fontWeight: '600',
    fontFamily: FontFamily.bold,
    color: Colors.heading,
  },
  contentDesc: {
    fontSize: FontSize.medium - 2,
    fontWeight: '400',
    fontFamily: FontFamily.regular,
    color: Colors.heading,
    width: '80%',
  },
});
