import React from 'react';
import {View, Text} from 'react-native';
import {Touchable} from '@/Components/Touchable';
import SafeAreaWraper from '@/Components/SafeAreaView';
import ControlInput from '@/Components/ControlInput';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import styles from './styles';
import MarkItem from '@/Components/MarkItem';
import BackButton from '@/Components/BackButton';
import useNewPassword from './useNewPassword';

const NewPassword = ({navigation: {goBack, replace}, route}) => {
  const {handleSubmit, errors, control, onSubmit} = useNewPassword({
    replace,
    route,
  });

  return (
    <SafeAreaWraper>
      <BackButton />
      <KeyBoardWraper>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>New Password</Text>
            <View style={styles.marker}>
              <MarkItem>Password must be at least 8 characters long.</MarkItem>
              <MarkItem>
                Password must contain at least one upper case.
              </MarkItem>
              <MarkItem>One lower case letter.</MarkItem>
              <MarkItem>
                Password must contain at least one number or special character
              </MarkItem>
            </View>
            <View style={{flex: 1, width: '100%', marginTop: 20}}>
              <ControlInput
                {...{
                  name: 'password',
                  label: 'New Password',
                  placeholder: 'Enter your password',
                  control,
                  errors,
                  isRequired: true,
                  isSecure: true,
                  type: 'password',
                }}
              />
              <ControlInput
                {...{
                  name: 'confirm_password',
                  label: 'Re-type Password',
                  placeholder: 'Enter your confirm password',
                  control,
                  errors,
                  isRequired: true,
                  type: 'password',
                  isSecure: true,
                }}
              />
            </View>
            <Touchable
              Opacity={0.8}
              style={styles.btnStyle}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.btnTitle}>SUBMIT</Text>
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

export default NewPassword;
