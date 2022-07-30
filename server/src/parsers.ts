import { NextFunction } from "express-serve-static-core";
import { AppError } from "./utils/classes/AppError";
import {
  AddedSalary,
  AddSalaryRequest,
  LoginRequest,
  NewUser,
  SignUpRequest,
  UpdatedSalary,
  UpdateSalaryRequest,
} from "./types/types";
import {
  idSchema,
  loginSchema,
  newSalarySchema,
  signUpSchema,
  updatedSalarySchema,
} from "./utils/joi-schemas";

/* Async function error handling: Pass error instance to next function for handling, 
else throw new Error as usual */

//ADD SALARY INPUT
export function newSalaryParser(req: AddSalaryRequest, next: NextFunction) {
  const { error, value } = newSalarySchema.validate(req.body, {
    abortEarly: false,
  }); //Ensure all fields are validated before returning the error
  if (error) {
    const errorMsgs = error.details.map((m) => m.message);
    const errorMsgsString = errorMsgs.join(", ");
    next(new AppError(errorMsgsString, 401));
    return;
  }
  const newSalary: AddedSalary = value;
  return newSalary;
}

//UPDATE SALARY INPUT//
export function updateSalaryParser(
  req: UpdateSalaryRequest,
  next: NextFunction
) {
  const { error: idError, value: id } = idSchema.validate(req.params.id);
  const { error: updatedSalaryError, value: updatedSalary } =
    updatedSalarySchema.validate(req.body.updatedSalary, {
      abortEarly: false,
    });

  if (idError) {
    next(new AppError(idError.details[0].message, 400));
    return;
  }
  if (updatedSalaryError) {
    const errorMsgs = updatedSalaryError.details.map((m) => m.message);
    const errorMsgsString = errorMsgs.join(", ");
    next(new AppError(errorMsgsString, 400));
    return;
  }
  const _id: string = id;
  const updatedSalaryDetails: UpdatedSalary = updatedSalary;
  return { _id, updatedSalaryDetails };
}

//LOGIN INPUT//
export function loginParser(req: LoginRequest, next: NextFunction) {
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    next(new Error(error.details[0].message));
    return;
  }
  const username: string = value.username;
  const password: string = value.password;
  return { username, password };
}

//SIGNUP INPUT
export function signupParser(req: SignUpRequest, next: NextFunction) {
  const { error, value } = signUpSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const errorMsgs = error.details.map((m) => m.message);
    const errorMsgsString = errorMsgs.join(", ");
    next(new AppError(errorMsgsString, 400));
    return;
  }
  return value as NewUser;
}
