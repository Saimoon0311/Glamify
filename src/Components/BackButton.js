import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Touchable} from './Touchable';
import {back} from '@/Assets/Images';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const {goBack} = useNavigation();
  return (
    <Touchable onPress={goBack} style={styles.backImg}>
      <Image source={back} width={null} height={null} />
    </Touchable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backImg: {
    alignSelf: 'flex-start',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 10,
  },
});
