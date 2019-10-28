const { infoBooks } = require("../data");

class Book {
  static all() {
    return infoBooks;
  }
}

module.exports = {
  Book,
};
