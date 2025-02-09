import { mergeResolvers } from '@graphql-tools/merge';
import { userResolvers } from './modules/user/resolvers';
import { teamResolvers } from './modules/team/resolvers';
import { playerResolvers } from './modules/player/resolvers';

export const resolvers = mergeResolvers([userResolvers, teamResolvers, playerResolvers]);
