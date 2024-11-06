// postgreSQL.ts
import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User';

const sequelize = new Sequelize(process.env.DaTABASE_URL as string,{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    models: [User],  // Register your models here
    logging: false,  // Set to true if you want Sequelize to log SQL queries
});

sequelize.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error('Unable to connect to the database:', error));

export default sequelize;
