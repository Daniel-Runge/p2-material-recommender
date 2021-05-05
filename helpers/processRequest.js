const fs = require("fs");

const { securePath } = require("./securePath");
const { Website } = require("../website");
const { verifyToken } = require("../jwtLogin");
const website = new Website("Learning Path Recommender", [
  "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css",
  "style.css",
]);

/**
 * processRequest processes the requests that come in form of POST, PATCH, GET... by using another functions
 * @author Daniel Runge, Gustav Graversen, Raymond Kacso
 * @param {object} req
 * @param {object} res
 */
function processRequest(req, res) {
  const baseURL = "http://" + req.headers.host + "/";
  const theURL = new URL(req.url, baseURL);
  const searchParams = new URLSearchParams(theURL.search);
  const queryPath = decodeURIComponent(theURL.pathname);
  const pathElements = queryPath.split("/");

  // the cookie string gets split by because the whole string is "authCookie=" + the created token
  const token = req.headers?.cookie?.split("=")[1];

  switch (req.method) {
    case "POST":
      handlePostRequest(req, res, pathElements);
      break;
    case "GET":
      handleGetRequest(req, res, token, pathElements);
      break;
  }
}
/**
 * handleGetRequest uses a switch statement to get the possible "GET" requests from the user.
 * @author Daniel Runge, Gustav Graversen, Raymond Kacso
 * @param {object} req
 * @param {object} res
 * @param {string} token to validate the user
 * @param {string} pathElements is the endpoint that is to be reached by the user
 */
function handleGetRequest(req, res, token, pathElements) {
  switch (pathElements[1]) {
    case "":
      website.loginPage(res);
      break;
    case "login":
      website.loginPage(res);
      break;
    case "logout":
      website.logoutPage(res);
      break;
    case "signup":
      website.signupPage(res);
      break;
    case "profile":
      website.profilePage(res, token);
      break;
    case "enroll":
      website.enrollPage(res, token);
      break;
    case "course":
      switch (pathElements[2]) {
        case "testipop":
          website.coursePage(res, token);
          break;
      }
      break;
    default:
      handleFile(req, res);
      break;
  }
}
/**
 * handlePostRequest uses a switch statement to get the possible "POST" requests from the user.
 * @author Daniel Runge, Gustav Graversen, Raymond Kacso
 * @param {object} req
 * @param {object} res
 * @param {string} pathElements is the endpoint that is to be reached by the user
 */
function handlePostRequest(req, res, pathElements) {
  switch (pathElements[1]) {
    case "signup":
      website.signup(req, res);
      break;
    case "login":
      website.login(req, res);
      break;
    case "enroll":
      website.enroll(req, res, token);
      break;
  }
}
/**
 * handleFileFile uses the function securePath to secure files that are not meant to be accessed can be read by users
 * if the path is secure then the css contents get parsed
 * @author Daniel Runge, Gustav Graversen, Raymond Kacso
 * @param {object} req
 * @param {object} res
 * @param {string} pathElements is the endpoint that is to be reached by the user
 */
function handleFile(req, res) {
  const rootFileSystem = process.cwd();
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
}

function errorResponse(res, code, reason) {
  res.statusCode = code;
  res.setHeader("Content-Type", "text/txt");
  res.write(reason);
  res.end("\n");
}

module.exports = { processRequest };
