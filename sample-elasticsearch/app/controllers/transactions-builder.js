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

const builderMonthTransactions = (from, to, interval) =>
  bodybuilder().aggregation(
    'date_histogram',
    'date',
    {
      interval: '1M',
      min_doc_count: 0,
      time_zone: config.time_zone,
      extended_bounds: {
        min: from,
        max: to
      }
    },
    'months',
    agg => agg.aggregation('sum', 'sum_of_value', 'amount')
  );

exports.getTransactionPeriod = async (_, res) => {
  try {
    const body = builderMonthTransactions(1514782800000, 1609477199999)
      .aggregation(
        'date_histogram',
        'date',
        {
          interval: '1y',
          min_doc_count: 1,
          time_zone: config.time_zone,
          extended_bounds: {
            min: 1514782800000,
            max: 1609477199999
          }
        },
        'years',
        agg => agg.aggregation('sum', 'sum_of_value', 'amount')
      )
      .query('match', 'pos_id', 14744569)
      .query('range', 'date', {
        gte: 1514782800000,
        lte: 1609477199999,
        format: 'epoch_millis'
      })
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

