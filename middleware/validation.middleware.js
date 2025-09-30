import { AppError } from "../utils/helpers/appError.helper.js";

/**
 * Returns a validation middleware for requests.
 *
 * @param {Object} schema - Joi (or compatible) validation schema.
 * @param {string} [source='body'] - Request property to validate (e.g., 'body', 'query', 'params').
 *
 * Usage:
 *   router.post('/users', validate(userSchema), controller.createUser)
 */

// Validate request data
export const validate = (schema, source = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[source], {
      abortEarly: false, // collect all errors instead of stopping at the first
      stripUnknown: true, // remove fields not defined in the schema
    });

    if (error) {
      // Combine all error messages into one readable string
      const errorMessage = error.details.map((d) => d.message).join(", ");
      return next(new AppError(errorMessage, 400));
    }

    req[source] = value; // use sanitized data
    next();
  };
};
