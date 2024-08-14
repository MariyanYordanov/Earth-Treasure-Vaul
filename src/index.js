const express = require("express");
const { expressConfig } = require("./config/express");
const { databaseConfig } = require("./config/database");
const { hbsConfig } = require("./config/hbs");
const { configRoutes } = require("./config/routes");
const { register, login } = require("./services/user");
const { createToken, verifyToken } = require("./services/jwt");

start();

async function start() {
    const app = express();

    await databaseConfig(app);
    hbsConfig(app);
    expressConfig(app);
    configRoutes(app);

    app.listen(3000, () => {
        console.log("Server is listening on port http://localhost:3000");
    });
}