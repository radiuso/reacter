import 'whatwg-fetch';

import { PUBLIC_URL } from '../../../constants';

let AuthService = {
    login(login, password) {
      return fetch(`${PUBLIC_URL}/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': login,
          'password': password
        })
      })
      .then((response) => response.json())
    },

    logout() {

    }
};

export default AuthService;
