const { Router } = require('express');
// TODO replace with your own router
const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const gems = [ 1, 1, 1];
    res.render('home', { gems });
});


module.exports = { homeRouter };