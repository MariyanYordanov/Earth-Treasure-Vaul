const { Stone } = require('../models/Stone');
const mongoose = require('mongoose');
// TODO Replace with real data service
async function getAll() {
    return await Stone.find().lean();  
}

async function getById(id) {
    return await Stone.findOneById(id).lean();
}

async function getRecent(){
    return await Stone.find().sort({ $natural: -1 }).limit(3);
}

async function create(data, ownerId) {

    const result = new Stone({
        prop: data.prop,
        creater: data.creatorId
    });

    return await result.save();
}

async function update(id, data, userId) {

    const record = await Stone.findById(id);
    if(!record){
        throw new ReferenceError('No such data' + id);
    }

    if(record.creator.toString() != userId){
        throw new ReferenceError('Access denied');
    }

    record.name = data.name;
    record.category = data.category;
    record.owner = data.owner;

    return await record.save();
}

async function deleteById(id, userId) {
    const record = await Stone.findById(id);
    if(!record){
        throw new ReferenceError('No such data' + id);
    }

    if(record.creator.toString() != userId){
        throw new ReferenceError('Access denied');
    }

    return await Stone.findByIdAndDelete(id);
}

module.exports = { getAll, getById, create, update, deleteById, getRecent };
