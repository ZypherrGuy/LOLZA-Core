import { gql } from 'apollo-server-express';

export const teamTypeDefs = gql`
  type Team {
    id: ID!
    name: String!
    description: String
  }

  extend type Query {
    Teams: [Team!]!
    Team(id: ID!): Team
  }
`;
