// index.ts
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
        const user = await User.create(req.body);  // Will insert into the existing table
        res.status(201).json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

const PORT = process.env.PORT || 8080;

// Just connect and start the server without syncing
sequelize.authenticate().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error: unknown) => {
    console.error('Unable to connect to the database:', error);
});
