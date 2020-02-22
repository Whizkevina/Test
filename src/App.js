import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<h1>Hello</h1>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
