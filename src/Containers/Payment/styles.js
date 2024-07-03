import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  headerTextBox: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  headerText: {
    textAlign: 'center',
    fontSize: FontSize.medium + 2,
    fontFamily: FontFamily.semiBold,
    fontWeight: '400',
  },
  background: {
    width: width * 0.9,
    height: height * 0.275,
    resizeMode: 'contain',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  card: {
    top: '40%',
    position: 'absolute',
    alignItems: 'center',
  },
  detail: {
    paddingTop: 40,
    // flexDirection: 'row',
    justifyContent: 'flex-end',
    width: width * 0.8,
  },
  number: {
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.white,
    fontSize: FontSize.large - 2,
    fontFamily: FontFamily.regular,
  },
  name: {
    textAlign: 'left',
    fontWeight: '400',
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: FontSize.medium + 2,
    fontFamily: FontFamily.regular,
  },
  expDate: {
    textAlign: 'right',
    fontWeight: '400',
    color: Colors.white,
    fontSize: FontSize.medium + 2,
    fontFamily: FontFamily.regular,
  },
  checkBoxTitle: {
    color: Colors.black,
    fontWeight: '300',
    fontFamily: FontFamily.regular,
    fontSize: FontSize.medium - 2,
    textDecorationLine: 'none',
  },
  checkBoxIcon: {
    borderRadius: 0,
    borderColor: '#231F2080',
  },

  imageCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  plusCard: {
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
  plus: {
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
  photo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
