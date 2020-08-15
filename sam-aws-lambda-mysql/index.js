const config = require('./config');
const db  = require('./db');

const year = config.year || 'no year';

exports.handler = async (event) => {
  const firstUser = await db('users').where('id', 1);
  const { name } = event;
  console.log(event);
  const response = {
    greeting: `Hello PLink my name is ${name} ${year}`,
    firstUser
  };

  return response;

};
