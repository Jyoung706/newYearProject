class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";

    Error.captureStackTrace(this, this.constructor);

    this.statusCode = 400 || 500;
  }
}

module.exports = { ValidationError };
