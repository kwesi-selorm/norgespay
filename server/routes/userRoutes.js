import express from "express";
const userRouter = express.Router();

import { signUp, logIn } from "../controllers/usersControllers.js";

userRouter.post("/signup", signUp);

userRouter.post("/login", logIn);

export default userRouter;
