# Suraj Mane — Full-Stack Developer Portfolio

A modern, responsive full-stack developer portfolio built with:

- Frontend: React + Vite
- Backend: Node.js + Express.js
- Database: MongoDB + Mongoose
- Styling: Custom CSS with responsive glassmorphism / dark-tech UI
- Contact form: React -> Express API -> MongoDB

## Features

- Premium responsive portfolio UI
- Hero section with animated visual elements
- About / technical skills
- Experience timeline
- Featured projects
- Education and certifications
- Contact form connected to MongoDB
- REST API with validation
- Health-check endpoint
- Mobile navigation
- Smooth section navigation
- Scroll reveal animations
- SEO-friendly page metadata
- No external UI framework required

## 1. Frontend setup

```bash
cd client
npm install
npm run dev
```

Create `client/.env` if needed:

```env
VITE_API_URL=http://localhost:5000/api
```

## 2. Backend setup

```bash
cd server
npm install
```

Create `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/suraj_portfolio
CLIENT_URL=http://localhost:5173
```

Then:

```bash
npm run dev
```

## API

### GET /api/health
Checks API status.

### POST /api/contact
Stores a contact message in MongoDB.

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello Suraj!"
}
```

## Deploy to Vercel and Railway

Push this project to a GitHub repository, then deploy the frontend and backend as separate services. Do not commit `server/.env`; its database connection string is a secret.

### 1. Deploy the frontend to Vercel

1. Import the GitHub repository into Vercel.
2. Set **Root Directory** to `client` and use the Vite defaults (`npm run build`, output directory `dist`).
3. Deploy once to get the frontend URL, for example `https://your-portfolio.vercel.app`.

### 2. Deploy the backend to Railway

1. Create a Railway project from the same GitHub repository and set the service **Root Directory** to `server`.
2. Set these service variables:

   ```env
   MONGODB_URI=<your MongoDB Atlas connection string>
   CLIENT_URL=https://your-portfolio.vercel.app
   ```

   `CLIENT_URL` accepts comma-separated origins if you need to allow more than one frontend URL.
3. Generate a public domain for the service. Railway uses the `start` script in `server/package.json` to run the API.
4. Check that `https://<your-railway-domain>/api/health` returns a success response.

### 3. Connect the frontend to the API

In Vercel's project settings, add this environment variable and redeploy:

```env
VITE_API_URL=https://<your-railway-domain>/api
```

The contact form saves submissions in MongoDB Atlas, in the `contacts` collection of the database specified by `MONGODB_URI`.

Vercel Hobby is free for personal use. Railway's Free plan currently includes $1/month in usage credits; review Railway's current pricing and usage limits before deploying.

## Personalization

The portfolio content is already populated from Suraj Mane's resume. Update `client/src/data/portfolio.js` if you want to add GitHub, LinkedIn, live project URLs, profile photo, or additional projects.
