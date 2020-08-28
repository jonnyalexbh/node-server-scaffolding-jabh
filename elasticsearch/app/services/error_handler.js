const logger = require('../logger');

exports.elasticSearchError = err => {
  logger.error(err.message, err);
  throw new Error('Elastic Search error');
};
