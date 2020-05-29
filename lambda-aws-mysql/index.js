const config = require('./config');

const year = config.year || 'no year';

exports.handler = async (event) => {
  const { name } = event;
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello PLink my name is ${name} ${year}`),
  };
  return response;
};
