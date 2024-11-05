import express from 'express';
import sequelize from './postgreSQL';
import { User } from './models/User';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Example route to create a new user
app.post('/api/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error: unknown) { // Specify the type of the error
        if (error instanceof Error) {
            res.status(400).json({ error: error.message }); // Use error.message for a known error type
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

const PORT = process.env.PORT || 8080;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error: unknown) => {
    console.error('Error syncing database:', error);
});
