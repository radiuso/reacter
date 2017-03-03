import axios from 'axios';

import { API_URL } from '../constants';

export default {
    fetchUsers() {
        return axios.get(`${API_URL}/users`)
    }
};