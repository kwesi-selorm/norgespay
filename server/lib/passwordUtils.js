import * as bcrypt from "bcrypt";

//Generate hashed password
const generatePassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

//Compare user-provided password against password in database. Returns boolean
const validatePassword = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};

export { validatePassword, generatePassword };
