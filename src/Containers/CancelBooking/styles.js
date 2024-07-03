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
    borderBottomWidth: 0.5,
    marginTop: 20,
    // width: 330,
    position: 'absolute',
    width: '85%',
    bottom: -2,
    left: 35,
    borderBottomColor: 'rgba(151, 151, 151, 0.5)',
  },
  subContainer: {
    marginTop: 20,
    // alignItems: 'center',
  },
  search: {
    // marginTop: 10,
  },
  headerText: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: FontSize.regular,
    fontFamily: FontFamily.regular,
  },
  headerText: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: FontSize.regular,
    fontFamily: FontFamily.semiBold,
  },
  title: {
    margin: 7.5,
    color: Colors.black,
    textAlign: 'left',
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
  },
  button: {alignItems: 'center', marginTop: 80},
  btnStyle: {
    width: width * 0.9,
    height: 60,
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
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 10,
  },
});

export default styles;
