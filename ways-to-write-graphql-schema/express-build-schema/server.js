const express = require('express');
const { buildSchema } = require('graphql')
const gqlMiddleware = require('express-graphql')

const app = express();
const port = process.env.PORT || 4000;

const schema = buildSchema(`
  type Query {
    hello: String,
    greeting: String
  }
`)

const resolvers = {
  hello: () => {
    return 'Hello World'
  },
  greeting: () => {
    return 'Hello everyone'
  }
}

app.use(
  '/graphql',
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

const server = app.listen(port, function () {
  console.log(`listening http://localhost:${server.address().port}`);
});
