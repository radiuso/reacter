import axios from 'axios';

import { API_URL } from '../constants';

let UsersService = {
    fetchUsers() {
        return axios.get(`${API_URL}/users`)
        .then((response) => response.json());
    }
};

export default UsersService;
