import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import KeyBoardWraper from '@/Components/KeyBoardWraper';
import ControlInput from '@/Components/ControlInput';
import {Touchable} from '@/Components/Touchable';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import UseAddAddressDetails from './UseAddAddressDetails';
const {width, height} = Dimensions.get('window');

const AddAddressDetails = ({navigation, route}) => {
  const {errors, control, handleSubmit, onSubmit} = UseAddAddressDetails({
    navigation,
    route,
  });
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', paddingVertical: 20}}>
        <Text style={styles.cardText}>Add Location Details</Text>
      </View>
      <KeyBoardWraper>
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
              name: 'description',
              label: 'Additonal Note',
              placeholder: '',
              control,
              errors,
              textBox: true,
            }}
          />
        </View>
      </KeyBoardWraper>
      <View style={styles.button}>
        <Touchable
          onPress={handleSubmit(onSubmit)}
          Opacity={0.8}
          style={styles.btnStyle}>
          <Text style={styles.btnTitle}>Save Location</Text>
        </Touchable>
      </View>
    </View>
  );
};

export default React.memo(AddAddressDetails);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: width * 0.05,
    width: width,
  },
  bar: {
    height: 5,
    borderRadius: 3,
    width: width * 0.15,
    marginHorizontal: width * 0.425,
    marginTop: 10,
    backgroundColor: Colors.darkGray,
  },
  inputContainer: {
    paddingTop: 20,
    width: width * 0.9,
    alignItems: 'center',
  },
  cardText: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: FontSize.regular,
    fontFamily: FontFamily.bold,
  },
  button: {alignItems: 'center'},
  btnStyle: {
    width: width * 0.9,
    height: 60,
    backgroundColor: Colors.heading,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: Colors.white,
    fontSize: FontSize.medium + 2,
    fontWeight: '400',
    fontFamily: FontFamily.bold,
  },
  label: {
    color: Colors.description,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
    marginBottom: 5,
  },
  cardStyle: {
    borderWidth: 1,
    backgroundColor: Colors.white,
    textColor: Colors.black,
    placeholderColor: Colors.lightGray,
  },
  mainContainer: {width: '100%'},
  label: {
    color: Colors.description,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
    marginBottom: 5,
  },
  Input: {
    borderWidth: 1,
    height: 65,
    borderColor: Colors.border,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: Colors.heading,
  },
});
