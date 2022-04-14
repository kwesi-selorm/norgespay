import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser"; //express can be used in place of this: express.json and express.urlencoded
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
const PORT = process.env.PORT || 3001;
import passport from "passport";
import flash from "connect-flash";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo"; //create store for storing sessions in database

import salaryRouter from "./routes/salaryRoutes.js";
import userRouter from "./routes/userRoutes.js";
import "./config/passport.js";

//Database urls from Mongo Atlas imported from .env
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const MONGO_URI = process.env.MONGO_URI;

// Set up database connection. The mongoose options help to avoid errors. The monogoose connection returns a promise hence .then and .catch are used to handle errors.
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //suppress warning messages
  })
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((error) => console.error(error));

//MIDDLEWARES
app.use(cors(corsOptions)); //CORS: Cross-origin Resource Sharing
app.use(morgan("dev")); //log all requests to the console for easy tracking
app.use(cookieParser()); //read cookies (needed for auth)
app.use(bodyParser.json({ extended: true })); //Body parser:Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Create session store here. Use redis and add store property to the sessionOptions object

//Express session. For production use a secure session store, E.g. Redis, MongoDB
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({ mongoUrl: MONGO_URI, collectionName: "sessions" }),
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, //Equals 1 day (24hrs*60min*60s*1000ms)
};
app.use(session(sessionOptions)); //Ensure persistent user login

//Passport
app.use(passport.initialize()); //Initialize passport on every route call
app.use(passport.session()); //Allows passport to use session.
app.use(flash()); //use connect-flash to display flash messages stored in session

//Routes. Inserted after all other middleware except the error handlers
app.use("/api", salaryRouter);
app.use("/user", userRouter);

//Verify connection to server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
