/**
 * Custom error class for expected (operational) errors.
 * Extends the built-in Error with HTTP status code and status string.
 * Status is 'fail' for 4xx errors, 'error' for 5xx errors.
 */

export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    // Mark as operational: safe to show to client without leaking sensitive info
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
