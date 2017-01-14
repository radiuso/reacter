import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store';

const App = (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);
