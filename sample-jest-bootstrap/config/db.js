const config = require('../config').common.database;

module.exports = {
  development: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
