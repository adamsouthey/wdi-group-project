/* globals api, expect, it, describe, afterEach, beforeEach */
require('../../spec_helper');

const Group = require('../../../models/group');

describe('Groups Controller Tests', () => {
  afterEach(done => {
    Group.collection.drop();
    done();
  });

  // INDEX ROUTE
  describe('GET /api/groups', () => {

    let token = null;

    beforeEach(done => {
      Group
        .create({
          eventName: 'test',
          meetupId: '12345678',
          localDate: '12-12-12',
          urlname: 'test',
          city: 'England',
          members: [],
          comments: []
        })
        .then(() => {
          api
            .post('/api/register')
            .set('Accept', 'application/json')
            .send({
              username: 'test',
              firstname: 'test',
              lastname: 'test',
              email: 'test@test.com',
              country: 'England',
              password: 'password',
              passwordConfirmation: 'password'
            })
            .end((err, res) => {
              token = res.body.token;

              done();
            });
        })
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });
  });


});
