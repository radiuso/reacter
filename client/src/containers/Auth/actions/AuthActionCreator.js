import store from '../../../store';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants';
import AuthService from '../services/AuthService';

let AuthActionCreator = {
  login(username, password) {
    store.dispatchAsync(AuthService.login(username, password), {
      request: LOGIN,
      success: LOGIN_SUCCESS,
      failure: LOGIN_ERROR
    });
  }
};

export default AuthActionCreator;
