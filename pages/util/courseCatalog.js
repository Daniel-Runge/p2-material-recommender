const { enrollCourseCardhtml } = require("./courseCard");

/**
 * Helper function for enrollhtml
 * @authors Lars Hansen & Mads Nissum
 * @param {Object} courses is an object containing courseIDs & courseNames
 * @returns a html string
 */
function createCourseCatalogHtml(courses) {
  let content =
    "<p>Below you can see the courses you can follow. click the courses you want to follow and add them to your profile.</p>";
  if (!courses?.length) {
    content = "<p>Looks like you are enrolled in all available courses</p>";
    return content;
  } else {
    content += `<form action="/enroll" method="POST">`;
    courses.forEach((course) => {
      content += enrollCourseCardhtml(course);
    });
    content += `<input type="submit" value="Enroll"></input>
          </form>`;
    return content;
  }
}

module.exports = { createCourseCatalogHtml };
