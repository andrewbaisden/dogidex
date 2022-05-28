/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../src/img/logo.png';
import { Link } from 'react-router-dom';
import Akita from '../img/Akita_Inu.png';
import Bulldog from '../img/Bulldog.png';
import Chihuahua from '../img/Chihuahua.png';
import GermanShepherd from '../img/German_Shepherd.png';
import GoldenRetriever from '../img/Golden_Retriever.png';
import Husky from '../img/husky_2.png';
import Poodle from '../img/Poodle.png';
import Pug from '../img/Pug.png';
import Rottweiler from '../img/Rottweiler.png';
import Samoyed from '../img/Samoyed.png';

const Profile = () => {
	// useEffect(() => {
	// 	const getAPI = async () => {
	// 		// const API = 'http://localhost:8000/online/harperdb';
	// 		const API2 = 'https://dogidex-andrewbaisden.vercel.app/online/harperdb';

	// 		const response = await axios.get(API2);

	// 		try {
	// 			console.log('Profile Page', response.data);
	// 			setLoading(false);
	// 			setData(response.data);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	getAPI();
	// }, []);

	let { id } = useParams();

	const [data, setData] = useState([
		{
			id: '1',
			name: 'Siberian Husky',
			level: 64,
			img: Husky,
			health_bar: 100,
			health_points: 300,
			weight: 72,
			type: 'Husky',
			height: 60,
			description:
				'The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat erect triangular ears and distinctive markings and is smaller than the similar-looking Alaskan Malamute.',
			temperament: 'Intelligent Friendly Outgoing Alert Gentle',
		},
		{
			id: '2',
			name: 'German Shepherd',
			level: 10,
			img: GermanShepherd,
			health_bar: 100,
			health_points: 60,
			weight: 40,
			type: 'Shepherd',
			height: 65,
			description:
				"The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. According to the FCI the breed's English language name is German Shepherd Dog.",
			temperament: 'Intelligent Stubborn Loyal Obedient Alert Watchful Confident Curious Courageous',
		},
		{
			id: '3',
			name: 'Bulldog',
			level: 33,
			img: Bulldog,
			health_bar: 100,
			health_points: 25,
			weight: 40,
			type: 'British Bulldog',
			height: 65,
			description:
				'The Bulldog also known as the English Bulldog or British Bulldog is a medium-sized dog breed. It is a muscular hefty dog with a wrinkled face and a distinctive pushed-in nose. The Kennel Club the American Kennel Club and the United Kennel Club oversee breeding records.',
			temperament: 'Willful Docile Friendly Gregarious',
		},
		{
			id: '4',
			name: 'Golden Retriever',
			level: 2,
			img: GoldenRetriever,
			health_bar: 100,
			health_points: 12,
			weight: 34,
			type: 'Retriever',
			height: 61,
			description:
				'The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl such as ducks and upland game birds during hunting and shooting parties. The name "retriever" refers to the breed\'s ability to retrieve shot game undamaged due to their soft mouth.',
			temperament: 'Intelligent Friendly Kind Reliable Trustworthy Confident',
		},
		{
			id: '5',
			name: 'Poodle',
			level: 17,
			img: Poodle,
			health_bar: 100,
			health_points: 55,
			weight: 60,
			type: 'Poodle',
			height: 60,
			description:
				'The Poodle called the Pudel in German and the Caniche in French is a breed of water dog. The breed is divided into four varieties based on size the Standard Poodle Medium Poodle Miniature Poodle and Toy Poodle although the Medium Poodle variety is not universally recognised.',
			temperament: 'Intelligent Alert Faithful Active Instinctual Trainable',
		},
		{
			id: '6',
			name: 'Chihuahua',
			level: 17,
			img: Chihuahua,
			health_bar: 100,
			health_points: 25,
			weight: 3,
			type: 'Poodle',
			height: 25,
			description:
				'The Chihuahua is one of the smallest breeds of dog and is named after the Mexican state of Chihuahua.',
			temperament: 'Devoted Aggressive Lively Alert Quick Courageous',
		},
		{
			id: '7',
			name: 'Rottweiler',
			level: 37,
			img: Rottweiler,
			health_bar: 100,
			health_points: 175,
			weight: 60,
			type: 'Rottweiler',
			height: 69,
			description:
				"The Rottweiler is a breed of domestic dog regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund meaning Rottweil butchers' dogs because their main use was to herd livestock and pull carts laden with butchered meat to market.",
			temperament: 'Good-natured Devoted Obedient Alert Fearless Confident Self-assured Steady Calm Courageous',
		},
		{
			id: '8',
			name: 'Pug',
			level: 50,
			img: Pug,
			health_bar: 100,
			health_points: 240,
			weight: 8,
			type: 'Pug',
			height: 36,
			description:
				'The pug is a breed of dog with physically distinctive features of a wrinkly short-muzzled face and curled tail. The breed has a fine glossy coat that comes in a variety of colours most often light brown or black and a compact square body with well-developed muscles.',
			temperament:
				'Playful Affectionate Charming Stubborn Mischievous Clever Docile Sociable Loving Attentive Quiet Calm',
		},
		{
			id: '9',
			name: 'Samoyed',
			level: 5,
			img: Samoyed,
			health_bar: 100,
			health_points: 24,
			weight: 30,
			type: 'Samoyed',
			height: 55,
			description:
				'The Samoyed is a breed of medium-sized herding dogs with thick white double-layer coats. They are related to the laika a spitz-type dog. It takes its name from the Samoyedic peoples of Siberia. These nomadic reindeer herders bred the fluffy white dogs to help with herding.',
			temperament: 'Playful Friendly Stubborn Sociable Lively Alert',
		},
		{
			id: '10',
			name: 'Akita Inu',
			level: 7,
			img: Akita,
			health_bar: 100,
			health_points: 35,
			weight: 39,
			type: 'Akita',
			height: 70,
			description:
				'The Akita is a large breed of dog originating from the mountainous regions of northern Japan. There are two separate varieties of Akita: a Japanese strain commonly called Akita Inu or Japanese Akita and an American strain known as the Akita or American Akita.',
			temperament: 'Playful Friendly Intelligent Affectionate Active Alert',
		},
	]);
	const [loading, setLoading] = useState(false);

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
