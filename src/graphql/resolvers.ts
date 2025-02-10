import { mergeResolvers } from '@graphql-tools/merge';
import { userResolvers } from './modules/user/user.resolver';
import { teamResolvers } from './modules/team/team.resolver';
import { playerResolvers } from './modules/player/player.resolver';

export const resolvers = mergeResolvers([userResolvers, teamResolvers, playerResolvers]);
