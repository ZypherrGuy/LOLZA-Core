import { gql } from 'apollo-server-express';

export const playerTypeDefs = gql`
  type Player {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    Players: [Player!]!
    Player(id: ID!): Player
  }
`;
