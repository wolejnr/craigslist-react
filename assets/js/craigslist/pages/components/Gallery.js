import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			allImgs: '',
			currentImg: '',
			currentIndex: 0
		};
	}

	componentWillMount() {
		const allImgs = [
			'https://images.craigslist.org/00g0g_c75l1D16b7s_600x450.jpg',
			'https://images.craigslist.org/00K0K_fKL942QPCeT_600x450.jpg',
			'https://images.craigslist.org/00r0r_eX7sscY37Fa_600x450.jpg',
			'https://images.craigslist.org/00l0l_gJFWlL16TCL_600x450.jpg',
			'https://images.craigslist.org/00303_2hj0MUvJVGf_600x450.jpg',
			'https://images.craigslist.org/00202_gf5bf8wQoOA_600x450.jpg'
		];
		this.setState({
			allImgs,
			currentImg: allImgs[this.state.currentIndex]
		});
	}

	allImgsLoop = () => {
		return this.state.allImgs.map((item, i) => {
			return (
				<div
					className="thumb-img"
					key={i}
					onClick={this.clickedThumb.bind(null, i)}
					style={{
						backgroundImage: `url(${item})`
					}}
				></div>
			);
		});
	};

	nextBtn = () => {
		if (this.state.currentIndex != this.state.allImgs.length - 1) {
			this.setState({
				currentIndex: this.state.currentIndex + 1
			});
		}
	};

	prevBtn = () => {
		if (this.state.currentIndex != 0) {
			this.setState({
				currentIndex: this.state.currentIndex - 1
			});
		}
	};

	clickedThumb = index => {
		this.setState({
			currentIndex: index
		});
	};

	render() {
		const { match, location, history } = this.props;
		return (
			<div className="gallery">
				<div className="slider">
					<div className="main-image">
						<div className="arrows left-arrow" onClick={this.prevBtn}>
							<i className="fa fa-chevron-left" aria-hidden="true"></i>
						</div>
						<div className="arrows right-arrow" onClick={this.nextBtn}>
							<i className="fa fa-chevron-right" aria-hidden="true"></i>
						</div>
						<div
							className="image-1"
							style={{
								backgroundImage: `url('${
									this.state.allImgs[this.state.currentIndex]
								}')`
							}}
						></div>
					</div>
				</div>
				<div className="thumbnails">{this.allImgsLoop()}</div>
			</div>
		);
	}
}
