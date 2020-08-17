'use strict';

const { getAll, storeAuthor } = require('./src/services/author');
const { getBody } = require('./src/helpers');

module.exports.getAllAuthors = _ => {
  return getAll();
};

module.exports.storeAuthor = event => {
  return storeAuthor(getBody(event));
};
