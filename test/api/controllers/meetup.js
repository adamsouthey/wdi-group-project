/* globals api, expect, it, describe, afterEach, beforeEach */

require('../../spec_helper');

//INDEX TESTS
describe('Events Index Controller Test', () => {
  describe('GET /api/events', () => {
    it('should return a 200 response', done => {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    it('should return an object of events', function(done) {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should return a single event object', function(done) {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.have.all.keys([
              'city',
              'events'
            ]);
          done();
        });
    });
  });
  //SHOW TESTS
  describe('GET /events/London-Learn-Ruby-on-Rails/nctscpyxdbkb', () => {
    it('should return an object of events on show', function(done) {
      api
        .get('/api/events/:groupName/:eventId')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});
