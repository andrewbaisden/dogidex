# Dogidex App

![Dogidex](/img/dogidex.png 'Dogidex')

Pokédex-style dog catalog. React frontend + Express API + Postgres (Neon or Supabase).

## Database setup (Neon or Supabase)

1. Create a free Postgres database:
   - [Neon](https://neon.tech) → New Project → copy the connection string
   - or [Supabase](https://supabase.com) → New Project → **Project Settings → Database → Connection string (URI)**
2. Copy `backend/.env.example` to `backend/.env` and set `DATABASE_URL`.
   - **Supabase:** use **Session pooler** (host ends in `pooler.supabase.com`, user is `postgres.<project-ref>`).  
     Do **not** use Direct (`db.<ref>.supabase.co`) unless your network supports IPv6 — that causes `ETIMEDOUT` / 500s.
3. Run the schema + seed SQL against your database:
   - Paste and run `backend/sql/schema.sql` in the Neon/Supabase SQL editor, **or**
   - `psql "$DATABASE_URL" -f backend/sql/schema.sql`

## Backend

```bash
cd backend
npm install
npm start
```

API runs at `http://localhost:8000`:

- `GET /online/dogs` — all dogs
- `GET /online/dogs/:dogId` — one dog by id

## Frontend

This app expects **Node 18–22** (Create React App). With [fnm](https://github.com/Schniz/fnm):

```bash
cd frontend
fnm use   # reads .node-version → Node 18
npm install
npm start
```

Open **http://localhost:3000** (the React app). Port **8000** is only the API.

Deploy: Netlify uses `netlify.toml` (base `frontend`, Node 18, `npm ci`). Do not commit a `yarn.lock` for the frontend — this project uses `package-lock.json`.

Optional: set `REACT_APP_API_URL` if the API is not at `http://localhost:8000` (e.g. a deployed Vercel URL).

## Dog images

Breed art lives in `frontend/public/dogs_transparent/<slug>.png`. The DB `img` column stores the slug only (e.g. `siberian_husky`), and the React app maps it to `/dogs_transparent/<slug>.png`. After changing seed data, re-run `backend/sql/schema.sql` in Supabase so existing rows get the new slugs.
