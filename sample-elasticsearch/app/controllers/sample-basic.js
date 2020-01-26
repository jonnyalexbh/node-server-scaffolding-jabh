const ES = require('@elastic/elasticsearch');
const config = require('../../config').common.elasticsearch;
const { TRANSACTION_ID_TEST } = require('../constants');
const logger = require('../logger');

const client = new ES.Client({
  node: config.host,
  ssl: {
    rejectUnauthorized: false
  }
});

exports.getTransactionTest = async (req, res) => {
  try {
    const result = await client.search({
      index: config.index,
      body: {
        query: {
          match: { _id: TRANSACTION_ID_TEST }
        }
      }
    });
    res.send(result);
  } catch (error) {
    logger.info(error);
    res.send(error);
  }
}
