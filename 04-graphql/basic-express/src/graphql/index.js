import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema'

import teams from './teams/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typeDefs = readFileSync(
  join(__dirname, 'schema.graphql'),
  'utf-8'
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...teams.queries,
    },
  },
})

export default schema;
