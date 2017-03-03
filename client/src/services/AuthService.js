import axios from 'axios';

import { PUBLIC_URL } from '../constants';

export default {
    login(login, password) {
      return axios.post(`${PUBLIC_URL}/auth/local`, {
          'email': login,
          'password': password
      })
      .catch((error) => console.log(error));
    },

    logout() {

    }
};