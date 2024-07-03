import React from 'react';
import {View, Text} from 'react-native';
import SafeAreaWraper from '@/Components/SafeAreaView';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import ControlInput from '@/Components/ControlInput';
import UseAddAddressDetails from './UseAddAddressDetails';
import {Touchable} from '@/Components/Touchable';
import styles from './styles';

const AddAddressDetails = ({navigation, route}) => {
  const {errors, control, handleSubmit, onSubmit} = UseAddAddressDetails({
    navigation,
    route,
  });

  return (
    <SafeAreaWraper>
      <KeyBoardWraper>
        <View style={styles.bar} />
        <View style={styles.container}>
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <Text style={styles.cardText}>Add Location Details</Text>
          </View>
          <View style={styles.inputContainer}>
            <ControlInput
              {...{
                name: 'title',
                label: 'Location Title',
                placeholder: '',
                control,
                errors,
                isRequired: true,
              }}
            />
            <ControlInput
              {...{
                name: 'address',
                label: 'Street/Floor',
                placeholder: '',
                control,
                errors,
                isRequired: true,
              }}
            />
            <ControlInput
              {...{
                name: 'reason',
                label: 'Write here...',
                placeholder: '',
                control,
                errors,
                textBox: true,
              }}
            />
          </View>
          <View style={styles.button}>
            <Touchable
              onPress={handleSubmit(onSubmit)}
              Opacity={0.8}
              style={styles.btnStyle}>
              <Text style={styles.btnTitle}>Save Location</Text>
            </Touchable>
          </View>
        </View>
      </KeyBoardWraper>
    </SafeAreaWraper>
  );
};

export default React.memo(AddAddressDetails);
