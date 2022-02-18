const { PubSub } = require('@google-cloud/pubsub');

const pubSubClient = new PubSub();

exports.publicMessage = async () => {
    const data = 'Soy el mejor';
    const dataBuffer = Buffer.from(data);
    await pubSubClient
        .topic('jose-topic')
        .publish(dataBuffer);
}
