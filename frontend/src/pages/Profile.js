/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../src/img/logo.png';
import { Link } from 'react-router-dom';

const Profile = () => {
	useEffect(() => {
		const getAPI = async () => {
			// const API = 'http://localhost:8000/online/harperdb';
			const API2 = 'https://dogidex-andrewbaisden.vercel.app/online/harperdb';

			const response = await axios.get(API2);

			try {
				console.log('Profile Page', response.data);
				setLoading(false);
				setData(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getAPI();
	}, []);

	let { id } = useParams();

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

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
							) : (
								<div className="dogidex-profiles-screen-container-profile">
									{data.map((dog) => {
										if (dog.id === id) {
											return (
												<div>
													<div className="dogimon-profile-container-details">
														<div key={dog.id}>
															<img src={dog.img} alt={dog.name} />
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
											);
										}
									})}
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
