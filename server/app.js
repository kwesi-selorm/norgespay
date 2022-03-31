const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
