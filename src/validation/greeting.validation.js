const Joi = require("joi");

const greetingPost = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = { greetingPost };
