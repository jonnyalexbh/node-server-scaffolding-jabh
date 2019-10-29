const express = require('express');
const gqlMiddleware = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools');

const app = express();
const port = process.env.PORT || 4000;

const typeDefs = `
  type Query {
    hello: String,
    greeting: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return 'Hello World';
    },
    greeting: (root, args, context) => {
      return 'Hello everyone';
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(
  '/graphql',
  gqlMiddleware({
    schema: schema,
    graphiql: true,
  }),
);

const server = app.listen(port, function () {
  console.log(`listening http://localhost:${server.address().port}`);
});
