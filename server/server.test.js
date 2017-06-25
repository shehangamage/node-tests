const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

  describe('#/', () => {
    it('sholud return Hello express! response', (done) => {

      request(app)
        .get('/')
        .expect(200)
        .expect('Hello express')
        .end(done);
    });
  });

  describe('#/error', () => {
    it('should be return 404', (done) => {
      request(app)
        .get('/error')
        .expect(404)
        .expect({
          error: 'Page not found.'
        })
        .end(done);
    });
  });

  describe('/more', () => {
    it('should be return 500', (done) => {
      request(app)
        .get('/more')
        .expect(500)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Server not found.'
          });
        })
        .end(done);
    });
  });


});
