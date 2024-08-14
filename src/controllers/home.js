const { Router } = require('express');
const { getRecent } = require('../services/data');
// TODO replace with your own router
const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const stones = await getRecent();
    res.render('home', { stones });
});


module.exports = { homeRouter };