import React from 'react';
import { Route, IndexRoute } from 'react-router';
import User from './User';
import UsersList from './components/UsersList';

const routes = (
	<Route path="/users" component={User}>
		<IndexRoute component={UsersList} />
  </Route>
);

export default routes;
