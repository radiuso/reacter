import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store)

const App = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);
