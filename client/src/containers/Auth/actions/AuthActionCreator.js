import store from '../../../store';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, SET_CURRENT_USER } from '../constants';
import AuthService from '../services/AuthService';
import setAuthorizationToken from '../../../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function login(login, password) {
  store.dispatchAsync(
    AuthService.login(login, password)
    .then((res) => {
      const token = res.token;

      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);

      // dispatch action to set user
      store.dispatch(setCurrentUser(jwtDecode(token)));

      return token;
    }), 
  {
    request: LOGIN,
    success: LOGIN_SUCCESS,
    failure: LOGIN_ERROR
  });
};
