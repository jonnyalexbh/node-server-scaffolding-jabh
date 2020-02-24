const { getTransactionTest } = require('./controllers/sample-basic');
const { getTransactionBuilder, getTransactionPeriod } = require('./controllers/transactions-builder');
const transactions = require('./controllers/transactions');

exports.init = app => {
  app.get('/', getTransactionTest);
  app.get('/get-transaction-builder', getTransactionBuilder);
  app.get('/get-transaction-builder-period', getTransactionPeriod);
  app.get('/get-transaction', transactions.getTransaction);
};
