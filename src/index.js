const express = require('express');
const { expressConfig } = require('../src/config/express');
const { databaseConfig } = require('../src/config/database');   
const { hbsConfig } = require('../src/config/hbs');
const { configRoutes } = require('../src/config/routes');
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