const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const { readFileSync } = require('fs')
const { join } = require('path')

const resolvers = require('./src/resolvers');

const app = express();
const port = 4000;

const schema = buildSchema(
  readFileSync(
    join(__dirname, 'src', 'schema.graphql'),
    'utf-8'
  )
)

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});
