exports.handler = async (event) => {
  console.log('DEBUG: Name is: ' + event.name)
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
