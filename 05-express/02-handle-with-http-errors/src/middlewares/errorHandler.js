const createError = require('http-errors');
const logger = require('../logger');

exports.errorHandler = (err, req, res, next) => {
  const error = createError.isHttpError(err)
    ? err
    : createError.InternalServerError('An internal server error was occurred');

  logger.error(error);

  res.status(error.status).send({
    message: error.message,
    internal_code: error.name,
  });
};
