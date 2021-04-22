const { parse } = require("querystring");
const { htmlHeader } = require("./pages/util/htmlHeader");
const { loginhtml } = require("./pages/loginhtml");
const { signuphtml } = require("./pages/signuphtml");
const { profilehtml } = require("./pages/profilehtml");
const { createToken, verifyToken } = require("./jwtLogin");
const {
  sqlConstructorSignUp,
  queryToSqlDb,
  sqlConstructorLogin,
  sqlConstructorConfirmSignup,
  asyncContainerDBQuery,
} = require("./sqlDbQuery");

class Website {
  title;
  csss;
  scripts;
  header;
  constructor(title, csss = [], scripts = []) {
    this.title = title;
    this.csss = csss;
    this.scripts = scripts;
    this.header = htmlHeader(title, csss, scripts);
  }

  // Getters
  getTitle() {
    return this.title;
  }
  getCsss() {
    return this.csss;
  }
  getScripts() {
    return this.scripts;
  }

  // Methods
  //   home(res) {
  //     // This method will return a logged in user to their profile page, and others to the login page
  //     return loginPage(res);
  //   }

  loginPage(res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(this.header + loginhtml());
    res.end();
  }

  signupPage(res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(this.header + signuphtml());
    res.end();
  }

  profilePage(res, token) {
    if (!verifyToken(token)) {
      res.writeHead(301, { location: "/login" });
      res.end();
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(this.header + profilehtml());
    res.end();
  }

  signup(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      console.log("show data ", data);
    });
    req.on("end", async () => {
      const signUpObject = parse(data);
      const { email, password, confpassword } = signUpObject;
      const sql = sqlConstructorSignUp(email, password);

      try {
        const result = await queryToSqlDb(sql);
        res.writeHead(303, { location: "/login" });
        res.end();
      } catch (error) {
        res.writeHead(303, { location: "/signup" });
        res.end();
      }
    });
  }

  login(req, res) {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
      console.log("show data ", data);
    });
    req.on("end", async () => {
      const loginObject = parse(data);
      const { email, password } = loginObject;
      const sql = sqlConstructorLogin(email, password);

      try {
        const result = await queryToSqlDb(sql);

        if (result[0]) {
          const token = createToken(email);
          res.writeHead(303, {
            "Set-Cookie": "authCookie=" + token + "; HttpOnly",
            "Content-Type": "text/html",
            location: "/profile",
          });
          res.end();
        }
        res.writeHead(301, { location: "/" });
        res.end();
      } catch (error) {
        console.log(error);
        res.writeHead(301, { location: "/" });
        res.end();
      }
    });

    //implementer senere; authentication
  }
}

module.exports = { Website };
