import express from "express";
const userRouter = express.Router();

import { signUp, logIn } from "../controllers/usersControllers.js";

//Signup
userRouter.post("/signup", signUp);

//Login
userRouter.post("/login", logIn);

export default userRouter;
