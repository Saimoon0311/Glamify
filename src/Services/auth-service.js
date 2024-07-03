import API from './API';
import {Platform} from 'react-native';
const isIos = Platform.OS === 'ios';
class AuthService {
  static register = param => {
    const formData = new FormData();
    Object.entries(param).forEach(([key, val]) => formData.append(key, val));
    console.log(formData);
    return API.post('/user/register', formData);
  };
  static login = param => API.post('/login', param);

  static verifyUser = _ => API.get('/verify');

  static forgot = param => API.post('/forgot-password', param);

  static verification = param => API.post('/verify-code', param);
  static updatePassword = param => API.post('/update-password', param);
  static updateProfile = param => {
    const formData = new FormData();
    Object.entries(param).forEach(([key, val]) => {
      if (key == 'profile_photo' && val?.type)
        formData.append(key, {
          name: val?.fileName || val?.name || 'image',
          type: val?.type,
          uri: isIos ? val?.uri.replace('file://', '') : val?.uri,
        });
      else formData.append(key, val);
    });
    console.log(formData);
    return API.post('/user/update-profile', formData);
  };
  static deleteAccount = _ => API.post('/user/delete-account');
}

export default AuthService;
