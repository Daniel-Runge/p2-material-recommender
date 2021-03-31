const { htmlHeader } = require("./pages/util/htmlHeader");
const { loginhtml } = require("./pages/loginhtml");
const { signuphtml } = require("./pages/signuphtml");

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

  signup(req, res) {
    //placeholder
    res.setHeader("Content-Type", "text/html");
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on("end", () => {
      console.log(body);
      res.write("<h1>OK!</h1>")
      res.end();
    });
  }
}

module.exports = { Website };
