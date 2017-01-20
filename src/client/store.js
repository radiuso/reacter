import { createStore, combineReducers } from 'redux';

import UserReducers from './containers/User/redux/reducers';
import AuthReducers from './containers/Auth/redux/reducers';

// Combine Reducers
const reducers = {
  ...UserReducers,
  ...AuthReducers
};

const store = createStore(combineReducers(reducers));

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
