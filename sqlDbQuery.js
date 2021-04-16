const mysql = require("mysql");

/**
 * 
 * @param {takes jason object from sign up page} signUpData 
 * @returns a sql query, 
 *  if the query is run add data(the signupdata, email and password) from signup into the mysql database
 */
function sqlConstructorSignUp(signUpData) {
  if (typeof signUpData.value.username !== 'string') {
    return ('error')
  }
  else {
    console.log("sign up ", signUpData.value.username);
    const sql = `INSERT INTO users (Email, UserPassword) VALUES ("${signUpData.value.username}","${signUpData.value.password}")`;
    return sql;
  }
}
function sqlConstructorMaterial(Material) {
  const sql = `INSERT INTO Material (Sensing, Intuitive, Visual, Verbal, Active, Reflective, Sequential, Global) 
  VALUES ("${Material.Sensing}","${Material.Intuitive}","${Material.Visual}","${Material.Verbal}",
  "${Material.Active}","${Material.Reflective}","${Material.Sequential}","${Material.Global}")`;
  return sql;
}

function sqlConstructorCourse(Course) {
  const sql = `INSERT INTO Courses (Coursename) 
  VALUES ("${Course}")`;
  return sql;
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

/**
 * 
 * @param {takes a string sql query} sqlquery 
 * @returns returns a object with the result of the query, unless there is a error then it will throw a error,
 */

function queryToSqlDb(sqlquery, resultHandling) {
  const con = mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "password",
    database: process.env.DATABASE || "dbtest",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(sqlquery);
    con.query(sqlquery, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      resultHandling(result);
    });
  });
}









module.exports = { sqlConstructorSignUp, queryToSqlDb, sqlConstructorMaterial, sqlConstructorCourse, sqlConstructorLesson, sqlConstructorLearningGoal, sqlConstructorTags };
