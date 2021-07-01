import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Dashboard from '../src/pages/Dashboard';
import Profile from '../src/pages/Profile';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/:id" children={<Profile />} />
			</Switch>
		</Router>
	);
};

export default App;
