import { LOGIN_SUCCESS } from '../constants';
// import update from 'react-addons-update';
import cookie from 'react-cookie';

const savedState = cookie.load('user');

let initialState = {
  user: {}
};

if(savedState !== undefined) {
  initialState = savedState;
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        const user = action.payload.response;
        cookie.save('user', user, { path: '/' });

        return user;

      default:
        return state;
    }
};

export default authReducer;
