const Joi = require("joi");
const pick = require("../utils/pick");
const { esErrors, enErrors } = require("../config/constants");

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({
      errors: {
        label: "key",
        language: req.headers["accept-language"] ?? "en",
      },
      abortEarly: false,
      messages: {
        es: { ...esErrors },
        en: { ...enErrors },
      },
    })
    .validate(object);

  if (error) {
    const errorMessage = error.details
      .map(
        (details) =>
          `${req.t(details.context.label) ?? details.context.label} ${
            details.message
          }`
      )
      .join(", ");
    throw new Error(errorMessage);
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
