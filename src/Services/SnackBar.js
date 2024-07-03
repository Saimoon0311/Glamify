import {Colors} from '@/Theme/Variables';
import Snackbar from 'react-native-snackbar';
const duration = Snackbar.LENGTH_LONG;
const textColor = Colors.white;

const showSuccess = text =>
  Snackbar.show({text, duration, backgroundColor: Colors.success, textColor});

const showInfo = text =>
  Snackbar.show({
    text,
    duration,
    backgroundColor: Colors.description,
    textColor,
  });

const showError = text =>
  Snackbar.show({text, duration, backgroundColor: Colors.error, textColor});

export {showError, showInfo, showSuccess};
