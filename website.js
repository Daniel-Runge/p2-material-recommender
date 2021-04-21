const { htmlHeader } = require("./pages/util/htmlHeader");
const { loginhtml } = require("./pages/loginhtml");
const { signuphtml } = require("./pages/signuphtml");
const { profilehtml } = require("./pages/profilehtml");
const { sqlConstructorSignUp, queryToSqlDb } = require("./sqlDbQuery")
const { createToken, verifyToken } = require('./jwtLogin');
const { sqlConstructorSignUp, queryToSqlDb, sqlConstructorConfirmSignup, asyncContainerDBQuery } = require("./sqlDbQuery")



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
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(this.header + loginhtml());
    res.end();
  }

  signupPage(res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(this.header + signuphtml());
    res.end();
  }

  profilePage(res, token) {
        if (!verifyToken(token)) {
            res.writeHead(301, {location: '/login'});
            res.end();
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(this.header + profilehtml());
        res.end();
    }

  signup(req, res) {

    let signUpObject;
    let result;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let data = "";
    req.on("data", (chunk) => {
      data += chunk
      console.log("show data ", data);
    });
    req.on("end", async () => {
      signUpObject = JSON.parse(data);

      const { email, password, confpassword } = signUpObject.value;

      const sql = sqlConstructorSignUp(email, password);

      try {
        result = await queryToSqlDb(sql);
        return this.profilePage(res);
      }
      catch (error) {
        res.writeHead(301, { location: '/signup' });
        res.end();
      }
    });
  }
  
  login(req, res) {
        //implementer senere; authentication

        let id = 1;
        const token = createToken(id);
        res.writeHead(200, {
            'Set-Cookie': 'authCookie=' + token,
             httpOnly: true,
            'Content-Type': 'text/html'
        });
        res.write("<h1>TEST: Login Succesful</h1>");
        res.end();
    }

}

module.exports = { Website };