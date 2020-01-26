const logger = require('../logger');
const config = require('../../config').common.elasticsearch;
const ES = require('@elastic/elasticsearch');

const client = new ES.Client({
  node: config.host,
  ssl: {
    rejectUnauthorized: false
  }
});

exports.elasticsearchTest = async (req, res) => {
  try {
    const result = await client.search({
      index: config.index,
      body: {
        query: {
          match: { _id: '829ce6fd30abff0fc22cef0f003985ae3545ee3825f32e6459aae0da2f8be241' }
        }
      }
    });
    res.send(result);
  } catch (error) {
    logger.info(error);
    res.send(error);
  }
}
