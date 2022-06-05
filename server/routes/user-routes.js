import express from "express";

const userRouter = express.Router();
import User from "../models/user-model.js";
import { generatePassword } from "../utils/password-helper.js";

//Signup
userRouter.post("/", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const passwordHash = await generatePassword(password),
      userToSave = new User({ email, username, passwordHash });
    console.log(userToSave);
    await userToSave.save().then((result) => {
      result.status(201).end();
    });
  } catch (error) {
    let errorMsg = "Something went wrong";
    errorMsg += ": " + error.message;
  }

  // res.redirect("/api/login"); //Required to add new salary after signing up
});

export default userRouter;
