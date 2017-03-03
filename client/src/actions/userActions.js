import store from '../store';
import UserService from '../services/UserService';

import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './types/userTypes';

export function fetchUsers() {
  store.dispatchAsync(UserService.fetchUsers(), {
    request: FETCH_USERS,
    success: FETCH_USERS_SUCCESS,
    failure: FETCH_USERS_ERROR
  });
}


