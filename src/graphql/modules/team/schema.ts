import { gql } from 'apollo-server-express';

export const teamTypeDefs = gql`
  # The Team type represents a team in the system.
  type Team {
    id: ID!
    name: String!
    description: String
  }

  # Extend the root Query type with team-specific queries.
  extend type Query {
    # Fetch all teams.
    Teams: [Team!]!
    
    # Fetch a single team by its ID.
    Team(id: ID!): Team
  }

  # Extend the root Mutation type with team-specific mutations.
  extend type Mutation {
    # Create a new team with a name and an optional description.
    createTeam(name: String!, description: String): Team!
  }
`;
