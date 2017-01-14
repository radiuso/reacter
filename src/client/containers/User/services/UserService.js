import 'whatwg-fetch';
// import 'babel-polyfill';

const API_URL = 'http://localhost:9000/api';
const API_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'reacter'
};

let UsersService = {
    fetchUsers() {
        return fetch(`${API_URL}/users`, {headers:API_HEADERS})
        .then((response) => response.json());
    }
};

export default UsersService;
