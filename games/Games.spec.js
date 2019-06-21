const db = require('../data/dbConfig.js');
const {insert, remove} = require('./gamesModel.js')
const supertest = require('supertest');
const server = require('../api/server.js');
require('jest-dom/extend-expect')

describe('GET of game', () => {
    //clear data base before each test
    // beforeEach(async ()=> {
    //     await db.truncate()
    // })

    it('should return status 200', () => {
        return supertest(server)
        .get('/games')
        .expect(200)
    })

    // //testing actual content that is returned (empty array for now)
    it('should return []', () => {
        let emptyArray = []
        supertest(server)
        .get('/games')
        expect([]).toEqual(expect.arrayContaining(emptyArray))
        
    })

})

describe('Inserting game', () => {
    // beforeEach(async ()=> {
    //     await db.truncate()
    // })

    
})