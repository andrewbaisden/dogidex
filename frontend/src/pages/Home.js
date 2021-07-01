import React from 'react';
import ButtonDashBoard from '../components/ButtonDashboard/ButtonDashboard';
import '../App.css';
import Logo from '../../src/img/logo.png';
import Husky from '../../src/img/husky.png';

const Home = () => {
	return (
		<>
			<main>
				<div>
					<div className="logo-container">
						<img className="img-responsive-logo" src={Logo} alt="Logo" />
					</div>
					<div>
						<img className="img-responsive-husky" src={Husky} alt="Husky Homescreen" />
					</div>
					<div className="buttondashboard-container">
						<ButtonDashBoard />
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
