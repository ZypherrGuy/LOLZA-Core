import { logger } from '../../../utils/logger';

logger.info('UserResolver');

export const userResolvers = {
  Query: {
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
};
