import Sequelize, { DataTypes } from "sequelize";
import priorities from "./models/priorities.js";
import status from "./models/status.js";
import tickets from "./models/tickets.js";
import users from "./models/users.js";

const sequelize = new Sequelize("ticketing-system", "admin", "123456", {
    host: "localhost",
    port: "8006",
    dialect: "mysql",
    define: {
        freezeTableName: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {
    Sequelize,
    sequelize,
    priorities: priorities(sequelize, DataTypes),
    status: status(sequelize, DataTypes),
    tickets: tickets(sequelize, DataTypes),
    users: users(sequelize, DataTypes)
};

export default db;
