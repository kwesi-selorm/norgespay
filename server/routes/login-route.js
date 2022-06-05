import jwt from "jsonwebtoken";
import express from "express";
import User from "../models/user-model.js";
import { validatePassword } from "../utils/password-helper.js";
import { SECRET } from "../utils/config.js";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body,
    user = await User.findOne({ username });
  if (user == null) {
    return res.status(401).send("No user found");
  }
  let match = await validatePassword(password, user.passwordHash);
  if (!match) {
    return res.status(401).send("Invalid username or password");
  }
  const tokenUser = {
    username,
    id: user._id,
  };
  const token = jwt.sign(tokenUser, SECRET);
  res.status(200).json({ token, username: user.username });
});

export default loginRouter;
