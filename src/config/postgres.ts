// src/postgres.ts
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Choose which connection details to use
const usePublic = true; // or determine this based on NODE_ENV or another flag

const host = usePublic ? process.env.PUBLIC_DB_HOST : process.env.DB_HOST;
const port = usePublic ? process.env.PUBLIC_DB_PORT : process.env.DB_PORT;

const connectionString = `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${host}:${port}/${process.env.DB_NAME}`;

const pool = new Pool({
  connectionString,
});

async function testConnection() {
    try {
      const res = await pool.query('SELECT NOW()');
      console.log('Connected to PostgreSQL at:', res.rows[0].now);
    } catch (err) {
      console.error('Error connecting to PostgreSQL:', err);
    }
}

testConnection();

// Optional: Handle any errors that occur when the pool is idle
pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});

export default pool;
