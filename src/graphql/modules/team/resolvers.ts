import { logger } from '../../../utils/logger';

logger.info('TeamResolver Logger Service.');

export const teamResolvers = {
  Query: {
    Teams: async (_: any, __: any, context: { db: any }) => {
      try {
        const result = await context.db.query('SELECT * FROM "Teams"');
        return result.rows;
      } catch (error) {
        console.error('Error fetching teams:', error);
        throw new Error('Failed to fetch teams');
      }
    },
    Team: async (_: any, args: { id: string }, context: { db: any }) => {
      try {
        const result = await context.db.query('SELECT * FROM "Teams" WHERE id = $1', [args.id]);
        return result.rows[0];
      } catch (error) {
        console.error('Error fetching team:', error);
        throw new Error('Failed to fetch team');
      }
    },
  },
  Mutation: {
    createTeam: async (_: any, args: { name: string; description?: string }, context: { db: any }) => {
      try {
        const result = await context.db.query(
          'INSERT INTO "Teams"(name, description) VALUES($1, $2) RETURNING *',
          [args.name, args.description]
        );
        return result.rows[0];
      } catch (error) {
        console.error('Error creating team:', error);
        throw new Error('Failed to create team');
      }
    },
  },
};
