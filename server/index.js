import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
const PORT = process.env.PORT || 3001;
import salaryRouter from "./routes/salaryRoutes.js";
import userRouter from "./routes/userRoutes.js";
import router from "./routes/salaryRoutes.js";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/userModel.js";
// import Salary from "./models/salary.js";

//Database urls from Mongo Atlas imported from .env
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const MONGO_URI = process.env.MONGO_URI;

//MIDDLEWARES
//CORS: Cross-origin Resource Sharing
app.use(cors(corsOptions));

//Body parser:Parse incoming request bodies
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//Express session

//Passport: User authentication
app.use(passport.initialize());
app.use(passport.session()); //Allows persistent login sessions. Use session before this.
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); //How to store user in session
passport.deserializeUser(User.deserializeUser()); //How to remove user from session

// Set up database connection. The mongoose options help to avoid errors. The monogoose connection returns a promise hence .then and .catch are used to handle errors.
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas database.");
  })
  .catch((error) => console.error(error));

//Connection to users database

//Routes API
app.use("/api", salaryRouter);
app.use("/", userRouter);

//User routes

//Verify connection to server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
