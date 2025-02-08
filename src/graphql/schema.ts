import { gql } from 'apollo-server-express';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { userTypeDefs } from './modules/user/schema';
import { teamTypeDefs } from './modules/team/schema';

const baseTypeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

export const typeDefs = mergeTypeDefs([baseTypeDefs, userTypeDefs, teamTypeDefs]);
