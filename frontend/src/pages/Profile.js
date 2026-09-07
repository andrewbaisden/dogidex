import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../src/img/logo.png';
import { dogImageSrc } from '../utils/dogImages';
import { API_BASE } from '../utils/api';

const Profile = () => {
	let { id } = useParams();

	const [dog, setDog] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getAPI = async () => {
			try {
				const response = await axios.get(`${API_BASE}/online/dogs/${id}`);
				setDog(response.data[0] || null);
				setError(null);
			} catch (err) {
				console.error(err);
				setError('Could not load dog. Is the API running?');
			} finally {
				setLoading(false);
			}
		};
		getAPI();
	}, [id]);

	return (
		<>
			<div className="dogidex-profile-screen-main">
				<div>
					<div className="logo-container">
						<img className="img-responsive-logo-subpage" src={Logo} alt="Logo" />
					</div>
				</div>

				<div>
					<section className="dogidex-profiles-screen-container">
						<div>
							{loading ? (
								<div className="dogidex-profiles-screen-loader">
									<div className="progress-8"></div>
								</div>
							) : error ? (
								<p>{error}</p>
							) : !dog ? (
								<p>Dog not found.</p>
							) : (
								<div className="dogidex-profiles-screen-container-profile">
									<div>
										<div className="dogimon-profile-container-details">
											<div key={dog.id}>
												<img src={dogImageSrc(dog.img)} alt={dog.name} />
											</div>
											<div>
												<h1>{dog.name}</h1>
											</div>
											<div className="dogimon-healthbar-profile">
												<div className={`dogimon-healthbar-${dog.health_bar}`}></div>
											</div>
											<div className="dogimon-dog-hp">
												<p>
													{dog.health_points} / {dog.health_points} HP
												</p>
											</div>
											<div className="dogimon-dog-stats">
												<div>
													<h2>{dog.weight}kg</h2>
													<p>Weight</p>
												</div>
												<div>
													<h2>{dog.type}</h2>
													<p>Type</p>
												</div>
												<div>
													<h2>{dog.height}</h2>
													<p>Height</p>
												</div>
											</div>
											<hr></hr>
											<div className="dogimon-dog-description">
												<p>{dog.description}</p>
											</div>
											<div className="dogimon-dog-temperament">
												<p className="dogimon-dog-temperament-attributes">{dog.temperament}</p>
												<p className="dogimon-dog-temperament-heading">Temperament</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</section>
					<section className="dogimon-index-container">
						<Link to="/dashboard">
							<span>Dogimon</span>
						</Link>
					</section>
				</div>
			</div>
		</>
	);
};

export default Profile;
