import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlHTTP } from "express-graphql";
import { prioritiesResolvers, prioritiesTypeDefs } from "./app/graphql/priorities.js";
import { statusResolvers, statusTypeDefs } from "./app/graphql/status.js";
import { ticketsResolvers, ticketsTypeDefs } from "./app/graphql/tickets.js";
import { usersResolvers, usersTypeDefs } from "./app/graphql/users.js";

export default function initGraphQL(app) {
    const executableSchema = makeExecutableSchema({
        typeDefs: [prioritiesTypeDefs, ticketsTypeDefs, statusTypeDefs, usersTypeDefs],
        resolvers: [prioritiesResolvers, ticketsResolvers, statusResolvers, usersResolvers]
    });

    const graphqlOptions = {
        schema: executableSchema,
        graphiql: {
            endpoint: "/graphiql"
        }
    };

    app.all(["/graphql", "/graphiql"], graphqlHTTP(graphqlOptions));
}
