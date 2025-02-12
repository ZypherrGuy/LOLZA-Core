import { mergeResolvers } from '@graphql-tools/merge';
import { userResolvers } from './modules/user/user.resolver';
import { teamResolvers } from './modules/team/team.resolver';
import { playerResolvers } from './modules/player/player.resolver';
import { riotResolvers } from './external/riot/riot.resolver';
import { dataDragonResolvers } from './external/datadragon/datadragon.resolver';

export const resolvers = mergeResolvers([
  userResolvers,
  teamResolvers,
  playerResolvers,
  riotResolvers,
  dataDragonResolvers
]);
