// src/index.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import dotenv from 'dotenv';
import pool from './config/postgres';
import { Pool } from 'pg';
import { getUserFromAuthHeader } from './middleware/auth';
import { logger } from './utils/logger';

dotenv.config();

interface MyContext {
  db: Pool;
  token?: string;
  user?: any; 
}

async function startServer() {
  const app = express();

  const apolloServer = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware<MyContext>(apolloServer, {
      context: async ({ req }) => {
        const token = req.headers.authorization;
        const user = getUserFromAuthHeader(token);
        if (user) {
          logger.info('User authenticated: %o', user);
        }
        return {
          db: pool,
          token,
          user,
        };
      },
    }) as any
  );

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    logger.info(`Server running at http://localhost:${PORT}/graphql`);
  });
}

startServer().catch((err) => {
  logger.error('Error starting server', err);
});
