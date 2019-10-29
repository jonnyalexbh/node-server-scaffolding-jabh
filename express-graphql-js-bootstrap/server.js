const express = require('express');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const gqlMiddleware = require('express-graphql')

const app = express();
const port = process.env.PORT || 4000;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'Hello World';
        },
      },
      greeting: {
        type: GraphQLString,
        resolve() {
          return 'Hello everyone';
        },
      },
    },
  }),
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
