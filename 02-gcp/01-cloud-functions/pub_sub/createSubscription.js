const { PubSub } = require('@google-cloud/pubsub');

const pubSubClient = new PubSub();

exports.createSubscription = async () => {
    const subscription = await pubSubClient.topic('jose-topic').subscription('jose-escuchando');
    const [subscriptionExists] = await subscription.exists();

    if (subscriptionExists === false) {
      await subscription.create()
    }
    subscription.on('message', message => {
        console.log('Received message:', JSON.parse(message.data));
        message.ack();
    });
}
