import { gql } from 'apollo-server-express';

export const playerTypeDefs = gql`
  scalar Date
  scalar JSON

  # A type for contact details
  type ContactDetails {
    email: String!
    phoneNumber: String
  }

  # A type for address details
  type Address {
    unit: String
    complex: String
    streetNumber: String!
    streetName: String!
    city: String!
    province: String!
    zipCode: String!
    country: String!
  }

  # The updated Player type reflecting the front‑end interface
  type Player {
    id: ID!
    utid: String!
    username: String!
    firstNames: String
    lastName: String
    nationality: String!
    resedencyCountry: String!  # Note: This spelling follows your front‑end interface
    contactDetails: ContactDetails!
    address: Address!
    IGN: String!
    playerTitle: String!
    role: String!
    rank: String!
    teamId: String
    ownedTeamId: String
    strapiHeadshotImageId: Int
    socialMedia: [JSON]
    linkedAccounts: [JSON]
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    Players: [Player!]!
    Player(id: ID!): Player
  }
`;
