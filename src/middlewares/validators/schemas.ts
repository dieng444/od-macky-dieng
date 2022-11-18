import Joi, { LanguageMessages } from 'joi';

export const EventSchema = {
  inputs: Joi.object().keys({
    lat: Joi.string(),
    lon: Joi.string().required(),
    type: Joi.string().required(),
  }),
};
