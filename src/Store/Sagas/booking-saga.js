import {call, put, takeLatest, delay} from 'redux-saga/effects';
import Types from '../sagas-types';
// import {showError, showSuccess} from '@/Services/SnackBar';
import * as BookingService from '@/Services/booking-service';
import {showSuccess, showError} from '@/Services/SnackBar';

function* getAllAssignedBooking() {
  const {ok, data, originalError} = yield call(
    BookingService.allAssignedBooking,
  );
  if (ok) {
    const {bookings: assignedBookings} = data || {};
    yield put({type: Types.Booking_Update, payload: {assignedBookings}});
  } else {
    console.log(ok, data, originalError);
  }
}

function* getAllBooking(action) {
  const {ok, data, originalError} = yield call(
    BookingService.allBooking,
    action.payload,
  );
  if (ok) {
    const {bookings} = data || {};
    yield put({type: Types.Booking_Update, payload: {bookings}});
  } else {
    console.log(ok, data, originalError);
  }
}

function* locationAvailabilitySaga(action) {
  const {ok, data, originalError} = yield call(
    BookingService.locationAvalability,
    action.payload,
  );
  if (ok) {
    const {message, categories, zip} = data || {};
    yield put({
      type: Types.Booking_Update,
      payload: {
        message: categories?.length
          ? 'Yes we provide service in this area'
          : message,
        categories,
        zip,
      },
    });
  } else {
    yield put({
      type: Types.Booking_Update,
      payload: {message: ''},
    });
  }
}

function* getAddsOnSaga(action) {
  const {ok, data, originalError} = yield call(
    BookingService.getAddsOn,
    action.payload,
  );
  if (ok) {
    const {service} = data || {};
    yield put({
      type: Types.Booking_Update,
      payload: {addsOn: service?.addons},
    });
  } else {
    console.log(ok, data, originalError);
  }
}

function* getAllSlotsSaga() {
  const {ok, data, originalError} = yield call(BookingService.getAllSlots);
  if (ok) {
    const {timeslots} = data || {};
    yield put({type: Types.Booking_Update, payload: {allSlots: timeslots}});
  } else {
    console.log(ok, data, originalError);
  }
}

function* availableSlotsSaga(action) {
  const {ok, data} = yield call(
    BookingService.getAvailableSlots,
    action.payload,
  );
  console.log(data);
  if (ok) {
    const {message, available} = data || {};
    yield put({type: Types.Booking_Update, payload: {available}});
    delay(1000);
    yield put({type: Types.Booking_Update, payload: {available: false}});
  }
}

function* getAllSaveAddressSaga() {
  const {ok, data, originalError} = yield call(BookingService.getUserAddress);
  if (ok) {
    const {addresses} = data || {};
    yield put({
      type: Types.Booking_Update,
      payload: {
        userAddress: addresses?.map(address => ({
          ...address,
          description: address?.title,
          geometry: {
            location: {lat: Number(address?.lat), lng: Number(address?.long)},
          },
        })),
      },
    });
  } else {
    console.log(ok, data, originalError);
  }
}

function* addUserAddressSaga(action) {
  const {ok, data, originalError} = yield call(
    BookingService.addUserAddress,
    action.payload,
  );
  if (ok) {
    // const {service} = data || {};
    yield put({type: Types.Booking_Update, payload: {addressAdded: true}});
    delay(1000);
    showSuccess(data?.message);
    yield put({type: Types.Booking_Update, payload: {addressAdded: false}});
  } else {
    console.log(ok, data, originalError);
    const message = data?.message || originalError?.message;
    showError(message);
  }
}

function* getAllCancelReasonSaga() {
  const {ok, data, originalError} = yield call(BookingService.getCancelReasons);
  if (ok) {
    const {options} = data || {};
    yield put({type: Types.Booking_Update, payload: {cancelReasons: options}});
  } else {
    console.log(ok, data, originalError);
  }
}

function* getWalletAmountSaga() {
  const {ok, data, originalError} = yield call(BookingService.getWalletAmount);
  if (ok) {
    const {amount} = data || {};
    yield put({type: Types.Booking_Update, payload: {walletAmount: amount}});
  } else {
    console.log(ok, data, originalError);
  }
}

function* getTransactionHistorySaga() {
  const {ok, data, originalError} = yield call(
    BookingService.getTransactionHistory,
  );
  if (ok) {
    const {transactions} = data || {};
    yield put({
      type: Types.Booking_Update,
      payload: {transactionHistory: transactions},
    });
  } else {
    console.log(ok, data, originalError);
  }
}

function* bookingCancelRequestSaga(action) {
  const {ok, data, originalError} = yield call(
    BookingService.bookingCancelRequest,
    action.payload,
  );
  if (ok) {
    yield put({type: Types.Booking_Update, payload: {bookingCancelled: true}});
    showSuccess(data?.message);
    yield put({type: Types.Booking_Update, payload: {bookingCancelled: false}});
  } else {
    console.log(ok, data, originalError);
    const message = data?.message || originalError?.message;
    showError(message);
  }
}

function* getBookingHistorySaga() {
  const {ok, data, originalError} = yield call(BookingService.bookingHistory);
  if (ok) {
    const {bookings} = data || {};
    yield put({
      type: Types.Booking_Update,
      payload: {bookingHistory: bookings},
    });
  } else {
    console.log(ok, data, originalError);
  }
}

function* sendFeedbackSaga(action) {
  const {ok, data, originalError} = yield call(
    BookingService.sendFeedback,
    action.payload,
  );
  console.log('DataFeedback', data);
  console.log('action', action.payload);
  if (ok) {
    // const {service} = data || {};
    yield put({type: Types.Booking_Update, payload: {feedbackSent: true}});
    delay(1000);
    showSuccess(data?.message);
    yield put({type: Types.Booking_Update, payload: {feedbackSent: false}});
  } else {
    console.log(ok, data, originalError);
    const message = data?.message || originalError?.message;
    showError(message);
  }
}

function* bookingSaga() {
  yield takeLatest(Types.AllAssigned_Dispatch, getAllAssignedBooking);
  yield takeLatest(Types.AllBooking_Dispatch, getAllBooking);
  yield takeLatest(
    Types.LocationAvailability_Dispatch,
    locationAvailabilitySaga,
  );
  yield takeLatest(Types.AddsOn_Dispatch, getAddsOnSaga);
  yield takeLatest(Types.AllSlots_Dispatch, getAllSlotsSaga);
  yield takeLatest(Types.Available_Dispatch, availableSlotsSaga);
  yield takeLatest(Types.GetUserAddress_Dispatch, getAllSaveAddressSaga);
  yield takeLatest(Types.AddUserAddress_Dispatch, addUserAddressSaga);
  yield takeLatest(Types.GetCancelReasons_Dispatch, getAllCancelReasonSaga);
  yield takeLatest(Types.GetWalletAmount_Dispatch, getWalletAmountSaga);
  yield takeLatest(
    Types.GetTransactionHistory_Dispatch,
    getTransactionHistorySaga,
  );
  yield takeLatest(
    Types.GetBookingCancelRequest_Dispatch,
    bookingCancelRequestSaga,
  );
  yield takeLatest(Types.GetBookingHistory_Dispatch, getBookingHistorySaga);
  yield takeLatest(Types.SendFeedback_Dispatch, sendFeedbackSaga);
}

export default bookingSaga;
