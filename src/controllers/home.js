const { Router } = require('express');
const { login } = require('../services/user');
const { createToken } = require('../services/jwt');
// TODO replace with your own router
const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const gems = [1,2,3,4,5,6,7,8,9,10];
    res.render('home', { title: 'Home Page', gems });
});


module.exports = { homeRouter };