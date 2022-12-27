import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import initGraphQL from "./graphql-init.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}));

initGraphQL(app);

app.listen(PORT, () => {
    console.log(`Ticketing backend started on port ${PORT}`);
});
