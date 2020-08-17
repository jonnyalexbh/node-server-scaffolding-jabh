'use strict';

const { getAll, storeAuthor } = require('./src/services/author');

module.exports.getAllAuthors = _ => {
  return getAll();
};

module.exports.storeAuthor = event => {
  return storeAuthor(JSON.parse(event.body));
};
