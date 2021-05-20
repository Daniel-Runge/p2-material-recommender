/* classical require */
const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

/* imports from */
const { processRequest } = require("./helpers/processRequest");

const rootFileSystem = process.cwd();
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  try {
    processRequest(req, res);
  } catch (e) {
    console.log("Internal Error" + "!!: " + e);
    errorResponse(res, 500, "");
  }
});

function errorResponse(res, code, reason) {
  res.statusCode = code;
  res.setHeader("Content-Type", "text/txt");
  res.write(reason);
  res.end("\n");
}

server.listen(port, () => console.log(`Server running at port: ${port} `));

// if (req.url == "/") {
// res.statusCode = 200;
// res.setHeader("Content-Type", "text/html");
// res.write(website.login());
// res.end();
// } else if (req.url == "/login") {
//   console.log(req.method);
// let body = "";
// req.on("data", (chunk) => {
//   body += chunk.toString(); // convert Buffer to string
// });
// req.on("end", () => {
//   console.log(body);
//   res.end("ok");
// });
// }
// else {
// const secured = securePath(req.url, rootFileSystem);
// console.log("Reading:" + secured);
// fs.readFile(secured, (err, data) => {
//   if (err) {
//     console.error(err);
//     errorResponse(res, 404, String(err));
//   } else {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/css");
//     res.write(data);
//     res.end("\n");
//   }
// });
// }
