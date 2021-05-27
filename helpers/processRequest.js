const fs = require("fs");

const { securePath } = require("./securePath");
const { Website } = require("../website");
const { errorResponse } = require("./errorResponse");
const { checkPath } = require("./checkPath");
const website = new Website("Learning Path Recommender", [
  "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css",
  "style.css",
]);

/**
 * processRequest processes the requests that come in form of POST, PATCH, GET... by using other functions
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
      handlePostRequest(req, res, token, pathElements, searchParams);
      break;
    case "GET":
      handleGetRequest(req, res, token, pathElements, searchParams);
      break;
  }
}
/**
 * handleGetRequest uses a switch statement to get the possible "GET" requests from the user
 * @author Daniel Runge, Gustav Graversen, Raymond Kacso
 * @param {object} req
 * @param {object} res
 * @param {string} token to validate the user
 * @param {string} pathElements is the endpoint that is to be reached by the user
 */
async function handleGetRequest(req, res, token, pathElements, searchParams) {
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
    case "about":
      website.aboutPage(res);
      break;
    case "profile":
      website.profilePage(res, token);
      break;
    case "enroll":
      website.enrollPage(res, token);
      break;
    case "course":
      if (await checkPath(pathElements[2])) {
        website.coursePage(res, token, pathElements[2], searchParams);
      }
      break;
    default:
      handleFile(req, res);
      break;
  }
}
/**
 * handlePostRequest uses a switch statement to get the possible "POST" requests from the user
 * @author Daniel Runge, Gustav Graversen, Raymond Kacso
 * @param {object} req
 * @param {object} res
 * @param {string} pathElements is the endpoint that is to be reached by the user
 */
function handlePostRequest(req, res, token, pathElements, searchParams) {
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
    case "style":
      website.updateStyle(req, res, token);
      break;
    case "course":
      website.rating(req, res, token, pathElements[2], searchParams);
      break;
    default:
      errorResponse(res, 404, "No post request at this point");
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

module.exports = { processRequest };
