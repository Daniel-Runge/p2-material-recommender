/* classical require */
const http = require("http");
const fs = require("fs");

/* imports from */
const { securePath } = require("./helpers/securePath");
const { Website } = require("./website");

const website = new Website("Learning Path Recommender", [
  "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css",
  "style.css",
]);

const rootFileSystem = process.cwd();
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  switch(req.method) {
    case "POST":
    case "GET":
  }
});

server.listen(port, () => console.log(`Server running at port: ${port} `));

function errorResponse(res, code, reason) {
  res.statusCode = code;
  res.setHeader("Content-Type", "text/txt");
  res.write(reason);
  res.end("\n");
}

// if (req.url == "/") {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.write(website.login());
//   res.end();
// } else if (req.url == "/login") {
//   console.log(req.method);
//   let body = '';
//   req.on('data', chunk => {
//       body += chunk.toString(); // convert Buffer to string
//   });
//   req.on('end', () => {
//       console.log(body);
//       res.end('ok');
//   });
// }
// else {
//   const secured = securePath(req.url, rootFileSystem);
//   console.log("Reading:" + secured);
//   fs.readFile(secured, (err, data) => {
//     if (err) {
//       console.error(err);
//       errorResponse(res, 404, String(err));
//     } else {
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/css");
//       res.write(data);
//       res.end("\n");
//     }
//   });
// }