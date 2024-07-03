import React, {useEffect} from 'react';
import {Controller} from 'react-hook-form';
import {Text, View, TextInput, Image, StyleSheet, Keyboard} from 'react-native';
import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {Touchable} from './Touchable';
import {eye, eye_off} from '@/Assets/Images';

const ControlInput = ({
  minLength,
  label,
  placeholder,
  isRequired,
  isSecure,
  control,
  name,
  message,
  errors,
  type,
  textBox,
  defaultValue,
  // defaultValue = '',
  isDisabled = false,
}) => {
  const [show, setShow] = React.useState(!isSecure);
  const handleClick = () => setShow(!show);
  const keyboardType = ['phone', 'code'].includes(name) ? 'numeric' : 'default';
  const [focus, setFocus] = React.useState(false);
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
    <View style={styles.mainContainer}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        render={({field: {onChange, value}}) => (
          <View>
            <TextInput
              onBlur={onBlur}
              onFocus={onFocus}
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
                secureTextEntry: !show,
                onChangeText: onChange,
                placeholderTextColor: Colors.black,
              }}
            />
            {isSecure && (
              <Touchable style={styles.eyeContainer} onPress={handleClick}>
                <Image
                  alt="Eye"
                  source={!show ? eye_off : eye}
                  {...{marginRight: 2}}
                />
              </Touchable>
            )}
          </View>
        )}
        {...{
          name,
          control,
          defaultValue,
          rules: {required: Boolean(isRequired), minLength},
        }}
      />
      {message && !errors[name]?.message && (
        <Text style={styles.description}>{message}</Text>
      )}
      <Text style={styles.error}>{errors[name]?.message}</Text>
    </View>
  );
};

export default ControlInput;
const styles = StyleSheet.create({
  mainContainer: {width: '100%'},
  label: {
    color: Colors.description,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    fontWeight: '400',
    marginBottom: 5,
  },
  Input: {
    paddingLeft: 17.5,
    borderColor: Colors.border,
    borderWidth: 1,
    height: 65,
    fontSize: FontSize.medium,
    fontFamily: FontFamily.regular,
    color: Colors.heading,
  },
  eyeContainer: {
    top: 12.5,
    right: 20,
    width: 40,
    height: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  description: {
    fontFamily: FontFamily.regular,
    fontWeight: '400',
    marginVertical: 5,
    color: Colors.placeholder,
  },
  error: {
    fontWeight: '400',
    marginVertical: 5,
    color: Colors.error,
    fontFamily: FontFamily.regular,
  },
});
