const { parse } = require("querystring");
const { htmlHeader } = require("./pages/util/htmlHeader");
const { loginhtml } = require("./pages/loginhtml");
const { signuphtml } = require("./pages/signuphtml");
const { profilehtml } = require("./pages/profilehtml");
const { enrollhtml } = require("./pages/enrollhtml");
const { createToken, verifyToken } = require("./jwtLogin");
const {
  sqlConstructorSignUp,
  queryToSqlDb,
  sqlConstructorLogin,
  sqlConstructorEnrollPage,
  sqlConstructorEnroll,
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

  async profilePage(res, token) {
    if (!verifyToken(token)) {
      res.writeHead(301, { location: "/login" });
      res.end();
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const sql = `SELECT Coursename FROM courses WHERE CourseID IN (SELECT CourseID FROM enrolledin WHERE Email='${verifyToken(token).id}');`
    const result = await queryToSqlDb(sql);
    res.write(this.header + profilehtml(result));
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
  /**
   * Creates an html page based on what courses the user is not enrolled in
   * @author Mads Overgaard Nissum & Lars Hansen
   * @param {Object} res the http response object
   * @param {String} token should be changed to userData
   */
  async enrollPage(res, token) {
    const userID = verifyToken(token).id
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const sql = sqlConstructorEnrollPage(userID);
    const result = await queryToSqlDb(sql);

    res.write(this.header + enrollhtml(result));
    res.end();
  }

  /**
   * Enrolls user in courses and return to the profile page
   * @author Mads Overgaard Nissum & Lars Hansen
   * @param {Obejct} req the http request object
   * @param {Object} res the http response object
   * @param {String} token should be changed to userData
   */
  enroll(req, res, token) {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
      console.log("show data ", data);
    });
    req.on("end", () =>{
      let object = parse(data);
      let arrayOfCourseKeys = Object.keys(object);
      arrayOfCourseKeys.forEach(element => {
        const sql = sqlConstructorEnroll(element, verifyToken(token).id) //use decode instead of verify, not implemented yet
        queryToSqlDb(sql);
      });
    })
    res.writeHead(303, {
      "Content-Type": "text/html",
      location: "/profile",
    });
    res.end()
  }

}

module.exports = { Website };
