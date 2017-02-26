import 'whatwg-fetch';

import { API_URL } from '../../../constants';

let AuthService = {
    login(username, password) {
      return fetch(`${API_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'username': username,
          'password': password
        })
      })
      .then((response) => response.json())
    },

    logout() {

    }
};

export default AuthService;
