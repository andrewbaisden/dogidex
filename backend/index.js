const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Pool } = require('pg');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

if (!process.env.DATABASE_URL) {
	console.error('Missing DATABASE_URL. Set it in backend/.env (Neon or Supabase Postgres connection string).');
	process.exit(1);
}

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: process.env.DATABASE_SSL === 'false' ? false : { rejectUnauthorized: false },
	connectionTimeoutMillis: 10000,
});

app.get('/', (req, res) => {
	res.json({
		message: 'Dogidex API',
		endpoints: ['GET /online/dogs', 'GET /online/dogs/:dogId'],
	});
});

// GET: Fetch all dogs from the database
app.get('/online/dogs', async (req, res) => {
	try {
		const { rows } = await pool.query('SELECT * FROM dogs ORDER BY id ASC');
		res.json(rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to fetch dogs',
			code: error.code,
			detail: error.message,
			hint:
				error.code === 'ETIMEDOUT' || error.code === 'ENETUNREACH'
					? 'Direct Supabase host is IPv6-only. Use the Session pooler URI from Project Settings → Database (host ends in pooler.supabase.com).'
					: undefined,
		});
	}
});

// GET: Fetch dog by id from the database
app.get('/online/dogs/:dogId', async (req, res) => {
	try {
		const { rows } = await pool.query('SELECT * FROM dogs WHERE id = $1', [req.params.dogId]);
		res.json(rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to fetch dog',
			code: error.code,
			detail: error.message,
		});
	}
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
