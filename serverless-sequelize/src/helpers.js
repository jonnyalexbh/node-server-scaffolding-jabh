module.exports.getBody = (data) => JSON.parse(data.body);

module.exports.json = (data = null, status = 200) => ({
  statusCode: status,
  body: JSON.stringify({ data })
});
