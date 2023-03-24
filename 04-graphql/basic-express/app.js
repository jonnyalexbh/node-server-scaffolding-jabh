const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = 4000;

// defining the scheme
const schema = buildSchema(`
  type Query {
    hello: String
    client: String
    jonny: String
  }
`);

// configure the resolvers
const resolvers = {
  hello: () => {
    return 'Hello World'
  },
  client: () => {
    return 'Hello Client'
  },
  jonny: () => {
    return 'Hello Jonny'
  }
};

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});
