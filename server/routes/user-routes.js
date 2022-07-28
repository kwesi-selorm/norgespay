import express from "express";

const userRouter = express.Router();
import User from "../models/user-model.js";
import { generatePassword } from "../utils/password-helper.js";

//Signup
userRouter.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  const exists =
    (await User.exists({ email: email })) ||
    (await User.exists({ username: username }));

  if (exists) {
    return res.status(403).json({ message: "User already exists" }); //Forbidden
  }

  try {
    const passwordHash = await generatePassword(password),
      newUser = new User({ email, username, passwordHash });
    const result = await newUser.save();
    result.status(201).json(newUser);
  } catch (error) {
    let errorMsg = "Something went wrong";
    errorMsg += ": " + error.message;
  }

  // res.redirect("/api/login"); //Required to add new salary after signing up
});

export default userRouter;
