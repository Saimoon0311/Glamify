import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Keyboard,
} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {Controller} from 'react-hook-form';

const {width, height} = Dimensions.get('window');

const InputBox = ({
  placeholder,
  type,
  name,
  control,
  errors,
  message,
  isRequired,
  isDisabled = false,
  keyboardType,
}) => {
  const [focus, setFocus] = useState(false);
  function onFocus() {
    setFocus(true);
  }
  function onBlur() {
    setFocus(false);
  }

  useEffect(() => {
    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      setFocus(false);
      Keyboard.dismiss();
    });
    return () => {
      keyboardHide.remove();
    };
  }, []);

  return (
    // <View>
    //   <TextInput
    //     multiline={true}
    //     numberOfLines={4}
    //     onBlur={onBlur}
    //     textAlignVertical="top"
    //     onFocus={onFocus}
    //     type={type}
    //     {...{
    //       value,
    //       placeholder,
    //       keyboardType,
    //       isDisabled,
    //       style: {
    //         ...styles.Input,
    //         borderColor: focus ? Colors.black : Colors.border,
    //       },
    //       onChangeText: onChange,
    //       placeholderTextColor: Colors.black,
    //     }}
    //   />
    // </View>
    <View style={styles.mainContainer}>
      <Controller
        render={({field: {onChange, value}}) => (
          <View>
            <TextInput
              onBlur={onBlur}
              onFocus={onFocus}
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
              type={type}
              {...{
                value,
                onBlur,
                isDisabled,
                placeholder,
                keyboardType,
                style: {
                  ...styles.Input,
                  borderColor: focus ? Colors.black : Colors.border,
                },
                onChangeText: onChange,
                placeholderTextColor: Colors.black,
              }}
            />
          </View>
        )}
        {...{
          name,
          control,
          rules: {required: Boolean(isRequired)},
        }}
      />
      {message && !errors[name]?.message && (
        <Text style={styles.description}>{message}</Text>
      )}
      <Text style={styles.error}>{errors[name]?.message}</Text>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    padding: 15,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    paddingTop: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minHeight: height * 0.2,
    maxHeight: height * 0.2,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: Colors.heading,
  },
  mainContainer: {
    width: '100%',
  },
  description: {
    fontFamily: FontFamily.regular,
    fontWeight: '400',
    marginVertical: 5,
    color: Colors.placeholder,
  },
  error: {
    color: Colors.error,
    fontFamily: FontFamily.regular,
    marginVertical: 5,
    fontWeight: '400',
  },
});
