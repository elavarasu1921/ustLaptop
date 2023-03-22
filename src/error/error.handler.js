const ApiError = require("./base.error");

exports.errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    const { statusCode, devMessage } = err;
    res.status(statusCode).json({
      error: true,
      data: null,
      devMessage,
    });
    return;
  }
  res.status(500).json({
    error: true,
    data: null,
    devMessage: "Something went wrong",
  });
};
