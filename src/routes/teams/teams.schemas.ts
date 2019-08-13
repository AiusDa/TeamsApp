import * as Joi from '@hapi/joi';

export const createTeamSchema = Joi.object().keys({
  name: Joi.string().required()
});

export const updateTeamSchema = Joi.object().keys({
  name: Joi.string().required()
});
