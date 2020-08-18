module.exports = {
  development: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres'
  },
  test: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  },
  production: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres'
  },
};
