const Sequelize = require('sequelize');

const { STAGE, DB_NAME_TEST, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
const dbName = STAGE === 'testing' ? DB_NAME_TEST : DB_NAME;

const sequelize = new Sequelize(dbName, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
});

module.exports = sequelize;
