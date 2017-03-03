import React from 'react';
import { Route } from 'react-router';
import Login from './components/Login';

const routes = (
	<Route path="/">
		<Route path="login" component={Login} />
	</Route>
);

export default routes;
