const config = require('../config');
const knex = require('knex');

module.exports = knex({
  client: 'mysql',
  connection: {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
  }
});
