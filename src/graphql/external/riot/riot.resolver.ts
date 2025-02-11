import { PlayerService } from '../../../services/PlayerService';
import { logger } from '../../../utils/logger';

const playerService = new PlayerService();

export const riotResolvers = {
  Query: {
    RiotAccount: async (_: any, args: { gameName: string; tagLine: string }) => {
      try {
        const riotAccount = await playerService.fetchRiotAccount(args.gameName, args.tagLine);
        return riotAccount;
      } catch (error) {
        logger.error('Error fetching Riot account: %o', error);
        throw new Error('Failed to fetch Riot account.');
      }
    },
  },
};
