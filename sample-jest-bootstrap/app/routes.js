const { sampleJestBasic } = require('./controllers/sample-jest');

exports.init = (app) => {
  app.get('/sample-test', sampleJestBasic);
};
