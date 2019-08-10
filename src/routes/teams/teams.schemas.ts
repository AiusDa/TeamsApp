import * as Joi from '@hapi/joi';

export const createTeamSchema = Joi.object().keys({
  name: Joi.string().required()
});
