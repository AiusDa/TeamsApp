import * as Joi from '@hapi/joi';

export const createUserSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string()
    .email()
    .required(),
  image: Joi.string(),
  teamId: Joi.string().required()
});
