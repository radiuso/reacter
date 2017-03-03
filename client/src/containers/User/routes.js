import React from 'react';
import { Route, IndexRoute } from 'react-router';
import User from './User';
import UsersList from './components/UsersList';
import { hasRole } from '../../middleware/auth';

const routes = (
	<Route path="/users" component={User} onEnter={hasRole('admin')}>
		<IndexRoute component={UsersList} />
  </Route>
);

export default routes;
