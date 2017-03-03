import 'whatwg-fetch';

import { API_URL } from '../constants';
import store from '../store';
const auth = store.getState().authState;

const API_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '+auth.token
};

let UsersService = {
    fetchUsers() {
        return fetch(`${API_URL}/users`, { headers: API_HEADERS })
        .then((response) => response.json());
    }
};

export default UsersService;
