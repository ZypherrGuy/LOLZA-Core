import { mergeResolvers } from '@graphql-tools/merge';
import { userResolvers } from './modules/user/resolvers';
import { teamResolvers } from './modules/team/resolvers';

export const resolvers = mergeResolvers([userResolvers, teamResolvers]);
