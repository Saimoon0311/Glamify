import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    backgroundColor: Colors.pink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal: 17.5,
  },
  btnStyle: {
    width: width * 0.9,
    marginTop: 10,
    height: height * 0.0685,
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
    fontWeight: '700',
  },
  container: {paddingTop: 0, height: height * 0.7},
  heading: {
    fontSize: FontSize.regular,
    color: Colors.black,
    fontWeight: '600',
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: FontFamily.bold,
  },
  subHeading: {
    fontSize: FontSize.small + 1,
    color: Colors.black,
    fontWeight: '300',
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: FontFamily.regular,
  },
  title: {
    fontSize: FontSize.regular - 2,
    color: Colors.black,
    fontWeight: '600',
    fontFamily: FontFamily.bold,
  },
  listSpace: {paddingHorizontal: 20, paddingVertical: 20},
  listView: {
    flex: 1,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 20,
  },
  listStyle: {
    width: '30%',
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 10,
    borderColor: Colors.black,
    alignSelf: 'flex-start',
  },
  listText: {
    color: Colors.black,
    fontSize: FontSize.medium,
    fontWeight: '300',
    fontFamily: FontFamily.regular,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.135,
    backgroundColor: Colors.white,
    paddingVertical: 10,
  },
  text: {
    fontSize: FontSize.medium,
    fontWeight: '600',
    fontFamily: FontFamily.bold,
    color: Colors.heading,
    textAlign: 'center',
  },
});

export default styles;
