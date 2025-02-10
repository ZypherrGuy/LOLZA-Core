import { PlayerService } from '../../../services/PlayerService';
import { logger } from '../../../utils/logger';

const playerService = new PlayerService();

export const playerResolvers = {
  Query: {
    Players: async (_: any, __: any) => {
      try {
        const players = await playerService.getPlayers();
        return players;
      } catch (error) {
        logger.error('Error fetching players: %o', error);
        throw new Error('Failed to fetch players');
      }
    },
    Player: async (_: any, args: { id: string }) => {
      try {
        const player = await playerService.getPlayer(args.id);
        return player || null;
      } catch (error) {
        logger.error('Error fetching player: %o', error);
        throw new Error('Failed to fetch player');
      }
    },
  },
  // Field-level resolvers (if necessary) can remain here.
  Player: {
    contactDetails: (parent: any) => ({
      email: parent.email,
      phoneNumber: parent.phoneNumber,
    }),
    address: (parent: any) => ({
      unit: parent.unit,
      complex: parent.complex,
      streetNumber: parent.streetNumber,
      streetName: parent.streetName,
      city: parent.city,
      province: parent.province,
      zipCode: parent.zipCode,
      country: parent.country,
    }),
  },
};
