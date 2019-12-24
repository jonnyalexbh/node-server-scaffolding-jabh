const request = require('supertest');
const app = require('../app');

const { albumsMock } = require('./mocks/albums');
const serviceAlbums = require('../app/services/album');

const mock = serviceAlbums.getAlbums = jest.fn(() => Promise.resolve(albumsMock));

describe('Albums', () => {
  it('should list the albums', (done) => {
    request(app).get('/sample-albums').then((res) => {
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledTimes(1);
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(albumsMock);
      done();
    });
  });
});
