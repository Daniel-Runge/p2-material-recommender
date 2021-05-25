const mysql = require("mysql");
require("dotenv").config();

/**
 *
 * @param {takes json object from sign up page} signUpData
 * @returns a sql query,
 *  if the query is run add data(the signupdata, email and password) from signup into the mysql database
 */

function sqlConstructorSignUp(email, password) {
  if (typeof email !== "string") {
    return "error";
  } else {
    console.log("sign up ", email);
    const sql = `INSERT INTO Users (Email, UserPassword) VALUES ("${email}", "${password}")`;
    return sql;
  }
}

function sqlConstructorLogin(email, password) {
  const sql = `SELECT * FROM Users WHERE Email = "${email}" AND UserPassword = "${password}"`;
  return sql;
}

function sqlConstructorConfirmSignup(email) {
  const sql = `SELECT Email FROM Users WHERE Email = "${email}"`;
  return sql;
}

function sqlConstructorMaterial(Material, MaterialName) {
  const sql = `INSERT INTO Material (MaterialName, Sensing, Intuitive, Visual, Verbal, Active, Reflective, Sequential, Global) 
  VALUES ("${Material.MaterialName}","${Material.Sensing}","${Material.Intuitive}","${Material.Visual}","${Material.Verbal}",
  "${Material.Active}","${Material.Reflective}","${Material.Sequential}","${Material.Global}")`;
  return sql;
}

function sqlConstructorEnrollPage(email) {
  const sql = `SELECT * FROM Courses WHERE NOT CourseID IN (SELECT CourseID FROM EnrolledIn WHERE Email='${email}');`;
  return sql;
}

function sqlConstructorEnroll(course, email) {
  const sql = `INSERT INTO EnrolledIn VALUES (${course}, '${email}')`;
  return sql;
}

function sqlConstructorCourse() {
  return `SELECT CourseName FROM Courses`;
}

function sqlConstructorCourseObj(courseName) {
  return `SELECT * FROM Courses WHERE CourseName = '${courseName}'`;
}

function sqlConstructorLessonObj(course) {
  return `SELECT * FROM Lessons WHERE CourseID = ${course.CourseID}`;
}

function sqlConstructorLearningGoalObj() {
  return `SELECT * FROM LearningGoals`;
}

function sqlConstructorLesson(Lesson) {
  const sql = `INSERT INTO Lessons (LessonNumber, Lessonname, CourseID)
  VALUES ("${Lesson.LessonNumber}", "${Lesson.Lessonname}", "${Lesson.CourseID}")`;
  return sql;
}

function sqlConstructorLearningGoal(LearningGoal) {
  const sql = `INSERT INTO learninggoals (LearningGoalName, lessonID)
  VALUES ("${LearningGoal.LearningGoalName}", "${LearningGoal.LessonID}")`;
  return sql;
}

function sqlConstructorTags(Tags) {
  const sql = `INSERT INTO tags (LearningGoalID, MaterialID)
  VALUES ("${Tags.LearningGoalID}", "${Tags.MaterialID}")`;
  return sql;
}

function sqlConstructorPersonalCourse(Email) {
  const sql = `SELECT (CourseID) FROM enrolledin WHERE (Email) = ("${Email}");`;
  return sql;
}

function sqlConstructorCourseName(ID) {
  const sql = `SELECT (CourseName) FROM courses WHERE (CourseID) = ("${ID}");`;
  return sql;
}

/**
 *
 * @param {takes a string format sql query} sql
 * passes this query to the query to sql db func.
 * the purpose of this function is making queryToSqlDb into a async function by wrapping it
 * @returns returns what query to sql db returns
 */
async function asyncContainerDBQuery(sql) {
  let result = await queryToSqlDb(sql);
  console.log("query to sql db returns", result);
  return result;
}

/**
 *
 * @param {takes a string sql query} sqlquery
 * @returns returns a object with the result of the query, unless there is a error then it will throw a error,
 */

function queryToSqlDb(query) {
  const connectionObject = {
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE || "db",
  };
  const con = mysql.createConnection(connectionObject);

  return new Promise((resolve, reject) => {
    con.query(query, (error, result) => {
      if (error) {
        return reject(error);
      }
      con.end((err) => {
        if (err) {
          return console.log("error:" + err.message);
        }
      });
      return resolve(result);
    });
  });
}

module.exports = {
  sqlConstructorSignUp,
  queryToSqlDb,
  sqlConstructorLogin,
  sqlConstructorMaterial,
  asyncContainerDBQuery,
  sqlConstructorConfirmSignup,
  sqlConstructorEnrollPage,
  sqlConstructorEnroll,
  sqlConstructorCourse,
  sqlConstructorLearningGoalObj,
  sqlConstructorLessonObj,
  sqlConstructorCourseObj,
  sqlConstructorLesson,
  sqlConstructorLearningGoal,
  sqlConstructorCourseName,
  sqlConstructorTags,
  sqlConstructorPersonalCourse,
};
