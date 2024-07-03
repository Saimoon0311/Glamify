// import * as Keychain from 'react-native-keychain';
import SInfo from 'react-native-sensitive-info';

// const storeToken = (key, value) => Keychain.setGenericPassword(key, value);

// const getToken = () => Keychain.getGenericPassword();

// const removeToken = () => Keychain.resetGenericPassword();

const options = {
  sharedPreferencesName: 'mySharedPrefs',
  keychainService: 'myKeychain',
};

const storeToken = (key, value) => SInfo.setItem(key, value, options);

const getToken = () => SInfo.getItem('USER/TOKEN', options);

const removeToken = () => SInfo.deleteItem('USER/TOKEN', options);

export {storeToken, getToken, removeToken};
