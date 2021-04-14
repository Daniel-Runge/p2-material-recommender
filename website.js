const { htmlHeader } = require("./pages/util/htmlHeader");
const { loginhtml } = require("./pages/loginhtml");
const { signuphtml } = require("./pages/signuphtml");
const { profilehtml } = require("./pages/profilehtml");
const { sqlConstructorSignUp, queryToSqlDb } = require("./sqlDbQuery")



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

  profilePage(res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(this.header + profilehtml());
    res.end();
  }

  signup(req, res) {
    //placeholder
    // let signUpObject;
     res.setHeader("Content-Type", "application/json");
     let data = "";
       req.on("data", (chunk) => {
       data += chunk
       console.log(data);
      });
     req.on("end", () => {
    //   console.log("server gets", JSON.parse(data))
    //   signUpObject = JSON.parse(data);
    //   console.log("works until sqlconstructor");

    //   const sqlQuery = sqlConstructorSignUp(signUpObject)
    //   console.log('query =', sqlQuery);
      
    //   queryToSqlDb(sqlQuery, (result) => console.log(`the arrow is good ${result}`))

      queryToSqlDb('SELECT * FROM Users', (result) => result.map(
        (row) => console.log(row.Email)
        )
      )

       res.end();
     });
    


  }
}

module.exports = { Website };
