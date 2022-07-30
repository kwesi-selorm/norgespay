import {
  AddedSalary,
  AddSalaryRequest,
  LoginRequest,
  UpdateSalaryRequest,
} from "./types/types";
import {
  idSchema,
  loginSchema,
  newSalarySchema,
  updatedSalarySchema,
} from "./utils/joi-schemas";

//ADD SALARY INPUT
export function newSalaryParser(req: AddSalaryRequest) {
  const { error, value } = newSalarySchema.validate(req.body, {
    abortEarly: false,
  }); //Ensure all fields are validated before returning the error
  if (error) {
    const errorMsgs = error.details.map((m) => m.message);
    const errorMsgsString = errorMsgs.join(", ");
    throw new Error(errorMsgsString);
  }
  const newSalary: AddedSalary = value;
  return newSalary;
}

//UPDATE SALARY INPUT
export function updateSalaryParser(req: UpdateSalaryRequest) {
  const { error: idError, value: id } = idSchema.validate(req.params.id);
  const { error: updatedSalaryError, value: updatedSalary } =
    updatedSalarySchema.validate(req.body.updatedSalary, {
      abortEarly: false,
    });

  if (idError) throw new Error(idError.details[0].message);
  if (updatedSalaryError) {
    const errorMsgs = updatedSalaryError.details.map((m) => m.message);
    const errorMsgsString = errorMsgs.join(", ");
    throw new Error(errorMsgsString);
  }
  const _id: string = id;
  const newSalary = updatedSalary;
  return { _id, newSalary };
}

//LOGIN INPUT
export function loginParser(req: LoginRequest) {
  const { error, value } = loginSchema.validate(req.body);
  if (error) throw new Error(error.details[0].message);
  const username: string = value.username;
  const password: string = value.password;
  return { username, password };
}
