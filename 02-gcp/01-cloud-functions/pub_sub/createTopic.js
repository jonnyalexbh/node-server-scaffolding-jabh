const { PubSub } = require('@google-cloud/pubsub');

const pubSubClient = new PubSub();

exports.createTopic = async () => {
    await pubSubClient.createTopic('jose-topic');
}
