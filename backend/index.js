

import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from 'apollo-server-express';
import * as GraphQLTickets from "./app/graphql/tickets.js";
import * as GraphQLPriorities from "./app/graphql/priorities.js";
import * as GraphQLStatus from "./app/graphql/status.js";
import * as GraphQLUsers from "./app/graphql/users.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

(async () => {
    const server = await new ApolloServer({
        modules: [GraphQLTickets, GraphQLPriorities, GraphQLStatus, GraphQLUsers]
    });
    await server.start();   
    server.applyMiddleware({app});
    console.log("Graphql server started at " + server.graphqlPath)
})();

app.get("/", (req, res) => {
    res.status(200).json("Hello Rider");
});

app.listen(PORT, () => {
    console.log("Ticketing backend started on port " + PORT);
});