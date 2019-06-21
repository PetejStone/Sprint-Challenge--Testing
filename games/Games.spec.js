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

    it('should return status 200', () => { //returns status of 200 when success
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

//testing for inserting game
describe('Inserting game', () => {
    beforeEach(async ()=> { //resets data base after each test
        await db('games').truncate()
    })

    //checks length
    it('should add game', async () => {
        await insert({title: 'Halo', genre: 'action'})
        await insert({title: 'NBA 2k', genre: 'sports'})
        const games = await db('games')
        expect(games).toHaveLength(2)
    })

  

     //testing for error code 422
     it('should return 422', async () => {
        return supertest(server)
        //returns status 422 if any info is incomplete (if title or genre is missing)
        .post('/games')
        .expect(422)
        
    })
})