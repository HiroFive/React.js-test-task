import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { CharactersPage, EpisodesPage, LocationsPage } from './pages';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/characters' component={CharactersPage} />
				<Route path='/episodes' component={EpisodesPage} />
				<Route path='/locations' component={LocationsPage}/>
				<Route path='/my-watch-list' />
				<Redirect exact from='/' to='characters' />
			</Switch>
		</Router>
	);
};

export default App;
