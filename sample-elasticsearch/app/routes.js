const { elasticsearchTest } = require('./controllers/sample-elasticsearch');

exports.init = app => {
  app.get('/', elasticsearchTest);
};
