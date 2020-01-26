const ES = require('@elastic/elasticsearch');
const errorHandler = require('../services/error_handler');
const config = require('../../config').common.elasticsearch;
const logger = require('../logger');

const client = new ES.Client({
  node: config.host,
  ssl: {
    rejectUnauthorized: false
  }
});

exports.INDEX = config.index || 'trx-*';

exports.search = ({ index, body }) =>
  client
    .search({ index, body })
    .then(response => {
      logger.info('running query elasticsearch');
      return response.body;
    })
    .catch(errorHandler.elasticSearchError);
