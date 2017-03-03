import jwtDecode from 'jwt-decode';

import store from '../store';
import AuthService from '../services/AuthService';
import setAuthorizationToken from '../utils/setAuthorizationToken';

import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, SET_CURRENT_USER, LOGOUT } from './types/authTypes';

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
      const token = res.data.token;

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

export function logout() {
  setAuthorizationToken();
  localStorage.removeItem('jwtToken');

  store.dispatch({ type: LOGOUT });
}
