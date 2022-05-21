import jwt from "jsonwebtoken";
import express from "express";
import User from "../models/user_model.js";
import { validatePassword } from "../utils/password_helper.js";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body,
    user = await User.findOne({ username });
  if (user == null) {
    res.status(404).json({ error: "No user found" });
  }
  let match = await validatePassword(password, user.passwordHash);
  if (!match) {
    res.status(401).json({ error: "Invalid username or password" });
  }
  const tokenUser = {
    username,
    id: user._id,
  };
  const token = jwt.sign(tokenUser, config.SECRET);
  res.status(200).send({ token, username: user.username });
});

export default loginRouter;
