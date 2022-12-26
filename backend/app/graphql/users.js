import { gql } from 'apollo-server-express'
import db from "../database.js";

export const typeDefs = gql`
    extend type Query {
        users: [User]
        user(id: ID!): User
    }
    type User {
        id: ID!
        name: String
        email: String
    }
`;

export const resolvers = {
    Query: {
        users: async () => db.users.findAll(),
        user: async (obj, args, context, info) =>
            db.users.findByPk(args.id),
    },
}