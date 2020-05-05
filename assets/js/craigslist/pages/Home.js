import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe',
			categoriesData: ''
		};
	}

	componentWillMount() {}

	componentDidMount() {
		const { match, history } = this.props;
		if (match.params.city == undefined) {
			history.push('/ottawa');
		}

		const self = this;
		// Make a request for api categories
		axios
			.get(`/api/${match.params.city}`)
			.then(function(response) {
				// handle success
				self.setState(
					{
						categoriesData: response.data
					},
					() => {
						console.log(self.state);
					}
				);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.finally(function() {
				// always executed
			});
	}

	clickedBtn = () => {};
	async test() {}

	loopCategories = () => {
		const { match, history } = this.props;
		if (this.state.categoriesData != '') {
			// return the loop of categories
			return this.state.categoriesData.map((category, i) => {
				// created a loop for the listings
				const loopListings = () => {
					return category.listings.map((listing, idx) => {
						return (
							<Link
								to={`/${match.params.city}/${category.title}/${listing.slug}`}
								key={idx}
							>
								{listing.name}
							</Link>
						);
					});
				};
				return (
					<div className="categories" key={i}>
						<a
							href={`/${match.params.city}/${category.title}`}
							className={'title'}
						>
							{category.title}
						</a>
						<div
							className={`group-links ${
								category.title == 'jobs' || category.title == 'housing'
									? 'single-col'
									: ''
							}`}
						>
							{loopListings()}
						</div>
					</div>
				);
			});
		} else {
			return 'Loading...';
		}
	};

	loopTags = () => {
		let testTags = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		return testTags.map((item, i) => {
			return (
				<div key={i} className="tag">
					Apple Macbook
				</div>
			);
		});
	};

	render() {
		return (
			<div className="home">
				<div className="container">
					<h1>
						Connecting People <br /> Everwhere :)
					</h1>
					<section className={'links'}>{this.loopCategories()}</section>

					<section className="trending">
						<input type="text" name="search" className="search" />
						<div className="title">
							<i className="fa fa-clock-o" aria-hidden="true"></i> Trending Now
						</div>
						<div className="trending-tags">{this.loopTags()}</div>
					</section>
				</div>
			</div>
		);
	}
}
