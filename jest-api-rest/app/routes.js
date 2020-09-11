const { healthCheck, hello } = require('./controllers/healthCheck');
const { books } = require('./controllers/books');

exports.init = (app) => {
  app.get('/health', healthCheck);
  app.get('/hello', hello);
  app.post('/books', books);
};
