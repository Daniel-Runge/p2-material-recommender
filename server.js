const http = require("http");
const port = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");
const { Website } = require("./website");
const website = new Website("Test", [
  "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css",
  "/style.css",
]);

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(website.login());
    res.end();
  } else {
    const sPath = securePath(req.url);
    console.log("Reading:" + sPath);
    fs.readFile(sPath, (err, data) => {
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
});

server.listen(port, () => console.log(`Server running at port: ${port} `));

const publicResources = "public/";
//secture file system access as described on
//https://nodejs.org/en/knowledge/file-system/security/introduction/
const rootFileSystem = process.cwd();

function securePath(userPath) {
  if (userPath.indexOf("\0") !== -1) {
    // could also test for illegal chars: if (!/^[a-z0-9]+$/.test(filename)) {return undefined;}
    return undefined;
  }
  userPath = publicResources + userPath;

  let p = path.join(rootFileSystem, path.normalize(userPath));
  //console.log("The path is:"+p);
  return p;
}

function errorResponse(res, code, reason) {
  res.statusCode = code;
  res.setHeader("Content-Type", "text/txt");
  res.write(reason);
  res.end("\n");
}
