import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './src/graphql/index.js';

const app = express();
const port = 4000;

app.use('/api', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
