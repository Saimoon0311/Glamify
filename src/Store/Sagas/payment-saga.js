import {call, put, takeLatest, delay} from 'redux-saga/effects';
import Types from '../sagas-types';
import * as PaymentService from '@/Services/payment-service';
import {createPaymentMethod} from '@stripe/stripe-react-native';

function* setPaymentCardSaga({payload}) {
  try {
    const addCardPay = () =>
      createPaymentMethod({
        paymentMethodType: 'Card',
        paymentMethodData: payload.card,
      });

    const {paymentMethod} = yield call(addCardPay);
    console.log('paymentID', paymentMethod.id);
    const param = {payment_method: paymentMethod.id};
    const {ok, data} = yield call(PaymentService.setPaymentCard, param);
    if (ok) {
      yield put({type: Types.Payment_Update, payload: {cardAdded: true}});
      delay(1000);
      yield put({type: Types.Payment_Update, payload: {cardAdded: false}});
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* getAllPaymentCardSaga() {
  const {ok, data, originalError} = yield call(PaymentService.getPaymentCard);
  if (ok) {
    const {payment_methods} = data || {};
    yield put({
      type: Types.Payment_Update,
      payload: {paymentCards: payment_methods.data},
    });
  } else {
    console.log(ok, data, originalError);
  }
}

function* bookingSaga() {
  yield takeLatest(Types.cardAdd_Dispatch, setPaymentCardSaga);
  yield takeLatest(Types.getCards_Dispatch, getAllPaymentCardSaga);
}

export default bookingSaga;
