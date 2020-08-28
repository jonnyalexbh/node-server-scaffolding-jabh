const axios = require('axios');

exports.getAlbums = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .catch(error => {
      throw new Error(error);
    });
