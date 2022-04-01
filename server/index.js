import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
const PORT = process.env.PORT || 3000;
import router from "./routes/salaries.js";

//Database url from Mongo Atlas imported from .env
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const MONGO_URI = process.env.MONGO_URI;

//Set up middlewares
app.use(cors(corsOptions)); //Cross-origin Resource Sharing
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Set up database connection. The mongoose options help to avoid errors. The monogoose connection returns a promise hence .then and .catch
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((error) => console.error(error));

//Routes API
app.use(router);

//Verify connection to server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
