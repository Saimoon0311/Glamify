import React from 'react';
import {View, Text} from 'react-native';
import {Touchable} from '@/Components/Touchable';
import SafeAreaWraper from '@/Components/SafeAreaView';
import ControlInput from '@/Components/ControlInput';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import SocialIcons from '@/Components/SocialIcons';
import styles from './styles';
import BackButton from '@/Components/BackButton';
import useSignUp from './useSignUp';

const SignUp = ({navigation: {navigate}}) => {
  const {handleSubmit, errors, control, onSubmit, logInRoute} = useSignUp({
    navigate,
  });

  return (
    <SafeAreaWraper>
      <BackButton />
      <KeyBoardWraper>
        <View style={{paddingHorizontal: 20, paddingBottom: 10}}></View>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Sign Up</Text>
            <ControlInput
              {...{
                name: 'name',
                label: 'Full name',
                placeholder: 'Enter your full name',
                control,
                errors,
                isRequired: true,
              }}
            />
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
                name: 'phone',
                label: 'Contact number',
                placeholder: 'Enter your you phone number',
                control,
                errors,
                type: 'phone',
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
                message: `Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character`,
              }}
            />
            <ControlInput
              {...{
                name: 'confirm_password',
                label: 'ConfirmPassword',
                placeholder: 'Enter you confirm password',
                control,
                errors,
                type: 'password',
                isRequired: true,
                isSecure: true,
              }}
            />
          </View>
          <Touchable
            Opacity={0.8}
            onPress={handleSubmit(onSubmit)}
            style={styles.btnStyle}>
            <Text style={styles.btnTitle}>SIGN UP</Text>
          </Touchable>
          <Text
            style={[styles.subHeading, {fontWeight: '400', marginBottom: 20}]}>
            Already have an account?{' '}
            <Text
              onPress={logInRoute}
              style={[
                styles.subHeading,
                {fontWeight: '600', textDecorationLine: 'underline'},
              ]}>
              Sign In
            </Text>{' '}
          </Text>
          <SocialIcons />
        </View>
      </KeyBoardWraper>
    </SafeAreaWraper>
  );
};

export default SignUp;
