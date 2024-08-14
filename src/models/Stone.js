const { Schema, model, Types } = require('mongoose');
require('./User');
require('./Stone');
//TODO import real data model
const dataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    likes: {
        type: [Types.ObjectId],
        ref: 'User',
        default: [],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Data = model('Data', dataSchema);

module.exports = { Data };