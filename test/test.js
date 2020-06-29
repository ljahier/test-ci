const request = require('supertest');
const app = require('../index');

describe('GET /hello/lucas', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/hello/lucas')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});