import { LOGIN_SUCCESS } from '../constants';
// import update from 'react-addons-update';

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return action.payload.response;

      default:
        return state;
    }
};

export default authReducer;
