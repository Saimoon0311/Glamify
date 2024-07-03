import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {back, clock, right_arrow} from '@/Assets/Images';
import {Touchable} from '@/Components/Touchable';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';

const {width, height} = Dimensions.get('window');

const ServiceList = ({onPressService, item, index}) => (
  <Touchable
    Opacity={0.7}
    style={{
      width: width * 0.925,
      height: height * 0.1225,
      backgroundColor: Colors.pink,
      justifyContent: 'center',
      marginVertical: 6.5,
      //   paddingHorizontal: 12.5,
      paddingHorizontal: width * 0.03,
    }}
    onPress={() => onPressService({...item})}>
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: width * 0.65,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: FontSize.medium + 2,
              color: Colors.black,
              fontWeight: '600',
              width: width * 0.525,
            }}>
            {item.title}
          </Text>
          <Image
            source={clock}
            style={{
              width: 10,
              height: 10,
              resizeMode: 'contain',
              tintColor: Colors.black,
              marginLeft: 10,
            }}
          />
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: FontSize.small - 2,
              color: Colors.black,
              fontWeight: '600',
              marginLeft: 5,
            }}>
            {item.time} min
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: FontSize.medium + 2,
              color: Colors.black,
              fontWeight: '600',
            }}>
            ${item.price}
          </Text>
          <Image
            source={back}
            style={{
              marginLeft: 5,
              height: 10,
              resizeMode: 'contain',
              transform: [{rotate: '180deg'}],
            }}
          />
        </View>
      </View>
      <View style={{marginTop: 5}}>
        <Text
          numberOfLines={2}
          style={{
            fontFamily: FontFamily.regular,
            fontSize: FontSize.medium - 2,
            color: Colors.black,
            fontWeight: '400',
          }}>
          {item.description}
        </Text>
      </View>
    </View>
  </Touchable>
);

export default ServiceList;
