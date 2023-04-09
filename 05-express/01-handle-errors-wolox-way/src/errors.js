const internalError = (message, internalCode) => ({
  message,
  internalCode,
});

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = (message) => internalError(message, exports.DEFAULT_ERROR);

exports.NOT_FOUND_ERROR = 'not_found_error';
exports.notFoundError = (message) => internalError(message, exports.NOT_FOUND_ERROR);

exports.EXTERNAL_API_ERROR = 'external_api_error';
exports.externalApiError = (message) => internalError(message, exports.EXTERNAL_API_ERROR);

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = (message) => internalError(message, exports.DATABASE_ERROR);

exports.NOT_FOUND_ERROR = 'not_found_error';
exports.notFoundError = (message) => internalError(message, exports.NOT_FOUND_ERROR);
