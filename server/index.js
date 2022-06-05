import http from "http";
import { PORT } from "./utils/config.js";
import app from "./app.js";

const server = http.createServer(app);

//Verify connection to server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
