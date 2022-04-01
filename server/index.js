import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const PORT = process.env.PORT || 3000;

import router from "./api/salaries.js";
import { displaySalaries, addSalary } from "./controllers/salaries.js";

const app = express();
app.use(cors(corsOptions));

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
