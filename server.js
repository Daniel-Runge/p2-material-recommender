const http = require("http");
const dotenv = require("dotenv");
const { processRequest } = require("./helpers/processRequest");
const { errorResponse } = require("./helpers/errorResponse");

dotenv.config({ path: "./.env" });
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  try {
    processRequest(req, res);
  } catch (e) {
    console.log("Internal Error" + "!!: " + e);
    errorResponse(res, 500, "");
  }
});

server.listen(port, () => console.log(`Server running at port: ${port} `));
