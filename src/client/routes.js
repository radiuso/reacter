import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App';
import Home from './containers/Home';
import NotFoundPage from './containers/NotFoundPage';


const routes = (
	<Route component={App}>
		<IndexRoute component={Home} />
		<Route path="/" component={Home}/>
  	<Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
