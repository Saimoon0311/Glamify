import actionTypes from '../sagas-types';

/* Setting the initial state of the reducer. */
const initialState = {
  cardAdded: false,
  paymentCards: [],
};

/* A map of actions to functions that will be called when the action is dispatched. */
const actionMap = {
  [actionTypes.Payment_Update]: (state, act) => ({...state, ...act.payload}),
};

/**
 * If the action type is in the actionMap, call the corresponding function and return the result.
 * Otherwise, return the state
 * @param [state] - the current state of the reducer
 * @param action - The action object that was dispatched.
 * @returns The booking_reducer is being returned.
 */
const payment_reducer = (state = initialState, action) => {
  const handler = actionMap[action.type];
  return handler ? handler(state, action) : state;
};

export default payment_reducer;
