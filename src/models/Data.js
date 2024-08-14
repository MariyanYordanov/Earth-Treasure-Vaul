const { Schema, model, Types } = require('mongoose');
require('../models/User');
require('../models/Data');
//TODO import real data model
const dataSchema = new Schema({
    prop: {
        type: String,
        required: true,
    },
    creator: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Data = model('Data', dataSchema);

module.exports = { Data };