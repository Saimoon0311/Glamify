import React from 'react';
import {View, Text} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import ControlInput from '@/Components/ControlInput';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import SocialIcons from '@/Components/SocialIcons';
import {Touchable} from '@/Components/Touchable';
import styles from './styles';
import BackButton from '@/Components/BackButton';
import useLogin from './useLogin';

const LogIn = ({navigation: {navigate}}) => {
  const {handleSubmit, errors, control, onSubmit, signUpRoute, forgotRoute} =
    useLogin({navigate});

  return (
    <SafeAreaWraper>
      <BackButton />
      <KeyBoardWraper>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Login</Text>
            <ControlInput
              {...{
                name: 'email',
                label: 'E-mail',
                placeholder: 'Enter your email',
                control,
                errors,
                isRequired: true,
              }}
            />

            <ControlInput
              {...{
                name: 'password',
                label: 'Password',
                placeholder: 'Enter your password',
                control,
                errors,
                type: 'password',
                isRequired: true,
                isSecure: true,
              }}
            />
          </View>
          <View style={styles.subContainer}>
            <Text onPress={forgotRoute} style={styles.subHeading}>
              Forgot password?
            </Text>
            <Touchable
              onPress={handleSubmit(onSubmit)}
              style={styles.btnStyle}
              Opacity={0.8}>
              <Text style={styles.btnTitle}>LOGIN</Text>
            </Touchable>
            <Text style={styles.subHeading}>
              Already have an account?{' '}
              <Text
                onPress={signUpRoute}
                style={[
                  styles.subHeading,
                  {fontWeight: '700', textDecorationLine: 'underline'},
                ]}>
                Sign Up
              </Text>
            </Text>
            <SocialIcons />
          </View>
        </View>
      </KeyBoardWraper>
    </SafeAreaWraper>
  );
};

export default LogIn;
