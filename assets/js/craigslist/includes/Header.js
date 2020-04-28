import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
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
			<div className="container">
				<header>
					<div className={'left-menu'}>
						<div className={'logo'}>Craiglist</div>
						<div className={'city'}>
							Ottawa <i className={`fa fa-chevron-down`} aria-hidden="true"></i>
						</div>
					</div>
					<div className={'right-menu'}>
						<div className={'user-img'}>img</div>
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
