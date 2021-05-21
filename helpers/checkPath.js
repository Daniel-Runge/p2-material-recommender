const { sqlConstructorCourse, queryToSqlDb } = require("../sqlDbQuery");

/**
 * This function returns a boolean to determine whether the path parameter is a valid path
 * @author Gustav Graversen and Raymond Kacso
 * @param {string} path the path to be checked against
 * @returns true or false depending on whether the path is valid
 */
async function checkPath(path) {
  const sql = sqlConstructorCourse();
  let courses = await queryToSqlDb(sql);
  console.log(courses);
  if (courses.some((course) => course.CourseName === path)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { checkPath };
