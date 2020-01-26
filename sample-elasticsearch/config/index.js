require('dotenv').config();

const config = {
  common: {
    api: {
      port: process.env.PORT,
    },
    elasticsearch: {
      host: process.env.ELASTICSEARCH_HOST,
      index: process.env.ELASTICSEARCH_INDEX,
    },
  },
};

module.exports = config;
