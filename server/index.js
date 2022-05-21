import http from "http-server";
import config from "./utils/config.js";
import app from "./app.js";

const server = new http.Server(app);

//Verify connection to server
server.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
