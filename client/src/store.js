import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

import UserReducers from './containers/User/redux/reducers';
import AuthReducers from './containers/Auth/redux/reducers';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './containers/Auth/actions/AuthActionCreator';

// Combine Reducers
const reducers = {
  ...UserReducers,
  ...AuthReducers,
  routing: routerReducer
};

const store = createStore(combineReducers(reducers));

// set auth
if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}


store.dispatchAsync = (promise, types, payload) => {
  const { request, success, failure } = types;
  store.dispatch({ type: request, payload: Object.assign({}, payload) });
  promise.then(
    response => store.dispatch({
      type: success,
      payload: Object.assign({}, payload, { response })
    }),
    error => store.dispatch({
      type: failure,
      payload: Object.assign({}, payload, { error })
    })
  );
};

export default store;
