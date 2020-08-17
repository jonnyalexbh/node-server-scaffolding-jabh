const Sequelize = require('sequelize')

const db = require('../db');
const Author = require("../models/author")(db, Sequelize);

exports.getAll = async () => {
  const authors = await Author.findAll();
  return {
    statusCode: 200,
    body: JSON.stringify({ authors }),
  };
};

exports.storeAuthor = async ({ first_name: firstName, last_name: lastName, email, date_of_birth: dateOfBirth }) => {
  const author = await Author.create({ firstName, lastName, email, dateOfBirth });
  return {
    statusCode: 200,
    body: JSON.stringify({ author }),
  };
};
