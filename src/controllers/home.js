const { Router } = require('express');
const { login } = require('../services/user');
const { createToken } = require('../services/jwt');
// TODO replace with your own router
const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const result = await login("peter@gmail.com", "123456");
    const token = createToken(result);  
    res.cookie('token', token);
    console.log(req.user);
    res.render('home', { title: 'Home Page' });
});


module.exports = { homeRouter };