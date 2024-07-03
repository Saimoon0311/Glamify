import Types from '../sagas-types';

export const loginUser = payload => ({type: Types.login_Dispatch, payload});

export const signUpUser = payload => ({type: Types.signUp_Dispatch, payload});

export const logOutUser = _ => ({type: Types.logOut_Dispatch});

export const verifyUser = _ => ({type: Types.verify_Dispatch});

export const upadteAuth = payload => ({type: Types.Auth_Update, payload});

export const forgotUser = payload => ({type: Types.forgot_Dispatch, payload});

export const verifyCode = payload => ({
  type: Types.verification_Dispatch,
  payload,
});

export const updatePassword = payload => ({
  type: Types.update_Dispatch,
  payload,
});

export const updateProfile = payload => ({
  type: Types.update_Profile,
  payload,
});

export const deleteAccount = _ => ({type: Types.DeleteAccount_Dispatch});
