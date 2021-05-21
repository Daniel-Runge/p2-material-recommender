/**
 * This function returns a HTML card based on a course object.
 * @author Daniel Runge Petersen, Lars Emanuel Hansen, Mads Overgaard Nissum & Raymond Kacso
 * @param {object} course A single course parsed into the function
 * @returns A course card div to be placed in the enroll tab of a users profile
 */
function enrollCourseCardhtml(course) {
  // Design inspiration from https://codepen.io/FlorinPop17/pen/dyPvNKK
  if (!course) return Error;

  if (!course.CourseID || !course.CourseName) return Error;

  const card = `
    <div class="courseCard">
        <a class="course-preview">
            <h3 class="course-title">${course.CourseName}</h3>
            <h4>Number of Lectures</h4>
            <input name="${course.CourseID}" type="checkbox">Enroll</input>
        </a>
        <div class="course-info">
            <p>Description</p>
        </div>
    </div>`;
  return card;
}

/**
 * Helper function for profilehtml
 * @author Lars Hansen & Mads Nissum
 * @param {Object} courses is an object containing courseIDs & courseNames
 * @returns a html string
 */
function createCourseCards(courses) {
  let content = ``;
  if (!courses?.length) {
    content =
      "<p>Looks like you are not enrolled in any courses. Click the button below to add courses</p>";
    return content;
  } else {
    content = `<p>Below you can see all courses you are currently enrolled in. Click the cards for more information</p>`;
    courses.map((course) => {
      content += profileCourseCardshtml(course);
    });
    return content;
  }
}

/**
 * This function returns a HTML card based on a course object. Helper for createCourseCards.
 * @author Mads Overgaard Nissum & Lars Emanuel Hansen
 * @param {object} course A single course parsed into the function
 * @returns  A course card div to be placed on the profile page of the user
 */
function profileCourseCardshtml(course) {
  if (!course) return Error;

  if (!course.CourseName) return Error;

  const content = `
    <div class="courseCard">
        <a href="course/${course.CourseName}/" class="course-preview">
            <h3 class="course-title">${course.CourseName}</h3>
            <h4>Number of Lectures</h4>
        </a>
        <div class="course-info">
            <p>Description</p>
        </div>
    </div>`;
  return content;
}

module.exports = {
  enrollCourseCardhtml,
  profileCourseCardshtml,
  createCourseCards,
};
