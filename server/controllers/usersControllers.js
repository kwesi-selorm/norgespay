import passport from "passport";
import User from "../models/userModel.js";

const signUp = async (req, res) => {
  res.status(200).send("User registered");
};

const logIn = (req, res) => {
  res.status(200).send("Sign in successful");
};

export { signUp, logIn };
