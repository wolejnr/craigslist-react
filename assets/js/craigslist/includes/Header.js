import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe',
			cityDropdown: false,
			selectedCity: 'Ottawa',
			citiesData: []
		};
	}

	UNSAFE_componentWillMount() {
		const self = this;
		axios
			.get(`/api/cities`)
			.then(function(response) {
				const { match, history } = self.props;

				let city = response.data.filter(item => {
					return item.slug == match.params.city;
				});
				// handle success
				self.setState(
					{
						citiesData: response.data,
						selectedCity: city[0].title
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

	clickedCityDropdown = () => {
		this.setState({
			cityDropdown: !this.state.cityDropdown
		});
	};

	selectCity = city => {
		this.setState(
			{
				selectedCity: city
			},
			() => {
				let city = this.state.citiesData.filter(item => {
					return item.title == this.state.selectedCity;
				});
				const { match, history } = this.props;

				history.push(`/${city[0].slug}`);
			}
		);
	};
	async test() {}

	loopCities = () => {
		const self = this;

		return this.state.citiesData.map((item, i) => {
			return (
				<li key={i} onClick={this.selectCity.bind(null, item.title)}>
					{item.title}
				</li>
			);
		});
	};

	render() {
		const { match, history } = this.props;
		return (
			<div className="container">
				<header>
					<div className={'left-menu'}>
						<Link to={`/${match.params.city}`} className={'logo'}>
							Craiglist
						</Link>
						<div className={'city-dropdown'} onClick={this.clickedCityDropdown}>
							{this.state.selectedCity}{' '}
							<i
								className={`fa ${
									this.state.cityDropdown ? 'fa-chevron-up' : 'fa-chevron-down'
								}`}
								aria-hidden="true"
							></i>
							<div
								className={`scroll-area ${
									this.state.cityDropdown ? 'active' : ''
								}`}
							>
								<ul>{this.loopCities()}</ul>
							</div>
						</div>
					</div>
					<div className={'right-menu'}>
						<div className={'user-img'}>
							<i className="fa fa-user-o" aria-hidden="true"></i>
						</div>
						<div className={'user-dropdown'}>
							My Account{' '}
							<i className={`fa fa-chevron-down`} aria-hidden="true"></i>
						</div>
						<div className={'post-btn'}>Post to Classifiedz</div>
					</div>
				</header>
			</div>
		);
	}
}
