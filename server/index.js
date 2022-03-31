import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const PORT = process.env.PORT || 3000;

import router from "./api/salaries.js";

const app = express();
app.use(cors);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//Access routes using middleware connected to api
app.use("/salaries", router);

// Set up database connection
//Database url from Mongo Atlas
const MONGO_URI =
  "mongodb+srv://kwesi-selorm:databasepassord7@cluster0.j6qoa.mongodb.net/dummyDatabase?retryWrites=true&w=majority";

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

//Verify connection to server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
