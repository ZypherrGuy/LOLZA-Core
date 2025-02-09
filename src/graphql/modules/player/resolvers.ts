import { logger } from '../../../utils/logger';

logger.info('PlayerResolver');

export const playerResolvers = {
  Query: {
    Players: async (_: any, __: any, context: { db: any }) => {
      try {
        const result = await context.db.query('SELECT * FROM "Players"');
        return result.rows;
      } catch (error) {
        console.error('Error fetching players:', error);
        throw new Error('Failed to fetch players');
      }
    },
    Player: async (_: any, args: { id: string }, context: { db: any }) => {
      try {
        const result = await context.db.query('SELECT * FROM "Players" WHERE id = $1', [args.id]);
        return result.rows[0];
      } catch (error) {
        console.error('Error fetching player:', error);
        throw new Error('Failed to fetch player');
      }
    },
  },
};
