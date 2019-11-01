const app = require('./app');
const config = require('./config');

const port = config.common.api.port || 3000;

const server = app.listen(port, () => {
  console.log(`listening http://localhost:${server.address().port}`);
});
