import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './includes/Header';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Details from './pages/Details';
import Category from './pages/Category';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<Router>
				<div>
					<Route path="/:city" component={Header} />
					<Route exact path="/" component={Home} />
					<Route exact path="/:city" component={Home} />
					<Route exact path="/:city/:category" component={Category} />
					<Route exact path="/:city/:category/:listings" component={Category} />
					<Route
						exact
						path="/:city/:category/:listings/:item"
						component={Details}
					/>
				</div>
			</Router>
		);
	}
}
