var request = require('supertest');

describe('Sample controller', function() {

  describe('#Home', function() {
    it('It must contain 100 as data in route', function (done) {
      request(sails.hooks.http.app)
        .get('/')
        .expect(200 , {
          data: 100
        }, done);
    });
  });

});
