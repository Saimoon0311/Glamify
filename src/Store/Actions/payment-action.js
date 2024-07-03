import Types from '../sagas-types';

export const addCard = payload => ({type: Types.cardAdd_Dispatch, payload});
export const getAvailableCard = () => ({type: Types.getCards_Dispatch});
