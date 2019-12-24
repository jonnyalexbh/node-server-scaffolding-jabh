const { sampleJestBasic } = require('./controllers/sample-jest');
const { sampleJestAlbums } = require('./controllers/sampleAlbums');

exports.init = (app) => {
  app.get('/sample-test', sampleJestBasic);
  app.get('/sample-albums', sampleJestAlbums);
};
