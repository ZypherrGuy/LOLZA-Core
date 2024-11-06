import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sequelize from './postgres';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Cors
app.use(cors())

// Health check route
app.get('/', (req, res) => {
    res.send('API is working');
});

// Connect to the database and start the server
sequelize.sync()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error:Error) => {
        console.error('Unable to connect to the database:', error);
    });
