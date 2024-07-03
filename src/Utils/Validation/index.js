import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const passwordSchema = {
  password: yup
    .string()
    .required('Please enter your password')
    .max(25, 'password must be less than 25 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  confirm_password: yup
    .string()
    .required('Confirm password is required ')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
};

const signUpschema = yup.object().shape({
  email: yup.string().email().required('Please enter your email'),
  // .matches(emailRegex, 'email is not Valid'),
  name: yup
    .string()
    .required('Please enter your fullname')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(100, 'Name must be less than 100 characters'),
  ...passwordSchema,
});
const logInUpschema = yup.object().shape({
  email: yup.string().email().required('Please enter your email'),
  password: yup.string().required('Please enter your password'),
});
const forgotSchema = yup.object().shape({
  email: yup.string().email().required('Please enter your email'),
});
const verificationSchema = yup.object().shape({
  code: yup
    .string()
    .required('Please enter your verification code')
    .max(6, 'verification code must 6 characters'),
});

const addCardSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your fullname')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
});
const addLocationSchema = yup.object().shape({
  title: yup
    .string()
    .required('Please enter location title')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid location title'),
  address: yup.string().required('Please enter address'),
});

const updateProfileScheme = yup.object().shape({
  name: yup
    .string()
    .required('Please enter username')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid location title'),
  phone: yup.string().required('Please enter phone number'),
});

const bookingCancelScheme = yup.object().shape({
  reason: yup.string().required('Please enter reason'),
});

const sendFeedbackScheme = yup.object().shape({
  feedback: yup.string().required('Please enter review'),
});

const Schemas = {
  signUp: yupResolver(signUpschema),
  logIn: yupResolver(logInUpschema),
  forgot: yupResolver(forgotSchema),
  newPassword: yupResolver(yup.object().shape(passwordSchema)),
  verification: yupResolver(verificationSchema),
  addCard: yupResolver(addCardSchema),
  addLocation: yupResolver(addLocationSchema),
  updateProfile: yupResolver(updateProfileScheme),
  bookingCancel: yupResolver(bookingCancelScheme),
  sendFeedback: yupResolver(sendFeedbackScheme),
};

export default Schemas;
