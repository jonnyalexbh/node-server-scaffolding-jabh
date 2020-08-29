const { healthCheck } = require('./controllers/healthCheck');
const { books } = require('./controllers/books');

exports.init = (app) => {
  app.get('/health', healthCheck);
  app.post('/books', books);
};
