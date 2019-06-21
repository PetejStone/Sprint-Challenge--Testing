
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
})