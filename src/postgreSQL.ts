import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User';  // Import the User model

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // This may be necessary for self-signed certs
        },
    },
    models: [User], 
    logging: console.log,
});

export default sequelize;
