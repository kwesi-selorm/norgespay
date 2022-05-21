import express from "express";

const userRouter = express.Router();
import User from "../models/user_model.js";
import { generatePassword } from "../utils/password_helper.js";

//Signup
userRouter.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const passwordHash = await generatePassword(password),
      userToSave = new User({ email, username, passwordHash });
    await userToSave.save().then((result) => {
      res.status(201).send({ userToSave });
    });
  } catch (error) {
    const errorMsg = "Something went wrong";
    errorMsg += ": " + error.message;
  }

  res.redirect("/api/login"); //Required to add new salary after signing up
});

export default userRouter;
