const fs = require("fs");

const { securePath } = require("./securePath");
const { Website } = require("../website");
const website = new Website("Learning Path Recommender", [
  "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css",
  "style.css",
]);

function processRequest(req, res) {
  const baseURL = "http://" + req.headers.host + "/";
  const theURL = new URL(req.url, baseURL);
  const searchParams = new URLSearchParams(theURL.search);
  const queryPath = decodeURIComponent(theURL.pathname);
  const pathElements = queryPath.split("/");
  const rootFileSystem = process.cwd();

  switch (req.method) {
    case "POST":
      switch (pathElements[1]) {
        case "signup":
          website.signup(req, res);
          break;
      }
      break;
    case "GET":
      switch (pathElements[1]) {
        case "":
          website.loginPage(res);
          break;
        case "login":
          website.loginPage(res);
          break;
        case "signup":
          website.signupPage(res);
          break;
        default:
          const secured = securePath(req.url, rootFileSystem);
          console.log("Reading:" + secured);
          fs.readFile(secured, (err, data) => {
            if (err) {
              console.error(err);
              errorResponse(res, 404, String(err));
            } else {
              res.statusCode = 200;
              res.setHeader("Content-Type", "text/css");
              res.write(data);
              res.end("\n");
            }
          });
          break;
      }
  }
}

module.exports = { processRequest };