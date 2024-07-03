import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {Touchable} from '@/Components/Touchable';
import styles from './styles';
import {photo, visacard} from '@/Assets/Images';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const DebitCard = ({item, index, cardHandler, chooseCard}) => {
  // console.log('id', item);
  return (
    <View>
      <Touchable Opacity={0.8} onPress={() => chooseCard(item)}>
        <ImageBackground
          source={visacard}
          style={styles.background}
          imageStyle={styles.imageStyle}>
          <View style={styles.card}>
            <View>
              <Text style={styles.number}>
                {`****  ****  ****  ${item?.card?.last4}`}
              </Text>
            </View>
            <View style={styles.detail}>
              <Text
                style={
                  styles.expDate
                }>{`${item?.card?.exp_month}/${item?.card?.exp_year}`}</Text>
            </View>
          </View>
        </ImageBackground>
      </Touchable>
      <View style={styles.imageCard}>
        <BouncyCheckbox
          size={20}
          fillColor="#231F20"
          unfillColor="#FFFFFF"
          text="Use as default payment method"
          disableBuiltInState
          textStyle={styles.checkBoxTitle}
          // onPress={onService}
          iconStyle={styles.checkBoxIcon}
          // isChecked={Boolean}
          // isChecked={Boolean(value == 'services')}
        />
        <Touchable>
          <Image source={photo} style={styles.photo} />
        </Touchable>
      </View>
    </View>
  );
};

export default DebitCard;
