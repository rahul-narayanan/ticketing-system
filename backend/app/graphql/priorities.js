import db from "../database.js";

export const prioritiesTypeDefs = `
    type Query {
        priorities: [Priority]
        priority(id: ID!): Priority
    }
    type Priority {
        id: ID!
        slug: String
        name: String
    }
`;

export const prioritiesResolvers = {
    Query: {
        priorities: async () => db.priorities.findAll(),
        priority: async (obj, args, context, info) => db.priorities.findByPk(args.id)
    }
};
