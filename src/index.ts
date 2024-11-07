import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sequelize from './postgres';
import userRoutes from './routes/userRoutes';
import tournamentRoutes from './routes/tournametRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// CORS setup: Allow requests only from specific origins
const allowedOrigins = [
  'http://localhost:5173', // Local development (you may need to change this based on your local port)
  'https://lolza-discord-dashboard.vercel.app' // Production frontend URL on Vercel
];

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (allowedOrigins.includes(origin || '') || !origin) {  // !origin is for non-browser requests like Postman
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Customize methods as needed
};

// Apply CORS middleware with the allowed origins
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', tournamentRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start the server after database connection
sequelize.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
  });
