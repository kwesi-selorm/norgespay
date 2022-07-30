import Joi from "joi";

export const newSalarySchema = Joi.object({
  jobTitle: Joi.string().required(),
  company: Joi.string().required(),
  city: Joi.string().required(),
  salary: Joi.number().required(),
  userId: Joi.string().required(),
});

export const idSchema = Joi.string().required();

export const updatedSalarySchema = Joi.object({
  jobTitle: Joi.string(),
  company: Joi.string(),
  city: Joi.string(),
  salary: Joi.array(),
  dateAdded: Joi.string(),
  userId: Joi.string().required(),
});

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.ref("password"),
});
