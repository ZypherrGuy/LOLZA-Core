// src/graphql/schema.ts
import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    hello: String!
    Users: [User!]!
  }

  type Mutation {
    echo(message: String!): String!
    createUser(name: String!, email: String!): User!
  }
`;
