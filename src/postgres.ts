// postgreSQL.ts
import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User';

const sequelize = new Sequelize(process.env.DATABASE_URL as string,{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    models: [User],  
    logging: false, 
});

sequelize.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error('Unable to connect to the database:', error));

export default sequelize;
