const { search, INDEX } = require('./elasticsearch');
const bodybuilder = require('bodybuilder');
const { TRANSACTION_ID_TEST } = require('../constants');

exports.getTransactionById = () => {
  const body = bodybuilder()
    .query('match', '_id', TRANSACTION_ID_TEST)
    .build();

  return search({ index: INDEX, body });
};
