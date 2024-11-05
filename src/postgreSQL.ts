import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // This may be necessary for self-signed certs
        },
    },
});

export default sequelize;
