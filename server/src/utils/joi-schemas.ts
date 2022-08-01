import Joi from "joi";

export const newSalarySchema = Joi.object({
  jobTitle: Joi.string().required(),
  company: Joi.string().required(),
  city: Joi.string().required(),
  salary: Joi.number().min(5).required(),
  userId: Joi.string().required(),
  sector: Joi.string().required(),
});

export const idSchema = Joi.string().required();

export const userIdSchema = Joi.string().required();

export const updatedSalarySchema = Joi.object({
  jobTitle: Joi.string(),
  company: Joi.string(),
  city: Joi.string(),
  salary: Joi.array().required(),
  dateAdded: Joi.string(),
  sector: Joi.string(),
});

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  password: Joi.string()
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    )
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});
