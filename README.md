A full-stack music streaming web application that integrates with the Spotify Web API to let users authenticate via Spotify, search for songs, preview 30-second audio clips, view personalized recommendations, and save favorite tracks to their account. Built with React, Node.js (Express), MongoDB, and Spotify Web API, this app provides a simplified version of Spotify’s user experience — including user authentication, music discovery, and playlist management.

🔧 Setup

Clone & Install git clone https://github.com/your-username/fullstack-auth-app.git cd fullstack-auth-app

Backendqw[ ' ] cd backend npm install npm run dev

Create .env file:

PORT=5000 MONGO_URI=mongodb://127.0.0.1:27017/musicdb JWT_SECRET=your_secret SPOTIFY_CLIENT_ID=your_client_id SPOTIFY_CLIENT_SECRET=your_client_secret SPOTIFY_REDIRECT_URI=http://localhost:5000/auth/spotify/callback FRONTEND_URL=http://localhost:3000

Frontend cd ../frontend npm install npm start
Add in package.json:

"proxy": "http://localhost:5000"