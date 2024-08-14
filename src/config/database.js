const mongoose = require('mongoose');
require('../models/User');
require('../models/Stone');
// TODO import models

async function databaseConfig() {
    //todo set database connection
    await mongoose.connect('mongodb://localhost:27017/exam-db');

    console.log('Database connected');
}

module.exports = { databaseConfig };