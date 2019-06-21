
//importing supertest from dependencies
const supertest = require('supertest');
//importing server.hs
const server = require('./server.js');

describe('server connection', () => {
    it('should return status 200 OK', () => {
        return supertest(server)
        .get('/')
        .expect(200)

    })

    //checking done
    it('should return status 200', done => {
        supertest('server')
        .get('/')
        .expect(200, done)
    })

    ////UNCOMMENT and add typo to server GET code to check for this error ///////
    // it('should return status 500 error if server code is wrong', () => {
    //     return supertest(server)
    //     .get('/')
    //     .expect(500)

    // })
})