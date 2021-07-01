const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// HarperDB Database routes

// GET: Fetch all dogs from the database
app.get('/online/harperdb', (req, res) => {
	const data = { operation: 'sql', sql: 'SELECT * FROM dev.dogs' };

	const config = {
		method: 'post',
		url: process.env.HARPERDB_URL,
		headers: {
			Authorization: `Basic ${process.env.HARPERDB_AUTH}`,
			'Content-Type': 'application/json',
		},
		data: data,
	};

	axios(config)
		.then((response) => {
			const data = response.data;
			console.log(data);
			res.json(data);
		})
		.catch((error) => {
			console.log(error);
		});
});

// GET: Fetch dog by dogId from the database
app.get('/online/harperdb/:dogId', (req, res) => {
	const dogId = req.params.dogId;
	console.log(dogId);

	const data = { operation: 'sql', sql: `SELECT * FROM dev.dogs WHERE id = "${dogId}"` };

	const config = {
		method: 'post',
		url: process.env.HARPERDB_URL,
		headers: {
			Authorization: `Basic ${process.env.HARPERDB_AUTH}`,
			'Content-Type': 'application/json',
		},
		data: data,
	};

	axios(config)
		.then((response) => {
			const data = response.data;
			console.log(data);
			res.json(data);
		})
		.catch((error) => {
			console.log(error);
		});
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
