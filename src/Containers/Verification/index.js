import React from 'react';
import {View, Text, Image} from 'react-native';
import {Touchable} from '@/Components/Touchable';
import {back} from '@/Assets/Images';
import SafeAreaWraper from '@/Components/SafeAreaView';
import ControlInput from '@/Components/ControlInput';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import styles from './styles';
import useVerification from './useVerification';

const Verification = ({navigation: {goBack, replace}, route}) => {
  const {
    handleSubmit,
    errors,
    control,
    userMail,
    onSubmit,
    timer,
    getTime,
    resendCode,
  } = useVerification({replace, route});

  console.log(route.params);

  return (
    <SafeAreaWraper>
      <KeyBoardWraper>
        <View style={styles.mainContainer}>
          <Touchable onPress={goBack} style={styles.backImg}>
            <Image source={back} width={null} height={null} alt="Back Arrow" />
          </Touchable>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>OTP Verification</Text>
            <Text style={styles.desc}>
              Enter OTP (One tone password) sent to {userMail}
            </Text>
            <ControlInput
              {...{
                name: 'code',
                label: '',
                // label: 'Verification',
                placeholder: 'Enter your verification code',
                control,
                errors,
                isRequired: true,
              }}
            />
            <Text style={styles.timer}>{getTime(timer)} minutes</Text>
            <Touchable
              onPress={handleSubmit(onSubmit)}
              Opacity={0.8}
              style={styles.btnStyle}>
              <Text style={styles.btnTitle}>Verify Code</Text>
            </Touchable>
            <Touchable
              onPress={resendCode}
              disabled={timer == 0 ? false : true}>
              <Text style={styles.cancel}>Resend Code</Text>
            </Touchable>
          </View>
        </View>
        {/* <ImageBackground
          style={styles.imageContainer}
          source={otp_bg}
          resizeMode="stretch"
        /> */}
      </KeyBoardWraper>
    </SafeAreaWraper>
  );
};

export default Verification;
