import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Logo from '../../src/img/logo.png';
import { dogImageSrc } from '../utils/dogImages';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const Dashboard = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getAPI = async () => {
			try {
				const response = await axios.get(`${API_BASE}/online/dogs`);
				setData(response.data);
				setError(null);
			} catch (err) {
				console.error(err);
				setError('Could not load dogs. Is the API running?');
			} finally {
				setLoading(false);
			}
		};
		getAPI();
	}, []);

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
						) : error ? (
							<p>{error}</p>
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
													<img
														src={dogImageSrc(dogimon.img)}
														alt={dogimon.name}
														height={90}
														width={90}
													/>
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
