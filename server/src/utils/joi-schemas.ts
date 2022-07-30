import Joi from "joi";

export const newSalarySchema = Joi.object({
  jobTitle: Joi.string().required(),
  company: Joi.string().required(),
  city: Joi.string().required(),
  salary: Joi.number().required(),
});

export const idSchema = Joi.string().required();

export const updatedSalarySchema = Joi.object({
  jobTitle: Joi.string(),
  company: Joi.string(),
  city: Joi.string(),
  salary: Joi.array(),
  dateAdded: Joi.string(),
});

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
