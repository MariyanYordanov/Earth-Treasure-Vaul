const { Data } = require('../models/Stone');
// TODO Replace with real data service
async function getAll() {
    return await Data.find().lean();  
}

async function getById(id) {
    return await Data.findOneById(id).lean();
}

async function create(data, creatorId) {

    const result = new Data({
        prop: data.prop,
        creater: data.creatorId
    });

    return await result.save();
}

async function update(id, data, userId) {

    const record = await Data.findById(id);
    if(!record){
        throw new ReferenceError('No such data' + id);
    }

    if(record.creator.toString() != userId){
        throw new ReferenceError('Access denied');
    }

    record.prop = data.prop;

    return await record.save();
}

async function deleteById(id, userId) {
    const record = await Data.findById(id);
    if(!record){
        throw new ReferenceError('No such data' + id);
    }

    if(record.creator.toString() != userId){
        throw new ReferenceError('Access denied');
    }

    return await Data.findByIdAndDelete(id);
}

module.exports = { getAll, getById, create, update, deleteById };
