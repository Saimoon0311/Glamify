import {Settings, Platform} from 'react-native';
import {call, put, takeLatest, select, delay} from 'redux-saga/effects';
import RNBootSplash from 'react-native-bootsplash';
import AuthService from '@/Services/auth-service';
import {getToken, removeToken, storeToken} from '@/Services/storage';
import {upadteAuth} from '../Actions/auth-action';
import Types from '../sagas-types';
import {showError, showSuccess} from '@/Services/SnackBar';

function* loginSaga(action) {
  const {ok, data, originalError} = yield call(
    AuthService.login,
    action.payload,
  );
  if (ok) {
    const {token, user} = data;
    storeToken('USER/TOKEN', token);
    console.log('token', token);
    // console.log('user', user);
    yield put(upadteAuth({isLogin: true, token, user}));
    showSuccess(data?.message);
  } else {
    const message = data?.message || originalError?.message;
    showError(message);
  }
}

function* signUpSaga(action) {
  const {ok, data, originalError} = yield call(
    AuthService.register,
    action.payload,
  );
  if (ok) {
    yield put(upadteAuth({isRegister: true}));
    showSuccess(data?.message);
    delay(1000);
    yield put(upadteAuth({isRegister: false}));
  } else {
    const message = data?.message || originalError?.message;
    showError(message);
  }
}

function* logOutSaga() {
  try {
    yield call(removeToken);
    yield put({type: Types.LogOut});
  } catch (error) {
    console.log(error);
  }
}

function* verifyUserSaga() {
  try {
    if (!Settings.get('hasOpened') && Platform.OS === 'ios') {
      yield call(removeToken);
      Settings.set({hasOpened: true});
    }
    const token = yield call(getToken) || {};
    console.log('verify', token);
    if (token) {
      yield put(upadteAuth({token}));
      const {ok, data} = yield call(AuthService.verifyUser);
      if (ok) yield put(upadteAuth({user: data.user, isLogin: true}));
    }
    delay(1000);
    RNBootSplash.hide({fade: true});
  } catch (error) {
    RNBootSplash.hide({fade: true});
  }
}
function* forgotUserSaga(action) {
  const {ok, data, originalError} = yield call(
    AuthService.forgot,
    action.payload,
  );
  if (ok) {
    yield put(upadteAuth({forgot: true}));
    showSuccess(data?.message);
    delay(1000);
    yield put(upadteAuth({forgot: false}));
  } else {
    const message = data?.message || originalError?.message;
    showError(message);
  }
}
function* verificationSaga(action) {
  const {ok, data, originalError} = yield call(
    AuthService.verification,
    action.payload,
  );
  if (ok) {
    yield put(upadteAuth({verification: true, verifyToken: data?.token}));
    showSuccess(data?.message);
    delay(1000);
    yield put(upadteAuth({verification: false}));
  } else {
    const message = data?.message || originalError?.message;
    showError(message);
  }
}
function* updatePasswordSaga(action) {
  const {ok, data, originalError} = yield call(
    AuthService.updatePassword,
    action.payload,
  );
  if (ok) {
    yield put(upadteAuth({update: true, verifyToken: ''}));
    showSuccess(data?.message);
    delay(1000);
    yield put(upadteAuth({update: false}));
  } else {
    const message = data?.message || originalError?.message;
    showError(message);
  }
}

function* updateProfileSaga(action) {
  const {ok, data, originalError} = yield call(
    AuthService.updateProfile,
    action.payload,
  );
  if (ok) {
    const {user} = data;
    yield put(upadteAuth({update: true, user}));
    showSuccess(data?.message);
  } else {
    const message = data?.message || originalError?.message;
    showError(message);
  }
}

function* deleteAccountSaga() {
  const {ok, data, originalError} = yield call(AuthService.deleteAccount);
  console.log('token', {ok, data, originalError});
  if (ok) {
    yield call(logOutSaga);
    showSuccess(data?.message);
  } else {
    const message = data?.message || originalError?.message;
    showError(message);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* authSaga() {
  yield takeLatest(Types.login_Dispatch, loginSaga);
  yield takeLatest(Types.signUp_Dispatch, signUpSaga);
  yield takeLatest(Types.logOut_Dispatch, logOutSaga);
  yield takeLatest(Types.verify_Dispatch, verifyUserSaga);
  yield takeLatest(Types.forgot_Dispatch, forgotUserSaga);
  yield takeLatest(Types.verification_Dispatch, verificationSaga);
  yield takeLatest(Types.update_Dispatch, updatePasswordSaga);
  yield takeLatest(Types.update_Profile, updateProfileSaga);
  yield takeLatest(Types.DeleteAccount_Dispatch, deleteAccountSaga);
}

export default authSaga;
