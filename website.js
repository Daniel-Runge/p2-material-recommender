const { parse } = require("querystring");
const { abouthtml } = require("./pages/abouthtml");
const { htmlHeader } = require("./pages/util/htmlHeader");
const { loginhtml } = require("./pages/loginhtml");
const { logouthtml } = require("./pages/logouthtml");
const { signuphtml } = require("./pages/signuphtml");
const { profilehtml } = require("./pages/profilehtml");
const { enrollhtml } = require("./pages/enrollhtml");
const { coursehtml } = require("./pages/coursehtml");
const { createToken, verifyToken } = require("./helpers/jwtLogin");
const {
  sqlConstructorSignUp,
  queryToSqlDb,
  sqlConstructorLogin,
  sqlConstructorEnrollPage,
  sqlConstructorEnroll,
} = require("./sqlDbQuery");
const { updateMaterialInDatabase } = require("./helpers/updateMaterial");

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

  loginPage(res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(this.header + loginhtml());
    res.end();
  }

  logoutPage(res) {
    res.writeHead(200, {
      "Set-Cookie":
        "authCookie=; Expires=" + new Date().toUTCString() + "; HttpOnly;",
      "Content-Type": "text/html",
    });
    res.write(this.header + logouthtml());
    res.end();
  }

  signupPage(res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(this.header + signuphtml());
    res.end();
  }

  aboutPage(res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(this.header + abouthtml());
    res.end();
  }

  async profilePage(res, token) {
    if (!verifyToken(token)) {
      res.writeHead(301, { location: "/" });
      res.end();
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    const sql = `SELECT CourseName FROM Courses WHERE CourseID IN (SELECT CourseID FROM EnrolledIn WHERE Email='${
      verifyToken(token).user.email
    }');`;
    const result = await queryToSqlDb(sql);
    res.write(this.header + profilehtml(result, verifyToken(token).user));
    res.end();
  }

  async coursePage(res, token, path, searchParams) {
    if (!verifyToken(token)) {
      res.writeHead(301, { location: "/login" });
      res.end();
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const courseIDQuery = `SELECT CourseID FROM Courses WHERE CourseName = '${path}';`;
    const courseDB = await queryToSqlDb(courseIDQuery);
    const courseID = courseDB[0].CourseID;

    const lessongLearningGoalQuery = `SELECT * FROM LearningGoals INNER JOIN Lessons ON LearningGoals.LessonID=Lessons.LessonID WHERE CourseID=${courseID};`;
    const lessonLearningGoalDb = await queryToSqlDb(lessongLearningGoalQuery);

    const materialTagsQuery = `SELECT * FROM Material INNER JOIN Tags ON Material.MaterialID=Tags.MaterialID;`;
    const materialDb = await queryToSqlDb(materialTagsQuery);

    res.write(
      this.header +
        coursehtml(path, lessonLearningGoalDb, searchParams, materialDb, token)
    );
    res.end();
  }

  signup(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
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
    });
    req.on("end", async () => {
      const loginObject = parse(data);
      const { email, password } = loginObject;
      const sql = sqlConstructorLogin(email, password);

      try {
        const result = await queryToSqlDb(sql);

        if (result[0]) {
          let token = createToken(result[0]);

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

  }
  /**
   * Creates an html page based on what courses the user is not enrolled in
   * @author Mads Overgaard Nissum & Lars Hansen
   * @param {Object} res the http response object
   * @param {String} token should be changed to userData
   */
  async enrollPage(res, token) {
    const userID = verifyToken(token).user.email;
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
   * @param {Object} req the http request object
   * @param {Object} res the http response object
   * @param {String} token should be changed to userData
   */
  enroll(req, res, token) {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    });
    req.on("end", () => {
      let object = parse(data);
      let arrayOfCourseKeys = Object.keys(object);
      arrayOfCourseKeys.forEach((element) => {
        const sql = sqlConstructorEnroll(
          element,
          verifyToken(token).user.email
        );
        queryToSqlDb(sql);
      });
    });
    res.writeHead(303, {
      "Content-Type": "text/html",
      location: "/profile",
    });
    res.end();
  }

  /**
   * Update the database with the requested values for the user represented by the token
   * @author Daniel Runge Petersen
   * @param {Object} req
   * @param {Object} res
   * @param {String} token
   */
  async updateStyle(req, res, token) {
    const body = await collectPostBody(req);
    const sql = `UPDATE Users SET Perception = ${body.perception}, Input = ${
      body.input
    }, Processing = ${body.processing}, Understanding = ${
      body.understanding
    } WHERE Email='${verifyToken(token).user.email}';`;
    await queryToSqlDb(sql);

    const result = await queryToSqlDb(
      `SELECT * FROM Users WHERE Email = '${verifyToken(token).user.email}';`
    );
    token = createToken(result[0]);

    res.writeHead(303, {
      "Set-Cookie": "authCookie=" + token + "; HttpOnly",
      "Content-Type": "text/html",
      location: "/profile",
    });
    res.end();
  }

  /**
   * @author Lars Hansen
   */
  async rating(req, res, token, pathElements, searchParams) {
    const data = await collectPostBody(req);
    const user = verifyToken(token).user;
    updateMaterialInDatabase(data, user);
    this.coursePage(res, token, pathElements, searchParams);
  }
}

/**
 * Helper function for obtaining the post body of a http request
 * @author Daniel Runge Petersen
 * @param {Object} req
 * @returns A promise that resolves to the body of the request
 */
function collectPostBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    });
    req.on("end", () => {
      let body = parse(data);
      resolve(body);
    });
  });
}

module.exports = { Website };
