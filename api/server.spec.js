
//importing supertest from dependencies
const supertest = require('supertest');
//importing server.hs
const server = require('./server.js');

describe('server connection', () => {
    it('should return status 200 OK', () => { //status of 200 for server request test
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

    //testing actual content that is returned
    it('should return {api: working}', () => {
        supertest(server)
        .get('/')
        .then(res => {
            expect(res.body).toEqual({api: 'working'})
        })
        
    })

      //async  and await testing for json response
      it('should return 200', async () => {
        await supertest(server)
        .get('/')
        .expect('Content-Type', /json/i) //expect the content type to be json format
    })

    // ////UNCOMMENT and add typo to server GET code to check for this error ///////
    // it('should return {api: working}', () => {
    //     supertest(server)
    //     .get('/')
    //     .then(res => {
    //         expect(200)
    //     })
    //     .catch( err => {
    //         expect(500)
    //     })
   // })
})