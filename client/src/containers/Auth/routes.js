import React from 'react';
import { Route } from 'react-router';
import LoginComponent from './components/Login';

const routes = (
	<Route path="/">
		<Route path="login" component={LoginComponent} />
	</Route>
);

export default routes;
