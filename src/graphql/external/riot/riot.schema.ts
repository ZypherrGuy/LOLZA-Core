import { gql } from 'apollo-server-express';

export const riotTypeDefs = gql`
  type RiotAccount {
    puuid: String!
    gameName: String!
    tagLine: String!
  }

  extend type Query {
    RiotAccount(gameName: String!, tagLine: String!): RiotAccount
  }
`;
