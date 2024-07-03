import {Dimensions, Platform} from 'react-native';
import {CardStyleInterpolators} from '@react-navigation/stack';
const {width, height} = Dimensions.get('window');

const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  black: '#000000',
  black2: '#222222',
  text: '#212529',
  primary: '#E14032',
  success: '#28a745',
  error: 'red',
  gray: '#858585',
  gray2: '#4F4F4F',
  lightGray: '#979797',
  darkGray: '#9B9B9B',
  placeholder: '#C4C4C4',
  heading: '#231F20',
  description: '#9796A1',
  border: '#EEEEEE',
  pink: '#FAF0E7',
  yellow: '#FFBA49',
  // pinkOld: '#ECDFDB',
};

const NavigationColors = {
  primary: Colors.primary,
};

/**
 * FontSize
 */
const FontSize = {
  small: 12,
  medium: 16,
  regular: 20,
  large: 26,
  xLarge: 30,
  width,
  height,
};

const FontFamily = {
  regular: 'ProximaNova-Regular',
  bold: 'ProximaNova-Bold',
  semiBold: 'ProximaNova-Semibold',
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

const topTabsStyles = {
  tabBarLabelStyle: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.semiBold,
    fontWeight: '600',
    textTransform: 'none',
  },
  tabBarInactiveTintColor: '#22222280',
  tabBarActiveTintColor: Colors.heading,
  tabBarIndicatorStyle: {
    backgroundColor: Colors.heading,
    marginBottom: 5,
    // marginHorizontal: 5,
    // width: FontSize.width / 4,
    // left: FontSize.width / 8,
  },
  tabBarPressColor: '#FAF0E7',
  lazy: true,
};

const modalStyles = {
  locationModal: {
    presentation: 'transparentModal',
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
    gestureEnabled: true,
    cardOverlayEnabled: true,
    gestureResponseDistance: 300,
    headerShown: false,
  },
  locationScreen: {
    width: '100%',
    backgroundColor: Colors.white,
    // height: '100%',
    height: Platform.OS == 'ios' ? '85.5%' : '89.8%',
  },
  locationScreen2: {
    height: '60%',
    width: '100%',
    backgroundColor: Colors.black,
  },
};

const screenOptions = {
  headerTitleStyle: {
    fontFamily: FontFamily.semiBold,
    color: Colors.heading,
    fontWeight: '600',
  },
  gestureEnabled: true,
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerTintColor: Colors.black,
};

export {
  Colors,
  FontSize,
  FontFamily,
  modalStyles,
  MetricsSizes,
  topTabsStyles,
  screenOptions,
  NavigationColors,
};
