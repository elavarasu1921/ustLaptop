class ApiError {
  statusCode;
  devMessage;
  constructor(statusCode, devMessage) {
    this.statusCode = statusCode;
    this.devMessage = devMessage;
  }
  static badRequest = (devMessage) => new ApiError(400, devMessage);
}

module.exports = ApiError;
