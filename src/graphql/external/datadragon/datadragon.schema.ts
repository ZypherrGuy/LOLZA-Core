import { gql } from 'apollo-server-express';

export const dataDragonTypeDefs = gql`
  type Champion {
    id: String!
    key: String!
    name: String!
    title: String!
  }

  extend type Query {
    champions: [Champion!]!
    championByKey(key: String!): Champion
  }
`;
