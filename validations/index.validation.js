import Joi from "joi";

export const userIdParamSchema = Joi.object({
  userId: Joi.string().required(),
})