import db from "../database.js";

export const statusTypeDefs = `
    type Query {
        allStatus: [Status]
        status(id: ID!): Status
    }
    type Status {
        id: ID!
        slug: String
        name: String
    }
`;

export const statusResolvers = {
    Query: {
        allStatus: async () => db.status.findAll(),
        status: async (obj, args, context, info) =>
            db.status.findByPk(args.id)
    }
};
