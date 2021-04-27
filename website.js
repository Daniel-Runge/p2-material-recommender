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
  updateValuesInDatabaseQuery,
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

  // post request handler for update values of dimensions
  profileSave(req, res, token) {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
      console.log("show data ", data);
    });
    req.on("end", async () => {
      const profileObj = parse(data);
      const { perception, input, processing, understanding } = profileObj;
      const email = verifyToken(token).id;
      
      try {
        // update data in database 
        const result = await updateValuesInDatabaseQuery(perception, input, processing, understanding, email);

        if (result[0]) {
          res.writeHead(200, {
            "Content-Type": "text/html",
            location: "/profile",
          });
          res.end();
        }
        res.writeHead(301, { location: "/profile" });
        res.end();
      } catch (error) {
        // Error handling
        console.log(error);
        res.writeHead(301, { location: "/profile" });
        res.end();
      }
    });

  
  }

  // Make this function using async await as there is needed to wait for the DB query to complete before rendering HTML
  async profilePage(res, token) {
    const jwtDecoder = verifyToken(token); // call the verify funnction before the if statement, and took the email to find it if it exists
    if (!jwtDecoder) {
      res.writeHead(301, { location: "/login" });
      res.end();
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const html = await profilehtml(jwtDecoder.id) //Find the email here using jwtDecoder.id 
    res.write(this.header + html); 
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
