const { createTopic } = require('./pub_sub/createTopic');
const { publicMessage } = require('./pub_sub/publicMessage');
const { listAllTopics } = require('./pub_sub/listAllTopics');
const { createSubscription } = require('./pub_sub/createSubscription');

exports.helloWorld = (req, res) => {
  if (req.body.type === 'all-topics') {
    listAllTopics();
  }
  if (req.body.type === 'create-topic') {
    createTopic();
  }
  if (req.body.type === 'public-message') {
    publicMessage();
  }
  if (req.body.type === 'create-suscription') {
    createSubscription();
  }

  res.send('Hello, World');
};
