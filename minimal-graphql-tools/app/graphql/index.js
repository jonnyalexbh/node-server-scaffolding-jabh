const { gql } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

const serviceBooks = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => serviceBooks,
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
