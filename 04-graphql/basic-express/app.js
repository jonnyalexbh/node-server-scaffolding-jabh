import express from 'express';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

import path from 'path';
import { readFileSync } from 'fs';
import resolvers from './src/resolvers.js';

const app = express();
const port = 4000;

const schema = buildSchema(
  readFileSync(
    path.join(new URL('src/schema.graphql', import.meta.url).pathname),
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
