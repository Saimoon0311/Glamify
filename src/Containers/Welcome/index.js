import React from 'react';
import {View, ImageBackground, Text, Image, SafeAreaView} from 'react-native';
import {welcome, splash} from '@/Assets/Images';
import SocialIcons from '@/Components/SocialIcons';
import {Touchable} from '@/Components/Touchable';
import styles from './styles';

const Welcome = ({navigation: {navigate}}) => {
  const signUpRoute = () => navigate('SignUp');
  const logInRoute = () => navigate('Login');
  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.imageContainer}
      source={welcome}>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <Image source={splash} style={styles.splash} />
          <SocialIcons />
          <Touchable
            Opacity={0.5}
            style={styles.btnStyle}
            onPress={signUpRoute}>
            <Text style={styles.btnTitle}>Signup with email</Text>
          </Touchable>
          <Text style={styles.subHeading}>
            Already have an account?{' '}
            <Text
              onPress={logInRoute}
              style={[styles.subHeading, styles.signInTitle]}>
              Sign In
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Welcome;
