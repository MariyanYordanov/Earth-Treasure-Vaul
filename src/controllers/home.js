const { Router } = require('express');
const { login } = require('../services/user');
const { createToken } = require('../services/jwt');
// TODO replace with your own router
const homeRouter = Router();

homeRouter.get('/', (req, res) => {
    const gems = [ 1, 1, 1];
    res.render('home', { gems });
});


module.exports = { homeRouter };