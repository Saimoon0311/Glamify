import React from 'react';
import {View, Text} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import styles from './styles';
import {Touchable} from '@/Components/Touchable';

const Updated = ({navigation}) => {
  const loginRoute = () => navigation.replace('Login');
  return (
    <SafeAreaWraper>
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Password Updated</Text>
        <Text style={styles.subHeading}>Your password has been updated</Text>
        <Touchable onPress={loginRoute} Opacity={0.8} style={styles.btnStyle}>
          <Text style={styles.btnTitle}>LOGIN</Text>
        </Touchable>
      </View>
    </SafeAreaWraper>
  );
};

export default Updated;
