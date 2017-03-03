import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App';
import Home from './containers/Home';
import NotFoundPage from './containers/NotFoundPage';
import UserRoutes from './containers/User/routes';
import AuthRoutes from './containers/Auth/routes';

const routes = (
	<Route component={App}>
		<IndexRoute component={Home} />
		<Route path="/" component={Home}/>
		{AuthRoutes}
		{UserRoutes}

  	<Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
