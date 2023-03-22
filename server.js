const http = require("http");
const app = require("./src/app");
require("dotenv").config();
require("./src/database/config/mongodb.config");

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
