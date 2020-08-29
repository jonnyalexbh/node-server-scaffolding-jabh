exports.healthCheck = (_, res) => res.status(200).send({ health: 'it works' });
