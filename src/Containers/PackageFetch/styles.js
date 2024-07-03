import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: width,
    alignItems: 'center',
    flexDirection: 'row',
    height: height * 0.05,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  cross: {
    height: 15,
    width: 15,
    tintColor: Colors.black,
  },
  heading: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: FontSize.regular,
    fontFamily: FontFamily.bold,
  },
  cardMainContainer: {
    backgroundColor: Colors.white,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  time: {
    color: Colors.gray,
    fontSize: FontSize.small - 2,
    fontFamily: FontFamily.regular,
    marginLeft: 4.5,
  },
  price: {
    color: Colors.heading,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.bold,
  },
  icon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: Colors.gray,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2.5,
  },
  row: {
    flexDirection: 'row',
    paddingTop: 2.5,
    paddingBottom: 5,
  },
  headerTitle: {
    color: Colors.black,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.semiBold,
    marginBottom: 5,
  },
  headerDate: {
    color: Colors.gray,
    fontSize: FontSize.small - 2,
    fontFamily: FontFamily.regular,
    marginLeft: 4.5,
  },
  addOnBadge: {
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 10,
    width: 100,
    borderColor: Colors.black,
  },
  addOnBadgeText: {
    color: Colors.heading,
    fontSize: FontSize.small - 2,
    fontFamily: FontFamily.semiBold,
  },
  addOnBadgeHeading: {
    color: Colors.heading,
    fontSize: FontSize.small,
    fontFamily: FontFamily.bold,
  },
  badgeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badgeMainContainer: {
    marginTop: 10,
    marginBottom: 20,
    paddingBottom: 0,
  },
  line: {
    height: 0.25,
    backgroundColor: Colors.black,
    marginTop: 20,
    width: '110%',
  },
  subContainer: {
    marginTop: 160,
    alignItems: 'center',
  },
  search: {
    marginTop: 20,
  },
  text: {
    color: Colors.gray,
    textAlign: 'center',
    fontSize: FontSize.small,
    fontFamily: FontFamily.regular,
  },
});

export default styles;
