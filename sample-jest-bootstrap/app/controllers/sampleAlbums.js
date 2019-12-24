const serviceAlbum = require('../services/album');

exports.sampleJestAlbums = (_, res, next) =>
  serviceAlbum
    .getAlbums()
    .then(albums => {
      res.status(200).send(albums);
    })
    .catch(next);
