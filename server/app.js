const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

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
