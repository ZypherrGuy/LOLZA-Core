import { logger } from '../../../utils/logger';

logger.info('UserResolver Logger Service.');

export const userResolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
    Users: async (_: any, __: any, context: { db: any }) => {
      try {
        const result = await context.db.query('SELECT * FROM "Users"');
        console.log('Fetched users:', result.rows);
        return result.rows;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
      }
    },
  },
  Mutation: {
    echo: (_: any, args: { message: string }) => args.message,
    createUser: async (_: any, args: { name: string; email: string }, context: { db: any }) => {
      const { name, email } = args;
      try {
        const result = await context.db.query(
          'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
          [name, email]
        );
        return result.rows[0];
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
      }
    },
  },
};
