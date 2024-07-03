import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FontSize, FontFamily} from '@/Theme/Variables';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    padding: 20,
  },
  box: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 120,
  },
  cardImg: {width: 80, height: 80, borderRadius: 15},
  cardTxt: {
    fontSize: FontSize.regular + 2,
    fontFamily: FontFamily.bold,
    fontWeight: '700',
    color: Colors.heading,
  },
  bgImage: {
    width: width,
    height: 100,
    alignItems: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: Colors.white,
    height: 65,
    width: 265,
    marginTop: -35,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-around',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  price: {
    marginTop: 3,
    fontSize: FontSize.xLarge,
    fontWeight: FontFamily.bold,
    color: Colors.black,
  },
  heading: {
    fontSize: FontSize.small + 2,
    fontWeight: FontFamily.bold,
    color: Colors.black,
  },
});

export default styles;
