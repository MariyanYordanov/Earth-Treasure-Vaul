const { Router} = require('express');
const { isGuest } = require('../middlewares/guards');
const {} = require('cookie-parser');
//const result = await login("peter@gmail.com", "123456");
    //const token = createToken(result);  
    //res.cookie('token', token);
const userController = Router();

userController.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

userController.post('/login', isGuest(), async (req, res) => {
    try {
        const { email, password } = req.body;
        await req.auth.login(email, password);
        res.redirect('/');
    } catch (err) {
        console.error(err.message);
        const ctx = {
            errors: [err.message],
            userData: {
                email: req.body.email
            }
        };
        res.render('login', ctx);
    }
});

userController.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

userController.post('/register', isGuest(), async (req, res) => {
    try {
        const { email, password, rePass } = req.body;

        if (password != rePass) {
            throw new Error('Passwords don\'t match!');
        }

        await req.auth.register(email, password);
        res.redirect('/');

    } catch (err) {
        console.error(err.message);
        const ctx = {
            errors: [err.message],
            userData: {
                email: req.body.email
            }
        };
        res.render('register', ctx);
    }
});

userController.get('/logout', (req, res) => {
    cleanCookie(res);
    res.redirect('/');
});

module.exports = { userController };