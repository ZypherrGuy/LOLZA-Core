// src/graphql/player/schema.ts
import { gql } from 'apollo-server-express';
import { enumTypeDefs } from '../../enums';

export const playerTypeDefs = gql`
  scalar Date
  scalar JSON

  ${enumTypeDefs}

  type ContactDetails {
    email: String!
    phoneNumber: String
  }

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

  type Player {
    id: ID!
    utid: String!
    username: String!
    firstNames: String
    lastName: String
    nationality: String!
    resedencyCountry: String!
    contactDetails: ContactDetails!
    address: Address!
    IGN: String!
    playerTitle: PlayerTitle!
    role: PlayerRole!
    rank: PlayerRank!
    teamId: String
    ownedTeamId: String
    strapiHeadshotImageId: Int
    socialMedia: [SocialPlatform]
    linkedAccounts: [JSON]
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    Players: [Player!]!
    Player(id: ID!): Player
  }
`;
