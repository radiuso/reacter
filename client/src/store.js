import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

import reducers from './reducers';

import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';

// Combine Reducers
const mergedReducers = {
  ...reducers,
  routing: routerReducer
};

const store = createStore(
  combineReducers(mergedReducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
