import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
//Database urls from Mongo Atlas imported from .env
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo"; //create store for storing sessions in database

import config from "./utils/config.js";
import salaryRouter from "./routes/salary_routes.js";
import userRouter from "./routes/user_routes.js";
import loginRouter from "./routes/login_route.js";

// Set up database connection. The mongoose options help to avoid errors. The monogoose connection returns a promise hence .then and .catch are used to handle errors.
mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //suppress warning messages
  })
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((error) => console.log(`Error: ${error.message}`));

//MIDDLEWARES
app.use(cors(config.corsOptions)); //CORS: Cross-origin Resource Sharing
app.use(morgan("dev")); //log all requests to the console for easy tracking
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*Create session store here. Use redis and add store property to the sessionOptions object
Express session. For production use a secure session store, E.g. Redis, MongoDB*/
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({
    mongoUrl: config.MONGO_URI,
    collectionName: "sessions",
  }),
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, //Equals 1 day (24hrs*60min*60s*1000ms)
};
app.use(session(sessionOptions)); //Ensure persistent user login

//Routes. Inserted after all other middleware except the error handlers
app.use("/api/login", loginRouter);
app.use("/api/salaries", salaryRouter);
app.use("/api/user", userRouter);

export default app;
