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

### Deploy API (Vercel)

Frontend stays on Netlify; only the API goes to Vercel.

1. Import the GitHub repo in Vercel (or link an existing project).
2. Root `vercel.json` deploys **only** the `backend` service (ignore the multi-service template that also includes `frontend`).
3. In Vercel → Project → Settings → Environment Variables, set `DATABASE_URL` to your Supabase **Session pooler** URI (Production + Preview).
4. Deploy, then open `https://<your-project>.vercel.app/` — you should see the JSON API help payload.
5. In Netlify → Site settings → Environment variables, set:
   - `REACT_APP_API_URL` = `https://<your-project>.vercel.app` (**no trailing slash**)
6. Trigger a **new Netlify deploy** so Create React App bakes in that URL at build time.

**Vercel Deployment Protection:** If the API URL redirects to `vercel.com/sso-api`, the deployment is SSO-protected and browsers will fail with a CORS/network error. In the Vercel project → **Settings → Deployment Protection**, turn protection **off** for Production (or allow public access) so Netlify can call the API anonymously. Prefer the stable production domain, not a one-off `*.vercel.app` deployment URL with a hash in the name.

## Frontend

This app expects **Node 20–22** (Create React App + Netlify Prerender). With [fnm](https://github.com/Schniz/fnm):

```bash
cd frontend
fnm use   # reads .node-version → Node 20
npm install
npm start
```

Open **http://localhost:3000** (the React app). Port **8000** is only the API.

Deploy: Netlify uses `netlify.toml` (base `frontend`, Node 20, `npm run build`). Do not commit a `yarn.lock` for the frontend — this project uses `package-lock.json`.

Optional: set `REACT_APP_API_URL` if the API is not at `http://localhost:8000` (e.g. a deployed Vercel URL).

## Dog images

Breed art lives in `frontend/public/dogs_transparent/<slug>.png`. The DB `img` column stores the slug only (e.g. `siberian_husky`), and the React app maps it to `/dogs_transparent/<slug>.png`. After changing seed data, re-run `backend/sql/schema.sql` in Supabase so existing rows get the new slugs.
