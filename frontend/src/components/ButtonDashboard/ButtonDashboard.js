import React from 'react';
import { Link } from 'react-router-dom';
import Triangle from '../../img/triangle.png';
import './ButtonDashboard.css';

const ButtonDashBoard = () => {
	return (
		<Link to="/dashboard">
			<span>Dashboard</span>
			<span>
				<img src={Triangle} alt="Triangle Icon" />
			</span>
		</Link>
	);
};

export default ButtonDashBoard;
