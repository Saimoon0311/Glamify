import React from 'react';
import {View, Text} from 'react-native';
import {Touchable} from '@/Components/Touchable';
import SafeAreaWraper from '@/Components/SafeAreaView';
import ControlInput from '@/Components/ControlInput';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import styles from './styles';
import BackButton from '@/Components/BackButton';
import useForgot from './useForgot';

const Forgot = ({navigation: {replace, goBack}}) => {
  const {handleSubmit, errors, control, onSubmit} = useForgot({replace});

  return (
    <SafeAreaWraper>
      <BackButton />
      <KeyBoardWraper>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Forgot Password</Text>
            <Text style={styles.desc}>
              Provide your account's email for which you want to reset your
              password.
            </Text>
            <ControlInput
              {...{
                name: 'email',
                label: 'E-mail',
                placeholder: 'Enter your email or phone',
                control,
                errors,
                isRequired: true,
              }}
            />
            <Touchable
              onPress={handleSubmit(onSubmit)}
              Opacity={0.8}
              style={styles.btnStyle}>
              <Text style={styles.btnTitle}>Send Reset Password Link</Text>
            </Touchable>
            <Text onPress={goBack} style={styles.cancel}>
              Cancel
            </Text>
          </View>
        </View>
      </KeyBoardWraper>
    </SafeAreaWraper>
  );
};

export default Forgot;
