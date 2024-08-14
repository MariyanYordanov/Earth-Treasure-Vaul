//TODO import routers
const { userController } = require('../controllers/user');
const { homeRouter } = require('../controllers/home');

function configRoutes(app){
    app.use(userController);
    app.use(homeRouter);
    
    //TODO set routers
}

module.exports = { configRoutes };    