import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema'

import path from 'path';
import { readFileSync } from 'fs';
import resolvers from './src/resolvers.js';

const app = express();
const port = 4000;

const typeDefs = readFileSync(
  path.join(new URL('src/schema.graphql', import.meta.url).pathname),
  'utf-8'
)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use('/api', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
