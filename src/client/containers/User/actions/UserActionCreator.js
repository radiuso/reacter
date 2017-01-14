import store from '../../../store';
import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../constants';
import UserService from '../services/UserService';

let UserActionCreator = {
  fetchUsers() {
    store.dispatchAsync(UserService.fetchUsers(), {
      request: FETCH_USERS,
      success: FETCH_USERS_SUCCESS,
      failure: FETCH_USERS_ERROR
    });
  }
};

export default UserActionCreator;
