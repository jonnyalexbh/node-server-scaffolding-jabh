const express = require('express');
const app = express();
const port = 3000;

const { errorHandler } = require('./src/middlewares/errorHandler');
const errors = require('./src/errors');

app.use((req, res, next) => {
  console.log('LOGGED');
  next();
});

app.get('/', (req, res) => {
  res.json({ greeting: 'Hello' });
});

app.get('/users', (req, res) => {
  throw errors.externalApiError('An error has occurred when try to get all users because the database failure!');
  // throw new Error('not found');
});

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
