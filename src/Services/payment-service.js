import API from './API';

export const setPaymentCard = param => API.post('/user/payment-method', param);
export const getPaymentCard = () => API.get('/user/payment-methods');
