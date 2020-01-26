const ES = require('@elastic/elasticsearch');
const config = require('../../config').common.elasticsearch;
const { TRANSACTION_ID_TEST } = require('../constants');
const bodybuilder = require('bodybuilder');
const logger = require('../logger');

const client = new ES.Client({
  node: config.host,
  ssl: {
    rejectUnauthorized: false
  }
});

exports.getTransactionBuilder = async (_, res) => {
  try {
    const body = bodybuilder()
      .query('match', '_id', TRANSACTION_ID_TEST)
      .build()

    const result = await client.search({
      index: config.index,
      body
    });

    res.send(result);
  } catch (error) {
    logger.info(error);
    res.send(error);
  }
}
