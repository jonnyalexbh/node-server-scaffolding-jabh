const errors = require('../errors');
const logger = require('../logger');

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.DEFAULT_ERROR]: 500,
  [errors.NOT_FOUND_ERROR]: 404,
  [errors.EXTERNAL_API_ERROR]: 500,
  [errors.DATABASE_ERROR]: 503,
};

exports.errorHandler = (error, _, res, next) => {
  if (error.internalCode) {
    res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  } else {
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  logger.error(error);
  return res.send({
    message: error.message,
    internal_code: error.internalCode,
  });
};
