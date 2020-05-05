import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';

export default class Details extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		const { match, location, history } = this.props;
		return (
			<div className="details-page">
				<div className="container">
					<div className="white-box">
						<section className="submenu">
							<div className="direction">
								<a href="#" className="prev">
									Prev
								</a>
								<a href="#" className="next">
									Next
								</a>
							</div>

							<nav className="sub-links">
								<a href="#">More Ads by User</a>
								<a href="#">Print</a>
								<a href="#">Share</a>
								<a href="#">Contact Seller</a>
							</nav>
						</section>
						<section className="content-area">
							<div className="media-column">
								<Gallery />
							</div>
							<div className="details-column">
								<div className="date">Posted: Feb 28th</div>
								<h3 className="title">2020 Hyundai Sonata, 4DR Leather Auto</h3>
								<h4 className="price">$46,298</h4>
								<div className="more-details">
									<div className="info">
										<label>Vin</label>
										<h5>WBAKABC55BC446879</h5>
									</div>
									<div className="info">
										<label>Mileage</label>
										<h5>5624</h5>
									</div>
									<div className="info">
										<label>Transmission</label>
										<h5>6-Speed Automatic</h5>
									</div>
									<div className="info">
										<label>Fuel</label>
										<h5>Gasoline</h5>
									</div>
									<div className="info">
										<label>Exterior Color</label>
										<h5>Black</h5>
									</div>
									<div className="info">
										<label>Drive</label>
										<h5>Rear Wheel Drive</h5>
									</div>
									<div className="info">
										<label>Type</label>
										<h5>Sedan</h5>
									</div>
									<div className="info">
										<label>Exterior Color</label>
										<h5>Black Leather</h5>
									</div>
									<div className="info">
										<label>Condition</label>
										<h5>Like New</h5>
									</div>
								</div>

								<div className="description">
									<label>Description</label>
									<p>
										I'm baby waistcoat PBR&B leggings lumbersexual fixie enamel
										pin retro fanny pack green juice etsy sriracha. Cornhole
										normcore everyday carry kogi snackwave. Franzen blue bottle
										prism taxidermy, drinking vinegar unicorn gastropub direct
										trade chartreuse messenger bag pork belly viral synth lyft
										fingerstache. Woke austin letterpress ugh flexitarian
										unicorn, sartorial edison bulb 8-bit taiyaki whatever.
										Taxidermy disrupt chartreuse air plant bicycle rights
										flannel schlitz waistcoat woke. Pitchfork semiotics
										stumptown waistcoat mlkshk twee health goth master cleanse
										post-ironic. Neutra listicle aesthetic, tacos post-ironic
										you probably haven't heard of them umami palo santo retro.
									</p>
									<p>
										Gastropub poke air plant live-edge keytar pitchfork. Jean
										shorts lomo subway tile cred mustache gluten-free viral
										venmo small batch craft beer snackwave aesthetic kombucha
										food truck cray. Taiyaki etsy small batch everyday carry
										green juice hot chicken. Portland bushwick enamel pin twee,
										skateboard messenger bag irony readymade palo santo fam
										offal venmo. Vaporware helvetica DIY raclette kitsch 3 wolf
										moon thundercats hammock chicharrones artisan VHS
										lumbersexual raw denim biodiesel.
									</p>
									<p>
										Waistcoat roof party leggings lyft, kinfolk migas tofu
										typewriter. Chia 8-bit chambray health goth truffaut
										affogato. Shoreditch tote bag gochujang chicharrones tofu.
										Leggings lumbersexual freegan, hoodie meditation whatever
										typewriter four loko 3 wolf moon. Plaid drinking vinegar 3
										wolf moon, fashion axe helvetica ethical gentrify
										intelligentsia iPhone cred tofu vape cornhole hot chicken.
										Yuccie tattooed waistcoat, shoreditch slow-carb chicharrones
										pug godard blog lyft unicorn mustache cliche church-key.
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}
