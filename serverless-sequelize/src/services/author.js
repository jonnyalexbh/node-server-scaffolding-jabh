const Sequelize = require('sequelize')

const db = require('../db');
const logger = require('../logger');
const Author = require("../models/author")(db, Sequelize);
const { json } = require('../helpers');
const { parseCreateAuthor } = require('../mappers');

exports.getAll = async () => {
  try {
    logger.info('Trying to create a author');
    const authors = await Author.findAll();
    return json(authors);
  } catch (error) {
    logger.error(error);
    throw new Error('Cannot fetch authors');
  }
};

exports.storeAuthor = async (body) => {
  try {
    const { firstName, lastName, email, dateOfBirth } = parseCreateAuthor(body);
    logger.info('Trying to create a author');
    const author = await Authorr.create({ firstName, lastName, email, dateOfBirth });
    return json(author, 201);
  } catch (error) {
    logger.error(error.message);
    throw new Error('Cannot create author');
  }
};
