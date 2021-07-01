import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Logo from '../../src/img/logo.png';

const Dashboard = () => {
	useEffect(() => {
		const getAPI = async () => {
			// const API = 'http://localhost:8000/online/harperdb';
			const API2 = 'https://dogidex-andrewbaisden.vercel.app/online/harperdb';

			const response = await axios.get(API2);

			try {
				console.log(response.data);
				setLoading(false);
				setData(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getAPI();
	}, []);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	return (
		<>
			<div className="dogimon-profile-main">
				<div>
					<div className="logo-container">
						<img className="img-responsive-logo-subpage" src={Logo} alt="Logo" />
					</div>
					<div className="dogimon-dogidex-count">
						<div>
							<h1>DOGIMON</h1>
						</div>
						<p>
							{data.length === 0 ? '0' : data.length} / {data.length === 0 ? '0' : data.length}
						</p>
						<div className="divider-line"></div>
					</div>
				</div>
				<section className="dogidex-dashboard-profiles-container">
					<div>
						{loading ? (
							<div>
								<div className="progress-8"></div>
							</div>
						) : (
							<div className="dogimon-profile-container">
								{data.map((dogimon) => (
									<div key={dogimon.id}>
										<Link to={`/${dogimon.id}`}>
											<div className="dogimon-profiles">
												<div>
													<h1>
														Level <span>{dogimon.level}</span>
													</h1>
												</div>
												<div>
													<img src={dogimon.img} alt={dogimon.name} />
												</div>
												<div>
													<p>{dogimon.name}</p>
												</div>
												<div>
													<div className={`dogimon-healthbar-${dogimon.health_bar}`}></div>
												</div>
											</div>
										</Link>
									</div>
								))}
							</div>
						)}
					</div>
				</section>
			</div>
		</>
	);
};

export default Dashboard;
