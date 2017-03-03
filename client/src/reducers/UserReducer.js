import { FETCH_USERS_SUCCESS } from '../actions/types/userTypes';
// import update from 'react-addons-update';

const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS:
        return action.payload.response;

      default:
        return state;
    }
};

export default userReducer;
