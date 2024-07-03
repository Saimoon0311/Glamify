import API from './API';
import {Platform} from 'react-native';
const isIos = Platform.OS === 'ios';

export const bookingHistory = () =>
  API.get('/user/completed-cancelled-bookings');
export const allAssignedBooking = () => API.get('/user/pending-bookings');
export const allBooking = param => API.get('/user/bookings', param);
export const locationAvalability = ({latitude, longitude}) =>
  API.get(`/user/services?lat=${latitude}&long=${longitude}`);
export const getAddsOn = ({_id}) =>
  API.get(`/user/service-details?service_id=${_id}`);
export const getAllSlots = () => API.get(`/time-slots`);
export const getAvailableSlots = param =>
  API.post(`/user/service-availability`, param);
export const getUserAddress = () => API.get(`/user/get-addresses`);
export const addUserAddress = param => API.post(`/user/add-address`, param);
export const getCancelReasons = () => API.get(`/user/cancel-options`);
export const getWalletAmount = () => API.get(`/user/wallet-amount`);
export const getTransactionHistory = () => API.get(`/user/transections`);
export const bookingCancelRequest = param =>
  API.post(`/user/cancel-booking`, param);
// export const sendFeedback = param => API.post(`/user/feedback`, param);

export const sendFeedback = param => {
  const formData = new FormData();
  Object.entries(param).forEach(([key, val]) => {
    if (key == 'feedback_image' && val?.type)
      formData.append(key, {
        name: val?.fileName || val?.name || 'image',
        type: val?.type,
        uri: isIos ? val?.uri.replace('file://', '') : val?.uri,
      });
    else formData.append(key, val);
  });
  console.log(formData);
  return API.post('/user/feedback', formData);
};
