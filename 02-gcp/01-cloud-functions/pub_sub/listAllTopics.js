const { PubSub } = require('@google-cloud/pubsub');

const pubSubClient = new PubSub();

exports.listAllTopics = async () => {
    const [topics] = await pubSubClient.getTopics();
    topics.forEach(topic => console.log(topic.name));
}
