const express = require('express');
const createError = require('http-errors');
const app = express();
const port = 3000;

const { errorHandler } = require('./src/middlewares/errorHandler');

// middleware
app.use((req, res, next) => {
  console.log('LOGGED');
  next();
});

app.get('/', (req, res) => {
  res.json({ greeting: 'Hello' });
});

app.get('/users', (req, res) => {
  throw createError.ServiceUnavailable(
    'An error has occurred when try to get all users because the database failure!'
  );
  // throw createError(404, 'An error has occurred when try to get all users  because the database failure!');
  // throw new Error('not found');
});

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
