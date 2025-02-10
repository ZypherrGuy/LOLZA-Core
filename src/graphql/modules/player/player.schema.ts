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
    streetNumber: String
    streetName: String
    city: String
    province: String
    zipCode: String
    country: String
  }

  type Player {
    id: ID!
    utid: String!
    username: String!
    firstNames: String!
    lastName: String! 
    nationality: String
    resedencyCountry: String!
    contactDetails: ContactDetails
    address: Address
    ign: String!
    teamTitle: String
    role: String
    rank: String
    teamId: String
    ownedTeamId: String
    strapiHeadshotImageId: String
    discordUsername: String
    discordUserId: String
    twitter: String
    instagram: String
    twitch: String
    youtube: String
    riotId: String
    steamProfile: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    Players: [Player!]!
    Player(id: ID!): Player
  }
`;
