import express from "express";

const userRouter = express.Router();
import User from "../models/user-model";
import { generatePassword } from "../fns/password-fns";

//SIGNUP
userRouter.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  const exists =
    (await User.exists({ email: email })) ||
    (await User.exists({ username: username }));
  if (exists) {
    return res.status(403).json({ message: "User already exists" }); //Forbidden
  }

  try {
    const passwordHash = await generatePassword(password);
    const newUser = new User({ email, username, passwordHash });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) res.json({ message: error.message });
  }
});

export default userRouter;
