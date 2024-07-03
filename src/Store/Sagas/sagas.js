import {all} from 'redux-saga/effects';
import Auth_Saga from './auth-saga';
import Booking_Saga from './booking-saga';
import Payment_Saga from './payment-saga';

function* rootSaga() {
  yield all([Auth_Saga(), Booking_Saga(), Payment_Saga()]);
}

export default rootSaga;
