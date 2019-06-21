const db = require('../data/dbConfig.js');
module.exports = {
    get,
    insert,
    findById
}

function get() {
    return db('games')
}

function findById(id) {
    return db('games').where({id: id})
    .first() //returns first option (only returns one option anyways) -- this pulls it out of array
}

async function insert(game) {

    const [id] = await db('games').insert(game); //inserts user and sets it == to id
  
    return findById(id); //returns the user that was created 
  }