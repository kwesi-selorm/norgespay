import jwt from "jsonwebtoken";
import express from "express";
import User from "../models/user-model";
import { validatePassword } from "../fns/password-fns";
import { SECRET } from "../utils/config";
import { LoginRequest } from "../types/types";
import { loginParser } from "../parsers";

const loginRouter = express.Router();

loginRouter.post("/", async (req: LoginRequest, res) => {
  const { username, password } = loginParser(req);
  const user = await User.findOne({ username });
  if (user == null) {
    return res.status(404).send({ message: "No user found" });
  }
  const match = await validatePassword(password, user.passwordHash);
  if (!match) {
    return res.status(401).send({ message: "Invalid username or password" });
  }
  const tokenUser = {
    username,
    id: user._id,
  };
  const token = jwt.sign(tokenUser, SECRET);
  return res.status(200).send({ token, username: user.username });
});

export default loginRouter;
