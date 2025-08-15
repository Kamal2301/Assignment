import {Keyboard} from 'react-native';
import Snackbar, {SnackBarOptions} from 'react-native-snackbar';
class SnackbarHandler {
  private closeKeyboard = () => {
    Keyboard.dismiss();
  };

  errorToast = (text: string, options?: SnackBarOptions) => {
    if (!text) {
      return;
    }
    this.closeKeyboard();
    Snackbar.show({
      backgroundColor: 'red',
      duration: 3000,
      ...options,
      text,
    });
  };

  successToast = (text: string, options?: SnackBarOptions) => {
    if (!text) {
      return;
    }
    this.closeKeyboard();

    Snackbar.show({
      backgroundColor: 'green',
      duration: 2000,
      ...options,
      text,
    });
  };

  normalToast = (text: string, options?: SnackBarOptions) => {
    if (!text) {
      return;
    }
    this.closeKeyboard();

    Snackbar.show({
      backgroundColor: 'gray',
      duration: 5000,
      ...options,
      text,
    });
  };
}

export default new SnackbarHandler();
