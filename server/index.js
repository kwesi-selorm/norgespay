import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import cors from "cors";
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const PORT = process.env.PORT || 3000;

//Database url from Mongo Atlas imported from .env
const MONGO_URI = process.env.MONGO_URI;

import router from "./api/salaries.js";
import { displaySalaries, addSalary } from "./controllers/salaries.js";

const app = express();

//Set up middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//Access routes using middleware connected to api
app.use("/salaries", router);

// Set up database connection

//The mongoose options help to avoid errors. The monogoose connection returns a promise hence .then and .catch
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((error) => console.error(error));

//Perform HTTP requests
app.get("/", (req, res) => {
  res.send("HomePage.");
});

app.get("/salaries", displaySalaries);
// app.get("/salaries", (req, res) => {
//   res.send("Getting salaries...");
// });

app.post("/salaries", addSalary);

//Verify connection to server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
