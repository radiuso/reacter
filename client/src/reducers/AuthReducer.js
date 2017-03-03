import isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_USER } from '../actions/types/authTypes';

let initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        const user = action.user;
        console.log(action);
        return {
          isAuthenticated: !isEmpty(user),
          user
        };

      default:
        return state;
    }
};

export default authReducer;
