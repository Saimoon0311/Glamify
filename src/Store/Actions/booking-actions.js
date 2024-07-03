import Types from '../sagas-types';

export const getAllBooking = payload => ({
  type: Types.AllBooking_Dispatch,
  payload,
});
export const getAllAssignedBooking = () => ({type: Types.AllAssigned_Dispatch});
export const getLocationAvailability = payload => ({
  type: Types.LocationAvailability_Dispatch,
  payload,
});
export const getAddsOn = payload => ({type: Types.AddsOn_Dispatch, payload});
export const getAllSlots = () => ({type: Types.AllSlots_Dispatch});
export const getAvailableSlots = payload => ({
  type: Types.Available_Dispatch,
  payload,
});
export const getUserAddress = () => ({type: Types.GetUserAddress_Dispatch});

export const addUserAddress = payload => ({
  type: Types.AddUserAddress_Dispatch,
  payload,
});

export const getCancelReasons = () => ({
  type: Types.GetCancelReasons_Dispatch,
});

export const getWalletAmount = () => ({
  type: Types.GetWalletAmount_Dispatch,
});

export const getTransactionHistory = () => ({
  type: Types.GetTransactionHistory_Dispatch,
});

export const bookingCancelRequest = payload => ({
  type: Types.GetBookingCancelRequest_Dispatch,
  payload,
});

export const getBookingHistory = () => ({
  type: Types.GetBookingHistory_Dispatch,
});

export const sendFeedback = payload => ({
  type: Types.SendFeedback_Dispatch,
  payload,
});
