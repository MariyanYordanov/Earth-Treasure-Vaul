//TODO import routers

const { homeRouter } = require('../controllers/home');

function configRoutes(app){
    app.use(homeRouter);
    //TODO set routers
}

module.exports = { configRoutes };    