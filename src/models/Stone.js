const { Schema, model, Types } = require('mongoose');
//TODO import real data model
const stoneSchema = new Schema({
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

const Stone = model('Stone', stoneSchema);

module.exports = { Stone };