import {create} from 'apisauce';
import {baseURL} from '@/Config/Constants';
import {store} from '@/Store/store';
import {upadteAuth} from '@/Store/Actions/auth-action';

const API = create({
  baseURL: baseURL,
  timeout: 10000,
  timeoutErrorMessage: 'Please try Again server is Busy now',
});

API.addRequestTransform(config => {
  const {Auth} = store.getState();
  store.dispatch(upadteAuth({loading: true}));
  config.headers = {
    Authorization: `Bearer ${Auth.token}`,
  };
  return config;
});

API.addResponseTransform(response => {
  store.dispatch(upadteAuth({loading: false}));
  return response;
});

export default API;
