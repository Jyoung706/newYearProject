class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";

    Error.captureStackTrace(this, this.constructor);

    this.statusCode = 409 || 500;
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";

    Error.captureStackTrace(this, this.constructor);

    this.statusCode = 400 || 500;
  }
}
module.exports = { ValidationError, BadRequestError };
